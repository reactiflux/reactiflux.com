---
title: Eric Vicenti
date: March 14 2016
---
## Engineer @ Facebook | Creator of Navigator Experimental

| username | question |
| ---: | --- |
| **ericvicenti:** | Hey folks! Looking forward to hearing your questions! |
| vcarl: | welcome ericvicenti 😄 glad to have you here |
| Gabe: | ericvicenti welcome!!! thanks for your time today.... hey guys. please take your questions with [Q&A] and eric will get to them in the order they are being asked |
| Joshua: | [Q&A] What does the build/release process for RN apps look like at Facebook? (Documentation on the site's a little light in that regard) |
| Joshua: | thanks for being available to answer! |
| **ericvicenti:** | Joshua, we have a system that runs tests for us against each commit, which we call 'diff's in the phabricator world. Some of those tests run asynchronously and others are 'land-blocking'. The build system runs async tests continuously, and will make sure all of the land-blocking tests pass before it merges the  |commit into master.
| **ericvicenti:** | We also have release branches that are synced up with our product releases. We will cut a branch and stabilize it for a week or two before shipping the final product. To stabilize, we first fix the bug in master, and pick the fix over into the release branch |
| **ericvicenti:** | Currently those releases happen once every two weeks, but we are thinking about doing it even faster |
| Joshua: | ericvicenti 👍 |
| LucasKA: | What pattern are you guys using to render a detail view from tapping a list view item? I tried using Navigator, but the component in render row seems to not have the navigator prop even if the list view does(edited) |
| **ericvicenti:** | With Navigator, we need to pass the navigator prop around manually, then make imperative calls on it to move around in the app.  This can get tricky as your app grows, so you may want to look into more declarative navigation solutions like NavigationExperimental |
| **ericvicenti:** | To provide some context, NavigationExperimental is the new Navigation library we are working on at Facebook, and we decided to open source it pretty early on because Navigator has clearly been a pain point for the RN community |
| LucasKA: | Thanks, I'll look more into it, but was passing the navigator down, it just seems to die in the renderRow(). I feel like List View Item -> Detail View is a  very common use case. 😃 |
| jsierles: | [Q&A] Are you planning to use relay with any of your react native apps? |
| **ericvicenti:** | jsierles, we already use Relay in all of our RN apps! AdsManager, Groups, and some features within the main Fb app are already using Relay |
| jsierles: | interesting. didn't know the main app used react native |
| geirman: | the main fb app uses rn for the  “Friends Day Videos” and soon the “Events Dashboard". they mention this in the keynote react conf 2016 video if you're interested |
| jsierles: | nice, i'll have to check out the videos |
| ultralame: | [Q&A] do you update rn apps from hosted js bundles at facebook? any tips or services you can recommend for doing this? |
| **ericvicenti:** | ultralame (Hi, Colin!)  It is something we're thinking about,  but we currently ship our JS bundle with the native app bundle. Feel free to explore things like Microsoft CodePush! |
| ultralame: | thanks 😺 |
| jean: | [Q&A] Are you still working on offloading animations off the JS thread? When do you think it will be ready for both iOS and Android? |
| **ericvicenti:** | jean Good question! The Animation off-threading effort has mostly been pioneered by Krzysztof Magiera who has been working with the Exponent team. We haven't prioritized it yet, so we absolutely want some help from the community in solving this problem! |
| Joshua: | [Q&A] What would you say the mix is between RN and native components and coding in Facebook apps? |
| **ericvicenti:** | Joshua The main app is still native, but many new screens are being developed in react. We typically try to use RN where there isn't heavy data overlap between other screens in the app. As our data handling solutions get more advanced, we can start having bigger mixes of native and react code |
| monastic.panic: | [Q&A] Whats the future for RN platform wise? At this point mobile platforms are mostly covered but what about other targets: Xboxes, Roku's IOT? Does RN become another sort of substrate platform like react core? |
| **ericvicenti:** | monastic.panic I think that would be awesome, but we aren't there yet. We still have a lot of work when it comes to easing the differences between iOS and Android. Eventually it would be awesome to get RN working on everything from web to TV interfaces, but we would need a lot of community support to make that  |happen
| Sinistral: | [Q&A] Any tips on how to ease a company into looking into React-Native that is very leery of code once run everywhere solutions? I know RN isn't exactly code once, but it's close to it. This has less to do with the code itself and more of what's a good way to introduce the idea in a more persuasive way. We  |currently have our Desktop team doing app development and it puts a giant burden on them, I'd like to lessen that greatly.
| **ericvicenti:** | Sinistral, the write-once-run-anywhere solutions are often problematic because they invite a lot more people to build for a platform that they aren't highly familiar with. To ship a successful app, you are much better off having native platform developers work alongside react developers. |
| Sinistral: | ericvicenti I couldn't agree more. I've been talking with our Android and Apple devs to get a feel for how their environments work, but unfortunately we don't have any "dedicated" app developers, which is it's own problem but ya. I'm glad to basically hear you echo my thoughts. Thanks |
| DownChapel: | [Q&A] Are there any ways to access app lifecycle methods in RN (e.g. applicationDidBecomeActive in iOS)? Or would you just use the native to JS events? |
| **ericvicenti:** | DownChapel, you can use the AppStateIOS module to monitor that on iOS. Or use componentDidMount to detect when the app has started |
| DownChapel: | ericvicenti Thanks |
| vcarl: | [Q&A] how do you think the idea of "learn once, write anywhere" has held up? |
| **ericvicenti:** | vcarl, it is certainly challenging to make these sorts of changes to your development team, but I work with developers every day who started on iOS, web, or Android, but all manage to ship their code on both iOS and Android. We're really adverse to platform forking when we can avoid it |
| brunobar79: | [Q&A] - How often do you find  yourselves doing native work on your production android apps because of performance issues? |
| **ericvicenti:** | brunobar79 It depends on how performance-sensitive the application is. Some teams need to pay closer attention and are working on more experimental tech to speed things up. There is a whole team working on improving RN performance for both platforms, and they are doing tons of native work |
| **ericvicenti:** | Also keep in mind, bad performance can also be due to inefficient JS code, so there are a lot of wins to be gained from paying attention to your JS |
| Sinistral: | [Q&A] - On that note, and this might completely be my ignorance, suppose you have massive calculations to perform. Are Web Workers able to handle that task or is there an abstraction for them, given the native platforms have threading |
| **ericvicenti:** | Massive calculations are probably best done in something more performant than JS, like C++. You can do that, and interface with your native code from JS. Or if you really want to use JS, you can spin up an extra react bridge with a different bundle. But we don't have a real WebWorkers solution yet |
| Sinistral: | Alright, so the take away is to weave native with react-native. Awesome. Thanks again for the answers. |
| **ericvicenti:** | Sinistral, yep, for complex and very high-performance apps, you absolutely want to be able to use native code when you need to |
| jsierles: | Sinistral in a lot of cases you can solve problems with focused native code that bridges to react native. i think that point is lost a lot |
| jean: | [Q&A] Are there improvements coming to ListView with regard to memory consumption on big lists? |
| **ericvicenti:** | jean ListViews are very tricky, and lots of people are working on improvements, including us. We have several experimental list views internally, but we're not sure about any of them yet. |
| daniel: | [Q&A] Any announcements on releasing android-support for FB SDK? |
| **ericvicenti:** | Daniel, I'm not aware of any upcoming announcements about an Android FB SDK. But our big developer conference, F8, is just about a month away.. |
| chirag04: | ericvicenti thoughts on how to model a segment control in the navbar and updating the component when segment control changes? |
| **ericvicenti:** | chirag04, your segment control can have a prop that it calls to pass an action to the parent. The parent can use the action to decide how to change the state, and declaratively re-render the segmented control and the appropriate view for it. |
| chirag04: | 👍 |
| Sinistral: | So, and this is more of a freebie question.  Is it a sound plan to port a webapp to React Native with a Native UI implementation, and then replace/add from there? Or is that not a valid usecase |
| **ericvicenti:** | Sinistral, yep it is pretty common to start with a React web app and port it to RN. |
| daniel: | [Q&A] How big is the team working on React Native? |
| **ericvicenti:** | The RN team is about 15-20 people right now, depending on who you count. I'm actually working on RN within the Groups products right now, so I'm not even on the core RN team at the moment |
| **ericvicenti:** | Of course there are a lot of neighboring teams like React Core, Relay, GraphQL, Flow, Nuclide |
| jean: | [Q&A] Are there changes coming to gestures handling and ScrollView? Specific problem I have is it's difficult for now to pan a ScrollView horizontally blocking the vertical scroll. Natively it's easy to do on iOS with gesture recognizers. |
| **ericvicenti:** | jean, another good question. You've pointed out two of the most problematic technical areas that we face with RN, ListViews and gestures. |
| **ericvicenti:** | The trickiest components when it comes to gestures are those like ScrollView, where we have a native component that needs to interact well with the JS world. We are constrained by platform gesture systems, so even if we had a better design for a gesture system, we wouldn't have an easy time building it |
| **ericvicenti:** | Andy Matuschak had a great talk at ReactJS conf that shows how tricky gesture systems can get. We still have a ways to go in that department |
| jean: | ericvicenti indeed very tricky, I hope there will be a technical solution! |
| chirag04: | ericvicenti [Q&A] what percent of Groups app is using NavigationExperimental if at all? |
| **ericvicenti:** | chirag04, 'percent' can be a tricky thing to define when it comes to API adoption, especially in hybrid apps like Groups. An upcoming release of Groups will switch to NavigationExperimental for all navigation that happens within the react views |
| Joshua: | [Q&A] What are the biggest needs that the community could fill in right now that aren't being actively tackled by the RN FB team? |
| **ericvicenti:** | Joshua The community is pretty amazing when it comes to supporting each-other, and I want to see that get even better. The docs aren't nearly as mature as the knowledge of the community, and it would be amazing if everybody pitched in on the documentation and example code to help raise the bar for everyone else.
| geirman: | [Q&A] I'd love a "Getting Started with NavigationExperimental" style tutorial. I spent an evening trying to dig into the docs and UIExplorer examples, but didn't get far. Something that starts simple and builds up from there would be awesome. Are you aware of any efforts along those lines? ETA? |
| **ericvicenti:** | geirman, that is on my todo list. I have started a version here, but I decided to move away from the TicTacToe example and I haven't gone back to revise and finish it:  https://github.com/ericvicenti/navigation-rfc/blob/master/Docs/Guide.md |
| daniel: | [Q&A] I'm working on a RN app on the FB platform, do you know if it's possible to contact FB to see if they'd be interested in showcasing it? |
| **ericvicenti:** | Daniel, you mean showcasing it on the RN page? If you publish a really impressive app, you can blast us on twitter and we will probably feature it. |
| daniel: | [Q&A] What are your thoughts on using something like this for navigation: https://github.com/aksonov/react-native-router-flux |
| **ericvicenti:** | It is great to see people tackling the navigation problem from several angles. The desire for a redux-like navigation system is why I hacked on NavigationExperimental over my holiday break. |
| **ericvicenti:** | That particular library uses ExNavigator, which uses the RN Navigator component. So it is still stateful on the inside, which is why I decided to focus on a genuinely declarative approach |
| Joshua: | (+1 for the declarative approach!) |
| Gabe: | hey all!!! thanks for asking such awesome questions.. and thank you so much ericvicenti for answering all of them.... Eric is with us for about another 15 minutes so he has time for only a few more... ask away!! |
| brentvatne: | ericvicenti - what's your favorite smash bros character? |
| **ericvicenti:** | Meta Night!! |
| brentvatne: | good choice |
| Sinistral: | Good choice for Brawl |
| Sinistral: | Metaknight got castrated in Wii U : ( |
| geirman: | (googles smash bros meta knight) |
| emilio: | [Q&A] So, in what version will navigationExperimental, no longer be experimental? when will it be in the main docs? I've played with it and it feels pretty stable |
| **ericvicenti:** | emilio, the API is still changing in minor ways, so there has been a bit of hesitation on my part with the docs. (The version in master is even ahead of 0.22 already) |
| **ericvicenti:** | So I'm not sure if I should publish docs that will be out of sync with the current release. brentvatne, I'm sure you can help. 😄 |
| brentvatne: | 😅 |
| brentvatne: | in 1 week i will have more time to help on docs! |
| brentvatne: | that would be great to see more people pitch in on that |
| brentvatne: | you can give NavigationExperimental a try by reading the docs and trying to build things, and whenever something is confusing you can either try to clarify or submit a PR for it |
| emilio: | brentvatne looking forward to it! where are the navigationExperimental docs being prepared, so we can contribute |
| **ericvicenti:** | The NavigationExperimental docs are being worked on here: |
| **ericvicenti:** | https://github.com/ericvicenti/navigation-rfc/blob/master/Docs |
| **ericvicenti:** | Contributions to the Navigation docs would be greatly appreciated!! It is also a great way to make sure you understand the code! |
| **ericvicenti:** | Also, it would be awesome if one of you could help by adding comments to the navigation example code in RN master |
| emilio: | ericvicenti regarding the Guide, you are planning to completely rewrite it, aren't you? |
| **ericvicenti:** | emilio, I hope to swap out the example and go into more complicated navigation eventually |
| emilio: | So, are contributions to the current guide welcome?  Or should we wait till you start the new one |
| **ericvicenti:** | emilio, they are very welcome! |
| jean: | [Q&A] I noticed rendering can take some time when you try to render a grid with simple items (Image or Text), let's say 50. Is that something you observed on your side? Are there possibilities to mitigate that? | while rendering it |
| **ericvicenti:** | jean, we generally try to break up the JS renders into smaller chunks. sahrens recently released something along those lines: https://github.com/facebook/react-native/pull/4953/files |
| brentvatne: | jean - make sure you read this for more background on what eric mentioned above re: breaking up js renders: https://www.facebook.com/notes/andy-street/react-native-scheduling/10153916310914590 |
| jean: | ericvicenti I saw that one and it's interesting, but I needed to display a table at once (fully visible, no scroll) and incremental rendering wasn't giving a good user experience. |
| brentvatne: | then you can incrementally render it and show loading while it's happening then the actual table when it's complete |
| brentvatne: | using something like IncrementalPresenter |
| brentvatne: | this will allow you to maintain responsiveness
| jean: | brentvatne yes true, |
| **ericvicenti:** | jean, yeah it can be tricky when you have a lot of views that you need to flush to the main thread at once. Maybe you could mount the view ahead of time and simply display it when you need to |
| easilyBaffled: | [Q&A] are there any solutions for running JS in the background, other than the allowed things like location and sound? |
| **ericvicenti:** | easilyBaffled sorry, not that I'm currently aware of! There is surely a way if you figure it out on the native side |
| emilio: | ericvicenti Thank you very much for taking our questions, and for the initiative for a better navigation! |
| brentvatne: | ericvicenti thanks for the beard |
| **ericvicenti:** | jean, along the lines of Joshua's question about how the community can help, I would really like to see the community step up and try to crack some of these hard problems. Take gestures for example. We haven't "solved" gesture handling at Fb, but we're happy to take an open approach to find solutions. |
| **ericvicenti:** | Andy's talk shows how far we have to go in this regard: https://www.youtube.com/watch?v=uBYPqb83C7k |
| Joshua: | ericvicenti yes thanks for the Q&A Eric, and thank you for all the help you put in |
| **ericvicenti:** | To anyone interested, I strongly encourage you to publish exploratory articles, hack on prototypes, and really push the limit of the current methodologies. Anybody can help us solve these problems, and we need dedicated folks like you to crack these tough issues, and move our community to the bleeding-edge of mobile development.
| brentvatne: | 👍 |
| brentvatne: | here are some hard problems that exist in react native right now, including the listview and gestures that eric mentions above: https://github.com/brentvatne/hard-react-native-problems/issues |
| Gabe: | ericvicenti thanks for your time bro 😃 really appreciate it |
| **ericvicenti:** | Thanks for all of your excellent questions! You can ping me on twitter ericvicenti. On Facebook I'm Eric Vlad Vicenti. |
| **ericvicenti:** | And of course I will be around to help as we get NavigationExperimental to maturity. Feel free to tag me on issues or file them in the RFC repo. |
| **ericvicenti:** | Thanks all, until next time! |
| brentvatne: | 👋 |
| Gabe: | later ericvicenti 😃 |
| daniel: | Thanks ericvicenti |
| brunobar79: | Thank you ericvicenti |
| Gabe: | hey all... the [Q&A] with Eric Vicenti is over... but we'll upload an easy to read transcript it to the reactiflux github soon so you can share it via social media.. thanks for everyone's participation! |
| iamdustan: | 👏 |
| LucasKA: | 👍 |
