import AnimationContainer from '../utils/AnimationContainer';

const AboutMe = () => {
  return (
    <AnimationContainer customClassName='w-full mb-16'>

      <h2 className='font-bold text-2xl tracking-tight mb-8 text-white text-center lg:text-start'>
        About me
      </h2>

      <p className='text-base text-gray-400'>
      I'm a Full Stack Developer - Crafting Seamless User Experiences who is so keen to learn new technologies since the age of 20. I love to teach, story telling and to become a public speaker. Have 5+ years of experience in designing, developing, and implementing web applications using React, NextJS, Node, AWS, URQL, Hasura, Tailwind CSS, etc.
      </p>

    </AnimationContainer>
  )
}

export default AboutMe;