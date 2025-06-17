---
layout: talk
title: "Bridging CommonJS and ESM in Node.js"
authors: "Joyee Cheung"
date: "2025-06-02T12:30:00"
imgsrc: "/img/talks/joyee.jpeg"
imgalt: "Joyee Cheung"
slides: "/slides/bridging_commonjs_and_esm_in_node.js_by_joyee_cheung.pdf"
video: https://www.youtube.com/watch?v=YRueCer2kig
---

ESM has become stable in Node.js since 2020, but the adoption of it in the ecosystem turned out to be slower than expected and the interoperability between CommonJS and ESM has been a common source of pain for developers - interestingly, one of the important factor was the lack of support of `require(esm)` in Node.js. This gap started to be filled since 2024 and by May 2025, all supported release lines of Node.js would support require(esm). In this talk, we will take a look at history of CommonJS/ESM interoperability, how require(esm) works in Node.js under the hood, and the challenges we encountered during its rollout.

