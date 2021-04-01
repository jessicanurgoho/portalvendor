$(function () {
    $("#kode-perusahaan").dxTextBox({
        value: "CHO",
        readOnly : true
    });
    $("#grup-produk").dxTextBox({
        value: "GA",
        readOnly : true
    });
    $("#titel").dxTextBox({
        value: "Bapak",
        readOnly : true
    });
    $("#grup-vendor").dxTextBox({
        value: "Pihak Ketiga",
        readOnly : true
    });
    $("#kode-kategori").dxTextBox({
        value: "Asset",
        readOnly : true
    });
    $("#jenis-usaha").dxTextBox({
        value: "Perdagangan",
        readOnly : true
    });
    $("#canvassing").dxTextBox({
        value: "Ya",
        readOnly : true
    });


    $("#nama-perusahaan").dxTextBox({
        value: "UD. Bagus",
        readOnly : true
    });
    $("#alamat").dxTextBox({
        value: "Jalan Nanas no 190",
        readOnly : true
    });
    $("#kota").dxTextBox({
        value: "Surabaya",
        readOnly : true
    });
    $("#po-box").dxTextBox({
        value: "12311",
        readOnly : true
    });
    $("#kode-pos").dxTextBox({
        value: "60114",
        readOnly : true
    });
    $("#provinsi").dxTextBox({
        value: "Jawa Timur",
        readOnly : true
    });
    $("#negara").dxTextBox({
        value: "Indonesia",
        readOnly : true
    });
    $("#status-kantor").dxTextBox({
        value: "Milik Sendiri",
        readOnly : true
    });
    $("#berdiri-sejak").dxNumberBox({
        value: "2005",
        readOnly : true
    });
    $("#total-karyawan").dxNumberBox({
        value: "25",
        readOnly : true
    });
    $("#fax").dxTextBox({
        value: "",
        readOnly : true
    });
    $("#telp").dxTextBox({
        value: "031554221",
        readOnly : true
    });
    $("#ext").dxTextBox({
        value: "1",
        readOnly : true
    });
    $("#email").dxTextBox({
        value: "bagusbagus@gmail.com",
        readOnly : true
    });
    $("#nama-direktur").dxTextBox({
        value: "Budi Bagus",
        readOnly : true
    });
    $("#nama-sales").dxTextBox({
        value: "Rudaniso",
        readOnly : true
    });
    $("#no-telp-sales").dxTextBox({
        value: "081111432542",
        readOnly : true
    });

    //pabrik
    $("#alamat-gudang").dxTextBox({
        value: "Jalan Duria 112",
        readOnly : true
    });
    $("#kota-gudang").dxTextBox({
        value: "Surabaya",
        readOnly : true
    });
    $("#kode-pos-gudang").dxTextBox({
        value: "60114",
        readOnly : true
    });
    $("#provinsi-gudang").dxTextBox({
        value: "Jawa Timur",
        readOnly : true
    });
    $("#negara-gudang").dxTextBox({
        value: "Indonesia",
        readOnly : true
    });
    $("#status-kantor-gudang").dxTextBox({
        value: "Milik Sendiri",
        readOnly : true
    });

    //account data
    $("#no-rekening").dxTextBox({
        value: "3324415632",
        readOnly : true
    });
    $("#nama-pemilik-rekening").dxTextBox({
        value: "Budi Bagus",
        readOnly : true
    });
    $("#nama-bank").dxTextBox({
        value: "BCA",
        readOnly : true
    });
    $("#kantor-cabang").dxTextBox({
        value: "Kertajaya",
        readOnly : true
    });

    //tax data
    $("#npwp").dxTextBox({
        value: "9212312342",
        readOnly : true
    });
    $("#pkp").dxTextBox({
        value: "Tidak",
        readOnly : true
    });
    $("#no-pkp").dxTextBox({
        value: "",
        readOnly : true
    });
    
    //legal data
    $("#siup").dxTextBox({
        value: "",
        readOnly : true
    });
    $("#tdp").dxTextBox({
        value: "",
        readOnly : true
    });
    $("#nib").dxTextBox({
        value: "",
        readOnly : true
    });
    $("#surat-kuasa").dxTextBox({
        value: "",
        readOnly : true
    });
    $("#ktp-direktur").dxTextBox({
        value: "",
        readOnly : true
    });
    $("#ktp-penerima-kuasa").dxTextBox({
        value: "",
        readOnly : true
    });
    $("#perjanjian-kontrak").dxTextBox({
        value: "",
        readOnly : true
    });

    $("#komentar").dxTextArea({
        value: "",
        height: 90
    }).dxTextArea("instance");

    $("#form").on("submit", function(e) {
        DevExpress.ui.notify({
            message: "Form telah disimpan",
            position: {
                my: "center top",
                at: "center top"
            }
        }, "success", 3000);
        
        e.preventDefault();
    });

    $("#button-tolak").dxButton({
        text: "Verifikasi Gagal",
        type: "danger",
        useSubmitBehavior: true
    });
    
    $("#button-terima").dxButton({
        text: "Verifikasi Berhasil",
        type: "success",
        useSubmitBehavior: true
    });
    






    $("#nama-perusahaan").dxTextBox({
        value: "UD. Bagus",
        readOnly : true
    }).dxValidator({
        validationRules: [{
            type: "required",
            message: "Nama perusahaan harus diisi"
        }]
    });
    $("#country-validation").dxSelectBox({
        dataSource: countries
    }).dxValidator({
        validationRules: [{
            type: "required",
            message: "Country is required"
        }]
    });

    $("#mask").dxTextBox({
        mask: "+1 (X00) 000-0000",
        maskRules: {"X": /[02-9]/}
    });

})
