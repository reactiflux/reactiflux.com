---
title: This Month in React (April 2023)
date: 2023-03-29
time: 10am PT / 5PM GMT
location: Q&A Channel on Reactiflux
description: "Join Carl Vitullo, Mark Erikson, and Matt Pocock as we break down This Month in React. A lot of news this month, with new library releases, TypeScript 5.1, and React server components. We'll break down what's new in an hour-long conversation."
people: "[Carl Vitullo](https://twitter.com/vcarl_), [Mark Erikson](https://twitter.com/acemarke), and [Sebastien Lorber](https://twitter.com/sebastienlorber)"
---

<iframe src="https://podcasters.spotify.com/pod/show/reactiflux/embed/episodes/This-Month-in-React--April-2023-e23rsht" height="102px" width="400px" frameborder="0" scrolling="no"></iframe>

# This Month in React 2023 April

**Carl Vitullo:** Welcome everyone. Thanks for joining us for April's edition of this Month in React, where we talk about what's going on in the React ecosystem. Mark and Sebastian, could you introduce yourself? [00:00:09]

**Mark Erikson:** I'm Mark Erickson. I'm a senior front end engineer at Replay, where we're building a true time traveling to bugger for JavaScript. Also, I do a whole lot of Redex stuff. [00:00:18]

**Sebastien Lorber:** So, yeah, I'm Sebastian. I created the This Week In React newsletter, and I'm also the maintainer of Docusaurus, which is a static site generator that many direct websites, use today. [00:00:30]

**Carl Vitullo:** I'll kick us off. The way we do these news events is we do a round robin where one of us will introduce a link from the past month and then we all discuss it until we run other things to say. [00:00:40]

## React Visualized, react.gg

**Carl Vitullo:** Yeah, I guess I'll start with React Visualized react.gg. I just saw this, this is from Tyler McGinnis. He does the bites.dev newsletter. He's been in the React ecosystem for probably, at least as long as I have, maybe longer, I feel like. But definitely a, a giant in the ecosystem and excited to have such a high quality looking resource for learningReact. [00:01:01]

**Mark Erikson:** Yeah, so there's, there's a couple things going on here. So Tyler runs a training company called UI.Dev, which makes, you know, a bunch of different courses including React Things, and I think they've had a couple different iterations of some of their different React courses. One thing I've seen Tyler do over the last couple years is that he's, he and this company have made a few different videos explaining various aspects of React, but from my perspective, even more importantly, explaining why some of those things about React exist. [00:01:31]

**Mark Erikson:** This React Visualized thing, I actually saw them do a video version of this first. It talks, it like goes back in history to, you know, 2010, ancient history by this time. [00:01:44]

**Carl Vitullo:** Ancient! [00:01:44]

**Mark Erikson:** And, and it talks about, you know, frameworks like Angular and backbone and or, you know, even, vanilla JS, JQuery and some of the pain points people were experiencing working with those. And then it talks about how React was designed to solve some of those pain points as background information. It's sort of like a history lesson plus a, like why does React exist plus, like what are some of the basic concepts of React as an introduction. [00:02:11]

**Mark Erikson:** He did both a video that I saw posted on YouTube. I'm not sure it's actually, it's actually linked from this site, and then this actual React Visualized site, which is semi-interactive visual page that shows a lot of that same information. I'm a really big fan of the concept, that it helps to understand what problems tools were designed to solve in the first place, in order to help learn them properly. [00:02:35]

**Mark Erikson:** I really appreciate that Tyler is kind of taking that approach with some of this training material. Also, like if you, if you haven't seen any of the videos that Tyler has done, they do a nice little mixture of like, straight up serious explanation and historical clips of people talking at conferences where they were announcing certain tools and then like random, snarky, funny bits. [00:02:57]

**Carl Vitullo:** Nice. Yeah, I do. I do love the, all the context for why React is, I think it's really important to understand where it came from in order to understand why it is the way it is. I think that is a very helpful framing. I hadn't heard about the, the YouTube videos, so, thanks for, thanks for putting that on my radar. I'll see if I can find some links for when we publish the recording of this. [00:03:17]

**Sebastien Lorber:** Yeah, I think the. they build all this because they are releasing a course, pretty soon. That is a work in progress, and they created their own, course platform. So somehow I think this resource is, is a symbol of the, the quality of the course that they try to, to achieve. And it looks like, maybe it'll be the, the best competitor to Josh Comeau's course, I think because, both, look, like very polished. [00:03:42]

**Carl Vitullo:** When your competition is Josh Comeau that you're in pretty good company. Cool. [00:03:46]

**Carl Vitullo:** Yeah, Mark, you want to kick us off with our next link? [00:03:49]

## Immer v10

**Mark Erikson:** Immer version 10 just came out this last week. And for background, Immer is a library to simplify making immutable updates. So if you've used React, or Redux, you're probably familiar with having to do a whole bunch of, like spread the object, spread the nested object, spread `state.a.b.c`, or you know, mapping the arrays, slicing the arrays, concating the arrays, all that kind of stuff. Immutable updates are hard to get right. They're long, they're hard to read. It's easy to make mistakes. [00:04:17]

**Mark Erikson:** Immer is a great library from Michel Westrate, the author of the MobX state management library. It lets it wraps your data in a proxy object, and then inside of that, you can write what looks like mutating syntax. So, `state.value` equals 1, 2, 3, and it traps those changes and turns it into a safe and correct immutable update. And in fact, we've been using Immer inside of Redux Toolkit since the very first proof of concept. [00:04:46]

**Mark Erikson:** Immer has been around for a few years and they were on version nine. Immer still had, various pieces of legacy support. They had a ES5 fullback mode so that it would work in environments that didn't support proxies, which was primarily either IE11 or older versions of React Native before the Hermes JavaScript engine added proxy support. It, it also was trying to be like a little too correct in copying properties on objects. [00:05:14]

