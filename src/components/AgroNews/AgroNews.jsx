export default function AgroNews() {

  const blogs = [
    {
      title: "New High Yield Rice Variety Released",
      desc: "A new rice type has been introduced which increases yield for farmers.",
      date: "Jan 12, 2025",
    },
    {
      title: "Modern Irrigation Saves Water",
      desc: "Smart irrigation reduces water use and increases plant growth.",
      date: "Jan 18, 2025",
    },
    {
      title: "Fertilizer Subsidy Declared",
      desc: "Government announces price reduction support for fertilizers.",
      date: "Jan 22, 2025",
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
          Agro News & Blogs
        </h2>

       
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

          {blogs.map((item, i) => (
            <div key={i} className="bg-white shadow-lg rounded-md p-5 ">
              <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
              <p className="text-xs text-gray-500 mt-3">📅 {item.date}</p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
