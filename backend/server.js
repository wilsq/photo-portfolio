import express, { text } from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PASS length:", process.env.EMAIL_PASS?.length);

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/contact", async (req, res) => {
  console.log("POST /api/contact body:", req.body);
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Basic Validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Kaikki kentät ovat pakollisia." });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Sähköpostiosoite ei ole validi." });
  }

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Uusi yhteydenotto: ${name}`,
    text: `Nimi: ${name} Sähköposti: ${email} Viesti: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.json({ success: "true", message: "Viesti vastaanotettu!" });
  } catch (error) {
    console.error("SMTP virhe: ", error);
    return res.status(500).json({ error: "Viestin lähetys epäonnistui." });
  }
});

app.listen(5050, () => console.log("Backend käynnissä portissa 5050"));
