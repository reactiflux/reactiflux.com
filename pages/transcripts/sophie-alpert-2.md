---
title: Sophie Alpert
date: August 16 2018
---

## Engineering manager for the React.js Team @ Facebook

**Q:** I wonder if you can talk a bit about the future of suspense, and specifically how simple-cache-provider is evolving? I saw a recent commit adding support for event emitters which is exciting — CelloG

Suspense: we're eagerly working on getting it ready for public release! we've been testing it out in a few places at Facebook and are trying to make sure that it's solid before shipping it to everyone.

As for simple-cache-provider (not the final name) – it's a library designed to work with suspense for managing data, and we're trying to make sure that it is easy to use suspense without pitfalls, even if the core primitives built into react are a little lower level

Next steps for us are to continue testing it, to try building some apps ourselves to make sure we're happy with all the features, and then to release it sometime later this year :smiley:

---


**Q:** Maybe a somewhat unrelated question, but do you have a lot of contact between the React and Relay teams? Roughly, how widely used is Relay at Facebook? Sorry if it's a bit off topic — zth

We sit about 5 feet from the Relay team so we see them quite a bit :smiley: we always want React and Relay to work hand-in-hand, which means things like figuring out how to make Relay play nice with suspense. at the same time, Relay is pretty opinionated and makes assumptions about the structure of your data and of your apps that might not be right for everyone (starting with the need for a graphql server), so we'll always support using React without Relay and expect that to continue to be a pretty common way of using React.

We're using Relay more and more at facebook though! we recently rewrote one of the most popular React surfaces to use Relay and we're in the process of rolling it out as well as recommending it for more new development at FB going forward

---


**Q:** Hi Sophie! what efforts are being made from the react community in general to promote and help an d support  diversity? — superdiana

Diversity: we don't have as many efforts here as I'd like, but one thing I'm pretty proud of is our norm of having diversity scholarships at React conferences, one we started with React Conf 2015 and that many other React conferences have followed us on. we know that these sorts of opportunities really make a difference (here's one woman who got her first tech job as a result! https://mobile.twitter.com/samanthabretous/status/1019772458621198336)

In general we can all be mindful of trying to be inclusive of newcomers and of different opinions, I know that some people have been turned off from the React community in the past by discourse on twitter with people saying things like "if you don't believe that <X> is better than <Y> in React apps, you must be out of your mind" and I think it's important to try to avoid that kind of language, because everyone is coming from a different place and is coming with a different perspective that might not match yours

---


**Q:** Someone on the React team mentioned somewhere that async rendering will prioritise rendering of visible components, and defer rendering of items not currently visible on the screen. Is this true, and if so do you have a rough idea of when it might be implemented? Sounds like a better alternative to virtualization for some of our use cases, so hoping it's true! — Raptori

