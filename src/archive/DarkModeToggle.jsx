import { MdDarkMode, MdLightMode } from 'react-icons/md';

import useDarkMode from "@/utils/useDarkMode";
import styles from "./DarkModeToggle.module.css";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  const toggle = () => setDarkMode(!darkMode);
  console.log('darkMode', darkMode)
  const handleChange = (e) => {
    console.log("BLAH");
    console.log('currentValue', e.currentTarget.checked);
    setDarkMode(e.currentTarget.checked);
  }
  return (
    <>
      <label className={styles.label}>
        <input className={styles.input} type="checkbox" checked={darkMode} onChange={handleChange} />
        <MdLightMode className={styles.sun} />
        <MdDarkMode className={styles.moon} />
      </label>
    </>
  )
}

export default DarkModeToggle;