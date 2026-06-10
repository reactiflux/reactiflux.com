---
title: Reactiflux Site Structure — First-Draft Architecture for the Cleanroom Rewrite
date: 2026-05-17
purpose: Define the information architecture, page templates, navigation, and interconnection model for the reactiflux.com cleanroom rewrite
audience: The dispatching agent, the parallel audience-taxonomy agent, the admin, and downstream implementers
relationship: Builds on 2026-05-15-reactiflux-audience-research.md (grounding brief) and runs in parallel with the audience taxonomy document being produced by a sibling agent. The canonical identity list in this document is shared with that agent; minor divergence will reconcile at merge. This document is about pages, structure, and link patterns — not copy.
---

## Premise

The current site is a brochure. It says, in effect, "200,000 React developers chat here; click to join." That sentence is true, and useless. It describes nothing about what the place actually is, leaves no surface for the freelance/solo-dev population the admin has flagged as the dominant unmet appetite, and offers a visitor no way to recognize themselves in the community before deciding to join. The rewrite has to do something different: present the community as a federation of lived experiences, with the durable cast of regulars as the connective tissue and the global membership as visible co-residents rather than a flattened "we."

The animating phrase from the admin — *"an interconnected web of identities, so someone can 'explore' different ways of using the community from different perspectives by clicking through"* — is the architectural North Star. This document treats it literally. The site is organized so that the primary navigation experience, especially on a first visit, is moving sideways between perspectives, not drilling down through topics.

## 1. Information architecture and site map

The rewrite has five top-level sections plus a homepage and a small set of utility pages. The intent is that every page belongs cleanly to one section and links promiscuously across sections — sectioning is for orientation, not for siloing.

```
/                              Homepage
/people/                       PEOPLE — the perspectives wing
  /people/regulars             The durable cast
  /people/india                Indian developers in the community
  /people/west-africa          Nigerian and adjacent freelance-bound members
  /people/se-asia              Philippines and Vietnam, outsource-and-onward
  /people/latin-america        Brazil, Argentina, the Spanish/Portuguese tail
  /people/professional-social  US/EU mid-careers using Reactiflux socially
  /people/newcomers            Anyone arriving fresh to React or to the community
  /people/jobseekers           Cycling members on the market
  /people/maintainers          Library maintainers, experts passing through
  /people/long-tail            Members from everywhere else (the 1,997)
/work/                         WORK — the freelance/career wing
  /work/going-freelance        First-step-to-second-step guide, by region
  /work/remote-first-job       Landing a direct-remote FTE
  /work/rates-and-payment      Payment rails, taxation, regional realities
  /work/jobs-board             The active jobs-advice surface
  /work/jobs-rules             Recruiting rules (absorbs current /recruiting)
  /work/promotion-rules        Self-promotion rules (absorbs current /promotion)
/life/                         LIFE — community texture and continuity
  /life/this-month             TMiR (This Month in React) hub
  /life/transcripts            Q&A transcripts archive
  /life/blog                   Community posts, essays, retrospectives
  /life/schedule               Upcoming Q&As and events
  /life/off-topic              The non-technical channels, explained honestly
/learn/                        LEARN — the reading and reference wing
  /learn/reading-list          Mark Erikson's curated React/JS list (preserved)
  /learn/help-channels         What the help channels are and aren't, in 2026
  /learn/tooling-comparisons   The thing the community actually does well now
/about/                        ABOUT — the institutional surface
  /about/conduct               Code of conduct
  /about/roles                 Moderator and role structure
  /about/tips                  How to ask, how to participate
  /about/sponsor               Sponsorship information
  /about/contact               Contact and moderation reachability
  /about/colophon              How the site is made, who maintains it
```

Notes:

- **PEOPLE** is the spine of the perspective-switching experience. Every page here is an identity page. The taxonomy agent's output will determine the exact set; this layout is the working hypothesis.
- **WORK** is the entirely new wing. The current site has no equivalent. This is where the freelance/solo-dev appetite is hosted.
- **LIFE** is where the existing TMiR, blog, transcripts, and schedule pages land, joined by an honest accounting of the off-topic channels — which is the dominant traffic on Discord and is currently invisible on the site.
- **LEARN** is the reading-list wing. It deliberately does NOT claim to be where you learn React. It claims to be the community's reading and reference taste, hosted by named curators.
- **ABOUT** is the boring infrastructure. Rules, conduct, sponsorship, contact. Boring is correct here.

