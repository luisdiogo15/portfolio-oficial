# Portefólio Pessoal (Next.js + FastAPI)

Projeto de portefólio com frontend em Next.js (TypeScript) e backend em FastAPI.

## Estrutura

- `app/`: frontend Next.js
- `backend/main.py`: API FastAPI
- `backend/requirements.txt`: dependências Python
- `backend/.env.example`: exemplo de variáveis de ambiente do backend

## Desenvolvimento local

### Frontend

```bash
cd ~/portfolio-oficial
npm install
npm run dev -- --webpack
```

### Backend

```bash
cd ~/portfolio-oficial/backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

## Variáveis de ambiente

### Frontend (Vercel ou local)

- `NEXT_PUBLIC_API_BASE_URL`
- Exemplo local:

```bash
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000
```

### Backend (Render ou local)

- `BACKEND_CORS_ORIGINS` (origens separadas por vírgula)
- Exemplo:

```bash
BACKEND_CORS_ORIGINS=http://localhost:3000,https://teu-projeto.vercel.app
```

## Endpoints backend

- `GET /health` -> `{ "status": "ok" }`
- `POST /contact` -> recebe `{ nome, email, mensagem }`

## Deploy: Frontend na Vercel + Backend no Render (grátis)

### 1) Publicar código

```bash
cd ~/portfolio-oficial
git add .
git commit -m "chore: preparar deploy vercel-render"
git push
```

### 2) Deploy do backend no Render

1. Criar `Web Service` no Render a partir do repositório.
2. Configurar:
- Root Directory: `backend`
- Runtime: `Python 3`
- Build Command:

```bash
pip install -r requirements.txt
```

- Start Command:

```bash
uvicorn main:app --host 0.0.0.0 --port $PORT
```

3. Adicionar variável de ambiente no Render:

```bash
BACKEND_CORS_ORIGINS=http://localhost:3000,https://teu-projeto.vercel.app
```

4. Após deploy, validar saúde da API:

```bash
curl https://teu-backend.onrender.com/health
```

Resposta esperada:

```json
{"status":"ok"}
```

### 3) Deploy do frontend na Vercel

1. Importar o mesmo repositório na Vercel.
2. Framework: Next.js (auto-detetado).
3. Definir variável de ambiente do projeto na Vercel:

```bash
NEXT_PUBLIC_API_BASE_URL=https://teu-backend.onrender.com
```

4. Fazer deploy.

### 4) Ajustar CORS final no Render

Depois de teres a URL final da Vercel, atualizar no Render:

```bash
BACKEND_CORS_ORIGINS=http://localhost:3000,https://teu-projeto.vercel.app
```

Reiniciar/redeploy do serviço no Render.

### 5) Teste fim-a-fim

1. Abrir frontend na Vercel.
2. Enviar formulário de contacto.
3. Confirmar resposta de sucesso.
4. Se falhar por CORS, rever `BACKEND_CORS_ORIGINS`.

## Notas

- O formulário mantém validação no frontend.
- O backend valida payload com Pydantic (`BaseModel`) e email com `EmailStr`.
- O backend nesta fase não usa base de dados.
- Em plano gratuito no Render, pode existir "cold start".
