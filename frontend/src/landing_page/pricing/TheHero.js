import React from 'react';

function TheHero() {
    return (
        <div className="container">
            <div className="row mt-5 text-center border-bottom ">
            <h1 className='mt-5'>The Zerodha Universe</h1>
          <p className='fs-3 mt-3 mb-5'> Free equity investments and flat ₹20 intraday and F&O trades</p> 
          </div>
          <div className="row p-5 mt-5 text-center  border-bottom">
            <div className="col-4 p-5">
                <img src="media/images/pricingEquity.svg" alt="" />
                <h1  className='fs-3'>Free equity delivery</h1>
                <p className='text-muted'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
            </div>
            <div className="col-4 p-5">
                <img src="media/images/intradayTrades.svg" alt="" />
                <h1 className='fs-3'>Intraday and F&O trades</h1>
                <p className='text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
            </div>
            <div className="col-4 p-5">
            <img src="media/images/pricingMF.svg" alt="" />
            <h1 className='fs-3'>Free direct MF</h1>
            <p className='text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
            </div>
          </div>
        </div>
      );
}

export default TheHero;