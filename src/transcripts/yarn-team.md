---
title: Yarn Team
date: 2021-02-11
time: 1pm PT / 8PM GMT
location: Q&A Channel on Reactiflux
description: "Lead maintainer and core contributor from the [Yarn Team](https://yarnpkg.com/)"
people: "[Maël Nison](https://twitter.com/arcanis) and Paul Soporan"
---

[4:00 PM] JakubGamer:[Q&A] What are some of the advantages of (collabing) open sourcing/source projects in terms of reputation, business and enjoyment?
[4:00 PM] arcanis:Hello everyone! 👋
[4:00 PM] Gabe:the Q&A is now open
[4:00 PM] Paul Soporan:Hello everyone!
[4:01 PM] bondparkerbond:[Q&A] What do you think of Rome?
[4:01 PM] Gabe:@bondparkerbond please edit your question and add [Q&A] tag at the beginning
[4:02 PM] Gabe:hover over the text with your mouse and you'll see edit
[4:02 PM] nick:[Q&A] What's next on the roadmap for yarn? Any distinguishing features from npm?
@JakubGamer
[Q&A] What are some of the advantages of (collabing) open sourcing/source projects in terms of reputation, business and enjoyment?
[4:04 PM] arcanis:Interesting large question 🤔 I think it depends on the project and the investment you put into it - professionally working on Yarn was a pretty good ice-breaker in interviews, since you basically can talk about allll sorts of interesting stuff that relate to your interviewer. In terms of enjoyment I simply really like working on a project I'm proud of.
[4:05 PM] JakubGamer:[Q&A] Why did you decide to make package manager?
Original message was deleted.
[4:07 PM] arcanis:I almost always wrote open-source. A long time ago it was phpBB scripts for users of a forum hosting, now for JS developers 😄 some projects receive more attention than others, and Yarn already had a decent following when I joined it. It's been great to have a project with an actual community, although sometimes it can be a bit heavy too - I've spent more week-ends than I can remember fixing stuff. Double-edged sword.
@nick
[Q&A] What's next on the roadmap for yarn? Any distinguishing features from npm?
[4:11 PM] arcanis:We focus a lot on the developer experience and internal infrastructure, I think a bit more than the competition (but I'm not objective ;). I find it important to spend time making sure that others people can build on Yarn, almost more than writing Yarn myself. For instance, with Yarn 2+ the plugin system lets you use our API to write your own features, without having to wait for us to merge them. People have already used that for super interesting experiments!
@nick
[Q&A] What's next on the roadmap for yarn? Any distinguishing features from npm?
[4:11 PM] Paul Soporan:
What's next on the roadmap for yarn?
We're planning to release Yarn 3.x quite soon (aka whenever we finish implementing the remaining breaking changes and features we've planned). You can see a list of breaking changes here (https://github.com/yarnpkg/berry/issues/1406). Other than that, we're working on supporting the "exports" field and the ESM resolution inside PnP and quite a few other feature requests in no particular order (many of them from the issue tracker).
Any distinguishing features from npm?
We already have quite a lot of distinguishing features from npm (you can check the documentation for yourself and see them, particularly on the features page (https://yarnpkg.com/features) and on the CLI page (https://yarnpkg.com/cli)). We're constantly implementing new things that npm might not have or that it might do in different ways that we don't think would make sense for us.
@JakubGamer
[Q&A] Why did you decide to make package manager?
[4:12 PM] arcanis:I didn't! Yarn already existed when I joined the project, although the whole team rotated since then 😄
[4:12 PM] Vlad Kosinov:[Q&A] Hello! Thanks for your great job! Now, after quite a long period, what’s your opinion on the yarn 2 release announcement? Why did it receive such negative feedback and what could be changed to avoid that? How did you feel personally at that moment?
[4:12 PM] samsch (she/her):[Q&A] What does the road going forward without node_modules look like? Are there plans to work with other tooling developers (i.e., node, npm, webpack, rome, etc) to build a new standardized format when not using node_modules?
[4:12 PM] bruce:[Q&A] Can you explain yarn check? Any enlightment on fixing its failures?
Not sure, if flattening out duplicate sub-dependencies relates to this,
Hints on dealing with security warnings in sub-dependencies will help.
@Vlad Kosinov
[Q&A] Hello! Thanks for your great job! Now, after quite a long period, what’s your opinion on the yarn 2 release announcement? Why did it receive such negative feedback and what could be changed to avoid that? How did you feel personally at that moment?
[4:17 PM] arcanis:It's complex. On one hand I think we should have better communicated on the "It's perfectly fine to use Yarn 1 for as long as you want" thing, on the other hand there's been a lot of reactions from people who mostly had prejudice and didn't really try to understand what we were doing. But the great thing was that a lot of people understood it, and a few of them even joined us since then as core contributors!
[4:17 PM] (d,f,g)=> {}:[Q&A] what motivated and justified the decision to make such big breaking changes with yarn v1, and how do you feel it has impacted the adoption rate of v2?
@bruce
[Q&A] Can you explain yarn check? Any enlightment on fixing its failures? Not sure, if flattening out duplicate sub-dependencies relates to this, Hints on dealing with security warnings in sub-dependencies will help.
[4:18 PM] arcanis:We deprecated yarn check a long time ago - this command doesn't really make sense: you shouldn't have to "check" that your project is correctly installed - it should be correctly installed! If there is a problem, then it should be reported at install time, not in a separate command.
[4:19 PM] Gabe:we'll take 2 more q's (ooooh... I like the cold face.. too bad I'm in Miami) (I need a warm face)(hot face!!!! nice)
[4:19 PM] JakubGamer:[Q&A] Do you want to spend a lot of time perfecting and polishing out your first open source projects, worrying a lot about other people judging your code negatively, or is it more important to just get started with open-source?
[4:20 PM] Creation:[Q&A] What drove the decision to make React more dependent on Yarn instead of just working with NPM?
[4:20 PM] jœl 🎲:[Q&A] How do I convince my team that npm is not the same as yarn?
@samsch (she/her)
[Q&A] What does the road going forward without node_modules look like? Are there plans to work with other tooling developers (i.e., node, npm, webpack, rome, etc) to build a new standardized format when not using node_modules?
[4:21 PM] arcanis:Plug'n'Play is already a standard, we spent a lot of time describing its public behaviours so that others can implement it as well if they wish. In fact, pnpm recently added an experimental support for it! So now two package managers out of three support it natively 🙂 but yes, we work with a lot of project to try to get everyone onboard. For instance Webpack 5 supports PnP out of the box; same with Parcel, Rollup, etc.
@samsch (she/her)
[Q&A] What does the road going forward without node_modules look like? Are there plans to work with other tooling developers (i.e., node, npm, webpack, rome, etc) to build a new standardized format when not using node_modules?
[4:23 PM] Paul Soporan:PnP basically works with most packages out-of-the-box unless they explicitly hardcode node_modules or if they use native implementations that we can't mount our patched zip fs layer on top of. This means that there's not much for us to do in the case of toolchains (like webpack), other than make sure that they work with PnP, since it's strictly the package manager that controls the generation of node_modules. Regarding other package managers, pnpm has already adopted PnP (via a config setting), but we aren't aware of any such plans for npm. npm also has their own tink initiative, but I'm not up to date to be able to comment on it. Regarding Node, it would be nice if Node natively supported Zip archives and if we could use the ESM hooks it now provides to lower the amount of monkey-patching we do (unfortunately there aren't any hooks for CJS)
@(d,f,g)=> {}
[Q&A] what motivated and justified the decision to make such big breaking changes with yarn v1, and how do you feel it has impacted the adoption rate of v2?
[4:25 PM] arcanis:It made adoption harder, of course - which I'm actually half proud of: it shows that we care more about doing the right (and difficult) thing than user growth. It also answers what we believe justified it: we truly believe node_modules weren't the right approach, and wanted to offer something more (while still providing escape hatches when needed, for instance with the node_modules linker which allows you to migrate projects while still remaining on typical node_modules install if you so wish).
@Creation
[Q&A] What drove the decision to make React more dependent on Yarn instead of just working with NPM?
[4:26 PM] arcanis:I don't think there's been a decision or anything. People had problems with one approach, so they used another. There certainly wasn't a shadow cabinet 😂
@jœl 🎲
[Q&A] How do I convince my team that npm is not the same as yarn?
[4:26 PM] Paul Soporan:- show them this nice thread of tips @arcanis has compiled (https://twitter.com/arcanis/status/1300442490265362432)

- show them the features page
- show them differences in the commands each package manager supports
  [4:26 PM] Gabe:we'll take a few more q's
  [4:27 PM] Gabe:3 more
  [4:27 PM] pinkie:[Q&A] Do you have upcoming plans with the new releases of Yarn. Do we have a special to look forward to?
  @JakubGamer
  [Q&A] Do you want to spend a lot of time perfecting and polishing out your first open source projects, worrying a lot about other people judging your code negatively, or is it more important to just get started with open-source?
  [4:28 PM] arcanis:I don't care too much how people in general feel about my open-source code. Those who can complain are those who invest to make things better, so I tend to listen to my fellow contributors far more! Of course you still need to stay open to interesting external ideas, that goes without saying.
  [4:28 PM] Hansi:[Q&A] As a lead maintainer, how you do avoid looking at the massive codebase and going "gotta write everything from scratch" again mind-set? (I personally suffer a lot from this)
  [4:28 PM] Gabe:more q's please
  [4:29 PM] SferaDev:[Q&A] What are your thoughts on npm 7 supporting yarn lock files too?
  @pinkie
  [Q&A] Do you have upcoming plans with the new releases of Yarn. Do we have a special to look forward to?
  [4:29 PM] Paul Soporan:We are going to release Yarn 3.x soon(ish) - you can read more details on another answer above https://discord.com/channels/102860784329052160/193117606629081089/809532173832421456
  As always, we're always looking for things to improve and implement
  @Hansi
  [Q&A] As a lead maintainer, how you do avoid looking at the massive codebase and going "gotta write everything from scratch" again mind-set? (I personally suffer a lot from this)
  [4:31 PM] arcanis:I'm the bad person to ask this, I already did it once 🙃 but it was in insight dangerous, and it only worked both because I'm extremely stubborn and pushed through, and because I found great contributors to take co-ownership of various parts. Now I think we're happy of the general architecture, and refactorings on the 2.x+ have been very incremental.
  @SferaDev
  [Q&A] What are your thoughts on npm 7 supporting yarn lock files too?
  [4:32 PM] Paul Soporan:A fact rather than a thought - it doesn't currently support v2+ lockfiles and it turns them into v1 lockfiles, so.... not completely happy 😄 (especially since it's impossible for npm to support Yarn 2+ lockfiles because it doesn't have enough information to manage Yarn's dep tree - caused by the difference in architectures)
  [4:32 PM] Todd:[Q&A] What do you expect the lifespan of yarn to be until something else replaces it?
  [4:32 PM] pinkie:[Q&A] Who's idea was it to called yarn, yarn. and was there any other logos in mind then the cat?
  [4:32 PM] JakubGamer:[Q&A] Do you think that open-sourcing works is an essential on the path of starting to earn money from coding?
  [4:33 PM] arcanis:I think Yarn used to be called kpm (for kittens package manager), but the name wasn't "cute" so it got a fancier label 🧶 no idea for the logos
  @JakubGamer
  [Q&A] Do you think that open-sourcing works is an essential on the path of starting to earn money from coding?
  [4:35 PM] arcanis:absolutely not - I think open-source is an horrible way to make money (but great way to get some good learning experiences)
  @Todd
  [Q&A] What do you expect the lifespan of yarn to be until something else replaces it?
  [4:35 PM] Paul Soporan:I personally think that Yarn won't be easily replaced, we are commited to keeping up to date with the ecosystem, especially since we now have a modular architecture in Yarn 2+ which allows us to easily add support for new runtimes like Deno or even other languages like Python
  [4:37 PM] arcanis:How nice would it be to have only one package manager to rule all your dependencies (and in darkness bind them 💍 )
  [4:40 PM] Todd:[Q&A] Do you forsee an acquisition at some point happening with yarn similar to what happened with npm?
  @Todd
  [Q&A] Do you forsee an acquisition at some point happening with yarn similar to what happened with npm?
  [4:42 PM] arcanis:We're not a company, so that'll be difficult! Yarn was created to be a community project, and no single entity really owns it.
  [4:43 PM] trousered:[Q&A] Any tips around asking employers to consider allowing some of your time towards an open source project?
  [4:43 PM] SferaDev:[Q&A] Are there any plans on improving "yarn link" specially when it comes down to frontend projects and their issues? (still v1 user here, not sure if it has been drastically improved on yarn 2)
  [4:44 PM] trousered:[Q&A] Is Yarn capable of supporting a truly massive monorepo? (not google scale but, say, an insurance company)
  @SferaDev
  [Q&A] Are there any plans on improving "yarn link" specially when it comes down to frontend projects and their issues? (still v1 user here, not sure if it has been drastically improved on yarn 2)
  [4:45 PM] Paul Soporan:I'm not familiar enough with the specific issues frontend projects have with yarn link, but in v2 we've improved it a lot and made it use a new protocol called portal: which correctly follows peer dependencies
  [4:45 PM] niwla23:[Q&A] Is the package registry mirrored from npm or another or does it use the npm registry?
  @trousered
  [Q&A] Any tips around asking employers to consider allowing some of your time towards an open source project?
  [4:46 PM] arcanis:It can be difficult. Usually the best answer is to find an overlap between the project you want to work on and what the company needs. For instance, Datadog, my employers, lets me spend some time on Yarn because it's a core part of our infrastructure, and a lot of improvements would benefit us directly or indirectly. But of course that's only a small part of my assignments, so I have to spend part of my own time on it.
  [4:46 PM] Todd:[Q&A] Yarn workspaces are a very powerful feature. Do you see them continuing to evolve or take on new shapes in the feature?
  @niwla23
  [Q&A] Is the package registry mirrored from npm or another or does it use the npm registry?
  [4:46 PM] Paul Soporan:We use the Yarn registry which is a simple CNAME to the npm registry - https://yarnpkg.com/getting-started/qa#why-registryyarnpkgcom-does-facebook-track-us
  @trousered
  [Q&A] Is Yarn capable of supporting a truly massive monorepo? (not google scale but, say, an insurance company)
  [4:48 PM] arcanis:I think we have at least two users I'm aware of (ie that found our Discord) that have something like a thousand of workspaces. We even made performance improvements specially for this use case, so I'm somewhat confident you can make it work 😃
  @Paul Soporan
  I'm not familiar enough with the specific issues frontend projects have with yarn link, but in v2 we've improved it a lot and made it use a new protocol called portal: which correctly follows peer dependencies
  [4:48 PM] SferaDev:Yeah, some I've faced in the past were related to peer dependencies such as react and different versions, bundling dev server with webpack or even sometimes transpiling on Typescript. Almost everything could be worked around, but on some scenarios it required additional infra work on the UI components libraries for yarn link to actually work.

Will try out v2 and that portal feature, thanks!
[4:48 PM] Gabe:2 more questions
@Todd
[Q&A] Yarn workspaces are a very powerful feature. Do you see them continuing to evolve or take on new shapes in the feature?
[4:50 PM] Paul Soporan:Something we're investigating is multi-project support - which means having Yarn manage multiple projects with their own workspaces at once. This area also includes split linker modes in monorepos, because our current architecture makes it hard for us to implement support for per-workspace node linkers (e.g. using n_m for a single react-native workspace and pnp for all other workspaces)
[4:50 PM] trousered:Answered above
@Todd
[Q&A] Yarn workspaces are a very powerful feature. Do you see them continuing to evolve or take on new shapes in the feature?
[4:50 PM] arcanis:For sure. We use them in our own monorepo, at our companies, and myself in my side projects. I'm sure we'll find ways to refine some rough parts of the experience over time. For instance, quick tip, Yarn 2 features a publishConfig.main field in the package.json that lets you pick a different main when you're developing locally, vs publishing the resulting package. It's super-handy when working with tools like ts-node or babel-register!
[4:50 PM] Gabe:2 more questions please
[4:51 PM] Gabe:we have 10 min left in the Q&A! ask them now
@trousered
Answered above
[4:52 PM] arcanis:Probably not, it'll be one or the other. We investigated it, and the conclusion was that it would require to abandon far too many assumptions to be worth the cost of implementing it straight into the core. It's still somewhat possible by dropping some requirements (for example by accepting having two lockfiles); perhaps we should document this option somewhere.
[4:53 PM] Todd:Wow, built in support for multi-repo workspaces would be awesome!
[4:53 PM] Muffinoota:[Q&A] Maël and Paul, what is a rule/principle you follow when writing code and why do you find it helpful?
[4:56 PM] SferaDev:[Q&A] At our company we have a handful of applications that share some dependencies and we usually want them to be on the same pinned version for bug reproducibility and consistency (ie same TS, CRA, React, UI libraries versions) and manually update them on all the projects. Would that multi project support you just mentioned automatize in any sense that scenario? Since the applications are sometimes unrelated and for different clients we do not use the workspaces feature or anything similar.
@Muffinoota
[Q&A] Maël and Paul, what is a rule/principle you follow when writing code and why do you find it helpful?
[4:56 PM] arcanis:I don't think I have a particular golden rule, except perhaps conventions around how I organize my code. That makes it easier for me to find my way around when I come back months later.
rollsafe
2
[4:56 PM] Todd:[Q&A] How do you balance continuing to add new features and growing the complexity of the code, while still ensuring you have enough man-power to support future releases for years to come?
[4:57 PM] Gabe:that's the last q ^
@Todd
[Q&A] How do you balance continuing to add new features and growing the complexity of the code, while still ensuring you have enough man-power to support future releases for years to come?
[4:59 PM] arcanis:We try to be really mindful of the code complexity. That's at least in part why we made it so that Yarn 2 can be extended via plugins: this way, unlike 1.x, we don't have to merge features unless we're ready to maintain them for the foreseeable future. It was a huge problem before because if you wanted a feature, the only reasonable way for you to use it was to wait for us to merge it ... which in turn increased the complexity more, and more, and more.
@Muffinoota
[Q&A] Maël and Paul, what is a rule/principle you follow when writing code and why do you find it helpful?
[4:59 PM] Paul Soporan:I'm not the right person to answer this question because I'm pretty much still a beginner in the JS ecosystem and I don't have the necessary experience yet - but generally I (should) try (more) to think in advance of the MVP and improve from there, because otherwise it becomes a mess pretty quickly
[5:00 PM] arcanis:Plus, plugin systems also constrain us and make it very obvious when we're doing some unfathomable thing that will be a pain to maintain.
[5:01 PM] arcanis:And if you have any questions or want to know more about our progress, please feel free to join our little Discord community (https://discord.gg/yarnpkg) or to follow me on Twitter (https://twitter.com/arcanis) 😃
