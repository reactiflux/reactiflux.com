[00:00:00] **Carl Vitullo:** Thanks everyone for joining us for November's This Month in React, where we recap and digest recent developments in the ever evolving React and web ecosystem. I'm Carl, I'm a staff product developer and freelance community leader at Reactiflux. Where you are now, the Discord for React professionals. Uh, Mark, want to introduce 

[00:00:19] **Mark Erikson:** yourself?

[00:00:20] I'm Mark Erikson. Uh, in my day job, I work at Replay. io, where we're building a true time traveling debugger for JavaScript apps. And outside of Replay, I spend far too much time working on Redux. 

[00:00:31] **Carl Vitullo:** And answering every question about it on every platform. 


## [00:00:35] Conference news

[00:00:35] **Carl Vitullo:** We're going to try out something new, uh, speaking of conferences in the prep chat. Folks interested in the news may be interested in attending conferences too!

[00:00:45] We have React Day Berlin coming up on December 8th, with a hybrid online streaming follow up on the 12th. There's also a couple of early bird tickets that were just announced. There's Future Frontend, uh, which is going to be in oh, in Finland. I believe it's being organized by React Finland. That's going to be on June 13th and 14th of 2024. Uh, which competes with Render Atlanta, which is also going to be June 12th through 14th of 2024, and just announced early bird ticket sales as well.

[00:01:19] There's also a little bit of survey ecosystem news. The wonderful people behind the State of JS ecosystem survey are doing a State of React survey as well. That just closed about two weeks ago. No final word yet on when the results of that will be available, but I've heard that it's going to be early in 2024 and might have Sacha Greif on here to talk about the results when they're ready. So yeah, keep an eye out for that. 

[00:01:46] And also one final note, the State of JS survey has opened for 2023. So definitely check that out, you know, contribute, make it. Give it better data. 


## [00:01:58] TS 5.3

[00:01:58] **Carl Vitullo:** I'll start us off. First news event that we're going to be talking about here, uh, TypeScript 5. 3 is out. Out of beta, out of release candidate.

[00:02:08] Looks like it's not a ton of major new changes here. 

[00:02:13] They're adding support for a TC39 proposal, import attributes, that give an inline syntax for module import statements to give more information about what that module is. As far as I know, the only currently supported additional attributes are in support of JSON modules.

[00:02:34] Instead of JSON modules being sort of like an informal standard that just works, um, this is now formalizing that and giving I'm giving away for more information to be provided about how to import additional modules. So hopefully we'll see this being used for things like image imports, SVGs, fonts, things like that.

[00:02:54] Um, which currently that's all been just like through Webpack or whatever bundler and whatever plugin, just totally ad hoc based on whatever bundler you're using. So seeing a proposal come in to standardize that is I'm here for it. That's cool. 

[00:03:09] **Mark Erikson:** Yeah, I've seen that the syntax exists. I haven't had it, like, actually, like, most things these days, I haven't had a chance to, like, look at it or play with it yet.

[00:03:17] Um, like, I've seen the comment that, you know, like, one of the great things about, you know, Webpack and Vite and whatever is that it lets us, you know, mix together, you know, like, I need to import this CSS file, I need to import this, you know, this image file. And then all the processing happens during build time, but it's also true that you're basically almost inventing your own little language, especially if you start adding more plugins to deal with certain build types.

[00:03:46] And, like, actually, it's a little bit like the React vs. Web component debate. You know, are you supposed to be strictly, strictly using the platform or are you okay with using tools that aren't strictly the platform, build in the specific pieces that you need, but you're, you're, you're maybe kind of conceptually locked in and maybe that's okay.

[00:04:10] So in this case, I think what we're sort of seeing is that app developers for years have wanted to be able to do things where they are quote importing non JavaScript or TypeScript assets. Into their code for one, for one reason or another, and build tools have supported that for many, many years. And so now we're sort of seeing the little, you know, the trickle down effect where some concept of that is now trickling into the platform.

[00:04:40] Even if it's not, like, building in functionality to do something with it. But at least now there's a, there's a common syntax for saying, here's a file, treat this specially. 

[00:04:53] **Carl Vitullo:** Yeah, like you were saying, it's, it's not all of the long tail of modules now, but I, I appreciate that it's a low level primitive that will allow for that sort of, that, that later work to be done in a consistent manner. So that's cool. I'm, I'm excited to see that. 

[00:05:09] But another bit that caught my eyes, uh, being valuable is improved type narrowing. If you do a switch with a true case and then, you know, have subcases for different, uh, conditionals, it, the behavior around type inference around there, uh, should be better on, on 5. 3. 

[00:05:27] **Mark Erikson:** That's actually one of the weirder little bits of TypeScript, or actually of JavaScript, really. So, you know, normally with a switch statement, the idea is you have a single variable that could have many different possible values.

[00:05:40] And the switch case is, if the value is A, do this. If the value is B, do that. And the weird thing is, in JavaScript, you've always been able to say like, switch true, but then the case statements can have actual comparisons that don't even have to do with a single variable. It's kind of like another way of chaining if else statements.

