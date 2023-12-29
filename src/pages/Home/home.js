import { Link } from 'react-router-dom';

function Home()
{
    return (
        <div className='global-pageContainer-left'>
            <div className='description'>
                <h3 className='description'>
                Bem-vindo ao MetasTrack, o seu portal mágico para realizar sonhos e transformar metas em aventuras emocionantes! 🚀✨<br/>
                Queremos convidar você a embarcar em uma jornada incrível de autodescoberta e superação, onde cada meta estabelecida se torna uma conquista a ser celebrada. 💪🌟<br/><br/>
                🎯 Cadastre Suas Metas:<br/>
                Com MetasTrack, é fácil transformar seus objetivos em realidade. Basta cadastrar a sua meta, adicionar um toque pessoal, e pronto! Estamos aqui para ajudar você a trilhar o caminho do sucesso.<br/><br/>
                📅 Data de Conclusão:<br/>
                Marque no calendário a data de conclusão das suas metas. O MetasTrack não apenas acompanha suas conquistas, mas também celebra com você cada passo dado em direção aos seus sonhos.<br/><br/>
                ✉️ Email Mágico:<br/>
                Receba notificações encantadoras e dicas motivacionais diretamente em seu email. O MetasTrack é seu companheiro constante, inspirando-o a manter o foco e seguir em frente, mesmo nos dias mais desafiadores.<br/><br/>
                Não perca a oportunidade de transformar suas metas em conquistas extraordinárias. Junte-se à comunidade MetasTrack e descubra o poder de sonhar alto!<br/><br/>
                Vamos começar essa jornada juntos! ✨🚀
                </h3>
            </div>
            <br/>
            <div className='botoes'>
                <Link className='global-button global-button--full-width' to={`/formulario`}>Cadastrar Metas</Link>
                <Link className='global-button global-button--full-width' to={`/metas`}>Visualizar Metas</Link>
            </div>
        </div>
    )
}

export default Home;