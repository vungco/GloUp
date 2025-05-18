import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  OrderCreated,
  OrderStatusUpdated,
  Withdrawn
} from "../generated/Order/Order"

export function createOrderCreatedEvent(
  orderId: BigInt,
  buyer: Address,
  voucherAmount: BigInt,
  finalAmount: BigInt,
  inforUserCID: string,
  orderDetailCID: string,
  timestamp: BigInt
): OrderCreated {
  let orderCreatedEvent = changetype<OrderCreated>(newMockEvent())

  orderCreatedEvent.parameters = new Array()

  orderCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "orderId",
      ethereum.Value.fromUnsignedBigInt(orderId)
    )
  )
  orderCreatedEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  orderCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "voucherAmount",
      ethereum.Value.fromUnsignedBigInt(voucherAmount)
    )
  )
  orderCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "finalAmount",
      ethereum.Value.fromUnsignedBigInt(finalAmount)
    )
  )
  orderCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "inforUserCID",
      ethereum.Value.fromString(inforUserCID)
    )
  )
  orderCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "orderDetailCID",
      ethereum.Value.fromString(orderDetailCID)
    )
  )
  orderCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return orderCreatedEvent
}

export function createOrderStatusUpdatedEvent(
  orderId: BigInt,
  updatedBy: Address,
  newStatus: i32,
  timestamp: BigInt
): OrderStatusUpdated {
  let orderStatusUpdatedEvent = changetype<OrderStatusUpdated>(newMockEvent())

  orderStatusUpdatedEvent.parameters = new Array()

  orderStatusUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "orderId",
      ethereum.Value.fromUnsignedBigInt(orderId)
    )
  )
  orderStatusUpdatedEvent.parameters.push(
    new ethereum.EventParam("updatedBy", ethereum.Value.fromAddress(updatedBy))
  )
  orderStatusUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newStatus",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(newStatus))
    )
  )
  orderStatusUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return orderStatusUpdatedEvent
}

export function createWithdrawnEvent(
  to: Address,
  amount: BigInt,
  timestamp: BigInt
): Withdrawn {
  let withdrawnEvent = changetype<Withdrawn>(newMockEvent())

  withdrawnEvent.parameters = new Array()

  withdrawnEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  withdrawnEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  withdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return withdrawnEvent
}
