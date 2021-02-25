import React from 'react'
import './App.css';
// import axios from 'axios';
import CustomButton from './UI/Components/Button/CustomButton';
import Form from './UI/Form/Form';
import ncdcLogo from './UI/Images/ncdc-logo.jpg'
import Navigation from './UI/Navigation/Navigation';
import { useSelector } from 'react-redux';



function App() {

  // Fetch Data from Api
  // const API_URL = 'https://covidnigeria.herokuapp.com/api'
  // const dispatch = useDispatch()
  
    // const loadCases = async () => {   
    //   try {
    //       const caseData = await axios.get(API_URL)
    //       const {data } = caseData 
          
    //       dispatch(fetchCases(data))
    //   }
    //   catch(error) {
    //       console.error(error);
    //   }
  
    // }

  const cases = useSelector(state => state.fetchCasesData.cases)
  console.log(cases.data)

  const handleSubmit =() => {
    alert(`Oh! I understand that you were trying to search the cases by state. 
          Sorry for the inconvenience, that section is not integrated. 
          Kindly use the link button below to view the cases by States`)
  }
  
  return (
    <div className="App">
      <header className='header'>
        <img src={ncdcLogo} alt="ncdc logo"/>
        <h2>Covid-19 Cases Update</h2>
      </header>

      <main> 
        <section className='form-and-btnSection'>
          <div className="app-form">
            <Form />
          </div>
          <div className="app-btn">
            <CustomButton onClick={handleSubmit}>search</CustomButton>
          </div>
        </section>
        <section className="results">
          <React.Suspense fallback={<div>Loading...</div>}>
            <Navigation />
          </React.Suspense>
        </section>
        
      </main>
    </div>
  );
}

export default App;
