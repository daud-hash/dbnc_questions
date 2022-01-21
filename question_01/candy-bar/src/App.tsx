import React from 'react';
function App() {
      // Divisibility Function
      const divisibility = (num: number) => {
        for(let i=1; i<=num; i++){
            if(i%2 === 0) {
                console.log("candy");
            }
            else if(i%11 === 0) {
                console.log("bar");
            }
            else if(i%22 === 0) {
                console.log("foo");
            }
            else {
                console.log(num);
            }
        }
    }
  return (
      <>
      {divisibility(10)}
      </>
  )
}

export default App;
