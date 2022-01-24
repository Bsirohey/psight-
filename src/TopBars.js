import React from 'react'
import logo from "./assets/PS_logo.png"
import bghero from "./assets/bg-hero.png"

export default function TopBars() {
    return (
        <div>
            <header>
                <nav
                    class="navbar navbar-expand-lg fixed-top" role="navigation">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="/#"><img src={logo} alt="PSlogo"
                            height="40"
                        /></a>
                        <button
                            class="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a
                                        class="nav-link active text-white"
                                        aria-current="page"
                                        href="/#">Courses</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a
                                        class="nav-link dropdown-toggle text-white"
                                        href="/#"
                                        id="navbarDropdown"
                                        role="button"
                                        data-toggle="dropdown"
                                        aria-expanded="false">
                                        Platform
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a class="dropdown-item" href="/#">Action</a></li>
                                        <li><a class="dropdown-item" href="/#">Another action</a></li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li>
                                            <a class="dropdown-item" href="/#">Something else here</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown">
                                    <a
                                        class="nav-link dropdown-toggle text-white"
                                        href="/#"
                                        id="navbarDropdown"
                                        role="button"
                                        data-toggle="dropdown"
                                        aria-expanded="false">
                                        Resources
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a class="dropdown-item" href="/#">Action</a></li>
                                        <li><a class="dropdown-item" href="/#">Another action</a></li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li>
                                            <a class="dropdown-item" href="/#">Something else here</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a
                                        class="nav-link active text-white"
                                        aria-current="page"
                                        href="/#">Prices</a>
                                </li>
                            </ul><div class="col-4">
                                <ul class="navbar-nav justify-content-end">
                                    <li class="text-end">
                                        <form class="form-inline">
                                            <button class="btn text-white">
                                                <i class="bi bi-search"></i>
                                            </button>
                                        </form>
                                    </li>

                                    <li class="nav-item dropdown mx-2">
                                        <a class="nav-link dropdown-toggle text-white" href="/#"
                                            id="navbarDropdown" role="button"
                                            data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                            Sign In
                                        </a>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a class="dropdown-item" href="/#">Action</a>
                                            <a class="dropdown-item" href="/#">Another action</a>
                                            <div class="dropdown-divider"></div>
                                            <a class="dropdown-item" href="/#">Something else here</a>
                                        </div>
                                    </li>


                                    <li class="mx-0">
                                        <button class="btn btn-outline-primary px-4 py-2
                    btn-outline-light">
                                            <strong style={{fontSize:"11pt"}}>TRY FOR FREE</strong>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <div class="container-fluid" style={{backgroundColor: "#1a1919"}}>
                <div
                    class="bg-image"
                    style={{backgroundImage: `url(${bghero})`,
        paddingTop: "50px", 
        paddingBottom: "50px",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center 40px",
        backgroundSize: "1350px"}}
                    >
                    <div
                        class="align-items-center justify-content-center"
                        style={{height: "inherit"}}>
                        <div class="image text-center pt-3">
                            <img style={{maxHeight: "18px"}} alt ="logo-skills"/>
                        </div>
                        <div class="text text-white text-center my-3">
                            <h1>
                                <b>Thousands of courses authored by<br />our network of industry
                                    experts</b>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
