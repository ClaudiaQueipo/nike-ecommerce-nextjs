# 🏃‍♂️ Nike E-commerce - Next.js

Plataforma de e-commerce moderna inspirada en Nike, construida con las últimas tecnologías web.

## 📋 Descripción

Este proyecto es una aplicación de comercio electrónico completa que incluye gestión de productos, carrito de compras, proceso de checkout y autenticación de usuarios. Diseñada siguiendo principios de **Screaming Architecture** para mantener una estructura clara y escalable.

## 🚀 Stack Tecnológico

### Core

- **[Next.js 15](https://nextjs.org/)** - React framework con App Router y Turbopack
- **[React 19](https://react.dev/)** - Biblioteca UI
- **[TypeScript](https://www.typescriptlang.org/)** - Tipado estático

### Estilos

- **[Tailwind CSS 4](https://tailwindcss.com/)** - Framework CSS utility-first

### Base de Datos & ORM

- **[PostgreSQL](https://www.postgresql.org/)** - Base de datos relacional
- **[Drizzle ORM](https://orm.drizzle.team/)** - TypeScript ORM

### Estado & Autenticación

- **[Zustand](https://zustand-demo.pmnd.rs/)** - Manejo de estado global
- **[Better Auth](https://www.better-auth.com/)** - Sistema de autenticación

## 🛠️ Herramientas de Desarrollo

### Code Quality

- **[ESLint](https://eslint.org/)** - Linter de JavaScript/TypeScript
- **[Prettier](https://prettier.io/)** - Formateador de código
- **[lint-staged](https://github.com/okonet/lint-staged)** - Linter pre-commit

### Git & Commits

- **[Husky](https://typicode.github.io/husky/)** - Git hooks
- **[Commitlint](https://commitlint.js.org/)** - Validación de mensajes de commit
- **[Commitizen](https://commitizen.github.io/cz-cli/)** - CLI interactivo para commits convencionales

## 📁 Estructura del Proyecto

```
├── app/                      # Next.js App Router (rutas y páginas)
├── core/                     # Infraestructura técnica
│   ├── auth/                 # Configuración de autenticación
│   ├── config/               # Variables de entorno y configuración
│   ├── db/                   # Base de datos y schemas
│   ├── store/                # Stores de Zustand
│   └── types/                # Tipos TypeScript base
├── shared/                   # Código compartido entre features
│   ├── components/           # Componentes UI reutilizables
│   ├── hooks/                # Custom hooks
│   ├── lib/                  # Utilidades y helpers
│   └── styles/               # Estilos globales
├── features/                 # Features del negocio (Screaming Architecture)
│   ├── products/             # Gestión de productos
│   ├── cart/                 # Carrito de compras
│   ├── checkout/             # Proceso de pago
│   └── user/                 # Gestión de usuarios
└── public/                   # Assets estáticos
```

### Principios de Arquitectura

- **`core/`** - Infraestructura técnica reutilizable (auth, db, config)
- **`shared/`** - Componentes y utilidades compartidas del dominio
- **`features/`** - Módulos de negocio independientes y autocontenidos

## 🚦 Scripts Disponibles

```bash
# Desarrollo
pnpm dev              # Iniciar servidor de desarrollo
pnpm build            # Build de producción
pnpm start            # Iniciar servidor de producción

# Code Quality
pnpm lint             # Ejecutar ESLint
pnpm format           # Formatear código con Prettier

# Base de Datos
pnpm db:generate      # Generar migraciones de Drizzle
pnpm db:migrate       # Ejecutar migraciones
pnpm db:push          # Push de schema a la BD
pnpm db:studio        # Abrir Drizzle Studio

# Git
pnpm commit           # Commit interactivo con Commitizen
```

## ⚙️ Configuración Inicial

1. **Clonar el repositorio**

   ```bash
   git clone <repository-url>
   cd nike-ecommerce-nextjs
   ```

2. **Instalar dependencias**

   ```bash
   pnpm install
   ```

3. **Configurar variables de entorno**

   ```bash
   cp .env.example .env.local
   ```

   Editar `.env.local` con tus credenciales:
   - `BETTER_AUTH_SECRET` - Secret key (mínimo 32 caracteres)
   - `DATABASE_URL` - URL de conexión a PostgreSQL

4. **Iniciar desarrollo**

   ```bash
   pnpm dev
   ```

## 📝 Convenciones de Commits

Este proyecto usa [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: nueva funcionalidad
fix: corrección de bugs
docs: cambios en documentación
style: cambios de formato (no afectan el código)
refactor: refactorización de código
perf: mejoras de rendimiento
test: agregar o modificar tests
build: cambios en el build o dependencias
ci: cambios en CI/CD
chore: tareas de mantenimiento
```

**Recomendado:** Usa `pnpm commit` para commits interactivos guiados.

## 🔒 Pre-commit Hooks

Los siguientes hooks se ejecutan automáticamente:

- **pre-commit** - Lint y format del código staged
- **commit-msg** - Validación de mensajes conventional commits

---

Hecho con ❤️, ☕ y varios bugs que se convirtieron en features | Next.js + TypeScript
