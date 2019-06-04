---
path: "/blog/reduced-motion"
date: "2019-06-01"
title: "A story of reduced motion"
tags: ["accessibility", "reduced motion", "animations"]
published: true
---

In May 2017, [WebKit started communicating about prefers-reduced-motion](https://webkit.org/blog/7551/responsive-design-for-motion/), a new media query targeting users who activated the reduced motion mode on their device. The goal? To serve alternate animations that avoid triggering motion sickness for people with [vestibular disorders](http://simplyaccessible.com/article/balance-awareness/).

## Article outline

1. [Our interfaces can make people sick](#our-interfaces-can-make-people-sick)
1. [Who can benefit from motionless animations?](#who-can-benefit-from-motionless-animations)
1. [A solution too often misunderstood in its use](#a-solution-too-often-misunderstood-in-its-use)
1. [When should we use the reduced-motion media feature?](#when-should-we-use-the-reduced-motion-media-feature)
1. [How to build motionless animations?](#how-to-build-motionless-animations)
1. [References](#references)

## Our interfaces can make people sick

This story starts with the release of iOS7 in 2013 presenting a brand new interface for iOS whose fundamentals are still in use today. Even if this new interface was a success, this release was followed by [important media coverage of people reporting motion sickness and vertigo](https://www.theguardian.com/technology/2013/sep/27/ios-7-motion-sickness-nausea) while using their device.

For one of the first time, digital designers were confronted to the fact that yes, **user interfaces can make people sick**.

Of course, it was not the first interface creating motion sickness. But iOS have a big number of users and Apple has made an effort to make their products accessible which put the spotlight on something often forgotten by web builders: [vestibular disorders](https://a11yproject.com/posts/understanding-vestibular-disorders/) and other cognitive impairments.

Roughly speaking, vestibular disorders affect the users’ balance and their visual perception of the world around them. This is mainly due to a problem with their inner ear.

## Who can benefit from motionless animations?

When browsing a website or using a web application, **animations can have a significant impact on users’ experience**. The motion sickness resulting from iOS’s new animations put the spotlight on the vestibular disorders spectrum but, it is not the only impairment affected by these animations. **Reducing motion effects in animations can help most of the users with cognitive impairments.**

For example, users with reduced attention span (ADHD people, some autistic folks, users recovering after a stroke, etc.) can also benefit from having alternative animations that have less impact on their cognitive load.

Because _motion is wonderful except when it is not_, Apple included [an option in the accessibility settings to allow users the ability to disable some native iOS animations](https://support.apple.com/en-gb/HT202655) like parallax and app launching effects. In 2014, they also [proposed a _reduced-motion_ media query](https://drafts.csswg.org/mediaqueries-5/#prefers-reduced-motion) to avoid creating discomfort to users suffering from motion sickness. Since 2017, heavy animations on their website are replaced by more accessible ones when this option is activated.

Unfortunately, some conditions apply: to this date, this media query is [only supported by Safari, iOS Safari, Firefox and Chrome 74+](https://caniuse.com/#feat=prefers-reduced-motion).

## A solution too often misunderstood in its use

More and more, we can see designers and developers using the reduced-motion media query in their projects. Unfortunately, most of the time this media query is used to disable CSS animations rather than to offer an inclusive experience.

> Reduced motion ≠ No animation

The idea behind this media query is to **decrease the motion sickness of users** experiencing vestibular disorders. Even if we are considering a wider range of impairments with attention-related issues, **the idea was never to remove all animations of an interface**.

**Powerful animations help users to discover, navigate and understand an interface.** Animations are often **needed to offer good user experience** and to avoid users’ cognitive overload with progressive disclosure of processes, content or actions. **Removing all animations unconditionally for users with an active reduced-motion option will impact their experience.**

## When should we use the reduced-motion media feature?

First of all, in the case of vestibular disorders, motion sickness is only triggered by really specific types of animations.

To summarize, motion sickness is mainly triggered by **scaling/zoom effects**, especially when associated with a **blur (dis)appearance**, **spinning or moving elements** and **parallax effects**.

To be more in sync with the usage of this accessibility option by users, we can also add **constant animations** without play/pause controls and **animations requiring a large attention span** or highly distracting.

Let’s face it: this is clearly not the bigger part of the animations we design and build in our interfaces. So removing everything may be a solution, but not nearly the best one.

## How to build motionless animations?

When implementing an animation that could potentially trigger motion sickness, there are some quick ways to update the animation with the _reduced-motion_ media query.

- **Scaling/zoom effects can be removed** if they are mostly used to improve the aesthetic of a page.
  If this effect is used to highlight a specific part of a picture: this effect can be **replaced by a scale/zoom without animation** and/or a caption explaining the focused area (also improving the accessibility of your page for people with visual impairments).

- **Moving elements could be stopped.**

- **Tab views or slide effect between blocks could be replaced by a fading transition** between the initial and final stage.

- **3D product-presentations** used often in e-commerce could be replaced by a motionless 45-degree rotation for example.

- **Constant animations** in the background or near a block of text can be blocked or run only once for a really short period of time.

All other animations like the _Clap animation_ on Medium or the _Like animation_ on Twitter don’t trigger motion sickness, and don’t disturb the experience of the user reading the content. Why would you remove these?

When adapting your website for people with motion sickness or reduced attention span, **only remove the animations triggering discomfort for your visitors with the [`prefers-reduced-motion: reduce` media query](https://css-tricks.com/introduction-reduced-motion-media-query/#article-header-id-3)**.

---

Implementing a _motionless_ version of your animations is a bit like applying the mobile-first principles: **the idea is not to limit the experience of the visitor by offering a reduced version** of your website.

But rather, the idea behind the **inclusive design principles** is to offer a similar experience to everyone regardless of their unique set of abilities and without triggering physical or psychological discomfort. Animations are an important part of the web experience, and we all deserve to get access to these. 🙂

---

## References

- [WebKit: Responsive Design for Motion](https://webkit.org/blog/7551/responsive-design-for-motion/)
- [Implementing a reduced motion mode](https://hugogiraudel.com/2018/03/19/implementing-a-reduced-motion-mode/)
- [Balance Awareness week](http://simplyaccessible.com/article/balance-awareness/)
- [An introduction to the Reduced Motion Media Query](https://css-tricks.com/introduction-reduced-motion-media-query/#article-header-id-3)
- [A primer to vestibular disorders](https://a11yproject.com/posts/understanding-vestibular-disorders/)
- [Accessibility according to actual people with disabiles](https://axesslab.com/accessibility-according-to-pwd/)
