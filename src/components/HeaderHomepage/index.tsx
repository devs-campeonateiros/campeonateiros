import { Header } from "./styles";
import { Link } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";

const HeaderHomepage = () => {
    return (
        <Header>
            <div className="divLogoH1">
                <img
                    src="https://s3-alpha-sig.figma.com/img/fa6c/50a5/e0600ca0622717887dc2520c9d46e962?Expires=1662940800&Signature=RRiEA6-wjON7Czys3JB0QBv-pixd0CXecejgZhNXffnCHE6H9Jf-JJBfqN5PcRSzKs7NK9tKy10QjLgNbbWIU2XrFQYfVg9W2Iw4mTYUVYhr8jdKTk7aZcAx3quGeCOEW8~UA39na2nFaLbS3UJMP2944x-yQSgPy8uCVcVHVcCS4ro4b1XiAxrcUc63vLfuimd1d4funmRjD4Jyd-flt8QU-Iq71j-hK7f6bwPd1CdGGK4HmlP~xevhCQcktALXXHV0KK63ASlOvkOJVxI98HCf7Gy5TqPsoaS2rrTtR0WeKm05YHhokG977ceIh1Pk0Xcfd9rqTWCUSbaUfPrWMg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    alt="Logo League Of Campeonateiros"
                />
                <h1>League Of Campeonateiros</h1>
            </div>
            <Link className="linkForLogin" to={"/login"}>
                <div className="divH2">
                    <BiUserCircle className="userIcon" />
                    <h2>Sign In / Sign Up</h2>
                </div>
            </Link>
        </Header>
    );
};

export default HeaderHomepage;
