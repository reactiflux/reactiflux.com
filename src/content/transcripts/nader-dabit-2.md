---
title: Nader Dabit
date: 2020-10-01
time: 1PM - 2PM PT
location: Q&A Channel Reactiflux
description: "Founder @ [React Native Training](http://reactnative.training/) | Host of [React Native Radio](https://devchat.tv/react-native-radio) | Author of [React Native in Action](https://www.manning.com/books/react-native-in-action)"
people: "[@dabit3](https://twitter.com/dabit3)"
---

<a name="will-react-native-be-able" href="#will-react-native-be-able">#</a> **Q:** Will React-Native be able to match native performance in the near future? – Joel

**A:** React Native will probably never be able to beat Native performance, and overall it will be somewhat slower than native in the grand scheme of things because it's still an abstraction on top of native. React Native continues to improve, but the native platform also continues to evolve so RN, or _any_ XP platform, will almost always be slightly behind and somewhat slower.

The value is still there though because of all of the other great things you get out of it.

---

<a name="your-amplify-content-is-awesome" href="#your-amplify-content-is-awesome">#</a> **Q:** Your [Amplify][amplify] content is awesome, but I'm wary about costs since it seems like an abstraction of multiple AWS services. Any tips on tracking these expenses? – rahsheen

**A:** [Amplify][amplify] (the framework) is actually free, you're just paying for the individual AWS services in the same way you would if you created them with something like SLS framework, cloudformation, or the console.

If you use [Amplify][amplify] hosting, it's the only "service" that costs money.

You can track your expenses with billing alerts .

The reason so many people are using [Amplify][amplify] is that it's providing a better UX than was available in the past, and they do not want to pay the additional money that a lot of the serverless service providers out there add on to their abstractions that are actually just built using AWS anyway but at 10x the price.

---

<a name="do-you-think-knowledge-of" href="#do-you-think-knowledge-of">#</a> **Q:** Do you think knowledge of Data Structures and Algorithms is important as a developer having ~1 year of experience or doing more projects will help? – yhpez

**A:** I have never taken any true Data Structures and Algorithms courses at a university, though I have taken free courses from Stanford, Harvard, MIT, etc.. that are available online.

This lack of knowledge has made me fail various job interviews, but others it has not.

I would say it's always better to know more, but _not_ knowing them does not mean you will not land a solid job if you keep improving your skillset everywhere else.

---

<a name="since-youve-been-heavily" href="#since-youve-been-heavily">#</a> **Q:** Since you've been heavily invested into [Next.js][next-js] lately, have you thought about adding people from the [Amplify][amplify] team to collaborate as contributors to the [Next.js][next-js] core? – marbiano

**A:** We've started building out more investment into SSR support across all modern web frameworks, including Next but also Nuxt, SSG frameworks, and future tech like Remix (to name a few).

I think collaborating / contributing to these projects is something we should / can definitely consider. AWS has recently been investing a lot more into open source contribution. I will definitely see what our team can do to collaborate more individually with these projects going forward.

---

<a name="can-you-give-the-good" href="#can-you-give-the-good">#</a> **Q:** Can you give the good starting points related to doing open source contribution? Going through new big complex code bases which are different from your current work and complex? (like, you're a developer using those APIs vs actually understanding those APIs)? – mihirs15

**A:** I would say find something that you're already using and spend some time digging through a feature that you're very familiar with.

Start small like documenting something that was not documented or not documented well, and then move on to functionality.

Go into the issues and try to find something that looks like you can manage and see what you can do. I would even suggest reaching out to OSS maintainers and asking for good first issues if they are not already flagged into their issue tracker.

---

<a name="when-is-part-2-of" href="#when-is-part-2-of">#</a> **Q:** 👋🏾 When is part 2 of the [Next.js][next-js] [Amplify][amplify] tutorial coming out haha I loved the first one. Happy to see you here! – Sonicrida

**A:** Hey, working on it now! Should be out early next week.

Also working with CSS tricks on a comprehensive [Next.js][next-js] on AWS tutorial, an end to end guide for everything from data to auth to deployment with custom domains and cache control.

---

<a name="what-are-you-most-excited-about" href="#what-are-you-most-excited-about">#</a> **Q:** What are you most excited about in the React ecosystem? – mihirs15

**A:** I'm still really excited about the innovations around hybrid frameworks like [Next][next-js], [Remix](https://remix.run/), and what we will probably see a lot more of in the future. I'm also excited about the stability we've seen with React. It's been really nice to have a somewhat stable ecosystem over the past few years after the JS fatigue of the mid 2010's.

---

<a name="in-your-opinion-will-the-react-native" href="#in-your-opinion-will-the-react-native">#</a> **Q:** In your opinion, will the react-native platform for desktop applications be in a stable version soon? I think it will be used a lot, what do you think? – Alessandro Marra

**A:** I think that for any large project in the React Native ecosystem to be successful, it will take either a considerable effort of the community or a large / capable company adopting it and leading it. Because of the level of abstraction that is React Native combined with the instability that we often see, for a platform to survive and thrive and continue to be stable it just takes a lot of time, money, and effort. So the answer is no, not on it's own or by a slight community effort, only if there is a leader / company willing to take the lead on it long term which from what I can tell right now is maybe no? (though I do see React Native Windows seems to be well maintained)

---

<a name="what-is-your-go-to-technique" href="#what-is-your-go-to-technique">#</a> **Q:** What is your go-to technique when comparing trade-offs between similar functioning libraries/frameworks? – mihirs15

**A:** I first try not to use any libraries that are maintained by anyone unless absolutely necessary, then I try to find one that has 1. a solid track record of maintenance already or 2. that is maintained by either a trusted community member or a large company. I rarely will use something new in production unless it meets one of those criteria, and almost never will use something that has been around for a while that does not meet those criteria.

---

<a name="do-you-think-pws-is-the-future" href="#do-you-think-pws-is-the-future">#</a> **Q:** Do you think [PWA][pwa] is the future in terms of native apps and will it overcome android/iOS apps in terms of popularity? – yhpez

**A:** It seems that [PWA][pwa] is merging into just "web" in the sense that almost all of the capabilities there are often built into modern web apps (with the exception of the app on the device screen). I think that native will continue to serve a purpose, hybrid (RN + Flutter) will continue to serve a purpose, and web will continue to serve a purpose. So basically I don't see any winner take all any time soon, but I do see the success and prosperity of all three platforms continuing for the foreseeable future unless something significant happens with app distribution in App Store / Google Play store.

---

<a name="awss-documentation-resources" href="#awss-documentation-resources">#</a> **Q:** AWS’ documentation, resources and tutorials from the past 2 years have been amazing. Does AWS have plans to make minor/major changes to the AWS console UI to flatten the learning curve at all? Or make it any more friendly for beginners or is it something that we just have to deal with? – dilraj

**A:** There's a large effort internally going pretty far up to focus on improving the on-boarding process and DX of AWS as well as focusing on lowering the barrier of entry to new developers. [Amplify][amplify], CDK, and HoneyCode are all playing a pretty large role there. I think these will be the entry-points to help lower the barrier to entry in the future along with a few other services / projects currently in the works. It's a big priority and we have already seen a massive number of devs new to the cloud or interested in serverless / Jamstack development on-boarded through some of these technologies platforms already, and we are doubling down on them now and in the future.

---

<a name="what-do-you-think-about-the-concept" href="#what-do-you-think-about-the-concept">#</a> **Q:** What do you think about the concept of react-native web and technologies like it? – Dreamplay

**A:** I think these are amazing technologies, but like a lot of things in the React Native ecosystem need / require a lot of investment / time / work to keep them up to date with the changes in the React Native framework itself. As long as there is a concerted effort there in one of these projects to maintain and improve over a long period of time they will probably continue to improve and be more of a viable solution for companies looking for those types of solutions.

---

<a name="do-you-have-any-advice-for-low" href="#do-you-have-any-advice-for-low">#</a> **Q:** Do you have any advice for low-income students looking to learn React Native but who don't have access to hardware resources such as physical devices or computers capable of running emulators? Mostly considering the case where students are interested to test their apps on iOS after having it work on Android. – Mike Bars

