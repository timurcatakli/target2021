function FileService() {}



const fileService = new FileService({
    '1': { name: 'A1', type: 'txt', size: 200 },
    '2': { name: 'A100', type: 'png', size: 200 },
    '3': { name: 'A10', type: 'mp3', size: 200 },
    '4': { name: 'A2', type: 'pdf', size: 50 },
    '5': { name: '07', type: 'doc', size: 200 },
}, 200);


/**
 * @param {FileService} fileService
 * @param {string[]} ids
 */
function printFilesAsync(fileService, ids) {}

// API: 
// printFilesAsync(fileService, ['1', '2', '7', '3']);
// console.log(fileService.getFile('1')); // { name: 'A1', type: 'txt', size: 200 }
// console.log(fileService.getFileAsync('1').then(res => console.log(res)))
