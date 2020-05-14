import React from "react";
import styles from "./DemoComponent.module.scss";

export default function DemoComponent() {
  return (
    <div style={{ padding: "20px" }}>
      <h1 className={styles.header}>Hello CodeSandbox</h1>
      <h2 className={styles.subheader}>
        Start editing to see some magic happen!
      </h2>

      <p className={styles.text}>
        Tail chuck hamburger pig swine t-bone pancetta jowl. Chicken meatball
        leberkas beef ribs. Alcatra ham salami meatloaf venison sausage cow.
        Bacon chicken chuck tail. Porchetta ball tip drumstick, shoulder chuck
        bacon capicola pig ground round chislic pork belly rump hamburger t-bone
        cupim.
      </p>

      <div className={styles.box}>
        <p className={styles.text}>
          Negative texts should have a different styling. They require a bit
          more letter spacing and stuff. Tail chuck hamburger pig swine t-bone
          pancetta jowl. Chicken meatball leberkas beef ribs. Alcatra ham salami
          meatloaf venison sausage cow. Bacon chicken chuck tail. Porchetta ball
          tip drumstick, shoulder chuck bacon capicola pig ground round chislic
          pork belly rump hamburger t-bone cupim.
        </p>
      </div>

      <p className={styles.text}>
        Tail chuck hamburger pig swine t-bone pancetta jowl. Chicken meatball
        leberkas beef ribs. Alcatra ham salami meatloaf venison sausage cow.
        Bacon chicken chuck tail. Porchetta ball tip drumstick, shoulder chuck
        bacon capicola pig ground round chislic pork belly rump hamburger t-bone
        cupim.
      </p>
    </div>
  );
}
