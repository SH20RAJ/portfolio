import { FloatingNavDemo } from '@/components/Nav'
import NavBar from '@/components/NavBar'
import { SpotlightPreview } from '@/components/Spot'
import { MySkills } from '@/components/MySkills'
import React from 'react'

export default function page() {
  return (
    <div>
      <NavBar />

      <SpotlightPreview />
      <MySkills />
    </div>
  )
}
