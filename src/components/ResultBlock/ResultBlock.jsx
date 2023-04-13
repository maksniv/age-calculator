import styles from './ResultBlock.module.scss';

const ResultBlock = ({ description, answer = "- -"}) => {
  return (
    <div className={styles.resultBlock__wrapper}>
      <div className={styles.resultBlock__numbers}>{answer}</div>
      <div className={styles.resultBlock__text}>{description}</div>
    </div>
  );
};

export default ResultBlock;
