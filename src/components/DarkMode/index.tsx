import { FC } from 'react';
import { ReactComponent as Sun } from './Sun.svg';
import { ReactComponent as Moon } from './Moon.svg';
import './index.css';

const DarkMode: FC = (): JSX.Element => {
  const setDarkMode = (): void => {
    document.querySelector('body')?.setAttribute('dark-theme', 'dark');
    localStorage.setItem('selectedTheme', 'dark');
  };

  const setLightMode = (): void => {
    document.querySelector('body')?.setAttribute('dark-theme', 'light');
    localStorage.setItem('selectedTheme', 'light');
  };

  const selectedTheme = localStorage.getItem('selectedTheme');

  if (selectedTheme === 'dark') {
    setDarkMode();
  }

  const toggleTheme = (e: any): void => {
    if (e.target.checked) {
      setDarkMode();
    } else {
      setLightMode();
    }
  };

  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleTheme}
        defaultChecked={selectedTheme === 'dark'}
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <Sun />
        <Moon />
      </label>
    </div>
  );
};

export default DarkMode;
