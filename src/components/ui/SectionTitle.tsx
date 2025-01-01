import React from "react";


type SectionTitleProps = {
    title: string
}


const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
    return <div className="section_title_container">

        <div className="section_title_box"></div>
        <h1>{title}</h1>

    </div>
}

export default SectionTitle;