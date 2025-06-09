# 📘 Planeamento do Sistema de Autenticação com NextAuth.js

Este documento guia passo a passo a implementação de um sistema de autenticação robusto usando NextAuth.js com suporte a:

* Login via NIP e senha
* Sessão expira após 15 minutos com contador
* Proteção de rotas privadas (admin/docente/aluno)
* Redirecionamento automático para login
* Aviso legal se o utilizador abrir o DevTools

O processo está dividido em **fases graduais** para permitir o uso de ferramentas de IA passo a passo. A ferramenta de IA deverá editar o ficheiro `log.md` na root do projeto, explicando todas as alterações realizadas.

---

## ✅ Fase 1: Preparar o Ambiente

1. Instalar dependências:

   ```bash
   npm install next-auth @auth/prisma-adapter @prisma/client bcryptjs
   ```

2. Criar o schema do utilizador no `prisma/schema.prisma`:

   ```prisma
   model User {
     id       String  @id @default(cuid())
     nip      String  @unique
     password String
     role     String
     name     String?
     email    String?
   }
   ```

3. Executar migração e gerar cliente Prisma:

   ```bash
   npx prisma migrate dev --name init
   npx prisma generate
   ```

---

## ✅ Fase 2: Configurar NextAuth.js

1. Criar o ficheiro `/auth/options.ts` com configuração do NextAuth:

   * Provider de credenciais
   * Sessão JWT de 15 minutos
   * Callbacks para `role`

2. Criar a rota de API:

   ```ts
   // /app/api/auth/[...nextauth]/route.ts
   import NextAuth from "next-auth";
   import { authOptions } from "@/auth/options";

   const handler = NextAuth(authOptions);
   export { handler as GET, handler as POST };
   ```

---

## ✅ Fase 3: Criar Página de Login Personalizada

1. Criar `app/login/page.tsx` com um form de NIP e password.
2. Usar `signIn("credentials", {...})` da API do NextAuth.
3. Redirecionar para `/dashboard` após login bem-sucedido.

---

## ✅ Fase 4: Proteger Rotas com Middleware

1. Criar `middleware.ts` na root do projeto:

   ```ts
   import { withAuth } from "next-auth/middleware";

   export default withAuth({
     pages: { signIn: "/login" },
   });

   export const config = {
     matcher: ["/dashboard/:path*", "/admin/:path*", "/docente/:path*", "/aluno/:path*"],
   };
   ```

2. Agora qualquer rota privada exige autenticação.

---

## ✅ Fase 5: Exibir Contador de Sessão na Topbar

1. Criar `lib/sessionTimer.ts` com função que calcula segundos restantes.
2. Criar componente `SessionTimer.tsx` que atualiza o tempo a cada segundo.
3. Integrar `SessionTimer` na `topbar` da aplicação.

---

## ✅ Fase 6: Aviso ao Abrir o DevTools

1. Criar componente `DevToolsWarning.tsx`:

   * Usa `setInterval` para detectar abertura do DevTools
   * Mostra `alert()` ou `toast` com aviso legal

2. Importar o componente globalmente no `layout.tsx` ou `_app.tsx`.

---

## ✅ Fase 7: Controlar Acesso por Tipo de Utilizador (Role)

1. No callback `session` incluir o `role` no objeto da sessão.
2. Em `layout.tsx` de cada área (admin/docente/aluno), verificar `session.user.role`.
3. Redirecionar para `/login` se não autorizado.

---

## 🔚 Fase Final: Testes e Auditoria

1. Criar utilizadores de teste na BD com diferentes roles.
2. Testar login, expiração da sessão, bloqueio de rotas e aviso DevTools.
3. Verificar que o `log.md` documenta cada alteração da IA.

---

## 🎯 Conclusão

Com este planeamento, podes usar uma IA como copiloto para executar cada fase com segurança, sem saltar passos. A IA deve explicar cada alteração em `log.md`, com referência à fase correspondente deste ficheiro `planeamento.md`.

Se quiseres posso gerar um modelo inicial de `log.md` com as anotações para a primeira fase. Desejas isso?
