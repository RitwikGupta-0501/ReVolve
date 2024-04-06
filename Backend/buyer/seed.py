from faker import Faker
import random
from .models import *
fake=Faker()

def seed_db(n=10) -> None:
    for _ in range(0,n):
        try:
            Department_obj=Department.objects.all()
            department=Department_obj[random.randint(0,len(Department_obj)-1)]
            student_id=f'STU-0{random.randint(100,999)}'
            student_name=fake.name()
            student_email=fake.email()
            student_age=random.randint(20,30)
            student_address=fake.address()
            student_id_obj=StudentID.objects.create(student_id=student_id)

            student_obj=Student.objects.create(
                student_name=student_name,
                student_id=student_id_obj,
                student_email=student_email,
                department=department,
                student_age=student_age,
                student_address=student_address
            )
        except Exception:
            print(e)