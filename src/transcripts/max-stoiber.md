---
title: Max Stoiber
date: 2021-03-18
time: 1pm PT / 9PM GMT
location: Q&A Channel on Reactiflux
description: "Engineer @ [GatsbyJS](https://www.gatsbyjs.com/). Creator of styled-components & react-boilerplate. Maker of [Bedrock](http://bedrock.mxstbr.com) & [Feedback Fish](http://feedback.fish)"
people: "[Max Stoiber](https://twitter.com/mxstbr)"
---

[4:33 PM] mxstbr:I have (un?)fortunately never had to do that, so I don't really have any tips or advice here!
@Sonicrida
[Q&A] Does bedrock have multi-factor auth and/or support for social logins or passwords. Magic links can be inconvenient for users that use password managers so it would be nice to have options here :P
[4:34 PM] mxstbr:Absolutely, Bedrock just uses Passport, so you can use any of the 500+ authentication strategies that Passport supports! 😻
[4:34 PM] Gabe:[Q&A] How is your rock climbing going??!!
[4:34 PM] MapleLeaf 🍁:[Q&A] Given Tailwind's recent addition of a JIT compiler (+ related community projects), which also supports dynamic CSS values (e.g. top-[113px]), what remaining use cases do you see for a CSS-in-JS implementation of Tailwind? In other words, what could a CIJ implementation do that the JIT compiler couldn't?
[4:34 PM] IndecisiveQi:[Q&A] I'm using styled components and making a styled component for a line of CSS here and there is getting pretty tiring. Is this the way it is meant to be used?
[4:35 PM] SuperSheep:[Q&A] Does Bedrock play well with Serverless (e.g. Azure Functions)?
[4:35 PM] Deleted User:[Q&A] What are your views on the rise of the rapid decentralization, and would you ever work for the blockchain technology?
@Gabe
[Q&A] How is your rock climbing going??!!
[4:35 PM] mxstbr:I HAVEN'T BEEN ABLE TO GO IN SIX MONTHS AND I HATE IT!!!!

I've probably lost all of my muscle and skill 😦 I was projecting my first 7A (indoor) but couldn't finish it in time before we went into lockdown — now I'll definitely have to work my way back up there.

How is yours going Gabe?!
[4:36 PM] Gabe:oh no!!! was getting into the V6-V7 range and then I gained 20 lbs 😂
@MapleLeaf 🍁
[Q&A] Given Tailwind's recent addition of a JIT compiler (+ related community projects), which also supports dynamic CSS values (e.g. top-[113px]), what remaining use cases do you see for a CSS-in-JS implementation of Tailwind? In other words, what could a CIJ implementation do that the JIT compiler couldn't?
[4:36 PM] mxstbr:The JIT compiler is so good! I'm so glad they built that, however I still don't think atomics CSS is the best way to expose their (fantastic) design system. I can't wait for somebody to find another abstraction for it 😉
@SuperSheep
[Q&A] Does Bedrock play well with Serverless (e.g. Azure Functions)?
[4:37 PM] mxstbr:Bedrock uses Next.js API routes for all the backend functionality, so it's basically fully serverless already! (depending on where you host your product)
@IndecisiveQi
[Q&A] I'm using styled components and making a styled component for a line of CSS here and there is getting pretty tiring. Is this the way it is meant to be used?
[4:37 PM] mxstbr:Nope! That's why support the css={} prop on any DOM element 🙂 https://medium.com/styled-components/announcing-native-support-for-the-css-prop-in-styled-components-245ca5252feb
@Deleted User
[Q&A] What are your views on the rise of the rapid decentralization, and would you ever work for the blockchain technology?
[4:38 PM] mxstbr:I have literally no clue how the whole blockchain thing works. 🙈 I don't own any crypto (or plan to, for that matter).
[4:39 PM] IndecisiveQi:[Q&A] How did you decide the price of bedrock?
[4:40 PM] simply:[Q&A] why bedrock name? :p
[4:40 PM] Sonicrida:[Q&A] I appreciate your personal motivation list for wanting to run a startup. Was agency something you lacked at Github with spectrum (and a reason why it seemed you left pretty soon after joining)?
@IndecisiveQi
[Q&A] How did you decide the price of bedrock?
[4:42 PM] mxstbr:I calculated how much time it took me to set it up, then made it 1/100th of the amount of money I would've made if I had freelanced during that time instead.

Just kidding, I wish I had been that smart about it. I just YOLO'd the price. 🤣

