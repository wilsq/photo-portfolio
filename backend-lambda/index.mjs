import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

export const handler = async (event) => {
  console.log("EVENT RAW:", event);

  // body voi olla string (v1) tai objekti (v2)
  const body =
    typeof event.body === "string" ? JSON.parse(event.body) : event.body;

  console.log("BODY RAW:", body);

  const { name, email, message } = body;

  if (!name || !email || !message) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Kaikki kentät ovat pakollisia." }),
    };
  }

  const client = new SESClient({ region: "eu-north-1" });

  const params = {
    Source: process.env.EMAIL_USER,
    Destination: { ToAddresses: [process.env.EMAIL_USER] },
    Message: {
      Subject: { Data: `Uusi yhteydenotto: ${name}` },
      Body: {
        Text: { Data: `Nimi: ${name}\nEmail: ${email}\nViesti:\n${message}` },
      },
    },
    ReplyToAddresses: [email],
  };

  try {
    await client.send(new SendEmailCommand(params));

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (err) {
    console.error("SES ERROR:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Server error" }),
    };
  }
};
