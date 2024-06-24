
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


function App () {

  let foodItems = ['Daal', 'Green vegetable', 'Roti', 'Salad', 'Milk','Ghee',];


  return (
    <>
      <h1 className="food-heading">HEALTHY FOOD</h1>
      <ul class="list-group">
         {foodItems.map((item) => (
         <li key={item} className="list-group-items sk-item"><span className="sk-span">{item}</span>
         </li>
         ))}
      </ul>
       

  
    </>
  );
}

export default App;
