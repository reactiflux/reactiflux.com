---
title: Dan Abramov
date: 2016-04-21
location: Q&A Channel Reactiflux
description: "Facebook React.js Core Team"
people: "[@dan_abramov](https://twitter.com/dan_abramov)"
---

## Facebook React Core Team Member

<a name="started-facebook-plan-work-react" href="#started-facebook-plan-work-react">#</a> **Q:** When you started at Facebook, was it your plan to work on the React Core team, or did you get hired just to work on "something at Facebook"?

**A:** The initial plan was that I would work on React Native (mostly Android) team in London. However we mutually decided it might make more sense for me to help out the Core folks instead.

---

<a name="plans-features-redux-making-way" href="#plans-features-redux-making-way">#</a> **Q:** Are there any plans for any of the features of Redux making their way into React Core?

**A:** In some form, maybe. We want React to be “what you need to build a UI”, and predictable state management is a part of this. I might be helping out with this later this year, but there are no specific plans yet. In any case it won’t be as simple as adding Redux itself to React—more like “what can we learn from it that would apply well to a component abstraction that React provides”.

---

<a name="whats-plan-future-specifically-personal" href="#whats-plan-future-specifically-personal">#</a> **Q:** What's your plan for the future, specifically personal development wise? Where do you go from being a very-high-profile open source person and now facebook employee working on open source?

**A:** I want to ship some significant contributions to React, which I haven’t been able to yet. I’m working on dev tooling API that will hopefully help us move forward faster without breaking third-party tools, so I’m looking forward to finishing this work. I also hope that hot reloading is eventually going to be less flaky as tools mature, and that it becomes a part of React development experience you don’t need to set up, kinda like it happened in React Native. This would make me happy. In general, I want to learn more from my teammates and become a better engineer.

---

<a name="im-curious-hear-thoughts-using" href="#im-curious-hear-thoughts-using">#</a> **Q:** I'm curious to hear your thoughts on using a declarative data fetching framework (like Relay) with a client state container (like Redux). Have you seen any good patterns for making the two work together smoothly?

**A:** Declarative data fetching is great! I haven’t seen anything that would mix those concepts well yet in JavaScript. I know Om Next exists but from what I heard you need to build a lot by yourself, whereas Relay takes care of more things but is harder to customize. This is something Relay team is thinking about, and I’m sure they’ll come up with some solution to the local state management this or the next year.

---

<a name="whats-opinion-someone-using-rx" href="#whats-opinion-someone-using-rx">#</a> **Q:** Whats your opinion, if someone is using Rx for Ajax, MouseEvents etc, does it make sense to go fully Rx and use it for State Management as well (e.g. through a single Subject) or use Redux? Greetings from Berlin.

