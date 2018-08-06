/**
 * @file 升级swan 或 cli
 * @author yufeng04
 */

const exec = require('child_process').exec;
const util = require('../lib/util');
const ora = require('ora');

/**
 * 升级swan
 */
function upgradeSwan() {
    let cmd = 'npm install mapp-cli -g';
    util.log('升级中，可能需要几分钟, 请耐心等待...', 'info', true);
    util.log('执行命令: ' + cmd, 'info', true);
    const spinner = ora('正在升级...\n');
    spinner.start();
    let fcmd = exec(cmd, () => {
        spinner.stop();
        util.log('完成安装最新版本swan', 'success', true);
    });
    fcmd.stdout.on('data', (d) => {
        console.log(d.substring(d, d.length - 1));
    });
}

/**
 * 升级cli
 */
function upgradeCli() {
    let cmd = 'npm install swan-x-cli --save';
    util.log('升级中，可能需要几分钟, 请耐心等待...', 'info', true);
    util.log('执行命令: ' + cmd, 'info', true);
    util.log('完成安装最新版本cli', 'success', true);
}

exports = module.exports = program => {
    if (program.swan) {
        upgradeSwan();
        return;
    }
    if (program.cli) {
        upgradeCli();
        return;
    }
    program.help();
};