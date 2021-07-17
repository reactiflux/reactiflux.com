---
title: Clubhouse Team
date: 2019-07-25
time: 1-2pm PT / 8-9PM GMT
location: Q&A Channel Reactiflux
description: "Clubhouse is a project management platform for software development that brings everyone together to build better products. Clubhouse is built using tools like React Native, React, Relay, GraphQL, Gatsby and more."
people: "[@clubhouse](https://twitter.com/clubhouse) - [Eli Perkins](https://twitter.com/_eliperkins), [Jenel Myers](https://twitter.com/jenelmyers), [Nicolas Charpentier](https://twitter.com/charpeni_) from the mobile team @ Clubhouse.io."
---

## [Clubhouse][clubhouse]

## Follow the team

- [@\_eliperkins](https://twitter.com/_eliperkins) (eliperkins)
- [@charpeni\_](https://twitter.com/charpeni_) (charpeni)
- [@jenelmyers](https://twitter.com/jenelmyers) (Jenel)

<a name="how-important-is-product-documentationt" href="#how-important-is-product-documentationt">#</a> **Q:** How important is product documentation to your team? Do you have an example of documentation you think is amazing? – mostlymat

**A:** Product documentation is important for us, especially with a growing product, a good documentation helps a lot to guide customers. A good documentation for packages we use is always appreciated too. 😃 https://help.clubhouse.io/hc/en-us

– charpeni

---

<a name="how-do-you-prioritize" href="#how-do-you-prioritize">#</a> **Q:** How do you prioritize introducing of new features versus keeping your codebase clean? – Flint

**A:** Hii!! It usually depends on the feature. Though time lines are very important, writing clean code is also important and if a feature takes a bit longer to implement because we want to maintain our clean code, then that's okay 😃.

– Jenel

---

<a name="did-you-start-using-graphql" href="#did-you-start-using-graphql">#</a> **Q:** Did you start using GraphQL from the beginning or did you migrate from [Redux][redux]? – sregg

**A:** We started out using only [Redux][redux], but quickly realized that our data model would lend itself well to using GraphQL.

We built the first couple features in [Redux][redux], and have been moving most of the app over to using GraphQL now.

– eliperkins

---

<a name="can-you-describe-the-directory" href="#can-you-describe-the-directory">#</a> **Q:** Can you describe the directory structure of your React Native project? – Foobarking

**A:** Our structure isn't anything revolutionary: `js`, `ios` and `android` dirs like most RN projects. then inside of `js` we have `components` which are "dumb" presentational components, `containers` which connect to data sources. we also have a `screens` dir which is all full screen components that we use for navigation.

– eliperkins

---

<a name="ive-been-working-on" href="#ive-been-working-on">#</a> **Q:** I've been working on performance improvements for a client React Native app. What's your number one tip in this regard, to fixing perf? – agmcleod

**A:** Profiling! profile all the things. Ram had some really good [tips](https://www.youtube.com/watch?v=nphKGWjhg2M) on this at Chain React but **tl;dr: place timers to track perf at a given path and optimize it** don't try to optimize all the things at once!

– eliperkins

---

<a name="which-version-of-react-native" href="#which-version-of-react-native">#</a> **Q:** Which version of React Native version do you use? I think 0.60 is not a stable version. – RockStar0107

**A:** 0.59.10 😃

– Jenel

---

<a name="thank-you-for-doing-this-q-a" href="#thank-you-for-doing-this-q-a">#</a> **Q:** Thank you for doing this Q&A, I am interested in knowing your opinion in [Relay][relay] vs [Apollo][apollo]? – HTlili

**A:** We chose Relay for a number of reasons:

1. It generates [Flow][flow] types for all of our GraphQL queries! We use [Flow][flow] as our static type checker ([TS][typescript] wasn't supported in RN when we started the project and [Apollo][apollo] wasn't generating [Flow][flow] types at that point).
2. [Relay][relay] is fantastic for building GraphQL **applications**. Since [Relay][relay] forces you to do things like data masking and fragment composition, it really allows for teams of engineers to be building GraphQL applications quickly and efficiently (as opposed to [Apollo][apollo], which leans towards Massive GraphQL Queries™ and less composition).
3. [Relay][relay]'s compositional architecture allows it to be extended very easily (as compared to [Apollo][apollo]'s plugin-based infra).

– eliperkins

---

<a name="have-you-ever-coded" href="#have-you-ever-coded">#</a> **Q:** Have you ever coded Java? – TheOriginalAse

**A:** Yes! We're using Java & Kotlin in our code base. Looking forward to play with [Jetpack Compose](https://developer.android.com/jetpack/compose).

– charpeni

---

<a name="where-do-you-see-react-native" href="#where-do-you-see-react-native">#</a> **Q:** Where do you see React Native in 4-5 years? – Tee-Sean

**A:** Interesting question! one direction that I'd love to see is a way for React to be used in other languages. I think we've seen this already with [ReasonML](https://reasonml.github.io), but I'm very optimistic about things like [SwiftUI](https://developer.apple.com/xcode/swiftui/) and [JetPack Compose](https://developer.android.com/jetpack/compose) playing a nice role in this future.

– eliperkins

Good question! RN is changing so fast now that's hard to give a "right" answer here. With recent hooks, Fabric, and all changes related to the bridge. I'm sure React Native will still be there, an evolve one for sure. I'm hoping to see a better integration with native modules, and maybe a seamless cohabitation, with more native integrations/packages.

– charpeni

---

<a name="what-is-the-most-important-part" href="#what-is-the-most-important-part">#</a> **Q:** What is the most important part when doing React Native apps and performance is a must, even when running on bad devices? – matheusmarrane

**A:** By running on bad devices, do you mean low-end devices? On mobile, performance is a must. We have to make sure to not re-render too much for nothing, especially on huge components layouts. Network requests are also a significant factor, a low-end device on a low connection would probably not react the same way you'd expected. Having some loading components (React Suspense), doing network requests at a good time (when needed, maybe a bit ahead), and well decoupling your components is a good way to start by only passing essential props/values (ex: don't pass the whole user object, pass only the fields you need). Also, the bridge could be a bottle neck, do not pass everything to it, because it would be serialized!

– carpeni

---

<a name="whats-the-biggest-challenge-for-you" href="#whats-the-biggest-challenge-for-you">#</a> **Q:** What’s the biggest challenge for you to develop an app that built using React Native? And also what navigation library do you use? – adrianhartanto

**A:** We use [react-native-navigation](https://github.com/wix/react-native-navigation) by [Wix](https://www.wix.engineering/). I come from an iOS background so the hardest part has definitely been grasping graphQL, but I think for each person it's different. The React native community has been great and it's been growing which is super nice. So, a lot of the issues and problems I've had have definitely been brought up before and almost always there's a solution somewhere on GitHub. 😃

– Jenel

---

<a name="regarding-the-nature-of-react-native" href="#regarding-the-nature-of-react-native">#</a> **Q:** Regarding the nature of React Native being community based, how have you managed dependency issues (breaking changes are a real problem). Trying to code as much as of the features from scratch, just being carefull about bumping libraries versions or something else? – essenin

**A:** We're using [Renovate Bot](https://renovatebot.com/) to throw pull requests at us when an update is available. We have a bunch of tests running on [CircleCI](https://circleci.com) to assert that everything is working as expected (thanks to them). React Native packages with native code are usually the one we have to be careful with, we'll QA them before merging them. I'd say that most of RN libraries are using well written release notes, so they're really helpful 😃.

– charpeni

---

<a name="do-you-use-2-or-4" href="#do-you-use-2-or-4">#</a> **Q:** Do you use 2 or 4 space tab indentation? – Reyals

**A:** Prettier 😍

– charpeni

---

<a name="what-ci-cd-tools" href="#what-ci-cd-tools">#</a> **Q:** What CI/CD tools do you use for both front and backend development? – esimba

**A:** We use [CircleCI](http://circleci.com) for CI builds. along those lines, we run only JS tests in CI (since they're fast and native tests are slow). We also run the [metro bundler](https://facebook.github.io/metro/) for both iOS and Android to make sure our bundles can always be built.

We also rely on fastlane for helping us to deploy often! we deploy new apps to the App Store every couple of weeks, but we crank out builds to our team and beta testers whenever we need to, in a matter of minutes.

– eliperkins

---

<a name="i-find-it-easy-to-follow" href="#i-find-it-easy-to-follow">#</a> **Q:** I find it easy to follow React / React Native tutorials but when I move on to start a project of my own I find it very hard finding a flow and how to do things. Do you have any recommendations on how to move on from tutorials? – kanerva

**A:** I think the best way I've found to learn is to just try to build something! Even if it's an idea that's already been built before.

Another great way to play around is to build intermediate things that aren't full apps (like a library or command line tool) to scratch some itch, and then integrate it into an open source app.

– eliperkins

---

<a name="what-level-of-proficiency" href="#what-level-of-proficiency">#</a> **Q:** What level of proficiency(if any) in Java/Kotlin/Swift is needed for React Native apps? – mahaveer

**A:** Some! I think almost none is required to get started, but you'll quickly find that there is some understanding of **how** iOS and Android apps are built to be proficient.

[Expo][expo] will get you a long way to start, but at some point, you'll likely find that you'll need to understand how an [Xcode](https://developer.apple.com/xcode/) project builds an app or how [Gradle](https://gradle.org/) constructs an Android app, etc.

– eliperkins

---

<a name="regarding-react-native-documentation" href="#regarding-react-native-documentation">#</a> **Q:** Regarding React Native development, what is your opinion about [Expo][expo], if any? – Rintsi

**A:** I think [Expo][expo] is great to learn and get started! But I think you'll find that you'll want to eject at some point. The [Expo][expo] team is a team of stellar amazing individuals who really push React Native forward every day. I can't wait to see what they come up with next!

– eliperkins

---

<a name="how-do-you-define-a-good" href="#how-do-you-define-a-good">#</a> **Q:** How do you define a good React Native developer? I mean what should a React Native developer know to be considered bro in your company? How can these subjects learnt? – Alireza Ghamkhar

**A:** A good bro? I'm not too sure I understand your question.

– Jenel

_**Follow up**_: I mean what concepts a good React Native developer should know that be considered a qualified or “senior React Native developer”. What usually you expect from your React Native developer? Do you want him/her to be good at native both Android and iOS or what?

A good React developer should definitely know React, but should also have some general knowledge of native stuff too. But it also really depends on your team! The great thing about [Clubhouse][clubhouse] is that [Eli](https://twitter.com/_eliperkins), [Nicolas](https://twitter.com/charpeni_) and I all came from different backgrounds. [Nicolas](https://twitter.com/charpeni_) came from an Android background and [Eli](https://twitter.com/_eliperkins) and I came from an iOS background. So we all compliment each other quite well. When hiring a React Native developer, I look for someone who is willing to learn and collaborate. I don't think there is one set path on what makes a great React developer, I think the best way is just to continue learning and growing. Having a good portfolio with a range of different projects helps too 😉.

– Jenel

---

<a name="estimating-project-scope-and-timeline" href="#estimating-project-scope-and-timeline">#</a> **Q:** Estimating project scope and timeline is quite challenging task (under estimating or overestimating). Any pointers/tips or resources that can enable project managers become better? – esimba

**A:** Hii!! That is definitely a hard task. I suggest working closely with a developer and asking a bunch of questions based on the feature. There have been times where certain bugs take a lot longer than expected, but what's been helpful for us is ALOT of communication and looking at the feature from all points of view. Also break the stories down into smaller stories/tasks because smaller stories are alot easier to estimate. For a feature where I was updating the UI, we broke it down into multiple stories. 1. add icon 2. update/remove text 2. update layout... from there estimate those smaller stories.

– Jenel

---

<a name="is-it-a-good-idea-to-continue" href="#is-it-a-good-idea-to-continue">#</a> **Q:** Is it a good idea to combine [PWA](https://en.wikipedia.org/wiki/Progressive_web_applications) inside a WebView with other React Native features like when you need native modules? – Deleted User

**A:** [Clubhouse][clubhouse] isn't currently a [PWA](https://en.wikipedia.org/wiki/Progressive_web_applications), so we don't really have that exact use case. We do lean towards bouncing users out to Safari/Chrome instead of embedding web views. Embedded web views within apps can be a bit limiting, and there's no benefit we gain from keeping a user within the app (vs using our app in Safari).

– eliperkins

---

<a name="if-you-follow-agile-methodology" href="#if-you-follow-agile-methodology">#</a> **Q:** If you follow agile methodology, what is the usual agenda of your retrospectives? – Rintsi

**A:** We don't follow "agile" strictly (everyone seems to have their own flavor 😆) but we do have occasional retros after projects complete. We usually use the format of:

1. What went well?
2. Shout outs to team members!
3. Where did things get rough? What made people sad?
4. Ideas for next time

And then we gather action items from here.

– eliperkins

---

<a name="what-is-your-favorite-react-native" href="#what-is-your-favorite-react-native">#</a> **Q:** What is your favorite React Native stack? – Tee-Sean

**A:** React Native, a static type checker ([Flow][flow] or [TS][typescript]), and GraphQL ([Relay][relay] 😉)

From here, just have fun!

– eliperkins

---

<a name="do-you-like-the-airbnb" href="#do-you-like-the-airbnb">#</a> **Q:** Do you like the Airbnb React/JSX style guide and if so, do you apply it to your React Native project? (https://github.com/airbnb/javascript/tree/master/react) – Foobarking

**A:** We do use [eslint-airbnb-config](https://github.com/clubhouse/eslint-config), but we have started stripping out a number of rules that don't fit our team. Additionally, we have started to share some linting rules with our other teams at [Clubhouse][clubhouse] as well: https://github.com/clubhouse/eslint-config.

– eliperkins

---

<a name="do-yall-do-any-end-to-end" href="#do-yall-do-any-end-to-end">#</a> **Q:** Do y'all do any end to end testing for your RN apps and if so, what tools do you use? – ativ

**A:** We have fastlane to take automated screenshots for us. On Android, we have a configured Pre-Launch Report (on Google Play Store) with a custom Robo script to assert that the app can sign-in and navigate on all devices. ([Firebase test lab](https://firebase.google.com/docs/test-lab) is also useful!)

We're looking into Detox for better E2E testing! https://github.com/wix/Detox

– charpeni

---

<a name="there-are-multiple-threat" href="#there-are-multiple-threat">#</a> **Q:** There are multiple threat mitigation services available nowadays regarding vulnerable dependencies, do you take these into consideration in your CI/CD pipelines? – Rintsi

**A:** We use https://renovatebot.com/ to keep our reps up to date. We also use GitHub's security alerts to inform us of high priority updates.

– eliperkins

---

<a name="what-was-your-most" href="#what-was-your-most">#</a> **Q:** What was your most recent "Aha" moment while developing a new feature, or learning about something you just didn't know before? – mostlymat

**A:** I think working through building our Android app was one of those for me! I come from primarily an iOS background, so I got to learn a lot of new things there. We built [Clubhouse][clubhouse] for iOS first using React Native, but cut out shipping an Android app at the same time to help reduce scope. We learned that using GraphQL (and specifically [Relay][relay]) really helped us share things across iOS and Android because of how we approached data fetching and composition!

– eliperkins

---

<a name="how-do-you-divide-the-workload" href="#how-do-you-divide-the-workload">#</a> **Q:** How do you divide the workload? Do you have feature teams or iOS/Android teams or how does it work? – Rintsi

**A:** Company wise we're into squads based on goals, for the mobile team all developers are in the same bucket and we're sharing our knowledge and learning from that every day 😃. We're also working closing with design, product, backend, and frontend folks :).

We're also trying to keep a good cadence between bug fixes and shipping new features that would bring joy!

– charpeni

---

<a name="approximately-how-much-of-your" href="#approximately-how-much-of-your">#</a> **Q:** Approximately how much of your React Native app is created using Native Modules? – Foobarking

**A:** That's a good question! I'm not too sure. Our navigation, webview, and our iOS drag and drop. So maybe about 5-6%?

– Jenel

---

<a name="how-often-are-the" href="#how-often-are-the">#</a> **Q:** How often are the "Can this even be done in RN" moments? Is it just me being a scrub or you often have to invent a solution from 0 compared to building native apps? – essenin

**A:** Great question! I think my opinion on this changes every day. But generally, I think almost anything can "be done in React Native" depending on how you approach it. it may require bumping out to native modules to get it done, or building your own abstraction, but really anything can be done with RN :)

Also, I love watching "Can it be Done with React Native" by William Candillon on YouTube: https://www.youtube.com/channel/UC806fwFWpiLQV5y-qifzHnA.

– eliperkins

---

<a name="what-do-you-recommend-people" href="#what-do-you-recommend-people">#</a> **Q:** What do you recommend people to develop with, [Expo][expo] or React Native CLI or is there anything else which we are not aware of? – Tee-Sean

**A:** We're satisfied with React Native CLI 😃. The new RN CLI is 🔥. The auto linking feature is time saving!

– charpeni

---

<a name="whats-the-best-way-to-store-global" href="#whats-the-best-way-to-store-global">#</a> **Q:** What's the best way to store global data for usage through multiple components. Say when a user logs in to the app, a request is made once to a REST API and retrieves some data which can be used multiple times at different points instead of making new requests each time. – kanerva

**A:** As little "global" data as possible 😉. Heh, but seriously, building great abstractions around this is key! approaching this as building out a "data store" or controller that's really good at doing That One Thing™ first, and then figuring out if it can be shared is more a good first step. just because it's "expensive" to get something doesn't mean it should be cached forever! sometimes refetching data is just fine 😃. But software is about tradeoffs, so approach each decision with context in mind.

– eliperkins

---

<a name="going-back-to-documentation" href="#going-back-to-documentation">#</a> **Q:** Going back to documentation haha. Is there an internal documentation application/pattern you like to use? For onboarding, common gotchas, shared knowledge. If so, what does that look like? – mostlymat

**A:** Everything is documented in Slack, you just have to scroll way back up. (joking) 👎

We love to use markdown files within GitHub, could be in a specific projects or into a docs repository. Also, pull requests description and commit messages are well written to help documentation things we do while being linked to their respective stories. If we're looking to know why something is that way, we can blame that line and find the PR that changed that, otherwise for general questions, we may want to take a look at our markdown files.

Does that answer your question correctly? 😃

– charpeni

---

<a name="do-you-use-story-books" href="#do-you-use-story-books">#</a> **Q:** Do you use [story books](https://storybook.js.org/) in your projects? Do you approve the approach of “developing on [story book](https://storybook.js.org/) first”? – Alireza Ghamkhar

**A:** We don't currently use storybooks, but we're definitely taking a look at an approach like this! One of the folks on our design team has used them in the past with great success, so we're trying to figure out how to fit them in with our workflow.

– eliperkins

---

<a name="what-is-your-tak-on-relying" href="#what-is-your-tak-on-relying">#</a> **Q:** What is your take on relying RN components that you can install from npm? – Rintsi

**A:** We don't currently do it. 😃 it's a tradeoff you have to take! I think using pre-designed components from npm can lead your UI to have a design or branding that isn't quite unique to your company's brand. that said, there are some handy components out there! (like https://github.com/jeremybarbet/react-native-modalize 😃)

– eliperkins

---

<a name="how-do-you-guys-get-staging" href="#how-do-you-guys-get-staging">#</a> **Q:** How do you guys get "staging" versions of the app to your stakeholders/testers's devices so they can test and approve changes you are working on? Just use the built in [Google Play](https://play.google.com)/iTunes ([TestFlight](https://developer.apple.com/testflight/)) for Android/IOS or some other tools? – ativ

**A:** Yup! We use [TestFlight](https://developer.apple.com/testflight/) for iOS and [GooglePlay](https://play.google.com) for Android. 😃 😄

– Jenel

---

<a name="if-you-get-to-pick" href="#if-you-get-to-pick">#</a> **Q:** If you get to pick the next Android version name, what would you name it? – mostlymat

**A:** The next version after Q would be R, so I'd say Android Red Velvet. For Q, I can't answer.. 🤔

– charpeni

---

<a name="do-you-use-living-style" href="#do-you-use-living-style">#</a> **Q:** Do you use (living) style guide or have a concept of shared styles between iOS/Android? – Rintsi

**A:** We have a common set of components that we share across iOS and Android, but there are some places we customize per platform. one example of this is how we handle search-style components and their filters. on iOS, we want a segmented control, while on Android, we want tabs. to handle this across our app, we build out components that allow us to render those platform-specific implementations, either by using `Platform.select` and friends, or by creating a more abstract component with render props, inversion of control, etc.

– eliperkins

---

<a name="how-is-react-native-better" href="#how-is-react-native-better">#</a> **Q:** How is React Native better than [Flutter][flutter]? – Tee-Sean

**A:** Because JavaScript ;)

Seriously, the JS tooling ecosystem is fantastic! also, flutter recreates platform-specific components, rather than adopting them (like `UINavigationController` and friends). this leads to poor handling of things like accessibility and platform updates. RN totally wins out here if you Use The Platform™ 😃.

– eliperkins

---

<a name="where-do-you-pull-the-line" href="#where-do-you-pull-the-line">#</a> **Q:** Where do you pull the line on "this component is getting too big, we should move xy out to a new one"? – essenin

**A:** I think the amount of responsibilities of the component is a big one. Does it do one or two specific things, or does it do 231940812 things? If it's too many, consider breaking it down. Are you duplicating logic from one component into another? maybe create an abstract component that can be used across both components instead. there's no right or wrong answer to this, but in general, small well-scoped components are pretty great. 😄

– eliperkins

---

<a name="regarding-react-hooks-what-do" href="#regarding-react-hooks-what-do">#</a> **Q:** Regarding React hooks, what do you think is the best, saving the values on useState or create a reducer only to store values before sending them to your endpoints? – humarkx

**A:** We just upgraded to RN 0.59 and we barely touch React Hooks for now, we'll need more time playing with hooks before having a strong opinion on this 😃.

– charpeni

---

<a name="how-to-share-some-data" href="#how-to-share-some-data">#</a> **Q:** How to share some data like authentication token outside React components where context or [Redux][redux] is not accessible. I am currently using global.apiToken for that in my api client. What do you recommend? – gamingumar

**A:** Creating an abstraction over this allows for you to move this around easily too! Consider creating something like `UserController.getAuthToken()` as an abstraction over `global.apiToken`. then, if you want to move it in the future to something that isn't `global` (like `AsyncStorage` or a cookie manager or user defaults or even just in memory), your callsites don't need to change 😃 this will be important as your codebase grows (and as you start doing things like external security audits and pentesting 😛)

– eliperkins

---

<a name="do-you-ever-have-components-connected" href="#do-you-ever-have-components-connected">#</a> **Q:** Do you ever have components connected to store? (Even if only some) And how you avoid and fight this when that is about to happen? – humarkx

**A:** We connect components to both [Redux][redux] and [Relay][relay]! we only really fight this if the component is just for display. we generally connect the outer most components and then pass data down, but we don't have a specific rule around it.

– eliperkins

---

<a name="what-has-been-the-highest" href="#what-has-been-the-highest">#</a> **Q:** What has been the biggest mistake you’ve made? – Rintsi

**A:** Stellar question! I think rewriting things is a terrible idea, after doing a rewrite myself. Rewrites mean that you stop building and shipping new features while you rewrite the ones that your users currently have. I think if I was asked if I'd ever consider a full rewrite again, I would ask if we could rewrite in smaller increments over time, rather than all at once. Slack's blog about doing this with their desktop client was fantastic: https://slack.engineering/rebuilding-slack-on-the-desktop-308d6fe94ae4.

– eliperkins

In general - "cutting it short". lollll. There was one time (recently 😂) where I was so excited that I fixed a bug, but found out later it wasn't the correct fix. I was so excited and just wanted to throw a PR up just to fix this annoying bug I've been working on for a couple days. If I pushed the changes to master it would have guaranteed caused some major issues.... So, my biggest mistake is probably going to fast when I really need to slow down and look at things from all perspectives.

– Jenel

My biggest mistake is probably forgetting about tests, having too much confidence in my code and third-party libs, it may works now, but it could potentially be changed later. Breaking stuff in production should be avoidable.

Also, even we can use JavaScript in React Native, that doesn't mean we have to replace all the native look and feel by JavaScript implementations. 🙃

– charpeni

---

<a name="we-are-about-to-use-graphql" href="#we-are-about-to-use-graphql">#</a> **Q:** We are about to use GraphQL subscriptions, however, [SocketIO][socketio] for real time data seems also good, considering we are using GraphQL on the project, on React Native, what would be your choice, GraphQL subscriptions or [SocketIO][socketio]? – humarkx

**A:** As far as I understand it, GraphQL subscriptions are just a spec, so you might end up using something like [SocketIO][socketio] with websockets in the end! I think GraphQL subscriptions are awesome 😃.

– eliperkins

[apollo]: https://www.apollographql.com/
[clubhouse]: https://clubhouse.io/
[expo]: https://expo.io
[flow]: https://flow.org/
[flutter]: https://flutter.dev/
[redux]: https://redux.js.org
[relay]: https://relay.dev/
[socketio]: https://socket.io/
[typescript]: http://www.typescriptlang.org/
