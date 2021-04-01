status = ["Aktif", "Terpilih", "Tidak Terpilih"];
$(function(){

    var form = $("#form").dxTextBox({
        dataField: "idkebutuhan",
        value: "KB0051",
        readOnly: true,
        hoverStateEnabled: false
    }).dxTextBox("instance");

    //datagrid atas
    $("#dataGridatas").dxDataGrid({
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
            dataField: "hargatotal",
            caption: "Harga Total",
            format: { style: "currency", currency: "IDR", useGrouping: true }
        },
        {
            dataField: "createddate",
            caption: "Created Date", 
            dataType: "date"
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
        wordWrapEnabled: true

    });

    //datagrid bawah
    $("#dataGridbawah").dxDataGrid({
        //datasource
        editing: {
            mode: "cell",
            allowUpdating: true
        },
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
            lookup:
            {
                dataSource: status,
                valueExpr:status
            }
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
                    window.location.href = "/surat-penawaran-pdf"
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
        wordWrapEnabled: true

    });

})


 