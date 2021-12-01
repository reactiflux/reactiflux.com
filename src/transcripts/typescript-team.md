---
title: TypeScript Team @ Microsoft
date: 2019-12-05
time: 1-2pm PT / 8-9pm GMT
location: Q&A Channel Reactiflux
description: "The team from Microsoft working on [TypeScript](https://www.typescriptlang.org/) will be on to answer all your TS related questions! TypeScript is a typed superset of JavaScript that compiles to plain JavaScript."
people: "[Daniel Rosenwasser](https://twitter.com/drosenwasser) (Program Manager), [Ryan Cavanaugh](https://twitter.com/SeaRyanC) (Engineering Lead), [Nathan Shively-Sanders](https://twitter.com/sanders_n) (Compiler Engineer), [Andrew Branch](https://twitter.com/atcb) (Compiler Engineer), [Orta Therox](https://twitter.com/orta) (Compiler Engineer)"
---

## Follow the team

- [@orta](https://twitter.com/orta) (orta)
- [@SeaRyanC](https://twitter.com/SeaRyanC) (SeaRyanC)
- [@sanders_n](https://twitter.com/sanders_n) (shivelysanders)
- [@atcb](https://twitter.com/atcb) (Andrew)
- [@drosenwasser](https://twitter.com/drosenwasser) (DanielR)

## Meta

Our roamdap is public BTW, so any questions of the form "When is X happening?" where X is not on the roadmap, the answer is always "When the value proposition justifies putting it next on the schedule".

– SeaRyanC

Final plug - use our discord also! https://discord.gg/typescript - I used Reactiflux to join the JS ecosystem a few years ago, so it's great to give back in these Q&As.

– orta

<a name="introduce-yourselves" href="#introduce-yourselves">#</a> **Q:** Introduce yourselves – JeffBaumgardt

**A:** I'm orta - I'm new to the team, I've been doing a lot of documentation and web infra - https://orta.io/ - https://github.com/microsoft/TypeScript-Website/issues/130.

– orta

Ryan Cavanaugh, long-time engineer of various sorts and now dev lead for the TypeScript team.

– SeaRyanC

I'm Nathan, I've been on the TypeScript team for over 4 years and worked on an internal compiler at Microsoft before that. I work mostly on JS support, JSDoc and Definitely Typed.

– shivelysanders

Hi! I joined the TypeScript team in April of this year. My background prior to that was in web, mostly frontend (especially React 😁).

– Andrew

<a name="some-js-developers" href="#some-js-developers">#</a> **Q:** Some JS developers of the the Web seek a pathway to many language features some consider to be unnatural. Like pipeline operator and partial application. Since we want them sooner than later, what's the plan of a unified plugin system for TypeScript? – Pokute

**A:** We're designing this very, very slowly with the maximum amount of deliberateness, and I think there's no concrete output yet on this front. The main risk here is that we (the TS team) need to be able to add e.g. new kinds of syntax, new kinds of types, etc, and a plugin written for a prior TS version can't possibly know how to handle these sorts of things. So a system needs to work in a way that is extremely agnostic to how TS works internally, but this is sort of in conflict with what plugins generally want to do. You can think about things in terms of tree transforms, which is a reasonable way to go, but then the question is how refactorings work against a synthetic tree that isn't what you actually wrote.

Honestly the fracturing risk is in _allowing_ plugins, not disallowing them! Plugins as imagined by many people would create an infinite number of language variants that lacked interoperability or a shared set of semantics - this is what we really don't want to enable. People can experiment with Babel or other tools if they really want to try adding novel syntax, but we don't feel obligated to provide the capability of typechecking these variants.

– SeaRyanC

As an ex-React Native dev, I would love to see those problems fixed - we've been keeping that in mind when thinking about both the upcoming module resolution changes for node/web, and the compiler plugin infrastructure. Doing it right would take quite a lot of work (it would require many different copies of the type system) but doing it good enough (only one level of resolution - e.g. prioritise android for this tsconfig) is hopefully something the compiler plugin api can support.

– orta

<a name="is-there-any-talk-going-on" href="#is-there-any-talk-going-on">#</a> **Q:** Is there any talk going on about adding types to the ECMA spec? – mwss1996

**A:** @mwss1996 The [TC39][tc39] committee has discussed adding types in the past, but didn't want to include one of the competing type systems, so discussed adding a third type system. That didn't go anywhere.

The committee has also discussed ignoring type annotations and letting them just be syntax, but even that requires some standardisation between compilers.

– shivelysanders

<a name="where-do-you-see-the-future" href="#where-do-you-see-the-future">#</a> **Q:** Where do you see the future of class support going? – mwahahasldjf

**A:** WRT Class support, originally TypeScript had it's own opinion on what classes would look like, but over time that responsibility moved to [TC39][tc39] - now JS users kinda decide what's going on there.

– orta

<a name="why-should-this-type" href="#why-should-this-type">#</a> **Q:** Why should this type be string? Isn't it something bad about TS? – BatReza

```ts
const test = (input: number) => {
    if (input === 0 ){
      return ""
    }
    return null;
  }
}
```

**A:** @BatReza the inferred type is actually `"" | null` not string! This seems correct to me.

– shivelysanders

<a name="i-always-find-it-hard-to" href="#i-always-find-it-hard-to">#</a> **Q:** I always find it hard to figure out some errors on types when you have a really big type signature. A common example I’ve stumbled upon several times is when a type is missing just one attribute, but the error message is huge. What kind of work is being done to improve error messaging on Typescript and keeping to the same subject, what can we do to make sure our types don’t behave with cryptical error messages when used? – dbz

**A:** This is an area of continuous improvement for us, and we're always interested in finding places where we can "special case" more things in a way that's useful. The specific example is a good one; it'd be good if TS could just say "You are missing these one or two properties" in the case where exactly that happens. I don't think we have concrete guidance on how to write types in a way that's more likely to give better error messages; mostly you just have to try things out.

– SeaRyanC

<a name="is-there-a-plan-to-help-the" href="#is-there-a-plan-to-help-the">#</a> **Q:** Is there a plan to help the community around TypeScript grow? What type of help from the community you would require to make TypeScript better? – horacio

**A:** There's been quite a lot work on trying to figure out how to improve the visibility of people doing great work in the community ( https://github.com/microsoft/TypeScript-Website/issues/63 ) - I think it's TS's responsibility to highlight that work and try to grow the community. One thing that I think is interesting is how much overlap the TS community has with others, so we've been doing more work to improve TS docs in other JS communities to make that better. How can you help? Do more cool stuff, make sure we know and if you want to contribute to some of the web infra that's always easy contributions which don't require a compiler degree. 😉

Other ways to contribute-hang out in our discord too! https://discord.gg/typescript

– orta

<a name="whats-the-plan-with-the-unknown" href="#whats-the-plan-with-the-unknown">#</a> **Q:** What's the plan with the `unknown` type? any timeline on when you might support the `in` operator with it? more specifically: https://github.com/microsoft/TypeScript/issues/21732 – lifeiscontent

**A:** We haven't figured a way around a couple of key obstacles:

1. adding properties to a type requires constructing a new type. The narrowing algorithm doesn't create new object types, only (a) throw out items from unions (b) intersect types together. Maybe it could, but it would require careful thought to avoid killing performance.
2. `in` already narrows, in a different way that the issue you linked proposes. We'd have to integrate the two or deprecate the current behaviour.

– shivelysanders

<a name="hi-its-a-pleasure-having-you" href="#hi-its-a-pleasure-having-you">#</a> **Q:** Hi, it's a pleasure having you guys here. Functional Programming is getting popular for us front-end developers. From what I understand, TS uses many OOP concepts. Has there been any talks about whether the TS compiler will adopt concepts from FP? – green_lantern 🪐

**A:** TypeScript's design is largely motivated by existing JS paradigms, and of course JS is a multi-paradigm language. I think you're right that historically TS had more of an OOP slant, but over time we've introduced features that make typing FP patterns way more feasible—tuple types (and being able to represent function rest params as tuples) come immediately to mind. Several of us on the team have experience in and are very sympathetic to FP concepts, and the community in general has had a surge of interest in FP more recently, and I think TS has reflected that shift, and will continue to follow the community on it. (Also, if there are FP patterns you can't express in TS, I'm interested in seeing GH issues on it 😄)

– Andrew

<a name="will-there-be-any-feature-that" href="#will-there-be-any-feature-that">#</a> **Q:** Will there be any feature that differs from vanilla JS on Typescript, or is the plan always to be compatible as it is now? – mwss1996

**A:** Nope! This is a hard line for us and we're not going to do anything where pasting JS into a TS file results in different runtime behavior. I think of this as our core value proposition: You don't have to worry now (or ever) that migration will result in new production bugs appearing in your application.

– SeaRyanC

<a name="re-soundness-what-might" href="#re-soundness-what-might">#</a> **Q:** Re: soundness, what might be coming, and what is off the table? – Schmulik

**A:** We're always looking at where the current soundness holes actually result in bugs in user code or real user pain (trading off against sacrificing completeness). Just due to how JS works, we're never going to have a `--sound` mode, but there are tactical places where the type system can be augmented to catch more problems in practice. Things I'm often thinking about are better ways to indicate co- and contra-variance, `writeonly` (ugh), and whether we could ever make `readonly` influence assignability. I think in practice, "real" unsoundness (observed violations) come up much more often due to incorrect type assertions, so anything that removes a type assertion is a soundness feature in my book -- the lack of `super` constraints on generics being one that seems to end up with assertions or overwide types too often.

– SeaRyanC

<a name="its-been-really-nice-to-see" href="#its-been-really-nice-to-see">#</a> **Q:** It's been really nice to see the TS team help standardizing features (such as the optional chaining - kudos for stage 4!). What's the next one which excites you (apart maybe type annotations ;))? – arcanis

**A:** This is going to sound like I'm trolling you but honestly I'm excited about stable for-in ordering 😂.

(It just reached stage 4 yesterday)

– Andrew

<a name="the-interface-system-is-a" href="#the-interface-system-is-a">#</a> **Q:** The interface system is great for typifying objects transferred over HTTP. However, since interface matching only looks for available properties instead of exactly matching the objects, sometimes it can get verbose to manually destructurize a form values object just to strip a couple of values, or worse, use `delete`. Is it possible to expect a type mechanic to exactly match an interface, or better yet, turn the current interface functionality to being able to extend interfaces? – robotica

**A:** We call that feature exact types, and we're thinking about it but haven't figured out anything concrete on it. (We think about it once a year or so and this last time seemed the most promising ... so make of that what you will.)

I don't understand what you mean by "make current interface functionality to being able to extend interfaces".

– shivelysanders

<a name="will-it-be-possible-to-declare" href="#will-it-be-possible-to-declare">#</a> **Q:** Will it be possible to declare variables as `type variablename` instead of `var/let/const variablename: type`? – neoney

**A:** That will probably never happen - it's an expression level change which changes _javascript_ not the type system - [TC39][tc39] would need to agree to do it I think.

– orta

<a name="what-are-your-thoughts-about-compilation" href="#what-are-your-thoughts-about-compilation">#</a> **Q:** What are your thoughts about compilation performance? Currently I'm using sucrase to skip the type check on compilation time to decrease the time between each compilation... – José Oliveira

**A:** We know that it's gotten progressively worse over 3.x's lifetime and have one dedicated person looking at it right now, plus another helping from time to time. No amazing progress to report yet, though.

Any time you can compile less, do it. So don't feel bad about just emitting without checking if you can get the errors at a different time. And check out the incremental compilation features that _might_ help.

– shivelysanders

<a name="any-plans-for-enabling-strict-mode" href="#any-plans-for-enabling-strict-mode">#</a> **Q:** Any plans for enabling strict mode per file with a special comment? Currently it's quite tough to move over to strict mode if it has not been enabled since the beginning. – Lomant

**A:** It's tricky, because `strict` mode means a lot of things and some of those things don't make sense to treat on a per-file basis (e.g. strict null checks, which fundamentally changes what values in or aren't in a given type). But there are other modes where it's really easily lexically contained (I'm thinking of strict class field initialization, for example) where we're thinking about some kind of per-file pragmas. So you might see something there eventually.

– SeaRyanC

<a name="what-are-your-thoughts-about-associated" href="#what-are-your-thoughts-about-associated">#</a> **Q:** What are your thoughts about associated values for enum cases (like Swift's enums) with regards to TS? it's an extremely handy feature that helps writing better typed code.

I don't completely understand the argument against adding features to TS that do not exist in JS? – bartzy

**A:** Every feature we add to the TypeScript language that isn't erasable is a liability for the team, the JavaScript committee could decide to build something similar but different (like namespaces and what became commonjs/modules, and how [TC39][tc39] decorators are different, and how private fields are different from how they are in TS).

Yeah, I would _LOVE_ that, but that involves making a lot of extra runtime behavior and (to my knowledge) we don't want to expand the features of enums because it's quite possible enums get added to JS.

– orta

<a name="to-each-of-you" href="#to-each-of-you">#</a> **Q:** To each of you: what is your favorite compiler flag, and why? – Levy

**A:** `--checkJs`. Also, are you really Wesley or just somebody who stole his picture?

– shivelysanders

My favorite flag is `-p`.

– SeaRyanC

My favorite flag is easily `--noErrorTruncation`, because, uh, sometimes I write horrifying types and use them wrong and it gives me really long errors that I actually need to read.

– Andrew

My favourite compiler flag is the one I am still struggling to document `noErrorTruncation` - https://typescript-v2-121.ortam.now.sh/tsconfig#noErrorTruncation

– orta

<a name="any-plans-to-allow-type" href="#any-plans-to-allow-type">#</a> **Q:** Any plans to allow type spreading as opposed to intersection? e.g. `type Foo = {...Bar, ...Baz}` – aaronjensen

**A:** I actually wrote that feature long ago, but we decided not to ship it. We have a saying that features start with -1000 points and have to justify their existence, because we'll have to support them forever and make them work with all new features.

Spread types never made it past 0 points:

1. Kind of a niche feature, mainly for React HOCs as far as I know.
2. Intersections (or a clever conditional+mapped type) are almost always close enough.
3. All the example cases we worked through got really, really strict and unusable without the ability (a) have negated types (b) infer negated types.

– shivelysanders

<a name="how-do-i-keep-a-string" href="#how-do-i-keep-a-string">#</a> **Q:** How to I keep a string from widening in this case? https://gist.github.com/lifeiscontent/4fb148c1c4aee9ca50552f0670c5b49f if this is not possible currently, do you have plans to support this kind of use case? – lifeiscontent

**A:** Not sure if I understand enough of the context for what you're looking for, but you can call the function with `"X" as const` to prevent widening in just that case. Also, if the constraint on `AreEqual` is `<T extends string>` it won't widen in the calls you have, but of course that may not be compatible with the actual API you're trying to design/use.

– Andrew

<a name="do-you-have-any-ideas-on-what" href="#do-you-have-any-ideas-on-what">#</a> **Q:** Do you have any ideas on what a migration path from the old decorator spec that TS currently uses to the new one might look like? – snowei ❄

**A:** Realistically, I would not recommend upgrading your decorators. We'll have to keep supporting the old syntax anyway.

– shivelysanders

<a name="did-you-like-working" href="#did-you-like-working">#</a> **Q:** Did you like working with Joe? – neoney

**A:** You mean JS Joe? He hangs out in the compiler channel in the [TypeScript discord](https://discord.gg/typescript), it's cool to see him learning in public.

– orta

<a name="currently-if-you-have-multiple-dependencies" href="#currently-if-you-have-multiple-dependencies">#</a> **Q:** Currently, if you have multiple dependencies that define the same type it fails to compile. For instance both React native and react define the FormData type and if a dependency (like @types/styled-components) depends on both it breaks the whole project. Is there some plan to account for situations like this? – HelveticaScenario

**A:** So that's tricky, there are a few ways to handle it today - but all of them are a bit sucky. Some of our recent design meetings, we've been discussing ways to make 'type environements' of some sort like 'these files are node' - 'these files are browser' and have different globals. We'll be thinking about it and do something cautiously.

– orta

<a name="are-there-plans-for-a-low" href="#are-there-plans-for-a-low">#</a> **Q:** Are there plans for a low jargon intro to design decisions and limitations in TS, or maybe recommended alternatives to common JS parents? For instance: in TS, you can't create an object literal, then conditionally assign properties to it, if those properties are required. – threehams

**A:** We've tried to address there either in the massssssive FAQ https://github.com/microsoft/TypeScript/wiki/FAQ or by building playgrounds which show off these kind of cases.

– orta

<a name="will-the-spec-ever-be-updated" href="#will-the-spec-ever-be-updated">#</a> **Q:** Will the spec ever be updated? The last time it was updated was 2016 for TypeScript version 1.8 – brain

**A:** 😢 We feel bad but it's just a resource problem -- the number of people who can accurately and precisely update the spec is barely above 1, and those people are the ones delivering high-value features and bug fixes that they can do 10x faster than anyone else. The upside of a formal spec compared to just reading the code of checker.ts isn't great -- the amount of conceptual complexity you'd need to understand either is approximately the same, and keeping a textual spec up to date with the actual behavior is just asking us to write the same thing twice in two different languages, which is widely understood to be a bad plan.

– SeaRyanC

<a name="what-influence-has-the-typescript" href="#what-influence-has-the-typescript">#</a> **Q:** What influence has the TypeScript team had on other languages shepherded by Microsoft? – mooman

**A:** As the C#'s team implemented non-nullable types, I know that there were a lot of conversations on the best approach to apply that. Part of that was also leveraging that with some ideas of from our definite assignment logic too. I think that the idea that non-nullable analysis isn't always perfect, and was an opt-in behavior, gave the C# team some confidence to say it was feasible. But I wasn't personally involved in most of those conversations, so take this one with a grain of salt. 🙂

– DanielR

<a name="what-kind-of-changes-would" href="#what-kind-of-changes-would">#</a> **Q:** What kind of changes would result in a TypeScript 4.0? – Jeremy

**A:** You mean "Typescript 3000", a breaking change to Typescript, right? _For the Typescript team_, basically nothing would make us do that. Any fresh start would have to be a complete fresh start probably with a different name. And with Typescript filling the typed-javascript niche, it's unlikely that Microsoft will fund something like that in the next few years.

– shivelysanders

_**Follow up**_: I literally meant 4.0 - just curious what would cause a major version bump.

Two more minor versions. We don't follow semver.

– shivelysanders

<a name="where-do-you-feel-you-derive" href="#where-do-you-feel-you-derive">#</a> **Q:** Where do you feel you derive the most inspiration from, type-system-wise? – Levy

**A:** Futurama and Simon PJ.

– shivelysanders

<a name="do-you-use-javascript-standard" href="#do-you-use-javascript-standard">#</a> **Q:** Do you use Javascript Standard in your applications? – José Oliveira

**A:** We do not use Javascript Standard, if you're talking about the formatting standard.

– shivelysanders

<a name="are-there-any-good-potentially" href="#are-there-any-good-potentially">#</a> **Q:** Are there any good (potentially unpublished) resources for people wanting to learn the compiler? – nonara

**A:** Here's some great resources for the compiler:

- https://github.com/orta/typescript-notes/
- https://www.youtube.com/watch?v=3vwO4DwlGYE ( watch us do PR review 1)
- https://www.youtube.com/watch?v=Xq4p5LXaO8Y ( watch us do PR review 2)
- https://github.com/sandersn/manual
- https://github.com/microsoft/TypeScript-new-Handbook

and the TypeScript wiki

– orta

After you peruse those, you can always look at the Good First Issue / Help Wanted list: https://github.com/microsoft/TypeScript/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22+label%3A%22help+wanted%22

– Andrew

<a name="will-there-be-support-for-covariance" href="#will-there-be-support-for-covariance">#</a> **Q:** Will there be support for covariance/contravariance soon? – lifeiscontent

**A:** This already happens implicitly. In generic types this is measured through a trial instantation of the type parameter in question; for a non-generic type, co and contravariance already happens automatically as you move through input/output positions.

Things get added when we feel their use cases merit the complexity and it's a very complex feature. I think we're waiting for a killer use case to justify it.

– SeaRyanC

<a name="are-there-any-tc39-proposals" href="#are-there-any-tc39-proposals">#</a> **Q:** Are there any [TC39][tc39] proposals which TypeScript delegates are currently opposing? – brain

**A:** Not on the record!

– shivelysanders

_**Follow up**_: Off the record though. 🙂

I personally _hate_ classes.

– shivelysanders

<a name="how-long-until-variadic-types" href="#how-long-until-variadic-types">#</a> **Q:** How long until variadic types (`...T`)? – Syntax

**A:** https://github.com/Microsoft/TypeScript/issues/1213

– NickServ

<a name="can-you-help-tc39-get-decorators" href="#can-you-help-tc39-get-decorators">#</a> **Q:** Can you help [TC39][tc39] get decorators to stage 3 faster so we can revisit them in TS? 😄 – spion

**A:** Ron is working on this all the time.

– SeaRyanC

I'm at TC39 and I've had at least 3 people ask me about decorators 😅. We all want a stable solution for users, but it will take some time to nail down the details while addressing everyone's constraints.

– DanielR

<a name="i-guess-i-was-more-interested" href="#i-guess-i-was-more-interested">#</a> **Q:** I guess I was more interested in seeing the `bivariance` hacks in React typedefs disappear, any thoughts on how something like that will get resolved? https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react/index.d.ts#L89 – lifeiscontent

**A:** We need `writeonly` to get rid of the bivariance hacks, since without it the event invocation is unsound.

– SeaRyanC

<a name="is-there-a-plan-to-add" href="#is-there-a-plan-to-add">#</a> **Q:** Is there a plan to add friend classes anytime soon? – elderapo

**A:** No, not really. JS doesn't have the same kind of notion of assembly boundaries as Java/C# so 'friend' is a much more nebulous concept.

– SeaRyanC

<a name="will-typescript-get-haskell" href="#will-typescript-get-haskell">#</a> **Q:** Will TypeScript get [Haskell-style typeclasses](https://www.haskell.org/tutorial/classes.html)? – trepidacious

**A:** It's not likely. The design space is too cluttered with classes and interfaces. And they don't capture any existing JS pattern like discriminated unions did. Maybe when people start passing a bundle of methods as the first argument of each function ...

– shivelysanders

See [fp-ts](https://github.com/gcanti/fp-ts) for examples of typeclasses in TS.

– pgrizzay

There is a protocols proposal in TC39 which solves similar problems to type-classes, but I'm personally unsure if it currently has the right ergonomics. Languages like Haskell can import automatically resolve which protocol/type-class instances to use based on the types given, but JavaScript doesn't have that luxury. It means you might end up with a lot of manual typing, and issues with prototype pollution.

– DanielR

_**Follow up**_: Wouldn't compile-time resolution of typeclasses work where types are known though? Seems like TypeScript can have functionality that only works in TypeScript, as well as functioning as a better JavaScript?

We don't do type-driven emit for reasons listed above. Check out our [design goals](https://github.com/Microsoft/TypeScript/wiki/TypeScript-Design-Goals)

– DanielR

<a name="been-out-of-the-loop" href="#been-out-of-the-loop">#</a> **Q:** Been out of the loop for a awhile, but I remember a time when Babel announced support for TS. Any guidance on when to use [Babel](https://babeljs.io/) vs [tsc](https://www.typescriptlang.org/docs/handbook/compiler-options.html)? – antmdvs

**A:** Babel has support for transpiling TS to JS, but doesn't do type checking. Babel may be useful if you're in a scenario where you need to transpile on a file-by-file basis (babel-loader with webpack is a good example, although ts-loader can also work in a transpile-only mode), or if you already have a build chain that uses Babel (particularly with other custom transforms). But if you need type checking, you'll need to use the TS compiler in some way.

– Andrew

<a name="are-there-any-plans-to-add-tooling" href="#are-there-any-plans-to-add-tooling">#</a> **Q:** Are there any plans to add tooling to TypeScript to help with library versioning? The TypeScript lib is constantly being expanded/changed, and it’s tricky to keep in mind when your generated d.ts simply won’t type check or even compile in an older version of TypeScript. – brain

**A:** [api-extractor](https://api-extractor.com/) can help with versioning, although I've not used it. Also right now I'm looking at the simpler problem of generating old-TS-compatible d.ts files from d.ts files generated from new TS, eg 3.7 -> 3.5.

– shivelysanders

<a name="youve-done-some-interesting-things" href="#youve-done-some-interesting-things">#</a> **Q:** You’ve done some interesting things for JSX support. Anything new in the works for JSX/React? – antmdvs

**A:** We don't check the type of children right now but haven't figured out a way to do it efficiently. I believe @Levy is still thinking about it though...

– shivelysanders

<a name="will-we-ever-get-curried-functions" href="#will-we-ever-get-curried-functions">#</a> **Q:** Will we ever get curried functions support where the first parameter's type depends on the type of the second one? – RogerC

**A:** Short answer is "not until we completely rewrite generic inference", which is as unlikely to happen as it sounds like. Without relying on parameter ordering, TS would have to do an unbounded number of inference rounds to produce a result (i.e. unification) and this is expensive in time, space, and complexity.

– SeaRyanC

<a name="are-there-plans-for-linting-tools" href="#are-there-plans-for-linting-tools">#</a> **Q:** Are there plans for linting tools for disabling/favouring certain TS features over other ones? For example, I feel like interfaces vs. types distinction is weird since I can do almost everything with types. Would you dare endorse such tools or even lint rules some day to try to fix some _"mistakes"_? – Pokute

**A:** No, we're not in the business of taking sides on style arguments. Plus, this sort of thing causes problems for when people have legitimate use-cases for one over another. Cargo culting opinions like "don't use interfaces" confuses people who actually need to use interfaces for their needs.

– DanielR

I can't see is officially endorsing specific lint rules—we usually don't endorse third party things, especially when they center around style/opinion. (Also, declaration merging is a pretty important distinction between types and interfaces, especially when we're talking about globally scoped things.) I think you should use whatever lint rules make you happy.

– Andrew

<a name="are-there-still-plans-to-deprecate" href="#are-there-still-plans-to-deprecate">#</a> **Q:** Are there still plans to deprecate ts-lint and if so when? – Joseph

**A:** https://medium.com/palantir/tslint-in-2019-1a144c2317a9

– NickServ

Yeah, it's officially deprecated ^ - I think of it as TypeScript getting closer to JS semantics, so your JS tools like babel eslint prettier etc all work with TS, so less need for a unique TS environment.

– orta

<a name="are-there-languge-features-outside" href="#are-there-languge-features-outside">#</a> **Q:** Are there language features outside of TC39 proposals that the TS team has an interest in adding? – Chem

**A:** We're looking at community feedback and the committee progress to see which proposals need additional support from us. We try to let the community lead in terms of what needs our help in advancement.

– SeaRyanC

<a name="will-we-someday-get-nice-proper" href="#will-we-someday-get-nice-proper">#</a> **Q:** Will we someday get nice proper higher kinded polymorphism in TypeScript? https://github.com/Microsoft/TypeScript/issues/1213 – mooman

**A:** That's just HKT again!

– shivelysanders

Not clear - higher kinded polymorphism sort of requires types to be compared by type parameter arity - but TypeScript doesn't do that. It only compares against structure, so it seems pretty removed from the type system's philosophy.

– DanielR

<a name="what-feature-in-the-upcoming-year" href="#what-feature-in-the-upcoming-year">#</a> **Q:** What feature in the upcoming year do you look forward to the most?

RE: @shivelysanders https://github.com/microsoft/TypeScript/pull/29818 - performance is _real bad_. – Levy

**A:** I'm _super pumped_ for the new site and new docs. Then I'd like to see compiler plugins. Honestly though, I tend to find myself surprised by things in the language which I ended up falling for: assertion functions and `as const` just really floated my boat

– orta

<a name="what-about-typescript-do-you-regret" href="#what-about-typescript-do-you-regret">#</a> **Q:** What about TypeScript do you regret the most? – Pokute

**A:** Cross-file `namespace` reopening! Easy one.

– SeaRyanC

![TypeScript regrests](https://user-images.githubusercontent.com/49038/68629145-a2447b00-04da-11ea-95d5-4ca85dc6edc9.png) is roughly the regrets

– orta

<a name="any-ts-design-decision-you" href="#any-ts-design-decision-you">#</a> **Q:** Any TS design decision you wish you could change? – captain_radical

**A:** We reused the `declare module "foo"` syntax for module augmentations. That's been super confusing for users and it was clearly the easiest thing not to do which makes it incredibly silly in retrospect.

– DanielR

<a name="if-you-could-take-one-feature" href="#if-you-could-take-one-feature">#</a> **Q:** If you could take one feature out of TypeScript, which one would it be? – johnnyreilly

**A:** Classes! It's always classes!

– shivelysanders

Twitterverse: "Ugh TS is all OOP class stuff"
TS team: "We hate classes."

– SeaRyanC

In a world where I am a benevolent dictator, I would remove the TypeScript formatter and everyone would use prettier instead. (But in the real world, I like that people have a choice for what tooling they do and don't want to install 🙂)

– Andrew

<a name="for-c-backends-what-are-your" href="#for-c-backends-what-are-your">#</a> **Q:** For C# backends, what are your thoughts on generating TS from C# models or vice versa to keep the two in sync? – antmdvs

**A:** It's a good opportunity for community tooling. We're not staffed to take on that kind of thing ourselves.

– SeaRyanC

<a name="you-guys-have-meetups-with-the" href="#you-guys-have-meetups-with-the">#</a> **Q:** You guys have meetups with the Angular folk. Has there been any design decisions you made from those meetups that you regret? – mooman

**A:** Is this a decorators subtweet? 😛

– SeaRyanC

<a name="assuming-you-refer-to-this" href="#assuming-you-refer-to-this">#</a> **Q:**

> (meta) Our roamdap is public BTW, so any questions of the form "When is X happening?" where X is not on the roadmap, the answer is always "When the value proposition justifies putting it next on the schedule"

Assuming you refer to this https://github.com/Microsoft/TypeScript/wiki/Roadmap it's still not updated with 3.8 goals. 😞 - Okku

**A:** We can update the wiki for that, good point, but 3.8 is in https://github.com/microsoft/TypeScript/issues/34898.

– orta

<a name="does-typescript-have-any-way-to-be" href="#does-typescript-have-any-way-to-be">#</a> **Q:** Does TypeScript have any way to be used as a general purpose interpreter? – José Oliveira

**A:** Are you talking about ts-node or implementing the lambda calculus via conditional types?

– shivelysanders

You might want to look into static TypeScript https://www.microsoft.com/en-us/research/publication/static-typescript/.

– orta

_**Follow up**_: I mean: is TS just used to be transpiled to JS, or is it planned to be used as an independent script language?

No plans, but you can easily use APIs to `eval(require("typescript").transpileModule(...))`.

– DanielR

We don't have any plans to do anything special. `deno` is "natively" supporting TS (whatever that means) and `ts-node` exists

– SeaRyanC

<a name="what-is-your-favourite-advantage" href="#what-is-your-favourite-advantage">#</a> **Q:** What is your favourite advantage of using TypeScript over vanilla JS? – Celes

**A:** JS with good d.ts for your libraries is pretty good already. Mostly just better type annotation syntax.

– shivelysanders

JS with the d.ts ecosystem from types is really good - the good bits form TypeScript are then a better way to describe your types mainly. Most of our users are JS users in VS / VSCode and we want their experience to rock, which means that by using TS you get same but better tooling.

– orta

<a name="is-there-programmatic-cli-a-way" href="#is-there-programmatic-cli-a-way">#</a> **Q:** Is there (programmatic/cli) a way to find places in my code where TypeScript gives up typechecking and just sticks `any`? – hasparus

**A:** `noImplicitAny` should tell you.

– orta

`any`, `noImplicitAny` is one thing of course, but TS will never "give up" and fall back to `any` without an accompanying error

– SeaRyanC

<a name="what-percentage-of-contributions" href="#what-percentage-of-contributions">#</a> **Q:** What percentage of contributions are committed by non Microsoft team? – sohelahmed

**A:** It's hard to measure right now - I'd love to see more contributions, and we do mark issues as "good first issue". But we have some really prolific contributors. User-defined type guards, our entire control flow analysis model, bigint, nullish coalescing, our migration to ESLint, and much more were external experiments or contributions.

– DanielR

<a name="what-typings-can-quickly-affect" href="#what-typings-can-quickly-affect">#</a> **Q:** What typings can quickly affect compiler performance? – Schmulik

**A:** `type RecM<T> = { [K in keyof T]: RecM<Wrapper<T[K]>> }`

– shivelysanders

`T[U]` types are sometimes very expensive due to generating large unions, as are distributive conditional types instantiated with large unions; the mix of the two is what most often results in large type computations

– SeaRyanC

See also https://blog.andrewbran.ch/polymorphic-react-components/ for examples.

– Andrew

<a name="there-are-n-1-number" href="#there-are-n-1-nubmer">#</a> **Q:** There are n+1 number of different parsers for JS. Any chance of having one that TypeScript could use? – Pokute

**A:** TS is zero dependencies, so it probably won't be sharing one with others - different parsers have different goals too and it's unlikely that everyone could consolidate on one in the ecosystem.

– orta

[electron]: https://electronjs.org/
[tc39]: https://tc39.es/
