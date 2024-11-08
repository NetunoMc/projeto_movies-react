import { count } from 'console';
import { title } from 'process';
import { Link } from 'react-router-dom';
import './styles.css';

function Form() {
    const movies = {
        id: 1,
        image:
            'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/t4kR6H71anOV85qzjOLlr9uVdFJ.jpg',
        title: 'Cinquenta Tons de Cinza',
        count: 2,
        score: 4.0,
    };
    return (
        <div className="movies-form-container">
            <img className='movies-card-image'
                src={movies.image}
                alt="Cinquenta Tons de Cinza"
            />
            <div className="movies-card-bottom-container">
                <h3>Cinquenta Tons de Cinza</h3>
                <form className="movies-form">
                    <div className="form-group movies-form-group">
                        <label htmlFor="email">Informe seu e-mail</label>
                        <input className="form-control" type="email" id="email" />
                    </div>
                    <div className="form-group movies-form-group">
                        <label htmlFor="score">Informe sua avaliação</label>
                        <select className="form-control" id="score">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="movies-form-btn-container" >
                    <button className="movies-btn" type="submit">
                        SALVAR
                    </button>
                    </div>
                </form>
                <Link to='/'>
                <button className="movies-btn mt-3">CANCELAR</button>
                </Link>
            </div>
        </div>
    );
}

export default Form;