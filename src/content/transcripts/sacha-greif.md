---
title: Sacha Greif
date: 2018-03-08
time: 1-2pm PT / 8-9PM GMT
location: Q&A Channel Reactiflux
description: "Sacha Greif is a designer/developer living in Japan. Author of [VulcanJS](https://github.com/vulcanjs/vulcan), the React + GraphQL framework. | [Vulcan Docs](http://docs.vulcanjs.org/) | [What is Vulcan?](https://www.youtube.com/watch?v=uU-cwLKcmnY) | [An app in 15 days with VulcanJS](https://hackernoon.com/the-vulcan-js-challenge-15-days-for-an-app-e3735d1e3d4c)"
people: "[@SachaGreif](https://twitter.com/SachaGreif)"
---

<a name="vulcunjs-make-job-easier-developer" href="#vulcunjs-make-job-easier-developer">#</a> **Q:** How does VulcunJS make my job easier as a developer? – dardub

**A:** Vulcan's philosophy is to take the tasks you have to do for every project and make them easier. So that includes things like data loading, pagination, form generation, user accounts, etc. Those all work out of the box.

In practice it does that by bundling together Meteor as a build layer, Apollo as data layer, and a set of pre-made React components as the front-end layer.

Of course you can still write your own GraphQL code, React components, etc. in addition if you need more customization. But the idea is that you get a solid foundation to start from.

---

<a name="thoughts-sappersvelte-batkin" href="#thoughts-sappersvelte-batkin">#</a> **Q:** What are your thoughts on Sapper/Svelte? – batkin

**A:** I've heard of Svelte but not of Sapper. I haven't tried it myself so I don't have much thoughts apart from the fact it's always cool seeing people push the envelope and try new approaches. As far as Vulcan is concerned though we made the choice from the beginning to be React-only. This makes development and maintenance a lot easier.

---

<a name="whats-outlook-vulcunjs-mangodb" href="#whats-outlook-vulcunjs-mangodb">#</a> **Q:** What's the outlook for VulcunJS? – mangodb

**A:** I think in recent months the framework has been picking up a lot of new community members, so I'm pretty positive about the outlook :smiley: It's still small in terms of total users but that's on purpose, I don't want to repeat my past mistakes where I tried promoting things before they were ready for the primetime.

---

<a name="like-living-japan-tomyfalgui" href="#like-living-japan-tomyfalgui">#</a> **Q:** How is it like living in Japan? – tomyfalgui

**A:** I really like living in Japan. In fact that's probably the main downside living here, it's a bit too comfortable. You're not challenged or pushed out of your comfort zone often, like I imagine you would be living in places like New York or San Francisco.

---

<a name="im-currently-using-meteor-old" href="#im-currently-using-meteor-old">#</a> **Q:** I'm currently using Meteor on an old tool at work and right now we feel a little stuck on it since Kadira shut down and atmosphere packages are getting abandoned. My question is: what exactly is Meteor adding to Vulcan, and why? – 4ever

