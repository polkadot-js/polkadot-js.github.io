---
layout: page
title: .clients/libs

---

{% include logo.html %}

<div class="grid rows"></div>

- [@polkadot/client-chains](https://github.com/polkadot-js/client/tree/master/packages/client-chains) Chain definitions (development, test, production) and validation checks
- [@polkadot/client-p2p](https://github.com/polkadot-js/client/tree/master/packages/client-p2p) A self-hosted peer-to-peer server that can communicate with client nodes
- [@polkadot/client-rpc](https://github.com/polkadot-js/client/tree/master/packages/client-rpc) A configurable RPC server, allowing a hand-off on the boilerplate required for setting up JsonRpc endpoints.
- [@polkadot/client-wasm](https://github.com/polkadot-js/client/tree/master/packages/client-wasm) A thin wrapper around WebAssembly to provide a clutter-free interface to executing Wasm code
- [@polkadot/primitives](https://github.com/polkadot-js/primitives/tree/master/packages/primitives) Type definitions for the primitive types defined on the network. (This is a development-only library, only intended for flow type checking tools)
- [@polkadot/primitives-json](https://github.com/polkadot-js/primitives/tree/master/packages/primitives-json) Formatters to convert primitives to and from Json, typically for RPC transfers
- [@polkadot/primitives-rlp](https://github.com/polkadot-js/primitives/tree/master/packages/primitives-rlp) Formatters to convert primitives to and from Rlp for P2P transfer
