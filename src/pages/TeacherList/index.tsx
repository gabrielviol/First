import React from 'react';

import PageHeader from '../../components/PageHeader';

import './styles.css'

function TeacherList() {
    return(
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponiveis.">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlfor="subject">Materia</label>
                        <input type="text" id="subject"/>
                    </div>
                    
                    <div className="input-block">
                        <label htmlfor="subject">Dia da semana</label>
                        <input type="text" id="week_day"/>
                    </div>

                    <div className="input-block">
                        <label htmlfor="subject">Hora</label>
                        <input type="text" id="time"/>
                    </div>
                </form>    
            </PageHeader> 
        </div>
    )
}

export default TeacherList;