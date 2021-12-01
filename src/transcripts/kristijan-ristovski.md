---
title: Kristijan Ristovki
date: 2019-04-18
time: 1-2pm PT / 8-9PM GMT
location: Q&A Channel Reactiflux
description: "Founder of [React Academy](http://reactacademy.io). Working on [@twizzyapp](https://www.twitter.com/twizzyapp), [@sizzyapp](https://www.twitter.com/sizzyapp), [@jsui_app](https://www.twitter.com/jsui_app), and [http://ok-google.io](http://ok-google.io)."
people: "[thekitze](https://twitter.com/thekitze)"
---

## [Kristijan Ristovki][kitze] ([@kitze](https://twitter.com/thekitze)), founder of [React Academy][react-academy], working on [@twizzyapp][twizzy-app], [@sizzyapp][sizzy-app], [@jsui_app][js-ui], and [ok-google.io][ok-google-io]

<a name="with-jsui-app-i-was-wondering" href="#with-jsui-app-i-was-wondering">#</a> **Q:** With [JSUI][js-ui] App, I was wondering if you had to deal with NPM package management or if its offloaded by some other task, I'm building an app in the browser that works a bit like [CodeSandbox](https://codesandbox.io) and needs to download npm packages how would you go about doing something like this safely within a browser? – lifeiscontent

