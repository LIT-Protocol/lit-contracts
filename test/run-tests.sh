#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${GREEN}Running all import tests...${NC}\n"

# Run TypeScript test
echo "Running TypeScript tests..."
bun run ./test/ts.test.ts || { echo -e "${RED}TypeScript tests failed${NC}"; exit 1; }
echo -e "${GREEN}TypeScript tests passed${NC}\n"

# Run ESM test
echo "Running ESM tests..."
node ./test/esm.test.js || { echo -e "${RED}ESM tests failed${NC}"; exit 1; }
echo -e "${GREEN}ESM tests passed${NC}\n"

# Run CommonJS test
echo "Running CommonJS tests..."
node ./test/cjs.test.cjs || { echo -e "${RED}CommonJS tests failed${NC}"; exit 1; }
echo -e "${GREEN}CommonJS tests passed${NC}\n"

echo -e "${GREEN}All tests passed successfully!${NC}" 