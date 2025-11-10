---
title: This Month in React (October 2023)
date: 2023-10-25
time: 10am PT / 5PM GMT
location: Main Stage on Reactiflux
description: "Join Carl Vitullo, and Mark Erikson as we break down This Month in React. We'll break down what's new in an hour-long conversation about React Forget, Canary Releases, Barrel Files, TanStack v5, Yarn v4, and a preview of RTK Query v2."
people: "[Carl Vitullo](https://twitter.com/vcarl_) and [Mark Erikson](https://twitter.com/acemarke)"
---

- [Spotify](https://open.spotify.com/episode/4xefEOVBMI7mhfOBvOPnDV?si=NKLNBgn3TqOH7HLNLAIMHw)
- [Apple Podcasts](https://podcasts.apple.com/us/podcast/tmir-2023-10-react-forget-canary-releases-barrel-files/id1661733526?i=1000633089166)
- [RSS](https://anchor.fm/s/a1f8a59c/podcast/rss)
- [or anywhere you prefer](https://podcasters.spotify.com/pod/show/reactiflux/episodes/TMiR-2023-10-React-Forget--Canary-Releases--Barrel-Files--and-new-releases-e2b7tda)

<iframe src="https://podcasters.spotify.com/pod/show/reactiflux/embed/episodes/TMiR-2023-10-React-Forget--Canary-Releases--Barrel-Files--and-new-releases-e2b7tda" height="102px" width="400px" frameborder="0" scrolling="no"></iframe>

- [00:00] Introduction by Carl Vitullo and Mark Erikson
- [01:04] React Forget and memoization ([02:00] Optimizing performance, [02:35] Used in production at Facebook)
- [03:52] React Server Actions in canary release ([04:09] Versioning policy)
- [05:40] TanStack Query v5 release ([06:02] New features, [06:13] Deferring changes for Redux Toolkit Query)
- [07:42] Barrel files and performance ([08:47] Avoid for build performance)
- [09:13] React useTransition for concurrent rendering
- [10:37] Photoshop on the web ([11:07] Collaboration between Chrome and Adobe)
- [12:42] Yarn v4 release ([13:31] Per-project installs, [14:38] Performance improvements)
- [15:19] HTTP QUERY verb proposal ([16:05] Standardization for query APIs)
- [17:01] TC39 group for standardizing source maps ([18:31] Improve debugging)
- [19:00] Parcel performance improvements ([20:16] Data structure optimizations)
- [21:04] Replay DevTools time travel talk by Mark at React Advanced ([22:17] Peeking inside React internals)

In summary, this month focused on performance optimizations like React Forget and query API standardization, as well as releases like TanStack Query v5 and Yarn v4. Mark also discussed his React DevTools talk diving into time travel and hacking React internals.

- Mark: React Forget and memoization:
  - Sathya, React India: [Statically analysing React components for fun and profit](https://www.youtube.com/watch?v=kjOacmVsLSE)
  - Joe and Mofei, React Advanced: [Understanding Idiomatic React](https://www.youtube.com/live/tUqY9CP38uE?si=lQTtR0ZUklVhe4it&t=5364)
  - TkDodo: [The Uphill Battle of Memoization](https://tkdodo.eu/blog/the-uphill-battle-of-memoization)
  - Response: [React memo is good actually](https://timtech.blog/posts/react-memo-is-good-actually/)
- Carl: [Server Actions in canary](https://github.com/facebook/react/blob/main/CHANGELOG-canary.md#october-5-2023-1830-canary-546178f91-20231005)
  - [Version policy](https://react.dev/community/versioning-policy#canary-channel)
  - [Client Actions](https://codesandbox.io/s/react-client-actions-l5729f?file=/App.js)
- Mark: [TanStack Query v5](https://tanstack.com/blog/announcing-tanstack-query-v5)
  - RTK 2.0: we’re deferring all RTKQ changes until _after_ 2.0!
- Carl: Barrel Files
  - [Vercel - How we optimized package imports in Next.js](https://vercel.com/blog/how-we-optimized-package-imports-in-next-js)
  - [Speeding up the JavaScript ecosystem - The barrel file debacle](https://marvinh.dev/blog/speeding-up-javascript-ecosystem-part-7/)
- Mark: [React useTransition: performance game changer or...?](https://www.developerway.com/posts/use-transition)
- Lightning round ⚡️
  - Carl: [Photoshop is now on the web!](https://medium.com/@addyosmani/photoshop-is-now-on-the-web-38d70954365a)
  - Mark: [Yarn 4.0](https://yarnpkg.com/blog/release/4.0)
    - [HN](https://news.ycombinator.com/item?id=37985779)
  - Carl: [HTTP QUERY verb](https://httpwg.org/http-extensions/draft-ietf-httpbis-safe-method-w-body.html)
  - Mark: [TC39-TG4 - New Task Group created to standardize Source Maps](https://www.ecma-international.org/news/ecma-tc39-ecmascript-initiates-a-new-task-group-to-standardize-source-maps//)
    - Actual working group: [https://github.com/tc39/source-map-rfc](https://github.com/tc39/source-map-rfc)
    - Example: a proposal for tracking scopes data from my Replay coworker Holger Benl: [https://github.com/tc39/source-map-rfc/pull/53/files](https://github.com/tc39/source-map-rfc/pull/53/files)
    - My own React Sourcemaps package: [https://github.com/markerikson/react-prod-sourcemaps](https://github.com/markerikson/react-prod-sourcemaps)
  - Carl:
    - ~~[Astro 3.2 - View Transitions improvements](https://astro.build/blog/astro-320/)~~
    - [7x perf improvement to Parcel bundling](https://vxtwitter.com/devongovett/status/1712169214872867288)
    - [Neat SIMD/Rust function](https://twitter.com/devongovett/status/1712169225786446111)
  - Mark: [My React Advanced talk: Building Better React DeTools with Replay Time Travel](https://blog.isquaredsoftware.com/2023/10/presentations-react-devtools-replay/)\*\*

[00:00] **Carl Vitullo:** Everyone, thank you for joining us for October's This Month in React. We have a solid amount of news this month. Excited to talk through it with y'all. Some news before we get going. Sebastian Lorber, our past co host and author of the This Week in React newsletter, Is not going to be joining us as a regular co host anymore.

[00:19] He is he's a new father. He just had a kid, so he is taking some well deserved time to be a new dad. He's also gonna be taking a break from the newsletter and he'll show up now and again as a guest, but he's not gonna be showing up every month like Mark and I will be and community news. We the star helper committee is finishing up evaluation for Q three.

[00:42] So we should have some new star helpers. Ready to go in a couple of days here. Thank you so much for joining us for this month in react, where we recap and digest recent developments in the ever evolving react and web ecosystem. I'm Carl Vitullo. I'm a staff product developer and freelance community leader here at reactive flux, the discord for react professionals.

[01:00] And I'm sure everyone knows Mark, but Mark, can you introduce yourself?

[01:04] **Mark Erikson:** Hi, I'm Mark Erickson. I maintain the Redux family of libraries. My day job is working at Replay. io, where we're building a true time traveling debugger for JavaScript applications. And I sort of stick my head in anywhere there's a text box on the internet.

[01:20] **Carl Vitullo:** That is entirely too true. Cool, you want to take us off on our first link?

[01:25] **Mark Erikson:** Two years ago, at the online React conf, the React team announced an early work in progress React optimization compiler, codenamed React Forget, and they had a video demo, and the idea was that this compiler could automatically rewrite the logic in your React components.

[01:48] To do a few different things. One was to replace the need to stick use memo and use callback everywhere. And another is that by actually memoizing the JSX elements that your component returns, it could actually optimize the rendering and performance behavior of the application, but they'd been kind of quiet about it.

[02:10] And they gave a brief update back in a React Lab blog post back in March, where they said, you know, we're working on it, we're doing testing internally at Facebook, there's still a lot of work left to do. I've been keeping an eye on this, and kind of like stalking the folks who are working on this compiler anytime they pop up on Twitter and happen to say anything about it.

[02:35] The good news is, That the React Forget compiler team has popped up and actually given a couple conference talks in the last couple weeks. And they've given us a lot of updates and new information about the status of this compiler. So the first one is that Satya gave a talk at React India, where he kind of laid out what are, what are some of the problems?

[02:59] What does the compiler try to do? Um, gave some examples of cases where really hard situations where maybe you reassign a variable to a different name. And then the compiler has to figure out that these two things are actually the same and how does it try to deal with that? And that was kind of a high level look at what the forget compiler does.

[03:20] But the one that I was really, really waiting for was actually just this week at react advanced. Uh, Joe Savona and Mo Fei Zhang gave a talk entitled, uh, Understanding Idiomatic React. And part of the idea here is that, if your components are correctly written, and follow the, the rules of React, In terms of being pure or not having side effects and that sort of thing, the compiler can make some good assumptions about how to actually rewrite the code inside of there.

[03:52] They, they showed kind of a demo of a playground that they use internally where the compiler will rewrite the logic and it shows what the transform code looks like. And they also gave a status update. And some details. So they said that it's actually being used in production in two different applications.

[04:12] One is the Quest VR goggle store for React Native. And the other is Instagram for web's profile page. And what they said is that in both cases they, they sort of expected that, you know, we're probably going to run into a lot of problems. And I think that in both cases, the code basically just worked and there were some modest performance increases out of the box in terms of initial mount time and re render time.

[04:45] So at the moment, it sounds as if the compiler handles, I think they said like. 95 percent of JavaScript syntax and they've tested it against thousands of different components internally at Facebook. So at this point, they're, they're pretty confident that what they've built works. There is a lot more polish left to do, aren't going to open source it until they are confident it's ready for public usage and they have the bandwidth to offer support for doing it.

[05:20] But I, I've been very tentatively hopeful for like the last couple of years that this is an effort that would actually work out. And after hearing the talk and I actually was sitting next to Mophie at dinner at the conference on Wednesday and was asking her a lot of questions about like, how does this work?

[05:37] What's the status? I am actually very, very excited about this. I honestly think this will have a bigger impact on the react ecosystem in a lot of ways, then react server components will, I mean, they, they solve different problems. They're both useful, but I think this will actually, this is actually a very, very big deal.

[05:58] And then finally, you're related to that. Uh, there were two different articles that came out, uh, kind of back to back with each other. They were actually kind of arguing about how often should you use. The use memo and use callback hooks and some discussion of are you using optimizations in the components?

[06:19] Are you using them just in case a child component might worry about trying to optimize its rendering behavior? And there's a lot of very, very good points being made in both of these articles. But part of my takeaway here is that in a hypothetically perfect future world. The react for that compiler could eliminate the need for us as application developers to even have to worry about that sort of thing because it will all just magically happen and it's good.

[06:51] **Carl Vitullo:** I do like that. One of these conference talks was talking about idiomatic react. I feel like that has always been, you know, through my career, I feel like in all of the different workplaces I've worked at, I felt that I have worked towards a better understanding of what is meant to be idiomatic, like not just What do I enjoy using?

[07:10] What, you know, how do I understand it? But like, how did the original authors intend for this to be used? So seeing a talk about those idioms, about what, you know, how the tool is meant to be used in this context of this compiler that is supposed to make many of those ideas work better or more easily, I feel like it really ties together.

[07:32] Here's why we built it this way. And here's why we recommend these things that are not always Easy or convenient or, you know, transparently improvements. So, uh, I, I like that a lot. I have, I haven't watched this talk. Um, I'm not super familiar with react forget and it's, you know, development and capabilities, but, uh, just purely on, you know, the, the name of the talk.

[07:57] I, I, I love that. I think that's a really good framing.

[08:00] **Mark Erikson:** Conceptually, what happens is that it's a compiler, it knows how to parse your own JavaScript source code and all the arbitrary JavaScript logic you have in your component. Declaring variables, mapping over arrays, conditional logic, use memo, use callback, whatever.

[08:18] It's a compiler. It automatically transforms patterns A, B, and C. Into patterns X, Y, and Z. And so it can do the automatically memoizing you're like automatically handling dependencies for use memo or something like that. But the, in terms of like the, the rendering performance wins, most of us have heard about the react.

[08:42] memo API that you wrap around a component. to keep it from re rendering when the props haven't changed. But there is a little known built in React optimization where if your component keeps around a JSX element reference like, you know, the return of angle bracket div or angle bracket my component And it returns that same element object the next time it renders.

[09:11] React sees that and says, Oh, you're like, you're literally, literally asking for the same thing as last time. I'm just going to skip over that. And it's a little bit like the parent component controlling the memoization of that subtree rather than the child component needing to be wrapped in react. memo to control it.

[09:31] And this has been in React for years, um, even like the first versions of React Redux relied on that optimization approach. And so, part of what the React Forget compiler can do is rewrite all the logic in your component so that it memoizes pieces of your JSX output so that those element objects only get recalculated when the data they need changes.

[09:56] And thus, the automatic rendering optimizations kick in. We can debate whether this is, you know, a, a better approach conceptually, then I don't know, signals and observables and, you know, the various other performance improvements that are being used in the ecosystem today. One nice thing is that this is a build step.

[10:16] So you don't actually have to change any of your code in theory to get the advancements. I don't have a good grasp on exactly how much it slows down the build step. I think Moffay said something like 3, 000 components was taking maybe like a couple minutes? Something like that?

[10:35] **Carl Vitullo:** That's not short. That's interesting though.

[10:37] I where I'm picturing this being beneficial. I can think of many, many times when I have written use memo, you know, use callback optimizations because I want to hint to react that like these are stable references. I know that, you know, by by doing this whole chain all the way up from like the inside of this hook to a component to the transformation being done on that data to where it's being passed in.

[11:04] Thank you. If I want the best possible performance, I need to be intentional about when those references change. And so it sounds like this compiler is trying to do that same kind of logic where I would do it manually, you know, take it in my head and then write it all out. Which often I have found myself backed into a corner where it's like, oh shit, if I want to fix this reference, I need to totally fix all of the other logic around this because I have conceptualized the problem incorrectly.

[11:32] So something I've said about hooks in the past is a lot of the time it has felt more like solving a puzzle. It's like, there is a right way to mod, there's a right way to model this problem. And I end up going down like three dead ends before it's like, ah, here's the one where all the references are stable and all the state is correctly modeled, which is difficult.

[11:56] It takes a lot of work. It takes a lot of time and takes a lot of thought. And then sometimes there's a new requirements like, oh, shit, I can't just casually add this because I spent all this time modeling to a different problem. And now the problem has changed. So that has been a recurring pain point of mine in developing with hooks.

[12:14] So. A compiler that gets me 80 percent of the performance benefit of doing it perfectly without many reworks and, you know, deep problem solving. Sounds pretty great.

[12:27] **Mark Erikson:** Yeah, like it's not going to magically fix every single performance issue or problem with your react code, but if it offloads a lot of the mental overhead that we have trying to think through some of those issues, that alone is a really big deal.

[12:42] Yeah,

[12:42] **Carl Vitullo:** most definitely. Onto our next one, I'm very excited because this is, we've got a new canary out, server actions are now in canary. So this is, server actions came out in next recently. I think we talked about it last month or maybe a month before and yeah, now they're officially in the like react canary channel.

[13:04] More of what I wanted to discuss here is sort of the canary release process. Yeah, yeah. So in announcing this, they linked to their. versioning policy specifically saying, like, look, this is how you use canaries. Uh, and the big thing that it said is canaries must be pinned. So it says if you are using a canary channel, you need to use the, this exact version, not a, not a pseudo matcher.

[13:31] They do not follow SemVer. If you don't want unpredictable breaks, you have to actually pin to an exact version. That seems great. I'm glad to get clarity. I'm glad that they have put out this versioning policy with explicit recommendations like that. This is not a new policy. I think it came out a couple months ago,

[13:49] **Mark Erikson:** came out back in March ish, but we're sort of just now starting to see the first working examples of it.

[13:55] **Carl Vitullo:** Yeah, so I guess, you know, March, they like got all these policies in place and then have been sort of working with next and doing development work. And it feels like now they've kind of turned back and are doing more messaging kind of stuff like this. You know, they announced a new feature and said, here's how to use it.

[14:09] Here's supporting documentation about how we think about it. I appreciate that. That's very helpful. Very

[14:15] **Mark Erikson:** clarifying. And this, this is unfortunately a topic I'm far too familiar with both as a, as a, as a library maintainer and then looking at react specifically. So I think most people are sort of used to the concept of libraries might put out an alpha release, a beta release, a release candidate, and then finally an actual stable release.

[14:38] And we've, we've seen that even before with react, you know, like react, 18 went through betas and release candidates before it went stable. And then they put out 18, one and 18, two with some fixes and react 18, two, the current stable release came out almost a year and a half ago. And meanwhile, next has been.

[15:00] Releasing new features. They've got some of the React core team members working over there, and there's been a lot of confusion over like, what is in the versions of React that Next is using? How can other frameworks actually use any of these things? For the last several years, React has had, uh, so there's both like the stable releases, and they also have an experimental channel, which is just automatically built like every day, every couple days.

[15:29] So it's like straight off the tip of the main branch, whatever got merged in. And those experimental builds also have feature flags turned on so that like literally everything brand new that's in the React repo that isn't even like fully enabled yet is enabled in the experimental builds. But those could always change on a moment to moment basis.

[15:50] So with next at the moment, you, I think you can actually end up with like three separate versions of react going because there's the production version. You probably specified in your own package, Jason. And I think that gets used with like the pages router. There's the canary version, which is a new semi react specific concept where it's like, this is semi stable.

[16:14] It's maybe not like done, done. Maybe we're waiting on some other pieces, but we kind of think it's stable enough to use, and then there's the experimental version where, you know, there there's truly stuff that's, it's kind of wild. And so in next, I think if you use the app router. It's using a canary build.

[16:32] I think a couple other experimental features you can opt into, in which case it uses an experimental build. And, you know, the idea of these canaries is that the React team maybe has some features that are in, that are in progress. At this point, they think they're stable enough that frameworks could use them because frameworks could add additional wrapping on top to kind of like hide the rough edges.

[16:59] There's maybe a couple pieces that are still like waiting to tie into those before they can declare them fully, fully done and ready for a stable release. And unfortunately, up until now, there hadn't been any indication of Here's what canary versions have been released, or here's what features are included in a given canary release.

[17:20] And just within the last week, uh, one of the react dev rels, Matt Carroll actually added a change log for the canaries as a markdown file in the react repo. So that's a step in the right direction.

[17:34] **Carl Vitullo:** Yeah, I was, you know, I was just sort of thinking about, you know, versioning and releases and okay, so there's released versions of react.

[17:42] There's canary and then there's experimental. So that's, you know, the MPM releases the release channels. But then there's also they have apis, right? They have the unstable underscore whatever apis. As well as some that are not even available because they're feature flagged out of the build out of the you know what the code that goes on NPM and I was just I'm just thinking about it's like wow wait so there's like six different ways of controlling how people what features are available and how people are able to make use of them and that's complicated like what a dance you have to do I

[18:20] **Mark Erikson:** have unfortunately messed with some of reacts build system for something else and I've seen The code that controls, like, here's the master list of all the packages that are in the mono repo.

[18:31] Here's all the different kinds of build artifacts that need to get generated for each package. Here's some of the feature flags that control individual features. Like it is really complex.

[18:43] **Carl Vitullo:** I had read a line in the Canary Diversion Policy that I was hoping to find so I could quote it exactly. They talked about how part of the reason they do this complicated dance is because they have multiple projects that are all interrelated.

[19:00] And so, you know, people say like, Oh, well, why don't you just release this, this feature while you're working on that feature? And the answer is, well, we can't release that until we release both. And people want access to that before both of them are ready to be released. And so we do this complicated dance in order to facilitate that.

[19:18] And it's a lot of work that they put into. Structuring and communicating these releases, I knew all of these pieces, but I hadn't quite put them together into like, wait, this is a lot to manage to keep in your head. Mark, take

[19:34] **Mark Erikson:** us on our next link. The next item is that 10 stack query version five is out.

[19:40] Um, this of course includes the react adapters, like react query, as well as the adapters for the other frameworks. They've got some breaking changes. I know they changed things like removing callbacks from the mutation hooks. They've apparently altered some of the, the way you pass in options for the query hooks to try to make that more consistent.

[20:02] Uh, there is a number of new features around, um, how you define optimistic updates. Uh, there is suspense support built in. They have a react server components, streaming adapter, and some infinite queries and dev tools. Uh, and it sounds like they even managed to shrink the bundle size. So that sounds like a very impressive release.

[20:23] Definitely worth checking out. And I will say that wearing my Redux maintainer hat, we're getting close to the release of art Redux toolkit 2. 0, I hope. And part of that was actually cutting scope so that we don't, we are not going to make any real changes to our, to our RTK query data fetching API for 2.

[20:41] 0. Because there's lots and lots of requests for changes. So we're going to defer any changes until RTK 2. 0 is out the door. And once we do, we will be looking very carefully at. React query and looking at some of their APIs and how they designed some of the use cases and frankly blatantly stealing from them, which is good because it means familiarity.

[21:04] And also they've had more time to think about some of these problems than we have. And also we're friends with the maintainers. So we, we cross inspire each other all the time. It's

[21:13] **Carl Vitullo:** not stealing it's standing on the shoulders of giants. Taking

[21:16] **Mark Erikson:** inspiration from.

[21:19] **Carl Vitullo:** Look at you, taking inspiration from a release to talk about your upcoming release.

[21:25] That all sounds really great. I haven't, I still have not really extensively used React Query. I love all of the ideas of TanStack and whatever, but somehow I always... I'm stuck with Redux, so I don't know very much about the past experience or what this new release will change. I'll take us on to our next link.

[21:42] There was some discussion of barrel files that I found really interesting. Berthel put out a blog post talking about how we optimized package imports in XJS. The term barrel file was new to me, though I... Have encountered the concept a great many times in many workplaces. It's it's the index. js file that imports and re exports modules or, you know, various exports from other modules and The problems that they talk about here are not ones that I had specifically observed through my career.

[22:16] So basically what they talk about is these barrel files essentially centralize import or, you know, the module tree, the tree of your modules and sort of act as choke points. So it's like, as soon as you import something from one of these barrel files, suddenly every single module is being pulled in. And I guess, you know, maybe a more familiar.

[22:39] statement of the same problem is low dash bundle size inflation. You know, I'm sure many of us, I have encountered this so many, on literally every project I've worked on, where somebody imports low dash, they do group by from low dash. Then, because tree shaking doesn't work reliably, the entire module gets pulled in.

[23:00] And so, That's usually a bundle size problem, but what Vercel is talking about here is there's a second dimension to that, which is sprawling the module tree has a, you know, a noticeable cost to it. There, there is time spent creating and then navigating that tree of modules and barrel files by acting as these choke points mean that, especially on large projects, that time spent.

[23:29] Looking at the tree and figuring out where code is coming from can explode to like a substantial portion of your build time. So Vercel next talked about optimizations they're doing to correct that for you. They will inspect imports to determine whether they are barrel files and then undo that for you silently on the backend so that you don't pay that, uh, that.

[23:55] Discovery cost of, uh, traversing the tree of modules. That's really interesting. This is a new dimension to a problem I had observed in the past. Another thing that is, this is not exactly the same problem, but a pet peeve of mine that I've seen in more than one workplace is barrel files that rename exports.

[24:14] So they'll import from one place and then re export it. Under a different name. So that's that sort of problem is why I had slanted on like, don't use these. Like there's just, if you're trying to find a particular bit of code in a large code base, barrel files do not help. They make it actively harder. So don't use them.

[24:34] It's a bad practice. But also learning about another dimension of performance problems that they introduce. I'm never going to use barrel files again. It's not great.

[24:42] **Mark Erikson:** I've never been a fan of the concept for a few different reasons. I mean, to back up a bit, I think the argument. For people who have used them is that it's a conceptual encapsulation thing.

[24:55] So the idea is that if you have source slash features slash feature one, and you have many different files with different types of code inside of that folder, you can encapsulate the implementation details inside there by having source slash features slash feature one slash index such as it does the re exporting and other parts of the code base.

[25:19] Should not be allowed to import from the nested files directly. They're only allowed to import from the index file. So they aren't like conceptually poking into things that they shouldn't know about. I can understand the architectural thought involved, but as we noted, there's, there's runtime implications.

[25:40] You know, one is that if I right click a, you know, a component name or a function name, and I say, go to definition, it might end up jumping me to this barrel file instead because of how the compiler is trying to trace things. And then, yeah, like if you are bringing everything through one intermediate file.

[26:02] The imports from a hundred other files, then just trying to import one thing is going to force that file to be parsed and loaded and go look at everything else and parse and load it. And, you know, maybe all those files do get used somewhere, but it also means extra processing time during the build step.

[26:22] Maybe even a little extra time as the application is running. And so Marvin Hagemeister has done a lot of work over the last year, year or so to investigate common tools in the JavaScript ecosystem. Yes, lint and, um, a whole bunch of others. And he's found that in a lot of cases, the internals of these tools are actually doing things very inefficiently.

[26:47] So the post that he has here, it's, it's slightly more theoretical. He's not digging into real code in one specific tool, but he had seen real world code bases where having barrel files was leading to drastic slowdowns in build time, and he created a fake example. Which had like a bunch of nested build tools and then, or a bunch of nested barrel files.

[27:13] And that example made the code base build time explode. And so, yeah, like general, I think generally speaking, the advice here is that in order to kind of help speed up build performance, don't use this pattern. Instead, just go ahead and directly import from source nested file. And it's okay. I

[27:37] **Carl Vitullo:** do empathize with the, the general impulse to do this.

[27:42] It lets you treat your folders like internal modules, which is nice. It's convenience. It causes the pit of failure. It causes the foot gun where if you just do that indiscriminately without thought for how many files it is and without an understanding for like the downstream effects, because I think what really happens here is, okay, you do that once.

[28:03] And then you do it twice, and then you have a pat, you know, 15 models, modules that all do that. And so then anytime you import anything, it gets your entire code base. It has to navigate your entire code base for it. So, yeah, that makes sense. And going back to that, you know, speeding up the JavaScript ecosystem series of blog posts.

[28:25] I just saw, you know, another link that I'm not sure if I made the cut for this, but Parcel was talking about performance speedups. And like they changed their internal data structures, like that's it. Like they changed how they modeled it internally and got like a 5x beat up. So like there is clearly there are some low hanging fruits to make the JavaScript ecosystem faster.

[28:47] So, uh, if this is one of them, then cool, let's, let's get rid of it. We don't

[28:51] **Mark Erikson:** have to just go and rewrite everything in Rust. Sometimes we can look for really stupid code patterns and fix those. Performance.

[28:59] **Carl Vitullo:** It's tough. All right. You want to take us on to our next one?

[29:03] **Mark Erikson:** Yeah. So on a, on a sort of related note, React 18 came out with some new hooks and I think most people probably don't know they exist.

[29:13] And to be honest, I still haven't even tried to use most of these new hooks myself, but I have seen my teammate Brian Vaughn, who used to be part of the React core team, using them because he was part of their development process. You might've heard that, you know, React 18 was going to have a concurrent mode.

[29:34] And then they ditched that. It's not a whole standalone mode. Instead, it's concurrent features. So, there are specific React APIs that, when you use them, Make React handle the rendering process in a different way, being able to split a render into pieces or do some of that work in the background. And so two of the new hooks in particular are use transition and use deferred value.

[30:03] Now, like I said, I have not actually used these in practice. Brian has attempted to explain them to me a couple of times and there's this very, very good. Excellent blog post by Nadia Makarevich, who's written a number of very good other articles about React behavior. And she goes into some detail about how these hooks work.

[30:22] If I can try to explain them, and I'm probably going to get this wrong, so please read the article in the official React docs. UseTransition gives you something akin to setState, but it accepts a callback. And the idea is you're supposed to run the callback, run the startTransition callback, And do your actual update work inside of the callback.

[30:45] And that's basically a signal to react that the work you're doing is relatively low priority and it should kind of be handled in the background compared to other potential renders. The other one is use deferred value. And I think the explanation that I sort of half understand is it's almost like a built in debounce.

[31:08] In a sense. So maybe you're getting a value from some other source and you need to be able to render something now, but there's probably going to be like another version of the value coming later. So so you pass a value directly to use deferred value. And it returns what appears to be the same value.

[31:33] Well, it's actually happening is it's starting one render right now and then it's like scheduling a second render for just a little bit later. So again, I don't have like the best understanding of them because I haven't used them in practice and also because I haven't used them. I don't I don't have a good feel for the mechanics.

[31:50] But that's kind of the idea. It's about telling react that some of these pieces of data are lower priority. Let me do something now, schedule some lower priority work, and then rerender again, later when we've got all the pieces that we need. It's

[32:05] **Carl Vitullo:** reminding me of a performance problem. I hit a couple of years ago when I was building a cryptocurrency exchange, because that's how my career has gone.

[32:13] And we had a detailed list of. Tokens and every token had its own sparkline. And so when there were 40 tokens on screen, that was 40 sparklines. 40 charts is a lot to render. And so performance. tanked, and it took like three seconds to render the page. And I solved that by introducing a wrapper component that would immediately return null and then re render with whatever it was.

[32:40] And I called this, you know, poor man suspense back in the day. Just saying like, Do it later. I don't care. Render something. Render everything else first. And I wonder if this might have been a, if, I wonder if this use deferred value hook might have been an alternate solution to that where I could say, you know, could have fed that little chart data out of this deferred value and gotten the same benefit without adding a Another component to the, to the hierarchy.

[33:10] That's interesting. Okay. Very cool. I use transition is also new to me. I was just sort of trying to read that, uh, blog post, but it's long. I can see why this is a, uh, a concept that you, you've had explained to you more than once, but yeah, that looks really interesting. Very curious to hear more about that.

[33:28] Well, okay. That is all of the news items we have. Should we move on to the lightning round? My first Photoshop is now on the web. This is something that I, I remember reading like an early technical write up about two or more years ago, talking about all of the efforts being done to bring a true, proper, real version of Photoshop onto the web.

[33:50] And I know that there's lots of WebAssembly and WebGL and Canvas and just like, it was. It's truly an engineering effort that advanced the state of the web platform generally in a very real way that I think is quite rare, though, you know, I don't know that it has a ton of immediate actionable relevance for react and, you know, how we develop applications.

[34:15] The byline on this article is enabled by WebAssembly and Emscripten, Web Components and Lit, Service Workers and Workbox, and New Web APIs. Chrome and Adobe enjoyed collaborating on it. So this is, you know, a deep collaboration by presumably the Chrome team at Google and Adobe building Photoshop, getting the web platform into a state where it was a suitable host for a real version of Photoshop.

[34:42] As opposed to, you know, I think a lot of this type of application would tend towards doing the heavy lifting on the server. So, like, you know, if you were, you know, they've got a early screenshot in the blog post of generative fill. Uh, so, you know, like, I think, you know, the, the easy, the, the pragmatic. Just get it shipped approach would be just do that on the server, you know, so I think it's really interesting to see a project like this.

[35:12] I think that this is a once every couple of years level of investment in the platform. It's worth reading. It's worth learning more about just seeing how they did it and why they bothered to do all this effort. Cool. Mark.

[35:27] **Mark Erikson:** Alright, so it looks like Yarn version 4 just came out, and I've been a fan of Yarn ever since it was first released, but the transition from Yarn 1 to Yarn 2 was kind of like the Python 2 to 3 transition, or, um, you know, kind of like the common JSTSM transition, in that there were such major changes in the way this product was designed and used, that it...

[35:55] You know, it caused a lot of frustrations and turned people off. Um, so there's a little bit of background. Yarn 1, like most other JavaScript tools, is installed globally on your whole machine. So, you know, npm i dash g yarn. Yarn 4 are supposed to be installed on a per project basis. So you're actually supposed to copy the, like a yarn, like release binary JS file into your repo and commit that.

[36:30] And you have a config file. And when you run yarn inside your repo, yarn one from your system starts up. It sees the config file and sees, Oh, I'm actually supposed to run yarn three, two, one dot JS that's committed. And then it switches over and starts up the, the low, the local newer version of yarn instead.

[36:53] And I think that concept has confused a number of people. The other big thing is that when Yarn 2 came out, they had this really radical idea about how it would manage the installation of the JavaScript packages. They called it plug and play. And the idea was that instead of extracting, you know, 50 or a hundred thousand files into your node modules folder, it would leave all tarballs.

[37:20] So it's smaller on disk, and there's no time needed to extract everything, but in order to make that work, Yarn has to take over and act as an intermediary layer for any tool that needs to import a library or access anything. And there's so many tools in the ecosystem that expect that real files exist on disk in Node modules, because that's how everything works.

[37:46] So, my own experience has been that, you know, Yarn's plug in play mode is a nice concept, but in practice, every time I tried to use it, there were too many other tools that would just break in some way. But, especially with Yarn 3, they have a standard, let's just extract everything into node modules option, and I've actually found that works great.

[38:07] We're using it in my day job at Replay, we're using it in all the Redux repositories. Um, so the, I've, I feel that works great. So with yarn version four, looking at the release notes, um, they've got a couple fairly fancy new options around validating packages that are installed. Um, being able to define constraints, which maybe makes things work more consistently in a monorepo.

[38:31] Yarn three has a plugin model and they had some official plugins, but they weren't installed by default. And it looks like those plugins do now get auto included with yarn. So they're always available. Uh, they've, they've improved some of the UI output and it also looks like they've improved some of the installation performance as well.

[38:51] So if you're using yarn two or three, it's probably worth upgrading to yarn four. And if you're using yarn one, it, it probably is still worth looking at the newer versions of yarn as well. Uh, there was a lot of debate in the hacker news thread. Um, you know, a lot of people are arguing about, you know, why do we need so many package managers or, you know, discussing the, the transition from yarn one to the later versions?

[39:17] Some interesting reading over there.

[39:19] **Carl Vitullo:** Yeah, as someone who has never moved beyond yarn one, I empathize with all of those. There is a discussion of. a query verb for HTTP requests. Uh, this would be in addition to like get, post, patch, put, delete, now query. This is really interesting. Uh, it seems to be a standardization of essentially like GraphQL.

[39:41] GraphQL, I know, uses slash abuses post, which has some negative consequences just because Host is meant to be submitting information, not retrieving information. Um, so this looks like a recognition that the current verbs are not quite sufficient for modern use cases in so far as the get verb has no body.

[40:05] You can't say you can't give any information along with that request that URL. So, you know, you can do query variables, but like at a certain point, the URL is like. You know, if you have kilobytes of data that you're trying to send back using in the URL has some trade off that's not ideal. Um, and post is not idempotent.

[40:28] You know, it is not understood by the spec. It is not safe to retry post requests. That's not a safe assumption. So, you know, you can write an API where it is safe. But if I'm writing. A fetch library, a fetch wrapper, then I, you know, I can't say I, because it is a post request, I can't reliably retry it. I can't, I cannot write code that does that because it might not.

[40:53] Um, so this is now essentially it. I think my summary would be this is get with a body, uh, with the recognition that it's going to be used to query data. Very cool. I think that's, you know, big platform

[41:07] **Mark Erikson:** iteration. Okay, next up, um, so TC39 is the standards body that deals with the JavaScript language. And they've announced a new working group that is going to try to improve the specification for source maps.

[41:24] Now, if I had to guess, probably two thirds of the people here have no idea what a source map is because you've never had to worry about it. Source maps contain data. They contain all the original code, like your code, as it looked like on your machine, before you hit the build button, and then they tell debuggers and other tools, here's how you map, you know, to do list item.

[41:48] ts line 37 into these 30, these 25 characters in the middle of your application bundle. And so this is how JavaScript debuggers like the Chrome DevTools or my own day job at replay are actually able to show you your original code so that you can step through it, see variables, and do all that stuff while debugging.

[42:12] Source maps are really stupidly complicated. I'm not an expert on them, but I've learned a lot about them over the last couple of years. And there is a current spec for what information source maps can contain, but there's a lot more cases where they could be useful. And like Brian handle more cases. So this working group is trying to expand the specification for source maps and add more information that can handle specific cases so that in the future, once the spec is defined and build tools, output this information and debuggers know how to use this information, they can more faithfully represent what your original code was doing as you're trying to debug it.

[43:01] And so one of my, one of my coworkers, Holger Bentel. Is actually part of this working group. And he even has submitted a proposal that, um, to try to capture information about scopes. An example of this from the, from the proposal is that if you have like three nested function calls, the compiler might, you know, or a minifier might collapse all of those and just say, well, the last function just returns a value.

[43:30] I can just get rid of those first two functions entirely and return this value at like in the production code. That means that the source map might not capture the fact that when you wrote it, There were two or three other functions in the middle. And so when you try to debug it, it sort of ends up looking like you skipped from like above the function into the middle function and never paused anywhere in between.

[43:55] So by capturing more information about scopes. It could do a better job of representing the way you wrote the code. And I'll also put in a self plug for one of my own things. Uh, react has never shipped source maps for its production builds, which is why you, when you see a react error, uh, in production, the stack traces are all gobbledygook and earlier this year, I put up a PR to actually add source maps to react build pipeline.

[44:28] That PR has been sitting there for the last five months. Um, I actually had a conversation with a react team member just this last week at a conference. And I'm, I have tentative hope that maybe that'll get merged sometime soon. I hope, but the problem is even once it's merged, that will only be helpful for future releases of react.

[44:52] That actually include the source maps during the build step. So I've actually done the work to backport my react build pipeline changes. And I generated the source maps that would have existed or react 18 to 18, one and 17. And I worked with someone from the century tool. Who then proceeded to put together build plugins for Webpack, Vite, and Rollup, I believe, so that you can install this package in your app, add it to your build pipeline, and it will automatically use the quote unquote original React source map in your application bundle.

[45:34] Is this going to radically improve your debugging experience? Maybe not, but it hopefully can help in situations like, you know, being able to see error messages and some other things like that.

[45:45] **Carl Vitullo:** Yeah, my kingdom for React source maps. Cool. Uh, I'm going to make a game time decision. I was going to talk about, uh, Astro 3.

[45:54] 2, which has view, uh, transition improvements, but I don't really know that much about view transition improvements, so I'm going to switch it up and talk about Parcel performance improvements instead. Uh, I touched on this briefly earlier, um, The, the, the gist is they're claiming, uh, seven times faster rebuilds on large projects, uh, and lots of other performance improvements, um, no rust rewrite, no, you know, massive core, whatever, replacement.

[46:25] Um, but they talked about, they said 50 percent of the time in bundling was spent looking up values in different maps. So that, you know, they have maps and sets that, uh, determine which bundle routes, uh, each module is reachable from. So, you know, basically like, if you're here, then you can get over here.

[46:44] And they switched out those maps and sets into, uh, bitsets. Which is, I guess, more like, I'm trying to... Retreating

[46:54] **Mark Erikson:** and treating the individual ones and zeros in an integer as if they were bullions.

[47:01] **Carl Vitullo:** Yes, there we go. We have one value that represents multiple flags, multiple multiple different, you know, things.

[47:10] So, you know, by they say that purely by switching from storing all of this data in maps and sets. You know, the, the, the JavaScript, you know, concept of a map or a set new set new map, uh, into this bit set where it's working on a binary level rather than a like string level, I guess, uh, they've been able to get a five X improvement in bundling speed in some situations.

[47:40] So. It just goes to show you that, you know, sometimes you're going to, sometimes rewriting in Rust is right, but also, like, if you're rewriting in Rust, you're basically doing this logic, like, Rust operates on, you know, it's a low level language, whereas JavaScript is, by default, a high level language, you're, you know, in JavaScript, if you're just going to write code the most intuitive way, you're probably writing strings, objects, arrays, JavaScript.

[48:05] But there's nothing stopping you from writing code as if writing JavaScript as if you were writing Rust or C. Um, you can use buffers. I guess not in, not in the browser. You have to use typed arrays. You and data arrays. Right. But, you know, you, it is perfectly feasible to write JavaScript that does all, all of those low level manipulations.

[48:25] And it, yeah, if you're thinking, if, if you ever find yourself thinking like, man, I wish I could just rewrite this in Rust, like. Take that same thinking that you would approach writing it in Rust with and try writing in JavaScript. I bet you'll get halfway there on the

[48:39] **Mark Erikson:** performance. The, the funny thing was though, I don't, I don't know if you caught this.

[48:43] So, there was one little bit that they couldn't do from JavaScript. There's apparently a... an advanced CPU SIMD instruction that they wanted to use specifically for some of the comparisons to make them faster. And you can't access specific CPU instructions from JavaScript. It just, it's just not possible.

[49:05] So what they did was they wrote that one tiny, tiny little bit in Rust and compiled it to WASM. And exposed it to JavaScript. So, because they could, they could use that SIMD instruction in Rust. And so by doing that, it's like they made one little function, which is like, you know, fast bit compare or something like that, and expose that to JavaScript from Watson, that's impressive.

[49:32] Yeah,

[49:32] **Carl Vitullo:** that is really cool. I love the idea of SIMD. If folks in the audience aren't familiar, uh, S I M D, Single Instruction Multiple Data. Uh, it's what powers, it's the core concept behind like graphics cards and like all the AI and the mining and whatever. Uh, you take 600 values that all need the same thing done to it.

[49:53] Modern processors will let you pass in That data and an instruction and we'll just do all of that at once instead of one, you know, instead of doing like tick, tick, tick, tick down a list 600 times it'll just go and do 600 units of work all at once. So, yeah, very cool. I didn't, I, I had missed that. They did use rust for a little bit of that.

[50:16] That's very cool.

[50:17] **Mark Erikson:** Okay, we're about out of time, and fortunately this is the last item on the list. So, self plug. Last week I spoke at the React Advanced Conference in London, which was a wonderful time. Uh, that's also where the React for Git talk was. Uh, the live streams are up on YouTube, um, and the, the individual talks will be available on the, the Git Nation, uh, conference organizers site within the next couple weeks.

[50:43] My talk specifically was titled Building Better React Dev Tools with Replay Time Travel. Most of the last year building some very advanced features for replays, time traveling debugger that rely on poking inside the internals of the react library and the react dev tools in replay. We have the react dev tools integrated so that as you jump to different points in time, you can see what the react component tree looked like at that point in time in order to gather that data.

[51:19] I actually had to go make changes to our recording version of Chrome to say here's every time react rendered and then there's a back a server side back end post processing step opens up the recording goes to each point in time injects the react dev tools bundle code and then extracts the component tree data and then it's even able to take some steps further like if you made a recording of a production application it can use source maps to figure out well and Okay.

[51:51] This components name in production was QZ, but that's actually to do list item from your original code. So let's use the original name of to do list item for the component tree instead. And so I talked about, here's how the react dev tools actually saves and transmits that information. And then I talked about the steps needed to actually do this time travel analysis and replay.

[52:17] Um, and I've semi open sourced the actual code. Uh, the, the code is technically speaking in our proprietary backend repo, but I've copy pasted it to an examples repo. It won't run, it won't compile, but if you want to see... 2500 wines of Mark doing stupid, weird, crazy, mad scientist things. It's available. Heck

[52:39] **Carl Vitullo:** yes.

[52:40] Thank you so much, Mark, for talking through the news with me. Thank you so much, everyone in the audience for sticking with us. Uh, well, I hope everyone has a good Halloween. Uh, spooky season is almost only or almost over. Um, yeah, cool. See you guys next month.
