---
title: Jordan Eldredge
date: 2018-04-12
time: 1-2pm PT / 8-9PM GMT
location: Q&A Channel Reactiflux
description: "Engineer @ Facebook working on [Nuclide](https://nuclide.io/) | Author of [Winamp2-js](https://github.com/captbaritone/winamp2-js)"
people: "[@captbaritone](https://twitter.com/captbaritone)"
---

## Working on Nuclide @ Facebook and author of the [Winamp2-js](https://www.npmjs.com/package/webamp) project.

<a name="winamp2js-really-awesome-really-brings" href="#winamp2js-really-awesome-really-brings">#</a> **Q:** Winamp2.js is really awesome! It really brings me back <3. Do you have any plans of maybe turning it in to an electron app so it can run natively? :smiley: - Gabe

**A:** Yes! It's actually being worked on right now. I'm a little nervous though that it will hit some kind of "uncanny valley" where it's just close enough to "right" that it feels really gross. You can follow along here: https://github.com/durasj/winamp2-js-desktop

---

<a name="maybe-dumb-question-choose-winamp" href="#maybe-dumb-question-choose-winamp">#</a> **Q:** Maybe this is a dumb question, but why do you choose winamp? - AdrianC

**A:** I was sitting in my room and the parallel between Winamp skins' implementation, which is just a zip filled with .bmp sprite sheets, struck me as being similar to CSS sprite sheets, which I was working on at work. I thought it would be interesting to see if I could recreated the Winamp UI with CSS using the original assets. Once I got it working, it was fun enough that I continued playing with it.

---

<a name="nuclide-cmcaboy" href="#nuclide-cmcaboy">#</a> **Q:** What is nuclide? - cmcaboy

