---
title: Eric Vicenti
date: 2016-03-10
location: Q&A Channel Reactiflux
description: "Facebook Engineer"
people: "[@EricVicenti](https://twitter.com/EricVicenti)"
---

## Engineer @ Facebook | Creator of Navigator Experimental

<a name="buildrelease-process-rn-apps-look" href="#buildrelease-process-rn-apps-look">#</a> **Q:** What does the build/release process for RN apps look like at Facebook? (Documentation on the site's a little light in that regard)

**A:** Joshua, we have a system that runs tests for us against each commit, which we call 'diff's in the phabricator world. Some of those tests run asynchronously and others are 'land-blocking'. The build system runs async tests continuously, and will make sure all of the land-blocking tests pass before it merges the commit into master. We also have release branches that are synced up with our product releases. We will cut a branch and stabilize it for a week or two before shipping the final product. To stabilize, we first fix the bug in master, and pick the fix over into the release branch. Currently those releases happen once every two weeks, but we are thinking about doing it even faster

---

<a name="pattern-guys-using-render-detail" href="#pattern-guys-using-render-detail">#</a> **Q:** What pattern are you guys using to render a detail view from tapping a list view item? I tried using Navigator, but the component in render row seems to not have the navigator prop even if the list view does

**A:** With Navigator, we need to pass the navigator prop around manually, then make imperative calls on it to move around in the app. This can get tricky as your app grows, so you may want to look into more declarative navigation solutions like NavigationExperimental. To provide some context, NavigationExperimental is the new Navigation library we are working on at Facebook, and we decided to open source it pretty early on because Navigator has clearly been a pain point for the RN community

---

<a name="planning-use-relay-react-native" href="#planning-use-relay-react-native">#</a> **Q:** Are you planning to use relay with any of your react native apps?

**A:** We already use Relay in all of our RN apps! AdsManager, Groups, and some features within the main Fb app are already using Relay.

(added by geirman) The main fb app uses rn for the “Friends Day Videos” and soon the “Events Dashboard". they mention this in the keynote react conf 2016 video if you're interested

---

<a name="update-rn-apps-hosted-js" href="#update-rn-apps-hosted-js">#</a> **Q:** Do you update rn apps from hosted js bundles at facebook? any tips or services you can recommend for doing this?

**A:** It is something we're thinking about, but we currently ship our JS bundle with the native app bundle. Feel free to explore things like Microsoft CodePush!

---

<a name="still-working-offloading-animations-js" href="#still-working-offloading-animations-js">#</a> **Q:** Are you still working on offloading animations off the JS thread? When do you think it will be ready for both iOS and Android?

**A:** Good question! The Animation off-threading effort has mostly been pioneered by Krzysztof Magiera who has been working with the Exponent team. We haven't prioritized it yet, so we absolutely want some help from the community in solving this problem!

---

<a name="would-say-mix-rn-native" href="#would-say-mix-rn-native">#</a> **Q:** What would you say the mix is between RN and native components and coding in Facebook apps?

**A:** The main app is still native, but many new screens are being developed in react. We typically try to use RN where there isn't heavy data overlap between other screens in the app. As our data handling solutions get more advanced, we can start having bigger mixes of native and react code

---

<a name="whats-future-rn-platform-wise" href="#whats-future-rn-platform-wise">#</a> **Q:** Whats the future for RN platform wise? At this point mobile platforms are mostly covered but what about other targets: Xboxes, Roku's IOT? Does RN become another sort of substrate platform like react core?

**A:** I think that would be awesome, but we aren't there yet. We still have a lot of work when it comes to easing the differences between iOS and Android. Eventually it would be awesome to get RN working on everything from web to TV interfaces, but we would need a lot of community support to make that happen.

---

<a name="tips-ease-company-looking-reactnative" href="#tips-ease-company-looking-reactnative">#</a> **Q:** Any tips on how to ease a company into looking into React-Native that is very leery of code once run everywhere solutions? I know RN isn't exactly code once, but it's close to it. This has less to do with the code itself and more of what's a good way to introduce the idea in a more persuasive way. We currently have our Desktop team doing app development and it puts a giant burden on them, I'd like to lessen that greatly.

**A:** The write-once-run-anywhere solutions are often problematic because they invite a lot more people to build for a platform that they aren't highly familiar with. To ship a successful app, you are much better off having native platform developers work alongside react developers.

---

<a name="ways-access-app-lifecycle-methods" href="#ways-access-app-lifecycle-methods">#</a> **Q:** Are there any ways to access app lifecycle methods in RN (e.g. applicationDidBecomeActive in iOS)? Or would you just use the native to JS events?

**A:** You can use the AppStateIOS module to monitor that on iOS. Or use componentDidMount to detect when the app has started

---

<a name="think-idea-learn-write-anywhere" href="#think-idea-learn-write-anywhere">#</a> **Q:** How do you think the idea of "learn once, write anywhere" has held up?

**A:** It is certainly challenging to make these sorts of changes to your development team, but I work with developers every day who started on iOS, web, or Android, but all manage to ship their code on both iOS and Android. We're really adverse to platform forking when we can avoid it.

