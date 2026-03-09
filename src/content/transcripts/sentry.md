---
title: Sentry.io Team
date: 2021-04-22
time: 1pm PT / 8PM GMT
location: Q&A Channel on Reactiflux
description: "The team from Sentry.io will be on to answer all your questions! Sentrys application monitoring platform helps every developer diagnose, fix, & optimize the performance of their code."
people: "[Evan Purkhiser](https://github.com/evanpurkhiser) & [William Mak](https://github.com/wmak) & [Katie Byers](https://github.com/lobsterkatie)"
---

## Talk with Sentry devs

– Join Sentrys [Discord](https://discord.com/invite/sentry) community to talk shop with the team.

---

<a name="is-there-any-plans" href="#is-there-any-plans">#</a> **Q:** Is there any plans to redesign the UI of the Sentry dashboard in the near future? - @fruityoyo

**A:** Hey I focus on the performance product so I can answer this one. Dashboards recently got an overhaul where you can create and edit dashboards however you like with discover queries. But we want to further improve the experience around managing dashboards since it can become hard to manage once you add more and more of them, so you can expect to see a new dashboard manager coming soon. (And even earlier if you go to your organization settings and enable early adopter). For those unfamiliar, you can see more of what dashboards in Sentry are here: https://docs.sentry.io/product/dashboards/.

– wmak

---

<a name="if-a-beginner" href="#if-a-beginner">#</a> **Q:** If a beginner knows nothing about Sentry, how would you describe Sentry.io? - @GautamArora

**A:** My normal "answer for grandma": Computer programs have bugs, but normally the only way the programmers find out about them is if you hit a bug and email them about it, but almost no-one does that. We write code that other programmers can include with theirs, so that anytime there's a bug, it sends us a report, and then the programmer can log into their account and see all the bugs and find out where they happened and how often and all sorts of other data about them, so they can fix them.

– lobsterkatie

---

<a name="if-a-beginner" href="#if-a-beginner">#</a> **Q:** If a beginner knows nothing about Sentry, how would you describe Sentry.io? - @GautamArora

**A:** My normal "answer for grandma": Computer programs have bugs, but normally the only way the programmers find out about them is if you hit a bug and email them about it, but almost no-one does that. We write code that other programmers can include with theirs, so that anytime there's a bug, it sends us a report, and then the programmer can log into their account and see all the bugs and find out where they happened and how often and all sorts of other data about them, so they can fix them.

– lobsterkatie

---

<a name="do-you-support-URI" href="#do-you-support-URI">#</a> **Q:** Will you or do you support URI reporting? (CSP reports, HTTP errors, etc.) - @Syntax

**A:** Yes we do https://docs.sentry.io/product/security-policy-reporting/

– Evan

---

<a name="is-there-a-way-api" href="#is-there-a-way-api">#</a> **Q:** Is there a way to get the latest release for a given project from the Sentry API? - @zpr

**A:** I don't think we have an API endpoint specifically for that, but you can see the full list of release endpoints we support here: https://docs.sentry.io/api/releases/. But we're open source! So if you're looking to add this for something you need we can work with you to add it https://github.com/getsentry/sentry/.

– wmak

---

<a name="what-are-future-goals" href="#what-are-future-goals">#</a> **Q:** What are the future goals of Sentry? - @bereket

**A:** So we've definitely been focusing pretty heavily on our application monitoring product. Realistically from a users perspective errors take more form than just an uncaught exception. A poorly performing product is just as bad of an experience as the product having bugs. We've built out an entire tracing and performance product (https://sentry.io/for/performance/) to help solve that, and is something we're working very hard to push from something that's already _very good_, to being world class

– Evan

---

<a name="how-much-boilerplate" href="#how-much-boilerplate">#</a> **Q:** How much boilerplate is involved with including Sentry to a project? - @Ari Chayo

**A:** It depends on how customized you want your setup to be. In the simplest case, after you install the SDK, you can do

```Sentry.init({
  dsn: "your dsn here"
})
```

and all unhandled exception and promise rejections will be captured. There's a LOT more you can do, though - both to control what the SDK captures and what data is sent along with your events. https://docs.sentry.io/platforms/javascript/

– lobsterkatie

---

<a name="which-skills" href="#which-skills">#</a> **Q:** Which skills should a frontend have to work at Sentry.io? - @raerpo

**A:** You can see our job postings here https://sentry.io/careers/, and we call out React, Typescript specifically in the job postings, but I think interpersonal skills like being collaborative and communicative are just as important.

– wmak

---

<a name="should-i-worry-about-memory-pressure" href="#should-i-worry-about-memory-pressure">#</a> **Q:** Should I worry about memory pressure if I record a lot of breadcrumbs? - @Dzetah

**A:** So there's a `maxBreadcrumbs` option on the SDK you can set if you're seeing issues with memory, and more information on this setting here: https://docs.sentry.io/platforms/javascript/configuration/options/#max-breadcrumbs. But we use Sentry on Sentry.io and haven't had issues with memory, even though we record _a lot_ of breadcrumbs.

– wmak

---

<a name="what-is-your-pitch-to-companies" href="#what-is-your-pitch-to-companies">#</a> **Q:** What is your elevator pitch to prospective companies that may be open to using Sentry? (I ask because I'm trying to get my product owner to use Sentry for our project) - @BoHo

**A:** The short and sweet answer I have for this is: if you're not doing anything to monitor errors, how do you know if your users are having a good experience? Logs can help, but won't give you much insight into impact. Sentry can tell you how "bad" an error is. Is it something just affecting one or two users? Is it affecting your biggest customers? etc. I would also recommend checking out our Sandbox (in nav header) on https://sentry.io/.

– Evan

---

<a name="what-advantages-by-capturing" href="#what-advantages-by-capturing">#</a> **Q:** What advantages do you get by capturing all these unhandled exceptions, and what interesting things do you do with this data? -@Ari Chayo

**A:** We have a tool called Discover https://docs.sentry.io/product/discover-queries/ that allows you to build nearly arbitrary queries on error data that you can use to aggregate interesting information from unhandled (or handled) exceptions to find out what segments of your users are having bad experiences or are leaving your site because of errors.

– wmak

---

<a name="i-am-in-the-market-for" href="#i-am-in-the-market-for">#</a> **Q:** I am in the market for a tool like sentry. My "must" is for the tool have correlation (or end-to-end) tracability, from click on a button in react all the way to the exception in dotnet core backend. Is that something Sentry offers? - @Las3r

**A:** You're in luck! Our Performance Monitoring product does exactly that. Here's some docs about the general idea: https://docs.sentry.io/product/performance/distributed-tracing/ And here are the docs for your platforms: https://docs.sentry.io/platforms/javascript/guides/react/performance/ and https://docs.sentry.io/platforms/dotnet/performance/ If you have a more specific question, I'll be happy to answer.

– lobsterkatie

---

<a name="i-thought-it-was-pretty-crazy" href="#i-thought-it-was-pretty-crazy">#</a> **Q:** I thought it was pretty crazy when I learned that all of Sentry.io is open source and you can set up your own On-Premise installation which is basically self hosting the entire infrastructure for the web app. Aren’t there some considerations of people doing this instead of paying for a subscription? What is the benefit of offering this? I think it’s a great thing but really so few tech companies do this. - @MikeMK

**A:** I think its a mix of things, self hosting is "free" but isn't "free" since users still have to maintain their on-premise installation. And we regularly have customers migrate from self-hosted to SaaS sentry. It's a give and take IMO, we get to build something that's open source, and get contributions back from our customers occasionally. And the customers who can't use SaaS sentry for whatever reason can still use our software.

– wmak

---

<a name="is-there-a-way-to-use" href="#is-there-a-way-to-use">#</a> **Q:** Is there a way to use a NOT operator when filtering issues? I haven't been able to figure it out and that would be useful. - @Jim

**A:** Yes! if you had a query like `message:"the world is broken"` you can exclude errors with that message by prefixing with an exlamation eg. `!message:"the world is broken"`. You can read more here in the docs: https://docs.sentry.io/product/sentry-basics/search/#exclusion.

– wmak

---

<a name="whats-the-best-way" href="#whats-the-best-way">#</a> **Q:** What's the best way to give feedback on a normal day? Here's mine: It's kinda confusing that the "We recommend you update your SDK" prompt link leads neither to upgrade instructions, nor to release notes. - @Misamoto

**A:** The original goal of the upgrade your SDK prompt was that we have a lot of customers on older versions of the Sentry SDKs that don't support our performance features (which often are auto-instrumenting and just work out of the box). You're right that it doesn't have upgrade instructions (which I actually don't think is too bad, since the docs it links to include install instructions). We cut showing a changelog due to time constraints, and we considered that it would still be valuable to at least let users know there are new versions. But to your point, this was a time constrained feature that we want to make better.

– Evan

---

<a name="i-dont-know-if" href="#i-dont-know-if">#</a> **Q:** I don't know if you know a ton about this but: how did Sentry originally present itself to the public and grow so much? - @bereket

**A:** That's looong story and I'll refer you to our [blog post about our founding](https://blog.sentry.io/2013/11/10/the-story-of-sentry)

– lobsterkatie

---

<a name="first-off-hats-off" href="#first-off-hats-off">#</a> **Q:** First off, hats off to the [amazing work](https://blog.sentry.io/2021/04/12/slow-and-steady-converting-sentrys-entire-frontend-to-typescript/) with the TypeScript migration, and thank you for sharing your process and takeaways with the rest of us. You said you're seriously considering introducing end-to-end type safety between the backend and frontend. What are some of the tradeoffs you're weighing? What will your decision about pursuing this come down to?

**A:** End to end type safety is definitely something that we're still figuring out "how" we're going to do it. Our backend is python, so sharing types there isn't an option. Likely how this will look in the near term is having a master list of endpoints which is typed on the frontend, with another python3.x typings file on the backend, that we just keep in sync through either some automated review tooling, or through human word. We actually don't run into too many type errors like this, so it might end up on the backburner for a while. We mention graphql in the blog, but oooof, probably not any time soon.

– Evan

---

<a name="what-happens-when-there" href="#what-happens-when-there">#</a> **Q:** What happens when there is a bug in the Sentry platform? Is it terrifying? What happens when your platform for tracking bugs has a bug in it? How do you handle testing and such? Seems like it could be stressful! - @MikeMK

**A:** Yes, it is terrifying. I think anytime there's a bug in any production system it's terrifying. But fortunately we have Sentry monitoring Sentry, so we can usually identify the bug very quickly and get a fix up before customers start feeling pain. Sentry has a pretty large set of unit and integration tests, along with snapshot tests so we don't break the UI, so we're not usually that stressed by bugs.

– wmak

---

<a name="howd-you-come-up-with" href="#howd-you-come-up-with">#</a> **Q:** How’d you come up with the name Sentry? - @Sysnomid

**A:** It's from Starcraft (lol - as are a lot of tech companies founded in the late 00s). Our original SDK was actually called 'raven'. It was kind of backwards because ravens dropped sentries...not the other way around as implied by the old raven sdk being a consumer of Sentry.

– Evan

---

<a name="i-am-loving-typescript" href="#i-am-loving-typescript">#</a> **Q:** I'm loving Typescript, do you do too ? Was the transition easy for you with such a large codebase? - @Dzetah

**A:** I can say with confidence, at least anecdotally, wrting TypeScript has made me feel some non trivial 2x % more productive writing software. In general, I really like it. Our transition was not easy, it took a good 18 months. But was it worth it? Hell yes it was. I just refactored something last night where there were a lot of indirect props being used through the code base. Before TypeScript, knowing if it was safe to remove a prop was a real chore, not so much now. Checkout the full [blog post](https://blog.sentry.io/2021/04/12/slow-and-steady-converting-sentrys-entire-frontend-to-typescript) for more nitty gritty.

– Evan

---

<a name="where-do-you-see-sentry" href="where-do-you-see-sentry">#</a> **Q:** Where do you see sentry going in the next 3 years, and how has the pandemic been for you? Have you seen increasing or decreasing adoption of Sentry? - @mortuie

**A:** Sentry is going to go more into the Application Performance Monitoring space. We're hoping to tie errors and performance together better. Especially when you think about the fact that some users will just treat a slow site as a broken site eg. "I waited more than 2s...time to try something different instead!" I believe our users think our product is great, so we've been seeing increased adoption.

– wmak

---

<a name="we-have-been-using-sentry" href="we-have-been-using-sentry">#</a> **Q:** We have been using Sentry to monitor our react app, but the error stack is hard to read as it shows the compiled code. What's the right way to upload the map file so that the error messages can be readable? Any sample/example repositories/documentation would be helpful. - @JohnWick

**A:** Source maps! There are some docs here: https://docs.sentry.io/platforms/javascript/guides/react/sourcemaps/. It's a slightly finicky process, but here are the keys:

- Get your bundler/transpiler to generate source maps.
- Use either our webpack plugin or sentry-cli to upload them
- They are matched with events based on release value, name, and `dist` value, so:
  - You have to set the release in your `Sentry.init` and mark it on the maps when you upload them
  - Same with `dist`, though this mostly only applies to mobile SDKs, so you can likely ignore this unless it comes up on its own.
  - As far as naming goes, you're looking to have the name of the files either be an _exact match_ to the URL of the erroring script, or _the URL with scheme and hostname (http://some.site.here/ <---- but nothing more than this!) replaced by ~._ (You can control the name of the uploaded files with webpack-plugin or sentry-cli).

CLI docs: https://docs.sentry.io/product/cli/releases/#managing-release-artifacts.
Webpack plugin docs: https://github.com/getsentry/sentry-webpack-plugin/blob/master/README.md

– lobsterkatie

---

<a name="which-tool-are-you-using" href="which-tool-are-you-using">#</a> **Q:** Which tool are you using to generate those diffs ? I'm currently looking for something similar. - @Dzetah

**A:** Built in house! https://github.com/getsentry/action-visual-snapshot We used to be using Percy but we though "hm, we can build this better and not pay 10s of thousands a month". It's open source too!

– Evan

---

<a name="as-someone-just-starting-off" href="as-someone-just-starting-off">#</a> **Q:** As someone who is just starting off the journey of learning JavaScript, what are your favorite TypeScript resources? - @r_escribble

**A:** I went through the course at https://www.executeprogram.com/ when I was first learning TS, and found it super effective, because it really forced me to think about every line of code.

Now that I'm an everyday TS dev, I tend to rely on a combo of:

- The TS docs, which are pretty well-written: https://www.typescriptlang.org/docs/
- The TS playground: https://www.typescriptlang.org/play
- Code completion and linting in VSCode
- Google, which inevitably takes me to stack overflow

– lobsterkatie

---

<a name="did-you-use-anything" href="did-you-use-anything">#</a> **Q:** Did you use anything before TS? we use like a mix match of JS doc + ts types. How did you find that in comparison to TS if you did? - @mortuie

**A:** Mostly JS docs and propTypes. But our JavaScript SDKs were actually already written in TypeScript before the Sentry application, so we did have a bit of a head start in knowledge.

– Evan

---

<a name="what-was-the-toughest" href="what-was-the-toughtest">#</a> **Q:** What was the toughest thing you guys had to do when writing react? - @sticks

**A:** Maybe not the most difficult, but one difficult thing has been finding the right balance of reusability in our components. We've also been stuck on an old version of Reflux (yes reflux) for a long time now, and are actively trying to figure out how to do non-local state management in a more DX friendly way. I was looking at react-query the other day, which looks nice. We're also adopting hooks now which is great.

– Evan

---

<a name="youve-linked-to" href="youve-linked-to">#</a> **Q:** You've linked https://github.com/getsentry/action-visual-snapshot. Any other useful things from you that aren't your main platform you think would be worth looking into? - @Misamoto

**A:** This might be a bit more specific, but I just built this little service to generate charts on the backend via an API https://github.com/getsentry/chartcuterie. Unfurling Sentry links into charts in Slack is coming soon. Here's a tool we wrote to do releases better: https://github.com/getsentry/craft. Last one I'll share: great python library we wrote to mock `requests` responses - https://github.com/getsentry/responses.

– Evan

---

<a name="whats-the-most-effective" href="whats-the-most-effective">#</a> **Q:** What's the most effective way you (Sentry.io team) see to get into coding? - @Jimmy

**A:** Folks at Sentry come from all different kinds of coding backgrounds - we have CS grads, people who are self-taught and have been doing this since they were 12, career-changers who went through bootcamps...there's no one right way to learn. You have to figure out what works for you - following tutorials? In-person classes (assuming covid ever ends)? Writing a project and then looking things up as you need them? Going to a meetup? Try a few options out and see what you like.

– lobsterkate

---

<a name="is-sentry-hiring?" href="is-sentry-hiring?">#</a> **Q:** Is Sentry hiring?

**A:** We're hiring a ton across all our teams, in 3 major tech hubs (San Francisco, Toronto and Vienna). You can see more here: https://sentry.io/careers/#openings. We're a fun group of people, leave our egos at the door, and build great products for developers!

– wmak

I will say that (no lie!) I love working at Sentry. It's been a great place to grow as an engineer (I'm one of those career-changing bootcampers). It's full of super smart people who build awesome stuff, and we really do not take ourselves _too_ seriously. Come work with us - it's a great team!

– lobsterkatie

---
