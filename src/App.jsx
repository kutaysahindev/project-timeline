import TimelineCard from "./components/TimelineCard";
import UpdateNotification from "./components/UpdateNotification";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import Cards from "./components/Cards";
import { cards } from "./utils/cards";

function App() {
  return (
    <div className="font-barlow">
      <Welcome />
      <div id="timeline" className="lg:px-60 md:px-10 px-5 md:pt-12 pt-8">
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
      <UpdateNotification />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
