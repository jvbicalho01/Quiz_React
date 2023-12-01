import { describe, expect, test } from '@jest/globals';

import data from './questions_complete';

// console.log(data[0].questions[0].answer);
// Cavalo

// console.log(data[0].category);
// Conhecimentos gerais

describe("Conhecimentos gerais", () => {
  test('testando se tem a categoria Conhecimentos Gerais', () => {

    expect(data[0].category).toEqual("Conhecimentos gerais");

  })
})

describe("Historia", () => {
  test('testando se tem a categoria Historia', () => {

    expect(data[1].category).toEqual("História");

  })
})

describe("Ciências", () => {
  test('testando se tem a categoria Ciências', () => {

    expect(data[2].category).toEqual("Ciências");

  })
})

describe("Geografia", () => {
  test('testando se tem a categoria Geografia', () => {

    expect(data[3].category).toEqual("Geografia");

  })
})

describe("Artes e Cultura", () => {
  test('testando se tem a categoria Artes e Cultura', () => {

    expect(data[4].category).toEqual("Artes e Cultura");

  })
})

describe("Esportes", () => {
  test('testando se tem a categoria Esportes', () => {

    expect(data[5].category).toEqual("Esportes");

  })
})

describe("Perguntas de Conhecimentos Gerais", () => {
  test('testando as respostas das perguntas de Conhecimentos Gerais', () => {

    expect(data[0].questions[0].answer).toEqual("Cavalo");
    expect(data[0].questions[1].answer).toEqual("Alexander Graham Bell");
    expect(data[0].questions[2].answer).toEqual("Minas Gerais");
    expect(data[0].questions[3].answer).toEqual("Santos Dumont");
    expect(data[0].questions[4].answer).toEqual("366 dias");

  })
})

describe("Perguntas de História", () => {
  test('testando as respostas das perguntas de História', () => {

    expect(data[1].questions[0].answer).toEqual("Primeira Guerra Mundial");
    expect(data[1].questions[1].answer).toEqual("Guerra Fria");
    expect(data[1].questions[2].answer).toEqual("Inglaterra");
    expect(data[1].questions[3].answer).toEqual("Tiradentes");
    expect(data[1].questions[4].answer).toEqual("Dilma Rousseff");

  })
})

describe("Perguntas de Ciências", () => {
  test('testando as respostas das perguntas de Ciências', () => {

    expect(data[2].questions[0].answer).toEqual("Mercúrio");
    expect(data[2].questions[1].answer).toEqual("Olhos");
    expect(data[2].questions[2].answer).toEqual("Oxigênio");
    expect(data[2].questions[3].answer).toEqual("Lua");
    expect(data[2].questions[4].answer).toEqual("Ornitorrinco");

  })
})

describe("Perguntas de Geografia", () => {
  test('testando as respostas das perguntas de Geografia', () => {

    expect(data[3].questions[0].answer).toEqual("Roma");
    expect(data[3].questions[1].answer).toEqual("Salvador");
    expect(data[3].questions[2].answer).toEqual("Estátua da Liberdade");
    expect(data[3].questions[3].answer).toEqual("África");
    expect(data[3].questions[4].answer).toEqual("Atlântico");

  })
})

describe("Perguntas de Artes e Cultura", () => {
  test('testando as respostas das perguntas de Artes e Cultura', () => {

    expect(data[4].questions[0].answer).toEqual("Peixe-palhaço");
    expect(data[4].questions[1].answer).toEqual("Leonardo da Vinci");
    expect(data[4].questions[2].answer).toEqual("Batman");
    expect(data[4].questions[3].answer).toEqual("Peter Pan");
    expect(data[4].questions[4].answer).toEqual("Estrela-do-mar");

  })
})

describe("Perguntas de Esportes", () => {
  test('testando as respostas das perguntas de Esportes', () => {

    expect(data[5].questions[0].answer).toEqual("Lionel Messi");
    expect(data[5].questions[1].answer).toEqual("Cinco");
    expect(data[5].questions[2].answer).toEqual("Automobilismo");
    expect(data[5].questions[3].answer).toEqual("Argentina");
    expect(data[5].questions[4].answer).toEqual("Alemanha");

  })
})

describe("Dicas de Conhecimentos Gerais", () => {
  test('verificando a presença de dicas nas perguntas de Conhecimentos Gerais', () => {

    expect(data[0].questions[2].tip).toEqual("Tem como capital a cidade de Belo Horizonte");
    expect(data[0].questions[4].tip).toEqual("É um número par");

  })
})

describe("Dicas de História", () => {
  test('verificando a presença de dicas nas perguntas de História', () => {

    expect(data[1].questions[1].tip).toEqual("Confronto entre EUA e URSS");
    expect(data[1].questions[3].tip).toEqual("Era dentista");

  })
})

describe("Dicas de Ciências", () => {
  test('verificando a presença de dicas nas perguntas de Ciências', () => {

    expect(data[2].questions[0].tip).toEqual("É o nome de um metal líquido em temperatura ambiente");
    expect(data[2].questions[1].tip).toEqual("Responsável pela visão");

  })
})

describe("Dicas de Geografia", () => {
  test('verificando a presença de dicas nas perguntas de Geografia', () => {

    expect(data[3].questions[0].tip).toEqual("Capital da Itália");
    expect(data[3].questions[1].tip).toEqual("Capital da Bahia");

  })
})

describe("Dicas de Artes e Cultura", () => {
  test('verificando a presença de dicas nas perguntas de Artes e Cultura', () => {

    expect(data[4].questions[0].tip).toEqual("Peixe laranja com listras brancas");

  })
})

describe("Dicas de Esportes", () => {
  test('verificando a presença de dicas nas perguntas de Esportes', () => {

    expect(data[5].questions[0].tip).toEqual("É um jogador Argentino");
    expect(data[5].questions[3].tip).toEqual("É um país que faz fronteira com o Brasil");
    expect(data[5].questions[4].tip).toEqual("É um país da Europa");

  })
})