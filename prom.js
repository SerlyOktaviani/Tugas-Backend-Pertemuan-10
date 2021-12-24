const download = () => {
    return new Promise((success, error) => {
        const status = true;

        if (status){
            success("Download Berhasil Windows-10.exe"); 
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