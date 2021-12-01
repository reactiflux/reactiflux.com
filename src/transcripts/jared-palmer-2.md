---
title: Jared Palmer
date: 2021-01-14
time: 1pm PT / 9PM GMT
location: Q&A Channel on Reactiflux
description: "Creator of [Formik](https://formik.org/), [Razzle](https://razzlejs.org/), [TSDX](https://tsdx.io/), and more. Founder of [Formium](https://twitter.com/FormiumHQ) and host of [The Undefined Podcast](https://twitter.com/theundefinedio)"
people: "[Jared Palmer](https://twitter.com/jaredpalmer)"
---

<a name="what-were-some-of-the" href="#what-were-some-of-the">#</a> **Q:** What were some of the biggest pain points you ran into while developing Formium? – JosNun

**A:** The hardest part was build the recursive logic engine. It is a mix of all the business logic, all the React performance tricks I know of, and also UI..

---

<a name="is-the-any-plan" href="#is-the-any-plan">#</a> **Q:** Is there any plan in reducing the amount of issues on GitHub? [React Hook Form][react-hook-form] for example has less issues compared to Formik – NoLongerMe

**A:** Despite Formik's popularity, it is still maintained by a very small active group of people. I only have so much time to write open source nowadays, and the vast majority of issues don't impact day to day usage.

---

<a name="how-far-into-a-project" href="#how-far-into-a-project">#</a> **Q:** How far into a project do you prefer to be before you attempt to raise capital? – Roboto

**A:** Raising capital is always plan B for me. I largely agree with Paul Jarvis' "Company of One" philosophy. I had the opportunity (and still do) to raise capital from several VC funds for Formik/Formium but decided not to. Maybe one day I will, but right now I am happy to work with our enterprise customers and raise money the old fashioned way--through sales.

---

<a name="how-has-react-hook-form" href="#how-has-react-hook-form">#</a> **Q:** How has [react hook form][react-hook-form] influenced Formik? – joel🎲

**A:** A lot of form libraries have effectively copied/cloned Formik's API. I am flattered by this. It means that I got it "right."

---

<a name="does-concurrent-mode-help-with" href="#does-concurrent-mode-help-with">#</a> **Q:** Does concurrent mode help with the performance issues you've encountered, and would it have been easier to optimize performance with a different framework? – Vanishy

**A:** Over the course of 2020, I wrote the form builder around 4 times. Most recent iteration is with Recoil. Not using concurrent mode at the moment in any meaningful way.

---

<a name="did-you-write-v0.1-in-1-week" href="#did-you-write-v0.1-in-1-week">#</a> **Q:** Did you write v0.1 in 1 week or less? Jk. Still, what was the thought process and timeline behind developing for ex formik? – SLCH

**A:** Ian White and I wrote Formik v0 in a day and refactored it over the course of a month or so before open sourcing it in 2017.

---

<a name="what-is-your-opinion-on-free" href="#what-is-your-opinion-on-free">#</a> **Q:** What is your opinion on free things on the internet? To what extent is it ethical to monetize things? – JakubGamer

**A:** There are only 3 business models in the world.

- I pay
- You pay
- Someone else pays

---

<a name="why-did-you-use-yup" href="#why-did-you-use-yup">#</a> **Q:** Why did you use yup instead of defining native validations, Its complex and sometime makes things more confusing speaking from a beginner perspective. – Raizel

**A:** We looked at a few validation libraries on GitHub and liked Yup the best since it looked like PropTypes. The app we were working on had very complex validation logic so we knew that native validation wasn't going to work.

Formik was never meant to be for beginners. The expectation is that people know how to write forms by hand in React already.

---

<a name="how-do-you-see-formium-evolving" href="#how-do-you-see-formium-evolving">#</a> **Q:** How do you see formium evolving over the next several years and how do you think about it in the broader context of the form builder landscape? – bfine

**A:** I expect Formium to evolve into a few different areas. Obviously form building, but also storage and analytics. I think it's going to be the missing piece between hand coded forms and traditional form builders.

---

<a name="what-would-you-say-to-entry" href="#what-would-you-say-to-entry">#</a> **Q:** What would you say to entry level developers who are torn trying to choose between learning 20 different frameworks? – Big Jumbo

**A:** I learn new tools/frameworks when researching or solving a problem. This is my guiding light. For example, right now with Turborepo, I am learning all about build systems and graph theory. Frameworks will come and go, what matters is learning how to solve problems.

---

<a name="what-do-you-think-is-the-best" href="#what-do-you-think-is-the-best">#</a> **Q:** What do you think is the best way to start earning money as a programmer are? (topic of monetization) – JakubGamer

