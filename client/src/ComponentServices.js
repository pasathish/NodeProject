import FileSaver from 'file-saver';
export default class ComponentServices {

  save(content, filename) {
    var blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    FileSaver.saveAs(blob, filename);
  }

  async uploadFile(file1, file2, compareCondition) {
    let response = ''
    let formParam = new FormData();
    file1 = typeof file1 === "undefined" ? file2 : file1;
    file2 = typeof file2 === "undefined" ? file1 : file2;
    console.log(file1);
    formParam.append("file", file1);
    formParam.append("file", file2);
    formParam.append("filename", file1.name);
    formParam.append("filename", file2.name);
    formParam.append("compareCondition", compareCondition.toString());
    try {
      response = await fetch("http://localhost:5000/uploadFile", {
        method: 'POST',
        body: formParam
      })
      var result = await response.json();
      console.log(result);
      return result;
      console.log(result);
    } catch (error) {
      console.log(error)
    }
  }

}