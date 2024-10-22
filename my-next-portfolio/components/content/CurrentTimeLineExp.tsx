'use client';

import { Timeline, TimelineEvent } from './TimeLineExp';

const CurrentTimeLineExp = () => {
  return (
    <Timeline>
      <TimelineEvent active>
        <TimelineEvent.Title>
          <a
            href="https://abzdev.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:underline transition-all ease"
          >
            Freelancer
          </a>{' '}
          | October 2024 - Currently
        </TimelineEvent.Title>

        <TimelineEvent.Description>
          Building robust and effiecient web apps using Next Js, GraphQl, SQL, Figma, Node JS.
        </TimelineEvent.Description>
      </TimelineEvent>

      <TimelineEvent>
        <TimelineEvent.Title>
          <a
            href="https://girsoftwareservices.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:underline transition-all ease"
          >
            GIR Software Services
          </a>{' '}
          | July 2023 - September 2024
        </TimelineEvent.Title>

        <TimelineEvent.Description>
          Implemented custom features and functionality within the SuiteCommerce Advanced platform to meet unique business requirements.
          Built custom extensions using SuiteScript and Backbone.js.
          Create and modify SuiteCommerce themes and templates for UI/UX customization.
          Optimized performance, security, and scalability of eCommerce implementations.
          Utilized REST/SOAP APIs for smooth data exchanges between NetSuite and external
          applications.
          Implement responsive design to ensure the site performs well across devices.
          Optimize page load times and implement best practices for SEO.
          Create user-friendly navigation, checkout processes, and interactive features.
        </TimelineEvent.Description>
      </TimelineEvent>

      <TimelineEvent>
        <TimelineEvent.Title>
          <a
            href="https://94dev.xyz/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:underline transition-all ease"
          >
            94 DEV
          </a>{' '}
          | dec. 2021 - June 2023
        </TimelineEvent.Title>

        <TimelineEvent.Description>
          Frontend development implementing agile methodologies and best
          practices such as SOLID principles, pixel perfect, clean architecture
          and clean code using the following technologies: Git, HTML, CSS, SASS,
          JavaScript, TypeScript, React, Next.js, Redux, URQL, AWS, graphQl,
          Tailwind CSS, others...
        </TimelineEvent.Description>
      </TimelineEvent>

      <TimelineEvent>
        <TimelineEvent.Title>
          <a
            href="https://www.dwarelab.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:underline transition-all ease"
          >
            Dware INC.
          </a>
          | may. 2019 - dec. 2021
        </TimelineEvent.Title>

        <TimelineEvent.Description>
          Design and complete development of web pages/applications in a
          freelancer way applying agile methodologies, clean architecture, SOLID
          principles and pixel perfect in the projects I have done, I have
          developed almost all types of projects from Landing pages, Manageable
          stores with registration and login, Manageable blogs, dashboards, web
          pages with a variety of sections and more from prototyping, design
          using Balsamiq Wireframes, Adobe Photoshop and Figma, also from the
          design to the programming and migration.
        </TimelineEvent.Description>
      </TimelineEvent>

      <TimelineEvent>
        <TimelineEvent.Title>
          <a
            href="https://task19.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:underline transition-all ease"
          >
            Task19 technologies
          </a>
          | aug. 2018 - may. 2019
        </TimelineEvent.Title>

        <TimelineEvent.Description>
          Web designer and responsive web designer and frontend programmer on
          projects using Figma, HTML, CSS, SCSS, SASS, Bootstrap, JavaScript,
          jQuery implementing SCRUM, pixel perfect and clean code.
        </TimelineEvent.Description>
      </TimelineEvent>

      <TimelineEvent last>
        <TimelineEvent.Title>
          Qubit Creations | dec. 2017 - jul. 2018
        </TimelineEvent.Title>

        <TimelineEvent.Description>
          Designed and developed user interfaces (UIs) for web and mobile
          applications using design tools such as Sketch, Adobe XD, or Figma.
          Developed and implemented design systems and style guides that reflect
          the brand identity and messaging, ensuring consistency across all
          products and platforms. Designed visual assets such as icons,
          illustrations, and graphics that align with the brand and enhance the
          user experience. Utilized Adobe Photoshop and Illustrator to retouch
          images, manipulate colour, adjust brightness and contrast, and create
          digital compositions. Stayed up-to-date with the latest trends and
          developments in UI design, graphic design, and visual communication,
          continually improving skills and sharing knowledge with team members.
          instructed jr.designers and provided guidance on best practices,
          design techniques, and career growth opportunities. Worked
          collaboratively with stakeholders and clients to produce visually
          appealing designs and illustrations that meet their needs and
          requirements. Utilized design thinking methodologies and agile
          development methodologies to facilitate collaboration and
          problem-solving among team members.
        </TimelineEvent.Description>
      </TimelineEvent>
    </Timeline>
  );
};

export default CurrentTimeLineExp;
