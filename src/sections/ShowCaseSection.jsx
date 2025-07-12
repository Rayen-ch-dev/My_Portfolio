import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
const ShowCaseSection = () => {
  const sectionRef = React.useRef(null);
  const project1Ref = React.useRef(null);
  const project2Ref = React.useRef(null);
  const project3Ref = React.useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  
  useGSAP(()=>{
    const projects = [project1Ref, project2Ref, project3Ref];
    projects.forEach((project, index) => {
      gsap.fromTo(project.current, 
        { opacity: 0, y: 50 }, 
        { opacity: 1, y: 0, duration: 1.5, delay:0.3*(index+1) ,ease: 'power2.out', 
          scrollTrigger: {
            trigger: project.current,
            start: 'top bottom -=100',
            toggleActions: 'play none none reverse',
          }
        }
      );
    });
    gsap.fromTo(sectionRef.current, 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1.5, ease: 'power2.out' }
    );

  },[])
  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/*left showcase content*/}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <img src="/images/project1.png " alt="project 1" className="object-fill" />
            </div>
            <div className="text-content">
              <h2>
                first internship project aimed to improve client communication and provide an
                efficient data management system.
              </h2>
              <p className="text-white-50 md:text-xl">
                An app built with React and Node.js, featuring a user-friendly interface for
                managing client data and communication. It includes real-time updates, secure data
                storage, and a responsive design for seamless access across devices.
              </p>
            </div>
          </div>
          {/*right showcase content*/}
          <div className="project-list-wrapper overflow-hidden" >
            <div className="project" ref={project2Ref} >
              <div className="image-wrapper bg-[#1a1a1a] ">
                <img src="/images/project1.png" alt="Rental car project" />
              </div>
              <h2>Rental car project</h2>
            </div>
            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#1a1a1a] ">
                <img src="/images/project1.png" alt="Banking system project" />
              </div>
              <h2>Banking system project</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowCaseSection;
