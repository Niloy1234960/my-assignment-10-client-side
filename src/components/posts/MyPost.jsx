import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import AllProductsCard from "../AllProducts/AllProductsCard";
import MypostDetails from "./MypostDetails";
import Loading from "../loading/Loading";

const MyPost = () => {
  const { user } = use(AuthContext);
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`http://localhost:3000/myPost?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading></Loading>
  }
  if(post.length == 0) {
    return <h1 className="font-bold text-2xl text-center mt-8 mb-8">No post here</h1>
  }
  return (
    <div>
      <div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-6 gap-5 ml-13 mr-13">
          {post.map((products) => (
           <MypostDetails products={products}></MypostDetails>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyPost;
