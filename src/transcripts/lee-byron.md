---
title: Lee Byron
date: 2016-07-28
location: Q&A Channel Reactiflux
description: "Facebook Engineer - GraphQL Co-Creator"
people: "[@leeb](https://twitter.com/leeb) | Codementor AMA"
---

## Facebook Engineer - GraphQL Co-Creator

<a name="whats-status-adding-field-like" href="#whats-status-adding-field-like">#</a> **Q:** What’s the status on adding a field like \_\_id to the GraphQL specification?

**A:** That idea has been tossed around a few times, so I think it's worth writing up as an RFC, that's something I'm actively working on. All changes to GraphQL go through a formal process of Idea -> Strawman -> RFC -> Spec change with review along the way. Right now \_\_id is around the idea phase, but it sounds like it's a good one, so I'm excited to see it move forward and help answer more questions

---

<a name="whats-like-working-three-facebooks" href="#whats-like-working-three-facebooks">#</a> **Q:** Whats it like working on three of Facebook's biggest externally used software developer projects?

**A:** Busy! But a lot of fun

---

<a name="interesting-insights-differences-falcor-graphql" href="#interesting-insights-differences-falcor-graphql">#</a> **Q:** Do you have any interesting insights on the differences between Falcor and GraphQL?

**A:** I'm a big fan of Falcor. They're solving very related problems as well. Falcor's simplicity is really elegant and leads to some super clever caching strategies. GraphQL's strong types leads to great tools.

---

<a name="think-immutable-docs-ever-add" href="#think-immutable-docs-ever-add">#</a> **Q:** Do you think the immutable docs will ever add regular javascript examples for methods on immutable data-structures? Currently lots of the methods just have typescript notation signatures on each method. For people who aren't using typescript you alienate them. I've myself had to go through SoF many times trying to see examples of some of the methods in action because I couldn't/not familiar with the typescript notations.

**A:** I certainly hope so but that's not at the top of my personal priorities. If someone wanted to submit PRs to add that kind of thing to the documentation I'd be really excited

---

<a name="know-resources-available-hooking-graphql" href="#know-resources-available-hooking-graphql">#</a> **Q:** Do you know of any resources available for hooking graphql up with websockets?

**A:** I haven't seen anything like that yet, but that doesn't mean someone hasn't written something up that I haven't seen. I personally haven't been experimenting with that

---

<a name="data-normalization-something-thinking-graphql" href="#data-normalization-something-thinking-graphql">#</a> **Q:** Is data normalization something you are thinking about for GraphQL considering clients are manually normalizing data (e.g. Relay and Apollo)?

**A:** Yeah - there are some difficult issues normalization brings up that different clients have been solving in different ways (to achieve different things; tradeoffs) so it's seemed like the right decision to allow clients to specify their own normalization strategy - but normalization has been a frequent topic of discussion through the years

---

<a name="happened-ecmascript-proposals-immutable-datastructures" href="#happened-ecmascript-proposals-immutable-datastructures">#</a> **Q:** What happened to your ecmascript proposals for immutable data-structures? Any chance you'll champion them again?

**A:** Sebastian Markbage has been the champion of those proposals - I support him when I can, but he's still working on them! https://github.com/sebmarkbage/ecmascript-immutable-data-structures

---

<a name="reactrelayflow-project-ends-using-3" href="#reactrelayflow-project-ends-using-3">#</a> **Q:** A react+relay+flow project ends up using 3 incompatible type systems – flow, graphql types, and react proptypes; do you have any advice on how to optimally deal with this?

**A:** I prefer flow over proptypes. So I don't use proptypes in my react projects, I use flow instead. GraphQL types describe a different domain, so they're not as easily unified - but our intern on the Relay team has been looking into generating flow types based on the queries you write which is super cool and really similar to what we do in our native apps that use GraphQL at Facebook, hopefully that works out and can be shared in the near future

---

<a name="application-production-facebook-whose-architecture" href="#application-production-facebook-whose-architecture">#</a> **Q:** Is there any application in production (Facebook or not) whose architecture you may describe as an Immutable app architecture?

**A:** My talk on immutable architecture is based in many ways on our primary iOS app, the News Feed portion of it in particular. It uses ComponentKit (which I like to refer to as "React ObjC")

---

<a name="new-personalprojects-facebookprojects-working-excited" href="#new-personalprojects-facebookprojects-working-excited">#</a> **Q:** Are there any new personal-projects or facebook-projects you are working on that you are excited about?