## 2. Page templates and patterns

Six recurring templates do most of the work. Each is structured to support the interconnection model in Section 3.

**Identity page template.** The most important template in the rewrite. Used for every `/people/*` page. Structure: a header naming the identity in the community's own voice (not a marketing label); a 200–400 word opening that locates this identity in the community — who they are, what they do, how they tend to use the channels — written in prose, not bullets; a "what they're doing on Discord" block with three to five real channels they frequent and a one-line gloss for each; a "what this looks like in practice" block — two or three illustrative vignettes (composite, not real users) showing what their week in the community might feel like; a "common questions they're working on" block with three to six concrete questions or threads; a "if this is you" block pointing into Work, Learn, or Life pages relevant to that identity; and the cross-perspective bar (see Section 3) anchored at the bottom and accessible from a persistent affordance throughout the page. No photos. No fictional names with quirks. Geographic identity pages name the relevant cities and concrete economic realities (rates, platforms, payment rails) without aestheticizing them.

**Topic page template.** Used for `/work/*` and `/learn/*` content pages. Structure: a header and short framing paragraph; the substantive content (which may be long-form essay, structured guide, or curated link list); inline citations to identities ("this question comes up most often from members in India and Pakistan; see /people/india and /people/west-africa for context"); a "who in the community knows this" block naming relevant channels and, where appropriate, named regulars who've written or spoken on the topic; and a related-pages footer. Topic pages are where the community's accumulated taste shows up; they should read like a senior practitioner writing for peers, not like a CMS.

**Rules page template.** Used for `/work/promotion-rules`, `/work/jobs-rules`, `/about/conduct`, `/about/roles`. Structure: the rule itself, stated cleanly; a "why" paragraph that explains the rule's origin and the failure mode it prevents; examples of what passes and what doesn't; a link to the relevant moderator role and contact path. Rules pages are short, declarative, and not coy about the fact that they're rules.

**Archive page template.** Used for `/life/transcripts`, `/life/blog`, the TMiR index. Structure: chronological listing with metadata (date, guest, topic, transcribed-by), search/filter affordances, and — critically — backlinks from the archived items to the relevant identity and topic pages. An old Q&A with Sebastian Markbåge isn't just "a transcript"; it's a maintainer-passing-through artifact and should backlink to `/people/maintainers`.

**Hub page template.** Used for the top-level pages of each section (`/people/`, `/work/`, etc.) and for `/life/this-month`. Structure: a one-paragraph framing of the section's purpose; an indexed listing of the section's pages with one-line descriptions; a "where to start if..." block giving three or four entry-point suggestions keyed to common visitor states ("you've just joined the Discord," "you're considering freelance," "you're hiring"); and the cross-perspective bar where relevant.

**Homepage template.** A special case. Treated in detail in Section 5.

## 3. The interconnection model

This is the load-bearing design decision in the rewrite. The admin wants visitors to be able to *click through different perspectives on the community*. The mechanic for this must be unambiguous, visible without scrolling, and not a hidden affordance.

**The mechanic: a persistent Perspective Bar.**

Every identity page carries a horizontally scrollable strip of nine to twelve small cards, anchored at the top of the page just under the heading. Each card represents one of the other canonical identities. Each card is small (about 200px wide on desktop, full-width-stacked on mobile), contains the identity's name, a single sentence summarizing how that identity uses the community, and a click target. Clicking takes the visitor to that identity's page. The strip is *the same set of cards in the same order on every identity page*, with the current identity's card visually marked as "you are here." The cumulative effect: a visitor lands on /people/india, reads a few paragraphs, and the Perspective Bar shows them — without any scrolling, hunting, or menu interaction — that there are nine other lived experiences on offer here. They click /people/regulars. The Bar persists. They click /people/west-africa. The Bar persists. The site, structurally, is teaching them that the community has many co-residents.

