import { Link } from 'react-router-dom';

function Finaliza(){
    return(
        <div className='global-pageContainer-left'>
            <h3>
                Você receberá um email confirmando o cadastro das metas, favor verificar sua caixa de span!
            </h3>
            <div className='botoes'>
                <Link className='global-button global-button--full-width' to={`/formulario`}>Cadastrar mais metas</Link>
                <Link className='global-button global-button--full-width' to={`/metas`}>Visualizar Metas</Link>
            </div>
        </div>
    )
}

export default Finaliza;