---
title: Jared Palmer
date: 2018-05-03
time: 1-2pm PT / 8-9PM GMT
location: Q&A Channel Reactiflux
description: "Engineering Lead @ [The Palmer Group](https://twitter.com/PalmerGroupHQ) | Author of [Formik](https://github.com/jaredpalmer/formik), [Razzle](https://github.com/jaredpalmer/razzle), [Backpack](https://github.com/jaredpalmer/backpack), [react-fns](https://github.com/jaredpalmer/react-fns), [After.js](https://github.com/jaredpalmer/after.js), etc."
people: "[@jaredpalmer](https://twitter.com/jaredpalmer)"
---

## Engineering Lead @ The Palmer Group and prolific open source creator

<a name="opinion-using-context-api-zend" href="#opinion-using-context-api-zend">#</a> **Q:** What is your opinion on using context api? – zend

**A:** Start with props and local state. Lift state when you need to. Use context for session related things like the current user and any top-down configuration/flags. That got me pretty far. Otherwise, my heuristic is to use context when the developer consuming the component should NOT need to know about the magic happening in the background. But also generally avoid magic hehe!

---

<a name="get-started-development-gabe" href="#get-started-development-gabe">#</a> **Q:** How did you get started with with development? – Gabe

**A:** I had taught myself Framer.js and that's how I learned javascript. I got started with development after I got rejected from a Product Design job at FB in summer of 2015. The recruiter told me to get more experience and follow up in around 6 months

