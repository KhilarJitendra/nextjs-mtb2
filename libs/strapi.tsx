'use client';

export const getStrapiData = async () => {
  const res = await fetch('http://localhost:1337/api/homepages?populate=*', {
    cache: 'force-cache',
  });

  if (!res.ok) {
    throw new Error('Failed To fetch data');
  }

  return res.json();
};
