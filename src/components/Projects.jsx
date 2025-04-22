
const projects = [
  {
    title: "Portfolio Website",
    image: "/portfolio.png",
    description: "A sleek developer portfolio.",
    link: "#"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((proj, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
            <img src={proj.image} alt={proj.title} className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold">{proj.title}</h3>
            <p className="mt-2">{proj.description}</p>
            <a href={proj.link} target="_blank" className="text-blue-600 dark:text-blue-400 mt-2 block hover:underline">
              Visit Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
