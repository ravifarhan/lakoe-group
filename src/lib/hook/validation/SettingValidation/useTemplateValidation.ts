import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

export interface ITemplateForm {
  title: string;
  detail: string;
}

const StoreFormSchema = yup.object({
  title: yup.string().required("Judul pesan harus diisi"),
  detail: yup.string().required("Detail pesan harus diisi"),
});

const initialValues: ITemplateForm = {
  title: "",
  detail: "",
};

const useTemplateValidation = () => {
  return useForm<ITemplateForm>({
    defaultValues: initialValues,
    mode: "all",
    reValidateMode: "onBlur",
    resolver: yupResolver(StoreFormSchema),
  });
}

export default useTemplateValidation
