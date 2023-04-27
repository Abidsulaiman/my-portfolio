'use client';

import { useState } from 'react';
import CardProject from './CardProject';
import AnimationContainer from '../utils/AnimationContainer';
import { CardProjectProps } from '@/types';

const allProjectsInfo = [
  {
    id: '1',
    title: 'Marvel Characters API',
    des: 'Project built using the marvel api, you can search the marvel characters you want. and click a character to see more details.',
    category: 'javascript - next',
    repo: 'https://github.com/Abidsulaiman/marvel-app',
    link: 'https://marvel-app-iota.vercel.app/'
  },
  {
    id: '2',
    title: 'Growth Nodes | Social media CRM',
    des: 'A social media CRM platform which automates the process and functions.',
    category: 'javascript - react',
    repo: 'https://github.com/Abidsulaiman/growthnodes',
    link: 'https://growthnodes.com/'
  },
  {
    id: '3',
    title: 'Netflix Clone App',
    des: 'Project built using IMDB rating api, react and tailwind CSS',
    category: 'javascript - react',
    repo: 'https://github.com/Abidsulaiman/netflix-clone',
    link: 'https://netflix-clone-a8f39.web.app/'
  },
  {
    id: '4',
    title: 'Tab Alerts Web App',
    des: 'Project built using javascript, React, Material UI',
    category: 'javascript - react',
    repo: 'https://github.com/Abidsulaiman/tabalerts-extension',
    link: 'https://tabalertsreact.web.app/'
  },
];

const SearchAllProjects = () => {
  const [projectSearch, setProjectSearch] = useState<string>('');

  const resultSearch: CardProjectProps[] = allProjectsInfo.filter((project) =>
    project.category.includes(projectSearch.toLowerCase())
  );

  return (
    <>
      <AnimationContainer customClassName="w-full group flex flex-col justify-center items-center mb-8">
        <div className="w-full flex items-center lg:w-3/6 h-12 rounded shadow-lg bg-black border border-gray-800 group-hover:border-gray-500 transition-all ease">
          <div className="grid place-items-center h-full w-12 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <input
            className="peer h-full w-full outline-none rounded text-sm bg-black px-2 group-hover:border-gray-500 transition-all ease"
            type="text"
            id="search"
            placeholder="Languages, frameworks, libraries, etc..."
            onChange={(e) => setProjectSearch(e.target.value)}
          />
        </div>
      </AnimationContainer>

      <article className="w-full flex justify-center items-center content-center flex-wrap gap-6 mx-auto">
        {resultSearch.map(({ id, title, des, category, repo, link }) => (
          <CardProject
            key={id}
            title={title}
            des={des}
            category={category}
            repo={repo}
            link={link}
          />
        ))}
      </article>
    </>
  );
};

export default SearchAllProjects;
