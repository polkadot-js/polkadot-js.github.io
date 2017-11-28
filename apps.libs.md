---
layout: page
title: .apps/libs
---

{% include logo.html %}

<div class="grid rows"></div>

- [@polkadot/api](https://github.com/polkadot-js/api) A Promised-based API library for interacting with Polkadot network clients. It wraps the RPC layer and handles the encoding and decoding of method calls to and from Polkadot network clients.
- [@polkadot/api-format](https://github.com/polkadot-js/api/tree/master/packages/api-format) A lower-level formatter for API input and output value formatters. Used internally in the API for consistent method calls.
- [@polkadot/api-jsonrpc](https://github.com/polkadot-js/api/tree/master/api-jsonrpc) Definitions for the methods that are available on the network. The API pulls in these definitions to automatically create RPC handlers for the endpoints.
- [@polkadot/api-provider](https://github.com/polkadot-js/api/tree/master/api-provider) Various transport providers e.g. Http, Ws, each with a standard interface. These are passed to the API when instantiating the API library.
- [@polkadot/util](https://github.com/polkadot-js/util) A collection of useful utility-belt functions, primarily used to make development on these projects consistent with less repetitive boilerplate.
