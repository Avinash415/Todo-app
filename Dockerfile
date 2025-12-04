# 1. Base image
FROM node:22-alpine AS base

# 2. Set working directory
WORKDIR /app

# 3. Copy package.json + package-lock.json
COPY package*.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy rest of the project
COPY . .

# 6. Build Next.js app
RUN npm run build

# 7. Production stage
FROM node:22-alpine AS production

WORKDIR /app

COPY --from=base /app/package*.json ./
COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/.next ./.next
COPY --from=base /app/public ./public

ENV PORT=10000
EXPOSE 10000

CMD ["npm", "start", "--", "-p", "10000"]

