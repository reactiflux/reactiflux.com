---
title: Sophie Alpert (June 2016)
date: 2016-06-09
location: Q&A Channel Reactiflux
description: "Facebook React.js Core Team"
people: "[@sophiebits](https://twitter.com/sophiebits)"
---

## Facebook React Core Team Member

<a name="plans-support-web-worker-based" href="#plans-support-web-worker-based">#</a> **Q:** Are there plans to support a web worker based rendered in React Core ? Angular2 has support for it in core _- axemclion_

**A:** right now we're not considering web workers in depth because it's difficult to carve off pieces that can be parallelized independently -- simply moving React to a separate thread while executing DOM operations on the main thread would free up the main thread but likely wouldn't improve responsiveness overall. so instead we're looking more at how we can do concurrent work on the main thread and cancel in-progress updates if new high-priority input arrives
we might experiment a little more with threads/workers on React Native, but that would likely be more along the lines of running parts of Relay in a separate thread since it's still hard to split up the component tree

---

<a name="ever-think-youd-learning-fibers" href="#ever-think-youd-learning-fibers">#</a> **Q:** did you ever think you’d be learning about fibers and coroutines to implement a JavaScript UI library? 😃 _- iamdustan_

**A:** can't say I ever considered it, but I suppose I didn't expect that I would either!

---

<a name="advantages-new-fiber-reconcilier-bring" href="#advantages-new-fiber-reconcilier-bring">#</a> **Q:** What advantages will the new fiber reconcilier bring to React? _- Aweary_

**A:** we're hoping that it can support concurrency better as I mentioned above and pausing work on one part of a tree to go switch to another; in addition it's designed to support more features like returning multiple components from render and the basic building blocks needed to support layout in React -- still early days though so we'll see where it goes

---

<a name="clue-seb-mckenzie-opensource-optimizations" href="#clue-seb-mckenzie-opensource-optimizations">#</a> **Q:** Any clue if Seb Mckenzie will opensource the optimizations he unveiled that make react faster? _- jamestwiggle_

**A:** Sebastian McKenzie talked at react-europe about an experimental project that could make React (and other JS) start up faster; note that this only speeds up the initial loading of React and not the actual speed of rendering -- generally we use projects in production before considering open-sourcing them, just to make sure they're battle-tested and to prevent us from getting distracted from building something that's actually useful, but once we're using it in production it seems likely that we'll open-source it if it's useful

---

<a name="help-organize-react-meetupsconfs-vancouver" href="#help-organize-react-meetupsconfs-vancouver">#</a> **Q:** I help organize React meetups/confs in the Vancouver area. Do you know anyone at Facebook who helps organize meetups, conference, does community outreach, etc... that you would be able to put me in touch with? _- EvNaverniouk_

**A:** unfortunately we're a pretty small team and don't have anyone working much on community involvement so I don't think we'll have time to help out, sorry

---

<a name="significant-developerfacing-changes-pipe-returning" href="#significant-developerfacing-changes-pipe-returning">#</a> **Q:** any significant developer-facing changes in the pipe? returning multiple components from `render` is pretty big, that on its way? _- vcarl_

**A:** nothing in the immediate term planned -- if things with the new reconciler work out then we could do multiple components in render and potentially some other new primitives that could be used to build layout and other similar features; we'd also like to introduce a "stateful functional component" syntax that would allow us to support most components while giving React more flexibility to make optimizations (for instance, to not allocate a backing instance for the component) but don't know what we want that syntax to look like yet

---

<a name="optimizations-general-dev-opportunities-heads" href="#optimizations-general-dev-opportunities-heads">#</a> **Q:** are there any more optimizations (or general dev opportunities) in your heads for SFC? is there any ETA for recent ones (PureComponent etc) hitting master? _- Andarist_

**A:** we're going to look soon at what it would take to optimize stateless functional components and see how much of a benefit we can get; hopefully React.PureComponent can land soon but I wanted to figure out what we're doing with functional components at the same time and find something that everyone's happy with

