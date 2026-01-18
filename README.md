# Tarjetas con React (Props)

Proyecto realizado con **React** cuyo objetivo es practicar la creación y reutilización de componentes, el uso de **props**, y la organización básica de estilos con CSS.

La aplicación muestra una serie de **tarjetas informativas sobre animes recomendados**, cada una con imagen y contenido textual.

---

## 🧠 Objetivo del proyecto

- Practicar la creación de componentes en React.
- Reutilizar un mismo componente (`Card`) para mostrar información diferente.
- Pasar datos desde `App.jsx` a los componentes mediante **props**.
- Aplicar estilos básicos con CSS sin lógica compleja.
- Mantener una estructura de proyecto clara y ordenada.

---

## 🎌 Temática

**Anime**  
Una selección de animes imprescindibles para cualquier aficionado al género.

Cada tarjeta incluye:
- Imagen del anime
- Título
- Género
- Descripción

---

## 🧩 Componentes utilizados

### Card.jsx
Componente reutilizable que representa una tarjeta individual.  
Recibe la información mediante props:

- `image`
- `title`
- `genre`
- `description`

### Header.jsx *(extra)*
Muestra el título principal del proyecto y una breve descripción.

### Footer.jsx *(extra)*
Footer simple informativo.

---

## 📐 Estructura del proyecto

```txt
src/
├── assets/           # Imágenes de los animes
├── components/
│   ├── Card.jsx
│   ├── Header.jsx
│   └── Footer.jsx
├── styles/
│   ├── App.css
│   ├── Card.css
│   ├── Header.css
│   └── Footer.css
├── App.jsx
├── index.css
└── main.jsx

## 🎨 Estilos

- CSS separado por componente.
- Clases con naming claro y consistente.
- Layout con **CSS Grid**.
- Diseño responsive básico.
- Fondo con degradado aplicado a toda la página.
- No se utiliza ninguna librería externa de estilos.

## 📦 Tecnologías usadas

- React
- Vite
- JavaScript (ES6+)
- CSS

## ▶️ Cómo ejecutar el proyecto

1. Clonar el repositorio:
```bash
git clone 
```

2. Instalar dependencias:
```bash
npm install
```

3. Ejecutar en modo desarrollo:
```bash
npm run dev
```
