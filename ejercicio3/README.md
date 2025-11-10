# Ejercicio 3 – Servidor Node.js con Contraseña Aleatoria

##  Descripción
Este programa crea un **servidor en Node.js** que genera una contraseña aleatoria formada por **X palabras** seleccionadas de un diccionario predefinido.  
El número de palabras (X) se indica como parámetro en la **query string** de la URL (`?x=`).

---

## Requisitos
- Tener **Node.js** instalado en el sistema.
---

##  Ejecución

1. Clona o descarga el archivo `ejercicio3.js` en tu ordenador.
2. Abre una terminal en el directorio donde se encuentra el archivo.
3. Ejecuta el siguiente comando:
   ```bash
   node ejercicio3.js
   ```
4. Abre tu navegador y accede a:

   - **Por defecto (3 palabras):**
     ```
     http://localhost:3000
     ```
   - **Con número de palabras definido (ejemplo: 5 palabras):**
     ```
     http://localhost:3000/?x=5
     ```

---

##  Ejemplo de salida
```
Tu contraseña aleatoria es:
luna-mar-roca-nube
```

---

##  Notas
- Si no se especifica el parámetro `x`, se generan **3 palabras** por defecto.
- Puedes modificar el diccionario directamente en el código (`dictionary`) para incluir tus propias palabras.
- Tener **Node.js** instalado en el sistema.

