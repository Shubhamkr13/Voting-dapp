import { useState,useEffect } from "react"
function CandidateDisplay({state}) {
  const [candidates, setCandidates] = useState([]);
  const {contract} = state;
  
  useEffect(() => {
    async function candidateDisplay(){
      const candidates = await contract.methods.candidateList().call();
      setCandidates(candidates);
      console.log(candidates);
    }
    contract && candidateDisplay();
    
  },[state])
  return (
    <table>
      <tbody>
        {candidates.map((candidate) => {
          return (
            <tr>
              <td>{candidate.name}</td>
              <td>{candidate.party}</td>
              <td>{candidate.candidateId}</td>
              <td>{candidate.vote}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
export default CandidateDisplay;
