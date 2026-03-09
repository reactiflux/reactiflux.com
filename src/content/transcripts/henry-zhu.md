---
title: Henry Zhu
date: 2017-07-27
time: 1-2pm PT / 8-9PM GMT
location: Q&A Channel Reactiflux
description: "Engineer at Adobe (Behance Team) · Babel Maintainer"
people: "[@left_pad](https://twitter.com/left_pad)"
---

## Babel maintainer and Adobe engineer working on Behance

<a name="awesome-wonderful-amazing-fellow-maintainers" href="#awesome-wonderful-amazing-fellow-maintainers">#</a> **Q:** Just how awesome are your other wonderful and amazing fellow maintainers? :stuck_out_tongue: — loganfsmyth

**A:** lol! I think Logan is one of the best maintainers I could ask for - does everything I don't want to do, and I do things he probably doesn't want to do :smile:

---

<a name="tips-happy-life-alexanderson1993" href="#tips-happy-life-alexanderson1993">#</a> **Q:** What are your tips for a happy life? — alexanderson1993

**A:** What a deep question! Need to look into what matters - sometimes you'll find it when you go through hardships (they become blessings). Work, open source, worldly things are all good but they can't always satisfy since we put our time/life into it and they disappoint when we put our worth as a person into it.

---

<a name="cant-find-sort-lexingscanning-tool" href="#cant-find-sort-lexingscanning-tool">#</a> **Q:** can't find any sort of lexing/scanning tool in Babel's source.. Do you guys implement it yourself or is there something that I'm missing? — harrymerzin

**A:** Lexing/scanning? I think you mean the parser: it's currently in another repo (not in the monorepo) at https://github.com/Babel/babylon. It's a fork of acorn and we have plugins for each proposal (anything that is stage 0 at tc39).

---

<a name="youve-seen-bunch-javascript-infrastructure" href="#youve-seen-bunch-javascript-infrastructure">#</a> **Q:** You've seen a bunch of the JavaScript Infrastructure changes over the last few years from working on JSCS to all of the awesome Babel ecosystem stuff now. What are the biggest needs in the JS Infra ecosystem that aren't being sufficiently met yet? — EliWhite

**A:** Hm not sure about needs - maybe just more consolidation of tools (this doesn't necessarily have to mean making a new tool but just working together as a community with better integrations). It's easy to make tools that do one thing well (and we do a good job of that) but theres the hard work of getting together and coming up with a better story as a whole. I think talking with different communities and getting together and thinking about the ecosystem as a whole helps with this - for Babel it's been great attending TC39 and getting involved more there. I think we have a lot of awesome stuff being created but maybe we need more education (stuff like Kent is doing), what is Babel and how do you write a plugin, how do ASTs work, etc

---

<a name="love-babel-cant-thank-enough" href="#love-babel-cant-thank-enough">#</a> **Q:** I love what you are doing with Babel and can't thank enough for that. I always find it really hard to start when I think if contributing to Babeljs. What do you suggest? — reznord

**A:** I think it's hard to start because you don't have any context into how an open source project works, but it's a lot simpler than you think. Most OSS is just by other people that also didn't know how to get involved and just slowly got started - at [the talk I gave at JSConf EU](https://github.com/hzoo/maintaining-an-OSS-project) I basically explained how I randomly got involved in Babel. I think just need an attitude of wanting to help and you'll slowly get involved - join our (or any OSS) community (slack, twitter, etc) and know that it can be a long term thing (I can say a lot more about this, and will try to write a blog post later)

---

<a name="henry-opensource-project-currently-appreciate" href="#henry-opensource-project-currently-appreciate">#</a> **Q:** @henry what opensource project do you currently appreciate most? (excluding any you've contributed to) — gtfargo

**A:** Hmm in terms of OSS projects I haven't contributed to that I like it would probably be ones that aren't in the js community :smile:. I don't really have specifics - I think projects that have a community behind them that encourage new contributors/maintainers are great: hoodie, etc. I also appreciate projects that are much older - in JS land we focus a lot on the new thing but maintainers do the hard work of caring for a project for years.

---

<a name="motivates-keep-contributing-javascript-community" href="#motivates-keep-contributing-javascript-community">#</a> **Q:** What motivates you to keep contributing to javascript community? — 4ever

**A:** It's the language I use at work, and it's what got me interested in development (other than flash/actionscript which is gone now :slight_smile:). I love being able to make something in the browser/console without having to download anything. It's why I care about Babeljs.io/repl (I wish we could import any npm package). Being involved in Babel means I get to learn about the language itself, and at this point even participate in the development via TC39. I think I want to be a part of getting more people involved in programming. I want to make Javascript a better place to start/be to do that, and with Babel get more people involved in the programming language itself (using new syntax, contributing feedback, education).

---

<a name="tabs-spaces-koops" href="#tabs-spaces-koops">#</a> **Q:** Tabs or spaces? — koops

**A:** Whatever the project set in the repo (I don't want to care).

---

<a name="henry-developer-still-developing-javascript" href="#henry-developer-still-developing-javascript">#</a> **Q:** @henry to a developer who is still developing in javascript and wants to contribute to Babel/other js projects, you've been working on, what path would you recommend. Any books/website.. — Naveen

**A:** I think you can find a project that you are interested in a get involved - it honestly can take a long time but you need to think about why you want to contribute to things kinds of things in the first place. We spend a lot of time telling people to do open source, etc but think about the why and do stuff that is fun! there's a difference between wanting to do open source to get a contribution for your resume or if you want to be a part of the community for the long term. It's interesting to think about a project like a company - I guess the maintainers goal is to have a vision and to get people to want to take part in that vision? I don't really have any specific recommendations - books/classes/podcasts/videos are good for certain people but I didn't really do any of those specifically to get started. Not sure how helpful but it takes time :slight_smile:, and if you like it you'll continue to learn and do more.

---

<a name="make-open-source-project-huge" href="#make-open-source-project-huge">#</a> **Q:** How to make your open source project a huge success? — Norbert

**A:** I don't know how to make a project a huge success? Depends on what you think success means :slight_smile: - is it to be the #1 css-in-js library for 1 day, 1 month, this year? To reach 10k stars, 1 million downloads/month, get retweeted a bunch of times? I think the best things to do is to #1 do stuff that you want that is helpful to you, #2 get other people involved as early as possible because you can't do everything #3 be ok that it's not going to be successful and that you'll continue to do it anyway #4 when you feel like you don't care or don't want to do it anymore be ok with that and move on/ask others to help #5 do it for the long run, not for a measurable level of "success".

---

<a name="recommend-use-webpack-rollup-koops" href="#recommend-use-webpack-rollup-koops">#</a> **Q:** What do you recommend to use, Webpack or Rollup? — koops

**A:** I think the general advice is use webpack for apps/websites and rollup for libraries (we use it in babylon)

---

<a name="opensource-project-code-conduct-yes" href="#opensource-project-code-conduct-yes">#</a> **Q:** Should an open-source project have a code of conduct? If yes, what code of conduct should it have? — koops

**A:** I think a code of conduct is good to explain what kind of behavior is ok in a community (it's not always explicit) - it's so people that aren't comfortable can know what's expected - however in the end its just a document/paper. You need people/maintainers/community to make it real otherwise it's useless

---

<a name="staged-es-features-excited-nick" href="#staged-es-features-excited-nick">#</a> **Q:** What staged ES features are you most excited about? — Nick

**A:** It's funny since I don't even use that maybe new features myself - you can check the proposals at https://github.com/tc39/proposals, and Babel's version of that which we created is https://github.com/Babel/proposals. Object rest/spread, class props are all cool which a lot of us are using already. A?.b (optional chaining) can be nice (it's in v7 alpha).

---

<a name="response-naveens-answer-mentioned-podcasts" href="#response-naveens-answer-mentioned-podcasts">#</a> **Q:** In response to Naveen's answer you mentioned podcasts. Do you have any suggestions for that? I always wanted to have some along with me so, I can listen to them when I'm traveling or something. Can you suggest any? — reznord

**A:** Yeah for podcasts: https://changelog.com/rfc is an amazing podcast about open source and the "human" side of it (https://twitter.com/mikeal and https://twitter.com/nayafia host it as part of https://twitter.com/changelog) - I would check the one they did about Evan You (Vue) https://changelog.com/rfc/12. I actually recorded one with them which should be posted soon.

---

<a name="whats-biggest-issuestroubles-javascript-community" href="#whats-biggest-issuestroubles-javascript-community">#</a> **Q:** what's the biggest issues/troubles the JavaScript community is facing right now? — Norbert

**A:** Not sure I know the issues we face since I don't keep up with all the new stuff that's going on (maybe since I'm busy causing those issues with Babel myself :slight_smile:). I mentioned before about the collaboration aspect which just means that we could spend more time about how to connect tools but it requires a good amount of time/work to figure that out and to think outside the respective projects you work on. Otherwise I think our community could use more help from companies spending dev time to work on open source project they use (of course I speak for Babel since there's a lot of work to be done but never enough people, and that's only talking about maintenance). I see a lot of people burning out or feeling burnt out (and yes it's a personal issue/concern but we should care about our community not just simply say to stop working on it). How do we deal with this underlying issue of depending on volunteer work for critical production systems, even if the end of the burnout could be a few months ahead? If we know we are headed for something bad we should be taking preventative steps!

---

<a name="particular-knowledge-get-getting-involved" href="#particular-knowledge-get-getting-involved">#</a> **Q:** What particular knowledge did you get from getting involved in free software that makes you a better engineer? — amz3

**A:** I kind of talk about this in https://github.com/open-source/stories/hzoo, but yeah there's a lot of stuff! Of course there is the technical part: maybe it is mostly psychological but you tend to write better software when working on a larger open source project since you know people are "looking" (not really) at it and people are going to review it. Maybe it is also a reason why people don't want to get involved in open source because they may be fearful of the criticism people may give. I think I learned to make work-in-progress PRs and just ask for help rather than caring how much the code looked. I learned a lot about the technical things like using git, github, ASTs, etc.

I learned a lot more non-technical things (especially as a maintainer) - it's really not about code, and being a better programming via oss was helpful precisely because you are interacting with people all the time: users (that you don't know), maintainers, people from all around the world. Being a person that can better emphasize with others, learns to delegate/let others do amazing work, developing better communication skills makes you a better engineer (blog posts, issues, prs, comments, etc).

---

<a name="carrying-norberts-question-issuestroubles-currently" href="#carrying-norberts-question-issuestroubles-currently">#</a> **Q:** carrying off of Norbert's question... What issues/troubles are you currently struggling with as a developer? Any recent accomplishments you'd like to share? — gtfargo

**A:** Yeah plenty of things that I'm struggling with: learning not to take on too much work (I tend to say ok with x,y,z and then maybe realize I'm overworked but much later), to learn what it means to prioritize (this means you need to learn what the point/vision of the task/project is in the first place), and how to convince people to help you :slight_smile:

For example: it was easier to realize that Babel-generator https://github.com/Babel/Babel/pull/5833, https://github.com/Babel/Babel/issues/5139 should remove the quotes option after realizing that the point of it was to output code that would be consumed in the browser via minification and that users shouldn't care about the tabs/space/quotes of Babel output - it means we can remove options and make better performance. If a user cares about the quotes it would be for the source code not the output code of Babel.

---

<a name="please-allow-reframe-question-javascript" href="#please-allow-reframe-question-javascript">#</a> **Q:** Please allow me to reframe the question. What javascript books/videos would you recommend, before getting involved in huge code base like Babel or to say it, in other words, what are your favorite javascript/react/(web development) books/learning resources. (I know you started contributing through doc changes :sweat_smile: , but still, my heart wanted to ask this question.) — Naveen

**A:** Ah ok so https://github.com/Babel/Babel/blob/7.0/CONTRIBUTING.md#contributing, https://github.com/thejameskyle/Babel-handbook, astexplorer.net, eloquent javascript, newly released is "Practical Modern JavaScript".

---

<a name="could-recommend-javascript-first-programming" href="#could-recommend-javascript-first-programming">#</a> **Q:** Could you recommend JavaScript as the first programming language (e.g. For your friend's kid)? If not, which one would you choose? — jimkakain

**A:** I would say yes not because it's a good language (we are adding more and Babel isn't helping to keep it simple), but because you can expose them to newer syntax/features later on. Javascript is ubiquitous, easily accessible, has the largest package ecosystem, most jobs/resources/tools, etc. You pick js for the community/people.

---

<a name="recommendations-organizing-documenting-promoting-personal" href="#recommendations-organizing-documenting-promoting-personal">#</a> **Q:** Do you have any recommendations for organizing, documenting, and promoting personal open source projects to allow them to scale more easily? — Nick

**A:** https://opensource.guide/ has some tips - you could ping people but trying to make it big isn't always what you want - you'll find that maybe you have 1000 people asking you for things you would never implement yourself, and then you make a plugin system and then you about to care about the plugin ecosystem when you make a major version (cough Babel :smile:). documentation is really important and even though we ask new contributors to do it since it's just markdown maintainers have the actual knowledge to do it - asking new people to check it out and contribute is a good way to know where your project is lacking. One thing you can do is always think about how a bug/issue that is reported could have been fixed by better documentation, removing a feature, or adding a "feature" that does something automatically.

A good example of this is Babel-preset-env - people complain about having to use es2015,es2016,es2017, etc and now es2018 but this removes the need to do that at all (and the benefit of less config/bugs, less packages, less need to care about package squatting until we switch to npm scoped packages with @Babel).

---

<a name="since-ones-asking-whats-sentiment" href="#since-ones-asking-whats-sentiment">#</a> **Q:** since no ones asking, what's the sentiment around the office about flash's deprecation :wink: ? — totaldis

**A:** Nick: @totaldis Pure joy? :stuck_out_tongue:

I believe so :slight_smile:

Although I'm sure most of us will admit that we might of got our start from flash (I did), I remember a friend in grade school making flash animations and being inspired by that even though I didn't do any programming until way later

---

<a name="babel-7-coming-prevent-another" href="#babel-7-coming-prevent-another">#</a> **Q:** Babel 7 is coming up, how do we prevent another community backlash like with Babel 6? Are you weighing potential negative response with releases? With so many people dependent on Babel, huge huge amount of hours and money will be spend upgrading. How do you pick buckets of changes to go into the next major? — Norbert

**A:** Great question! Yeah we are painfully aware of the issues related to a major version - one thing we can do is do scheduled releases which we've never done a good job of doing. Another is doing for frequent/smaller major versions. Yeah there's a lot of breaking changes we could do that all add up to making the upgrade experience worse for someone. The plan is to do a beta release soon and use that time to ask all plugins/presets (and anyone willing) to upgrade, compile the issues in the upgrade guide, and then create codemods for things that are simple enough. Then when we do an rc/final release it should be as simple as some tool we create like Babel-upgrade to do it automatically. Of course this is all on the bucketlist and not done yet. In my perfect world we could do a major release, and then we would have our Babel-bot automatically send a PR to a project update with changes (if someone wants to do this :sunglasses:).

---

[5:03 PM] jimkakain: **Q:** What future web technology/capability you're most excited about?

**A:** [5:04 PM] henry: jimkakain: the binary ast proposal sounds great from my point of view as a tooling author (https://twitter.com/left_pad/status/887431203548254208) although it may take a well to come to fruition. Being able to have the same AST for all our js tools is great, even if the point of the proposal original was for loading/parse times in the browser.

---

<a name="hostingcdn-solution-would-recommend-others" href="#hostingcdn-solution-would-recommend-others">#</a> **Q:** What is your hosting/CDN solution? Would you recommend it to others? — koops

**A:** I just use github pages for my own site since it's simple, and same with the Babeljs site - I hear netifly is nice though.

---

<a name="property-initializers-still-stage-2" href="#property-initializers-still-stage-2">#</a> **Q:** Why are property initializers are still at stage 2? Any problems with them? — Ruslan Gunawardana

**A:** Haha its actually stage 3 like literally a few minutes ago. The [july tc39 meeting is right now](https://twitter.com/lbljeffmo/status/890679542007738368). Also by the way if you want to get involved we have the meeting notes posted at https://github.com/Babel/notes and actually started consistently doing them.

---

<a name="vision-future-languages-compiled-js" href="#vision-future-languages-compiled-js">#</a> **Q:** Do you have a vision about the future of languages that are compiled to JS? ClojureScript, TypeScript, etc. Which will remain? Do they worth learning now? — Ruslan Gunawardana

**A:** I don't have one myself, other than that we could be doing work in Babel to help integrate with them better - technically all of them can compile to ES3/5 but instead they can compile to whatever Babel supports - even coffeescript 2 does that.

---

<a name="see-exciting-new-features-part" href="#see-exciting-new-features-part">#</a> **Q:** Do you see any other exciting new features, that are part of a popular library/plugin getting into javascript spec as native API? Years ago Audio and Video APIs became real. For example a Router API would be interesting today. Where do you see the point when adding new APIs to javascript makes sense? How does the decision about it happen? — easwee

**A:** This is a really good question, I believe that's basically the thing that a committee like TC39/etc decides if the community has interest. A few I can think of are things like modules/promises. People are asking for something like JSX in the language but all of these things are a hard sell - there is a complexity budget in the language and you have to look at how each feature interacts with every other. Once something is native/in the platform it can never be removed.

This is why tools like Babel are useful because it gives the community an opportunity to use features before they are "real" and if we realize it's a bad idea we can "remove" them and it won't get stuck as part of the browsers/platform.

I'm not sure we can know when it makes sense - I think the idea of stages in tc39 is pretty cool so that you can test the waters

---

<a name="going-functional-programming-improvements-ecmascript" href="#going-functional-programming-improvements-ecmascript">#</a> **Q:** are there going to be any functional programming improvements in ECMAScript 2018++? — Ruslan Gunawardana

**A:** Yeah, bind proposals (a::b), pattern matching, pipeline operator.

---

<a name="dont-mind-career-related-question" href="#dont-mind-career-related-question">#</a> **Q:** If you don't mind a more career related question: What are your favorite things about your work at Adobe and/or specifically on Behance? — Nick

**A:** Lots of good stuff - our team cares about the product but also gives time to do technical debt because it's part of the product. We care about meeting deadlines but not making people have to stay late, skimp on quality/testing, or making those deadlines immovable. There's a balance needed of having the right amount of resources, time, scope. And personally I appreciate our willingness to contribute to open source - whether it's about allowing me to spend time maintaining Babel (going to TC39, managing the project, getting help from other companies, doing RGSoC/GSoC) or my coworker Mike going in and making everything faster (webpack, npm, uglify).

---

<a name="get-idea-stage-0-proposal" href="#get-idea-stage-0-proposal">#</a> **Q:** How to get an idea into a stage 0 proposal? — Norbert

**A:** You basically need to ask for someone at tc39 to be a "champion" for it - they have to take on the work to move the proposal through [the process](https://tc39.github.io/process-document/). For example: [pipeline took a while](https://github.com/tc39/proposal-pipeline-operator/issues/33).

---

<a name="thoughts-chromefirefoxedge-turning-tail-call" href="#thoughts-chromefirefoxedge-turning-tail-call">#</a> **Q:** What are you thoughts on on chrome/firefox/edge turning on tail call optimization? — Macdja38

**A:** https://github.com/kangax/compat-table/issues/819 don't have anything specifically about it, other than that it was an ES6 feature and didn't go through the staging process (also not easily transpilable).

---

<a name="restspread-operators-objects-still-worked" href="#restspread-operators-objects-still-worked">#</a> **Q:** Are rest/spread operators for objects still being worked on in the spec? —

**A:** It's stage 3 and implemented in some browsers already. However it's not stage 4 yet since it needs 2 implementations, can use https://github.com/Babel/Babel-preset-env

---

<a name="lib-author-ship-source-untranspiled" href="#lib-author-ship-source-untranspiled">#</a> **Q:** As a lib author, should I ship source (untranspiled) code? — ZeeCaptein

**A:** It's kind of an open question atm but we still need to figure this out. This was an issue for es6 but it's only going to be more of a problem in the future. Ideally we could use [Babel-preset-env](https://github.com/Babel/Babel-preset-env) to be able to target whatever node/browser version. The baseline will change over time (people ship es5 to npm atm, but some use module/es6/es2015 namespace) so we should come up with a standard.

---

<a name="actually-wanted-ask-babelpresetenv-currently" href="#actually-wanted-ask-babelpresetenv-currently">#</a> **Q:** Actually wanted to ask about Babel-preset-env. Can it be currently used in production? When the version 2 is going out? I don't like its current browserlists integration. All the browsers currently should be specified in the Babelrc config (https://github.com/Babel/Babel-preset-env/issues/149). — Ruslan Gunawardana

**A:** Yeah we should land that :stuck_out_tongue:, been stalled on a lot of things since not sure about implementation, time, etc.
