> Context: [Post in TanStack's Discord channel](https://discord.com/channels/719702312431386674/1529227452025540809).

This repo provides a minimal reproducing example for the eager behavior behind `autoCodeSplitting: true`.

The sample codebase contains:

- Three routes (`/route1` , `/route2` and `/route3`)
- Shareable components, located in `src/components`

The usage of the components in each route is outlined in the table below.

| Component/hook | route1.tsx | route2.tsx | route3.tsx | destination chunk    |
| -------------- | ---------- | ---------- | ---------- | -------------------- |
| `Icon`         | ✅         | ✅         | ✅         | `Icon-DhPHNrzM.js`   |
| `Button`       | ✅         | ✅         | ❌         | `Button-CcpGVbb2.js` |
| `Card`         | ❌         | ✅         | ✅         | `Input-CLRYPAa_.js`  |
| `Input`        | ❌         | ✅         | ✅         | `Input-CLRYPAa_.js`  |

As shown, the code splitting strategy seems to generate one chunk per combination of routes that share an import.

For instance, if `Button` were to be imported in `route3.tsx`, the "Button" bundle would disappear and the component implementation would move to the "Icon" bundle (which might be renamed to "Button" along the way).

On the other hand, if `Card` is no longer used in `route3.tsx`, the implementation of `Card` will end up in the bundle specific to `route2.tsx` (not represented in the table above).

In other words, the logic seems to aim for the absolute minimal number of bytes transferred over the wire, for each given route. But this strategy is sensitive to combinatorial explosion, as it can result in a lot of very small chunks when the code requirements of the routes are diverse, which is what I'm experiencing.

To avoid extreme scenarios, it may be useful to tune the bundler to find a better balance between bundle size and the number of HTTP requests needed to load a route.
