---
title: This Month in React (June 2023)
date: 2023-06-28
time: 10am PT / 5PM GMT
location: Main Stage on Reactiflux
description: "Join Carl Vitullo, Mark Erikson, and Sebastien Lorber as we break down This Month in React. We'll break down what's new in an hour-long conversation."
people: "[Carl Vitullo](https://twitter.com/vcarl_), [Mark Erikson](https://twitter.com/acemarke), and [Sebastien Lorber](https://twitter.com/sebastienlorber)"
---

<iframe src="https://podcasters.spotify.com/pod/show/reactiflux/embed/episodes/This-Month-in-React--June-2023-e26dgii/a-aa2re99" height="102px" width="400px" frameborder="0" scrolling="no"></iframe>

[00:00:00] **Carl Vitullo:** Thanks for joining us for this month's, This Month in React, for June, where we recap and digest recent develop elements in the ever evolving React and web ecosystem. We are your hosts. I am Carl Vitullo. I'm a staff software engineer and community manager for Reactiflux.

[00:00:17] **Mark Erikson:** Hi, I'm Mark Erikson. Most folks might know me as the maintainer of the Redux family of libraries, and my day job is at replay.io, where we're building a true time traveling debugger for JavaScript.

[00:00:28] **Sebastien Lorber:** Hello, I'm Sebastian and I am known for Docusaurus as being the maintainer and also the creator of the This Week in React newsletter.

[00:00:38] **Carl Vitullo:** Yeah, I feel like we've had a lot of news this month, so how about we jump into it?

# StackOverflow Developer Survey