**A:** yes! I can't help myself. You can stalk my github page for stuff I'm kicking around on the weekends. iterall and flow-remove-types are two recent ones, testcheck-js is an oldie but a goodie that I hope to find time to revive soon

---

<a name="see-react-react-native-going" href="#see-react-react-native-going">#</a> **Q:** Where do you see React and React Native going?

**A:** The React team's goal is simplifications and optimizations - so simpler React with fewer concepts and faster performance. React Native is focused on performance across all platforms

---

<a name="far-would-go-building-mobile" href="#far-would-go-building-mobile">#</a> **Q:** How far would you go building mobile app using react-native?

**A:** I'm not sure I understand the question but I would go as far as to build mobile apps in react-native 😃

---

<a name="relay-transpiles-queries-add-id" href="#relay-transpiles-queries-add-id">#</a> **Q:** Relay transpiles queries to add an id field, as this is a feature that could be useful to many GraphQL clients, may GraphQL ever auto-inject an id field on supporting composite types?

**A:** No, GraphQL will never auto-inject fields as that would break some of its core guarantees, but I strongly support the query compilation and optimization phases that Relay and Apollo help you perfom

---

<a name="camera-gallery-voice-apis-reactnative" href="#camera-gallery-voice-apis-reactnative">#</a> **Q:** Is camera, gallery, and voice API's for react-native ever going to come? They seem like some of the things that most apps use in some way but react-native doesn't have those features in the API without using 3rd party.

**A:** I have no idea! I'd suggest asking in the react-native github. I believe their plan is to avoid attempting to cover the entirety of native APIs and instead embrace third-party extensions

---

<a name="explicit-null-still-horizon-graphql" href="#explicit-null-still-horizon-graphql">#</a> **Q:** Is explicit null still on the horizon for graphql? what about map types?

**A:** The null literal is still an open RFC and there are some sticking questions, it hasn't been the highest priority RFC so it's been languishing a bit, but its still in consideration. Map type has come up a few times in RFC and failed each time. Each time seems to be more convinced that it adds more complexity and cost than value

---

<a name="vagely-remember-stumbled-upon-github" href="#vagely-remember-stumbled-upon-github">#</a> **Q:** I vagely remember having stumbled upon some github comment that stated you are working on an open source Hack implementation of the GraphQL engine. Is this something you know anything about?

**A:** No explicit plans for open source yet, although that's in our team's aspirations! Jan Jergus on our team has been building a brand new Hack impl of GraphQL that will power all of Facebook's production traffic. Once he's accomplished that goal, he plans to open source it

---

<a name="speaking-ios-development-recommend-open" href="#speaking-ios-development-recommend-open">#</a> **Q:** Speaking to iOS development, can you recommend open source libraries that can be used to apply the same principles used in react, redux to native (swift or ObjC)?

**A:** I don't spend a lot of my time in ObjC lately so I may not have the best answers and not sure about a corollary to redux, but ComponentKit is what you're looking for if you want a corollary to React - http://componentkit.org/

---

<a name="good-compsci-books-recommend-reading" href="#good-compsci-books-recommend-reading">#</a> **Q:** Any good compsci books you recommend reading?

**A:** I don't read a lot of compsci books, but found The Little Prover a lot of fun and enlightening recently - https://mitpress.mit.edu/books/little-prover

---

<a name="advanced-graphql-features-like-batch" href="#advanced-graphql-features-like-batch">#</a> **Q:** For advanced graphql features like \@batch and \@defer, is the path to get them in open-source graphql for the community to contribute PRs? if so, are there more detailed resources for how they should work, beyond your react europe talk?

**A:** The path is experimentation first (via forks is fine) and then to start an RFC process. I personally find it easier to write code to explore an idea and work out problems and then work backwards to strawman and RFC. My react europe talk was about the beginning of some of that experimentation process - still very early! One of the things I hope to do, but haven't succeed at yet is try some of those experiments in production with Facebook products first to see what real problems fall out

---

<a name="seems-like-facebook-projects-influence" href="#seems-like-facebook-projects-influence">#</a> **Q:** It seems like the Facebook projects you have the most influence on (GraphQL, ImmutableJS) have a very different coding style than codebases like React, React Native, and Relay which are all have similar styles. How does your coding style differ from that of Facebook’s?

