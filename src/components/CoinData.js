import React from 'react'
import './styleComponents.css'


//Recibe un objeto Moneda en los parámetros
//Lo pinta en pantalla.
const CoinData = (props) => {

    const colorChange = () => {
        const style = {
            color: props.coin.price_change_24h < 0 ? '#7c0b0b' : '#084015' 
        }
        return style;
    }

    return(
        <div className="coinBox">
            <div className="imgBx">
                <img src={props.coin.image} alt="" />
            </div>
            <div className="content">
                <h2>{props.coin.name}</h2>
                <div className="content-p">
                    <p>
                        <strong>Precio:</strong> 
                        <div>
                            $. {props.coin.current_price.toLocaleString()}
                        </div>
                    </p>
                    <p>
                        <strong>Último Cambio (24h):</strong> 
                        <div style={colorChange()}>
                        $. {props.coin.price_change_24h.toLocaleString()}  
                        </div>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CoinData;
