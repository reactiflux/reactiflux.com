---
title: Ryan Florence
date: 2016-09-29
location: Q&A Channel Reactiflux
description: "React Router Co-Author | [reactjs-training.com](https://reactjs-training.com)"
people: "[@ryanflorence](https://twitter.com/ryanflorence)"
---

## React Router Co-Author | [https://reactjs-training.com](https://reactjs-training.com)

<a name="match-exactly-pattern-parent-match" href="#match-exactly-pattern-parent-match">#</a> **Q:** How do you `<Match exactly pattern="">` (the parent match only, no sub /foo). The analog to matching pattern="foo"... which could match /bar/baz/foo if the parent match was /bar/baz/:id?. I want to match when :id is blank

**A:** I don't know, can you visit that url in a browser? Open an issue and we can try to figure it out. @mjackson has been working on the <Link to/> prop and will support "relative urls" to the matched location, which might be what you're talking about

---

<a name="react30-episodes" href="#react30-episodes">#</a> **Q:** More React30 episodes when?

**A:** oh man ... we're so booked lately and have stepped up our OSS game so it's hard to find time for it all. We have a whole list of folks and topics we want to cover. I have no specific dates when we'll do the next one, but ... soon?

---

<a name="react-router-v4-looks-cool" href="#react-router-v4-looks-cool">#</a> **Q:** React Router v4 looks very cool. What's the idea behind the version 3 beta? Why not jump right into the work being done on version 4?

**A:** Version 3 is just version 2 w/o deprecation warnings. @timdorr is working on getting that shipped so he'd be better to ask

---

<a name="feel-stateless-functional-components-used" href="#feel-stateless-functional-components-used">#</a> **Q:** How do you feel about stateless functional components? You used createClass() in your last presentation. Do you prefer that over ES6 classes and SFCs?

**A:** So there are a lot of ways to create a component right? even the old-school 2006 "module pattern" works as a component. In our workshops we switched to classes about a year ago. It was a TRAIN WRECK! Bbecause understanding JS context is hard, and so people had a really hard time getting through the exercises. So then it gets us really introspective - if this is a pain in the neck in a workshop, what about in your actual code w/ your team?. I dunno! But anyway, we still use createClass in our workshops but we may be switching to classes because of create-react-app's support of "class property declarations", since that's getting a lot of attention...

---

<a name="actual-benefits-sfc-besides-terseness" href="#actual-benefits-sfc-besides-terseness">#</a> **Q:** Are there any actual benefits to SFC besides terseness?

**A:** seems like it's okay to use the "not-yet-javascript" that it uses

---

<a name="v4-solution-passing-props-component" href="#v4-solution-passing-props-component">#</a> **Q:** Does v4 have a solution for passing props to a component besides HoC? It'd be nice to do something like `<Match pattern="/myprofile"><Profile type="personal" /></Match><Match pattern="/mypubicprofile"><Profile type="public" /></Match>`. Passing component to `<Match />` seems like holdover from the old way of doing things instead of rendering it's children. I may be thinking about this wrong. Awesome job to you and the team on this release. It feels a lot better.

**A:** _looks up a gist, struggles to find the gist_ FOUND IT! :tada: [Link](https://gist.github.com/ryanflorence/a301dc184f75e929a263dc1e80399a28). Read that, that's why we don't do the "children as elements" in the Match API. So class property declarations aren't JS yet, so we are hesitant to use them in workshops, but in my own code I use them and that's the only way I can bear to use ES classes because they make "auto binding" really nice. As for SFC - those are basically just really cool templates, right? So if I don't need the lifecycle hooks, and just need to tuck some "markup" away, a SFC is great. So I use classes when I need hooks and state, SFC when I don't.

---

<a name="planned-support-param-default-values" href="#planned-support-param-default-values">#</a> **Q:** Is there planned support for param default values?\*

**A:** this.props.params.foo || 'foo' seems like enough?

<a name="makes-components-less-reusable" href="#makes-components-less-reusable">#</a> **Q:** That makes components less reusable

**A:** `<Match render={(props) => <Component params={addDefault(props.params)}/>}/>` Wrap that up in a MatchWithDefaults component - BOOM bob's your uncle

---

<a name="outside-classes-whats-common-point" href="#outside-classes-whats-common-point">#</a> **Q:** Outside of classes what's the most common point of confusion people have in your workshops?

**A:** Hmm ... hard to pick "one thing" - people struggle with just JavaScript itself. Like, not knowing there's [].map and [].filter, how to mess around w/ objects in J. React really throws JS back in your face and lots of people haven't done much ... uh ... "real work" with JS before. The other thing is probably what a valid JS expression is - we can say "once you do {} in JSX, any valid expression can go there, because it's really just an argument to React.createElement", but most of us haven't done very much w/ JS expressions before React. But the questions we get in a workshop are rarely react related, usually they're JS questions :joy:

---

<a name="isnt-render-children-seems-common" href="#isnt-render-children-seems-common">#</a> **Q:** Why isn't render children it seems more common than what is currently used for children?

**A:** Children in Match will always render if it matches or not - check out the animation demo.

<a name="yes-know-curious-render-prop" href="#yes-know-curious-render-prop">#</a> **Q:** Yes, i know I was just curious as to why the render prop and the children prop aren't reversed since so far the render prop seems to be used more and the children prop is more "natural"

**A:** We decided that since one rendred conditionally and the other was always, that children made more sense to "always render" since you typically expect that API. |

---

<a name="scenario-login-container-part-login" href="#scenario-login-container-part-login">#</a> **Q:** Scenario : I have login container that does part of login. After login, I want to switch to dashboard container. how do I do this? I have react router. If question is incorrect, suggest a post/gist that looks useful.

**A:** https://react-router.now.sh/auth-workflow

---

<a name="could-wave-magic-wand-fix" href="#could-wave-magic-wand-fix">#</a> **Q:** If you could wave a magic wand and fix one thing about the JS/React community, what would it be?

**A:** Aside from normal social justice problems that are just problems w/ the whole world, I guess I don't know what's broken! I love both JS and React communities, so much exploring, so many ideas. It's a blast to be a JS developer today - so I would leave the wand in its case probably.

---

<a name="may-sore-subject-saw-lot" href="#may-sore-subject-saw-lot">#</a> **Q:** This may be a sore subject, but I saw a lot of FUD around the RRv4 preview and Relay (lack of static route config?). Can you talk to (or point me to) the latest developments on that discussion? I'm not using Relay right now, but keeping an eye on it.

**A:** First of all, you can use `<Relay.Renderer>` anywhere in a router v4 app and it just works™. Heh, well, now relay has to solve it instead of us - that was actually really liberating for us to not be int he game of "knowing what to render before we render". Here's a repo I hope people who are interested in a static route config analysis will get involved: https://github.com/ReactTraining/react-router-addons-routes |
