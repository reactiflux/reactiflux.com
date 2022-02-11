---
title: Hasura Team
date: 2022-02-10
time: 1-2pm PT / 8-9PM GMT
location: Q&A Channel Reactiflux
description: "Founder & Tech Lead @ [hasura.io](https://hasura.io/) - Postgres-backed GraphQL backend as a service | Topic: Building a high-performance GraphQL engine for Postgres"
people: "[@tanmaigo](https://twitter.com/tanmaigo) [@motleydev](https://twitter.com/motleydev) [@praveenweb](https://twitter.com/praveenweb)"
---

<a href="#what-are-your-thoughts" name="what-are-your-thoughts">#</a> **Q:** What are your thoughts on upcoming Haskell alternatives such as Purescript and Idris? Do you think Purescript is a viable replacement for GHCJS for web development, and Idris might be for other purposes? What other alternatives do you have your eye on? – milse113

Purescript is probably the most mature option for web dev imho, in this set of alternatives. Idris is not yet very mainstream and still a little bit of a research language. Elm is also something I keep any eye on and another really good option in this space. – tanmaig

---

<a href="#remix-or-next" name="remix-or-next">#</a> **Q:** Remix or Next? – Angelo II

It depends. 😄 But also, not joking. They optimize for different ends of the spectrum. If I was building something with lots of real-time data that needed lots of dynamic layout components (admin panels, etc) I'd have a look at remix for sure. The next ecosystem is still very robust and if it comes to delivering something I know will handle the 80% use-case, it's still my go-to. But I think Remix has a really interesting use-case for a highly opinionated stack – jmart

Adding to what Jesse mentioned, it depends on your use case. Server Side Rendering at the edge by Remix is going to be fast. But right now, Next.js with its ecosystem and the ability to do a combination of SSR, ISR, static export is easy to reason about. – praveenweb

---

<a href="#i-feel-super-low" name="i-feel-super-low">#</a> **Q:** I feel super low on mental health and my eyes hurt a lot because of screen time. Any tips on how to keep myself healthy as a programmer, especially my eyes? 🙏🏼 – alixsep

Consider maintaining your health as part of your job. It's a task like any other that can't be negotiated with.

First, minimize eye damage when you need to look at the screen. Make sure there's distance behind your monitor so your eyes can break from near to far. Make sure your resolution is high enough and consider a blue-light filter if the strain is really bad. Try to avoid working in dark environments as the contrast switching strains your eyes more. I'd highly suggest adopting pomodoro technique to force a screen break. There's some cool apps that will lock your screen up for you. – jmart

---

<a href="#how-can-i-build" name="how-can-i-build">#</a> **Q:** How can I build a custom GraphQL query using raw SQL in hasura? – Aki

By custom GraphQL query, if you meant hooking into what Hasura generates, you have a couple of options. Writing your own GraphQL resolver and adding them via Remote Schemas. If you prefer to write REST APIs and add them to the GraphQL schema, you can write a REST API handler and map them to GraphQL types to perform custom business logic.

Sorry, I just now saw the edited version. If you have a raw SQL query and want that to be exposed as a GraphQL query, you can either create a Postgres View or create a Postgres Function and expose it as a GraphQL API to the client. – praveenweb

---

<a href="#socket-io-or-ws" name="socket-io-or-ws">#</a> **Q:** socket io or ws for react websockets? – Angelo II

It depends on if you want to run the server yourself or not. If you are consuming, ws or graphql-ws if you are working with GraphQL subscriptions would be my suggestion – jmart

If you are using GraphQL, ws is a standard protocol to interact with APIs for realtime use cases. graphql-ws is the latest – praveenweb

---

<a href="#if-you-dont" name="if-you-dont">#</a> **Q:** if you don't mind me asking. what was your main motivation behind building something like hasura? – Mawlicious

Great question. It was a massive amount of frustration with how long it takes to build backends and this feeling that we're working at the wrong level of abstraction. 🙂

Tried lots of different kinds of approaches before we settled on the way Hasura works today.

This might be an interesting read: https://hasura.io/blog/how-hasura-works/ – tanmaig

---

<a href="#why-did-you-start" name="why-did-you-start">#</a> **Q:** why did you start coding? what is your motivation? – Angelo II

