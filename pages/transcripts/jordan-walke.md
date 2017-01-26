---
title: Jordan Walke
date: January 26, 2017
---
## Facebook Engineer | Creator of [React.js](https://facebook.github.io/react/) & [Reason](https://facebook.github.io/reason/)

**Q:** What are your thoughts on Elm? - granmoe

**A:** I like what I've seen about Elm, and I often recommend it to people looking for a really great developer experience that opens their minds to functional programming. I don't have any experience with Elm's abstractions for building UIs/apps though. I hope that projects like ReactNative can greatly shorten the amount of time that is required for other languages like Elm to support mobile application development.

---

**Q:** Are there plans for bringing React.js and React Native closer to each other? (i.e. for sharing components between mobile and web) - juhasuni

**A:** Thanks for the question, and this is going to be a long answer.

I should start by saying that this answer is entirely from the perspective of mobile web development and mobile app development. Desktop is an entirely different matter.

I'm going to be a little more blunt, and try to avoid hedging my words about how I feel about the web, and with that carries an increased probability that I say something wrong.

I hope that there are plans for further unifying React Native and React for mobile web. At any given time there's a handful of people (either at Facebook, or other companies/startups) exploring ways to bring RN style mobile app development to the web, and ReactNative seems like a great place to start.  One of the things that I'm happy to see, is people implementing ReactNative UI interactions in the same language/runtime that React runs in.  That means that sharing more of the code with the web is possible (along with there being many other benefits such as push safety, sharing between multiple native platforms, sharing on Exponent).

There are some difficult challenges with bringing true mobile app development to the web and since I consider React Native development to fulfill the spirit of true app development, it will face those same challenges.

That ability to write a custom gesture handler, or a custom animation, and control every frame of movement on the screen is part of what I believe constitutes the spirit of app development - or at least as developers think about it today. React developers get to realize that today with React Native!

It's not good enough to have to wait three years for browsers to implement some canned interaction/animation (such as a swipeable carousel).

People without experience in platform app development often have the wrong idea - that platforms give you every platform view and interaction and expect you to use it as-is out of the box.  It's not the case. Especially on iOS, the platform often gives you the ability to peal back the layers of abstraction and customize views and interactions at a fairly deep level. App platforms give us the ability to implement whatever interactions we need, in user space, with great performance today, not years from now. The web, and key people who are responsible for the advancement of the web as an "application platform" stand in opposition to this philosophy of building mobile apps on the web. This description of the landscape might upset some people, but I'm simply reiterating points and adopting terminology from people who actually build the apps that ship, and choose not to use web technologies for the reasons I mentioned.

These challenges shouldn't discourage us from unifying React Native and React for mobile web - if anything, it means we should be trying even harder to unify the two before this endangered category of developers who see the potential of the web as a true customizable application platform, finally give up.

The web doesn't need a new canned native carousel widget. The web needs the ability for us to implement every last pixel of that carousel interaction at the library level, and with great performance. Whatever is standing in the way of that happening - browsers need to fix it or else the web will be even further relegated to static document viewers.

---

**Q:** Do you use React day-to-day? - vcarl

**A:** Not much in the last year, since I started diving deeper into language tooling. I am now working my way back up the stack and have resumed using React through that new language tooling. I expect to use it more in the next six months.

---

**Q:** How did you come up with the idea on React? Was it directly inspired by other technologies? Did you try other approaches first which never went public? - Panen

**A:** Even as I was first learning how to program, the old MVC style of programming with data binding and mutation just never felt right to me, even when I didn't have the technical terminology to describe things like "mutation", or "functional programming". I would find myself structuring my code as much as possible in the (now) React pattern, even in my very first UI programs.

My code would usually look really weird to other people that I was working with because it was typically the only code in the codebase that that looked like React does today - it didn't help that there weren't any frameworks available to help build within the React pattern. For the longest time I just assumed "welp, I guess I'm just a weird programmer". Then I finally took a course on programming language fundamentals (which used ML (SML) for much of the coursework) and I finally had some basic terminology to be able describe how I wanted to build applications. I also learned that the style of programming that I gravitated towards was neither weird, nor new and actually closer to some of the oldest philosophies of programming languages - philosophies which hadn't ever become mainstream - philosophies that the industry had spent upwards of twenty years undermining (in my opinion, to their disadvantage).

So I continued to explore framework-izing these ideas, and I had implemented several iterations of what eventually became React, in a few languages - one of the first explorations began as a rough implementation of the reconciler and component model in Standard ML (CreateClass was a "module function"). This was really great because SML embraces immutability by default which is natural when building React style components. We naturally wanted to deploy UI to web browsers, and at the time, the compile-to-JS landscape was not as mature as it is now - I don't even think source maps existed yet. So it made sense to port that exploration to JavaScript and continue on from there.  I also incorporated a lot of the ideas that I really liked about other UI frameworks which we were using at the time. The use case for "refs" originated in another framework which we were using called "Bolt" for example. I had also put the foundation in place, to ensure that React components could be server rendered - and that feature was more so inspired by demand and constraints at the time than any specific technology.

