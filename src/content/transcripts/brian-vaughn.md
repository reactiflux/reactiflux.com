---
title: Brian Vaughn
date: 2017-05-11
time: 1-2:30pm PT / 8-9:30PM GMT
location: Q&A Channel Reactiflux
description: "React.js Core Team at Facebook. Creator of [react-virtualized](https://github.com/bvaughn/react-virtualized)"
people: "[@brian_d_vaughn](https://twitter.com/brian_d_vaughn)"
---

## React.js Core Team at Facebook. Creator of [react-virtualized](https://github.com/bvaughn/react-virtualized)

<a name="hi-brian-tell-us-facebook" href="#hi-brian-tell-us-facebook">#</a> **Q:** Hi Brian! Can you tell us more on how Facebook handles complex forms internally with React

**A:** I haven't worked with forms internally at Facebook, so take what I say with a grain of salt.

However, I believe our most forms-heavy application would be the Ads Manager app, which uses a Flux architecture. To my knowledge we don't use a forms-abstraction library or anything, just Flux.

The topic of form is a pretty common question. We think this isn't because forms are necessarily harder in React, just that most other things are made significantly easier with React and forms are...still just forms. :)

---

<a name="maybe-specific-hoping-get-insights" href="#maybe-specific-hoping-get-insights">#</a> **Q:** Maybe to specific, but hoping to get some insights 'Does facebook has a .js with global variables to use..?'

**A:** I'm not sure I completely understand the question about global variables. But no, there is no single globals file that we use. Facebook uses a variety of tools for sharing configuration. Sometimes congiguration is stored in a standalone module and required during build time. Sometimes it's loaded by our configuration framework at runtime (eg passed from PHP to JS).

---

<a name="read-configuration-modules" href="#read-configuration-modules">#</a> **Q:** Where can I read more about this configuration modules?

**A:** I don't know if there's a specific place we describe our module system or make recommendations about how to structure that sort of configuration. My apologies!
A lot of us (React team) are very accessible on Twitter though
So you could always reach out with questions :)

---

<a name="maybe-better-solution-pass-event" href="#maybe-better-solution-pass-event">#</a> **Q:** Maybe you have better solution how to pass event handlers to child components instead writing onSomething props.

**A:** , I'm not sure how best to answer it abstractly. We have talked a little in recent time about alternative APIs for event handling but there's nothing concrete or on the roadmap to my knowledge. Maybe you could elaborate on a particular problme you're experiencing with the onSomething approach? :)

I guess the parallel to that in FB would be configuration modules which get glued together during the bundle/build step.

---

<a name="led-creation-reactvirtualized-go-writing" href="#led-creation-reactvirtualized-go-writing">#</a> **Q:** What led to the creation of react-virtualized and how did you go about writing the lib?

**A:** When I created react-virtualized, I was working a company called Treasure Data- a data analytics company. My team worked on the Console application, which allowed users to create and manager their data, write queries, etc. Basically it needed to display a lot of data (tens or hundreds of thousands of rows) quickly. We started off using fixed-data-table (by Facebook) but ran into some limitations (eg it didn't allow you to set a prop that would scroll a particular row into view). We also had a use-case that required windowing horizontally (columns) instead of just vertically (rows) Which FDT didn't support. So I decided to take a stab at writing a drop-in replacement that did both. Dan noticed it and tweeted about it which kind of gave it a nice boost of traffic- and it just kind of organically evolved. :)

--

<a name="team-used-react-virtualized-complex" href="#team-used-react-virtualized-complex">#</a> **Q:** My team used react virtualized for a complex form with lots of line items and rendering slow, but she had a hard time figuring out how to implement a custom form to improve render time using react virtualized.

I didnt code it, but it seemed that react virtualized can only use supported libraries and not custom rendering. Am I wrong here? Or is there some way in the library to implement custom form templates to draw what we want to "virtualize"

**A:** I'm not sure I understand your question fully- so please feel free to add some follow-up clarification.