---

<a name="often-find-native-work-production" href="#often-find-native-work-production">#</a> **Q:** How often do you find yourselves doing native work on your production android apps because of performance issues?

**A:** It depends on how performance-sensitive the application is. Some teams need to pay closer attention and are working on more experimental tech to speed things up. There is a whole team working on improving RN performance for both platforms, and they are doing tons of native work. Also keep in mind, bad performance can also be due to inefficient JS code, so there are a lot of wins to be gained from paying attention to your JS

---

<a name="note-might-completely-ignorance-suppose" href="#note-might-completely-ignorance-suppose">#</a> **Q:** On that note, and this might completely be my ignorance, suppose you have massive calculations to perform. Are Web Workers able to handle that task or is there an abstraction for them, given the native platforms have threading

**A:** Massive calculations are probably best done in something more performant than JS, like C++. You can do that, and interface with your native code from JS. Or if you really want to use JS, you can spin up an extra react bridge with a different bundle. But we don't have a real WebWorkers solution yet.

<a name="take-away-weave-native-reactnative" href="#take-away-weave-native-reactnative">#</a> **Q:** So the take away is to weave native with react-native?

**A:** Yep, for complex and very high-performance apps, you absolutely want to be able to use native code when you need to

---

<a name="improvements-coming-listview-regard-memory" href="#improvements-coming-listview-regard-memory">#</a> **Q:** Are there improvements coming to ListView with regard to memory consumption on big lists?

**A:** ListViews are very tricky, and lots of people are working on improvements, including us. We have several experimental list views internally, but we're not sure about any of them yet.

---

<a name="announcements-releasing-androidsupport-fb-sdk" href="#announcements-releasing-androidsupport-fb-sdk">#</a> **Q:** Any announcements on releasing android-support for FB SDK?

**A:** I'm not aware of any upcoming announcements about an Android FB SDK. But our big developer conference, F8, is just about a month away..

---

<a name="thoughts-model-segment-control-navbar" href="#thoughts-model-segment-control-navbar">#</a> **Q:** Thoughts on how to model a segment control in the navbar and updating the component when segment control changes?

**A:** Your segment control can have a prop that it calls to pass an action to the parent. The parent can use the action to decide how to change the state, and declaratively re-render the segmented control and the appropriate view for it.

---

<a name="freebie-question-sound-plan-port" href="#freebie-question-sound-plan-port">#</a> **Q:** So, and this is more of a freebie question. Is it a sound plan to port a webapp to React Native with a Native UI implementation, and then replace/add from there? Or is that not a valid usecase

**A:** Yep it is pretty common to start with a React web app and port it to RN.

---

<a name="big-team-working-react-native" href="#big-team-working-react-native">#</a> **Q:** How big is the team working on React Native?

**A:** The RN team is about 15-20 people right now, depending on who you count. I'm actually working on RN within the Groups products right now, so I'm not even on the core RN team at the moment. Of course there are a lot of neighboring teams like React Core, Relay, GraphQL, Flow, Nuclide

---

<a name="changes-coming-gestures-handling-scrollview" href="#changes-coming-gestures-handling-scrollview">#</a> **Q:** Are there changes coming to gestures handling and ScrollView? Specific problem I have is it's difficult for now to pan a ScrollView horizontally blocking the vertical scroll. Natively it's easy to do on iOS with gesture recognizers.

**A:** Another good question. You've pointed out two of the most problematic technical areas that we face with RN, ListViews and gestures. The trickiest components when it comes to gestures are those like ScrollView, where we have a native component that needs to interact well with the JS world. We are constrained by platform gesture systems, so even if we had a better design for a gesture system, we wouldn't have an easy time building it. Andy Matuschak had a great talk at ReactJS conf that shows how tricky gesture systems can get. We still have a ways to go in that department

---

<a name="percent-groups-app-using-navigationexperimental" href="#percent-groups-app-using-navigationexperimental">#</a> **Q:** What percent of Groups app is using NavigationExperimental if at all?

**A:** 'Percent' can be a tricky thing to define when it comes to API adoption, especially in hybrid apps like Groups. An upcoming release of Groups will switch to NavigationExperimental for all navigation that happens within the react views

---

<a name="biggest-needs-community-could-fill" href="#biggest-needs-community-could-fill">#</a> **Q:** What are the biggest needs that the community could fill in right now that aren't being actively tackled by the RN FB team?

**A:** The community is pretty amazing when it comes to supporting each-other, and I want to see that get even better. The docs aren't nearly as mature as the knowledge of the community, and it would be amazing if everybody pitched in on the documentation and example code to help raise the bar for everyone else.

---

<a name="id-love-getting-started-navigationexperimental" href="#id-love-getting-started-navigationexperimental">#</a> **Q:** I'd love a "Getting Started with NavigationExperimental" style tutorial. I spent an evening trying to dig into the docs and UIExplorer examples, but didn't get far. Something that starts simple and builds up from there would be awesome. Are you aware of any efforts along those lines? ETA?