In fact, I think I made it way too cheap. By now we'd probably be at 1/500th the amount of money I would've made as a freelance during that time 😬
@simply
[Q&A] why bedrock name? :p
[4:43 PM] mxstbr:Nope! Been very focussed on Bedrock at the moment 🙂
@Sonicrida
[Q&A] I appreciate your personal motivation list for wanting to run a startup. Was agency something you lacked at Github with spectrum (and a reason why it seemed you left pretty soon after joining)?
[4:44 PM] mxstbr:Yep 🙂 Anytime you work at a large company, you are very constrained in what you can do. You have a job, and doing anything outside of that job is not endorsed.

However, I enjoy variety: I like doing a bit of marketing, a bit of sales, a bit of customer research, a bit of design — not "just" pure engineering. I did not have the agency, the freedom to do that, hence why I left and am starting another startup! 🙂
[4:44 PM] Gabe:[Q&A] What will you do different with your next startup compared to the first?
[4:44 PM] esimba:[Q&A] Will gatsby StaticQueries ever get support for variables?
[4:45 PM] Deleted User:[Q&A] How did you get that sharp jawline?
[4:46 PM] AllanP:Can't wait for bedrock but out of curiousity is it built on top of blitz js or is it a custom setup?
@Gabe
[Q&A] What will you do different with your next startup compared to the first?
[4:46 PM] mxstbr:Fantastic question. I always compare starting a startup to surfing: one moment, you've caught a perfect wave and are surfing along into the sunset. The next moment, the wave smashes you into the floor face-first, water swoops over you and you're gasping for air.

That's what it feels like to build a startup. It's an emotional rollercoaster unlike anything else.

A lot of what success in startup-land is about is managing those emotions. When things are great, be excited but know that it's going to get worse. When things are bad, be sad but know that it can only get better. Going to try to even out those waves a lot better than I could at Spectrum 🙂
@esimba
[Q&A] Will gatsby StaticQueries ever get support for variables?
[4:46 PM] mxstbr:Unlikely, just based on how they work: the compiler won't know what those variables will be!
@Deleted User
[Q&A] How did you get that sharp jawline?
[4:47 PM] mxstbr:Have my parents to thank for that! 😉 They're the best 💜 In case you haven't seen https://www.youtube.com/watch?v=ifq3xhik8tE yet, would highly recommend watching just to get to know my amazing parents.
YouTube
Honeypot
How Open Source Changed My Life with Max Stoiber
[4:47 PM] Elsewhere:[Q&A] As a somewhat novice freelancer, do you feel Bedrock would be too much for me to handle, or would it be like developing SaaS with training wheels?
[4:47 PM] Deleted User:[Q&A] When will Gabe stop asking you to give answers, doesn't he know that you're a human and you get tired too?
@AllanP
Can't wait for bedrock but out of curiousity is it built on top of blitz js or is it a custom setup?
[4:48 PM] mxstbr:Bedrock doesn't contain custom abstractions like Blitz, it's just a collection of open source tools made to work really well together! There isn't even that much to learn, if you know Next / GraphQL / Prisma, you pretty much know Bedrock 🙂
@Deleted User
[Q&A] When will Gabe stop asking you to give answers, doesn't he know that you're a human and you get tired too?
[4:48 PM] mxstbr:🤣

Please don't! I'm loving this, this is super fun 😄
[4:48 PM] iggy:[Q&A] is there any question you wish you had an audience plant for so you could shill something? 👀
@mxstbr
Bedrock doesn't contain custom abstractions like Blitz, it's just a collection of open source tools made to work really well together! There isn't even that much to learn, if you know Next / GraphQL / Prisma, you pretty much know Bedrock 🙂
[4:49 PM] AllanP:👍
@Elsewhere
[Q&A] As a somewhat novice freelancer, do you feel Bedrock would be too much for me to handle, or would it be like developing SaaS with training wheels?
[4:49 PM] mxstbr:Hard to say, that depends on your level of experience with React / Next / GraphQL 🙂 I wouldn't recommend Bedrock to a beginner, as it's likely to be overwhelming — try to build your own version first, realise how difficult it is to make it work well and then buy Bedrock 😉
@iggy
[Q&A] is there any question you wish you had an audience plant for so you could shill something? 👀
[4:49 PM] mxstbr:Hahaha I appreciate that! I don't have anything to shill outside of Bedrock, but I feel like I've already shilled it enough with all the questions about it 😬
[4:50 PM] simply:[Q&A] Are you sad about spectrum being shut down?
@simply
[Q&A] Are you sad about spectrum being shut down?
[4:51 PM] mxstbr:Yes, very. I poured my heart into Spectrum for a solid two years, so seeing it be shut down definitely makes me sad. 🙂

