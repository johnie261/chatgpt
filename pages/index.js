import React from 'react'
import { useStateContext } from '../Context'

const index = () => {
  const { listMembership } = useStateContext();

  return (
    <div>
      <button onClick={()=> listMembership()}>LIST</button>
    </div>
  )
}

export default index