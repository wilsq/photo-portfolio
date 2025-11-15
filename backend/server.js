import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  // Basic Validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Kaikki kentät ovat pakollisia." });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Sähköpostiosoite ei ole validi." });
  }

  return res.json({ success: "true", message: "Viesti vastaanotettu!" });
});

app.listen(5000, () => console.log("Backend käynnissä portissa 5000"));
