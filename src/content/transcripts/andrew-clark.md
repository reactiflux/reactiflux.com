---
title: Andrew Clark
date: 2017-04-12
time: 12:30-2pm PT / 7:30-9PM GMT
location: Q&A Channel Reactiflux
description: "React.js Core Team at Facebook. Co-creator of [Redux](https://redux.js.org/). Creator of [Recompose](https://github.com/acdlite/recompose)"
people: "[@acdlite](https://twitter.com/acdlite)"
---

## Co-creator of Redux, Facebook React Core Team Member

<a name="plans-port-recompose-typescript-flayan" href="#plans-port-recompose-typescript-flayan">#</a> **Q:** Do you have any plans to port recompose to typescript? - _FlayaN_

**A:** So first of all, a bit of a confession: I haven't worked much on Recompose in the last few months since I joined the React team. The primary reason is that some parts of the API will need to change in light of the changes we're making in React Fiber. So I'd like to wait until the Fiber stuff, particularly around async scheduling, is more fleshed out. To answer your actual question: I would love to get TypeScript working with Recompose. (Although I don't have experience with TypeScript so I'd appreciate some help from the community.) I'm also very interested in Flow types, which I've attempted a few times. Turns out it's a bit tricky to type higher-order components in a way that works with both class components and functional components. But once I turn my attention back to Recompose (hopefully this summer) this is near the top of my todo list.

---

<a name="proptypes-moved-react-latest-release" href="#proptypes-moved-react-latest-release">#</a> **Q:** Why was proptypes moved out of react in the latest release of react? - _akki1234_

**A:** First, to be absolutely clear, what's being deprecated is accessing PropTypes from the main React object: React.PropTypes. Not the PropTypes themselves. They simply live in a separate package now.

We did this for a few reasons. It's not really about code size, since the validators are mostly stripped out in production, anyway.

One, there's really nothing React-specific about PropTypes. They are generic runtime type validators. In fact, there were already many packages on npm that mirrored the PropTypes from React (literally just a copy-paste from the React source). Splitting PropTypes out makes it easier for other projects to depend on them, without taking a dependency on React.

Another reason is that we wanted to communicate that PropTypes are only one possible way to do type checking in React. You can also use static typing via Flow or TypeScript. Internally at Facebook, Flow is preferred for all new components. We use it to type all of our JavaScript code, including React components.

Finally, splitting PropTypes into a separate repo helps keep the React issue tracker focused on actual React issues.

We realize this decision has caused some consternation and confusion since we released last Friday. In retrospect, we should have done a release candidate cycle and communicated these changes to library authors much further in advance. We'll take this as a learning experience and do better next time :smiley:

---

<a name="ive-multiple-people-express-concerns" href="#ive-multiple-people-express-concerns">#</a> **Q:** I've had multiple people express their concerns about "what will happen when React removes context" - I know there are some plans to change the API, what do you think should / will happen to context? - _BTM_

**A:** We have no plans to remove context; or rather, we will always have some API for addressing the use case that context fulfills, which is to pass data to deep children without explicit passthrough of props.

What will happen though is the specific context API and implementation that exists in React today, which has a few problems with both correctness (context updates being blocked by intermediate shouldComponentUpdate->false) and performance. This is why we resisted documenting context until recently. I can't tell you what the new API will look like because we're still not sure. Once we release Fiber, we'll have a better foundation upon which to build cool new features like improved context.

In the meantime, the recommendation is to use an abstraction around context so that when the API changes, you can change the abstraction without changing all your components. E.g. React Redux's connect() HOC.

---

<a name="since-purpose-fiber-essentially-able" href="#since-purpose-fiber-essentially-able">#</a> **Q:** Since the purpose of fiber is essentially being able to achieve 60fps on the web, will react ever have some helpers built-in for animation (other than and perhaps better than ReactCSSTransitionGroup)? Or should such helpers exist in user-land libraries? - _everdimension_

