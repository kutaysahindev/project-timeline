import TimelineCard from "./components/TimelineCard";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import Cards from "./components/Cards";
import { cards } from "./utils/cards";

function App() {
  return (
    <div className="font-barlow">
      <Welcome />
      <div className="lg:px-60 md:px-10 px-5">
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
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
