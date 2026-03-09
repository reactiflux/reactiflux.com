---
title: This Month in React (May 2023)
date: 2023-06-05
time: 10am PT / 5PM GMT
location: Main Stage on Reactiflux
description: "Join Carl Vitullo, Mark Erikson, and Sebastien Lorber as we break down This Month in React. We'll break down what's new in an hour-long conversation."
people: "[Carl Vitullo](https://twitter.com/vcarl_), [Mark Erikson](https://twitter.com/acemarke), and [Sebastien Lorber](https://twitter.com/sebastienlorber)"
---

<iframe src="https://podcasters.spotify.com/pod/show/reactiflux/embed/episodes/This-Month-in-React--May-2023-e25flvh" height="102px" width="400px" frameborder="0" scrolling="no"></iframe>

**Carl Vitullo:** Hello everyone. Thanks for joining us for May's This Month in React, where we recap and digest recent developments in the ever-evolving React and web ecosystem. I'm here with Mark Erikson and Sebastian Lober. Mark, you wanna introduce yourself? [00:15]

**Mark Erikson:** Hi, I'm Mark Erikson. My day job is working at Replay, where we're building a time traveling to bugger for JavaScript. My free time, copious amounts thereof is taken up maintaining Redux. [00:26]

**Carl Vitullo:** Heck yeah. Sebastien, can you introduce yourself? [00:29]

**Sebastien Lorber:** Yeah. I'm the author of this in React, the newsletter at keeps You to date with React and React Native, and also the maintainer of Docusaurus React documentation framework from Meta. [00:42]

**Carl Vitullo:** You know, I realized that I have been asking you guys to introduce yourself and I don't really introduce myself. [00:47]

**Mark Erikson:** Carl, would you, would you tell us about yourself? (laughter) [00:50]

**Carl Vitullo:** Yes, I would love to. I'm Carl Vitullo. I am a staff software engineer and freelance community manager, sort of community lead for Reactiflux. [00:58]

I, I think, not a ton of huge news going on right now, but yeah. Mark, can you kick us off with our first link? [01:04]

## Next 13.4, App Router and Server Actions

