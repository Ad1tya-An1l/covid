import React from 'react'
import Cards from './Components/Cards';


// images 
import pmcare from './images/pm_cares.png';
import oxfam from "./images/oxfam.png";
import who from "./images/who.png";
import give from "./images/give.png";
import ircs from "./images/ircs.png";
import sos from "./images/sos.png";


function Unrender() {

    const donate_info = [
        {
          name: "PM Cares Fund",
          link: "https://www.pmcares.gov.in/en/",
          bodyText: "The Prime Minister's Citizen Assistance and Relief in Emergency Situations Fund (PM CARES Fund) is the official covid relief donation portal, by the govt. of India",
          buttonText: "Donate Now",
        },
        {
          name: "OXFAM",
          link: "https://www.oxfamindia.org/coronavirus",
          bodyText: " Oxfam India is supporting government hospitals with medical equipment, helping communities recover from COVID-19 impact. An Oxfam and NDTV initiative.",
          buttonText: "Donate Now"
        },
        {
          name: "Give India",
          link: "https://covid.giveindia.org/",
          bodyText: "GiveIndia is India's largest and most trustworthy online donation platform run by a NGO. It aims to channel and provide resources to credible non-governmental organisations across India. The donation would help fulfils the various needs of covid victims",
          buttonText: "Donate Now"
        },
        {
          name: "WHO Covid Response Fund",
          link: "https://www.who.int/emergencies/diseases/novel-coronavirus-2019/donate",
          bodyText: "The World Health Organization (WHO) is leading and coordinating the global effort, supporting countries to prevent, detect, and respond to the pandemic. Your donation would help WHO to respond efficiently",
          buttonText: "Donate Now"
        },
        {
          name: "Indian Red Cross Society Covid Response Fund",
          link: "https://www.indianredcross.org/ircs/COVID19Donate",
          bodyText: "The Indian Red Cross Society is a voluntary humanitarian organization to protect human life and health based in India. Through the donations, it aims to provide financial aid for Covid Relief",
          buttonText: "Donate Now"
        },
        {
          name: "Global Living Donations",
          link: "https://www.soschildrensvillages.in/donate-for-covid-19-relief-work/",
          bodyText: "SOS Children's Villages is an independent, non-governmental. The organization provides humanitarian and developmental assistance to children. Donate for their covid relief project ",
          buttonText: "Donate Now"
        },
      ]

    return (
        <div>
            <h3>
      <div className="alert alert-danger fade show text-center" role="alert">
      Note: Bookmark and download this site to quickly access this page when needed... <br />Share this to someone who needs it
</div></h3>

<br />





<section className="sec1">

    <br />

    <h1 className="display-4 text-light center text-center">Helpline Number [click to activate]</h1> <br />
    <br />

<div className="row ema">
    <div className="col-sm-12 col-md-12 col-lg-4 center text-center ">
    <a href = "mailto: https://ncov2019@gov.in"><button type="button" className="btn btn-info btn-lg" >Official Email: ncov2019@gov.in</button></a> 
    </div>
    <div className="col-sm-12 col-md-12 col-lg-4 center text-center">
    <a href="tel:1075"><button type="button" className="btn btn-info btn-lg" >Toll free: 1075</button></a>
    </div>
    <div className="col-sm-12 col-md-12 col-lg-4 center text-center">
    <a href="tel:+91-11-23978046"><button type="button" className="btn btn-info btn-lg" >Mobile Number: +91-11-23978046</button></a>
    </div>
</div>

</section>

<br />
<br />

<figure className="alert alert-warning text-center " role="alert">
  <blockquote className="blockquote ">
    <p>An ounce of prevention is worth a pound of cure</p>
  </blockquote>
  <figcaption className="blockquote-footer">
  Benjamin Franklin
  </figcaption>
</figure>

<br />
<br />

<section className="sec2">
<h1 className="center text-center text-light display-4 ">Help for the cause. Every donation counts !!</h1> <br />

<br />

<div className="row padder center">
    <div className="col">
    <Cards name={donate_info[0].name} link={donate_info[0].link} bodyText={donate_info[0].bodyText} buttonText={donate_info[0].buttonText} image={pmcare} />

    </div>
    <div className="col">
    <Cards name={donate_info[1].name} link={donate_info[1].link} bodyText={donate_info[1].bodyText} buttonText={donate_info[1].buttonText} image={oxfam}/>

    </div>

    <div className="col">
    <Cards name={donate_info[2].name} link={donate_info[2].link} bodyText={donate_info[2].bodyText} buttonText={donate_info[2].buttonText} image={give}/>

    
    

    {/* 
    <div className="col">
    <Cards name={donate_info[<b>].name} link={donate_info[<b>].link} bodyText={donate_info[<b>].bodyText} buttonText={donate_info[<b>].buttonText} image={}/>

    </div> */}
</div>
    
</div>

<br/>
<div className="row padder center">
  <div className="col">
  <Cards name={donate_info[3].name} link={donate_info[3].link} bodyText={donate_info[3].bodyText} buttonText={donate_info[3].buttonText} image={who} />

  </div>

    <div className="col">
  <Cards name={donate_info[4].name} link={donate_info[4].link} bodyText={donate_info[4].bodyText} buttonText={donate_info[4].buttonText} image={ircs} />

    
    </div>
  
    <div className="col">
  <Cards name={donate_info[5].name} link={donate_info[5].link} bodyText={donate_info[5].bodyText} buttonText={donate_info[5].buttonText} image={sos} />

    
    </div>
  

</div>
</section>
<br/>
<br/>





















<div className="container-fluid">
    <div className="alert alert-danger" role="alert">
  <h4 className="alert-heading">NOTE</h4>
  <p>The contents/link provided above are taken from official government site and trusted sites, provided to the public</p>
  <hr />
  <p className="mb-12">The sole intention of this site is to make the given resources as publically available as possible and therefore doesn't intend to violate any intelectual rights (if any), copyrights, or other.</p>
</div>


</div>
        </div>
    )
}
export default React.memo(Unrender)