export const getStrapiData = async () => {
  const res = await fetch(
    'https://tremendous-blessing-a56a4e060b.strapiapp.com/api/homepages',
    {
      cache: 'force-cache',
    }
  );

  if (!res.ok) {
    throw new Error('Failed To fetch data');
  }

  return res.json();
};
