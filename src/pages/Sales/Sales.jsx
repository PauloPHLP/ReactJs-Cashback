import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getSales } from '../../redux/actions/salesActions';
import Navbar from '../../components/Navbar/Navbar';
import SalesList from '../../components/Sales/SalesList/SalesList';
import Footer from '../../components/Footer/Footer';
import './Sales.css';

const mapStateToProps = (state) => {
  return {
    sales: state.salesState.sales
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSales: (args) => dispatch(getSales(args))
  };
};

function Sales({ sales, getSales }) {
  useEffect(() => {
    getSales();
  }, []);

  return (
    <section className="hero is-fullheight">
      <Navbar />
      <SalesList salesList={sales} />
      <Footer />
    </section>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Sales);
