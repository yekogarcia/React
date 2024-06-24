import '@picocss/pico';
import { Route, Routes } from 'react-router';
import { MyFood } from './components/Routes/MyFood';

import './app.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<MyFood />} />
      </Routes>
    </div>
  )
}

export default App
