# Comandos

### Node

```
node -v #verifica versão do node
npm -v #verifica versão do npm
npm init #cria o package json
npm i #instala todas as dependências listadas no package.json
npm i nome-do-pacote #instala pacotes
npm uninstall #desinstala os pacotes
npm run nome-do-script #executa um script do package.json
npm start #executa o script start do package.json
```

### Git

```
git config --global user.name "Seu Nome"
git config --global user.email "seuemail@gmail.com"
git remote add origin https://github.com/seugithub/seuprojeto.git
```

### Prisma

```
npm i prisma -D (instala prisma como dependência de desenvolvimento)
npx prisma init (inicializa o prisma no projeto prisma/schema.prisma e .env)
npm install @prisma/client (Instala o cliente do prisma para importação no model)
npx prisma db pull (gera o modelo a partir do banco criado)
npx prisma db push (gera o banco a partir do modelo)
npx prisma generate (cria as classes baseadas no modelo atual)
```
