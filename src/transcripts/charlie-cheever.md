---
title: Charlie Cheever
date: 2017-09-14
time: 1-2pm PT / 8-9PM GMT
location: Q&A Channel Reactiflux
description: "Founder @ [Expo.io](https://expo.io) | Co-Founder Quora.com | More About [Charlie](https://betweenthewires.org/2017/05/31/charlie-cheever/)"
people: "[@ccheever](https://twitter.com/ccheever)"
---

## Founder of Expo, Cofounder of Quora

<a name="wanted-know-theres-recommended-way" href="#wanted-know-theres-recommended-way">#</a> **Q:** Just wanted to know if there's a recommended way on how to share most code between react web and native or if this is even possible / good idea. And what do you think about this library? https://github.com/necolas/react-native-web - datoml

**A:** Re: react-native-web. We have actually thought a lot about this and even talked with necolas about it a little bit. What @brentvatne has been championing as a direction for Expo -- which I agree with -- is that we should have a third target, so it will be iOS and Android and also web, probably based on react-native-web

---

<a name="hello-welcome-thanks-questions-expoio" href="#hello-welcome-thanks-questions-expoio">#</a> **Q:** Hello , welcome and thanks. My questions is about Expo.io. What is your main motivation to found Expo.io and why we use it? - tahaemin

**A:** We don't quite have the bandwidth to tackle this just yet -- we still need to improve Expo on iOS and Android, but I hope we can there soon. Web prob won't be as good as the iOS and Android targets, at least not until some big progress is made by browser vendors. But lots of developers need to make a mobile site too, and react-native-web is an excellent way to do that, so using your native mobile app as a place to start, where you get a mostly functional web app for free is exciting and sounds awesome to me. Hope to get a chance to work on this soon but no ETA or concrete plans yet!

re: motivation for working on Expo. After I left my last job, I had a bunch of ideas about what I wanted to work on, and they all basically involved building mobile apps. One example of an app I wanted to play around with was, in my head, called "Chuber".

![Chuber mockup](https://cdn.discordapp.com/attachments/193117606629081089/357980567674814465/unknown.png)

The idea is that its an app like Uber, except free, only my friends are allowed to use it, and I'm the only driver on it. So if I had free time and my car, it would be a good win-win way to catch up with people, instead of scheduling drinks or coffee, etc., I could give someone a ride to the airport. But its also a silly idea.

And so I would love to be able to spend a weekend building it and try it out and see if its a silly idea thats fun and cool, or at least learn if its just silly. But when I sat down to build it, I realized that making it work on iOS and Android would probably take me months using Obj-C/Swift and Java, and it just wasn't worth it.

So then I started researching, along with James Ide, how we could make it so we could make apps like Chuber in a weekend. We want to make it easier to make mobile apps than it is to make a website

---

<a name="hi-thanks-question-doesnt-react" href="#hi-thanks-question-doesnt-react">#</a> **Q:** Hi. Thanks for being here. My question is, why doesn't react native community accept one navigation solution? Now there are many many components (some are native, some are JS). What is your suggestion? - fahimian

**A:** That's a great question. I think that this process of things shaking out is a natural one. Navigation within apps is one of those things that seems simple but actually has lots of different ways you can appraoch it that have a lot of depth and complexity to them. I think basically the approaches have narrowed a little bit to native navigation (though maybe there are multiple native navigation solutions, I haven't been following it as closely) and react-navigation. React-navigation is still a work in progress but its getting better and most of the people who do navigation in JS are getting behind it. Skevy and Dave from the Expo team have been working, along with other contributors, to make it better, including work to make it feel as close to native as possible for those who want that (getting the animation curves right, and the masking right, etc. To match iOS, etc. Etc.) I think that that getting better over time is probably where things shake out?

There are also other things I know less about like react router that cut at the same problem, and they also seem to work pretty well at what they do. One reason that there are a lot of solutions out there is that many of them are actually pretty decent, at least for some set of use cases. That's sort of a general problem on the Internet in the age of npm and Github, but I think it mostly nets out well

---

<a name="easiest-way-get-sort-logging" href="#easiest-way-get-sort-logging">#</a> **Q:** What is the easiest way to get some sort of logging frmo within react-native in a release build? I am having an error show up in debug mode but not release mode. - kylan

