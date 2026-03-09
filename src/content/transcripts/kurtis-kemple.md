---
title: Kurtis Kemple
date: 2017-10-12
time: 1-2pm PT / 8-9PM GMT
location: Q&A Channel Reactiflux
description: "Tech lead on the UI team [@Major League Soccer](https://twitter.com/MLS). Organizer of [@NYCGraphQL](https://twitter.com/NYCGraphQL)."
people: "[@kurtiskemple](https://twitter.com/kurtiskemple)"
---

## Tech lead on the UI team @Major League Soccer. Organizer of @NYCGraphQL.

<a name="im-lot-like-successful-developer" href="#im-lot-like-successful-developer">#</a> **Q:** I'm a lot like you -- a successful developer who is a high school dropout. I'm quite passionate about explaining to those interested in the industry that a college degree is not required, but I receive a lot of pushback. Do you agree that for motivated individuals capable of proving themselves in interview situations, the opportunities for success are out there? Have you faced discrimination stemming from your perceived lack of education? Thanks. - connor

**A:** Great question @connor! I have definitely had situations where it has held me back and it took a long time but I have since realized that if the interview process is very CS heavy and the job does not require that knowledge its a red flag about the company and I move on, it can be tough when you need a job but I like interviews that align with daily work.

---

<a name="big-soccer-fan-player-personally" href="#big-soccer-fan-player-personally">#</a> **Q:** How big of a soccer fan / player are you personally? What's your favorite MLS team? - javidjamae

**A:** I get that a lot! Fave team is DC United because I was born there, but I actually don't love soccer! I love delivering amazing experiences to soccer fans :wink:

---

<a name="use-graphql-prompted-switch-friesfirst" href="#use-graphql-prompted-switch-friesfirst">#</a> **Q:** What did you use before GraphQL and what prompted the switch? - friesfirst

**A:** I used REST and due to working in data heavy environments we ALWAYS ended up doing two things 1) batching queries from client via post (which kills many benefits of REST) and 2) building an API gateway per client to meet the proper data needs and data structure, GraphQL gives both to you.

---

<a name="class_name-classname-kittenswolf" href="#class_name-classname-kittenswolf">#</a> **Q:** `class_name` or `className`? - kittenswolf

**A:** StyleSheet.create() for life! :joy:

---

<a name="favorite-antidepressant-think-help-manage" href="#favorite-antidepressant-think-help-manage">#</a> **Q:** What is your favorite anti-depressant? Do you think they help? How do you manage? - cj3kim

**A:** Weed :leaves:. I don't like prescription meds. Not advising against them though!! Just for me personally, I found a natural remedy that works, use what works.

