import { useCallback, useState } from "react";
import { IOutput } from "./dataContract";
// import workerUrl from './worker?worker&url'
// console.log("Worker import info :: ", workerUrl)
// Worker import info ::  /src/worker.ts?type=module&worker_file

import { blockingFunc, randomIntFromInterval } from "./test-code";
// worker instance
// References
// 1. https://davidea.st/articles/comlink-simple-web-worker/
// 2. https://github.com/vitejs/vite/tree/main/playground/worker
// 3. https://github.com/GoogleChromeLabs/comlink

const workerInstance = new ComlinkWorker<typeof import("./worker")>(
    new URL("./worker", import.meta.url)
  );

export const Demo = () => {
  const [random, setRandom] = useState<number>(0);

  const workerCall = useCallback(async () => {
    console.log('Worker execution started')
    const outcome: IOutput = await workerInstance.someRPCFunc( {
        data: "Test data",
        base: 10
    });
    console.log(outcome.input)
  }, []);

  const normalFuncCall = useCallback(() => {
    console.log("Normal execution started")
    const data = blockingFunc({
        data: "Test data",
        base: 10
    });
    console.log(" Normal computation :: ", data);
  }, []);

  const randomIntHandler = useCallback(() => {
    setRandom(randomIntFromInterval(1, 100));
  }, []);

  return (
    <section>
      <button onClick={workerCall}>Worker Call</button>
      <button onClick={normalFuncCall}>Main Thread Call</button>
      <button onClick={randomIntHandler}>Random Int {random}</button>
    </section>
  );
};