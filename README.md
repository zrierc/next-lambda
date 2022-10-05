This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). Hosted on [AWS Lambda](https://aws.amazon.com/lambda/), see [deployment section](#deploy-on-aws-lambda) for more details.

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

## Deploy on AWS Lambda

This project is intended to be deployed to [AWS Lambda](https://aws.amazon.com/lambda/). There are several ways to deploy NextJS to AWS Lambda.

- The first and simple method is using [serverless-nextjs](https://serverless-nextjs.com/) powered by [Serverless Framework](https://www.serverless.com/).
- Another method is using [aws-lambda-web-adapter](https://github.com/awslabs/aws-lambda-web-adapter) with [AWS SAM](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/what-is-sam.html).

Check out each branch of this repository to learn more about each deployment.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
