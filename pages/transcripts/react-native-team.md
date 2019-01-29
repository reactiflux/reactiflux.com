---
title: React Native core team
date: January 24 2019
---
[4:00 PM] hector: @dayhaysoos there's no minimum number of PRs you'd need to get merged in order to join the team, but I'd happily take any PRs you want to send our way! In any case, FB is always hiring :smile:
[4:00 PM] EliWhite: @axemclion, we've tried a bunch of new ways to engage with the community over the last few months, from getting a bunch of contributions to flow type our components (https://github.com/facebook/react-native/issues/22990) to deep dives like the twitch stream. I think we've fundamentally underestimated the interest people have in contributing and learning about the internals of React Native. This is super awesome to us and encourages us to do more of these things for sure.
GitHub
facebook/react-native
A framework for building native apps with React. Contribute to facebook/react-native development by creating an account on GitHub.
[4:00 PM] PeteTheHeat: @axemclion  We have a few types of tests running internally: snapshot tests running continuously, unit and redbox tests running at diff time, jest tests running at diff time, e2e tests.... The main issues we plan on addressing this half is improving the reliability of these tests, and bringing the internal and external testing frameworks closer together. This way, internal commits don't silently break OSS tests and vise versa.
[4:00 PM] EliWhite: @dayhaysoos I had never used React Native before joining the team at Facebook :smiley:
[4:00 PM] sahrens: @Andrei_Calazans Fabric itself probably won't help much with app load time unless you have a lot of custom native view managers, but we have a bunch of other stuff in the pipe that will help with startup time so stay tuned!
[4:01 PM] Rick: MOAR
[4:01 PM] shaneReactiflux: [Q&A] We are encounter a lot of problems when playing video in WebView, are there any plans for improvements?
[4:01 PM] Bluebird: By when can we expect a 1.0.0 of RN
[4:01 PM] jai: @PeteTheHeat It is the JS thread that profilable by systrace is not open in open source builds.
[4:01 PM] Iggytoad 📦: [Q&A] What's your favorite part about working on a huge, actively changing project?
[4:01 PM] MWR: [Q&A] Would you make React Router a native API for React?
[4:01 PM] cpojer: Hello everyone! I'm Christoph and I work on React Native Open Source. Sorry I'm a bit late to the party but happy to take questions :smiley:
[4:01 PM] dayhaysoos: Good to know FB is always hiring for RN core team! How do you all prioritize the issues?
[4:02 PM] JK: [Q&A] in your opinion what is the best way to get seamless video working full-scale across both platforms?
[4:02 PM] Amnesthesia: Will background jobs be supported at any point in time in RN?
[4:02 PM] axemclion: @jai - I think the JS thread profiling just landed internally in FB, and is not much used. In think internally they still use components to profile JS
[4:02 PM] mehdi: @shaneReactiflux why are you using a WebView instead of playing it with a native player? I imagine a lot of the problems would stem from there
[4:02 PM] janzer: @shaneReactiflux Redux with persist isn't specific to RN. It's useful for some cases but not always needed
[4:03 PM] fkgozali: @Bluebird re: RN 1.0.0, right now we're focusing on finishing the big architecture projects (Fabric/TurboModule/Codegen). Once they are all done/solid, we'll evaluate the path for 1.0
[4:03 PM] mehdi: @Iggytoad 📦 there’s always interested problems. Honestly, working on an unchanging project gets boring very fast, it’s much easier to get motivated when there’s real problems to solve rather than just doing refactors for the hell of it
[4:03 PM] hector: @Bluebird question for you: what would you expect out of a "1.0.0" React Native release?
[4:03 PM] PeteTheHeat: @jai  There's also the react profiler to profile JS.
[4:04 PM] EliWhite: @Iggytoad 📦, I love the community. The fact that there are so many people interested enough to spend an hour of their day chatting with us on discord is what I love about working on such a popular project
[4:04 PM] yungsters: @Amnesthesia We've experimented with starting separate VM instances for background jobs, but we haven't found compelling reasons to use it vs. delegating work to a NativeModule.
[4:05 PM] hector: MOOOAAAR
[4:05 PM] paulxuca: [Q&A] Any suggestions on profiling performance in production? Or not a good idea? - motivation is that depending on device, perf can be wildly different
[4:05 PM] mk: [Q&A] Hi folks, i was looking for some info on how native modules would work for with JSI? Will older modules be backwards compatible?
[4:05 PM] rostislav.simonik: [Q&A]After moving nuclide into archive, what would you suggest us as best alternative, if community doesn’t take it their hands ?
[4:05 PM] axemclion: @Amnesthesia  - https://facebook.github.io/react-native/docs/headless-js-android. Sort of possible on Android
[4:05 PM] cpojer: @dayhaysoos We recently asked the community what their main problems with React Native are, see "What do you dislike about React Native" here: https://github.com/react-native-community/discussions-and-proposals/issues/64