**A:** That is on my todo list. I have started a version here, but I decided to move away from the TicTacToe example and I haven't gone back to revise and finish it: https://github.com/ericvicenti/navigation-rfc/blob/master/Docs/Guide.md

---

<a name="im-working-rn-app-fb" href="#im-working-rn-app-fb">#</a> **Q:** I'm working on a RN app on the FB platform, do you know if it's possible to contact FB to see if they'd be interested in showcasing it?

**A:** You mean showcasing it on the RN page? If you publish a really impressive app, you can blast us on twitter and we will probably feature it.

---

<a name="thoughts-using-something-like-navigation" href="#thoughts-using-something-like-navigation">#</a> **Q:** What are your thoughts on using something like this for navigation: https://github.com/aksonov/react-native-router-flux

**A:** It is great to see people tackling the navigation problem from several angles. The desire for a redux-like navigation system is why I hacked on NavigationExperimental over my holiday break. That particular library uses ExNavigator, which uses the RN Navigator component. So it is still stateful on the inside, which is why I decided to focus on a genuinely declarative approach

---

<a name="whats-favorite-smash-bros-character" href="#whats-favorite-smash-bros-character">#</a> **Q:** What's your favorite smash bros character? |

**A:** Meta Night!!

---

<a name="version-navigationexperimental-longer-experimental-main" href="#version-navigationexperimental-longer-experimental-main">#</a> **Q:** So, in what version will navigationExperimental, no longer be experimental? when will it be in the main docs? I've played with it and it feels pretty stable

**A:** The API is still changing in minor ways, so there has been a bit of hesitation on my part with the docs. (The version in master is even ahead of 0.22 already). So I'm not sure if I should publish docs that will be out of sync with the current release. brentvatne, I'm sure you can help. 😄

<a name="navigationexperimental-docs-prepared-contribute" href="#navigationexperimental-docs-prepared-contribute">#</a> **Q:** Where are the navigationExperimental docs being prepared, so we can contribute

**A:** The NavigationExperimental docs are being worked on here: https://github.com/ericvicenti/navigation-rfc/blob/master/Docs Contributions to the Navigation docs would be greatly appreciated!! It is also a great way to make sure you understand the code! Also, it would be awesome if one of you could help by adding comments to the navigation example code in RN master |

---

<a name="regarding-guide-planning-completely-rewrite" href="#regarding-guide-planning-completely-rewrite">#</a> **Q:** Regarding the Guide, you are planning to completely rewrite it, aren't you?

**A:** I hope to swap out the example and go into more complicated navigation eventually

<a name="contributions-current-guide-welcome-wait" href="#contributions-current-guide-welcome-wait">#</a> **Q:** So, are contributions to the current guide welcome? Or should we wait till you start the new one

<a name="welcome" href="#welcome">#</a> **Q:** They are very welcome!

---

<a name="noticed-rendering-take-time-try" href="#noticed-rendering-take-time-try">#</a> **Q:** I noticed rendering can take some time when you try to render a grid with simple items (Image or Text), let's say 50. Is that something you observed on your side? Are there possibilities to mitigate that? | while rendering it

**A:** We generally try to break up the JS renders into smaller chunks. sahrens recently released something along those lines: https://github.com/facebook/react-native/pull/4953/files

(added by brentvatne) Make sure you read this for more background on what eric mentioned above re: breaking up js renders https://www.facebook.com/notes/andy-street/react-native-scheduling/10153916310914590

<a name="saw-one-interesting-needed-display" href="#saw-one-interesting-needed-display">#</a> **Q:** I saw that one and it's interesting, but I needed to display a table at once (fully visible, no scroll) and incremental rendering wasn't giving a good user experience.

**A:** Yeah it can be tricky when you have a lot of views that you need to flush to the main thread at once. Maybe you could mount the view ahead of time and simply display it when you need to

(added by brentvatne) then you can incrementally render it and show loading while it's happening then the actual table when it's complete using something like IncrementalPresenter - this will allow you to maintain responsiveness

---

<a name="solutions-running-js-background-allowed" href="#solutions-running-js-background-allowed">#</a> **Q:** Are there any solutions for running JS in the background, other than the allowed things like location and sound?

**A:** Sorry, not that I'm currently aware of! There is surely a way if you figure it out on the native side

---

Along the lines of the question about how the community can help, I would really like to see the community step up and try to crack some of these [hard problems](https://github.com/brentvatne/hard-react-native-problems/issues). Take gestures for example. We haven't "solved" gesture handling at Fb, but we're happy to take an open approach to find solutions. [Andy's talk](https://www.youtube.com/watch?v=uBYPqb83C7k) shows how far we have to go in this regard.

To anyone interested, I strongly encourage you to publish exploratory articles, hack on prototypes, and really push the limit of the current methodologies. Anybody can help us solve these problems, and we need dedicated folks like you to crack these tough issues, and move our community to the bleeding-edge of mobile development.

Thanks for all of your excellent questions! You can ping me on twitter ericvicenti. On Facebook I'm Eric Vlad Vicenti. And of course I will be around to help as we get NavigationExperimental to maturity. Feel free to tag me on issues or file them in the RFC repo.
