---
title: Yarn Team
date: 2021-02-11
time: 1pm PT / 8PM GMT
location: Q&A Channel on Reactiflux
description: "Lead maintainer and core contributor from the [Yarn Team](https://yarnpkg.com/)"
people: "[Maël Nison](https://twitter.com/arcanis) and Paul Soporan"
---

<a href="#what-are-some-of-the-advantages-of" name="what-are-some-of-the-advantages-of">#</a> **Q:** What are some of the advantages of (collabing) open sourcing/source projects in terms of reputation, business and enjoyment? – JakubGamer

Interesting large question 🤔 I think it depends on the project and the investment you put into it - professionally working on Yarn was a pretty good ice-breaker in interviews, since you basically can talk about allll sorts of interesting stuff that relate to your interviewer. In terms of enjoyment I simply really like working on a project I'm proud of. – arcanis

---

<a href="#original-question-was-deleted" name="original-question-was-deleted">#</a> **Q:** Original question was deleted – unknown

I almost always wrote open-source. A long time ago it was phpBB scripts for users of a forum hosting, now for JS developers 😄 some projects receive more attention than others, and Yarn already had a decent following when I joined it. It's been great to have a project with an actual community, although sometimes it can be a bit heavy too - I've spent more week-ends than I can remember fixing stuff. Double-edged sword. – arcanis

---

<a href="#whats-next-on-the-roadmap-for" name="whats-next-on-the-roadmap-for">#</a> **Q:** What's next on the roadmap for yarn? Any distinguishing features from npm? – nick

