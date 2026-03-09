---
title: Tabnine Team
date: 2022-01-27
time: 1-2pm PT / 8-9PM GMT
location: Q&A Channel Reactiflux
description: "Tabnine is building a top-to-bottom AI-assisted development workflow that empowers all code creators, in all languages, from concept through to completion."
people: "[@ShinanYotam](https://twitter.com/ShinanYotam)"
---

**Q:** What advice would you give to students studying CS in university today? – HomemadeToast

I think one great tip that really has helped me is to build fun projects on the side. There's nothing like building something you enjoy and have fun with beyond the standard curriculum. That's just one tip off the top of my head 🙂

---

**Q:** Will Tabnine be available for Vim? – BSK

Thank you for the question! Tabnine is actually available for Vim as well as many other IDEs! You can check out the different Vim installations here: https://www.tabnine.com/install/neovim

---

**Q:** What is the best way to learn React? I'm getting started but on my own. – Billy

I think this question gets asked a lot. I'm no genius in React myself, but when I was getting started I built a site I really needed. This ties back to my previous answer.. there's nothing like building something you're truly excited about.. that would be the greatest way to get the ball rolling. That of course coupled with great resources.. one I loved was TheNetNinja's stuff. He has some really great videos. Worth checking him out, as well as Sonny Songha who does awesome builds.

---

**Q:** Most of your value proposition seems to be around 'team level AI' and privacy. How does that still benefit individual developers compared to Copilot? – Kim

Kim.. that's a great question! Thank you.

You're definitely right about Tabnine providing the most added value for teams collaborating on projects. The great thing currently about Tabnine for individuals is that they can still connect their GH repos and have Tabnine train a custom, private model, for them as individuals. This works really well and has been getting great adoption, beyond the Teams product. Privacy wise I think I'll dive a bit deeper later, that's a whole topic I'd be glad to cover!

---

**Q:** How is tabnine different from copilot? – dhavall08

Copilot is great and we're excited to have Microsoft in the market, as its great market validation for us, it shows that AI assisted software development is here to stay, which is something we’ve believed in for a while, but it’s nice to see that a tech giant like Microsoft also shares this vision. In terms of how they differ, each tailors to slightly different crowds. Tabnine offers team models and is great with anything privacy related, whereas Copilot is using slightly heavier models. One of the biggest differences is definitely Tabnine's team product, while Copilot does not offer. Licensing wise, Tabnine is trained only on fully permissive open source code, whereas Copilot is trained on all the code on GitHub. So, naturally, Copilot will sometimes give stronger predictions, but its a tradeoff game.

---

**Q:** When will PayPal be accepted as a payment method for tabnine? – Togira

Unfortunately, I don't think it'll be coming in the near future. I hope that will change but as of now that is the case. We can hopefully find a creative solution, maybe write to support and they might be able to help..!

---

**Q:** Why I should use tabnine? I don't really see the advantages of ai completions yet. For me it's because the code or solutions are not neat enough – M4rcinek

Well, this is something we are constantly working on making better for the user. It is really, really hard to give great predictions that are easy to consume and speed up developer experience rather than slow you down. We have made many improvements to the models and to the UX in the past months and I urge you to give it a shot! I also got you guys 50% off Tabnine Teams for your first 3 months if you want to give it a shot at https://tabnine.com/promo/reactiflux

---

**Q:** what do you suggest me to do as a developer to both keep up with my job and have healthy life? what I mean is I am currently completely damaging my health by using PC for long periods of time and my social skills have gotten very bad. my eyes also see a bit blurry. any tips? – alixsep

Vitamin D is a big one here, that's just my first tip! You have to get outside, and take breaks. I absolutely love my job, but still make sure to step outside every once in a while (I know it's hard in the winter..!) but it's super important. Remember – you can't do your job reliably over a period of time if you aren't healthy – mentally and physically.

---

**Q:** Tabnine is a very unique type of program. It being "AI" powered, I imagine there is some Neural network in there. Can you explain in short how such a program works? e.g. which steps does it take to go from a bunch of text to a single suggestion? Or is it more like a black box? – mees

I can touch on this, but of course it's just a very general overview. Tabnine models were trained on MILLIONS of lines of code from all over the internet. These models are constantly evolving as well. When you type in your IDE, the client interacts with the model and "asks" it what would be relevant to what you are doing. There is of course a massive neural network in this, and managing memory to deliver suggestions reliably and quickly is a tough task, which is why we use Rust for most of the engine. (sidenote: we ❤️ rust)

---

**Q:** Hello Ron, thank you for your time. Do you think bots can beat humans at poker reliably? Do you think a bot can reliably figure out if a human or a bot is playing poker? – alpha_ulrich

Haha great question..! I don't know about Poker specifically, but AI is rapidly evolving. Look at how it plays Chess, for example. Seeing as Poker is also a game of emotion and "mind games" I don't know how quickly AI will be able to beat humans.. but hey, I have no idea and am excited to see what the future holds!

---

**Q:** I have bought tabnine about 4 months ago. I have to say the free version is actually better than the paid one. I have so many usless suggestions and the good ones ive had when there was only one, were far better. It feels underwhelming :( – Origin

This sounds weird to me, I'll be honest. Please DM me and we can maybe look into it to make sure you're getting the right experience! 🙂 I'll be happy to help.

---

**Q:** What do you do to stay active and overcome social media distractions? – Billy

As I said earlier, get your sun! And the best way to stay productive and overcome social media.. is pretty harsh but.. keep the phone out of the office. That's the only way I've found effective.

---

**Q:** Long time tabnine user. Couldn't live without it, but with the future release of github copilot: why should I stay with tabnine, and what does tabnine plan to offer in the future to stay competitive? Thanks – Roboto

That's a great question Roboto, thank you. We are doing a lot to stay competitive, including working on integrating into other places in the development cycle (coming soon!) as well as providing stronger, next gen models. As I said earlier, two of the serious differentiators are our Teams product (training custom models and learning from your team's practices) as well as privacy and licensing. I have to say that custom models trained on specific repos are doing really really well and I invite you to give connecting your GitHub repos a shot! I think you'll be impressed.

