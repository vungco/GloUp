import {
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent,
  BatchMetadataUpdate as BatchMetadataUpdateEvent,
  ListingPriceUpdated as ListingPriceUpdatedEvent,
  MetadataUpdate as MetadataUpdateEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Transfer as TransferEvent,
  VoucherCreated as VoucherCreatedEvent,
  VoucherReselled as VoucherReselledEvent,
  VoucherSold as VoucherSoldEvent,
  VoucherUsed as VoucherUsedEvent,
} from "../generated/VoucherNFT/VoucherNFT";
import {
  ListingPriceUpdated,
  Transfer,
  VoucherCreated,
  VoucherReselled,
  VoucherSold,
  VoucherUsed,
} from "../generated/schema";

export function handleListingPriceUpdated(
  event: ListingPriceUpdatedEvent
): void {
  let entity = new ListingPriceUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.newPrice = event.params.newPrice;

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

export function handleVoucherCreated(event: VoucherCreatedEvent): void {
  let entity = new VoucherCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.tokenId = event.params.tokenId;
  entity.creator = event.params.creator;
  entity.tokenURI = event.params.tokenURI;
  entity.price = event.params.price;
  entity.discountValue = event.params.discountValue;
  entity.timestamp = event.params.timestamp;

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
  entity.price = event.params.price;
  entity.timestamp = event.params.timestamp;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleVoucherSold(event: VoucherSoldEvent): void {
  let entity = new VoucherSold(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.tokenId = event.params.tokenId;
  entity.buyer = event.params.buyer;
  entity.seller = event.params.seller;
  entity.price = event.params.price;
  entity.timestamp = event.params.timestamp;

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
  entity.timestamp = event.params.timestamp;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
