---
title: Sunil Pai and Mark Erikson
date: 2023-03-16
time: 11am PT / 6PM GMT
location: Q&A Channel on Reactiflux
description: "Rewrites! Everyone wants to do one, but the software industry is littered with examples of failed rewrites. Our host Carl Vitullo is joined by Mark Erikson and Sunil Pai to talk shop about what they’ve looked like in our careers, and how to help make sure they’ll be successful."
people: "[Mark Erikson](https://twitter.com/acemarke) and [Sunil Pai](https://twitter.com/threepointone)"
---

<iframe src="https://podcasters.spotify.com/pod/show/reactiflux/embed/episodes/Office-Hours--Rewrites--with-Sunil-Pai-and-Mark-Erikson-e210rgo" height="102px" width="400px" frameborder="0" scrolling="no"></iframe>

## Introductions

**Carl Vitullo:** Thanks so much for joining us for another Office Hours in Reactiflux. I'm here today with Mark Erickson, acemarke, and Sunil Pai, threepointone. Mark. I'm sure you all know Mark. He's been here for years! [00:10]

Many of you may know Sunil Pai. He's been on the React Core team. He worked at Facebook, he worked at CloudFlare , he has worked at a bunch of places and given a bunch of conference talks and is currently doing his own startup party kit for interactive multi-player experiences. Sunil, you want to introduce yourself a little bit. [00:28]

**Sunil Pai:** But you did such a good job! [00:29]

Hey. Hi. Yeah, my name's Sunil. I did all those things. I'm super excited to be talking about rewrites because, mostly, we don't even talk about product engineering and social media anyway. A lot of the attention goes to libraries and design patterns and well, a bunch of hyped up stuff. [00:45]

But product engineering is what drives the world and rewrites are such an important part of it, and I wanted to share some of my experiences. Also, I get to hang with my buddy Mark. Hi Mark. [00:56]

**Mark Erikson:** Yo! [00:57]

**Carl Vitullo:** Yeah, definitely agree. Rewrites are just a very real part of managing tech debt over a product that's going to be used and maintained over a period of years. So I think they approach inevitability as a product continues to be maintained. [01:11]

## First rewrite

**Carl Vitullo:** Sunil, so what was the first rewrite project that crossed your path in your career? [01:16]

**Sunil Pai:** The first big one was when I joined Yahoo in late 2010, early 2011. Yahoo at the time was going through a not so great period, that they'd just gotten a new CEO and everyone was happy with him because he used to be the ex-CTO of PayPal. [01:33]

But then one day in the news, I think some. Investor was trying to take over the board or something, discovered that he had faked his computer engineering degree, so he got fired for it. It was hilarious, it was so dramatic. But then my favorite CEO of all time took over Yahoo, Marisa Meyers, she's so cool. [01:51]

In the middle of that, we were rewriting Yahoo Maps to move away from being a fully Yahoo product to using the tiles from Nokia as a provider and. That was a fun project. [02:02]

It was also an interesting time for the company. Fun fact, if I'm right, Yahoo Maps and Google Maps actually launched within 24 hours of each other. Some, some point during the two thousands, but Google just, yeah, but Google just killed it. They did such a great job. Anyway but this was my first job doing a rewrite, and I was worried, but I learned a bunch of things right then how to do it without collapsing and failing. [02:25]

But that's, that's the first one that I did. That's, that's my first one. [02:28]

**Carl Vitullo:** And how long had you been working as a professional developer at that point? [02:31]

**Sunil Pai:** I had been a professional software engineer for about seven years by then. [02:36]

**Carl Vitullo:** Oh wow. Okay. So pretty established. [02:39]

**Mark Erikson:** You actually got to do new stuff for a while. [02:41]

**Sunil Pai:** I did get to do new stuff, of course. When I started off as a JavaScript engineer, it wasn't even considered real engineering. It was widgets, and we were the worst paid in the office for a while. [02:52]

## Some web dev history

**Sunil Pai:** And honestly, that was great because people just left you alone and you could learn. I remember when Firebug 0.1 was launched, it was incredible, like just such a great day. For the younger folks in the audience, before you had your fancy dev tools, you had to use window.alert() to actually debug your code and see what the values were, sometimes there were bugs that didn't show up when you used alerts. So it was a lot of trial and error to build these applications. [03:16]

I don't think that was the concept of a rewrite at the time. I think it was always burn everything down and let's just do a new thing. So the, it wasn't really a rewrite. People just used to build stuff and then build it again. Yahoo had a way more serious way of approaching front end programming. They had their own module system, bundlers, delivery and insight. [03:37]

And that was one of the reasons a rewrite could make sense because we could actually say, Hey, let's work on these modules first. Hey, let's make an architecture diagram where these things point to these things. And thankfully I could write JavaScript professionally by that time, so it wasn't too hard. I think it was good. [03:54]

## Mark's refactor experience

**Carl Vitullo:** For sure. Yeah. Mark, let me throw it over to you . So you've mentioned doing a lot of refactors and like major maintenance work in your career. Could you just talk about that sort of at a high level for a minute? [04:05]

**Mark Erikson:** Yeah, so right before we started, I was actually jotting down a list and trying to trace what time have I actually spent doing rewrites. I think basically I've spent about half my career at least doing rewrites or migrations or another [04:19]

2011 and 2012, I built a brand new app using GWT, Google Web Toolkit, which was a Java to JavaScript compiler. 2016, I went back and I replaced the GWT client entirely with React and Redux. 2017, the Backbone app that I was working on needed some new features, but I got frustrated with Backbone and figured out how to put React and Redux in the middle of all the Backbone. [04:46]

2019 we got permission to finish migrating our Backbone app to React and Redux, and there was another team's GWT app that we were going to completely replace the client with React and Redux. We spent a year prototyping that, had some good progress, then those projects got canceled entirely. [05:04]