**A:** I've been writing code at FB for many years now so I think my style and its style have become one in the same. Immutable was a bit of an experimentation with writing ES6 code before the spec, and GraphQL was the first open source lib to be fully based on babel, so that may have something to do with it

---

<a name="hack-graphql-know-completely-new" href="#hack-graphql-know-completely-new">#</a> **Q:** Hack graphql again | Do you know if it will be a completely new kind of API or resemble the graphql-js quite nicely?

**A:** The Hack GraphQL server is based on the graphql-js codebase, but has hack-specific differences. I think it will feel familiar but have some difference

---

<a name="test-case-set-used-validatecertify" href="#test-case-set-used-validatecertify">#</a> **Q:** Is there any test case set can be used for validate/certify a graphql implementation?

**A:** There isn't one yet, but that would be an awesome thing to contribute for an emboldened community member!!

---

<a name="find-documentation-somone-getting-speed" href="#find-documentation-somone-getting-speed">#</a> **Q:** I find the documentation for somone getting up to speed with GraphQL and Relay to be some what confusing at times because it doesn't provide the steps. Then I tend to hop from one blog post to the next looking for focused example. However, Steven Luscher presentation, 'Zero to GraphQL in 30 minutes' knocked it out of the park by explaining the steps involved with why he was performing a particular action. Thus, are there any plans on the roadmap for making the onboarding experience for GraphQL and Relay better?

**A:** Totally agree with you. I'd love to see major improvements to the learning experience for graphql/relay. That's something I hope to spend my time on over the coming months

---

<a name="go-blogs-videos-etc-learn" href="#go-blogs-videos-etc-learn">#</a> **Q:** Where do you go (blogs, videos, etc.) to learn new things and get new ideas about programming?

**A:** I stumble upon them like the rest of us, usually via twitter links. I often stalk the talks of some of my fav speakers or conferences as well

---

<a name="im-curious-topic-caching-graphql" href="#im-curious-topic-caching-graphql">#</a> **Q:** I'm curious on the topic of caching GraphQL results, specifically on the server-side or in-between as a proxy. Any thoughts/projects that come to mind, or best practices from FB?

**A:** We don't cache GraphQL results in a proxy at Facebook since each user gets a different result and data is volatile and changes all the time - though we do cache heavily the backing data itself, so often GraphQL is working on data it gets from a very fast cache layer

---

<a name="guys-planning-completely-rewrite-facebook" href="#guys-planning-completely-rewrite-facebook">#</a> **Q:** Are you guys planning to completely rewrite the Facebook mobile app with React Native?

**A:** No we're not planning to do that, but we are looking at targeted areas of the app where a rebuild is already necessary or a new product area is being introduced where RN might be a good fit

---

<a name="chance-add-simple-examples-graphql" href="#chance-add-simple-examples-graphql">#</a> **Q:** Any chance you can add a few simple examples to GraphQL + Data loader? Its kind of hard to follow the SWAPI data-loader usage.

**A:** The Swapi was supposed to be a clear example of using them together, but if there are confusion points please open issues on those GH projects!

---

<a name="data-loader-applicable-relay-used" href="#data-loader-applicable-relay-used">#</a> **Q:** So, is data loader more applicable to Relay being that it's used for fetching the data from the server and GraphQL is simply the mechanism for query the data from the GraphQL server?

**A:** DataLoader is a server-side concept for reducing over-fetching and adding per-request caching. Relay is a client-side concept. Each is fully independent of one another

---

<a name="scale-graphql-api-facebook" href="#scale-graphql-api-facebook">#</a> **Q:** How do you scale the GraphQL API at Facebook?\*

**A:** One important aspect is that GraphQL is a "stateless" API. That is handing a second GraphQL request knows nothing about the first. That allows us to swiftly scale up machines (as long as our load balancers can keep up). Also GraphQL is a really thin piece of software that sits atop our existing "monolith" web and data service (aka facebook.com) which already has tons of people and smarts being scaling it effectively

---

<a name="extent-graphql-used-main-facebook" href="#extent-graphql-used-main-facebook">#</a> **Q:** To what extent is GraphQL used on the "main" Facebook app (facebook.com)?

**A:** GraphQL is used in bits and pieces of facebook.com, but most of facebook.com is still server rendered for performance and practical reasons and thus doesnt require a client-to-server data request language

---

<a name="kind-insights-provide-developers-facebook" href="#kind-insights-provide-developers-facebook">#</a> **Q:** What kind of insights do you provide developers at Facebook when developing GraphQL related code? (e.g. performance of certain types of queries, fields that are never queried, etc.)

