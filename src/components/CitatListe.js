import React from 'react'

const CitatListe = (props) => {
    const alleCitater = props.alleCitaterProp.map(citat => {
        return (
            <div className="citat" key={citat.id}>
                <h2>{citat.titel}</h2>
                <p>{citat.citattekst}</p>
                <p><i>{citat.forfatter}</i></p>
                <button onClick={ () => {props.deleteCitatProp(citat.id)}}>Slet citat</button>
            </div>
        )
    });


    return (
        <div className="citater collection">
            <h1>Citat Liste</h1>
            {alleCitater}
        </div>
    );
    }

export default CitatListe;