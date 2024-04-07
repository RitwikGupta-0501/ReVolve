from django.shortcuts import render
from django.http import JsonResponse
from . models import *
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import json


# Create your views here.
def partner(request):
   service_Name = request.POST.get("service")

   partner = seller.objects.filter(service_Name__icontains=lservice_Name)

   response_data = [] 

   i=1
   for obj in sellers:
      data = {}
      data['id'] = i
      data['partner_name'] = obj.partner_name
      data['partner_rating'] = obj.partner_rating
      data['partner_location']=obj.partner_location
      data['service_name']=obj.service_name
      data['service_price']=obj.servic_price
      response_data += [data,]
      i += 1

   return JsonResponse(response_data)