[00:06:07] And so, this has been legal JavaScript syntax for a long time, and TypeScript is now actually being a little smarter and saying, well, actually, if you're going to do that, we can apply some type level inference to what's going on inside. 

[00:06:20] **Carl Vitullo:** I don't know if this is a widely held opinion, but I've generally viewed that as, that behavior of doing switch true, as like, a little bit of a convenient hack.

[00:06:29] I don't know where switch cases originated from, but like, I've certainly seen them all the way back to like, C, right? That is very much not the semantics, going back that far in their, you know, legacy. But, you know, that's how people have been using them in JavaScript for a decade.

[00:06:45] So, acknowledging that and just making it work better, like, that's awesome. 

[00:06:50] **Mark Erikson:** Uh, one other item that I don't, I don't know if it's even listed in these release notes, but Andrew Branch from the TypeScript team has been working on a new set of documentation For the TypeScript website, about how TypeScript understands the concept of module files.

[00:07:10] So, ESM files, CommonJS files, um, all the different variations in terms of module resolution. And he finally merged that into the actual TypeScript docs a few weeks ago. And there is a ton of information here. I've not even had a chance to read through all of it. But part of this is really long and complex because of how complex the JavaScript and TypeScript ecosystem is.

[00:07:40] And you know, how many different tools and concepts are interacting. But it's basically an explanation of this is how TypeScript views. The world. And it gives a lot of very good explanations of the theory and choosing a lot of the compiler options and trying to deal with, you know, both using packages and publishing packages.

[00:08:02] And as someone who has spent a disturbing part of this year banging my head against the wall of publishing packages, uh, this is, having this information available is very valuable. 

[00:08:11] **Carl Vitullo:** Before we move on, I'm just going to read down the list of all the what's new from the blog post. Import attributes, which we discussed.

[00:08:19] Stable support for resolution mode and import types, which I think is what you were just talking about. 

[00:08:24] Resolution mode support in all module types, so related. 

[00:08:27] Switch true narrowing, what we just discussed. 

[00:08:30] Narrowing on comparison to booleans, uh, which I imagine probably came out of the switch true casing, but also another great, you know, we can narrow types on if statements. That's awesome. 

[00:08:41] Instance of narrowing through symbol has is instance.

[00:08:45] Checks for super property access on instance fields. 

[00:08:48] Interactive inlay hints for types. I don't even know what that means. 

[00:08:51] Looks like a couple of other optimizations. Consolidation between TSS server library and typescript.js. 

[00:08:58] **Mark Erikson:** That one actually has a little bit of an impact. So, most people haven't noticed this, but if you installed, like, TypeScript version, I don't know, 4. 6, 4. 7, the unpacked file on, er, folder on disk was like 50 or 60 megabytes. And nobody thinks about it, but it's because TypeScript is a really complicated tool, but also they basically shipped, like, three different copies of the same core functionality in different bundles inside node modules.

[00:09:29] The TypeScript package contents shrank in like 5. 0 because they altered how they build and bundle the TypeScript tools itself. And here they've done further work to say, you know what, actually two of these bundles are basically almost identical, let's extract the common piece so that it's only built once.

[00:09:50] And then the two bundle files that get used for different purposes just reuse that common functionality. And so the actual installed size of TypeScript has shrunk again down to like, uh, I don't know, like 25, 30 megs? So I mean, it's something. Smaller node modules is always nice. Cool. 

[00:10:12] **Carl Vitullo:** About 20 percent smaller package size on disk after you install TypeScript. Cool, that's nice. Probably going to save a lot of disk space in aggregate across everyone. 

[00:10:21] Alright, Mark, you want to take us on to our next link? 


## [00:10:24] Kent and Lee, dueling positivity

[00:10:24] **Mark Erikson:** So it's always amusing to me when we have kind of like dueling articles come out. Someone writes, someone writes article A, someone else looks at it and writes article B.

[00:10:35] So in this case, we had an article from Kent C. Dodds, you know, always very prolific, you know, author and teacher. Who wrote a very long post entitled, Why I Won't Use Next. JS. And he laid out a bunch of reasons here, and there's like a bunch of sort of spin off thoughts that happened. 

[00:10:54] So the first thing is, you know, up front, Kent worked on, as part of the Remix team, for, you know, like, 8 to 10 months. He teaches Remix in his courses. He is a big vocal fan of Remix as a tool. And so, a lot of people ask him, both because he's a teacher and because he likes Remix, &quot;well, why won't you use Next. JS? Or like, why do you prefer Remix over Next?&quot; And so, like any good blogger, he said, okay, I've been asked this question dozens of times, I'm going to go ahead and write an article.

[00:11:31] And he laid out a whole bunch of reasons, ranging from, you know, Remix is more of a focus on the web platform, it's not part of Vercel, he has some uneasiness with the way Next and the React team are sort of co mingled at this point, he feels it's more stable and does a better job with, you know, managing the pace of changes and it's less complex, You know, frankly, I haven't used Remix, but I actually agree and sympathize with most of the points he's making.

