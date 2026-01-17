import Card from "./components/Card.jsx";
import "./styles/App.css";

export default function App() {
  const animes = [
    {
      id: 1,
      title: "Demon Slayer",
      genre: "Acción / Sobrenatural",
      description:
        "Un joven se convierte en cazador de demonios para salvar a su hermana y enfrentarse a una amenaza oscura.",
      image: "https://picsum.photos/seed/demonslayer/400/600",
    },
    {
      id: 2,
      title: "Solo Leveling",
      genre: "Acción / Fantasía",
      description:
        "Un cazador considerado el más débil obtiene un poder único y empieza a subir de nivel sin límites.",
      image: "https://picsum.photos/seed/sololeveling/400/600",
    },
    {
      id: 3,
      title: "One Piece",
      genre: "Aventura / Acción",
      description:
        "Luffy y su tripulación surcan los mares en busca del legendario tesoro One Piece.",
      image: "https://picsum.photos/seed/onepiece/400/600",
    },
    {
      id: 4,
      title: "Dragon Ball",
      genre: "Acción / Artes marciales",
      description:
        "Goku vive aventuras, entrena sin descanso y protege la Tierra frente a enemigos cada vez más fuertes.",
      image: "https://picsum.photos/seed/dragonball/400/600",
    },
    {
      id: 5,
      title: "That Time I Got Reincarnated as a Slime",
      genre: "Fantasía / Isekai",
      description:
        "Un hombre renace en otro mundo convertido en un slime con habilidades extraordinarias y forma su nación.",
      image: "https://picsum.photos/seed/slime/400/600",
    },
  ];

  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app__title">Animes recomendados</h1>
        <p className="app__subtitle">
          Tarjetas en React reutilizando componentes y pasando props
        </p>
      </header>

      <main className="app__grid">
        {animes.map((anime) => (
          <Card
            key={anime.id}
            image={anime.image}
            title={anime.title}
            genre={anime.genre}
            description={anime.description}
          />
        ))}
      </main>
    </div>
  );
}
