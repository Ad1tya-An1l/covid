import React, {useState} from 'react';
import "./State.css"


function State({name}) {
    const target = name;



    const map_list = [
      '<div class="mapouter"><div class="gmap_canvas"><iframe width="400" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=andaman%20and%20nicobar%20island&t=&z=7&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://fmovies2.org">fmovies</a><br><style>.mapouter{position:relative;text-align:right;height:400px;width:400px;}</style><a href="https://www.embedgooglemap.net">how to embed a map in wordpress</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:400px;width:400px;}</style></div></div></div>',
      '<div className="mapouter"><div className="gmap_canvas"><iframe width={400} height={400} id="gmap_canvas" src="https://maps.google.com/maps?q=andhra%20pradesh&t=&z=5&ie=UTF8&iwloc=&output=embed" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} /><a href="https://fmovies2.org">fmovies</a><br /><style dangerouslySetInnerHTML={{__html: ".mapouter{position:relative;text-align:right;height:400px;width:400px;}" }} /><a href="https://www.embedgooglemap.net">how to embed a map in wordpress</a><style dangerouslySetInnerHTML={{__html: ".gmap_canvas {overflow:hidden;background:none!important;height:400px;width:400px;}" }} /></div></div>',

    ]

    const state_list = [
        {
          key: "AN",
          name: "Andaman and Nicobar Islands",
          helpline_number: "03192232102",
          Major_pvt_Hospitals: "",
          Major_gov_Hospital: "",
          Oxygen_Centers: "",
          Website: "https://www.andaman.gov.in/"
        },
        {
          key: "AP",
          name: "Andhra Pradesh",
          helpline_number: "08662410978",
          Major_pvt_Hospitals: "",
          Major_gov_Hospital: "",
          Oxygen_Centers: "",
          Website: "http://www.ap.gov.in"
        },
        {
          key: "AR",
          name: "Arunachal Pradesh",
          helpline_number: "9436055743",
          Major_pvt_Hospitals: "",
          Major_gov_Hospital: "",
          Oxygen_Centers: "",
          Website: "http://arunachalpradesh.gov.in/"
        },
        {
          key: "AS",
          name: "Assam",
          helpline_number: "6913347770",
          Major_pvt_Hospitals: "",
          Major_gov_Hospital: "",
          Oxygen_Centers: "",
          Website: "http://assam.gov.in/"
        },
        {
          key: "BR",
          name: "Bihar",
          helpline_number: "104",
          Major_pvt_Hospitals: "",
          Major_gov_Hospital: "",
          Oxygen_Centers: "",
          Website: "https://state.bihar.gov.in/"
        },
        {
          key: "CG",
          name: "Chandigarh",
          helpline_number: "9779558282",
          Major_pvt_Hospitals: "",
          Major_gov_Hospital: "",
          Oxygen_Centers: "",
          Website: "http://chandigarh.gov.in/"
        },
        {
          key: "CH",
          name: "Chhattisgarh",
          helpline_number: "104",
          Major_pvt_Hospitals: "",
          Major_gov_Hospital: "",
          Oxygen_Centers: "",
          Website: "http://cgstate.gov.in/"
        },
        {
          key: "DH",
          name: "Dadra and Nagar Haveli",
          helpline_number: "104",
          Major_pvt_Hospitals: "",
          Major_gov_Hospital: "",
          Oxygen_Centers: "",
          Website: "https://dnh.gov.in/"
        },
        {
          key: "DD",
          name: "Daman and Diu",
          helpline_number: "104",
          Major_pvt_Hospitals: "",
          Major_gov_Hospital: "",
          Oxygen_Centers: "",
          Website: "http://daman.nic.in/"
        },
        {
          key: "DL",
          name: "Delhi",
          helpline_number: "01122307145",
          Major_pvt_Hospitals: "",
          Major_gov_Hospital: "",
          Oxygen_Centers: "",
          Website: "http://delhi.gov.in/"
        },
        {
          key: "GA",
          name: "Goa",
          helpline_number: "104",
          Major_pvt_Hospitals: "",
          Major_gov_Hospital: "",
          Oxygen_Centers: "",
          Website: "http://goa.gov.in/"
        },
        {
          key: "GJ",
          name: "Gujarat",
          helpline_number: "104",
          Major_pvt_Hospitals: "",
          Major_gov_Hospital: "",
          Oxygen_Centers: "",
          Website: "https://gujaratindia.gov.in/"
        },
        {
          key: "HR",
          name: "Haryana",
          helpline_number: "8558893911",
          Major_pvt_Hospitals: "",
          Major_gov_Hospital: "",
          Oxygen_Centers: "",
          Website: "http://haryana.gov.in/"
        },
        {
          key: "HP",
          name: "Himachal Pradesh",
          helpline_number: "104",
          Major_pvt_Hospitals: "",
          Major_gov_Hospital: "",
          Oxygen_Centers: "",
          Website: "http://himachal.nic.in/"
        },
        {
          key: "JK",
          name: "Jammu and Kashmir",
          helpline_number: "01912520982",
          Major_pvt_Hospitals: "",
          Major_gov_Hospital: "",
          Oxygen_Centers: "",
          Website: "http://jk.gov.in/"
        },
        {
          key: "JH",
          name: "Jharkhand",
          helpline_number: "104",
          Major_pvt_Hospitals: "",
          Major_gov_Hospital: "",
          Oxygen_Centers: "",
          Website: "http://jharkhand.gov.in/"
        },
        {
          key: "KA",
          name: "Karnataka",
          helpline_number: "104",
          Major_pvt_Hospitals: "",
          Major_gov_Hospital: "",
          Oxygen_Centers: "",
          Website: "http://karnatka.gov.in/"
        },
        {
          key: "KL",
          name: "Kerala",
          helpline_number: "04712552056",
          Major_pvt_Hospitals: "",
          Major_gov_Hospital: "",
          Oxygen_Centers: "",
          Website: "http://kerala.gov.in/"
        },
        {
          key: "LA",
          name: "Ladakh",
          helpline_number: "01982256462",
          Major_pvt_Hospitals: "",
          Major_gov_Hospital: "",
          Oxygen_Centers: "",
          Website: "https://ladakh.nic.in/"
        },
    
        {
          key: "LD",
          name: "Lakshadweep",
          helpline_number: "104",
          Major_pvt_Hospitals: "",
          Major_gov_Hospital: "",
          Oxygen_Centers: "",
          Website: "http://lakshadweep.gov.in/"
        },
        {
          key: "MP",
          name: "Madhya Pradesh",
          helpline_number: "104",
          Major_pvt_Hospitals: "",
          Major_gov_Hospital: "",
          Oxygen_Centers: "",
          Website: "http://mp.gov.in/"
        },
        {
          key: "MH",
          name: "Maharashtra",
          helpline_number: "02026127394",
          Major_pvt_Hospitals: "",
          Major_gov_Hospital: "",
          Oxygen_Centers: "",
          Website: "http://maharashtra.gov.in/"
        },
        {
          key: "MN",
          name: "Manipur",
          helpline_number: "3852411668",
          Major_pvt_Hospitals: "",
          Major_gov_Hospital: "",
          Oxygen_Centers: "",
          Website: "http://manipur.gov.in/"
        },
        {
          key: "ML",
          name: "Meghalaya",
          helpline_number: "108",
          Major_pvt_Hospitals: "",
          Major_gov_Hospital: "",
          Oxygen_Centers: "",
          Website: "http://meghalaya.gov.in/"
        },
        {
          key: "MZ",
          name: "Mizoram",
          helpline_number: "102",
          Major_pvt_Hospitals: "",
          Major_gov_Hospital: "",
          Oxygen_Centers: "",
          Website: "https://mizoram.gov.in/"
        },
        {
          key: "NL",
          name: "Nagaland",
          helpline_number: "7005539653",
          Major_pvt_Hospitals: "",
          Major_gov_Hospital: "",
          Oxygen_Centers: "",
          Website: "http://nagaland.gov.in/"
        },
        {
          key: "OR",
          name: "Odisha",
          helpline_number: "9439994859",
          Major_pvt_Hospitals: "",
          Major_gov_Hospital: "",
          Oxygen_Centers: "",
          Website: "http://odisha.gov.in/"
        },
        {
          key: "PY",
          name: "Puducherry",
          helpline_number: "104",
          Major_pvt_Hospitals: "",
          Major_gov_Hospital: "",
          Oxygen_Centers: "",
          Website: "https://www.py.gov.in/"
        },
        {
          key: "PB",
          name: "Punjab",
          helpline_number: "104",
          Major_pvt_Hospitals: "",
          Major_gov_Hospital: "",
          Oxygen_Centers: "",
          Website: "http://punjab.gov.in/"
        },
        {
          key: "RJ",
          name: "Rajasthan",
          helpline_number: "01412225624",
          Major_pvt_Hospitals: "",
          Major_gov_Hospital: "",
          Oxygen_Centers: "",
          Website: "http://rajasthan.gov.in/"
        },
        {
          key: "SK",
          name: "Sikkim",
          helpline_number: "104",
          Major_pvt_Hospitals: "",
          Major_gov_Hospital: "",
          Oxygen_Centers: "",
          Website: "http://sikkim.gov.in/"
        },
        {
          key: "TN",
          name: "Tamil Nadu",
          helpline_number: "04429510500",
          Major_pvt_Hospitals: "",
          Major_gov_Hospital: "",
          Oxygen_Centers: "",
          Website: "http://tn.gov.in/"
        },
        {
          key: "TS",
          name: "Telangana",
          helpline_number: "104",
          Major_pvt_Hospitals: "",
          Major_gov_Hospital: "",
          Oxygen_Centers: "",
          Website: "http://telangana.gov.in/"
        },
        {
          key: "TR",
          name: "Tripura",
          helpline_number: "03812315879",
          Major_pvt_Hospitals: "",
          Major_gov_Hospital: "",
          Oxygen_Centers: "",
          Website: "http://tripura.gov.in/"
        },
        {
          key: "UK",
          name: "Uttar Pradesh",
          helpline_number: "104",
          Major_pvt_Hospitals: "",
          Major_gov_Hospital: "",
          Oxygen_Centers: "",
          Website: "http://up.gov.in/"
        },
        {
          key: "UP",
          name: "Uttarakhand",
          helpline_number: "18001805145",
          Major_pvt_Hospitals: "",
          Major_gov_Hospital: "",
          Oxygen_Centers: "",
          Website: "http://uk.gov.in/"
        },
        {
          key: "WB",
          name: "West Bengal",
          helpline_number: "1800313444222",
          Major_pvt_Hospitals: "",
          Major_gov_Hospital: "",
          Oxygen_Centers: "",
          Website: "https://wb.gov.in/"
        }
      ];


      var mapper = []
      var y = 0;

      state_list.map((select, index) => {
          mapper.push(select.name)
        })
      

      for(var key in mapper){
        if(mapper[key] == target){
         y = key
          
        }else{
        }
        //console.log(mapper[key])
       
      };

      // var theader = [
      //   "State",
      //   "Helpline",
      //   "Major Private Hospital",
      //   "Major Government Hospital",
      //   "Oxygen Center",
      //   "Website"

      // ]


      
    

    return (
       <>
       <div className="container-fluid">
         <div className="text-center">
        <table align="center" className="table table-bordered" >
       
          <tbody>
         
          <tr>
            <th >State:</th>
            <td>{state_list[y].name}</td>
          </tr>
          <tr>
            <th >Helpline:</th>
            <td><a className="phone" href="tel:{state_list[y].helpline_number}">{state_list[y].helpline_number}</a></td>
          </tr>
          {/* <tr>
            <th >Major Private Hospitals:</th>
            <td>{state_list[y].Major_pvt_Hospitals}</td>
          </tr>
          <tr>
            <th >Major Government Hospital:</th>
            <td>{state_list[y].Major_gov_Hospital}</td>
          </tr>
          <tr>
            <th >Oxygen centers:</th>
            <td>{state_list[y].Oxygen_Centers}</td>
          </tr> */}
          <tr>
            <th >Websites:</th>
            <td> <a href={state_list[y].Website} target="_blank" >{state_list[y].Website}</a> </td>
          </tr> 
          </tbody>    
          
        </table>

       <div >

       </div>
     

        </div>
        </div>
       </> 
      );
     
};

export default State;
