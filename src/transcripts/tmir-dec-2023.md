---
title: This Month in React (December 2023)
date: 2023-12-27
time: 10am PT / 5PM GMT
location: Main Stage on Reactiflux
description: "Join Carl Vitullo and Mark Erikson as we break down This Month in React. We'll break down what's new in an hour-long conversation."
people: "[Carl Vitullo](https://twitter.com/vcarl_) and [Mark Erikson](https://twitter.com/acemarke)"
---

- Quick hits:
  - [[00:00:55](#layoffs-news)] [layoffs.fyi](https://layoffs.fyi/)
  - [[00:01:37](#state-of-react-native-survey-closes-jan-5)] [State of React Native runs til Jan 5th](https://stateofreactnative.com/en)
  - [[00:01:50](#adobe-💔-figma)] [Adobe and Figma abandon merger](https://www.figma.com/blog/figma-adobe-abandon-proposed-merger/)
- [[00:02:07](#react-native-073)] [React Native 0.73](https://reactnative.dev/blog/2023/12/06/0.73-debugging-improvements-stable-symlinks)
  - [New debugging docs](https://reactnative.dev/docs/debugging)
  - New Debugger, [give feedback here](https://github.com/react-native-community/discussions-and-proposals/discussions/733)
  - [Bridgeless mode](https://github.com/reactwg/react-native-new-architecture/discussions/154)
- [[00:06:33](#redux-toolkit-20-and-supporting-libraries)] [Redux Toolkit 2.0](https://github.com/reduxjs/redux-toolkit/releases/tag/v2.0.0), [Redux 5.0](https://github.com/reduxjs/redux/releases/tag/v5.0.0), and [React-Redux 9.0](https://github.com/reduxjs/react-redux/releases/tag/v9.0.0)
- [[00:11:37](#xstate-v5)] [XState v5](https://stately.ai/blog/2023-12-01-xstate-v5)
- React Server Components updates
  - [[00:17:49](#react-core-team-panel-on-server-components)] [Frontend Should Embrace React Server Components](https://thenewstack.io/react-panel-frontend-should-embrace-react-server-components/)
  - [[00:18:47](#ben-holmes-react-server-components-from-scratch)] [RSCs from scratch video from Ben Holmes](https://twitter.com/BHolmesDev/status/1735701191823151239)
  - [[00:19:16](#storybook-adds-support-for-rscs)] [Storybook for React Server Components](https://storybook.js.org/blog/storybook-react-server-components/)
  - [[00:19:45](#dan-abramov-blogs-again)] [Dan’s “Chain Reaction” post](https://overreacted.io/a-chain-reaction/)
  - [[00:21:52](#daishi-katos-oss-prototype-rsc-framework)] [New RSC-first framework, Waku](https://github.com/dai-shi/waku)
- [[00:29:29](#stylex-released-by-meta)] [Introducing StyleX](https://stylexjs.com/blog/introducing-stylex/)
- React docs discussion
  - [[00:32:50](#documentation-for-the-use-hook)] [Recent core docs pages updates](https://github.com/reactwg/server-components/discussions/7)
  - [[00:35:08](#dan-abramovs-ama-on-bluesky)] [Dan Abramov React AMA on BlueSky](https://bsky.app/profile/danabra.mov/post/3khbvuwanqx2h)
- Lightning round:
  - [[00:42:16](#-requesterimpairment-an-ietf-joke)] [An HTTP Status Code, Requester Impairment (joke??)](https://www.ietf.org/archive/id/draft-richardroda-420requesterimpaired-02.html)
  - [[00:43:18](#-jules-blom-on-flushsync)] [More Than You Need to Know About ReactDOM.flushSync](https://julesblom.com/writing/flushsync)
  - [[00:44:56](#-react-fights-you-can-have-with-your-team)] [React Fights You Can Have With Your Team](https://www.bekk.christmas/post/2023/13/react-fights-you-can-have-with-your-team)
  - [[00:45:33](#-an-interview-with-kyle-mathews-on-gatsbys-story)] [Building React Framework Gatsby](https://oss-startup-podcast.launchnotes.io/announcements/episode-118-building-react-framework-gatsby)
  - [[00:46:41](#-tanstack-router-v1)] [TanStack Router v1](https://tanstack.com/router/v1)
- [[00:47:19](#what-will-happen-in-2024)] Discussion: what do we think will happen with React and the ecosystem in 2024?

[00:00:00] **Carl Vitullo:** Thank you for joining us for December. Uh, I'm sorry about the audio quality of this month. I am on the road and I forgot my headset this time around. This is This Month in React, where we recap and digest recent developments in the ever evolving React and web ecosystem.

I'm Carl, I'm a staff product developer and freelance community manager at Reactiflux. Here, the Discord for React professionals. Mark, you want to say hey?

[00:00:24] **Mark Erikson:** Hi, I'm Mark Erikson. My day job is working at Replay. io, where we're building a time traveling debugger for JavaScript. And in my copious amounts of spare time, I work on Redux, and boy, have I spent a lot of time doing that lately.

[00:00:37] **Carl Vitullo:** Yeah, you've got a lot of, uh, releases to announce.

[00:00:40] **Mark Erikson:** I think we're both recording this one while we're on the road, too.

[00:00:43] **Carl Vitullo:** Yeah, I am coming, I am genuinely coming to you live from, uh, my mom's basement. So this is a funny recording this time around.

Uh, I'll start us off with a couple of just quick hits of little news.

## Layoffs news

[00:00:55] **Carl Vitullo:** I'm thinking of starting a new segment just talking about, like, layoffs and trends in the job market for tech, uh, that seems pretty relevant for news discussion. December has been trending down per layoffs. fyi, which is a great resource, highly recommend. It's trending down fewest layoffs by number of companies running layoffs since April of 2022, and It's been, qualitatively it's felt a little bit better, but uh, last year December was among the lowest of the months for layoff and January went way through the roof, so fingers crossed that doesn't happen this year. I think that'll be a pretty big indicator for tone of 2024.

## State of React Native survey closes Jan 5

[00:01:37] **Carl Vitullo:** There is a state of React Native survey that's currently running. Uh, it went live a couple weeks ago and runs until January 5th. So, if you use React Native, definitely check that out. Highly recommend, uh, giving your feedback.

## Adobe 💔 Figma

[00:01:50] **Carl Vitullo:** This is sort of related to our field, but, uh, Adobe and Figma had been doing a very large merger. I know many, many people in the React ecosystem work with people who work with Figma. So I thought I'd give that a shout out. But yeah, cool.

## React Native 0.73

[00:02:07] **Carl Vitullo:** On to the real news. I'll start us off with our first link, which is react native 0. 73. New pretty big feature release. They've got a lot of good improvements coming out here with improvements to debugging, a couple of, you know, relatively nitty gritty technical details like Support for symlinks, which is a huge problem if you use symlinks in development, and not a problem at all for anyone else, uh, which would include me.

But, the new debugging section looks really good. It looks like they've put a lot of energy into making debugging a lot better, which, as someone who has developed a product with React Native, debugging was a painful experience, so that's nice to see. They've got a new experimental, and Kind of buggy debugger.

They ask you to give feedback, but yeah, it looks like they've got a couple of nice Maybe smaller improvements, but like, for instance, apparently, this is not something I had noticed while developing, but you send console. logs early in the like, bootstrap process for starting up a new, for starting up a React Native process, you know, as you launch the app.

If you previously, if you had run console logs very very early in that launch process they would just silently get dropped. You would not see them and obviously that makes debugging a lot harder. So they have updated the way that the debugger works to capture those and Ship them out once the Once the console has been set up and attached.

So that alone is a huge improvement. I think that'll be nice. Another relatively large breaking change. I think they are deprecating the at type slash react native package. This is good news It's because they have Moved those types into the React Native package itself. So it's, you know, now first class types, it's included in the package.

You no longer need to use the at types package. So that's awesome.

[00:04:08] **Mark Erikson:** Experience is zero. Like I've, I've attempted to run one or two tiny React Native projects. Uh, mostly just sussed out tiny bits of Redux stuff, and that's it. One observation out of that that I do think is interesting is that it feels like React Native has jumped on board TypeScript more than the React core has.

One is that they, I think, React Native projects now ship with TypeScript set up by default, it sounds like. You know, this example here of moving the types into the core, whereas with the actual React and ReactDOM packages, the React types are still maintained separately. Now, the React types packages are now semi officially maintained by people affiliated with the React team, but there's still that difference of not actually shipping it with the actual React packages.

Now you can also caveat and say this is a good thing because there have been tweaks and improvements to the React types packages that have come out in the last year and a half. Whereas there have been zero official stable React package releases. So there is actually a little bit of benefit to having those decoupled.

[00:05:22] **Carl Vitullo:** Yeah, well, hey, maybe if they had been forced to React release in order to update the types, they would have stuck in a couple of, uh, small improvements along the way too.

[00:05:30] **Mark Erikson:** One other React native thing to toss in here, we'll mention it later, but Dan Abramov was doing an AMA over on BlueSky, you know, one of the various Twitter clones that are out there.

And one of the questions was. You know, Dan, now that you're working on a product that is built with React Native, what are your opinions? And so per way that down that discussion, he had a couple thoughts about, you know, it's in some ways, it's great. In some ways, it actually feels really, really difficult and hard to use.

But there were some interesting thoughts and discussion there.

[00:06:03] **Carl Vitullo:** My general sentiment seems to be shared by a lot of people that I've known have worked pretty deeply with React Native is it was really great, it let me do all sorts of stuff, I never want to use it again.

I think that's maybe just a reflection on the fact that mobile development is harder than web. And if you're trying to do both web and mobile development, React Native is pretty great, lets you do a lot more cheaply. Uh, because you can actually, you know, share a substantial amount of the code between apps.

But, it's got its own headaches too. You want to take us on, Mark?

## Redux Toolkit 2.0 (and supporting libraries)

[00:06:33] **Mark Erikson:** Yes! So, my big news, kind of on a personal and professional level, I've been teasing this one for months, but on December, I finally hit the button and shipped Redux Toolkit 2. 0. Along with major releases for all the other Redux related packages.

Redux Core Version 5, React Redux Version 9, Reselect Version 5, and Redux Thunk Version 3. This has been a massive undertaking on so many levels. I started working on this slew of major versions at the start of the year. And Initially, the primary goal was to update the packaging to better improve ES module CommonJS compatibility.

That turned out to be even more of a nightmare than I expected it to be. Uh, we added a number of features, we deprecated, we removed a bunch of deprecated options, uh, there were TypeScript updates. And then the only, like the main reason we were able to even able to get these releases out this year was because we ended up deferring any major changes to the RTK query data fetching layer until sometime next year.

Uh, people have asked for lots and lots of new features and options and changes, like to address those at some point, but that's just a giant undefined amount of work. Like, we, we, we have so many issues and feature requests that it's going to take weeks just to go through them and collate the list of what people are asking for, then take time to analyze those, do the design work, figure out how all these options are going to interact, and build them.

And I can see that, like, if we waited to release 2. 0 to include all those RTK query changes, It would be this time next year. Got a lot of help from one of the other primary maintainers, Ben Durant. And then, uh, there's a guy named Arya who just left a comment in the chat who has done a ton of work on Reselect in the last few months. And we actually made some major updates to Reselect as well.

Uh, one of the biggest ones was We changed the default memoization strategy for Reselect. Reselect has always had its own little built in memoization function that does a bunch of reference comparisons against all the values that are passed into the selector function. And the problem is that also defaults to a cache size of 1. If you call it, like, three times in a row, and you alternate the arguments, like A, B, A, then it's not going to see the same arguments twice in a row, and it's not going to save the results. It's going to keep recalculating things every time.

This always felt like kind of a bad developer experience situation. And so I ended up swiping crash implementation based on weak maps directly out of the React source code. React has a new memoization function built in called cache, and I literally copy pasted that code and made use of it and re select.

[00:09:54] **Carl Vitullo:** Oh, very cool.

[00:09:56] **Mark Erikson:** Yeah, it's buried down in the library, and I think it may actually be now listed in the docs. So, we did some testing on it, and we concluded that it's at least as fast in terms of like raw comparison performance.

Um, in a sense, it has like an infinite cache size, but on the other hand, that could also be referred to as a memory leak, depending on how you look at it. Ultimately made the decision that this was worth actually including. And made that switch in Reselect version 5.

So, I shipped all these literally the day before I went off on a trip to a conference, plus a vacation. So it was in theory Out of my head before I went off on this trip. Unfortunately, one of the truisms of maintaining and publishing packages is that it doesn't matter how many alphas and betas and release candidates you put out and how much you beg people to try them out, you will always get a whole bunch of new bug reports the minute after you publish the new versions live because now people are actually using them. And they're using them in ways you didn't anticipate.

The biggest couple things I'm seeing are some lingering TypeScript update issues where there's, you know, things are just changed a little bit in ways that people weren't expecting. I am very, very happy to have this out the door.

[00:11:18] **Carl Vitullo:** You've brought up the alphas and the betas in the last couple of months.

Glad to, glad to hear you got it shipped. That's awesome. I obviously don't have anywhere near the level of access, or familiarity with you, so I can't, I don't even feel like I can respond to that appropriately, so. I'm just going to roll us on to our next one.

[00:11:36] **Mark Erikson:** Moving on!

## XState v5

[00:11:37] **Carl Vitullo:** Moving on! Uh, stately, or XState v5 has been released.

I don't know, I don't think I would call it a competitor to Redux, but it does also deal with state. It deals with State machines, which, you know, Redux is one way. You can also implement state machines in Redux. It's not, I don't know, would you say, would you say Redux models things as state machines? Or would that be, would you say that's inaccurate?

[00:12:05] **Mark Erikson:** David K. Piano would point out that Redux is typically half of a state machine. Um, the distinction being that a true, with a true state machine, first you look at what state am I in now, and then you decide, okay, if I'm in state A, do I want to respond to action or event? And in Redux, you typically just respond, you respond to the action in the reducer unconditionally.

And so like, David actually contributed an example to the Redux style guide a while back, where, like, it's like the first thing you would do in a reducer to make it a true state machine is switch state. status, and then look at the action type. Whereas with a typical Redux reducer, you just, oh, here's the action.

I handle it regardless of what the values are originally.

[00:12:58] **Carl Vitullo:** That's a cool and precise distinction. I like that. I have always like had a place in my heart for XState, but I've never really used it in a project. Um, they've had a. A bunch of really phenomenal developer tools that help with designing state machines.

You know, as a state machine library, they've written tools so that you can visualize them and, you know, write them in a visual way and then copy paste the code out. So I have actually used those tools in a Redux context because most of the projects I've worked on have been in that. But I've, I've been following them, following along with their development for a number of years.

Really appreciate the work that they do. I'm pretty interested to see a couple of these. It looks like one of the big changes here is that everything is an actor, where actors have their own internal state, can send and receive messages or events from other actors, and can create other actors. So it sounds A little bit like a reducer, sort of like in the RTK slices, reducers kind of sense.

And I think that's, uh, been a place where I've struggled with modeling application state as a state machine is you end up with lots of little sub states. You know, each feature kind of has its own state. So, uh, this seems like a pretty cool mental model. Code model for getting a little, maybe, maybe more precise control over how your state flows.

You know, Mark, like you said, Redux is half of a state machine. So I don't know that I could articulate a specific benefit for using an entire state machine. But I do know that using the developer tools, the designer, you know, the state machine designer tools to figure out how I'm going to write my code has been really powerful.

I haven't constrained myself to actually using specific state machines, but even just going through the exercise of enumerating all the states, enumerating the transitions, evaluating what data I need to pass along with the transition to make a state change self contained and isolated, um, uh I have found super valuable.

They've got some cool future plans listed as well. Um, I, one that I really like, the first one is a toPromise helper function for converting actors to awaitable promises. That sounds really cool. If I could just say like, transition this state, and when it's done, keep going. Sounds pretty nice. Seems like a nice way to make asynchronous write code that responds to them in a more iterative way.

So, um, I think that sounds pretty neat.

[00:15:36] **Mark Erikson:** Yeah, as someone who also maintains a state management library, I, I just generally appreciate the amount of effort and work it took them to get this release out the door, um, I, I know that trying to implement their TypeScript support has been really, really complicated and they've got an absolute genius working for them. Uh, Matush Brzezinski, whose, whose handle is, uh, andreasrake, uh, has done a lot of work around their TypeScript support and trying to design APIs that are sufficiently flexible is a really, really tough task.

So I, I understand and appreciate the amount of effort it took them to get this out the door. Uh, one other, one other plug, I don't know if this is even a thing they've released yet, but something they've been looking at is the idea of being able to analyze real world code and describe it in a state machine format, kind of like AI powered, being, you know, being able to use To like take like an arbitrary Redux reducer or maybe even like a use effect setup and have it analyze that and generate a state machine like description of it so that you can then use some of those graphical developer tools to visualize the code.

That's a separate thing from the XState library itself, but I know that's something that the stately company is working on.

[00:17:00] **Carl Vitullo:** That sounds incredible, actually. Yeah. That's like the dream of self documenting code. State machines are just so easy to read in the abstract. I've always really struggled to go back and forth between state machine, real code.

So if I could have something do that for me, ooh, that's pretty cool.

Alright, uh, let's move on though. Mark, what's your next link? Or set of links.

[00:17:24] **Mark Erikson:** So my, my caveat for a lot of this month's discussion, as usual, is that between travel and holiday stuff, I'm, I'm even less plugged into what's actually been going on in the ecosystem this month. This section especially is a collection of things that look interesting, but I haven't had a chance to go through them myself. So a few different updates and discussions related to React server components.

## React core team panel on Server Components

[00:17:49] **Mark Erikson:** A panel at the React Summit New York conference in, uh, mid November where some members of the React team and Next. js and a couple other ecosystem folks had a discussion about the state of React server components and whether they're worth adopting now and, you know, how are they used and how do they work. Ironically, I was at the conference.

I did not have a chance to watch that panel either live or recorded later, but this article is a fairly good summary of the discussion in that, um, so there were, there were a number of folks involved in that, including Andrew Clark, one of the React core members, Tom Preston Werner, who's currently working with RedwoodJS, Ben Holmes, Josh Camot, and a couple of the React devrels.

Curious about sort of like the, I guess like the semi official view of what's going on with server components. This would probably be a really good discussion to watch through.

## Ben Holmes, React Server Components from Scratch

[00:18:47] **Mark Erikson:** Speaking of Ben Holmes, so he's very involved with the Astro framework, but he also does a lot of videos on his YouTube channel where he explains things. He did a larger video called React Server Components from Scratch, about 20 minutes where he talks about server components and does a lot of drawing on the whiteboard and tries to explain how they work and what's going on and knowing Ben's ability to describe things that should be very useful.

## Storybook adds support for RSCs

[00:19:16] **Mark Erikson:** The storybook tool for documenting has actually added React server component support. Frankly, I have no idea how they've even implemented this at the technical level, but I can see this being a very useful thing. Like if you're writing server components, you want some way to be able to document them and make use of them, but they have all these requirements around being able to fetch data. So in some way, they've implemented support for using server components.

## Dan Abramov blogs again

[00:19:45] **Mark Erikson:** Dan Abramov had done a lot of blogging in 2018 2019 on his site overreacted. io, and Dan is a very deep thinker, he does a great job of explaining things, and he'd written a number of posts that kind of talk about how does React work conceptually, how do you approach modeling things with use effect, And he'd really spent his last two to three years entirely focused on rewriting the React documentation.

So he hadn't blogged at all in a couple years. Well, now that the new React docs are finally out, and Dan has, you know, left Facebook and is now working on the BlueSky app, he's finally had a little bit of time to sit back, And do some thinking. And he's put up a new blog post. It's a little bit on the same principle of his talk from RemixConf earlier this year.

He did a talk at RemixConf where he was like, what if React had always been server first? What would the evolution of React have looked like there? And he actually did a whole live coding demo where everything was like, you know, late 90s, IE6 themed. What kind of follows along, or this blog post kind of follows on that same principle.

So it's kind of like, what if we were sort of building React from scratch in a server centric world, and we need, and components could return async data, or async results. How would you even write the code that looks at the return values of the components and unwraps them recursively so that we can wait until the data is actually ready?

And he never actually uses the word server components in this blog post, but if you read it, With, you know, kind of like between the lines, he's actually explaining, like, this is the mindset behind how server components are implemented conceptually and under the hood. And I think he said this is meant to be the first in a series of blog posts that kind of digs into this, into these concepts.

## Daishi Kato's OSS prototype RSC framework

[00:21:52] **Carl Vitullo:** This is pretty early stage, I think, but somebody has put together, Daishi Kato.

[00:21:59] **Mark Erikson:** He created Jotai and Valtio and now maintains Zustand, and he's also written, like, a dozen other React slash state management utility libraries.

[00:22:13] **Carl Vitullo:** I recognize his name because you had mentioned him in previous episodes we've recorded.

Uh, but I could not have given that comprehensive list, so thank you for that. Daishi Kato has written a minimal React framework for, uh, that uses React server components. So, this is the third, sort of, like, React server components from scratch that I've seen. Uh, I think this is the first that I've seen that is Positioned as a framework that you can use.

So, uh, like you mentioned, Ben Holmes did his From Scratch video. I always appreciated Ben Holmes videos. He, he, he says he's the CEO of Whiteboards at Astro, which I, I appreciate. He, he does a good job with DevRel. And I have not yet watched his video. Like he said, travel, holidays, I'm behind. But, so his was the second.

Last month we talked about somebody who wrote a really great, very long, comprehensive, I have a blog post about implementing React server components on their own in isolation. It looks like server components are now starting to filter out from only Next to now people have started to really wrap their hands, wrap their brains around them and start experimenting with them on their own.

So I think, to me, that is a really big step in this open source process. We've been talking about React server components always with the caveat of like, &quot;Oh, I don't really know. I haven't played with it.&quot; Because of how complex and undocumented the programming model has been so far. So seeing some of these people really dive deep and get their hands dirty and produce things is really good.

So starting with a blog post, then a video, now a framework by three separate people. The community expertise in React Server Components is really ratcheting up, uh, pretty cool to see.

[00:24:05] **Mark Erikson:** I can also vouch that RedwoodJS has been putting a lot of effort into trying to implement Server Components for their framework as well.

Uh, I know they did a blog post a couple months ago where they said we're all in on Server Components. Uh, I had a chance to talk with Tom Preston Werner at a conference a couple months ago where he was talking about some of the complexities where, you know, in a lot of cases they're having to go into the guts of Next and look at the implementation and try to figure out like how much of this is going What anything integrating with server components would need versus how much of it is specific to Next's internals.

And I've seen some of the discussions from some of the other Redwood engineers as they're trying to figure out how to put all the pieces together. So there is activity. I don't know how fully along Redwood's implementation is yet, but there is very definite. effort being put into trying to, trying to productionize that.

[00:25:00] **Carl Vitullo:** I don't know. When did we, when did we start seriously talking about React server components? Do you, do you have a sense for that? It feels like it's been all year.

[00:25:07] **Mark Erikson:** I feel like almost three years ago was when the first video came out. It was either two or three years ago. And, and like it sat around for a while. And then we finally started seeing the integration to Next after, uh, Sebastien and Andrew moved over to Vercel.

[00:25:23] **Carl Vitullo:** This is all building upon the primitives that were added in Suspense, right? Which I know that, I just saw some discussion about, it's been five years since Suspense was, you know, first unveiled.

So this is, I think, to me, that's a testament to just how difficult the work that they're trying to do is. We can talk a little bit more about what this unlocks later, um, I have a link coming up in the lightning round. Well, you know, actually maybe I'll just bring it in right now.

Guillermo Rauch did a, um, a great post talking about, or in response to, what's the difference between PHP and Next, you know, with the, this. Satirical, kind of, you know, shit talking of like, &quot;Oh, JavaScript is finally catching up to PHP 20 years ago, haha.&quot; I thought he had a really good response, basically talking about like, Yeah, we do have, on the face of them, they are pretty similar, but some distinctions are there's out of order streaming.

Like, you know, you can piece together the HTML by order of importance, not You know, linear order of HTML and pre rendering versus rendering on the client, control over that, which I, I haven't used PHP seriously in close to 10 years at this point, so I can't comment too much about what the capabilities are, but you know, I remember trying to do mixed server client rendering in PHP and it was a lot of writing JavaScript code in the HTML of PHP and then like jumping in and out of PHP tags to like render, you know, pass data in or whatever. Or you write your JSON endpoint. And so like, yeah, you can do those things, but it's, it got real messy real quick.

Uh, or it, it at least wasn't, it wasn't a pit of success. It was not easy to get something that was maintainable and great. That felt good. Felt. Solid and robust. So, yeah, I think there are, I know, you know, people talk a lot about unnecessary complexity or just people like to bash on JavaScript, people like to bash on web and client and frontend, but I do, I really believe that the React server component stuff is Genuinely pushing the envelope of what's possible in a real and deep way.

I, like, you know, I, we don't, we don't have a, FrontEnd doesn't have a academic discipline, you know. There's no computer science researchers writing JavaScript. That is genuinely how I think about What a lot of the React core team is doing. Like, were this an academic discipline, this would be PhD thesis, postdoc.

Actually, you know what? Like, it's not an academic discipline because it is well beyond the complexity that would be in an academic setting. This is post graduation, you've got your Ph. D., you're now working in industry, advancing the state of that industry. And I think that is truly what the React core team has been doing for my entire career.

It's one of the reasons I have a lot of trust in them, is they keep executing, and they keep, for an entire ten years, they have stayed at the bleeding edge, and they have set the norms that everyone else in the industry follows. Okay, it's taken them five years to start realizing the vision that they set out with Suspense.

Well, you know what? They're doing it. They keep, it's hard, it's really difficult to feel out all the edge cases, it's really hard to communicate to all of the developers what you're supposed to be doing, but, like, man, they're doing it. They are, they have continued to do it for my entire career, and I just have huge, huge amounts of respect for them.

[00:29:11] **Mark Erikson:** Yeah, they've always had a very long term vision of how they want to build things, and they've kept chugging along towards that goal.

[00:29:19] **Carl Vitullo:** Bit of a, bit of a ramble there, bit of a rant, but, I was thinking about it over the last week or so, uh, in prepping for this. Just, the work they're doing is really cool.

## StyleX released by Meta

[00:29:29] **Carl Vitullo:** Okay, but under our next link, facebook released, something that they first talked about a number of years ago, Stylex, a CSS and JS tool that, uh, that they use at Meta. Sorry, not Facebook, Meta. I don't have a lot to say on this. Um, I know I'm introducing it, but it's a CSS and JS library. Kind of feels like the moment for that has, um, you know, we, we had a lot of experimentation on that.

And it feels like generally we, as a, an ecosystem, the React subset of web development, have settled on CSS and JS not being the best solution. Just, uh, some, you know, some of the trade offs are Increasing the size of the JavaScript bundle, where JavaScript is more expensive to load and parse than CSS. So it tends to add a lot. Relative to non, you know, more traditional CSS. Uh, it tends to add more startup cost than other methods. Mark, do you remember when they first announced StyleX?

[00:30:31] **Mark Erikson:** It, there was a, there was a conference talk about it at ReactConf in either 2018 or 2019. And they didn't give many details. They just kind of said, here's an overview of the tooling that we use internally at, you know, what was, what I guess was still then Facebook and kind of what it does and how it works at a high level.

The community was aware that existed. But there was no information on the actual internals or anything that you could use. So there was, it was always sort of this, this hint of this exists. It was only this year that you could actually, they were, they started actually moving towards being able to release it open source.

And so now it's finally out. Um, yeah, the couple bits that I know about it are Uh, as, as the comment just said, it's primarily compile time, not runtime, so, you know, there's always trade offs there in terms of the amount of dynamic behavior it can have. I believe it compiles down to Atomic CSS, so part of the sales pitch is that as the app grows and you have more and more components using certain styles and certain rules, the growth of the size of the CSS stays lower than it might with other approaches.

[00:31:48] **Carl Vitullo:** That does seem like a genuine advancement of the state of the art of CSS and JS. Um, especially, pulling, that was always the challenge with stuff like Emotion, um, or styled components was, I think you could wire it up to, you know, Webpack or limited other build systems, such that it would extract the, the styles into CSS.

Some of them could, some of them couldn't, bit of a mix and match, but okay, that, that being, The major downside of CSS and JS, uh, if they, since they have built it as a compile time extraction of styles, that's avoiding the biggest, worst trade off. So that sounds pretty cool.

Positioning this as extremely large code base styling tool, so focus on performance at scale sounds exactly like what CSS and JS needs. I think that's all. I got a say on it. You want to take us on to the next news item?

## Documentation for the use() hook

[00:32:50] **Mark Erikson:** Moving us along, a couple of discussions around docs. So, I've, I've actually been whining for a lot of this year that, you know, okay, it's great that the new React doc site is available, it has a wonderful tutorial, but it just feels like there's so many other pages that need to get filled out for it to be fully useful in terms of some of the API references and usage guides.

And I, you know, I had some discussions with some of the React dev rels this year. So they actually just posted an update that collates some of the recently added or updated docs pages that they've been working on. And it looks like a, and kind of the, some of the theme here is they've been working on documenting A lot of the new APIs that exist around server components and server actions.

So we actually have some documentation for the ambiguously named use hook, which I'll be honest, I still don't fully know the status of this. I guess the docs page says it's only available in canary and experimental builds. So I guess you can use it with Next, and that's, that's kind of about it. But they've also documented the new UseFormState, UseFormStatus, and UseOptimistic hooks that you would use with the, and with server actions.

Uh, they've documented the useServer and useClient, not sure what the word is for them, markers that you would put in files so that the bundler knows how to parse those. Uh, they've added some more details on the useTransitionHook, uh, they've talked about the cache memoization API that I talked about earlier.

They've documented the HTML form tag. In a sense of, here's how you can use this in a React app and actually write kind of more browser native forms. Uh, they've added a page that talks about thinking about the UI as a tree, and they're working on some additional documentation. So I'm a big docs person, and I really, really appreciate seeing them continue to actually work on these and not just, you know, leave the site as it was after the new tutorials came out.

## Dan Abramov's AMA on BlueSky

[00:35:08] **Mark Erikson:** Along with that, Dan Abramov is now working on the BlueSky Twitter clone app as his day job. And he recently did an AMA over on BlueSky. People had a whole bunch of good questions over there. I mentioned the one earlier about people asking, you know, What are your thoughts on React Native now that you've actually used it?

Um, there were some questions about React batching and, you know, will React ever get ported to Rust? There was one in there that was, What do you think should happen to create React now? And Dan's comment was, It would be nice if it was turned into a build time server components framework. I don't expect that to actually happen, but it's an interesting train of thought of, you know, what could we do with the name and the toolset if we wanted to.

[00:36:03] **Carl Vitullo:** Dan has gone a little quiet the last, like you mentioned earlier, he's talked about going all in on the docs. He also mentioned some challenges he experienced with his own perfectionism trying to get it just right, which is he attributed as part of the reason the docs took so long to come out. Sounds like he may have gotten a little burned out too.

[00:36:22] **Mark Erikson:** Oh, yeah. Oh, yeah.

[00:36:24] **Carl Vitullo:** Burnout is real. Burnout is tough. So it's nice to see him in a new context, working on a new It sounds like he's enjoying getting his hands dirty working on an application rather than staying at the high level of just talking about React and developing it from the core. Um, I think it might, seems like he's enjoying it.

It's nice to see him get back into writing and community discussion a little bit more. Um, this has been a really good thread. I'm, I'm also a big fan of Blue Sky. I have been enthusiastically looking for an alternative to Twitter. So I am optimistic that Dan being a more prolific poster on the platform will help it succeed.

Glad to see a few more of these. Definitely recommend going through the thread and just reading a bit. There's a, there were a couple of really good questions and answers. Uh, one that I saw and responded to, so I'm gonna toot my own horn a little bit. Somebody asked about, um, React and, uh, what's the Like, Module Federation, What, Microfrontends?

[00:37:33] **Mark Erikson:** Uh, yeah. Those are probably too

[00:37:36] **Carl Vitullo:** Yeah, okay, so somebody asked about micro frontends and module federation and how React would work with it. I know that's been a subject of debate for a couple of years. It's sort of come and gone over time, ebbed and flowed, but I think that's a really big challenge. I think it's, maybe we'll see it come back a bit with React server components as those settle down, but I think the real challenge there is CI and CD, the build and deploy process for micro frontends.

Which I think is, it solves a real problem for large teams, but it's difficult to implement. Tends to be a DevOps discipline rather than a library or product. Just, it's too deeply embedded in every step of the build, the development, the deploy, testing. Just too tricky.

Coming back to that React Working Group discussion on GitHub, um, that you started us off with. It's really nice to see some of the Some of what they're looking to invest in more deeply. I've always thought that React worked really well once you get your head into the right, like, mindset of, once you get the right, you know, quote, air quotes around right, uh, mental model for how to think about UI. In the way that React would like you to, it unlocks a lot of really powerful possibilities.

So, in the past, those a lot of those best practices and descriptions for the mental model, I have gained mostly through reading, like, a combination of gists. On GitHub, and Twitter threads, and reading code from other people and seeing how they solve problems.

Which is just not a very repeatable process. Like, you know, we have a learn page with many links that you have collected, Mark. I think that's been a One of the better ways to gather body of knowledge, but it's nice to see, it's nice to see some of that, some of those best practices working their way more into the docs.

I think that a lot of them have been in flux for a long time, a period of years, you know, as we were figuring out first hooks and then like, what is suspense? How does it work? Oh, now it's server components. How do those work? What are they? It feels like a very long journey to where we are right now that is It's nice to see things stabilize and settle down a little bit more.

It's, I look forward to see what the docs are like in 2024.

[00:40:04] **Mark Erikson:** I actually had a back and forth with Rick Hanlon from the React team in mid November where I was getting a little worked up and complaining that You know, the React docs really need to have more details about how React renders. You know, that's always been one of my biggest and most appreciated blog posts, is the article about React's rendering behavior.

I actually got called out a little bit by Rick, who linked me to certain sections of the docs that actually have some of the information that I was complaining didn't exist. I had looked through some of the early betas of the docs, and to be honest, I hadn't really gone back and dug through them since then, and so there were definitely some pages that called out some of the specific nuances that I thought should be in there that I didn't realize had actually been added.

Like, you know, even talking about kind of like the existence of like the render versus commit phase. It is sort of scattered through some of the different learning material pages. It's not like in one single, you know, start to finish usage guide or how this works page. But there is actually a lot more of that material in the current docs than, certainly in the old docs, and more than I had actually given it credit for.

[00:41:22] **Carl Vitullo:** It has been a bit of a challenge to figure out how to stay on top of what changes are coming out in the docs. I note that the last blog post on react. dev was in May. So, uh, I think you can be a little forgiven for finding it difficult to stay on top of what changes have happened.

I'm not even sure how you would. Because I don't think they get published as releases in GitHub.

[00:41:45] **Mark Erikson:** Well, no, the React docs should still be a public repo, um, it used to be React. js slash React. js dot org, uh, they might have renamed the repo, but the repo exists, so I assume I could watch the repo for PRs.

[00:41:59] **Carl Vitullo:** That's a high noise source of input though, where's the bi monthly summary of here's all the stuff we've shipped. So anyway, you know, whatever. Uh, they got more, they got some more DevRel folks. We'll see, uh, we'll see what's going on. Anyway,

[00:42:13] **Mark Erikson:** cool. Lightning round.

## ⚡️ RequesterImpairment (an IETF joke??)

[00:42:16] **Carl Vitullo:** Lightning round. I don't quite comprehend the implications of this, but IETF, um, The task force that owns HTTP has put out a draft of an HTTP status code to report requester impairment.

I don't quite know what that means. Uh, they talk a little bit about AI requesters.

[00:42:38] **Mark Erikson:** It's a joke.

[00:42:39] **Carl Vitullo:** Is it a joke? They put out a joke in December?

[00:42:42] **Mark Erikson:** Look at the status code.

[00:42:44] **Carl Vitullo:** RequesterImpairment420. Okay, this is straight up a joke? It's a very serious looking joke.

[00:42:50] **Mark Erikson:** Have you ever seen HTTP status code 418? I'm a little teapot.

[00:42:54] **Carl Vitullo:** But that was released on April Fool's Day, like 20 years ago.

[00:42:59] **Mark Erikson:** Yeah, I don't know why this one would have been released. But I'm pretty sure this is a joke of some kind.

[00:43:05] **Carl Vitullo:** It smells like a joke. Uh, it's RequesterImpairment420, like, Yeah. It smells like a joke, and I don't know how to interpret this. Maybe it's a joke.

Move us on, take us away.

## ⚡️ Jules Blom on FlushSync

[00:43:18] **Mark Erikson:** A blogger named Jules Blom, who has put out a number of posts in the last year that talk about some very specific technical nuances of React rendering, which is a topic that I always appreciate. And so Jules put out a post recently that talks about a relatively new React API called FlushSync.

And this exists because of the change in how React batches updates. Prior to React 18, React would automatically batch renders if you called, you know, set state more than once in an event handler, but it would not do it if you did it in, you know, some async function. And so React 18 switches it so that React now always batches any updates that occur in the same event loop tick.

But there might be times when you need to force a render immediately right now after a given setState call. So it's flipping the default behavior, and so now you need a new escape hatch from that behavior. So there's a new API called FlushSync, which says, okay, like, you've queued up one or more setState calls.

Force React to actually render right now, and then continue from there. And I know Ryan Florence had a tweet about this recently, where he says he uses it instead of useEffect in a lot of cases. So you might have like a click handler that does a setState call. And then calls FlushSync to make sure it gets updated right away so that you can do some kind of like a focus or scroll change.

So, this is a useful article talking about what it is and why you would want to use it.

## ⚡️ React Fights You Can Have With Your Team

[00:44:56] **Carl Vitullo:** Thank you, next. I like this one. It's a little silly. A Christmas post. React fights you can have with your team. I was just reading this and all of these are fights that I have had with my team over the years. So, you know, default versus named exports.

Uh, do you call a file in a, a feature folder index tsx, or the same name as the folder? How do you name props, regular functions or arrow functions? I, it, it was, it was just a, a, a great comprehensive list of all sorts of fights that I've had over the years on teams. So, appreciated it. Um, okay, I have a second one queued up here, so I'm just gonna run with it.

## ⚡️ An interview with Kyle Mathews on Gatsby's story

[00:45:33] **Carl Vitullo:** Um, there was a good podcast recently interviewing Kyle Matthews about building Gatsby. Uh, it just, just, it seemed like a very honest and open discussion of the lifespan of Gatsby from, you know, Inception to V2, V3, and Acquisition. Reactiflux and Gatsby share some ancestry. Kyle Matthews used to be pretty active here.

At one point he had admin permissions over a subset of channels that Gatsby used as their official chat. So, you know, I have a soft spot in my heart for Gatsby. Uh, and it's nice to see some discussion of inside baseball, how did it work, how did it grow, why was it made. Uh, I, I, something I thought was pretty interesting is he explicitly talks about making it for himself for, you know, blogs and small sites.

One of the big complaints is that Gatsby didn't really scale beyond those, so hearing him talk about how he made it for that for himself, it's like, okay, that kind of makes sense then. Yeah, worth a listen. It's like an hour long. It's a podcast. It's a reasonable time investment.

## ⚡️ TanStack Router v1

[00:46:41] **Mark Erikson:** All right, and last lightning round item is that the ever prolific Tanner Lindsley has released TanStack Router v1. I know Tanner has had a lot of opinions about Things like, how does a router integrate into a framework, type safety, and data fetching and loading.

So, this, I could not sit here and list the differences between TanStackRouter and ReactRouter. But, Tanner has a track record of creating libraries that are very useful, very well thought out, and he puts a lot of effort into them. So, probably worth taking a look.

## What will happen in 2024??

[00:47:19] **Carl Vitullo:** And Mark, you had a great idea. For an end of episode discussion, what do we think will happen with React and the ecosystem in 2024?

[00:47:29] **Mark Erikson:** The biggest one that I'm so very much looking forward to and excited about is the React Forget compiler. So, you know, the initial mentions of it were well over two years ago. It was kind of quiet. We got, you know, tiny little hints and a couple updates. You know, over the last year and a half. And then finally, late this year, we got a couple big updates from the team members who were building the Forget compiler.

Sathya did a talk at React India, and then Joe and Mofe did a talk at React Advanced in London. It sounds as if React Forget is real, it works, it is being used in production at a couple of different metasites, and it sounds like the hard part And now it's the other hard part of trying to fully productionize this and make it ready.

You know the overall goal is not just about It's not just about removing the need to have dependency arrays in your use effects and your use callbacks or whatever. It's also about actually optimizing when it's re rendering. And, you know, there's been lots and lots of talk about signals across the JavaScript ecosystem in the last two years.

You know, lots of different frameworks are adopting signals. And the React team has said You know, we, we might end up making the use of signals as like an internal primitive, but we don't really think that they provide a lot of value as a user level piece of code. And so their approach is, let's build a compiler.

And you write your React code exactly the same way you always have. You don't have to think about anything special. You don't have to use special value, you know, get, set calls. You just write your components with plain data and eventually, someday, This magic compiler will make things faster. And it sounds as if someday is hopefully relatively sooner.

Obviously there's no actual release date. You know, the, during the talk at London, Joe and Moffay said it'll be available when we think we've got it fully productionized and are ready to support it. I'm hopeful that it will actually come out in 2024.

[00:49:42] **Carl Vitullo:** I like that. Good prediction. Well, I don't know a prediction, but

[00:49:45] **Mark Erikson:** Wishlist.

[00:49:46] **Carl Vitullo:** Wishlist, sure.

I have always taken an approach of no expectations. I prefer to just let the news wash over me and See, I think, I think I find predictions less valuable than responsive, being responsive to what comes out. Updating a mental model periodically. I'm very excited to see how server components continue to shake out.

That's maybe a kind of a cop out answer, the obvious choice, but it's true. I, I, I, I think it's a pretty new paradigm for programming, um, you know, I just had my big rant earlier about respect for the core team and how they're pushing the industry forward. Yeah, I'm really interested to see how that continues to shake out.

It's really cool to see momentum build. in the community, in the ecosystem. I think it's complicated, I think it's hard. I think 2024 might be when we hit critical mass on that and start seeing a lot more powerful applications of server components more generally.

[00:50:51] **Mark Erikson:** Uh, another thing that will hopefully happen next year is another stable version of release of React.

Because the current one is 18. 2, that came out well over a year and a half ago. You know, I've voiced my complaints about React's versioning strategy a number of times this year. They put out the blog post about the canary release idea, which has resulted in a lot of arguments about, well, what does it mean that this feature is stable for frameworks, not actually stable and usable by anybody else?

And I think, it kind of goes back to what I said earlier about, Pre release versions. It is very true that for most developers, like even myself included, a fully supported, stable, semver backed release It might as well not even exist, both in people's minds and in the willingness of people to actually use certain features.

So, you know, there's been a lot of debate and frustration over the way that, you know, like, Next is using pre release and experimental versions of React in order to implement things like the app router. And I'm very hopeful that we will actually get another stable version of React that Actually pushes things forward also in a selfish way because then it would actually have my source maps generation built in the latest Info that I have just trying to keep an eye on the update work team is actively talking about React 19.

Andrew Clark has made a couple comments on Twitter I've started to see some PRs go through in the React repo that are actively starting to clean up deprecated and dead features. Um, they removed a completely unknown variation of how you could define components as a module object. A couple months ago, uh, there's actually a PR up right now that would remove the legacy context system.

You know, the old this. context in, in class components. I would not be surprised if we don't get an 18. 3 minor release. And instead, the next stable release is 19. 0, with a number of deprecations and removals and things cleared out. Very curious if that would also finally include the better web component support.

It was PR'd probably almost two years ago, and has been sitting in experimental builds. And has resulted in lots of people whining that it's not available yet. I would certainly hope React 19 would be out by this time next year. If and when it does come, I would expect it to be removing a lot of deprecated options.

The question is, how long will it take to come out? And will there be any minor releases before that? I can also safely predict that the React subreddit and Reactiflux will continue to be flooded with questions of Should I use Next versus React? Should I use Next versus Remix? Should I use Next versus Vite?

Should I use Redux versus Context? Da da da da da da da da da da.

[00:54:09] **Carl Vitullo:** The never ending cycle of questions. Yeah, uh, we're, we're going to be doing a, a thank you to the React core team soon before the end of the year. Years and years ago, we used to do an annual like end of year thank you to the core team, which was really lovely.

And we just fell off and stopped doing it. So we're going to be trying to revive that now. And it's been six years since the last time we did that. Last one was in 2017. It was a good excuse to go back, pull up the web archive, and see how the communities have grown. So I pulled up like this, you know, the subreddit, the React. js subreddit, Reactiflux, and Thackoverflow.

And it was pretty wild. All of those have 10x'd in size. The 2017, there were 60, 000 questions on Stack Overflow. The subreddit was at, like, 30, 000 members. Reactiflux was at, like, 25, 000 members. And now, Reactiflux is at 220, 000 members. Subreddit's at 300, 000. And we've got, like, 600, 000 questions on Stack Overflow.

Just absolutely ludicrous growth. Literally 10x. On each of those communities, uh, over the last six years. Pretty wild. React's taking over the world. Or has taken over the world.

All right, well thank you everyone for joining us on this, uh, you know, end of year, weird liminal space between Christmas and New Year's when nothing counts and nothing is real.

Uh, we'll be back on the last Wednesday of January. Here in the live stage of Reactiflux or back in your podcast feed as soon as we can. With the end of the year this one might Come out a couple days late. We'll see. I'm not sure what my editor is gonna be up to. Ha ha. If you see anything newsworthy, definitely let us know in the Tech News and Reads channel of Reactiflux.

We do source Links from there, definitely pull from discussion and things as well. Thank you so much for joining us. I'll see you next month.
