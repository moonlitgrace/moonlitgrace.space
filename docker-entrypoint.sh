#!/bin/sh

# Run database migration commands
printf "Running database migrations...\n"
npm run db:generate
npm run db:migrate

# Start the development server
printf "\nStarting the development server...\n"
npm run dev
