---
title: Relay Team
date: August 26 2016
---
## Facebook Engineers Working on Relay

| username | question |
| ---: | --- |
| Gabe | Hey all |
| Gabe | The Q&A is starting now, go ahead and post 2 questions for Joe! |
| Gabe | and welcome @en_js !! |
| **en_js** | Hey all! Thanks @Gabe for organizing this. |
| Gabe | its my pleasure 😃 |
| Gabe | thanks for giving us your time |
| **kassens** | Hello |
| Gabe | welcome to the Q&A @kassens |
| Gabe | just an FYI... @kassens is also on the Facebook team.. thank you for being here Jan (https://twitter.com/kassens) |
| John Tran | **[Q&A] What are some testing strategies for Relay apps?** |
| **en_js** | Great first question. This is something that we're still exploring. The most straightforward way to test Relay apps is to use mock data. If you pass regular data to a container, Relay will pass that through to the component as-is. So <Component user={{id: '4', name: 'Zuck'}} /> instead of a user that you got from a parent Relay component. Relay itself is well-tested, so we would encourage that products not focus on testing that the framework works, but rather that product code works as expected given sample data sets. This approach is well suited to unit tests.  |
| **en_js** | We've also found it useful to have one or two integration tests that verify the product loads. |
| **en_js** | But in general this is an area where it would be great to get contributions from the community. If you've found a good way to test Relay components, share it! |
| antmdvs | **[Q&A] could you elaborate on the client state story? It wasn't clear to me from Greg's slide deck.** |
| **en_js** | We're still iterating on the API so details are likely to change - I'll talk more about this in my React Rally talk next week. For now, here's a bit more... |
| **en_js** | ... we've found that for the most part, Relay applications have much less client state than apps purely using Flux/Redux. |
| **en_js** | This is because much of the state is handled by Relay - server data is represented in the store, and the loading state, error handling, pending mutations, etc, is managed by Relay itself. |
| **en_js** | So what we're exploring is the ability to extend the server schema with client fields, and allow developers to modify them locally via an imperative write API. |
| **en_js** | More on this in the React Rally talk |
| antmdvs | Thanks, Joe |
| antmdvs | I hope that talk will be recorded 😃 |
| Ralph | ^^ me too! |
| grahamb | **[Q&A] What are the Relay team's plans for improving the developer experience, especially surrounding documentation? GraphQL was extremely easy to grok, but I've been struggling to understand relay for weeks. The current guide isn't a great getting started example.** |
| **en_js** | We definitely understand that the documentation could be improved. |
| **en_js** | The core team is primarily focused on improving the experience of actually using Relay (performance, APIs, etc). We only have so much time to focus on documentation and tutorials. I think this is a great place for the community to get involved by writing about your experience using Relay, creating guides, etc. We're open to PRs to improve the docs - feel free to send PRs or reach out to us if you're interested in a larger update. |
| grahamb | followup feedback on docs: I'm pretty close to abandoning relay altogether because of the lack of docs. In theory it's perfect for our project, but not if we can't figure it out 😦 |
| grahamb | I can't create a guide for something I don't understand. |
| cameron_moss | we all are having a hard time with it. I can point you to a few resources / examples that we are learning with. It takes time. |
| taion | ask on #relay 😄 |
| **yuzhi** | Have you found any of the videos linked on the website useful? We found that examples help the most. If you have any specific question, I'm sure some people on #relay can help answer them. |
| taion | **[Q&A] is relay 2 for web going to launch concurrently with relay 2 for RN, or only afterward?** |
| **kassens** | We're currently focused on RN as we're excited about optimizations we can bring to phones, but there's nothing specific in the core for the environment. It should probably be directly usable for web as well |
| Ralph | **[Q&A] Can you explain how/if mutations are going to change in relay 2 or in the future?** |
| **en_js** | Going forward (Relay 2) we are moving to static mutation queries. Instead of Relay synthesizing a query for you (from fat & tracked queries), the mutation will be basically what you write. |
| **en_js** | ...this has its tradeoffs |
| **en_js** | ....so you will have to specify more in the mutation query, but the benefit is that a) the mutation matches what you expect b) it's easier to debug and c) we can "persist" the mutation query to improve performance |
| **en_js** | ...as far as configs, we're planning to allow developers to write a lambda (function) that can modify the store after the server results are received. this means that if you need to manually re-sort an array or perform some complex logic you can. |
| **en_js** | ...not via convention. not via configuration. by writing straightforward code. |
| Ralph | Thank you for the answer! Looking forward to Relay 2! |
| Kutagh | I agree with @Ralph. We have been prototyping an application with Relay at work, but due to the complexity of mutations (which were very common in the application) we refactored into React&Redux instead.. Going to keep an eye on Relay 2, keep up the good work 😃 |
| kamek | **[Q&A] Currently on React Native, pushing a new scene that renders a Relay component makes the transition animation choppy is some cases.** |
| kamek | **[Q&A] This happens with the 'old' Navigator API.  |
| kamek | **[Q&A] Are there any future plans to address this type of performance issues on mobile, and what solution would you recommend today? |
| **en_js** | Two things: First, you can improve this today by integrating Relay and RN's InteractionManager. Use Relay.injectTaskScheduler(InteractionManager.runAfterInteractions) and Relay will delay its work during animations to reduce choppiness. |
| **en_js** | Second, Relay2 is simply much faster. As @wincent mentioned in his talk, certain units of work may go from taking multiple frames to less than frame, so this should be much better when Relay work is happening in parallel with animations. |
| **wincent** | For some additional context on the Relay 2 talk last night, I just uploaded the source code of my slides. You can see the speaker notes inline as HTML comments (eg. [Github link](https://github.com/wincent/relay-2-simpler-faster-more-predictable/blob/b777de59999d190a9379d0bfdad750d44c55af41/content/index.html#L323). I've also pushed it to the gh-pages branch so you can see it at https://wincent.github.io/relay-2-simpler-faster-more-predictable/#2 (at least in Chrome), and the presenter view at https://wincent.github.io/relay-2-simpler-faster-more-predictable/?presenter#2 |
| antmdvs | Thanks, @wincent! |
| taion | **[Q&A] what do you see the respective niches for relay 2 and apollo client being?** |
| **en_js** | Great question. |
| **en_js** | First, there are some superficial differences between the two projects. As others have commented here, Relay currently has some limitations: the mutation vocabulary is somewhat limited, for example, and Relay requires that you follow certain schema conventions (best practices, really). In contrast, Apollo is a bit more flexible in terms of no schema restrictions and more expressive mutation configuration options. |
| **en_js** | With Relay2, though, we've addressed many of these concerns. The new mutation API, for example, allows you to arbitrarily modify the store, so that you're not restricted to a limited set of changes. |
| **en_js** | More importantly, the two libraries differ substantially in their philosophy and core use cases.  |
| **en_js** | Apollo was designed with an emphasis on allowing developers to get started quickly - without configuring any build step (no babel plugin). This means that you can drop a script tag into your html file and go. The tradeoff is that Apollo, by its fundamental design, has to do significantly more work at runtime.  |
| **en_js** | In contrast, our focus with Relay is on helping developers build high-performance production-ready apps. For that use case, a small amount of up-front configuration (the babel plugin) is worth it for the long-term scalability and performance improvements. As @wincent discussed in his talk (slides above), we've created a compiler that runs at build time and can optimize queries (doing work at build time instead of runtime) and we can optimize the runtime work in advance. We're still exploring all the opportunities this will enable. By starting from a focus on performance, we've been able to both simplify the framework and provide a solid basis for future advancements. |
| Unowned | **[Q&A] We have little visibility into Relay, what are some good debugging techniques around Relay when working with queries and especially mutations?** |
| **yuzhi** | We recently added RelayNetworkDebug to make it easier to see all the queries Relay requested and the responses we are receiving. RelayMutationDebugPrinter should print out some of the intermediate mutation logic states for a peek into what Relay is trying to do with the different configs. |
| Unowned | Great we'll try it out in our app! |
| chirag04 | **[Q&A] are there any optimization done at fb on the native side for relay with RN?** |
| **wincent** | Abstractly, we're working at multiple levels to extract as much performance as possible, both inside and outside Relay. No matter how fast things get, we can always be faster, so this is something that is going to continue for the foreseeable future. |
| **wincent** | Both the Relay code and the React Native JS code that we use in RN internally at FB is the exact same code that gets shipped out in the open source versions of the projects. But at the same time, we have rich ecosystems of native code that we've been using to build apps for years (GraphQL has been powering the native iOS app for many years now, predating both React Native and Relay). As such, that means we have a diverse native + JS toolset that we can draw from in building an app. We can delegate the responsibility for some work from JS to the native side. An example of this that I mentioned in my talk is the ability to do "native prefetching" on the native side before the JS context has even initialized. Yuzhi also talked in the Q&A about our use of native disk cache to support offline use cases. This is an avenue that we're going to continue to explore. |
| chirag04 | 👍 |
| antmdvs | **[Q&A] Is there a way to initialize the Relay Store from persisted state akin to Redux's initialState?** |
| **en_js** | Not directly, no. The two main use-cases we've seen for this are offline caching and server rendering - both of which are supported. |
| **en_js** | For caching, Relay supports a disk cache API (semi-public at the moment). Some people in the community were starting to work on an OSS implementation (i'll try to follow up with a link). |
| **en_js** | For server rendering, check out https://github.com/denvned/isomorphic-relay/ |
| **en_js** | Which supports populating the local cache with data fetched on the server. |
| cameron_moss | **[Q&A] any updates on managing subscriptions?** |
| **en_js** | We updated the GitHub issue yesterday. Copying the description I wrote [there](https://github.com/facebook/relay/issues/541): |
| **en_js** | > Realtime data in GraphQL is something that we and the community are actively exploring. There are many ways to achieve "realtime" or near-realtime updates: polling, "live" queries, or event-based approaches (more on these tradeoffs on the GraphQL blog). Furthermore, there are a variety of transport mechanisms to choose from depending on the platform: web sockets, MQTT, etc. |
| **en_js** | > Rather than support any one approach directly, we would prefer to allow developers to implement any of these approaches. Therefore, we don't plan to create a RelayMutation-style API for subscriptions. Instead we're working create a "write" API that will make it easy for developers to tell Relay about new data (along the lines of store.write(query, data)). See #559 for more information. |
| **en_js** | > For now, we recommend checking out @edvinerikson's relay-subscriptions module. |
| cameron_moss | awesome, thanks! |
| andrewingram | **[Q&A] When I looked into Apollo, the biggest issue I found was that mutations had to "know" about the data on the page in order to update everything correctly. Relay's fat queries avoids this problem. With fat queries going away in Relay 2, are we still able to get this magic?** |
| taion | ooh beat me to asking that question :p |
| taion | (same for subscriptions to an extent) |
| andrewingram | you may be able to express it better than me 😃 |
| taion | it seems like the best option is to re-use the container fragment? but that seems fragile if there's not a single unique one |
| **en_js** | Great question, there are a couple aspects to this. |
| **en_js** | In Relay2 developers will have to specify the full mutation query, which means knowing about all the things that may or may not have been queried by the application. That's an intentional tradeoff: having a static mutation query enables more potential optimizations. It's also far more predictable. While the magic of fat/tracked queries is cool when it works, it's hard to debug when it doesn't. |
| **en_js** | So overall, we think that static mutations queries are a really great compromise. This is how our native GraphQL clients have worked for years, so this approach can scale. |
| **en_js** | The other aspect is interpreting a mutation response. If you add or delete an edge, you have to tell the store about it. |
| **en_js** | Apollo's approach is very direct - mutations are responsible for knowing how to update data that may exist in the store. |
| **en_js** | With Relay2, we're exploring an approach where mutations express intent instead. |
| **en_js** | For example, this means if you intend to "add" an item to a connection and that connection doesn't exist, the intent can be ignored. If the connection is fetched, it can interpret that intent and add the item. |
| **en_js** | We think this a more flexible and scalable solution, as it allows for updating nested connections more efficiently. |
| taion | on the "adding an item" part |
| taion | the hard part seems like – if i hard-code the mutation response query, but then somewhere else i have a component rendering that connection, that then adds a field that wasn't previously there and thus wasn't in the old mutation response |
| taion | i'd end up trying to render something that's missing. so how does one ensure that these things stay in sync? |
| **en_js** | Yup. As I said, its a tradeoff. |
| taion | would the API allow e.g. re-using a container fragment in that case? |
| **en_js** | Yeah, a mutation query can include a container fragment |
| **en_js** | So that it stays in sync with the component. |
| taion | cool, that would get us most of the way there, though it would introduce the tradeoff of no longer being able to share mutations between our web and RN apps |
| Ralph | is that only relay2? |
| **en_js** | please clarify |
| Ralph | Yeah, a mutation query can include a container fragment |
| Ralph | So that it stays in sync with the component. |
| **en_js** | In current Relay this happens automatically due to fat/tracked queries. |
| Ralph | TY! |
| edvin | **[Q&A] Do you have any rough estimation when Relay2 will be available? Like this year? Next month?** |
| **en_js** | Our goal is to ship production apps using this during this year |
| **en_js** | So hopefully roughly on that timeframe, but we'll give more detail as we have a better idea. |
| edvin | Thanks! |
| Jaz | **[Q&A] is low internet connectivity supported in Relay? I might have to build our app up to the point when there's next to no internet access, to fetch data only when the client gets access to internet.** |
| **en_js** | Supporting low-end mobile devices and/or slower internet connections is definitely a priority. We discuss this in more detail in our recent blog post - https://facebook.github.io/react/blog/2016/08/05/relay-state-of-the-state.html#mobile-perf |
| dw | **[Q&A] Is there planned Java support for Relay/GraphQL?** |
| **en_js** | Relay is specifically targeted at JavaScript environments. GraphQL, however, is a language agnostic technology and there are Java and Scalar implementations. |
| taion | **[Q&A] how do persisted queries w/relay 2 look from a full-stack perspective? it seems like there's an orchestration requirement for the persisted queries to be released on the graphql server before the front-end release** |
| taion | given that, is there some fallback or other edge case handling if e.g. that deployment failed? |
| **en_js** | The main aspect that requires orchestration is around schema changes. If you add a new field/argument/type/etc and then rely on that in client code, you have to push the schema changes to e.g. staging/prod before shipping the client code that uses it. |
| **en_js** | Persisted queries don't require code deployment. They can be saved in a database (associating an ID with a given query text) and a generic endpoint can retrieve the query text for the input query ID, execute the query, and return the results. |
| taion | ahh, makes sense |
| Robert Kraig | **[Q&A] In conjunction with using GraphQL, did facebook move all their data from "(n) database" to GraphQL as a mirrored dataset? or is GraphQL sort of like translation layer for document datasets?.. Or other?** |
| **en_js** | Note that GraphQL is not a database. It's a layer that abstracts access to your existing data store (or stores, or REST endpoints, etc). |
| Robert Kraig | Rgr. |
| Robert Kraig | **[Q&A] Relay even though it appears as a simplified dataset, do you feel this actually improves debugging your existing dataset? It seems like a fairly complex wrapper over your existing dataset. Potentially adding more complexity to an already complex workflow.** |
| **en_js** | Yes, we've seen that Relay enables developers to focus more on their product, and less on repetitive and error-prone aspects of data-fetching, caching, consistency, etc. |
| **en_js** | For simpler applications the added complexity may or may not help - use it if its helpful. |
| **wincent** | There are some really nice high-level videos on GraphQL here: http://graphql.org/docs/videos/ |
| machadogj | **[Q&A] Could you compare GraphQL/Relay to falcor et all? Or point to some good talks/articles/etc...** |
| **en_js** | GraphQL/Relay and Falcor both aim to solve similar use cases - efficiently fetching data from a server and caching that data on the client. |
| **en_js** | A couple key differences: GraphQL is strongly typed, which makes it possible to build all kinds of great tools (like GraphiQL) or inspect the schema to generate native code or optimized JavaScript. |
| **en_js** | GraphQL & Relay are also designed to allow efficiently fetching data in one round trip, whereas Falcor's use of Observables encourages more round trips. |
| **en_js** | Falcor is therefore more suited to low-latency, fast networks |
| **en_js** | GraphQL/Relay are more suited to general connectivity. |
| antmdvs | **[Q&A] @wincent, one of your slides entitled "DataLoader and caching" depicts a cache b/t DataLoader and the Storage layer.. Would DL have loader objects (for Redis for example) that delegate to loader objects for (for SQL let's say) if there's a cache miss?** |
| **wincent** | In the simplest case, DataLoader will just cache stuff in memory (in process). That is very helpful within the context of a single request. In a real system, your data-fetching methods probably have an additional layer of caching (for example, memcache in front of MySQL or similar). Your Redis with fallback to SQL would be another fine example of that. |
| antmdvs | so the fallback takes place within Redis or the caching layer is orchestrating between Redis and the backend? Would DataLoader ever orchestrate this or would it only be concerned with Redis? |
| ngbrown | **[Q&A] Is there any interest in integrating with the typing information in TypeScript?** |
| **en_js** | How so? |
| andrewingram | (similar for flow, but i'd like to be smarter with my flow annotations for props that are relay objects) |
| ngbrown | By using type definitions from TypeScript to generate the GraphQL definitions?  Is that how it works?  You mentioned that it was strongly typed... |
| **en_js** | We have a prototype of integration between Relay and Flow that our amazing intern Sam Pepose built this summer, so hopefully this could also be adapted to work with Typescript. We're still iterating on this though, so no clear timeline. |
| **en_js** | And yes, the idea is that it uses the GraphQL type system to understand the shape of the data that Relay containers will receive as props. |
| greweb | **[Q&A] Do you plan to add more escape hatch in Relay? Especially around cache and manipulating underlying data store. e.g. to workaround server not (yet) fully compliant like mutation where you can't express the full impact.** |
| **en_js** | Yes! For Relay2 we are exploring an imperative mutation API that allows developers to make arbitrary changes to the store if necessary. For simple cases the current config is appropriate, but there will be an escape hatch to write arbitrary data if necessary. |
| greweb | Cool! Thanks |
| andrewingram | **[Q&A] I've heard it mentioned on several occasions that authentication flows (login/logout) aren't a good fit for GraphQL. But I have in-progress implementations that seem to work fine. But it feels like i'm in a bit of a limbo as to whether i'm implementing an anti-pattern or not - i've yet to find an explanation as to why it's not a good solution (aside from the nastiness of updating context post-mutation on the server), are you able to clarify this?** |
| **en_js** | The main issue with using mutations for login/logout is that these actions can effectively invalidate the entire cache |
| **en_js** | So while yes, you can implement login/logout as mutations, we've found it helpful to model these outside of GraphQL. |
| **en_js** | We wipe the cache before/after these actions to ensure data is correct for the given authentication state. |
| andrewingram |true, but i've split my entire graph up into public, private and viewer-specific types, so I know exactly what would be affected |
| **en_js** | @andrewingram if that works for you, that's great! |
| **en_js** | doing auth outside of GraphQL is just a recommendation |
| antmdvs | **[Q&A] Is it feasible for Relay to approach fragment composition in such a way that would eliminate the need for developers to write ${ChildComponent.getFragment('childFragmentName')} ?** |
| antmdvs | Sorry, maybe GraphQL question there |
| **en_js** | Can you elaborate? (re fragment composition) |
| **wincent** | I don't think DataLoader would handle the orchestration; it just wants you to provide a method that delivers a promise of an eventual value, and it's up to you to provide an implementation. It's all going to be implementation-specific of course, but I imagine it would generally easier to wrap the cache and the store together behind some overlaying abstraction. An example of that at FB would be TAO (https://www.facebook.com/notes/facebook-engineering/tao-the-power-of-the-graph/10151525983993920/), which uses memcached and MySQL under the covers. |
| **yuzhi** | What would they write instead? or were you thinking about having Relay infer it? |
| antmdvs | inferring it |
| **en_js** | It isn't clear how Relay could infer fragment composition. |
| **wincent** | Have you seen the fragment syntax in Relay 2? (ie. ...SomeOtherFragment) |
| antmdvs | sry i'm a noob but i did see a slide about that |
| **wincent** | So it doesn't address your point about inference but it does make the syntactic cost of referring to other fragments lower. |
| Kutagh | the main issue with inferring is, for Relay being able to optimize the queries, it would need to know what the component exactly needs... That is why you are composing the fragments from child components. Otherwise, you would need to define a fragment somewhere and then everywhere use that fragment, fetching everything rather than just what you need... |
| antmdvs | **[Q&A] is there a realized lift in dev productivity when using GQL/Relay, namely for React comp authoring?** |
| antmdvs | i mean, if all the schema/data is already there, it seems like a dream |
| **en_js** | It's hard to measure quantitatively. But yes, we've found Relay to help our teams move fast. |
| **en_js** | That's why we keep investing in it 😃 |
| antmdvs | just wondering if that's usually the case in the real world |
| Kutagh | the value proposition of GraphQL / Relay is, only fetch what you actually use 😉 |
| **en_js** | We've heard lots of great feedback from people using it outside of FB |
| **en_js** | See for example, from https://fabric.io/blog/building-fabric-mission-control-with-graphql-and-relay |
| **en_js** | > For a project like mission control, GraphQL and Relay were a near-perfect solution, and the cost of building it any other way justified the investment. Now that we have these pieces in place, we see ourselves using them again and again. |
| antmdvs | 👍 |
| **en_js** | Thanks everyone for all the great questions! Reach out to us with questions on twitter (I'm @en_js) |
| Gabe | okay the Q&A is over 😃 thank you so much @en_js @wincent and @yuzhi for your time... we really appreciate it and we'll post a transcript on twitter of this Q&A 😃 |
| **en_js** | or ask questions on Github! |
| **en_js** | Thanks @Gabe for having us! |
| antmdvs | Thanks! |
| Kutagh | yeah, thanks for your time 😃 |
| taion | thank you! |
| John Tran | Awesome Q&A |
| dgmills914 | excellent. thanks  @en_js @wincent and @yuzhi |
| andrewingram | thanks for the great answers 😃 |
| Gabe | it's our pleasure @en_js !! 😃 |
| **en_js** | 😃 |
| Gabe | locking down the channel now ... we have Christopher Chedeau and Ryan Florence doing Q&A's next month.. here is the schedule: https://paper.dropbox.com/doc/Reactiflux-QA-Schedule-7QAfGzEqfKjtN9UmhYYM9 |