I'll let the others add their two-cents, but I grew up in a house with other programmers, and it seemed like a "good idea at the time" - wish it was more fancy. At some point, I realized I should go "all in" – jmart

---

<a href="#what-do-you-see" name="what-do-you-see">#</a> **Q:** What do you see as the perfect positioning of Hasura in the overall infrastructure? e.g. use it directly as backend, or place a backend between it for handling logic, authentication, etc. In the same manner, what would you consider the perfect "Hasura-stack"? – mees

Good question! I'd say it's really up to you. 🙂 We're building Hasura so that it can be the frontend / recipient to API consumers directly. However if you prefer having something in the middle, that's totally fair as well 🙂

Choosing a good Hasura stack depends on one of 2 use-cases:

1. Is your end deliverable an API?
2. Is your end deliverable an app?

I like a serverless stack for the logic/authz backend piece.

So something like AWS Lambda (or choose your fave serverless function vendor) + Hasura + Postgres DBaaS + (choose your fave authn SaaS vendor) would be my recommended Hasura stack! – tanmaig

---

<a href="#why-did-you-choose" name="why-did-you-choose">#</a> **Q:** Why did you choose Postgres instead of another “flavor” of othe DB choices? – Elsewhere

Postgres fit the majority of use-cases and was a very widely adopted tool that fit with the OSS ethos. But we support more than just Postgres today! – jmart

---

<a href="#which-database-do-you" name="which-database-do-you">#</a> **Q:** which database do you recommend? – Angelo II

Personally I'd go with Postgres for the 90% because it's a very good general tool. But there are some edge cases where you'll want something very specific for the job you are solving. That's partly why we are opening to having more than just postgres! You can bring in BigQuery or MSSQL, for example. – jmart

---

<a href="#what-language-did-you" name="what-language-did-you">#</a> **Q:** What language did you first learn? Do you still use it today? – Pod

I started with PHP / JavaScript (jQuery). I still use JavaScript both on the server and client. – praveenweb

---

<a href="#did-you-use-apollo" name="did-you-use-apollo">#</a> **Q:** Did you use apollo client or relay? if so, what was the reason you used that over the other? – BlueForced

I've switched away from apollo for my personal projects because it tries to own too much of the stack, I needed a more lightweight utility since Hasura does the heavy lifting. That said, I'm 100 having another look at Relay especially after their recent docs update. It's a great tool. – jmart

If you are starting today, I would use something like URQL for the GraphQL Client since its lightweight, easy to reason about client side caching and realtime subscriptions are nice to setup. Relay is opinionated about data fetching but is super powerful. It also depends on the underlying GraphQL server to have support for Relay spec and hence you may or may not have the choice. – praveenweb

---

<a href="#whats-for-you" name="whats-for-you">#</a> **Q:** What's for you the most important skill a programmer should have nowadays to be successfull ? – dzetah

Thinking. If you can think like a programmer (analytical, algorithmic) the rest is just about tooling. No amount of craft or language expertise can replace that. I know my languages pretty well but I'm surrounded by amazing developers who just "out think" me on a daily basis and it's awesome to see. – jmart

---

<a href="#why-would-i-pick" name="why-would-i-pick">#</a> **Q:** why would i pick GraphQL over REST and is it worth the transition? – Mawlicious

GraphQL is excellent when you have lots of different data types and origins and want to combine them in a single endpoint that you can distribute to lots of different teams. GraphQL allows a "self-serve" approach to data consumption that enables product teams to simply move FAST. If you have a legacy infrastructure that will only ever consume REST, then you might want to stick with that, but Hasura, for example, lets' you provide both! – jmart

---

<a href="#what-is-hasura" name="what-is-hasura">#</a> **Q:** What is Hasura? – 🥔🥔🥔🥔

Here's a slightly detailed breakdown of what Hasura is and aims to do: https://hasura.io/blog/how-hasura-works/

