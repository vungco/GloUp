export const contractAddr = "0x391C8E8F38cCc60dCb6929f11B044d86e9DB8bD4";

export const contractABI = [
  { inputs: [], stateMutability: "nonpayable", type: "constructor" },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "orderId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "OrderCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "orderId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "enum Order.OrderStatus",
        name: "newStatus",
        type: "uint8",
      },
    ],
    name: "OrderStatusUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "to", type: "address" },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_voucherAmount", type: "uint256" },
      { internalType: "uint256", name: "_finalAmount", type: "uint256" },
      { internalType: "string", name: "_inforUserCID", type: "string" },
      { internalType: "string", name: "_orderDetailCID", type: "string" },
    ],
    name: "createOrder",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllOrders",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "id", type: "uint256" },
          { internalType: "address", name: "buyer", type: "address" },
          { internalType: "uint256", name: "createdAt", type: "uint256" },
          { internalType: "uint256", name: "voucherAmount", type: "uint256" },
          { internalType: "uint256", name: "finalAmount", type: "uint256" },
          { internalType: "string", name: "inforUserCID", type: "string" },
          { internalType: "string", name: "orderDetailCID", type: "string" },
          {
            internalType: "enum Order.OrderStatus",
            name: "status",
            type: "uint8",
          },
        ],
        internalType: "struct Order.Order[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_orderId", type: "uint256" }],
    name: "getOrder",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "id", type: "uint256" },
          { internalType: "address", name: "buyer", type: "address" },
          { internalType: "uint256", name: "createdAt", type: "uint256" },
          { internalType: "uint256", name: "voucherAmount", type: "uint256" },
          { internalType: "uint256", name: "finalAmount", type: "uint256" },
          { internalType: "string", name: "inforUserCID", type: "string" },
          { internalType: "string", name: "orderDetailCID", type: "string" },
          {
            internalType: "enum Order.OrderStatus",
            name: "status",
            type: "uint8",
          },
        ],
        internalType: "struct Order.Order",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_buyer", type: "address" }],
    name: "getOrdersByBuyer",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "id", type: "uint256" },
          { internalType: "address", name: "buyer", type: "address" },
          { internalType: "uint256", name: "createdAt", type: "uint256" },
          { internalType: "uint256", name: "voucherAmount", type: "uint256" },
          { internalType: "uint256", name: "finalAmount", type: "uint256" },
          { internalType: "string", name: "inforUserCID", type: "string" },
          { internalType: "string", name: "orderDetailCID", type: "string" },
          {
            internalType: "enum Order.OrderStatus",
            name: "status",
            type: "uint8",
          },
        ],
        internalType: "struct Order.Order[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum Order.OrderStatus",
        name: "_status",
        type: "uint8",
      },
    ],
    name: "getOrdersByStatus",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "id", type: "uint256" },
          { internalType: "address", name: "buyer", type: "address" },
          { internalType: "uint256", name: "createdAt", type: "uint256" },
          { internalType: "uint256", name: "voucherAmount", type: "uint256" },
          { internalType: "uint256", name: "finalAmount", type: "uint256" },
          { internalType: "string", name: "inforUserCID", type: "string" },
          { internalType: "string", name: "orderDetailCID", type: "string" },
          {
            internalType: "enum Order.OrderStatus",
            name: "status",
            type: "uint8",
          },
        ],
        internalType: "struct Order.Order[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTotalOrders",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_orderId", type: "uint256" },
      {
        internalType: "enum Order.OrderStatus",
        name: "_newStatus",
        type: "uint8",
      },
    ],
    name: "updateOrderStatus",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
