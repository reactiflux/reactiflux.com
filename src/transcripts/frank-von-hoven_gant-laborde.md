---
title: Frank von Hoven & Gant Laborde
date: 2019-09-05
time: 1-2pm PT / 8-9pm GMT
location: Q&A Channel Reactiflux
description: "Frank is a Senior Software Engineer at Infinite Red, Organizer at Chain React Conference, and Editor-in-Chief of The React Native Newsletter. Gant is CTS of Infinite Red, Organizer @ChainReactConf, Open Sourcerer ([Ignite](https://github.com/infinitered/ignite), Reactotron, etc)."
people: "[@infinite_frank](https://twitter.com/infinite_frank) & [@GantLaborde](https://twitter.com/GantLaborde)"
---

## Frank von Hoven & Gant Laborde, Senior Software Engineer & CIO at Infinite Red, respectively

<a name="how-do-you-upgrade-rn" href="#how-do-you-upgrade-rn">#</a> **Q:** How do you upgrade RN app to new versions? – acreddy

**A:** I can speak on how I do upgrades. A big part for me is reading changelogs between where I am and where I need to be. Lots of clients come in and every so often their upgrade story crosses a MAJOR casm. I've found the FB team to be excellent at [changelogs on GitHub](https://github.com/react-native-community/releases/blob/master/CHANGELOG.md) and with a little research I do what I can. But I always OVER DEDICATE time to upgrades with React Native. It's cutting edge, so that means you slow down.

– GantMan

---

<a name="what-are-your-favorite" href="#what-are-your-favorite">#</a> **Q:** What are your favorite react native libraries? – HopesFlyHigh

**A:** I don't have any in particular off the top of my head that I can think of, but if you subscribe to the React Native Newsletter at reactnativenewsletter.com you can get updated with some cool libs that I come across, I'm the Editor of that newsletter, and I'm thinking of adding a quick video with "Frank's Picks" to it as a quickly digestible update for RN devs.

– fvonhoven

---

<a name="when-planning-a-conference" href="#when-planning-a-conference">#</a> **Q:** When planning a conference, how do you decide what the talks at the conference should be about? Or just nothing off the table? – Sharkfac3

