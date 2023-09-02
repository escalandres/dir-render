var icons = {
    // base icons
    'default': 'unknown-icon',
    'folder': 'folder-icon',

    // tipos de archivo de imagen
    '.jpg': 'img-icon',
    '.jpeg': 'img-icon',
    '.png': 'img-icon',
    '.gif': 'gif-icon',
    '.bmp': 'img-icon',
    '.tiff': 'img-icon',
    '.svg': 'svg-icon',

    // tipos de archivo de audio
    '.mp3': 'audio-icon',
    '.m4a': 'audio-icon',
    '.wav': 'audio-icon',
    '.flac': 'audio-icon',

    // tipos de archivo de video
    '.mp4': 'video-icon',
    '.avi': 'video-icon',
    '.mov': 'video-icon',
    '.mkv': 'video-icon',

    // tipos de archivo de programación
    '.js': 'js-icon',
    '.json': 'code-icon',
    '.css': 'css-icon',
    '.html': 'html-icon',
    '.php': 'code-icon',
    '.py': 'code-icon',
    '.java': 'code-icon',
    '.cpp': 'code-icon',
    '.cs': 'code-icon',
    '.rb': 'code-icon',
    '.pl': 'code-icon',
    '.sh': 'code-icon',
    '.sql': 'sql-icon',
    '.c': 'code-icon',
    '.scss': 'code-icon',

    // otros tipos de archivo comunes
    '.doc': 'word-icon',
    '.docx': 'word-icon',
    '.pdf': 'pdf-icon',
    '.postscript': 'svg-icon',
    '.rtf': 'word-icon',
    '.xls': 'excel-icon',
    '.xlsx': 'excel-icon',
    '.ppt': 'ppt-icon',
    '.pptx': 'ppt-icon',
    '.7z': 'compressed-icon',
    '.tar': 'compressed-icon',
    '.xz': 'compressed-icon',
    '.zip': 'compressed-icon',
    '.rar': 'compressed-icon',
    '.xml': 'xml-icon',
    '.txt': 'txt-icon',
    // tipos de archivo de fuente de texto
    '.ttf': 'font-icon',
    '.otf': 'font-icon',
    '.woff': 'font-icon',
    '.woff2': 'font-icon',

    // specific mime type icons
    '.rtf': 'word-icon',

    // other, extension-specific icons
    '.accdb': 'database-icon',
    '.apk': 'apk-icon',
    '.app': 'unknown-icon',
    '.as': 'page_white_actionscript-icon',
    '.asp': 'code-icon',
    '.aspx': 'code-icon',
    '.bat': 'terminal-icon',
    '.bz2': 'compressed-icon',

    '.cab': 'compressed-icon',
    '.cfm': 'code-icon',
    '.clj': 'code-icon',
    '.cc': 'code-icon',
    '.cgi': 'terminal-icon',
    '.db': 'database-icon',
    '.dbf': 'database-icon',
    '.deb': 'compressed-icon',
    '.dll': 'gear-icon',
    '.dmg': 'drive-icon',
    '.erb': 'code-icon',
    '.exe': 'exe-icon',
    '.fnt': 'font-icon',
    '.gam': 'controller-icon',
    '.gz': 'compressed-icon',
    '.h': 'code-icon',
    '.ini': 'gear-icon',
    '.iso': 'cd-icon',
    '.jar': 'compressed-icon',
    '.jsp': 'code-icon',
    '.lua': 'code-icon',
    '.lz': 'compressed-icon',
    '.lzma': 'compressed-icon',
    '.m': 'code-icon',
    '.map': 'map-icon',
    '.msi': 'compressed-icon',
    '.otf': 'font-icon',
    '.pdb': 'database-icon',
    '.php': 'code-icon',
    '.pl': 'code-icon',
    '.pkg': 'compressed-icon',
    '.psd': 'img-icon',
    '.py': 'code-icon',
    '.rb': 'code-icon',
    '.rm': 'video-icon',
    '.rom': 'controller-icon',
    '.rpm': 'compressed-icon',
    '.sass': 'code-icon',
    '.sav': 'controller-icon',

    '.srt': 'txt-icon',
    '.tbz2': 'compressed-icon',
    '.tgz': 'compressed-icon',
    '.tlz': 'compressed-icon',
    '.vb': 'code-icon',
    '.vbs': 'code-icon',
    '.xcf': 'img-icon',
    '.yaws': 'code-icon'
  };

function getFileIcon(fileExtension) {

    if(fileExtension === "") return 'folder-icon'
    // Busca el tipo de archivo en el objeto icons
    const fileType = icons[fileExtension];

    // Si se encuentra el tipo de archivo, devuelve su nombre de clase
    if (fileType) {
        return fileType;
    } else {
        // Si no se encuentra, devuelve 'unknown-icon' por defecto
        return 'unknown-icon';
    }
}

module.exports = {
    getFileIcon
};