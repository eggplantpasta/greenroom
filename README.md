# Greenroom
[Website](https://eggplantpasta.github.io/greenroom/) for Space Sailer 22 Greenroom.

![QR Code Greenroom Pages](src/assets/images/qr_greenroom_pages.png?raw=true "Greenroom Pages")

# Development

The site is built using [11ty](https://www.11ty.dev/) and published with GitHub pages.

The site source files are in the `/src` directory and `.eleventy.js` is configured to generate the static site into `/docs`. Unlike a normal setup we don't `.gitignore` the generated site directory, so when we push changes, the source, as well as the generated site, are both sent to GitHub.

The repository settings / pages is configured to publish the GitHub Pages site from the main branch from the `/docs` folder.

The publishing workflow is as follows.

```sh
# make changes to site in /src ...
# generate static site from /src to /docs
npm run build
# commit changes
git commit -am "Add new pages"
# publish
git commit push
```
