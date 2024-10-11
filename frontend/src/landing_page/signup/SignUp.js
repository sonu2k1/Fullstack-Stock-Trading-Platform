import React from 'react';

function SignUp() {
    return ( 
        <div className="container mt-5 " id='signup'>
       <div className="row">
        <div className="col-6 mb-5 " >
        <img src="media/images/signup.png" alt="" />
        </div>
        <div className="col-2"></div>
        <div className="col-4  " id='sign-left'>
            <h1>Signup Now</h1>
            <h3 className='text-muted mt-3 fs-4'>Or track your existing application.</h3>
            <div class="mb-3">
            <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div class="col-auto">
    <label for="inputPassword6" class="col-form-label">Password</label>
  </div>
  <div class="col-auto">
    <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline"/>
   
  </div>
  
</div>
            
            <a href="https://fullstack-stock-trading-platform.vercel.app/">  <button className='p-2 btn btn-primary fs-5 mb-5' style={{margin:"0 auto"}}>Sign up now</button></a>
            <a href="https://fullstack-stock-trading-platform.vercel.app/">  <button className='p-2 btn btn-primary fs-5 mb-5' style={{margin:"0 auto"}}>Create Account</button></a>
            
        </div>

        <p className='mt-5 text-muted'>I authorise Zerodha to contact me even if my number is registered on DND. I authorise Zerodha to fetch my KYC information from the C-KYC registry with my PAN. Please visit this article to know more.</p>

        <p className='mt-5 text-muted'>If you are looking to open a HUF, Corporate, Partnership, or NRI account, you have to use the offline forms. For help, click here.</p>
       </div>





       
       </div>
     );
}

export default SignUp;
