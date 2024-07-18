# Fetch Lit contracts and have the same format as general-worker

To run locally, use the following command:

Ensure you have a fine-grain read-only personal access token for the `lit-assets` repository (`GH_LIT_ASSETS_READ_ONLY_API`). For the `LIT_ABI_SOURCE` environment variable, you can set it to either `prod` or `dev`.

- `prod`: Pulls content from the stable network contracts and ABIs found in the [LIT Protocol networks repository](https://github.com/LIT-Protocol/networks).
- `dev`: Pulls content from the [LIT Protocol lit-assets repository](https://github.com/LIT-Protocol/lit-assets), a private repository with frequently changing ABIs and addresses, likely used for internal development.

eg. 

```
LIT_ABI_SOURCE=prod GH_LIT_ASSETS_READ_ONLY_API=xxx bun run fetch-contracts.ts
```

# To trigger build

```
curl -X POST -H "Accept: application/vnd.github.everest-preview+json" \
-H "Authorization: token github_pat_<____YOUR_GITHUB_PERSONAL_ACCESS_TOKEN____>" \
https://api.github.com/repos/LIT-Protocol/lit-contracts/dispatches \
-d '{"event_type":"sync_trigger"}'
```
