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

const mtbBold = localFont({
  src: [
    {
      path: '../../assets/fonts/MontblancTypeBold/MontblancType-Bold.ttf',
    },
    {
      path: '../../assets/fonts/MontblancTypeBold/MontblancType-Bold.woff',
    },
  ],
});

const mtbItalic = localFont({
  src: [
    {
      path: '../../assets/fonts/MontblancTypeItalic/MontblancType-Italic.ttf',
    },
    {
      path: '../../assets/fonts/MontblancTypeItalic/MontblancType-Italic.woff',
    },
  ],
});

const mtbLight = localFont({
  src: [
    {
      path: '../../assets/fonts/MontblancTypeLight/MontblancType-Light.ttf',
    },
    {
      path: '../../assets/fonts/MontblancTypeLight/MontblancType-Light.woff',
    },
  ],
});

export { mtbBold, mtbItalic, mtbLight, mtbMedium, mtbRegular, mtbSmithScript };
