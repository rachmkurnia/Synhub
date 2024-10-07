import React from "react";
import DefaultLayout from "../../../components/Dashboard/DefaultLayout";
import { Link } from "react-router-dom";
import { Table, Button } from "react-bootstrap";

const FacilitysPage = () => {
  return (
    <DefaultLayout>
      <div className="d-flex justify-content-between align-item-center mb-4">
        <h3>FacilitysPage</h3>
        <Link to="/admin/facilitys/new" className="btn btn-teal">
          Add New
        </Link>
      </div>
      <div className="bg-white border rounded p-3">
        <Table bordered>
          <thead className="table-light border">
            <tr>
              <th>No ID</th>
              <th>Facilitys Name</th>
              <th>Keterangan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Loading...</td>
              <td>Loading...</td>
              <td>Loading...</td>
              <td>
                <Link
                  to="/admin/facilitys/:id"
                  className="btn btn-info text-white btn-sm mb-1 me-1"
                >
                  Edit
                </Link>
                <Button className="btn-warning text-white mb-1 btn-sm">
                  Delete
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </DefaultLayout>
  );
};

export default FacilitysPage;
