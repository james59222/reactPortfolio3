import React from "react";
import image from "./githubLogo.png";
import image2 from "./linkedInLogo.png";
//links to linkein and github
function Footer() {
  return (
    <div className ="Footer">
    <div>
      <a href="https://github.com/james59222"><img src={image} alt="Github Logo" class="thumbnail" height="200" width="200" /></a>
        {/* <li>linkedIn: www.linkedin.com/in/james-pierce-217a9879</li> */}
        <a href="http://www.linkedin.com/in/james-pierce-217a9879"><img src={image2} alt="LinkedIn Logo" class="thumbnail" height="200" width="200" /></a>
    </div>
    </div>
  );
}

export default Footer;