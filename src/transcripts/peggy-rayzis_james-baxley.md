---
title: Peggy Rayzis & James Baxley
date: 2018-05-10
time: 1-2pm PT / 8-9PM GMT
location: Q&A Channel Reactiflux
description: "Open Source Engineers @ [Apollo](https://twitter.com/apollographql) | Building Apollo Client, Engine, Server, and other tools to help you incrementally adopt GraphQL."
people: "[@jbaxleyiii](https://twitter.com/jbaxleyiii) & [@peggyrayzis](https://twitter.com/peggyrayzis)"
---

## Open Source Engineers @ Apollo building Apollo Client, Engine, Server, and other tools to incrementally adopt GraphQL.

<a name="last-week-ish-peggy-talked" href="#last-week-ish-peggy-talked">#</a> **Q:** Last week (ish) you and Peggy talked a little bit about the new improvements that have gone into the new apollo-server, especially with new features like the long-awaited defer directive. Is there any timetable or issues about this, and how can people help out with this? - NLincoln

**A:** Yes! We are hoping to have a roadmap out soon, but we are shooting for an active beta process with a lot of new features (including integrated caching :heart_eyes: ) Our timeline for launch is aligned with Peggy speaking at GraphQL Europe! You can get involved by giving a :wave: and mentioning us in the apollo-server channel in slack! - jbaxleyiii

---

<a name="resource-site-holds-basic-use" href="#resource-site-holds-basic-use">#</a> **Q:** Do you have a resource site that holds the basic use cases for GraphQL that you could share? - Jesse

**A:** Hey Jesse! Great question. Right now, we have a Learn microsite planned to launch in a couple months that will cover best practices, fullstack tutorials, and more! We will be incrementally rolling out the site soon in a couple of weeks. For now, I would recommend going through the getting started guides in the Apollo Client & Server docs or checking out howtographql.com by Graphcool 😃 - peggy

---

<a name="would-good-learn-learning-graphql" href="#would-good-learn-learning-graphql">#</a> **Q:** What would be good to learn before learning GraphQL and Apollo? - Dale

**A:** I would say a solid understanding of JavaScript is probably the only requirement. Experience with React and calling REST endpoints/other data sources would also be helpful too. - peggy

---

<a name="apollo-offer-baas-sunglasses-need" href="#apollo-offer-baas-sunglasses-need">#</a> **Q:** When will apollo offer a BaaS :sunglasses: I need this from y'all haha - Sonicrida

**A:** We think GraphQL works amazing with all databases and over current REST products! Graphcool has a great way to spin up a database quickly, and I'm a fan of a good ol SQL build myself. - jbaxleyiii

---

<a name="take-apollo-isnt-interested-baas" href="#take-apollo-isnt-interested-baas">#</a> **Q:** So can I take that as a "apollo isn't interested in doing their own BaaS right now" (I think you all would do a wonderful job in this space) or more of a "stay tuned" :stuck_out_tongue: - Sonicrida

**A:** Yep! We don't have any plans for a BaaS, but rather want to make it incredibly easy to make GraphQL work with whatever backend you want - jbaxleyiii

---

<a name="good-resources-good-schema-design" href="#good-resources-good-schema-design">#</a> **Q:** Are there any good resources on "good" schema design? - Chris\_

**A:** Right now, there aren't many great resources that cover this topic. But, we're planning to fix this soon with the launch of our new Learn microsite. A general tip would be to practice schema driven development when designing your schema. It should reflect the UI that is planning to consume it. Hope that helps! - peggy

---

<a name="tell-us-microsite-released-awni" href="#tell-us-microsite-released-awni">#</a> **Q:** Can you tell us when the microsite will be released? - Awni

**A:** I can't tell you an exact date yet but expect the first version of our best practices guide to be launched around Apollo Day on May 31. If you're in SF and interested in attending, you can use my code PEGGYVIP for 25% all tickets https://www.universe.com/events/apollo-day-tickets-san-francisco-CBJ6X9 - peggy

