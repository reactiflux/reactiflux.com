---
title: Jenn Creighton
date: 2021-07-01
time: 1PM - 2PM PT / 8PM GMT
location: Q&A Channel Reactiflux
description: "Senior Staff OSS Engineer at [@apollographql](https://twitter.com/apollographql), host of the single-threaded podcast, and organizer of #WomenOfReact2020 + [@useReactNYC](https://twitter.com/useReactNYC)"
people: "[@gurlcode](https://twitter.com/gurlcode)"
---

<a href="#based-on-your-twitter-bio" name="based-on-your-twitter-bio">#</a> **Q:** Based on your Twitter bio, I see you're doing React stuff I'm a Vue developer, but my job requires me to learn React. What's the best way to learn React & React Native, as well as the best practices? – avi12

Excellent question! I learned React by building applications with it - lots of trial and error. But that was 6 years ago and now there are lot more resources. I'm a big fan of Egghead & Frontend Masters. But the React team (specifically Rachel Nabors and Dan Abramov) are working on a huge revamp of the React docs. I've seen a sneak peek and it's amazing work. That'll be the go-to Learn React source in the future.

---

<a href="#what-are-the-main-points-companies" name="what-are-the-main-points-companies">#</a> **Q:** What are the main points companies can pick up to make the work environment feel more inclusive for women, POC etc. (my bad, didn't read the topic list!) – ThimoLS

No worries but I am going to skip this since it's not something I can answer. White women are really diversity…

---

<a href="#hey-jenn-im-right" name="hey-jenn-im-right">#</a> **Q:** Hey Jenn! I'm right now a C# Asp Net developer and have been working on building a GraphQL API using Hot Chocolate. The ability to be able to automatically generate GraphQL from C# types have been very useful, so what value proposition is there to create a GraphQL API in Apollo Server (and JS/TS) instead of C# or any other strongly typed language with automatic type generation in graphql? – Dreamplay

There's value if you want to work in JS / TS for both the front and backend or to do server-side rendered applications. Apollo Server lets you get up and running with a GraphQL backend super quickly. But if you're comfortable in C#, no need to force yourself into JS / TS.

---

<a href="#i-want-to-contribute-to-react" name="i-want-to-contribute-to-react">#</a> **Q:** I want to contribute to React repository but the large code base is very overwhelming for me. What would you suggest a beginner to get started with it? – Deepayan

I love this question. It is a super overwhelming codebase. If you want to contribute to a large project like that, start with the docs! There are usually lots of small ways to contribute there without needing alllllll the knowledge you'd need for the other parts of the codebase. And also, please please please don't contribute because you feel like everyone else is. MOST ENGINEERS DO NOT CONTRIBUTE TO OPEN SOURCE. And it's totally fine. Doesn't hold back their careers at all. Only do it if you are super interested and can manage the amount of time required.

---

<a href="#hi-what-are-your-main" name="hi-what-are-your-main">#</a> **Q:** Hi! What are your main testing techniques to use for react native applications? – romulo_developer

I'm not as familiar with testing React Native apps but for React web apps, my go-to is React Testing Library + Cypress.

---

<a href="#hi-i-recently-got-hired" name="hi-i-recently-got-hired">#</a> **Q:** Hi, I recently got hired for quite a big project and it seems quite overwhelming to me because there's so much new stuff, do you have any tips for me to feel more comfortable? – HiddenIpex

When I feel overwhelmed, I tend to break down what I'm doing into small pieces. As small as possible. And I keep lists of things I've learned, things I need to learn - just to stay organized. Two other tips:

1. Try to remember that no one knows everything and not knowing means you get to find out - that's the fun part!
2. Reflect once in awhile on what you've achieved. Otherwise you'll get stuck looking at the long list of to-dos without appreciating what you've done so far.

---

<a href="#what-are-you-thoughts-on-esbuild" name="what-are-you-thoughts-on-esbuild">#</a> **Q:** What are you thoughts on esbuild that claims build times enormously shorter compared to webpack? – parvez

I'm excited about esbuild. Webpack has a large share of the "market" but new bundlers are always welcome IMHO. esbuild is on my shortlist to try out for new projects, for sure. I'm not just looking at build time too. I'm looking at developer experience and ease of customization.

---

<a href="#whats-your-most-exciting-upcoming" name="whats-your-most-exciting-upcoming">#</a> **Q:** What's your most exciting upcoming React 18 feature? – Kim

