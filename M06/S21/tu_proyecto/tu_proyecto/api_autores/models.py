from django.db import models

class Autores(models.Model):
    app_label = 'api_autores'  # Agrega explícitamente el app_label
    Nombre = models.CharField(max_length=100)
    Pais = models.CharField(max_length=50)
    
    def __str__(self):
        return self.Nombre