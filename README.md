<h1 align="center">
    <img alt="GoStack" src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/bootcamp-header.png" width="200px" />
</h1>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/rocketseat/bootcamp-gostack-desafio-06?color=%2304D361">

  <a href="https://rocketseat.com.br">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%2304D361">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">
</p>

# Módulo 7: RocketShoes

Desenvolvimento de um e-commence com ReactJS, Redux e React Hooks.

## Passo a passo das instalações de todas as bibliotecas e plugins:

### 1º Passo: Criar projeto

```
npx create-react-app my-app ou yarn create-app my-app
```

### 2º Passo: Rodar yarn para atualizar e resolver pacotes

```
yarn
```

### 3º Passo: Configurar EditorConfig

Crie o arquivo **.editorconfig** pelo menu de contexto do vscode.

```js
root = true

[*]
end_of_line = lf
indent_style = space
indent_size = 2
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```

### 4º Passo: Instalar e Configurar Eslint em ambiente de dev.

Usado para informar erros no código

```
yarn add eslint -D
```

#### Iniciar Configurações:

```
yarn add eslint –init
```

```
	To check syntax, find problems, and enforce code style
	JavaScript modules (import/export)
	React
	Does your project use TypeScript? (y/N) N
	(*) Browser
	Use a popular style guide
	Airbnb (https://github.com/airbnb/javascript)
	JavaScript
	Would you like to install them now with npm? (Y/n) Y
```

#### Configurações Finais:

Excluir arquivo **package-lock.json**.
Executar `yarn` na raiz do projeto para atualizar as dependências.

### 5º Passo: Instalar e Configurar Eslint/Prettier em Ambiente Dev.

Prettier é usado para formatar e deixar visualmente melhor o código. E todas as bibliotecas abaixo são para que todos se comuniquem e sejam relacionados, até mesmo o babel-eslint que integra a versão mais atualizada do JavaScript.

```
yarn add prettier eslint-config-prettier eslint-plugin-prettier babel-eslint -D
```

### 6º Passo: Instalar Biblioteca de Rotas.

```
yarn add react-router-dom
```

### 7º Passo: Instalar Estilos Globais com StyledComponents.

É uma biblioteca de estilização com a sintaxe mais próxima do css.

```
yarn add styled-components
```

### 8º Passo: Instalar Ícones.

Pacote de ícones do react.

```
yarn add react-icons
```

### 9º Passo: Instalar Biblioteca de Cores.

Biblioteca para manipulação de cores

```
yarn add polished
```

### 10º Passo: Instalar API.

Api fake da Rocketseat.

```
yarn global add json-server
```

Criar arquivo **server.json** na raiz do projeto com as informações:

```js
{
  "stock": [
    {
      "id": 1,
      "amount": 3
    },
    {
      "id": 2,
      "amount": 5
    },
    {
      "id": 3,
      "amount": 2
    },
    {
      "id": 4,
      "amount": 1
    },
    {
      "id": 5,
      "amount": 5
    },
    {
      "id": 6,
      "amount": 10
    }
  ],
  "products": [
    {
      "id": 1,
      "title": "Tênis de Caminhada Leve Confortável",
      "price": 179.9,
      "image": "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg"
    },
    {
      "id": 2,
      "title": "Tênis VR Caminhada Confortável Detalhes Couro Masculino",
      "price": 139.9,
      "image": "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg"
    },
    {
      "id": 3,
      "title": "Tênis Adidas Duramo Lite 2.0",
      "price": 219.9,
      "image": "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg"
    },
    {
      "id": 5,
      "title": "Tênis VR Caminhada Confortável Detalhes Couro Masculino",
      "price": 139.9,
      "image": "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg"
    },
    {
      "id": 6,
      "title": "Tênis Adidas Duramo Lite 2.0",
      "price": 219.9,
      "image": "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg"
    },
    {
      "id": 4,
      "title": "Tênis de Caminhada Leve Confortável",
      "price": 179.9,
      "image": "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg"
    }
  ]
}
```
Fonte: https://skylab.rocketseat.com.br/api/files/1562597446083.json

### 11º Passo: Instalar Axios.

Biblioteca para interagir com apis e realizar requisições

```
yarn add axios
```

### 12º Passo: Rodar Servidor da API.

A API será definida na porta 3333.

```
json-server server.json -p 3333
```
ou
```
json-server server.json -p 3333 -w
```

O uso do `-w` é para o servidor da api ficar ouvindo o arquivo toda vez que tiver alguma alteração no arquivo **server.json**. Use a segunda opção caso precise realizar muitas alterações nesse arquivo ao longo do desenvolvimento, caso contrário, a primeira opção já basta. Caso rode a primeira opção e em algum momento precise realizar alguma atualização nesse arquivo, é preciso rodar novamente o comando acima.

Depois, teste seu API acessando: http://localhost:3333/products

#### Algumas rotas:
Acessar único produto: http://localhost:3333/products/4
Acessar estoque: http://localhost:3333/stock

### 13º Passo: Instalar Redux e integração React com Redux.

Biblioteca para gerenciar o estado do app.

```
yarn add redux react-redux
```

### 14º Passo: Instalar Reactotron e integração Reactotron com Redux.

Biblioteca usada para debugar app no software Reactotron

```
yarn add reactotron-react-js reactotron-redux
```

É importante que tenha instalado antes o software Reactotron na máquina. A instalação pode ser obtida em https://github.com/infinitered/reactotron/blob/master/docs/installing.md

### 15º Passo: Instalar Immer.

Immer é usado para lidar com objetos e arrays que são imutáveis dentro do React ou qualquer outra aplicação que use JavaScript.

```
yarn add immer
```

### 16º Passo: Instalar Redux Saga.

Biblioteca para o uso de Midleware com Redux para interceptar as actions e fazer uma busca em API ou banco de dados.

```
yarn add redux-saga
```

### 17º Passo: Instalar Reactotron com integração com Saga.

Plugin para obter mais detalhes sobre o fluxo das informações requisitadas.

```
yarn add reactotron-redux-saga
```

### 18º Passo: Instalar React Toastify.

Biblioteca para exibir mensagens de erros, avisos e sucessos com visual melhor.

```
yarn add react-toastify
```

### 19º Passo: Instalar History.

Biblioteca para controlar as rotas.

```
yarn add history
```

### 20º Passo: Instalar Plugin do Eslint para utilização do React Hooks.

Plugin para avisar se estamos utilizando toda essa nova api do React da forma correta.

```
yarn add eslint-plugin-react-hooks -D
```

### Aplicação

![Rocketshoes](assets/rocketshoes.gif)
