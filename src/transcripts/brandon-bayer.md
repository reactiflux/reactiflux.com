---
title: Brandon Bayer
date: 2020-07-02
time: 9AM - 10AM PT / 4PM GMT
location: Q&A Channel Reactiflux
description: "Creator of [Blitz.js](https://blitzjs.com/), a monolithic React framework built on top of Next.js"
people: "[@flybayer](https://twitter.com/flybayer)"
---

<a name="im-really-excited-with" href="#im-really-excited-with">#</a> **Q:** I'm really excited with the update on 0.16. What is your vision for a 1.0 release? – Thanda

**A:** Definitely authentication and authorization built in and working awesome! That's the main thing. Other things like likely will also be in place are installer recipes (same as Gatsby) and plugins. The current prisma code will be extracted into a plugin and then we'll also have other plugins for things like fauna, etc.

And of course some sense of stability :D

---

<a name="when-is-it-safe-to-begin" href="#when-is-it-safe-to-begin">#</a> **Q:** When is it safe to begin developing my next SASS with Blitz? and/or make a course for it? – jacktheturtle

**A:** Well, we already have several folks building SaaS apps with it and running in production, so I guess it's up to you and your appetite for risk :D

That said, overall it is fairly stable, at least once you deploy it to production because at that point it's mostly Next.js core code running which is already battle tested.

---

<a name="how-does-blitz-js-being" href="#how-does-blitz-js-being">#</a> **Q:** How does `blitz.js` being a monolithic framework fit into the microservices architecture and how can it be scaled? – nikhil

**A:** Good question. You can deploy Blitz to a server as a long running process OR to serverless.

If you deploy to a server, then you'll have the same traditional monolith scaling path to walk.

But if you deploy to serverless (AWS, Vercel, etc), then each query and mutation (server code) will run in a serverless function. So your backend will scale seamlessly, automatically, and independently. So most of the monolith scaling issues go away!

---

<a name="what-do-you-think-is" href="#what-do-you-think-is">#</a> **Q:** What do you think is the downside of your product? – shtan

**A:** It doesn't come out of the box with GraphQL. The whole point of Blitz is to eliminate the API layer from your dev flow. So you don't have REST or GraphQL. Just import server code into your frontend and go!

So if you absolutely want GraphQL in the mix, then you should try Redwood. But you should still give Blitz a try. 😉

---

<a name="what-are-your-suggestions-to-a-non" href="#what-are-your-suggestions-to-a-non">#</a> **Q:** What are your suggestions to a non designer front end dev on creating UI? – Piñata

