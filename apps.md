---
layout: page
title: .apps
---

{% include logo.html %}

<div class="grid rows"></div>

- [@polkadot/apps/next](https://github.com/polkadot-js/apps/tree/next) Basic [Substrate](https://polkadot.js.org/apps/next/) UI for interacting with a node. It has a menu that includes links to the following:
  - "Explorer" page block explorer that shows the best block associated with the connected node
  - "Transfer" page where BBQ may be transferred between accounts and shows associated fees
  - "Staking" page with an overview and an actions tab for a user to stake or nominate with their BBQ
  - "Democracy" page where users may vote on referendums that they may have heard about from a [Polkabot](https://medium.com/polkadot-network/polkabot-a3dba18c20c8) notification
  - "Accounts" page with tabs that allow users to create, edit, forget, change password, backup, or restore an account. It shows their balance and their amount of transactions.
  - "Addresses" page that allows users to add addresses to their address book
  - "Chain state" page that allows users to query the [Storage chain state (runtime) Node Interface](https://polkadot.js.org/api/METHODS_STORAGE.html) methods of the [{.api}](https://github.com/polkadot-js/api) [documentation portal](https://polkadot.js.org/api)
  - "Extrinsics" page that allows users to submit transactions using [Extrinsics (runtime) Node Interface](https://polkadot.js.org/api/METHODS_EXTRINSICS.html) methods of the [{.api}](https://github.com/polkadot-js/api) [documentation portal](https://polkadot.js.org/api)
  - "Settings" page to configure the remote node/endpoint to connect to, including BBQ Birch or Polkadot PoC-3 (hosted by Parity), or a Local Node. Themes for Substrate or Polkadot are available. Interface operation mode may be Fully Featured or provide only basic features
  - "Vanity" page to experiment with generating account addresses
  - "Raw RPC" page that allows users to query and submit Remote Calls using [RPC](https://polkadot.js.org/api/METHODS_RPC.html) methods of the [{.api}](https://github.com/polkadot-js/api) [documentation portal]
  - "Toolbox" page to experiment with generating a hash from a string, signing messages, and verifying a signature

- [@polkadot/apps](https://github.com/polkadot-js/apps) Basic [Polkadot](https://polkadot.js.org/apps/) UI for interacting with a node. It has a menu that includes links to the following:
  - Similar to [@polkadot/apps/next](https://github.com/polkadot-js/apps/tree/next), however DOTs are used instead of BBQs for "Transfer", "Extrinsics", and "Staking". "Chain state" and "Raw RPC" query sections and method keys that are available differ between Polkadot and Substrate. "Settings" is not available on Polkadot.


- The latest stable PoC-2 version is published in the [Polkadot](https://polkadot.js.org/apps/) UI. It is a WIP and contains numerous internal client library packages listed in the Github Readme. [Substrate](https://polkadot.js.org/apps/next/) UI updates for compatibility with PoC-3 "BBQ Birch" testnet are currently being tested using the "next" branch of the Github repository.
