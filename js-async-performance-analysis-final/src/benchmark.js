const fs = require('fs');
const { performance } = require('perf_hooks');

async function runTest(fn) {
  const start = performance.now();
  await fn();
  return performance.now() - start;
}

function callbackVersion() {
  return new Promise(resolve => {
    setTimeout(() => resolve(), 100);
  });
}

function promiseVersion() {
  return new Promise(resolve => {
    setTimeout(resolve, 100);
  });
}

async function asyncAwaitVersion() {
  await new Promise(resolve => setTimeout(resolve, 100));
}

async function runBenchmarks() {
  const iterations = 50;

  let results = {
    callback: [],
    promise: [],
    asyncAwait: []
  };

  for (let i = 0; i < iterations; i++) {
    results.callback.push(await runTest(callbackVersion));
    results.promise.push(await runTest(promiseVersion));
    results.asyncAwait.push(await runTest(asyncAwaitVersion));
  }

  fs.writeFileSync('results/raw_results.json', JSON.stringify(results, null, 2));
  console.log("Benchmark complete. Results saved to results/raw_results.json");
}

runBenchmarks();
