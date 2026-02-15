# QuadriumAI Starter

Kendi yapay zekanı hızlıca ayağa kaldırman için hazırlanmış basit ama şık bir başlangıç projesi.

## Neler var?
- Flask tabanlı backend (`/api/chat`)
- Modern sohbet arayüzü (cam efekti + gradient tema)
- `OPENAI_API_KEY` yoksa demo cevap dönen güvenli fallback modu

## Kurulum
```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

## Çalıştırma
```bash
python app.py
```

Ardından tarayıcıda aç:

- http://localhost:8000

## OpenAI ile bağlamak
```bash
export OPENAI_API_KEY="sk-..."
export OPENAI_MODEL="gpt-4o-mini"
python app.py
```

## Sonraki adımlar
- Kullanıcı girişi + sohbet geçmişini veritabanına kaydet.
- RAG için PDF/Notion/veritabanı entegrasyonu ekle.
- Üretim ortamına çıkarken gunicorn + reverse proxy (nginx/caddy) kullan.
