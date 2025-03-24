namespace businessSpace;

using {masterSpace as master} from './master';


entity Branches {
    key idBranch : UUID;
    name          : String;
    location      : String;
    street        : String;
}

entity Cars {
    key idCar  : UUID;
    brand      : String;
    model      : String;
    year       : Integer;
    patent     : String;
    basePrice  : Decimal(10,2);
    status     : Association[1] to master.StatusCard;
    branch     : Association to Branches;
}

entity Customers {
    key idCustomer  : UUID;
    firstName       : String;
    lastName        : String;
    customerType    : Association to master.TypeClient;
    email           : String;
    phone           : String;
}

entity Sellers {
    key idSeller  : UUID;
    firstName     : String;
    lastName      : String;
    branch        : Association to Branches;
}

entity Sales {
    key idSale     : UUID;
    customer       : Association to Customers;
    seller         : Association to Sellers;
    car            : Association to Cars;
    finalPrice     : Decimal(10,2);
    saleDate       : Date;
    paymentMethod  : Association to master.MethodOfPayment;
}

entity Financing {
    key idFinancing     : UUID;
    sale                : Association to Sales;
    totalAmount         : Decimal(10,2);
    installments        : Integer;
    interest            : Decimal(5,2);
    status              : Association to master.QuotaStatus;
    installmentDetails  : Composition of many InstallmentDetails on installmentDetails.financing = $self;
}

entity InstallmentDetails {
    key idInstallment   : UUID;
    financing           : Association to Financing;
    installmentNumber   : Integer;
    amount              : Decimal(10,2);
    dueDate             : Date;
    status              : Association to master.QuotaStatus;
}

entity PostSaleServices {
    key idService    : UUID;
    car              : Association to Cars;
    customer         : Association to Customers;
    serviceType      : Association to master.TypeService;
    date             : Date;
    cost             : Decimal(10,2);
}
