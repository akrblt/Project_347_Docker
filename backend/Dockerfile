FROM node:20-slim

# App directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install --only=production

# Copy source
COPY . .

# Run as non-root
RUN useradd --create-home appuser
USER appuser

EXPOSE 5000
CMD ["npm", "start"]
