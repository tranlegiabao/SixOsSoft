const fs = require('fs');
const path = require('path');

// 1. Update index.html - Các Chuyên Khoa
const indexPath = 'D:/web mới/index.html';
let indexContent = fs.readFileSync(indexPath, 'utf8');

const ckStartTag = '<section id="chuyen-khoa" class="chuyen-khoa py-5">';
const ckEndTag = '</section>';
const ckStartIdx = indexContent.indexOf(ckStartTag);
if (ckStartIdx !== -1) {
    const ckEndIdx = indexContent.indexOf(ckEndTag, ckStartIdx) + ckEndTag.length;
    const newCkSection = `<section id="chuyen-khoa" class="chuyen-khoa py-5">
        <div class="container">
            <header class="section-header text-center mb-4">
                <h2 class="titile-header">Các Chuyên Khoa</h2>
            </header>
            <ul class="row d-flex justify-content-center">
                <li class="col-lg-3 col-md-6 col-sm-6 mb-4">
                    <article class="specialty-item">
                        <a href="chuyen-khoa.html">
                            <figure>
                                <img src="./images/icon/icon-khoa-noi-tong-quat.png" alt="Khoa Nội tổng quát" class="img-fluid">
                            </figure>
                            <h3 class="one-line">Nội tổng quát</h3>
                        </a>
                    </article>
                </li>
                <li class="col-lg-3 col-md-6 col-sm-6 mb-4">
                    <article class="specialty-item">
                        <a href="chuyen-khoa.html">
                            <figure>
                                <img src="./images/icon/icon-khoa-ngoai.png" alt="Ngoại khoa" class="img-fluid">
                            </figure>
                            <h3>Ngoại khoa</h3>
                        </a>
                    </article>
                </li>
                <li class="col-lg-3 col-md-6 col-sm-6 mb-4">
                    <article class="specialty-item">
                        <a href="chuyen-khoa.html">
                            <figure>
                                <img src="./images/icon/icon-ong-nghiem1.png" alt="Nhà thuốc GPP" class="img-fluid">
                            </figure>
                            <h3>Nhà thuốc GPP</h3>
                        </a>
                    </article>
                </li>
                <li class="col-lg-3 col-md-6 col-sm-6 mb-4">
                    <article class="specialty-item">
                        <a href="chuyen-khoa.html">
                            <figure>
                                <img src="./images/icon/icon-xet-nghiem.png" alt="Xét nghiệm" class="img-fluid">
                            </figure>
                            <h3>Xét nghiệm</h3>
                        </a>
                    </article>
                </li>
            </ul>
        </div>
    </section>`;
    indexContent = indexContent.substring(0, ckStartIdx) + newCkSection + indexContent.substring(ckEndIdx);
    fs.writeFileSync(indexPath, indexContent, 'utf8');
    console.log('Updated index.html Chuyên Khoa');
}

// 2. Update SixOsSoft/Views/TrangChu/Index.cshtml
const csIndexPath = 'D:/web mới/SixOsSoft/Views/TrangChu/Index.cshtml';
let csIndexContent = fs.readFileSync(csIndexPath, 'utf8');
const csCkStartIdx = csIndexContent.indexOf(ckStartTag);
if (csCkStartIdx !== -1) {
    const csCkEndIdx = csIndexContent.indexOf(ckEndTag, csCkStartIdx) + ckEndTag.length;
    const newCsCkSection = `<section id="chuyen-khoa" class="chuyen-khoa py-5">
        <div class="container">
            <header class="section-header text-center mb-4">
                <h2 class="titile-header">Các Chuyên Khoa</h2>
            </header>
            <ul class="row d-flex justify-content-center">
                <li class="col-lg-3 col-md-6 col-sm-6 mb-4">
                    <article class="specialty-item">
                        <a href="/chuyen-khoa">
                            <figure>
                                <img src="/images/icon/icon-khoa-noi-tong-quat.png" alt="Khoa Nội tổng quát" class="img-fluid">
                            </figure>
                            <h3 class="one-line">Nội tổng quát</h3>
                        </a>
                    </article>
                </li>
                <li class="col-lg-3 col-md-6 col-sm-6 mb-4">
                    <article class="specialty-item">
                        <a href="/chuyen-khoa">
                            <figure>
                                <img src="/images/icon/icon-khoa-ngoai.png" alt="Ngoại khoa" class="img-fluid">
                            </figure>
                            <h3>Ngoại khoa</h3>
                        </a>
                    </article>
                </li>
                <li class="col-lg-3 col-md-6 col-sm-6 mb-4">
                    <article class="specialty-item">
                        <a href="/chuyen-khoa">
                            <figure>
                                <img src="/images/icon/icon-ong-nghiem1.png" alt="Nhà thuốc GPP" class="img-fluid">
                            </figure>
                            <h3>Nhà thuốc GPP</h3>
                        </a>
                    </article>
                </li>
                <li class="col-lg-3 col-md-6 col-sm-6 mb-4">
                    <article class="specialty-item">
                        <a href="/chuyen-khoa">
                            <figure>
                                <img src="/images/icon/icon-xet-nghiem.png" alt="Xét nghiệm" class="img-fluid">
                            </figure>
                            <h3>Xét nghiệm</h3>
                        </a>
                    </article>
                </li>
            </ul>
        </div>
    </section>`;
    csIndexContent = csIndexContent.substring(0, csCkStartIdx) + newCsCkSection + csIndexContent.substring(csCkEndIdx);
    fs.writeFileSync(csIndexPath, csIndexContent, 'utf8');
    console.log('Updated SixOsSoft/Views/TrangChu/Index.cshtml Chuyên Khoa');
}

