import { ArrowUpRight, Github } from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "../data/projects";
import { ProjectArtwork } from "./ProjectArtwork";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article className={`project-card project-${project.visual}`} layout whileHover={{ y: -5 }} transition={{ duration: 0.28, ease: [0.2, 0.7, 0.2, 1] }}>
      <div className="project-visual"><ProjectArtwork project={project} /></div>
      <div className="project-meta-row">
        <span>{project.number} / {project.category}</span>
        <span className={`status status-${project.status.toLowerCase().replaceAll(" ", "-")}`}><i/> {project.status}</span>
      </div>
      <div className="project-info">
        <div>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
        <div className="project-links">
          {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}><ArrowUpRight size={18}/></a>}
          {project.sourceUrl && <a href={project.sourceUrl} target="_blank" rel="noreferrer" aria-label={`${project.title} source on GitHub`}><Github size={17}/></a>}
        </div>
      </div>
      <div className="project-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
      {project.note && <small className="project-note">{project.note}</small>}
    </motion.article>
  );
}
