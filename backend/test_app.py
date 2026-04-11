import unittest
import json
from app import app

class TestParcelAPI(unittest.TestCase):

    def setUp(self):
        self.client = app.test_client()
        self.client.testing = True

    def test_add_parcel(self):
        response = self.client.post("/add", json={
            "parcel_id": "T123",
            "name": "Test Parcel",
            "customer_name": "Anusha",
            "email": "test@mail.com",
            "address": "Dublin",
            "date": "10-04-2026",
            "status": "In Transit"
        })
        self.assertEqual(response.status_code, 200)

    def test_get_parcels(self):
        response = self.client.get("/parcels")
        self.assertEqual(response.status_code, 200)

    def test_track_parcel(self):
        response = self.client.get("/track/T123")
        self.assertIn(response.status_code, [200, 404])

    def test_update_parcel(self):
        response = self.client.put("/update/T123", json={
            "status": "Delivered"
        })
        self.assertIn(response.status_code, [200, 404])

    def test_delete_parcel(self):
        response = self.client.delete("/delete/T123")
        self.assertIn(response.status_code, [200, 404])


if __name__ == "__main__":
    unittest.main()