// 3. Update chuyen-khoa.html
const ckHtmlPath = 'D:/web mới/chuyen-khoa.html';
let ckHtmlContent = fs.readFileSync(ckHtmlPath, 'utf8');
const ckHtmlStartIdx = ckHtmlContent.indexOf(ckStartTag);
if (ckHtmlStartIdx !== -1) {
    const ckHtmlEndIdx = ckHtmlContent.indexOf(ckEndTag, ckHtmlStartIdx) + ckEndTag.length;
    const newCkHtmlSection = `<section id="chuyen-khoa" class="chuyen-khoa py-5">
        <div class="container">
            <header class="section-header text-center mb-4">
                <h2 class="titile-header">Các Chuyên Khoa</h2>
            </header>
            <ul class="row d-flex justify-content-center">
                <li class="col-lg-3 col-md-6 col-sm-6 mb-4">
                    <article class="specialty-item">
                        <a href="chuyen-khoa.html">
                            <figure>
                                <img src="./images/icon/icon-khoa-noi-tong-quat.png" alt="Khoa Nội tổng quát" class="img-fluid">
                            </figure>
                            <h3 class="one-line">Nội tổng quát</h3>
                        </a>
                    </article>
                </li>
                <li class="col-lg-3 col-md-6 col-sm-6 mb-4">
                    <article class="specialty-item">
                        <a href="chuyen-khoa.html">
                            <figure>
                                <img src="./images/icon/icon-khoa-ngoai.png" alt="Ngoại khoa" class="img-fluid">
                            </figure>
                            <h3>Ngoại khoa</h3>
                        </a>
                    </article>
                </li>
                <li class="col-lg-3 col-md-6 col-sm-6 mb-4">
                    <article class="specialty-item">
                        <a href="chuyen-khoa.html">
                            <figure>
                                <img src="./images/icon/icon-ong-nghiem1.png" alt="Nhà thuốc GPP" class="img-fluid">
                            </figure>
                            <h3>Nhà thuốc GPP</h3>
                        </a>
                    </article>
                </li>
                <li class="col-lg-3 col-md-6 col-sm-6 mb-4">
                    <article class="specialty-item">
                        <a href="chuyen-khoa.html">
                            <figure>
                                <img src="./images/icon/icon-xet-nghiem.png" alt="Xét nghiệm" class="img-fluid">
                            </figure>
                            <h3>Xét nghiệm</h3>
                        </a>
                    </article>
                </li>
            </ul>
        </div>
    </section>`;
    ckHtmlContent = ckHtmlContent.substring(0, ckHtmlStartIdx) + newCkHtmlSection + ckHtmlContent.substring(ckHtmlEndIdx);
    fs.writeFileSync(ckHtmlPath, ckHtmlContent, 'utf8');
    console.log('Updated chuyen-khoa.html');
}