One thing I noticed that when people were creating point to point bindings in their more traditional "MVC" app structure, it would almost always end up requiring "computable" bindings which invoke a function anytime a mutable cell had received a "change event". All these "computable bindings" ended up chaining together and small changes would end up causing large recomputation of the majority of the UI. I realized that functions already do transform inputs into outputs, and if we could just find a way to reinvoke those functions repeatedly, and quickly enough, that we could be much more expressive and concise, at not much more performance cost that the chain reaction that "computed bindings" would result in anyways.

To finally answer your question: yes React was inspired by many other technologies including other UI frameworks which we had been using at the time. More than anything, React was inspired by the ML family of languages (including SML/OCaml) which helped me articulate the  value (no pun intended) of immutability.

Creating and pushing for the first version of something like React definitely takes a certain ability to discern and ignore FUD when you see it, but ultimately ideas are cheap, and creating an initial version of something is definitely the easiest part. The "idea" of React by itself, doesn't explain why React has become the phenomenon that it has. I believe the culture and energy of the React community is the reason for React's massive success.

---

**Q:** Why is ReasonML the future of web development in general and React specifically?(edited) - kylemathews

**A:** Some context for others who aren't caught up to speed: ReasonML is a new language toolchain that we are working on within a small group of open source community members - many of then being members of the React community. Reason provides a friendlier, more familiar interface to the OCaml compiler, which is a great, statically typed, high-performance compiler. We enjoy compiling to JavaScript via BuckleScript (and sometimes jsoo) and also target native binaries.

It's very difficult to predict the future, and so the best we can do is just identify significantly better ways to build applications, and invest in those approaches. ReasonML addresses the biggest problems that I've observed in building UI applications over the last five years, and opens up a language/compiler toolchain that is incredibly well suited to React's model of rendering UI. Reason allows us to use OCaml's very fast allocator and collector in order to render large trees of UI rapidly, and also provides a canonical type system that all libraries can interop together with. At the language level, it has features that we've previously had to bolt on top of the JavaScript such as allocation-less named arguments, prop types, and more.  In short, it is the best way to take React to the next level - unlocking far better user experiences and fast-loading applications, and because it compiles to idiomatic JavaScript (that's important), it allows us to incrementally move towards that goal from where we stand today. We are already running ReasonML on top of ReactJS today, in production.

---

**Q:** What do you use for state management in your own projects Redux, mobX or something else? - urbanvikingr

**A:** It depends on the project, but I have a high tolerance for passing props down the hierarchy explicitly, so it takes me a while before I reach for something more involved. I've worked on React apps at Facebook that use Relay to query the server, and I've also built UIs that use immutable data structures as the primary abstraction for storing and sharing data. I understand that these approaches don't work for all applications, and one of things I like most about the React community is that there's always new ideas/proposals for how to structure your app.

---

**Q:** How closely have you been involved in React over the past 2 or so years? What do you think of React now vs how you originally envisioned it? - vcarl

**A:** The last React application that I collaborated on was the mobile ads manager, and then after that I began to build a prototype for a frame rationing reconciler (providing framework level concurrency) and incremental renderer, where lists of components can be returned from render.  I'm happy to see some of those ideas get reimplemented in the upcoming Fiber core of React, in addition to many other features which I had not prototyped such as portals. To answer your second question, Fiber makes me happy.

I still think that there's so many unanswered questions about how we build UI, and we could use React to find many of the answers. For example, how do we integrate layout so that Flexbox can be be implemented in user space and customized at the component level, as part of the reconciliation process? How can we effectively use the increasing number of CPU cores in mobile devices? Do algebraic effects (continuations) radically simplify other abstractions such as "context"? Is there a way to unify animations, layout, and React reconciling?

---

**Q:** When you designed react what were your thoughts on server side rendering for web apps and do you feel they (server side rendered web apps) have a place in industry today. - Macdja38

**A:** This is a really great question. At the time, JavaScript was not an accepted way to build web applications. The majority of developers were still stuck rendering UI on the server, and JavaScript was actively discouraged as a means of building apps. I felt like I had to build in the ability for React to render server side at the very least, to pacify concerns about client side JavaScript performance. Knowing that we had the ability to render on the server if we ever needed it, was really helpful in selling the idea of React. Some people still use server side rendering and appreciate the performance wins of initial page load on cold caches. I'm sure that some people use server side rendering and don't benefit from it, and I'm sure there's some people that don't use server side rendering, but would benefit from it. It is becoming less important as browsers improve parse time, resource caching, and JS execution speed (we really need a JIT-less path for initial load and Chrome is adding such a thing), but it still might be a while before we should completely throw out the idea of server rendering. It seems to be useful today for many people.