**Mark Erikson:** It was doing a lot of like diligent, careful little checks for getters and a bunch of other things, and it was like correct behavior, but that also kind of slowed down the work of making the copies, for the most part, you know, assuming you're dealing with small data that wasn't too much of a per overhead and goodness knows the, the simplicity benefits made it worth it. [00:05:35]

**Mark Erikson:** But for Immer 10, Michel Westrate made a bunch of updates. he dropped the ES5 fallback, and he also kind of adopted a looser approach to copying properties in new objects that is significantly faster. He'd been putting that, he'd been working on that for about the last month. Put out a few betas. [00:05:55]

**Mark Erikson:** We tried them out over in Redux Toolkit, and Immer 10 final just came out about a week ago. It is noticeably faster and it's nice. And I actually contributed a PR to help improve the build tooling setup, and that helped improve some of the module formatting, ESM, CommonJS, and also help shrink the bundle size as well. [00:06:19]

**Mark Erikson:** So I'm really excited about that in general, and especially because that's gonna be included in Redux Toolkit version two, which we've already got in Alphas. So it's sort of a, a free win for a lot of the ecosystem in terms of bundle size and performance. [00:06:33]

**Carl Vitullo:** Nice. Yeah. I know that Immer from the start relied on on a lot of newer JavaScript features. I remember it being like a little bit of a, you know, maybe not a miracle, but a tough project to get it to work in more legacy environments like ES5. So now that they're able to drop some of that code. Makes sense that there'd be a lot of, you know, long tail enhancements, like bundle size and performance. That's awesome. Hell yeah. [00:06:58]

**Mark Erikson:** Michel Westrate is a genius. [00:07:00]

**Sebastien Lorber:** Yeah, I actually, I've seen a few, competitors projects. I don't know, but maybe, one or two were claiming to be, much faster than ImmerJS, but I think maybe they didn't support the older environments in the first place. So of course, it's, it's easier when you reduce the scope of, the library. [00:07:20]

**Mark Erikson:** Yeah, I, I saw two different Immer equivalants, or competitors, pop up within the last few months. one is called Mutative and the other is called Structura. and they, they both perform the same basic function, wrap your data and a proxy, track the updates, make 'em immutable. [00:07:38]

**Mark Erikson:** On the Redux side, we've had Immer built-in as a hard coded, non-negotiable part of `createSlice` from the beginning. Partly because we think Immer is using Immer is the right choice. But like we've had people say like, &quot;I don't wanna use Immer.&quot; And we're like, then don't use Redux Toolkit because we think it's the right thing to do. And we're not making that configurable in any way. [00:08:00]

**Mark Erikson:** Because a couple potential competitors did come out, we actually have an experimental PR over on the Redux Toolkit side that tries to let you swap out which immutable update library gets used inside of like create slice and stuff. It's tough because we actually use those imports in a lot of different places and so, you know, trying to figure out how to sort of turn them into like factories that let you configure it is tough. [00:08:27]

**Mark Erikson:** And I'm, I'm not sure if that'll actually end up getting merged, but given that there's a couple other equivalent tools for immutable updates, we figured it was worth at least kind of playing around with it a little bit. [00:08:38]

**Carl Vitullo:** Nice. Yeah. Makes sense. [00:08:39]

**Carl Vitullo:** Yeah. Sebastian, you wanna take us off? [00:08:41]

## NextJS 13.3

**Sebastien Lorber:** yeah. Well, wanted to to talk about, the new NextJS 13.3 release. I think this one is interesting, in particular for one thing that I am particularly excited about. It's not the parallel routes and things like that, but more, the, the static export because, I think they, they don't highlight this enough in their marketing, but when you build the right server components with NextJS, by default, they are static. And if you don't choose any dynamic api, like getting the error of a request or getting the querystring or things like that, the server component will actually run at build time instead of, run time. So I think it's a really interesting property you can, configure if you want the server component to be static or to be dynamic. [00:09:29]

**Sebastien Lorber:** But by default, it tries to automatically detect if you use any dynamic API and decide for, for itself if it should run at, build time or at run time. So, I think this is really, really interesting and they now support the static export. So basically this means if you don't choose any dynamic API anywhere in your app, you can export your, NextJS website statically, and all the server components will run at build time. [00:09:58]

**Sebastien Lorber:** I think it's quite exciting, and also this works with, nested router. So the static or dynamic nature of the, of your components will depend on the root segments. So, for example, you can have a part of your page that is dynamic and some other part that is static. In the end, they really try hard to, to make, most of your components static, if it's possible. [00:10:21]

**Sebastien Lorber:** And the, the rest will be dynamic, but they don't render too much things. And try to, to build, as much as possible at build time, all the server components. [00:10:32]

**Carl Vitullo:** Nice. Yeah, that's really, that sounds really cool. I guess I, I thought that they already had something for a static export. I know that we, we use next for the Reactiflux website, I think that I did some kind of static export. [00:10:46]

**Sebastien Lorber:** Yeah, it, it existed, but not for the, for the new app root directory, so it was not, working for server components yet. [00:10:53]

**Carl Vitullo:** gotcha. Okay. That makes sense. Okay. Yeah, I. I haven't touched that in probably a year now, so it definitely did not get the app router in there. Okay, cool. Very nice. Yeah. I also see that they have new metadata API and dynamic open graph generation. Those both sound pretty cool. I know that a lot yeah, just open graph and the review image. [00:11:15]

**Carl Vitullo:** I think that's, I feel like over the last year or two, I've seen a lot more people, especially for like their blogs and their personal sites, treating that open graph as a, more of like a first class feature, rather than just sort of like an afterthought of copy some text outta the page and boom, there you go. [00:11:32]

