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

<a name="moo" href="#moo">#</a> **Q:** Introduce yourselves – JeffBaumgardt

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

<a name="whats-the-plan-with-the-unknown" href="#whats-the-plan-with-the-unknown">#</a> **Q:** What's the plan with the unknown type? any timeline on when you might support the `in` operator with it? more specifically: https://github.com/microsoft/TypeScript/issues/21732 – lifeiscontent

**A:**

–

<a name="hi-its-a-pleasure-having-you" href="#hi-its-a-pleasure-having-you">#</a> **Q:** Hi, it's a pleasure having you guys here. Functional Programming is getting popular for us front-end developers. From what I understand, TS uses many OOP concepts. Has there been any talks about whether the TS compiler will adopt concepts from FP? – green_lantern 🪐

**A:**

–

<a name="what-do-you-think-about-the-current" href="#what-do-you-think-about-the-current">#</a> **Q:** What do you think about the current TypeScript support with react-native (stripping types instead of compiling and lack of support for platforms extension)? – Titozzz

**A:**

–

<a name="will-there-be-any-feature-that" href="#will-there-be-any-feature-that">#</a> **Q:** Will there be any feature that differs from vanilla JS on Typescript, or is the plan always to be compatible as it is now? – mwss1996

**A:** Re: diverging from JS -- Nope! This is a hard line for us and we're not going to do anything where pasting JS into a TS file results in different runtime behavior. I think of this as our core value proposition: You don't have to worry now (or ever) that migration will result in new production bugs appearing in your application.

– SeaRyanC

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