---

<a name="hey-thanks-work-freaking-cool" href="#hey-thanks-work-freaking-cool">#</a> **Q:** Hey, thanks for the work, it's freaking cool, I wanted to ask about a few updates. 1. Are you going to add delete fragment support to client, all solutions I have checked look like hacks. 2. Will batching requests work with persisted requests? - Djinnes

**A:** We are! We have some exciting full stack caching improvements coming soon starting with a large performance win that should be landing soon. Cache eviction, staleness, and more are coming too. As for batching with persisted requests, there are still some questions in how / why that is beneficial when using GET, but happy to chat about it in a feature request! - jbaxleyiii

---

<a name="way-update-store-subscription-component" href="#way-update-store-subscription-component">#</a> **Q:** Is there any way to update the store with a <Subscription /> component? - alexanderson1993

**A:** Subscriptions should update the cache when data comes back. Aside from that you should be able to access the client from the function as child but I'm not positive if it includes it. If not, thats a great first PR :wink: - jbaxleyiii

---

<a name="measures-taken-help-testing-frontend" href="#measures-taken-help-testing-frontend">#</a> **Q:** What measures are being taken to help out with testing, both frontend and backend? Testing a graphql backend is a little complicated and there aren't any docs for it. Additionally, testing <Query> components on the frontend is a little painful as well. Is there a plan to improve apollo's testing story? - NLincoln

**A:** You'll be happy pretty soon I think :wink: We have been working on documenting the super secret react-apollo test-utils and Wes Bos's upcoming course teaches how to do it.

For the backend, I've always been a fan of exporting my schema and running graphql execution against it with a mocked context. - jbaxleyiii

---

<a name="hi-see-many-usecases-apollolinkstate" href="#hi-see-many-usecases-apollolinkstate">#</a> **Q:** Hi, do you see many usecases where apollo-link-state wouldn't be the preferred choice (in comparison to redux, etc)? - Isomorpheus

**A:** If you're using Apollo Client to manage your remote data, I would say that apollo-link-state would be the preferred choice for pretty much any use case. If there is a use case that Redux satisfies that apollo-link-state doesn't, please let me know so we can work on adding support! 😃 - peggy

---

<a name="hi-resources-authenticateauthorize-using-graphql" href="#hi-resources-authenticateauthorize-using-graphql">#</a> **Q:** Hi, are there any resources on how to Authenticate/Authorize when using GraphQL? Authentication on REST layer would make all the Types private. Is there a better way? - sidoshi

**A:** Great question! We have a blog post on authentication coming out soon. Additionally, there are guides in both the client and server docs. The tl;dr is that you should use GraphQL context to authenticate the user. In your resolvers, you can read the user from the context to determine whether or not they are authorized to view the data. - peggy

---

<a name="multiple-apollo-clients-angular-android" href="#multiple-apollo-clients-angular-android">#</a> **Q:** There are multiple Apollo clients (Angular, Android, ...). How do you ensure that they have the same feature set? Code sharing isn't an option = is there some kind of "Spec of Apollo" so that another platform can be added easily? And would Apollo for .NET make sense? - Chris\_

**A:** We have an amazing community that helps build all of the view layer integrations in ways that it makes sense. The core library does much of the heavy lifting, but each view layer has their own feature set that make it easier to use in your current area. I'm a big .NET fan and the graphql-dotnet is a great project if you are looking for backend support. For a client, I'd love to see an Apollo-dotnet :wink: - jbaxleyiii

---

<a name="lot-tools-building-getting-bit" href="#lot-tools-building-getting-bit">#</a> **Q:** There are a lot of tools you building and we are getting a bit confused :shrug:‍ is there kind of diagrams show which tools needed for frontend and which for backend? - Stepper

