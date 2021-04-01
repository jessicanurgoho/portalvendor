$(function(){

    $("#dataGrid").dxDataGrid({
        dataSource: kebutuhan,
        columns: [
        {
            dataField: "idkebutuhan",
            caption: "ID Kebutuhan", 
            dataType: "string"
        },
        {
            dataField: "startdate",
            caption: "Start Date", 
            dataType: "date"
        }, 
        {
            dataField: "enddate",
            caption: "End Date", 
            dataType: "date"
        },
        {
            dataField: "kategori",
            caption: "Kategori", 
            dataType: "string"
        },
        {
            dataField: "nama",
            caption: "Nama", 
            dataType: "string"
        },
        {
            dataField: "deskripsi",
            caption: "Deskripsi", 
            dataType: "string"
        },
        {
            dataField: "scoringtidak",
            caption: "Scoring/Tidak", 
            dataType: "string"
        },
        {
            type: "buttons",
            width: 110,
            caption: "Lihat Penawaran",
            buttons: [
            {
                hint: "Lihat Penawaran",
                type: "success",
                text: "Detail",
                visible:true,
                onClick: function(e) {
                    window.location.href = "/penawaran-penentuan-vendor"
                }
            }]
        }
        ],
        //selesai column

        //settings
        allowColumnResizing: true,
        columnAutoWidth: true,
        filterRow: { visible: true },
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
    }).dxDataGrid("instance");
    
})