$(function(){
    // // var pilihankategori = ['GA', 'IT', 'Promosi', 'Matprom', 'Inventory', 'Lain-lain'];
    // $("#form").dxForm({
    //     // formData: formData,
    //     showColonAfterLabel: true,
    //     // showValidationSummary: true,
    //     autoResizeEnabled: true,
        
    //     items:
    //     [
    //         {
    //             itemType: "group",
    //             caption: "Data Penawaran",
    //             items: 
    //             [
    //             {
    //                 label: { text: "ID Penawaran"},
    //                 dataField: "idpenawaran",
    //                 editorType: "dxTextBox",
    //                 editorOptions: {
    //                 readOnly: true,
    //                 value: "PN0071" 
    //                 }
    //             },
    //                 {
    //                     label: { text: "ID Kebutuhan"},
    //                     dataField: "idkebutuhan",
    //                     editorType: "dxTextBox",
    //                     editorOptions: {
    //                     readOnly: true,
    //                     value: "KU0051" 
    //                     }
    //                 },

    //                 //numberbox harga
    //                 {
    //                     label: { text: "Harga Total"},
    //                     dataField: "hargatotal",
    //                     editorType: "dxNumberBox",
    //                     editorOptions: {
    //                         value: 150000000,
    //                         showSpinButtons: true,
    //                         width: 150
    //                     }
    //                 },
    //                 {
    //                     label: { text: "Deskripsi"},
    //                     dataField: "deskripsi",
    //                     editorType: "dxTextArea",
    //                     height: 500
    //                 }
    //             ]
    //         }
    //     ]
    // }).dxForm("instance");

    $("#id-penawaran").dxTextBox({
        value: "PN0071",
        name: "idpenawaran"
    });
    
    $("#id-kebutuhan").dxTextBox({
        value: "KU0051",
        name: "idkebutuhan"
    });

    $("#harga-total").dxNumberBox({
        value: 150000000,
        name: "hargatotal"
    });

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
