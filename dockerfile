# Estágio de construção (build)
FROM node:20-alpine AS builder
WORKDIR /app

# Copia arquivos de dependências e instala
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# Copia o restante do código e faz o build
COPY . .
RUN npm run build

# --------------------------------------------
# Estágio de produção (imagem final)
FROM node:20-alpine AS runner
WORKDIR /app

# Configura usuário não-root (segurança)
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copia arquivos do estágio de construção
COPY --from=builder --chown=nextjs:nodejs /app/package.json /app/package-lock.json ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

# Porta e usuário
USER nextjs
EXPOSE 3000
ENV PORT 3000
ENV NODE_ENV production

# Comando de inicialização
CMD ["node", "server.js"]