import React from 'react';
import Navbar from './Components/Navbar';


function App() {
  return (
    <Route>
       <div className="flex justify-center items-center h-screen bg-green-500">
        <div>
          <Navbar/>
        </div>
    </div>
    </Route>
   
  );
}

export default App;
