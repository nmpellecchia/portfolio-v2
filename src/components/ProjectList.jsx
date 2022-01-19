import React from 'react';
import { ProjectBundle } from '../resources/myProjects';

function ProjectList() {
  const myProjects = ProjectBundle;
  return (
    <section className="bg-blackest-color bg-opacity-80">
      <ul className="flex flex-wrap justify-center">
        {myProjects.map((project, i) => {
          return <MiniProject project={project} index={i} key={project.name} />;
        })}
      </ul>
    </section>
  );
}

function MiniProject({ project, index }) {
  return (
    <li className="group w-full relative overflow-hidden md:w-11/12">
      <figure>
        <img src={project.img} alt={project.name} className="" />
        <figcaption className="w-full absolute bottom-0 left-0 translate-y-1/2 group-hover:translate-y-0 bg-blackest-color bg-opacity-0 group-hover:bg-opacity-70 transition duration-500">
          <h3 className="w-10/12 text-4xl uppercase font-title transition duration-500 ml-8 border-b-4 border-slate-700">
            {project.name}
          </h3>
          <p className="text-xl uppercase font-main transition duration-500 pl-4">
            {project.definition}
          </p>
          <div className="text-whitest-color flex justify-around">
            <button className="uppercase bg-accent-color py-3 px-5 rounded-full mb-1 bg-gradient-to-tl from-main-color to-accent-color font-bold">
              live
            </button>
            <button className="uppercase bg-accent-color py-3 px-3 rounded-full mb-1 bg-gradient-to-tl from-main-color to-accent-color font-bold">
              github
            </button>
          </div>
        </figcaption>
      </figure>
      <div className="flex justify-center items-center absolute top-0 left-0 w-full h-full  bg-blackest-color bg-opacity-40 transition duration-300 group-hover:bg-opacity-0">
        <p className="font-title text-6xl text-accent-color border-4 border-accent-color rounded-full p-4 group-hover:text-transparent group-hover:border-transparent group-hover:scale-125 transition duration-300">
          {index + 1}
        </p>
      </div>
    </li>
  );
}

export default ProjectList;