**A:** Buy and read [https://refactoringui.com/](https://refactoringui.com/)!

---

<a name="i-just-learned-about-blitz" href="#i-just-learned-about-blitz">#</a> **Q:** I just learned about Blitz and it looks like my dream framework — Next.js, TypeScript, the goal of recreating a rails-like experience. but i also love GraphQL and the TypeScript types you get from graphql-codegen for end-to-end typed queries and resolvers. are there any plans for Blitz & GraphQL? – statico

**A:** Awesome! See my last answer about GraphQL.

As for end-to-end types, you get that for free in a Blitz app! And one super awesome thing about Blitz is that all the TS types are statically available. You don't need a separate process to compile types on the fly like you need with GraphQL.

---

<a name="what-feature-have-you-had-to-cut" href="#what-feature-have-you-had-to-cut">#</a> **Q:** What feature have you had to cut that you really wish you could have put in, but is perhaps against the design principles of Blitz? – Thanda

**A:** I would love to have an automatically generated GraphQL API. This is possible, but the work required to do this is huge.

---

<a name="have-you-tried-phoenix" href="#have-you-tried-phoenix">#</a> **Q:** Have you tried phoenix + live view? What do you think about moving state from client side to server side? Do you think it's a pattern that will stick?

https://github.com/calderajs/caldera-react – searchableguy

**A:** I've never actually tried this. But I think it's great for folks who don't like Javascript. I don't think it's ever something that will come to Javascript and React because.. well, we like client side JS. 😉

---

<a name="are-you-looking-to-have" href="#are-you-looking-to-have">#</a> **Q:** Are you looking to have Blitz be fully security audited before releasing auth features? – samsch

**A:** Not before releasing the features, but once they are released we'll definitely try to get this accomplished. Rishabh, the CTO of Supertokens is leading all the auth work. He's super good and does this for a living. So we're off to a good start at least :)

---

<a name="could-you-share-your-motivation" href="#could-you-share-your-motivation">#</a> **Q:** Could you share your motivation behind `blitz.js` and the vision you hold for it. – nikhil

**A:** Fullstack React app development today is too hard and too complex! Building fullstack apps with Rails/[Laravel](https://laravel.com/) is so simple and fast because it's all one thing without many moving parts. I love that DX, but I don't like templates and want to use React.

So Blitz is the DX of [Rails](https://rubyonrails.org/)/Laravel but with everything we love about React.

Blitz will eventually have EVERYTHING you always need for fullstack apps including sweet integrations for background processing, emails, etc

---

<a name="is-it-necessary-to-learn" href="#is-it-necessary-to-learn">#</a> **Q:** Is it necessary to learn any database language with React or GraphQL will be enough? – Vradhi

**A:** Blitz doesn't use GraphQL, so you don't have to know that. We use [Prisma](https://www.prisma.io/) 2 by default for the DB migrations and DB client. Prisma is super easy to use, but you'll still need to know a bit about database modeling. Eventually we'll have nice docs on this.

---

<a name="how-do-you-manage-to-be-a" href="#how-do-you-manage-to-be-a">#</a> **Q:** How do you manage to be a full time OSS contributor (how do you make money)? What was your path like, any tips? Feel free to ignore if this is too personal/off topic. – JackFlapper

**A:** I have a part-time indie consulting gig that pays all my bills (I've been an indie consultant for 3 years). I typically work around 20-25 hours/week on consulting and 30-40 hrs/week on Blitz.

I'm working on getting sponsors for Blitz so that I can focus 100% on this and not have to do consulting. I currently have Fauna as a \$500/mo sponsor. Eventually we'll have other folks work on Blitz fulltime too!

You can also help sponsor yourself here on Github sponsors :) https://github.com/sponsors/blitz-js

---

<a name="when-referring-to-it" href="#when-referring-to-it">#</a> **Q:** When referring to it, is it blitz, Blitz, Blitzjs, Blitz.js, etc? – Thanda

**A:** Whatever you want haha. Official is "Blitz.js". But usually I just use Blitz.

---

<a name="with-what-blit-js-is-trying" href="#with-what-blit-js-is-trying">#</a> **Q:** With what `blitz.js` trying to achieve does it force the developers to do server side rendering and not use the client side rendering? – nikhil

**A:** Yeah, there are no stupid questions!! Blitz doesn't force SSR. Client-side rendering is the default, but you can choose SSR, client rendered, and static (like Gatsby) on a page-by-page basis. So they can be all mixed in your app however you need.

---

<a name="can-you-talk-about-what-it-means" href="#can-you-talk-about-what-it-means">#</a> **Q:** Can you talk about what it means for Blitz to be inspired by Rails for people who aren't familiar with Rails? – MrLeebo

**A:** Well overall it means being **super productive for building fullstack apps**. It means having conventions so you don't have to re-invent things like a file-structure on every new app. It means leaning on code scaffolding for rapidly building things without writing all the code from scratch. It means all the code being in the same app and you only have one thing to develop and one thing deploy (monolithic).

And then also the part I already talked about with getting rid of the whole API part of your architecture. Most people greatly underestimate or simply don't know how much time they waste on data marshaling in a traditional React app.

---

<a name="share-some-tips-and-required" href="#share-some-tips-and-required">#</a> **Q:** Share some tips and required knowledge to start a Open Source project the right way (or a way that is less painful and relaxing) – nikhil

**A:** Well, it somewhat depends on what you are building (tiny tool vs a framework like Blitz), but one thing that worked amazing for me was to build the community first and then write the actual code.

When I first announced Blitz, there was no Github repo and only a couple hundred lines of prototype code on my computer 😂. But it was enough that people got excited and wanted to help (I was explicit about asking people for help).

---

<a name="according-to-you-what-are-some" href="#according-to-you-what-are-some">#</a> **Q:** According to you what are some competitors to Blitz.js and how do you plan to make `blitz.js` a popular name in the community – nikhil

**A:** Redwood is the only real alternative to Blitz. Well, Blitz is already quite well known, but I'll keep tweeting about as much as I can! haha. I'm also talking at as many conferences and podcasts as I can. Marketing is essential for an open-source project to be successful.

---

<a name="recently-creator-of-redix-stepped" href="#recently-creator-of-redix-stepped">#</a> **Q:** Recently creator of Redis stepped away from it. Then there is Guido. Maintaining OSS is getting difficult partly due to politics or dealing with contributors, or community. What are your thoughts on that? – Piñata

**A:** We're following the model of Ember where it has full community ownership and isn't a project driven by a single person on team. And we'll take problems as they come :)

---

<a name="extension-to-pinata-s-question" href="#extension-to-pinata-s-question">#</a> **Q:** Extension to @Piñata's question: Do you think it's ok for oss contributors to be judged by their personal tweets (and other social media accounts)? Where should the boundary between open source work and personal life sit? – Yugiohxlight!

**A:** Yeah this is tricky, especially in this climate of hyper political correctness. I don't have a good answer for this Q&A, but I'd love to have a longer discussion about this on a call or something :)

---

<a name="could-you-explain-what-do-you" href="#could-you-explain-what-do-you">#</a> **Q:** Could you explain what do you mean by `data marshaling`? – nikhil

**A:** That means moving data around, directing it, formatting it, transforming it, fetching it, etc.

---

<a name="redwood-s-cell-component-really" href="#redwood-s-cell-component-really">#</a> **Q:** Redwood's Cell component really comes in handy during development, does Blitz offer something similar? – zacksparrow

**A:** No, because unless I'm missing something Cells will be obsolete with React Suspense for data fetching. We have Concurrent mode enabled by default for Blitz apps, so you use <Suspense fallback={loading...}> and <ErrorBoundary> for handling those things which is super nice!

---

<a name="what-does-blitz-have-in-mind" href="#what-does-blitz-have-in-mind">#</a> **Q:** What does Blitz have in mind for React Native? – chadnehemiah

**A:** We want to have first-class integration with RN so that you can import server code into a RN app just like you do in the Blitz frontend. So you can share the same Blitz backend all without having to write your own API.

---

<a name="can-you-give-more-details-on-how" href="#can-you-give-more-details-on-how">#</a> **Q:** Can you give more details on how you built the community first? – avpalmeira

**A:** Um, I just tweeted lol. Also, I used my marketing skills. Honestly I am just trying to solve the right problem at the right time. 🤷‍♂️

---

<a name="not-a-technical-question" href="#not-a-technical-question">#</a> **Q:** Not a technical question, but on a human level - what inspired you to build Blitz (again outside of the technical need) and what motivated you to take on such a large task? I'm particularly interested in the first step where you ostensibly saw the need for Blitz, saw that it didn't exist and then said, I will summon the energy to build this –

**A:** Honestly I feel like this is one of the things God created me to do. It's actually a fulfillment of a prophecy to me 5 years ago :)

---

<a name="do-you-think-the-downward-trent-of-rails" href="#do-you-think-the-downward-trent-of-rails">#</a> **Q:** Do you think the downward trend of Rails is justified when it can still resolve MANY of the problems people have building modern fullstack apps? – dilraj

**A:** I think yes. Rails is nice, but it's super hard to make great dynamic UIs (jQuery anyone?) and the mobile app story is lacking. Whereas with React you have React Native and can share you code The hurdle is much less here.

---

<a name="im-a-barely-proficient" href="#im-a-barely-proficient">#</a> **Q:** I'm a barely proficient js programmer (I hesitate to even say "developer") who had a previous life as a barely proficient Rails programmer. What can I do to help Blitz.js? – Thanda

**A:** Great question! :) Best way is to go through this guide: https://blitzjs.com/docs/contributing

Then look for issues on the main repo and on the website/docs repo that are labeled **good first issue**. Usually these are fixed within an hour of being created, so you have to move fast! :D

---

<a name="i-saw-that-there-is-a" href="#i-saw-that-there-is-a">#</a> **Q:** I saw that there is a Blitz slack. Is that a permanent home, or is it possible to bring that over into a Blitz.js discord server? – 😄

**A:** Will probably move to Discord once they add threads :)

---

<a name="could-you-share-some-key-points" href="#could-you-share-some-key-points">#</a> **Q:** Could you share some key points that one should keep handy to decide whether to choose `react.js`, `next.js` or `blitz.js` for the next project? – nikhil

**A:** If you have your own database, then use Blitz! If it's more of a content site connecting to another CMS, then use plain Next.js.

---

<a name="definitely-wondering-about-the-react-native" href="#definitely-wondering-about-the-react-native">#</a> **Q:** Definitely wondering about the React Native story here. Is that already in place or is help needed? – rahsheen

**A:** Hasn't been started yet, but you're welcome to start exploring how to do this! We can connect in the Blitz slack if you want.

---

<a name="let-s-say-we-have-a" href="#let-s-say-we-have-a">#</a> **Q:** Let's say we have a fanfiction.net type website build upon Blitz and have lots of filters options, so will Blitz still be a good option to manage all the complex stuff needed? (I'm a noob sry)

Like around 100k stories with lots of genre's and tags and everything filterable possible. – EvilSpark

**A:** I think so! I mean, Blitz doesn't yet have a feature to write **all** your code for you, but it does do all the boring stuff for you so you can focus on the code that actually makes your app unique. That actually adds features for your users :)

---

<a name="what-is-the-status-plan-for" href="#what-is-the-status-plan-for">#</a> **Q:** What is the status / plan for using Blitz with Firebase? For any of Deployment, Auth, DB, or metrics? – Thanda

**A:** You can use firebase with Blitz today. Nothing hindering you there, but not sure about deployment.

Typically, a Blitz app won't use firebase because it'll have everything you need built in, like auth, DB, etc.

---

<a name="can-we-compare-blitz-js" href="#can-we-compare-blitz-js">#</a> **Q:** Can we compare `blitz.js` with `django`? – nikhil

**A:** Yeah, basically the same thing, just different languages :) I literally have the django auth docs open right now as I'm working on Blitz auth :)