Easiest thing to do is to take Hasura for a quick spin - esp if you like playing around with GraphQL 🙂
(https://hasura.io/ and https://cloud.hasura.io/) – tanmaig

---

<a href="#do-you-find-relay" name="do-you-find-relay">#</a> **Q:** do you find Relay more data-efficient (makes less requests and uses less data bandwidth) than Apollo client or URQL? – BlueForced

I would say so since that's part of what the tooling is for. It looks at what you are using and attempts to combine it into the most resource friendly query and cache strategy. That said, you can certainly replicate that efficiency and perhaps surpass it with Apollo, URQL, et al, but Relay just does that almost perfectly out of the box. – jmart

---

<a href="#what-other-services-are" name="what-other-services-are">#</a> **Q:** what other services are competition to Hasura? And how do you differ with them? – f8_overcomer

While there's no direct equivalent to Hasura, there are perhaps 3 main types of services/technologies that Hasura overlaps with:

1. BaaS type products: Here Hasura's edge (and also downside in a way depending on what you want!) is that it doesn't take opinions on other things like storage, authn and is designed to provide the data API on new or existing databases. Today with Postgres-family / SQL Server / BigQuery and gradually with other popular databases as well. This is very impactful esp for teams that already have databases

2. GraphQL databases: We're gradually seeing databases that natively speak GraphQL becoming popular! This is awesome. Here Hasura's edge over them, is that a) Postgres is often a better option that betting on a new database entirely b) You can always use a GraphQL database along with Hasura + Postgres by bringing that in as a remote schema to Hasura! So you can use 2 databases simultaneously depending on your use-case.

3. DIY API: Here you're thinking about the choice of building your own API vs using Hasura. Hasura aims to give you an experience where you only think about your domain's data models and your domain's business logic (that could be deployed with, say, a serverless vendor) and not really the build/setup/deploy/operate/optimize lifecycle of an API server. I linked to this post above, but this blogpost might help in understanding how Hasura works: https://hasura.io/blog/how-hasura-works/ – tanmaig

---

<a href="#hasura-has-come-a" name="hasura-has-come-a">#</a> **Q:** Hasura has come a long way and I love using it, so thanks for that. What do you see as the areas in which you are still lacking, feature-wise, and what do you intend to work on in the near and far future? – mees

This is speaking from a personal perspective here. The biggest feature lack area for me and one where the company is focusing on is more databases. There's lots of different work loads you store in different data stores and getting them into Hasura and meshed with the API is a big focus. – jmart

---

<a href="#do-you-have-any" name="do-you-have-any">#</a> **Q:** Do you have any tips on handling authorization in a mid to large app in hasura? I have found that it can get quite confusing setting individual permisions for every field and worry about the security implication of "missing something" – roboticsound

This has indeed been raised in the past when the app gets complex with lots of permissions. The Hasura Console currently has a Permissions Summary view to give an overall picture of what permissions have been configured. Another way to think about security is to use the Allow Lists feature to specifically allow only a list of GraphQL operations to avoid exposing everything on the schema. But we are working on improving the UX around managing permissions in bulk so that you can apply them in bulk. – praveenweb

---

<a href="#im-a-noob" name="im-a-noob">#</a> **Q:** I'm a noob when it comes to scaling/provisioning, especially when I need to interpret "20 GB data pass-through". Could you tell me what kind of project are supported by the standard cloud offering of Hasura? By kind, I mean the size of the project, the number of users using it, etc. Thank you for your input 🙏 – binajmen

The standard cloud plan is a pay as you go plan that auto-scales as your app scales. This means apps of any size are good to be hosted with High availability and auto-scaling. The data pass through is dependent on your API usage and response sizes. If you are caching your queries, then that would help in reducing the data pass through usage. – praveenweb

---

<a href="#what-are-your-thoughts" name="what-are-your-thoughts">#</a> **Q:** what are your thoughts on postgraphile, and do you have any plans to allow [self-hosted] extensibility ala postgraphile's makeExtendSchemaPlugin to allow foreign data sources? – (d,f,g)=> {}

