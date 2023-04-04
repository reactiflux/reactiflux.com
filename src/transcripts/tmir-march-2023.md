---
title: This Month in React (March 2023)
date: 2023-03-29
time: 10am PT / 5PM GMT
location: Q&A Channel on Reactiflux
description: "Join Carl Vitullo, Mark Erikson, and Matt Pocock as we break down This Month in React. A lot of news this month, with a major progress update from the React core team, TypeScript 5.0, and TC39 meeting news. We'll break down what's new in an hour-long conversation."
people: "[Carl Vitullo](https://twitter.com/vcarl_), [Mark Erikson](https://twitter.com/acemarke), and [Matt Pocock](https://twitter.com/mattpocockuk)"
---

<iframe src="https://podcasters.spotify.com/pod/show/reactiflux/embed/episodes/This-Month-In-React--March-2023-e21n2om" height="102px" width="400px" frameborder="0" scrolling="no"></iframe>

**Carl Vitullo:** Thanks everyone for joining us for this month in React, where we break down the news and what's going on in the React ecosystem over the past month. It's March this month. There's been a lot to talk about. Excited to have Matt Pocock joining us to talk about the new TypeScript five release. [00:00:16]

And very excited to talk about the React Labs post that the core team put out. I think there's been a lot of work that they've been doing over the past several years, and I think this post has been just really brought up a lot of those things. Excited to see what we can get into. [00:00:31]

Yeah, Mark and Matt, do you, can you introduce yourself real quick? Mark, can you go first? [00:00:34]

**Mark Erikson:** Sure. Hi, I'm Mark Erickson. I maintain Redux. I sit around here and answer a lot of questions. I work at a company called Replay, where we're building a true time traveling debugger for JavaScript. If you haven't seen it, please check it out. And I generally show up in React or Redux related discussions across the internet. [00:00:53]

**Carl Vitullo:** (giggle) yes, you do. Cool. And Matt, can you introduce yourself? [00:00:57]

**Matt Pocock:** My name's Matt Pocock I am a general TypeScript person I guess. I was a software developer for about four or five years, and it's, feels weird to say was a software developer cause I'm now full-time TypeScript educator. I guess since like December left my job at Vercel and now working full-time, building a TypeScript course called Total TypeScript. [00:01:15]

I was a React developer for for my career as well. So working with React and TypeScript for about four or five years. But I'm, as I said before, I'm a little bit out of the React ecosystem at the moment, but I'm really excited to hear what's been going on. [00:01:27]

**Carl Vitullo:** Yeah, we're excited to have you bring some more of your expertise about the TypeScript ecosystem in here. Cool. Yeah, let's jump into it. So the format we use for this we will introduce a link in a round robin fashion, just going around one by one and have open discussion about it for a couple of minutes. [00:01:44]

## Retire SPA and MPA?

**Carl Vitullo:** So I'll kick us off here. A couple days, weeks ago. Dan Abramov tweeted about, he said, petition to retire terms, Single Page Application, Multi-Page Application, SSR, SSG, they represent the previous generation of I think that's interesting. It's a, we're at a moment of time where, single page versus multi-page application like that was such a strong client versus server distinction for a lot of my career. [00:02:10]

But it, you know, it feels like the ecosystem is really cooled on the idea of a single page application saying it's sort of an acknowledgement that you can't do everything you need just on the client. And a bit of a return to more of the history of, web and software development where things were much more server based and the application side of things was, I don't know, maybe not raised to quite its own separate entity. [00:02:36]

Yeah. What do you guys think about that? [00:02:38]

**Mark Erikson:** There definitely has been a shift in the discussion both inside the React community and outside the React community over the last year or year and a half. Some of it positive, some of it negative. I've seen a few different articles and some of them were in the, you know, This Week in React link posts that have expressed a lot of very strong critique about React in the community and how hard everybody went in on the single page application concept starting around 2015. [00:03:07]

And, I think some of it is miscommunication and, attributing bad will to, to people when there wasn't any. You know, there's, there's the ongoing difference of am I building a website with pages versus like, am I building a fully interactive application that happens to live in the browser? [00:03:25]

And so you've got different people building different kinds of programs and yelling at each other when, they turns out they actually have different needs and technical differences. So that's one part of it. But also I think there is the fact that the tooling around things, around the React ecosystem, you know, whether it be next or Remix or server components or whatever makes it more feasible to build server side pieces. [00:03:50]

I mean, React has had a concept of server side rendering for a long time now, but, If you weren't using next, you had to build a lot of that yourself. And the tooling wasn't there. And to be fair, like I have never dealt with SSR in any of my own projects. My own applications have always been strongly client side. [00:04:08]

So like I'm kind of sitting off to the side and trying to observe what everyone else is doing. And I can't speak to this from my own experience. But if you look at something like next, even when you're doing server side rendering and or static site generation, it still ends up with the client side interactivity and then you transition from page to page. [00:04:27]

And it's primarily doing that on the client. So even right there, it has that mixture of behavior. So I can see the point that Dan's actually getting at here is that even with the tools we have right now, there is a mixture. And when you start including things like server components and you know, next new app router in that combination, it is somewhere in between. [00:04:51]

And the terms don't seem to fully apply the way they used to. [00:04:55]

**Carl Vitullo:** Yeah, I think that makes sense. I saw that Kent C Dodds proposed the term PEMPAs, which I don't, I don't, I don't think I'm a big of. uh, P E M P A for progressively enhanced multi-page apps. And (sigh) yeah, I, I guess my thought on this is like, maybe the problem is that like we're trying to assign specific terms for all of these different behaviors, really. [00:05:19]

Like, incremental static regeneration and static site generation and all those, like, to me, incremental static regeneration is just a dynamic site behind a cache, you know what I mean? Like, it's not something I would architect a build process around. It would be an implementation detail of the caching for me. [00:05:36]

Like it's a performance improvement. It's not a core part of the architecture. So I think maybe maybe a challenging point of friction here is that like we're trying to figure out terminology to describe all of these increasingly nuanced and, I don't know, just very specific ways of writing software. So I don't know. [00:05:56]

