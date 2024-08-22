import '../css/pageStyles/Articles.css';
import { Link } from 'react-router-dom';

function Articles() {
  return (
    <>
    <main className='articles-main'>
      <h1>Articles</h1>
      <h2>Recent</h2>
      <ArticleCard to="/moba-character" title="New Character // MOBA" type="update" classes="icon update-icon" date="20/20/2020" />
      <ArticleCard to="/rotator-boss" title="Rotator Boss" type="update" classes="icon update-icon" date="20/20/2020" />
      <ArticleCard to="/soulswap" title="Soul Swap // What Is It?" classes="icon info-icon" type="info" date="20/20/2020" />
      <ArticleCard to="/potions-collectibles" title="Potions & Collectibles" classes="icon plan-icon" type="plan" date="20/20/2020" />

      <div className='vr articles-vr'></div>
      <div className='vr recent-vr'></div>
    </main>
    </>
  );
}

function ArticleCard({to, title, type, classes, date}) {
  return (
    <Link to={to}>
      <article className="article-card">
        <div className="article-card-text-content">
          <h2>{title}</h2>
          <div style={{marginTop: "3px"}}>
            <div className={classes}></div>
            <h3>{type}</h3>
          </div>
        </div>
        <p>{date}</p>
      </article>
    </Link>
  )
}

export default Articles;
