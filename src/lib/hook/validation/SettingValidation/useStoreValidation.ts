import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

export interface IStoreForm {
  store_name: string;
  slogan?: string;
  description?: string;
}

const StoreFormSchema = yup.object({
  store_name: yup.string().required("Nama toko harus diisi"),
  slogan: yup.string().max(48, "Panjang slogan maksimal 48 karakter"),
  description: yup.string().max(200, "Panjang deskripsi maksimal 200 karakter"),
});

// const initialValues: IStoreForm = {
//   store_name: "",
//   slogan: "",
//   description: "",
// };

const useInfoValidation = () => {
  return useForm<IStoreForm>({
    defaultValues: {
      store_name: "Fesyen Store",
      slogan: "",
      description: "",
    },
    mode: "all",
    reValidateMode: "onBlur",
    resolver: yupResolver(StoreFormSchema),
  });
}

export default useInfoValidation
