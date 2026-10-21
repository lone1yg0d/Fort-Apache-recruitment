# Fort Apache · Hose Company No. 5

Recruitment website template for Fort Apache Hose Company No. 5, Freeport, New York. Fighting fires since 1923.

The firehouse photo stays fixed across the whole site while text and panels float into view as you scroll. Includes a company gallery, questions about joining, and a demonstration recruitment form. The layout adapts to phones and computers and respects reduced-motion preferences.

## Upload to GitHub

1. Extract this ZIP on your computer.
2. Create a GitHub repository. Suggested name: `fort-apache-recruitment`.
3. Open the repository and choose **Add file → Upload files** (a new empty repository may show an **uploading an existing file** link).
4. Upload the extracted files and the entire `assets` folder. Keep `index.html` at the top level of the repository. Upload the contents of the extracted folder, rather than the ZIP itself or an extra enclosing folder.
5. Commit the files to `main`.

## Publish using GitHub Pages

1. In your repository, open **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
3. Select **main**, select **/(root)**, then **Save**.
4. When deployment completes, use the website link shown on that Pages screen.

No install command, build command, or start command is required for GitHub Pages. This is a static HTML/CSS/JavaScript site.

GitHub's instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Included files

| File | Purpose |
| --- | --- |
| `index.html` | All website sections, text, links, and form markup |
| `style.css` | Colors, layout, fixed photo background, mobile layout, and animation styles |
| `app.js` | Scroll reveals and demonstration form behavior |
| `assets/firehouse-original.jpeg` | Original first photo used as the fixed background |
| `assets/company-training.jpeg` | Company training gallery photo |
| `assets/fireground.jpeg` | Fireground gallery photo |
| `assets/apparatus.jpeg` | Apparatus detail gallery photo |
| `assets/engine.jpeg` | Fire engine gallery photo |
| `.nojekyll` | Identifies the publishing folder as plain static files |
| `.gitignore` | Keeps common computer and temporary files out of Git |

The image files are the supplied screenshots. CSS displays the photo portions; no image-generation changes were made to them. Keep the current background image dimensions if replacing that file, or adjust the `.scene-photo img` crop in `style.css`. Gallery crops use `.gallery-photo img`.

## Preview on your computer

Open `index.html` in a web browser. For a local web server, run this command from the extracted folder if Python is installed:

```bash
python -m http.server 8000
```

Then open http://localhost:8000.

## Make changes

- Edit wording, links, and form fields in `index.html`.
- Edit colors and layout in `style.css`. The final section beginning with `One stationary firehouse scene` contains the current background and overlay styling.
- Edit scroll behavior in `app.js`. Text reveals on its first entry into the viewport.
- Upload changes to GitHub and commit them to the publishing branch to update the website.

## Recruitment form

**The form is a demonstration. It does not send or save enquiries.** A company-approved email address and a form service or backend must be connected before collecting applications. The page clearly labels this behavior.

All five photos and the website code are included. Fonts load from Google Fonts when available, with system font fallbacks. Instagram and company-history links open external websites.