**Carl Vitullo:** So having some more first class support for that from Next, seems like it will enable a lot of really cool features. [00:11:40]

**Sebastien Lorber:** Yeah. actually I'm, I don't know exactly exactly how the integration work, but as far as I understood the OG image, package that they created only runs on Vercel because it requires some tooling available on the edge to, to make it work. so I wonder if it doesn't create coupling between NextJS and Vercel as a host. [00:12:04]

**Sebastien Lorber:** So, I don't know. It's, it's not, mentioned in the blog post, so, so maybe I'm wrong, I don't know, but, recently there was someone that posted a blog post that says, &quot;I am able to run a Vercel OG image on Netlify,&quot; or another host, I don't remember which one. And it required some, some tricks to, to make it work. [00:12:24]

**Sebastien Lorber:** So it was not so, so easy. And I'm not sure if this package works everywhere yet. [00:12:29]

**Carl Vitullo:** Gotcha. Yeah, I know that's been a, a pretty common point of negative feedback about Next is that everything works on Vercel first. [00:12:36]

**Mark Erikson:** Yeah, that's that. That was the same thing that was going through my mind. So with a couple caveats that I have not used server components yet, and frankly, I've never worked on a project that needed SSR in any form. So I can't speak from trying stuff out myself. First it's very, very good that next does have a static export option, and I know that the new React docs where they're talking about picking a framework, do try to, you know, actually link and say that hey, you can use next without an actual running next server instance on your backend. [00:13:11]

**Mark Erikson:** And I've seen Dan trying to, you know, help clarify that on Twitter. But I think some of the unease that people have with this, you know, this shift in advertising and direction from the React team is that they feel like they're being pushed towards next and Remix and stuff. Where the default path is you need to have a server running. [00:13:35]

**Mark Erikson:** It's going to work best on Vercel. It's very easy to end up using features that require, you know, a whole bunch of additional entanglement. And yes, the options exist where you can skip that stuff, but the default happy path is adding all the, you know, all these dependencies and servers and stuff. And it, it's tricky to kind of say separate, like you can go without that stuff, but you have to do work to try to skip out on that. [00:14:01]

**Mark Erikson:** I think that's what's, you know, kind of adding to this feeling of concern. [00:14:06]

**Carl Vitullo:** Right. Yeah. Makes sense. But you know, I also definitely understand the motivation for, you know, there've been a lot of new, new ways to approach web development over the last couple of years with like ,edge workers and things like that. And I think that there's a lot of really exciting possibilities coming out of that. [00:14:23]

**Carl Vitullo:** So I understand the impetus to try and offer like first party ways to explore that. And yeah, I mean, I guess, you know, control over the server definitely makes it a lot easier to offer a good experience. But yeah, I guess I understand both sides of this, which is not a very exciting take (laughter). [00:14:41]

**Mark Erikson:** Quick side note, Rich Harris recently did a fantastic talk. He, he gave like his thoughts on 10 different topics and he was rating them in terms of spiciness and, even the highest spicy rated takes weren't necessarily all that spicy. It was actually very thoughtful, deep nuanced discussion of trade offs of different tools and scenarios. [00:15:02]

**Carl Vitullo:** Yeah, that's definitely someone I would expect to, or that I would have a lot of trust in to talk about. Topics like that with a lot of nuance. [00:15:09]

## New React documentation translation

**Carl Vitullo:** All right, I'll move this on with our next, this is, you know, maybe not a whole lot to talk about here, but the new react.dev documentation site is getting translated. [00:15:18]

**Carl Vitullo:** I know that that was a, you know, that was one of the, points of negative feedback I heard about it is the old docs were in available in so many different languages and the new new docs were not launched with support for those. So good to see it as a fast follow to the launch. Looks like it's been in in the works for a long time and seeing a lot of work done. [00:15:37]

**Carl Vitullo:** I see a huge, huge list of translations. [00:15:40]

**Mark Erikson:** And I know that as a whole, the reason why the docs were delayed so long was Dan was waiting to, was trying to get the content to, you know, a sufficiently complete level, and also make sure that the explanations and the tone were the right way. It's kind of hard to really start translation when you're still iterating on that process. [00:16:01]

**Sebastien Lorber:** If you refactor everything, it's a pain for the translators because they have to, the, the strategy that they used is based on a repository, so they have to, some of the, there is the main repository with the trans, the English language, and there are folks for each language and. They synchronized the new documentations from the upstream language to the older folks. [00:16:25]

**Sebastien Lorber:** They have a bot to automate this, but, still I think they, it can be a bit painful to manage all this and to ensure that there are not, merge conflicts between, the, the current translations and the new documentation that the red car team is aiding. So, it's better to, to have most of the content quite polished in the first place before starting the the translation effort, I think. [00:16:49]

**Carl Vitullo:** Yeah, definitely makes sense. Every language you wanna do it in explodes the amount of work or you know, it adds one more copy of it. So given that, I think, looks like the list of language they support is easily 15 or 20. So definitely trying to write all of those in parallel is just like a non-starter for that. So yeah, glad to see you coming out. [00:17:11]

**Sebastien Lorber:** Because the translation workflow even is a bit complex, so you have to onboard people if they are not used to it. So [00:17:19]

**Carl Vitullo:** Right, [00:17:20]

**Sebastien Lorber:** this is not easy. I think the, hopefully they, they're able to split the work, between, each site. So, each site can somehow autonomously work on the translation. But, you have to explain to each main language contributor how it, it works to. [00:17:37]

**Sebastien Lorber:** To make them productive in the translation process. [00:17:41]

**Carl Vitullo:** Right, right. I've only ever dabbled in translation on apps that I've worked on. You know, none of them really had serious international usage, so it wasn't a major impediment, but writing documentation to explain difficult technical concepts in 20 different languages. Like, oh, oh boy. What a task. [00:17:58]

