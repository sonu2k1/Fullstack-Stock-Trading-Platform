import React from 'react';

function Universe() {
    return ( 
        <div className="container text-center ">
            <div className="row">
                <h1 className=' mt-5'>The Zerodha Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
                <div className="col-4 mt-5">
                    <img src="media/images/smallcaseLogo.png" alt="" />
                    <p className='text-small text-muted'>Thematic investment platform</p>
                </div>
                <div className="col-4 mt-5">
                <img src="media/images/streakLogo.png" alt="" style={{width:"40%"}}  />
                <p className='text-small text-muted'>Algo & strategy platform </p>

                </div>
                <div className="col-4 mt-5">  <img src="media/images/image.png" alt="" style={{width:"200px"}}  />
                    <p className='text-small text-muted'>Options trading platform </p>
                    </div>

                    <div className="col-4 mt-5">
                    <img src="media/images/zerodhaFundhouse.png" alt="" style={{width:"40%"}}  />
                    <p className='text-small text-muted'>  Asset management                  </p>
                </div>
                <div className="col-4 mt-5">
                <img src="media/images/goldenpiLogo.png" alt="" />
                <p className='text-small text-muted'>Fundamental research platform </p>

                </div>
                <div className="col-4 mt-5 ">  <img src="media/images/dittoLogo.png" style={{width:"40%"}} alt="" />
                    <p className='text-small text-muted'>Insurance</p>
                    </div>
                    <button className='p-2 btn btn-primary fs-5 mt-5' style={{width:"20%",margin:"0 auto"}}>Sign up now</button>
            </div>
        </div>
     );
}

export default Universe;