import styles from "../styles/footer.module.css"
import bottom_water from "../bottom_water 4.svg"
import logo from "../logo.svg"
const Footer = () => {
  return (
    <div className={styles.footerWrapper2}>
      <div className={styles.footerContainer2}>
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
            Follow us on Instagram!
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
      <img className="bottom2 middle" src={bottom_water} alt="Bottom" />
    </div>
  );
};


export default Footer;