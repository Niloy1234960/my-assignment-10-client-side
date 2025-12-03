export default function FarmerSupport() {

  const resources = [
    { title: "Pest Control Guide", type: "PDF / Article" },
    { title: "Smart Irrigation Tips", type: "Video Tutorial" },
    { title: "Fertilizer Application Chart", type: "Downloadable" },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Farmer Support & Resources
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

          {resources.map((item, i) => (
            <div key={i} className=" bg-white shadow-lg p-5 rounded-md">
              <h3 className="font-semibold text-gray-900 text-lg">{item.title}</h3>
              <p className="text-gray-700 text-sm mt-2">Type: {item.type}</p>
              <button className="text-green-700 text-sm mt-3 hover:underline">
                View Resource →
              </button>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
