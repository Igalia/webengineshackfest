---
layout: talk
title: "Versioned Web Components"
authors: "Christian Ulbrich"
date: "2025-06-02T15:30:00"
slides: "/slides/versioned_web_components_by_christian_ulbrich.pdf"
---

While Web Components are far from new, they are seeing more and more adaption for a multitude of use cases, both as containers for micro-frontends as well as a way of building framework agnostic UI libraries. One of the biggest challenges is, that there is no way of overriding existing web components, or more precisely custom elements can only be defined once for a certain tag name. While there is a proposal for alleviating this, called scoped custom element registries, it never came really to fruition and has several problems.

I want to show a proposal of how Web Components can be versioned, i.e. how a custom element with the same tag can be updated in the life cycle of a web application as well ""versioned"". I have extensively worked on web components in the past and I have a very rough prototype, that can show case this technique and I am looking for feedback + input, so that we will find a way in the future to address this issue and make web components more powerful.

