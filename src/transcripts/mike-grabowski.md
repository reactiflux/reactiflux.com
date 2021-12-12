---
title: Mike Grabowski
date: 2016-06-23
location: Q&A Channel Reactiflux
description: "React Native Core Contributor | RNPM Author | Topic is native modules, installing dependencies, tooling & native shipping"
people: "[@grabbou](https://twitter.com/grabbou)"
---

## React Native Core Contributor

<a name="effect-would-brexit-leave-vote" href="#effect-would-brexit-leave-vote">#</a> **Q:** What effect would a Brexit "Leave" vote have on the U.K.'s tech industry? - _brianboyko_

**A:** Brexit, pretty good question. Haven't thought about it that much, but I wouldn't be surprised if some of my friends from Poland decide to come back, like @knowbody 😄

---

<a name="re-navigatornavigatorexperimental-use-systems-like" href="#re-navigatornavigatorexperimental-use-systems-like">#</a> **Q:** re: Navigator/NavigatorExperimental... which should we use and are systems like react-native-router-flux which rely on NavigatorExperiemental influencing the path forward with development? - _davidbrear_

**A:** from react-native-router-flux, there's also ex-navigation built by Exponent, which is meant to be a v2 for the current ex-navigator. Having used it for quite a long time, I am moving towards using it in my next project. There's nothing wrong in using bare NavigationExperimental as is from react-native core, at least to understand the internals and how it works. Although I still have this feeling it might be too low-level for most of the users and can introduce the extra maintainance oveerheat, at least know when we have quite a few breaking changes being shipped. If you want to stay on the safe side of things, definitelly try out these community packages.

---

<a name="work-moving-animations-away-js" href="#work-moving-animations-away-js">#</a> **Q:** How is the work on moving animations away from the JS thread going on both Android and ios. I've noticed someone work has been done on ios but a PR for Android seems to have died down when issues were hit. - _Alias_

