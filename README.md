# Cruise Landing Page Starter

An open-source, AI-assisted landing page starter for cruise and travel businesses.

This repository contains a real-world reference implementation for a Busan–Kobe cruise landing page and is intended to evolve into a reusable starter for travel agencies, educators, creators, and non-developers who want to build and deploy responsive travel landing pages quickly.

## Why this project exists

Small travel businesses often need campaign pages quickly, but building each landing page from scratch is expensive and repetitive. This project explores a reusable workflow where structured content, responsive components, and AI-assisted coding can shorten the time from travel-product information to a deployed landing page.

The current Busan–Kobe cruise page is the first reference implementation. Future work will focus on making the content, itinerary, imagery, calls to action, and deployment workflow easier to reuse for other cruise and travel products.

## Current features

- Responsive cruise landing page structure
- Travel-focused hero and campaign sections
- Reusable React components
- Image assets organized for cruise content
- Vercel deployment support
- Git-based deployment workflow
- Starter architecture that can be extended for additional destinations and products

## Tech stack

- React 19
- Next.js 16
- TypeScript
- Tailwind CSS 4
- vinext / Vite-based development tooling
- Vercel for deployment

The project currently requires Node.js `>=22.13.0`.

## Getting started

```bash
git clone https://github.com/jayee72-oss/cruiseya-kobe-couple-vercel.git
cd cruiseya-kobe-couple-vercel
npm install
npm run dev
```

To verify a production build:

```bash
npm run build
```

To run the included test flow:

```bash
npm test
```

## Project structure

```text
app/          App-level routes and styles
components/   Reusable UI components
public/       Public images and static assets
src/          Supporting source code
tests/        Test files
db/           Database-related starter files
examples/     Optional examples
```

## Reference implementation

The first implementation is a promotional landing page for a Busan–Kobe cruise product. It demonstrates how a travel campaign can combine itinerary information, persuasive content, visual assets, and conversion-oriented sections in a deployable web experience.

This repository is not presented as a mature framework yet. It is an actively evolving reference implementation and starter project.

## AI-assisted development

The project is being developed with AI-assisted coding workflows, including ChatGPT/Codex-supported iteration. Planned maintainer workflows include:

- code generation and refactoring
- regression and build checks
- documentation improvements
- issue triage and implementation planning
- pull-request review assistance
- repetitive maintenance automation

The goal is to document which AI-assisted workflows are genuinely useful for maintaining small open-source web projects.

## Roadmap

- [ ] Extract cruise-product content into reusable structured data
- [ ] Create reusable itinerary and pricing components
- [ ] Add configuration for multiple cruise products
- [ ] Improve accessibility and responsive behavior
- [ ] Add automated tests for major landing-page sections
- [ ] Add deployment and customization documentation
- [ ] Provide a clean starter/demo data set that is independent of one commercial campaign
- [ ] Add examples for other travel products and destinations

## Contributing

Contributions, bug reports, documentation improvements, and implementation ideas are welcome. Please read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request.

## Security and sensitive data

Do not commit API keys, credentials, private customer data, or other secrets to this repository. Use environment variables and platform secret-management features for sensitive configuration.

## License

This project is licensed under the [MIT License](LICENSE).

## Maintainer

Maintained by [jayee72-oss](https://github.com/jayee72-oss).
