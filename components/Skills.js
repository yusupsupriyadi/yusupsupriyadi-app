import React from 'react'

function Skills() {
    return (
        <section className="skills section" id="skills">
            <h2 className="section-title">Skills</h2>
            <div className="skills__container bd-grid">
                <div className="skills__box">
                    <h3 className="skills__subtitle">Tools &amp; Technology</h3>
                    <span className="skills__name">Laravel</span>
                    <span className="skills__name">Next.Js</span>
                    <span className="skills__name">Tailwind CSS</span>
                    <span className="skills__name">Bootstrap</span>
                    <span className="skills__name">JavaScript</span>
                    <span className="skills__name">PHP</span>
                    <span className="skills__name">Figma</span>
                    <span className="skills__name">UI &amp; UX</span>
                    <h3 className="skills__subtitle">Other &amp; Interpersonal Skills</h3>
                    <span className="skills__name">Public Speaking</span>
                    <span className="skills__name">Team Work</span>
                    <span className="skills__name">Leadership</span>
                </div>
                <div className="skills__img">
                    <img src="images/skill.webp" />
                </div>
            </div>
        </section>

    )
}

export default Skills