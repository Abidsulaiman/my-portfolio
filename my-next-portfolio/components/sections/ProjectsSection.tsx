import SearchAllProjects from '../content/SearchAllProjects';
import AnimationContainer from '../utils/AnimationContainer';
import SectionContainer from '../utils/SectionContainer';
import TitleSectionPageContainer from '../utils/TitleSectionPageContainer';

const myGithub = 'https://github.com/abidsulaiman';

// just a comment

const ProjectsSection = () => {
  return (
    <SectionContainer>

      <div className='w-full flex flex-col gap-6'>

        <TitleSectionPageContainer title='Projects' />

        <AnimationContainer customClassName='w-full flex flex-col gap-5 mb-8'>

          <p className='w-full text-base text-gray-400'>
            These are most of the projects I've done since I started programming, some of them are personal projects, freelance, work, practice or for other situation. Check out my whole projects here! <a href={myGithub} target='_blank' rel='noopener noreferrer' className='hover:text-white hover:underline transition-all ease-in-out'>github.com/abidsulaiman</a>.
          </p>

        </AnimationContainer>

        <SearchAllProjects />

      </div>

    </SectionContainer>
  )
}

export default ProjectsSection;