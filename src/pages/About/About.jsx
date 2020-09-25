import React from "react";
import Layout from "../../components/Layout/Layout";
import Profile from "../../assets/images/profile.jpg";
import "./About.css";

function About() {
    return (
        <Layout>
            <div className="container">
                <h1 className="mb-5">Despre mine</h1>
                <div className="row">
                    <div className="profile-img col-12 col-md-6 mb-5">
                        <img src={Profile} alt="Imagine de profil" />
                    </div>
                    <div className="col-12 col-md-6">
                        <h3 className="mb-3">
                            Salut! Îți mulțumesc că mi-ai vizitat site-ul.
                        </h3>
                        <p>
                            Numele meu este Stănică Florin-Alexandru, am 20 de
                            ani și sunt student în primul an la Facultatea de
                            Cibernetică, Statistică și Informatică Economică,
                            specializarea Informatică Economică din cadrul
                            Academiei de Studii Economice din București.
                        </p>
                        <p>
                            Deși sunt destul de tânăr, sunt foarte pasionat de
                            tot ceea ce ține de web development, iar de aceea
                            continui să învăț cât mai multe despre acest domeniu
                            fascinant.
                        </p>
                        <p>
                            Prima oară când am descoperit realizarea site-urilor
                            web am fost atât de uimit de ce puteam realiza cu
                            câteva linii de cod încât mi-am dat seama că asta
                            vreau să fac pe viitor.
                        </p>
                        <p>
                            Nu ezita să mă contactezi dacă vrei să afli mai
                            multe despre mine. O zi frumoasă în continuare!
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default About;
