import React from 'react'
import { HeroSection,Icon,Projects,ProfileCard,MovingCard,ContactSec } from '@/Components'
const Home = () => {
  return (
    <div className='font '>
      
      <HeroSection/>
      <Projects/>
      <ProfileCard/>
      <MovingCard/>
      <ContactSec/>

    </div>
  )
}

export default Home