import '../css/pageStyles/HomePage.css'
import bannerVideo from '../video/BannerSoulSwapVingette.mp4'

function HomePage() {
    return (
        <div>
        <section className="home-banner">
            <video autoPlay muted loop>
                <source src={bannerVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <section className="home-banner-content">
                <a href='https://store.steampowered.com/' target='_blank' rel="noreferrer">SoulSwap</a>
                <div className="hr"></div>
                <h1>Error!Found</h1>
            </section>
        </section>
        <main>
        <section className="active-project">
                <h2>What Are We Working On?</h2>
                <section className="active-project-non-header">
                    <a className="active-project-image" href='https://store.steampowered.com/' target='_blank' rel="noreferrer"><img alt='Banner of the teams active project.' src={require("../images/SoulSwapBanner.png")}/></a>
                    <section className="active-project-blog-cards">
                        <a href='https://store.steampowered.com/' target='_blank' rel="noreferrer">
                            <article className="active-project-card">
                                <div className="card-text-content">
                                    <h2>New Character // MOBA</h2>
                                    <div>
                                        <div className="icon update-icon"></div>
                                        <h3>UPDATE</h3>
                                    </div>
                                </div>
                                <img className="card-image-content" alt='New character & its abilities.' src={require("../images/Updates/MOBACharUpdate/simpleBannerWithAbilities.png")}/>
                            </article>
                        </a>
                        <a>
                            <article className="active-project-card">
                                <div className="card-text-content">
                                    <h2>Rotator Boss</h2>
                                    <div>
                                        <div className="icon update-icon"></div>
                                        <h3>UPDATE</h3>
                                    </div>
                                </div>
                                <img className="card-image-content" alt='New Rotator boss.' src={require("../images/Updates/RotatorUpdate/bannerSimple.png")}/>
                            </article>
                        </a>
                        <a>
                            <article className="active-project-card">
                                <div className="card-text-content">
                                    <h2>Soul Swap // What Is It?</h2>
                                    <div>
                                        <div className="icon info-icon"></div>
                                        <h3>INFO</h3>
                                    </div>
                                </div>
                                <img className="card-image-content" alt='Soul Swap Banner.' src={require("../images/SoulSwapBanner.png")}/>
                            </article>
                        </a>
                        <a>
                            <article className="active-project-card">
                                <div className="card-text-content">
                                    <h2>Potions & Collectibles</h2>
                                    <div>
                                        <div className="icon plan-icon"></div>
                                        <h3>PLAN</h3>
                                    </div>
                                </div>
                                <img className="card-image-content" alt='Potions and collectibles which will be updated.' src={require("../images/Updates/PotionsCollectiblesUpdate/bannerSimple.png")}/>
                            </article>
                        </a>
                    </section>
                </section>
            </section>

            <section className="all-projects">
                <h2>Our Projects</h2>
                <section className="all-projects-cards">
                    <div className="1"></div>
                    <div className="2"></div>
                    <div className="3"></div>
                    <div className="4"></div>
                </section>
            </section>

            <section className="mailing-list">
                <form>
                    <label htmlFor="mailing-list-email">Join Our Mailing List For Updates</label>
                    <input type="email" placeholder="Email Address"
                    id="mailing-list-email" 
                    name="mailing-list-email" required />
                    <input type="submit" value="Subscribe" />
                </form>
            </section>
        </main>
        </div>
    );
}

export default HomePage;