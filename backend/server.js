import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Testi Route
app.get("/", (req, res) => {
  res.send("Backend Toimii !");
});

app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Kaikki kentät vaaditaan." });
  }

  console.log("uusi yhteydenotto: ", req.body);

  return res.json({ success: "true", message: "Viesti vastaanotettu!" });
});

app.listen(5000, () => console.log("Backend käynnissä portissa 5000"));
