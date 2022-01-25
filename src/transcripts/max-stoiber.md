---
title: Max Stoiber
date: 2021-03-18
time: 1pm PT / 9PM GMT
location: Q&A Channel on Reactiflux
description: "Engineer @ [GatsbyJS](https://www.gatsbyjs.com/). Creator of styled-components & react-boilerplate. Maker of [Bedrock](http://bedrock.mxstbr.com) & [Feedback Fish](http://feedback.fish)"
people: "[Max Stoiber](https://twitter.com/mxstbr)"
---

<a href="#hey-max-thanks-for" name="hey-max-thanks-for">#</a> **Q:** I see people talking about using css vars instead of theme file with context in styled components… What's your opinion and what do you think is the best practice for projects? – Yann

Whether or not it makes sense to use CSS vars depends on your team, whether you have e.g. designers who don't know JS too well, and how dynamic your theming needs to be!

---

<a href="#whats-the-best-way-to" name="whats-the-best-way-to">#</a> **Q:** Whats the best way to practice? – DJ Turkey

I don't really "practice" coding per-se, although I'd really love to know if anybody else does — kind of like sports people 🤔 I just build stuff I like, and get better by looking at my code from a couple months ago and realising "Damn, what I did there was really confusing/unmaintainable!" 😬

---

<a href="#what-is-the-difference-between" name="what-is-the-difference-between">#</a> **Q:** What is the difference between software engineering and computer science, and is it easy to transition between both? – JakubGamer

I unfortunately don't know how easy it is to switch between them, as I've only done very little computer science in my career. I didn't study or anything, I've mostly just written code 🙂 I do think CompSci is it's own discipline, I doubt I could "just" switch to doing that full-time

---

<a href="#what-are-your-thoughts-on" name="what-are-your-thoughts-on">#</a> **Q:** What are your thoughts on React for building simple static websites? – de2290

I love using React, personally! It just fits really well with my brain and works the way I think, so I'd much rather use it than anything else, even for static sites and other stuff

---

<a href="#in-react-native-you" name="in-react-native-you">#</a> **Q:** In React Native, you can use Styled Components but can't do nested styling at the minute. Why isn't it currently the case? And do you guys plan to change this and allow nested style in react native as it is available in react.js? – Vi

Unfortunately, that's just a limitation of ReactNative, it simply does not have nested styling so we also cannot support it

---

<a href="#what-is-your-opinion-on" name="what-is-your-opinion-on">#</a> **Q:** What is your opinion on Stitches? Do you think it will influence styled-components and the broader ecosystem? – Christoph

This is a fantastic question! I'm extremely excited to see a bunch of innovation happening in the CSS-in-JS ecosystem again — it feels like that kind of stagnated over the past years.

Personally, I'm keeping my 👀 on Stitches from Modulz & Compiled CSS from Atlassian, I think both of those have the opportunity to really change the CSS game once again. Would recommend checking them out!

---

<a href="#is-there-any-planned-version" name="is-there-any-planned-version">#</a> **Q:** Is there any planned version for bedrock REST friendly, if not, why? – simply

No. I have exclusively used GraphQL for the past five years and don't plan on ever using REST again (unless I have to). GraphQL's developer experience is simply miles ahead of REST, between Prisma, Nexus and GraphQL Codegen there is no way I can move quicker any other way 🙂

Bedrock could certainly be used REST-ful, of course — it's "just" a Next.js app after all. However, you'll loose out on a bunch of the benefits of the tightly integrated stack, so you're likely better off building your own foundation.

---

<a href="#hi-max-ive-been" name="hi-max-ive-been">#</a> **Q:** I’ve been coding with React for the last 6 months now working in a company for 4 of them, and I feel like both improved and not improved at the same time. What advice would you give a new starter like me to improve myself in a better way in React? – yemirhan

Congratulations!! 🎉 I also feel like I haven't gotten "better" at React itself ever since I learned hooks 🤣 Most of my growth has come from moving up and down the stack in related areas like learning more about how to build APIs, how databases work, how to scale backends, how to build design systems, etc.