I got switched over to be the team lead for an existing internal tool that was built with the classical MEAN stack, so Angular one on the client side and Express on the backend. And we spent the next two years migrating the client side to be to use the Next framework with React, Redux and TypeScript on the front end and converting the backend Express app to be TypeScript. [05:30]

And then in 2022, I joined Replay, and the Replay code base started as a copy paste of the Firefox dev tools. It used React and Redux, but it was very old school React and Redux from like 2015. And so we spent the next nine months modernizing that, deleting a lot of code, converting the entire code base TypeScript modernizing the Redux and bringing in really, really fancy stuff like alpha level React suspense things. [05:59]

So yeah, I've, I've spent at least as much time doing a rewrite or a migration of some kind as I have spent actually getting to build anything new in shiny. [06:08]

**Carl Vitullo:** Yeah. Wow. That's a lot of rewrites and major refactor projects through your career. [06:13]

Rewrites are definitely very fraught. I don't think I've ever been on a project that was branded as a major rewrite that was successful. I did work one place that transitioned from Backbone to React, but that was a gradual transition, not a rewrite. [06:28]

Sunil, I really liked the points you raised about like product engineering and the reality of rewrites as a necessary part of engineering. [06:36]

## Zero cost feedback loops

**Sunil Pai:** I've been thinking about this ever since we started talking about it on Twitter. I think my one line banger for this is, rewrites are possible if you have a zero cost feedback loop. And what I mean by that is, at any point of time, you should be able to demonstrate what the status of the existing project is, but also the work in progress is. [06:56]

So you'd be like, Hey, I'm, I'm trying out something new. Have a look at it. Can you share it very simply with a link to something. Are you able to get feedback on something before it's deployed? Are you able to deploy everything immediately to a smaller audience? And is it easy to revert a change? [07:13]

So this is what I call zero cost feedback. So if you can do this, that means that you can do course corrections, not just every sprint, and not just every day. Like you can do course corrections every hour if you want to. [07:26]

## Sunil's two largest rewrites

**Sunil Pai:** So the two projects that I think about for this are the two biggest rewrites that I've done, so one is we rewrote an e-commerce website, myntra.com, which is a very big apparel, clothing site in India. It got acquired by Flip Card simply because we scaled. Those were great days, and that was at the point of time when every PHP site was being rewritten with Node just so that it could scale. And we had to do that without shutting down the site. Like you, you can't say, Hey, come back in six months. You still need to have sales. [07:53]

The second one was Wrangler, which is the CLI for CloudFlare workers. That's another situation where we are like, shit. The existing cli, it wasn't particularly bad, but it was incredibly hard to iterate on. [08:06]

Like it was built with Rust and it was fast-ish, but it didn't really matter because it was mostly IO bound, and the one part of the thing that should have been in Rust was the bundler, but they used webpack instead, which is actually much slower. So we flipped it and we redid the entire CLI with TypeScript and used ESBuild as the bundler instead. So it made everything faster. [08:26]

But I remember the way we did both these projects, which is from day one, we started doing demos and, Hey, do you wanna see a cool trick? Imagine if you could use Wrangler without a configuration file, and we just infer everything. [08:38]

So you start off with the, &quot;wow, look at how great the experience could be,&quot; and then start filling in those features. And on the e-commerce side of thing, it was a, &quot;Hey, how quickly can we put up a much quicker shop?&quot; Every E-commerce site has like five pages. It has a homepage, it has a search page, it has a details page, it has a cart and a checkout, roughly speaking. [08:56]

So we started off with a search page because that's where most of the SEO juice would land. So we figured, if we could fix that, then we could work on the other parts really quickly. Being able to make a setup where we are like, &quot;Hey, for every PR we can make a deploy preview that you can check if you want to and give feedback on.&quot; [09:13]

Vercel has now actually formalized this by not only having preview URLs, but also having comments on previews. I don't know if you've seen this. It's such a great feature, by the way. Phenomenal stuff. I think that's why they did it. [09:24]

With the Wrangler cli, we used to publish every commit to a beta tag. We'd go into the community Discord and tell a bunch of people, &quot;Hey, like, you wanna try something new? Just do `npx wrangler@beta this thing`.&quot; [09:34]

if you are doing sprints, that would mean in a year you got about 26 chances for reviews and course correction. But if you do every commit, that means you have about a thousand chances at course correction. So that's a 20, 40 x in increase in opportunities to fix the thing. [09:51]

And I think that's the thing I wanted to talk about today, which is that's how you do rewrites. You don't do rewrites by saying, Hey, we are disappearing for six months, and we'll come up with something that looks exactly the same, but better for some reason. The trick is to just iterate like mad. What do you think? [10:06]

**Carl Vitullo:** Yeah, I really like that framing. I hadn't really considered about sprints versus commits and opportunities for review, but I think that's a really good way to think about it. It's so many more opportunities to get feedback. And what you also said about where those successful rewrites in your career came from, it sounds like they all started from a real point of friction for users. [10:27]

There was some technical reason why the current solution was not working as well as it could have for users and by making small demos of what improvements could look like and then working to get those into a suitable replacement. That does seem like a, a much more successful way to approach a rewrite than saying, &quot;ah, this is old! We need something new!&quot; And vanishing for six months, like you said. [10:51]

## Mark's experience, government project timelines

**Mark Erikson:** Funny, I'm definitely not gonna disagree, but it is kind of funny that my own career has had a somewhat different arc and experience in those terms. And a lot of it's because I spent the majority of my career working at a large government contractor where we would typically do development cycles that were six to eight months, maybe even like a year long. [11:12]

And even after that, there would be several more months of testing cycles and whatnot before the software finally got deployed. And on top of that, we were generally building internal tools, so we didn't have chances to show things off to customers and whatnot. [11:27]

So a couple of the, a couple of the things that I worked on like the rewrite that I did in 2016 I was actually able to basically disappear for like six to eight months and work on that stuff. Or the project we're working on in 2019 was going to be a ground up rewrite of the two different clients ,and we had all of 2019 to do prototyping and proof of concepting, which started to look an awful lot like real development, but can't do that cuz contract says we're not allowed to do development. [11:55]

And we were going to spend all of 2020 officially executing on that development. So very different environment from what you were describing but to kind of go along and, and support the point that you were making, the internal tool that I worked on in 20 and 21 was a live app. It was still an internal tool with a relatively limited user base, but we had actual people using it and as we were trained to do that, angular to next migration. [12:24]

We had to do it in a way that the site never went down and that we didn't, you know, go off and disappear for six months and be utterly unresponsive to user feedback. So we had to do it in a very iterative kind of way where every time we did a release, we were making an improvement and, being able to respond to, you know, bug fixes and that kind of thing. [12:45]

And then the same thing with Replay, where we completely gutted and rebuilt the client side bit by bit over the course of last year. And it was always functional, but it was always getting better as we went. [12:59]

## Replay, Mark's current work

**Sunil Pai:** Actually, I'd love to hear more about your experiences in Replay, by the way. It's just such a fascinating product. Company and all my favorite people are inside it, so I tell, tell us more. I want, I wanna hear more. [13:11]

**Mark Erikson:** Okay, fine! twisted my arm, okay! [13:15]

All All right, so quick sales pitch. I currently work for Replay, which is a time traveling debugger for JavaScript applications. And the basic sales pitch is that you download our special forks of either Firefox currently or Chrome coming shortly. You open up your website, you press the record button, use your program for a couple minutes, like, you know, press the button that accidentally makes everything crash, and hit save, and it uploads the recording to the cloud. [13:44]

You go to our website and log in, open up the recording, and now you see what appears to be the Firefox dev tools as an app in the browser because it basically did start as the Firefox dev tools as an app in the browser. [13:58]

But instead of debugging and like only being able to, you know, step forward, step forward, step forward — oops, I went too far. You now have the ability to jump to any point in time in the recording, and you can add print statements, which are kind of like console logs, but with superpowers. So if I put a print statement on a line that got run 10 times, I will now see 10 different messages from that line over in the console area because it's evaluating that at every time the line of code ran. [14:35]

And then you can jump to any one of those points. You can hover over the variables and see what their values were at that point in time. You can do the usual browser or the debugger, step in, step out, step over. And it's. It is amazing. I love using it as a programmer because it is possible to debug things that would've just been completely unsolvable otherwise. [14:59]

And I'm having a ton of fun building features for this. I've gotten to build some really cool things, like just within the last couple weeks I built a new experimental feature that checks to see if you're debugging an app that uses React. And if you are it reverse engineers every time you called Reacts set state function and shows that as a list over in the sidebar. [15:24]

And it also works the same way if you did a Redux dispatch too, because it turns out that every React render funnels through the same function. And so I look at the internals of React and sort of backtrack that and figure out what part of your code triggered the update. [15:38]

**Sunil Pai:** So tell us about the rewrite. If I understand right, the rewrite was for perf reasons, right? It was starting to get a little unusable. [15:46]

**Mark Erikson:** It was about maintainability. [15:47]

So Replay's client started as a literal copy paste of the source code for the entire Firefox browser dev tools as it existed about three years ago. And that code was React and Redux, but it was primarily written around 2015, 2016. So very early in Redux's life cycle and just when React was starting to get popular. And there were a lot of problems with this. One is that the code itself was extremely verbose. [16:17]

Think about all the old school Redux you've seen that has, you know, switch case statements everywhere and, you know, lots of verbose action creators and spread operators and all that sort of thing. It was using the old school React Connect api. It was using class components, and in fact the Firefox dev tools had some unique build constraints. Like for the longest time they could not use Babel to to compile JSX. And so there were some very old components that were still using this really, really ancient thing called React dom factories, where you called functions named div and span and li, instead of having the JSX angle bracket tags, [16:59]

The Firefox dev tools code, once upon a time, was written using the Flow type checking syntax. They had actually stripped all the Flow types out sometime before we uh, Replay started. So the code was all plain JavaScript. It was about 150,000 lines of code, and it was using a bunch of weird patterns that were also specific to the Firefox dev tools, where there were these mutable class instances that were wrappers around fetching data from the backend protocol that did the analysis of like, here's the contents of an object. [17:34]

So when I joined the code base was open source and you could even go back and look at how it looked, you know, a year ago. I knew it was React and Redux. I could look at it and say, okay, here's all the ways that Modern Redux Code can, you know, make this easier to work with. And so I started doing some of that work shortly after I joined. [17:52]

There was about 20% of the code base that had been written in the previous couple years specific to Replay that was relatively modern. It was TypeScript, mostly used function components and some React Redux hooks. But it was more specific to the new Replay features that had been built. So like all, all the existing debugger functionality basically was still the old school code. [18:15]

So I began trying to modernize the Redex code. I began trying to migrate large chunks of the codebase to TypeScript piece by piece. And later on in the year, Brian Vaughn, who used to be on the React team, joined and he started rewriting things like the the print statement and breakpoint functionality. [18:35]

And he began to introduce new patterns like React suspense for data fetching. Late in like, kinda like around August, September I went in and spent a couple months trying to eradicate that mutable class data wrapper instance pattern. For a while I didn't think I was gonna be able to do it. And then by chipping away at it piece by piece, I finally isolated the last parts down and was able to rip them out in one giant swoop. [19:02]

It was a nine month effort, but by the time we were done, the code base was down to about 90,000 lines, including a lot of the new functionality we'd rewritten after deleting like 40,000 lines of code that was entirely dead. [19:15]

All but a couple thousand lines of the code base are now TypeScript. It's better organized. It's much more readable, and we now actually have a good foundation and we've been able to spend the last couple months moving forward and building shiny new features on top of that. [19:29]

## Rewrites on small teams

**Carl Vitullo:** Nice. Heck yeah. And so you mentioned yourself and Brian Vaughn. How many other engineers were working on the code base while this rewrite was underway? [19:38]

