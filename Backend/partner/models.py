from django.db import models
from django.contrib.postgres.fields import ArrayField

# Create your models here.
class partnerID(models.Model):
    partner_id =models.CharField(max_length=100)
    def __str__(self)->str:
        return self.partner_id
class partner(models.Model):
    partner_id=models.OneToOneField(partnerID,on_delete=models.CASCADE)
    partner_name=models.CharField(max_length=25)
    partner_location=models.CharField(max_length=30)

class Service(models.Model):
    partner = models.ForeignKey(partner, on_delete=models.CASCADE, related_name='services')
    service_name = models.CharField(max_length=30)
    service_price = models.DecimalField(max_digits=10, decimal_places=2)
    
    