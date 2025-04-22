
const skills = [
  { name: "HTML", logo: "/skills/html.png" },
  { name: "CSS", logo: "/skills/css.png" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-4 text-center">
      <h2 className="text-3xl font-bold mb-10">My Skills</h2>
      <div className="grid grid-cols-3 md:grid-cols-5 gap-6 place-items-center">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={skill.logo} alt={skill.name} className="w-12 h-12 mb-2" />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
