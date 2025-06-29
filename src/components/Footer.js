import { InstagramFilled } from "@ant-design/icons";
import bottom from "../bottom.svg";
import logo from "../logo.svg";
import styles from "../styles/footer.module.css"
const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.footerContainer}>
        <img src={logo} alt="logo" className={styles.footerImg} />
        <label className={styles.footerLabel}>
          Copyright © 2025 What The Hack. All rights reserved.
        </label>
        <div className={styles.linkWrapper}>
          <a
            href="https://www.instagram.com/sutdwth/"
            target="_blank"
            className={styles.footerLink}
          >
            <InstagramFilled /> Follow us on Instagram!
          </a>
          <a
            href="https://www.sutd.edu.sg/"
            target="_blank"
            className={styles.footerLink}
          >
            SUTD
          </a>
          <a
            href="https://bit.ly/wth24-tc"
            target="_blank"
            className={styles.footerLink}
          >
            Terms & Conditions
          </a>
        </div>
      </div>
      <img className="bottom middle" src={bottom} alt="Bottom" />
    </div>
  );
};


export default Footer;
