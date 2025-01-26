from django.db import connection
from .models import Autores

class AutorRepository:

    @staticmethod
    def eliminar_autor(id):
        try:
            with connection.cursor() as cursor:
                cursor.execute('CALL EliminarAutor(%s)', [id])
        except Exception as e:
            raise Exception(f"Error al eliminar el autor: {str(e)}")

    @staticmethod
    def actualizar_autor(id, nombre, pais):
        try:
            with connection.cursor() as cursor:
                cursor.execute('CALL ActualizarAutor(%s, %s, %s)', [id, nombre, pais])
        except Exception as e:
            raise Exception(f"Error al actualizar el autor: {str(e)}")

    @staticmethod
    def crear_autor(nombre, pais):
        try:
            with connection.cursor() as cursor:
                cursor.execute('CALL CrearAutor(%s, %s)', [nombre, pais])
        except Exception as e:
            raise Exception(f"Error al crear el autor: {str(e)}")

    @staticmethod
    def consultar_autores():
        with connection.cursor() as cursor:
            cursor.execute('CALL obtener_autores()')
            rows = cursor.fetchall()
            columns = [col[0] for col in cursor.description]
            return [dict(zip(columns, row)) for row in rows]
