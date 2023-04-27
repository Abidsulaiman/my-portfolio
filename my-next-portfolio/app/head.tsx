'use client';

import { usePathname } from 'next/navigation';

const Head = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const pathname = usePathname() as string;

  const titleFixedToShow =
    pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2);

  const meta = {
    title: `Abid Sulaiman ${pathname === '/' ? '' : '· ' + titleFixedToShow}`,
    description: `Hi! My name is Abid Sulaiman I'm from India and I have 5+ years of work experience designing, developing, and implementing web applications using React JS, Node JS, AWS, Hasura, Tailwind CSS, etc, I'm a Full Stack Developer - Crafting Seamless User Experiences who learn new technologies since the age of 20. I love to teach, story telling and to become a public speaker.`,
    keywords:
      'Abid sulaiman, Abid, Abid sulaiman portfolio, Abid portfolio, Sulaiman portfolio, Programmer web, Design web, Pagination web, Applications web, Programmer frontend, HTML, CSS, Javascript, Typescript, React, graphQl, URQL',
    image: '../public/banner-portfolio.jpg',
    type: 'website'
  };

  return (
    <>
      <title>{meta.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="follow, index" />
      <meta content={meta.description} name="description" />
      <meta name="keywords" content={meta.keywords} />
      <meta
        property="og:url"
        content={`https://abzdev.vercel.app${pathname}`}
      />
      <link rel="canonical" href={`https://abzdev.vercel.app${pathname}`} />
      <link rel="me" href="mailto:abidtalison@gmail.com" />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content="Abid Sulaiman" />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={meta.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@abzdev" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
    </>
  );
};

export default Head;
