import {useState} from 'react';
import './App.css';
import State from './State';
import Unrender from './Unrender';
import MetaTags from 'react-meta-tags';

import logo from './images/favicon_ico.ico'



function App() {
  const [value, setValue] = useState();


  const handleChange = (event) => {
    setValue(event.target.value);
  };

 
 


  return (
    <>
    <MetaTags>
            <title>Covid Emergency App</title>
            <meta id="meta-description" name="description" content="All in one Covid Emergency" />
            <meta id="og-title" property="og:title" content="All in one Covid Emergency" />
            <meta id="og-image" property="og:image" content={logo} />
          </MetaTags>

  <div className="container" >

  
    
    
  <div className="row d-flex justify-content-center .no-gutters w-100">
    <h1 className="display-3 text-center  bg-info text-white w-100" > <div className="col-mb-2 col w-33">ALL IN ONE</div> <div className="col-mb-8"> COVID RELIEF</div> <div className="col-mb-2">RESOURCE </div></h1>
  
    </div>
    <br />

    <form className="center text-center " > 
    
    <h3><span className="badge rounded-pill bg-primary">CHOOSE A UT TO BEGIN</span></h3>
       
    <br />

      <select value={value} onChange={handleChange} className="custom-select custom-select-lg mb-3" data-toggle="tooltip" data-placement="top" title="Tooltip on top"> 
    <option value= 'Andaman and Nicobar Islands' > Andaman and Nicobar Islands </option>,
    <option value= 'Andhra Pradesh' > Andhra Pradesh </option>,
    <option value= 'Arunachal Pradesh' > Arunachal Pradesh </option>,
    <option value= 'Assam' > Assam </option>,
    <option value= 'Bihar' > Bihar </option>,
    <option value= 'Chandigarh' > Chandigarh </option>,
    <option value= 'Chhattisgarh' > Chhattisgarh </option>,
    <option value= 'Dadra and Nagar Haveli' > Dadra and Nagar Haveli </option>,
    <option value= 'Daman and Diu' > Daman and Diu </option>,
    <option value= 'Delhi' > Delhi </option>,
    <option value= 'Goa' > Goa </option>,
    <option value= 'Gujarat' > Gujarat </option>,
    <option value= 'Haryana' > Haryana </option>,
    <option value= 'Himachal Pradesh' > Himachal Pradesh </option>,
    <option value= 'Jammu and Kashmir' > Jammu and Kashmir </option>,
    <option value= 'Jharkhand' > Jharkhand </option>,
    <option value= 'Karnataka' > Karnataka </option>,
    <option value= 'Kerala' > Kerala </option>,
    <option value= 'Ladakh' > Ladakh </option>,
    <option value= 'Lakshadweep' > Lakshadweep </option>,
    <option value= 'Madhya Pradesh' > Madhya Pradesh </option>,
    <option value= 'Maharashtra' > Maharashtra </option>,
    <option value= 'Manipur' > Manipur </option>,
    <option value= 'Meghalaya' > Meghalaya </option>,
    <option value= 'Mizoram' > Mizoram </option>,
    <option value= 'Nagaland' > Nagaland </option>,
    <option value= 'Odisha' > Odisha </option>,
    <option value= 'Puducherry' > Puducherry </option>,
    <option value= 'Punjab' > Punjab </option>,
    <option value= 'Rajasthan' > Rajasthan </option>,
    <option value= 'Sikkim' > Sikkim </option>,
    <option value= 'Tamil Nadu' > Tamil Nadu </option>,
    <option value= 'Telangana' > Telangana </option>,
    <option value= 'Tripura' > Tripura </option>,
    <option value= 'Uttar Pradesh' > Uttar Pradesh </option>,
    <option value= 'Uttarakhand' > Uttarakhand </option>,
    <option value= 'West Bengal' > West Bengal </option></select>

   </form>

   <br />
   


      <State name={value} />

      <br />
      <Unrender />
</div>
   </>
  );
}

export default App;
