/**
 * ==========================================================================
 * GEOMATEK TRAINING - JAVASCRIPT PRINCIPAL (UNIFICADO Y COMPLETO)
 * ==========================================================================
 */

const APPS_SCRIPT_URL = "https://script.google.com/macros/s/TU_SCRIPT_ID/exec";

/**
 * Categorías de la Barra Lateral (index.html)
 */
const SIDEBAR_CATEGORIES = [
  { id: "top", label: "Los más valorados", icon: "⭐" },
  { id: "Topografía", label: "Topografía", icon: "👷🏻‍♀️" },
  { id: "Escaner", label: "Escáner Láser & SLAM", icon: "📡" },
  { id: "Drones", label: "DJI FlightHub & Drones", icon: "🛰️" },
  { id: "IA", label: "IA Aplicada a la Geomática", icon: "🤖" },
  { id: "all", label: "Todos los programas", icon: "📚" }
];

/**
 * Catálogo Completo de Cursos
 */
const COURSES_DATA = [
  {
    id: "LEICA-RTC360",
    type: "PROGRAMA PRESENCIAL",
    typeClass: "type-certificate",
    btnClass: "btn-card-burgundy",
    category: "Escaner",
    isTop: true,
    isNew: true, // ÚNICO CON LA CINTA NUEVO PROGRAMA
    title: "Levantamiento de Alta Precisión con Escáner Estacionario (TLS)",
    subtitle: "Flujo integral con Leica RTC360, Cyclone REGISTER 360 y modelado e inspección 3D en Cyclone 3DR.",
    duration: "18 horas | Presencial",
    pageUrl: "cursos/curso-leica-escaner.html",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "ALTIMETRIA-NIVELACION",
    type: "PROGRAMA PRESENCIAL",
    typeClass: "type-certificate",
    btnClass: "btn-card-burgundy",
    category: "Topografía",
    isTop: true,
    isNew: false,
    title: "Control Altimétrico: Nivelación Geométrica y Trigonométrica",
    subtitle: "Nivelación diferencial simple y compuesta, compensación de errores normativos FGCC y control de pendientes en obras viales y ferroviarias.",
    duration: "12 horas | Presencial",
    pageUrl: "cursos/curso-altimetria-nivelacion.html",
    image: "https://mkasa.mx/wp-content/uploads/2024/11/topo2-e1732659606732-804x321.png?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "SLAM-MOBILE",
    type: "PROGRAMA PRESENCIAL",
    typeClass: "type-certificate",
    btnClass: "btn-card-burgundy",
    category: "Escaner",
    isTop: true,
    isNew: false,
    title: "Levantamiento y Mapeo 3D con Escáner Láser Móvil (SLAM)",
    subtitle: "Captura continua en movimiento para minería subterránea, edificación y entornos GNSS denegados.",
    duration: "12 horas | Presencial",
    pageUrl: "cursos/curso-escaner-movil.html",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "DJI-FLIGHTHUB2",
    type: "CURSO ONLINE",
    typeClass: "type-online",
    btnClass: "btn-card-lime",
    category: "Drones",
    isTop: true,
    isNew: false,
    title: "Gestión de Flotas y Misiones Cloud con DJI FlightHub 2",
    subtitle: "Planificación de vuelos autónomos 2D/3D, transmisión en tiempo real y sincronización remota con DJI Dock.",
    duration: "12 horas | Online",
    pageUrl: "cursos/curso-dji-flighthub2.html",
    image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "IA-GEOMATICA",
    type: "PROGRAMA DE ESPECIALIZACIÓN",
    typeClass: "type-executive",
    btnClass: "btn-card-gold",
    category: "IA",
    isTop: true,
    isNew: false,
    title: "Inteligencia Artificial Aplicada a la Geomática",
    subtitle: "Visión por computadora, segmentación automática de nubes de puntos y modelos de lenguaje para análisis geoespacial.",
    duration: "24 horas | Online",
    pageUrl: "cursos/curso-ia-geomatica.html",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80"
  }
];

/**
 * Catálogo de Webinars
 */
