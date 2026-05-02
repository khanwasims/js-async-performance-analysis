# js-async-performance-analysis
“Empirical analysis of asynchronous patterns in JavaScript with benchmarking and academic paper”
# JavaScript Asynchronous Performance Analysis

## 📌 Overview

This project compares three asynchronous programming paradigms in JavaScript:

* Callbacks
* Promises
* Async/Await

The goal is to evaluate:

* Execution time
* Consistency
* Code maintainability

## ⚙️ Setup

```bash
npm install
node src/benchmark.js
```

## 📊 Methodology

* 30 iterations per method
* Measured using `performance.now()`
* Simulated async task using `setTimeout`

## 📈 Results

Results are stored in `/results/results.json`

## 🧠 Key Findings

* Performance differences are negligible
* Async/Await provides superior readability
* Promises offer structured flow
* Callbacks are harder to maintain

## 📄 Paper

Included in `/paper`

## 📚 References

* ECMAScript Specification
* Node.js Docs
* MDN Web Docs