[00:12:03] I've felt some of that unease with some of the pace of change with Next and the way some of the release processes get managed. Now, a lot of people have complained that Kent has a huge conflict of interest, and I see the comment down there in the chat.

[00:12:19] I'm gonna side with Kent here. Yeah, he has biases and opinions. This is a post where he is stating his biases and opinions. Like, he's allowed to say, here's why I like this thing. And, you know, people have asked him, what are your thoughts? And so he's documenting that. 

[00:12:37] So, that post was really good. And, you know, got a lot of attention. And a week or two later, Leerob, who is the, you know, the lead developer relations guy for Next, Went out and wrote a post on why he is using Next. And I thought this one was also very well written. Uh, a lot of it is a direct response to what Kent wrote. 

[00:13:00] And I actually liked that both of them were very careful up front to say, like, Here are some opinions, I like this tool, I have preferences, and we even went out of his way to like tweet picture up front of like, &quot;look, here's me and Kent, smiling, we get along, we don't hate each other,&quot; but, you know, kind of giving some counter thoughts on, you know, look, Next, Next does use the platform, I like the app router, and, you know, some of the other, you know, features that are built into Next.

[00:13:30] What I appreciated as a neutral, independent third party is that, these are, these are well written posts, they are basically positive, I mean, they, they express a few, like, pain points and concerns, but they're written in a positive sort of a way, not like a tear everybody else down sort of way. 

[00:13:52] I, I just feel like the entire ecosystem would benefit from more articles and discussions that are organized and pitched with that mindset. So both of those were really interesting. A lot of really good feed for thought there. 

[00:14:05] **Carl Vitullo:** Yeah, I would agree. And both of these come out the day that we recorded October's This Month in React. So I was like, ah, dang it. If we waited a day, we could have discussed these immediately after.

[00:14:15] So here we are a month later, but yeah, I definitely agree. I'm a big fan of a positive framing of things. I guess, you know, ultimately Kent's post was, why I won't, so that is kind of a negative framing. But the actual content of it is very much, you know, like his, the first heading of it is, &quot;whatever you use is probably fine.&quot;

[00:14:36] I can enthusiastically support anything that Just respects that there are different trade offs, and different people find different trade offs appealing. Only two of the largest people in developer relations for two of the largest frameworks in the React ecosystem having a nice, reasoned discussion with each other in the form of public letters.

[00:14:56] **Mark Erikson:** And speaking of Next. 


## [00:14:58] Next 14 and Next Conf 

[00:14:58] **Carl Vitullo:** Next14! They announced this at the Next conference, which I'm going to link to a playlist of all the talks there as well. Major highlights here, uh, looks like TurboPack is offering big performance improvements for developer experience locally. They're claiming 53 percent faster local server startup and 94 percent faster updates, so rebuilds.

[00:15:27] Faster to start, much, much, much faster to rebuild. Sounds cool. As far as I know, the major new feature being rolled out with Next 14 is server actions, which is a React Canary feature that is now being exposed as a first class function in Next. Sounds cool. We discussed that at greater length in the last episode, I think.

[00:15:49] Partial re rendering, fast initial static response and streaming dynamic content for, I guess, you know, partial pages. Sounds cool. And it looks like they've put out some new educational content as well, teaching about how to use the app router and authentication and databases and stuff. 

[00:16:06] I still have not been able to find a great use case for myself to explore Next, you know, the more advanced Next features like the App Router, uh, in my own time. I'm not currently employed as a full time software engineer, so I don't currently maintain a large scale application, which is, I think, the only way to get real experience with using these, you know, the experience of working on a full team, making decisions in the context of maintaining them for a period of years.

[00:16:37] Um, so, I'm not going to feel comfortable passing firm judgment on AppRouter, I think, until I've been able to build a real application. So, I don't have a lot to say on the specific details yet. 

[00:16:52] **Mark Erikson:** Yeah, uh, I'm, I'm sort of in the same boat, I mean my, my day job at Replay is technically a Next app, but it might as well be just a, you know, a pure single page application, conceptually. Basically don't make any real use of routing at all. 

[00:17:07] Anecdotally, you know, just looking at discussions on Twitter and Reddit, I, I see a very mixed bag. I, I see people who love the app router and some of the functionality that's built in there. I've seen a lot of people complain that in between the app router and like Vercel's multiple caching layers that there's a lot of pain points they're dealing with.

[00:17:28] So I see anecdotes, I don't have a lot of, I don't have any personal experience that I can offer in that respect. 

[00:17:36] **Carl Vitullo:** Yeah, and there have been wildly popular framework in the past that had all sorts of blog posts and discussion and everyone raving about how great it was to use. And then a couple years later, everyone started using it for larger scale projects and found all the pain points. And I noticed all of that positivity going away. So, you know, In the interest of not repeating that pattern, I'm just not comfortable passing judgment too quickly here. 

[00:18:02] Want to take us on? Maybe a good segue from Next into Frameworkless. 


## [00:18:07] RSCs without a framework

[00:18:07] **Mark Erikson:** So, one of the big issues with server components so far, has, well, a number of issues, but one of the issues has been that the only real way to use them has been with Next.

[00:18:20] And, you know, there's the whole separate discussions over Next sort of getting first access to React features, you know, being sort of a concern, but also, you know, give credit to Vercel because they're literally investing a lot of money and time into building out the core pieces that are in React itself and then making use of those features in Next specifically.

[00:18:45] So, there's a number of different tools and frameworks that are experimenting with integrating server components right now. I know that the RedwoodJS folks have said that they're all in on server components, and I've seen some of the technical discussions where they're working on it. I've seen, uh, Daishi Kato, who created Jotai and works on Zustend, um, has his own little experimental server components based framework.

[00:19:13] So, there are a small but interested number of people who have been playing around with trying to build things with server components, but it always, like, needs some higher level of build tool integration to work, and that's by design. So, there was a really, really good post from a guy named, I believe, uh, Tim Tim Pillard.

[00:19:38] And it's called, React Server Components Without a Framework. And in this post, he kind of breaks down, like, what are the pieces behind server components. Where do server components fit into, like, the build and deploy and usage sequence? And he then kind of dives into, like, what are the pieces inside of React that you would actually need to build your own server components integration?

[00:20:05] And this was a really, really detailed article. And, is everyone going, like, going to need to, like, dive through this and understand all the inner workings to use server components? No, because you would normally use them just because, you know, Next, or Redwood, or Remix already has them integrated, and you sort of follow, like, the framework version of the docs, for the most part.

[00:20:30] But, one of the problems with server components has just been that the low level workings have not really been documented so far. So, everyone's either having to look at the very bare bones examples in the React repo, or, in most cases, actually looking at the internals of Next, and trying to figure out, &quot;well, how much of this is something we need to copy and paste, and how much of this implementation is very specific to the way Next works.&quot;

[00:20:58] So, like, everyone's looking at Next's internals and trying to figure out what they're supposed to do. So, having an article that sort of breaks some of this down without any other frameworks involved is actually pretty helpful to understand what's going on inside. 

[00:21:13] **Carl Vitullo:** Most, most definitely. I was pretty surprised at, having never even, I've barely even tried to use server components through Next. So I've had even less exposure to using server components without Next or any other framework. And I was a little surprised at some of the details here, like he mentioned having to use the react-server-dom-webpack webpack plugin, which has no documentation at all for it. So like, ooh, yikes, okay, I've wrangled some complex webpack configs before, and they're hard enough when it is documented.

[00:21:49] So going, just the setting of transcending the like client server boundary through the bundler without documentation. It's like, oh yeah, okay, we're still in a rough spot here. 

[00:22:02] **Mark Erikson:** There's a whole lot of dragons there. 

[00:22:03] **Carl Vitullo:** There be dragons for sure. So, just, you know, I tried to read through the code to get a general sense of what it would look like.

[00:22:12] I am a big fan of going from first principles, you know, even if I'm going to stick at the level of, you know, using a framework, I like to generally have a sense of what's going on inside. And, honestly, even reading this code, it was a little bit tricky to unfurl even, you know, what are just internal abstractions that were set up for this little toy example versus what's strictly required.

[00:22:36] So, yeah, it's definitely, I think, highlighted how rough of a state the experience of using server components is right now. Huge, huge props to Tim for putting this together. I think this is a, I think this will be, you know, regarded as a canonical contribution to the development of server components.

[00:22:56] You know, just want to applaud Tim for that.


## [00:22:59] Remix 2.2

[00:22:59] **Carl Vitullo:** Talked about Next, it's time for Remix. Uh, Remix 2. 2 came out, and, it's interesting. I, so it looks like they are moving away from being a from owning a compiler and bundler step of it and moving towards leaning on Vite. So they, you know, they are claiming, you know, they are now supporting Vite as a bundler internally.

[00:23:28] Uh, and one of the, one of the things they Called out in this announcement that caught my eye is they, they're saying remix is no longer a compiler remix itself is just a vite plugin. That seems remarkable to me to totally change out the internals of how a framework is operating in that way, transparently and in a way that allows people to opt into it.

[00:23:52] in advance of the breaking changes being shipped. I think we talked last, it was either last episode or the one before, about the rollout process for new features that Remix is using and I think they're doing it really well. I think a lot of other open source projects could take a, you know, take a page from their book on how to roll out new features.

[00:24:11] **Mark Erikson:** Yeah, I think I'd seen some discussion from Ryan and Michael over the last couple years that they'd kept their compiler workings internal and abstracted, sort of, I guess, like, in spirit, similar to the way React App tried to hide everything behind a wall, because they were worried about exposing some of the specific knobs to end users, And, you know, that causing trouble for, for future upgrades, you know, like everything, it has trade offs, you know, maybe it made some people's uses of Remix a little bit harder because they couldn't tweak those knobs, but it, it seems like it's also made this particular upgrade process a little easier because now they've, they've swapped the underlying layer entirely and actually sort of been able to get out of the compiler business completely.