**Mark Erikson:** Really just me and Brian. There we have, we have another teammate Holger who kind of splits his time between the front end and the back end. But for the most part, it's the two of us. [19:48]

**Carl Vitullo:** I've always thought having a smaller team makes things like rewrites so much easier. One of the major struggles, anytime I've tried to make a major code change that approaches a rewrite, separate from all of the technical challenges of actually changing the code. If you have other teammates who are still used to the, the old patterns, used to the old ways of doing things, then you have a social problem there as well. That just adds on the challenge. [20:11]

## Suspense rewrite at Facebook

**Carl Vitullo:** Yeah. Sunil, I wanna toss up your way cuz we, your experience sounds like it's, has included some larger teams doing big rewrites. You mentioned in the prep, the suspense rewrite at Facebook. Can you talk about that a little bit? [20:23]

**Sunil Pai:** Oh, that was that was a) fascinating, b) it was also one of the secret things nobody wanted to do, so what happened is, and at some point somebody's going to correct me about these details. But this is how I remember it. React had finished the fiber rewrite, and that underway working on the suspense. [20:39]

Hooks were already out there, and in fact, they were already being used inside Facebook for all their other projects. But suspense it turned out, required a bit of a rewrite from scratch. They'd tried a bunch to introduce it to existing code, and it worked well for some parts. [20:57]

But they realized… so the reason that time slicing, suspense, et cetera, was built into React. The Facebook use case that drove it is that on facebook.com, especially on the main feed, you have code from a number of teams on the same page. Specifically because there are different kinds of cards and panels. [21:15]

There'll be one, which is a… man, I don't even use Facebook that much, but you know what I mean, like every card is slightly different. And they're usually built by like different teams. These are teams spread across the world, and there are thousands of engineers. So you can end up in a position where, for example, one, not badly coded, but let's say a CPU intense card, can make every other card suffer and it's hard to coordinate. [21:37]

So there's a good computer science concept to solve this of cooperative multitasking, where you try to adjust CPU across different concerns based on priorities and whatnot. So one thing can't just take over completely. [21:51]

A big offshoot of this was the Scheduler project, which was supposed to become a web standard, and the team still talks to the Chrome team, I think, well, I don't know. It's been a couple of years, so I don't know if they're still doing that. But at some point it'll become a first class API that the browser provides you. [22:06]

But that was effectively invented inside React. I think Andrew did a lot of that work, as did Sebastian, but Andrew did a lot of it, from what I remember, And anyway, so, but for that to work, as you can imagine, the entire page has to be written with using the new React and components that take advantage of it with suspense and deferred transitions and what have you. [22:30]

So the whole team just started building that out. It was kind of fun because they also took the opportunity to change the whole design up. If you remember, it used to be the whole blues and grays before it became this bright white, well, they have a dark mode as well. So that was a project that I kind of got to see from the outside, but I didn't really write any of the code myself. [22:47]

I did some research for them on images and stuff, but it was fascinating to see probably one of the world's biggest websites/homepages being rewritten from scratch. And the way they did that is, because they have the world's best analytics, metrics, and dev tooling available, they have the best feature flagging system so they can push out, everybody merges to main. [23:11]

There's no branch-based developer workflow inside Facebook, but they do it with feature flags on and they turn on the feature flags for a small group of people and do measurements and see if it worked fine, and if it did, they turn it on for a larger group of people, et cetera. [23:24]

If there are errors on the page, they have some mad science which is able to target which diff/PR actually caused it, and potentially automatically back it out. And just a lot of feedback because everything was in the same repo. It's the, their big giant mono repo thing with 200,000 components. [23:42]

All these sound like ridiculous numbers to me, by the way. [23:44]

But because it was that way, it meant that anybody could be like, Hey, I think I can make this a little better. I see, I see a common problem. And and that's kind of the nature of how. Facebook's code base also grows, like even though everybody has ownership, you can actually just send a PR that makes something better. [23:59]

One of my favorite things in the two and a half years that I spent there was seeing Sophie Albert's touches everywhere. Like if you just do a blame on any arbitrary piece of code, you'll probably see Sophie somewhere there, just like, &quot;Hey, I made this better and fixed performance by 60% or fixed this bug.&quot; it was incredible to see. [24:17]

But the point I'm making is if you want to undertake a rewrite of facebook.com, it's not enough to say, &quot;Hey, we have the will.&quot; You also need the tooling and all these guardrails around you so that you can do it right, that you can iterate so quickly. They would've been up the river. [24:34]

Is that the phrase? I don't know what the phrase is. [24:35]

**Carl Vitullo (editing):** There's two sayings he might be thinking of here. There's &quot;up the river,&quot; a saying that originates from Sing-Sing Prison, which was &quot;up the river&quot; from New York City. But he might also be thinking of &quot;up shit creek without a paddle&quot; which is probably the one I'd go with. [24:47]

**Sunil Pai:** They would've been a shit show if they didn't have tooling like that. That's. [24:51]

## Tooling support to make rewrites work

**Carl Vitullo:** The feature flagging definitely sounds like a prerequisite for any kind of major re-architecture for an app like Facebook that needs to keep working for everyone at all times. The tooling you mentioned of being able to assign a new error back to a specific change, that sounds pretty incredible and it definitely sounds like a huge enabling factor for a team, or, for an organization as large as Facebook with so many engineers all touching the same code that definitely seems like a massive win for iteration speed. If you can safely push changes and know that, if the change doesn't work, it will be caught and repaired quickly. [25:29]

**Sunil Pai:** At the very least, even if it's not repaired, even if it isolates it down to, let's say, five PRs instead of say, the one, right? Every Facebook employee has one of the work phones or whatever, I think it was called Banana phone, I forget what it called, it's the version of PagerDuty or something. Like you'll get screamed at by your phone where you're like, oh shit, something's going wrong, so you can like hop on and fix it immediately. Instead of waiting for a whole day where you are losing revenue and you, and it's affecting only some group of people somewhere in the world because you didn't do your LTR CSS right, or some shit like that. [26:04]

