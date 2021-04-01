$(function(){
    
    $("#add").dxButton({
        icon: "plus",
        type: "success",
        text: "Add Kebutuhan Baru",
        autoResizeEnabled: true,
        onClick: function(e) { 
           window.location.href = '/add-kebutuhan-baru';
        }
    });

    $("#dataGrid").dxDataGrid({
        dataSource: kebutuhan,
        editing: {
            mode: "popup",
            allowUpdating: true,
            allowDeleting: true
        },
        columns: [
        {
            dataField: "idkebutuhan",
            caption: "ID Kebutuhan", 
            dataType: "string",
            allowEditing: false,
            validationRules: [{ type: "required" }]
        },
        {
            dataField: "startdate",
            caption: "Start Date", 
            dataType: "date",
            validationRules: [{ type: "required" }]
        }, 
        {
            dataField: "enddate",
            caption: "End Date", 
            dataType: "date",
            validationRules: [{ type: "required" }]
        },
        {
            dataField: "kategori",
            caption: "Kategori", 
            dataType: "string",
            validationRules: [{ type: "required" }]
        },
        {
            dataField: "nama",
            caption: "Nama", 
            dataType: "string",
            validationRules: [{ type: "required" }]
        },
        {
            dataField: "deskripsi",
            caption: "Deskripsi", 
            dataType: "string",
            validationRules: [{ type: "required" }]
        },
        {
            dataField: "scoringtidak",
            caption: "Scoring/Tidak", 
            dataType: "string",
            validationRules: [{ type: "required" }]
        },
        {
            dataField: "kriteria",
            caption: "Kriteria", 
            dataType: "string",
            editorOptions: {

            }
            
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