# Fetch Lit contracts and have the same format as general-worker

```
LIT_ABI_SOURCE=prod GH_LIT_ASSETS_READ_ONLY_API=xxx bun run fetch-contracts.ts
```

# To trigger build

```
curl -X POST -H "Accept: application/vnd.github.everest-preview+json" \
-H "Authorization: token github_pat_XXXXXX" \ 
https://api.github.com/repos/LIT-Protocol/lit-contracts/dispatches \
-d '{"event_type":"sync_trigger"}'
```