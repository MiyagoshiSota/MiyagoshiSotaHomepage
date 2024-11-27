import styles from "./projects.module.css";

//components
import Title from "../../../../components/Title/Title";
import ProductCard from "../../../../components/Cards/ProductCard";
import ProjectCard from "../../../../components/Cards/ProjectCard";
import { FaReact } from "react-icons/fa";

const Projects = () => {
  return (
    <div className={styles.Projects}>
      <Title text={"Projects"} />
      <div className={styles.active_project}>
        <h2 className={styles.title}><a href="">ActiveProjects</a></h2>
        <ProjectCard
          name="My Website"
          detail="このwebサイト"
          imgUrls={[<FaReact size={"4vh"} />]}
          githubUrl="https://github.com/MiyagoshiSota/MiyagoshiSotaHomepage"
          key="0"
        />
      </div>
      <div className={styles.cards}>
        <h2><a href="">OldProjects</a></h2>
        <div className={styles.scroll_items}>
          <ul className={styles.first}>
            <li className={styles.scroll_item}>
              <ProductCard
                url=""
                src="https://images.microcms-assets.io/assets/5d98dcaed7af47fdb5252aa891fa552a/63c449686faa428cbd4d2202b4632b82/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202024-11-20%2017.16.52.png"
              />
            </li>
            <li className={styles.scroll_item}>
              <ProductCard
                url=""
                src="https://images.microcms-assets.io/assets/5d98dcaed7af47fdb5252aa891fa552a/dd45c1a4112148be8d2c5c438552f780/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202024-11-20%2017.01.52.png"
              />
            </li>
            <li className={styles.scroll_item}>
              <ProductCard
                url=""
                src="https://images.microcms-assets.io/assets/5d98dcaed7af47fdb5252aa891fa552a/0044d4948b1544f4bffa47c7a2d3dcbd/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202024-11-20%2016.40.56.png"
              />
            </li>
            <li className={styles.scroll_item}>
              <ProductCard
                url=""
                src="https://images.microcms-assets.io/assets/5d98dcaed7af47fdb5252aa891fa552a/e7d6da8f06004245b634c32d5feb3ce6/_geek-camp2023-caravan-val2._006.png"
              />
            </li>
            <li className={styles.scroll_item}>
              <ProductCard
                url=""
                src="https://images.microcms-assets.io/assets/5d98dcaed7af47fdb5252aa891fa552a/413b50a03c5f4e20b3e61f689ff21daf/0da7c24b-2302-454b-87d6-81f299a0.webp"
              />
            </li>
            <li className={styles.scroll_item}>
              <ProductCard
                url=""
                src="https://images.microcms-assets.io/assets/5d98dcaed7af47fdb5252aa891fa552a/78434063e8834bd694b36fcbbe0d5f8b/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202024-11-26%2017.44.58.png"
              />
            </li>
          </ul>
          <ul className={styles.first}>
            <li className={styles.scroll_item}>
              <ProductCard
                url=""
                src="https://images.microcms-assets.io/assets/5d98dcaed7af47fdb5252aa891fa552a/63c449686faa428cbd4d2202b4632b82/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202024-11-20%2017.16.52.png"
              />
            </li>
            <li className={styles.scroll_item}>
              <ProductCard
                url=""
                src="https://images.microcms-assets.io/assets/5d98dcaed7af47fdb5252aa891fa552a/dd45c1a4112148be8d2c5c438552f780/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202024-11-20%2017.01.52.png"
              />
            </li>
            <li className={styles.scroll_item}>
              <ProductCard
                url=""
                src="https://images.microcms-assets.io/assets/5d98dcaed7af47fdb5252aa891fa552a/0044d4948b1544f4bffa47c7a2d3dcbd/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202024-11-20%2016.40.56.png"
              />
            </li>
            <li className={styles.scroll_item}>
              <ProductCard
                url=""
                src="https://images.microcms-assets.io/assets/5d98dcaed7af47fdb5252aa891fa552a/e7d6da8f06004245b634c32d5feb3ce6/_geek-camp2023-caravan-val2._006.png"
              />
            </li>
            <li className={styles.scroll_item}>
              <ProductCard
                url=""
                src="https://images.microcms-assets.io/assets/5d98dcaed7af47fdb5252aa891fa552a/413b50a03c5f4e20b3e61f689ff21daf/0da7c24b-2302-454b-87d6-81f299a0.webp"
              />
            </li>
            <li className={styles.scroll_item}>
              <ProductCard
                url=""
                src="https://images.microcms-assets.io/assets/5d98dcaed7af47fdb5252aa891fa552a/78434063e8834bd694b36fcbbe0d5f8b/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202024-11-26%2017.44.58.png"
              />
            </li>
          </ul>
        </div>
        <div className={styles.scroll_items}>
          <ul className={styles.second}>
            <li className={styles.scroll_item}>
              <ProductCard
                url=""
                src="https://images.microcms-assets.io/assets/5d98dcaed7af47fdb5252aa891fa552a/74dd810e69bf4b2cac4b40f18e3d9071/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202024-11-24%2015.31.03.png"
              />
            </li>
            <li className={styles.scroll_item}>
              <ProductCard
                url=""
                src="https://images.microcms-assets.io/assets/5d98dcaed7af47fdb5252aa891fa552a/30b104c0109c4211b7df66491be00921/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202024-11-24%2015.36.56.png"
              />
            </li>
            <li className={styles.scroll_item}>
              <ProductCard
                url=""
                src="https://images.microcms-assets.io/assets/5d98dcaed7af47fdb5252aa891fa552a/4b1da357688c4226ab3b5a39707965ce/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202024-11-24%2015.41.40.png"
              />
            </li>
            <li className={styles.scroll_item}>
              <ProductCard
                url=""
                src="https://images.microcms-assets.io/assets/5d98dcaed7af47fdb5252aa891fa552a/deb57bdcd1a4438dae631a4586b993bf/47add3af5de5519d.png"
              />
            </li>
            <li className={styles.scroll_item}>
              <ProductCard
                url=""
                src="https://images.microcms-assets.io/assets/5d98dcaed7af47fdb5252aa891fa552a/c467d1b616904a0d820e02f83d6cd0aa/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202024-11-24%2015.59.39.png"
              />
            </li>
            <li className={styles.scroll_item}>
              <ProductCard
                url=""
                src="https://images.microcms-assets.io/assets/5d98dcaed7af47fdb5252aa891fa552a/7cd2d73da7dc40e5a61a2c5508e729d5/%E5%9B%B31.png"
              />
            </li>
          </ul>
          <ul className={styles.second}>
            <li className={styles.scroll_item}>
              <ProductCard
                url=""
                src="https://images.microcms-assets.io/assets/5d98dcaed7af47fdb5252aa891fa552a/74dd810e69bf4b2cac4b40f18e3d9071/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202024-11-24%2015.31.03.png"
              />
            </li>
            <li className={styles.scroll_item}>
              <ProductCard
                url=""
                src="https://images.microcms-assets.io/assets/5d98dcaed7af47fdb5252aa891fa552a/30b104c0109c4211b7df66491be00921/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202024-11-24%2015.36.56.png"
              />
            </li>
            <li className={styles.scroll_item}>
              <ProductCard
                url=""
                src="https://images.microcms-assets.io/assets/5d98dcaed7af47fdb5252aa891fa552a/4b1da357688c4226ab3b5a39707965ce/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202024-11-24%2015.41.40.png"
              />
            </li>
            <li className={styles.scroll_item}>
              <ProductCard
                url=""
                src="https://images.microcms-assets.io/assets/5d98dcaed7af47fdb5252aa891fa552a/deb57bdcd1a4438dae631a4586b993bf/47add3af5de5519d.png"
              />
            </li>
            <li className={styles.scroll_item}>
              <ProductCard
                url=""
                src="https://images.microcms-assets.io/assets/5d98dcaed7af47fdb5252aa891fa552a/c467d1b616904a0d820e02f83d6cd0aa/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202024-11-24%2015.59.39.png"
              />
            </li>
            <li className={styles.scroll_item}>
              <ProductCard
                url=""
                src="https://images.microcms-assets.io/assets/5d98dcaed7af47fdb5252aa891fa552a/7cd2d73da7dc40e5a61a2c5508e729d5/%E5%9B%B31.png"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;
