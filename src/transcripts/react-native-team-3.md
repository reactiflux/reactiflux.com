---
title: React Native core team (August 2019)
date: 2019-08-08
time: 1-2pm PT / 8-9PM GMT
location: Q&A Channel Reactiflux
people: "[@reactnative](https://twitter.com/reactnative)"
---

## Follow the team

- [@Eli_White](https://twitter.com/Eli_White) (EliWhite)
- [@fkgozali](https://twitter.com/fkgozali) (fkgozali) (Kevin Gozali)
- [@emilyjanzer](https://twitter.com/emilyjanzer) (janzer)
- [@rickhanlonii](https://twitter.com/rickhanlonii) (Rick)
- [@ZackArgyle](https://twitter.com/ZackArgyle) (Zack Argyle)
- [@hectorramos](https://twitter.com/hectorramo) (hector)
- [@cpojer](https://twitter.com/cpojer) (christoph)

## Introduction

Hi everyone! Thanks for having us back. We are so happy to be here! There are lots of things to talk about today!

-We recently open sourced a new JavaScript engine optimized for React Native on Android
-Ram gave an amazing talk on the performance lessons we’ve learned:
-0.60 supports auto linking native modules:
-A new hot reload experience called Fast Refresh will be coming soon: https://twitter.com/dan_abramov/status/1144630845103362048
-We recently shipped a redesign to the documentation and we are working to improve the documentation and guides to be more helpful
-And so much more!

We’d love to talk about these things, and we want to hear what you’d like to know about. Let’s get started!!

_— EliWhite_

---

<a name="do-you-agree-about" href="#do-you-agree-about">#</a> **Q:** Do you agree about ComponentWillMount() being deprecated in ReactJS? And will React Native show a warning about it at some point? – edo

**A:** React Native shows the same warnings as React, so on the next version of RN that includes that version of React, you'll be able to see that warning and improve your code the same as you can with React DOM.

– EliWhite

---

<a name="hey-i-have-a-question-regarding" href="#hey-i-have-a-question-regarding">#</a> **Q:** Hey! I have a question regarding the animated module, will there ever will be native driver support for layout properties? – Xam

**A:** This is something we are investigating for Fabric but not sure yet if we can commit to this working yet. We definitely need to have some way to animate layout properties though and won't be removing functionality that currently exists.

– EliWhite

---

<a name="would-you-recommend-using-hermes" href="#would-you-recommend-using-hermes">#</a> **Q:** Would you recommend using [Hermes][hermes] right away on Android? Or is there any gotchas to be aware of? – fiznool

**A:** Yes, we recommend trying it out on your app, and feel free to file an issue if you encounter a specific problem.

– fkgozali

---

<a name="do-you-feel-like-youve" href="#do-you-feel-like-youve">#</a> **Q:** Do you feel like you've fallen over yourself with releasing 0.60 as stable? – Kim

**A:** I'm not sure what you mean by this, can you elaborate. 0.60 is an awesome release with improved upgrade tools, autolinking, and hermes among other things. We are super excited that it shipped!

– EliWhite

---

<a name="do-you-recommend-using-react" href="#do-you-recommend-using-react">#</a> **Q:** Do you recommend using [React Native Web][react-native-web]? – metamarcdw

**A:** We don't have an official stance on this, but we do think that support for web could be done in a much better way. That said, it's a great project and we hired [Nicolas](http://nicolasgallagher.com/) (the author), so we must think it's alright 😉.

– Zack Argyle

---

<a name="i-realise-this-isnt-directly" href="#i-realise-this-isnt-directly">#</a> **Q:** I realise this isn't directly relevant but I've yet to establish a better way to ask - who could I get in touch with about setting up react.js.org ? – v4

**A:** I believe you can email [opensource@fb.com](mailto:opensource@fb.com) for that. Thanks!

– EliWhite

---

<a name="when-hooks" href="#when-hooks">#</a> **Q:** When hooks? – metamarcdw

**A:** Now! The version of React that added Hooks is part of the React Native 0.59 release from March 2019.

– hector

Hooks shipped with React Native in 0.59!

– EliWhite

---

<a name="i-really-want-to-contribute" href="#i-really-want-to-contribute">#</a> **Q:** I really want to contribute to react native project. but I really don't know from where I can start. Do I have to have the native knowledge first? From where do you suggest? – Alireza Ghamkhar

**A:** We have a new guide for creating your first React Native pull request, check it out and hit us up with any questions you have https://github.com/facebook/react-native/wiki/Pull-Requests#getting-ready-to-submit-your-first-pull-request.

– Rick

---

<a name="hello-what-will-be-the-case" href="#hello-what-will-be-the-case">#</a> **Q:** Hello, what will be the case when componentWillReceiveProps gets deprecated? – ritviz

**A:** As you may know, `componentWillReceiveProps` will be warned to be renamed to `UNSAFE_componentWillReceiveProps` starting in the next release. This is so that developers understand that it's not a safe method to use for some features in a future release, but the `UNSAFE_` methods will be supported through React 17.

To migrate your repo you can run `npx react-codemod rename-unsafe-lifecycles`.

– Rick

---

<a name="will-hermes-arrive-to-the-default" href="#will-hermes-arrive-to-the-default">#</a> **Q:** Will Hermes arrive to the default React Native at some point in the future? (Instead of an optional option like it currently is) – edo

**A:** We see this being the default eventually. We worked to make the opt-in as easy as possible, and we don't have a timeline for when it will get switched over.

– Rick

Here's a recent comment from Marc about how we're thinking about making Hermes the default: https://github.com/facebook/hermes/issues/79#issuecomment-519309648

"For open source React Native, Hermes is still opt-in. We recognize that it’s a big change, and we want to work with the community to determine if and when it’s right to make Hermes the default. We welcome any issues and PRs around engine inconsistencies. For developers who strongly value compatibility, they will be able to continue using JSC on Android as long as the community keeps maintaining it."

– janzer

---

<a name="couple-of-things-first-is-it" href="#couple-of-things-first-is-it">#</a> **Q:** Couple of things. Firstly, is it possible to somehow use Hermes on iOS? Or just some other JS engine. It should be allowed. Secondly, auto-linking is nice and all, but Turbo Modules with lazy loading of modules looks much better, any insight on when will that be available? – Udon Soup

**A:** We're actively testing this in FB production. In fact, RNTester iOS app in github enables this by default. What's left is that we need to migrate some nativemodules in react-native repo to fully enable it. The earliest for full rollout is probably early 2020, but you can already play around with it on iOS today.

– fkgozali

---

<a name="react-native-interactable-a-gesture" href="#react-native-interactable-a-gesture">#</a> **Q:** [_React-Native-Interactable_](https://github.com/wix/react-native-interactable) a gesture library would you recommend using it to mock screens like map or Instagram slide up message pane? If not what would be the best approach to make such a sliding pane/container for an app? – Heavenly_Entity

**A:** We haven't used it internally at least, so I think it depends on the need for your app. There are multiple ways to implement the sliding pane. E.g. at FB we actually bridge over native implementation of "bottom sheet" by exposing tiny JS wrapper for it. This approach works well if you already have other screens built natively that use the same pattern, hence you can achieve UX consistency.

– fkgozali

_**Follow-up**_: Do you have a API reference link?

Here you go: https://github.com/facebook/react-native/blob/5ec382d1be781ff941316168a0657f163c1d2dac/Libraries/Utilities/useWindowDimensions.js#L17.

– fkgozali

```typescript jsx
import { useWindowDimensions } from "react-native";
```

was added in this commit: https://github.com/facebook/react-native/commit/5ec382d1be781ff941316168a0657f163c1d2dac

– EliWhite

---

<a name="any-ideas-on-how-to-unify" href="#any-ideas-on-how-to-unify">#</a> **Q:** Any ideas on how to unify [Jetpack Compose](https://developer.android.com/jetpack/compose), [SwiftUI](https://developer.apple.com/xcode/swiftui/) and RN? – x0s3

**A:** Are you interested in using all these libraries in the same app, or are you thinking more about the direction of the projects?

– janzer

_**Follow up**_: If are there any ideas in how to compile react-native to them and go full native (JSX to dsl or something like that).

Ah, I see. I don't think we're thinking about that right now, but we're definitely interested in those projects and will be following along to see the direction they take.

– janzer

---

<a name="will-hermes-eventually-work" href="#will-hermes-eventually-work">#</a> **Q:** Will [Hermes][hermes] eventually work on iOS, is it even possible to do that? – Free Elk

**A:** Right now Hermes is only available on Android and we're not sure if or when that will change.

– Rick

---

<a name="does-react-native-contain-support-for" href="#does-react-native-contain-support-for">#</a> **Q:** Does React Native contain support for interactions with the “back to app” button within the StatusBar on iOS? Specifically, I’m trying to execute a function when returning to an app after pressing that button. – Foobarking

**A:** I'm not sure about this specific functionality but it seems like if you can run some native code at this point in native code, then someone in the community should be able to write a module to add support for that to RN. That's one of the beautiful things about React Native!

– EliWhite

---

<a name="we-all-have-custom-requirements" href="#we-all-have-custom-requirements">#</a> **Q:** We all have custom requirements in one or the other way and the new upgrades will always help us achieve it in the best way possible. Considering the way react-native is portrayed in the market currently("Less learning curve for a web dev") - Is react-native's one of the aim to reduce the amount of native modules created? – SanTy

**A:** I don't really see us getting rid of the need to create native modules (like you said, every app has custom requirements), but we do want to make it as easy as possible to build native modules without too steep a learning curve for people without native Android or iOS expertise.

– janzer

---

<a name="foldable-phones-seems-will-be" href="#foldable-phones-seems-will-be">#</a> **Q:** Foldable phones seem that become a standard in the future. What strategies would you propose for achieving such responsive designs out of the box? – muneneevans

**A:** One of the great things about React Native is that people use Flexbox to write their apps which is responsive by default! That gets apps most of the way there and for really complex situations there are other APIs like Dimension and onLayout.

– EliWhite

---

<a name="what-would-1.0-for-react" href="#what-would-1.0-for-react">#</a> **Q:** What would a 1.0 for React Native look like? – axemclion

**A:** We recently talked about this on the panel at Chain React. I'd recommend checking out the answer from there! Here is a link to that part of the panel: https://www.youtube.com/watch?v=Jm19JlVukak&feature=youtu.be&t=1140

– EliWhite

---

<a name="are-there-updates-to-react-native" href="#are-there-updates-to-react-native">#</a> **Q:** Are there updates to React Native docs? Can you share more about it? – axemclion

**A:** Yes! We just revamped the React Native website (see https://twitter.com/reactnative/status/1158320695937556480), and are now focusing on refreshing the whole suite of React Native docs. We'd like to hear what people want to get out of the docs, please tag [@reactnative](https://twitter.com/reactnative) or [@rachelnabors](https://twitter.com/rachelnabors) / [@hectorramos](https://twitter.com/hectorramos) on Twitter with your feedback!

– hector

---

<a name="are-you-taking-any-new-actions" href="#are-you-taking-any-new-actions">#</a> **Q:** Are you taking any new actions for improving the performance of FlatList (I know the best practices for current one). If yes, can you explain a bit about it? – Alireza Ghamkhar

**A:** We use FlatList for all of our React Native lists internally, including really complicated lists such as the Marketplace feed in the Facebook app. We haven't run into many performance issues with FlatList. I know that this is a common question and it is clear that getting FlatList to work great for people's use cases can be difficult and daunting. It would be really helpful to have small reproducible cases that hit the FlatList performance issues. We would also love to hear recommendations on how we can improve our documentation and APIs to help people fall into the pit of success more often!

– EliWhite

---

<a name="need-insight-on-random" href="#need-insight-on-random">#</a> **Q:** Need insight on random `react-native run-android` command failure. – SanTy

**A:** Can you tell us more?

– hector

_**Follow up**_: Let's say I'm running my project and had to stop and re-run it. `react-native run-android` fails the first time and when I run the same command again, it works. Sounds silly but I've not been able to find and answer to this on the internet.

It sounds like you may need to run `react-native start`. That said, `run-android` by itself should ideally work the first time, so please do submit an issue to the https://github.com/react-native-community/cli repository after checking if it hasn't been raised there yet.

– hector

---

<a name="is-the-rn-team-allowed" href="#is-the-rn-team-allowed">#</a> **Q:** Is the RN team allowed to make decisions independent of the React team? – Sandi K - サンディ

**A:** The two teams are actually working pretty closely together, so usually we make sure that React design is compatible across platforms.

– fkgozali

---

<a name="given-the-uncertainty-of-hermes" href="#given-the-uncertainty-of-hermes">#</a> **Q:** Given the uncertainty of [Hermes][hermes] making it to iOS, what kind of performance enhancements can we expect for there if any? – Free Elk

**A:** There are still lots of opportunities to improve performance for RN apps on iOS. Ram talked about some of them in his talk at Chain React: https://www.youtube.com/watch?v=nphKGWjhg2M.

– janzer

---

<a name="given-how-expo-has-evolved" href="#given-how-expo-has-evolved">#</a> **Q:** Given how [Expo][expo] has evolved, would you recommend it for more complex apps? Are there common requirements an app could have that would immediately rule out [Expo][expo]? – luis-agm

**A:** I think [Expo][expo] is actively expanding its capabilities for more use cases, so I would say it would depends on your requirements for what complex apps mean. I'm going to defer to [Expo][expo] folks though. cc [@brentvatne](https://twitter.com/notbrent).

– fkgozali

---

<a name="i-think-i-couldnt-make-my-point" href="#i-think-i-couldnt-make-my-point">#</a> **Q:** ] I think I couldn't make my point in my last question so I'm gonna ask it differently. For those who are interested to have any kind of contribution to the react-native project, are there any starter issues so that they can start contribution. Are all the PRs somehow related to native side or on some of them or is React/JS knowledge enough? – Alireza Ghamkhar

**A:** We have all sorts of issues! You don't need native experience for a great chunk of them. I suggest going through the issues tagged with the "Help Wanted" / "Good first issue" labels as a good place to get started. You can also help out with the docs by submitting PRs to https://github.com/facebook/react-native-website, no iOS/Android/JavaScript coding required!

– hector

---

<a name="will-there-ever-be-a-way" href="#will-there-ever-be-a-way">#</a> **Q:** Will there ever be a way to sign and test iOS apps on Windows? – efu

**A:** Unfortunately, not something I think we can answer for you.

– Zack Argyle

---

<a name="do-you-think-react-native-will-die" href="#do-you-think-react-native-will-die">#</a> **Q:** Do you think React Native will die to [Flutter][flutter]? – efu

**A:** We're not worried about it 😉. I'm more curious to see what Jetpack Compose does to Flutter.

– Zack Argyle

---

<a name="how-are-thing-around-fast-refresh" href="#how-are-thing-around-fast-refresh">#</a> **Q:** How are things around fast refresh/hot reloading going? I saw the great video of it in the revamped docs, but am unsure what I have to do to enable it/when it's out? I'm especially looking forward to not needing to restart if I forget an import and red screen! – bondparkerbond

**A:** We are super excited about Fast Refresh. It is an amazing change to the developer experience. We are expecting it to ship in 0.61! Can't wait!!

– EliWhite

---

<a name="what-possibilities-are-you-the-most" href="#what-possibilities-are-you-the-most">#</a> **Q:** What possibilities are you the most excited about Fabric opening up? – empyrical

**A:** I think rolling out Fabric to the world is only the first step. What's most exciting is that Fabric enables much more sophisticated capabilities that were previously not possible to achieve with just asynchronous rendering.

– fkgozali

To add on to Kevin's answer, I think we're excited about Suspense and concurrent mode, which Fabric is a prerequisite for. I'm also excited for some of the subtle UX issues it'll fix, like the "jump" you see when embedding a RN component in a native screen.

– janzer

---

<a name="will-there-be-a-code-review-and-fixes" href="#will-there-be-a-code-review-and-fixes">#</a> **Q:** Will there be a code review and fixes for all TODOs in code base. Or is it better to create PRs? – Udon Soup

**A:** It's on our todo list!

– hector

---

<a name="how-do-you-think-flutter" href="#how-do-you-think-flutter">#</a> **Q:** How do you think [Flutter][flutter] will effect RN? – SirHesham

**A:** Design-wise, we chat with them and share inspiration. In fact, the React Core team working on their new Flare event system has taken inspiration from many other event systems ([Flutter][flutter] being one of them). https://github.com/facebook/react/issues/15257)

– Zack Argyle

---

<a name="will-there-soon-be-media-query" href="#will-there-soon-be-media-query">#</a> **Q:** Will there soon be media query support for stylesheets w/o having to use a library? `Dimensions` is what I have to use then make multiple `if` statements based off the `dp` with `var` and pass it into the stylesheet. – Heavenly_Entity

**A:** We don't have any plan in the short term for media query support. We did land a new API to access Dimensions via hooks though: useDimensions(), it may help with your component styling.

– fkgozali

---

<a name="hello-there-amazing-work-with" href="#hello-there-amazing-work-with">#</a> **Q:** Hello there, amazing work with RN. Is it overwhelming with React and React Native? Do you feel fatigue hearing this a lot all the time? – Brihas

**A:** It's exhilarating! There is so much to do! And so much responsibility to do the right things by all of you.

– EliWhite

---

<a name="adding-icons-and-splash-screen" href="#adding-icons-and-splash-screen">#</a> **Q:** Adding icons and splash screen to a React Native app is time consuming if you are not using [Expo][expo]. Any plans on making this easier by default? – gamingumar

**A:** Welcome to the life as an iOS developer! I wonder if we can help out here by improving the base React Native app template provided by the RN CLI. Thoughts?

– hector

_**Follow-up**_: I think there should be a base template like [Expo][expo] does, that just asks for an icon and background color to generate splash screen. If user wants to customize more they can do it later.

---

<a name="i-have-a-question-regarding" href="#i-have-a-question-regarding">#</a> **Q:** I have a question regarding two things. First, will there be a ready to use navigation system that implements native modules or will the community have to use third party tools in the long run? Second, are there any plans to make integrating packages that are not using [Android X][android-x] simpler? – needforbleed

**A:** We don't have any plans to provide something like this. I'm not as familiar with the [Android X][android-x] question, so I'll leave that for someone else...

– janzer

---

<a name="any-recommendations-on-automated-performance" href="#any-recommendations-on-automated-performance">#</a> **Q:** Any recommendations on automated performance testing. We've tried doing this with [Appium](http://appium.io/) in our team with little success (timeouts made those test unreliable) and are having a hard time setting up [Detox][detox] as an alternative. Any tools we might be missing? I assume the RN team uses automated performance regression testing tools of some sort? – Tijs

**A:** Check out [@axemclion](https://twitter.com/nparashuram)'s talk from Chain React. I believe he talked a bit about how you can wire up performance monitoring from production. This is the technique we use at Facebook. https://www.youtube.com/watch?v=nphKGWjhg2M

[@axemclion](https://twitter.com/nparashuram) also has a great blog series on this, hopefully he can link to some more resources 😃.

– EliWhite

---

<a name="are-there-any-plans-to-improve-issue" href="#are-there-any-plans-to-improve-issue">#</a> **Q:** Are there any plans to improve issue triaging on GitHub? I get that the mass of issues can be pretty overwhelming, but it’s not always clear which ones are higher/lower priority for the core team to work on. – Jeremy

**A:** We published a Guide to Contributing to React Native earlier this year. Triaging issues is covered! See https://github.com/facebook/react-native/wiki/Issues#triaging-issues to learn how you can help triage issues. We could use more folks that partake in this process in order to make sure the most pressing issues are seen by the core team.

– hector

---

<a name="i-am-sure-you-get-into-the-JS" href="#i-am-sure-you-get-into-the-JS">#</a> **Q:** I am sure you get into the JS engine details while working on React Native, what did you uncover which could benefit everyone else? This could have led to [Hermes][hermes] if I am right. – Brihas

**A:** A few things stood out. We're mainly focused on startup time, as people seem happy with the interactivity of our RN apps. As we started investigating, we learned just how much time is spent doing I/O on android devices. Even a few kb of I/O savings can be observable on older phones. That drove a lot of the design of Hermes. But this lesson can apply to app code, too. Be lazy about loading code and minimize your dependencies. Another lesson is to parallelize network and on-device work, and make your app appear responsive even before you have network data.

– React Native core team member

---

<a name="any-recommendations-for-a-local-db" href="#any-recommendations-for-a-local-db">#</a> **Q:** Any recommendations for a local DB in combination with RN for large data sets? – Hantar

**A:** Our team doesn't use many open source libraries for this so we aren't the best people to answer this. We also don't like picking favorites in the ecosystem! 😃

– EliWhite

---

<a name="for-example-on-my-mac-the" href="#for-example-on-my-mac-the">#</a> **Q:** For example, on my Mac, the web version of Discord is using nearly 200+ mb of memory of the heap, how do you measure such things for RN? – unknown

**A:** For iOS, i have been able to use Safari to connect to JSC and get JS sampling profiles and memory usage. For Android, there is [Hermes][hermes]. [Hermes][hermes] has a sampling profiler and a memoryDumper.

– axemclion

---

<a name="what-advice-would-you-give" href="#what-advice-would-you-give">#</a> **Q:** What advice would you give to your past self a couple years after you graduated uni if applicable? – Udon Soup

**A:** I'm sure everyone has their own answers, but here's mine: This industry changes at an amazing speed. Keep current, and don't let a bad company or manager keep you from doing what you want to do. There are plenty of great opportunities out there.

– React Native core team member

Here's the advice I would have given myself:

1. Always bet on Javascript
2. Journey before destination. Technologies are always changing, stay flexible, enjoy the ride.
3. Invest in Amazon...just trust me

– Zack Argyle

Buy Bitcoin, sell in december 2017, bet on javascript

– Rick

It's been a long, long time since I graduated, and my answer to this would be different, as you might expect, depending on when you asked me. Sitting here today, it's clear that this industry moves fast and that the things you might end up working on have not been invented yet. Do not sweat the details, develop a love for learning, and do not be afraid to jump into new experiences. Also, find a great team of folks to be inspired by and learn from ❤️.

– hector

---

<a name="will-there-be-a-review-of-a-view" href="#will-there-be-a-review-of-a-view">#</a> **Q:** Will there be a review of a view management on Android, because removeSubclippedViews currently is buggy. Also how does [Detox][detox] working for FB with [Hermes][hermes]? – Udon Soup

**A:** For Android, we're improving the view rendering pipeline as part of Fabric project as well. So there will be improvements coming in the future. For [Detox][detox], we aren't using it internally at the moment because we have our own FB specific test infra. But I don't think using [Hermes][hermes] will impact [Detox][detox] behavior.

– fkgozali

---

<a name="when-will-0.61-pre-changelog" href="#when-will-0.61-pre-changelog">#</a> **Q:** When will 0.61 pre-changelog be available? – x0s3

**A:** The 0.61 pre-release branch has not been cut yet, so taking a look at the commits that have landed on master after 0.60.4 was cut might give a glimpse into what a 0.61 release might include: https://github.com/facebook/react-native/compare/v0.60.4...master (we cut releases from master, and let them soak for a month or so before promoting them to stable). This list is incomplete as it lacks commits that landed after the 0.60.0 pre-release cut which have not been cherry picked into any of the .1, .2, .3, or .4 patches.

– hector

---

<a name="is-there-any-work-in-progress" href="#is-there-any-work-in-progress">#</a> **Q:** Is there any work in progress for showing the errors better. I mean like [reactotron](https://github.com/infinitered/reactotron)? – Alireza Ghamkhar

**A:** @Rick is working on building an awesome error and logging experience for React Native and it will be exciting.

– christoph

Yes! I'm working on this now. We want to consolidate the yellowbox and redbox screens, update the design, give you more information, and improve the experience for infra errors (like syntax errors and not connecting to [Metro](https://facebook.github.io/metro/)).

– Rick

[android-x]: https://developer.android.com/jetpack/androidx
[expo]: https://expo.io
[detox]: https://github.com/wix/Detox
[flutter]: https://flutter.dev/
[hermes]: https://engineering.fb.com/android/hermes/
[react-native-web]: https://github.com/necolas/react-native-web
