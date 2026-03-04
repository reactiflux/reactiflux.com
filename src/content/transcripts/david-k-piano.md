---
title: David K Piano
date: 2022-03-10
time: 1-2pm PT / 8-9PM GMT
location: Q&A Channel Reactiflux
description: "Founder @ [stately.ai](https://stately.ai/) – Visual software modeling tools and services for making app logic more accessible and robust."
people: "[@DavidKPiano](https://twitter.com/DavidKPiano)"
---

<a name="ive-tried-a-few-times" href="#ive-tried-a-few-times"># </a>**Q:** I’ve tried a few times to introduce state machines, at least as a planning tool, in teams I’ve been on, but haven’t gotten much uptake. do you have any suggestions for how to help teams think in terms of state machines? – vcarl

Sure, one of the best first steps is to start planning by diagramming. Think about the following things:

- What are the "modes" my app (or parts of my app) can be in?
- What are all the events (user events, internal events, etc.) that can happen?
- What should happen when those events occur?

You’ll soon start to realize that these can be organized under those different "modes" (which are finite states) and you can draw your boxes and arrows based on that to determine how your app is supposed to work.

Big topic, I’ll probably write a blog post on it

---

<a name="i-understand-the-purpose-of" href="#i-understand-the-purpose-of"># </a>**Q:** I understand the purpose of XState in vanilla JS and I have used to build a pure JS app , but it’s difficult to make a use case for it when writing code in React JS – amaankulshreshtha

XState shines for complex app logic. Many apps start off simple, but they don’t stay that way after you add many features, consider use-cases, fix edge-cases, etc.

It’s also a communication tool - sure, there’s many ways to manage state, but XState also helps you communicate state & app logic visually with the rest of your team.

Some common use-cases are for multi-step forms, handling sequences, complex components, animations, wizards, coordinating global logic with multiple components, all things that you can do with a state management library, but you’ll end up creating an ad-hoc state machine anyway (with none of the benefits of an explicit one)

---

<a name="what-is-a-state-machine" href="#what-is-a-state-machine"># </a>**Q:** What is a state machine? – Mujeeb

A state machine is a visual formalism that describes: "When I’m in some state, and some event happens, now I’m in a different state and these actions are to be executed"

---

<a name="where-do-you-see-the" href="#where-do-you-see-the"># </a>**Q:** Where do you see the future of XState going in terms of feature support/wider adoption/easier onboarding, etc? – iggy

We’re working on releasing an alpha of XState version 5, with much improved TypeScript support, an easier actor model story, and even more statechart features, as well as modularity and a bunch of other improvements under the hood.

We really want to support XState for server-side workflows as well as for other use-cases (think chatbots, home automation, testing, etc.) and of course we want to improve the Stately tools for visualizing and analyzing state machines with XState.

A docs rewrite is also being planned, with interactive examples and more beginner-friendly (and choose-your-own-adventure) guides.

---

<a name="why-did-you-found-stately" href="#why-did-you-found-stately"># </a>**Q:** Why did you found Stately, and what is its business model? – Bart

I founded Stately because XState (and state machines in general) has become too important to just be a small side-project, and the community around it has definitely grown. We also want to build amazing visual modeling tools related to state machines, statecharts, actor model, workflows, etc. and that requires a team… and we have an amazing one! (Also, we’re hiring!)

---

<a name="how-do-you-think-about" href="#how-do-you-think-about"># </a>**Q:** How do you think about Redux in relation to XState, does it make sense to use them in the same app? I’ve used the XState web app for planning, but have then modeled the state machine using Redux actions/state. – vcarl

You can use XState and Redux in the same app - their philosophies are a bit different. But machine.transition() is just a reducer, so it’s definitely possible.

Redux does not have a notion of declarative effects (they have a new action listener middleware which is similar), which is one of the big areas where Redux and XState differ. The state machine "philosophy" is that effects (what XState calls actions) should be declarative and part of your state, and not an after-thought.

Some more differences here: https://stackoverflow.com/questions/54482695/what-is-an-actual-difference-between-redux-and-a-state-machine-e-g-xstate/54521035#54521035

Also, using XState (and/or our Stately tools) for planning/diagramming and the implementing it however you’d like (library of choice) is something we love seeing - and we actually plan to support more state management libraries in the future with our visualization tools!

---

<a name="are-there-any-good-guides" href="#are-there-any-good-guides"># </a>**Q:** Are there any good guides on "scaling up" a state machine to more than something like a stoplight? e.g. a machine big enough to try to represent the state of an entire application, and splitting that up into bits and pieces – MapleLeaf 🍁

