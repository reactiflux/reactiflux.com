---
title: Johannes Schickling & Soren Bramer Schmidt
date: 2018-01-25
time: 1-2pm PT / 8-9PM GMT
location: Q&A Channel Reactiflux
description: "Co-Founders of [Graphcool](https://www.graph.cool/). A Serverless GraphQL backend for frontend developers. Graphcool also created Learn Relay/Learn Apollo and organizes the [GraphQL-Europe](https://graphql-europe.org/) conference."
people: "[@sorenbs](https://twitter.com/sorenbs) & [@_schickling](https://twitter.com/_schickling)"
---

## Co-founders of Graphcool

<a name="big-fan-prisma-whats-business" href="#big-fan-prisma-whats-business">#</a> **Q:** Big fan of Prisma – what's your business model, and how do you plan to grow the business? – hoodsy

**A:** Thanks a lot! We will be launching Prisma cloud in a month or two that brings global auto-scaling GraphQL api to your databases. – sorenbs

---

<a name="one-sentence-solution-provide-value" href="#one-sentence-solution-provide-value">#</a> **Q:** In one sentence, how does your solution provide value to GraphQL? – MomsSpaghetti

**A:** Prisma unlocks your data and makes it available to the broad ecosystem of GraphQL tooling. – sorenbs

---

<a name="somehow-possible-use-prisma-conjunction" href="#somehow-possible-use-prisma-conjunction">#</a> **Q:** Is it somehow possible to use Prisma in conjunction with React without a client middleware like Relay/Apollo? – kylemh

**A:** Great question! Prisma can be used with GraphQL Bindings to build a GraphQL server or directly from frontend apps for simpler use cases. Security is based on JWT tokens. Over time we will expand the capabilities to include fine grained grants to limit access from client side apps. – sorenbs

---

<a name="creating-popular-service-modern-javascript" href="#creating-popular-service-modern-javascript">#</a> **Q:** How has creating a popular service in the modern JavaScript ecosystem boosted your careers; have you gained many connections or seen any tangible benefit beyond contributing to the community? – connor

**A:** Thanks for your great question @connor! Running your own company, you're very much "in control" of your own career and it's rather a matter of making the entire company successful.

Being part of today's thriving JavaScript ecosystem has been absolutely essential for us. We're very fortunate to have built up a great open-source community which resulted in many great projects such as the GraphQL playground or GraphQL-config. Projects like these were a great opportunity to work together with companies like Facebook. So to answer your question, the benefits have been very tangible for us! – schickling

---

<a name="think-consensus-happen-around-oauth" href="#think-consensus-happen-around-oauth">#</a> **Q:** Do you think a consensus will happen around Oauth like permissions in GraphQL? I feel like everybody hack around with middleware a right now. – Xavier

**A:** Thanks for that great question! I think it is inevitable that the community will standardise around a few common solutions to permissions. GraphQL is still maturing and new use cases are being explored. While this is going on I think it is very natural that more ad-hoc solutions are being used. – sorenbs

---

<a name="love-educational-platforms-plan-adding" href="#love-educational-platforms-plan-adding">#</a> **Q:** I love your educational platforms. Do you plan on adding any quick tutorials or blog posts on thinking about unit testing any of your products or any of the products you already advocate for? – kylemh

**A:** Thanks a lot @kylemh and great point! We're currently working on some more in-depth content which will also cover unit/integration testing. Keep an eye out on our blog + our twitter account: https://twitter.com/Graphcool. – schickling

---

<a name="regarding-subscriptions-backend-team-got" href="#regarding-subscriptions-backend-team-got">#</a> **Q:** Regarding Subscriptions. Our backend team got the impression that the spec is not official or at least not finalised, and because of this have decided to go a different route for notifications. This isn’t Graphcool in prod, but we’ll still be using Graphcool in development and we need to stay in parity with prod for obvious reasons. Can you give some information on what is the status of this feature and what is likely to be happening in the future, so I can maybe allay their concerns and we can switch to Subscriptions instead? – Paisley

**A:** Subscriptions has traveled a longwinded road, but they are in the official spec now. You can find the RFC that let to the final spec at https://github.com/facebook/GraphQL/blob/master/rfcs/Subscriptions.md Most of the work leading up to the inclusion in the spec was lead by Apollo. It is important to realise that the GraphQL spec does not concern itself with the transport, so In addition to GraphQL subscriptions you need to also use Apollo-transport-ws which is what Prisma implements. My suggestion would be to seriously consider using GraphQL subscriptions in production :smiley: – sorenbs

