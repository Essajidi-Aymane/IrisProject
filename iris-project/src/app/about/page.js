import Navbar from "../../components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <main className="p-8 text-blue-900">
        <h1 className="text-3xl font-bold mb-4">À propos de l'auto-école Les Iris</h1>
        <p className="text-lg">Bienvenue à l'auto-école Les Iris ! Nous formons les conducteurs de demain avec sérieux et convivialité.</p>
      </main>
    </>
  );
}