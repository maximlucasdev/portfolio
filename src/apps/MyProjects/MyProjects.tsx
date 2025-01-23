import { Animated } from "react-animated-css";
import { projects } from "../../data";
import ProjectCard from "./lib/ProjectCard";
import { useState } from "preact/hooks";
import ProjectInfo from "./ProjectInfo";
import t from "../../i18n/i18n";
export default function MyProjects() {
    const [viewProject, setViewProject] = useState<Project|null>(null);
    if (viewProject) {
        return <ProjectInfo project={viewProject} setViewProject={setViewProject}/>
    }
    return (
      <div class='h-full w-full md:rounded-b-md'>
          <div class='p-10 gap-10 text-center over text-white w-full h-full overflow-y-scroll flex flex-col pt-5 noscrollbar'>
              <Animated animationIn="fadeInDown" animationOut="fadeOut" isVisible={true} animationInDuration={1000}>
                  <h1 class='text-4xl font-bold wavy-underline mb-3'>{t('app.myprojects.content.title')}</h1>
                  <p class='font-light text-white/70'>{t('app.myprojects.content.subtitle')}</p>
              </Animated>

              <div class='flex flex-row gap-4 flex-wrap justify-center'>
                  {projects.map((project) => {
                      return <div key={projects.indexOf(project)}>
                          <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true} animationInDuration={1000} animationOutDuration={300} animationInDelay={projects.indexOf(project)*150} animationOutDelay={projects.indexOf(project)*100}>
                              <ProjectCard project={project as Project} setViewProject={setViewProject}/>
                          </Animated>
                      </div>
                  })}
              </div>
          </div>
      </div>
    )
}
