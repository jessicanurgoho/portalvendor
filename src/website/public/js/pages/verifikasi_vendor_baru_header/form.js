$(function(){

    //datagrid
    $("#dataGrid").dxDataGrid({

        dataSource: vendorbaru,
        //column items
        columns: [
        {
            dataField: "tanggalpengajuan",
            caption: "Tanggal Pengajuan", 
            dataType: "string",
            allowEditing: false

        },
        {
            dataField: "nama",
            caption: "Nama", 
            dataType: "string",
            allowEditing: false
        },
        {
            dataField: "alamat",
            caption: "Alamat", 
            dataType: "string",
            allowEditing: false

        },
        {
            dataField: "namasales",
            caption: "Nama Sales", 
            dataType: "string",
            allowEditing: false
        },
        {
            dataField: "notelpsales",
            caption: "No Telp Sales", 
            dataType: "string",
            allowEditing: false
        },
        {
            type: "buttons",
            width: 110,
            caption: "Lihat Detail",
            buttons: [
            {
                hint: "Lihat Detail",
                type: "success",
                text: "Lihat",
                // icon: "repeat",
                visible:true,
                onClick: function(e) {
                    window.location.href = '/verifikasi-vendor-baru-detail';
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
                    saveAs(new Blob([buffer], { type: "application/octet-stream" }), "Vendor yang perlu di verifikasi.xlsx"); 
                }); 
            }); 
            e.cancel = true; 
        }
    });

   
    


    

})

 