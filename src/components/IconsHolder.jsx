

import "./styles/IconHolder.css"
const IconsHolder =({Icon, title})=>{
    return(
        <div className={"icon__holders"}>
            {Icon && <Icon className={"icon__holders__icon"}/>}
            <h4 className={"icon__holders__title"}>{title}</h4>

        </div>
    )
}
export default IconsHolder;