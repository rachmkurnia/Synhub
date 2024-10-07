import React from "react";
import DefaultLayout from "../../../components/Dashboard/DefaultLayout";
import { Card, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CreateFacilitysPage = () => {
    const navigate = useNavigate();
  return (
    <DefaultLayout>
      <h3>FacilitysPage</h3>
      <Card className="p-3">
        <Form>
          <Form.Group>
            <Form.Label>No. ID</Form.Label>
            <Form.Control type="number" placeholder="Masukkan Nomor ID" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Facilitys Name</Form.Label>
            <Form.Control type="text" placeholder="Masukkan Nama Fasilitas" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Keterangan</Form.Label>
            <Form.Control type="text" placeholder="Keterangan" />
          </Form.Group>
          
          <Button
            type="submit"
            className="btn btn-info text-white btn-sm mt-3 me-2 "
          >
            Save
          </Button>
          <Button
            className="btn-warning text-white mt-3 btn-sm"
            onClick={() => navigate("/admin/facilitys")}
          >
            Close
          </Button>
        </Form>
      </Card>
    </DefaultLayout>
  );
};

export default CreateFacilitysPage;
