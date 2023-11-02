# Integrantes

  * Alexandre Ferreira Arigoni
  * João Vítor Bicalho da Silva

# Explicação do Sistema

O sistema consiste em um jogo de quiz. Primeiramente aparece uma tela para iniciar o jogo, em seguida você poderá escolher a categoria das perguntas que quer responder. Após esse passo, as perguntas irão aparecer, você terá a cada pergunta a possibilidade de excluir uma alternativa ou pedir uma dica (apenas algumas questões possui dica). Ao final de todas as perguntas, aparecerá uma tela onde irá aparecer a sua pontuação.

# Tecnologias utilizadas

Foi utilizado para esse projeto o framework React, é um framework de JavaScript bastante utilizado para desenvolvimento web (que é o caso do sistema atual). Para lidar com os estados do jogo (início, escolha de categoria, jogando e fim), foi utiliado o Context e o Provider, ambos do React, eles permitem que se trabalhe com "páginas" sem necessáriamente usar rotas específicas pra cada uma. Além disso, como toda aplicação web, são utilizados conceito de HTML (para estrutura a página) e CSS (para estilizar a página).

# Instruções de execução

OBS: é necessário que tenha o "node" e o "npm" instalados em seu computador

1. Clonar o repositório
2. Entrar no diretório "Quiz_React", que foi gerado após a clonagem
3. Executar o comando "npm install"
5. Executar o comando "npm run dev" e abrir no navegador a porta localhost indicada no terminal (provavelmente "localhost:5173")

  Em caso de execução do "Lizard", é necessario entrar na pasta "src" e nela rodar o comando "lizard"
