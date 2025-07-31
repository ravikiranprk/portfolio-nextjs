import { projects } from "@/lib/projectsData";
import ProjectCard from "./Cards/ProjectCard";

export default function Projects() {
    return (
        <section id="projects" className="mt-14 mb-16 flex flex-col gap-8">
            <h2 className='text-3xl font-bold mb-4'>Projects</h2>
            {projects.map((project, index) => {
                return (
                    <div key={index}>
                        <ProjectCard title={project.title} listItems={project.listItems} />
                    </div>
                )
            })}
        </section>
    )
}