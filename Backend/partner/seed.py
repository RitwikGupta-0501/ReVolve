from faker import Faker
import random
from .models import partnerID, partner
from django.core.validators import MaxValueValidator, MinValueValidator

fake = Faker()

def seed_db(n=10):
    ServiceName = [
    "Melting",
    "Casting",
    "Rolling",
    "Forging",
    "Machining",
    "Injection Molding",
    "Extrusion",
    "Weaving",
    "Cutting",
]
    ServicePrice = [
    100,  # Melting
    250,  # Casting
    100,  # Rolling
    500,  # Forging
    1000, # Machining
    200,  # Injection Molding
    100,  # Extrusion
    100,  # Weaving
    50,   # Cutting
]

    
    for _ in range(n):
        try:
            # Create a partnerID instance
            partner_id = partnerID.objects.create(partner_id=fake.uuid4())

            # Create a partner instance
            service_name=random.choice(ServiceName) 
            service_price = random.choice(ServicePrice)
            partner_instance = partner.objects.create(
                partner_id=partner_id,
                partner_name=fake.name(),
                partner_location=fake.address(),
                service_name=service_name,
                service_price=service_price
            )
            # Create a Product instance

            print(f"Created partner: {service_name}")
            print(f"Created Product: {service_price}")

        except Exception as e:
            print(f"An error occurred: {e}")
            
            
def delete_product():
    products=partnerID.objects.all()
    for p in products:
        p.delete()
