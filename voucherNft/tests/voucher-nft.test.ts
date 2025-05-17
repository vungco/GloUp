import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll,
} from "matchstick-as/assembly/index";
import { Address, BigInt } from "@graphprotocol/graph-ts";
import { handleMarketItemCreated } from "../src/voucher-nft";
import { createMarketItemCreatedEvent } from "./voucher-nft-utils";

describe("MarketItemCreated event handler", () => {
  beforeAll(() => {
    let tokenId = BigInt.fromI32(1);
    let creator = Address.fromString(
      "0x00000000000000000000000000000000000000ab"
    );
    let price = BigInt.fromI32(1000);
    let discountValue = BigInt.fromI32(100);

    let event = createMarketItemCreatedEvent(
      tokenId,
      creator,
      price,
      discountValue
    );
    handleMarketItemCreated(event);
  });

  afterAll(() => {
    clearStore();
  });

  test("MarketItemCreated entity saved correctly", () => {
    assert.entityCount("MarketItemCreated", 1);

    // default mock address is always: 0xa16081f360e3847006db660bae1c6d1b2e17ec2a
    let id = "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-0";

    assert.fieldEquals("MarketItemCreated", id, "tokenId", "1");
    assert.fieldEquals(
      "MarketItemCreated",
      id,
      "creator",
      "0x00000000000000000000000000000000000000ab"
    );
    assert.fieldEquals("MarketItemCreated", id, "price", "1000");
    assert.fieldEquals("MarketItemCreated", id, "discountValue", "100");
  });
});
