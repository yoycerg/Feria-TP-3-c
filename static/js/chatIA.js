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