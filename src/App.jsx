import std from "./api/students.json"


function App() {
 const age = 17

  return (
    <>
    <ul>
      {std.map((data)=>{
return(
      <li key={data.id}>
      <div>
        <h1>Name :{data.name} </h1>
        <p>Roll Num :{data.rollnum}</p>
        <p>age : {data.age}</p>
        <img src={data.image}/>
        <button> </button>
      </div>
      </li>
      
)
      })}
    </ul>
    </>
  )
}

export default App
