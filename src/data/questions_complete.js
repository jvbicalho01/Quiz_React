const data = [
  {
    category: "Conhecimentos gerais",
    questions: [
      {
        question: "Qual é o animal que aparece no logotipo da Ferrari?",
        options: ["Leão", "Cavalo", "Tigre", "Leopardo"],
        answer: "Cavalo",
      },
      {
        question: "Qual é o nome do inventor do telefone?",
        options: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Guglielmo Marconi"],
        answer: "Alexander Graham Bell",
      },
      {
        question: "O pão de queijo é um prato típico de qual estado brasileiro?",
        options: ["Rio de Janeiro", "Minas Gerais", "São Paulo", "Bahia"],
        answer: "Minas Gerais",
        tip: "Tem como capital a cidade de Belo Horizonte",
      },
      {
        question: "Qual inventor brasileiro é conhecido com o “pai da aviação”?",
        options: ["Tom Jobim", "Paulo Coelho", "Santos Dumont", "Ary Barroso"],
        answer: "Santos Dumont",
      },
      {
        question: "Quantos dias tem um ano bissexto?",
        options: ["364 dias", "365 dias", "366 dias", "600 dias"],
        answer: "366 dias",
        tip: "É um número par",
      },
    ],
  },
  {
    category: "Historia",
    questions: [
      {
        question: "Qual evento histórico aconteceu entre os anos de 1914 e 1918?",
        options: ["Primeira Guerra Mundial", "Primeiro Rock in Rio", "Chegada do homem à Lua", "Queda do muro de Berlim"],
        answer: "Primeira Guerra Mundial",
      },
      {
        question: "A queda do muro de Berlim, em 1989, marcou o fim de qual conflito?",
        options: ["Segunda Guerra Mundial", "Guerra do Vietnã", "Guerra Fria", "Guerra de Berlim"],
        answer: "Guerra Fria",
        tip: "Confronto entre EUA e URSS",
      },
      {
        question: "Qual país foi o pioneiro na Revolução Industrial?",
        options: ["Brasil", "Portugal", "Grécia", "Inglaterra"],
        answer: "Inglaterra",
      },
      {
        question: "Quem liderou a revolta conhecida como Inconfidência Mineira?",
        options: ["Dom Pedro II", "Dom João VI", "Tiradentes", "Dom Pedro I"],
        answer: "Tiradentes",
        tip: "Era dentista",
      },
      {
        question: "Qual é o nome da primeira mulher a se tornar presidente do Brasil?",
        options: ["Marina Silva", "Dilma Rousseff", "Marta Suplicy", "Ana Júlia Carepa"],
        answer: "Dilma Rousseff",
      },
    ],
  },
  {
    category: "Ciências",
    questions: [
      {
        question: "Qual é o planeta mais próximo do Sol?",
        options: ["Marte", "Vênus", "Mercúrio", "Júpiter",],
        answer: "Mercúrio",
        tip: "É o nome de um metal líquido em temperatura ambiente",
      },
      {
        question: "Qual é a única parte do corpo humano que continua do mesmo tamanho desde o nascimento?",
        options: ["Língua", "Orelhas", "Nariz", "Olhos"],
        answer: "Olhos",
        tip: "Responsável pela visão",
      },
      {
        question: "Qual elemento representa o O na tabela periódica?",
        options: ["Oganessônio", "Oxigênio", "Ósmio", "Ouro"],
        answer: "Oxigênio",
      },
      {
        question: "Qual é o nome do satélite natural da Terra?",
        options: ["Titã", "Lua", "Europa", "Io"],
        answer: "Lua",
      },
      {
        question: "Qual é o mamífero que possui um bico?",
        options: ["Pelicano", "Pinguim", "Baleia Beluga", "Ornitorrinco"],
        answer: "Ornitorrinco",
      },
    ],
  },
  {
    category: "Geografia",
    questions: [
      {
        question: "Em qual cidade fica o famoso monumento do Coliseu?",
        options: ["Barcelona", "Pisa", "Atenas", "Roma",],
        answer: "Roma",
        tip: "Capital da Itália",
      },
      {
        question: "Qual foi a primeira capital do Brasil?",
        options: ["Brasília", "Salvador", "Rio de Janeiro", "São Paulo"],
        answer: "Salvador",
        tip: "Capital da Bahia",
      },
      {
        question: "Qual é o nome do famoso monumento que fica na Baía de Nova York?",
        options: ["Cristo Redentor", "Estátua da Liberdade", "Torre Eiffel", "Torre de Pisa"],
        answer: "Estátua da Liberdade",
      },
      {
        question: "Qual é o continente que conta com o maior número de países?",
        options: ["Ásia", "África", "Europa", "Oceania"],
        answer: "África",
      },
      {
        question: "O Brasil é banhado por qual oceano?",
        options: ["Atlântico", "Índico", "Pacífico", "Glacial Ártico"],
        answer: "Atlântico",
      },
    ],
  },
  {
    category: "Artes e Cultura",
    questions: [
      {
        question: "Na animação 'Procurando Nemo', qual é a espécie de peixe do Nemo?",
        options: ["Dourado-do-mar", "Peixe-palhaço", "Quatro-olhos", "Barracuda",],
        answer: "Peixe-palhaço",
      },
      {
        question: "Quem pintou o quadro chamado 'Mona Lisa' (também conhecido como Gioconda)?",
        options: ["Pablo Picasso", "Claude Monet", "Salvador Dalí", "Leonardo da Vinci"],
        answer: "Leonardo da Vinci",
      },
      {
        question: "Qual super-herói dos quadrinhos é conhecido como Homem-Morcego?",
        options: ["Super-Homem", "Homem-Aranha", "Capitão América", "Batman"],
        answer: "Batman",
      },
      {
        question: "Qual é o nome do personagem que não quer crescer?",
        options: ["Peter Pan", "Edward Mãos de Tesoura", "Pinóquio", "Benjamin Button"],
        answer: "Peter Pan",
      },
      {
        question: "Que animal é o personagem Patrick, do desenho animado Bob Esponja?",
        options: ["Esponja-do-mar", "Estrela-do-mar", "Moreia", "Polvo"],
        answer: "Estrela-do-mar",
      },
    ],
  },
  {
    category: "Esportes",
    questions: [
      {
        question: "Quem é o jogador de futebol com maior número de bolas de ouro?",
        options: ["Lionel Messi", "Pelé", "Cristiano Ronaldo", "Neymar",],
        answer: "Lionel Messi",
        tip: "É um jogador Argentino",
      },
      {
        question: "Quanta vezes o Brasil foi campeão da Copa do Mundo?",
        options: ["Três", "Quatro", "Cinco", "Seis"],
        answer: "Cinco",
      },
      {
        question: "Qual esporte praticava o ídolo brasileiro Ayrton Senna?",
        options: ["Atletismo", "Automobilismo", "Futebol", "Natação"],
        answer: "Automobilismo",
      },
      {
        question: "Qual país foi o campeão da Copa do Mundo de 2022?",
        options: ["Alemanha", "França", "Brasil", "Argentina"],
        answer: "Argentina",
        tip: "É um país que faz fronteira com o Brasil",
      },
      {
        question: "Para qual país a seleção brasileira perdeu por 7 a 1 na Copa do Mundo de 2014?",
        options: ["Alemanha", "Argentina", "França", "Bélgica"],
        answer: "Alemanha",
        tip: "É um país da Europa",
      },
    ],
  },
];

export default data;