**Carl Vitullo:** Well, Mark, what's up on your list? [00:18:00]

## TypeScript 5.1

**Mark Erikson:** So TypeScript 5.0 just came out, and hot on the heels is TypeScript 5.1 in beta and one of the changes there has to do with TypeScript support for JSX syntax and type checking what gets returned. Now I only barely understand what's going on here, so you know, please, please take my explanations here with a grain of salt, TypeScript support for JSX was basically originally started to support React. [00:18:28]

**Mark Erikson:** But JSX is not a React only concept today in a lot of other frameworks like Solid use it. And so TypeScript has had to do this kind of difficult dance internally where they need to be able to handle JSX but not lock their support of it to only working with React specifically. It has to be a little more generalized, and that's had limits on how the, the type checking process can work. [00:18:55]

**Mark Erikson:** This has actually had ripple effects on how you can use TypeScript in your React components. And the biggest pain point is that due to something about the way JSX elements were implemented, TypeScript would actually yell at you if you tried to return some of the newer, non-JSX return values from a component. [00:19:15]

**Mark Erikson:** So, you know, if you tried to return like strings or arrays from a function component, it's totally legal JavaScript and as of like, you know, React 16, it's totally fine, but TypeScript would yell at you and say, &quot;you can't do that,&quot; and you end up having to wrap that in a fragment that serves no purpose other than to satisfy TypeScript. [00:19:34]

**Mark Erikson:** So, The React team has been working on trying to allow some components to do things like return promises, and of course, TypeScript would not allow that given its current type checking support. This discussion started like, two or three years ago and I think it's been a very long running issue, and the TypeScript team just merged a PR that somehow alters how TypeScript interprets and type checks JSX syntax. [00:20:02]

**Mark Erikson:** And this seems to loosen up what it will allow and is apparently going to make it easier to do things like returning a string or an array from a component. And it'll be legal as far as TypeScript's concerned. And it will also unlock future changes for things like returning promises from components. Basically TypeScript is trying to make it better and easier to return a broader array of things from components with JSX syntax. [00:20:30]

**Carl Vitullo:** Yeah, I definitely remember encountering those sort of type bugs where I know that this is a valid thing to return from this component, but actually getting TypeScript to recognize that was a pain in the butt. You know, figuring out what type I'm supposed to use to describe the component, whether that's React.FunctionComponent, or you know, React.FC or whatever it is. So I'm excited to see this improve the situation. [00:20:54]

**Mark Erikson:** The default recommendation has been just don't use it at all. Provide a type for the props and let ts figure out what the return type is. [00:21:02]

**Carl Vitullo:** Hmm. Yeah. Excited to see that get better. [00:21:05]

**Carl Vitullo:** Cool. Yeah. Sebastian, you wanna take us on our next news item? [00:21:08]

## MillionJS, one-function React perf wins

**Sebastien Lorber:** Maybe you've seen there is a new package called, MillionJS. I think it's, it's interesting and it, it got my curiosity. The idea is somehow to, to make, to improve the performance of the virtual dom by using, a block based virtual DOM. As far as I understand it, the idea is that if you have two virtual DOMs that have exactly the same size and structure and things like that, you are able to optimize this and perform the diff faster. [00:21:37]

**Sebastien Lorber:** And recently there was, a new version of MillionJS, which support, NextJS too. So it's possible to integrate into an existing app to make it faster. And, there's also a repository that now is there for learning purpose called HundredJS. And the idea is that, it provides a very simple, implementation of a block-based virtual DOM, but you can, understand, the idea. [00:22:04]

**Sebastien Lorber:** So I don't know exactly how it works yet, but, I found, it was quite interesting somehow the first time I came across this project, I thought, oh, they have a beautiful landing page, and the developer is 16 years old or something like that, I don't remember, but he's very young. I somehow dismissed this project, but, now it, I, I get more curiosity for it. I think, maybe this will be, an interesting thing, to, to follow in the years to come. [00:22:30]

**Carl Vitullo:** Yeah, interesting. This is, this is a new project to me, but you know, anything that promises to make stuff faster just by wrapping it into function, is both interesting and draws a little bit of skepticism (laughs). I've definitely written some components, or rather some helper functions that look like this to solve performance problems for myself. [00:22:50]

**Carl Vitullo:** The main situation I'm thinking of is where I have a very slow, you know, maybe it's very complicated or something, some slow component as part of a larger page. And some number of years ago I wrote a, a little helper that just, it, it was basically sort of a, a cheap async rendering helper. It would just render nothing for one render pass and then render the actual children. [00:23:13]

**Carl Vitullo:** Yeah, I used that on a very complicated list page, and it took initial render down from like over two seconds to tens of milliseconds just really helped the sense of interactivity, if not the total overall render time. You know, the, the actual render time didn't change that much, but at least you can interact with the page while it's doing all of that. [00:23:32]

**Carl Vitullo:** So I, I wonder if it's doing something similar to that, just enabling rendering to split up over multiple passes. But yeah, cur curious to dig into that more. [00:23:41]

**Sebastien Lorber:** Yes, I'm, I don't know exactly. I, I can tell, but this is something interesting to follow, I think. So we will figure out, soon, I think (chuckles). [00:23:49]

**Carl Vitullo:** Cool. Yeah. I guess I'll pick us on to the next one. [00:23:51]

## React Server Components

**Carl Vitullo:** So this is not necessarily one single news article, but definitely a topic of discussion, React Server Components. There's been a lot of news and discussion coming out over the past month or so. I saw Dan Abramov did a quiz thread on Twitter. Looks like it answers a lot of questions about how React server components behave. [00:24:11]

