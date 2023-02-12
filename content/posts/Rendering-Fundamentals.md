---
draft: true
cover: /upload/avatar.png
author: content/authors/Muhammad-Arham.json
tag: content/tags/Go-lang.json
title: Rendering Fundamentals
overview: >-
  React 18 and Next.js 13 introduced new ways to render your application. This
  page will help you understand the differences between rendering environments,
  strategies, runtimes, and how to opt into them.
---

![test](/upload/client-and-server.webp "test image ")

```javascript

```

## Component-level Client and Server&#x20;

```javascript
const rendering = () => {
  return true;
};
```

## Rendering

Before React 18, the primary way to render your application using React was entirely on the client.

Next.js provided an easier way to break down your application into pages and prerender on the server by generating HTML and sending it to the client to be [hydrated](https://beta.reactjs.org/apis/react-dom/client/hydrateRoot#hydrating-server-rendered-html) by React. However, this led to additional JavaScript needed on the client to make the initial HTML interactive.

Now, with [Server and Client Components](https://beta.nextjs.org/docs/rendering/server-and-client-components), React can render on the client and the server meaning you can choose the rendering environment at the component level.

By default, the [app directory](https://beta.nextjs.org/docs/routing/fundamentals#the-app-directory) uses Server Components, allowing you to easily render components on the server and reducing the amount of JavaScript sent to the client.

You can interleave Server and Client Components in a component tree by [importing a Client Component into a Server component](https://beta.nextjs.org/docs/rendering/server-and-client-components#convention), or by [passing a Server Component as a child or a prop to a Client Component](https://beta.nextjs.org/docs/rendering/server-and-client-components#importing-server-components-into-client-components). Behind the scenes, React will merge the work of both environments.
