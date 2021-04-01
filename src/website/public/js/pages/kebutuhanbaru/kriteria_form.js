$(function(){
    var pilihankategori = ['GA', 'IT', 'Promosi', 'Matprom', 'Inventory', 'Lain-lain'];
    $("#form").dxForm({
        // formData: formData,
        showColonAfterLabel: true,
        // showValidationSummary: true,
        autoResizeEnabled: true,
        
        items:
        [
            {
                itemType: "group",
                caption: "Data Kebutuhan",
                items: 
                [   {
                        label: { text: "ID Kebutuhan"},
                        dataField: "idkebutuhan",
                        editorType: "dxTextBox",
                        editorOptions: {
                        readOnly: true,
                        value: "KU0051" 
                        }
                    },

                    //selectbox ke tabel kategori
                    {
                        label: { text: "Kategori"},
                        dataField: "kategori",
                        editorType: "dxSelectBox",
                        editorOptions: {
                            dataSource: pilihankategori,
                            readOnly: true,
                            value: "Inventory"
                        }
                    },
                    {
                        label: { text: "Nama"},
                        dataField: "nama",
                        editorType: "dxTextBox",
                        editorOptions: {
                            readOnly: true,
                            value: "Meja"
                        }

                    },
                    {
                        label: { text: "Deskripsi"},
                        dataField: "deskripsi",
                        editorType: "dxTextBox",
                        height: 500,
                        editorOptions: {
                            readOnly: true,
                            value: "Meja ukuran minimal 2 x 2.5m"
                        }
                    },
                    {
                        label: { text: "Start Date"},
                        dataField: "startdate",
                        editorType: "dxDateBox",
                        value: '2020-01-01',
                        Option: {
                            readOnly: true
                        }
                    },
                    {
                        label: { text: "End Date"},
                        dataField: "enddate",
                        editorType: "dxDateBox",
                        value: '2020-01-01',
                        Option: {
                            readOnly: true
                        }
                    },
                    {
                        label: { text: "Scoring / Tidak"},
                        dataField: "scoringtidak",
                        editorType: "dxTextBox",
                        editorOptions: {
                            readOnly: true,
                            value: "Scoring"
                        }
                    },
                    {
                        label: { text: "Kriteria Penilaian"},
                        editorType: "dxDropDownBox",
                        // value: [3],
                        // valueExpr: "ID",
                        placeholder: "Select a value...",
                        // displayExpr: "CompanyName",
                        showClearButton: true,
                        // dataSource: makeAsyncDataSource("customers.json"),
                        contentTemplate: function(e){
                        // var value = e.component.option("value"),
                        $dataGrid = $("<div>").dxDataGrid({
                        // dataSource: e.component.getDataSource(),
                        columns: ["ID Kriteria", "Nama"],
                        hoverStateEnabled: true,
                        paging: { enabled: true, pageSize: 10 },
                        filterRow: { visible: true },
                        scrolling: { mode: "infinite" },
                        height: 345,
                        selection: { mode: "multiple" },
                        selectedRowKeys: value,
                        onSelectionChanged: function(selectedItems){
                            var keys = selectedItems.selectedRowKeys;
                            // e.component.option("value", keys);
                        }
                        });
            
                        dataGrid = $dataGrid.dxDataGrid("instance");
            
                        e.component.on("valueChanged", function(args){
                        var value = args.value;
                        dataGrid.selectRows(value, false);
                        });
                        }
                    }
        ]
    }]
    })                   

    $("#form-container").on("submit", function(e) {
        DevExpress.ui.notify({
            message: "",
            position: {
                my: "center top",
                at: "center top"
            }
        }, "success", 3000);
        
        e.preventDefault();
    });
}); 
