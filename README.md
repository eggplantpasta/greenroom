# Greenroom
[Website](https://eggplantpasta.github.io/greenroom/) for Space Sailer 22 Greenroom.

![QR Code Greenroom Pages](src/assets/images/qr_greenroom_pages.png?raw=true "Greenroom Pages")

## Prerequisites

* Install [NVM](https://github.com/nvm-sh/nvm) using the curl method from here.
* Using NVM install the latest LTS release of [Node.js](https://nodejs.org/en/about/previous-releases) e.g.:

```sh
nvm install lts/krypton
```

## Development

The site is built using [11ty](https://www.11ty.dev/) and published as a static site with GitHub pages.

Content is either HTML (with [default Liquid templating](https://www.11ty.dev/docs/languages/liquid/)) or Markdown.

For local development use the following workflow.

```sh
# make changes to site in /src ...
# generate static site from /src to /docs and serve locally
npm run serve
```

Open the [local site](http://localhost:8080/greenroom/) to view. This will refresh live as you make changes.

## Deployment

The repository 'settings / pages' is configured to publish the GitHub Pages site from the 'main' branch from the `/docs` folder.

The site source files are in the `/src` directory and `.eleventy.js` is configured to generate the static site into `/docs`. Unlike a normal setup we don't `.gitignore` the generated site directory, so when we push changes, the source, as well as the generated site, are both sent to GitHub.

The publishing workflow is as follows.

```sh
# make changes to site in /src ...
# generate static site from /src to /docs
npm run build
# commit changes
git commit -am "Add new pages"
# publish
git push
```
