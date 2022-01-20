import mockupPageImg from '../imgs/projects/mockup_4.png';
import countriesPageImg from '../imgs/projects/countries_2.png';
import triviaPageImg from '../imgs/projects/trivia.png';

class Project {
  constructor(img, name, definition, repoURL, pageURL) {
    this.img = img;
    this.name = name;
    this.definition = definition;
    this.repoURL = repoURL;
    this.pageURL = pageURL;
  }
}

const project1 = new Project(
  mockupPageImg,
  'Tree-umph company',
  'Simulacro de página web de una compañía',
  'https://github.com/nmpellecchia/product-website-mockup',
  'https://nmpellecchia.github.io/product-website-mockup/'
);
const project2 = new Project(
  countriesPageImg,
  'Listado de países',
  'Aplicación interactiva para aprender sobre cualquier país del mundo',
  'https://github.com/nmpellecchia/countries-api',
  'https://nmpellecchia.github.io/countries-api/'
);
const project3 = new Project(
  triviaPageImg,
  'Trivia con aspecto retro',
  'Divertido juego de preguntas de conocimiento gral. con un curioso estilo retro',
  'https://github.com/nmpellecchia/Retro-looking-Trivia',
  'https://nmpellecchia.github.io/Retro-looking-Trivia/'
);

export const ProjectBundle = [project1, project2, project3];
