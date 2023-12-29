import Style from './Newsletter.module.scss';

const NewsLetter = () => {
  return (
    <div className={Style.newsletter_container}>
      <div className={Style.newsletter_container_lefttside}>
        {/* <img
          src="http://localhost:1337/uploads/mtb2_24eeb63dc1.jpg"
          alt=""
          className={Style.newsletter_container_img}
        /> */}
      </div>

      <div className={Style.newsletter_container_rightside}>
        <div className="title">
          <h2>Join our Nresletter</h2>
        </div>
        <div className="paragraph">
          <p>Receive exclusive deals, discounts and many offers.</p>{' '}
        </div>
        <div> Enter Your Email : </div>
        <button> Subscribe </button>
      </div>
    </div>
  );
};

export default NewsLetter;
