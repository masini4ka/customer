import EmailPhone from './icons/EmailPhone.svg';
import Shipping from './icons/Shipping.svg';
import Invoice from './icons/Invoice.svg';
import OrderTable from './Table';
import { customerOrders } from './data';
import { Customer } from './data';
import './App.scss';


function App() {
  return (
    <div className="App">
      <h1 className="header-info">{Customer.name} {Customer.lastName} ({Customer.pn})</h1>
      <div className="customer-section">
        <div className="cards">
          <div className="cards-item">
            <img src={EmailPhone} alt="email" />
            <span>Contact {Customer.name}</span>
            <p>{Customer.email}</p>
            <p>{Customer.phone}</p>
          </div>
          <div className="cards-item">
            <img src={Shipping} alt="shipping" />
            <span> Shipping Address</span>
            <p>{Customer.shippingAddressLine1}</p>
            <p>{Customer.shippingAddressLine2}</p>
          </div>
          <div className="cards-item">
            <img src={Invoice} alt="invoice" />
            <span>Invoice Address</span>
            <p>{Customer.invoiceAddressLine1}</p>
            <p>{Customer.invoiceAddressLine2}</p>
          </div>
        </div>
      </div>
      <div className="orders-section">
        <h2>{Customer.name}'s orders</h2>
        <OrderTable orders={customerOrders}></OrderTable>
      </div>
    </div>
  );
}

export default App;
