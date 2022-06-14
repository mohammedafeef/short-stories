import randomColor from "randomcolor";
import styles from "../../styles/Home.module.css";

const Story = ({
  title,
  author,
  body,
}: {
  title: string;
  author: string;
  body: string;
}) => {
  //To random bgcolor
  const getRandomColor = () =>
    randomColor({
      luminosity: "light",
      format: "rgba",
      alpha: 0.5,
    });

  return (
    <div
      className={styles.storyWrapper}
      style={{ backgroundColor: `${getRandomColor()}` }}
    >
      <h3 className={styles.title}>{title}</h3>
      <span
        className={styles.author}
        style={{ backgroundColor: `${getRandomColor()}` }}
      >
        {author}
      </span>
      <p className={styles.body}>{body}</p>
    </div>
  );
};
export default Story;