**A:** You are absolutely correct! One of our current focuses is on documenting and making the overall Apollo experience easy from day one to day 1,000. So stay tuned... - jbaxleyiii

The three most important tools you have to worry about are Apollo Client, Server, and Engine. Apollo Server is a Node GraphQL server that implements your schema. Apollo Client allows you to query your schema on the front end. Apollo Engine sits in between the client and the server and enables GraphQL specific tracing, caching, and advanced features such as automatic persisted queries. Hope that helps! 😃 - peggy

---

<a name="work-old-school-legacy-env" href="#work-old-school-legacy-env">#</a> **Q:** I work in a "old school", "legacy" env. - what's your "elevator pitch" for GraphQL / Apollo for both business and architects? - BTM

**A:** Is the best way to empower teams to ship products and features fast on top of their existing applications. Instead of rewriting your entire app, you can expose client focused data endpoints with powerful tools and efficient data transports to make their features fast for end users and developers alike! - jbaxleyiii

---

<a name="detailed-document-blog-post-comparing" href="#detailed-document-blog-post-comparing">#</a> **Q:** Is there a detailed document or blog post comparing GraphQL with OData (and JsonAPI)? It's a question I get a lot when I talk to people about GraphQL. - Chris\_

**A:** There isn't but we would love to feature that on the Apollo blog if anyone wants to write it. - jbaxleyiii

---

<a name="hello-im-using-apolloclient-apolloboost" href="#hello-im-using-apolloclient-apolloboost">#</a> **Q:** Hello, Im using apollo-client with apollo-boost, Is apollo-boost can upload file. using HttpLink ? what is the best approach or config with upload file. - dyesiboy

**A:** File uploads are an advanced feature that Apollo Boost doesn't support because it requires a custom link configuration. To set up file uploads, please read our guide on manually creating a client and use the file upload link: 1) https://www.apollographql.com/docs/react/advanced/boost-migration.html 2) https://github.com/jaydenseric/apollo-upload-client - peggy

---

<a name="react-context-supported-apolloreact-jorge" href="#react-context-supported-apolloreact-jorge">#</a> **Q:** When React Context will be supported by apollo-react? - Jorge

**A:** We currently have a 3.0 alpha out for react-apollo and will be shipping it soon with full context support including SSR! - jbaxleyiii

---

<a name="looks-like-lot-resources-dedicated" href="#looks-like-lot-resources-dedicated">#</a> **Q:** It looks like a lot of resources are being dedicated to creating learning interfaces! :raised_hands: I don't mean to keep your word on it, but do you mind listing them out? So far I've seen - kylemh

**A:** 1) Supporting Wes Bos' upcoming GraphQL course

2. Creating an Apollo edusite

3. Updating the Blog with specific examples

kylemh: Are there any I'm missing and will the edusite feature every tutorial-esque blog post?

All of those learning resources are correct! Another one I'd like to shoutout is Eve Porcello & Alex Banks' new O'Reilly book coming out soon entitled Learning GraphQL. I'm a technical reviewer for the book and have read it already - it's a super awesome resource for learning GraphQL and Apollo 😃 - peggy

---

<a name="regarding-schema-design-modelling-value" href="#regarding-schema-design-modelling-value">#</a> **Q:** Regarding schema design: modelling value objects or relations to objects without an id (just because the api is cleaner than) - how does apollo client handle caching then ... is this bad practice to model types without Ids? - Chris\_

**A:** I like returning a global ID! type for id which lets me refetch that specific data schema wide. I try to not put my actual databaseId as fields if thats helpful. - jbaxleyiii

---

<a name="tell-schema-stitching-subscriptions-see" href="#tell-schema-stitching-subscriptions-see">#</a> **Q:** Tell me about schema stitching for subscriptions. I see this issue is closed: https://github.com/apollographql/graphql-tools/issues/420 but it doesn't seem like a good solution was produced. Does the Apollo team have any suggestions on this front? - alexanderson1993

