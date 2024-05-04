import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

export interface ITestForm {
  deskripsi: string;
  nama_produk: string;
  url: string;
  kategori: string;
  foto_produk: string;
  harga: number;
  stok_produk: number;
  min_pembelian: number;
  berat_produk: number;
}

const TestFormSchema = yup.object({
  deskripsi: yup
    .string()
    .required("Masukan deskripsi produk")
    .max(3000, "Tidak boleh lebih dari 3000"),
  foto_produk: yup
    .string()
    .required("Foto produk tidak boleh kosong, minimal 1 foto.")
    .min(1),
  harga: yup
    .number()
    .required("Harga barang tidak boleh kosong atau 0.")
    .min(1),
  nama_produk: yup.string().required("Nama produk tidak boleh kosong"),
  url: yup.string().required("URL tidak boleh kosong"),
  kategori: yup.string().required("Kategori produk harus terisi"),
  min_pembelian: yup.number().required("Masukan minimal pembelian").min(1),
  stok_produk: yup.number().required("Masukan stok produk minimal 1.").min(1),
  berat_produk: yup.number().required("Masukan berat produk."),
});

const initialValues = {
  deskripsi: "",
  nama_produk: "",
  url: "",
  kategori: "",
  foto_produk: "",
  harga: 0,
  stok_produk: 0,
  min_pembelian: 1,
  berat_produk: 0,
};

const useProductValidation = () => {
  return useForm<ITestForm>({
    defaultValues: initialValues,
    mode: "all",
    reValidateMode: "onBlur",
    resolver: yupResolver(TestFormSchema),
  });
};

export default useProductValidation;
