import StatusCardNewOrder from './StatusCardNewOrder'
import StatusCardOrderCanceled from './StatusCardOrderCanceled'
import StatusCardReadyToPickup from './StatusCardReadyToPickup'
import StatusCardToPay from './StatusCardToPay'

const ListOrderAll = () => {
  return (
    <>
      <StatusCardToPay />
      <StatusCardNewOrder />
      <StatusCardReadyToPickup />
      <StatusCardOrderCanceled />
    </>
  )
}

export default ListOrderAll