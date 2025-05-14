📦 COMO SUBIR CLOAKER NO MONGODB + VERCEL

===========================================
🔹 BACKEND (Node.js + Express) no MongoDB Atlas
===========================================

1. Crie uma conta no https://www.mongodb.com/cloud/atlas
2. Crie um Cluster grátis e configure um banco chamado: cloakerdb
3. No menu "Database Access", adicione um usuário com senha
4. No menu "Network Access", permita acesso de IPs (0.0.0.0/0 para testes)
5. Copie a string de conexão e substitua no arquivo `.env`:
   MONGO_URI=mongodb+srv://<usuario>:<senha>@<cluster>.mongodb.net/cloakerdb

6. Faça deploy do backend usando o serviço como:
   - Render.com
   - Railway.app
   - Cyclic.sh
   (Ou hoste manualmente via VPS)

7. Adicione variáveis de ambiente:
   - JWT_SECRET=sua_chave_segura
   - DOMAIN=https://seudominio.com

===========================================
🔹 FRONTEND (React) no VERCEL
===========================================

1. Vá para https://vercel.com e crie uma conta (GitHub recomendado)
2. Suba a pasta do dashboard para um repositório GitHub (ou conecte local)
3. Importe o projeto na Vercel:
   - Framework: React
   - Root directory: /
   - Build command: npm run build
   - Output directory: build

4. Aguarde o deploy e acesse sua URL pública

✅ PRONTO! Agora você pode acessar seu painel com estatísticas e controlar seu cloaking.

Recomendações:
- Ative proteção por autenticação na dashboard se necessário
- Use domínio customizado para aparência profissional

📁 Pastas:
- backend/  → API Node.js + Express
- dashboard/ → App React pronto para Vercel
