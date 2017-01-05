---
title: Jonathan Carter & Geoffrey Goh
date: July 7 2016
---
## Engineers @ Microsoft Working on CodePush

LeBLaaanc: Oh hey i'm the guys who keeps complaining about CodePush making new releases when I'm building 50 apps simultaneously 😉  
**lostintangent**: Hey! We hope to have that issue fixed as of React Native 0.29.0, now that we can reliably determine equivalence between different JS bundles 😃  
LeBlaaanc: yea we are waiting for some android modules to update to get 0.29 going, soon enough!  

nmn: [Q&A] Can you go into some of the unique ideas of the React Native extension for Visual Studio Code  
**lostintangent**: For now, we simply wanted to provide an authoring experience that also allowed easily debugging your code, without needing to switch contexts to another tool (e.g. Chrome)  
**lostintangent**: Chrome obviously provides a lot of benefits over what is integrated in VS Code today, but over time, we hope to figure out what folks are interested in seeing added 😃  

senthilsivanath: [Q&A] Any plans for typescript support to react native ??(edited)  
**geof90**: I was under the impression you could already use TypeScript with RN, although I have not tried it myself  
**lostintangent**: There's a community maintained d.ts file, which helps with using TS + React Native. Are there other areas you are interested in?  
senthilsivanath:  techically true u can build but practically RN is changing so rapidly my dts is out of sync   
**lostintangent**: That is definitely a problem that we could hopefully get some community support from 😃  

asdf: [Q&A] Is there wizard incoming for facilitating getting started on React Native on Windows OS? Getting started takes most of the time in React Native as developer on Window OS  
**lostintangent**: Our team isn't unfortunately involved directly in the React Native on Windows efforts, so I'm not entirely support what they may have planned. That said, I will relay the desire to continue improving the getting started experience  

andreasb: [Q&A] Without having too much experience using Codepush, I'd still like to know: are there any immediate drawbacks of pushing app updates outside of Apple's ecosystem (app store)?  
**geof90**: If you are talking about drawbacks in terms of "Will Apple reject my update or ban my app", I think the answer is no because in practice, we have many many apps on our showcase that are using CodePush to ship live updates to their production apps on the app store. If you are talking about technical drawbacks, keep in mind that CodePush only ships updates to JS and assets (images, sound, video), if there are native code changes (e.g. you added a new plugin), you would still have to rely on the app store  

MacKentoch: [Q&A] Am I alone feeling like React Native Upgrade does not helps as much as I'd like (I mean loosing images assets...)? Upgrade is like init a new project and just keep my js app.  
**lostintangent**: That is a great question, that I'll leave up to the React Native team to answer 😃  
MacKentoch: nice I feel like impatient to read  
**lostintangent**: Read the docs?  
**lostintangent**: With RNPM being merged into the React Naitve CLI, I look forward to seeing the improvements that are made to the dev experience, including improvements to the upgrade command 😃  

LeBlaaanc: [Q&A] any thoughts on integrating something like hot module reload to CodePush so the app doesn't have to be quit for CodePush to update?  
**geof90**: it's something we'd love to explore in the future. Do you think you could leave an enhancement request issue on our GitHub repo? That would make it easier for us to track how many people want a feature added  
**geof90**: also I think HMR is only enabled in dev builds? Work might have to be done to enable it in release builds  
**lostintangent**: In general, supporting HMR-like updates is someting I would really love to see us do in the future. We haven't taken the time to investigate how realistic it would be, but it would be an awesome end-user experience for sure  
LeBlaaanc: All, feel free to "vote" on HMR question https://github.com/Microsoft/react-native-code-push/issues/419  

senthilsivanath: [Q&A] any plans to interpret flow metadata to typescript just like closure ??  
**lostintangent**: I'm not aware of any immediate plans to add Flow support to the TypeScript compiler, but interop is important to the TypeScript team, so it could make sense if the demand was there. Would that be something you were interested in? Possibly so that you wouldn't need to keep d.ts files up to date?  
senthilsivanath: yes. That would be very helpful for react watchman and other FB js repos   
**lostintangent**: Yep that totally makes sense. I'll reach out to the TypeScript team and will ping you directly with more details on what plans there are here  

