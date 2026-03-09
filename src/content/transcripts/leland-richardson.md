---
title: Leland Richardson
date: 2017-06-15
time: 1-2pm PT / 8-9PM GMT
location: Q&A Channel Reactiflux
description: "Engineer at Airbnb heavily involved in React Native (Enzyme, React-Native Maps, Lottie, Animated etc.)"
people: "[@intelligibabble](https://twitter.com/intelligibabble)"
---

## Engineer at Airbnb · React Native Maps · Enzyme · Lottie · Animated

<a name="excited-react-native" href="#excited-react-native">#</a> **Q:** What are you (and should we be) most excited about in React Native?

**A:** That's a good question. RN has a lot of value in different ways. CodePush, sharing code across platform, fast iteration cycles etc. I'm really excited about the value that it's already bringing even without those things. Long term I'm pretty interested in sharing code across platforms (see my [react europe talk](https://www.youtube.com/watch?v=tWitQoPgs8w) for more on this) and how that could really change front-end development.

---

<a name="begin-development" href="#begin-development">#</a> **Q:** Where do you begin development from?

**A:** I began writing code in middle school / high school. I got into it mainly because of gaming, but my 2nd job was also at a machine shop, and I was able to use it back then too and started writing different line-of-business apps for them as well, which was the first time I was able to make money programming. I viewed it mostly as a useful hobby until around college. I didn't get into web development until after college though.

---

<a name="would-like-know-acceptance-level" href="#would-like-know-acceptance-level">#</a> **Q:** I would like to know about the acceptance level of react-native at airbnb among native developers and how the react-native is codebase growing in airbnb app :)

**A:** I would kind of categorize acceptance at airbnb as "lukewarm". I think this is sometimes for very valid reasons, and other times less valid "FUD" type reasons. Some native engineers are super excited about it, and others not at all. Overall I think we still have a lot of work ahead of us to prove that RN can make high quality experiences, but I'm pretty confident that we will get there.

---

<a name="someone-go-similar-rn-evaluation" href="#someone-go-similar-rn-evaluation">#</a> **Q:** For someone that has to go through a similar RN evaluation process that you went through, in a company with strong native teams with different repos. Which would be the best advice that you could give?

**A:** My advice would be to empathize. Most native engineers just want what is best for the company, and have valid concerns about what RN could mean for app quality and even dev experience quality (lack of types, etc.). Do your best to understand their concerns and show them the value of RN in light of those concerns. Also make sure people are operating on facts and not feelings. Educate. Measure. I think I've done a decent job of this at Airbnb, but could always be doing better.

---

<a name="know-status-nativenavigation-integration-reactnavigation" href="#know-status-nativenavigation-integration-reactnavigation">#</a> **Q:** Do you know what the status is of the native-navigation integration with react-navigation?

**A:** For integration with react-navigation specifically, I don't have too much context. I know that Eric Vicenti was working on this but ran into a couple of issues with tabs IIRC. I'm sure he'd be happy to tell you more if you asked him. I'm also happy to do what I can to make it easier if there are reasonable API changes to make.

---

<a name="best-way-test-unitarily-use" href="#best-way-test-unitarily-use">#</a> **Q:** For you, what is the best way to test unitarily. Use jest + enzyme or use jest alone?

**A:** I would say use both. I love jest - it's CLI is way better than any other test runner out there. Enzyme makes testing react components IMO a lot easier and more isolated, but is not without its quirks. I'm working on an enzyme rewrite which will have a new top level API that I believe will solve a lot of the areas that enzyme doesn't do a great job at currently.

---

<a name="react-web-developer-starting-look" href="#react-web-developer-starting-look">#</a> **Q:** I am a react web developer who is starting to look into RN, so excuse my inexperience -- what is the best way to reuse my components between web and RN? Do you think a solution like react-web-native (https://github.com/necolas/react-native-web) is viable or do you anticipate we will always develop separate versions for web and mobile?

**A:** If you haven't seen my [react europe talk](https://www.youtube.com/watch?v=tWitQoPgs8w) you should check it out - it's on this topic. I think RNW is a great implementation. I think sharing code across platforms is possible right now but the ecosystem is still super young, so you will be swimming against the current for a while if you go this route. But that doesn't mean it's not worth it! I'm very interested in working on these types of problems but haven't been able to do anything production-scale just yet. Hopefully soon. I think concepts that RN has pioneered, namely platform file extensions, need to be popularized and standardized for this to really take off.

---

<a name="think-lukewarm-response-might-neccessary" href="#think-lukewarm-response-might-neccessary">#</a> **Q:** Do you think the lukewarm response might be because of some very neccessary modules missing from the core RN library like camera, file systems and other system access APIs ?

**A:** Not really. In fact, I wish that RN core had many fewer native modules like this. We will never build them all - so the important part is to make making things like native modules as easy as possible. I think the "lukewarm" reception is mostly about performance/quality/stability and organizational realities such as people working with technologies that they're not used to, and increasing the amount of context switching that is necessary.

---

<a name="airbnb-use-lot-important-styles" href="#airbnb-use-lot-important-styles">#</a> **Q:** Why does Airbnb use a lot of !important in their styles?

**A:** Good question. The use of !important is from our usage of aphrodite (a css-in-js library) which we are using in a mode that deopts into !important CSS flags due to our need to be able to use it on a page that also has legacy CSS files that aphrodite doesn't know about, and minimizes the conflicts between the two. Hopefully soon we will be able to remove the CSS files so that we can turn off this mode.

---

<a name="besides-legacy-css-aphrodite-used" href="#besides-legacy-css-aphrodite-used">#</a> **Q:** Besides the legacy CSS, is Aphrodite used across the organization or do you use other CSS-in-JS too?

**A:** On web we only use aphrodite for a css-in-js solution, and we are encouraging people to write all new code using it. As we experiment with react primitives / RNW, we may re-evaluate usage, but that would be a long ways off.

---

<a name="make-react-native-better-mobile" href="#make-react-native-better-mobile">#</a> **Q:** What make React Native better than other mobile app development platforms? what is your advice for a new developer for learning React Native, what can I focus on? any reasouces that you can share with us. Thanks

**A:** One of the big things that I think makes RN compelling is just "react" itself. I find it to be a very nice way to build and maintain complex UIs. Other benefits of course include things like a fast iteration cycle through things like HMR and live reload, and the ability to write cross platform apps (ios + android at least).

For resources, I am not sure I will be able to spit out a great list in this Q&A, but I think there's a lot out there. For getting used to the platform, check out reactnativeexpress.com and probably some videos on egghead and stuff. For more advanced stuff, I would recommend checking out some conference talks from some of the big contributors, as well as reading through and understanding the source code and familiarizing yourself with the architecture.

---

<a name="rn-graphql-apollo-without-redux" href="#rn-graphql-apollo-without-redux">#</a> **Q:** RN + graphql (apollo) with or without redux?

**A:** I don't think there's any one-size-fits-all recommendation here. Use what you feel comfortable with. I'm hoping that in the medium to long term all of our "remote" state management is done entirely through apollo. Long term I'm interested in building APIs (maybe on top of redux, maybe not) that are built for local state management with a graphql-based interface, so that all state management is thought of in terms of graphql queries & mutations. I haven't gotten very far with that though, so it's still conceptual at this point.

---

<a name="sure-youre-right-person-ask" href="#sure-youre-right-person-ask">#</a> **Q:** Not sure if you're the right person to ask - how do you feel about react-navigation? Its pace of development is like 1 commit per week, which isn't exactly what I was hoping for. How do you handle navigation in Airbnb?

**A:** I personally haven't used react-navigation for any projects, so don't know how much I can say here. But the maintainers of it are great people and if it's not doing something that you want it to be able to do, I would encourage you to engage and maybe try to help contribute. Help elevate the community. Navigation is still a nightmare for react native -- we need all the help we can get :)

---

<a name="whats-best-way-handle-global" href="#whats-best-way-handle-global">#</a> **Q:** What's the best way to handle global spinners? For example many events can trigger spinner to load, but when it needs to be stopped ? Should I create something like global reducer or middleware can help ?

**A:** I'm not sure I have enough context to answer this question. without knowing more, I would say that a "global" spinner perhaps shouldn't exist, and "loading states" should be thought of more locally. In mobile apps you want to have as much of the screen "loaded" as possible to improve perceived performance at any given time. Having global loading states can prematurely deopt a screen to being useless, when there might be a decent amount of information you could present the user (if even just a "shell" UI) ahead of time. Most of the time I think of these states being a pure function of the information that's available, and so not held in redux at all... feel free to ping me if that's not helpful advice :)

---

<a name="use-plain-js-flow-plans" href="#use-plain-js-flow-plans">#</a> **Q:** Do you use plain JS or Flow? Any plans on looking into Reason or any other compile-to-js lenguajes?

**A:** We currently use plain JS for almost all JS development at airbnb. We have done some investigation of flow very recently for our RN code base, but have since decided that we will probably hold off for a while and reevaluate down the line. Flow and typescript are very compelling to me, but I think in order to introduce them into a code base you have to be very careful to not cause more friction than its worth. When we evaluated flow, we would run into a lot of errors that were really obscure and hard to understand, and didn't want to put the average contributor in that position. Your mileage may vary, and I know lots of people are having great experiences with both flow and typescript. That was just our experience.

---

<a name="eslint-amazing-tool-work-airbnb" href="#eslint-amazing-tool-work-airbnb">#</a> **Q:** ESLint is an amazing tool. The work Airbnb has done at standarding rule configuration is also amazing. Can you touch on the following:

a) I often find myself curious as to why Airbnb has a specific rule. There is mild documentation in the readme/docs; however, it's usually very "This is good ... this is bad". Any thoughts on adding more expanding rational for why certain defaults were chosen.
b) Thoughts on Prettier?

