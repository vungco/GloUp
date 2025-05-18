import {
  OrderCreated as OrderCreatedEvent,
  OrderStatusUpdated as OrderStatusUpdatedEvent,
  Withdrawn as WithdrawnEvent
} from "../generated/Order/Order"
import {
  OrderCreated,
  OrderStatusUpdated,
  Withdrawn
} from "../generated/schema"

export function handleOrderCreated(event: OrderCreatedEvent): void {
  let entity = new OrderCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.orderId = event.params.orderId
  entity.buyer = event.params.buyer
  entity.voucherAmount = event.params.voucherAmount
  entity.finalAmount = event.params.finalAmount
  entity.inforUserCID = event.params.inforUserCID
  entity.orderDetailCID = event.params.orderDetailCID
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOrderStatusUpdated(event: OrderStatusUpdatedEvent): void {
  let entity = new OrderStatusUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.orderId = event.params.orderId
  entity.updatedBy = event.params.updatedBy
  entity.newStatus = event.params.newStatus
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWithdrawn(event: WithdrawnEvent): void {
  let entity = new Withdrawn(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.to = event.params.to
  entity.amount = event.params.amount
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
