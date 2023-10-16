'use client'
import ProfileCard from '@/Component/profile'
import { NextUIProvider } from '@nextui-org/react'


export default function Home() {
  return (
    <NextUIProvider>
      <ProfileCard />
    </NextUIProvider>
   
  )
}
