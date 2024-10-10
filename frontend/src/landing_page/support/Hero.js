import React from "react";

function Hero() {
    return ( 
        <section className="container-fluid " id="supportHero">
            <div className=" p-2  " id="supportWrapper">
            <h3 className="mt-5">Support Portal</h3>
            <a href="" style={{color:"white"}}>Track Ticket</a>

            </div>
            <div className="row p-1 " id="sl-box">
                <div className="col-6 p-5 ">
                    <h1 className="mb-5">Search for an answer or browse help topics to create a ticket</h1>
                    <input type="text" placeholder="
Eg: how do i activate F&O, why is my order getting rejected ...
"  /> <br />
             <a href="">Track account opening</a>
             <a href="">Track segment activation</a>
             <a href="">Intrady</a>
             <a href="">margins</a>
             <a href="">Kite user manual</a>
                </div>
                <div className="col-6 p-2" id="featured">
                    <h1>Featured</h1>
                    <ol>
                    <li><a href="">Current Takeovers and Delisting - January 2024</a></li>

                    <li><a href="">Track segment activation</a></li>
                    </ol>
                </div>
            </div>
        </section>
     );
}

export default Hero;