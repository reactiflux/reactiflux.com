---
title: Christoph Nakazawa
date: 2017-07-13
time: 10am-11:30am PDT
location: Q&A Channel Reactiflux
description: "Engineer at Facebook London · Jest · Yarn · RNP"
people: "[@cpojer](https://twitter.com/cpojer)"
---

## Engineer at Facebook London · Jest · Yarn · RNP

**Christoph Nakazawa:** Just to introduce myself, I'm Christoph and I manage the JavaScript Tools team at Facebook London. Currently we work on Yarn, Jest and Metro Bundler which provides the development server and bundling infrastructure for React Native.

Also, @gaearon sits across from me. We stare at each other a lot and joke about React and Jest and how Jest is eventually going to have more downloads one day.

!["Photo of gaearon (Dan Abramov) sitting at his desk opposite Christoph"](https://i.imgur.com/u1FBL2z.jpg)

---

<a name="chance-react-web-react-native" href="#chance-react-web-react-native">#</a> **Q:** Any chance that React Web and React Native will be merged to one project?

**A:** Whether React Native and React will eventually be merged, I don't think that makes sense. There is react and react-dom and react-native. The latter depend on the former. It might make more sense for people to consider react something like react-component or react-core. It allows you to define components and render them to a pluggable target (dom, native, vr, your programmable toilet seat, …).

However, if you think about react-primitives by @lelandrichardson or react-native-web by necolas, I think there are exciting times ahead to bring the two stacks, native and web, closer together. I don't see this as projects merging but rather about converging stacks and sharing large parts of front-end codebases across platforms. If we can standardize on primitives, like Text, View, ListViews etc., we can share more code. I guess one way to see this is that if you can build an iOS and an android app with react-native, why not also enable people to add a web target? Referring back to Leland, he was hinting at that in his talk at react-europe, which I recommend you all to watch: https://www.youtube.com/watch?v=hNwQPJy-XZY – to bring this back to how JS Tools at FB London is concerned with this, we are definitely interested in supporting this use-case from the Metro Bundler side of things :)

---

<a name="npm-5-bringing-improved-download" href="#npm-5-bringing-improved-download">#</a> **Q:** With NPM 5 bringing improved download speeds and a better lockfile, what would you say is the main reason for choosing one over the other?

**A:** I think it's awesome to see so many improvements in the npm package manager. I don't want to be prescriptive about why people should use one tool over the other. Generally, I think it's way more successful when people make these decisions themselves by weighting the trade-offs for their own (business) use-case themselves.

As much as Yarn is concerned, the team around @bestander, @arcanis, @byk and are working towards Yarn 1.0 and the project's page has become my new homepage for the next couple of weeks: https://github.com/yarnpkg/yarn/projects/3 – if you'd like to contribute, @arcanis just posted an article explaining how to build a package manager yesterday: https://yarnpkg.com/blog/2017/07/11/lets-dev-a-package-manager/

At Facebook we analyze how certain projects and teams do every six months, so now is a good time to look back at Yarn: in the last six months we focused on reliability and performance and have made significant improvements in both areas. For Yarn 1.0 specifically, we want to fix all blockers that prevent people from running yarn install properly. Internally at Facebook, we are using a version of yarn check (which we are hoping to open source) that runs in about 100ms with watchman. This means that any time somebody runs a command using JS, we verify that the installed node_modules folder is consistent. This means that no engineer ever runs into a state where something doesn't work because they forgot to run an install. This is awesome. One of my highlights was also the relationship we built with the npm cli team. Sebastian McKenzie spent a lot of time explaining to them why Yarn matters to us and in the end the Kat from the npm cli team sent us a PR that significantly improved performance of Yarn: https://github.com/yarnpkg/yarn/pull/3539

Finally, to explain why we use Yarn at Facebook: it works incredibly well for our use-case. As I said above, we run Yarn for literally any JS command, like when people use Metro Bundler for React Native, when they use Jest or any other tool written in JS. Second, we use the offline mirror feature: we check in every single tgz file into our giant monorepo and can do full offline installs (see https://yarnpkg.com/blog/2016/11/24/offline-mirror/ ). There are a bunch of interesting ways in which we use Yarn and previously we had to write wrapper scripts around npm, which all broke down in different ways. Konstantin actually did a fantastic talk about why we built and why we are using Yarn at f8: https://developers.facebook.com/videos/f8-2017/building-high-quality-javascript-tools/ (skip ahead the first 23 minutes if you don't want to listen to me ;) ).

---

<a name="biggest-improvements-js-tooling-think" href="#biggest-improvements-js-tooling-think">#</a> **Q:** What are the biggest improvements in JS tooling you think the ecosystem still needs? What tools do you dream about existing?

**A:** I think one thing the ecosystem really needs is empathy. There is so much negativity and people believe there is tons of competition going on, when in reality we are just building tools to serve our own use-cases. The philosophy around open source at Facebook, at least on the team I work with, is to build awesome things that work well for Facebook engineers. If they happen to work well for the open source community, then that's great, and we'll open source as much as we can, but we don't necessarily go out of our way to support external use-cases.

This is why I think it's so important to build healthy communities around our open source projects: not only can the community extend the tools we build and make them work for their own use-cases, but also we at Facebook benefit from it. It's very symbiotic and I'm really happy to see how this is going: look at Yarn ( https://github.com/yarnpkg/yarn/pulse ) and Jest ( https://github.com/facebook/jest/graphs/contributors ) and how many contributions they are receiving every month. It's really amazing to see contributions, especially on Yarn, which are described in-depth, well tested and actually help a large amount of users.

So this was more of a meta-answer of what's bad and what is necessary for successful open source projects. In terms of what I'd like to see from a tooling and code perspective, and I said this a couple of months ago, is: consolidation. It's really great to see many people rally behind a project, like Jest, which many people now use for testing, or webpack, which has become the default bundler for pretty much everything web related. That's awesome, but at the same time we do need more competition. Not competition as in Twitter flame-wars, that's unproductive, but more in terms of pushing each other's project forward. There are a bunch of awesome things happening around Ava, another test runner, with projects like concordanceJS ( https://github.com/concordancejs/concordance ) that does diffing on an object level rather than a string level, which is both awesome for assertions in Jest and for printing differences when tests fail. However, I believe it's not enough. At first, you consolidate infrastructure, then you need as many ideas around it as possible to make the whole ecosystem around one tool progress. I think one area where this has worked really well is actually React, or the component model, for that matter. There are now many offsprings, like Preact, Inferno and many frameworks that are inspired by React's component model. There is a lot of research going on in all these projects that also come back to benefit React. We need this for every tool to really push the ecosystem forward.

---

<a name="mocking-almost-everything-jest-way" href="#mocking-almost-everything-jest-way">#</a> **Q:** Why are we mocking almost everything in Jest, is there any way or pattern to follow, In react-native I often see this problem?

**A:** I'm sorry, I don't fully understand the question there. With Jest, mocking is entirely up to you: at what layer and what module boundaries you want to mock things, I recommend you to decide on your own based on your intuition. If you spend enough time writing tests and mocking modules, you'll eventually get really good at it and realize what kind of tests are effective for you and your organization.

---

<a name="environment-reactnative-many-modules-npm" href="#environment-reactnative-many-modules-npm">#</a> **Q:** In environment of react-native, many modules (npm) should be mocking so that it can work, is there any pattern to follow with the subject of mock modules?

**A:** I believe I answered that question. As said, it's mostly up to you and highly dependent on the project you work on and what modules you pull in. There is no generic answer on how much mocking you should or shouldn't do :)

---

<a name="trying-follow-microservices-approach-individuals" href="#trying-follow-microservices-approach-individuals">#</a> **Q:** I am trying to follow microservices approach for individuals modules: Suppose I have basic skeleton of app which includes header, footer & content area. And in content area multiple different modules could take place irrespective on what tech stack it is built upon.

Is there any way to achieve the same?

**A:** I'm not sure! I actually don't know much about microservices and what architecture is best suited for them. From my own experience, I have mostly worked in gigantic monorepos that push everything from master often. That way you have to make sure everything is always on the latest version, which is also awesome: no more versioned dependencies to deal with :) On a more technical level, if you want to build a microservices architecture with different tech stacks, then there isn't anything that should stop you, as long as you define a protocol between them so they can talk to each other (like, with JSON or GraphQL).

---

<a name="started-using-haul-instead-metro" href="#started-using-haul-instead-metro">#</a> **Q:** We started using Haul instead of Metro in my team. We're using Typescript, and Metro doesn't appear to support pluggable loaders. Can we expect that kind of support in the future? What timeframe?

**A:** Metro Bundler should absolutely support your use-case. In fact, my friend Orta contributed this change to Metro Bundler. He is somehow hiding from this Q&A for some reason but I recommend you to ping him here: https://twitter.com/orta

Metro Bundler actually supports customization, although in a non-obvious way: you can specify any transformer you want and it will compile any code (css, TypeScript, JS, etc.). We should probably document this better :)

