import { useState } from "react";
import TimelineCard from "./components/TimelineCard";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import { cards } from "./utils/cards";

function App() {
  return (
    <>
      <Welcome />
      <div className="lg:px-60 px-10">
        {cards.map((card, index) => (
          <TimelineCard
            key={card.id}
            id={card.id}
            tagline={card.tagline}
            title={card.title}
            description={card.description}
            isLast={index === cards.length - 1} // Check if it's the last item
          />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default App;
