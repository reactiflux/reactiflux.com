---
title: Matt Pocock
date: 2023-01-10
time: 7am PT / 3PM GMT
location: Stage Channel on Reactiflux
description: "Matt Pocock is an educator building content and workshops to help developers become TypeScript wizards."
people: "[Matt Pocock](https://github.com/mattpocockuk)"
---

# Matt Pocock and MapleLeaf

[00:00:00]

**Carl Vitullo:** I'm here today with Matt Pockock and Maple Leaf. Matt is a TypeScript educator working independently. And he has spent time at both Vercel and Stately, which are two companies that I've been keeping an eye on and ones that I think are doing really exciting work. Matt, could you tell us a little bit about yourself?

**Matt Pocock:** Sure. So I had a slightly mad 2022. I started the year at Stately working on the XState core team working on state machines and state charts. I changed from being a full-time developer into being a developer advocate and developer relations person. And I moved to Vercel and I was part of the team that launched TurboPack to the world.

So I was working on TurboRepo, so I'm interested in in bundlers, in kind of in state machines, state charts. But my real love this year is TypeScript. So I've been working on a TypeScript course called Total TypeScript. And if you've been following me on Twitter, you know that I've been putting out videos, putting out education materials, doing YouTube stuff. And a lot of that is really my first love.

My background [00:01:00] is as a teacher and singing teacher and voice coach. And so I'm kind of falling back in love with teaching again, but this time teaching people to code instead of teaching people to speak. So yeah, that's kind of _me_, and in 2023, I'm focusing on I, we launched the first module of the course in December and this year I'm planning on releasing more modules, kind of like really, really building out some quality free materials that's like a free beginner's course on the site. And also building out this paid course too.

**Carl Vitullo:** Very nice. It's so cool that you used to do singing and voice coaching. What a transition from that into software developer and developer advocacy. I really think of a lot of the work you've been doing on state machines and you're at the cutting edge of web development with things like Stately and Vercel and TurboPack. That's really amazing. I'd love to talk a little bit more about how you made that transition. But before we do that MapleLeaf, can you say a little bit about your background?

**MapleLeaf:** Yeah, for sure. I've been programming for a total of about 10 or so more [00:02:00] years mostly in the WebDev space. Reacting, just been hanging out in communities, just talking to people helping people out. Also just dabbling in whatever else catches my interest. Started out with an interest in game development and eventually just slid into a web when when I looked at it and realized like how ubiquitous the platform is and the tooling and like the feedback loops that a lot of stuff like that. And yeah, that's pretty much me.

**Carl Vitullo:** Yeah, makes sense. I think that's a pretty familiar story. And so you and Matt know each other a little bit, but this is the first time you're meeting in person, as it were, sharing a live space.

**Matt Pocock:** Yep. It is a privilege. Lovely to meet you personally.

**MapleLeaf:** Yeah. It's awesome to meet you too, Matt. And always good to see you Carl too.

**Carl Vitullo:** So what, what circles have you guys run in? Where have you had some overlap?

**Matt Pocock:** TypeScript, kind of subculture really on Twitter, you know, TypeScript Twitter and you know

**MapleLeaf:** A cult.

**Matt Pocock:** Yeah, it's a cult, but we know we're, we're welcoming [00:03:00] and you know, we like new people, new faces, and. TypeScript seems to just be everywhere on Twitch at the moment as well. So like Theo on Twitch and Primeagen on Twitch are constantly talking about TypeScript or mentioning TypeScript. It seems to be one of the hot topics to talk about alongside Bun, alongside, you know a bunch of other stuff, so, and solid as well. So yeah, I guess that's the circles we've been moving in.

**MapleLeaf:** Yeah. Pretty much same.

**Carl Vitullo:** Nice. Yeah, the web development, TypeScript, live community, the people really staying on top of everything. That's awesome. So Matt, you said that you were working on the XState Core team at the start of 2022. How'd you get involved with XState and how long had you been participating in Open Source before you joined the company?

**Matt Pocock:** Yeah, a lot of a lot of my open source experience was really with XState, and XState at the time kind of didn't have a very good TypeScript experience. A lot of it was, you know, the library was originally built in vanilla JavaScript, then ported it over to TypeScript and it's pretty hard to [00:04:00] do… what XState does is it does finite state machines and state charts, and those are really very config heavy ways to build logic in your application. So you provide like this big wall of essentially JSON to a function, and then that gives you a load of methods, gives you kind of like a, an event handler lets you monitor the state of your application.

It's really, really cool and like really an amazing solution for for complicated state and complicated applications. But the TypeScript experience was kind of, really bad because it's really hard to get inference when you are just dealing with an enormous object, basically. TypeScript lives off function calls and we needed a different api or a different solution if we were gonna solve it.

So I was working at a company at the time and we were using XState a lot and I wanted to be more type safe, let's say. And so I built something called XState CodeGen which basically used like an AST parser to look at the file in your [00:05:00] application where a state machine was, and then give that more powerful types.

So this was a really fun pet project that I've worked on for quite a while. And it meant I was coming into contact with really complicated TypeScript, like trying to work out how to build things, how to interact with the types that were in XState already. And so I knew the core code base really, really well and I started chatting to David Khourshid who's the main guy behind XState. You know, if we say state machines three times David will appear. And so yeah, and I kind of got involved through that and started doing more contributions to to prs, to reviewing prs, reviewing the documentation. And then when David started Stately, which is a company built around XState, building visual tooling for state machines and state charts.