const WEBINARS_DATA = [
  {
    id: "WEBINAR-GENIA",
    type: "WEBINAR EN VIVO",
    typeClass: "type-webinar",
    btnClass: "btn-card-purple",
    title: "Inteligencia Artificial Generativa (GenIA) en el Levantamiento de Datos",
    subtitle: "Cómo los modelos generativos y agentes inteligentes están transformando la captura y análisis en topografía.",
    date: "📅 15 de Septiembre | 19:00 hrs (GMT-5)",
    pageUrl: "cursos/webinar-genia-datos.html",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "WEBINAR-BIM-GEO",
    type: "WEBINAR EN VIVO",
    typeClass: "type-webinar",
    btnClass: "btn-card-purple",
    title: "Metodología BIM Aplicada a la Geomática y Topografía",
    subtitle: "Integración de nubes de puntos escaneadas (Scan-to-BIM), modelos IFC y control de calidad en obra.",
    date: "📅 24 de Septiembre | 19:00 hrs (GMT-5)",
    pageUrl: "cursos/webinar-bim-geomatica.html",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80"
  }
];

let activeFilter = "all";

/**
 * Datos del Estudiante (Sesión Local para Aula Virtual)
 */
let currentStudent = {
  name: localStorage.getItem("geomatek_student_name") || "Luis Raúl Osorio Muñoz",
  email: localStorage.getItem("geomatek_student_email") || "estudiante@geomatek.edu.pe",
  code: localStorage.getItem("geomatek_student_code") || "GEO-2026-001"
};

/**
 * Lecciones del Curso Leica RTC360 & Cyclone 3DR
 */
const LEICA_COURSE_LESSONS = [
  {
    moduleIndex: 1,
    moduleTitle: "Getting Started & Fundamentos",
    lessons: [
      {
        id: "L1-1",
        title: "1.1 Video: Principios de Captura y Operación del Leica RTC360",
        type: "VIDEO",
        typeTag: "VIDEO • 12 MIN",
        embedType: "youtube",
        embedUrl: "https://www.youtube-nocookie.com/embed/5F_iW9y_fX4?rel=0&modestbranding=1",
        description: "En esta lección exploraremos los principios de medición del escáner láser terrestre Leica RTC360, el funcionamiento del sistema Visual Inertial System (VIS) y los protocolos de seguridad en campo."
      },
      {
        id: "L1-2",
        title: "1.2 Diapositivas: Presentación Interactiva de Campo y VIS",
        type: "SLIDES",
        typeTag: "DIAPOSITIVAS • CALAMÉO / DRIVE",
        embedType: "calameo",
        description: "Diapositivas interactivas sobre el flujo de trabajo en sitio, selección de resoluciones de escaneo (Low, Med, High) y captura HDR."
      },
      {
        id: "L1-3",
        title: "1.3 Cuestionario: Verificación de Parámetros de Campo",
        type: "QUIZ",
        typeTag: "PRUEBA • 4 PREGUNTAS",
        embedType: "quiz",
        description: "Evaluación interactiva sobre parámetros de resolución, enlaces visuales y tolerancias de distanciamiento en campo."
      }
    ]
  },
  {
    moduleIndex: 2,
    moduleTitle: "Post-registro en Cyclone REGISTER 360",
    lessons: [
      {
        id: "L2-1",
        title: "2.1 Video: Importación y Enlace Nube a Nube (Cloud-to-Cloud)",
        type: "VIDEO",
        typeTag: "VIDEO • 18 MIN",
        embedType: "youtube",
        embedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?rel=0",
        description: "Importación de proyectos crudos desde la memoria flash del RTC360, validación de enlaces VIS y ajuste Bundle Adjustment nube a nube."
      },
      {
        id: "L2-2",
        title: "2.2 Diapositivas: Georreferenciación Absoluta y Dianas B&W",
        type: "SLIDES",
        typeTag: "DIAPOSITIVAS • CALAMÉO / DRIVE",
        embedType: "calameo",
        description: "Metodología de georreferenciación utilizando coordenadas de estación total o GPS diferencial sobre dianas y esferas reflectantes."
      },
      {
        id: "L2-3",
        title: "2.3 Tarea: Validación de Reporte de Registro con Error < 3 mm",
        type: "TASK",
        typeTag: "ENTREGABLE • DATASET 15 POSICIONES",
        embedType: "task",
        taskInstructions: "Descarga el dataset de 15 posiciones en la planta minera, realiza el registro C2C, georreferencia con las 4 dianas de control y genera el reporte de calidad en PDF con error residual inferior a 3 mm."
      }
    ]
  },
  {
    moduleIndex: 3,
    moduleTitle: "Modelado 3D y Mallado en Cyclone 3DR",
    lessons: [
      {
        id: "L3-1",
        title: "3.1 Video: Creación de Mallas 3D y Texturizado Fotográfico",
        type: "VIDEO",
        typeTag: "VIDEO • 20 MIN",
        embedType: "youtube",
        embedUrl: "https://www.youtube-nocookie.com/embed/5F_iW9y_fX4?rel=0",
        description: "Herramientas avanzadas de mallado adaptativo, cerrado de agujeros, suavizado de aristas y proyección de ortofotos fotorrealistas en Cyclone 3DR."
      },
      {
        id: "L3-2",
        title: "3.2 Diapositivas: Modelos Digitales de Terreno (DTM) y Curvas",
        type: "SLIDES",
        typeTag: "DIAPOSITIVAS • CALAMÉO / DRIVE",
        embedType: "calameo",
        description: "Extracción automática de terreno filtrando estructuras y vegetación, generación de curvas de nivel a equidistancias configurables."
      },
      {
        id: "L3-3",
        title: "3.3 Tarea: Cubicación y Cálculo Volumétrico de Acopios",
        type: "TASK",
        typeTag: "ENTREGABLE • CUBICACIÓN CERTIFICADA",
        embedType: "task",
        taskInstructions: "Importa la nube de puntos del acopio de mineral, genera el plano base de comparación y calcula el volumen de corte y relleno con reporte certificado."
      }
    ]
  },
  {
    moduleIndex: 4,
    moduleTitle: "Inspección, Túneles y Lecturas Técnicas",
    lessons: [
      {
        id: "L4-1",
        title: "4.1 Video: Mapas de Desviación contra Modelos BIM e Inspección de Túneles",
        type: "VIDEO",
        typeTag: "VIDEO • 22 MIN",
        embedType: "youtube",
        embedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?rel=0",
        description: "Comparación tridimensional Surface Inspection, mapas de calor con escalas de tolerancia cromáticas y análisis de sobre-excavación en túneles."
      },
      {
        id: "L4-2",
        title: "4.2 Diapositivas: Reportes 3D PDF y Exportación CAD/DWG",
        type: "SLIDES",
        typeTag: "DIAPOSITIVAS • CALAMÉO / DRIVE",
        embedType: "calameo",
        description: "Publicación interactiva de entregables en PDF 3D que permiten rotación y medición sin software especializado."
      },
      {
        id: "L4-3",
        title: "4.3 Lectura Técnica 1: Guía de Control de Verticalidad, Planicidad y Tolerancias en Obra Civil",
        type: "READING",
        typeTag: "DOCUMENTO TÉCNICO • 10 MIN",
        embedType: "reading_1"
      },
      {
        id: "L4-4",
        title: "4.4 Lectura Técnica 2: Flujo Scan-to-BIM e Interoperabilidad OpenBIM (IFC)",
        type: "READING",
        typeTag: "DOCUMENTO TÉCNICO • 12 MIN",
        embedType: "reading_2"
      }
    ]
  }
];