We'll soon get back to you about the issues we'll prioritize fixing. Next to that, we'll focus on merging pull requests. Our plan is to get pull requests down to something manageable, like 50 open at a time. We'll tackle issues on the GitHub issue tracker also at some point in the next six months but it's currently a bit overwhelming.
GitHub
What do you dislike about React Native? · Issue #64 · react-nati...
We, the React Native team at Facebook, would like to get a current list of all the things that people in the community are having problems with when using React Native. There are many discussions o...
[4:05 PM] Andrei_Calazans: [Q & A]: Youi-tv Engine One currently binds OpenGL to React Native, doing something similar to Flutter however with React Native. Has this ever been talked about internally, possibly binding React Native to a rendering engine?
[4:05 PM] Checkmatez: [Q&A] @fkgozali You mentioned Fabric/TurboModule/Codegen. Where can I read more about these projects?
[4:06 PM] Iggytoad 📦: @Checkmatez https://github.com/react-native-community/discussions-and-proposals/issues/40
[4:06 PM] hector: @rostislav.simonik I am a big fan of VSCode myself.
[4:06 PM] JK: [Q&A] in your opinion what is the best way to get seamless video working full-scale across both platforms?
[4:06 PM] Rick: @rostislav.simonik vscode is v nice
[4:06 PM] sahrens: @Amnesthesia We actually built a webworker prototype a ways back, but it was hard to justify the additional memory use vs. doing background tasks in dedicated native modules.
[4:06 PM] mehdi: @JK video players are tough in general. I would go with a native component, search around in the community for what already exists and be prepared to dive into the internals.
to explain more, I say it’s tough in general because everyone has different needs for a video player. Like do you want a scrubber? do you want to have a double tap skip ahead feature like in Netflix? do you want autoplay? is only one video playing, or multiple?
[4:06 PM] yungsters: @dayhaysoos About how we prioritize issues... it's a delicate balance between issues raised by teams using React Native at Facebook, issues raised by the community, and investing in the future architecture for React and React Native.
[4:06 PM] fkgozali: @MWR: I think native navigation system may vary from app to app, including how routing is done within the native app. So at this point, we're not focusing on providing general purpose api for that.
[4:08 PM] EliWhite: @Checkmatez, there are github issues for each of the big parts of the rearchitecture in our discussions and proposals repo. 

Fabric: https://github.com/react-native-community/discussions-and-proposals/issues/4
TurboModules: https://github.com/react-native-community/discussions-and-proposals/issues/40
Codegen: https://github.com/react-native-community/discussions-and-proposals/issues/92
JSI: https://github.com/react-native-community/discussions-and-proposals/issues/91

