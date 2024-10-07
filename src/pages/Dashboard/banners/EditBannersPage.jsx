import React from "react";
import DefaultLayout from "../../../components/Dashboard/DefaultLayout";
import { Card, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const EditBannersPage = () => {
    const navigate = useNavigate();
  return (
    <DefaultLayout>
      <h3>EditBanners</h3>
      <Card className="p-3">
        <Form>
          <Form.Group>
            <Form.Label>No ID</Form.Label>
            <Form.Control type="number" placeholder="Masukkan Nomor ID" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Gambar</Form.Label>
            <Form.Control type="file" placeholder="Masukkan Gambar" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Keterangan</Form.Label>
            <Form.Control type="text" placeholder="Masukkan Keterangan" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Role</Form.Label>
            <Form.Control type="text" placeholder="Masukkan Role" />
          </Form.Group>
          <Button
            type="submit"
            className="btn btn-info text-white btn-sm mt-3 me-2 "
          >
            Save
          </Button>
          <Button
            className="btn-warning text-white mt-3 btn-sm"
            onClick={() => navigate("/admin/banners")}
          >
            Close
          </Button>
        </Form>
      </Card>
    </DefaultLayout>
  );
};

export default EditBannersPage;
