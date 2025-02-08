# Nepal Codes

## Introduction

This is the repository for [Nepalcodes website](https://www.nepalcodes.com). Its built with [Astro](https://astro.build/).

Of course you are welcome to **contribute** to this, please check the contributing section below. If you need help setting up project, contributing, or anything else please don't hesitate join us on [Discord](https://discord.gg/xDCGAu2X2s).

## Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets, like images, can be placed in the `public/` directory.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                    | Action                                           |
| :------------------------- | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm run dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm run build`           | Build your production site to `./dist/`          |
| `pnpm run preview`         | Preview your build locally, before deploying     |
| `pnpm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm run astro -- --help` | Get help using the Astro CLI                     |

## Installation Steps

### Install PNPM

### Project setup

```
pnpm install
```

## Contributing

### Commit your code

1. Make sure you are on the most recent/updated version: `git fetch`
2. Create a new branch (Make sure you are NOT on the `main` branch!!)
3. Make your changes
4. Commit all your code
5. Push it to GitHub: `git push`
6. Create a pull request (on GitHub)
7. Test it at `<your branch name>.nepalingo.pages.dev` or the link created by the cloudflare pages bot
8. Once its been approved, merge it to `main` in GitHub

## Credits

https://github.com/nepalcodes/nepal-codes.github.io/graphs/contributors
