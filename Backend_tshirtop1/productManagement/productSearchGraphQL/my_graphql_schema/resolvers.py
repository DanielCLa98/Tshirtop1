from graphene import ObjectType, String, Float, ID
import graphene
from models.product import Product
from sqlalchemy.orm import Session
from config.database import SessionLocal

class ProductType(ObjectType):
    id = ID()
    name = String()
    description = String()
    price = Float()

class Query(ObjectType):
    get_product = graphene.Field(ProductType, id=ID(required=True))
    get_all_products = graphene.List(ProductType)

    def resolve_get_product(self, info, id):
        session: Session = SessionLocal()
        try:
            return session.query(Product).filter(Product.id == id).first()
        finally:
            session.close()

    def resolve_get_all_products(self, info):
        session: Session = SessionLocal()
        try:
            return session.query(Product).all()
        finally:
            session.close()
