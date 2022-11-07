/*
 * @Author: chenzhongsheng
 * @Date: 2022-11-07 09:04:38
 * @Description: Coding something
 * @LastEditors: chenzhongsheng
 * @LastEditTime: 2022-11-07 09:05:09
 */
const childProcess = require('child_process');

async function exec (cmd) {
    return new Promise(resolve => {
        childProcess.exec(cmd, function (error, stdout, stderr) {
            if (error) {
                resolve({success: false, stdout, stderr});
            } else {
                resolve({
                    success: true,
                    stdout,
                    stderr
                });
            }
        });
    });
}

module.exports = {
    exec,
};