// function formatName(name){
//     //mengubah tulisan huruf kecil -> huruf besar
//     const result = name.toUpperCase();
//     return result;
// }

// function getName(name, callFormatName){
//     console.log(callFormatName(name));
// }
// getName("SeRlY", formatName);


// console.log("Satu");

// setTimeout(function (){
//     console.log("Dua");
// }, 2000); //2000 milis => 2 detik

// console.log("Tiga");

const download = () => {
    return new Promise((success, error) => {
        const status = false;

        if (status){
            success("Berhasil"); 
        } else {
            error("yah, gagal nih.");
        }
    })
}

download()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });