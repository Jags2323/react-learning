import React, { Component } from 'react';
import Axios from 'axios';
import TopNav from './components/TopNav';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {vehicleData: null};
  }
  componentDidMount() {
    Axios.get("http://localhost:3001/vehicles")
      .then(res => {
        console.log(res.data);
        this.setState=({vehicleData: res.data});
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    if(this.state.vehicleData){
      return (
        <div className="App">
          <TopNav/>
        </div>
        ); 
      } else{
        return <h4>Loading ....</h4>
      } 
  } 
}

export default App;


// import React, { useEffect } from 'react';
// import Axios from 'axios';

// function App() {
    // const [vehicleData, setVehicleData] = useState(null);
//   useEffect(() => {
//     Axios.get("http://localhost:3001/vehicles")
//       .then(res => {
//         console.log(res.data);
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }, []);

//   return (
//     <div className="App">
//       {/* Your component JSX */}
//     </div>
//    );
//   }
  
//   export default App;
