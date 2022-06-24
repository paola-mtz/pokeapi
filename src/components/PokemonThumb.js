import React from 'react'
import { version } from 'react/cjs/react.production.min';

const PokemonThumb = ({id, image, name, type, ability,move, version, _callback }) => {
    const style = type + " thumb-container";
    return (
        <div className={style}>
            <div className="number"><small>#0{id}</small></div>
            <img src={image} alt={name} />
            <div className="detail-wrapper">
                <h3>{name}</h3>
                <small>tipo: {type}</small>
                <small>base exp: {ability}</small>
                <small>move: {move}</small>
                <small>height: {version}</small>
            </div>
          
        </div>
    )
}

export default PokemonThumb
