/* 
    ======================================================
    WARNING: FONT FACE VARIABLES
    DO NOT MODIFY OR ADD FONT FACE VARIABLES BELOW
    ======================================================
*/

import localFont from 'next/font/local';

const mtbRegular = localFont({
  src: [
    {
      path: '../../assets/fonts/MontblancTypeRegular/MontblancType-Regular.otf',
    },
    {
      path: '../../assets/fonts/MontblancTypeRegular/MontblancType-Regular.ttf',
    },
    {
      path: '../../assets/fonts/MontblancTypeRegular/MontblancType-Regular.woff',
    },
  ],
});

const mtbMedium = localFont({
  src: [
    {
      path: '../../assets/fonts/MontblancTypeMedium/MontblancType-Medium.ttf',
    },
    {
      path: '../../assets/fonts/MontblancTypeMedium/MontblancType-Medium.woff',
    },
  ],
});

const mtbSmithScript = localFont({
  src: [
    {
      path: '../../assets/fonts/AurelieSmithScript/Aurelie_Smith_Script_DEMO.ttf',
    },
    {
      path: '../../assets/fonts/AurelieSmithScript/Aurelie_Smith_Script_DEMO.woff',
    },
  ],
});

export { mtbMedium, mtbRegular, mtbSmithScript };
