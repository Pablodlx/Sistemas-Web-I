# Ejercicio 4 – Web Scraping con Node.js

##  Descripción
Este ejercicio consiste en crear un **servidor en Node.js** que descargue periódicamente el HTML de una página web, lo procese para extraer una información específica (en este caso, el título de la página) y lo muestre al acceder a la página principal del servidor.
Se utiliza el paquete **Cheerio** para manipular el DOM, y el proceso se repite automáticamente cada cierto tiempo.

---

## Requisitos
- Tener **Node.js v18 o superior** instalado .
- Instalar la dependencia `cheerio`.

```bash
npm install cheerio@1.0.0-rc.12
```

---

## Ejecución
1. Inicializa el proyecto:
   ```bash
   npm init -y
   ```
2. Instala las dependencias:
   ```bash
   npm install cheerio@1.0.0-rc.12
   ```
3. Inicia el servidor:
   ```bash
   npm start
   ```
4. Abre tu navegador y accede a:
   ```
   http://localhost:3000
   ```

---

##  Funcionamiento
- El servidor descarga el HTML de la web indicada en `TARGET_URL`.
- Extrae el contenido del `<title>` usando **Cheerio**.
- Muestra el resultado en formato JSON cuando accedes al servidor.
- Además, repite automáticamente la descarga cada **5 minutos** (300.000 ms).

---
