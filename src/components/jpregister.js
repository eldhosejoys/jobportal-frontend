import { Link } from "react-router-dom";

function Jpregister() {
    return (
        <div>
            <header class="py-2 jlogin1">
        <div class="container px-5 ">
            <div class="row gx-5 align-items-center justify-content-center ">
                <div class="col-lg-5 col-xl-6 col-xxl-6 ">
                    <div class="my-5 text-xl-start ">
                        <div class="card shadow jlogin2">
                            <div class="card-body p-4 ">
                                <h1 class=" card-title text-center pb-4 h3 "><span  class="jlogin3">JobProvider Registration</span> </h1>
                                <span class="card-text ">
                                <form action="instructor "  method="POST " id="formsubmit ">
                                    <span id="formerror "></span>
                                <div class="form-group ">
                                    <label for="name"><span class="font-weight-bold ">Name:</span></label>
                                    <input required type="text " class="form-control " name="name" id="name" placeholder="Your Comapany Name "/>
                                </div>
                                <div class="form-group mt-3">
                                    <label for="location"><span class="font-weight-bold ">Location:</span></label>
                                    <input required type="text" class="form-control " name="location" id="location" placeholder="Your Company Location "/>
                                </div>
                                <div class="form-group mt-3">
                                    <label for="contact"><span class="font-weight-bold ">Contact Number:</span></label>
                                    <input required type="number" class="form-control " name="contact" id="contact" placeholder="Your Company Contact Number"/>
                                </div>
                                <div class="form-group mt-3">
                                    <label for="website"><span class="font-weight-bold ">Website:</span></label>
                                    <input required type="text" class="form-control " name="website" id="website" placeholder="Your Company Website "/>
                                </div>
                                <div class="form-group mt-3">
                                    <label for="technology"><span class="font-weight-bold ">Technology:</span></label>
                                    <input required type="text" class="form-control " name="technology" id="technology" placeholder="Your Company Technology "/>
                                </div>
                                <div class="form-group mt-3">
                                    <label for="email"><span class="font-weight-bold ">Email ID:</span></label>
                                    <input required type="email" class="form-control " name="email" id="email" placeholder="Your Email Address "/>
                                </div>
                                <div class="form-group mt-3 ">
                                    <label for="pwd " class="font-weight-bold ">Password:</label>
                                    <input required type="password " class="form-control " name="password " id="password" placeholder="Your Password "/>
                                </div>
                                <center><button type="button" class="btn btn-dark mt-4 font-weight-bold">Register Now</button></center>
                                </form>
                                <div class="mt-3 text-center"><Link to="/jplogin">Login to your Account</Link> 👉</div>
                                </span><br/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-5 col-xxl-6 d-xl-block text-center "><img class="img-fluid rounded-3 " src="https://i.postimg.cc/Xv20WcYJ/image.png " alt="img" /></div>
            </div>
        </div>
    </header>
        </div>
    );
}

export default Jpregister;