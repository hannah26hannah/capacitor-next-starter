This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Capacitor

Once done with installing the front-end framework you want to use for the project(Next.js is used here)

```
yarn add @capacitor/core
yarn add -D @capacitor/cli

npx cap init --web-dir=out
```

### Building Next.js app

`"capacitor-build": "npx next build && npx next export"`

```ts
// capacitor.config.ts

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'capacitor-next-starter',
  webDir: 'out', // here
  bundledWebRuntime: false,
};
```

This will output your project into a folder called `out` if you set your webDir as `out`

to resolve image optimization using Next.js default loader is not compatible with `next export` error, set image loader like this as well:

```js
// next.config.js
module.exports = {
  ...nextConfig,
  images: {
    loader: 'akamai',
    path: '/',
  },
};
```

Once you've set up necessary environmental system, run below for each platforms:

```bash
npx cap add android
npx cap add ios
```

`"build-mobile": "next build && next export && npx cap sync"`

This one lets you copy the assets over to your iOS/Android projects by typing: `npx cap sync` automatically with one command line.

### Apple Silicon-powered Mac has `ffi` Bus Error on `npx cap add` command.

> This is a CocoaPods bug related to ffi not installing on M1. For now, you need to have Rosetta installed, install ffi on a x86_64 architecture and run pod install using the simulated Intel architecture for the first time.

If you're using M1, ARM architecture, this could happen while installing CocoaPods.

```bash
# If you want to remove existing old cocoapods, try this one, otherwise just skip this command.
gem list --local | grep cocoapods | awk '{print $1}' | xargs sudo gem uninstall

sudo arch -x86_64 gem install ffi
sudo arch -x86_64 gem install cocoapods
```

If this doesn't work, try below:

```bash
# remove pre-installed cocoapods
gem list --local | grep cocoapods | awk '{print $1}' | xargs sudo gem uninstall

# go to your terminal and enable open using Rosetta from 'get Info' menu.
sudo gem install cocoapods

# type below to fix the ffi bundle problem.
sudo gem install ffi
```

```zsh
npm install @capacitor/app @capacitor/haptics @capacitor/keyboard @capacitor/status-bar
# yarn add @capacitor/app @capacitor/haptics @capacitor/keyboard @capacitor/status-bar

```

The official doc says

> For the best user experience, you should make sure these plugins are installed even if you don't import them in your app.

so don't remove them when you're starting new project based on this starter kit.

## TODO

- [] build differently based on the platform `Per-platform management`
- [x] add tailwindcss
- [] add env to get dynamic IP address
- [] add Ionic Framework
- [] i18n on Capacitor
- [] routing
