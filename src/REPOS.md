# Repositories

## Polkadot/Substrate Apps

The [apps](https://github.com/polkadot-js/apps) repo hosts the Polkadot-JS interface. This is a general React UI that can be used to interact with your Polkadot/Substrate node. There are a number of hosted versions of the code available for your use, these include -

- [Polkadot/Substrate](https://polkadot.js.org/apps/) - this is updated as code is merged to the `master` branch and always has the latest available features;
- [Polkadot (via Parity)](https://poc-3.polkadot.io/) - manually deployed and deemed stable, default Polkadot theme and services;
- [Substrate (via Parity)](https://substrate-ui.parity.io/) - manually deployed (along with above), default Substrate theme and services

## API

The [api](https://github.com/polkadot-js/api) repo hosts the `@polkadot/api` package, a fully-featured API library to interact with Polkadot and Substrate nodes. It is fully [documented](https://polkadot.js.org/api/) and comes with [examples](https://polkadot.js.org/api/examples/promise/) to quickly get you started in developing applications.

It is provided in 2 flavours, a Promise-based version (using callbacks for subscription interfaces) and an RxJs-base version, using Obervables all the way through.

## Common utilities

The [common](https://github.com/polkadot-js/common) repo hosts a collection of utilities that are useful to application developers using the APIs. As with the API, it is fully [documented](https://polkadot.js.org/common/) allowing for real-world use of the `@polkadot/util`, `@polkadot/util-crypto` and `@polkadot/keyring` libraries.

## UI Libraries

The [ui](https://github.com/polkadot-js/ui) repo hosts a set of browser based utilities in addition to React components that we have developed. It does not try to force our way of thinking on the user, rather focusses on the base components, such as managing chain settings (`@polkadot/ui-settings`), balance formatting (`@polkadot/ui-util`) and displaying identity icons (`@polkadot/ui-identicon`, in a variety of flavours). [Documentation](https://polkadot.js.org/ui/) is available for the exposed packages.

## Client

The [client](https://github.com/polkadot-js/client) repo is an alternative implementation of a Polkadot Runtime Environment (PRE), written from the ground up to perform the function of a full node in the network. (Full block validation, no block authoring). Currently it is still in heavy development, not quite ready for alpha.

## Tools

The [tools](https://github.com/polkadot-js/tools) repo hosts a growing collection of commandline tools that can be used to manage and monitor nodes.
