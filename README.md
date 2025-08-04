# 🧙‍♂️ Projeto: Classes de Herói em Jogo de Aventura

## 📚 Descrição

Este projeto tem como objetivo aplicar os fundamentos da programação orientada a objetos em JavaScript (ou outra linguagem equivalente) por meio da criação de uma classe genérica que representa um herói de uma aventura. O projeto simula a ação de ataque de diferentes tipos de heróis com base em suas características específicas.

## 🧩 Requisitos Técnicos

O projeto deve obrigatoriamente utilizar os seguintes conceitos de programação:

- ✅ Variáveis
- ✅ Operadores
- ✅ Laços de repetição
- ✅ Estruturas de decisão
- ✅ Funções
- ✅ Classes e Objetos

## 🎯 Objetivo do Projeto

Desenvolver uma classe chamada `Heroi` que possua:

- `nome` (string) — Nome do herói
- `idade` (número) — Idade do herói
- `tipo` (string) — Tipo do herói (`guerreiro`, `mago`, `monge` ou `ninja`)

### 🔥 Método obrigatório

A classe deve conter o método `atacar()` que imprime na tela a seguinte mensagem:


Onde:
- `{tipo}` é a propriedade `tipo` da instância do herói
- `{ataque}` depende do tipo de herói, conforme a tabela abaixo:

| Tipo     | Ataque                  |
|----------|-------------------------|
| mago     | usou magia              |
| guerreiro| usou espada             |
| monge    | usou artes marciais     |
| ninja    | usou shuriken           |

### 🧪 Exemplo de Saída Esperada

```bash
o mago atacou usando magia
o guerreiro atacou usando espada
o monge atacou usando artes marciais
o ninja atacou usando shuriken
