# Prompt Log — Project 1: Personal Portfolio Website

**Student:** Vera (Yuxin) Zhou
**Course:** CMU 15-113
**Tool used:** Claude (Anthropic), claude.ai web chat

This log contains the full conversation used to plan, build, and debug the
portfolio website for Project 1.

---

## Turn 1

**Prompt:**
> We will be working on the project of building a portfolio website. Please
> first read the requirements and rubric uploaded, and then discuss with me
> about any thoughts. You can give me some questions before we start to get
> my thoughts, so we can do the project efficiently.
> Here we have a sample: https://tshakeel05.github.io/
>
> [Attached: Project 1 assignment PDF]

**Reply:**
> Claude read the assignment PDF and the sample site (a racing/F1-themed
> multi-page portfolio), summarized the requirements (nav bar + intro/about/
> projects/contact sections, responsive design, live GitHub Pages deployment,
> at least one interactive feature, AI-usage code comments, a prompt log, and
> citations for any borrowed material), and asked three clarifying questions:
> whether to build a single scrolling page or multiple pages, whether there
> was a theme/personality in mind, and what content (bio, resume, projects)
> was already ready.

---

## Turn 2

**Prompt (selections):**
> - One page with sections, or multiple pages? → Multiple pages (Home, About,
>   Projects, Contact)
> - Theme or personality in mind? → Yes, I have an idea already
> - What content do you have ready? → Bio + resume + real project(s) ready

**Reply:**
> Claude noted this was a solid starting point and asked three follow-up
> questions before building anything: what the theme idea was, for the bio/
> resume/project content to be shared, and whether the student would work
> locally in VS Code + GitHub or wanted files generated in-chat.

---

## Turn 3

**Prompt:**
> 1 Theme - main color dark blue/black, making it tech style. Keep simple and
> clear
> 2 I have uploaded my resume here
> [Attached: Resume_Yuxin_Zhou_EN.docx]
> 3 I have Github account and VS Code, and I am ready to push them

**Reply:**
> Claude reviewed the resume (CMU Statistics & Machine Learning student;
> research in LLM-judge evaluation and classical Chinese poetry translation;
> a robotics/embodied-AI internship; SlotSync hackathon project; ML/RL
> coursework project) and asked which specific projects should be featured on
> the Projects page, whether a headshot photo was available, and what kind of
> interactive feature was preferred (simple JS vs. something more custom).

---

## Turn 4

**Prompt (selections):**
> - Which projects to feature? → Just placeholder for now, add real ones later
> - Photo? → Yes, I'll upload one
> - Interactive feature? → Simple JS (dark mode toggle, smooth scroll,
>   animations)

**Reply:**
> Claude proposed a concrete site structure: Home (intro/tagline), About
> (bio, education, skills, interests), Projects (placeholder cards to fill in
> through the semester), and Contact (email, GitHub, resume link); a dark
> navy/black design direction with one accent color; and a dark/light mode
> toggle as the interactive feature. Claude asked two final questions: which
> accent color to use, and whether to link anything beyond GitHub/email
> (e.g. LinkedIn).

---

## Turn 5

**Prompt (selections):**
> - Accent color? → #0038D7
> - Other socials? → No, just email + GitHub

**Reply:**
> Claude wrote a short design plan (color tokens, typography — Space Grotesk
> for headings / Inter for body — layout, and motion principles, following
> the frontend-design guidance to avoid generic AI-template defaults), then
> built the full site: `index.html`, `about.html`, `projects.html`,
> `contact.html`, `css/style.css`, `js/script.js`, a `README.md` with
> deployment instructions and a personalization checklist, and a
> `prompt-log.md` template. Code comments throughout were marked "AI USAGE
> NOTE" to document where AI-drafted code was used, per the assignment's AI
> documentation requirement. Claude presented the files and asked whether the
> student wanted a walkthrough of GitHub Pages deployment or wanted to try it
> independently first.

---

## Turn 6

**Prompt:**
> Okay, I have tested and now the style seems not working. I only have the
> basic pages and text. Could you go check what is not working?
> https://integral0593.github.io/Portfolio/

**Reply:**
> Claude fetched the live site and the GitHub repository file listing and
> found the bug: `style.css` and `script.js` had been pushed to the root of
> the repo, but the HTML files linked to them at `css/style.css` and
> `js/script.js` — the `css/` and `js/` subfolders never made it into the
> push, so both files 404'd silently. Claude gave two fix options: move the
> files into `css/` and `js/` folders via `mkdir`/`mv` + a new commit
> (recommended), or edit the `<link>`/`<script>` tags to point at the root
> instead. Claude also suggested a hard refresh to clear any cached broken
> requests.

---

## Turn 7

**Prompt:**
> Okay, that solves
> Could you make a md file that includes this chat? Then I will upload it as
> the conversation md

**Reply:**
> Claude generated this prompt log file.

---

*End of log.*
