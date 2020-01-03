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

No backend da aplicação foi utlizado a porta local 3333 para ouvir as requisições. No entanto se esta porta estiver já estiver em uso você pode alterá-la para o que lhe for mais conveniente.

```
import app from './app';

app.listen(3333, () => {
  console.log('Server running on port 3333');
});
```

<h4>Terceiro Passo: Definindo variáveis ambiente</h4>

O banco de dados utilizado foi do tipo SQL, mais precisamente o 'Postgres', mas também foi necessário a utilização de um banco de dados chave-valor, neste caso o 'Redis' para a elaboração da 'queue' com o intuito de ordenar o envio de e-mails através do backend. E falando em e-mails, foi utilizado uma ferramenta para testar o envio destes, o 'MailTrap'. Para ter acesso ao 'MailTrap' é necessário a criação de uma conta grátis e assim os dados para a conexão com o servidor serão disponibilizados.

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

<h3>Frontend</h3>

<h4>Primeiro passo: Baixar as dependências</h4>

Após clonar ou baixar a código, acesse a pasta raiz pelo terminal e digite o seguinte comando.

```
yarn
```

Com isso a pasta 'node_modules' será baixada e com ela todas as dependências do seu projeto.

<h4>Segundo Passo: Definindo base_url do axios</h4>

A chamadas API foram feitas através do axios utilizando a baseURL:http://localhost3333. No entanto se esta porta estiver já estiver em uso você pode alterá-la para o que lhe for mais conveniente dentro de src/services/api.js

```
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export default api;
```

<h4>Terceiro Passo: Iniciando aplicação</h4>

Por fim, deve abrir o terminal e na pasta raiz digitar o código abaixo:
```
yarn start
```

Lembrando que o aplicativo foi testado somente com o navegador Chrome da Google.

<h3>Mobile</h3>

<h4>Primeiro passo: Baixar as dependências</h4>

Após clonar ou baixar a código, acesse a pasta raiz pelo terminal e digite o seguinte comando.

```
yarn
```

Com isso a pasta 'node_modules' será baixada e com ela todas as dependências do seu projeto.

<h4>Segundo passo: Definindo as variáveis ambiente</h4>
  
Assim como no frontend, nós também utilizamos uma porta local para conexão com o backend, no entanto, como no meu caso eu simulei um dispositivo android somente através do Android Studio, a baseURL obrigatóriamente é http://10.0.2.2:(a porta do servidor backend)

Já em relação às configurações do Reactotron, também temos uma particularidade quando utilizamos o sistema operacional android. É recomendado passar o ip da sua máquina dentro das configurações do Reactotron.

Portanto será necessário criar um arquivo .env e nele passar os seus dados. Dentro o projeto há o arquivo .env.example para você copiar e inserir seus parâmetros.

```
# Reactotron

REACTOTRON_HOST= // O ip da sua máquina

# Axios

AXIOS_URL= // 'http://10.0.2.2:(porta do servidor)' se estiver utilizando Android Studio, senão http://localhost:(porta do servidor)
```

<h4>Teceiro passo: Iniciando aplicativo no simulador</h4>
  
 Novamente abra o terminal e acesse a pasta raiz do projeto. Agora vamos digitar o código abaixo:
 
 ```
 react-native run-android
 ```
 
 Este comando somente funciona para rodar o app no Android e isto deve ser o suficiente para o aplicativo rodar no seu dispositivo. No entanto após rodar o comando acima uma vez, não é necessário executá-lo toda vez que quiser iniciar a aplicação novamente, ao invés disso, você pode inserir o código abaixo no terminal:
 
 ```
 react-native start
 ```


