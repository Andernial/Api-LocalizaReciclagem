# Api Localiza Reciclagem ♻️

## 📗Descrição
Esta Api foi desenvolvida com o intuito de auxiliar as pessoas a encontrarem pontos de coleta seletiva.

O Front-End do projeto atualmente é só uma das maneiras de consumir a api e ainda vai ser atualizado para acessar mais rotas.

## 👾Tecnologias utilizadas
node, express, cors, nodemon,sequelize 

## ➡️Atualização mais Recente 

Versão 0.0.1 -> Atualização de Lançamento

## ⚙️Configuração do Ambiente

Conecte o Sequelize com o banco de dados de sua preferência 
```
const sequelize = new Sequelize("Reciclagem", "root", "", {
    host: "localhost",
    dialect: "mysql"
});
```
nesse caso será necessario criar um novo banco de dados com o nome "Reciclagem" ou um nome de sua preferência.

rota padrão do projeto: 

```
http://localhost:3333
```

Configure o cors para consumir a api de outras origens : 
```
const corsOptions = {
    origin: 'url', 
    methods: 'GET,POST,DELETE,PUT',           
    optionsSuccessStatus: 200     
  }
```
## 📫Endpoints

### Registrando Local

- **Endpoint**: `/localhost:porta/city/add-location`
- **Método HTTP**: POST
- **Descrição**: Cria um novo local no banco de dados.

#### Parâmetros de Requisição
- `name`: O nome do EcoPonto.
- `public_place`: Logradouro
- `number`: Número da rua 
- `complement`: Complemento Opcional
- `neighborhood`: Bairro
- `city`: Cidade
- `state`: Estado
- `zip_code`: O cep do local


#### Exemplo de Requisição

```json
POST /localhost:porta/city/add-location
{
	{
	"name":"Ecoponto",
	"public_place":"R. rua",
	"number": "123",
	"complement": "vazio",
	"neighborhood":"bairro",
	"city":"São Paulo",
	"state":"SP",
	"zip_code": "00000-000"
}
}
```
#### Resposta

```json
{
	"message": "local criado com sucesso!",
	"local": {
		"id":"respectivo ao auto_increment",
		"name":"Ecoponto",
	   	 "public_place":"R. rua",
	    	"number": "123",
	   	 "complement": "vazio",
	   	 "neighborhood":"bairro",
	   	 "city":"São Paulo",
	   	 "state":"SP",
	   	 "zip_code": "00",
		"updatedAt": "data",
		"createdAt": "data"
	}
}
```

### Mostra todos os locais 

- **Endpoint**: `/localhost:porta/city/all-location`
- **Método HTTP**: GET
- **Descrição**: Mostra todos os locais disponiveis no banco de dados.

#### Exemplo de Requisição

```json
POST /localhost:porta/city/all-location

```
#### Resposta

```json
{
	"locations": [
	 {
		"id":"respectivo ao auto_increment",
		"name":"Ecoponto",
	    "public_place":"R. rua",
	    "number": "123",
	    "complement": "vazio",
	    "neighborhood":"bairro",
	    "city":"São Paulo",
	    "state":"SP",
	    "zip_code": "00",
		"updatedAt": "data",
		"createdAt": "data"
	}
    ]
}
```

### Mostrando Local Por Cidade

- **Endpoint**: `/localhost:porta/city/by-city?`
- **Método HTTP**: GET
- **Descrição**: Mostra local de acordo com a cidade passada na query.

#### Querys de Requisição
- `city`: Cidade



#### Exemplo de Requisição

```json
POST /localhost:porta/city/by-city?city=São Paulo
```
#### Resposta

```json
{
	"message": "local criado com sucesso!",
	"local": {
		"id":"respectivo ao auto_increment",
		"name":"Ecoponto",
	    "public_place":"R. rua",
	    "number": "123",
	    "complement": "vazio",
	    "neighborhood":"bairro",
	    "city":"São Paulo",
	    "state":"SP",
	    "zip_code": "00",
		"updatedAt": "data",
		"createdAt": "data"
	}
}
```

### Atualizando Local

- **Endpoint**: `/localhost:porta/city/update-location/:id?`
- **Método HTTP**: POST
- **Descrição**: Atualiza o local dentro do banco de dados de acordo com as querys passadas.

#### Querys de Requisição
- `name`: O nome do EcoPonto.
- `public_place`: Logradouro
- `number`: Número da rua 
- `complement`: Complemento Opcional
- `neighborhood`: Bairro
- `city`: Cidade
- `state`: Estado
- `zip_code`: O cep do local


#### Exemplo de Requisição

```json
POST /localhost:porta/city/update-location/1?name=ecoponto2&neighborhood=teste

```
#### Resposta

```json
{
	"update": {
		"id":"respectivo ao auto_increment",
		"name":"Ecoponto2",
	    "public_place":"R. rua",
	    "number": "123",
	    "complement": "vazio",
	    "neighborhood":"teste",
	    "city":"São Paulo",
	    "state":"SP",
	    "zip_code": "00",
		"updatedAt": "data",
		"createdAt": "data"
    }

}
```

### Deletando Local

- **Endpoint**: `/localhost:porta/city/delete/:id`
- **Método HTTP**: DELETE
- **Descrição**: Deleta local de acordo com o id.


#### Exemplo de Requisição

```json
POST /localhost:porta/city/delete/:id

```

#### Resposta


```json
{
	"message": "local deletado com sucesso!"
}
```

## 🖥️Para Utilizar o Front Exemplo
Como dito antes o front não é o foco desse projeto mas ele será atualizado para ter acesso as outras rotas.

Para acessar o front de exemplo desta api basta trocar a url do `corsOptions` encontrado na pasta middlewares para a url de acordo.