---

<a name="one-sore-points-ive-react" href="#one-sore-points-ive-react">#</a> **Q:** One of the sore points I’ve had with React Native is managing nested navigation structures and deep linking across different navigation stacks. I’ve been using https://reactnavigation.org/docs but will run into scenarios where I need to think about the structure in order to pass my props around appropriately. Is this something you’ve experimented with and does it even relate to JS bundling? Do you have any tips or insight into how nested navigation plays into performance?

**A:** Navigation is certainly an interesting problem that I didn't have enough time to investigate. My day to day job now is more about people than code, so I'm a little bit behind. However, I do know that it's something that's on top of people's mind and that there is generally no accepted way to do it, which just leads me to believe that it's very very hard and the right solution still has to be found – I encourage you to keep investigating ;)

From a bundling perspective, this is obviously interesting. On the web, we ship a partial app down and when you go to a new route, we download the rest to render that route. On mobile, we ship the entire JavaScript bundle with the app, to the app store. When you navigate to a new route, you already have all the code and you can render it immediately. However, you could also do bundle splitting on native and dynamically download code for certain routes when navigating to them (assuming that's allowed on the platform). If not, you can ship many bundles with your app and defer loading modules for other routes until you navigate to them. It depends on what you are optimizing for, it's all about trade-offs.

---

<a name="month-opensourcing-metro-bundler-benefits" href="#month-opensourcing-metro-bundler-benefits">#</a> **Q:** A month after open-sourcing Metro bundler, what are the benefits, pitfalls and plans for future?

**A:** That's certainly interesting, thanks for asking. I really love this project and splitting it out of react-native was more about giving the project an identify besides react-native than about anything else. It was hard for our team to talk about what we do: "I work on react-native.. packager" is long and confusing to people. We also couldn't keep up with pull requests or issues on the react-native repo: it's just such a gigantic repo and only a small part owned by the JS Tools team in London that we simply couldn't keep up with community feedback. We'd really like to support the React Native community better and now we have a dedicated place to do so. If you think Metro Bundler could be better, please send us a PR and we'll review it.

Regarding it's future, we are currently rolling out a new integration with Buck and Metro Bundler at Facebook that hasn't been open sourced yet, which should help with build speed for production bundles. After that we have a bunch of exciting ideas, like how do we make reload speed scale much better when a single file changes on a large codebase. Metro Bundler is all about building a highly-performant and scalable bundler. Once our plans are more concrete, I'm happy to share more with you on the metro-bundler repo.

---

<a name="build-complex-feed-flatlist-like" href="#build-complex-feed-flatlist-like">#</a> **Q:** Can we build a complex feed with FlatList like Instagram? Any recommendations or example? I need to build a feed that have many GIFs and images and videos later...

**A:** I know FlatList is pretty new still and I haven't gotten a chance to use them, but I do believe it is going to replace ListView. I encourage you to try building a feed, see how it goes, and report back to the react-native team with your success story or the blockers on why you couldn't make it work :)