**A:** For a), I'm not the best person to ask. Jordan Harband is usually pretty responsive about this kind of stuff, and if something isn't well explained in the docs, we should add it. It's important to understand also that sometimes decisions are arbitrary, and the point is to have consistency, not that one is better than the other.

For b), I love prettier, although I haven't been able to convince the rest of Airbnb to adopt it. Perhaps some day. I long for the day of not having to think about code style.

---

<a name="airbnb-going-deco-ide-going" href="#airbnb-going-deco-ide-going">#</a> **Q:** What is Airbnb going to do with Deco IDE, is it going to be the de facto IDE for RN like other Airbnb offerings (RN maps, native navigation)

**A:** We don't currently have any plans to do anything with the Deco IDE. The deco team here is working on really interesting stuff to improve our design and engineering processes. Some of that might be open source at some point (like react-sketch) but too early to tell.

---

<a name="maintain-high-ui-standards-react" href="#maintain-high-ui-standards-react">#</a> **Q:** How do you maintain high UI standards in react native? For example, it is very easy to implement a simple photo viewer app, but things like shared element transition makes mobile experience much better. It feels that the RN UI is moving towards web-based standards, and less attention is spent on mobile UI specifics.

**A:** Great question. This is the kind of stuff that keeps me up at night TBH. I think a lot of times RN is used by web developers for hacky prototypy sort of things, which I think builds a negative selection bias against the kind of experiences that RN can produce. I really wish more of the examples out there paid a bit more attention to aesthetics to limit this perception. At Airbnb, it's a lot of work to make sure everything meets a minimum quality bar. There are also places where I don't think we are doing as well as we could be doing. Ultimately, it's just a lot of work, but having a comprehensive design system makes it a lot easier, and I think is a huge part of why we've been able to do as well as we have.

---

<a name="partparts-rn-focused-core-rn" href="#partparts-rn-focused-core-rn">#</a> **Q:** Which part/parts of the RN is being focused most by the core RN team to improve or seen as a challenge to take RN to next level?

**A:** Hmm. Let's see. I know that FB is very very focused on improving RN initialization times, which I think is pretty crucial (and important in many ways for web as well). In addition, two fundamental problems I think RN has is 1) view recycling and 2) gesture recognition systems. I think both areas fall short compared to both iOS and Android, and for some apps can be super important. In addition to that, I know that FB is going to be working on making RN core more modular and have a smaller footprint (by breaking non core things out of it) which I also think is very important long term for RN, as it will make core more stable and easier to maintain.

---

<a name="earlier-said-rn-navigation-mess" href="#earlier-said-rn-navigation-mess">#</a> **Q:** You earlier said that RN navigation is a mess. I think native-navigation is very promising start to solve this mess, but not lately pushed forward. What's the future of native-navigation? And if it needs much help from community, what would be the concrete next implementation items we should start doing?

**A:** I do think that long term native-navigation has the potential to become "the" navigation option. (I'm biased, obviously). I've done a really poor job pushing it forward, which is probably an indication that we released it prematurely. In hindsight, getting the OSS version integrated into the airbnb app first would have been better, but it was a tough call. We have plans to work on this in the 2nd half of this year, which I'm really excited about. Ultimately, I have to prioritize the time that we work on RN infra to maximize impact for RN, and there have been a hand full of "fires" so to speak lately, that put integrating native navigation into the airbnb app lower on the list. I'm working on a better list of next steps for NN so that the community can help out. I really appreciate how patient everyone has been on this topic so far :)

---

<a name="lifestyle-question-like-programming-lot" href="#lifestyle-question-like-programming-lot">#</a> **Q:** Just a lifestyle question. I like programming a lot, I like being a part of these communities but I don't like to work for more than 8 hours. I don't like to make it homework. After work... I wanna workout, I wanna learn how other things and I wanna go and drive Mustangs... But man, ever since I got a job, I haven't been as active in the programming community as much and not as yearning to learn new tools. Have you felt this way before? Or am I just a lazy fart and need to grind more?

