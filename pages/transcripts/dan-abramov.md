---
title: Dan Abramov
date: April 21 2016
---
## Facebook React Core Team Member

| username | question |
| ---: | --- |
| katana | **Dan, when you started at Facebook, was it your plan to work on the React Core team, or did you get hired just to work on "something at Facebook"?** |
| **gaearon** | The initial plan was that I would work on React Native (mostly Android) team in London. However we mutually decided it might make more sense for me to help out the Core folks instead. |
| mealeyst | **Dan, are there any plans for any of the features of Redux making their way into React Core?** |
| **gaearon** | @mealeyst In some form, maybe. We want React to be “what you need to build a UI”, and predictable state management is a part of this. I might be helping out with this later this year, but there are no specific plans yet. In any case it won’t be as simple as adding Redux itself to React—more like “what can we learn from it that would apply well to a component abstraction that React provides”. |
| iamdustan | **Dan, can we be friends?** |
| **gaearon** | @iamdustan I’m friends with anyone who wrote a custom renderer! |
| Gabe | 👍 |
| montogeek | bummer, i thought we were friends 😄 |
| iamdustan | 😍 |
| mxstbr | **Dan, what's your plan for the future, specifically personal development wise? Where do you go from being a very-high-profile open source person and now facebook employee working on open source?** |
| **gaearon** | @mxstbr I want to ship some significant contributions to React, which I haven’t been able to yet. I’m working on dev tooling API that will hopefully help us move forward faster without breaking third-party tools, so I’m looking forward to finishing this work. I also hope that hot reloading is eventually going to be less flaky as tools mature, and that it becomes a part of React development experience you don’t need to set up, kinda like it happened in React Native. This would make me happy. In general, I want to learn more from my teammates and become a better engineer. |
| ultralame | **Hi there! I'm curious to hear your thoughts on using a declarative data fetching framework (like Relay) with a client state container (like Redux). Have you seen any good patterns for making the two work together smoothly?** |
| **gaearon** | @ultralame Declarative data fetching is great! I haven’t seen anything that would mix those concepts well yet in JavaScript. I know Om Next exists but from what I heard you need to build a lot by yourself, whereas Relay takes care of more things but is harder to customize. This is something Relay team is thinking about, and I’m sure they’ll come up with some solution to the local state management this or the next year. |
| ultralame | good to hear, thanks! 🙏 |
| slightlytyler | @ultralame been thinking about that too, I love working with redux from the component side but the actual data layer feels kludgy |
| AVRAAM | **Hey Dan, whats your opinion,  if someone is using Rx for Ajax, MouseEvents etc, does it make sense to go fully Rx and use it for State Management as well (e.g. through a single Subject) or use Redux?  Greetings from Berlin.** |
| **gaearon** | @AVRAAM Sure, use scan() from Rx. That said we just landed observable interop support in Redux 3.5.x so it can be used directly with compatible libraries as a subject. Really, this is up to you. (https://github.com/reactjs/redux/pull/1632) |
| jailbot | **About a week ago on twitter you said you we're planning on taking a break from social media. This week you are streaming on twitch and doing a QA. I don't have a question I just want to call you out on this.** |
| **gaearon** | @jailbot I guess what I really meant is I’m starting to treat social media is write-only. I used to answer to all notifications and messages but I just can’t handle the volume anymore. Twitch is an example of one-way communication that scales just fine without me burning out. |
| jailbot | Thanks for the reply |
| kennetpostigo | **On one of the latest releases of Redux the ability to interop with observables was added. What was the reason behind this and possibilities this might add to redux.** |
| **gaearon** | @kennetpostigo This just makes Redux less awkward to use from codebases that also use Rx. You can see the examples in the tests of the PR I linked to. This doesn’t make any huge difference. Redux was always behaving like a Subject so we’re just providing a more natural interface to folks who want to treat it as one. |
| kennetpostigo | Thanks for clearing that up 😃 |
| zebrasinpyjamas | **what do you think about standardization of react boilerplates?** |
| **gaearon** | @zebrasinpyjamas Not sure what you mean by standardization? |
| zebrasinpyjamas | @gaearon do we need a generic, specific starter to achieve a universal understanding of codebases |
| **gaearon** | @zebrasinpyjamas I think in general boilerplates can be terrible because they put together a bunch of experimental technologies and don’t explain when you’d want to use either. I don’t suggest anyone to use the boilerplates. Play with them to get a feel for how pieces can be used together—sure, steal some parts to your own setup—sure, but base a project on a boilerplate? I think this is a bad decision. |
| katana | **Any updates on those improvements to PerfUtils you were working on? Is it blocked by the general tooling work you're doing now? Really looking forward to getting my hands on better perf tools.** |
| **gaearon** | @katana New perf tools are going to be pretty much the same as the old ones externally. The change is internal, so that React core refactorings stop breaking these tools every time. Yeah, it’s blocked by more general work, or to be precise, I’m extracting the more general work (with tests) from my proof of concept PR. https://github.com/facebook/react/pull/6549, if merged, will be the first meaningful step to this. |
| artemkochnev | **Do you have any thoughts on having a more opinionated way to declare asynchronous data dependencies for components for use with both client side and server side routing?** |
| **gaearon** | @artemkochnev Maybe the way Relay does it? |
| xram | **What would be your approach for CSS in a complex website (not necessarily Facebook) ? Inline, CSS Module, Radium, PostCSS, CSSNext, Aphrodite, all that stuff** |
| **gaearon** | @xram I haven’t been keeping up so I can’t say. I’d probably use CSS modules with autoprefixer, and test Aphrodite for some components to get a feel for it. I heard it’s good. |
| standayweb | **In your opinion how hard is it to get a job working with react now? With a lot of side project experience but not experience actually doing it full time** |
| **gaearon** | @standayweb I don’t know but it seems like it’s exploding in popularity so having a few visible side projects with React might very well help you land a relevant job. |
| montogeek | @standayweb Publish your code, contribute to React related projects, that's how I landed to a React job 😃 |
| calebmer | **Is Redux the best paradigm for data intensive and async heavy applications and why?** |
| **gaearon** | @calebmer I don’t think any paradigm is “best”. I think Redux works well for apps with complex local mutations and data structures. Redux doesn’t really solve async work anyhow so you’d need something like Rx, or Redux Saga, or channels, etc, to manage async dependencies if you have any. |
| ptmt | **Do you plan to work on the product again (e.g. Facebook.com) for a while?** |
| **gaearon** | @ptmt Yeah, I’d love to! Maybe in a year or two. I kinda miss product development, but then I’ve been working on a product for the past 4 years so it’s liberating to actually get paid to work on the tools—something I’ve never been able to do before. |
| andre1sk | **Is Interop  with Web Components something you care about? (any ideas on how they will mesh with React in the future)?** |
| **gaearon** | @andre1sk Personally, I’m not very much interested in web components. React kinda supports them, but since their primary API is imprerative, and they are tied to a particular platform, there are limited things we can do with them. I think Sebastian’s “DOM as a Second-class Citizen” touches on that: https://www.youtube.com/watch?v=Zemce4Y1Y-A |
| botverse | **I have been using Immutable but was thinking to drop it in the next project, is it essential? I tend to not to like when it breaks destructuring and so** |
| erikras | 👍 to @botverse's question. |
| **gaearon** | @botverse It’s kinda nice but one of the biggest use cases I know (deep updates) is solved in Redux by reducer composition. I would expect that Immutable performs better on mobile devices because there’s (I assume) less GC pressure, but I’m not sure. In short: create a sample app that imitates the kinda of data size and change speed you expect in your app, and profile it. No other way to tell if dropping Immutable is going to work for you. |
| montogeek | **What is your opinion of Mobx?** |
| **gaearon** | @montogeek Well, the example code looks very clean, and it’s nice that it “just works” with great performance out of the box. I haven’t looked into it in detail, so I can’t vouch for much else! |
| montogeek | Thank you @gaearon  |
| Alex Hawkins | **Are there any plans to integrate server-side rendering into Relay Core? If so, when do you anticipate this will happen? SSR is imperative for SEO.  Currently,  the only 'real' solution is to use isomorphic-relay. You could also use node-prerender for SEO but not ideal.** |
| **gaearon** | @Alex Hawkins “SSR is imperative for SEO” — not sure this is the case, at least not for Google anymore. It’s been able to crawl JS sites for a while now. As for Relay, I saw some work on using context so yea, pretty sure it’s on the roadmap. I suggest checking their meeting notes in the repo to get a sense of what’s being worked on. |
| Alex Hawkins | @gaeron what you said about SEO is not accurate. Just because Google can crawl something does not mean it's optimal at all. SEO is what makes or breaks a site. It is one of the most important things to take into account when  building for the web. Not something to take lightly. The reality is that SPA's are becoming the standard for everything from blogs to e-commerce to insanely complex UIs. There is literaly nothing I can't build with RGR ( React  GraphQL Relay). This is hands down the best UI solution I've ever come across. The weak link however, is SEO. How to deal with it. It's very difficult to get a straight answer from anyone about this topic. Truth is, I just don't think many people know the answer. However, if RGR wants to explode like it can, it needs to implement SSR. It's the final thing that is missing. |
| **gaearon** | @Alex Hawkins I have no stake in this game, sorry if I said something misleading. |
| cvbuelow | **do you have an example of splitting up a redux app into multiple npm packages? how would you approach that?** |
| kennetpostigo | **Aside from your existing projects what is something you really interested in working on? (Doesn't need to be react related)** |
| foobar01 | **Do you think redux side of an app should know about the UI that's going to talk to it or should it be architected in a generic way that if UI changes, you don't have to make any changes to your state/actions? For e.g. say I want to pop a toast message after I create a new object. Should this happen at the component level or should a toast action be triggered after the create object action.?** |
| **gaearon** | @foobar01 Making UI easily replaceable is certainly one of the goals of Redux. Actually notifications are my favorite example. You write a reducer and a component rendering the current notification. Then you decide that you want to display a stack of notifications instead of just one. You don’t need to change any components showing notifications, as what would be the case if you were to operate on the state directly in the components. You just keep dispatching an action that leads to a different state change under the hood. |
| **gaearon** | That said don’t take it too far. I think firing actions in lifecycle hooks is occasionally convenient. As with anything, try it both ways and see which one works better 😃
| erikras | **Yes, there seems to be a rebounding (a bounce towards less) of support for SSR lately. My opinion is that if your webapp does not very much depend on SEO, e.g. a blog CMS, then perhaps SSR is a complication you can avoid. The question: What detail would I have to tell you about my webapp for you to say, "Yes, it's worth the hassle of doing SSR."?** |
| **gaearon** | @erikras Is it supposed to be consumed by low-end devices in countries with slow internet speeds? If so, does it serve mostly textual information, or is any benefit from SSR going to be drowned by image size anyway? |
| sam | @gaearon Thank you for doing this! The quality of your work, and they way you engage people (especially the SAM architecture guy) raises the bar for the JS community as a whole. |
| bryanph | **What do you dislike the most about React (or React ecosystem) and why?  And what kind of problems do you think the community should be focusing on?** |
| **gaearon** | @bryanph I don’t like that we have a ton of boilerplates for everything. I don’t think that this is a very healthy situation. I think this is a sign that React should learn to do more (e.g. styles, hot reloading, better data management) to be useful as a UI library. |
| erikras | **What strategies do you have for avoiding OSS burnout? I find that the more I give, the more people want. From watching Ryan and Michael tweet, it seems that one must be very careful with how much guilt for unresponsiveness one allows oneself to feel.** |
| **gaearon** | @erikras I haven’t been very good at this but.. I recently unwatched all repos except that a couple that I actually care about. I put “no maintenance intended” on a few projects I don’t plan to change, and deprecated a few projects that I know were dead ends. This really helps. |
| **gaearon** | @erikras I try to give commit access to anyone who made a substantial PR so that they can take over maintaining the repo. This really works in some cases, and doesn’t work as well in their cases, but it has been taking a lot of stress off. There are many people who’d like to get active in open source, and all they lacked is a project to pour energy into. |
| **gaearon** | @erikras Make them collaborators early and let them flourish. |
| **gaearon** | @erikras I also found that having a “troubleshooting” and “faq” docs, as well as highly upvoted answers on SO, is really important. If you spend 20 minutes every few days answering | the same question, it’s a good sign you can solve this once and for all by putting it somewhere out there. |
| cvbuelow | **do you have an example of splitting up a redux app into multiple npm packages? how would you approach that?** |
| **gaearon** | @cvbuelow This sounds very generic, not sure if I could give a good answer. I don’t really think it’s different from splitting any other JS code? |
| foobar01 | **What are your thoughts on redux-saga?** |
| **gaearon** | @foobar01 It’s an awesome project, and the kind of thing I was hoping somebody would do when I wanted to have a concept of middleware in Redux. |
| kennetpostigo | **Aside from your existing projects what is something you really interested in working on? (Doesn't need to be react related)** |
| **gaearon** | @kennetpostigo Some cool product. Or Babel / Flow. Or something low level. Anything I’m really bad at 😄 |
| cvbuelow | **how would you handle splitting up the redux store, so you can pick and choose parts of it to use in your app.** |
| **gaearon** | @cvbuelow Export separate reducers, let the consuming code which ones to combine. |
| dotheneedful | **Server-side language of choice?** |
| **gaearon** | @dotheneedful Tough one. JavaScript 😄 ? I never really learned any server side language. I liked C# but nobody uses it anymore, and I used Python but I couldn’t like it. |
| dotheneedful | @gaeron you broke my heart with that python comment 😃 watch some Reymond Hettinger videos for inspiration, thanks for all your great work! |
| foobar01 | C# ❤ |
| katana | **Other than you, how many people at Facebook are working on React core full-time?** |
| **gaearon** | @katana React core team is something like 5-7 people (it’s fluctuating, the boundaries aren’t set in stone). React native team (and perf team) is way larger and is split beween US and UK. |
| montogeek | **Do you miss the first languages you worked on?** |
| **gaearon** | @montogeek I used to miss C# but I’ve gotten very comfortable with ES2015, and I don’t anymore. So not really. |
| vcarl | **what do you think of the ecosystem around redux? anything you think is missing?** |
| **gaearon** | @vcarl I’m impressed by what people put out. I think there’s a tendency to over-Redux-ize things (e.g. a component that could’ve been a normal React component but for some reason forces you to mount a reducer). But a lot of it is really cool. Obviously I’d like some combination of Redux and Relay-like data fetching to appear. |
| dceddia | **You've got a great way of breaking things down into simple abstractions. Any recommendations for good books about software design?** |
| **gaearon** | @dceddia Thanks! I don’t really know if this is true. Redux is largely inspired by Flux, and it was clunky in the beginning until Andrew Clark suggested the pattern of reducer composition, similar to what Elm does. |
| **gaearon** | I think in general reading about functional programming is very beneficial. I read some “standard” books like Code Complete when I was a teenager so I don’t remember if they taught me something important or not. I also like good blogs, like http://prog21.dadgum.com/archives.html. |
| dceddia | thanks Dan 😃 |
| bryanph | **What computer science concepts do you think more people should know about?** |
| montogeek | **What you think would be the future or React ecosystem and its influence over JS ecosystem?** |
| **gaearon** | @montogeek I think it already had a lot of influence over JS ecosystem. I hope that React manages to deliver on its future milestones like incremental reconciler, a declarative animation system that works well with gestures, or rendering to GL. |
| montogeek | Me too 😃 Thanks  |
| erikras | **Name two things you like better about London than St. Pete's, and the thing you miss most (cultural, family excluded) about Russia.** |
| **gaearon** | @erikras I spent two minutes on this and can’t recall a single thing I miss, or that I would like more there. |
| erikras | @gaearon Ha! Great answer. Sorry to hold up the queue for two minutes. 😃 |
| Shados | **How do you see Redux's relation to Elm and Elm architecture in insight? They absolutely have things in common, but other things (eg: how things are composed) is quite different. Language feature differences aside, where did you draw the line where "No, this will not be like how it's done in Elm", so to speak, or things that were done differently on purpose.** |
| **gaearon** | @Shados That’s a great question. In general I think that I was interested in being close to Flux because that’s what I knew well, so I just wanted to make a little more composable and work better with hot reloading. So my guideline was “take Flux and do what needs to be done so hot reloading, time travel, and server rendering are easy to implement”. Elm architecture is much more ambitious, but also has some problems: whenever you want to put a component in another component, you have to write the code to connect their update functions too. I didn’t want to go the same way because we already have a very easy composition model in React. It’s also convenient that React local state can often be used as a fallback when global state is too inconvenient. This wouldn’t be pure by Elm’s standards. |
| Gabe | nice question @Shados |
| caspg | **Would you like that some React and Redux based framework was created? I mean opinionated framework in contrary to the unopinionated ecosystem.** |
| **gaearon** | @caspg Yeah, sure. There’s http://shasta.tools that kinda does this, but I think it’s not officially out yet. |
| foobar01 | **I am writing a large app from scratch using react + redux (converting an old legacy app). Any suggestions on things I should do early on or things I should look out for so that things are less painful as the code size grows?** |
| **gaearon** | @foobar01 I’d say normalize the data early. In general, read through http://redux.js.org/docs/FAQ.html and have a good grasp of everything discussed there. |
| veggiemonk | **How far do you think React (and redux of course) is from Universal JS (mobile, native mobile, desktop, native desktop, server) ? Is it still a myth? Your thoughts?** |
| **gaearon** | @veggiemonk Redux is just a state library so it works anywhere. React is pretty close to being available on all those platforms (except native desktop perhaps, but MS is bringing it for Windows which I assume means all platforms). |
| iamdustan | **what are you most excited about with the future of React? Both the near term next release version and distance/dreaming future?** |
| **gaearon** | @iamdustan Incremental reconciler and rendering to GL. |
| botverse | **Don't know if off topic. In a recent London React Meetup there was an example of React Native performing animations quite well. Can it be used to make 2D games instead of cocosJS or similar frameworks that compile to native and expect it to do the job?** |
| **gaearon** | @botverse I don’t know, but you can give it a try 😃 |
| keyanzhang | **Hey man. Quick question, will the core meeting notes continue to be posted?** |
| **gaearon** | @keyanzhang Yeah. We skipped a meeting last week because I was sick and everyone else was busy. I’ll post today’s notes later. |
| katana | **Any hints on what might be coming in React 16?** |
| **gaearon** | @katana Error boundaries, although I hope they’ll ship some time during 15 instead, but who knows 😃 . Mostly major releases mean breaking changes, so they don’t necessarily add new features—just remove the old cruft that prevents us from implementing them. |
| acemarke | **What are the most pressing needs for the Redux docs? (Also, why is the new FAQ the best part of the docs, and why is the person who wrote that page awesome? 😃  )** |
| **gaearon** | @acemarke I try to keep them as open issues with "docs" tag. And yeah, Mark’s help has been amazing. |
| vcarl | ^ @acemarke is Mark, by the way 😛 |
| **gaearon** | lol |
| vcarl | **Any word on stateless functional component optimizations coming down the pipe?** |
| **gaearon** | @vcarl Sebastian has been thinking about this, but he’s busy with thinking about incremental reconciler instead so I wouldn’t count on this any time soon. |
| foobar01 | **Do you think Mobx has the potential to be the "Next Big Thing" after redux? What do you think are some of the disadvantages of using something like Mobx apart from the smaller ecosystem?** |
| **gaearon** | @foobar01 I don’t know why Redux even became a “big thing” so I have no idea. It was just a project I made for a conference talk. 😃 I don’t know about disadvantages; it’s better to ask the MobX author(s). |
| immutabletom | **I saw redux is used on the makeitopen.com f8 conference app, I was wondering how much is redux used in Facebook?** |
| **gaearon** | @immutabletom Just a tiny bit in some new projects. |
| sturmundweb (Francesca) | Hi there 😃 |
| **gaearon** | @sturmundweb (Francesca) Hi! |
| jonas | **What does "incremental reconciler" mean? I know what the reconciler does but why does it need to be "incremental"?** |
| **gaearon** | @jonas Currently when you setState() or ReactDOM.render(), this happens recursively for the whole subtree. Some components can bail out but it’s still somewhat expensive, especially on mobile. |
| **gaearon** | This is where people like to say that React is slow 😃 . However in reality your screen size is limited. Most of the time is often spent updating things that are not on the screen. |
| **gaearon** | If React knew about what’s on the screen (hint: inline styles), it would be able to prioritize updates to those components, and only update the offscreen components when it’s  idle. This would make reconciliation “incremental” because it would happen in prioritizable chunks. |
| mxstbr | **Kenye wants to know how he can get hair like yours** |
| Gabe | lol @mxstbr |
| **gaearon** | @mxstbr I’m happy to swap |
| DevAlien | **are there any project of yours we can contribute to?** |
| sturmundweb (Francesca) | Great question to ask @DevAlien |
| **gaearon** | @DevAlien Yes, I’m working on React Hot Loader 3 but don’t have the time to write the docs to release it as stable. Help is much appreciated: https://github.com/gaearon/react-hot-loader/issues/243. |
| far | **Will it be possible to define lifecycle hooks like componentDidMount etc. for stateless function components? or we should just stay with classes for this?** |
| **gaearon** | @far There are no such plans. Yea, use classes for this. We might add functional stateful components later that might allow this, but this is distant future. |
| standayweb | **When is it better to just store state in a component? people sometimes seem to use Redux for everything and not store state in components at all.** |
| **gaearon** | @standayweb Write it both ways. If it’s more hassle to do in Redux, use local state. There’s no substitute to good judgement 😃 |
| **gaearon** | @standayweb Also: http://redux.js.org/docs/FAQ.html#organizing-state-only-redux-state |
| standayweb | @gaearon thanks! |
| nickyhajal | @gaeron @standayweb thanks for that question and answer! Always wondered about that |
| acemarke | **Where do you see the Redux side effects story going? Do you think there will be a "unified" / "blessed" approach any time soon?** |
| Foxhoundn | ** What would you want to be if you werent a programmer? Also how are you enjoying London?** |
| **gaearon** | @Foxhoundn I don‘t know what I’d be doing, really. I’d like to learn to produce music. |
| gavindoughtie | **If your reducers are the place where you can detect an error condition, what are the best practices for propagating that back to the user? (Think an invalid game move)** |
| **gaearon** | @gavindoughtie Not sure this is easily answerable, it depends a lot, and I’m not sure what exactly is being asked. Maybe this helps: http://stackoverflow.com/questions/34403269/what-is-the-best-way-deal-with-fetch-error-in-react-redux |
| gavindoughtie | follow-up; if the state necessary to perform a reduction is also the state that is needed to detect invalid input, and you want to centralize that logic in the reducer, what's a clean mechanism to return an error condition from the reducer itself? It wouldn't update the state, but it would be nice to have a parallel mechanism for putting renderable error state elsewhere in the state tree. |
| **gaearon** | Better suited to StackOverflow 😃 |
| totaldis | @gavindoughtie try #redux |
| botverse | **why not propagate shouldComponentUpdate to functional component children?** |
| botverse | To children functional comps |
| **gaearon** | @botverse Not sure what you mean. If you mean that React doesn’t let you define shouldComponentUpdate, well, I don’t know why this is the case. Maybe we want to do it differently later. It’s better to look to React repo and discussions in it for this answer, as I don’t have one. |
| botverse | just take the parent one for functional components |
| **gaearon** | @botverse Please raise an issue. I’m not sure what you mean. |
| Gabe | **How do you feel about your "celebrity status" as a developer (ie. having 27k twitter followers)... is it overwhelming. humbling...?** |
| bauss | lol @Gabe |
| **gaearon** | @Gabe Yeah, I’m not sure how this happened so it’s still surprising. I’ve been trying to answer notifications, but since last week I don’t anymore because it is too stressful. I think that other ways of communication (e.g. streaming coding sessions) scale better so I intend to do more of that. |
| foobar01 | **What are the major shifts you think we'll see in the world of frontend dev in the next 3-5 years?** |
| **gaearon** | @foobar01 I have no clue 😃 |
| Gabe | Hey all that concludes our Q&A with Dan Abramov... so happy you could hang out with us Dan... really appreciate your time and I bet your exhausted from all the rapid fire questions |
| far | thanks @gaearon! |
| foobar01 | Thanks a lot for your time Dan. |
| vcarl | thanks a bunch for doing this! |
| Holoch | thanx Dan |
| **gaearon** | Thanks for having me here! Cheers |
| Foxhoundn | Thanks Dan! Take care 😃 |
