---
title: Microsoft React Native Windows Team
date: 2019-10-17
time: 1-2pm PT / 8-9PM GMT
location: Q&A Channel Reactiflux
description: "Eric, Harini, and Paul are engineers @ Microsoft. They will be on to discuss their work on [React Native for Windows](https://github.com/microsoft/react-native-windows)"
people: "[@EricRozell](https://twitter.com/EricRozell) & [@Harini_Kannan](https://twitter.com/Harini_Kannan) & [@pag3rd](https://twitter.com/pag3rd)"
---

## Follow the team

- [@Harini_Kannan](https://twitter.com/Harini_Kannan) (harinik)
- [@EricRozell](https://twitter.com/EricRozell) (rozele)
- [@pag3rd](https://twitter.com/pag3rd) (pag3)
- Andrew Coates (not on twitter) (acoates)

<a name="how-do-you-plan-to-pitch" href="#how-do-you-plan-to-pitch">#</a> **Q:** How do you plan to pitch the idea of React Native to existing Windows developers? – orta

**A:** Great question. I don't know that we're planning to 'pitch' RN to existing Windows developers per se, so much as ensure it's a really terrific and first-class way to develop apps for Windows, and let developers pick what works best for them where they're coming from.

– pag3

---

<a name="hi-guys-whats-the-masterplan" href="#hi-guys-whats-the-masterplan">#</a> **Q:** Hi guys! What's the masterplan for [RNW][react-native-windows]? Merge it into react-native itself, so [RNW][react-native-windows] comes out of the box with the react-native-cli? Or every time I would want to support Windows, I'll need to bring in [RNW][react-native-windows] manually? – Hantar

**A:** The master plan is to be part of React Native in the same way iOS/Android are. Yes, we want to become part of react-native-cli out of the box etc., in the long term.

– harinik

---

<a name="do-you-guys-use-only" href="#do-you-guys-use-only">#</a> **Q:** Do you guys use only TypeScript or plain old JavaScript for complete projects? – JustEscaped

**A:** Internally we use mostly TypeScript.

– rozele

---

<a name="why-not-use-silverlight" href="#why-not-use-silverlight">#</a> **Q:** Why not use [Silverlight](https://www.microsoft.com/silverlight/)? Why move to React? – Ahmed

**A:** We have a lot of .NET/C# offerings for cross-platform like [Xamarin][xamarin]. We are trying to go where developers are and participating in the React world helps us bring our native Windows stack to the web development community in addition.

– harinik

---

<a name="does-hermes-seem-like" href="#does-hermes-seem-like">#</a> **Q:** Does [Hermes](https://engineering.fb.com/android/hermes/) seem like a good fit for [RNW][react-native-windows]? – Jeremy

**A:** Yes we have it running internally and hope to have it available in the public builds as an option soon.

– acoates

---

<a name="why-is-microsoft-using-react-native" href="#why-is-microsoft-using-react-native">#</a> **Q:** Why is Microsoft using React Native (Windows) for their applications? Hasn't Microsoft invested in Universal Windows Platform for a long time as a cross platform application framework? Microsoft also has [Xamarin][xamarin], right? What has been special about React Native vs these others? Also, hi! 😄 – EliWhite

**A:** As you can imagine, a large company like Microsoft (and Facebook I'm sure, too) uses many different technologies to build our apps and experiences. React Native has taken on a lot of momentum lately because it hits a real sweet spot for teams that have a lot of JavaScript experience and want to enjoy the benefits of agile, web-like development model yet be able to achieve highly polished native experiences for their customers, especially as Microsoft focuses on bringing our experiences across the entire "Intelligent Edge" (as Satya calls it).

– pag3

---

<a name="what-other-tools-and-frameworks" href="#what-other-tools-and-frameworks">#</a> **Q:** What other tools and frameworks do you guys use? – JustEscaped

**A:** Microsoft is a big place, across all of our teams, probably all of them 🙂.

– rozele

---

<a name="will-you-be-supporting-react-native" href="#will-you-be-supporting-react-native">#</a> **Q:** Will you be supporting [react-native-navigation](https://wix.github.io/react-native-navigation/#/) by Wix. They're the only one with native navigation. And how is Microsoft planning to catch up/integrate with other current existing libraries for RN? – Hantar

**A:** We would like to, hearing a lot of chatter about this module. We have it in our backlog (https://github.com/microsoft/react-native-windows/issues/2546) to add support for.

– harinik

---

<a name="could-you-tell-me" href="#could-you-tell-me">#</a> **Q:** Could you tell me what advantages could [RNW][react-native-windows] have over [Electron][electron]? – humarkx

**A:** [RNW][react-native-windows] uses much less memory than [Electron][electron], and should generally be more performant. And the UI is fully native so you can take full advantage of the native platform including the acrylic effect that you see in a lot of Windows UI. It can be embedded in existing native apps. And it can use existing native controls.

– acoates

---

<a name="what-possibilities-for-rnwindows" href="#what-possibilities-for-rnwindows">#</a> **Q:** What possibilities for [RNWindows][react-native-windows] are you most excited about React Native "Fabric" opening up? – empyrical

**A:** Component libraries, theming and other high value controls/utilities. React Native "Fabric" really helps us round out offerings in this space not limited to the core.

– harinik

---

<a name="hi-do-you-guys-have-some" href="#hi-do-you-guys-have-some">#</a> **Q:** Hi, do you guys have some plans for doing such thing for other desktop platforms? Or you will leave this for other guys not from Microsoft? 🙂 – Alexandrit_T

**A:** We have the beginnings of a react-native-macOS started. We are focusing on Windows for now. Would love to hear if supporting macOS would be interesting to the community as a broader "desktop" target.

– harinik

---

<a name="when-can-we-expect-parity" href="#when-can-we-expect-parity">#</a> **Q:** When can we expect parity with iOS. We have a RN application, and some big customers are not willing to buy iPads in their stores, its too big of an investment. We need to port the application quickly to desktop/Windows. What do you recommend? – Christian Mokbel

**A:** We're very close to "lean core" parity in [React Native for Windows][react-native-windows] and expect to be there this quarter! In terms of the ecosystem of community modules that people use we're starting to engage in ensuring more and more of those have React Native for Windows built-in by default. We welcome feedback or asks on specific community ecosystem modules you'd like to see us prioritize.

– pag3

---

<a name="what-are-the-limitations-of" href="#what-are-the-limitations-of">#</a> **Q:** What are the limitations of [React Native Windows][react-native-windows]? When it is not recommended for Windows development? Do we need to use Visual Studio for it or is VS Code enough? – gamingumar

**A:** -- We are building some full enterprise level apps with [RNW][react-native-windows], so there are not too many limitations. One of the great things about React Native is that you can always add additional nativemodule and native controls. -- So there are not many limitations. As far as the base platform is concerned we are filling out the core functionality as required for our needs, so it should get filled in pretty quick.

– acoates

At this time you will need VS as well. We are trying to improve the developer experience to see if we can enable just VS Code.

– harinik

---

<a name="which-products-are-using" href="#which-products-are-using">#</a> **Q:** Which products are using [React Native Windows][react-native-windows] at Microsoft? – EliWhite

**A:** Several apps and experiences in Office (Outlook, Mail, Calendar, Word, Excel, Powerpoint) are using [React Native for Windows][react-native-windows]. There are a lot more coming up soon. 🤐 😉

– harinik

---

<a name="will-rnwindows-continue" href="#will-rnwindows-continue">#</a> **Q:** Will RNWindows continue to support [WPF][wpf]? – empyrical

**A:** Our teams in Microsoft have always depended on community contributors for [WPF][wpf] support, and we had some tremendous partners at BlueJeans to create and maintain that offering in the solution. Moving forward, we hope that [XAML Islands][xaml-islands] will address the needs of [WPF][wpf] users.

– rozele

---

<a name="are-the-microsoft-apps-you-mentioned" href="#are-the-microsoft-apps-you-mentioned">#</a> **Q:** Are the Microsoft apps you mentioned are fully(or mostly) using [React Native Windows][react-native-windows] or is it part of it? – Alireza Ghamkhar

**A:** Some of both. We have some apps which we are looking at complete UI rewrites, but we also have embedded scenarios within some apps. -- That's the beauty of the flexibility of RN.

– acoates

---

<a name="how-are-you-guys-able-to" href="#how-are-you-guys-able-to">#</a> **Q:** How are you guys able to keep up with the in terms of release cycles? It seems that you guys are pretty fast to catch up! How many people are working on this project? – Hantar

**A:** It's an effort - and does take a lot of work. But its important both for the community, and so that we are up to date enough to be able to contribute back to RN. We have a dedicated team working on [RNW][react-native-windows], and also since we have so many teams using the platform we also get some help from app teams too. There are probably around 30 people who work on [RNW][react-native-windows].

– acoates

---

<a name="i-am-using-react-native-windows" href="#i-am-using-react-native-windows">#</a> **Q:** I am using [React Native Windows][react-native-windows] for [WPF][wpf] app currently. With new vnext changes, [WPF][wpf] will not be supported, then what options I have? – godpranay

**A:** There is an example in the vnext repo that shows how to consume [react-native-windows][react-native-windows]@vnext in WPF through [XAML Islands][xaml-islands]. Check it out! https://github.com/microsoft/react-native-windows-samples/tree/master/samples/TodosFeed

– rozele

---

<a name="why-do-you-rewrite-your-apps" href="#why-do-you-rewrite-your-apps">#</a> **Q:** Why do you rewrite your apps with [RNW][react-native-windows]? Isn't it less performant? – Дикийборщ

**A:** [React Native for Windows][react-native-windows] layers on top of the modern, hardware-accelerated Windows UI ("[WinUI][winui]") stack and in many cases it's runtime performance and experience is superior to that of how apps were previously written using older generation UI technologies. In addition, using [React Native for Windows][react-native-windows] makes it more sustainable to deliver coherent experiences across native client platforms and the web as code can be shared and updated with greater agility.

– pag3

---

<a name="where-can-we-share-all-the" href="#where-can-we-share-all-the">#</a> **Q:** Where can we share all the dependencies that we would want ported to [RNW][react-native-windows]? – Christian Mokbel

**A:** Great question! We are tracking several that we know of in our repo (see Extensions project- https://github.com/microsoft/react-native-windows/projects/6) If you can file new issues for dependencies you would like to see supported, that would be great!

– harinik

---

<a name="when-will-vnext-become-the-current" href="#when-will-vnext-become-the-current">#</a> **Q:** When will vnext become the "current" version? It seems like it is significantly better and faster! – EliWhite

**A:** 😃 Very soon. We plan to have most API parity with react-native and native modules/view manager authoring stories at par with the "current" version before the end of the year at which time vnext will replace current. You can see our prospective roadmap here - https://github.com/microsoft/react-native-windows/blob/master/blog/Roadmap2019.md.

– harinik

---

<a name="weve-heard-before-with-wpf" href="#weve-heard-before-with-wpf">#</a> **Q:** We've heard before with [WPF][wpf], [Silverlight](https://www.microsoft.com/silverlight/), [WinRT](https://docs.microsoft.com/en-us/windows/uwp/cpp-and-winrt-apis/), and [UWP][uwp], that support would continue, how can we trust this time Microsoft is fully invested in [RNW][react-native-windows]? – Mark "Elsewhere" Lynch

**A:** You missed [WinJS](https://github.com/winjs/winjs). 😉 All kidding aside, I think a general rule of thumb in trusting whether any given technology company is going to support a technology long term and how durable it is for you to build on: are they eating their own dogfood and using it themselves? If so, it makes it harder for them to abandon it without incurring the cost of rewriting their own experiences. So instead of listening to what companies and their marketing say, see what they do.

I think you can look at the list of technologies you mentioned and think about which ones has Microsoft actually used to build their own key experiences and which ones were primarily marketed to third party developers but not really used by Microsoft itself. [WinRT](https://docs.microsoft.com/en-us/windows/uwp/cpp-and-winrt-apis/)/[UWP][uwp] are good examples of technologies that Microsoft has deeply invested in building the Windows, Xbox, and tons of app experiences on top of so it'd be quite an expensive and complex undertaking for Microsoft not to continue to invest in those. [React Native for Windows][react-native-windows] layers on top of that whole technology stack and you can see some of the experiences we've already talked about building using that.

– pag3

---

<a name="with-vnext-rnw-to-customize" href="#with-vnext-rnw-to-customize">#</a> **Q:** With vnext [RNW][react-native-windows], to customize UI Component or write my own native UI component, I will have to know C++. Is it correct? – godpranay

**A:** No; We wrote the core of [RNW][react-native-windows] in C++ for the best performance, but we plan to fully support writing native modules or native views in C# or C++. -- Community modules will likely want to be in C++ so that you dont require other apps to load the CLR. We are just starting to get examples of custom native modules and view managers in the repo.

– acoates

---

<a name="what-changes-in-react-native" href="#what-changes-in-react-native">#</a> **Q:** What changes in React Native are you most excited about and why? – EliWhite

**A:** Hermes is a big one - we all like better perf. Turbo modules is probably next, and we hope that will allow our native modules story to better align with the rest of the platforms in the future (as well as the obvious perf improvements). And then finally fabric is exciting, for basically the same reasons as people want it for the other platforms.

– acoates

---

<a name="how-does-this-project-relate" href="#how-does-this-project-relate">#</a> **Q:** How does this project relate to [ReactXP](https://microsoft.github.io/reactxp/)? – metamarcdw

**A:** [ReactXP](https://microsoft.github.io/reactxp/) is a layer on top of ReactNative to try to get a more write once experience when targeting multiple platforms. [ReactXP](https://microsoft.github.io/reactxp/) should work on top of [react-native-windows][react-native-windows].

– acoates

[ReactXP](https://microsoft.github.io/reactxp/) is an abstraction layer over react-native and react-dom to enable you to write common UI code for either Web clients or React Native clients, including [react-native-windows][react-native-windows]!

– rozele

---

<a name="whats-the-debugging-story-like" href="#whats-the-debugging-story-like">#</a> **Q:** What's the debugging story like between managed .NET code and Javascript code? Assuming there is some interop layer, does a developer have to have two debugger instances attached to see how data is flowing between the two? – dustinsoftware

**A:** You would indeed need two debugger instances, my typical debugging work flow is to launch the app from Visual Studio in debug mode to debug native behaviors and spin up VS Code to attach to the JS runtime. Often I'm debugging either one or the other, so it's rare that I'm actually debugging both, but nothing would stop me from doing that.

– rozele

---

<a name="are-there-any-community" href="#are-there-any-community">#</a> **Q:** Are there any community uses of [RNW][react-native-windows] you'd like to give a shoutout? – empyrical

**A:** BlueJeans was a tremendous partner and early adopter, and even though they only originally targeted [WPF][wpf], they always tried to ensure their contributions moved the needle for both [UWP][uwp] and [WPF][wpf].

We've also received some great issues and feedback from teams at Axsy, apparel21, and I'm sure a number of other companies and individual contributors that I'm forgetting (and I'm so sorry 🙂).

In terms of react-native community members that helped us along the way that we'd love to call out: our friends at Facebook have been tremendously supportive, and community members like @grabbou and his work to enable third-party integrations in the CLI (as well as rapidly shipping bug fixes when we needed them) have been invaluable as well.

– rozele

---

<a name="any-plans-to-rebuild-skype" href="#any-plans-to-rebuild-skype">#</a> **Q:** Any plans to rebuild Skype for Windows using [RNW][react-native-windows] (instead of Electron)? – shergin

**A:** Don't know the answer to this, sorry.

– harinik

---

<a name="do-you-think-vscode-or-even" href="#do-you-think-vscode-or-even">#</a> **Q:** Do you think VSCode, or even full VS itself might see some pieces of [RNWindows][react-native-windows] in it in the future? – empyrical

**A:** Unfortunately one of the issues with [Atom](https://atom.io/)/[Electron][electron] is that its hard to mix in native UI. So it would be hard for VSCode to start using [RNWindows][react-native-windows]. I dont know of any current plans for full VS to use [RNW][react-native-windows], but I can think of some shared experiences that are starting to use RNW which might eventually make it there.

– acoates

---

<a name="my-windows-app-is" href="#my-windows-app-is">#</a> **Q:** My Windows app is [WPF][wpf] app and supports Windows 7, and we are using [RNW][react-native-windows] 0.57. Will we be able to upgrade to 0.60 and beyond as [RNW][react-native-windows] is re-written? – godpranay

**A:** We are not investing in the [WPF][wpf] implementation at this time. As @rozele mentioned earlier, the way forward would be to use [RNW][react-native-windows] vNext + [XamlIslands][xaml-islands] for [WPF][wpf] apps. Here is an example of how to do this - https://github.com/microsoft/react-native-windows-samples/tree/master/samples/TodosFeed.

– harinik

---

<a name="is-there-a-feature-you-would" href="#is-there-a-feature-you-would">#</a> **Q:** Is there a feature you would like to see in RN core that might make things easier for [RNWindows][react-native-windows]? – empyrical

**A:** Lean core helps, long term I'd love if we could get more of the RN core code to be in CxxCommon, as shared C++ code rather than having separate code for android, ios and windows (and other platforms). Fabric probably helps with this. I'd like it if more of the instance management stuff could get there too.

– acoates

We have several proposals our team members have put up on https://github.com/react-native-community/discussions-and-proposals for features we've brought to [React Native Windows][react-native-windows] that we think would make sense to bring to RN core including around accessibility, keyboarding, light/dark theme, etc. Our intention is to work with the community to bring our knowledge/expertise to RN core and make it better for everyone.

For examples see https://github.com/react-native-community/discussions-and-proposals/pull/146 and https://github.com/microsoft/react-native-windows-specs/blob/harinikmsft-keyboardapis/proposals/0000-keyboard-apis.md.

– pag3

---

<a name="hey-guys-will-we-have" href="#hey-guys-will-we-have">#</a> **Q:** Hey guys will we have any native file system API? – Reacted Boy

**A:** There is a popular community module for fs (https://github.com/itinance/react-native-fs) and also an [Expo](https://expo.io) module (https://docs.expo.io/versions/latest/sdk/filesystem/). We would love to have these supported for Windows as well. May not be able to get to everything ourselves, would love the community's help!

– harinik

---

<a name="what-are-the-best-rnw" href="#what-are-the-best-rnw">#</a> **Q:** What are the best [RNW][react-native-windows] example apps to take a look at? – humarkx

**A:** Check out https://github.com/microsoft/react-native-windows-samples!

– rozele

---

<a name="is-react-native-coming" href="#is-react-native-coming">#</a> **Q:** Is React Native coming on Windows 10 also? Didn't know. – Reacted Boy

**A:** 😃 Now you know!

– harinik

---

<a name="whats-the-security-model-like" href="#whats-the-security-model-like">#</a> **Q:** What's the security model like? As in, can JavaScript dependencies be run in some sort of hardened context so that a third party dependency could not overwrite things like String.prototype? Are there any restrictions on the JS context (the thread that runs v8 or whatever) so that it can't access private native or managed APIs (such as spawning a process or writing to an arbitrary file...)? – dustinsoftware

**A:** The JS code can generally only call APIs that are exposed through native modules. The native modules run as part of your apps process, so generally the security model is the same as any other app. Third party JS code runs in the same JS engine instance as the rest of your code, so in that respect its trusted as much as the rest of your app. -- Which is generally the case with any OSS / 3rd party code you use in an app. -- This the same as RN on Android and iOS.

– acoates

---

<a name="what-technology-is-used-for" href="#what-technology-is-used-for">#</a> **Q:** What technology is used for Microsoft Teams implementation? – godpranay

**A:** Teams uses several technologies including React Native in some scenarios.

– harinik

---

<a name="so-can-all-of-the-react-native" href="#so-can-all-of-the-react-native">#</a> **Q:** So can all of the React Native apps be converted into Windows 10 apps? – Reacted Boy

**A:** It depends - if you're using a lot of third-party modules with platform-specific code, then you might need to do a bit of work to get things up and running on Windows 10. If you're mostly just using lean core modules, you shouldn't have any problems!

– rozele

---

<a name="does-react-native-for-windows-only" href="#does-react-native-for-windows-only">#</a> **Q:** Does [React Native for Windows][react-native-windows] only let you reach desktop computers? What about Xbox and HoloLens? – EliWhite

**A:** Really good question. Since React Native for Windows layers on top of [UWP][uwp]/[WinUI][winui] it actually lets you reach not just Windows PCs but also XBox, HoloLens, Surface Hubs, the (newly announced) Surface Neo etc. Since the native platform has built in support for using things like game controller (on Xbox) and gaze (on HoloLens) and so forth, you get those behaviors and capabilities for free using React Native for Windows.

– pag3

---

<a name="this-is-so-cool-is-there" href="#this-is-so-cool-is-there">#</a> **Q:** This is so cool. Is there even a platform where you can't use React Native now after this? – KremBanan

**A:** There is a Mac and a Linux version as well 😉. Anywhere you can run JS, you should be able to run RN.

– harinik

---

<a name="are-there-any-apps-made" href="#are-there-any-apps-made">#</a> **Q:** Are there any apps made which we can test? – Reacted Boy

**A:** We have published a couple of samples here - https://github.com/microsoft/react-native-windows-samples/tree/master/samples with more to come.

– harinik

---

<a name="how-do-you-guys-at-microsoft" href="#how-do-you-guys-at-microsoft">#</a> **Q:** How do you guys at Microsoft handle performance? Is there any kind of specific steps you do? – KnivesQ

**A:** That's a big question. Much of the answer is going to be similar to RN on other platforms. there was a good talk by Ram at chain react for some basic steps. On the platform we are looking at how to make the primitive components as fast as possible, as well as working with the Hermes team to optimize Hermes for windows. We also have the advantage of the fact that the primary team owning RNW also owns the native UI platform, so we are looking at what changes can be made in the native UI platform to make [RNW][react-native-windows] even faster.

– acoates

[electron]: https://electronjs.org/
[react-native-windows]: https://github.com/microsoft/react-native-windows
[uwp]: https://docs.microsoft.com/en-us/windows/uwp/
[winui]: https://github.com/microsoft/microsoft-ui-xaml
[wpf]: https://docs.microsoft.com/en-us/dotnet/framework/wpf/
[xamarin]: https://dotnet.microsoft.com/apps/xamarin
[xaml-islands]: https://docs.microsoft.com/en-us/windows/apps/desktop/modernize/xaml-islands
