import "./formulario.css"
import { useState } from "react";
import {toast} from 'react-toastify';
import api from '../../service/api'
import { useNavigate } from 'react-router-dom';
import config from '../../config.json';
import { Link } from 'react-router-dom';

function Formulario(){
    const navigate = useNavigate();
    const[email, setEmail] = useState('');
    const[listaMeta, setListaMetas] = useState([{
        meta: ''
    }]);
    const[data, setData] = useState(new Date());
    const[loadding, setLoadding] = useState(false);

    function adicionaMeta(){
        setListaMetas([
            ...listaMeta,
            { meta: ''},
        ]);
    }

    function removeMeta(index){
        setListaMetas([
            ...listaMeta.slice(0, index),
            ...listaMeta.slice(index+1)
        ]);
    }

    async function confirma(){
        var json = {
            meta: listaMeta.map(item => item.meta).join("|"),
            email: email,
            dataObjetivo: data
        }

        if(!json.email){
            toast.warn('Preencha um email válido');
        }
        else if(!json.dataObjetivo){
            toast.warn('Preencha a data de conclusão corretamente');
        }
        else if(new Date(json.dataObjetivo) <= new Date()){
            toast.warn('Data deve ser maior que atual!');
        }
        else if(!json.meta){
            toast.warn('Preencha as metas corretamente!');
        }
        else{
            setLoadding(true);
            await api.post('/Metas', json).then((Response) => {
                toast.success('Cadastrado com sucesso!');
                setLoadding(false);
                navigate('/finaliza', {replace: true});
                salvarLocalStorage();
            }).catch(() =>{
                toast.error('Erro ao cadastrar');
            });
            
        }
    }

    function salvarLocalStorage(){
        var json = JSON.parse(localStorage.getItem(config.metas));
        
        if(json = undefined)
            json = []

        listaMeta.forEach(element => {
            json.push({
                email: email,
                data: data,
                meta: element.meta
            })
        });

        localStorage.setItem(config.metas, JSON.stringify(json));
    }

    if(loadding){
        return(
            <div className='loaddingDiv'>
                <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
            </div>
        )
    }

    return (
        <div className='global-pageContainer-left'>
            <h1>Cadastro de Metas</h1>
            <div className="formulario">
                <h2>Email</h2>
                <input type="email" id="email" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                <h2>Data conclusão</h2>
                <input type="date" id="data" value={data} onChange={(e) => {setData(e.target.value)}}/>
                <h2>Metas</h2>
                {
                    listaMeta.map((item, i) => {
                        return(
                            <div className="metasform">
                                <h2>{i+1}: 
                                <textarea rows={4} type="text" id={i} value={item.meta} onChange={(e) => {
                                    setListaMetas(
                                        [
                                            ...listaMeta.slice(0, i),
                                            {
                                                meta:e.target.value
                                            },
                                            ...listaMeta.slice(i+1)
                                        ]
                                    )
                                }}/>
                                </h2>
                                <button type="button" 
                                        className='global-button global-button--transparent'
                                        onClick={() => removeMeta(i)}>
                                    Remover
                                </button>
                            </div>
                        )
                    })
                }
                <button type="button" 
                    className='global-button global-button--transparent'
                    onClick={adicionaMeta}>
                  Add Meta
                </button>

                <button type="button" 
                    className='global-button global-button'
                    onClick={() => confirma()}>
                  Confima Cadastro
                </button>
                <button type="button" 
                    className='global-button global-button'
                    onClick={() => navigate('/', {replace: true})}>
                  Home
                </button>
            </div>
        </div>
    )
}

export default Formulario;