**A:** I think that closing was probably an accident! I think a good starting point would be to open a new issue an revive discussion of it. - jbaxleyiii

---

<a name="plans-writing-apolloserver-languages-well" href="#plans-writing-apolloserver-languages-well">#</a> **Q:** Are there any plans on writing apollo-server on other languages as well or is node the one and only target? - Lyrrad

**A:** Right now, we're focusing on Node with other JavaScript targets in the works. We think the GraphQL layer should be owned by the product teams and therefore should write their server in JavaScript because they're already familiar with it. We'd love to support more languages in the future if community members wanted to get involved. Check out our recent demo of Apollo Server on Cloudflare workers for an example of Apollo Server run on a JS target other than Node: https://twitter.com/apollographql/status/991499774984507393 - peggy

---

<a name="wanted-ask-using-apollo-cloudflare" href="#wanted-ask-using-apollo-cloudflare">#</a> **Q:** I wanted to ask about using apollo on cloudflare workers, I read all that is available about it, is there any more information about it? it's so cool - Djinnes

**A:** Its still early (but exciting) and two other members of our team have also given talks at SFJS and GraphQLNYC about running graphql at the edge! We would love to talk to anyone interested in this idea and expect a number of articles coming soon :wink: - jbaxleyiii

---

<a name="im-working-helping-org-adopt" href="#im-working-helping-org-adopt">#</a> **Q:** I'm working on helping my org adopt GraphQL and Apollo for our web data layer right now, but we've been having a difficult time figuring out good testing practices with React-Apollo and the render prop components. Any tips or resources you can point towards? - TreTuna

**A:** Great question! Right now, we have a react-apollo/test-utils library that's currently undocumented but we're working on adding a comprehensive guide soon. Also, Wes is covering testing in depth with the new test-utils package in his course 😃 - peggy

---

<a name="team-planning-implementing-graphql-apollo" href="#team-planning-implementing-graphql-apollo">#</a> **Q:** My team is planning on implementing GraphQL with Apollo in concurrent adjacency with a REST API. Essentially, we have plans to sell our API as b2b and they demand REST, but the developers have decided that the best dev experience can be found via GraphQL. - kylemh

**A:** kylemh: I don't think this use-case is isolated to just my company, so I ask: Do you have any strategies and/or tools to help avoid boilerplate in maintaining the same models/controllers in two places at all times?

A couple of options! Often times we see teams in that situation create a REST service that calls into their GraphQL service with predefined queries. If they are on the same server, you can often share the fetching and even model your api params (/:userId/:limit) after arguments in the query. So address will be stored with the person in the cache. - jbaxleyiii

---

<a name="working-selling-org-using-graphql" href="#working-selling-org-using-graphql">#</a> **Q:** In working on selling my org on using GraphQL (server written in Elixir) and Apollo Engine as our aggregate API layer and Apollo for our front end data needs, what would you say are the most exciting things coming up from the Apollo team? P.S. You have all been pumping out some amazing things already this year! - TreTuna

**A:** We're definitely excited about Apollo Server 2.0 and bringing Engine features like caching and persisted queries to Apollo Server core. We're also excited about fullstack caching (with invalidation!) and new tooling involving schema versioning. On the front end, we're super pumped about Apollo Link State 1.0 which should include dynamically adding resolvers for code splitting and some API usability improvements. :rocket: - peggy

---

<a name="anything-similar-mysql-check-statement" href="#anything-similar-mysql-check-statement">#</a> **Q:** Is there anything similar to MySQL Check Statement in GraphQL? To check if for example the user the is calling for the data has the permission to ask that data. - Spoderman

Authorization is best done with either schemaDirectives or custom logic in resolvers to see if a user can ask or return that data. - jbaxleyiii

---

<a name="book-mentioned-learning-graphql-link" href="#book-mentioned-learning-graphql-link">#</a> **Q:** The book you mentioned, Learning GraphQL, is there a link we can bookmark for updates/release info on the book, would be very interested in the read 😃 - Brentontw

**A:** Follow Eve Porcello on Twitter for updates regarding the book 😃 - peggy

---

<a name="say-5-pieces-ui-depend" href="#say-5-pieces-ui-depend">#</a> **Q:** Say that I have 5 pieces of UI that depend on a logged in user, and all 5 could be displayed at once. All 5 have some fields in common and all have several distinct fields. Generally, should all 5 use one "mega query / render prop" that describes all of the data and wrap all 5 elements. Or should each be individualized? Or is there another pattern? - LawJolla

**A:** It depends on your data fetching on your server level, but I like to create a <User> component that shares one query for all basic user information. Then for specific additions in the UI, send a different operation to fetch the additional fields. That let's you render some information immediately while fetching the extra bits which is really nice. - jbaxleyiii

---

<a name="qualities-apollo-team-look-someone" href="#qualities-apollo-team-look-someone">#</a> **Q:** What qualities does the Apollo team look for in someone to join their ranks? Such a distributed team that's on top of the entire GraphQL game! - TreTuna

**A:** Two of our company values are kindness and transparency, so we look for candidates with those qualities 😃 - peggy

---

<a name="update-towards-live-query-spec" href="#update-towards-live-query-spec">#</a> **Q:** Any update towards a live query spec? I'm curious how this could be done without reactive data storage, if at all. - LawJolla

**A:** No update on the spec, but if you are interested in it we would love to work with you to build it! - jbaxleyiii

---

<a name="suggestion-good-resources-graphql-leandrorr" href="#suggestion-good-resources-graphql-leandrorr">#</a> **Q:** Any suggestion of good resources about graphQL? - leandrorr

**A:** @peggy has put a lot of resources as answers to other questions above, maybe take a look at those responses? - jbaxleyiii

---

<a name="hi-watched-youtube-videos-javascript" href="#hi-watched-youtube-videos-javascript">#</a> **Q:** Hi, I have watched youtube videos on javascript, I also practice puzzles on code wars. But, I have been told to really excel in javascript I have to learn a framework such as react. Where do I begin? Need help please. - adroit_machine

**A:** I think what you're doing right now is great! Try building a couple small apps with vanilla JS and then progress to some introductory React tutorials. Good luck in your coding journey!

Kent Dodds has an awesome free intro to React tutorial on egghead: https://egghead.io/courses/the-beginner-s-guide-to-react - peggy

---

<a name="first-thank-amazing-job-yout" href="#first-thank-amazing-job-yout">#</a> **Q:** First of all thank you for amazing job with all yout tools. The question i have is regarding the new coming server. Are the new features going to be plug in adition like Link in Client ? Are there any breaking changes planed? Currently i am in the middle of implementing glq backend using Apollo server so although its super straight forward, should i be aware of something with the new coming version? Cant wait btw ! - farmas

**A:** Nothing breaking! We are planning a pluggable Cache API :heart_eyes: and some opt in schema opinions like error handling practices and schema directives that make building a production ready schema incredibly easy! - jbaxleyiii

---

<a name="using-apollo-client-server-right" href="#using-apollo-client-server-right">#</a> **Q:** We are using Apollo client & server right now in our apps and they quite frankly make GraphQL a breeze to use! However I avoid the React components and instead we use the client directly to preload data during the routing phase because I don't like handling loading states everywhere. So I am very interested in the suspense API and any plans you might have for this once it lands! - Paisley

**A:** We're coming out with a new defer/load API soon for Query components that should make prefetching wayyy easier. As for suspense, we have a 3.0 alpha with an early POC working, which you can read about in this post: https://dev-blog.apollodata.com/a-first-look-at-async-react-apollo-10a82907b48e. I'm previewing another suspense demo in my React Europe talk next week :wink: - peggy