---

**Q:** Could you talk about your thoughts on how you see Javascript in the next 1, 5 and 10 years? - quicksnap

**A:** This one is difficult to answer. I'll give a highly speculative reply - which seems better than giving a hedgy non-answer.

It's really hard to say what JavaScript will look like in even five years, but it's useful to break JavaScript into two parts - the language you author code in, and the Virtual Machine you deploy code to.

If anyone is still surprised that those two things would be separate, then I'd say that illustrates what I believe will be the biggest thing to happen in the next five years, or even the next one year.

I should also mention that I don't really watch the evolution of JavaScript as an authoring language very closely, aside from a couple of key proposals / technologies that I'm interested in. For my use cases, I'm primarily interested in JavaScript as a compilation / deployment target (still, a very important one). I don't have strong opinions about what happens at the language or VM level, as long as those language features make it easier for ahead of time compiled languages to make full use of compile-time guarantees, while ideally integrating seamlessly with idiomatic JavaScript.

Many ask "why should I write in a statically typed language and compile/deploy it to JavaScript?" I can come up with many good answers to why you should or shouldn't use a compile-to-JS language, but I like to answer back with another question: "Why should you use JavaScript to deploy JavaScript?"

With JavaScript compilation targets improving rapidly, JavaScript as an authoring language is not a prerequisite for JavaScript deployments. Most people likely have good reasons to author in JavaScript, but everyone should definitely ask themselves what those reasons are and ensure that they're actually well-founded.

It's also not as simple as "either compiling to JS or not compiling to JS".  Not all compile-to-JS approaches are equivalent, and it's not as simple as picking your favorite language and assuming you'll be able to be productive while compiling it to JavaScript, because some languages are just inherently more difficult to compile to JavaScript without sacrificing great runtime performance, and without leaking memory at the boundaries. I am certain that some languages compile to JavaScript rather seamlessly, which is one of the ... reasons ... that I'm working on Reason.

As far as JavaScript, the authoring language is concerned - a total shot in the dark: if I had to guess, I imagine JavaScript will continue the path it has followed in the last several years, towards becoming a loosely typed OCaml (that's a compliment). I imagine it will eventually get something like pattern matching, but to be honest I don't follow closely.

At the VM level, I imagine wasm opening up web deployment to many more languages that cannot easily compile to idiomatic JavaScript. I think this is really good for the health of the web, and good for JavaScript the VM. I don't anticipate that it affects JavaScript developers for the forseeable future, but there are many developers who are not JavaScript developers believe it or not! I hope to see wasm provide more viable deployment options for them within the year, even.

If anyone disagrees that JavaScript is becoming a loosely typed OCaml, you are not allowed to use any of those OCaml-y features that JavaScript gets in the future. I will lurk on your Github diffs to make sure of this.

---

**Q:** How does React design relate to previous work on Component and Event based systems, like VisualBasic, which Timers and DataSources were also treated as components? Were they a source of inspiration for concepts? - derekstavis

**A:** Sorry, but I don't have enough context to answer this. I don't know anything about those technologies. Components as timers sounds cool.

---

**Q:** What's the better way to learn and write a React Renderer not targeted for the DOM? - derekstavis

**A:** I wish I could answer that question better, but Sebastian M is the right person to ask right now, and the answer is likely changing with the introduction of Fiber!

---

**Q:** How do you expect to continue improving performance in the future? Do you feel you've capped out on what is possible within the browser / Javascript? (Or that trueadm has with Inferno, since you guys seem to have hired him)(edited)- Ron Jeremy

**A:** It's a great question. React is only (half?) of the CPU time. Even if we make React faster, application code is still going to have to execute, and the best way to greatly improve load time or execution time, is at the language level - across the board, for React and the apps build on top of React, which is why I'm working on Reason. The same kind of deep, aggressive inlining that we want to do at the component level, could be done across the entire app - using ahead of time compilation.

That being said, there are still some things we can do in React to improve React's portion of that time. Right now we have several redundant trees such as the React component hierarchy, the layout tree, and the platform UI tree. We could get rid of a lot of that redundancy by doing layout on the React hierarchy, and compositing from it (like the mentioned react-canvas). I encourage you all to try out a lot of this stuff.

---

**Q:** If React were to be a framework, not just a library how would it look like? - abdellah

**A:** If I had to guess: React would not be nearly as popular and the community would not be as energetic . In a sense, the community fulfills the role of the framework.