Almost everything about react-virtualized can be customized, so I don't think that would be a bottleneck. I have heard of perf problems for forms in the past, but they typically turn out to be that the particular form abstraction components are kind of heavy to mount and unmount- and a lib like react-virtualized necessarily does a lot of mounting an unmounting. I'd be happy to take a look at your particular project if you'd like to hop in the RV Slack sometime and point me at a Plnkr or something though.

---

<a name="classic-qa-question-whats-biggest" href="#classic-qa-question-whats-biggest">#</a> **Q:** Classic QA question for you: what's been your biggest challenge since joining Facebook and the React team?

**A:** One of the biggest challenges for me has been getting over imposter syndrome. I was fortunate enough to join an amazing team at FB, and it's pretty easy to get intimidated by the people around you when they're really good at what they do. Everyone has been super friendly and welcoming and helpful though- so I'm getting over it. :D

If you were asking specifically about technical challenges, I'd say... just learning the internals of FB- everything from build tools to internal slang to where to go to look for debug logs, etc. Typical stuff when transitioning to a new job, but maybe a bit more challenging because of the size of FB's engineering team.

---

<a name="ive-heard-conflicting-information-react" href="#ive-heard-conflicting-information-react">#</a> **Q:** I've heard conflicting information about react fiber's performance... can we expect a speed boost or not?

**A:** The team's goal for the initial release of fiber (version 16) was to be more or less performance-netural while also being more or less backwards-compatible. The exciting parts of fiber's smart scheduling- sometimes referred to as "async"- won't be enabled for version 16 (at least not by default). Some of us have already begun testing async internally, but it's still in the early days. We tentatively plan to provide a way to opt into testing async in 16 and then to turn it on in 17, once we've satisfied ourselves that the perf is great and that we know what the recommended patterns (and anti-patterns) are for component design.

Anyway, to circle back to the initial question- our testing on Facebook and Messenger more or less shows React 16 as perf neutral.

There are some pretty exciting things we'll gain with 16 though- better error messages/stacks, the ability to return arrays from render, a better custom renderer API, Flow type checking, etc.

---

<a name="internal-feature-development-cycle-work" href="#internal-feature-development-cycle-work">#</a> **Q:** How does the internal feature development cycle work @ Facebook?

**A:** Typically we would create a new experiment with some criteria for who gets opted in (which could be as vague as "X% of all traffic" or it could be as specific as "only members of this team/group/etc"). Then we define some key metrics- things we are hoping to accomplish or things that we want to not regress on. We create a feature flag in the code that we use to enable or suppress the feature, based on whether the current user is "in" the experiment. Then we just kind of gradually roll it out- and eventually remove the feature flag entirely once the feature is at 100% (assuming no problems).

---

<a name="build-tools-using-build-facebook" href="#build-tools-using-build-facebook">#</a> **Q:** What build tools using for build facebook apps?

**A:** FB uses a lot of tooling and I've only been here a few months, so I definitely don't know it all. Common tools though would be things like Babel, Flow, Webpack, Haste/require (for modules), etc. (If this is too vague and you were wondering about something more specific - feel free to follow-up)

---

<a name="quick-thoughts-dynamic-rowcell-dimensions" href="#quick-thoughts-dynamic-rowcell-dimensions">#</a> **Q:** What are your quick thoughts on dynamic row/cell dimensions in virtualized scrolling? Is there a widely accepted elegant solution for this dilemma?

**A:** Other than CellMeasurer :D So dynamic heights is a difficult problem with windowing libs. I have a few slides from a recent talk I did that relate to this: https://bvaughn.github.io/forward-js-2017/#/20/3

In general I'd say that the key points are:

- Pretty much defer measuring anything you don't have to until you need the measurements
- Cache measurements aggressively so you don't have to measure twice (although you'll also need to provide a way to invalidate the cache)

RV currently solves this with CellMeasurer which async-measures content after it's been rendered. I think this is a reasonably elegant solution, though I'd like to improve it so ideas and collaboration are always welcome. I have a branch (kind of long running, at this point) that I'm playing with some refactor ideas for this in particular. If you're interested we could talk more offline about it.

