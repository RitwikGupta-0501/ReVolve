from django.urls import path
from .views import *

urlpatterns=[
    path('',partner,name="partner"),
]