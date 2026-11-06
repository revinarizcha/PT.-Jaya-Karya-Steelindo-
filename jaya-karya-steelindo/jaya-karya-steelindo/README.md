# PT Jaya Karya Steelindo Website

Single-page marketing website built with Next.js 15, React 19, and TypeScript.

## Features
- Responsive industrial corporate design
- 10 marketing sections: hero, company profile, products, industries, company values, quality commitment, ordering process, applications, contact form, and footer
- Product cards and mobile navigation
- Contact form that opens a WhatsApp chat with a prefilled inquiry
- SEO metadata

## Run locally

```bash
npm install
cp .env.example .env.local
```

Open `.env.local` and replace the placeholder with the company's official WhatsApp number in international format, without `+` or spaces:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=6281234567890
```

Then run:

```bash
npm run dev
```

Open http://localhost:3000.

## Build for production

```bash
npm run build
npm run start
```

## Deploy to GitHub and Vercel
1. Create a new GitHub repository.
2. Upload or push this project folder to the repository.
3. Import the repository into Vercel.
4. Add `NEXT_PUBLIC_WHATSAPP_NUMBER` in Vercel Project Settings > Environment Variables.
5. Deploy.

## Before publishing
- Replace the WhatsApp placeholder with the official business number.
- Add verified company address, email, phone, and social media details when available. These have intentionally not been invented.
- Replace illustrative construction photography with licensed company or project photography if available. The current remote image URLs are used as visual placeholders and require an internet connection.
- Review product specifications, stock availability, certifications, and delivery coverage before making any specific claims.
