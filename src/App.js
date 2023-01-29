import React from "react";
import "./App.css";

const App = () => {
  const target = (nums, target) => {
    for (let i = 0; i <= nums.length; i++) {
      for (let j = 0; j <= nums.length; j++) {
        if (i !== j) {
          if (nums[i] + nums[j] === target) {
            return [nums[i], nums[j]];
          }
        }
      }
    }
  };
const substring = (str1: any, str2: any) => {
  str1 = str1.split("");
  str2 = str2.split("");

  let output = [];
  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (str2[j] === str1[i]) {
        output.push(str2[j]);
        break;
      }
    }
  }
  return output.join("");
};
  
  console.log(substring("HELLO", "HELL"));
  console.log(target([3, 3, 5], 6));
  return <div>App</div>;
};

export default App;
