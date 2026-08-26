# Monorepo — Thapelo Jonas & Gugu Khazi Websites

A Next.js monorepo powering two personal brand websites:

1. **Thapelo Jonas** (`apps/thapelo-jonas`) — Coach TJ: Life Coach, Speaker, Author, Property Investor, Pastor
2. **Gugu Khazi** (`apps/gugu-khazi`) — Career Coach, Author & International Speaker

Built in **2026**.

## Structure

```
.
├── apps/
│   ├── thapelo-jonas/       # Coach TJ website (preserved as-is)
│   └── gugu-khazi/          # Gugu Khazi website
├── packages/
│   ├── tsconfig/            # Shared TypeScript configs
│   ├── tailwind-config/     # Shared Tailwind configuration
│   └── ui/                  # Shared UI components
├── package.json
├── pnpm-workspace.yaml
└── turbo.json
```

## Tech Stack

- **Framework**: Next.js 16 + React 19
- **Styling**: Tailwind CSS v4
- **Package Manager**: pnpm 11.18.0
- **Monorepo**: Turborepo
- **Language**: TypeScript

## Getting Started

```bash
# Install dependencies for all workspaces
pnpm install

# Run both dev servers
pnpm dev

# Build both apps for production
pnpm build

# Run a specific app
cd apps/thapelo-jonas && pnpm dev
cd apps/gugu-khazi && pnpm dev
```

## About Thapelo Jonas (Coach TJ)

Internationally certified life coach, speaker, author of *Made to Win*, property investor, and pastor based in Bloemfontein, South Africa. Empowering people to prosper in life, business, and finances.

- **Website**: thapelojonas.com
- **Book**: Made to Win — 9 Irrefutable Laws to Win the Money Game
- **Radio**: Monate Breakfast Show, Lesedi FM

## About Gugu Khazi

Author, talent consultant, career coach, and international speaker specialising in personal career management and leadership development. With over 20 years of senior HR leadership experience across South Africa, Europe, and the Middle East.

### Books
- **Passion to Careers**: Nine steps to building a successful career from your passion
- **Master Your Career**: Navigating the 12 Stages of Your Fulfilling Career

## License

All rights reserved.
