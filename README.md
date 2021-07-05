# Variable Finance Subgraphs

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://raw.githubusercontent.com/KnowYourDeFi/knowyourdefi.github.io/master/LICENSE)

This repository contains the subgraphs of the Variable Finance eco-system. Subgraphs are prelminarily used for the purpose of making querying on blockchain much more faster & quicker. This is a project for HackMoney 2021.

### Table of contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project structure](#project-structure)

### Built with

- [GRAPH PROTOCOL](https://thegraph.com/) - Subgraph Protocol we're using
- [TypeScript](https://www.typescriptlang.org/) - Handler Functions are programmed in TS
- [GraphQL](https://graphql.org/) - Queries are written in GraphQL
- [YAML](https://yaml.org/) - Configuration Files written in YAML
- [GRAPH CLI](https://github.com/graphprotocol/graph-cli) - Graph CLI for development

---

## Getting Started

### Prerequisites

The repository is built using typescript.Also the development of these smart contracts are done in npm version 7.16.0 & NodeJs version 16.1.0. If it returns invalid response then you should install node and npm before proceeding further. Installation of graph cli as global module is also required.

Verify installation using
`npm -v && node -v`

Installing Graph CLI
`npm install -g @graphprotocol/graph-cli`

### Installation

Step by step instructions on setting up the project and running it

1. Clone the repository
   `git clone https://github.com/Variable-Finance/variable-v1-subgraph`
2. Install Dependencies
   `npm install`
3. Generating Codegen Files after editing subgraph.yaml file
   `npm run codegen` or `graph codegen`

   > Make sure you install graph-cli globally before running this command.

4. Building the Subgraph before deployment
   `npm run build` or `graph build`

   > Make sure you install graph-cli globally before running this command.

5. Deploying Sub graphs to hosted provider
   `npm run deploy`

   > This command is for deploying the subgraphs to a hosted network. If the above command throws error due to TS compatibility try running `graph deploy sujithsomraaj/dev --ipfs https://api.thegraph.com/ipfs/ --node https://api.thegraph.com/deploy/`

### Project structure

1. All Configuration Files can be found at [subgraph.yaml](./subgraph.yaml) file.
2. All Schema Declarations can be found at [schema.graphql](./schema.graphql) file.
3. Event handlers can be found under the folder [/src](./src).
   3.1 Each smart contract will have a file named after them. There are 4 smart contracts and there should be 4 mapping files inside the src folder.
4. ABIs are found inside the folder [/abis](./abis).

   > If a smart contract or event is editted then the subgraph.yaml file and the ABI of the contract should've to be changed. They're named after them.

All configuration is done in subgraph.yaml file.
