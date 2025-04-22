
const testimonies = [
  {
    name: "Jane Doe",
    role: "Client",
    text: "Mary is highly professional."
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
      <h2 className="text-3xl font-bold text-center mb-10">Testimonials</h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {testimonies.map((t, index) => (
          <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded shadow">
            <p className="italic">"{t.text}"</p>
            <p className="mt-2 font-semibold">{t.name}</p>
            <p className="text-sm text-gray-500">{t.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
