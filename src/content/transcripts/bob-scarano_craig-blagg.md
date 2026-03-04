---
title: Bob Scarano & Craig Blagg
date: 2019-08-15
time: 1-2pm PT / 8-9PM GMT
location: Q&A Channel Reactiflux
description: "Bob is the team lead of the Mobile Content-Editing team at Squarespace. Craig is the team lead of the Design Platform team."
people: "[@scarano](https://twitter.com/scarano) & [@iwillreply](https://twitter.com/iwillreply)"
---

## Bob Scarano & Craig Blagg, team leads at Squarespace

<a name="hey-if-you-have-a" href="#hey-if-you-have-a">#</a> **Q:** Hey, if you have a deeply nested object in state which represents a folder hierarchy, and you need to create a file explorer GUI. How would you approach this and how would you manage state in that case? – HopesFlyHigh

**A:** For the file explorer GUI, we would typically separate out entities from the object that represents the shape of nesting.

– cblagg

---

<a name="squarespace-non-discriminatory-company" href="#squarespace-non-discriminatory-company">#</a> **Q:** Squarespace === non discriminatory company to work for? I’ve seen things in the news about this – pixelcure

**A:** We believe very strongly in diversity and have a very wide breadth of people who collaborate here. We have a dedicated D&I team that spends a lot of time coaching and teaching and creating a safe, open environment so we can have a wide variety of opinions.

– bobscarano

---

<a name="which-other-technologies-do-you" href="#which-other-technologies-do-you">#</a> **Q:** Which other technologies do you use alongside React and which do you plan on using in the future? – JustEscaped

**A:** Technologies we use alongside React, we also have legacy codebase in our frontend that is built on YUI, that pre-dates React.

We don’t actively write any additional YUI, and migrate off of it as we can. Avoiding a large rewrite in one go.

– cblagg

Our apps are really very "super hybrid" meaning that we have native, combined with react-native, combined with webapps, that all intercommunicate. We feel this stack has enabled us to do what we want when we want it without feeling like we have to go "all-in" in any particular technology while leveraging tons of code re-use across platforms

– bobscarano

---

<a name="hi-guys-im-curious-about" href="#hi-guys-im-curious-about">#</a> **Q:** Hi guys! I’m curious about the process you go through at a large established company for deciding to use React Native, which is in such an active development state. Was it a hard sell? Were there any interesting tradeoffs you weren’t expecting to have to overcome when the idea first came up? – Sylnir

**A:** It was definitely a hard sell on the mobile team because there are a spectrum of emotions about JS among native mobile devs. We were able to focus on specific use cases where we could say to ourselves, "does it provide some definite re-use and lift for choosing this technology." Also, we were looking to share tons of code between existing web-app and with ios/android so that we could move fast. I’ve noticed that many of those were at first nervous about trying RN are now choosing RN first for some features. We’ve seen a huge boost in productivity and code-sharing that we’ve not been able to realize before.

– bobscarano

---

<a name="how-can-i-deal-with" href="#how-can-i-deal-with">#</a> **Q:** How can I deal with bulk of images loading and caching in React Native, what is the best approach? – Krish

**A:** With loading a bulk of images, the focus we would have there is primarily on limiting data over the wire. We would look at this in 2 ways primarily, firstly ensuring images are cached locally across sessions (and then flushing following long durations of non-access), and using virtualized lists to not render images that are in cells out of view.

– cblagg

---

<a name="what-is-the-most-frequent" href="#what-is-the-most-frequent">#</a> **Q:** What is the most frequent obstacle you come across in RN side of things? – Rintsi

**A:** So there’s a few answers to this. One was that we didn’t want to write everything multiple times, once for mobile, ios, then android. We needed to find a way of developing components that shared a large amount of business logic so we could move fast but without compromising on the platform. Our solution is something highlighted in the chain-React talk, which was to organize our code in a way that allowed for re-use of business logic across platforms while still allowing you to use CSS on web or StyleSheets on RN. The other was generally crossing the native/RN boundary. We’ve built some toolkits that ease with some of this so we don’t have to write so much boilerplate to do so. And if you’ve read any of my tweets, I’ve also been playing with some mad scientist experiments so you can write native-modules completely in JS.

– bobscarano

---

<a name="what-is-the-most-challenging" href="#what-is-the-most-challenging">#</a> **Q:** What is the most challenging thing right now in front end development? – HopesFlyHigh

**A:** On the design systems team here at Squarespace, a number of challenges we often face are: (1) level of offering of flexibility of component systems, with consistency across the product (balancing theming solutions, render props, or encapsulated appearance and logic), (2) delivering our component library, and major version increments to it across a multitude of different repos with layered dependency/peerDependencies, and getting the correct sequencing in doing so.

– cblagg

---

<a name="hey-hope-youre-doing-well" href="#hey-hope-youre-doing-well">#</a> **Q:** Hey! Hope you’re doing well! :smiley: With the addition of React Hooks within functional components recently, what factors do you take into consideration when choosing between a functional component vs. class component? Do you always start with a functional component? What is your process in this regard? – mostlymat

**A:** Typically will always start with a functional component (even prior to hooks)—for ease of testing—really considering where statefulness and/or lifecycle needs to be added—often higher up the hierarchy.

– cblagg

---

<a name="is-that-okey-to-learn" href="#is-that-okey-to-learn">#</a> **Q:** Is that okay to learn React and JS related libraries even companies are focused on PHP? – SirHesham

**A:** I think it’s a fantastic investment of your effort to go deep on JS. It’s only getting more popular and more prevalent, at least for front end development. If you’re talking about back-end, it’s kind of a mix. We here use Java for our server backend primarily but there’s no shortage of nodejs servers in the world!

– bobscarano

---

<a name="what-makes-react-native-better" href="#what-makes-react-native-better">#</a> **Q:** What makes React Native better than Flutter? – Tee

**A:** For us it was an easy decision because we have a lot of people who already know JS and React. We are able to leverage this expertise to build things faster, but to also share code between web and mobile. And that’s really the big advantage for us. Expertise and re-use. We are seeing something along the lines of 70% reuse between web and mobile without compromise on experience for the user and for developers being able to use tools they are familiar with. Also there’s something to be said about the maturity of RN.

– bobscarano

---

<a name="have-you-come-across-any" href="#have-you-come-across-any">#</a> **Q:** Have you come across any RN packages/tools that helped improve performance/experience? – whiz4rd

**A:** We use many of the common packages and tools that are in the ecosystem. The likes of Redux for our stores, `memoize-one` is a library we’ve used for a while for expensive operations, we’ve contributed some PRs back to `react-native-wkwebview-reborn` which we use for our webviews (generally and also in things like our native `RichText` input).

– cblagg

---

<a name="what-are-the-libraries-you" href="#what-are-the-libraries-you">#</a> **Q:** What are the libraries you use in your React Native app? – HopesFlyHigh

**A:** I love `react-native-restart` it was so handy when we caught exceptions and `react-native-exception-handler` along those same lines. `react-native-fast-image` is fantastic for image caching, and react-native-gesture-handler is fantastic for gesture handling. these are just a few examples but those jump to mind immediately.

– bobscarano

---

<a name="in-regards-to-state-management" href="#in-regards-to-state-management">#</a> **Q:** In regards to state management. What are you highest priorities when dealing with state? – mostlymat

**A:** One of our highest priorities was dealing with state when using native navigation. We had rolled our own navigation, we had tried other navigation libs, and wound up going back to writing one that is a variant of how Dialogs work in RN so that we can have a single state. So TLDR one of our biggest challenges was maintaining state across native + React.

– bobscarano

---

<a name="what-are-your-processes-in" href="#what-are-your-processes-in">#</a> **Q:** What are your processes in regards to technical writing/documentation? – mostlymat

**A:** Engineers on my time write a good volume of documentation as we create components and libraries. We use React-docgen for extracting prop docs across our components, use React-live in our documentation of components, and also additionally have a dedicated technical writer on my team—who is continually pushing us forward along with standardizing the documentation that is written.

– cblagg

---

<a name="what-is-the-average-timeline" href="#what-is-the-average-timeline">#</a> **Q:** What is the average timeline for having a feature sketched on a napkin to implementing it in production? – tank

It’s actually pretty fast, mostly because design, engineering, and product all work very closely together. Also, because we have a design system and DSLs that help us build things like forms, we don’t spend a lot of time thinking about exotic UIs because we kind of understand what our capabilities are.

– bobscarano

---

<a name="how-do-you-handle-forms" href="#how-do-you-handle-forms">#</a> **Q:** How do you handle forms and their validation in React and React Native? – HopesFlyHigh

