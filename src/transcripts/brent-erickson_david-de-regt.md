---
title: Brent Erickson & David de Regt
date: 2018-01-11
time: 1-2pm PT / 8-9PM GMT
location: Q&A Channel Reactiflux
description: "Engineers @ Microsoft/Skype developing ReactXP (https://github.com/Microsoft/reactxp)"
---

## Engineers @ Microsoft/Skype developing ReactXP

<a name="best-react-inside-wrapper-like" href="#best-react-inside-wrapper-like">#</a> **Q:** Having the best of react inside a wrapper like ReactXP, what are the real benefits? - kikoseijo

**A:** The benefit is cross-platform app development. This allows you to write your business/UI logic once and have it run anywhere. React-Native only give you mobile platforms, react-dom only gives you web. ReactXP give you the the best of both. - berickson

---

<a name="youre-saying-make-app-run" href="#youre-saying-make-app-run">#</a> **Q:** So what you're saying is i can make an app run on mydomain.com AND have users install it on their phones, all from the same codebase? - kelstena

**A:** That's correct. We've extracted all of the view/rendering logic/styling into a common framework that allow it to be build for multiple targets including web and mobile (via react-native). - berickson

---

<a name="seems-like-library-like-comprehensive" href="#seems-like-library-like-comprehensive">#</a> **Q:** It seems like a library like this has to be very comprehensive before it's worth basing an app on. How much development effort is being put into it in terms of man hours? - gunn

**A:** The base ReactXP platform is designed to be a very basic framework for building apps on top of -- it wraps some of the most commonly used components of react-native and gives web implementations for them such that almost all apps will need almost everything from ReactXP. The more advanced features (notifications, higher level UI components, etc.) are writable as extensions (and we have several published, with more coming soon) -- but the idea is that the core library doesn't provide oodles of functionality to keep it as lean as possible.

To the other half of your question, fairly significant investments are being made on ReactXP right now for things like accessibility, but by and large we improve things either as needed for our internal work on Skype or due to changes in react or react-native. We also accept (lots of) appropriate PRs from the public to improve the package as well. - deregtd

---

<a name="write-desktop-app-using-reactxp" href="#write-desktop-app-using-reactxp">#</a> **Q:** Can I write desktop app using ReactXP? - godpranay

**A:** Yes, there are a couple approaches you can take to this. You can either build an electron based app (which will wrap your web code) or experiment with the other react-native desktop platforms. We're currently working on integrating react-native-windows into ReactXP. We haven't yet experimented with the other react-native platform apps yet, but it should be doable. - berickson

---

<a name="ok-realistically-going-diverging-products" href="#ok-realistically-going-diverging-products">#</a> **Q:** Ok so realistically these are going to be diverging products now that the codebase has split from mainline react? will facebook be developing one codebase and microsoft will be developing another? or will you make efforts to ensure they stay the same? - kelstena

**A:** They're not competing/diverging at all -- in fact, they're highly complementary. ReactXP is not its own framework, it wraps react-dom and react-native into one common API/UI set. So, without those progressing, ReactXP can't either. - deregtd

---

<a name="hadnt-heard-today-useful-upcoming" href="#hadnt-heard-today-useful-upcoming">#</a> **Q:** I hadn't heard of it until today but it will be useful for an upcoming project, do you think ReactXP is ok to use in production? - kelstena

**A:** - Yes, using ReactXP in production is fine. We're currently using ReactXP in production as well. - berickson

---

<a name="microsoft-writing-apps-reactxp-gokturk" href="#microsoft-writing-apps-reactxp-gokturk">#</a> **Q:** Is microsoft writing own apps with the ReactXP? - gokturk

**A:** Yes the new Skype mobile apps (android/iOS) are written using ReactXP as well as the new Skype Linux/Mac client. There are other teams inside inside Microsoft using ReactXP but I'm unable to give any specifics unfortunately - berickson

---

<a name="advantages-pwa-term-development-sexypanda" href="#advantages-pwa-term-development-sexypanda">#</a> **Q:** What the advantages are against PWA in term of development? - sexypanda

**A:** With ReactXP you could style everything to look like a PWA and get distributable native apps instead of only making your app available via the web. This way users could use your site or download your app. From a visual standpoint, everything should look the same - berickson

---

