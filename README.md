# 🖼️ Photo Portfolio

Linkki Live-sivulle: https://aws-deploy.d1kxm3pt2eu4tt.amplifyapp.com/

Tämä projekti yhdistää modernin valokuva-/projektigallerian tehokkaaseen ja skaalautuvaan yhteydenottolomakebackendiin. Se esittelee puhtaat ja tyylikkäät käyttöliittymät samalla kun se varmistaa luotettavan yhteydenottotoiminnallisuuden.

---

## 🚀 Ominaisuudet

Frontend-ominaisuudet (Photo Portfolio)
🔹 Responsiivinen rakenne: (toimii hyvin eri kokoisilla näytöillä)
🔹 Lightbox-ominaisuus: kuvien suurentamiseen
🔹 Tumma ja tyylikäs ulkoasu
🔹 Selkeä rakenne: Navbar, Hero, Gallery, Footer
🔹 Käyttövalmis yhteydenottolomake: Saumaton integraatio serverittömään backendiin.

Backend-ominaisuudet (Yhteydenottolomake)
🔹 Sähköpostin toimitus: Vahvistettu toimivaksi AWS-ympäristöstä Gmailin SMTP:n kautta.
🔹 Frontend-validointi: Nopea käyttäjäpalaute lomakkeen syötteestä.
🔹 Välitön Vaste: HTTP-pyyntö vastaa nopeasti käyttäjälle ($200$ OK) sähköpostin lähetyksen jälkeen, mikä parantaa käyttäjäkokemusta.

---

## 💡 Arkkitehtuuri

Projekti käyttää **Serverless-mallia** (FaaS) kriittiselle yhteystietojen backendille.

**Frontend: React**-sovellus (Photo Portfolio), joka on isännöity **AWS Amplify Hostingissa**.

Reititys & Turvallisuus: **AWS API Gateway** toimii julkisena HTTP-rajapintana, käyttäen **Lambda Proxy Integration** -integraatiota.

**Backend Logic (Funktio): AWS Lambda** (Node.js) suorittaa yhteydenottolomakkeen logiikan.

---

## 🛠️ Teknologiat

| Teknologia              | Käyttötarkoitus                                       |
| ----------------------- | ----------------------------------------------------- |
| **React**               | Sovelluksen rakenne ja komponentit                    |
| **Vite**                | Nopea kehitysympäristö                                |
| **Tailwind CSS**        | Tyylit ja responsiivisuus                             |
| **Lucide-react**        | Kuvakkeet (nuolet, sulkuikoni)                        |
| **Node.js**             | Backend-logiikka (Lambda)                             |
| **Express**             | REST API:n luonti ja reititys (Lambda)                |
| **Serverless-http**     | Express-sovelluksen kääriminen Lambda-yhteensopivaksi |
| **Nodemailer**          | Sähköpostien lähettäminen (Gmail SMTP) (Lambda)       |
| **AWS Lambda**          | Serveritön laskentapalvelu (Backend)                  |
| **AWS API Gateway**     | API-rajapinta ja reititys Lambdaan                    |
| **AWS Amplify Hosting** | Frontend-sovelluksen isännöinti ja CI/CD              |
| **AWS IAM**             | Käyttöoikeuksien hallinta AWS-palveluille             |
| **CORS**                | Rajoitusten poisto selaimen ja API:n välillä          |

---

🧠 5. Keskeinen Tekninen Haaste: Luotettava Sähköpostin Toimitus AWS:ssä.

Ongelma: SMTP-yhteyden epäluotettavuus Elastic Beanstalkissa
Alun perin backend deployattiin AWS Elastic Beanstalkiin (EB). Tässä ympäristössä Gmailin SMTP-yhteys (portti 465) epäonnistui toistuvasti aikakatkaisuihin (ETIMEDOUT), vaikka Security Group -säännöt olivat auki. Tämä osoitti, että EB-verkon ja ulkoisten SMTP-palvelimien välillä oli syvempiä estorajoituksia.

Ratkaisu: Siirtyminen Serverittömään Arkkitehtuuriin
Ongelma ratkaistiin siirtämällä Express-backend serverittömään AWS Lambda -arkkitehtuuriin. Tämä lähestymistapa tarjosi uuden verkkopolun, joka mahdollisti Nodemailerin ja Gmailin välisen SMTP-yhteyden onnistumisen.

---

## Mahdollisia laajennuksia

- Ajanvarausjärjestelmä

---
