#!/bin/bash

# Run database migrations
npx drizzle-kit migrate

# If migration succeeds, proceed to build
if [ $? -eq 0 ]; then
  npm run build
else
  echo "Database migration failed. Aborting build."
  exit 1
fi