**Mark Erikson:** I'm gonna go kind of meta on this one. Thinking about it just now, I think what we're actually dealing with is a categorization problem. And the problem is we're talking about things as categories, and a thing can only fit into one category, whereas what we're really dealing with is programs have like tags and you can have many tags on one thing, or to put it in software terms, it's, is it class inheritance or is it like, you know, a game style entity component system where it's like, this thing is movable and this thing can shoot and this thing can do x and this thing can do Y, and maybe the problem is that the terminology we're using is only one label, and we really need to be able to apply many labels to a given app. [00:06:39]

**Matt Pocock:** I think there's there's like two things that I would think around this stuff. I think one of Kent's terms was PESPA, right? Progressively enhanced single page application. A lot of these terms, SPA, MPA, they all have &quot;page&quot; in them, right? &quot;Page&quot; is the unit of fetching the unit of thing that you're caring about. [00:06:55]

And whether you're doing SSR or SSG, you are really talking about the page is the thing that you are, assessing, but really what Next, and it seems like what Dan is tilting at here, is that instead of the page being the unit, now the component is gonna be the unit. [00:07:11]

Think that's in general where it seems like things are moving to, and whether you use like nested routing in Remix or something, or whether you're doing, server side components, you still have a concept of a single component being exported from a file and attaching a loader to it, or having that component itself to the data. [00:07:27]

But I also think that people don't consume the categories, they consume the frameworks that sell the categories right? So you have, for the last five years, let's say — probably since 2015 actually — Create React App has been still the dominant way that people make React apps. [00:07:41]

We have all of this huge conversation around SSR and Remix and the framework wars and all that stuff, but really it's been Create React App all the way, and Next has only caught up recently. So the fact that, now Create React App is disappearing, it's gone out of the React documentation, I imagine we'll see its usage drop off, and then finally Next and other frameworks can come into its place. I think like really we are consuming frameworks instead of categories, but really the conversation is about the categories. [00:08:11]

**Mark Erikson:** That makes sense. Yeah. [00:08:12]

**Carl Vitullo:** Yeah. And maybe building on that a little bit. I think that thinking about this in terms of frameworks and, the project bootstrap process I think is limiting in that a lot of people are using React with a wide range of backends. So, you know, if you're not building a new project and starting, with Remix or Next or something like that, but you know, you're working off a project that has existed for five years and is originally built with Rails or Django or something like that. [00:08:40]

That category of development feels left out from this conversation to me. And I was thinking about this while I was preparing for this, and to me, I think this is like a Venn diagram of three different categories that each have their own, breakdowns within them. [00:08:53]

So it's like, when is the content rendered? Is it rendered in advance at build time, is it rendered dynamically, is it totally static? It's never built, it's just always the same content. So that's, that's one category with three options. [00:09:05]

Then, like, how is it cached? Is it not cached at all, it's fully dynamic, it needs to be rendered from scratch every time it's requested, or is it cached for a long time? [00:09:13]

And then a more subtle one that took me a second to come up with and then even wrap my head around was, who owns the url? Because , the server owns a lot of URLs, and it, you want the server to respond to these. But then there's the other category where you don't want the server to respond to it. It's entirely within the bounds of your client side app. [00:09:32]

So I don't know. I was thinking about how I was thinking about what terms I might use, and I came up with those three categories and was just thinking like, okay, if there was a Venn diagram showing all of the overlap between these different components, that feels like it could get towards being a complete taxonomy of development. [00:09:49]

But, like also every intersection of those would need its own acronym. And if we have, three categories that each have between three and five subcategories, that can all overlap with one or more of each other. Like, I don't think we need 25 different acronyms to describe the totality of it. It's complex and maybe the taxonomy we're trying to build is not super valuable. [00:10:04] [00:10:09]

## Create React App no longer officially recommended

**Mark Erikson:** I'm gonna take this opportunity to go to the next point because it actually circles right around to this part of the same discussion. [00:10:14]

So one of the biggest pieces of news from the last month is that the new React Doc site is finally live. That's the good news. The bad news is that it, it took four and a half years after the announcement of hooks, and it took two and a half years since they announced they were even working on a new doc site. [00:10:31]

But it is finally live. And it came with some big surprises. One is that there's a new url. The new home is at React.dev, whereas the old site was at Reactjs.org. And for the record, the old docs are still available, but they're now at legacy.Reactjs.org, and they all have, you know, headers saying, please look at the new docs instead. [00:10:53]

The controversial ish side of the docs announcement, and we've mentioned this in passing already, is that the instructions for &quot;how do I start a new React project&quot; no longer mention Create React App basically at all. And instead the focus is on using a broader, more powerful framework. [00:11:13]

The first three frameworks that it mentions are Next, Remix, and Expo. And I think there might be one other in there, I'd have to double check. [00:11:22]

And this is actually brought up a fair amount of controversy. You have and this kind of goes back to what Carl was saying about like different people with existing projects or different people who have different concerns. [00:11:31]

There are people who are worried about beginners needing a simpler tool set to get started with. And Next is more powerful than Create React App, but it's also more complicated. There are people who have said, &quot;okay, fine, Create React App is dead, but the docs or the installation and setup page should talk about Vite because clearly Vite is superior to Create React App.&quot; [00:11:55]

And so it should be like a replacement in that sense. There are people who are concerned with, &quot; if I use Next, which is now in a sense, the default choice, then I have to have a node server and I have to deploy it on Vercel in order to use it.&quot; And neither of those is true, but those are sort of the default assumptions that people have. [00:12:16]

## React encouraging server capabilities

**Mark Erikson:** And so there's been a lot of discussion and debate and pushback. There were a couple articles going around basically saying that the React team now wants to pretend that single page applications don't exist. And there is a little bit of truth to that because the React team wants people to be using a framework that has server side capabilities. [00:12:36]

You might start only using the client side stuff, but their stance is, you will want to use the server side pieces eventually, you will want to use routing ,and so on. And using a framework that has this built in out of the box is gonna give you a better starting point. So this has fed into a lot of the debate like, okay, the docs are out, but they're really pushing you towards a framework, especially Next. [00:13:01]

And there are people who are not necessarily happy about that. And there are folks using, different backends like, you know, C# or Java, that aren't Node, who are concerned about their projects not working well with React in the future in some way. [00:13:14]

