import { Link } from "react-router-dom";

function Navigation() {
    return ( <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container px-2">
        <Link class="navbar-brand" to="/"><b class="stnav1">Job</b><span class="stnav">Portal</span></Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0"><Link class="text-light" style={{textDecoration: "none"}}to="about"><b> <span>About Us</span></b></Link></ul>
        </div>
    </div>
</nav> );
}

export default Navigation;