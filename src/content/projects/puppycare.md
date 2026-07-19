---
title: 'PuppyCare: Smart Kennel System'
summary: 'An IoT kennel monitoring system built on a Raspberry Pi with custom sensors, synced in real time to a companion SwiftUI iPhone app.'
year: 2026
tags: ['Raspberry Pi', 'IoT', 'Sensors', 'iOS']
featured: true
order: 2
stat: 'from the wire to the iPhone'
---

A smart kennel for dogs: a Raspberry Pi, a set of sensors (temperature,
humidity, motion, sound, light, camera), and an iPhone app that shows
what's happening in real time, with push alerts when something is wrong.

**Code:** [iOS app (PuppyCare)](https://github.com/ShaharKoza/PuppyCare) · [Pi sensor station (smart-kennel)](https://github.com/ShaharKoza/smart-kennel)

Hardware teaches you things backend work never will. A bug here isn't a
stack trace, it's a sensor acting up or a dog that found the one blind
spot. Getting the system reliable meant wiring, calibration and repeated
testing in the yard rather than in the editor.

The app closes the loop. Kennel state and sensor events stream straight to
the phone, so you can see and adjust everything without touching the
device itself. One system from the wire to the screen, built end to end.
