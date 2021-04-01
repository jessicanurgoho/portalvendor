var kategori = [
    {idkategori: "KA01",
    nama: "Inventory",
    deskripsi: 
    "Furnitur dan kelengkapan kantor",
    status: "Sudah Terpakai"
    },
    {
    idkategori: "KA02",
    nama: "Promosi",
    deskripsi: 
    "Segala produk yang digunakan habis untuk promosi",
    status: "Belum Terpakai"
    }
    ]
$(function(){

    var isSudahTerpakai = function(status) {
        return status && ["Sudah Terpakai"].indexOf(status) >= 0;
    };

    $("#dataGrid").dxDataGrid({
        //datasource
        dataSource: kategori,

        //editing
        editing: {
            mode: "form",
            allowUpdating: true,
            allowDeleting: function(e) {
                return !isSudahTerpakai(e.row.data.status);
            },
            allowAdding: true
        },
        columns: [
        {
            dataField: "idkategori",
            caption: "ID Kategori", 
            dataType: "string",
            allowEditing: false,
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
            editorType: "dxTextArea",
            editorOptions: {
                height: 150
            },

            validationRules: [{ type: "required" }]
        },
        {
            dataField: "status",
            caption: "Status", 
            dataType: "string"
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
                    saveAs(new Blob([buffer], { type: "application/octet-stream" }), "Kategori.xlsx"); 
                }); 
            }); 
            e.cancel = true; 
        }
    });

   
    


    

})

 