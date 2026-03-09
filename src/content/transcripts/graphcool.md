---
title: Graphcool
date: 2017-06-08
time: 1-2pm PT / 8-9PM GMT
location: Q&A Channel Reactiflux
description: "Co-Founders of [Graphcool](https://www.graph.cool/). A Serverless GraphQL backend for frontend developers. Graphcool also created Learn Relay/Learn Apollo and organizes the [GraphQL-Europe](https://graphql-europe.org/) conference."
people: "[@sorenbs](https://twitter.com/sorenbs) & [@_schickling](https://twitter.com/_schickling)"
---

## Co-Founders of Graphcool, a serverless GraphQL backend for frontend developers.

---

<a name="kind-companies-developers-target-graphcool" href="#kind-companies-developers-target-graphcool">#</a> **Q:** What kind of companies or developers are your target with graphcool? – Alisamix

**A:** Graphcool targets many different groups of developers. Most of our customers are typically React developers working for startups, agencies or their own projects. However we're also working with bigger enterprise companies which are using Graphcool as a foundation for their development workflow. Happy to give you more background! - Johannes

---

<a name="new-developer-learning-react-react" href="#new-developer-learning-react-react">#</a> **Q:** For a new developer learning React / React Native, what can I focus on so I'm prepared to branching out into other related technologies like GraphQL? – markd

**A:** Great question! GraphQL fits really well with the component model of React and React Native, so just focus on creating small well-composed React components. Then introducing GraphQL will be super easy once you are ready. – Soren

---

<a name="service-offering-adds-layer-abstraction" href="#service-offering-adds-layer-abstraction">#</a> **Q:** Your service offering adds a layer of abstraction to the underlying technology. Do you feel you are able to keep up with bugs and feature requests, now adaption for this cool platform is catching on? – Kim

**A:** That's a good but tricky question! :slight_smile: The [list of newly request features](https://github.com/graphcool/feature-requests) keeps growing faster than we could possibly implement them. The best thing about this open process is this way we can incorporate the feedback of our customers into the roadmap of our product. And like you mentioned, the biggest challenge here is to make sure our system is running reliably and we can address bugs as soon as possible. Over the last few weeks we're seeing a massive increase of traffic and usage which put a lot of focus on scaling our infrastructure. Ultimately it comes down to striking the right balance between shipping new features quickly and guaranteeing stability. - Johannes

---

<a name="long-time-user-rest-never" href="#long-time-user-rest-never">#</a> **Q:** As a long time user of REST and never used GraphQL but read about it, if a specific query is being made and it will return all the data, what is the benefit of using GraphQL and not REST? – 4ever

**A:** GraphQL has several advantages over REST and depending on your perspective some of them will resonate more with you. To me the main advantage is that you are able to co-locate your queries with ui components and specify exactly the data you need for your view. This allows for a better software architecture pattern, but also has significant performance advantages in that you can fetch all your data with a single request instead of doing multiple round-trips as is typical when consuming REST APIs. – Soren

---

<a name="think-future-databases-going-lot" href="#think-future-databases-going-lot">#</a> **Q:** Where do you think the future of databases is going? There have been a lot of new technologies with making better APIs and stuff, but are we just thing to hang on to SQL (and a bit of NoSQL) – dilraj

**A:** Great question! I'm super excited about new globally distributed databases released by Google and Microsoft recently (Cosmos and Cloud Spanner). Cloud Spanner in particular uses atomic clocks to perform low-latency global transactions. These are fairly advanced to use correctly, so I see a huge opportunity for APIs like what Graphcool provides to add value on top. In the SQL world most of the action is around reducing operational complexity, and AWS Aurora is doing a really good job there. – Soren

---

<a name="biggest-concern-using-graphcool-changing" href="#biggest-concern-using-graphcool-changing">#</a> **Q:** My biggest concern with using graphcool is the changing landscape of servers/db's. How are you guys planning on keeping relevant and up to date with the changing landscapes and how will those that are using the current graphql query language be able to stay up to date when graphql itself is evolving? – ajchan11

**A:** Let's talk about GraphQL first :smiley: GraphQL is an open standard and Facebook has proven to be a competent steward until now. We are now entering a phase where a broader community of stakeholders is involved in shaping the future of the language, and I think this is a great way to ensure that GraphQL evolves in a slow and steady phase, allowing developers to adopt new features when they want to. For Graphcool, we are pioneering a new way to architect backend applications called the [Serverless GraphQL Backend architecture](https://www.graph.cool/docs/blog/introducing-the-serverless-graphql-backend-architecture-ahde7paig2/). We are very much at the forefront of this development and will keep pushing the industry forward. – Soren