---

<a name="see-syntheticevent-potential-tool-extending" href="#see-syntheticevent-potential-tool-extending">#</a> **Q:** Do you see the SyntheticEvent as a potential tool for extending events and giving them more useful keys, or is the aim just to normalize events across browsers/platforms and stop there? Is using the SyntheticEvent object to grab data considered a potentially good idea, or a dangerous anti-pattern? _- duncan_

**A:** for now we're planning to mostly stick to the DOM specs for the events in React DOM but I could see React Native's events developing more properties over time

---

<a name="moving-layout-react-important-jamestwiggle" href="#moving-layout-react-important-jamestwiggle">#</a> **Q:** Why is moving layout to React Important? _- jamestwiggle_

**A:** the most obvious place that it can help is for components that want to render a different design based on the size available; currently people render a placeholder and then measure the DOM in componentDidMount which is a bit clumsy and inefficient -- if things work out, we can also give people the power to build new layout primitives as components so that (as one example) you could have created the flexbox spec entirely in user space without waiting for browsers to support it

---

<a name="wouldis-react-open-sort-community" href="#wouldis-react-open-sort-community">#</a> **Q:** Would/Is React open to some sort of community RFC process for larger features, specifically things that may not be of much use to fb but may be to others. Right now discussion issues tend to either, languish, get lost to bikeshedding, or never move past "this is a good idea we should do eventually". Personally I've wanted to jump in and work on some bigger things, but it can be hard to et feedback from all the related parties (and react-core can be a moving target for things that touch renderers) _- monastic.panic_

**A:** yes, we've talked about making a separate repo for RFCs and I think it's something we'd like to do -- we're still worried about the RFCs getting lost to bikeshedding but hopefully we can figure something out that works for everyone. one middle ground that has worked well for RN is to have a read-only, public discussion group where the core contributors can discuss and anyone interested can watch.
arguing about APIs is tiring but I think also important so we can try to make sure we're building the right thing

---

<a name="enzyme-rely-getpublicinstance-provide-instance" href="#enzyme-rely-getpublicinstance-provide-instance">#</a> **Q:** in enzyme we rely on `getPublicInstance` so we can provide an instance to test against with certain things, and SFCs return `null`, so we have to use the `_instance` property. Once SFCs have no backing instance (which is happening eventually right?) I'm not sure how we'll do this, will there be a better way? _- Aweary_

**A:** not sure what your exact requirements are, but our general idea would be to either have a separate stateful test renderer which creates instances for every component or to emit "debug events" that a test tool like enzyme could listen to in order to reconstruct its own tree with whatever information you need (which is how the rewritten perf tools in 15.1 are built)

---

<a name="project-excited-interested-see-unfold" href="#project-excited-interested-see-unfold">#</a> **Q:** Any other project you are excited about or interested to see unfold? _- kennetpostigo_

**A:** I'm cautiously excited for the new reconciler but it's still early days so it's hard to know if everything will work out -- overall I've been trying to focus on developer experience lately and doing things like improving warning messages, which I think is important overall for React users and which hopefully you'll see in the next release

---

<a name="making-dynamic-script-loading-easier" href="#making-dynamic-script-loading-easier">#</a> **Q:** Making dynamic script loading easier without mixins in the future possibly? _- jamestwiggle_

**A:** I don't think I understand, can you rephrase?

<a name="say-want-load-stripe-fblogin" href="#say-want-load-stripe-fblogin">#</a> **Q:** say I want to load Stripe of FBLogin to my react component, theres 2 ways ive seen done, using react-script-loader mixin or

```js
(function (d, s, id) {
  const element = d.getElementsByTagName(s)[0];
  const fjs = element;
  let js = element;
  if (d.getElementById(id)) {
    return;
  }
  js = d.createElement(s);
  js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "facebook-jssdk");
```