// 4. Update SixOsSoft/Views/ChuyenKhoa/Index.cshtml
const csCkViewPath = 'D:/web mới/SixOsSoft/Views/ChuyenKhoa/Index.cshtml';
if (fs.existsSync(csCkViewPath)) {
    let csCkViewContent = fs.readFileSync(csCkViewPath, 'utf8');
    const csViewStartIdx = csCkViewContent.indexOf(ckStartTag);
    if (csViewStartIdx !== -1) {
        const csViewEndIdx = csCkViewContent.indexOf(ckEndTag, csViewStartIdx) + ckEndTag.length;
        const newCsViewSection = `<section id="chuyen-khoa" class="chuyen-khoa py-5">
        <div class="container">
            <header class="section-header text-center mb-4">
                <h2 class="titile-header">Các Chuyên Khoa</h2>
            </header>
            <ul class="row d-flex justify-content-center">
                <li class="col-lg-3 col-md-6 col-sm-6 mb-4">
                    <article class="specialty-item">
                        <a href="/chuyen-khoa">
                            <figure>
                                <img src="/images/icon/icon-khoa-noi-tong-quat.png" alt="Khoa Nội tổng quát" class="img-fluid">
                            </figure>
                            <h3 class="one-line">Nội tổng quát</h3>
                        </a>
                    </article>
                </li>
                <li class="col-lg-3 col-md-6 col-sm-6 mb-4">
                    <article class="specialty-item">
                        <a href="/chuyen-khoa">
                            <figure>
                                <img src="/images/icon/icon-khoa-ngoai.png" alt="Ngoại khoa" class="img-fluid">
                            </figure>
                            <h3>Ngoại khoa</h3>
                        </a>
                    </article>
                </li>
                <li class="col-lg-3 col-md-6 col-sm-6 mb-4">
                    <article class="specialty-item">
                        <a href="/chuyen-khoa">
                            <figure>
                                <img src="/images/icon/icon-ong-nghiem1.png" alt="Nhà thuốc GPP" class="img-fluid">
                            </figure>
                            <h3>Nhà thuốc GPP</h3>
                        </a>
                    </article>
                </li>
                <li class="col-lg-3 col-md-6 col-sm-6 mb-4">
                    <article class="specialty-item">
                        <a href="/chuyen-khoa">
                            <figure>
                                <img src="/images/icon/icon-xet-nghiem.png" alt="Xét nghiệm" class="img-fluid">
                            </figure>
                            <h3>Xét nghiệm</h3>
                        </a>
                    </article>
                </li>
            </ul>
        </div>
    </section>`;
        csCkViewContent = csCkViewContent.substring(0, csViewStartIdx) + newCsViewSection + csCkViewContent.substring(csViewEndIdx);
        fs.writeFileSync(csCkViewPath, csCkViewContent, 'utf8');
        console.log('Updated SixOsSoft/Views/ChuyenKhoa/Index.cshtml');
    }
}

// 5. Update dich-vu.html and Views/DichVu/Index.cshtml to restore the 2 feature-boxes
const dichVuBoxHtml = `<div class="feature-container" style="display: flex; justify-content: center; gap: 30px; flex-wrap: wrap;">
            <article class="feature-box" style="flex: 0 0 320px; max-width: 360px;">
                <header class="icon-title">
                    <div class="icon">
                        <img src="./images/icon/icon-ong-nghe.png" alt="Khám bệnh các chuyên khoa" />
                    </div>
                    <h3>Khám bệnh các chuyên khoa</h3>
                </header>
            </article>

            <article class="feature-box" style="flex: 0 0 320px; max-width: 360px;">
                <header class="icon-title">
                    <div class="icon">
                        <img src="./images/icon/icon-xet-nghiem1.png" alt="Xét nghiệm" />
                    </div>
                    <h3>Xét nghiệm</h3>
                </header>
            </article>
        </div>`;

const dvHtmlPath = 'D:/web mới/dich-vu.html';
let dvHtml = fs.readFileSync(dvHtmlPath, 'utf8');
dvHtml = dvHtml.replace(/<div class="feature-container">[\s\S]*?<\/div>/, dichVuBoxHtml);
fs.writeFileSync(dvHtmlPath, dvHtml, 'utf8');
console.log('Updated dich-vu.html feature-container');

const dvCsPath = 'D:/web mới/SixOsSoft/Views/DichVu/Index.cshtml';
let dvCs = fs.readFileSync(dvCsPath, 'utf8');
dvCs = dvCs.replace(/<div class="feature-container">[\s\S]*?<\/div>/, dichVuBoxHtml.replace(/\.\/images/g, '/images'));
fs.writeFileSync(dvCsPath, dvCs, 'utf8');
console.log('Updated Views/DichVu/Index.cshtml feature-container');
