Reproducing an issue discussed on the Discord channel.

# Issue description

When I set `autoCodeSplitting: true` in the bundler configuration, `vite build` will produce a lot of JavaScript assets. 

Many of those assets contain the implementation of a single React component or hook, such as  `Modal-CkwMSvnd.js` or `useLocalStorage-CNmdzOMP.js`. As a result, there are many generated chunks, most of them being below 1 kB in size.

It appears that Router decides to create a dedicated chunk for every shared module it encounters (i.e. if a component is used in more than one route, it will create a dedicated chunk for it). This split strategy looks too eager for me, as it yields a lot of network requests, much like Vite's development server. Is there a way to make the bundler take a more balanced approach?

# About this repo

This repo provides a minimal reproducing example for the stated problem. Both `route1.tsx` and `route2.tsx` use a shared `useOnlineStatus` hook. When running `npm run build`, a dedicated chunk is created for that hook (`dist/assets/useOnlineStatus-Yn8UbVr9.js`).

While it is legitimate to refactor shared code in a distinct module, my own "real world scenario" yields a lot of small chunks like this one, which seems overkill.

The code split logic is a bit hard to predict for me, and adding more shared components or hooks does not yield additional chunks in this specific example. 