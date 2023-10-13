"use client"
import User from '@/components/user/User'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import React from 'react'

const Dashboard = () => {
  const {data:session} = useSession({required:true,onUnauthenticated() {
    redirect("/api/auth/signin?callbackUrl=/client")
  },})
  return (
    <User session={session?.user}/>
  
  )
}

export default Dashboard