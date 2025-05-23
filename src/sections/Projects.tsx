import ProjectCard from '../components/ProjectCard'

const Projects: React.FC = () => {
  return (
    <section className="projects">
      <div className="project-grid">
        <ProjectCard title="Portfolio" description="Min personliga portfolio byggd med React och Framer Motion." link="#" />
        <ProjectCard title="ToDo App" description="En enkel att-göra-lista i React med localStorage." />
      </div>
    </section>
  )
}

export default Projects