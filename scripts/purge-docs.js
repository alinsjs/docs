/*
 * @Author: chenzhongsheng
 * @Date: 2022-11-07 09:02:57
 * @Description: Coding something
 * @LastEditors: chenzhongsheng
 * @LastEditTime: 2022-11-07 09:02:58
 */
const https = require('https');

console.log('Purge docs CDN...');

https.get('https://purge.jsdelivr.net/gh/alinsjs/alins@gh-pages', () => {
    
});