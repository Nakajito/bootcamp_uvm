from django.urls import path
from . import views

urlpatterns = [
    path('eliminar_autor/<int:id>/', views.eliminar_autor, name='eliminar_autor'),
    path('actualizar_autor/<int:id>/', views.actualizar_autor, name='actualizar_autor'),
    path('crear_autor/', views.crear_autor, name='crear_autor'),
    path('consulta_autores/', views.consulta_autores, name='consulta_autores'),  # Nueva ruta
]