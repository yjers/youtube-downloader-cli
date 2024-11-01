# YouTube Downloader CLI

Esta es una herramienta de línea de comandos para descargar videos y audio de YouTube en formato MP4 o MP3. Los archivos se organizan automáticamente en carpetas separadas.

## Requisitos

Para poder utilizar este script, necesitas tener instalado lo siguiente:

1. **Node.js**:
   - Descarga e instala Node.js desde [su página oficial](https://nodejs.org/). La instalación incluirá `npm`, el gestor de paquetes de Node.js.

2. **yt-dlp**:
   - Este es el programa utilizado para descargar videos de YouTube. Instálalo siguiendo las instrucciones según tu sistema operativo:
     - **Windows**: Descarga el ejecutable desde [la página de releases de yt-dlp](https://github.com/yt-dlp/yt-dlp/releases) y agrega el ejecutable a tu variable de entorno `PATH`.
     - **macOS**: Usa Homebrew para instalar `yt-dlp`:
       ```bash
       brew install yt-dlp
       ```
     - **Linux**: Puedes instalar `yt-dlp` usando `pip` (el gestor de paquetes de Python):
       ```bash
       pip install yt-dlp
       ```

3. **Acceso a la terminal**:
   - Necesitas ejecutar el script en un entorno que soporte Node.js, como la terminal de tu sistema operativo o un entorno de desarrollo integrado (IDE) como Visual Studio Code.

4. **Permisos de escritura**:
   - Asegúrate de que el directorio donde ejecutes el script tenga permisos de escritura, ya que se crearán carpetas (`musica` y `videos`) y se guardarán los archivos descargados en ellas.

## Cómo usar

1. Clona este repositorio o descarga el archivo `index.js` en tu máquina.
2. Abre una terminal y navega hasta el directorio donde guardaste el archivo.
3. Ejecuta el script usando el siguiente comando:
   ```bash
   node index.js
