<h1 align="center">
    <img src="./assets/logo.svg" alt="Logo"/>
</h1>

<h1 align="center">
    <img src="./assets/mockup.png" alt="Mockup"/>
</h1>

# GoBarber
Este é um projeto desenvolvido durante o bootcamp GoStack, da Rocketseat. Trata-se de uma aplicação que permite o agendamento de serviços de barbearia. A aplicação permite listagem de barbeiros disponíveis, agendamento de horários para clientes e acompanhamento dos compromissos para barbeiros. Também é possível realizar novos cadastros e utilizar autenticação dos usuários.

## 📝 Projeto
Foi utilizada uma API RESTfull para fornecer os dados, dando flexibilidade para distribuir a aplicação em múltiplas plataformas; e um SPA (Single Page Application) no front-end web para otimizar o desempenho e garantir a melhor experiência do usuário.


## ⚙️ Back-end

### Tecnologias
- Node.js
- TypeScript
- Express
- TypeORM
- MongoDB
- PostgreSQL
- JWT
- Celebrate
- Multer
- Tsyringe
- uuidv4
- Bcrypt
- Dotenv
- Handlebars
- Nodemailer
- ESLint
- Prettier
- EditorConfig
- Date-fns
- Jest
- Arquitetura REST


## 💻 Front-end web

### Tecnologias
- React
- TypeScript
- React Router DOM
- Context API
- React Icons
- UnForm
- Yup
- Styled-Components
- Polished
- Axios
- ESLint
- Prettier
- EditorConfig
- Jest


## 📱 Front-end mobile

### Tecnologias
- React Native
- TypeScript
- UnForm
- Styled-Components
- Context API
- React Navigation
- Axios
- Yup
- ESLint
- Prettier


## 🎨 Layout
O layout da aplicação está disponível no [Figma](https://www.figma.com/file/BXCihtXXh9p37lGsENV614/GoBarber).

## 🔧 Executar no seu PC

- Clone esse repositório;
- Vá para a pasta backend `cd backend`;
- Execute o comando para instalar as dependências, como `npm install` ou `yarn`;
- Crie um database no PostgreSQL com o nome "gostack_gobarber";
- Atualize o arquivo ormconfig.json com o usuário e senha do seu banco;
- Execute as migrations com o comando `yarn typeorm migration:run`;
- Inicie o backend rodando o comando `yarn dev:server` ou `npm dev:server`, seu backend vai iniciar na porta 3333;
- Abra um novo terminal na pasta raiz do projeto e então vá até a pasta web `cd web`;
- Execute o comando para instalar as dependências, como `npm install` or `yarn`;
- Após isso, execute o comando para iniciar o projeto, por exemplo: `npm run dev` ou `yarn start`;
- Acesse a aplicação em <strong> `http://localhost:3000`</strong>, mude a porta caso você tiver configurado outra.

## 🤔 Como contribuir

- Faça um fork desse repositório;
- Crie uma branch com as suas alterações: `git checkout -b my-feature`;
- Commit suas alterações: `git commit -m 'feat: my new feature'`;
- Faça um push para a sua branch: `git push origin my-feature`.

## 📜 Licença

> Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](https://github.com/jessicafpx/gostack-gobarber/blob/master/LICENSE.md) para mais detalhes.

---

##### <p align="center"> <strong> < desenvolvido por <a href="github.com/jessicafpx"> @jessicafpx</a> /> </strong> 👋