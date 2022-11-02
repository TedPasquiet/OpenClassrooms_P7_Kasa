import React, { Children } from 'react'
import Footer from './Footer/Footer'
import Header from "./Header/Header"

function Component({children}) {
  return (
    <>
        <Header />
        <main>{children}</main>
        <Footer />
    </>
  );
}

export default Component;
