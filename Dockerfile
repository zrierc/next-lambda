FROM node:16.17-alpine3.16 as builder

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY . .

RUN yarn install --production --frozen-lockfile && yarn build


FROM node:16.17-alpine3.16 as runner

WORKDIR /app

# setup lambda adapter
COPY --from=public.ecr.aws/awsguru/aws-lambda-adapter:0.4.0 /lambda-adapter /opt/extensions/lambda-adapter

ENV PORT=3000
ENV NODE_ENV=production

COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

CMD ["node", "server.js"]