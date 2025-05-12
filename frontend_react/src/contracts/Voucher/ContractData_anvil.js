export const contractVoucherAddr_anvil =
  "0x5FbDB2315678afecb367f032d93F642f64180aa3";

export const contractVoucherABI_anvil = {
  abi: [
    { type: "constructor", inputs: [], stateMutability: "nonpayable" },
    {
      type: "function",
      name: "applyVoucher",
      inputs: [{ name: "tokenId", type: "uint256", internalType: "uint256" }],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "approve",
      inputs: [
        { name: "to", type: "address", internalType: "address" },
        { name: "tokenId", type: "uint256", internalType: "uint256" },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "balanceOf",
      inputs: [{ name: "owner", type: "address", internalType: "address" }],
      outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "createMarketSale",
      inputs: [{ name: "tokenId", type: "uint256", internalType: "uint256" }],
      outputs: [],
      stateMutability: "payable",
    },
    {
      type: "function",
      name: "createToken",
      inputs: [
        { name: "tokenURI", type: "string", internalType: "string" },
        { name: "price", type: "uint256", internalType: "uint256" },
        { name: "discountValue", type: "uint256", internalType: "uint256" },
      ],
      outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
      stateMutability: "payable",
    },
    {
      type: "function",
      name: "fetchMarketItems",
      inputs: [],
      outputs: [
        {
          name: "",
          type: "tuple[]",
          internalType: "struct VoucherNFT.MarketItem[]",
          components: [
            { name: "tokenId", type: "uint256", internalType: "uint256" },
            {
              name: "seller",
              type: "address",
              internalType: "address payable",
            },
            { name: "owner", type: "address", internalType: "address payable" },
            { name: "price", type: "uint256", internalType: "uint256" },
            { name: "discountValue", type: "uint256", internalType: "uint256" },
            { name: "sold", type: "bool", internalType: "bool" },
            { name: "createdAt", type: "uint256", internalType: "uint256" },
          ],
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "fetchMyNFTs",
      inputs: [],
      outputs: [
        {
          name: "",
          type: "tuple[]",
          internalType: "struct VoucherNFT.MarketItem[]",
          components: [
            { name: "tokenId", type: "uint256", internalType: "uint256" },
            {
              name: "seller",
              type: "address",
              internalType: "address payable",
            },
            { name: "owner", type: "address", internalType: "address payable" },
            { name: "price", type: "uint256", internalType: "uint256" },
            { name: "discountValue", type: "uint256", internalType: "uint256" },
            { name: "sold", type: "bool", internalType: "bool" },
            { name: "createdAt", type: "uint256", internalType: "uint256" },
          ],
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getApproved",
      inputs: [{ name: "tokenId", type: "uint256", internalType: "uint256" }],
      outputs: [{ name: "", type: "address", internalType: "address" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getListingPrice",
      inputs: [],
      outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "isApprovedForAll",
      inputs: [
        { name: "owner", type: "address", internalType: "address" },
        { name: "operator", type: "address", internalType: "address" },
      ],
      outputs: [{ name: "", type: "bool", internalType: "bool" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "listingPrice",
      inputs: [],
      outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "name",
      inputs: [],
      outputs: [{ name: "", type: "string", internalType: "string" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "owner",
      inputs: [],
      outputs: [{ name: "", type: "address", internalType: "address" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "ownerOf",
      inputs: [{ name: "tokenId", type: "uint256", internalType: "uint256" }],
      outputs: [{ name: "", type: "address", internalType: "address" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "renounceOwnership",
      inputs: [],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "resellToken",
      inputs: [
        { name: "tokenId", type: "uint256", internalType: "uint256" },
        { name: "price", type: "uint256", internalType: "uint256" },
      ],
      outputs: [],
      stateMutability: "payable",
    },
    {
      type: "function",
      name: "safeTransferFrom",
      inputs: [
        { name: "from", type: "address", internalType: "address" },
        { name: "to", type: "address", internalType: "address" },
        { name: "tokenId", type: "uint256", internalType: "uint256" },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "safeTransferFrom",
      inputs: [
        { name: "from", type: "address", internalType: "address" },
        { name: "to", type: "address", internalType: "address" },
        { name: "tokenId", type: "uint256", internalType: "uint256" },
        { name: "data", type: "bytes", internalType: "bytes" },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "setApprovalForAll",
      inputs: [
        { name: "operator", type: "address", internalType: "address" },
        { name: "approved", type: "bool", internalType: "bool" },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "supportsInterface",
      inputs: [{ name: "interfaceId", type: "bytes4", internalType: "bytes4" }],
      outputs: [{ name: "", type: "bool", internalType: "bool" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "symbol",
      inputs: [],
      outputs: [{ name: "", type: "string", internalType: "string" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "tokenURI",
      inputs: [{ name: "tokenId", type: "uint256", internalType: "uint256" }],
      outputs: [{ name: "", type: "string", internalType: "string" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "transferFrom",
      inputs: [
        { name: "from", type: "address", internalType: "address" },
        { name: "to", type: "address", internalType: "address" },
        { name: "tokenId", type: "uint256", internalType: "uint256" },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "transferOwnership",
      inputs: [{ name: "newOwner", type: "address", internalType: "address" }],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "updateListingPrice",
      inputs: [
        { name: "_listingPrice", type: "uint256", internalType: "uint256" },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "event",
      name: "Approval",
      inputs: [
        {
          name: "owner",
          type: "address",
          indexed: true,
          internalType: "address",
        },
        {
          name: "approved",
          type: "address",
          indexed: true,
          internalType: "address",
        },
        {
          name: "tokenId",
          type: "uint256",
          indexed: true,
          internalType: "uint256",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "ApprovalForAll",
      inputs: [
        {
          name: "owner",
          type: "address",
          indexed: true,
          internalType: "address",
        },
        {
          name: "operator",
          type: "address",
          indexed: true,
          internalType: "address",
        },
        {
          name: "approved",
          type: "bool",
          indexed: false,
          internalType: "bool",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "BatchMetadataUpdate",
      inputs: [
        {
          name: "_fromTokenId",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
        {
          name: "_toTokenId",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "MarketItemCreated",
      inputs: [
        {
          name: "tokenId",
          type: "uint256",
          indexed: true,
          internalType: "uint256",
        },
        {
          name: "creator",
          type: "address",
          indexed: true,
          internalType: "address",
        },
        {
          name: "price",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
        {
          name: "discountValue",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "MetadataUpdate",
      inputs: [
        {
          name: "_tokenId",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "OwnershipTransferred",
      inputs: [
        {
          name: "previousOwner",
          type: "address",
          indexed: true,
          internalType: "address",
        },
        {
          name: "newOwner",
          type: "address",
          indexed: true,
          internalType: "address",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "Transfer",
      inputs: [
        {
          name: "from",
          type: "address",
          indexed: true,
          internalType: "address",
        },
        { name: "to", type: "address", indexed: true, internalType: "address" },
        {
          name: "tokenId",
          type: "uint256",
          indexed: true,
          internalType: "uint256",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "VoucherPurchased",
      inputs: [
        {
          name: "tokenId",
          type: "uint256",
          indexed: true,
          internalType: "uint256",
        },
        {
          name: "buyer",
          type: "address",
          indexed: true,
          internalType: "address",
        },
        {
          name: "price",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "VoucherReselled",
      inputs: [
        {
          name: "tokenId",
          type: "uint256",
          indexed: true,
          internalType: "uint256",
        },
        {
          name: "seller",
          type: "address",
          indexed: true,
          internalType: "address",
        },
        {
          name: "newPrice",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "VoucherUsed",
      inputs: [
        {
          name: "tokenId",
          type: "uint256",
          indexed: true,
          internalType: "uint256",
        },
        {
          name: "user",
          type: "address",
          indexed: true,
          internalType: "address",
        },
        {
          name: "discountValue",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
      ],
      anonymous: false,
    },
    {
      type: "error",
      name: "ERC721IncorrectOwner",
      inputs: [
        { name: "sender", type: "address", internalType: "address" },
        { name: "tokenId", type: "uint256", internalType: "uint256" },
        { name: "owner", type: "address", internalType: "address" },
      ],
    },
    {
      type: "error",
      name: "ERC721InsufficientApproval",
      inputs: [
        { name: "operator", type: "address", internalType: "address" },
        { name: "tokenId", type: "uint256", internalType: "uint256" },
      ],
    },
    {
      type: "error",
      name: "ERC721InvalidApprover",
      inputs: [{ name: "approver", type: "address", internalType: "address" }],
    },
    {
      type: "error",
      name: "ERC721InvalidOperator",
      inputs: [{ name: "operator", type: "address", internalType: "address" }],
    },
    {
      type: "error",
      name: "ERC721InvalidOwner",
      inputs: [{ name: "owner", type: "address", internalType: "address" }],
    },
    {
      type: "error",
      name: "ERC721InvalidReceiver",
      inputs: [{ name: "receiver", type: "address", internalType: "address" }],
    },
    {
      type: "error",
      name: "ERC721InvalidSender",
      inputs: [{ name: "sender", type: "address", internalType: "address" }],
    },
    {
      type: "error",
      name: "ERC721NonexistentToken",
      inputs: [{ name: "tokenId", type: "uint256", internalType: "uint256" }],
    },
    {
      type: "error",
      name: "OwnableInvalidOwner",
      inputs: [{ name: "owner", type: "address", internalType: "address" }],
    },
    {
      type: "error",
      name: "OwnableUnauthorizedAccount",
      inputs: [{ name: "account", type: "address", internalType: "address" }],
    },
  ],
  bytecode: {
    object:
      "0x60806040525f6008555f60095565e35fa931a000600a55348015610021575f5ffd5b50336040518060400160405280600a81526020017f566f75636865724e4654000000000000000000000000000000000000000000008152506040518060400160405280600481526020017f564e465400000000000000000000000000000000000000000000000000000000815250815f908161009d9190610435565b5080600190816100ad9190610435565b5050505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610120575f6040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016101179190610543565b60405180910390fd5b61012f8161013560201b60201c565b5061055c565b5f60075f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160075f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f81519050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f600282049050600182168061027357607f821691505b6020821081036102865761028561022f565b5b50919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f600883026102e87fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826102ad565b6102f286836102ad565b95508019841693508086168417925050509392505050565b5f819050919050565b5f819050919050565b5f61033661033161032c8461030a565b610313565b61030a565b9050919050565b5f819050919050565b61034f8361031c565b61036361035b8261033d565b8484546102b9565b825550505050565b5f5f905090565b61037a61036b565b610385818484610346565b505050565b5b818110156103a85761039d5f82610372565b60018101905061038b565b5050565b601f8211156103ed576103be8161028c565b6103c78461029e565b810160208510156103d6578190505b6103ea6103e28561029e565b83018261038a565b50505b505050565b5f82821c905092915050565b5f61040d5f19846008026103f2565b1980831691505092915050565b5f61042583836103fe565b9150826002028217905092915050565b61043e826101f8565b67ffffffffffffffff81111561045757610456610202565b5b610461825461025c565b61046c8282856103ac565b5f60209050601f83116001811461049d575f841561048b578287015190505b610495858261041a565b8655506104fc565b601f1984166104ab8661028c565b5f5b828110156104d2578489015182556001820191506020850194506020810190506104ad565b868310156104ef57848901516104eb601f8916826103fe565b8355505b6001600288020188555050505b505050505050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f61052d82610504565b9050919050565b61053d81610523565b82525050565b5f6020820190506105565f830184610534565b92915050565b614052806105695f395ff3fe608060405260043610610165575f3560e01c80638da5cb5b116100d0578063bec2a7c511610089578063e219fc7511610063578063e219fc751461050d578063e985e9c514610529578063f2fde38b14610565578063f810e5271461058d57610165565b8063bec2a7c514610477578063c78f19f9146104a7578063c87b56dd146104d157610165565b80638da5cb5b1461038f57806395d89b41146103b9578063a22cb465146103e3578063ae677aa31461040b578063b88d4fde14610433578063be9af5361461045b57610165565b8063202e374011610122578063202e37401461028757806323b872dd146102b157806342842e0e146102d95780636352211e1461030157806370a082311461033d578063715018a61461037957610165565b806301ffc9a71461016957806306fdde03146101a5578063081812fc146101cf578063095ea7b31461020b5780630f08efe01461023357806312e855851461025d575b5f5ffd5b348015610174575f5ffd5b5061018f600480360381019061018a9190612e7b565b6105b5565b60405161019c9190612ec0565b60405180910390f35b3480156101b0575f5ffd5b506101b9610615565b6040516101c69190612f49565b60405180910390f35b3480156101da575f5ffd5b506101f560048036038101906101f09190612f9c565b6106a4565b6040516102029190613006565b60405180910390f35b348015610216575f5ffd5b50610231600480360381019061022c9190613049565b6106bf565b005b34801561023e575f5ffd5b506102476106d5565b60405161025491906131f9565b60405180910390f35b348015610268575f5ffd5b5061027161092d565b60405161027e9190613228565b60405180910390f35b348015610292575f5ffd5b5061029b610936565b6040516102a891906131f9565b60405180910390f35b3480156102bc575f5ffd5b506102d760048036038101906102d29190613241565b610ddb565b005b3480156102e4575f5ffd5b506102ff60048036038101906102fa9190613241565b610eda565b005b34801561030c575f5ffd5b5061032760048036038101906103229190612f9c565b610ef9565b6040516103349190613006565b60405180910390f35b348015610348575f5ffd5b50610363600480360381019061035e9190613291565b610f0a565b6040516103709190613228565b60405180910390f35b348015610384575f5ffd5b5061038d610fc0565b005b34801561039a575f5ffd5b506103a3610fd3565b6040516103b09190613006565b60405180910390f35b3480156103c4575f5ffd5b506103cd610ffb565b6040516103da9190612f49565b60405180910390f35b3480156103ee575f5ffd5b50610409600480360381019061040491906132e6565b61108b565b005b348015610416575f5ffd5b50610431600480360381019061042c9190612f9c565b6110a1565b005b34801561043e575f5ffd5b5061045960048036038101906104549190613450565b6110b3565b005b61047560048036038101906104709190612f9c565b6110d8565b005b610491600480360381019061048c919061356e565b611392565b60405161049e9190613228565b60405180910390f35b3480156104b2575f5ffd5b506104bb611479565b6040516104c89190613228565b60405180910390f35b3480156104dc575f5ffd5b506104f760048036038101906104f29190612f9c565b61147f565b6040516105049190612f49565b60405180910390f35b610527600480360381019061052291906135da565b61158a565b005b348015610534575f5ffd5b5061054f600480360381019061054a9190613618565b611778565b60405161055c9190612ec0565b60405180910390f35b348015610570575f5ffd5b5061058b60048036038101906105869190613291565b611806565b005b348015610598575f5ffd5b506105b360048036038101906105ae9190612f9c565b61188a565b005b5f634906490660e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061060e575061060d82611a44565b5b9050919050565b60605f805461062390613683565b80601f016020809104026020016040519081016040528092919081815260200182805461064f90613683565b801561069a5780601f106106715761010080835404028352916020019161069a565b820191905f5260205f20905b81548152906001019060200180831161067d57829003601f168201915b5050505050905090565b5f6106ae82611b25565b506106b882611bab565b9050919050565b6106d182826106cc611be4565b611beb565b5050565b60605f60085490505f6009546008546106ee91906136e0565b90505f5f90505f8267ffffffffffffffff81111561070f5761070e61332c565b5b60405190808252806020026020018201604052801561074857816020015b610735612db1565b81526020019060019003908161072d5790505b5090505f5f90505b84811015610922573073ffffffffffffffffffffffffffffffffffffffff16600b5f60018461077f9190613713565b81526020019081526020015f206002015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603610915575f6001826107d89190613713565b90505f600b5f8381526020019081526020015f209050806040518060e00160405290815f8201548152602001600182015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016003820154815260200160048201548152602001600582015f9054906101000a900460ff161515151581526020016006820154815250508486815181106108f8576108f7613746565b5b60200260200101819052506001856109109190613713565b945050505b8080600101915050610750565b508094505050505090565b5f600a54905090565b60605f60085490505f5f90505f5f90505f5f90505b83811015610aca575f6001826109619190613713565b90505f5f3073ffffffffffffffffffffffffffffffffffffffff168360405160240161098d9190613228565b6040516020818303038152906040527f6352211e000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050604051610a1791906137b7565b5f60405180830381855afa9150503d805f8114610a4f576040519150601f19603f3d011682016040523d82523d5f602084013e610a54565b606091505b50915091508115610aba575f81806020019051810190610a7491906137f7565b90503373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610ab8578680610ab490613822565b9750505b505b505050808060010191505061094b565b505f8267ffffffffffffffff811115610ae657610ae561332c565b5b604051908082528060200260200182016040528015610b1f57816020015b610b0c612db1565b815260200190600190039081610b045790505b5090505f5f90505b84811015610dd0575f600182610b3d9190613713565b90505f5f3073ffffffffffffffffffffffffffffffffffffffff1683604051602401610b699190613228565b6040516020818303038152906040527f6352211e000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050604051610bf391906137b7565b5f60405180830381855afa9150503d805f8114610c2b576040519150601f19603f3d011682016040523d82523d5f602084013e610c30565b606091505b50915091508115610dc0575f81806020019051810190610c5091906137f7565b90503373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610dbe575f600b5f8681526020019081526020015f209050806040518060e00160405290815f8201548152602001600182015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016003820154815260200160048201548152602001600582015f9054906101000a900460ff16151515158152602001600682015481525050878981518110610da357610da2613746565b5b60200260200101819052508780610db990613822565b985050505b505b5050508080600101915050610b27565b508094505050505090565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610e4b575f6040517f64a0ae92000000000000000000000000000000000000000000000000000000008152600401610e429190613006565b60405180910390fd5b5f610e5e8383610e59611be4565b611bfd565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610ed4578382826040517f64283d7b000000000000000000000000000000000000000000000000000000008152600401610ecb93929190613869565b60405180910390fd5b50505050565b610ef483838360405180602001604052805f8152506110b3565b505050565b5f610f0382611b25565b9050919050565b5f5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610f7b575f6040517f89c62b64000000000000000000000000000000000000000000000000000000008152600401610f729190613006565b60405180910390fd5b60035f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b610fc8611e08565b610fd15f611e8f565b565b5f60075f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60606001805461100a90613683565b80601f016020809104026020016040519081016040528092919081815260200182805461103690613683565b80156110815780601f1061105857610100808354040283529160200191611081565b820191905f5260205f20905b81548152906001019060200180831161106457829003601f168201915b5050505050905090565b61109d611096611be4565b8383611f52565b5050565b6110a9611e08565b80600a8190555050565b6110be848484610ddb565b6110d26110c9611be4565b858585856120bb565b50505050565b5f600b5f8381526020019081526020015f20905080600301543414611132576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611129906138e8565b60405180910390fd5b3073ffffffffffffffffffffffffffffffffffffffff16816002015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146111c3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111ba90613950565b60405180910390fd5b33816002015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001816005015f6101000a81548160ff021916908315150217905550600160095f8282546112339190613713565b92505081905550611245303384612267565b61124d610fd3565b73ffffffffffffffffffffffffffffffffffffffff166108fc600a5490811502906040515f60405180830381858888f19350505050158015611291573d5f5f3e3d5ffd5b50806001015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc3490811502906040515f60405180830381858888f193505050501580156112f8573d5f5f3e3d5ffd5b505f816001015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055503373ffffffffffffffffffffffffffffffffffffffff16827feab8dc14880386fddeb427893f756239a41ff4e2f149c4da12c0a429ab5c6ac783600301546040516113869190613228565b60405180910390a35050565b5f61139b611e08565b600a5434146113df576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113d6906139b8565b60405180910390fd5b600160085f8282546113f19190613713565b925050819055505f600854905061140833826123cf565b61141281866124c2565b61141d81858561251c565b3373ffffffffffffffffffffffffffffffffffffffff16817fd0058778bf0543e8ed74ab7fc87f778020d312d616ad6f98b80bc8eb521589bb86866040516114669291906139d6565b60405180910390a3809150509392505050565b600a5481565b606061148a82611b25565b505f60065f8481526020019081526020015f2080546114a890613683565b80601f01602080910402602001604051908101604052809291908181526020018280546114d490613683565b801561151f5780601f106114f65761010080835404028352916020019161151f565b820191905f5260205f20905b81548152906001019060200180831161150257829003601f168201915b505050505090505f61152f6126b4565b90505f815103611543578192505050611585565b5f8251111561157757808260405160200161155f929190613a37565b60405160208183030381529060405292505050611585565b611580846126ca565b925050505b919050565b3373ffffffffffffffffffffffffffffffffffffffff166115aa83610ef9565b73ffffffffffffffffffffffffffffffffffffffff1614611600576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115f790613aa4565b60405180910390fd5b600a543414611644576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161163b90613b0c565b60405180910390fd5b5f600b5f8481526020019081526020015f2090505f816005015f6101000a81548160ff02191690831515021790555081816003018190555033816001015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555030816002015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600160095f82825461171291906136e0565b92505081905550611724333085612267565b3373ffffffffffffffffffffffffffffffffffffffff16837f8568e07cc8be33fb698f886bd8ce4581a5ca319d44462191312c72ac0acd312d8460405161176b9190613228565b60405180910390a3505050565b5f60055f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff16905092915050565b61180e611e08565b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361187e575f6040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016118759190613006565b60405180910390fd5b61188781611e8f565b50565b3373ffffffffffffffffffffffffffffffffffffffff166118aa82610ef9565b73ffffffffffffffffffffffffffffffffffffffff1614611900576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118f790613b74565b60405180910390fd5b5f600b5f8381526020019081526020015f206004015490505f811161195a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161195190613c02565b60405180910390fd5b61196382612730565b3373ffffffffffffffffffffffffffffffffffffffff16827f7b6f41a7ebae9ed4a1e9a52a100d2846f17583555c38db2d37ca80229d1a0df7836040516119aa9190613228565b60405180910390a3600b5f8381526020019081526020015f205f5f82015f9055600182015f6101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055600282015f6101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055600382015f9055600482015f9055600582015f6101000a81549060ff0219169055600682015f905550505050565b5f7f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480611b0e57507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80611b1e5750611b1d826127b2565b5b9050919050565b5f5f611b308361281b565b90505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603611ba257826040517f7e273289000000000000000000000000000000000000000000000000000000008152600401611b999190613228565b60405180910390fd5b80915050919050565b5f60045f8381526020019081526020015f205f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b5f33905090565b611bf88383836001612854565b505050565b5f5f611c088461281b565b90505f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614611c4957611c48818486612a13565b5b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614611cd457611c885f855f5f612854565b600160035f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825403925050819055505b5f73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614611d5357600160035f8773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825401925050819055505b8460025f8681526020019081526020015f205f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4809150509392505050565b611e10611be4565b73ffffffffffffffffffffffffffffffffffffffff16611e2e610fd3565b73ffffffffffffffffffffffffffffffffffffffff1614611e8d57611e51611be4565b6040517f118cdaa7000000000000000000000000000000000000000000000000000000008152600401611e849190613006565b60405180910390fd5b565b5f60075f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160075f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611fc257816040517f5b08ba18000000000000000000000000000000000000000000000000000000008152600401611fb99190613006565b60405180910390fd5b8060055f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516120ae9190612ec0565b60405180910390a3505050565b5f8373ffffffffffffffffffffffffffffffffffffffff163b1115612260578273ffffffffffffffffffffffffffffffffffffffff1663150b7a02868685856040518563ffffffff1660e01b81526004016121199493929190613c68565b6020604051808303815f875af192505050801561215457506040513d601f19601f820116820180604052508101906121519190613cc6565b60015b6121d5573d805f8114612182576040519150601f19603f3d011682016040523d82523d5f602084013e612187565b606091505b505f8151036121cd57836040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016121c49190613006565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161461225e57836040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016122559190613006565b60405180910390fd5b505b5050505050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036122d7575f6040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016122ce9190613006565b60405180910390fd5b5f6122e383835f611bfd565b90505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361235557816040517f7e27328900000000000000000000000000000000000000000000000000000000815260040161234c9190613228565b60405180910390fd5b8373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146123c9578382826040517f64283d7b0000000000000000000000000000000000000000000000000000000081526004016123c093929190613869565b60405180910390fd5b50505050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361243f575f6040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016124369190613006565b60405180910390fd5b5f61244b83835f611bfd565b90505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146124bd575f6040517f73c6ac6e0000000000000000000000000000000000000000000000000000000081526004016124b49190613006565b60405180910390fd5b505050565b8060065f8481526020019081526020015f2090816124e09190613e91565b507ff8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce7826040516125109190613228565b60405180910390a15050565b5f821161255e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161255590613faa565b60405180910390fd5b6040518060e001604052808481526020013373ffffffffffffffffffffffffffffffffffffffff1681526020013073ffffffffffffffffffffffffffffffffffffffff1681526020018381526020018281526020015f1515815260200142815250600b5f8581526020019081526020015f205f820151815f01556020820151816001015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040820151816002015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550606082015181600301556080820151816004015560a0820151816005015f6101000a81548160ff02191690831515021790555060c082015181600601559050506126af333085612267565b505050565b606060405180602001604052805f815250905090565b60606126d582611b25565b505f6126df6126b4565b90505f8151116126fd5760405180602001604052805f815250612728565b8061270784612ad6565b604051602001612718929190613a37565b6040516020818303038152906040525b915050919050565b5f61273c5f835f611bfd565b90505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036127ae57816040517f7e2732890000000000000000000000000000000000000000000000000000000081526004016127a59190613228565b60405180910390fd5b5050565b5f7f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b5f60025f8381526020019081526020015f205f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b808061288c57505f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614155b156129be575f61289b84611b25565b90505f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415801561290557508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b801561291857506129168184611778565b155b1561295a57826040517fa9fbf51f0000000000000000000000000000000000000000000000000000000081526004016129519190613006565b60405180910390fd5b81156129bc57838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b8360045f8581526020019081526020015f205f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b612a1e838383612ba0565b612ad1575f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603612a9257806040517f7e273289000000000000000000000000000000000000000000000000000000008152600401612a899190613228565b60405180910390fd5b81816040517f177e802f000000000000000000000000000000000000000000000000000000008152600401612ac8929190613fc8565b60405180910390fd5b505050565b60605f6001612ae484612c60565b0190505f8167ffffffffffffffff811115612b0257612b0161332c565b5b6040519080825280601f01601f191660200182016040528015612b345781602001600182028036833780820191505090505b5090505f82602001820190505b600115612b95578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a8581612b8a57612b89613fef565b5b0494505f8503612b41575b819350505050919050565b5f5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614158015612c5757508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480612c185750612c178484611778565b5b80612c5657508273ffffffffffffffffffffffffffffffffffffffff16612c3e83611bab565b73ffffffffffffffffffffffffffffffffffffffff16145b5b90509392505050565b5f5f5f90507a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310612cbc577a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008381612cb257612cb1613fef565b5b0492506040810190505b6d04ee2d6d415b85acef81000000008310612cf9576d04ee2d6d415b85acef81000000008381612cef57612cee613fef565b5b0492506020810190505b662386f26fc100008310612d2857662386f26fc100008381612d1e57612d1d613fef565b5b0492506010810190505b6305f5e1008310612d51576305f5e1008381612d4757612d46613fef565b5b0492506008810190505b6127108310612d76576127108381612d6c57612d6b613fef565b5b0492506004810190505b60648310612d995760648381612d8f57612d8e613fef565b5b0492506002810190505b600a8310612da8576001810190505b80915050919050565b6040518060e001604052805f81526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f81526020015f81526020015f151581526020015f81525090565b5f604051905090565b5f5ffd5b5f5ffd5b5f7fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b612e5a81612e26565b8114612e64575f5ffd5b50565b5f81359050612e7581612e51565b92915050565b5f60208284031215612e9057612e8f612e1e565b5b5f612e9d84828501612e67565b91505092915050565b5f8115159050919050565b612eba81612ea6565b82525050565b5f602082019050612ed35f830184612eb1565b92915050565b5f81519050919050565b5f82825260208201905092915050565b8281835e5f83830152505050565b5f601f19601f8301169050919050565b5f612f1b82612ed9565b612f258185612ee3565b9350612f35818560208601612ef3565b612f3e81612f01565b840191505092915050565b5f6020820190508181035f830152612f618184612f11565b905092915050565b5f819050919050565b612f7b81612f69565b8114612f85575f5ffd5b50565b5f81359050612f9681612f72565b92915050565b5f60208284031215612fb157612fb0612e1e565b5b5f612fbe84828501612f88565b91505092915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f612ff082612fc7565b9050919050565b61300081612fe6565b82525050565b5f6020820190506130195f830184612ff7565b92915050565b61302881612fe6565b8114613032575f5ffd5b50565b5f813590506130438161301f565b92915050565b5f5f6040838503121561305f5761305e612e1e565b5b5f61306c85828601613035565b925050602061307d85828601612f88565b9150509250929050565b5f81519050919050565b5f82825260208201905092915050565b5f819050602082019050919050565b6130b981612f69565b82525050565b5f6130c982612fc7565b9050919050565b6130d9816130bf565b82525050565b6130e881612ea6565b82525050565b60e082015f8201516131025f8501826130b0565b50602082015161311560208501826130d0565b50604082015161312860408501826130d0565b50606082015161313b60608501826130b0565b50608082015161314e60808501826130b0565b5060a082015161316160a08501826130df565b5060c082015161317460c08501826130b0565b50505050565b5f61318583836130ee565b60e08301905092915050565b5f602082019050919050565b5f6131a782613087565b6131b18185613091565b93506131bc836130a1565b805f5b838110156131ec5781516131d3888261317a565b97506131de83613191565b9250506001810190506131bf565b5085935050505092915050565b5f6020820190508181035f830152613211818461319d565b905092915050565b61322281612f69565b82525050565b5f60208201905061323b5f830184613219565b92915050565b5f5f5f6060848603121561325857613257612e1e565b5b5f61326586828701613035565b935050602061327686828701613035565b925050604061328786828701612f88565b9150509250925092565b5f602082840312156132a6576132a5612e1e565b5b5f6132b384828501613035565b91505092915050565b6132c581612ea6565b81146132cf575f5ffd5b50565b5f813590506132e0816132bc565b92915050565b5f5f604083850312156132fc576132fb612e1e565b5b5f61330985828601613035565b925050602061331a858286016132d2565b9150509250929050565b5f5ffd5b5f5ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b61336282612f01565b810181811067ffffffffffffffff821117156133815761338061332c565b5b80604052505050565b5f613393612e15565b905061339f8282613359565b919050565b5f67ffffffffffffffff8211156133be576133bd61332c565b5b6133c782612f01565b9050602081019050919050565b828183375f83830152505050565b5f6133f46133ef846133a4565b61338a565b9050828152602081018484840111156134105761340f613328565b5b61341b8482856133d4565b509392505050565b5f82601f83011261343757613436613324565b5b81356134478482602086016133e2565b91505092915050565b5f5f5f5f6080858703121561346857613467612e1e565b5b5f61347587828801613035565b945050602061348687828801613035565b935050604061349787828801612f88565b925050606085013567ffffffffffffffff8111156134b8576134b7612e22565b5b6134c487828801613423565b91505092959194509250565b5f67ffffffffffffffff8211156134ea576134e961332c565b5b6134f382612f01565b9050602081019050919050565b5f61351261350d846134d0565b61338a565b90508281526020810184848401111561352e5761352d613328565b5b6135398482856133d4565b509392505050565b5f82601f83011261355557613554613324565b5b8135613565848260208601613500565b91505092915050565b5f5f5f6060848603121561358557613584612e1e565b5b5f84013567ffffffffffffffff8111156135a2576135a1612e22565b5b6135ae86828701613541565b93505060206135bf86828701612f88565b92505060406135d086828701612f88565b9150509250925092565b5f5f604083850312156135f0576135ef612e1e565b5b5f6135fd85828601612f88565b925050602061360e85828601612f88565b9150509250929050565b5f5f6040838503121561362e5761362d612e1e565b5b5f61363b85828601613035565b925050602061364c85828601613035565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f600282049050600182168061369a57607f821691505b6020821081036136ad576136ac613656565b5b50919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f6136ea82612f69565b91506136f583612f69565b925082820390508181111561370d5761370c6136b3565b5b92915050565b5f61371d82612f69565b915061372883612f69565b92508282019050808211156137405761373f6136b3565b5b92915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f81519050919050565b5f81905092915050565b5f61379182613773565b61379b818561377d565b93506137ab818560208601612ef3565b80840191505092915050565b5f6137c28284613787565b915081905092915050565b6137d6816130bf565b81146137e0575f5ffd5b50565b5f815190506137f1816137cd565b92915050565b5f6020828403121561380c5761380b612e1e565b5b5f613819848285016137e3565b91505092915050565b5f61382c82612f69565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361385e5761385d6136b3565b5b600182019050919050565b5f60608201905061387c5f830186612ff7565b6138896020830185613219565b6138966040830184612ff7565b949350505050565b7f5375626d69742066756c6c2061736b696e6720707269636500000000000000005f82015250565b5f6138d2601883612ee3565b91506138dd8261389e565b602082019050919050565b5f6020820190508181035f8301526138ff816138c6565b9050919050565b7f4974656d206e6f7420666f722073616c650000000000000000000000000000005f82015250565b5f61393a601183612ee3565b915061394582613906565b602082019050919050565b5f6020820190508181035f8301526139678161392e565b9050919050565b7f50617920746865206c697374696e6720707269636500000000000000000000005f82015250565b5f6139a2601583612ee3565b91506139ad8261396e565b602082019050919050565b5f6020820190508181035f8301526139cf81613996565b9050919050565b5f6040820190506139e95f830185613219565b6139f66020830184613219565b9392505050565b5f81905092915050565b5f613a1182612ed9565b613a1b81856139fd565b9350613a2b818560208601612ef3565b80840191505092915050565b5f613a428285613a07565b9150613a4e8284613a07565b91508190509392505050565b7f596f75206d757374206f776e2074686973204e465400000000000000000000005f82015250565b5f613a8e601583612ee3565b9150613a9982613a5a565b602082019050919050565b5f6020820190508181035f830152613abb81613a82565b9050919050565b7f50617920746865206c697374696e6720666565000000000000000000000000005f82015250565b5f613af6601383612ee3565b9150613b0182613ac2565b602082019050919050565b5f6020820190508181035f830152613b2381613aea565b9050919050565b7f596f7520646f206e6f74206f776e207468697320766f756368657200000000005f82015250565b5f613b5e601b83612ee3565b9150613b6982613b2a565b602082019050919050565b5f6020820190508181035f830152613b8b81613b52565b9050919050565b7f5468697320766f756368657220686173206e6f20646973636f756e742076616c5f8201527f7565000000000000000000000000000000000000000000000000000000000000602082015250565b5f613bec602283612ee3565b9150613bf782613b92565b604082019050919050565b5f6020820190508181035f830152613c1981613be0565b9050919050565b5f82825260208201905092915050565b5f613c3a82613773565b613c448185613c20565b9350613c54818560208601612ef3565b613c5d81612f01565b840191505092915050565b5f608082019050613c7b5f830187612ff7565b613c886020830186612ff7565b613c956040830185613219565b8181036060830152613ca78184613c30565b905095945050505050565b5f81519050613cc081612e51565b92915050565b5f60208284031215613cdb57613cda612e1e565b5b5f613ce884828501613cb2565b91505092915050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f60088302613d4d7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82613d12565b613d578683613d12565b95508019841693508086168417925050509392505050565b5f819050919050565b5f613d92613d8d613d8884612f69565b613d6f565b612f69565b9050919050565b5f819050919050565b613dab83613d78565b613dbf613db782613d99565b848454613d1e565b825550505050565b5f5f905090565b613dd6613dc7565b613de1818484613da2565b505050565b5b81811015613e0457613df95f82613dce565b600181019050613de7565b5050565b601f821115613e4957613e1a81613cf1565b613e2384613d03565b81016020851015613e32578190505b613e46613e3e85613d03565b830182613de6565b50505b505050565b5f82821c905092915050565b5f613e695f1984600802613e4e565b1980831691505092915050565b5f613e818383613e5a565b9150826002028217905092915050565b613e9a82612ed9565b67ffffffffffffffff811115613eb357613eb261332c565b5b613ebd8254613683565b613ec8828285613e08565b5f60209050601f831160018114613ef9575f8415613ee7578287015190505b613ef18582613e76565b865550613f58565b601f198416613f0786613cf1565b5f5b82811015613f2e57848901518255600182019150602085019450602081019050613f09565b86831015613f4b5784890151613f47601f891682613e5a565b8355505b6001600288020188555050505b505050505050565b7f5072696365206d757374206265203e20300000000000000000000000000000005f82015250565b5f613f94601183612ee3565b9150613f9f82613f60565b602082019050919050565b5f6020820190508181035f830152613fc181613f88565b9050919050565b5f604082019050613fdb5f830185612ff7565b613fe86020830184613219565b9392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffdfea26469706673582212202933efb3fe6301ecc6ff81474f66c764133f347949c027654a081fa054195d5b64736f6c634300081c0033",
    sourceMap:
      "190:5742:35:-:0;;;273:1;245:29;;309:1;280:30;;347:13;317:43;;1214:65;;;;;;;;;;1265:10;1380:113:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1454:5;1446;:13;;;;;;:::i;:::-;;1479:7;1469;:17;;;;;;:::i;:::-;;1380:113;;1297:1:15;1273:26;;:12;:26;;;1269:95;;1350:1;1322:31;;;;;;;;;;;:::i;:::-;;;;;;;;1269:95;1373:32;1392:12;1373:18;;;:32;;:::i;:::-;1225:187;190:5742:35;;2912:187:15;2985:16;3004:6;;;;;;;;;;;2985:25;;3029:8;3020:6;;:17;;;;;;;;;;;;;;;;;;3083:8;3052:40;;3073:8;3052:40;;;;;;;;;;;;2975:124;2912:187;:::o;7:99:36:-;59:6;93:5;87:12;77:22;;7:99;;;:::o;112:180::-;160:77;157:1;150:88;257:4;254:1;247:15;281:4;278:1;271:15;298:180;346:77;343:1;336:88;443:4;440:1;433:15;467:4;464:1;457:15;484:320;528:6;565:1;559:4;555:12;545:22;;612:1;606:4;602:12;633:18;623:81;;689:4;681:6;677:17;667:27;;623:81;751:2;743:6;740:14;720:18;717:38;714:84;;770:18;;:::i;:::-;714:84;535:269;484:320;;;:::o;810:141::-;859:4;882:3;874:11;;905:3;902:1;895:14;939:4;936:1;926:18;918:26;;810:141;;;:::o;957:93::-;994:6;1041:2;1036;1029:5;1025:14;1021:23;1011:33;;957:93;;;:::o;1056:107::-;1100:8;1150:5;1144:4;1140:16;1119:37;;1056:107;;;;:::o;1169:393::-;1238:6;1288:1;1276:10;1272:18;1311:97;1341:66;1330:9;1311:97;:::i;:::-;1429:39;1459:8;1448:9;1429:39;:::i;:::-;1417:51;;1501:4;1497:9;1490:5;1486:21;1477:30;;1550:4;1540:8;1536:19;1529:5;1526:30;1516:40;;1245:317;;1169:393;;;;;:::o;1568:77::-;1605:7;1634:5;1623:16;;1568:77;;;:::o;1651:60::-;1679:3;1700:5;1693:12;;1651:60;;;:::o;1717:142::-;1767:9;1800:53;1818:34;1827:24;1845:5;1827:24;:::i;:::-;1818:34;:::i;:::-;1800:53;:::i;:::-;1787:66;;1717:142;;;:::o;1865:75::-;1908:3;1929:5;1922:12;;1865:75;;;:::o;1946:269::-;2056:39;2087:7;2056:39;:::i;:::-;2117:91;2166:41;2190:16;2166:41;:::i;:::-;2158:6;2151:4;2145:11;2117:91;:::i;:::-;2111:4;2104:105;2022:193;1946:269;;;:::o;2221:73::-;2266:3;2287:1;2280:8;;2221:73;:::o;2300:189::-;2377:32;;:::i;:::-;2418:65;2476:6;2468;2462:4;2418:65;:::i;:::-;2353:136;2300:189;;:::o;2495:186::-;2555:120;2572:3;2565:5;2562:14;2555:120;;;2626:39;2663:1;2656:5;2626:39;:::i;:::-;2599:1;2592:5;2588:13;2579:22;;2555:120;;;2495:186;;:::o;2687:543::-;2788:2;2783:3;2780:11;2777:446;;;2822:38;2854:5;2822:38;:::i;:::-;2906:29;2924:10;2906:29;:::i;:::-;2896:8;2892:44;3089:2;3077:10;3074:18;3071:49;;;3110:8;3095:23;;3071:49;3133:80;3189:22;3207:3;3189:22;:::i;:::-;3179:8;3175:37;3162:11;3133:80;:::i;:::-;2792:431;;2777:446;2687:543;;;:::o;3236:117::-;3290:8;3340:5;3334:4;3330:16;3309:37;;3236:117;;;;:::o;3359:169::-;3403:6;3436:51;3484:1;3480:6;3472:5;3469:1;3465:13;3436:51;:::i;:::-;3432:56;3517:4;3511;3507:15;3497:25;;3410:118;3359:169;;;;:::o;3533:295::-;3609:4;3755:29;3780:3;3774:4;3755:29;:::i;:::-;3747:37;;3817:3;3814:1;3810:11;3804:4;3801:21;3793:29;;3533:295;;;;:::o;3833:1395::-;3950:37;3983:3;3950:37;:::i;:::-;4052:18;4044:6;4041:30;4038:56;;;4074:18;;:::i;:::-;4038:56;4118:38;4150:4;4144:11;4118:38;:::i;:::-;4203:67;4263:6;4255;4249:4;4203:67;:::i;:::-;4297:1;4321:4;4308:17;;4353:2;4345:6;4342:14;4370:1;4365:618;;;;5027:1;5044:6;5041:77;;;5093:9;5088:3;5084:19;5078:26;5069:35;;5041:77;5144:67;5204:6;5197:5;5144:67;:::i;:::-;5138:4;5131:81;5000:222;4335:887;;4365:618;4417:4;4413:9;4405:6;4401:22;4451:37;4483:4;4451:37;:::i;:::-;4510:1;4524:208;4538:7;4535:1;4532:14;4524:208;;;4617:9;4612:3;4608:19;4602:26;4594:6;4587:42;4668:1;4660:6;4656:14;4646:24;;4715:2;4704:9;4700:18;4687:31;;4561:4;4558:1;4554:12;4549:17;;4524:208;;;4760:6;4751:7;4748:19;4745:179;;;4818:9;4813:3;4809:19;4803:26;4861:48;4903:4;4895:6;4891:17;4880:9;4861:48;:::i;:::-;4853:6;4846:64;4768:156;4745:179;4970:1;4966;4958:6;4954:14;4950:22;4944:4;4937:36;4372:611;;;4335:887;;3925:1303;;;3833:1395;;:::o;5234:126::-;5271:7;5311:42;5304:5;5300:54;5289:65;;5234:126;;;:::o;5366:96::-;5403:7;5432:24;5450:5;5432:24;:::i;:::-;5421:35;;5366:96;;;:::o;5468:118::-;5555:24;5573:5;5555:24;:::i;:::-;5550:3;5543:37;5468:118;;:::o;5592:222::-;5685:4;5723:2;5712:9;5708:18;5700:26;;5736:71;5804:1;5793:9;5789:17;5780:6;5736:71;:::i;:::-;5592:222;;;;:::o;190:5742:35:-;;;;;;;",
    linkReferences: {},
  },
  deployedBytecode: {
    object:
      "0x608060405260043610610165575f3560e01c80638da5cb5b116100d0578063bec2a7c511610089578063e219fc7511610063578063e219fc751461050d578063e985e9c514610529578063f2fde38b14610565578063f810e5271461058d57610165565b8063bec2a7c514610477578063c78f19f9146104a7578063c87b56dd146104d157610165565b80638da5cb5b1461038f57806395d89b41146103b9578063a22cb465146103e3578063ae677aa31461040b578063b88d4fde14610433578063be9af5361461045b57610165565b8063202e374011610122578063202e37401461028757806323b872dd146102b157806342842e0e146102d95780636352211e1461030157806370a082311461033d578063715018a61461037957610165565b806301ffc9a71461016957806306fdde03146101a5578063081812fc146101cf578063095ea7b31461020b5780630f08efe01461023357806312e855851461025d575b5f5ffd5b348015610174575f5ffd5b5061018f600480360381019061018a9190612e7b565b6105b5565b60405161019c9190612ec0565b60405180910390f35b3480156101b0575f5ffd5b506101b9610615565b6040516101c69190612f49565b60405180910390f35b3480156101da575f5ffd5b506101f560048036038101906101f09190612f9c565b6106a4565b6040516102029190613006565b60405180910390f35b348015610216575f5ffd5b50610231600480360381019061022c9190613049565b6106bf565b005b34801561023e575f5ffd5b506102476106d5565b60405161025491906131f9565b60405180910390f35b348015610268575f5ffd5b5061027161092d565b60405161027e9190613228565b60405180910390f35b348015610292575f5ffd5b5061029b610936565b6040516102a891906131f9565b60405180910390f35b3480156102bc575f5ffd5b506102d760048036038101906102d29190613241565b610ddb565b005b3480156102e4575f5ffd5b506102ff60048036038101906102fa9190613241565b610eda565b005b34801561030c575f5ffd5b5061032760048036038101906103229190612f9c565b610ef9565b6040516103349190613006565b60405180910390f35b348015610348575f5ffd5b50610363600480360381019061035e9190613291565b610f0a565b6040516103709190613228565b60405180910390f35b348015610384575f5ffd5b5061038d610fc0565b005b34801561039a575f5ffd5b506103a3610fd3565b6040516103b09190613006565b60405180910390f35b3480156103c4575f5ffd5b506103cd610ffb565b6040516103da9190612f49565b60405180910390f35b3480156103ee575f5ffd5b50610409600480360381019061040491906132e6565b61108b565b005b348015610416575f5ffd5b50610431600480360381019061042c9190612f9c565b6110a1565b005b34801561043e575f5ffd5b5061045960048036038101906104549190613450565b6110b3565b005b61047560048036038101906104709190612f9c565b6110d8565b005b610491600480360381019061048c919061356e565b611392565b60405161049e9190613228565b60405180910390f35b3480156104b2575f5ffd5b506104bb611479565b6040516104c89190613228565b60405180910390f35b3480156104dc575f5ffd5b506104f760048036038101906104f29190612f9c565b61147f565b6040516105049190612f49565b60405180910390f35b610527600480360381019061052291906135da565b61158a565b005b348015610534575f5ffd5b5061054f600480360381019061054a9190613618565b611778565b60405161055c9190612ec0565b60405180910390f35b348015610570575f5ffd5b5061058b60048036038101906105869190613291565b611806565b005b348015610598575f5ffd5b506105b360048036038101906105ae9190612f9c565b61188a565b005b5f634906490660e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061060e575061060d82611a44565b5b9050919050565b60605f805461062390613683565b80601f016020809104026020016040519081016040528092919081815260200182805461064f90613683565b801561069a5780601f106106715761010080835404028352916020019161069a565b820191905f5260205f20905b81548152906001019060200180831161067d57829003601f168201915b5050505050905090565b5f6106ae82611b25565b506106b882611bab565b9050919050565b6106d182826106cc611be4565b611beb565b5050565b60605f60085490505f6009546008546106ee91906136e0565b90505f5f90505f8267ffffffffffffffff81111561070f5761070e61332c565b5b60405190808252806020026020018201604052801561074857816020015b610735612db1565b81526020019060019003908161072d5790505b5090505f5f90505b84811015610922573073ffffffffffffffffffffffffffffffffffffffff16600b5f60018461077f9190613713565b81526020019081526020015f206002015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603610915575f6001826107d89190613713565b90505f600b5f8381526020019081526020015f209050806040518060e00160405290815f8201548152602001600182015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016003820154815260200160048201548152602001600582015f9054906101000a900460ff161515151581526020016006820154815250508486815181106108f8576108f7613746565b5b60200260200101819052506001856109109190613713565b945050505b8080600101915050610750565b508094505050505090565b5f600a54905090565b60605f60085490505f5f90505f5f90505f5f90505b83811015610aca575f6001826109619190613713565b90505f5f3073ffffffffffffffffffffffffffffffffffffffff168360405160240161098d9190613228565b6040516020818303038152906040527f6352211e000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050604051610a1791906137b7565b5f60405180830381855afa9150503d805f8114610a4f576040519150601f19603f3d011682016040523d82523d5f602084013e610a54565b606091505b50915091508115610aba575f81806020019051810190610a7491906137f7565b90503373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610ab8578680610ab490613822565b9750505b505b505050808060010191505061094b565b505f8267ffffffffffffffff811115610ae657610ae561332c565b5b604051908082528060200260200182016040528015610b1f57816020015b610b0c612db1565b815260200190600190039081610b045790505b5090505f5f90505b84811015610dd0575f600182610b3d9190613713565b90505f5f3073ffffffffffffffffffffffffffffffffffffffff1683604051602401610b699190613228565b6040516020818303038152906040527f6352211e000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050604051610bf391906137b7565b5f60405180830381855afa9150503d805f8114610c2b576040519150601f19603f3d011682016040523d82523d5f602084013e610c30565b606091505b50915091508115610dc0575f81806020019051810190610c5091906137f7565b90503373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610dbe575f600b5f8681526020019081526020015f209050806040518060e00160405290815f8201548152602001600182015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016003820154815260200160048201548152602001600582015f9054906101000a900460ff16151515158152602001600682015481525050878981518110610da357610da2613746565b5b60200260200101819052508780610db990613822565b985050505b505b5050508080600101915050610b27565b508094505050505090565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610e4b575f6040517f64a0ae92000000000000000000000000000000000000000000000000000000008152600401610e429190613006565b60405180910390fd5b5f610e5e8383610e59611be4565b611bfd565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610ed4578382826040517f64283d7b000000000000000000000000000000000000000000000000000000008152600401610ecb93929190613869565b60405180910390fd5b50505050565b610ef483838360405180602001604052805f8152506110b3565b505050565b5f610f0382611b25565b9050919050565b5f5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610f7b575f6040517f89c62b64000000000000000000000000000000000000000000000000000000008152600401610f729190613006565b60405180910390fd5b60035f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b610fc8611e08565b610fd15f611e8f565b565b5f60075f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60606001805461100a90613683565b80601f016020809104026020016040519081016040528092919081815260200182805461103690613683565b80156110815780601f1061105857610100808354040283529160200191611081565b820191905f5260205f20905b81548152906001019060200180831161106457829003601f168201915b5050505050905090565b61109d611096611be4565b8383611f52565b5050565b6110a9611e08565b80600a8190555050565b6110be848484610ddb565b6110d26110c9611be4565b858585856120bb565b50505050565b5f600b5f8381526020019081526020015f20905080600301543414611132576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611129906138e8565b60405180910390fd5b3073ffffffffffffffffffffffffffffffffffffffff16816002015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146111c3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111ba90613950565b60405180910390fd5b33816002015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001816005015f6101000a81548160ff021916908315150217905550600160095f8282546112339190613713565b92505081905550611245303384612267565b61124d610fd3565b73ffffffffffffffffffffffffffffffffffffffff166108fc600a5490811502906040515f60405180830381858888f19350505050158015611291573d5f5f3e3d5ffd5b50806001015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc3490811502906040515f60405180830381858888f193505050501580156112f8573d5f5f3e3d5ffd5b505f816001015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055503373ffffffffffffffffffffffffffffffffffffffff16827feab8dc14880386fddeb427893f756239a41ff4e2f149c4da12c0a429ab5c6ac783600301546040516113869190613228565b60405180910390a35050565b5f61139b611e08565b600a5434146113df576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113d6906139b8565b60405180910390fd5b600160085f8282546113f19190613713565b925050819055505f600854905061140833826123cf565b61141281866124c2565b61141d81858561251c565b3373ffffffffffffffffffffffffffffffffffffffff16817fd0058778bf0543e8ed74ab7fc87f778020d312d616ad6f98b80bc8eb521589bb86866040516114669291906139d6565b60405180910390a3809150509392505050565b600a5481565b606061148a82611b25565b505f60065f8481526020019081526020015f2080546114a890613683565b80601f01602080910402602001604051908101604052809291908181526020018280546114d490613683565b801561151f5780601f106114f65761010080835404028352916020019161151f565b820191905f5260205f20905b81548152906001019060200180831161150257829003601f168201915b505050505090505f61152f6126b4565b90505f815103611543578192505050611585565b5f8251111561157757808260405160200161155f929190613a37565b60405160208183030381529060405292505050611585565b611580846126ca565b925050505b919050565b3373ffffffffffffffffffffffffffffffffffffffff166115aa83610ef9565b73ffffffffffffffffffffffffffffffffffffffff1614611600576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115f790613aa4565b60405180910390fd5b600a543414611644576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161163b90613b0c565b60405180910390fd5b5f600b5f8481526020019081526020015f2090505f816005015f6101000a81548160ff02191690831515021790555081816003018190555033816001015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555030816002015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600160095f82825461171291906136e0565b92505081905550611724333085612267565b3373ffffffffffffffffffffffffffffffffffffffff16837f8568e07cc8be33fb698f886bd8ce4581a5ca319d44462191312c72ac0acd312d8460405161176b9190613228565b60405180910390a3505050565b5f60055f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff16905092915050565b61180e611e08565b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361187e575f6040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016118759190613006565b60405180910390fd5b61188781611e8f565b50565b3373ffffffffffffffffffffffffffffffffffffffff166118aa82610ef9565b73ffffffffffffffffffffffffffffffffffffffff1614611900576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118f790613b74565b60405180910390fd5b5f600b5f8381526020019081526020015f206004015490505f811161195a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161195190613c02565b60405180910390fd5b61196382612730565b3373ffffffffffffffffffffffffffffffffffffffff16827f7b6f41a7ebae9ed4a1e9a52a100d2846f17583555c38db2d37ca80229d1a0df7836040516119aa9190613228565b60405180910390a3600b5f8381526020019081526020015f205f5f82015f9055600182015f6101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055600282015f6101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055600382015f9055600482015f9055600582015f6101000a81549060ff0219169055600682015f905550505050565b5f7f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480611b0e57507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80611b1e5750611b1d826127b2565b5b9050919050565b5f5f611b308361281b565b90505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603611ba257826040517f7e273289000000000000000000000000000000000000000000000000000000008152600401611b999190613228565b60405180910390fd5b80915050919050565b5f60045f8381526020019081526020015f205f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b5f33905090565b611bf88383836001612854565b505050565b5f5f611c088461281b565b90505f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614611c4957611c48818486612a13565b5b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614611cd457611c885f855f5f612854565b600160035f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825403925050819055505b5f73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614611d5357600160035f8773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825401925050819055505b8460025f8681526020019081526020015f205f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4809150509392505050565b611e10611be4565b73ffffffffffffffffffffffffffffffffffffffff16611e2e610fd3565b73ffffffffffffffffffffffffffffffffffffffff1614611e8d57611e51611be4565b6040517f118cdaa7000000000000000000000000000000000000000000000000000000008152600401611e849190613006565b60405180910390fd5b565b5f60075f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160075f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611fc257816040517f5b08ba18000000000000000000000000000000000000000000000000000000008152600401611fb99190613006565b60405180910390fd5b8060055f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516120ae9190612ec0565b60405180910390a3505050565b5f8373ffffffffffffffffffffffffffffffffffffffff163b1115612260578273ffffffffffffffffffffffffffffffffffffffff1663150b7a02868685856040518563ffffffff1660e01b81526004016121199493929190613c68565b6020604051808303815f875af192505050801561215457506040513d601f19601f820116820180604052508101906121519190613cc6565b60015b6121d5573d805f8114612182576040519150601f19603f3d011682016040523d82523d5f602084013e612187565b606091505b505f8151036121cd57836040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016121c49190613006565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161461225e57836040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016122559190613006565b60405180910390fd5b505b5050505050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036122d7575f6040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016122ce9190613006565b60405180910390fd5b5f6122e383835f611bfd565b90505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361235557816040517f7e27328900000000000000000000000000000000000000000000000000000000815260040161234c9190613228565b60405180910390fd5b8373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146123c9578382826040517f64283d7b0000000000000000000000000000000000000000000000000000000081526004016123c093929190613869565b60405180910390fd5b50505050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361243f575f6040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016124369190613006565b60405180910390fd5b5f61244b83835f611bfd565b90505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146124bd575f6040517f73c6ac6e0000000000000000000000000000000000000000000000000000000081526004016124b49190613006565b60405180910390fd5b505050565b8060065f8481526020019081526020015f2090816124e09190613e91565b507ff8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce7826040516125109190613228565b60405180910390a15050565b5f821161255e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161255590613faa565b60405180910390fd5b6040518060e001604052808481526020013373ffffffffffffffffffffffffffffffffffffffff1681526020013073ffffffffffffffffffffffffffffffffffffffff1681526020018381526020018281526020015f1515815260200142815250600b5f8581526020019081526020015f205f820151815f01556020820151816001015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040820151816002015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550606082015181600301556080820151816004015560a0820151816005015f6101000a81548160ff02191690831515021790555060c082015181600601559050506126af333085612267565b505050565b606060405180602001604052805f815250905090565b60606126d582611b25565b505f6126df6126b4565b90505f8151116126fd5760405180602001604052805f815250612728565b8061270784612ad6565b604051602001612718929190613a37565b6040516020818303038152906040525b915050919050565b5f61273c5f835f611bfd565b90505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036127ae57816040517f7e2732890000000000000000000000000000000000000000000000000000000081526004016127a59190613228565b60405180910390fd5b5050565b5f7f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b5f60025f8381526020019081526020015f205f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b808061288c57505f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614155b156129be575f61289b84611b25565b90505f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415801561290557508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b801561291857506129168184611778565b155b1561295a57826040517fa9fbf51f0000000000000000000000000000000000000000000000000000000081526004016129519190613006565b60405180910390fd5b81156129bc57838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b8360045f8581526020019081526020015f205f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b612a1e838383612ba0565b612ad1575f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603612a9257806040517f7e273289000000000000000000000000000000000000000000000000000000008152600401612a899190613228565b60405180910390fd5b81816040517f177e802f000000000000000000000000000000000000000000000000000000008152600401612ac8929190613fc8565b60405180910390fd5b505050565b60605f6001612ae484612c60565b0190505f8167ffffffffffffffff811115612b0257612b0161332c565b5b6040519080825280601f01601f191660200182016040528015612b345781602001600182028036833780820191505090505b5090505f82602001820190505b600115612b95578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a8581612b8a57612b89613fef565b5b0494505f8503612b41575b819350505050919050565b5f5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614158015612c5757508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480612c185750612c178484611778565b5b80612c5657508273ffffffffffffffffffffffffffffffffffffffff16612c3e83611bab565b73ffffffffffffffffffffffffffffffffffffffff16145b5b90509392505050565b5f5f5f90507a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310612cbc577a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008381612cb257612cb1613fef565b5b0492506040810190505b6d04ee2d6d415b85acef81000000008310612cf9576d04ee2d6d415b85acef81000000008381612cef57612cee613fef565b5b0492506020810190505b662386f26fc100008310612d2857662386f26fc100008381612d1e57612d1d613fef565b5b0492506010810190505b6305f5e1008310612d51576305f5e1008381612d4757612d46613fef565b5b0492506008810190505b6127108310612d76576127108381612d6c57612d6b613fef565b5b0492506004810190505b60648310612d995760648381612d8f57612d8e613fef565b5b0492506002810190505b600a8310612da8576001810190505b80915050919050565b6040518060e001604052805f81526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f81526020015f81526020015f151581526020015f81525090565b5f604051905090565b5f5ffd5b5f5ffd5b5f7fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b612e5a81612e26565b8114612e64575f5ffd5b50565b5f81359050612e7581612e51565b92915050565b5f60208284031215612e9057612e8f612e1e565b5b5f612e9d84828501612e67565b91505092915050565b5f8115159050919050565b612eba81612ea6565b82525050565b5f602082019050612ed35f830184612eb1565b92915050565b5f81519050919050565b5f82825260208201905092915050565b8281835e5f83830152505050565b5f601f19601f8301169050919050565b5f612f1b82612ed9565b612f258185612ee3565b9350612f35818560208601612ef3565b612f3e81612f01565b840191505092915050565b5f6020820190508181035f830152612f618184612f11565b905092915050565b5f819050919050565b612f7b81612f69565b8114612f85575f5ffd5b50565b5f81359050612f9681612f72565b92915050565b5f60208284031215612fb157612fb0612e1e565b5b5f612fbe84828501612f88565b91505092915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f612ff082612fc7565b9050919050565b61300081612fe6565b82525050565b5f6020820190506130195f830184612ff7565b92915050565b61302881612fe6565b8114613032575f5ffd5b50565b5f813590506130438161301f565b92915050565b5f5f6040838503121561305f5761305e612e1e565b5b5f61306c85828601613035565b925050602061307d85828601612f88565b9150509250929050565b5f81519050919050565b5f82825260208201905092915050565b5f819050602082019050919050565b6130b981612f69565b82525050565b5f6130c982612fc7565b9050919050565b6130d9816130bf565b82525050565b6130e881612ea6565b82525050565b60e082015f8201516131025f8501826130b0565b50602082015161311560208501826130d0565b50604082015161312860408501826130d0565b50606082015161313b60608501826130b0565b50608082015161314e60808501826130b0565b5060a082015161316160a08501826130df565b5060c082015161317460c08501826130b0565b50505050565b5f61318583836130ee565b60e08301905092915050565b5f602082019050919050565b5f6131a782613087565b6131b18185613091565b93506131bc836130a1565b805f5b838110156131ec5781516131d3888261317a565b97506131de83613191565b9250506001810190506131bf565b5085935050505092915050565b5f6020820190508181035f830152613211818461319d565b905092915050565b61322281612f69565b82525050565b5f60208201905061323b5f830184613219565b92915050565b5f5f5f6060848603121561325857613257612e1e565b5b5f61326586828701613035565b935050602061327686828701613035565b925050604061328786828701612f88565b9150509250925092565b5f602082840312156132a6576132a5612e1e565b5b5f6132b384828501613035565b91505092915050565b6132c581612ea6565b81146132cf575f5ffd5b50565b5f813590506132e0816132bc565b92915050565b5f5f604083850312156132fc576132fb612e1e565b5b5f61330985828601613035565b925050602061331a858286016132d2565b9150509250929050565b5f5ffd5b5f5ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b61336282612f01565b810181811067ffffffffffffffff821117156133815761338061332c565b5b80604052505050565b5f613393612e15565b905061339f8282613359565b919050565b5f67ffffffffffffffff8211156133be576133bd61332c565b5b6133c782612f01565b9050602081019050919050565b828183375f83830152505050565b5f6133f46133ef846133a4565b61338a565b9050828152602081018484840111156134105761340f613328565b5b61341b8482856133d4565b509392505050565b5f82601f83011261343757613436613324565b5b81356134478482602086016133e2565b91505092915050565b5f5f5f5f6080858703121561346857613467612e1e565b5b5f61347587828801613035565b945050602061348687828801613035565b935050604061349787828801612f88565b925050606085013567ffffffffffffffff8111156134b8576134b7612e22565b5b6134c487828801613423565b91505092959194509250565b5f67ffffffffffffffff8211156134ea576134e961332c565b5b6134f382612f01565b9050602081019050919050565b5f61351261350d846134d0565b61338a565b90508281526020810184848401111561352e5761352d613328565b5b6135398482856133d4565b509392505050565b5f82601f83011261355557613554613324565b5b8135613565848260208601613500565b91505092915050565b5f5f5f6060848603121561358557613584612e1e565b5b5f84013567ffffffffffffffff8111156135a2576135a1612e22565b5b6135ae86828701613541565b93505060206135bf86828701612f88565b92505060406135d086828701612f88565b9150509250925092565b5f5f604083850312156135f0576135ef612e1e565b5b5f6135fd85828601612f88565b925050602061360e85828601612f88565b9150509250929050565b5f5f6040838503121561362e5761362d612e1e565b5b5f61363b85828601613035565b925050602061364c85828601613035565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f600282049050600182168061369a57607f821691505b6020821081036136ad576136ac613656565b5b50919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f6136ea82612f69565b91506136f583612f69565b925082820390508181111561370d5761370c6136b3565b5b92915050565b5f61371d82612f69565b915061372883612f69565b92508282019050808211156137405761373f6136b3565b5b92915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f81519050919050565b5f81905092915050565b5f61379182613773565b61379b818561377d565b93506137ab818560208601612ef3565b80840191505092915050565b5f6137c28284613787565b915081905092915050565b6137d6816130bf565b81146137e0575f5ffd5b50565b5f815190506137f1816137cd565b92915050565b5f6020828403121561380c5761380b612e1e565b5b5f613819848285016137e3565b91505092915050565b5f61382c82612f69565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361385e5761385d6136b3565b5b600182019050919050565b5f60608201905061387c5f830186612ff7565b6138896020830185613219565b6138966040830184612ff7565b949350505050565b7f5375626d69742066756c6c2061736b696e6720707269636500000000000000005f82015250565b5f6138d2601883612ee3565b91506138dd8261389e565b602082019050919050565b5f6020820190508181035f8301526138ff816138c6565b9050919050565b7f4974656d206e6f7420666f722073616c650000000000000000000000000000005f82015250565b5f61393a601183612ee3565b915061394582613906565b602082019050919050565b5f6020820190508181035f8301526139678161392e565b9050919050565b7f50617920746865206c697374696e6720707269636500000000000000000000005f82015250565b5f6139a2601583612ee3565b91506139ad8261396e565b602082019050919050565b5f6020820190508181035f8301526139cf81613996565b9050919050565b5f6040820190506139e95f830185613219565b6139f66020830184613219565b9392505050565b5f81905092915050565b5f613a1182612ed9565b613a1b81856139fd565b9350613a2b818560208601612ef3565b80840191505092915050565b5f613a428285613a07565b9150613a4e8284613a07565b91508190509392505050565b7f596f75206d757374206f776e2074686973204e465400000000000000000000005f82015250565b5f613a8e601583612ee3565b9150613a9982613a5a565b602082019050919050565b5f6020820190508181035f830152613abb81613a82565b9050919050565b7f50617920746865206c697374696e6720666565000000000000000000000000005f82015250565b5f613af6601383612ee3565b9150613b0182613ac2565b602082019050919050565b5f6020820190508181035f830152613b2381613aea565b9050919050565b7f596f7520646f206e6f74206f776e207468697320766f756368657200000000005f82015250565b5f613b5e601b83612ee3565b9150613b6982613b2a565b602082019050919050565b5f6020820190508181035f830152613b8b81613b52565b9050919050565b7f5468697320766f756368657220686173206e6f20646973636f756e742076616c5f8201527f7565000000000000000000000000000000000000000000000000000000000000602082015250565b5f613bec602283612ee3565b9150613bf782613b92565b604082019050919050565b5f6020820190508181035f830152613c1981613be0565b9050919050565b5f82825260208201905092915050565b5f613c3a82613773565b613c448185613c20565b9350613c54818560208601612ef3565b613c5d81612f01565b840191505092915050565b5f608082019050613c7b5f830187612ff7565b613c886020830186612ff7565b613c956040830185613219565b8181036060830152613ca78184613c30565b905095945050505050565b5f81519050613cc081612e51565b92915050565b5f60208284031215613cdb57613cda612e1e565b5b5f613ce884828501613cb2565b91505092915050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f60088302613d4d7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82613d12565b613d578683613d12565b95508019841693508086168417925050509392505050565b5f819050919050565b5f613d92613d8d613d8884612f69565b613d6f565b612f69565b9050919050565b5f819050919050565b613dab83613d78565b613dbf613db782613d99565b848454613d1e565b825550505050565b5f5f905090565b613dd6613dc7565b613de1818484613da2565b505050565b5b81811015613e0457613df95f82613dce565b600181019050613de7565b5050565b601f821115613e4957613e1a81613cf1565b613e2384613d03565b81016020851015613e32578190505b613e46613e3e85613d03565b830182613de6565b50505b505050565b5f82821c905092915050565b5f613e695f1984600802613e4e565b1980831691505092915050565b5f613e818383613e5a565b9150826002028217905092915050565b613e9a82612ed9565b67ffffffffffffffff811115613eb357613eb261332c565b5b613ebd8254613683565b613ec8828285613e08565b5f60209050601f831160018114613ef9575f8415613ee7578287015190505b613ef18582613e76565b865550613f58565b601f198416613f0786613cf1565b5f5b82811015613f2e57848901518255600182019150602085019450602081019050613f09565b86831015613f4b5784890151613f47601f891682613e5a565b8355505b6001600288020188555050505b505050505050565b7f5072696365206d757374206265203e20300000000000000000000000000000005f82015250565b5f613f94601183612ee3565b9150613f9f82613f60565b602082019050919050565b5f6020820190508181035f830152613fc181613f88565b9050919050565b5f604082019050613fdb5f830185612ff7565b613fe86020830184613219565b9392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffdfea26469706673582212202933efb3fe6301ecc6ff81474f66c764133f347949c027654a081fa054195d5b64736f6c634300081c0033",
    sourceMap:
      "190:5742:35:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;938:207:23;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2364:89:20;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3496:154;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3322:113;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;4110:630:35;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1401:93;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;4746:1183;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;4142:578:20;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;4786:132;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;2184:118;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1919:208;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2293:101:15;;;;;;;;;;;;;:::i;:::-;;1638:85;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2517:93:20;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3717:144;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1285:110:35;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;4984:233:20;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;2532:609:35;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1500:548;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;317:43;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1211:593:23;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3147:560:35;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;3927:153:20;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2543:215:15;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;3713:391:35;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;938:207:23;1040:4;761:10;754:18;;1063:35;;;:11;:35;;;;:75;;;;1102:36;1126:11;1102:23;:36::i;:::-;1063:75;1056:82;;938:207;;;:::o;2364:89:20:-;2409:13;2441:5;2434:12;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2364:89;:::o;3496:154::-;3563:7;3582:22;3596:7;3582:13;:22::i;:::-;;3622:21;3635:7;3622:12;:21::i;:::-;3615:28;;3496:154;;;:::o;3322:113::-;3393:35;3402:2;3406:7;3415:12;:10;:12::i;:::-;3393:8;:35::i;:::-;3322:113;;:::o;4110:630:35:-;4159:19;4190:14;4207:9;;4190:26;;4226:20;4261:10;;4249:9;;:22;;;;:::i;:::-;4226:45;;4281:17;4301:1;4281:21;;4313:25;4358:15;4341:33;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;4313:61;;4389:6;4398:1;4389:10;;4384:328;4405:9;4401:1;:13;4384:328;;;4478:4;4439:44;;:14;:21;4458:1;4454;:5;;;;:::i;:::-;4439:21;;;;;;;;;;;:27;;;;;;;;;;;;:44;;;4435:267;;4503:14;4524:1;4520;:5;;;;:::i;:::-;4503:22;;4543:30;4576:14;:25;4591:9;4576:25;;;;;;;;;;;4543:58;;4641:11;4619:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:5;4625:12;4619:19;;;;;;;;:::i;:::-;;;;;;;:33;;;;4686:1;4670:17;;;;;:::i;:::-;;;4485:217;;4435:267;4416:3;;;;;;;4384:328;;;;4728:5;4721:12;;;;;;4110:630;:::o;1401:93::-;1449:7;1475:12;;1468:19;;1401:93;:::o;4746:1183::-;4790:19;4817;4839:9;;4817:31;;4854:14;4871:1;4854:18;;4878:17;4898:1;4878:21;;4911:6;4920:1;4911:10;;4906:403;4927:14;4923:1;:18;4906:403;;;4958:12;4977:1;4973;:5;;;;:::i;:::-;4958:20;;4990:12;5004:19;5035:4;5027:24;;5109:7;5065:52;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5027:100;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4989:138;;;;5142:7;5138:165;;;5165:13;5192:6;5181:29;;;;;;;;;;;;:::i;:::-;5165:45;;5237:10;5228:19;;:5;:19;;;5224:69;;5267:11;;;;;:::i;:::-;;;;5224:69;5151:152;5138:165;4948:361;;;4943:3;;;;;;;4906:403;;;;5315:25;5360:9;5343:27;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;5315:55;;5382:6;5391:1;5382:10;;5377:531;5398:14;5394:1;:18;5377:531;;;5429:12;5448:1;5444;:5;;;;:::i;:::-;5429:20;;5461:12;5475:19;5506:4;5498:24;;5580:7;5536:52;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5498:100;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5460:138;;;;5613:7;5609:293;;;5636:13;5663:6;5652:29;;;;;;;;;;;;:::i;:::-;5636:45;;5708:10;5699:19;;:5;:19;;;5695:197;;5738:30;5771:14;:23;5786:7;5771:23;;;;;;;;;;;5738:56;;5834:11;5812:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:5;5818:12;5812:19;;;;;;;;:::i;:::-;;;;;;;:33;;;;5863:14;;;;;:::i;:::-;;;;5720:172;5695:197;5622:280;5609:293;5419:489;;;5414:3;;;;;;;5377:531;;;;5921:5;5914:12;;;;;;4746:1183;:::o;4142:578:20:-;4250:1;4236:16;;:2;:16;;;4232:87;;4305:1;4275:33;;;;;;;;;;;:::i;:::-;;;;;;;;4232:87;4537:21;4561:34;4569:2;4573:7;4582:12;:10;:12::i;:::-;4561:7;:34::i;:::-;4537:58;;4626:4;4609:21;;:13;:21;;;4605:109;;4674:4;4680:7;4689:13;4653:50;;;;;;;;;;;;;:::i;:::-;;;;;;;;4605:109;4222:498;4142:578;;;:::o;4786:132::-;4872:39;4889:4;4895:2;4899:7;4872:39;;;;;;;;;;;;:16;:39::i;:::-;4786:132;;;:::o;2184:118::-;2247:7;2273:22;2287:7;2273:13;:22::i;:::-;2266:29;;2184:118;;;:::o;1919:208::-;1982:7;2022:1;2005:19;;:5;:19;;;2001:87;;2074:1;2047:30;;;;;;;;;;;:::i;:::-;;;;;;;;2001:87;2104:9;:16;2114:5;2104:16;;;;;;;;;;;;;;;;2097:23;;1919:208;;;:::o;2293:101:15:-;1531:13;:11;:13::i;:::-;2357:30:::1;2384:1;2357:18;:30::i;:::-;2293:101::o:0;1638:85::-;1684:7;1710:6;;;;;;;;;;;1703:13;;1638:85;:::o;2517:93:20:-;2564:13;2596:7;2589:14;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2517:93;:::o;3717:144::-;3802:52;3821:12;:10;:12::i;:::-;3835:8;3845;3802:18;:52::i;:::-;3717:144;;:::o;1285:110:35:-;1531:13:15;:11;:13::i;:::-;1375::35::1;1360:12;:28;;;;1285:110:::0;:::o;4984:233:20:-;5097:31;5110:4;5116:2;5120:7;5097:12;:31::i;:::-;5138:72;5172:12;:10;:12::i;:::-;5186:4;5192:2;5196:7;5205:4;5138:33;:72::i;:::-;4984:233;;;;:::o;2532:609:35:-;2600:23;2626:14;:23;2641:7;2626:23;;;;;;;;;;;2600:49;;2680:4;:10;;;2667:9;:23;2659:60;;;;;;;;;;;;:::i;:::-;;;;;;;;;2759:4;2737:27;;:4;:10;;;;;;;;;;;;:27;;;2729:57;;;;;;;;;;;;:::i;:::-;;;;;;;;;2818:10;2797:4;:10;;;:32;;;;;;;;;;;;;;;;;;2851:4;2839;:9;;;:16;;;;;;;;;;;;;;;;;;2879:1;2865:10;;:15;;;;;;;:::i;:::-;;;;;;;;2891:45;2909:4;2916:10;2928:7;2891:9;:45::i;:::-;2954:7;:5;:7::i;:::-;2946:25;;:39;2972:12;;2946:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2995:4;:11;;;;;;;;;;;;:20;;:31;3016:9;2995:31;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3066:1;3036:4;:11;;;:33;;;;;;;;;;;;;;;;;;3111:10;3085:49;;3102:7;3085:49;3123:4;:10;;;3085:49;;;;;;:::i;:::-;;;;;;;;2590:551;2532:609;:::o;1500:548::-;1647:7;1531:13:15;:11;:13::i;:::-;1687:12:35::1;;1674:9;:25;1666:59;;;;;;;;;;;;:::i;:::-;;;;;;;;;1749:1;1736:9;;:14;;;;;;;:::i;:::-;;;;;;;;1760:18;1781:9;;1760:30;;1801:29;1807:10;1819;1801:5;:29::i;:::-;1840:34;1853:10;1865:8;1840:12;:34::i;:::-;1885:50;1902:10;1914:5;1921:13;1885:16;:50::i;:::-;1980:10;1950:63;;1968:10;1950:63;1992:5;1999:13;1950:63;;;;;;;:::i;:::-;;;;;;;;2031:10;2024:17;;;1500:548:::0;;;;;:::o;317:43::-;;;;:::o;1211:593:23:-;1284:13;1309:22;1323:7;1309:13;:22::i;:::-;;1342:23;1368:10;:19;1379:7;1368:19;;;;;;;;;;;1342:45;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1397:18;1418:10;:8;:10::i;:::-;1397:31;;1523:1;1507:4;1501:18;:23;1497:70;;1547:9;1540:16;;;;;;1497:70;1692:1;1672:9;1666:23;:27;1662:95;;;1730:4;1736:9;1716:30;;;;;;;;;:::i;:::-;;;;;;;;;;;;;1709:37;;;;;;1662:95;1774:23;1789:7;1774:14;:23::i;:::-;1767:30;;;;1211:593;;;;:::o;3147:560:35:-;3253:10;3233:30;;:16;3241:7;3233;:16::i;:::-;:30;;;3225:64;;;;;;;;;;;;:::i;:::-;;;;;;;;;3320:12;;3307:9;:25;3299:57;;;;;;;;;;;;:::i;:::-;;;;;;;;;3367:23;3393:14;:23;3408:7;3393:23;;;;;;;;;;;3367:49;;3439:5;3427:4;:9;;;:17;;;;;;;;;;;;;;;;;;3467:5;3454:4;:10;;:18;;;;3504:10;3482:4;:11;;;:33;;;;;;;;;;;;;;;;;;3554:4;3525;:10;;;:35;;;;;;;;;;;;;;;;;;3584:1;3570:10;;:15;;;;;;;:::i;:::-;;;;;;;;3596:45;3606:10;3626:4;3633:7;3596:9;:45::i;:::-;3682:10;3657:43;;3673:7;3657:43;3694:5;3657:43;;;;;;:::i;:::-;;;;;;;;3215:492;3147:560;;:::o;3927:153:20:-;4015:4;4038:18;:25;4057:5;4038:25;;;;;;;;;;;;;;;:35;4064:8;4038:35;;;;;;;;;;;;;;;;;;;;;;;;;4031:42;;3927:153;;;;:::o;2543:215:15:-;1531:13;:11;:13::i;:::-;2647:1:::1;2627:22;;:8;:22;;::::0;2623:91:::1;;2700:1;2672:31;;;;;;;;;;;:::i;:::-;;;;;;;;2623:91;2723:28;2742:8;2723:18;:28::i;:::-;2543:215:::0;:::o;3713:391:35:-;3797:10;3777:30;;:16;3785:7;3777;:16::i;:::-;:30;;;3769:70;;;;;;;;;;;;:::i;:::-;;;;;;;;;3850:16;3869:14;:23;3884:7;3869:23;;;;;;;;;;;:37;;;3850:56;;3935:1;3924:8;:12;3916:59;;;;;;;;;;;;:::i;:::-;;;;;;;;;3986:14;3992:7;3986:5;:14::i;:::-;4036:10;4015:42;;4027:7;4015:42;4048:8;4015:42;;;;;;:::i;:::-;;;;;;;;4074:14;:23;4089:7;4074:23;;;;;;;;;;;;4067:30;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3759:345;3713:391;:::o;1560:300:20:-;1662:4;1712:25;1697:40;;;:11;:40;;;;:104;;;;1768:33;1753:48;;;:11;:48;;;;1697:104;:156;;;;1817:36;1841:11;1817:23;:36::i;:::-;1697:156;1678:175;;1560:300;;;:::o;16212:241::-;16275:7;16294:13;16310:17;16319:7;16310:8;:17::i;:::-;16294:33;;16358:1;16341:19;;:5;:19;;;16337:88;;16406:7;16383:31;;;;;;;;;;;:::i;:::-;;;;;;;;16337:88;16441:5;16434:12;;;16212:241;;;:::o;5963:127::-;6033:7;6059:15;:24;6075:7;6059:24;;;;;;;;;;;;;;;;;;;;;6052:31;;5963:127;;;:::o;656:96:26:-;709:7;735:10;728:17;;656:96;:::o;14492:120:20:-;14572:33;14581:2;14585:7;14594:4;14600;14572:8;:33::i;:::-;14492:120;;;:::o;8861:795::-;8947:7;8966:12;8981:17;8990:7;8981:8;:17::i;:::-;8966:32;;9074:1;9058:18;;:4;:18;;;9054:86;;9092:37;9109:4;9115;9121:7;9092:16;:37::i;:::-;9054:86;9200:1;9184:18;;:4;:18;;;9180:256;;9300:48;9317:1;9321:7;9338:1;9342:5;9300:8;:48::i;:::-;9410:1;9391:9;:15;9401:4;9391:15;;;;;;;;;;;;;;;;:20;;;;;;;;;;;9180:256;9464:1;9450:16;;:2;:16;;;9446:107;;9527:1;9510:9;:13;9520:2;9510:13;;;;;;;;;;;;;;;;:18;;;;;;;;;;;9446:107;9582:2;9563:7;:16;9571:7;9563:16;;;;;;;;;;;;:21;;;;;;;;;;;;;;;;;;9619:7;9615:2;9600:27;;9609:4;9600:27;;;;;;;;;;;;9645:4;9638:11;;;8861:795;;;;;:::o;1796:162:15:-;1866:12;:10;:12::i;:::-;1855:23;;:7;:5;:7::i;:::-;:23;;;1851:101;;1928:12;:10;:12::i;:::-;1901:40;;;;;;;;;;;:::i;:::-;;;;;;;;1851:101;1796:162::o;2912:187::-;2985:16;3004:6;;;;;;;;;;;2985:25;;3029:8;3020:6;;:17;;;;;;;;;;;;;;;;;;3083:8;3052:40;;3073:8;3052:40;;;;;;;;;;;;2975:124;2912:187;:::o;15665:312:20:-;15792:1;15772:22;;:8;:22;;;15768:91;;15839:8;15817:31;;;;;;;;;;;:::i;:::-;;;;;;;;15768:91;15906:8;15868:18;:25;15887:5;15868:25;;;;;;;;;;;;;;;:35;15894:8;15868:35;;;;;;;;;;;;;;;;:46;;;;;;;;;;;;;;;;;;15951:8;15929:41;;15944:5;15929:41;;;15961:8;15929:41;;;;;;:::i;:::-;;;;;;;;15665:312;;;:::o;993:924:25:-;1190:1;1173:2;:14;;;:18;1169:742;;;1227:2;1211:36;;;1248:8;1258:4;1264:7;1273:4;1211:67;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;1207:694;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1585:1;1568:6;:13;:18;1564:323;;1708:2;1672:39;;;;;;;;;;;:::i;:::-;;;;;;;;1564:323;1839:6;1833:13;1824:6;1820:2;1816:15;1809:38;1207:694;1335:41;;;1325:51;;;:6;:51;;;;1321:182;;1481:2;1445:39;;;;;;;;;;;:::i;:::-;;;;;;;;1321:182;1279:238;1169:742;993:924;;;;;:::o;12061:460:20:-;12160:1;12146:16;;:2;:16;;;12142:87;;12215:1;12185:33;;;;;;;;;;;:::i;:::-;;;;;;;;12142:87;12238:21;12262:32;12270:2;12274:7;12291:1;12262:7;:32::i;:::-;12238:56;;12333:1;12308:27;;:13;:27;;;12304:211;;12381:7;12358:31;;;;;;;;;;;:::i;:::-;;;;;;;;12304:211;12427:4;12410:21;;:13;:21;;;12406:109;;12475:4;12481:7;12490:13;12454:50;;;;;;;;;;;;;:::i;:::-;;;;;;;;12406:109;12132:389;12061:460;;;:::o;9978:327::-;10059:1;10045:16;;:2;:16;;;10041:87;;10114:1;10084:33;;;;;;;;;;;:::i;:::-;;;;;;;;10041:87;10137:21;10161:32;10169:2;10173:7;10190:1;10161:7;:32::i;:::-;10137:56;;10232:1;10207:27;;:13;:27;;;10203:96;;10285:1;10257:31;;;;;;;;;;;:::i;:::-;;;;;;;;10203:96;10031:274;9978:327;;:::o;1932:167:23:-;2045:9;2023:10;:19;2034:7;2023:19;;;;;;;;;;;:31;;;;;;:::i;:::-;;2069:23;2084:7;2069:23;;;;;;:::i;:::-;;;;;;;;1932:167;;:::o;2054:472:35:-;2199:1;2191:5;:9;2183:39;;;;;;;;;;;;:::i;:::-;;;;;;;;;2259:204;;;;;;;;2283:7;2259:204;;;;2312:10;2259:204;;;;;;2353:4;2259:204;;;;;;2373:5;2259:204;;;;2392:13;2259:204;;;;2419:5;2259:204;;;;;;2438:15;2259:204;;;2233:14;:23;2248:7;2233:23;;;;;;;;;;;:230;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2474:45;2484:10;2504:4;2511:7;2474:9;:45::i;:::-;2054:472;;;:::o;3173:92:20:-;3224:13;3249:9;;;;;;;;;;;;;;3173:92;:::o;2676:255::-;2740:13;2765:22;2779:7;2765:13;:22::i;:::-;;2798:21;2822:10;:8;:10::i;:::-;2798:34;;2873:1;2855:7;2849:21;:25;:75;;;;;;;;;;;;;;;;;2891:7;2900:18;:7;:16;:18::i;:::-;2877:42;;;;;;;;;:::i;:::-;;;;;;;;;;;;;2849:75;2842:82;;;2676:255;;;:::o;11510:227::-;11561:21;11585:40;11601:1;11605:7;11622:1;11585:7;:40::i;:::-;11561:64;;11664:1;11639:27;;:13;:27;;;11635:96;;11712:7;11689:31;;;;;;;;;;;:::i;:::-;;;;;;;;11635:96;11551:186;11510:227;:::o;763:146:29:-;839:4;877:25;862:40;;;:11;:40;;;;855:47;;763:146;;;:::o;5732:115:20:-;5798:7;5824;:16;5832:7;5824:16;;;;;;;;;;;;;;;;;;;;;5817:23;;5732:115;;;:::o;14794:662::-;14954:9;:31;;;;14983:1;14967:18;;:4;:18;;;;14954:31;14950:460;;;15001:13;15017:22;15031:7;15017:13;:22::i;:::-;15001:38;;15183:1;15167:18;;:4;:18;;;;:35;;;;;15198:4;15189:13;;:5;:13;;;;15167:35;:69;;;;;15207:29;15224:5;15231:4;15207:16;:29::i;:::-;15206:30;15167:69;15163:142;;;15285:4;15263:27;;;;;;;;;;;:::i;:::-;;;;;;;;15163:142;15323:9;15319:81;;;15377:7;15373:2;15357:28;;15366:5;15357:28;;;;;;;;;;;;15319:81;14987:423;14950:460;15447:2;15420:15;:24;15436:7;15420:24;;;;;;;;;;;;:29;;;;;;;;;;;;;;;;;;14794:662;;;;:::o;7105:368::-;7217:38;7231:5;7238:7;7247;7217:13;:38::i;:::-;7212:255;;7292:1;7275:19;;:5;:19;;;7271:186;;7344:7;7321:31;;;;;;;;;;;:::i;:::-;;;;;;;;7271:186;7425:7;7434;7398:44;;;;;;;;;;;;:::i;:::-;;;;;;;;7212:255;7105:368;;;:::o;1308:632:28:-;1364:13;1413:14;1450:1;1430:17;1441:5;1430:10;:17::i;:::-;:21;1413:38;;1465:20;1499:6;1488:18;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1465:41;;1520:11;1615:6;1611:2;1607:15;1599:6;1595:28;1588:35;;1650:247;1657:4;1650:247;;;1681:5;;;;;;;;1785:10;1780:2;1773:5;1769:14;1764:32;1759:3;1751:46;1841:2;1832:11;;;;;;:::i;:::-;;;;;1874:1;1865:5;:10;1650:247;1861:21;1650:247;1917:6;1910:13;;;;;1308:632;;;:::o;6401:272:20:-;6504:4;6558:1;6539:21;;:7;:21;;;;:127;;;;;6586:7;6577:16;;:5;:16;;;:52;;;;6597:32;6614:5;6621:7;6597:16;:32::i;:::-;6577:52;:88;;;;6658:7;6633:32;;:21;6646:7;6633:12;:21::i;:::-;:32;;;6577:88;6539:127;6520:146;;6401:272;;;;;:::o;29154:916:31:-;29207:7;29226:14;29243:1;29226:18;;29291:8;29282:5;:17;29278:103;;29328:8;29319:17;;;;;;:::i;:::-;;;;;29364:2;29354:12;;;;29278:103;29407:8;29398:5;:17;29394:103;;29444:8;29435:17;;;;;;:::i;:::-;;;;;29480:2;29470:12;;;;29394:103;29523:8;29514:5;:17;29510:103;;29560:8;29551:17;;;;;;:::i;:::-;;;;;29596:2;29586:12;;;;29510:103;29639:7;29630:5;:16;29626:100;;29675:7;29666:16;;;;;;:::i;:::-;;;;;29710:1;29700:11;;;;29626:100;29752:7;29743:5;:16;29739:100;;29788:7;29779:16;;;;;;:::i;:::-;;;;;29823:1;29813:11;;;;29739:100;29865:7;29856:5;:16;29852:100;;29901:7;29892:16;;;;;;:::i;:::-;;;;;29936:1;29926:11;;;;29852:100;29978:7;29969:5;:16;29965:66;;30015:1;30005:11;;;;29965:66;30057:6;30050:13;;;29154:916;;;:::o;-1:-1:-1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;7:75:36:-;40:6;73:2;67:9;57:19;;7:75;:::o;88:117::-;197:1;194;187:12;211:117;320:1;317;310:12;334:149;370:7;410:66;403:5;399:78;388:89;;334:149;;;:::o;489:120::-;561:23;578:5;561:23;:::i;:::-;554:5;551:34;541:62;;599:1;596;589:12;541:62;489:120;:::o;615:137::-;660:5;698:6;685:20;676:29;;714:32;740:5;714:32;:::i;:::-;615:137;;;;:::o;758:327::-;816:6;865:2;853:9;844:7;840:23;836:32;833:119;;;871:79;;:::i;:::-;833:119;991:1;1016:52;1060:7;1051:6;1040:9;1036:22;1016:52;:::i;:::-;1006:62;;962:116;758:327;;;;:::o;1091:90::-;1125:7;1168:5;1161:13;1154:21;1143:32;;1091:90;;;:::o;1187:109::-;1268:21;1283:5;1268:21;:::i;:::-;1263:3;1256:34;1187:109;;:::o;1302:210::-;1389:4;1427:2;1416:9;1412:18;1404:26;;1440:65;1502:1;1491:9;1487:17;1478:6;1440:65;:::i;:::-;1302:210;;;;:::o;1518:99::-;1570:6;1604:5;1598:12;1588:22;;1518:99;;;:::o;1623:169::-;1707:11;1741:6;1736:3;1729:19;1781:4;1776:3;1772:14;1757:29;;1623:169;;;;:::o;1798:139::-;1887:6;1882:3;1877;1871:23;1928:1;1919:6;1914:3;1910:16;1903:27;1798:139;;;:::o;1943:102::-;1984:6;2035:2;2031:7;2026:2;2019:5;2015:14;2011:28;2001:38;;1943:102;;;:::o;2051:377::-;2139:3;2167:39;2200:5;2167:39;:::i;:::-;2222:71;2286:6;2281:3;2222:71;:::i;:::-;2215:78;;2302:65;2360:6;2355:3;2348:4;2341:5;2337:16;2302:65;:::i;:::-;2392:29;2414:6;2392:29;:::i;:::-;2387:3;2383:39;2376:46;;2143:285;2051:377;;;;:::o;2434:313::-;2547:4;2585:2;2574:9;2570:18;2562:26;;2634:9;2628:4;2624:20;2620:1;2609:9;2605:17;2598:47;2662:78;2735:4;2726:6;2662:78;:::i;:::-;2654:86;;2434:313;;;;:::o;2753:77::-;2790:7;2819:5;2808:16;;2753:77;;;:::o;2836:122::-;2909:24;2927:5;2909:24;:::i;:::-;2902:5;2899:35;2889:63;;2948:1;2945;2938:12;2889:63;2836:122;:::o;2964:139::-;3010:5;3048:6;3035:20;3026:29;;3064:33;3091:5;3064:33;:::i;:::-;2964:139;;;;:::o;3109:329::-;3168:6;3217:2;3205:9;3196:7;3192:23;3188:32;3185:119;;;3223:79;;:::i;:::-;3185:119;3343:1;3368:53;3413:7;3404:6;3393:9;3389:22;3368:53;:::i;:::-;3358:63;;3314:117;3109:329;;;;:::o;3444:126::-;3481:7;3521:42;3514:5;3510:54;3499:65;;3444:126;;;:::o;3576:96::-;3613:7;3642:24;3660:5;3642:24;:::i;:::-;3631:35;;3576:96;;;:::o;3678:118::-;3765:24;3783:5;3765:24;:::i;:::-;3760:3;3753:37;3678:118;;:::o;3802:222::-;3895:4;3933:2;3922:9;3918:18;3910:26;;3946:71;4014:1;4003:9;3999:17;3990:6;3946:71;:::i;:::-;3802:222;;;;:::o;4030:122::-;4103:24;4121:5;4103:24;:::i;:::-;4096:5;4093:35;4083:63;;4142:1;4139;4132:12;4083:63;4030:122;:::o;4158:139::-;4204:5;4242:6;4229:20;4220:29;;4258:33;4285:5;4258:33;:::i;:::-;4158:139;;;;:::o;4303:474::-;4371:6;4379;4428:2;4416:9;4407:7;4403:23;4399:32;4396:119;;;4434:79;;:::i;:::-;4396:119;4554:1;4579:53;4624:7;4615:6;4604:9;4600:22;4579:53;:::i;:::-;4569:63;;4525:117;4681:2;4707:53;4752:7;4743:6;4732:9;4728:22;4707:53;:::i;:::-;4697:63;;4652:118;4303:474;;;;;:::o;4783:143::-;4879:6;4913:5;4907:12;4897:22;;4783:143;;;:::o;4932:213::-;5060:11;5094:6;5089:3;5082:19;5134:4;5129:3;5125:14;5110:29;;4932:213;;;;:::o;5151:161::-;5247:4;5270:3;5262:11;;5300:4;5295:3;5291:14;5283:22;;5151:161;;;:::o;5318:108::-;5395:24;5413:5;5395:24;:::i;:::-;5390:3;5383:37;5318:108;;:::o;5432:104::-;5477:7;5506:24;5524:5;5506:24;:::i;:::-;5495:35;;5432:104;;;:::o;5542:132::-;5635:32;5661:5;5635:32;:::i;:::-;5630:3;5623:45;5542:132;;:::o;5680:99::-;5751:21;5766:5;5751:21;:::i;:::-;5746:3;5739:34;5680:99;;:::o;5853:1422::-;5998:4;5993:3;5989:14;6088:4;6081:5;6077:16;6071:23;6107:63;6164:4;6159:3;6155:14;6141:12;6107:63;:::i;:::-;6013:167;6264:4;6257:5;6253:16;6247:23;6283:79;6356:4;6351:3;6347:14;6333:12;6283:79;:::i;:::-;6190:182;6455:4;6448:5;6444:16;6438:23;6474:79;6547:4;6542:3;6538:14;6524:12;6474:79;:::i;:::-;6382:181;6646:4;6639:5;6635:16;6629:23;6665:63;6722:4;6717:3;6713:14;6699:12;6665:63;:::i;:::-;6573:165;6829:4;6822:5;6818:16;6812:23;6848:63;6905:4;6900:3;6896:14;6882:12;6848:63;:::i;:::-;6748:173;7003:4;6996:5;6992:16;6986:23;7022:57;7073:4;7068:3;7064:14;7050:12;7022:57;:::i;:::-;6931:158;7176:4;7169:5;7165:16;7159:23;7195:63;7252:4;7247:3;7243:14;7229:12;7195:63;:::i;:::-;7099:169;5967:1308;5853:1422;;:::o;7281:295::-;7408:10;7429:104;7529:3;7521:6;7429:104;:::i;:::-;7565:4;7560:3;7556:14;7542:28;;7281:295;;;;:::o;7582:142::-;7681:4;7713;7708:3;7704:14;7696:22;;7582:142;;;:::o;7802:964::-;7979:3;8008:83;8085:5;8008:83;:::i;:::-;8107:115;8215:6;8210:3;8107:115;:::i;:::-;8100:122;;8246:85;8325:5;8246:85;:::i;:::-;8354:7;8385:1;8370:371;8395:6;8392:1;8389:13;8370:371;;;8471:6;8465:13;8498:121;8615:3;8600:13;8498:121;:::i;:::-;8491:128;;8642:89;8724:6;8642:89;:::i;:::-;8632:99;;8430:311;8417:1;8414;8410:9;8405:14;;8370:371;;;8374:14;8757:3;8750:10;;7984:782;;;7802:964;;;;:::o;8772:489::-;8973:4;9011:2;9000:9;8996:18;8988:26;;9060:9;9054:4;9050:20;9046:1;9035:9;9031:17;9024:47;9088:166;9249:4;9240:6;9088:166;:::i;:::-;9080:174;;8772:489;;;;:::o;9267:118::-;9354:24;9372:5;9354:24;:::i;:::-;9349:3;9342:37;9267:118;;:::o;9391:222::-;9484:4;9522:2;9511:9;9507:18;9499:26;;9535:71;9603:1;9592:9;9588:17;9579:6;9535:71;:::i;:::-;9391:222;;;;:::o;9619:619::-;9696:6;9704;9712;9761:2;9749:9;9740:7;9736:23;9732:32;9729:119;;;9767:79;;:::i;:::-;9729:119;9887:1;9912:53;9957:7;9948:6;9937:9;9933:22;9912:53;:::i;:::-;9902:63;;9858:117;10014:2;10040:53;10085:7;10076:6;10065:9;10061:22;10040:53;:::i;:::-;10030:63;;9985:118;10142:2;10168:53;10213:7;10204:6;10193:9;10189:22;10168:53;:::i;:::-;10158:63;;10113:118;9619:619;;;;;:::o;10244:329::-;10303:6;10352:2;10340:9;10331:7;10327:23;10323:32;10320:119;;;10358:79;;:::i;:::-;10320:119;10478:1;10503:53;10548:7;10539:6;10528:9;10524:22;10503:53;:::i;:::-;10493:63;;10449:117;10244:329;;;;:::o;10579:116::-;10649:21;10664:5;10649:21;:::i;:::-;10642:5;10639:32;10629:60;;10685:1;10682;10675:12;10629:60;10579:116;:::o;10701:133::-;10744:5;10782:6;10769:20;10760:29;;10798:30;10822:5;10798:30;:::i;:::-;10701:133;;;;:::o;10840:468::-;10905:6;10913;10962:2;10950:9;10941:7;10937:23;10933:32;10930:119;;;10968:79;;:::i;:::-;10930:119;11088:1;11113:53;11158:7;11149:6;11138:9;11134:22;11113:53;:::i;:::-;11103:63;;11059:117;11215:2;11241:50;11283:7;11274:6;11263:9;11259:22;11241:50;:::i;:::-;11231:60;;11186:115;10840:468;;;;;:::o;11314:117::-;11423:1;11420;11413:12;11437:117;11546:1;11543;11536:12;11560:180;11608:77;11605:1;11598:88;11705:4;11702:1;11695:15;11729:4;11726:1;11719:15;11746:281;11829:27;11851:4;11829:27;:::i;:::-;11821:6;11817:40;11959:6;11947:10;11944:22;11923:18;11911:10;11908:34;11905:62;11902:88;;;11970:18;;:::i;:::-;11902:88;12010:10;12006:2;11999:22;11789:238;11746:281;;:::o;12033:129::-;12067:6;12094:20;;:::i;:::-;12084:30;;12123:33;12151:4;12143:6;12123:33;:::i;:::-;12033:129;;;:::o;12168:307::-;12229:4;12319:18;12311:6;12308:30;12305:56;;;12341:18;;:::i;:::-;12305:56;12379:29;12401:6;12379:29;:::i;:::-;12371:37;;12463:4;12457;12453:15;12445:23;;12168:307;;;:::o;12481:148::-;12579:6;12574:3;12569;12556:30;12620:1;12611:6;12606:3;12602:16;12595:27;12481:148;;;:::o;12635:423::-;12712:5;12737:65;12753:48;12794:6;12753:48;:::i;:::-;12737:65;:::i;:::-;12728:74;;12825:6;12818:5;12811:21;12863:4;12856:5;12852:16;12901:3;12892:6;12887:3;12883:16;12880:25;12877:112;;;12908:79;;:::i;:::-;12877:112;12998:54;13045:6;13040:3;13035;12998:54;:::i;:::-;12718:340;12635:423;;;;;:::o;13077:338::-;13132:5;13181:3;13174:4;13166:6;13162:17;13158:27;13148:122;;13189:79;;:::i;:::-;13148:122;13306:6;13293:20;13331:78;13405:3;13397:6;13390:4;13382:6;13378:17;13331:78;:::i;:::-;13322:87;;13138:277;13077:338;;;;:::o;13421:943::-;13516:6;13524;13532;13540;13589:3;13577:9;13568:7;13564:23;13560:33;13557:120;;;13596:79;;:::i;:::-;13557:120;13716:1;13741:53;13786:7;13777:6;13766:9;13762:22;13741:53;:::i;:::-;13731:63;;13687:117;13843:2;13869:53;13914:7;13905:6;13894:9;13890:22;13869:53;:::i;:::-;13859:63;;13814:118;13971:2;13997:53;14042:7;14033:6;14022:9;14018:22;13997:53;:::i;:::-;13987:63;;13942:118;14127:2;14116:9;14112:18;14099:32;14158:18;14150:6;14147:30;14144:117;;;14180:79;;:::i;:::-;14144:117;14285:62;14339:7;14330:6;14319:9;14315:22;14285:62;:::i;:::-;14275:72;;14070:287;13421:943;;;;;;;:::o;14370:308::-;14432:4;14522:18;14514:6;14511:30;14508:56;;;14544:18;;:::i;:::-;14508:56;14582:29;14604:6;14582:29;:::i;:::-;14574:37;;14666:4;14660;14656:15;14648:23;;14370:308;;;:::o;14684:425::-;14762:5;14787:66;14803:49;14845:6;14803:49;:::i;:::-;14787:66;:::i;:::-;14778:75;;14876:6;14869:5;14862:21;14914:4;14907:5;14903:16;14952:3;14943:6;14938:3;14934:16;14931:25;14928:112;;;14959:79;;:::i;:::-;14928:112;15049:54;15096:6;15091:3;15086;15049:54;:::i;:::-;14768:341;14684:425;;;;;:::o;15129:340::-;15185:5;15234:3;15227:4;15219:6;15215:17;15211:27;15201:122;;15242:79;;:::i;:::-;15201:122;15359:6;15346:20;15384:79;15459:3;15451:6;15444:4;15436:6;15432:17;15384:79;:::i;:::-;15375:88;;15191:278;15129:340;;;;:::o;15475:799::-;15562:6;15570;15578;15627:2;15615:9;15606:7;15602:23;15598:32;15595:119;;;15633:79;;:::i;:::-;15595:119;15781:1;15770:9;15766:17;15753:31;15811:18;15803:6;15800:30;15797:117;;;15833:79;;:::i;:::-;15797:117;15938:63;15993:7;15984:6;15973:9;15969:22;15938:63;:::i;:::-;15928:73;;15724:287;16050:2;16076:53;16121:7;16112:6;16101:9;16097:22;16076:53;:::i;:::-;16066:63;;16021:118;16178:2;16204:53;16249:7;16240:6;16229:9;16225:22;16204:53;:::i;:::-;16194:63;;16149:118;15475:799;;;;;:::o;16280:474::-;16348:6;16356;16405:2;16393:9;16384:7;16380:23;16376:32;16373:119;;;16411:79;;:::i;:::-;16373:119;16531:1;16556:53;16601:7;16592:6;16581:9;16577:22;16556:53;:::i;:::-;16546:63;;16502:117;16658:2;16684:53;16729:7;16720:6;16709:9;16705:22;16684:53;:::i;:::-;16674:63;;16629:118;16280:474;;;;;:::o;16760:::-;16828:6;16836;16885:2;16873:9;16864:7;16860:23;16856:32;16853:119;;;16891:79;;:::i;:::-;16853:119;17011:1;17036:53;17081:7;17072:6;17061:9;17057:22;17036:53;:::i;:::-;17026:63;;16982:117;17138:2;17164:53;17209:7;17200:6;17189:9;17185:22;17164:53;:::i;:::-;17154:63;;17109:118;16760:474;;;;;:::o;17240:180::-;17288:77;17285:1;17278:88;17385:4;17382:1;17375:15;17409:4;17406:1;17399:15;17426:320;17470:6;17507:1;17501:4;17497:12;17487:22;;17554:1;17548:4;17544:12;17575:18;17565:81;;17631:4;17623:6;17619:17;17609:27;;17565:81;17693:2;17685:6;17682:14;17662:18;17659:38;17656:84;;17712:18;;:::i;:::-;17656:84;17477:269;17426:320;;;:::o;17752:180::-;17800:77;17797:1;17790:88;17897:4;17894:1;17887:15;17921:4;17918:1;17911:15;17938:194;17978:4;17998:20;18016:1;17998:20;:::i;:::-;17993:25;;18032:20;18050:1;18032:20;:::i;:::-;18027:25;;18076:1;18073;18069:9;18061:17;;18100:1;18094:4;18091:11;18088:37;;;18105:18;;:::i;:::-;18088:37;17938:194;;;;:::o;18138:191::-;18178:3;18197:20;18215:1;18197:20;:::i;:::-;18192:25;;18231:20;18249:1;18231:20;:::i;:::-;18226:25;;18274:1;18271;18267:9;18260:16;;18295:3;18292:1;18289:10;18286:36;;;18302:18;;:::i;:::-;18286:36;18138:191;;;;:::o;18335:180::-;18383:77;18380:1;18373:88;18480:4;18477:1;18470:15;18504:4;18501:1;18494:15;18521:98;18572:6;18606:5;18600:12;18590:22;;18521:98;;;:::o;18625:147::-;18726:11;18763:3;18748:18;;18625:147;;;;:::o;18778:386::-;18882:3;18910:38;18942:5;18910:38;:::i;:::-;18964:88;19045:6;19040:3;18964:88;:::i;:::-;18957:95;;19061:65;19119:6;19114:3;19107:4;19100:5;19096:16;19061:65;:::i;:::-;19151:6;19146:3;19142:16;19135:23;;18886:278;18778:386;;;;:::o;19170:271::-;19300:3;19322:93;19411:3;19402:6;19322:93;:::i;:::-;19315:100;;19432:3;19425:10;;19170:271;;;;:::o;19447:138::-;19528:32;19554:5;19528:32;:::i;:::-;19521:5;19518:43;19508:71;;19575:1;19572;19565:12;19508:71;19447:138;:::o;19591:159::-;19656:5;19687:6;19681:13;19672:22;;19703:41;19738:5;19703:41;:::i;:::-;19591:159;;;;:::o;19756:367::-;19834:6;19883:2;19871:9;19862:7;19858:23;19854:32;19851:119;;;19889:79;;:::i;:::-;19851:119;20009:1;20034:72;20098:7;20089:6;20078:9;20074:22;20034:72;:::i;:::-;20024:82;;19980:136;19756:367;;;;:::o;20129:233::-;20168:3;20191:24;20209:5;20191:24;:::i;:::-;20182:33;;20237:66;20230:5;20227:77;20224:103;;20307:18;;:::i;:::-;20224:103;20354:1;20347:5;20343:13;20336:20;;20129:233;;;:::o;20368:442::-;20517:4;20555:2;20544:9;20540:18;20532:26;;20568:71;20636:1;20625:9;20621:17;20612:6;20568:71;:::i;:::-;20649:72;20717:2;20706:9;20702:18;20693:6;20649:72;:::i;:::-;20731;20799:2;20788:9;20784:18;20775:6;20731:72;:::i;:::-;20368:442;;;;;;:::o;20816:174::-;20956:26;20952:1;20944:6;20940:14;20933:50;20816:174;:::o;20996:366::-;21138:3;21159:67;21223:2;21218:3;21159:67;:::i;:::-;21152:74;;21235:93;21324:3;21235:93;:::i;:::-;21353:2;21348:3;21344:12;21337:19;;20996:366;;;:::o;21368:419::-;21534:4;21572:2;21561:9;21557:18;21549:26;;21621:9;21615:4;21611:20;21607:1;21596:9;21592:17;21585:47;21649:131;21775:4;21649:131;:::i;:::-;21641:139;;21368:419;;;:::o;21793:167::-;21933:19;21929:1;21921:6;21917:14;21910:43;21793:167;:::o;21966:366::-;22108:3;22129:67;22193:2;22188:3;22129:67;:::i;:::-;22122:74;;22205:93;22294:3;22205:93;:::i;:::-;22323:2;22318:3;22314:12;22307:19;;21966:366;;;:::o;22338:419::-;22504:4;22542:2;22531:9;22527:18;22519:26;;22591:9;22585:4;22581:20;22577:1;22566:9;22562:17;22555:47;22619:131;22745:4;22619:131;:::i;:::-;22611:139;;22338:419;;;:::o;22763:171::-;22903:23;22899:1;22891:6;22887:14;22880:47;22763:171;:::o;22940:366::-;23082:3;23103:67;23167:2;23162:3;23103:67;:::i;:::-;23096:74;;23179:93;23268:3;23179:93;:::i;:::-;23297:2;23292:3;23288:12;23281:19;;22940:366;;;:::o;23312:419::-;23478:4;23516:2;23505:9;23501:18;23493:26;;23565:9;23559:4;23555:20;23551:1;23540:9;23536:17;23529:47;23593:131;23719:4;23593:131;:::i;:::-;23585:139;;23312:419;;;:::o;23737:332::-;23858:4;23896:2;23885:9;23881:18;23873:26;;23909:71;23977:1;23966:9;23962:17;23953:6;23909:71;:::i;:::-;23990:72;24058:2;24047:9;24043:18;24034:6;23990:72;:::i;:::-;23737:332;;;;;:::o;24075:148::-;24177:11;24214:3;24199:18;;24075:148;;;;:::o;24229:390::-;24335:3;24363:39;24396:5;24363:39;:::i;:::-;24418:89;24500:6;24495:3;24418:89;:::i;:::-;24411:96;;24516:65;24574:6;24569:3;24562:4;24555:5;24551:16;24516:65;:::i;:::-;24606:6;24601:3;24597:16;24590:23;;24339:280;24229:390;;;;:::o;24625:435::-;24805:3;24827:95;24918:3;24909:6;24827:95;:::i;:::-;24820:102;;24939:95;25030:3;25021:6;24939:95;:::i;:::-;24932:102;;25051:3;25044:10;;24625:435;;;;;:::o;25066:171::-;25206:23;25202:1;25194:6;25190:14;25183:47;25066:171;:::o;25243:366::-;25385:3;25406:67;25470:2;25465:3;25406:67;:::i;:::-;25399:74;;25482:93;25571:3;25482:93;:::i;:::-;25600:2;25595:3;25591:12;25584:19;;25243:366;;;:::o;25615:419::-;25781:4;25819:2;25808:9;25804:18;25796:26;;25868:9;25862:4;25858:20;25854:1;25843:9;25839:17;25832:47;25896:131;26022:4;25896:131;:::i;:::-;25888:139;;25615:419;;;:::o;26040:169::-;26180:21;26176:1;26168:6;26164:14;26157:45;26040:169;:::o;26215:366::-;26357:3;26378:67;26442:2;26437:3;26378:67;:::i;:::-;26371:74;;26454:93;26543:3;26454:93;:::i;:::-;26572:2;26567:3;26563:12;26556:19;;26215:366;;;:::o;26587:419::-;26753:4;26791:2;26780:9;26776:18;26768:26;;26840:9;26834:4;26830:20;26826:1;26815:9;26811:17;26804:47;26868:131;26994:4;26868:131;:::i;:::-;26860:139;;26587:419;;;:::o;27012:177::-;27152:29;27148:1;27140:6;27136:14;27129:53;27012:177;:::o;27195:366::-;27337:3;27358:67;27422:2;27417:3;27358:67;:::i;:::-;27351:74;;27434:93;27523:3;27434:93;:::i;:::-;27552:2;27547:3;27543:12;27536:19;;27195:366;;;:::o;27567:419::-;27733:4;27771:2;27760:9;27756:18;27748:26;;27820:9;27814:4;27810:20;27806:1;27795:9;27791:17;27784:47;27848:131;27974:4;27848:131;:::i;:::-;27840:139;;27567:419;;;:::o;27992:221::-;28132:34;28128:1;28120:6;28116:14;28109:58;28201:4;28196:2;28188:6;28184:15;28177:29;27992:221;:::o;28219:366::-;28361:3;28382:67;28446:2;28441:3;28382:67;:::i;:::-;28375:74;;28458:93;28547:3;28458:93;:::i;:::-;28576:2;28571:3;28567:12;28560:19;;28219:366;;;:::o;28591:419::-;28757:4;28795:2;28784:9;28780:18;28772:26;;28844:9;28838:4;28834:20;28830:1;28819:9;28815:17;28808:47;28872:131;28998:4;28872:131;:::i;:::-;28864:139;;28591:419;;;:::o;29016:168::-;29099:11;29133:6;29128:3;29121:19;29173:4;29168:3;29164:14;29149:29;;29016:168;;;;:::o;29190:373::-;29276:3;29304:38;29336:5;29304:38;:::i;:::-;29358:70;29421:6;29416:3;29358:70;:::i;:::-;29351:77;;29437:65;29495:6;29490:3;29483:4;29476:5;29472:16;29437:65;:::i;:::-;29527:29;29549:6;29527:29;:::i;:::-;29522:3;29518:39;29511:46;;29280:283;29190:373;;;;:::o;29569:640::-;29764:4;29802:3;29791:9;29787:19;29779:27;;29816:71;29884:1;29873:9;29869:17;29860:6;29816:71;:::i;:::-;29897:72;29965:2;29954:9;29950:18;29941:6;29897:72;:::i;:::-;29979;30047:2;30036:9;30032:18;30023:6;29979:72;:::i;:::-;30098:9;30092:4;30088:20;30083:2;30072:9;30068:18;30061:48;30126:76;30197:4;30188:6;30126:76;:::i;:::-;30118:84;;29569:640;;;;;;;:::o;30215:141::-;30271:5;30302:6;30296:13;30287:22;;30318:32;30344:5;30318:32;:::i;:::-;30215:141;;;;:::o;30362:349::-;30431:6;30480:2;30468:9;30459:7;30455:23;30451:32;30448:119;;;30486:79;;:::i;:::-;30448:119;30606:1;30631:63;30686:7;30677:6;30666:9;30662:22;30631:63;:::i;:::-;30621:73;;30577:127;30362:349;;;;:::o;30717:141::-;30766:4;30789:3;30781:11;;30812:3;30809:1;30802:14;30846:4;30843:1;30833:18;30825:26;;30717:141;;;:::o;30864:93::-;30901:6;30948:2;30943;30936:5;30932:14;30928:23;30918:33;;30864:93;;;:::o;30963:107::-;31007:8;31057:5;31051:4;31047:16;31026:37;;30963:107;;;;:::o;31076:393::-;31145:6;31195:1;31183:10;31179:18;31218:97;31248:66;31237:9;31218:97;:::i;:::-;31336:39;31366:8;31355:9;31336:39;:::i;:::-;31324:51;;31408:4;31404:9;31397:5;31393:21;31384:30;;31457:4;31447:8;31443:19;31436:5;31433:30;31423:40;;31152:317;;31076:393;;;;;:::o;31475:60::-;31503:3;31524:5;31517:12;;31475:60;;;:::o;31541:142::-;31591:9;31624:53;31642:34;31651:24;31669:5;31651:24;:::i;:::-;31642:34;:::i;:::-;31624:53;:::i;:::-;31611:66;;31541:142;;;:::o;31689:75::-;31732:3;31753:5;31746:12;;31689:75;;;:::o;31770:269::-;31880:39;31911:7;31880:39;:::i;:::-;31941:91;31990:41;32014:16;31990:41;:::i;:::-;31982:6;31975:4;31969:11;31941:91;:::i;:::-;31935:4;31928:105;31846:193;31770:269;;;:::o;32045:73::-;32090:3;32111:1;32104:8;;32045:73;:::o;32124:189::-;32201:32;;:::i;:::-;32242:65;32300:6;32292;32286:4;32242:65;:::i;:::-;32177:136;32124:189;;:::o;32319:186::-;32379:120;32396:3;32389:5;32386:14;32379:120;;;32450:39;32487:1;32480:5;32450:39;:::i;:::-;32423:1;32416:5;32412:13;32403:22;;32379:120;;;32319:186;;:::o;32511:543::-;32612:2;32607:3;32604:11;32601:446;;;32646:38;32678:5;32646:38;:::i;:::-;32730:29;32748:10;32730:29;:::i;:::-;32720:8;32716:44;32913:2;32901:10;32898:18;32895:49;;;32934:8;32919:23;;32895:49;32957:80;33013:22;33031:3;33013:22;:::i;:::-;33003:8;32999:37;32986:11;32957:80;:::i;:::-;32616:431;;32601:446;32511:543;;;:::o;33060:117::-;33114:8;33164:5;33158:4;33154:16;33133:37;;33060:117;;;;:::o;33183:169::-;33227:6;33260:51;33308:1;33304:6;33296:5;33293:1;33289:13;33260:51;:::i;:::-;33256:56;33341:4;33335;33331:15;33321:25;;33234:118;33183:169;;;;:::o;33357:295::-;33433:4;33579:29;33604:3;33598:4;33579:29;:::i;:::-;33571:37;;33641:3;33638:1;33634:11;33628:4;33625:21;33617:29;;33357:295;;;;:::o;33657:1395::-;33774:37;33807:3;33774:37;:::i;:::-;33876:18;33868:6;33865:30;33862:56;;;33898:18;;:::i;:::-;33862:56;33942:38;33974:4;33968:11;33942:38;:::i;:::-;34027:67;34087:6;34079;34073:4;34027:67;:::i;:::-;34121:1;34145:4;34132:17;;34177:2;34169:6;34166:14;34194:1;34189:618;;;;34851:1;34868:6;34865:77;;;34917:9;34912:3;34908:19;34902:26;34893:35;;34865:77;34968:67;35028:6;35021:5;34968:67;:::i;:::-;34962:4;34955:81;34824:222;34159:887;;34189:618;34241:4;34237:9;34229:6;34225:22;34275:37;34307:4;34275:37;:::i;:::-;34334:1;34348:208;34362:7;34359:1;34356:14;34348:208;;;34441:9;34436:3;34432:19;34426:26;34418:6;34411:42;34492:1;34484:6;34480:14;34470:24;;34539:2;34528:9;34524:18;34511:31;;34385:4;34382:1;34378:12;34373:17;;34348:208;;;34584:6;34575:7;34572:19;34569:179;;;34642:9;34637:3;34633:19;34627:26;34685:48;34727:4;34719:6;34715:17;34704:9;34685:48;:::i;:::-;34677:6;34670:64;34592:156;34569:179;34794:1;34790;34782:6;34778:14;34774:22;34768:4;34761:36;34196:611;;;34159:887;;33749:1303;;;33657:1395;;:::o;35058:167::-;35198:19;35194:1;35186:6;35182:14;35175:43;35058:167;:::o;35231:366::-;35373:3;35394:67;35458:2;35453:3;35394:67;:::i;:::-;35387:74;;35470:93;35559:3;35470:93;:::i;:::-;35588:2;35583:3;35579:12;35572:19;;35231:366;;;:::o;35603:419::-;35769:4;35807:2;35796:9;35792:18;35784:26;;35856:9;35850:4;35846:20;35842:1;35831:9;35827:17;35820:47;35884:131;36010:4;35884:131;:::i;:::-;35876:139;;35603:419;;;:::o;36028:332::-;36149:4;36187:2;36176:9;36172:18;36164:26;;36200:71;36268:1;36257:9;36253:17;36244:6;36200:71;:::i;:::-;36281:72;36349:2;36338:9;36334:18;36325:6;36281:72;:::i;:::-;36028:332;;;;;:::o;36366:180::-;36414:77;36411:1;36404:88;36511:4;36508:1;36501:15;36535:4;36532:1;36525:15",
    linkReferences: {},
  },
  methodIdentifiers: {
    "applyVoucher(uint256)": "f810e527",
    "approve(address,uint256)": "095ea7b3",
    "balanceOf(address)": "70a08231",
    "createMarketSale(uint256)": "be9af536",
    "createToken(string,uint256,uint256)": "bec2a7c5",
    "fetchMarketItems()": "0f08efe0",
    "fetchMyNFTs()": "202e3740",
    "getApproved(uint256)": "081812fc",
    "getListingPrice()": "12e85585",
    "isApprovedForAll(address,address)": "e985e9c5",
    "listingPrice()": "c78f19f9",
    "name()": "06fdde03",
    "owner()": "8da5cb5b",
    "ownerOf(uint256)": "6352211e",
    "renounceOwnership()": "715018a6",
    "resellToken(uint256,uint256)": "e219fc75",
    "safeTransferFrom(address,address,uint256)": "42842e0e",
    "safeTransferFrom(address,address,uint256,bytes)": "b88d4fde",
    "setApprovalForAll(address,bool)": "a22cb465",
    "supportsInterface(bytes4)": "01ffc9a7",
    "symbol()": "95d89b41",
    "tokenURI(uint256)": "c87b56dd",
    "transferFrom(address,address,uint256)": "23b872dd",
    "transferOwnership(address)": "f2fde38b",
    "updateListingPrice(uint256)": "ae677aa3",
  },
  rawMetadata:
    '{"compiler":{"version":"0.8.28+commit.7893614a"},"language":"Solidity","output":{"abi":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address","name":"owner","type":"address"}],"name":"ERC721IncorrectOwner","type":"error"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ERC721InsufficientApproval","type":"error"},{"inputs":[{"internalType":"address","name":"approver","type":"address"}],"name":"ERC721InvalidApprover","type":"error"},{"inputs":[{"internalType":"address","name":"operator","type":"address"}],"name":"ERC721InvalidOperator","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"ERC721InvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"}],"name":"ERC721InvalidReceiver","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"}],"name":"ERC721InvalidSender","type":"error"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ERC721NonexistentToken","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_fromTokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_toTokenId","type":"uint256"}],"name":"BatchMetadataUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":true,"internalType":"address","name":"creator","type":"address"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"discountValue","type":"uint256"}],"name":"MarketItemCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"MetadataUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":true,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"}],"name":"VoucherPurchased","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":true,"internalType":"address","name":"seller","type":"address"},{"indexed":false,"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"VoucherReselled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"discountValue","type":"uint256"}],"name":"VoucherUsed","type":"event"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"applyVoucher","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"createMarketSale","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"string","name":"tokenURI","type":"string"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"discountValue","type":"uint256"}],"name":"createToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"fetchMarketItems","outputs":[{"components":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"discountValue","type":"uint256"},{"internalType":"bool","name":"sold","type":"bool"},{"internalType":"uint256","name":"createdAt","type":"uint256"}],"internalType":"struct VoucherNFT.MarketItem[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fetchMyNFTs","outputs":[{"components":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"discountValue","type":"uint256"},{"internalType":"bool","name":"sold","type":"bool"},{"internalType":"uint256","name":"createdAt","type":"uint256"}],"internalType":"struct VoucherNFT.MarketItem[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getListingPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"listingPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"}],"name":"resellToken","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_listingPrice","type":"uint256"}],"name":"updateListingPrice","outputs":[],"stateMutability":"nonpayable","type":"function"}],"devdoc":{"errors":{"ERC721IncorrectOwner(address,uint256,address)":[{"details":"Indicates an error related to the ownership over a particular token. Used in transfers.","params":{"owner":"Address of the current owner of a token.","sender":"Address whose tokens are being transferred.","tokenId":"Identifier number of a token."}}],"ERC721InsufficientApproval(address,uint256)":[{"details":"Indicates a failure with the `operator`\\u2019s approval. Used in transfers.","params":{"operator":"Address that may be allowed to operate on tokens without being their owner.","tokenId":"Identifier number of a token."}}],"ERC721InvalidApprover(address)":[{"details":"Indicates a failure with the `approver` of a token to be approved. Used in approvals.","params":{"approver":"Address initiating an approval operation."}}],"ERC721InvalidOperator(address)":[{"details":"Indicates a failure with the `operator` to be approved. Used in approvals.","params":{"operator":"Address that may be allowed to operate on tokens without being their owner."}}],"ERC721InvalidOwner(address)":[{"details":"Indicates that an address can\'t be an owner. For example, `address(0)` is a forbidden owner in ERC-20. Used in balance queries.","params":{"owner":"Address of the current owner of a token."}}],"ERC721InvalidReceiver(address)":[{"details":"Indicates a failure with the token `receiver`. Used in transfers.","params":{"receiver":"Address to which tokens are being transferred."}}],"ERC721InvalidSender(address)":[{"details":"Indicates a failure with the token `sender`. Used in transfers.","params":{"sender":"Address whose tokens are being transferred."}}],"ERC721NonexistentToken(uint256)":[{"details":"Indicates a `tokenId` whose `owner` is the zero address.","params":{"tokenId":"Identifier number of a token."}}],"OwnableInvalidOwner(address)":[{"details":"The owner is not a valid owner account. (eg. `address(0)`)"}],"OwnableUnauthorizedAccount(address)":[{"details":"The caller account is not authorized to perform an operation."}]},"events":{"Approval(address,address,uint256)":{"details":"Emitted when `owner` enables `approved` to manage the `tokenId` token."},"ApprovalForAll(address,address,bool)":{"details":"Emitted when `owner` enables or disables (`approved`) `operator` to manage all of its assets."},"BatchMetadataUpdate(uint256,uint256)":{"details":"This event emits when the metadata of a range of tokens is changed. So that the third-party platforms such as NFT market could timely update the images and related attributes of the NFTs."},"MetadataUpdate(uint256)":{"details":"This event emits when the metadata of a token is changed. So that the third-party platforms such as NFT market could timely update the images and related attributes of the NFT."},"Transfer(address,address,uint256)":{"details":"Emitted when `tokenId` token is transferred from `from` to `to`."}},"kind":"dev","methods":{"approve(address,uint256)":{"details":"See {IERC721-approve}."},"balanceOf(address)":{"details":"See {IERC721-balanceOf}."},"getApproved(uint256)":{"details":"See {IERC721-getApproved}."},"isApprovedForAll(address,address)":{"details":"See {IERC721-isApprovedForAll}."},"name()":{"details":"See {IERC721Metadata-name}."},"owner()":{"details":"Returns the address of the current owner."},"ownerOf(uint256)":{"details":"See {IERC721-ownerOf}."},"renounceOwnership()":{"details":"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner."},"safeTransferFrom(address,address,uint256)":{"details":"See {IERC721-safeTransferFrom}."},"safeTransferFrom(address,address,uint256,bytes)":{"details":"See {IERC721-safeTransferFrom}."},"setApprovalForAll(address,bool)":{"details":"See {IERC721-setApprovalForAll}."},"supportsInterface(bytes4)":{"details":"See {IERC165-supportsInterface}"},"symbol()":{"details":"See {IERC721Metadata-symbol}."},"tokenURI(uint256)":{"details":"See {IERC721Metadata-tokenURI}."},"transferFrom(address,address,uint256)":{"details":"See {IERC721-transferFrom}."},"transferOwnership(address)":{"details":"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner."}},"version":1},"userdoc":{"kind":"user","methods":{},"version":1}},"settings":{"compilationTarget":{"src/VoucherNFT.sol":"VoucherNFT"},"evmVersion":"cancun","libraries":{},"metadata":{"bytecodeHash":"ipfs"},"optimizer":{"enabled":false,"runs":200},"remappings":[":@openzeppelin/=lib/openzeppelin-contracts/",":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",":forge-std/=lib/forge-std/src/",":halmos-cheatcodes/=lib/openzeppelin-contracts/lib/halmos-cheatcodes/src/",":openzeppelin-contracts/=lib/openzeppelin-contracts/"]},"sources":{"lib/openzeppelin-contracts/contracts/access/Ownable.sol":{"keccak256":"0xff6d0bb2e285473e5311d9d3caacb525ae3538a80758c10649a4d61029b017bb","license":"MIT","urls":["bzz-raw://8ed324d3920bb545059d66ab97d43e43ee85fd3bd52e03e401f020afb0b120f6","dweb:/ipfs/QmfEckWLmZkDDcoWrkEvMWhms66xwTLff9DDhegYpvHo1a"]},"lib/openzeppelin-contracts/contracts/interfaces/IERC165.sol":{"keccak256":"0xde7e9fd9aee8d4f40772f96bb3b58836cbc6dfc0227014a061947f8821ea9724","license":"MIT","urls":["bzz-raw://11fea9f8bc98949ac6709f0c1699db7430d2948137aa94d5a9e95a91f61a710a","dweb:/ipfs/QmQdfRXxQjwP6yn3DVo1GHPpriKNcFghSPi94Z1oKEFUNS"]},"lib/openzeppelin-contracts/contracts/interfaces/IERC4906.sol":{"keccak256":"0x1b8691e244f6e11d987459993671db0af33e6a29f7805eac6a9925cc6b601957","license":"MIT","urls":["bzz-raw://a9e2a5efc2e14e98f5fe91bbab769199b4987a40dd3b96075b04957fda2ae80f","dweb:/ipfs/QmbAjrSSVBiJ6MbgF7Jkr53m674iGMZ6haWbbRrWDZJraK"]},"lib/openzeppelin-contracts/contracts/interfaces/IERC721.sol":{"keccak256":"0xc4d7ebf63eb2f6bf3fee1b6c0ee775efa9f31b4843a5511d07eea147e212932d","license":"MIT","urls":["bzz-raw://01c66a2fad66bc710db7510419a7eee569b40b67cd9f01b70a3fc90d6f76c03b","dweb:/ipfs/QmT1CjJZq4eTNA4nu8E9ZrWfaZu6ReUsDbjcK8DbEFqwx5"]},"lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol":{"keccak256":"0x880da465c203cec76b10d72dbd87c80f387df4102274f23eea1f9c9b0918792b","license":"MIT","urls":["bzz-raw://399594cd8bb0143bc9e55e0f1d071d0d8c850a394fb7a319d50edd55d9ed822b","dweb:/ipfs/QmbPZzgtT6LEm9CMqWfagQFwETbV1ztpECBB1DtQHrKiRz"]},"lib/openzeppelin-contracts/contracts/token/ERC721/ERC721.sol":{"keccak256":"0x39ed367e54765186281efcfe83e47cf0ad62cc879f10e191360712507125f29a","license":"MIT","urls":["bzz-raw://2c5ae6d85bd48cca8d6d2fcec8c63efd86f56f8a5832577a47e403ce0e65cb09","dweb:/ipfs/QmUtcS8AbRSWhuc61puYet58os8FvSqm329ChoW8wwZXZk"]},"lib/openzeppelin-contracts/contracts/token/ERC721/IERC721.sol":{"keccak256":"0x5dc63d1c6a12fe1b17793e1745877b2fcbe1964c3edfd0a482fac21ca8f18261","license":"MIT","urls":["bzz-raw://6b7f97c5960a50fd1822cb298551ffc908e37b7893a68d6d08bce18a11cb0f11","dweb:/ipfs/QmQQvxBytoY1eBt3pRQDmvH2hZ2yjhs12YqVfzGm7KSURq"]},"lib/openzeppelin-contracts/contracts/token/ERC721/IERC721Receiver.sol":{"keccak256":"0xb5afb8e8eebc4d1c6404df2f5e1e6d2c3d24fd01e5dfc855314951ecfaae462d","license":"MIT","urls":["bzz-raw://78586466c424f076c6a2a551d848cfbe3f7c49e723830807598484a1047b3b34","dweb:/ipfs/Qmb717ovcFxm7qgNKEShiV6M9SPR3v1qnNpAGH84D6w29p"]},"lib/openzeppelin-contracts/contracts/token/ERC721/extensions/ERC721URIStorage.sol":{"keccak256":"0x2b27b58570ff2456c7e65022a356c7e4f205bfabf95d0e870855a86587bb1356","license":"MIT","urls":["bzz-raw://d51268bd4266abe09ec07cac04b84c63ed97d2f847fd821e681428b1df7991b1","dweb:/ipfs/QmQBHj8tsrtiXBdegQZeqcxmBEQd2PMzPSKQ5jUELedEHb"]},"lib/openzeppelin-contracts/contracts/token/ERC721/extensions/IERC721Metadata.sol":{"keccak256":"0x37d1aaaa5a2908a09e9dcf56a26ddf762ecf295afb5964695937344fc6802ce1","license":"MIT","urls":["bzz-raw://ed0bfc1b92153c5000e50f4021367b931bbe96372ac6facec3c4961b72053d02","dweb:/ipfs/Qmbwp8VDerjS5SV1quwHH1oMXxPQ93fzfLVqJ2RCqbowGE"]},"lib/openzeppelin-contracts/contracts/token/ERC721/utils/ERC721Utils.sol":{"keccak256":"0xddab643169f47a2c5291afafcbfdca045d9e6835553307d090bc048b6dabd0ac","license":"MIT","urls":["bzz-raw://d0ffbacfee42977167b3c75bd4787f8b72a7ab1176abd544f3dff662c6528e24","dweb:/ipfs/QmUprM1cWCyaQ3LDjHA2DhwiPs3wekQ6MWXHFZdMMxpcyX"]},"lib/openzeppelin-contracts/contracts/utils/Context.sol":{"keccak256":"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2","license":"MIT","urls":["bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12","dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF"]},"lib/openzeppelin-contracts/contracts/utils/Panic.sol":{"keccak256":"0xf7fe324703a64fc51702311dc51562d5cb1497734f074e4f483bfb6717572d7a","license":"MIT","urls":["bzz-raw://c6a5ff4f9fd8649b7ee20800b7fa387d3465bd77cf20c2d1068cd5c98e1ed57a","dweb:/ipfs/QmVSaVJf9FXFhdYEYeCEfjMVHrxDh5qL4CGkxdMWpQCrqG"]},"lib/openzeppelin-contracts/contracts/utils/Strings.sol":{"keccak256":"0x81c274a60a7ae232ae3dc9ff3a4011b4849a853c13b0832cd3351bb1bb2f0dae","license":"MIT","urls":["bzz-raw://9da0c20dc74358a2a76330818f3bac9d1e2ce3371aec847b9cbf5d147fbae4f6","dweb:/ipfs/QmeczhmnFv1hbXKGLwbYXY6Rrytc9a5A2YaRi5QMMgjPnb"]},"lib/openzeppelin-contracts/contracts/utils/introspection/ERC165.sol":{"keccak256":"0xddce8e17e3d3f9ed818b4f4c4478a8262aab8b11ed322f1bf5ed705bb4bd97fa","license":"MIT","urls":["bzz-raw://8084aa71a4cc7d2980972412a88fe4f114869faea3fefa5436431644eb5c0287","dweb:/ipfs/Qmbqfs5dRdPvHVKY8kTaeyc65NdqXRQwRK7h9s5UJEhD1p"]},"lib/openzeppelin-contracts/contracts/utils/introspection/IERC165.sol":{"keccak256":"0x79796192ec90263f21b464d5bc90b777a525971d3de8232be80d9c4f9fb353b8","license":"MIT","urls":["bzz-raw://f6fda447a62815e8064f47eff0dd1cf58d9207ad69b5d32280f8d7ed1d1e4621","dweb:/ipfs/QmfDRc7pxfaXB2Dh9np5Uf29Na3pQ7tafRS684wd3GLjVL"]},"lib/openzeppelin-contracts/contracts/utils/math/Math.sol":{"keccak256":"0x1225214420c83ebcca88f2ae2b50f053aaa7df7bd684c3e878d334627f2edfc6","license":"MIT","urls":["bzz-raw://6c5fab4970634f9ab9a620983dc1c8a30153981a0b1a521666e269d0a11399d3","dweb:/ipfs/QmVRnBC575MESGkEHndjujtR7qub2FzU9RWy9eKLp4hPZB"]},"lib/openzeppelin-contracts/contracts/utils/math/SafeCast.sol":{"keccak256":"0x195533c86d0ef72bcc06456a4f66a9b941f38eb403739b00f21fd7c1abd1ae54","license":"MIT","urls":["bzz-raw://b1d578337048cad08c1c03041cca5978eff5428aa130c781b271ad9e5566e1f8","dweb:/ipfs/QmPFKL2r9CBsMwmUqqdcFPfHZB2qcs9g1HDrPxzWSxomvy"]},"lib/openzeppelin-contracts/contracts/utils/math/SignedMath.sol":{"keccak256":"0xb1970fac7b64e6c09611e6691791e848d5e3fe410fa5899e7df2e0afd77a99e3","license":"MIT","urls":["bzz-raw://db5fbb3dddd8b7047465b62575d96231ba8a2774d37fb4737fbf23340fabbb03","dweb:/ipfs/QmVUSvooZKEdEdap619tcJjTLcAuH6QBdZqAzWwnAXZAWJ"]},"src/VoucherNFT.sol":{"keccak256":"0x095a05fbb7f9bb01e21456b3d3bb5f6ceffb78da5ca520805366b0f31d6bc42f","license":"MIT","urls":["bzz-raw://f3859cf8ad29c794eb1a853bc0fdd020869a0a2f117c0d9404cff7f44f9b560e","dweb:/ipfs/QmXxdz16S6iP3Eki2zyfEWDyVqVnFaYDnpNUzWQ4C7Ljig"]}},"version":1}',
  metadata: {
    compiler: { version: "0.8.28+commit.7893614a" },
    language: "Solidity",
    output: {
      abi: [
        { inputs: [], stateMutability: "nonpayable", type: "constructor" },
        {
          inputs: [
            { internalType: "address", name: "sender", type: "address" },
            { internalType: "uint256", name: "tokenId", type: "uint256" },
            { internalType: "address", name: "owner", type: "address" },
          ],
          type: "error",
          name: "ERC721IncorrectOwner",
        },
        {
          inputs: [
            { internalType: "address", name: "operator", type: "address" },
            { internalType: "uint256", name: "tokenId", type: "uint256" },
          ],
          type: "error",
          name: "ERC721InsufficientApproval",
        },
        {
          inputs: [
            { internalType: "address", name: "approver", type: "address" },
          ],
          type: "error",
          name: "ERC721InvalidApprover",
        },
        {
          inputs: [
            { internalType: "address", name: "operator", type: "address" },
          ],
          type: "error",
          name: "ERC721InvalidOperator",
        },
        {
          inputs: [{ internalType: "address", name: "owner", type: "address" }],
          type: "error",
          name: "ERC721InvalidOwner",
        },
        {
          inputs: [
            { internalType: "address", name: "receiver", type: "address" },
          ],
          type: "error",
          name: "ERC721InvalidReceiver",
        },
        {
          inputs: [
            { internalType: "address", name: "sender", type: "address" },
          ],
          type: "error",
          name: "ERC721InvalidSender",
        },
        {
          inputs: [
            { internalType: "uint256", name: "tokenId", type: "uint256" },
          ],
          type: "error",
          name: "ERC721NonexistentToken",
        },
        {
          inputs: [{ internalType: "address", name: "owner", type: "address" }],
          type: "error",
          name: "OwnableInvalidOwner",
        },
        {
          inputs: [
            { internalType: "address", name: "account", type: "address" },
          ],
          type: "error",
          name: "OwnableUnauthorizedAccount",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
              indexed: true,
            },
            {
              internalType: "address",
              name: "approved",
              type: "address",
              indexed: true,
            },
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
              indexed: true,
            },
          ],
          type: "event",
          name: "Approval",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
              indexed: true,
            },
            {
              internalType: "address",
              name: "operator",
              type: "address",
              indexed: true,
            },
            {
              internalType: "bool",
              name: "approved",
              type: "bool",
              indexed: false,
            },
          ],
          type: "event",
          name: "ApprovalForAll",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_fromTokenId",
              type: "uint256",
              indexed: false,
            },
            {
              internalType: "uint256",
              name: "_toTokenId",
              type: "uint256",
              indexed: false,
            },
          ],
          type: "event",
          name: "BatchMetadataUpdate",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
              indexed: true,
            },
            {
              internalType: "address",
              name: "creator",
              type: "address",
              indexed: true,
            },
            {
              internalType: "uint256",
              name: "price",
              type: "uint256",
              indexed: false,
            },
            {
              internalType: "uint256",
              name: "discountValue",
              type: "uint256",
              indexed: false,
            },
          ],
          type: "event",
          name: "MarketItemCreated",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_tokenId",
              type: "uint256",
              indexed: false,
            },
          ],
          type: "event",
          name: "MetadataUpdate",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "previousOwner",
              type: "address",
              indexed: true,
            },
            {
              internalType: "address",
              name: "newOwner",
              type: "address",
              indexed: true,
            },
          ],
          type: "event",
          name: "OwnershipTransferred",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address",
              indexed: true,
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
              indexed: true,
            },
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
              indexed: true,
            },
          ],
          type: "event",
          name: "Transfer",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
              indexed: true,
            },
            {
              internalType: "address",
              name: "buyer",
              type: "address",
              indexed: true,
            },
            {
              internalType: "uint256",
              name: "price",
              type: "uint256",
              indexed: false,
            },
          ],
          type: "event",
          name: "VoucherPurchased",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
              indexed: true,
            },
            {
              internalType: "address",
              name: "seller",
              type: "address",
              indexed: true,
            },
            {
              internalType: "uint256",
              name: "newPrice",
              type: "uint256",
              indexed: false,
            },
          ],
          type: "event",
          name: "VoucherReselled",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
              indexed: true,
            },
            {
              internalType: "address",
              name: "user",
              type: "address",
              indexed: true,
            },
            {
              internalType: "uint256",
              name: "discountValue",
              type: "uint256",
              indexed: false,
            },
          ],
          type: "event",
          name: "VoucherUsed",
          anonymous: false,
        },
        {
          inputs: [
            { internalType: "uint256", name: "tokenId", type: "uint256" },
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "applyVoucher",
        },
        {
          inputs: [
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "tokenId", type: "uint256" },
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "approve",
        },
        {
          inputs: [{ internalType: "address", name: "owner", type: "address" }],
          stateMutability: "view",
          type: "function",
          name: "balanceOf",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        },
        {
          inputs: [
            { internalType: "uint256", name: "tokenId", type: "uint256" },
          ],
          stateMutability: "payable",
          type: "function",
          name: "createMarketSale",
        },
        {
          inputs: [
            { internalType: "string", name: "tokenURI", type: "string" },
            { internalType: "uint256", name: "price", type: "uint256" },
            { internalType: "uint256", name: "discountValue", type: "uint256" },
          ],
          stateMutability: "payable",
          type: "function",
          name: "createToken",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        },
        {
          inputs: [],
          stateMutability: "view",
          type: "function",
          name: "fetchMarketItems",
          outputs: [
            {
              internalType: "struct VoucherNFT.MarketItem[]",
              name: "",
              type: "tuple[]",
              components: [
                { internalType: "uint256", name: "tokenId", type: "uint256" },
                {
                  internalType: "address payable",
                  name: "seller",
                  type: "address",
                },
                {
                  internalType: "address payable",
                  name: "owner",
                  type: "address",
                },
                { internalType: "uint256", name: "price", type: "uint256" },
                {
                  internalType: "uint256",
                  name: "discountValue",
                  type: "uint256",
                },
                { internalType: "bool", name: "sold", type: "bool" },
                { internalType: "uint256", name: "createdAt", type: "uint256" },
              ],
            },
          ],
        },
        {
          inputs: [],
          stateMutability: "view",
          type: "function",
          name: "fetchMyNFTs",
          outputs: [
            {
              internalType: "struct VoucherNFT.MarketItem[]",
              name: "",
              type: "tuple[]",
              components: [
                { internalType: "uint256", name: "tokenId", type: "uint256" },
                {
                  internalType: "address payable",
                  name: "seller",
                  type: "address",
                },
                {
                  internalType: "address payable",
                  name: "owner",
                  type: "address",
                },
                { internalType: "uint256", name: "price", type: "uint256" },
                {
                  internalType: "uint256",
                  name: "discountValue",
                  type: "uint256",
                },
                { internalType: "bool", name: "sold", type: "bool" },
                { internalType: "uint256", name: "createdAt", type: "uint256" },
              ],
            },
          ],
        },
        {
          inputs: [
            { internalType: "uint256", name: "tokenId", type: "uint256" },
          ],
          stateMutability: "view",
          type: "function",
          name: "getApproved",
          outputs: [{ internalType: "address", name: "", type: "address" }],
        },
        {
          inputs: [],
          stateMutability: "view",
          type: "function",
          name: "getListingPrice",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        },
        {
          inputs: [
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "address", name: "operator", type: "address" },
          ],
          stateMutability: "view",
          type: "function",
          name: "isApprovedForAll",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
        },
        {
          inputs: [],
          stateMutability: "view",
          type: "function",
          name: "listingPrice",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        },
        {
          inputs: [],
          stateMutability: "view",
          type: "function",
          name: "name",
          outputs: [{ internalType: "string", name: "", type: "string" }],
        },
        {
          inputs: [],
          stateMutability: "view",
          type: "function",
          name: "owner",
          outputs: [{ internalType: "address", name: "", type: "address" }],
        },
        {
          inputs: [
            { internalType: "uint256", name: "tokenId", type: "uint256" },
          ],
          stateMutability: "view",
          type: "function",
          name: "ownerOf",
          outputs: [{ internalType: "address", name: "", type: "address" }],
        },
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "function",
          name: "renounceOwnership",
        },
        {
          inputs: [
            { internalType: "uint256", name: "tokenId", type: "uint256" },
            { internalType: "uint256", name: "price", type: "uint256" },
          ],
          stateMutability: "payable",
          type: "function",
          name: "resellToken",
        },
        {
          inputs: [
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "tokenId", type: "uint256" },
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "safeTransferFrom",
        },
        {
          inputs: [
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "tokenId", type: "uint256" },
            { internalType: "bytes", name: "data", type: "bytes" },
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "safeTransferFrom",
        },
        {
          inputs: [
            { internalType: "address", name: "operator", type: "address" },
            { internalType: "bool", name: "approved", type: "bool" },
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "setApprovalForAll",
        },
        {
          inputs: [
            { internalType: "bytes4", name: "interfaceId", type: "bytes4" },
          ],
          stateMutability: "view",
          type: "function",
          name: "supportsInterface",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
        },
        {
          inputs: [],
          stateMutability: "view",
          type: "function",
          name: "symbol",
          outputs: [{ internalType: "string", name: "", type: "string" }],
        },
        {
          inputs: [
            { internalType: "uint256", name: "tokenId", type: "uint256" },
          ],
          stateMutability: "view",
          type: "function",
          name: "tokenURI",
          outputs: [{ internalType: "string", name: "", type: "string" }],
        },
        {
          inputs: [
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "tokenId", type: "uint256" },
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "transferFrom",
        },
        {
          inputs: [
            { internalType: "address", name: "newOwner", type: "address" },
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "transferOwnership",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_listingPrice", type: "uint256" },
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "updateListingPrice",
        },
      ],
      devdoc: {
        kind: "dev",
        methods: {
          "approve(address,uint256)": { details: "See {IERC721-approve}." },
          "balanceOf(address)": { details: "See {IERC721-balanceOf}." },
          "getApproved(uint256)": { details: "See {IERC721-getApproved}." },
          "isApprovedForAll(address,address)": {
            details: "See {IERC721-isApprovedForAll}.",
          },
          "name()": { details: "See {IERC721Metadata-name}." },
          "owner()": { details: "Returns the address of the current owner." },
          "ownerOf(uint256)": { details: "See {IERC721-ownerOf}." },
          "renounceOwnership()": {
            details:
              "Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner.",
          },
          "safeTransferFrom(address,address,uint256)": {
            details: "See {IERC721-safeTransferFrom}.",
          },
          "safeTransferFrom(address,address,uint256,bytes)": {
            details: "See {IERC721-safeTransferFrom}.",
          },
          "setApprovalForAll(address,bool)": {
            details: "See {IERC721-setApprovalForAll}.",
          },
          "supportsInterface(bytes4)": {
            details: "See {IERC165-supportsInterface}",
          },
          "symbol()": { details: "See {IERC721Metadata-symbol}." },
          "tokenURI(uint256)": { details: "See {IERC721Metadata-tokenURI}." },
          "transferFrom(address,address,uint256)": {
            details: "See {IERC721-transferFrom}.",
          },
          "transferOwnership(address)": {
            details:
              "Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.",
          },
        },
        version: 1,
      },
      userdoc: { kind: "user", methods: {}, version: 1 },
    },
    settings: {
      remappings: [
        "@openzeppelin/=lib/openzeppelin-contracts/",
        "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",
        "forge-std/=lib/forge-std/src/",
        "halmos-cheatcodes/=lib/openzeppelin-contracts/lib/halmos-cheatcodes/src/",
        "openzeppelin-contracts/=lib/openzeppelin-contracts/",
      ],
      optimizer: { enabled: false, runs: 200 },
      metadata: { bytecodeHash: "ipfs" },
      compilationTarget: { "src/VoucherNFT.sol": "VoucherNFT" },
      evmVersion: "cancun",
      libraries: {},
    },
    sources: {
      "lib/openzeppelin-contracts/contracts/access/Ownable.sol": {
        keccak256:
          "0xff6d0bb2e285473e5311d9d3caacb525ae3538a80758c10649a4d61029b017bb",
        urls: [
          "bzz-raw://8ed324d3920bb545059d66ab97d43e43ee85fd3bd52e03e401f020afb0b120f6",
          "dweb:/ipfs/QmfEckWLmZkDDcoWrkEvMWhms66xwTLff9DDhegYpvHo1a",
        ],
        license: "MIT",
      },
      "lib/openzeppelin-contracts/contracts/interfaces/IERC165.sol": {
        keccak256:
          "0xde7e9fd9aee8d4f40772f96bb3b58836cbc6dfc0227014a061947f8821ea9724",
        urls: [
          "bzz-raw://11fea9f8bc98949ac6709f0c1699db7430d2948137aa94d5a9e95a91f61a710a",
          "dweb:/ipfs/QmQdfRXxQjwP6yn3DVo1GHPpriKNcFghSPi94Z1oKEFUNS",
        ],
        license: "MIT",
      },
      "lib/openzeppelin-contracts/contracts/interfaces/IERC4906.sol": {
        keccak256:
          "0x1b8691e244f6e11d987459993671db0af33e6a29f7805eac6a9925cc6b601957",
        urls: [
          "bzz-raw://a9e2a5efc2e14e98f5fe91bbab769199b4987a40dd3b96075b04957fda2ae80f",
          "dweb:/ipfs/QmbAjrSSVBiJ6MbgF7Jkr53m674iGMZ6haWbbRrWDZJraK",
        ],
        license: "MIT",
      },
      "lib/openzeppelin-contracts/contracts/interfaces/IERC721.sol": {
        keccak256:
          "0xc4d7ebf63eb2f6bf3fee1b6c0ee775efa9f31b4843a5511d07eea147e212932d",
        urls: [
          "bzz-raw://01c66a2fad66bc710db7510419a7eee569b40b67cd9f01b70a3fc90d6f76c03b",
          "dweb:/ipfs/QmT1CjJZq4eTNA4nu8E9ZrWfaZu6ReUsDbjcK8DbEFqwx5",
        ],
        license: "MIT",
      },
      "lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol": {
        keccak256:
          "0x880da465c203cec76b10d72dbd87c80f387df4102274f23eea1f9c9b0918792b",
        urls: [
          "bzz-raw://399594cd8bb0143bc9e55e0f1d071d0d8c850a394fb7a319d50edd55d9ed822b",
          "dweb:/ipfs/QmbPZzgtT6LEm9CMqWfagQFwETbV1ztpECBB1DtQHrKiRz",
        ],
        license: "MIT",
      },
      "lib/openzeppelin-contracts/contracts/token/ERC721/ERC721.sol": {
        keccak256:
          "0x39ed367e54765186281efcfe83e47cf0ad62cc879f10e191360712507125f29a",
        urls: [
          "bzz-raw://2c5ae6d85bd48cca8d6d2fcec8c63efd86f56f8a5832577a47e403ce0e65cb09",
          "dweb:/ipfs/QmUtcS8AbRSWhuc61puYet58os8FvSqm329ChoW8wwZXZk",
        ],
        license: "MIT",
      },
      "lib/openzeppelin-contracts/contracts/token/ERC721/IERC721.sol": {
        keccak256:
          "0x5dc63d1c6a12fe1b17793e1745877b2fcbe1964c3edfd0a482fac21ca8f18261",
        urls: [
          "bzz-raw://6b7f97c5960a50fd1822cb298551ffc908e37b7893a68d6d08bce18a11cb0f11",
          "dweb:/ipfs/QmQQvxBytoY1eBt3pRQDmvH2hZ2yjhs12YqVfzGm7KSURq",
        ],
        license: "MIT",
      },
      "lib/openzeppelin-contracts/contracts/token/ERC721/IERC721Receiver.sol": {
        keccak256:
          "0xb5afb8e8eebc4d1c6404df2f5e1e6d2c3d24fd01e5dfc855314951ecfaae462d",
        urls: [
          "bzz-raw://78586466c424f076c6a2a551d848cfbe3f7c49e723830807598484a1047b3b34",
          "dweb:/ipfs/Qmb717ovcFxm7qgNKEShiV6M9SPR3v1qnNpAGH84D6w29p",
        ],
        license: "MIT",
      },
      "lib/openzeppelin-contracts/contracts/token/ERC721/extensions/ERC721URIStorage.sol":
        {
          keccak256:
            "0x2b27b58570ff2456c7e65022a356c7e4f205bfabf95d0e870855a86587bb1356",
          urls: [
            "bzz-raw://d51268bd4266abe09ec07cac04b84c63ed97d2f847fd821e681428b1df7991b1",
            "dweb:/ipfs/QmQBHj8tsrtiXBdegQZeqcxmBEQd2PMzPSKQ5jUELedEHb",
          ],
          license: "MIT",
        },
      "lib/openzeppelin-contracts/contracts/token/ERC721/extensions/IERC721Metadata.sol":
        {
          keccak256:
            "0x37d1aaaa5a2908a09e9dcf56a26ddf762ecf295afb5964695937344fc6802ce1",
          urls: [
            "bzz-raw://ed0bfc1b92153c5000e50f4021367b931bbe96372ac6facec3c4961b72053d02",
            "dweb:/ipfs/Qmbwp8VDerjS5SV1quwHH1oMXxPQ93fzfLVqJ2RCqbowGE",
          ],
          license: "MIT",
        },
      "lib/openzeppelin-contracts/contracts/token/ERC721/utils/ERC721Utils.sol":
        {
          keccak256:
            "0xddab643169f47a2c5291afafcbfdca045d9e6835553307d090bc048b6dabd0ac",
          urls: [
            "bzz-raw://d0ffbacfee42977167b3c75bd4787f8b72a7ab1176abd544f3dff662c6528e24",
            "dweb:/ipfs/QmUprM1cWCyaQ3LDjHA2DhwiPs3wekQ6MWXHFZdMMxpcyX",
          ],
          license: "MIT",
        },
      "lib/openzeppelin-contracts/contracts/utils/Context.sol": {
        keccak256:
          "0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2",
        urls: [
          "bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12",
          "dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF",
        ],
        license: "MIT",
      },
      "lib/openzeppelin-contracts/contracts/utils/Panic.sol": {
        keccak256:
          "0xf7fe324703a64fc51702311dc51562d5cb1497734f074e4f483bfb6717572d7a",
        urls: [
          "bzz-raw://c6a5ff4f9fd8649b7ee20800b7fa387d3465bd77cf20c2d1068cd5c98e1ed57a",
          "dweb:/ipfs/QmVSaVJf9FXFhdYEYeCEfjMVHrxDh5qL4CGkxdMWpQCrqG",
        ],
        license: "MIT",
      },
      "lib/openzeppelin-contracts/contracts/utils/Strings.sol": {
        keccak256:
          "0x81c274a60a7ae232ae3dc9ff3a4011b4849a853c13b0832cd3351bb1bb2f0dae",
        urls: [
          "bzz-raw://9da0c20dc74358a2a76330818f3bac9d1e2ce3371aec847b9cbf5d147fbae4f6",
          "dweb:/ipfs/QmeczhmnFv1hbXKGLwbYXY6Rrytc9a5A2YaRi5QMMgjPnb",
        ],
        license: "MIT",
      },
      "lib/openzeppelin-contracts/contracts/utils/introspection/ERC165.sol": {
        keccak256:
          "0xddce8e17e3d3f9ed818b4f4c4478a8262aab8b11ed322f1bf5ed705bb4bd97fa",
        urls: [
          "bzz-raw://8084aa71a4cc7d2980972412a88fe4f114869faea3fefa5436431644eb5c0287",
          "dweb:/ipfs/Qmbqfs5dRdPvHVKY8kTaeyc65NdqXRQwRK7h9s5UJEhD1p",
        ],
        license: "MIT",
      },
      "lib/openzeppelin-contracts/contracts/utils/introspection/IERC165.sol": {
        keccak256:
          "0x79796192ec90263f21b464d5bc90b777a525971d3de8232be80d9c4f9fb353b8",
        urls: [
          "bzz-raw://f6fda447a62815e8064f47eff0dd1cf58d9207ad69b5d32280f8d7ed1d1e4621",
          "dweb:/ipfs/QmfDRc7pxfaXB2Dh9np5Uf29Na3pQ7tafRS684wd3GLjVL",
        ],
        license: "MIT",
      },
      "lib/openzeppelin-contracts/contracts/utils/math/Math.sol": {
        keccak256:
          "0x1225214420c83ebcca88f2ae2b50f053aaa7df7bd684c3e878d334627f2edfc6",
        urls: [
          "bzz-raw://6c5fab4970634f9ab9a620983dc1c8a30153981a0b1a521666e269d0a11399d3",
          "dweb:/ipfs/QmVRnBC575MESGkEHndjujtR7qub2FzU9RWy9eKLp4hPZB",
        ],
        license: "MIT",
      },
      "lib/openzeppelin-contracts/contracts/utils/math/SafeCast.sol": {
        keccak256:
          "0x195533c86d0ef72bcc06456a4f66a9b941f38eb403739b00f21fd7c1abd1ae54",
        urls: [
          "bzz-raw://b1d578337048cad08c1c03041cca5978eff5428aa130c781b271ad9e5566e1f8",
          "dweb:/ipfs/QmPFKL2r9CBsMwmUqqdcFPfHZB2qcs9g1HDrPxzWSxomvy",
        ],
        license: "MIT",
      },
      "lib/openzeppelin-contracts/contracts/utils/math/SignedMath.sol": {
        keccak256:
          "0xb1970fac7b64e6c09611e6691791e848d5e3fe410fa5899e7df2e0afd77a99e3",
        urls: [
          "bzz-raw://db5fbb3dddd8b7047465b62575d96231ba8a2774d37fb4737fbf23340fabbb03",
          "dweb:/ipfs/QmVUSvooZKEdEdap619tcJjTLcAuH6QBdZqAzWwnAXZAWJ",
        ],
        license: "MIT",
      },
      "src/VoucherNFT.sol": {
        keccak256:
          "0x095a05fbb7f9bb01e21456b3d3bb5f6ceffb78da5ca520805366b0f31d6bc42f",
        urls: [
          "bzz-raw://f3859cf8ad29c794eb1a853bc0fdd020869a0a2f117c0d9404cff7f44f9b560e",
          "dweb:/ipfs/QmXxdz16S6iP3Eki2zyfEWDyVqVnFaYDnpNUzWQ4C7Ljig",
        ],
        license: "MIT",
      },
    },
    version: 1,
  },
  id: 35,
};