**A:** I don't have a good answer for that off the top of my head. I think using [Sentry](https://sentry.io/) is your best bet. We use that for getting stacktraces around errors etc and I think they also do logging.

---

<a name="lines-question-react-native-web" href="#lines-question-react-native-web">#</a> **Q:** On the lines of the question of react native web, what needs to happen (technology wise) for it to be possible write the same (or close to) code for building react and react-native apps? What do you think about the [reactxp](https://github.com/microsoft/reactxp) project in this regards? More broadly, what would be the right abstraction to get there? - siddharth

**A:** Your question makes me think of something FB said at the keynote when React Native was announced. "Learn once, write anywhere". That's how I see app building in general going -- where you learn the React paradigm and then can write it on web or in Electron using kinda web or in react-native, etc.

But the tension here is that you don't want to abstract too much for targets that have meaningful differences. For example, mobile Safari and Chrome mobile let you sort of "write once, run anywhere" with desktop websites. They do work, but there are tons of ways that using a website made for desktop web browsers is janky and unpleasant when on a mobile device. I think that you should write once, run anwywhere for iOS and Android because they are both just black rectangles with touch screens and you don't want different apps, but you probably will want to be able to write platform specific code when one adds new peripherals or things like ARKit before the other. And if you are dealing with desktop vs mobile, you'll probably want some meaningful differences as well. That said, some people have made pretty good responsive websites that work decently well -- and change themselves around -- in desktop vs mobile places, so maybe we'll see that.

I also think there's an interesting possibility of react-native targeting desktop more and platforms broadly, like @necolas talked about it in his [recent talk](https://www.youtube.com/watch?v=tFFn39lLO-U). Some people have already made stuff for Mac and Apple TV.

---

<a name="hi-far-see-expo-already" href="#hi-far-see-expo-already">#</a> **Q:** Hi, as far as I see, Expo already became a "more convenient and easy" way to build RN apps, is there any plans or thoughts to implement some kind of visual UI building tool ontop of Expo? This will allow let's say non-technical designers to make a sketch for Expo app, and then you can continue working on it as a developer. - Nofate

**A:** Re: building a visual UI building tool on top of Expo to make building apps easier. Yes! We have been talking about that. It's yet another thing that I reaaaallly want to do, but we need to make Expo a little more solid and feature complete before we start building stuff on top of it. I really liked Hypercard when I was a kid and there's really good things about how you can visually create a UI and then add in programming as necessary.

---

<a name="think-wasm-think-see-shift" href="#think-wasm-think-see-shift">#</a> **Q:** What do you think about wasm? Do you think we will see a shift to single programming languages that we will be able to compile for both backend and frontnend (perhaps rust and go)? And what does this mean for expo and its future? - mrcl

**A:** I'm excited about wasm. My hope is that it makes running interpreted languages much faster, and opens up platforms like RN and web so that people can write other languages besides just JS and get really great performance. There are a lot of people who'd love to write Python and be able to make React Native apps that way. I don't know whether people will end up writing the same language on the server and the client in a post-wasm world. They are already moving that way to some extent with JS and the rising popularity of Node. If that happens, will developers coalesce around one thing? Maybe, could be JS or Python or Rust or Go or Reason or Elm. I don't know for sure yet and don't have a fully formed view on this.

---

<a name="hi-im-idea-behind-navigation" href="#hi-im-idea-behind-navigation">#</a> **Q:** Hi. I'm have an idea behind navigation. I hope you saw react-native-interactable, and how they use native side. What if we don't try to use native navigation systems like ViewController, and instead create some primitives with UIView on native side like in interactable, and create navigation solution on it? - savelichalex

**A:** I haven't seen react-native-interactable yet. I'll Google it after this session and look into it.

---

<a name="plans-integrate-multiple-environments-expo" href="#plans-integrate-multiple-environments-expo">#</a> **Q:** Are there any plans to integrate multiple environments into Expo? At the moment, everytime I run exp build my app gets published in the background and is instantly rolled out to all users. To prevent this, I have set up a quick workaround with a simple bash script that handles dev / staging / production environments for me while actually managing 3 different expo projects (it changes the slug from production to dev or staging). But this feels a bit hacky :wink: - sadyashica

**A:** Yes. I'm sorry that you have to go to all that trouble. Why do you need to run exp build so often? We are just starting work on supporting different release channels now. This is an issue that affects lots of people, not just you, so we're thinking about it and trying to give everyone a good solution.

Feel free to leave comments on Canny or post in our forums describing what your needs are and any thoughts you have about possible solutions. That will help us build the right thing.

---

<a name="currently-working-framework-would-enable" href="#currently-working-framework-would-enable">#</a> **Q:** We are currently working on a framework that would enable a real-time connection between your database and your front-end, based on a sort of pub-sub manner where you define what publications reactively publish what data to your client. This currently is a React HOC (works both in React & React Native). Do you think this is something the React Community would find useful, or are there existing project that we can learn from? - Neglexis

**A:** Sounds really cool. I was at PennApps -- a big college Hackathon -- last weekend. And lots of students were building things that would have been able to use something like that. I do think that there are many people building different solutions to this, so its hard to say whether people will flock en masse to yours without seeing it live.
Neglexis: Yeah of course. Currently only works with OrientDB though, but the bridge to other DB's should be easy. We're also looking to open-sourcing it, but it'll be our first open-source projects, so any tips on a first open-source project would be awesome!

---

<a name="many-people-currently-employed-expo" href="#many-people-currently-employed-expo">#</a> **Q:** How many people are currently employed at Expo? - sadyashica

**A:** 15 now! have added a bunch, trying to build out all the features people are asking for. We'll probably mostly stay close to this size for a while and go heads down until we can nail everything that our users are telling us they need.

---

<a name="could-give-estimate-breakdown-degreesvsnondegrees" href="#could-give-estimate-breakdown-degreesvsnondegrees">#</a> **Q:** Could you give an estimate of the breakdown of degrees-vs-non-degrees w/r/t employees at your workplace? - connor

**A:** I think everyone has a college degree except for Perry who has a high school degree. A couple of people might have masters degrees but I'm not sure. It's not very important to me whether people have degrees or not, as long as they know their stuff. But I also think schools are great places in that they are places where people who want to learn congregate.

---

<a name="curiosity-expos-business-model-seems" href="#curiosity-expos-business-model-seems">#</a> **Q:** Out of curiosity, what is Expo's business model? It seems too good to be true :sweat_smile: - ben.makuh

**A:** We think if we can help developers make money, there will be ways for us to make money along side them. Sort of the way that youtube and twitch do with video creators and streamers. So for now, we're just trying to get expo good enough that almost everyone uses it to build their mobile apps. I don't think that, in general, people will pay for developer tools (though they do often pay for developer services), and we thought it was really important to make expo open source so that people could have confidence in using it.

---

<a name="tomorrow-junior-joined-expo-dev" href="#tomorrow-junior-joined-expo-dev">#</a> **Q:**. If tomorrow a Junior joined your Expo dev team and his first task was to build a simple requested feature. What is the first thing you would explain to him? Assuming he has knowledge of JS, C and Java. - FlamingToast

**A:** Our north star at Expo is that we serve people who want to make awesome stuff, and our job is to help them do that. Everything else flows from there. That's our #1 value and the first thing I would tell anyone. Though I would probably have lots more to say after that too.

---

<a name="could-give-us-breakdown-ages" href="#could-give-us-breakdown-ages">#</a> **Q:** Could you give us a breakdown on the ages of the people working at Expo? - CharlesKenney23

**A:** We are happy to have people of any age on the team as long as they are great contributors and I don't know off the top of my head how old everyone is actually. But I think I'm the oldest; I'm 36. I think the youngest person is 23 and we had an intern who was 19 but he went back to school. There are a bunch of people who are ~27.

---

<a name="react-16-aka-fiber-break" href="#react-16-aka-fiber-break">#</a> **Q:** Will React 16 (aka fiber) break different libraries used in Expo? Do you know how much the performance will be improved? - gusgard

**A:** I don't expect Fiber to break much because I know the team working on it has been very methodical in testing all kinds of cases with it. Http://isfiberreadyyet.com/ I think the performance of certain things will improve a lot, but for lots of other things, you won't notice at all because the things that Fiber improves aren't the bottleneck in many cases. For example, going back and forth over the async bridge is somewhat expensive/slow/unpredictable and Fiber won't fix that. I'm thankful and excited that a big talented team at Facebook puts so much into making React and React Native better and better in ways that would be hard for the OSS community or Expo to tackle alone.

---

