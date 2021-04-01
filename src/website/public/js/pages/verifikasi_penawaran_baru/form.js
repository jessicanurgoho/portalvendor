//data untuk lookup
var status = ["Belum Validasi", "Disetujui", "Ditolak"]
$(function(){

    //datagrid
    $("#dataGrid").dxDataGrid({
        //datasource

        //editing
        editing: {
            mode: "form",
            allowUpdating: true
        },

        //column items
        columns: [
        {
            dataField: "idkebutuhan",
            caption: "ID Kebutuhan", 
            dataType: "string",
            allowEditing: false

        },
        {
            dataField: "idpenawaran",
            caption: "ID Penawaran", 
            dataType: "string",
            allowEditing: false
        },
        {
            dataField: "kodevendor",
            caption: "Kode Vendor", 
            dataType: "string",
            allowEditing: false

        },
        {
            dataField: "namavendor",
            caption: "Nama Vendor", 
            dataType: "string",
            allowEditing: false
        },
        {
            dataField: "deskripsi",
            caption: "Deskripsi", 
            dataType: "string",
            allowEditing: false
        },
        {
            dataField: "hargatotal",
            caption: "Harga Total",
            format: { style: "currency", currency: "IDR", useGrouping: true },
            allowEditing: false
        },
        {
            dataField: "createddate",
            caption: "Created Date", 
            dataType: "date",
            allowEditing: false
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
        },
        {
            dataField: "status",
            caption: "Status", 
            width: 125,
            lookup: {
                dataSource: status
            }
        },
        {
            dataField: "alasantolak",
            caption: "Alasan Tolak", 
            dataType: "string",
            formItem: {
                colSpan: 2,
                editorType: "dxTextArea",
                editorOptions: {
                    height: 100
                }
            }
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

 