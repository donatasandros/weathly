# Weathly

A sleek and simple weather app built with SvelteKit. Enter a city name and get real-time weather updates instantly.

![Project thumbnail](https://github.com/donatasandros/weathly/blob/main/static/thumbnail.jpg)

## Features

- ⚡ Fast and lightweight.
- 🎨 Clean and modern UI.
- 🚀 Rate limiting using [Upstash Redis](https://upstash.com).
- ⚡ Caching using [Upstash Redis](https://upstash.com).

## Getting Started

### 1️⃣ Clone the repository

```sh
git clone https://github.com/donatasandros/weathly.git
```

### 2️⃣ Install dependencies

```sh
bun install
```

### 3️⃣ Set up environment variables

Create a .env file and add your API keys:

```sh
OPEN_WEATHER_API_KEY=
UPSTASH_REDIS_URL=
UPSTASH_REDIS_TOKEN=
```

### 4️⃣ Run the development server

```sh
bun run dev
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