---

<a name="new-reactreduxgraphql-world-graphql-graphcool" href="#new-reactreduxgraphql-world-graphql-graphcool">#</a> **Q:** I am new to react/Redux/GraphQL world so What is GraphQL and GraphCool?, Apollo? Why and where do we need it? What Serverless is about? – Ahmed

**A:** That's a very common question for us and we're currently working on some better learning resources to make it easier for people like you to get started. There are many ways to explain what GraphQL is but a good comparison is to think about it as a better alternative to RESTful APIs. The best way to get a good feeling for it is actually to try it out.

Graphcool is a platform that helps you to setup a GraphQL backend without the need to manage databases or servers. In case you've used Firebase in the past, you can kinda think about Graphcool like Firebase for GraphQL (however it goes way beyond what's possible with Firebase). Serverless functions are an important building block in the Graphcool platform. It's basically a super easy way to extend your backend and implement business logic by deploying the code without the need to manage your own servers.

I'd recommend you to [check out this tutorial](https://www.youtube.com/watch?v=OoPQl8hcIug) to get started with GraphQL using React - Johannes

---

<a name="graphql-secured-use-database-related" href="#graphql-secured-use-database-related">#</a> **Q:** Is GraphQL secured to use for database related API? – vivekpatel369

**A:** GraphQL itself doesn't have a built in security mechanism. There are typical two ways to use GraphQL in your own server – either you are wrapping an existing system, so your GraphQL resolvers will query existing REST endpoints for example. In that case people usually let the existing system handle authorisation. If you are building a new server from scratch, you would typically load data from the database in your resolvers. In that case it is your job as the developer to design your backend in such a way that you can handle authorisation correctly. – Soren

---

<a name="best-way-use-authentication-authorization" href="#best-way-use-authentication-authorization">#</a> **Q:** what is the best way to use authentication and authorization in graphql? – Madhav Poudel

