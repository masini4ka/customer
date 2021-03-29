import { PaymentProvider } from "./Table";

export interface orderType {
    from: string,
    id: string,
    date: string,
    store: string,
    provider: PaymentProvider,
    countryCode: string,
    payment_method: string,
    status: string,
    amount: number
}
export const Customer =
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

export const customerOrders: orderType[] = [
    {
        from: 'Online',
        id: '1234567890',
        date: '05 maj, 12:33',
        store: 'Butik x',
        provider: PaymentProvider.Qliro,
        countryCode: "gb",
        payment_method: 'Invoice',
        status: 'Paid',
        amount: 1
    },
    {
        from: 'In-Store',
        id: '1234567890',
        date: '16 maj, 12:33',
        store: 'Butik x',
        provider: PaymentProvider.Visa,
        countryCode: "sv",
        payment_method: 'Card, •••• 1234',
        status: 'In-Progress',
        amount: 2
    },
    {
        from: 'Manual',
        id: '1234567890',
        date: '16 maj, 12:33',
        store: 'Butik x',
        provider: PaymentProvider.AmericanExpress,
        countryCode: "no",
        payment_method: 'Card, •••• 1234',
        status: 'In-Progress',
        amount: 3
    },
    {
        from: 'In-Store',
        id: '1334567890',
        date: '16 maj, 12:33',
        store: 'Butik x',
        provider: PaymentProvider.Visa,
        countryCode: "gb",
        payment_method: 'Card, •••• 1234',
        status: 'In-Progress',
        amount: 4
    },
    {
        from: 'Manual',
        id: '1234367890',
        date: '16 maj, 12:33',
        store: 'Butik x',
        provider: PaymentProvider.PayPal,
        countryCode: "sv",
        payment_method: 'PayPal',
        status: 'Failed',
        amount: 5
    },
    {
        from: 'In-Store',
        id: '1234555590',
        date: '16 maj, 12:33',
        store: 'Butik x',
        provider: PaymentProvider.Trustly,
        countryCode: "no",
        payment_method: 'Trustly',
        status: 'Failed',
        amount: 6
    },
    {
        from: 'In-Store',
        id: '1234343890',
        date: '16 maj, 12:33',
        store: 'Butik x',
        provider: PaymentProvider.Trustly,
        countryCode: "no",
        payment_method: 'Trustly',
        status: 'Paid',
        amount: 7
    },
    {
        from: 'In-Store',
        id: '12345676768',
        date: '16 maj, 12:33',
        store: 'Butik x',
        provider: PaymentProvider.Trustly,
        countryCode: "sv",
        payment_method: 'Trustly',
        status: 'Paid',
        amount: 8
    },
    {
        from: 'In-Store',
        id: '1234564540',
        date: '16 maj, 12:33',
        store: 'Butik x',
        provider: PaymentProvider.Trustly,
        countryCode: "gb",
        payment_method: 'Trustly',
        status: 'Paid',
        amount: 9
    },
    {
        from: 'In-Store',
        id: '1234565789',
        date: '16 maj, 12:33',
        store: 'Butik x',
        provider: PaymentProvider.Trustly,
        countryCode: "no",
        payment_method: 'Trustly',
        status: 'Paid',
        amount: 10
    },
    {
        from: 'In-Store',
        id: '1234563789',
        date: '16 maj, 12:33',
        store: 'Butik x',
        provider: PaymentProvider.Trustly,
        countryCode: "no",
        payment_method: 'Trustly',
        status: 'Paid',
        amount: 11
    },
    {
        from: 'In-Store',
        id: '1234567899',
        date: '16 maj, 12:33',
        store: 'Butik x',
        provider: PaymentProvider.Trustly,
        countryCode: "no",
        payment_method: 'Trustly',
        status: 'Paid',
        amount: 12
    },
    {
        from: 'Online',
        id: '123456789035',
        date: '05 maj, 12:33',
        store: 'Butik x',
        provider: PaymentProvider.Qliro,
        countryCode: "gb",
        payment_method: 'Invoice',
        status: 'Paid',
        amount: 13
    },
    {
        from: 'In-Store',
        id: '12345678901',
        date: '16 maj, 12:33',
        store: 'Butik x',
        provider: PaymentProvider.Trustly,
        countryCode: "no",
        payment_method: 'Trustly',
        status: 'Paid',
        amount: 14
    },
    {
        from: 'Online',
        id: '12345673413',
        date: '16 maj, 12:33',
        store: 'Butik x',
        provider: PaymentProvider.Trustly,
        countryCode: "no",
        payment_method: 'Trustly',
        status: 'Paid',
        amount: 15
    }

];