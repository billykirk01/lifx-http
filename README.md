# LIFX-HTTP

This is a thin wrapper of the [Lifx HTTP protocol](http://api.developer.lifx.com/).

This library makes use of native Fetch API's and pure Typescript ES Modules so it's perfect for a server side framework like [Deno](https://deno.land/) or for a client side application (like [this](https://github.com/wkirk01/LIFX-Svelte) one that I've built using [Svelte](https://svelte.dev/)).

This library is not, in any way, affiliated or related to Lifi Labs, Inc.. Use at your own risk.

Example usage:

```typescript
import { lifxClient } from "https://raw.githubusercontent.com/wkirk01/LIFX-HTTP/master/lifx.ts";

const client = new lifxClient({
  token: "<Your LIFX API Token>",
});

client.listLights("all").then(console.log);
```
