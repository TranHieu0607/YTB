import React, {  useState } from 'react'
import Header from './components/Header'
import SideBar from './components/Sidebar'
import { Container } from 'react-bootstrap'
import HomeScreen from './screen/HomeScreen'
import { Route, Routes} from 'react-router-dom'

import SearchScreen from './screen/SearchScreen'

const Layout = ({children})=> {
  const [sidebar, toggleSidebar] = useState(false);

  const handleToggleSidebar =() => toggleSidebar(!sidebar)
  return (
    <>
         <Header handleToggleSidebar={handleToggleSidebar}/>
         <div className=' flex'>
           <SideBar  sidebar={sidebar} handleToggleSidebar={handleToggleSidebar}/>
           <Container sidebar={sidebar} fluid className={`no-scrollbar overflow-y-scroll transform ${ sidebar ? "ml-[250px]" : ""}`}>
             {/* <HomeScreen/> */}
             {children}
           </Container>
         </div>
    </>
  )
}
const App = () => {
  
  
  const [sidebar, toggleSidebar] = useState(false);

  const handleToggleSidebar =() => toggleSidebar(!sidebar)
  return (
   
            <Routes>
              <Route path='/search/:query' exact element={                
                <Layout><SearchScreen/></Layout>}/>

                <Route path="/" exact element={
                  <Layout><HomeScreen/></Layout>
                }/>
              
            </Routes>
  )
}

export default App