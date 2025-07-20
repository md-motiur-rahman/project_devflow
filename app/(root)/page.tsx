import { auth } from '@/auth'
import React from 'react'

const Home = async () => {
  const session = await auth()
  console.log('Session:', session)
  return (
    <>
    <h1>hello</h1>
    </>
  )
}

export default Home