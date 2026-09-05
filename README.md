# Vera Zhou -- Portfolio Website

Personal portfolio for CMU 15-113, Project 1. Plain HTML/CSS/JS, no build step,
deployed on GitHub Pages.

## Structure

```
index.html        Home / hero
about.html         Bio, education, skills, experience timeline
projects.html      Project cards (placeholders -- fill in as the semester goes)
contact.html       Email, GitHub, resume link
css/style.css      All styling, theme tokens, responsive rules
js/script.js       Dark/light mode toggle + active-nav-link helper
assets/            Put your headshot and resume PDF here
prompt-log.md      Required: paste your actual AI prompts/replies here
```

## Before you submit -- personalization checklist

- [ ] Add your headshot to `assets/` and swap the placeholder `<div class="avatar">VZ</div>`
      in `about.html` for `<div class="avatar"><img src="assets/headshot.jpg" alt="..."></div>`
- [ ] Add your resume PDF to `assets/resume.pdf` (or update the filename in
      `about.html` and `contact.html` if you name it something else)
- [ ] Replace every `https://github.com/` placeholder link with your real
      GitHub profile / repo URLs (in `contact.html` and `projects.html`)
- [ ] Fill in `prompt-log.md` with your real prompts/replies
- [ ] Swap in real project screenshots and remove the "Placeholder" status
      tags in `projects.html` as you complete each project
- [ ] Read through the code comments marked "AI USAGE NOTE" and adjust them
      to reflect what you actually changed, if anything
- [ ] Double check any external image/text/template credit is visible on the
      site if you end up using outside sources

## Deploying to GitHub Pages

1. Create a new GitHub repository (public, or private with TAs/faculty added
   as collaborators).
2. Push this folder's contents to the repo:
   ```
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   git push -u origin main
   ```
3. On GitHub: go to **Settings > Pages**, set the source to the `main` branch
   (root folder), and save.
4. Your site will be live at `https://YOUR-USERNAME.github.io/YOUR-REPO/`
   within a minute or two.
5. Test the live URL on your phone and on a desktop browser before submitting.

## Notes on the interactive feature

The dark/light toggle in the top nav satisfies the "at least one
JavaScript-powered feature" requirement. It remembers your choice across
visits via `localStorage`. Feel free to layer on more (a contact form with
validation, subtle animations) if you want to push further.
