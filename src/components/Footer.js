import { render } from '@testing-library/react';
import React from 'react'


const Footer = () => {

    return (
        <div className="footer">
            <p>Created by <div> Gerald Figueroa</div></p>
            <a href="https://www.coingecko.com/en/api/documentation" target="_blank">Crypto Monedas API</a>
            <a href="https://exchangeratesapi.io/" target="_blank">Divisas API</a>
            <a href="https://github.com/GeraldFigueroa/Crypto.Info">GitHub</a>
        </div>
    )
}

export default Footer;