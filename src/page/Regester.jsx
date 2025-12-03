import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../context/AuthProvider';

const Register = () => {
  const { creatUser, googleLogin, setUser } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({email, password})
    const regexp = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (!regexp.test(password)) {
      toast.error("Password must have at least 6 characters, one uppercase, one lowercase.");
      return;
    }
    
   creatUser(email, password)
   .then(result =>
    toast("your log in successful")
   )
   .catch(error =>console.log(error))
 
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(result => {
        toast.success("✔ Google Login Successful");
        setUser(result.user);
        navigate("/");
        
     

      })


    //   create user in databas
   
    .then(res => res.json())
    .then(data => {
        console.log('data after save database', data)
    })


      .catch(error => {
        toast.error(error.message);
        console.log(error);
      });
  };

  return (
    <div className="flex justify-center min-h-screen items-center text-black bg-cover bg-center" style={{backgroundImage: "url('https://i.ibb.co.com/rK8Y80M9/18eae1ebb07d6d53e71491e64821c95e.jpg')"}}>
      <div className="card bg-base-100 w-11/12 max-w-sm shadow-2xl">
        <form onSubmit={handleRegister} className="card-body bg-cover bg-center rounded-xl" style={{backgroundImage: "url('https://i.ibb.co.com/TDqr63Xw/05d2bb98ade867c6564c9b011c589e6a.jpg')"}}>
          <h1 className="text-2xl font-bold text-center text-white">Register your account</h1>
          
          <label className="label text-white">Name</label>
          <input type="text" name="name" className="input" placeholder="Your Name" required />
          
          <label className="label text-white">Photo URL</label>
          <input type="text" name="photo" className="input" placeholder="Your Photo URL" required />
          
          <label className="label text-white">Email</label>
          <input type="email" name="email" className="input" placeholder="Email" required />
          
          <div className="relative">
            <label className="label text-white">Password</label>
            <input type={show ? "text" : "password"} name="password" className="input" placeholder="Password" required />
            <span onClick={() => setShow(!show)} className="absolute top-6 right-6 z-50 cursor-pointer">
              {show ? <FaEyeSlash size={24}/> : <FaEye size={24}/>}
            </span>
          </div>

          <button type="submit" className="btn btn-neutral mt-4">Register</button>

          <div className="flex w-full flex-col h-10">
            <div className="divider divider-success">OR</div>
          </div>

          <button type="button" onClick={handleGoogleLogin} className="btn mb-5">
            <FaGoogle size={24} className="text-[#34A853]"/> Register with Google
          </button>

          <p className="font-semibold text-center text-white text-lg">
            Already have an account? <Link className="text-green-600" to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
