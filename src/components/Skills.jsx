import React from 'react'
import styled from 'styled-components'; //here styled-components are imported from the website named UI-VERSE

const Skills = () => {
  return (
    < >
    <StyledWrapper> 
      <div className='bg-black h-140'>
        <h1 className=' text-3xl text-red-900 font-bold font-serif relative left-20'>TECH  STACK</h1>
    <div className='flex gap-30 justify-center text-center items-center'>

   <div>
    <img className='rounded-full h-30 relative left-3 hover:scale-110' src="images/HTML.png" alt="" />
     <button className="btn">
        HTML5
      </button>
   </div>

   <div className='relative'>
    <img className='rounded-full h-30 hover:scale-110' src="images/css.png" alt="" />
    <button className="btn">
        CSS3
      </button>
   </div>

   <div>
    <img className='rounded-full h-30 relative left-7 hover:scale-110' src="images/js.png" alt="" />
    <button className="btn">
        JAVASCRIPT
      </button>
   </div>

   </div>


   <div className='flex gap-30 justify-center relative  top-20 text-center'>

   <div className='relative left-7'>
    <img className='rounded-full h-25 relative left-7 hover:scale-110 ' src="images/react.png" alt="" />
    <button className="btn">
        REACT.JS
      </button>
   </div>

   <div>
    <img className='rounded-full h-25 hover:scale-110' src="images/tailwind.png" alt="" />
    <button className="btn">
        TAILWIND
      </button>
   </div>

   <div className='relative right-7'>
    <img className='rounded-full h-25 hover:scale-110' src="images/sql.png" alt="" />
    <button className="btn">
        SQL
      </button>
   </div>
   </div>
   </div>
   </StyledWrapper>
    </>
  )
}


//it is whole css of the styled components which i used in my components and it is imported from the ui verse
const StyledWrapper = styled.div`
  .btn {
    font-size: 1.2rem;
    padding: 1rem 2.5rem;
    border: none;
    outline: none;
    border-radius: 0.4rem;
    cursor: pointer;
    text-transform: uppercase;
    background-color: rgb(14, 14, 26);
    color: rgb(234, 234, 234);
    font-weight: 700;
    transition: 0.6s;
  }

  .btn:active {
    scale: 0.92;
  }

  .btn:hover {
    background: rgb(2,29,78);
    background: linear-gradient(270deg, rgba(2, 29, 78, 0.681) 0%, rgba(31, 215, 232, 0.873) 60%);
    color: rgb(4, 4, 38);
  }`;

export default Skills
