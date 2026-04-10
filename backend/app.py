from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
CORS(app)
def init_db():
    conn = sqlite3.connect("database.db")
    cursor = conn.cursor()

    cursor.execute("""
    CREATE TABLE IF NOT EXISTS parcels (
        parcel_id TEXT PRIMARY KEY,
        name TEXT,
        customer_name TEXT,
        email TEXT,
        address TEXT,
        date TEXT,
        status TEXT
    )
    """)

    conn.commit()
    conn.close()

init_db()

@app.route("/add", methods=["POST"])
def add():
    data = request.json
    conn = sqlite3.connect("database.db")
    cursor = conn.cursor()

    try:
        cursor.execute("""
        INSERT INTO parcels (parcel_id, name, customer_name, email, address, date, status)
        VALUES (?, ?, ?, ?, ?, ?, ?)
        """, (
            data["parcel_id"],
            data["name"],
            data["customer_name"],
            data["email"],
            data["address"],
            data["date"],
            data["status"]
        ))

        conn.commit()
        return jsonify({"message": "Parcel added successfully"}), 200

    except sqlite3.IntegrityError:
        return jsonify({"error": "Parcel ID already exists"}), 400

    finally:
        conn.close()

@app.route("/track/<parcel_id>", methods=["GET"])
def track(parcel_id):
    conn = sqlite3.connect("database.db")
    cursor = conn.cursor()

    cursor.execute("SELECT * FROM parcels WHERE parcel_id = ?", (parcel_id,))
    row = cursor.fetchone()
    conn.close()

    if row:
        return jsonify({
            "parcel_id": row[0],
            "name": row[1],
            "customer_name": row[2],
            "email": row[3],
            "address": row[4],
            "date": row[5],
            "status": row[6]
        })
    else:
        return jsonify({"error": "Parcel not found"}), 404

if __name__ == "__main__":
    app.run(debug=True)