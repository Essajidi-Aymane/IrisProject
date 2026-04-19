import Link from "next/link";
import { LuPhone } from "react-icons/lu";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
export default function Footer() {
  const navigation = [
    { name: "Accueil", path: "/" },
    { name: "À propos", path: "/about" },
    { name: "Horaires", path: "/horaires" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="border-t bg-blue-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
        <div className="flex flex-col items-center text-center md:items-start md:text-left gap-2">
          <h2 className="text-lg font-bold">Auto-École Les Iris</h2>
          <p className="text-sm text-gray-300">
            Votre partenaire de confiance pour réussir votre permis de conduire
          </p>
        </div>

        <div className="text-center md:text-left">
          <h3 className="font-bold text-lg mb-4">Liens rapides</h3>
          <ul className="space-y-2">
            {navigation.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4 items-center text-center md:items-start md:text-left">
          <h2 className="text-lg font-bold">Contactez-nous</h2>

          <div className="flex flex-wrap gap-2 text-sm items-center justify-center md:justify-start text-gray-300">
            <LuPhone className="w-4 h-4" />
            <span>01 23 45 67 89</span>
          </div>
          <div className="flex flex-wrap gap-2 text-sm items-center justify-center md:justify-start text-gray-300">
            <MdEmail className="w-4 h-4" />
            <span className="break-all sm:break-normal">autoecole.lesiris@gmail.com</span>

          </div>

          <div className="flex gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="rounded-full p-2 transition-all duration-300 ease-out transform-gpu hover:-translate-y-1 hover:scale-110 hover:shadow-lg"
            >
              <FaInstagram className="h-6 w-6" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="rounded-full p-2 transition-all duration-300 ease-out transform-gpu hover:-translate-y-1 hover:scale-110 hover:shadow-lg"
            >
              <FaFacebook className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} Auto-École Les Iris. Tous droits réservés.</p>
      </div>
    </footer>
  );
}