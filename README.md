# Admiral pages — team collaboration guide

This repo holds `base-design-system.pen` (the Starboard design system) and the workflow guides your team uses to build pages together with **Pencil** + **GitHub Desktop** — no terminal, no command line.

## What we're building

Three pages for **admiralsystems.io**, designed in Pencil on top of the Starboard design system:

1. **Homepage**
2. **Services**
3. **Contact Us**

Each team (Davis / Shafiq / Elfajri) builds its own version in its own repo. Trainees do the work; the coach reviews PRs.

> **Appointed team lead:** if you were picked to create your team's repo, read **[LEAD-SETUP.md](LEAD-SETUP.md)** first. Everyone else, start here.

If you've never used Git before, watch this short intro: <https://www.youtube.com/watch?v=8Dd7KRpKeaE>

---

## Project structure & ownership

Inside your team's repo, put all page wireframes inside a `/pages` folder — **one `.pen` file per page**:

```
your-team-repo/
├── base-design-system.pen   ← read-only reference, don't edit
├── README.md
├── LEAD-SETUP.md
└── pages/
    ├── homepage.pen
    ├── services.pen
    └── contact-us.pen
```

### One owner per `.pen` file

`.pen` files are binary — Git can't merge two people's changes. To avoid stomping each other, each file has **one owner**. Only the owner edits that file.

**Decide ownership as a team in your first session.** Sit together, pick who owns which page. Write it down — a sticky note, a pinned Slack message, or the top of your team's repo description. The README doesn't track ownership; the team does.

| Page | Owner | Decided when |
| --- | --- | --- |
| `pages/homepage.pen` | _your team decides_ | session 1 |
| `pages/services.pen` | _your team decides_ | session 1 |
| `pages/contact-us.pen` | _your team decides_ | session 1 |

**Rules:**
- If you're the owner: you make all edits. You open all PRs for that file.
- If you're not the owner: don't edit. If you want to suggest a change, comment on a PR or message the owner.
- Want to swap ownership? Team decides together — handoff happens after a merge, not mid-branch.
- Stuck waiting on an owner? Ping them in Slack first, then ping the coach if blocked > 1 day.

### Why this works

- Two people never edit the same `.pen` → zero binary-merge collisions.
- File = deliverable. "Where's the services page?" → `pages/services.pen`. No guessing.
- Each trainee has end-to-end ownership of one page — clearer learning, clearer review.

---

## 1. What you need before starting

- A **GitHub account** under your **@admiralsystems.io** email. Send your username to your team lead so they can invite you.
- **GitHub Desktop** installed and signed in — <https://desktop.github.com>
- **Pencil** installed — opens `.pen` files
- **Antigravity** (or VS Code) with the Pencil extension — already set up in the prior session

---

## 2. Get your team's repo on your computer (Clone)

You only do this once. Your team lead created a new repo for the team and shared the URL in Slack.

1. Open **GitHub Desktop**
2. **File → Clone Repository**
3. Pick your team's repo from the list (you'll see it after your team lead adds you as a collaborator)
4. Choose a local folder on your computer
5. Click **Clone**
6. Open the folder, double-click `base-design-system.pen` to open it in Pencil

`[screenshot: GH Desktop Clone Repository dialog]`

---

## 3. Start your work: make a branch

A **branch** is your own personal workspace. While you're on a branch, your changes don't affect anyone else's work. Always make a new branch before you start changing anything.

1. In GH Desktop, click the **Current Branch** dropdown (top middle)
2. Click **New Branch**
3. Name it using the format `your-name/what-you-are-doing`. Since the project is three pages, branch names often look like:
   - `tiara/homepage-hero`
   - `sean/services-pricing-section`
   - `mona/contact-form`
4. Lowercase, hyphens between words, keep it short

`[screenshot: New Branch dialog with example name]`

---

## 4. Do the work in Pencil

1. Open **your page file** in Pencil (`pages/homepage.pen`, `pages/services.pen`, or `pages/contact-us.pen` — whichever your team assigned you)
2. Keep `base-design-system.pen` open alongside as a read-only reference for colors, type, components
3. Make your design changes in your own page file only — don't touch other pages or `base-design-system.pen`
4. Save (Pencil auto-saves — confirm it saved)
5. Switch back to GitHub Desktop — you'll see your changes listed in the left panel

