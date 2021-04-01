status = ["Aktif", "Terpilih", "Tidak Terpilih"];
$(function(){

    //form
    var form = $("#form").dxTextBox({
        dataField: "idkebutuhan",
        value: "KB0051",
        readOnly: true,
        hoverStateEnabled: false
    }).dxTextBox("instance");

    //spider web
    $("#chart").dxPolarChart({
        // dataSource: dataSource,
        useSpiderWeb: true,
        series: [{valueField: "apples", name: "Apples" },
                 { valueField: "grapes", name: "Grapes" },
                 { valueField: "lemons", name: "Lemons" },
                 { valueField: "oranges", name: "Oranges" }],
        commonSeriesSettings: {        
            type: "line"
        },
        "export": {
            enabled: true
        },
        title: "Grafik Tiap Kriteria",
        tooltip: {
            enabled: true
        }
    });

    //datagrid atas
    $("#dataGridatas").dxDataGrid({
        //datasource

        //column items
        columns: [
        {
            dataField: "urutan",
            caption: "Urutan", 
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
            dataField: "nilaitotal",
            caption: "Nilai Total", 
            dataType: "number"
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


 