---

Thanks for the great information. Will be sure to pass this on and push for using Subscriptions, it'll certainly make out frontend lives much easier! Graphcool so far made it really easy for us to get prototypes up and running without needing to wait for backend services. – Paisley

Thanks Paisley. Using Graphcool to quickly build out prototypes and then handing it over to "engineering" when the real deal has to be implemented is a common theme we hear when talking to our customers. Prisma is our step towards making the core technology in Graphcool more stable so that it can be used for both prototypes and real applications. If you are interested, I'd be happy to get on a call with you or your team later to talk about adopting Prisma in your production infrastructure. – sorenbs

---

<a name="seems-decent-amount-branding-confusion" href="#seems-decent-amount-branding-confusion">#</a> **Q:** There seems to be a decent amount of branding confusion around Prisma and where/how it fits in with the Graphcool framework. What are your plans for solving this? – Sonicrida

**A:** Thanks for bringing this up @Sonicrida as this is a question that we've seen a lot over the last few days. The short answer to your question is, that we've now identified the biggest points of confusion and are currently working on content + product adjustments to minimize the confusion. – schickling

I think it's helpful to understand some more background here: We were actually about to release (what's now Prisma) under the name Graphcool 1.0 – this however would have had one huge implication: Every piece of content (blog posts, tutorials, videos) that made use of npm install -g Graphcool would have been outdated over night. To prevent this, we've decided to release this under a new name. – schickling

There is quite a bit more to this topic, I think this forum post wraps it up quite well: https://www.graph.cool/forum/t/Graphcool-framework-and-Prisma/2237 – schickling

Happy to take more detailed questions about this topic! :raised_hands: – schickling

---

<a name="first-thanks-amazing-platform-tools" href="#first-thanks-amazing-platform-tools">#</a> **Q:** First of all, thanks for amazing platform and tools you are making! I've been following Graphcool since you were BaaS service. In the past few months there were a lot of changes - Graphcool framework, Prisma... I feel somewhat lost where each piece of the puzzle fits. Would be nice to have a blog post perhaps, explaing what you can and can't do with Prisma, GraphQL binding, GraphQL-Yoga and the rest. – Checkmatez

**A:** We need to do better at communicating what we are doing :smile: Johannes linked to a blogpost above that goes into some detail. We will be writing up more concrete material on the difference between Graphcool and Prisma soon. Additionally we have been giving talks introducing Prisma and GraphQL Bindings at meetups in Berlin and London over the past week. Look out for recordings from these events on twitter very soon. – sorenbs

---

<a name="already-kind-asked-comment-medium" href="#already-kind-asked-comment-medium">#</a> **Q:** I already kind of asked in a comment on Medium about Prisma working towards implementation with multiple data sources. Graphcool said it was incoming, but I was curious if it’s a large priority or if I’m thinking about implementation from the wrong perspective. It seems paramount for enterprise adoption, from my current frame of mind. – kylemh

**A:** Yet another great question @kylemh! We're currently working out a public roadmap which gives more visibility into this topic. Until this roadmap is available, these Github issues should give you a better feeling in terms of demand + prioritization: https://github.com/Graphcool/Prisma/issues?q=is%3Aopen+is%3Aissue+label%3Aarea%2Fconnector+sort%3Areactions-%2B1-desc

Supporting more databases is one of our highest priorities right now. We've already started working on some API specifications for various kinds of databases (relational, document, search, timeseries, caching...) and would love to get the feedback of the community on it before the implementation work begins! Stay tuned about this in the Github issue comments! – schickling

---

<a name="actually-working-graphcool-want-migrate" href="#actually-working-graphcool-want-migrate">#</a> **Q:** Actually I am working with Graphcool and I want to migrate my projects to Prisma, but I can't find any guide or tuto to do that. When will be able these tutos availables? do you need help, how can I help you? – AdrianC

**A:** Great point @AdrianC. There are no fully comprehensive tutorials/guides available for this yet but we're working on it. Expect something within the next few weeks. For now you can already take a look at various example projects using Prisma and use the import/export feature to migrate your data: https://www.PrismaGraphQL.com/docs/reference/data-import-and-export/data-import-ol2eoh8xie – schickling

Also - feel free to ask any other questions you might have about the differences between Prisma and Graphcool :smiley: – sorenbs

---