let currentLessonIndex = { modIdx: 0, lesIdx: 0 };
let completedLessonIds = JSON.parse(localStorage.getItem("geomatek_completed_lessons") || "[]");

/**
 * Inicializador Global al Cargar el DOM
 */
document.addEventListener("DOMContentLoaded", () => {
  // 1. Si estamos en index.html (Catálogo)
  if (document.getElementById("filter-menu") && document.getElementById("courses-grid")) {
    renderSidebar();
    renderCourses();
    renderWebinars();
  }

  // 2. Si estamos en páginas de cursos individuales (Acordeón interactivo)
  document.querySelectorAll(".acc-header").forEach(header => {
    header.addEventListener("click", () => {
      const parentItem = header.closest(".acc-item");
      if (parentItem) {
        const body = parentItem.querySelector(".acc-body");
        if (body) {
          const isCurrentlyHidden = body.style.display === "none";
          body.style.display = isCurrentlyHidden ? "block" : "none";
        }
      }
    });
  });

  // 3. Manejadores de Formularios de Inscripción en todas las páginas
  document.querySelectorAll(".custom-enroll-form").forEach(form => {
    form.addEventListener("submit", handleCustomEnrollSubmit);
  });

  const enrollForm = document.getElementById("enroll-form");
  if (enrollForm) {
    enrollForm.addEventListener("submit", handleCustomEnrollSubmit);
  }

  // 4. Si estamos en el Aula Virtual (aula-virtual-leica.html)
  if (document.getElementById("lessons-tree-container")) {
    initLMSPlayer();
  }
});

