import React from 'react';


export default function Cards({name, link, bodyText, buttonText, image}) {
    console.log(image)
    return (
        <div className="card" >
  <img src={image} className="card-img-top" alt="No found" />
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <p className="card-text">{bodyText}</p>
    <a href={link} className="btn btn-primary">{buttonText}</a>
  </div>
</div>
    )
}