**A:** We have an internal form library that renders to web, and then iOS and Android (via React Native). It is backed by our internal component library (that has ~100 components with normalized APIs across each platform) for rendering inputs and fields. The library accepts a config object for describing the form and data mappings, which are also then used to validate the data against a corresponding JsonSchema for each form.

– cblagg

---

<a name="which-navigation-library-are-you" href="#which-navigation-library-are-you">#</a> **Q:** Which navigation library are you using and why? – levani

**A:** We rolled our own. the main reason was that we needed to be able to mix native views with react-native views and we needed to be able to maintain a single state across all of the views in the navstack. what we wanted to do was to use the history-stack as what we store into state and when that changes, we re-render. this allowed us ton of flexibility to "go native when we want to" and also to build navigation using more React-patterns but still use actual native navigation-controllers. It is based on the way that dialogs work—which is a way of rendering a view into a different portal.

– bobscarano

---

<a name="for-select-and-multiselect-input" href="#for-select-and-multiselect-input">#</a> **Q:** For select and multi-select input fields in React/React Native, do you use a library (React-select), roll your own, or use the native browser/device UI? – cmcaboy

**A:** We rolled our own for this.

– cblagg

---

<a name="can-i-integrate-teactnative-app" href="#can-i-integrate-teactnative-app">#</a> **Q:** Can I integrate a react-native app with a websockets webapp? – elmawardy

**A:** I believe to do so you’ll need to use native as the broker between the 2 domains. We have a similar thing where we have a very robust webapp that intercommunicates with react-native and have built interfaces between all the domains to do so. If you are doing the same I very much recommend to build your interfaces as an async/promise-based protocol.

– bobscarano

---

<a name="whats-your-take-on-microfrontends" href="#whats-your-take-on-microfrontends">#</a> **Q:** What’s your take on micro-frontends? The industry seems slightly divided on the idea. Have you considered/tried it out? – deadlock

**A:** I think micro-frontends are a response to issues medium/large companies may have around the duration of delivering product, and the autonomy of separate teams to do so. Personally, I think there are a lot of opportunities for micro-frontends to be dangerous to overall user and application experience. The possibility of very quickly delivering large amounts more code than one would through a unified build pipeline, the potential for side-effects or pollution of namespaces colliding (whether in your code, or libraries that may exist in your project), stale data across a view in your application where 2 "micro frontends" edit data in session without having shared stores—or convoluted sharing of data across applications.

– cblagg

---

<a name="what-do-you-think-of" href="#what-do-you-think-of">#</a> **Q:** What do you think of hooks?? Do you prefer classes? – HopesFlyHigh

**A:** I think hooks are the prescribed path forward from the React team, who have discussed the benefits of them, and I typically don’t try and fight the tide. The benefits and possibilities of composing business logic however, are very appealing.

– cblagg

---

<a name="what-devops-pipeline-tools-are" href="#what-devops-pipeline-tools-are">#</a> **Q:** What DevOps pipeline tools are you using? And what kind of threat mitigation methods have you implemented? – Rintsi

**A:** For our Javascript libraries, we use Drone for CI. Docker based, it gives teams flexibility to configure their own pipeline, dependencies and tasks as needed. We have testing baked into our build pipeline for libraries on this. And continually publish to our internal npm on each merge to master—much in the way product is continually delivered

– cblagg

---

<a name="i-work-on-a-squarespace" href="#i-work-on-a-squarespace">#</a> **Q:** I work on a Squarespace website from time to time, and as a developer I can’t stand it because it prevents me from sometimes executing on business tasks/requirements. For instance, there is no way to customize the checkout page. What are you thoughts/feelings about the limitations Squarespace puts on developers? – Sean22

**A:** Some things are certainly more customizable than others. I think for the most part our users are the DIY type who prefer that everything is integrated without having to pull lots of external software. That said, I’m happy to send your request for better customization of the checkout form to our Commerce team. They’re always super interested in user experience and making people happy!

– bobscarano

---

<a name="do-you-use-redux-why" href="#do-you-use-redux-why">#</a> **Q:** Do you use Redux? Why? – tie87

**A:** Even though there is frequently discussion in the industry around how ContextAPI may make Redux redundant. We do use Redux, the tooling that is built around Redux to form an ecosystem is highly valuable—to developer experience through redux-devtools, along with easily extended for the likes of history stacks.

