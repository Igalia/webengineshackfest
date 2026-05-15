---
layout: talk
title: "DOM Localization"
authors: "Eemeli Aro"
date: "2026-06-15T16:00:00"
imgsrc: "/img/talks/eemeli.webp"
imgalt: "Eemeli Aro"
---

Users of the web are best served by being able to experience it in their native languages. Currently, localization of web content is achieved with a multitude of custom solutions, most of which are unable to express the full depth and breadth of human expressions in all languages. Introducing an easy-to-use but powerful standard localization solution would improve the experience of all users, in particular the vast majority who do not speak English natively.

We propose to introduce a set of (potentially namespaced) core attributes to HTML that would allow developers to declaratively or programmatically bind DOM elements and fragments to localized _messages_, which would be provided by a _localization resource_, a file that contains messages that are defined using Unicode MessageFormat. An explainer for the proposal is available: https://github.com/mozilla/explainers/blob/main/dom-localization.md
