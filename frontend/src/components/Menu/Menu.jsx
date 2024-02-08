import { useState } from 'react';
import Wines from './Wine';
import Desserts from './Desserts';
import Discovery from './Discovery';
import Escale from './Escale';

function Menu() {
    const [selectedMenuItem, setSelectedMenuItem] = useState('Menu Découverte');

    const handleMenuItemClick = (menuItem) => {
        setSelectedMenuItem(menuItem);
    };

    const renderMenuContent = () => {
        switch (selectedMenuItem) {
            case 'Desserts':
                return <Desserts />;
            case 'Vins':
                return <Wines />;
            case 'Menu Découverte':
                return <Discovery />;
            case 'Menu Escale':
                return <Escale />;
            default:
                return <Discovery />;
        }
    };

    return (
        <div className="menu">
            <div className="menu__container">
                <h1 className="menu__title">Découvrez notre Menu</h1>
                <div className="menu__nav">
                    <menu className="menu__list">
                        <li className={selectedMenuItem === 'Menu Découverte' ? 'menu__item active '  : 'menu__item hover'} onClick={() => handleMenuItemClick('Menu Découverte')}>Menu Découverte</li>
                        <li className={selectedMenuItem === 'Boissons' ? 'menu__item active' : 'menu__item'} onClick={() => handleMenuItemClick('Boissons')}>Boissons</li>
                        <li className={selectedMenuItem === 'Desserts' ? 'menu__item active' : 'menu__item'} onClick={() => handleMenuItemClick('Desserts')}>Desserts</li>
                        <li className={selectedMenuItem === 'Vins' ? 'menu__item active' : 'menu__item'} onClick={() => handleMenuItemClick('Vins')}>Vins</li>
                        <li className={selectedMenuItem === 'Menu Escale' ? 'menu__item active' : 'menu__item hover escale'} onClick={() => handleMenuItemClick('Menu Escale')}>Menu Escale</li>
                    </menu>
                </div>
                <div className="menu__content">
                    {renderMenuContent()}
                </div>
            </div>
        </div>
    );
}

export default Menu;

