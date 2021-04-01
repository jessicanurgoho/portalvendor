const express = require('express');

const router = express.Router();


/* GET home page. */
router.get('/vendor-form-master-data-vendor', function(req, res, next) {
  res.render('pages/vendor_form_master_data.ejs', { title: 'Form Master Data Vendor' });
});

router.get('/kebutuhan', (req, res,next) => {
  res.render('pages/kebutuhan.ejs');
});

router.get('/add-kebutuhan-baru',  (req, res,next) => {
  res.render('pages/kebutuhanbaru.ejs');
});

router.get('/kebutuhan-baru-kriteria',  (req, res,next) => {
  res.render('pages/kebutuhanbaru_kriteria.ejs');
});

router.get('/history-kebutuhan', (req, res,next) => {
  res.render('pages/kebutuhan_history.ejs');
});

router.get('/vendor-view-kebutuhan', (req, res,next) => {
  res.render('pages/vendor_kebutuhan_view.ejs');
});

router.get('/kriteria', (req, res,next) => {
  res.render('pages/kriteria.ejs');
});

router.get('/kategori', (req, res,next) => {
  res.render('pages/kategori.ejs');
});


router.get('/', (req, res,next) => {
  res.render('pages/dashboard.ejs');
});

router.get('/vendor-view-penawaran', (req, res,next) => {
  res.render('pages/vendor_penawaran_view.ejs');
});

router.get('/view-penawaran', (req, res,next) => {
  res.render('pages/penawaran_view.ejs');
});

router.get('/history-penawaran', (req, res,next) => {
  res.render('pages/penawaran_history.ejs');
});

router.get('/verifikasi-penawaran-baru', (req, res,next) => {
  res.render('pages/verifikasi_penawaran_baru.ejs');
});

router.get('/header-penentuan-vendor', (req, res,next) => {
  res.render('pages/penentuanvendor_header.ejs');
});

router.get('/penawaran-penentuan-vendor', (req, res,next) => {
  res.render('pages/penentuanvendor_penawaran_view.ejs');
});

router.get('/vendor-upload-penawaran', (req, res,next) => {
  res.render('pages/vendor_upload_penawaran.ejs');
});

router.get('/verifikasi-vendor-baru-legal', (req, res,next) => {
  res.render('pages/verifikasi_vendor_baru_header_legal.ejs');
});

router.get('/verifikasi-vendor-baru-detail-legal', (req, res,next) => {
  res.render('pages/verifikasi_vendor_baru_detail_legal.ejs');
});

router.get('/verifikasi-vendor-baru-header', (req, res,next) => {
  res.render('pages/verifikasi_vendor_baru_header.ejs');
});

router.get('/verifikasi-vendor-baru-detail', (req, res,next) => {
  res.render('pages/verifikasi_vendor_baru_detail.ejs');
});

router.get('/penentuan-vendor-tanpa-scoring', (req, res,next) => {
  res.render('pages/penentuan_vendor_tanpa_scoring.ejs');
});

router.get('/surat-penawaran-pdf', (req, res,next) => {
  res.render('pages/surat_penawaran_pdf.ejs');
});

router.get('/login', (req, res,next) => {
  res.render('pages/login.ejs');
});

router.get('/input-vendor-terpilih', (req, res,next) => {
  res.render('pages/penentuan_vendor_input_vendor_terpilih.ejs');
});


module.exports = router;
