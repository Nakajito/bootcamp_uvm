# Creamos un array vacío para almacenar las calificaciones de los alumnos
calificaciones = [0] * 5

# Pedimos al usuario que ingrese las calificaciones de los 5 alumnos
for i in range(5):
    calificaciones[i] = float(input(f"Ingrese la calificación del alumno {i + 1}: "))

# Mostramos todas las calificaciones ingresadas
print("\nCalificaciones ingresadas:")
for i, nota in enumerate(calificaciones, start=1):
    print(f"Alumno {i}: {nota}")

# Calculamos y mostramos el promedio de las calificaciones
promedio = sum(calificaciones) / len(calificaciones)
print(f"\nEl promedio de las calificaciones es: {promedio:.2f}")

# Permitimos al usuario modificar la calificación de un alumno específico
alumno_modificar = int(input("\nIngrese el número del alumno (1-5) para modificar su calificación: ")) - 1
nueva_calificacion = float(input("Ingrese la nueva calificación: "))
calificaciones[alumno_modificar] = nueva_calificacion

# Mostramos la lista actualizada de calificaciones
print("\nCalificaciones actualizadas:")
for i, nota in enumerate(calificaciones, start=1):
    print(f"Alumno {i}: {nota}")