import { Animated } from "react-animated-css";
import { languages, frameworks, db, tools } from "../../data";
import SkillCard from "./lib/SkillCard";
import { useState } from "preact/hooks";
import SkillTab from "./lib/SkillTab";
import t from "../../i18n/i18n";
export default function SkillsMain() {
    const [skills, setSkills] = useState<Skill[]>(languages);
    const [visible, setVisible] = useState(true);
    const [selected, setSelected] = useState(t("app.skills.content.languages"));
  return (
    <div class='h-full w-full md:rounded-b-md'>
        <div class='p-10 gap-5 text-center text-white w-full flex flex-col pt-20 items-center justify-center'>
            <Animated animationIn="fadeInDown" animationOut="fadeOut" isVisible={true} animationInDuration={1000}>
                <h1 class='text-4xl font-bold wavy-underline'>{t("app.skills.content.title")} 🧑‍💻</h1>
            </Animated>

            <div class='flex flex-row gap-4 flex-wrap justify-center mb-5 mt-3'>
                <SkillTab name={t("app.skills.content.languages")} selected={selected} askills={skills} skills={languages} setSelected={setSelected} setSkills={setSkills} setVisible={setVisible}/>
                <SkillTab name={t("app.skills.content.databases")} selected={selected} askills={skills} skills={db} setSelected={setSelected} setSkills={setSkills} setVisible={setVisible}/>
                <SkillTab name={t("app.skills.content.frameworks")} selected={selected} askills={skills} skills={frameworks} setSelected={setSelected} setSkills={setSkills} setVisible={setVisible}/>
                <SkillTab name={t("app.skills.content.tools")} selected={selected} askills={skills} skills={tools} setSelected={setSelected} setSkills={setSkills} setVisible={setVisible}/>
            </div>

            <div class='flex flex-row gap-4 flex-wrap justify-center'>
                {skills.map((skill) => {
                    return <div key={skills.indexOf(skill)}>
                        <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={300} animationInDelay={skills.indexOf(skill)*150} animationOutDelay={skills.indexOf(skill)*100} isVisible={visible}>
                            <SkillCard skill={skill} showRating={true}/>
                        </Animated>
                    </div>
                })}
            </div>
        </div>
    </div>
  )
}
