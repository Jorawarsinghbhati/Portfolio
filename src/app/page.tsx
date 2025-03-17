import HomeHero from "../Components/Home_hero"; // Renamed import for clarity

export default function HomePage() {  // Renamed component to avoid conflict
  return (
    <div className="home">
      <HomeHero /> {/* Using the corrected component */}
    </div>
  );
}
