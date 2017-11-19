---
layout: page
---

This is not an official Polkadot network site, rather it is an in-progress and ever-expanding collection of utilities for interacting with the Polkadot network clients from JavaScript.

## applications

In addition to the toolset defined in the preceding section, some basic applications are made available as UIs that can be run locally to -

- [@polkadot/app-rpc](https://github.com/polkadot-js/app-rpc) A simple query application that allows you to select the method you want to execute, fill in the values for the inputs and makes a call to a locally-running network client. It is mostly a developer-centric tool, allowing queries to be performed on any exposed method.

## libraries

The following is a non-comprehensive list of the libraries that are currently being created -

- [@polkadot/api](https://github.com/polkadot-js/api) A Promised-based API library for interacting with Polkadot network clients. It wraps the RPC layer and handles the encoding and decoding of method calls to and from Polkadot network clients. Some sub-project exist,
  - [@polkadot/api-format](https://github.com/polkadot-js/api-format), containing typed input and output value formatters for method calls.
  - [@polkadot/api-provider](https://github.com/polkadot-js/api-provider), containing various transport providers e.g. Http, Ws. These are passed to the API when instantiating the library.
- [@polkadot/jsonrpc](https://github.com/polkadot-js/jsonrpc) Definitions for the methods that are available on the network. The API pulls in these definitions to automatically create RPC handlers for the endpoints. In addition, documentation is created from the definitions, allowing a view of all the [available method calls](https://github.com/polkadot-js/jsonrpc/docs).
- [@polkadot/util](https://github.com/polkadot-js/util) A collection of useful utility-belt functions, primarily used to make development on these projects more self-contained.
