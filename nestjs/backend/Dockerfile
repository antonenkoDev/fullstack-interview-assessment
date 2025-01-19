# Missing node version specification
FROM node

WORKDIR /app

COPY package*.json ./

# No production dependencies flag
RUN npm install

COPY . .

# Missing build step
CMD ["npm", "start"]
