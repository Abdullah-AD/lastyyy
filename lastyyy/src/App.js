import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './main';
import Info from './info';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/main'><Main /></Route>
        <Route path='/info'><Info /></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
