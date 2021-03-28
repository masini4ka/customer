// import MaterialTable from 'material-table';
import './Table.scss';
import uk from './icons/uk 1.svg';
import arrow from './icons/corner-down-right.svg';
import Qliro from './icons/Qliro.svg';
import sv from './icons/Svenska.svg';
import visa from './icons/VISA.png';
// const classNames = require('classnames');

// let circleClasses = classNames(
//     'circle',
//     {
//         'progress': this.props.showBulkActions,
//         'hidden': !this.props.showBulkActions
//     }
// );

let orders = [
    {
        from: 'Online',
        id: '1234567890',
        date: '05 maj, 12:33',
        store: 'Butik x',
        payment_method: 'Invoice',
        status: 'Paid',
        amount: 2160
    },
    {
        from: 'In-Store',
        id: '1234567890',
        date: '16 maj, 12:33',
        store: 'Butik x',
        payment_method: 'Card, •••• 1234',
        status: 'In-Progress',
        amount: 2160
    },
    {
        from: 'Manual',
        id: '1234567890',
        date: '16 maj, 12:33',
        store: 'Butik x',
        payment_method: 'Card, •••• 1234',
        status: 'In-Progress',
        amount: 2160
    },
    {
        from: 'Manual',
        id: '1234567890',
        date: '16 maj, 12:33',
        store: 'Butik x',
        payment_method: 'Card, •••• 1234',
        status: 'Failed',
        amount: 2160
    }
];
export default function OrderTable(props: any) {
    return <>
        <table className="zui-table zui-table-horizontal">
            <thead>
                <tr>
                    <th className="way"></th>
                    <th>Order number</th>
                    <th>Created</th>
                    <th>Store</th>
                    <th>Payment method</th>
                    <th>Payment status</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="way">Online</td>
                    <td className="order">1234567890<img src={arrow}></img></td>
                    <td>05 maj, 12:33</td>
                    <td><img src={uk}></img>Butik x</td>
                    <td className="method"><img src={Qliro}></img>Invoice</td>
                    <td><div className="circle"></div>Paid</td>
                    <td className="amount">2160 kr</td>
                </tr>
                <tr>
                    <td className="way">Online</td>
                    <td className="order">1234567890<img src={arrow}></img></td>
                    <td>16 maj, 12:33</td>
                    <td><img src={sv}></img>Butik x</td>
                    <td className="method"><img src={visa}></img>Card, •••• 1234</td>
                    <td><div className="circle"></div>In progress</td>
                    <td className="amount">2160 kr</td>
                </tr>
                {orders.map(function (item) {
                    return <tr>
                        <td><p className={`way ${item.from}`}>{item.from}</p></td>
                        <td className="order">{item.id}<img src={arrow}></img></td>
                        <td>{item.date}</td>
                        <td><img src={sv}></img>{item.store}</td>
                        <td className="method"><img src={visa}></img>{item.payment_method}</td>
                        <td><div className={`circle ${item.status}`}></div>{item.status}</td>
                        <td className="amount">{item.amount} kr</td>
                    </tr>;
                })}
            </tbody>
        </table>
        {/* <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <MaterialTable
            style={{ padding: '0 8px' }}
            options={{
                search: false,
                showTitle: false,
                headerStyle: {
                    color: '#999999'
                }
            }}
            columns={
                [
                    {
                        title: "",
                        field: 'category',
                        cellStyle: {

                        }
                    },
                    {
                        title: "Order number",
                        field: 'order',
                        cellStyle: {
                            color: 'rgba(10, 143, 115, 1)'
                        }
                    },
                    { title: "Created", field: 'creationDate' },
                    { title: "Store", field: 'store' },
                    { title: "Payment method", field: 'store' },
                    { title: "Payment method", field: 'store' },
                    { title: "Amount", field: 'amount', currencySetting: { currencyCode: "kr" } },
                ]}
            data={[{ category: 'online', order: '1234567890', creationDate: '05 maj, 12:33', store: 1987, amount: 3890 }]}
        /> */}
    </>;
}
