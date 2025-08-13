import styles from './ProjectsStyles.module.css';
import tomorrow from '../../assets/tomorrow.png';
import issuetracker from '../../assets/issuetracker.png';
import gamehub from '../../assets/gamehub.png';
import gal2logo from '../../assets/gal2-logo.png'
import ProjectCard from '../../common/ProjectCard';
import android from '../../assets/android.png';



function Projects() {

  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={gal2logo}
          link="https://gal2-backend.onrender.com/"
          title="Gal2"
          techStack="Angular Node Express MongoDB"
          description="Yad2 clone"
        />
        <ProjectCard
          src={tomorrow}
          link="https://tomorrow-iiu4.onrender.com/"
          title="Tomorrow"
          techStack="React Node Express MongoDB"
          description="Monday.com clone"
        />
        <ProjectCard
          src={gamehub}
          link="https://game-hub-git-master-gal-israelis-projects.vercel.app/"
          title="Game Hub"
          techStack="NextJS Typescript ReactQuery"
          description="Game explorer"
        />
        <ProjectCard
          src={issuetracker}
          link="https://github.com/Gal1997/issue-tracker"
          title="Issue tracker"
          techStack="NextJS TypeScript Prisma MySQL"
          description="Managing bugs/issues"
        />
        <ProjectCard
          src={android}
          link="https://shorturl.at/dNk8d"
          title="Various Android Apps"
          techStack="Android-Studio Firebase"
          description="UI/UX, Mobile games"
        />

      </div>
    </section>
  );
}

export default Projects;
