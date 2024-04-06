from django.db import models
from django.core.validators import MaxValueValidator,MinValueValidator

# Create your models here.
class sellerID(models.Model):
    seller_id =models.CharField(max_length=100)
    def __str__(self)->str:
        return self.seller_id
class seller(models.Model):
    seller_id=models.OneToOneField(sellerID,related_name="sellerid",on_delete=models.CASCADE)
    seller_name=models.CharField(max_length=10)
    seller_location=models.CharField(max_length=50)
    seller_rating=models.IntegerField(default=0,validators=[MinValueValidator(0),MaxValueValidator(5)])
    def __str__(self)->str:
        return self.seller_name
    
class Product(models.Model):
    seller = models.ForeignKey(seller, on_delete=models.CASCADE, related_name="products")
    product_name = models.CharField(max_length=100)
    product_description=models.TextField()
    
    # Add other fields for product details such as price, description, etc.
    def __str__(self):
        return self.product_name
    