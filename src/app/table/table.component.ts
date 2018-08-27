import { Component, OnInit } from '@angular/core';
import { TableService } from './table.service';
import { GcDetails, SbAcntDetails, Sbt , Sbgcm, Gsgl } from './Table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  details: GcDetails[];
  sbAcntDetails: SbAcntDetails[];
  sbt: Sbt[];
  sbgcm : Sbgcm[];
  gsgl : Gsgl[];
  buttonClickedGcd: boolean = true;
  buttonClickedSbad: boolean = false;
  buttonClickedSbt: boolean = false;
  buttonClickedSbgcm: boolean = false;
  buttonClickedGsgl: boolean = false;
  constructor( private tservice: TableService) { }

  onButtonClickGcd() {
        this.buttonClickedGcd = !this.buttonClickedGcd;
        this.buttonClickedSbad = false;
        this.buttonClickedSbt = false;
        this.buttonClickedSbgcm = false;
        this.buttonClickedGsgl  = false;

    }

     onButtonClickSbad() {
        this.buttonClickedGcd = false;
        this.buttonClickedSbad = !this.buttonClickedSbad;
        this.buttonClickedSbt = false;
        this.buttonClickedSbgcm = false;
        this.buttonClickedGsgl  = false;

    }

     onButtonClickSbt() {
        this.buttonClickedGcd = false;
        this.buttonClickedSbad = false;
        this.buttonClickedSbt = !this.buttonClickedSbt;
        this.buttonClickedSbgcm = false;
        this.buttonClickedGsgl  = false;

    }

     onButtonClickSbgcm() {
        this.buttonClickedGcd = false;
        this.buttonClickedSbad = false;
        this.buttonClickedSbt = false;
        this.buttonClickedSbgcm = !this.buttonClickedSbgcm;
        this.buttonClickedGsgl  = false;

    }

     onButtonClickGsgl() {
        this.buttonClickedGcd = false;
        this.buttonClickedSbad = false;
        this.buttonClickedSbt = false;
        this.buttonClickedSbgcm = false;
        this.buttonClickedGsgl  = !this.buttonClickedGsgl;

    }

    refreshPage(){
      window.location.reload()
    }

  ngOnInit() {
      this
        .tservice
        .getDetails()
        .subscribe((data: GcDetails[]) => {
          this.details = data;
      });

      this
        .tservice
        .getSbAcntDetails()
        .subscribe((data: SbAcntDetails[]) => {
          this.sbAcntDetails = data;
      });

      this
        .tservice
        .getSbt()
        .subscribe((data: Sbt[]) => {
          this.sbt = data;
      });

      this
        .tservice
        .getSbgcm()
        .subscribe((data: Sbgcm[]) => {
          this.sbgcm = data;
      });

       this
        .tservice
        .getGsgl()
        .subscribe((data: Gsgl[]) => {
          this.gsgl = data;
      });


  }

//Everything related to Gautrain Card Details Start
        settings = {
          add:{
          confirmCreate:true
          },
          edit:{
          confirmSave:true
          },  
          delete :{
        confirmDelete: true
          },  
          columns: {
            cardId: {
              title: 'cardId'
              //filter: false,
              //editable: false,
              //addable: false
            },
            expiryDate: {
              title: 'expiryDate'
            },
            balance: {
              title: 'balance'
            }
          }
        };



      addRecord(event) {
          var data = {"cardId" : event.newData.cardId,
                      "expiryDate" : event.newData.expiryDate,
                      "balance" : event.newData.balance
                      };
          this.tservice.addRecord(data).subscribe((response) => {
              console.log(response);
              event.confirm.resolve(event.newData);
          });
        }

      updateRecord(event) {
          var data = {
                      "expiryDate" : event.newData.expiryDate,
                      "balance" : event.newData.balance
                    };
          this.tservice.editRecord(event.newData.cardId,data).subscribe((response) => {
              console.log(response);
              event.confirm.resolve(event.newData);
          });

        }

        deleteRecord(event){
          this.tservice.deleteRecord(event.data.cardId).subscribe((response) => {
              console.log(response);
              event.confirm.resolve(event.source.data);
          });          
        }
//Everything related to Gautrain Card Details End
//Everything related to SB Account Details Details Start

 settingsSbAcntDetails = {
          add:{
          confirmCreate:true
          },
          edit:{
          confirmSave:true
          },  
          delete :{
        confirmDelete: true
          },  
          columns: {
            accountNumber: {
              title: 'accountNumber'
              //filter: false,
              //editable: false,
              //addable: false
            },
            latestBalance: {
              title: 'latestBalance'
            },
            currentBalance: {
              title: 'currentBalance'
            },
            beneficiaryCount: {
              title: 'beneficiaryCount'
            },
            accountKey: {
              title: 'accountKey'
            },
            accountType: {
              title: 'accountType'
            },  
          }
        };


      addRecordSbAcntDetails(event) {
          var data = {"accountNumber" : event.newData.accountNumber,
                      "latestBalance" : event.newData.latestBalance,
                      "currentBalance" : event.newData.currentBalance,
                      "beneficiaryCount" : event.newData.beneficiaryCount,
                      "accountKey" : event.newData.accountKey,
                      "accountType" : event.newData.accountType
                      };
          this.tservice.addRecordSbAcntDetails(data).subscribe((response) => {
              console.log(response);
              event.confirm.resolve(event.newData);
          });
        }

      updateRecordSbAcntDetails(event) {
          var data = {
                      "latestBalance" : event.newData.latestBalance,
                      "currentBalance" : event.newData.currentBalance,
                      "beneficiaryCount" : event.newData.beneficiaryCount,
                      "accountKey" : event.newData.accountKey,
                      "accountType" : event.newData.accountType
                    };
          this.tservice.editRecordSbAcntDetails(event.newData.accountNumber,data).subscribe((response) => {
              console.log(response);
              event.confirm.resolve(event.newData);
          });

        }

        deleteRecordSbAcntDetails(event){
          this.tservice.deleteRecordSbAcntDetails(event.data.accountNumber).subscribe((response) => {
              console.log(response);
              event.confirm.resolve(event.source.data);
          });          
        }

