from django.shortcuts import render
from django.http import JsonResponse
from . models import *

# Create your views here.
def getReactView(request):
   product_Name = request.POST.get("material")
   product_Type = request.POST.get("grade")

   sellers = seller.objects.filter(product_name__icontains=product_Name) & seller.objects.filter(product_name__icontains=product_Type)

   response_data = [] 

   i=1
   for obj in sellers:
      data = {}
      data['id'] = i
      data['seller_name'] = obj.seller_name
      data['seller_rating'] = obj.seller_rating
      data['prod_desc'] = obj.product_description
      response_data += [data,]
      i += 1

   return JsonResponse(response_data)