**A:** Unfortunately not with real devices, but AWS and Google have free tiers for things like "Device Farm" that allow you to run tests on real devices in remote facilities.

---

<a name="regarding-the-aws-cms" href="#regarding-the-aws-cms">#</a> **Q:** Regarding the AWS CMS, I am thinking that [Amplify][amplify] is great but it is missing a lot of CMS features, and to turn [Amplify][amplify] into a headless CMS perhaps.

It is one the reasons we are still using at me company and for personal projects other CMS or headless CMS such as Strapi, Contentful to manage content instead of using AWS entirely as I usually use AWS to manage content and database. 🙂 – juancarlosjr97

**A:** Yeah I think most AWS services are lower level and would allow you to build your own CMS (and it would be cheaper), but you would not get the good velocity and DX out of the box like you do with some of the really great options that are out there now (like the ones you mentioned). It's actually something we're considering adding as an offering though in the future as part of [Amplify][amplify], but not this year.

---

<a name="how-do-you-decide-on-betting" href="#how-do-you-decide-on-betting">#</a> **Q:** How do you decide on betting on new technologies? – Yusadolat

**A:** I'm a huge fan of this topic! I spend a ton of my time reading (audio books, physical books). I spend a lot of my time learning tech (books, courses, videos, focused learning time). I think all of this learning goes into how i choose a new tech. The more you understand about the world and how the systems work in the world, combined with your technical expertise and the understanding of the current tech ecosystem and how it fits into your current skillset, the easier it becomes to make these choices.

At the end of the day for me it's about spotting patterns and spotting opportunities for huge upside. To me it's about really well executed abstractions that enable me to do 10x (or so) more that I was able to do before, or to enable me to do something I wasn't able to do before.

Add to that the future growth and demand of that tech + how much money I may be able to make from it (this is why I focused on React, RN, cloud and not some of the other hyped tech that you see some people investing in) and I usually place a bet and go all in. You should treat it kind of like a balance + a gamble, spread your bets and be sure not to go bankrupt, but have a few bets placed that "if" they hit, you are set up for massive success.

---

<a name="what-kind-of-changes" href="#what-kind-of-changes">#</a> **Q:** What kind of changes do you think should be made to interview process when interviewing candidates for Frontend Engineering roles?

The rounds mostly focus on Algorithms and trivia JS knowledge mostly.

So, should it be more live coding oriented stuff and if so, what are some of the topics one can ask so that it is feasible to wrap the pair programming interview in 1 hour or so? – mihirs15

**A:** IMO the big problem here is that many companies do not tailor the interview to the position, so they end up asking the wrong questions. Are data structures and algorithms important to know? it _depends_. Like you mentioned, many front end developers will never need to know anything about them. If you are working on some really advanced system, you _may_ need them, but if you don't then it should not be part of the interview.

The thing I've learned more regarding interviews / people over the past few years though is to focus on hiring for capability vs current knowledge. If you find someone who is capable of just getting shit done and learning what they need to, that's all that matters. If they can google their way around and find the answer, then who cares what was in their brain the minute before, at the end of the day they solved the problem. Technical interviews should be tailored to finding problem solvers and people who can get shit done vs things they have memorized to pass the interview.

Unfortunately, we're not there yet as an industry but there are smart people trying to solve this.

---

<a name="ive-always-wondered-what" href="#ive-always-wondered-what">#</a> **Q:** I've always wondered what the key differences are between Azure, GCP, and AWS; Would you be willing to outline some of the quantifiable differences for a end user? – doge

**A:** I would say that they are all similar in certain ways but they do indeed have tradeoffs that are worth considering. I unfortunately am biased since I work at AWS so I would probably recommend finding one solution (maybe a serverless API), and implementing the same service in all 3 clouds. Then go into the consoles and play around with the service. Do this 1 or two more times for other services. This will probably take you a day or 2, but after that you'll have a good idea about which you prefer and which you should focus you time on learning more about.

[amplify]: https://aws.amazon.com/amplify/
[next-js]: https://nextjs.org/
[pwa]: https://web.dev/progressive-web-apps/
