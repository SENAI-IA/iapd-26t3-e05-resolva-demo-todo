# 🧪 Resolva Demo Todo

🚀 **Aplicação funcionando:** [abrir Resolva Demo Todo](https://senai-ia.github.io/iapd-26t3-e05-resolva-demo-todo/)

📊 **Status e evolução:** [abrir painel de acompanhamento](https://senai-ia.github.io/iapd-26t3-e05-resolva-demo-todo/status/)

O painel é público e atualizado automaticamente pelo workflow do GitHub Pages
sempre que o conteúdo de `docs/` mudar na branch `main`.

Fixture mínima de uma lista de tarefas usada para validar o fluxo do Resolva
sem depender de um sistema externo. O alvo contém um bug conhecido e uma
solicitação de melhoria separada.

## 🤖 O que o Resolva faz neste sistema

- 🎫 **Recebe tickets** com problemas ou melhorias solicitadas.
- 🔎 **Analisa o código** e produz uma triagem com evidências.
- 🛠️ **Propõe e implementa correções** no sistema-alvo.
- 🧪 **Executa testes** para verificar se a alteração funciona.
- 📦 **Publica a entrega** em uma branch e acompanha o resultado.
- 📈 **Atualiza o painel de evolução** com o andamento de cada solicitação.

Este repositório é o sistema-alvo usado pelo Resolva para demonstrar esse
fluxo de ponta a ponta.

## Executar

```bash
pnpm install
pnpm dev
pnpm test
pnpm test:json
pnpm build
```

A interface fica disponível em `http://127.0.0.1:5173`. O relatório JSON
gerado por `test:json` fica em `reports/vitest.json` e deve ser usado somente
como artefato local da execução.

- Bug conhecido: `toggleTodo` altera tarefas com o mesmo título, em vez de
  alterar somente o ID selecionado.
- Melhoria: filtrar tarefas por estado, conforme `docs/improvement.md`.

## 🗺️ Evolução acompanhada

O plano completo e o estado dos tickets estão em [`docs/evolution-plan.md`](docs/evolution-plan.md) e [`docs/status.json`](docs/status.json).
