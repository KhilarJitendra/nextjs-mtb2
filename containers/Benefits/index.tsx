import Style from './Benefits.module.scss';

import { Customer, Payment, Return } from '@/icons/icons';

const BenefitContainer = () => {
  return (
    <div className={Style.benefit_container}>
      <h2 className={Style.benefit_container_title}>
        Benefits for your expediency
      </h2>
      <div className={Style.content_block}>
        <div className={Style.payment}>
          <Payment width={68} height={68} />
          <h3>Payment Method</h3>
          <p>We offer flexible payment options, to make easier.</p>
        </div>
        <div className={Style.return}>
          <Return width={68} height={68} />
          <h3> Return policy </h3>
          <p> You can return a product within 30 days. </p>
        </div>
        <div className={Style.support}>
          <Customer width={68} height={68} />
          <h3>Customer Support</h3>
          <p> Our customer support is 24/7. </p>
        </div>
      </div>
    </div>
  );
};

export default BenefitContainer;
