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
                <div class="col-md-2 "></div>
                <div class="col-md-8 ">
                    <div class="box text-justify ">
                        <h2 class="mb-3 text-center ">Job Portal Demo Text</h2>

                        <p class="text-justify "> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu nisl a sapien dignissim iaculis. Nam sed arcu diam. Nulla hendrerit nibh in nisi lobortis, ut gravida lorem pretium. Pellentesque nec elit mauris. Maecenas volutpat
                            turpis a condimentum maximus. Nunc ullamcorper augue nulla, vel aliquam risus rhoncus tincidunt. Sed ultricies luctus ligula, et ullamcorper dolor porttitor vel. Duis nec purus at magna condimentum condimentum ac at erat. Donec
                            placerat laoreet magna quis accumsan. Suspendisse at velit ante. Praesent in enim cursus, faucibus tellus id, malesuada nisi. In imperdiet posuere elit quis dignissim. Integer in metus massa. Aliquam blandit sem mauris, ac
                            lacinia lorem laoreet et.
                        </p>
                        <p class="text-justify "> In suscipit justo libero, id viverra mauris lobortis eu. Maecenas non vehicula ante. Quisque sit amet tellus at orci tincidunt lobortis. Cras non porta nisi. Etiam in lacinia massa, sed euismod nisl. Quisque ante ante, volutpat
                            eget faucibus a, suscipit non orci. Praesent rhoncus dolor sed dictum finibus. Phasellus purus risus, vestibulum quis viverra ut, feugiat vel velit. Quisque eleifend mattis purus ut consequat. Maecenas tincidunt fringilla tincidunt.
                            In ut ipsum eget tellus blandit maximus. Vivamus ut tincidunt nunc.
                        </p>
                        <p class="text-justify "> Praesent ut efficitur tortor. Mauris fermentum ligula ac arcu feugiat fermentum vel id lectus. Quisque dapibus vitae leo sed malesuada. Sed pharetra, nibh in porttitor sagittis, lectus nulla facilisis massa, eu malesuada enim eros
                            vitae ex. Duis sed hendrerit ex, in volutpat ipsum. Vestibulum pulvinar venenatis lectus, vitae finibus turpis consectetur facilisis. Ut vitae diam porttitor justo laoreet sollicitudin. Integer et enim sed ante vestibulum commodo.
                            Aenean ac luctus justo, eu placerat mauris. Sed ac eleifend lorem, vitae pellentesque mi. Maecenas tristique ante in tellus luctus, quis commodo nulla dignissim.
                        </p>
                        <p class="text-justify "> Praesent vitae faucibus arcu. Mauris quis volutpat sem. Ut nec fermentum tortor. Phasellus porta risus tellus, sit amet vulputate nisl tempus non. Aliquam ut lacus iaculis est dictum sagittis. Nam porttitor aliquam sem, eget mattis
                            quam viverra fringilla. Mauris rutrum leo vestibulum, vulputate turpis ac, gravida metus. Maecenas tortor erat, faucibus et auctor vitae, blandit eu sem. Duis dignissim suscipit mauris, sit amet accumsan ligula aliquam a. Vestibulum
                            in sagittis quam, eget posuere tortor. Aenean venenatis dui ac nisi bibendum lacinia laoreet sed libero. Aenean porta justo fermentum orci lobortis ullamcorper.
                        </p>
                        <p class="text-justify "> Vestibulum interdum elit est, in sodales augue rutrum a. Nam congue vitae urna et finibus. Nam volutpat turpis ac mi suscipit euismod. Donec commodo tellus lacus, sed interdum erat placerat at. Etiam et sem tempus, luctus erat
                            id, vestibulum erat. Duis nisi massa, mollis eu hendrerit sit amet, tempor ut libero. Etiam varius euismod ligula in ultrices. Integer luctus eros a velit rhoncus, ut elementum nulla vehicula. Quisque iaculis nulla vel nisl
                            finibus, ac ultricies orci sodales. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                        </p>

                    </div>
                </div>
                <div class="col-md-2 "></div>
            </div>
        </div>
    </section>

    </div> );
}

export default Home;