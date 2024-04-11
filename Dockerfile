FROM node:20.10.0-slim AS build_backend

WORKDIR /app/backend

COPY ./backend /app/backend

RUN npm ci --slient && npm run build

FROM node:20.10.0-slim AS deploy

WORKDIR /app

COPY --from=build_backend /app/backend/dist /app/backend/dist
COPY --from=build_backend /app/backend/node_modules /app/backend/node_modules

CMD ["dist/main.handler"]