I think React, once you understand it deeply, is really simple. I just realised recently that I look at the React docs maybe once every month, if at all!

---

<a href="#how-do-you-read-an" name="how-do-you-read-an">#</a> **Q:** How do you read an open source project's code and contribute to it? – Aslemammad

This is really difficult!! Mainly, don't be discouraged when you don't understand everything immediately — particularly if it's a mature project that's been worked on for years. It can take a while to get familiar with the standards & conventions, and understanding the different pieces and how they work together. Take your time!

---

<a href="#can-you-use-something-like" name="can-you-use-something-like">#</a> **Q:** Can you use something like Next.js to build a big dashboard application like Stripe? – adebiyial

Yes. 🙂

---

<a href="#what-would-you-say-about" name="what-would-you-say-about">#</a> **Q:** What would you say about those who bully me and demotivate me to code? – Deleted User

Don't worry about what anybody else says, they're just jealous because they haven't found anything they enjoy doing as much as you love coding! Ultimately, I think everybody wants to have their "thing", the one thing they really love — and once you find it, the people that haven't yet get jealous and pull you down.

Ignore them and hang out with folks that are excited for you instead! Like the Reactiflux community 😉

---

This is fun! Trying to type as quickly as I can so I answer all the questions 😊

Sidenote: shoutout to the moderation team for keeping this civil! I know how hard it is to moderate a community of any size, nevermind one as big as this 👏👏👏👏

---

<a href="#whats-your-opinion-on-box" name="whats-your-opinion-on-box">#</a> **Q:** What’s your opinion on Box component like implementation (like in material UI), vs atomic CSS frameworks like tailwind? – HHK

I recently wrote about why I think Tailwind is awesome, and the interesting thing is that it has nothing to do with it being atomic CSS: https://mxstbr.com/thoughts/tailwind In fact, I would not be surprised if we're seeing a fantastic system like Tailwind but implemented as not-atomic-CSS in the near future!

---

<a href="#what-are-your-thoughts-on" name="what-are-your-thoughts-on">#</a> **Q:** What are your thoughts on SvelteJS? – parvez

I haven't been able to use it so I can't say much, except that it looks really exciting. I love watching the JS ecosystem evolve and get better — people complain about "framework fatigue" but honestly, I love nothing more! Please keep innovating! I don't want to be stuck using the same tools I'm using today in fifty years — that would be really sad to me

---

<a href="#do-you-recommend-cra-or" name="do-you-recommend-cra-or">#</a> **Q:** Do you recommend CRA or SSR (Nextjs) for dashboard admins (behind authentication wall, why? – simply

I would likely recommend CRA because SSR / SSG are unnecessary for that use case and only add scaling problems. Why endure long build times / server side rendering server troubles if you don't have to?

---

<a href="#as-someone-who-sporadically-tries" name="as-someone-who-sporadically-tries">#</a> **Q:** As someone who sporadically tries to contribute to OSS (just doc modifications et all), what are more ways I can find projects / repos to contribute to? – \_binarynumber

I think the best contributions are the ones that are already sitting on your hard drive right now! While existing projects could always use more manpower, you are already writing code every day — and if you wrote a piece of code, you likely didn't find a suitable open source project that does what you need.

So why not make that happen by publishing your own code as a library? 🙂

---

<a href="#ive-been-struggling-with" name="ive-been-struggling-with">#</a> **Q:** I've been struggling with authentication in React for a while now. Typically I'd save my token in local storage but I don't like this enough as it is barely exposed. I know you should save insensitive data. But I see many big applications don't even do that. Instead they use cookies. How do you do yours? – adebiyial

100% cookies for everything, specifically stateless ones:

- Stateful authentication requires a database query on every request.
- Stateless authentication only does a database query when the user authenticates.
- Stateful authentication allows you (or your users) to revoke sessions.
- You cannot revoke sessions with stateless authentication.

At Spectrum, I initially implemented stateful authentication but it started affecting our performance too much since it's overhead on every request and we were hammering our database unnecessarily.

