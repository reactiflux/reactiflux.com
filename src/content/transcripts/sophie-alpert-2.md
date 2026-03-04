---
title: Sophie Alpert (August 2018)
date: 2018-08-16
time: 1-2pm PT / 8-9PM GMT
location: Q&A Channel Reactiflux
description: "Engineering Manager for React.js Team @ Facebook | The React Podcast – Episode #11 - [Inside React with Sophie Alpert](https://changelog.com/reactpodcast/11)"
people: "[@sophiebits](https://twitter.com/sophiebits)"
---

## Engineering manager for the React.js Team @ Facebook

<a name="wonder-talk-bit-future-suspense" href="#wonder-talk-bit-future-suspense">#</a> **Q:** I wonder if you can talk a bit about the future of suspense, and specifically how simple-cache-provider is evolving? I saw a recent commit adding support for event emitters which is exciting — CelloG

Suspense: we're eagerly working on getting it ready for public release! we've been testing it out in a few places at Facebook and are trying to make sure that it's solid before shipping it to everyone.

As for simple-cache-provider (not the final name) – it's a library designed to work with suspense for managing data, and we're trying to make sure that it is easy to use suspense without pitfalls, even if the core primitives built into React are a little lower level.

Next steps for us are to continue testing it, to try building some apps ourselves to make sure we're happy with all the features, and then to release it sometime later this year :smiley:

---

<a name="maybe-somewhat-unrelated-question-lot" href="#maybe-somewhat-unrelated-question-lot">#</a> **Q:** Maybe a somewhat unrelated question, but do you have a lot of contact between the React and Relay teams? Roughly, how widely used is Relay at Facebook? Sorry if it's a bit off topic — zth

We sit about 5 feet from the Relay team so we see them quite a bit :smiley: we always want React and Relay to work hand-in-hand, which means things like figuring out how to make Relay play nice with suspense. At the same time, Relay is pretty opinionated and makes assumptions about the structure of your data and of your apps that might not be right for everyone (starting with the need for a graphql server), so we'll always support using React without Relay and expect that to continue to be a pretty common way of using React.

We're using Relay more and more at facebook though! we recently rewrote one of the most popular React surfaces to use Relay and we're in the process of rolling it out as well as recommending it for more new development at FB going forward.

---

<a name="hi-sophie-efforts-made-react" href="#hi-sophie-efforts-made-react">#</a> **Q:** Hi Sophie! what efforts are being made from the React community in general to promote and help an d support diversity? — superdiana

