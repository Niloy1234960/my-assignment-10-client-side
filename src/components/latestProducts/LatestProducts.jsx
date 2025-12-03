import React, { use } from 'react';
import Product from '../Product/Product';
import { Link } from 'react-router';



const LatestProducts = ({latestProductPromise}) => {
    const products = use(latestProductPromise)
    console.log(products)
    return (
       <div>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-6 gap-5 ml-13 mr-13'>
           {
            products.map(product => <Product key={product._id} product={product} ></Product>)
           }
        </div>
       <div className='flex justify-center '>
          <Link to="/allProducts" className='rounded-xl w-30 btn bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] text-white'>View All</Link>
       </div>
       </div>
    );
};

export default LatestProducts;