Switching to stateless authentication made scaling a lot easier, and we never even revoked a session or implemented that for users while we had stateful authentication.

I've used stateless authentication ever since, hence why it's in Bedrock as well!

---

<a href="#whats-the-best-way" name="whats-the-best-way">#</a> **Q:** What's the best way to find ideas for something one would want to build for their side hustle? – \_binarynumber

Same answer as to your last question: which problems are you encountering in your day-to-day life? What keeps annoying the everliving hell out of you?

If you have a problem, it's very likely somebody else will as well! (note: verify this before building your solution) So, why not solve it for everybody?!

---

<a href="#in-your-opinion-if-you" name="in-your-opinion-if-you">#</a> **Q:** In your opinion if you were to create a web ui framework, how would You go about approaching it? – SilentOS

I would never dare to try, hahaha! Kind of ties into my last answer, I don't have any problems with React or other current-gen web UI frameworks, so i wouldn't even know what I'd do differently — at which point, why even build a new library?

I'd rather solve unsolved problems, like we did with styled-components way back when 🙂

---

<a href="#a-bit-of-controversial-question" name="a-bit-of-controversial-question">#</a> **Q:** What's your opinion on CS degrees & surviving without it in the industry? – \_binarynumber

I don't have one and I don't plan to get one 🙂 I think you can be a perfectly competent programmer without one. However, if you like learning about CompSci a CS degree is likely the best way to learn more about it! I just don't enjoy CompSci that much, I'd rather just build stuff 😉

---

<a href="#is-it-better-to-spend" name="is-it-better-to-spend">#</a> **Q:** Is it better to spend time on big open source projects, or small open source projects that may become influencial like react boilerplate? – JakubGamer

Hard to say, better in what way? I don't think they're exclusive: you'll likely learn a lot when helping to maintain a big open source project that's going to be helpful when building your own from scratch!

I personally maintained KeystoneJS when it was already big, and it taught me a lot of things I then used to grow and maintain react-boilerplate and styled-components

---

<a href="#do-you-think-reactboilerplate" name="do-you-think-reactboilerplate">#</a> **Q:** Do you think react-boilerplate has a future? Do you plan to work on it anymore? – Simon1709

I haven't used react-boilerplate in many years because I haven't had the use case it solves, so I also couldn't maintain it anymore. Instead, I've passed off maintenance to a team of maintainers who actually use it and know how best to improve it — but honestly I have no clue how that's going!

---

<a href="#do-you-have-any-opinions" name="do-you-have-any-opinions">#</a> **Q:** Do you have any opinions on tools that generate graphql apis, like Postgraphile and Hasura? – (d,f,g)=> {}

I've tried Hasura and found it... lacking for anything serious 😬 But that was a year or so ago, so things might have changed! A lot of people have tried to solve this problem (GraphCool, Reindex) and a lot of people are still trying to solve it (GraphQL Portal, StepZen, Hasura,...). Time will tell if anyone will actually figure it out...

---

<a href="#do-you-reasonml-getting-bigger" name="do-you-reasonml-getting-bigger">#</a> **Q:** Do you reasonML getting bigger and making more of an impact in the react community? – ivoryblakk

I definitely hope so, ReScript is awesome! I haven't personally had time to dive into it, but it's high up on my list of technologies to learn 😻

---

<a href="#what-do-you-think-about" name="what-do-you-think-about">#</a> **Q:** What do you think about webassemby and its intégration in react – thmax

I have never used wasm so I unfortunately can't say 🙂

---

<a href="#what-do-you-think-about" name="what-do-you-think-about">#</a> **Q:** What do you think about making our own code reactive instead of using reactive library or frameworks, OR just using the reactivity of the frameworks? – rohit2sharma95

I've played around a bit with CycleJS and RxJS, but it's never quite clicked for me unfortunately. I think in React now, so those frameworks are very different to the way my brain works. 😬 I wish I could understand them better!

---

<a href="#why-dont-you-go" name="why-dont-you-go">#</a> **Q:** Why don't you go work at a FAANG company? – Todor

