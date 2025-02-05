import graphene

class ProductType(graphene.ObjectType):
    id = graphene.ID()
    name = graphene.String()
    description = graphene.String()
    price = graphene.Float()
