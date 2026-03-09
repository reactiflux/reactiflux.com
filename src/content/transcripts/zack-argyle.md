---
title: Zack Argyle
date: 2018-04-05
time: 1-2pm PT / 8-9PM GMT
location: Q&A Channel Reactiflux
description: "Tech Lead @ Pinterest | [Pinterest PWA built w/ React - Performance Case Study](https://medium.com/dev-channel/a-pinterest-progressive-web-app-performance-case-study-3bd6ed2e6154)"
people: "[@ZackArgyle](https://twitter.com/ZackArgyle)"
---

## Tech Lead @ Pinterest

<a name="obviously-incoming-ios-support-pwas" href="#obviously-incoming-ios-support-pwas">#</a> **Q:** Obviously the incoming iOS support of PWAs is welcome, but I’ve had coworkers state that the proposed implementation is less than ideal. Do you have any reservations or can you speak to the efficacy of PWAs with the incoming iOS support? - kylemh

**A:** Great question. I have an iPhone X and have been running the beta preview for a few months now. I have the Pinterest PWA installed to my homescreen. There are definitely some "not-ideal" implementation details like leaving the PWA in any way resets the whole session, swipe to go back is disabled by default, and having to deal with the "notch" in fullscreen mode. Overall I'm very excited for it and glad they've chosen to invest in the web.

---

<a name="huge-fan-gestalt-sure-much" href="#huge-fan-gestalt-sure-much">#</a> **Q:** Huge fan of gestalt. Not sure how much you were involved in that, but do you have any advice for someone who's interested in bUIlding a similar UI component library for their team? - mplis

**A:** I was a part of the team that developed gestalt and have contributed a fair amount, though I focused on other web platform areas. One of my biggest suggestions is to use your UI library to enforce good practices (consistency, accessibility, performance).

We actually have a set of components we bUIlt specifically for mobile web that have not been upstreamed into gestalt that enforce these same things. A `<TapArea>` component for consistent press states and accessibility around touch, etc.

---

<a name="evaluated-costbenefit-using-redux-compared" href="#evaluated-costbenefit-using-redux-compared">#</a> **Q:** Have you evaluated the cost/benefit of using Redux compared to barebone React components or something else like unstated? - MarcusNielsen

**A:** Definitely. We have had a lot of conversations around Redux. In fact we have Redux devtools enabled for our mobile web version in production if you'd like to see how we use it. In general, our approach has been

1. All UI state goes in React state

2. All session state goes in Redux

3. All API data gets normalized and stored in Redux

---

<a name="attainable-server-side-rendering-code" href="#attainable-server-side-rendering-code">#</a> **Q:** How attainable is it to have both server side rendering AND code splitting? Should a PWA implementation even worry about it? - Xuxu_blz

**A:** It is very attainable. Regardless of what google says, server rendering is still an important part of SEO (Pinterest is scary good at SEO so trust me!). Our mobile PWA does not server render, but is also not served from google referred traffic. Code splitting is incredibly important and should always be a priority. If you don't care about SEO, my opinion is that server rendering is not worth the cost of maintenance.

---

<a name="main-reasons-prevent-usingmigrating-react" href="#main-reasons-prevent-usingmigrating-react">#</a> **Q:** What are the main reasons that prevent you using/migrating to React 16? - k2rks

**A:** The first thing that prevented us from migrating to React 16 was our `<Masonry>` component in Gestalt. It is a very optimized virtualized masonry layout that we had to essentially rewrite from scratch in order to support both 15 and 16. Now that that is done, we just have to finish auditing the thousands of components in the Pinterest codebase :sweat_smile:

---

<a name="explain-buildchain-tooling-used-react" href="#explain-buildchain-tooling-used-react">#</a> **Q:** Can you explain your bUIldchain / tooling used for React development? - stackola

**A:** We use webpack, babel, prettier, docker, and more. Happy to answer a follow up.

---

<a name="best-way-normalize-data-structures" href="#best-way-normalize-data-structures">#</a> **Q:** What is the best way to normalize your data structures, and what are the best tools? - gboyd_1978

**A:** We've been fairly happy using https://github.com/paularmstrong/normalizr and a reducer wrapper we called `createEntitiesReducer`

---

<a name="thoughts-using-reactnative-crossplatform-compatible" href="#thoughts-using-reactnative-crossplatform-compatible">#</a> **Q:** What are your thoughts on using react-native to have cross-platform compatible state? Or is it still too immature? - electron

**A:** We've talked about it and had many discussion with both Leland (react-primitives) and Nicolas (react-native-web). In general we find it too new still, but plan on investigating again in the future.

---