**A:** for bringing this up. In fact I've just upgraded all my apps to 0.29.0-rc.0 to take advantage of native iOS animations. Can't really tell the performance difference for now as they are all in the early stage of development, but the code is definitelly there and is moving towards having more and more features. iOS has now a bit better support for different kinds of animations (although it still doesn't support animating bottom property for instance) than the Android one. The work on Android things is mainly done by Kris (authored original PR) and I've been successfully seeing small additions being made in every release.

---

<a name="honest-opinion-working-reactnative-compare" href="#honest-opinion-working-reactnative-compare">#</a> **Q:** In your honest opinion. How does working with react-native compare to swift. If somebody already know swift, why should it use react-native? (it's a very subjective question) - _lewix_

**A:** Wouldn't say I am a Swift expert, but I have worked with Objective-C for quite a long time. I think I can answer that given I am one of the few (?) developers who actually quite enojoy using its syntax! To me, react-native solved the most annoying problems I had when developing apps, which was seamless support for REST APIs (and other json resources) as well as managing state of my app and avoiding side effects. So I wouldn't neccessarily say there's something in React Native that makes it a to go solution, but it's more React and the paradigm that's moving the platform forward.

---

<a name="whats-general-feeling-documentation-moment" href="#whats-general-feeling-documentation-moment">#</a> **Q:** What's the general feeling about the documentation? At the moment it seems very hit and miss - ios only demos, es5 examples and very hard to read examples. Will this be a future focus? - _Alias_

**A:** There's a community-hackhaton happening right now as we speak here in order to improve documentation, conducted by Facebook CA & London. If you take a look at latest master commits, you'll see plenty of docs-related PRs merged. The general plan is to improve examples and user experience, so that it's easier to navigate and find the informations you need.

---

<a name="opinion-whats-best-way-learn" href="#opinion-whats-best-way-learn">#</a> **Q:** In your opinion whats the best way to learn RN for a beginner? What kind beginner app would teach someone like me most of RN? - _Asep_

**A:** at the company I am working, we don't have a general app idea we suggest our interns to build. It is important at this stage to pick something /idea/ you are excited about so that in case you have troubles making it working, you are still excited enough to keep it going. Currently we are building an app that controls AirPlay speakers so that everyone in the office can queue song to be played. Takes ages since everyone's learning React Native there, but it's fun so maybe it's also your next app idea? 😉

---

<a name="hi-experience-based-gh-issues" href="#hi-experience-based-gh-issues">#</a> **Q:** Hi 😄 From your experience (based on GH issues or perhaps questions you receive), what people find the most hard/unappealing/annoying in React Native when developing real production apps? - _ilyagelman_

**A:** question. I would say native APIs are quite tricky, but it's been easier now with things like rnpm and stackoverflow having more and more answers. Back in the day, things like adding push notifications or location watchers were a bit complicated to someone who just used to access these properties under window. And that's iOS only. Soon after that, you will find yourself going through Google docs trying to understand how to set it up.
But I don't feel super strong with this answer. There are tons of issues, so I can also list styles and flexbox problems people are having, for sure.

---

<a name="thoughts-angular-2-see-competitor" href="#thoughts-angular-2-see-competitor">#</a> **Q:** What are your thoughts on Angular 2? Do you see it being a competitor to React or has Angular had its time in the sun. - _doodirock_

**A:** I've stopped using Angular like a year ago, so can't really speak for it. However, if we are speaking about its integration with the NativeScript which seems to be the most popular approach, I don't think it's going to have a better DX than React Native. Again, for someone with native experience, using 1:1 native APIs with Javascript may seem appealing, but at that point, I'd just consider going straight to the native code. React Native has this nice abstraction that you can just use web-like APIs in a cross-platform way where possible.

---

<a name="really-love-react-react-native" href="#really-love-react-react-native">#</a> **Q:** I really love react and react native as view libraries but not having a preferred way of handling the state of the application and communication with any backends leaves many questions open for developers. Many different libraries like redux, relay and others try to solve these issues. Can you suggest a stack that works for large REST based apps or is it really better to move to graphql and relay? - _igin_

**A:** We are still slowly adopting GraphQL at the company, mainly because most of the apps are a companion additions to already made services that consume REST APIs. In regards to the state management, it really depends. We use redux, some plugins and stuff to store and persist system-wide elements, like currentUser, token, session, flags about onBoarding. We also use a lot of state where it makes sense, e.g. when you open up a modal that contains user profile - there's no need to fetch it through redux for instance. My personal advice is to always start small & simple and move things to a more convinient place, like redux when you feel like it's getting out of your control.

---

<a name="personal-projects-typically-differentiate-navigation" href="#personal-projects-typically-differentiate-navigation">#</a> **Q:**: In your personal projects, do you typically differentiate navigation between android (with a drawer) and iOS (with a tab bar). Do you like to keep a similar feel in the app and use one or have special handlers that render differently on different devices? (sorry for all the navigation questions, I'm just wrestling with "best practices") - _davidbrear_

**A:** Depends on the project! Recently I am seeing a trend that people want to have the so-called MainScene platform specific, so that iOS utilises tab bar with e.g. 4 tabs and the last one is the "options" tab (kinda Facebook-like) whereas the Android just goes directly with side menu. In most of the apps, we keep containers and presenters platform-independent and optimise small components to platform design guideliness. For example - we have Notifications view, on iOS there's no shadow and on Android the card looks a bit more Material-like. But the container itself is the same.

---

<a name="hi-dude-bank-im-currently" href="#hi-dude-bank-im-currently">#</a> **Q:** Hi dude. At the bank I'm currently working at we're contemplating building an app for certain services. Obviously I'm biased towards React Native, but I see their point about using something like Cordova to re-use existing HTML views. At the same time React Native still seems like more "beta" than Cordova, which in banks means unstable (and banks hate non-stable). What are your thoughts on these points? - _cbrevik_

**A:** Can't list the name because of NDA, but there's one very popular UK bank having React Native in production that I've seen being developed. People can't really tell the difference. When we are pitching React Native to the client who's concerned about stability and performance, I am always bringing up the interoperability. It can either be native app running few React Native views, or React native app running few native views. I wouldn't say building banking app in RN/Cordova would be a wise decision after all, but the companion apps seem totally fine to me.

---

<a name="routing-navigation-doesnt-seem-yet" href="#routing-navigation-doesnt-seem-yet">#</a> **Q:** Routing and Navigation doesn't seem yet to have The Way to solve it, as we have it for the web or the native platforms. Do you think there will be some standard implementation of it in the future, maybe with NavigatorExeperimental, or that probably will always fall to the developer to implement? - _rseemann_

**A:** I think NavigationExperimental is definitelly closer to being the to go solution here, since it's all in all up to the developer to manage the state of views and perform actions, like push/pop. We can now see that things that were almost impossible previously (tap twice the tab bar icon to reset active stack) are now dead simple. I have this feeling that the community wrappers mentioned previously are a really good candidates to answer almost all use-cases for typical app.

---

<a name="hi-preferred-test-setup-js" href="#hi-preferred-test-setup-js">#</a> **Q:** Hi, what is your preferred test setup for your js? - _cdreier_

**A:** Nothing fancy, standard Jest set up as in react-native itself. We mainly unit-test reducers and actions, for views, we haven't had a lot of time yet to do it properly. That's why I am in love with snapshot tests as it's just a matter of few minutes to get it working (there's an article on my medium if you are interested in learning more).

