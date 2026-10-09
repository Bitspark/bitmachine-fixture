FROM base
WORKDIR /app
COPY package.json package-lock.json ./
RUN --mount=type=bind,source=npm-cache,target=/npm-cache,rw \
    npm ci --offline --prefer-online=false --cache=/npm-cache --omit=dev --no-audit --no-fund
COPY server.js ./
USER 65534:65534
EXPOSE 8080
CMD ["node", "server.js"]