TBH I'm excited about the realization of the long-awaited Concurrent Mode - though that's no longer what it is, it's Concurrent APIs that you can opt into. We've been waiting on this for a long time. React 18 itself isn't going to be packed with new features. It's lot of work under the hood but as React 18+ are released, we'll see more features I'm excited about like Suspense for Data Fetching.

---

<a href="#any-tips-for-newer-developers-on" name="any-tips-for-newer-developers-on">#</a> **Q:** Any tips for newer developers on which languages to learn prior to C and PHP? – Soul ✞

Wish I could answer this but I know JS and… that's it. Yup. One language. (And I've built an entire career off of it.)

---

<a href="#do-you-have-a-personally-great" name="do-you-have-a-personally-great">#</a> **Q:** Do you have a personally great example of GraphQL being used to combine a bunch of disparate APIs together that we can all see? – SuperSheep

I don't! But [Kurt Kemple](https://twitter.com/theworstdev), dev rel manager at Apollo, might. Reach out on Twitter and he'll be happy to answer you.

---

<a href="#when-would-you-use-react-hooks" name="when-would-you-use-react-hooks">#</a> **Q:** When would you use react hooks approach instead of class component's one? – romulo_developer

Class components were once the bread & butter of React but hooks replace them. Opt for hooks + functional components. The lifecycles available in class components are being deprecated so continuing to use them isn't the best idea.

---

<a href="#suggetions-on-getting-hired-for-first" name="suggetions-on-getting-hired-for-first">#</a> **Q:** What can I do to get hired for my first job as React developer? – Hessa💜

Understanding JS fundamentals is still the best option for getting hired as a React dev. Study those. Learn why React does what it does. You don't have to go to far under the hood but some understanding here is key to interviewing for those positions.

---

<a href="#how-do-we-handle-mutation-permissions" name="how-do-we-handle-mutation-permissions">#</a> **Q:** How do we handle mutation permissions with GraphQL? For example, when you fetch a list of entities, how to you know which entities you are actually allowed to modify it? – Bleuet

If you are working with Apollo, most people use an Apollo Link to handle validation and custom logic. But if this is for a specific mutation, there's no option to avoid some duplication of logic on the frontend because whatever cache you are using needs to know how to update itself. An annoying part of caching data but a necessity.

---

<a href="#how-much-have-you-played-around" name="how-much-have-you-played-around">#</a> **Q:** How much have you played around with strong-typed languages and do you miss working with them when you work in JS/TS? – Dreamplay

I've written a small bit of Swift (wouldn't say I know it) but whenever I work with another language, I miss JS. I know it so well at this point that it feels very natural.

---

<a href="#hello-i-am-currently-making" name="hello-i-am-currently-making">#</a> **Q:** Hello, I am currently making open source MERN projects for my portfolio in order to find a job. Which things should I focus on code-wise? And does the design matter for projects like these? – Tariq

Focus on whatever interests you most. Projects are a great way to learn what part of the stack you like the best. Whether the design matters depends on what kind of role you're going for. As a frontend dev for most of my career, design did matter to me.

---

<a href="#what-are-a-couple-of-your" name="what-are-a-couple-of-your">#</a> **Q:** What are a couple of your favorite Content management systems? and what are your thoughts on Progressive Web Applications, and react native, do you think one will be used more than the other? – Briann

I don't have a favorite CMS but on the topic of PWA vs React Native, I've leaned towards React Native in the past. But the choice is super dependent on the use case, the engineers building it, how you want to handle deployments, etc. And that's how it should be. One shouldn't "win" over the other one - it's about finding the best one for that particular use case. Most of what I've seen is that an engineer or two champion one or the other choice at their jobs and lead the charge.

---

<a href="#how-can-i-encourage-my-team" name="how-can-i-encourage-my-team">#</a> **Q:** How can I encourage my team to learn/grow in the area of component architecture (absorbing some of your talks on the subject, for example) without being a jerk and implying they write bad UI code? – andrewpomeroy

I hear from folks who share those talks at work or watch them as part of Lunch N Learns - that seems to be an effective option to get a team talking about component architecture. Leading by example is also effective and what I've chosen to do in the past. But like the old saying goes "you can lead a horse to water but you can't make them drink." Sometimes it just doesn't work. If you can get other engineers interested though, keep the conversation up! Share resources, ask for input on your components, etc. It'll hopefully become part of the culture 🤞

---

<a href="#this-question-goes-along-with-the" name="this-question-goes-along-with-the">#</a> **Q:** As someone who moved into React and React-Native from a totally different field (nuclear science) and started their own firm what tools or methods do you find are the best to attract new high paying, high quality clients to maintain growth? – Dax

