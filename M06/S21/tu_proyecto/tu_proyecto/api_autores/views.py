
import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
from .repository import AutorRepository

@csrf_exempt
@require_http_methods(["DELETE"])
def eliminar_autor(request, id):
    try:
        AutorRepository.eliminar_autor(id)
        return JsonResponse({'status': 'success', 'message': 'Autor eliminado'})
    except Exception as e:
        return JsonResponse({'status': 'error', 'message': str(e)}, status=500)

@csrf_exempt
@require_http_methods(["POST"])
def actualizar_autor(request, id):
    try:
        data = json.loads(request.body.decode('utf-8'))
        nombre = data.get('nombre')
        pais = data.get('pais')
        if not nombre or not pais:
            return JsonResponse({'status': 'error', 'message': 'Datos incompletos'}, status=400)
        AutorRepository.actualizar_autor(id, nombre, pais)
        return JsonResponse({'status': 'success', 'message': 'Autor actualizado'})
    except Exception as e:
        return JsonResponse({'status': 'error', 'message': str(e)}, status=500)

@csrf_exempt
@require_http_methods(["POST"])
def crear_autor(request):

    if request.method == 'POST':
        try:
            # Analiza el cuerpo de la solicitud JSON
            data = json.loads(request.body.decode('utf-8'))
            nombre = data.get('nombre')
            pais = data.get('pais')

            if not nombre or not pais:
                return JsonResponse({'status': 'error', 'message': 'Datos incompletos'}, status=400)

            AutorRepository.crear_autor(nombre, pais)
            return JsonResponse({'status': 'success', 'message': 'Autor creado'})
        except json.JSONDecodeError:
            return JsonResponse({'status': 'error', 'message': 'JSON inválido'}, status=400)
        except Exception as e:
            return JsonResponse({'status': 'error', 'message': str(e)}, status=500)

    return JsonResponse({'message': 'Método no permitido'}, status=405)
    
@require_http_methods(["GET"])
def consulta_autores(request):
    try:
        autores = AutorRepository.consultar_autores()
        return JsonResponse({'status': 'success', 'autores': autores})
    except Exception as e:
        return JsonResponse({'status': 'error', 'message': str(e)}, status=500)
