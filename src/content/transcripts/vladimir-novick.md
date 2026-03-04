---
title: Vladimir Novick
date: 2019-06-27
time: 1-2pm PT / 8-9PM GMT
location: Q&A Channel Reactiflux
description: "Developer Relations @ [Hasura.io](http://hasura.io)"
people: "[@VladimirNovick](https://twitter.com/VladimirNovick)"
---

## [Vladimir Novick](https://twitter.com/vladimirnovick), Developer Relations @ [Hasura.io][hasura]

<a name="where-do-you-see-hasura" href="#where-do-you-see-hasura">#</a> **Q:** Where do you see [Hasura][hasura] in five years time? – anotherdeadhero

**A:** In 5 years time there are so many features planned to be added to [Hasura][hasura]. Have you seen our new [Remote Joins](https://hasura.io/remote-joins) feature? It already gives you an ability to basically connect your GraphQL API to anything you want - third party microservices, other dbs, your custom servers etc.

---

<a name="is-there-any-timeline-for" href="#is-there-any-timeline-for">#</a> **Q:** Is there any timeline for [Hasura][hasura] potentially supporting other major DBMS besides [PostgreSQL][postgresql]? Many huge enterprises still seem to use things like MS SQL Server. – Shaikat
<a name="any-plans-to-support" href="#any-plans-to-support">#</a> **Q:** Any plans to support MySQL? – krvajal

**A:** There is a plan to support MySQL, but I don't know about the exact timeline. Right now we are focused more on [Remote Joins](https://hasura.io/remote-joins), so you can join your GE with literally anything. MySQL joins is also possible btw.

---

<a name="how-would-you-make" href="#how-would-you-make">#</a> **Q:** How would you make an offline first application with [Hasura GE][hasura-ge] as the backend? – thangngoc89

**A:** It can be long answer. We actually discussed exactly that at our podcast [3factorRadio](https://hasura.io/3factor-radio) with [Maxim Salnikov](https://twitter.com/webmaxru) PWA advocate. feel free to check it out here: https://hasura.io/3factor-radio.

---

<a name="do-you-imagine-the-world" href="#do-you-imagine-the-world">#</a> **Q:** Do you imagine the world without GraphQL, if not, why? Any specific example... – web2.0opensource

**A:** Well it's easy to imagine a word without this or that tech. After all we all saw how tech has evolved. But with modern application demands GraphQL and serverless is absolutely must.

---

<a name="are-there-any-eta-on" href="#are-there-any-eta-on">#</a> **Q:** Are there any ETA on an official stable version of [HGE][hasura-ge]? I've been using alpha 13 in production for a year without any bugs. Make an official release would help me selling [HGE][hasura-ge] easier to my customers. – thangngoc89

**A:** For v1 release ETA is 4-6 weeks. hopefully 😉.

---

<a name="hey-we-are-starting-to-use" href="#hey-we-are-starting-to-use">#</a> **Q:** Hey we are starting to use [prisma.io][prisma] for our company, can you explain the difference between the capabilities of [hasura.io][hasura] vs [prisma.io][prisma]? – Sylenth1

**A:** [Prisma][prisma] and [Hasura][hasura] are in the same ecosystem but way different. [Prisma][prisma] is basically an ORM when [Hasura][hasura] is an API engine that your apps can use directly and an event engine for your backend code. Also it has granular access control, authentication support and recently remote joins that will give you an ability to connect any of your microservices/third party apis or databases. We wrote a blog post a while ago about the differences: https://blog.hasura.io/hasura-vs-prisma-9ffc7271eda8/.

---

<a name="how-machine-learning" href="#how-machine-learning">#</a> **Q:** How can Machine Learning use GraphQL to assist people on daily activities... Any specific example? – web2.0opensource

**A:** Machine learning can use GraphQL for anything on data layer. So basically your Machine learning will use let's say something like [TensorFlow](https://www.tensorflow.org/), but you will still need to get and store the data, interact with your backend and so on.

---

<a name="is-there-any-recommendation-from" href="#is-there-any-recommendation-from">#</a> **Q:** Is there any recommendation from your experience to people working on the newspaper platforms? These are very dynamic and need to represent information from a wide domains. – web2.0opensource

**A:** Yeah, there is actually a blog post from David Eads from ProPublica about newspaper platform which is built in [Gatsby][gatsby], [Hasura][hasura] and [PostgreSQL][postgresql]. https://www.propublica.org/nerds/the-ticket-trap-news-app-front-to-back-david-eads-propublica-illinois

---

<a name="how-would-you-handle-files" href="#how-would-you-handle-files">#</a> **Q:** How would you handle files upload in [Hasura][hasura]? [AWS AppSync](https://aws.amazon.com/appsync/) makes it extremely easier to do so. Currently, my workflow would be hitting an endpoint to get a signed url for uploading to [AWS S3](https://aws.amazon.com/s3/). and then use a different code path to upload the file. I wish I could do everything via [Hasura][hasura] and GraphQL. – thangngoc89

**A:** Since you cannot send binary files with GraphQL, you will still need to upload them somewhere using regular REST endpoint, but what you can do is fire a [lambda](https://aws.amazon.com/lambda/) once [S3](https://aws.amazon.com/s3/) upload is done. [Lambda](https://aws.amazon.com/lambda/) will execute a mutation into [Hasura][hasura] and you will get subscription on file uploaded.

_**Follow up**_: Ah hah, that is something I don't need to do. because I upload the files directly to [S3](https://aws.amazon.com/s3/) on the client. but using [lambda](https://aws.amazon.com/lambda/) to notify the database about the uploaded file is an interesting idea. Thank you @vladnovick.

---

<a name="currently-using-prisma-for" href="#currently-using-prisma-for">#</a> **Q:** Currently using [Prisma][prisma] for a multi-tenant application. I am using the tenant_id approach. Since [Prisma][prisma] 2.0 is now using [Rust](https://www.rust-lang.org/); do you still think that [Hasura][hasura] has a competitive edge over performance? Lastly how easy is it to migrate from [Prisma][prisma] to [Hasura][hasura] (keeping in mind I have multiple [Prisma][prisma] resolvers). – kc

**A:** Well as for performance I haven't checked [Prisma][prisma] 2 performance yet, but you can check our performance benchmarks here: https://github.com/hasura/graphql-engine/blob/master/architecture/live-queries.md. As for if you can use any [Prisma][prisma] resolvers or migrate, you can basically can use any GraphQL endpoint to add remote joins to [Hasura][hasura], so you can just reuse your existing resolvers with [Hasura][hasura] adding them as remote joins and connecting them to database. Moreover if you are running on [PostgreSQL][postgresql], engine will auto generate everything for you so you will need to focus only on business logic. I don’t think the difference is the language as much as it is the approach. If you can create a single SQL query from a complex GraphQL query you will see [Hasura][hasura] like performance. [Hasura][hasura] can do this because [Hasura][hasura] can mix access control and auth rules into the single SQL query directly. If you have resolvers that call an ORM, it would be hard to construct that one query I think.

---

<a name="what-are-the-best-package" href="#what-are-the-best-package">#</a> **Q:** What are the best package choices in the React Native ecosystem? – Niz

**A:** For interaction with GraphQL you can use an [Apollo](https://www.apollographql.com/) client. Actually we created tutorial series how to do that, so you can check them out on [learn.hasura.io](https://learn.hasura.io/). And if you are asking generally about React Native packages not related to GraphQL, then I would go with [ignite cli tool](https://infinite.red/ignite) by the [infinite.red](infinite.red) team for best practices.

---

<a name="i-have-seen-many-developers" href="#i-have-seen-many-developers">#</a> **Q:** I have seen many developers start to move away from NoSQL/[MongoDB](https://www.mongodb.com/) when implementing a GraphQL backend. What are your opinions on SQL / [PostgreSQL][postgresql] taking over the GraphQL world? – Sylenth1

**A:** As we move into GraphQL ecosystem people tend to migrate to SQL/[PostgreSQL][postgresql] because it has so much to offer in various things. First of all SQL is really mature language, second Postgres and it's extensions are just amazing and really performant. You can check the following benchmarks for example: https://www.enterprisedb.com/news/new-benchmarks-show-postgres-dominating-mongodb-varied-workloads.

---

<a name="are-there-plans-to-document" href="#are-there-plans-to-document">#</a> **Q:** Are there plans to document setting up an instance without using [Docker](https://www.docker.com/)? – samsch

**A:** What would you be interested into? We have integrations with cloud vendors, but all of them use [Docker](https://www.docker.com/) under the hood so you don't use it directly. Also soon we will provide a binary version to run locally.

---

<a name="whats-your-number-one" href="#whats-your-number-one">#</a> **Q:** What’s your number one tip for GraphQL schema design? – Oli

**A:** Auto generate schema 😉. Powerful APIs are hard to build and especially manage by hand. Also make sure you solve n+1 problem. BTW we don't have this problem in [Hasura][hasura] because [Hasura][hasura] is basically a compiler and we compile to one single SQL statement and execute it using [PostgreSQL][postgresql] native features.

---

<a name="hi-do-you-think-in" href="#hi-do-you-think-in">#</a> **Q:** Hi! do you think in a world leaning towards NoSQL databases, what is in your opinion the future of Relational RDBMs? – nicandro

**A:** I would argue on the fact that a world leaning towards NoSQL databases. While they have their own use cases, recently there is a major switch towards relation RDBMS such as [PostgreSQL][postgresql] and its extensions such as [PostGis](https://postgis.net/) or [TimescaleDB](https://www.timescale.com/). MySQL is also evolving to support multiple types of workloads.

---

<a name="can-you-expand-on" href="#can-you-expand-on">#</a> **Q:** Can you expand on [Hasura][hasura]'s compilation step? – Sylenth1

**A:** I would better share a blog post about that, since it's a pretty broad topic to write about in chat. https://blog.hasura.io/architecture-of-a-high-performance-graphql-to-sql-server-58d9944b8a87/

---

<a name="it-is-known-that-browser" href="#it-is-known-that-browser">#</a> **Q:** It is known that Browser DOM is slower then Virtual DOM (IDK exactly why but I assume rendering stuff), but there is one thing I don't understand: When there is a state update React is diffing the old VDOM with the new VDOM (which is created completeley from scratch with the updated state right? (side question)). In the and React calculates a "patch" to update the browsers DOM. So in the end you still have to update the browser DOM. Why is it so much more expensive (performance wise) to update the browsers DOM directly? You wouldn't even need the diffing and so on.. – Flaneder

**A:** React has its specific mechanism called React Fiber. You can read more about it here: https://github.com/acdlite/react-fiber-architecture.

---

<a name="what-would-be-the-best" href="#what-would-be-the-best">#</a> **Q:** What would be the best way to get started with React, after learning basics of Javascript? And what is the best way to keep up with the React updates? – Brouski

**A:** I would suggest learning React on [egghead.io](https://egghead.io/). Amazing platform with amazing courses. And the best way to keep up with React updates is to follow people on twitter, go to confs / watch conf talks.

---

<a name="i-recently-saw-your-video" href="#i-recently-saw-your-video">#</a> **Q:** I recently saw your [video](https://www.youtube.com/watch?v=HTEGGndT3zY) with [Jason](https://twitter.com/jlengstorf) on [GatsbyJS][gatsby], what are your thoughts about [Hasura][hasura] with [GatsbyJS][gatsby]? – Sylenth1

**A:** [Hasura][hasura] with [Gatsby][gatsby] is amazing. [Gatsby][gatsby] gives you server rendered static site and [Hasura][hasura] gives you real time GraphQL API that connects with [Gatsby][gatsby] so smooth. Recently we also did a stream about Authentication with [Hasura][hasura] and [Gatsby][gatsby].

---

<a name="whats-the-possibility-of-hasura" href="#whats-the-possibility-of-hasura">#</a> **Q:** What's the possibility of [Hasura][hasura] as a library that could be integrated into other apps without having to be a wholly separate service? – samsch

**A:** We haven't thought about it yet actually.

---

<a name="any-suggestions-on-implementing" href="#any-suggestions-on-implementing">#</a> **Q:** Any suggestions on implementing two-factor authentication with [Hasura][hasura]? Using apps like google authenticator for example. – Sonicrida

**A:** You can implement two-factor using various services. Let's continue discussion on discord.gg/hasura about that.

[gatsby]: https://www.gatsbyjs.org
[hasura]: https://hasura.io/
[hasura-ge]: https://github.com/hasura/graphql-engine
[postgresql]: https://www.postgresql.org/
[prisma]: http://prisma.io/
