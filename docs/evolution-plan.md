# Plano de evolução do Resolva Demo Todo

## Objetivo

Usar o sistema-alvo como uma demonstração pequena e repetível do fluxo local do
Resolva: ticket → triagem → execução Kiro → testes → branch → Pull Request.

## Fase 1 — corrigir o bug de seleção

Corrigir `toggleTodo` para alterar somente a tarefa cujo `id` foi selecionado,
mesmo quando duas tarefas possuem o mesmo título.

Critérios de aceite:

- duas tarefas com o mesmo título podem coexistir;
- alternar uma tarefa não altera a outra;
- IDs inexistentes não alteram a lista;
- os cinco testes atuais continuam passando.

## Fase 2 — adicionar filtro por estado

Adicionar um filtro com as opções `todas`, `pendentes` e `concluídas`, preservando
a ordem original da lista.

Critérios de aceite:

- o filtro não altera os dados armazenados;
- tarefas pendentes e concluídas aparecem corretamente;
- a opção `todas` restaura a lista completa;
- o comportamento é coberto por testes de domínio e interface.

## Fase 3 — fortalecer validação de entrada

Manter a rejeição de IDs e títulos vazios e exibir uma mensagem de erro clara no
formulário, sem inserir tarefas inválidas.

Critérios de aceite:

- título vazio ou somente com espaços é rejeitado;
- ID vazio ou somente com espaços é rejeitado;
- nenhuma tarefa inválida é adicionada;
- a interface preserva o restante do formulário após o erro.

## Fase 4 — operação pelo Resolva

- analisar os três tickets cadastrados;
- executar primeiro o bug de seleção por ID;
- executar depois a melhoria de filtro;
- confirmar os testes e a PR antes de resolver cada ticket;
- registrar o resultado no histórico do ticket.

## Ordem recomendada

1. Bug de seleção por ID.
2. Filtro por estado.
3. Validação de entrada.
4. Melhorias visuais e documentação.

O trabalho escolar deve usar o modo local do Resolva; GitHub Actions fica como
modo opcional para uma execução posterior.
