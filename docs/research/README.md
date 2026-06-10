---
title: Reactiflux cleanroom rewrite — research artifacts index
date: 2026-05-17
purpose: Index and reading guide for the three upstream artifacts produced during the May 2026 brainstorming session.
audience: Carl, and any future agent picking up this work cold.
---

## What this is

A cleanroom rewrite of reactiflux.com was scoped in mid-May 2026. The brief: re-architect from zero, fold existing pages into the new structure, build "an interconnected web of identities" so visitors can explore the community from different perspectives. The community admin's framing was that the current site is underdeveloped relative to what the community actually is.

This directory holds the three research artifacts that came out of that session, in dependency order.

## Reading order

1. **`2026-05-15-reactiflux-audience-research.md`** — 5-section grounding brief. Segmentation frameworks, chatroom personality archetypes, deep dive on globally distributed self-taught engineers, local resource gaps by region, where Reactiflux fits. Written before the real Discord activity data was surfaced — has known geographic miscalibration (overweighted Ukraine/Syria; underweighted India/Nigeria/Philippines/Vietnam). Read for the segmentation thinking and the JTBD framing; treat its regional case studies as illustrative rather than authoritative.

2. **`2026-05-17-reactiflux-audience-taxonomy.md`** — Ten identity profiles, motivational/relational segmentation (not demographic). Anchored on the real 28-day activity data: India dominant, Nigeria/Pakistan/Brazil/Philippines/Vietnam secondary, anglophone+French overrepresented per-capita, India holds ~3.6× headroom. Each profile names what the identity hires Reactiflux for, what they bring, where they appear on Discord, which identities they sit adjacent to, what the current site fails to do for them, and what an honest rewrite could offer. Ends with a relationship-map section that is the contract for the structure document.

3. **`2026-05-17-reactiflux-site-structure.md`** — Site architecture: five top-level sections (People, Work, Life, Learn, About), page templates, the interconnection mechanic (a persistent Perspective Bar of identity cards plus inline hyperlinked identity references), navigation model, homepage composition, disposition of every existing page, what to add, what not to do. Ran in parallel with the taxonomy against a shared 9-identity seed; minor reconciliation noted below.

## Real-world grounding the agents were briefed with

Surfaced during the session and embedded in the downstream briefs:

- **Top 10 active countries (28 days):** India 832, US 667, Nigeria 192, Pakistan 161, Brazil 154, France 131, UK 128, Canada 110, Philippines 95, Vietnam 88. "Other" 1,997.
- **Per-capita:** Canada 2.75, France 2.02, US 1.94, UK 1.91, Vietnam 0.88, Nigeria 0.85, Philippines 0.83, Brazil 0.72, Pakistan 0.67, India 0.56 (per million population). India is volume #1 but per-capita lowest — the highest-leverage geographic audience.
- **Notable absences:** Indonesia, Bangladesh, Russia, Mexico, Germany, Japan, Egypt, Turkey. Reactiflux's geography is essentially "the English-internet developer."
- **Channel activity:** #random (12,169 msgs) dominates. help-react is #2 (1,299 msgs) — still load-bearing. jobs-advice active (583 msgs). Off-topic channels rival technical activity in aggregate.
- **Community shape:** durable cast of ~30–50 regulars over ~8 years. Strong unmet appetite for freelance/solo-dev support, particularly from India/Nigeria/Pakistan/Philippines/Vietnam/Brazil.

## Open questions for Carl to arbitrate

These came out of the agents' work and are above the agents' pay grade:

1. **The durable-cast surface (homepage + `/people/regulars`).** The structure agent's least-sure decision: how visible should the 30–50 regulars be? Naming them by name risks a clique vibe and creates consent friction; leaving them invisible perpetuates the current site's central dishonesty. The agent committed to making them visible with consent, restrained visual treatment, and aggregate description where individual naming isn't possible — but the right level of foregrounding is a judgment for you and the regulars themselves.

2. **Tenure/cohort distribution by identity** — the taxonomy agent flagged that the "30–50 regulars over 8 years" framing is qualitative; nobody knows what fraction of the durable cast came up through the US/EU mid-career pipeline vs. the global remote independent pipeline. This matters for which on-ramp surfaces the structure should prioritize. May be answerable from Discord data or memory; may not.

3. **India-specific surface.** Both downstream agents treated India as the highest-leverage audience and designed for a dedicated India-aware presence. The decision still owed: how literal? A dedicated `/people/india` page? Inline India-specific framing across multiple pages? A geographic-context layer that activates everywhere? The structure agent leaned toward a dedicated identity page; this is worth a deliberate choice.

4. **Cleanroom scope of TMiR and transcripts.** Both have substantial existing content. They survive in the new architecture under "Life," but the framing of their relationship to the rest of the site (flagship outputs vs. archival material vs. living publication) needs your read.

5. **Voice of the rewrite.** The research and taxonomy artifacts establish posture (pragmatic, honest, anti-marketing). The actual page-copy work — when it happens — needs a voice decision: a single editorial voice, an editor + contributors model, or first-person from named regulars on identity pages. Not solved here.

## What's NOT in this directory

- Page copy. None of these artifacts draft actual site content. The rewrite from here is a separate phase.
- Visual design. No mockups, no color palette, no typography. The structure document specifies functional UX patterns (Perspective Bar, etc.) but no visual treatment.
- Implementation plan. No file-by-file work plan against the existing Next.js codebase. That's the natural next step after the structure has been reviewed and any open questions arbitrated.
