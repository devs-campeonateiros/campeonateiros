import { Link } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { useContext } from "react";

import { Header } from "./styles";
import { GlobalContext } from "../../context/GlobalContext";

const HeaderHomepage = () => {
  const userId = window.localStorage.getItem("@Campeonateiros-id");

  const { user } = useContext(GlobalContext);

  return (
    <Header>
      <div className="divLogoH1">
        <img
          src="https://s3-alpha-sig.figma.com/img/fa6c/50a5/e0600ca0622717887dc2520c9d46e962?Expires=1662940800&Signature=RRiEA6-wjON7Czys3JB0QBv-pixd0CXecejgZhNXffnCHE6H9Jf-JJBfqN5PcRSzKs7NK9tKy10QjLgNbbWIU2XrFQYfVg9W2Iw4mTYUVYhr8jdKTk7aZcAx3quGeCOEW8~UA39na2nFaLbS3UJMP2944x-yQSgPy8uCVcVHVcCS4ro4b1XiAxrcUc63vLfuimd1d4funmRjD4Jyd-flt8QU-Iq71j-hK7f6bwPd1CdGGK4HmlP~xevhCQcktALXXHV0KK63ASlOvkOJVxI98HCf7Gy5TqPsoaS2rrTtR0WeKm05YHhokG977ceIh1Pk0Xcfd9rqTWCUSbaUfPrWMg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          alt="Logo League Of Campeonateiros"
        />
        <h1>League Of Campeonateiros</h1>
      </div>
      {userId ? (
        <Link className="linkForLogin" to={"/dashboard"}>
          <div className="divH2">
            <img src={user.url_image} alt={user.name} className="userIcon" />
            <h2>{user.name}</h2>
          </div>
        </Link>
      ) : (
        <Link className="linkForLogin" to={"/login"}>
          <div className="divH2">
            <BiUserCircle className="userIcon" />
            <h2>Logar / Cadastrar </h2>
          </div>
        </Link>
      )}
    </Header>
  );
};

export default HeaderHomepage;
