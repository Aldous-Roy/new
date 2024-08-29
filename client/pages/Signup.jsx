import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const Signup = () =>{ 
    
    const [userName,setUserName]=useState("");
    const [password,setPassword]=useState("");

    const handleSubmit= (e) =>
    {
        e.preventDefault();

        //posting sign up data

    }

    return (
        <div className='bg-[#222831] sm:w-4/6 md:w-1/2 lg:w-2/6 rounded-xl p-5 w-5/6 '>

            <p className='text-3xl font-bold text-white bg-transparent text-center mb-2'>Sign Up</p>
            <hr className='mb-10'/>

            <form className='grid place-items-center mb-5'>

                <input name='username' className='w-4/5 bg-white rounded-md p-1.5 focus:scale-105 mb-5 transition-all duration-300' type='text' required placeholder='User Name' onChange={(e) => {setUserName(e.target.value)}} value={userName}/>

                <input name='password' className='w-4/5 bg-white rounded-md p-1.5 focus:scale-105 mb-10 transition-all duration-300' type='password' required placeholder='Password' onChange={(e) => {setPassword(e.target.value)}} value={password}/>

                <div className='flex items-center justify-center'> 
                    <button className='bg-[#686D76] p-1 px-2 text-lg hover:scale-105 active:scale-95 transition-all duration-300 rounded-md' onClick={handleSubmit} type='submit'> Sign Up</button> 
                </div>

            </form>

            <p className='text-center text-white'>Already have an account?</p>
            <div className='flex items-center justify-center'> 
                <Link to='/signin'>
                    <button className='bg-transparent text-white p-1 px-2 text-lg hover:underline transition-all duration-300 rounded-md' type='button'> Sign In</button> 
                </Link>
            </div>

        </div>
    );
}
export default Signup;