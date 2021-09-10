import Container from '../components/Container'
import LinkToHome from '../components/LinkToHome'

import styles from '../styles/Certifications.module.css'

const Certification = ({ cerTitle, imgSrc, cerDescription, cerLink }) => {
    return (
        <article className={styles.certification}>
            <h3 className={styles.title}>{cerTitle}</h3>
            <p className={styles.description}>{cerDescription}</p>
            <a href={cerLink} className={styles.link} target='_blank'>
                <img className={styles.img} src={imgSrc} title={cerTitle} />
            </a>
        </article>
    )
}

const Certifications = () => {
    return (
        <Container pageTitle='Certifications'>
            <LinkToHome />

            <section className={styles.certifications}>
                <Certification cerTitle='Responsive Web Design'
                    imgSrc='/certifications/rwd.png'
                    cerDescription='(Basic HTML, Basic CSS, Visual Design, Accessibility, CSS Flexbox, CSS Gird)'
                    cerLink='https://www.freecodecamp.org/certification/hadinhtu97/responsive-web-design' />

                <Certification cerTitle='Java Algorithms and Data Structures'
                    imgSrc='/certifications/jads.png'
                    cerDescription='(Basic Jascript, ES6, Regular Expression, Data Structures, Algorithm Scripting, Object Oriented)'
                    cerLink='https://www.freecodecamp.org/certification/hadinhtu97/javascript-algorithms-and-data-structures' />

                <Certification cerTitle='Front End Libraries'
                    imgSrc='/certifications/fel.png'
                    cerDescription='(Bootstrap, Sass, React, Redux)'
                    cerLink='https://www.freecodecamp.org/certification/hadinhtu97/front-end-libraries' />

                <Certification cerTitle='Data Visualization'
                    imgSrc='/certifications/dv.png'
                    cerDescription='(D3js, JSON APIs, Ajax)'
                    cerLink='https://www.freecodecamp.org/certification/hadinhtu97/data-visualization' />

                <Certification cerTitle='APIs and Microservices'
                    imgSrc='/certifications/am.png'
                    cerDescription='(Npm, Basic NodeJS and Express, MongoDB and Mongoose)'
                    cerLink='https://www.freecodecamp.org/certification/hadinhtu97/apis-and-microservices' />

                <Certification cerTitle='Quality Assurance'
                    imgSrc='/certifications/qa.png'
                    cerDescription='(Testing with ChaiJS and MochaJS, Advanced Node and Express)'
                    cerLink='https://www.freecodecamp.org/certification/hadinhtu97/quality-assurance-v7' />

                <Certification cerTitle='Information Security'
                    imgSrc='/certifications/is.png'
                    cerDescription='(HelmetJS, Penetration Testing with python)'
                    cerLink='https://www.freecodecamp.org/certification/hadinhtu97/information-security-v7' />

                <Certification cerTitle='Legacy QA and Information Security'
                    imgSrc='/certifications/lisqa.png'
                    cerDescription='(Achieved when Quality Assurance and Information Security are achieved)'
                    cerLink='https://www.freecodecamp.org/certification/hadinhtu97/information-security-and-quality-assurance' />

                <Certification cerTitle='Full Stack'
                    imgSrc='/certifications/fs.png'
                    cerDescription='(Achieved when all of the above are obtained)'
                    cerLink='https://www.freecodecamp.org/certification/hadinhtu97/full-stack' />

                <Certification cerTitle='Scientific Computing with Python'
                    imgSrc='/certifications/scp.png'
                    cerDescription='(Basic Python)'
                    cerLink='https://www.freecodecamp.org/certification/hadinhtu97/scientific-computing-with-python-v7' />

                <Certification cerTitle='Data Analysis with Python'
                    imgSrc='/certifications/dap.png'
                    cerDescription='(Jupyter Notebook, Numpy, Pandas, Matplotlib, Seaborn)'
                    cerLink='https://www.freecodecamp.org/certification/hadinhtu97/data-analysis-with-python-v7' />
            </section>

            <LinkToHome />
        </Container>
    )
}

export default Certifications