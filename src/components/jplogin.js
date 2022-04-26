import { Link } from "react-router-dom";

function Jplogin() {
    return (
<div>
<header class="py-5 jlogin1">
        <div class="container px-5 ">
            <div class="row gx-5 align-items-center justify-content-center ">
                <div class="col-lg-5 col-xl-6 col-xxl-6 ">
                    <div class="my-5 text-xl-start ">
                        <div class="card shadow jlogin2" >
                            <div class="card-body p-5 ">
                                <h1 class="card-title text-center pb-4 h3 "><span class="jlogin3">JobProvider Login</span> </h1>
                                <span class="card-text ">
                                <form action="instructor "  method="POST " id="formsubmit ">
                                    <span id="formerror "></span>
                                <div class="form-group ">
                                    <label for="email "><span class="font-weight-bold ">Email ID:</span></label>
                                    <input required type="email" class="form-control " name="email" id="email" placeholder="Your Email Address "/>
                                </div>
                                <div class="form-group mt-3 ">
                                    <label for="pwd " class="font-weight-bold ">Password:</label>
                                    <input required type="password" class="form-control " name="password" id="password" placeholder="Your Password "/>
                                </div>
                                <center><button type="submit " class="btn btn-dark mt-4 font-weight-bold">Submit to login</button></center>
                                </form>
                                <div class="mt-3 text-center"><Link to="/jpregister">Register for an account</Link> 👉</div>
                                </span><br/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-5 col-xxl-6 d-xl-block text-center "><img class="img-fluid rounded-3 " src="https://i.postimg.cc/Xv20WcYJ/image.png" alt="img"/></div>
            </div>
        </div>
    </header>
</div>
    );
}

export default Jplogin;