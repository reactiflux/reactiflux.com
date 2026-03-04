---
title: React Native core team (January 2019)
date: 2019-01-24
time: 1-2pm PT / 8-9PM GMT
location: Q&A Channel Reactiflux
people: "[@reactnative](https://twitter.com/reactnative)"
---

## Follow the team

- [@Eli_White](https://twitter.com/Eli_White)
- [@cpojer](https://twitter.com/cpojer)
- [@mdvacca](https://twitter.com/mdvacca)
- [@shergin](https://twitter.com/shergin)
- [@fkgozali](https://twitter.com/fkgozali)
- [@yungsters](https://twitter.com/yungsters)
- [@hectorramos](https://twitter.com/hectorramo)
- [@peterargany](https://twitter.com/peterargany)
- [@emilyjanzer](https://twitter.com/emilyjanzer)
- [@ramanpreetnara](https://twitter.com/ramanpreetnara)
- [@sahrens2012](https://twitter.com/sahrens2012)
- [@rickhanlonii](https://twitter.com/rickhanlonii)
- [@lunaleaps](https://twitter.com/lunaleaps)
- [@joshuaisgross](https://twitter.com/joshuaisgross)
- Mehdi Mulani (not on twitter)

![The entire React Native Core Team in one room answering questions](https://user-images.githubusercontent.com/11687622/51948653-59ae4c00-23f7-11e9-866b-4e381380b82e.jpg)
_The entire React Native Core Team in one room answering questions!_

## Introduction

Hi everyone! We are the React Native team at Facebook and are super excited to be here and answer questions.

We’ve been hard at work [re-architecting some of the fundamentals of React Native](https://facebook.github.io/react-native/blog/2018/06/14/state-of-react-native-2018) as well as trying to learn and improve some of the biggest [pain points we hear from people in the community](https://github.com/react-native-community/discussions-and-proposals/issues/64).

One other link I want to plug is [our discussions and proposals repo](https://github.com/react-native-community/discussions-and-proposals). I recommend watching this repo, we’ve been using it to discuss bigger changes to React Native and getting feedback from the community.

Let’s jump in! Excited to answer your questions.

_— EliWhite_

---

<a name="jest-yarn-going-typescript-reactnative" href="#jest-yarn-going-typescript-reactnative">#</a> **Q:** Jest and Yarn are going to TypeScript. Can we do react-native next? _— brentvatne_

**A:** We don’t have plans right now to move to TypeScript but recognize that it is super popular in the community. Right now we are working on improving the typing of our core components. I think this will also help the community improve the bindings for TypeScript.

_— EliWhite_

And to add to @EliWhite, Flow is important to FB and works well for us, so as long as React Native is tied to FB internals it’s not on the roadmap to switch.

_— Rick_

---

<a name="different-react-native-react-difficult" href="#different-react-native-react-difficult">#</a> **Q:** How different is React Native from React and how difficult would the transition be from React to React Native? _— Nine_

**A:** React is pretty amazing in that it can be used on so many platforms. It has been really awesome to see the communities around React Native come up. Things like VR, Windows, TV. Super awesome that people are finding so much value in the Platform that React Native provides and the pattern of building components from React. I think we are starting to see that people find the patterns in RN to be a great way to build web apps too. Twitter’s website (desktop and mobile-web) is built using React Native Web without using React Native on mobile at all. This multi platform approach is part of the reason React was invented in the first place so we are of course very excited about exploring this area more.

_— EliWhite_

---

<a name="react-native-flutter-valar" href="#react-native-flutter-valar">#</a> **Q:** React Native or Flutter? _— Valar_

**A:** RN vs Flutter, I guess it depends on your use case. Obviously since we’re working on React Native we would recommend RN, and we’re actively working on the architecture projects to address concerns about async nature of RN. But your company/app may have a different use case in mind :smiley:

_— fkgozali_

I think React Native and Flutter have slightly different goals, so which one you use depends on what you are trying to accomplish. React Native skews toward leveraging each of the platform's native capabilities.

_— yungsters_

---

<a name="whens-next-release-whats-big" href="#whens-next-release-whats-big">#</a> **Q:** When’s the next release and what’s the big buzz about new engine? _— pushpendra_

**A:** The latest React Native release, 0.58, is being propagated at the moment! You can follow the status for any upcoming release by [joining the releases repository](https://github.com/react-native-community/react-native-releases/issues). After this release, we plan on going back to a more frequent release schedule, so 0.59 should not be long after that.

_— hector_

---

<a name="fix-reactnative-friendlier-error-message" href="#fix-reactnative-friendlier-error-message">#</a> **Q:** Will you fix react-native to have friendlier error message outputs? _— Origin_

**A:** If you ever encounter any bad error messages, please let us know by [filing issues on the repository](https://github.com/facebook/react-native/issues). Even better, send pull requests to improve the error messages.

_— yungsters_

Related to this, today’s release, 0.58, includes a redesigned RedBox screen which was entirely driven by the community.

_— hector_

---

<a name="know-discussion-github-already-expect" href="#know-discussion-github-already-expect">#</a> **Q:** I know there has been a discussion on GitHub already, but when can we expect Hooks in React Native? (: _— tobi92_

**A:** We’ll enable Hooks on React Native as soon as there is a public release of React with them enabled.

_— yungsters_

Hooks landed on React stable yesterday, so based on the RN release schedule, you can probably expect Hooks to land on React Native somewhere around the 0.60 release.

_— hector_

---

<a name="rn-currently-646-open-issues" href="#rn-currently-646-open-issues">#</a> **Q:** RN has currently 646 open issues. Should RN core team focus more on resolving these issue rather than implementing new features, or RN will be mostly redesigned? _— LytraX_

**A:** Some amount of open issues is to be expected, but we’d certainly like for the number to be much lower than ~600. I am currently preparing a proposal for handling issues and PRs in a more timely manner, which I'll be posting to [the community proposals repository](https://github.com/react-native-community/discussions-and-proposals)—hopefully we’ll get some good feedback from that, and get more people from the community involved in triaging issues and PRs. We’ll probably focus on getting the number of open PRs down, first.

_— hector_

---

<a name="plan-increase-support-github-repository" href="#plan-increase-support-github-repository">#</a> **Q:** Do you plan increase support for github repository? There are some critical PR on hold, and at least some kind of messages would appreciated like what’s missing, or is rejected due different approach, etc. Thanks. _— effeKtSVK_

**A:** Yeah we hear you—community support is a key focus for us the first half of this year, @hector and @cpojer are all over it.

_— Rick_

---

<a name="specific-reasons-facebook-leaving-react" href="#specific-reasons-facebook-leaving-react">#</a> **Q:** What are the specific reasons facebook is leaving react native after spending so much time invested into it? _— inland_

**A:** Facebook is not leaving React Native—we are investing more in it every half and have big plans for the future, like Fabric!

Sophie's post about the future of RN is here: https://facebook.github.io/react-native/blog/2018/06/14/state-of-react-native-2018

It’s been a while since we last published a status update about React Native.

_— sahrens_

Facebook is not leaving RN. We’ve been heads down working on it for… years now. Check out [Sophie’s post](https://facebook.github.io/react-native/blog/2018/06/14/state-of-react-native-2018) on the open source blog.

_— mehdi_

---

<a name="remember-plan-rearchitecting-animatedspecifically-native" href="#remember-plan-rearchitecting-animatedspecifically-native">#</a> **Q:** I remember a plan for rearchitecting Animated—specifically, the native driver. What are the plans for that? _— prodigynelson_

**A:** There was a while back but we’re waiting for Fabric before working on Animated. Our overall plan is that Fabric’s API will allow better gesture handling along with better animations.

_— mehdi_

re: Animated—@kmagiera has a couple awesome projects we are excited about and might pull into the core ([react-native-gesture-handler](https://github.com/kmagiera/react-native-gesture-handler), [react-native-reanimated](https://github.com/kmagiera/react-native-reanimated)). We also need to get Animated working with Fabric which might require additional changes. Other than that, I’m not aware of any significant refactors planned for Animated.

_— sahrens_

With Fabric we are thinking about some completely new animation API, but it’s unlikely that this work will be finished soon. For now Fabric will support the exiting animation APIs.

_— Valentin Shergin_

---

<a name="could-start-rn-would-differently" href="#could-start-rn-would-differently">#</a> **Q:** If you could start over with RN, what would you do differently? _— Rayd_

**A:** We’d build what we’re building for Fabric.

_— fkgozali_

---

<a name="whats-best-feature-fabric-lautar" href="#whats-best-feature-fabric-lautar">#</a> **Q:** What’s the best feature of Fabric? _— Lautarø_

**A:** The best feature of Fabric is the ability for your application to be multi-threaded without application developers knowing about mutex, etc. Also, Fabric makes React Native more like React for the DOM in terms of interoperability.

_— yungsters_

---

<a name="public-api-rn-core-allows" href="#public-api-rn-core-allows">#</a> **Q:** Will be there a public API in the RN core, that allows the developer to choose between Async or non-Async updates? _— Lautarø_

**A:** Yes, there will be asynchronous variants of most synchronous methods. But I think that synchronous by default will make the most sense in the long term, especially when people start making use of Suspense to provide instantaneous user feedback.

To clarify, I’m referring to initial mount. I think that we’ll probably recommend applications use most asynchronous versions of most events (e.g. scroll, touches, etc).

_— yungsters_

---

<a name="navigation-pain-point-lot-people" href="#navigation-pain-point-lot-people">#</a> **Q:** Navigation is a pain point a lot of people tend to speak to. Is the FB team looking at integrating native navigation? _— agmcleod_

**A:** The Facebook app integrates into native navigation system that was built for the FB app as a whole, so yeah we do have internal native navigation abstraction for RN. It is quite specific to FB though.

_— fkgozali_

---

<a name="would-suggest-server-side-backend" href="#would-suggest-server-side-backend">#</a> **Q:** What would you suggest for the server side (backend) of react-native; (database and rest api), for example react, django, nodejs? And for dbs: neo4j, etc… _— Origin_

**A:** For small projects, you can spin up a node API connected to Firebase (can be REST or GraphQL) in a few hours, complete with auth and basic collections which is great for hacking on prototypes. There was a talk at React Conf on this that's really good.

_— Rick_

---

<a name="plans-improve-lists-like-flatlist" href="#plans-improve-lists-like-flatlist">#</a> **Q:** Are the any plans to improve lists like FlatList and SectionList? There are still some rough edges and perf problems, especially on Android. _— Checkmatez_

**A:** With Fabric it will be easier to do deeper integrations with native APIs, and we’ll also have more oportunities to build deeper recycling, hittesting, and clipping optimizations built into the core. Once Fabric is out, we’ll probably revisit lists.

_— sahrens_

---

<a name="hi-guys-im-budding-web" href="#hi-guys-im-budding-web">#</a> **Q:** Hi guys! I’m a budding web developer and was wondering what things I can do to start to familiarize myself with the ReactJS Stack. Thanks! _— Slipped_

**A:** I think the best way to learn is to build!

_— Rick_

There is a lot of great content regarding the React ecosystem but I found the best is to try and build something and then when you get stuck, finding a tutorial or example to work off from. I guess not React specific but generally good approach. For React specifically, I’ve found the docs really helpful and clear when I get confused about behaviour.

_— luna_

To build on other’s answers, don’t feel like you need to learn the entire stack at once. Choose small pieces and gradually build up context.

_— PeteTheHeat_

---

<a name="youitv-engine-one-currently-binds" href="#youitv-engine-one-currently-binds">#</a> **Q:** Youi-tv Engine One currently binds OpenGL to React Native, doing something similar to Flutter however with React Native. Has this ever been talked about internally, possibly binding React Native to a rendering engine? _— Andrei_Calazans_

**A:** Actually ReactVR is basically that—React Native rendering to OpenGL. We’ve also thought about it from the context of 2D apps like Flutter, but it has never seemed like the right approach for many reasons, the main being that we want to build apps that look and feel like the native platform and we didn't want to reimplement everything provided by the platform—it takes a ton of work and is very hard to keep up to date as platforms update their look and feel, including supporting multiple OS looks simultaneously so we can deploy to both new and old devices. Flutter has thrown a ton of resources at the problem and it’s unclear if the results will be worth the investment vs. the RN approach.

_— sahrens_

---

<a name="team-doubletriple-resources-sort-projects" href="#team-doubletriple-resources-sort-projects">#</a> **Q:** If your team had double/triple the resources, what sort of projects would you look at? _— orta_

**A:** Wow… double or triple team size, huh? Each of our major architectural projects could probably have slightly more aggressive timelines with 1 or 2 more people (mythical man month and all that). As I mentioned earlier about Flutter having really amazing tooling and documentation, I’d really want to invest in improving the developer experience and tooling for React Native. And last but not least, I’d invest in more aggressively growing adoption internally at Facebook.

_— yungsters_

---

<a name="feeling-rfc-process-far-orta" href="#feeling-rfc-process-far-orta">#</a> **Q:** How are you feeling about the RFC process so far? _— orta_

**A:** The RFC process is awesome. It really feels like we are empowering the community in new ways, as well as we have a space for longer form discussions about both technical and social aspects of the project. I’m happy to hear about your ideas on how we can improve the process.

_— cpojer_

---

<a name="debugging-experience-different-fabric-paul" href="#debugging-experience-different-fabric-paul">#</a> **Q:** Is the debugging experience different with fabric? _— Paul Stockley_

the main difference is that Fabric will have a bunch of synchronous calls to native land, and the existing Chrome debugger integration will need some adjustment. See https://github.com/react-native-community/discussions-and-proposals/issues/7 for some background

_— fkgozali_

---

<a name="jsifabricturbomodules-release-around-time-rollout" href="#jsifabricturbomodules-release-around-time-rollout">#</a> **Q:** Will JSI/Fabric/TurboModules all release around the same time, or will the rollout be more gradual? And at what point in that rollout do you expect there to be concurrent React support? (Assuming it’s out by then)_— Jeremy_

**A:** JSI is already out there in the repo. Fabric and TurboModules will release separately because their surface areas are vastly different. Concurrent React will need to wait until Fabric impl is complete.

_— fkgozali_

---

<a name="whats-future-metro-think-haul" href="#whats-future-metro-think-haul">#</a> **Q:** What’s the future of Metro and what do you think about Haul? _— tido_

**A:** Metro is being optimized for React Native both in terms of build time and reload time. It’s a lot faster than anything else with the DeltaBundler, which is exciting. There is also a fairly large web app at Facebook that just converted to Metro, you may wanna hit "View Source" on some to find out which one it is

_— cpojer_

<a name="biggest-gripe-metro-issue-1" href="#biggest-gripe-metro-issue-1">#</a> **Q:** Our biggest gripe with Metro is issue #1, support for symlinks. But we also gained a few other benefits such as tree shaking and getting access to the whole ecosystem with plugins that detect duplicates. Are these things considered? _— tido_

**A:** The right person to ping about Metro would be @rafeca

_— cpojer_

---

<a name="expect-100-rn-bluebird" href="#expect-100-rn-bluebird">#</a> **Q:** By when can we expect a 1.0.0 of RN _— Bluebird_

re: RN 1.0.0, right now we’re focusing on finishing the big architecture projects (Fabric/TurboModule/Codegen). Once they are all done/solid, we’ll evaluate the path for 1.0

_— fkgozali_

---

<a name="anybody-seattle-location-working-rn" href="#anybody-seattle-location-working-rn">#</a> **Q:** Anybody in Seattle location working on RN? Headed to boot camp in a couple weeks _— brandon.arnold_

Welcome to FB! Marketplace is a huge user of React Native and they have a significant presence in our Seattle office.

_— yungsters_

---

<a name="im-excited-hear-development-ive" href="#im-excited-hear-development-ive">#</a> **Q:** I’m excited to hear the development (and I’ve checked a few fb html files, but don’t know what to look for). Are you doing SSR yet? Any idea if/when Metro will help build and reload a node app? _— ericvicenti_

you can already use Metro that way, it’s a JavaScript bundler for anything. You can set it up any way you want. We probably won't be able to provide guides for that anytime soon, but if you are using Metro for RN, also using it for web and node shouldn't be a big jump.

_— cpojer_

---

<a name="haulwebpack-slow-pain-support-multiple" href="#haulwebpack-slow-pain-support-multiple">#</a> **Q:** Haul/Webpack is slow, and it is a pain to support multiple packagers in a shared codebase. Will Metro eventually support web browser and node.js bundling? _— ericvicenti_

**A:** See @cpojer 's comment about using Metro for web….see if you can find where it’s used!

_— sahrens_

@ericvicenti see my answer above. It is already used on a fairly large Facebook property on the web. Find it!

_— cpojer_

---

<a name="hows-turbo-modules-codegen-coming" href="#hows-turbo-modules-codegen-coming">#</a> **Q:** How’s Turbo Modules and codegen coming along, and how can I contribute from the TypeScript side? _— tido_

**A:** we’re actively working on these projects, expect something stable to come along later this half.

_— fkgozali_

---

<a name="support-64-bit-apps-android" href="#support-64-bit-apps-android">#</a> **Q:** How is the support for 64 bit apps on Android? _— DCM_

**A:** support for 64-bit architectures landed in master recently - it is not quite in the latest release of RN yet, due to the way releases are cut, but I think it’s scheduled to go out in 0.59

_— hector_

---

<a name="long-think-realistic-small-team" href="#long-think-realistic-small-team">#</a> **Q:** How long do you think it’s realistic for a very small team to successfully maintain and grow a commercial RN mobile app without expertise in iOS or Android development/building? _— Joe_

**A:** I think it depends on what you're trying to do with your app - if you have a pretty simple use case that doesn't require a lot of custom native modules, then you don’t necessarily need a lot of iOS/Android expertise

I used to work on the companion app for Oculus Go before joining the RN team, and there we wanted to hire some iOS/Android devs for all the custom stuff we wanted to do. But we made it for about 6-8 months before we did that.

_— janzer_

---

<a name="directly-related-react-native-rather" href="#directly-related-react-native-rather">#</a> **Q:** Not directly related to React Native but rather the internal environment, has anything been said about react-native-web, given its success? Would Facebook be interested in supporting this project? _— Andrei_Calazans_

**A:** react-native-web is awesome, and we hired the author @necolas who is now also working on Instagram Web. We’re excited to make better use of it and continue supporting it.

_— sahrens_

---

<a name="mentioned-fabricturbomodulecodegen-read-projects-checkmatez" href="#mentioned-fabricturbomodulecodegen-read-projects-checkmatez">#</a> **Q:** You mentioned Fabric/TurboModule/Codegen. Where can I read more about these projects? _— Checkmatez_

**A:** there are github issues for each of the big parts of the rearchitecture in our discussions and proposals repo.

Fabric: https://github.com/react-native-community/discussions-and-proposals/issues/4
TurboModules: https://github.com/react-native-community/discussions-and-proposals/issues/40
Codegen: https://github.com/react-native-community/discussions-and-proposals/issues/92
JSI: https://github.com/react-native-community/discussions-and-proposals/issues/91

Thanks @kelset for organizing these links for us!

_— EliWhite_

---

<a name="twitch-video-codegen-awesome-react" href="#twitch-video-codegen-awesome-react">#</a> **Q:** The Twitch video about CodeGen was awesome. Is React Native team planning to do more such sessions ? _— axemclion_

**A:** we’ve tried a bunch of new ways to engage with the community over the last few months, from getting a bunch of contributions to Flow type our components (https://github.com/facebook/react-native/issues/22990) to deep dives like the twitch stream. I think we’ve fundamentally underestimated the interest people have in contributing and learning about the internals of React Native. This is super awesome to us and encourages us to do more of these things for sure.

_— EliWhite_

---

<a name="react-native-products-tested-internally" href="#react-native-products-tested-internally">#</a> **Q:** How are React native products tested - internally in FB and externally ? _— axemclion_

**A:** We have a few types of tests running internally: snapshot tests running continuously, unit and redbox tests running at diff time, Jest tests running at diff time, e2e tests…. The main issues we plan on addressing this half is improving the reliability of these tests, and bringing the internal and external testing frameworks closer together. This way, internal commits don’t silently break OSS tests and vise versa.

_— PeteTheHeat_

---

<a name="rn-core-team-going-expanding" href="#rn-core-team-going-expanding">#</a> **Q:** Is the RN core team going to be expanding within the year? How many pull request I need merged to join y'all? _— dayhaysoos_

**A:** we’re always hiring!

_— mehdi_

there's no minimum number of PRs you'd need to get merged in order to join the team, but I’d happily take any PRs you want to send our way! In any case, FB is always hiring :smile:

_— hector_

I had never used React Native before joining the team at Facebook :smiley:

_— EliWhite_

---

<a name="good-know-fb-always-hiring" href="#good-know-fb-always-hiring">#</a> **Q:** Good to know FB is always hiring for RN core team! How do you all prioritize the issues? _— dayhaysoos_

**A:** We recently asked the community what their main problems with React Native are, see "What do you dislike about React Native" here: https://github.com/react-native-community/discussions-and-proposals/issues/64

_— cpojer_

About how we prioritize issues… it’s a delicate balance between issues raised by teams using React Native at Facebook, issues raised by the community, and investing in the future architecture for React and React Native.

_— yungsters_

---

<a name="fabric-also-enable-way-reduce" href="#fabric-also-enable-way-reduce">#</a> **Q:** Will Fabric also enable a way to reduce App load up time if not any plans to improve this _— Andrei_Calazans_

**A:** Fabric itself probably won't help much with app load time unless you have a lot of custom native view managers, but we have a bunch of other stuff in the pipe that will help with startup time so stay tuned!

_— sahrens_

---

<a name="current-feeling-community-support-lean" href="#current-feeling-community-support-lean">#</a> **Q:** What is your current feeling for community support of the Lean Core effort? Do you think you have enough people to oversee all of the various modules you want to remove from the RN core? _— ChrisSeverns_

**A:** yeah I think so. We moved WebView out from the repo and it got tons of improvements almost immediately

_— mehdi_

---

<a name="ive-built-react-web-app" href="#ive-built-react-web-app">#</a> **Q:** if I’ve built a react web app with state management by redux, how hard will it be to create a react native mobile app for it? is there any way to use the web app code when working on the RN app? thank you! _— sidx64_

**A:** My previous team encountered a similar problem when attempting to build a RN app. We ended up using react-native-web and slowly introduced new base components using View, Text. It still felt quite disjointed due to tooling and deploy but it was a great first step to build components that both web and mobile could share.

_— luna_

---

<a name="issue-ive-seen-lot-rn" href="#issue-ive-seen-lot-rn">#</a> **Q:** An issue I’ve seen a lot with RN is performance working fine on iOS but really dragging on Android, especially older devices. Does the new architecture significantly change this? _— ChrisSeverns_

**A:** yes, the new architecture will improve performance for older android devices

_— David Vacca_

**A:** At Facebook a significant amount of our users use Android and that is where we’ve actually spent almost all of our time over the last 6 months. On Android one of the things that matters a lot more than on iOS is disk access. Reading from the disk is way slower on Android and you pay a penalty for every single java class you load. We’ve spent a bunch of time investigating and optimizing the React Native startup path specifically on 2014 android devices in order to make Marketplace fast for those users. This investigation is actually what led to the design of the TurboModules project and some of the features of Fabric. While these features were designed with Android in mind, they will be implemented in shared c++ so that iOS will have the same behavior and improved performance as well. (Note: This was a follow up answer after Q&A ended)

_— Eli White_

---

<a name="whats-favorite-part-working-huge" href="#whats-favorite-part-working-huge">#</a> **Q:** What’s your favorite part about working on a huge, actively changing project? _— Iggytoad_

**A:** there’s always interested problems. Honestly, working on an unchanging project gets boring very fast, it’s much easier to get motivated when there’s real problems to solve rather than just doing refactors for the hell of it

_— mehdi_

I love the community. The fact that there are so many people interested enough to spend an hour of their day chatting with us on discord is what I love about working on such a popular project

_— EliWhite_

---

<a name="hi-folks-looking-info-native" href="#hi-folks-looking-info-native">#</a> **Q:** Hi folks, i was looking for some info on how native modules would work for with JSI? Will older modules be backwards compatible? _— mk_

**A:** re: JSI/nativemodule, are you referring to the new TurboModule system? If so, here are some info: https://github.com/react-native-community/discussions-and-proposals/issues/40

if you'd like to use JSI directly, there's not much hooks to it, but see https://github.com/react-native-community/discussions-and-proposals/issues/40#issuecomment-454138232 for some inspiration

pieces of turbomodules are already in master, check them out! Not all of them are there though, almost.

_— fkgozali_

---

<a name="suggestions-profiling-performance-production-good" href="#suggestions-profiling-performance-production-good">#</a> **Q:** Any suggestions on profiling performance in production? Or not a good idea? - motivation is that depending on device, perf can be wildly different _— paulxuca_

**A:** profiling in production is important, we do it here at FB. There's no way to simulate all the different devices and network connections that your app experiences in the wild. Some keys: be careful how much data you're sending back, and how often a particular user is profiled.

_— PeteTheHeat_

---

<a name="favorite-oss-tools-used-working" href="#favorite-oss-tools-used-working">#</a> **Q:** What are some of your favorite OSS tools used while working on/debugging RN? _— Iggytoad_

**A:** I use Expo + Atom but I want to out VS Code soon. I know it’s pretty boring answer. what other tooling were you thinking about?

oh I actually love using mitmproxy. Really helpful for analyzing server problems. I also use the React Dev tools a bunch to understand what the hierarchy looks like and understand why stuff isn’t being re-rendered etc

_— mehdi_

---

<a name="work-done-around-testing-react" href="#work-done-around-testing-react">#</a> **Q:** Is there any work being done around testing React Native applications? How is it done internally at Facebook? _— Kyle Thompson_

**A:** There's a bunch of work around testing. I’ve been focussed on shoring up our internal snapshot tests. In OSS there's been work around Detox, an e2e framework.

_— PeteTheHeat_

---

<a name="big-react-native-inside-facebook" href="#big-react-native-inside-facebook">#</a> **Q:** How big is React Native inside facebook ? What are some of the major apps inside facebook using React Native? _— axemclion_

This tweet thread has our most publicly comprehensive list of usages of React Native at Facebook: https://twitter.com/sophiebits/status/1003101478427357184

_— yungsters_

---

<a name="think-makes-sense-periodically-every" href="#think-makes-sense-periodically-every">#</a> **Q:** Do you think it makes sense to periodically (every few RN releases) reconstruct our mobile app in a fresh new project rather than continually upgrading in place? (With an eye toward reducing cruft and having iOS/Android builds that work properly with the latest tools.) _— Joe_

**A:** I don’t know of anyone doing that in their projects. I wouldn't feel great if that's the solution people arrive at, I’d rather make sure the tooling is improved to make upgrades smoother. The CLI was recently forked to its own repository, https://github.com/react-native-community/react-native-cli, so now's the time to send your contributions to improve the upgrade experience!

_— hector_

---

<a name="built-reactnative-apps-outside-work" href="#built-reactnative-apps-outside-work">#</a> **Q:** have any of you built react-native apps outside of your work at fb? if so, what are they? :smile: _— brentvatne_

**A:** does the F8 app count?

_— hector_

I built a crossfit wod app and am working on another side project using RN :thumbsup:

_— Rick_

yes, I’ve developed RN apps for a couple of years before joining Facebook

_— David Vacca_

I made one to help me learn Japanese. Was really just for me so never ended up releasing it though. Shoutout to react-native-navigation which let me do some crazy bizarre but cool looking navigation stuff (honestly it looked more like a sci fi movie than a real app)

_— mehdi_

I’ve never built an app outside of my work at Facebook, but I’ve definitely reported some bugs to the Delta app (very high quality crypto app, btw) with some more debug information than your average user. :stuck_out_tongue:

_— yungsters_

I’ve built an app for myself that I use to track the TV shows I watch and when new episodes are coming. It lets me deep link into the show apps I have on my phone directly to the correct episode. It also includes a roku remote to control the tv. Pretty neat and useful for me.

_— EliWhite_

---

<a name="read-react-native-internals-guides" href="#read-react-native-internals-guides">#</a> **Q:** where can I read more about react native internals? Any guides that would help me understand and contribute to RN core? _— Omar Khaled_

**A:** Definitely not a comprehensive answer but there are some videos where we talked about the architecture: https://www.youtube.com/watch?v=83ffAY-CmL4
Chain React 2018: The State of React Native by Ram N

_— luna_

---

<a name="future-relation-reactnativecore-team-reactnativecommunity" href="#future-relation-reactnativecore-team-reactnativecommunity">#</a> **Q:** What the future of relation between react-native-core team and react-native-community? Is it still discussing? _— sasurau4_

**A:** We are still ironing things out in terms of how we can best collaborate but we have really solid relationships with each other and everyone both at Facebook and in the open source community genuinely want to work together to build the best possible version of React Native we can. I think we need to work a bit on the structure and guidelines for communication and collaboration. Ideally we’ll end up with a simple process for discussions, encourage contributions to React Native or the ecosystem, and finally become more inclusive so more people will join us :smiley:

_— cpojer_

we plan on getting the community more involved with discussions regarding the future direction of React Native. For example, the discussions-and-proposals repository is a joint effort we first initiated last year, which has led to some very interesting discussions. So far it has helped us focus on what are the top issues affecting our most active contributors. I’d like to hear any feedback you might have about it and what we can do better

_— hector_

---

<a name="working-fulltime-rn-also-working" href="#working-fulltime-rn-also-working">#</a> **Q:** are you all working full-time on RN or are you also working on Facebook products using RN? _— sregg_

**A:** Everyone answering questions here is full-time on the React Native team.

_— yungsters_

---

<a name="yall-main-smash-bros-dayhaysoos" href="#yall-main-smash-bros-dayhaysoos">#</a> **Q:** Who do y'all main in Smash bros? _— dayhaysoos_

**A:** Lucas

_— EliWhite_

Bowser

_— Rick_

Fox

_— fkgozali_

The real questions. Pikachu. But Wii Fit Trainer is starting to become my main.

_— yungsters_

wii fit trainer

_— mehdi_

I have a whole Twitter thread about this: https://twitter.com/cpojer/status/1077896781034409984

_— cpojer_