**A:** That depends - for those working on building GraphQL types and adding to the API, we have a lot of best practice docs that are the result of an older habit of meeting with every team and reviewing their API and learning from mistakes. On the client the best insight is to keep GraphQL fragments as single-purpose as possible and as close to the code that uses it as possible - we sometimes refer to this as "colocated fragments"

---

<a name="often-graphql-api-performance-bottleneck" href="#often-graphql-api-performance-bottleneck">#</a> **Q:** How often is the GraphQL API the performance bottleneck at Facebook?

**A:** The GraphQL API is a small part of the whole end to end performance experience, and I don't think it's ever been the bottleneck - though many aspects around it are constantly and continuously tuned for performance - such as the database access patterns the GraphQL executor makes (thus inspiration for DataLoader) and just trying to use the network as efficiently as possible when we're talking about mobile devices. One cool thing that we do - and this is a little nuts - Mobile devices send a UDP packet to our GraphQL API at the very beginning of a query, and that starts queuing up a request, and by the time SSH handshake and a full TCP connection has completed, it's already almost done. We had to configure our load balances to pin incoming IPs to the same machine for a short window of time to make that possibl, but that was a pretty cool network layer optimization

---

<a name="dangerous-though-say-handshake-failed" href="#dangerous-though-say-handshake-failed">#</a> **Q:** Is that dangerous though, say if the handshake failed?

**A:** It's not dangerous since UDP is one way. If the handshake fails or the query never arrives, then the result of running the query is just lost. UDP packet sets enough info to know which query needs to run (assuming persisted earlier, stored procedures style) and the variables in use

---

<a name="ddos-perspective" href="#ddos-perspective">#</a> **Q:** What about from a DDOS perspective?

**A:** FB is pretty resilient to DDOS. You can also DDOS via plain ol TCP 😃. We have many protections in place for DDOS. At this point we're less worried about DDOS and more worried about data scraping hackers, we have protections for that as well - they are overlapping problems

---

<a name="recently-gave-talk-possible-solutions" href="#recently-gave-talk-possible-solutions">#</a> **Q:** You recently gave a talk about possible solutions for subscriptions or 'live queries' in GraphQL. Could you roughly estimate when one of those possible approaches will be implemented in graphql-js and Relay ?

**A:** Sometime between 6 months from now and never. Honestly it's impossible to know - a lot of those are crazy ideas that might flop

---

<a name="chance-dataloader-functionality-embedded-graphql" href="#chance-dataloader-functionality-embedded-graphql">#</a> **Q:** Any chance the data-loader functionality will be embedded into graphql so that we don't have to wire it up manually?

**A:** No, data-loader won't be embedded into graphql directly. GraphQL doesn't have enough information to know how to most efficiently set up your loaders, and I think composing two technologies that work well together is a better long term strategy than making one monolithic technology that makes choices for you

---

<a name="important-graphql-parsing-speed-query" href="#important-graphql-parsing-speed-query">#</a> **Q:** How important is GraphQL parsing speed, or are query documents at Facebook cached?

**A:** Parsing speed is important! query docs at Facebook are cached, but they're cached in the form of query strings, so they're parsed before running

---

<a name="seen-implementations-graphql-servers-getting" href="#seen-implementations-graphql-servers-getting">#</a> **Q:** Have you seen implementations of GraphQL servers getting downstream data from another GraphQL-based service? Any concerns you can see with that type of approach? Maybe a lack of transparency of what's happening behind the scenes.

**A:** I haven't actually seen that first hand though I've heard of people talking about doing that. I can see why it would be interesting or valuable, but it also makes me nervous. I don't think GraphQL is likely to be the best choice for service to service communication - in those scenarios the network is cheap/fast and cpu & memory is the bottleneck. GraphQL is a trade in the opposite direction - it optimizes for the network - which is exactly what you want if you have to communicate over the internet, but maybe not if you're communicating over a 50' fiber line. Though - that said, GraphQL gives you some benefits beyond just network optimizations and so I still see the appeal

---

<a name="handle-graphql-querytorequest-batching-internally" href="#handle-graphql-querytorequest-batching-internally">#</a> **Q:** How do you handle graphql query-to-request batching internally?

