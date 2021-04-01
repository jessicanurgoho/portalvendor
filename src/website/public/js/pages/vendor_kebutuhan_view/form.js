$(function(){

    var dataGrid = $("#dataGrid").dxDataGrid({
        dataSource: kebutuhan,
        keyExpr: "idkebutuhan", 
        selection: {
            mode: "single"
        },
        columns: [
        {
            dataField: "idkebutuhan",
            caption: "ID Kebutuhan", 
            dataType: "string",
            width: 120
        },
        {
            dataField: "startdate",
            caption: "Start Date", 
            dataType: "date",
            width: 120
        }, 
        {
            dataField: "enddate",
            caption: "End Date", 
            dataType: "date",
            width: 120
        },
        {
            dataField: "kategori",
            caption: "Kategori", 
            dataType: "string",
            width: 120
        },
        {
            dataField: "nama",
            caption: "Nama", 
            dataType: "string",
            width: 150
        },
        {
            dataField: "deskripsi",
            caption: "Deskripsi", 
            dataType: "string",
            width: 150
        }
        ],
        //selesai column

        //selectionchanges
        
        onSelectionChanged: function (selectedItems) {
                var data = selectedItems.selectedRowsData[0];
                if(data) {
                    // $("#id-penawaran").text("NP0071");
                    $("#id-penawaran").dxTextBox({
                        value: "NP0071",
                        name: "idpenawaran",
                        readOnly: true
                    });
                    $("#id-kebutuhan").dxTextBox({
                        value: data.idkebutuhan,
                        name: "idkebutuhan",
                        readOnly: true
                    });
                    $("#harga-total").dxNumberBox({
                        value: 150000000,
                        name: "hargatotal"
                    });
                }
        },
        

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

    // var selectedKeys = dataGrid.getSelectedRowKeys();
    // var selectedData = dataGrid.getSelectedRowsData();


    // $("#id-penawaran").dxTextBox({
    //     value: "PN0071",
    //     name: "idpenawaran"
    // });

    

    $("#file-uploader").dxFileUploader({
        selectButtonText: "Pilih File",
        labelText: "Upload Surat Penawaran",
        accept: "*.pdf",
        uploadMode: "useForm"
    });
    
    $("#button").dxButton({
        text: "Submit",
        type: "success",
        onClick: function(){
            // DevExpress.ui.dialog.alert("Uncomment the line to enable sending a form to the server.", "Konfirmasi");
            $("#form").submit();
        }
    });


    

})