**Carl Vitullo:** Definitely interesting information in there. I have not yet really used React server components at all, so I , I don't feel like I can speak too deeply on this subject, but Mark, Sebastian, have you used server components much? [00:24:23]

**Mark Erikson:** Not in the slightest. [00:24:25]

**Carl Vitullo:** Hahah. [00:24:26]

**Sebastien Lorber:** No, (laughs) no, I mean, I only work on Docusaurus, so there is no Server Components yet, but I, I wish, to do that, soon, but need to figure out a few things before. [00:24:38]

**Carl Vitullo:** Yeah. Yeah. I feel that. [00:24:40]

**Mark Erikson:** And, and similarly, like my day job at Replay is, replay is entirely a classic client side, single page app. And between that and all the Redux stuff, I don't have time to go play with other new shiny things. [00:24:53]

**Carl Vitullo:** Right, right. Yeah, I know that Dan has been on a, a bit of a, a bit of a PR blitz. Yeah. He's been on a tear doing all sorts of events and talking about React Server Components a lot. We've talked briefly about doing an event here, and maybe having an ongoing channel for people to ask questions about it. So yeah, stay tuned for news about that. [00:25:15]

**Carl Vitullo:** But, nothing to announce at the moment, but yeah, so I saw that quiz thread from him. I also saw a great sort of history of that I just posted in the chat. it talks a lot about X H P and hack and Facebook code going back to 2010 era. Definitely. Yeah. I mean, like we're talking about with React Visualized, I think the history of why things came to be what they are is super helpful for understanding what they are. [00:25:42]

**Carl Vitullo:** So I, I think that's a, I think that's a good thread to read, to understand what's going on. [00:25:46]

**Sebastien Lorber:** Yeah, definitely. [00:25:47]

**Carl Vitullo:** Yeah. [00:25:48]

**Sebastien Lorber:** I think the, the, the quiz is very interesting because somehow we challenge your, your intuition that you can have. And honestly, I, I, I think I got all free and sales correct, but, I wasn't absolutely sure about, any of them (laughter). So this is, this is really not easy and I think many people, don't have the intuition of, of several components. [00:26:09]

**Sebastien Lorber:** So this is really worth to, to take it and see if you, if you have the intuition. [00:26:14]

**Carl Vitullo:** Yeah, definitely. [00:26:15]

**Mark Erikson:** It seems like one of those things where half the people are gonna get this wrong either way. [00:26:19]

**Carl Vitullo:** Right, right [00:26:20]

**Sebastien Lorber:** (chuckles) [00:26:21]

**Carl Vitullo:** Definitely a, a big iteration on the React mental model. So I'm sort of, I'm sort of waiting for the dust to settle before I dig too deep into it. Just, you know, a lot of churn going on, a lot of innovation and discussion, and I'll, I'll come through a little bit later and see what it all looks like, but it's definitely a lot to stay on top of. [00:26:40]

**Carl Vitullo:** Cool. Yeah. And one more link I wanna paste from one of our, one of our community members, Lenz Weber-Tronic, phryneas' post is, looks like he's looking into React Server Components, how to connect it to Redux Toolkit in Apollo. [00:26:54]

**Mark Erikson:** Yeah, so Lens is my Redux Toolkit co-maintainer created our RTK query data fetching library, and he also recently got hired by Apollo to work on Apollo client. So we've, we've had a couple of different discussions with the React team about, you know, how our external data libraries supposed to integrate with suspense. [00:27:14]

**Mark Erikson:** And the shorter, the short answer is, &quot;we're still not really sure, go make new APIs instead of building that into your query hooks.&quot; But then he's also been doing a bunch of research over the last few weeks into, how you server components work, and how would you integrate external data fetching libraries into server components in the lifecycle? [00:27:34]

**Mark Erikson:** And he's only, he's only hinted at bits and pieces and some of that, some of those hints were in this, this Twitter thread, but it sounds like he's been trying to put together a fairly large write up to start a discussion and ask some questions. So I am actually legitimately curious to see what his summaries are and what his questions are because again, like I don't have time to look into this myself, so I'm glad Lenz does. [00:27:59]

**Sebastien Lorber:** Yeah. [00:27:59]

**Carl Vitullo:** Yeah, definitely very curious to see what he, his conclusions are. Yeah, I mean he's been active in Reactiflux for years and very helpful and thoughtful, so very much curious to see what he thinks. [00:28:10]

**Sebastien Lorber:** Something, I'm thinking about is, you know, we already discussed that in the past, but I think it's a bit related, is the new AsyncContext proposal, which is a stage two for standardization in JavaScript. I have the feeling that the, the idea of this API could be to, to use React context in a cross platform where in both our components, when they use I think, weight and, also in a regular components that we use today on the client and things like that. [00:28:41]

**Sebastien Lorber:** I think it's interesting because, it could enable you to provide the, the, the context of maybe Apple, Apollo or React Query to your tree. No matter if it's a client component or a server component, it should be able to work. So, I look forward to, to see this api, become adopted everywhere and see if, and see if it unlocks any use case. [00:29:06]

**Sebastien Lorber:** I think Sebastian Markbåge posted something, recently and, and somehow it summarized the idea that, that I tried to, to explain is that you could use eventually the standard, I think, context feature as React context directly. So I think this is interesting because this would not only work with, React hooks, but also, as a regular, JavaScript feature that we can work both on the edge, on the NodeJS runtimes, and also on the client. [00:29:38]

**Sebastien Lorber:** Maybe it's not what is, maybe it's not, it's not the challenge that Apollo is facing to integrate with several components. I don't know. But I think it's one of the piece that could make it, easier. [00:29:49]

**Carl Vitullo:** Yeah, definitely always nice to rely on standard browser features rather than something hand rolled within a library. I'm sure React would love to have some sort of standardized context. [00:30:00]

**Mark Erikson:** Use the platform. [00:30:01]