**A:** We have a batch API. Actually we have 2. Both have serious flaws. There's a (lower pri) conversation internally about improving those or replacing them with something that solves the issues we're seeing internally - and that conversation should guide a specced batch API as well. In the meantime, I think it's probably cool to roll your own ideas - GraphQL is agnostic to the network protocol on purpose to enable exactly this kind of experimentation. There's no need to wait for express-graphql to add the feature to start making good things, but I do want to make sure whatever we add to express-graphql we're incentivized to maintain by aligning with how things work internally.

I know it can be frustrating that our team at FB is a bottleneck to ideas entering upstream, but I hope that it's the right tradeoff in the long term

---

<a name="know-anything-new-mutations-api" href="#know-anything-new-mutations-api">#</a> **Q:** Do you know anything about the new mutations API the seems to be in the works for Relay? I can find lots of references to it in the meta docs, but not many links to stuff that can tell me in which direction it is heading.

**A:** I know that's something the team is working on right now, Joe Savona in particular (\@en_js on most things) so you might ask him

---

<a name="upcoming-indevelopment-graphql-change-excited" href="#upcoming-indevelopment-graphql-change-excited">#</a> **Q:** What upcoming or in-development GraphQL change are you most excited about?

**A:** I'm personally most excited about \@defer in terms of truly enabling new things in GraphQL - there's still a ton of open questions and uphill implementation challenges ahead, but providing client-defined streaming semantics to data I think will be big value. Though outside the GraphQL spec itself, I'm really excited about the work happening on GraphQL clients. I'm really interested to see how the native app variants of Apollo turn out

---

<a name="think-theres-room-graphql-client" href="#think-theres-room-graphql-client">#</a> **Q:** Do you think theres room for GraphQL Client with small API surface?

**A:** As opposed to Relay and Apollo? Absolutely! That's a common question I get. I always tell people that if you can send a network request, you should be able to use GraphQL. Consider how much client API you typically use when using a standard REST api. If you've built something that uses a REST API and just uses XMLHTTPRequest() as the whole API, then there's no reason you can't do that with GraphQL as well. https://github.com/kadirahq/lokka is another less cited GraphQL client that's smaller in surface area (and does less things) than Relay/Apollo

---

<a name="im-building-graphql-api-subscription" href="#im-building-graphql-api-subscription">#</a> **Q:** I'm building a graphql api with subscription support that uses websocket or equivalent. would you recommend sending normal queries and mutations via normal http, or should those go over the websocket as well?

**A:** I'm not sure! I've never tried that before, so I'm interested to see what works best for you. At Facebook we send subscriptions over a live connection, but we use standard http for queries and mutations, but that's mostly out of network topology and scale purposes I believe. I think it's an open area for exploration

---

<a name="technical-whats-history-behind-bowties" href="#technical-whats-history-behind-bowties">#</a> **Q:** (Not technical) what's the history behind all your bowties?

**A:** bowties are cool! I don't know if there's a history there, I just like them

---

<a name="thoughts-graphqlcompose-httpsgithubcomnodkzgraphqlcompose" href="#thoughts-graphqlcompose-httpsgithubcomnodkzgraphqlcompose">#</a> **Q:** Thoughts on graphql-compose? https://github.com/nodkz/graphql-compose

**A:** I haven't seen graphql-compose yet! Homework for me, thanks 😃 I really like https://www.knottyco.com/ - It's a one man shop, but they're really nice

---

<a name="wake-next-week-one-reason" href="#wake-next-week-one-reason">#</a> **Q:** You wake up next week and for one reason or another, you no longer work at Facebook... What sort of project(s) would you start working on?

**A:** Great question! I have to think about that. All my projects are motivated by trying to solve real problems - Facebook is an endless source of interesting product, infra and scale problems which has fueled my curiosity and led me to a lot of the projects I work on now. I'd probably get interested in a product area first and find something that I care about, and then ultimately get sucked into the trap of trying to rebuild it and in doing so stumble upon another product that consumes all my time. I'm fascinated by mobile and social products because they're pushing a bunch of questions we've not had to solve before. If all else failed, I'd probably end up designing a new programming language - I think that's the ultimate form of nerd catnip

---

<a name="noticed-youve-done-work-errors" href="#noticed-youve-done-work-errors">#</a> **Q:** I noticed you've done some work on errors in graphql-js recently. Do you have a preferred way of formatting errors so that they can be parsed and displayed to users?