/* ==========================================================================
   LÓGICA DEL CATÁLOGO (index.html)
   ========================================================================== */
function renderSidebar() {
  const menu = document.getElementById("filter-menu");
  if (!menu) return;

  menu.innerHTML = SIDEBAR_CATEGORIES.map(cat => {
    let count = 0;
    if (cat.id === "all") {
      count = COURSES_DATA.length;
    } else if (cat.id === "top") {
      count = COURSES_DATA.filter(c => c.isTop).length;
    } else {
      count = COURSES_DATA.filter(c => c.category === cat.id).length;
    }

    const isActive = cat.id === activeFilter ? "active" : "";

    return `
      <li class="filter-item ${isActive}" onclick="setFilter('${cat.id}')">
        <span class="filter-icon">${cat.icon}</span>
        <span class="filter-label">${cat.label} (${count})</span>
      </li>
    `;
  }).join("");
}

function setFilter(filterId) {
  activeFilter = filterId;
  renderSidebar();
  renderCourses();
}

function renderCourses() {
  const container = document.getElementById("courses-grid");
  if (!container) return;

  let filtered = [];
  if (activeFilter === "all") {
    filtered = COURSES_DATA;
  } else if (activeFilter === "top") {
    filtered = COURSES_DATA.filter(c => c.isTop);
  } else {
    filtered = COURSES_DATA.filter(c => c.category === activeFilter);
  }

  container.innerHTML = filtered.map(course => `
    <div class="course-card">
      <div class="card-img-wrapper">
        <img src="${course.image}" alt="${course.title}" class="card-img">
        ${course.isNew ? `<div class="ribbon-fold">NUEVO PROGRAMA</div>` : ""}
      </div>
      
      <div class="card-type-bar ${course.typeClass}">
        ${course.type}
      </div>

      <div class="card-body">
        <h3 class="card-title">${course.title}</h3>
        <p class="card-subtitle">${course.subtitle}</p>
        
        <div class="card-meta">
          ${course.duration}
        </div>

        <a href="${course.pageUrl}" class="btn-card ${course.btnClass}">
          VER PROGRAMA
        </a>
      </div>
    </div>
  `).join("");
}

function renderWebinars() {
  const container = document.getElementById("webinars-grid");
  if (!container) return;

  container.innerHTML = WEBINARS_DATA.map(webinar => `
    <div class="course-card">
      <div class="card-img-wrapper">
        <img src="${webinar.image}" alt="${webinar.title}" class="card-img">
      </div>
      
      <div class="card-type-bar ${webinar.typeClass}">
        ${webinar.type}
      </div>

      <div class="card-body">
        <h3 class="card-title">${webinar.title}</h3>
        <p class="card-subtitle">${webinar.subtitle}</p>
        
        <div class="card-meta">
          <strong>${webinar.date}</strong>
        </div>

        <a href="${webinar.pageUrl}" class="btn-card ${webinar.btnClass}">
          RESERVAR CUPO GRATIS
        </a>
      </div>
    </div>
  `).join("");
}

/* ==========================================================================
   LÓGICA DEL AULA VIRTUAL LMS (aula-virtual-leica.html)
   ========================================================================== */
function initLMSPlayer() {
  updateUserDisplay();
  renderLessonsTree();
  loadLesson(0, 0);
  updateProgressBar();
}

function updateUserDisplay() {
  const display = document.getElementById("user-name-display");
  const certName = document.getElementById("cert-student-name");
  if (display) display.innerText = currentStudent.name;
  if (certName) certName.innerText = currentStudent.name;
}

