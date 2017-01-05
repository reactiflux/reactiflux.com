---
title: Christopher Chedeau
date: September 8 2016
---
## Facebook React Core Team Member

| username | question |
| ---: | --- |
| taion | @everyone Q&A is starting |
| gtfargo | 👋 |
| Juan Miranda | Hello! |
| greweb | 😃 |
| **vjeux** | To introduce myself a bit, I went to EPITA, a French school specialized on computer science where I learned a ton of things. During that time I worked for Curse and MMO-Champion. Right after school (4.5 years ago), I joined FB where I worked a bunch of things including React, React Native, css-layout, css in js, helping open source efforts of our front-end library, organized React.js Conf |
| **vjeux** | Happy to dig into any of those projects in more details 😃 |
| Panen | Wooo, Curse and MMO-Champion back in the days were so amazing communities! |
| EvNaverniouk | **What upcoming React feature are you most excited about?** |
| **vjeux** | Definitely the Fiber work that Sebastian Markbage is working on. One of the big theme we're seeing is that in order to get better performance overall, micro-optimizations can only get you so far. The bigger trend we're seeing is that we need to enable primitives to be able to do scheduling. |
| **vjeux** | The typical example is if you have a listview, when you scroll quickly, what you care most about is what is on the screen. The naive way to do that is to start rendering a bunch of items when you have time in hope that it'll be there on time. Instead, what would be better is to schedule all those items and if some are going out of screen, pause their work to give higher priority to what's actually either visible or going to be very soon. |
| **vjeux** | It's also a full rewrite of the internals of the reconciliation part which has aged a bit with all the updates we've done to React over the years, it's all flowified and pretty 😃 |
| aitherios | **Any thoughts on inline-styles / Radium / Jss / Aphrodite / css-modules conundrum? There will be an efford to drive the community? (like on core notes: 2016-04/april-28.md and 2016-07/july-21.md)** |
| kylemathews | @aitherios and Glamor! (my new recent fav) |
| **vjeux** | yeah, so the story behind css in js is that at the beginning of React Native, I was way too lazy to reimplement a CSS parser and selector engine so I decided to start using styles written in js. At the time I had no doubts that I would need to implement CSS because, let's be serious, if we used CSS on the web there must be a reason. Fast forward a year, it turned out that not only did we not need to implement CSS but it also solved a bunch of issues we had with CSS. |
| **vjeux** | As we were going to announce React Native, I was dead scared that the announcement would follow the same as React where everyone talked about JSX and not React itself. So I spoke at a small conference: NationJS (really good vibe there btw) about writing css in js. |
| **vjeux** | I knew it was going to be controversial but I had absolutely no idea that it would generate an entire movement of people building out libraries around it. I mostly remained silent afterwards as I actually don't know what the best thing is. I would love to get to one standard of doing it though and we're going to look into it in the next few months as the react team |
| cpojer | **why are you always wearing a hood when you are at work? Who are you hiding from?** |
| **vjeux** | I like looking like a gangster :p |
| fson | What can I do to get a React hoodie? 😛 |
| brentvatne | @fson speak at react conf :> |
| Stanislav | **Do you think RN Android will ever be good enough? 😃** |
| **vjeux** | Android has been for a while the primary focus of the React Native team, so it's improved a lot since the last time you tried it. There's one interesting project to take the Virtual DOM and send the draw calls directly to Android framework instead of creating a bunch of nested views. It's still in testing but I hope that we can ship it to the open source version |
| brentvatne | I know I'm not vjeux but what are the issues with RN Android? could you point to a longer form post or elaborate? |
| jhgg | in short - when we tried porting Discord to Android w/ RN - it performed way worse than RN iOS. Tho this was like last year - a lot has changed since then. But it'd be great to just use RN for our Android app instead of having to maintain a native Java app. @mrkcsc could probably comment more. |
| Alx | **Do you think React will remove the requirement of wrapper div tags. In other words will there be a future where we can retrurn a list of keyed components from the render method?** |
| **vjeux** | yes! We do want to. The current status of this is that Fiber lifts this requirement. So we're waiting to see if Fiber is going to work out (it's still very much R&D) and if it does, then we will get support for free |
| **vjeux** | If it doesn't work out, we will implement it on-top of the current implementation |
| R2 | **is your team in facebook planning to release a "well-crafted ui widget" library build on top of react?** |
| **vjeux** | I wish. There are interesting trade-offs in regard to a UI component library. A big reason why our open source libraries are getting traction is because we spend a lot of time and efforts making sure that the API is great and relatively stable and don't break it all the time. Stability is a big concern. |
| **vjeux** | We do have standard UI libraries inside of Facebook but we are way more lax in terms of API guarantees / churning people. The reason we're able to get this is because we have one repo and we can do codebase-wide changes when we change an API / deprecate one. If you hear the term "codemod", this is what lets us do that. |
| **vjeux** | The second big concern is around theming. Most of Facebook UI components look like Facebook. In the past we haven't had strong needs to make it theme agnostic since we only had fb, so it would be extra work to decouple the look and feel part from the functionality. Now that we have different ads product (instagram and fb), different websites like oculus, it may make sense to start this effort. |
| **vjeux** | The short answer though is, no anytime soon unfortunately |
| greweb | **React Native: when JS is shipped with Native code, there is a weak coupling. nothing guarantees they are on the same version (it might break, at runtime). Is there something we could add in RN to make inconsistent JS<>Native fail by design (w/ Red Screen)? (like a version system? how can it be implicit)** |
| **vjeux** | I would love this to happen. In the past we've thought about where the source of truth should live for the API and went back and forth between js and native. But the truth is, we need both. I hope that we can leverage flow to be able to do that |
| vonovak | **RN repo now has over 1000 issues open (even though many are just questions). How does the team decide what is being worked on?** |
| **vjeux** | This is a really really tough issue. The react native project is blowing up way past what we expected and we're overwhelmed by all the activity. Our approach has been to create a title "Core Contributors" and give it to a handful of people in the open source community to help us with the load and we have a public but invite-only group in order to surface high priority issues: https://www.facebook.com/groups/reactnativeoss/ |
| **vjeux** | Having core contributors definitely helped but it's hard to get external people to do triage for a long period of time as it's not a very sexy task. We also heavily rely on https://productpains.com/product/react-native to see the trends of what are the big things we should be working on |
| ptmt | **Do you have a plans to work on the product (like some facebook.com feature) for a while?** |
| **vjeux** | No concrete plans right now. My current focus is learning how to be a manager of the React team. I've been on the job for a month so it's very recent and I hope i'm going to be useful at this |
| benghamine | **Any news on React Conf? Venue? Dates?** |
| **vjeux** | we're doing the conf preparation right now, we need to figure out who is going to organize it at Facebook, where do we do it, what size, when, what do we talk about there, budget... Lots of unanswered questions at this time unfortunately |
| John Tran | **What are your thoughts about Relay with React Native? Would it be your to-go framework of choice?** |
| **vjeux** | When everything has been setup for you, working with Relay is the best thing in the world. You can say I want this, this and this and magically it's there! Now, the setup part is pretty steep, you need to have your data available through graphql, Relay doesn't yet support local data ('Relay 2' will though!), the babel transforms are not trivial to setup... |
| **vjeux** | Good thing is that right now, a big focus of all the teams working on open source projects is around unification. I'm super excited to have create-react-app so that we can give a baseline experience where all those projects just work together with no setup |
| taion | **is it true that the react team uses a klingon promotion policy?** |
| **vjeux** | I didn't know what it was (not a Star Trek fan) "On the other hand you can get a Klingon Promotion, which means that if you kill a superior (or they die by some other means), you gain their rank". Tom Occhino is still alive as far as I know :p |
| juhaelee | **as a manager what percentage of your time is spent on programming?** |
| **vjeux** | When you transition to manager at Facebook, there's a lot of training and I need to figure out how to setup a roadmap for the team, get to know individual people... So I haven't coded much but I'm starting to get more coding time. I've been adding flow to the codebase ( https://github.com/facebook/react/pulls?q=is%3Apr+author%3Avjeux ). 77 files out of 222 (around 1/3) are now using flow |
| **vjeux** | The fact that you can mouse over variables in nuclide and see what type they are and can do variable. and autocomplete with everything is so great |
| **vjeux** | Especially inside of the React codebase where we updated the naming convention several times so if a variable has the type ReactInstance, it can be called element, instance, component, you know what it really is |
| andrewingram | **What percentage of your time is spent explaining the Facebook Patent Grant to people on the internet?** |
| **vjeux** | haha, I've learned way too much things around patents than I would have wanted :p I wish I would live in a world where this wouldn't be a thing but unfortunately this is very very very real for Facebook and we're talking about huge amount of money. So this is a cost of doing business. The great thing is that we have lawyers inside of the open source team that are working on our side and we've been able to open source a bunch of stuff mostly pain free |
| Unowned | **Is React Native today lead by a product design or engineering design approach?** |
| **vjeux** | It's an interesting question. I would say both, but let me explain. React Native is driven by an engineering team inside of the infrastructure org. As such, people in the team have a lot of background around what are the patterns that product engineers struggle with when writing apps (both in React Native, web, iOS, Android...) and the solutions found are engineering solutions. |
| **vjeux** | Now, you cannot build APIs in a vacuum, you need to have products using it and iterating on them. So it's essential to have product teams using those in order to design great APIs. |
| **vjeux** | But, I would flip the question around and tell you that the reason React Native exists (and all our open source libraries) is to make the life of product developers easier. Facebook wouldn't throw so many people at it if no one used it. So the way we work is to put the individual needs of product teams first no matter what. If they don't have a good experience using React Native or if it doesn't solve their problems, the project shouldn't exist at all. |
| **vjeux** | So you really need to have both sides to work together |
| antmdvs | **Have you seen any projects with complex web forms built with React web? I know libs like #redux-form are popular for Redux devs, but the I find the choices a bit paralyzing in the scope of the whole ecosystem: https://github.com/markerikson/redux-ecosystem-links/blob/master/forms.md** |
| **vjeux** | the form situation is interesting. At Facebook we don't have a lot of forms in the traditional sense. The things that function as forms are usually heavily customized like the composer (the box at the top of newsfeed) and React works really well for those. |
| **vjeux** | For pure and simple forms, React is actually very verbose and has a lot of boilerplate associated. One thing I've done myself is to use the new html attributes on forms (required, type="date"...) and make all those components uncontrolled and use the normal html form handling to push changes. |
| **vjeux** | I'm actually surprised that React took off the way it has given that other libs are way better at handling forms which is a major use case on the web. |
| **vjeux** | I haven't used redux-form or any other form library so I can't really comment on them sorry |
| taion | @monastic.panic's react-formal is excellent. he doesn't know it yet, but he'll be adding relay 2 support too, down the road. |
| vonovak | **is there planned support for react native dev-tools?** |
| **vjeux** | React dev tools do work inside of nuclide. We plan to have a lot of developer tools around react native inside of Nuclide to have a great experience. I haven't followed closely what those are so can't really give more information about it right now sorry :X |
| Suttonian | **How do you feel about functional programming? Has it influenced React?** |
| **vjeux** | At school, I was in the R&D lab and my supervisor, Didier Verna, is a big name in the Lisp community and I learned a lot about functional programming from him. I really enjoyed that he had a very down to earth philosophy around it which is: use it when it makes sense but you don't have to do every single thing using pure functional paradigms. |
| **vjeux** | I think this is well reflected inside of React (even though I had very little to do with it) where it makes use of composition, functional ways of iterating over things, works better with immutability but at the same time embraces things about "imperative" world like classes, you don't need to have everything immutable... |
| **vjeux** | I think the best way to frame it is: does it actually solve a problem? If yes, are the trade-offs it introduces worth it? |
| Unowned | Great Response 👍 |
| **vjeux** | Jordan Walke who "invented" React is currently working on Reason https://facebook.github.io/reason/ which is based on ocaml which is a very functional language but also lets you write imperative mutations if you want to. They transpile to js and are working on react bindings fyi |
| hkjorgensen | **Any plans on changing the current release workflow where FB engineers build/iterate for days/weeks/months, then release it via the public GitHub repo. You lose interesting information and communication for people who want to contribute. I think this discourages contributions to the codebase, but that could also be your goal 😉** |
| hkjorgensen | I also understand that you don't want to show something too early, but would it possible to expose a "canary" type branch to the community so it can prepare for upcoming changes? |
| **vjeux** | For React, all development happens on Github and we import master to fb every week-ish. |
| **vjeux** | For React Native, we have a folder inside of fb codebase that is synced commit by commit as soon as the commit lands, so we don't really build and iterate for days/weeks/months in closed doors. We are sometimes doing this for experimental and larger changes (like the Android view system I talked about earlier) mostly in order not to churn the community if we decide to drop it down the line. There's a real cost to that. |
| **vjeux** | My big theory on this is that we shouldn't have to chose where the source of truth lives (between fb or github) and we should make both flows work well. We want fb engineers to be able to commit code without being aware that it's a github project and want to have open source people contribute to it without knowing it's mirrored on fb. |
| **vjeux** | The current system with react native where commits are synced all the time and the only thing that changes for github contributors is that the way to get it landed is to have the "admin" write @facebook-github-bot shipit instead of clicking the merge button is a good trade-off. |
| Aweary | **what do you feel are the main painpoints for new (or prospective) contributors to React, and how do you feel those can be addressed?** |
| **vjeux** | I think that you have more insights on this question than I do as you've done an excellent job at helping out with managing the repo lately 😃 |
| Aweary | 😃 thanks! Always looking for more perspective to improve. |
| cpojer | man all those answers are great. Fantastic responses @vjeux  🎉 |
| Aweary | **a follow up to @hkjorgensen's question, do you have any insight into why Relay's release process for Relay 2 diverges from React and React Native, in that there is no public tracker for the release?** |
| andrewingram | **Facebook's approach to Open Source has been touched on already. But one thing i've found difficult to get use to (probably moreso on the GraphQL and Relay side of things) is the tendency to deliver big announcements at conferences/meetups, rather than on the web itself (blog posts, github issues etc). Is this a deliberate approach, or something that's just ended up happening? I think it creates the perception of a lot of things happening behind the scenes (Relay 2's changes are huge) without much community input.** |
| andrewingram | oh same-ish question :p |
| **vjeux** | This is a great question! The way we've always worked so far is to build projects internally and let the internal competition figure out which projects do and don't succeed and then open source them. We haven't in the past taken much community input early on in the process because there was no community around those projects. Now that there are, we should re-evaluate our ways. |
| **vjeux** | For the big announcement-style of releases, this is something that has bothered me a lot and I am not a big fan of them. The issue is that they are actually the biggest driver of conference attendance. If you organize a conference and release something shiny, then people will be excited and want to go there. We've seen this first hand with reactjs conf where we announced react-native and graphql/relay even though no code was available. |
| **vjeux** | What we're trying to do is to work business as usual and if we are ready to talk about something, find the nearest conference that happens and actually talk about it there. This way it doesn't put too much pressure on the team to have to release on this exact time of the year and it also gives a round of press around the conference. |
| **vjeux** | I hope it helps understanding what's going on |
| **vjeux** | Also, at Facebook we're usually really bad at setting hard deadlines to do something. Having the pressure of a conference which the date cannot be changed is a good driver for the team to focus 😃 |
| ReAn | **What happens if developers actually use the DONT_USE_THIS_OR_YOU_WILL_BE_FIRED constants?** |
| **vjeux** | their code will likely not be accepted during diff review 😃 We have many layers of deterrent for apis we don't want used such as normal code reviews, lint rules, making the variable name scary, build errors... We use a combination of them based on how bad it is to have that code exist. |
| **vjeux** | I highly recommend reading the bunny theory of code by nzakas: https://www.nczonline.net/blog/2015/05/14/the-bunny-theory-of-code/ |
| **vjeux** | It basically says that once you have a line of code written, it's going to be duplicated and altered. So we need to find ways to limit that from spreading too much in different ways 😃 |
| antmdvs | **How do the React, Relay and GraphQL teams communicate? How do you all ensure parity with what each other is doing?** |
| **vjeux** | we literally sit next to each others, go to lunch together... We also have shared Facebook groups where we communicate extensively |
| **vjeux** | The managers also all report to the same manager so when doing roadmapping it's easier than when you are spread across organizations |
| **vjeux** | (maybe one more question? :)) |
| taion | why does graphql sit with react and relay? it seems quite different |
| **vjeux** | We are part of an organization called "Product Infrastructure" which contains React, Relay, Flow, all our core components on all platforms, GraphQL, Reason, React Native and I'm probably missing others. Our goal is to make sure that product engineers at Facebook can be productive and it turns out that the data layer and ui layers are very tied together |
| andrewingram | because the team loves Lee's bow ties? |
| **vjeux** | @andrewingram also! |
| **vjeux** | (Also, I'm not yet responsible for the org chart so this is mostly a guess :P) |
| dw | **thank you for your Q&A.What would be your recommendation if I wanted to leverage sass within JS/React?   Best way to provide dynamic styles?** |
| dw | without having to revert to inline styles |
| **vjeux** | I've never actually used Sass myself so I'm not familiar with the best practices. What I found worked well with React, and which we encourage with create-react-app, is for each component to have its own css file and have a unique name for each class. |
| **vjeux** | If you have a component called Button, then inside you do <div class="Button-pressed"> and have a Button.css file which contains .Button-pressed. And limit as much as possible the fancy use of css features and stick with single class rules |
| **vjeux** | If you need a style do be dynamic, you can do className={joinClasses({'Button': true, 'Button-pressed: this.props.isPressed})} |
| dw | right, but I guess the defined css is still static |
| dw | I was looking at JSS and somebody mentioned glamor |
| **vjeux** | If you need something dynamic, I would recommend using inline styles for those 😃 |
| MacKentoch | **React Naitve:  Is there something plan to improve RN upgrade (when having assets, configs...)? Right now I still have to init a new project and apply manually but it's painful... Other non technical question: why Vjeux as nickname since something like "vieux jeux"?** |
| **vjeux** | I'm super excited about this project: https://twitter.com/ncuillery/status/773522806034366464 I hope it'll spread and we can merge the ideas in the main repo. No current plans right now but we know it's a pain point. |
| **vjeux** | I was 13 and needed a nick name for counter strike. I said, it's a video game which is "jeux videos" in French. I said, let's swap the two words "videosjeux" and only keep the first character "vjeux". It basically means "vgames" if you translate it literally. I kept it since then :p |
| **vjeux** | I've never had anyone namesquat it before which is pretty crazy for a 5 characters name! |
| taion | okay, thank you very much to @vjeux for being our Q&A guest today |
| **vjeux** | @taion thanks a lot for organizing this, it's was a lot of fun. I hope that I provided insightful answers and it was interesting! |
| taion | all credit there goes to @Gabe 😄 |
| antmdvs | thanks, @vjeux! |
| MacKentoch | thanks @vjeux |
| Mrparkers | Thanks @vjeux |
| taion | okay, we're going to be locking down the channel again |
| benghamine | Thanks @vjeux, @taion, and @Gabe! Everyone, i've created a transtipt here: https://medium.com/real-world-react/q-a-with-christopher-chedeau-vjeux-from-facebook-9e5c4305e33d#.lrhppk6fx |
| hkjorgensen | thanks @vjeux |
| taion | the next Q&A scheduled is with @ryanflorence at 11:30 PDT on september 29th |
| taion | have a great day, everyone, and thank you again to @vjeux |
| vcarl | thanks!! great answers |
