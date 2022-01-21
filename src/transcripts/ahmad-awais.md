---
title: "Ahmad Awais"
date: 2021-10-14
time: 9AM PT - 10AM PT / 4PM GMT
location: Q&A Channel Reactiflux
description: "Award-winning dev edutainer: http://NodeCLI.com · http://VSCode.pro - Head  of DevRel [@Rapid_API](https://twitter.com/Rapid_API) - [@GoogleDevs](https://twitter.com/GoogleDevs) Expert - [@Nodejs](https://twitter.com/Nodejs) Outreach - [@WordPress](https://twitter.com/WordPress) Core"
people: "[@MrAhmadAwais](https://twitter.com/MrAhmadAwais)"
---

<a href="hows-your-code-run-on-mars" name="hows-your-code-run-on-mars">#</a> **Q:** How's your code run on Mars? – Piyush

Honestly, it's through open-source. I made a small teeny tiny PR in bootstrap core that went to mars — the kid in me was super excited about it. The bigger idea here is that when you help others, create open-source, it can do wonders. If you'd like to read more about this — I blogged about it here → http://awais.dev/marsc

<a href="what-was-the-first-stack-you-mastered" name="what-was-the-first-stack-you-mastered">#</a> **Q:** What was the first stack you mastered/picked up? – parrottttt

I started blogging almost 20 years ago. So back then it was all static HTML and CSS. Seriously, people used to email me the comments on my blogs and I used to generate new HTML files from there and cowboy coded via FTP, on the production site.

Later on I started studying PHP because the idea of building forms that would allow people to submit comments on my site live was literally out of this world at that time. Started with LAMP stack, then WordPress. Then I went to college for Electrical Engineering — though I never liked the firmware development, assembly lang, verilog — and all that stuff. Finally, switched to Node.js and have never looked back.

<a href="how-can-we-access-local-json-file" name="how-can-we-access-local-json-file">#</a> **Q:** How can we access local json file in React? – ROFL

You'd want to host that file somewhere. That's where Node.js can help — even on your local machine. In my https://nodecli.com/ course I taught developers 20+ different ways to build projects with Node.js, and most of them were locally hosted as that's where they are most useful. Like a CLI.

And of course, JSON is an excellent format for creating a database — so I recommended and personally use this project called lowdb which is a simple to use local JSON database (supports Node, Electron and the browser). Check it out https://github.com/typicode/lowdb

<a href="is-it-possible-to-generate-react-codes" name="is-it-possible-to-generate-react-codes">#</a> **Q:** Is it possible to generate React codes automatically by some site that will convert HTML to React? – KoddyDev

Of course. You can create a form. Take the input, process it on client or server with JS or Node — and print out the React transform. You can use regex for this but some sort of AST grammar would help you a lot in the long term.
@Padmanabh[he/him]

<a href="why-did-you-decide-to-get-involved" name="why-did-you-decide-to-get-involved">#</a> **Q:** Why did you decide to get involved with the NodeJS community committee? – maistho

I believe in the Node.js ecosystem. The software part is amazing. It has done wonders for the JavaScript community. But it's not only the software that makes things work. There's a human aspect to it. Lots of great software out there in the last two decades has suffered an untimely death because it was just software — and not a lot of people cared about it. Node.js Community Committee which is now merged with the Technical Committee took care of that.

It focused on community-facing efforts. Meetups and catered to resources like the official docs, mentorship and outreach initiatives helping developers learn Node.js in the best most preferred way possible. This also helped us in two ways, get feedback from the Node.js community and make things inside the Node.js ecosystem better based on that. It's an idea close to my heart so you can connect the dots. 🙂

<a href="whats-the-elevator-pitch-for-rapid" name="whats-the-elevator-pitch-for-rapid">#</a> **Q:** What's the elevator pitch for Rapid API? – rah.codes

Imagine if you need an API, you Google that, land on GitHub or some outdate docs site — you have no idea if that API still works and if you could use it right away or worse if you have to host it by yourself? That's the main problem RapidAPI solved several years ago. Now we have a lot more products. So RapidAPI is like GitHub for APIs, you can buy an API "pay as you go" model and use it or sell an API to a hub of 35K+ APIs and 3+ million developers.

Here's a one liner description for all our products as of 2021:

> RapidAPI Hub
> 35K+ APIs for developers (find, connect, use, pay-per-use).
> Imagine GitHub for APIs, how cool?! 3M+ developers.
>
> RapidAPI Provider
> Monetize your API and sell on the world’s largest API Hub.
>
> RapidAPI Client (Paw)
> A full-featured HTTP client. API Design and Development tool.
>
> RapidAPI Testing
> Comprehensive API Tests on schedule/demand in the cloud.
>
> RapidAPI Enterprise Hub
> Enterprise white-labeled version of API Hub.
>
> RapidAPI Teams
> Share and collaborate on internal/external APIs with your team.

There's a lot more to this, and I'm always hiring — you can read about why I joined RapidAPI and what I'm doing here and who am I hiring for on this one blog post → https://awais.dev/hiring

<a href="whats-new-about-clis-i" name="whats-new-about-clis-i">#</a> **Q:** What's new about CLIs, I mean we have libraries like prompt. What are the difficulties that a normal dev would face when building a CLI tool – Piyush

That's a great question. Here's the quick version ![two graphs under the quoted heading "I spend a lot of my time on this task. I should write a program automating it!" Both graphs chart work over time with annotations, the first is titled "theory", and the second titled "reality". "Theory" shows work decling to 0 over time, "Reality" shows a bumpy ride with work increasing over time](/q-and-a/automation.png)

