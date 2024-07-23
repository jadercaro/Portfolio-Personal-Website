#Usa una imagen de base de python
FROM python:3.9

#Establecemos el directorio de trabajo
WORKDIR /app

# Copia los archivos de requerimientos al directorio de trabajo
COPY requirements.txt /app/
COPY . /app/

# Instala las dependencias del proyecto
RUN pip install --no-cache-dir -r requirements.txt

# Expone el puerto en el que se ejecutará la aplicación
EXPOSE 8000

# Comando para ejecutar la aplicación
CMD ["python3", "manage.py", "runserver", "0.0.0.0:8000"]