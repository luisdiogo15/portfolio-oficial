from __future__ import annotations

import os
from typing import List

import resend
from fastapi import FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr, Field


class ContactRequest(BaseModel):
    nome: str = Field(min_length=1, max_length=120)
    email: EmailStr
    mensagem: str = Field(min_length=1, max_length=2000)


RESEND_API_KEY = os.getenv("RESEND_API_KEY")
CONTACT_TO_EMAIL = os.getenv("CONTACT_TO_EMAIL")

if RESEND_API_KEY:
    resend.api_key = RESEND_API_KEY


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

        if not RESEND_API_KEY:
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail="RESEND_API_KEY não está definida no servidor.",
            )

        if not CONTACT_TO_EMAIL:
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail="CONTACT_TO_EMAIL não está definido no servidor.",
            )

        resend.Emails.send(
            {
                "from": "Portfolio <onboarding@resend.dev>",
                "to": CONTACT_TO_EMAIL,
                "subject": f"Nova mensagem de {payload.nome}",
                "reply_to": payload.email,
                "html": f"""
                    <p><b>Nome:</b> {payload.nome}</p>
                    <p><b>Email:</b> {payload.email}</p>
                    <p><b>Mensagem:</b></p>
                    <p>{payload.mensagem}</p>
                """,
            }
        )

        return {"status": "sucesso", "mensagem": "Email enviado com sucesso."}

    except HTTPException:
        raise
    except Exception as exc:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Erro interno ao processar o contacto.",
        ) from exc