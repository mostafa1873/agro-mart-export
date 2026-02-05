import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const jsonPath = path.join(__dirname, 'src/data/products.json');
const rawData = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
const productsArray = rawData.products;

const baseUrl = "https://agromartexport.com";
const languages = ['en', 'ar', 'it'];
const staticPages = ['', '/products', '/about', '/contact'];

// وظيفة لتحويل الاسم لرابط صديق لمحركات البحث (Slug)
const createSlug = (text) => {
    return text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')     // استبدال المسافات بـ -
        .replace(/[^\w-]+/g, '')  // حذف أي رموز غير الحروف والأرقام والـ -
        .replace(/--+/g, '-');    // منع تكرار الـ -
};

let xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">`;

// --- 1. الصفحات الثابتة ---
staticPages.forEach(page => {
    languages.forEach(lang => {
        xmlContent += `
  <url>
    <loc>${baseUrl}/${lang}${page}</loc>
    ${languages.map(l => `<xhtml:link rel="alternate" hreflang="${l}" href="${baseUrl}/${l}${page}" />`).join('')}
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/en${page}" />
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`;
    });
});

// --- 2. صفحات المنتجات باستخدام name_en المحول لـ slug ---
productsArray.forEach(product => {
    const productSlug = createSlug(product.name_en); 

    languages.forEach(lang => {
        const detailPath = `/${lang}/productsdetails/${productSlug}`;
        xmlContent += `
  <url>
    <loc>${baseUrl}${detailPath}</loc>
    ${languages.map(l => `<xhtml:link rel="alternate" hreflang="${l}" href="${baseUrl}/${l}/productsdetails/${productSlug}" />`).join('')}
    <priority>0.7</priority>
  </url>`;
    });
});

xmlContent += `\n</urlset>`;

const publicPath = path.join(__dirname, 'public/sitemap.xml');
fs.writeFileSync(publicPath, xmlContent);

console.log(`🚀 Perfect SEO! Sitemap generated using URL-friendly product names.`);