Deprioritizing offscreen rendering: that's the hope and different rendering priorities is one of the major parts of async rendering! hopefully someday we'll be able to do it fully automatically (we haven't tried to work on that yet), but the current development version of React treats elements with a hidden attribute differently (ex: <div hidden={true}>{...}</div>) and deprioritizes that render but does it in the background so that by the time you remove the hidden attribute, it's hopefully already rendered

---


**Q:** We often have issues with hot-reloading feature for react native (especially for Android) are there plans to fix some of the nasty bugs? Hot Reloading basically doesn't work :stuck_out_tongue: What commitment does FB have on fixing these quality of life issues? How big is the react native team at FB working on RN? — Brian

Hot reloading: it has always been and continues to be a bit of a hacky feature so it doesn't always work right, but we have some ideas to improve this that might get put into motion this year. and (combining this answer with the next question…)

---


**Q:** What's with the bugs in react-native module, 1-2 years ago people were facing the same problem that I'm facing now. These bugs will be cleared out our not?:thinking: It only works on downgrading the version of react-native and babel-preset-react-native modules.(edited) — Germa Vinsmoke

React native support: the React Native team is pretty small relative to the size of the project they are trying to pull off, which means that they can't get to everything. that's not to say that we don't care about React Native – more people work on RN than on React itself and we're investing more and more in React Native (see https://facebook.github.io/react-native/blog/2018/06/14/state-of-react-native-2018 for more info) – but we can't guarantee that every bug you hit will be fixed. that said: (1) since React Native is open source you can generally work around issues yourself if you're willing to dive into the code, unlike with the native platforms where that's often not possible, and (2) we're actively working on improving our contribution process so that more people outside Facebook can make improvements more easily and hopefully fix some more of the bugs that you are seeing

State of React Native 2018 · React Native

It's been a while since we last published a status update about React Native.

---


**Q:** In the reconciliation docs it talks about how React makes assumptions about the structure of the vdom and that helps it achieve O(n) complexity vs O(n^3) for similar algorithms. Are you able to go into some detail about what those assumptions are? — jahans3

@jahans3 reconciliation assumptions: that sentence refers to things like the fact that switching between component types, like from <Foo /> to <Bar />, always throws away Foo completely and creates Bar from scratch, even if they happen to render some components in common. though I'd say this isn't just a performance optimization: it's more predictable, too! so that you can tell from looking at the code what is going to happen in the DOM, rather than needing to guess based on what each component might render internally

---


**Q:** Any plans for react native maps or alternatives when AIRBNB stopped supporting it altogether? Our small group is relying on the map developed by AIRBNB because it's the plugin that is stable and is the best option. @sophiebits(edited) — ladybugph

React-native-maps: I'm not sure on the plans for this specific package but I imagine that since it is popular someone else will pick it up (and maybe we will move it into the react-native-community group on github)

---


**Q:** What are your biggest challenges in terms of managing React's design? Do Facebook's needs for React conflict with third party users, or do they tend to be more in sync? If there are conflicting needs, how are they resolved? — NickServ

Deciding what to build: we look at three things when trying to decide what to build: (1) what people in the broader community are asking for, (2) what people inside Facebook are asking for, and (3) what we as a core team think we should add :)

The good news is that (1) and (2) tend to match up very well – even when they diverge a little bit it's usually just because one group is a little ahead of the other in certain ways (for example, we tend to hit large-scale problems sooner at FB but we've historically used SSR less so relied on OSS users to let us know about problems there)

As for (3), we do weigh our own ideas pretty heavily, and then it's on us to convince all of y'all that our ideas are good :smiley: you see this with features, like suspense, that are a little different than what people were asking for, but we had an idea and tried to explain it and now I think most people in the community are really excited for it

---


**Q:** With major companies moving away from React Native and the release of Flutter from the Google team, will there be any slowdown in development of the platform that you can see at this moment? — Van

Slowdown in react native development: no, we're using React Native more than ever at Facebook and we know lots and lots of other people doing the same; I wrote about this here https://facebook.github.io/react-native/blog/2018/06/14/state-of-react-native-2018

(flutter is a cool project but I don't think it's at odds with RN! friendly competition pushes us both to be better)

State of React Native 2018 · React Native

It's been a while since we last published a status update about React Native.

---


**Q:** What is your favourite non-standard use of React?  — Everspace

Favourite non-standard use of React: I don't know if I have a favorite, but I think it's pretty cool that the Oculus products we sell (especially the Oculus Go) use React a ton for rendering inside VR – that's maybe not as wild as some of the things people have built, but it's in production and a ton of people are using it!

---


**Q:** Hi Sophie - since you have worked on both the React and React Native teams, do you see projects such as React Native Web to be viable? Do you view React Native as one day being available on more platforms, perhaps even consoles? The approach of abstracting native platform APIs behind unified JavaScript APIs seems repeatable and valuable. — Uncloaked

React native web: yes, I'd love to see some sort of unifying platform and that might be something that we'd built as an official product in the future. imagine your ideal three apps for the same product on iOS, Android, and web: there will be some platform differences (especially around navigation and some of the low level components like buttons), but the vast majority of the apps will behave in exactly the same way. my ideal is that it's easy to share the things that are the same but also easy to split out when you want to!

---


**Q:** Good morning, in your last article on React native blog, you talked about a rework of the RN architecture (fabric, am i right ?). What is the current state of this rework, can we expect it for the end of the year as you mentionned ? is this going well ? — Foyarash

React native architecture changes: yes, our big refactor to RN's internals (codenamed Fabric) is going well and testing in production already, so still hoping it will be fully completed by the end of the year

---


**Q:** What kind of ideas, if any, do you like/borrow from other frameworks/languages such as ClojureScript's Om (which heavily borrows from React) or Elm? — jshah