---

<a name="reactvrs-know-updated-seems-like" href="#reactvrs-know-updated-seems-like">#</a> **Q:** React-VR's - just to know when it will be more updated. It seems like its been forgotten

**A:** I haven't been up-to-date on the project, but last I heard the team is working on it and adopting it within Oculus. It's a super exciting project!

---

<a name="much-freedom-chose-projects-work" href="#much-freedom-chose-projects-work">#</a> **Q:** How much freedom to chose projects to work on do you guys have at FB? Are you guys tied to specific project or is jumping to another one an option?

**A:** Great question! We actually have a lot of freedom at Facebook. Engineers can essentially work on whatever they want, granted that it has potential to impact the business. If an engineer comes up with a sound idea, chances are they'll be able to work on it for a while until it fails or succeeds. The upside is that people are much more motivated to deliver if they pursue their own ideas, which usually means better results. Now, of course there are some limits: if you repeatedly go after things that fail, that's probably not great. And teams always have a mission, so doing work on certain projects should probably stay within that team mission. That being said, if you are successful at Facebook, it's pretty easy to switch teams. We don't do interviews when you switch from one team to another and we have a program called "hackamonths" that engineers are actively encouraged to participate in: basically you can join another team for a month, work on a project that excites you and then at the end you can make a decision whether you want to join the new team or stick with your old team. This is a great way to make a career change or get some valuable experience on what it's like to work on another team :)