`[screenshot: GH Desktop changes panel showing modified .pen file]`

---

## 5. Commit your work (save a checkpoint)

A **commit** is a saved checkpoint. You can commit many times in a day — each commit is a snapshot you can return to.

1. In GH Desktop, write a commit message in the **Summary** box at the bottom-left
2. Click **Commit to [your-branch-name]**

### Writing good commit messages

✅ **Good:**
- "Add hero section to Homepage"
- "Build Services pricing table"
- "Wire up Contact Us form fields"

❌ **Bad:**
- `update`
- `final`
- `asdf`
- `wip`

**Rule of thumb:** finish the sentence *"If applied, this commit will ___"*.

**Commit often.** After each meaningful change, not once at the end of the day. Small commits are easier to review and undo.

`[screenshot: commit message box + Commit button]`

---

## 6. Push and Pull (sync with the team)

| Action | What it does | When to do it |
| --- | --- | --- |
| **Push** | Upload your commits to GitHub so others can see them | After committing, when you're ready to share / open a PR |
| **Pull** | Download your teammates' new commits | Every morning, after lunch, before starting new work |

### How

- **Push:** GH Desktop top bar → click **Push origin**
- **Pull:** switch to the `main` branch → click **Fetch origin** → click **Pull origin**

`[screenshot: Push origin / Fetch origin buttons in top bar]`

---

## 7. Create a Pull Request (ask for review)

A **Pull Request** (PR) is how you say "I'm done — please review my work and merge it into `main`."

1. After pushing, GH Desktop shows a **Create Pull Request** button — click it
2. Your browser opens GitHub.com to the PR form
3. **Title:** short description of what you did (same idea as a commit message)
4. **Description:** 1–2 sentences on what changed and why
5. **Reviewer:** assign your coach (Davis / Shafiq / Elfajri)
6. Click **Create pull request**
7. Wait — your reviewer will approve and merge, or leave comments asking for changes

`[screenshot: GitHub.com PR form with title, description, reviewer assigned]`

---

## 8. Why we have file ownership — and what happens if you break it

`.pen` files are **binary**. Unlike text files, Git can't automatically merge two people's changes into one file. If two people edit the same `.pen` on different branches and both open PRs, whoever merges second **will overwrite** the first person's work.

That's why each `pages/*.pen` file has one owner (see [Project structure & ownership](#project-structure--ownership)). Stay in your own file and collisions are impossible.

**Even with ownership, still do this:**

1. **Pull before you start.** `main` → Fetch → Pull *before* making a new branch — picks up other pages' merges so your local repo is current.
2. **Small, fast PRs.** Short-lived branches mean less drift. Don't sit on a branch for days.
3. **Stay in your file.** Don't edit `base-design-system.pen` or anyone else's `pages/*.pen`.

**If two people did edit the same file and you collide:** stop, ping your coach. Don't try to fix it inside GitHub Desktop — easy to lose work.

---

## 9. After your PR is merged

1. In GH Desktop, switch to the `main` branch
2. Click **Pull origin** to get your now-merged changes onto `main`
3. **Branch → Delete** the old branch you finished with
4. You're ready for the next task

---

## 10. Daily cheat sheet

```
Start of day:    main → Fetch → Pull
New task:        New Branch  (your-name/what)
Work:            edit YOUR pages/*.pen in Pencil, save
Save progress:   Commit (often) → Push
Done:            Create Pull Request → assign coach
After merge:     main → Pull → delete old branch
```

---

## Who to ask

| Coach | Trainees |
| --- | --- |
| **Davis** | Haykal, Mona, Rohan |
| **Shafiq** | Daz, Sean |
| **Elfajri** | Luthfi, Tiara |

- **General workflow questions:** ping any coach
- **Pencil-specific questions:** Elfajri

---

*v1 — May 2026. Found something confusing or missing? Open an issue or message your coach so we can improve this guide.*
