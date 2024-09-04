FROM node:20-alpine

WORKDIR /kudos

COPY package.json package-lock.json ./ 
RUN npm ci

COPY prisma ./prisma
RUN npx prisma generate

COPY . .


RUN npm run build

EXPOSE 3000

CMD [ "npm","run","start" ]
