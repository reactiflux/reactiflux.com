---
title: Nader Dabit
date: 2017-09-29
time: 1-2pm PT / 8-9PM GMT
location: Q&A Channel Reactiflux
description: "Founder @ [React Native Training](http://reactnative.training/) | Host of [React Native Radio](https://devchat.tv/react-native-radio) | Author of [React Native in Action](https://www.manning.com/books/react-native-in-action)"
people: "[@dabit3](https://twitter.com/dabit3)"
---

## Founder of React Native Training and host of React Native Radio

<a name="whats-best-way-learn-react" href="#whats-best-way-learn-react">#</a> **Q:** What's the best way to learn React Native? In your opinion. For me the best way was finding tutorials that actually built something and then following them along step by step. — pxY.

**A:** I know one of the first ones I did was by [Ray Wenderlich](https://www.google.com/search?q=ray+wenderlich&rlz=1C5CHFA_enUS722US722&oq=ray+wenderlich&aqs=chrome..69i57j69i65j0l4.3383j0j4&sourceid=chrome&ie=UTF-8), it was good.

Also udemy has some great ones. Just following them along and playing with stuff along the way got me a long way.

Also, being here on Reactiflux already puts you in the know of a lot of stuff!

Finally, I think also finding completed apps on github, downloading them and running them, then going into the code and changing things sometimes is a great way to learn.

---

<a name="assuming-im-medweight-js-dev" href="#assuming-im-medweight-js-dev">#</a> **Q:** Assuming I'm a med-weight JS Dev, and I'd like to switch to mobile development, should I go with React Native over Swift and why? — KGB

**A:** I work almost exclusively with developers who are coming from native when I do consulting for a lot of companies, so I get a variant this questions a lot.

First of all, I don't think that React Native will ever be as performant or of course up to date as the most recent APIs that are available. React Native is, though, as close as we have to being native IMO right now and I have seen and shipped many apps that are indestinguishable from native.

Also it comes down to efficiency. If you already know JavaScript and will be wanting to learn mobile, it is extremely easy to jump into React Native vs going into something like Swift (iOS) or Java / Kotlin (Android). Once you know RN, you can build for not only iOS and Android, but also AppleTV , RN Web, and down the road evem more platforms.

Many companies I work with are also moving their teams to React Native, large fortune 500 companies that may surprise you. Seeing this large shift in the industry also tells me there will be demand for it in the future.

Finally, you are able to iterate much more quickly using RN vs native, so your dev time may drop to 25 - 50% of that of a traditional native environment.

Again, it kind of comes down to what I'm seeing in the industry as far as what companies are investing in, and I am seeing a lot of companies building their businesses on RN.

---

<a name="whats-best-way-implement-emberconcurrency" href="#whats-best-way-implement-emberconcurrency">#</a> **Q:** What's the best way to implement an ember-concurrency clone without redux? — vFp.LindyHop

**A:** I'm sorry I do not have the answer to your question. If you can dm me more details though, I will do my best to figure out an answer for you after this is finished!

---

<a name="love-rn-must-ask-question" href="#love-rn-must-ask-question">#</a> **Q:** I love RN, but I must ask this question because it's almost always an interesting answer for any technology: What are the worst use cases for RN? (speaking within the mobile app domain, of course) — granmoe

**A:** Definitely I think the worst use cases are anything that pushes the current boundaries of React Native.

Right now that would be, IMO, things like games for sure or anything with a combination of

1.  A lot of animations
2.  Complexity

Also, anything that is not supported natively and does not have a high quality abstraction of course would be not a good fit for RN, i.e. AR, VR

Also, if you have a native iOS team and you only need to ship iOS, it may not make sens to use RN or vice versa with a native Android team

---

<a name="mean-lot-animations-im-new" href="#mean-lot-animations-im-new">#</a> **Q:** What do you mean by a lot of animations? I'm new so it's interesting to know what kind of animations limit React Native — † Van †

**A:** I'm referring really to either a game or something of the like.

---

<a name="find-best-approach-handling-deep" href="#find-best-approach-handling-deep">#</a> **Q:** What do you find to be the best approach to handling deep linking to nested navigation views where query strings are necessary for the view to render properly (displaying important content immediately instead of waiting for some network request)? — pat

**A:** First of all definitely choosing the right navigation library will get you a long way, and I've found that even with all of the quirks / bugs that React Navigation handles deep linking well for most of my use cases.

Regarding nested navigation views where query strings are necessary for the view to render properly (displaying important content immediately instead of waiting for some network request):

This should work similary to how a normal network request would work right, or am I missing something.

Ideally you would have something in your query that you could parse and use immediately (i.e. title / description or something like that ) then maybe show a loading indicator?

If I missed something on that question though dm me.

---

<a name="end-last-qahttpswwwreactifluxcomtranscriptscharliecheever-response-blackxored" href="#end-last-qahttpswwwreactifluxcomtranscriptscharliecheever-response-blackxored">#</a> **Q:** At the end of [the last Q&A](https://www.reactiflux.com/transcripts/charlie-cheever/), in response to @blackxored

> This has been an interesting year for "React as a platform" […] react-primitives, haul and also styling libraries supporting the concept but we're not quite there yet. […] what do you think needs to happen as a community to be able to truly develop universal apps regardless of platform?

> […] Someone needs to artfully implement a lot of polyfills. I think the approach Necolas outlines where you use React Native as the canonical starting point since its cleaner, and then use that to target web, is the right way to go.

> Was happy to see React Native for Web 0.1.0 already supporting React/ReactDOM 16.

What else are you following in this vein Nader? Any other recent news to look into?

— ricky

**A:** I'm really interested in this space as well! This is both one of the most exciting things in RN right now and also one of the most complex.

Right now as you mentioned there is a lot of awesome stuff going with both React Primitives and React Native Web, but also keep an eye on ReactXP. I feel like a lot of the stuff Microsoft has done lately has been extremely solid / well maintained but without they initial hype we see with other peoples' / companies open source. For instance, TypeScript and VSCode both slowly but competently have grown to become staples and almost dominate. If ReactXP continues to be maintained I think it can also possibly be the winner of this space, but there's definitely still no way to tell what will happen.

But I'm cautiously optimistic regarding all of this right now and here's why. In the real world projects I"m working on, these solutions rarely fit into many of the projects I'm seeing. Rarely does the web interface and the app store / native interface mimic one another more than just aesthetically (at least in my experience).

This ends up being a circumstance where projects are better off just sharing some componeents across platforms and something like React Primitives makes the most sense, but not sharing the actual codebase.

---

<a name="whats-best-way-handle-click" href="#whats-best-way-handle-click">#</a> **Q:** What's the best way to handle click on push notification when app is killed? I need to open specific scene when user clicks on a notification. — v.blokhin

**A:**.blokhin have you looked into deep linking? I think we've handled this situation before with deep linking, which basically listens for an event that would be passed down by the push notification.

Basically, it would open the app, parse the url / link / data or whatever passed by the push notification, then navigate or do whatever with the parsed data.

---

<a name="build-apps-used-fastlane-vblokhin" href="#build-apps-used-fastlane-vblokhin">#</a> **Q:** How do you build your apps? Have you used fastlane? — v.blokhin

**A:**.blokhin Yeah lately I've been working with companies that have been using fastlane for deployment to TestFlight, but as far as general building, it really depends if I'm working alone or on a team.

Most of the time on a team we usually have a devops person who handles deployment, and it's not unusual to have a single person working full time on deployment / devops handling stuff like FastLane.

A general idea of what I recommend though is to have fastlane integrated as early as possible to ship to TestFlight, then iterate on a version1 until it's ready to ship, then after v1 is shipeed use CodePush to update builds until a native change is needed, then push new version and rinse and repeat.

CodePush has become a huge part of my process and saves a lot of time and headache.
<a name="dont-native-listview-rn-found" href="#dont-native-listview-rn-found">#</a> **Q:**why don’t we have native ListView in RN? I found FlatList still not good enough for a large and complex list like Facebook or Instagram feed — bduyng

**A:** This is a really important question and one of the two main things I'm seeing as problemns for some of the enterprise customers I work with, the other being a stable / preferred Navigation solution.

Many people I talk to seem to have better luck with FlatList than I, but when I get into something that is complex, simply switching back over to ListView seems to fix 90% of the problems, (Unfortunately the ListView may be deprecated though I think it is a little too early to do so)

Regarding "why don't we have native ListView", I don't know the answer, but if you run into perf issues I suggest checking back into ListView until there is a solution to this issue.

---

<a name="opinion-use-react-web-reactnative" href="#opinion-use-react-web-reactnative">#</a> **Q:** What is your opinion on having to use React for web and react-native for mobile? Why not unite the 2 into one ? Essentially doing something something like Cordova or React-native-web are doing? — Rayd

**A:** not too long ago @brentvatne and Adam Perry were on Software Engineering daily talking about the future of React Native, and they had some interesting insight into this.

The discussion seemed to veer towards what you are talking about, that right now we have "React Native", "React Web", "React Native Web", then we have React VR and React Native for AppleTV and so on and so forth, but in the future (possibly using paradigms / ideas like React Primitives) we can move to just React and then plug into other platforms.

I think that right now though the two projects are so distinct that it may not make sense to combine the two until React Primitives or something similar is robust and bug free enough to be seamless between both platforms. For instance, there is no TextInput right now in React Primitives, and other similar examples make it necessary to have the two separate for now (IMO).

https://softwareengineeringdaily.com/2017/04/11/the-future-of-react-native-with-brent-vatne-and-adam-perry/

This is the link to the podcast episode I mentioned :point_up_2:

---

<a name="advantage-react-16-react-native" href="#advantage-react-16-react-native">#</a> **Q:** What is advantage of React 16 in React Native? — bduyng

**A:** The advantage I guess would be the same as using React16 on the web, those advantages being things like error boundaries, array rendering without wrapping, rendering text only components, and there are probably a few more (maybe setState can be called with null now)?

Regarding ListView, I agree using something deprecated is not ideal but when ListView solves the problem right away, we can then spend our time doing other things than trying to get FlatList to work properly.

---

<a name="thanks-nader-enjoyed-rn-eu" href="#thanks-nader-enjoyed-rn-eu">#</a> **Q:** Thanks Nader, enjoyed your [RN EU talk](https://www.youtube.com/watch?v=pFtvv0rJgPw), people who have not yet seen it should — ricky

Is Skype only ReactXP example in the wild? support.md on GH says “ReactXP was initially developed by the Skype team at Microsoft. It has since been adopted by other teams at Microsoft.” Have they said anything more about other teams or usage outside Microsoft or have you heard of anyone else adopting?

**A:** Thanks for sharing the video :) I do not know of any other examples of projects currently using ReactXP other than Microsoft. I think there is still churn in their API right now so I'm not sure I would use it in production without investigating a little more imo, but I think that it will absolutely be viable in the future. The fact that it is an abstraction on top of an abstraction would be the only thing that I would possibly worry about, but I think that as far as targeting also Windows + Web it offers a very appealing API and the team that is working on it is A+

