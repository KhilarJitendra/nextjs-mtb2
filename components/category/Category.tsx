import Style from './Category.module.scss';

const Category = () => {
  return (
    <div className={Style.category_conatiner}>
      <h2 className={Style.category_conatiner_title}></h2>
      <div className={Style.category_card_container}>
        <div className={Style.card}>
          <img
            src="http://localhost:1337/uploads/luxurypen_b3285a8045.webp"
            alt=""
            className={Style.card_img}
          />
          <p> Pen </p>
        </div>
        <div className={Style.card}>
          <img
            src="http://localhost:1337/uploads/luxurypen_b3285a8045.webp"
            alt=""
            className={Style.card_img}
          />
          <p> Pen </p>
        </div>
        <div className={Style.card}>
          <img
            src="http://localhost:1337/uploads/luxurypen_b3285a8045.webp"
            alt=""
            className={Style.card_img}
          />
          <p> Pen </p>
        </div>
        <div className={Style.card}>
          <img
            src="http://localhost:1337/uploads/luxurypen_b3285a8045.webp"
            alt=""
            className={Style.card_img}
          />
          <p> Pen </p>
        </div>
        <div className={Style.card}>
          <img
            src="http://localhost:1337/uploads/luxurypen_b3285a8045.webp"
            alt=""
            className={Style.card_img}
          />
          <p> Pen </p>
        </div>
        <div className={Style.card}>
          <img
            src="http://localhost:1337/uploads/luxurypen_b3285a8045.webp"
            alt=""
            className={Style.card_img}
          />
          <p> Pen </p>
        </div>
      </div>
    </div>
  );
};

export default Category;
