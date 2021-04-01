$(function(){
    var statuskantor = ['Milik Sendiri', 'Kontrak'];
    var yatidak = ['Ya', 'Tidak'];
    $("#form").dxForm({
        // formData: formData,
        // readOnly: false,
        // showColonAfterLabel: true,
        // showValidationSummary: true,
        // validationGroup: "VendorBaruData",
        autoResizeEnabled: true,

        
        items: [
            {
            itemType: "group",
            caption: "Address Data",
            colCount: 3,
            items: 
            [   {
                colSpan : 2,
                label: { text: "Nama Perusahaan / Perorangan"},
                dataField: "namaperusahaan",
                editorType: "dxTextBox",
                validationRules: [{
                    type: "required",
                    message: "Nama Perusahaan / Perorangan harus diisi"
                }]},
                {
                    itemType: "empty"
                },
                {
                    colSpan : 2,
                    label: { text: "Alamat"},
                    dataField: "alamat",
                    editorType: "dxTextBox",
                    validationRules: [{
                    type: "required",
                    message: "Alamat harus diisi"
                }]
                },
                {
                    itemType: "empty"
                },
                {
                    colSpan : 2,
                    label: { text: "Kota"},
                    dataField: "kota",
                    editorType: "dxTextBox",
                    validationRules: [{
                    type: "required",
                    message: "Kota harus diisi"
                    }]
                },
                {
                    itemType: "empty"
                },
                {
                    colSpan : 2,
                    label: { text: "PO BOX"},
                    dataField: "pobox",
                    editorType: "dxTextBox"
                },
                {
                    itemType: "empty"
                },
                {
                    colSpan : 2,
                    label: { text: "Kode Pos"},
                    dataField: "kodepos",
                    editorType: "dxTextBox"
                },
                {
                    itemType: "empty"
                },
                {
                    colSpan : 2,
                    label: { text: "Negara"},
                    dataField: "negara",
                    editorType: "dxTextBox",
                    validationRules: [{
                        type: "required",
                        message: "Negara harus diisi"
                    }]
                },
                {
                    itemType: "empty"
                },
                {
                    colSpan : 2,
                    label: { text: "Provinsi"},
                    dataField: "provinsi",
                    editorType: "dxTextBox",
                    validationRules: [{
                    type: "required",
                    message: "Provinsi harus diisi"
                    }]
                },
                {
                    itemType: "empty"
                },
                {
                    colSpan : 2,
                    label: { text: "Status Kantor"},
                    dataField: "statuskantor",
                    editorType: "dxSelectBox",
                    editorOptions: {
                        dataSource: statuskantor
                    },
                    validationRules: [{
                    type: "required",
                    message: "Status Kantor harus diisi"
                    }]
                },
                {
                    itemType: "empty"
                },
                {
                    label: { text: "Berdiri Sejak"},
                    dataField: "berdirisejak",
                    editorType: "dxNumberBox",
                    editorOptions: {
                        value: 2002,
                        max: new Date().getYear(),
                        showSpinButtons: true,
                        width: 150
                    }
                },
                {
                    label: { text: "Total Karyawan"},
                    dataField: "totalkaryawan",
                    editorType: "dxNumberBox",
                    editorOptions: {
                        value: 28,
                        showSpinButtons: true,
                        width: 150
                    }
                },
                {
                    itemType: "empty"
                },
                {
                    colSpan : 2,
                    label: { text: "Fax"},
                    dataField: "fax",
                    editorType: "dxTextBox"
                },
                {
                    itemType: "empty"
                },
                {
                    colSpan : 2,
                    label: { text: "Telepon"},
                    dataField: "telepon",
                    editorType: "dxTextBox",
                    validationRules: [{
                        type: "required",
                        message: "Telepon harus diisi"
                    }]
                },
                {
                    itemType: "empty"
                },
                {
                    colSpan : 2,
                    label: { text: "Email"},
                    dataField: "email",
                    editorType: "dxTextBox",
                    validationRules: [{
                        type: "required",
                        message: "Email harus diisi"
                    }]
                },
                {
                    itemType: "empty"
                },
                {
                    colSpan : 2,
                    label: { text: "Nama Direktur"},
                    dataField: "namadirektur",
                    editorType: "dxTextBox"
                },
                {
                    itemType: "empty"
                },
                {
                    colSpan : 2,
                    label: { text: "Nama Sales"},
                    dataField: "namasales",
                    editorType: "dxTextBox",
                    validationRules: [{
                        type: "required",
                        message: "Nama Sales harus diisi"
                    }]
                },
                {
                    itemType: "empty"
                },
                {
                    colSpan : 2,
                    label: { text: "No Telp Sales"},
                    dataField: "notelp_sales",
                    editorType: "dxTextBox",
                    validationRules: [{
                        type: "required",
                        message: "No Telp Sales harus diisi"
                    }]
                },
                {
                    itemType: "empty"
                },
            ]},

            {
                itemType: "group",
                caption: "Pabrik / Gudang (Jika ada)",
                colCount: 3,
                items: 
                [
                    {
                        colSpan : 2,
                        label: { text: "Alamat"},
                        dataField: "alamat_gudang",
                        editorType: "dxTextBox",
                    
                    },
                    {
                        itemType: "empty"
                    },
                    {
                        colSpan : 2,
                        label: { text: "kota_gudang"},
                        dataField: "Kota",
                        editorType: "dxTextBox"
                    },
                    {
                        itemType: "empty"
                    },
                    {
                        colSpan : 2,
                        label: { text: "Kode Pos"},
                        dataField: "kodepos_gudang",
                        editorType: "dxTextBox"
                    },
                    {
                        itemType: "empty"
                    },
                    {
                        colSpan : 2,
                        label: { text: "Provinsi"},
                        dataField: "provinsi_gudang",
                        editorType: "dxTextBox"
                    },
                    {
                        itemType: "empty"
                    },
                    {
                        colSpan : 2,
                        label: { text: "Negara"},
                        dataField: "negara_gudang",
                        editorType: "dxTextBox"
                    },
                    {
                        itemType: "empty"
                    },
                    {
                        colSpan : 2,
                        label: { text: "Status Kantor"},
                        dataField: "statuskantor_gudang",
                        editorType: "dxSelectBox",
                        editorOptions: {
                            dataSource: statuskantor
                        }
                    }
                ]},

                {
                    itemType: "group",
                    caption: "Account Data",
                    colCount: 3,
                    items: 
                    [
                        {
                            colSpan : 2,
                            label: { text: "No Rekening"},
                            dataField: "norekening",
                            editorType: "dxTextBox",
                        
                        },
                        {
                            itemType: "button",
                            horizontalAlignment: "left",
                            buttonOptions: {
                                text: "Upload Scan (PDF/zip/JPG)",
                                type: "success",
                                onClick: function () {
                                    // ...
                                }
                            },
                        },
                        {
                            colSpan : 2,
                            label: { text: "Nama Pemilik Rekening"},
                            dataField: "namapemilikrekening",
                            editorType: "dxTextBox"
                        },
                        {
                            itemType: "empty"
                        },
                        {
                            colSpan : 2,
                            label: { text: "Nama Bank"},
                            dataField: "namabank",
                            editorType: "dxTextBox"
                        },
                        {
                            itemType: "empty"
                        },
                        {
                            colSpan : 2,
                            label: { text: "Kantor Cabang"},
                            dataField: "kantorcabang",
                            editorType: "dxTextBox"
                        },
                        {
                            itemType: "empty"
                        }

                    ]},

                    {
                        itemType: "group",
                        caption: "Tax Data",
                        colCount: 3,
                        items: 
                        [
                            {
                                colSpan : 2,
                                label: { text: "NPWP"},
                                dataField: "npwp",
                                editorType: "dxTextBox",
                            
                            },
                            {
                                itemType: "button",
                                horizontalAlignment: "left",
                                buttonOptions: {
                                    text: "Upload Scan (PDF/zip/JPG)",
                                    type: "success",
                                    // onClick: function () {
                                    //     // ...
                                    // }
                                }
                            },
                            {
                                colSpan : 2,
                                label: { text: "PKP"},
                                dataField: "pkp_tidak",
                                editorType: "dxSelectBox",
                                editorOptions: {
                                    dataSource: yatidak
                                },
                                validationRules: [{
                                type: "required",
                                message: "PKP harus diisi"
                                }]
                            },
                            {
                                itemType: "empty"
                            },
                            {
                                colSpan : 2,
                                label: { text: "No PKP"},
                                dataField: "nopkp",
                                editorType: "dxTextBox"
                            },
                            {
                                itemType: "button",
                                horizontalAlignment: "left",
                                buttonOptions: {
                                    text: "Upload Scan (PDF/zip/JPG)",
                                    type: "success",
                                    onClick: function () {
                                        // ...
                                    }
                                }

                            }
    
                        ]},

                        {
                            itemType: "group",
                            caption: "Legal Data",
                            colCount: 3,
                            items: 
                            [
                                {
                                    colSpan : 2,
                                    label: { text: "SIUP"},
                                    dataField: "siup",
                                    editorType: "dxTextBox",
                                
                                },
                                {
                                    itemType: "button",
                                    horizontalAlignment: "left",
                                    buttonOptions: {
                                        text: "Upload Scan (PDF/zip/JPG)",
                                        type: "success",
                                        // onClick: function () {
                                        //     // ...
                                        // }
                                    },
                                },
                                {
                                    colSpan : 2,
                                    label: { text: "TDP"},
                                    dataField: "tdp",
                                    editorType: "dxTextBox",
                                
                                },
                                {
                                    itemType: "button",
                                    horizontalAlignment: "left",
                                    buttonOptions: {
                                        text: "Upload Scan (PDF/zip/JPG)",
                                        type: "success",
                                    //     onClick: function () {
                                    //         // ...
                                    //     }
                                    }
                                },
                                {
                                    colSpan : 2,
                                    label: { text: "Surat Kuasa (Jika ada)"},
                                    dataField: "suratkuasa",
                                    editorType: "dxTextBox",
                                
                                },
                                {
                                    itemType: "button",
                                    horizontalAlignment: "left",
                                    buttonOptions: {
                                        text: "Upload Scan (PDF/zip/JPG)",
                                        type: "success",
                                        // onClick: function () {
                                        //     // ...
                                        // }
                                    },
                                },
                                {
                                    colSpan : 2,
                                    label: { text: "KTP Direktur / Pemilik"},
                                    dataField: "ktpdirektur",
                                    editorType: "dxTextBox",
                                
                                },
                                {
                                    itemType: "button",
                                    horizontalAlignment: "left",
                                    buttonOptions: {
                                        text: "Upload Scan (PDF/zip/JPG)",
                                        type: "success",
                                        // onClick: function () {
                                        //     // ...
                                        // }
                                    },
                                },
                                {   
                                    colSpan : 2,
                                    label: { text: "KTP Penerima Kuasa (Jika ada)"},
                                    dataField: "ktppenerimakuasa",
                                    editorType: "dxTextBox",
                                
                                },
                                {
                                    itemType: "button",
                                    horizontalAlignment: "left",
                                    buttonOptions: {
                                        text: "Upload Scan (PDF/zip/JPG)",
                                        type: "success",
                                        // onClick: function () {
                                        //     // ...
                                        // }
                                    }
                                }, 
                                {
                                    colSpan : 2,
                                    label: { text: "Perjanjian / Kontrak"},
                                    dataField: "perjanjian_kontrak",
                                    editorType: "dxSelectBox",
                                    editorOptions: {
                                        dataSource: yatidak
                                    },
                                    validationRules: [{
                                    type: "required",
                                    message: "Perjanjian / Kontrak harus diisi"
                                    }]
                                },
                                {
                                    itemType: "empty"
                                },
                                {   
                                    label: { text: "AD ART (Bila Perjanjian)"}
                                },
                                {
                                    itemType: "empty"
                                },
                                {
                                    itemType: "empty"
                                },
                                {
                                    cssClass: "buttonn",
                                    itemType: "button",
                                    horizontalAlignment: "left",
                                    buttonOptions: {
                                        text: "Upload Scan (PDF/zip/JPG)",
                                        type: "success"
                                        // onClick: function () {
                                        //     // ...
                                        // }
                                }},
                                {

                                    itemType: "empty"
                                },
                                {
                                    itemType: "empty"
                                },
                                {   
                                    label: { text: "Kemenkumham (Bila Perjanjian)"},
                                
                                },
                                {
                                    itemType: "empty"
                                },
                                {
                                    itemType: "empty"
                                },
                                {
                                    cssClass: "buttonn",
                                    itemType: "button",
                                    horizontalAlignment: "left",
                                    buttonOptions: {
                                        text: "Upload Scan (PDF/zip/JPG)",
                                        type: "success"
                                        // onClick: function () {
                                        //     // ...
                                        // }
                                }},
                                {
                                    itemType: "empty"
                                },
                                {
                                    itemType: "empty"
                                },
                                // submit button
                                {
                                    cssClass: "buttonn",
                                    itemType: "button",
                                    horizontalAlignment: "left",
                                    buttonOptions: {
                                        text: "Submit",
                                        type: "success",
                                        width: 300
                                        
                                        // onClick: function () {
                                        //     // ...
                                        // }
                                }}

                                
        
                            ]}
        ]

            
    }).dxForm("Instance");

    $("#form-container").on("submit", function(e) {
        DevExpress.ui.notify({
            message: "Pendaftaran berhasil. Kami akan mengirimkan hasil keputusan melalui email",
            position: {
                my: "center top",
                at: "center top"
            }
        }, "success", 3000);
        
        e.preventDefault();
    });
})