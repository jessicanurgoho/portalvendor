$(function(){
    var scoringtidak = ['Scoring', 'Tanpa Scoring'];
    var pilihankategori = ['GA', 'IT', 'Promosi', 'Matprom', 'Inventory', 'Lain-lain'];
    $("#form").dxForm({
        // formData: formData,
        showColonAfterLabel: true,
        // showValidationSummary: true,
        autoResizeEnabled: true,
        wordWrapEnabled: true,
        
        
        items:
        [
            {
                itemType: "group",
                caption: "Data Kebutuhan",
                width: 100,
                items: 
                [   {
                    label: { text: "ID Kebutuhan"},
                    dataField: "idkebutuhan",
                    editorType: "dxTextBox",
                    editorOptions: {
                        readOnly: true 
                    }
                    },

                    //selectbox ke tabel kategori
                    {
                        label: { text: "Kategori"},
                        dataField: "kategori",
                        editorType: "dxSelectBox",
                        width: 200,
                        editorOptions: {
                            dataSource: pilihankategori
                        }
                    },
                    {
                        label: { text: "Nama"},
                        dataField: "nama",
                        editorType: "dxTextBox",
                        width: 200,
                        validationRules: [{
                            type: "required",
                            message: "Nama harus diisi"
                        }]
                    },
                    {
                        label: { text: "Deskripsi"},
                        dataField: "deskripsi",
                        editorType: "dxTextBox",
                        width: 200,
                        height: 500,
                        validationRules: [{
                            type: "required",
                            message: "Deskripsi harus diisi"
                        }]
                    },
                    {
                        label: { text: "Start Date"},
                        dataField: "startdate",
                        editorType: "dxDateBox",
                        width: 200,
                        editorOptions: {
                            value: new Date(),
                        },
                        validationRules: [{
                            type: "required",
                            message: "Start Date harus diisi"
                        }]
                    },
                    {
                        label: { text: "End Date"},
                        dataField: "enddate",
                        editorType: "dxDateBox",
                        width: 200,
                        editorOptions: {
                            value: new Date(),
                        },
                        validationRules: [{
                            type: "required",
                            message: "End Date harus diisi"
                        }]
                    },
                    {
                        label: { text: "Scoring / Tidak"},
                        dataField: "scoringtidak",
                        editorType: "dxSelectBox",
                        width: 200,
                        editorOptions: {
                            dataSource: scoringtidak
                        }
                    },
                    // submit button
                    {
                        cssClass: "buttonn",
                        itemType: "button",
                        horizontalAlignment: "left",
                        buttonOptions: {
                            text: "Submit",
                            type: "success",
                            width: 300,
                            
                            onClick: function () {
                            window.location.href = '/kebutuhan-baru-kriteria'
                            }
                    }}
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
})