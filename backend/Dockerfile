FROM node:20-slim

WORKDIR /app

#  copy Package and install package
COPY package*.json ./
RUN npm install --production

# copy code
COPY . .

# ceate Non-root user 
RUN useradd --create-home appuser
USER appuser

EXPOSE 5000

# run app
CMD ["npm", "start"]