**Matt Pocock:** It's a kind of awkward spot for React, because React is a library and it's always styled itself as a library. But what, what happens when your library starts making demands of your architecture, right? React is starting to say, okay, we are not just a client side thing. I mean, you can use us for client side, but our more powerful features, the cool stuff, it's gonna involve a server. That's the messaging coming out of Dan, too. [00:13:39]

What happens then when your library starts saying, &quot; To use me properly, you need this certain architecture.&quot; I think that's a bit of where my, sort of, strange feeling comes with this and especially when it was like Next Conf for last year when they announced Turbo Pack and the new version of Next, Andrew Clark was there from the React team, who I think now works at Vercel, and he said that this new version of Next feels like the new version of React. [00:14:06]

**Mark Erikson:** The real React 18, I think, was the [00:14:08]

**Matt Pocock:** Exactly. Yeah, I was in the room actually when he said that. Yeah, &quot;it feels like the real incarnation of React,&quot; which is kind of strange because it shouldn't be tied to a framework like that, but it feels like they're building features which can really only be like made live through through a certain architecture. [00:14:26]

**Carl Vitullo:** I think another dimension of this is, to me, I think the React team has been very consistent about that framing for a very long time. Like they've always tried to be agnostic to anything you want to be able to do and to provide the best experience they possibly can, regardless of what setting you want to use React in. [00:14:46]

So, I think that is true that React is trying to influence the architecture that you develop apps around. But I also think that it's not entirely something that they're foisting on the ecosystem. I think it is very much responding to express needs from the variety of teams that they talk to and the variety of teams that they have worked with internally at Facebook. [00:15:09]

So I'm interested to see how the server components development goes, how that whole rollout works. But like this isn't anything shocking to me because from my reading of all of the conference talks and demos and how they've framed React, this seems very consistent to me. [00:15:27]

## Three TypeScript 5 highlights

**Carl Vitullo:** Matt, can you introduce TypeScript 5.0 for us? [00:15:29]

**Matt Pocock:** Yeah, so, well, this is pretty recent, I think, was it like last week or maybe the week before? TypeScript 5.0 is out and it brings a bunch of really cool new features, new optimizations, and I've been actually updating my course total TypeScript with the new stuff literally today. So it's fresh in my mind. [00:15:48]

And the three kind of headline items are, performance, TypeScript performance has gotten a lot better with this release, and that's due to a lot of internal changes that they've made. [00:15:56]

Decorators are now supported in TypeScript. TypeScript had support for like an experimental version of decorators to help it support Angular back in the day. But this is the new shiny stuff and the stuff that's actually gonna be adopted into JavaScript. [00:16:08]

The third one is a new type of annotation for generics, which sounds really, really nerdy, but it's going to, I think, make a lot of really cool stuff that you can do with tap script generics a lot easier, especially when it comes to, passing configuration to components or passing things around, or making abstractions that make your life easier as a developer. [00:16:27]

This kind of TypeScript knowledge is super, super useful. [00:16:30]

## TS5 performance improvements

**Matt Pocock:** So, Mark, do you wanna kick us off by talking about the performance things that they've done? [00:16:35]

**Mark Erikson:** Okay. The TypeScript team did a lot of work on their build tooling and code base structure in the run up to TypeScript version five. TypeScript first came out I think in 2012, so it's been over 10 years. Obviously the landscape of the JavaScript ecosystem has changed and TypeScript itself has changed dramatically since then. [00:16:56]

TypeScript's own source code is written in TypeScript, but a lot of the organization for that was using an early TypeScript feature called Name Spaces. For TypeScript version five, they wanted to restructure their code to use the more modern ES module syntax. [00:17:14]

There were a few reasons for that. One was to make use of TypeScript's own features while working on the code, but another was that the way that code got compiled for publishing actually made the TypeScript compiler run relatively slow because of the code that was generated. They figured out that if they restructured the code to use ES module syntax, , the JavaScript engine would actually be able to run the code faster. [00:17:40]

And the size of the package that they published to NPM would be smaller. I think the version four X packages were like, 50 or 60 megabytes extracted into node modules. And with version five, it's down to like half of that. The module structure changes also literally made the TypeScript compiler run about 10% faster. [00:18:01]

There was a fantastic post on the TypeScript blog where they talked about the nitty gritty technical details of the changes. One thing that I thought was fascinating actually they did a lot of work to convert everything all over to use the ES 2015, let and const keywords for variables. [00:18:19]

And then they found out that in some places that actually made things too slow because of how the JavaScript interpreter has to handle those variables and hand replacing some of those with var instead actually got things back to being about 10% faster. So it, it was a fascinating read, and some amazing technical detail. [00:18:39]

So summary is if you upgraded TypeScript five, it ought to actually do the compilation a little bit faster and it will be smaller to download. [00:18:47]

**Carl Vitullo:** Yeah, I had seen TypeScript 4.9 was 64 megabytes in node modules, and TypeScript five is gonna be 37 and a half, so like that's enormous. Very cool that they were able to get so much benefit to performance and module size and everything, apparently just from switching to ES modules, I say just I'm sure it was a huge amount of effort to convert such [00:19:08]

**Mark Erikson:** Massive amount of work. [00:19:10]

**Carl Vitullo:** code base to Right. Just a such a fundamental change of assumptions, [00:19:14]

**Matt Pocock:** I saw pr, I think it was like 500,000 change lines or something Crazy. [00:19:19]

**Mark Erikson:** There was a lot of automatic conversion work going so they can keep it updated. [00:19:23]

**Carl Vitullo:** No doubt. I can't even imagine how you would begin to audit that the code still performs the same, it doesn't immediately break everyone's code, [00:19:32]

**Mark Erikson:** what tests are for. [00:19:33]

**Carl Vitullo:** ( laughter) a lot of tests. But 10% faster and half the bundle size or 60% of the bundle size is pretty incredible. [00:19:41]

## TS5 decorators

**Matt Pocock:** Pretty neat indeed. Carl, you wanna talk about decorators? [00:19:44]

**Carl Vitullo:** Sure, Decorators are… they've been something that I've watched for— actually, they've been something that I stopped watching in my career because… I first heard about decorators in something like 2013. And, like five years on, they still hadn't an advanced past stage two. And it, that's the TC 39 standards process for introducing something to JavaScript has four stages, you know, like there's stage 0, 1, 2, 3, and 4, where 4 is shipped. [00:20:09]

