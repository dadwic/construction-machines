import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Title from "./Title";

export default function Customers({ data }: any) {
  return (
    <React.Fragment>
      <Title>Customers asset</Title>
      <DataGrid
        pagination
        pageSize={10}
        rowsPerPageOptions={[10]}
        loading={!data}
        rows={data?.data || []}
        columns={[
          { field: "id", headerName: "ID", flex: 1 },
          { field: "customer", headerName: "Customer", flex: 1 },
          { field: "asset_type", headerName: "Asset type", flex: 1 },
          { field: "serial_number", headerName: "Serial number", flex: 1 },
          {
            field: "service_contract",
            headerName: "Service contract",
            flex: 1,
            type: "boolean",
          },
          {
            field: "warranty",
            headerName: "Warranty",
            flex: 1,
            type: "boolean",
          },
        ]}
        components={{ Toolbar: GridToolbar }}
      />
    </React.Fragment>
  );
}