![Chart of all Jared's GitHub contributions](https://cdn.discordapp.com/attachments/193117606629081089/441691709357948938/contributions.png)

I got hooked on React pretty quickly after and you can see where things kinda "clicked" in my contribution graph. Since then I'd say I just kept at it for 6-10 hrs every day for 2 years.

---

<a name="cool-ui-posted-github-history" href="#cool-ui-posted-github-history">#</a> **Q:** What is that cool UI you posted of GitHub history? – devsnek

**A:** https://GitHub-contributions.now.sh/

---

<a name="priority-list-async-ssr-afterjs" href="#priority-list-async-ssr-afterjs">#</a> **Q:** Where in the priority list is async SSR for after.js once React implements it? – lokiiarora

**A:** Very very high.

---

<a name="would-recommend-someone-move-intermediateadvanced" href="#would-recommend-someone-move-intermediateadvanced">#</a> **Q:** How would you recommend someone move from intermediate/advanced React developer into expert? Learning strategy or path ? – jhorwitz

**A:** Keep on working. Keep on building. Don't be afraid to try out new stuff.

It's a numbers game. Just keep on publishing stuff.

---

<a name="caching-strategies-razzle-code-splitting" href="#caching-strategies-razzle-code-splitting">#</a> **Q:** Do have any caching strategies for Razzle? Any code splitting for Razzle? – Nima_arf

**A:** After.js has codesplitting, there is also an Razzle example with react-loadable. We should probably add one with streaming rendering. As for caching, you could use an LRU cache with the result of your ReactDOMServer.renderToString() and maybe use routes for keys.

---

<a name="favourite-project-adrianc" href="#favourite-project-adrianc">#</a> **Q:** What is your favourite project and why? – AdrianC

**A:** I don't if I have a favorite! Probably Formik or Razzle because I find them so useful in my day job.

---

<a name="really-lot-react-projects-account" href="#really-lot-react-projects-account">#</a> **Q:** You really have a lot of React projects in your account, but how do you keep doing more and more projects by yourself and still doing your daily job? – leandrorr

**A:** I just keep having ideas and publishing them. My trick is to make projects that align with what I'm doing during my day job, so by fixing a bug in one of them I am ultimately just improving the app / project I'm working on. Additionally, at The Palmer Group, we spend all of Friday on open source.

---

<a name="areas-react-learn-competition-lokiiarora" href="#areas-react-learn-competition-lokiiarora">#</a> **Q:** What are some of the areas React can learn from the competition? – lokiiarora

**A:** TBH, I've only played around with Vue for a few hours. I don't care for template string magic. However, I think it's pretty cool that the entire Vue ecosystem has basically agreed upon state management and styling. Imagine if the React community agreed on styles! Components would be much much more reusable across projects.

---

<a name="think-future-native-apps-think" href="#think-future-native-apps-think">#</a> **Q:** What do you think about the future of native apps? Do you think it will be defeated by the web with tech like webassembly? – lasagnelennart

**A:** Native apps aren't going anywhere. IMHO Web Assembly will need to be extremely easy to add to existing apps for it to succeed (i.e. a webpack loader).

---

<a name="best-advice-student-developers-get" href="#best-advice-student-developers-get">#</a> **Q:** Best advice for student developers to "get out there" and make connections? And hello from NJ :stuck_out_tongue: – Andrew

**A:** I used to never go to meetups. I went one of the early React ones in NYC at LittleBits and thought is was meh, and then didn't go to another one for over a year. I was so wrong. Not only do I suggest going to local meetups, the best thing you can do is to give a talk. It's scary but so worth it. If there isn't a local meetup nearby, host one yourself. You'll be surprised who shows up

---

<a name="whats-favorite-source-react-learning" href="#whats-favorite-source-react-learning">#</a> **Q:** What's your favorite source of React learning? – leandrorr

**A:** Twitter nowadays. Also my secret way to learn stuff is to use GitHub Search > Code > Javascript. Just type in the package names of the thing you are trying to use and open every result in a new tab. Usually someone else has tried whatever it is you're doing before. The neat learning hack I use is I have a bookmarklet that jumps me to the very first commit of a GitHub project. I then can get a better sense of how a project started and the code is usually much less intimidating. You can learn a lot this way. Lastly, follow people on GitHub and check out their gists every once in a while, tons of useful stuff.

---

<a name="talking-magic-think-relay-adrianc" href="#talking-magic-think-relay-adrianc">#</a> **Q:** Talking about magic... What do you think about Relay?? – AdrianC

**A:** I've tried to learn Relay approximately 3 times and failed each time. lol. However, 2 of my coworkers Jack Cross and Nathan Force both used it at Amex when they were there. We don't use GraphQL at the moment actually. Instead, we have a special codegeneration tool that spits out all of our data fetches and perfect TypeScript types. However, we are looking at experimenting with GQL in the next few months.

---

<a name="think-good-idea-migrate-razzle" href="#think-good-idea-migrate-razzle">#</a> **Q:** Do you think it's good idea to migrate from Razzle to After.js? – Nima_arf

**A:** Newest versions of After.js no longer come with a build setup. You can use After with your own thing or use Razzle. There's an example in the project of this exact setup.

---

<a name="kind-stuff-palmer-group-andrew" href="#kind-stuff-palmer-group-andrew">#</a> **Q:** What kind of stuff do you do at The Palmer Group? – Andrew

**A:** We are a strategy and solutions company that focuses on digitial transformation. Unlike traditional agencies, we do digital strategy and full stack overhauls. So we'll take a company with outdated tech and bring them into this decade--moving everything to the cloud, setting up best practices deployment and development workflows, and automating the crap out of every single aspect of their business. My team (solutions) builds apps and services to do just that.

---

<a name="favorite-technical-book-adrianc" href="#favorite-technical-book-adrianc">#</a> **Q:** What is your favorite technical book?? – AdrianC

**A:** https://www.amazon.com/Economics-Banking-Financial-Markets-Pearson/dp/0133836797

I used to be an Econ wonk.

---

<a name="tips-react-redux-beginners-arun" href="#tips-react-redux-beginners-arun">#</a> **Q:** Any tips for React, Redux beginners? – Arun

**A:** Code every single day. Honestly. I don't know many people that have been successful just doing it a few times a week. I recognize that not everyone is fortunate enough to be able to do that. The other thing is just get comfortable not knowing how things work....ever. Most people get turned off by this feeling because our education system basically teaches us to feel bad about not knowing stuff. If you get comfortable in this zone, and then learn how to teach yourself new things, nothing can stop you.

---

<a name="frustrates-react-applications-best-practice" href="#frustrates-react-applications-best-practice">#</a> **Q:** What frustrates you the most about React applications? What best practice do you wish existed for everyone? – EvHaus

**A:** I wish everyone could use the codegen tool that we have. Testing data fetching used to be such a pain. Now it's not.

---

<a name="codegen-tool-jk" href="#codegen-tool-jk">#</a> **Q:** What codegen tool? – jk

**A:** The codegen tool generates all our teams data fetches and typescript types whenever we make changes to our backend API's. Since we have nearly 100% typescript type coverage, making sweeping changes is a breeze. We just do a new codegen and fix the TS errors.

---

<a name="exciting-thing-would-learn-time" href="#exciting-thing-would-learn-time">#</a> **Q:** What is the most exciting thing you would learn now if you had time? – PeterM

**A:** Good question. Hmmmm. I want to get into ML and apply it to developer tools. Even though I was an econ major, I never took calc 3, so need to first learn more math.

---

<a name="favorite-technical-stack-adrianc" href="#favorite-technical-stack-adrianc">#</a> **Q:** What is your favorite technical stack?? – AdrianC

**A:** Fav tech stack. React x TypeScript with Razzle or `react-scripts-ts`.

On the backend, I use Node and a custom data layer I have yet to publish for MongoDB on my sideprojects. In our client apps/projects, we use Dropwizard.io (Java) and Mongo. We have an awesome relationship with the team at Mongo and have experienced team members that have scaled it successfully.

---

<a name="whats-engineering-culture-like-palmer" href="#whats-engineering-culture-like-palmer">#</a> **Q:** What's the engineering culture like at Palmer that other companies can learn from? Having Fridays to work on Open Source is awesome. – hehexd

**A:** I am actually working on a "Principles" repo right now so other companies can learn from us. So stay tuned for that. The big things for me are radical enthusiasm and communication. I used to play lacrosse in college, and had the pleasure once of playing against one of the best goalies in the world, John Galloway, in a summer league once. He was unreal. What really surprised me is how much and how well he communicated to his defensemen. That stuck with me a lot. Have a lot more to say about this, hopefully will be able to get this down on paper.

---

<a name="need-make-back-end-react" href="#need-make-back-end-react">#</a> **Q:** If you need to make a back end for your React project, what would be your back end framework and your plan, how would you go about making a back end? – Nola1222

**A:** It depends on the project. I would stick with whatever is easiest for you. That being said, avoid ORMs/ODMs. I will hopefully soon publish the Node.js port of our Java Data Access Layer, but the gist is you want to be in total control of your database writes/reads but fully encapsulate / abstract them into a single place. This way you don't need to rewrite your app when you inevitable change or add new databases.

---

<a name="non-technical-skillthing-think-important" href="#non-technical-skillthing-think-important">#</a> **Q:** What non technical skill/thing you think is the most important in tech? – PeterM

**A:** Be a mensch (a person of integrity and honor).

---

<a name="seems-like-mongo-crime-use" href="#seems-like-mongo-crime-use">#</a> **Q:** It seems like Mongo is a crime to use these days if you mention it. What are some things for people who are skeptical to know and consider before using it? – Sonicrida

**A:** One of our engineers has literally scaled mongo to send 8 billion emails a day IIRC.

There are definitely lots of ways to abuse mongo. There are best practices for sure. It got a bad rep back in the Parse days, but the latest stuff is so rad.

---

<a name="open-source-codegen-tool-zend" href="#open-source-codegen-tool-zend">#</a> **Q:** When will you open source your codegen tool? – zend

**A:** https://github.com/palmerhq/swagger-codegen/tree/typescript-axios

It requires that you have a well typed swagger api, which we get for free because we use Dropwizard.

We forked the main swagger-codegen and ours spits out a axios-based fetches instead of window.fetch or whatevs the default one was.