The Bar is not navigation in the conventional menu sense. It is content. Each card carries enough text to read as a thumbnail of the identity it represents, so the Bar itself is a tiny tour of the community even if the visitor never clicks. Visually, this means it cannot be a row of pure icons or pill labels — those communicate nothing. The minimum is a name + one sentence.

**Secondary mechanic: inline cross-references in prose.**

Identity pages name other identities by their canonical phrase, hyperlinked. A sentence on `/people/india` saying "the entry-to-direct-remote leap is a different problem here than for our members in Lagos — see /people/west-africa for that side" is doing the same perspective-switching work as the Perspective Bar, but inside the reading flow. Topic pages do this too: a `/work/going-freelance` page should reference the regional realities by linking into the identity pages, not by repeating them.

**Tertiary mechanic: outgoing perspective hooks from non-identity pages.**

Topic, archive, rules, and hub pages all carry a smaller variant of the perspective surface: a "Who in the community lives this?" block in the right rail or at the foot, naming the two or three identity pages most relevant to the page's content, with a one-line gloss for each. This means a visitor reading `/work/rates-and-payment` is reminded that the page they're reading is read differently by a member in Karachi than by one in Berlin, and is given the click path to either perspective. The same block appears on archive items: an old Q&A transcript reminds the reader of which identities most engaged with it.

**What this is not.**

It is not a single global "perspectives" navigator in the top menu. The top menu uses the five-section structure. The Perspective Bar lives on the pages themselves, where it does its work in context.