(Did this answer your question? Was it too high-level?)

---

<a name="think-react-ide-project" href="#think-react-ide-project">#</a> **Q:** What do you think about the React IDE project ?

**A:** React IDE looks cool. I've never used it. I will download it and try it after this Q&A

---

<a name="preferred-choose-reactthunk-reactsaga" href="#preferred-choose-reactthunk-reactsaga">#</a> **Q:** What you all preferred to choose between react-thunk or react-saga .?

**A:** Regarding thunk vs saga- unfortunately I'm not able to answer that question. I don't know if we use either internally. I've used thunk externally (before I worked here) and I thought it was pretty handy.

---

<a name="direction-reason-ocaml-within-facebook" href="#direction-reason-ocaml-within-facebook">#</a> **Q:** What is the direction of Reason and OCaml within Facebook? Will Reason have an effect on React in the future?

**A:** Regarding Reason and OCaml- good question! FB works on a lot of parallel efforts and it's probably hard to predict the outcome of them in many cases. Reason looks exciting- and some smart people are working on it- so I expect it to be really cool. I don't think we have any definite plans at this point, just a lot of ideas and things to experiment with :)

---

<a name="brian-tell-us-long-coding" href="#brian-tell-us-long-coding">#</a> **Q:** Brian, tell us about yourself. How long have you been coding? What was your first programming language? Highlights or milestones of your career/life?

**A:** Sure :) I started coding in college. (I went to school for art but I needed money to eat/rent so...) I picked up freelance design and web programming jobs on the side. Realized I really enjoyed it and just kind of stuck with it after graduation. My first programming language was PHP. One of my clients asked if I could do a PHP+MySQL site for them. I knew neither but said I could- then I scrambled to read "PHP and MysQL Web Development" by Luke Welling and Laura Thomson.

Highlights have mostly been open-source related. I got into OS years back, when Source Forge was the thing. I still have a project or two there, heh. Working on the React team has definitely been the most exciting project I've gotten to work on- in terms of impact and challenges both.

---

<a name="specifically-hope-contribute-react-based" href="#specifically-hope-contribute-react-based">#</a> **Q:** What specifically do you hope to contribute to React based on your past experience and skills?

**A:** Specifically- I hope to contribute some windowing-related things in the future, since that's an area I've become pretty passionate about.

I've also recently started workong on react-devtools and I find that super gratifying. I hope to make more time to work on them over the next few months too. :)

---

<a name="new-react-one-question-best" href="#new-react-one-question-best">#</a> **Q:** I am new in react so I have one question which is best among react-toolbox & material -ui for material design web apps? There was some very tricky to set the theme change in react-toolbox . Is there any suggestions to how I manage if you prefer react-toolbox

**A:** Unfortunately I have not used either react-toolbox or material-ui in React so I can't recommend one over the other. I'd suggest comparing the APIs, look if either offers feature you think are important that the others dont', look to see if one has a more active online community (Slack/Discord/StackOverflow), which one is released most recently/frequently, etc.- and it may be that both are great choices and you'd be happy with either one :)

---

<a name="facebook-apps-new-apps-using" href="#facebook-apps-new-apps-using">#</a> **Q:** So... In facebook apps (in new apps) are you using something like CSS Modules? What approach for managing CSS you can advice?

**A:** We use something similar to CSS modules, yes- a build step that generates unique CSS class names based on the base component and the relative class name used in source.

---

<a name="feel-pressure-maintain-popular-open" href="#feel-pressure-maintain-popular-open">#</a> **Q:** Do you feel pressure from having to maintain such a popular open source library?

**A:** Yes. I think a lot of OSS maintainers feel this. I definitely have been feeling it lately. There are a lot of new things I'm excited about trying, but I feel guilty about not immediately replying/fixing/helping things I've made in the past.

Every morning starts with checking GitHub + Slack + Stack Overflow (tags) and responding to any questions/issues from overnight. Then I usually repeat that sometime mid-afternoon and again in the evening. It's rewarding to help people and see all of the cool things built with projects I started, but it's also pretty tiring. There's also a small fear that if I let myself fall behind, even a little, I'll never catch up.

