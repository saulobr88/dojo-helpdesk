This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## About Dojo-Helpdesk

Follow this tutorial to know about it:

- [Next 13 Crash Course. The Net Ninja](https://www.youtube.com/playlist?list=PL4cUxeGkcC9jZIVqmy_QhfQdi6mzQvJnT)

## Run Json-server for development

1 - Install `json-server` globally

```
npm install -g json-server
```

2 - Run `json-server` with `_data/db.json` data (need to run from another terminal)

```
json-server --watch --port 4000 ./_data/db.json
```
