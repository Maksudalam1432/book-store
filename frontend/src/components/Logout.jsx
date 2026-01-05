import React from 'react'
import toast from 'react-hot-toast'
import { useAuth } from '../context/Authprovider'

function Logout() {
 const  [authUser,setAuthUser]=useAuth()
    const handle=()=>{
        try {
setAuthUser ({
    ...authUser,
    user:null
})
localStorage.removeItem("user")
             toast.success("Logout Succesfully")
        } catch (error) {
             toast.error("Logout failed")
        }
    }
  return (
    <div className='px-4 py-1.5 bg-red-500 rounded-md cursor-pointer ' onClick={handle}>Logout</div>
  )
}

export default Logout