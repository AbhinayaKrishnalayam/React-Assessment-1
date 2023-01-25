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

  const substring = (str1, str2) => {
    str1 = str1.split("");
    str2 = str2.split("");
    const output = [];
    for (let i = str1.length - 1; i >= 0; i--) {
      for (let j = str2.length - 1; j >= 0; j--) {
        if (str2[j] === str1[i]) {
          str2.toString().replace(str2[j], "");
          output.push(str2[j]);
          break;
        }
      }
    }
    return output.sort((a, b) => a.localeCompare(b)).join("");
  };

  console.log(substring("HELLO", "HELL"));
  console.log(target([3, 3, 5], 6));
  return <div>App</div>;
};

export default App;
