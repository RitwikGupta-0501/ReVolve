from faker import Faker
import random
from .models import sellerID, seller
from django.core.validators import MaxValueValidator, MinValueValidator

fake = Faker()

def seed_db(n=10):
    
    allproducts = [
    'Steel (AISI 1018, AISI 304)',
    'Aluminum (AA1100, AA6061)',
    'Copper (C1100, C17000)',
    'Plastics (HDPE, PVC, ABS)',
    'Wood (Softwood, Hardwood)',
    'Concrete (Portland cement, aggregates)',
    'Glass (Soda-lime, Borosilicate)',
    'Ceramics (Alumina, Zirconia)',
    'Composites (Fiberglass, Carbon fiber, Kevlar)',
    'Textiles (Cotton, Polyester, Nylon)'
]
    imperfections = [
    'Scratches, mill scale',
    'Surface variations',
    'Oxidation',
    'Color variations, minor molding defects',
    'Grain variations, knots',
    'Surface imperfections, color variations',
    'Air bubbles',
    'Slight color or texture variations',
    'Resin imperfections, surface irregularities',
    'Weave or color inconsistencies'
]
    for _ in range(n):
        try:
            # Create a sellerID instance
            seller_id = sellerID.objects.create(seller_id=fake.uuid4())

            # Create a seller instance
            product_name=random.choice(allproducts) 
            product_description = random.choice(imperfections)
            seller_instance = seller.objects.create(
                seller_id=seller_id,
                seller_name=fake.name(),
                seller_location=fake.address(),
                seller_rating=random.randint(0, 5),  # Random rating between 0 and 5
                product_name=product_name,
                product_description=product_description
            )
            # Create a Product instance

            print(f"Created Seller: {seller_instance}")
            print(f"Created Product: {product_name}")

        except Exception as e:
            print(f"An error occurred: {e}")
            
            
def delete_product():
    products=sellerID.objects.all()
    for p in products:
        p.delete()
