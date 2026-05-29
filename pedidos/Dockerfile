# Estágio 1: Build (Instalação de dependências)
FROM node:18-alpine AS builder

WORKDIR /usr/src/app

# Copia apenas os arquivos de dependência primeiro (aproveita cache do Docker)
COPY package*.json ./
RUN npm install --omit=dev

# Estágio 2: Produção (Imagem final enxuta e segura)
FROM node:18-alpine

# Define variável de ambiente para produção
ENV NODE_ENV=production

WORKDIR /usr/src/app

# Cria usuário não-root por questões de segurança (Best Practice)
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001

# Copia dependências instaladas no estágio de build
COPY --from=builder /usr/src/app/node_modules ./node_modules

# Copia o código fonte
COPY . .

# Altera a propriedade dos arquivos para o usuário não-root
RUN chown -R nodejs:nodejs /usr/src/app

# Troca para o usuário não-root
USER nodejs

# Expõe a porta do serviço
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
