---
title: Nikhil Nandagopal
date: 2021-12-14
time: 8:30AM - 9:30AM PT / 3:30PM GMT
location: Q&A Channel Reactiflux
description: "Building [appsmith.com](https://www.appsmith.com/), the future of app development!"
people: "[@NikilNandagopal](https://twitter.com/NikilNandagopal)"
---

[11:35 AM] Nomish:[Q&A] Hey Nikhil, what was your biggest chokepoint during appsmith development so far and how did you overcome it?
[11:37 AM] Topnex:Q: What mainly inspired you to reach where you are today, Nikhil?
[11:37 AM] Fork501:[Q&A] what do you see as the most common (or relatively frequent) use case for your toolset?
[11:37 AM] pratt⛄:can u please tell a bit about challenges you faced when this app went viral
and how would using appsmith solve this problem?
Image
[11:38 AM] justiceveritas:Good night guys anyways and have a delightful day!!
@Nomish
[Q&A] Hey Nikhil, what was your biggest chokepoint during appsmith development so far and how did you overcome it?
[11:38 AM] Nikhil:Hey! Great question. I'd say that performance was our biggest bottleneck. Building an entire IDE in the browser and evaluating JavaScript of an entire application brought apps to a screeching halt. We tackled this by moving evaluations to a worker thread and by implementing a subtree algorithm that would only evaluate the widgets that changed
[11:39 AM] sharathkumar:[Q&A]Hi Nikhil, how would you put into words what low-code design is and what is unique in such systems?
[11:39 AM] vcarl:we have a couple quesitons waiting to be answered, please hold for a minute!
@Topnex
Q: What mainly inspired you to reach where you are today, Nikhil?
[11:39 AM] Nikhil:I'd definitely say my mom had a huge role to play in this. She is one of the hardest working people I have ever seen and she set the bar really high for me in that regard 🙂
@Fork501
[Q&A] what do you see as the most common (or relatively frequent) use case for your toolset?
[11:41 AM] Nikhil:A ton of internal tools are built on Appsmith today. Pretty much anything and everything that used to be built with Django Admin and Bootstrap templates. Some of our top use cases are things like customer support dashboards, inventory management tools, CRMs, generic admin panels, and some teams even integrate GitLab with Appsmith to trigger their CI/CD
[11:42 AM] ShubhankarKG:[Q&A]! Great tool! Why did you opt for support of GraphQL so early in the game?
[11:42 AM] Vik:[Q&A] Hey Nikhil, I am Vik. I have heard many developers being kinda scared from no-code. Can no-code harm the code community?
@Nikhil
A ton of internal tools are built on Appsmith today. Pretty much anything and everything that used to be built with Django Admin and Bootstrap templates. Some of our top use cases are things like customer support dashboards, inventory management tools, CRMs, generic admin panels, and some teams even integrate GitLab with Appsmith to trigger their CI/CD
[11:42 AM] eggtarts:How does AppSmith compare to something like Retool?
@sharathkumar
[Q&A]Hi Nikhil, how would you put into words what low-code design is and what is unique in such systems?
[11:46 AM] Nikhil:Hey Sharath 👋 low code design is unique in that it's very meta. You're designing a framework that should allow its users to build and extend it how they see fit. We've had to invest in a lot of different areas here.

1. We made our widgets plugin based so that anyone can contribute and add a widget to the system
2. We made our data sources are integrations also loosely coupled with the core underlying platform so that we could add/modify data sources with little to no effort.
3. We designed the platform to enable running JavaScript anywhere so that developers never feel like they are without an escape hatch.

[11:48 AM] AKA:[Q&A] If I wants to copy AppSmith and built a company around it. If possible, What do we need to built one apart from oss code and a great team?
@ShubhankarKG
[Q&A]! Great tool! Why did you opt for support of GraphQL so early in the game?
[11:48 AM] Nikhil:We decided to support all forms of REST APIs early on because we knew that teams had lots of internal APIs already created and creating a broad REST plugin like Postman would make the tool useful to a lot of developers. This came with GraphQL support out of the box since GraphQL is a type of REST API but native support is still lacking a lot in the current tool. We're working on this right now in fact 😄
[11:49 AM] AnonymousSlogger:[Q&A]Hi Nikhil, with tons of alternative to Appsmith, how do you make sure to stay ahead of the game ?
@Vik
[Q&A] Hey Nikhil, I am Vik. I have heard many developers being kinda scared from no-code. Can no-code harm the code community?
[11:52 AM] Nikhil:Hey Vik 👋 I've heard this fear too and I really disagree with this mindset. In my opinion, no-code / low-code is just a new abstraction of existing programming frameworks. It in fact helps create more developers and more opportunities for developers by lowering the barrier to built applications. Today we all love frameworks like React / Next.js because they make our lives easier. while if we looked back 10 years ago, it wasn't really very easy to build rich web applications!
[11:53 AM] BL4CK:[Q&A] Hey Nikhil, thanks for being here!
I see a lot of developers who don't trust no-code in terms of flexibility and performance, but I really think tools like hasura and appsmith are the future. Do you think that at some point these tools will become as natural a choice as Laravel/Node for example? Technically speaking, what is needed for this barrier to be broken?
@eggtarts
How does AppSmith compare to something like Retool?
[11:59 AM] Nikhil:One of the biggest differences between Appsmith and Retool is that we're an open-source platform. We really believe in building a tool that developers can easily adopt, extend & use without ever having to worry about vendor lock-in. Retool makes that really hard to even get started with. We're also very focused on the developer experience and have some awesome built-in features like