**Carl Vitullo (editing):** Quick note: LTR that he's referencing here is left to right, as contrasted with RTL or right to left, which is a text rendering, which is used in some languages like Arabic, Hebrew, Uighur, or a bunch of other languages. RTL rendering is notorious for causing subtle bugs because of deeply embedded assumptions developers have about layout direction. So for instance flexbox layout needs to be reversed in RTL rendering. [26:29]

**Sunil Pai:** The only way you can do this is with automated like analytics and mon monitoring. It's impossible to do it without that. It was during that, in a couple of other projects that I really understood the value of building that. [26:39]

So, for example, even React, right? Like React does a public release like, twice a year max, right? But internally in Facebook, they. Actually, when I joined, they used to do it roughly once a week, but then they fixed… I think Brian actually made the builds a lot faster. I don't remember who did it. But they got it so that they could push it pretty much every day. And sometimes we'd do it two or three times a day, that you'd push it out to facebook.com. And the way to do that is to say, &quot;Hey, we're pushing it out. But we are enabling it literally only for the six people on the React team so that we get to see it, nobody else would see it.&quot; [27:11]

And then we'd be like, okay, fine. I'm gonna push it out to some other people. During a meeting with review, we'd be like, &quot;Hey, which feature flags have we forgotten to turn off,&quot; or what have you. Which is why every time a React release comes out more often than less, most questions are answered Yes. [27:25]

With the reason that the hooks are not called use mount, use unmount is because we tried it and it didn't work. That's why we went to the model that they have right now, et cetera. So, yeah, you need, you need some kind of feedback loop. [27:36]

If you're a smaller team, and if your users are developers, the good thing about it is they'll just abuse you on Twitter. Like that's a good signal as well. So, that's, that, that's an option as well. As long as you have some kind of feedback loop, you are, you're just gold. You, you can move fairly quickly. [27:51]

**Carl Vitullo:** A feedback loop that includes the end users of what you're changing? [27:55]

**Sunil Pai:** Exactly, yes. [27:56]

**Carl Vitullo:** That definitely seems essential. I guess fundamentally the point of a rewrite is to improve things without degrading the experience for anyone. So definitely can see why tight feedback loops would be super important there. [28:08]

**Mark Erikson:** Yeah, on a, on a much, much smaller scale than that the. The Angular app that I was working on in, in 20 and 21 I ended up building the world's tiniest feature flag system. It was one file with a single JavaScript object that mapped flag names to booleans. It was all built in at compiled time and, you know, there was no way to like, you know, dynamically change it or roll it out to different subsets of users. [28:34]

But even just having that one little file and the, you know, is flag enabled function made it possible for us to build certain things and, and iterate on those over time. [28:44]

**Carl Vitullo:** I think feature flagging is one of those very essential responsibilities within a code base that once you grow beyond a certain number of users and a certain number of engineers, it just becomes a hard requirement. [28:56]

## Zero cost feedback loops, revisited

**Carl Vitullo:** Yeah. Sunil, I wanted to go back to what you said about the zero cost. Was it zero cost rewrites? [29:03]

**Sunil Pai:** Zero cost feedback loops… or some shit. I I made a phrase that sounded very smart. We'll have to check the tape later. [29:09]

**Carl Vitullo (editing):** I checked the tape and it is in fact, zero cost feedback loops! [29:13]

**Carl Vitullo:** Could you talk a little bit more about how you go about designing zero cost feedback loops and how to get them set up and working effectively? [29:20]

**Sunil Pai:** There are like two classes of tools. The let me tell you about the one that I did it from scratch for. So this was when we were building the CLI for CloudFlare workers called Wrangler. I spun up the Rust code base and the first time I did a build, I think it took something like 12 minutes. [29:34]

And I was like, this is insane. I think they had a dev mode or something, but I was too stupid to know how to write and uh, I used Rust anyway. And this is for me, where, I come from a world where not only can I press F5 or Command R and refresh my browser and immediately see changes, in fact, now our build systems actually push changes with hot reload and stuff and React actually made that so cool, right? That for me is how I would like to program. I would like to type some code and immediately see what the change is. [30:01]

So the first form of feedback loop you want to do is local. Like how fast can you write code and see the changes yourself and choosing tools that have a compile cycle are not compatible with this. This was also why I was so happy when I discovered React Native and realized I wouldn't have to write Objective C or Java for any part of my life. [30:21]

The first time I demoed hot reloading in a mobile app to other people inside Myntra, they thought I was cheating. Like they thought I was a liar. It was an incredible feeling. So choosing JavaScript actually like makes that so simple. And not only did I use choose JavaScript, I also decided to go full in on ES build at the time. [30:39]

So ES build is the fastest bundler out there right now, the trade-offs are that you can't do some things with it, right? Like you can't do some fancy code level transforms and extraction. [30:51]

It turns out it didn't matter in this case. Oh, it also doesn't support CSS module bundle splitting or some, something like that. It didn't matter for the CLI. [30:58]

But what it did mean is I could set up a thing where I could write some code and immediately run the CLI again. Like I could have a command that just ran on every change and it was instantaneous. The same kind of experience that I have when I developed front end applications. I got that when I was building a CLI as well. [31:17]

That meant that my local feedback loop was, &quot;Okay, is this working? Is this not working? Does this look good? Does this not look good?&quot; It was instantaneous. That's one thing. The second thing I did is I set it up so that every commit to the repository got published to NPM with a beta tag. [31:34]

This was awesome because… I'm also a big fan of the NPX command, I don't know how many people here know this, but you don't really need to npm install a utility to start using it in your terminal. You can literally say, NPX, say Wrangler, and it'll automatically install it for you. But what that meant is I could Make a PR, land it and on the team chat, I'd be like, &quot;Hey, run this command in your terminal and tell me what you think.&quot; [32:00]

