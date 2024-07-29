# Portafolio personal 

## Descripción

Este es el portafolio de Jader, un desarrollador apasionado por el uso de tecnologías modernas para crear aplicaciones web robustas y atractivas. El portafolio está construido usando **Django**, un potente framework de Python, y **Bootstrap** para el diseño visual, logrando una interfaz limpia y responsive.



## Características

### Clases y Modelos

El proyecto consta de dos modelos principales, **Post** y **Project**, que aunque no están relacionados entre sí, permiten presentar tanto los proyectos realizados por el desarrollador como publicaciones individuales.

#### Project

Cada entrada de `Project` representa un proyecto realizado y contiene la siguiente información:

- **Título**: Nombre del proyecto.
- **Descripción**: Una breve descripción del proyecto.
- **Imagen**: Una imagen representativa del proyecto.
- **URL**: Un enlace que redirige al repositorio de GitHub correspondiente.

#### Post

Cada entrada de `Post` contiene detalles sobre una publicación o artículo y posee los siguientes atributos:

- **Título**: Título de la publicación.
- **Descripción**: Una descripción del contenido.
- **Imagen**: Imagen que acompaña a la publicación.
- **Fecha**: La fecha en que se realizó la publicación.

## Tecnologías Utilizadas

- **Django 5.0.7**: Framework web de alto nivel que facilita el desarrollo rápido y limpio de aplicaciones web.
- **SQLite**: Base de datos ligera utilizada para almacenar los datos de la aplicación.
- **Bootstrap**: Framework de diseño web para crear interfaces responsivas y modernas.
- **Whitenoise**: Para la gestión eficiente de archivos estáticos.
  
<img src="https://static.djangoproject.com/img/logos/django-logo-negative.png" alt="Django" width="150" /> <img src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo-shadow.png" alt="Bootstrap" width="100" />

## Requerimientos

Los principales paquetes y dependencias utilizados en este proyecto incluyen:

- `Django==5.0.7`
- `gunicorn==22.0.0`
- `whitenoise==6.7.0`
- `pillow==10.4.0`

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/jadercaro/Portfolio-Personal-Website.git
    ```
2. Navega a la carpeta del repositorio 
  ```bash
  cd Portfolio-Personal-Website
  ```
3. Instala las dependencias
   ```bash
   pip install -r requirements.txt
   ```
4. python manage.py migrate
```bash
   pip install -r requirements.txt
   ```
5. Inicia el servidor
```bash
  python manage.py runserver 
   ```

## Contribuciones
¡Las contribuciones son bienvenidas! Si tienes alguna sugerencia o mejora, no dudes en hacer un fork del repositorio y enviar un pull request.


# Visualización final del website
![vokoscreenNG-2024-07-29_17-02-55](https://github.com/user-attachments/assets/02a8d67b-6b6b-4cca-8de5-1f73222a7010)

# Link del sitio desplegado en Heroku 
- ([Click para ir al sitio web](https://portfolio-jader-5b3e436f79ca.herokuapp.com/))