//Everything related to SB Account Details Details End

//Everything related to SB Tranactions Start

settingsSbt = {
          add:{
          confirmCreate:true
           }, 
         delete :{
         confirmDelete: true
          },          
          columns: {
            uid: {
              title: 'uid',
              //filter: false,
              editable: false,
              addable: false
            },
            topupItemId: {
              title: 'topupItemId',
              editable: false,
            },
            accountNumber: {
              title: 'accountNumber',
              editable: false,
            },
            topupType: {
              title: 'topupType',
              editable: false,
            },
            topupAmount: {
              title: 'topupAmount',
              editable: false,
            },
            topup_time: {
              title: 'topup_time',
              editable: false,
              addable: false
            },  
            reference: {
              title: 'reference',             
            },
            lbAlert: {
              title: 'lbAlert',             
            },
            geoAlert: {
              title: 'geoAlert',             
            },
            lbLimit: {
              title: 'lbLimit',             
            },             
            email: {
              title: 'email',            
            },   
            mobile: {
              title: 'mobile',              
            },   
          }
        };

        addRecordSbt(event) {
          var data = {"topupItemId" : event.newData.topupItemId,
                      "accountNumber" : event.newData.accountNumber,
                      "topupType" : event.newData.topupType,
                      "topupAmount" : event.newData.topupAmount,
                      "reference" : event.newData.reference,
                      "lbAlert" : event.newData.lbAlert,
                      "geoAlert" : event.newData.geoAlert,
                      "lbLimit" : event.newData.lbLimit,
                      "email" : event.newData.email,
                      "mobile" : event.newData.mobile,                      

                      };
          this.tservice.addRecordSbt(data).subscribe((response) => {
              console.log(response);
              event.confirm.resolve(event.newData);
          });
        }

        deleteRecordSbt(event){
          this.tservice.deleteRecordSbt(event.data.uid).subscribe((response) => {
              console.log(response);
              event.confirm.resolve(event.source.data);
          });          
        }


//Everything related to SB Tranactions End

//Everything related to SB Gautrain Cards Meta Start

settingsSbgcm = { 
       add:{
          confirmCreate:true
           },  
        delete :{
         confirmDelete: true
          },               
          columns: {            
            accountNumber: {
              title: 'accountNumber',
              editable: false,
              //addable: false
            },
            cardId: {
              title: 'cardId',
              //filter: false,
              editable: false,
              //addable: false
            },
            reference: {
              title: 'reference',
              editable: false,
              //addable: false
            },
            lbAlert: {
              title: 'lbAlert',
              editable: false,
              //addable: false
            },
            geoAlert: {
              title: 'geoAlert',
              editable: false,
              //addable: false
            },
            lbLimit: {
              title: 'lbLimit',
              editable: false,
              //addable: false
            },             
            email: {
              title: 'email',
              editable: false,
              //addable: false
            },   
            mobile: {
              title: 'mobile',
              editable: false,
              //addable: false
            },   
            addedOn: {
              title: 'addedOn',
              editable: false,
              addable: false
            },   
            lastUpdated: {
              title: 'lastUpdated',
              editable: false,
              addable: false
            },  
          }
        };

        addRecordSbgcm(event) {
          var data = {"cardId" : event.newData.cardId,
                      "accountNumber" : event.newData.accountNumber,                      
                      "reference" : event.newData.reference,
                      "lbAlert" : event.newData.lbAlert,
                      "geoAlert" : event.newData.geoAlert,
                      "lbLimit" : event.newData.lbLimit,
                      "email" : event.newData.email,
                      "mobile" : event.newData.mobile,                      

                      };
          this.tservice.addRecordSbgcm(data).subscribe((response) => {
              console.log(response);
              event.confirm.resolve(event.newData);
          });
        };

        deleteRecordSbgcm(event){          
          this.tservice.deleteRecordSbgcm(event.data.accountNumber,event.data.cardId).subscribe((response) => {
              console.log(response);
              event.confirm.resolve(event.source.data);
          });          
        };

//Everything related to SB Gautrain Cards Meta End
//Everything related to Gautrain Station Details Start

settingsGsgl = { 
        add:{
          confirmCreate:true
           },
       edit:{
          confirmSave:true
        },  
        delete :{
         confirmDelete: true
          },               
          columns: {
            id: {
              title: 'id',
              //filter: false,
              editable: false,
              addable: false
            },            
            stations: {
              title: 'stations',
              //filter: false,
              //editable: false,
              //addable: false
            }
            
          }
      };

       addRecordGsgl(event) {
         console.log(event.newData)
         //var data = {"stations" : event.newData.stations }
         var jsondata = JSON.parse( event.newData.stations);
         console.log(jsondata);
          this.tservice.addRecordGsgl(jsondata).subscribe((response) => {
            
              console.log(response);
              event.confirm.resolve(event.newData);
          });
        };

        updateRecordGsgl(event) {
          var jsondata = JSON.parse( event.newData.stations);
          console.log(jsondata)
          this.tservice.editRecordGsgl(jsondata).subscribe((response) => {
              console.log(response);
              event.confirm.resolve(event.newData);
          });

        }

        deleteRecordGsgl(event){          
          this.tservice.deleteRecordGsgl().subscribe((response) => {
              console.log(response);
              event.confirm.resolve(event.source.data);
          });          
        };

//Everything related to Gautrain Station Details End


}
