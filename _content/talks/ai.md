---
layout: talk
title: "Built-in AI APIs for the Web"
authors: "Thomas Steiner"
date: "2025-06-02T17:30:00"
imgsrc: "/img/talks/thomas.jpeg"
imgalt: "Thomas Steiner"
slides: "/slides/built-in_ai_apis_for_the_web_by_thomas_steiner.pdf"
video: https://www.youtube.com/watch?v=FNcDjQr_iqQ
---

There are many use cases for AI, ranging from transcribing audio, describing images, getting writing assistance, having texts proofread, to translating content, and many more, including general prompting of an AI model for all sorts of purposes. For realizing these use cases, you broadly have three options: (i), send your data to an AI model running somewhere on a powerful server in the cloud, (ii), download a possibly large model file to the client and run it locally, or, (iii), use shared models built into a device or browser, which is the topic of this talk. On the Chrome team, we're proposing a number of APIs [1] that we and partners we've worked with think would be worthwhile to have as common Web platform APIs. In this talk, I'll give an overview of these APIs and briefly demo their implementation in Chrome, and then want to open the floor for some general discussion and feedback.

[1] List of API proposals

* webmachinelearning/prompt-api
* webmachinelearning/writing-assistance-apis
* webmachinelearning/translation-api