**A:** The purpose of Fiber is a bit more nuanced than that (I may be to blame for pushing that line... I wrote that in my React Fiber Architecture doc last summer before I worked for FB and joined the React Team. That doc was my attempt to understand something from the outside with little context by just reading the code. So some of it is outdated. I intend to update it sometime in the next few weeks, now that Fiber is closer to being fully implemented.)

To answer your actual question, the React team feels we're not in the business of providing built-in solutions for animation or state management or other areas that can be solved in userland by our awesome community. ReactCSSTransitionGroup was created at an earlier time when the community was young and it made more sense to bundle ready-made solutions. What we will continue to do instead is investigate how people are using React and how we can improve React's suitability for those use cases. Fiber will have some really cool scheduling capabilities that will enable animation library authors to do exciting things that aren't currently possible. I can't wait to see what y'all build!

---

<a name="hey-andrew-whats-difficult-challenging" href="#hey-andrew-whats-difficult-challenging">#</a> **Q:** Hey Andrew! What’s the most difficult or challenging work left to officially ship v16? - _iamdustan_

**A:** React 16 is running for 100% of users on facebook and messenger. So it's basically done. The biggest remaining step I believe is to figure out our sever-side renderering story. We don't really use SSR at Facebook, which is why this has come last. And then of course we need to get Fiber rolled on for React Native, too. Hopefully we'll get 16 out sometime this summer!

Also, it's important to note that React 16 is our first Fiber release, but it will be Fiber running in compatibility mode — that is, with synchronous scheduling that mimics how React-of-today works. The more exciting release will be React 17, which will enable async scheduling by default and will help us realize the true promise of the new Fiber architecture. There's still lots of work to be done on this front. We just this week have first round of meetings to discuss how to incrementally adopt async Fiber internally at Facebook.

But React 16 will have improved error boundaries and you'll be able to return arrays and strings from render! So still exciting!

---

<a name="think-react-team-facebook-could" href="#think-react-team-facebook-could">#</a> **Q:** Do you think the React team at Facebook could be doing anything better re: communicating short-term and long-term goals and changes to the community--specifically those outside Facebook involved with core community projects and React itself? - _Aweary_

**A:** Hi Brandon! Yes, this is absolutely something we need to work on.

Everyone on the React team came from the open source world. It's something we're really passionate about. However, we've historically found it difficult to nurture outside contributors for a few reasons. One is that codebase is pretty complex and hard to navigate. I still don't totally understand everything that's going on in React Stack. React Fiber helps this problem a bit, but it's still not the easiest project in the world for first-time contributors. Another reason it's difficult is that the API for React is very small, so other than bug fixes, most changes require lots of coordination with the entire core team. For example, it's unlikely we'll accept an outside PR that reimplements the state API. It's hard make big changes without lots of background and context.

But we recognize the problem and we're actively looking into ways make this better. And we'll work on our overall communication with the community, too. I think we do a pretty good job overall, but incidents like the 15.5 release show that there's always more we can do.

---

<a name="know-2-question-queued-already" href="#know-2-question-queued-already">#</a> **Q:** I know there are 2 question queued already but since I will forget it if I wait longer, I'll just ask, sorry for that: you mentioned context earlier. the docs still state that context is an experimental api and it's likely to break in future releases. any plans on making context stable in the medium or long term or will it just remain in an experimental state like ... forever? - _manuelbieh_

**A:** I'll just quote my previous response from above

> I can't tell you what the new API will look like because we're still not sure. Once we release Fiber, we'll have a better foundation upon which to build cool new features like improved context.

It's "stable" in the sense that we'll always have some version of context, but it probably won't be the current API.

Hope that answers your question!

---

<a name="experience-moving-rollup-internally-away" href="#experience-moving-rollup-internally-away">#</a> **Q:** How has your experience been moving to rollup internally and away from webpack? - _dmarr_