**A:** For our [Chain React conference](https://infinite.red/ChainReactConf), I was only in the blind round of the submission review, but I try to select talks that were specific to React Native, some submissions just happened to use React Native for the app and their talk was about something else.

– fvonhoven

So when planning a conf, we have to go through first - Making sure we're approachable by a diverse crowd. Then we do blind scoring. It's important to do blind scoring to make sure you're getting quality for the people paying to see your conference. Once you're in the final stages, it's good to take the last round and make a well balanced conference experience. That means beginner/advanced, topic coverage, and opening/closing.

– fvonhoven

---

<a name="what-do-you-use-along" href="#what-do-you-use-along">#</a> **Q:** What do you use along with React and React native? – JustEscaped

**A:** Generally we try to get everything into JavaScript. We use [Reactotron](https://github.com/infinitered/reactotron) (which is amazing) to help us in the dev experience. We use crash software that has a JS connection, and if we ever dip into native, we always try to wrap that native code in a friendly JS way so we can keep the project maintainable. Big wins are Reactotron, [BugSnag](https://www.bugsnag.com/), and amazing community driven libraries. Like testing in [Detox](https://github.com/wix/Detox) etc Sometimes... we have to leave JS... like to use [Appium](http://appium.io/)... which hurts a lot.

– GantMan

Reactotron https://github.com/infinitered/reactotron.

– fvonhoven

---

<a name="sorry-for-this-boring" href="#sorry-for-this-boring">#</a> **Q:** Sorry for this boring question but how do you see the future of flutter? – Alireza Ghamkhar

**A:** [Flutter](https://flutter.dev/) is something I'm very interested in.. but at the same time it has NOT won me over. Google is fantastic at developer centric marketing. But Google can't seem to keep things straight. They use dart/go/javascript/angular it's all over the place. In my opinion, Flutter has a LOT of real growing up to do before I can feel it's safe from the Google insta-death that they love to do to their popular projects. I'm stearing clear of flutter but keeping an eye on it to see if it ever levels up.

– GantMan

---

<a name="were-building-an-app" href="#were-building-an-app">#</a> **Q:** We're building an app which requires live data and noticing that the battery usage is quite high compared to apps which fetch data based on a user interaction. What's the recommended way of optimizing for battery usage when constantly fetching data? We've tried websockets to the same effect. – paulxuca

**A:** Constantly fetching data apps are battery burners. If I were in your shoes, I'd do 4 or 5 MVPs on devices and find which works best. Sounds like websockets failed for you, but there has to be some states where you can drop down into polling with an exponential backoff. We worked on a project that had 3 APIs once, where 1 of them was polled, but the other two were socket driven, and this was to help performance.... it might work for you, too.

– GantMan

---

<a name="what-is-the-recommended-way" href="#what-is-the-recommended-way">#</a> **Q:** What is the recommended way of preventing extra re-renders when using context api. (I am using hooks!) – gamingumar

**A:** Just off the top of my head you'll probably want to look into the `useEffect` hook https://reactjs.org/docs/hooks-effect.html.

– fvonhoven

---

<a name="what-is-the-best-way" href="#what-is-the-best-way">#</a> **Q:** What is the best way to create a splash screen in a react-native app? – HopesFlyHigh

**A:** I like doing it in Xcode or Android Studio, for iOS I've used: https://medium.com/@kelleyannerose/react-native-ios-splash-screen-in-xcode-bd53b84430ec which prob needs updating, but it's a good ref.

– fvonhoven

---

<a name="how-could-you-overcome-flatlist" href="#how-could-you-overcome-flatlist">#</a> **Q:** How could you overcome flatlist's poor performance? – Doko

**A:** I've struggled with this, because ListView used to give you a peek into data management, and somewhat gave you a better ability to manage memory. FlatList is significantly easier and simpler to implement, but I feel it has some strange gotchas. For me, I've found `initialNumToRender` and `legacyImplementation` tend to be key props in tuning performance. Beyond that, you can always switch libs, chop up data, and dive into native.

– GantMan

---

<a name="what-factors-do-you-consider" href="#what-factors-do-you-consider">#</a> **Q:** What factors do you consider for accepting a post to be added in react native newsletter? – Alireza Ghamkhar

**A:** Great question! Mostly if it's a well written and React Native focused article, it's a good contender... if you have a great photo with it and save me time having to hunt one down then ➕ 😉.

– fvonhoven

---

<a name="how-do-you-handle-form" href="#how-do-you-handle-form">#</a> **Q:** How do you handle form validation in your react/react/native apps? – HopesFlyHigh

**A:** We use custom logic mixed with: https://validatejs.org/.

– fvonhoven

Forms are a simple term for a complex concept. Sometimes validation is server side, and sometimes client. and sometimes simple, and sometimes complex state. To be honest, we engineer each solution depending on the task at hand. Our normal MO is to use what's out there if we can, and otherwise, write our own. It's a simple problem with a thousand custom solutions... I wish I could wrap it all up, but that's never proven to work. The best is our ValidateJS code... but Frank can speak more to that.

– GantMan

---

<a name="i-am-using-reactotron" href="#i-am-using-reactotron">#</a> **Q:** I am using reactotron with react native, Async Storage operations doesn't automatically show up – gamingumar

**A:** Are you configured correctly like the docs ask you? https://github.com/infinitered/reactotron/blob/master/docs/plugin-async-storage.md If you ignite a project, can you see async storage? This might be a setup in your project. If not please create a small project and file a ticket!

– GantMan

in your Reactotron-Config.js

```javascript
ReactotronConfig = {
  clearOnLoad: true,
  host: "localhost",
  useAsyncStorage: true,
  state: {
    initial: true,
    snapshots: false,
  },
};
```

– fvonhoven

---

<a name="in-the-projects-where-you" href="#in-the-projects-where-you">#</a> **Q:** In the projects where you have Stripe or Braintree payments, did you have any difficulty changing your code to be according with the SCA? – LMestre14

**A:** I don't think we've had any issues with SCA. Payments are always more complex that expected, but our team generally gets a godo amount of time to break the problems down. We've even done crypto in apps. It's about respecting the difficulty of the process. I can't say that anyone has ever hit wall that they haven't beaten in payments.

– GantMan

I haven't personally worked on a project with that technology...yet 🙁.

– fvonhoven

---

<a name="does-ignite-prefer" href="#does-ignite-prefer">#</a> **Q:** Does ignite prefer Mobx over Redux? Why? And what about Context? – gamingumar

**A:** There are 2 current boilerplates for Ignite - Andross(Redux) & Bowser(Mobx) -- Context will more than likely be in the next iteration of the Ignite Boilerplate - codenamed: CyberDemon.

– fvonhoven

[Jamon][jamon] is giving a talk at [React Native EU][react-native-eu] about how we're using [MobX-State-Tree][mobx-state-tree] (not MobX) over redux and why. I believe we'll continue to lean more and more on Context as it grows in performance, and leave a few things to [MobXStateTree][mobx-state-tree] - BUT... there's a nice [MobX-State-Tree][mobx-state-tree] + [GraphQL](https://graphql.org/) connection we have a talk coming up in Florida soon.

– GantMan

---

<a name="ive-been-trying" href="#ive-been-trying">#</a> **Q:** I've been trying to contribute to open source but no able to can you please give some tips on how to get started – mkamranhamid

**A:** Update people's readme's with DocToc... https://github.com/thlorenz/doctoc it's quick and easy... i'm working on a blog post that gives guidance for creating a good readme for your libraries, some pointers that help a lib to stand out and get noticed by people, like me, who publish a newsletter 😉.

– fvonhoven

I'd be VERY happy to help you get started. We have lots of tickets and items and we'd help you get started. A second thing, is you should definitely join Hacktoberfest next month! Get a free shirt, and get help getting directed to thousands of open source projects! https://hacktoberfest.digitalocean.com/

– GantMan

---

<a name="fvonhoven-thanks-for-your" href="#fvonhoven-thanks-for-your">#</a> **Q:** @fvonhoven thanks for your <a href="#what-factors-do-you-consider">answer</a>, where can we request you to add the post? – Alireza Ghamkhar

**A:** https://docs.google.com/forms/d/e/1FAIpQLSeEZCF6-cNoPBrw8-FkAD2r6Gslr5b2pykKRn5-lMLDlt6Xiw/viewform

– fvonhoven

---

<a name="do-you-have-any-near-plan" href="#do-you-have-any-near-plan">#</a> **Q:** Do you have any near plan for apollo in reactotron just like redux? – Alireza Ghamkhar

**A:** Unfortunately, I don't think at this time, none of our clients have used or requested it as of yet.

– fvonhoven

I think it's only a matter of time.

– GantMan

---

<a name="are-there-any-react-native" href="#are-there-any-react-native">#</a> **Q:** Are there any react native organizations that I can apply for [gsoc](https://summerofcode.withgoogle.com/) 2020? I know that the org list is not yet released, but if you could tell me a reputed org which has been coming in recent years, or ones which are new, I would love to apply for them. TIA – secc_mama

**A:** Don't know on this one. Google Summer of Code is a cool initiative, but I rarely hear anything about it or the orgs.

– GantMan

---

<a name="are-there-certain-guidelines" href="#are-there-certain-guidelines">#</a> **Q:** Are there certain guidelines to follow when developing a react native app? Like guidelines from apple on human interface? – HopesFlyHigh

**A:** Those should be followed, especially if you're developing for iOS... when you dev for iPhone using [Xcode](https://developer.apple.com/xcode/), I think they sort of guide you in the right direction by default, but we don't have that in RN, so those should be paid particular attention, especially if you want your app in the App Store.

– fvonhoven

I think the guidelines are getting less and less useful, and people don't like me saying it. Look at the best apps, do they look like "iPhone" apps? or do they look like "Google Material Design" apps? No.

I think having a good design department means you get a brand that fits your application, and React Native empowers you to utilize that.

– GantMan

---

<a name="ive-been-always-wondering" href="#ive-been-always-wondering">#</a> **Q:** I've been always wondering how you will hire new developers. I haven't seen anywhere you request for one. when do you decide to add someone and how? – Alireza Ghamkhar

**A:** For hiring at Infinite Red - If you're a contractor/consultant and you're looking for work. Message our CEO [todd@infinite.red](mailto:todd@infinite.red) and also message him in our community slack [community.infinite.red](http://community.infinite.red/) - We do a lot of vetting. We currently only hire USA timezones, too. After working with us for a while, people become core members. That means they become W2 or similar. We are actively working on junior dev pipeline, it's not ready yet. For now we hire excellent experienced devs.

– GantMan

---

<a name="do-you-offer-native-ios" href="#do-you-offer-native-ios">#</a> **Q:** Do you offer native ios and android development for clients? If so, in what scenarios would you do native vs react native? – cmcaboy

**A:** We do, but most of our clients tend to come to us because of React Native, and it's an efficient way to develop on iOS and Android simultaneously.

– fvonhoven

Yes. We almost always push to React Native. Because we can do native and wrap it in React Native, so it's maintainable. It's a lot nicer to touch JS and RN for cross platform, and just wrap the ugly parts in JS so it all plays nicely.

– GantMan

---

<a name="as-react-native-developers" href="#as-react-native-developers">#</a> **Q:** As React Native developers, is there any appeal to progressive web apps? – Sharkfac3

**A:** I think so. We're all about the merging of web and mobile. I think as long as a lifespan of something is small or hackathon, a PWA is perfect. PWA's hit a ceiling though, so if you think it's got wings, you should either start RN or plan a rewrite. PWA's def have their place and they are useful.

– GantMan

---

<a name="what-ci-cd-platform" href="#what-ci-cd-platform">#</a> **Q:** What CI/CD platform do you use at Infinite Red? – cmcaboy

**A:**

– We have tried them ALL! Right now [@jamonholmgren][jamon] has been adding some cool new stuff from GitHub. But it really depends on the project. For instance, do you need to support windows? Do you need to support on-device testing? Are we using a beta process? I can recommend a lot depending on the project. I think CI/CD is custom per project goals.

---

<a name="what-do-you-think-of-nextjs" href="#what-do-you-think-of-nextjs">#</a> **Q:** What do you think of [NextJs](https://nextjs.org/)? – HopesFlyHigh

**A:** Haven't used it but looks interesting... hmmm, weekend project 😉.

– fvonhoven

---

<a name="which-is-the-best-backend" href="#which-is-the-best-backend">#</a> **Q:** Which is the best backend for a ReactJS application? – Juubi

**A:** We use [Elixir](https://elixir-lang.org/) [Phoenix](https://phoenixframework.org/) a bit here at IR. There's a long line of awesome backends out there, but few have had the performance credit that Phoenix has (20x faster than Rails). Personally, I'm very attracted to AWS services like [Amplify](https://aws.amazon.com/amplify/) and [Firebase](https://firebase.google.com/). Giving up control for time.

– GantMan

---

<a name="how-often-do-you-get" href="#how-often-do-you-get">#</a> **Q:** How often do you get to choose the backends on your projects? When choosing your own, what do you prefer? node/graphql? node/rest? php/rest? Thank you for answering our questions! – cmcaboy

**A:** Lol, usually never for me... a lot of our clients already have a web app and want to add a mobile app, we wind up making their backend (which was written for web) work with the mobile app, which IMO and experience can be problematic... ideally your backend should return data configured for the mobile user... we tend to work with majority rest backends.

– fvonhoven

We generally don't get to choose backends. Lots and lots of people show up with a backend in hand. I'd choose AWS, but that's a very personal decision.

– GantMan

---

<a name="react-native-docs-for-animation" href="#react-native-docs-for-animation">#</a> **Q:** React native docs for animation sucks. How do you do animation in RN apps? – acreddy

**A:** I've used the React Native Animated API, but one that we like that's pretty easy to integrate is React Native Animatable: https://github.com/oblador/react-native-animatable.

– fvonhoven

Jason Brown has an AMAZING animation course, I highly recommend. His website is https://codedaily.io/.

– GantMan

---

<a name="what-do-you-use-to-communicate" href="#what-do-you-use-to-communicate">#</a> **Q:** What do you use to communicate with the server? Do you use fetch, xmlhttprequest, or do you use a library like Axios for example? – LMestre14

**A:** Ahhh, we use an Axios wrapper library written by one of our senior devs called ApiSauce https://github.com/infinitered/apisauce.

– fvonhoven

We have a library that wraps Axios. This is one of my favs for dealing with server commands: https://github.com/infinitered/apisauce.

– GantMan

---

<a name="maybe-not-the-right-question" href="#maybe-not-the-right-question">#</a> **Q:** Maybe not the right question for this q/a so feel free to skip it if you think it does not belong here. Could you tell us something about recruitment process at your company? I still see quite a few job applications (both for frontend and backend) which require you to pass some kind of algorithm questions. In the 3 years that I have worked professionally I do not think that I once used any of them and neither did most of the people I know. Yet those questions are still prevalent, even on some strictly frontend oriented jobs. – Tokiko

**A:** I can tell you we're not a rigid company, but we also expect you to bring your whole self to work. Check this podcast to get a deeper intuition on what we look for and what we care about: https://building.infinite.red/.

– GantMan

---

<a name="are-there-any-sort-of-apps" href="#are-there-any-sort-of-apps">#</a> **Q:** Are there any sort of apps that make sense to develop natively, instead of using React Native? (I want to make a geolocation app, and was told I should absolutely make this native instead of using something like React Native) – jakepaulies

**A:** This is going to sound silly and cliche but, honestly, whatever you most comfortable working in... I've used navigation in a RN app before and it works, it's a pain, but I think that's the nature of working with navigation, I know Uber Eats is written in RN, so if they can make it work I think it's prob pretty good (idk if the navigation element of that app is native tho 🤷‍♀️).

– fvonhoven

---

<a name="i-think-i-asked" href="#i-think-i-asked">#</a> **Q:** I think I asked my question bad that there were no answer for it so I ask it differently. how do you accept a react native developer to your team. What characteristics & abilities etc usually that person should have? – Alireza Ghamkhar

**A:** Usually by becoming a contractor initially, we can usually tell if people are a good fit culturally and technically from that, fun fact: I started out as an apprentice at Infinite Red back in the day, but we don't do that anymore, but we may have some kind of program like that in the future, definitely ping [Todd Werth](https://twitter.com/twerth) in [community.infinite.red](http://community.infinite.red/).

– fvonhoven

---

<a name="with-mobx-state-tree" href="#with-mobx-state-tree">#</a> **Q:** With Mobx state tree, do you ever run into performance problems? In such scenarios, do you remove persistence or move any content to volatile state? – cmcaboy

**A:** I haven't seen any performance probs directly related to MST, usually you can wind up with circular references to models and stores, and that can be a pain, and it's a prob that we deal with and are working on a solution, but I haven't seen any lagging because of MST.

– fvonhoven

---

<a name="for-navigation-purposes-in-a-rn-app" href="#for-navigation-purposes-in-a-rn-app">#</a> **Q:** For navigation purposes in a RN app, what navigation component have you used (React-Navigation or React-Native-Navigation)? And if you used both, were there any pros and cons on which to use depending on the project? – LMestre14

**A:** Ah yes, the old "chicken or the egg" question... we use [react-navigation](https://reactnavigation.org/) in all of our projects now, we've used others during the "Great Navigation Wars of 2015-2017", both API's a similar, although I haven't used RN navigation in some time.

– fvonhoven

---

<a name="do-you-use-saga" href="#do-you-use-saga">#</a> **Q:** Do you use Saga, Redux Saga or async await? – gamingumar

**A:** We use async await, but (thanks for catching this [Jamon][jamon]) We use MST flows with generator functions more to your point. We did use Redux Sagas when we did Redux.

– GantMan

---

<a name="thank-you-for-answering" href="#thank-you-for-answering">#</a> **Q:** Thank you for answering questions. how do you manage state in RN? Do you usually use any other tools like Redux to manage states? if so, how often do you use them in developemnt? – Utiliy

**A:** We use mobx-state-tree in development.

– fvonhoven

We use [MobX-State-Tree][mobx-state-tree]. Definitely watch [Jamon][jamon]'s talk at [React Native EU][react-native-eu]. I'm going to mess this up, but "Solving the great state debate with MST" or something like that. It's going to be the best answer by far to this question.

– GantMan

---

<a name="i-believe-saga-provide" href="#i-believe-saga-provide">#</a> **Q:** I believe SAGA provide this ability to cancel an async request, let say if I move to other screen. How it can be done with async await? or any other approach? – gamingumar

**A:** I particularly found this article useful when working with async/awaits: ;) https://dev.to/chromiumdev/cancellable-async-functions-in-javascript-5gp7.

– fvonhoven

[jamon]: https://jamonholmgren.com/
[mobx-state-tree]: https://github.com/mobxjs/mobx-state-tree
[react-native-eu]: https://react-native.eu/