Great question! I recently had to decide what I want to do next in my life after leaving Gatsby, and had some job offers from well-known companies that would pay me a lot more money than I ever dreamt of making.

However, when I sat down and had an honest conversation with myself about what I want in life, I realised that those jobs would only make me unhappy.

Very personally, here's what I wrote down in my own, private notes. (I didn't think I'd be sharing this, so excuse the raw-ness) If you look at the list of things I value, you'll very quickly realise that most of them are in direct conflict with working at a big company 😬

That's why I want to found another startup! It's going to make me much happier, even if I make less money.

![A bullet list of "what I value": Connection (People? Friendship? Love?). Responsibility. Agency (Freedom? Self-authorization?). Variety. Openness (Transparancy?). Prestige. Another bullet list of "what I don't care about": Money. Impact.](/q-and-a/mxstbr-values.png)

---

<a href="#i-feel-that-my-projects" name="i-feel-that-my-projects">#</a> **Q:** I feel that my projects with styled-components are unorganized, what pattern would you recommend for me? Something like RSCSS or BEM for css – Edgar Marques

https://stackoverflow.com/a/42996969 🙂

---

<a href="#how-your-new-experience-as" name="how-your-new-experience-as">#</a> **Q:** How your new experience as investor is going? – simply

It's an expensive hobby, I'll tell you that! 🤣

More seriously, it's just a really fun way for me to following other entrepreneurs journeys. Being a fly on the wall as they figure out their own path is incredibly satisfying and fun. I try to only invest in startups that could benefit from my experience / audience / knowledge / etc so I can maybe even help them avoid a problem or two that I've already seen 🙂

Will definitely have to dial back my investing now that I don't have a job anymore though 😬 (more context for those curious: https://mxstbr.com/investing)

I have (un?)fortunately never had to do that, so I don't really have any tips or advice here!

---

<a href="#does-bedrock-have-multifactor" name="does-bedrock-have-multifactor">#</a> **Q:** Does bedrock have multi-factor auth and/or support for social logins or passwords. Magic links can be inconvenient for users that use password managers so it would be nice to have options here :P – Sonicrida

Absolutely, Bedrock just uses Passport, so you can use any of the 500+ authentication strategies that Passport supports! 😻

---

<a href="#how-is-your-rock-climbing" name="how-is-your-rock-climbing">#</a> **Q:** How is your rock climbing going??!! – Gabe

I HAVEN'T BEEN ABLE TO GO IN SIX MONTHS AND I HATE IT!!!!

I've probably lost all of my muscle and skill 😦 I was projecting my first 7A (indoor) but couldn't finish it in time before we went into lockdown — now I'll definitely have to work my way back up there.

---

<a href="#given-tailwinds-recent-addition" name="given-tailwinds-recent-addition">#</a> **Q:** Given Tailwind's recent addition of a JIT compiler (+ related community projects), which also supports dynamic CSS values (e.g. top-[113px]), what remaining use cases do you see for a CSS-in-JS implementation of Tailwind? In other words, what could a CIJ implementation do that the JIT compiler couldn't? – MapleLeaf 🍁

The JIT compiler is so good! I'm so glad they built that, however I still don't think atomics CSS is the best way to expose their (fantastic) design system. I can't wait for somebody to find another abstraction for it 😉

---

<a href="#does-bedrock-play-well-with" name="does-bedrock-play-well-with">#</a> **Q:** Does Bedrock play well with Serverless (e.g. Azure Functions)? – SuperSheep

Bedrock uses Next.js API routes for all the backend functionality, so it's basically fully serverless already! (depending on where you host your product)

---

<a href="#im-using-styled-components" name="im-using-styled-components">#</a> **Q:** I'm using styled components and making a styled component for a line of CSS here and there is getting pretty tiring. Is this the way it is meant to be used? – IndecisiveQi

Nope! That's why support the css={} prop on any DOM element 🙂 https://medium.com/styled-components/announcing-native-support-for-the-css-prop-in-styled-components-245ca5252feb