[00:24:57] **Carl Vitullo:** Very cool. Very interesting. It seems like they've made a lot of really good, uh. Choices to set them up for speed of iteration, which I think is a great metric to optimize for. Seeing a comment in the chat, Vite is under scrutiny for using ES modules in development, not convinced this is the best course of action.

[00:25:15] Yeah, I've also heard some, just in the last day or two, I've seen some blowback. Vite as like, I don't know, the bundle less movement is, I think Next just put out some stuff saying that like, oh, the bundle less Uh, movement has failed, and they talked about how they really tried to make it work with Vite and just couldn't.

[00:25:34] So, I don't know, curious, you know, we just did a, discussed the comparison of Next and Remix and curious that, uh, Next said, like, ugh, this can't work, we can't make it work. And Remix just Did it. 

[00:25:45] **Mark Erikson:** I'm a little, I'm a little bit curious about what the actual meaning of bundleless in that specific discussion is.

[00:25:54] I know that in development mode, Vite tries to use ES modules kind of like straight up without, without fully bundling them, but they do actually get bundled for production. And so, like, a lot of the discussion, maybe four or five years ago, was, you know, with, with HTTP2 streaming, and, and like, you know, browsers supporting ES modules natively, we might not have to bundle, you can just have your individual dot You know, JS or mjs files on disk and they can all, like, they can all just get fed out automatically and eventually folks concluded that, you know, based on the number of files that have to be downloaded and dependency, you know, chains and whatnot, that, well, actually, yeah, bundling is still a good idea, but that's really talking about production usages, and so I'm a little confused why I think it was Guillermo Rauch in this case was saying, like, bundleless didn't work and pointing the finger at Vite when Vite does it in dev.

[00:26:58] So I'm not following all that discussion. 

[00:27:01] **Carl Vitullo:** Thanks for bringing that in. I had forgotten some of that context, but now that you mention it, I know that they have talked over the last six weeks or so about, I know that Next has talked about working to improve the developer experience, and so I wonder if maybe that's the lens they're looking at this from, is they were, they came at it with a goal of making the developer experience better.

[00:27:21] And we're not able to make the, you know, unbundled files as necessary, actually improve the experience because, right, because of, you know, exactly the same reason that nobody has ever been able to make HTTP a usable experience, uh, just there's constant waterfalls and you request one file and that request more files, which request more and more and more and more.

[00:27:46] I think that's probably where that came from. 

[00:27:48] **Mark Erikson:** That would make sense. 

[00:27:49] **Carl Vitullo:** I think it's super cool that Remix has been able to make this work. 


## [00:27:52] Shopify Hydrogen Remix v2 support

[00:27:52] **Carl Vitullo:** Sort of sub Remix news, Shopify acquired the Remix business, so they've been sponsoring development and supporting the team, and it looks like they just shipped the port for Remix 2 in their Hydrogen e commerce headless framework.

[00:28:09] Cool to see that they are genuinely investing in this, not just sponsoring. 

[00:28:14] **Mark Erikson:** Not just acquire, hiring the team. 

[00:28:16] **Carl Vitullo:** Right, exactly. They didn't just buy the talent. They are genuinely investing in the open source project and then improving their own more narrowly scoped open source development on top of that.

[00:28:30] So, super cool. It's, I know people have talked about You know, oh, venture capital in open source is, you know, anathema, it's terrible, don't do it. But this looks like a really cool positive outcome for that setting. Okay, Remix, the economics for running that as a venture invested business are maybe, I don't know how you get the growth multiples there.

[00:28:55] Raising funding to pay yourselves as you develop and then selling to a business that does see a business use case in operating that. This seems like a pretty positive outcome for that, so just, yeah, I appreciate that. Seems cool. 

[00:29:09] **Mark Erikson:** One other little snarky side observation along the way. It's ironic that the React docs emphasize so strongly that you should be using a framework to start any new React project.

[00:29:21] And of course, you know, the top choices are Next, Remix, Gatsby, (RIP) and Expo. And yet, Remix itself, and like, Vite is relegated to the, &quot;well, if you want to start an SPA, I guess you can, we can't stop you.&quot; And yet, Remix itself is now actually based on Vite, which was relegated to that subheader. 

[00:29:47] **Carl Vitullo:** Yeah, low level tools.

[00:29:48] Cool to see them get used though. 


## [00:29:51] RTK 2.0 (and lots of others) 

[00:29:51] **Mark Erikson:** Okay, so next item, some personal interest here, but it's also actual news, which technically hasn't happened yet, but is about to. We are hopefully about to hit the button on Redux Toolkit 2. 0. Like, so help me, by Sunday, I hope. This is an effort that has been going on since literally the start of this year.

[00:30:13] When this happens, we're going to simultaneously ship major versions of Redux Toolkit 2. 0, Redux Core 5. 0, Reselect 5. 0, React Redux 9. 0, and, drumroll please, Redux Thunk 3. 0. And all of these are going to have modernized packaging with, hopefully, proper ESM CommonJS compatibility. Modernized JavaScript build output, so we're using the latest, greatest JavaScript syntax and no longer targeting IE11, thankfully.