<a name="last-one-opinion-interfaces-implements" href="#last-one-opinion-interfaces-implements">#</a> **Q:** Last one for me too ! What is your opinion on interfaces and the implements keyword ? I often stumbled upon situations where I basically wanted extends and interfaces were not fit/ clear enough for that – Xavier

**A:** I'd be very curious to hear about these cases! We are currently working on implementing a feature we call polymorphic relations that allow you to create a relation to an interface backed by one or more concrete data types. Interfaces seem to be a great fit for this. Is your concern that the resulting SDL describing the schema is not clear enough or that the queries you have to write using the `...` syntax is confusing? – sorenbs

---

<a name="thanks-bringing-graphcoolprisma-world-plans" href="#thanks-bringing-graphcoolprisma-world-plans">#</a> **Q:** Thanks for bringing Graphcool/Prisma into the world. Any plans of releasing other products tackling similar problems? – kanalas

**A:** Thanks a lot @kanalas, I really appreciate your support! We're set out to make backend development easier using GraphQL. The biggest concrete problem/opportunity we see right now and for the future is the mapping between your API layer and your database(s). By adding support for different databases we'll get closer and closer to our goal of making GraphQL a universal query language for your data(bases).

Also expect some exciting improvements/projects in our open source community. For example we're planning a bigger re-write of the GraphQL playground which has been anticipated by many developers! See here: https://github.com/Graphcool/ – schickling

---

<a name="want-convince-teamcompany-adopt-graphql" href="#want-convince-teamcompany-adopt-graphql">#</a> **Q:** I want to convince my team/Company to adopt GraphQL and Graphcool / Prisma. Do you have something like "how to convince your boss" for use Graphcool? :smiley: – AdrianC

**A:** I think the simplest answer to that is developer productivity and measurable improvements of your product. For most companies the adoption of GraphQL is driven by frontend teams which has created fantastic success stories in the past. I think it will definitely help your argument to point to all the other companies who already adopted GraphQL such as Airbnb, NYT, Twitter, Producthunt etc.

I remember there was also a talk about this topic during the last GraphQL Summit. Check it out here: https://www.youtube.com/watch?v=8hT-PkzpeRM – schickling

---

<a name="say-team-skilled-devs-convinced" href="#say-team-skilled-devs-convinced">#</a> **Q:** Say you have a team of skilled devs that are convinced GraphQL is what they want to implement (just not well versed in it) and they get to choose the stack for a brand new platform/service. What would you say are the main strengths to build their product upon Prisma? – ackzell

**A:** Prisma allows you to use GraphQL at all layers of your stack. To fully appreciate the benefit of this you have to understand GraphQL Bindings and how they allow you to skip an entire layer of mapping code. Companies like IBM and Coursera are already using this approach to combine GraphQL APIs from multiple microservices. Prisma plugs right into that infrastructure and allows you to use the same tooling for interacting with your data. – sorenbs

---

Phoenix **Q:** What sort of database does Graphcool use? Are there any plans to use an actual graph database such as Neo4j or dgraph? – Down

**A:** Currently Graphcool & Prisma supports MySQL. As answered in a previous question, we're working towards supporting other databases as well. It's important to understand that GraphQL doesn't mean the best database behind the scenes has to be a GraphQL database such as Neo4j or dgraph. It's always a question what kind of data you're planning to store which "dictates" the kind of database you're supposed to use. In the most cases, you're making a pretty smart decision to go with a relational database. – schickling

---

<a name="know-big-clients-apps-using" href="#know-big-clients-apps-using">#</a> **Q:** Can we know the Big Clients or Apps who are using Graphcool as BASS in the production environment? – bamne123

**A:** This is a popular question :smiley: We have a good number of large companies who are either using Graphcool in production or in the process of building a new project on Graphcool. One example is a large airline that relied on Graphcool subscriptions to power a global marketing campaign. We have a few testimonials listed on https://www.graph.cool/cloud/ and will update this section when we launch Prisma Cloud. – sorenbs

---

<a name="work-scalability-graphcool-many-concurrent" href="#work-scalability-graphcool-many-concurrent">#</a> **Q:** How does it work the scalability with Graphcool? how many concurrent users / connections do you support right now? – AdrianC

**A:** Great question! This is where I have to dive into the technical details and explain the difference between Graphcool and Prisma. – sorenbs

Graphcool is designed to be a cheap massively multi tenant environment that allows developers to get started with a powerful backend without any upfront cost. This means that the entire stack - Database, API and subscriptions run on hardware that is shared between all projects. At peak we are operating high tens of thousands of concurrent connections on this platform. – sorenbs

