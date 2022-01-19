import React from 'react';

function AboutMe() {
  return (
    <section className="min-h-screen text-blackest-color font-semibold p-5 pt-10 bg-main-color bg-opacity-70">
      <h1 className="text-4xl text-whitest-color font-black uppercase font-title tracking-widest mb-6">
        Soy Nicolas Pellecchia
      </h1>
      <article>
        <p>
          Un desarrollador front-end de Buenos Aires, Argentina. Me gusta el
          código y los diseños{' '}
          <b className="font-semibold text-whitest-color">estructurados </b> y
          <b className="font-semibold text-whitest-color"> minimalistas</b>
          . Aprender y mejorar es algo siempre bienvenido. <br />
          Aunque me he concentrado en el front-end,{' '}
          <b className="font-semibold text-whitest-color">
            busco ampliar mis horizontes
          </b>{' '}
          y aprender las diversas tecnologías de back-end. <br />
        </p>
      </article>
      <article>
        <p>Algunas tecnologías con las que he trabajado son:</p>
        <ul className="uppercase flex flex-wrap mt-5">
          <li className="basis-1/2 grow">▸React</li>
          <li className="basis-1/2 grow">▸JQuery</li>
          <li className="basis-1/2 grow">▸Javascript</li>
          <li className="basis-1/2 grow">▸CSS</li>
          <li className="basis-1/2 grow">▸Tailwind</li>
          <li className="basis-1/2 grow">▸Bootstrap</li>
          <li className="basis-1/2 grow">▸HTML semántico</li>
        </ul>
      </article>
    </section>
  );
}

export default AboutMe;