_- jamestwiggle_
**A:** I don't think there's any magic solution here but I also don't think mixins are super necessary -- you can make a generic JS module in your app for loading external scripts (which shouldn't need to be particularly different from loading internal modules), and call it or subscribe in componentDidMount much like any other store in your app -- you always need to decide what to display when the script is still loading so there's inherent complexity that you just need to handle

---

<a name="team-lead-react-team-ormore" href="#team-lead-react-team-ormore">#</a> **Q:** is there a "team lead" for the React team? Or--more generally--I'm curious about the structure of the React core team at Facebook? _- Aweary_

**A:** we have a people-manager (Tom Occhino, who also manages the Flow team) but otherwise we don't have any formal structure within our 6-person team; we just choose projects and work collaboratively

---

<a name="new-recommended-way-sharing-functionality" href="#new-recommended-way-sharing-functionality">#</a> **Q:** Is the new recommended way of sharing functionality between components Higher Order Components over container components and mixins? _- calebmer_

**A:** in many cases it makes sense to simply split out utility functions into their own modules rather than doing anything React -- but in a lot of cases it does make sense to use higher-order components, especially for data fetching; hopefully we'll be able to write up some recommendations soon with examples about various mixin alternatives

---

<a name="last-time-checked-around-014x" href="#last-time-checked-around-014x">#</a> **Q:** Last time I checked (around 0.14.x), the Synthetic Event system accounted for almost a quarter of React's minified bundle size - what does it give React over the "like React but fewer KBs" libraries which have popped up in a tradeoff for the extra size? `onChange` normalization is one thing I'd miss, but presumably people writing apps of any size/audience with lighter alternatives will start bumping into the problems this system solves? _- jbscript_

**A:** we don't want to get to a place where there are many different variants of React; it's important that people can easily publish components on npm and just use them without having to configure anything differently. in addition, we haven't seen much evidence that byte size is a significant problem for React so when working on performance we've been focusing on other areas we can improve

---

<a name="plan-move-dom-related-stuff" href="#plan-move-dom-related-stuff">#</a> **Q:** Is the plan to move all DOM related stuff from React.DOM to the react-dom package? _- simonsmith_

