"""
# EJERCICIO 1- MANIPULACIÓN DE LISTAS EN PYTHON
Escribe un programa en Python que solicite al usuario ingresar una lista de números enteros separados por comas. Luego, el programa debe: 
1.	Mostrar la longitud de la lista ingresada.
2.	Calcular y mostrar la suma de todos los números en la lista.
3.	Verificar si un número específico ingresado por el usuario está presente en la lista. Si está presente, mostrar su índice en la lista.
4.	Eliminar el último elemento de la lista y mostrar la lista actualizada.
"""

input = input('Ingresa numeros separados por comas: ')
lista = input.split(', ')
longitud_lista = len(lista)

print(f'La longitud de la lista es : {longitud_lista}')
print(lista)
