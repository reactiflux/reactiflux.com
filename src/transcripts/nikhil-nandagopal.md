---
title: Nikhil Nandagopal
date: 2021-12-14
time: 8:30AM - 9:30AM PT / 3:30PM GMT
location: Q&A Channel Reactiflux
description: "Building [appsmith.com](https://www.appsmith.com/), the future of app development!"
people: "[@NikilNandagopal](https://twitter.com/NikilNandagopal)"
---

<a href="#hey-nikhil-what-was-your-biggest" name="hey-nikhil-what-was-your-biggest">#</a> **Q:** Hey Nikhil, what was your biggest chokepoint during appsmith development so far and how did you overcome it? – Nomish

Hey! Great question. I'd say that performance was our biggest bottleneck. Building an entire IDE in the browser and evaluating JavaScript of an entire application brought apps to a screeching halt. We tackled this by moving evaluations to a worker thread and by implementing a subtree algorithm that would only evaluate the widgets that changed

---

<a href="#what-mainly-inspired-you-to-reach-where" name="what-mainly-inspired-you-to-reach-where">#</a> **Q:** What mainly inspired you to reach where you are today, Nikhil? – Topnex

I'd definitely say my mom had a huge role to play in this. She is one of the hardest working people I have ever seen and she set the bar really high for me in that regard 🙂

---

<a href="#what-do-you-see-as-the-most" name="what-do-you-see-as-the-most">#</a> **Q:** What do you see as the most common (or relatively frequent) use case for your toolset? – Fork501

A ton of internal tools are built on Appsmith today. Pretty much anything and everything that used to be built with Django Admin and Bootstrap templates. Some of our top use cases are things like customer support dashboards, inventory management tools, CRMs, generic admin panels, and some teams even integrate GitLab with Appsmith to trigger their CI/CD

---

<a href="hi-nikhil-how-would-you-put" name="hi-nikhil-how-would-you-put">#</a> **Q:** Hi Nikhil, how would you put into words what low-code design is and what is unique in such systems? – sharathkumar

Hey Sharath 👋 low code design is unique in that it's very meta. You're designing a framework that should allow its users to build and extend it how they see fit. We've had to invest in a lot of different areas here.

1. We made our widgets plugin based so that anyone can contribute and add a widget to the system
2. We made our data sources are integrations also loosely coupled with the core underlying platform so that we could add/modify data sources with little to no effort.
3. We designed the platform to enable running JavaScript anywhere so that developers never feel like they are without an escape hatch.

---

<a href="great-tool-why-did-you-opt" name="great-tool-why-did-you-opt">#</a> **Q:** Great tool! Why did you opt for support of GraphQL so early in the game? – ShubhankarKG

We decided to support all forms of REST APIs early on because we knew that teams had lots of internal APIs already created and creating a broad REST plugin like Postman would make the tool useful to a lot of developers. This came with GraphQL support out of the box since GraphQL is a type of REST API but native support is still lacking a lot in the current tool. We're working on this right now in fact 😄

---

<a href="#hey-nikhil-i-am-vik" name="hey-nikhil-i-am-vik">#</a> **Q:** Hey Nikhil, I am Vik. I have heard many developers being kinda scared from no-code. Can no-code harm the code community? – Vik

Hey Vik 👋 I've heard this fear too and I really disagree with this mindset. In my opinion, no-code / low-code is just a new abstraction of existing programming frameworks. It in fact helps create more developers and more opportunities for developers by lowering the barrier to built applications. Today we all love frameworks like React / Next.js because they make our lives easier. while if we looked back 10 years ago, it wasn't really very easy to build rich web applications!
I see a lot of developers who don't trust no-code in terms of flexibility and performance, but I really think tools like hasura and appsmith are the future. Do you think that at some point these tools will become as natural a choice as Laravel/Node for example? Technically speaking, what is needed for this barrier to be broken?

---

<a href="#how-does-appsmith-compare-to-something-like" name="how-does-appsmith-compare-to-something-like">#</a> **Q:** How does AppSmith compare to something like Retool? – eggtarts

One of the biggest differences between Appsmith and Retool is that we're an open-source platform. We really believe in building a tool that developers can easily adopt, extend & use without ever having to worry about vendor lock-in. Retool makes that really hard to even get started with. We're also very focused on the developer experience and have some awesome built-in features like

- Native Debugger inside the platform
- Javascript snippets & documentation built-in
- Self-hosting for everyone
- Intelligent autocomplete

We also believe that the best software is built-in teams and on that front, we've enabled real-time collaboration through comments & Git Integration on the platform. Teams can now build apps together!

---

