import { useState } from 'react'
import './App.css'
import TimelineCard from './components/TimelineCard'
import Welcome from './components/Welcome'
import { cards } from './utils/cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Welcome/>
      <div className='px-60 mb-[600px]'>
        {cards.map(card => (
          <TimelineCard key={card.id} id={card.id} tagline={card.tagline} title={card.title} description={card.description} />
        ))}
      </div>
    </>
  )
}

export default App
