"""_summary_
    Crea un programa en Python que permita a un profesor gestionar una lista de estudiantes. El programa debe ofrecer las siguientes opciones:
    1.	Agregar un nuevo estudiante con su nombre y su calificación.
    2.	Mostrar la lista de estudiantes junto con sus calificaciones.
    3.	Buscar un estudiante por nombre y mostrar su calificación.
    4.	Eliminar a un estudiante de la lista.
    
"""

def mostrar_menu():
    print("\nGestión de Estudiantes")
    print("1. Agregar un nuevo estudiante")
    print("2. Mostrar la lista de estudiantes")
    print("3. Buscar un estudiante por nombre")
    print("4. Eliminar un estudiante")
    print("5. Salir")

def agregar_estudiante(estudiantes):
    nombre = input("Ingrese el nombre del estudiante: ").strip()
    calificacion = None
    while True:
        try:
            calificacion = float(input(f"Ingrese la calificación de {nombre}: "))
            if 0 <= calificacion <= 10:
                break
            else:
                print("Por favor, ingrese una calificación entre 0 y 10.")
        except ValueError:
            print("Por favor, ingrese un valor numérico válido.")
    estudiantes[nombre] = calificacion
    print(f"Estudiante {nombre} agregado con calificación {calificacion}.")

def mostrar_estudiantes(estudiantes):
    if not estudiantes:
        print("La lista de estudiantes está vacía.")
    else:
        print("\nLista de estudiantes y sus calificaciones:")
        for nombre, calificacion in estudiantes.items():
            print(f"- {nombre}: {calificacion}")

def buscar_estudiante(estudiantes):
    nombre = input("Ingrese el nombre del estudiante que desea buscar: ").strip()
    if nombre in estudiantes:
        print(f"{nombre} tiene una calificación de {estudiantes[nombre]}.")
    else:
        print(f"El estudiante {nombre} no está en la lista.")

def eliminar_estudiante(estudiantes):
    nombre = input("Ingrese el nombre del estudiante que desea eliminar: ").strip()
    if nombre in estudiantes:
        del estudiantes[nombre]
        print(f"Estudiante {nombre} eliminado de la lista.")
    else:
        print(f"El estudiante {nombre} no está en la lista.")

def main():
    estudiantes = {}
    while True:
        mostrar_menu()
        opcion = input("Seleccione una opción: ").strip()
        if opcion == "1":
            agregar_estudiante(estudiantes)
        elif opcion == "2":
            mostrar_estudiantes(estudiantes)
        elif opcion == "3":
            buscar_estudiante(estudiantes)
        elif opcion == "4":
            eliminar_estudiante(estudiantes)
        elif opcion == "5":
            print("Saliendo del programa. ¡Hasta luego!")
            break
        else:
            print("Opción no válida. Por favor, seleccione una opción entre 1 y 5.")


