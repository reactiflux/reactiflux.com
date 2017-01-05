---
title: Lee Byron
date: July 28 2016
---
## Facebook Engineer - GraphQL Co-Creator

| username | question |
| ---: | --- |
| **leebyron** | Oh hai |
| Gabe | hey @leebyron !!!! |
| Gabe | thanks for taking the time to do this Q&A 😃 |
| **leebyron** | my pleasure - looking forward to good questions |
| Gabe | The Q&A is officially starting now... ask away everyone |
| calebmer | **[Q&A] What’s the status on adding a field like __id to the GraphQL specification?** |
| **leebyron** | that idea has been tossed around a few times, so I think it's worth writing up as an RFC, that's something I'm actively working on. All changes to GraphQL go through a formal process of Idea -> Strawman -> RFC -> Spec change with review along the way |
| **leebyron** | Right now __id is around the idea phase, but it sounds like it's a good one, so I'm excited to see it move forward and help answer more questions |
| Lorage | **[Q&A]  Whats it like working on three of Facebook's biggest externally used software developer projects?** |
| **leebyron** | busy! But a lot of fun |
| calebmer | **[Q&A] Do you have any interesting insights on the differences between Falcor and GraphQL?** |
| **leebyron** | I'm a big fan of Falcor. They're solving very related problems as well. Falcor's simplicity is really elegant and leads to some super clever caching strategies. GraphQL's strong types leads to great tools. |
| jamestwiggle | **[Q&A] Do you think the immutable docs will ever add regular javascript examples for methods on immutable data-structures? Currently lots of the methods just have typescript notation signatures on each method. For people who aren't using typescript you alienate them. I've myself had to go through SoF many times trying to see examples of some of the methods in action because I couldn't/not familiar with the typescript notations.** |
| **leebyron** | I certainly hope so but that's not at the top of my personal priorities. If someone wanted to submit PRs to add that kind of thing to the documentation I'd be really excited |
| jamestwiggle | **[Q&A] Do you know of any resources available for hooking graphql up with websockets?** |
| **leebyron** | I haven't seen anything like that yet, but that doesn't mean someone hasn't written something up that I haven't seen. I personally haven't been experimenting with that |
| calebmer | **[Q&A] Is data normalization something you are thinking about for GraphQL considering clients are manually normalizing data (e.g. Relay and Apollo)?** |
| **leebyron** | yeah - there are some difficult issues normalization brings up that different clients have been solving in different ways (to achieve different things; tradeoffs) so it's seemed like the right decision to allow clients to specify their own normalization strategy - but normalization has been a frequent topic of discussion through the years |
| jamestwiggle | **[Q&A] what happened to your ecmascript proposals for immutable data-structures? Any chance you'll champion them again?** |
| **leebyron** | Sebastian Markbage has been the champion of those proposals - I support him when I can, but he's still working on them! |
| jamestwiggle | Awesome |
| calebmer | if it isn’t too hard, could we have a link to that proposal? I haven’t heard of it 😉 |
| RyanCollins |  Love that idea and would be interested as well.  |
| jamestwiggle | https://github.com/sebmarkbage/ecmascript-immutable-data-structures |
| calebmer | Thanks 👍 |
| **leebyron** | thanks James you beat me to the link 😃 |
| taion | **[Q&A] a react+relay+flow project ends up using 3 incompatible type systems – flow, graphql types, and react proptypes; do you have any advice on how to optimally deal with this?** |
| **leebyron** | I prefer flow over proptypes |
| **leebyron** | So I don't use proptypes in my react projects, I use flow instead |
| **leebyron** | GraphQL types describe a different domain, so they're not as easily unified - but our intern on the Relay team has been looking into generating flow types based on the queries you write which is super cool and really similar to what we do in our native apps that use GraphQL at Facebook, hopefully that works out and can be shared in the near future |
| calebmer | **[Q&A] Is there any application in production (Facebook or not) whose architecture you may describe as an Immutable app architecture?** |
| **leebyron** | my talk on immutable architecture is based in many ways on our primary iOS app, the News Feed portion of it in particular |
| **leebyron** | It uses ComponentKit (which I like to refer to as "React ObjC") |
| jamestwiggle | **[Q&A] Are there any new personal-projects or facebook-projects you are working on that you are excited about?** |
| **leebyron** | yes! I can't help myself. |
| **leebyron** | you can stalk my github page for stuff I'm kicking around on the weekends |
| **leebyron** | iterall and flow-remove-types are two recent ones |
| **leebyron** | testcheck-js is an oldie but a goodie that I hope to find time to revive soon |
| Lorage | **[Q&A] Where do you see React and React Native going?** |
| **leebyron** | the React team's goal is simplifications and optimizations - so simpler React with fewer concepts and faster performance |
| **leebyron** | React Native is focused on performance across all platforms |
| codemonk | **[Q&A] how far would you go building mobile app using react-native?** |
| **leebyron** | I'm not sure I understand the question but I would go as far as to build mobile apps in react-native 😃 |
| calebmer | **[Q&A] Relay transpiles queries to add an id field, as this is a feature that could be useful to many GraphQL clients, may GraphQL ever auto-inject an id field on supporting composite types?** |
| **leebyron** | no GraphQL will never auto-inject fields as that would break some of its core guarantees |
| **leebyron** | but I strongly support the query compilation and optimization phases that Relay and Apollo help you perfom |
| jamestwiggle | **[Q&A] Is camera, gallery, and voice API's for react-native ever going to come? They seem like some of the things that most apps use in some way but react-native doesn't have those features in the API without using 3rd party.** |
| **leebyron** | I have no idea! I'd suggest asking in the react-native github. I believe their plan is to avoid attempting to cover the entirety of native APIs and instead embrace third-party extensions |
| taion | **[Q&A] is explicit null still on the horizon for graphql? what about map types?** |
| **leebyron** | the null literal is still an open RFC and there are some sticking questions, it hasn't been the highest priority RFC so it's been languishing a bit, but its still in consideration |
| **leebyron** | Map type has come up a few times in RFC and failed each time. Each time seems to be more convinced that it adds more complexity and cost than value |
| kastermester | **[Q&A] I vagely remember having stumbled upon some github comment that stated you are working on an open source Hack implementation of the GraphQL engine. Is this something you know anything about?** |
| **leebyron** | no explicit plans for open source yet, although that's in our team's aspirations! Jan Jergus on our team has been building a brand new Hack impl of GraphQL that will power all of Facebook's production traffic. Once he's accomplished that goal, he plans to open source it |
| RyanCollins | Speaking to iOS development, can you recommend open source libraries that can be used to apply the same principles used in react, redux to native (swift or ObjC)? |
| **leebyron** | I don't spend a lot of my time in ObjC lately so I may not have the best answers and not sure about a corollary to redux, but ComponentKit is what you're looking for if you want a corollary to React |
| **leebyron** | http://componentkit.org/ |
| RyanCollins | Thanks!  Really appreciate all you've done for the community!  |
| jamestwiggle | **[Q&A] Any good compsci books you recommend reading?** |
| **leebyron** | I don't read a lot of compsci books, but found The Little Prover a lot of fun and enlightening recently |
| **leebyron** | https://mitpress.mit.edu/books/little-prover |
| taion | **[Q&A] for advanced graphql features like @batch and @defer, is the path to get them in open-source graphql for the community to contribute PRs? if so, are there more detailed resources for how they should work, beyond your react europe talk?** |
| **leebyron** | the path is experimentation first (via forks is fine) and then to start an RFC process. |
| **leebyron** | I personally find it easier to write code to explore an idea and work out problems and then work backwards to strawman and RFC. My react europe talk was about the beginning of some of that experimentation process |
| taion | ah – it sounded like @batch and @defer were a bit past the raw experimentation stage |
| **leebyron** | nope - still very early! |
| **leebyron** | one of the things I hope to do, but haven't succeed at yet is try some of those experiments in production with Facebook products first to see what real problems fall out |
| calebmer | **[Q&A] It seems like the Facebook projects you have the most influence on (GraphQL, ImmutableJS) have a very different coding style than codebases like React, React Native, and Relay which are all have similar styles. How does your coding style differ from that of Facebook’s?** |
| **leebyron** | can you elaborate on the coding style differences you see? I didn't realize |
| calebmer | Nevermind then, you don’t have to answer that. It’s just a stylistic difference I noticed when looking at the source code. Probably a combination of license headers, es5 vs es6, and on. I was wondering if there was some concious difference 😉 |
| **leebyron** | I've been writing code at FB for many years now so I think my style and its style have become one in the same. Immutable was a bit of an experimentation with writing ES6 code before the spec, and GraphQL was the first open source lib to be fully based on babel, so that may have something to do with it |
| kastermester | **[Q&A] Hack graphql again | Do you know if it will be a completely new kind of API or resemble the graphql-js quite nicely?** |
| **leebyron** | the Hack GraphQL server is based on the graphql-js codebase, but has hack-specific differences. I think it will feel familiar but have some differences |
| Lei | **[Q&A] is there any test case set can be used for validate/certify a graphql implementation?** |
| **leebyron** | there isn't one yet, but that would be an awesome thing to contribute for an emboldened community member!! |
| conradwt | **[Q&A]  I find the documentation for somone getting up to speed with GraphQL and Relay to be some what confusing at times because it doesn't provide the steps.  Then I tend to hop from one blog post to the next looking for focused example.  However, Steven Luscher presentation, 'Zero to GraphQL in 30 minutes' knocked it out of the park by explaining the steps involved with why he was performing a particular action.  Thus, are there any plans on the roadmap for making the onboarding experience for GraphQL and Relay better?** |
| **leebyron** | totally agree with you. I'd love to see major improvements to the learning experience for graphql/relay. That's something I hope to spend my time on over the coming months |
| jasonmerino | **[Q&A] Where do you go (blogs, videos, etc.) to learn new things and get new ideas about programming?** |
| **leebyron** | I stumble upon them like the rest of us, usually via twitter links. I often stalk the talks of some of my fav speakers or conferences as well |
| lukasfittl | **[Q&A] I'm curious on the topic of caching GraphQL results, specifically on the server-side or in-between as a proxy. Any thoughts/projects that come to mind, or best practices from FB?** |
| **leebyron** | we don't cache GraphQL results in a proxy at Facebook since each user gets a different result and data is volatile and changes all the time - though we do cache heavily the backing data itself, so often GraphQL is working on data it gets from a very fast cache layer |
| kamek | **[Q&A] Are you guys planning to completely rewrite the Facebook mobile app with React Native?** |
| **leebyron** | no we're not planning to do that, but we are looking at targeted areas of the app where a rebuild is already necessary or a new product area is being introduced where RN might be a good fit |
| kennetpostigo | **[Q&A] Any chance you can add a few simple examples to GraphQL + Data loader?  Its kind of hard to follow the SWAPI data-loader usage.** |
| **leebyron** | the Swapi was supposed to be a clear example of using them together, but if there are confusion points please open issues on those GH projects! |
| conradwt | **[Q&A]  So, is data loader more applicable to Relay being that it's used for fetching the data from the server and GraphQL is simply the mechanism for query the data from the GraphQL server?** |
| **leebyron** | DataLoader is a server-side concept for reducing over-fetching and adding per-request caching. Relay is a client-side concept. Each is fully independent of one another |
| conradwt | Thanks for the clarification. |
| calebmer | **[Q&A] How do you scale the GraphQL API at Facebook?** |
| **leebyron** | One important aspect is that GraphQL is a "stateless" API. That is handing a second GraphQL request knows nothing about the first. That allows us to swiftly scale up machines (as long as our load balancers can keep up) |
| **leebyron** | Also GraphQL is a really thin piece of software that sits atop our existing "monolith" web and data service (aka facebook.com) which already has tons of people and smarts being scaling it effectively |
| markspolakovs | **[Q&A] To what extent is GraphQL used on the "main" Facebook app (facebook.com)?** |
| **leebyron** | GraphQL is used in bits and pieces of facebook.com, but most of facebook.com is still server rendered for performance and practical reasons and thus doesnt require a client-to-server data request language |
| markspolakovs | Thank you. |
| lukasfittl | **[Q&A] What kind of insights do you provide developers at Facebook when developing GraphQL related code? (e.g. performance of certain types of queries, fields that are never queried, etc.)** |
| **leebyron** | that depends - for those working on building GraphQL types and adding to the API, we have a lot of best practice docs that are the result of an older habit of meeting with every team and reviewing their API and learning from mistakes. On the client the best insight is to keep GraphQL fragments as single-purpose as possible and as close to the code that uses it as possible - we sometimes refer to this as "colocated fragments" |
| lukasfittl | thanks, excellent answers! |
| calebmer | **[Q&A] How often is the GraphQL API the performance bottleneck at Facebook?** |
| **leebyron** | The GraphQL API is a small part of the whole end to end performance experience, and I don't think it's ever been the bottleneck - though many aspects around it are constantly and continuously tuned for performance - such as the database access patterns the GraphQL executor makes (thus inspiration for DataLoader) and just trying to use the network as efficiently as possible when we're talking about mobile devices |
| **leebyron** | One cool thing that we do -  and this is a little nuts |
| **leebyron** | Mobile devices send a UDP packet to our GraphQL API at the very beginning of a query |
| **leebyron** | and that starts queuing up a request, and by the time SSH handshake and a full TCP connection has completed, it's already almost done |
| **leebyron** | we had to configure our load balances to pin incoming IPs to the same machine for a short window of time to make that possible |
| **leebyron** | but that was a pretty cool network layer optimization |
| calebmer | Is that dangerous though, say if the handshake failed? |
| **leebyron** | it's not dangerous since UDP is one way. If the handshake fails or the query never arrives, then the result of running the query is just lost |
| lukasfittl | does the UDP packet contain any additional information, or is it just to reserve the slot? |
| lukasfittl | ah, so you're actually sending the query in the UDP package already? very interesting |
| **leebyron** | UDP packet sets enough info to know which query needs to run (assuming persisted earlier, stored procedures style) and the variables in use |
| taion | hilariously/dangerously, a few exchanges now support UDP protocols for order entry |
| taion | to skip TCP handshake time lol |
| taion | err, support UDP i mean, not "UDP protocols" |
| calebmer | What about from a DDOS perspective? |
| **leebyron** | FB is pretty resilient to DDOS |
| **leebyron** | You can also DDOS via plain ol TCP 😃 |
| **leebyron** | we have many protections in place for DDOS |
| **leebyron** | At this point we're less worried about DDOS and more worried about data scraping hackers, we have protections for that as well |
| **leebyron** | they are overlapping problems |
| kamek | **[Q&A] You recently gave a talk about possible solutions for subscriptions or 'live queries' in GraphQL. Could you roughly estimate when one of those possible approaches will be implemented in graphql-js and Relay ?** |
| **leebyron** | sometime between 6 months from now and never |
| **leebyron** | honestly it's impossible to know |
| **leebyron** | a lot of those are crazy ideas that might flop |
| taion | sorry to hijack that answer, but @edvin's relay-subscriptions is super cool |
| jamestwiggle | **[Q&A] Any chance the data-loader functionality will be embedded into graphql so that we don't have to wire it up manually?** |
| **leebyron** | no data-loader won't be embedded into graphql directly. GraphQL doesn't have enough information to know how to most efficiently set up your loaders, and I think composing two technologies that work well together is a better long term strategy than making one monolithic technology that makes choices for you |
| TL | **[Q&A] Have you seen implementations of GraphQL servers getting downstream data from another GraphQL-based service? Any concerns you can see with that type of approach? Maybe a lack of transparency of what's happening behind the scenes.** |
| taion | **[Q&A] last nitty-gritty graphql impl question (that i can think of for now) – is adding batched query support to express-graphql a WONTFIX, or is it something that will arrive at some point? i.e. should i close my PR there? 😄** |
| **leebyron** | it's not a wontfix, but we want to make sure that anything we support in open source GraphQL aligns very well with how we do similar things internally. Otherwise we run the risk of abandonware |
| calebmer | **[Q&A] How important is GraphQL parsing speed, or are query documents at Facebook cached?** |
| **leebyron** | parsing speed is important! query docs at Facebook are cached, but they're cached in the form of query strings, so they're parsed before running |
| TL | **[Q&A] Have you seen implementations of GraphQL servers getting downstream data from another GraphQL-based service? Any concerns you can see with that type of approach? Maybe a lack of transparency of what's happening behind the scenes.** |
| **leebyron** | I haven't actually seen that first hand though I've heard of people talking about doing that |
| **leebyron** | I can see why it would be interesting or valuable, but it also makes me nervous |
| **leebyron** | I don't think GraphQL is likely to be the best choice for service to service communication - in those scenarios the network is cheap/fast and cpu & memory is the bottleneck |
| **leebyron** | GraphQL is a trade in the opposite direction - it optimizes for the network |
| **leebyron** | which is exactly what you want if you have to communicate over the internet, but maybe not if you're communicating over a 50' fiber line |
| calebmer | Thanks so much, you’re one of my programming heroes and you’re working on some projects that are very interesting to me 😉 👍 |
| **leebyron** | thanks Caleb! |
| **leebyron** | though - that said, GraphQL gives you some benefits beyond just network optimizations and so I still see the appeal |
| taion | **[Q&A] how do you handle graphql query-to-request batching internally?** |
| **leebyron** | We have a batch API. Actually we have 2. Both have serious flaws |
| **leebyron** | There's a (lower pri) conversation internally about improving those or replacing them with something that solves the issues we're seeing internally - and that conversation should guide a specced batch API as well |
:LINEaion | sorry, by batching – i mean executing multiple graphql queries in a single network request
| **leebyron** | yep - that's what I mean by batch as well |
| **leebyron** | In the meantime, I think it's probably cool to roll your own ideas - GraphQL is agnostic to the network protocol on purpose to enable exactly this kind of experimentation |
| **leebyron** | there's no need to wait for express-graphql to add the feature to start making good things |
| **leebyron** | but I do want to make sure whatever we add to express-graphql we're incentivized to maintain |
| **leebyron** | by aligning with how things work internally |
| taion | that makes sense, thanks! i'll keep rolling with my express-graphql fork then (: |
| **leebyron** | I know it can be frustrating that our team at FB is a bottleneck to ideas entering upstream, but I hope that it's the right tradeoff in the long term |
| taion | no, i think it's great that potentially half-baked ideas get blocked by the weight of experience |
| kastermester | **[Q&A] Do you know anything about the new mutations API the seems to be in the works for Relay? I can find lots of references to it in the meta docs, but not many links to stuff that can tell me in which direction it is heading.** |
| **leebyron** | I know that's something the team is working on right now, Joe Savona in particular (@en_js on most things) so you might ask him |
| kastermester | Thanks 😃 |
| t0asterb0t | **[Q&A] What upcoming or in-development GraphQL change are you most excited about?** |
| **leebyron** | I'm personally most excited about @defer in terms of truly enabling new things in GraphQL - there's still a ton of open questions and uphill implementation challenges ahead, but providing client-defined streaming semantics to data I think will be big value |
| **leebyron** | Though outside the GraphQL spec itself, I'm really excited about the work happening on GraphQL clients |
| **leebyron** | I'm really interested to see how the native app variants of Apollo turn out |
| jamestwiggle | **[Q&A] Do you think theres room for GraphQL Client with small API surface?** |
| jamestwiggle | As opposed to Relay and Apollo |
| **leebyron** | Absolutely! That's a common question I get |
| **leebyron** | I always tell people that if you can send a network request, you should be able to use GraphQL |
| **leebyron** | consider how much client API you typically use when using a standard REST api |
| **leebyron** | If you've built something that uses a REST API and just uses XMLHTTPRequest() as the whole API, then there's no reason you can't do that with GraphQL as well |
| kennetpostigo | Shameless plug | http://github.com/kennetpostigo/react-reach, a small wrapper around fetch that lets you talk to GQL |
| **leebyron** | https://github.com/kadirahq/lokka is another less cited GraphQL client that's smaller in surface area (and does less things) than Relay/Apollo |
| taion | **[Q&A] i'm building a graphql api with subscription support that uses websocket or equivalent. would you recommend sending normal queries and mutations via normal http, or should those go over the websocket as well?** |
| **leebyron** | I'm not sure! I've never tried that before, so I'm interested to see what works best for you |
| taion | can you clarify what you mean by "that"? |
| **leebyron** | At Facebook we send subscriptions over a live connection, but we use standard http for queries and mutations |
| **leebyron** | but that's mostly out of network topology and scale purposes I believe |
| **leebyron** | I think it's an open area for exploration |
| nakamin | **[Q&A] (not technical) what's the history behind all your bowties? **😎😜
| **leebyron** | bowties are cool! |
| **leebyron** | I don't know if there's a history there, I just like them |
| John Tran | **[Q&A] Thoughts on graphql-compose? https://github.com/nodkz/graphql-compose** |
| **leebyron** | I haven't seen graphql-compose yet! Homework for me, thanks 😃 |
| **leebyron** | I really like https://www.knottyco.com/ - It's a one man shop, but they're really nice |
| GoldenBeet | **[Q&A] You wake up next week and for one reason or another, you no longer work at Facebook... What sort of project(s) would you start working on?** |
| **leebyron** | great question! I have to think about that. |
| **leebyron** | All my projects are motivated by trying to solve real problems |
| **leebyron** | Facebook is an endless source of interesting product, infra and scale problems which has fueled my curiosity and led me to a lot of the projects I work on now |
| **leebyron** | I'd probably get interested in a product area first and find something that I care about, and then ultimately get sucked into the trap of trying to rebuild it and in doing so stumble upon another product that consumes all my time |
| **leebyron** | I'm fascinated by mobile and social products because they're pushing a bunch of questions we've not had to solve before |
| **leebyron** | If all else failed, I'd probably end up designing a new programming language - I think that's the ultimate form of nerd catnip |
| kennetpostigo | sounds awesome, alot of your coworkers have been doing that |
| t0asterb0t | **[Q&A] I noticed you've done some work on errors in graphql-js recently. Do you have a preferred way of formatting errors so that they can be parsed and displayed to users?** |
| **leebyron** | yeah there have been some quirky bugs in graphql-js errors that I finally got all polished out |
| **leebyron** | I'm philosophically opposed to showing system errors to end users |
| **leebyron** | That's almost always completely unhelpful |
| t0asterb0t | Agreed, my understanding was the message field was intended for developers |
| **leebyron** | yes errors are always for developers or for the code they write. So the goal is to include structured metadata that programs can use. For example if you wanted to adjust cache behavior based on errors - that's a worthy goal errors should help with. But if you want to show error messages to users then you should probably find ways to encode that directly into your schema rather than try to use developer errors directly or you'll likely end up with a poor UX |
| Gabe | **[Q&A]Lee, can you give us a direction on this issue so we can implement the PR that can be accepted in the official express-graphql repository. http://github.com/graphql/express-graphql/issues/101** |
| **leebyron** | @Gabe - I haven't seen that issue yet so I'll have to take a look |
| **leebyron** | Generally the goal is to keep graphql-express as simple and composable as possible |
| **leebyron** | so PRs that make express-graphql more general and composable are priorities and the opposite are given tough scrutiny to see if they can't find a general solution 😉 |
| Gabe | 👍 |
| taion | **[Q&A] how do you manage schema duplication between your graphql layer and backing services at FB? i find myself effectively declaring all of my object schemas twice now that i'm using graphql** |
| **leebyron** | our backing services often have similar forms but different enough that they warrant being declared separately |
| **leebyron** | also our backing services tend to evolve quickly and our GraphQL API needs to be very stable, so it's helpful to have them declared separately to avoid breaking clients. |
| **leebyron** | that said, we do have tools to help unify them when it makes sense to do so - we can auto-generate parts of our GraphQL schema and our backing service schemas from one source of truth in some cases |
| taion | thanks! i guess for a greenfield project where things match up neatly, the concerns fall out a bit differently. |
| conradwt | I must run but HUGE thanks for taking the time to answer my questions as well as others that I learned a fair amount from and I look forward to working with GraphQL and associated components with my projects. |
| **leebyron** | for sure! |
| kastermester | **[Q&A] Can you give some more insights into how the subscriptions set up at facebook works in broad terms? I get that I can more or less implement them in user space at the moment, but I still have a few things I can't wrap my head around. Ie. what does the original request to register a subscription look like (Do I just send the subscription graphQL query - which then does not get the result it specifies in its query body) and what about unregistering?** |
| **leebyron** | you should watch Laney's portion of our React Europe talk from this year she goes into fair detail about what actually happens in a subscription in a couple slides |
| kastermester | Thanks I will do that. I think I have actually watched it, but I must have missed something 😃 |
| **leebyron** | the basic flow is that at app build time we store all our queries including the subscriptions, and we have a custom service we use for subscription subscribing/unsubscribing |
| **leebyron** | to that service we send the stored query ID we're interested in and the variables for it, and we get a handle that we can unsubscribe from later |
| **leebyron** | the full subscription query is run every time the underlying pubsub system gets triggered |
| kastermester | So just to get things clear | The actual subscribing and unsubscribing happens outside of graphql? 😃 |
| **leebyron** | yes outside of graphql |
| **leebyron** | via a custom pubsub service we built at FB |
| kastermester | Makes sense 😃 |
| kennetpostigo | What technology do you use for subscribing outside of graphql for subscriptions? |
| **leebyron** | we have a custom pubsub service we built at Facebook for that |
| nakamin | **[Q&A] are there any interesting projects in use or under development at Facebook that are not currently open sourced?** |
| **leebyron** | always! but unfortunately I can't talk about most of them |
| **leebyron** | One I can talk about is our iOS and Android GraphQL SDKs - there's too much about how they're tied to how Facebook works that keeps them from being open sourceable, but we do lots of interesting stuff with code generation to produce fast running code - Apollo team is learning from stories we've told them to help inform great ideas they already had for building their iOS and Android GraphQL SDKs |
| t0asterb0t | **[Q&A] Do you have any thoughts on how GraphQL would work in a microservices architecture? In particular, I'm curious about having a single GraphQL microservice vs having a GraphQL endpoint per microservice.** |
| **leebyron** | in a microservices architecture GraphQL is a great fit as the "API gateway" piece - http://microservices.io/patterns/apigateway.html |
| **leebyron** | as discussed before, I think each service having it's own GraphQL API is maybe a questionable choice - though it could work |
| **leebyron** | I usually advocate for Thrift or Protobuf or CapnProto for service to service |
| taion | we ❤ graphql so much as our api gateway... it's the best |
| Gabe | okay anyone have 1 last question before we close the Q&A? |
| taion | **[Q&A] what do you think about relay v apollo for web apps/react native apps?** |
| **leebyron** | I'm a big fan of both Relay and Apollo - I firmly believe that a world with many GraphQL clients that make different tradeoff choices is a better world |
| **leebyron** | If you're using JavaScript as your app's language then either could make a great choice for helping you organize and cache your GraphQL queries and data - they make different tradeoffs so you should understand what they do and why before making a choice for your project |
| kastermester | Just want to say thanks for taking the time to answer all these questions. A part of me wonder how many keyboards you've burned through during this time 😃 I still remember talking to you outside The Frog at last years React Europe. We could all see how jet lagged you were (but obviously none of us were kind enough to give that much thought) but you still kept answering our questions for quite a while 😃 Always a pleasure! 😄 |
| **leebyron** | for sure! it was very hot that year which didn't help. This year I got more sleep so hopefully I was more coherent |
| Byron | First time spectating a Q-A on discord. It was very interesting 😃 |