`npx wrangler@beta-dev some-file-or-the-other`. So be being able to share that with people became a zero cost thing without having to do a full npm release and change logs and all that, no. We just immediately just started shipping everything that got committed. That's the second thing. [32:15]

In fact, we actually got this brilliant dude on the team named Greg Bribe. You might see him on Twitter, et cetera. He set it up so that it published to a private reg a, when I say private registry, just just a CloudFlare worker, in fact. It published GitHub artifacts to that so that you could use Wrangler before it was even committed to the main repository, it would do a publish for a PR. [32:37]

So you could try a PR before it even got committed, which was also great for feedback because, well, obviously, right, like even for people who are trying to contribute and stuff, they'd be like, &quot;Hey, you can try out this command to try out this change that I've built out for you.&quot; So that feedback loop got better. [32:52]

One of the lessons I learned from not doing so well when I was in Facebook was that I need to communicate more. So I've become an over communicative asshole. Like if you look at me the wrong way, I'll show you a demo of what I'm working on right now. [33:04]

Like, Hey, hey, can, hey, can you, quickly jump on the call right now? Here's a link. Just come on, just come on for like 30 seconds. I wanna show you something. And I did this with my CTO, I did this with my SVP, I did this with the PMs, I did this with the team, just nonstop. You could wake me up and I'd do a demo for you, like, in, in the middle of my sleep or whatever. [33:20]

But what this meant, especially because we were doing this in 2021, 2022, when we are still working from home, is we had this absurd level of transparency into the Wrangler project from anyone in the team. I would keep demoing it everywhere. Everybody knew what was going on. There was no, oh shit, they're spending six months to rewrite wrangle. [33:38]

They're like, no, it's been three days and Sunil hasn't shown us a demo yet. He's either ill or he is dead. Uh, So by making sure we had all of these things going, and that's just it. Anytime we did a release, I made it a point to drop a thing in the main chat channel saying, &quot;Hey, the Wrangler 0.41 is out, and here are the new things in it, and here's a GIF for it.&quot; [33:58]

There's a level of presentation that you want to do to get people interested in it as well, so, even before we did a full launch, a lot of people were already using it because we did a beta launch six months into the thing which that was the public beta launch and people just started using it right then. [34:13]

But by the time we did a full launch, it was just so solid. Like it worked super well. So that's what I mean, like you, you have to look at every single interaction of your workflow for building and sharing it with the world and say, &quot;Hey, how do we make this dirt simple,&quot; like anybody should be able to use it. So that's what I did. [34:30]

That's, and you can do this even with frontend apps, it's actually easier with frontend application. Like there's a reason why Vercel and Netlify have like preview URLs in your PR, because it's so powerful to say, Hey, we can have a look and decide what to do with this. Even if you're not in the same room or whatever. [34:46]

I would be surprised if every person here couldn't go back to whatever they were working on and say, &quot;Hey, I think I can make this faster, this easier, this, can we just rethink this so that the feedback loop gets shorter?&quot; That, I think, is, is key. That's what I think. [35:01]

**Carl Vitullo:** Yeah, definitely. You know, you mentioned hot reloading and PR previews, both of those really became much more prevalent through my career. Like, I think I had three or four years of experience when Hot Reloading came out. You know, it became mainstream through React. I think Netlify did a lot of work for growing the mindshare of people realizing you can preview PRs. And both of those were seismic shifts for how productive I could be as an individual developer. [35:27]

## Automation as a way to enable communication

**Carl Vitullo:** And I think what you're saying about all the communication you do in process of doing these rewrites and getting user feedback, it strikes me that by automating all of the deployment and building work and getting those as tight and fast as possible, it really frees you, you up, you as a human to do the more human side of that launch that you know, it lets you do that required communication because like you said, you need feedback and if you're spending, you know, 80% of your time writing the code, you only really have enough bandwidth to do one other thing. [36:04]

So, if that one other thing is building and shipping the code, then I think your stores of energy are gonna be so much lower for the incredibly important communication side of things. [36:13]

**Sunil Pai:** Mm-hmm. Yeah. And you like, I don't know if it's apparent enough, but I have a massive ego. Like, I like it when like people look at my shit and whether it's good or not. Like I need the external validation. It's not a very healthy way to be, but it makes for good software. [36:28]

**Carl Vitullo:** Well, you do keep making good shit. So, I think that ego's pretty well deserved. [36:32]

## How to evaluate a possible rewrite

**Carl Vitullo:** I wanna bring this back a little bit to, as an individual developer, if I am on a team and I think that there is opportunity to rewrite something, you know, I, I see some user pain, I see some maintenance burden that I think is substantially slowing down development progress. [36:47]

What do you think would be your first step to initiate a rewrite project? How would you think about framing that problem to others, to convince them that it's something that needs to happen? Or even identifying to yourself like, yes, this problem is important enough to undertake a large rewrite project. [37:05]

**Sunil Pai:** I think not only are you supposed to identify the problem and that's a big part of it anyway, it's like, &quot;Hey, we have a problem.&quot; But you have to give people a glimpse of what's possible. Like you have to be, either you have to do it via prototype or you can even say, Hey, some other people are doing it this way, or what, what? [37:24]

Whatever, because. One of the big things about a rewrite is getting buy-in in the beginning, and that is so hard to do for rewrites right now, and understandably so because 9 out of 10 rewrites don't come from the right place I think. And I'm glad that I've had accountability checks in my life because I've proposed many rewrites that shouldn't have happened and gladly didn't happen as well. [37:44]

Actively looking for buy-in also keeps you honest to yourself where you're like, &quot;Okay, fine. I'm going to go up to the most serious person in my orbit of influence and see if I can convince them whether a rewrite is a good thing.&quot; In my situation, it was trying to convince Kenton Varda, the principal engineer of CloudFlare workers, and he thought it was a very bad idea. [38:05]

So I was like, okay, fine. Let me demo an alternate Wrangler experience where we fix some of the other issues and then he was like, okay, fine. You know what, just try it for a while and let's see how it goes. So that for me counts as buy-in where I'm like, okay, fine. He didn't say no, it wasn't a clear yes, but he didn't say no. [38:21]