[00:30:49] There's some performance improvements. Redux Toolkit now uses Immer 10, which has some noticeable updates in updates, or improvements in update speed. We've cleaned up a bunch of deprecated options and added some new features. A migration guide page already up on the website. There may be a couple last Tweaks that need to go in there.

[00:31:12] Our hope is that for a lot of apps, it might just be bump the versions and you're done, but we've tried to call out all the things that qualify as either really breaking changes or like this could sort of be considered a breaking change. 

[00:31:29] The one last thing that is sort of holding up the release at the moment is I am about to pull the trigger on changing some of the default behavior for the Reselect library. Reselect has been mostly unchanged ever since its release in terms of how the internals work. It's sort of doing one reference equality comparison for every argument, basically. And if any of those have changed, then it recalculates. But you can swap out the comparison function to do, like, shallow equality, or whatever.

[00:32:04] CreateSelector has always had a default cache size of 1. If you, like, alternate the arguments back and forth, it'll never memoize, because it's like, &quot;This doesn't look like the last thing you gave me. Recalculate. This doesn't look like the last thing you gave me. Recalculate.&quot; And so you kind of have to go through some shenanigans to handle cases where, like, you want to use the same selector in a list item component, but you're passing in, like, the ID of the item as an argument or something. 

[00:32:36] And I had updated reselect a couple years ago to be able to have a larger cache size, but you had to specifically pass in that option. So earlier this year I actually copy pasted this super secret caching function implementation from the React code, and it uses weak maps to form like a tree of cache data.

[00:33:01] And the net effect is it kind of basically becomes like an infinite cache size with no further work needed. 

[00:33:09] **Carl Vitullo:** Oh, interesting.

[00:33:10] **Mark Erikson:** And so what I've been debating is, is it worth switching Reselect's default behavior over to use that? As the default preferred approach. And I've, I've been waffling and debating the pros and cons and the trade offs.

[00:33:25] And I think I'm actually about to do it. One observation I'll make is that technically an infinite cache size is also synonymous with a memory leak, like, you know, sort of looks the same way. Weighing a couple of concerns around that. But I think the improvement in the default behavior is going to be nice enough that it's worth making that switch.

[00:33:45] And we'll sort of document, like, here's the trade offs with the new built in approach. So, you know, that's the kind of stuff that's been on my mind trying to finalize this over the last couple of weeks. 

[00:33:57] I'm actually literally hoping to make that change to the code tonight, document it, update the release notes, do some, do some hopefully last minute real world ish testing, and then hopefully ship this by the weekend, I hope, because I really don't want to spend December like, while I'm traveling, having this stuff on my mind.

[00:34:16] **Carl Vitullo:** I remember that being, like, kind of the number one gotcha with, you know, Idiomatic Redux, you get a lot of really great performance characteristics if you get all the selectors just right, but it became kind of a puzzle of how to set it up just right to get there. You know, like, if you, like you said, if you end up having a list of things where you want to select items out of it, then you needed to, like, you needed to instantiate the selector in just this right certain way, so it was actually memoizing, so you actually got the performance benefits. So yeah, very cool. That makes a lot of sense for changing defaults to make it give you good performance in a wider range of circumstances. 

[00:34:54] **Mark Erikson:** Right, so I mean, it ultimately boils down to, I think the, it'll be a small but meaningful improvement to developer experience.

[00:35:02] Uh, similarly, we've actually added a couple development mode checks to reselect. Sort of similar in spirit to like, you know, how strict mode works with React components. To watch for things like, you know, your input functions are returning a new reference every time, so this selector never actually memoizes. Or, the output function just returns the value it was given with no transformation, which, either of those means you're holding this wrong. Stop it. 

[00:35:34] **Carl Vitullo:** Cool, I'll move us on. I guess that's the end of our full discussion links, so we're into the lightning round now. 


## [00:35:40] CSS improvements

[00:35:40] **Carl Vitullo:** Couldn't find a better source for this than just a newsletter that I was reading, so I'm posting that.

[00:35:45] But some good CSS improvements coming out, like the hasSelector, which is something I've needed on a number of occasions and just never found a way to do it. So I'm excited to see that like browser support is currently there to where you can just use this. You can select nodes in the DOM that contain something else.

[00:36:05] Previously, selectors were sort of upward looking, like you could, you could select, you could narrow in on children under specific parents, but you couldn't say For all parents of this type of thing, style it this way. So it sort of reverses the direction of control for CSS, or gives you a mechanism to do so, which just unlocks a whole other category of things that you can do with CSS in a way that I think is super powerful.

[00:36:31] There's also CSS nesting, which is Virtually the only reason I still use Sass anymore, just being able to write rules instead of a series of long lines just like wrapping, you know, nesting them under each other for related selectors. And I don't know that this is one that I would use myself specifically, but I think it's pretty cool.