Yes, and we’ll be writing even more guides and examples on this on our blog: https://stately.ai/blog

Our own Matt Pocock did an XState docs speedrun that goes more in depth on how to "scale up" state machines and think about modeling for more advanced use-cases: https://www.youtube.com/watch?v=2eurRx-tR-I

---

<a name="my-team-had-developed-a" href="#my-team-had-developed-a"># </a>**Q:** My team had developed a multi step form in React Native, and we were using a counter to maintain the progress of a form, and we would pass that counter value to the next screen with the help of react-navigation. If we do the same thing with XState, wouldn’t that increase the complexity? – amaankulshreshtha

It would not; in fact, I’d say it make it clearer. Instead of doing counter++, you would do:

```
first: {
  on: {
    NEXT: 'second'
  }
},
second: {…}
```

Not that much more complex, and much much more explicit 👍

---

<a name="as-a-pianist-what" href="#as-a-pianist-what"># </a>**Q:** As a pianist, what would your perfect idea be for a desktop piano app? – ThimoLS

One of my first projects I’ve tried as a junior dev was a music theory teaching app… wrote that in Backbone!

---

<a name="whats-the-hardest-parts" href="#whats-the-hardest-parts"># </a>**Q:** What’s the hardest parts of creating and keep your company grow that you did face? – Ameen

Wearing so many hats and keeping up with so many meetings, and learning that development is a small fraction of the overall business. It’s definitely a new world, and I’m learning more every day. It’s been very fun so far though!

---

<a name="any-top-tips-for-new" href="#any-top-tips-for-new"># </a>**Q:** Any top tips for new developers starting their careers? – JolteonYellow

Find an area you’re passionate in and really dive deep into it. Contribute to open-source if you have the time as well.

---

<a name="how-popular-do-you-think" href="#how-popular-do-you-think"># </a>**Q:** How popular do you think/estimate XState will become in the community in the future? – Sam Samrichs

It’s still "early adopters" phase IMO, but it’s at almost 20k stars! It’s the "defacto" state machine library, at least for JS/TS, so now it’s just a matter of getting developers en masse to realize "hey, state machines are useful"

---

<a name="do-you-have-a-demo" href="#do-you-have-a-demo"># </a>**Q:** Do you have a demo with a multi step form with react-navigation. It will be of great help 🙏🏻 – amaankulshreshtha

I’m sure there’s one floating around - I collect resources and things other people have made here: https://xstate.js.org/docs/about/resources.html

---

<a name="what-kind-of-app-would" href="#what-kind-of-app-would"># </a>**Q:** What kind of app would demonstrate that you have some proficiency using React? – diego-felix

I’ve taught React Training workshops with Michael Jackson, Ryan Florence, Cassidy Williams, and talked at a few React conferences… does that count? 😉

---

<a name="how-well-does-xstate-support" href="#how-well-does-xstate-support"># </a>**Q:** How well does XState support dynamic states? I.e. when the states themselves depend on user input? – Bart

That’s under the domain of "extended state", which is represented in XState using context. So you can get as dynamic as you’d like with context + assign(…)

---

<a name="your-way-to-manage-async" href="#your-way-to-manage-async"># </a>**Q:** Your way to manage async state? – Piyush

With XState, "async" state is just an extra loading state that you can explicitly state. But if you don’t want that level of granularity, you can invoke any promise… and even observables, callbacks, or other machines! So it’s still async-friendly.

---

<a name="what-changes-would-you-make" href="#what-changes-would-you-make"># </a>**Q:** What changes would you make to state machine libraries like XState to make the interface more readable or understandable to newcomers and experts alike? – astronautshark

Our big bet is on creating visual tooling for this - visualize the XState code you write, or even create the state machines without using code!

---

<a name="how-are-you-currently-funding" href="#how-are-you-currently-funding"># </a>**Q:** How are you currently funding Stately, or what is the business model behind the company? Is the company going to sell tools, consulting, services, etc? – Redacted

We’ve (quietly) raised a small seed round for this to support our team. We’re improving our open-source libraries and tools, as well as creating apps & services, such as the visual editor (an "IDE" for app logic), registry, cloud-based workflow tools, etc. that will be free for basic use

---

<a name="if-there-were-a-re" href="#if-there-were-a-re"># </a>**Q:** If there were a re-write of routers for an SPA, would XState be the ideal choice? – amaankulshreshtha

It’d be an interesting choice! Routers are sort of like state machines, but you can go to any route at any time. But especially for multi-step forms, it’s useful to express routes as a state machine often.

---