---

**Q:** If I use TabNine, how much of my code goes back into training? – alpha_ulrich

None. Yep, that's right, I said none. We don't train on your code. The only time your code is used is to improve your LOCAL model. We don't take any of that back, and in fact, we have no idea what even goes into it. It is a fully automated process, and the code is encrypted on its way out and deleted immediately after, making for a secure and safe experience.

---

**Q:** Why don't you train with our code if we give you permission? Is that something that can/will be added in the future? – ImDarkk

There are so many great, public sources of truth out there to improve our universal models. Your code is used only to improve your experience. We don't want to run the risk of infringing your privacy, and the same goes for licensing. When training you a PRIVATE model, your code is used for training but that is only for you. As I said, no one, not even Tabnine, sees the code going in.

---

**Q:** If I use tabnine on my laptop and on my pc with the same account, lets say I use it 90% on my pc and only 10% on my laptop, will tabnine offer me better suggestions on my pc since it's being used more? and if that's the case, is there something I can do to sync the models? – Togira

That's a good question – I'm not sure actually, I'll have to check for you! You can DM me, but I think if you have cloud enabled, your models may sync

---

**Q:** what type of network model do you use in tabnine (transformer, rnn)? – lapfed255

We're using transformer models. It's actually quite tricky to effectively utilize RNNs these days as they're quite slow and cannot digest the massive amounts of data a model like this needs to see. There are other reasons for why transformer models are great, but yeah, ever since they entered the game, the whole space has taken a huge leap forward.

---

**Q:** Is tabnine integrated with VSCode – alpha_ulrich

Yes..! You can get Tabnine for VSCode right in the marketplace or at tabnine.com/install/vscode 🙂

---

**Q:** How do you assure code quality? Of course open source projects are full of great stuff, but on the other hand control over the code is more fuzzy. – czyzu1710

That is a great, great question. There are some trade secrets here that unfortunately I cannot share, but we invest a great deal of time ensuring code quality. Making sure you train on quality code is probably one of the most important aspects. Or rather, giving the proper weight to great code. Otherwise, you'll just get GIGO (garbage in garbage out)

---

alico Actual: **Q:** will ai write better software than humans in the near future? – Leafeon

Well, the short answer is no. AI is evolving and will continue to assist us in many aspects of our lives, including in software development. The main reason I don’t think AI is going to be replacing developers anytime soon is mostly because much of what a developer does is understanding the spec and intent of the project. AI can do specific tasks but where it still lacks is in that aspect. The way we see it is that AI and the developer are a team. The AI won't be writing better software than the dev, it'll just be making their experience much smoother, allowing them to focus on the important and creative parts of software development.

---

**Q:** Is there any chance you will integrate blockchain tech into your model by allowing people to "mint" code that they wrote so that the model can learn from them and maybe even reward them with some incentive (crypto, etc.)? This seems very interesting to me. This way, no code would need to be stored on any servers, mitigating much of the costs on your end. – HomemadeToast

That isn't currently on our roadmap, but sounds mega interesting. I am a fan of blockchain technology, and this could be really cool.

---

**Q:** Will TabNine have block code generation based on comments, like Copilot? Or it already does? – lapfed255

You guys are going to have to stay tuned and hold tight with this one..! I promise you won't be disappointed. The short answer is that you should look forward to better models, longer completions and more this year 😉 But that's it, no more spoilers!

---

**Q:** Does TabNine get data from our code to train itself? – JS_Artboy

Nope. None. I answered this a couple questions ago, Tabnine does not and will not train its universal models based on your code. There's enough excellent code out there for us to not need to infringe on your privacy.

---

alico Actual: **Q:** how much does ai reduce development or debugging time, or otherwise improve the coding experience? where can i go to find information on that – Leafeon

That's a great question! I don't know about AI as a whole, but Tabnine specifically has shown to save between 15-25% of developer's time, and writes between 25 and 35% of their code..! if you're using Tabnine, you can see the insights inside Tabnine's Hub, it's pretty cool. (click on Tabnine in the VSCode status bar and you'll be taken to the hub)

---

**Q:** How do you think Tabnine goes with learning how to code? IE if I'm learning to code will it help me to improve my skills or the opposite, slow this process down? – czyzu1710

Czyzu, that is a great question. We have a bunch of students using Tabnine and actually provide them with the option to get some of Tabnine's premium features using their student email.
From what we've seen, it is helpful to many intermediate developers and can definitely help when starting out, it's kind of a matter of preference. I urge you to try it out and see for yourself 🙂

---

**Q:** Does TabNine support Solidity or Vyper? – alpha_ulrich

Hmm.. not too familiar with those. My guess off the top of my head is no, but you should check at https://www.tabnine.com/install

---

**Q:** How much of the tabnine codebase is written by tabnine itself? 🤔 – Jasper

Hmmm. Short answer is I have no idea, but I'm guessing it's also around the 20-25% mark. Again, most of Tabnine was written.. well. with Tabnine 😅

---

Thank you all for having me and for asking great questions! It was really fun and I had a great time. @Gabe thank you for setting this up. If anyone else has more questions – please DM me or write them in our Tabnine discord server -> https://discord.gg/QzQjrMmagd