When that happened, he basically said, do you wanna join? And I said, hell yeah, sounds great. And so I was with them for about a year and then I joined Vercel after that.

**Carl Vitullo:** Heck yeah. That's really cool. Wait, so you said that [00:06:00] you had written a tool that worked on the AST of the state machine code to generate types. Is that right?

**Matt Pocock:** Yes.

**Carl Vitullo:** Interesting. So it's, it's not doing type inference at a normal level that an average TypeScript developer would be familiar. You were actually parsing it out and then doing real code generation to create those types, because that's just how hard it was to work with types in XState at the time.

**Matt Pocock:** Yep, codegen at that level, gives you this kind of Thanos level power, you know, where you can basically snap your fingers and get whatever type inference you want. TypeScript itself has limits, but when you combine it with something like an AST parser then you can get this really cool type inference.

When I was at Stately, actually, we shipped this as part of a VSCode extension. So now if you have XState then you can have the VSCode extension and it will automatically provide you really beautiful types along with your your work. And so, yeah, it was cool to see that properly shipped and out there in the world.

**Carl Vitullo:** Oh, interesting. So instead of [00:07:00] fully changing the api, from the config blob to something maybe more function based, which TypeScript would be more ready to understand without a lot of extra massaging, by shipping this VSCode tool, you were able to keep the API for XState the same, but still provide a great types experience.

**Matt Pocock:** Exactly, because stability in the API was really, really key. So we didn't wanna move off version four, basically, XState is still on version four. I'm not involved with the core team anymore. So having that sense that the API was stable, that XState was stable, but also wanting to fix all of these type based problems with the api, it felt like type gen was the only answer.

**Carl Vitullo:** Sure. Wow, that's very cool. I've been aware of based tools for a number of years now. I've never probably gotten over the hurdle of learning how to use them. I'm aware of all of the crazy powerful things you can do, but you know, it's just, it seems like every time I try and actually get in there… I know the React team recommended an AST tool… Code [00:08:00] mods?

**Matt Pocock:** Yeah, that's right.

**Carl Vitullo:** Yeah.

**Matt Pocock:** Yeah, I'm interested in that right now actually I'm working on a VSCode extension. What it does is it basically sits in your VSCode and when it encounters a piece of TypeScript syntax that you haven't seen before, like you as a developer, it gives a little blue squiggly line underneath and you can hover over and see an explanation for that piece of code.

And all of that, that's based off an AST parser. So if it sees a TypeScript conditional type, it will just sort of log it and, and show you it. So I'm, I'm really interested in, in all of that work because when you get your head around it and you can understand it and you understand astexplorer.net and you understand all of the tools, you understand Babel which is what I'm using, it's amazing what you can get done. It really is.

**MapleLeaf:** I guess the hard part is getting to that understanding , because like when I dug into those tools myself, there's not really a lot of guidance. There's like basic tutorials in some places, but most of it you kinda had to like figure out on [00:09:00] your own to look at examples. But I guess that's programming

**Matt Pocock:** Yeah, it's also like VSCode extension development is like that as well. Like, because every time you Google something to do with, you know, VSCode extension, it will give you a VSCode extension that solves the problem. You know, so there's, there's no way to Google for it really. You basically have to live off a whole lot of examples and that's a hard problem.

That's a hard problem for a bunch of different stuff. And AST parsing is one of those, definitely.

**Carl Vitullo:** Yeah. Makes sense. That's very cool though. Having that other level of… insight into, or, you know, really access into the code, it feels like it just opens so many more doors for what you can possibly do. You know, really kind of meta programming, just programming at a different level, at a different scale even.

**Matt Pocock:** Yep, absolutely. Although if you can avoid it, it's always better to avoid it. For instance, I worked on a project before where we used GraphQL and GraphQL codegen, and that's a kind of similar kettle of fish really, because with GraphQL, you've got this [00:10:00] DSL, you've got domain specific language, which contains all of the types that you're ever gonna need from your backend.

So if you take those GraphQL files, you can turn them via CLI into TypeScript. You are having to run like a sidecar development process, alongside your dev server to monitor those, to change those over, and that always provides a slightly worse experience than if you were to just handle the inference by TypeScript.

So something like TRPC, for instance, doesn't need a dev script, it's just uses a really nice API to get inference back and forth between your front end and your back end. So that's something that I've learned is that if you can avoid it, then avoiding the codegen step is the way to go.

**MapleLeaf:** Mm-hmm.

**Carl Vitullo:** Sure that makes sense. Yeah. And that's giving me flashbacks to a coworker of mine talking about Go Lang pre generics and a, a number of years ago where he would talk about like, oh, I need some standard data structure. Let me write code generations so that I [00:11:00] can use it with the data types I'm using.

**Matt Pocock:** Hmm

**Carl Vitullo:** So yeah, avoid code generation unless there's no other alternative. Definitely seems like a pretty reasonable takeaway there.

**Matt Pocock:** mm-hmm. for sure.