(editor's note: Kurt is not a doctor, this is not medical advice. If you're feeling depressed, seek professional advice, don't self-medicate.)

---

<a name="favorite-unit-testing-tools-react" href="#favorite-unit-testing-tools-react">#</a> **Q:** Favorite unit testing tools for React? Snapshots or no snapshots? - javidjamae

**A:** Snapshots are amazing for anything serializable! API responses, static component state, GraphQL schemas, etc, but still do some integration and E2E with Jest/Enzyme, etc.

---

<a name="share-specific-situation-graphql-useful" href="#share-specific-situation-graphql-useful">#</a> **Q:** Can you share a specific situation where GraphQL was very useful for MBL? - Wes

**A:** Yeah! We have lots of data from different sources that we next to each other! This article explains it really well https://labs.mlssoccer.com/implementing-GraphQL-at-major-league-soccer-ff0a002b20ca

---

<a name="cases-graphql-definitely-appropriate-friesfirst" href="#cases-graphql-definitely-appropriate-friesfirst">#</a> **Q:** What are some cases where GraphQL is definitely not appropriate? - friesfirst

**A:** I'm honestly trying to figure that out myself!! So far it's been all that we need, biggest issue is you need to be prepared to build what you need. The community is very young.

---

<a name="whats-toughest-part-organizing-meetup" href="#whats-toughest-part-organizing-meetup">#</a> **Q:** What's been the toughest part about organizing a meetup? - mplis

**A:** Just finding time! It's time consuming to line up speakers and hosts so recruiting help was a big win, when I first started didn't know what to expect but with the interest I really want it to be a great meetup so I have gotten some help.

---

<a name="hi-sure-really-fit-im" href="#hi-sure-really-fit-im">#</a> **Q:** Hi, not sure this does really fit here. I'm a 4th year IT student and I feel like I can't do anything, they're telling us we'll be working in 2 years but... I feel like we learn nothing at school. If I try to start my own project, I kind of drop out because I feel like I can't do it or lack the knowledge or motivation I guess. Any idea how to improve that? - Victor

**A:** I totally get where you are coming from! It can be tough to find the time and or motivation to continue to attempt something you barely have time to do, I would advice to try out something like Free Code Camp that has an amazing community and learn at your own pace tutorials.

---

<a name="hi-kurt-work-peggy-rayzis" href="#hi-kurt-work-peggy-rayzis">#</a> **Q:** Hi Kurt, do you work with Peggy Rayzis? I heard her interviewed on React Native Radio podcast and thought the data visualization stuff being worked on at MLS sounded really interesting. How has the experience been using Victory charts in React native? - ChadMorrow

**A:** I did work with Peggy! We were the first two on the internal UI team, she just left for Apollo and we worked together on the victory stuff, it's been fantastic but the lib is very young so you have to be willing to add/fix what you need but the Formidable crew is great and easy to work with.

Android has the most issues tbh

---

<a name="suggestions-testing-graphql-front-end" href="#suggestions-testing-graphql-front-end">#</a> **Q:** Any suggestions for testing GraphQL? Front end only, backend only, actual integration between FE & BE? - stantoncbradley

**A:** Great question! I would test it all! Jest snapshots for client query changes, could actually dif schema too, and then we use jest to test our resolvers. This video has more! Https://www.youtube.com/watch?v=tetUyMqgs6I&list=PLlSGB7S33fmmIVo7SURSssKHXfh3G3ed3

---

<a name="kinds-discussions-outreach-similar-industries" href="#kinds-discussions-outreach-similar-industries">#</a> **Q:** Do you have any kinds of discussions or outreach to other similar industries at different companies? For instance, has the Fantasy Premier League office ever contacted you about utilizing GraphQL to their advantage? - kylemh

**A:** Thanks for the kind words and we haven't exposed any APIs or done any cross league dev work, but we do plan to open some APIs in the future, as well as some data visualization tools for MLS statistics.

---

<a name="aspects-graphql-non-standard-implementations" href="#aspects-graphql-non-standard-implementations">#</a> **Q:** Some aspects of GraphQL are non standard implementations (such as query batching from Apollo), do you think that's a good idea or does it mess things up? - Wes

**A:** I think what they are doing is fine, they are making GraphQL easier to use, but they don't break the GraphQL spec as in my application behaves as expected, if we removed Apollo we still have same schema, resolvers, etc.

---

<a name="keep-hearing-graphql-lot-never" href="#keep-hearing-graphql-lot-never">#</a> **Q:** I keep hearing about GraphQL a lot but never got time to check it out. How will you explain what GraphQL is to a React-native developer. How is it useful to me, where does it fit? I seriously have no idea whether it is for front-end people or back-end people or what the hype it is at all? P.S: Where can I get that cool GraphQL logo sticker, I just love adding them to my laptop whether I use that tech or not, it isn't available in most of the shops here :joy: :laughing: - dino_coder

**A:** Great question! I like to think of GraphQL as a communication tool, in that your front end has needs for data and your backend has needs for how data is requested and GraphQL allows any client to request EXACLTY what data it needs because they speak the exact same language, that may not be a great summary, sorry!

---

<a name="graphql-room-improvement-friesfirst" href="#graphql-room-improvement-friesfirst">#</a> **Q:** Where does GraphQL have most room for improvement? - friesfirst

**A:** Definitely in the middleware game! Its very lacking in regards to completeness, auth, logging, statsd, all the things that REST has solved need work and to be figured out, and it also needs to be figured out what is a GraphQL problem and what is an app problem.

It will be awhile before the industry lands on best practices.

---

<a name="use-graphql-already-built-server" href="#use-graphql-already-built-server">#</a> **Q:** Can I use GraphQL with an already built server? Or is there anything we need to do at server side? - dino_coder

**A:** We have REST and GraphQL running on same server internally at MLS. No need to do it all over, which means you can build it out incrementally and based on priority, your PMs will love it :wink:

---

<a name="follow-plans-open-apis-publish" href="#follow-plans-open-apis-publish">#</a> **Q:** As a follow up to your plans to open up APIs and publish data visualization tools, do you have any plans to make some work open source? - kylemh

**A:** We do have some tools that we want to OS, like a tool that converts Swagger API docs JSON to GraphQL schema and some other stuff. Since a lot is business logic related its hard, but I also OS things like GraphQL Auth and other tools. And I write as much as I can on Medium as well.

https://github.com/kkemple/GraphQL-auth

https://medium.com/@kurtiskemple/

---

<a name="best-practices-solidify-see-graphql" href="#best-practices-solidify-see-graphql">#</a> **Q:** So as best practices solidify, do you see GraphQL as eventually replacing REST? Or both running together - friesfirst

**A:** I don't think REST is going anywhere, I mean technically GraphQL is just POST requests, plus there is TONS of infra built around REST.

---

<a name="would-like-seeing-zlatan-ibrahmovic" href="#would-like-seeing-zlatan-ibrahmovic">#</a> **Q:** Would you like seeing Zlatan Ibrahmovic playing in MLS sooner for David Beckham's franchise? https://en.wikipedia.org/wiki/Zlatan_Ibrahimovi%C4%87 - dino_coder

**A:** I actually don't know who that is :disappointed:

---

<a name="well-kind-follow-discussion-im" href="#well-kind-follow-discussion-im">#</a> **Q:** Well kind of a follow up on the discussion here, I'm able to create small React apps but every time I face something I don't know, I stop. Like this time is about making http requests to get a json file, I tend to think "This is too complicated, I'm going to do it later" then proceed to do nothing for the next 4 weeks. (even though I realize it's not THAT complicated ... I overthink I guess) - Victor

**A:** It sounds like me lol, pure procrastinator, instead of just fetching a file, try to build something you have interest in, otherwise idk, could focus on learning ways to combat that issue.

I read A LOT of books to help with communication, depressions, motivation, productivity, etc.

---

<a name="seen-new-graphcool-httpsdocsnextgraphcoolconceptsoverviewwhatisgraphcoolapohpae9ju-think" href="#seen-new-graphcool-httpsdocsnextgraphcoolconceptsoverviewwhatisgraphcoolapohpae9ju-think">#</a> **Q:** Have you seen new GraphCool? (https://docs-next.graph.cool/concepts/overview/what-is-graphcool-apohpae9ju) What do you think of GraphQL as a backend-service and as a developer platform? - Checkmatez

**A:** I think its great! If you are primarily a front end dev or a startup its a great way to get a backend in no time, not to say Graphcool can't handle scale though, it looks amazing, I also like tools like Apollo's launch pad that let you test and build small GraphQL servers for free.

---

<a name="ever-felt-like-quitting-developer" href="#ever-felt-like-quitting-developer">#</a> **Q:** Have you ever felt like quitting as a developer? Like sometimes it feels like this feild is not for me, event though I really like programming. Because of the problems I need to solve and such. - Martin

**A:** Absolutely, sometimes I think about leaving my current job even though I absolutely love it, and thats my imposter syndrome and depression weighing in, all jobs are hard and we have to work harder to create the environment we want, no one will do it for us.

---

<a name="full-stack-dev-combat-burnout" href="#full-stack-dev-combat-burnout">#</a> **Q:** How do I, as a full stack dev, combat burnout in the shadow of a 25mi commute, a long workday, a breakneck sprint velocity, and anxiety/depression? I wrote a medium article that I haven't released yet and it was cathartic to get everything on paper but in the end it didn't provide any answers on how I can fix my situation or adapt and overcome it. I haven't gotten the chance to read your article on depression yet but is there anything you would say to devs like me? - Redmega

**A:** Amazing question! Sounds like we have similar situations, firstly if you can publish that article it may not have given you answers but maybe someone will once they see it, if nothing else you let other people know they are not alone, secondly you HAVE to get some sort of work life balance, try to get a flexible schedule going so commute can be mitigated or if you work late you come in late the next day, if your job won't budge I suggest finding somewhere that will!

---

<a name="im-gonna-read-productivity-project" href="#im-gonna-read-productivity-project">#</a> **Q:** I'm gonna read "The Productivity Project: Proven Ways to Become More Awesome" & "The Power of Habit: Why We Do What We Do in Life and Business" been under the table for a long time ... maybe it'll trigger something ^^ thanks Kurt for the pep talk - Victor

**A:** Glad to be of any help! HBR's top 10 articles on managing yourself is also a gem!

---

<a name="would-say-generally-complex-scale" href="#would-say-generally-complex-scale">#</a> **Q:** Would you say it's generally more complex to scale a GraphQL server rather than a REST server? I know with REST u can cache on requests, but with GraphQL I struggle to see how caching can't be anything but hugely complex. This fear holds me back from using it on anything significant. - ctrlplusb

**A:** really good question! Yeah I wouldn't say harder only different, in REST caching is blackbox, as in your server gives response to cache and cache passes on to client, in GraphQL your app is responsible for caching and will serve all requests to all clients, so it becomes important to cache expensive processes like API requests and DB lookups.

We serve a lot of traffic via GraphQL and find it very performant with in-app caching in place, for that we use dataloader from Facebook.

---

<a name="gain-enough-skills-become-freelancer" href="#gain-enough-skills-become-freelancer">#</a> **Q:** How can I gain enough skills to become a freelancer? I've been trying a lot but whenever I see projects there's always something that I do not know, client's skills requirements are a lot.... - mahaveer

**A:** I haven't done freelance but that rings true of job descriptions for all jobs, when in comes to requirements I apply if I know half, no one knows it all and in fact I don't learn new things anymore unless I need them, I investigate all the time, but learning I reserve for whats in front of me.

Everyone has a bubble of knowledge, sometimes they overlap but no one's bubble is bigger than yours, its just full of different stuff.

---

<a name="going-graphql-summit-slightlytyler" href="#going-graphql-summit-slightlytyler">#</a> **Q:** Are you going to GraphQL Summit? - slightlytyler

**A:** I am not!! I can't make it this year but my lovely co-worker @Jake Dawkins will be there!

You should find him and tell him how bad at GraphQL he is! :joy:

---

<a name="use-backend-node-ruby-elixir" href="#use-backend-node-ruby-elixir">#</a> **Q:** What do you use for backend? Node? Ruby? Elixir? Python? - hisa

**A:** We use node for all of our services and hapijs as the actual web server framework.

---

<a name="prepare-reactjsreactnative-interviewer-would-expect" href="#prepare-reactjsreactnative-interviewer-would-expect">#</a> **Q:** What should I prepare the most for ReactJS/React-Native, if you were the interviewer? And would you expect from me that I would have grasp of all the techs mentioned in the job post? - dino_coder

**A:** Great question, for junior roles I look for component lifecycle method understanding, set state understand, and thats about it.

For senior I would expect a deeper understanding of React, React rendering, context, and for native the differences in layouts and APIs available.

---

<a name="since-mls-uses-universal-components" href="#since-mls-uses-universal-components">#</a> **Q:** Since MLS uses universal components (components that can be used on different platforms like web and native) on different platforms and different projects, how do you test if a change introduced to fill certain need does not break a functionality (logic, UI) in other project? Do you use test automation, or manual testing by project members? - BTM

**A:** That is a great question, generally since we are RN focused and using React native web to replicate it, that is where we see the most issues, so we develop all components on web in storybookjs and we have yet to hit an issue where it worked there and not in native.

As far as testing we use jest for component testing and than a QA engineer User Acceptance Tests it once integrated into app.

---

<a name="two-questions-1-hardest-technical" href="#two-questions-1-hardest-technical">#</a> **Q:** I have two questions. 1. What are the hardest technical challenges you & the team will have to solve for the React native app? 2. Whats your fav emoji? - peggy

**A:** Hey @peggy! Thanks for dropping in!! 1. The biggest problem we face currently is some very advanced gestures to navigate the app, its more like snapchat than a utility and managing the UX is difficult from both a design and tech perspective, and my fave emoji is :pear: and I miss :pear:ing with you on the reg!

---

<a name="since-dont-degree-computer-science" href="#since-dont-degree-computer-science">#</a> **Q:** Since you don't have a degree in computer science (read your article on depression, it was super good!), how did you start learning programming, React and Node in particular? Do you have any good recommendations? - Martin

**A:** I actually used to work a bunch of different jobs like construction, welding, a cook, then I saw a friend writing HTML and refreshing the browser and I saw it update and I was hooked ever since! I started on front end technologies and then added wordpress and other PHP frameworks to my toolbelt, it wasn't until after that I got into node but its a different time now I would recommend starting in JavaScript.

So much going on there and no shortage of jobs. But I like to experiment with other languages because you get good practices and patterns from them.

---

<a name="whats-junior-definition-1-2" href="#whats-junior-definition-1-2">#</a> **Q:** What's your junior definition? <1, <2 years? I love football and working for MLS would definitely be great and fun. How can I apply to MLS tech team. Will Trump stop me from joining you if I am not from USA and if he does will you confront him to get me in your team? - dino_coder

**A:** I consider junior someone with under 3 months work experience, junior to industry I actually hate the term junior. I also hate people don't hire JRs.

We don't currently support remote but it is on the top of my list, however not sure about visa rules with MLS, my twitter DMs are always open so reach out, we don't have any roles right now but I will post on twitter when we do.
