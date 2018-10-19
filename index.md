---
layout: page
---

{% include logo.html %}

<div class="index grid colors"></div>

- [{.apps}](/apps.html) User-facing applications including [Polkadot](https://polkadot.js.org/apps/) and [Substrate](https://polkadot.js.org/apps/next/) that communicate with clients running on the network. Display the status, perform queries on clients, interact with running nodes.
- [{.client}](client.html) An early and incomplete JavaScript implementation of a network client that can communicate with other clients on the network.
- [{.api}](https://github.com/polkadot-js/api) A library that provides a clean wrapper around all methods exposed by a Polkadot/Substrate network client. For complete documentation and examples around the classes, interfaces and their use, visit the [Polkadot-JS API documentation portal](https://polkadot.js.org/api).
- [{.telemetry}](https://telemetry.polkadot.io) Network dashboard of the [dotstats codebase](https://github.com/polkadot-js/dotstats) with both PoC-2 "Krumme Lanke" and PoC-3 "BBQ Birch" testnet tabs that list active nodes and validators, progress synchronising to the best block, network latency, geographical map of node locations, and settings.
- [{.common}](https://github.com/polkadot-js/common) Useful utility functions that are used across all projects in the [@polkadot](https://polkadot.js.org) namespace. It provides utility functions with additional safety checks, allowing not only for consistent coding, but also reducing the general boilerplate. It includes utilities, trie, and database interfaces. For complete documentation and examples around the classes, interfaces and their use, visit the [Polkadot-JS Common documentation portal](https://polkadot.js.org/common).
- []()

## {.welcome}

This is an effort to provide a collection of tools, utilities and libraries for interacting with the [Polkadot network](https://polkadot.network) from JavaScript. All code is made available on [Github](https://github.com/polkadot-js/) with a [permissive ISC license](https://en.wikipedia.org/wiki/ISC_license).

While there is a slant towards developer tools, providing libraries to allow others to build tools on top of, a collection of applications are made available that allows for interaction with the network from a pure user perspective.

This is not an official sponsored project, rather it is a community effort to trial tooling while the network is being developed.

## {.contributing}

Contributions are welcome. Fee free to use the tools and libraries, log issues as you find them or create pull requests for your bug-bears or features.

To get started, take a look at [@polkadot/dev](https://github.com/polkadot-js/dev#readme) which contains the guidelines and styles in addition to the [overall @polkadot project board](https://github.com/orgs/polkadot-js/projects/1) where we track all the issues across the different repositories.

As a new collection of projects, we take quality seriously - library code should be comprehensively [unit tested](https://facebook.github.io/jest/) and interfaces should have [full type definitions](http://typescriptlang.org).
