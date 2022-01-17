import React from 'react';

function AboutMe() {
  return (
    <section className="min-h-screen text-black font-semibold p-6 pt-10 bg-red-700 border-t-8 border-red-600">
      <h1 className="text-4xl text-red-100 font-black uppercase mb-6">
        Soy Nicolas Pellecchia
      </h1>
      <article>
        <p>
          Un desarrollador front-end de Buenos Aires, Argentina. Me gusta el
          código y los diseños{' '}
          <b className="font-semibold text-red-200">estructurados </b> y
          <b className="font-semibold text-red-200"> minimalistas</b>
          . Aprender y mejorar es algo siempre bienvenido. <br />
          Aunque me he concentrado en el front-end,{' '}
          <b className="font-semibold text-red-200">
            busco ampliar mis horizontes
          </b>{' '}
          y aprender las diversas tecnologías de back-end. <br />
        </p>
      </article>
      <article>
        <p>Algunas tecnologías con las que he trabajado son:</p>
        <ul className="uppercase flex flex-wrap">
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
