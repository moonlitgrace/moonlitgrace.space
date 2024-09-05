#!/bin/sh

# Print waiting message
echo "Waiting for the database...\n"
# Wait for PostgreSQL to be ready
./scripts/wait-for-it.sh db:5432 -t 30 -- echo "Database is up"

# Run database migration commands
echo "\nRunning database migrations...\n"
npm run db:generate
npm run db:migrate

# Start the development server
echo "\nStarting the development server...\n"
npm run dev
