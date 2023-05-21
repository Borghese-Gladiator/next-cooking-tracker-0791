import { formatDate } from "@/utils/dates";
import styles from "./FoodCard.module.css";

const FoodCard = ({ thumbnail, name, createdAt, updatedAt }) => {
  console.log('updatedAt', updatedAt);
  console.log('thumbnail', thumbnail);
  const createdAtDate = new Date(createdAt);
  const updatedAtDate = new Date(updatedAt);
  return (
    <div className={styles.card}>
      {thumbnail && <img src={thumbnail} alt="thumbnail" />}
      <h2>{name}</h2>
      <div className={styles.dateCaption}>
        <h4>{`${formatDate(createdAtDate)}`}</h4>
        <span>{`Last Updated: ${formatDate(updatedAtDate)}`}</span>
      </div>
    </div>
  );
};

export default FoodCard;