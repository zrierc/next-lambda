This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). Hosted on [AWS Lambda](https://aws.amazon.com/lambda/) using [aws-lambda-web-adapter](https://github.com/awslabs/aws-lambda-web-adapter), see [deployment section](#deploy-on-aws-lambda-using-lambda-web-adapter-container) for guidance.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Deploy on AWS Lambda using Lambda Web Adapter (container)

### Pre-requisite

- Docker.
- NodeJS with NPM or yarn that already installed.
- [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html#getting-started-install-instructions).
- [AWS SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html).

### Deployment

- Setup [AWS Credentials](https://www.serverless.com/framework/docs/providers/aws/guide/credentials/).
- Create or clone NextJS project.
- Configure NextJS to enable standalone deployment by adding this line below to `next.config.js`:

  ```js
  /** @type {import('next').NextConfig} */
  const nextConfig = {
    ...,
    output: 'standalone',
    ...
  };

  module.exports = nextConfig;
  ```

- Inside your `Dockerfile` add one line to copy Lambda Web Adapter binary to /opt/extensions inside your container.

  ```Dockerfile
  ...

  COPY --from=public.ecr.aws/awsguru/aws-lambda-adapter:0.4.1 /lambda-adapter /opt/extensions/lambda-adapter

  ENV PORT 3000
  ENV NODE_ENV production

  ...

  CMD ["node", "server.js"]
  ```

  By default Lambda Web Adapter assumes the web app is listening on port 8080. Because NextJS server running in port 3000 by default, we need to specify the port by adding environment variable called `PORT` as shown above.

  `NODE_ENV` used to tell that app running on production stage.

  > Lambda Web Adapter provides [custom configuration](https://github.com/awslabs/aws-lambda-web-adapter#configurations) that can be configured via environment variables like `PORT`.

- A file called `template.yaml` at the root of your project is used to tell AWS SAM to define AWS resources, including Lambda functions and an API Gateway.

  > If you want to customize or adding another resources, you can check [`AWS SAM` references](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-specification.html) or you can check out [example nextjs application](https://github.com/awslabs/aws-lambda-web-adapter/tree/main/examples/nextjs) that provided by AWS Lambda Web Adapter repository.

- Build your application by executing this commands:

  ```bash
  aws ecr-public get-login-password --region us-east-1 | docker login --username AWS --password-stdin public.ecr.aws

  sam build
  ```

  This command compiles the application, create image, login to AWS ECR and prepares a deployment package in the `.aws-sam` sub-directory.

- To deploy your application for the first time, run the following in your shell:

  ```bash
  sam deploy --guided
  ```

  > With AWS Serverless Application Model (SAM), you can also invoke or test your lambda function locally. See [AWS SAM documentation](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-test-and-debug.html) to learn more.

## References

If you get an error during the deployment proccess or want to learn more about AWS Serverless Application Model (SAM), take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [AWS Lambda Web Adapter Repository](https://github.com/awslabs/aws-lambda-web-adapter) - Find latest documentation about lambda web adapter.
- [Sample nextjs application built with lambda web adapter](https://github.com/awslabs/aws-lambda-web-adapter/tree/main/examples/nextjs).
- [AWS SAM](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/what-is-sam.html) - learn about framework to build serverless applications.
- [AWS Lambda Documentantion](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html) - learn more about serverless architecture and AWS Lambda.

If you have questions or found any problem let me know by opening issue - your feedback and contributions are welcome!