Borrowing ideas: I don't have any specific ideas that we've used to call out, but I'll just point out that React in general is really us applying functional programming ideas to UI development – rather than managing UI imperatively, convincing everyone to describe their UIs as a function of the input props/state. I think we've been pretty successful with this trojan horse and getting more  people to think in a functional way :smiley:

---


**Q:** What are plans for React and React Native in the near future? — izzyzizou

React and RN near plans:

Https://reactjs.org/blog/2018/03/01/sneak-peek-beyond-react-16.html

Https://facebook.github.io/react-native/blog/2018/06/14/state-of-react-native-2018

Both do a better job of explaining what we're up to than I could in a message here!(edited)

Sneak Peek: Beyond React 16 - React Blog

Dan Abramov from our team just spoke at JSConf Iceland 2018 with a preview of some new features we’ve been working on in React. The talk opens with a question: “With vast differences in computing power and network speed, how do we deliver the best user experience for e...

State of React Native 2018 · React Native

It's been a while since we last published a status update about React Native.

---


**Q:** Hi Sophie would you like to visit Mexico?? , I lead the biggest JS community here, and we have an sponsor that gave us the possibility of bringing international speakers — roderik

Me visiting Mexico: it's a possibility! send me the details about what you're looking for (my username at fb.com) and I'll see who on our team would be interested

---


**Q:** Hi Sophie, I was wondering how does the React team decide which person works on what part of the codebase? It’s obviously quite a large codebase and a single person probably isn’t that well versed in for e.g the reconciliation process and React DOM at once. Does such a specialization happen in your team where certain people are focusing on specific parts of React? Thanks — Rauno

Who works on what: yes, naturally folks on the team develop specialities within the codebase over time and tend to know some parts better than others. this ends up so that there's usually one person who is the most natural choice for any particular new improvement but it all depends on who's available when and who's interested in what; we try to have chances for people to learn new things too instead of staying only in one part of the code

---


**Q:** For beginners, what is the best form to start with React? What do I really have to know? Thanks! — GerardoTeixeira

"best form to start with React": not sure if I understand your question right, but if you mean how to get started with React then I'd recommend the tutorial and docs on our official website reactjs.org; we've put a lot of work into them (and I personally wrote the tutorial). if there are things that are unclear, send us a pull request and hopefully we can make it better!

(if you meant for <form> tags and inputs, I don't have a specific recommendation but I know there are a lot of good ways out there)

---


**Q:** Is Discord the only React Native success story as a startup who started with RN from the beginning, or not ? can you name others ?(edited) — Discord

Companies who started with RN: I'm not sure offhand, though I'll note that most companies you've heard of have been around a while (just because it takes a while to build up a brand and a business) so even if startups are building in RN and it's working great for them, you don't necessarily hear about that as much as the higher-profile companies.

---


**Q:** How widespread is the use of Flow inside of Facebook? — zth

Flow use at FB: basically all of our JS is typed with Flow and we're always working to reduce the places where it is unsound (ex: because of using any or $FlowFixMe), both to prevent bugs and with the hope of doing some optimizations based on that in the future (not sure how well that will work, we'll see!)

---


**Q:** Can you provide any info on what to expect around VR/AR for react and react-native? — jstansbe

React VR/AR future plans: I don't know, sorry!

---


**Q:** How much does the React core team rely on external contributions (bug fixes etc)? — Rauno

@Rauno reliance on external contributions: we used to have a little more and have had fewer over time, which is I think for two reasons: (1) react is less buggy so there is less to improve, and (2) react has gotten a little more complicated over time (like now including our async scheduler) which can make it harder to contribute. it's also often hard to change things if you don't have all the context, so unfortunately we typically see that significant external contributions usually don't make it in. but there are exceptions to every rule, and we recently added https://mobile.twitter.com/PhilippSpiess as a committer because of his consistent good contributions. :slight_smile: when we do have things that can be done by someone without as much context, we try to file them as issues on github with the label "good first issue" so that they're easy to find

---


**Q:** Now that Suspense is right on the horizon, what plans and/or  ideas does the team have for React in the far(-ish) future? — arianon

