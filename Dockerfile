FROM node:20.10.0-slim AS build_backend

WORKDIR /app/backend

COPY ./backend /app/backend

RUN npm ci --slient && npm run build

FROM public.ecr.aws/lambda/nodejs:20 AS deploy

WORKDIR /app

COPY --from=build_backend /app/backend/.env ${LAMBDA_TASK_ROOT}
COPY --from=build_backend /app/backend/dist ${LAMBDA_TASK_ROOT}
COPY --from=build_backend /app/backend/node_modules ${LAMBDA_TASK_ROOT}/node_modules

WORKDIR ${LAMBDA_TASK_ROOT}
CMD ["lambda.handler"]

