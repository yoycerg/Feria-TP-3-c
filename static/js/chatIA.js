async function enviar() {
    let entrada = document.getElementById("entrada");
    let chat = document.getElementById("chat");

    // Mostrar mensaje del usuario
    chat.innerHTML += `<div class="msg user"><b>Tú:</b> ${entrada.value}</div>`;

    // Pedir respuesta a la IA
    const respuesta = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Authorization": "Bearer TU_API_KEY_AQUI", // 👈 reemplaza con tu API Key
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: [{ role: "user", content: entrada.value }]
        })
    });

    const datos = await respuesta.json();
    const textoIA = datos.choices[0].message.content;

    // Mostrar respuesta de la IA
    chat.innerHTML += `<div class="msg ia"><b>IA:</b> ${textoIA}</div>`;
    entrada.value = "";
}