---

<a name="im-curious-using-react-native" href="#im-curious-using-react-native">#</a> **Q:** I'm curious, for using React Native within an existing native mobile project, what approaches do you use to let the native and JS teams continue to work in parallel and still easily integrate their code / build / test / etc. Are there tools you like to use to do that? Are there patterns you follow that you have found useful?

**A:** That question is hard for me to answer, because I don't know what the teams work on. Quip recently published a blog post about how they don't have platform specific teams, which I think works really well with adopting react-native, and incidentally is also the model for teams we have at Facebook: https://quip.com/blog/quip-engineering-team-structure

The idea is that you have teams structured around products like news feed, groups and pages rather than teams structured around platforms: web, android and ios. This makes it so that people who are experts on one product go and implement the same feature on every platform. It has worked really well for us at Facebook over the years, and also works well with adopting React Native: web engineers can freely jump between web and native platforms and implement the same products and features across multiple stacks.

---

**A:** I would like to ask, earlier this year there was a question on the github repository for Jest about allowing customized names for the mocks folder. You then responded saying that for a purely subjective reason you were not going to work on that. Have your opinions changed since then?

<a name="hah-pointed-question-recall-conversation" href="#hah-pointed-question-recall-conversation">#</a> **Q:** Hah, very pointed question. I do recall that conversation and I haven't changed my mind on it. If the community can send a fully tested PR that just works, I'm happy to merge it, but personally there is no reason for me to invest time into making this customizable. I know people feel really strongly about their folder structure, and I'm trying to be empathetic, but at the end of the day it's not the reason why your business fails or succeeds. I'm generally not interested in bikeshedding over this stuff. I also believe in the value in adopting the same standards across projects. For example with Jest's Multi Project Runner ( http://facebook.github.io/jest/blog/2017/05/06/jest-20-delightful-testing-multi-project-runner.html ) you can run one instance of Jest across multiple projects. If you merge them all into a single repo and they have wildly different configurations, that will work, but it will be much more confusing in the end. Similarly, when you know Jest and you join a company and they use a completely different set of configuration, it'll take time to get used to it. That's all time spent doing basically nothing.

---

<a name="eventual-goal-reacttestrenderer-provide-functionality" href="#eventual-goal-reacttestrenderer-provide-functionality">#</a> **Q:** Is it an eventual goal for react-test-renderer to provide functionality similiar to enzyme?

**A:** react-test-render should absolutely have more features and we have an experimental version of it that we use at Facebook, but I cannot comment on the plans of the React team and don't want to make assumptions about their roadmap. However, we do need a way to control React Native components in tests, whether it is for snapshot tests or not. I recommend reaching out to Alex ( https://twitter.com/alex_frantic?lang=en ) and update you on the state of the react-test-renderer. He's been playing around with an extended version for a while.

---

<a name="earlier-said-tools-youve-built" href="#earlier-said-tools-youve-built">#</a> **Q:** Earlier you had said that the tools you've built were to serve your own use cases, but a ton of these tools have been adopted by the community. So, now you have bugs, feature requests, etc. flowing in from the outside and you have to spend time on these. Do you feel like this is going to reach critical mass as the number of FB's open source tools grows? Do you have a strategy for managing this? A good example is Relay, as Relay is a beast and hasn't gotten big traction yet.