I'm not sure exactly what you mean. I've also never worked as a consultant for longer than a couple of months. If I do meet potential clients, it's through interviews! Weird, I know. But if I interview at a startup, sometimes there's interest in me consulting. Tools-wise, TypeScript and GraphQL are great additions to most projects.

---

<a href="#do/will-you-and-your-team" name="do/will-you-and-your-team">#</a> **Q:** Do/will you and your team use TypeScript in React projects? Why? – Heng-Hao

I have. I'm not a super big fan of TS but it does have its benefits. The problem is that TS can add complexity. Which is the opposite of what it's meant to do! I find a lot of React engineers overindex on TS, creating complex types and generics. So if you want the benefits of it (documentation, less mental overhead, autocompletion, etc) try to use it lightly.

---

<a href="#with-the-addition-of-recoiljs" name="with-the-addition-of-recoiljs">#</a> **Q:** With the addition of Recoiljs, how do you feel that will affect the state management ecosystem? – SuperSheep

The state management ecosystem is so vast. It can be overwhelming to newbies. I don't have specific Recoil thoughts. I like seeing new options on the table. But I also know how difficult it is to make a decision about the data fetching layer of your app. You could spend years understanding all the differences. What I tend to focus on is if it meets the need I have (data fetching? ✅ ) and how it feels to use the library. Is it confusing? I worked with Redux for so long, I didn't realize until I started on a new team, that a lot of engineers struggle with it. So we started researching a new library that would be easier to get started with. (We didn't land on one before COVID happened and that business didn't last.)

---

<a href="#im-working-on-ongoing-project" name="im-working-on-ongoing-project">#</a> **Q:** I'm working on ONGOING project, i'm currently on sprint 9 (Giant project)… there are a lot of BUSINESS RULES on those folders, its too difficult to undertand the project overall… how do you think i could debug a big project without any kind of documentation, chart flow, or a Read-me explaining the code and the flow of the project? Where could I start? – Daniel

Here's my advice for debugging anything: learn how to use Chrome's developer tools really, really well. (Or Firefox! But I use Chrome.) Being able to log, pause execution, examine variables and loops, etc is the best way to understand what the hell is going on. Jon Kupperman has an excellent deep dive on Chrome devtools on Frontend Masters - highly recommend.

---

<a href="#why-do-you-choose-react-over" name="why-do-you-choose-react-over">#</a> **Q:** Why do you choose react over vue or other frameworks? – Floofy Boi

The truth? Because you want to work with it. 🤷‍♀️ Yes, there are maybe some solid technical use cases for each framework but the truth is, JS frameworks these days are pretty good. Vue is great. Use it if you want. Use React if you want. I've found that React works well with my mental model and how I think about building things. Vue, less so. But for someone else it's the complete opposite. Use what speaks to you.

---

<a href="#with-the-growth-of-graphql-ecosystem" name="with-the-growth-of-graphql-ecosystem">#</a> **Q:** With the growth of graphql ecosystem, do you think Apollo as a client will remain relevant? I prefer doing my data management through redux and selectively calling APIs – ashesh

Obviously, as a previous Apollo Client maintainer, I'm biased here. But yes, I do think it will stay relevant. Besides the fact that Apollo Client is used heavily by huge companies, it does its job well. It's more fully featured. The community loves it. And Apollo Client is continuing to evolve. I'm very excited for the future of the project (but I also know the "secret" upcoming features 😉 ). And hey, if Redux is working for you, go for it. It's all good.

---

<a href="#hey-jenn-what-do-you" name="hey-jenn-what-do-you">#</a> **Q:** Hey Jenn, what do you think that could be a next step when it comes to career to someone who already has a good knowledge of React(mostly Native) leaning towards Mobile Development? – Deleted User

Hard to say but as some general career advice, once you get some experience, the world is your oyster. As an engineer, you can do anything you want. Learn anything you want. Be anything you want. I've been a frontend dev, OSS maintainer and my next step isn't either of those two. I go where I find I'm interested and can keep growing as an engineer.

---

<a href="#what-would-you-consider-to-be" name="what-would-you-consider-to-be">#</a> **Q:** What would you consider to be a good code sample or project(give examples maybe 🙂 ) which you can use to apply for internships or other oppurtunities as I recently got rejected for MLH fellowship for not having a great code sample? – Deepayan

Games make great sample projects. A lot of people build tic-tac-toe or something similar. I built a Tamagotchi. I learned a ton. And it even inspired [this talk](https://www.youtube.com/watch?v=09V_JAGTs2E)
