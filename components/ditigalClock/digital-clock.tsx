import styles from "./dicital-clock.module.scss";

const DigitalClock = ({ time }) => {
  const [hour, min, sec] = time.split(" ")[1].split(":");
  const session: string = hour > 12 ? "PM" : "AM";

  return (
    <div className={styles.clock}>
      {hour === 0
        ? 0 + ":" + min + ":" + sec + " " + session
        : hour > 12 + ":" + min + ":" + sec + " " + session
        ? hour - 12 + ":" + min + ":" + sec + " " + session
        : hour + ":" + min + ":" + sec + " " + session}
    </div>
  );
};

export default DigitalClock;
