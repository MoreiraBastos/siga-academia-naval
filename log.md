# Log de Desenvolvimento do Projeto Academia Naval App

## Estrutura Inicial
- Projeto criado com Next.js e Tailwind CSS.
- Estrutura de pastas organizada em `src/app` para rotas e páginas, e `src/components` para componentes reutilizáveis.

## Componentes Criados
- **Header**: Barra de navegação com links para as páginas principais. Adicionado logo (`/logo.png`) e links interativos com animação ao hover.
- **Footer**: Rodapé com informações institucionais, política de privacidade e contato, com visual moderno e responsivo.
- **LoginForm**: (presumido pela estrutura, não detalhado neste log).

## Páginas Desenvolvidas
- **Página Principal**: Estrutura base com layout global, fonte customizada e estilos globais.
- **/politica-privacidade**: Página dedicada à política de privacidade, com aviso de acesso restrito, conformidade legal e layout limpo, seguindo o padrão visual do site.
- **/contactos**: Página de contatos, apresentando o telefone do Oficial de Dia da Academia Naval (+244 932 022 916), com destaque visual e informações de atendimento.

## Ajustes e Melhorias
- Remoção de whitespace entre `<html>` e `<body>` em `layout.tsx` para evitar erros de hidratação do React/Next.js.
- Ajuste do layout para garantir que o Footer fique sempre na base da página, mesmo com pouco conteúdo.
- Remoção do link "SIGA" do header conforme solicitado.
- Adição do logo da Academia Naval ao header.
- Efeitos de hover animados nos links do header para maior interatividade.

## Observações Gerais
- Todas as páginas utilizam o Header e Footer para manter a identidade visual.
- O design é responsivo, com espaçamentos e tamanhos adaptáveis a diferentes dispositivos.
- O código segue boas práticas de organização e reutilização de componentes.

---

**Data do log:** 09/06/2025