- Native Debugger inside the platform
- Javascript snippets & documentation built-in
- Self-hosting for everyone
- Intelligent autocomplete

We also believe that the best software is built-in teams and on that front, we've enabled real-time collaboration through comments & Git Integration on the platform. Teams can now build apps together!
[12:01 PM] vcarl:(looks like we've still got 3 backlogged questions, so the channel is still locked)
@AKA
[Q&A] If I wants to copy AppSmith and built a company around it. If possible, What do we need to built one apart from oss code and a great team?
[12:02 PM] Nikhil:I think the community is an essential piece of the puzzle here and a community can only gather around a unique product or point of view. Simply copying the code because it's open-source wouldn't help and would probably in fact deter you because you'd spend most of your time trying to fight against some of the decisions that go against that unique outlook!
[12:02 PM] memehunter:[Q&A] Hello Nikhil, Thank you for doing this Q and A. How did you get this idea for developing appsmith? And what's the advice you would give to youngsters following your path?
@AnonymousSlogger
[Q&A]Hi Nikhil, with tons of alternative to Appsmith, how do you make sure to stay ahead of the game ?
[12:05 PM] Nikhil:Hey! We really believe that the only way to stay ahead is by being focused and differentiating our product. While there are quite a few tools out there, you'll find that very few of them are open source, almost none are developer-focused and absolutely none have a community like ours 🙂
@BL4CK
[Q&A] Hey Nikhil, thanks for being here! I see a lot of developers who don't trust no-code in terms of flexibility and performance, but I really think tools like hasura and appsmith are the future. Do you think that at some point these tools will become as natural a choice as Laravel/Node for example? Technically speaking, what is needed for this barrier to be broken?
[12:12 PM] Nikhil:Hey! Great question. We also believe that no-code is too in-flexible to build apps and that's why we built Appsmith as a developer-first low-code platform. You can write code in a full-fledged JavaScript editor inside Appsmith! We believe that code is an essential part of application building and is the best way to express logic (validations, workflows, conditional chaining, transforming data etc.). What we don't like is having to deal with writing a lot of boilerplate for static HTML elements, dealing with boring styles, configuring data sources, and creating CI/CD pipelines. Appsmith takes away all the boring stuff leaving us with doing what we love the most - Writing Code! 🙂
I think technically speaking one of the most crucial elements is improvements in the way apps are run in the browser. This is one major bottleneck to improving the adoption of these tools.
[12:13 PM] vcarl:we have about fifteen minutes left in the Q&A! if you have any last questions you're considering asking, now is the time to ask 😄
@memehunter
[Q&A] Hello Nikhil, Thank you for doing this Q and A. How did you get this idea for developing appsmith? And what's the advice you would give to youngsters following your path?
[12:16 PM] Nikhil:Hello 👋 I started Appsmith because I hated building internal tools. I've built them at small and large companies alike and the one thing I always noticed was that they were dreadfully boring to build because they were essentially CRUD apps that were custom to the business. They also looked terrible because they never got any design / product bandwidth so I could never really be proud of my work. This got me thinking that there had to be a better way to build custom internal tools.
[12:16 PM] Scottmas:Where is custom logic stored in appsmith? The DB?
[12:16 PM] Scottmas:If so, How do you version without checking in the code?
[12:16 PM] AnonymousSlogger:[Q&A] What are your views on WebAssembly and it’s future ?
@memehunter
[Q&A] Hello Nikhil, Thank you for doing this Q and A. How did you get this idea for developing appsmith? And what's the advice you would give to youngsters following your path?
[12:18 PM] Nikhil:In terms of advice, I'd tell you what we tell everyone who joins Appsmith - Be proactive & coachable. In the early days of your career no one expects you to have all the answers but being proactive to find the answers and taking feedback to improve goes a long way in getting people to trust you. This, in turn, leads to more opportunities to work on more exciting projects and learn more!
@Scottmas
Where is custom logic stored in appsmith? The DB?
[12:21 PM] Nikhil:Hello! Yes, pretty much everything including the page layouts is stored in the DB. The code is returned to the client that passes it to a render engine and creates views as well as an evaluation engine that runs the code to generate the current state of the app. This is then bound to the views. We're currently working on an integration with Git where users can check in their code to their own Git repositories! https://github.com/appsmithorg/appsmith/issues/3199
GitHub
[12:24 PM] vcarl:just about 5 minutes left! i think we have time for 1 more question for nikhil
@AnonymousSlogger
[Q&A] What are your views on WebAssembly and it’s future ?
[12:26 PM] Nikhil:I haven't used WASM personally but in the words of my team: "WebAssembly is awesome!". Anything that helps improve performance is a big leap towards richer web applications and that is a future I'm excited about. It's also really cool that it lets us run other languages in the browser which can be a game-changer for python devs using Appsmith 🙂
[12:27 PM] AnonymousSlogger:[Q&A] people learning DS just to get through the interviews, with no passion. How do you take this
@AnonymousSlogger
[Q&A] people learning DS just to get through the interviews, with no passion. How do you take this
[12:29 PM] Nikhil:It's an unfortunate by-product of the software world today which is why we try to refrain from this in our interviews. Appsmith interviews connect problems that we actually solve inside Appsmith. The things that we optimize most for are

- High Agency mindset
- Love for what we're building

[12:32 PM] vcarl:Thanks so much for joining us for this Q&A with @Nikhil from AppSmith! I'm locking the channel down for now, our next Q&A will be with TabNine on Thursday, January 27th at 1pm PT/9pm GMT!
[12:33 PM] Nikhil:It was great engaging with you all! Do check out https://appsmith.com/ 🙂
