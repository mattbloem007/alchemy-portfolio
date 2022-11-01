import React from "react";
import PropTypes from "prop-types";
import Header from "../components/header/header";
//import Client from "./client";
import HeaderSidebar from "../components/header/headerSidebar";
import Footer from "../components/footer/footer";
import '../scss/style.scss';

const Layout = (props) => {
  console.log(";ayout props", props)
  let {children, cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart} = props
  return (
    <div className="main-wrapper active-dark">
        <Header cart={cart} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} onEmptyCart={onEmptyCart}/>
        <HeaderSidebar cart={cart} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} onEmptyCart={onEmptyCart} />
        <main>{children}</main>
        <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
