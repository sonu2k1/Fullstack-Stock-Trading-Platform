import React from 'react';

function Hero() {
    return ( 
        <div className='container text-center mt-5 mb-5 text-muted border-bottom'>
           <h1 className='mt-5'>Technology</h1>
           <h3 className='mb-5'>Sleek, modern, and intuitive trading platforms</h3>
           <p className='mb-5 fs-5'>
            Check out our <a href="" style={{textDecoration:"none"}}> investment offerings <i class="fa-solid fa-arrow-right"></i></a></p> 
        </div>
     );
}

export default Hero;