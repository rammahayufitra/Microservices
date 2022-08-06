from fastapi import FastAPI
from redis_om import get_redis_connection  

app = FastAPI()

redis = get_redis_connection(
    host="redis-13788.c252.ap-southeast-1-1.ec2.cloud.redislabs.com",
    port=11844, 
    password="A5BebnkvwbWcp536B0sf2VKJppjaOOgP",
    decode_responses=True 
)

@app.get("/")
async def root():
    return {"message":"Hello World"}