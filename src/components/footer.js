import React from "react";
function Footer(props) {
  return (
    <div className="footer">
      <img className="img-footer" src={props.imgFooter} alt="footer-img" />
      <p className="text-footer">{props.titleFooter}</p>
    </div>
  );
}

export default Footer;
