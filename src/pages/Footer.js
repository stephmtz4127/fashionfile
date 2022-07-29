import React from "react";
import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import FooterTwo from "./FooterTwo";
// import { Icon, Button } from "semantic-ui-react";

const Footer = () => {
  return (
    <>
      <div className="footerCont">
        <div className="footerSocial">
          <label className="footerTextSocial" style={{ pointerEvents: "none" }}>
            FOLLOW US
          </label>
          <InstagramIcon className="footerTextSocial" />
          <FacebookIcon className="footerTextSocial" />
          <PinterestIcon className="footerTextSocial" />
          <TwitterIcon className="footerTextSocial" />
          {/* <div style={{ display: "flex" }}>
            <input
              className="footInput"
              placeholder="Subscribe"
              style={{ flex: 1 }}
            ></input>
            <Button icon className="mailBtnCont">
              <Icon name="mail outline" className="footBtnIcon" />
            </Button>
          </div> */}
        </div>
        <FooterTwo />
      </div>
    </>
  );
};

export default Footer;

// const navPages = ["/", "/sell", "/following", "/account", "/shoppingBag"];

// const Footer = () => {
//   const location = useLocation();
//   return (
//     <>
//       {navPages.includes(
//         location.pathname && (
//           <div className="footerCont">
//             <div className="footerSocial">
//               <label
//                 className="footerTextSocial"
//                 style={{ pointerEvents: "none" }}
//               >
//                 FOLLOW US
//               </label>
//               <InstagramIcon className="footerTextSocial" />
//               <FacebookIcon className="footerTextSocial" />
//               <PinterestIcon className="footerTextSocial" />
//               <TwitterIcon className="footerTextSocial" />
//               <div style={{ display: "flex" }}>
//                 <input
//                   className="footInput"
//                   placeholder="Subscribe"
//                   style={{ flex: 1 }}
//                 ></input>
//                 <button className="footBtn">
//                   <MailOutlineIcon />
//                 </button>
//               </div>
//             </div>
//             <FooterTwo />
//           </div>
//         )
//       )}
//     </>
//   );
// };

// export default Footer;