**A:** To be honest a big reason why Vulcan runs on Meteor is because the whole thing started as Telescope (http://telescopeapp.org/), a Meteor project. But Meteor today is vastly different from the Meteor most people know, I would say a better comparison is Webpack. At least that's how Vulcan uses it.

We don't use the Meteor data layer at all except for user accounts, and we plan to migrate this as well eventually.

So today I'd say the main things Meteor is adding are a zero-config build tool, super easy MongoDB integration, user accounts, easy deployment through Mup, and generally good patterns for handling client/server code sharing.

---

<a name="chose-graphql-react-meteor-fundamental" href="#chose-graphql-react-meteor-fundamental">#</a> **Q:** Why did you chose GraphQL, React and Meteor as the fundamental stones for VulcanJS? – fermuch

**A:** see my previous answer for Meteor. For React, it seemed like a natural progression as it was embraced by much of the community as an alternative to Blaze, Meteor's original UI framework. And same thing with GraphQL, it just seemed like the direction things were moving. Since Vulcan's goal is to make people's lives easier I thought it was important to adopt widespread technologies and not ask devs to learn some new esoteric libraries.

---

<a name="hi-sacha-favorite-links-sidebar" href="#hi-sacha-favorite-links-sidebar">#</a> **Q:** Hi Sacha!! What are some of your favorite links from Sidebar recently? – swyx

**A:** I love this one, never thought about it this way: https://uxdesign.cc/visual-indicators-c3e0e5ce90f7

Also love Hexatope, I made a necklace for my wife and it turned out great (I think :wink: ) https://blog.producthunt.com/when-tech-and-jewelry-collide-the-maker-of-hexatope-shares-her-story-a9f2819f49a5

---

<a name="hi-particular-moment-made-realise" href="#hi-particular-moment-made-realise">#</a> **Q:** Hi! Was there any particular moment that made you realise Vulcan (Telescope at the time) was needed? (Like an 'aha' moment perhaps?) Thanks for the Q&A! – S3B4S

**A:** I originally built Telescope (a Hacker News clone app) because I wanted to build my own Hacker News for designers. I was jealous of how much traffic HN was bringing to development-related sites and wanted the same thing for design… Vulcan today is basically the result of not knowing when to quit and just hacking away on the same project for 5 years. I can only hope there's a need for it, because if not I'll have some soul searching to do!

As a follow-up, I think one "aha" moment I had was realizing most modern web dev technologies out there were optimized for tailor-made, highly-specific apps. Which didn't really fit my needs as someone who likes to launch a lot of small side projects. I suppose that's why people still use WordPress for so many different use cases, it just saves time compared to rebuilding the whole stack from scratch every time. So I wanted something similar, but for the modern JS stack :smiley:

---

<a name="pieces-advice-youd-give-developer" href="#pieces-advice-youd-give-developer">#</a> **Q:** What are some pieces of advice you’d give to a developer who aspires to be a great designer? – tomyfalgui

**A:** Practice a lot, copy a lot, take the time to care about small details. It's hard to give advice about this since virtually every great designer I know has years and years of practice behind them. There's no shortcut to get there without putting in the time…

---

<a name="problem-vulcan-solving-use-personally" href="#problem-vulcan-solving-use-personally">#</a> **Q:** What problem is Vulcan solving for you? Do you use it personally? What's your motivation for working on Vulcan? Do you use it for every project, no matter the requirements? – fermuch

**A:** I'm currently using Vulcan for http://sidebar.io/, as well as for an AirBnB-type app I'm building for a company here in Japan. I also always have 2-3 other ideas of things I'd like to build with Vulcan :smiley: I don't use it for every project (http://stateofjs.com/ is built with Gatsby for example) but I'd probably use it for anything that needs user accounts, a db, etc. as opposed to just a more streamlined static site.

---

<a name="tried-next-gatsby-build-time" href="#tried-next-gatsby-build-time">#</a> **Q:** Have you tried Next (or Gatsby for build time rendering) and if so, how do you think Vulcan compares to them or other isomorphic React frameworks now?(edited) – NickServ

**A:** I love Next and Gatsby. If I were starting Vulcan from scratch today I'd probably build it on top of Next to be honest. And I'm a long-time Gatsby user (in fact I designed the Gatsby logo). They both do something pretty different from what Vulcan does though. But if Next or Gatsby alone meet your requirements then I'd say go ahead and use them.

---

<a name="whats-outlook-vulcunjs-would-anything" href="#whats-outlook-vulcunjs-would-anything">#</a> **Q:** What's the outlook for VulcunJS? Would anything be added/adopted to the stack in the future? How will compete with others - JAMstack, CRA? What's the best/ideal future for VulcunJS? – mangodb

**A:** Apart for migrating to Apollo Client 2, React Router 4, etc. no big changes to the stack are planned. The problem with stack changes is that they take up a ton of time and effort (both the React and GraphQL rewrite took about a year of work each) and the end result is that everything (hopefully) works just the same as before…

I really don't see that much competition there. For example I'm currently building a room rental service with Vulcan and I don't see how you'd easily build something like this with Gatsby. And even if you did, you would still be missing out on all of Vulcan's premade utilities and components. So to me they just serve different purposes.

I would like Vulcan to become the WordPress/Drupal/Rails of the React+GraphQL stack. I know these are all different things, but to me they often address the same use case: quickly getting a project off the ground so you can focus on actually improving the product.

---

<a name="whats-2018-call-action-everyone" href="#whats-2018-call-action-everyone">#</a> **Q:** What's your 2018 call to action for everyone here? :smiley: – swyx

**A:** Apart from trying out Vulcan's getting started tutorial? :wink: I'd say probably learn how to use GraphQL.

---

<a name="seen-hasuraio-curious-get-thoughts" href="#seen-hasuraio-curious-get-thoughts">#</a> **Q:** Have you seen Hasura.io? Curious to get your thoughts on it, seems to have some overlap. – vcarl

**A:** I hadn't seen that. But if I'm not wrong it focuses on the back-end mainly? I think there are a ton of awesome solutions for the back-end, like Prisma, AppSync, etc.

But as far as I know not many people are tackling the front-end part of the equation. For example Vulcan will actually generate working forms for you from your models, along with the back-end layer required to submit them. I think that front-back-end synergy is what makes Vulcan pretty powerful.

---

<a name="start-web-development-today-go" href="#start-web-development-today-go">#</a> **Q:** If I were to start web development today, should I go with Vulcan? Is it noob friendly? What others tools/frameworks/technologies do you think I should learn? – fermuch

**A:** I think you can definitely start with Vulcan, as it will serve as a nice intro to React, GraphQL, etc. At some point if you want to be a professional developer you should also learn the "manual" way of doing things though. But at least by starting with Vulcan you'll already know where each building block fits.

---

<a name="terms-design-anything-stands-japan" href="#terms-design-anything-stands-japan">#</a> **Q:** In terms of design, is there anything that stands out in Japan for you? Whether it is product advertisement, architecture, graphic design or anything(edited) – S3B4S

**A:** Print design and packaging are really outstanding in Japan. Web design not so much…

---

<a name="one-favorite-features-vulcan-essentially" href="#one-favorite-features-vulcan-essentially">#</a> **Q:** One of my favorite features of Vulcan is it is essentially a group of packages, any of which can be overridden. Can you describe why you set it up this way (what you intended) and how it's beneficial? – Jonny

**A:** It's just an architecture that evolved naturally, in part due to the fact that "normal" Meteor apps used to just declare everything globally. So putting stuff in packages was a way to avoid this and have a cleaner codebase.

---

<a name="plans-add-reactnative-support-vicente" href="#plans-add-reactnative-support-vicente">#</a> **Q:** Any plans to add react-native support? – Vicente

**A:** I mean you can use Vulcan with React Native currently, but you'd have to use it as a regular GraphQL API and then build your RN client as you usually would. I'm not sure yet what deeper integration would look like, maybe it's just a matter of having a starter RN project?

---

<a name="climbed-outside-japan-im_paul_hi" href="#climbed-outside-japan-im_paul_hi">#</a> **Q:** have you climbed outside in japan any? – im_paul_hi

**A:** I've climbed in France, US, and UK, but only in gyms… although I did do Via Ferata in the Canary Islands, I don't know if that counts?

(I'm still a very amateur climber…)

---

<a name="think-atmosphere-closed-migrated-npm" href="#think-atmosphere-closed-migrated-npm">#</a> **Q:** Do you think that atmosphere should be closed and migrated to npm? – frpz

**A:** I think that would be very hard to do in practice, and would break a ton of Meteor apps, so no.

I do think developers individually should migrate their packages to NPM though.
