import styles from './about.module.css';
import {Link} from 'react-router-dom'

const About = () => {
    return (
        <div>
            <h1 className={styles.aboutus}>About Us</h1>
            <div className={styles.but}>
            <h3 className={styles.back}>Go back to home</h3>
            <button className={styles.go}>
                <Link to="/" >Go</Link>
            </button>
            </div>
        </div>
    )
}
export default About;