---
layout: talk
title: "Introduction to the RustNN ecosystem"
authors: "Markus Tavenrath"
date: "2026-06-15T15:30:00"
imgsrc: "/img/talks/markus.webp"
slides: "/slides/introduction_to_the_rustnn_ecosystem_by_markus_tavenrath.pdf"
video: https://www.youtube.com/watch?v=AzHnjs7eykE&list=PL4sEzdAGvRgDkOXbVAbnOWCaIOV_evSfo
---

This talk provides an overview of the RustNN ecosystem, a high-performance WebNN implementation. We explore the core framework and its accompanying suite of projects, including model exporters for PyTorch and ONNX, as well as bindings for Python, JavaScript, and the browser.

The choice of Rust is central to the project, providing a memory-safe and thread-efficient foundation that is uniquely suited for cross-compiling to WebAssembly. This allows the ecosystem to catch AI developers in their natural environments while ensuring maximum portability. By unifying the desktop and the browser, RustNN enables seamless, hardware-accelerated edge deployment across the entire modern computing landscape.
