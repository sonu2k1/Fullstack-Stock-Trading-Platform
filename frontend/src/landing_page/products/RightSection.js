import React from 'react';

function RightSection({imageURL, productName, productDescription,learnMore, tryDemo}) {
    return ( 
        <div className="container mt-5 mb-5">
            <div className="row ">
                <div className="col-6 mt-5">
                <h1>{productName}</h1>
                <p className='fs-3 text-muted'>{productDescription}</p>
                <div>
                <a href={learnMore} style={{margin:"50px",textDecoration:"none"}} className='fs-3 '>Learn More <i class="fa-solid fa-arrow-right"></i></a>
               
                </div>
                </div>
                <div className="col-6 ">
                   <img src={imageURL} alt="" />
                </div>
            </div>
        </div>
     );
}

export default RightSection;