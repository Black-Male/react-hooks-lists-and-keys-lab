import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linkData = links.map((link) => {
    return(<a key = {link} href={`#${link}`}>{link}</a>)
  })

  {/* display an <a> tag for each link here */}
  return <nav>{linkData}</nav>;
}

export default NavBar;
