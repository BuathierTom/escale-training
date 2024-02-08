import { useState, useEffect } from 'react';
import { getAllDiscovery } from "../../api/ApiDiscovery";

function Discovery() {
    const [discovery, setDiscovery] = useState([]);
    const [hoveredProduct, setHoveredProduct] = useState(null);
    const sourceImg = "../../../public/Img/img-discovery/";

    async function fetchDiscovery() {
        try {
            const result = await getAllDiscovery();
            setDiscovery(result);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchDiscovery();
    }, []);

    return (
        <div className="discovery template">
            <div className="discovery__content template__content">
                <div className="discovery__columns template__columns">
                    {['Entrée', 'Plat', 'Dessert'].map((label) => (
                        <div key={label} className="discovery__column template__column">
                            <h2>{label}</h2>
                            <div className="discovery__list template__list">
                                <table>
                                    <tbody>
                                        {discovery.filter(discover => discover.label === label).map((discover) => (
                                            <tr key={discover.id}>
                                                <td>
                                                    <img src={sourceImg + discover.imgLink + ".jpg"} className="discovery__img template__img"></img>                           
                                                </td>
                                                <td>
                                                    <span className="discovery__item template__item"
                                                           onMouseEnter={() => setHoveredProduct(discover)}
                                                           onMouseLeave={() => setHoveredProduct(null)}
                                                    >{discover.name}</span>
                                                    {hoveredProduct === discover && (
                                                        <div className="discovery__description template__description">{discover.description}</div>
                                                    )}
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
    );
}

export default Discovery;
