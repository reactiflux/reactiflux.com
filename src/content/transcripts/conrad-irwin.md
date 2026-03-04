---
title: Conrad Irwin
date: 2019-06-06
time: 1-2pm PT / 8-9PM GMT
location: Q&A Channel Reactiflux
description: Conrad is the co-founder & CTO @ Superhuman. Superhuman is an amazing email client built with React/Electron. It's basically VIM for email.
people: "[@conradirwin](https://twitter.com/conradirwin) / [@superhuman](https://twitter.com/superhuman)"
---

## Conrad Irwin, Co-founder & CTO of [Superhuman][superhuman], an Email Client Built with React/Electron

<a name="probaby-a-basic-question" href="#probaby-a-basic-question">#</a> **Q:** Probably a basic question – what made you choose to use Electron instead of other desktop options? – yeehaw

**A:** Good question. We actually started with node-webkit, but found that we were one of the largest consumers of it, and ran into many issues.

Electron had a much larger community, and so we switched over — everyone else has fixed most of the problems already.

(We also had a very early v0.1 in Swift, but I'm a JavaScript person so it was faster to build in js)

– cirwin

---

<a name="how-did-you-build" href="#how-did-you-build">#</a> **Q:** How did you build your team? Finding lots of talented React+UI people is difficult, especially in the bay area. – burtonator

**A:** Various ways — team-building is definitely a slow process. We've hired people I met at conferences, through AngelList/Hired etc. and through a bunch of meetups we've run at the [Superhuman][superhuman] office.

– cirwin

---

<a name="what-are-some-of-your" href="#what-are-some-of-your">#</a> **Q:** What are some of your favorite chrome extensions? – dpalazz

**A:** I used a few, I have a love-hate relationship with BetterGithub and [Vimium](https://vimium.github.io/) so would recommend you try them but they're quite opinionated.

– cirwin

Jumping in as well (engineer at [Superhuman][superhuman]). Favorite Chrome extension for me is probably [Vimium](https://vimium.github.io/).

– Timothee

---

<a name="what-would-you-offer-as" href="#what-would-you-offer-as">#</a> **Q:** What would you offer as a suggestion to people when learning electron? – Fiery Raven

**A:** I think they have a create-electron-app. When we were starting out we already had a web-app so getting the web-app to load was the first thing; then after that it was a lot of googling to try and find how to do all the native stuff.

One of my favourite things you can do is fully transparent windows so [Superhuman][superhuman] looks amazing on inbox zero:

![Transparent Windows](https://media.discordapp.net/attachments/193117606629081089/586285272468291587/Screen_Shot_2019-06-06_at_1.07.55_PM.png?)

– cirwin

---

<a name="mobile-apps-must-be-important" href="#mobile-apps-must-be-important">#</a> **Q:** Mobile apps must be important for an email app company (or if not now will be soon). Is there any commonality between the desktop and mobile code base? Did that factor into your decision? – Just Lurking

**A:** Mobile apps are very important. Email is read mostly on the phone (but written mostly on desktop, which is why we started there) — we have some shared code in js, and some shared logic that we hand-recoded in C++ for email parsing; but otherwise the clients are distinct. The UI for phones and desktops is very different, so there's very little common UI code.

– cirwin

---

<a name="what-are-you-going-to-do" href="#what-are-you-going-to-do">#</a> **Q:** What are you going to do about native mobile apps? Are you going to do a PWA or implement native Android/iOS?– burtonator

**A:** We're still deciding for Android, it may be react-native, Swift or Kotlin — we're about to start building out that team, so it will depend a lot on the strengths of who we hire.

– cirwin

---

<a name="given-your-swift-comment" href="#given-your-swift-comment">#</a> **Q:** – Given your Swift comment, does that imply the app is built with React Native? If so – how do you go about leveraging React Native versus native code to ensure that all of your actions (screen changes, animations, et al) are below that 100ms threshold? (If this question even makes sense 😄) – yeehaw

**A:** The iOS app is actually Swift, though we run a bunch of javascript as part of displaying HTML emails and a little core logic. We have a phenomenal team of native (Swift) people building it, and we wanted it to feel amazing, so that was the right choice for us.

– cirwin

---

<a name="do-you-offer-any-trial" href="#do-you-offer-any-trial">#</a> **Q:** Do you offer any trial period for [Superhuman][superhuman]? Thinking of buying the subscription but without testing I can't know if this is worth it! Or maybe to rephrase what are the killer features of [Superhuman][superhuman] i won't be able to be without once i get used to it! – oorestisime

**A:** There's no trial period yet. We've designed [Superhuman][superhuman] to work well for some users, but the switching costs are high; so we invite people to a screenshare as part of the onboarding. We haven't yet found a way to scale the hands-on approach to trials, but it's something we want to explore.

– cirwin

---

<a name="as-someone-who-has-looked" href="#as-someone-who-has-looked">#</a> **Q:** As someone who has looked up to the little guys in programming history what would you say is a way to start a company based on an idea? – Fiery Raven

**A:** My favourite book on this is "the art of game design", you should prototype, talk to people, and repeat with ever more detailed prototypes until you have a product 😃.

– cirwin

---

<a name="did-you-ever-face-scalability" href="#did-you-ever-face-scalability">#</a> **Q:** Did you ever face scalability issues? If yes how did you solve it? Also suggest best way to Deploy react apps. – Cypher

**A:** Scalability, yes — for now we just pay Google Cloud more, but we're hiring to work on that specifically. Deployment is pretty simple — we use a CI server to run the tests, and then upload to Google Cloud Storage with versioned urls. The harder part is doing app updates and making the app work offline, but service workers get a lot of the way there.

– cirwin

---

<a name="how-do-you-do-the" href="#how-do-you-do-the">#</a> **Q:** How do you do the screensharing as part of the onboarding? – burtonator

**A:** Mostly using [Zoom](https://zoom.us), as that has support for iPhone screenshare too.

– cirwin

---

<a name="as-a-woman-in-tech" href="#as-a-woman-in-tech">#</a> **Q:** As a woman in tech, I try to always ask about what companies are doing to attract more women in the field. I would love to hear about what [Superhuman][superhuman] is doing and what women in tech can do to be more attractive candidates for your type of company. – dpalazz

**A:** We do several things to try and make us more attractive to candidates; from promoting the awesome women we have internally, and running job specs through gendered language detectors, to internal discussion on how to keep improving.

(re awesome women internally, Emuye Reynolds runs mobile engineering: https://women2.com/2018/08/02/she-helped-invent-apple-tv-now-shes-reinventing-email-at-superhuman/ )

To the second half of your question, I'm not sure. It's hard to speak for all companies, but we try and look for people with potential regardless of gender (that said, we deliberately bias to meeting more women, because that seems like one way we can help avoid any issues with how profiles come across).

– cirwin

---

<a name="are-you-open-to" href="#are-you-open-to">#</a> **Q:** Are you open to discussing non-technical questions on this chat? Curious about your prioritization process for new subscribers, specifically AFTER the referral. On social media some folks seem to get scheduled right away and some languish for weeks or months.

Some enthusiastic users on Twitter seem to offer to refer anyone, do you depriorititize those referrals because they aren't personal connections? Or is it simply a bizdev decision, focusing on users with most revenue or positive press potential? – Just Lurking

**A:** I can answer that part: at this point, we prioritize people for whom we know the product will be a good fit due to their existing workflows and tools. E.g., [Superhuman][superhuman] is not great on Windows and we don't have an Android app yet, so it doesn't make sense for us to onboard these people yet.

– Timothee

---

<a name="as-ad-addendum" href="#as-ad-addendum">#</a> **Q:** As an addendum to dpalazz' <a href="#as-a-woman-in-tech">question</a> – I've just read about the accomplishments of people on your team, the profile of your investors, and overall – the refreshingly inclusive approach it seems you take to hiring!

As a junior developer – how do I make sure I'm one of the first to know about relevant positions with you all 😛. – yeehaw

**A:** You can always email me 😃 [conrad@superhuman.com](mailto:conrad@superhuman.com). For companies like us we advertize across AngelList, LinkedIn, etc. and most of the active platforms; even if you're not actively looking being around there may give you a sense of what's available

– cirwin

---

<a name="could-you-give-us" href="#could-you-give-us">#</a> **Q:** Could you give us a brief history of your steps so far with [Superhuman][superhuman]? From when did you realize about the problem to today. – pierre

**A:** It's a long story, but to summarize, Rahul and I have been working on and off since I graduated; the first company we collaborated on was Rapportive — a tool to make Gmail better by replacing the ads with contextual information. Rapportive was acquired by LinkedIn where we built a similar tool for the iPhone email client.

We went our separate ways for a few years, and then in 2015 we realized that two things were still true: 1. people spend too much time in email, 2. Gmail was not serving the email power-users. So we started [Superhuman][superhuman] on the premise of "make people brilliant at what they do" and for the first problem to tackle, chose email. : (based partly on our experience in the space, partly on the total number of people who email ~3Bn, and partly on the frequency with which people we knew complained about email).

– cirwin

It all started in 1971 when the first email was sent 😄

– Timothee

---

<a name="timothee-do-you-consider" href="#timothee-do-you-consider">#</a> **Q:** @Timothee Do you consider onboarding Android users who don't do much email on mobile? I'm guessing some folks would be fine with desktop and then falling back occasionally to the GMail mobile app. – Just Lurking

**A:** We do to some extent if they're insistent that they'll be fine. But it's tricky when you need both platform to really leverage the value. Not many people only use one platform (cross-platform features like read receipts, snippets, drafts, etc.).

– Timothee

_**Follow-up**_: Makes sense, thank you. Android ETA 2020 at this point or could it be earlier?

Yeah likely 2020.

– Timothee

---

<a name="so-if-i-am-correct" href="#so-if-i-am-correct">#</a> **Q:** So if I am correct you only can connect it to Gmail, there is no option like in Rainloop to connect to an manual SMTP server? – MrHpower

**A:** Not yet — we made that decision to reduce build time, as Gmail has everything in JSON over HTTP.

At LinkedIn I did a lot of work with IMAP and SMTP, and they're fine, but awkward (from the days before JSON/XML, so each command has its own parser rules, and sometimes even character encoding can change on the fly).

With the Gmail API we can connect from the web client with no proxy required which is also nice.

– cirwin

---

<a name="what-information-from-your" href="#what-information-from-your">#</a> **Q:** What information from your customers email do you store on your servers? How do you guys tackle privacy concerns? – pierre

**A:** Good question. The short answer is incoming emails are not stored, outgoing emails you send through [Superhuman][superhuman] are stored until they are sent and then deleted. We have a send queue to provide features that are not available over the Gmail API.

We work with a good law firm to ensure we're up to snuff on privacy, and a good security auditor for the security side of things 😃.

Everything potentially sensitive is stored encrypted of course.

– cirwin

---

<a name="following-up-on-the" href="#following-up-on-the">#</a> **Q:** Following up on the no proxy required, can you discuss your security / privacy architecture? How much access to a user's email do you have by design? Email obviously very sensitive. Via password reset access to a user's email often can provide "keys to the kingdom" for other sensitive apps (setting aside 2FA). Sorry somewhat of a repeat. – Just Lurking

**A:** No worries — it's a question we get a lot

To make [Superhuman][superhuman] work we have to store encrypted refresh tokens on our servers, which as you say are the keys to the kingdom.

A lot of our security and risk analysis focuses on protecting both the database and the encryption keys for those.

(We don't have passwords, luckily!)

– cirwin

---

<a name="what-kind-of-iteration" href="#what-kind-of-iteration">#</a> **Q:** What kind of iteration did you have to do before you got a product that fit well for users? – vcarl

**A:** Great question — as a company we're relatively intentional about the things we build, and quite metrics driven.

So we wanted to find a way of measuring how well [Superhuman][superhuman] was working for users.

My co-founder actually wrote up the approach here: https://firstround.com/review/how-superhuman-built-an-engine-to-find-product-market-fit/

The biggest surprise to me was how long it takes to build something truly amazing.

– cirwin

---

<a name="have-you-had-time" href="#have-you-had-time">#</a> **Q:** Thanks. Have you had time to build in internal controls and monitoring so e.g. a rogue employee couldn't get away with murder in addition to the obvious focus on external threats? – Just Lurking

**A:** Yup — any employee access to potentially sensitive data is cross-posted to slack (in addition to Google cloud audit logs).

– cirwin

---

<a name="what-do-your-dev-teams" href="#what-do-your-dev-teams">#</a> **Q:** What do your dev teams look like (designer/devs/prod mgr)? What are you super proud of about your development process? – dpalazz

**A:** Right now we have two teams, desktop (5 people, incl me) and mobile (4 people, incl Emuye), and one designer — we're actively hiring our first PM (Rahul the CEO has historically done that).

The process is mostly weekly sprints pushing ideas through a cycle of "product design -> product review -> architecture design -> architecture review -> code -> code review".

Depending on how big the feature is how quickly that happens and some phases might be skipped.

I think the bit of our development process I love the most right now is CI and deploys.

Grant who's on the team just built a parallelization framework so we can run the tests in about 15 seconds (down from about 15 minutes) using lambda; and once the tests pass master is auto-deployed to canary for 24 hours and then to production.

– cirwin

One thing I've really enjoyed in terms of our dev process recently is Zen, a test runner that a coworker wrote that made writing and fixing tests quite nice and enjoyable (ah, Conrad beat me to it, because my n key doesn't work 😃).

– Timothee

---

<a name="have-you-ever-been-scammed" href="#have-you-ever-been-scammed">#</a> **Q:** Have you ever been scammed? – TheOriginalAse

**A:** In small ways, yes — people sneak into the product through friends without telling us, nothing major yet.

– cirwin

---

<a name="do-you-think-that-electron" href="#do-you-think-that-electron">#</a> **Q:** Do you think that electron is going to work long term? I've worked a lot with electron, really like it from the development side but the RAM usage and a few other things have made me hesitant. – Hum4n01d

**A:** It's a good question. I know the chrome team is pushing on PWAs as an alternative, and I'm excited about that; I also love how easy it is to ship new javascript to devices so app updates can be frequent. I can't see us switching to Swift for a desktop-only app, but maybe we'll use Catalyst to bring the iPad app to MacOS.

RAM usage is an issue though, we have a bug in Github about it (and CPU usage too...).

I think it's that + DOM + JS — the trade-off for us is that we can re-use a codebase that's been improved for a few years, and anything we do to make it fast on the web makes it faster on native.

So until we're a much larger team, that advantage is likely key.

– cirwin

We have customers who want [Superhuman][superhuman] in Chrome, because that's where they spend the rest of their time, others prefer not to to separate tasks. Having that Electron layer is really great to update both platform at once.

– Timothee

---

<a name="not-sure-if-its-been" href="#not-sure-if-its-been">#</a> **Q:** Not sure if it's been asked but do you guys use any UI toolkits like bootstrap or evergreen or material UI? – burtonator

**A:** Not been asked yet. Mostly we built from scratch, we use something similar to [BEM](http://getbem.com/) for CSS syntax; but all of the UI paradigms are hand-tweaked. We really wanted [Superhuman][superhuman] to look and feel premium, and have high information density; most current style frameworks don't push those directions super well.

– cirwin

AFAI'm concerned, I've found CSS frameworks like Bootstrap fantastic to start fast but cumbersome to maintain in the long run.

At a previous job we use [React-bootstrap](https://react-bootstrap.github.io/) for our component library, and it was a pain to align updating React, with [React-bootstrap](https://react-bootstrap.github.io/), and so on.

– Timothee

---

<a name="not-sure-if-you-can" href="#not-sure-if-you-can">#</a> **Q:** Not sure if you can discuss, but are there plans to go more mass-market? Maybe a lower price for fewer features and you don't get the personal onboarding, things like that? – Just Lurking

**A:** The real answer is "we'll find out as we go", but the current plan is to keep scaling based on onboardings for a bit — it works extremely well for the metrics we care about (Net promoter score, friends referred, perceived product quality).

We'd rather build a sustainable company that focuses on building out things that people value than "growth at all costs".

– cirwin

---

<a name="do-you-guys-have-any" href="#do-you-guys-have-any">#</a> **Q:** Do you guys have any designer on site? How does the process goes at this early on your startup, from idea to production? – pierre

**A:** We do!

We currently use [figma](https://www.figma.com/) for designs, and then do a design review.

One of the fun things we do as a company is friday wins where everyone demos what they did that week.

Teresa normally walks us through the designs.

Once we have everything pixel perfect in [Figma](https://www.figma.com/) we'll build it out in the product — and measure it down to the half-pixel to be sure 😄.

A lot of it is integrated with the product process I described above.

The ideas come from lots of places, what we want to do, what users are telling us (we have a great dashboard with all user feedback we've received).

– cirwin

---

<a name="ui-is-interesting" href="#ui-is-interesting">#</a> **Q:** UI is interesting. What approach have you taken with fonts and text legibility? Oh and is your app multi monitor friendly? – Just Lurking

**A:** To be honest the approach has been "start with not enough contrast, and bump it up and up and up".

We also try and detect what monitor you're using, and we bump up the contrast on non-retina displays as they tend to have worse contrast.

We also have a dark theme for people who struggle with reading on a light background.

Multi-monitor works, not sure if you were driving at something specific?

– cirwin

One thing that's very apparent in the product is our trying hard to not show things that aren't necessary. That helps with clarifying what's important and thus legibility.

– Timothee

_**Follow up**_: No I've just found some non native apps don't work as well on multi monitors. Alerts pop up on wrong screen, app won't stay on designated monitor, stuff like that.

We should get you on a free trial so you can help us find the bugs 😄.

– cirwin

---

<a name="interesting-do-you" href="#interesting-do-you">#</a> **Q:** Interesting. Do you standardize incoming emails into the same font? – Just Lurking

**A:** To some extent — one of the few things that's shared between the two clients is the heuristics around "should we render this email as a person-to-person conversation and strip out formatting that looks unintentional".

For some emails that seem like marketing we leave them alone.

But usually when you send an email with one line slightly the wrong font size, or color, that was a mistake.

And we want emails to look good in [Superhuman][superhuman].

– cirwin

---

<a name="do-you-guys-have-a-design" href="#do-you-guys-have-a-design">#</a> **Q:** Do you guys have a design system internally? If yes, how far down the process did you guys decide that would be worth to invest on it. – pierre

**A:** We don't yet, but it's something we've talked about. We have a few guidelines and a lot of bespoke UI.

As we build out more and more of the product, things begin to get more similar, e.g. we have a standard way of doing dialogs now which we never used to do.

But a lot of the UI is single-purpose, rendering an email is not going to be reused in a different part of the app 😃.

---

[superhuman]: https://superhuman.com/