function renderLessonsTree(filterQuery = "") {
  const container = document.getElementById("lessons-tree-container");
  if (!container) return;

  container.innerHTML = LEICA_COURSE_LESSONS.map((mod, mIdx) => {
    const totalLessons = mod.lessons.length;
    const completedCount = mod.lessons.filter(l => completedLessonIds.includes(l.id)).length;
    const isModuleFinished = completedCount === totalLessons;

    const filteredLessons = mod.lessons.filter(l => 
      filterQuery === "" || l.title.toLowerCase().includes(filterQuery.toLowerCase())
    );

    if (filteredLessons.length === 0 && filterQuery !== "") return "";

    return `
      <div class="lms-module-item">
        <div class="lms-module-header" onclick="toggleLmsModule(${mIdx})">
          <div class="lms-module-header-left">
            <span class="mod-check-icon">${isModuleFinished ? "✔" : "○"}</span>
            <span>Módulo ${mod.moduleIndex}: ${mod.moduleTitle}</span>
          </div>
          <span class="mod-count-badge">${completedCount}/${totalLessons} <span id="mod-arrow-${mIdx}">▲</span></span>
        </div>
        
        <div class="lms-module-body" id="mod-body-${mIdx}">
          ${filteredLessons.map((les, lIdx) => {
            const isDone = completedLessonIds.includes(les.id);
            const isActive = currentLessonIndex.modIdx === mIdx && currentLessonIndex.lesIdx === lIdx;
            
            return `
              <div class="lms-lesson-item ${isActive ? 'active' : ''}" onclick="loadLesson(${mIdx}, ${lIdx})">
                <span class="lesson-check-status ${isDone ? 'done' : ''}">${isDone ? "✔" : ""}</span>
                <div class="lesson-title-text">
                  <div>${les.title}</div>
                  <span class="lesson-meta-tag">${les.typeTag}</span>
                </div>
              </div>
            `;
          }).join("")}
        </div>
      </div>
    `;
  }).join("");
}

function toggleLmsModule(mIdx) {
  const body = document.getElementById(`mod-body-${mIdx}`);
  const arrow = document.getElementById(`mod-arrow-${mIdx}`);
  if (body) {
    const isHidden = body.style.display === "none";
    body.style.display = isHidden ? "block" : "none";
    if (arrow) arrow.innerText = isHidden ? "▲" : "▼";
  }
}

function filterLessons() {
  const q = document.getElementById("lesson-search-input").value.trim();
  renderLessonsTree(q);
}

