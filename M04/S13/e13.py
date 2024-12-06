print(f'Identifica el numeyo con mayor valor de dos valores\n')
a = int(input('Ingresa el primer valor: '))
b = int(input('Ingresa el segundo valor: '))

if a > b:
    print(f'El numero con mayor denominación es: {a}')
elif a < b:
    print(f'El numero con mayor denominación es {b}')
else:
    print(f'Los numeros son iguales')

print(f'\nCalcula la sumatoria de los numeros 1 al 10\n')
sum = sum(range(1,11))
print(f'La sumatoria del 1 al 10 es {sum}')