**Carl Vitullo:** I'd love to hear more. So how long were you a singer and vocal coach?

**Matt Pocock:** I was a so singing teacher and vocal coach. I did that for six years. I got like a master's in it. I have like this whole other YouTube channel where I'm teaching people accents and stuff. So I'm like the only person on YouTube that has to do SEO against myself. I'm competing with the name Matt Pocock against a previous version of me, which is kind of Terminator.

I did that for a long time and it felt like a superpower when it came to development too, because I felt like I could explain things a lot better to non-technical people. I felt like I could get my ideas across better than other people could. It's felt like an amazing advantage and I think meant that I went from junior to mid to senior to lead a lot faster than than I expected to [00:12:00] actually, because it felt like I was being put in front of clients more. It felt like I was given responsibility more often because I could explain what I was doing, and obviously my communication skills were better, or, you know were good.

**Carl Vitullo:** Sure. Yeah. We have talked about career and advancement a number of times on previous office hours we've done, and I think that that's a point that we hit on pretty frequently is that moving from junior to senior, one of the largest ways you can do so is by having strong communication skills.

So it's, it's, it's cool to hear you echo that.

**Matt Pocock:** Yeah, for sure. It really paid me back faster than I was expecting it to, because I figured I'd change from voice coaching to developer and sure, okay, we'll see. I'll take a pay cut and I'll see what happens. And it felt like I just joined with the right language at the right time, like, JavaScript still is exploding, TypeScript still is exploding.

I'm kind of interested to see what you think about this idea. I think that TypeScript itself is becoming so ubiquitous that it makes sense to learn it [00:13:00] alongside JavaScript as a new developer coming into the space. I'm wondering what you both think of that idea, whether you should learn, you should obviously learn JavaScripts kind of to a really good level, but should you be learning the TypeScript syntax alongside it, or should you be using the JavaScript syntax?

What do you think?

**MapleLeaf:** Personally I think both paths are valid, but, and because of that, if I were to recommend one path, if the ever maybe my answer would change depending on the person, but I think it is definitely perfectly fine to learn TypeScript alongside JavaScript or even just TypeScript by itself. Especially if you're coming from a typed language.

**Carl Vitullo:** Yeah, for sure. When I think about how I learned, the first language I learned or was taught was C++, which is, you know, it doesn't get a lot more type safe than that. And I do think that learning such a rigorous language early on and being forced by a very picky compiler to [00:14:00] think in terms of types in advance, and needing to think about how they all fit together and how they get changed from one to another or et cetera.

All, all the things that you don't need to think about when you're doing JavaScript, cuz it will just either do it for you or just keep trucking along when you screw it up. I think being forced to think about all those before my code would even run was helpful in some ways. Obviously it can be a huge slow down when you're actually just trying to ship code, but I think when you're learning, it forces you to slow down and think about what will this code do rather than… even in my professional career, I find myself sometimes falling into a short cycle of not actually thinking about what is this code about to do. Just kind of like, make a change, save, see what it does. Oh, it didn't work. Make a change, save, see what it does. Oh, it didn't work.

So I think in that regard, forcing a little bit of slowdown and giving you an automated checker. Yeah, I think that, I think that could be a really powerful [00:15:00] thing to have when you're learning a new language.

So I, yeah, I think I agree with you. I think that learning TypeScript at the same time as learning JavaScript is a really good thing for new learners to do.

**Matt Pocock:** The issue is material, right? Because the material out there is all gonna be JavaScript focused. Like there's not that many people who are building like TypeScript as your first language material. And I think that's a shame, you know, like I might start thinking about doing that maybe sometime this year.

The IDE support is just gonna be so much better. And often what I find myself doing when I develop with TypeScript is I tend to spend a lot more time in my IDE and less time looking at the browser console. When it was purely JavaScripts I would basically make a change tab over, make a change tab over make change tab over, just like you're saying.

But when I'm working in TypeScript, it might be, let's say 10 minutes before I even tab over and I still get a sense of whether my code is going to work or not and what it's going to do. I feel less scared by the results of my code. I feel like [00:16:00] things are more predictable and I think getting into that flow and making that your expectation of how you work is really good because I think what TypeScript gives you, that JavaScript doesn't give you so much, is it gives you a really, really fast time to error, right?

The time from when you make a mistake to when you know about the mistake in TypeScript is smaller than JavaScript. Shorter than JavaScript, right? You are going to know almost as soon as you call a function wrong because it's gonna give you a red squiggly line. It's gonna tell you why you called that wrong. Whereas when you were working in JavaScript, you would have to tab over to the function. It might sort of accept what you're doing, not actually throw an error, but then the thing that you return isn't quite right, like you just wouldn't get that feedback the moment that you need it.

Whereas TypeScript is, is really, really good for that.

**Carl Vitullo:** Definitely. Yeah. I mean with JavaScript you miss an argument and it's just gonna keep on trucking until you get undefined is not a function or cannot read property off undefined. So [00:17:00] yeah, definitely I think you're absolutely right there about TypeScript, shortening that time to error. I think that's a really powerful way to think about it.

**Matt Pocock:** Yep. It's a feedback loop, right? And you know, as web devs, we love a good feedback loop. We want it as tight as we can possibly get, and I like my feedback loops within my own IDE. Not having to tab over, not having to switch context even, to lose sight of my code. I just feel so powerful.

