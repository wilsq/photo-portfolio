import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// CORS paikallista frontendia varten
app.use(
  cors({
    origin: "*",
  })
);

// BODY parser
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend running");
});

app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields required" });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Yhteydenotto: ${name}`,
      text: message,
    });

    return res.json({ success: true });
  } catch (error) {
    console.error("SMTP ERROR:", error);
    return res.status(500).json({ error: "Email failed" });
  }
});

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log("Server running on port", PORT));
