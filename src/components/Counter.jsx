import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/counterSlice'

function Counter() {
    const[range,setRange]=useState("")
    // hook - useDispatch

    const dispatch=useDispatch()
    //useSelector- to access states in store
    const count = useSelector((state)=>state.counter.value)
  return (
    <div className='d-flex justify-content-center align-items-center w-100' style={{height:'100vh'}}>
        <div className='shadow border rounded border-warning p-5'>
            <h1 className='text-center text-success'>Counter Application</h1>
            <h1 className='text-center mt-4'style={{fontSize:'100px'}}>{count}</h1>
            <div className='mt-5 d-flex'>
                {/* the state is passed by string,so contactination occurs so we need to convert number */}
                <button className='btn btn-primary' onClick={()=>dispatch(increment(Number(range)))}>Increment</button>
                <button onClick={()=>dispatch(reset())} className='btn btn-danger ms-3'>Reset</button>
                <button onClick={()=>dispatch(decrement(Number(range)))} className='btn btn-warning ms-3'>Decrement</button>
            </div>
            <input onChange={(e)=>setRange(e.target.value)}  type="text" placeholder='Enter the range' className='form-control mt-3' />
        </div>

    </div>
  )
}

export default Counter