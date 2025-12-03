import React, { use, useState } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { useLoaderData } from "react-router";
import InterestForm from "./IntererstForm";
import FormSend from "../../Form/FormSend";
import { AuthContext } from "../../context/AuthProvider";
import { toast, ToastContainer } from "react-toastify";

const ProductsDetails = () => {
  const product = useLoaderData();
  const{user}=use(AuthContext);
  console.log(product);
  const { description, type,  image, owner, _id,pricePerUnit } = product;




  const [quantitys, setQuantitys] = useState(1);
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const pricePerUnits = pricePerUnit || 0;
  const totalPrice = quantitys * pricePerUnits;

  const handleSubmit = () => {
    if (quantitys < 1) {
      toast.error("Quantity must be at least 1.");
      return;
    }
    setShowModal(true);
  };

  const confirmSubmit = () => {
    setShowModal(false);

    const formData = {
      quantitys,
      message,
      totalPrice,
      buyer_email: user.email,
      buyer_name:user.displayName
    };

    console.log("Interest submitted:", formData);
   

    fetch("http://localhost:3000/interst",{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body: JSON.stringify({...product,formData})
    })
    .then(res=>res.json())
    .then(data =>{
       toast.success("Interest submitted successfully!");
      console.log(data)
    })
    .catch(error =>console.log(error))
  };





  return (
    <div>
      <div className="min-h-screen bg-white flex items-center justify-center p-6 font-sans">
        
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="w-full h-[400px] bg-gray-100">
            <img
              src={image}
              alt="Man in Denim Jacket"
              className="w-full h-full object-cover shadow-sm"
            />
          </div>

          <div className="flex flex-col items-start">
          
            <div className="w-10 h-1 bg-green-600 mb-8"></div>

           
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4 tracking-tight">
              Sample Product
            </h1>
           <div>
                <h1 className="mb-3 font-semibold text-xl"><span className="font-bold">Product _id:</span> {_id}</h1>
                <h1 className="mb-3 font-semibold text-xl"><span className="font-bold">Crops Name:</span> {type}</h1>
                <h1 className="mb-3 font-semibold text-xl"><span className="font-bold">Owner Name: </span> {owner?.ownerName}</h1>
                <h1 className="mb-3 font-semibold text-xl"><span className="font-bold">Owner Email:</span> {owner?.ownerEmail}</h1>
                <h1 className="mb-3 font-semibold text-xl"><span className="font-bold">Quantity:</span> {quantitys}</h1>
           </div>

           
           

            
            <p className="text-gray-800 font-bold text-lg leading-relaxed mb-10">
             {
                description
             }
            </p>
         
           
          
          </div>
        </div>
      </div>
      <div>
       
      </div>    
      

      <div className="mt-10 flex justify-center">
  <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg border p-8">

    <h2 className="text-3xl font-bold text-gray-800 mb-6">
      💬 Express Your Interest
    </h2>

    
    <div className="mb-6">
      <label className="block text-gray-700 font-semibold mb-2">
        Quantity
      </label>
      <input
        type="number"
        min="1"
        className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
        onChange={(e) => setQuantitys(Number(e.target.value))}
        placeholder="Enter quantity you want to buy"
      />
      {quantitys < 1 && (
        <p className="text-red-500 text-sm mt-1">
          Quantity must be at least 1
        </p>
      )}
    </div>

    
    <div className="mb-6">
      <label className="block text-gray-700 font-semibold mb-2">
        Message (Optional)
      </label>
      <textarea
        rows="3"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Write any message to the crop owner…"
        className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
      ></textarea>
    </div>

    
    <div className="mb-6">
      <label className="block text-gray-700 font-semibold mb-2">
        Total Price
      </label>

      <div className="p-3 rounded-xl bg-gray-100 text-lg font-bold text-green-700 border">
        ₹ {totalPrice.toLocaleString()}
      </div>
    </div>

    
    <button
      onClick={handleSubmit}
      disabled={quantitys < 1}
      className="w-full py-3 bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] text-white rounded-xl font-semibold text-lg hover:bg-green-700 active:scale-95 transition disabled:bg-gray-400"
    >
      Submit Interest
    </button>
  </div>
</div>


{showModal && (
  <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
    <div className="bg-white p-6 rounded-2xl shadow-xl max-w-sm w-full">
      <h3 className="text-xl font-bold text-gray-800 mb-4">
        Confirm Your Interest
      </h3>

      <div className="space-y-2 text-gray-700">
        <p><strong>Quantity:</strong> {quantitys}</p>
        <p>
          <strong>Total Price:</strong> ₹ {totalPrice.toLocaleString()}
        </p>
      </div>

      <div className="flex justify-end mt-6 gap-3">
        <button
          className="px-4 py-2 border rounded-xl hover:bg-gray-100 transition"
          onClick={() => setShowModal(false)}
        >
          Cancel
        </button>

        <button
          className="px-4 py-2 bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] text-white rounded-xl hover:bg-green-700 transition"
          onClick={confirmSubmit}
        >
          Confirm
        </button>
      </div>
    </div>
  </div>
)}
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default ProductsDetails;