This might not be a direct answer to your question since I'm not very familiar with makeExtendSchemaPlugin, but on the theme of allowing foreign data sources and making that easy: We're working on something very interesting (currently named GDWs - GraphQL Data Wrappers, inspired by Postgres's FDW Foreign Data Wrappers ofcourse) that will allow people at Hasura, data-source vendors, and the broader OSS community to build Postgres FDW like extensions to Hasura in their favourite programming language and get the power of the Hasura GraphQL API!

We haven't talked about this anywhere yet 🤐, so you heard it here first and more news coming soon! 🙂 – tanmaig

---

<a href="#are-nested-mutations-in" name="are-nested-mutations-in">#</a> **Q:** are nested mutations in the roadmap? – roboticsound

Similar to this or something different? https://hasura.io/docs/1.0/graphql/core/mutations/multiple-mutations.html#insert-an-object-and-a-nested-object-in-the-same-mutation – jmart

---

<a href="#are-there-tools-like" name="are-there-tools-like">#</a> **Q:** Are there tools like Postman for GRPC? – Mehrdad

I'd have a look at https://stoplight.io/ – jmart

---

<a href="#what-led-you-to" name="what-led-you-to">#</a> **Q:** what led you to the decision to not use postgres RLS and policies to enforce authorization and instead create your own authz mechanisms? – (d,f,g)=> {}

Tanmai can add to this, but he wrote up about it here, too. https://news.ycombinator.com/item?id=20065529 – jmart

---

<a href="#what-was-the-reasoning" name="what-was-the-reasoning">#</a> **Q:** What was the reasoning behind naming it "Hasura", sorry for the weird question i typically have a hard time in naming – Mawlicious

The name Hasura comes from a portmanteau of Asura, the Sanskrit word for demon, and Haskell. Asura refers to daemons, or computer programs that run as background processes. Haskell is the functional programming language we used to build Hasura in. – praveenweb

---

<a href="#as-a-founder-tanmaig" name="as-a-founder-tanmaig">#</a> **Q:** As a founder @tanmaig whats "keeps you up the most at night"? and what are you most excited about? – Gabe

😄 Hah! Great question sir 🙂

> What's keeping me up at night?

Oof, so many things! But broadly, I'll characterize them as the work that goes into "company building". As Hasura usage is growing in companies big and small, and as our team is growing, I'm working alongside everyone at Hasura to help them own different bits of Hasura (the product, the community) and keep building things that will push the needle for our users and keep adding value to them.

> What are you most excited about?

In the short term: Streaming Subscriptions! This is some incredibly exciting work we've been doing to allow Hasura to stream massive amounts of data, or realtime events as they're being ingested over GraphQL subscriptions. The performance is :chefkiss: and the experience is incredibly exciting 🙂

In the longer term: GraphQL Data Wrappers - per my comment earlier! But more on that soon, and I'm trying not to let too much of the cat out of the bag before we make an announcement 🙂 – tanmaig

---

<a href="#are-there-any-good" name="are-there-any-good">#</a> **Q:** Are there any good (and modern) resources to learn relay you'd recommend? – BlueForced

We wrote this a while ago and can be a good resource - https://hasura.io/blog/deep-dive-into-relay-graphql-client/ and of course Relay's official docs have a simple getting started guide too. – praveenweb

---

<a href="#what-were-the-primary" name="what-were-the-primary">#</a> **Q:** What were the primary motivators for moving away from haskell? Did it come with all the expected benefits or were there unforeseen setbacks? – rabbit

The core graphql-engine is still written in Haskell. Or do you mean something like how GraphQL Data Wrappers could be built? – praveenweb

---

<a href="#if-a-friend-would" name="if-a-friend-would">#</a> **Q:** If a friend would ask you about which Postgres DBaaS to choose, what would be your answer? 😇 – binajmen

If they are testing it out and hacking around, I'd say go with the built in Heroku integration. If they are wanting to kick off a serious project, I'd suggest Aiven or Fly.io - if they have investors who might get mad, I'd suggest having a look at an AWS solution. 😄 But Aiven and fly.io are my hipster picks for the moment. I've also been happy with raleway. – jmart

---

<a href="#do-you-usually-suffer" name="do-you-usually-suffer">#</a> **Q:** Do you usually suffer from over-dedication, and if so how do you deal with it – Mawlicious

It's hard to answer that as folks working in a startup! We're so aligned to our mission and there's a tremendous amount of blood and sweat put in 🙂

I think about it as productivity and sustainable productivity. That's what we've got to be able to do to both be happy and do the best for our users!

Not a direct answer, but hopefully helps! – tanmaig

---

<a href="#ive-been-studying" name="ive-been-studying">#</a> **Q:** I've been studying the 4 day (32 hour work week a lot lately --> https://4dayweek.io/benefits) and I've seen it work at quite a few startups including my own (increase in productivity and happiness). Have you every considered it for Hasura @tanmaig? Would love to know why you think it would work or it wouldn't in your org. – Gabe

We do atleast one 4-day week a month - and we've been doing that for over the last 2 years now I think. So that's been our baby step so far. 🙂 – tanmaig
