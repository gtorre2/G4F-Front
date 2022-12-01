# Lojavirtual - Template

Descrição:
- App Loja virtual que realiza cadastro, listagem, edição, busca e remoção de produtos.
- O sistema conta com uma interface amigável, fácil acesso e também possui validações com mensagens de retorno para o usuário.

Tecnologias utilizadas:

FRONT:
- Angular 4 com o Angular CLI 1.4
- Reactive Forms (Angular 4)
- Observables (Angular 4)
- Typescript
- NodeJs
- NPM
- Angular Material para Angular 4
- Testes unitários com Jasmine e Karma

BACK:
- Spring Boot (Framework Java)
- JPA Repository
- RESTFul WebServices
- JUnit 4
- Banco de dados H2 (para facilitar a execução do projeto)

Requerimentos do sistema:
- Maven
- JRE 8 ou superior
- NPM versão 3.10.10 ou superior
- Node 6.10.2 ou superior
- Conexão com a internet

Instalação:
- Executar o comando NPM "npm install" na raíz da pasta FRONT 
- Executar o comando Maven "mvn clean install" na raíz da pasta BACK 

Execução:
- Executar o comando NPM "ng serve" na raíz da pasta FRONT.
 Obs.: para executar em uma porta específica acrescentar o parâmetro "--port" como no seguinte exemplo: "ng serve --port 3000".
- Executar o comando Maven "mvn spring-boot:run" na raíz do projeto BACK

FRONT:
- Acessar ao sistema através do endereço abaixo. A porta pode ser diferente de acordo com sua escolha:
- http://localhost:4200/

BACK:
- Acesso a API da aplicação através do client rest de sua preferencia
- http://localhost:8080

Executar os testes unitários na aplicação do FRONT
- execute o comando "ng test" na raíz da pasta FRONT.
# G4F-Front
