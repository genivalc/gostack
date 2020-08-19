import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css';

import Header from './components/Header';

function App() {

    //Estado
    const [projects, setProjects] = useState ([]);
    
    useEffect(() => {
        api.get('projects').then(response => {
            setProjects(response.data);
        })
    }, []);

    // todas as vezes  quer for pegar uma ação usar o handle
    async function handleAddProject() {
        //projects.push(`Novo projeto ${Date.now()}`);

       // setProjects([...projects, `Novo projeto ${Date.now()}`]);
        const response = await api.post('projects', {
            title: `Novo projeto ${Date.now()}`,
            owner: "Genival Neto"
        });

        const project = response.data;

        setProjects([...projects, project]);
    }

    return (
        <>
            
            <Header title="Projects" />

            <ul>
                {projects.map( project => {
                    return <li key={project.id}>{project.title}</li>
                })}
            </ul>

            <button type= "button" onClick={handleAddProject} > Adicionar projeto  </button>
        </>
    );
}

export default App;