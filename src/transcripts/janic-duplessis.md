---
title: Janic Duplessis
date: 2019-05-16
time: 1-2pm PT / 8-9PM GMT
location: Q&A Channel Reactiflux
description: "React Native core contributor. Co-founder @ [th3rdwave](https://www.th3rdwave.coffee/)."
people: "[@janicduplessis](https://twitter.com/janicduplessis)"
---

## [Janic Duplessis](https://twitter.com/janicduplessis), React Native core contributor & Co-founder of [th3rdwave](https://www.th3rdwave.coffee/)

<a name="how-is-react-native-going" href="#how-is-react-native-goin">#</a> **Q:** How is React Native is going? – christoph

**A:** It's going better than ever, I can tell from being around for over 3 years. (you may or may not have something to do with it).

---

<a name="hey-janic-thanks-for-being-here" href="#hey-janic-thanks-for-being-here">#</a> **Q:** Hey Janic thanks for being here. I have been here for quite a while and been looking for a payment solution in react native. Like any payment APIs related solution in react native? Like [react-native-payments](https://github.com/naoufal/react-native-payments). – rizwan_atta

**A:** I'm currently using https://tipsi.github.io/tipsi-stripe/ for payments. I did try [react-native-payment](https://github.com/naoufal/react-native-payments) but it wasn't as well maintained.

_**Follow up**_: I have been using this https://tipsi.github.io/tipsi-stripe/ for quite a while but it always snaps back like its real version is crashing a lot! 7.5.0. It is failing on CIRCLE CI too. Build is failing.

I haven't seen production crashes with it, we can discuss your issues later if you'd like!

---

<a name="hello-janic-im-trying-to" href="#hello-janic-im-trying-to">#</a> **Q:** Hello @janic, I'm trying to create something like Instagram in react native , but I stuck on stories screen. Given a screenshot of what I'm trying to achieve. I'm trying to implement Instagram story in my app but how can I add left right tap clicks. The second problem is that how can I display dynamic story count (with stories seen as progress) as shown in top side of the image. Please help if have any idea about it. ![help](https://media.discordapp.net/attachments/193117606629081089/578673414093406228/20190516_183309.jpg)
– JayTailor45

