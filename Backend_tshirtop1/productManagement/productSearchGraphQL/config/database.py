from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import os
from dotenv import load_dotenv

# Load environment variables from the .env file
load_dotenv()

# Get the database URL from the environment variable
DATABASE_URL = os.getenv("DATABASE_URL")

if not DATABASE_URL:
    raise ValueError("❌ ERROR: DATABASE_URL is not set in .env file")

# Create the SQLAlchemy engine using the database URL
engine = create_engine(DATABASE_URL, pool_pre_ping=True)

# Create the SessionLocal class to manage database sessions
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Declare the base class for the models
Base = declarative_base()

# Ensure tables are created
def init_db():
    Base.metadata.create_all(bind=engine)

init_db()
