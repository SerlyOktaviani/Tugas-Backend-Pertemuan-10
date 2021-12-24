// Nama     : Serly Oktaviani
// NIM      : 0110219126
// Kelas    : 5TI04


function showDownload(result){
    console.log("Download Selesai");
    console.log("Hasil Download" + result);
}

function download(callShowDownload) {
    setTimeout(function() {
        const result = "windows-10.exe";
        callShowDownload(result);
    }, 3000);
}

download(showDownload);