[00:36:53] a color function for more advanced control over what color space you're using, which not something I need very often in developing web products, but if you're doing something a little bit more like creative coding, artistry, or trying to correctly render colors in a specific setting, like if you know that this monitor can render this color space accurately, use that rather than sRGB.

[00:37:19] Um, as somebody who has done a lot of photography and gained an awareness of color spaces through trying to do prints and things like that. I appreciate that this exists, that this is now a function that can be used in CSS. 


## [00:37:31] Why you want React Query

[00:37:31] **Mark Erikson:** So, Dominic Dorfmeister, aka TKDodo, the maintainer of ReactQuery and Uh, tanstackquery put up a really good post talking about why you want ReactQuery.

[00:37:43] And I believe this was kind of inspired by a, you know, kind of a tweet that was going around showing like, &quot;look, here's a fetch call and a useEffect. It's like 10 lines of code. How many bugs are there?&quot; And the answer is a lot. And some of it's, some of it's bugs, some of it's, well, here's a bunch of edge cases you didn't take into account, like this, this doesn't have error handling, this doesn't deal with, you know, double fetching in strict mode, this doesn't deal with handling, you know, resetting data or error separately.

[00:38:14] And so, Dominic kind of walks through the process of, like, if we were to make this 10 line example properly robust, Here's all the added complexity that the example skipped over. And dealing with that complexity is not a thing you want to write for yourself. And this is actually why it's worth using a library, like ReactQuery, Apollo, SWR, RTKQuery, to manage that for you.

[00:38:44] Because all that really complex logic has already been encapsulated inside the library, you would have had to write this yourself anyway. You wouldn't have thought about it, just use the library. It deals with it for you, it will handle it correctly. But very worth reading to get a sense of here's all the edge cases involved. 


## [00:39:04] Looking back on Decorators 

[00:39:04] **Carl Vitullo:** Cool. I just liked this post. It's not necessarily newsworthy, it's not something new, but 10 years of JavaScript decorators. Decorators have been around in various states for 10 years. It's been 2013, yeah, that I first started hearing about them. You know, Angular went pretty hard on them. There was MobX went pretty hard on them.

[00:39:26] The actual standardized proposal for how to add them to JavaScript just languished for So, so, so many years. Uh, so I just appreciated this, you know, retrospective on the evolution that decorators have gone through over the, over the years and all the reasoning why it got stalled out and thought it was a good read on a relatively common but very confusing part of the 

[00:39:51] **Mark Erikson:** JavaScript language.

[00:39:52] I would expect that most people who have used decorators have never thought about what's actually going on under the hood or the fact that the definition and the implementation has changed multiple times. 

[00:40:03] **Carl Vitullo:** Yeah, MobX or Angular, were not exactly shouting about how this is an unstable feature and it has not landed yet.

[00:40:09] Cool, wanna take us on? 


## [00:40:10] React sourcemaps generally available

[00:40:10] **Mark Erikson:** Okay, so, another sort of personal note, this is one I've been harping on literally for months. So, way back in like, March, I filed a pull request to modify React's build system to actually generate source maps for production build artifacts. And the PR kind of sat there for a number of months.

[00:40:32] Uh, Dan briefly tried to review it, and we had gotten some back and forth about, you know, some of the nuances of behavior. I am very happy to report that as of a couple weeks ago, this has finally been merged, and it is actually shipping in React builds right now. And you can verify this if you were to go to, for example, unpkg, and look at React, uh, React or ReactDOM.

[00:40:57] And if you were to select one of the experimental or the canary builds, uh, experimentals are generated pretty much daily, canaries kind of like every couple weeks or so, you would see that the source map files actually exist in published builds of React today. Now, of course, This brings up the question, when will the next stable build of React come out?

[00:41:19] Who knows? I'm hearing rumors that they're working on, towards an actual React 19. This doesn't exist in a stable build yet, unfortunately. But when the next stable build comes out, it should actually have source maps. I'm very excited about this. It's not necessarily going to benefit everybody all the time, but it's a missing piece that fills in and anyone who's trying to peek inside React in production will hopefully have a better experience. 


## [00:41:47] Formatter performance bounty

[00:41:47] **Carl Vitullo:** There was a bounty put out for improving performance of code formatting. Uh, the Prettier organization put out a 10, 000 bounty that was then doubled by, I think by Guillermo Rauch. 

[00:42:02] **Mark Erikson:** I think so, yeah. 

[00:42:04] **Carl Vitullo:** I believe the specific criteria for the bounty was a Rust based formatter that passed like 95 percent of the test cases that Prettier has.

[00:42:14] And. Yeah, it got claimed. The Biome organization, which is a fork of Rome after that project collapsed, came together and less than three weeks after the bounty was posted, they claimed it. So it was 10, 000 from Prettier, 10, 000 from Guillermo Rauch, and then I think another like 2, 500 or like 2, 250 from an unnamed anonymous donor as well.

[00:42:38] So yeah, cool. 

[00:42:39] **Mark Erikson:** There was something in the Wasm ecosystem, I think. 

