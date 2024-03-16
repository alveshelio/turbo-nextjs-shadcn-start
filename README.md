# UdeM starter

This is a starter template for a [Nextjs](https://nextjs.org/) in a [Turborepo](https://turbo.build/) monorepo setup. 

### Apps and Packages

- `@umontreal/web-app`: a [Next.js](https://nextjs.org/) app
- `@umontreal/web-app-e2e`: End To End tests with [Playwright](https://playwright.dev/)
- `@umontreal/eslint-config-custom`: `eslint` configurations for client side applications (includes `eslint-config-next` and `eslint-config-prettier`)
- `@umontreal/typescript-config`: tsconfig.json's used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

## Web App (NextJs)
NextJs is a React framework that enables server-side rendering for React based web applications.
It is packed with the following packages:
- [Shadcn UI](https://ui.shadcn.com/) a React component library
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Storybook](https://storybook.js.org/) for component development
- [Vitest](https://vitest.dev/) for unit testing
- [Tanstack Query](https://tanstack.com/query/latest/docs/framework/react/overview) for data fetching and mutations
- [Tanstack React Table](https://tanstack.com/react-table/latest/docs/overview) for table rendering
- [React Hook Form](https://react-hook-form.com/) for form handling
- [Zod](https://zod.dev/) for data validation
- [I18next](https://www.i18next.com/) for internationalization

### Docker

This repo is configured to be built with Docker, and Docker compose. To build all apps in this repo:

```
# Create a network, which allows containers to communicate
# with each other, by using their container name as a hostname
docker network create app_network

# Build prod using new BuildKit engine
COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose -f docker-compose.yml build

# Start prod in detached mode
docker-compose -f docker-compose.yml up -d
```

Open http://localhost:3000.

To shutdown all running containers:

```
# Stop all running containers
docker kill $(docker ps -q) && docker rm $(docker ps -a -q)
```

### Remote Caching

This example includes optional remote caching. In the Dockerfiles of the apps, uncomment the build arguments for `TURBO_TEAM` and `TURBO_TOKEN`. Then, pass these build arguments to your Docker build.

You can test this behavior using a command like:

`docker build -f apps/web-app/Dockerfile . --build-arg TURBO_TEAM=“your-team-name” --build-arg TURBO_TOKEN=“your-token“ --no-cache`

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Vitest](https://vitest.dev/) test runner for all things JavaScript
- [Prettier](https://prettier.io) for code formatting
