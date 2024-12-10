"""_summary_
    Escribe un programa en Python que solicite al usuario ingresar una lista de números enteros separados por comas. Luego, el programa debe: 
        1.	Mostrar la longitud de la lista ingresada.
        2.	Calcular y mostrar la suma de todos los números en la lista.
        3.	Verificar si un número específico ingresado por el usuario está presente en la lista. Si está presente, mostrar su índice en la lista.
        4.	Eliminar el último elemento de la lista y mostrar la lista actualizada.
"""

input_user = input('Ingresa una lista de numeros enteros separados por comas: ')
input_list = input_user.split(',')

list_int = [int(num) for num in input_list]

len_list = len(input_list)
print(f'La longitud de la lista es {len_list}')
print('#####################')


sum_list = sum(list_int)
print(f'La suma de todos los numeros en la lista es: {sum_list}')

try:
    check_num = int( input('Ingresa un numero para verificar su presencia en la lista: '))
    index_num = list_int.index(check_num)
    print(f'El numero {check_num} está presente en la pisición {index_num} de la lista')
except ValueError:
    print(f'El número {check_num} no se encuentra en la lista')

list_int.pop()
print(f'La lista actualizada despues de eliminar el ultimo elemento: {list_int}')