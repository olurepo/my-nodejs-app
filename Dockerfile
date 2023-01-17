FROM node:14.14.0-alpine
WORKDIR "/myapp"
COPY ./package.json ./
RUN npm install
COPY ./ ./
CMD ["npm", "run", "test", "start"]