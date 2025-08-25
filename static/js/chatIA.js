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

