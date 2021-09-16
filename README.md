# API sobre Akuma no Mi de One Piece - NodeJs

![Akuma no Mi](https://onepieceex.net/wp-content/uploads/2017/04/Akuma-no-mi1.jpg.webp)

>API criada para guardar algumas informções sobre as akuma no mi (fruta do diabo) do anime One Piece. Foi utilizado a linguagem de programação JavaScript e o banco de dados MongoDb. Neessa API foi criado um CRUD completo das akuma no mi.

Para utilizar o projeto faça o dowload do arquivo zip, ou faça o clone em seu computador utilizando o Git. Execute o comando `npm i` dentro da pasta do projeto em seu computador(a pasta que contém o arquivo package.json), para baixar as dependencias do projeto.

## Executando o projeto

*Essa API utiliza o mongodb drive como banco de dados, então antes de testar a API certifique se você possui o MongoDb instalado em seu computador(https://www.mongodb.com/try/download/community).*

Além disso, você precisa criar o arquivo .env com a url do seu banco, *utilize o arquivo .env.exemple para criar o seu*. Esse é um exemplo de string de conexão com o banco de dados: mongodb://localhost:27017/onepiece_db.

Agora você pode executar o projeto: 
* Para executar o projeto com o nodemon, digite no terminal: 
```bash
npm run dev
```
* Para executar o projeto com o node, digite no terminal: 
```bash
npm start
```

## Testando a API

Você pode utilizar as ferramentas:

* Postman
* Insomnia
* Thunder Client (plugin no vsCode)

Exemplos de URLs: 
* Essa é a URL de teste padrão: http://localhost:3000/read-all
* Para buscar por ID, insira o ID na URL: http://localhost:3000/read-by-id/5
* Para editar, insira o ID na URL: http://localhost:3000/update/3
* Para apagar, insira o ID na URL: http://localhost:3000/delete/1 
* Para fazer uma busca com query string, esse é um exemplo de URL:  http://localhost:3000/filter?usuario=Sabo

> Nesse site você consegue encontrar informações de akuma no mi para testar os end-points: https://onepiece.fandom.com/pt/wiki/Akuma_no_Mi

Essa é a estrutura JSON para fazer o POST e o PUT:

```json
{
    "nome": "Mera Mera no Mi",
    "tipo": "Logia",
    "usuario": "Sabo",
    "imagem": "https://static.wikia.nocookie.net/onepiece/images/2/29/Mera_Mera_no_Mi.png/revision/latest/scale-to-width-down/250?cb=20140409083856&path-prefix=pt",
    "descricao": "A Mera Mera no Mi é uma Akuma no Mi do tipo Logia que permite ao usuário criar, controlar e se transformar em fogo à vontade, transformando-o em um Humano de Fogo."
}
```

Obrigado por testar e utilizar minha API, que foi feita com carinho por uma fã de One Piece, volte sempre!
