---
title: David McCabe
date: 2020-09-03
time: 1PM - 2PM PT
location: Q&A Channel Reactiflux
description: "Author of [Recoil](https://recoiljs.org/)"
people: "[@mcc_abe](https://twitter.com/mcc_abe)"
---

## Author of [Recoil](https://recoiljs.org/)

<a name="what-would-you-think-it" href="#what-would-you-think-it">#</a>**Q:**What would you think it's the best way for someone who's a junior to learn and get better in a certain field (like React or some other framework) – _Grincek_

**A:** Do lots of projects. If you aren't sure which way is a better approach to doing something, try both quickly.

---

<a name="what-is-the-draw-of" href="#what-is-the-draw-of">#</a>**Q:**What is the draw of using recoilJS over redux or similar libraries? – _dantalksalot_

**A:** Ease of use, makes it easier to create fast apps that have lots of different pieces of state.

---

<a name="when-react-concurrent-mode-will" href="#when-react-concurrent-mode-will">#</a>**Q:**When react concurrent mode will be officially released? – _ARKA160_

**A:** No official release date. The new facebook.com is running on concurrent. Upcoming releases of React will help with making existing code compatible. You can try Concurrent now using the experimental release (not in production).

---

<a name="is-redux-a-must-for" href="#is-redux-a-must-for">#</a>**Q:**Is Redux a must for state management? Or is an app better off without it. – _koqkito_

**A:** Is redux a must: No

---

<a name="what-are-some-good-projects" href="#what-are-some-good-projects">#</a>**Q:**What are some good projects for a developer who already feels comfortable with react and needs to advance but doesn't know how? – _Ozu_

**A:** Try to build more complex projects? I don't know.

---

<a name="what-resources-did-you-use" href="#what-resources-did-you-use">#</a>**Q:**What resources did you use to learn react? – _antoniodinkins_

**A:** I started learning React when it first came out, the only resources was the official docs, which were pretty good. I was trying to build a single-page UI for a company and just had to learn on the job.

---

<a name="state-persistence-seems-very-unstable" href="#state-persistence-seems-very-unstable">#</a>**Q:**State persistence seems very unstable/in flux right now, which is one of the drawbacks. What's your roadmap for this functionality? – _Kimmain_

**A:** There is a temporary API you can use now. We are experimenting with the permanent API. Soon but not sure exactly when.

---

<aname="#not-react-related" href="#not-react-related-but">#</a-but>**Q:**Not react related, but what does it take to work for Facebook? – _Raeven_

**A:** If you want to know about passing the interview I think there is a lot of information about the process that's published by FB recruiting. When I interviewed the experience was exactly what I was expecting based on the material I was sent.

---

<a name="how-frequently-do-you-use" href="#how-frequently-do-you-use">#</a>**Q:**How frequently do you use useMemo/useCallback in your components and what rules you have for when to use them? Do you automatically use them in most cases? – _Josephdo_

**A:** I generally only use these after observing that a child component's rendering is causing a performance problem.

---

<a name="will-recoil-have-the-ability" href="#will-recoil-have-the-ability">#</a>**Q:**Will Recoil have the ability to integrate with a design platform like Storybook? – _TylerSnow_

**A:** I do not know enough about it to say. I would expect so since it's apparently compatible with multiple different view libraries.

---

<a name="what-were-your-experiences-hunting" href="#what-were-your-experiences-hunting">#</a>**Q:**What were your experiences hunting for a job as a junior? – _Grincek_

**A:** When I was first in the industry I would go to meetups, find people using open-source software who needed some tiny modification done, put in the needed patch, and then they would hire me for contract work. This is probably not the best strategy in a strong job market though.

---

<a name="how-are-families-garbage-collected" href="#how-are-families-garbage-collected">#</a>**Q:**How are families garbage collected? – _frederik.batuna_

**A:** I am currently working on this, hope to release it soon. Meanwhile you can manually delete using useResetRecoilValue.

Oh by the way, I forgot to mention, Recoil 0.0.11 is going to be released very soon. We were planning to release it yesterday but found a significant bug at the last minute. So probably in the next day or two.

Recoil 0.0.11 has much better performance, experimental Concurrent Mode support, and some other improvements. Upcoming releases will then address memory, performance, and syncing with external storage and servers.

---

<a name="how-well-does-recoil-pair" href="#how-well-does-recoil-pair">#</a>**Q:**How well does Recoil pair with Immer? – _parichay28_

**A:** Haven't tried it, expect it's a great pairing.

---

<aname="#if-youre-going" href="#if-youre-going-to">#</a-to>**Q:**If you're going to use Recoil, should you manage your entire state there? Are performance implications if you do? If not, how do you decide what goes into "pure local" vs. managed in Recoil? – _Thandathere_

**A:** Great question. Using recoil vs local state does have some performance overhead. On the other hand, if you're using transaction observation for app-wide facilities such as persistence and URLs, that only applies to Recoil state.

---

