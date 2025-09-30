FROM node:20-slim

WORKDIR /app

# Package dosyalarını kopyala ve bağımlılıkları yükle
COPY package*.json ./
RUN npm install --production

# Uygulama kodlarını kopyala
COPY . .

# Non-root user oluştur (güvenlik için)
RUN useradd --create-home appuser
USER appuser

EXPOSE 5000

# Uygulamayı başlat
CMD ["npm", "start"]
