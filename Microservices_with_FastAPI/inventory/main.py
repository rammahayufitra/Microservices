from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from redis_om import get_redis_connection, HashModel  

app = FastAPI()

app.add_middleware(
    CORSMiddleware, 
    allow_origins=['http://localhost:3000'],
    allow_methods=['*'],
    allow_headers=['*'],
)

redis = get_redis_connection(
    host="redis-13788.c252.ap-southeast-1-1.ec2.cloud.redislabs.com",
    port=13788, 
    password="A5BebnkvwbWcp536B0sf2VKJppjaOOgP",
    decode_responses=True 
)


class Product(HashModel):
    name: str
    price: float 
    quantity: int 

    class Meta: 
        database = redis

@app.get("/")
async def root():
    return {"message":"Hello World"}

@app.get("/products")
def all():
    return Product.all_pks()