function loadLesson(modIdx, lesIdx) {
  currentLessonIndex = { modIdx, lesIdx };
  const lesson = LEICA_COURSE_LESSONS[modIdx].lessons[lesIdx];
  if (!lesson) return;

  const titleEl = document.getElementById("current-lesson-title");
  const badgeEl = document.getElementById("current-lesson-type-badge");
  if (titleEl) titleEl.innerText = lesson.title;
  if (badgeEl) badgeEl.innerText = lesson.type;

  const isDone = completedLessonIds.includes(lesson.id);
  const statusBadge = document.getElementById("lesson-status-badge");
  if (statusBadge) {
    statusBadge.innerText = isDone ? "ESTADO: COMPLETADA ✔" : "NOTA: EN PROGRESO";
    statusBadge.style.color = isDone ? "#16a34a" : "#475569";
  }

  const viewerContainer = document.getElementById("dynamic-viewer-container");
  if (!viewerContainer) return;
  viewerContainer.innerHTML = "";

  if (lesson.embedType === "youtube") {
    viewerContainer.innerHTML = `
      <iframe class="youtube-iframe-wrapper" 
        src="${lesson.embedUrl}" 
        title="${lesson.title}" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen>
      </iframe>
    `;
  } else if (lesson.embedType === "calameo") {
    viewerContainer.innerHTML = `
      <div style="display:flex; flex-direction:column; height:100%; width:100%;">
        <div style="background:#1e293b; padding:0.5rem 1rem; color:#e2e8f0; font-size:0.8rem; display:flex; justify-content:space-between; align-items:center;">
          <span>Diapositivas Interactivas Calaméo / Drive - Módulo ${modIdx + 1}</span>
          <a href="https://drive.google.com" target="_blank" style="color:var(--mit-lime); text-decoration:none; font-weight:700;">Abrir en Pantalla Completa ↗</a>
        </div>
        <iframe class="calameo-slide-wrapper" 
          src="//v.calameo.com/?bkcode=000000000000000000000&mode=mini&view=slide" 
          allowfullscreen>
        </iframe>
      </div>
    `;
  } else if (lesson.embedType === "reading_1") {
    viewerContainer.innerHTML = `
      <div class="reading-viewer-wrapper">
        <article class="reading-article">
          <div class="reading-header">
            <span class="badge-tag-burgundy">LECTURA TÉCNICA 1</span>
            <h1>Guía de Control de Verticalidad, Planicidad y Tolerancias en Obra Civil</h1>
            <span class="reading-meta">Autor: Arq. Luis R. Osorio Muñoz | Departamento de Geomática</span>
          </div>
          <div class="reading-body">
            <p>El escaneo láser terrestre (TLS) con estaciones Leica RTC360 permite evaluar desviaciones geométricas milimétricas en estructuras de concreto armado y metálicas, superando las limitaciones de la topografía puntual convencional.</p>
            
            <h2>1. Metodología de Inspección de Superficies</h2>
            <p>Para determinar la verticalidad de columnas, muros de contención o pilotes, se genera un plano paramétrico ideal alineado al eje de diseño. Cyclone 3DR proyecta la distancia euclidiana de cada punto de la nube contra dicho plano, generando un mapa de calor continuo.</p>
            
            <div class="reading-highlight-box">
              <strong>Tolerancias según Norma ASTM / ACI 117:</strong> La desviación máxima admisible en verticalidad para columnas de hasta 12 m de altura es de ±6 mm. Las zonas marcadas en rojo/azul representan excedentes o desplomes críticos.
            </div>

            <h2>2. Control de Planicidad en Losas (Floor Flatness - FF / FL)</h2>
            <p>Mediante el cálculo de derivadas de curvatura en mallas trianguladas, se extraen líneas de nivel y mapas de concavidad/convexidad que identifican empozamientos de agua o irregularidades antes del vaciado de pisos industriales.</p>
          </div>
        </article>
      </div>
    `;
  } else if (lesson.embedType === "reading_2") {
    viewerContainer.innerHTML = `
      <div class="reading-viewer-wrapper">
        <article class="reading-article">
          <div class="reading-header">
            <span class="badge-tag-burgundy">LECTURA TÉCNICA 2</span>
            <h1>Flujo de Trabajo Scan-to-BIM e Interoperabilidad OpenBIM (IFC)</h1>
            <span class="reading-meta">Autor: Arq. Luis R. Osorio Muñoz | Departamento de Geomática</span>
          </div>
          <div class="reading-body">
            <p>La metodología Scan-to-BIM consiste en transformar nubes de puntos georreferenciadas en modelos de información de la construcción (BIM) con niveles de desarrollo que oscilan entre LOD 200 y LOD 400.</p>
            
            <h2>1. Sistemas de Coordenadas y Georreferenciación Compartida</h2>
            <p>Para garantizar que la nube de puntos coincida con el modelo en Autodesk Revit o Navisworks, es indispensable definir el Punto Base del Proyecto (Project Base Point) y el Punto de Reconocimiento (Survey Point) vinculados al elipsoide WGS84 / SIRGAS.</p>

            <div class="reading-highlight-box">
              <strong>Estándar OpenBIM (IFC 4.3):</strong> Los archivos exportados desde Cyclone 3DR en formato IFC permiten cargar geometrías tridimensionales inspeccionadas directamente en visores BIM universales sin pérdida de atributos.
            </div>

            <h2>2. Detección de Conflictos (Clash Detection)</h2>
            <p>Al cruzar la nube de puntos del estado actual de obra (As-Built) con las tuberías e instalaciones mecánicas proyectadas (MEP), se evitan sobrecostos por interferencias no detectadas en campo.</p>
          </div>
        </article>
      </div>
    `;
  } else if (lesson.embedType === "quiz" || lesson.embedType === "task") {
    viewerContainer.innerHTML = `
      <div class="reading-viewer-wrapper">
        <div class="reading-article">
          <div class="reading-header">
            <span class="badge-tag-burgundy">${lesson.type === 'QUIZ' ? 'EVALUACIÓN DE MÓDULO' : 'TAREA PRÁCTICA'}</span>
            <h1>${lesson.title}</h1>
          </div>
          <div class="reading-body">
            <p>${lesson.description || lesson.taskInstructions || 'Completa la siguiente actividad práctica:'}</p>
            <div style="background:#f8fafc; border:1px solid #e2e8f0; padding:1.5rem; border-radius:6px; margin:1.5rem 0;">
              <h4>Instrucciones de Envío:</h4>
              <p>Sube tu reporte en PDF o archivo de proyecto comprimido para la revisión del instructor.</p>
              <input type="file" style="margin-top:1rem; display:block;">
            </div>
            <button class="btn-submit" onclick="alert('Entregable registrado correctamente.'); markCurrentLessonComplete();">Enviar Tarea al Instructor</button>
          </div>
        </div>
      </div>
    `;
  }

  renderLessonsTree();
}

