import os
from graphql import build_schema

# Path al esquema
SCHEMA_PATH = os.path.join(os.path.dirname(__file__), "schema.graphql")

if not os.path.exists(SCHEMA_PATH):
    raise FileNotFoundError(f"Schema file not found at: {SCHEMA_PATH}")

# Carga dinámica del esquema
with open(SCHEMA_PATH, "r") as schema_file:
    schema = build_schema(schema_file.read())