**A:** I'm really excited about our new build setup. Aside from the perf and code size benefits of using flat bundles, it's going to make our release process so much smoother. Right now, releasing React is a lengthy, error-prone, largely manual series of steps that makes it difficult to release new versions. We want to get to the place where we can make frequent patch and minor releases with confidence, so we can iterate more quickly and ship bugfixes much faster.

Also, we never used Webpack to bundle React AFAIK. So it's not quite accurate to say we're moving away from Webpack. Rollup is great for libraries like React, but Webpack is perhaps more suited to applications. It will still work great for your React apps.

---

<a name="hi-andrew-rendertostring-server-rendering" href="#hi-andrew-rendertostring-server-rendering">#</a> **Q:** Hi Andrew! Is renderToString / server rendering going to change much with Fiber? I know Sebastian mentioned adding / replacing with streaming support but I'm curious what the the plan for that is before v16. (we are heavily dependent on recursive, async renderToString calls in https://github.com/ericclemmons/react-resolver, so curious how fiber will affect). - _nathanael_

**A:** I can't comment much on this because we haven't really decided. Streaming rendering is definitely an area of interest. But once we make more progress, we'll likely post an issue or PR to GitHub :smiley:

---

<a name="think-reactxp-facebook-planning-comeup" href="#think-reactxp-facebook-planning-comeup">#</a> **Q:** What do you think about reactXP? Is facebook planning to comeup with something similar to reactxp? - _shubham_

**A:** I don't know much about React XP other than what I got from skimming through the docs a few days ago, but I think it's awesome that a company like Microsoft is investing so many resources into the React ecosystem. Projects like that (and stuff like React VR) make it clear that the scope of React goes way beyond building web apps. Exciting times!

---

<a name="function-components-still-slower-class" href="#function-components-still-slower-class">#</a> **Q:** Are function components still slower than class components and if so, will that change? - _pluma_

**A:** I wouldn't say functional components are slower, but one disadvantage is that they don't have shouldComponentUpdate. It's likely we'll add something like this for Fiber (it's currently implemented in master; not sure if it will make it to the final release) because shouldComponentUpdate will be crucial for dealing with starvation in async Fiber. But if you're just comparing a non-SCU class component to a non-SCU functional component, the functional component is actually slightly more lightweight because there are fewer checks to perform. And there will be additional optimizations we can make in the future.

---

<a name="fiber-reputation-complex-rightfully-think" href="#fiber-reputation-complex-rightfully-think">#</a> **Q:** Fiber has a reputation for being very complex (rightfully), what do you think are the primary sources of complexity in Fiber? - _Aweary_

**A:** Much of the complexity of Fiber comes from the fact that we don't use the JavaScript stack. We re-implement it using our own data structures (called, tada, fibers). And there's lots of mutation and code that doesn't resemble the type of code you might be used to seeing in JavaScript. I think once you get used to it, the relatively low number of abstractions makes it easy to dive into a specific slice of the code and make changes. But there's definitely a learning curve. It also takes a while to figure out the best way to debug Fiber; infinite loop when are common. I want to update my React Fiber Architecture doc some time soon to make it easier to onboard new contributors. I've given in-person codebase overviews a few times and it reinforced for me just how much stuff there is to take in when you're first getting started.

---

<a name="plans-mixins-class-components-thesbros" href="#plans-mixins-class-components-thesbros">#</a> **Q:** What are the plans for mixins with class components? - _thesbros_

**A:** We have no plans to add mixins to class components. Dan wrote a great post about the various problems with mixins that I'll refer you to: https://facebook.github.io/react/blog/2016/07/13/mixins-considered-harmful.html

Higher-order components are one recommended alternative

---

<a name="chance-expanded-howto-cookbook-even" href="#chance-expanded-howto-cookbook-even">#</a> **Q:** Any chance for an expanded howto (or a cookbook even) for recompose? It's a pretty powerful stuff but hard to use just by reading API. - _rag_

**A:** Yes, proper documentation for Recompose has been on my todo list for over a year, haha. I'm slightly ashamed I haven't gotten around to it yet. But as I said in my answer above, I intend devote more time to Recompose once Fiber is a bit more settled. Until then I'm grateful to Ivan Starkov and CT Wu (don't know their handles on here) for keeping the ship afloat while I'm off doing React stuff