So decorators were stuck at stage two for [00:20:13]

**Mark Erikson:** Years. [00:20:14]

**Carl Vitullo:** like close to a decade with like competing proposals and different libraries were using different incompatible versions. I know that like Mob X went pretty hard on decorators pretty early, and I think that ended up burning them pretty badly. [00:20:26]

**Mark Erikson:** Angular has been all in on decorators since day one. [00:20:29]

**Carl Vitullo:** Yeah. And so it's I saw that they advanced to stage three, which is, I think advancing from stage two to stage three is one of the more crucial hurdles to cross because it means, I think Stage 2 is, &quot;okay, we have a proof of concept for how this is gonna work.&quot; Stage 3 means &quot;we have validated that this will work in existing JavaScript engines.&quot; [00:20:49]

**Mark Erikson:** it's going from alpha to beta, basically. [00:20:51]

**Matt Pocock:** And TypeScript, too, takes that. When it gets to stage three, like optional training did a couple years ago, it takes that as a sign and it says, okay, now it's in stage three. Now we are gonna implement it. So everything that gets to stage three will be implemented by TypeScript. [00:21:04]

**Carl Vitullo:** Okay, cool. I didn't know that was their go signal, but that makes sense. I think that I think last year when decorators advanced at stage three was like a pretty, maybe a quiet, but I think a pretty big turning point for the standard, finally, we can have a lot more confidence that they're going to land in the form that they are described there. [00:21:20]

Maybe now we'll see a resurgence of libraries and tools making use of decorators as a first class api. And maybe now I'll actually consider using them because, you know, I'm unlikely to have the rug pulled out from under me and have the spec totally change. [00:21:34]

**Matt Pocock:** Yeah, I think they've made it inning in kind of like a limited form. So the old experimental decorators had more metadata associated with them, so, which is not something they wanted to guarantee in this new version. So the new version is a little bit stripped down, a little bit less powerful, but I think there's probably gonna be more proposals that they're gonna add new things onto the decorators. [00:21:55]

But I think they've just split the conversation up into a couple of steps, basically. But now that we've got this sort of basic decorator stuff, which is. For those who don't know decorators, let you wrap a method in a class or wrap a class itself and just let you bundle up some logic within that wrapper to, let's say, add logging to a function, for instance. [00:22:12]

Or, validate the parameters of a function that gets passed in super useful and I think really nice. And I think, yeah, I'm excited for what people are gonna build with this. [00:22:21]

**Carl Vitullo:** Yeah, and maybe to tie this back to the React ecosystem a little bit, I think decorators got a lot of excitement around the time when higher order components were one of the primary patterns in the React ecosystem, the idea was that, a higher order component is basically just a decorator, but without a syntactical feature enabling them. [00:22:40]

Yeah, I think that'll be interesting. Higher order components are much less common now, but , I think they still have a real place in the React ecosystem separate from hooks. Like if you're just trying to, if you have an existing component that works and you want to add a seam between that and whatever is rendering it to add props or guarantee behavior, like for instance, I've used higher order components as an authentication wrapper so I can ensure that a component will never be rendered if the user's logged out. [00:23:06]

So yeah, it'll be interesting to see what the impact of fully shipped standardized decorators will be on the React ecosystem. [00:23:14]

**Matt Pocock:** I saw that Rafael asked in the chat, are the decorators fully backward compatible? No, they are not. So, yeah, angular, NextJS apps that, or frameworks that rely on the previous experimental decorators they will have a difficult time. I think too, there's a really interesting thing about React developers in general because if you probably asked the median React developer, do you like classes or not, they were probably gonna say no. Right? [00:23:37]

Because I think a lot of React developers, especially those who made the transition when hooks came in, they'd probably feel a little bit of, hatred towards the old class components where you couldn't compose logic so easily where you had to do all of this, do all of that. So I feel like decorators might just go over the heads of some people who are primarily using React and JavaScript, but don't sleep on it. [00:23:57]

There's a lot of cool stuff there. [00:23:58]

## TS5 const annotations

**Carl Vitullo:** Cool. Matt, can you take us through the constant type parameters? [00:24:02]

**Matt Pocock:** Sure. So this is a funny one. This is one that's gonna affect, I think, library code more than application code. But what it lets you do is it lets you, when you create a generic function, and for those who dunno what that is, it means that when you call a function, you can tell TypeScript to capture something about the way that you're calling that function. [00:24:19]

So one of its arguments, for instance, and you might have used in TypeScript, you might have used a feature called `as const`. And `as const`, what it lets you do is it lets you take a configuration object and infer it to like its tightest level. So it, if you have like a b ABC in there with like, let's say, let's say an array of success loading or arid for instance, if you wrap that array in as const, it actually infers success loading or arid, instead of it just being an array of strings. [00:24:47]

what this behavior does is it gives you that same behavior when you infer it in a function. So you can say, this is like const t, and then that t or that thing that's being inferred will be it's, God, it's so hard to describe without actually looking code front of… my days. I think the question is like, when should you use it? [00:25:04]

What is this going to help with? This is gonna help a lot, I think, with people who are just dipping their toe into generics and trying to figure out some of the weird stuff that's in there. I'm really excited to start teaching it more because it's gonna mean that more people get more access to more powerful abstractions, I think. And I think that's how it's gonna look. It's, you are gonna find it a little bit easier to make more complicated generic functions. And I think lowering that bridge is something that TypeScript really needs to focus on, because I think in every application you are going to have a part of that app. [00:25:40]

Probably like the utils folder or some sort of shared abstraction that is going to be complex TypeScript wise. Is there anything that they can do to lower that? Drawbridge a little bit. Let a few more people in I think is great. And I think constant annotations is part of that. [00:25:54]

**Carl Vitullo:** Yeah, I think that this const annotations would've made a very specific case that I've run into a number of times, easier to work with. When I'm working with TypeScript, I pretty frequently end up with basically, like a lookup object keyed by something to get some value. [00:26:09]

And I'm trying to come up with an example off the top of my head, and I'm blanking, [00:26:13]

**Mark Erikson:** Enums to components or something. [00:26:15]

**Matt Pocock:** The thing that comes to my mind is translations, right? So imagine you have like an object of translations, where the keys are the, the translation and then the the actual values are the actual English translation. If you don't use as cons there, or you don't use cons sanitations, then it's gonna just sort of infer it a string. [00:26:32]

And so you can't do any sort of like clever interpolation there. Like you can't get really cool with it. But if you strap it with a cons, then you can actually get the literal values of the strings. And so you can, detect whether a string has like a dynamic parameter, like a name or something, and then you can, oh, it is there's just so many cool things you can do with. [00:26:49]

**Carl Vitullo:** Yeah. I am excited for this. It seems like a cool change. [00:26:52]

## TC39 proposal advancements

**Carl Vitullo:** Maybe a little bit related, moving one step of abstraction up from TypeScript the TC 39. Technical committee that determines the underlying standard. The JavaScript is an implementation of, had a new meeting and they advanced a couple of proposals. [00:27:06]

So we've now got well one, one exciting one that I, people have been asking for forever is iterator dot range. Finally we have a way of generating an array range from a standard library primitive. [00:27:16]

We've got explicit resource management, which actually that one confused me. It seems something somehow related to like generators somehow improves a pattern that's commonly used around there, but I don't know. I've never found generators that useful for things that I was trying to do, so I don't really understand that. [00:27:32]

There was also Async context, which was advanced, I believe, to stage two. I seem to recall some conversation in the React ecosystem specifically about how like React would make use of the async context primitive. So I think that they had some input onto that standard, but I'm blanking a little bit on the specifics. [00:27:49]

**Mark Erikson:** My vague understanding of that and that that's more from reading Twitter chatter than the actual documentation is. It's it's a little like React context in that you have some value, which is now accessible anywhere, but instead of being based on like a React component tree, it's like anywhere within an async call stack can access a value. [00:28:09]

I think the hypothetical idea would be like, you have a server, you have some server side code, you have some incoming data, and you want to store information like per request call stack. So you know, this user, that database value, et cetera. And it should all go away when that async call stack unwinds. [00:28:28]

I think that's the general idea. [00:28:30]

**Matt Pocock:** Is the idea then to use that for streaming or to use that for server components? [00:28:35]

**Mark Erikson:** I would assume server components because my understanding is that normal React context does not work in server components. I think. And so having this ability built into Node and in the language itself would then act as your equivalent for, I need to access this value anywhere within a set of server components. [00:28:56]

**Carl Vitullo:** Sure. Yeah. This reminds me, I had two thoughts when I was reading this spec. My first one, I tend to write a lot of, functional code rather than object oriented. And one sort of downstream consequence of that is I tend to use, slash, some might call it abuse, module scope variables for tracking state, which that works great in a client side application where every, every user has their own context. You know, it's running on the user's machine. It does not work at all on the server side of things. [00:29:25]

So I think that this is a new language primitive that would allow me as a, as an application developer to use a similar pattern to module scope singletons, but in a way that works out of the box on the server side. [00:29:40]

That leads me into my second thought, which is this smells a lot like a. The session global from PHP it, I think it's not exactly that because it's not a global, but I think it allows you to declare something similar to a session wherever you want. [00:29:54]

So it's, you know, it's not one global session per request, but you can say this is a session associated with this specific running context. So I think that's really interesting. That seems like a pretty large change to the assumptions that a JavaScript run time is based on. [00:30:08]

There are some other some other small ones. I saw Float 16 array, just a new typed array. It sounds like that came directly out of a W three C request where they want to offer more precision for canvas buffers. [00:30:21]

And last one that I wanna highlight is the Await Dictionary proposal, which looks like it's a sort of object based complement to Promise.All. [00:30:29]

It allows you to await an object full of promises and destructure that as named, named variables instead of having to convert it to an array and then deal with argument ordering. [00:30:39]

**Mark Erikson:** Which, I mean, it's syntax sugar, but if I can totally see how that would be handy. [00:30:43]

**Carl Vitullo:** Cool. Yeah, some big changes there. [00:30:44]

Mark, what do you wanna talk about? [00:30:46]

## React labs update

**Mark Erikson:** Okay. So the, one of the other really big things that came out in the last few weeks the React team put up what they call a React Labs post, which is their category for, here's the stuff we're experimenting or doing research on recently. Lot of really good, discussions there. [00:31:02]

But some general highlights. One is they talked about their work on React server components. They talked about some of the changes they've made since the first proof of concept announcement that they did a couple years ago. They talked about how you can use async await within server components. [00:31:18]

The first example of server components is shipped inside of next experimental app router. And they're doing some other work around being able to stream data and metadata as well. [00:31:28]

## React Forget

**Mark Erikson:** The part that I was really excited to read to the point that I'd been bugging some of the team members about this on Twitter at React Conf last year, the React team announced that they were working on an experimental React, optimizing compiler, codenamed React Forget. [00:31:45]

And just for reference, the React team has a habit of like every project they have has a codename that starts with the letter F. React Fiber, React… Fizz, React Forget. [00:31:56]

So the idea that they talked about is you write a normal React component and it looks at it and it figures out how to rewrite the internals of the component to better memorize and optimize the inputs and outputs of that component with the goal that it would eventually help save on this whole, like, &quot;when is my component going to re-render?&quot; [00:32:19]

How do I avoid unnecessary renderers? When should I use, use memo and use callback and all that stuff. And that if the compiler works out, it would basically just do all that for you. They've had a team of about four or five people working on this for about the last year, and they gave a status update. [00:32:38]

The general summary is that, they've got the basics of the compiler working. And they've bec because you can have literally any JavaScript logic you want in a React component, writing a compiler is really, really hard, versus a, a framework like Angular that uses HTML templates. [00:32:55]

So they've started off by supporting like just a small amount of the JavaScript language as acceptable code that the compiler knows how to work with. And they've been trying, trained out inside of Facebook, they have been also trying to figure out like, how tied is this to babble as a compiler. [00:33:12]

So they've made progress on it. They're hoping to open source it eventually. I don't know. Like I'm really excited about this. If the compiler works out, it will make our React apps run faster, it'll make it easier for us to write components. We won't have to think about that stuff as much. I just really want to see this in action and play with it myself. [00:33:31]

**Matt Pocock:** To play like a bit of devil's advocate here — this does seem super cool — is there a danger that you could, it could over-optimize in certain places because, like caches aren't free. Like to a cash, reading from a cash or. Would it optimize things into positions where you would get bugs? [00:33:46]

