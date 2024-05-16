interface IUser {
  id: number;
  name: string;
}

interface INewProduct {
  image: string;
}

export interface ITrackingOrderProps {
  status: string
  date: string
}

export interface ITrackingOrderListProps {
  list: ITrackingOrderProps[]
}

export interface IRegisterBody {
  name: string
  email: string
  password: string
  phone: string
}

export interface ILoginBody {
  name: string
  password: string
}

export interface ICurrentUser {
  sub: string
  username: string
  email: string
  phone: string
}