import config from '../../config.json';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Metas(){
    const[metas, setMetas] = useState([]);

    useEffect(() => {
        function criaMetas(){
            if(JSON.parse(localStorage.getItem(config.metas)) != undefined)
                setMetas(JSON.parse(localStorage.getItem(config.metas)));
        }

        criaMetas();
      }, []);

    return(
        <div className='global-pageContainer-left'>
            <h2>Metas cadastradas:</h2>
            <br/>
            <br/>
            <ul className='formulario'>
                {
                    metas.map((item, i) => {
                        return(
                            <li id={i}>
                                <h3>Email: {item.email}</h3><br/>
                                <h3>Data de conclusão: {item.data}</h3><br/>
                                <h3>Meta: {item.meta}</h3>
                            </li>
                        )
                    })
                }
            </ul>
            <div className='botoes'>
                <Link className='global-button global-button--full-width' to={`/`}>Home</Link>
                <Link className='global-button global-button--full-width' to={`/formulario`}>Cadastrar Metas</Link>
            </div>
        </div>
    )
}

export default Metas;