**A:** I think to each their own. enjoy life - you only get one of them as far as I can tell. Don't work more than you want to and keep yourself grounded. A lot of the work I do because I enjoy it. Many say I'm a workaholic (which I am I guess), but I would do a lot of the things I do w.r.t. the open source / programming even if I wasn't paid to do them because I enjoy doing it. If you don't, don't do it!

---

<a name="one-elevate-oneself-software-sage" href="#one-elevate-oneself-software-sage">#</a> **Q:** How does one elevate oneself from a software sage to a React Native legend?

**A:** lol. I don't really want to touch this question. I think we have a tendency to put people "on a pedestal" so to speak. One of the things I've noticed professionally is just that the people that do these amazing things are just normal people, and often it's just because they were fearless enough to try. Next time there is a problem that seems really hard or ridiculous, consider just saying "but yeah, why not try?". I think few things in this world are complex up close, but only seem so from afar.

---

<a name="toolstechlibs-etc-etc-use-complement" href="#toolstechlibs-etc-etc-use-complement">#</a> **Q:** Which tools/tech/libs etc etc do you use to complement RN development at Airbnb, that makes the experience smooth.

**A:** I don't think there is a ton of custom stuff that we use that I can think of. I mean there's a number of native modules and stuff that helps us integrate into the app infra we already had set up, but in addition to that, there's not that much. I've built a couple of things based on static analysis that provide some really helpful infra for us (for instance we use static analysis for deep links, some prefetching / performance optimizations, and some bundle optimizations), and in general I think static analysis is a powerful tool. We are also building some custom stuff that will work on top of graphql. I've built some "devtool" type scripts that do some view hierarchy analysis and try to make some perf related recommendations / warnings to engineers. If you have more specific questions about the stack I might be able to answer better :)

Also, we just spent some time refining import-js (a library for editor plugins) that I think is really exciting and improves some DX.

---

<a name="message-solution-use-pusher-something" href="#message-solution-use-pusher-something">#</a> **Q:** What message solution do you use? Pusher or something?

**A:** We have an internally built messaging framework that has gone under a lot of different changes and ownership. There is now a separate dedicated messaging team at airbnb, so I think we will start to see some big improvements there on the airbnb platform.

---

<a name="could-suggest-message-solution-use" href="#could-suggest-message-solution-use">#</a> **Q:** Could you suggest any message solution to use?

**A:** I don't know how much insight I have here. I know that Layer is a very popular choice for iOS. For RN, check out "gifted chat". Not sure if it's production ready or not, but might be a good starting point. I started a JS-based messaging framework here internally that I'm not super involved with anymore, but some day we might open source that. I dunno, sorry! :)

---

<a name="viable-think-react-native-future" href="#viable-think-react-native-future">#</a> **Q:** How viable do you think react native will be in the future, do you think it's just a little hype thing that will die in a few years, as apps get more complex will it stand the test of time?

**A:** I think RN will only continue to get more viable, not less. But that doesn't mean that something new won't come that matches or beats all of the value props of RN, rendering it obsolete. Only time will tell. I think RN will be popular in ~2 years, but ~5 years out I think it could be anything.

---

<a name="views-reactvr-would-sucessfull-react" href="#views-reactvr-would-sucessfull-react">#</a> **Q:** What are your views about reactVR? Would it be as sucessfull as its other React mates?

**A:** I don't really know, to be honest. I have heard some very positive things said about React VR from some game developers and such who are kind of blown away by the development experience, but doubt it is going to be good enough for all VR development. React continues to be a very interesting programming model, and going beyond thinking of react as married to HTML is really interesting to me. One great example of this is the compositional power of things like shaders w/ gl-react and gl-react-native. Super interesting and hardly explored territory!

---

<a name="best-habits-tools-productive-programmer" href="#best-habits-tools-productive-programmer">#</a> **Q:** What are your best habits (/tools) to be such an productive programmer?!

**A:** Hmm. I constantly feel like a complete n00b in productivity compared to other people. For instance I know lots of people that do amazing things with vim and tmux etc and I feel like I missed this train completely and it's too late for me to go learn :P For productivity personally, I think my advice would be to never be afraid of jumping into the source code and learning more and more. There's so many great resources out there to learn how things work. Investigate and dive deep into the things that confuse you. Optimizing your keypresses can only get you so far :)
