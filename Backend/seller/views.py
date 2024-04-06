from django.shortcuts import render
from django.http import JsonResponse
from . models import *

# Create your views here.
def getReactView(request):
   product_Name = request.POST.get("product_name")
   product_Type = request.POST.get("product_type")

   selected_products = Product.objects.get(product_name=product_Name)
   selected_sellers =  seller.objects.get(seller_id=selected_products.seller)

   response_data = {'seller_id' : selected_sellers.seller_id,
                    'seller_name' : selected_sellers.seller_name,
                    'prod_desc' : selected_products.product_description }


   return JsonResponse(response_data)