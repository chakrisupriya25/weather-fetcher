# Weather Fetcher

A tiny static website that fetches current weather from OpenWeatherMap and shows it.

## Setup

1. Get a free API key from https://openweathermap.org/api.
2. Open `script.js` and replace `YOUR_OPENWEATHERMAP_API_KEY` with your API key.

Because this is a client-side demo, the API key will be visible in the browser. For production, run a small server-side proxy to keep the key secret.

## Run locally

You can just open `index.html` in your browser, or run a simple static server:

- Python 3: `python -m http.server 8000`
- Node (install http-server): `npx http-server -c-1`

Then visit `http://localhost:8000`.

## Notes

- This repo is MIT licensed.
