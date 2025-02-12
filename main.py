from fastapi import FastAPI
from pydantic import BaseModel
import uuid

app = FastAPI()

# In-memory database simulation
users = {}
partner_draws = {}

class User(BaseModel):
    name: str
    email: str

class PartnerDraw(BaseModel):
    name: str
    contribution: float
    members: list

class Payment(BaseModel):
    user_id: str
    draw_id: str
    amount: float

@app.post("/register")
def register_user(user: User):
    user_id = str(uuid.uuid4())
    users[user_id] = user.dict()
    return {"user_id": user_id, "message": "User registered successfully"}

@app.post("/create_draw")
def create_draw(draw: PartnerDraw):
    draw_id = str(uuid.uuid4())
    partner_draws[draw_id] = draw.dict()
    return {"draw_id": draw_id, "message": "Partner draw created successfully"}

@app.post("/pay")
def make_payment(payment: Payment):
    if payment.user_id not in users:
        return {"error": "User not found"}
    if payment.draw_id not in partner_draws:
        return {"error": "Partner draw not found"}
    return {"status": "Success", "message": "Payment processed (simulated)", "amount": payment.amount}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