---

<a name="touchablenativefeedback-get-love-right-default" href="#touchablenativefeedback-get-love-right-default">#</a> **Q:** When will TouchableNativeFeedback get some love? Right now by default it doesn't feel native at all (need to hold it down for any feedback) , and when nested in views the ripple locations are all over the place (there's a few issues about for this but seem to have gotten lost). For Android this is absolutely key to making the app feel native. - _Alias_

**A:** Good question, haven't heard of any plans within the core team itself to work on it. I would suggest re-posting this Q on the Facebook group to get more traction. https://www.facebook.com/groups/reactnativeoss/

---

<a name="would-like-ask-another-question" href="#would-like-ask-another-question">#</a> **Q:** I would like to ask another question about Angular and React. Do you think it's a good idea to use the two alongside of each other? For example to use Angular as a tool to support the overall architecture and React to implement individual features within this architecture. (I'm asking this because most people I'm working with are completely into Angular) - _Prutser_

**A:** Not really sure. You can use https://github.com/angular/react-native-renderer which I think kinda addresses your concerns. My personal feeling about this project was that having to know two frameworks in order to build an app might be a bit too much for a single team. Not really sure how this integration works under the hood and whether all bindings and interactions were Angularized though.

---

<a name="okay-followup-said-wouldnt-say" href="#okay-followup-said-wouldnt-say">#</a> **Q:** Okay, follow-up. You said "I wouldn't say building banking app in RN/Cordova would be a wise decision after all". Why so? - _cbrevik_

**A:** First of all I think it might be hard to convince any bank to React Native, given that they may have loads of Java developers (and possibly other internal services) already built with it? I am not a banking expert, but amount of security that has to be put in such solutions makes me feeling that by the end of the day, you will end up having a lot of native code anyway (e.g. Barclays has checks for rooted devices, my banking app disables previews of the app when it open the app switcher on iOS etc.) I think it all boils down to the fact that banks are super strict about these technologies in their core products.

---

<a name="upon-updating-react-native-versions" href="#upon-updating-react-native-versions">#</a> **Q:** Upon updating react native versions (in this case 25.2 to 27.2), Did you have to add the -lc++ to Other Linker Flags in xcode, and encountered "Cannot find module {some number}" in the ios logs when debugging? If so, how did you fix? - _Butch_

**A:** I think I had similar error back in the day. In my case it wasn not only because of lc++ flag (I had it already because of snapshot tests), but also I've noticed that react-native upgrade liked to remove \$(inherited) from linker flags which was breaking my CocoaPods setup. Bringing these two flags back made the project compile again.

---

<a name="hardest-thing-face-right-core" href="#hardest-thing-face-right-core">#</a> **Q:** What is the hardest thing to face right now as a core contributor technically and organizationally in react-native code base? - _jondot_

**A:** Good question! I think the hardest thing is to stay up to date and always be aware of what's happening. I've been recently super busy with my own startup and merging rnpm, hence I didn't have a lot of time to do some pull request or keep spamming all issues. I am specifically responsible for the releases, so it's a lot of responsibilities as you have to makes sure the update you are sending out is not going to break straight away on loads of devices! But it's fun, a lot of things going on. People within the core team are really helpful and I love the fact we have so many different backgrounds. So that whenever we are stuck with anything, we just keep asking each other questions and React Native is moving forward 😃

---

<a name="opinions-best-way-bind-functions" href="#opinions-best-way-bind-functions">#</a> **Q:** Do you have any opinions on the best way to bind functions or when to use the different options? - _bondparkerbond_

**A:** I am using arrow functions as class properties, e.g. `a: () => { this.setState() }` and just pass it as is to a handler. Don't have any preference on other solutions, e.g. whether to bind in constructor or in `render()`, the differences are really minimal unless you render like hundreds of views.

---

<a name="whats-startup-vcarl" href="#whats-startup-vcarl">#</a> **Q:** What's your startup? 😄 - _vcarl_

**A:** callstack.io, just a small dev shop about React Native. I've been spending my free time 100% on React Native so that I found it's time to give back and quit my daily JS job. Wish it was a product startup though ;/

---

<a name="think-well-able-way-performance" href="#think-well-able-way-performance">#</a> **Q:** When do you think we'll be able to have some way to have the performance improvement of the `shouldComponentUpdate` for stateless pure function components? - _rseemann_

**A:** I don't know, keep it for a React Core Q&A! You can also tweet sebmarkbage on Twitter, he's always on top of all algo improvements 😃

---

