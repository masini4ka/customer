
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import arrow from './icons/corner-down-right.svg';

import gb from './icons/uk 1.svg';
import sv from './icons/sv.svg';
import no from './icons/no.svg';
import upsell from './icons/Upsell.svg';
import Qliro from './icons/Qliro.svg';
import visa from './icons/VISA.png';
import trustly from './icons/Trustly.svg';
import amex from './icons/AMEX.png';
import paypal from './icons/Paypal.png';
import { orderType } from './data';

import './Table.scss';

export enum PaymentProvider {
    Qliro,
    Visa,
    AmericanExpress,
    PayPal,
    Trustly
};

function getCountryIcon(countryCode: string) {
    switch (countryCode) {
        case 'no':
            return no;
        case 'sv':
            return sv;
        case 'gb':
            return gb;

    }
}

function getPaymentIcon(paymentProvider: PaymentProvider) {
    switch (paymentProvider) {
        case PaymentProvider.Qliro:
            return Qliro;
        case PaymentProvider.Visa:
            return visa;
        case PaymentProvider.Trustly:
            return trustly;
        case PaymentProvider.AmericanExpress:
            return amex;
        case PaymentProvider.PayPal:
            return paypal;
    }
}

export default function OrderTable(props: any) {
    const [offset, setOffset] = useState(0);
    const [data, setData] = useState([]);
    const [perPage] = useState(5);
    const [pageCount, setPageCount] = useState(0);

    const getData = () => {
        const data = props.orders;
        const slice = data.slice(offset, offset + perPage);
        setData(slice);
        setPageCount(Math.ceil(data.length / perPage));
    }
    const handlePageClick = (e: any) => {
        const selectedPage = e.selected;
        setOffset(selectedPage * perPage);
    };

    useEffect(() => {
        getData();
    }, [offset]);


    return <>
        <table className="wide-table wide-table-horizontal" id="ordersTable">
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
                {data.map(function (item: orderType) {
                    return <tr key={item.id}>
                        <td className="flex">
                            <p className={`way ${item.from}`}>{item.from}</p>
                            {item.upsell && (<img src={upsell} className="upsell"></img>)}
                        </td>
                        {/* <td className="method"><div className={`way ${item.from}`}><p>{item.from}</p><img src={upsell}></img></div></td> */}
                        <td className="order">{item.id}<img src={arrow}></img></td>
                        <td>{item.date}</td>
                        <td><img src={getCountryIcon(item.countryCode)}></img>{item.store}</td>
                        <td className="method"><img src={getPaymentIcon(item.provider)}></img>{item.payment_method}</td>
                        <td><div className={`circle ${item.status}`}></div>{item.status}</td>
                        <td className="amount">{item.amount} {item.currency}</td>
                    </tr>;
                })}
            </tbody>
        </table>
        <ReactPaginate
            previousLabel={"Back"}
            nextLabel={"Next"}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            activeClassName={"active"} />
    </>;
}