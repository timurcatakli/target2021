class FileService {
  constructor(files, delay) {
    this.files = files;
    this.delay = delay;
  }

  getFile(id) {
    return this.files[id];
  }

  getFileAsync(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.getFile(id));
      }, this.delay);
    });
  }
}

const fileService = new FileService(
  {
    1: { name: "A1", type: "txt", size: 200 },
    2: { name: "A100", type: "png", size: 200 },
    3: { name: "A10", type: "mp3", size: 200 },
    4: { name: "A2", type: "pdf", size: 50 },
    5: { name: "07", type: "doc", size: 200 },
  },
  1000
);

console.log(fileService.getFile("1")); // { name: 'A1', type: 'txt', size: 200 }
// fileService.getFileAsync("1").then((res) => console.log(res));

/**
 * @param {FileService} fileService
 * @param {string[]} ids
Should print out, with order preserved:
[
  { name: 'A1',   type: 'txt', size: 200 },
  { name: 'A100', type: 'png', size: 200 },
  { name: 'A10',  type: 'mp3', size: 200 }
]

 */

function printFilesAsync(fileService, ids) {
  console.log(ids);
  const promiseArr = [];
  ids.forEach((id) => {
    const response = fileService.getFileAsync(id);
    promiseArr.push(response);
  });

  //   for (let index = 0; index < ids.length; index++) {
  //     const currId = ids[index];
  //     fileService.getFileAsync(currId).then((res) => {
  //       promiseArr.push(res);
  //     });
  //   }

  Promise.all(promiseArr).then((res) => {
    console.log(res.filter((val) => Boolean(val)));
  });
}

printFilesAsync(fileService, ["1", "2", "7", "3"]);
