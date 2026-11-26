const fs = require('fs');
const zlib = require('zlib');

function readPNG(filePath) {
    const buffer = fs.readFileSync(filePath);
    let offset = 8; // skip signature
    let width, height, bitDepth, colorType;
    const idatChunks = [];

    while (offset < buffer.length) {
        const length = buffer.readUInt32BE(offset);
        const type = buffer.toString('ascii', offset + 4, offset + 8);
        if (type === 'IHDR') {
            width = buffer.readUInt32BE(offset + 8);
            height = buffer.readUInt32BE(offset + 12);
            bitDepth = buffer.readUInt8(offset + 16);
            colorType = buffer.readUInt8(offset + 17);
        } else if (type === 'IDAT') {
            idatChunks.push(buffer.slice(offset + 8, offset + 8 + length));
        } else if (type === 'IEND') {
            break;
        }
        offset += 12 + length;
    }

    const compressed = Buffer.concat(idatChunks);
    const decompressed = zlib.inflateSync(compressed);
    return { width, height, data: decompressed, colorType };
}

const png = readPNG('C:/Users/HP/.gemini/antigravity/brain/159a8605-eb6b-4e35-a62d-b8b74cf1167a/.user_uploaded/media_1795051825713_de4b7d38.png');
console.log('PNG width:', png.width, 'height:', png.height, 'colorType:', png.colorType);

// Scan rows
const bytesPerPixel = png.colorType === 6 ? 4 : 3;
const stride = 1 + png.width * bytesPerPixel;

function getPixel(x, y) {
    const rowStart = y * stride;
    const filter = png.data[rowStart]; // assuming none or simple
    const pStart = rowStart + 1 + x * bytesPerPixel;
    return [png.data[pStart], png.data[pStart + 1], png.data[pStart + 2]];
}

// Let's sample colors in regions
console.log('Sampling top region (Các Chuyên Khoa):');
let c1 = [];
for (let y = 100; y < 140; y++) {
    for (let x = 300; x < 500; x++) {
        const p = getPixel(x, y);
        if (p[0] < 60 && (p[1] > 40 || p[2] > 40)) c1.push(p);
    }
}
if (c1.length > 0) {
    console.log('Sample c1:', c1.slice(0, 5));
    const avg = [0,1,2].map(i => Math.round(c1.reduce((s, c) => s + c[i], 0) / c1.length));
    console.log('Avg c1 (Các Chuyên Khoa):', avg, 'hex:', avg.map(x => x.toString(16).padStart(2, '0')).join(''));
}

console.log('Sampling bottom region (Đội Ngũ Bác Sĩ):');
let c2 = [];
for (let y = 480; y < 560; y++) {
    for (let x = 200; x < 600; x++) {
        const p = getPixel(x, y);
        if (p[0] < 60 && (p[1] > 40 || p[2] > 40)) c2.push(p);
    }
}
if (c2.length > 0) {
    console.log('Sample c2:', c2.slice(0, 5));
    const avg = [0,1,2].map(i => Math.round(c2.reduce((s, c) => s + c[i], 0) / c2.length));
    console.log('Avg c2 (Đội Ngũ Bác Sĩ):', avg, 'hex:', avg.map(x => x.toString(16).padStart(2, '0')).join(''));
}

console.log('Sampling cards (Ngoại Khoa / Nhà Thuốc GPP):');
let cCard = [];
for (let y = 280; y < 330; y++) {
    for (let x = 100; x < 600; x++) {
        const p = getPixel(x, y);
        if (p[0] < 60 && (p[1] > 40 || p[2] > 40)) cCard.push(p);
    }
}
if (cCard.length > 0) {
    const avg = [0,1,2].map(i => Math.round(cCard.reduce((s, c) => s + c[i], 0) / cCard.length));
    console.log('Avg cCard:', avg, 'hex:', avg.map(x => x.toString(16).padStart(2, '0')).join(''));
}
