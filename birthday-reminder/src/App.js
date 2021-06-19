
import React, {useState} from 'react';
import Data from './Data'
import List  from './List';
function App() {

    const [people, setpeople]= useState(Data)


  return (
    <main>
        <section className="container">
      <h3>Today is {people.length} Birthdays </h3>
     
           <List people={people}/>

           <button className="btn btn-large red" onClick={()=>setpeople([])}> Reset </button>          
        </section>
    </main> 
  );
}




export default App;
