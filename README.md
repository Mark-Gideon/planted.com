# plantED website (v2)

The redesigned plantED site: React 19, Vite and Tailwind CSS v4.

## Run it

```bash
npm install      # or: pnpm install
npm run dev      # local preview at http://localhost:5173
npm run build    # production files go to dist/
```

Upload the contents of `dist/` to the host, the same way as before.

> If the host serves plain files (cPanel, DreamHost and similar), add an `.htaccess` file to `dist/` so links like `/about` work when the page is refreshed:
>
> ```
> RewriteEngine On
> RewriteCond %{REQUEST_FILENAME} !-f
> RewriteRule ^ index.html [L]
> ```

## Where to edit things

| What | File |
| --- | --- |
| Phone, email, Instagram, location | `src/data/site.js` |
| Services, projects, stats, testimonials, client list | `src/data/content.js` |
| Colours and fonts | `src/index.css` (the `@theme` block) |
| Page layouts | `src/pages/*.jsx` |

## Contact form

The form sends messages through [FormSubmit](https://formsubmit.co) to the email address in `src/data/site.js`.
**The first time someone submits the form, FormSubmit emails an activation link to that address. Click it once,** and every message after that is delivered.

## What changed from v1

- New design: Bitter and Fira Sans type, a palette taken from the orchards (leaf green, avocado flesh, red murram soil), and editorial layouts built around plantED's own photos.
- New homepage section showing an orchard's path from grafted seedling to first harvest, plus an "In the orchard" photo gallery.
- New photos from the plantED photo library (orchard rows, fruit, pollination, packhouse) in the hero, page headers and gallery.
- Photos converted to WebP: about 5.5 MB in total, down from roughly 40 MB.
- Logo trimmed to the tree mark, without the phone number, and given a light version for the footer.
- Bugs fixed:
  - the contact form "sent" on any click and never actually sent anything
  - toast messages never appeared
  - several animations were broken by typos (`inital`, `whileInview`)
  - there were two different street addresses
  - the newsletter box did nothing
- Accessibility: skip link, visible keyboard focus, labelled form fields with error messages, alt text on images, and reduced motion respected.
- A 404 page for unknown links.
