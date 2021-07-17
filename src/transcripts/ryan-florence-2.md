---
title: Ryan Florence (April 2019)
date: 2019-04-15
time: 1-2pm PT / 8-9PM GMT
location: Q&A Channel Reactiflux
description: "React Router Co-Author | [reacttraining.com](https://reacttraining.com/)"
people: "[@ryanflorence](https://twitter.com/ryanflorence)"
---

## Ryan Florence, [React Router](https://reacttraining.com/react-router/) Co-Author | [https://reacttraining.com/][react-training]

<a name="what-does-ryan-do" href="#what-does-ryan-do">#</a> **Q:** What does Ryan do? – Zach James

**A:** I write [OSS](https://en.wikipedia.org/wiki/Open-source_software) like [React Router](https://reacttraining.com/react-router/), [Reach UI][reach-ui], and I teach React at workshops and online with [reacttraining.com][react-training].

---

<a name="what-is-your-preferred-way" href="#what-is-your-preferred-way">#</a> **Q:** What is your preferred way to unit test with react? – jmager

**A:** I actually don't write very many unit tests for my components, but I use [Jest](https://jestjs.io/). If I've got some sort of algorithm that I want to "get right" and I know the end from the beginning, I use tests to help me. And I'll pull that code out into a separate function so I can unit test it separately.

But in general, I test the public interface of things only: what the programmer consuming my lib is going to do with it, and what hte user is going to do with it.

---

<a name="is-react-ideal-to-learn" href="#is-react-ideal-to-learn">#</a> **Q:** Is react ideal for learning alone as react-native or use a MERN stack? I've been meaning to learn it for a while. – root

**A:** I don't know what MERN stack is.

I think learning React Native only is fine, don't have any strong opinion there though.

---

<a name="if-you-had-to-choose" href="#if-you-had-to-choose">#</a> **Q:** If you had to choose something other than react, what will you choose and why? – Deleted User

**A:** Hmm ... I mean, all the popular things are appealing for different reasons.

Vue: super easy to get started, friendly to less JS heavy folks, .vue files are appealing, lots of out-of-the-box functionality.

Ember: focused on the entire experience from the CLI, to the bundler, to the code you write, makes for a great experience.

Angular: TypeScript is first class, concerned about the whole experience too.

So I guess ... anything! Haha, but I'd probably go with Vue.

---

<a name="hey-ryan-were-about-to" href="#hey-ryan-were-about-to">#</a> **Q:** Hey Ryan. We're about to embark on a huge project that requires [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/) AAA compliance. Do you think its worth it to start using [Reach UI][reach-ui] now as a starting point and have our QA team contribute back to the project as we go? – doodirock

**A:** Yes, please do! It's not 1.0, but it'll be a great starting point, and if there are problems you run into, let me know and we can merge in PRs, or I can fix it, or you can copy/paste the code into your app if I'm too slow 😃.

---

<a name="hi-ryan-what-do-you" href="#hi-ryan-what-do-you">#</a> **Q:** Hi Ryan! What do you think about coding bootcamps such as [LambdaSchool](https://lambdaschool.com/)? Do you have any particular thoughts or regards to them, specifically [LambdaSchool](https://lambdaschool.com/)? Thanks. – okla

**A:** I love bootcamp grads. Not only are they often more mature co-workers, but they bring so much enthusiasm it's awesome.

They also bring a lot of diversity that our industry needs.

As for specific bootcamps, I dunno, I don't know much about them, I really just know the people they've helped 😃.

---

<a name="are-there-any-thing-in-the-area" href="#are-there-any-thing-in-the-area">#</a> **Q:** Are there any things in the area of accessibility you feel React Native could improve? – empyrical

**A:** I actually don't do anything in React Native, so I dunno. But I know that iOS is a whole lot easier to make accessible than the web, so whatever RN needs to do, it's probably just handing off props to the native views.

---

<a name="thoughts-on-redux-vs-hooks" href="#thoughts-on-redux-vs-hooks">#</a> **Q:** Thoughts on redux vs hooks? – Dan

**A:**

```jsx
import React, { createContext, useReducer, useContext } from "react";

const Context = createContext();

export function AppStateProvider({ reducer, initialState = {}, children }) {
  const value = useReducer(reducer, initialState);
  return <Context.Provider value={value} children={children} />;
}

export function useAppState() {
  return useContext(Context);
}
```

^ Redux as hooks.

```jsx
<AppStateProvider reducer={fn} initialState={...}>
  <App/>
</AppStateProvider>
```

```js
const [state, dispatch] = useAppState();
```

and then middle where is just useEffect

```js
useEffect(() => {
  localforage.setItem("state", state);
});
```

AND IT SSO COOOOOOOOOOOOL

---

<a name="best-way-to-learn-react" href="#best-way-to-learn-react">#</a> **Q:** Best way to learn react for a beginner? – DanSen

**A:** Come to a workshop, ofc!

I dunno. I really like [Tyler McGinnis](https://tylermcginnis.com), he's got some good online courses for beginners. We plan on having some more online material for beginners this year once our workshop tour is over.

---

<a name="who-makes-the-best-fast" href="#who-makes-the-best-fast">#</a> **Q:** Who makes the best fast food cheeseburger? – aweary

**A:** If I want to be friends with somebody from california I will say In-n-out.

But smashburger, by a long shot.

---

<a name="what-motivated-you-to-start" href="#what-motivated-you-to-start">#</a> **Q:** What motivated you to start doing training as career and where do you think it will take you in 5 years time? – orta

**A:** I was actually a TA in college for economics and really loved teaching. I was a missionary for the church of jesus christ of latter day saints and loved teaching my beliefs there as well.

Out of college I was a financial advisor/planner, and it was fun to teach people about interest and opportunity cost and stuff.

In HS/college I had a punk rock band and loved performing.

So I guess I've just kind of always been up in front of people either entertaining or teaching them.

But specifically, I was training the teams at work on React and had a little repo on github with the material, I started getting email from people to train their teams, I said no thanks, then Brian Leroux told me how much he used to charge for phone gap training, so I quit my job immediately and started [React Training][react-training] 😂.

In 5 years ... I'd like it to not be "The Ryan and Michael show". So the company has value besides our faces, so we've hired some employees, instructors, and gonna try to make this into a company that really supports the community by providing top notch training for development teams.

---

<a name="will-be-starting-my-first" href="#will-be-starting-my-first">#</a> **Q:** Will be starting my first fulltime software developer job out of college, what are some of the main points of react that I should touch? The stack that I will be dealing with is React + C# backend. – espionage

**A:** React is small, so all of them 😆. Rendering elements, components, state, effects, that's really all there is to it.

I still really like the official tutorial and docs for beginners.

The most important thing to be successful with React is JavaScript.

---

<a name="hi-ryan-first-of-all-thanks" href="#hi-ryan-first-of-all-thanks">#</a> **Q:** Hi Ryan. First of all, thanks for this Q&A. The only issue I've noticed so far with hooks is when you use useState and try to use the set function that it returns, you cannot set a callback function like you can with setState in non-hooked react. Is there any easy way around this besides trying to use useEffect? Because one issue I ran into was trying to set the state in a function but not being able to utilize that new state within the same function due to asynchronicity. – Kyruski

**A:** Hmmm.

I miss that callback too for "transactional interactions" managing focus is usually not something I want to be "reactive", but rather something to be done after an action.

But trying to access the the "new state" after setstate isn't ever necessary.

```js
let newStuff = "blah";
setStuff(newStuff);
doWhateverWithStuff(newStuff);
```

---

<a name="when-working-with-react-native" href="#when-working-with-react-native">#</a> **Q:** When working with react-native is there any way to force a user to update the app, or at least warn them that there is a new app on store, and disable the current one? Thanks. – humarkx

**A:** I don't really know RN.

---

<a name="what-are-some-ways-to" href="#what-are-some-ways-to">#</a> **Q:** What are some ways to optimize a react app? – Dan

**A:** I'm working on a workshop lesson on that right now. You have 3 tools:

1. useMemo
2. useCallback
3. React.memo

useMemo helps you optimize expensive app calculations.

useCallback helps you make other hooks and React.memo happy.

React.memo helps React avoid diffing your elements if you don't need to.

After that, it's all the same as optimizing any JS, or code for that matter.

---

<a name="where-was-your-mission" href="#where-was-your-mission">#</a> **Q:** Where was your mission call? – joestrouth1

**A:** Boston May 2000-June 2002.

---

<a name="what-is-one-thing-that-you" href="#what-is-one-thing-that-you">#</a> **Q:** What is one thing that you would like to add to the react? – Deleted User

**A:** react-call-return https://www.npmjs.com/package/react-call-return

---

<a name="what-are-some-of-your" href="#what-are-some-of-your">#</a> **Q:** What are some of your favorite tools to use with React? – Erik

**A:** [FIREBASE](https://firebase.google.com)!

We even have a course on it: https://reacttraining.com/courses

---

<a name="thank-you-for-doing-this-qa" href="#thank-you-for-doing-this-qa">#</a> **Q:** Thank you for doing this Q&A session! What tips do you have for developers working at their first development jobs? What did you do personally to level up professionally in your development career? What would you do differently looking back? – MichaelJamie

**A:** Read a lot of code. Realize your'e probably better than you think, and your heroes are worse than you think.

Don't get upset at code reviews, don't worry too much about what blog posts are saying, trust your gut.

Personally I leveled up by publishing the tools that scratched my itches, I regret a lot of arrogance and getting angry at other people's "crappy code".

Few people like other people's code right away and nobody likes their code in 6 months from now. So just get over that a lot of code is not how you would have written it today, and just work on making it do what it supposed to do and if its a little hard to read or understand, try to improve it incrementally.

Dang, only one thumbs up.

Seriously, get over it everybody, your code is crap, just like mine and everybody elses 😛.

Hahaha, okay.

---

<a name="what-does-the-roadmap-for" href="#what-does-the-roadmap-for">#</a> **Q:** What does the roadmap for [Reach UI][reach-ui] look like? Do you know how many components it will eventually have? – harryhedger

**A:** If there is an aria role, there will be a reach component.

So pretty much all of these: https://www.w3.org/TR/wai-aria-practices-1.1/.

---

<a name="whats-the-future-of-reach-router" href="#whats-the-future-of-reach-router">#</a> **Q:** What's the future of [Reach Router][reach-router]? – TreTuna

**A:** Been to busy prepping our workshop tour (PLUG! https://reacttraining.com/workshops) but the plan is to merge with React Router because hooks are the perfect excuse to introduce new, and simpler APIS.

Both projects will be 100% backwards compatible in the next release that introduces some awesome stuff.

It's really a solid merge of React Router's API, Reach Router's API, and then all new APIs built on hooks, and it removes a lot of the sticky parts from before now that we have a better state/behavior composition model with hooks.

Most of the code is already written, we just need to polish it up and double check the compatibility with the current APIs.

The surviving project will be React Router, but the new API isn't more similar to one or the other, so both are still a great choice.

---

<a name="how-do-you-test-your-reach-ui" href="#how-do-you-test-your-reach-ui">#</a> **Q:** How do you test your [Reach UI][reach-ui] components with screen readers? Do you know if you can automate these? – Weyert

**A:** I test manually in the screenreaders myself, I also have friends who have disabilities (liek blindness) who I reach out to. Before the 1.0 release though I'm going to hire web aim to do a professional audit to make sure it's all [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/) compliant, etc.

---

<a name="hey-ryan-thanks-for-the-q-a" href="#hey-ryan-thanks-for-the-q-a">#</a> **Q:** Hey Ryan! Thanks for the Q+A session. Do you have any preference over form handling libraries in React? Redux forms always felt heavy, and a few people have recommended [Formik](https://jaredpalmer.com/formik/). Do you side with any in particular? – Phunk

**A:** Forms are funny. They are soooo tempting to abstract over. I usually just one-off any form I have, but I've looked at formik and it looks great if you want an abstraction, but I wouldn't be in a hurry to abstract over forms:

Forms are inherently about state and elements, turns out that's exactly what react helps you manage.

---

<a name="so-should-I-learn-hooks" href="#so-should-I-learn-hooks">#</a> **Q:** So should I learn hooks? It's something I haven't really looked into deeply yet. Also should I learn how to use typescript with react and is it good practice to be using typescript with react. – Dan

**A:** YES! In a two years react code w/ classes is gonna look like that "weird old stuff". Also, hooks are not that hard to learn, and we've got tooling now (eslint "react-hooks/rules-of-hooks", "react-hooks/exhaustive-deps") that prevents you from hitting the hard parts ... you don't even have to know why you should do something the rule says if you don't want to!

---

<a name="will-the-new-router-be-dropping" href="#will-the-new-router-be-dropping">#</a> **Q:** Will the new router be dropping the cloneElement usage that Reach Router and RR's Switch use? cloneElement is one of those things I am very frequently recommending people avoid because of how much it breaks the React flow. – samsch

**A:** It doesn't break react flow, but it does prevent some forms of composition (or just makes it trickier and frighteningly implicit).

BUT YES!

Instead of cloning, you'll have a hook to access routing data:

```js
const params = useParams();
const { location, navigate } = useLocation();
```

I'm really excited about it.

---

<a name="what-is-your-favorite-kinda" href="#what-is-your-favorite-kinda">#</a> **Q:** What is your favorite kinda music? – pixelcure

**A:** Late 90's (pop) punk: Sum 41, Lagwagon, Blink, Suicide Machines.

And bob marley.

LATELY THOUGH I've been listening to our own [Brian Vaughn](http://www.briandavidvaughn.com/#/home)'s album on spotify and it is legitimately good. Look up "Pinwurm".

He's on the react team at FB, and authors [react-window](https://react-window.now.sh/)/[react-virtualized](https://bvaughn.github.io/react-virtualized).

---

<a name="have-you-heard-that-buttons" href="#have-you-heard-that-buttons">#</a> **Q:** Have you heard that buttons shouldn't have `cursor: pointer`? According to W3C user interface guidelines, pointer should only be used on links. It's interesting because it's so ubiquitous, and I haven't seen anyone actually do it yet. Thoughts? – harryhedger

**A:** I have opinions here. I don't like that web designers have pushed us that direction, cause native buttons don't have cursor: pointer either.

However ... the web interfaces are often more content heavy than an OS UI, so maybe it's a good thing to call out interactive elements more clearly? Maybe on native you don't need to because most elements are interactive? I dunno, would love to see research.

---

<a name="what-would-you-be-doing-if" href="#what-would-you-be-doing-if">#</a> **Q:** What would you be doing if you weren't programming (and/or you weren't working on react). – the coder

**A:** I was doing software sales before software development, so probably that.

Might have more money too if I had stuck with it 🤔.

---

<a name="what-is-the-key-to-success" href="#what-is-the-key-to-success">#</a> **Q:** What is the key to success? – the coder

**A:** Success breeds success.

(stack overflow? ... get it?!)

Seriously though, I think to have success you have to define what it means, and for me it's not a destination, it's just working toward helping others and having fun.

---

<a name="do-you-ever-go-to-react-nyc" href="#do-you-ever-go-to-react-nyc">#</a> **Q:** Do you ever go to React NYC meetups? I'm not sure where you are based but I watched Michael Jackson speak at Stash on React Router and some intro React stuff and it was awesome listening to him talk! – pixelcure

**A:** Yep, I've spoken there, the meetup didn't line up with our tour schedule this time around though.

---

<a name="tips-on-how-to-get-your" href="#tips-on-how-to-get-your">#</a> **Q:** Tips on how to get your first job as a react developer? – Dan

**A:** Sorry, it's been too long since I've looked for a job, so I have no idea what it's like anymore. As a hiring manager though I _loved_ reviewing people's personal projects, but I realize now that's not always possible to do for everybody.

---

<a name="should-software-developers-work" href="#should-software-developers-work">#</a> **Q:** Should software developers work exclusively at software shops? (as opposed to some other kind of business who may have one or two devs). – the coder

**A:** I'd love to be a single dev at like ... a local carpet business, that'd be a dream job, use whatever stack you want, set your own pace, have a HUGE impact on the business, that'd be awesome.

---

<a name="besides-react-what-should-devs" href="#besides-react-what-should-devs">#</a> **Q:** Besides react 😉, what should devs be learning right now? – the coder

**A:** I dunno, seems like your next job will probably be using Typescript.

---

<a name="any-tips-getting-a-job" href="#any-tips-getting-a-job">#</a> **Q:** Any tips for getting a job with you at [React Training][react-training]? 😏 – Alex 🚀

**A:** I have recused myself! I'm not really in charge of that, but I will be interviewing people that make it far enough.

---

<a name="speaking-of-typescript-any-chance" href="#speaking-of-typescript-any-chance">#</a> **Q:** Speaking of TypeScript, any chance you'll use TypeScript directly in reach-ui? I have a typedef PR sitting in the issues still, but typedefs are kinda weird 😛. – harryhedger

**A:** I was going to, but just didn't have the time or mental space to do it, maybe in the future though. And really, you can't type the element hierarchy, which is 80% of the API, so it's not that beneficial until TS gets some new tricks.

---

<a name="how-come-your-focus-shifted" href="#how-come-your-focus-shifted">#</a> **Q:** How come your focus shifted to accessibility with [Reach router][reach-router]? did something happen or is that how you've always thought? – A Red Herring

**A:** I've always focused on accessibility but kinda fell out of it after I quit my job and started [react training][react-training], it just hit me one day to get back into it.

[react-training]: https://reactjs-training.com
[reach-router]: https://reacttraining.com/react-router/
[reach-ui]: https://ui.reach.tech/
