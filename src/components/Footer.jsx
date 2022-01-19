import React from 'react';

function Footer() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  const mySocials = [
    {
      name: 'github',
      url: 'https://github.com/nmpellecchia',
    },
    {
      name: 'linkedin',
      url: 'https://linkedin.com/in/nicopell',
    },
    {
      name: 'telegram',
      url: 'https://t.me/NicoPell',
    },
  ];
  return (
    <footer className="mx-5 bg-darkest-color bg-opacity-50">
      <article className="flex flex-col items-center mt-6">
        <h1 className="uppercase text-6xl font-black font-title tracking-widest">
          hablemos
        </h1>
        <div className="text-4xl" aria-hidden="true">
          • ⚊ •
        </div>
        <a
          href="mailto:nicolasmpellecchia@gmail.com"
          className="text-main-color text-2xl hover:underline hover:text-accent-color"
        >
          nicolasmpellecchia@gmail.com
        </a>
      </article>
      <article className="py-10">
        <ul className="w-full flex flex-col">
          {mySocials.map(social => {
            return <SocialElement elem={social} key={social.name} />;
          })}
        </ul>
      </article>
      <article>
        <p className="text-slate-500 flex justify-end">
          {currentYear} - Nicolas Pellecchia
        </p>
      </article>
    </footer>
  );
}

function SocialElement(props) {
  const cropProtocolStr = el => {
    const protocol = 'https://';
    const newEl = el.replace(protocol, '');
    return newEl;
  };
  return (
    <li className="pb-10">
      <h5 className="w-10/12 uppercase font-bold border-b-2 border-slate-800">
        {props.elem.name}
      </h5>
      <a
        href={props.elem.url}
        className="italic text-main-color hover:underline hover:text-accent-color"
      >
        {cropProtocolStr(props.elem.url)}
      </a>
    </li>
  );
}

export default Footer;