– cblagg

---

<a name="what-testing-framework-and-setup" href="#what-testing-framework-and-setup">#</a> **Q:** What testing framework and setup you guys use? – Aman

**A:** Jest, Cypress, and some home-built snapshot testing. Also for hybrid apps, we use EarlGray and serialize the entire UI from native down to react-native and webapps for snapshot testing.

– bobscarano

---

<a name="a-very-simple-question-or" href="#a-very-simple-question-or">#</a> **Q:** I’m starting with React Native and there are lots of things to take in. What suggestions do you have about what path to follow? – ashish_feels

**A:** First I should say the documentation for RN is amazing. I would spend the time to read it top to bottom just to familiarize yourself with what’s even available. Then, I’d give yourself a project that you intend to ship. That, and read tons of other peoples’ code. At least for me, that’s the best way to learn!

– bobscarano

---

<a name="do-yall-have-any-favorite" href="#do-yall-have-any-favorite">#</a> **Q:** Do y’all have any favorite JS libraries that y’all make frequent use of? – chasethat

**A:** We listed some of the React Native specific ones we use further up the thread (some from both Bob and I). We are also users of common libraries such as lodash for utilities, while having a lot of our own internal utility libraries for various things such as DOM interaction to color conversions and selection.

– cblagg

---

<a name="can-you-explain-your-home" href="#can-you-explain-your-home">#</a> **Q:** Can you explain your home build snapshot testing? I’d be interested in learning more about how to build something like that. I currently use backstopJS but would find it interesting to learn how to build snapshot testing myself. – Sean22

**A:** We have a hybrid app, so we want to be able to snapshot test everything from native on down. What we do is serialize the UI into JSON that captures the view-hierarchy from native, serializes the contents of the DOM for webapps, and serializes the react-native UI. We write that all out to JS and strip out some of the more dynamic attributes (specially in the webapp) and use that for comparison. We are using more "greybox" testing for that than "blackbox" simply because it allows us to setup preconditions more easily.

– bobscarano

---

<a name="would-you-recommend-building-an" href="#would-you-recommend-building-an">#</a> **Q:** Would you recommend building an app through React Native doc or through some course being pretty new to RN? – Tee

It all depends on how you learn. everybody is different. I’m the type of person who learns by reading other peoples’ code and by doing. I’d start with a project and try to ship it. I simply cannot learn by videos or online courses—I have to do. But maybe you’re different and that works for you.

– bobscarano

---

<a name="its-more-of-an-opinion" href="#its-more-of-an-opinion">#</a> **Q:** It’s more of an opinion but still I wanna know from you guys, As a new graduate for a job if I have to choose between a role for React web and React Native, what do you think I should choose (considering the future growth) in your opinion and why? – Aman

**A:** I would not be one to speculate on a specific technology and effecting/selecting a career path based upon it. The industry is continually moving, and will continue to do so, I would recommend focusing your time on learning and understanding patterns and architecture design fundamentals, that continue to be transferrable as technology choices evolve.

– cblagg

I would add to craig’s answer by saying it’s best to "learn how to learn and adapt" as technologies come and go but being a curious person can last a lifetime!

– bobscarano

---

<a name="would-you-consider-using-flutter" href="#would-you-consider-using-flutter">#</a> **Q:** Would you consider using flutter in future and where do you see it in future as compared to RN? – Aman

**A:** The answer is similar to a previous question. We’ve got tons of talented JS developers under this roof. making the leap from web/React to RN is one we’ve seen many people be successful in. For that reason, and the reason of being able to share code between web and mobile, we really think JS and RN are the way to go.

– bobscarano

---

<a name="is-it-a-good-idea" href="#is-it-a-good-idea">#</a> **Q:** Is it a good idea to have importing components/ librarires for stuffs like animations and other things. does this makes the app heavy ? So how do you maintain the size of the app what you use in your development process to keep a check on appsize? – ashish_feels

**A:** In our internal libraries and applications we use a number of mechanisms for measuring overall library sizes, typically similar to webpack-bundle-analyzer and reporting bundle sizes on each build to our internal graphing service, to measure trends. Some of our libraries also maintain the output of this in the repo, so it’s visible in PRs as to how the specific change effects payload sizes.

– cblagg