ncnlinh: [Q&A] Any plan or thoughts about building a GUI for Codepush or maybe integrating with VSCode in addition to the current CLI?  
**lostintangent**: Yep, this is definitely something we plan to address in the near future. We love our CLI, but we definitely recognize that there's an oppurtunity to simply the management experience in a way that doesn't require remembering commands that you aren't likely using on a daily basis (unlike something like Git).  
ncnlinh: thank you that's awesome  

clearing: [Q&A] Is there a way to track a crash that causes automatic rolbacks?  
clearing: for clarity — i generally have at least 1 or 2 rollbacks per update, but all of the others are successful  
**lostintangent**: Not currently, but we are planning to add better integration with existing crash reporting services very soon. We added support for identifying rollbacks to help surface this data, but we didn't neccessarily want to introduce yet another crash reporting service into the ecosystem, so we'd like to provide a simple way to use Crashlytics/HockeyApp/etc. along with CodePush  
**lostintangent**: If you're seeing intermittent rollbacks, on a handful of users, then that is a bug in our plugin, and we should work with you to address it 😃  
clearing: right, that makes sense. thanks!  
clearing: oh okay, i'll see. what are the general causes of rollbacks? failure to replace the jsbundle?  
**geof90**: If you look at our docs, notifyAppReady() its the API that "rubber stamps" an update as successful. A rollback happens when after an update is applied, the notifyAppReady() isn't called (due to the app crashing after update, or in some other cases, a misconfiguration in the way sync() or notifyAppReady() is called)  

dmitry: [Q&A] How long you will work in this project? 😄  
**lostintangent**: As long as people are using it 😃 We have lots of feature requests, improvements, plans, etc. to keep improving the product, and integrating with other services/plugins/workflows, so we'll be around for a while 😃  

Roilan: [Q&A] Not sure if this was answered before but, what was the motive behind creating CodePush? Is there an internal Microsoft project that needed this system and then decided to open source it?  
**lostintangent**: We originally spiked on creating it due to numerous teams within MS building Cordova apps, and had a desire for better release agility. However, we started hearing the same desire from lots of VS customers, and other devs we talked to, so we decided to release it publically and see if anyone would care about it or not. Our team were also huge React Native fans, so we decided to add support to it as well, and its been awesome being able to be a part of this community thus far 😃  
gcrab: that is awesome. Do you guys struggle with the RN releases breaking from release to release?  
**lostintangent**: We scout RN releases pretty religiously, and for the most part, we've only had problems with RN 0.19, and most recently with RN 0.29  
**lostintangent**: That said, the RN team has been amazing in working with us to ensure that we get unblocked when they introduce breaking changes, so we've never had any significant issues with being able to support new RN releases very closely after they're released  
gcrab: 28 killed us in a lot of ways and we are skipping migration until 30. Currently on 25. It becomes very difficult to develop for a moving target sometimes 😃 such is life on the bleeding edge. Thanks for your response,   My take away is that we need to engage and support the team directly more.   
gcrab: Specifically they need to have a better test and automation environment on multiple platforms.   

gcrab: [Q&A] Tangential: when will vscode have tab support in the wild (not internal)?  
**geof90**: I think the VS code team is in a better position to answer that question 😃  
gcrab: I had to try 😃 thanks  
gcrab: wrt hockey app, we are a customer and are curious about official RN support on both iOS and Android.   
**lostintangent**: We've been collaborating a little bit with the community-created RN HockeyApp plugin to help as much as we can, but moving forward, we plan to spend a lot more energy on providing a 1st class HockeyApp experience for RN  

