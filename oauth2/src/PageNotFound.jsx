import React from 'react'
import {useNavigate} from 'react-router-dom'

function PageNotFound() {
    const navigate = useNavigate()
    const redirect = ()=>{
        navigate('/login')
    }
  return (
    <div>
        <p>  404 page not found </p>
      <button onClick={redirect}>
        Login to continue
      </button>
    </div>
  )
}

export default PageNotFound
