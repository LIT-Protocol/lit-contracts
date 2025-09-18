# Lit Protocol Contract Fetcher

A TypeScript utility for fetching and caching Lit Protocol contract ABIs and addresses. This tool maintains consistent contract data formats across the Lit Protocol ecosystem.

## Architecture

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

## Project Structure

```
src/
├── config/          # Configuration constants and network definitions
├── services/        # Core business logic services
├── types/           # TypeScript type definitions
├── utils/           # Utility functions
└── index.ts        # Main entry point
```

## Prerequisites

- Node.js 16 or higher
- GitHub Personal Access Token with read permissions (eg. fine grained token for public repositories only)

## Environment Variables

- `GH_API_KEY`: GitHub Personal Access Token (required)
- `DEV_BRANCH`: Development branch name (defaults to 'develop')

## Installation

```bash
yarn add @lit-protocol/contracts
```

## Usage

### Production Networks (from 'networks' repo)

```typescript
import { datilDev, datilTest, datil } from "@lit-protocol/contracts";

console.log("datilDev:", datilDev);
console.log("datilTest:", datilTest);
console.log("datil:", datil);
```

### Development Networks (from 'lit-assets' repo)

```typescript
import { develop } from "@lit-protocol/contracts";

console.log("Development contracts:", develop);
```

## Local Development

1. Clone the repository
2. Install dependencies:
   ```bash
   bun install
   ```
3. Set up environment variables:
   ```bash
   export GH_API_KEY=your_github_token
   export GH_LIT_ASSETS_READ_ONLY_API=your_github_token
   export LIT_ABI_SOURCE=prod  # or 'dev'
   ```
4. Run:

   ```bash
   DEV_BRANCH=develop bun run start
   ```

## CI/CD Workflow

![](https://www.plantuml.com/plantuml/png/TP6nSl8m48HxFSMLvf-11p35Ju0KAI0COM1I2ljiYyWdpKaYuUqZ2Po9YtIQtTMdqzx2USa-z5haWoWFhDeM6Kw6FnfjFkT2DL0Cwk5cyVy4V8S4nIwuRY9GEuHYZzOuvGtVOAsSbRvA5jMg4UKRUdYcgs93FPA7esGbpnhTdRraILKtHc-aeea0o7SRmv04k2Vd-SbqiyRhzDyejiRhA0N5QmJoA9EL8VLhnc1XQsgSNHn8gc4PQ2xA5ugzQ1t1DYQHAfN6BlU1eC7uoMbboBEil9jv1vPD_RSRntsOBHAoz3Z5BsiuklqbKLUcxvNFhwTkOTL9QeUQTk6iLHIVTDmArZzLlQFBtrk6ti8HsIaJ1mSOQ0y9af_r0UGDR7UReQUjoPIqF2rlS99CYjgX7-UD5Oju3ht-1W00)

## License

MIT