Thanks @kelset for organizing these links for us!
GitHub
React Native Fabric (UI-Layer Re-architecture) · Issue #4 · reac...
Intro With this issue I'd like to try and create a "one stop" for all the information available around the future re-architecture of the UI-Layer of React Native, codenamed "Fabr...
GitHub
TurboModules (NativeModules Re-architecture) · Issue #40 · react...
Introduction This is a place for discussions around the upcoming "TurboModule" feature. Full proposal here: https://github.com/react-native-community/discussions-and-proposals/blob/master...
GitHub
CodeGen Discussion · Issue #92 · react-native-community/discussi...
Intro With this issue I'd like to try and create a "one stop" for all the information available around the CodeGen: a tool to "glue" JS and native side: it will allow for su...
GitHub
JSI (JavaScript Interface) Discussion · Issue #91 · react-native...
Intro With this issue I'd like to try and create a "one stop" for all the information available around the JavaScript Interface, the unified lightweight general purpose API for (theor...
[4:08 PM] yungsters: @rostislav.simonik Regarding Nuclide being archived, there seems to be a growing community around VS Code. If it were me, I'd look there first.
[4:08 PM] fkgozali: @mk re: JSI/nativemodule, are you referring to the new TurboModule system? If so, here are some info: https://github.com/react-native-community/discussions-and-proposals/issues/40
GitHub
TurboModules (NativeModules Re-architecture) · Issue #40 · react...
Introduction This is a place for discussions around the upcoming "TurboModule" feature. Full proposal here: https://github.com/react-native-community/discussions-and-proposals/blob/master...
[4:08 PM] EliWhite: more plz!
[4:08 PM] Iggytoad 📦: [q&a] What are some of your favorite OSS tools used while working on/debugging RN?
[4:09 PM] fkgozali: @mk if you'd like to use JSI directly, there's not much hooks to it, but see https://github.com/react-native-community/discussions-and-proposals/issues/40#issuecomment-454138232 for some inspiration
GitHub
TurboModules (NativeModules Re-architecture) · Issue #40 · react...
Introduction This is a place for discussions around the upcoming "TurboModule" feature. Full proposal here: https://github.com/react-native-community/discussions-and-proposals/blob/master...
[4:09 PM] Paul Stockley: Is the debugging experience different with fabric?
[4:09 PM] axemclion: @rostislav.simonik For VSCode - https://github.com/Microsoft/vscode-react-native. This is Microsoft's official extension for RN
[4:09 PM] PeteTheHeat: @paulxuca profiling in production is important, we do it here at FB. There's no way to simulate all the different devices and network connections that your app experiences in the wild. Some keys: be careful how much data you're sending back, and how often a particular user is profiled.
[4:09 PM] tido: [Q&A] What’s the future of Metro and what do you think about Haul?
[4:09 PM] brandon.arnold: [q&a] Anybody in Seattle location working on RN? Headed to boot camp in a couple weeks
[4:09 PM] Bluebird: I Work lone in a RN app for company. I started at zero, faced a lot of hard time for just configuring dependency and animation. Wish i had better guidelines.
[4:10 PM] JK: [Q&A] any resources you can point me to for specifically working on performance and being able to record current performance to notice improvements
[4:10 PM] paulxuca: [Q&A] Any planned support to allow codesplitting/ lazy loading js natively? Something along the lines of https://github.com/karanjthakkar/RNLazyBundleLoading
GitHub
karanjthakkar/RNLazyBundleLoading
A working example of lazy bundle loading using React Native - karanjthakkar/RNLazyBundleLoading
[4:10 PM] sahrens: @Andrei_Calazans Actually ReactVR is basically that - React Native rendering to OpenGL. We've also thought about it from the context of 2D apps like Flutter, but it has never seemed like the right approach for many reasons, the main being that we want to build apps that look and feel like the native platform and we didn't want to reimplement everything provided by the platform - it takes a ton of work and is very hard to keep up to date as platforms update their look and feel, including supporting multiple OS looks simultaneously so we can deploy to both new and old devices. Flutter has thrown a ton of resources at the problem and it's unclear if the results will be worth the investment vs. the RN approach.
[4:10 PM] esimba: RN apps tend to be pretty huge in size  compared to native apps is there a plan to make sure apps are smaller?
[4:11 PM] shaneReactiflux: [Q&A] Ans: @shaneReactiflux why are you using a WebView instead of playing it with a native player? I imagine a lot of the problems would stem from there. Well, there are some cases we can't just stream mp4 video directly, all we had is a web page that play an video. In that case, WebView is required isn't it? Or do we have a better solution to use native player?
[4:11 PM] fkgozali: @Paul Stockley the main difference is that Fabric will have a bunch of synchronous calls to native land, and the existing Chrome debugger integration will need some adjustment. See https://github.com/react-native-community/discussions-and-proposals/issues/7 for some background
GitHub
Debugging JSC directly · Issue #7 · react-native-community/discu...
What The ability to attach to JSC directly to debug React Native JavasScript code. Background Currently, we use Chrome to run the JS code when React Native is in the debug mode. When we start the d...
[4:11 PM] mehdi: @Iggytoad 📦 I use Expo + Atom but I want to out VS Code soon. I know it’s pretty boring answer :sweat_smile: what other tooling were you thinking about?
[4:11 PM] yungsters: @brandon.arnold Welcome to FB! Marketplace is a huge user of React Native and they have a significant presence in our Seattle office.
[4:11 PM] cpojer: @tido Metro is being optimized for React Native both in terms of build time and reload time. It's a lot faster than anything else with the DeltaBundler, which is exciting. There is also a fairly large web app at Facebook that just converted to Metro, you may wanna hit "View Source" on some to find out which one it is :wink:
[4:12 PM] PeteTheHeat: @JK Depends on what aspects of perf you care about (Startup time, scroll perf, memory...) but here's some:
http://blog.nparashuram.com/2018/11/react-native-performance-playbook-part-i.html
https://facebook.github.io/react-native/docs/performance#profiling

