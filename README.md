# NothingBuilt

> Your art. Your rules. Your revenue.

[![License: MIT](https://img.shields.io/badge/License-MIT-gold.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org)
[![Part of](https://img.shields.io/badge/MrNothing-Movement-purple)](https://github.com/Davidcarmelalex/MrNothing)

**NothingBuilt** is an underground sanctuary for independent artists — a platform to claim your craft, protect your work, and reclaim power from big labels and distribution gatekeepers.

---

## For Artists

```
Own your master recordings
Publish directly to fans
Set your own prices
Build your community
No label. No middleman. No compromise.
```

---

## Architecture

```
nothingbuilt/
├── src/app/
│   ├── page.tsx          Artist discovery feed
│   ├── profile/[id]/     Artist profile and music
│   ├── upload/           Music and content upload
│   ├── community/        Artist community feed
│   └── protect/          Rights and ownership tools
├── lib/
│   ├── audio.ts          Audio processing utilities
│   └── rights.ts         Ownership and copyright tools
├── server/               Backend API + storage
└── tests/
```

---

## Features

| Feature | Description |
|---------|-------------|
| 🎵 Direct publishing | Upload and publish music without intermediaries |
| 🔐 Rights protection | Register ownership with verifiable on-chain proof |
| 💰 Direct monetization | Fan payments go straight to the artist |
| 🤝 Community | Connect with other independent creators |
| 📊 Analytics | See who's listening, where, and when |

---

## Stack

Next.js 16 · TypeScript · Tailwind CSS 4 · Node.js · PostgreSQL · IPFS (media storage)

---

## Quick Start

```bash
git clone https://github.com/Davidcarmelalex/nothingbuilt
cd nothingbuilt && npm install
cp .env.example .env.local && npm run dev
```
