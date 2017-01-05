---
title: Devin Abbott
date: May 25 2016
---
## Engineer @ Deco Software

| username | question |
| ---: | --- |
| vcarl | hey guys!! @dabbott is here to answer some questions about Deco software's react native IDE |
| | please start questions with Q&A] so i can find them more easily later |
| **dabbott** | hi all! |
| vcarl | if you haven't heard of it, their website is https://www.decosoftware.com/, and the video is pretty dope |
| **dabbott** | lemme add a profile photo... lol |
| | better |
| vcarl | **[Q&A] how's development going? i see you're still in a closed beta, somebody in here mentioned that they've been waiting for a while for a beta key** |
| **dabbott** | We're gonna officially launch next Wednesday! |
| | It'll be free and open source |
| | So... development is going pretty well, I'd say |
| charliesbox | wohoo! |
| vcarl | oh that's super awesome |
| **dabbott** | we did the beta thing to iron out bugs. it's not perfect, but it's reasonably stable, so it should be ok to have a lot more people try it out |
| vcarl | "reasonably stable" is more than i could ever say about eclipse haha |
| **dabbott** | hahaha, yeah. it's more stable than eclipse |
| | I'm not sure if that's saying much |
| vcarl | quite a tagline, "more stable than eclipse!" |
| westcode | great work, just seen the video looks very nice to work with 😃 |
| **dabbott** | Here's a more up-to-date screenshot |
| charliesbox | **[Q&A] what was the hardest goal to accomplish in deco's development?** |
| **dabbott** | hmmm... there are a few things that come to mind |
| | 1. Getting the text editor to be sensible about JSX/ES6/React stuff. And other text editor features in general. This is a LOT of work |
| | Even though we use CodeMirror (open source), there's a lot we had to do custom |
| | 2. Working with the environment stuff is super tricky. Watchman, running the iOS simulator... basically anything that touches the operating system. Very poorly documented. |
| | 3. We have an innovative feature where you can manipulate anything in your code... in realtime! But it has a lot of issues. |
| | Some of them still unsolved. |
| | We have some good ideas for solutions, but first want to see if people use it |
| | Those 3 are the hardest things that come to mind |
| westcode | **[Q&A] will deco be available for windows?** |
| adri | **[Q&A] thanks for the screenshot, looking great. Is Deco a OS X app? Will it be available for other platforms?** |
| | Good question @westcode haha |
| **dabbott** | It won't be for Windows on Wednesday. But it's written on Electron, so porting it to windows shouldn't be too bad. |
| westcode | @adri 😉 |
| **dabbott** | I'm hoping someone can cantribute windows support, since it's not really my area of expertise 😉 |
| | So, it's an "OSX App" but it's actually written with React + Redux |
| | It just looks like OSX thanks to careful CSS. |
| | Even if it ran on windows.... it will look like OSX. |
| adri | Great thanks  |
| vcarl | **[Q&A] how well does the insert mode shown off work, in your experience? is that video sped up? it seems too fast for it to account for npm install 😃** |
| **dabbott** | Haha, the video isn't sped up at all, but there is some demo magic going on. |
| | In our first version, we actually hot reloaded over a separate websocket |
| | So changes would be ~30ms to see on the screen |
| | Now we use the hot reload which is part of RN (it wasn't in master at the time)... and it's ~300ms or more 😦 |
| | So it's a little slower now |
| | But in terms of inserting components with npm dependencies |
| | you're right - you will have to wait for it to npm install |
| | still lightyears faster than doing it manually - and of course, if it's a RN-core thing, you don't need to npm install anything |
| | Overall, this is the feature I like most |
| adri | **[Q&A] seems like a lot of work, how is Deco financed?** |
| **dabbott** | we raised a small angel round right when we started |
| | now we'll try to become profitable without taking on more investments |
| | things may change of course |
| | but the plan is to do a few things that can help us monetize |
| | 1. tools and services around the IDE (assuming the IDE gets some traction) |
| | 2. expanding into other developer/design tools based on what we've learned |
| | 3. working with companies (we have a few pilot ones we're talking to) to integrate deco into their workflow for prototyping/design/style guide stuff |
| | we also plan on doing some RN contracting |
| LucasKA | **[Q&A] how far off is Live Testing on Android support?** |
| **dabbott** | basically, the only thing missing for Android support is a "launch emulator" button |
| | if you react-native run-android manually, and then use Deco to edit your code files, it will all work |
| vcarl | **[Q&A] any plans to expand to web react? it'd take a lot to make me switch off sublime, but that inserting and the properties might do it** |
| **dabbott** | we sometimes use Deco for web react 😃 |
| | actually, we sometimes use Deco to edit Deco (very meta) |
| | we wanna focus on RN and make that experience as good as possible first |
| | but since we'll be open source if the community really takes the IDE in the React direction, that's fine with us too |
| | most of it is agnostic to React web/native... and even to React. you could use it with other stuff. |
| | you probably won't switch of sublime/atom entirely. that's not our goal right now, cause we just can't compete in terms of features and robustness with these tools which have been in development for 5-10 years |
| | so Deco will be the place you go to prototype ideas or new screens, do visual work, etc |
| vcarl | that's what i was thinking it would be most useful for, it's cool to hear that's your target |
| **dabbott** | I like being in the prototyping/visual space because it means we can try experimental new ideas and see how they work 😃 |
| | A lot of stuff in the IDE is quite different than anything we've seen in other IDEs, and I hope it stays that way |
| | Although I also think we should try to merge some of our best ideas into Nuclide or whatever makes sense |
| gtfargo | @dabbott  whats a guy gotta do for a beta key to mess with over the weekend? 😉 |
| LucasKA | Serious 😄 |
| **dabbott** | haha, you should probably wait till the launch Wednesday, but if you really want a key now you can just email me dabbott@decosoftware.com |
| | seriously though, wait till Wednesday 😉 |
| | our current build is missing a lot of my favorite stuff |
| | i mean, our current production build if you install it today instead of next week |
| Olliepop | can't wait @dabbott |
| **dabbott** | 😄 |
| gtfargo | **[Q&A] what are your current, top product pains  surrounding React Native ?** |
| **dabbott** | Hmmm... my biggest one is probably docs. Since I've seen/helped a lot of people get started with RN, I've seen people continuously struggle with just getting basic stuff on the screen. |
| Olliepop | @gtfargo Broken Navigation due to NavigationExperimental being merged in 0.23 |
| **dabbott** | Navigation is a big one too. I'm not sure what to recommend to people. The old nav stuff is obviously not right, and the new one is still "experimental", I guess |
| gtfargo | @Olliepop don't think you are required to use navigationexperimental |
| | As of this week my team has trashed all our efforts of working with old Nav or NavExp and started building a custom one |
| | Its not easy. |
| Olliepop | It's definitely heading in the right direction |
| **dabbott** | Yeah |
| | Another big area people struggle with is figuring out how to manage data |
| | It's always a hodgepodge combination of redux, asyncstorage, realm, a REST API, GraphQL, Firebase, whatever |
| | which if you know what you're doing is nice cause it's super flexible |
| | but as a beginner you're not sure what to use or where to start |
| | and there's no "right way" |
| westcode | struggling atm :p |
| **dabbott** | 😛 |
| Olliepop | I always point people towards redux and this boilerplate app: https://github.com/bartonhammond/snowflake/tree/master/src |
| **dabbott** | that looks pretty nice |
| | I'm hoping a few boilerplates will totally dominate |
| | and we can include them in Deco |
| | so when you create a new project, you have a few options for setting up the entire app with routing/data |
| westcode | @Olliepop thanks! i will be checking that out tommorow, docs look good |
| LucasKA | @Olliepop I used that as the boilerplate for my app, and I think it introduces too many concepts/options at once. Not just in Redux, but also a parse or hapi back end. So out of the gate there's cruft and all the react concepts, plus React Native. |
| |  |
| | I started with a react-native init and thought it was much simpler, and then added the things I needed as I needed them. |
| | and learned them |
| | Just my opinion on it, not saying it's bad. 😃 |
| **dabbott** | Anything else? |
| vcarl | you want to do some feature demos? |
| | if you have a streaming thing set up |
| **dabbott** | I never set one up. Probably can in 5 or so. |
| vcarl | i'm sure some folks would love to see those fancy new features you were talking about |
| **dabbott** | sure. lemme set something up |
| gtfargo | yeeeeea |
| westcode | niceeeee |
| Olliepop | @LucasKA Yes i agree about the backend, that should have been left to a more traditional/vanilla approach. |
| **dabbott** | this livecoding.tv thing is pretty complicated |
| | I'm live here now: https://www.livecoding.tv/dabbott/ |
| | if anyone has specific things they'd like to see, lemme know |
| gtfargo | 👍 |
| gtfargo | errr... idk.   can you just show some general ui? |
| **dabbott** | sure |
| | overall UI: files and components on the left |
| | text editor in center |
| | properties on right |
| | properties appear when I add components, or I can manually add by alt+clicking a value in my code |
| gtfargo | whoa groovy.   And that component list, im assuming thats drag-and-drop? |
| | sweet!  where are the external components pulled form? js.coach?  or do you curate yourself... |
| westcode | want much |
| **dabbott** | currently curated myself - the list is here: |
| | https://github.com/decosoftware/deco-components/blob/master/package.json |
| | we'll figure out something more scalable in the future |
| gtfargo | Split panes? |
| **dabbott** | not yet 😦 |
| | the text editor isn't that awesome |
| gtfargo | Thats alright, this is really cool.  good work @dabbott |
| **dabbott** | so that's one of the big reasons why you'll still use sublime/atom for a lot of your core editing |
| gtfargo | What is that discuss button? |
| **dabbott** | you can chat with us other other Deco users on [Slack](https://decoslackin.herokuapp.com/) |
| gtfargo | 👍 🎊 🙌 |
| | can those default props that get imported be changed per-project  somewhere? |
| **dabbott** | hmmm... that's a good idea |
| | not yet |
| | the whole component insertion thing works pretty well, but there are a lot of details we might want to revisit |
| | right now it's actually inserting templates that we made manually |
| gtfargo | ah |
| **dabbott** | but it would definitely be more scalable if we just scanned props (or maybe let authors add) and generated the template from that |
| | templates have the advantage that they can be more than just React stuff |
| | like you could insert anything, really |
| gtfargo | right, dig it. |
| | what navigation is it using currently? |
| | or is that done by hand |
| **dabbott** | basically I wasn't sure what to do with navigation |
| | this navbar is done by hand |
| | its just something I found on npm |
| | and made a deco template for |
| | react-native-navbar |
| | we don't help you much with navigation |
| | mainly cause I'm not sure what to recommend at the moment |
| gtfargo | makes sense.  At this stage I see deco as an interactive prototyping tool for individual screens.  Super helpful for designers for obvious reasons, and helpful when the baton gets passed to a developer since its already coded out to a degree |
| | I'm excited to give it a whirl, especially since we have a new hire with limited experience starting soon.  cool stuff |
| **dabbott** | awesome! 😃 |
| | yeah, we think it can help a lot with the strange hand-off from designers to engineers |
| | possibly even a common ground where both can contribute |
| gtfargo | for sure.  thanks for the demo @dabbott, i'll let others ask questions  😄 |
| **dabbott** | 😄 |
| | anything else from anyone? |
| | @vcarl should we wrap it up? |
| westcode | 😄 |
| | it looks really nice to use |
| **dabbott** | it's pretty fun |
| | I only show the "good" paths |
| | so hopefully it's still as awesome when you guys try it next week 😃 |
| westcode | looking forward to it |
| **dabbott** | thanks for the questions guys! |
| westcode | thank you for taking your time 😄 |
| vcarl | yeah seems about over haha |
| | thanks for coming in! super jazzed to give this a shot |
| **dabbott** | awesome, lemme know how it goes after you try it |
| vcarl | i've never dug into react native before, maybe this will get me over the hump |
| **dabbott** | 😃 if nothing else you can make an app as amazing as the one I just livestreamed |
| gtfargo | hahaha |
| westcode | best app ever |
| | 8D |
