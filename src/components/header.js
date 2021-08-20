import React from 'react';

const Header = (props) => {

    //Se ejecuta cada vez que el usuario interactue con el input.
    const inpuChange = (event) => {
        const input = event.target.value;
        props.getCoins(input.toLocaleLowerCase());
    }

    return (
        <header className="header">
            <h1>Coin List</h1>
            <input type="text" placeholder="Buscar" onChange={inpuChange} />
        </header>
    )
}

export default Header;