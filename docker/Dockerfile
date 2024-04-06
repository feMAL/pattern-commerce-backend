ARG IMAGE_NAME=ms-paz-ecommerce-v1
ARG APP_PORT=3031
ARG NODE_VERSION=18.13-alpine
ARG BASE_IMG_REPO_URL=node

FROM ${BASE_IMG_REPO_URL}:${NODE_VERSION}

LABEL name=${IMAGE_NAME}

RUN mkdir -p /opt/paz-ecommerce && chown -R node:node /opt/paz-ecommerce

WORKDIR /opt/paz-ecommerce
USER node

COPY ../package.json .
COPY ../yarn.lock .
COPY ../tsconfig*.json .
COPY ../nest-cli.json .
COPY --chown=node:node ../node_modules/ ./node_modules/
COPY --chown=node:node ../dist/ ./dist/


EXPOSE ${APP_PORT}
ENTRYPOINT ["yarn", "start:prod"]