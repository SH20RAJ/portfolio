#!/bin/bash

# This script deploys the portfolio app to Cloudflare Pages
# It ensures the D1 database is properly connected

# Set variables
APP_NAME="portfolio"
DATABASE_NAME="portfolio_db"

# Colors for terminal output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${GREEN}=== Portfolio Deployment Script ===${NC}"
echo -e "${YELLOW}Checking Cloudflare login status...${NC}"

# Check if user is logged into Cloudflare
CF_LOGIN_STATUS=$(npx wrangler whoami 2>&1)
if [[ $CF_LOGIN_STATUS == *"You are not authenticated"* ]]; then
  echo -e "${RED}You are not logged into Cloudflare. Please login first:${NC}"
  npx wrangler login
fi

echo -e "${YELLOW}Verifying D1 database exists...${NC}"

# Check if the D1 database exists
DB_CHECK=$(npx wrangler d1 list 2>&1)
if [[ $DB_CHECK != *"$DATABASE_NAME"* ]]; then
  echo -e "${RED}Database $DATABASE_NAME not found. Creating it now...${NC}"
  npx wrangler d1 create $DATABASE_NAME
  
  # Run migration to set up the tables
  echo -e "${YELLOW}Running database migration...${NC}"
  npx wrangler d1 execute $DATABASE_NAME --file=./migrations/0000_create_contacts_table.sql
else
  echo -e "${GREEN}Database $DATABASE_NAME found!${NC}"
fi

# Build the application with OpenNext for Cloudflare
echo -e "${YELLOW}Building the application...${NC}"
npm run build || { echo -e "${RED}Build failed!${NC}"; exit 1; }

# Deploy to Cloudflare
echo -e "${YELLOW}Deploying to Cloudflare Pages...${NC}"
npx opennextjs-cloudflare deploy || { echo -e "${RED}Deployment failed!${NC}"; exit 1; }

echo -e "${GREEN}Deployment complete! Your portfolio site is now live with D1 integration.${NC}"
