import { Header, DivLogo } from "./style";
import logo from "./logo.png";

const SimpleHeader = () => {
    return (
        <Header>
            <DivLogo>
                <img src={logo} alt="Logo" />
                <h1>League of Campeonateiros</h1>
            </DivLogo>
        </Header>
    );
};
export default SimpleHeader;