Far future plans: still probably too early to think about that! I have my own wishlist but I'm sure everyone else does too. there's a lot of related work to do even once we ship our current work (like the earlier question about automatically rendering only things that are onscreen) but maybe one day we'll look at rendering to WebGL directly or something cool like that :p

---


**Q:** What possibilities are you most excited about that the Fabric architecture might bring? (one possibility that comes to mind is stuff like preventDefault on events being possible)(edited) — empyrical

Possibilities from Fabric: Fabric is the RN internal rewrite I mentioned above; I'm hopeful that it will make it a lot easier to integrate with native components – like UICollectionView on iOS is the foundation of most apps and right now you can't use it at all from React Native. in many cases that's totally OK but there are also times when you really do want that built-in behavior and I'd like us to be able to provide it!

---


**Q:** Is it planned that React Native will support Kotlin bridging officially ? — Discord

Kotlin bridging on RN: I don't think there are current plans (to my knowledge, we don't use Kotlin at FB currently) but I suppose it's a possibility and it sounds like an improvement that an external contributor could potentially do

---


**Q:** Are you able to comment on the status of a possible API for registering custom React Native platforms with Metro? I've seen a few recent commits that hint at something like this being worked on — empyrical

Recent changes to metro: I don't know anything about these, sorry!

---


**Q:** Will there be an integration feature that's built into React/RN where we can easily deploy microservices onto our existent applications? — izzyzizou

Microservices: I'm not sure exactly what your question is asking, but we've always wanted to make it really easy to drop in React to an existing app and we've recently tried to make that more obvious in the docs (https://reactjs.org/docs/add-react-to-a-website.html)

---


**Q:** What are your thoughts on Reason? Have you been involved anything with that? — zth

I think Reason is cool in a lot of ways but there are also a lot of things that would need to be improved before I would feel comfortable recommending it to the React community at large, and I'm not sure if it has enough momentum to get there. but I also think that JavaScript isn't well-loved enough to remain dominant in the frontend space forever, so I do think we'll end some language similar to Reason/Kotlin/Swift become very popular in frontend in the future

---


**Q:** What does Facebook use for their crash reporting for their react native apps? Bugsnag seems to be the current leader in this space but open to hear what FB does? (Fabric/Crashlytics doesn't include JS stack traces leading up to a native crash.) — Brian

Crash reporting at fb: I think it's all custom, sorry! I don't know what the state of the art techniques are and if there's something we could make better – if Fabric/Crashlytics are having a hard time grabbing the JS stack and there's something RN could do better, then let us know and maybe we can make an improvement!

---


**Q:** From what I understand looking at current published Fabric code like FabricUIManager, it looks like the JS engine might be more tightly integrated with Native than it is right now. Will running the code in Chrome over websockets still be possible after Fabric is out? — empyrical

Debugging RN Fabric over Chrome websockets: no, this likely won't be possible any more; that's one thing that we want to figure out because we don't want to release it until we have a good way to support debugging that can replace it

---


**Q:** Any suggestions as to how we can speed up loading of our bundles? Should we look into building lazy loading bundles? — Brian

Bundle load speed: generally if you split things into smaller bundles so you're not downloading things you don't need, it'll be faster! you can already do this with tools like create-react-app and webpack by hand but we're hoping to make it even easier in the future (see https://mobile.twitter.com/acdlite/status/1007062696141787136 for an idea of what we're thinking)

---


**Q:** How does one get a job in your team without a CS degree — BruceWayne

I think only 1 or 2 people on our team has a CS degree (I don't have a degree at all!) – for React and at Facebook more generally we try to look more at your past work than what school you went to, and we try to focus our frontend interview questions on things you would actually use when building apps, not super-theoretical algorithms

---


**Q:** If you could have a magic wand and change whatever you wanted in the software development industry in a flick of the wrist, what would you change first?(edited) — Van

One thing I'd change: this is an easy one :p I'd fix all of the things that are pushing minorities, including women and people of color, out of the industry and find ways for everyone to have a little more empathy :)

I don't have any technical changes that I'm dying to make though

---


**Q:** So.....how do i even get my resume to you:kappa: — BruceWayne

Https://www.facebook.com/careers/jobs/a0I1H00000LBgrYUAT/

Facebook Careers

Front End Engineer

Facebook's mission is to give people the power to build community and bring the world closer together. Together, we can help people build stronger communities - join us.
