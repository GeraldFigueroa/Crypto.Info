import React, {useState, useEffect} from 'react';
import CoinData from './CoinData';
import Header from './header';
import Footer from './Footer';

const CoinList = () => {

    //Definición del estado;
    const [coinList, setCoinList] = useState([]);

    //Estado del valor del lempira al día
    const [lempiraValue, setLempiraValue] = useState([]);


    //Actualiza el valor del lempira al día utilizando una API
    const LempValue = async () => {
        const data = await fetch('http://api.exchangeratesapi.io/v1/latest?access_key=c3baeaa981b937959ed1edae21336804')
        .then(response => response.json())
        
        setLempiraValue(data.rates.HNL);
    }
    

    //Obtiene los datos de la API mediante una petición fetch y actualiza el estado.
    //Este metodo tambien se utiliza para para buscar.
    const getCoins = async (texto) => {
        const response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false"); //Respuesta de la API
        const data = await response.json(); // Obtenemos los datos en formato json

        if(texto === ''){
            setCoinList(data);
        } else{
            const coinsIncluidas = [];
            data.forEach(coin => {
                if(coin.name.toLocaleLowerCase().includes(texto)){
                    coinsIncluidas.push(coin);
                }
            });
            setCoinList(coinsIncluidas);
        }  
    }

    useEffect(() => {
        getCoins('');
        LempValue();
    }, []);
    

    return(
        <div>
            <Header getCoins={getCoins}></Header>
            <div className="coinsBox">
                {coinList.map(coin => (
                    <CoinData coin={coin} lempiraValue={lempiraValue}/>
                ))}
            </div>
            <Footer></Footer>
        </div>
    )
}

export default CoinList;