<a name="i’ve-seen-that-react-is" href="#i’ve-seen-that-react-is">#</a>**Q:**I’ve seen that React is in the front-line, when we talk about SPA development. Could be React the future of web, like HTML is for the browser? What do you think? – _D4vi0h4ck3r_

**A:** React is a language in many ways, it might make sense to implement that language lower in the stack.

---

<a name="what-is-the-reason-behind" href="#what-is-the-reason-behind">#</a>**Q:**What is the reason behind giving everything a unique key in Recoil? Doesn’t this modularity way more difficult? – _yuchimake_

**A:** They're used for persistence, logging, debugging, etc. I would like to find a good solution to statically ensure uniqueness, this is a major weakness currently. However, I haven't seen it be a problem in practice even with projects using hundreds of atoms written by many people across different teams.

---

<a name="there-are-a-lot-of" href="#there-are-a-lot-of">#</a>**Q:**There are a lot of state management libraries. Each have their own strengths and weaknesses. Can you tell something about the (fundamental) weaknesses of Recoil? When would you not use this? – _mees_

**A:** Relay has a much more sophisticated approach to server-owned data. By knowing the queries statically it's possible to start executing queries while the client is still downloading the code. And it can handle mutations. Recoil's async stuff is limited to time-invariant data and fetch-as-you-render.

---

<a nam="#is-hooks-the-future" href="#is-hooks-the-future?">#</a?>**Q:**Is hooks the future? or classes would hang around for a bit. I honestly find classes cleaner and structured. – _Raeven_

**A:** There is no plan to deprecate classes. However, hooks have huge advantages both for the developer ease of use and implementation. I have not known anyone who's really gotten the hang of hooks to ever look back. They do have a substantial learning curve, though.

That being said, I think if you were learning React from the ground up as hooks-only it would be simpler than learning class components. Hooks more closely model how React actually works, making it easier to write non-buggy code.

---

<a name="in-one-of-the-early" href="#in-one-of-the-early">#</a>**Q:**In one of the early interviews you did, a question was asked about you speaking with the react team and how receptive they were to possibly introducing concepts from recoil into react. How have those discussions progressed since and are there things that you'd like to see coming from that? – _Sonicrida_

**A:** React has to work for a much broader class of apps than any specific state library does. Parts of Recoil are not applicable across all apps (e.g. async stuff), while the basic need to share state across components is fairly universal. There has been work to try to make the Context API more flexible which would obviate this need. I don't know when this is going to happen, though.
The Concurrent Mode is an area where the React team is doing a lot of work to make it feasible for more apps. I'm really excited about the work there.
We'll continue to see some incredible stuff unlocked by that project in the long term.

---

<a name="when-you-were-first-started" href="#when-you-were-first-started">#</a>**Q:**When you were first started working on Recoil (early), how did you manage tasks/hitting goals when working with 1-2 people? Is a TODO.md file with a to-do list good enough or was there something a bit more sophisticated that helped you manage things in the long run? – _dilraj_

**A:** Coordinating work: at FB we use Workplace by Facebook, it's a great product http://workplace.com/

---

<a name="what-is-the-best-use" href="#what-is-the-best-use">#</a>**Q:**What is the best use-case for selectors and would what is the benefit of using over handling that logic in your component? – _cagethem_

**A:** Advantage of selectors versus handling in component (which I take to mean having a memoized value in the component that you recompute when certain props change): Selector graph can hit different parts of the React tree rather than only whole subtrees. It can also change shape: You can have a conditional dependency. This is hard to do otherwise because of the Rules of Hooks. (Selectors can be less restrictive because they are pure functions)

---

<a name="is-there-a-suggested-naming" href="#is-there-a-suggested-naming">#</a>**Q:**Is there a suggested naming convention for keys to ensure uniqueness? – _Amr_

**A:** You can prefix by module or product area. If prefixes are too specific it can make extra work when refactoring, if you need your keys to be stable across time.

---

<a name="did-you-build-recoil-as" href="#did-you-build-recoil-as">#</a>**Q:**Did you build Recoil as part of your work at FB? Is this something you get to for work, or is this purely a side project? – _Thandado_

**A:** It was an on-the-job project. We created Recoil in order to help with a specific app internal to FB that had major performance problems. We decided to make it a separate library since we thought it might be useful in other situations, which turned out to be true. Would not have created a state management library if I hadn't had to due to the specific requirements of this app.

---

<a name="what-can-we-expect-more" href="#what-can-we-expect-more">#</a>**Q:**What can we expect more from recoil in the coming future (short and long term)? – _parichay28_

**A:** Expect better performance and memory management in apps with large atom families. A more robust implementation of async selectors. APIs for developer tools. APIs for synchronizing state with external storage, URLs, servers, etc.
A big part of the performance stuff is eliminating places where Recoil copies data structures. Instead we need to share structure.

---

<a name="is-there-an-eta-for" href="#is-there-an-eta-for">#</a>**Q:**Is there an ETA for proper React-Native support? The ongoing PR seems to be a dead in the water for a while :frowning: – _Kimbit_

