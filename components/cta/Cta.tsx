import { Open_Sans } from 'next/font/google';
import Style from './Cta.module.scss';
import CTAProps from './Cta.types';

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

const CTA = ({ text, onClick, color }: CTAProps) => {
  return (
    <button
      className={`${Style.button} ${
        color == 'primary' ? Style.primary_btn : Style.econdary_btn
      } ${openSans.className} `}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default CTA;
