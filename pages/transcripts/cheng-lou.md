---
title: Cheng Lou
date: January 12, 2017
---
## Facebook Engineer | [Reason](https://facebook.github.io/reason/) & [Messenger.com](https://www.messenger.com/)

**Q:** What is "Reason"? (I don't have Facebook) - CPT

**A:** Reason is a layer of syntax & tooling on top of OCaml, a language Facebook uses actively. Jordan started the concept of Reason before React, in fact. We're taking it and using it as an actual front-end language (among other uses) because we think that after three and half years, the React experiment has succeeded and people are now ready for Reason, so we unshelved that project and are now actively iterating on it. https://github.com/facebook/reason

---

**Q:** Is it okay to modify DOM directly without the changing state in React sometimes? - AbsoluteZero

**A:** Yes, but only as an escape hatch. In the early days of React, when there wasn't such an ecosystem, we'd render once, get a hold of the root (through ref), and in componentDidMount, use some jQuery plugins. I think lifecycles and refs are the escape hatches that are hard to implement but ultimately rewarding enough; For React to interop with existing systems is a hard constraint at facebook, and these hooks allowed React to take off.

---

**Q:** What do Facebook use OCaml/Reason for, and why use them over JS/haskell etc? - Limes

**A:** Facebook uses Reason for messenger.com and [censored]. Yes, that means what you think it means with all its implications. If you'd like to see more, come to the Discord reasonml channel =) Same answer, as to why over JS/haskell. You'd have to see it to believe it. I have a talk or two coming up this year that'll go into this topic in depth. It's hard to convey all the nuances over q&a answers for now, sorry! But we're keeping our mouth relatively shut to iterate and polish Reason more. Until then, have faith in the person who delivered you React (Jordan)

---

**Q:** Maybe unrelated, are there thoughts about making messenger.com a desktop app? - leblaaanc

**A:** There are currently web page wrappers for messenger.com, but they might or might not have some broken layout. We don't have plans to officially maintain a wrapper ourselves, for now. I personally ping the messenger.com tab.

---

**Q:** Would you still use react-tween-state, or is it outdated because of the use of mixins? - ChiefORZ

**A:** I don't personally use react-tween-state. Although apparently some others still do. JavaScript mixins (especially infused with React-specific logic) are a bit troublesome to deal with indeed, so I'd suggest you to avoid them as much as you can.

---

**Q:** When do you think mixins will be deprecated in the React ecosystem? - ChiefORZ

**A:** I don't know the time line but I don't think they will ever be "killed", as in, "your code will now error". Once/if createClass is pulled out, mixins will likely stay in that as well. We care about existing code. While I'm on topic: I've installed a random React example Jordan made three years ago, and it still works today.

---

**Q:** Should dumb components have methods? Doesn't it recreate a method each time rendering occurs? - stunaz

**A:** I think dumb & smart components are a tiny bit overhyped. I've personally lost more time helping people understanding this than letting people just write the components and move on to the next one ¯\_(ツ)_/¯. So my vague answer is: they're not your bottleneck; fire up the inspector and check where your perf costs are!

---

**Q:** Are there plans/ideas for React/Reason integration beyond BuckleScript? - Kjg531

**A:** Come into the reasonml channel. https://discord.gg/reasonml

---

**Q:** When Reason comes out is it safe to say Reason Native will as well? - Alon

**A:** lol... come into the reasonml channel. https://discord.gg/reasonml

---

**Q:** What Redux middlewares are preferred for which use cases at facebook internally? (caveat: I have no idea to what extent Redux is used at fb) - granmoe

**A:** we don't use Redux on messenger.com

(Reactions: 😱[5] 👍[5])

---

**Q:** Do you recommend ES6 classes or React.createClass or stateless functions? Many seem to be against ES6 classes. What do you think about it? - AbsoluteZero

**A:** In the spirit of helping React split createClass into a standalone module (aka "deprecating"), try using es6 classes. I'm personally ambivalent. As for stateless functions: I feel the conversion to a stateful component from a stateless function is slightly much. They do look elegant though, so it's up to you 😃

My next two talks (React-London and React-Europe) will tackle these in some way. This question is giving me answering paralysis as I'm not sure what to say in such a short amount of time. See you in March 😃

---

**Q:** Say you're a large tech company (hundreds of 'products'), but you're not Facebook and don't have a monorepo. How do you go about sharing your React components effectively, independent of state management/frameworks? - Limes

**A:** I think you should start with your end goal, at the end-end of "sharing your components effectively". Realistically (and history has proven so), your component, if they're valuable enough to be reshared for years, will always have at least a tiny bit of library-specific logic, in such way that you can't just drop it into a brand new library/framework when the time comes. So I'd advise you, in the typical fashion of my last talk on abstractions, to go to the most concrete level and optimize for what you're currently writing. If you wanna move out of React, copy paste and add/remove the bits. You'd spend half an hour porting your component over rather than spending days wondering if there's an abstraction over all front-end frameworks.

Give yourself such thought experiment: can you execute as well as bootstrap & foundation & the rest? Because even if you do, people will still end up wrapping them for the idiomatic React API.

---

**Q:** Do you use anything in particular for managing state instead of Redux? Relay? - Trappar

**A:** messenger has a bit of Relay but not much. Currently in Reason we haven't had the need for extra state management tricks (we have some secret recipes... again, more on that in March since I don't want to sell you some under-polished solutions that ends up churning you more than you'd gain from just using straight props, or redux, or whatever).

---

**Q:** What are you most looking forward to in Front End / JS in t he next few years? - CPT

**A:** I'm biased, but I'm looking forward to Reason and there are a bajillion things to talk about for another time. Though I work on Reason because I thought it's gonna be the next thing. But I'd also like to look at current things! A stable ecosystem, stable tooling, and people building more great end-products using React rather than more development tools using React.

---

**Q:** What's the next big thing in Facebook related to front-end development? - antonsekatski

**A:** See my above answer. I hope it's Reason! And by all means, if you check [censored] you'd see why. The first time I installed [censored] I was pretty much blown away 😛

---

(some chatter followed that answer)

vcarl: you tease

quicksnap: I'm so dense and can't figure out what [censored] is...

chenglou: it's pretty obvious in retrospect actually. It's really just a [censored] over [censored]

chenglou: Also, this might get lost in all the answers, but someone please try straight-on graphQL queries + key-value database + no subscriptions (full top-down re-render). I'll remember to thank you in around two years.

CPT: I do that for a lite widget application (with Rails and graphql-ruby)

chenglou: please tell me how that goes. Somewhere in there resides an obvious idea for state management.

CPT: This app has little to no state management so there's just a basic AppContainer which fetches on initial load, handles state at the top of the tree, and triggers a mutation upon form submission

CPT: For more intensive state needs I've fallen head over heels for Relay

---

**Q:** Any time estimate for relay 2? - proprobe

**A:** No idea; you'd have to ask the Relay team. They're still working on it.

---

**Q:** how would you suggest someone get involved in open source if they're not quite confident enough to contribute code? As a self taught developer as way of former poker pro, are there ways to help without getting in the way? - Kjg531

**A:** For once, I do feel qualified to answer this! I'll give you another piece of the puzzle in my next talk (or the next next, depending on what I order I prefer). But first, start with the documentations. A project's docs is one of the few places where you have more potentially more expertise than the project maintainers; they're writing the docs for you, yet you know best what your pain points are. Docs are also low-hanging fruits the maintainers sometimes don't clear out.

Don't believe me? For my first PRs to React, I basically pasted the documentation pages into Word, corrected all the red and green squiggly lines, and submitted that back. Then I pointed out I have no idea what a certain passage meant, so I corrected that too. Then it's the fringe features related to those documentations, then it's the core features.

Find a project you need (it might not be React), fix its docs, fix its fringe features. Aka, try a few concrete "examples" of contribution, then abstract over that when you're ready. Try a few more, abstract over that too. Then abstract over that abstraction. Divide and conquer.

---

**Q:** What do you think about functional programming, its state now and in future? - AbsoluteZero

**A:** I think it's great, but I also think the current atmosphere is a bit like e.g. in math where a student insists that his/her way of calculating the area of a circle is the correct one. I personally am afraid of overhyping things and under-delivering. On that point: I've once told someone I was betting my front-end career on React (got me laughed at lol). Right now I'm betting it on Reason and it's still getting me laughed at. Btw, the "O" in "OCaml" stands for "Object".

---

**Q:** Is writing React components in Reason a thing? - aitherios

**A:** Come to the reasonml channel (I see I'm getting pinged there already! I'll get to it).

---

**Q:** Could you tell us what [censored] is by typing it a different way? - CPT

**A:** Like this? `<censored>`

Go to reasonml to see the uncensored version.

---

**Q:** Functional React component with lifecycle methods? - aakashsigdel

**A:** For ReactJS or `<censored>`? I don't know for the former one; You'd have to ask the React team, which I'm no longer officially part of. But hey, your app will look the same even with functional React components with lifecycles right? So I woudn't be too worried and you shouldn't either 😃

---

**Q:** Are stateless functions currently slower than classes and if so, will it ever be optimized to be as fast as classes? - AbsoluteZero

**A:** I don't know, sorry. Vague answer: depends on the context. I don't know how fast native JS classes are compared to babel-transformed JS, and I no longer know the optimizations of stateless functions. Seems like they shouldn't be slower though.

---

**Q:** Piña Coladas  OR  Getting caught in the rain? - CPT

**A:** I've lived in Canada for half of my life. Rain is nothing, snow is nothing. Also I don't drink much; I don't have a balmer peak when I drink and code.

---

**Q:** What made you chose React over Angular or other popular frameworks? What's the thing that made you say "this, this is what I love about React" - BTM

**A:** Aaaaah... It's weird but I've actually never had the "EWWWW HTML in my JS?!?! Lemme show you exactly why this is wrong through my extended programming knowledge". I've only noticed people didn't like it in retrospect. JSX was actually forcefully made by jordan after he got the internal feedback that people didn't like looking at trees of regular function calls too much (go figure). The open-source Reaction was a real surprise.

I chose React because (personally!) I felt like it "made sense". If you talk to me in real life, I have more opinions on this that I'll refrain discussing in a Q&A; some nuances would get lost. But don't forget that we're all in this together. As David Nolen once said to me (paraphrased), "we all hold shit in our hands. Let's not get too eager comparing how shiny we can polish the turd".

Web front-end is hard. Some people's goal is to "defeat native". If such is your goal (it might not be!), you gotta sort out your internal (aka websphere) struggles first and stop seeing it as "us vs them". How do you expect competing against native if they're moving on as a cohesive unit and you're still discussing which car you should ride?

---

**Q:** Is there an IDE for Reason? - stunaz

**A:** Reason comes with Atom's Nuclide. We have integration for VSCode (reaaaally legit, check it out), Vim, Emacs, and Sublime Text.

Your question makes me wanna go into a philosophical discussion however. But I'll keep it short: write in friggin notepad if you have to. The language and the compiler help you enough that they obliterate the need for some toolings. More on that another time.

---

**Q:** Why did you bet your frontend career on React before? Why on ocaml/reasonml now? (disclaimer: I left my previous team after being put on a non-React project for 4 weeks. I left after one week. I understand) 🙂 - iamdustan

**A:** I think I was a bit hardcore and went overboard lol. I was also a bit salty that after promoting React to some famous companies they tell me "nah, the ship has sailed". Not important though.

Reason is the past (and hopefully, the future) of React; The first iteration of React was writte in SML, OCaml's cousin.

I'd like to add something, which I don't think I will be talking about publicly any time soon, so I'm putting it here:

First of all, the obvious dislclaimer: I like JavaScript, blablabla. And I like seeing people build products. But somewhere inside me I'd like to see people "learn" also.

After all these years, the story seems to be that "if we build and polish our things, then people will be productive". Yes, that is absolutely true. But I can't recall the last time I've see things "click" in a big way for people, aside from that occasional "oooooh component tree" click I've seen when onboarding newcomers onto React. Nowadays it's mostly "I love how this library solves the other problem I've had". The missing chunk is "what have I learned after installing this library?". I don't really learn much anymore, they solve my problem and I move on, which is great (more concrete, immediately valuble, etcetc.), but it's always "use, use, use".

But in Reason I've had these "clicks" on a monthly basis. It's great being able to use your university degree's knowledge again, and reason through your code the way the teachers taught. I sincerely thought it was gonna be unpractical a few years ago. It re-connected some disconnects. It's great that installing a library actually lets me "learn", aside from also solving the problem. I'll move on to the next question. See me in real life and I'll explain the nuances.

(my fingers are on fire)

---