It is not a persona switcher in the SaaS sense (a button that changes the entire site's content for one visit). That mechanic is alienating; it treats the visitor as a market segment to be served. The rewrite treats the visitor as an adult who can read about other people without needing the site to be reskinned for them.

It is not implicit. There is no version of the rewrite where the perspective-switching is "available if you look." It is visible above the fold on every identity page and is a recurring, predictable element across the site.

**Cross-link audit, by identity.**

To make the web real rather than rhetorical, every identity page is expected to carry, in addition to the Perspective Bar, at least three inline links to other identity pages and at least three inline links into Work, Life, or Learn topic pages. The taxonomy agent's final identity set will determine the specific link pairings, but the working pattern looks like:

| Identity | Naturally links to other identities | Naturally links to topic pages |
|---|---|---|
| The durable regular | Cultural emigré, maintainers, professional-social | /life/off-topic, /life/this-month, /life/transcripts |
| The Indian developer | West-Africa, SE-Asia (shared structural problems), regulars | /work/remote-first-job, /work/rates-and-payment |
| The West-African freelance-bound | Indian, SE-Asia, jobseekers | /work/going-freelance, /work/rates-and-payment |
| The SE-Asian outsource-and-onward | West-Africa, Indian, jobseekers | /work/remote-first-job, /work/going-freelance |
| The professional-social mid-career | Regulars, cultural emigré, maintainers | /life/off-topic, /life/this-month |
| The newcomer | All others (it's their orientation page) | /learn/reading-list, /learn/help-channels, /about/tips |
| The jobseeker | Regional identities, professional-social | /work/jobs-board, /work/jobs-rules, /work/remote-first-job |
| The maintainer | Regulars, professional-social | /life/transcripts, /life/this-month |
| The long-tail member | All regional identities (it's the residual) | /life/off-topic, /work/going-freelance |

This table is illustrative; the taxonomy agent's final identity list will refine it. The principle is that **no identity page is a dead end**. Every one offers at least three sideways doors and at least three downward doors.

## 4. Navigation model

Two visitors. They have different jobs and they should both succeed.

**Primary navigation (top bar).** Five labels: People, Work, Life, Learn, About. Plus a persistent "Join the Discord" CTA on the right, separated visually from the navigation. This is the same on every page including the homepage.

**Secondary navigation (section landing pages).** Hub pages (`/people/`, `/work/`, etc.) carry their own page-listing with one-line descriptions. There is no hover-fly-out from the top nav; the top nav opens to hub pages, and the hub pages are the index.

**Footer.** Three columns. Column one: site map (the same five sections, expanded one level). Column two: institutional links (conduct, contact, sponsor, colophon). Column three: external links — the Discord invite, the GitHub org, the RSS feed for blog and TMiR, and a small "members run this site" line linking to the colophon.

**Homepage.** Detailed in Section 5.

**The two-visitor problem, resolved:**

The visitor with no context — arrived from search, from a tweet, from a link — needs to learn what this place is before they decide whether to join. Their first surface is the homepage, which is designed (Section 5) to surface the People wing within the first scroll. From the homepage they can either (a) click into People and start perspective-switching, (b) click into Work or Learn if they've come in with a specific job, or (c) click Join. The site is structured so option (a) is the most-traveled path on a first visit.

The visitor from inside Discord — already a member, arriving via a link someone dropped — has a specific job. They need a transcript, a rules page, the reading list, a TMiR archive item, the jobs-advice page. They use the top nav directly. They do not need the homepage. The footer's three-column site map exists partly so they can orient even when they've landed deep.

There is also a third visitor worth naming explicitly: the recruiter or sponsor evaluating the community. They go to /work/jobs-rules and /about/sponsor and they need both surfaces to be plainly written and not coy. The current site handles this reasonably; the rewrite preserves that competence.

## 5. The homepage

The homepage is where the rewrite earns or loses its premise. The current homepage's failure isn't tonal — it's structural. It's a single brochure card. The rewrite needs the homepage to do three jobs simultaneously, in this order: (a) communicate, before the visitor scrolls, that this community contains multiple lived experiences; (b) show, not assert, the durable cast that gives the place its character; (c) provide several legible entry paths so different visitors find their next click without effort.

**Structural composition, top to bottom.**

*Section 1: Above-the-fold framing.* No hero image. No animated background. A short, plain-language opening — perhaps three to five sentences — that introduces the community by what it is rather than what it offers. The current site's "we hold Q&As with Facebook Engineers" sentence is the wrong move; the rewrite's opening should sound like an honest paragraph from someone who has been around for years describing the place to a curious stranger. Member count is present but understated, not the hook. To the right of (or beneath, on mobile) the paragraph: the primary CTA, "Join the Discord," and a secondary, "See who's here →" anchored to Section 2.

*Section 2: Perspectives strip.* The most important section on the homepage. The full Perspective Bar from Section 3 — every identity card, in a horizontally scrollable strip. The header above it reads, in some form, "Reactiflux is many co-residents. Here's who you'll find." Each card is interactive; the strip is the homepage's primary content. A visitor who reads only this section has already received the rewrite's central message. This is where the "interconnected web of identities" stops being a slogan and becomes a thing the visitor can touch.

*Section 3: The durable cast.* A subdued, prose-heavy section — perhaps 200–300 words plus a small grid — acknowledging the thirty-to-fifty regulars who set the community's tone and have done so for years. Named (with their consent) where possible; described in aggregate where not. This section is unusual for a community site and is the move that signals the rewrite is not pretending to be flat. It includes a "see what they're talking about" link into TMiR or recent transcripts. The visual treatment is restrained — small portraits or initials, names, one-line "what they're known for" — not a wall of marketing tiles.

*Section 4: This month in the community.* A small panel showing the latest TMiR issue, the next two scheduled Q&As, and the most recent blog post. This is the "is this place alive?" surface — a visitor needs to see, within five seconds of looking, that there's recent activity. Live, not stale; if the panel ever shows stale content, the rewrite has failed an internal hygiene check, not a design check.

*Section 5: The three on-ramps.* A three-card row corresponding to the three most common visitor jobs: "I'm here to learn React → /learn"; "I'm working freelance or going remote → /work"; "I'm a regular and I want the chat → Discord invite." Each card carries a one-sentence honest framing, including the learn card which says something like "We're not where you learn React in 2026 — that's now your LLM. We are where you compare notes, share taste, and find the long reads worth your time." That sentence is the rewrite's honesty in miniature.

*Section 6: Quiet footer band.* A short paragraph reaffirming what the place is, with links into /about/conduct, /about/colophon, and the contact path. Not a CTA. A closing.

**What the homepage deliberately does not do.**

It does not have a slideshow. It does not lead with logos of the libraries the community talks about. It does not have a "200,000 members and growing" marketing bar. It does not have testimonials. It does not have a "trusted by" row. It does not pretend the place is a product.

**Above-the-fold test.** A visitor who sees only the above-the-fold view should come away with: (1) this is a long-standing community, (2) it contains many kinds of people (visible via the top of the Perspectives strip starting to peek above the fold), (3) joining is a click away. If the above-the-fold view doesn't communicate all three, the homepage is wrong.

## 6. Disposition of existing pages

| Current page | Disposition | Where it lands |
|---|---|---|
| `/` (homepage) | Replaced | New homepage per Section 5 |
| `/learning` | Preserved with new framing | `/learn/reading-list`, with Mark Erikson's name and curatorial voice explicitly credited, framed not as "how to learn React" but as "the list of things this community thinks are worth reading" |
| `/promotion` | Absorbed | `/work/promotion-rules` |
| `/recruiting` | Absorbed | `/work/jobs-rules` |
| `/conduct` | Absorbed | `/about/conduct`, unchanged in substance |
| `/roles` | Absorbed | `/about/roles` |
| `/tips` | Absorbed and refreshed | `/about/tips` |
| `/tmir` | Promoted | `/life/this-month` becomes the hub page, the archive sits beneath it |
| `/transcripts` and `/transcripts/[slug]` | Preserved with backlinks | `/life/transcripts` (index) and `/life/transcripts/[slug]` (items); each item gets identity-page backlinks per the archive template |
| `/blog` | Preserved | `/life/blog`; URL-stable for SEO and inbound links |
| `/schedule` | Preserved | `/life/schedule` |
| `/jobs` | Split | The active jobs surface becomes `/work/jobs-board`; rules move to `/work/jobs-rules` |
| `/sponsor` and `/sponsor/tmir` | Preserved with refresh | `/about/sponsor` (institutional) plus `/about/sponsor/tmir` (specific) |
| `/podcasts/[slug]` | Folded into Life | Becomes part of `/life/blog` or, if volume justifies, `/life/podcasts` |
| `/contact` | Preserved | `/about/contact` |

Two notes on substance. The learning page is the rewrite's most sensitive carryover. Mark Erikson curates it; his voice and labor are the reason it has value. The new page must credit him by name in the header, retain his existing editorial voice in the framing, and make explicit that this is one named person's taste rather than an institutional list. The promotion and recruiting rules pages currently do real moderation work and are linked to from inside the Discord; their URLs should redirect cleanly from the old paths to the new ones to avoid breaking that integration.

Nothing in the current site is being retired outright. Several pages are being relocated, reframed, or split, but every existing purpose lands somewhere.

## 7. What the rewrite must add

These are the additions where the current site is silent and the community is loud.

**The Work wing.** The single largest addition. `/work/going-freelance`, `/work/remote-first-job`, `/work/rates-and-payment`, and the existing jobs surface lifted into `/work/jobs-board`. The freelance/solo-dev appetite that the admin identified — and that the participation data localizes to India, Nigeria, Pakistan, the Philippines, Vietnam, Brazil, with Kenya, Argentina, and Thailand as comparators — has no home on the current site. The Work wing exists to host it. The pages here should be written by community members with first-hand experience, not by site copywriters. The `/work/rates-and-payment` page in particular should name specific payment rails (Payoneer, Wise, Deel, regional fintechs) and the real frictions in specific countries; it should read like a senior freelancer wrote it for a junior one.

**The India page.** `/people/india` is, by the participation data, the single highest-leverage geographic surface in the rewrite. The current site does not acknowledge India's presence in the community at all. The page should be honest about the structural shape — tier-1 vs. tier-2 college signaling, services-firm-to-product-firm transitions, the per-capita gap that says the community is under-serving the largest national cohort it has — and should link directly to the Work pages where the Indian freelance/remote arc is hosted.

**The People wing as a whole.** The current site has no surface that says "the community contains people who are different from each other and who use it differently." This is the most-original architectural move in the rewrite. Even if the taxonomy agent's final identity list differs from the working list in this document, the wing's existence and shape should not.

**The durable-cast story.** The 30–50 regulars who set the community's tone are mentioned nowhere on the current site, and the rewrite's homepage Section 3 plus `/people/regulars` together make them visible. This is delicate — overdoing it produces a clique vibe; underdoing it preserves the current invisibility — and the page should be drafted with input from regulars themselves. The honest framing is that durable communities have cores and this one is no exception; the rewrite stops pretending otherwise.

**The off-topic acknowledgment.** `/life/off-topic` exists because #random is the single most active channel in the community by a 9× margin over the next channel. A site that pretends Reactiflux is a technical resource only is lying about the texture of the place. This page describes the off-topic channels (gaming, food, finance, fitness, pets, music, movies) plainly, with an honest framing — that being able to talk about non-technical life with the same people you debug with is part of why long-time members stay.

**The colophon.** `/about/colophon` exists to acknowledge that the site is built by community members, links to the public repository, names the maintainers, and credits contributors. This is small but important: it signals that the site is part of the community rather than a marketing surface bolted onto it.

**The "what the help channels are in 2026" page.** `/learn/help-channels` is the honest accounting that the research brief calls for: the help-react channel is still active (1,299 messages over 28 days), but the job people used to hire it for has substantially migrated to LLMs, and the job people now hire it for is closer to "second-opinion when the LLM and I disagree." Saying this in plain text is the rewrite respecting the visitor's intelligence.

## 8. What the rewrite must not do

**No marketing-deck voice.** No "fast-paced," "vibrant," "thriving," "world-class." If a sentence would not embarrass a senior community member to read aloud, it can stay; otherwise it must go.

**No persona caricatures.** No fictional names with photos and quirks. The identity pages describe shapes of lived experience, not characters. "Maria, 28, lives in Lisbon, drinks oat-milk lattes" is the failure mode; the rewrite must not approach it.

**No vanity globalness.** No "members from 150 countries!" boast. The honest statement is that there are members from many countries, that some national cohorts (India, US, Nigeria) are substantially larger than others, and that the long tail is real and matters. Saying "we are everywhere" is the lie; saying "we are unevenly everywhere, here's the shape" is the truth.

**No lying about what the community is.** It is not where people learn React in 2026. It is not a Q&A site with worse search. It is not a recruiting platform. Pages that imply otherwise — especially the homepage and `/learn/help-channels` — are wrong and the rewrite must call them out as wrong if they appear.

**No flattening the membership.** A US recruiter and a Lagos freelancer should both be able to read the site and recognize what they see on Discord. Pages must not collapse the two into a single voice. If a paragraph reads the same to both visitors, it's probably the wrong paragraph.

**No persona switcher.** The Perspective Bar is content, not a UI mode. The site does not reskin itself per visitor. The visitor reads about the community as a whole, including the parts that are not about them.

**No "join us" pressure.** A single, clear CTA in the navigation and on the homepage is enough. Every section ending in "...so join the Discord!" is the wrong move and reads as marketing. Visitors who want to join know where the button is.

**No dead pages.** Every page in the site map must carry inline cross-links to at least three other pages, and every identity page must carry the Perspective Bar. A page that doesn't link out is a page that doesn't belong in this architecture.

**No silently breaking inbound links.** The current site's URLs (especially /promotion, /recruiting, /conduct, /tmir, /blog, /transcripts) are linked to from inside the Discord and from across the web. The rewrite must redirect old paths to new ones, not 404 them.

**No deference to the current site's silences.** If the current site is silent on freelance work, on India, on the off-topic life of the community, on the regulars — the rewrite must not be silent on those. The current silences are the audit, not the baseline.

---

## Coda

The rewrite's design moves stand or fall on whether a visitor lands on the homepage, sees the Perspectives strip, clicks into `/people/india`, reads two paragraphs, clicks the `/people/regulars` card, reads two more, clicks into `/life/this-month`, and comes away with the felt sense that this is a community with many co-residents and a durable character. If that path works, the rewrite has done its job. If it doesn't, no amount of additional copy will save it. The interconnection model is the architecture; the architecture is the message.
