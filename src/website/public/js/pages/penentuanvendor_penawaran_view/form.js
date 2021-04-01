$(function(){

    //form filter
    $("#form").dxForm({
        height: "150px",
        width : "400px",
        items: [{
            label: {
                text: "ID Kebutuhan"
            },
            dataField: "idkebutuhan",
            editorOptions: {
                disabled: true
            }
        }]
    }).dxForm("instance");

    //datagrid
    $("#dataGrid").dxDataGrid({
        //datasource
        dataSource: penawarann,
        //column items
        columns: [
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
            type: "buttons",
            width: 110,
            caption: "Nilai",
            buttons: [
            {
                hint: "Nilai",
                type: "success",
                text: "Nilai",
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
        filterRow: { visible: true, height: 50 },
        // searchPanel: { visible: true },
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
        }
    });

   
    


    

})

 