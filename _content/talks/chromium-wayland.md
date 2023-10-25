---
layout: talk
title: "Fallback Tab Dragging for Ozone/Wayland"
authors: "Max Ihlenfeldt"
date: "2023-06-05T12:00:00"
dateiso: "2023-06-05T10:00:00"
imgsrc: "/img/talks/max.jpg"
imgalt: "Max Ihlenfeldt"
cancelled: true
---

Dragging tabs out of and back into Chromium windows doesn't work on Wayland as on other platforms due to protocol restrictions. There already is a protocol extension that makes regular tab dragging possible, but it requires support from the Wayland compositor. Until all major compositors implement this extension, we need some form of fallback tab dragging that always works.

Unfortunately, to be able to run automated tests against this new tab dragging implementation, we need to fix some long-standing issues with how these tests are run on Wayland - time for another new protocol extension!

