import { LocalizationProvider } from '@mui/lab';
import DateAdapter from '@mui/lab/AdapterMoment';
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import Detail from './components/activities/Detail.jsx';
import Feed from './components/activities/Feed.jsx';
import Header from './Header.jsx';


const App = () => {
  return (
    <div className='container'>
      <Header />
      <div className="container-view">
        <LocalizationProvider dateAdapter={DateAdapter}>
          <BrowserRouter>
            <Routes>
              <Route path="*" element={<Feed />} />
              <Route path="/" element={<Feed />} />
              <Route path="/:id" element={<Detail />} />
            </Routes>
          </BrowserRouter>
        </LocalizationProvider>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));

export default App;