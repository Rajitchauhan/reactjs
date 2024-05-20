import styles from "./Item.module.css";

const Item = ({ foodItem, handleBuyButton }) => {
  // let {foodItem} = props; destructing .
  // let handleBuyButton = (event) => {
  //   console.log(`Items  buy ${foodItem}`);
  // };
  return (
    <>
      <li className={`${styles["kg-item"]} list-group-item `}>
        <span className={styles["kg-span"]}>{foodItem}</span>
        <button
          className={`${styles.button} btn btn-info`}
          onClick={handleBuyButton}
        >
          Buy
        </button>
      </li>
    </>
  );
};

export default Item;