However, it's definitely the right decision: GitHub discussions are fantastic and a much better replacement than what we had.
[4:51 PM] JasonHoku:[Q&A] There are a lot of rumors going around about React being bad at SEO. Is there anything you do in conjunction with React to optimize SEO in your projects? Or anything you would say on the matter of SEO utilities in conjunction with React?
[4:52 PM] adebiyial:[Q&A] what do you think about startups and the obsession with raising money.
@JasonHoku
[Q&A] There are a lot of rumors going around about React being bad at SEO. Is there anything you do in conjunction with React to optimize SEO in your projects? Or anything you would say on the matter of SEO utilities in conjunction with React?
[4:52 PM] mxstbr:Bullshit. Spectrum was built with React and had the best SEO of any real-time chat app I've ever seen 😉

SEO is just a matter of that, optimizing for search engines. You're going to need SSR / SSG, but once you have that whether you use React or anything else doesn't matter.
[4:52 PM] Okhai:[Q&A] What's in the future for styled-components? I really enjoy using it and can't wait for potential updates.
[4:53 PM] Maji:[Q&A] As a student I already tried different working environments (startups, freelance). Now I would like to try an internship in a large company but even with side projects it's still difficult to get an interview, do you have any tips to stand out
@adebiyial
[Q&A] what do you think about startups and the obsession with raising money.
[4:55 PM] mxstbr:Here's the thing about raising money: it's only useful for a specific type of company, a startup.

Startups === growth. If you're taking money from investors, you're essentially saying "I'm going to do everything I can to make this a huuuuuge company". That's a fine goal if that's what you want to do! However, if you don't then that's also perfectly fine! I've been enjoying watching indie hackers like Tobias & Timo Lins of https://splitbee.io/ do their thing without any outside investment and without being forced into growth at all costs 🙂

Personally, I do want to try to build a huuuuge company in my life, so I'm definitely going to bring investors on board for my next company. However, that's just a personal choice I've made for myself, not something everybody needs to do 🙂
@Okhai
[Q&A] What's in the future for styled-components? I really enjoy using it and can't wait for potential updates.
[4:56 PM] mxstbr:We have some distant plans to rework the core again to make it even faster & smaller but honestly... it's mostly done! It's really stable, bug-free and just works the way it should.

I would keep my eye out for new libraries that are up-and-coming like Stitches and Compiled — those are really driving the innovation nowadays!
[4:56 PM] simply:[Q&A] what do you think about remix run?
@Maji
[Q&A] As a student I already tried different working environments (startups, freelance). Now I would like to try an internship in a large company but even with side projects it's still difficult to get an interview, do you have any tips to stand out
[4:57 PM] mxstbr:Yes! The best thing you can do to stand out is to show that you understand "business". Specifically what I mean is, write something like "Increased sign-ups by xx% by spearheading an initiative to rebuild our frontend" and stuff like that.

Demonstrate that you can have business impact with your work, and any company will immediately want to hire you 🙂
@simply
[Q&A] what do you think about remix run?
[4:57 PM] mxstbr:I'm excited about Remix! I can't wait to see where it goes and all the innovations Michael and Ryan are working on 😻
[4:58 PM] adebiyial:[Q&A] what happens when someone tries to remix Remix? Would that be Remixed or what?
[4:58 PM] Elsewhere:[Q&A] in a battle royal of the mods who would win?
@Elsewhere
[Q&A] in a battle royal of the mods who would win?
[4:58 PM] mxstbr:Me
[4:58 PM] mxstbr:I'm a mod right now, I think
[4:59 PM] mxstbr:😉
[4:59 PM] simply:[Q&A] does the location matter for building a startup?
@simply
[Q&A] does the location matter for building a startup?
[5:00 PM] mxstbr:No. You can build a startup from anywhere. However, if you really want to take investment and build a startup startup, you have to know the right people — most of whom are still in San Francisco. Not at least spending time there is going to make your life a lot more difficult, unnecessarily.

However, for anything other than raising money: LONG LIVE REMOTE 👑
[5:00 PM] Gabe:Thank you all for attending this Thursday Reactiflux Q&A and asking some really good questions! That's all the time we have.

Let's take a moment to thank @mxstbr !! (opening the channel)
