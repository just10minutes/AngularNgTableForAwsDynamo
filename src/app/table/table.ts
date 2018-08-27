export interface GcDetails {
    cardId: String;
    expiryDate: String;
    balance: Number;
}

export interface SbAcntDetails {
    cardId: String;
    expiryDate: String;
    balance: Number;
}

export interface Sbt {
    uid: String;
    topupItemId: String;
    accountNumber: String;
    topupType:String;
    topupAmount:Number;
    topup_time:String;
    reference: String;
    lbAlert: String;
    geoAlert: String;
    lbLimit: String;
    email: String;
    mobile: String;
}

export interface Sbgcm {
    cardId: String;
    accountNumber: String;
    reference: String;
    lbAlert: String;
    geoAlert: String;
    lbLimit: String;
    email: String;
    mobile: String;
    addedOn: String;
    lastUpdated: String;
}

export interface Gsgl {
    stations: String;   
}