Brent Arias: [q&a] I'm curious how many of the [React Native dev issues expressed here](https://blog.addjam.com/react-native-its-not-all-sugar-and-spice-cb5d6b25eae9#.ulccsdqne) are on Microsoft's radar for IDE improvement.  
**lostintangent**: Let me skim that article real quickly so that I can answer you 😃  
Brent Arias: Summary points from the article: (1) React Native does not have a recommended project template...everyone devises their own and (2) unlike native development (iOS/Xcode or Android/Android Studio), with React Native you have a terminal (with a couple of panes), a text editor, perhaps Redux Remote DevTools plus your IDE for the platform you are targeting....in short, a messy developer tooling experience  
**lostintangent**: The project template topic isn't something we're currently thinking about, but I would definitely love to see this improve. Pepperoni, Ignite, Snowflake, NativeBase, etc. are pretty awesome, and I think help immensely with getting started, and standardizing on a set of conventions. From our perspective, I think we'll definitely need to provide some prescriptions from any tooling / authoring experiences we have (e.g. VS Code), to help folks get started. but the community is in a much better position to help define what great standard project templates look like, so I'd like to see us integrate with some of the aforementioned better  
**lostintangent**: Regarding your comment about RN requiring a disjointed, multi-tool setup: we're definitely interested in providing an integrated, yet interopable/loosely coupled/etc. experience in Visual Studio Code. We started by allowing you to do step debugging of JS directly within the editor, but moving forward, we're very interested in improving the experience, reducing context switching, etc. in ways that make the most sense  
vcarl: yeah, IDEs can't really exist until each of the tools that make them up exist  
**lostintangent**: Yeah totally. We hope that VS Code is a great editor, but it will only be successful in the context of the amazing work that the community is driving. So as improvements as made in the platform, and ecosystem, we hope to collaborate as much as we can to see what kind of integrated authoring experience is possible, without it becoming too "bloated", and definitely without "locking" you in to any specifically workflow  

Brent Arias: [Q&A] Just a tangential suggestion...to float the idea to the Xamarin team to offer React rendering as an alternative to XAML. 😍  
**lostintangent**: I will pass that on to the team. I'm not on the Xamarin team, but since they've joined Microsoft, I can assure you that I never pass up an oppurtunity to tell them how awesome React Native is 😃(edited)  
markspolakovs: lol, please remind them at every opportunity! 😛  

agmcleod: [Q&A] Is there a site of information where I can find out more about this? Jumped in a bit late  
**geof90**: Finding out more about CodePush? You could visit our site, https://microsoft.github.io/code-push/, which usually have updated docs, otherwise, the management CLI docs is a great place to start https://github.com/Microsoft/code-push/tree/master/cli  
agmcleod: Ah awesome. Also saw mention of "continuous delivery with VSTS (Visual Studio Team Services)"  
agmcleod: Any sort of CI with react native might be worth looking into. Was asked this morning to help quote a RN app at work actually  
**lostintangent**: You can check out the VSTS + CodePush integration docs here: https://microsoft.github.io/code-push/docs/vsts-extension.html  
**lostintangent**: Awesome. Check out the docs and then feel free to ping us in the #code-push channel later if you have any further questions  

kamek: really interested in Code Push, how much longer do you guys plan to stay in beta ?  
**lostintangent**: We're shooting to exit beta in the next couple of months, since at this point, we have a lot of users in prodiuction, and feel very comfortable with the quality of the product, and the fact that he have the right feature set in place. We just have a few remaining items to complete, along with getting a formal SLA in place, etc.  

Sam: [Q&A] What exactly are the rules for whether a code push release gets picked up by a react-native app? Does it have to have the same semver as the compiled native version?  
**geof90**: Yes, the native version has to fulfil the semver range specified in the codepush release  
**lostintangent**: We also do a hash comparison of the update contents contained with the contents in the binary and/or the currnetly running CodePush update, so that the end user doesn't get updates that they're already running  
Sam: ... Ok gotcha. So if I release to App Store with 1.0.1, and I want to make sure that fresh installs don't redownload anything, what codepush semver should I avoid?  
**lostintangent**: We support all "standard" semver range expressions, so just don't use any range which would include 1.0.0 and 1.0.1. Examples are "1.0.x", "~1.0.0"  

Sam: [Q&A] what if I want to publish the source-map generated from release-react so that an API can pick it up to be used when the app crashes, and wants to make a request to get appropriate error logs. Is there anything that facilitates this in code-push ecosystem?  
Sam: Example: a release is minified, and at some point app throws exception. Client wants to call a service with minified line and col, and get back details to be logged to crashlytics.  
**lostintangent**: We don't currently do anything with the JS source maps generated from your bundle file, so we would just recommend storing them as approrpaitely, so that you have them for each app build you would need to debug crashes for  
**lostintangent**: As we integrate more deeply with crash reporting services, however, we will be interested in how we can tighten this workflow
