# GrowPet Beta 3 Family Pilot Deployment

This directory is the static production deployment package for GrowPet Beta 3 Family Pilot.

## Contents

- `index.html`
- `styles.css`
- `app.js`
- `manifest.webmanifest`
- `service-worker.js`
- `data/`
- `assets/`

## Local Smoke Test

```bash
cd dist
python3 -m http.server 4181
```

Open:

```text
http://127.0.0.1:4181
```

## Deploy

Upload every file in `dist/` to the root of a static web host.

The PWA should be served from HTTPS in production. Localhost is acceptable for local testing.

## PWA Checks

After deployment, verify:

- `manifest.webmanifest` is reachable.
- `service-worker.js` is reachable from the site root.
- `assets/icons/icon-192.png` is reachable.
- `assets/icons/icon-512.png` is reachable.
- Safari can add GrowPet to the iPhone/iPad home screen.

## Data

GrowPet stores family data in browser localStorage:

```text
growpet.phase3b.state
```

Ask parents to export JSON saves from `我的 -> 存档安全` before extended trials.
