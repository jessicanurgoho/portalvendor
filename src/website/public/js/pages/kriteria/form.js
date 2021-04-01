var kriteria = [
    {idkriteria: "KR001",
    nama: "Pemenuhan Spesifikasi",
    deskripsi: 
    "Spesifikasi yang diperlukan pada sebuah kebutuhan sudah dipenuhi 80-100% (Niilai 5). 60-80% (Nilai 4). 40-60% (Nilai 3). 20-40% (Nilai 2). 0-20% (Nilai 1)",
    status: "Sudah Terpakai"
    },
    {
    idkriteria: "KR002",
    nama: "Kualitas",
    deskripsi: 
    "Kualitas dibandingkan dengan produk lain yang ditawarkan",
    status: "Belum Terpakai"
    }
    ]
$(function(){

    var isSudahTerpakai = function(status) {
        return status && ["Sudah Terpakai"].indexOf(status) >= 0;
    };

    $("#dataGrid").dxDataGrid({
        //datasource
        dataSource: kriteria,

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
            dataField: "idkriteria",
            caption: "ID Kriteria", 
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
                    saveAs(new Blob([buffer], { type: "application/octet-stream" }), "Kriteria.xlsx"); 
                }); 
            }); 
            e.cancel = true; 
        }
    });

   
    


    

})

 