And then I eventually convinced him like it worked. It was right, and he agreed as well. But getting buy-in does two things, right? One is it of course, it gives you the space to to execute, but also it gives you It means the people who gave you buy-in also are encouraging of you and willing to excuse some mistakes. [38:40]

Because if you go in instead saying, I'm gonna do this rewrite. I don't give a shit what any of you all are saying, I think it's the right thing to do. That means they're waiting for the first moment that you slip up. The moment you slip, make even the single mistake — and you will — they'll be like, well, you tried, sorry. We are done. We are shutting down this project. [38:55]

So I think, I think there's a very human side of this that needs to be like, worked out before you start writing the code. [39:02]

**Mark Erikson:** Absolutely, yeah. And they're like, there's. There's a lot of considerations that have to go in, you know, like, why are you wanting to do the rewrite in the first place? I think certainly the JavaScript ecosystem has a sort of well-deserved and not good reputation for, there's a new framework coming out every five minutes, and everyone's busy rewriting things all the time. [39:22]

It's true that new tools, new frameworks can offer advantages over the existing ones. But it's also true that just because a new tool exists doesn't mean you should automatically go throw away everything you've built and start chasing towards the new shiny. So you need to spend some time and consider like, what actual problems are we seeing in the code base? [39:43]

Is it, the builds are too slow? Is it that the tool that we're using is end of life and will not be receiving any more updates? Is there a user facing problem that can only be addressed by a major re architecture and, you know, really consider the justifications for why you're wanting to do this, and then use that as part of that ammunition for convincing the rest of the team and management that it's worth doing. [40:09]

## Smell tests for justifications

**Carl Vitullo:** Mark, are there any examples of justifications for rewrites that now don't pass your smell test? Say, a more junior engineer comes to you and says, I think we need to rewrite this because X. What are some examples of X that would give you pause, would make you ask them to think harder about it? [40:25]

**Mark Erikson:** The biggest one I think I would have concerns with is, changing to a different tool or framework because it's being recommended by, I don't know, influencers on Twitter, YouTube, or like a hacker news post or something. Like, that's, that's what I was pointing to a second ago. [40:43]

There are new tools coming out all the time and just because a new tool exists does not mean you should automatically shift over to it. Something we did a few times when I was at my previous company, was a trade study. So it was a, you know, lightly formalized process where you say like, we're considering like a range of possible tools that we might switch to, or even comparing like our current tool versus a set of different tools. [41:09]

And you actually take the time to lay out a list of criteria that you're interested in, assign weights and scores to each of the different criteria. Try to do a non-biased evaluation of each of the different tools in the different categories, and then actually add up the scores and see like, which of these tools seems to be the best based on the criteria that we care about. [41:31]

And the criteria could be anything from, how well does this tool seem to be supported versus like, how good is the documentation? How many other examples are there out there? You know, like actually taking the time to do your homework and make an informed decision rather than jumping on something just because you saw a demo somewhere. [41:51]

**Carl Vitullo:** Hey, I saw Mark Erickson and Sunil Pai recommended this tool. I think we should jump on it. [41:55]

**Sunil Pai:** Yeah, don't listen to my recommendations on anything at this point. I, I, I feel so overwhelmed. Yeah. No. [42:02]

**Carl Vitullo:** for sure. Well, yeah. Sunil, I'd love to hear your response to that same question. What are some reasons to do a rewrite that you don't really buy anymore? [42:11]

**Sunil Pai:** The one that I always get suspicious of is, it is faster and better in every way. And this is just actually, it's one derived away from influencer told me so, because what the influencer usually says, &quot;Hey, it's faster and better in every way.&quot; And fundamentally speaking, this is not possible unless you change the laws of physics, right? [42:30]

Like, why, what if you're telling me framework B is better and faster than framework A? Why does framework A not do it? What is the reason? If it's legacy, it's legacy if is this? But I need to understand at a very deep level why it doesn't do this. And can we retrofit that functionality onto framework A? Can we buy five years with it? [42:47]

Because if you're saying that, then that means in five years A is doing that. And usually the answer is — and I hate using this phrasing, but it's true — it's because it hasn't been exposed to enough edge cases yet, to enough situations. It's actually not as broadly applicable simply because it hasn't been tried in as many separate scenarios yet the idea of being battle tested. [43:07]

And it's because the moment you start doing that, you end up having… either you make a trade off in the system or you decide to not go towards that use case. Those are the two choices that you have, and that is what makes framework B more like framework A, the more time that passes. [43:21]

This is only slightly related. This is why I'm excited about Astro as a framework, because Astro very clearly has said, &quot;Here are the four cases we are good for marketing, blogs, portfolios, e-commerce. Don't use this to build your fancy next interactive app.&quot; And that is a, such a brave decision. But oh, it is such a good decision because it means they can now focus that, and that they're telling you the trade-offs right there. [43:45]

A framework that is honest about their use cases is telling you that trade-offs right there. And I, I trust tools that do that more than we're like, well, this is a new version of React called &quot;Ne-act&quot;. Sure. Ne-act and it is better than React in every way. And you're like, really? Have you, are you sure? Are you sure? You're telling me you, you're smarter than Andrew? No, I'm not. I'm not so sure of that. Let's see. We'll, I'll keep an eye on you, but let's revisit this in six months. But yeah, people saying that solution B is better and faster in every way without anything novel changing for what caused the situation to happen. [44:19]

That's always nah, no. Nice. [44:22]

**Mark Erikson:** That's also the hazard with those proof of concept demos to show that a rewrite is feasible because proof of concept demo only has a fraction of the features and the use cases that the old code covered and of course it's gonna be faster, simpler, easier to look at cuz you aren't dealing with all the complexity that the existing system does. [44:44]

**Carl Vitullo:** Right. [44:45]