Xcode instruments is great for iOS apps
React Native Performance Playbook - Part I
Getting Ready - Setting Up Instrumentation Over the last six months, I have been working on improving the performance of React Native. I...
Performance · React Native
A compelling reason for using React Native instead of WebView-based tools is to achieve 60 frames per second and a native look and feel to your apps. Where possible, we would like for React Native to do the right thing and help you to focus on your app instead of performance ...
[4:12 PM] EliWhite: more plz
[4:13 PM] Foyarash: [Q&A] Are there any plans to improve the documentation ? Sometimes i find myself having to look into the source code to use some undocumented stuff. Same goes as for Metro doc
[4:13 PM] ChrisSeverns: [Q&A] An issue I’ve seen a lot with RN is performance working fine on iOS but really dragging on Android, especially older devices. Does the new architecture significantly change this?
[4:13 PM] Checkmatez: [Q&A] Any plans to improve current documentation? Both looks and content :smiley: Just compare to React site (:
[4:13 PM] yungsters: @esimba We haven't seen that to be the case for Facebook. In contrast, we've found that our React Native features tend to be smaller than natively built ones. I would dig into what dependencies you might be over-including into your app. On Android, the biggest single dependency should be the JS VM.
[4:13 PM] Llaver: [Q&A] Are there any public React Native projects that you are enjoying following at the moment?
[4:13 PM] mehdi: @shaneReactiflux yeah I would use a native video player instead. The streaming case is nearly impossible to do well with a WebView, you’ll want to do complex things like know how much buffer is left, if the user changed connection, and even switch video streams to lower quality. A native video player makes more sense
[4:14 PM] axemclion: [Q&A] How big is React Native inside facebook ? What are some of the major apps inside facebook using React Native ?
[4:14 PM] EliWhite: more more more!
[4:14 PM] David Vacca: @ChrisSeverns yes, the new architecture will improve performance for older android devices
[4:14 PM] hector: @Foyarash yes! We have plans to revamp the documentation in the next few months. You can help us out by opening issues in the https://github.com/facebook/react-native-website repository, whether it's for old/inaccurate docs, or places where the documentation is lacking. If we failed to answer your question in the docs, I want to hear about it!
[4:14 PM] briguy: [Q&A] What do you think of CodePush and is it being used in any FB apps?
[4:14 PM] orta: [Q & A] Are you thinking of  moving React Native to  TypeScript ?
[4:14 PM] dayhaysoos: Is there anything in particular the RN core team would love help with from the open source community?
[4:14 PM] Kyle Thompson: [Q&A] Is there any work being done around testing React Native applications? How is it done internally at Facebook?
[4:15 PM] brandon.arnold: @orta  scroll up a ways
[4:15 PM] Iggytoad 📦: @Kyle Thompson We have a few types of tests running internally: snapshot tests running continuously, unit and redbox tests running at diff time, jest tests running at diff time, e2e tests.... The main issues we plan on addressing this half is improving the reliability of these tests, and bringing the internal and external testing frameworks closer together. This way, internal commits don't silently break OSS tests and vise versa.
[4:15 PM] Checkmatez: @orta it is duplicate, they already answered that
[4:15 PM] cpojer: @Foyarash  @Checkmatez Yes!! As part of our increased involvement in the open source parts of React Native, we are also planning on redoing the website and documentation. It'll likely be a few months before we get started, but we recognize it's a bit outdated so we wanna do a comprehensive overhaul. Let me know if you wanna help!
[4:15 PM] Rick: @orta no plans, flow is important inside facebook and react native is linked internally
[4:15 PM] mehdi: @Iggytoad 📦 oh I actually love using mitmproxy. Really helpful for analyzing server problems. I also use the React Dev tools a bunch to understand what the hierarchy looks like and understand why stuff isn’t being re-rendered etc
[4:15 PM] tido: @cpojer Our biggest gripe with Metro is issue #1, support for symlinks. But we also gained a few other benefits such as tree shaking and getting access to the whole ecosystem with plugins that detect duplicates. Are these things considered?
[4:15 PM] That Guy: [Q&A] what’s the teams favorite RN crash course video on YouTube?
[4:15 PM] hector: @Checkmatez I just answered a related question about the docs, but I will add that our plans include a new website :smiley:
[4:15 PM] Joe: [Q&A] Do you think it makes sense to periodically (every few RN releases) reconstruct our mobile app in a fresh new project rather than continually upgrading in place? (With an eye toward reducing cruft and having iOS/Android builds that work properly with the latest tools.)
[4:16 PM] BTM: As a reminder we will have the Q&A in a more readable form, on our website, in a few days (looking at the number of questions ^^")
[4:16 PM] yungsters: @axemclion This tweet thread has our most publicly comprehensive list of usages of React Native at Facebook: https://twitter.com/sophiebits/status/1003101478427357184
[4:16 PM] PeteTheHeat: @briguy  CodePush is cool! Enables RN devs to move really fast. We don't use it internally though.
[4:16 PM] cpojer: @tido The right person to ping about Metro would be @rafeca
[4:16 PM] ericvicenti: [Q&A] Haul/Webpack is slow, and it is a pain to support multiple packagers in a shared codebase. Will Metro eventually support web browser and node.js bundling?
[4:16 PM] rostislav.simonik: [Q&A] is flow team planning this kind of Q&A . Please ping that should do also. :wink:
[4:17 PM] Udon Soup: [Q&A] any plans on allowing us to have no RTCWebSocket(if it is used only for debug) not included in release .ipa ?
[4:17 PM] sahrens: @ericvicenti  See @cpojer 's comment about using Metro for web....see if you can find where it's used!
[4:17 PM] tido: [Q&A] How’s Turbo Modules and codegen coming along, and how can I contribute from the TypeScript side?
[4:17 PM] hector: @Joe I don't know of anyone doing that in their projects. I wouldn't feel great if that's the solution people arrive at, I'd rather make sure the tooling is improved to make upgrades smoother. The CLI was recently forked to its own repository, https://github.com/react-native-community/react-native-cli, so now's the time to send your contributions to improve the upgrade experience!
[4:17 PM] Lautarø: @PeteTheHeat  Why you don't use CodePush ?
[4:17 PM] cpojer: @ericvicenti see my answer above. It is already used on a fairly large Facebook property on the web. Find it!
[4:17 PM] orta: [Q & A] How are you  feeling about the RFC process so far?
[4:18 PM] mehdi: @Udon Soup no plans but happy to accept a PR! we have some #ifdefs you can use
[4:18 PM] yungsters: @Lautarø We have a lot of internal mobile release processes and infrastructure that would make direct integration with something like CodePush pretty challenging.
[4:19 PM] fkgozali: @tido we're actively working on these projects, expect something stable to come along later this half.
[4:19 PM] brentvatne: [q&a] have any of you built react-native apps outside of your work at fb? if so, what are they? :smile:
[4:19 PM] cpojer: @orta The RFC process is awesome. It really feels like we are empowering the community in new ways, as well as we have a space for longer form discussions about both technical and social aspects of the project. I'm happy to hear about your ideas on how we can improve the process.
[4:19 PM] PeteTheHeat: @Kyle Thompson There's a bunch of work around testing. I've been focussed on shoring up our internal snapshot tests. In OSS there's been work around Detox, an e2e framework.
[4:19 PM] shaneReactiflux: [Q&A] Sorry, I guess my question wasn't clear. For example, if I want to play video at https://player.vimeo.com/video/295913617, what would be the best way to do it? The format wasn't something like mp4, so https://github.com/react-native-community/react-native-video wasn't working. (sorry for such specific question.)
[4:19 PM] Andrei_Calazans: [Q&A]: Not directly related to React Native but rather the internal environment, has anything been said about react-native-web, given its success? Would Facebook be interested in supporting this project?
[4:19 PM] ericvicenti: @cpojer, I'm excited to hear the development (and I've checked a few fb html files, but don't know what to look for). Are you doing SSR yet? Any idea if/when Metro will help build and reload a node app?
[4:19 PM] mk: @fkgozali thanks for pointing me to those discussions , i was unaware it was discussed on github. I’m looking forward to turbomodules landing in master, it will certainly make us convert some of our other apps over to RN
[4:19 PM] orta: [Q&A] if your team had double/triple the resources, what sort of projects would you look at?
[4:20 PM] hector: @brentvatne does the F8 app count? :stuck_out_tongue:
[4:20 PM] vcarl: @shaneReactiflux your question may be better answered in #need-rn-help. this isn't a good format for help on a specific project
[4:20 PM] Rick: @brentvatne I built a crossfit wod app and am working on another side project using RN :thumbsup:
[4:20 PM] EliWhite: @tido, the codegen is checked into the repo /codegen folder. You can also check out this issue which was just started to bring together resources and enable a home for a conversation: https://github.com/react-native-community/discussions-and-proposals/issues/92. 

@Rick and I are working on the codegen and would love the community to build the typescript support when we are at that point. For now though we have other places in the codegen system where help would be appreciated.
[4:20 PM] fkgozali: @mk pieces of turbomodules are already in master, check them out! Not all of them are there though, almost.
[4:20 PM] David Vacca: @brentvatne yes, I've developed RN apps for a couple of years before joining Facebook
[4:20 PM] Llaver: [Q&A] Any public projects you feel are currently really pushing the limits of react native?
[4:20 PM] mehdi: @brentvatne I made one to help me learn Japanese. Was really just for me so never ended up releasing it though. Shoutout to react-native-navigation which let me do some crazy bizarre but cool looking navigation stuff (honestly it looked more like a sci fi movie than a real app :sweat_smile:)
[4:20 PM] Kyle Thompson: [Q&A] Is there any work being done around the upgrade process?
[4:21 PM] mehdi: @Rick what’s a “wod” app?
[4:21 PM] Rick: workout of the day
[4:21 PM] yungsters: @brentvatne I've never built an app outside of my work at Facebook, but I've definitely reported some bugs to the Delta app (very high quality crypto app, btw) with some more debug information than your average user. :stuck_out_tongue:
[4:22 PM] HolySky: [Q&A] Any plans on building components/APIs that exists in native, like push notifications for example?
[4:22 PM] PeteTheHeat: @Lautarø  our mobile apps have a ton of custom infrastructure already built that gives us similar benefits.
[4:22 PM] Kyle Thompson: @PeteTheHeat anything non e2e? We tend to have a ton of unit tests, but right now we have to mock out all of the native code for that and then most react-native upgrades break those mocks :sweat_smile:
[4:22 PM] EliWhite: @brentvatne, I've built an app for myself that I use to track the TV shows I watch and when new episodes are coming. It lets me deep link into the show apps I have on my phone directly to the correct episode. It also includes a roku remote to control the tv. Pretty neat and useful for me.

I'm still using an old version of react-navigation because I want to be able to swipe between tabs :wink:
[4:22 PM] mehdi: @shaneReactiflux oh I get it now. Vimeo must have some native library though, I would write a small native module/component for that
[4:22 PM] brentvatne: you can do that still if you use createMaterialTopTabNavigator!
[4:22 PM] sahrens: @Andrei_Calazans react-native-web is awesome, and we hired the author @necolas who is now also working on Instagram Web. We're excited to make better use of it and continue supporting it.
[4:22 PM] cpojer: @ericvicenti you can already use Metro that way, it's a JavaScript bundler for anything. You can set it up any way you want. We probably won't be able to provide guides for that anytime soon, but if you are using Metro for RN, also using it for web and node shouldn't be a big jump.
[4:22 PM] Omar Khaled: [Q&A] where can I read more about react native internals? Any guides that would help me understand and contribute to RN core?
[4:22 PM] mehdi: @HolySky there’s already a notifications native module I believe
[4:22 PM] rostislav.simonik: [Q2A] I'm interested whether you plan somehow introduce better support for cocoa pods. There are always big issues, with 3rd party libraries. Always hacking due react-native link doesn't do tha magic.  Are you aware of this issue ?
[4:23 PM] ChrisCodeCole: @mehdi  would like to see that japanese app!
[4:23 PM] janzer: @HolySky There is a library for handling push notifications on iOS (PushNotificationIOS I think). Are there any particular native components you're looking for?
[4:23 PM] ericvicenti: thanks @cpojer , I've used Metro successfully for browser bundling, but had issues with node in the past
[4:24 PM] tido: @EliWhite Afaik, though, that’s just for shadow nodes/Fabric? Regardless, would appreciate to get any pointers on what’s missing etc. And where the community can contribute.
[4:24 PM] Jeremy: [Q & A] Will JSI/Fabric/TurboModules all release around the same time, or will the rollout be more gradual? And at what point in that rollout do you expect there to be concurrent React support? (Assuming it’s out by then)
[4:24 PM] yungsters: @orta Wow... double or triple team size, huh? Each of our major architectural projects could probably have slightly more aggressive timelines with 1 or 2 more people (mythical man month and all that). As I mentioned earlier about Flutter having really amazing tooling and documentation, I'd really want to invest in improving the developer experience and tooling for React Native. And last but not least, I'd invest in more aggressively growing adoption internally at Facebook.
[4:24 PM] Joe: [Q&A] How long do you think it's realistic for a very small team to successfully maintain and grow a commercial RN mobile app without expertise in iOS or Android development/building?
[4:25 PM] hector: @rostislav.simonik Yes, this is something we've been discussing recently. There's a question of whether RN link wrap around CocoaPods, or if we should encourage folks to use CocoaPods directly. There's some discussions in the react-native-community discussions repo I've linked above, please leave any feedback over there!
[4:25 PM] luna: @Omar Khaled Definitely not a comprehensive answer but there are some videos where we talked about the architecture: https://www.youtube.com/watch?v=83ffAY-CmL4
Chain React 2018: The State of React Native by Ram N
[4:25 PM] HolySky: @mehdi If there is one, my coworker had a bad time without knowing about it :joy:
[4:25 PM] fkgozali: @Jeremy JSI is already out there in the repo. Fabric and TurboModules will release separately because their surface areas are vastly different. Concurrent React will need to wait until Fabric impl is complete.
[4:26 PM] prodigynelson: @Joe I’m the only dev on my team who wrote a social media app in rn using expo, whatever the length is I’d say it’d be 50% longer with expo :wink:
[4:26 PM] EliWhite: @tido, the codegen is for generating native code for native components and native modules from a JS source of truth. If you are specifically interested in contributing to that project, lets follow up in the discussion issue for that. If you are interested in contributing more generically then I think some other answers were more focused on that
[4:26 PM] sasurau4: [Q&A] What the future of relation between react-native-core team and react-native-community? Is it still discussing?
[4:26 PM] janzer: @Joe I think it depends on what you're trying to do with your app - if you have a pretty simple use case that doesn't require a lot of custom native modules, then you don't necessarily need a lot of iOS/Android expertise
[4:27 PM] PeteTheHeat: @Kyle Thompson  not in OSS right now unfortunately :frowning: What aspect of upgrades breaks your mocks?
[4:27 PM] leforge: is there a doctor in the works (like flutters) probably my favorite part of that tool
[4:27 PM] jonsamp: @Joe  I built one at Codecademy and it looks like it will be maintained and built for a long time. We don't use any native modules other than what's provided through expo -- we just make it clear to product managers of what we can do :smile:
[4:27 PM] janzer: @Joe I used to work on the companion app for Oculus Go before joining the RN team, and there we wanted to hire some iOS/Android devs for all the custom stuff we wanted to do. But we made it for about 6-8 months before we did that.
[4:27 PM] sregg: [Q&A] are you all working full-time on RN or are you also working on Facebook products using RN?
[4:27 PM] axemclion: @leforge  - I think teh react-native-cli folks are working on . May also share it with Expo
[4:27 PM] Lautarø: I really appreciate your time guys !! You're awesome!!! :1000:
[4:28 PM] Gabe: We have 2 minutes left in the Q&A... so lets take 3 more questions and we'll close this up and thank the team :raised_hands:
[4:28 PM] yungsters: @sregg Everyone answering questions here is full-time on the React Native team.
[4:28 PM] dayhaysoos: [Q&A] Who do y'all main in Smash bros?
[4:28 PM] tido: @EliWhite Thanks. I'll leave my comments on the issue when I'm not super sleepy.
[4:28 PM] EliWhite: @dayhaysoos Lucas :smiley:
[4:28 PM] jonsamp: [Q&A] How is Expo linked with the React Native team? Is there any connection there?
[4:28 PM] Rick: Bowser
[4:28 PM] fkgozali: @dayhaysoos Fox
[4:28 PM] yungsters: @dayhaysoos The real questions. Pikachu. But Wii Fit Trainer is starting to become my main.
[4:28 PM] cpojer: @sasurau4 We are still ironing things out in terms of how we can best collaborate but we have really solid relationships with each other and everyone both at Facebook and in the open source community genuinely want to work together to build the best possible version of React Native we can. I think we need to work a bit on the structure and guidelines for communication and collaboration. Ideally we'll end up with a simple process for discussions, encourage contributions to React Native or the ecosystem, and finally become more inclusive so more people will join us :smiley:
[4:28 PM] Gabe: 1 more question!!
[4:28 PM] hector: @sasurau4  we plan on getting the community more involved with discussions regarding the future direction of React Native. For example, the discussions-and-proposals repository is a joint effort we first initiated last year, which has led to some very interesting discussions. So far it has helped us focus on what are the top issues affecting our most active contributors. I'd like to hear any feedback you might have about it and what we can do better
[4:28 PM] mehdi: @dayhaysoos wii fit trainer :triumph:
[4:28 PM] HolySky: @janzer not a particular one, just curious about third party packages we need to install and could part of core.
[4:29 PM] brentvatne: sometimes we hang out
[4:29 PM] Gabe: @dilraj is the last question.. please everyone else hold
[4:30 PM] yungsters: I think the question got deleted?
[4:30 PM] mehdi: @brentvatne we should do drinks at the old pro again
[4:30 PM] brentvatne: a classy joint
[4:30 PM] Gabe: yes it did ... we'll let @jonsamp 's question be last
[4:30 PM] Gabe: [Q&A] How is Expo linked with the React Native team? Is there any connection there?
[4:31 PM] brentvatne: i'm more of a rose and crown kind of guy but yeah
[4:31 PM] mehdi: oh man, I’m so down for that
[4:31 PM] cpojer: @dayhaysoos I have a whole Twitter thread about this: https://twitter.com/cpojer/status/1077896781034409984
[4:31 PM] Rick: but who do you main @cpojer
[4:31 PM] EliWhite: @Gabe Brent answered that. I think we are all done. Our team has to run
[4:31 PM] Gabe: Thanks all who participated in our Thursday Q&A!! Especially every member of the Facebook React Native Core Team... this Q&A has been legendary :raised_hands:
[4:31 PM] brentvatne: (i'm rent)
[4:31 PM] Iggytoad 📦: thanks everybody for coming out!
[4:32 PM] Gabe: please thank the team!!
[4:32 PM] vcarl: :100: thanks a ton for answering so many questions!!
[4:32 PM] EliWhite: This has been amazing. Thank you all so much for having us and for taking the time to chat and letting us hear what is on your mind. 

I want to thank the moderators. This has been absolutely bananas and they have done a great job helping us keep this somewhat manageable so that we can answer as many questions as possible. :heart: <3

We’ve got a bunch of stuff lined up, this is going to be a great year for React Native!
[4:32 PM] LytraX: Thank you guys!!!!!!!!!!!!!!
[4:32 PM] sregg: :heart:
[4:32 PM] Rick: :heart:
[4:32 PM] jonsamp: Thank you!!! This was awesome!!! :heart:
[4:32 PM] ChrisCodeCole: Thanks!!
[4:32 PM] brandon.arnold: Thanks for doing this folks
[4:32 PM] brentvatne: to clarify further we don't have any formal relationship, we just all care a lot about react-native and we work together when it benefits us both
[4:32 PM] Yannick: Thank you folks!
[4:32 PM] esimba: Thank you.
[4:32 PM] Bluebird: :heart_eyes:
[4:32 PM] Vortex: Thank you guys for this!
[4:32 PM] FlayaN: :heart_eyes:
[4:32 PM] axemclion: Thank you React Native team - you guys are amazing !!
[4:32 PM] Gabe: Thanks @EliWhite for helping to organize on your side :raised_hands:
[4:33 PM] Foyarash: Thanks guys!
[4:33 PM] Gabe: I'm locking down this channel.... we'll have a transcript up on reactiflux.com in a few days
[4:33 PM] That Guy: That was amazing. Great work mods. Thanks RN team!
