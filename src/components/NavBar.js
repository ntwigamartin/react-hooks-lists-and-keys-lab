import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linkElement = links.map(link=>{
    return <a href={"#"+link} key={link} >{link}</a>
  })
  return <nav>{linkElement/* display an <a> tag for each link here */}</nav>;
}

export default NavBar;