**A:** [We have an article just on that topic](https://www.graph.cool/docs/tutorials/authorization-content-management-system-miesho4goo/). In general, GraphQL allows you to think about permissions in terms of your data models instead of individual REST endpoints. – Soren

---

<a name="respect-javascript-community-large-one" href="#respect-javascript-community-large-one">#</a> **Q:** With respect to the javascript community at large, what is one concept you wish we all grasped and one practice that you wish would die out completely? – ada

**A:** Wow, that's a great question @ada! Graphcool is enabling a completely new development workflow compared to traditional backend development. There are a couple of new concepts we're trying to establish as best practises but when picking one, I'd say that there is a shift in how developers create APIs for their applications. With [GraphQL SDL](https://www.graph.cool/docs/faq/graphql-sdl-schema-definition-language-kr84dktnp0/) you can simply describe how your schema should look like – the API & database will be generated automatically based on that and you can focus on implementing your business logic instead of writing wiring-code between your API endpoints and your database.

Regarding your second question: People should stop creating REST APIs :stuck_out_tongue_winking_eye: - Johannes

---

<a name="would-consider-opening-actual-underlying" href="#would-consider-opening-actual-underlying">#</a> **Q:** Would you consider opening up the actual underlying GraphQL definition that is created through the web console to prevent vendor lock-in issues? And/or extend the system to allow other user-chosen back-end systems (different file storage, different database)? – Kim

**A:** Hi Kim :smiley: The great thing about GraphQL is that it is an open standard. This means that the part that is embedded into your application is an open source client. The Schema definition for a Graphcool based backend is available and you can certainly implement your own GraphQL server that is fully compatible. In terms of extending the system, we have some exciting features in the works that touch some of the points you mentioned. – Soren

---

<a name="im-using-graphcool-project-plans" href="#im-using-graphcool-project-plans">#</a> **Q:** I'm using graphcool for my project. Do you have plans on rolling out your own oauth authorization routines instead of relaying on auth0? As a developer I feel a little uncomfortable outsoursing such a crucial component like user management to a 3rd party. It seems that once I go with auth0 for authentication and authorization I won't be able to swtich platforms. – makazone

**A:** We are in fact working on exactly that :smiley: I would love to get you involved in the beta program once we are ready to test this. Please ping me in the Graphcool slack :smiley: – Soren

---

<a name="plans-allow-open-source-community" href="#plans-allow-open-source-community">#</a> **Q:** Do you have plans to allow more open source community (developer) involvement for Graphcool? E.g. custom integrations, webhook marketplace, back-end open sourcing? – Kim

**A:** This is super core to the future of Graphcool. When we announced functions last month we took the first step in this direction. You can take a look at [some open source functions the community has already collected](https://github.com/graphcool-examples/functions)

If you take a look at the Serverless GraphQL Backend Architecture article linked previously you will get a hint at what we have planned. In short – this is comming, but we can't commit to a concrete timeframe yet.

This is a common question we get. In that scenario it usually works best to start by convincing the people who will benefit directly from introducing a coherent GraphQL API – frontend developers. When they are sold on the benefit, you can start out in the small by creating a simple GraphQL proxy that forwards requests to the existing backend. Over time, management will come to appreciate the increased productivity. – Soren

In addition to @sorenbs' answer, I'd like to add that we have a large number of [open source projects](https://github.com/graphcool/) and [examples](https://github.com/graphcool-examples/) where we're already collaborating with many awesome open source developers :raised_hands: If you feel like getting your hands dirty with something you see there or something completely new, I'd be happy to talk, just shoot me a message :smile: – nilan

---

<a name="many-burned-shutdown-parse-graphicool" href="#many-burned-shutdown-parse-graphicool">#</a> **Q:** Many were burned by the shutdown of Parse. How can Graphicool instill confidence in using a BaaS again? – jpinnix

**A:** Thanks for your question @jpinnix! As you can imagine you're not the first person asking this, that's indeed one of the most common question we get from developers evaluating our service but also investors we're talking to. Based on the shutdown of Parse and the limitations of existing services like Firebase, we knew we had to change the dynamics of backend services. Most importantly, both Parse and Firebase were/are based on proprietary technology, which introduces a massive vendor-lockin into the stack of a developer. With GraphQL the community finally seems to agree on ONE WAY how APIs should work. Based on GraphQL, SDKs etc are no longer needed and since you can easily export your schema & data, it's entirely possible to build your own equivalent GraphQL API in case you're deciding to migrate off Graphcool (you don't even need to change the frontend). So instead of creating vendor-lockin we're rather trying to maximize the developer experience to keep developers using Graphcool.

Fundamentally, we no longer think of Graphcool as a BaaS but rather as a developer platform/framework to build serverless GraphQL backends. [You can read more about this](https://www.graph.cool/docs/blog/introducing-the-serverless-graphql-backend-architecture-ahde7paig2/) - Johannes

---

<a name="3-short-qs-1-database" href="#3-short-qs-1-database">#</a> **Q:** 3 short q's: 1) What database are you guys using? 2) How do you do caching of responses with a serverless GraphQL API? 3) Do you think GraphQL makes sense if your usage is all aggregation and filtering (I'm thinking data dashboard)? – MarkW

**A:**

1. We are using AWS Aurora which has excellent operational properties.

2. Graphcool handles performance tuning of your API. Currently that is handled primarily by scaling Aurora read replicas, but we are working on a sophisticated change detection system that will allow us to do automatic caching of queries without serving stale data. In addition to this, frontend clients provide a level of caching. There was a super interesting talk at the recent GraphQL Europe conference about CDNs and GraphQL.

3. this depends entirely on your data model. It's important to realise that GraphQL is not and does not aim to become a replacement for SQL. As such, you shouldn't expect to be able to design a GraphQL API with that level of flexibility. That being said, we do use GraphQL internally at Graphcool to power our metrics dashboards, so it is certainly possible if your data model fits. – Soren

---

<a name="whats-next-biggest-thing-expect" href="#whats-next-biggest-thing-expect">#</a> **Q:** What's the next biggest thing to expect from Graphcool? – Kim

**A:** The next big (sorry, biggest) thing we're working on is one of the most requested features for us so far: Better support for authentication. We've received requests for dozens of different authentication methods (Facebook, Github, Twitter, Firebase Auth...). We'll soon release a completely new way to integrate with all of these authentication provides and implement your own ones! Stay tuned [on our Twitter](https://twitter.com/graphcool) - Johannes

---

<a name="company-selection-process-graphql-based" href="#company-selection-process-graphql-based">#</a> **Q:** For any company in a selection process for a GraphQL based BaaS, what would be your single greatest USP as opposed to your (only?) competitor in the market ATM? – Kim

**A:** Compared to other GraphQL based backend services, we're providing a development platform that allows you to build a production-ready backend for real applications (beyond prototypes and MVPs). Based on the feedback we've got from thousands of developers, we're aiming for providing the best possible developer experience while keeping the APIs flexible enough to cover every possible use case and scenario. I think our declarative permission system and functions are a good example for this. - Johannes
