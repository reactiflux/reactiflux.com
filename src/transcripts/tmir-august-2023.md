[00:00:00] **Carl Vitullo:** Hello, everyone. Thank you for joining us again for This Month in React, where we digest and discuss the latest developments in the ever evolving React and web ecosystem. Right now I've got myself the community manager of sorts for Reactiflux, and Mark Erikson. Mark, you want to introduce yourself?

[00:00:20] **Mark Erikson:** My day job is working at Replay.io where we're building a true time traveling debugger for JavaScript. If you haven't seen it, please check it out. And in my copious amounts of free time, I work on various Redux related projects.

[00:00:33] **Carl Vitullo:** Various projects. Yeah, that's almost understating it. Cool. Yeah, uh, we usually have Sebastian Lorber as well, but um, He's not here yet. So let's go ahead and jump in I guess.

[00:00:44] My first link that I wanted to discuss is, Is Gatsby Dead, uh, which here is a tweet from Sebastian with a screenshot, uh of mid August, Fred Schott. &quot; Notice that there have been zero commits to the Gatsby repo in the last 24 days.&quot; Which, for a thriving open source project, that's not a great statistic.

[00:01:07] I know it was acquired by Netlify earlier this year, this year. Um, and yeah, there's been a lot of discussion around Gatsby as a project, I guess, and where it's headed. yeah, I don't know, Mark, any, any, any thoughts on Gatsby's status?

[00:01:26] **Mark Erikson:** So my first caveat was I never had a chance to use it myself, but just kind of eyeballing bits and pieces, it certainly felt like next has been eating into Gatsby's, uh, market share and mind share over the last year or two, um, both due to complexities around trying to manage.

[00:01:45] Build times and graph QL setups and whatnot with Gatsby as well as, you know, sort of the evolving ecosystem consensus that next is sort of the default way to build React apps for better or for worse. And so I'd certainly gotten the vague sense that Gatsby has been sort of kind of falling out of favor over time.

[00:02:08] And I don't know, like, anytime I see any product get acquired by a bigger company, you just have that sense that, well, it was nice knowing you, uh, like, sooner or later it's dead. And especially when that involves, you know, companies with. VC backing and it feels like Netlify itself has been struggling a bit and on the downswing.

[00:02:32] And so the fact that they bought Gatsby and then don't seem to be doing much with it certainly suggests to me that it's, it's basically dead at this point.

[00:02:42] **Carl Vitullo:** And dead is always, you know, what, what does dead mean is always, uh, an open question, you know, because Gatsby still works. It's an open source, you know, self hosted product for the most part, or project, I guess, for the most part.

[00:02:55] So yeah, I have used Gatsby on a couple of relatively large projects. I used it for my personal website. I used it for a marketing website at a previous company, which actually it ended up getting replaced by Webflow. and I, used it again on a large documentation site, which again has now been replaced by Docusaurus.

[00:03:15] So I think that's, I think that that's kind of the the pattern I've observed is, you know, maybe four years ago, there was a lot of energy around using Gatsby, and there's a lot of excitement for it. But at least, you know, my experience was I tried to use it for some relatively large projects and stakeholders weren't super into it.

[00:03:34] The marketing and content folk didn't really jive with the experience of authoring content. The deployment story was a little bit hairy, uh, just ended up with a lot of funky little breakages every now and again, that were a little bit tricky to debug though. I don't know.

[00:03:52] Yeah, I, I echo your sentiments on being a VC backed company, acquire an open source project. There's always a bit of a squinty eyed skepticism. Like, where's this going?

[00:04:04] **Mark Erikson:** Well, I mean, on top of that, they're, they're both VC backed projects. I mean, Netlify itself, even though we can probably think of it as being a relatively stable company has a whole bunch of VC backing. And Gatsby is an actual company with VC backing different sizes.

[00:04:21] **Carl Vitullo:** You know, I, I did see that there, you know, the official Gatsby account did reply to that tweet thread we're discussing and they said, &quot;fear not Gatsby is vital to many, to a great many of our customers updates to React 18 and Gatsby adapters are the most imminent updates, but we're also busy investing in platform primitives for a stronger Gatsby JS and other frameworks too,&quot; I don't know, they're saying it's not dead, but I, I would agree with you on the, you know, sort of the vibes I've been picking up with.

[00:04:47] Netlify invested really hard in Jamstack and the client, you know, client side applications. And those have kind of gone out of vogue a little bit, but yeah, I guess we'll have to see what happens. I did actually connect with some Gatsby folks after Reactathon a couple of weeks ago, maybe eight weeks ago, um, about maybe doing some community work with them and they said, what I heard back was decisions are being made and we'll see what, what happens there.

[00:05:14] So, I don't know, have to see, have to see how it shakes out, but not looking super great for Gatsby as a, the growth trajectory of Gatsby is not looking super great to me.

[00:05:24] **Mark Erikson:** So, so you mentioned Jamstack, and I actually, I know I saw a couple articles, and I'm trying to bring up some links at the moment, uh, that very recently were talking about how the term Jamstack feels like it's either, it's also either dead, or at least has just sort of become so vague and nebulous it doesn't have a specific meaning.

[00:05:48] Again, this is not my area of expertise, but seeing that discussion and knowing how much Netlify had tried to orient themselves around the term JAMstack, and as well as Gatsby, also suggests that the ecosystem has shifted enough that it You know, kind of points away from Gatsby as a Gatsby still usable.

[00:06:12] Obviously, it's just not where the mindset is at this point.

[00:06:15] **Carl Vitullo:** Definitely. It feels like the zeitgeist of Web and React has expanded beyond what Gatsby offers. Well, and what Jamstack was oriented around. Definitely.

[00:06:27] Cool. Uh, you want to take us on our next link?

## [00:06:30] Things You Forgot or Never Knew Because of React

[00:06:30] **Mark Erikson:** So there's been a whole sub genre of blog articles over the last few years with people going off on rants about act is an awful library.

[00:06:42] The people behind React are trying to sell you something that is, that is misleading. &quot; React is horrible for web performance.&quot; And these articles are usually fairly well written. I don't generally agree with them, but it is a useful set of counterpoints to, you know, kind of our own little bubble that we have.

[00:07:04] Alex Russell, uh, formerly of Google, now Microsoft, has written a number of articles along those lines. Um, a lot of folks who are very involved in the web components community have written articles along those lines. And so there was another article of that type that came out a few weeks ago called Things You Forgot or Never Knew Because of React.

[00:07:26] And it's, it's a long article, um, I, I won't try to cover all the points that it makes, but it's, it's worth reading at a minimum to get kind of like an alternate perspective. On how does React fit in with the rest of the web development ecosystem? What are pain points that other people see looking at react?

[00:07:47] Um, what are some of the lessons that we in the React develop the developer community have internalized that maybe are worth a rethought? And include some things like, um, &quot;hooks as excited as we all were when they came out. Well, now we've now there are things like, and observables and other ways of managing data flow.

[00:08:09] The end. So the post argues that, you know, they're faster and easier to work with. Actually, yeah, okay, this, this is a good, good one. There's a bullet point that says &quot;nobody else is afraid of their frameworks version of useEffect.&quot; Okay, that, that's, that's probably the one point in this article I agree with the most.

[00:08:26] You know, it argues that, you know, two way data binding, which is something that we, we in the React community have always argued against because control components, even though similar, are somehow better. It argues that two way data binding is not a thing that you should be afraid of, and, you know, goes on and lists a whole bunch of other different competing frameworks and suggests that you should look at them - affect my own personal view of React, but it's always good to kind of get that, you know, that alternate viewpoint of what are some of the strengths and weaknesses of tools and make considerations from there.

[00:09:00] **Carl Vitullo:** I think, I think what you said about, you know, people shouldn't be afraid of two way binding. That doesn't really jive with my personal experience of using two way binding, which is that it was scary. It was difficult to debug. I didn't find it a pleasant, you know, experience for authoring code. So, I don't know, somebody else telling me, &quot;oh, don't be afraid of it, it's fine.&quot;

[00:09:19] It's like, well, I'm afraid of it because it was, Very painful for me in the times when I used it professionally for, you know, two years before I used React. Um, so, that did not resonate with me very strongly.

[00:09:34] **Mark Erikson:** I'd have to go back and re read that section of the post, but I do sort of feel like programming paradigms come and go and come again and go again.

[00:09:45] Everything's in a circle and nothing's new. But I do, I feel like there is a little bit of a sense of people forgetting why shifts in paradigms were made in the first place, you know, people getting into React today don't actually know what it was like to use Backbon or Angular 1. And so they don't understand the pain points and why React was such a big deal and so exciting when it first came out because they didn't.

[00:10:15] Feel that pain. Now it's just, we've always had React. It's always quote unquote, &quot;been the default&quot;, and yeah, like back that, for example, an Angular one template could mutate arbitrary data, you know, deeply nested from within a JS nested in an HTML template string, that was really hard to debug and keep track of.

[00:10:38] And so I think, I think that's where a lot of the concern about two way data binding actually came from in the first place and we all sort of internalized and repeated this phrase and now no one remembers why we did, why did we have that concern to start with?

[00:10:53] **Carl Vitullo:** Yeah, I, I definitely agree with that. If that reminds me of a, a line from the post where they talked about React being tech from 2013 designed for 2008 constraints, which I don't a hundred percent agree with.

[00:11:07] But I do think it's, it's not, you know, wildly off base. I think it's, you know, there were, there were a lot of things that React was developed around that were trying to patch over issues with the platform, you know, compatibility and whatever. But, um, Yeah, I don't think that's quite accurate. I pulled out a couple of quotes that were thought provoking for me.

[00:11:30] One of the lines was, um, &quot;React has trained us that packages need to be built specifically for our framework,&quot; which I think I don't know if that's on React. I think that is just kind of the general trend for people. You know, if you're I'm using X framework, I would like to get something that is tailor made for my situation.

[00:11:50] And so I'm going to look for an SDK that was built for this tool in this setting. And I do agree with the idea that it's not good to require that all the tools we use be built, you know, to be specifically cross compatible with each other. You know, it's fine to use a general purpose library in React. It doesn't need to be hooks specific.

[00:12:13] So, yeah, I thought that was at least a decent point.

[00:12:16] **Mark Erikson:** Have we forgotten how many jQuery plugin adapters there were?

[00:12:20] **Carl Vitullo:** Right. There were some, yeah, right. So I, you know, I don't think that is a React problem. I think that it has been very visible in React because React, you know, as this post says is, it's the default.

[00:12:34] Lots of people use it. And so when lots of people use it, then all of the problems that happen when any large group of people do something become very, you know, that becomes the problems of that framework that in that context. So.

[00:12:47] **Mark Erikson:** there, there's an XKCD out there. Uh, Ooh, I think I found it. The cartoonist points out that when you're, like, when your map basically resembles a map of the population, it's not actually telling you anything useful. And so I think there is just a little bit of that with the React community, because React is so big, you sort of have a natural full distribution of...

[00:13:12] People and situations and problems. So to be clear, like I'm, I'm not, I'm not saying that, you know, this, this original, you know, what's wrong with React article is wrong. I think it actually makes a lot of very, very good points. There, there is a little bit of a sense in which some, and some of the complaints are simply because there are so many people using React in so many ways.

[00:13:33] **Carl Vitullo:** Right. You know, people have a lot of problems with React because there are so many people using React and they've really felt out every every possible base and edge case where you can't hit problems. Um, there are a couple of the quotes that I wanted to highlight. I think, uh, &quot;no other modern front end framework as a stubbornly incompatible with the platform as React.&quot;

[00:13:54] I, you know, I don't know if I disagree with that specifically, but I also think it's a little bit. It ignores the fact that no other framework attempts to be as broadly cross compatible as React. Like, you know, there's not Angular Native, there's not Vue Native. So it's, a recurring criticism of React has been incompatibility with, uh, Web Components.

[00:14:14] And, you know, okay, sure, it's not very compatible with Web Components, but... You could argue that that's kind of a web component problem, because if React is, has successfully solved, you know, has been found to be a valuable tool for web, native, you know, mobile, desktop native, you know, all of these different contexts, like maybe it's inability to use web components is more of an indictment of web components ability to solve a problem.

[00:14:41] **Mark Erikson:** yeah, the, the whole React and web components thing is its own very complicated topic from the off the top of my head. My general understanding is number 1, you can render web component tags from a React component, but you lose some of the, some of the back and forth and being able to pass in props correctly.

[00:15:00] Some of that is because there's some kind of a difference between properties and attributes in web components and you can't just pass in plain objects as props the way you would from one React component to another. The React team had not prioritized trying to implement better compatibility because they had a lot of other things they were worrying about.

[00:15:24] They kind of asked for some directions from the community. To say, look, there's like four different ways we could try to handle this, you know, handle passing the data back and forth, which one do Web Components experts think is the right option? And there were arguments back and forth for years without the web component community actually settling on a consensus for the best way to pass stuff in.

[00:15:50] And so where things stand now, as far as I know, is someone actually has implemented quote unquote &quot;proper compatibility&quot; for web components in React. It's in a branch. It's either, it's either not merged or it's merged behind a feature flag and they intend to release it officially whenever React 19 comes out or like it's enough of a shift, they don't want to do it in a minor version.

[00:16:19] So the work has been done. React's versioning strategy is totally messed up at the moment.

[00:16:24] **Carl Vitullo:** (Chuckles) Sure. Right.

[00:16:26] **Mark Erikson:** So it's it's multiple factors. It's React knows how to compose and web components don't. There were questions about how React should compose with web components and people and. People who cared about that stuff couldn't agree on the right way to do it and then work has been done.

[00:16:43] React hasn't been released because focused on server side stuff and not actually shipping major versions right now.

[00:16:52] **Carl Vitullo:** Yeah, right. They've been just maybe not top priority for them right now, which, um, yeah, I, I want to, I want to run through a couple of other quotes here that I thought were good to. I don't know, rebut, discuss.

[00:17:04] &quot;The worry that a front end framework might not scale is as old as jQuery and should be considered just as antiquated in relation to modern web development.&quot; That's talking about, I think, both performance and maintainability in terms of scaling. And, ooh, I do not agree with that. I don't agree that it is an antiquated idea.

[00:17:22] Definitely there are patterns that do or do not scale very well. Um, and I think React tends to be better than average at that. Um, so like with regards to code isolation and refactorability, you know, you can certainly build things that are difficult to maintain and difficult to swap out.

[00:17:41] But I do think React does a decent, in my opinion, better than average job of that compared to other modern frameworks. So, I don't know, just hand waving away like, &quot;you don't need to think about scaling anymore.&quot; I don't agree with that. Sorry, buddy.

[00:17:54] And another one. &quot;Styling is a solved problem in several other frameworks.&quot; I'm grimacing here for those who don't are watching the camera. Um, I don't agree with that. I think, you know, okay, yes, we there has been a lot of churn on styling as something you need to do in the React world. You know, CSS in JS. Plain CSS, less or sass, okay, sure, I think now we've moved away from CSS in JS as a good idea because it has, you know, I think, I feel like the zeitgeist has moved towards, there are too many trade offs, too many negative trade offs on doing CSS in JS.

[00:18:30] But to call it a solved problem, ooh, no, I don't, I disagree with that. Cool. Any other thoughts you want to add there?

[00:18:36] **Mark Erikson:** Not immediately.

[00:18:38] **Carl Vitullo:** I'll, I'll take us on to our next link. Oh, yeah. Orta here in the comments, CSS in JS is good for other platforms. That's extremely true. It is, you know, if, if your platform doesn't support CSS, then you got to find something else for it.

[00:18:50] So that's why it's not a solved problem. I don't, yeah. (Laughs) But yeah, moving on here.

## [00:18:57] React Server Components DevTools

[00:18:57] **Carl Vitullo:** Uh, somebody has published a dev tools for React server components extension. I'm pretty, I think this is pretty cool. This is... maybe a first effort. This is looking, you know, I look at the, uh, the user interface of it and it looks like it breaks down... it looks like it's largely a reverse engineering of the data being streamed in, uh, sort of converting the JSON markup into pseudo HTML so that you can review it as a human a little more easily. And as well as, they call it time travel, but I think it's just kind of a log of data being sent. Looks super useful, looks a lot better than crawling the network tab to me.

[00:19:36] **Mark Erikson:** I am always interested in newer or better developer tools. I think the fact that the React dev tools exist was one of the huge reasons to even consider picking React early on and been done on them over the years is incredible. So it's actually a little surprising to me that the React team itself hadn't prioritized trying to build tool some some form of dev tools integration for server components and that it took someone from the community trying to give it a shot.

[00:20:10] I've said it, I've said it a number of times before, I know the React team had, like, despite all the corporate backing, has a limited number of people and a limited amount of engineering effort, but I really, really would have expected them to have put some serious planning and effort to building out DevTools support for server components.

[00:20:28] For that matter, I know that Facebook has not been putting a lot of engineering hours into improving the existing DevTools lately. I think they had a couple engineers, Brian Vaughn, who used to do a lot of that work, left a year and a half ago and now works with me at Replay. There were one or two people working on the React DevTools code.

[00:20:51] In the React repository, one of those people was laid off recently and so that like, I've seen a couple maintenance level PRS, but I don't think a lot of effort is going into improving the reactive tools right now. And, you know, the good news is like the, the reactive tools are there and they work, but I know Brian had a lot of ideas for improving them down the road and who knows if, or when those will happen.

[00:21:17] So I'm actually genuinely not sure if or when we'll get official React server components integration into the React DevTools.

[00:21:26] **Carl Vitullo:** Sure, yeah, that makes sense. Yeah, as someone who works on DevTools professionally, do you know if, I know Replay is a general purpose DevTool more on the browser than on any specific framework, but do you know if there's any interest in, I don't know, tapping into some of these internals like that on the Replay side?

[00:21:45] **Mark Erikson:** We would love to. Um, you know, semi sales pitch time for the moment. Um, so, as I said earlier, Replay is a time traveling debugger for JavaScript. We we have you record yourself using your website with our modified Firefox or chrome for a couple of minutes, and then you can debug the recording and it's like a DVR, like, You can jump anywhere in time within that recording, see every line of code that executed, and it really simplifies, trying to dig into what happened and understand bugs.

[00:22:19] So, right now, we have Replay integration with the React DevTools. Um, besides just like you can record any website written with anything, like it just records the JavaScript that ran. But if the site that you're recording was built with React, we can capture all the React related data. And I've actually built a lot of this integration myself.

[00:22:44] So we can show the React component tree and in the React DevTools UI at any point in time. And we've done that because number one, we use React ourselves. Replay is a React app, two, React is the biggest framework. So it makes sense to build features for, you know, the largest target audience. We would like to build more integrations with more frameworks over time, like view angular, well, solid, you know, maybe something special for Apollo and GraphQL.

[00:23:19] we, we would love to build these things. We, we just, we're a very small team right now and we have limited engineering time and way too many things to do, but longterm, we would love to have integrations for all the major frameworks out there so that if you make a Replay recording of a website built with one of those frameworks, you'll get.

[00:23:38] You know, extra special visibility into what happened for sure.

[00:23:42] **Carl Vitullo:** Yeah. I mean, developer tools, developer experience. That's a huge force multiplier. All right. You want to take us on our next link?

## [00:23:49] My (Mark's) Experience Modernizing Packages to ESM

[00:23:49] **Mark Erikson:** Yes. So, uh, continuing the self plug here, earlier this month, I wrote a very long blog post entitled my experience, modernizing packages to ESM.

[00:24:01] This was kind of the story of all the shenanigans I've had to go through this year, trying to update the Redux related packages to have proper ES module compatibility, whatever the heck that means. And I'll be honest, like, it has been an extremely painful and frustrating effort and year trying to do that.

[00:24:23] And I've learned a lot. There's a lot of things I wish I hadn't had to learn. And I'm still not done. I am still messing with this stuff, even within the last week, I was trying to work on these things. And normally when I write these blog posts, I try to write them to say, Here's all the stuff I've learned, and here are the correct answers that I've learned.

[00:24:44] And in this case... It's more of a, here's all the places I've banged my head against the wall, trying to figure things out. I still don't know the correct answers, but at least describing the stuff that I've gone through will hopefully benefit other people who are trying to deal with the same things.

[00:25:03] When I, when I write blog posts. I usually have a decent sense of how popular they might get, you know, I'm not trying to optimize for page views, but you know, like my posts on React rendering or Redux versus context. Okay, like, it's very obvious people are going to have a, an interest in those. I really did not expect a lot of people to be interested in a post about how to publish libraries correctly, but it's actually gotten a fair amount of attention.

[00:25:29] And there's been a lot of other folks who are, you know, building libraries who have, you know, replied or messaged or talked to me and said, &quot;Oh, yeah, like, I'm running into the exact same problems myself&quot;, or &quot;I totally sympathize and understand with all the different pain points you've gone through.&quot;

[00:25:46] So, you know, there are a bunch of different factors, um, trying to define the package export setup is really hard. Trying to figure out what file formats and whether you do you pre bundle your JavaScript, do you pre bundle your TypeScript types? What about file extensions? Um, but then another complicating factor has been React server components. You know, it turns out that you can't do things like even, you know, importing and using React hooks in a server components environment.

[00:26:16] Which makes it really hard for libraries like Apollo and RTK Query that can be mixed mode. Like they have a plain JavaScript aspect, but they also have a React Hooks aspect. And normally you would be able to use that on both sides. But now, you know, Next is throwing errors automatically if you even try to import. React hooks, it's doing static analysis.

[00:26:44] And so for us as library maintainers, trying to figure out like, how do we ship packages that are going to work without just exploding yet another environment has been really, really hard.

[00:26:58] **Carl Vitullo:** Yeah, I don't have a lot to add there as someone who doesn't maintain any major libraries, but yeah, my, my, my outsider perspective has been that it was already quite difficult to support, you know, ES modules versus CommonJS versus, you know, like, I don't know if Bower is still something that needs to be actively supported.

[00:27:20] **Mark Erikson:** One of the questions I had was, you know, should I still be shipping UMD modules to support like the, the script tag in a Codepen use case? And I, you know, I, I finally settled on, eh, probably not, but let's ship an additional ES module file that has been pre compiled to production usage. You could do a script tag type equals module and use it as an ESM module in the browser.

[00:27:49] **Carl Vitullo:** Oh, sure. Oh, yeah. Interesting. I guess that was one use case that ES modules has been meant to replace. So, okay. Interesting that that has maybe come to fruition now. Interesting. Pulling a comment from chat. &quot;I still ship UMD more often than ESM for my own use cases. It's a big learning curve.&quot; Definitely big learning curve is definitely maybe an understatement.

[00:28:12] **Mark Erikson:** Yeah, one of my biggest complaints is that there is no single authoritative comprehensive guide to how to correctly publish a library with all the tools and settings and correct file formats and stuff that you should include. So everyone's just sort of figuring this out for themselves and borrowing from everyone else.

[00:28:30] **Carl Vitullo:** Yeah, actually, even, you know, you're saying there's no comprehensive guide on how to do it. There's not, I don't even think there's a comprehensive guide on what environments are out there, you know? Like, what do you even need to think about supporting? Yeah, that's interesting.

[00:28:43] **Mark Erikson:** I mean, that was, that was part of the point of my post.

[00:28:48] Was, like, literally, like, here's all the stuff that I'm having to consider.

[00:28:52] **Carl Vitullo:** Yeah, Orta with the good chat comments here. &quot;Most recent strategy has been use Deno.&quot; I've, that is not the first time I've heard use Deno as a good strategy for publishing a library. I've heard that it has made local development, or rather it's made the transition from local development to usable package published to the, uh, to the npm just easier to do.

[00:29:16] Um, and it's not something I've tried, but yeah, that's been an interesting thought that's been lodged in the back of my brain just using a different environment that makes it easier to do the right thing, even in other environments. That's interesting.

## [00:29:31] Remix DevTools

[00:29:31] **Carl Vitullo:** Well, I'll, I'll move us on here. I think, yeah, one more dev tools update the.

[00:29:37] Remix DevTools has a new release this month, uh, 2. 0. Um, I, I have not used this yet, uh, but I do, I, I have a couple of Remix projects, Remix based projects. So, um, I'll have to poke around here and see what kind of stuff it adds.

[00:29:54] Looks like it gives you better inspectability of like your routes and your pages. Um, so yeah, the. I think debugging got more complicated with the, you know, server client, I don't know, seem in between there. So the value of platforms or the value of framework specific developer tools has gone up a lot more with that. You know, how do you have something that's aware of the server as well as the client and can tell you more information about what all is going on there?

[00:30:24] So yeah, remix developer tools 2. 0 something to check out.

[00:30:28] **Mark Erikson:** Yeah, Jessica Sac hs actually recently sent me a link to a demo video for the, the, the Nuxt framework and like it, you know, it's a Vue based equivalent to Next, roughly, and it apparently has some kind of a dev tools plug in that looks pretty similar to what I'm seeing in the, you know, the, the gift demos for this, this remix one, you know, listing all the routes and the options.

[00:30:54] So that, yeah, that looks extremely useful.

[00:30:56] **Carl Vitullo:** Yeah. Even just surfacing how it's being all parsed out. You know, now that. I both remix the next, add that layer of file and folder names having influence on the behavior of the code you write in them. Uh, it's just, it's, it's reasonably indirect and it's a little, it, I have found it confusing at times, you know, if you have to debug, like, why isn't this route showing up?

[00:31:19] Like, the only way to do so is futzing around with the file names, which. It's not great. It's not great inspectability. So better developer tools, at least saying this is how the framework is understanding what you've given it. That seems like a big help. Uh, cool.

[00:31:35] **Mark Erikson:** Uh, so there was a really good post actually technically back in July, but I think got listed more recently called everything I wish I knew before moving 50, 000 lines of code to React server components.

[00:31:45] It had a really nice, some really nice diagrams of, you know, kind of like the shift from client server behavior to React server component behavior, how server components, you know, actually kind of manage the tree, a lot of different code snippets, and information on, like, how would you actually start using server components in a code base.

[00:32:06] You know, one of my, one of my biggest complaints about the server components rollout has been that, you know, there, there isn't a migration story, there isn't really good advice on how to start adopting these. And frankly, this is about the best information I've seen on, on that topic. So I, I thought this was an excellent, excellent post. Uh, it also had a link to a talk from the Reactathon conference that was done a couple of months ago, which discusses, when should you even consider using server components?

[00:32:36] And that, that talk from Jeff Escalante was actually just a little, just a little on the intentionally skeptical side. Like it points out that server components are very useful for some kinds of apps. But not so much for others. And so it's not, you know, server components are not a silver bullet that you should just slap on everything, but instead actually kind of consider if it makes sense for your use case. So this was a very, very helpful resource, I think.

[00:33:05] **Carl Vitullo:** I haven't read this in depth, it's very long. I think they said it was like 5500 words. It's rivaling one of your posts, Mark ( Mark laughs), but it, you know, just scanning through it, it reminds me of some of the resources on, you know, architecture and sort of summarizing behavior, and like the perspective that went into designing server components.

[00:33:25] It reminds me of some of the write ups on, uh, or that like the next JS team has put up about that. Um, but I think a lot of those have been more from the maintainer side of things of like, here's why we did it, here's why we made this the way it is. It is. And this seems much more anchored from a pragmatic point of view of like, we don't care about how it works specifically, but here's how we used it, and here's the pitfalls we found.

[00:33:52] Uh, so yeah, definitely agreed that this looks like a really phenomenal resource. Uh, and referencing something we talked about earlier, uh, one of the headers is CSS in JS is a non starter. Uh, so yeah, CSS in JS doesn't work in server components. So One reason why the React ecosystem has been moving away from that.

[00:34:14] But yeah, I mean, if CSS in JS is the only way to get native styles working. Oops, there's a tension, can only use it, can only use CSS in JS in native environments and cannot use it at all in server environments. So that was like fragmentation to me.

[00:34:32] **Mark Erikson:** A lot of that.

[00:34:32] **Carl Vitullo:** Yeah, not ideal, but yeah, definitely a great read.

[00:34:35] Definitely a great resource for anyone looking at how to get server components involved in their app, especially if it's not a greenfield project, and it's trying to bring it in as an optimization to bring it in as an improvement to an existing application.

## [00:34:50] Expo Release Week

[00:34:50] **Carl Vitullo:** All right, I guess, uh, let me move us on to our next link.

[00:34:53] Yeah, I don't have one single link here, but Expo did a release week shipping a whole bunch of new features. Um, let me, I've got like eight links here and I don't know how to quickly dump them all, but there's Expo preview, a fully customizable builds on EAS build.

[00:35:12] Um, I'm not really familiar enough with Expo. I haven't used it on a, you know, a production app, so I can't speak too much to all of these different acronyms and features, but fully customizable builds, I could certainly imagine situations where you might need to have finer grain control over how your application gets built. So that seems valuable.

[00:35:33] There's a proof of concept for Expo CLI DevTools plugins. So continuing with the DevTools theme, feature preview of single sign on, feature preview of EAS update. So I guess that's the build for, you know, a fresh version of an app versus releasing an update to an existing app. Use updates API for Expo updates, which I it sounds related to that, updating.

[00:36:00] There was an interesting one that caught my eye was Expo SQLite integration. They They reference convergent replicated sqlite, which is, that's really interesting. So it talks about having multiple different sqlite databases that have independent writes and then get merged together. And they had a little demo video showing multiple to do apps that are being kept in sync.

[00:36:28] Um, I, I have a soft spot in my heart for SQLite, um, and a soft spot in my heart for CRDTs, um, which I'm blanking on the, what that stands for, but replicated data types. Um, conflict free data types. Conflict free replicated data types. That's it. Uh, yeah. So I have a soft spot in my heart for those, local first, merged data kinds of tools.

[00:36:57] So it's interesting to, it'll be interesting. I think that could be a large unlock for people building mobile apps.

[00:37:05] **Mark Erikson:** Yeah. I mean, just, just skimming down the list. It looks like they're putting a lot of effort into the, the build and deploy story for X for Expo apps.

[00:37:13] **Carl Vitullo:** Yeah. And I know that there's been, you know, over the years, there's been some various churn on the React Native story for updates or for builds and updates, I guess, you know, for a long time, one of the advantages of React Native was you could update the JavaScript and change the behavior of an app without doing a full app store release, which I think is still true to an extent, but like policies have shifted on that.

[00:37:37] And it's like, Uh, it's I know that Apple doesn't like that generally because they want to have firm control over what apps do. So if you're able to change what an app does outside of their review process there, they look at you suspiciously for that. So, uh, but yeah, definitely, you know, my, my recollection is that four or five years ago, Expo was really great for what it could do, but it was a very limiting sandbox.

[00:38:02] If you try, if you needed capabilities that it didn't offer out of the box. You're kind of screwed. You had, uh, it was a little bit like Create React App in that where what it did was really great, but it didn't do everything. And if you needed more, you had to eject and then you're on your own. Um, but that is not how I understand the story of or, you know, the experience of using expo today.

[00:38:24] From what I hear, if you're building React Native right now, you start with expo because it just does makes it so much easier for you. So cool to see so much investment going into it still.