function markCurrentLessonComplete() {
  const lesson = LEICA_COURSE_LESSONS[currentLessonIndex.modIdx].lessons[currentLessonIndex.lesIdx];
  if (!completedLessonIds.includes(lesson.id)) {
    completedLessonIds.push(lesson.id);
    localStorage.setItem("geomatek_completed_lessons", JSON.stringify(completedLessonIds));
  }

  updateProgressBar();
  renderLessonsTree();
  loadLesson(currentLessonIndex.modIdx, currentLessonIndex.lesIdx);
}

function goToNextLesson() {
  const { modIdx, lesIdx } = currentLessonIndex;
  const currentMod = LEICA_COURSE_LESSONS[modIdx];

  if (lesIdx + 1 < currentMod.lessons.length) {
    loadLesson(modIdx, lesIdx + 1);
  } else if (modIdx + 1 < LEICA_COURSE_LESSONS.length) {
    loadLesson(modIdx + 1, 0);
  } else {
    alert("¡Felicitaciones! Has completado todas las lecciones del curso.");
    if (completedLessonIds.length >= getTotalLessonsCount()) {
      openCertificateModal();
    }
  }
}

function goToPrevLesson() {
  const { modIdx, lesIdx } = currentLessonIndex;

  if (lesIdx - 1 >= 0) {
    loadLesson(modIdx, lesIdx - 1);
  } else if (modIdx - 1 >= 0) {
    const prevMod = LEICA_COURSE_LESSONS[modIdx - 1];
    loadLesson(modIdx - 1, prevMod.lessons.length - 1);
  }
}

function getTotalLessonsCount() {
  return LEICA_COURSE_LESSONS.reduce((acc, m) => acc + m.lessons.length, 0);
}

function updateProgressBar() {
  const total = getTotalLessonsCount();
  const completed = completedLessonIds.length;
  const pct = Math.round((completed / total) * 100);

  const fill = document.getElementById("progress-fill");
  const text = document.getElementById("progress-percentage-text");
  const certBtn = document.getElementById("btn-get-certificate");
  const certNote = document.getElementById("cert-note");

  if (fill) fill.style.width = `${pct}%`;
  if (text) text.innerText = `${pct}% completado`;

  if (certBtn) {
    if (pct >= 100) {
      certBtn.disabled = false;
      certBtn.classList.add("unlocked");
      if (certNote) certNote.innerText = "✓ ¡Listo para emitir!";
    } else {
      certBtn.disabled = true;
      certBtn.classList.remove("unlocked");
      if (certNote) certNote.innerText = `Completa el 100% para desbloquear (${completed}/${total})`;
    }
  }
}

/* ==========================================================================
   MODALES Y FORMULARIOS
   ========================================================================== */
function openLoginModal() {
  const m = document.getElementById("login-modal");
  if (m) m.classList.add("active");
}

function closeLoginModal() {
  const m = document.getElementById("login-modal");
  if (m) m.classList.remove("active");
}

function handleStudentLogin(e) {
  e.preventDefault();
  const name = document.getElementById("login-name").value;
  const email = document.getElementById("login-email").value;
  const code = document.getElementById("login-code").value;

  currentStudent = { name, email, code };
  localStorage.setItem("geomatek_student_name", name);
  localStorage.setItem("geomatek_student_email", email);
  localStorage.setItem("geomatek_student_code", code);

  updateUserDisplay();
  closeLoginModal();
}

function openCertificateModal() {
  const m = document.getElementById("certificate-modal");
  if (m) m.classList.add("active");
}

function closeCertificateModal() {
  const m = document.getElementById("certificate-modal");
  if (m) m.classList.remove("active");
}

function toggleDiscussion() {
  const modal = document.getElementById("discussion-modal");
  if (modal) modal.classList.toggle("active");
}

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => {});
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