I will look into it though as I think I am super interested in the answer as well to the question "Who is shipping ReactXP"

---

<a name="thoughts-making-decision-comes-new" href="#thoughts-making-decision-comes-new">#</a> **Q:** What are your thoughts on making a decision when it comes to a new cross-platform project? Seems there are good options, React Native, NativscriptJS, Xamarin, etc. part of the decision would be based on current dev skills, but beyond that, how do you go about making that kind of decision? — DrCJones

**A:** This is a great question and something I could talk about ( and have ) for hours, also it's basiclly what I'm most passionate about and love discussing!

I think there are a few things to take into consideration:

1. The language being used and the size of that community

2. The team working on it and how the stability / future of that team appears to be

3. The quality of the product / framework

4. If there is a current framework underlying (i.e. React, Angular) the future of that framework

5. Current adoption and growth trends

Right now, I think there is a no brainer answer to this question (based on real world experiences and data) and that is React Native.

It is no secret that Amazon, Microsoft, Facebook, Airbnb, + many others are actually betting on React Native so that says alot.

That being said, things happen fast and change is inevitable, so I'm always keeping an eye out for the next big thing / or something that can fill in the gaps that React Native currently has.

Right now, the thing I am pretty bullish on is Flutter. It answers the questions for the clients that have the most gripes about React Native:

1. Navigation library maintained by core

2. UI LIbraries maintained by core

3. Performant lists (So far I have seen good perf)

4. Cross Platform (iOS and Android)

5. Maintained by Google / good documentation.

Bottom line though it's kind of a combination of

1. What can make you money

2. Is if fun to work with

3. Will it make you money in the future

Definitley RN is on top right now almost without question.
