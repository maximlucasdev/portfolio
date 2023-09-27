export default function SkillTab(props:{name:string, askills:Skill[], selected:string, skills:Skill[], setSkills: any, setSelected: any, setVisible: any}) {
  return (
    <button onClick={() => {
        props.setVisible(false);
        props.setSelected(props.name);
        setTimeout(() => {
            props.setSkills(props.skills);
            props.setVisible(true);
        }, props.askills.length*110);
    }}>
        <p class={`${props.selected == props.name ? 'gradient-text' :''} hover:-translate-y-1 transition`}>{props.name}</p>
        {props.selected == props.name ? <div class='flex mt-1 justify-center'><div class='bg-gradient h-1 rounded-full w-2/3'/></div> : <div class='h-2'></div>}
    </button>
  )
}