<a name="walk-new-dev-one-simplier" href="#walk-new-dev-one-simplier">#</a> **Q:** If you had to walk your new dev through one of the simplier features that is already implemented in Expo, which feature would you choose? In which folder of the repo would the core JS of this feature be located? - FlamingToast

**A:** When I wanted to ramp up on this, I had someone walk me through adding a screen brightness API because it was pretty small and straightforward and could mostly just follow along from the code in an open source module on Github.

Detaching is basically giving you a personal build so that you can write your own native code while still continuing to use RN JS and the Expo SDK/API.

It is true that there is a lot going on in the Expo client code. It's not super easy for people outside the team to make contributions to it. We'd like to make that easier but some of the complexity is just inherent and we're also focused on just adding the things in that people want, ahead of making it easier for outside people to contribute (since its inherently just pretty hard no matter how easy we make it). Detaching and then adding in features to your detached app and then contacting us through our forums about upstreaming the features is probably the smoothest path to contribution right now;

---

<a name="plans-add-video-streaming-expo" href="#plans-add-video-streaming-expo">#</a> **Q:** Is there any plans to add video streaming in Expo? I saw in new release Camera component, but we need a way to capture video and send it to another user onlne, like video-chat. Is it possible or will be possible in Expo? - Checkmatez

**A:** Yes! multimedia in general, and esp. Video is a big focus for us. We're rolling out more video and audio stuff over the next few months. We just rolled out the new camera stuff and are excited about the additional stuff we have planned.

---

<a name="im-coding-newbie-would-like" href="#im-coding-newbie-would-like">#</a> **Q:** I'm a coding newbie and would like to know if I should start with React Native or React? I'm just interested in making some dumb apps for me and my friends to use. Like an app that keeps track of things in a game of Catan and let's us trade resources with each other. I don't know if it's easier to learn to make this as a web app and then port it to an app or the other way around. Thank you for your time. - AustinPowers

**A:** My own view aligns a lot with Nicolas Gallagher's in the talk that he gave at React Rally that I linked to above. I think React Native embodies the cleanest implementation of React and is free from the cruft of the web being around for 20 years that you get when you use React-DOM. The way I build web stuff now is that I code it very much like I would code React Native -- using JS obejcts for style, using flexbox, etc. I think if you learn React DOM or React Native, you'll find its quite easy to learn the other. I would either start with React Native and Expo -- and then you could use react-native-web to make a website if you wanted one. Or start with NextJS from Zeit if you wanted to just make a website. It's nifty. The most important thing about learning is just doing stuff though! If you make a couple projects you'll be good at both in no time.

---

<a name="plans-fs-module-seems-moment" href="#plans-fs-module-seems-moment">#</a> **Q:** Are there any plans for the FS module? It seems at the moment it can only work with text. - K

**A:** Yep. The FileSystem module is something we'll keep working on. We just released our first version of it, but will continue to improve it.

---

<a name="might-quite-specific-topic-anyone" href="#might-quite-specific-topic-anyone">#</a> **Q:** might be quite specific topic, but did anyone requested DRM (e.g. Widevine) support for Expo Video players? Exoplayer supports it, and I think some kind of plugin for iOS video also exists. - Asgvard

**A:** I'm not aware of any specific requests for it but I'd have to check on Canny and in our forums to be sure. We're not against supporting it, but probaly would only prioritize it in response to users asking for it. If you need it and we don't support it, ejecting/detaching is probably the right way to go for now.

---

<a name="interesting-year-react-platform-talks" href="#interesting-year-react-platform-talks">#</a> **Q:** This has been an interesting year for "React as a platform" with talks by leland and mike and react-primitives, haul and also styling libraries supporting the concept but we're not quite there yet. A super broad question, but what do you think needs to happen as a community to be able to truly develop universal apps regardless of platform? - blackxored

**A:** I think someone needs to make a project that basically combines create-react-app and create-react-native-app. If you see my answer above, we'd like to do this soon, but maybe someone else will do it first. All the pieces are there; someone needs to just put them together to make it easy. There is also a bunch of hard detail work that needs to be done to make it work well. For example, when we look at Expo apps, tons of people use features like native maps and video players and camera views, etc. How do those look in a web context? Some can just work if they are polyfilled, some will degrade, some will have to be left out. Someone needs to artfully implement a lot of polyfills. I think the approach Necolas outlines where you use React Native as the canonical starting point since its cleaner, and then use that to target web, is the right way to go.
