/// <reference lib="webworker" />
declare const self: DedicatedWorkerGlobalScope;

import { blockingFunc } from "./test-code";
import { IOutput, MyInterface } from "./dataContract";

export const someRPCFunc = (inputData: MyInterface) : IOutput => {
  const data = blockingFunc(inputData);
  console.log("Data :: ", data);
  return data
};