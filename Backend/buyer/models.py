from django.db import models

# Create your models here.
class buyerID(models.Model):
    buyer_id =models.CharField(max_length=100)
    def __str__(self)->str:
        return self.buyer_id
class buyer(models.Model):
    buyer_id=models.OneToOneField(buyerID,related_name="buyerid",on_delete=models.CASCADE)
    buyer_name=models.CharField(max_length=10)
    buyer_prompt=models.TextField()
    buyer_location=models.CharField(max_length=50)
    def __str__(self)->str:
        return self.buyer_name