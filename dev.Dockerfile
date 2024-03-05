FROM node:20.10.0-slim AS build

ARG TARGET
ENV TARGET=${TARGET}


WORKDIR /app
COPY ./${TARGET} /app/${TARGET}

RUN cd ${TARGET} && npm ci
CMD cd ${TARGET} && npm start