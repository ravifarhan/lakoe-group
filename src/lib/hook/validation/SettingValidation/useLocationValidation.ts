import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

export interface ILocationForm {
  location_name: string;
  city: string;
  kodepos: string;
  address: string;
}

const LocationFormSchema = yup.object({
  location_name: yup.string().required("Nama lokasi harus diisi"),
  city: yup.string().required("Kota tidak boleh kosong"),
  kodepos: yup.string().required("Kodepos tidak boleh kosong"),
  address: yup.string().required("Alamat tidak boleh kosong"),
});

const initialValues: ILocationForm = {
  location_name: "",
  city: "",
  kodepos: "",
  address: "",
};

const useLocationValidation = () => {
  return useForm<ILocationForm>({
    defaultValues: initialValues,
    mode: "all",
    reValidateMode: "onBlur",
    resolver: yupResolver(LocationFormSchema),
  });
}

export default useLocationValidation
