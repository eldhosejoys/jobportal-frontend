import { Link } from "react-router-dom";

function Home() {
    return ( <div>
       <header class="py-5 homebg">
        <div class="container px-5 py-5 ">
            <div class="row gx-5 align-items-center justify-content-center ">
                <div class="col-lg-12 ">
                    <div class="my-5 text-center text-start ">
                        <h1 class="display-5 fw-bolder text-white mb-2 h6 ">Find Perfect Job & Profesionals</h1>
                        <p class="lead fw-normal text-light mb-4 ">The portal for both Job Providers and Seekers.</p>
                        <div class="d-grid gap-3 d-sm-flex justify-content-center justify-content-start ">
                        </div>
                        <div class="d-grid gap-3 d-sm-flex justify-content-center justify-content-start ">
                            <Link class="btn btn-light btn-lg px-4 rounded-pill " to="jplogin"><b>Job Provider</b></Link>
                            <Link class="btn btn-light btn-lg px-4 rounded-pill " to="jslogin"><b>Job Seeker</b></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <section class="py-2 pt-4 " id="features ">
        <div class="container ">
            <div class="row ">
                <div class="col-md-1 "></div>
                <div class="col-md-10 ">
                    <div class="box text-justify ">
                       
                    <div class="box text-justify ">
                    <div class="box">
<h2 class=" text-center class">All about Jobs in Single Portal</h2>
<p class=" text-center">Now you can find jobs online for free, apply for the jobs available from different companies in India easily with this portal. Find some here. Register an account to start. Then you can add your resume to your profile for job provider to view.</p>
</div>

<h2 class=" text-center class my-4">Available Jobs</h2>
<div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3">

<div class="col mb-4">
<div class="shadow-sm card flex-row flex-wrap">
<div class="card-body col-12 col-sm-9">
<h4 class="card-title text-dark">System Adminstrator</h4>
<p class="card-text">Qualification: Btech</p>
<p class="card-text">Skills Required: Java, C++</p>
<p class="card-text">Year of Passing: 2017</p>
<a href="#" class="btn btn-primary">Apply</a>
</div>
</div>
</div>

<div class="col mb-4">
<div class="shadow-sm card flex-row flex-wrap">
<div class="card-body col-12 col-sm-9">
<h4 class="card-title text-dark">Project Manager</h4>
<p class="card-text">Qualification: Btech</p>
<p class="card-text">Skills Required: Python, C++</p>
<p class="card-text">Year of Passing: 2018</p>
<a href="#" class="btn btn-primary">Apply</a>
</div>
</div>
</div>

<div class="col mb-4">
<div class="shadow-sm card flex-row flex-wrap">
<div class="card-body col-12 col-sm-9">
<h4 class="card-title text-dark">Support Desk Engineer</h4>
<p class="card-text">Qualification: Btech</p>
<p class="card-text">Skills Required: Android, iOS</p>
<p class="card-text">Year of Passing: 2018</p>
<a href="#" class="btn btn-primary">Apply</a>
</div>
</div>
</div>

<div class="col mb-4">
<div class="shadow-sm card flex-row flex-wrap">
<div class="card-body col-12 col-sm-9">
<h4 class="card-title text-dark">Data Anaylist</h4>
<p class="card-text">Qualification: Btech</p>
<p class="card-text">Skills Required: Excel, SQL</p>
<p class="card-text">Year of Passing: 2017</p>
<a href="#" class="btn btn-primary">Apply</a>
</div>
</div>
</div>

<div class="col mb-4">
<div class="shadow-sm card flex-row flex-wrap">
<div class="card-body col-12 col-sm-9">
<h4 class="card-title text-dark">Python Developer</h4>
<p class="card-text">Qualification: Btech</p>
<p class="card-text">Skills Required: Python</p>
<p class="card-text">Year of Passing: 2018</p>
<a href="#" class="btn btn-primary">Apply</a>
</div>
</div>
</div>

<div class="col mb-4">
<div class="shadow-sm card flex-row flex-wrap">
<div class="card-body col-12 col-sm-9">
<h4 class="card-title text-dark">Java Full Stack</h4>
<p class="card-text">Qualification: Btech</p>
<p class="card-text">Skills Required: React, Nodejs, Mysql</p>
<p class="card-text">Year of Passing: 2019</p>
<a href="#" class="btn btn-primary">Apply</a>
</div>
</div>
</div>

</div>
<p>Job portals, or job boards, are sites where you can advertise jobs and search for resumes. They are an integral part of almost every hiring process and using them effectively will translate into qualified candidates for relatively low costs.</p>

                    </div>
                       

                    </div>
                </div>
                <div class="col-md-1 "></div>
            </div>
        </div>
    </section>

    </div> );
}

export default Home;