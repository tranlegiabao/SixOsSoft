const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

const MIME_TYPES = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.webp': 'image/webp',
    '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
    let cleanUrl = req.url.split('?')[0];
    if (cleanUrl === '/') cleanUrl = '/index.html';
    
    // Support clean URLs like /gioi-thieu -> /gioi-thieu.html
    if (!path.extname(cleanUrl)) {
        if (fs.existsSync(path.join(__dirname, cleanUrl + '.html'))) {
            cleanUrl += '.html';
        }
    }

    const filePath = path.join(__dirname, decodeURIComponent(cleanUrl));

    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
        const ext = path.extname(filePath).toLowerCase();
        const mime = MIME_TYPES[ext] || 'application/octet-stream';
        res.writeHead(200, { 'Content-Type': mime });
        fs.createReadStream(filePath).pipe(res);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>404 - Trang không tồn tại</h1><p><a href="/">Quay về Trang chủ</a></p>');
    }
});

server.listen(PORT, () => {
    console.log(`====================================================`);
    console.log(`Website Phòng Khám Đa Khoa MINDLAB BẾN TRE đang chạy tại:`);
    console.log(`👉 http://localhost:${PORT}`);
    console.log(`====================================================`);
});
