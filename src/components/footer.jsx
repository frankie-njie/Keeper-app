import React from "react";

function Footer() {
  const time = new Date();

  return (
    <footer>
      <p>copyright {time.getFullYear()}</p>
    </footer>
  );
}

export default Footer;