[00:38:33] Got another link for us?

[00:38:35] **Mark Erikson:** Uh, that's all the, all the major ones I had to talk about. I think at this point, we're sort of onto the lightning things, although I could, I could talk about some of the lightning things in more depth if we wanted.

[00:38:45] **Carl Vitullo:** Yeah, we got 15 minutes. Let's do a, let's do a, maybe I'm trying to think of a slower lightning round, but let's do a pseudo lightning round here.

## [00:38:53] React Prod Source Maps (!!)

[00:38:53] **Mark Erikson:** So, um, this next one is, And on these next two are things that I both have a very personal stake in. So, over the weekend, I published a new package called ReactProdSourceMaps.

[00:39:09] And this is going to take a little bit of background and explanation. Um, so, JavaScript libraries Are normally published to NPM code that has been backwards compiled to, you know, yes, five syntax for compatibility with IE 11, although that's finally starting to change and more libraries are shipping modern JavaScript.

[00:39:30] And then when you build your application with next or Vite or expo or create React app or whatever. All your application code and your nice original js or tsx files all get mangled together, mashed into a bundle, minified, and shipped to production. And when we want to debug our applications, we, like, we need a way to reverse map from the final mangled minified code back to the original source files that you had on disk.

[00:40:03] And so bundlers and build tools use a technology called source maps, which literally contains the exact original source files that you had on your computer when it was built and defines how they got transformed into the final minified lines of code. So for example, uh, App bundle dot JS line one column 700, 000 through 700, 010 to do list item dot JS line 23 you declared your to do list item component.

[00:40:39] And so that's how Browse and browser dev tools and other tools can show you what looks like the original files when you try to debug either a development or production application. And the problem is. Specifically, that the React libraries have never shipped with source maps. For their production build artifacts.

[00:41:02] So if you build a React app in dev mode, React has a development build where the bundle is still readable. It's got comments and white space and original variable names. And if an error gets thrown, you can see a stack trace, and you can at least read the function names inside of React. One of the nice things about React has always been that most of the time you don't have to worry about how it works inside.

[00:41:28] We can treat React as a black box. The important thing is understanding that, you know, it's, it's the mental model. If I set state, it re renders. If my UI is wrong... Look at the data, look at the rendering logic, trace the data back up the tree to where it came from. So most of the time, you don't have to debug inside of React.

[00:41:49] But there are times when you do. Okay, maybe that's more applicable to library maintainers or people like myself and Brian that are working on developer tools at Replay. The problem is when you try to debug a production build of a React app. React has only shipped the minified, the prebuilt minified bundle.

[00:42:09] They don't have source maps for it. And it's hard enough to understand what's going on inside of React. When you can actually read the original source code, it is impossible to understand it when all you have are single character variable names and everything's been mashed together. So, uh, about four months ago.

[00:42:27] I took about a week, and I figured out how to modify React's build pipeline so that it will actually generate source maps whenever you, whenever they build React. And that PR has been sitting there, and Dan Abramov and I were going back and forth on reviews for it, and as far as I'm concerned, it's there, and it works, and it should just be merged. Dan had one small reservation, and I never quite convinced him that... It's fine. It works. Merge it. So it's still sitting there. And hopefully it will get merged at some point in the near future.

[00:43:02] But the next problem is that even once it gets merged, the React team hasn't released a stable version of React since 18.2 came out a year and a half ago. Which is kind of frustrating. They are putting out canary builds, and Next is using those canary builds, but we haven't had a new stable release in a year and a half. So if and when a, that PR is merged and a new stable release comes out, then, you know, React 18.3 would have source maps.

[00:43:31] But there's nothing for React 18.2 or 1 or 17 or 16. What I did over the weekend was I literally checked out React 18.2's tag from the repository and I backported my build pipeline changes. I made sure that I could build the exact byte for byte identical copy of React 18.2 production. And then I copy pasted my build pipeline changes to generate source maps over to that.

[00:44:04] And it works! And the next problem is that, okay, so let's say that, you know, I have a Vite app and I'm using React 18.2. Well, I've installed React off of NPM, didn't include any source maps. I can download the React 18.2 source map I generated. But that doesn't help the app bundle source map that I just made.

[00:44:31] I figured out how to use a couple different source mapping libraries, and I've written a CLI package that will... You give it the file path to the source map for an app bundle, and it looks to find a copy of React dom listed in the in the files, and it replaces The source map of the minified file with the source map of the original bundle before it got minified.

[00:45:00] So that as far as the source map bundle is concerned, it has the original looking React source code available to debug. And I was able to prove that I could like serve up that modified V app and I could stick a break point inside the place where React renders function components and it worked and it paused there and I could inspect everything that was in scope with the release of this package, uh, I have not actually done it yet, but in theory.

[00:45:30] Anybody who has a React app right now that uses React 18.2, 18. 1, or 17. 0. 2 could add a post build step that uses my package, correct React source map in their app bundle. And the other thing that I would like to do with this... So I've been talking about, you know, my day job at Replay ought to be able to take those same source maps and automatically insert them into our backend so that if you made a recording of a React app and didn't have the original source maps, we could automatically insert them anyway, as you debug the recording, like, I'm sure we can do it.

[00:46:09] It's just a matter of convincing the backend team that we should.

[00:46:12] **Carl Vitullo:** Yeah, I, I'm thinking of, I'm thinking of like Sentry and things too. All these other

