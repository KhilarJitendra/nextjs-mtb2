// import { NextResponse } from 'next/server';

// import { getResults } from '../../../libs/search';

// export const GET = async (req: Request, res: Response) => {
//   try {
//     const results = await getResults();

//     console.log('Data', results);

//     return NextResponse.json({ message: 'OK', results }, { status: 200 });
//   } catch (err) {
//     NextResponse.json(
//       {
//         message: 'Error',
//         err,
//       },
//       { status: 500 }
//     );
//   }
// };

import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ message: 'Hello from Next.js!' });
}
