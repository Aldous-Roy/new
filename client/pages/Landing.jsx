import { Link } from "react-router-dom"
const Landing = () => {
  return (
    <div>
        <p className="text-4xl text-white pt-20 font-bold p-2 py-3">Landing Page</p>
        <div className='flex justify-center items-center space-x-10'>
            <div className='flex items-center justify-center'> 
                <Link to='/signup'>
                    <button className='bg-transparent text-white p-1 px-2 text-lg hover:underline transition-all duration-300 rounded-md' type='button'> Sign Up</button> 
                </Link>
            </div>
            <div className='flex items-center justify-center'> 
                <Link to='/signin'>
                    <button className='bg-transparent text-white p-1 px-2 text-lg hover:underline transition-all duration-300 rounded-md' type='button'> Sign In</button> 
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Landing