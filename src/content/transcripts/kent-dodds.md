---
title: Kent C Dodds
date: 2019-03-28
time: 1-2pm PT / 8-9PM GMT
location: Q&A Channel Reactiflux
description: "Engineer @ Paypal, Teaching via Egghead & Frontendmasters, and Author of react-testing-library, downshift, glamorous, & an all around good dude."
people: "[@kentcdodds](https://twitter.com/kentcdodds)"
---

## Teaching via Egghead & Frontendmasters author of react-testing-library, downshift, glamorous, and an all around good dude.

<a name="hooks-day-still-using-classes" href="#hooks-day-still-using-classes">#</a> **Q:** Hooks all day or still using some Classes? — joel

Hooks all day. I leave the classes that work as-is unless I have a good reason to change the component. I know some teams want to have consistency in the codebase and that’s up for you to decide. But for me I think it’s probably best to keep moving forward and refactor as you go/feel the need.

---

<a name="whats-goto-toolchain-creating-react" href="#whats-goto-toolchain-creating-react">#</a> **Q:** What’s your go-to toolchain for creating React Component libraries? — Rangu

My go-to toolchain is [`kcd-scripts`](https://github.com/kentcdodds/kcd-scripts). I use it for all my open source projects and it’s fine-tuned to the way I like to build libraries.

I write about this [here](https://kentcdodds.com/blog/tools-without-config) and [here](https://kentcdodds.com/blog/concerning-toolkits).

One thing you may consider is `micro-bundle` which I hear is really great.

---

<a name="open-source-working-right-alexanderson1993" href="#open-source-working-right-alexanderson1993">#</a> **Q:** What open source are you working on right now? — alexanderson1993

I’m working all the _-testing-library stuff (`react-testing-library`, `dom-testing-library`, etc.) pretty heavily. Looking forward to doing a minor but needed [breaking release](<(https://github.com/kentcdodds/dom-testing-library/pull/229)>) for them WRT how getBy_ queries work.

Also, [my website is open source](https://github.com/kentcdodds/kentcdodds.com) and I’m spending a lot of time there (please don’t look at the code as I haven’t had time to clean it up yet).

And [all my teaching material is open source as well](https://github.com/topics/kcd-edu) so I work on that a lot. I’m really excited about [the remote workshops](https://kentcdodds.com/workshops) I have lined up!!

Most of my ~150 npm packages are either "finished," deprecated, or I’ve handed them off to other people who are actually using them. Pretty happy with how things are going in the OSS stuff I’ve been doing 😀 Thanks for the question!

---

<a name="hey-kent-ive-read-4" href="#hey-kent-ive-read-4">#</a> **Q:** Hey Kent, I’ve read you have 4 children. How do you balance being full-time creator and family life? — latviancoder

That’s a good question. I’ve been asked about that a lot. I think you’ll probably appreciate [this blog post](https://kcd.im/productivity) which pretty much addresses it directly.

[This is also related](https://kentcdodds.com/blog/intentional-career-building).

I hope that helps!

---

<a name="migrate-jquery-based-multipage-website" href="#migrate-jquery-based-multipage-website">#</a> **Q:** How to migrate a jquery based multi-page website to react gradually? There is currently webpack bundle per page and a common bundle. The server return server rendered html and the jquery sets up all the events. How would you start and which steps would you take to migrate this? — guylando

That’s a great question! I think that one of React’s strengths is the ability to work within an existing framework (or "frameworkless" app). I would recommend the most impactful thing you could do is add it for a very small feature.

And as always with migrations/refactors, try to do as little as possible. If you do too much it becomes hard for reviewers to give the code a reasonable look to make sure you’re not breaking things. Also, if you go off for a long time on a branch you’re making refactorings to and have to stop then the merge conflicts you experience when you get back to it are… ridiculous.

On this subject, I recommend giving [this talk by my friend and old co-worker Jamis Charles](https://www.youtube.com/watch?v=sXDZBxbRRag) a watch.

Good luck!

---

<a name="part-toolchain-feel-like-lacking" href="#part-toolchain-feel-like-lacking">#</a> **Q:** What part of the toolchain do you feel like is most lacking? — Іggytoad

That’s a good question. Hmmm… I’d have to give that one more thought, I honestly don’t know. There are definitely things that I’m not happy about with the toolchains and I’m excited to hear about "Rome" which Sebastian McKenzie is working on. The biggest limitation of tools of today I think is that they all operate separately so there are lots of optimizations we just can’t make. Seb’s tool comes with everything out of the box and because of that he can optimize it to make it crazy fast and give a great experience. We’ll see though. All I’ve seen are a few screen recordings 😀

---

<a name="find-youre-techniques-writing-reusable" href="#find-youre-techniques-writing-reusable">#</a> **Q:** I find you’re techniques for writing reusable components very helpful but I’m having a hard time trying to find situations in my code where I can apply those code reuse techniques, everything I write seems very un-reusable due to having to talk with the server, etc… any advice? — cashlesscactus

Interacting with the backend always complicates things. I think that Suspense will allow us to do a lot of cool reusable things in our components despite the need to communicate with the server. But typically I find that components that need to request their data or make updates on the server aren’t great candidates for reusability and should just be coded as needed.

Remember though that the patterns I talk about (like [here](https://www.youtube.com/watch?v=AiJ8tRRH0f8&list=PLV5CVI1eNcJgNqzNwcs4UKrlJdhfDjshf)) aren’t only about reusability but also about simplifying the APIs of components. You can also split a component up from the part that does the server interaction stuff and the part that does the fancy UI stuff.

I hope that helps!

---

<a name="think-future-context-evolve-point" href="#think-future-context-evolve-point">#</a> **Q:** Do you think that in the future Context can evolve to the point that it can handle high frequency re-renders? — hambaga

I believe that the React team is super great at what they do and they always seem to solve the biggest problems in React (even when the solution is totally non-obvious… I mean really, who saw Hooks coming!?). So yeah, I think that the React team can solve the context high-frequency re-render issues. I’ve not personally experienced this issue much though. It’s possible that’s because I limit how much state I share globally and prefer to keep state as close to where it’s relevant as possible. So I think there are some code design-time things we can do to reduce the impact of these problems. Also, I’ve found that splitting your data into multiple contexts can sometimes help with this problem as well because then the consumers only consume the data they need and will only be re-rendered when that data changes, not when any data changes. I hope that helps!

---

<a name="get-motivation-create-project-mishaor" href="#get-motivation-create-project-mishaor">#</a> **Q:** Where do you get motivation to create some project? — mishaor

Motivation for me is typically driven by pain. I have a pain and want to solve that problem. You have to be a little self-aware to know when what you’re experiencing is pain that you can reasonably solve. If the deploy takes too long, don’t just accept that as a given, but recognize it for what it is: pain. And it’s probably pain that you can solve. But be reasonable about it too. For example, I have tons of pain points with twitter as a platform. I could solve those by building my own social media platform, but that’s just not reasonable with my constraints 🤷‍♂️

Whatever it is, the pain gives me the motivation to work on something. Also the fun of coding 😀

---

<a name="else-good-writing-software-problem" href="#else-good-writing-software-problem">#</a> **Q:** What else are you good at? How does writing software / problem solving impact this other skill and vice versa? — fcalise

Thanks for the question! I’m actually working on a fantasy novel. You can read [the whole manuscript](https://kcd.im/shurlan).

Writing software has helped me develop a problem-solving mind where I can recognize problems with my book and think methodically about how I can solve those problems. I’ve also been able to train my brain to listen to podcasts at 3x speed thanks to years of listening to dev podcasts, so when I decided to start writing, I was able to consume vast amounts of podcasts and videos about it really quickly 😀

---

<a name="much-less-work-feel-like" href="#much-less-work-feel-like">#</a> **Q:** How much more or less work do you feel like teaching is compared to "regular" development? — samsch

Interesting question. When I was working full-time as an employee doing "regular" development, I always spent ~40 hours a week working and then did the teaching stuff after hours.

Now that I’m a full-time teacher, I spend ~40 hours a week on the teaching stuff and enjoy my life and family after hours 🤷‍♂️

So it’s hard to compare them, but you’d probably be surprised how much time and effort goes into getting material prepared for teaching (in any format) 😀

---

<a name="whats-overall-impression-react-apollo" href="#whats-overall-impression-react-apollo">#</a> **Q:** What’s your overall impression of React Apollo? — hambaga

I’ve never used React Apollo actually. I had a `graphql` project at PayPal and we only had a handful of queries/manipulations we needed to run so I made the decision to save on bytes ([the `graphql` package is HUGE](https://bundlephobia.com/result?p=graphql@14.2.0)) and we used `graphql-request` instead.

That said, if I were building an application today that made heavy use of GraphQL on the client then I would start with React Apollo, though I’d probably investigate [`urql`](https://github.com/FormidableLabs/urql) as well.

---

<a name="think-senior-devs-team-leads" href="#think-senior-devs-team-leads">#</a> **Q:** Do you think that we as senior devs or team leads should aim to teach useEffect to satisfy asynchronous calls, or should we continue to teach componentDidMount in favor of waiting for the async render API? — ColonialSpew

I strongly recommend teaching hooks over anything else personally. Some people like the class APIs, but that’s totally not me. I wouldn’t recommend waiting for features (like Suspense). Just take what we have today and write the best code you can think of with the APIs we have today. Don’t ignore the future, definitely keep it in mind (as you always should), but focus on the here and now.

---

<a name="hooks-offer-functionality-component-api" href="#hooks-offer-functionality-component-api">#</a> **Q:** Do hooks offer the same functionality as the Component API, or does it take a different mindset when working with them? (i.e. this hook can be used in place of componentDidMount, and this hook should be used as a replacement to componentDidUpdate, etc) — munsterberg

Hooks allow you to do (almost) everything you could do with the Component API. It definitely takes a bit of a different mindset. You think less in lifecycles and more in changes of state over time. useEffect is sorta the replacement for cDM and cDU, but it’s slightly different. I strongly recommend anyone wanting to get into Hooks look at these resources:

- https://reactjs.org/hooks

- https://kcd.im/hooks-playlist

- https://kcd.im/refactor-react

- https://kentcdodds.com/workshops/hooks

😀

---

<a name="working-paypal-still-talks-creating" href="#working-paypal-still-talks-creating">#</a> **Q:** While working at Paypal you were still doing talks, creating courses and contributing to personal open source projects. Did you have to negotiate it with your employer? If yes, how did you convince them that it is worth it? — latviancoder

I’ve been doing side-stuff since before I even graduated college. So before starting with every employer I’ve had, I communicated clearly the things that I’m involved with and it was understood that I would continue to do those things insofar as it didn’t interfere with my job.

At PayPal, I was able to do a lot of stuff on the job actually (like blog posts and livestreams). I talk about that a bit in [this post](https://kcd.im/productivity).

I hope that’s helpful!

---

<a name="would-recommend-someone-would-like" href="#would-recommend-someone-would-like">#</a> **Q:** What would you recommend to someone who would like to get a job in the US but does not have a degree? In other words: Do you take degrees into account when hiring foreign applications that require visas? — github

I’m probably not a great person to ask that question to I’m afraid because I have pretty much no experience with that. I have been asked this a lot and I responded [on my GitHub AMA](https://github.com/kentcdodds/ama/issues/533).

Maybe that’ll help, but I honestly don’t have too much feedback there because I’ve never even interviewed someone in that situation 😬 Sorry.

---

<a name="reacttestinglibrary-easier-test-components-hooks" href="#reacttestinglibrary-easier-test-components-hooks">#</a> **Q:** Is `react-testing-library` easier to test components with hooks than enzyme? Would you make a quick comparison with current React testing tools? — Henry_Z

I’ve spoken and blogged about this extensively. The best summary that I can give you of why react-testing-library is better for your tests than enzyme [is here](https://kcd.im/implementation-details).

[I’ve also given a talk about this](https://egghead.io/lessons/react-confidently-ship-production-react-apps).

Basically it comes down to the fact that enzyme exposes APIs that allow you to test implementation details which makes your tests provide little-to-no value and a lot of friction. react-testing-library is founded on the philosophy that ["The more your tests resemble the way your software is used, the more confidence they can give you."](https://twitter.com/kentcdodds/status/977018512689455106) It works out really nicely that this also means that it doesn’t matter how you build your app, your tests with react-testing-library will still work! Many people have told me that they’ve refactored their apps to hooks and their tests continued to pass thanks to react-testing-library 😀 [React is an implementation detail](https://kentcdodds.com/blog/react-is-an-implementation-detail).

I hope that’s insightful/helpful!

---

<a name="regarding-migration-jquery-react-responded" href="#regarding-migration-jquery-react-responded">#</a> **Q:** Regarding the migration from jQuery to React. You responded to start with writing a small new feature using React. The question is what to do with the currently server rendered asp.net html returned to the client side? To gradually take off blocks of the html and turn those blocks into react components? Also: I saw suggestions to wrap the whole existing page initialization code into a react component and then refactor that component, any thoughts on that? — guylando

Those are both ways you could do the migration and I’ll be honest most migrations I’ve done have been a mix of both. The big day is when you swap the client-side router from framework Old to framework New. Typically that’s a big day because it results in a lot of bugs and it’s really hard to do. This is why I suggest starting small at first, then slowly letting it take over. A lot of places will also say: "Everything old stays as-is and everything new React." This is often a bit of a problem because if you require that all new stuff is React it typically means that you need to re-implement a TON of reusable components before you can get anything done.

So I’d suggest instead that you have some time allocated every sprint to rewrite some reusable component to React instead. Try to do as few changes as possible and make it happen over time. I hope that’s helpful.

---

<a name="preferred-way-imitate-componentdidupdate-useeffect" href="#preferred-way-imitate-componentdidupdate-useeffect">#</a> **Q:** What is your preferred way to imitate componentDidUpdate with useEffect? How do you usually bypass the first execution on mount? — hambaga

If you really want to imitate componentDidUpdate then you’ll need to use useLayoutEffect, but often useEffect works fine. [Read more here](https://kentcdodds.com/blog/useeffect-vs-uselayouteffect) about the difference.

Also, I wrote this hook yesterday:

```js
function useEffectPostMount(cb, inputs) {
  const postMount = React.useRef(false);
  React.useEffect(() => {
    if (postMount.current) {
      return cb();
    } else {
      postMount.current = true;
    }
  }, inputs);
}
```

Pretty simple and works well.

---

<a name="experience-tdd-creating-reacttestinglibrary-davidmfoley" href="#experience-tdd-creating-reacttestinglibrary-davidmfoley">#</a> **Q:** What was your experience with TDD before creating `react-testing-library`? — davidmfoley

So TDD with UI was a total joke. I tried it and it never worked. TDD with pure functions is and has always been a joy.

Now with `react-testing-library` I can actually do it and [it’s pretty great](https://www.youtube.com/watch?v=kCR3JAR7CHE&list=PLV5CVI1eNcJgCrPH_e6d57KRUTiDZgs0u).

---

<a name="tips-improving-onthejob-teacher-course" href="#tips-improving-onthejob-teacher-course">#</a> **Q:** Any tips on improving as an on-the-job teacher? So not as a course instructor or anything, but as a senior working with juniors, people new to React and JavaScript, or even other seniors who may have developed bad habits. — jonjongrim

I think the best thing to do as an on-the-job teacher is to develop a habit of doing it regularly. Teaching is a practiced skill and also developing a reputation as someone who knows what they’re talking about and should be listened to is something that comes over time. So schedule regular times to teach in one form or another. Force yourself into teaching situations often.

---

<a name="use-redux-mobx-also-hooks" href="#use-redux-mobx-also-hooks">#</a> **Q:** Do you use Redux or MobX and why? Also: Now that hooks are out together with useReducer and useContext and others, do you still use Redux/MobX? For which use cases do you still use Redux/MobX and when do you use hooks capabilities? — guylando

I used Redux at PayPal and it was ok, but I got tired of jumping around dozens of files trying to track the code path and trying to figure out why some bit of state had to be in Redux. I’m fine with Redux, but I’m not fine with how most people use it (putting all application state in the store is a really bad idea).

I’ve never used MobX, but I’m not huge on mutation as an API for state updates and I’m not huge on decorators either. I much prefer sticking as close to React as possible.

This needs to be updated a bit with a hooks world, but [I mostly still feel this way](https://kentcdodds.com/blog/application-state-management) about application state management.

---

<a name="hey-kent-think-ts-2019" href="#hey-kent-think-ts-2019">#</a> **Q:** Hey Kent, what do you think about TS in 2019? Is it must-know technology? Or can it be neglected? — czechue

I wouldn’t say that TS is a must-know technology, but there’s a reason that Static Typing is [included in the testing trophy](testingjavascript.com)! 🏆

[Read more](https://kentcdodds.com/blog/eliminate-an-entire-category-of-bugs-with-a-few-simple-tools)

[And more](https://kentcdodds.com/blog/unit-vs-integration-vs-e2e-tests)

I’m a big fan of TS on teams and think that almost every team doing lots of JavaScript could benefit by using TS.

One warning/tip: Your types DO NOT HAVE TO BE PERFECT. Feel free to throw any or unknown around here and there. Types are really important, but where people get angry at TS is when they try to make their types perfect and it stops them from shipping. So feel free to throw in an unknown there today as you’re learning TS, and come back later when you know TS better to fix it.
