#  Next Cooking Tracker
I've been cooking a lot and wanted somewhere to track what I've been making for myself. No plans for using social media since I want custom formatted comments stuff and it'll force me to publish things to friends even when the result looks bad.

## Features
- Cooking History
- Upcoming Things to Cook

## Notes
- Learned how to write things via vanilla CSS for the first time (it's no wonder people use CSS modules, but the plus is global variables) => it's janky cuz you use JS to manage the state and need to run a windows.matchQuery and everything has to be one giant ass CSS file for you to use the theming variables correctly (tho I guess that's okay? I would prefer modular code).
- Learned CSS Grid (and how to use it with mobile) - https://css-tricks.com/snippets/css/complete-guide-grid/
- Learned CSS dark mode toggle (no MUI theme :O ) - https://dev.to/abbeyperini/dark-mode-toggle-and-prefers-color-scheme-4f3m

## Errors
- Run `yarn create next-app next-cooking-tracker-0791 --js  --src-dir --no-app-router --eslint --no-tailwind`
  - Hits error when using yarn - `yarn add --exact --cwd C:\Users\Timot\Documents\GitHub\next-cooking-tracker-0791 react react-dom next eslint eslint-config-next`
  - Error - next.js app is setup but no dependencies and empty package.json (first time seeing this :thinking:)
    ```
      error execa@7.1.1: The engine "node" is incompatible with this module. Expected version "^14.18.0 || ^16.14.0 || >=18.0.0". Got "16.13.2"
      error Found incompatible module.
    ```
  - Error - same thing for npm
  - Solution: I'm a dumbass and my Node version is indeed way too low since we're on 16.20 now (`nvm install 16.20.0 && nvm use 16.20.0`)


# Next.js README
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

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
