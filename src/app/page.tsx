import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <main>
      <h1 className='font-extrabold'>Home</h1>
     <Link href='/projects/list'> <h2>Project</h2></Link>
    </main>
  )
}

export default Home
