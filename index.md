---
layout: page
---

{% include logo.html %}

<div class="grid colors"></div>

- [{.apps/libs}](apps.libs.html) Libraries that help in the creation of applications and interfaces that communicate with running network clients. Includes general and API libraries.
- [{.apps}](apps.html) User-facing applications that communicate with clients running on the network. Display the status, perform queries on clients, interact with running nodes.
- [{.client}](client.html) An early and incomplete JavaScript implementation of a network client that can communicate with other clients on the network.
- [{.client/libs}](client.libs.html) Libraries for networked clients and their interaction with other clients on the network. Includes communication, encoding and query-facing layers.

## {.welcome}

This is an effort to provide a collection of tools, utilities and libraries for interacting with the [Polkadot network](https://polkadot.network) from JavaScript. All code is made available on [Github](https://github.com/polkadot-js/) with a [permissive ISC license](https://en.wikipedia.org/wiki/ISC_license).

While there is a slant towards developer tools, providing libraries to allow others to build tools on top of, a collection of applications are made available that allows for interaction with the network from a pure user perspective.

This is not an official sponsored project, rather it is a community effort to trial tooling while the network is being developed.

<!--

- [@polkadot/app-rpc](https://github.com/polkadot-js/app-rpc) A simple query application that allows you to select the method you want to execute, fill in the values for the inputs and makes a call to a locally-running network client. It is mostly a developer-centric tool, allowing queries to be performed on any exposed method.

-->

## {.contributing}

Contributions are welcome. Fee free to use the tools and libraries, log issues as you find them or create pull requests for your bug-bears or features.

As a new collection of projects, we take quality seriously - library code should be comprehensively [unit tested](https://facebook.github.io/jest/) and interfaces should have [full type definitions](https://flow.org/).
