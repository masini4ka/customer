import EmailPhone from './icons/EmailPhone.svg';
import Shipping from './icons/Shipping.svg';
import Invoice from './icons/Invoice.svg';
import OrderTable from './Table';
import './App.scss';
const Customer =
{
  name: "Anna",
  lastName: "Anne",
  pn: "19901230-4567",
  email: "annaanne@qliro.com",
  phone: "+46721234567",
  shippingAddressLine1: "Qlirovägen 123",
  shippingAddressLine2: "12345 Stockholm, Sweden",
  invoiceAddressLine1: "Qlirovägen 123",
  invoiceAddressLine2: "12345 Stockholm, Sweden"
};

function App() {
  return (
    <div className="App">
      <h1 className="font-face-gm">{Customer.name} {Customer.lastName} ({Customer.pn})</h1>
      <div className="second">
        <div className="cards">
          <div className="cards-item">
            <img src={EmailPhone} className="App-logo" alt="logo" />
            <span>Contact {Customer.name}</span>
            <p>{Customer.email}</p>
            <p>{Customer.phone}</p>
          </div>
          <div className="cards-item">
            <img src={Shipping} className="App-logo" alt="logo" />
            <span> Shipping Address</span>
            <p>{Customer.shippingAddressLine1}</p>
            <p>{Customer.shippingAddressLine2}</p>
          </div>
          <div className="cards-item">
            <img src={Invoice} className="App-logo" alt="logo" />
            <span>Invoice Address</span>
            <p>{Customer.invoiceAddressLine1}</p>
            <p>{Customer.invoiceAddressLine2}</p>
          </div>
        </div>
      </div>
      <div className="third">
        <h2>{Customer.name}'s orders</h2>
        <OrderTable name="wtf"></OrderTable>
      </div>
    </div>
  );
}

export default App;
