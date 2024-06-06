import {MenuContainer} from "./Styled";
import SocialMedia from "../../../school/logo-social-media.png";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineNotifications } from "react-icons/md";
import { RxExit } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
export default function Menu({
    logo
}) {
    const navegacion = useNavigate();
    const id = {
        ecommerce: "66febe3a-9849-495a-b7da-aace14720f47",
        personal_development: "a15451b5-7176-4998-a22d-235e9183ba8d",
        foreing_exchange: "95025c1b-e976-4bb6-96ca-d6e8f770afcb",
        stock_and_crypto: "ec4b3a61-4975-400e-bfee-7ed5ce9fd9ef",
        social_media: "f9df2ad9-dbc1-4592-af89-2f48db9f0df5",
        travel_life: "0dd8daf2-b4fd-4cf3-8000-7c4810f411b5"
    }

    return (
       <MenuContainer>
       <nav className="navbar-schedules">
            {id.ecommerce && (
                <>
                    <div
                        style={{ cursor: "pointer" }}
                    onClick={ () => navegacion(`/educators-and-schedules`) } className="schedules-logo">
                        <img src={require(`../../../${logo}`) } alt="social media logo" title="social media logo" />
                    </div>
                  
                    <div className="schedules-actions">
                        <div className="schedules-select">
                            <select>
                                <option value="">America/Bogota</option>
                            </select>
                            <button>Academia</button>
                        </div>
                        <div className="schedules-options">
                            <IoHomeOutline
                                style={{cursor: "pointer"}}
                                onClick={() => navegacion(`/Welcome2d`)}
                            />
                            <MdOutlineNotifications />
                            <RxExit />
                        </div>
                    </div>
                </>
            ) }
       </nav>
       </MenuContainer>
    )
}