**A:** You probably want to take a look at the great [react-native-gesture-handler](https://github.com/kmagiera/react-native-gesture-handler) library to handle gesture based interactions like stories. I haven't done something exactly like this before but had success implementing a tinder like swipe UI.

---

<a name="what-are-your-thoughts-on-having" href="#what-are-your-thoughts-on-having">#</a> **Q:** What are your thoughts on having official Web platform support in React Native? Is it something you'd support/like to see, or would having one codebase for mobile and web be a detriment in your opinion? – hodgef

**A:** I don't think official support for other RN platforms is necessary. Unless facebook uses it there's no point in having the code live in the React Native repo as it just slows things down.

[RNW](https://github.com/necolas/react-native-web) is actually pretty well maintained as an unofficial platform and I'm currently using it to build the web version of Th3rd Wave.

---

<a name="hi-i-have-a-question" href="#hi-i-have-a-question">#</a> **Q:** Hi, I have a question, I don't know if you can answer it but I would like your thinking on it, Airbnb is one of the company that try to do a full React Native, but they dropped it for performance issue and others, do you have any thinking on this? – Rose Grenth (Thyrande.7103)

**A:** I think Airbnb is a special case. They already have a large native app and probably were not willing to invest enough resource into their integration between their native and react-native code. If you're starting with a greenfield react-native app you should not have to worry too much about perf and the problems encountered by Airbnb.

---

<a name="graphql-image-you-are" href="#graphql-image-you-are">#</a> **Q:** GraphQL, imagine you are going to build an app mobile and dashboard and you'll create everything with GraphQL, are you going to create different "namespaces", one for mobile and another for dashboard (/mobile/graphql & /dashboad/graphql) ??? ... and how you will manage roles-permissions per query or mutation? (nodejs, php) – klmus

**A:** I'm currently using a single GraphQL endpoint for everything including admin dashboards. My permissions system is not handled at the GraphQL layer but at the service layer so multiple endpoints wouldn't really change much.

However I can see having a separate API for things like admin dashboard useful but I would split it too much.

---

<a name="hi-janic-youve-been" href="#hi-janic-youve-been">#</a> **Q:** Hi Janic, you've been with RN for quite a while. Do you think it's a benefit that a person knows given tool / library for such a long time and so well and one should deepen that knowledge, or do you think it's better to get a broader perspective and be eg. a full-stack developer rather than just doing frontend? Do you think one may get tired of RN after working in the environment / ecosystem for a long time? – vonovak

**A:** I think it does help if you are looking to lead a project. RN has such a huge surface area that you end up interacting with many technologies which is something I really like. I've worked on native iOS, Android, JS, babel transforms, JS packaging, polyfilling web apis and more recently C++ stuff so I never really get bored :).

At my company I also do full stack so I do enjoy backend work a bit (not as much as frontend).

---

<a name="hey-janic-what-are-your-opinions" href="#hey-janic-what-are-your-opinions">#</a> **Q:** Hey @janic! What are your opinions on React Native in the web? Do you think it still has some to grow and form or is it ready to be used out in production? You'll probably answer "of course it is!", but I'm a bit curious about what you have to say. Thank you! 😄 – Martinnord

**A:** React Native for the web is great (using it in production)! I'm working on a component library that works on both RN and web using it. The goal is not to reuse the code as is but to use the same abstractions to build on mobile and web so engineers feel comfortable switching between the 2 platforms.

The api is based on styled-system and I'm looking forward to open sourcing it when I get a bit of free time 😃.

---

<a name="hello-me-and-a-friend" href="#hello-me-and-a-friend">#</a> **Q:** Hello! Me and a friend are very keen to contribute to the React Native project. We have had a lot of problem building from source though. I have tried to follow the 'Building from source'-guide in the docs (before it disappeared a few days ago) and the guide provided by [Cpojer](https://twitter.com/cpojer), but both guides has led to an error. On Windows you get an error earlier (with seemingly no solution) which is avoided on Mac OS. My question is if there is a thorough guide which specifies the exact requirements, settings and packages needed to get a working build environment going? Otherwise, how do you recommend going forward? And is it even possible to build from source on Windows? – Dalbino

**A:** Developing on Windows is more or less supported sadly. It gets broken quite a bit so you have to be ready to dig in issues. If you're starting to contribute to react-native I really recommend using a mac (not sure about Linux). I did use windows for a while to do work in the RN repo so it is possible but I ended up spending most of my time fixing windows specific issues -\_-.

---

<a name="how-do-you-see-web-development" href="#how-do-you-see-web-development">#</a> **Q:** How do you see web development in a few years? Is JS good enough for performance ? Do you think it's the language of the future? – SwiTool

**A:** I think we'll see more different languages used in the coming year because of compilation to web assembly.

I think JS is here to stay though, I do enjoy working with a typed version (Flow/TS) the most though. I've also experimented with ReasonML a bit which I find the type system fascinating.

---

<a name="hey-do-you-think-native" href="#hey-do-you-think-native">#</a> **Q:** Hey, do you think native iOS/Android development is still important for developers to learn or it's too "low level" nowadays like assembly, when you can accomplish most things with RN or similar? Or are we still a ways to go for that? – zpr

**A:** I think this is similar to "is knowing HTML / CSS / vanilla JS important or can I just learn React". You can get around fine with knowing just React Native (hello Expo!!) but if you want to be an "expert" you need minimal knowledge of iOS/Android.

Even for things not related to code it is important to know the design guidelines / UX expectations of the native platforms.

---

<a name="hello-i-cant-choose-between" href="#hello-i-cant-choose-between">#</a> **Q:** Hello, I can't choose between PHP and [MERN](https://mern.io/) stack, I love JS but PHP is very public in my country!! – SirHesham

**A:** I'm pretty sure JS devs are common everywhere now so I'd definitely choose [MERN](https://mern.io/).

---

<a name="whats-the-best-way" href="#whats-the-best-way">#</a> **Q:** What's the best way to jump into graphQL for a node/express/mongo/react developer? – zpr

**A:** I think this depends on how you learn the best. I usually just read through the doc a bit to give me an idea about how a new technology works then apply it in a real project. I'll keep the doc around as a reference and google whatever else issue I face. I also like looking at example projects.

---

<a name="hi-janic-im-a-finance" href="#hi-janic-im-a-finance">#</a> **Q:** Hi @janic, I'm a finance pentester about to start working with RN defining test approach and collaborating with dev teams on best practice. what are your top 3 tips for product security? – m0ogz

**A:** I'm not a security expert but RN is similar to native Android / iOS so you should use the same security best practices. In practice it's a bit easier to get access to the JS bundle of an app than decompiling an APK/IPA so you should assume your client code is public (you should on native iOS/Android too anyway!).

---

<a name="to-continue-on-the-contributing" href="#to-continue-on-the-contributing">#</a> **Q:** To continue on the contributing issue. I have tried building from source on a mac as well, following the official guide, as well as, [Cpojer](https://twitter.com/cpojer)'s, and I haven't managed to get it working there either. That's why I'm curious if there is a thorough guide which specifies the exact requirements, settings and packages needed to get a working build environment going? And are there any issues you are aware of? – Dalbino

**A:** I think [@hector](https://twitter.com/hectorramo) / [@christoph](https://twitter.com/cpojer) are working on updating our contributing guides, you can hit me up with your issue later and I can check if I know about it.

---

<a name="thanks-janic-can-you-recommend" href="#thanks-janic-can-you-recommend">#</a> **Q:** Thanks @janic can you recommend security research resources I can investigate – m0ogz

**A:** I don't know any but if you look for security resources around iOS / Android they probably apply to react-native as well.

---

<a name="have-you-messed-with-using" href="#have-you-messed-with-using">#</a> **Q:** Have you messed with using the apollo cache for local state? If so, how was that experience? – timmywil

**A:** I haven't used [Apollo](https://www.apollographql.com/) much so I can't tell. I've been using mostly Redux + [redux persist](https://github.com/rt2zz/redux-persist) to handle local state and [Relay](https://relay.dev/) for backend data. Now that [Relay](https://relay.dev/) also supports local state I'm looking forward to experimenting with that and maybe get rid of Redux once for all!!

---

<a name="hi-im-interested-to-hear-your" href="#hi-im-interested-to-hear-your">#</a> **Q:** Hi, I'm interested to hear your opinions on the [Flask](https://palletsprojects.com/p/flask/) microframework, personally I love coding in python but it seems all the cool kids use NodeJS. – Conviley

**A:** I haven't used [Flask](https://palletsprojects.com/p/flask/) before, I'm one of the cool kids that use NodeJS. 😆

I found that working with the same language across the full stack makes it easier for engineers to develop a feature completely instead of having to rely on splitting the work between backend and frontend engineers.

---

<a name="whats-something-youre-excited" href="#whats-something-youre-excited">#</a> **Q:** What's something you're excited about in the react native ecosystem? – vcarl

**A:** It has to be Fabric. Especially the ability to have code update the UI synchronously.

---

<a name="any-thoughts-on-reasonml" href="#any-thoughts-on-reasonml">#</a> **Q:** Any thoughts on ReasonML? Have you used it? – Gabe

**A:** I really like reason, I'm currently using it in some small parts of the [th3rdwave](https://www.th3rdwave.coffee/) backend. I actually wrote a small library to write a type safe GraphQL schema in reason that compiles to GraphQL JS. It interops fully with the rest of the schema defined in JS. https://github.com/janicduplessis/bs-graphql-js.

However I did take a step back from using it more as I'm onboarding new team members and prefer to keep the full stack in the same language.

---

<a name="did-you-have-experience" href="#did-you-have-experience">#</a> **Q:** Did you have experience integrating in react native with crypto wallet? How and which libraries did you use? – GuyL

**A:** Sadly I don't, I've never worked with any crypto libraries but you can probably either use bindings to native ones or use a browser one if RN supports all browser APIs used by the lib.

---

<a name="for-a-video-calling" href="#for-a-video-calling">#</a> **Q:** For a video calling algorithm like doing it WebRTC and react native, do you have some thoughts on that? I tried it by using an open source npm pkg aka Jitsi Meet! But I was still not able to get a hang of it totally. – rizwan_atta

**A:** Kind of similar to my previous answer, if you can't get the browser library working you can look at bridging a native library instead.

---

<a name="regarding-security-for-example" href="#regarding-security-for-example">#</a> **Q:** Regarding security, for example [Cordova](https://cordova.apache.org/) have unique security considerations (was presented in some conference), so I would imagine react native also? Usually related to the layer which connects to the native side and the react developers writing on top of react native not being aware of implications on the native side of what happens. In iOS systems maybe even buffer overflows are a concern!? – GuyL

**A:** React Native doesn't allow arbitrary code execution and all communication is currently done through serialized JSON payloads (this will change soon) so it gets rid of a lot of potential security issues around things like buffer overflows.

The code also runs in the same sandbox as regular native apps so you get all this security layer too. I don't think you need additional security measures as you would in the browser or regular native apps.
