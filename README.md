# Gympoint-Rocketseat

Backend / Frontend / Mobile

<h3>Backend</h3>

<h4>Primeiro Passo: Baixar as dependências</h4>

Após clonar ou baixar a código, acesse a pasta raiz pelo terminal e digite o seguinte comando.

```
yarn
```

Com isso a pasta 'node_modules' será baixada e com ela todas as dependências do seu projeto.

<h4>Segundo Passo: Definindo porta do servidor</h4>

No backend da aplicação todas as funcionalidades obrigatórias foram inseridas no código. A chamadas API foram feitas através do axios utilizando a porta local 3333. No entanto se esta porta estiver já estiver em uso você pode alterá-la para o que lhe for mais conveniente.

```
import app from './app';

app.listen(3333, () => {
  console.log('Server running on port 3333');
});
```

<h4>Terceiro Passo: Definindo variáveis ambiente</h4>

O banco de dados utilizado foi do tipo SQL, mais precisamente o 'PostgresSQL', mas também foi necessário a utilização de um banco de dados chave-valor, neste caso o 'Redis' para a elaboração da 'queue' com o intuito de ordenar o envio de e-mails através do backend. E falando em e-mails, foi utilizado uma ferramenta para testar o envio destes, o 'MailTrap'. Para ter acesso ao 'MailTrap' é necessário a criação de uma conta grátis e assim os dados para a conexão com o servidor serão disponibilizados.

No quesito segurança, foi inserido uma rotina (mais precisamente um middleware) para a validação dos dados de log do usuário atrvés da ferramenta JWT.

Portanto, é necessário a criação de um arquivo .env na raiz do projeto e a defnição das variáveis ambiente com o dados do seu PostgresSQL, Redis, Mailtrap e a criação de uma senha JWT. Segue o .env.example:

```
# Auth

APP_SECRET= // SegredoJWT de sua preferência

# Database

DB_HOST= // Host bando de dados
DB_USER= // User bando de dados
DB_PASS= // Password banco de dados
DB_NAME= // Name banco de dados

# Redis

REDIS_HOST= // Host do Redis
REDIS_PORT= // Porta do Redis

# Mail

MAIL_HOST= // Host do MailTrap
MAIL_PORT= // Porta do MailTrap
MAIL_USER= // User do MailTrap
MAIL_PASS= // Password do MailTrap
```

<h4>Quarto Passo: Iniciando Migrations e Seeders</h4>

Após a criação do .env e a inserção correta dos seus dados na aplicação agora é o momento da criação das tabelas no banco de dados e a anexação do seed. Para isso os seguintes comandos:

Migrations
```
yarn sequelize db:migrate
```

Seeds
```
yarn sequelize db:seed:all
```

<h4>Quinto Passo: Iniciando aplicação</h4>

Por fim, para inicilizar a aplicação você deve abrir dois terminais. No primeiro deles você deve rodar o servidor 'principal' com o comando:
```
yarn dev
```

O segundo terminal servirá para inicializar o Redis através do comando abaixo:
```
yarn queue
```
