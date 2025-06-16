---
layout: talk
title: "WinterTC: a standard for server-side runtimes"
authors: "Andreu Botella & Luca Casonato"
date: "2025-06-02T11:00:00"
imgsrc: "/img/talks/andreu.jpg"
imgalt: "Andreu Botella"
imgsrc2: "/img/talks/luca.jpg"
imgalt2: "Luca Casonato"
slides: "/slides/wintertc:_a_standard_for_server-side_runtimes_by_andreu_botella_&_luca_casonato.pdf"
video: https://www.youtube.com/watch?v=elGNcCv57ZE
---

Server-side and edge JavaScript runtimes (such as Node.js, Deno, Bun, Cloudflare Workers...) have been adopting more and more web APIs over time. However, the web specifications that define these APIs are typically written with browsers in mind, without much regard for server-side runtimes, which has led to differences among those implementations.

In 2022, we started working towards solving this problem in a W3C Community Group called WinterCG, which also specified a Minimum Common API for server-side and edge runtimes, so that code can be written against a standard that all such runtimes would support. However, due to its charter WinterCG could not publish standards, which is why in December 2024 we took the next step in that direction, which was to move WinterCG into an Ecma Technical Committee called WinterTC. We explore why this move was necessary, what are the goals of WinterTC, and what we are working on.