---

<a href="#what-are-your-views-on" name="what-are-your-views-on">#</a> **Q:** What are your views on the rise of the rapid decentralization, and would you ever work for the blockchain technology? – Deleted User

I have literally no clue how the whole blockchain thing works. 🙈 I don't own any crypto (or plan to, for that matter).

---

<a href="#how-did-you-decide-the" name="how-did-you-decide-the">#</a> **Q:** How did you decide the price of bedrock? – IndecisiveQi

I calculated how much time it took me to set it up, then made it 1/100th of the amount of money I would've made if I had freelanced during that time instead.

Just kidding, I wish I had been that smart about it. I just YOLO'd the price. 🤣

In fact, I think I made it way too cheap. By now we'd probably be at 1/500th the amount of money I would've made as a freelance during that time 😬

---

<a href="#why-bedrock-name-p" name="why-bedrock-name-p">#</a> **Q:** Why bedrock name? :p – simply

Nope! Been very focussed on Bedrock at the moment 🙂

---

<a href="#i-appreciate-your-personal-motivation" name="i-appreciate-your-personal-motivation">#</a> **Q:** I appreciate your personal motivation list for wanting to run a startup. Was agency something you lacked at Github with spectrum (and a reason why it seemed you left pretty soon after joining)? – Sonicrida

Yep 🙂 Anytime you work at a large company, you are very constrained in what you can do. You have a job, and doing anything outside of that job is not endorsed.

However, I enjoy variety: I like doing a bit of marketing, a bit of sales, a bit of customer research, a bit of design — not "just" pure engineering. I did not have the agency, the freedom to do that, hence why I left and am starting another startup! 🙂

---

<a href="#what-will-you-do-different" name="what-will-you-do-different">#</a> **Q:** What will you do different with your next startup compared to the first? – Gabe

Fantastic question. I always compare starting a startup to surfing: one moment, you've caught a perfect wave and are surfing along into the sunset. The next moment, the wave smashes you into the floor face-first, water swoops over you and you're gasping for air.

That's what it feels like to build a startup. It's an emotional rollercoaster unlike anything else.

A lot of what success in startup-land is about is managing those emotions. When things are great, be excited but know that it's going to get worse. When things are bad, be sad but know that it can only get better. Going to try to even out those waves a lot better than I could at Spectrum 🙂

---

<a href="#will-gatsby-staticqueries-ever-get" name="will-gatsby-staticqueries-ever-get">#</a> **Q:** Will gatsby StaticQueries ever get support for variables? – esimba

Unlikely, just based on how they work: the compiler won't know what those variables will be!

---

<a href="#how-did-you-get-that" name="how-did-you-get-that">#</a> **Q:** How did you get that sharp jawline? – Deleted User

Have my parents to thank for that! 😉 They're the best 💜 In case you haven't seen https://www.youtube.com/watch?v=ifq3xhik8tE yet, would highly recommend watching just to get to know my amazing parents.

---

<a href="#cant-wait-for-bedrock" name="cant-wait-for-bedrock">#</a> **Q:** Can't wait for bedrock but out of curiousity is it built on top of blitz js or is it a custom setup? – AllanP

Bedrock doesn't contain custom abstractions like Blitz, it's just a collection of open source tools made to work really well together! There isn't even that much to learn, if you know Next / GraphQL / Prisma, you pretty much know Bedrock 🙂

---

<a href="#when-will-gabe-stop-asking" name="when-will-gabe-stop-asking">#</a> **Q:** When will Gabe stop asking you to give answers, doesn't he know that you're a human and you get tired too? – Deleted User

🤣

Please don't! I'm loving this, this is super fun 😄

---

<a href="#as-a-somewhat-novice-freelancer" name="as-a-somewhat-novice-freelancer">#</a> **Q:** As a somewhat novice freelancer, do you feel Bedrock would be too much for me to handle, or would it be like developing SaaS with training wheels? – Elsewhere

