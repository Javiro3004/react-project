import {useFetch} from "../Hooks"

const url = "https://Api.example,com/data"

interface Data {
  Name: string;
  LastName: string; // interface para sustituir el tipo generico <T> en el useFetch
  Age : number;
}


function App() {  
  const {data, loading, errors} = useFetch<Data>(url) //cuando se trabaja con genericos se debe especificar el tipo de dato que se va a usar entre <> en este caso <Data> que es la interface que se creo arriba
  

if (loading) {
    return <div>Loading...</div>;
}

if (errors) {
    return <div>Error fetching data: {errors.message};
    </div>;
}

return (
  <div>
    <h1>all good</h1>
    <div>{JSON.stringify(data)}</div>
  </div>
);}

  

export default App 
