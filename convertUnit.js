function convertFileSize(fileSizeInBytes) {
    if (fileSizeInBytes < 1024) {
        return fileSizeInBytes + " B";
    } else if (fileSizeInBytes < 1024 * 1024) {
        return (fileSizeInBytes / 1024).toFixed(2) + " kB";
    } else if (fileSizeInBytes < 1024 * 1024 * 1024) {
        return (fileSizeInBytes / (1024 * 1024)).toFixed(2) + " MB";
    } else {
        return (fileSizeInBytes / (1024 * 1024 * 1024)).toFixed(2) + " GB";
    }
}

function convertFileDate(fechaEnFormatoISO) {
    const meses = [
        "ene", "feb", "mar", "abr", "may", "jun",
        "jul", "ago", "sep", "oct", "nov", "dic"
    ];

    const partes = fechaEnFormatoISO.split('-');
    if (partes.length === 3) {
        const dia = partes[2];
        const mes = meses[parseInt(partes[1]) - 1];
        const año = partes[0];

        return `${dia} ${mes} ${año}`;
    } else {
        return "------";
    }
}

module.exports = {
    convertFileSize,
    convertFileDate
};

