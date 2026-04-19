import Navbar from "../../components/Navbar";

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="p-8 text-blue-900">
        <h1 className="text-3xl font-bold mb-4">Contact & Réseaux sociaux</h1>
        <p className="text-lg">Téléphone : 01 23 45 67 89</p>
        <p className="text-lg">Email : contact@autoecole-iris.fr</p>
        <div className="mt-4">
          <span>Suivez-nous :</span>
          <a className="ml-4 text-blue-500 hover:underline" href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a className="ml-4 text-blue-500 hover:underline" href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </main>
    </>
  );
}