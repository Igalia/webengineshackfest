---
layout: talk
title: "Bringing Temporal via Rust: Exploring SpiderMonkey and V8"
authors: "Jonas Haukenes, Mikhail Barash & Shane Carr"
date: "2025-06-02T13:00:00"
dateiso: "2025-06-02T13:00:00"
---

In this talk we'll explain work from University of Bergen's students to bring the Temporal Rust library used in Boa to spec compliance. V8 is now able to leverage that library to bring Temporal to users of Chrome.

We will share our experience implementing a TC39 proposal in both SpiderMonkey and V8 engines, giving a newcomers' perspective. We'll compare the initial learning curve and available tutorials, highlighting the strengths of the quick-start resources both engines provide. We'll also share areas where we felt additional context or up-to-date examples would have been helpful.

We'll briefly compare the internal languages each engine uses for defining new builtins: SpiderMonkey's self-hosted JavaScript and V8's Torque. While both aim to simplify development, we'll discuss how SpiderMonkey’s approach could feel transitional toward C++ implementations, whereas Torque is designed as a long-term replacement for the Code Stub Assembler (CSA). We'll also share our experience working through the engines' internal layers, focusing on the specific components we needed to understand, the challenges we ran into, and how we managed to piece everything together.

To help others get into SpiderMonkey and V8, we've written a detailed [tutorial](https://bldl.github.io/upsert-tutorial/) based on our experience, which we'll introduce during the talk.

