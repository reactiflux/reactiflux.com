---
title: React Native core team (May 2019)
date: 2019-05-09
time: 12:30-1:30pm PT / 7:30-8:30PM GMT
location: Q&A Channel Reactiflux
people: "[@reactnative](https://twitter.com/reactnative)"
---

## Follow the team

- [@Eli_White](https://twitter.com/Eli_White) (EliWhite)
- [@fkgozali](https://twitter.com/fkgozali) (fkgozali) (Kevin Gozali)
- [@emilyjanzer](https://twitter.com/emilyjanzer) (janzer)
- [@joshuaisgross](https://twitter.com/joshuaisgross)
- [@rickhanlonii](https://twitter.com/rickhanlonii) (Rick)
- [@ZackArgyle](https://twitter.com/ZackArgyle) (Zack Argyle)
- [@hectorramos](https://twitter.com/hectorramo) (hector)
- [@lunaleaps](https://twitter.com/lunaleaps) (luna)
- [@cpojer](https://twitter.com/cpojer) (christoph)
- [@sahrens2012](https://twitter.com/sahrens2012) (sahrens)
- [@yungsters](https://twitter.com/yungsters) (yungsters)
- [@ramanpreetnara](https://twitter.com/ramanpreetnara) (Ramanpreet)
- [@shergin](https://twitter.com/shergin) (Valentin Shergin)
- [@mdvacca](https://twitter.com/mdvacca) (David Vacca)
- Mehdi Mulani (not on twitter) (mehdi)

![The team hard at work answering questions!](https://media.discordapp.net/attachments/193117606629081089/576135096860672025/image0.jpg?width=1239&height=931)
_The team hard at work answering questions!!_

## Introduction

Hello everyone! Thanks for joining us! We are the React Native team at Facebook and excited to hear what is on your mind!

I recently gave a talk at F8 (Facebook's developer conference) that talks about what we've been working on for the last two years and where we are taking the framework in the future. Check that out as well as the React Radio podcast [Christoph](https://twitter.com/cpojer) was on to talk about all the improvements we've been making in the community. You can find the links to both of those here: https://facebook.github.io/react-native/blog/2019/05/01/react-native-at-f8-and-podcast (https://facebook.github.io/react-native/blog/2019/05/01/react-native-at-f8-and-podcast)

We have some new people on our team so they'll introduce themselves once they get set up!

Let’s jump in! Excited to answer your questions.

_— EliWhite_

---

<a name="we-want-news-about" href="#we-want-news-about">#</a> **Q:** What is the current status of the rearchitecture? – Foyarash
<a name="fabric-status" href="#fabric-status">#</a> **Q:** Fabric status? – edo

**A:** This work is still under heavy active development. We are doing production testing at Facebook right now for the architecture improvements. There is still lots to do here before we can ship it to all of you and have you rely on it. 😃 We are also answering questions as we go in this github issue as well: https://github.com/react-native-community/discussions-and-proposals/issues/4. It has been really awesome to see some people in the community start getting stuff running in open source and testing with it.

– EliWhite

---

<a name="what-do-you-think-is-the-best" href="#what-do-you-think-is-the-best">#</a> **Q:** What do you think is the best way to do debugging? I use chrome/react native debugger, and find it hard to trust the breakpoints I set, because they don't always work at the place I set them (they jump around). This is specially hard with template literals and async function). Is this a react native problem, or a chromium problem, and do you experience this yourself? – jarry

**A:** The best way to do JS debugging would be to use the Google Chrome debugger. It's strange that you're running into those problems debugging JavaScript because all the JS should be running in Google Chrome. (We're not doing anything special here). So the debugging problems may likely be unrelated to RN.

That said, we're re-implementing the Google Chrome debugger (to work with the new architecture of RN). This debugger is currently internal-only, but once we're confident, you'll likely see it in open source.

– Ramanpreet

The Chrome debugger is great, if your break points aren't working it's probably related to source maps. If you filed an issue we could take a look!

We also use Flipper for debugging native https://fbflipper.com/.

– Rick

---

<a name="are-there-any-plans-to-support" href="#are-there-any-plans-to-support">#</a> **Q:** Are there any plans to support Web as a platform in React Native? – hodgef

**A:** Great question! As you probably know, there are a few experimental projects out there like [react-native-web](https://github.com/necolas/react-native-web) and [react-native-dom](https://github.com/vincentriemer/react-native-dom). The authors of both of those projects have recently joined Facebook and the React org. Also with official support for things like VR and windows, we are very interested in the web. Unfortunately, we have nothing to announce at this time.

– Zack Argyle

---

<a name="flutter-seems-to-be-up" href="#flutter-seems-to-be-up">#</a> **Q:** Flutter seems to be up and coming, and will likely have incredible support for Android. What do you guys see that is lacking in Flutter that RN has advantage over? I personally dislike Flutter's styling and find CSS a lot more comfortable, but other than that, is there good reason why RN is still a better choice than Flutter? – fc373745

**A:** Another thing is the whole Dart versus JS also the community of existing support and adoption of React practices.

– luna

I am not sure that the premise is true. Flutter is on the same playing field as React Native as far as developing for Android is concerned. That said, the advantage the React Native has is leveraging the hard work that the Android UI team is investing into the Android OS platform. For example, we try our best to expose Android's TalkBack capabilities instead of inventing our own. The other advantage is that as far as language familiarity is concerned, more people in the world are familiar with and contribute using JavaScript than with Dart.

– yungsters

Flutter. I don't know what this fact means for Flutter and RN, but it's interesting that building RN-renderer that renders in Flutter seems really easy to do, whereas opposite it's practically impossible. 🤔

– Valentin Shergin

Looks like there are lots of questions about Flutter, I don't think there has been any questions about [Jetpack Compose](https://developer.android.com/jetpack/compose) though! That's a cool project too!

– EliWhite

---

<a name="fabric-status" href="#fabric-status">#</a> **Q:** Fabric status? – edo

**A:** The core features of React Native are already implemented in Fabric and we are doing production testing at Facebook. All the code of Fabric is open source and you can take a look at it in the github repo. Although, there are still some things to do before we can enable Fabric for Open Source projects.

– David Vacca

---

<a name="espionage" href="#espionage">#</a> **Q:** Brand new trying to learn mobile development -> What would you suggest for them to learn to get started with RN? – espionage

**A:** Try building something with [Expo](https://expo.io/). like a sudoku app or something you can share to friends and get feedback from them on. I find it’s easiest to learn when you have a goal in mind and know what the next thing blocking you is

– mehdi

This applies to anyone getting started with mobile dev in general. I recommend reading the Apple Human Interface Guidelines and Android's Material Design guide. Get familiarized with what a good experience looks and feels like on each platform. This will help you craft a higher quality app, regardless of what framework you use.

– hector

---

<a name="detox-seems-to-be-the-go-to" href="#detox-seems-to-be-the-go-to">#</a> **Q:** [Detox](https://github.com/wix/Detox) seems to be the go-to solution for e2e testing RN apps, but occasionally the integration breaks. What does fb use internally for e2e tests? Is there a plan for fb and wix to communicate and cooperate more so that RN and [Detox](https://github.com/wix/Detox) are kept compatible? I'm aware of some [Detox](https://github.com/wix/Detox) tests in the RN repo - is there a plan to extend them, do you accept community contributions? – vonovak

**A:** At Facebook we use a bunch of different testing strategies for products using RN. One of the cool ones is we make it really easy to render React Native screens with mock data, and just assert that no yellow or redboxes show up. It is pretty interesting how valuable that has been.

On the [detox](https://github.com/wix/Detox) side, we have actually spent a bunch of time working with Wix. I spent a week in their office last year to talk about this. 😃 We have added [Detox](https://github.com/wix/Detox) to our CI config for the React Native repo. We have a couple of components with tests for [detox](https://github.com/wix/Detox), but would love more! These tests even caught a regression in TextInput this morning which is awesome!

– EliWhite

---

<a name="how-does-the-process-of" href="#how-does-the-process-of">#</a> **Q:** How does the process of adding PR's to a release go. If we're currently on 59.8 and a PR gets merged into master today, would it be included in a 59.X, 60.X, or 61.X release? – bondparkerbond

**A:** If a PR is merged right now, it will go to 0.61 because we already cut the 0.60 branch that is going to be published as an RC and stable later. We are now making sure that we only make "major" releases when we have exciting new features to share and are also working on making upgrading easier. 0.60 will come with a new autolinking feature that makes it easy to add native dependencies without messing with your project files!

In general, we will backport important security, performance or behavior fixes. Release management takes a ton of time from our contributors, including [@grabbou](https://twitter.com/grabbou) @oldman.Logan and [@turnrye](https://twitter.com/turnrye) among others. If you'd like to start contributing to React Native, helping with releases is a great way to help! Let me know if you are interested ([@cpojer](https://twitter.com/cpojer) on Twitter or [cpojer@fb.com](mailto:cpojer@fb.com) via email).

– christoph

In general, a PR merged today will not be included in a current release (0.59.9 as of this writing). The changes in that patch should get picked up when the next release is cut from master. There is, however, a process for nominating a patch to be backported into an existing release. This is all managed through the https://github.com/react-native-community/releases repository. In this particular case, if there's any PR that was recently merged but did not make the 0.59.8 release, you can comment on https://github.com/react-native-community/releases/issues/124 and make your argument for getting it cherry-picked. I would also point out that the PR must have been merged, we cannot cherry-pick changes into a release if it's still part of an unmerged PR.

– hector

---

<a name="hi-im-currently-a-college" href="#hi-im-currently-a-college">#</a> **Q:** Hi, I'm currently a college student majoring in Computer Science, so I have a general question for the members of the team. What do you wish you knew before you began working in the industry? What path led you to work at Facebook and on React Native? – josm

**A:** How to use source control, what it’s like running a service 24/7. In college I experimented with Haskell and loved it but it was not great at running my website 24/7. I also think it’s good to try building something in college, just to help with confidence etc.

My path: interned at tech companies in my city, then interned at Mozilla, eventually interned at Facebook, graduated and started working here full time.

– mehdi

---

<a name="a-lot-of-people-are-obsessing" href="#a-lot-of-people-are-obsessing">#</a> **Q:** A lot of people are obsessing about react (and react native) performance and trying to optimize everything - how much of this is just paranoia? Do you think there's any overoptimizing going on? And what are legitimate concerns? Sorry for the long question. – Kognise

**A:** I think the reason we see a lot of talk about performance is because React has taken other conversations off the table. There may be some paranoia and over-optimizing, but I like to think most people are just really interested in the topic and want to write the best code possible. Legit concerns are things that you measure and find an issue with!

– Rick

There does seem to be some overoptimizing happening around the performance of React. I think that instead of focusing on benchmarks, people should focus on production instrumentation to identify bottlenecks affecting users and opportunities for optimization.

For React Native, we have learned a lot about the performance characteristics of mobile devices over the past year. I'm sure there is some scrutiny over parts that we do not think are problematic (e.g. bridge traffic serialization), but we've definitely identified others that are real concerns. A side effect of the Fabric and TurboModule projects is mitigating unnecessary runtime costs and avoiding operations that scale with the size of your app.

– yungsters

---

<a name="what-navigation-framework" href="#what-navigation-framework">#</a> **Q:** What navigation framework would you suggest? – dbar

**A:** I personally suggest the native navigation like [wix/react-native-navigation](https://wix.github.io/react-native-navigation/#/). But there is [react-navigation](https://reactnavigation.org/) (pure JS solution) that works as well.

If your app eventually will become hybrid (mixed of native screens and RN screens), the [react-native-navigation](https://wix.github.io/react-native-navigation/#/) may be an easier path for you, since it would be more compatible.

– fkgozali

---

<a name="do-you-think-the-hiring" href="#do-you-think-the-hiring">#</a> **Q:** Do you think the hiring process could be improved/refined? If so, what would you say needs to be changed? – Benzy

**A:** Do you mean hiring for teams at facebook?

– luna

_**Follow up**_: Yes

Re: hiring at facebook - I'm sure there's always room for improvement and it isn't like Facebook hiring is an isolated effort; the industry and expectations shift. From what I've seen the culture for hiring at fb is extremely thoughtful and considerate of candidates backgrounds. I'm sure you could reach out to recruiting as well to get their stance.

– luna

---

<a name="should-we-use-useref" href="#should-we-use-useref">#</a> **Q:** Should we use `useRef` to store Animation Value inside, like that: `React.useRef(new Animated.Value(0))`? – minhtcx

**A:** Yeah that's totally reasonable.

– sahrens

If you want to avoid calling Animated.Value on each render, you could try a lazy initial value with `const [value] = useState(() => new Animated.Value(0))`

– Zack Argyle

Another alternative is to useRef and only initialize `ref.current` if it's null.

– yungsters

---

<a name="performance-has-been-a-huge" href="#performance-has-been-a-huge">#</a> **Q:** Performance has been a huge issues for our app in production, what is being done to address the responsiveness of animations? – dbar

**A:** For many many users and products, the RN performance is already more than good enough, but some products push the perf and quality bar even further.
We do recognize this issue and we are working hard to drastically improve all aspects of mobile app performance including general responsiveness, load time, and animations. The Fabric and TM efforts are all about that.

We do believe that RN apps can be even more performant than apps written in idiomatic style and using a vendor-provided framework (e.g. UIKit) even if RN uses the same framework under the hood; our data clearly suggest that reaching this crazy-ambitious goal is absolutely possible.

The practical solutions are vary; we are working hard to ship them as soon as possible. If you are interested in details, I would suggest watching commits in the repository marked with "TM" and "Fabric".

– Valentin Shergin

---

<a name="can-you-please-comment" href="#can-you-please-comment">#</a> **Q:** Can you please comment about relay graphql support in react native? – reetkr

**A:** Can you explain a little more what you mean by this? Relay is supported in React Native today, and we use it pretty broadly in our RN apps here at FB. Is there something in particular you're looking for?

– janzer

---

<a name="with-turbomodules-eventually" href="#with-turbomodules-eventually">#</a> **Q:** With Turbomodules eventually allowing interacting directly with native views, would it be possible to have a new navigation library that uses native navigation like react-native-navigation but have each view still be part of One react native app(vs each view technically being its own react native app)? – bondparkerbond

**A:** TurboModule interacts with native functions/classes, not native views specifically. You might be referring to Fabric (the UI re-architecture).

Anyway, I don't think Fabric changes the navigation concept. Fabric manages individual React Views, outside of UINavigationController/Android Activity/Fragment. So I think the current navigation solutions today will continue to exist. One future direction here is to allow React Suspense concept per React RootView (i.e. preparing react root component before navigating). We'll revisit this when Fabric fully rolls out.

– fkgozali

---

<a name="can-react-native-for-windows" href="#can-react-native-for-windows">#</a> **Q:** Can react native for windows become a serious alternative to electron? – edo

**A:** I'm super excited about React Native Windows. I love that we've been seeing companies and teams see the value of the React model and bringing it to more frameworks. I know that we are talking about Windows, but it is super awesome that Twitter's website is written with React Native (for web). They don't use React Native on mobile, so it isn't about code sharing for them, they just found that the mental model, primitives, and APIs in React Native is just a better way to build.

I'm excited for React Native Windows because Microsoft is seeing this too, they are using React Native Windows for a bunch of their apps and sharing code with other React Native platforms, but even when building for just Windows they are seeing that React Native helps make this much easier.

So in regards to it replacing Electron, I think that is an exciting potential future, but it is definitely not required for React Native Windows to be extremely successful.

– EliWhite

---

<a name="is-there-any-plan-to-migrate" href="#is-there-any-plan-to-migrate">#</a> **Q:** Is there any plan to migrate the Facebook App to RN as they are doing the whole frontend with React ,Reason, GQL etc.? – umair170

**A:** Nope. Right now RN screens co-exist alongside native screens in the Facebook app. In general, Facebook is an iterative company, so we try using RN for new things. It also makes more sense for us to build new products instead of rewriting the whole app.

– mehdi

To add to @mehdi's answer about RN in the FB app: The new Dating product is partially written using React Native. Exciting!

– christoph

---

<a name="textinput-now-talking" href="#textinput-now-talking">#</a> **Q:** TextInput (now talking about iOS but Android is likely similar) is a fairly difficult component (JS <-> native communication) and uses some hacks to get around various problems, while other problems are still present (auto correct changes do not get propagated to JS, some CJK problems). Is the component going to benefit from the synchronous communication made possible and do you plan to revisit the current implementation? – vonovak

**A:** Yes! One of the things I'm excited about for the new architecture is exactly this. Being able to selectively handle some JS callbacks synchronously will enable really clean interop with TextInput, so we will be able to do things like complex input validation without flicker, and generally clean up the whole component. It's not a silver bullet though - TextInputs are generally very complex components with lots of platform differences and bugs but we will definitely be on better footing.

– sahrens

---

<a name="is-there-any-way-to-use" href="#is-there-any-way-to-use">#</a> **Q:** Is there any way to use React code in React-Native directly?  It’s taking time to change code from React to React-Native. – fgrgec

**A:** There isn't an out-of-the-box solution for this because React Native operates on different primitives (i.e. not div, span, etc.). There are at least several conference talks from the community that share how they do it. There's also [react-native-web](https://github.com/necolas/react-native-web) if you are willing to change how you write web apps using React.

– yungsters

---

<a name="how-to-optimize-performance" href="#how-to-optimize-performance">#</a> **Q:** How to optimize the performance of Flatlist if I have a huge list and I want to start from the middle or any index far away? – gamingumar

**A:** It depends quite a bit on the details of your app and where your data is coming from and how it's rendered. Ideally implement getItemLayout - then you can make use of initialScrollIndex: https://facebook.github.io/react-native/docs/flatlist#initialscrollindex. You also might want to try using VirtualizedList directly. If you have more specific issues especially with things not working as documented, please file a github issue.

– sahrens

---

<a name="with-auto-adding-native" href="#with-auto-adding-native">#</a> **Q:** With auto adding native modules and making cocoapods the officially recommended method to add libraries on iOS, will we still be able to manually add libraries if we wish? What release will force use of cocoapods for native modules(if any)? – bondparkerbond

**A:** Cocoapods is the recommend way of managing native modules on iOS going forward from 0.60 but it won't be forced on people. You can still manually link your dependencies or use another package manager if that is what you prefer. That means you won't get any of the benefits of the new autolinking system. With autolinking, for example, upgrading will be easier because it doesn't change your project files when you add a native dependency. Instead, native modules are linked into your project during build time.

– christoph

---

<a name="many-rn-packages-break" href="#many-rn-packages-break">#</a> **Q:** Many rn packages break with newer versions of react-native and some require react-native to be downgraded to an older version, is there any better way to manage these dependencies? – AyushAco

**A:** Something I would love to see in the ecosystem is a way for pre-release versions of packages to trigger CI in the projects that rely on them, and for that to report back build status to the upstream project. I think this would radically change the ecosystem of packages and reducing unintentional breaking changes. I actually proposed this feature to [greenkeeper](https://greenkeeper.io/) back in 2017 but it didn't seem to get much traction. 😃 https://github.com/greenkeeperio/greenkeeper/issues/241

– EliWhite

To add to what Eli said: we are hoping to build an "RNTester" app (our manual testing app in the repo) in the React Native Community repo that features the top 20 or so native modules so we have something that we can test new releases against. This work hasn't started yet, let me know if you are interested in helping build this!

– christoph

---

<a name="what-is-the-difference-between" href="#what-is-the-difference-between">#</a> **Q:** What is the difference between being a Contributor and a Collaborator on the React Native repo? What is the best way to help? – bondparkerbond

**A:** We recently published a document that describes the React Native ecosystem, which you can find in the root of the repo at https://github.com/facebook/react-native/blob/master/ECOSYSTEM.md. There's three types of collaborators that we call out in that doc: companies that have been long-time contributors to React Native such as Expo and Microsoft, core contributors that are actively helping move React Native forward, as well as library maintainers in the community.

Collaborators are not just limited to those three types, of course. Every day, we have people helping out by filing issues, sending PRs, writing blog posts, and teaching others about React Native. I am currently in the middle of revamping our contribution guidelines to help call out these types of contributions, as well as help people get started on their path as a contributor to React Native. You can see https://github.com/facebook/react-native/pull/24705 for a sneak peek at this rewrite.

– hector

---

<a name="i-am-currently-facing-some" href="#i-am-currently-facing-some">#</a> **Q:** I am currently facing some keyboard covering the textinput in RN, are they some tricks when coding to avoid that? – lewatt23

**A:** his can be a tricky issue, unfortunately. I'd start with using KeyboardAvoidingView: https://facebook.github.io/react-native/docs/keyboardavoidingview and see if that does what you need. When I was working on the Oculus app we ended up using a combination of KeyboardAvoidingView and `android:windowSoftInputMode` on Android to get the behavior we wanted: https://developer.android.com/training/keyboard-input/visibility.

– janzer

---

<a name="are-there-plans-to-add" href="#are-there-plans-to-add">#</a> **Q:** Are there plans to add a guide regarding the app submission process? Currently working on my first App Store / Play Store submission, and it's been a little bit of a headache trying to follow along with guides that may have spotty or outdated information. – yeehaw

**A:** We are currently collecting feedback about how to improve our documentation here: https://github.com/facebook/react-native-website/issues/917

– christoph

---

<a name="does-any-of-facebook" href="#does-any-of-facebook">#</a> **Q:** Does any of facebook projects use pure js [react-navigation](https://reactnavigation.org/) library? – Radical

**A:** Facebook has its own native navigation solution, specific to FB, so nope.

– fkgozali

_**Follow up**_: Any chance it goes open source?

Nope, it's very FB specific and it's not practical to be used widely.

To clarify: the FB navigation solution is a pure native solution that supports pure native screens/VC/Activities/Fragment. RN screens internally plug into that system, so we treat each screen separately.

– fkgozali

---

<a name="is-it-possible-to-use" href="#is-it-possible-to-use">#</a> **Q:** Is it possible to use Rust WebAssembly with React Native? – KaGacz

**A:** Maybe? People are doing all sorts of things with React Native, so maybe? I don't think we've heard about anything specific to Rust and RN though.

– EliWhite

---

<a name="i-see-flutter-has-deep" href="#i-see-flutter-has-deep">#</a> **Q:** I see flutter has deep integration with c++ such that it has advantages on animations and some core functionalities. Is react native get such an overhaul to be deeply rooted with the OS so developers can get advantage of performance and native functionalities? –

**A:** In the rearchitecture of RN, Fabric, the core is written in C++ and has sync APIs and we can share the same implementation across all platforms. We expect animation to eventually benefit from the rewrite. See this thread for more details: https://github.com/react-native-community/discussions-and-proposals/issues/4.

– Joshua Gross

---

<a name="can-anyone-contribute" href="#can-anyone-contribute">#</a> **Q:** Can anyone contribute to the react Native project ? Or you need a certain number of years in development? – lewatt23

**A:** Yeah, anyone can contribute! We're working on a new guide for first time contributors, you can preview it here: https://github.com/facebook/react-native/pull/24705.

– Rick

---

<a name="what-are-your-thoughts-on-the-recent" href="#what-are-your-thoughts-on-the-recent">#</a> **Q:** What are your thoughts on the recent push by Microsoft to React Native for PC/Xbox/etc. Do you see any cool opportunities to collaborate with them in the near future? – bondparkerbond

**A:** Yeah, there are lots of opportunities to collaborate! We have been for a while actually. We have an open channel with a bunch of folks at Microsoft where we've been talking about the changes to the architecture, some of the stuff they've been working on, and exciting future stuff. Having Microsoft as a partner is really awesome for React Native.

– EliWhite

We are already collaborating a lot! We are frequently meeting with people from Microsoft and they are one of our partners who are significantly invested in pushing React Native forward. Even out talk at F8 and their talk at Microsoft Build about React Native Windows were connected. If you wanna learn more about our partners who collaborate with us on React Native, check out this document: https://github.com/facebook/react-native/blob/master/ECOSYSTEM.md.

– christoph

---

<a name="is-the-new-rn" href="#is-the-new-rn">#</a> **Q:** Is the new RN going to come with Swift/Kotlin ? – Riba

**A:** We already support integration between React Native and Swift, Kotlin, C# and other languages.

In particular for Kotlin, we are planning to write part of the core of RN for Android using Kotlin in the near future.

– David Vacca

(From iOS side of the world:) I can clarify why RN iOS does NOT use Swift inside the core.

We do love Swift but seems there is no reason to use swift inside RN because UIKit is written in Objective-C. So using Swift will not improve performance or safety. AFAIK, even Apple does not use Swift much yet, which is really sad.

My personal hope is that Apple is working on a new generation, general purpose UI framework fully based on Swift (and rewritten Swift-powered foundation). After (and if) they release that and after it gets some significant adoption, we can create a fully Swift-powered mounting layer.

Anyway, even today Swift apps can use RN as easy as UIKit (because, again, both are written in Objective-C).

– Valentin Shergin

---

<a name="how-do-you-feel-about-ota-update" href="#how-do-you-feel-about-ota-update">#</a> **Q:** How do you feel about OTA update libraries like Microsoft CodePush? Is it worth the extra effort to gain the ability to update without going through the app store for small updates or urgent bugfixes? – BakedBeans

**A:** The OTA capabilities in React Native is an amazing feature you can take advantage of. There are definitely tradeoffs that you need to weigh. There is definitely additional complexity in using it and setting it up. If you are a small group and can just ship new releases whenever, it might not be as worth it. If you are part of a bigger organization with a fixed release schedule of something like every couple of weeks, then having the ability to ship something between releases can feel like a super power.

– EliWhite

---

<a name="where-do-you-see-rn" href="#where-do-you-see-rn">#</a> **Q:** Where do you see RN in the next 5 years? – espionage

**A:** I provided an answer to a similar question (4 years though, not 5): https://www.reddit.com/r/reactnative/comments/azuy4v/were_the_react_native_team_aua/eib22gs/?context=3

I'll reproduce it here:

I see the future of React Native in two phases.

At the end of the first phase, I see React Native as a native framework for bridging the React paradigm to any native platform. We're seeing the beginning of this with Fabric and TurboModules by changing React Native to be less opinionated, more interoperable, and more general purpose. I expect React Native to be able to support any native mobile, desktop, or AR/VR platform. We already see a desire for this this from companies wanting React Native for platforms beyond Android and iOS.

Before I move onto the second phase, it's important to understand what we're trying to accomplish with React Native. We are trying to bring React to native user interface development. We think React strikes a very good balance between an expressive and intuitive developer experience and flexibility for framework authors to provide good performance and interfaces.

At the end of the second phase, I see React Native returning back to "React". This means a lot of things, and it's definitely more fuzzy. But it will mean converging lessons and abstractions between React Native and React for web. It will probably mean raising the level of abstraction above what developers are currently familiar with on web. Fun fact, Twitter's entire website is already built using React Native (react-native-web). While this might look like some holy grail of "code sharing", it is not necessary. I believe it can actually lead to higher quality experiences on all platforms.

– yungsters

---

<a name="what-does-the-rn-team-think" href="#what-does-the-rn-team-think">#</a> **Q:** What does the RN team think about [Jetpack Compose](https://developer.android.com/jetpack/compose)? – axemclion

**A:** I am very excited to see Google taking a first party stance on a declarative component model for Android UI development. I think that more players in this space afford more opportunities to share good ideas. Since this project seems to be developed in close proximity with the Android team, I'm excited for any new primitives that they create for Compose that we'll also be able to leverage from React Native for Android.

– yungsters

---

<a name="is-there-a-go-to-solution" href="#is-there-a-go-to-solution">#</a> **Q:** Is there a go-to solution for maps? We need maps for showing places and routes but we've been having dependency problems with react-native-places. – AyushAco

**A:** I believe https://github.com/react-native-community/react-native-maps is the best supported and most used Maps solution.

– sahrens

---

<a name="can-context-replace-redux" href="#can-context-replace-redux">#</a> **Q:** Can context replace redux completely? – gamingumar

**A:** It can if you want it to 😃. There are a lot of similarities. You could even rewrite [react-redux](https://github.com/reduxjs/react-redux) using context to simplify a lot of it. That said, the functional reducer approach used by redux is a nice way to compose global state, so I don't think it will disappear.

– Zack Argyle

---

<a name="i-know-that-fb-team" href="#i-know-that-fb-team">#</a> **Q:** I know that FB team as every team has limits. Do you see any area where RN community should focus more, but you observe it's not? – rostislav.simonik
<a name="what-is-the-biggest-issue" href="#what-is-the-biggest-issue">#</a> **Q:** What is the biggest issue on open source right now? – axemclion

**A:** I think we've focused a lot on the technical open source aspects of React Native from our perspectives. We need to do a better job as a team, and as a community, to be more inclusive. For contributors, for speakers, and for thought leaders. I cannot even imagine how many good ideas, opinions and code we are missing out on because we haven't built a group of external core contributors with ideas different from ours. If you'd like to support this effort, please reach out to me ([@cpojer](https://twitter.com/cpojer) on Twitter or cpojer@fb.com).

– christoph

Metro issue #1 - symlink support.

– Rick

---

<a name="is-fb-still-testing" href="#is-fb-still-testing">#</a> **Q:** Is FB still testing DS/Algos in interviews? – fc373745

**A:** The amount of DS/Algos in interviews depends on the role. For front-end engineers we focus on javascript and browser expertise, not so much on data structures (other than trees since the DOM is a tree).

– Rick

---

<a name="does-rn-have-plans-for-more" href="#does-rn-have-plans-for-more">#</a> **Q:** Does RN have plans for more officially supporting RNW? RNW seems to be stagnating somewhat. In my company, having Web as a supported 3rd target platform (besides Windows 4th after Microsoft showing ever more commitment to it) would be a great boon for adoption of RN as a whole, in addition to our “traditional” native iOS/Android app development. – Aryan

**A:** We've been watching this work pretty closely. As [@yungsters](https://twitter.com/yungsters) mentioned, we see the future of RN being supported on more platforms. Specifically, we see web support improving by taking a lot of the lessons learned separately in React and React Native and moving them closer together. In fact, [Nicolas](https://twitter.com/necolas) (creator of [RN-web](https://github.com/necolas/react-native-web)) has joined Facebook and is now on the React core team working on some of these improvements. Something to keep an eye on 😃.

– EliWhite

To add to [@EliWhite](https://twitter.com/Eli_White)'s answer, check out [@Rick](https://twitter.com/rickhanlonii)'s talk about touch handling on web here: https://www.youtube.com/watch?v=LhKglxQT4sU

– christoph

---

<a name="is-there-a-way-for-a-component" href="#is-there-a-way-for-a-component">#</a> **Q:** Is there a way for a component to tell if it's running on react-native vs react web? I wanted to create a component that renders differently depending on which it's running in. – rahsheen

**A:** I'm not sure if this directly answers your question, but you can feature detect the environment?

For example: https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/core/ExecutionEnvironment.js#L12.

– yungsters

---

<a name="will-rn-support-css" href="#will-rn-support-css">#</a> **Q:** Will RN support CSS grid ? – lewatt23

**A:** Don't believe there's any plan to right now. We use Yoga for our flexbox layout engine so I'm guessing we'd need to have a layout engine that's cross platform for CSS grid specs.

– luna

---

<a name="this-may-be-more-of-a-support" href="#this-may-be-more-of-a-support">#</a> **Q:** This may be more of a support question. Right now it seems that I have built a 32-bit version of my app, and this doesn't seem to play well with Play Store submission, or iOS devices. How can I configure my app for 64-bit? – yeehaw

**A:** Upgrade to RN 0.59+.

– christoph

---

<a name="do-any-of-you-develop" href="#do-any-of-you-develop">#</a> **Q:** Do any of you develop from Linux? – edo

**A:** Yeah Sebastian uses linux 👨‍💻.

– Rick

---

<a name="i-have-a-huge-list-without" href="#i-have-a-huge-list-without">#</a> **Q:** I have a huge list without fixed height. What can I do to optimize performance? I use react-navigation and don't want to stagger animations, so I used `initialNumToRender={1}`, but my users complained about the loading indicator even when offline. – Diego Mello

**A:** I have a huge list without fixed height. What can I do to optimize performance? I use react-navigation and don't want to stagger animations, so I used initialNumToRender={1}, but my users complained about the loading indicator even when offline.

@Diego Mello

`initialNumToRender={1}` is probably excessive - you should make sure to cover the entire viewport in your initial render. If that's too slow, then you probably have some performance issues with the components you're rendering in your rows that you should investigate. There are a lot of tutorials and tools for performance in React that are applicable to React Native as well. The RN docs are a good place to start: https://facebook.github.io/react-native/docs/performance but there are also posts like https://itnext.io/how-we-boosted-the-performance-of-our-react-native-app-191b8d338347.

Generally, make sure you're not rendering a bunch of stuff you don't need, not doing unnecessary re-renders, make sure you're running with DEV false, use performance tracing tools to find problems, and enable out the inlineRequires performance optimization.

– sahrens

---

<a name="not-sure-if-this-was-missed" href="#not-sure-if-this-was-missed">#</a> **Q:** Not sure if this was missed, but I'm curious how the RN team suggests handling NPM vulnerability warnings for dependencies of React Native. Is there a better approach than "wait for a new release of React Native where the dependency version is bumped in the package.json" or "fork React Native and update the dependency yourself"? It's been a significant blocker for our team. – BakedBeans

**A:** Many vulnerabilities are specific to the usage of a package on web or when user input is accepted. Most of these security vulnerabilities, while legitimate, may not necessarily impact React Native. Whenever one does impact products built with React Native, our own internal security team usually escalates it with our team.

But if your concern is resolving these dependencies for the sake of checking an item off a list, I do not have a great response besides upgrading React Native or contributing an upgrade yourself.

– yungsters

---

<a name="we-have-heard-that-the-rn" href="#we-have-heard-that-the-rn">#</a> **Q:** We have heard that the RN team has grown. Who are the new folks on the team ? [@EliWhite](https://twitter.com/Eli_White) said that they would introduce, but not sure if that happened. – axemclion

**A:** I'm one of the new team-members on the RN team - I just joined in September. Previously Yahoo, Apple, and a couple startups. Very happy to be on such an awesome team and cool project 😃.

– Joshua Gross

---

<a name="thanks-for-all-your-hard-work" href="#thanks-for-all-your-hard-work">#</a> **Q:** Thanks for all your hard work, will we see any of you speaking at upcoming conferences like Chain React Conf or React Rally? – bondparkerbond

**A:** A bunch of people on our team go to a bunch of conferences. [@Rick](https://twitter.com/rickhanlonii) has been speaking at a couple recently and I just spoke about React Native at F8 (https://facebook.github.io/react-native/blog/2019/05/01/react-native-at-f8-and-podcast).

I'll be on the panel at [Chain React](https://infinite.red/ChainReactConf) and [React Native EU](https://react-native.eu/) and we will be bringing people from our team to both of those! We love the opportunity to get to hang out with people in the community in person and hear what is on your mind. Conferences are a great way to do this!

– EliWhite

---

<a name="for-apps-built-with-expo" href="#for-apps-built-with-expo">#</a> **Q:** For apps built with Expo, the highest React Native version in use is 0.57.1. Does this mean that it is not currently possible to build 64-bit apps with Expo? (Or is this a more appropriate question for an Expo support forum?) – yeehaw

**A:** Expo is working on upgrading to 0.59, it'll hopefully come soon. cc [@brentvatne](https://twitter.com/notbrent).

– christoph

---

<a name="after-all-rearchitecture" href="#after-all-rearchitecture">#</a> **Q:** After all rearchitecture, will RN be "as fast as native"? – Diego Mello

**A:** No, of course not. It will be **faster**. As I said we do believe in that and we have data that supports that.

The core idea behind that is: With RN product developers have a better way to express their **idea** (the desired behavior), so the framework has more opportunities to optimize that using sometimes very complex and tricky approaches. That includes smaller (faster to load) bytecode, view flattening (drawing optimizations), layout memoization, "free" (React-powered) concurrency and so much more.

– Valentin Shergin

---

<a name="were-planning-a-rn-workshop" href="#were-planning-a-rn-workshop">#</a> **Q:** We're planning a RN workshop/hackathon for our city's JS community, do you provide any resources for community events? What about events in colleges? (Resources don't need to be financial/monetary only, things like content and slides work too!) – AyushAco

**A:** We do not currently have any resources like that. But that is a great idea. We'll consider creating or sharing some resources for this.

– yungsters

---

<a name="next-steps-after" href="#next-steps-after">#</a> **Q:** Next steps after the reachitecture? – Diego Mello

**A:** For us, the next steps would be migrating everything to Fabric, which will take some time; and then implementing all the features and optimizations that will become possible in a post-Fabric world.

For example, building/integrating React Concurrent Mode in RN is one thing we're excited about.

– Joshua Gross

---

<a name="what-guidelines-would-your-recommend" href="#what-guidelines-would-your-recommend">#</a> **Q:** What guidelines would you recommend for tree shaking code and bulky RN libraries? – muneneevans

**A:** We don't have a good solution for this right now. At Facebook we use "inline-requires" to reduce the impact a large bundle might have on startup. It delays executing code up until it is needed which can speed up startup by double-digit percentage points. If you are on RN 0.59+, check out the metro.config.js file in your project and flip the two boolean switches to true to give it a try: https://github.com/facebook/react-native/blob/master/template/metro.config.js#L13

While this doesn't reduce the bundle size, it makes it so that the startup time of your app isn't affected as much by the size of your code.

– christoph

---

<a name="what-distro-of-linux" href="#what-distro-of-linux">#</a> **Q:** What distro of Linux does Sebastian use? – optimus_sime

**A:** I'm not sure, and Sebastian is not here right now. But [@luna](https://twitter.com/lunaleaps) thinks he uses Arch.

– yungsters

Fedora! It's the official supported distro internally.

– [sebmck](https://twitter.com/sebmck)

---

<a name="how-does-sebastian-run" href="#how-does-sebastian-run">#</a> **Q:** How does Sebastian run iOS? – dbar

**A:** I think he just uses an iPhone.

– hector

I don't think Sebastian is working on iOS ... or he might be requesting a Mac. We are becoming experts on Sebastian's workflow 😛.

– luna

---

<a name="biometric-support-is-lacking" href="#biometric-support-is-lacking">#</a> **Q:** Biometric support is lacking via comm modules how should we overcome this obstacle? – dbar

**A:** Build a module!

– christoph

---

<a name="what-do-you-suggest-to-use-as" href="#what-do-you-suggest-to-use-as">#</a> **Q:** What do you suggest to use as a E2E for RN as Cypress is for web? – Riba

**A:** [Laura Medalia](https://twitter.com/codergirl__) had a great talk about this at ReactJSGirls last week using Percy with React Native.

– Rick

---

<a name="we-see-huge-companies" href="#we-see-huge-companies">#</a> **Q:** We see huge companies using RN only partially in their apps. What do you think is the biggest reason for not doing a complete switch to RN? – muneneevans

**A:** I think the biggest reason is that big companies have likely been around for a while and have been building up teams of native engineers. They have apps they've been working on for a long time and significant investment in their infra and teams.

I think the next generation of big companies are small companies now, growing up with React Native and getting a lot of value from it. The next couple of years will be interesting to see. 😃

– EliWhite

---

<a name="how-does-mark-zuckerberg" href="#how-does-mark-zuckerberg">#</a> **Q:** How does mark zuckerberg feel about RN? – wяod

**A:** He's looking forward to upgrading to 0.59. 😄

– yungsters

---

<a name="do-you-recommend-any-specific" href="#do-you-recommend-any-specific">#</a> **Q:** Do you recommend any specific testing libraries? We currently use Enzyme, but are curious about alternatives. – BakedBeans

**A:** I'd recommend against enzyme because it encourages testing implementation details. I typically prefer the react test utils or the react-testing-library https://testing-library.com/docs/react-testing-library/intro.

– Rick

---

<a name="top-3-places-to" href="#top-3-places-to">#</a> **Q:** Top 3 places to follow / read on whats happening in th RN community... What happening next? – DanSen

**A:** Follow us on Twitter at https://twitter.com/reactnative! The RN community at large also has an account at https://twitter.com/reactnativecomm. I think those are good starting places, aside from the obvious ones (the RN blog, stalking our commits...).

– hector

---

<a name="do-you-think-the-job" href="#do-you-think-the-job">#</a> **Q:** Do you think the job demand for RN will increase as more companies adopt in the next 5 years? – Benzy

**A:** I think so. But if we do our job right, that job description should overlap significantly with any engineer who knows how to use React. I should re-emphasize some of what the team has been tweeting, though. Which is that any good React Native mobile app will require engineers who have the mobile domain expertise of the platform (and who understand the expectations of the users of that platform).

– yungsters