**A:** Oh yeah, man, that's absolutely a problem. Especially with people that feel entitled that the open source project you are giving away for free has to be maintained day and night and that you are responsible for fixing issues they run into, not them.

For Jest, we've been running the project more strict recently: I tend to say "no" more often and shut people down for PRs or feature requests that shouldn't be part of the project. This is often tough and it feels as if the lines are drawn arbitrarily. For projects like Yarn that are super active, we have started to do "bug triage" sessions, which worked really well to reduce the number of issues.

Generally though, even if there is a large number of issues, there is nothing that forces us as maintainers to look at them and quite often we just don't have time to look at everything, even if we want to. I wish there was a way to split GitHub's issue tracker into an approved list of issues vs. a list of issues that come in. Finally, what works the best, is to find ways to align incentives between the business needs and the open source needs. For example, if you need to build a specific API then it makes sense to skim over issues to see how many people could benefit from it and let that influence your design. Sometimes you can solve many use-cases with one very smart technical decision and it requires a lot of creativity to find those.

---

<a name="fun-working-facebook-workhardplayhard-laid" href="#fun-working-facebook-workhardplayhard-laid">#</a> **Q:** How fun is working at Facebook? Is it work-hard-play-hard or is it more laid back?

**A:** Oh man, Facebook is a ton of fun. I started an internship here more than six years ago and never left. It's pretty crazy sometimes to think about how long that's been – back then Facebook didn't really have an open source program and our JavaScript stack was very different in the times before React. I remember back then, in my first week, I realized that the unit test framework wasn't great so as an intern I ended up rewriting it. It seems quite logical that through Relay and codemods I eventually landed back on JavaScript testing and now to work on JavaScript tools.

In terms of whether it's tough or laid back: that's entirely up to you. There are all kinds of people at Facebook and generally the only pressure you'll feel is the one you put on yourself. For me personally, that means I'm constantly under pressure because I want to make sure everybody around me is happy :) Especially as an engineering manager, helping people grow is a ton of hard work but is also really rewarding when it works out. To me, nothing is more exciting than that.

---

<a name="fiber-almost-ready-httpisfiberreadyyetcom-4" href="#fiber-almost-ready-httpisfiberreadyyetcom-4">#</a> **Q:** Fiber is almost ready (http://isfiberreadyyet.com/), only 4 warnings left to fix. Seems, it's almost ready. When it will be fully finished?

**A:** To answer when Fiber is released, and to tie it back into an answer I gave earlier, it's probably sometime between March 13 2019 and September 18 2037. I don't know anything more than that.

---

<a name="building-libraries-fb-common-different" href="#building-libraries-fb-common-different">#</a> **Q:** How you are building libraries in FB to be common between different projects?

**A:** At Facebook we have a giganatic monorepo with all the code in it. Everything is always on master. We also don't have strict ownership of components/frameworks/library: anybody can make any change to any code, required the code is reviewed by another employee at Facebook. This leads to code sharing happening naturally!

We also use our own custom module resolution system in JavaScript: instead of relative paths, every single file is part of a global namespace. I can pretty easily require('UFI') (what we call "Universal Feedback Interface", the comment system on Facebook) and require('AdsPowerEditor') (what we call our ads platform) and hook the two up together on a new site on facebook.com. You can assume how tightly connected all of our JavaScript modules are but generally results in less duplicated code and more sharing :)

---

<a name="take-mono-repo-approach-facebook" href="#take-mono-repo-approach-facebook">#</a> **Q:** You take a mono repo approach for the facebook app. given the choice, would you design it like that again? do you think it has an effect on how effectively you can onboard new developers?

**A:** Oh, great question! I think if I were to leave Facebook and start over, it's probably the approach I would take. I even chose this for Jest: it now consists of about 30 packages (see https://github.com/facebook/jest ). As far as onboarding is concerned, if you have effective tools to navigate the codebase (like.. a fast version of grep), it's generally much easier to find what you are looking for in a monorepo rather than cloning 30 distinct repos with different tech stacks. Also, with monorepos you end up setting everything up only once rather than for every project. For example, Jest used to be really hard to set up. It sucked and we had no idea about it because at Facebook nobody ever has to go in and set up a tool from scratch. Thankfully we realized this and made Jest a zero-configuration platform. This was a totally shameless plug for Jest and I don't feel bad about it. Next question!