## Joel's Spolksy's cultural impact on rewrites

**Mark Erikson:** There's a classic article from a guy named Joel Spolsky who used to write a, a software blog that was very well known in influential like 15, 20 years ago. And he wrote an article way back in the day where he talked about the net, the Netscape folks rewriting Netscape source code. [45:05]

It was either Netscape or Firefox, one of the two early on and basically saying like, look, you stopped the world for a couple years, and in the process you've thrown away all the knowledge of the world that was embedded in your source code. And you've lost all that information. Like, yeah, that function was ugly, but that's because it solved like six different user facing bugs and now that's all gone. [45:28]

**Carl Vitullo:** Right. [45:28]

**Mark Erikson:** like you, you have to be very careful about both throwing away knowledge that was hard earned over time by the evolution of the system as well as the, you know, the lu of the new shiny and, oh look, this demo is fast and simple. And as Sunil said, well, yeah, it's because you haven't dealt with most of the complexity yet. [45:48]

**Sunil Pai:** So that's Spolsky post itself, by the way, my bone to pick with that post is that people use that to dismiss all rewrites. And because the lesson from the post also is, oh shit, Netscape shouldn't have done a full rewrite, they should have done an incremental thing because that's just it; at the point, the browser wasn't even, particularly, they were not solving a real user problem, I think, with that rewrite. And of course it was the late nineties, people were on acid the whole time. I don't know. Right. [46:14]

**Carl Vitullo:** Right, leading into the dot-com crash. [46:16]

Sunil had to hop off the call at this point because we hit the hour and he had another meeting, but mark and I kept chatting for another few minutes. [46:23]

## Readability as a justification for rewriting

**Carl Vitullo:** I have one other thought I wanna say, I think for me, the top unjustified rewrite, you know, among my top worst reasons to do a rewrite is it's not readable. I think so many times, especially on smaller teams, and especially from I think less experienced developers, you join a new code base, you start trying to work on it and it's, it just feels hard. [46:47]

And I think that that is often seen as a justification for a rewrite. And this is something that I feel like I have had to overcome in my career. Just like I've worked at a bunch of different companies and I al so frequently, I've come in thought, &quot;oh, this is garbage, we gotta start over!&quot; Now, at this point in my career, I just feel like that is wrong 100% of the time. [47:05]

Give it 18 months to settle down before you decide that the code is the problem. Develop your experience with working with it and feel out the pain points a little bit more. [47:16]

**Mark Erikson:** Yep. So a, a couple different waves of thought. With rewrites in general. And, and this goes back to the point I was making a minute ago about, you know, having all this existing knowledge of the system encoded in the existing code base. When you start a rewrite or a migration, it is very, very important to actually capture the intent and the purpose of the system. [47:42]

Whether it's like some combination of documentation and automated tests. So, for example, if you're, if you're doing a rewrite and you're looking at an existing feature There's probably a lot of code that is sitting around and some of it might not be necessary anymore. Maybe the systems requirements have changed over time and there's some code that is there handling the use case that isn't actually relevant. [48:09]

And in the rewrite we can safely drop that. But you have to know what requirements you're trying to match with the new system in order to know that it's safe to drop that old code. Or the flip side is you have to know here are the requirements we need to match and we need to make sure that we build equivalent functionality all the way through. [48:29]

So being able to document the existing system and the current needs and requirements so that you can cross compare versus the old code and see what needs to be persisted is, is very, very critical. And then just, just as a general thing, I feel like as an industry, we really don't spend much time teaching people how to maintain code, how to deal with legacy systems, , how to do things that aren't just sitting down and building a new project from scratch. [48:55]

Like it's, it's great that tools will let you get up and started running and have something productive in five minutes with a single command, and that's good. But most of us are gonna spend our, the majority of our time working on systems that have been around for years. Tens of thousands of lines of code that were written by other people over time, two-thirds of those people aren't even at the company anymore, and learning how to work within existing systems is a critical skill and I, I really don't feel like we teach anything about that either in formal, you know, college, you know, CS degrees or even informally. [49:33]

**Carl Vitullo:** Yeah, that's, that's a really good point. Working with Legacy Code, you know, legacy Code is a bit of a, a [49:39]

**Mark Erikson:** L Legacy Code is anything that I wrote more than five minutes ago. [49:44]

**Carl Vitullo:** Right. Right. Yeah. [49:46]

And that's, that is an essential skill. Reading other people's code, figuring out what their intentions were as they were writing it. Yeah. That is a, an incredibly important skill. [49:55]

What you just said about how we emphasize new projects so much. Maybe that does incentivize people not to think about it, it, it biases them in favor of rewrites because we have so much of our brain, so much of the marketing materials, so much of the new launches are targeting that use case of do something new. Yeah. [50:15]

## Software lifespan

**Mark Erikson:** There's also, you know, there's other factors as well. I mean, software does have a limited lifespan. Requirements change, teams change, bits expire. But also that like, a lot of people might only be on a team for a couple years, which means that A), there's loss of a lot of institutional knowledge, but also people don't generally have time to see the effects of the decisions they made. [50:36]

I was lucky enough to spend, either seven or nine years, depending on how you slice it, on one project. And so I, I saw the initial decisions. I was there as we did the initial design work. I saw how some of those decisions panned out well, and others not so much. I made some of the decisions about the evolution of the code base, and they were the right decisions early on. And five years later, things had changed and we had to revisit those. [51:03]

Being able to see the impacts of those decisions and how they either cause problems or worked out well has, has been a really useful experience for me. [51:12]

**Carl Vitullo:** Absolutely. Well, I think that's an awesome note to end it on. Yeah, Mark, thanks so much for coming out. Sunil's gone already, but it was really great to talk with both of you. [51:21]

**Mark Erikson:** Yep. Good discussion. And really glad Sunil could pop in and give us a whole bunch of insight. [51:25]

**Carl Vitullo:** Yeah, definitely. All right. Thanks so much everyone for staying with us and learning about rewrites.