---

<a name="talk-facebook-possibility-native-implementation" href="#talk-facebook-possibility-native-implementation">#</a> **Q:** Was there any talk at Facebook about possibility of 'native' implementation of React (or just JSX) in browsers?

**A:** WRT talk about "native" React in a browser- Not to my knowledge.

---

<a name="facebook-working-something-backend" href="#facebook-working-something-backend">#</a> **Q:** Is Facebook working on something for the backend ?

**A:** Yes, Facebook has OS projects for...basically everything. From front-end to build tools to backend to data center and server design.
A lot of them are listed here https://code.facebook.com/projects/

We also have a few GitHub teams with stuff as well - Specifically bakend things would be @ https://code.facebook.com/projects/backend/

---

<a name="interested" href="#interested">#</a> **Q:** What are you most interested in now? And why?

**A:** What am I most interested in is a huge question. :)

Personal life: I'm super excited about going to Paris for React Europe next week. Hopefully I'll meet some of you there!

I'm also really excited about React 16 (and getting to delete a lot of old code).

In general, I think the things that excite me most boil down to either improving performance (eg react-virtualized, making things faster, etc) or improving developer experience (eg through tools like devtools, better error messages, etc) It's really easy to get excited about anything in that category. :)

---

<a name="maybe-know-short-question-rn" href="#maybe-know-short-question-rn">#</a> **Q:** Maybe you know, but it is short question. What about RN for desktops? Any plans to support RN for desktop by fb team?

**A:** I don't know about plans for RN on the desktop. You might be interested in checking out www.nidium.com though! Looks pretty promising!

---

<a name="someone-new-js-frameworks-amount" href="#someone-new-js-frameworks-amount">#</a> **Q:** As someone new to JS and frameworks, the amount of frameworks and the speed of their decline makes choosing absolutely daunting. What do you think of the future for React?

**A:** This is a totally understandable concern and I think it's not uncommon. I can't predict the future of course, but I can try to reassure you by saying that FB is very heavily invested in React. (I think we have over 30,000 React components internally.) So we're dogfooding- we're right there beside you, invested in the framework just as much as an external team using it.

---

<a name="facebook-get-opensourcing-react-react" href="#facebook-get-opensourcing-react-react">#</a> **Q:** What does Facebook get out of open-sourcing React and React Native?

**A:** Everyone on the React team is super passionate about the idea of open source and helping other devs in the community. So one thing FB gets out of OS projects like React is that it attracts people who are passionate about OS. We also benefit from OS too in that we regularly receive very high-quality contributions from developers outside of Facebook, so it flows both ways.

I think the history of OS at FB has also been very pragmatic. We haven't created things that we think may be useful one day. Rather, things are created to solve problems we have now (or at a given time). Of course, it requires more effort to open source something than to just use it internally, but that kind of ties into what I said above I think.

---

<a name="would-react-able-take-advantage" href="#would-react-able-take-advantage">#</a> **Q:** Would React be able to take advantage of web assembly, and if so to your knowledge is there anything in pipeline?

**A:** Yeah, maybe there will be some nice wins for React with Web Assembly. To be honest, I don't know. (I'm not sure if anyone does at the moment.) It's something that the team is considering and keeping an eye out for though. Particularly Sebastian.

---

<a name="common-full-stack-react-backend" href="#common-full-stack-react-backend">#</a> **Q:** What is the most common full stack for React? (Backend, DB) etc. And where is a good free tutorial?

**A:** No idea what the most common full stack for React is. We don't really have a way to collect metrics for things like that, other than word of mouth. React works equally well with pretty much any backend. :)

---

<a name="go-best-practicesetc-using-reactreduxetc" href="#go-best-practicesetc-using-reactreduxetc">#</a> **Q:** Where do you go for best practices/etc when using React/Redux/etc? Any particular gems?

**A:** I find the React community on Twitter super helpful. There's also places like this Discord channel and Stack Overflow. Lots of good advice online.

