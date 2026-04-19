import Image from "next/image";
import Link from "next/link";
import { Award, Car, Clock , Users} from "lucide-react";
export default function Home() {
	 const features = [
    {
      icon: Award,
      title: 'Excellence & Expertise',
      description: 'Dirigée par un ancien cadre du Ministère des Transports',
    },
    {
      icon: Users,
      title: 'Instructeurs Qualifiés',
      description: 'Une équipe pédagogique expérimentée et diplômée',
    },
    {
      icon: Car,
      title: 'Véhicules Modernes',
      description: 'Flotte récente avec équipements de sécurité',
    },
    {
      icon: Clock,
      title: 'Horaires Flexibles',
      description: 'Adapté à votre emploi du temps',
    },
  ];
    const stats = [
    { value: '95%', label: 'Taux de réussite' },
    { value: '8+', label: "Années d'expérience" },
    { value: '500+', label: 'Élèves formés' },
    { value: '100%', label: 'Satisfaction' },
  ];


	return (
	<div className="flex flex-col">
    <section className="relative w-full min-h-[60vh] overflow-hidden text-white">
			<div className="absolute inset-0">
     <Image
                    src="/bannerHome.jpg"
                    alt="banner"
                    width={1920}
                    height={1080}
                    priority
                    sizes="100vw"
          className="w-full h-full object-cover"
                />			</div>	
			<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:py-40 py-20 flex items-center ">
        <div className="flex flex-col gap-4 max-w-3xl text-center md:text-left">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight drop-shadow-md">Bienvenue à l'Auto-École Les Iris
</h2>		<p className ="text-lg sm:text-xl md:text-2xl font-bold mb-6 drop-shadow-sm">Votre réussite au permis de conduire, notre priorité</p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link href="/contact" className="group inline-flex items-center justify-center px-8 py-4 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-600 w-full sm:w-auto transition-colors duration-300">
            <span className="transition-transform duration-300 ease-out group-hover:scale-105">Nous contacter</span>
          </Link>
          <Link href="/contact" className="group inline-flex items-center justify-center bg-blue-400 text-blue hover:bg-blue-700 hover:text-white font-semibold rounded-lg py-2 px-4 w-full sm:w-auto transition-colors duration-300">
            <span className="transition-transform duration-300 ease-out group-hover:scale-105">En savoir plus</span>
          </Link>

				</div>
				</div>
				

			</div>

		</section>
		   <section className="bg-gray-900 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-3">
            <Award className="w-6 h-6 text-yellow-400" />
            <p className="text-center font-semibold">
              Dirigée par un ancien cadre du Ministère des Transports
            </p>
            <Award className="w-6 h-6 text-yellow-400" />
          </div>
        </div>
      </section>


	  <section className="py-12">
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-auto">
		 <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pourquoi choisir Les Iris ?
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Une formation de qualité avec des professionnels reconnus
            </p>
          </div>
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
			{features.map((feature, index) => {
				const Icon = feature.icon ; 
				return (
					<div key={index} className ="text-center p-6 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors cursor-pointer ">
					<div className="inline-flex items-center justify-center  w-16 h-16 bg-blue-100 rounded-full mb-4">
						<Icon className="w-8 h-8 text-blue-600"/>
					</div>
					<h4 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h4>
					<p className="text-gray-600">{feature.description}</p>
					</div>
				);
			})}


		</div>

		</div>
		</section> 
    <section className=" bg-linear-to-br from-blue-600 to-blue-300 text-white py-12">
      <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8">
        <div className=" grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {

            return (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl mb-2 font-bold">{stat.value}</div>
                <div className="text-lg text-blue-100">{stat.label}</div>
              </div>  
            ); 
        })}

        </div> 
        </div>  
     </section>


	</div>
	);
}
