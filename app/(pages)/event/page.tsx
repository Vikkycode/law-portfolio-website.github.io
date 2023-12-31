'use client'
import React,{useEffect} from 'react'
import { eventHeroItem,eventCardItems } from '../../utils'
import Hero from '../../components/common/Hero'
import EventCardList from '../event/EventCardList'
import MoreAreaCard from '../../components/common/MoreAreaCard'
import AOS from 'aos'
import 'aos/dist/aos.css'


const page = () => {
  useEffect(()=>{
    AOS.init(); 
   },[])

  return (
    <section>
        <div>
        {
          eventHeroItem.map((event,index) => (
            <Hero 
            key={index}
            headline={event.headline}
            author={event.author}
            role={event.role}
            btn={event.btn}            
            />
          ))
        }
        </div>   
          <EventCardList />        
        <MoreAreaCard />
    </section>
  )
}

export default page