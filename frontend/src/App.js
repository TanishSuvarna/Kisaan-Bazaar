import io from "socket.io-client";
import {useEffect , useState} from 'react'

function App() {
  // const [socket, setSocket] = useState(null);
  // const [num , setNum] = useState(0);
  // const [visual , setVisual] = useState(0);
  // useEffect(() => {
  //   setSocket(io("http://localhost:5000"));
  // }, []);
 
  // if(socket){
  //   socket.on("connect" , () => {
  //     socket.emit("testing" , `Hey i Am ${socket.id}`)
  //     socket.on("updatedNumVal" , (data) =>{
  //       console.log(data);
  //       setVisual(data)
  //     });
  //   })
  // }

  // const handleChange = (e) =>{
  //   setNum(e.target.value);
  //   socket.emit("updatedNumVal" , e.target.value);
  // }
  return (
    <div className="App">
      hello
      {/* <input type = "number" placeholder = "Update Num" value = {num} onChange = {handleChange}/>
      <h1>{visual}</h1> */}
    </div>
  );
}

export default App;
