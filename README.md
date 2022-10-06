This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). Hosted on [AWS Lambda](https://aws.amazon.com/lambda/) using [serverless-nextjs](https://serverless-nextjs.com/), see [deployment section](#deploy-on-aws-lambda-using-serverless-nextjs) for guidance.

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

## Deploy on AWS Lambda using Serverless-NextJS

### Pre-requisite

- NodeJS with NPM or yarn that already installed.
- [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html#getting-started-install-instructions).
- [Serverless CLI](https://www.serverless.com/framework/docs/getting-started).

### Deployment

- Setup [AWS Credentials](https://www.serverless.com/framework/docs/providers/aws/guide/credentials/).
- Create or clone NextJS project.
- Create a `serverless.yml` file at the root of your project and add your NextJS application as show below:

  ```yaml
  # serverless.yml

  nextApp:
    component: '@sls-next/serverless-component@3.7.0'
  ```

  > If you want to customize resources like a custom domain name or choose a runtime version you can check [`inputs` references](https://serverless-nextjs.com/docs/inputs).

- Deploy your app by executing command below from you project root:
  ```bash
  serverless
  ```

## References

If you get an error during the deployment proccess or want to learn more about serverless framework, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Serverless-NextJS Documentation](https://serverless-nextjs.com/docs/) - learn about architecture.
- [Serverless-NextJS FAQ](https://serverless-nextjs.com/docs/faq) - best place to solve common issues.
- [Serverless Framework](https://www.serverless.com/framework/docs) - core concept behind Serverless-NextJS.
- [AWS Lambda Documentantion](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html).

If you have questions or found any problem let me know by opening issue - your feedback and contributions are welcome!
