import logo from './logo.svg';
import './App.css';
import BodyComponent from './component/BodyComponent';
import FooterComponent from './component/FooterComponent';
import HitungComponent from './component/HitungComponent';

function App() {

  let name = "ramma"

  const age = () => {
    return 32
  }

  const pekerjaan = () => {
    return (<h1> Software Engineer</h1>)
  }

  
  const dataX = () => {
    let x = []
    for (let i = 0; i< 100000; i++){
      x.push(i)
    }
    return x  
  }

  return (
    <div className="App">
      <BodyComponent nama={name} age={age}/>
      <FooterComponent pekerjaan={pekerjaan}/>
      <HitungComponent hitung={dataX}/>
    </div>
  );
}

export default App;