[00:42:42] **Carl Vitullo:** Okay, something like that, yeah. Pretty interesting. I like the thought of open source bounties. I think that's an interesting monetization strategy. It's better than nothing, better than just putting a request out. So I appreciate that some companies were, or some people who had funding were willing to put their money where their mouth was on moving the, advancing the state of the ecosystem.

[00:43:05] **Mark Erikson:** Yeah, there's a couple nice little extra points here. One is that Fabio Spampinato, I believe is his name, got nerd sniped into looking at the actual prettier source code and trying to find ways to speed it up. And sort of similar to how Marvin Hagemeister has been doing this whole series of blog posts, I'm like, I looked inside this JavaScript tool and it's doing stupidly inefficient things inside. And I made it run faster. 

[00:43:29] Uh, Fabio has been able to find a number of inefficiencies and PerfBottlenecks inside Prettier, and has some proof of concepts of making Prettier itself significantly faster, either through caching or improving cases where it was doing, like, file system lookups. 

[00:43:47] I think it even maybe inspired a PR to Node itself, where the fs. stat call was eagerly creating date objects for file times. And it turn like it turns out, you can just lazily instantiate the date object. Like it already knows the numeric times, but you can just l load the date object when it's actually accessed off the stat object. So like there's sort of a ripple effect of performance improvements going on here.

[00:44:21] And then the other one was. Uh, Christopher Chedeaux, um, handle vjeux put up a comment on Hacker News describing why he decided to go the bounty route. And it had to do with, like, the best way to improve the ecosystem as a whole is to have multiple competing tools that are sort of egging each other on.

[00:44:43] And so he wanted to get someone else working on it and then see that kind of ripple effect in let's, let's make all these tools better. And he feels that the money was very, very well spent in that way. 

[00:44:55] **Carl Vitullo:** Cool. Want to take us on? 


## [00:44:56] Mark's self plug, Replay.io webinar

[00:44:56] **Mark Erikson:** Yep, uh, so we're, we're almost out of time, uh, one more kind of self pluggish kind of a thing.

[00:45:01] So as I said, my, my day job is working for Replay. io, which is a time traveling debugger for JavaScript. Uh, we've been doing a lot of work this year around not just debugging applications, but building features to help people debug flaky test suites. And so, uh, tomorrow, I'm actually gonna be holding a livestream slash webinar over in the Replay Discord.

[00:45:26] Uh, my teammate, Philip Crick, has done a lot of work over the years with Cypress and test stuff. And so we're gonna have a discussion tomorrow talking about, like, just debugging. This is actually one of my own personal hobby horses. Like, nobody teaches people how to debug. Conceptually, so we're going to spend some time talking about like, how do you think about the process of debugging?

[00:45:54] And then we'll look at, you know, replay the tool specifically and talk about some of the features and how you use it to actually dig into an application. So I'm excited. Should be fun. 

[00:46:04] **Carl Vitullo:** Very nice. Always here for a, for a live event, a live chat. Yeah, Phillip reached out to me to talk through what that experience is like. So I hope it goes well.

[00:46:11] Cool. Okay. That was the last of our lightning round links. Uh, we had a couple of Bonus items, they're a little bit broader, uh, like for instance, 

[00:46:20] Angular has a, they're on version 17 and shipped a new doc site, so, cool, good for them, looks great.

[00:46:25] Docusaurus 3. 0 was released, which, now that Sebastien isn't here, I feel, I feel like we need to keep bringing in some of the, uh, Docusaurus.

[00:46:34] **Mark Erikson:** We owe it to him. 

[00:46:35] **Carl Vitullo:** We owe it to him, yeah, right, right, right, he's been such a great part of this show. 

[00:46:38] **Mark Erikson:** The biggest couple updates there are, it now uses React 18 and they've updated the MDX parsing library, so it uses the latest and greatest MDX syntax for intermingling, uh, markdown and react components.

[00:46:54] **Carl Vitullo:** I got two more.

[00:46:55] Google has officially released a set of react components for using the Google Maps API. Uh, so I, I think the. Projects like this have existed, but this is the first time one from Google, maintained by Google, has been released.

[00:47:11] So that's cool. And my last one, this is just fun and silly, but somebody made a Windows 95 inspired UI toolkit for React. So, you know, I love, love a nostalgic style. 

[00:47:23] **Mark Erikson:** Yeah, I've, I've seen a bunch of, like, you know, Win95, 98, 2000 XP, like, CSS packages and, and online demos. As, as someone who grew up with that era, it's, it's always very interesting to see. 

[00:47:38] **Carl Vitullo:** It is now safe to turn off your computer.

[00:47:41] All right, that's all we got. Thank you so much for joining us.

[00:47:45] We'll be back next month on the last Wednesday here in the live stage of Reactiflux or back in your podcast feed as soon as we can, hopefully by the end of the month. If you see anything newsworthy in the meantime, definitely let us know in the Tech News and Reads channel. We do use that for sourcing new links.

[00:48:02] And yeah, you can discuss them with the community in the meantime. All right, thanks so much, everyone.