**A:** Yeah there have been some quirky bugs in graphql-js errors that I finally got all polished out. I'm philosophically opposed to showing system errors to end users. That's almost always completely unhelpful. Errors are always for developers or for the code they write. So the goal is to include structured metadata that programs can use. For example if you wanted to adjust cache behavior based on errors - that's a worthy goal errors should help with. But if you want to show error messages to users then you should probably find ways to encode that directly into your schema rather than try to use developer errors directly or you'll likely end up with a poor UX

---

<a name="lee-give-us-direction-issue" href="#lee-give-us-direction-issue">#</a> **Q:** Lee, can you give us a direction on this issue so we can implement the PR that can be accepted in the official express-graphql repository. http://github.com/graphql/express-graphql/issues/101

**A:** I haven't seen that issue yet so I'll have to take a look. Generally the goal is to keep graphql-express as simple and composable as possible, so PRs that make express-graphql more general and composable are priorities and the opposite are given tough scrutiny to see if they can't find a general solution 😉

---

<a name="manage-schema-duplication-graphql-layer" href="#manage-schema-duplication-graphql-layer">#</a> **Q:** How do you manage schema duplication between your graphql layer and backing services at FB? i find myself effectively declaring all of my object schemas twice now that i'm using graphql

**A:** Our backing services often have similar forms but different enough that they warrant being declared separately, also our backing services tend to evolve quickly and our GraphQL API needs to be very stable, so it's helpful to have them declared separately to avoid breaking clients. That said, we do have tools to help unify them when it makes sense to do so - we can auto-generate parts of our GraphQL schema and our backing service schemas from one source of truth in some cases.

---

<a name="give-insights-subscriptions-set-facebook" href="#give-insights-subscriptions-set-facebook">#</a> **Q:** Can you give some more insights into how the subscriptions set up at facebook works in broad terms? I get that I can more or less implement them in user space at the moment, but I still have a few things I can't wrap my head around. Ie. what does the original request to register a subscription look like (Do I just send the subscription graphQL query - which then does not get the result it specifies in its query body) and what about unregistering?

**A:** You should watch Laney's portion of our React Europe talk from this year she goes into fair detail about what actually happens in a subscription in a couple slides. The basic flow is that at app build time we store all our queries including the subscriptions, and we have a custom service we use for subscription subscribing/unsubscribing. To that service we send the stored query ID we're interested in and the variables for it, and we get a handle that we can unsubscribe from later - the full subscription query is run every time the underlying pubsub system gets triggered. So the actual subscribing and unsubscribing happens outside of graphql, via a custom pubsub service we built at FB

---

<a name="technology-use-subscribing-outside-graphql" href="#technology-use-subscribing-outside-graphql">#</a> **Q:** What technology do you use for subscribing outside of graphql for subscriptions?

**A:** We have a custom pubsub service we built at Facebook for that

---

<a name="interesting-projects-use-development-facebook" href="#interesting-projects-use-development-facebook">#</a> **Q:** Are there any interesting projects in use or under development at Facebook that are not currently open sourced?\*

**A:** Always! but unfortunately I can't talk about most of them. One I can talk about is our iOS and Android GraphQL SDKs - there's too much about how they're tied to how Facebook works that keeps them from being open sourceable, but we do lots of interesting stuff with code generation to produce fast running code - Apollo team is learning from stories we've told them to help inform great ideas they already had for building their iOS and Android GraphQL SDKs

---

<a name="thoughts-graphql-would-work-microservices" href="#thoughts-graphql-would-work-microservices">#</a> **Q:** Do you have any thoughts on how GraphQL would work in a microservices architecture? In particular, I'm curious about having a single GraphQL microservice vs having a GraphQL endpoint per microservice.

**A:** In a microservices architecture GraphQL is a great fit as the "API gateway" piece - http://microservices.io/patterns/apigateway.html As discussed before, I think each service having it's own GraphQL API is maybe a questionable choice - though it could work. I usually advocate for Thrift or Protobuf or CapnProto for service to service

---

<a name="think-relay-v-apollo-web" href="#think-relay-v-apollo-web">#</a> **Q:** What do you think about relay v apollo for web apps/react native apps?

**A:** I'm a big fan of both Relay and Apollo - I firmly believe that a world with many GraphQL clients that make different tradeoff choices is a better world. If you're using JavaScript as your app's language then either could make a great choice for helping you organize and cache your GraphQL queries and data - they make different tradeoffs so you should understand what they do and why before making a choice for your project
