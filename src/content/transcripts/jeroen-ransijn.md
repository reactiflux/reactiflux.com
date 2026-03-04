---
title: Jeroen Ransijn
date: 2018-11-15
time: 1-2pm PT / 8-9PM GMT
location: Q&A Channel Reactiflux
description: "Design Systems Lead @ Segment, spearheading the design, development and adoption of Segment's open-source design system, [Evergreen](https://evergreen.segment.com/)"
people: "[@Jeroen_Ransijn](https://twitter.com/Jeroen_Ransijn)"
---

## Design Systems Lead @ Segment, leading development of [Evergreen](https://evergreen.segment.com/).

<a name="hi-jay-plans-roll-typescript" href="#hi-jay-plans-roll-typescript">#</a> **Q:** Hi Jay, do you have any plans to roll out typescript support for evergreen, secondly is there any kind of timeline in place for theming? – Owenage

**A:** Let's start with the TypeScript part since this will be a more recurring question I imagine. When we started building Evergreen I and the team had no TypeScript experience, and it was not something we were using anywhere in our app. Over time TypeScript/Flow, and lately TypeScript has really taken the lead within the community.

I think somewhere within 12 months the team might add TypeScript bindings to Evergreen, since some new greenfield projects are being build with TypeScript—so it is an internal pain as well, gaining prioritization on the roadmap.

I am still unsure if it makes sense to completely rewrite Evergreen in TypeScript or Flow, but there are some upsides for documentation generation. Prop type definitions in the docs could be way better with TypeScript/Flow.

Our team has to do more research on this, and figure out where it fits in our roadmap. In the short term I think there are some more important things to work on that more directly align with business value.

During a hack week project I actually partly build a theme builder inside of the [Evergreen docs](http://evergreen-next.surge.sh/theme-builder/). While doing that I had to work on many internals as well. We tabled theming in the v4 (Kauri) release, but it's something to consider down the road for sure.

Currently we have a [good branch](https://github.com/segmentio/evergreen/tree/v5-create-theme) that have more powerful concepts for theming build in—building on top of the really low level APIs from v4.

Theming is really hard, and it might mean breaking changes to what we currently have, and in some ways changing some of the visual styling in order to be more easily themed.

Segment is dedicated making Evergreen an ongoing success in the community, and I imagine will we revisit it at some point. When that is, unsure.

---

<a name="component-librarydesign-system-fits-legacy" href="#component-librarydesign-system-fits-legacy">#</a> **Q:** How does the component library/design system fits with legacy projects and priorities from the business perspective? – wilder

**A:** I am interpreting this as how well Evergreen works inside of legacy projects from the community as well as possibly our own internal legacy projects.

Evergreen works well within a lot of different environments, and is easy to adopt because we fully embrace CSS-in-JS, simply import a component and it works without any other setup.

Also, because of this same approach there is no bleeding global styles that you have to think about from Evergreen.

The only thing that might give you some issues is current global styles within your app. For the most part we unset/reset CSS properties as much as possible within components, but there might be some cases where this becomes a problem. We will continue to make tweaks here where reasonable, but we can't fully know what global styles are being used within your environment—this is true for every framework however.

Finally, the business perspective. Evergreen is Segment's Design System and is meant to solve our growing set of problems. The Segment web application faces many interaction design and UI challenges. We have audience segmentation tools, plenty of virtualized tables and even a editable spreadsheet like interface! If you are doing somewhat similar things to us in terms of UI, I bet we have some component for it.

The second part of that question might also be how can we continue to prioritize Evergreen as part of our larger business goals. Segment exists because of a open-source library that turned into Segment (analytics.js), we continue to believe in the importance of open-source for our business and try to maintain a leadership position in this space—to improve our software and attract world-class software engineers and designers. I see Evergreen as a tribute to that on the design and design systems side that already gave back to Segment in big ways.

---

<a name="hi-jay-many-ui-frameworks" href="#hi-jay-many-ui-frameworks">#</a> **Q:** Hi Jay! There are many UI frameworks out there—Material, Ant, Bootstrap—why create a new one, and what sets Evergreen apart? – statico

**A:** I have answered a similar question before [on Spectrum](https://spectrum.chat/thread/6f15ef43-5156-418f-9948-af2a3e583b86) and will post pretty much the same answer here.

I build Evergreen to solve my own problems for prototyping products quickly. Most components are build with ui-box, a React primitive that allows you to pass CSS properties as React prope straight on your component. This solves a lot of layout and spacing questions, and in most cases the height prop governs the size of a element. For example, `<Button height={40} />` will work.

Evergreen is still relatively young and there are still many things to work on. There are more mature systems out there. I have heard multiple people mention they might switch from Ant Design to Evergreen.

I see Evergreen currently as unapologetically accepting non-responsive desktop UI, CSS-in-JS and finally component abstractions all the way through, at no point are you dealing with class names. Some of those things might change in the future.

On a more high-level note, Evergreen takes developer experience really seriously. If it's easier for a developer to build something better, the customer experience will become better as well.

Finally, Evergreen is very much a remix of all the great work out there of Ant Design, AtlasKit, BlueprintJS and many others. I have dug around the source code of many of these libraries to find well designed abstractions—and learned a ton!

---

<a name="hello-jeroen-designing-busy-form" href="#hello-jeroen-designing-busy-form">#</a> **Q:** Hello Jeroen, I am designing a very busy form and have a few readonly fields (Created by, date, Modified by, date) Does Evergreen provide any components that will work well for readonly portions of a form? – cpope117

**A:** I think you are asking if Evergreen contains form controls such as text inputs and possible some date controls that? In this context I am not sure what you mean with "readonly", but all our controls pass through native props such as the [readonly attribute](https://www.w3schools.com/tags/att_input_readonly.asp).

We export plenty of components for [form controls](https://evergreen.segment.com/components/) but are still missing a dedicated date widget/control. Internally we have some version of this, so I imagine we will try to figure out how to get this in Evergreen at one point. Not sure when that will be.

---

<a name="would-say-young-person-like" href="#would-say-young-person-like">#</a> **Q:** What would you say to a young person like me trying to make it in the sea of programming as a software engineer? – Rough_Sapphire

**A:** Hey Rough, I don't know how young you are, or you experience, but I can give you some context on my own experience and maybe some insights.

I started young while in high school with really basic stuff. Doing a bit of design and learning about development. I started working at a agency during and right after high-school when I was about 17–18 years old, and skipped college altogether. Soon after I went to San Francisco, and joined a bootcamp for a year. Right after I joined Segment—and have been there for over 2 years.

First, I have grown up with absolute privilege in my live, a good childhood, access to good education, computers, internet—everything. This is a big part.

Second, learning how to learn is one of the biggest skills you can acquire. Make friends, find a community of people to do it together. It's a much about the journey as getting anywhere.

Finally, I have always intentionally designed my career. Being really good at something can take you really far by accident, but being intentional about what you do can take you even further than you think. I don't consider myself a very good software engineer or designer —and there are many things for me to learn still. But I have made very intentional decisions in my career that have propelled me forward. Often the choices that involves risk are the ones that pay off. Just my 2c.

I worked at an agency for about 3–4 years—2 years full-time

---

<a name="curious-long-take-build-first" href="#curious-long-take-build-first">#</a> **Q:** I am curious, how long did it take you to build the first version of Evergreen? It looks amazing. – MihailZverev

**A:** Thanks for the kind words Mihail! Evergreen started when I was the product design lead on our Personas product about 1–1.5 years back. You can read a more in-depth overview of that process [here](https://www.designsystems.com/stories/convince-your-company-its-ready-for-a-design-system/) and [here](https://jssr.design/personas).

In short, I started building the foundation about ±1.5 years ago, and everything started within the current repo. You can actually go back in time, and see the first commit with maybe 1 package at that time (typography I think).

That being said, internally I authored a library called `@segment/react-ui-library` and after we build 1 more internal library called `@segment/elements`. After all those learnings, I wanted to create a single library to rule them all and that was open-source.

---

<a name="think-hijacking-project-work-nonopensource" href="#think-hijacking-project-work-nonopensource">#</a> **Q:** Do you think that "hijacking a project" can work on a non-opensource friendly company? – wilder

**A:** Wilder is referring to my blog post ["Hijack a project to convince your company it's ready for a design system"](https://www.designsystems.com/stories/convince-your-company-its-ready-for-a-design-system/).

I will explain what "Hijack" means first. Design systems don't always align with business value, and can be hard to prioritize in especially smaller organizations. There is always a project "more important" to work on that is actually making the organization revenue or hitting some goal. Hijacking means in this context, to work on the project that is "more important", but make small steps towards a design system—or a project that doesn't directly align with business goals.

And can this "hijacking" work for non open-source friendly companies? Yes, absolutely! I would see this separately from a open-source project however. You can hijack projects within your organization to tackle different projects such as internal design systems, tools, rewrites or processes.

---

<a name="team-currently-trying-build-component" href="#team-currently-trying-build-component">#</a> **Q:** Our team is currently trying to build a component library and we are using Storybook as means of prototyping and using it as a static website to sell the idea of a living documentation/reference. Which tools or strategies did you use to get people onboard besides "hijacking a project"? – wilder

**A:** Honestly, I can't say it any better than [Matt Bond who build design systems](https://medium.com/asana-design/the-key-lessons-i-learned-creating-a-popular-design-system-d078c817b4dd) at Atlassian and Dropbox.

To summarize:

1. Start by doing things that don’t scale

2. Don’t weaponize your guidelines

3. “Let’s just redesign it all” (as in resist this temptation)

4. Get cross functional support for your design system

5. Move beyond a style guide

6. Have someone oversee the system, but ensure everyone contributes

Also, an article in which I [describe my journey](https://segment.com/blog/driving-adoption-of-a-design-system/) might be useful.

Gist: Build something small and useful first, don't set out to do everything. Your internal team members are your users.

As a more direct answer to your question: do whatever works. Use tools that get the job done, the tools are just tools, they might not actually drive value in the organization. For instance, you can spend building a documentation website for 6 months. Or you can help teams adopt a couple of components across the organization. I would recommend providing value to others as soon as possible.

---

<a name="react-javascript-patterns-critical-important" href="#react-javascript-patterns-critical-important">#</a> **Q:** Which React or Javascript patterns were critical and important in building Evergreen and how did you learn them—resources you used etc? – MihailZverev

**A:** This is a great question, and I am coming back to a previous answer. The most important patterns and conventions come straight out of other design systems. That is by far the best way to do something, learn and remix other similar products or tools. They are literally facing the same problems as you are. A tutorial or course is only going to take you so far, and often is very surface level.

---

<a name="think-storybook-tell-us-use" href="#think-storybook-tell-us-use">#</a> **Q:** What do you think about Storybook, can you tell us how you use it, and how we could make it better for you and your team? – Norbert

**A:** I have quite some opinions on this at this point! But first of all, Storybook is amazing, and is a great tool to start building design systems or UI tools. It really started a new way of thinking about building tools in isolation.

At Segment, I have primarily used Storybook, and later coworkers started using [docz.site](https://www.docz.site/).

My biggest pain points with storybook are:

1. It is far removed from the source code, although there are plugins, it would have be awesome if there was more direct connection to the source code you could explore.

2. Examples are not standalone, and require storybook specific APIs to run. I have talked with Jamie (https://jamie.build/) about this a bunch, who is building some tools himself in this space. The pain point here is that you are locked in to a certain extend to the storybook APIs. The problem becomes more problematic when you want to create a custom documentation website. How do you turn storybook into that? Or at least re-use your examples and stories?

3. Customization is hard. I have looked into storybook a while back to see how to customize the interface, but it's pretty hard to do. I would love to see Storybook provide more low-level primitives to build your own storybook. Maybe I am just a power user though ;)

Don't get me wrong, I absolutely love storybook—but since you asked for feedback that is my main pain points!