**A:** the 'react' package contains the things needed to define components, whereas 'react-dom' contains the code to actually render them; you could actually make a separate renderer that does something with React.DOM.div(...) (equivalent to React.createElement('div', ...)) so 'react' really is a more correct place for them over 'react-dom' -- but we do recognize that they feel a little weird in the 'react' package and most people don't need them so we'll likely split them out to a separate package (see https://github.com/facebook/react/issues/6169)

---

<a name="hey-ben-dan-abramov-mentioned" href="#hey-ben-dan-abramov-mentioned">#</a> **Q:** Hey Ben... Dan Abramov mentioned you started as a core contributor before you ended up on the Facebook React team... just curious about how all that went down? _- Gabe_

**A:** while working at Khan Academy in 2013, I saw React when it was released on Hacker News and started looking into it then -- it seemed like a good fit for a project I was working on so I went home that weekend and rewrote my project in React (and deployed it two weeks later, making me the first non-FB production user of React); I was curious about the implementation so I jumped into the code and fixed bugs when I encountered them and over time just continued to fix bugs and eventually add new features to React in my spare time
eventually I figured it made more sense for me to just work at Facebook, so here I am 😃

---

<a name="curious-string-refs-look-deprecated" href="#curious-string-refs-look-deprecated">#</a> **Q:** Curious why string refs look to be deprecated in a future version of React. Is it simply that callbacks can already handle basic references / are more versatile? Subtle way to discourage the use of ref's as an escape hatch for component communication? \*-

BradColthurst\*

**A:** not to discourage people, though that could be a nice side-effect? a handful of reasons reasons: (1) string refs make it less clear that there's a timing aspect involved and that the ref only becomes available at a certain point in the mount cycle, whereas function refs make it a little clearer, (2) function refs are more flexible and you could read some property from or call a method on the node without storing it, (3) if you have a helper function outside your class that returns a component with a string ref, it's unclear where that ref will be attached, and (4) we track which component is the "owner" to attach refs to using a stateful module within the 'react' package, which is intellectually gross but can also complicate things in a practical sense and means you it's harder to use multiple versions of the 'react' package (which should otherwise work correctly)

---

<a name="whats-favorite-movie-sotojuan" href="#whats-favorite-movie-sotojuan">#</a> **Q:** What's your favorite movie? _- sotojuan_

**A:** not sure, sorry 😃

---

<a name="whats-status-vjeuxs-css-explorations" href="#whats-status-vjeuxs-css-explorations">#</a> **Q:** what's the status of vjeux's css explorations? _- jared_

**A:** -

---

<a name="facebook-using-one-implemenation-flux" href="#facebook-using-one-implemenation-flux">#</a> **Q:** is facebook using one implemenation of Flux or there are projects internally using different implementations? _- Alx_

**A:** we use the official flux implementation https://github.com/facebook/flux as well as redux for some projects and probably others

---

<a name="angular-ember-better-react-calebmer" href="#angular-ember-better-react-calebmer">#</a> **Q:** What is Angular or Ember doing better at than React? _- calebmer_

**A:** both Angular and Ember do a nice job with providing a cohesive experience that makes it easy to get started and learn everything in one place (including ember-cli) -- it would be nice if we could develop something similar for React while still making it easy to adopt in existing applications if you don't want all of the pieces

---

<a name="serverside-rendering-officially-supported-relay" href="#serverside-rendering-officially-supported-relay">#</a> **Q:** Will server-side rendering be officially supported in Relay? The Relay ecosystem currently requires a third party library "isomorphic-relay" _- John Tran_

**A:** not sure on where the Relay team is on that, sorry -- I know that we experimented with SSR in the past but don't know the current status

---

<a name="redux-fit-facebook-relation-relay" href="#redux-fit-facebook-relation-relay">#</a> **Q:** Where does Redux fit into Facebook in relation to Relay? _- Setsunai_

**A:** complementary I think, as is React's built-in component state -- Relay excels at fetching data from a graphql server but doesn't work as well when you're managing client-only data, Redux can be great for larger applications but can also be a lot of boilerplate for a simple app, and React state is easy to get set up with but can be cumbersome to scale -- hoping we can try to unify these at least a little over time but not sure what that would look like

---

<a name="hardest-react-bug-fixed-till" href="#hardest-react-bug-fixed-till">#</a> **Q:** What is the hardest React bug you fixed till now? _- vramana_

**A:** https://github.com/facebook/react/issues/2410 was pretty hard to track down -- the fix I eventually put in isn't complex but it's unfortunately also a bit of a hack

---

<a name="whatre-interesting-problems-experiments-taking" href="#whatre-interesting-problems-experiments-taking">#</a> **Q:** what’re the most interesting problems and experiments taking place in the UI/product engineering spaces today? _- iamdustan_

**A:** -

---

<a name="ever-gonna-support-standard-way" href="#ever-gonna-support-standard-way">#</a> **Q:** Is there ever gonna be support for a "standard" way of setting up your workflow in regards to react, webpack, babel, es2015, JSX etc. etc. It's currently a huge jungle.. _- Panen_

**A:** right now our team doesn't have the bandwidth to make this happen but we certainly appreciate the advantages it would give, especially for new React users, so I'm hoping we can make time for this someday

---

<a name="view-1-graphql-new-query" href="#view-1-graphql-new-query">#</a> **Q:** What is your view about 1/ GraphQL as a new query environment and 2/ alternative GraphQL implementations, like Graphene ? Do you see them as "experimental" projects ? _- Xavier_

**A:** haven't used GraphQL personally but it seems like a very solid idea and we've had a lot of success with it at Facebook so I'd certainly use it for the next product I build; haven't looked into Graphene, sorry, but I'm in favor of anything that makes it easier to build GraphQL servers

---

<a name="youre-gonna-create-simple-slightly" href="#youre-gonna-create-simple-slightly">#</a> **Q:** If you're gonna create a simple slightly complex app with real time functionality, what's gonna be your stack(web and mobile) 😜? _- pierrevert_

**A:** not sure where Relay and GraphQL are on live stuff at the moment but I'd probably just start with React DOM+Native, Relay, GraphQL and try to branch out from there if anything's missing -- not sure what I'd do for a server, haven't been super enamored with any of the Node-based web frameworks

---

<a name="personal-projects-want-work-jamestwiggle" href="#personal-projects-want-work-jamestwiggle">#</a> **Q:** Any personal projects you want to work on? _- jamestwiggle_

**A:** not too much, though I'd love to find an excuse to use Rust on something

---

<a name="airbnb-hypernova-project-think-benefit" href="#airbnb-hypernova-project-think-benefit">#</a> **Q:** what do you about AirBNB Hypernova project? how do you think it can benefit us? _- Andarist_

**A:** haven't looked at hypernova much yet -- we didn't see great success when we tried React SSR at Facebook but it's obvious that other companies have seen more benefit so I'd love to see how React DOM can continue supporting server-side rendering and hopefully make improvements to it

---

<a name="programming-languages-comfortable-whats-personal" href="#programming-languages-comfortable-whats-personal">#</a> **Q:** what programming languages are you most comfortable with and whats your personal favorites? _- Aweary_

**A:** in descending order, probably JavaScript, Python, C, Ruby, Objective-C, Java, Hack (PHP), Swift -- might have missed some. honestly I'm pretty happy working in most of those and am not too picky, though I definitely like ML-style type systems (algebraic data types w/ pattern matching, non-nullable) and Rust excites me because it falls into that category and seems pretty versatile

---

<a name="whats-future-observables-react-manicakrasiac" href="#whats-future-observables-react-manicakrasiac">#</a> **Q:** what's the future of observables in React? _- ManicAkrasiac_

**A:** it's been on hold as we try to figure out what's the best API and best programming model for the long term (ex: can we make things more efficient overall if we don't need to store subscriptions on every component?) but we might revisit data-loading solutions if we can get the new reconciler working

---

<a name="two-parts-weakness-react-developer" href="#two-parts-weakness-react-developer">#</a> **Q:** Two parts, If a weakness for React is developer experience, will Facebook be the one to fix that problem or will that be left to competing community implementations? Second part, is a unified developer experience possible for React? _- calebmer_

**A:** at Facebook we mostly focus on the things that will help Facebook, which tends to make good, solid libraries overall but also means we don't end up focusing on things like the new project experience as much since FB devs never encounter that. I'm always looking to the community for ideas and to build out things we don't have time to work on, but we also want to reduce fragmentation in the community when possible so could consider pulling a little more of the ecosystem into React proper (ex: maybe a data management solution combining the best parts of Relay/Redux/setState as I mentioned above, if we can figure out something good)

---

<a name="whats-future-plans-context-introduction" href="#whats-future-plans-context-introduction">#</a> **Q:** What's the future plans for `context`? This introduction seems like a complete opposite direction from pure components etc. _- hkjorgensen_

**A:** context can be abused to make data flow impossible to follow which is why we haven't encouraged it much but is also important for making certain types of APIs (as an example, you can think of how every component inherits its font from the parent component as a type of implicit propagation done by the browser which would likely be done using context in React) -- our context API still has some holes (ex: updates aren't guaranteed to make it to children if there's an intervening shouldComponentUpdate) but once we patch those up I think you'll see gradually more use of it over time
the "coroutine" component type in the new experimental reconciler can potentially support some of the same use cases as context does now, so we'll see where that goes