**Carl Vitullo:** Definitely. Yeah, and I know I personally have a problem where, moving from IDE to browser may not be a large context switch, but you know, the browser has all of my things, it has all of my tabs open and, you know, maybe while I'm waiting for that hot reload to finish settling down, I tab over to Discord and suddenly it's been 20 minutes and I haven't seen what the changed my code did.

**Matt Pocock:** Mm-hmm. . Yeah. And it's about like the if, cuz I, I'm a bit of a productivity freak. You know, I like looking at ways that I can code faster or like do my [00:18:00] stuff faster. And one thing that I really like is that it reduces the minimum time it takes to do something. You know, like if you are gonna code something in JavaScript, you are building in a sort of minimum time that you're gonna spend tapping over, that you're gonna spend checking the browser console that you're gonna spend refreshing the browser.

You know, TypeScript removes some of those minimums. It takes you into a place where you can actually work a lot faster because your tools are working at the speed that you are. Like, sure, people say like, yeah, you're gonna have to fix these random arbitrary errors and stuff. And, and like you said, with C++, there's always a, like a piece of that when you're working in type languages, but when it's going well, my God, it feels so much better than JavaScript can. Is that your experience too, maple?

**MapleLeaf:** Yeah, definitely. Sometimes I get stuck on errors that I fix just just for the sake of fixing errors, but like most of the time it's stuff that I'm like, oh, that's right. It could possibly be undefined. Or, oh, maybe that key actually isn't there and it makes me think [00:19:00] about like how I'm actually coding and whether or not I can just make things structurally better just solve the problem in a different way.

**Matt Pocock:** Totally. It makes you think about data structure first too, as well. Like I mean, you can, you can go and blast your code base with `any` and sort of like patch it through and get a JavaScript-like experience. But often what I find myself doing is working at that kind of meta programming level again, it's like thinking about the data structures that are going through my app modifying them and often that little extra step before you start coding, or doing the types before you start working on the runtime stuff that can give you a lot of extra velocity going forward.

**Carl Vitullo:** Yeah, most definitely. Yeah. And I something that one of our last office hours discussed was, Retsam mentioned, he said that one of his TypeScript jokes is that the answer is always to use a discriminated union. And I had never heard it put quite like that, but I feel like that was one of my big personal TypeScript level up moments is moving from [00:20:00] thinking about it sort of in the way that I had thought about prop types in React.

Because before TypeScript was really prevalent, that was how I tried to do some degree of type safety in my web apps. And with that you can say here's a a, an object blob. These properties are optional. But what really changed my thinking was not , are these optional, but do these belong to two different types of objects? Is there some discriminator where when this is set to this value, then it has this shape and when it's set to this value, it has this different shape. And then once you start thinking of it, not as this is optional, but this is only present in some cases, for me, that really shifted how I thought about designing the data flowing through my apps and really shifted it towards a more robust and resilient form of data structure.

**Matt Pocock:** What you're describing there is, is [00:21:00] basically union types, right? And. Union types in TypeScript let you basically see into every possible future of your code, right? You know, your function might be called with this, or it might be called with this. And if it's called like this, then this could happen.

And TypeScript sort of ends up being like Dr. Strange, you know, like looking through all of these possible futures for the one that can possibly work or the one that can possibly fail. And when you think about union types like that, for those who don't know, there's a syntax in TypeScript that just lets you specify like string or number.

And a discriminated union is a way of specifying an object, which let's say it has a type property, which is called the discriminator. That type might be A or B. And what TypeScript lets you do is it lets you say, okay, if you pass something with type A, then it's got a property of something with a number, let's say.

And if you pass a type B, then it's gotta be something else with a string. And so this lets you be [00:22:00] really clever with, especially how you declare like component props, for instance. So imagine you had like a modal where for instance, you needed to pass like a create action to it. Like this is a create type of modal where you pass certain props it lets you be really, really smart with how you define these things. And TypeScript will make sure that all possible futures inside that component and outside that component are covered.

**Carl Vitullo:** Yeah, I really like how you said that it lets your code see into all possible futures. I think that's a really powerful way of thinking about it. I, I think that's very true.

**Matt Pocock:** It feels so nice to use as well.

**Carl Vitullo:** So how long has it been since you changed careers into software?

**Matt Pocock:** It's been about six years. So I, yeah, six years. I was interested in it while I was doing my my previous career, which was voice coaching. I saw most of my clients like one-on-one, so it meant that I had a lot of times kill kind of like in between lessons and stuff. And so I would be sort of like coding up these little example apps [00:23:00] and, you know, flashcard apps and eventually messing with that, with web audio APIs and like trying to make stuff that would make my lessons better in JavaScript, which was a ton of fun.

It meant I sort of had no production experience when I went and got myself a job. But I knew quite a lot of really weird things about the DOM and things about strange APIs and the web and that sort of thing. And it got me interested by what the potential of JavaScript was and especially the web stuff as well. It seemed like you could do some amazing stuff if you just looked in these weird MDN docs. And I think that intro pushed me into the weirder bits of web development really early on.

**Carl Vitullo:** What sort of weirder bits of web development do you think you were drawn to first?

