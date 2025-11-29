# 🖼️ Photo Portfolio (AWS Amplify + Serverless Backend)

Live Demo:
https://aws-deploy.d1kxm3pt2eu4tt.amplifyapp.com/

Tämä projekti yhdistää modernin valokuva-/projektigallerian ja skaalautuvan serverless-backendin yhteydenottolomakkeen käsittelyyn. Frontend tarjoaa tyylikkään käyttöliittymän, ja backend varmistaa luotettavan sähköpostitoiminnallisuuden AWS-ympäristössä.

# 🚀 Ominaisuudet

## Frontend (Photo Portfolio)

🔹 Responsiivinen rakenne – toimii mobiilissa ja desktopissa

🔹 Lightbox-toiminnallisuus – kuvien suurennus

🔹 Tumma ja elegantti UI

🔹 Rakenne: Navbar, Hero, Gallery, Footer

🔹 Yhteydenottolomake integroitu serverless-backendiin

## Backend (Contact Form)

🔹 Sähköpostin lähetys Gmail SMTP:n kautta

🔹 Frontend-validointi ennen backend-kutsua

🔹 Nopea vaste – Lambda palauttaa 200 OK heti, mikä parantaa UX:ää

# 💡 Arkkitehtuuri

Projektin backend hyödyntää **serverless-arkkitehtuuria (FaaS)**:

**Frontend**: React-sovellus hostattuna **AWS Amplify Hostingissa**

**API-reititys: AWS API Gateway**, käyttäen **Lambda Proxy Integration** -mallia

**Backend: AWS Lambda** (Node.js) suorittaa lomakelähetyksen logiikan

**Sähköpostin lähetys**: tehty SMTP:llä (Nodemailer)

## Arkkitehtuurikaavio

# 🛠️ Teknologiat

| Teknologia                    | Käyttötarkoitus                         |
| ----------------------------- | --------------------------------------- |
| **React**                     | Frontend-rakenne                        |
| **Vite**                      | Kehitysympäristö                        |
| **Tailwind CSS**              | Tyylit ja responsiivisuus               |
| **Lucide-react**              | Kuvakkeet                               |
| **Node.js**                   | Backend-koodi Lambdassa                 |
| **Express + serverless-http** | REST API Express-syntaksilla Lambdassa  |
| **Nodemailer**                | Sähköpostien lähetys Gmail SMTP:llä     |
| **AWS Lambda**                | Serverless-backend                      |
| **AWS API Gateway**           | HTTP-rajapinta                          |
| **AWS Amplify Hosting**       | Frontend hosting ja CI/CD               |
| **AWS IAM**                   | Oikeuksien hallinta                     |
| **CORS**                      | Selaimen ja API:n välinen kommunikointi |

---

## 🧠 Keskeinen Tekninen Haaste: Luotettava Sähköpostin Toimitus AWS:ssä

Ongelma — SMTP-yhteys epäluotettava Elastic Beanstalkissa

Alkuperäinen backend oli deployattu AWS Elastic Beanstalkiin.
Gmailin SMTP-yhteys (portti 465) epäonnistui jatkuvasti (ETIMEDOUT), vaikka Security Group -säännöt olivat oikein.
Tämä viittasi EB:n sisäisiin verkkorajoituksiin ulkoisiin SMTP-palvelimiin.

Ratkaisu — siirtyminen serverless-arkkitehtuuriin

Backend siirrettiin AWS Lambda -ympäristöön.
Lambda tarjosi eri verkkopolun, joka mahdollisti Nodemailerin onnistuneen yhteyden Gmail SMTP:hen.
Samalla kokonaisuus muuttui skaalautuvaksi ja kustannustehokkaaksi.

---

# 🎯 Mitä opin tästä projektista

Opin suunnittelemaan ja toteuttamaan täyden serverless-arkkitehtuurin AWS:n palveluilla (Amplify → API Gateway → Lambda)

Ymmärsin SMTP-, Lambda-, API Gateway- ja Amplify -kokonaisuuden käytännössä

Syvensin osaamistani API-suunnittelussa, HTTP-metodeissa ja Lambda Proxy Integration -mallissa

Ymmärsin, miten SMTP toimii pilviympäristöissä ja mitä rajoitteita eri AWS-palvelut asettavat ulkoisiin yhteyksiin (kuten Gmail SMTP)

Opin debuggaamaan AWS:n palveluita hyödyntämällä CloudWatch-logeja ja API Gatewayn testityökaluja.

Harjoittelin CORS-konfiguraatiota, joka on kriittinen frontendin ja backentin kommunikoinnissa.

Rakensin toimivan front-to-back -arkkitehtuurin

Ratkaisin todellisen verkko-/infraongelman

Kehitin taitoa dokumentoida arkkitehtuuria ja perustella teknisiä valintoja

---

## Mahdollisia laajennuksia

- Ajanvarausjärjestelmä

---
