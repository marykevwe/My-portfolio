export default function About() {
  return (
    <section
      id="about"
      className="py-16 px-4 max-w-6xl mx-auto flex flex-col md:flex-row items-center"
    >
      {/* Left: About Text */}
      <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-lg leading-relaxed">
          I'm Mary, a passionate full-stack developer with experience building modern web applications.
        </p>
      </div>

      {/* Right: Picture with custom frame */}
      <div className="md:w-1/2 flex justify-center">
        <div className="relative w-52 h-52 rounded-full p-2 bg-[#FE7F9C] dark:bg-[#A1045A] shadow-lg transition-colors duration-500">
          <img
            src="/src/assets/my photo.jpeg" // <-- Replace with actual image path
            alt="Mary"
            className="w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-800"
          />
        </div>
      </div>
    </section>
  );
}
