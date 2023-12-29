import { NextResponse } from 'next/server';

import { getResults } from '../../../libs/search';

export const GET = async (req: Request, res: Response) => {
  try {
    const results = await getResults();

    console.log('Data', results);

    return NextResponse.json({ message: 'OK', results }, { status: 200 });
  } catch (err) {
    NextResponse.json(
      {
        message: 'Error',
        err,
      },
      { status: 500 }
    );
  }
};
