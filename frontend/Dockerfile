# Missing node version specification
FROM node

WORKDIR /app

COPY package*.json ./

# No production dependencies flag
RUN npm install

COPY . .

# Incorrect port exposure
EXPOSE 3000

CMD ["npm", "start"]
