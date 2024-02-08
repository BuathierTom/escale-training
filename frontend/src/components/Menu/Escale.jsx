import { getAllEscale } from "../../api/ApiEscale";
import { useState, useEffect } from 'react';


function Escale() {
    const [escale, setEscale] = useState([]);
    const sourceImg = "../../../public/Img/img-escale/";

    async function fetchDiscovery() {
        try {
            const result = await getAllEscale();
            setEscale(result);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchDiscovery();
    }, []);



    return (
        <>
            <div className="discovery template">
                <div className="discovery__content template__content">
                    <div className="discovery__columns template__columns">
                        {['Entrées', 'Plats', 'Desserts'].map((label) => (
                            <div key={label} className="discovery__column template__column">
                                <h2>{label}</h2>
                                <div className="discovery__list template__list">
                                    <table>
                                        <tbody>
                                            {escale.filter(escales => escales.label === label).map((escales) => (
                                                <tr key={escales.id}>
                                                    <td>
                                                        <img src={sourceImg + escales.imgLink + ".jpg"} className="discovery__img template__img" />
                                                    </td>
                                                    <td>
                                                        <span className="discovery__item template__item">{escales.name}</span>
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
export default Escale;