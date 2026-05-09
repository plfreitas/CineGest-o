# Guia Rápido: MongoDB para Usuários de Supabase

## 1. O que é o MongoDB?
É um banco de dados NoSQL orientado a documentos. Em vez de tabelas e colunas, usamos **Coleções** e **Documentos** (que parecem objetos JSON).

## 2. Por que usar Atlas (Cloud)?
- **Sempre online**: O app no seu celular vai funcionar mesmo com o PC desligado.
- **Grátis**: O nível M0 é suficiente para o MVP do CineGestão.
- **Escalabilidade**: Se o CineGestão crescer, o Atlas cresce junto.

## 3. MongoDB Compass
O Compass é a interface gráfica (como o DBeaver). Você cola o link do Atlas lá e consegue ver todos os filmes, editar sinopses e gerenciar aluguéis visualmente.

## 4. Como conectar no projeto
No arquivo `.env` do backend, vamos trocar:
`MONGO_URI=mongodb://localhost:27017/cinegestao`
Por:
`MONGO_URI=mongodb+srv://USUARIO:SENHA@cluster.mongodb.net/cinegestao`
