import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data;
}

function App() {
  // code here
  let i_data = imageData();

  return (
    <div className='body'>
      {i_data.map((obj)=>{
        return (
          <img src={obj.img}/>
        )
      })}
    </div>
  )
  
}



export default App;
