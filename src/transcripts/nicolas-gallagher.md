---
title: Nicolas Gallagher
date: 2017-12-07
time: 1-2pm PT / 8-9PM GMT
location: Q&A Channel Reactiflux
description: "Engineer @ Twitter | Creator of [react-native-web](https://github.com/necolas/react-native-web)"
people: "[@necolas](https://twitter.com/necolas)"
---

## Creator of react-native-web and ex-Twitter engineer

<a name="working-twitter-mrcl" href="#working-twitter-mrcl">#</a> **Q:** How was working at Twitter? - mrcl

**A:** I worked at Twitter for over 5 years, the experience was different at different times.

---

<a name="great-talk-native-web-gotchas" href="#great-talk-native-web-gotchas">#</a> **Q:** Great talk about Native Web. What are the gotchas if any? - lrn2prgrm

**A:** Main gotchas are around the API differences between RN and RNW.

---

<a name="patterns-use-share-code-apps" href="#patterns-use-share-code-apps">#</a> **Q:** What patterns do you use to share your code between apps / web apps? Lerna, seperate git repos, all in one folder? - ericwooley

**A:** I've mainly relied on npm packages. At Twitter I got us to rely on hosting scoped packages on our internal registry, and we published packages there. That works quite well when you don't have infrastructure to coordinate source dependency upgrades across apps.

---

<a name="whats-best-challenging-task-working" href="#whats-best-challenging-task-working">#</a> **Q:** What's the best challenging task (working for web apps/high traffic) for an FrontEnd engineer in your opinion? - Netto

**A:** I tend to think about what I can do as an engineer to help people making apps realise their ideas as quickly as possible. When iterating on an app is slow and costly, a lot of problematic processes can appear and it gets harder to learn from users. So anything you can do to make it affordable to learn quickly and accurately is where a lot of hard challenges lie IMO.

---

<a name="technical-stack-used-5-years" href="#technical-stack-used-5-years">#</a> **Q:** What technical stack was used 5 years ago when you joined? - sarbull

**A:** When I joined, Twitter for Web was moving to Scala + Mustache + jQuery/Flight.

---

<a name="would-split-apps-packages-eg" href="#would-split-apps-packages-eg">#</a> **Q:** How would you split your apps up into packages? EG components, redux, common style or packages for a recursive route strategy? - ericwooley

**A:** We mainly published generic modules that could be used by other teams or projects. Here are some example packages that were under the `twitter` scope: babel-preset, codemods, eslint-config, GraphQL-tools, http-client, react-icons, react-ui, video-player. Nothing as granular as individual styles or redux modules. We had planned to publish redux modules but the move of Twitter's future API away from REST and towards GraphQL made that less of a priority for us.

I should also mention that Twitter has a monorepo, so most development is done there and not in separate git repos.

---

<a name="goal-codebase-targets-mobile-web" href="#goal-codebase-targets-mobile-web">#</a> **Q:** Is the goal for a codebase that targets mobile and web and uses RNW to be able to be 100% shared code aside from platform-specific styling / native capabilities? If so how close to that is the current state of RNW? - Sylnir

**A:** I think the goal for multi-platform apps should be first to start with multi-platform components. The data layer is relatively easy to author without being coupled to a particular platform. Multi-platform components (ios, android, web) is more of a challenge and a lot of that is due to the issues surrounding CSS on the Web. I think RNW already makes it possible to build a large library of multi-platform components - MLS and others have proven this out in production. Where we as a community still have work to do is figuring out how to bring it all together for make multi-platform app development more accessible. There's still quite a bit to figure out, but I think some of the hard first steps have been taken.

---

<a name="limited-styling-application-think-rn" href="#limited-styling-application-think-rn">#</a> **Q:** Am I limited when styling my application? I think RN only supports a subset of CSS-like styles? If not, how does it work? - rrhrg

**A:** Yes, there are some style constraints. In practice I don't think this causes any problems. Hover styles require a component wrapper to be applied using JavaScript. I would like to see browser vendors / spec authors providing more style APIs in JS rather than further complicating the CSS language.

---

<a name="find-using-react-init-best" href="#find-using-react-init-best">#</a> **Q:** Do you find using react init there best way to develop apps or tools like CRNA and Expo are best in the long run? - KJreactor

**A:** I don't know. I've only worked on a couple of React apps that we setup before those tools existed. I think CRA/CRNA/Expo are all great tools to get started. In the future I can imagine we'd want CRA to support multi-platform app development around the React Native API. At the moment, I think there are too many ways to build React components for the web.

---

<a name="would-compare-rnw-reactxp-quincy" href="#would-compare-rnw-reactxp-quincy">#</a> **Q:** How would you compare RNW and ReactXP? - quincy

**A:** ReactXP provides a cross-platform API that is more consistent across the platforms, but at the cost of not being compatible with React Native and it is significantly slower on web than RNW. I haven't really used ReactXP because it doesn't seem to have been designed for mobile web either.

---

<a name="moving-ericwooley" href="#moving-ericwooley">#</a> **Q:** What are you moving on to now? - ericwooley

**A:** I don't know yet :smiley:

---

<a name="many-companies-technicalk-depend-rnw" href="#many-companies-technicalk-depend-rnw">#</a> **Q:** How many companies do you technicalk depend on RNW? Does Twitter plan on maintaining the open sourced RNW (even though you're not there)? - quincy

**A:** I don't know how many companies depend on it, but some examples: Twitter, MLS, The Times (UK). Some Twitter engineers might contribute patches to RNW, but I'll still be maintaining it.

---

<a name="tools-use-produce-css-benchmarking" href="#tools-use-produce-css-benchmarking">#</a> **Q:** What tools did you use to produce the CSS benchmarking results? - zhuo

**A:** The benchmarks in RNW are based on some work Leland Richardson did. I'd like to upgrade at some point. Twitter Lite has a benchmarking screen in development mode that uses this https://github.com/paularmstrong/react-component-benchmark - something like that could be quite helpful in terms of RNW sourcing more perf anecdotes from different mobile devices.

---

<a name="want-tests-apps-could-give" href="#want-tests-apps-could-give">#</a> **Q:** I want to do more tests in my apps. Could you give us some advice or trick in order to get more tests in ours apps and stay motivated? - AdrianC

**A:** If your tests give you confidence to make changes, and save you and your team time, then you might be more motivated to write tests. I'm pretty relaxed about tests though :smiley:

---

<a name="hello-necolas-ive-meaning-try" href="#hello-necolas-ive-meaning-try">#</a> **Q:** Hello Necolas. I've been meaning to try out RNW, because Cordova is awesome and all - it's a mess. But starting up with RNW is pretty hard, considering the getting started section is not very newb friendly, and the "starter packs" all use very outdated versions of RNW. Do you have any plans on introducing your own starter pack that'll be kept up to date with RNW? Or improving the getting started guide. - Rayd

**A:** I think CRA is the way to go to get started. Hopefully the story for getting started will get better over time; I'm mainly focused on getting the core value proposition of the project as strong as possible first. But if other people want to help with the integration and onboarding experiences that would be great.

---

<a name="difficult-tackle-huge-code-base" href="#difficult-tackle-huge-code-base">#</a> **Q:** Was it difficult to tackle the huge code base of Twitter when entering the company? How long did he take you to understand it completely? - popo63301

**A:** I never understood the whole of Twitter's codebase! In terms of Twitter's web apps, one of my motivations behind switching Twitter's web stack to a JS stack was that I found Twitter's Scala-based web apps to be extremely difficult to work with, and quite developer-hostile. Imagine joining Twitter and having to learn Scala just to write some simple View logic? It's also true that I didn't understand the whole of the Twitter Lite codebase either - at some point you have enough people working on an app that you necessarily lose visibility into all of it and instead focus on understanding the properties of the overall system better.

---

<a name="involved-graphql-side-twitter-headaches" href="#involved-graphql-side-twitter-headaches">#</a> **Q:** How involved with the GraphQL side at Twitter were you and were there any headaches you ran into using it? - ghardin137

**A:** I was advocating to adopt GraphQL for a couple of years, but was not involved in any of the engineering work once it started.

---

<a name="one-million-dollars-invest-new" href="#one-million-dollars-invest-new">#</a> **Q:** If you have one million dollars to invest in a new technology, where you'll invest all your money? - AdrianC

**A:** I'm not sure. In my opinion, the biggest problems in the world right now are not technical problems and can't be solved with technology alone - the narrow focus on technology is one of the failings of the current tech industry.

---

<a name="largest-challenges-youve-tackled-building" href="#largest-challenges-youve-tackled-building">#</a> **Q:** What were the largest challenges you've tackled in building RNW and what do you consider the hardest challenge that you haven't gotten to in implementing RNW. - Vincent

**A:** I think the biggest challenges so far were related to styles and events. Looking ahead, probably async animations and defining a core API to be shared with React Native

---

<a name="keeping-life-balanced-tools-use" href="#keeping-life-balanced-tools-use">#</a> **Q:** How are you keeping your life balanced? What tools do you use to manage everything? - Edouard

**A:** I don't have a good answer to that question! One of the reasons I left Twitter was because I wasn't happy working there, and I was concerned with the impact caring so much about Twitter was having on the rest of my life. So I guess I'm figuring out how to find a better balance in the future.

---

<a name="terms-browsers-far-think-theyll" href="#terms-browsers-far-think-theyll">#</a> **Q:** In terms of browsers, how far do you think they'll go into having lots of things already built in in order to add less libraries in our javascript apps. How much do you think the balance should hold for both sides? - sarbull

**A:** I don't know which direction browsers will go. I think there is room for more APIs being added to browsers to help keep work off the main thread. It also seems like a lot of going to change over the next few years (inc with web assembly) and we'll probably be learning how to build web apps all over again!

---

<a name="book-changed-life-adrianc" href="#book-changed-life-adrianc">#</a> **Q:** What book changed your life? - AdrianC

**A:** I like books that inspire you to read a lot of other books. One book like that which always comes to mind is "Pandora's Hope"
