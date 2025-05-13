# Estudo do Projeto: Jogo da Adivinhação

Este README foi criado para servir como material de estudo sobre o que foi feito neste projeto e como cada parte foi implementada.

---

## O que foi feito

- Criação de um jogo simples de adivinhação de número entre 0 e 10.
- Interface com duas telas: uma para tentar adivinhar e outra para mostrar o resultado.
- Geração de número aleatório.
- Contador de tentativas.
- Troca de telas ao acertar o número.
- Reset do jogo para jogar novamente.
- Estilização com CSS moderno e responsivo.

---

## Como foi feito

### 1. Estrutura HTML

- Utilizei duas divs principais: `.screen1` (entrada do usuário) e `.screen2` (resultado).
- Um formulário com input para o número e botão para tentar.
- Um botão para reiniciar o jogo na tela de resultado.

### 2. Lógica JavaScript

- **Seleção de elementos:** Usei `document.querySelector` para acessar as telas e botões.
- **Número aleatório:** `Math.round(Math.random() * 10)` gera o número secreto.
- **Contador de tentativas:** Variável `attempts` incrementada a cada tentativa.
- **Eventos:** 
  - `btnTry` escuta o clique para processar a tentativa.
  - `btnRetry` escuta o clique para reiniciar o jogo.
- **Validação:** Se o número digitado for igual ao sorteado, troca para a tela de resultado e mostra o número de tentativas.
- **Reset:** Ao clicar em "Jogar novamente", volta para a tela inicial e zera as tentativas.
- **Função `toggleScreen`:** Alterna entre as telas usando a classe `.hide`.

### 3. Estilização CSS

- **Reset e fontes:** Reset de margens/paddings e uso das fontes DM Sans e Montserrat.
- **Layout centralizado:** Uso de `display: grid` e `place-items: center` para centralizar o conteúdo.
- **Responsividade:** Uso de `width: min(42.8rem, 90%)` para adaptar o tamanho.
- **Botões e inputs:** Estilizados para ficarem modernos e com transições suaves.

---

## Pontos de atenção para estudo

- Como manipular classes para mostrar/esconder elementos (`toggleScreen`).
- Como gerar números aleatórios em JS.
- Como usar eventos para interatividade.
- Como separar lógica de interface e lógica de negócio.
- Como usar variáveis para controlar estado do jogo (tentativas, número sorteado).
- Como resetar campos de input e variáveis.

---

## Possíveis melhorias para praticar

- Validar se o input está vazio ou fora do intervalo.
- Mostrar mensagens de erro para tentativas inválidas.
- Permitir reiniciar o número aleatório ao jogar novamente.
- Adicionar animações de transição entre telas.
- Melhorar acessibilidade do formulário.

---
