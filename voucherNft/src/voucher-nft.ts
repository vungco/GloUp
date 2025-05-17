import {
  MarketItemCreated as MarketItemCreatedEvent,
  Transfer as TransferEvent,
  VoucherPurchased as VoucherPurchasedEvent,
  VoucherReselled as VoucherReselledEvent,
  VoucherUsed as VoucherUsedEvent,
} from "../generated/VoucherNFT/VoucherNFT";
import {
  MarketItemCreated,
  Transfer,
  VoucherPurchased,
  VoucherReselled,
  VoucherUsed,
} from "../generated/schema";

export function handleMarketItemCreated(event: MarketItemCreatedEvent): void {
  let entity = new MarketItemCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.tokenId = event.params.tokenId;
  entity.creator = event.params.creator;
  entity.price = event.params.price;
  entity.discountValue = event.params.discountValue;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.from = event.params.from;
  entity.to = event.params.to;
  entity.tokenId = event.params.tokenId;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleVoucherPurchased(event: VoucherPurchasedEvent): void {
  let entity = new VoucherPurchased(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.tokenId = event.params.tokenId;
  entity.buyer = event.params.buyer;
  entity.price = event.params.price;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleVoucherReselled(event: VoucherReselledEvent): void {
  let entity = new VoucherReselled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.tokenId = event.params.tokenId;
  entity.seller = event.params.seller;
  entity.newPrice = event.params.newPrice;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleVoucherUsed(event: VoucherUsedEvent): void {
  let entity = new VoucherUsed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.tokenId = event.params.tokenId;
  entity.user = event.params.user;
  entity.discountValue = event.params.discountValue;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