- [Next 13.4](https://nextjs.org/blog/next-13-4)
- [Server Actions](https://nextjs.org/blog/next-13-4#server-actions-alpha)
- [Isomorphic Development](https://meijer.ws/articles/isomorphic-development)
- [Rich Harris on frameworks, the web, and the edge](https://www.youtube.com/watch?v=uXCipjbcQfM)
- [RSC data leak security footgun](https://twitter.com/tomus_sherman/status/1654211227172716545)

**Mark Erikson:** Okay. So first off last month, Next 13.4 came out and the, the really big news item out of this is that they are declaring that the NextJS app router is stable, which has a couple different implications. [01:20]

One is that it's a different way to define the routing structure through your page. And the second is that this is the first official &quot;production&quot; ready release of React Server Components. [01:33]

Now this is where it's always dangerous for me to try to describe things because I have not had a chance to use any of this stuff. So, you know, a lot of what I can say here is either looking at the announcement blog post or trying to summarize the stuff that I've read off the various discussions on, on Twitter and Reddit. [01:51]

So at this point, React Server Components are in theory production ready to use, and I've certainly seen people, you know, mentioning that they've, you know, they've rewr rewritten their blog or, you know, put together some actual example sites using React Server Components. [02:07]

It feels like there's still some question about just how production ready they are, both in terms of stability as well as like what are expected usage patterns and how do you integrate various existing community tools and libraries into those. But you know, at least as far as the Next team is concerned these are in theory pretty much ready to go. Um, so that's, that's by far the, the biggest piece of news. [02:37]

And then looking at the release notes the couple other big things in 13.4. Next has a team building a tool called TurboPack, which is a equivalent kind of build tool to Webpack, except it's written in Rust. It's being written by the original author of Webpack, Tobias Koppers, and it's supposed to be significantly faster. And so the release notes say that they, they are marking TurboPack as being in beta. It still does not have full future parity with Webpack, but they are making progress on it. [03:11]

And then the last piece is something that I, I, I've only seen bits and pieces about myself, which is that Next and React are working together on something that they call Server Actions. And this is apparently very inspired by what Remix has, where it's, it's like a new primitive for sending requests to the server based on plain HTML forms. [03:37]

And I, I think the idea, looking at the examples is that on the client side you have a lowercase form input and you provided a prop called action. And that action can then in turn, really run on the server and do like a direct database insertion or query or something like that, and the compiler is able to separate out the fact that this action function needs to run on the server versus the rest of the code, which could technically run on the client or the server. [04:11]

So it's, it's kind of like that Remix style thing where you're writing code in the same file that mixes together client code and server code, and it automatically just works. So they, they announced this Server Actions idea. It's still very much an alpha and experimental, but it is a thing that they're working on right now. [04:31]

And so these, these pieces have the possibility if they, you know, actually pan out to be pretty large changes in the way we structure and write React applications. [04:41]

**Carl Vitullo:** Yeah, definitely as you were and you know, as I was reading the notes on Server Actions, my immediate thought was Remix as well. [04:48]

I do think that's a really powerful pattern that Remix introduced. So I'm excited to see Next Adopt It. And yeah, I mean this is, to me, this is exactly why it's so beneficial to have multiple clients doing, or, you know, mul multiple tools trying to solve the same use cases cuz they come up with different ideas and some of them stick. I'm pretty excited to see Server Action stick. [05:08]

I think this, I think if you're going to have code that spans the server and the client, you know, it can't all be UI code, not everything we do on the server is render UI. So having, you know, an easy way to run other types of arbitrary code. Yeah, that sounds awesome. Excited for Server Actions. [05:25]

**Sebastien Lorber:** Yeah. I'm also excited for, for Server Actions. Maybe for another reason is also the, the support for Progressive Enhancement. Because so, so far Remix has shown that it's possible to, to have a great Progressive Enhancement story with React, but this kind of feature was lacking in in NextJS. And now they, they, they show that they really care about it. [05:49]

And you know, when you submit a form now the abstraction, the the abstraction make makes it possible to, to submit the form without JavaScript, without even direct being hydrated on the client. And the server is able to, to receive the form submission and and send the new HTML page. depending on if JavaScript is running on the client or not, the payload will not be the same. [06:16]

And actually, I think the NextJS markets this feature as Server Actions. But really I think the action prop is right, is a React Core concept. Now you can you can pass an action to a form in React and it can be a very string or callback. And, and depending on whether the JavaScript will run or not the, you will use one form or another in NextJS to support a progressive announcement or the submitting the form locally with a JavaScript. [06:51]

**Carl Vitullo:** Okay. Interesting. I didn't realize that this was a React concept that Next is looking to expose. [06:57]

**Mark Erikson:** I think it's a plain HTML concept that they are extending. So the plain HTML form element has always had an `action` attribute that would, I think it defaults to POST, and that's why if you just have a plain HTML form and you submit it, the browser literally makes a post request to the server, right? [07:19]

Uh, I think you can change it to be GET instead. And so I guess technically what the React team is doing is they're overloading the existing action attribute so that you can pass a function instead of a string. And if so, they, they wire things together on both ends. [07:37]

**Sebastien Lorber:** Actually, what you mean is the method, POST or GET is the method and action with the URL of the, the target endpoint of the form. [07:45]

So somehow they just allowed to accept the callback. But I think on the, on the server, the, the callback is serialized to string by the compiler so that before hydration React is able to know where to post the form on the server. [08:02]

**Carl Vitullo:** Oh, interesting. Okay. So I think I see, I think I see what you're saying. [08:05]

So I just put a little code snippet in the chat here. So there's this page component, it has a function defined inline. [08:12]

**Mark Erikson:** The key, the key thing is that it has the &quot;use server&quot; string inside, and this is where the compiler part comes into play. So similar to Remix, you've got code that could run on either side in the file and some code that only runs on the server in the file. And they have to have some way to delineate which code in that file is server only, and they're basically just gonna strip that out of the part that goes to the client. [08:40]

**Carl Vitullo:** Okay. That's interesting. Okay. So it doesn't need to be inline. That's good (laughs). I, I'm not a huge fan of this &quot;use server&quot; tag, but like, okay, sure. That's how, that's how it works, whatever. Um, it reminds me of an article I read recently talking about &quot;colored functions&quot; and how it's yeah, it just introduces multiple types of functions here. [08:59]

But the point I wanna make here, to me, this actually just reading this code and thinking about this as like, the compiler is extracting out the function, it seems almost more like a developer experience improvement on serverless. You know, because you could write a function like this that handles a single form, but it's pretty painful to do that with a serverless backend. [09:20]

So having a compiler that will extract out that code and handle the packaging it into a serverless, you know, executable and putting it somewhere and inserting the url, or Yeah, inserting the URL into a form. That actually that's, that's actually really interesting to me. [09:37]

**Sebastien Lorber:** There is something to, to not be wrong about this snippet is that, you are not mixing server and client, code inside the same file. The whole component is a server component and the &quot;use server&quot; only expose the function to the public interface of the server, somehow. [09:55]

So I think the, the first reaction you have when you see the, the snippet is, you are able to somehow mix server and client side code in the same file. But it's not exactly that. [10:05]

It's more like, inside your server component you can choose to render functions and some of them will get exposed to the public interface that the server runtime will create. So I just want to, to, to make sure that people don't make this confusion because the, the form is a server component. It's not a a client component. [10:26]

**Mark Erikson:** That, that does kind of go into, I guess my, my biggest concern with all this stuff, and that's trying to wrap your head around the mental model. My biggest personal problem is I just literally have not had a chance to use any of this. So I've been trying to understand it without actually using any of it in practice. [10:43]

But it feels like trying to understand these boundaries between what's, what's a server component, what's a client component? Like as my Redux co-maintainer Lenz has pointed out, it's like, client components can run on the server, the phrases server and client don't necessarily have the meanings you think they do with this technology. Um, I actually wanted to link two other articles that I'll, or, well, an article and a post that I'll throw in here. [11:06]

And I thought these did a pretty good job of discussing some of the, the pros, cons, concerns, and trade-offs with both like,, Server Components as a technology, and in general, what we're doing as we kind of mix and match with this code where you can have a database call and something that runs on the client in the same file, it starts to blur the lines. [11:30]

And we're doing this sort of in pursuit of developer experience, but it does bring up potential concerns around things like accidentally Exposing API's, keys, or secrets into the client if you're not careful enough about how you structure the code, or just trained to wrap your head around what pieces of code are going to run where, and I know Dan has said that, you know, in, in a lot of ways this simplifies how you teach React to people because you don't have to explain, &quot;well, I, I make a fetch call when the useEffect&quot; or &quot;I have to go learn how to use React Query&quot; or something like that. [12:08]

Instead you just, you're just making an async/await call inside of a component and it just works. And I see the point he's trying to make, but there are a lot more moving pieces involved here as well. And I don't have a great answer for how are we going to teach all this and what kind of problems are, are people going to run into as a result. [12:31]

**Sebastien Lorber:** Yeah. By the way, there, it's worth mentioning that there is a little security issue that related to the Server Actions in NextJS, I will post in the chat. A tweet related to that is that if your server action captures a variable in its closure, actually this variable will be sent to the client inside the form as a hidden parameter, so that it'll be sent back to the server so that the, the closure is able to, to see this variable again, because unlike client components, the, the Server Components do not have state. [13:07]

I, I mean, for example, if one server component serve your request, it might be in AWS US west 1, and then on the second request, it might be another data center that serves your request. So all the Server Components have to be stateless. And if you need to preserve state across closures inside your Server Components, they must be sent to the client. [13:31]

And currently this is a risk to expose secrets to the clients. So the React team said that they were thinking about encrypting the hidden parameters, but it's not ideal solution because of course you, you don't necessarily want to expose secrets even encrypted. [13:50]

And I don't know what will be the, the solution and if a decision has been made, but it's worth knowing that there is a little security issue currently regarding the usage of Server Actions. [14:01]

**Mark Erikson:** I actually just had a, a side flashback to the, the old classic ASP.net view state approach for serializing data to the client. [14:10]

**Carl Vitullo:** But so we're, we're 20 minutes in. We've done one link, so we should probably move on (laughs). That's a lot to talk about though. Yeah. Sebastian, you wanna take us on to our next one? [14:20]

## React Native Skia

- [William Candillon – The Joy of Painting with Skia | App.js Conf 2023](https://www.youtube.com/watch?v=Hfb_gpfCHzk)

**Sebastien Lorber:** There have been uh, three React Native conferences this month. There was AppJS in Poland, there was uh, Chain React in USA and there was a React Native Connection in Paris. I like particularly the talk of William Candillon that presented the progress with React Native Skia, which is the renderer used inside Flutter and inside Android and inside Chrome, and inside many of other things. [14:43]

And you can use it in React Native today, and it permits to, to somehow unlock many use case that that were not possible previously. The talk is presenting a few interesting things like the ability to create a screen transitions that are powered by OpenGL shaders and things like that, that's quite impressive. [15:03]

**Carl Vitullo:** Interesting. So it's about, painting. So it's sort of like, is this like a React Native version of Canvas? Sort of? [15:11]

**Mark Erikson:** Just as a little better background Skia is a C++ library for two-dimensional graphics. And my understanding is that most browsers actually use this to literally draw stuff on the screen in the first place, including implementing the HTML Canvas element. So it sounds like this is now, this library is now being exposed as something you can use from React Native to do custom graphics. [15:40]

**Sebastien Lorber:** Yeah, it's exactly that. The idea is that you have a canvas, you have some primitive that you can draw, you can use OpenGL shaders and things like that. [15:49]

In the beginning, I think, maybe last year they released the first proof of concept. And then there was Shopify that was interested in this lib and sponsored it. So now the, the development in is funded by Shopify. I think the first version was more of a proof of concept, and now it's more production ready. [16:09]

I think one of the challenge in the beginning was also that it was not possible to interleave easily the, the canvas inside the native application because somehow the, the canvas was over the native views or it was under, and you have to, to do the trade off of deciding how to integrate the canvas inside your app. [16:28]

So it was a bit complicated to achieve certain visual effects. And now the integration is better. The talk is showing some possible solutions to, to be able to integrate better with native views and things like that. And also to integrate better the canvas with Reanimated, which is the popular animation framework, for React Native today. [16:48]

**Carl Vitullo:** Interesting. Okay. Very cool. So I wonder if using the same primitives as Canvas and the browser, I don't know if this is the case, but I wonder if it will allow a lot more cross compatibility with that sort of graphics rendering. Yeah. That using the same primitive, the same, you know, base tool to bring that into, into native. [17:09]

That, that does seem like a really huge step. Yeah. [17:12]

**Sebastien Lorber:** I think it unlocks a lot of things and we are just in the beginning, yeah. [17:16]

**Carl Vitullo:** Yeah. You know, honestly, that reminds me of the effort to bring Flexbox rendering into Native. So, yeah, I mean, graphics rendering is really hard. It's also really powerful. So if we can have similar primitives for doing graphics rendering on both web and native, yeah, I could see just a little glimpse of what new features that would enable. Yeah. Very cool. That's pretty awesome. Cool. Okay, [17:40]

I'll move this on to our next one. [17:42]

## Struggles with Remix

- [My Struggle With Remix](https://redd.one/blog/my-struggle-with-remix)

**Carl Vitullo:** Yeah. Um, I wanted to share a blog post about someone sharing their struggle with Remix. I think it's good to talk about not just what's great about things, but also where the rough edges are. Um, and this seems like a pretty measured and realistic perspective on where some of the rough parts on Remix are right now. [18:03]

It talks about the developer experience and some of the struggles there. Routing is too magical is one of its points, which I, I do, I, I think I agree with a little bit. It basically has its own DSL, domain specific language, for routing where, as part of the file name, as part of the path for your routes, it does a lot of parsing out of that string and changing behavior based on that. [18:26]

So like having to learn a brand new DSL for routing that you don't really have a lot of control or access into, outside of that, like that, all that, that all happens as part of the Remix dev and build server. It's not super inspectable and uh, definitely a little bit magical. [18:42]

One of the categories of complaints it has is that it gives you enough rope to hang yourself which is both great and terrible. It, it is nice that it is so powerful, but part of the downside of having so much power is that it doesn't do a lot of things for you. [18:56]

This author talks about needing to write a lot of supporting logic for handling things like static assets like you, you put a relative path to an image in your markdown, and then you have to write code that understands how to parse out that relative path and convert it into a, an absolute path when it's actually showing the page. [19:11]

So, I, I, I, this seemed like a really good, I don't know, collection of some of the rough spots in Remix right now. [19:16]

**Mark Erikson:** Uh, again, I, I have not used Remix, so I can't comment on the technical aspects here, but I, I really did appreciate this post because it was very clearly written. it was framed as &quot;these are my experiences and pain points using it,&quot; not, &quot;oh no, this tool is awful.&quot; it was actually like more of an attempt to say, how can we make this better rather than attempt to bash the tool or its authors. [19:43]

And I appreciate that. Like, there, there's just so many negativity and, you know, &quot;tool X kills Y&quot; being thrown around and I, I, I appreciate it when we can have reasoned debate and discussion about technical trade-offs rather than flame wars. [19:59]

**Carl Vitullo:** Yeah. And I, I appreciate that in the, you know, in the intro setting off the whole post, he says, &quot;I think Remix is a great framework. I will not be mentioning Remix advantages.&quot; Uh, it kind of, it reminds me of that scene in the Silicon Valley TV show a number of years ago where they're talking about their frustrations and they, they come up with an acronym for &quot;Richard is great, but.&quot; You gotta get that outta the way you gotta &quot;Remix is great, but.&quot; [20:23]

So I think this was a great way to, to focus on the challenges without having to extol all of its great virtues of which there are many, it has a lot of great things. [20:32]

**Sebastien Lorber:** Yeah. But the, the author in the end, &quot;I still would use it for a startup,&quot; so that's already quite nice. I think the conclusion was he wouldn't pick it again for a blog. I tried also to, to create my newsletter website with Remix in the past, and also I thought it was a bit it had some rough edge, but it was possible to use it, but maybe not the, the simplest solution. But also they focus maybe on low level primitives and a bit on the architecture side. And for example, I'm quite surprised that the author was looking for the, you know, the markdown images to be able to use the relative image path. I don't think it comes for free in many frameworks. [21:12]

I know that does it, but it's not free, it's we have to implement it manually. So maybe NextJS does it. But I don't know. That's not something that for me come out of the box unless the framework is opinionated to where they're using MDX or something like that. But, otherwise not too surprised that this kind of feature is doesn't come outta the box. [21:34]

**Carl Vitullo:** Yeah. Agreed. He mentions. Gatsby doing this for him, and that wasn't my experience. I haven't used Gatsby extensively, you know, in any deep capacity for a number of years now, so maybe something changed, but I, I do remember having to write code that did exactly that when I used Gatsby in about 2018. So, yeah, I don't know. [21:52]

Cool. Mark, you wanna take us off? [21:53]

## You Might Not Need React Query

- [You Might Not Need React Query](https://tkdodo.eu/blog/you-might-not-need-react-query)
- [Using Apollo Client with Next.js 13](https://www.apollographql.com/blog/announcement/frontend/using-apollo-client-with-next-js-13-releasing-an-official-library-to-support-the-app-router/)

**Mark Erikson:** Yep. So continuing with the, the Next 13 and Server Components theme, a lot of the big questions within the community have been how do data fetching libraries like Apollo React Query, RTK Query, and SWR, work in conjunction with Next 13.4 and React Server Components, and the, the new app directory. [22:19]

And there's a couple, couple big discussions and pieces of news on this front. One is that Dominik Dorfmeister, the maintainer of React Query, wrote a post entitled You Might Not Need React Query, and you should read it because it's, it's a really good post in general, like everything that Dominic writes. [22:38]

Some of the summary here is that , if you choose to do data fetching with React Server Components, well, React Query is a data fetching library and you just chose to use a different tool to solve that problem. That's not to say that React Server Components completely kill React Query because where and how you need that data or some, or if you need some of the specific features of React Query there, there are still very much use cases. [23:10]

But it's, it's that same kind of question of, there's, you know, 3, 4, 5 tools available to solve this problem. If you pick one tool, you probably don't need the other tools that do some of the same thing. Another item is that my Redux co-maintainer, Lenz Weber, recently started working for Apollo and he works on Apollo Client in his day job and thinks about RTK Query in his free time. [23:34]

And he spent a couple months trying to work through Server Components and Apollo and figure out how these things even can work together at all. I'm still not clear on all the details, but he, he put up a RFC document that describes how Apollo and Server Components can even potentially fit together at the technical level. [23:59]

And then there was a blog post that accompanied that, where I believe they put out some kind of a proof of concept library that can help Apollo and Server Components sort of go together. We've been getting a lot of questions about like, so I wanna use Redux, but I also you wanna use Server Components. [24:16]

How do they fit together? And you know, like, to a certain extent, you know, the answer is they don't, you know, both at the, at the technical level and the conceptual level, that's sort of the same thing over here, but it's, it, there's still a lot of open questions around all this stuff. I think that Lenz's proof of concept library is doing some very specific hacks that only work with Next in terms of how it's able to serialize and stream data onto the client. [24:44]

One thing I know when said is you wouldn't want to mix and match fetching data on the server and fetching the same piece of data on the client. It's like it either needs to be done via a server component or it needs to be fetched on the client, but you wouldn't do both for the same piece of data at the same time. [25:04]

The short answer is no one knows what we're doing, we're all trying to figure it out, and there's a lot of open questions. [25:09]

**Carl Vitullo:** Yeah. I mean, how does, when people ask, &quot;how do these things fit together,&quot; I think like everyone is still figuring that out because Server Components are such a brand new concept. But you know, there, there's so many different types of server interactions. [25:23]

Like when you're first loading a page, like the data that you need is like, you need to do an auth handshake. Like, do you already have a valid token? You need to load the user settings data, you know, which is my, in my experience, there's like JSON blob for the user that contains, like, do they prefer dark mode, what feature flags are enabled for them? There's, you know, whatever data is initially necessary to render for the page. [25:47]

Then, okay, sure. All of that stuff's loaded. The page is rendered. They're clicking around. Then they need to, you know, they scroll down on Reddit and they need to load more content. Or they submit, they click an upvote button and they need to send something back. Like, all of these are different. [26:03]

Fundamentally, they are server interactions, like an HTTP request is made, A response is sent, whether that's JSON or HTML or whatever. So like superficially, they're all server interactions, but like categorically, like semantically for the user, for the app, they all have very different constraints associated with them. [26:24]

And so like React Server Components very helpful for the first set of those things. Like as you're hydrating, as you're rendering the first HTML that the user will see and interact with, I absolutely understand how Server Components interact with that category of data fetching. But then like the, you know, then there is still the client side mode, like the, if you're doing an infinite scroll interaction, like there is no, the server has nothing to do with that. [26:51]

The server doesn't even know where on the page you are. It has no way of observing that. So that is purely a client side interaction. So, yeah, I, I don't know. I feel like where does this fit in? It is it, it's new. It's, it's a new space. You know, it replaces some of the data fetch, but it doesn't replace everything. [27:11]

**Mark Erikson:** Uh, and another couple examples I think Lenz was pointing to was that Server Components are kind of limited in the sense that it's, it's another way to pass down props to client components. You know, like Apollo has this very powerful normalized cache, so if you like it, it keeps track of items by type and by ID so that it's only re fetching, you know, like the, the three missing to-dos you haven't grabbed out of the 100 that you already have already. [27:41]

And I don't think Server Components can necessarily help with the normalized data use case, and I don't think they can help with the ongoing push subscription use case either. [27:53]

**Sebastien Lorber:** And I think one of the case that Dominik presented was, for the infinite scroll. The idea, for example, was the server component would render, the, the first part of the, the infinite call, maybe the first page and the React Query would be able to kick in later. [28:11]

And you would use React Query for the, for the upcoming page, the, the second page, the third page, and things like that. [28:18]

**Mark Erikson:** Yeah. So a lot of things to be figured out here. Yeah. [28:22]

**Carl Vitullo:** Yeah, definitely. Cool. Sebastian, do you have another link? [28:25]

## Expo Router v2

- [Write Once, Route Everywhere: File System-based Navigation for Native Apps](https://www.youtube.com/watch?v=608r8etX_cg)

**Sebastien Lorber:** Uh, maybe I can just give some little news about the other things that happen that React Native conferences because I know that you won't cover much React Native. [28:36]

Maybe the most important one is the announcement of Expo Router version two. And I think it's important because it shows that actually the using Expo and React Native. For the web is becoming something that is quite serious. I mean, the first version was somehow like a Create React App, but using Ative for creating a website. [28:58]

So it was not so great. It was working because you were able to create an application with React Native and published on the web, but as it was only clientside routing, it was a bit limited and you couldn't really use it for many use case, for example, when you need SEO and anything like that. And clearly the, the Expo Router is progressing to making this much more production ready making less compromises when you create a web application using Expo. [29:31]

For example, this new version will have static routes, so you will be able to pregenerate a static website from your Expo app that you can publish on Netlify or Vercel or, whatever. There are also features that are interesting. For example, universal linking, which means that you use the, the URL forwarding on the mobile app. And this gives a lot of interesting benefits, like the ability to seamlessly transition from your web app to your mobile app and to have universal links. [30:00]

For example, you, you tap a link on an email that you receive on, on mobile and we, it'll open the mobile app if you have it installed, or it'll open the website if you don't have it installed. And there are other things that maybe I should just keep it simple. Expo Router is bringing maybe a, a good experience for the developing website using React Native technologies. [30:25]

And I think it's important because we, we want a shortcut, and I think it's exciting and maybe eventually Expo will catch up on the web with other frameworks and provide more and more features and I don't know, maybe compared with NextJS, someday, I hope it'll be the case. [30:41]

**Carl Vitullo:** Yeah, interesting. [30:43]

My experience with trying to do things and React Native has been the story around navigation is so confusing and different from what I'm used to on the web. You know, like the React promise of &quot;learn once write anywhere&quot; has not been true so far in my experience. Just because the fundamental, the, the base assumptions on mobile for, how do you navigate within the application are so, so different. It, it is learning a brand new context and so it's not learned once I, I do have to learn twice. Yeah. Hmm. [31:15]

Seeing some file system based navigation show up in React Native, anything that brings the experience of navigation on React Native to something more familiar for Web concepts. I'm excited to see that. That makes, that makes a lot of sense. It seems like a big improvement. [31:31]

**Sebastien Lorber:** Yeah. It's not easy to master the navigation in React Native in the beginning. [31:36]

And I think for example, if you look at Expo Router, there are some conventions or things that are not exactly the same as in NextJS because maybe, you know, when you, you target all the platforms, you, you need to think about a few things that NextJS doesn't have to, to think about because As they only target the web they only need to to create conventions that work on the web. [31:58]

But maybe Expo Router needs to, to find some abstractions that work for free platforms instead of just one (chuckles). [32:06]

**Carl Vitullo:** Yeah, for sure. [32:07]

## Improving Performance with HTTP Streaming

- [Improving Performance with HTTP Streaming](https://medium.com/airbnb-engineering/improving-performance-with-http-streaming-ba9e72c66408)

**Carl Vitullo:** I'll, kick us off with our next link. This is, so this is a, a blog post from Airbnb engineering. Airbnb has a history of releasing some pretty influential blog posts on their engineering practices. I know esp, especially in the context of React Native, the Airbnb blog post of, &quot;we're moving away from React Native,&quot; uh, still has, I think they wrote that like six years ago and it still has echoes on the ecosystem. [32:33]

But yeah, so they, they, I saw this, you know, improving performance with HDP streaming and it's not directly about React. But I think that the concepts that they're talking about have a lot of overlap with React Server Components because ultimately, you know, the goal for React Server Components is improving first load performance. And so this is one example of a first load performance improvement that can be done entirely in isolation from React and even from JavaScript. [33:02]

Like everything they talk about is an HTML level optimization. But it's also, it's a good background reader on things like network waterfalls, early flush talks about sequencing of loading assets, which I, I think it's, these are things that I had to learn on sort of by trial and error, just sort of realizing like, &quot;Ooh, this has gone badly and I need to figure out how to make it better.&quot; [33:25]

And in researching those things, learned a lot of the concepts that are discussed here. So I, I thought this was a really good framing for sort of a background reader on concepts that will be very important to understand as code that takes advantage of React Server Components is being written. [33:43]

Cool. And I guess that's all we gotta say on it (laughter). Yep. Cool. Mark, what do you got? [33:50]

## React Canary Releases

- [React Canaries: Enabling Incremental Feature Rollout Outside Meta](https://react.dev/blog/2023/05/03/react-canaries)

**Mark Erikson:** So the, the React team put up a blog post announcing what they're calling Canary version releases of React. So historically the React team has primarily delivered React as your standard semantic versioning releases. [34:05]

So 18.0 major, 18.1 minor, 18.2 minor. And they've also had an experimental channel, which as the post points out, they'd also referred to as their &quot;next&quot; channel which were just daily experimental daily builds of React, which. In addition to being built every day, also had a bunch of feature flags turned on so that work in progress, experimental features were included. [34:34]

And we've actually been using an experimental build of React at my day job Replay, for a long time now because we've been doing some things with like React suspense in our code base, and those relied on methods that only existed in the experimental builds, not in the public, like 18.1. 18.2 builds. [34:54]

And if you were to go look at NextJS, my understanding is that they have been shipping specific ver like pre-release versions of React with Next for a while now, in order to also make use of some of these not yet final features, and this is actually bringing up a problem for a couple reasons. [35:18]

One is that there's a lot of confusions about what features are actually ready for, for production use. Another is that, you know, you see some people complaining that, well, you know, Next is getting kinda like an unfair advantage in being able to use these features. And third, like it's, it's actually been like a year since React 18.2 came out and we, we, I actually have no idea when 18.3 will even be released. [35:44]

So with this blog post, the React team is announcing that they're going to start releasing a series of canary builds, which are somewhere between like a daily, just whatever is at the tip of, of main build and an official public semantic version in release. So that Canary builds will have these experimental features turned on. [36:08]

And they will actually say ahead of time, here's which ones are basically stable or not. And they're actually encouraging frameworks and, and other packages to try out these features and even say, and even go ahead and use them for real, but to like pin what version you're using to a specific canary release. Not just like whatever one is, is the most recent. [36:33]

And the comment is that sometimes they work for a long time on some of these features and sometimes a bunch of these features overlap and they, they might even be ready before the React team decides to make a new official semantic version of your release. [36:48]

So it, it's good because it's kind of making that like, here's here's some of the work in progress stuff available in a somewhat more official way. It's also really confusing because. It's hard to keep track of what pieces are actually ready or not. And there's, there's a couple examples of this. So like, eight months or a year ago, the React team published an RFC where they announced there was gonna be a new hook called use, which was, it would let you actually kinda like unwrap and await a promise in a, in like a client component. [37:21]

And that RFC was published and there were a lot of comments mostly complaining about the name. And the RFC said there will be a follow up RFC talking about some kind of new caching capability. And like, there's been nothing published about it since then. And frankly, we, like we library maintainers roll, like, &quot;uh, is this thing dead or what?&quot; [37:42]

But apparently it's already like shipped and being used in production in Next 13.4. And so there's a lot of confusion about like, what is the status of these features? So hopefully the Canary builds will ha help make it a little clearer when these features are ready to actually try out. I've also had some discussions with React team members saying like, it would be really helpful if there was like a public list of what features the React team is working on and what their current status is. [38:11]

Kind of similar to how TC 39 develops new JavaScript features. Like is it, stage zero, we have an idea. Stage one, proof of concept. Stage two, it mostly works. Stage three, it's almost ready. Stage four, done. Something like that would really be helpful for the community to understand things, but at least these canary builds are a step in the right direction where it's like a little more ready to try out. [38:35]

**Carl Vitullo:** It's interesting that there's been that much confusion from library maintainers around, really like, what's part of React. I'm a little surprised to hear that that's been a point of confusion because that, that really does seem like a very, very important for both the React team and for library maintainers to both have a shared understanding of, and the core team has definitely been very vocal about being interested in soliciting feedback from and being in dialogue with library maintainers. [39:04]

So that seems like a relatively large communications miss on something that they have talked about being very interested in doing well. [39:11]

**Mark Erikson:** Yeah, and I, I had some in-person conversations with Eli and Lily from the React team at a couple different conferences. It was, it was almost like they were trying to do a listening tour. [39:22]

Like, let's go out, talk, talk to folks in the community, get the pulse of what's going on, hear people's complaints and, and see what we can do about it. I definitely want to give 'em credit for how willing they were to listen to things. I'm hopeful that some of these ideas, like, could you give us like a, a status page of the features and stuff like that will come out of some of those discussions? [39:44]

**Carl Vitullo:** I like the point you made about using TC 39 as a model perhaps, because I think that that framework for feature prioritization and, you know, communicating what's under consideration. I think that that did come about for similar reasons where there were a lot of stakeholders, there were a lot of interested parties who wanted to advance the state of the web in the case of TC 39, the web and JavaScript, well, I guess JavaScript specifically for TC 39, but there were a lot of people who were interested in having a seat at the table, and so they figured out, they put together that mode of communication. [40:21]

And it's, it seems like React is now in a similar place where it occupies a very foundational place in the web ecosystem. You know, it's certainly not as broad as JavaScript does. It's inherently, well, I was gonna say, it's inherently a subset of JavaScript, but you know, I guess with React Native, it kind of, isn't it, it does go a little broader than web and JavaScript, which is interesting. [40:44]

But yeah. You know, maybe that is, maybe that is a model that they could look towards and yeah, I guess if they're doing a listening tour right now, I'll be curious to see what they come back to the community with over the Next couple of months. [40:57]

**Sebastien Lorber:** Yeah. Well, something I found interesting is that, for example in, in the experimental builds of React that NextJS is using, there, there are two new hooks called useOptimistic and useFormStatus that permits to the Server Actions. [41:12]

And they actually are documented in the NextJS documentation, but they are not on the official React documentation. So you, you have to go to the NextJS documentation to, to read more about them. [41:26]

**Mark Erikson:** Yeah. Th this, this was one of the points I specifically brought up, even, even at the uh, React Summit conference a a couple days ago. [41:31]

It's like, I, I realize that, like Dan has, 70 to 80% of this stuff is quote unquote &quot;React&quot;. You know, like that, you know, `action={someFunction}` thing is built into React. It's not a Next specific feature, but that also means that there really ought to be information in the React docs about a lot of this stuff. [41:55]

And I, I realize the React team has, you know, limited number of people, limited amount resources, they, and a lot of the stuff is in flight. They can't publish docs on everything right this second, but I would not have expected to look at the Next docs for a React hook specifically. And, and it feels like there is very much a gap in confusion about some of that right now. [42:17]

**Sebastien Lorber:** Yeah. But I think, for Docusaurus, we have been using Canary release, and it's a nice way for them to get feedback from the NextJS team before presenting things publicly to broader audience. So for Docusaurus it has, it has been great to be in beta for long because at, at that time, lots of people were adopting the, the betters of Docusaurus and I was able to get a lot of feedback on, you, you merge a pull request and then one week after you already get feedback on it, even if there is no public release, because people get used to, to using Canary version of your project. [42:57]

And I think also integrating a canary in NextJS like that permits to somehow give the, the new React versions to a broader audience. But we weren't necessarily exposing all the new APIs at once because they're hidden behind abstractions, for example, maybe there are some React APIs that NextJS is using today, but they're not they're not exposed to the, to the users of NextJS app router because they're only used internally inside the inside NextJS [43:31]

**Carl Vitullo:** I think you're right, Mark, about it being unexpected to go to the Next documentation to read something about a beta React hook. I'm sure that there's all sorts of reasons why that was the, you know, most straightforward, most obvious place to put that information. [43:47]

Like, you know, if, if Next is the only place where you can use this right now, I could see why it makes intuitive, logical sense to put that information in those docs. But, given that there has been a lot of confusion and uncertainty and handwringing over the relationship between the React core team and Next specifically, you know, that seems like the sort of communication, I was gonna say communication gap, but maybe not a gap so much as just sending some more signal than you intended. [44:18]

The words they're saying is Next does not have special treatment, but. If Next, if you know the beta features are coming out, are being documented from Next first, and actually not even first from Next only at the moment, then that certainly seems to undercut the words of the message, if nothing else. [44:38]

Yeah. Interesting. [44:39]

**Sebastien Lorber:** And something I just thought about it, but if you look at the Remix team somehow, I, I feel the communication is completely different and the way they approach adding new features has been different in the past. For example they added things in Remix first and then they're trying to backward things to React Router while on for React and NextJS, I think it's a bit the opposite. [45:04]

They try to, to build the abstraction first on, on the React side and then use it on NextJS to dog food. But the, the abstractions on React are working rocky, but maybe this new should be first introduced in NextJS, and if this works great for NextJS users, they could backward them to, to React too. [45:26]

**Carl Vitullo:** Oh, oh, interesting. I see what you're saying. Yeah. That's an interesting thought too. Just sort of a, yeah, we're getting into all the subtleties of PR and comms and API design. All the intersection of marketing and development and developer relations. Yeah. Interesting. [45:42]

**Mark Erikson:** May, maybe, maybe some of the the Next tech writers should actually be filing PRs against the React core docs instead. [45:49]

**Carl Vitullo:** Ooh, ooh. Interesting. Gauntlet thrown (laughs). [45:53]

Cool. Should we go onto the lightning round? [45:55]

**Mark Erikson:** Yep. [45:56]

## Lightning round

### Client-side rendering of HTML and interactivity

- [Client-side rendering of HTML and interactivity](https://web.dev/client-side-rendering-of-html-and-interactivity/)

**Carl Vitullo:** Perfect. Client side rendering of HTML and interactivity, a new post on the web.dev from Google. [46:04]

Uh, it's pretty similar in theme to my, you know, my last link from Airbnb, improving performance with HTTP streaming. Just, I think it has a lot of information about good foundational concepts that will help people be more prepared for writing code when React Server Components are more broadly available. [46:21]

Yeah, Mark? [46:22]

### React Summit, Debugging JavaScript

- [React Summit](https://reactsummit.com/)
- [Debugging JavaScript](https://portal.gitnation.org/contents/debugging-js)

**Mark Erikson:** Last week I got to go to React Summit. I actually spoke there in the morning, I gave a talk about debugging JavaScript. Honestly, I only saw one other talk, and that's because I spent the rest of the time having discussions with both other speakers and people. But it was a huge conference. [46:36]

It seemed very successful. A lot of atte, a lot of attendees, a lot of great discussions, and I personally had an amazing time getting to meet people. So it was great. [46:48]

### Debugging in React Native

- [Debugging should be easier | App.js Conf 2023](https://www.youtube.com/watch?v=sRLunWEzwHI)

**Sebastien Lorber:** Just a quick mention that debugging in React Native should become easier in the future. It has always been somewhat difficult in the past. Over time there were a lot of different ways to debug in React Native. And none of the methodologies was perfect. [47:05]

And notably you, you could connect your Chrome Debugger to the, to the mobile application and it didn't work so great. For example, you couldn't get the, the network tab to work correctly. And now it, it's going to, to work a bit better in the future, thanks to the work of Expo. [47:23]

### React From Another Dimension

- [React from Another Dimension by Dan Abramov at RemixConf 2023](https://www.youtube.com/watch?v=zMf_xeGPn6s)

**Mark Erikson:** So Dan Abramov did a talk at Remix Conf a couple weeks ago entitled &quot;React From Another Dimension.&quot; And it was sort of a couple different points trying to be made. The pitch of the talk was. What if React originally only worked on the server and not on the client, and he actually did a demo where he used like IE6 in a, in like a Windows XP virtual machine and proceeded to build, build out a nifty little like 1990s style webpage and slowly add server-based interactivity to it before he ever actually finally added anything on the client side. [48:01]

And part of it in a sense was this is a pitch for, here's a mental model for how React Server Components work, but it was also a very interesting talk and like alternate history universe, kind of an example. [48:14]

### Server-side rendering React in OCaml

- [Server-side rendering React in OCaml](https://sancho.dev/blog/server-side-rendering-react-in-ocaml)

**Sebastien Lorber:** One link that I found particularly interesting was the, someone posted about creating server side rendering in React. But using OCaml for the server. So somehow they re-implemented the React server rendering in OCaml and um, it's exactly the same, but it doesn't support the, all, all the new things like React Server Components only rendering to string and actually it significantly improved the performance. [48:43]

So I think it's interesting because for example, if you are using OCaml like uh, ReasonML for your application, if you decide to run your server side, your React server in the native language, OCaml, then uh, you can get a much better performance for free because you are using a language that is faster of than NextJS and uh, and things like that. [49:05]

So I thought the idea is interesting and I think it's the first language that I see supporting server rendering of a React application in in another language than JavaScript. [49:17]

### Several links on React rendering

- [The Interactive Guide to Rendering in React](https://ui.dev/why-react-renders)
- [The Journey of the React Component](https://alexsidorenko.com/react-journey)
- [React reconciliation: how it works and why should we care](https://www.developerway.com/posts/reconciliation-in-react)
- [A (Mostly) Complete Guide to React Rendering Behavior](https://blog.isquaredsoftware.com/2020/05/blogged-answers-a-mostly-complete-guide-to-react-rendering-behavior/)

**Mark Erikson:** One of the biggest problems I see that confuses people with React is that they, they don't have a good grasp on the mental model. [49:25]

Like they have the basic idea of components and rendering, but a lot of the real world aspects of how that works confuses them. And there were three really good articles in the newsletter within the last couple weeks that all tackle this idea of how does React rendering work from a different aspect. [49:44]

There was one called The Interactive Guide to Rendering and React from Tyler McGinnis and ui.dev folks. There was a journey of a React component by Alex Sidorenko, who has a great blog post series called A Visual Guide to React Rendering. And then there was an article on React Reconciliation, how it works and why We Should Care by Nadia Makarevich, who has also had a couple previously good posts. [50:07]

They all tackle, you know, some of the same concepts but from different angles. But it's really good information and I think a lot of people would benefit from kinda like going back and reviewing some of those basics to make sure they understand 'em. And then along those lines, I will also toss in my own guide to React Rendering Behavior post as well. [50:27]

**Carl Vitullo:** You gotta, sounds super useful. I love hearing multiple perspectives on the same concept. Super useful. Cool. Sebastian, you got any more? [50:36]

### Spatial Navigation

- [TV Spatial Navigation](https://engineering.atspotify.com/2023/05/tv-spatial-navigation/)

**Sebastien Lorber:** So my last link is about a post of Spotify and implementing TV spatial navigation. So the idea that you use your remote control with the arrow up, down, left, right, and things like that, and you should be able to navigate inside the ui. [50:53]

And the thing is, there is no web standard to, to support this in in the web. So they had to reimplement this themselves by keeping the element that you can navigate to in memory. And I found it, it is a bit interesting because it's quite, unusual topic and I, I see more and more companies doing this. [51:16]

Uh, I know someone two, two persons working at two French companies do doing that also for TV applications. Um, some are web applications, some are React Native applications. And recently we had a talk at React Native connection in Paris about the same subject. So this is basically every time someone needs to create a TV application for using React technology, they do something like this. [51:45]

So if you need to build something for the TV someday maybe it's worth taking a look at. [51:52]

**Mark Erikson:** That's cool. [51:53]

**Carl Vitullo:** Yeah, I think it's also, like, sure, TV, It also reminds me of video game UIs, where you've got a dpad or a joystick. But I think it's also a very powerful accessibility tool. You know, like keyboard navigation is so important. [52:07]

If you, you know, for people who are poorly cited or mobility limited or you know, yada, yada, all sorts of situations where that can be valuable. And yeah, I mean, I, I think that's a really, I think that's a really interesting read to see how people solve that problem. Because if you wanna provide powerful keyboard navigation in a web context, it's not easy. [52:27]

Like, what are you gonna do? Tab index? (laughs) [52:31]

**Sebastien Lorber:** Yeah. No, they, they keep the, the limits in memory. But this is funny because the solution from Spotify and the solution that was recently presented at the React Native Conference were different. For example, I think I remember Spotify is using geometry and trying to figure out which, somehow they, they use maybe APIs like getBoundingClientRect or something to get the positions of the elements on the screen. [52:58]

While the, the other company in France that presented the React Native solution was using somehow recreating a tree, a React tree inside memory so that you know, which are the, the previous and the Next element, but not considering the, the placement on the screen. So it was quite different UX in the end, but uh, the solutions were quite similar. It's just the algorithm to navigate that was different. [53:24]

## Closing

**Carl Vitullo:** Cool. Mark you have any other like lightning round links? [53:27]

**Mark Erikson:** I think we're out, out of, out of items at this point. [53:29]

**Carl Vitullo:** Out of items. Well good cuz we are well over an hour at this point. [53:33]

**Mark Erikson:** Way over time. [53:35]

**Carl Vitullo:** Yeah, that's okay. We had a good time. [53:39]

Cool. All right. [53:40]

Well thank you so much. Thanks for joining us. Thanks for having in the audience for sticking us with us through May in React. All right, Mark, Sebastian, thanks so much for coming up. [53:51]

**Mark Erikson:** Always. [53:52]

**Sebastien Lorber:** Thank you. [53:53]

**Carl Vitullo:** Talk to you guys later.