<a name="state-machines-are-fantastic" href="#state-machines-are-fantastic"># </a>**Q:** State machines are fantastic! Why haven’t they been embraced in the "backend" of things? We get a lot of crazy events responses in the backend and a lot of the time, all we can do is, handle events with if `else’s and retry "stuff". It’d be instrumental in having a LONG LIVED state machine in the server. To compare, we can have an FSM for dealing with an AJAX request in the front end. Maybe on success, we want to transition the page into another state, and then different events can communicate with THAT event. We typically have to rely on databases tables and columns, but it makes it hard to see the "overall" image of what’s going. – dilraj

I love this question. They have been embraced, implicitly! Whenever you work with a workflow engine (many popular ones out there), they’re really basic state machines. There’s also BPMN which is like a higher-level, business-oriented state machine. With statecharts on the backend, I believe we can go further and express even more complex logic on the backend in a visually clear way.

---

<a name="i-dont-understand-what" href="#i-dont-understand-what"># </a>**Q:** I don’t understand what XState is exactly! Can you explain what is the main goal of XState? – maryamrmz

XState is a state orchestrator. Just like state management libraries (Redux, Vuex, etc.) let you manage state, XState does that and lets you orchestrate state, so you can clearly define what the different behaviors are in your app. This prevents impossible states/transitions, and makes the logic visualizable and robust.

You know how you’re not allowed to talk when this message box is disabled? That’s a state! You can haphazardly use a boolean for that, or you can make that explicit in a state machine.

So instead of littering if (!enabled) { … } calls everywhere, you’re reversing that logic and making it state-based. That’s what XState is for.

---

<a name="and-what-makes-the-xstate" href="#and-what-makes-the-xstate"># </a>**Q:** And what makes the XState different? I mean. Why people should choose XState? – maryamrmz

You should choose XState when you need to clearly define logic (what can happen when an event is received) for different states in your application, including which effects should be executed. Most state management libraries do not have declarative effects, which is a big reason why app logic gets so messy, because you have to handle that somewhere and it’s unclear where that should live.

Another reason to choose XState is to communicate app logic with the rest of your team, even if they’re not as technical - designers, PMs, etc. XState allows you to visualize and simulate your app logic.

---

<a name="is-there-another-design-pattern" href="#is-there-another-design-pattern"># </a>**Q:** Is there another design pattern apart from state machines that would provide complete control over the system? – amaankulshreshtha

I mean, … sorta? There’s petri nets 😂 But anyway, the question is not "should I use state machines or not?" because you already are, technically. Rather, the question is "should I make my state machines explicit, or keep them implicit?"

---

<a name="do-you-have-a-rule" href="#do-you-have-a-rule"># </a>**Q:** Do you have a rule of thumb for when the complexity in code starts to merit using state machines to model it? – vcarl

My rule of thumb is when I have more than 2 states and more than 2 events. If you start seeing this…

```ts
const [isFoo, setIsFoo] = useState(…);
const [isBar, setIsBar] = useState(…);
const [isBaz, setIsBaz] = useState(…);
// …
```

then please please just use a state machine.

---

<a name="i-think-a-lot-of" href="#i-think-a-lot-of"># </a>**Q:** I think a lot of more Jr. folks (myself included) have a hard time envisioning the journey from a blank slate to something like XState. What did your development journey look like? Any major roadblocks or difficulties? – DepartureAM

Do you mean creating a library like XState, or using XState in an application?

---

<a name="i-used-xstate-do-help-me" href="#i-used-xstate-do-help-me"># </a>**Q:** I used XState to help me "prototype" what my system was going to look like. Suppose, I was happy with my machine and wanted to deploy it (the project got deported before I got there), is it possible to get a real diagram like this once it’s out there in production? If so… how exactly can one see this? Or is it just for prototyping purposes?

![A state chart showing network states. Idle state, fetch action into loading state. From idle state, resolve action to success state. From idle state, reject action to failure state. From failure state, retry action (with internal text "do /assign retries") to loading state](/q-and-a/david-k-chart.png)

– dilraj

With the VS Code extension, and some of the future tools we have planned, our goal is to have your diagrams from state machines be ✨ living diagrams ✨ that stay up-to-date with your code. So yes, this is possible and we’ll be adding this is possible and we’ll be adding even more features to this area in the future.

---

<a name="can-we-get-a-vscode" href="#can-we-get-a-vscode"># </a>**Q:** Can we get a VS Code extension to visualize a state machine if we write the code for it ? – amaankulshreshtha

Yes! And @dilraj this answers your question too: https://marketplace.visualstudio.com/items?itemName=statelyai.stately-vscode