We focus a lot on the developer experience and internal infrastructure, I think a bit more than the competition (but I'm not objective ;). I find it important to spend time making sure that others people can build on Yarn, almost more than writing Yarn myself. For instance, with Yarn 2+ the plugin system lets you use our API to write your own features, without having to wait for us to merge them. People have already used that for super interesting experiments! – arcanis

We're planning to release Yarn 3.x quite soon (aka whenever we finish implementing the remaining breaking changes and features we've planned). You can see a list of breaking changes here ([https://github.com/yarnpkg/berry/issues/1406](https://github.com/yarnpkg/berry/issues/1406)). Other than that, we're working on supporting the "exports" field and the ESM resolution inside PnP and quite a few other feature requests in no particular order (many of them from the issue tracker).

We already have quite a lot of distinguishing features from npm (you can check the documentation for yourself and see them, particularly on the features page ([https://yarnpkg.com/features](https://yarnpkg.com/features)) and on the CLI page ([https://yarnpkg.com/cli](https://yarnpkg.com/cli))). We're constantly implementing new things that npm might not have or that it might do in different ways that we don't think would make sense for us. – Paul Soporan

---

<a href="#why-did-you-decide-to-make-package" name="why-did-you-decide-to-make-package">#</a> **Q:** Why did you decide to make package manager? – JakubGamer

I didn't! Yarn already existed when I joined the project, although the whole team rotated since then 😄 – arcanis

---

<a href="#after-quite-a-long-period-whats" name="after-quite-a-long-period-whats">#</a> **Q:** After quite a long period, what’s your opinion on the yarn 2 release announcement? Why did it receive such negative feedback and what could be changed to avoid that? How did you feel personally at that moment? – Vlad Kosinov

It's complex. On one hand I think we should have better communicated on the "It's perfectly fine to use Yarn 1 for as long as you want" thing, on the other hand there's been a lot of reactions from people who mostly had prejudice and didn't really try to understand what we were doing. But the great thing was that a lot of people understood it, and a few of them even joined us since then as core contributors! – arcanis

---

<a href="#can-you-explain-yarn-check?-any" name="can-you-explain-yarn-check?-any">#</a> **Q:** Can you explain yarn check? Any enlightment on fixing its failures? Not sure, if flattening out duplicate sub-dependencies relates to this, Hints on dealing with security warnings in sub-dependencies will help. – bruce

We deprecated yarn check a long time ago - this command doesn't really make sense: you shouldn't have to "check" that your project is correctly installed - it should be correctly installed! If there is a problem, then it should be reported at install time, not in a separate command. – arcanis

---

<a href="#what-does-the-road-going-forward-without" name="what-does-the-road-going-forward-without">#</a> **Q:** What does the road going forward without node_modules look like? Are there plans to work with other tooling developers (i.e., node, npm, webpack, rome, etc) to build a new standardized format when not using node_modules? – samsch (she/her)

Plug'n'Play is already a standard, we spent a lot of time describing its public behaviours so that others can implement it as well if they wish. In fact, pnpm recently added an experimental support for it! So now two package managers out of three support it natively 🙂 but yes, we work with a lot of project to try to get everyone onboard. For instance Webpack 5 supports PnP out of the box; same with Parcel, Rollup, etc. – arcanis

PnP basically works with most packages out-of-the-box unless they explicitly hardcode node_modules or if they use native implementations that we can't mount our patched zip fs layer on top of. This means that there's not much for us to do in the case of toolchains (like webpack), other than make sure that they work with PnP, since it's strictly the package manager that controls the generation of node_modules. Regarding other package managers, pnpm has already adopted PnP (via a config setting), but we aren't aware of any such plans for npm. npm also has their own tink initiative, but I'm not up to date to be able to comment on it. Regarding Node, it would be nice if Node natively supported Zip archives and if we could use the ESM hooks it now provides to lower the amount of monkey-patching we do (unfortunately there aren't any hooks for CJS) – Paul Soporan

---

<a href="#what-motivated-and-justified-the-decision-to" name="what-motivated-and-justified-the-decision-to">#</a> **Q:** what motivated and justified the decision to make such big breaking changes with yarn v1, and how do you feel it has impacted the adoption rate of v2? – (d,f,g)=> {}

It made adoption harder, of course - which I'm actually half proud of: it shows that we care more about doing the right (and difficult) thing than user growth. It also answers what we believe justified it: we truly believe node_modules weren't the right approach, and wanted to offer something more (while still providing escape hatches when needed, for instance with the node_modules linker which allows you to migrate projects while still remaining on typical node_modules install if you so wish). – arcanis

---

<a href="#what-drove-the-decision-to-make-react" name="what-drove-the-decision-to-make-react">#</a> **Q:** What drove the decision to make React more dependent on Yarn instead of just working with NPM? – Creation

I don't think there's been a decision or anything. People had problems with one approach, so they used another. There certainly wasn't a shadow cabinet 😂 – arcanis

---

<a href="#how-do-i-convince-my-team-that" name="how-do-i-convince-my-team-that">#</a> **Q:** How do I convince my team that npm is not the same as yarn? – jœl 🎲

- show them this nice thread of tips @arcanis has compiled ([https://twitter.com/arcanis/status/1300442490265362432](https://twitter.com/arcanis/status/1300442490265362432))
- show them the features page
- show them differences in the commands each package manager supports

– Paul Soporan

---

<a href="#do-you-want-to-spend-a-lot" name="do-you-want-to-spend-a-lot">#</a> **Q:** Do you want to spend a lot of time perfecting and polishing out your first open source projects, worrying a lot about other people judging your code negatively, or is it more important to just get started with open-source? – JakubGamer

I don't care too much how people in general feel about my open-source code. Those who can complain are those who invest to make things better, so I tend to listen to my fellow contributors far more! Of course you still need to stay open to interesting external ideas, that goes without saying. – arcanis

---

<a href="#do-you-have-upcoming-plans-with-the" name="do-you-have-upcoming-plans-with-the">#</a> **Q:** Do you have upcoming plans with the new releases of Yarn. Do we have a special to look forward to? – pinkie

We are going to release Yarn 3.x soon(ish) - you can read more details on [another answer above](#whats-next-on-the-roadmap-for). As always, we're always looking for things to improve and implement – Paul Soporan

---

<a href="#as-a-lead-maintainer-how-you" name="as-a-lead-maintainer-how-you">#</a> **Q:** As a lead maintainer, how you do avoid looking at the massive codebase and going "gotta write everything from scratch" again mind-set? (I personally suffer a lot from this) – Hansi

I'm the bad person to ask this, I already did it once 🙃 but it was in insight dangerous, and it only worked both because I'm extremely stubborn and pushed through, and because I found great contributors to take co-ownership of various parts. Now I think we're happy of the general architecture, and refactorings on the 2.x+ have been very incremental. – arcanis

---

<a href="#what-are-your-thoughts-on-npm-7" name="what-are-your-thoughts-on-npm-7">#</a> **Q:** What are your thoughts on npm 7 supporting yarn lock files too? – SferaDev

A fact rather than a thought - it doesn't currently support v2+ lockfiles and it turns them into v1 lockfiles, so… not completely happy 😄 (especially since it's impossible for npm to support Yarn 2+ lockfiles because it doesn't have enough information to manage Yarn's dep tree - caused by the difference in architectures) – Paul Soporan

I think Yarn used to be called kpm (for kittens package manager), but the name wasn't "cute" so it got a fancier label 🧶 no idea for the logos – arcanis

---

<a href="#do-you-think-that-open-sourcing-works" name="do-you-think-that-open-sourcing-works">#</a> **Q:** Do you think that open-sourcing works is an essential on the path of starting to earn money from coding? – JakubGamer

Absolutely not - I think open-source is an horrible way to make money (but great way to get some good learning experiences) – arcanis

---

<a href="#what-do-you-expect-the-lifespan-of" name="what-do-you-expect-the-lifespan-of">#</a> **Q:** What do you expect the lifespan of yarn to be until something else replaces it? – Todd

I personally think that Yarn won't be easily replaced, we are commited to keeping up to date with the ecosystem, especially since we now have a modular architecture in Yarn 2+ which allows us to easily add support for new runtimes like Deno or even other languages like Python – Paul Soporan

How nice would it be to have only one package manager to rule all your dependencies (and in darkness bind them 💍 ) – arcanis

---

<a href="#do-you-forsee-an-acquisition-at-some" name="do-you-forsee-an-acquisition-at-some">#</a> **Q:** Do you forsee an acquisition at some point happening with yarn similar to what happened with npm? – Todd

We're not a company, so that'll be difficult! Yarn was created to be a community project, and no single entity really owns it. – arcanis

---

<a href="#are-there-any-plans-on-improving-yarn" name="are-there-any-plans-on-improving-yarn">#</a> **Q:** Are there any plans on improving "yarn link" specially when it comes down to frontend projects and their issues? (still v1 user here, not sure if it has been drastically improved on yarn 2) – SferaDev

I'm not familiar enough with the specific issues frontend projects have with yarn link, but in v2 we've improved it a lot and made it use a new protocol called portal: which correctly follows peer dependencies – Paul Soporan

---

<a href="#any-tips-around-asking-employers-to-consider" name="any-tips-around-asking-employers-to-consider">#</a> **Q:** Any tips around asking employers to consider allowing some of your time towards an open source project? – trousered

It can be difficult. Usually the best answer is to find an overlap between the project you want to work on and what the company needs. For instance, Datadog, my employers, lets me spend some time on Yarn because it's a core part of our infrastructure, and a lot of improvements would benefit us directly or indirectly. But of course that's only a small part of my assignments, so I have to spend part of my own time on it. – arcanis

---

<a href="#is-the-package-registry-mirrored-from-npm" name="is-the-package-registry-mirrored-from-npm">#</a> **Q:** Is the package registry mirrored from npm or another or does it use the npm registry? – niwla23

We use the Yarn registry which is a simple CNAME to the npm registry - [https://yarnpkg.com/getting-started/qa#why-registryyarnpkgcom-does-facebook-track-us](https://yarnpkg.com/getting-started/qa#why-registryyarnpkgcom-does-facebook-track-us) – Paul Soporan

---

<a href="#is-yarn-capable-of-supporting-a-truly" name="is-yarn-capable-of-supporting-a-truly">#</a> **Q:** Is Yarn capable of supporting a truly massive monorepo? (not google scale but, say, an insurance company) – trousered

I think we have at least two users I'm aware of (ie that found our Discord) that have something like a thousand workspaces. We even made performance improvements specially for this use case, so I'm somewhat confident you can make it work 😃 – arcanis

---

<a href="#yarn-workspaces-are-a-very-powerful-feature" name="yarn-workspaces-are-a-very-powerful-feature">#</a> **Q:** Yarn workspaces are a very powerful feature. Do you see them continuing to evolve or take on new shapes in the feature? – Todd

Something we're investigating is multi-project support - which means having Yarn manage multiple projects with their own workspaces at once. This area also includes split linker modes in monorepos, because our current architecture makes it hard for us to implement support for per-workspace node linkers (e.g. using n_m for a single react-native workspace and pnp for all other workspaces) – Paul Soporan

For sure. We use them in our own monorepo, at our companies, and myself in my side projects. I'm sure we'll find ways to refine some rough parts of the experience over time. For instance, quick tip, Yarn 2 features a publishConfig.main field in the package.json that lets you pick a different main when you're developing locally, vs publishing the resulting package. It's super-handy when working with tools like ts-node or babel-register! – arcanis

---

<a href="#answered-above" name="answered-above">#</a> **Q:** Original question was deleted – trousered

Probably not, it'll be one or the other. We investigated it, and the conclusion was that it would require to abandon far too many assumptions to be worth the cost of implementing it straight into the core. It's still somewhat possible by dropping some requirements (for example by accepting having two lockfiles); perhaps we should document this option somewhere. – arcanis

---

<a href="#what-is-a-ruleprinciple-you-follow" name="what-is-a-ruleprinciple-you-follow">#</a> **Q:** What is a rule/principle you follow when writing code and why do you find it helpful? – Muffinoota

I don't think I have a particular golden rule, except perhaps conventions around how I organize my code. That makes it easier for me to find my way around when I come back months later. – arcanis

I'm not the right person to answer this question because I'm pretty much still a beginner in the JS ecosystem and I don't have the necessary experience yet - but generally I (should) try (more) to think in advance of the MVP and improve from there, because otherwise it becomes a mess pretty quickly – Paul Soporan

---

<a href="#how-do-you-balance-continuing-to-add" name="how-do-you-balance-continuing-to-add">#</a> **Q:** How do you balance continuing to add new features and growing the complexity of the code, while still ensuring you have enough man-power to support future releases for years to come? – Todd

We try to be really mindful of the code complexity. That's at least in part why we made it so that Yarn 2 can be extended via plugins: this way, unlike 1.x, we don't have to merge features unless we're ready to maintain them for the foreseeable future. It was a huge problem before because if you wanted a feature, the only reasonable way for you to use it was to wait for us to merge it … which in turn increased the complexity more, and more, and more.

Plus, plugin systems also constrain us and make it very obvious when we're doing some unfathomable thing that will be a pain to maintain.

And if you have any questions or want to know more about our progress, please feel free to join our little Discord community ([https://discord.gg/yarnpkg](https://discord.gg/yarnpkg)) or to follow me on Twitter ([https://twitter.com/arcanis](https://twitter.com/arcanis)) 😃 – arcanis
