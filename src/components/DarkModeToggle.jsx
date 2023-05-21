import DayNightToggle from 'react-day-and-night-toggle';
import useDarkMode from "@/utils/useDarkMode";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  const toggle = () => setDarkMode(!darkMode);
  return (
    <DayNightToggle
      checked={darkMode}
      onChange={toggle}
    />
  );
}

export default DarkModeToggle;