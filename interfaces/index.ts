export type State = {
  email: string | null;
  loading: boolean;
};

export type CustomerAsset = {
  _id: string;
  id: string;
  guid: string;
  customer: string;
  asset_type: string;
  serial_number: string;
  service_contract: boolean;
  warranty: boolean;
};

export type ApiResponse = {
  data?: CustomerAsset[];
  success: boolean;
};

export type LoginFormInput = {
  email: string;
  password: string;
};

export type SignUpFormInput = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
};
