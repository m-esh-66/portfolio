# Portfolio

Marcus Eshleman's personal site, live at **https://m-esh-66.github.io/portfolio**.

A plain static site with no build step and no dependencies. Push to `main` and GitHub Pages publishes it within a minute or two.

## Editing content

Everything shown on the site is in [`content.js`](content.js): the intro, projects, skills and contact email. Edit it and push. Optional fields can be deleted, and a section with no content is hidden automatically.

### Add a project

Copy an existing entry in the `projects` list and change it. Projects appear in list order.

```js
{
  name: 'Project name',
  description: 'One or two sentences about what it does and what you did.',
  stack: ['Python', 'OpenCV'],
  sourceCode: 'https://github.com/m-esh-66/repo',    // optional
  livePreview: 'https://example.com',                // optional
  media: 'media/project-name.png',                   // optional
},
```

### Add an image or video

1. Put the file in [`media/`](media/).
2. Set `media` on the project (each project has a commented-out `// media:` line ready to fill in).

| You have          | Use                                                       |
| ----------------- | --------------------------------------------------------- |
| Image             | `media: 'media/plot.png'` (png, jpg, gif, webp, svg)      |
| Video             | `media: 'media/demo.mp4'` (mp4 or webm)                   |
| YouTube / Vimeo   | `media: 'https://www.youtube.com/watch?v=VIDEO_ID'`       |

For more control, pass an object; every key except `src` is optional:

```js
media: {
  src: 'media/demo.mp4',
  alt: 'Drone locating the drop zone',  // read aloud by screen readers
  caption: 'Test flight, March 2026',   // small text under the media
  poster: 'media/demo.jpg',             // video thumbnail before it plays
  autoplay: true,                       // play silently on loop, like a GIF
  fit: 'contain',                       // show the whole image instead of cropping to 16:9
}
```

Images open full-size when clicked. Keep files small. Aim for images under 500 KB and videos under 10 MB (GitHub rejects files over 100 MB). Phone videos (`.MOV`, usually HEVC) don't play in most browsers. Convert them with ffmpeg:

```sh
ffmpeg -i IMG_1234.MOV -vf "scale=1280:-2" -c:v libx264 -crf 28 -preset slow -an -movflags +faststart media/demo.mp4
```

## Preview locally

Opening `index.html` directly in a browser works. To match GitHub Pages exactly, serve the folder instead:

```sh
python -m http.server 8000   # then open http://localhost:8000
```

## Files

```
index.html            page structure
content.js            all site content (edit this)
media/                project images and videos
assets/css/style.css  styles, with light and dark theme colours at the top
assets/js/main.js     renders content.js into the page
Marcus_Eshleman_Resume.pdf
```

## Deployment

GitHub Pages serves the `main` branch root (Settings → Pages → Deploy from a branch → `main` / `/ (root)`). `.nojekyll` tells Pages to serve the files as they are.

The earlier React version of this site, based on Raj Shekhar's [cleanfolio](https://github.com/rjshkhr/cleanfolio) template (MIT, see [LICENSE](LICENSE)), is in the git history up to commit `f42c548`.
