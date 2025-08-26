import fetch from "node-fetch";
import "dotenv/config";

const API_KEY = process.env.DEEPAI_KEY;

async function run() {
  const res = await fetch("https://api.deepai.org/api/text-generator", {
    method: "POST",
    headers: {
      "Api-Key": API_KEY,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      text: "Escribe una historia corta sobre un dragón amistoso",
    }),
  });

  const data = await res.json();
  console.log("🔮 Respuesta de la IA:");
  console.log(data.output);
}

run();