Are there ways to disable the compiler profile if you, I mean, I dunno why I'm [00:33:50]

**Mark Erikson:** yeah, there's there's always caveats and trade-offs. One, one of the most obvious ones I can think of is that it'll, like, the idea is it'll look at the logic in your component. And for example, maybe it'll, it, maybe it sees that your component outputs like three different chunks of content in the JSX, and maybe it can figure out that one of those never changes. [00:34:10]

The second only depends on piece of data. A and the second depends on piece of data B. Now, if I were to optimize that by hand right now, what I could do is extract the first chunk of content to be some JSX elements outside the component and just use that variable every time. And then inside the component right now I could have like a useMemo A, useMemo B. [00:34:37]

So the idea is that the compiler would hopefully be able to figure that stuff out and figure out, this piece never changes. This piece only changes when data A changes. And the other piece only changes when data B changes. It is possible to do that stuff, but the compiled version might literally be more lines of JavaScript code. [00:34:58]

So there could be, for example, an increase in the bundle size because it now has the extra logic to determine what needs to be memoized and whatnot. There's always a course of bugs because a compiler is just software, and old software can have bugs, but that's what they're trying to figure out right now is how much of the JavaScript language does it know how to support, what kinds of restrictions does it need to have? [00:35:19]

How good is the code output? And they're testing it against fa, parts of Facebook internally to try to prove all that out. [00:35:27]

**Matt Pocock:** It's interesting cuz React, hasn't had a compiler before, but other frameworks, like Svelte or Solid. Have their own compilers, which do their own optimizations as far as I'm aware. So it's interesting that they're joining onto this and it's interesting that this takes React from being just JavaScript, to having this little optional layer, I guess, on top, that sort of takes it away from just JavaScript. [00:35:48]

So we were talking about React positioning before. I wonder if that impacts it at all. [00:35:52]

**Mark Erikson:** It, it does in a couple ways, and this also ties back to the server components bit. Nothing about server components suddenly makes our existing client side React logic not work. You can still use Create React App, you can still use Vite, you can still data fetch in a component on the client if you want to, but now there are new options on the server that give React new capabilities. [00:36:17]

So in the same way, let's say React Forget works, let's say the compiler comes out and it's, you know, it's now built into, next or Remix or whatever. You could still. Build a page by linking the React script tags and writing some plain JavaScript code that, generates the output with React dot create element, none of that goes away. [00:36:38]

But now there is a newer approach that most of the apps would use, in the same way that, most React apps do use, webpack, Babel, SWC, esbuild, et cetera as a build step. So like, yeah, you could do things the old way, but there would be a new approach that, while technically optional would probably be built in to all these different frameworks by default and hopefully it would just work. [00:37:05]

Fingers crossed. [00:37:06]

**Matt Pocock:** Yeah, this feels kind of like eslint, really. Like, it's sort of an optional layer if you want to add it, and the React team has built like custom eslint plugins that help you, prompt you to add different things to useEffect and things. So it feels a nice little, it's a nice to have, right? It doesn't feel critical. [00:37:20]

**Mark Erikson:** Well, if it works out the way I think it will, I think it'll be a technically optional, but you would really, really want to use it for the benefits kind of a thing. [00:37:29]

**Carl Vitullo:** Sure, not using it is an escape hatch for if you are working in a context where it doesn't work. For sure. [00:37:35]

**Mark Erikson:** Mm-hmm. The one other thing to note about this Dan has been trying to figure out like how he wants to describe these things, and this goes back to all the debates over the last couple months about like signals and Reactivity versus, virtual doms and all that kind of stuff. And one of Dan's point is that assuming again, that the compiler works out, the code that you write in your component would still be normal JavaScript, array maps and using plain variables and plain object. [00:38:03]

There's no special wrappers around the data. You're not having to worry to remember to call functions to access the data, but that the code you write is still basically playing JavaScript and then it's the compiler's job to figure out how to make that better, instead of, you know, needing to remember like, I have to call signal dot, get to access a value, or, some of the other rules there. [00:38:26]

So his argument is that the compiler would give you basically all the performance improvements, but without you having to worry about it in your own code. [00:38:34]

**Carl Vitullo:** Well, I'm always all for not having to think about something, so that sounds pretty great to me. [00:38:39]

## Offscreen rendering

**Carl Vitullo:** That React Labs Post has so much detail in it about what they've been working on. I think it's really cool. Something in there that I thought was pretty interesting, the offscreen rendering feature. [00:38:48]

**Mark Erikson:** Yes. [00:38:49]

**Carl Vitullo:** I'm excited for that. I think there's, that's something that I've written some, components to help with. Like, they talk about it, your options generally having been to either not render it and then that has a performance cost of, it's gotta tear it down and set it back up [00:39:02]

**Mark Erikson:** Losing state. [00:39:03]

**Carl Vitullo:** Right. Yeah. Losing state, You either lose all your state and blow it away, or you hide it in CSS and then you still have to deal with all the performance implications of [00:39:13]

**Mark Erikson:** or you put it in Redux or recoil or Mob X or [00:39:16]

**Carl Vitullo:** Right, which is its own can of worms. This offscreen feature sounds very cool. I also like that it's taking advantage of a feature that was implemented in React. I think in React 18, like this is really a priority hint. This is a way for us as developers to say this is low priority. [00:39:35]

But framing it as &quot;offscreen&quot; is interesting and useful. It, I think it communicates more about developer intent, like this could have been introduced as &quot; deprioritized&quot; or &quot;low priority&quot;. But I think framing it as &quot;offscreen&quot; helps clarify when it's meant to be. [00:39:51]

**Mark Erikson:** So I can tell you that we are actually using the Offscreen API in my day job at Replay right now. One of my teammates is Brian Vaughn, who used to be on the React Core team. And so he's brought over a lot of his knowledge of these relatively new and somewhat still experimental React features. And we've been using some of them in Replay's code for the last year. [00:40:12]

So the offscreen component is available in React, but only in the daily experimental builds, not the full like official production releases. And so Replay uses an experimental build of React that has the offscreen component available. [00:40:29]

We've been using it for, in the last, in most of the last year, and it actually works pretty well. We did run into one or two cases where they were having to like fix bugs in the behavior, and we actually got bit by that once or twice, but for the most part it works pretty well. [00:40:43]

