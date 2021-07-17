---
title: Wallaby Team
date: 2021-01-19
time: 1pm PT / 9PM GMT
location: "LIVE on YouTube + Q&A Channel on Reactiflux"
description: "The team that creates [Wallaby.js](https://wallabyjs.com/) and [Quokka.js](https://quokkajs.com/) will be on to answer questions about their products, JavaScript/TypeScript testing, and how they create software development tools."
people: "[Artem Govorov](https://twitter.com/ArtemGovorov) and [Simon McEnlly](https://twitter.com/smcenlly)"
---

<a name="does-the-debugger-work" href="#does-the-debugger-work">#</a> **Q:** Does the debugger work with asynchronous code or when fetching from APIs? – vansaltzman

**A:** Yes - the debugger works with asynchronous code and when fetching from APIs.

– Simon McEnlly

---

<a name="when-these-projects-began" href="#when-these-projects-began">#</a> **Q:** When these projects began scaling and getting attraction, did you have to deal with any conflict of interests for the future of the projects?

ie. times when you had to straight up say “no” – dilraj

**A:** Definitely. We have to do this often now but earlier on it was much more challenging to say "no" to one request and "yes" to another. We try and balance working on features that are going to help the most number of people; when we're not sure exactly what that will be, where we can, we gather stats and measure. Obviously the effort involved in supporting a feature requirement, etc. plays a big part in that decision as well.

At the same time, we are pushing ourselves to make revolutionary changes to our product and the ecosystem so are really trying to think about big features that are going to be game changers for everyone.

– Simon McEnlly

---

<a name="how-would-one-go-about-testing" href="#how-would-one-go-about-testing">#</a> **Q:** How would one go about “testing” things in the larger ecosystem of your application. For example, suppose you wanted to run daily “tests” to make sure there is nothing fishy in a database table. Could I leverage Quokka/Wallaby to achieve this result? – dilraj

**A:** Wallaby and Quokka are the tools that provide tons of value with immediate feedback when you type your code/tests. So faster your tests are - more value you get from our tools. Longer running tests, such as e2e tests, or database tests, may still run with Wallaby, but the value of running them with Wallaby comparing to running them as a part of your CI/CD pipeline, may not be as substantial as with faster tests.

– Artem Govorov

---

<a name="are-there-any-plans-for-editor" href="#are-there-any-plans-for-editor">#</a> **Q:** Are there any plans for editor agnostic tooling? ie something that would work with vim? – DFG

**A:** Unfortunately each editor has its own API and own way of doing things that can't avoid. I think we'd need a public standard API for editor extension development to support this. Out of interest, which VIM editor are you using?

– Simon McEnlly

_**Follow-up**_: I use vim 8.2

---

<a name="i-bought-a-license" href="#i-bought-a-license">#</a> **Q:** I bought a licence for Quokka on black friday, but I've yet to really get into using it as I was doing a lot of Gatsby. I'm going to try it out in a CRA app project now. Are there any common gotchas? – Cloudbop

**A:** f you're using Quokka with Gatsby/CRA, there can definitely be some gotchas. Gatsby in particular adds some its own runtime functions that aren't available in node.js by default (which is how Quokka is running your project). You may run into this when using Quokka and will need to avoid this in your code. The other big gotcha for create-react-app is that many people expect quokka to work with code like:

```react
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

However, in this case, when Wallaby runs your code, nothing actually happens, all you've done is declare a function and not execute it. You'll need to also call `Welcome({name:'me'})` with some sample props (e.g. at the end of your file) in order for Quokka to run your component.

– Simon McEnlly

---

<a name="1st-of-all-thx" href="#moo">#</a> **Q:** 1st of all thx for developing Quokka, 2nd I am trying to configure it with React but still fail on it, any suggestion? – Linz

**A:** Quokka should work with Create-React-App without any config (Quokka has an internal preset for CRA specifically). If it doesn't work for you for CRA, or you're using some other React template/setup, please share the details at https://github.com/wallabyjs/quokka/issues, we are happy to help.

– Artem Govorov

---

<a name="i-wanna-use-it-on" href="#i-wanna-use-it-on">#</a> **Q:** I wanna use it on existed project do I need to create new one? – Linz

**A:** Yes, you should be able to use Quokka without any config on an existing CRA project.

– Artem Govorov

---

<a name="i-think-part-of-my" href="#i-think-part-of-my">#</a> **Q:** I think part of my confusion is regarding the Component runtime. So I should create a dummy component in Quokka (with dummy props) to test it? – Cloudbop

**A:** Yes - you'll also need to create a dummy component in order for the code to execute.

– Simon McEnlly

---

<a name="is-it-possible-to-integrate" href="#is-it-possible-to-integrate">#</a> **Q:** Is it possible to integrate it with other parts of runtime, like Redux? – Cloudbop

**A:** If you're using Quokka and want to use Redux, then you have to set up redux prior to Quokka executing your code. This can/may be a little tricky, depending on your project setup. You might normally see this code in your App entry point, etc.

– Simon McEnlly
