const { spawn } = require('child_process');
const readline = require('readline');
const fs = require('fs');
const path = require('path');

// Configuración de readline para obtener input del usuario
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para descargar el video en el formato elegido
const downloadVideo = (url, format) => {
    // Define el directorio de destino basado en el formato elegido
    const folder = format === 'mp3' ? 'musica' : 'videos';
    const outputDir = path.join(__dirname, folder);

    // Crea el directorio si no existe
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir);
    }

    // Define los argumentos para yt-dlp según el formato
    const formatArg = format === 'mp3' ? 'bestaudio' : 'best';
    const outputPath = path.join(outputDir, `%(title)s.%(ext)s`);

    const ytdlp = spawn('yt-dlp', ['-f', formatArg, '-o', outputPath, url]);

    ytdlp.stdout.on('data', (data) => {
        console.log(`STDOUT: ${data}`);
    });

    ytdlp.stderr.on('data', (data) => {
        console.error(`STDERR: ${data}`);
    });

    ytdlp.on('close', (code) => {
        if (code === 0) {
            console.log(`Descarga completada en la carpeta: ${folder}`);
        } else {
            console.error(`El proceso salió con el código: ${code}`);
        }
        rl.close();
    });
};

// Preguntar al usuario por el enlace de YouTube y luego el formato de descarga
rl.question('Introduce el enlace de YouTube: ', (link) => {
    rl.question('¿Quieres descargar en formato MP4 o MP3? (escribe mp4 o mp3): ', (format) => {
        // Validar el formato y llamar a downloadVideo si es correcto
        if (format === 'mp4' || format === 'mp3') {
            downloadVideo(link, format);
        } else {
            console.log('Formato no válido. Usa "mp4" o "mp3".');
            rl.close();
        }
    });
});
