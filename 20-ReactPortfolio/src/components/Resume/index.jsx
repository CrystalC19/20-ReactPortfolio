function Resume() {
    return(
        <Section className= "my-5">
            <div className = "my-2">
            <p>
                My Resume <a href= "https://www.linkedin.com/feed/"></a>
            </p>
            <h3> Front End</h3>
            <ul className="skills">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>React</li>
                <li>BootStrap</li>
            </ul>
            <h3>Back End</h3>
            <ul className="skills">
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL,Sequelize</li>
                <li>MongoDB,Mongoose</li>
                <li>REST</li>
                <li>GraphQL</li>
            </ul>
            </div>
        </Section>
    );
}

export default Resume;