Diversity: we don't have as many efforts here as I'd like, but one thing I'm pretty proud of is our norm of having diversity scholarships at React conferences, one we started with React Conf 2015 and that many other React conferences have followed us on. We know that these sorts of opportunities really make a difference ([here's one woman](https://mobile.twitter.com/samanthabretous/status/1019772458621198336) who got her first tech job as a result!)

In general we can all be mindful of trying to be inclusive of newcomers and of different opinions, I know that some people have been turned off from the React community in the past by discourse on twitter with people saying things like "if you don't believe that `<X>` is better than `<Y>` in React apps, you must be out of your mind" and I think it's important to try to avoid that kind of language, because everyone is coming from a different place and is coming with a different perspective that might not match yours.

---

<a name="someone-react-team-mentioned-somewhere" href="#someone-react-team-mentioned-somewhere">#</a> **Q:** Someone on the React team mentioned somewhere that async rendering will prioritise rendering of visible components, and defer rendering of items not currently visible on the screen. Is this true, and if so do you have a rough idea of when it might be implemented? Sounds like a better alternative to virtualization for some of our use cases, so hoping it's true! — Raptori

Deprioritizing offscreen rendering: that's the hope and different rendering priorities is one of the major parts of async rendering! hopefully someday we'll be able to do it fully automatically (we haven't tried to work on that yet), but the current development version of React treats elements with a hidden attribute differently (ex: `<div hidden={true}>{...}</div>`) and deprioritizes that render but does it in the background so that by the time you remove the hidden attribute, it's hopefully already rendered.

---

<a name="often-issues-hotreloading-feature-react" href="#often-issues-hotreloading-feature-react">#</a> **Q:** We often have issues with hot-reloading feature for React native (especially for Android) are there plans to fix some of the nasty bugs? Hot Reloading basically doesn't work :stuck_out_tongue: What commitment does FB have on fixing these quality of life issues? How big is the React native team at FB working on RN? — Brian

Hot reloading: it has always been and continues to be a bit of a hacky feature so it doesn't always work right, but we have some ideas to improve this that might get put into motion this year.

---

<a name="whats-bugs-reactnative-module-12" href="#whats-bugs-reactnative-module-12">#</a> **Q:** What's with the bugs in React-native module, 1-2 years ago people were facing the same problem that I'm facing now. These bugs will be cleared out our not?:thinking: It only works on downgrading the version of React-native and babel-preset-react-native modules. — Germa Vinsmoke

React native support: the React Native team is pretty small relative to the size of the project they are trying to pull off, which means that they can't get to everything. That's not to say that we don't care about React Native – more people work on RN than on React itself and we're investing more and more in React Native (see [State of React Native](https://facebook.github.io/react-native/blog/2018/06/14/state-of-react-native-2018) for more info) – but we can't guarantee that every bug you hit will be fixed. That said: (1) since React Native is open source you can generally work around issues yourself if you're willing to dive into the code, unlike with the native platforms where that's often not possible, and (2) we're actively working on improving our contribution process so that more people outside Facebook can make improvements more easily and hopefully fix some more of the bugs that you are seeing.

---

<a name="reconciliation-docs-talks-react-makes" href="#reconciliation-docs-talks-react-makes">#</a> **Q:** In the reconciliation docs it talks about how React makes assumptions about the structure of the vdom and that helps it achieve O(n) complexity vs O(n^3) for similar algorithms. Are you able to go into some detail about what those assumptions are? — jahans3

Reconciliation assumptions: that sentence refers to things like the fact that switching between component types, like from `<Foo />` to `<Bar />`, always throws away `Foo` completely and creates `Bar` from scratch, even if they happen to render some components in common. Though I'd say this isn't just a performance optimization: it's more predictable, too! So that you can tell from looking at the code what is going to happen in the DOM, rather than needing to guess based on what each component might render internally.

---

<a name="plans-react-native-maps-alternatives" href="#plans-react-native-maps-alternatives">#</a> **Q:** Any plans for React native maps or alternatives when AirBNB stopped supporting it altogether? Our small group is relying on the map developed by AirBNB because it's the plugin that is stable and is the best option. — ladybugph

React-native-maps: I'm not sure on the plans for this specific package but I imagine that since it is popular someone else will pick it up (and maybe we will move it into the React-native-community group on GitHub).

---

<a name="biggest-challenges-terms-managing-reacts" href="#biggest-challenges-terms-managing-reacts">#</a> **Q:** What are your biggest challenges in terms of managing React's design? Do Facebook's needs for React conflict with third party users, or do they tend to be more in sync? If there are conflicting needs, how are they resolved? — NickServ

Deciding what to build: we look at three things when trying to decide what to build: (1) what people in the broader community are asking for, (2) what people inside Facebook are asking for, and (3) what we as a core team think we should add :smiley:

The good news is that (1) and (2) tend to match up very well – even when they diverge a little bit it's usually just because one group is a little ahead of the other in certain ways (for example, we tend to hit large-scale problems sooner at FB but we've historically used SSR less so relied on OSS users to let us know about problems there).

As for (3), we do weigh our own ideas pretty heavily, and then it's on us to convince all of y'all that our ideas are good :smiley: you see this with features, like suspense, that are a little different than what people were asking for, but we had an idea and tried to explain it and now I think most people in the community are really excited for it.

---

<a name="major-companies-moving-away-react" href="#major-companies-moving-away-react">#</a> **Q:** With major companies moving away from React Native and the release of Flutter from the Google team, will there be any slowdown in development of the platform that you can see at this moment? — Van

Slowdown in React Native development: no, we're using React Native more than ever at Facebook and we know lots and lots of other people doing the same; [I wrote about this here](https://facebook.github.io/react-native/blog/2018/06/14/state-of-react-native-2018)

(flutter is a cool project but I don't think it's at odds with RN! friendly competition pushes us both to be better)

---

<a name="favourite-nonstandard-use-react-everspace" href="#favourite-nonstandard-use-react-everspace">#</a> **Q:** What is your favourite non-standard use of React? — Everspace

Favourite non-standard use of React: I don't know if I have a favorite, but I think it's pretty cool that the Oculus products we sell (especially the Oculus Go) use React a ton for rendering inside VR – that's maybe not as wild as some of the things people have built, but it's in production and a ton of people are using it!

---

<a name="hi-sophie-since-worked-react" href="#hi-sophie-since-worked-react">#</a> **Q:** Hi Sophie - since you have worked on both the React and React Native teams, do you see projects such as React Native Web to be viable? Do you view React Native as one day being available on more platforms, perhaps even consoles? The approach of abstracting native platform APIs behind unified JavaScript APIs seems repeatable and valuable. — Uncloaked

React native web: yes, I'd love to see some sort of unifying platform and that might be something that we'd built as an official product in the future. Imagine your ideal three apps for the same product on iOS, Android, and web: there will be some platform differences (especially around navigation and some of the low level components like buttons), but the vast majority of the apps will behave in exactly the same way. My ideal is that it's easy to share the things that are the same but also easy to split out when you want to!

---

<a name="good-morning-last-article-react" href="#good-morning-last-article-react">#</a> **Q:** Good morning, in your last article on React native blog, you talked about a rework of the RN architecture (fabric, am I right ?). What is the current state of this rework, can we expect it for the end of the year as you mentionned ? is this going well ? — Foyarash

React native architecture changes: yes, our big refactor to RN's internals (codenamed Fabric) is going well and testing in production already, so still hoping it will be fully completed by the end of the year

---

<a name="kind-ideas-likeborrow-frameworkslanguages-clojurescripts" href="#kind-ideas-likeborrow-frameworkslanguages-clojurescripts">#</a> **Q:** What kind of ideas, if any, do you like/borrow from other frameworks/languages such as ClojureScript's Om (which heavily borrows from React) or Elm? — jshah

Borrowing ideas: I don't have any specific ideas that we've used to call out, but I'll just point out that React in general is really us applying functional programming ideas to UI development – rather than managing UI imperatively, convincing everyone to describe their UIs as a function of the input props/state. I think we've been pretty successful with this trojan horse and getting more people to think in a functional way :smiley:

---

<a name="plans-react-react-native-near" href="#plans-react-react-native-near">#</a> **Q:** What are plans for React and React Native in the near future? — izzyzizou

React and RN near plans:

https://reactjs.org/blog/2018/03/01/sneak-peek-beyond-react-16.html

https://facebook.github.io/react-native/blog/2018/06/14/state-of-react-native-2018

Both do a better job of explaining what we're up to than I could in a message here!

---

<a name="hi-sophie-would-like-visit" href="#hi-sophie-would-like-visit">#</a> **Q:** Hi Sophie would you like to visit Mexico?? , I lead the biggest JS community here, and we have an sponsor that gave us the possibility of bringing international speakers — roderik

Me visiting Mexico: it's a possibility! send me the details about what you're looking for (my username at fb.com) and I'll see who on our team would be interested

---

<a name="hi-sophie-wondering-react-team" href="#hi-sophie-wondering-react-team">#</a> **Q:** Hi Sophie, I was wondering how does the React team decide which person works on what part of the codebase? It’s obviously quite a large codebase and a single person probably isn’t that well versed in for e.g the reconciliation process and React DOM at once. Does such a specialization happen in your team where certain people are focusing on specific parts of React? Thanks — Rauno

Who works on what: yes, naturally folks on the team develop specialities within the codebase over time and tend to know some parts better than others. This ends up so that there's usually one person who is the most natural choice for any particular new improvement but it all depends on who's available when and who's interested in what; we try to have chances for people to learn new things too instead of staying only in one part of the code

---

<a name="beginners-best-form-start-react" href="#beginners-best-form-start-react">#</a> **Q:** For beginners, what is the best form to start with React? What do I really have to know? Thanks! — GerardoTeixeira

"best form to start with React": not sure if I understand your question right, but if you mean how to get started with React then I'd recommend the tutorial and docs on our official website Reactjs.org; we've put a lot of work into them (and I personally wrote the tutorial). If there are things that are unclear, send us a pull request and hopefully we can make it better!

(if you meant for `<form>` tags and inputs, I don't have a specific recommendation but I know there are a lot of good ways out there)

---

<a name="discord-react-native-success-story" href="#discord-react-native-success-story">#</a> **Q:** Is Discord the only React Native success story as a startup who started with RN from the beginning, or not ? can you name others ? — Discord

Companies who started with RN: I'm not sure offhand, though I'll note that most companies you've heard of have been around a while (just because it takes a while to build up a brand and a business) so even if startups are building in RN and it's working great for them, you don't necessarily hear about that as much as the higher-profile companies.

---

<a name="widespread-use-flow-inside-facebook" href="#widespread-use-flow-inside-facebook">#</a> **Q:** How widespread is the use of Flow inside of Facebook? — zth

Flow use at FB: basically all of our JS is typed with Flow and we're always working to reduce the places where it is unsound (ex: because of using any or \$FlowFixMe), both to prevent bugs and with the hope of doing some optimizations based on that in the future (not sure how well that will work, we'll see!)

---

<a name="provide-info-expect-around-vrar" href="#provide-info-expect-around-vrar">#</a> **Q:** Can you provide any info on what to expect around VR/AR for React and React-native? — jstansbe

React VR/AR future plans: I don't know, sorry!

---

<a name="much-react-core-team-rely" href="#much-react-core-team-rely">#</a> **Q:** How much does the React core team rely on external contributions (bug fixes etc)? — Rauno

Reliance on external contributions: we used to have a little more and have had fewer over time, which is I think for two reasons: (1) React is less buggy so there is less to improve, and (2) React has gotten a little more complicated over time (like now including our async scheduler) which can make it harder to contribute. It's also often hard to change things if you don't have all the context, so unfortunately we typically see that significant external contributions usually don't make it in. But there are exceptions to every rule, and we recently added [PhilippSpiess](https://mobile.twitter.com/PhilippSpiess) as a committer because of his consistent good contributions. :slight_smile: when we do have things that can be done by someone without as much context, we try to file them as issues on GitHub with the label "good first issue" so that they're easy to find.

---

<a name="suspense-right-horizon-plans-andor" href="#suspense-right-horizon-plans-andor">#</a> **Q:** Now that Suspense is right on the horizon, what plans and/or ideas does the team have for React in the far(-ish) future? — arianon

Far future plans: still probably too early to think about that! I have my own wishlist but I'm sure everyone else does too. There's a lot of related work to do even once we ship our current work (like the earlier question about automatically rendering only things that are onscreen) but maybe one day we'll look at rendering to WebGL directly or something cool like that :p

---

<a name="possibilities-excited-fabric-architecture-might" href="#possibilities-excited-fabric-architecture-might">#</a> **Q:** What possibilities are you most excited about that the Fabric architecture might bring? (one possibility that comes to mind is stuff like preventDefault on events being possible) — empyrical

Possibilities from Fabric: Fabric is the RN internal rewrite I mentioned above; I'm hopeful that it will make it a lot easier to integrate with native components – like UICollectionView on iOS is the foundation of most apps and right now you can't use it at all from React Native. In many cases that's totally OK but there are also times when you really do want that built-in behavior and I'd like us to be able to provide it!

---

<a name="planned-react-native-support-kotlin" href="#planned-react-native-support-kotlin">#</a> **Q:** Is it planned that React Native will support Kotlin bridging officially? — Discord

Kotlin bridging on RN: I don't think there are current plans (to my knowledge, we don't use Kotlin at FB currently) but I suppose it's a possibility and it sounds like an improvement that an external contributor could potentially do.

---

<a name="able-comment-status-possible-api" href="#able-comment-status-possible-api">#</a> **Q:** Are you able to comment on the status of a possible API for registering custom React Native platforms with Metro? I've seen a few recent commits that hint at something like this being worked on — empyrical

Recent changes to metro: I don't know anything about these, sorry!

---

<a name="integration-feature-thats-built-reactrn" href="#integration-feature-thats-built-reactrn">#</a> **Q:** Will there be an integration feature that's built into React/RN where we can easily deploy microservices onto our existent applications? — izzyzizou

Microservices: I'm not sure exactly what your question is asking, but we've always wanted to make it really easy to drop in React to an existing app and we've recently tried to make that more obvious [in the docs](https://reactjs.org/docs/add-react-to-a-website.html)

---

<a name="thoughts-reason-involved-anything-zth" href="#thoughts-reason-involved-anything-zth">#</a> **Q:** What are your thoughts on Reason? Have you been involved anything with that? — zth

I think Reason is cool in a lot of ways but there are also a lot of things that would need to be improved before I would feel comfortable recommending it to the React community at large, and I'm not sure if it has enough momentum to get there. But I also think that JavaScript isn't well-loved enough to remain dominant in the frontend space forever, so I do think we'll end some language similar to Reason/Kotlin/Swift become very popular in frontend in the future

---

<a name="facebook-use-crash-reporting-react" href="#facebook-use-crash-reporting-react">#</a> **Q:** What does Facebook use for their crash reporting for their React native apps? Bugsnag seems to be the current leader in this space but open to hear what FB does? (Fabric/Crashlytics doesn't include JS stack traces leading up to a native crash.) — Brian

Crash reporting at fb: I think it's all custom, sorry! I don't know what the state of the art techniques are and if there's something we could make better – if Fabric/Crashlytics are having a hard time grabbing the JS stack and there's something RN could do better, then let us know and maybe we can make an improvement!

---

<a name="understand-looking-current-published-fabric" href="#understand-looking-current-published-fabric">#</a> **Q:** From what I understand looking at current published Fabric code like FabricUIManager, it looks like the JS engine might be more tightly integrated with Native than it is right now. Will running the code in Chrome over websockets still be possible after Fabric is out? — empyrical

Debugging RN Fabric over Chrome websockets: no, this likely won't be possible any more; that's one thing that we want to figure out because we don't want to release it until we have a good way to support debugging that can replace it.

---

<a name="suggestions-speed-loading-bundles-look" href="#suggestions-speed-loading-bundles-look">#</a> **Q:** Any suggestions as to how we can speed up loading of our bundles? Should we look into building lazy loading bundles? — Brian

Bundle load speed: generally if you split things into smaller bundles so you're not downloading things you don't need, it'll be faster! you can already do this with tools like create-react-app and webpack by hand but we're hoping to make it even easier in the future (see [this tweet from Andrew Clark](https://mobile.twitter.com/acdlite/status/1007062696141787136) for an idea of what we're thinking).

---

<a name="one-get-job-team-without" href="#one-get-job-team-without">#</a> **Q:** How does one get a job in your team without a CS degree — BruceWayne

I think only 1 or 2 people on our team has a CS degree (I don't have a degree at all!) – for React and at Facebook more generally we try to look more at your past work than what school you went to, and we try to focus our frontend interview questions on things you would actually use when building apps, not super-theoretical algorithms.

---

<a name="could-magic-wand-change-whatever" href="#could-magic-wand-change-whatever">#</a> **Q:** If you could have a magic wand and change whatever you wanted in the software development industry in a flick of the wrist, what would you change first? — Van

One thing I'd change: this is an easy one :p I'd fix all of the things that are pushing minorities, including women and people of color, out of the industry and find ways for everyone to have a little more empathy :)

I don't have any technical changes that I'm dying to make though.

---

<a name="sohow-even-get-resume-youkappa" href="#sohow-even-get-resume-youkappa">#</a> **Q:** So.....how do I even get my resume to you:kappa: — BruceWayne

https://www.facebook.com/careers/jobs/a0I1H00000LBgrYUAT/

Facebook Careers

Front End Engineer

Facebook's mission is to give people the power to build community and bring the world closer together. Together, we can help people build stronger communities - join us.