**Carl Vitullo:** Use the platform! [00:30:02]

**Carl Vitullo:** Cool. Yeah. Mark, what have you got next? [00:30:06]

## Recommending uncontrolled components

**Mark Erikson:** Okay, so the existing React Docs or the, I guess now the, the Legacy React Docs always had a page on forms. And the standard direction in that docs page was write controlled inputs where React is always in charge of pushing the current value of the input into the DOM. And your job is to provide, you know, here's what the current value should be and here's, you know, a, a callback that sets state and that went along with Reacts philosophy that, you know, the UI should always be based on the state. [00:30:42]

**Mark Erikson:** And that made this idea of uncontrolled inputs, sort of like a, a very non idiomatic approach within the React ecosystem. Within the last few years, we've seen a little more acceptance of using uncontrolled inputs as being valid. The library React Hook Form, I believe, uses uncontrolled inputs and, Remix has been doing things with that as well. [00:31:08]

**Mark Erikson:** So the new React docs are complete as far as the learning content, and they're basically complete as far as the API reference material, but they don't have a lot in the way of usage guide pages. There's a lot of pages that just simply need to be written from scratch for things like testing, and that includes forms. [00:31:29]

**Mark Erikson:** There, there is no specific page on how to use forms in the new React docs. However, what I did not realize is that the API reference section actually has some pages on how to use specific HTML tag types in React. That includes the input tag and this reference page on using input tags actually talks about the difference between controlled and uncontrolled inputs, and basically recommends using uncontrolled inputs by default. [00:32:05]

**Mark Erikson:** This is actually a really big shift in what the React team is suggesting people should do. And it there, I think there's a few different reasons for it. One is that, you know, setting up controlled inputs has always taken work. You have to have the useState, and the callbacks, and the value, and you're putting in the extra effort to make things consistent. [00:32:26]

**Mark Erikson:** And then I think it also kind of ties into some of the React server components work that they're doing where they want to be able to pass form state back to the server processing. And I guess that seems to work a little better if the inputs are uncontrolled. So I, I have not even gone through this input docs page in detail. [00:32:47]

**Mark Erikson:** I didn't realize the Docs page existed until I saw Dan tweet about it, and I definitely did not realize that the React team was shifting their recommendation there. So it's, it's definitely worth going through and trying to read that page and see what it has to say. And I don't know, like it, it's that shift in patterns and recommendations again. [00:33:05]

**Carl Vitullo:** Yeah, I'm, I'm sort of ski skimming that page while you're talking a little bit and. Yeah. One thing that jumps to my mind is the use case of trying to provide very, very high quality validation for input values, and it's been my experience that the browser doesn't expose very good primitives for validation. [00:33:27]

**Carl Vitullo:** I think at best you end up, you can do like, what, a regex based on the value? But you know, like especially if you need like some sort of dynamic validation. Like for instance, I've done password inputs when signing up that hit an API to see if the input password is too similar to, you know, publicly cracked password lists or otherwise perform some sort of processing that requires an async step, and going from an uncontrolled form to a form that has advanced validation, like that seems like a pretty big lift. [00:34:00]

**Carl Vitullo:** So I, I, I generally agree with the idea that you should lean on the platform as much as possible. We should not write JavaScript that duplicates behaviors that the browser gives us free. But yeah, there's definitely some, some gaps in what the browser offers around forms and validation. So that seems like it's gonna be a bit of a, a point of friction on an ongoing basis. [00:34:21]

**Carl Vitullo:** I guess one other thought I want to connect it to, I just had opportunity to see the React documentary again, and it was funny hearing, I can't remember the exact line, but somebody mentions that, nobody's ever written a form and React as of, you know, when it was being open sourced. [00:34:37]

**Carl Vitullo:** And so it's, it is funny to see now, yeah, no, actually 10 years later. Cause that was uh 2013. Forms in React is still a little bit of an open question. There still isn't complete guidance for what it should look like. [00:34:49]

**Sebastien Lorber:** I think the, the thing is, maybe the shift happens because of Remix, because, you know, there, there's a lot more traction for progressive enhancement these days, thanks to Remix, I think, it existed before, but not much in React ecosystem. And to, to, to have a progressively enhanced form, you need it to work without React somehow. [00:35:10]

**Sebastien Lorber:** So if you, if you make it, controlled, you are basically implementing features that will only work if JavaScript is there. So I think also this, this shift is happening because, because of progressive enhancement and the need for a form to be able to just work with HTML and a server somehow. [00:35:28]

**Carl Vitullo:** Yeah, for sure. [00:35:30]

**Carl Vitullo:** Cool. Yeah. Sebastian. Wha- what's your next news article? [00:35:33]

## Super Apps in React Native

**Sebastien Lorber:** Let me check. I don't remember. yeah, it's, Super App development. There is, a new resource from Gold Stack, the React Native company that is presenting the, the idea of Super App development. It's not the first time, but I saw that. I see blog posts of them, mentioning this idea, it's, the, the concept of Super App is quite popular in, in Asia. [00:35:57]

**Sebastien Lorber:** For example, there is the WeChat app in China, I think. And the idea is that somehow you gather many, many small apps inside a big host app and your users, users are able to seamlessly transition from one app to the over. And, somehow it requires, some, a bit complicated things to, to, to set this up. [00:36:17]

**Sebastien Lorber:** for example, you don't, you, I think you can't use the default React Native bundler. You have to use a repack, which is, somehow a layer above, webpack to make it work and have got spliting module federations and and advanced webpack features to make this work. So I, I don't know exactly how you set this up, but they, they provided a comprehensive resource with a step-by step, tutorial. [00:36:41]

**Sebastien Lorber:** And there's also, a showcase repository that you can try so you can actually, build your super up locally and see it work live. And also, I thought there was something quite interesting, but I came across for some place that, I think, I'm not sure, but I think the PlayStation 5 UI is actually a super app built with React Native. [00:37:06]