[00:46:17] **Mark Erikson:** Yeah. The, yeah, the, the, the Sentry folks have been following what I've been doing and they are very excited about this.

[00:46:22] **Carl Vitullo:** Yeah, no doubt.

[00:46:24] **Mark Erikson:** So I, I realize this is sort of a niche thing and not everyone is going to get immediate benefit from it, but like, I truly think this is something that a good bunch of the React community will benefit from because I was able to do the work to generate these just once.

[00:46:41] **Carl Vitullo:** Wow. Okay. So I knew that you had done this. I knew you had, you know, published a thing, but I didn't realize that you were, it had done, it had taken so much, I don't know, effort, like, wow, going in and modifying source maps for... taking the apps, source maps, and then replacing the right parts of them, so the unrelated source maps still work, but you also get all the React ones.

[00:47:06] Like what? That's actually crazy. That sounds if I got, okay. If I got to that point, I would say, wow, no, I'm not doing that. That sounds like a pain in the butt.

[00:47:15] **Mark Erikson:** Like the thing is the actual logic is like 20 lines of code because there is a library that I found that will do the source map swapping. Like the majority of the logic is just import this library. The existing application source map, and then it gives you a callback for every file that it sees listed. And so I'm literally just saying, is this file's name React dom. production. min. js? And if so, figure out what version of React it is, load the right sourcemap and replace it.

[00:47:49] **Carl Vitullo:** Good job, holy crap, that's wild. um, I think that's all I have to say on that. That sounds incredible. That sounds super valuable. And especially if, if Replay and Sentry can both take advantage of that and just do it on behalf of everyone. That sounds incredible. If everyone using either of those products can get source maps for free without. Or source maps for React for free without doing anything without changing configuration or anything.

[00:48:15] Wow. Okay, cool. Nice. Big project.

[00:48:19] **Mark Erikson:** So that's what I did my last two or three days.

[00:48:21] **Carl Vitullo:** (laughs) That's that's a productive two or three days. Very nice. Cool. Okay. Well, I don't know how lightning that round was, but.

[00:48:29] **Mark Erikson:** Not very, but hey, it worked.

[00:48:31] **Carl Vitullo:** It worked. It was interesting. It was good.

## [00:48:33] Official React+Typescript documentation

[00:48:33] **Carl Vitullo:** Cool. Uh, I'll move us on though. Um, Yeah, React. Dev now has official TypeScript documentation. Thank you, Orta, for bringing this home. We discussed this last month when it was still a draft PR, but it has been merged, it has landed, and we now have official documentation on how to use TypeScript with React. Absolutely incredible. We're not going to comment on how long React and TypeScript have been out and available and the delay between... It being widely used and it being documented, but we have it. It's great. I'm glad we have it now.

[00:49:11] **Mark Erikson:** It looks amazing. Orta, you did a fantastic job. Thank you.

[00:49:15] **Carl Vitullo:** Uh, Mark, you got another lightning round? Well, you said you have a hard stop in three minutes. So if we want to blitz through some of these.

## [00:49:23] Redux Toolkit 2.0 beta

[00:49:23] **Mark Erikson:** Yep. So really fast, uh, mentioned this before, but Redux Toolkit 2. 0 is still in beta. We would really like people to try it out. And then just this last week, I published React Redux version 9 alpha, which has the same kind of, you know, ES module packaging changes. That, you know, I've been trying to apply to all our different libraries. Um, so again, we would really, really like people to try these out.

[00:49:48] Tell us what breaks that shouldn't be breaking and give us feedback on things like the, you know, the new features and Redux toolkit 2. 0, pry them out. Tell us what you like or don't like so we can, you know, make any changes before they go final.

[00:50:03] **Carl Vitullo:** All right, now's your chance. Get that feedback in. Uh, you want to run through your last link there?

## [00:50:09] The Underlying Mechanisms of React's Concurrent Mode

[00:50:09] **Mark Erikson:** Yep. Uh, and then the last item I have is, there was a really, really good article called The Underlying Mechanisms of React's Concurrent Mode. And again, this is not a thing that most people need to necessarily worry about because it's inside of React. I always appreciate articles that explain how stuff is built, what are the technical constraints.

[00:50:29] And so this was a really good look at how React has implemented the ability to split up renders into multiple pieces and delay parts of it.

[00:50:37] **Carl Vitullo:** Very nice. Um, I, I just have one lightning round link myself. Um, Sebastian and I were judges for React jam, which is a, it was a hackathon put on by a startup called rune that.

[00:50:51] Is a I don't even know how to describe it, but it's a it's an app that you can play other games in. Uh, it's like a multiplayer games app. It's a little bit like discord activities if you've used any of those, uh, they did a hackathon building games with React. Um, so. Yeah. Sebastian and I judged it. We played a bunch of games.

[00:51:13] They were pretty fun. And yeah, check it out if you like games and React and stuff built games built with JavaScript.

[00:51:20] **Mark Erikson:** And on that note, I do unfortunately have to bail out for another meeting, but it's been a good discussion. And yeah, I think there's a lot of good stuff happening in the ecosystem.

[00:51:29] **Carl Vitullo:** Yeah. Yeah. Always, always many new things.

[00:51:32] Cool. Uh, Mark, thanks for joining me, uh, everyone in the audience. Thanks for listening along.
