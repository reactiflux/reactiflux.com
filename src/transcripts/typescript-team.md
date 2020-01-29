---
title: TypeScript Team @ Microsoft
date: 2019-12-05
time: 1-2pm PT / 8-9pm GMT
location: Q&A Channel Reactiflux
description: 'The team from Microsoft working on [TypeScript](https://www.typescriptlang.org/) will be on to answer all your TS related questions! TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.'
people: '[Daniel Rosenwasser](https://twitter.com/drosenwasser) (Program Manager), [Ryan Cavanaugh](https://twitter.com/SeaRyanC) (Engineering Lead), [Nathan Shively-Sanders](https://twitter.com/sanders_n) (Compiler Engineer), [Andrew Branch](https://twitter.com/atcb) (Compiler Engineer), [Orta Therox](https://twitter.com/orta) (Compiler Engineer)'
---

## Follow the team

- [@orta](https://twitter.com/orta) (orta)
- [@SeaRyanC](https://twitter.com/SeaRyanC) (SeaRyanC)
- [@sanders_n](https://twitter.com/sanders_n) (shivelysanders)
- [@atcb](https://twitter.com/atcb) (Andrew)
- [@drosenwasser](https://twitter.com/drosenwasser) (DanielR)

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

**A:** Re: plugins -- We're designing this very, very slowly with the maximum amount of deliberateness, and I think there's no concrete output yet on this front. The main risk here is that we (the TS team) need to be able to add e.g. new kinds of syntax, new kinds of types, etc, and a plugin written for a prior TS version can't possibly know how to handle these sorts of things. So a system needs to work in a way that is extremely agnostic to how TS works internally, but this is sort of in conflict with what plugins generally want to do. You can think about things in terms of tree transforms, which is a reasonable way to go, but then the question is how refactorings work against a synthetic tree that isn't what you actually wrote.

– SeaRyanC

Re plugins follow-up: honestly the fracturing risk is in _allowing_ plugins, not disallowing them! Plugins as imagined by many people would create an infinite number of language variants that lacked interoperability or a shared set of semantics - this is what we really don't want to enable. People can experiment with Babel or other tools if they really want to try adding novel syntax, but we don't feel obligated to provide the capability of typechecking these variants.

– SeaRyanC

As an ex-React Native dev, I would love to see those problems fixed - we've been keeping that in mind when thinking about both the upcoming module resolution changes for node/web, and the compiler plugin infrastructure. Doing it right would take quite a lot of work (it would require many different copies of the type system) but doing it good enough (only one level of resolution - e.g. prioritise android for this tsconfig) is hopefully something the compiler plugin api can support.

– orta

<a name="is-there-any-talk-going-on" href="#is-there-any-talk-going-on">#</a> **Q:** Is there any talk going on about adding types to the ECMA spec? – mwss1996

**A:** @mwss1996 The TC39 committee has discussed adding types in the past, but didn't want to include one of the competing type systems, so discussed adding a third type system. That didn't go anywhere.

The committee has also discussed ignoring type annotations and letting them just be syntax, but even that requires some standardisation between compilers.

– shivelysanders

<a name="where-do-you-see-the-future" href="#where-do-you-see-the-future">#</a> **Q:** Where do you see the future of class support going? – mwahahasldjf

**A:** WRT Class support, originally TypeScript had it's own opinion on what classes would look like, but over time that responsibility moved to TC39 - now JS users kinda decide what's going on there.

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

**A:** Re: error messages -- This is an area of continuous improvement for us, and we're always interested in finding places where we can "special case" more things in a way that's useful. The specific example is a good one; it'd be good if TS could just say "You are missing these one or two properties" in the case where exactly that happens. I don't think we have concrete guidance on how to write types in a way that's more likely to give better error messages; mostly you just have to try things out.

– SeaRyanC

<a name="is-there-a-plan-to-help-the" href="#is-there-a-plan-to-help-the">#</a> **Q:** Is there a plan to help the community around TypeScript grow? What type of help from the community you would require to make TypeScript better? – horacio

**A:** There's been quite a lot work on trying to figure out how to improve the visibility of people doing great work in the community ( https://github.com/microsoft/TypeScript-Website/issues/63 ) - I think it's TS's responsibility to highlight that work and try to grow the community. One thing that I think is interesting is how much overlap the TS community has with others, so we've been doing more work to improve TS docs in other JS communities to make that better. How can you help? Do more cool stuff, make sure we know and if you want to contribute to some of the web infra that's always easy contributions which don't require a compiler degree. 😉

Other ways to contribute-hang out in our discord too! https://discord.gg/typescript

– orta

<a name="hi-guys-whats-the-future-feature" href="#hi-guys-whats-the-future-feature">#</a> **Q:** Hi Guys! What's the future feature you're most excited about in TypeScript? – johnnyreilly

**A:**

–

<a name="whats-the-plan-with-the-unknown" href="#whats-the-plan-with-the-unknown">#</a> **Q:** What's the plan with the `unknown` type? any timeline on when you might support the `in` operator with it? more specifically: https://github.com/microsoft/TypeScript/issues/21732 – lifeiscontent

**A:** We haven't figured a way around a couple of key obstacles:

1. adding properties to a type requires constructing a new type. The narrowing algorithm doesn't create new object types, only (a) throw out items from unions (b) intersect types together. Maybe it could, but it would require careful thought to avoid killing performance.
2. `in` already narrows, in a different way that the issue you linked proposes. We'd have to integrate the two or deprecate the current behaviour.

– shivelysanders

<a name="hi-its-a-pleasure-having-you" href="#hi-its-a-pleasure-having-you">#</a> **Q:** Hi, it's a pleasure having you guys here. Functional Programming is getting popular for us front-end developers. From what I understand, TS uses many OOP concepts. Has there been any talks about whether the TS compiler will adopt concepts from FP? – green_lantern 🪐

**A:** TypeScript's design is largely motivated by existing JS paradigms, and of course JS is a multi-paradigm language. I think you're right that historically TS had more of an OOP slant, but over time we've introduced features that make typing FP patterns way more feasible—tuple types (and being able to represent function rest params as tuples) come immediately to mind. Several of us on the team have experience in and are very sympathetic to FP concepts, and the community in general has had a surge of interest in FP more recently, and I think TS has reflected that shift, and will continue to follow the community on it. (Also, if there are FP patterns you can't express in TS, I'm interested in seeing GH issues on it 😄)

– Andrew

<a name="what-do-you-think-about-the-current" href="#what-do-you-think-about-the-current">#</a> **Q:** What do you think about the current TypeScript support with react-native (stripping types instead of compiling and lack of support for platforms extension)? – Titozzz

**A:**

–

<a name="will-there-be-any-feature-that" href="#will-there-be-any-feature-that">#</a> **Q:** Will there be any feature that differs from vanilla JS on Typescript, or is the plan always to be compatible as it is now? – mwss1996

**A:** Re: diverging from JS -- Nope! This is a hard line for us and we're not going to do anything where pasting JS into a TS file results in different runtime behavior. I think of this as our core value proposition: You don't have to worry now (or ever) that migration will result in new production bugs appearing in your application.

– SeaRyanC

<a name="re-soundness-what-might" href="#re-soundness-what-might">#</a> **Q:** Re: soundness, what might be coming, and what is off the table? – Schmulik

**A:** Re: soundness - we're always looking at where the current soundness holes actually result in bugs in user code or real user pain (trading off against sacrificing completeness). Just due to how JS works, we're never going to have a `--sound` mode, but there are tactical places where the type system can be augmented to catch more problems in practice. Things I'm often thinking about are better ways to indicate co- and contra-variance, `writeonly` (ugh), and whether we could ever make `readonly` influence assignability. I think in practice, "real" unsoundness (observed violations) come up much more often due to incorrect type assertions, so anything that removes a type assertion is a soundness feature in my book -- the lack of `super` constraints on generics being one that seems to end up with assertions or overwide types too often.

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

**A:** That will probably never happen - it's an expression level change which changes _javascript_ not the type system - TC39 would need to agree to do it I think.

– orta

<a name="what-are-your-thoughts-about-compilation" href="#what-are-your-thoughts-about-compilation">#</a> **Q:** What are your thoughts about compilation performance? Currently I'm using sucrase to skip the type check on compilation time to decrease the time between each compilation... – José Oliveira

**A:** We know that it's gotten progressively worse over 3.x's lifetime and have one dedicated person looking at it right now, plus another helping from time to time. No amazing progress to report yet, though.

Any time you can compile less, do it. So don't feel bad about just emitting without checking if you can get the errors at a different time. And check out the incremental compilation features that _might_ help.

– shivelysanders

<a name="any-plans-for-enabling-strict-mode" href="#any-plans-for-enabling-strict-mode">#</a> **Q:** Any plans for enabling strict mode per file with a special comment? Currently it's quite tough to move over to strict mode if it has not been enabled since the beginning. – Lomant

**A:** Re strict mode per file -- it's tricky, because `strict` mode means a lot of things and some of those things don't make sense to treat on a per-file basis (e.g. strict null checks, which fundamentally changes what values in or aren't in a given type). But there are other modes where it's really easily lexically contained (I'm thinking of strict class field initialization, for example) where we're thinking about some kind of per-file pragmas. So you might see something there eventually.

– SeaRyanC

<a name="what-are-your-thoughts-about-associated" href="#what-are-your-thoughts-about-associated">#</a> **Q:** What are your thoughts about associated values for enum cases (like Swift's enums) with regards to TS? it's an extremely handy feature that helps writing better typed code.

I don't completely understand the argument against adding features to TS that do not exist in JS? – bartzy

**A:** Every feature we add to the TypeScript language that isn't erasable is a liability for the team, the JavaScript committee could decide to build something similar but different (like namespaces and what became commonjs/modules, and how TC39 decorators are different, and how private fields are different from how they are in TS).

– orta

re: enum - yeah, I would _LOVE_ that, but that involves making a lot of extra runtime behavior and (to my knowledge) we don't want to expand the features of enums because it's quite possible enums get added to JS.

– orta

<a name="to-each-of-you" href="#to-each-of-you">#</a> **Q:** To each of you: what is your favorite compiler flag, and why? – Levy

**A:** `--checkJs`. Also, are you really Wesley or just somebody who stole his picture?

– shivelysanders

My favorite flag is `-p`.

– SeaRyanC

My favorite flag is easily `--noErrorTruncation`, because, uh, sometimes I write horrifying types and use them wrong and it gives me really long errors that I actually need to read.

– Andrew

<a name="any-plans-to-allow-type" href="#any-plans-to-allow-type">#</a> **Q:** Any plans to allow type spreading as opposed to intersection? e.g. `type Foo = {...Bar, ...Baz}` – aaronjensen

**A:** I actually wrote that feature long ago, but we decided not to ship it. We have a saying that features start with -1000 points and have to justify their existence, because we'll have to support them forever and make them work with all new features.

Spread types never made it past 0 points:

1. Kind of a niche feature, mainly for React HOCs as far as I know.
2. Intersections (or a clever conditional+mapped type) are almost always close enough.
3. All the example cases we worked through got really, really strict and unusable without the ability (a) have negated types (b) infer negated types.

– shivelysanders

<a name="how-do-i-keep-a-string" href="#how-do-i-keep-a-string">#</a> **Q:** How to I keep a string from widening in this case? https://gist.github.com/lifeiscontent/4fb148c1c4aee9ca50552f0670c5b49f if this is not possible currently, do you have plans to support this kind of use case? – lifeiscontent

**A:**

–

<a name="do-you-have-any-ideas-on-what" href="#do-you-have-any-ideas-on-what">#</a> **Q:** Do you have any ideas on what a migration path from the old decorator spec that TS currently uses to the new one might look like? – snowei ❄

**A:** Realistically, I would not recommend upgrading your decorators. We'll have to keep supporting the old syntax anyway.

– shivelysanders

<a name="did-you-like-working" href="#did-you-like-working">#</a> **Q:** Did you like working with Joe? – neoney

**A:** You mean JS Joe? He hangs out in the compiler channel in the [TypeScript discord](https://discord.gg/typescript), it's cool to see him learning in public.

– orta

<a name="a-followup-to-the-plugin-question" href="#a-followup-to-the-plugin-question">#</a> **Q:** A followup to the plugin question. I'm afraid that while you're preventing broken code due to not implementing a plugin inferface that you might have to break later, you're currently risking fracturing the developer community. For example, TS team understandingly doesn't plan to have features that break significantly on how JS does stuff, but the people who want to experiment have no direction where to go. Could TS team acknowledge that with "See this project/fork that implements this breaking change if you want it now"? Or do you think the plugins will allow all these adequately? – Pokute

**A:**

–

<a name="arent-you-on-the-ts-team" href="#arent-you-on-the-ts-team">#</a> **Q:** Aren't you on the TS team? – mooman

**A:**

–

<a name="moo" href="#moo">#</a> **Q:** Is there any plan for improving type inference to make scenarios like this possible:

```typescript
declare const foo: <A>(b: Bar<A>) => (a: A) => any;
```

It would be extremely useful for FP-centric libraries – RogerC

**A:**

–

<a name="currently-if-you-have-multiple-dependencies" href="#currently-if-you-have-multiple-dependencies">#</a> **Q:** Currently, if you have multiple dependencies that define the same type it fails to compile. For instance both React native and react define the FormData type and if a dependency (like @types/styled-components) depends on both it breaks the whole project. Is there some plan to account for situations like this? – HelveticaScenario

**A:**

–

<a name="are-there-plans-for-a-low" href="#are-there-plans-for-a-low">#</a> **Q:** Are there plans for a low jargon intro to design decisions and limitations in TS, or maybe recommended alternatives to common JS parents? For instance: in TS, you can't create an object literal, then conditionally assign properties to it, if those properties are required. – threehams

**A:** We've tried to address there either in the massssssive FAQ https://github.com/microsoft/TypeScript/wiki/FAQ or by building playgrounds which show off these kind of cases.

– orta

<a name="which-advantages-does-typescript" href="#which-advantages-does-typescript">#</a> **Q:** Which advantages does TypeScript bring to Microsoft? – mwss1996

**A:**

–

<a name="will-the-spec-ever-be-updated" href="#will-the-spec-ever-be-updated">#</a> **Q:** Will the spec ever be updated? The last time it was updated was 2016 for TypeScript version 1.8 – brain

**A:**

–

<a name="moo" href="#moo">#</a> **Q:** –

**A:**

–

<a name="moo" href="#moo">#</a> **Q:** –

**A:**

–

<a name="moo" href="#moo">#</a> **Q:** –

**A:**

–

<a name="moo" href="#moo">#</a> **Q:** –

**A:**

–

<a name="moo" href="#moo">#</a> **Q:** –

**A:**

–

<a name="moo" href="#moo">#</a> **Q:** –

**A:**

–

<a name="moo" href="#moo">#</a> **Q:** –

**A:**

–

<a name="moo" href="#moo">#</a> **Q:** –

**A:**

–

[electron]: https://electronjs.org/
