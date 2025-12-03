
import { Link } from "react-router";

const AllProductsCard = ({ products }) => {
 
  const { name,  owner, pricePerUnit, image, location, _id } = products;
  return (
    <div>
      <div>
        <div>
       
        </div>
        <div
          className="shadow-sm  p-4 border border-gray-200  bg-gradient-to-br from-[#f0fff4] to-[#e6ffe6] transition-all duration-300 ease-out 
          hover:shadow-2xl hover:-translate-y-3 hover:scale-[1.03] rounded-2xl"
        >
          <div className="mb-5">
            <img
              className="w-full h-[300px] object-cover rounded-2xl   transition-all duration-500 ease-out
                hover:scale-90"
              src={image}
              alt=""
            />
          </div>
          <h1 className="text-2xl font-bold">{name}</h1>
          <div className="flex justify-between font-semibold mt-3 text-xl">
            <h1>Owner Name: {owner?.ownerName}</h1>
            <p>Price:{pricePerUnit}$</p>
          </div>
          <div className="flex gap-2 items-center ">
            <span className="text-green-500"></span>
            <h1 className="font-semibold mt-2 text"> {location}</h1>
          </div>
          <div className="w-full">
            <Link
              to={`/productsDetails/${_id}`}
              className="mt-5 block w-full text-center text-white text-lg py-3 rounded-xl 
                 bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]
                 hover:opacity-90 transition-all duration-300
                 shadow-md hover:shadow-lg"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProductsCard;
