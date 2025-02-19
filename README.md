# Fetch Lit contracts and have the same format as general-worker

```mermaid
flowchart TB
    subgraph Main Process
        main["main()"] --> procProd["Process Production Networks"]
        main --> procDev["Process Development Networks"]
        main --> genIndex["Generate Index File"]
        main --> summary["Print Network Summary"]
    end

    subgraph Production Flow
        procProd --> |"For each network"| updateProdCache["updateProdCache()"]
        updateProdCache --> getProdABIs["getProdContractABIs()"]
        updateProdCache --> getLastMod["getLastModified()"]
        updateProdCache --> writeCache["Write Cache File"]
    end

    subgraph Development Flow
        procDev --> updateDevCache["updateDevCache()"]
        updateDevCache --> getDevABIs["getDevContractABIs()"]
        updateDevCache --> getLastMod
        updateDevCache --> writeCache
    end

    subgraph File Generation
        genIndex --> |"Generate"| indexTS["dist/index.ts"]
        writeCache --> |"Generate"| prodTS["dist/prod/*.ts"]
        writeCache --> |"Generate"| devTS["dist/dev/*.ts"]
    end

    subgraph Configuration
        config["Constants & Config"]
        networks["Network Definitions"]
        contractMap["Contract Name Mappings"]
        config --> main
        networks --> main
        contractMap --> updateProdCache
        contractMap --> updateDevCache
    end

    subgraph GitHub API
        getProdABIs --> |"Fetch"| ghAPI["GitHub API"]
        getDevABIs --> |"Fetch"| ghAPI
        getLastMod --> |"Fetch"| ghAPI
    end

    style main fill:#f9f,stroke:#333,stroke-width:4px
    style ghAPI fill:#b8d4ff,stroke:#333
    style config fill:#d4ffb8,stroke:#333
```

To run locally, use the following command:

Ensure you have a fine-grain read-only personal access token for the `lit-assets` repository (`GH_LIT_ASSETS_READ_ONLY_API`). For the `LIT_ABI_SOURCE` environment variable, you can set it to either `prod` or `dev`.

- `prod`: Pulls content from the stable network contracts and ABIs found in the [LIT Protocol networks repository](https://github.com/LIT-Protocol/networks).
- `dev`: Pulls content from the [LIT Protocol lit-assets repository](https://github.com/LIT-Protocol/lit-assets), a private repository with frequently changing ABIs and addresses, likely used for internal development.

eg.

```
LIT_ABI_SOURCE=prod GH_LIT_ASSETS_READ_ONLY_API=xxx bun run fetch-contracts.ts

// for specific branch
DEV_BRANCH=develop LIT_ABI_SOURCE=prod GH_LIT_ASSETS_READ_ONLY_API=xxx bun run fetch-contracts.ts
```

# To trigger build

```
curl -X POST -H "Accept: application/vnd.github.everest-preview+json" \
-H "Authorization: token github_pat_<____YOUR_GITHUB_PERSONAL_ACCESS_TOKEN____>" \
https://api.github.com/repos/LIT-Protocol/lit-contracts/dispatches \
-d '{"event_type":"sync_trigger"}'
```

# Installation

```
yarn add @lit-protocol/contracts
```

# Usage

## for "main" branch

### Production (Getting data from `networks` repo )

```
import { datilDev, datilTest, datil } from "@lit-protocol/contracts";

console.log("datilDev:", datilDev);
console.log("datilTest:", datilTest);
console.log("datil:", datil);
```

### Development (Getting data from `lit-assets` repo `develop` branch )

```
import { _datilDev, _datilTest, _datil } from "@lit-protocol/contracts";

console.log("datilDev:", _datilDev);
console.log("datilTest:", _datilTest);
console.log("datil:", _datil);
```

## for any other branches with `dev-` prefix

### Development (Getting data from `lit-assets` repo with whatever the branch name is)

eg. if your branch here is called `dev-datil` then it will pull data from lit-assets `datil` branch

the `dev-` prefix is to allow GitHub action to publish to npm.

```
import { _datilDev, _datilTest, _datil } from "@lit-protocol/contracts";

console.log("datilDev:", _datilDev);
console.log("datilTest:", _datilTest);
console.log("datil:", _datil);
```

# Branching & dev strategy

![](https://i.ibb.co/Z136p20/image.png)

# CI Workflow

![](https://www.plantuml.com/plantuml/png/TP6nSl8m48HxFSMLvf-11p35Ju0KAI0COM1I2ljiYyWdpKaYuUqZ2Po9YtIQtTMdqzx2USa-z5haWoWFhDeM6Kw6FnfjFkT2DL0Cwk5cyVy4V8S4nIwuRY9GEuHYZzOuvGtVOAsSbRvA5jMg4UKRUdYcgs93FPA7esGbpnhTdRraILKtHc-aeea0o7SRmv04k2Vd-SbqiyRhzDyejiRhA0N5QmJoA9EL8VLhnc1XQsgSNHn8gc4PQ2xA5ugzQ1t1DYQHAfN6BlU1eC7uoMbboBEil9jv1vPD_RSRntsOBHAoz3Z5BsiuklqbKLUcxvNFhwTkOTL9QeUQTk6iLHIVTDmArZzLlQFBtrk6ti8HsIaJ1mSOQ0y9af_r0UGDR7UReQUjoPIqF2rlS99CYjgX7-UD5Oju3ht-1W00)
