import "./App.css";
import { puppyList } from "./data.js";
import { useState } from 'react';

function App() {

  const [puppies, setPuppies] = useState(puppyList);
  const [featPupID, setFeatPupID] = useState(null);

  const featuredPup = puppies.find((pup) => pup.id === featPupID);
  console.log(featuredPup);
  
  
  return (
    <>
      <div className="App">
        {
          puppies.map((puppy) => {
            return <p onClick={() => { setFeatPupID(puppy.id);
            }} key={puppy.id}>{puppy.name}</p>
          })
        }
        { featPupID && (
          <div className="Featured-Pup">
            <h2>{featuredPup.name}</h2>
            <ul>
              <li>Age: {featuredPup.age}</li>
              <li>Email: {featuredPup.email}</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
