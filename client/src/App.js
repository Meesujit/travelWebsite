
import Home from './Home';
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
      <Route path='/show-list' element={<ShowDataList />} />
      <Route path='/show-data/:id' element={<ShowDataDetails />} />
      <Route path='/edit-data/:id' element={<UpdateDataInfo />} />

      

    </Routes> 
    
    </BrowserRouter>
    
  </>
}

export default App