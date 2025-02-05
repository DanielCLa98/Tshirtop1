import graphene
from models.product import Product
from config.database import SessionLocal

class ProductType(graphene.ObjectType):
    id = graphene.ID()
    name = graphene.String()
    description = graphene.String()
    price = graphene.Float()

class QueryType(graphene.ObjectType):
    get_product = graphene.Field(ProductType, id=graphene.Int())
    get_all_products = graphene.List(ProductType)

    def resolve_get_product(self, info, id):
        session = SessionLocal()
        try:
            return session.query(Product).filter(Product.id == id).first()
        finally:
            session.close()

    def resolve_get_all_products(self, info):
        session = SessionLocal()
        try:
            return session.query(Product).all()
        finally:
            session.close()
