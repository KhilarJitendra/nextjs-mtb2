// 'use client';

import Style from './Newsletter.module.scss';

import CTA from '@/components/cta/Cta';

import Image from 'next/image';

// import Input from '@/components/input/Input';

const Newsletter = () => {
  const handleChange = () => {
    // Handle input change
  };

  const handleFocus = () => {
    // Handle input focus
  };

  const handleBlur = () => {
    // Handle input blur
  };

  return (
    <div className={Style.newsletter_container}>
      <div className={Style.newsletter_container_leftside}>
        <Image
          src="http://localhost:1337/uploads/mtb2_24eeb63dc1.jpg"
          alt="test"
          fill={true}
          style={{
            objectFit: 'cover',
          }}
          quality={100}
          sizes="100vw"
        />
      </div>

      <div className={Style.newsletter_container_rightside}>
        <div className="description_container">
          <h2 className="title">Join our Nresletter</h2>
          <p className="paragraph">
            Receive exclusive deals, discounts and many offers.
          </p>
          {/* <Input
            type="text"
            id="emailInput"
            name="email"
            placeholder="Enter your email"
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            required={true}
            label="Enter your email"
          /> */}
          <CTA color="primary" text="Subscribe" />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