I'd say that I usually would start by checking the https://facebook.github.io/react/ and then- if I still have a question, I see if someone else has asked it on Stack Overflow. If not then I check GitHub issues to see if it's been answered there. And if not I may ask on Twitter. :)

---

<a name="biggest-challengeproblem-facing" href="#biggest-challengeproblem-facing">#</a> **Q:** What is the biggest challenge/problem you are facing now?

**A:** Right at this moment it would be a slight cramp from typing too much :) hehe

But no, seriously. The biggest ongoing challenge for the past few weeks has been integrating React fiber with ReactNative. Prior to joining the team I didn't have any experience with ReactNative, so it's been a technical challenge to learn a new codebase as well as...kind of an institutional challenge to learn the ins and outs of variou Facebook apps that use ReactNative. :)

---

<a name="interests-beyond-javascript-anything-would" href="#interests-beyond-javascript-anything-would">#</a> **Q:** What are you interests beyond Javascript? Anything that you would recommend people take a look at?

**A:** Hmm...my interests beyond Javascript? I make music :) https://soundcloud.com/brianvaughn/

I also love running. :) If you live in the bay area, we should run together sometime.

---

<a name="react-additional-license-lately-caused" href="#react-additional-license-lately-caused">#</a> **Q:** The React additional license has lately caused a great deal of distress in the scene where I live. Perhaps it doesn't concern you specifically, but other than what has been said in the FAQ at Facebook ( https://code.facebook.com/pages/850928938376556 ), do we have a reason to worry? Does Facebook have a legal right to dismiss us of our license to use React if we go against it in a patent lawsuit?

**A:** The FAQ covers the most common questions we get about the license.

This is a tricky question for me to answer, because I'm not a lawyer and I don't want to say anything that might come back to bite me later. I will say that many small companies as well as some large companies (eg Google, Apple, and Microsoft) are currently using React.

If you have further/specific questions beyond that, I would have to defer and suggest you ask a lawyer. (Sorry! :) )

---

<a name="yarn-continue-maintained-npm-catches" href="#yarn-continue-maintained-npm-catches">#</a> **Q:** Will yarn continue to be maintained if (or when) npm catches up in terms of features? did you notice a drive to unify the ecosystem in that regard at facebook?

**A:** Yes! Yarn is being actively developed both internally and in the community :) We love it!

---

<a name="get-job-facebook-react-team" href="#get-job-facebook-react-team">#</a> **Q:** How do I get a job at facebook (react team) ? and do you also drive a tesla ?

**A:** Email me your resume and I could pass it on to one of our recruiters :)

I would love to drive a Tesla. Would you like to give me one? :)

---

<a name="filler-questions-yay-nay-semicolons" href="#filler-questions-yay-nay-semicolons">#</a> **Q:** Filler questions yay or nay: semicolons? mechanical keyboards? spaces over tabs?

**A:** Consitency is best, whether you want to use semis or not. Spaces are my preference but again- I think a good linter (or even better- Prettier) is the most important thing.

Mechanical keyboards? I don't feel strongly. :)

---

<a name="code-conventions-using-js-fb" href="#code-conventions-using-js-fb">#</a> **Q:** What code conventions are you using for js at FB and will you be publishing that like airbnb has?

**A:** If by "code conventions" you mean formatting/syle- we use Prettier in more and more places. I suggest you try it too! It's great :D

If you mean architectural patterns, etc. then check the official docs and follow the core team on Twitter (especially people like Dan) for lots of helpful 1-offs

---

<a name="hiring-facebook-emphasize-education-contributions" href="#hiring-facebook-emphasize-education-contributions">#</a> **Q:** When hiring, does Facebook emphasize more on education or contributions?

**A:** Neither! :) I think the main thing we're looking for are people who will be effective at Facebook. That doesn't necessarily correlate with education (eg I was an art major) or with a history of contributions (not everyone has the time or interest to do extra-curricular things like that).

As much as possible, our interview questions are pragmatic, covering the types of things you might do in your day-to-day job.

---

Thanks for hosting me, and thanks for all of the questions folks. My pleasure!
