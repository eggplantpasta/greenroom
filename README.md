# Greenroom

Website and blog for **Greenroom**, a 1976 Space Sailer 22.

The site is available at:

https://greenroom.pudiga.org/

## Development

Greenroom is a static site built with:

- [Eleventy](https://www.11ty.dev/)
- [Build Awesome One](https://buildawesome.one/)
- [Blades CSS](https://blades.ninja/)

The Build Awesome tooling and Node dependencies live in the `.build` directory.

### Prerequisites

Node.js and npm are required.

The site is currently developed using Node.js 22.

### Install

After cloning the repository:

```sh
cd .build
npm install
```

For a clean, reproducible install using the committed lockfile:

```sh
npm ci
```

## Local development

From `.build`:

```sh
npm start
```

This starts the Eleventy development server and rebuilds the site as files change.

To preview a production build locally:

```sh
npm run stage
```

## Building

From `.build`:

```sh
npm run build
```

The generated static site is written to:

```text
.build/_site/
```

The generated `_site` directory is not committed to Git.

## Content

Site content lives primarily in the `blog` directory.

Individual articles are Markdown files:

```text
blog/
├── index.njk
├── posts.json
├── restoring-sail.md
├── engine-v2.md
└── ...
```

`blog/index.njk` generates the site homepage at `/`.

Images are generally hosted separately at:

```text
https://images.pudiga.org/greenroom/
```

## Markdown

The site uses Build Awesome One's standard Markdown configuration with the additional `markdown-it-task-checkbox` plugin to support task lists:

```markdown
- [x] Completed
- [ ] Still to do
```

Greenroom-specific Eleventy configuration is in:

```text
.build/greenroom.config.js
```

This imports the standard Build Awesome One configuration and then applies Greenroom-specific customisation.

## Deployment

The site is published using **GitHub Pages**.

Pushing to the `main` branch triggers the GitHub Actions workflow:

```text
.github/workflows/pages.yml
```

The workflow:

1. Checks out the repository.
2. Installs the Node dependencies from `.build/package-lock.json`.
3. Runs the production build.
4. Uploads `.build/_site` as the GitHub Pages artifact.
5. Deploys the artifact to GitHub Pages.

There is no need to build or commit the generated site manually.

Normal publishing is therefore simply:

```sh
git add .
git commit -m "Update site"
git push
```

GitHub Actions handles the build and deployment.

## Domain

The public site uses the custom domain:

https://greenroom.pudiga.org/

DNS is managed through Cloudflare, with `greenroom.pudiga.org` pointing to GitHub Pages.