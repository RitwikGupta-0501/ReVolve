from faker import Faker
import random
from .models import *
fake=Faker()

def seed_db(n=10) -> None:
    for _ in range(0,n):
        try:
             # Create a buyerID instance
            buyer_id = buyerID.objects.create(buyer_id=fake.uuid4())

            # Create a buyer instance
            buyer_instance = buyer.objects.create(
                buyer_id=buyer_id,
                buyer_name=fake.name(),
                # buyer_prompt=fake.text(),
                buyer_location=fake.address()
            )

            print(f"Created Buyer: {buyer_instance}")
           
        except Exception:
            print(e)
            
