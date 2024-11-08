import { ReactComponent as IconeGithub } from '../../assets/img/gitHub.svg';
import './styles.css';

function Navbar() {
    return (
        <header>
            <nav className='container'>
                <div className='movies-nav-content'>
                    <h1>
                        TEC.002-MOVIES
                    </h1>
                    <a href="https://github.com/NetunoMc">
                        <div className='movies-repository-container'>
                            <IconeGithub />
                            <p className="movies-repository-link">/github</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;