async function enviar() {
  const entrada = document.getElementById("entrada");
  const chat = document.getElementById("chat");
  const mensaje = entrada.value.trim();

  if (!mensaje) return;

  // Mostrar mensaje del usuario
  chat.innerHTML += `<div class="msg user"><b>Tú:</b> ${mensaje}</div>`;
  entrada.value = "";

  // Llamada a la API de OpenAI
  try {
    const respuesta = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": "Bearer  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", // ⚠️ Pon tu API Key aquí
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-4o-mini", // o "gpt-3.5-turbo"
        messages: [{ role: "user", content: mensaje }]
      })
    });

    const datos = await respuesta.json();
    const textoIA = datos.choices[0].message.content;

    // Mostrar respuesta de la IA
    chat.innerHTML += `<div class="msg ia"><b>Carlos:</b> ${textoIA}</div>`;
    chat.scrollTop = chat.scrollHeight;

  } catch (error) {
    chat.innerHTML += `<div class="msg ia"><b>IA:</b> ❌ Error al conectar</div>`;
  }
}

