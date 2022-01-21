---
title: "Netlify Team: Cassidy Williams & Jason Lengstorf"
date: 2021-09-09
time: 1PM - 2PM PT / 8PM GMT
location: Q&A Channel Reactiflux
description: "A web platform for modern websites and applications"
people: "[@Netlify](https://twitter.com/Netlify) [@cassidoo](https://twitter.com/cassidoo) [@jlengstorf](https://twitter.com/jlengstorf)"
---

<a href="what-are-the-future" name="what-are-the-future">#</a> **Q:** What are the future plans of Netlify? – Deleted User102200

our current plans are to help grow the ecosystem to be as strong as possible — we're especially excited about supporting the development of OSS frameworks and tools that help developers build more performant, accessible, and usable projects for the web – jlengstorf

<a href="is-netlify-working-on" name="is-netlify-working-on">#</a> **Q:** Is Netlify working on collaborating with Vercel on some of the base specs for platform features like deployment structure, config files, ISR, etc, or is this purely competition so there's no value in collab? – jescalan

Netlify has submitted several upstream PRs to Vercel repos, and we're definitely open to more collaboration! our stance is that we should strive to be the tide that lifts all ships — that means working with the community to get the best possible outcomes – jlengstorf

<a href="will-netlify-ever-have" name="will-netlify-ever-have">#</a> **Q:** Will Netlify ever have any support for non-jamstack based sites, e.g. Express on a node server? I'm curious on your thoughts on whether or not Netlify is hard set on "JamStack everything". – MapleLeaf 🍁

You're right that there are fun opportunities for things that go beyond what we've generally described as "Jamstack". As the category matures we're seeing lots of potential and desire to expand into things that execute "on demand". Serverless functions, On demand builders, and Edge Handlers all blur the edges into where you looking. Personally I'm still very keen on "pre-generate as much as is practical". – philhawksworth

<a href="for-complex-projects-in" name="for-complex-projects-in">#</a> **Q:** For complex projects in React how you guys split complexity? – Yandex

I personally break up Context components into their own folder, hooks into folders (which I organize differently depending on the project, sometimes in just a hooks folder and sometimes in a components folder), and then presentational components in their own folders. Grouping things by functionality tends to help a lot! – cassidoo

<a href="are-there-any-opportunities" name="are-there-any-opportunities">#</a> **Q:** Are there any opportunities for students to grow and refine their skills at netlify? – aarush

we have a lot of opportunities to grow your skills on Netlify; it's free to deploy and test things, so you can build web and serverless projects as you learn and to build/host your portfolio. We do not currently have any formal programs for students in Netlify the company, but it's something we try to partner with the community on – jlengstorf

<a href="cassidy-how-many-keyboards" name="cassidy-how-many-keyboards">#</a> **Q:** Cassidy how many keyboards do you currently type from? – Arkadiusz

37, but that's only when my 3rd hand is working well. Otherwise, 5. – cassidoo

<a href="what-do-you-use" name="what-do-you-use">#</a> **Q:** What do you use to deploy serverless apps guys? Terraform / serverless framework or something else? – zerubeus

we offer a no-config serverless option in Netlify! you can use Netlify Functions to deploy them using the same git-based deploy flow as your web apps (you can put your frontend and serverless functions in the same repo, too!) https://ntl.fyi/functions – jlengstorf

<a href="how-important-is-teaching" name="how-important-is-teaching">#</a> **Q:** How important is teaching and mentoring for a web developer? More specifically, is it advisable to invest time into teaching junior developers, as opposed to learning new things / building projects. – syncerax

I think this is incredibly important, truly one of the most important things that you can do in your career. Definitely balance your time, of course, but giving back to the community and "paying it forward" is what keeps this industry going. Plus if they're actually on your team, you'll get much better code coming your way that you'll ultimately have to review 😅 – cassidoo

<a href="hello-i-have" name="hello-i-have">#</a> **Q:** Hello, I have a question about frontend architecture. Do you have any suggestion on how to have many reusable modules reusable across project, without having many npm packages (too much work on maintenance / upgrading imo). – Nipp

one great approach I've seen is to us Nx (https://nx.dev/) — this lets you do "packages" without having to formally publish them, and it's really nice if you combine it with CODEOWNERS

I have a Learn With Jason episode on it if you're interested in learning more! https://www.learnwithjason.dev/faster-static-site-workflows-with-nx

– jlengstorf

<a href="im-in-college" name="im-in-college">#</a> **Q:** I'm in college, how important is competitive programming and leetcode etc for interviews? Also any tips to get started on freelancing? – Deleted User

Meh, it's good practice, but I wouldn't say "important" is the right word for them. They're helpful, but not necessary. I really like Leetcode and Hackerrank for practicing for interview prep, but it's kind of rare to see that stuff make you a better developer. – cassidoo

<a href="does-netlify-usually-have" name="does-netlify-usually-have">#</a> **Q:** Does Netlify usually have remote openings contemplating places such as South America? – Cuca

ABSOLUTELY! we are a fully remote company with many team members in South America! https://www.netlify.com/careers – jlengstorf

<a href="what-makes-netlify-special" name="what-makes-netlify-special">#</a> **Q:** What makes Netlify special? – Deleted User102200

Me(mes)

...more seriously... I think you'll get different answers form different folks. But for me, the genuine desire to make it easier for people to build a better web runs very deep at Netlify and I enjoy experiencing that with all of my colleagues. Before I joined, I was an avid Netlify user and it transformed my ability (personal and professional) to execute on the web. That mission is very much still core.

– philhawksworth

<a href="i-have-been-using" name="i-have-been-using">#</a> **Q:** Can we expect support for express and node backends real soon? 😅 – nothingButSyntaxError

I would suggest you check out https://jamstack.org/ for why we don't do that! We're strong advocates of this style of development, which involves separating out services on purpose 🙂 – cassidoo

<a href="i-have-a-crazy" name="i-have-a-crazy">#</a> **Q:** I have a crazy feature request. I'm all in for the serverless functions, but I'm facing some situations where I would go for the traditional server. So it would be super cool if we had something like a traditional server deployment just right in the same project along with the functions and also with same ease of writing and deploying. – discoding

this is an interesting idea! I'll bring this back to the team for discussion. When I need a server right now, I usually use render.com or DigitalOcean – jlengstorf

<a href="any-advice-for-beginner" name="any-advice-for-beginner">#</a> **Q:** Any advice for beginner developers trying to get themselves noticed in the big world of React and application development. Or advice for more experienced developers trying to remain fresh and relevant? – Sean22

For beginners: Learn in public! Write down somewhere what you're learning and what you're doing. If people see your growth journey somehow, that can lead to jobs. Now is a particularly good time, too, because of React 18 Alpha, there are very few people who are making content around that now.

For experienced developers: Following newsletters, keeping an eye on communities, and continuing to build is super helpful!

– cassidoo

<a href="what-advice-do-you" name="what-advice-do-you">#</a> **Q:** What advice do you have to give to new developers looking to get into the world of distributed systems, any cool project suggestions for us to build and learn? – BaluBabu

we're not really experts in distributed systems (meaning @philhawksworth, @cassidoo, and myself) so we'd defer to an expert for advice here – jlengstorf

<a href="i-saw-the-announcement" name="i-saw-the-announcement">#</a> **Q:** I saw the announcement today that Netlify is sponsoring Astro, which is awesome news! I'm curious if Netlify tracks statistics on the number of sites using the various build technologies like Astro vs Vite vs Webpack vs Next, etc. To keep an eye out for up-and-coming frameworks. – IanVS

Yes! We're super hyped to partner with various open source frameworks (we're also MVP sponsors of Nuxt). We do keep an eye out for this, and run the State of the Jamstack community survey to see what's up and coming. Results for the latest one are coming soon! – cassidoo

<a href="whats-up-with" name="whats-up-with">#</a> **Q:** What's up with the fear of Angular in web dev? 😂 – Deleted User

People are afraid of making money – cassidoo
Actually though, we've got a bunch of Angular blog posts here 😆
https://www.netlify.com/authors/tara-z.-manicsic/

<a href="is-there-a-newsletter" name="is-there-a-newsletter">#</a> **Q:** Is there a newsletter you could recommend? – gregoirevda

Shameless plug, my newsletter is at cassidoo.co/newsletter!

I also like Frontend Focus, Jamstacked, React Status, and Bytes!

– cassidoo

<a href="if-a-frontend-developer" name="if-a-frontend-developer">#</a> **Q:** If a frontend developer is exploring backend for last six months and doesn't want to give up on frontend in which he has years of experience, what career role should he choose from learning and growth perspective. – taleymirza

Follow your heart (but actually though, it's kind of up to you what you want to do, we can't really tell you that!) – cassidoo

<a href="was-writing-technical-blog" name="was-writing-technical-blog">#</a> **Q:** Was writing technical blog posts one of the biggest boosters in your tech career? If not, what was it? – Arkadiusz

It helps a lot! I think it's a lot of different things that boosted my career. Teaching and writing though are definitely my favorite ways of learning. You cover cases for other people, instead of yourself, and that gives you a deeper understanding! – cassidoo

<a href="does-netlify-have-remote" name="does-netlify-have-remote">#</a> **Q:** Does Netlify have remote openings in Africa? more specifically Ghana?. If not are there any plans on that, and if yes, how does one get on board? – scarrexx

We hire anywhere, and our roles are listed here: https://www.netlify.com/careers

Granted, be aware of time zones, the more east you get, the rougher your meetings might be 😅

– cassidoo

<a href="what-tools-like-postman" name="what-tools-like-postman">#</a> **Q:** What tools (like postman) do you guys use for your day to day development? – BaluBabu

VSCode and vim (I like a weird combo), Netlify CLI, Stack Overflow, and prayers 😆 – cassidoo

<a href="have-you-seen-much" name="have-you-seen-much">#</a> **Q:** Have you seen much use of WebAssembly at Netlify internally or by users? – almibe

we're seeing some usage, including internally at Netlify. It's still fairly light and a lot of what we're seeing is experiemental or proof-of-concept, but it seems like a really exciting space to watch! – jlengstorf

<a href="getting-started-with-web" name="getting-started-with-web">#</a> **Q:** Getting started with web dev freelancing, any tips? – Deleted User

Keep increasing your rates until you find a sweet spot! – cassidoo

<a href="im-curious-about" name="im-curious-about">#</a> **Q:** I'm curious about JAMStack what is it? – BaluBabu

Jamstack is an approach to web development that focusses a lot on decoupling the UI from the backend. Pre-generating the front end and then serving it as static resources makes hosting, deploying, scaling sites a lot simpler than it once was. I like this summary here: https://jamstack.org/glossary/jamstack/ – philhawksworth

<a href="what-is-good-dx" name="what-is-good-dx">#</a> **Q:** What is good DX at Netlify? – juniornjay

good developer experience is making great decisions by default on behalf of developers, but not removing any of their autonomy to reach into the config and customize things if needed

I've written about this in a longer format, too! https://www.jason.af/progressive-disclosure-of-complexity

– jlengstorf

<a href="how-do-you-manage" name="how-do-you-manage">#</a> **Q:** How do you manage your time and the motivation to produce so much content? – jd

A strict calendar and a todo list are really important for me, and I write down a lot in Obsidian! A lot of projects can be demotivating (I have many unfinished ones lol) but if you keep working at them, you'll get a lot done 😅 – cassidoo

<a href="do-you-foresee-launching" name="do-you-foresee-launching">#</a> **Q:** Do you foresee launching any more backend services like Identity? I think they’re great! – Oli

Oooh that's a tempting one! the entire ecosystem is already flourishing so nicely that I think it is more likely that Netlify will be trying to make using existing tools and services really slick and friction free. So perhaps thinking of integrations and wrappers rather than specific Netlify-grown services is a good bet. – philhawksworth

<a href="rust-seems-to-be" name="rust-seems-to-be">#</a> **Q:** Rust seems to be becoming more and more popular. With the ability to use it in the browser via wasm, do you think it is a useful language to start learning for frontend development? – Fouad

I'm at the "I don't know" phase for this language right now. I know a lot people are loving its speed for frontend stuff, but I haven't tried it myself! – cassidoo

<a href="linux-or-macos-which" name="linux-or-macos-which">#</a> **Q:** Linux or MacOS which you guys prefer? – Deleted User

screams in Windows

Honestly for web dev, it's kind of all the same at this point. Do what you prefer! I use mostly Windows and MacOS.

– cassidoo

<a href="do-you-think-elixir" name="do-you-think-elixir">#</a> **Q:** Do you think Elixir,Go is a good next step for a competant Nodejs developer for backend dev, or is anything anything else? – BaluBabu

Yes! I've been seeing a lot of companies move more and more towards Elixir and Go 🙂 – cassidoo

<a href="does-the-headless" name="does-the-headless">#</a> **Q:** Does the (headless) CMS have anything to do with the framework used to build the actual frontend? Ex. Can I use Ghost (which uses Ember.js) as my CMS and create a frontend using Gatsby? – syncerax

The whole concept of "headless" means you can use anything with anything! So yes, use those to your heart's content ❤️ – cassidoo

<a href="who-is-maintaining-the" name="who-is-maintaining-the">#</a> **Q:** Who is maintaining the Gotrue Api at Netlify? – juniornjay

one of our internal engineering teams maintains it, but we're a little understaffed right now so active dev is on hold. We're hoping to get more folks hired soon so we can pick it up in earnest! – jlengstorf

<a href="i-looked-around-the" name="i-looked-around-the">#</a> **Q:** I looked around the Web but couldn't find the React micro example to understand the core functionality of react. Any suggestion? new to React. – vjr2nd

I have an online course for it if you don't mind the shameless plug, at cass.run/rrc, otherwise I recommend going through the docs! – cassidoo

<a href="do-you-think-the" name="do-you-think-the">#</a> **Q:** Do you think the whole micro-frontend approach will get more attention and be used more? – BaluBabu

I do! We see big companies and projects adopting this sort of architecture quite often, and being very pleased with the agility and portability it brings them – philhawksworth

like docker or something like laragon? All of these buzzwords get their 15 minutes of fame and bits and pieces of it end up being used a lot, lol, so... Yes and no 😅 – cassidoo

<a href="thoughts-on-redwood-js" name="thoughts-on-redwood-js">#</a> **Q:** Thoughts on Redwood js? – Oli

It seems cool! I haven't built with it yet but they're doing a lot of interesting things it seems like. Plus they give away free stickers on their website, which totally won me over. – cassidoo

<a href="what-developer-enviroment-do" name="what-developer-enviroment-do">#</a> **Q:** What developer enviroment do you mostly use on windows cassidoo like docker or something like laragon? – Swift

Nah I don't do any of that, since I'm mostly on frontend doing serverless style development, I don't really need Docker or anything! I use the Netlify CLI but that's about it. – cassidoo

<a href="what-happened-to-netlify" name="what-happened-to-netlify">#</a> **Q:** What happened to Netlify Stories? 😂 – Deleted User

some ideas are too powerful to live – jlengstorf

<a href="what-advice-you-give" name="what-advice-you-give">#</a> **Q:** What advice you give to someone without experience in any company and who is self-taught for the last 2 years? Most of the companies want people with experience – claudiu

Apply EVERYWHERE. Truly, it's a numbers game. Literally apply to more than 5-10 jobs a day. Get your foot in the door! A lot of these places don't hire you not because of you, but because of other outside things. – cassidoo

<a href="in-your-opinion-is" name="in-your-opinion-is">#</a> **Q:** In your opinion Is IT certification relevant or should people not bother and focus on projects / writing / other thing that show their skills / insights? – Arkadiusz

Meh I haven't seen it asked for much at companies, it's more of a "nice to have" than a requirement. I'd personally focus on projects. – cassidoo

Sorry to be the first to use the phrase... But I think this is a classic for "it depends"! 🙂

Depending on the sector you want to work in, or employers you are targeting, you might find it more or less valuable. I don't think that they should be sought "by default" without identifying a need for a specific knowledge and accreditation.

– philhawksworth

<a href="do-you-guys-work" name="do-you-guys-work">#</a> **Q:** Do you guys work with backend stuff on top of your frontend role? – juniornjay

Sometimes, mostly in the form of serverless stuff though on my end. I left the backend life long ago 😆 – cassidoo

sometimes! I mostly find myself using tools like Hasura more than I'm building true backends, but I spend a LOT of time writing serverless functions 😄 – jlengstorf

I think the boundaries are blurring more and more! I find myself at "the back of the front end" a lot, plumbing together systems with front-ends. It's one of the joys of so much decoupling in the architecture these days for me! – philhawksworth

<a href="what-can-you-not" name="what-can-you-not">#</a> **Q:** What can you NOT do when going serverless? – kanerva

rub your belly and tap your head at the same time, so difficult – cassidoo

streaming chunked responses won't currently work, and stuff like subscriptions / WebSocket connections don't work – jlengstorf

<a href="do-you-provide-a" name="do-you-provide-a">#</a> **Q:** Do you provide a CI step to extract all graphQL queries at build time to validate them against the schema? 😅 I’m looking for a solution to that – gregoirevda

You could do this with a Netlify Build Plugin, in theory! – cassidoo
https://www.netlify.com/products/build/plugins/

<a href="do-you-think-hasura" name="do-you-think-hasura">#</a> **Q:** Do you think Hasura could be used for a highly scalable production app? – Jamie

absolutely! it's in production for quite a few companies at large scale now – jlengstorf

<a href="whats-your-most" name="whats-your-most">#</a> **Q:** What's your most controversial linting rule opinion? (a la .eslintrc) – OrnithopTyler

Linting should be dusted out and never used again (I don't actually believe this, it just sounds controversial)

– cassidoo

<a href="whenever-im-coding-and" name="whenever-im-coding-and">#</a> **Q:** Whenever I’m coding and hit the M key, it registers as an N and vise versa. How do I fix this? – Jimothy

Reprogram your keyboard – cassidoo

<a href="what-is-the-most" name="what-is-the-most">#</a> **Q:** What is the most unique or interesting serverless function you've ever seen? – IanVS

So many possibilities! I had a ball recently using serverless functions to generate, store, and render custom conference lanyards for Jamstack Conf. .... Cue a picture of me as a cowboy... Https://jamstackconf.com/badge/SZ5oRHd4lwtF – philhawksworth

This lanyard project is so dang fun https://jamstackconf.com/badge/8mW6ik4TcQGU – jlengstorf

<a href="how-relevant-is-learning" name="how-relevant-is-learning">#</a> **Q:** How relevant is learning about security for web developers (especially in the context of Jamstack)? There are so many different security implications to consider while deploying a website. It's quite overwhelming! Is there any way Netlify helps here? – syncerax

I think it's good to know as much as you can, but what I like about building on Netlify in a very serverless, decoupled way is that I can pull in something like Auth0 or Okta or Stytch and get all the security without having to implement it myself 😆 – cassidoo

<a href="im-teaching-a" name="im-teaching-a">#</a> **Q:** I'm teaching a React course and would like to do interactive code examples preferably even embedable in markdown. Any suggestions? – Haaxor1689

Not sure what platform you're using, but Scrimba is pretty good for interactive code, and you could also embed a CodePen or CodeSandbox that way, as well! – cassidoo

<a href="i-dont-know-if" name="i-dont-know-if">#</a> **Q:** I dont know if this is relevant but do you guys have any idea for self hosted object storage solutions we can use to build say a firebase storage clone? – BaluBabu

Check out Supabase: https://supabase.io/ – cassidoo

<a href="i-was-just-hired" name="i-was-just-hired">#</a> **Q:** I was just hired as a junior developer but I work alone and no one to really bounce ideas off which is the only bad thing about the job. I have had to do a lot of learning recently and picked up the MERN stack. Was there any other stacks that you can think of to build internal web apps that is beginner friendly? – Centrax

I'm a fan of Jamstack (I know, what a surprise!) because you don't have to deal with servers or any kind of deployment — you can build locally with Netlify Dev & the CLI (https://ntl.fyi/dev), then deploy it by pushing to GitHub. I like this because it lets you focus on one area of expertise instead of requiring you to learn lots of things at once – jlengstorf

<a href="what-does-react-have" name="what-does-react-have">#</a> **Q:** What does React have that solid js doesn't? – xoldyckk

Mostly age, experience, and a large community. It seems like you can do quite a bit with Solid, from what I've seen! – cassidoo

<a href="do-you-have-any" name="do-you-have-any">#</a> **Q:** Do you have any suggested full stack learning materials/courses for a beginner? Like the whole shi-bang! I’m having trouble stringing together front end and back end from separate resources. – Eterneon

FreeCodeCamp is great, and I've seen a lot of folks have success with https://scrimba.com/learn/frontend – cassidoo

<a href="does-serverless-codebases-get" name="does-serverless-codebases-get">#</a> **Q:** Does serverless codebases get hard to manage in the long run? Specially if you have multiple ones in a single project. – juniornjay

Depends on how you organize it. I've seen quite a few people break those up into multiple repos for this reason! – cassidoo

<a href="any-advice-for-non" name="any-advice-for-non">#</a> **Q:** Any advice for non US devs looking for remote roles? – juniornjay

At Netlify? It me!

Netlify hires globally and we have an ever expanding non-us contingent. I've enjoyed seeing more folks arrive in my timezone and even in my city! (https://netlify.com/careers)

But generally, I think that we are lucky that the market is feeling more and more international and distributed. So there are plenty of opportunities. If you find a role with a company/team in a different time-zone to you, be mindful of finding a culture which is respectful and aware of working across timezones. That has made a huge difference to my quality of life!

– philhawksworth

<a href="do-you-think-it" name="do-you-think-it">#</a> **Q:** Do you think it's still relevant to teach class components in React basics class? – Haaxor1689

I think they're good to be aware of, but should not be used as a primary way of writing React. I personally don't teach them. – cassidoo

<a href="what-other-companies-or" name="what-other-companies-or">#</a> **Q:** What other companies or persons do you follow in tech to get your news/current events? – JasonHoku

@jlengstorf lol – cassidoo

I follow @cassidoo – jlengstorf

<a href="are-there-some-use" name="are-there-some-use">#</a> **Q:** Are there some use cases that you think Jamstack isn't mature enough to handle yet? – syncerax

We're seeing everything from huge SaaS dashboards like Twilio to the kiosks at Popeye's to the apps running in Peloton bikes using the Jamstack, so I don't think there's anything you can't do. At its core, Jamstack means decoupling the frontend and precompiling pages whenever possible — that doesn't mean you can't ever use other tools; it's about good defaults, not dogma – jlengstorf

<a href="any-drawbacks-to-having" name="any-drawbacks-to-having">#</a> **Q:** Any drawbacks to having a monorepo? – Jamie

Things being very closely intertwined in a monorepo can be fairly difficult to maintain over time. If you build it in a strictly modular way, you'll do well. – cassidoo

<a href="what-mistakes" name="what-mistakes">#</a> **Q:** What mistake(s) do you see most beginners do? – kanerva

Not asking enough questions 🙂 – philhawksworth

<a href="lightning-round:-useeffect" name="lightning-round:-useeffect">#</a> **Q:** Lightning round: useEffect() a source of love or bugs? – Arkadiusz

Love, especially with subscription-style functions, but also pain and agony if you mess up 😆 – cassidoo

<a href="redux-vs-usecontext" name="redux-vs-usecontext">#</a> **Q:** Redux vs UseContext, which one is better and must be used often? – BaluBabu

both are great! the "better" option is the one that the team maintaining it is comfortable keeping healthy and iterating on over time – jlengstorf

<a href="any-cool-projects-out" name="any-cool-projects-out">#</a> **Q:** Any cool projects out there that interest you guys? – BaluBabu

I mentioned Supabase earlier, I think the fact that it's open source is so cool! – cassidoo

<a href="sql-or-graphql" name="sql-or-graphql">#</a> **Q:** SQL or GraphQL? – Edaz

REST!!! 😜

Answering this with another answer to the question about interesting serverless functions usage: https://canyoutell.me/sql-or-graphqL

– philhawksworth

<a href="sql-vs-query-builder" name="sql-vs-query-builder">#</a> **Q:** SQL vs query builder vs ORMs. How about from a freelancer's perspective? – xoldyckk

I like ORMs for large teams. I think there's value in matching the level of effort to set something up vs the amount of time it's expected to live.

Do you reuse that code between projects? do you need to maintain it? are the projects temporary launches (like a marketing campaign) or app platforms? all of that factors into my decisions about architecture – jlengstorf

<a href="which-form-lib-you" name="which-form-lib-you">#</a> **Q:** Which form lib you prefer overall? Formik/final-form/hook-form/other? – Haaxor1689

Reach UI components to make forms is my favorite, personally! – cassidoo

real talk: I love plain ol' forms with the built-in FormData API – jlengstorf

<a href="what-would-you-consider" name="what-would-you-consider">#</a> **Q:** What would you consider is the next step for a dev working with React for 4+ years? – BaluBabu

Understanding how to build reusable libraries is difficult and worth knowing! – cassidoo

<a href="what-would-you-say" name="what-would-you-say">#</a> **Q:** What would you say are topics/concepts junior devs struggle the most with? – Haaxor1689

the initial hurdle of "thinking in code" is a big one. Anything that doesn't have a clear analogy in real life. Abstract logic is really hard! – jlengstorf
