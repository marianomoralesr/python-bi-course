#!/bin/bash

# =============================================================================
# Railway Deployment Script for Python BI Course
# =============================================================================

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
PROJECT_NAME="python-bi-course"
DOCKER_IMAGE="python-bi-course:latest"

echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}  Python BI Course - Railway Deployment${NC}"
echo -e "${BLUE}========================================${NC}"
echo ""

# Check for required tools
check_requirements() {
    echo -e "${YELLOW}Checking requirements...${NC}"

    if ! command -v docker &> /dev/null; then
        echo -e "${RED}Error: Docker is not installed${NC}"
        echo "Please install Docker: https://docs.docker.com/get-docker/"
        exit 1
    fi

    if ! command -v railway &> /dev/null; then
        echo -e "${YELLOW}Railway CLI not found. Installing...${NC}"
        npm install -g @railway/cli
    fi

    echo -e "${GREEN}All requirements met!${NC}"
    echo ""
}

# Build the Docker image
build_image() {
    echo -e "${YELLOW}Building Docker image...${NC}"

    # Build with production environment
    docker build \
        --build-arg VITE_SUPABASE_URL="${VITE_SUPABASE_URL}" \
        --build-arg VITE_SUPABASE_ANON_KEY="${VITE_SUPABASE_ANON_KEY}" \
        --build-arg VITE_ANTHROPIC_API_KEY="${VITE_ANTHROPIC_API_KEY}" \
        -t ${DOCKER_IMAGE} \
        -f Dockerfile.railway .

    echo -e "${GREEN}Docker image built successfully!${NC}"
    echo ""
}

# Login to Railway
railway_login() {
    echo -e "${YELLOW}Checking Railway authentication...${NC}"

    if ! railway whoami &> /dev/null; then
        echo -e "${YELLOW}Please login to Railway:${NC}"
        railway login
    else
        echo -e "${GREEN}Already logged in to Railway${NC}"
    fi
    echo ""
}

# Deploy to Railway
deploy_to_railway() {
    echo -e "${YELLOW}Deploying to Railway...${NC}"

    # Check if project is linked
    if ! railway status &> /dev/null; then
        echo -e "${YELLOW}No Railway project linked. Creating new project...${NC}"
        railway init
    fi

    # Deploy using Railway CLI
    railway up --detach

    echo -e "${GREEN}Deployment initiated!${NC}"
    echo ""
}

# Get deployment URL
get_deployment_url() {
    echo -e "${YELLOW}Getting deployment URL...${NC}"

    # Wait a moment for deployment to register
    sleep 5

    echo ""
    echo -e "${GREEN}========================================${NC}"
    echo -e "${GREEN}  Deployment Complete!${NC}"
    echo -e "${GREEN}========================================${NC}"
    echo ""
    echo -e "View your deployment status:"
    echo -e "  ${BLUE}railway status${NC}"
    echo ""
    echo -e "Open your app:"
    echo -e "  ${BLUE}railway open${NC}"
    echo ""
    echo -e "View logs:"
    echo -e "  ${BLUE}railway logs${NC}"
    echo ""
}

# Main deployment flow
main() {
    # Load environment variables if .env exists
    if [ -f .env ]; then
        echo -e "${YELLOW}Loading environment variables from .env${NC}"
        set -a
        source .env
        set +a
    fi

    check_requirements
    build_image
    railway_login
    deploy_to_railway
    get_deployment_url
}

# Help message
show_help() {
    echo "Usage: ./deploy.sh [OPTION]"
    echo ""
    echo "Options:"
    echo "  --build-only    Only build the Docker image"
    echo "  --deploy-only   Only deploy to Railway (assumes image exists)"
    echo "  --help          Show this help message"
    echo ""
    echo "Environment Variables (set in .env or export):"
    echo "  VITE_SUPABASE_URL        Supabase project URL"
    echo "  VITE_SUPABASE_ANON_KEY   Supabase anonymous key"
    echo "  VITE_ANTHROPIC_API_KEY   Anthropic API key (optional)"
}

# Parse arguments
case "$1" in
    --build-only)
        if [ -f .env ]; then
            set -a
            source .env
            set +a
        fi
        check_requirements
        build_image
        ;;
    --deploy-only)
        check_requirements
        railway_login
        deploy_to_railway
        get_deployment_url
        ;;
    --help)
        show_help
        ;;
    *)
        main
        ;;
esac
