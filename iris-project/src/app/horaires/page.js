import Navbar from "../../components/Navbar";

export default function Horaires() {
  return (
    <>
      <Navbar />
      <main className="p-8 text-blue-900">
        <h1 className="text-3xl font-bold mb-4">Horaires de l'auto-école</h1>
        <ul className="list-disc pl-8 text-lg">
          <li>Lundi - Vendredi : 9h00 - 18h00</li>
          <li>Samedi : 9h00 - 13h00</li>
          <li>Dimanche : fermé</li>
        </ul>
      </main>
    </>
  );
}