You just wrap an offscreen component around like the tab panel, or something that you care about. And then as you're switching tabs, instead of tearing down the panel, you just set, `offscreen = false` and it keeps it around and it works great. [00:40:58]

**Matt Pocock:** They've been thinking about this for a while, right? This links back to the reason that because there was, sort of, a little bit of a furor when useEffect changed in React 18 to fire twice in dev mode, right? [00:41:10]

**Mark Erikson:** Yep. [00:41:10]

**Matt Pocock:** And the reasoning behind that was the offscreen was coming and can't remember what the link was. And could you fill in the gap for me? [00:41:19]

**Mark Erikson:** Yeah. So, [00:41:20]

um, [00:41:20]

hang on. There's a very specific discussion from the React Working Group where they, they talked about this, and this is one of those cases where they iterated on how they wanted to describe it. Like originally they were saying like, &quot;it's really strict effects and we're gonna make effects fire twice.&quot; [00:41:37]

And then they changed it to emphasize the positive instead of the negative, where it's like, well, &quot;React is going to preserve your state instead of fully unmounting the component,&quot; so kinda like the same thing but a different perspective on viewing it. So like reading that React Working Group discussion covers some of this. [00:41:55]

**Matt Pocock:** Nice. Yeah I'm really hyped for this. I think it's gonna be great. [00:41:58]

## Server Components

**Carl Vitullo:** There's a lot we could say about React server components as well. I have not stayed super on top of their development, so I don't feel like I have the most context. been a, there's been a lot going on there. [00:42:08]

**Mark Erikson:** The one line status summary I'll give is, they exist. The big issue is that they need to be integrated into a bundler and a router and a build system to have any value. [00:42:20]

So right now, the primary way you could use them is by using the next 13 experimental app directory. Other framework authors are trying to play around with like, how would I build this in to Remix or just like a, or, standalone webpack config or something. [00:42:39]

The problem is because it's still very experimental, there's no documentation on how to do that, so you've got like individuals playing around with it and trying to reverse engineer, how do I make use of this functionality by looking at next, or looking at the React test just because there, there isn't documentation on how to do it, but a bunch of different frameworks are playing around with the idea at the moment. [00:43:01]

**Carl Vitullo:** Yeah, definitely. I'll respond to that in a sec. [00:43:03]

We are coming up in an hour and Matt Pocock has a hard stop here. So yeah. Matt, thank you so much for coming out. It was really great having your perspective on TypeScript changes. [00:43:11]

**Matt Pocock:** No worries. Really, really fun to chat to you guys as always. [00:43:13]

**Mark Erikson:** Yep. [00:43:14]

**Carl Vitullo:** All right. Thanks so much. [00:43:15]

**Matt Pocock:** See Bye. [00:43:16]

**Carl Vitullo:** That context for server components I think is interesting. It's the core team is really saying these exist, they are in use by some people, but they are not for general consumption. [00:43:28]

**Mark Erikson:** Yeah. [00:43:28]

**Carl Vitullo:** That reminds me of now, close to 10 years ago, that was the state of React context. [00:43:34]

It was undocumented feature. They were using it internally, they knew that people would want to use it, but they weren't comfortable with the api. They wanted to iterate on a little bit more. [00:43:43]

**Mark Erikson:** Funny thing is, I think React Redux, and Dan Abramov, like one of the first cases that an external library started using the original Legacy React Context api and that helped prove how some people wanted to use it. It also helped expose some bugs and weaknesses in that API design, and that's what led to the React Team building the current Context API that came out in React 16.3 a few years later. [00:44:13]

**Carl Vitullo:** Yeah, and I was refreshing my memory on some of the timing around React versions recently. I didn't realize that we only got context around the same time as we got hooks [00:44:22]

**Mark Erikson:** it was a few months. It was five versions and a few months earlier. Context came out in 16.3 hooks came out in 16.8. [00:44:30]

**Carl Vitullo:** yeah. Okay. Just to me, context has been around forever. So seeing that actually not that, in, in the overall lifespan of React, it was officially released, not that far away from hooks. Like those would feel like two totally different epochs to me. [00:44:44]

**Mark Erikson:** Very much so. [00:44:46]

**Carl Vitullo:** But yeah, so seeing the React core team talking about. Server components in a similar sort of way of like, Hey, don't use this yet. It exists. If you poke around, you can figure out how it works, but we're not going to release documentation yet. Like that is certainly something that, that is a pattern that they followed before. It's not new. Not new for them. [00:45:06]

**Mark Erikson:** And to be fair, Dan was grinding out the last several pages on the new doc site, and that took him a long time to do it. They just literally haven't had time to write documentation for things like server components, even if they were like fully done, which they're not. I mean, like literally they haven't had time to write documentation on the these things and how you would integrate them into a bundler. [00:45:29]

**Carl Vitullo:** This feels to me like they are looking at how people are using React and seeing that many people are reaching for Next and Remix over just using React and both Next and Remix found their own solutions for something like server components. [00:45:45]

So to me, this feels like they have been observing what's going on in the ecosystem, seen what patterns have arisen, and now we're trying to learn from those and introduce it as a feature within React so that then both Next and Remix can expose the same underlying abstraction rather than having, rather than fragmenting the community and coming up with their own core concepts for it. [00:46:09]

I think that's absolutely the right approach for them to take and I'm sure that Next and Remix are excited for that because now they will have one less, feature that they need to maintain. I know Remix uses a .client or .server file name annotation I'm sure they would love to not have to maintain a feature for determining that separation. [00:46:28]

**Mark Erikson:** The Next folks are obviously very excited about React server components. Probably cuz you know, half the React team now works at Vercel. [00:46:34]

**Carl Vitullo (editing):** Fun fact, the core team has 25 members. There are 20 developers and five managers. So four reports each on average. Three of the engineers are independent three, work at Vercel and 19 work at Facebook. There are a lot more folks building React than many people realize. [00:46:50]

**Mark Erikson:** I think the Remix folks are still kind of hesitant about the whole idea and how it would fit in. [00:46:54]

**Carl Vitullo:** That's interesting. I didn't realize that. Yeah, I guess that makes sense though because so many of the core team is now at Vercel, Next is very much under their domain at this point. [00:47:03]

