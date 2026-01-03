import React from 'react'
import TopicBox from '../components/TopicBox'
import Content from '../components/Content'

export default function Home() {
  return (
    <div>
        <h1>Home Page</h1>
        <TopicBox food = "kottu" price="Rs.250">
            <spam>This the description</spam>
        </TopicBox>
        <TopicBox food = "Rice" price="Rs.350">
            <button>this is button</button>
        </TopicBox>
        <TopicBox food = "Hoppers" price="Rs.150">
            <p>bla bla bl ahshsh hshsh hshshs hlasghrjsr </p>
        </TopicBox>
    </div>
  )
}
