# Serviço: 1
    O aluno deve desenvolver duas estruturas de backend , sendo a primeira para cadastrar usuários, onde este deva conter os seguintes campos: nomeusuario, email, senha, nomecompleto, telefone, datacadastro. Nesta estrutura deve haver as seguintes ações:
        - cadastrar usuario;
        - criptografar a senha;
        - autenticar usuário;
        - gerar o token com jwt;
        - alterar senha.


    Este primeiro serviço irá gerar um token todas as vezes que o usuário logar. Com o token gerado será possível acessar o segundo serviço. Então quando fizer a requisição de alguma rota do segundo serviço será necessário passar o token.