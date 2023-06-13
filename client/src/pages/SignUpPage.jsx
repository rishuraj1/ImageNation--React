import React, { useState } from 'react'
import { FaFacebook, FaUser, FaGithub } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { MdEmail, MdPassword } from 'react-icons/md'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const SignUpPage = () => {

  const [isError, setIsError] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  function onSignUp(e) {
    e.preventDefault();
    console.log('Sign Up button clicked');
  }

  const checkValidation = (e) => {
    setConfirmPassword(e.target.value);
    if (password !== confirmPassword) {
      setIsError(true);
      document.getElementById('confirm-password').classList.add('border-red-500');
      document.getElementById('password').classList.add('border-red-500');
    }
    else {
      document.getElementById('confirm-password').classList.add('border-green-500');
      document.getElementById('password').classList.add('border-green-500');
    }
  }

  const [show, setShow] = useState(false);

  function showPW() {
    document.getElementById("password").setAttribute("type", "text");
    document.getElementById("confirm-password").setAttribute("type", "text");
  }

  function hidePW() {
    document.getElementById("password").setAttribute("type", "password");
    document.getElementById("confirm-password").setAttribute("type", "password");
  }

  return (
    <div className='p-5 flex justify-center items-center bg-cyan-400 max-h-screen'>
      <div className='bg-gradient-to-br from-[#13046b] to-[#0c0527] p-5 rounded-md shadow-lg flex flex-col justify-center items-center gap-5'>
        <div className='flex items-center w-full justify-center'>
          <h1 className='text-yellow-400 text-3xl font-norseBold'>Imagenation</h1>
        </div>
        <div className='flex justify-center items-center gap-5 w-full'>
          <div className='flex flex-col justify-between items-center text-center gap-16 w-1/2'>
            <h1 className='text-3xl text-center text-white font-bold'>Welcome</h1>
            <div className='flex flex-col justify-center items-center text-center gap-3'>
              <p className='text-center text-white'>Sign Up using : </p>
              <div className='flex justify-center items-center gap-5'>
                <FcGoogle className='w-[30px] h-[30px] text-cyan-600 hover:text-[#db4437] transition-all ease-in-out duration-300 cursor-pointer' />
                <FaFacebook className='w-[30px] h-[30px] text-cyan-600 hover:text-[#3b5998] transition-all ease-in-out duration-300 cursor-pointer' />
                <FaGithub className='w-[30px] h-[30px] text-cyan-600 hover:text-white transition-all ease-in-out duration-300 cursor-pointer' />
              </div>
            </div>
            <p className='text-cyan-300 font-medium'>Already have an acccount ? <span className='text-cyan-600 hover:text-cyan-700 transition-all duration-300 ease-in-out '><Link to="/signin">Sign In</Link></span> </p>
          </div>
          <div className="bg-cyan-300 rounded-md shadow-lg w-2/3">
            {/* Sign Up form */}
            <form className='flex flex-col justify-center items-center gap-5 p-5'>
              <h1 className='text-2xl text-center text-[#13046b] font-bold'>Sign Up</h1>

              {/* Name */}
              <div className='flex gap-2'>
                <FaUser className='w-[20px] h-[20px] text-cyan-600 absolute mt-2 ml-1 text-center' />
                <input
                  name='firstName'
                  type="text"
                  placeholder='First Name'
                  className='w-[172px] h-[40px] rounded-md outline-none px-6 text-center block'
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />

                <input
                  name='lastName'
                  type="text"
                  placeholder='Last Name'
                  className='w-[172px] h-[40px] rounded-md outline-none px-6 text-center block'
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>

              {/* Username */}
              <div className='flex'>
                <FaUser className='w-[20px] h-[20px] text-cyan-600 absolute mt-2 ml-1 text-center' />
                <input
                  name='username'
                  type="text"
                  placeholder='Username'
                  className='w-[350px] h-[40px] rounded-md outline-none px-6 text-center block'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              {/* Email */}
              <div className='flex'>
                <MdEmail className='w-[20px] h-[20px] text-cyan-600 absolute mt-2 ml-1 text-center' />
                <input
                  name='email'
                  type="text"
                  placeholder='Email'
                  className='w-[350px] h-[40px] rounded-md outline-none px-6 text-center block'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} />
              </div>

              {/* New Password */}
              <div className='flex'>
                <MdPassword className='w-[20px] h-[20px] text-cyan-600 absolute text-center mt-2 ml-1' />
                <input
                  name='password'
                  type="password"
                  placeholder='Password'
                  id='password'
                  className='w-[350px] h-[40px] rounded-md outline-none px-6 text-center block'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} />

                {show ?
                  <AiFillEyeInvisible className='w-[20px] h-[20px] text-cyan-600 absolute text-center cursor-pointer mt-2 ml-[322px]'
                    onClick={() => {
                      setShow(false);
                      hidePW();
                    }} />
                  :
                  <AiFillEye className='w-[20px] h-[20px] text-cyan-600 absolute  text-center cursor-pointer mt-2 ml-[322px]' onClick={() => {
                    setShow(true);
                    showPW();
                  }} />}
              </div>

              {/* Re-enter password */}
              <div className='flex'>
                <MdPassword className='w-[20px] h-[20px] text-cyan-600 absolute text-center mt-2 ml-1' />
                <input
                  name='confirm-password'
                  type="password"
                  placeholder='Re-enter Password'
                  id='confirm-password'
                  className='w-[350px] h-[40px] rounded-md outline-none px-6 text-center block'
                  value={confirmPassword}
                  onChange={(e) => checkValidation(e)}
                />
              </div>

              {/* Submit button */}
              <button
                onClick={onSignUp}
                className='w-[350px] h-[40px] rounded-md bg-cyan-600 text-white font-bold hover:bg-cyan-700 transition-all ease-in-out duration-300'
              >Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage