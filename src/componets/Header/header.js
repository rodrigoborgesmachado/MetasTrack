import {Link} from 'react-router-dom';

function Header(){
    return(
        <header className='conNav'>
            <div disableGutters className='toolNav'>
                <Link className='logo' to='/'>MetasTrack</Link>
                <Link className='logo' to='/metas'>🔝Minhas metas🔝</Link>
            </div>
        </header>
    )
}

export default Header;