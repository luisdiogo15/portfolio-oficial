from __future__ import annotations

import os
from typing import List

from fastapi import FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr, Field


class ContactRequest(BaseModel):
    nome: str = Field(min_length=1, max_length=120)
    email: EmailStr
    mensagem: str = Field(min_length=1, max_length=2000)


app = FastAPI(title="Portfolio API", version="1.0.0")

cors_origins_env = os.getenv("BACKEND_CORS_ORIGINS", "http://localhost:3000")
allowed_origins: List[str] = [origin.strip() for origin in cors_origins_env.split(",") if origin.strip()]

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["*"],
)


@app.get("/health", status_code=status.HTTP_200_OK)
def health() -> dict[str, str]:
    return {"status": "ok"}

@app.get("/", status_code=status.HTTP_200_OK)
def root() -> dict[str, str]:
    return {"status": "Backend running"}


@app.post("/contact", status_code=status.HTTP_200_OK)
def contact(payload: ContactRequest) -> dict[str, str]:
    try:
        if not payload.nome.strip() or not payload.mensagem.strip():
            raise HTTPException(
                status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
                detail="Os campos nome e mensagem não podem estar vazios.",
            )

        # Sem base de dados nesta fase: resposta de sucesso para integração frontend.
        return {"status": "sucesso", "mensagem": "Mensagem recebida com sucesso."}
    except HTTPException:
        raise
    except Exception as exc:  # pragma: no cover
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Erro interno ao processar o contacto.",
        ) from exc
