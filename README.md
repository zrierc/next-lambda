This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). Hosted on [AWS Lambda](https://aws.amazon.com/lambda/) using [aws-lambda-web-adapter](https://github.com/awslabs/aws-lambda-web-adapter), see [deployment section](#deploy-on-aws-lambda-using-lambda-web-adapter-zip-packages) for guidance.

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

## Deploy on AWS Lambda using Lambda Web Adapter (zip packages)

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

- Create start-up script called `run.sh` to run/start web app.

  ```bash
  #!/bin/bash

  exec node server.js
  ```

- Since we build app in zip packages, we need `Makefile` file for build app and call it inside `template.yaml` as build method.

- A file called `template.yaml` at the root of your project is used to tell AWS SAM to define AWS resources, including Lambda functions and an API Gateway.

  There are additional steps that need to be taken when we want to deploy using zip packages:

  - Attach Lambda Web Adapter layer to your function inside `template.yaml`.
    - x86_64: `arn:aws:lambda:${AWS::Region}:753240598075:layer:LambdaAdapterLayerX86:6`
    - arm64: `arn:aws:lambda:${AWS::Region}:753240598075:layer:LambdaAdapterLayerArm64:6`
  - Configure Lambda environment variable `AWS_LAMBDA_EXEC_WRAPPER` to `/opt/bootstrap`. You can also add this variable inside `template.yaml`.

  > For details, please check out the guide to [package Lambda Web Adapter as zip](https://github.com/awslabs/aws-lambda-web-adapter#lambda-functions-packaged-as-zip-package-for-aws-managed-runtimes).

- To build and deploy your application for the first time, run the following in your shell:

  ```bash
  sam build
  sam deploy --guided
  ```

  See [the references section](#references) below for more detailed information.

## References

If you get an error during the deployment proccess or want to learn more about AWS Serverless Application Model (SAM), take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [AWS Lambda Web Adapter Repository](https://github.com/awslabs/aws-lambda-web-adapter) - Find latest documentation about lambda web adapter.
- [Sample nextjs application built with lambda web adapter - zip packages](https://github.com/awslabs/aws-lambda-web-adapter/tree/main/examples/nextjs-zip).
- [AWS SAM](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/what-is-sam.html) - learn about framework to build serverless applications.
- [AWS Lambda Documentantion](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html) - learn more about serverless architecture and AWS Lambda.

If you have questions or found any problem let me know by opening issue - your feedback and contributions are welcome!