Hard to say, that depends on your level of experience with React / Next / GraphQL 🙂 I wouldn't recommend Bedrock to a beginner, as it's likely to be overwhelming — try to build your own version first, realise how difficult it is to make it work well and then buy Bedrock 😉

---

<a href="#is-there-any-question-you" name="is-there-any-question-you">#</a> **Q:** Is there any question you wish you had an audience plant for so you could shill something? 👀 – iggy

Hahaha I appreciate that! I don't have anything to shill outside of Bedrock, but I feel like I've already shilled it enough with all the questions about it 😬

---

<a href="#are-you-sad-about-spectrum" name="are-you-sad-about-spectrum">#</a> **Q:** Are you sad about spectrum being shut down? – simply

Yes, very. I poured my heart into Spectrum for a solid two years, so seeing it be shut down definitely makes me sad. 🙂

However, it's definitely the right decision: GitHub discussions are fantastic and a much better replacement than what we had.

---

<a href="#there-are-a-lot-of" name="there-are-a-lot-of">#</a> **Q:** There are a lot of rumors going around about React being bad at SEO. Is there anything you do in conjunction with React to optimize SEO in your projects? Or anything you would say on the matter of SEO utilities in conjunction with React? – JasonHoku

Bullshit. Spectrum was built with React and had the best SEO of any real-time chat app I've ever seen 😉

SEO is just a matter of that, optimizing for search engines. You're going to need SSR / SSG, but once you have that whether you use React or anything else doesn't matter.

---

<a href="#what-do-you-think-about" name="what-do-you-think-about">#</a> **Q:** What do you think about startups and the obsession with raising money. – adebiyial

Here's the thing about raising money: it's only useful for a specific type of company, a startup.

Startups === growth. If you're taking money from investors, you're essentially saying "I'm going to do everything I can to make this a huuuuuge company". That's a fine goal if that's what you want to do! However, if you don't then that's also perfectly fine! I've been enjoying watching indie hackers like Tobias & Timo Lins of https://splitbee.io/ do their thing without any outside investment and without being forced into growth at all costs 🙂

Personally, I do want to try to build a huuuuge company in my life, so I'm definitely going to bring investors on board for my next company. However, that's just a personal choice I've made for myself, not something everybody needs to do 🙂

---

<a href="#whats-in-the-future" name="whats-in-the-future">#</a> **Q:** What's in the future for styled-components? I really enjoy using it and can't wait for potential updates. – Okhai

We have some distant plans to rework the core again to make it even faster & smaller but honestly... it's mostly done! It's really stable, bug-free and just works the way it should.

I would keep my eye out for new libraries that are up-and-coming like Stitches and Compiled — those are really driving the innovation nowadays!

---

<a href="#as-a-student-i-already" name="as-a-student-i-already">#</a> **Q:** As a student I already tried different working environments (startups, freelance). Now I would like to try an internship in a large company but even with side projects it's still difficult to get an interview, do you have any tips to stand out – Maji

Yes! The best thing you can do to stand out is to show that you understand "business". Specifically what I mean is, write something like "Increased sign-ups by xx% by spearheading an initiative to rebuild our frontend" and stuff like that.

Demonstrate that you can have business impact with your work, and any company will immediately want to hire you 🙂

---

<a href="#what-do-you-think-about" name="what-do-you-think-about">#</a> **Q:** What do you think about remix run? – simply

I'm excited about Remix! I can't wait to see where it goes and all the innovations Michael and Ryan are working on 😻

---

<a href="#in-a-battle-royal-of" name="in-a-battle-royal-of">#</a> **Q:** In a battle royal of the mods who would win? – Elsewhere

Me. I'm a mod right now, I think 😉

---

<a href="#does-the-location-matter-for" name="does-the-location-matter-for">#</a> **Q:** Does the location matter for building a startup? – simply

No. You can build a startup from anywhere. However, if you really want to take investment and build a startup startup, you have to know the right people — most of whom are still in San Francisco. Not at least spending time there is going to make your life a lot more difficult, unnecessarily.

However, for anything other than raising money: LONG LIVE REMOTE 👑