**Matt Pocock:** Well, I think to go back to what you were saying before, you were saying that working in C++ gave you a sense that you needed to make the compiler happy, but it forced you to think in this very rigorous way about [00:24:00] what you were building and what you were coding.

When I was, when I started working on web applications, I sort of felt like there wasn't a overarching structure or, or philosophy to what I was building. When I was a voice coach. There are various competing philosophies about how best to teach voice. I was a proponent of something called the Estill method, which focuses on anatomy, focuses on all of the different muscles and things to do in the neck, whereas other people are focused more on imagery and, and focused on these high-flying ideas.

But there were ideas and philosophies that were driving what we were doing. In singing teaching, nothing really changes, you know, nothing had changed for like 20 years, let's say. And I was trying to be at the cutting edge of singing teaching, and finding it really hard because there was no cutting edge.

You know? There's no edge. It's a butter knife, you know?

**Carl Vitullo:** Right. Everyone's on the same page already.

**Matt Pocock:** Yeah, exactly. Or they're in their camps, you know? It's like if the framework wars just ended, and then everyone just[00:25:00] sat down. Whereas web development I found immediately exciting because I could see there was a discourse happening, there was stuff going on, but I felt like, React wasn't really opinionated enough for me.

I think React is wonderful. I still use it all the time, but it didn't give me enough. And I felt like Angular was too opinionated in some terms, or using the wrong abstraction. So what I wanted to find was and I was drawn to the weird stuff, to the weird ideas that people were having about how you should structure your code, how you should structure your logic.

And that's what I think drew me to state machines because this wasn't a way of thinking about code, a way of thinking about your application that is old, you know, it's like I don't know, 50 years old at this point. I think like state charts in particular 40 years old where David Harrell started it and that felt like a sort of singing, teaching pedagogy to me, you know?

So it felt like I was joining something that had a lot of academic thought behind it and let me think about my code in a way that felt [00:26:00] novel and felt like the right abstraction level. So I sort of answered your question there, but I totally sort of didn't as well. Apologies for that.

**Carl Vitullo:** No, it's that was a phenomenal answer. It got my brain whirring in a bunch of different directions, so I think that's the best kind of answer. But yeah, I mean, what you were saying about the schools of thought, people have been learning and teaching singing for millennia, even if it takes 20 years to thoroughly explore a specific thought about how you might go about doing it. We have had so many generations of people who have made serious effort, who have dedicated their lives to serious exploration of one specific niche of it. So

**Matt Pocock:** Mm-hmm.

**Carl Vitullo:** That's a thought I've had about software before is that our field is just so young compared to humanity, compared to all of these other schools of thought, or rather to all these other industries or things that people learn.[00:27:00]

So it's, you know something old in computers is what, at the oldest, about 70 years. Math concepts will go a little bit deeper, you know, you get into algebra or things like that, but, Yeah, like you said, you know, state machines, they're 40 years old. That's the earliest, or state charts at least.

So I think that's a really fascinating thing to contemplate is just how young everything is and how up for active debate everything is.

**Matt Pocock:** Absolutely. It, it's a very nice mindset to approach Twitter with as well. Nothing matters. Like this is all gonna change in about five years or something. And I think that's what's interesting about where things are at this particular moment is that it doesn't feel like things, especially in terms of React, haven't really changed much philosophically in the past four or five years, I'd say maybe can't remember when hooks came in, but hooks I guess was a slight change of philosophy and approach, making logic a bit more [00:28:00] composable, a bit more interesting.

But fundamentally the mental model of React hasn't changed at all really since its inception. And it feels like it's the dominant way of thinking now, components and structuring your app in a certain way. And, and I think the interesting thing about TypeScript is that it is bringing something relatively fresh to the conversation.

Even though it's been around 10 years, it's slowly convincing people that, okay, maybe these contracts for your components are actually really important and more important than prop types let you be. They let you be safer than prop types would allow you to be. So I think that feels novel and it's, I again, that's a philosophy I can get behind. TypeScript asks you to work slightly differently than you would work in JavaScript, as we've touched on before, it makes you think in a more domain specific way.

It makes you think more about the the structure of your types and which components or which parts of your app should [00:29:00] understand or should rely on different types in your app, let's say you're using Prisma for instance, and that grabs like a user type from your database.

Prisma uses a codegen thing. It's one of the good codegen things. It sort of prints a load of types into your node modules. Then you can pull those out. But should your nav bar be using the exact user type that's in your database or should it re declare it? These are problems that you basically don't need to think about if you're just using pure JavaScript, but TypeScript gives you this extra level of sort of philosophical thinking on top.

**Carl Vitullo:** Yeah, sure. And it's an extra burden of something to think about, but once you get that muscle memory of thinking of in terms of those as like, what data is going to pass through this, where does the type for it come from? And the mechanics of importing it and making that all work pretty fluidly. You don't need to check that the data is flowing correctly like you would in JavaScript once you have TypeScript all set up.

**Matt Pocock:** Yep. Absolutely. And that's something that [00:30:00] XState gave me as well, was a sense of I was sure that what was happening was supposed to happen. It sort of feels of a piece like TypeScript helps you prevent impossible data and finite state machines and state charts help you prevent impossible states. They feel of a piece

