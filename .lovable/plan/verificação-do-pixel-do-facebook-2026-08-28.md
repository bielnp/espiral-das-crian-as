# Verificação do Pixel do Facebook

## Objetivo
Confirmar que o Facebook Pixel (ID `3174669172727008`) está instalado corretamente na landing page e disparando o evento `PageView`.

## Estado atual
O pixel já está inserido no `src/routes/__root.tsx`, dentro do `<head>` do `RootShell`, com:
- Script base do Facebook Pixel (`fbevents.js`).
- `fbq('init', '3174669172727008')`.
- `fbq('track', 'PageView')`.
- Tag `<noscript>` de fallback com a imagem de rastreamento.

## Passos de validação
1. Abrir o preview da página no navegador.
2. Inspecionar o `<head>` e confirmar que o script do Facebook Pixel está presente.
3. Verificar no console se `window.fbq` está definido e se o pixel foi inicializado com o ID correto.
4. Confirmar que o evento `PageView` foi disparado (`fbq('track', 'PageView')`).
5. Verificar a aba "Network" para garantir que houve uma requisição para `connect.facebook.net` e/ou `facebook.com/tr`.
6. Validar a tag `<noscript>` no DOM.

## Possíveis ajustes
- Se o script não estiver carregando: mover para fora do React `dangerouslySetInnerHTML` ou garantir que não está sendo bloqueado por extensões.
- Se o `PageView` não disparar: adicionar `defer` ou garantir que o script executa após o carregamento do `window`.
- Se o ID estiver incorreto: corrigir para o ID fornecido pelo Gerenciador de Eventos do Facebook.

## Resultado esperado
Pixel carregado, `window.fbq` disponível, evento `PageView` disparado e requisição de rastreamento enviada ao Facebook.