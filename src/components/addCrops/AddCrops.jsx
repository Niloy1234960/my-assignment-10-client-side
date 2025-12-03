import React, { use } from "react";
import { AuthContext } from "../../context/AuthProvider";
  import { ToastContainer, toast } from 'react-toastify';

const AddCrops = () => {
    const {user} = use(AuthContext)
    const handleSubmit = (e)=>{
         e.preventDefault();
         const formData = {
            name: e.target.name.value,
            type: e.target.type.value,
            pricePerUnit: 0,
            unit: 0,
            quantity: 0,
            description: e.target.description.value,
            location: e.target.location.value,
            image: e.target.image.value,          
            owner: {
              ownerName: user.displayName,
              ownerEmail: user.email,
              }
            }
        fetch("http://localhost:3000/products", {
            method: 'POST',
            headers: {
                "Content-type" : "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => {
            toast.success("Successfully added!")
            console.log(data.result)
           
        })
        .catch(err => {
            console.log(err)
        })
    }
  return (
    <div>
      <div className="bg-red-200 p-5">
        <div className="card border border-gray-200 bg-base-100 w-full max-w-md mx-auto shadow-2xl rounded-2xl ">
          <div className="card-body p-6 relative">
            <h2 className="text-2xl font-bold text-center mb-6">Add New Crops</h2>
            <form onSubmit={handleSubmit} className="space-y-4 ">
              {/* Name Field */}
              <div>
                <label className="label font-medium">Crops Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                  placeholder="Enter Crops name"
                />
              </div>

              {/* Description Textarea */}
              <div>
                <label className="label font-medium">Description</label>
                <textarea
                  name="description"
                  required
                  rows="15"
                  className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200 h-[250px]"
                  placeholder="Enter description"
                ></textarea>
              </div>

              {/* Category Dropdown */}
              <div>
                <label className="label font-medium">Category</label>
                <select
                  defaultValue={""}
                  name="type"
                  required
                  className="select w-full rounded-full focus:border-0 focus:outline-gray-200"
                >
                  <option value="" disabled>
                    Select category
                  </option>
                  <option value="Vehicles">Vegitable</option>
                  <option value="Plants">Fruit</option>
                  <option value="Foods">Grain</option>
                  <option value="Home & Living">e.</option>
                  <option value="Characters">g.</option>
                </select>
              </div>

              {/* rentPrice */}
              <div>
                <label className="label font-medium">Price Unit</label>
                <input
                  type="text"
                  name="pricePerUnit"
                  required
                  className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                  placeholder="Enter Your Price"
                />
              </div>

              {/* Location */}
              <div>
                <label className="label font-medium">Location</label>
                <input
                  type="text"
                  name="location"
                  required
                  className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                  placeholder="Your Location"
                />
              </div>

              {/* Image URL */}
              <div>
                <label className="label font-medium">Imgae Url</label>
                <input
                  type="url"
                  name="image"
                  required
                  className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn w-full text-white mt-6 rounded-full bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]  hover:scale-103 transition-all duration-200"
              >
                Add Crops
              </button>
              <ToastContainer></ToastContainer>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCrops;
