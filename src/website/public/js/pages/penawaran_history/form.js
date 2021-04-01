// Array untuk SelectBox
var bulan = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember"
];

var tahun = [];
var date = new Date();
var thn = date.getFullYear();
for (var i = thn-5; i <= thn ;i++) 
{
    tahun.push(i);
};

$(function(){

    //form filter
    $("#form").dxForm({
        height: "150px",
        width : "400px",
        items: [{
            label: {
                text: "Bulan"
            },
            dataField: "bulan",
            editorType: "dxSelectBox",
            editorOptions: {
                items: bulan,
                value: null,
                width: "100%"
            }
        }, 
        {
            label: {
                text: "Tahun"
            },
            dataField: "tahun",
            editorType: "dxSelectBox",
            editorOptions: {
                items: tahun,
                value: null,
                width: "100%"
            }
        }, 
        {
            itemType: "button",
            horizontalAlignment: "right",
            buttonOptions: {
                text: "Proses",
                type: "success",
                onClick: function() {
                }
            }
        }]

        // onFieldDataChanged: function (e) {
        //     var updatedField = e.dataField;
        //     var newValue = e.value;

        //     if(updatedField == "bulan") {
        //         if(newValue == "Januari") {
        //             newValue = 1;
        //         }
        //         else if(newValue == "Februari") {
        //             newValue = 2;
        //         }
        //         else if(newValue == "Maret") {
        //             newValue = 3;
        //         }
        //         else if(newValue == "April") {
        //             newValue = 4;
        //         }
        //         else if(newValue == "Mei") {
        //             newValue = 5;
        //         }
        //         else if(newValue == "Juni") {
        //             newValue = 6;
        //         }
        //         else if(newValue == "Juli") {
        //             newValue = 7;
        //         }
        //         else if(newValue == "Agustus") {
        //             newValue = 8;
        //         }
        //         else if(newValue == "September") {
        //             newValue = 9;
        //         }
        //         else if(newValue == "Oktober") {
        //             newValue = 10;
        //         }
        //         else if(newValue == "November") {
        //             newValue = 11;
        //         }
        //         else if(newValue == "Desember") {
        //             newValue = 12;
        //         }
        //     }

        //     if(updatedField == "tahun") {
        //         tempValue = Number(newValue);
        //         newValue = Number(tempValue);
        //     }

        //     // Event handling commands go here
        //     parameter_temp[updatedField] = newValue;
        //     console.log(parameter_temp[updatedField]);
        // }
    }).dxForm("instance");

    //datagrid
    $("#dataGrid").dxDataGrid({
        //datasource

        //column items
        columns: [
        {
            dataField: "idkebutuhan",
            caption: "ID Kebutuhan", 
            dataType: "string"

        },
        {
            dataField: "idpenawaran",
            caption: "ID Penawaran", 
            dataType: "string"
        },
        {
            dataField: "kodevendor",
            caption: "Kode Vendor", 
            dataType: "string"

        },
        {
            dataField: "namavendor",
            caption: "Nama Vendor", 
            dataType: "string"
        },
        {
            dataField: "deskripsi",
            caption: "Deskripsi", 
            dataType: "string"
        },
        {
            dataField: "hargatotal",
            caption: "Harga Total",
            format: { style: "currency", currency: "IDR", useGrouping: true }
        },
        {
            dataField: "createddate",
            caption: "Created Date", 
            dataType: "date"
        },
        {
            dataField: "status",
            caption: "Status", 
            dataType: "string"
        },
        {
            type: "buttons",
            width: 110,
            caption: "Surat Penawaran",
            buttons: [
            {
                hint: "Surat Penawaran",
                type: "success",
                text: "Lihat PDF",
                // icon: "repeat",
                visible:true,
                onClick: function(e) {
                }
            }]
        }

        ],
        //selesai column

        //settings
        allowColumnResizing: true,
        columnAutoWidth: true,
        // filterRow: { visible: true, height: 50 },
        searchPanel: { visible: true },
        showBorders: true,
        showColumnLines: true,
        showRowLines: true,
        rowAlternationEnabled: true,
        wordWrapEnabled: true,

        //paging
        paging: {
            pageSize: 5
        },
        pager: {
            showPageSizeSelector: true,
            allowedPageSizes: [5, 10, 20],
            showInfo: true
        },


        //export excel
        export: {
            enabled: true
        },
        onExporting: function(e) { 
            const workbook = new ExcelJS.Workbook(); 
            const worksheet = workbook.addWorksheet("Main sheet"); 
            DevExpress.excelExporter.exportDataGrid({ 
                worksheet: worksheet, 
                component: e.component,
            }).then(function() {
                workbook.xlsx.writeBuffer().then(function(buffer) { 
                    saveAs(new Blob([buffer], { type: "application/octet-stream" }), "Penawaran.xlsx"); 
                }); 
            }); 
            e.cancel = true; 
        }
    });

   
    


    

})

 