**Sebastien Lorber:** And, I will link a with, in the chat to show you why I think that, but, maybe I'm wrong. I don't know. I think it's, it's quite exciting to, to see that, first, React Native is running on PlayStation 5 and, that this is a super app maybe. [00:37:22]

**Carl Vitullo:** Oh, interesting. Wait, PlayStation 5 UI is implemented and React Native? Is that what you said? [00:37:27]

**Sebastien Lorber:** Yeah, actually I think they started to use React Native, already at, PlayStation 4, according to the comments. [00:37:35]

**Carl Vitullo:** Oh wow. That's pretty cool. I didn't know that. Very nice. Yeah, the, the super app, as they describe it, I see that they have a comparison to micro front ends and definitely sounds a little bit similar, sort of a architecture around. Structuring an app. [00:37:50]

**Sebastien Lorber:** This is, yeah, I think perhaps is the, the mobile term for micro front ends on the web. So it's exactly the same, I think, module federations and things like that. So, [00:38:00]

**Carl Vitullo:** Yeah, it makes sense. And I think both of those are, or you know, my understanding of micro front ends is it's an architectural decision that is influenced by the size of the team, sort of a, it's maybe not desirable on its own. But in the context of a large company that has, you know, say 80 developers, 80, 100, 200 developers, all working on the same application, getting to a place where you aren't constantly stepping on each other's toes with merge conflicts, and it's just swapping out behavior of shared primitives all the time. [00:38:36]

**Carl Vitullo:** I think it— that's sort of the context where these super apps or micro front ends are really important and really, not just important, but kind of necessary for enabling that level of, collaboration. [00:38:47]

**Sebastien Lorber:** Yeah I think, this is necessary. I think I, I had a case, at work a few years ago where, They wanted to, to build a, a very large application for, a big, company in France. And they wanted to so that each part of the app would be implemented by a different contracting team. basically, we all share the same dependencies, but there are like 10 teams from different companies working as a contractor for the client. [00:39:17]

**Sebastien Lorber:** So this looks like a, a really good use case for, for using, this kind of, of architecture because, you know, otherwise it's, it's a big mess because you, someone in another team will upgrade a dependency and then you will have a. Really complex side effects for all the other teams and or everybody will, fight again each server to reject the responsibility for, for, for the bugs (laughter). [00:39:44]

**Carl Vitullo:** Makes sense. Oh man. That's, having multiple different contracting agencies work on the same app. That's like an extra level to that. Because I imagine you need various Yeah. Controls to keep different people from accessing parts they're not authorized too. Yeah. Wow. [00:40:01]

**Carl Vitullo:** Cool. Yeah. Well, I'll kick us off with a lightning round. [00:40:03]

## ⚡️ Core team layoffs

**Carl Vitullo:** Just a, a quick shout out that I think is nice to do. A number of core team members for React and, you know, the surrounding ecosystem were hit by layoffs at Meta. Just a, you know, poor run out for our, for our Lost Friends. [00:40:18]

**Carl Vitullo:** Just looks like it was a, among others. This is the list that I am aware of top of mind. [00:40:24]

**Carl Vitullo:** Mengdi Chen from the React Dev Tools. Robert Balicky from Relay. Matt Carroll doing devrel for React, and Sean Keegan also doing devrel. Yeah, layoffs, they suck, but also seeing Tom Occhino and Dominic Gannaway joined Vercel. So more, you know, legendary React figures moving over there. A lot of, lot of churn going on team right now. [00:40:47]

## ⚡️ React Miami

**Mark Erikson:** React Miami was this last week and it was an amazingly well done conference. Both Carl and I were there. I, I got to speak. It was excellent, organized. The rest of the speakers were wonderful. The atmosphere was amazing and I got to spend a lot of time talking to, you know, both people that I know from online, from the conference circuit, but also just talking to lots of, you know, sort of lots of random people who are working in different jobs, solving different problems. [00:41:14]

**Mark Erikson:** It was just a wonderful experience. [00:41:16]

**Carl Vitullo:** Echoing that, absolutely amazing. [00:41:19]

**Carl Vitullo:** Cool. Yeah. Sebastian, you got a lightning round link. [00:41:21]

## ⚡️ react-three offscreen

**Sebastien Lorber:** I just wanted to mention, react-three offscreen. The idea is that, you use a react-three fiber to run the three descents. And now it supports to be, to run inside a web worker. So basically you, you use something, a standard web API called Offscreen Canvas and it permits to, to draw inside the web worker. [00:41:45]

**Sebastien Lorber:** So basically you run down your three design inside another thread, and it doesn't block your UI thread. So, It's quite interesting for performance reasons because you can integrate, complex, 3D animations and it doesn't block the, the rest of your website. So I think it's interesting to, to use. [00:42:04]

## ⚡️ Lingui v4.0

**Carl Vitullo:** Very cool. I'll take next Lingui 4.0. I've used Lingui in the past, it's a internationalization framework. I've tried a couple of different internationalization frameworks and wasn't super happy with them, but Lingui actually worked pretty reliably, when I did need to use it. So just shout, shouting them out. [00:42:23]

**Carl Vitullo:** New major release. [00:42:24]

**Sebastien Lorber:** Yeah, actually I'm, I'm in touch with the, the guy, that sent me this link for just today, and I, I asked him to, To write a blog post and maybe we will feature it better in the newsletter next week because, I think may, it looks interesting. It looks like a bit react-intl, but, provides some additional, developer experience on top of it. [00:42:48]

**Sebastien Lorber:** I think, I mean it's not, a layer on top of, react-intl, but it's quite similar. It's using the ICU message syntax and, quite similar features, like the ability to extract the translation from the cloud and things like that. So I think they will, they will write a blog post to present better this new release quite soon. [00:43:10]

