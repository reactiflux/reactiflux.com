---
title: Ryan Florence
date: November 23 2016
---
## React Router Co-Author | [https://reactjs-training.com](https://reactjs-training.com)

| username | question |
| ---: | --- |
| Gabe | hey all welcome to the Q&A! thanks for being here @ryanflorence |
| **ryanflorence** | Woah, I've never had to be silent for that long before... |
| Gabe | lol |
| **ryanflorence** | my pleasure! |
| brandon | welcome :smile: |
| aaronjensen | **how do you `<Match exactly pattern="">` (the parent match only, no sub /foo)** |
| **ryanflorence** | @aaronjensen  I don't know, can you visit that url in a browser? |
| aaronjensen | @ryanflorence the analog to matching pattern="foo"... which could match /bar/baz/foo if the parent match was /bar/baz/:id?. |
| aaronjensen | I want to match when :id is blank |
| **ryanflorence** | @aaronjensen open an issue and we can try to figure it out. @mjackson has been working on the <Link to/> prop and will support "relative urls" to the matched location, which might be what you're talking about |
| aaronjensen | Will do, thanks. |
| sean | **More React30 episodes when?** |
| **ryanflorence** | @sean oh man ... we're so booked lately and have stepped up our OSS game so it's hard to find time for it all. We have a whole list of folks and topics we want to cover. I have no specific dates when we'll do the next one, but ... soon? |
| EvNaverniouk | **React Router v4 looks very cool. What's the idea behind the version 3 beta? Why not jump right into the work being done on version 4?** |
| **ryanflorence** | @EvNaverniouk version 3 is just version 2 w/o deprecation warnings. @timdorr is working on getting that shipped so he'd be better to ask |
| antmdvs | **How do you feel about stateless functional components? You used createClass() in your last presentation. Do you prefer that over ES6 classes and SFCs?** |
| **ryanflorence** | @antmdvs so there are a lot of ways to create a component right? even the old-school 2006 "module pattern" works as a component |
| **ryanflorence** | in our workshops we switched to classes about a year ago |
| **ryanflorence** | it was a TRAIN WRECK! |
| **ryanflorence** | because understanding JS context is hard |
| **ryanflorence** | and so people had a really hard time getting through the exercises |
| **ryanflorence** | so then it gets us really introspective |
| **ryanflorence** | if this is a pain in the neck in a workshop, what about in your actual code w/ your team? |
| **ryanflorence** | I dunno! |
| **ryanflorence** | but anyway, we still use createClass in our workshops but we may be switching to classes because of create-react-app's support of "class property declarations" |
| **ryanflorence** | since that's getting a lot of attention... |
| antmdvs | are there any actual benefits to SFC besides terseness? |
| **ryanflorence** | seems like it's okay to use the "not-yet-javascript" that it uses |
| **ryanflorence** | one sec |
| maxdeviant | That basically answered my question :smile: |
| **ryanflorence** | I'll get there! |
| mattste | **Does v4 have a solution for passing props to a component besides HoC? It'd be nice to do something like ** |
| mattste | `<Match pattern="/myprofile"><Profile type="personal" /></Match><Match pattern="/mypubicprofile"><Profile type="public" /></Match>` |
| mattste | Passing component to `<Match />` seems like holdover from the old way of doing things instead of rendering it's children. I may be thinking about this wrong. Awesome job to you and the team on this release. It feels a lot better. |
| threepointone | @mattste `<Match pattern="/myprofile" render={x => <Profile type='personal' {...x} />}/>` |
| threepointone | [sorry, jumped in] |
| mattste | @threepointone thanks, but That still makes me believe my comment still stands that passing a render prop isn't the component-based path v4 strives to be. It just feels odd |
| **ryanflorence** | okay, @mattste: |
| **ryanflorence** | looks up a gist |
| **ryanflorence** | struggles to find the gist |
| **ryanflorence** | FOUND IT! :tada: |
| **ryanflorence** | [Link](https://gist.github.com/ryanflorence/a301dc184f75e929a263dc1e80399a28) |
| **ryanflorence** | @mattste ^ read that, that's why we don't do the "children as elements" in the Match API |
| **ryanflorence** | so class property declarations aren't JS yet, so we are hesitant to use them in workshops, but in my own code I use them and that's the only way I can bear to use ES classes because they make "auto binding" really nice |
| **ryanflorence** | as for SFC |
| **ryanflorence** | those are basically just really cool templates, right? |
| **ryanflorence** | so if I don't need the lifecycle hooks, and just need to tuck some "markup" away, a SFC is great |
| **ryanflorence** | so I use classes when I need hooks and state, SFC when I don't |
| Foxhoundn | I think that's a hard thing for beginners to process |
| Foxhoundn | There are Components, PureComponents and Stateless components |
| Foxhoundn | We have moved to using only Stateless components with recompose and I have way less gray hair |
| mattste | Okay, thanks :smiley: |
| CPT | **Is there planned support for param default values?** |
| **ryanflorence** | @CPT  this.props.params.foo || 'foo' seems like enough? |
| CPT | That makes components less reusable** |
| **ryanflorence** | `<Match render={(props) => <Component params={addDefault(props.params)}/>}/>` |
| **ryanflorence** | wrap that up in a MatchWithDefaults component |
| **ryanflorence** | BOOM bob's your uncle |
| CPT | thanks |
| timarney | **outside of classes what's the most common point of confusion people have in your workshops?** |
| **ryanflorence** | hmm ... hard to pick "one thing" |
| **ryanflorence** | people struggle with just JavaScript itself |
| **ryanflorence** | like, not knowing there's [].map and [].filter |
| **ryanflorence** | how to mess around w/ objects in JS |
| **ryanflorence** | React really throws JS back in your face |
| **ryanflorence** | and lots of people haven't done much ... uh ... "real work" with JS before |
| timarney | Interesting |
| **ryanflorence** | the other thing is probably what a valid JS expression is |
| **ryanflorence** | we can say "once you do {} in JSX, any valid expression can go there, because it's really just an argument to React.createElement" |
| **ryanflorence** | but most of us haven't done very much w/ JS expressions before React |
| **ryanflorence** | but the questions we get in a workshop are rarely react related, usually they're JS questions :joy: |
| timarney | Ya I guess timing of ES2015 + React |
| aaronjensen | **Why isn't render children it seems more common than what is currently used for children** |
| **ryanflorence** | children in Match will always render if it matches or not |
| **ryanflorence** | check out the animation demo |
| aaronjensen | yes, i know I was just curious as to why the render prop and the children prop aren't reversed since so far the render prop seems to be used more and the children prop is more "natural" |
| **ryanflorence** | we decided htat since one rendred conditionally and the other was always, that children made more sense to "always render" since you typically expect that API. |
| aaronjensen | got it, thanks. |
| sandeshsoni | **scenario : I have login container that does part of login. After login, I want to switch to dashboard container. how do I do this? I have react router. If question is incorrect, suggest a post/gist that looks useful.** |
| **ryanflorence** | https://react-router.now.sh/auth-workflow |
| EvNaverniouk | **If you could wave a magic wand and fix one thing about the JS/React community, what would it be?** |
| **ryanflorence** | Aside from normal social justice problems that are just problems w/ the whole world, I guess I don't know what's broken! I love both JS and React communities, so much exploring, so many ideas. It's a blast to be a JS developer today. |
| **ryanflorence** | so I would leave the wand in its case probably |
| antmdvs | would you like a magic wand to answer all these questions? |
| antmdvs | i noticed @en_js went Twitter-silent after that :smiley: |
| antmdvs | **This may be a sore subject, but I saw a lot of FUD around the RRv4 preview and Relay (lack of static route config?). Can you talk to (or point me to) the latest developments on that discussion? I'm not using Relay right now, but keeping an eye on it.** |
| **ryanflorence** | first of all, you can use `<Relay.Renderer>` anywhere in a router v4 app and it just works™ |
| **ryanflorence** | heh, well, now relay has to solve it instead of us |
| **ryanflorence** | that was actually really liberating for us to not be int he game of "knowing what to render before we render" |
| antmdvs | good deal |
| **ryanflorence** | here's a repo I hope people who are interested in a static route config analysis will get involved: https://github.com/ReactTraining/react-router-addons-routes |
