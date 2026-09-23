# Wellhub SOLID API

API de check-in em academias, inspirada no modelo do TotalPass/GymPass, construída em Node.js com TypeScript. O projeto usa Fastify na camada HTTP e Prisma no acesso a dados, com a arquitetura organizada segundo os princípios SOLID para manter o código desacoplado, testável e fácil de evoluir.

## O que a aplicação faz

- **Usuários:** criação de conta, login e consulta do próprio perfil.
- **Academias:** cadastro e pesquisa por nome ou por localização próxima.
- **Check-ins:** registro de presença em uma academia, respeitando limites de distância e de frequência diária.

## Stack

- **Node.js** — runtime da aplicação no servidor.
- **TypeScript** — tipagem estática sobre o JavaScript.
- **Fastify** — framework HTTP leve e voltado a performance.
- **Prisma** — ORM responsável pela conversa com o PostgreSQL.
- **Zod** — validação e inferência de tipos a partir de esquemas.
- **Vitest** — execução dos testes unitários e de integração.
- **Docker** — sobe o PostgreSQL do ambiente local.
- **TSX** — roda arquivos TypeScript direto em desenvolvimento, sem build.
- **TSUP** — empacota o projeto para produção.

## Requisitos funcionais

- Criar uma conta na aplicação
- Fazer login com as credenciais cadastradas
- Consultar o perfil do usuário autenticado
- Consultar quantos check-ins o usuário autenticado já fez
- Listar o histórico de check-ins do usuário
- Procurar academias em um raio de até 10km
- Procurar academias pelo nome
- Registrar check-in em uma academia
- Validar um check-in existente
- Cadastrar uma nova academia

## Regras de negócio

- Um mesmo e-mail não pode ser usado em duas contas
- Só é permitido um check-in por usuário a cada dia
- O check-in exige que o usuário esteja a no máximo 100m da academia
- A validação do check-in expira 20 minutos após a criação
- Apenas administradores validam check-ins
- Apenas administradores cadastram academias

## Requisitos não funcionais

- Senhas armazenadas sempre em formato criptografado
- PostgreSQL como banco de dados da aplicação
- Listagens devolvidas em páginas de 20 registros
- Autenticação baseada em JWT (JSON Web Token)
