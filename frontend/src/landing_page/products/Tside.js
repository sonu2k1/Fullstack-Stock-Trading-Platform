import React from 'react';

function Tside({imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}) {
    return ( 
        <div className="container mb-5">
            <div className="row">
                <div className="col-6 mt-5  mb-5">
                  <img src={imageURL} alt="img" />
                </div>
                <div className="col-6 p-5 mt-5">
                 <h1>{productName}</h1>
                 <p className='fs-3 text-muted'>{productDescription}</p>
               <div>
               <a href={tryDemo} style={{textDecoration:"none"}} className='fs-3 '>Try Demo <i class="fa-solid fa-arrow-right"></i></a>
               <a href={learnMore} style={{margin:"50px",textDecoration:"none"}} className='fs-3 '>Learn More <i class="fa-solid fa-arrow-right"></i></a>
               </div>
                <div>
                <a href={googlePlay}>
                    <img src="media/images/googlePlayBadge.svg" alt="gP" />
                 </a>
                 <a href={appStore}>
                    <img src="media/images/appstoreBadge.svg" alt="aS" style={{margin:"50px"}}/>
                 </a>
                </div>
                </div>
            </div>
        </div>
     );
}

export default Tside;