**Carl Vitullo:** Yeah, I like that. I don't think I'd ever quite heard state machines and types contrasted in quite that way, but I think that's a really powerful way to think about it. It's guarantees for your data and guarantees for your logic.

**Matt Pocock:** Exactly. And if you're using something like Zod as well, which I've been thinking about a lot, which is a runtime, sort of schema based validation library, then you can get these sort of runtime guarantees as well. Because TypeScript is not actually type safe. It just gives you the feeling of being type safe.

You know, you can just like destroy everything if you want to very, very easily because JavaScript just lets you do that. Whereas if you're using something like Zod, which gives you an element of runtime type safety as well, [00:31:00] or things like Yup or Ajv, then you're gonna get even more confidence and your app is gonna be even more robust.

**Carl Vitullo:** Right. Oh, sure. I see. Zod is a validation library for data. So TypeScript will give you type assertions, but those can have holes in them, whether it's from any or assertions or external data, and so Zod is a method of ensuring that your runtime matches your compile time?

**Matt Pocock:** Exactly. Yeah. So Zod is a library for ensuring that those two match it's useful for more mundane stuff too. So, like form validation, making sure that the things passed to your API endpoints are all okay. But if you want an extra level of robustness, it makes you think about the edges of your application more, so if you're contacting a third party API that you are sort of sure if you trust, but not sure if you trust actually.

Then you can actually just validate the data that's coming back with a schema validation like Zod. And that will make sure that if the thing that's coming [00:32:00] back is not quite right, then it's gonna fail at that point and it's gonna fail early without infecting your app.

Because you know, the hardest errors to debug are the ones, and this happens in JavaScript all the time, is the ones where you don't protect against the thing that's coming into your app and you suddenly get undefined as not a function. And like you suddenly just, it breaks everything.

**Carl Vitullo:** Right, right. That, that is almost exactly the example I gave a number of years ago when I wrote a blog post about failing early and

**Matt Pocock:** Yes.

**Carl Vitullo:** the, the perils of just saying, you know, like, pass this, or, you know, an empty object. Fail early is such a powerful concept.

**Matt Pocock:** Yep. And fail fast too. As we said earlier, like about times script, fail it in your IDE, don't fail it in your browser console. Don't fail it in production.

**MapleLeaf:** As much as possible For sure. And that's that's a lot. That's a pretty big motivation behind the stuff that I've been doing with Remix, for example, like finding out how to close [00:33:00] the &quot;gaps in the type system&quot;, places where mistakes can be made. And I have observed that that's a place where I feel like people need to experience it and try for themselves before they see the true value in it. I've even seen Theo himself say he didn't see the power of TRPC until he spent a bit of time with it.

**Matt Pocock:** Absolutely, and this is a common thing amongst people adopting TypeScript is that they don't really get a sense of how good it is or how confident they feel with it until they try it. Because I think as a JavaScript developer, you're sort of used to feeling like you have no help.

You know, you are used to living in a kind of terrifying world and it's kind of nice in the wild West because you, you can kill anything, you know, you can just do whatever you like. Like you have complete freedom, you have nothing saying that you failed except, you know, when, you know, it fails in the browser or something, you know, it works on my machine, whatever.

Whereas TypeScript does give you like you get a sort of [00:34:00] sense of, okay, I have this kind of English teacher like watching over my work now and giving me like squiggly red lines whenever I get something wrong and they're like right there all the time. And people who are used to the Wild West don't like that.

But it also. Gives you this immense sense of power. Sometimes it feels like you are contacting a deity. You know what I mean? Like you are just like, how the hell can you know that? That's incredible. And TRPC gives you that feeling too.

**Carl Vitullo:** Yeah to extend the wild west metaphor, going down and mining for gold wherever you please, it sounds great for a while, and then at some point you realize, Hey, wait a second, my labor's being exploited by robber barons.

And then that's when you start seeing the value of institutions like OSHA so TypeScript is OSHA for programming.

**Matt Pocock:** Yeah, it's like the NHS absolutely.

**MapleLeaf:** I feel like there's also a pride element, like eventually you start to think less about like being [00:35:00] good and doing things the hard way just to feel good about it and more about just getting stuff done, even if it means having all of your tooling hold your hand along the way, you just stop caring,

**Matt Pocock:** Yeah, I like the feeling that I could turn up to work drunk and TypeScript would still like be fine. It would still prevent me from doing mistakes. And actually I think to be honest, like with tools like GitHub co-pilot with chatGPT, it's gonna be even more important to have tools like TypeScript that can hold the hand of experimental AI stuff before AI takes our jobs.

It's gonna be important to have guardrails so that you don't just spew out random code, cuz you are right Maple. Like, that's a really good point, _you feel_ powerful when you code in JavaScript in TypeScript, you don't feel powerful, you don't feel powerless.

You sort of feel like, okay, I'm, I'm in dialogue with something. I'm pair programming with something. Whereas [00:36:00] JavaScript feels quite independent. Does that sound like a fair characterization?

**MapleLeaf:** Yeah.

**Carl Vitullo:** Yeah, I think that make sense.

**Matt Pocock:** Yeah. Well, like, so this then the feeling of using TypeScript, I love the idea that I can just not have to think.

