from flask import Flask, request, jsonify, send_from_directory
from graphene import Schema
from my_graphql_schema.resolvers import Query

app = Flask(__name__)

# Define el esquema GraphQL
schema = Schema(query=Query)

@app.route("/graphql", methods=["GET", "POST"])
def graphql_server():
    if request.method == "POST":
        data = request.get_json()
        query = data.get("query")
        variables = data.get("variables", None)
    else:
        query = request.args.get("query")
        variables = None

    if query:
        result = schema.execute(query, variable_values=variables)
        if result.errors:
            return jsonify({"errors": [str(error) for error in result.errors]}), 400
        return jsonify(result.data), 200
    else:
        return jsonify({"error": "No query provided"}), 400

@app.route("/")
def playground():
    return send_from_directory("static", "playground.html")

if __name__ == "__main__":
    app.run(debug=True, port=3010)  # 🔥 Ahora corre en el puerto 3010