## Asset Loading and Transition Tracing

**Carl Vitullo:** Yeah, I guess closing up on the React Labs post, they also mentioned asset loading and transition tracing. [00:47:09]

Both of those to me sounded like features that are likely to be pretty big sea changes for developer experience. They're not very flashy features. You know, they're not exciting, you don't get hype about it, but I think that both of those have the potential to be massively influential on what it feels like to develop code. [00:47:27]

So I'm excited to see what comes out of those, but I, I don't know how much there is to talk about it. [00:47:31]

And transition tracing, just to explain it to the, to audience. If you are doing performance profiling of a React app right now, they have code in there to track component mounting and unmounting. They can annotate your flame chart with what component is where. [00:47:45]

But something missing from that is events. So you can't see on the flame chart when was a button clicked, when was a form input fired? So my understanding of this transition tracing feature that they're working on is it will annotate your flame chart with tho those details, which I, as someone who's done a lot of performance profiling for React applications, that is a pain that I have felt many times and I'm excited to see it come out. [00:48:09]

**Mark Erikson:** I think the other aspect is that with React eighteen's ability to split a render into many pieces over time it's harder to be able to track like, really when did this render start and finish? And they, they wanted to make that more feasible. [00:48:25]

**Carl Vitullo:** Interesting. Yeah, that makes sense. Yeah. I know they had done, they had the Reactive tools, which had like commit and [00:48:31]

**Mark Erikson:** Mm-hmm. [00:48:32]

**Carl Vitullo:** I can't remember the other term, but it had like [00:48:33]

**Mark Erikson:** render phase and commit phase. [00:48:35]

**Carl Vitullo:** Yeah, sure. And it, it could, like, you could use that to discover expensive components, but it wasn't super useful for actually figuring out what caused that expensive re-render to happen. [00:48:48]

I think they said in the React Labs post that they had actually removed some of the code that was powering some of that because it just wasn't working for people, which was my experience. So, Cool. [00:48:57]

**Mark Erikson:** Can I go off and talk about a work project for 30 for like one minute? [00:49:02]

**Carl Vitullo:** Ooh, please do. [00:49:03]

**Mark Erikson:** okay, so, I work at Replay. We're building a time traveling debugger for JavaScript, and we have the ability to inspect anything that happened inside of a running recorded JavaScript program. And over the last f last couple months, I've built some experimental features where I can write code that asks our backend, Hey, when did this piece of code run? [00:49:28]

Or what was the call stack when it ran? And do more further analysis from there. And over the last couple weeks, I built an experimental feature in Replay, like, because I know a decent amount about how React works inside. I figured out that every time you call set state, it goes through one internal function inside React. [00:49:50]

And if you ask Replay, tell me every time that function ran, and then you walk backwards up the call stack to user land code. Eventually you find the place in your code that you called setState, or in a lot of cases called a Redux dispatch, which goes through Redux and then eventually hits the same React internal function. [00:50:13]

So I built a very, very experimental proof of concept panel where it, if you make a recording of a React app, it will walk through the recording and show you list items that represent every time your code called Set State. And then you prep, you click on one of those list items and it jumps you to that line of code and the time in the recording when it made that call. [00:50:38]

It's still very experimental and proof of concept, but it does actually work. [00:50:43]

**Carl Vitullo:** Cool. Yeah, I have not used Replay yet. I, and honestly at this point in my career, I'm not really doing like heads down day to day React code to the same extent that I used to be, but, I think if I were in a place where I was more frequently debugging complex issues… oh man, Replay just sounds like an incredible boon for productivity. [00:51:03]

So getting more understanding of their internals React. Heck yeah. [00:51:08]

**Mark Erikson:** Hmm. That also actually ties into something else I'm doing for my day job, but it will actually, hopefully have a benefit to the Greater React ecosystem. React ships multiple files in node modules, and they ship both a development copy of the React code, already bundled, and a production copy of the React code, bundled. [00:51:27]

And the problem is that they have never shipped source maps. And source maps are what a JavaScript debugger uses to be able to translate from the minified code that is actually running in the browser back to like the original source code files. So like if you ship source maps with your application, even though it's been mangled down to one minified bundle, when you go to debug it, you can still see source/features/my-component.tsx and debug that original looking code. React has never shipped source maps. [00:52:01]

And so that's why whenever you see like a, an error stack trace from React in production, all like there are no function names, everything's like, two letter gibberish. if you were to say like put a break point in a function component and then step, step, step, step out of the component back into React's, internals, it's all gibberish and you can't read any of it. [00:52:23]

At Replay, we use source maps to also help debug code and so I as a Replay employee, have put in work over the last couple weeks to modify Reacts build system so that it will actually generate source maps for Reacts production bundles. And I got it working and I have a pull request up in the React repo. [00:52:47]

I just need to convince Dan Abramov to actually merge that PR. So assuming that gets merged, fingers crossed, then starting with the next React release, hopefully, probably 18.3, you would be able to see what the original code looked like for the production bundles. In a, like, in like a deployed application if an error gets thrown in production, at least the stack trace would be a little more readable. [00:53:14]

The React internals are really complicated, so you're still not gonna understand what's going on, but at least you could read the code. [00:53:19]

So I'm really, really hoping that I can convince Dan to merge that PR within the next couple of days. [00:53:23]

**Carl Vitullo:** Yeah. Very cool. Well I hope to see that la I hope you're able to convince Dan that that's a valuable contribution. I think sounds great. [00:53:30]

**Mark Erikson:** Like, it works and they've got their CI system set up to do example builds from the PR. So you could try installing a copy of React from that PR right now if you wanted to, play around with it. But I tested it out in, a couple different projects, a Vite app, a next app, et cetera, and the source maps look pretty good. [00:53:51]

**Carl Vitullo:** Nice. Heck yeah. [00:53:52]

**Mark Erikson:** I probably oughta call it a day here and actually go get something done. In fact, what I probably had to do is go back to that PR and see if I can make a couple tweaks Dan requested. [00:54:00]

**Carl Vitullo:** Ha. Well, thanks for going 12 minutes over time with me. It's been really great recapping the news and the React ecosystem with you. [00:54:07]

**Mark Erikson:** Good stuff. [00:54:08]

**Carl Vitullo:** Excellent. All right. Thanks so much. See you guys next time.