And obviously this takes a while to get into the mindset of thinking in types and thinking about the flow of data through your app. But once you are there, then you just feel like you are having your hand held the whole time and it's a lovely experience.

**Carl Vitullo:** I think that I personally have found that how TypeScript has affected my thinking when I'm programming is largely through making me think, how can I make this auto complete better . VSCode gives me such a rich intellisense, a rich sense of what data is flowing through that when I end up deciding to go deeper on some specific type, it's because I have discovered a flaw in the intelligence.

Like it's, it's not telling me the right thing or it's not telling me the most specific thing it could, and that has been my [00:37:00] personal driver for trying to learn more, trying to get better, is hitting some friction point and thinking, Hmm, how can I use types to give me more information?

**Matt Pocock:** That's a lot of what I'm thinking of covering in my course too. Like a lot of javaScript if, even if we don't think about it in this way, is built around functions, you know, like functions, functions, functions. Everything in JavaScript is a function. Everything in React as a function.

And with functions, you are basically declaring a contract. You are saying this must be called in this certain way and it returns a certain thing. Even if you're not experiencing like that. And if we didn't use functions, like imagine that world, then you would be able to get pretty good inference on basically anything because everything would be static.

You would just have the stuff you've got and then the objects and like TypeScript will understand the objects that are there, the variables you've declared. But when you have a function, then you basically put a [00:38:00] barrier in that inference and you lose a bit of The dynamism that you can get just by understanding all the stuff that's in the file and inferring it and blah, blah, blah, blah, blah.

Except when you use generics. So generics let you pull in TypeScript inference to basically be able to infer the output of a function from the input of a function or infer things about the inputs from other things you've input to the function. So it gives you a lot of that dynamism and that's, I imagine that that's where you're going with that Carl with like you trying to get better and think about this stuff more?

**Carl Vitullo:** Yeah, that's definitely a part of it. It also makes me think of a distinction that has come up before in events we've done is the, the, the concept of like app types versus library types. And for the different approach that you have to come at the types based on what context you're writing them in.

And I think things like generics in functions is [00:39:00] one aspect of that. Because libraries might be used in so many different contexts, then they have to be written with types that are flexible enough to support all those different use cases, which I think is a real challenge.

**Matt Pocock:** It is. Yeah. Especially with most of the things people use libraries for, they're going to need some kind of dynamism in them. Data fetching libraries, the dynamic thing is what you're fetching or the arguments that you need for that. The form libraries, the the state of your form is going to be the dynamic thing, and each of these can be expressed in generics.

You are right in that there's this kind of divide between app types and lib types. And often if you're using an app, then you are going to need to basically just be a consumer of those library types. And often the most painful errors that you are going to get are when you don't understand those library types well enough or you can't read the declaration files.

A lot of what we think of as kind of like [00:40:00] the most complicated transcript areas to solve, There. When you interact with third party libraries and you are looking at types you don't understand, there's often this huge wall of declarations if you like, find in definition and stuff, and that can be the most terrifying experience for a new person.

I think this stuff is not as hard as it seems. It's an extra little learning curve, but the tools that we have make working with generics really, really nice. There's some stuff to learn and some new syntax that looks really, really alien.

But if you can be the person who goes, okay, I'm gonna add a generic to this function. I'm gonna make a generic table components that can accept any kind of data and render out a beautiful table. If you can be the person that adds that to your team, then that's a senior level job that you've just done. TypeScript and advanced TypeScript really puts you in a position of being able to enable your team members to give them a developer experience that they've could hardly even [00:41:00] imagine before.

And what that means is there's code that will depend on you, right? Or like depend on knowledge of advanced generics. But really, if you look at it and understand it and go through some of the material, it is, it's not as complex as it seems. And what I'm finding is there's a lot more use cases for generics in the application code than I really realized.

I've been looking at a lot of, kind of like, as part of the course stuff, I've been looking at a lot of open source apps and I've been using this AST parser that I had talked about before to scan them for the advanced generic stuff that they're doing. And there's a surprising amount there actually, even if you're building little libraries that can be used across your organization, then knowledge of advanced TypeScript is kind of like a prerequisite actually from making something that's good and that works. I know Maple, this is where you spend most of your time, right? Is thinking a lot about this stuff and, and your work with Remix too.

**MapleLeaf:** Yeah, definitely.

**Matt Pocock:** And what kind of like, is that affecting like your stuff at [00:42:00] work as well? Or like do you do any application level stuff with advanced generics or is it mostly library stuff?

**MapleLeaf:** At work, it's pretty simple since the stuff that I haven't the stuff that I work on doesn't get too deep in the weeds when it comes to TypeScript. It's definitely like more of my personal projects where I think about like, How I can take the abstractions that I have and how I can improve upon them, and that's when generics are more or less required.

**Matt Pocock:** Totally.

**Carl Vitullo:** Yeah, I definitely agree with everything you just said about if you can improve the developer experience for your teammates, that's like a senior developer moment. I really feel like that's been one of the driving motivators behind a lot of my learning and advancement up towards senior, you know, in the like three or four years it took where I felt like I was progressing from early career into like, no, I am senior, I am established, I know what I'm doing.