It generally takes a lot of time to build small automation tasks, that's why I created create-node-cli https://github.com/ahmadawais/create-node-cli— a CLI for creating CLIs. And obviously it takes a bit more to make something serious. Improving CLI UX is another thing. As users we seldom don't know what's the right UX but we can definitely appreciate a good user or developer experience. Knowing what's what and how's how — makes everything slow and hence we end up either not automating something basic or hate on whatever automation we build.

More often than not people don't realise that Node.js and JavaScript are actually somewhat different. Like the event loop is a lot if not completely different. I did a workshop on creating CLIs with Jason and a lot of people found that useful in helping translate this concept, when you have some time do check it out. https://www.learnwithjason.dev/automating-tasks-with-node-clis

<a href="aside-from-nodecli-what-other-courses" name="aside-from-nodecli-what-other-courses">#</a> **Q:** Aside from nodecli, what other courses did you make? – Deleted User

tl;dr: You can find all of my courses/books at this link → https://awais.dev/courses

I have a couple of courses and books, and I definitely want to create more — teaching is fun, it's a genetic bug in me (both grandparents and both parents are teachers). I created a course on teaching people my VSCode workflow https://vscode.pro/ and going to create a course on Next.js soon at https://nextjsbeginner.com/ — fingers crossed.

<a href="i-took-a-look-through-your-website" name="i-took-a-look-through-your-website">#</a> **Q:** I took a look through your website and noticed you contribute to WordPress. My question is how do you envision the future of WordPress and its cohesion with reactjs? – corey

Great question. I spent over a decade in the WordPress community — contributed to all sorts of things from the WordPress core code to Customizer, default themes, WooCommerce and other excellent community projects. I joined the WordPress community when Contact Form 7 was launched in 2007 (which is why it's called CF7).

To this day, I still use WordPress. It's an excellent piece of software and has a big community. I do have concerns. Around 2016/17 I was working on the Gutenberg project where we helped Facebook relicense the React.js and GraphQL as MIT licensed open source projects — that was because React was added to the WordPress core.

React is powerful. With frameworks like Next.js — WordPress has suffered a lot. With Next and React you can do the same things, only better than WordPress. I feel like it's because WordPress has not invested a lot in the developer tooling. You see at the end of the day both User and Developer Experience matters a lot. If you try to build something with WordPress, PHP, JavaScript, React — the tooling is extremely messy. Developer experience sucks big time. It's a big driving factor that is making developers move to React.

^But all of that said, WordPress can be an excellent database or a headless CMS — the hosting scene for WordPress, with companies like Kinsta is far ahead the game. You can have tens of millions of users using your application and you'd still end up with a less than thousand dollars per month bill. Same can't be said about many modern headless CMS's and AWS costs of doing things all on your own. Pros and Cons, meh. ¯\\\_(ツ)\_/¯

<a href="being-quite-active-as-an-advocate-for" name="being-quite-active-as-an-advocate-for">#</a> **Q:** Being quite active as an advocate for software development and open source, are there any notable impacts you hope to see in software development/community come out of this? In other words, are there any specific things you are hoping to inspire through your actions as an advocate? – S3BAS

Oh, that's a fantastic one. Yes, most definitely. I have been doing this thing for almost ten years now—building, teaching, and improving the software for developers. Or as I often say, "Helping companies understand developers" and "build software with developer-led growth."

I believe that developers are modern-day decision-makers. Engineers/devs are running the show. It helps a company by listening and catering to the audience they serve the most. Building a feedback loop and improving software based on that feedback instead of your gut feeling makes a big difference.

I also believe that software that enterprises only use could potentially be lousy software. That shouldn't be a goal to strive for. Tech native approach for a developer-focused company serves all personas better. It's been proven by the likes of Stripe, Twilio (last I checked, that had jumped from $1B to $63B market cap in a couple of years), GitHub (before and after acquisition — significant difference).

One idea that I have been pushing a lot for a couple of years is that there needs to be a separate Developer Experience (DX) department. This is where we build the front end of developer-focused products. Back-end/full-stack engineers work on the product, designers/product design the product, and the DX team builds the layer that interacts with developers. It consists of all things like frontend, a CLI, docs, and the entire user experience of the products. This way, DevRel won't be stuck creating patches to fill up the UX/DX holes with documentation, and we'll all end up with excellent products. I hope someday, more and more companies will realize this. That'd be a fun world to live in as developers. 🦄

<a href="how-do-you-take-problem-solving-as" name="how-do-you-take-problem-solving-as">#</a> **Q:** How do you take problem solving as a challenge and what problems did you face at an intellectual level while developing for Rapid? – JS_Artboy

As a developer I love to go down the rabbit hole of fixing a small bug which takes hours but is totally worth fixing. It's been the same here at RapidAPI. Helping developers understand how APIs work and building a community closer to them was one of the challenges me and my team had to solve this year.

We've built a community of API Developers on Twitter (that's where most of developers hang out, right?) — over the year over 9.3 Million developers have read/learned from our API content there — you can check it out here → https://twitter.com/Rapid_API/

Moveover, we have launched projects like https://rapidapi.com/learn to help developers learn APIs.

https://rapidapi.com/courses — to help developers learn through videos by watching some of the best developers on YouTube.

https://rapidapi.com/guides — for if you prefer written content with open-source code projects. And it's just getting started.
