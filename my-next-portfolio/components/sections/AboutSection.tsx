import CurrentTimeLineExp from '../content/CurrentTimeLineExp';
import AnimationContainer from '../utils/AnimationContainer';
import SectionContainer from '../utils/SectionContainer';
import ShowSkills from '../utils/ShowSkills';
import TitleSectionPageContainer from '../utils/TitleSectionPageContainer';

const skills = [
  {
    title: 'Languages',
    techs: ['HTML', 'CSS', 'JavaScript', 'TypeScript']
  },
  {
    title: 'Frameworks and libraries',
    techs: ['jQuery', 'Angular', 'React', 'Next.js', 'Ionic', 'Electron.js']
  },
  {
    title: 'JavaScript libraries',
    techs: ['Redux', 'TanStack Query', 'react-router-dom', 'Wouter', 'react-helmet', 'Formik', 'Jest']
  },
  {
    title: 'Preprocessors, css style, component and motion libraries',
    techs: ['Pug', 'Scss', 'Sass', 'Less', 'Bootstrap', 'Tailwind', 'ChakraUI', 'MaterialUI', 'Framer Motion']
  },
  {
    title: 'Backend stack',
    techs: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Firebase', 'Sanity CMS', 'Strapi', 'Docker']
  },
  {
    title: 'Softwares and tools',
    techs: ['VS Code', 'Jira', 'Trello', 'Git', 'GitHub', 'ESLint', 'Husky', 'WordPress', 'Elementor', 'Figma', 'Photoshop']
  },
  {
    title: 'Agile methodologies and coding principles',
    techs: ['SCRUM', 'Kanban', 'Clean Code', 'SOLID principles', 'Clean Architecture', 'Pixel perfect']
  }
];

const AboutSection = () => {
  return (
    <SectionContainer>

      <div className='w-full flex flex-col gap-6'>

        <TitleSectionPageContainer title='About me' />

        <AnimationContainer customClassName='w-full flex flex-col gap-5 mb-8'>

          <p className='text-base text-gray-400'>
          I'm a Full Stack Developer - Crafting Seamless User Experiences who is so keen to learn new technologies since the age of 20. I love to teach, story telling and to become a public speaker.
          </p>

          <p className='text-base text-gray-400'>
            Have 5+ years of experience in designing, developing, and implementing web applications using React, NextJS, Node, AWS, URQL, Hasura, Tailwind CSS, etc.
          </p>

        </AnimationContainer>

        <CurrentTimeLineExp />

        <AnimationContainer customClassName='w-full flex flex-col gap-5 mb-8'>

          <h2 className='font-bold text-2xl md:text-2xl tracking-tight mb-2 text-white text-start'>Skills and Tools</h2>

          <p className='text-base text-gray-400'>
            A look at all the programming languages, libraries, and tools I've worked with, I started programming about 4 years ago. I have tried a few programming languages and technology stack, both Backend and Frontend.
          </p>

          <p className='text-base text-gray-400'>
            Event though the scope of web development is wide, I was very interested and focused on Frontend development and UI/UX design.
          </p>

          <div className='flex flex-col items-start gap-3 mt-3'>

            {
              skills.map(({ title, techs }) => (
                <div key={title}>

                  <h3 className='font-bold text-1xl md:text-1xl tracking-tight mb-5 text-white text-start'>{title}</h3>

                  <AnimationContainer customClassName='flex items-center flex-wrap gap-3 mb-5'>
                    <ShowSkills skills={techs} />
                  </AnimationContainer>

                </div>
              ))
            }

          </div>

        </AnimationContainer>

        <AnimationContainer customClassName='w-full flex flex-col gap-5'>

          <h2 className='font-bold text-2xl md:text-2xl tracking-tight mb-2 text-white text-start'>Interests</h2>

          <p className='text-base text-gray-400'>
            I am interested in learning Backend with Java, Go or with Python. I also want to know how to make a video game with Unity or other and I am very interested in being a content creator whether programming or something else.
          </p>

          <p className='text-base text-gray-400'>
            For now I've decided that I'm going to get involved in each of the things I want to learn so I can figure out which one I like the most.
          </p>

        </AnimationContainer>

      </div>

    </SectionContainer>
  )
}

export default AboutSection;