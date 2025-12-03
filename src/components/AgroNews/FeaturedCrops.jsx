export default function FeaturedCrops() {

  const crops = [
    { name: "Rice (BR-28)", region: "Mymensingh", price: "32-38৳/Kg" },
    { name: "Potato (Diamond)", region: "Rangpur", price: "20-24৳/Kg" },
    { name: "Wheat", region: "Rajshahi", price: "35-42৳/Kg" },
  ];

  return (
    <section className="py-12 ">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Featured Crops
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

          {crops.map((item, i) => (
            <div key={i} className="bg-white shadow-lg p-5  rounded-md">
              <h3 className="font-semibold text-gray-900 text-lg">{item.name}</h3>
              <p className="text-gray-600 text-sm mt-2">Region: {item.region}</p>
              <p className="text-gray-700 text-sm font-medium mt-2">Price: {item.price}</p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