async function handleCustomEnrollSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const submitBtn = form.querySelector("button[type='submit']");
  const feedback = form.querySelector(".form-feedback-box") || form.querySelector(".feedback-box");

  const courseId = form.getAttribute("data-course-id") || (document.getElementById("form-course-id") ? document.getElementById("form-course-id").value : "GENERIC");
  const courseTitle = form.getAttribute("data-course-title") || (document.getElementById("form-course-title") ? document.getElementById("form-course-title").value : "Curso General");
  
  const nameInput = form.querySelector(".input-name") || form.querySelector("#fullName");
  const emailInput = form.querySelector(".input-email") || form.querySelector("#email");
  const phoneInput = form.querySelector(".input-phone") || form.querySelector("#phone");
  const countryInput = form.querySelector(".input-country") || form.querySelector("#country");

  const fullName = nameInput ? nameInput.value : "";
  const email = emailInput ? emailInput.value : "";
  const phone = phoneInput ? phoneInput.value : "";
  const country = countryInput ? countryInput.value : "";

  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerText = "Registrando...";
  }

  const payload = { courseId, courseTitle, fullName, email, phone, country };

  try {
    if (APPS_SCRIPT_URL.includes("TU_SCRIPT_ID")) {
      setTimeout(() => {
        if (feedback) {
          feedback.style.color = "var(--mit-burgundy)";
          feedback.innerText = "✓ Registro exitoso (Modo demostración).";
        }
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerText = "Confirmar Inscripción";
        }
        form.reset();
      }, 500);
      return;
    }

    const res = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      body: JSON.stringify(payload)
    });
    const data = await res.json();

    if (data.status === "success") {
      if (feedback) {
        feedback.style.color = "#15803d";
        feedback.innerText = "✓ Solicitud registrada con éxito. Revisa tu correo.";
      }
      form.reset();
    } else {
      if (feedback) {
        feedback.style.color = "#b91c1c";
        feedback.innerText = "Ocurrió un error al procesar el registro.";
      }
    }
  } catch (err) {
    if (feedback) {
      feedback.style.color = "#b91c1c";
      feedback.innerText = "Error de conexión con el servidor.";
    }
  } finally {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerText = "Confirmar Inscripción";
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // ==========================================
  // 1. GESTIÓN DINÁMICA DEL FAVICON
  // ==========================================
  const esSubcarpeta = window.location.pathname.includes('/cursos/');
  const rutaFavicon = (esSubcarpeta ? '../' : '') + 'favicon.ico?x72644';

  let favicon = document.querySelector("link[rel*='icon']");
  if (!favicon) {
    favicon = document.createElement('link');
    favicon.rel = 'icon';
    favicon.type = 'image/x-icon';
    document.head.appendChild(favicon);
  }
  favicon.href = rutaFavicon;

  // ==========================================
  // 2. BUSCADOR Y FILTRADO DE CURSOS
  // ==========================================
  const inputBuscador = document.getElementById('search-courses') || document.getElementById('buscador-cursos');
  const contenedorCursos = document.getElementById('grid-cursos') || document.querySelector('.courses-grid') || document.querySelector('.programas-grid');
  
  if (inputBuscador && contenedorCursos) {
    const tarjetasCursos = contenedorCursos.querySelectorAll('.course-card, .programa-card, .card-curso');

    inputBuscador.addEventListener('input', (e) => {
      const termino = e.target.value.toLowerCase().trim();

      tarjetasCursos.forEach((tarjeta) => {
        // Busca coincidencias en títulos, párrafos y badges
        const textoTarjeta = tarjeta.innerText.toLowerCase();
        
        if (textoTarjeta.includes(termino)) {
          tarjeta.style.display = ''; // Muestra la tarjeta si coincide
          tarjeta.classList.remove('curso-oculto');
        } else {
          tarjeta.style.display = 'none'; // Oculta si no coincide
          tarjeta.classList.add('curso-oculto');
        }
      });

      // Manejo de mensaje cuando no hay resultados
      let mensajeSinResultados = document.getElementById('no-results-msg');
      const coincidencias = contenedorCursos.querySelectorAll('.course-card:not([style*="display: none"]), .programa-card:not([style*="display: none"]), .card-curso:not([style*="display: none"])');

      if (coincidencias.length === 0) {
        if (!mensajeSinResultados) {
          mensajeSinResultados = document.createElement('div');
          mensajeSinResultados.id = 'no-results-msg';
          mensajeSinResultados.style.textAlign = 'center';
          mensajeSinResultados.style.padding = '40px 20px';
          mensajeSinResultados.style.width = '100%';
          mensajeSinResultados.style.gridColumn = '1 / -1';
          mensajeSinResultados.innerHTML = `<p style="color: #64748b; font-size: 1.1rem;">No se encontraron cursos que coincidan con "<strong>${e.target.value}</strong>".</p>`;
          contenedorCursos.appendChild(mensajeSinResultados);
        }
      } else if (mensajeSinResultados) {
        mensajeSinResultados.remove();
      }
    });
  }
});