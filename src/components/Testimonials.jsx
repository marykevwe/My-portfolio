
const testimonies = [
  {
    name: "Jane Doe",
    role: "Client",
    text: "Mary is highly professional."
  },
  {
    name: "Jane Doe",
    role: "Client",
    text: "Mary is highly professional."
  },
  {
    name: "Jane Doe",
    role: "Client",
    text: "Mary is highly professional."
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 px-4 bg-[#FE7F9C] dark:bg-[#A1045A]">
      <h2 className="text-3xl font-bold text-center mb-10">Testimonials</h2>
      <div className="max-w-6xl mx-auto overflow-x-auto">
        <div className="flex gap-6 w-max px-2">
          {testimonies.map((t, index) => (
            <div
              key={index}
              className="min-w-[300px] bg-white dark:bg-gray-700 p-6 rounded shadow flex-shrink-0"
            >
              <p className="italic">"{t.text}"</p>
              <p className="mt-2 font-semibold">{t.name}</p>
              <p className="text-sm text-gray-500">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}