**A:** Nuclide (https://nuclide.io/) is an IDE built on top of Atom which is built specifically to integrate the many internal tools at Facebook. It's intended to make writing code at Facebook efficient and enjoyable.

---

<a name="expect-nuclide-atom-ide-exist" href="#expect-nuclide-atom-ide-exist">#</a> **Q:** Do you expect Nuclide and Atom IDE to exist side-by-side or do you think one will supercede the other? - ckknight

**A:** I think that Atom IDE is probably a better fit for most non-Facebook developers. For now, I think they will exist side by side, but more functionality which is generally valuable we be getting moved into Atom IDE.

---

<a name="major-challenge-faced-working-winamp2" href="#major-challenge-faced-working-winamp2">#</a> **Q:** What was the major challenge you faced while working on winamp2? - Karma7

**A:** Getting skin parsing working was probably the biggest challenge. I wrote [a post about how it works](https://jordaneldredge.com/blog/how-winamp2-js-loads-native-skins-in-your-browser/), if you are interested. Beyond that, the Web Audio API is still really fickle across browsers. I wrote [a tweet thread about that](https://twitter.com/captbaritone/status/975981869924630528).

---

<a name="plans-nuclide-support-vscode-understand" href="#plans-nuclide-support-vscode-understand">#</a> **Q:** Any plans to have nuclide support for VSCode? I understand that could take significant efforts including rewrite. - dhruvdutt

**A:** We've embraced the Language Server Protocol that VSCode defined (this is what enables Atom IDE to make use of LSP servers) so much of our language level work can theoretically be shared. That said, there are other core challenges that we would face: remote development and a much more locked down UI API. Basically, I don't think the rich UI experience we offer in Nuclide would be possible in VSCode.

---

<a name="would-like-write-blog-articles" href="#would-like-write-blog-articles">#</a> **Q:** I would like to write a blog and articles too, but I don't know how to start. Do you have any advice for me? - AdrianC

**A:** My blog has generally taken the form of things I've learned. Don't worry to much about if the things you're learning are "original research" or solving problems that haven't been solved before. If it was challenging for you, there are likely others out there who face the same challenge and your perspective can probably help. In general, look for interesting things to work on, contribute to, and you will probably find interesting problems to write about.

---

<a name="documentation-future-write-plugins-nuclide" href="#documentation-future-write-plugins-nuclide">#</a> **Q:** Will there be more documentation in the future on how to write plugins for Nuclide? I tried writing a plugin once and never got really far with it because I found myself diving more into the source than being able to read docs on how architecture is built for it. - lifeiscontent

**A:** Plugins are just Atom plugins. The documentation for Atom plugins should be the same. The remote code can be somewhat Nuclide specific. If you have any specific questions, feel free to file an issue and we can look into either answering it, or improving the docs.

---

<a name="talk-typical-day-work-whats" href="#talk-typical-day-work-whats">#</a> **Q:** Can you talk about your typical day at work? What's the work/life balance at? What self-development opportunities does FB offer? - BTM

**A:** I work a pretty early schedule because it works well with my life schedule (I have a 2.5 year old). So I'm in the office at 7:40, grab lunch, work in a pretty quiet office until most other folks get in around 10. I have a few meetings throughout the day, but am mainly left to work on the things that I think are most important. When I get home, I put my daughter to bed, and try to find some time (maybe an hour or so) to hack on a side project. This works pretty well for me, in terms of work/life balance. I don't feel pressured to work outside of work hours.

Facebook is great in terms of career advancement. Mostly just getting to work with smart people, and read great code.

---

<a name="new-react-trying-learn-get" href="#new-react-trying-learn-get">#</a> **Q:** I am new to React, been trying to learn and to get a job related to it, recently I am finding it hard to implement while learning, any suggestions? - Arun

**A:** It's a totally different paradigm, I sympathize. Understanding the fundamental ideas behind React (there is a virtual dom, your DOM is a function of your state etc) is very important, and will inform everything you write. I think finding a project that you are passionate about is a great way to learn. When really want to solve a real problem, figuring out how to use a library is a means to an end, not a means in and of itself.

---

<a name="manage-free-time-work-impressive" href="#manage-free-time-work-impressive">#</a> **Q:** How did you manage your free time to work on this impressive side project? - cluk3

**A:** If you'll notice, I've been working on this particular side project for over three years. I like to have lots of side projects going on at any one time. That way I can walk away from one when I get stuck, and only resume when I feel like I have a good solution. I don't worry too much about moving fast. There's enough of that at work. Instead I just work on what's interesting that evening. That said, I find the projects interesting enough that I do tend to find time most evenings to make some small progress.

---

<a name="facebook-obviously-highly-values-modern" href="#facebook-obviously-highly-values-modern">#</a> **Q:** Facebook obviously highly values modern libraries and web technologies but we all know the tech industry changes incredibly quickly. What do you expect will be the next major shift in in tech industry? - Llaver

**A:** I actually think, at least within JavaScript UI code, that we've reached a leveling off point. I think we're going to continue to see an evolution of the declarative style that React introduced. There will likely be tools on top of that to optimize it. Other kinds of build tools, or languages/constructs that make static analysis more powerful and let our build tools do more heavy lifting.

---

<a name="tips-would-give-student-going" href="#tips-would-give-student-going">#</a> **Q:** What tips would you give to a student going into college to study computer science and applying to internships? - Ron

**A:** For me, having a side project (or 10) was very beneficial. I never went to school for CS, so I don't have much context on your exact situation, but I would say, walking into an interview with a problem that you are passionate about, and have thought about and tried to solve makes for a great conversation topic.

---

<a name="could-share-us-good-habit" href="#could-share-us-good-habit">#</a> **Q:** Could you share us some good habit what do you have?? - AdrianC

**A:** Lol, I dunno. I'm pretty good at staying in touch with people. The more I work in this industry, the more I realize how important relationships are. You will learn much more from a friendship with another developer who is interesting than from any book or tutorial.

---

<a name="suggestion-beginners-make-career-facebook" href="#suggestion-beginners-make-career-facebook">#</a> **Q:** What are suggestion for beginners to make their career to Facebook specially for those who are not living in USA? - Shoaib

**A:** Great question, and one I'm probably not very well equipped to answer. I would say contributing to open source is a great way to meet people and to learn what great code looks like. I wish you the best!

---

<a name="study-school-adrianc" href="#study-school-adrianc">#</a> **Q:** What do you study at school? Where? - AdrianC

**A:** I studied classical voice at a local "state" school: San Francisco State University. I studied classical voice and still sing with local opera companies when I find the time. Although that time has been much less since I've had a kid.

---

<a name="one-thing-wish-knew-starting" href="#one-thing-wish-knew-starting">#</a> **Q:** One thing you wish you knew before starting winamp2-js project - cluk3

**A:** Hmm. I learned a lot from all the roadblocks I hit. I learned about the failures of jQuery and migrated to vanilla JS and then learned about the failures of that approach and migrated to React. I don't think I would change anything. Sorry for the non-answer!

---

<a name="go-classical-voice-career-programming" href="#go-classical-voice-career-programming">#</a> **Q:** How did you go from classical voice to a career in programming? - Juanus

**A:** I was writing software in my spare time to manage my opera recording collection, and my roommate at the time was doing contract engineering work. One day he was behind on a deadline and asked me if I wanted to do some work for him. I was just out of college and didn't have a job yet, so I said why not. I worked for him for several years doing Wordpress sites and the like until I eventually pulled the plug and applied for a full time job as an engineer.

---

<a name="new-webbrowser-apis-looking-forward" href="#new-webbrowser-apis-looking-forward">#</a> **Q:** What are some of the new WebBrowser APIs you are looking forward to? - lokiiarora

**A:** I really want to look into Web RTC and see what can be done there. Other than that Web Assembly is looking really promising. In fact, there is some effort going into trying to compile AVS (one of the Winamp visualizers) to web assembly. Which would enable us to get that working inside https://webamp.org/

---

<a name="first-program-language-learning-new" href="#first-program-language-learning-new">#</a> **Q:** What was your first program language and are you learning a new language? if yes which one? - AdrianC

**A:** My first programming language was PHP, and I regret waiting so long to look elsewhere. I was self taught and didn't realize how much of my experience would transfer to a new language. I've played a bit with Elm, and it's reallllly amazing. Especially from a developer experience perspective. I'm actively searching for a side project for which Elm would be a good fit. I'm also excited about Reason, but haven't had the time to try it yet.

---

<a name="mentioned-didnt-go-school-cs" href="#mentioned-didnt-go-school-cs">#</a> **Q:** You mentioned you didn’t go to school for CS, why did you make that decision? I’m 17 yrs old, 3 yrs of frontend exp, and the question of going to college or maybe doing a boot camp instead has been on my mind. Do you have any tips or suggestions? :smiley: - Jett

**A:** I don't have much to compare to my experience. I went to school with the aim of getting an general education rather than with a specific career goal in mind. I realize this is a huge privilege to be able to make that choice, but I chose a very inexpensive school partially for this reason. I don't know many engineers who credit their formal education with much that transferred to their real job. One notable example is the amazing Vjeux who wrote [a great post on the topic](http://blog.vjeux.com/2017/epita/my-cs-degree-at-epita-was-worth-it.html). I would say, if you are already writing code, you can probably get hired without a degree or a bootcamp, and there's no education like industry.

---

<a name="believe-would-best-path-finding" href="#believe-would-best-path-finding">#</a> **Q:** What do you believe would be the best path to finding a career at a high valued company as a 16 year old with no industry experience but many side projects? - reallypan

**A:** Meet people. Don't be afraid to reach out on Twitter or on GitHub. Knowing people can really help you know what to look at next and find problems that interest you. Since every tech company has a large reward to referring people, if that person gets hired, you are more than likely going to eventually get a request to at least apply to their place of work.

---

<a name="started-winampjs-project-know-still" href="#started-winampjs-project-know-still">#</a> **Q:** When you started the winamp-js project, did you know that there was still a large community out there using Winamp? Or did that come as a surprise? - Juanus

**A:** No! It came as a rather large surprise to me how big the cult following that Winamp still has. I do wish I had found that community sooner. Darren Owen (who is a former Winamp developer who is now working on [a community driven version of Winamp](https://getwacup.com/)) was a huge asset in my work, and I wish I had found him sooner.

You should all check out https://getwacup.com/ and the work that he is doing. Winamp lives!

---

<a name="favourite-ide-tech-stack-right" href="#favourite-ide-tech-stack-right">#</a> **Q:** What is your favourite IDE and tech stack right now?? - AdrianC

**A:** For work at Facebook, Nuclide is honestly really great. For side projects, I often enjoy the out-of-the-box experience that VSCode offers. Often I find myself just opening up Vim (sometimes inside Atom's editor!) I'm also excited about [xray](https://github.com/atom/xray). For other tech stack stuff, I think React+Redux solves most of the problems I want to solve these days.

---

<a name="people-follow-look-inspirationmotivation-generally" href="#people-follow-look-inspirationmotivation-generally">#</a> **Q:** There are a few people I follow, look up to for inspiration/motivation, and just generally enjoy everything they do. Who is your hero? Who would you suggest I follow? Developer or non-developer :smiley: - g33kidd

**A:** I think Cory Doctorow has had a huge influence on me and how I think about technology. For inspiration, Darius Kazemi and his many amazingly silly side projects is a great one: https://twitter.com/tinysubversions

---

<a name="recently-got-first-job-developer" href="#recently-got-first-job-developer">#</a> **Q:** I recently got my first job as a developer. The other devs have worked here for years and are amazing at what they do. The complicated part is that I'm not used to their non-modern and non-structured code. I've told my boss that if I were to actually learn and improve anything, I'd have to rewrite it all from scratch to better understand the current code. Now the issue is that I don't wanna insult the other developers because I want a clearer, extensible and more structured code. Any advice on what to do? - Sentinel

**A:** It's slow going, but finding a corner of the code base that you can understand, no matter how small, is huge. Tech stacks change, but the core problems remain the same. Try to understand not just how the code works, but how it got that way. What lead to it ending up in this state? What were the people issues that caused this technical choice to be made. Git blame is your friend, and go as deep into the history as you need. Again, choose a small module to start with so you can go deep.

---

<a name="feel-like-underratedunderutilized-es6-feature" href="#feel-like-underratedunderutilized-es6-feature">#</a> **Q:** What do you feel like is the most underrated/underutilized ES6 feature? - Aetheryx

**A:** Hmm, not sure about ES6, but in modern JS, async/await was life changing in terms of my understanding of async code. That and the object spread which makes immutable changes clean and thus easier to justify. Not sure if either of those are underused though :smile:

---

<a name="advice-give-someone-starting-company" href="#advice-give-someone-starting-company">#</a> **Q:** What advice will you to give to someone starting a company? - lewatt23

**A:** Don't. Lol. That's just my personality showing through. I am by no means a business person so the idea of starting a company sounds like a recipe for disaster for me :smile: I wish I had better advice. Maybe one valid piece of advice, would be to try to tap into the nostalgia of nerds. I've learned there's a huge market in that :wink:

---

<a name="whats-one-piece-advice-youve" href="#whats-one-piece-advice-youve">#</a> **Q:** What’s one piece of advice you’ve been given that has stuck with you? - chelseahollow

**A:** Hi! :wink: I guess it would be the general advice from my parents that there are many things that you can make for yourself rather than buy.

---

<a name="sing-yet-hear-p-adrianc" href="#sing-yet-hear-p-adrianc">#</a> **Q:** Do you sing yet? where can we hear you? :p - AdrianC

**A:** There are a few small recordings in various blog posts on my blog. Mostly silly barbershop snippets (I'm fascinated by harmony) https://jordaneldredge.com/blog/

You might enjoy this little number written for @chelseahollow https://jordaneldredge.com/blog/original-song-our-love-will-last-as-long/

---

<a name="whats-opinion-hhvm-vs-zephir" href="#whats-opinion-hhvm-vs-zephir">#</a> **Q:** What's your opinion on the HHVM vs Zephir vs Swoole articles/benchmarks currently around at the moment? - Sentinel

**A:** I'm afraid I'm not in the know. I only recognize one of those things :stuck_out_tongue:
