import React from 'react';

function CreateTicket() {
    return ( 
        <div className="container">
             <div className="row">
                <h1 className=' mt-5'>To create a ticket, select a relevant topic</h1>
                </div> 
           <div className="row">
          <div className="col-4 mt-5 ">
            <h4 className='mb-3'><i class="fa-solid fa-plus"></i> Account Opening</h4>
            <a href=""style={{textDecoration:"none", lineHeight:"2.5"}}>Getting started</a><br />
            <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Online</a><br />
            <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Offline</a><br />
            <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Charges</a><br />
            <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Non Resident Indian (NRI)</a><br />
          </div>
          <div className="col-4 mt-5">
          <h4 className='mb-3'><i class="fa-solid fa-user"></i> Your Zerodha Account</h4>
            <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Login credentials</a><br />
            <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Your Profile</a><br />
            <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Account modification and segment addition</a><br />
            <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Nomination</a><br />
            <a href=""style={{textDecoration:"none", lineHeight:"2.5"}}>Transfer and conversion of shares</a><br />
          </div>
          <div className="col-4 mt-5"><h4 className='mb-3'><i class="fa-solid fa-chart-simple"></i> Trading and Markets</h4>
          <a href="" style={{textDecoration:"none"}}>Trading FAQs</a> <br />
          <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Kite</a> <br />
          <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Margins</a> <br />
          <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Product and order types</a> <br />
          <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Corporate actions</a> <br />
          <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Kite features</a> <br />

          </div>

          <div className="col-4 mt-5">
            <h4 className='mb-3'><i class="fa-solid fa-box"></i> Funds</h4>
            <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Fund Withdrawal</a> <br />
            <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Adding funds</a> <br />
            <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Adding bank accounts</a> <br />
            <a href=" " style={{textDecoration:"none", lineHeight:"2.5"}}>emandates</a> <br />
          </div>
          <div className="col-4 mt-5">
          <h4 className='mb-4'><i class="fa-solid fa-circle-notch"></i> Console</h4>
               <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>IPO</a> <br />
               <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Portfolio</a><br />
               <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Funds statement</a> <br /> 
               <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Profile</a> <br />
               <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Reports</a>
                <br />
                <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Referral program</a> <br />


          </div>
          <div className="col-4 mt-5"><h4 className='mb-4'><i class="fa-regular fa-circle"></i> Coin</h4>
          <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Understanding mutual funds and Coin</a> <br />
            <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Coin app</a> <br />
            <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Coin web</a> <br />
            <a href=" " style={{textDecoration:"none", lineHeight:"2.5"}}>Transactions and reports</a> <br />
            <a href=" " style={{textDecoration:"none", lineHeight:"2.5"}}>ational Pension Scheme (NPS)</a> <br />
              
          </div>

          </div>
            </div> 
         
        
     );
}

export default CreateTicket;