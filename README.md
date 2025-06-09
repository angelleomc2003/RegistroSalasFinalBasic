# 💻 Sistema de Registro de Entradas y Salidas - Gestión de Salas de Cómputo

### 📍 Facultad de Ingeniería de Sistemas  
**Universidad Francisco De Paula Santander** – Cúcuta, Norte de Santander  
**Ingeniería de Sistemas – 2025 - I**

---

## 👥 Elaborado por:

- **Keyly Johana Ovallos Díaz** - 1152214  
- **Ángel Leonardo Montañez Corredor** - 1152283  

Materia: *Seminario Integrador II*

---

## 📌 1. Presentación General del Anteproyecto

### 📖 Título
**Sistema de registro de entradas y salidas para la gestión de salas de computadores en la Facultad de Ingeniería de Sistemas.**

### 🧩 Planteamiento del Problema

Las salas de cómputo son espacios clave para el desarrollo académico de los estudiantes. Sin embargo, la ausencia de un sistema automatizado para el control de ingreso y salida complica la trazabilidad del uso de los equipos, afectando la gestión, responsabilidad y mantenimiento de estos recursos. Actualmente, este proceso es manual, poco eficiente y propenso a errores.

Un sistema digital permitiría asociar el uso de un equipo a un usuario específico, facilitando la identificación en caso de daños, y optimizando tanto la gestión como la disponibilidad de los equipos.

---

### 🎯 Justificación

Implementar una aplicación que registre de manera digital las entradas y salidas permitirá:

- Optimizar la gestión de salas de cómputo.
- Mejorar la trazabilidad del uso de equipos.
- Asignar responsabilidades de forma justa y clara.
- Reducir los tiempos y errores del registro manual.
- Facilitar la toma de decisiones a través de reportes y estadísticas.

---

## ✅ Objetivos

### Objetivo General
Desarrollar una aplicación que registre de forma digital la entrada y salida de estudiantes en las salas de cómputo, mejorando el control de acceso y la gestión de equipos.

### Objetivos Específicos
- Diseñar una interfaz sencilla para registrar entradas y salidas.
- Implementar funcionalidades básicas como agregar, editar y eliminar registros.
- Almacenar los datos localmente de forma persistente.
- Reducir errores humanos mediante una experiencia de usuario clara y guiada.

---

## 🧭 Alcances y Delimitaciones

### Alcance
- Registro de entrada y salida de estudiantes.
- Visualización de registros en tablas dinámicas.
- Gestión de computadores y asistencias.
- Almacenamiento de datos en `localStorage`.

### Delimitaciones
- Uso exclusivo para las salas de la Facultad de Ingeniería de Sistemas.
- Limitado a estudiantes y personal autorizado.
- No está integrado con otros sistemas universitarios.
- Dependencia de que los estudiantes realicen el registro correctamente.

### Limitaciones
- Sin integración externa.
- El éxito depende del compromiso del usuario final.
- Versión inicial sujeta a tiempo y recursos limitados.
- Se consideran futuras mejoras.

---

## 🛠️ Estructura del Proyecto

### Tecnologías Utilizadas

- **React.js** – Framework principal para la interfaz.
- **Tailwind CSS** – Para estilos rápidos y modernos.
- **LocalStorage API** – Persistencia de datos sin servidor.

### Principales Módulos

- `Rooms.js` – Gestión de salas.
- `Computers.js` – Gestión de computadores con opciones para editar y eliminar.
- `Attendance.js` – Registro de asistencias con funcionalidades CRUD.

---

## 📂 Estructura de Archivos

```

src/
│
├── pages/
│   ├── Rooms.js
│   ├── Computers.js
│   └── Attendance.js
│
├── utils/
│   └── storage.js   // Contiene las funciones saveData y loadData
│
├── App.js
└── index.js

````

---

## 🖼️ Interfaz de Usuario

Cada módulo cuenta con una interfaz amigable:

- Campos de entrada claros.
- Botones accesibles y con retroalimentación visual.
- Tablas limpias y ordenadas.

---

## 🚀 Cómo Ejecutar el Proyecto

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/registro-salas.git
````

2. Instala las dependencias:

```bash
cd registro-salas
npm install
```

3. Ejecuta la aplicación:

```bash
npm start
```

4. Abre en tu navegador:

```
http://localhost:3000
```

---

## 📈 Futuras Mejoras

* Integración con base de datos externa (Firebase, Supabase, etc.)
* Exportación de reportes en PDF/Excel.
* Autenticación de usuarios.
* Registro de hora y fecha automática.

---

## 🏁 Conclusión

Este proyecto representa un paso hacia la digitalización de procesos internos en ambientes académicos. La trazabilidad, eficiencia y claridad que ofrece mejora significativamente la gestión de recursos tecnológicos dentro de las salas de cómputo.

---

**¡Gracias por revisar este proyecto!**