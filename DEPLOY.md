# Deploy kara-production with Docker

## Build and run locally

```bash
# Build image
docker build -t kara-production .

# Run container (app on http://localhost:3000)
docker run -p 3000:3000 kara-production
```

Or with Docker Compose:

```bash
docker compose up --build
```

## Deploy to a server or cloud

1. **Build** the image on your machine or in CI:
   ```bash
   docker build -t kara-production .
   ```

2. **Push** to a registry (replace with your registry):
   ```bash
   docker tag kara-production your-registry/kara-production:latest
   docker push your-registry/kara-production:latest
   ```

3. **Run** on the server:
   ```bash
   docker pull your-registry/kara-production:latest
   docker run -d -p 3000:3000 --name kara-production your-registry/kara-production:latest
   ```

### Common platforms

- **Railway / Render / Fly.io**: Connect the repo and use the Dockerfile; they will build and run it.
- **AWS ECS / Fargate**: Build and push to ECR, then create a task definition that uses the image.
- **Google Cloud Run**: `gcloud run deploy --source .` (uses Dockerfile automatically).
- **VPS (DigitalOcean, Linode, etc.)**: SSH in, clone repo, `docker compose up -d`.

### Environment variables

If the app needs env vars (e.g. API URLs), pass them at run time:

```bash
docker run -p 3000:3000 -e NEXT_PUBLIC_API_URL=https://api.example.com kara-production
```

Or use a `.env` file (do not commit secrets):

```bash
docker run -p 3000:3000 --env-file .env.production kara-production
```