Prisma is designed from the ground up to run on dedicated hardware for each tenant. This means that you will get a dedicated and automatically scalable API + subscriptions layer for your Prisma service allowing you to scale to the combined size of all current Graphcool projects and beyond. Because we are fairly smart about scaling up and down quickly, you only pay for the hardware when you actually need it. – sorenbs

---

<a name="main-differences-graphcool-prisma-adrianc" href="#main-differences-graphcool-prisma-adrianc">#</a> **Q:** What are the main differences between Graphcool and Prisma?? – AdrianC

**A:** It's important to understand that Prisma is technically a (core) part of the Graphcool framework. Think about Prisma rather as a component in your infrastructure stack and about Graphcool as a "feature-complete solution" for your backend.

One of the goals for Prisma was to make it a standalone component that can be used outside of the scope of Graphcool and that it works well with other tools and frameworks in the GraphQL ecosystem. This has been a great success so far as we're hearing of people in the community writing bindings in Go, Python and other languages!

So as a rule of thumb: If you're just getting started and want to build a MVP, Graphcool is a great fit. If you're building more sophisticated backend applications I recommend you looking into Prisma. – schickling

---

<a name="maybe-bit-far-fetched-regarding" href="#maybe-bit-far-fetched-regarding">#</a> **Q:** Maybe a bit far fetched, but regarding dbs: Do you see a migration path if we started building with the MySQL support and then for some reason we wanted to switch to a different technology like MongoDB? – ackzell

**A:** Great question! This is certainly an option if you are willing to put in some work to create a script that can shuffle the data around and can accept a bit of downtime while it happens. We are happy to help set this up.

Further down the road we want to support automatic data transformation and synchronisation between databases, so this might become a native feature at some point. – sorenbs

---

Phoenix **Q:** Using GraphCool, is it possible to restrict access to certain fields? For instance, could you prevent users from accessing personal information of other users (like name and birthday) while still allowing access to some fields (like display name and joined date)? How is this achieved with GraphQL? – Down

**A:** Yes, the scenario is possibly to implement using Graphcool's permission system. You can check out this tutorial over here: https://www.graph.cool/docs/tutorials/auth/authorization-for-a-cms-miesho4goo

If you're using Prisma, you'll need to implement this sort of functionality yourself in your resolvers (which is still quite easy to do). Here is a simple example of how permissions implemented in a GraphQL server can look like: https://github.com/Graphcool/Prisma/tree/master/examples/permissions – schickling

---

<a name="love-graphcool-prisma-wish-improve" href="#love-graphcool-prisma-wish-improve">#</a> **Q:** What is that you most love about Graphcool / Prisma? What you wish to improve of Prisma?? – AdrianC

**A:** TLDR: Simplicity and developer experience. We love taking on difficult technical problems and providing a nice and simple abstraction to developers. Similar to how React is handling the DOM for you, our goal for Graphcool/Prisma is to give you a better abstraction for your data(base). – schickling

---

<a name="speaking-frontend-developer-recommend-graphcool" href="#speaking-frontend-developer-recommend-graphcool">#</a> **Q:** Speaking as a front-end developer, do you recommend Graphcool or Prisma for people who are new to GraphQL in general? – dentemple

**A:** Great question @dentemple! Depends on whether you ever want to write some backend code, if the answer is no, then use Graphcool, if yes, give Prisma a try.

We've just updated HowToGraphQL a few days ago which should get you started: https://www.howtoGraphQL.com/GraphQL-js/0-introduction/ – schickling

---

<a name="according-previous-answer-prisma-replacement" href="#according-previous-answer-prisma-replacement">#</a> **Q:** According to your previous answer, Prisma is not a replacement for Graphcool, but a tool to build another type of applications. Is it correct? what these sophisticated BE applications can include? do you mean performance, live data?? – AdrianC

**A:** The way to think about it is that Prisma is a different way to build backends than Graphcool. You can to a large extend build the same kind of applications, but if you miss the more sophisticated control flow you can express when writing your own code, then Prisma is the better option for you. Also, if performance and high stability is really important to you, then Prisma is the better choice because if the dedicated nature of its infrastructure. – sorenbs

---

If you have any other questions, also please feel free to join our Slack: https://slack.graph.cool/ or ask in our forum: https://www.graph.cool/forum – schickling