---

<a name="happens-start-working-low-priority" href="#happens-start-working-low-priority">#</a> **Q:** What happens if we start working on a low priority update, but are interuptted by a high priority update to the same component? - _FlayaN_

**A:** In that case, the low priority update will be aborted (but still in the queue). The high priority update will be processed and flushed to the screen. Then we'll go back to the low priority update, but it will be rebased on top of the high pri one. This is why the functional form of setState((state, props) => newState) is important, and why you shouldn't put side-effects in there (because it may be called more than once)

---

<a name="us-new-one-contribute-react" href="#us-new-one-contribute-react">#</a> **Q:** For those of us who are new, how does one contribute to React project(s)? - _Testiinnplayin_

**A:** I would suggest subscribing to the GitHub issues tracker and keeping your eye out for oppotunities to contribute. We try to label issues that we think are good for beginners. Then submit a PR! Depending on the scope of the issue, it might be wise to reach out to someone on the team before starting on something new. Non-code contributions are also extremely helpful. We always love getting PRs to improve the documentation.

And of course staying involved here on Reactiflux is a great way to contribute to the React community :smiley:

---

<a name="think-going-style-react-components" href="#think-going-style-react-components">#</a> **Q:** how do you think we're going to style our react components two years from now? sass? (post)css? js objects? :stuck*out_tongue: - \_Tobi*

**A:** Personally, I hope it's not with stylesheets. I think one of the CSS-in-JS techniques will eventually win out, but seems like we're still in the early stages. If we are writing stylesheets in a few years, at the very least I would hope that it's with something like CSS Modules. The ability to isolate styles to a specific component is such a huge win. Facebook has been doing that for years and I just don't know how we ever survived without it :smile:

---

<a name="kind-browser-apis-would-like" href="#kind-browser-apis-would-like">#</a> **Q:** what kind of browser APIs would you like to see in the future? requestIdleCallback is a clear win for Fiber since it works well with the scheduler. Are there any specific or general API(s) that you would like to see to make it easier for React to be fast/efficient/smart? - _Aweary_

**A:** Web Assembly

---

<a name="think-facebook-help-adding-integrated" href="#think-facebook-help-adding-integrated">#</a> **Q:** Do you think facebook can help with adding more integrated UWP support for react-native, so that more third parties support all 3 platforms on their libs? - _FlayaN_

**A:** Forgive my naivete, but what is UWP? Is that Windows Phone?

<a name="universal-windows-platform-poor-microsoft" href="#universal-windows-platform-poor-microsoft">#</a> **Q:** Universal Windows Platform, for now poor microsoft is hosting their own version on a separate repo: https://github.com/Microsoft/react-native-*windows*

**A:** I don't know if I'm the right person to answer that. But the way open source usually works at Facebook is that we only open source projects that we're actively using. So it's not that we hate Windows users, we just don't build Windows apps.

---

<a name="regards-styling-react-components-noticed" href="#regards-styling-react-components-noticed">#</a> **Q:** In regards to styling react components I noticed react appears to have a 1v1 mapping of styles to css, while React Native takes a couple of liberties since it doesn't interact with a browser. Does react fiber take any such liberties or have built in styling methods e.g. TouchableOpacity. Also speaking from my frustrations with flex (justified flex child when overflowed getting cut off) - _JOE_

**A:** Styling in React 16's DOM renderer will be exactly the same as it is now. One thing we're interested in for the future is integrated layout. So instead of writing flexbox using CSS, you'd use a set of React components. But this is still in the "research" phase :smile:
