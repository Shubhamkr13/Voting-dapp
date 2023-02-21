import { useState,useEffect } from "react"
function VoterList({state}) {
  const [voterList, setVoterList] = useState([]);
  const {contract} = state;
  
  useEffect(() => {
    async function listDisplay(){
      const voterList = await contract.methods.voterList().call();
      setVoterList(voterList);
    }
    contract && listDisplay();
    
  },[state])
  return (
    <table>
      <tbody>
        {voterList.map((voter) => {
          return (
            <tr>
              <td>{voter.name}</td>
              <td>{voter.age}</td>
              <td>{voter.gender}</td>
              <td>{voter.voterId}</td>
              <td>{voter.voteCandidateId}</td>
              <td>{voter.voterAddress}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
export default VoterList;
