import WeatherCard from "../WeatherCard/WeatherCard";

function Main() {
  return (
    <main>
      <WeatherCard />
      <section className="cards">
        <p className="card__text">Today is 75°F / You may want to wear:</p>
        {/* ADD THE CARDS  */}
      </section>
    </main>
  );
}

export default Main;
