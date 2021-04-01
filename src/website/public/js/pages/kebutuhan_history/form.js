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
            dataField: "kriteria",
            caption: "Kriteria", 
            dataType: "string"
            
        }
        ],
        //selesai column

        //settings
        allowColumnResizing: true,
        columnAutoWidth: true,
        filterRow: { visible: true },
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
                    saveAs(new Blob([buffer], { type: "application/octet-stream" }), "DataGrid.xlsx"); 
                }); 
            }); 
            e.cancel = true; 
        }
    });


    

})