
import Home from './Home';
// import InfoCard from './components/DataCard';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CreateData from './components/CreateData';
import ShowDataDetails from './components/ShowDataDetails';
import ShowDataList from './components/ShowDataList';
import UpdateDataInfo from './components/UpdateDataInfo';


const App = () => {

  return <>
    
    
    <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/create-user' element={<CreateData />} />
      {/* <Route path='/show-info/:id' element={<InfoCard />} /> */}
      <Route path='/show-data/:id' element={<ShowDataDetails />} />
      <Route path='/show-list/:id' element={<ShowDataList />} />
      <Route path='/edit-data/:id' element={<UpdateDataInfo />} />

      

    </Routes> 
    
    </BrowserRouter>
    
  </>
}

export default App