```ts
// WHOAMI
export const metadata: Metadata = {
  title: 'Moonlitgrace',
  description:
    'Step into Moonlitgrace, where a passionate web developer and
    open-source contributor shares insights, projects, and
    creativity—all under the alias Moonlitgrace.',
};
```

## Development

This is a containerized next.js app, so I recommend you to run it with docker or podman.

> [!IMPORTANT]
> You can use [docker](https://www.docker.com/) or [podman](https://podman.io/)\
> Here I will show you with podman.

### Basic Steps

* `git clone https://github.com/moonlitgrace/space moonlitspace`
* `cd moonlitspace`
* `npm i`

### Configure environment variables

From repo you will get 3 `.env` files such as:
* `.env.development`
* `.env.example`
* `.env.local.example`

For development you only have to change `.env.local.example` like:
* First create `.env.local` with:
  `cp .env.local.example .env.local`

For `SECRET_KEY` you can use anything since it is for development. You can use this `openssl rand -base64 32` to create for production.

As for `ADMIN_USERNAME` and `ADMIN_PASSWORD` add something to authenticate only you.

### Run containers

After setting required env variables, let's start containers with one command:\
`podman-compose -f docker-compose.dev.yml up -d --build`

And that's it, docker will setup everything for you, and once its done, visit: `http://localhost:3000`\

Consider [issue tracker](https://github.com/moonlitgrace/space/issues) if you see any problem setting it up, happy coding!
