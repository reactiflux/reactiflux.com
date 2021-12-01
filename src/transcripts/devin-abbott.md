---
title: Devin Abbott
date: 2016-05-19
location: Q&A Channel Reactiflux
description: "Deco Software | Topic is Deco their awesome React Native IDE"
people: "[@devinaabbott](https://twitter.com/devinaabbott)"
---

## Engineer @ Deco Software

<a name="hows-development-going-see-youre" href="#hows-development-going-see-youre">#</a> **Q:** How’s development going? i see you’re still in a closed beta, somebody in here mentioned that they’ve been waiting for a while for a beta key

**A:** We’re gonna officially launch next Wednesday! It’ll be free and open source. So… development is going pretty well, I’d say. We did the beta thing to iron out bugs. it’s not perfect, but it’s reasonably stable, so it should be ok to have a lot more people try it out. (...) It’s more stable than eclipse

---

<a name="hardest-goal-accomplish-decos-development" href="#hardest-goal-accomplish-decos-development">#</a> **Q:** What was the hardest goal to accomplish in deco's development?

**A:** Hmmm... there are a few things that come to mind.

1. Getting the text editor to be sensible about JSX/ES6/React stuff. And other text editor features in general. This is a LOT of work
   Even though we use CodeMirror (open source), there's a lot we had to do custom
2. Working with the environment stuff is super tricky. Watchman, running the iOS simulator... basically anything that touches the operating system. Very poorly documented.
3. We have an innovative feature where you can manipulate anything in your code... in realtime! But it has a lot of issues.
   Some of them still unsolved.
   We have some good ideas for solutions, but first want to see if people use it
   Those 3 are the hardest things that come to mind

---

<a name="deco-available-windows" href="#deco-available-windows">#</a> **Q:** Will deco be available for windows?

**A:** It won't be for Windows on Wednesday. But it's written on Electron, so porting it to windows shouldn't be too bad. I'm hoping someone can cantribute windows support, since it's not really my area of expertise 😉 So, it's an "OSX App" but it's actually written with React + Redux. It just looks like OSX thanks to careful CSS. Even if it ran on windows.... it will look like OSX. |

---

<a name="well-insert-mode-shown-work" href="#well-insert-mode-shown-work">#</a> **Q:** How well does the insert mode shown off work, in your experience? is that video sped up? it seems too fast for it to account for npm install 😃

**A:** Haha, the video isn't sped up at all, but there is some demo magic going on. In our first version, we actually hot reloaded over a separate websocket, so changes would be ~30ms to see on the screen. Now we use the hot reload which is part of RN (it wasn't in master at the time)... and it's ~300ms or more 😦 So it's a little slower now - but in terms of inserting components with npm dependencies, you're right - you will have to wait for it to npm install - still lightyears faster than doing it manually - and of course, if it's a RN-core thing, you don't need to npm install anything. Overall, this is the feature I like most.

---

<a name="seems-like-lot-work-deco" href="#seems-like-lot-work-deco">#</a> **Q:** Seems like a lot of work, how is Deco financed?

**A:** We raised a small angel round right when we started, now we'll try to become profitable without taking on more investments. Things may change of course - but the plan is to do a few things that can help us monetize:

1. tools and services around the IDE (assuming the IDE gets some traction)
2. expanding into other developer/design tools based on what we've learned
3. working with companies (we have a few pilot ones we're talking to) to integrate deco into their workflow for prototyping/design/style guide stuff

We also plan on doing some RN contracting

---

<a name="far-live-testing-android-support" href="#far-live-testing-android-support">#</a> **Q:** How far off is Live Testing on Android support?

**A:** Basically, the only thing missing for Android support is a "launch emulator" button. If you react-native run-android manually, and then use Deco to edit your code files, it will all work

---

<a name="plans-expand-web-react-itd" href="#plans-expand-web-react-itd">#</a> **Q:** Any plans to expand to web react? it'd take a lot to make me switch off sublime, but that inserting and the properties might do it

**A:** We sometimes use Deco for web react 😃 Actually, we sometimes use Deco to edit Deco (very meta). We wanna focus on RN and make that experience as good as possible first, but since we'll be open source if the community really takes the IDE in the React direction, that's fine with us too. Most of it is agnostic to React web/native... and even to React. You could use it with other stuff. You probably won't switch of sublime/atom entirely. that's not our goal right now, cause we just can't compete in terms of features and robustness with these tools which have been in development for 5-10 years. So Deco will be the place you go to prototype ideas or new screens, do visual work, etc

<a name="thats-thinking-would-useful-cool" href="#thats-thinking-would-useful-cool">#</a> **Q:** That's what i was thinking it would be most useful for, it's cool to hear that's your target

**A:** I like being in the prototyping/visual space because it means we can try experimental new ideas and see how they work 😃. A lot of stuff in the IDE is quite different than anything we've seen in other IDEs, and I hope it stays that way, although I also think we should try to merge some of our best ideas into Nuclide or whatever makes sense

---

<a name="dabbott-whats-guy-gotta-beta" href="#dabbott-whats-guy-gotta-beta">#</a> **Q:** @dabbott whats a guy gotta do for a beta key to mess with over the weekend? 😉

**A:** Haha, you should probably wait till the launch Wednesday, but if you really want a key now you can just email me dabbott@decosoftware.com Seriously though, wait till Wednesday 😉 Our current build is missing a lot of my favorite stuff - I mean, our current production build if you install it today instead of next week |

---

<a name="current-top-product-pains-surrounding" href="#current-top-product-pains-surrounding">#</a> **Q:** What are your current, top product pains surrounding React Native ?

**A:** Hmmm... my biggest one is probably docs. Since I've seen/helped a lot of people get started with RN, I've seen people continuously struggle with just getting basic stuff on the screen. Navigation is a big one too. I'm not sure what to recommend to people. The old nav stuff is obviously not right, and the new one is still "experimental", I guess. (added by gtfargo) "Don't think you are required to use navigationexperimental - as of this week my team has trashed all our efforts of working with old Nav or NavExp and started building a custom one - Its not easy.". Another big area people struggle with is figuring out how to manage data - it's always a hodgepodge combination of redux, asyncstorage, realm, a REST API, GraphQL, Firebase, whatever - which if you know what you're doing is nice cause it's super flexible. But as a beginner you're not sure what to use or where to start and there's no "right way". I'm hoping a few boilerplates will totally dominate and we can include them in Deco, so when you create a new project, you have a few options for setting up the entire app with routing/data

---

_A live stream with some feature demos is shown_

<a name="show-general-ui" href="#show-general-ui">#</a> **Q:** Can you show some general UI?

**A:** Overall UI: files and components on the left. Text editor in center. Properties on right - properties appear when I add components, or I can manually add by alt+clicking a value in my code

<a name="external-components-pulled-form-jscoach" href="#external-components-pulled-form-jscoach">#</a> **Q:** Where are the external components pulled form? js.coach? or do you curate yourself...

**A:** currently curated myself - the list is here: https://github.com/decosoftware/deco-components/blob/master/package.json - we'll figure out something more scalable in the future

<a name="split-panes" href="#split-panes">#</a> **Q:** Split panes?

**A:** Not yet 😦 The text editor isn't that awesome so that's one of the big reasons why you'll still use sublime/atom for a lot of your core editing

<a name="discuss-button" href="#discuss-button">#</a> **Q:** What is that discuss button?

**A:** you can chat with us other other Deco users on [Slack](https://decoslackin.herokuapp.com/) |

<a name="default-props-get-imported-changed" href="#default-props-get-imported-changed">#</a> **Q:** Can those default props that get imported be changed per-project somewhere? |

**A:** Hmmm... that's a good idea - not yet. The whole component insertion thing works pretty well, but there are a lot of details we might want to revisit. Right now it's actually inserting templates that we made manually, but it would definitely be more scalable if we just scanned props (or maybe let authors add) and generated the template from that. Templates have the advantage that they can be more than just React stuff - like you could insert anything, really.

<a name="navigation-using-currently-done-hand" href="#navigation-using-currently-done-hand">#</a> **Q:** What navigation is it using currently? Or is that done by hand?

**A:** Basically I wasn't sure what to do with navigation - this navbar is done by hand. Its just something I found on npm and made a deco template for react-native-navbar. We don't help you much with navigation. Mainly cause I'm not sure what to recommend at the moment. We think it can help a lot with the strange hand-off from designers to engineers - possibly even a common ground where both can contribute.
