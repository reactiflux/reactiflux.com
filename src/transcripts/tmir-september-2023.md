---
title: This Month in React (September 2023)
date: 2023-09-27
time: 10am PT / 5PM GMT
location: Main Stage on Reactiflux
description: "Join Carl Vitullo, Jacob Paris, and Sebastien Lorber as we break down This Month in React. We'll break down what's new in an hour-long conversation."
people: "[Carl Vitullo](https://twitter.com/vcarl_), [Jacob Paris](https://twitter.com/jacobmparis), and [Sebastien Lorber](https://twitter.com/sebastienlorber)"
---

Remix v2, Docusaurus v3, Node 20.6, Bun 1.0

- [Spotify](https://open.spotify.com/episode/54ClLvCFL82IG93a4g7vXZ?si=j7G_aMnNSwOid70QPsJcBQ)
- [Apple Podcasts](https://podcasts.apple.com/us/podcast/this-month-in-react-september-2023/id1661733526?i=1000629732098)
- [RSS](https://anchor.fm/s/a1f8a59c/podcast/rss)
- [Or anywhere you prefer](https://podcasters.spotify.com/pod/show/reactiflux/episodes/This-Month-in-React--September-2023-e29vb6o/a-aadsk3b)

<iframe src="https://podcasters.spotify.com/pod/show/reactiflux/embed/episodes/This-Month-in-React--September-2023-e29vb6o" height="102px" width="400px" frameborder="0" scrolling="no"></iframe>

This episode covers major updates across the React ecosystem, including:

- Node 20.6 adding built-in .env support
- Remix v2 using extensive feature flagging
- Docusaurus v3 introducing visual regression testing
- Astro 3.0
- understanding React Server Components. Server components enable powerful capabilities like data fetching at the component level, but also introduce complexities around data serialization and scoping.
- Bun 1.0 as a faster Node.js alternative, aiming to replace many common Node.js tools and improve performance. There was discussion around adoption challenges due to non-standard features.
- Next.js adding server actions for forms
- Expo moving towards full stack capabilities, which expands capabilities for mobile apps and could position Expo as a compelling full stack solution.
- and Dan Abramov joining Bluesky

Key themes were leveraging Rust and other languages for server-side rendering, moving away from CSS-in-JS, and enabling easier major version upgrades through techniques like feature flags.

Sebastien discussed using React Server Components in static site generators like Docusaurus to simplify data fetching without GraphQL. There was also discussion around using languages like Rust and OCaml for improved server-side rendering performance.

Links used:

- [Node 20.6 - Built-in .env file support](https://nodejs.org/en/blog/release/v20.6.0)
  - [Node.js 16 End-of-Life](https://nodejs.org/en/blog/announcements/nodejs16-eol)
- [Remix v2 pre-release](https://twitter.com/remix_run/status/1696525340640936190)
  - [Upgrade guide](https://remix.run/docs/en/main/start/v2)
  - [SemVer philosophy](https://remix.run/blog/future-flags)
- [Docusaurus v3 beta](https://github.com/facebook/docusaurus/discussions/9312)
  - [Upgrading frontend dependencies with confidence](https://docusaurus.io/blog/upgrading-frontend-dependencies-with-confidence-using-visual-regression-testing)
- [Astro 3.0](https://astro.build/blog/astro-3/)
- [Making Sense of React Server Components](https://www.joshwcomeau.com/react/server-components/)
- [Expo Router RFC - API Routes](https://blog.expo.dev/rfc-api-routes-cce5a3b9f25d)
- [Bun 1.0](https://bun.sh/blog/bun-v1.0)
  - [My Thoughts on Bun](https://adventures.nodeland.dev/archive/my-thoughts-on-bun/)
  - [Announcing Biome](https://biomejs.dev/blog/annoucing-biome)
- ⚡️
  - [React-Native running natively on Apple Vision Pro simulator demo](https://twitter.com/o_kwasniewski/status/1701626162521190688)
  - [Are Big Projects Ditching TypeScript?](https://www.totaltypescript.com/are-big-projects-ditching-typescript)
  - [Rust Server Components](https://anto.pt/articles/rust-server-components)
  - [Web Developers, CSS-in-JS is Ruining Your Product](https://cord.com/blog/migrating-from-css-in-js-to-vanilla-extract)
  - [Dan Abramov joins Bluesky](https://twitter.com/dan_abramov/status/1695566446007386214)

[00:00:00] **Carl Vitullo:** Hello everyone. Thanks for joining us again for September's This Month in React, where we recap and digest recent developments in the ever evolving React and web ecosystem. I'm Carl. I'm a staff product engineer and freelance community leader at Reactiflux, the Discord for React Professionals, where you are! Joined today by Jacob Paris and Sebastian Lorber.

[00:00:22] Jacob, do you want to introduce yourself?

[00:00:24] **Jacob Paris:** Yeah, sure. Thanks, Carl. So I'm, working in DevRel at the moment. I've been a React dev since, not quite the start, I was one of the later later laggards to drop off of Angular, way, way back then. And on the side I'm an egghead instructor.

[00:00:38] So I've been producing a lot of content primarily for the Remix ecosystem. And yeah, just trying to share and teach as much as I can.

[00:00:46] **Carl Vitullo:** Well, also you send out a monthly Remix newsletter yourself, don't you?

[00:00:49] **Jacob Paris:** Yeah, yeah, I do. So that, that one's called Moulton. I took over as a writer of that. Pretty recently and pretty similar to the this week in react, but it's specifically focused on the Remix ecosystem. So, the, all the cool libraries and articles and courses and updates from the team and everything cool that's happening with Remix.

[00:01:08] **Carl Vitullo:** Nice. Yeah. A lot going on there. Yeah. And Sebastian?

[00:01:12] **Sebastien Lorber:** Yeah. So I'm Sebastien Lorber, and you probably know me for the this week in React newsletter, and I'm also the, the maintainer of Docusaurus, which is now, the version three is in beta. So you can give it a try if you want and, give me some feedback.

[00:01:28] **Carl Vitullo:** Cool. All right, let's jump into it.

## Node 20.6

- [Node 20.6 - Built-in .env file support](https://nodejs.org/en/blog/release/v20.6.0)
  - [Node.js 16 End-of-Life](https://nodejs.org/en/blog/announcements/nodejs16-eol)

[00:01:30] **Carl Vitullo:** I guess my first link here is new. It's not actually react or react related directly, but it will affect the ecosystem. New Node version 20.6. Really, my big highlight here is they're pulling in dotenv support to the runtime properly. So no more dotenv. We don't need to install a package, we can just use dotenv files.

[00:01:55] Yeah, a lot of the other changelogs look pretty deep and wonkish. There's one that looks like it might be really interesting or might have really interesting echoes throughout the ecosystem, but I'm not really sure exactly what it is about.

[00:02:09] It's something about registering module hooks Module customization hooks. They have a call out in the change log saying that those module customization hooks can now handle both ES modules and common JS sources. I don't know exactly what those are for. The reading about them in these release notes was the first time they'd ever crossed my radar. And there's not really a lot of information about what they're for in here.

[00:02:32] But anything that starts talking about cross-compatibility between ES Modules and CommonJS is like, very interesting to me because that has been such a pain point for like. tears at this point. So that caught my eye too, but it looks like most of these other changes were relatively minor and you know, classic LTS cycle, now node 16 is end of life though.

[00:02:55] We were using those for reactibot. So if you're using node 16. Stop it. Time to update. Yeah, Jacob, Sebastian, anything you want to chime in on there? Not a lot to discuss there.

[00:03:06] **Jacob Paris:** Yeah, the CJS ESM incompatibilities have been largely a nightmare for my entire history of being a developer. To be honest, I don't know how new devs really Understand the stuff when they pick up.

[00:03:21] It's like, you know, which import format do you use? You've got configurations that are automatically generated by different different packages, ESLint, Prettier, and sometimes they work and sometimes they don't. And I, I don't know how anyone makes sense of it. I am all on board for the ecosystem moving toward ESM here in the future, where maybe there's only one thing to do.

[00:03:41] Or we can go with Bun's approach where everything just works together and it's up to library authors to sort things out between ourselves. I'm, I think that's okay as well.

[00:03:51] **Carl Vitullo:** Yeah. On your note about people learning web development right now something that has bitten me a number of times is, like, Sindre Sorhus has, all of his packages now are ESM only.

[00:04:04] And if you want CommonJS, you've got to decrement the major version. And that has bitten me so many times where something is inexplicably broken and I just need to, like, remember which are his packages and decrement them. So it's, yeah, hopefully, I have a lot of fingers crossed here that this is going to make that better, but, you know, we'll, we'll see what it does.

[00:04:24] It does say, &quot;this should simplify the customization of the Node.js module loading process as package authors can customize more of Node.js without relying on deprecated APIs such as `require.extensions`.&quot; So hopefully, we'll see.

[00:04:37] Jacob, you want to take us off on our next link?

## Remix v2, major release feature flagging

- [Remix v2 pre-release](https://twitter.com/remix_run/status/1696525340640936190)
  - [Upgrade guide](https://remix.run/docs/en/main/start/v2)
  - [SemVer philosophy](https://remix.run/blog/future-flags)

[00:04:38] **Jacob Paris:** Yeah. Yeah. So I guess the biggest thing from the Remix ecosystem at the moment there is that they just launched the V2.

[00:04:45] It was quite an underwhelming release, every new feature that came out, everything has already been in place for weeks or months now via feature flag in the previous versions. So anyone who's already running that you know in, in production or in any of their apps they've already been able to opt in to the FeatureFlag, upgrade things and move on.

[00:05:05] And, you know, if that didn't happen by now, I guess now's your chance to do that before you increment the major version. So in theory, that should make it a really smooth transition for pretty much everyone to upgrade. But then on the same note of ESM versus CJS issues, one new thing that happened is that, with Remix V2, it now has first class support for ESM, which just wasn't a thing before.

[00:05:28] So now in your dev server, you can run full ESM applications. And, in that process of releasing the new version, they've also changed the default from CJS to ESM. So, um, there's been a lot of people kind of struggling with incompatibility issues because, you know, previously their new applications were being made in CommonJS.

[00:05:49] And now they're, now they're being made to support ESM and some config files that they've been trying to copy over from other files or from examples that they've copied online old repositories. Now, they just need to be tweaked a little bit, and it's usually not that much work.

[00:06:05] But there's small changes that need to be done, and you need to know what you're doing to do that. That said, Remix still supports CommonJS, but since they changed the default, there is now this friction and this, this transition period that people are having to go through.

[00:06:18] **Carl Vitullo:** That's awesome though. Maybe I can stop decrementing my Sindre Sorhus modules.

[00:06:23] **Jacob Paris:** (laughs) In general even if you're going all in on ESM, you should still be able to run CJS packages by running them through a Bundler beforehand. So they have to be Bundled rather than running natively but just because you're moving toward ESM doesn't mean you no longer have the capacity to use CommonJS modules.

[00:06:42] It's just a little more work to get them running in the same runtime.

[00:06:45] **Carl Vitullo:** Okay, very cool. Very nice. Yeah, I was reading a little bit about, you know, in there, in the V2 announcement post, they talked, way more than any, you know, new releases, new features they talked much more about their update, upgrade philosophy, which I thought was really interesting, like the, you know, vertical space associated with advertising what they were releasing versus advertising how they released it.

[00:07:10] I thought it was an interesting choice, but I really loved the philosophy that they described. I just put a link and link to it in chat. But they, I pulled out a couple of quotes because I thought they were really clever and just useful, kind of useful to hear.

[00:07:24] For anyone in the ecosystem who's going to be consuming libraries, and maybe also for library maintainers. But if they talked about Semver, &quot;Semver gives us a way to communicate when breaking changes exist, we do not have a similar agreed upon process of how to introduce breaking changes in our frameworks and communicate them to application developers.&quot;

[00:07:42] and they talked a lot about like the long running feature branch development for upgrades, which is a pain I have felt a number of times in my career. I have been that developer maintaining a feature branch for a month, two months, three months, constantly merging back in, rebasing off master, repairing merge conflicts, doing all that.

[00:08:03] So seeing them talk about the efforts they've gone through to avoid those problems was like, Oh, this is really interesting. I didn't realize that it was like technically feasible to really do this.

[00:08:16] So yeah, I thought that was really cool.

[00:08:17] **Sebastien Lorber:** Yeah, I agree. But I have something that I don't really understand is there are some things that are really hard to ship with a future flag, you know, for example in Docusaurus, we upgraded recently to MDX two and it's. Completely different from MDX one on the inside, the AST is completely different, the packages were migrated to CommonJS to ESM and there are many things like that.

[00:08:43] And I think like if you wanted to. To bring support to MDX2 with a future flag, you would have to vendor the MDX library and all, many dependencies to be able to support the two versions at the same time, and we would have to maintain two copies of the code somehow. I don't know, but For example, I was wondering if Remix version 2 will have support for server components as a future flag, or if it will come only with version 3 at the release time, because it looks like a complex thing to ship as a future flag somehow.

[00:09:24] **Jacob Paris:** Yeah, yeah, it's, it's definitely challenging and you sort of have to pick and choose which features which features you go with. I'm not 100 percent sure when the RFCs for how Remix is going to handle Server Components are coming out. But, you know, that's something Ryan Florence is working on at the moment. So we'll have a little more information when that comes.

[00:09:45] But for example, yeah the... You know, updating big major dependencies, like you couldn't feature flag having support for example, React 17 versus React 18 at the same time. So that was one of the big things that Remix did update in the v2.

[00:10:04] So you can run v1 with all the feature flags enabled on React 17, but at the time you update to v2 officially, it does drop support for versions of React prior to 2018. And it was the same with the, with the CJS ESM thing. That's just, it's not practical to try and, you know, run those side by side in, in everything.

[00:10:23] So the official first class ESM support, was also sort of a, an add on that came in with the with the new version rather than trying to feature plague that. So I definitely see a lot of value in them as a tool where, you know, as long as you can choose not to break things for your developers, and to give them an incremental path to adoption, you should do that.

[00:10:47] But you know, as you've said, sometimes with bigger dependencies, sometimes it just can't be done. Yeah, it makes sense. I guess, I guess another, another thing I'm so happy that Remix is going down this road is because developers are just terrified of major version releases. Um, like if you look what happened with Angular, moving from Angular 1 to Angular 2, you know, with React going from React class components to React hooks.

[00:11:11] You've got Vue 2 to Vue 3, and now, like, all the dialogue I'm hearing with Remix, you know, despite how loud they are taking up the entire announcement post to talk about it. The way this major version release process is working, you're still getting people asking, &quot;well, is this stable yet? should I wait a little later? I don't want to start a project now if I'm going to have to refactor and change everything later.&quot;

[00:11:35] There's just such this ingrained culture where major version updates are, are, are terrifying and not something you want to put a project through if you don't have to. People would rather wait and delay things than Adopting and having to go through that transition period.

[00:11:50] So if, if what Remix is doing here can really catch on and start to make this a little less painful for upgrades, then yeah, I, I am all for that.

[00:11:58] **Carl Vitullo:** Yeah, agreed. Definitely true that there's a lot of fear around major version upgrades. And, you know, I, I maybe actually, maybe it's less fear and more just like trauma because so many of the you know, it's not unbased.

[00:12:11] It's not like, you know, you've heard stories to keep you up at night. It's just like so many people have had lived experiences of, &quot;major version upgrades are super painful.&quot; So I hopefully this is a trend. I love this direction. I have to imagine that feature flagging things is this aggressively in a framework is, technically challenging, technically complicating. So yeah, hopefully we'll see it more. Hopefully it's not so complicating that it's difficult for other people to copy, because I love this. I hope this becomes a trend.

[00:12:42] Sebastien, you want to take us off on our next link?

## Docusaurus v3.0

- [Docusaurus v3 beta](https://github.com/facebook/docusaurus/discussions/9312)
  - [Upgrading frontend dependencies with confidence](https://docusaurus.io/blog/upgrading-frontend-dependencies-with-confidence-using-visual-regression-testing)

[00:12:45] **Sebastien Lorber:** Yeah, so I thought that as we were speaking about being afraid of upgrading dependencies, actually I posted an article last week about the subject. And it's related to the Docusaurus version 3. So I was working for, on the version three for a very long time. Now it's a, it's an upgrade of the infrastructure, including React 18 and, and MDX 2.

[00:13:11] And, this changes, not, MDX two can have a lot of, weird side effects. For example, you add. MDX content and it rendered nicely previously. And now if you, if you upgrade to version two it eventually fails to compile now. So you have to reflect all the content of it. And also it can render differently, even if it's compiled.

[00:13:33] So. you are not very confident that actually the, the upgrade is safe unless you took, you take a look at all the pages of your documentation or your blog or whatever it is and, take a look at all of them and be sure that it renders exactly like before. So, um, what I did for Docusaurus and this is now, um, A solution that, we recommend to our users is to adopt a workflow of visual regression testing.

[00:14:03] So, the idea is that you take a screenshot of all the pages of your documentation website. And, you do this on the main branch and on the pull request branch, and then you use a tool that can be, something self hosted or external, and this tool permits you to tell you which are the differences between your upgrade branch and your, and the main branch.

[00:14:28] So, if you have visual regressions that you don't expect, the tool is able to report it as a GitHub commit status. And so, I wrote a blog post about the setup that I used. It's based on GitHub Actions, Playwright, and Argos, which is an external tool to handle the screenshots. And I thought it was quite interesting.

[00:14:50] I used it in the context of Docusaurus upgrades. For example, while upgrading the React Native website last week, we... catched a few bugs, in the process thanks to this workflow. And I think it can be easily, adapted to work on other sites. What I did to get the, all the pages of the site is to read the sit map point, the XML file, and iterate on, on the list of path.

[00:15:18] So as long as you're able to take screenshots and are able to get a list of page of your site I think you can try to adopt this workflow and if you want to do a dependency upgrade, then you can do and compare and see if there is a visual difference being reported by the tool that you use.

[00:15:37] **Carl Vitullo:** Yeah, very nice.

[00:15:38] I've heard about this kind of visual regression testing. I feel like I've heard about it four or five times over my career. And every single time it hasn't really worked out. Or, you know, I've tried it and it, you know, the the experience doesn't quite work out. But I'm reading about I'm reading your blog post.

[00:15:57] And I love the idea of I feel like maybe the technology now has developed to the point where it will actually work now, because like Playwright, I've heard only phenomenal things about. Everyone I've talked to who has used it has said that like, yes, this is great. This is what integration and end-to-end testing should be.

[00:16:16] And GitHub Actions is finally like a great task runner for services like that. whereas, you know, I remember trying to set up this sort of tool in like Jenkins, like eight years ago, and it was like, Oh, I don't, this doesn't work. So yeah, this seems really cool.

[00:16:34] Cool. Well,

[00:16:35] I can take us on to our next one then we are going to get to Bun 1. 0, but I want to, I'll say we're going to save that for the end.

## Astro 3.0

- [Astro 3.0](https://astro.build/blog/astro-3/)

[00:16:43] **Carl Vitullo:** So right now, I want to talk about Astro 3.0, I actually have not yet used Astro very, very extensively, but I have heard only really great things about it and it's a, it's definitely something I want to check out. I think I've heard about it being like very good for like personal sites, portfolios, like relatively smaller marketing sites.

[00:17:06] So, you know, as I'm looking at making a personal, professional blog or revamping the Reactiflux website. Very interested to give that a shot, give it a real chance of and see how it works out. But yeah, Astro 3.0, new, new release. I don't know. Have either of you used Astro at all, very much?

[00:17:25] **Sebastien Lorber:** no. But I think it's interesting because, you know, the view transitions make it more, looking like, single page applications. And now that they are able to persist the state between, page transitions, that's becoming a really interesting solution. What I'm afraid, for example, for now, is that if you use third party widgets like intercom, chat, and things like that, If you navigate from one page to another, you would like this kind of widget to persist the state because it's really annoying, you know, to have the chat that resets itself.

[00:18:00] You are in the middle of a conversation with the support team or something and you click on the link and then, everything is lost. So if they can solve this program, I think it's it's really great for us too. And for multi page applications in general.

[00:18:13] **Carl Vitullo:** Nice. Sadly, I can't speak very, much more deeply than I already have on this, but yeah, definitely excited to give it a shot. And I love when new versions come out before I have fully learned them. So then I only have to learn one thing instead of two.

[00:18:28] Jacob, you want to take us on to our next one?

## Josh Comeau's Making Sense of React Server Components

- [Making Sense of React Server Components](https://www.joshwcomeau.com/react/server-components/)

[00:18:29] **Jacob Paris:** Yeah, sure. So, Josh Comeau put out this great article about, React Server Components. So I, I've kind of been sleeping on React Server Components for a long time, because They've always really confused me.

[00:18:45] So when the information was first coming out, there was, there were so many different ideas about how these are going to work. And then you start seeing examples and some of the examples are coming from the React team and some of them are coming from the Vercel team and then people from React move over to Vercel and then you get you know, examples from the from the code bases of either moving back and forth.

[00:19:06] It was just, it was always so unclear, which, you know, in any example you see, which parts were React and which parts were Next. And so, so for me as a, as a Remix developer, I'm wondering, you know, which parts are going to stay in React that then Remix can build on top of and which parts are belonging to Next that, you know, Remix may either have to, may either have to clone or continue to build on top of.

[00:19:32] For a long time, I just, you know, I kept seeing these server components, and I just really didn't know much about what they were. which is why, yeah really glad Josh has put out this article, because reading through, everything makes quite a lot more sense now. The server components are basically a new model here, where every React component we've dealt with in the past has now been renamed to a React Client component, and these React Server Components render only on the server, and they only render once, and it's a Almost like server side rendering, but instead of executing once and then being all the HTML to the browser is they can render and then send all the information React needs to hydrate a React component to the browser in fact, in practicality, what this means is we can have async data fetching happen right in our components, which is fantastic, And any time you include a client component in there, everything that component imports just works exactly like, components we've had before.

[00:20:39] It unlocks a lot of abilities that we primarily couldn't do before in terms of composition, for example, in say, in Remix and in Next.JS before this, you can have a, a loader or your get server side props that fetches data, and then it passes it to a server side rendered components.

[00:20:58] But there was never any way to do that at the component level that always had to do, had to happen at the route level where you would have a, you know, each route would become an end point and you can. You know, you generate your components based on the data that endpoint returns. So there are the server components, um, you could almost model it, you're getting, you know, individual little endpoints for every single, every single component you have, and they can, they can be composed together just in the same way we're already currently using, React, which I, which I think is fantastic.

[00:21:33] There are some issues with it still, that, that I don't I'm still not 100 percent sure how they solve or how they're going to solve, for example, data serialization. If you're sending data from the server to the client, say you have a date or a map or a set, the client is going to receive that as just just a string or, you know, a stringified array.

[00:21:55] And... When you're dealing with a very visible network boundary, like you've got a loader and a react components or you've got your server side props and then your react bit it's pretty easy to see where that boundary is, but now with the server components, you can create that network boundary simply by passing data to a prop in a client component, and I just think that's really, really subtle at the moment, so I'm not 100 percent for you know, if that's actually going to cause problems in practicality, you go inside that component, and now your types are just a little different than they were.

[00:22:30] In the server components it seems like that's going to be space for people to get confused.

[00:22:36] But all in all the components that these enable are, I think, I think, fantastic. Like, we're looking at, you can imagine a component that render, or that syntax highlights code for you. So you just pack text and it's got all the syntax highlighting built in without needing to ship megabytes upon megabytes of, libraries to the browser to make it understand every programming language it could support.

[00:22:59] you could imagine a, say an image component that automatically. You know, pre process the image based on its, you know, widths and heights and any resolutions you set. Next already has a sort of proprietary version of that, but it only works on Vercel hardware. Because they are, if they're in charge of the deploy process, they can then transform your code to make that work.

[00:23:22] But this will now enable that to work on any hardware that supports React Server Components. So yeah, I'm super excited about it. The ability to do that and then you can publish these full stack components in libraries as well. And then users can just import them and things will work full stack, which is you know, it's just, it's, it's, it's unlocking new abilities that we just couldn't do before.

[00:23:45] **Carl Vitullo:** Yeah, unlocking new abilities really does seem like the big thing here. I feel like I, I too have kind of skimmed past this, despite talking about it with some frequency on this event. But it just, I, I can sense that it's going to be a very wide and deep subject, and I just don't feel like... Like, okay, I can write a toy project and get a little bit of experience of what it's like using it.

[00:24:08] But, you know, that won't really tell me everything I need to know about what are the performance characteristics for like 99th percentile users or, you know, there's just like such a long tail of things to learn about how it will affect development and performance and user experience and all of those things.

[00:24:28] And so I feel like I'm going to keep saying, &quot;I don't think I really understand this&quot; for a very long time because the implications are going to take a long time to really shake out.

[00:24:38] **Jacob Paris:** Yeah, and there's there's some new sort of, foot guns coming in that people will have to watch out for like, for example, you know, it's super common.

[00:24:45] You have an array of data and you, you, you, you map through it. And on each iteration of the map, you're, you're creating a component, but they have a list mapping through and creating a list item in each one. The, the data you pass to that list is going to be. Individually serialized for every item in that list, if you happen to pass any large document React Server Components are not going to de duplicate that for you.

[00:25:10] So you, you can end up with tons and tons of data. Ryan Florence was saying there was something similar in in a Shopify Hydrogen application that functioned in, in largely the same way. And yeah, it's, we're, we're introducing a whole new set of you know, things that people are going to have to watch out for if they want to have performant code.

[00:25:30] I'm really hoping that when this kind of hits mainstream, there's either going to be enough messaging or maybe lint rules or something, you know, maybe some just physical boundaries put into the framework to stop people from making mistakes like this. Because it just, at the moment, it seems really, really easy to make a lot of mistakes.

[00:25:49] **Sebastien Lorber:** Yeah, I wanted to mention another use case that you maybe didn't think of is you, you know, maybe you used Gatsby before with the GraphQL layer to inject data in, in pages, I think actually, um, React Server Components could be a very good alternative to that, and this is what I'd like to explore in Docusaurus actually, because, you know, the server components do not really need to run on the server.

[00:26:13] You can actually run them at build time, as part of your build process, so a static side generator like Docusaurus is able to also use server components at build time. And this can give the ability to have a very flexible data layer. So instead of using static GraphQL queries in pages and things like that, you would be able to actually use Node. js code inside Interleaved with the client side React code and be able to inject the right data at the right place without actually the need for creating a complex GraphQL query and things like that. So somehow From my Docusaurus perspective, what I just have to do is to expose the data structure and let the user pick the right, data structure from it from right of a component and inject it in a subcomponents.

[00:27:08] So, you don't need actually to have something more advanced. You can just use a JavaScript to get the right data at the right place. And you can do it both at the runtime or at build time.

[00:27:21] **Jacob Paris:** Okay, I, I like that a lot actually. So, so you'd be able to have all of your, um, all of the components in Docusaurus that you're using.

[00:27:30] Each component can have its own GraphQL queries to fetch the data it needs to do. And then you're sort of... Flattening all of that at a compile time, they just fetch the data, it turns into static content.

[00:27:42] **Sebastien Lorber:** Actually, the goal is, the goal is to actually not use GraphQL because this is what Gatsby does, and I think the community didn't really like it. it was a bit too complex. So, um, and one of the shortcomings of Docusaurus is that we are, we use a plugin architecture. So we have a blog plugin and a docs plugin, and they don't see each other. And the problem is that, for example, if you want To display the free, the last three blog posts on your docs. It's impossible because the docs doesn't have access to the blog. So, using server components make it possible for you to override, the docs components and from there read the data structure provided by another plugin and somehow this provides a lot of flexibility thanks to being able to do this, some part of the code, running in the Node. js side.

[00:28:35] **Jacob Paris:** Oh, cool. Cool. Yeah. I like that a lot. That's that is super cool.

[00:28:39] **Sebastien Lorber:** Yeah. We'll see if it works out. I don't know yet, but I think it will.

[00:28:45] **Carl Vitullo:** Nice. Interesting. Yeah. The data fetching side and the actual experience of developing and using that is like what I most specifically would like to check out. And I just, I, I don't have an app that I'm working on right now that has those needs, so I, I don't really know how to get that kind of experience that I'm really hoping, hoping to learn.

[00:29:04] But yeah, on the, on the subject of foot guns, there's a, there's a quote that I love from the guy who made C++, and it's about C and C++, but I think it applies here a little bit, you know, like these server components are like really powerful new tools, but the quote is like.

[00:29:21] C++ has fewer foot guns, but when you hit one, you blow your whole leg off. And that feels a little bit like where we're at. It's like, you know, we have this powerful new tool and we're still figuring out what, you know, what, what's just like a little injury and what's like a major wound. So, you know, we're gonna, we're gonna, we're gonna, we'll take some time to settle.

[00:29:42] **Jacob Paris:** Yeah, I think Ryan Florence had a similar quote talking about the server components. He said, you know, this is a very sharp knife, and I like that, but it doesn't have a handle. I would really like a handle.

[00:29:52] **Carl Vitullo:** Haha. That's actually, I love that metaphor. That's really good. Because that's, yeah that, I feel like that touches on a lot of the complaints that I've heard about this, server components rollout over the last couple of months. I hadn't seen that quote. That's a really good one.

[00:30:05] Nice. Okay. Well, I'll, I'll move us on to our next subject.

## Bun 1.0

- [Bun 1.0](https://bun.sh/blog/bun-v1.0)
  - [My Thoughts on Bun](https://adventures.nodeland.dev/archive/my-thoughts-on-bun/)
  - [Announcing Biome](https://biomejs.dev/blog/annoucing-biome)

[00:30:08] **Carl Vitullo:** Um, Bun 1. 0 is officially released. There's so much to talk about there, I think. Bun is so many things, but I don't even know where to start.

[00:30:21] it's an all in one toolkit they're describing themselves as. there's a huge focus on performance, which is really interesting. They have, I, my favorite performance stats that they quote is they're 40 percent faster at running like 200 and something unit tests than Jest is at printing its own version number. So not even running tests, just like startup and print version number exit. Bun runs all the tests 40 percent faster than that. Um, so hilarious stat.

[00:30:52] They are claiming to replace a huge list of tools. I'm just going to read this off node, npx, dotenv, although now node has gotten rid of dotenv as well, so that's, there's one bullet point off the marketing that the marketing list they also replaced nodemon, the WS package for web sockets, node fetch, cause fetch is built in, TSC cause it's a compiler Babel, TS node, TSX, esbuild, webpack, parcel, rollup. NPM, Yarn, PMPM, Lerna, Jest, Vitest. So like that's, that's quite a claim.

[00:31:29] it reminds me a lot of the original promise and claims of Rome as a project, which is unfortunately well, Rome is no longer a thing, now Biome is a, an open source fork. But, so I'm keeping an eye on that too. But. Bun is claiming to be a drop in replacement for Node, where any existing Node application just works in Bun.

[00:31:53] I know that they also have introduced a number of non standard behaviors. One of my favorites is that they allow you to read input from the console as an iterable, so you can do like `for (input in console)`, and then within the for loop, like boom, there's your REPL, three lines of code. So like, there's a lot of really interesting things that are phenomenal developer conveniences for some specific use cases, but it's non standard.

[00:32:21] So if you write Bun code. You can't then port it, you know, just run it in a different runtime because that's non standard. It's not specified anywhere. So that seems a little fragmenting to me, but also a lot of these, a lot of the non standard improvements seem really cool. So maybe they'll get standardized. Maybe it'll be a CoffeeScript kind of situation again. Yeah, I, let me, let me hand it back to the floor. Anyone else have thoughts on Bun.

[00:32:45] **Jacob Paris:** Yeah, yeah, I'm always a little torn on when it comes to non standard features like this. I think it's super cool that Bun can do, that Bun can do all of that.

[00:32:55] They've also got their ESM and CJS interop, so you can have CommonJS imports, with the require syntax, and ESM imports with the import syntax, all in the same file. And you know that that's fantastic for developers who no longer need to worry about this. But then you look at a larger ecosystem, yeah, any, any libraries built on this they're only going to work with Bun.

[00:33:17] They won't work on Node and everything else. And that's, that's, it's been a quite a contentious point in the, sort of library ecosystem. Like, it's, you know, it's nice to have these for developers, but is this going to really fragment the ecosystem? Are we going to end up with a bunch of Bun only libraries?

[00:33:35] **Carl Vitullo:** Yeah, sure. I, I also, I, I read a a, a blog post from one of the node core team members. Just his thoughts on Bun. I thought it was really interesting. This was just sort of a, it was a very grounded take in comparing node versus Bun, and like it has, why is Bun faster than Node.js? And the first item on it is Node. js has no budget and a tiny team maintains NPM.

[00:33:59] So it's like, they're just talking about very much about the practicalities, not just the code reasons. And yeah, I mean, like, so Buns, Bun 1. 0 announces it as like a drop in replacement for Node. js. This you know, other blog post from a core, a Node core member says Bun does not currently support Fastify.

[00:34:20] Which is a reasonably popular competitor to express. So like, yeah, I mean, if you're not supporting like one of the top five HTTP servers, then like advertising it as a drop in replacement seems maybe a little bit overstating it. so I don't know, there's still, still a little bit of, a little bit more improvements that I'm going to be keeping an eye on.

[00:34:40] But honestly, one of the most exciting things for me about Bun is, or rather, something about Bund that fixes a problem I've heard about for so many years now at this point is Node. js slow startup time. You know, like exactly, I mentioned before that it talks about running tests faster than Jest prints its own version.

[00:35:01] A lot of that is, it's runtime overhead. You know, it's like the, because of how modules are parsed and, you know, executed. there's a very long startup time. So seeing that improve substantially, I think is going to be, you know, maybe that's not going to be like world changing, but I think it will be a pretty significant difference for people who are authoring CLI tools with JavaScript.

[00:35:25] So, you know, hopefully, I'm excited to see what happens with that. Now that somebody has thrown on the gauntlet of like, this is how fast it can be. I'm interested to see where it goes.

[00:35:34] **Jacob Paris:** Yeah, yeah, I'm super excited about that as well, and especially since, um, you know, there's some comments in here saying, you know, Node isn't going away, Node isn't going away everywhere, maybe, maybe that's just the key to this, Node isn't going away, library authors are still going to have to support Node and maybe that's why the ecosystem won't fragment, developers can move on to Bun and Node Library authors are still going to have to produce compatible code in either ESM or CJS, just because some developers.

[00:36:05] The big companies and so on are still going to be using node for at least the foreseeable future. Maybe that's the best of both worlds.

[00:36:13] **Sebastien Lorber:** And I think, if you want to try it now, maybe the good idea is to start by, using it in consumer code. So not, in, libraries, but just, for example, if you want you locally to run tests. Instead of using Node. js plus Jest, you can, you can try Bun, for example. There's not a lot of risk doing so. Eventually, you can ship it to your GitHub Actions or something like that. I don't know if it runs in, in GitHub Actions, but I assume it does. But yeah, yeah, maybe shipping it to production is a bit risky today, but, for example, running, a Bun install or something like that is not super risky.

[00:36:52] So maybe we should start by doing this and see how stable it is. And yeah, I don't remember what I wanted to say. So.

[00:37:00] **Carl Vitullo:** That's okay. Sometimes we trail off.

[00:37:03] **Jacob Paris:** Maybe part of the issue here when it comes to, you know, Can we use Bun in production is just, since Bun is so many different things what does it actually mean to use it in production?

[00:37:13] I mean, yeah, you can use it for your tests, you can use it as a package manager, you can use it as a, as a host to actually run your app as a server. Um, maybe that one is the most risky one that we shouldn't be doing, but, you know, if, if it's just installs by so much, um, maybe, maybe that's okay. Maybe that can be the entry point here where we, where we start using this.

[00:37:35] **Sebastien Lorber:** The problem is that there is not a good Windows support, so if you start using Bun to do this kind of things, the thing is if you have someone on Windows in your team, then it becomes a problem for them because, you know, if you use Bun and it works for you, and they use YARN and it doesn't work because the log file is not the same, then this becomes somehow a big mess.

[00:38:00] ' cause you don't have the same dependencies. So, I don't know, on, on my side. I think for example, as Docusaurus is a static side generator, I'm not afraid, for example, to recommend to use Bun to eventually, build the site with, with Bun. Because once it's built in the CI you just have static files. So it's not really risky once you have succeeded, building the site. But, yeah, for several run time, I, I would wait a bit before deploying that to, to any cloud.

[00:38:30] **Carl Vitullo:** Yeah, yeah. One other thing I wanted to bring into the conversation is Bun is a VC funded company, which I was just talking about this last night a little bit with some other React ecosystem buddies and it was brought up, you know, like the runtime companies have not historically done very well. You know, you, you, you think about who maintains JavaScript runtimes. And it's like, you know, five years ago, that was Google, Apple and Microsoft. And now it's just Google and Apple. So trying to start a brand new startup on the basis of, here's a runtime, it's a challenge.

[00:39:09] as far as I understand, Bunn is coming at it the same way Vercel is as a hosting platform. They're saying, here's our cloud offering, use it. But I, I'm not sure that that is a strong enough differentiator because like, what's it's an open source project. Like what's the stop every other hosting provider from using that, you know, just offering it as a runtime.

[00:39:29] So I don't know. I don't know exactly what that means. Um, I think that Bun as a runtime is really interesting. I'm not sure that Bun as a cloud platform distinct from Vercel, AWS, GCP, all of those. But yeah, we'll see. We'll see how that all shakes out. if nothing else, we've got a really cool project putting pressure on everyone to improve.

[00:39:55] **Jacob Paris:** Yeah, it's, it's sort of a catch 22 situation here. Like either, either all the web hosts as they exist right now, they start to support Bun, and then you can use Bun in all your applications everywhere and Bun goes popular, and if that happens, now there's all this competition for Bun as a hosting platform or, or it just doesn't happen.

[00:40:15] You, your Bun app can't actually run anywhere, and then not enough people are using Bun to justify having it as a, as its own hosting platform. So, I'm a little, little iffy on the business model there, but I, I often, in these situations, I just assume that the people who have, Given, you know, sort of devoted their livelihoods to building these companies no more than I do after reading a bunch of tweets and articles about it.

[00:40:41] **Carl Vitullo:** At the very least they've thought about it a lot more than I have. So, well, interested to see what they come up with. And, man, what an oversight, I meant to talk about Deno as well I don't want to, we're trying to wrap it up so I'm not going to bring it up too much, but between like Bun, Deno, Biome, there's a lot of really interesting like all-in-one type, runtimes and packages and all that kind of stuff, really interesting.

[00:41:07] But yeah Jacob, you want to take us on to our, our next link?

## Next.js Forms and Mututations

- [Next.js App Router - Forms and Mutations docs](https://nextjs.org/docs/app/building-your-application/data-fetching/forms-and-mutations)

[00:41:10] **Jacob Paris:** Yeah, yeah. So the next one for me is, um, sort of the announcement of the next, you know, the next stage of the next JS app router with their forms and mutations. So they just pushed out all the new, all the new docs on that and, Lee put out this excellent video running through you know, sort of the concepts of how these, how these server actions actually work.

[00:41:33] Which has been again, similar to Josh's article from before. I think it answers a lot of questions that people had. So, yeah, it starts off covering you know, the, the traditional way that we're submitting forms in a React app. Where you, you, you have a form, and then in your on submit callback, you prevent default to stop it from automatically reloading the page.

[00:41:55] You send your data to an API route, and then whatever data comes back, you have to deal with yourself in that callback. And, you know, whether that's writing it to state or performing some other actions, and, you know, for a long time, if you're working with a separate backend server, that would mean going to another repository.

[00:42:13] You you need to build a new endpoint there. You, if you're dealing with, say, TypeScript at all, you don't have to manage that in two separate repositories, and then you end up with two separate repositories. Pull requests and, those have to be merged and deployed all at the same time, which makes testing a nightmare.

[00:42:30] You know, I'm sort of glad we moved away that with Next.Js. You just define the API routes in your react app, in another file and the on submit callback use fetch to send data to that. So that, that's kind of the state of where everything was. was right now.

[00:42:45] I, I do think Remix took that a little step further. So rather than having the API route in a separate file, it then, it moves into the same file. It's just an action in the same file. And rather than having to write this whole on submit thing Remix's form components will do that, all of that for you, which I think is, you know, one step up from where, where Next was.

[00:43:03] But now, like Next has taken a huge step forward with these server actions. We have this whole progression, I guess, that the, that the ecosystem has gone through where it's less and less code every single time so rather than having, you know, two repositories, now we're down to one, and then now it's all into the same file, and we're, we're sort of co locating all the code together, so you get this really concentrated sort of, sort of concerns here, and the React server actions are the next step in this process.

[00:43:33] Rather than having all your data fetching being co located to a particular route is that now we can move them into a single component for the form element that has the traditionally would have an action that links to a particular endpoint, you can just pass a function to it now with the next server actions and Next will do all the work of triggering that like a remote procedure call returning the data to a form action and form data hooks to deal with the, to deal with the results of it.

[00:44:02] It's, it's really, it's the other half of the client components that I was talking about earlier for, for data fetching. now finally for the first time in next existence, they have a proper data mutation story. They're acknowledging that they're, you know, in an application you're going to need to, you know, modify data on the database, you're going to need to save things and deal with the results of that.

[00:44:26] So rather than using something like, say, React Query or tRPC, which are sort of, you know, historical solutions there, is that these server actions are really, really good. Yeah, so you declare the functions on your server, you mark them as &quot;use server&quot;, and... the browser will just call them automatically.

[00:44:43] They still, they automatically degrade to browser form submissions if you're trying to submit them without JavaScript being enabled. so you get the full progressive enhancement. Yeah, I'm, I'm, I'm a big fan of this. It's it's, it's been super, super cool.

[00:44:58] **Carl Vitullo:** Definitely reminds me a lot of how Remix implemented the same thing. Although I guess Remix does it as an export from the file, whereas this is just a function within the component or as a separate file, but yeah, one thing that's catching my eye in the, in these docs, the, I do not like the use server, use client directives.

[00:45:20] I know that like the idea of introducing more directives, you know, so like directives came from the ES6 transition, use strict. So that's what they're basing these off, you know, like you opt into a new mode for the runtime. And, you know, I, I followed like TC39 JavaScript standard discussions loosely through my career.

[00:45:43] And I've seen a fair number of new directives suggested, brought up by people saying like, Hey, like, it would be really great if we could have this new mode for things to happen in and the message that has been so consistently said from the people who maintain the spec and said, like, &quot;no, we, we are never doing another directive. That was a one time thing because we needed to break, you know, we needed to have a seam where we introduce new behavior and it was not possible to do in any other way without introducing breaking changes.&quot;

[00:46:14] And so to see it go from one ever to, oh, here's two new ones. I don't, I don't, I don't like it. I don't know. It seems like a really big break from the norms that have been set by the people who introduced that pattern. and, and, and. here it is not the first, you know, statement in a file, but the first statement in a function. So it's a new behavior on something that had been, you know, introduced 10 years ago as a, you know, a necessary evil.

[00:46:46] And I know it gets stripped out. I know that it's just kind of to inform the compiler or whatever, but I don't know. Feels weird to me. I don't like it as much as the way Remix just does an export. That seems very simple to me and I like it. I guess that's what I'm saying.

[00:47:02] **Jacob Paris:** Yeah, yeah. We certainly need some way of communicating to the, um, you know, to the runtime, what sort of mode it should be in while it's processing this function.

[00:47:11] Remix handles that with just, just the naming convention. So there's certain functions that behave differently. You got your actions, your loaders, meta, headers, functions, and they're all just exported from the route. Whereas with Next, you're now using these directives to mark different behavior in, in the functions.

[00:47:29] I don't know what the better way to do that would be. A lot of that kind of is up, above my head. one, one that I don't like is that since you're declaring these... You know, if you declare these server actions in line, anything you close over in there. So it, it looks like if it were a normal function, that you can access variables from the scope above it.

[00:47:49] Um, so you define a variable and then you include it. And then now that's going to be included. Um, like it's, it's really confusing how that happens with the server bundle. If you have a client component in there, you could very easily end up introducing a bunch of, say private keys. If it is So you have a, like an API key in the upper scope and you're referencing something from, from that class or object within your action, because it looks like you can, that can really easily end up in the, in, in the client. yeah, it's, it's, it's, it's another foot gun where we're having more and more foot guns to worry about with all of this.

[00:48:25] **Carl Vitullo:** So Sebastian, you want to take us off for our next link?

[00:48:28] **Sebastien Lorber:** Actually, it's only my second link, I think. And yeah, it's a big one, so I should have started by, by this one, I think. Haha.

[00:48:37] **Carl Vitullo:** A lot of news this month.

[00:48:38] **Sebastien Lorber:** Yeah, exactly.

## Expo API Routes

- [Expo Router RFC - API Routes](https://blog.expo.dev/rfc-api-routes-cce5a3b9f25d)

[00:48:40] **Sebastien Lorber:** Even this summer was quite busy, I think. So it's about, Expo API routes, RFC. So I think it's very interesting because, I think it's the first time that Expo is, going, on the server side. So this is, somehow not a very complicated feature. It's just about deploying API routes creating a convention to deploy API routes to a server, or creating a server runtime that you get, can deploy yourself or eventually on, on hosts like Vercel, Netlify, and maybe soon, the Expo APIs.

[00:49:16] But what is very interesting, I think is because, you know, it's the very first step toward becoming a full stack framework where you can actually have a universal support for, the web and mobile using server side rendering on the web, so no compromise compared to the other frameworks. And also to support React Server Components in a cross platform way.

[00:49:41] So you will be able to use the exact same code to render UI on mobile and on the web. And somehow, I think this is very exciting because, you know, currently if you want to build a web application, you don't think you will use Expo because the support of Expo web works, but it's not good enough to be able to bet on Expo just to ship a mobile app.

[00:50:05] Maybe in the future, if they implement this well, you could even. Decide to use Expo, even if you don't target mobile, I think. So this, this could be very exciting to to have Expo being, becoming a real competitor to other frameworks on the web.

[00:50:23] **Carl Vitullo:** Yeah. Oh, that's interesting, this builds so well off what we were just talking about with the server actions. So

[00:50:28] that works out really great, great flow into a great transition. Yeah, oh, that's really interesting. So I know that Expo has been broadly moving towards not being as tightly coupled to React Native, but I didn't realize that they were. Even interested in doing some kind of server route like this.

[00:50:50] This is, yeah, this is really cool. This definitely unlocks a lot of possibilities.

[00:50:55] **Jacob Paris:** Yeah, I'm, I, I'm super like, I'm all for it. Any time where we can take the separate backends and frontends and move them into a single repository so that they can share you know, share types and you can develop, you know, push code a single, a single pull request to implement entire features all at once.

[00:51:13] I, I'm all for that. So. It's, it seems here that Expo is now kind of going the way of Next or Remix, where you, where you can kind of, it just becomes a full stack framework all on its own. And as far as I know, up until now, that, that just wasn't possible in the React Native ecosystem. You always needed a separate backend server somewhere in order to handle that.

[00:51:33] **Carl Vitullo:** Yeah, I'm definitely a little unsure because like Next and Remix, I understand, you know, you put it on a server and boom, there's your server. I don't really know what the deployment story for Expo is going to look like for these server actions. I'm scanning the blog post here, trying to find that, not seeing it immediately.

[00:51:55] **Sebastien Lorber:** It's not server actions, they are not really, shipping, something advanced. So for now, it's just API routes like you have in Next. js too. So you just create an API endpoint that you can call on mobile. And I think the, the idea that we, they want to implement is first to enable you to self host the backend.

[00:52:16] And then eventually the idea is that you just push to Expo cloud and then have the thing being served from their cloud like like if it was their server or Netlify so and you know for example they could be systems like we don't deploy we don't push the mobile update until the backend is deployed or things like that you have to synchronize things because uh mobile is long lived session, so you have to make sure that, the, the API that you deploy is compatible with the mobile side. And I think Explore has an opportunity to build something, that handles that well.

[00:52:54] Vercel actually, built something similar, that they called Skew Protections. So, somehow if you, you know, if you have a trading application and you deploy a new version, The, the traders that use the, the former application still they don't want to refresh the browser to, to be able to keep using the app.

[00:53:14] They want to just keep their long running session and keep interacting with the API. So it's important that the API doesn't break when you deploy new software and, for mobile, it's even more important. And I think, Expo Cloud has a card to play there.

[00:53:27] **Carl Vitullo:** Yeah, interesting. Yeah, my first thought was like, Oh, another cloud provider, but that's actually interesting because there are genuinely different constraints for mobile versus web, because that's honestly one of the biggest differences I've noticed in my career between it is the experience of shipping new changes.

[00:53:47] Like on a website, you know, I, I push out, I do CICD, boom, done, it's live unless there's a cache, unless I have set up a cache with, you know, a TTL that's long enough to introduce problems for that. I know that as soon as I hit that deploy button, my code is running for everyone. Maybe the service I'm working with has like a red green deployment. And so there's a gradual rollout where they're both going to be happening.

[00:54:12] But like at the end of that, the code that everyone is hitting is. The code that was just deployed, whereas on mobile, you don't control that at all. People update the app whenever they want to, and maybe they don't for two years.

[00:54:24] So that actually is really interesting. If I could co locate app specific API calls, have them deployed through some kind of managed service, and then. Had that cloud provider do the version management for me to make sure that they, you know, APIs from this version of the app are served by a compatible route handler.

[00:54:50] Like, that's actually really interesting. That's pretty slick. That's pretty cool. So I think that they're introducing a new package, Expo Server, which you then need to deploy yourself. It looks like right now. I think that's what you were just saying. So, yeah, that's really interesting though.

[00:55:03] Okay, should we move on to lightning round? All right.

## ⚡️ React Native on Apple Vision Pro

- [React-Native running natively on Apple Vision Pro simulator demo](https://twitter.com/o_kwasniewski/status/1701626162521190688)

[00:55:06] **Carl Vitullo:** I guess first lightning round, I'll pull up, I'll just keep the React Native theme going React Native running natively on Apple Vision Pro simulator demo. That's cool. I don't have much else to say about that, but you know, AR VR with React in a 3d environment is like, that's pretty cool.

[00:55:25] I like it. Jacob, you got a lightning round you like?

## ⚡️ Are Big Projects Ditching TypeScript? (no)

- [Are Big Projects Ditching TypeScript?](https://www.totaltypescript.com/are-big-projects-ditching-typescript)

[00:55:28] **Jacob Paris:** Yeah, yeah, we got this once. &quot;Are Big Projects Ditching TypeScript?&quot; was, written up by Matt Pocock after DHH did his little let's remove all the types from Turbo thing. the consensus is no, most of them aren't. Svelte has switched to JSDoc, um, a few others in that line but no, TypeScript is here to stay.

[00:55:47] **Carl Vitullo:** Yeah, ugh, I'm glad to see that was the outcome. DHH has, I've soured on him a little bit. Sorry, this is lightning round. We're not doing a full discussion.

## ⚡️ Rust Server Components

- [Rust Server Components](https://anto.pt/articles/rust-server-components)

[00:55:56] **Carl Vitullo:** Oh yeah, I saw an interesting Rust server components post. Which is just interesting. The crossover between web and Rust is fascinating to me a little bit. And so now seeing somebody trying to do Server components, a like very fraught and complicated technology in rust. Interesting.

[00:56:17] **Sebastien Lorber:** I wanted to mention something about the post rust server components. So this is more about using a rust backend with HTMX.

[00:56:26] But there was recently an , an article from someone from the ReasonML community that I found super interesting because, they implemented React server side rendering in OCaml, in ReasonML, I think, or OCaml.

[00:56:41] This led to very improved, performance in the benchmark. And I think now, the guy working on this is is now implementing server components in OCaml. So somehow, instead of running JavaScript in the... In the server runtime, they're running, a native language and, apparently it's really much faster.

[00:57:04] And I find this quite interesting because maybe some day, there will be a faster runtime. maybe we can compile server components to native code on the server and, and run them much faster. But, I found this idea quite interesting to use something else than JavaScript to run, the React server side code.

[00:57:26] **Jacob Paris:** Oh, interesting.

## ⚡️ CSS-in-JS is Ruining Your Product

- [Web Developers, CSS-in-JS is Ruining Your Product](https://cord.com/blog/migrating-from-css-in-js-to-vanilla-extract)

[00:57:27] **Jacob Paris:** Here's a link from from, from Cords and, web developers, CS and JS for your product. Was that, was it was a neat a little article and sums up a lot of my, my thoughts here as well basically CSS and JS, so you can't generate the styles until your whole application has been rendered.

[00:57:44] So you miss out on anything like React streaming. It has to render the whole thing. Styles and then inject them back into the app. There are some, you know, some solutions that are trying to fix issues like that'll extract using compile time extraction.

[00:57:58] But in general, CSS and JS has kind of fallen out of fashion. And it seems like industry is sort of moving off and away from that.

[00:58:05] **Carl Vitullo:** Yeah, interesting. We're 10 minutes over. We should probably, we could probably keep doing links forever. I, there's one more thing that I want to pop out then maybe we should call it after that.

## ⚡️ Dan Abramov joins BlueSky

- [Dan Abramov joins Bluesky](https://twitter.com/dan_abramov/status/1695566446007386214)

[00:58:14] **Carl Vitullo:** But Dan Abramov is now a product engineer, no longer purely library maintainer on the backs, you know, behind the curtain of web development. He's joined BlueSky as a, as a software engineer. And I think that's going to be really interesting because as far as I know, he's still going to be on the core team. So I think specifically Dan Abramov, you know, working on a product and using React as a consumer. It's going to be really interesting.

[00:58:45] I've been seeing some tweets from him coming out talking about points of friction on using React Native and all sorts of things like that. So just having seen all the different times that he has introduced something because he felt a pain point and then invented a new category of tool.

[00:59:04] I can think of redux and create react app that were both just like his brain children that he felt the pain. He made something that fixed it. And then everyone else went, I didn't know you could do that. So I'm interested to see what happens now that he's being exposed to more points of friction with more regularity.

[00:59:20] **Jacob Paris:** Yeah, and especially a shift toward React Native rather than, I guess, primarily React web which was a lot of his work before. It'll be interesting to see what that does for the native ecosystem.

[00:59:30] **Sebastien Lorber:** Yeah. Maybe Expo, won a great, developer advocate for free.

[00:59:35] **Jacob Paris:** Ha ha.

[00:59:36] **Carl Vitullo:** All right, thank you so much Sebastian and Jacob. Jacob, thank you for subbing in for Mark this week. You killed it. You did great. Thanks so much.

[00:59:43] **Jacob Paris:** Absolutely. Thanks for having me.

[00:59:44] **Carl Vitullo:** Definitely. Awesome. Thanks so much everyone in the audience for joining us and see you next month.

[00:59:50] **Sebastien Lorber:** Thank you. Bye.
