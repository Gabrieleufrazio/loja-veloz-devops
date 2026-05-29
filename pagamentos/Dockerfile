FROM node:18-alpine AS builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --omit=dev

FROM node:18-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app

RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001

COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY . .
RUN chown -R nodejs:nodejs /usr/src/app

USER nodejs
EXPOSE 3000
CMD ["npm", "start"]
