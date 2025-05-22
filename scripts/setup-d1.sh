#!/bin/bash

# Script to create and set up the Cloudflare D1 database
echo "🚀 Setting up Cloudflare D1 database for portfolio contact form..."

# Create the D1 database
echo "Creating D1 database..."
DB_OUTPUT=$(npx wrangler d1 create portfolio_db 2>&1)

# Extract the database ID from the output
DB_ID=$(echo "$DB_OUTPUT" | grep -oE 'database_id = "[^"]+"' | cut -d '"' -f 2)

if [ -z "$DB_ID" ]; then
  echo "❌ Failed to create database or extract database ID."
  echo "Check if the database already exists or if you're logged in to Cloudflare."
  exit 1
fi

echo "✅ Database created with ID: $DB_ID"

# Update the wrangler.jsonc file with the database ID
echo "Updating wrangler.jsonc with database ID..."
sed -i '' -e "s/your-database-id-will-go-here/$DB_ID/" wrangler.jsonc

echo "✅ wrangler.jsonc updated."

# Run the migration to create contacts table
echo "Running database migration..."
npx wrangler d1 execute portfolio_db --file=./migrations/0000_create_contacts_table.sql

# Create local development database
echo "Creating local development database..."
npx wrangler d1 execute portfolio_db --local --file=./migrations/0000_create_contacts_table.sql

echo "✅ Migration completed successfully."
echo "🎉 D1 database setup complete! Your contact form is now ready to use Cloudflare D1."
