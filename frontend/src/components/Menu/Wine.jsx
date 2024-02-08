import {getAllWines} from "../../api/ApiWine";
import { useState, useEffect } from 'react';


function Wine() {
    const [wines, setWines] = useState([]);
    const sourceImg = "../../../public/Img/img-vines/";


    async function fetchWines() {
        try {
            const result = await getAllWines();
            setWines(result);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchWines();
    }, []);

    return (
        <>
            <div className="wine template">
                <div className="wine__content template__content">
                    <div className="wine__columns template__columns">
                        {['Vins Blancs', 'Vins Rouges'].map((label) => (
                            <div key={label} className="wine__column template__column">
                                <h2>{label}</h2>
                                <div className="wine__list template__list">
                                    <table>
                                        <tbody>
                                            {wines.filter(wine => wine.label === label).map((wine) => (
                                                <tr key={wine.id}>
                                                    <td>
                                                        <img src={sourceImg + wine.imgLink + ".jpg"} className="wine__img template__img" alt={wine.name} />
                                                    </td>
                                                    <td>
                                                        <span className="wine__item template__item">{wine.name}</span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        ))}
                        <div className="wine__column template__column">
                            <h2>Vins Rosés</h2>
                            <div className="wine__list template__list">
                                <table>
                                    <tbody>
                                        {wines.filter(wine => wine.label === 'Vins Rosés').map((wine) => (
                                            <tr key={wine.id}>
                                                <td>
                                                    <img src={sourceImg + wine.imgLink + ".jpg"} className="wine__img template__img" alt={wine.name} />
                                                </td>
                                                <td>
                                                    <span className="wine__item template__item">{wine.name}</span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <h2>Champagnes</h2>
                            <div className="wine__list template__list">
                                <table>
                                    <tbody>
                                            <tr >
                                                <td>
                                                    <img src={sourceImg + "bouteille" + ".jpg"} className="wine__img template__img" />
                                                </td>
                                                <td>
                                                    <span className="wine__item template__item"> 
                                                        BOUTEILLE DE CHAMPAGNE BRUT
                                                    </span>
                                                </td>
                                            </tr>
                                    
                                    </tbody>
                             
                                </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
    
}
export default Wine;