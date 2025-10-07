# #genai
# Simple Docker Setup for AIngine Landing Page

This project uses a simple Dockerfile to build and run the React/Vite application.

## Prerequisites

- Docker installed on your system

## Quick Start

### Build and Run

```bash
# Build the Docker image
docker build -t aingine-landingpage .

# Run the container
docker run -p 3000:3000 aingine-landingpage
```

The application will be available at `http://localhost:3000`

### One-liner Commands

```bash
# Build and run in one command
docker build -t aingine-landingpage . && docker run -p 3000:3000 aingine-landingpage

# Run in background (detached)
docker run -d -p 3000:3000 --name aingine-app aingine-landingpage

# Stop the container
docker stop aingine-app

# Remove the container
docker rm aingine-app
```

## Docker Commands

```bash
# Build image
docker build -t aingine-landingpage .

# Run container
docker run -p 3000:3000 aingine-landingpage

# Run in background
docker run -d -p 3000:3000 --name aingine-app aingine-landingpage

# View logs
docker logs aingine-app

# Stop container
docker stop aingine-app

# Remove container
docker rm aingine-app

# Remove image
docker rmi aingine-landingpage
```

## What's Included

- `Dockerfile` - Simple single-stage build
- `.dockerignore` - Files to exclude from build context

## Troubleshooting

### Port Already in Use

If port 3000 is already in use, change the port:

```bash
docker run -p 3001:3000 aingine-landingpage
```

### Clean Up

To clean up Docker resources:

```bash
# Remove all containers
docker container prune

# Remove all images
docker image prune -a

# Clean up everything
docker system prune -a
```
