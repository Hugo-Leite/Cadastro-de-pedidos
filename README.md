
# Cadastro de pedidos

Nessa API desenvolvida com node.js e utilizando o framework express, facilita a organização e a rapidez no cadastro de pedidos, além de gerar id específicos com o pacote uuid para cada pedido. Com esse projeto desenvolvi minhas habilidades com node.js e express.


## Métodos

- Get: Com o método get é possivel visualizar todos os pedidos já feitos e buscar pedidos específicos por meio do id.
- Post: O post permite criar novos pedidos e gerar id automaticamente.
- Put: Buscando um pedido pelo id no put, é possível atualizar o mesmo.
- Delete: O delete faz o pedido que possui o id pesquisado seja apagado.
- Patch: Atualiza o status do pedido de acordo com o id para "Pronto".


## Rodando localmente

Clone o projeto

```bash
  git clone https://link-para-o-projeto
```

Instale as dependências

```bash
  npm install express --save
```
```bash
  npm install uuid
```

Inicie o servidor

```bash
  node index.js
```


## Stack utilizada

![JAVASCRIPT](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)&nbsp;
![NODE.JS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)&nbsp;
![EXPRESS.JS](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)&nbsp;

