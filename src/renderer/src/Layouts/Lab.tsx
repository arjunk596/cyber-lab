import React from 'react'
import { useNavigate } from 'react-router'

const Lab = () => {
  const navigate = useNavigate()
  return (
    <div onClick={()=>navigate(-1)}>Lab</div>
  )
}

export default Lab