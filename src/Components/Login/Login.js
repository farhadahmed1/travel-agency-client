import React from 'react';

import useAuth from './../../hooks/useAuth';
import { Swal } from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router';

const Login = () => {

    // redirection user
    // const history = useHistory();
    const location = useLocation();
    const redirect_URL = location.state?.from || '/'
    const navigate = useNavigate();

    const { user, setIsLoading, setUser, signInWithGoogle } = useAuth();
    console.log(user);

    const handleClick = () => {
        signInWithGoogle()
            .then((result) => {
                navigate(redirect_URL)
                setUser(result.user)
                Swal.fire({
                    icon: 'success',
                    title: 'Greate Job',
                    text: 'Successfully Login',
                })
            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Something Went Wrong',
                    text: error.message,
                })
            })
            .finally(() => {
                setIsLoading(false)
            });
    }
    return (
        <div className="container my-20" style={{ height: "50vh" }}>
            <h2 className="text-center text-tomato text-3xl font-semibold my-5">HOLIDAY HYPE Sign In</h2>
            <div className="w-72 mx-auto flex items-center justify-evenly border border-gray-300 rounded-lg  py-3 cursor-pointer  bg-dark-blue text-white" onClick={handleClick} >
                <img src="https://i.ibb.co/r59CX3p/search-1.png" className="w-12 " alt="" />
                <span className="poppins">Sign In With Google</span>
            </div>
        </div>
    );
};

export default Login;