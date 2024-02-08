import { getAllDesserts } from "../../api/ApiDesserts";
import { useState, useEffect } from 'react';


function Desserts() {
    const [desserts, setDesserts] = useState([]);
    const sourceImg = "../../../public/Img/img-desserts/";

    async function fetchDesserts() {
        try {
            const result = await getAllDesserts();
            setDesserts(result);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchDesserts();
    }, []);



    return (
        <>
            <div className="desserts template">
                <div className="desserts__content template__content">
                    <div className="desserts__columns template__columns">
                        {['Desserts maison', 'Crêpes maison', 'Glaces artisanales'].map((label) => (
                            <div key={label} className="desserts__column template__column">
                                <h2>{label}</h2>
                                <div className="desserts__list template__list">
                                    <table>
                                        <tbody>
                                            {desserts.filter(dessert => dessert.label === label).map((dessert) => (
                                                <tr key={dessert.id}>
                                                    <td>
                                                        <img src={sourceImg + dessert.imgLink + ".jpg"} className="desserts__img template__img" />
                                                    </td>
                                                    <td>
                                                        <span className="desserts__item template__item">{dessert.name}</span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
        </>
    )
    
}
export default Desserts;