**A:** Sure, use scan() from Rx. That said we just landed observable interop support in Redux 3.5.x so it can be used directly with compatible libraries as a subject. Really, this is up to you. (https://github.com/reactjs/redux/pull/1632)

---

<a name="week-ago-twitter-said-planning" href="#week-ago-twitter-said-planning">#</a> **Q:** About a week ago on twitter you said you we're planning on taking a break from social media. This week you are streaming on twitch and doing a QA. I don't have a question I just want to call you out on this.

**A:** I guess what I really meant is I’m starting to treat social media is write-only. I used to answer to all notifications and messages but I just can’t handle the volume anymore. Twitch is an example of one-way communication that scales just fine without me burning out.

---

<a name="one-latest-releases-redux-ability" href="#one-latest-releases-redux-ability">#</a> **Q:** On one of the latest releases of Redux the ability to interop with observables was added. What was the reason behind this and possibilities this might add to redux.

**A:** This just makes Redux less awkward to use from codebases that also use Rx. You can see the examples in the tests of the PR I linked to. This doesn’t make any huge difference. Redux was always behaving like a Subject so we’re just providing a more natural interface to folks who want to treat it as one.

---

<a name="think-standardization-react-boilerplates-need" href="#think-standardization-react-boilerplates-need">#</a> **Q:** What do you think about standardization of react boilerplates? Do we need a generic, specific starter to achieve a universal understanding of codebases

**A:** I think in general boilerplates can be terrible because they put together a bunch of experimental technologies and don’t explain when you’d want to use either. I don’t suggest anyone to use the boilerplates. Play with them to get a feel for how pieces can be used together—sure, steal some parts to your own setup—sure, but base a project on a boilerplate? I think this is a bad decision.

---

<a name="updates-improvements-perfutils-working-blocked" href="#updates-improvements-perfutils-working-blocked">#</a> **Q:** Any updates on those improvements to PerfUtils you were working on? Is it blocked by the general tooling work you're doing now? Really looking forward to getting my hands on better perf tools.

**A:** New perf tools are going to be pretty much the same as the old ones externally. The change is internal, so that React core refactorings stop breaking these tools every time. Yeah, it’s blocked by more general work, or to be precise, I’m extracting the more general work (with tests) from my proof of concept PR. https://github.com/facebook/react/pull/6549, if merged, will be the first meaningful step to this.

---

<a name="thoughts-opinionated-way-declare-asynchronous" href="#thoughts-opinionated-way-declare-asynchronous">#</a> **Q:** Do you have any thoughts on having a more opinionated way to declare asynchronous data dependencies for components for use with both client side and server side routing?

**A:** Maybe the way Relay does it?

---

<a name="would-approach-css-complex-website" href="#would-approach-css-complex-website">#</a> **Q:** What would be your approach for CSS in a complex website (not necessarily Facebook) ? Inline, CSS Module, Radium, PostCSS, CSSNext, Aphrodite, all that stuff

**A:** I haven’t been keeping up so I can’t say. I’d probably use CSS modules with autoprefixer, and test Aphrodite for some components to get a feel for it. I heard it’s good.

---

<a name="opinion-hard-get-job-working" href="#opinion-hard-get-job-working">#</a> **Q:** In your opinion how hard is it to get a job working with react now? With a lot of side project experience but not experience actually doing it full time

**A:** I don’t know but it seems like it’s exploding in popularity so having a few visible side projects with React might very well help you land a relevant job.

---

<a name="redux-best-paradigm-data-intensive" href="#redux-best-paradigm-data-intensive">#</a> **Q:** Is Redux the best paradigm for data intensive and async heavy applications and why?

**A:** I don’t think any paradigm is “best”. I think Redux works well for apps with complex local mutations and data structures. Redux doesn’t really solve async work anyhow so you’d need something like Rx, or Redux Saga, or channels, etc, to manage async dependencies if you have any.

---

<a name="plan-work-product-eg-facebookcom" href="#plan-work-product-eg-facebookcom">#</a> **Q:** Do you plan to work on the product again (e.g. Facebook.com) for a while?

**A:** Yeah, I’d love to! Maybe in a year or two. I kinda miss product development, but then I’ve been working on a product for the past 4 years so it’s liberating to actually get paid to work on the tools—something I’ve never been able to do before.

---

<a name="interop-web-components-something-care" href="#interop-web-components-something-care">#</a> **Q:** Is Interop with Web Components something you care about? (any ideas on how they will mesh with React in the future)?

**A:** Personally, I’m not very much interested in web components. React kinda supports them, but since their primary API is imprerative, and they are tied to a particular platform, there are limited things we can do with them. I think Sebastian’s “DOM as a Second-class Citizen” touches on that: https://www.youtube.com/watch?v=Zemce4Y1Y-A

---

<a name="using-immutable-thinking-drop-next" href="#using-immutable-thinking-drop-next">#</a> **Q:** I have been using Immutable but was thinking to drop it in the next project, is it essential? I tend to not to like when it breaks destructuring and so

**A:** It’s kinda nice but one of the biggest use cases I know (deep updates) is solved in Redux by reducer composition. I would expect that Immutable performs better on mobile devices because there’s (I assume) less GC pressure, but I’m not sure. In short: create a sample app that imitates the kinda of data size and change speed you expect in your app, and profile it. No other way to tell if dropping Immutable is going to work for you.

---

<a name="opinion-mobx" href="#opinion-mobx">#</a> **Q:** What is your opinion of Mobx?

**A:** Well, the example code looks very clean, and it’s nice that it “just works” with great performance out of the box. I haven’t looked into it in detail, so I can’t vouch for much else!

---

<a name="plans-integrate-serverside-rendering-relay" href="#plans-integrate-serverside-rendering-relay">#</a> **Q:** Are there any plans to integrate server-side rendering into Relay Core? If so, when do you anticipate this will happen? SSR is imperative for SEO. Currently, the only 'real' solution is to use isomorphic-relay. You could also use node-prerender for SEO but not ideal.

**A:** “SSR is imperative for SEO” — not sure this is the case, at least not for Google anymore. It’s been able to crawl JS sites for a while now. As for Relay, I saw some work on using context so yea, pretty sure it’s on the roadmap. I suggest checking their meeting notes in the repo to get a sense of what’s being worked on.

---

<a name="said-seo-accurate-google-crawl" href="#said-seo-accurate-google-crawl">#</a> **Q:** What you said about SEO is not accurate. Just because Google can crawl something does not mean it's optimal at all. SEO is what makes or breaks a site. It is one of the most important things to take into account when building for the web. Not something to take lightly. The reality is that SPA's are becoming the standard for everything from blogs to e-commerce to insanely complex UIs. There is literaly nothing I can't build with RGR ( React GraphQL Relay). This is hands down the best UI solution I've ever come across. The weak link however, is SEO. How to deal with it. It's very difficult to get a straight answer from anyone about this topic. Truth is, I just don't think many people know the answer. However, if RGR wants to explode like it can, it needs to implement SSR. It's the final thing that is missing.

**A:** I have no stake in this game, sorry if I said something misleading.

---

<a name="think-redux-side-app-know" href="#think-redux-side-app-know">#</a> **Q:** Do you think redux side of an app should know about the UI that's going to talk to it or should it be architected in a generic way that if UI changes, you don't have to make any changes to your state/actions? For e.g. say I want to pop a toast message after I create a new object. Should this happen at the component level or should a toast action be triggered after the create object action.?

**A:** Making UI easily replaceable is certainly one of the goals of Redux. Actually notifications are my favorite example. You write a reducer and a component rendering the current notification. Then you decide that you want to display a stack of notifications instead of just one. You don’t need to change any components showing notifications, as what would be the case if you were to operate on the state directly in the components. You just keep dispatching an action that leads to a different state change under the hood.

That said don’t take it too far. I think firing actions in lifecycle hooks is occasionally convenient. As with anything, try it both ways and see which one works better 😃

---

<a name="seems-rebounding-bounce-towards-less" href="#seems-rebounding-bounce-towards-less">#</a> **Q:** There seems to be a rebounding (a bounce towards less) of support for SSR lately. My opinion is that if your webapp does not very much depend on SEO, e.g. a blog CMS, then perhaps SSR is a complication you can avoid. The question: What detail would I have to tell you about my webapp for you to say, "Yes, it's worth the hassle of doing SSR."?

**A:** Is it supposed to be consumed by low-end devices in countries with slow internet speeds? If so, does it serve mostly textual information, or is any benefit from SSR going to be drowned by image size anyway?

---

<a name="dislike-react-react-ecosystem-kind" href="#dislike-react-react-ecosystem-kind">#</a> **Q:** What do you dislike the most about React (or React ecosystem) and why? And what kind of problems do you think the community should be focusing on?

**A:** I don’t like that we have a ton of boilerplates for everything. I don’t think that this is a very healthy situation. I think this is a sign that React should learn to do more (e.g. styles, hot reloading, better data management) to be useful as a UI library.

---

<a name="strategies-avoiding-oss-burnout-find" href="#strategies-avoiding-oss-burnout-find">#</a> **Q:** What strategies do you have for avoiding OSS burnout? I find that the more I give, the more people want. From watching Ryan and Michael tweet, it seems that one must be very careful with how much guilt for unresponsiveness one allows oneself to feel.

**A:** I haven’t been very good at this but.. I recently unwatched all repos except that a couple that I actually care about. I put “no maintenance intended” on a few projects I don’t plan to change, and deprecated a few projects that I know were dead ends. This really helps.

I try to give commit access to anyone who made a substantial PR so that they can take over maintaining the repo. This really works in some cases, and doesn’t work as well in their cases, but it has been taking a lot of stress off. There are many people who’d like to get active in open source, and all they lacked is a project to pour energy into.

Make them collaborators early and let them flourish. I also found that having a “troubleshooting” and “faq” docs, as well as highly upvoted answers on SO, is really important. If you spend 20 minutes every few days answering the same question, it’s a good sign you can solve this once and for all by putting it somewhere out there.

---

<a name="example-splitting-redux-app-multiple" href="#example-splitting-redux-app-multiple">#</a> **Q:** Do you have an example of splitting up a redux app into multiple npm packages? how would you approach that?

**A:** This sounds very generic, not sure if I could give a good answer. I don’t really think it’s different from splitting any other JS code?

---

<a name="thoughts-reduxsaga" href="#thoughts-reduxsaga">#</a> **Q:** What are your thoughts on redux-saga?

**A:** It’s an awesome project, and the kind of thing I was hoping somebody would do when I wanted to have a concept of middleware in Redux.

---

<a name="aside-existing-projects-something-really" href="#aside-existing-projects-something-really">#</a> **Q:** Aside from your existing projects what is something you really interested in working on? (Doesn't need to be react related)

**A:** Some cool product. Or Babel / Flow. Or something low level. Anything I’m really bad at 😄

---

<a name="would-handle-splitting-redux-store" href="#would-handle-splitting-redux-store">#</a> **Q:** How would you handle splitting up the redux store, so you can pick and choose parts of it to use in your app.

**A:** Export separate reducers, let the consuming code which ones to combine.

---

<a name="serverside-language-choice" href="#serverside-language-choice">#</a> **Q:** Server-side language of choice?

**A:** Tough one. JavaScript 😄 ? I never really learned any server side language. I liked C# but nobody uses it anymore, and I used Python but I couldn’t like it.

---

<a name="many-people-facebook-working-react" href="#many-people-facebook-working-react">#</a> **Q:** Other than you, how many people at Facebook are working on React core full-time?

**A:** React core team is something like 5-7 people (it’s fluctuating, the boundaries aren’t set in stone). React native team (and perf team) is way larger and is split beween US and UK.

---

<a name="miss-first-languages-worked" href="#miss-first-languages-worked">#</a> **Q:** Do you miss the first languages you worked on?

**A:** I used to miss C# but I’ve gotten very comfortable with ES2015, and I don’t anymore. So not really.

---

<a name="think-ecosystem-around-redux-anything" href="#think-ecosystem-around-redux-anything">#</a> **Q:** what do you think of the ecosystem around redux? anything you think is missing?

**A:** I’m impressed by what people put out. I think there’s a tendency to over-Redux-ize things (e.g. a component that could’ve been a normal React component but for some reason forces you to mount a reducer). But a lot of it is really cool. Obviously I’d like some combination of Redux and Relay-like data fetching to appear.

---

<a name="youve-got-great-way-breaking" href="#youve-got-great-way-breaking">#</a> **Q:** You've got a great way of breaking things down into simple abstractions. Any recommendations for good books about software design?

**A:** Thanks! I don’t really know if this is true. Redux is largely inspired by Flux, and it was clunky in the beginning until Andrew Clark suggested the pattern of reducer composition, similar to what Elm does.

I think in general reading about functional programming is very beneficial. I read some “standard” books like Code Complete when I was a teenager so I don’t remember if they taught me something important or not. I also like good blogs, like http://prog21.dadgum.com/archives.html.

---

<a name="think-would-future-react-ecosystem" href="#think-would-future-react-ecosystem">#</a> **Q:** What you think would be the future or React ecosystem and its influence over JS ecosystem?

**A:** I think it already had a lot of influence over JS ecosystem. I hope that React manages to deliver on its future milestones like incremental reconciler, a declarative animation system that works well with gestures, or rendering to GL.

---

<a name="name-two-things-like-better" href="#name-two-things-like-better">#</a> **Q:** Name two things you like better about London than St. Pete's, and the thing you miss most (cultural, family excluded) about Russia.

**A:** I spent two minutes on this and can’t recall a single thing I miss, or that I would like more there.

---

<a name="see-reduxs-relation-elm-elm" href="#see-reduxs-relation-elm-elm">#</a> **Q:** How do you see Redux's relation to Elm and Elm architecture in insight? They absolutely have things in common, but other things (eg: how things are composed) is quite different. Language feature differences aside, where did you draw the line where "No, this will not be like how it's done in Elm", so to speak, or things that were done differently on purpose.

**A:** That’s a great question. In general I think that I was interested in being close to Flux because that’s what I knew well, so I just wanted to make a little more composable and work better with hot reloading. So my guideline was “take Flux and do what needs to be done so hot reloading, time travel, and server rendering are easy to implement”. Elm architecture is much more ambitious, but also has some problems: whenever you want to put a component in another component, you have to write the code to connect their update functions too. I didn’t want to go the same way because we already have a very easy composition model in React. It’s also convenient that React local state can often be used as a fallback when global state is too inconvenient. This wouldn’t be pure by Elm’s standards.

---

<a name="would-like-react-redux-based" href="#would-like-react-redux-based">#</a> **Q:** Would you like that some React and Redux based framework was created? I mean opinionated framework in contrary to the unopinionated ecosystem.

**A:** Yeah, sure. There’s http://shasta.tools that kinda does this, but I think it’s not officially out yet.

---

<a name="writing-large-app-scratch-using" href="#writing-large-app-scratch-using">#</a> **Q:** I am writing a large app from scratch using react + redux (converting an old legacy app). Any suggestions on things I should do early on or things I should look out for so that things are less painful as the code size grows?

**A:** I’d say normalize the data early. In general, read through https://redux.js.org/faq/ and have a good grasp of everything discussed there.

---

<a name="far-think-react-redux-course" href="#far-think-react-redux-course">#</a> **Q:** How far do you think React (and redux of course) is from Universal JS (mobile, native mobile, desktop, native desktop, server) ? Is it still a myth? Your thoughts?

**A:** Redux is just a state library so it works anywhere. React is pretty close to being available on all those platforms (except native desktop perhaps, but MS is bringing it for Windows which I assume means all platforms).

---

<a name="excited-future-react-near-term" href="#excited-future-react-near-term">#</a> **Q:** what are you most excited about with the future of React? Both the near term next release version and distance/dreaming future?

**A:** Incremental reconciler and rendering to GL.

---

<a name="dont-know-topic-recent-london" href="#dont-know-topic-recent-london">#</a> **Q:** Don't know if off topic. In a recent London React Meetup there was an example of React Native performing animations quite well. Can it be used to make 2D games instead of cocosJS or similar frameworks that compile to native and expect it to do the job?

**A:** I don’t know, but you can give it a try 😃

---

<a name="core-meeting-notes-continue-posted" href="#core-meeting-notes-continue-posted">#</a> **Q:** Will the core meeting notes continue to be posted?

**A:** Yeah. We skipped a meeting last week because I was sick and everyone else was busy. I’ll post today’s notes later.

---

<a name="hints-might-coming-react-16" href="#hints-might-coming-react-16">#</a> **Q:** Any hints on what might be coming in React 16?

**A:** Error boundaries, although I hope they’ll ship some time during 15 instead, but who knows 😃 . Mostly major releases mean breaking changes, so they don’t necessarily add new features—just remove the old cruft that prevents us from implementing them.

---

<a name="pressing-needs-redux-docs-also" href="#pressing-needs-redux-docs-also">#</a> **Q:** What are the most pressing needs for the Redux docs? (Also, why is the new FAQ the best part of the docs, and why is the person who wrote that page awesome? 😃 )

**A:** I try to keep them as open issues with "docs" tag. And yeah, Mark’s help has been amazing.

---

<a name="word-stateless-functional-component-optimizations" href="#word-stateless-functional-component-optimizations">#</a> **Q:** Any word on stateless functional component optimizations coming down the pipe?

**A:** Sebastian has been thinking about this, but he’s busy with thinking about incremental reconciler instead so I wouldn’t count on this any time soon.

---

<a name="think-mobx-potential-next-big" href="#think-mobx-potential-next-big">#</a> **Q:** Do you think Mobx has the potential to be the "Next Big Thing" after redux? What do you think are some of the disadvantages of using something like Mobx apart from the smaller ecosystem?

**A:** I don’t know why Redux even became a “big thing” so I have no idea. It was just a project I made for a conference talk. 😃 I don’t know about disadvantages; it’s better to ask the MobX author(s).

---

<a name="saw-redux-used-makeitopencom-f8" href="#saw-redux-used-makeitopencom-f8">#</a> **Q:** I saw redux is used on the makeitopen.com f8 conference app, I was wondering how much is redux used in Facebook?

**A:** Just a tiny bit in some new projects.

---

<a name="incremental-reconciler-mean-know-reconciler" href="#incremental-reconciler-mean-know-reconciler">#</a> **Q:** What does "incremental reconciler" mean? I know what the reconciler does but why does it need to be "incremental"?

**A:** Currently when you setState() or ReactDOM.render(), this happens recursively for the whole subtree. Some components can bail out but it’s still somewhat expensive, especially on mobile.

This is where people like to say that React is slow 😃 . However in reality your screen size is limited. Most of the time is often spent updating things that are not on the screen.

If React knew about what’s on the screen (hint: inline styles), it would be able to prioritize updates to those components, and only update the offscreen components when it’s idle. This would make reconciliation “incremental” because it would happen in prioritizable chunks.

---

<a name="kenye-wants-know-get-hair" href="#kenye-wants-know-get-hair">#</a> **Q:** Kenye wants to know how he can get hair like yours

**A:** I’m happy to swap

---

<a name="project-contribute" href="#project-contribute">#</a> **Q:** Are there any project of yours we can contribute to?

**A:** Yes, I’m working on React Hot Loader 3 but don’t have the time to write the docs to release it as stable. Help is much appreciated: https://github.com/gaearon/react-hot-loader/issues/243.

---

<a name="possible-define-lifecycle-hooks-like" href="#possible-define-lifecycle-hooks-like">#</a> **Q:** Will it be possible to define lifecycle hooks like componentDidMount etc. for stateless function components? or we should just stay with classes for this?

**A:** There are no such plans. Yea, use classes for this. We might add functional stateful components later that might allow this, but this is distant future.

---

<a name="better-store-state-component-people" href="#better-store-state-component-people">#</a> **Q:** When is it better to just store state in a component? people sometimes seem to use Redux for everything and not store state in components at all.

**A:** Write it both ways. If it’s more hassle to do in Redux, use local state. There’s no substitute to good judgement 😃 Also: https://redux.js.org/faq/organizing-state#do-i-have-to-put-all-my-state-into-redux-should-i-ever-use-reacts-setstate

---

<a name="would-want-werent-programmer-also" href="#would-want-werent-programmer-also">#</a> **Q:** What would you want to be if you werent a programmer? Also how are you enjoying London?

**A:** I don‘t know what I’d be doing, really. I’d like to learn to produce music.

---

<a name="reducers-place-detect-error-condition" href="#reducers-place-detect-error-condition">#</a> **Q:** If your reducers are the place where you can detect an error condition, what are the best practices for propagating that back to the user? (Think an invalid game move)

**A:** Not sure this is easily answerable, it depends a lot, and I’m not sure what exactly is being asked. Maybe this helps: http://stackoverflow.com/questions/34403269/what-is-the-best-way-deal-with-fetch-error-in-react-redux

---

<a name="propagate-shouldcomponentupdate-functional-component-children" href="#propagate-shouldcomponentupdate-functional-component-children">#</a> **Q:** Why not propagate shouldComponentUpdate to functional component children? To children functional comps.

**A:** Not sure what you mean. If you mean that React doesn’t let you define shouldComponentUpdate, well, I don’t know why this is the case. Maybe we want to do it differently later. It’s better to look to React repo and discussions in it for this answer, as I don’t have one.

---

<a name="feel-celebrity-status-developer-ie" href="#feel-celebrity-status-developer-ie">#</a> **Q:** How do you feel about your "celebrity status" as a developer (ie. having 27k twitter followers)... is it overwhelming. humbling...?

**A:** Yeah, I’m not sure how this happened so it’s still surprising. I’ve been trying to answer notifications, but since last week I don’t anymore because it is too stressful. I think that other ways of communication (e.g. streaming coding sessions) scale better so I intend to do more of that.

---

<a name="major-shifts-think-well-see" href="#major-shifts-think-well-see">#</a> **Q:** What are the major shifts you think we'll see in the world of frontend dev in the next 3-5 years?

**A:** I have no clue 😃