**A:** Nope, [JSUI][js-ui] it's just executing node and npm scripts under the hood, so it's not really similar to [CodeSandbox](https://codesandbox.io). I know [Ives](http://ivesvh.com/) has built some crazy stuff to deal with this (you can check out his article) https://hackernoon.com/how-we-make-npm-packages-work-in-the-browser-announcing-the-new-packager-6ce16aa4cee6.

---

<a name="what-made-you-choose-google" href="#what-made-you-choose-google">#</a> **Q:** What made you choose Google's Assistant instead of Alexa for the vast array of skills on [`ok-google`][ok-google-io]. Alexa had a vastly superior app ecosystem already? – sprinting

**A:** I was using Android so I needed it for me. Honestly I make most of my projects because I personally need them and I think more people should do that because that's the only way you can be authentic when building something.

---

<a name="redux-or-apollo-or-context" href="#redux-or-apollo-or-context">#</a> **Q:** [Redux][redux] or [apollo][apollo-graphql] or context api for state management? your personal choice! – rezaavoor

**A:** Context and hooks will take you far enough nowadays, so you don't need [redux][redux]. [Apollo][apollo-graphql] state management requires tons of boilerplate and honestly it's a PITA to even change a single variable. I'm using [mobx-state-tree][mobx-state-tree] for more complex parts of my apps. Observables ftw.

---

<a name="what-was-your-inspiration-for" href="#what-was-your-inspiration-for">#</a> **Q:** What was your inspiration for creating [ok-google][ok-google-io]? – Kognise

**A:** I was frustrated that I had to look up these lists of commands that were usually posted on Reddit or a forum, and most of the time they were outdated. So I wanted to make a nice and final list .... which ironically is now outdated 😂️.

---

<a name="is-it-time-i-started" href="#is-it-time-i-started">#</a> **Q:** Is it time I started teaching myself hooks as opposed to using classes? – omgitsgod

**A:** Yes. Especially if you're using tons of lifecycle methods. You can neatly abstract everything away in couple of useEffect(s) and the code becomes way easier to read/write.

---

<a name="what-are-some-ways-jsui" href="#what-are-some-ways-jsui">#</a> **Q:** What are some ways [JSUI][js-ui] improves a developer's workflow over using the command-line? Do you use it more or less often than the command-line? – Kognise

**A:** I'm rarely using the command line, for some very weird things that [JSUI][js-ui] doesn't support (like docker). [JSUI][js-ui] makes my DX way better because I can be way faster with it. For example I can easily navigate to a project, open it, copy few files, paste them to my current project, etc. Also [JSUI][js-ui]'s terminal is not as powerful as iTerm etc. but IMO it does some things better. One day I'll push a new version ... one day.

Oh god did I tap myself on the back with that one "MY APPS ARE GOOD GUISE TRUST ME".

---

<a name="did-you-get-the-google" href="#did-you-get-the-google">#</a> **Q:** Did you get the Google t-shirt/ Home combo for the skills? 😮 – sprinting

**A:** I got shit. I talked to Google for some sponsorship but they were just telling me to email this different person which told me to email another person which told me to email another person and I was like fuck it I'll just use Siri.

---

<a name="whats-the-thing-youre-most" href="#whats-the-thing-youre-most">#</a> **Q:** What's the thing that you're most hyped about now? React or not! – BTM

**A:** Code wise: I'm waiting for some magical [mobx][mobx] + [graphql](https://graphql.org/) state management solution for the client, there's some discussion going on here: https://github.com/mobxjs/mobx-state-tree/issues/1148#issuecomment-465538450

Non code: THE OCULUS QUEST. I can't wait.

---

<a name="if-youve-heard-of-it" href="#if-youve-heard-of-it">#</a> **Q:** If you've heard of it, what are your opinions on [Svelte](https://svelte.dev/) and how do you think it compares to React? If not, please ignore. 😛 – Kognise

**A:** I've heard of it but I'm not interested because I cannot switch my mindset from JSX to HTML. No matter what the benefits are it's gonna be a huge backwards step in DX for me.

---

<a name="i-recon-you-been" href="#i-recon-you-been">#</a> **Q:** I recon you been praising [mobx-state-tree][mobx-state-tree] on twitter earlier as well. For someone who finds the docs lacking of more "complex" examples in, let's say, a real world app - do you have any good pointers for read / OSS? – Beazt

**A:** Ah to be honest I haven't even read the full docs. Have you watched [Michel](https://michel.codes/)'s [course on egghead](https://egghead.io/courses/manage-application-state-with-mobx-state-tree)? I'm just writing my apps and peeking at the docs (or spamming [Michel](https://michel.codes/) in his DMs) when I stumble upon a roadblock. I'm not using any super-advanced features from [MST][mobx-state-tree] so maybe I'm even missing something.

---

<a name="love-your-videos" href="#love-your-videos">#</a> **Q:** Love your videos. Is your hotel room door closed now? – Gabbo

**A:** Thanks! 😄 I'm just working on the new vlog and there's a scene where I'm checking the door twice 😂️.

---

<a name="you-mentioned-earlier-how" href="#you-mentioned-earlier-how">#</a> **Q:** You mentioned earlier how “context and hooks will take you far enough nowadays”, what use case(s) would you use [Redux][redux] for? – Brady.

**A:** As I said, I'm not using [Redux][redux] anymore. When you get used to the observable model in [MobX][mobx] and [mobx-state-tree][mobx-state-tree], writing [Redux][redux] feels like writing jQuery... I'm using [MST][mobx-state-tree] when I have some complex models, for example I have a "CalendarPlanner" component that has ~600 lines of mobx-state-tree code. If I wanted to write that with hooks and context it would be a major PITA.

---

<a name="when-will-wee-see-a" href="#when-will-wee-see-a">#</a> **Q:** When will we see a [kitze][kitze] vs [kenwheeler][ken-wheeler] arm wrestle? – ecmaplasm

**A:** Why would you watch a video that lasts 0.2 seconds.

---

<a name="just-tried-sizzy-app" href="#just-tried-sizzy-app">#</a> **Q:** Just tried your [Sizzy app][sizzy-app] for my localhost project. It's not SSL enabled. The moment I entered http://localhost:3007/ , it went into infinite loading. Means its loading again and again. – puspen

**A:** Stay tuned, an interesting release is coming soon (DM me if you want to test).

_**Follow-up**_: Thanks. DM you where? Discord?

Twitter is better, my DMs are open https://twitter.com/thekitze.

---

<a name="there-are-multiple-ways-to" href="#there-are-multiple-ways-to">#</a> **Q:** There are multiple ways to make money as a software engineer: employment, freelancing, contracting, consulting, workshops, selling things online, building a business, etc. How's your thought process on the subject to choose which one of these to do? – Bruno Lemos

**A:** I just rolled with the flow. I started with a normal dev job, then saw that freelancing can bring you 10x more money, then worked as a freelancer for ~1 year, then saw that doing workshops is super-interesting and can also bring you more money, and now I'm just jumping to the next thing that's exciting, challenging, and can bring more money: which is SaaS products. I love teaching people, and I'll keep doing it, but sometimes it gets repetitive and boring, and the business doesn't scale as well as a SaaS. Also building actual apps is way more challenging than just teaching the same material over and over again.

Hopefully this answers the question?

---

<a name="whats-the-coolest-tech-thing" href="#whats-the-coolest-tech-thing">#</a> **Q:** What's the coolest tech thing you've done recently? (or coolest thing period!) – Iggytoad

**A:** Uhm I guess https://twizzy.app/.

---

<a name="do-you-plan-sharing-some" href="#do-you-plan-sharing-some">#</a> **Q:** Do you plan sharing some \$tats of your [Twizzy app][twizzy-app]? 😛 – Bruno Lemos

**A:** Lol people think I made a fortune out of this app, but it made less than 600 euros overall.

---

<a name="considering-you-not-being" href="#considering-you-not-being">#</a> **Q:** Considering you **not being by birth genius**, how much time, efforts did it take to become who you are today? – puspen

<a name="what-is-the-roadmap" href="#what-is-the-roadmap">#</a> **Q:** What is the roadmap to become you? – FastCoding000

**A:** As I said before, all of the apps I have released were just a solution to my own problem. I think more people should just sit down and think what problems do they have, and try to solve them with software. Even if an app seems like a stupid idea at first, you'll soon figure out that other people have that problem and you can sell it to them, and improve it together.

---

<a name="do-you-have-any-recommendations" href="#do-you-have-any-recommendations">#</a> **Q:** Do you have any recommendations for coming up with interesting ideas for OSS? I know you previously mentioned it should be software that you would personally use, but I’m still having a hard time coming up with useful software that other people will actually use. – Brady.

**A:** Same like with my apps, the things that I have open sourced are just solutions for my problems. I cannot come up with an interesting OSS idea out of the blue. Just solve one of your problems and open source the solution 😃.

---

<a name="you-mentioned-you-bring-in" href="#you-mentioned-you-bring-in">#</a> **Q:** You mentioned you bring in 10x more money doing freelancing. Could you be more specific? I know if varies per client/project etc, but how much do you charge for things like that? And for the teaching of courses, do you charge a flat fee or per seat? – foo

**A:** Nah, the first job that I had paid very bad. So jumping to freelancing and working from some European clients was a big shift from me (hence 10x). When I got used to it I was just increasing my rate every few weeks or so. About charging, it really depends. Sometimes it's per seat, and sometimes a flat fee, it really depends on the company/conference we're organising the workshop with.

---

<a name="please-from-your-answer" href="#please-from-your-answer">#</a> **Q:** Please from your answer to @Bruno Lemos <a href="#there-are-multiple-ways-to">question</a>, are there any free learning resources from you one can make use of? – shinyuy

**A:** The workshops that I'm doing (https://reactacademy.io/) are in-person only, for companies and conferences, but I'm gonna release an online version of them soon.

But I started documenting my journey on https://youtube.com/kitze (conferences, traveling, speaking, ideas etc.) so you can expect more content there.

👆 the description of the channel is a lie 😂️.

---

<a name="you-have-a-great-number" href="#you-have-a-great-number">#</a> **Q:** You have a great number of followers on twitter. Is that something you do on purpose (building an audience)? Which opportunities has this bring to you? – Bruno Lemos

**A:** Most of them are fake I bought them from Russia.

Lol on a serious note I have no idea how to get followers. I just tweet a mix of helpful and funny things I guess it works 🤷‍♂️.

---

<a name="when-do-you-reach-for" href="#when-do-you-reach-for">#</a> **Q:** When do you reach for [mobx-state-tree][mobx-state-tree] vs plain [mobx][mobx]? 😄 – spion

**A:** Good question, I'm only using [MST][mobx-state-tree] nowadays because it gives me structure for the store and it allows me to access the parent/root state without any hacks. How about you? 😄

_**Follow-up**_: Plain [mobx][mobx], [state-tree][mobx-state-tree] still feels too opinionated 😃.

That's also true. I'm keeping my eye on https://overmindjs.org/ and I want to try it for a project.

---

<a name="possibly-unrelated-but-are-there" href="#possibly-unrelated-but-are-there">#</a> **Q:** Possibly unrelated, but are there any plans for a [React Academy][react-academy] in Dallas any time soon? 😛 – yeehaw

**A:** I haven't done a workshop in the USA yet (too far tbh) there's a bigger chance that I'll release the online version first.

---

<a name="whats-the-most-powerful-thing" href="#whats-the-most-powerful-thing">#</a> **Q:** What's the most powerful thing in react, in your opinion? 😃 – James J

**A:** Currently: the useEffect hook, it's amazing.

---

<a name="what-do-you-think-of" href="#what-do-you-think-of">#</a> **Q:** What do you think of [Ken][ken-wheeler]'s [React in Canvas](https://github.com/kenwheeler/react-amsterdam-demos) thingy he did some time back? – sprinting

**A:** I can't wait for him to save us from the hell that's the DOM.

---

<a name="do-you-think-reactn" href="#do-you-think-reactn">#</a> **Q:** Do you think [ReactN][reactn] or a similar approach will replace Redux in the near future? – zeferinix

**A:** What the hell is [ReactN][reactn]. I've never heard of [ReactN][reactn] but I'll check it out after this ama.

---

<a name="you-seem-to-workout" href="#you-seem-to-workout">#</a> **Q:** You seem to workout regularly. How's your work-life balance? – Bruno Lemos

**A:** I'm trying to work out 6/7 days of the week. It's just a habit by now. I was using this challenge 2 years ago: https://medium.com/@kitze/how-i-tricked-my-brain-into-working-out-24-times-in-30-days-64010244dd14.

I'm using https://www.dejal.com/timeout/ to force me to take breaks from the computer every 40 minutes because otherwise I can sit down for hours which is terrible both for the back and for the mind/concentration.

If you're a dev trying to get in shape, join our slack: https://bit.ly/twitter-workouts.

---

<a name="which-podcasts-have-you-been" href="#which-podcasts-have-you-been">#</a> **Q:** Which podcasts have you been listening to? Which ones you recommend? – Bruno Lemos

**A:** I'm completely hooked to [Bill Burr](https://billburr.com/)'s ["Monday Morning Podcast"](https://billburr.com/podcast/) which is a comedy but I've listened to every single episode and I'm laughing my ass off. The dude's bananas. I also like [JRE](http://podcasts.joerogan.net/) and [Kevin Rose](https://www.kevinrose.com/) (and have 12 other ones that everyone listens to but I just ignore).

[Kevin Rose's podcast](https://www.kevinrose.com/) is underrated IMO. I like it way more than [Tim Ferris](https://tim.blog/podcast/). It's just a shame he doesn't post that often https://www.kevinrose.com/.

---

<a name="how-did-you-get" href="#how-did-you-get">#</a> **Q:** How did you get such a cool name? I want one please 😃. – Gabe

**A:** ebay.de

---

<a name="can-i-be-on-the-vlog" href="#can-i-be-on-the-vlog">#</a> **Q:** Can i be on the vlog. Just kidding 😄 maybe when I go to Europe. – Bruno Lemos

**A:** Waiting for you to come to Europe 😄.

---

<a name="best-sushi-in-gdasnk" href="#best-sushi-in-gdasnk">#</a> **Q:** Best Sushi in Gdansk, where? – BTM

**A:** Koko Sushi 🤷‍♀️.

[apollo-graphql]: https://www.apollographql.com/
[js-ui]: https://github.com/kitze/jsui
[kitze]: https://kitze.io/
[ken-wheeler]: https://twitter.com/ken_wheeler
[mobx]: https://mobx.js.org
[mobx-state-tree]: https://github.com/mobxjs/mobx-state-tree
[ok-google-io]: https://ok-google.io/
[react-academy]: https://www.reactacademy.io
[reactn]: https://www.npmjs.com/package/reactn
[redux]: https://redux.js.org
[sizzy-app]: https://sizzy.app/
[twizzy-app]: https://twizzy.app