<a name="see-rn-similar-approaches-bringing" href="#see-rn-similar-approaches-bringing">#</a> **Q:** Do you see RN, or similar approaches of bringing JS to other platforms, bringing JS to Augmented, or Virtual Reality? There was a talk on React Conf 2016 about React being used with A-Frame and that kind of raised the question if we could do it in native as well. https://www.youtube.com/watch?v=ty2bFeOdGeI - _rseemann_

**A:** I haven't heard of any RN-related solutions yet. My main concern is the performance in real-time, though I would say if anything comes up at some point, it's going to be e.g. a native component wrapper. That said, it might be better to investigate iOS/Android answers to that problem

---

<a name="rnpm-kureev-saw-need-linking" href="#rnpm-kureev-saw-need-linking">#</a> **Q:** With rnpm you and kureev saw the need for linking modules easier, and filled that "community need". (Awesome job by the way). Do you see any other current (or future) needs in the world of RN which is yet to be solved by the core project, but could be a thing the community could take on? - _cbrevik_

**A:** Not sure if there's anything that painful coming up right now, but... There's an open debate on how to move platform-specific build tools away so that there's no such thing as Xcode or Android Studio for an average developer. There's also plan to rework Yeoman init command so that you have more scaffolding (new library, new project) which is a next step for an rnpm (but since we are plugin-based, it's unlikely we do it exclusively behind the scenes, so please help!) (I just realised I focused purely on tooling side of things)

---

<a name="guess-long-take-make-es6" href="#guess-long-take-make-es6">#</a> **Q:** Any guess on how long it will take to make ES6 the default for react in terms of usage/documentation? - _bondparkerbond_

**A:** I've seen @gaearon tweeting about it recently. I know Facebook internally is working on migrating to ES6 classes as well, but I don't know any dates on that one.

---

<a name="big-discussion-classes-factories-js" href="#big-discussion-classes-factories-js">#</a> **Q:** There is a big discussion about classes or factories in JS. As far as I recall, most of the RN code is written with classes. Is that for performance purposes, or is there another reason? - _rseemann_

**A:** Do you have any link / code example with a factory? Not sure if I remember any. Initially I thought you might be referring to lazy getters as in index.js of React Native itself

---

<a name="opinion-could-android-port-good" href="#opinion-could-android-port-good">#</a> **Q:** in your opinion, could the android port be as good as iOS or will it always lag behind in terms of performance and quirks ? (I feel the latter just because - well, android) - _jondot_

**A:** Hahaha. The Android implementation is really solid in terms of code, features and structure. We can't really workaround all its limitations (or features), like the fact that you can't have overflow: visible which is sometimes a deal breaker. It's definitelly improving given how it's been working few months ago. But if we are speaking simulator-development experience only, I am not really sure if anything will move as close in terms of performance as the iOS Simulator.

But I think keeping "well Android" in mind might also help 😃 Sure how's that on iOS as I haven't dive in that deeper recently into its code, but I remember when I was investigating race conditions and exploring how threads are used on Android part of React Native, I've seen quite a few places where there were signs of `web worker` like code, ie. the ability to run different JS threads etc. It has a lot of hidden features 😄

---

<a name="interface-designers-facebook-handling-react" href="#interface-designers-facebook-handling-react">#</a> **Q:** Did you interface with designers in Facebook handling React Native designs (handing off designs to devs) and how did that go? Did they get training? Was it awkward (since it's not native not web nor anything they saw yet) - _jondot_

**A:** Don't know the answer as I've never worked for Facebook (though it's been always my dream haha). At my company, we just deal with standard templates as made for iOS/Android and designers don't know that they are targeting React Native at all. Of course sometimes we tell them that some of the features are hard to make, but since they have some development background, they know we are serious.

---

<a name="weve-recent-stability-issues-react" href="#weve-recent-stability-issues-react">#</a> **Q:** We've had recent stability issues with React Native only on Android (in dev, it hangs on fetching javascript bundles). Any thoughts on this, and in general, is Android generally behind iOS for React Native, or is it considered to be up-to-par with iOS. (P.S. we're hudge react native advocates, thanks and great work) - _pete_

**A:** I have this feeling we might need to exchange few DM later as I had that issue with Android crashing on bundle fetching (not really sure if it got solved, but I remember one team having this particular issue). In general what I am seeing is that my iOS app has ~100 crashes and recent Android build has like 7k exceptions on some specific Samsung devices. As far as I am aware of Android and its specifics, it's trickier to provide same experience in terms of performance because you deal with not only loads of devices but also loads of vendored Android versions that have modified internals. I had a crash once on Samsung devices only just because Samsung changed few classes React was using. Thankfully Facebook team is aware of most of them and always trying to fix them (these are these weird commits we can never understand pushed by internal employees!). Feature-wise I think we are reaching (if not yet) a stage where features are the same and development happens on both platforms at once 😃
