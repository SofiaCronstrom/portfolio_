interface ProjectCardProps {
  title: string
  description: string
  link?: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link }) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      {link && <a href={link} target="_blank" rel="noopener noreferrer">Se mer</a>}
    </div>
  )
}

export default ProjectCard