And just really looking for opportunities where you can [00:43:00] improve the experience just a little bit. Because every time you can save yourself five minutes on an ongoing basis, just by removing a point of friction, you're saving that time for everyone else as well. I think that that kind of focus of and skill development for developer experience really pays dividends over the long run. When people talk about a code base that's drowning in tech debt, I think that's what they're talking about is months or years of lack of attention on developer experience.

**Matt Pocock:** Absolutely. And one thing that's interesting about generics is that when you add a generic to a function, you're basically saying when people use this function, they won't need to annotate it in any way. So by you doing more TypeScript, you are basically saying, okay, every other member on my team needs to do less TypeScript.

They can work more in like just without, after annotating anything. You know, it's literally just JavaScript. I [00:44:00] find that kind of the most compelling argument for bringing a more advanced TypeScript mindset into your work, which is if you do it, other folks won't have to.

**Carl Vitullo:** Agreed. Yeah. A thought that I have put to words at various points in my career is that like, really one senior developer can support four or five junior or mid-level developers. And I think that the actual nuts and bolts the mechanics of how that support comes across is exactly what we were just saying.

If one person has the expertise to get the experience in a certain way, Then everyone else on the team doesn't need to think about it because it just works for them. I think that mindset and that approach to software development is, tying it back to another programming meme, maybe that's what a 10 x developer is, is someone who allows the other nine people on their team to work faster.

**Matt Pocock:** That's what a DX developer is definitely.

**Carl Vitullo:** DX, haha.

**Matt Pocock:** People say like abstractions by default get a bad rap [00:45:00] these days, like avoid hasty abstractions and all this stuff. But if you find the right abstraction and you build it in the right way or the right set of abstractions, you can save your team an enormous amount of time.

And like it's so satisfying to like, imagine that you've got a team of people that are building components that are super similar or building hooks that are super similar. If you can find a way to abstract out the stuff that's the same about them and you can find something that's DRY find something that works and you can use TypeScript to bring that all together in a beautiful DX and massively increase your team's velocity then, I mean, my God, that's, that's such a satisfying thing to do in your own career and have the congratulations from them and see that your work suddenly just got easier.

**Carl Vitullo:** Definitely, definitely. Yeah. That reminds me of one of my most memorable wins of my entire career. It was this sort of like [00:46:00] hacked together, rigged up server side rendering monstrosity. At the time I joined every time they made a change, they had to kill the server process and restart it. And because it was bundled with Webpack, that meant they were starting with a cold cache on every change.

I joined and eight people had dealt with a minute and a half long build every time they made any kind of change to the code whatsoever for months. And so I came in and I said, wow, this is unacceptable. I bet I could fix this. And me and two other new joiners who didn't have any assigned tasks yet, just spent three hours and just got a watch mode working.

Like all of the, all the only change, like we didn't change the code, we just changed the build process so that it supported watch and rebuild and that got the the rebuild time on changes down from a minute and a half to 10 seconds and. I still have that on my resume as one the biggest wins of my career because how many times do people run a rebuild a day? How many people are on a team? [00:47:00] How many hours a month did I just save?

**Matt Pocock:** Like as developers we're often one layer away from the people that we're actually helping. You know, like we're building tools for people that we don't actually see, you know? So often the way that you can feel a bit of reciprocity, that you can feel the impact of what you do is by helping your colleagues, and that's definitely been one of the most satisfying things in my career is, is focusing on that.

**Carl Vitullo:** I like that. That's a really pleasant way of thinking about it. The people you're helping are your colleagues.

**Matt Pocock:** for sure.

**MapleLeaf:** Yeah, definitely.

**Carl Vitullo:** All right, well, we are coming up in an hour here. Matt, thank you so much for coming out. This has been a really lovely conversation.

**Matt Pocock:** No worries at all. Lovely to meet you both.

**Carl Vitullo:** Yeah. Absolutely. Well, yeah I, one thing that I, I thought I might close with and I'm springing up this on you a little bit, but has there, have there been any books that you think have been uniquely impactful in your professional career?[00:48:00]

**Matt Pocock:** I'm not much of a tech reader, unfortunately. I know that there's a couple of really excellent books about TypeScript, like Josh Goldberg's TypeScript book Effective TypeScript.

**Carl Vitullo:** Any not related to technical topics?

**Matt Pocock:** Well, I'm reading a book about the Invasion of Sicily in 1943 which may not be to everyone's interest, but I, I find it absolutely fascinating. That period of history is just full of incredible high drama. So I'm gonna take my wife around there at some point and go, this is the bridge of Ponte, whatever that, you know, that took oh, so many people to take aren't you fascinated? And, you know, she'll be asleep in the car, so.

**Carl Vitullo:** Be your own historical tour guide. That sounds like a fun time.

**Matt Pocock:** Can't wait. Yeah.

**Carl Vitullo:** Yeah. And you're working on a course right now, right?

**Matt Pocock:** That's right. I'm working on Total TypeScript which is, it's at totaltypescript.com. We released the first module which is all about transforming types to other types. And the second module is dropping soon which is all about generics, actually. So an intro to generics. Then the third module is gonna be about advanced [00:49:00] patterns in TypeScript.

**Carl Vitullo:** Thank you so much for coming out. It's been really great talking to you.

**Matt Pocock:** Lovely to meet you
