import './App.css';
import {useState} from "react";
import Product from './Product';


function App() {
  const [search,setSearch] = useState("")
  const [data,setData] = useState([])
  const YOUR_APP_ID = "39639780"
  const YOUR_APP_KEY = "2dfe3c6aa45d8c0862420d225c436dee"

  const submitHandler = (e) =>{
    e.preventDefault();
   fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=21&calories=591-722&health=alcohol-free`)
   .then((response) => response.json())
   .then((data) => setData(data.hits));
  }
  return (
    <div className="App">
     <h1>Food Recipe Search</h1>
     <form onSubmit={submitHandler}>
<input type="text" placeholder="Name" value={search} onChange={(e)=> setSearch
(e.target.value)}/>
<input type="submit" value="search" className='btn btn-primary'/>
</form>
<h3>You are searching : {search}</h3>
     
     <br />
    {data.length >=1 ? <Product data={data}/>: null}
    </div>
    
  );
}

export default App;
