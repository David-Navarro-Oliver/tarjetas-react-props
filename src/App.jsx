import Card from "./components/Card.jsx";
import "./styles/App.css";

export default function App() {
  return (
    <div className="app">
      <Card
        image="https://picsum.photos/400/600"
        title="Demon Slayer"
        genre="Acción / Sobrenatural"
        description="Un joven se convierte en cazador de demonios para salvar a su hermana."
      />
    </div>
  );
}
