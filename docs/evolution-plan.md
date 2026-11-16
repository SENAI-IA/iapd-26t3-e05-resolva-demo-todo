# Plano de evolução do Resolva Demo Todo

## Objetivo

Transformar este sistema-alvo em uma demonstração pequena, repetível e verificável do fluxo do Resolva:

```text
ticket → triagem → implementação → testes → evidências → entrega
```

O plano deve permitir identificar o que foi solicitado, qual alteração foi feita e quais testes comprovam o resultado.

## Estado atual

- A aplicação possui criação, conclusão, remoção e filtragem de tarefas.
- A validação de título existe no domínio e exibe mensagem clara na interface.
- `toggleTodo` altera somente o ID selecionado, inclusive com títulos repetidos.
- Os três tickets da primeira evolução estão implementados e cobertos por testes.
- Painel público: <https://senai-ia.github.io/iapd-26t3-e05-resolva-demo-todo/>.

## Tickets e definição de pronto

| Ordem | Ticket | Resultado esperado | Evidência mínima |
| --- | --- | --- | --- |
| 1 | Seleção por ID | somente o item selecionado muda de estado | teste de domínio com títulos repetidos |
| 2 | Filtro por estado | todas, pendentes e concluídas sem alterar a lista original | testes de domínio e interação |
| 3 | Validação de entrada | entrada inválida é rejeitada com mensagem clara | testes de domínio e interface |

Um ticket só pode ser marcado como `implementado` quando tiver código dentro do escopo, teste automatizado, `pnpm test`, `pnpm build` e evidência registrada na PR ou no histórico do Resolva.

## Fase 1 — corrigir seleção por ID ✅

Alterar `toggleTodo` para comparar o `id` de cada item, nunca o título.

Critérios de aceite:

- duas tarefas com o mesmo título podem coexistir;
- alternar uma tarefa não altera a outra;
- IDs inexistentes retornam uma cópia equivalente sem alterar a lista;
- a ordem dos itens é preservada;
- os testes existentes continuam passando.

## Fase 2 — adicionar filtro por estado ✅

Adicionar no domínio uma operação de filtragem e, na interface, um controle com as opções `todas`, `pendentes` e `concluídas`.

Critérios de aceite:

- o filtro não altera os dados armazenados;
- cada opção exibe somente os itens correspondentes e preserva a ordem original;
- a seleção permanece após concluir ou remover um item;
- o comportamento é coberto por testes de domínio e interação.

## Fase 3 — fortalecer validação de entrada ✅

Manter a regra no domínio e conectá-la à interface sem duplicar a validação. O formulário deve informar o erro e manter os demais campos utilizáveis.

Critérios de aceite:

- título vazio ou somente com espaços não cria tarefa;
- o domínio continua rejeitando ID vazio ou título vazio;
- a interface exibe mensagem acessível para título inválido;
- após corrigir o valor, o cadastro funciona normalmente.

Nota: o ID é gerado pela interface; sua validação permanece no domínio e não precisa de um segundo campo visível.

## Fase 4 — executar pelo Resolva

1. Criar ou confirmar os três tickets no Resolva.
2. Rodar a triagem e revisar as evidências.
3. Implementar o ticket 1 antes do ticket 2.
4. Implementar o ticket 3 sem copiar regras do domínio para a interface.
5. Executar `pnpm test` e `pnpm build` após cada entrega.
6. Atualizar `docs/status.json` somente com evidências verificáveis.
7. Confirmar a PR e o resultado antes de marcar o ticket como `implementado`.

## Comandos de verificação

```bash
pnpm install
pnpm test
pnpm test:json
pnpm build
```

## Fora do escopo

- autenticação ou persistência em banco;
- alteração da arquitetura do sistema-alvo;
- novas regras de negócio não descritas nos tickets;
- marcar tickets como concluídos sem teste e evidência.

## Ordem recomendada

1. Seleção por ID.
2. Filtro por estado.
3. Validação de entrada na interface.
4. Atualização do painel, documentação e evidências.

O trabalho escolar pode usar o modo local do Resolva. GitHub Actions permanece disponível como modo posterior e como fonte de evidências públicas.
