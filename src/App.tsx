import { FC } from 'react';
import DarkMode from 'components/DarkMode';
import './App.css';

const App:FC = (): JSX.Element =>  {
  return (
    <div className="App">
      <header className="App-header">
      <DarkMode />
      </header>
    </div>
  );
}

export default App;
