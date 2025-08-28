import React from 'react'
import styled from 'styled-components'; // styled-components from UI-Verse

const Skills = () => {
  const skills = [
    { name: "HTML5", img: "images/HTML.png" },
    { name: "CSS3", img: "images/css.png" },
    { name: "JAVASCRIPT", img: "images/js.png" },
    { name: "REACT.JS", img: "images/react.png" },
    { name: "TAILWIND", img: "images/tailwind.png" },
    { name: "SQL", img: "images/sql.png" },
  ];

  return (
    <StyledWrapper>
      <div className="bg-black text-white py-12 px-6">
        
        {/* Title */}
        <h1 className="text-2xl md:text-3xl text-red-600 font-bold font-serif text-center mb-10">
          TECH STACK
        </h1>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10 place-items-center">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              <img 
                src={skill.img} 
                alt={skill.name}
                className="h-20 w-20 rounded-full hover:scale-110 transition duration-300"
              />
              <button className="btn mt-4">{skill.name}</button>
            </div>
          ))}
        </div>

      </div>
    </StyledWrapper>
  )
}

// Styled UI-Verse Button
const StyledWrapper = styled.div`
  .btn {
    font-size: 1rem;
    padding: 0.6rem 1.5rem;
    border: none;
    outline: none;
    border-radius: 0.4rem;
    cursor: pointer;
    text-transform: uppercase;
    background-color: rgb(14, 14, 26);
    color: rgb(234, 234, 234);
    font-weight: 600;
    transition: 0.6s;
  }

  .btn:active {
    scale: 0.92;
  }

  .btn:hover {
    background: linear-gradient(270deg, rgba(2,29,78,0.7) 0%, rgba(31,215,232,0.9) 60%);
    color: rgb(4, 4, 38);
  }
`;

export default Skills
