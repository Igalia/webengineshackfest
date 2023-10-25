---
layout: talk
title: "Inside Kotlin/Wasm (or how your language could benefit from new proposals, like GC, EH, TFR)"
authors: "Zalim Bashorov"
date: "2023-06-05T12:45:00"
dateiso: "2023-06-05T10:45:00"
video: https://youtu.be/r3Wad3fR8aQ?list=PL4sEzdAGvRgD5vjhecZhBFEEqUV_a_rAD
slides: https://webengineshackfest.org/2023/slides/inside_kotlin_wasm_by_zalim_bashorov.pdf
---

Kotlin — is a modern, cross-platform, statically typed, general-purpose programming language developed by JetBrains. It targets JVM, including Android; JS; native platforms via LLVM, including iOS; and Wasm (added recently).

WebAssembly aka Wasm — You know...

Kotlin/Wasm — is the new target and toolchain in the Kotlin family. It has a few special properties:
* It compiles to Wasm directly without any additional layers, to compile as fast as possible, including incrementally in the future.
* It uses experimental/fresh proposals like GC, Typed Function References, Exception Handling, and Stringref.

In this talk, we will look deep inside the internal details of the Kotlin/Wasm technology stack and, look at how the Kotlin code is compiled into WebAssembly, look in-depth at the generated code and its structure. We will discuss how the Kotlin/Wasm compiler handles the language features of Kotlin, such as classes, virtual and interface calls, coroutines, and others using fresh and experimental proposals like GC, Exception Handling, Typed Function References.

The talk targets developers interested in the internals of Kotlin/Wasm and wants to have a deeper understanding of how Kotlin or similar languages could be compiled to Wasm, what is brought by mentioned/used proposals and how they could be helpful to other languages targeting WebAssembly.