<a href="#if-i-wants-to-copy-appsmith-and" name="if-i-wants-to-copy-appsmith-and">#</a> **Q:** If I wants to copy AppSmith and built a company around it. If possible, What do we need to built one apart from oss code and a great team? – AKA

I think the community is an essential piece of the puzzle here and a community can only gather around a unique product or point of view. Simply copying the code because it's open-source wouldn't help and would probably in fact deter you because you'd spend most of your time trying to fight against some of the decisions that go against that unique outlook!

---

<a href="hi-nikhil-with-tons-of-alternative-to" name="hi-nikhil-with-tons-of-alternative-to">#</a> **Q:** Hi Nikhil, with tons of alternative to Appsmith, how do you make sure to stay ahead of the game ? – AnonymousSlogger

Hey! We really believe that the only way to stay ahead is by being focused and differentiating our product. While there are quite a few tools out there, you'll find that very few of them are open source, almost none are developer-focused and absolutely none have a community like ours 🙂

---

<a href="#hey-nikhil-thanks-for-being-here" name="hey-nikhil-thanks-for-being-here">#</a> **Q:** Hey Nikhil, thanks for being here! I see a lot of developers who don't trust no-code in terms of flexibility and performance, but I really think tools like hasura and appsmith are the future. Do you think that at some point these tools will become as natural a choice as Laravel/Node for example? Technically speaking, what is needed for this barrier to be broken? – BL4CK

Hey! Great question. We also believe that no-code is too in-flexible to build apps and that's why we built Appsmith as a developer-first low-code platform. You can write code in a full-fledged JavaScript editor inside Appsmith! We believe that code is an essential part of application building and is the best way to express logic (validations, workflows, conditional chaining, transforming data etc.). What we don't like is having to deal with writing a lot of boilerplate for static HTML elements, dealing with boring styles, configuring data sources, and creating CI/CD pipelines. Appsmith takes away all the boring stuff leaving us with doing what we love the most - Writing Code! 🙂
I think technically speaking one of the most crucial elements is improvements in the way apps are run in the browser. This is one major bottleneck to improving the adoption of these tools.

---

<a href="#hello-nikhil-thank-you-for-doing" name="hello-nikhil-thank-you-for-doing">#</a> **Q:** Hello Nikhil, Thank you for doing this Q and A. How did you get this idea for developing appsmith? And what's the advice you would give to youngsters following your path? – memehunter

Hello 👋 I started Appsmith because I hated building internal tools. I've built them at small and large companies alike and the one thing I always noticed was that they were dreadfully boring to build because they were essentially CRUD apps that were custom to the business. They also looked terrible because they never got any design / product bandwidth so I could never really be proud of my work. This got me thinking that there had to be a better way to build custom internal tools.

In terms of advice, I'd tell you what we tell everyone who joins Appsmith - Be proactive & coachable. In the early days of your career no one expects you to have all the answers but being proactive to find the answers and taking feedback to improve goes a long way in getting people to trust you. This, in turn, leads to more opportunities to work on more exciting projects and learn more!

---

<a href="#where-is-custom-logic-stored-in-appsmith" name="where-is-custom-logic-stored-in-appsmith">#</a> **Q:** Where is custom logic stored in appsmith? The DB? If so, How do you version without checking in the code? – Scottmas

Hello! Yes, pretty much everything including the page layouts is stored in the DB. The code is returned to the client that passes it to a render engine and creates views as well as an evaluation engine that runs the code to generate the current state of the app. This is then bound to the views. We're currently working on an integration with Git where users can check in their code to their own Git repositories! https://github.com/appsmithorg/appsmith/issues/3199

---

<a href="#what-are-your-views-on-webassembly-and" name="what-are-your-views-on-webassembly-and">#</a> **Q:** What are your views on WebAssembly and it’s future ? – AnonymousSlogger

I haven't used WASM personally but in the words of my team: "WebAssembly is awesome!". Anything that helps improve performance is a big leap towards richer web applications and that is a future I'm excited about. It's also really cool that it lets us run other languages in the browser which can be a game-changer for python devs using Appsmith 🙂

---

<a href="#people-learning-ds-just-to-get-through" name="people-learning-ds-just-to-get-through">#</a> **Q:** People learning DS just to get through the interviews, with no passion. How do you take this – AnonymousSlogger

It's an unfortunate by-product of the software world today which is why we try to refrain from this in our interviews. Appsmith interviews connect problems that we actually solve inside Appsmith. The things that we optimize most for are

- High Agency mindset
- Love for what we're building

It was great engaging with you all! Do check out https://appsmith.com/ 🙂
