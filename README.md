# lifx-http

This library is not, in any way, affiliated or related to Lifi Labs, Inc.. Use
at your own risk.

## ✨ Features

- Thin wrapper of the [Lifx HTTP protocol](http://api.developer.lifx.com/).

- Makes use of native Fetch API's and pure Typescript ES Modules so it's perfect
  for a server side framework like [Deno](https://deno.land/) or for a client
  side application (like [this](https://github.com/wkirk01/LIFX-Svelte) one that
  I've built using [Svelte](https://svelte.dev/)).

## 📦 Importing

```typescript
import { lifxClient } from "https://deno.land/x/lifxhttp/mod.ts";
```

## 📖 Example Usage

```typescript
const client = new lifxClient({
  token: "<Your LIFX API Token>",
});

console.log(await client.getLights("all"));
```
