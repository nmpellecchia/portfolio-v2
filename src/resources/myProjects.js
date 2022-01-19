import mockupPageImg from '../imgs/projects/mockup_4.png';
import countriesPageImg from '../imgs/projects/countries_2.png';
import triviaPageImg from '../imgs/projects/trivia.png';

class Project {
  constructor(img, name, definition) {
    this.img = img;
    this.name = name;
    this.definition = definition;
  }
}

const project1 = new Project(
  mockupPageImg,
  'Tree-umph company mockup page',
  'def'
);
const project2 = new Project(countriesPageImg, 'Every country list', 'def');
const project3 = new Project(
  triviaPageImg,
  'General Trivia with retro look',
  'def'
);

export const ProjectBundle = [project1, project2, project3];