- [Stack Overflow Developer Survey 2023](https://survey.stackoverflow.co/2023/)

[00:00:43] I am starting off a little broad here. The StackOverflow developer survey for 2023 came out and I feel like it had a lot of, I don't know, this is just such a like seminal survey in the programming world generally. And I guess, from the survey I was seeing just how much of the programming world is specifically web and React.

[00:01:04] So it's, I thought this was interesting to see. This is good to cover for, even though we, this is not specifically about React or Web narrowly, but Yeah, I mean, for example, they had a bunch of questions about what technologies you use and of the top 5, 3 of them are web technologies.

[00:01:20] 65% of respondents use JavaScript, 38% use TypeScript, half use HTML and CSS. So a lot of good insights in here. Some good examples on hybrid versus in-person work, like only 16% of software developers are currently fully in person. Well, 16% of respondents to the StackOverflow survey.

[00:01:40] They had some good salary information. US, UK, India. For a front end developer in the US, average reported salary was 140,000., Same title in the UK was 71, same title in India was 15. So one thing I love about this survey is just seeing, sort of a benchmark about the industry as a whole, or at least the portion of the industry that makes heavy use of StackOverflow, but always fun to see and definitely good things to read here.

# Server Components

- [Next.js App Router Update (dev server, docs, etc)](https://nextjs.org/blog/june-2023-update)
- [Why do Client Components get SSR'd to HTML?](https://github.com/reactwg/server-components/discussions/4)
- [Remix + RSC POC](https://twitter.com/ryanflorence/status/1663587026384584704)
- [Redwood: All in on RSCs](https://community.redwoodjs.com/t/redwoodjs-next-epoch-all-in-on-react-server-components/4967)
- [React WG - RSC from Scratch. Part 1: Server Components](https://github.com/reactwg/server-components/discussions/5)

[00:02:08] **Mark Erikson:** Nice. Kind of a similar theme, so general big picture news. The biggest topic of discussion that I continue to see in between Twitter and Reddit and wherever else is React Server Components. And there's been a few pieces of information as far as technical updates and helping people understand how they actually work.

[00:02:31] First off the NextJS folks put up a blog post that gave an update about the NextJS app router and its current functional status. Why they built it, how it supports incremental adoption. It's stable, but they are still working on improving it. They talked about some of the plans they have for improvements, like improving the speed of the local development server, working to make fast refresh faster using the the Turbopack build tool and getting that from beta to production ready.

[00:03:07] They also talked about trying to improve the docs. They've done a lot of work over the last year to improve the NextJS docs specifically. We'll talk about this more in a little bit, so there really aren't, isn't any documentation about React Server Components in the actual React Docs.

[00:03:25] The only real official documentation you can find is in next's documentation site. So the blog post talks about like, we're, we're working on that as well. There were a couple other pretty good related links. Dan Abramov has a discussion thread in the one of the React Working Group repos that talks about why client components get converted to html.

[00:03:49] He also did a very long, deep dive thread, which to be honest, I still haven't even had time to read through where he tried to rebuild the function and some of the basic functionality of React Server Components. From scratch, and I've seen a lot of folks say that this was really helpful in understanding the mental model as well as the technical details of how Server Components work.

[00:04:13] And I think I've seen a, a couple people try to take the information that Dan wrote in this article and turn it into tutorial videos as well. And then I know that a couple other React related frameworks besides next are looking into using Server Components, and that includes both Remix and Redwood.

[00:04:37] And then there's at least a few other folks experimenting with Server Components in different ways. Daishi Kato, who's the maintainer of the Zustand and Valtio and Jotai libraries has been doing his own little spin on a server component based framework. So there's a lot of motion going on around the ecosystem in relation to Server Components.

[00:04:59] **Carl Vitullo:** Yeah, definitely a lot of motion. I hadn't seen the Redwood discussion of Server Components. And I tried to check out Remix Server Components proof of concept, but it doesn't look like there are very many details there at all yet. That, you know, proof of concept tweet from Ryan Florence is just a, you know, it's just Lighthouse, like, cool, okay. I guess it works well, but what, like, what does it look like?

[00:05:22] **Sebastien Lorber:** There is actually a few links that you can find on on GitHub with repositories where the, the implementation is being worked on. So you can follow this on on GitHub. I don't think it's Ryan Florence for working on it, I think it's Jacob Parish or something like that, that is working on on this implementation.

[00:05:40] **Carl Vitullo:** Yeah, I guess that makes sense. If you're trying to follow along the implementation, tracking the GitHub directly is where, where that actually happens.

[00:05:46] Yeah. More, more drama, more resources, more details trickling out. Server Components are definitely still actively evolving and I guess they probably will be for a while still.

[00:05:57] **Mark Erikson:** We'll get to that part when we circle back around.

[00:06:01] **Carl Vitullo:** Yeah. Cool. Yeah, I hadn't seen the React Server Components from scratch.

[00:06:05] That's a, that's a really good resource. That reminds me of Dan Abram's talk. What was it? React in an alternate dimension. Looking at IE6, so definitely feels like he's trying to anchor the React Server Components conversation, sort of going back to fundamentals, like not chasing trends, not sort of saying like, &quot;here's where the path has evolved. Here's the current state,&quot; but saying, &quot;let's look back at what web development used to be. Let's look at what it is right now. Let's try and find a, not just a local maximum, but maybe a, you know, universal maximum.&quot;

[00:06:38] I guess I appreciate that framing a lot. It's nice to not just be reactive and see this is what people have been doing recently, this is how the community and ecosystem are evolving, but really trying to go back and say, &quot;okay, this is what we're trying to build. How does that make sense in the current moment, and how does it make sense in previous moments as well?&quot;

[00:06:59] So I I, I like that. You know, I, I've said that I defer a lot to the React core team because they have not let me down to the past, and I like that. I think that's a good framing and I feel pretty good about the direction that that suggests to me.

[00:07:14] **Mark Erikson:** Dan's teaching style has always been very much from first principles, like first I will explain the concepts and why they matter and how we arrived at them, and then I will explain the technical details.

[00:07:27] You can see that in the original Redux tutorials, you can see that in the rewritten React Dev website. And so, yeah, like I'm, I'm just now finally skimming that Server Components from Scratch article, and I can, I can definitely see that same mindset at work, which is good. Like I, I've always found it's useful to explain a problem and then explain the solution to the problem now that you understand why it's there.

[00:07:52] And I, I think this is a really good post.

[00:07:54] **Carl Vitullo:** Sebastian, you wanna take us off?

# Skew Protection on Vercel

- [Vercel - Introducing Skew Protection](https://vercel.com/blog/version-skew-protection)

[00:07:56] **Sebastien Lorber:** Yeah, I wanted to talk about something Vercel released recently. They called it Skew Protection. And I found it interesting because somehow it solves a problem that I had in the past. Where you deploy your new version of your software and then when someone loads a, a website in the browser, they don't always refresh the page, so they, they may have a stale client app locally, and you deploy a new server version, and then there is a mismatch between the server and the client. And somehow Vercel released something recently that permits to, to mitigate this problem.

[00:08:33] So the idea is that if you have a still client running locally, it'll try to use the server code that match that, that client version. And they can do that because they do some routing on on their infrastructure based on HTTP headers. So the idea is that if you do a breaking change during a deployment, it might not generate errors and they just added this to the last NextJS version. So you can just add the flag to the config and this will be enabled by default.

[00:09:07] **Carl Vitullo:** Skew protection. Definitely interesting. Definitely a problem I have run into in my career. This has been a problem I've especially noticed on Netlify because they only serve the assets for the most recent deploy.

[00:09:19] So how I've seen this present is somebody keeps a tab open. You know, the app we have shipped is split into multiple bundles. So then they, they can click around, they can keep navigating within the app for all of the JavaScript they've already loaded. But then they try to go to a new page. It goes to fetch the bundle, the bundle 404s, and then something breaks catastrophically.

[00:09:41] So how we fixed that on teams I've been on in the past was we set up a 404 javaScript bundle that would just do, you know, browser reload, which it worked. It's fine. It's a little janky. That's led to situations where like if we have state that somebody's entered into text inputs or whatever, that gets lost.

[00:10:00] So happy to see a more graceful implementation here.

[00:10:04] **Sebastien Lorber:** Yeah, what is nice, some of our examples just showed the case where you call an api, like you submit a form or something like that, and there is a mismatch between the payload and the, the serverless function. But apparently it also works with the static assets.

[00:10:19] So if you have a code split app with a prefetching and basic code loading, you should be able to to, to fetch the appropriate bundle to the appropriate immutable deployment. And if you keep your tab open you have like 24 hours of transition, so that you can still access the older deployments.

[00:10:39] This also present some security concerns apparently because for example, if you have a vulnerable deployment in the past this gives the ability of data here to eventually keep using it, using using HTTP header. So there's a trade off.

[00:10:54] **Carl Vitullo:** Huh, interesting. Okay. Yeah, a 24 hour grace period for refreshing a tab seems a lot better than nothing.

[00:11:02] I had always wondered why this wasn't a problem that was solved at the level of the hosting provider, because, you know, it, to me it looked like kind of a bug. You know, I, okay, yes, immutable deployments, but like, it's not that those old assets don't exist anymore, it's just they're not the freshest.

[00:11:17] So, you know, when I, when I've controlled a server in the past, like I only cleaned up old artifacts every now and again. So, yeah. Interesting though. Cool to see a hosting provider bring it.

[00:11:28] **Sebastien Lorber:** If you use Netlify for example, there was a way to, to mitigate vita this as well. For example, you could use the net cash and you can keep the previous static deployments in your cash and then merge them with the new deployments so that you get, somehow you keep the old assets and then add the new assets to provide the old assets. And then both remain accessible. So this is not ideal, but at least it was a, a solution.

[00:11:57] The problem is that you sometimes had to clean up the deployment because it's it would keep growing forever if you don't do the cleanup someday.

[00:12:05] **Carl Vitullo:** Never want unbounded growth. Cool. Well, I'll take us on.

# React Native 0.72

- [React Native 0.72 - Symlink Support, Better Errors, and more](https://reactnative.dev/blog/2023/06/21/0.72-metro-package-exports-symlinks)
- [Fabric Renderer](https://reactnative.dev/architecture/fabric-renderer)

[00:12:09] **Carl Vitullo:** So React native had a new big version put out, version 0.72. The highlights were symlink support in Metro, better errors and developer experience, and some more. It looked like a lot of the &quot;more&quot; is sort of finer points related to. A new architecture. They, you know, they had New Architecture in title case all over this post.

[00:12:35] So it looks like this relates to the new architecture and React Native, Fabric, which I guess is a new renderer, new core technology for how the apps get put on the phone.

[00:12:48] **Sebastien Lorber:** Fabric is a new renderer for the new architecture. There are multiple pieces to the new architecture and Fabric is the, is the new renderer.

[00:12:57] **Carl Vitullo:** Okay. Yeah, so, you know, my, my reading of this news here, they have a new interop layer that makes that new architecture more usable for, a wider range of people who are on older versions of React Native. I saw that it's, you know, they're intentionally not doing a hundred percent coverage right now, just focusing on common issues. Common compatibility. Yeah. Cool. Awesome to see it get better developer experience because that's always been my largest pain point when trying to use

[00:13:25] **Sebastien Lorber:** it. And also the, the new metro features will be super useful. For example, the symlink support was requested for years. I think it's maybe the oldest issue in React Native.

[00:13:37] So we are happy to, to finally have the ability to, to use a manual report without having to, to plug any extra config to make it work.

[00:13:47] **Carl Vitullo:** Yeah. Very nice. Very nice. Yeah, and I see some other little smaller developer experience changes, like not failing on style errors. If you give it a bad style prop, it doesn't blow up anymore, so that's nice.

[00:13:58] You know, low priority errors not interrupting your workflow is always good.

# Social Dimension of React Server Components

- [Is React Having An Angular.js Moment?](https://marmelab.com/blog/2023/06/05/react-angularjs-moment.html)
- [Related tweet form Joel Hooks](https://twitter.com/jhooks/status/1670147458360569856)
- [Next canary broke Apollo and RTKQ](https://github.com/apollographql/apollo-client/issues/10974#issuecomment-1594894341)
- [React-Query trying to add “use client” and struggling](https://twitter.com/TkDodo/status/1673401744087195657)
- [Seb describes the `”react-server”` export condition](https://twitter.com/sebmarkbage/status/1673419412144025604)\*\*

[00:14:02] **Mark Erikson:** Okay, Carl, please prepare to begin pasting and links for this one.

[00:14:06] **Carl Vitullo:** Uh oh. Uh oh!

[00:14:08] **Mark Erikson:** Okay, so a minute ago we talked about the kind of the technical news around React Server Components, and then there's the social aspect, which is that there is still a ton of confusion and concern in actual real, no kidding pain points around the rollout of Server Components.

[00:14:30] The behavior of next. React's versioning and how existing libraries in the ecosystem are supposed to inter-op with all this stuff. , I've, I've been collecting a whole bunch of links and I've actually been forwarding a lot of these over to members of the React team to give them an indication of, &quot;look, these are all the problems people are experiencing, or at least feeling right now. You need to be aware of these so that you can figure out how to actually like, improve the marketing, improve the docs, and address the problems that people are having.&quot;

[00:15:10] So let's, let's roll through a few of those. There was a post that came out entitled, &quot; Is React having an AngularJS moment?&quot; And the background on this for people who weren't around 10 years ago Angular JS 1 was very, very popular for several years, and then the Angular team announced Angular 2, which was effectively a completely different framework, but just using the same name.

[00:15:39] And the initial announcement was that there would be no migration path to go from Angular 1 to Angular 2. And this killed much of the Angular ecosystem at the time, and it coincided with React coming out. And so in 2013, 2014, a lot of teams said, well, if we're gonna have to rewrite our app anyway, let's just switch from Angular 1 to React instead.

[00:16:05] And so, a number of people have made this comparison that the rollout of Server Components is like an Angular 1 to 2 transition for React. Now, the React team has pushed back on this idea and pointed out that, you know, we're, we're not killing any of the, the existing client component capabilities. We're we're adding more functionality to React.

[00:16:31] So in some very real ways. The comparison is a no, but it's also true that there is no migration path that I've seen right now to add Server Components to an existing app unless you're using Next and you start switching over to using the app router, et cetera. So there is a very real feeling of this shiny new thing is being dangled in front of us.

[00:16:59] And we're being encouraged to use it, and yet many of us cannot. So there's, there's a feeling of being blocked there, even if the technical details are, are somewhat in between and hazy. So the article came out, and then there was one specific, Twitter thread, started by Joel Hooks from, from Egghead.

[00:17:20] Who was discussing it. And that led to a ton of sub discussions. And I, I got involved in that thread halfway down and actually ended up having a bit of an argument with one of the React team members about, you know, things like defaults matter and, you know, there's, there's missing docs for a lot of these things.

[00:17:39] And a lot of other people were participating in that thread as well. And it's just an example of the kinds of, Frustrations that I'm seeing echoing throughout the entire ecosystem. So that's one side of things.

[00:17:53] Another is that a recent Next pre-canary test release broke a couple libraries like Apollo client and React Query, and they reverted that particular change, but the implication and that I'm getting out of it, is that libraries that want to be able to interact with Server Components in some way, basically need to add an entire new bundle file to their packages and specify a new export condition called React Server, so that when the React server component bundler tries to load your library, it finds an extra special version of your library that has all the client code stripped out so that it's not sending extra pieces over the wire.

[00:18:46] The problem is this means a whole lot of extra work for library maintainers like us. And while there's been some discussion about this on GitHub and Twitter, none of this is actually documented yet.

[00:18:58] So Lenz Weber, who works on both Redux Toolkit and Apollo client, and myself and Dominik Dorfmeister of React Query have all expressed our frustration with, you know, the fact that our libraries are now breaking and we're being forced to do this extra work, but there isn't even documentation for it yet. So there was, there was a very long discussion thread over in the, the Apollo repo There's been discussion on Twitter.

[00:19:26] Dominik has a PR up where he is trying to add this new export condition to React Query and Sebastian Markbåge is trying to give some advice. So it's, it's, it's a very frustrating time for library maintainers as well. And then on top of that just within the last week or so, there's been a lot of discussion about versioning.

[00:19:48] So the current stable version of React is 18.2, and it's been out for over a year, and there's no indication of when an 18.3 or even an 19.0 will come out. Well, it turns out that a lot of the functionality that Next uses in the App Router only exists in what's known as these Canary builds of React. So React has a bunch of internal feature flags.

[00:20:17] And they put out the stable builds, which have a lot of those feature flags turned off. There's the narrow builds or in experi in the daily experimental builds, which have many of these feature flags turned on. And so if you're using the app router next actually ignores whatever version of React you have listed in your package, J S O N.

[00:20:39] And instead they use one of these canary builds of React. That has the extra special functionality. And the problem is that right now there is no documentation whatsoever on what features are even turned on in one of these canary builds. And there's no way for a library maintainer to know, okay, well you're reporting a bug with our library, like our, our, our library, but we don't even know what version of React you're using.

[00:21:09] And, and or we don't know what features we should expect to be available in React when you're using like next in the app router. So there's both frustration from maintainers where we don't know, like the React team isn't documenting, here's what's available for you to use. What are the stability of these APIs?

[00:21:30] What, what canaries have, what features turned on? And then there's also an argument about (exhale) React wants to be able to try out these new features. A lot of these features are expected to be used by frameworks like Next and Remix. And so the framework can kind of like add a layer of protection on top of those.

[00:21:52] And even if the features aren't a hundred percent done and they change a little bit over time, the framework can put in effort. To keep them from breaking users applications, but what does that mean in terms of semantic versioning and publishing the libraries? So there was, there was a lot of debate about what is the right way for React to put out these features so people can try them out versus semantic versioning versus framework usage.

[00:22:22] So it's, it's all very, very confusing right now. I will say that I've, in addition to all the public debate, I've, I've had some messages on the side with some React, some, some kinda like non-public React team members who are explicitly intending to work on core documentation for Server Components and wanting to work on.

[00:22:46] How to docu, like how do we document these canary builds? Can we do something similar to like the TC 39 stages process where we say, you know, we've got these 15 features. Some of them are just an idea. Some of them we have a proof of concept. Some of them are already ready to go and hopefully be able to like apply that as like a, a matrix or a table or something to all the different canary builds maybe.

[00:23:12] But Right. As of right now, none of that information exists, and it's very frustrating.

[00:23:17] **Carl Vitullo:** Yeah. Right. And I, I think another aspect that you didn't even mention in all of that (laughter) is that like, it's already so hard to publish a library correctly because the ES module ecosystem has been such a nightmare.

[00:23:33] **Mark Erikson:** Oh, don't even get me started.

[00:23:36] I, I was flying back from React Summit a couple weeks ago. I've been threatening to write a blog post for the last few months about, look, I've been suffering through trying to convert the Redux libraries to e sm. I'm finally going to write, I'm going at some point, I'm going to write down all the stuff I've learned and tried and bang my head against.

[00:23:53] So I wrote half the blog post on the flight back. It's 4,000 words long, and I still need to sit down and write the other half of that. And I even had the redwood folks ping me and say, Hey, you've, you know, stuff, something about this e sm transition, right? Can you help us? I'm like, I'm not sure that I'm the person to help with this.

[00:24:13] **Carl Vitullo:** You're the expert, Mark.

[00:24:14] **Mark Erikson:** No-oooo.

[00:24:16] **Carl Vitullo:** (laughter) yeah. So I mean, it's already. Very difficult because the ecosystem ha is still reeling from the effects of the last major, you know, bifurcation of package authoring. I guess connecting this back to what I was talking about earlier with the StackOverflow and representation of React as a, you know, portion of the overall tech world and you know, it's something, it's like 60% of respondents are using React or something like that. So like the tech world is enormous. React's influence on it is enormous. The ES modules nightmare is still not over.

[00:24:54] **Mark Erikson:** Oh, it's still going on, trust me.

[00:24:56] **Carl Vitullo:** Well, you know, Mark, maybe you can end it finally at long last by finishing your 8,000 word blog post about how to, how to integrate it correctly.

[00:25:04] **Mark Erikson:** (ironic laughter)

[00:25:06] **Carl Vitullo:** (real laughter) But yeah, so, I really feel like your, your frustrations here around trying to be a library author, dealing with this transition gracefully and correctly, and feeling like there's no good, like, like there is no way to do so, like, it's an impossible path. Yeah. That's, that feels very real.

[00:25:25] **Sebastien Lorber:** I, I don't think it's bad for Vercel and NextJS to use the canary version, but the problem is, maybe it's just a documentation problem, I, I mean, it's a good way for them to, to have a quick feedback loop and have some adoption somehow.

[00:25:40] It reminds me of what we had with Docusaurus too, you know, that it took a long time to release. And the fact that the community adopted the alpha versions gave a lot of feedback because we had a lot of download on, on this version, and many used it in production, including Redux, I think.

[00:25:59] I know that it produced some pain because we did some breaking changes, but at the same time it provided a ton of feedback, that permitted to refine things. There's a trade off for the NextJS team to, to find between being stuck, not being able to reiterate fast because their software has come somehow, too related to, to React new features to evolve independently. So they need to iterate on, on both of them at the same time.

[00:26:25] And. If they do that, then the community is a bit confused because the two versions are related and not everything is properly documented on the React side. And if they don't do that, they will be much slower. For example if they need a, a React core feature in to, to do something in NextJS.

[00:26:47] This may mean that we need a new version of React and Uneven NextJS can use it and uneven we can get feedback because the community is using the new version of NextJS That is using the new version of React. It's a much longer feedback loop, and it's not good for the community to take, to have things, being slower. So, I mean, if it's a bit more painful in the short term, I think it's better to, to have this quick, , feedback loop somehow.

[00:27:16] **Mark Erikson:** No, I definitely agree with that. I'm like, as a library author, I'm very sympathetic to, like, I've made changes I want people to try it out and, and actually give us feedback. I, I wish we got feedback for the Redux office in beta. But the, the fact that there is no documentation on what any of these, like what these new features are and which Canary build actually have certain features turned on is, is very frustrating.

[00:27:44] **Carl Vitullo:** You know, like, okay, bundling a library is difficult. Publishing it correctly so it can be consumed is difficult. It seems very frustrating, but it does make sense to me that like the documentation for that, It's not stable yet.

[00:27:56] **Mark Erikson:** Nonexistent is the problem.

[00:27:59] **Carl Vitullo:** It's not surprising to me that the documentation for that bundling and publishing concern is not existent. It's confusing to me that the, that there is no documentation for what feature flags are enabled in a specific canary release. Like that seems like a very routine part of publishing a canary package. Like if you can't, if you don't know what's in it, how can you give feedback about it?

[00:28:20] So, I guess that suggests to me that they, that there's a pretty heavy reliance on like, backchannel communications. And so, you know, the, the 10 people who participated in creating this canary release, they already know what's in it, so they don't need the documentation.

[00:28:34] And so it feels like that's who the audience for these canary releases are. The people who are already in the room.

[00:28:40] **Sebastien Lorber:** When you say feature flags, do you have a particular feature in mind that could be activated in the canary?

[00:28:47] **Mark Erikson:** Well, oh yeah. Like, like the, the `use` hook.

[00:28:50] You know, the, the React team published this RFC about this new use hook that's supposed to let you unwrap promises like a year ago. And the use hook then, or the use RFC mentions an upcoming cache or an upcoming RFC for some kind of cache component or API and says more details will come later. And the use RFC discussion, 95% of it was, well, people don't like the name, slash what kind of value are you allowed to pass to this either now or in the future?

[00:29:22] And it went silent. And so as library maintainers who would like to integrate with suspense? Our assumption was, well, nothing is happening with this RFC at all. And then Next comes out with this in the app directory, and they, and suddenly they're telling us that, oh yeah, the use hook is ready to go. You like we either we use it internally or you can do something with it Next. And something something.

[00:29:45] And we're like, wait, what you're, you're telling us that's usable? What about the cash thing? That never materialized. And, and so like we, we just have no idea where things even stand with that stuff.

[00:29:58] **Sebastien Lorber:** I understand that at, at the same time, somehow the, the hook is not documented in NextJS also, as far as I remember.

[00:30:06] For the end user, they are not supposed to, to even use it. So the end user, the app developer shouldn't care about if the feature is enabled on the direct canary flag or not, because, this is used only internally. So the problem is more that you as a library author, can't try the new things because they are not documented.

[00:30:29] But I, I don't think it's a problem for the majority of users. It's more like that, you can't start working on, on the new cutting edge things now because you are, you don't have the same back channel with the React team. So, I, I see some auto, two different problems. It's one for framework authors and library authors, and another for the end user.

[00:30:52] I don't think adopting NextJS With Canary release for the end user is a big deal today, apart that there are a lot of bugs that are reported, but they will be fixed. But the, I don't think the end user need to know much about all these new things that are not documented.

[00:31:10] **Mark Erikson:** Yeah. The, the flip side is that we, we do see a lot of our, our users asking like, you know, can I use Apollo React query, RTK query with suspense?

[00:31:22] And there's clearly a lot of interest in doing that, and we really don't have an answer for how you can do that yet.

[00:31:29] **Carl Vitullo:** I have one more thing I wanna pull in. Sebastian posted a very short little Twitter thread. I'll just read some snippets from it.

- [Sebastian Markbåge, "Who owns the direction?"](https://twitter.com/sebmarkbage/status/1673767392369844236)

[00:31:36] &quot;When a community of consumers grow large enough, it's interesting what happens with ownership. I think there's an argument to be made. It's that at some point the community bought into something and you can't change that from underneath them. They own what they bought into. From that perspective, if we as maintainers want to go a different direction, we should have given it a different brand, even if it's backwards compatible.&quot;

[00:31:53] I think that's very directly talking about all of this React Server Components drama and positioning, he posted those yesterday, about 24 hours ago. I, I'm looking forward to seeing where that may have echoes on. How the React Core team is thinking about React Server Components.

[00:32:13] And tying it back to, you know, where we started on this with comparisons to Angular 2. Like, okay, maybe this is not an Angular 2 moment for React, it is fundamentally backwards compatible, they are engaging with, you know, maybe not engaging perfectly, but they are making good faith efforts to include stakeholders in the conversation. Yada, yada. But I think this is maybe an early signal of a change in approach and yeah. Interesting to see how that shakes out.

[00:32:41] Okay, now we can move on. We've beaten it fully into the ground. Sebastian, you wanna introduce our next link?

[00:32:47] **Sebastien Lorber:** Yeah, it's a quick one. I, I noticed that we are both on the jury of, , React Jam, so I didn't know, but, , that was a happy surprise.

[00:32:57] So this is a contest where you create a game with React. And I think it it'll be nice if the Reactiflux community wants to participate. So we'll be happy to review your React games in I think next month maybe.

[00:33:13] **Carl Vitullo:** That's a good call out. Sebastian and I are both judges for a hackathon around developing games using React and web technologies.

[00:33:22] I think it's happening on July 20th through 30th, so it's 10 days long. As judges we will be given the, you know, I think it's gonna be 10 candidates and then we grade them. I'm excited for it. I think it'll be fun. We've done a couple of Office Hours and interest in video games has been a very common theme on what got people interested in programming.

[00:33:43] So if that's you, if you are interested in developing games yeah check out React Jam and maybe you'll have me and Sebastian play your game.

[00:33:52] **Sebastien Lorber:** Yeah. (chuckles)

[00:33:53] **Carl Vitullo:** Cool. My, my next link here, just a kind of small update. We talk a lot about Next and I feel like Remix maybe gets a little bit short shrift, but I see that they've got a, a new V2 development server that has some relatively large changes to the, some of the core assumptions around Remix.

[00:34:12] Most notably, it looks like this totally swaps out the semantics around routing. The big comparison that I saw, you know, front and center of this announcement was previously Remix, inferred what routes your pages were on based on the folder structure, with, you know, templates and wrappers and things like that.

[00:34:33] Now that is purely based on the file name. So instead of the folder hierarchy being reflected in the routes, it's Using. A different mechanism for determining conceptually what's a folder, what's what looks like a folder in the url. That's a pretty big shift.

[00:34:48] I am interested to see them roll this out because it is such a large change to the everyday development experience of using Remix. So yeah, and seeing like a sub component of a framework, being given a new major version is interesting to me. We just talked a lot about Server Components and the versioning and the struggles of rolling that out.

[00:35:11] So here's a different example. Smaller, you know, obviously Remix is inherently a subset of React usage, so it, the, the ecosystem is inherently smaller, but yeah, interesting to see another approach to making a major revision to floor behaviors.

[00:35:28] **Sebastien Lorber:** It's quite interesting that they have implemented future flags to enable V2 features in Remix version one.

[00:35:36] And I've also seen this this new flat routing convention that they implemented. There also great article that already tried to use this new feature about the ability to create somehow your, your own Remix routing convention.

[00:35:53] So the, the idea is that you can create your own convention, read the files on the file system, and then eventually create the route you want for that file system secure. And so this gives a lot of flexibility. On Docusaurus, we already have a quite similar thing.

[00:36:09] We have a concept of autogenerated sidebar. And it gives the ability also to, to create somehow a tree. And we give the, the ability to customize it.

[00:36:20] Also, they recently released the, the last version of Remix with dev server version two. So as far as I understand, I think the idea if I remember correctly, is that if you change code in the Remix loader, you will also have the hot reloading experience that you expect. While it was not the case before.

[00:36:41] **Carl Vitullo:** Nice.

[00:36:41] Before we jump into Lightning Run. So, Sebastian, do you have more links? You wanna do a full discussion on?

[00:36:45] **Sebastien Lorber:** Yeah, I think it's worth mentioning Panda CSS. It's a new CSS-in-JS solution, , that use a static analysis to, to do many things with with no runtime. Actually, I'm not sure it's completely without any runtime. I think I read there is a very little runtime, but I'm not sure. Now today, the, the devs are like tailwind, css a lot. And there are good reasons for that because you can copy paste code easily and you can also delete code quite easily and, and things keep working.

[00:37:18] So this is a very interesting property. At the same time, Tailwind CSS get a lot of criticism for, for the very long class names. It looks a bit messy for people that don't approve to, to this way of thinking. And Panda that CSS could be a, a greater alternative to, to Tailwind. It looks quite interesting and it's from the chakra UI team.

[00:37:43] I think the Quik framework is also trying to adapt it because they are building integrations and making it work in Quik already. So I think it's a tool to follow and we'll see how the community adapt it. But it looks like like one of the most promising CSS-in-JS solution today.

[00:38:04] **Carl Vitullo:** Cool. Very neat. Oh, I just opened the webpage and the CSS has broken. Haha, not a ideal. Yeah. Interesting though. It's been a, it's been a minute since we've had new CSS-in-JS strategies come out, so I'll have to dive in compared to this and. See what it's introducing.

[00:38:21] Cool. Okay. Let's go to, let's go to a lightning round. Mark, take us away.

[00:38:27] **Mark Erikson:** Okay. Two things real fast. One is that ever since function components came out, there were a couple things that they could not do that class components could. One of those was defining an error boundary to catch errors that are thrown while your component is rendering.

[00:38:44] You still had to use class components to write one of those. There is a PR up that adds a new catch component to React that would basically eliminate the need to use class components for error boundaries. I haven't looked in detail at the api, but there is some form of early EPR up for that.

[00:39:03] So hopefully we'll get that in the next meaningful release. Also, I had filed an issue a couple months ago. Saying that as good as the new React docs are, they really need to add a page on how to use TypeScript with React and Orta Therox, who's been very involved in the TypeScript website docs just put up a PR that adds that page.

[00:39:27] And I, I skimmed it right before this, this meeting, and it looks fantastic. So I'm, I'm very, very excited to see a React Docs page saying, here's how you use TypeScript with React.

[00:39:39] **Carl Vitullo:** Definitely a frustrating experience a little bit. I feel like every time I come back to it after a, a little while away, I need to find some cheat sheet to be like, wait, what am I supposed to use? What am I not supposed to use?

[00:39:50] So I guess that segues nicely into another one, but React.FC is no longer viewed as an anti-pattern for typing React components. Nice to see that, and nice to have documentation on how to use TypeScript with React. Cool.

[00:40:05] Sebastian got any lightning rounds?

[00:40:07] **Sebastien Lorber:** This week in the React Native ecosystem we had we saw a lot of quick demos of running the latest version of React Native on VisionOS the SDK for Vision Pro from Apple. And I found it interesting. I don't know how it works exactly, but apparently the, the React devs had fun with it, so it's already working.

[00:40:28] I know it's it's already working for, for Flutter too, so maybe it was a simple thing to do, I don't know. There are also pull requests to, to add a support for vision or in Cocoa Pods. So I guess it'll become easier to, to add support for our VisionOS in the future in React Native applications.

[00:40:47] **Mark Erikson:** I ran across a website within the last couple weeks called the React Handbook. And I haven't even had time to go through it fully in depth, but it's, it's like an overview and guide to the React ecosystem. Common problems like state management and data fetching and it tries to give some advice on what libraries to use and how to work with things.

[00:41:09] And I had actually tried to, to get a similar kind of ecosystem overview guide website started a couple years ago. And I, I put up a proof of concept page, had some discussion about what I wanted this site to be, but I never got other folks in the community to spend time helping fill out the content. So this React Handbook looks very similar to the kind of idea and the kind of resource that I wanted to help build for the React community.

[00:41:37] And I'm actually still supposed to talk to the primary author of this site about, you know, here's some of the ideas I had and maybe we can like, sort of join forces and help build this one out more.

[00:41:48] **Carl Vitullo:** I know it's lightning around, but that also reminds me of us of our Reactiflux learning page, which has, which you curated with a ton of resources. So yeah, looks like a good resource.

[00:41:59] My next lightning round Chrome for testing, reliable downloads for browser automation. Browser automation's really tough. Puppeteer kind of sucks. Playwright I hear is better. Cypress I have used successfully, but have always run into difficult edge cases, so having a blessed browser version specifically for testing. I see this is titled Chrome for testing. Like heck yeah. That's awesome. This is possibly an absolutely enormous level up for the testing ecosystem and maybe we'll start getting real movement on problems like visual regression tests, which I've seen probably a dozen attempts at companies trying to solve that problem over my 10 years as a web developer.

[00:42:42] **Sebastien Lorber:** Quick link would be shadcn UI, I don't know to pronounce Shadcn, but You probably heard of this trending library recently. It released recently a new CLI that permits to bring a great developer experience on top of the React component, collection because it's not a library, it's a collection of Tailwind and Radix components.

[00:43:05] I was quite impressed somehow in the beginning I didn't understand really the value of this library because somehow it looks like just a registry of of code that you can copy paste. Somehow it's bringing a CLI to, to be able to update the components, eventually use artificial intelligence features to it so that you can type a prompt on the CLI and it'll update the component according to what you, you say you want to do.

[00:43:33] **Mark Erikson:** So at my, my, I, as I said earlier, my day job is working for Replay io and we're building a time traveling debugger for JavaScript. And we just announced something we've been building for the last six to eight months called Replay for test suites.

[00:43:48] And the idea is that, You know, lots of companies have Cyrus or playwright tests. You run them in CI, but often either they flake, you know, they, they fail unpredictably 10% of the time. Or if a test fails in CI, you have no way to go debug what happened to that test. And so what we've announced is that we have the ability to change your test running setup to record all the tests that occur. And then if a test fails, you can open up the recording and time travel, debug that recording. So we, we, we just announced it we're, we're doing a wait list thing. We're gonna be doing some, some onboarding of teams to, you know, try it out and make sure that what we've built actually works.

[00:44:36] But I'm, I'm really excited about this. Like, the amount of time I've spent trying to figure out why end-to-end tests are failing is absurd. And we're talking to companies that, like, they routinely waste tens of thousands of dollars on Amazon costs when tests fail and they have to go rerun the whole thing.

[00:44:52] So I'm, I'm excited for something that will help, help teams fix their tests and run them consistently. Something else that I've been doing myself. So earlier this year I, I built our own, our integration of the React dev tools for Chrome by doing backend post-processing of the recordings to extract the data.

[00:45:18] And we have officially turned that on. And just a week ago I shipped a major new update for it that actually improves on what you can do with the reactive tools browser extension, so the real React extension in the browser. If you record a or if, if you're looking at the website of a production app, you're going to see minified component names.

[00:45:44] And what I've figured out is using time travel debugging, I can go look up the original files and find the original component names and show those to you when you debug a React app in a recording. So you can go from, you know, minified names like xz to the original name, like to-do list item in the recording.

[00:46:06] So I'm really excited about that. And then just yesterday I was hacking on a proof of concept feature that would be able to to look at a React and Redux app recording and pull out information like, here's all the times your selectors ran, here's how long it took to update the ui. Here's like, which selectors were expensive, and hopefully give you like some performance optimization information.

[00:46:32] **Carl Vitullo:** My last lightning round link here Vitest 1.0 roadmap has been shared. I'm using Vitest. I think it's great. I enjoy it. It's very quick. Runs my tests.

[00:46:43] I'm very happy with it. I was always a little frustrated with Jest and it's, you know, parallel configuration. Just one more thing to configure and set up. Cool to see it have a roadmap for getting to 1.0. Excited to have that land.

[00:46:55] **Sebastien Lorber:** Yeah. So my last link will be the Docusaurus version three Alpha.

[00:47:00] So this is what I've been working on in the, in the last month, and it includes MDX 2 and React 18 finally. And So if you use the Qru, I'd be happy to, if you can try the, the Canary versions and. And give me feedback if it's working fine or if you have any bugs, then I would be happy to help you do the upgrade if you have any trouble.

[00:47:25] **Mark Erikson:** Oh, nice. We'll have to carry that out for the Redux docs.

[00:47:28] Okay. Last item I've got is a whole slew of updates for the Redux libraries. So we've published Redux Toolkit 2.0 Beta, which ha Has some small breaking changes to remove deprecated options. It has improved TypeScript types.

[00:47:43] It has several new features like some reducer injection and other stuff. I don't have an ETA on when this will go final because we're trying to update all of our libraries, which with a bunch of stuff simultaneously. Actually, the other, the other big thing we're doing with a lot of these is trying to update the packaging to support better ES module common JS interop, which as we mentioned earlier, is a royal pain.

[00:48:10] But the idea is we're gonna publish major versions of all the Redux related libraries simultaneously. And so I'm juggling like 15 different things in my head trying to keep track of what needs to be done sort of related to that. We just shipped React Redux 8.1, which has dev mode warnings if your selectors accidentally return new values when they should't, which is a common mistake that we see people make.

[00:48:37] So you can think of it, think of it as kind of being similar to React running, use of effect twice to try to catch mistakes. I've got a PR up that will become React Redux nine Alpha. I don't have it merged yet because there's, there's a couple different packaging issues that I, that I ran into that I need to solve there.

[00:48:56] And then I'm, I'm on business travel this week, but literally on the flight out here on Monday, I was experimenting with some proof of concept changes to how React Redux manages subscriptions and updates the ui. Sort of inspired by signals or observables. And the goal is to hopefully make it more optimized and update the UI faster.

[00:49:23] I spent four or five hours hacking on the flight and I at least got something running that passes tests at the moment. But I still need to actually do a bunch of performance testing and see like, okay, this thing that I built, is it actually any better or not? If it works out, it would probably show up in React Redux version nine as a new opt-in hook called use Tracked Selector so that all the existing hooks would, and, and you know, components would work exactly the same as they have, but if you want to make use of this new functionality, there's an additional hook that you could use, which would be more optimized.

[00:50:05] We'll, we'll see if this actually works out or not.

[00:50:08] **Sebastien Lorber:** Yeah, I have another one. There is a new AI framework called AI.JSX, and it's using JSX as a composition block and is meant to be integrated in React applications, but it's not a React renderer. So I don't know exactly how it works, but this look like quite interesting to, to study.

[00:50:30] **Carl Vitullo:** Cool! Okay. Thank you everyone for joining us. One more this month in React. Hopefully we're helping you keep on the cutting edge of the React and web ecosystem. Thanks so much for joining us.

[00:50:40] Keep an eye out. Next week I'm gonna be talking with a conference organizer for React Rally. Yeah, excited to talk, talk with him. It's a great conference. See you guys next month.

[00:50:50] **Sebastien Lorber:** Thank you. See you. Bye.
