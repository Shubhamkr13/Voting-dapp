import { useState, useEffect } from "react"
function Winner({state, account}) {
  const [winner, setWinner] = useState("Not declared");

  useEffect(() => {
    const {contract} = state;
    async function winnerCandidate(){
      const win = await contract.methods.result().call({from: account, gas: 1000000});
      setWinner(win);
    }
    contract && winnerCandidate();
    
  },[state])

  return <div className="win">Winner is : {winner} </div>;
}
export default Winner;

// function Winner() {
//   return <div className="win">Winner is : </div>;
// }
// export default Winner;