**Carl Vitullo:** Cool. Yeah. Maybe we can go go in more in depth next month. [00:43:13]

**Sebastien Lorber:** Yeah. [00:43:14]

## ⚡️ Redux Toolkit 2.0 alpha

**Mark Erikson:** I've got a, I've got a semi self plug. So we've been working on the Redux Toolkit 2.0 Alphas, and we're currently on 2.0 Alpha five. The RTK 2.0 is working on improving our ESM common JS package formatting, modernizing the JavaScript output and. We're moving a few bits of deprecated options and APIs and generally trying to make things faster. [00:43:40]

**Mark Erikson:** we've also got a couple new features in there, so they're tagged as Alpha because we're still working on changing a bunch things, but the code that's in there is stable and we'd really encourage folks to try out the Alphas and give us feedback like, does this work in your app? Does it accidentally break anything? [00:43:56]

**Mark Erikson:** The current Alphas have Emerton final in there, so you get some of the speed benefits that I was talking about earlier, and then something that I hope will end up as part of RTK 2.0. Final. I've been experimenting with a couple new memorization options for the Reselect library. One of them is very inspired by what the Ember folks have done with auto tracking field accesses. [00:44:21]

**Mark Erikson:** So the idea is that. It knows exactly what fields you're accessing and only recalculates the select results if those fields got changed and not other fields. There's also another one that I was playing around with that is basically a direct copy paste from a React internal cash implementation that uses weak maps to track arguments. [00:44:42]

**Mark Erikson:** Right now none of that is released. I have a PR up over in the reselect repo that has like the initial, like &quot;I've been hacking on this and it sort of seems to work&quot; graphs, so I'm hoping to go back and work on that further. Assuming those work out, they will either go into Reselect 4.2 or Reselect 5.0 depending on what I feel like. [00:45:04]

**Mark Erikson:** And then one way or another that the new version of Reselect would get included in RTK 2.0. So trying to find ways to make things better. [00:45:13]

## ⚡️ Netlify framework popularity

**Carl Vitullo:** Cool. Heck yeah. Yeah. well I saw the framework popularity on Netflix, or Netlify blog post. Definitely pretty interesting data to look at. They broke it down by free sites, paid sites, and enterprise sites. Just a couple of notable, I'll, I'll call out, Create React App Next, and Gatsby, I think those were, Some of the interesting results. [00:45:34]

**Carl Vitullo:** So free sites, 40% of them were using Create React App that goes down to 23% if you just go by paid sites and all the way down to 18 if you're looking at Enterprise. So yeah, Next, and Gatsby were 2 and 3. Those are pretty reliably the top three, and Next only gets more popular as you go up in price scheme. [00:45:56]

**Carl Vitullo:** Yeah, I thought it was a pretty interesting bit of data to look at. Definitely impressive to see how well Next is doing. Although, you know, one thing I was surprised to see missing here was Remix, but I guess they don't really support so much of a static export, and that's kind of Netlify's bread and butter. [00:46:14]

**Sebastien Lorber:** There is a Remix adaptor for Netlify, I think, but, yeah, it's always complicated to, to market another platform, then, when it's not maybe the first class to support and, [00:46:27]

**Carl Vitullo:** Yeah, sure. [00:46:28]

**Sebastien Lorber:** Although was happy to, to find out that, Docusaurus, has a 4%, share in the enterprise site. So this is, there are more Docusaurus sites on Netlify than, Remix sites on, on Netlify. [00:46:43]

**Carl Vitullo:** Oh, funny. [00:46:44]

**Mark Erikson:** I think the other interesting takeaway there is the popularity of Create React App in, in those categories, which, you know, kind of goes to the difference between like the, the chatter on Twitter and, you know, all the, the emphasis from the React team we've seen versus, well, okay, here's how stuff is actually being used in the real world at the moment. [00:47:02]

**Carl Vitullo:** Right. Hobbyists versus professional maybe. [00:47:06]

**Carl Vitullo:** Yeah. Cool. mark, anything else you wanna call out? [00:47:09]

## ⚡️ PartyKit

**Mark Erikson:** One other little item. So Sunil Pai, who's a former member of the React Team and has been revolved in the re in the React ecosystem for many years, has been doing a startup called Party Kit where he's building infrastructure for real-time multi-player applications. You know, the, the kind of thing where you see like 30 different people interacting with the same whiteboard simultaneously, and he just open sourced the party kit repo at React Miami. [00:47:39]

**Mark Erikson:** I know it's a thing he was very, very excited about and I haven't had, again, haven't had a chance to play with it, but it looks really cool. [00:47:48]

**Carl Vitullo:** Yeah, agreed on all counts. I haven't played with it yet, but I've been following development because Sunil Pai is just such a, such a great person. I really enjoy… we, we had him on for an event, talking about rewrites, and he's just such a, thoughtful and kind person. I, you know, I'm gonna be rooting for him, in anything he does. Ha. [00:48:07]

**Sebastien Lorber:** Yeah (laughter). [00:48:09]

**Carl Vitullo:** Cool. Okay, everyone, thank you so much for joining us for this April edition of This Month In React. I hope, I hope you learned something. I hope that you felt like we're helping you stay on top of the React ecosystem. There's always a lot going on, so hopefully we can bring some clarity. [00:48:22]

**Carl Vitullo:** Mark and Sebastian, thank you so much for talking with us. [00:48:25]

**Mark Erikson:** Yep. Always. [00:48:26]

**Sebastien Lorber:** Thank you, and see you next, next month. [00:48:28]

**Carl Vitullo:** Yeah, see you next month. Awesome. Thanks so much. see you guys later. [00:48:33]

**Sebastien Lorber:** Bye.