**A:** We had some back-and-forth with various people about React Native support, but unfortunately I don't think a consensus emerged about the best way to do it. Nobody has expressed a willingness to maintain it and unfortunately none of us has expertise in it. I would be very happy to merge a PR that people with knowledge of the area agree is a good approach.

---

<aname="#whats-your-opinion" href="#whats-your-opinion-on">#</a-on>**Q:**What's your opinion on the future of React Native? – _Grincek_

**A:** I don't have any special knowledge of React Native. I know FB continues to invest in it and build important apps and experiences with it. It seems to me that the work React team is doing generally, such as concurrent and a lot of performance-related research, would benefit RN even more.

---

<a name="there-was-a-lot-of" href="#there-was-a-lot-of">#</a>**Q:**There was a lot of interesting discourse in the few months after recoil came out where many users thought that it was an official react state management library which seemed to cause some drama on social media and a bit of trouble in regards to Dan and some of the more active team members on social media having to clarify that it's a separate project a ton. Do you feel as though this is something that could've been managed better with the release of recoil and something that should be taken into consideration whenever facebook releases other possible experimental react packages to cause less confusion within the community? – _Sonicrida_

**A:** Regarding communication about "officialness": I don't know how this could have been managed better. It seems like a certain small number of people are going to jump to wild conclusions no matter what you say.

---

<a name="since-recoil-seems-to-be" href="#since-recoil-seems-to-be">#</a>**Q:**Since Recoil seems to be a state management library for exclusively for React, has there been any talks about whether it should come in as a default dependency with create-react-app after hitting npx create-react-app my-app in the future? – _green_lantern 🪐_

**A:** I think the majority of apps are fine with just React, so I don't personally see a need for that.

---

<a name="what-about-recoil-integration-with" href="#what-about-recoil-integration-with">#</a>**Q:**What about recoil integration with Relay? – _ARKA160_

**A:** The typical way to use both together is for Recoil atoms to be passed into Relay query variables.

I highly recommend Relay for the types of things it's designed for. They have done a lot of really sophisticated work and it's getting better very quickly. If you haven't used it in a while give it a try.

---

<a name="will-there-be-work-done" href="#will-there-be-work-done">#</a>**Q:**Will there be work done to reduce Recoil's bundle size in future? – _voldemort_

**A:** This was not a goal for the specific apps we were designing with Recoil. If somebody wants to make it smaller-bundled there is probably low-hanging fruit for that.

awaiting more questions, but I guess I'll say more about bundle size. The original use-case for Recoil was apps that download large blobs of data to the client, so there wasn't any gain from optimizing initial page load since we were just going to have to wait a long time for queries. However as more different apps adopt it it makes more sense to try to reduce it.

---

<a name="any-recommendations-for-other-libraries" href="#any-recommendations-for-other-libraries">#</a>**Q:**Any recommendations for other libraries/patterns to use alongside Recoil for – \_Mark Mstate \_management use-cases that Recoil is not suited for?

**A:** Use Relay for most server-owned data.

---

<a name="do-you-think-other-front" href="#do-you-think-other-front">#</a>**Q:**Do you think other front-end libraries are gonna adapt JSX? – _Grincek_

**A:** I don't know. I think it's pretty simple to make a plugin to compile JSX to whatever your library needs.

---

<a name="how-is-your-current-experience" href="#how-is-your-current-experience">#</a>**Q:**How is your current experience working with Facebook? Is the work fast paced or is it more demanding now that many people are working remotely? – _Poot_

**A:** Cannot recommend FB highly enough as an employer. You get to work with people (not just engineers but also management, ops, facilities, etc.) that are both highly competent and well-aligned. I have not found it to be high stress at all. Rather, the ability to move really quickly feels terrific.

If you're thinking about applying to work at FB, do it. Study hard and then give the interview a shot. I don't think you'll be sorry.

By the way, the interview process at FB is based on the ability to write real practical code, not textbook problems.

For the UIE/front-end recruitinng pipeline, you get questions about building good performant UIs in the browser.

---

<a name="what-was-the-toughest-thing" href="#what-was-the-toughest-thing">#</a>**Q:**What was the toughest thing or challenge that you faced while building Recoil? – _Spark_

**A:** The most technically challenging thing with Recoil has been supporting changeable selector dependencies. This has been the cause of most difficult bugs in Recoil and is very hard to think about. I mean that you can do:

```js
if (get(a)) {
  return get(b);
} else {
  return get(c);
}
```

and your selector will be subscribed to only b or only c, according to whether a is true.

---

<a name="any-tip-for-aspiring-state" href="#any-tip-for-aspiring-state">#</a>**Q:**Any tip for aspiring state library authors about concurrent mode and useMutableStore — have you had much trouble with the APIs? – _jfinity_

**A:** useMutableSource is quite easy to use and actually made Recoil a lot simpler versus what we were doing before.
