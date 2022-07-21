# Tips for devs

Está simples aplicação retorna ao usuario dicas de forma randomica.

Projeto realizado utilizando o [Node.js](https://nodejs.org/en/) com framework [Express](https://expressjs.com/).

## Pré-Requisitos

* Node.js  v.16.15.1
* NPM v.8.11.0

## Packages

* Express
* Nodemon

## Scripts available <br><br>

```
npm install
```
```
npm start
```
```
npm run dev
```

## Rotas implementadas

 * __GET  /tips__

    Resposta enviada de forma randomica
    ```json
    {
        "tips" : "dica..."
    }
    ```

 * __POST /create__

    Esquema da requisição
    ```json
    {
        "tips" : "[insira sua dica aqui]"
    }
    ```
 * __POST /create/generate__ <br>
    Essa rota gera automaticamente algumas dicas para ser visualisadas usando o GET.