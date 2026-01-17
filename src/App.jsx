import Card from "./components/Card.jsx";
import "./styles/App.css";

export default function App() {
  const animes = [
    {
      id: 1,
      title: "Demon Slayer",
      genre: "Acción / Sobrenatural",
      description:
        "Tanjiro Kamado regresa a casa y descubre que su familia ha sido atacada por demonios. Su hermana Nezuko sobrevive, pero se transforma en demonio. Decidido a encontrar una cura y protegerla, Tanjiro se une al Cuerpo de Exterminio de Demonios, donde se enfrentará a enemigos brutales y aprenderá técnicas de combate cada vez más exigentes.",
      image: "https://picsum.photos/seed/demonslayer/400/600",
    },
    {
      id: 2,
      title: "Solo Leveling",
      genre: "Acción / Fantasía",
      description:
        "En un mundo donde portales conectan con mazmorras y monstruos, los cazadores arriesgan su vida para proteger a la humanidad. Sung Jinwoo, considerado el más débil, sobrevive a una misión imposible y obtiene un sistema misterioso que le permite subir de nivel. A partir de ahí, su poder crece sin techo y empieza a descubrir secretos que cambian el equilibrio del mundo.",
      image: "https://picsum.photos/seed/sololeveling/400/600",
    },
    {
      id: 3,
      title: "One Piece",
      genre: "Aventura / Acción",
      description:
        "Monkey D. Luffy sueña con convertirse en el Rey de los Piratas. Para lograrlo, reúne a una tripulación única y se lanza al mar en busca del tesoro legendario conocido como One Piece. En su viaje, se enfrentan a piratas rivales, marines y organizaciones peligrosas, mientras exploran islas increíbles y forjan lazos que ponen a prueba su determinación.",
      image: "https://picsum.photos/seed/onepiece/400/600",
    },
    {
      id: 4,
      title: "Dragon Ball",
      genre: "Acción / Artes marciales",
      description:
        "Goku es un niño con una fuerza extraordinaria que inicia una aventura para encontrar las Esferas del Dragón, objetos capaces de conceder deseos. A lo largo del tiempo, entrena con maestros legendarios, participa en torneos y se enfrenta a enemigos cada vez más poderosos. La serie mezcla acción, humor y evolución constante del protagonista y su mundo.",
      image: "https://picsum.photos/seed/dragonball/400/600",
    },
    {
      id: 5,
      title: "That Time I Got Reincarnated as a Slime",
      genre: "Fantasía / Isekai",
      description:
        "Satoru Mikami muere y renace en un mundo de fantasía convertido en un slime llamado Rimuru. Con habilidades poco comunes y una mentalidad estratégica, empieza a reunir aliados de distintas razas y a construir una nación. Entre guerras, diplomacia y magia, Rimuru intenta crear un lugar donde humanos y monstruos puedan convivir.",
      image: "https://picsum.photos/seed/slime/400/600",
    },
    {
      id: 6,
      title: "Jujutsu Kaisen",
      genre: "Acción / Fantasía oscura",
      description:
        "Yuji Itadori se ve arrastrado al mundo de las maldiciones cuando entra en contacto con un objeto maldito extremadamente peligroso. Para salvar a otros, toma una decisión radical y queda vinculado a una presencia aterradora. En la escuela de hechicería, aprende técnicas de combate y control de energía maldita mientras se enfrenta a maldiciones cada vez más letales.",
      image: "https://picsum.photos/seed/jujutsu/400/600",
    },
  ];

  return (
    <div className="app">
      <div className="app__container">
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
    </div>
  );
}