**A:** There isn't a "best" way. I'd say the question comes down to "how do you want to spend your day?" If you can't just spend every day like that, then your first step is to get to the point where you can do that. You'll need to figure out what you can do, what you're willing to do, what you enjoy doing, and what people are willing to pay you to do. Once you figure out this you have some choices. For example, there is the instructor/content route, this is the Kent C Dodds / Wes Bos approach. This can be fairly successful but earnings are pretty much capped at 1-2m / year. It's really hard to do more than that selling courses (without a staff). Another route is consulting. You can make a lot there too, especially if you can charge on project value (vs. hourly rates). The other route is IC at a company. Startups pay less, big tech pays more, finance pays the most. But, for me, the only way to really really change my universe is to own equity in something, like a product or a company. I'm extremely comfortable having done consulting for years but have hit a local maximum where the only way to the next level of stuff for me and my family is equity. I don't really need to work right now. I have infinite runway at the moment. So the only thing to do is build products that can scale.

To "start" earning money, I'd say start writing and making open source projects. These will set you apart from other peers and allow you to charge more than market rate. It also opens a lot of doors regardless of your education.

You can then transform that into courses, consulting, events, and products

or... just have cooler stuff on your resume.

---

<a name="what-excites-you-about-react" href="#what-excites-you-about-react">#</a> **Q:** What excites you about react in 2021? – kdichev

**A:** I am insanely excited about server components. They are going to make development a lot easier and also faster. Can't wait to see what abstractions people build on top of them.

---

<a name="do-you-think-formik-is" href="#do-you-think-formik-is">#</a> **Q:** Do you think Formik is necessarily siloed into being non-beginner friendly, or do you think the gap could be breached to be both beginner friendly and still technically powerful/flexible? – samsch

**A:** I think that it could be for beginners with enough documentation. However, very few contributors want to write docs and examples.

---

<a name="how-would-you-differentiate-an" href="#how-would-you-differentiate-an">#</a> **Q:** How would you differentiate an open-source/free project to one that you should monetize and what are indicators that a project might have a financial future? – ~goomy~

**A:** I think open source has changed a lot. In the past, before VC money got involved, it was a lot more collegial. Now, everyone wants to monetize instantly. Unfortunately, this just isn't possible. Some projects are extremely suited to monetization while others are not. It totally depends on how or if you can add value and charge for additional IP. One of the things I am doing with Turbo that is going to be different from my other projects is building for enterprise from Day 1. In addition to the CLI there is going to be an on-prem server and potentially a SaaS service as well. The CLI will still be open source and is still 10x faster than lerna even without a server, but the server can crank it even faster. I also am collaborating with enterprise on Turbo already, before its even out yet. I am specifically building for these customers--knowing that the solution will be generally popular ahead of time.

---

<a name="what-made-you-decide-to-start" href="#what-made-you-decide-to-start">#</a> **Q:** What made you decide to start companies based on developer tools instead of more consumer or business focused companies? – DylanVann

**A:** Not intentional at all. I am just better at making the level builders than the games themselves I guess.

---

<a name="can-you-recommend-any-reading" href="#can-you-recommend-any-reading">#</a> **Q:** Can you recommend any reading material or videos on being a successful software developer in business? – LilMicro

**A:** I would read all of the Basecamp books, Company of One by Paul Jarvis, The Making of a Manager by Julie Zhou, Ask, Zero to One. Then also Patterns of Enterprise Application Architecture by Martin Fowler and all of the Paul Graham essays.

---

<a name="how-would-you-recommend-a-student" href="#how-would-you-recommend-a-student">#</a> **Q:** How would you recommend a student in college try to break into the industry? Projects don't seem to be enough at the moment. – incredible

**A:** Build a breakable toy for yourself like a blog or a CMS or a todo list app or a calendar. Something small. Something you can do. Use it to learn about the tools you're interested in. When it gets good or if it sucks, either way, you'll have something to show for it. You can add it to your github or launch it as a product or write some blog posts about how you built it.

---

<a name="how-would-you-recommend-getting" href="#how-would-you-recommend-getting">#</a> **Q:** How would you recommend getting an internship as a full stack developer? I'm going to be a freshman in high school next year, but I haven't really been able to start this process. – hello world

**A:** The best way to get internships/jobs is networking. Find the person you want to be on LinkedIn, Twitter, GitHub, etc and figure out what you need your resume to look like to get their job. DM them asking "how do I get to where you are?" and ask for some advice on what they would do if they were in your shoes. If you can get them on a zoom or call or do that. Then send a thank you note that day. It should end with something like "Please let me know if there is any other person or team member you think I should speak with. Thanks again." Hopefully they connect you with someone else. Then rinse and repeat.

[react-hook-form]: https://react-hook-form.com/
