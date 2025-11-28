import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import serverless from "serverless-http";

const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());

// vanha /
// app.get("/", (req, res) => {
//   res.send("Backend running");
// });

app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields required" });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    // Lyhennetään aikakatkaisu 15 sekuntiin, jotta saadaan virhe nopeasti
    connectionTimeout: 15000,
    socketTimeout: 15000,
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Yhteydenotto: ${name}`,
      text: message,
    });

    return res.json({ success: true });
  } catch (error) {
    console.error("GMAIL SMTP ERROR (Lambda):", error);
    return res
      .status(500)
      .json({ error: "Sähköpostin lähetys epäonnistui Lambdassa." });
  }
});

// serverless handler-funktio, jota Lambda kutsuu
export const handler = serverless(app);
