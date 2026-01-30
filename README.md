# Rick and Morty Character Explorer 🛸

Una aplicación web moderna desarrollada con React y Vite para explorar personajes de la serie "Rick and Morty" utilizando su API oficial. Incluye funcionalidades avanzadas como búsqueda, paginación, sistema de favoritos y visualización en carrusel.

![Rick and Morty App](https://via.placeholder.com/800x400/1a1a1a/00ff00?text=Rick+%26+Morty+Character+Explorer)

## 🚀 Demo en Vivo

**[👉 Ver la aplicación en funcionamiento](https://tu-usuario.github.io/rick-morty-character-explorer/)**

## ✨ Características

- 🔍 **Búsqueda en tiempo real** - Encuentra personajes por nombre
- 📱 **Diseño responsivo** - Adaptado a todos los dispositivos
- 📄 **Paginación inteligente** - Navega por todos los personajes fácilmente
- ❤️ **Sistema de favoritos** - Guarda tus personajes favoritos (localStorage)
- 🎠 **Vista carrusel** - Exploración visual atractiva con SwiperJS
- 🎨 **Vista de cuadrícula** - Layout optimizado para máxima información
- ⚡ **Carga rápida** - Optimizado con Vite para máximo rendimiento
- 🚀 **GitHub Pages** - Deployment automático con GitHub Actions

## 🛠️ Tecnologías

- ⚛️ **React 19.2.0** - Framework principal
- ⚡ **Vite 7.3.1** - Herramienta de construcción y desarrollo
- 🎠 **SwiperJS 12.1.0** - Carrusel interactivo
- 🌐 **Rick and Morty API** - Fuente de datos oficial
- 💾 **localStorage** - Persistencia de favoritos
- 🎨 **CSS Grid/Flexbox** - Layouts modernos y responsivos

## � Deployment en GitHub Pages

### Deployment Automático

Este proyecto está configurado para deployment automático en GitHub Pages:

1. **Push a main/master:** El workflow se ejecuta automáticamente
2. **GitHub Actions:** Construye el proyecto y despliega a Pages
3. **URL live:** `https://tu-usuario.github.io/rick-morty-character-explorer/`

### Deployment Manual

También puedes hacer deployment manual:

```bash
npm run deploy  # Construye y despliega a gh-pages branch
```

### Configuración de GitHub Pages

1. Ve a `Settings > Pages` en tu repositorio
2. Source: `Deploy from a branch`
3. Branch: `gh-pages` / `/ (root)`
4. Guarda y espera unos minutos

## �📦 Instalación

1. **Clona el repositorio:**

```bash
git clone https://github.com/tu-usuario/rick-morty-character-explorer.git
cd rick-morty-character-explorer
```

2. **Instala las dependencias:**

```bash
npm install
```

3. **Inicia el servidor de desarrollo:**

```bash
npm run dev
```

4. **Abre tu navegador en:** `http://localhost:5173`

## 🏗️ Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Construcción para producción
npm run preview  # Vista previa de la build
npm run lint     # Linting del código
npm run deploy   # Deploy a GitHub Pages
npm run predeploy # Pre-build para deployment
npm run clean    # Limpiar cache y builds
```

## 🏗️ Estructura del Proyecto

```
rick-proyecto-react/
├── .github/workflows/     # GitHub Actions
│   └── deploy.yml        # Workflow de deployment
├── public/               # Archivos estáticos
├── src/
│   ├── components/      # Componentes React
│   │   ├── CharacterCard.jsx
│   │   ├── CharacterGrid.jsx
│   │   ├── FavoritesModal.jsx
│   │   ├── Pagination.jsx
│   │   ├── SearchBar.jsx
│   │   └── ViewToggle.jsx
│   ├── hooks/           # Custom hooks
│   │   └── useFavorites.js
│   ├── services/        # Servicios API
│   │   └── api.js
│   ├── styles/          # Estilos CSS
│   │   └── [archivos CSS]
│   ├── utils/           # Utilidades
│   │   └── helpers.js
│   ├── App.jsx         # Componente principal
│   └── main.jsx        # Punto de entrada
├── dist/               # Build de producción
├── package.json
├── vite.config.js      # Configuración optimizada para GitHub Pages
└── README.md
```

## 🎮 Cómo Usar

1. **Explorar personajes:** La aplicación carga automáticamente los primeros 20 personajes
2. **Buscar:** Utiliza la barra de búsqueda para encontrar personajes específicos
3. **Cambiar vista:** Alterna entre vista carrusel y cuadrícula
4. **Agregar favoritos:** Haz clic en el corazón para guardar personajes
5. **Ver favoritos:** Abre el modal de favoritos para ver tu colección
6. **Navegar páginas:** Usa la paginación para explorar todos los personajes

## 🌟 Características Técnicas

### Componentes Principales

- **App.jsx** - Componente principal con gestión de estado global
- **CharacterCard.jsx** - Tarjeta individual de personaje con altura uniforme
- **CharacterGrid.jsx** - Layout en cuadrícula responsivo (1-5 columnas)
- **FavoritesModal.jsx** - Modal para gestión de favoritos
- **useFavorites.js** - Hook personalizado para persistencia de favoritos

### Responsive Design

- **Móvil:** 1 columna (< 640px)
- **Tablet:** 2 columnas (640px - 768px)
- **Desktop:** 3-4 columnas (768px - 1024px)
- **Large:** 5 columnas (> 1024px)

### Optimizaciones

- Lazy loading de imágenes
- Gestión eficiente de estado con React hooks
- CSS Grid optimizado para diferentes viewports
- Carga condicional de componentes

## 🤝 Contribuir

1. Fork el proyecto
2. Crea tu rama de feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📋 To-Do / Mejoras Futuras

- [ ] Implementar filtros por especie y estado
- [ ] Agregar modo oscuro/claro
- [ ] Implementar búsqueda avanzada
- [ ] Agregar animaciones de transición
- [ ] Implementar infinite scroll
- [ ] Agregar tests unitarios

## 📄 Licencia

Distribuido bajo la Licencia MIT. Ver `LICENSE` para más información.

## 🙏 Agradecimientos

- [Rick and Morty API](https://rickandmortyapi.com/) por proporcionar los datos
- [SwiperJS](https://swiperjs.com/) por el componente de carrusel
- [Vite](https://vitejs.dev/) por la excelente herramienta de desarrollo

---

⭐ **¡Si te gusta este proyecto, dale una estrella!** ⭐