---

<a name="working-local-startup-okay-although" href="#working-local-startup-okay-although">#</a> **Q:** I am working at a local startup and they are doing okay now! Although they are doing okay, I don't think they can afford to have a Senior developer. The problem is that our code right is not being TDD'd BDD'd, reviewed, it's inconsistent and I don't know how this is going to effect me. I mean, I am only 20, with under a year of experience, but sometimes it's like the blind leading the blind. How important is it to have a senior mentor/developer on a team?

What would you do in my case? Keep programming to the best of my abilities get Stackover/Reactiflux to help until they can afford a senior OR...?

**A:** You are working at a startup so I'm hoping you don't have a lot of structure in your organization. I would recommend you not to focus so much on who is senior and who isn't, but rather on what kind of change you'd like to affect in the startup itself to make everybody more efficient. Keep pushing on the things you believe in, but listen to others and let them convince you when you aren't right. One thing I've heard that many people do is to frequently (weekly?) get together and discuss certain topics in a team setting and make a decision on how to move forward. How about scheduling a meeting and discussing best practices around testing? This will work best if you can point out a number of preventable issues that affected your users, for example. In any way, don't let age hold you back from trying to change the world.

---

<a name="stay-top-game-resources-learning" href="#stay-top-game-resources-learning">#</a> **Q:** How do you stay on top of your game? What resources or learning techniquest work for you best, and you'd recommend?

**A:** Oh, wow, it's certainly hard to stay up to date. For one, I do a lot of interviewing for Facebook, which actually gives me quite a broad overview of the world and companies out there, so that works well. Technically, there are a number of things: I try to be active in code reviews (probably a bit too active if you ask the team I work with ;) ) so I have enough technical context when I discuss things with the team and other teams. Personally, I've experienced nothing worse than a manager that cannot discuss things on a technical level, so I'm worried I'll end up like that one day, which pushes me even more to stay up to date.

Recently I took a look at CSS Grid and was quite amazed at how far CSS has come. I spent days of my life trying to position things perfectly about 10 years ago and now these new standards exist and we can build on top of those. So yeah, I try to stay up to date on what happens in the world around me with new standards, discussions and blog posts.

Related to coding, I try to write code when I get free time. For example, Jest's multi project runner (MPR) was something @aaron.abramov and I had discussed for a year and when Jest was finally in the right place, the perfect architecture for that solution just hit me when I had a stretch of five hours of time in a remote office while I was traveling. I spent those five hours coding intensively and had the basic structure of the MPR running. So yeah, whenever I have time, I try to stay up to date with the Java script. :P

---

<a name="things-wished-someone-told-came" href="#things-wished-someone-told-came">#</a> **Q:** What are some things you wished someone told you when you came on as an Engineering Manager?

**A:** What do I wish somebody told me when switching to engineering manager? Oh man, so much! I was quite naive to be honest, and thought this job is super easy, probably because some of my previous managers made it look so easy. However, it turned out to be harder than I ever imagined. There is so much shit to deal with every day that sometimes it feels like you are drowning.

I think one of the best advice came from my current manager, Adam Wolff: after a couple of months of me being an EM, I was still doubting myself a lot. He had a pretty clear conversation with me in which he told me to be more confident. I went on a vacation for a couple of weeks and when I came back I just started to fake more confidence, which really helped me settle into this role.

Finally, I think one thing that took me a long time to realize is that engineering management is a completely different job compared to engineering, which requires a ton of new skills. It's not just engineering plus a few other things, it's really completely different. It feels a lot like when I first came into Facebook as a junior engineer, not knowing anything. So, regardless of how much you know as an engineer, and while you can certainly draw from that experience, switching to engineering management definitely forced me to reevaluate my assumptions on a daily basis. It's a great experience though, and I'm lucky to work with the team I work with every day :)

---

<a name="pick-cssinjs-solution-go" href="#pick-cssinjs-solution-go">#</a> **Q:** Pick a css-in-js solution - GO!

**A:** As much as css-in-js is concerned, I recommend to just listen to Sunil Pai. I think he's seen the truth.
