import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { items, footerLinks } from './data';
import { perspective, slideIn } from './anim';

export default function index() {
  return (
    <div className={styles.nav}>
      <div className={styles.body}>
        {['Hello!', 'Cooltology is', 'We Do', 'We Are', "Let's talk"].map((item, i) => {
          const { title, href } = item;
          return (
            <div key={`link-${item}`} className={styles.linkContainer}>
              <motion.div href={href} custom={i} variants={perspective} initial="initial" animate="enter" exit="exit">
                <a href={`#${item}`}>{item}</a>
              </motion.div>
            </div>
          );
        })}
      </div>
      <div />
      {/* <motion.div className={styles.footer} style={{ color: 'var(--black-color)' }}>
        {footerLinks.map((link, i) => {
          const { title, href } = link;
          return (
            <motion.a variants={slideIn} custom={i} initial="initial" animate="enter" exit="exit" key={`f_${i}`}>
              {title}
            </motion.a>
          );
        })}
      </motion.div> */}
    </div>
  );
}
