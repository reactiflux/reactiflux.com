---
title: Michael Shilman & Gert Hengeveld
date: 2020-11-19
time: 1PM - 2PM PT
location: Q&A Channel Reactiflux
description: "Maintainers of [Storybook](https://storybook.js.org/)"
people: "[@mshilman](https://twitter.com/mshilman/) & [@ghengeveld](https://twitter.com/ghengeveld)"
---

<a name="hey-been-a-huge" href="#hey-been-a-huge">#</a> **Q:** Hey! I have been a huge storybook fan for years and have seen it grow and change, especially in how easy it's become to write stories -- is there an idealized "final form" for storybook? in terms of ease to use, set-up, author, integrate, etc. – Mike Bars

**A:** We added args in 6.0 as a stylized way to edit stories with controls and manage story data. i think the current target is "edit your components with controls" and then snapshot the stories. that will be a pretty good DX that will also allow non-technical stakeholders to contribute.

– shilman

---

<a name="what-do-you-think-of-open" href="#what-do-you-think-of-open">#</a> **Q:** What do you think of open source project who use mailing list as way of communicating such as GCC(Gnu compiler collection). Do you believe it make it harder to have newer contributors and it making it harder communicating with the maintainers to these project? – Vincent's

**A:** Personally I've never understood how those even work to be honest. Email isn't a way of comms I use a lot. I only occasionally stumble upon these when searching for cryptic stuff on Google, but other than that they've always felt very "closed" to me. But I grew up using forums (phpbb et al). I continuously find myself wanting to go back to forums as community platform. Even for in-company comms.

– ghengeveld

I can't imagine doing it over email, although I suppose there is some benefit to that for a more "formal" exchange. But we use Discord for Storybook community 🙌 and it's great to keep it casual.

– shilman

---

<a name="what-are-some-features-youve-always" href="#what-are-some-features-youve-always">#</a> **Q:** What are some features you've always wanted to add to storybook, but haven't had the time/bandwidth/priority to implement? – fox

**A:** Biggest two for me are live editing a la playroom and interaction tests built into storybook. We're going to spend a bunch of time on Storybook for app development next year and that will bring a bunch of new stuff. Working in the frontend space is like drinking from the firehose, so I expect there will always be 10 new ideas coming in for every 1 we can actually execute on. I'm sure all the team members have their own laundry lists.

– shilman

---

<a name="thank-you-for-the-q-a" href="#thank-you-for-the-q-a">#</a> **Q:** Thank you for the Q&A. When building a design system, what is the established way to use it across multiple projects without impacting the development process? We used our design system as an npm package and it was not ideal because changes have to be published to npm first before we can use it. – HTlili

**A:** We use NPM for our design systems. It's far from perfect (the more you use it, the more you hate it!) but it gets the job done and is ubiquitous. I think there are a lot of nice packages out there like `auto` for streamlining the process.

– shilman

Check out relative-deps by [Michel Weststrate](https://twitter.com/mweststrate) (author of [mobx](https://mobx.js.org/))

– ghengeveld

---

<a name="what-is-the-nicest-feature-youd" href="#what-is-the-nicest-feature-youd">#</a> **Q:** What is the nicest feature you'd like to ship in Storybook 7? – Yann

**A:** Storybook 7.0 would be a major release. In my experience those x.0 releases are pretty boring from a feature PoV. The interesting stuff _should_ get released in a minor release, because that's the "new stuff but not breaking" semver change. Looking at what major new features we'd want to add, I'd say make it more integrated with your IDE. Make it easier to use with low-code/no-code tools. That sort of thing.

– ghengeveld

I hope we can make Storybook super fast by 7.0. We're focused on performance these days. I guess you could call it a bugfix, but I think it's a feature. 😛

– shilman

---

<a name="how-hard-is-it-to-keep" href="#how-hard-is-it-to-keep">#</a> **Q:** How hard is it to keep up with the issues? – -Roman-

<a name="i-see-often-on-big" href="#i-see-often-on-big">#</a> **Q:** I see often on big open source repo have a lot of issue(1k+) and lot of PRs. How do you manage _that many issue_? I know you can have more than 1 maintainer but tthere's no way that 10 maintainer can go through all of these issue and pull request right? – Vincent's

**A:** I spend probably an hour every day reading and responding to issues. It's manageable to keep up to date on them. Actually fixing them is impossible for a project of Storybook's size and adoption. We use stalebot and get a lot of grief for that, but it's the only way we can keep things under control. I'm hoping to organize the community better in 2021 to help scale up our maintenance efforts.

– shilman

---

<a name="hi-guys-thanks-you-for-the" href="#hi-guys-thanks-you-for-the">#</a> **Q:** Hi guys, thanks for the good work. Do you think Storybook is worth the investment for solo projects? Bedankt! – Weijland

**A:** Natuurlijk! Storybook is a tool for local development. It's supposed to make your life easier as individual developer. Sharing your Storybook is of course very helpful for a team as well. Storybook allows you to focus on individual components so you can think more clearly of it's API and various features and edge cases.

– ghengeveld

---

<a name="are-there-any-high" href="#are-there-any-high">#</a> **Q:** Are there any high level plans to integrate storybook as a tool for designers? Or similarly, plans for integration with common/popular design tools? – Mike Bars

**A:** There are a bunch of addons for connecting Storybook to design tools, and even a few commercial products for this, https://www.contrast.app/ which is really cool. We'll keep doing a lot in this space. Next step here is to make a catalog for all our addons to make them easier to discover and install.

– shilman

Definitely. While our target audience is UI engineers / front-end developers, we also focus on team collaboration, the most obvious of which is collaboration with designers.

– ghengeveld

---

<a name="what-is-the-biggest-change" href="#what-is-the-biggest-change">#</a> **Q:** What is the biggest challenge that you have to deal with when you have a big open source project such as yours? – Vincent's

**A:** I think we have a quantity vs quality thing. In a very tight, focused project you can make sure everything is beautiful. The biggest challenge in Storybook is the huge surface area and huge contributor base. It's a beautiful mess. We are spending a lot of time trying to get it under control and make it more beautiful and less mess.

– shilman

---

<a name="what-games-do-you" href="#what-games-do-you">#</a> **Q:** What games do you play? 😄 – -Roman-

**A:** Currently Rise of the Tomb Raider. Previously C&C Red Alert remastered. Also want to get back to VR gaming because my Valve Index is collecting dust after finishing HL Alyx.

– ghengeveld

"Merge the PR with dubious tests" 😅 🔫

– shilman

---

<a name="are-you-earning-money-with" href="#are-you-earning-money-with">#</a> **Q:** Are you earning money with this? Ff yes, how? – AdrianC

**A:** Not with Storybook. We run Chromatic, a SaaS platform for visual regression testing on top of Storybook. Storybook is 100% open source and not owned by Chromatic. We just happen to employ the top Storybook contributors. Not really a coincidence of course. 😉

– ghengeveld

Yeah. Check out https://www.chromatic.com/ which is a tool for shared storybook collaboration and testing in the cloud. We have a bunch of big customers and are growing fast.

– shilman

---

<a name="suppose-youve-been-working" href="#suppose-youve-been-working">#</a> **Q:** Suppose you've been working on some community OSS service for a while and you find out that there's another vetted engineer (that's also apart of the same community and is well respected) that actually did your entire work in about about 2 days . My question is, where is the best place to cry?

[Seriously though] How can these 2 parties collaborate? We hold very similar **values** but have a different vision (of what this product could be). I need their support, but I don't know what to do next..., idk why I am stressed lol, but this project is really dear to me. – dilraj

**A:** I try to keep my head down and push forward. In Storybook's case we've reached out to everybody else in the space to try to collaborate. Our attitude is "open open source" (the more the merrier) and we think this is the winning strategy.

As for the emotional side of it, life's a roller coaster. Good stress management through exercise, meditation, etc. is something that will pay off dividends in OSS and every other aspect of life.

– shilman

I've been there. I built React Async (https://react-async.com/). It's kind-of popular. But [React Query](https://react-query.tanstack.com/) blew it away. Where do I cry? In a Discord Q&A. Also I contacted some devs that are building similar things, in an effort to collaborate. In the end we had good talks, I made some friends and we went our own ways.

– ghengeveld

---

<a name="how-to-start-on-big" href="#how-to-start-on-big">#</a> **Q:** How to start on big projects like storybook? I mean for a developer like me that nobody knows who am I. – Rouzbeth

**A:** We love new contributors. Fix an issue that's bothering you, or jump on our discord to get involved with the community. We've helped a bunch of people merge their first OSS PR's, and that's actually one of the more rewarding part of working in OSS.

– shilman

---

<a name="im-a-designer-what-benefits" href="#im-a-designer-what-benefits">#</a> **Q:** I’m a designer, what benefits can I get from Storybook? Is it a competitor to Framer? How is the customization ability of component styling? How do I collaborate with the team? – Ray

**A:** Storybook is less of a prototyping tool and more focused on production systems. As a designer there are a few benefits that come to mind:

1. Make sure that your designs are implemented exactly to spec
2. Synchronize the implementation with the design (lots of design actually happens DURING implementation)
3. Sandbox for making visual tweaks without having to set up the entire application environment, because Storybook captures isolated component states, so you can tweak styling etc. without having to know the full system.

– shilman

---

<a name="what-do-you-think-of-graphql" href="#what-do-you-think-of-graphql">#</a> **Q:** What do you think of GraphQL? – -Roman-

**A:** We use it extensively at Chromatic. I enjoy it a lot because it allows me to just think in terms of the domain model and actions/tasks to be done. I don't want to go back to the days of considering PUT vs POST and the best way to design your URLs and how to deal with overfetching. Regardless I do think it's a bit heavy sometimes and would be the first to ditch it if something better comes along. (Although I have better things to do than switching frameworks.)

– ghengeveld

Love graphql for all the reasons @ghengeveld mentions, but wish it was more built into the language and type system. currently feels like adding N more levels of abstraction to an already complex stack.

– shilman

I second that @shilman

– ghengeveld

---

<a name="do-you-have-an-elevator-speech" href="#do-you-have-an-elevator-speech">#</a> **Q:** Do you have an elevator speech? I have a new project and I'd like to give a try, but I must convince to my boss. – AdrianC

**A:** I'd say the best way to convince your boss is to tell him everyone is using it these days. Which is somewhat true. We have very very big names in the customer base, and we know of a lot more that use Storybook internally.

FYI LEGO is using Storybook 😉

– ghengeveld

IMHO it's a best practice at this point. Many of the UI's you love to use were built in it including the new Twitter UI, Slack, Spotify, Squarespace, etc. To me the strongest argument is the adoption by the best teams in the industry.

Why did they adopt it? It's the best way to manage the complexity of modern component-based UIs, and allows you to build & use components like LEGOs (like they were supposed to be!). Not only that but you get a bunch of testing for free when you use it.

That's a horrible elevator speech. 😂

– shilman

---

<a name="how-did-storybook-take" href="#how-did-storybook-take">#</a> **Q:** How did storybook take off? Did you guys actively advertise it? – Hums

**A:** This was before my time, but I know Storybook almost died when Arunoda abandoned it. Luckily at that point there were plenty of people very happy with it and willing to work on it.

The first version of Storybook was written by some guys in Sri Lanka. I think they got so much stuff right. There were other tools in the space, but the story concept was really simple and the right way to think about components. The main architect, Arunoda, already had a following, so he got it to first base. When Norbert and I took over the project we just kept pushing it forward pretty much in line with the original vision. We released consistently and pushed it into more frameworks (Vue, Angular, Svelte, Ember, etc.). We've only recently started marketing it (content marketing) and up until now our marketing was pretty minimal. Most of the success so far has been product-driven.

– shilman

I have to add what Norbert did right was not take the lead and "own" it, but encourage and help others to get involved. He did that because he actually planned to step away from Storybook after 6 months or so. But he stayed.

– ghengeveld

Yup Norbert did a great job recruiting people early on. I'd still say that the adoption was due more to the product itself. My attitude about Storybook is that it's just the right way to do things, and in 10 years this will be an indispensible part of the UI toolchain. If we don't build it, somebody else will. (And they probably will even if we do build it!)

– shilman

---

<a name="do-you-read-technical-books" href="#do-you-read-technical-books">#</a> **Q:** Do you read technical books? Which one would you recommend?? – AdrianC

**A:** Not much. The only one that stands out to me is Mythical Man Month, which I think is great because the essays are all from the 1970's and 80's but still mostly apply today.

– shilman

Not really. Only thing I can recommend (not a book) is Functional Programming Principles in Scala by Martin Odersky on Coursera. I learned a lot.

– ghengeveld

---

<a name="what-state-management-library" href="#what-state-management-library">#</a> **Q:** What state management library/API do you like most and why? – vakon

**A:** React.useState. It works for most purposes. There's very few things you cannot accomplish with that. But I'm hardcore and I guess I like the pain and suffering it sometimes give you.

– ghengeveld

Hahaha @ghengeveld was going to say the same thing about useState. Great minds.... 🧠

– shilman

---

<a name="react-supports-instand" href="#react-supports-instand">#</a> **Q:** React supports instant change(s) while development, the hot reload feature which isn't in native Android / iOS dev.. What things make it to achieve hot reload? – Dipak Bari

**A:** LOL that's above my pay grade. @ghengeveld ? BTW we're going to support iOS / Android / Flutter in storybook next year. 🤯

– shilman

The trouble is that we don't have anyone with the expertise needed to make native mobile development a first-class citizen. I'm a web dev, always have been, and therefore don't really care about native mobile. We'd love to see that change, but it's a lack of expertise / experience. That's why it's been up to the community to handle this part.

– ghengeveld

---

<a name="how-do-you-make-the-content" href="#how-do-you-make-the-content">#</a> **Q:** How do you make the content of your website hard to scrape. – LYC_thedude

**A:** I don't think we do ... 🤔

You can nest your contents in a bunch of iframes whose URLs and structure are randomly generated... 😉 I really don't know

– shilman

I know of sites that put random letters in between their words but hide those letters visually. So it's spans and spans and spans and spans... Don't do that.

– ghengeveld

---

<a name="whats-the-next-feature-we" href="#whats-the-next-feature-we">#</a> **Q:** What's the next feature we can be excited for? – -Roman-

**A:** I know several teams are building playroom-style live editors for Storybook, which I think is pretty exciting. At a high level, we are going to add a bunch of stuff to make Storybook great for app development, so you can organize full pages in Storybook, which will make it easier to collaborate with PMs and Designers .. this is more of a direction, but will manifest itself in a bunch of new features.

– shilman

I think this will be the addon gallery.

– ghengeveld
