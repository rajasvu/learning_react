import { MyInterface } from "./dataContract";


export const blockingFunc = (data: MyInterface) => {
    let result = 0;	
	for (let i = Math.pow(data.base, 3); i >= 0; i--) {	
        for (let j = Math.pow(data.base, 3); j >= 0; j--){
            result += Math.atan(j) * Math.tan(i);
        }		
	};
    return {
        input: data.data,
        output: result
    };
  };
  
  export const randomIntFromInterval = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };