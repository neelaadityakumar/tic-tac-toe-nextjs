import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [isXPlaying,setIsXPlaying]=useState(true)
  const [values,setValues]=useState(Array(9).fill(null))
  const winningConditon=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
  const isItWinner=(arr,val)=>{
   const isWinner= winningConditon.some(arr2=>{
      return arr2.every(i=>arr[i]===val)
    })

    if(isWinner){
      alert(`${val} is winner`)

    }

  }
  const handleSetValue=(i)=>{
    const newVal=isXPlaying?"x":"o"
    const valueToSet=[...values.slice(0,i),newVal,...values.slice(i+1)]
      setValues(valueToSet)

      setIsXPlaying(!isXPlaying)
      isItWinner(valueToSet,newVal)
  }
  return (
    <main
      className={`bg-white h-screen flex justify-center items-center`}
    >
     <div className='border border-[#000]'>
<div className='flex gap-4'>
<div className='w-20 h-20 border border-[#000]' onClick={()=>handleSetValue(0)} >{values[0]}</div>
<div className='w-20 h-20 border border-[#000]'  onClick={()=>handleSetValue(1)}>{values[1]}</div>
<div className='w-20 h-20 border border-[#000]'  onClick={()=>handleSetValue(2)}>{values[2]}</div>
</div>
<div className='flex gap-4'>
  <div className='w-20 h-20 border border-[#000]'  onClick={()=>handleSetValue(3)}>{values[3]}</div>
  <div className='w-20 h-20 border border-[#000]' onClick={()=>handleSetValue(4)}>{values[4]}</div>
  <div className='w-20 h-20 border border-[#000]' onClick={()=>handleSetValue(5)}>{values[5]}</div>
</div>

<div className='flex gap-4'>
<div className='w-20 h-20 border border-[#000]' onClick={()=>handleSetValue(6)}>{values[6]}</div>
<div className='w-20 h-20 border border-[#000]' onClick={()=>handleSetValue(7)}>{values[7]}</div>
<div className='w-20 h-20 border border-[#000]' onClick={()=>handleSetValue(8)}>{values[8]}</div>
</div>

</div>
    </main>
  )
}