<a name="good-idea-build-ui-separately" href="#good-idea-build-ui-separately">#</a> **Q:** Is it a good idea to bUIld UI separately for mobile and for larger screens if the experience we are trying to deliver for PWA is drastically different from the experience of the larger devices and how would you go about it? - lokiiarora

**A:** My suggestion to companies is: if you have more than 20 web engineers and you have a native app, then you should also have a separate mobile web PWA.

---

<a name="perchance-considered-nextjs-takeaways-kinetifex" href="#perchance-considered-nextjs-takeaways-kinetifex">#</a> **Q:** Perchance have you considered Next.js and if so what are your takeaways? - kinetifex

**A:** Love Next.js and what they're doing, but not for a company at our scale.

---

<a name="foresee-pwa-architecture-prpl-pattern" href="#foresee-pwa-architecture-prpl-pattern">#</a> **Q:** Do you foresee the PWA architecture / 'prpl pattern' making much headway on desktop in the coming year(s)? - joestrouth1

**A:** I think there definitely some PWA features that will be useful in a desktop environment, but the CPU and network connection on a desktop computer have little of the limitations of a mobile phone that most PWA features are trying to solve.

---

<a name="think-using-styledcomponents-point-think" href="#think-using-styledcomponents-point-think">#</a> **Q:** Did you think about using styled-components at any point? Do you think it could be great in your stack? What is your file structure? Are you using atomic design or anything like that? - RoseGrenth

**A:** styled-components did not exist when we originally bUIlt gestalt. Additionally all of our new code (like the entire mweb codebase) has no additional CSS other than the gestalt CSS. which we inline into the <head>. This has been great for performance. Were we to start from scratch today, styled-components could be a great option.

---

<a name="smaller-team-lokiiarora" href="#smaller-team-lokiiarora">#</a> **Q:** What about a smaller team? - lokiiarora

**A:** For smaller teams its a tradeoff that you have to make. Having a separate mweb doubles your maintenance cost but improves the user and developer experience drastically. If you're willing to accept the maintenance I say go for it!

---

<a name="fastslow-webpack-build-compile-developing" href="#fastslow-webpack-build-compile-developing">#</a> **Q:** How fast/slow is your webpack bUIld to compile when developing and when running a full bUIld? And can you talk about anything you've done to speed it up? - danbovey

**A:** Running it now and I'll let you know :wink:

(a few minutes later)

## By the way our webpack bUIld is 1m4s :smiley:

<a name="favorite-ways-control-async-data" href="#favorite-ways-control-async-data">#</a> **Q:** What are your favorite ways to control async data entering your state via api/websockets? Do you use react-redux-sagas or some other library? - electron

**A:** I have LOVED having a normalized Redux store in the PWA, and we actually enforce it. There is an HOC called `withResource()` that is used to specify the API dependencies of a component/page. That HOC does not pass through the response data, but provides a hook into Redux `withResource({ url: ..., mapState: (state, props) => ({ ... }) })`. The actual fetching of data is a simple redux-thunk that fetches, normalizes, and passes through that data to the reducers that look for normalized entities. redux-thunk is simple and I like simple :smiley:

---

<a name="tools-use-localisation-within-components" href="#tools-use-localisation-within-components">#</a> **Q:** what tools do you use for Localisation within components? - mcfarland

**A:** We have our own localization tooling and so it is just an internal library called i18n. An example using gestalt would be `<Text bold>{i18n._('Hello world!')}</Text>`

---

<a name="give-idea-code-reusability-thernguy" href="#give-idea-code-reusability-thernguy">#</a> **Q:**Could you give some idea in code reusability? - TheRNGuy

**A:** That's a pretty vague question! But my short answer is to not worry about reusability prematurely. It's very easy to abstract everything which gets very hairy. Don't feel bad forking things sometimes rather than making things awkwardly abstracted.

---

<a name="using-atomic-design-anything-like" href="#using-atomic-design-anything-like">#</a> **Q:** Are you using atomic design or anything like that to structure your project, in order to scale your codebase? - RoseGrenth

**A:** We do have an internal UI spec called PDS (Pinterest Design System) that our design team uses for all of their designs. It includes things like colors, margins/paddings (4px, 8px, ...), fonts, etc. In general that's what we use for designs.

---

<a name="hi-zack-browsing-becoming-mobile" href="#hi-zack-browsing-becoming-mobile">#</a> **Q:** Hi Zack. With browsing becoming more and more mobile ...would you recommend going for a PWA from start as an MVP, even before doing a RN app? Do you see this happening in the future as a means of experiencing an app without actually installing it? - Rodrigo

**A:** Depends on what engineers you have! In general it's easier to find web engineers, making the case for a PWA as your MVP much more intrigUIng. I imagine when mobile safari gets better support for service worker features and homescreen installation that this will be even more intrigUIng. For a reference, Pinterest has millions of users that open our PWA from the homescreen every week. Super interesting.

---

<a name="using-workbox-offline-support-notable" href="#using-workbox-offline-support-notable">#</a> **Q:** Are you using workbox for offline support? Or any other notable modules for bUIlding out PWA support? - kinetifex

**A:** Yes we are using Workbox. We have a great working friendship with the folks at Google, and have monthly conversations about PWA features and requests we have. Additionally, workbox now uses our open source service-worker-mock for the unit tests in Workbox so we chat with them a lot.

---

<a name="move-webpack-task-runner-like" href="#move-webpack-task-runner-like">#</a> **Q:** Did you move over to webpack from a task runner like gulp or grunt? What was that experience like? Do you recommend using only either webpack OR gulp/grunt, or is combining them okay? - stackola

**A:** yes we did. About 5 years ago we used Grunt. 4 years ago added some Gulp streams. And 3 years ago moved towards Webpack. In an ideal world you'd be all-in on one, but I don't see it as a big issue to have multiple runners.

---

<a name="think-serverside-rendering-pinterest-oyeanuj" href="#think-serverside-rendering-pinterest-oyeanuj">#</a> **Q:** How do you think about server-side rendering at Pinterest? - oyeAnuj

**A:** We think a lot about it! In fact we usually run an experiment every 6 months to see if it is still important for SEO (it is). Our main server is in python, and so when we switched to React we had to spin up a sidecar Node server specifically to handle server rendering.

---

<a name="use-order-follow-improve-performance" href="#use-order-follow-improve-performance">#</a> **Q:** What did you use in order to follow and improve your performance? Did you use a tool like Calibre or someting? Or maybe something in your CI? - RoseGrenth

**A:** Great question. Lighthouse was a great tool for monitoring our performance and regressions as we bUIlt out the PWA. Additionally, we have a web performance team (they just spoke at Perf Matters) that bUIlt out a sUIte of performance monitoring tools around what we consider a full page load. We call it "Pinner Wait Time". Not sure if they recorded the Perf Matters talk but it goes into more details about that.

---

<a name="guys-use-serve-static-data" href="#guys-use-serve-static-data">#</a> **Q:** What do you guys use to serve the static data used for localization, like descriptions, field names, etc? My app serves a lot of static data, and I don't want to bUIld the app every time I change a field name or a description. - Ton

**A:** We don't have anything for this use case. We deploy twice a day and have dozens of engineers in each commit, so its not a problem we've had to deal with!

---

<a name="ive-recently-offered-lead-newly" href="#ive-recently-offered-lead-newly">#</a> **Q:** I've been recently offered to lead a newly formed small team. Are there any books of resources you recommend about the not-so-technical side of being a lead dev? Also what kind of preperation can I do to best get ready for that role? - stackola

**A:** The best leads I know are people who

1. Are productive in their own code commits

2. Actively review others' code and take that opportunity to teach if possible

3. Knowledge-share frequently. Create docs, diagrams, etc to help spread the knowledge across the entire team.

Also congrats!

---

<a name="whats-one-feature-might-coming" href="#whats-one-feature-might-coming">#</a> **Q:** What's one feature that is (or might be) coming to the web platform that you're most ready for? - joestrouth1

**A:** One random thing I'm excited about is changes coming to Chrome around add to homescreen. It's an awkward experience right now where you meet some arbitrary engagement heuristic which enables add to homescreen, but the prompt will pop up randomly unless you catch the event and prevent it manually. Changes are in flight to provide more control around that which I think will make adding to homescreen more seamless.

---

<a name="said-using-hoc-like-withresource" href="#said-using-hoc-like-withresource">#</a> **Q:** you said you are using HOC like withResource(), is there a library you can recommend to use it? - Ton

**A:** No libraries. Just a 150 line file (with Flow types) we have internally.

---

<a name="guys-use-flow-anything-like" href="#guys-use-flow-anything-like">#</a> **Q:** Do you guys use Flow or anything like that? Typescript? and Why? (depending of your choice) - RoseGrenth

**A:** Oh hey I just answered that unintentionally. Haha. We do use Flow because it's great for gradually rolling it out into a codebase. Since we have so many engineers (all with their own opinions) it was optimal for showing people the value over time without forcing it upon them.

---

<a name="mostly-unrelated-js-anyone-pinterest" href="#mostly-unrelated-js-anyone-pinterest">#</a> **Q:** Mostly unrelated to JS, but is anyone at Pinterest considering CSS grids seriously yet? - noddy

**A:** not currently. Like I mentioned above, gestalt (our UI component library) is our primary source of css and its flex based for now!
