import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from './../../hooks/useAuth';

const Login = () => {
    const { setUser, signInWithGoogle, setIsLoading } = useAuth() || {};

    const navigate = useNavigate();

    const handleClick = () => {
        signInWithGoogle()
            .then((result) => {
                setUser(result.user)
                navigate('/')
                Swal.fire({
                    icon: 'success',
                    title: 'Greate Job',
                    text: 'Successfully logged in ',
                })
            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Something Went Wrong',
                    text: error.message,
                })
            }).finally(() => {
                setIsLoading(false)
            });
    }
    return (
        <>
            {/* google signin  */}
            <div className="container my-20" style={{ height: "50vh" }}>
                <h2 className="text-center text-tomato text-3xl font-semibold my-5">HOLIDAY HYPE Sign In</h2>
                <div className="w-72 mx-auto flex items-center justify-evenly border border-gray-300 rounded-lg  py-3 cursor-pointer  bg-dark-blue text-white" onClick={handleClick} >
                    <img src="https://i.ibb.co/r59CX3p/search-1.png" className="w-12 " alt="" />
                    <span className="poppins">Sign In With Google</span>
                </div>
            </div>
        </>
    );
};

export default Login;