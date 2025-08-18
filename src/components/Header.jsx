import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <div className='h-20 border-4 relative top- text-4xl bg-black text-amber-50 rounded-4xl'>
          <h1 className='relative top-4 left-8'>Portfolio</h1>
          <div className='flex gap-4 relative text-2xl left-320 bottom-5'>
          <Link  to="/">Home</Link>    
          <Link  to="/About">About</Link>    
      </div>
         </div>
      

    </>
  )
}

export default Header