<a name="limitations-use-libraries-like-nativebase" href="#limitations-use-libraries-like-nativebase">#</a> **Q:** What are the limitations? can i use libraries like nativebase or any other NPM libraries arround? the extension are like extra libraries being the case i can imagine. - kikoseijo

**A:** "Limitations" are somewhat in the eye of the beholder. It's fundamentally just a framework to make it easier for you to develop applications on, so the limitations are mostly that it doesn't provide you a lot of handholding. As such we use dozens of other open source modules in our ReactXP-based projects to provide common functionality (and have released several of them, like nosqlprovider, resub, etc.)

Extensions are just a term we're giving to fully cross-platform ReactXP feature projects. We provide a few of them out of the box in [the ReactXP repo](https://github.com/Microsoft/ReactXP/tree/master/extensions) and more will be coming soon. The idea is that you have to write something that has full implementations on both RN-based platforms as well as one that works on web/electron, so we commonly take an existing RN package and implement a web component either ourselves or by wrapping yet another npm package to provide the common functionality on that platform. In the end you get one module/extension that you can import in your app code and use transparently, not caring about what platform it enacts itself upon. - deregtd

---

<a name="putting-together-configoption-getting-start" href="#putting-together-configoption-getting-start">#</a> **Q:** Are you (or will you be) putting together a no config-option for getting start with ReactXP (ala Create React App or CRNA)? - dentemple

**A:** Someone actually made a similar [CRNA app for ReactXP](https://github.com/react-native-training/create-xp-app). I haven't actually used it, but we've heard good things from other feedback on the issues board. - deregtd

---

<a name="willing-support-windows-phone-devices" href="#willing-support-windows-phone-devices">#</a> **Q:** Is there any willing to support windows phone devices in react native ? - elmawardy

**A:** ReactXP also supports react-native-windows as a platform. We're doing some prototyping on this platform, but it still requires a bunch of work before we can consider using it in production. Work is ongoing on that project to add things like accessibility to be able to make production-ready apps on top of it. But that platform does support all UWP platforms, including windows mobile. - deregtd

---

<a name="see-development-shifting-towards-easy" href="#see-development-shifting-towards-easy">#</a> **Q:** We see development shifting more and more towards easy cross platform capability. Kotlin for example allows to share common business code and interfaces between backend, web frontend, mobile frontends and desktop frontends so you can stay in a single language, have the benefit of typings, etc. - Nimelrian

**A:** icrosoft have any plans to pursue this idea in the future? We saw .NET "officially" arriving on other platforms than Windows via .NET Core. Is there any chance we may be able to write our whole code in CLR languages as we already can with Kotlin?

Unfortunately, I'm unable to comment on Microsoft's business plans with respect to .NET and CLR. This isn't something that we're investing in for ReactXP, but it is an interesting idea nonetheless. - berickson

---

<a name="hi-builds-distributed-build-3" href="#hi-builds-distributed-build-3">#</a> **Q:** Hi, how the builds are distributed? Once you build you have 3 different outputs to place on your web server, and both stores? Thank you! - edyn

**A:** Build distribution is the same as any other native or web apps. If you want to have something available on a platform's App Store, you'll need to build the binary and distrubute it via that mechanism. For web apps, you'd host/publish it to your favorite web host.

ReactXP gives you the ability to create apps for multiple targets but there's no additional magic relating to publication of these apps. - berickson

---

<a name="relation-edyn-typescript-must-order" href="#relation-edyn-typescript-must-order">#</a> **Q:** In relation with @edyn What about Typescript, is it a must have in order to avoid problems, I'm not into compatibility with old browsers its more in the aspect of being able to compile well for the cross platforms. - kikoseijo

**A:** ReactXP works in straight javascript as well if you desire. After several years of using Typescript, we're now pretentious and never want to go back to writing a single line of straight javascript ever again, but everyone's welcome to pick the right arrow from their language quiver. :smiley: Typescript compiles down into javascript, and you can pick the ES targets, so you can decide how much compatibility vs. performance you want to trade-off. - deregtd

---

<a name="probably-speak-lot-people-cross" href="#probably-speak-lot-people-cross">#</a> **Q:** I probably speak for a lot of people, but if I were doing a cross platform / universal app, what would be the benefit of choosing ReactXP over react-primitives or react-native-web? - blackxored

**A:** that's a great question. several folks I know are doing exactly that approach: primitives + react-native-web, using puppeteer and headless-chrome for very fast, parallelized integration testing

The inevitable question. :smiley: To be perfectly honest, when we first started developing ReactXP, that was far before there was react-native-web, and was actually before RN supported Android (but we knew it was coming at the time). So, at the time that we were making product decisions, we just started with ReactXP and went down that road, and hence know very little about react-native-web since we were already path-dependent on ReactXP by the time it came out and was usable.

From the little I've seen of react-native-web, we still like the ReactXP approach because even react-native has little inconsistencies here and there between platform implementations that we try to completely eliminate/abstract away with ReactXP. It's also letting us add intermediate helpers to support accessibility in ways that going directly to the core react-native-xyz platforms would have required every app to do.

So, in the end, neither of us are well-versed enough in the "competition" to give a particularly compelling answer here, but we by and large like the approach of one abstraction layer that lets you transparently write code vs. having to target different platforms and abstract the differences away in your codebase on a per-platform basis. - matt

---

<a name="platform-stable-enough-using-busines" href="#platform-stable-enough-using-busines">#</a> **Q:** Is the platform stable enough for using it in busines projects? - gokturk

**A:** Yes. Most of the current in-market Skype apps (iOS, Android, Mac, Linux) are built using ReactXP. - berickson

---

<a name="keeping-life-balanced-tools-use" href="#keeping-life-balanced-tools-use">#</a> **Q:** How are you keeping your life balanced? What tools do you use to manage everything? - Edouard

**A:** A healthy diet of video games and burgers in my tiny bit of free time? Personally, my wife and I mostly manage our life with a combination of Wunderlist and shared outlook calendars, but there's not a lot of ReactXP in there (yet?) :smiley: - deregtd

---

<a name="state-management-app-use-state" href="#state-management-app-use-state">#</a> **Q:** For state management of app, can I use any of the state containers like redux, refulx, mobx or Its tightly coupled with ReSub? - godpranay

**A:** You're welcome to use any state containers that you prefer. There are many different state management methodologies that can be used in React-based apps with various pros and cons. If you find a pattern that works, you shold feel free to use it with ReactXP.

At Skype we developed and released ReSub for this purpose. We've found the automatic subscriptions to state (via Typescript annotations) to be incredibly useful for building UI components quickly. - berickson

---

<a name="shift-menu-array-macos-want" href="#shift-menu-array-macos-want">#</a> **Q:** No more having to shift the menu array on MacOS? What if I want to make a hotkey of Ctrl + F? Will that automatically convert to CMD + F on Mac OS? - PenguinMan98

**A:** Menus are one area that we've found we really need to tailor to per-platform, due to existing historical nuances in what users of those platforms expect, so we still handle those in a custom fashion as part of our electron wrapper/shell. It's not a bad idea to think about maybe trying to add some semblance of commonality there as a ReactXP extension specifically to handle the electron problem, but I'm just not sure how useful you can make limited abstractions like that.

Keyboard shortcuts are in a similar camp. Due to previously-mentioned platform histories, the behavior is still a little different. Cmd/ctrl-F is a good example of one that works well, but we find the other ones to not provide a lot of value in a reusable fashion, so we just hae some simple adapters that feed common commands into basically a big switch() statement. It's an interesting idea to think about how to take these two concepts and make them externally reusable, but off the top of my head it's hard to find a ton of value there since much (most?) of that code would be fairly boilerplate with little annoying customizations that make reusable modules hard to write there. - deregtd

---

<a name="outlookcom-beta-reactxp-react-wink" href="#outlookcom-beta-reactxp-react-wink">#</a> **Q:** Is Outlook.com beta ReactXP or just React? :wink: - blackxored

**A:** Just React. :frowning: Our understanding is that they wanted to go with a very lean website-only approach for now. Converting from react into ReactXP isn't a ton of work if they decide to go native in the future, though. - deregtd

---

<a name="react-xp-handle-styling-defined" href="#react-xp-handle-styling-defined">#</a> **Q:** How does React XP handle styling? Is it defined once in a strictly cross platform manner as with RN flexbox? What if I want to use a React (not react XP) component library in my web app? - nickmccurdy

**A:** ReactXP uses flexbox for styling, as that's the only way we can play nicely with React Native and web at the same time. If you want to include a React-only component library in your wewb app, you can create a ReactXP extension that provides an implementation for React Native platforms (or choose to create a no-op implementation) and use the React-only implementation for web.

You can see an example of styling [here](https://github.com/Microsoft/ReactXP/blob/master/samples/TodoList/src/TodoStyles.tsx), and an example of ReactXP extensions [here](https://github.com/Microsoft/ReactXP/tree/master/extensions/video). - berickson

---

<a name="used-animated-module-lately-app" href="#used-animated-module-lately-app">#</a> **Q:** I used Animated module lately in an app that animates header on user scroll and I've noticed many frame drops in the "js thread" isn't the Animated module runs on native thread , what can cause that ? - elmawardy

**A:** There are limitations to what types of animationsi that react-native allows to be made fully "native" (i.e. that the math is done on another thread in native, not with javascript performing the interpolation). These are mostly limited to large rectangular simple movements, with certain types of easing functions. If you're seeing an issue with something fairly blocky/easily-moving (like what it sounds like you're describing), I encourage you to open an issue on the ReactXP repo (https://github.com/Microsoft/ReactXP/issues) and we can help take a look.

In the days of yore, we had to do a bunch of work on react-native itself to support more of the native animations, and trying to tune your animations to hit the native side instead of stay on the javascript side is still a challenge. React-native is slowly evolving here, but certainly not as quickly as we'd like to implement all of the sorts of animations we'd like to use without getting jank. - deregtd

---

<a name="option-style-web-mobile-tabletphone" href="#option-style-web-mobile-tabletphone">#</a> **Q:** Is there an option to style for web and mobile (tablet/phone) differently within ReactXP? - Bekael

**A:** You can easily diverge styling where desired (and we do in many places) -- `<RX.View style={ iOS ? iosStyle : otherStyle } />`. The styling system does cross platform work for you where it's helpful, but if you want to add per-platform flair, it's quite easy to do so.

<a name="styling-talk-diverse-mobile-vs" href="#styling-talk-diverse-mobile-vs">#</a> **Q:** The styling you talk about diverse for mobile vs web, but iOS runs on iPads as well, meaning a whole new approach to styling things for bigger screens. - Bekael

**A:** Yup! If you read [this blog post](https://microsoft.github.io/ReactXP/blog/2017/04/27/building-skype-on-ReactXP.html) it describes how we handle responsive design. So we actually tend to slice and dice based on a few different axes -- OS, responsive dimensions, specific platform (tablet vs. phone vs. desktop), etc. We find that treating tablets similar to desktop works fairly well, and the difficulty really comes in with small tablets (i.e. Note 7), since it's small enough that a wide interface doesn't really work properly, but big enough that a phone-centric interface is difficult. These are all design considerations, though -- ReactXP is happy to accept whatever poorly-conceived styling you throw at it, sliced and diced any way you desire. - deregtd

---

<a name="main-difference-reactxp-electron-full" href="#main-difference-reactxp-electron-full">#</a> **Q:** What is the main difference between ReactXP and electron and can I have the full power like electron on desktop cross-platform app - BeshoyHindy

**A:** ReactXP goes beyond just Electron and let's you build for other platforms supported by React Native. You can put a ReactXP app inside of an electron app, electron is simply the shell and ReactXP is the JS library.

You can create a ReactXP extension that accesses electron specific functionality. If you do this, you need to conditionalize your code to ensure that you're not running on another platform (like web) where this wouldn't work. - berickson

---

<a name="reactxp-native-boilerplates-ejectable-like" href="#reactxp-native-boilerplates-ejectable-like">#</a> **Q:** Is ReactXP native boilerplates ejectable like we do with Expo? if its using react naitve i can imagine its same core inside ios and android proyects.. - kikoseijo

**A:** Unfortunately, I don't know what CRXPA uses. :frowning: You'd have to check with the author. That was written fully externally (someone from the OSS community built it) so we don't have any background on it. I assume it's fairly similar to other boilerplates, but don't have any actual knowledge there. - deregtd

---

<a name="samples-hosted-anywhere-view-live" href="#samples-hosted-anywhere-view-live">#</a> **Q:** Are the samples hosted anywhere so I can view them as live demos? - shanem

**A:** The source for the samples are hosted on github but they're not published anywhere. Publishing the web examples as a live demo is a good idea, I'll look into that. https://github.com/Microsoft/ReactXP/tree/master/samples - berickson

---

<a name="earth-chose-rx-component-prefix" href="#earth-chose-rx-component-prefix">#</a> **Q:** Why on earth did you chose RX as the component prefix when there's RX as in Reactive eXtensions? :smile: - blackxored

**A:** When we began internal development, we initially called it ReactX, hence the RX extension. When we open-sourced it we chose the name ReactXP (XP for cross-platform). The RX prefix still fit the newly chosen name, so we kept it as is. - berickson

---

<a name="plans-different-styling-userfacing-api" href="#plans-different-styling-userfacing-api">#</a> **Q:** Any plans of a different styling user-facing API, createText/ViewStyle seems too imperative IMHO and I would love if you could just pass objects or use things in the ecosystem like styled-system? - blackxored

**A:** There are some performance considerations here -- for react-native, when you create a style object, it actually sends the info over the bridge to the native side, which creates an object representing your style, and you just treat it as a number from then on out. So, if you dynamically create a bunch of styles, it's actually quite slow compared to creating more static styles up front and re-using them. So, while one could easily switch the API to support dynamic generation, we tried to lay a "pit of success" for people to do the performant thing and pre-create all their styles where possible.

To expand a bit, managing the bridge is one of the biggest considerations with react-native performance, so we try to do whatever we can to leave it as unused as possible. - deregtd

---

<a name="said-previously-wouldnt-ton-work" href="#said-previously-wouldnt-ton-work">#</a> **Q:** You said previously that it wouldn't be a ton of work to port normal react for web to ReactXP, could you go more into details what type of work you need to do? - FlayaN

**A:** It partially depends on the complexity of your app and the attached DOM handlers. In short, you can do a global find/replace of divs and turn them into RX.Views, Buttons -> RX.Button, ect. Styles move from inline CSS to RX styles. Assuming you're using flexbox already, it should be mostly copy paste to migrate your styles. You'll likely hit some hurldes if you're directly setting CSS properties, but Animated Styles likely handle this for you - berickson

---

<a name="favorite-color-penguinman98" href="#favorite-color-penguinman98">#</a> **Q:** What is your favorite color? - PenguinMan98

**A:** I'm preferrential to Orange and Blue :smiley: - berickson

---

<a name="still-cant-use-usenativedrive-backgroundcolor" href="#still-cant-use-usenativedrive-backgroundcolor">#</a> **Q:** Why we still can't use `useNativeDrive` for `backgroundColor` in react native using Animated library? - Azz_B

**A:** The `useNativeDriver` option only works if react-native actually has support for it on the host side. If not, it tends to either crash on you, or silently ignore you and do it on the javascript side anyway. That said, if they've fully added support for a type of native animation that we aren't passing through properly, by all means let us know on the issues board and we'll address it.

To some extent we're falling a little behind on the animation front because for many of our complex animations we've changed over to using Lottie since it provides a bunch of functionality not available via React (and it has a nice engine for managing/caching those animations), so we're mostly using the animated framework for more coarse-grained animations these days -- the kinds that RN supports natively. :smiley: - deregtd

---

<a name="example-uses-stack-tab-drawer" href="#example-uses-stack-tab-drawer">#</a> **Q:** Is there any example that uses stack and tab and drawer navigaton inside each other in react-navigation? I haven't seen that in the docs - elmawardy

**A:** I don't believe we have examples in place at the moment. I suspect altering any other react-navigation examples to use RX components intead of React-Native components would work. - berickson

---

<a name="reactxpbased-skype-applications-released-long" href="#reactxpbased-skype-applications-released-long">#</a> **Q:** Were the ReactXP-based Skype applications released not that long ago when all of the design changed for the iOS and macOS apps? - ddelrio1986

**A:** Correct, that's when the switch to ReactXP happened. - berickson

---

<a name="im-sure-asked-use-expo" href="#im-sure-asked-use-expo">#</a> **Q:** I'm not sure if this was asked or not, but can we use Expo with ReactXP? - Johnny_Five

**A:** There have been a few issues posted and even a PR attempting to add some Expo support, but we've never used it so we don't know much about it. You can try to dig up some of the history (i.e. https://github.com/Microsoft/ReactXP/pull/236) if it helps. We're happy to bring in support for things that are helpful to the community, especially as long as it doesn't bloat the framework for others. :smiley: - deregtd
