from flask import Flask, jsonify, render_template, request
import os

app = Flask(__name__)


def generate_reply(user_message: str) -> str:
    """Generate a reply using OpenAI when API key exists, otherwise return a local fallback."""
    api_key = os.getenv("OPENAI_API_KEY")
    if not api_key:
        return (
            "OPENAI_API_KEY bulunamadı. Demo modundayım 🙂\n\n"
            f"Sen: {user_message}\n"
            "Bu iskeleti gerçek bir model çağrısına bağlamak için README.md dosyasını takip et."
        )

    try:
        from openai import OpenAI

        client = OpenAI(api_key=api_key)
        completion = client.chat.completions.create(
            model=os.getenv("OPENAI_MODEL", "gpt-4o-mini"),
            messages=[
                {
                    "role": "system",
                    "content": (
                        "Sen Türkçe konuşan yardımcı bir asistanın çekirdeğisin. "
                        "Net, kısa ve güvenli cevaplar ver."
                    ),
                },
                {"role": "user", "content": user_message},
            ],
            temperature=0.7,
        )
        return completion.choices[0].message.content or "Cevap üretilemedi."
    except Exception as exc:  # pragma: no cover - best effort fallback for runtime issues
        return f"Model çağrısı sırasında hata oluştu: {exc}"


@app.get("/")
def index():
    return render_template("index.html")


@app.post("/api/chat")
def chat():
    payload = request.get_json(silent=True) or {}
    message = (payload.get("message") or "").strip()
    if not message:
        return jsonify({"error": "Mesaj boş olamaz."}), 400

    reply = generate_reply(message)
    return jsonify({"reply": reply})


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000, debug=True)
