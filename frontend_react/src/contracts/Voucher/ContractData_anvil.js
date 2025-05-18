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
      name: "exists",
      inputs: [{ name: "", type: "uint256", internalType: "uint256" }],
      outputs: [{ name: "", type: "bool", internalType: "bool" }],
      stateMutability: "view",
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
      name: "ListingPriceUpdated",
      inputs: [
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
      name: "VoucherCreated",
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
          name: "tokenURI",
          type: "string",
          indexed: false,
          internalType: "string",
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
        {
          name: "timestamp",
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
          name: "price",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
        {
          name: "timestamp",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "VoucherSold",
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
          name: "seller",
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
          name: "timestamp",
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
        {
          name: "timestamp",
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
      "0x60806040525f6008555f60095565e35fa931a000600a55348015610021575f5ffd5b50336040518060400160405280600a81526020017f566f75636865724e4654000000000000000000000000000000000000000000008152506040518060400160405280600481526020017f564e465400000000000000000000000000000000000000000000000000000000815250815f908161009d9190610435565b5080600190816100ad9190610435565b5050505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610120575f6040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016101179190610543565b60405180910390fd5b61012f8161013560201b60201c565b5061055c565b5f60075f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160075f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f81519050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f600282049050600182168061027357607f821691505b6020821081036102865761028561022f565b5b50919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f600883026102e87fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826102ad565b6102f286836102ad565b95508019841693508086168417925050509392505050565b5f819050919050565b5f819050919050565b5f61033661033161032c8461030a565b610313565b61030a565b9050919050565b5f819050919050565b61034f8361031c565b61036361035b8261033d565b8484546102b9565b825550505050565b5f5f905090565b61037a61036b565b610385818484610346565b505050565b5b818110156103a85761039d5f82610372565b60018101905061038b565b5050565b601f8211156103ed576103be8161028c565b6103c78461029e565b810160208510156103d6578190505b6103ea6103e28561029e565b83018261038a565b50505b505050565b5f82821c905092915050565b5f61040d5f19846008026103f2565b1980831691505092915050565b5f61042583836103fe565b9150826002028217905092915050565b61043e826101f8565b67ffffffffffffffff81111561045757610456610202565b5b610461825461025c565b61046c8282856103ac565b5f60209050601f83116001811461049d575f841561048b578287015190505b610495858261041a565b8655506104fc565b601f1984166104ab8661028c565b5f5b828110156104d2578489015182556001820191506020850194506020810190506104ad565b868310156104ef57848901516104eb601f8916826103fe565b8355505b6001600288020188555050505b505050505050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f61052d82610504565b9050919050565b61053d81610523565b82525050565b5f6020820190506105565f830184610534565b92915050565b613f63806105695f395ff3fe608060405260043610610180575f3560e01c80638da5cb5b116100d0578063bec2a7c511610089578063e219fc7511610063578063e219fc7514610564578063e985e9c514610580578063f2fde38b146105bc578063f810e527146105e457610180565b8063bec2a7c5146104ce578063c78f19f9146104fe578063c87b56dd1461052857610180565b80638da5cb5b146103e657806395d89b4114610410578063a22cb4651461043a578063ae677aa314610462578063b88d4fde1461048a578063be9af536146104b257610180565b8063202e37401161013d5780634f558e79116101175780634f558e791461031c5780636352211e1461035857806370a0823114610394578063715018a6146103d057610180565b8063202e3740146102a257806323b872dd146102cc57806342842e0e146102f457610180565b806301ffc9a71461018457806306fdde03146101c0578063081812fc146101ea578063095ea7b3146102265780630f08efe01461024e57806312e8558514610278575b5f5ffd5b34801561018f575f5ffd5b506101aa60048036038101906101a59190612de7565b61060c565b6040516101b79190612e2c565b60405180910390f35b3480156101cb575f5ffd5b506101d461066c565b6040516101e19190612eb5565b60405180910390f35b3480156101f5575f5ffd5b50610210600480360381019061020b9190612f08565b6106fb565b60405161021d9190612f72565b60405180910390f35b348015610231575f5ffd5b5061024c60048036038101906102479190612fb5565b610716565b005b348015610259575f5ffd5b5061026261072c565b60405161026f9190613165565b60405180910390f35b348015610283575f5ffd5b5061028c6109b7565b6040516102999190613194565b60405180910390f35b3480156102ad575f5ffd5b506102b66109c0565b6040516102c39190613165565b60405180910390f35b3480156102d7575f5ffd5b506102f260048036038101906102ed91906131ad565b610c95565b005b3480156102ff575f5ffd5b5061031a600480360381019061031591906131ad565b610d94565b005b348015610327575f5ffd5b50610342600480360381019061033d9190612f08565b610db3565b60405161034f9190612e2c565b60405180910390f35b348015610363575f5ffd5b5061037e60048036038101906103799190612f08565b610dd0565b60405161038b9190612f72565b60405180910390f35b34801561039f575f5ffd5b506103ba60048036038101906103b591906131fd565b610de1565b6040516103c79190613194565b60405180910390f35b3480156103db575f5ffd5b506103e4610e97565b005b3480156103f1575f5ffd5b506103fa610eaa565b6040516104079190612f72565b60405180910390f35b34801561041b575f5ffd5b50610424610ed2565b6040516104319190612eb5565b60405180910390f35b348015610445575f5ffd5b50610460600480360381019061045b9190613252565b610f62565b005b34801561046d575f5ffd5b5061048860048036038101906104839190612f08565b610f78565b005b348015610495575f5ffd5b506104b060048036038101906104ab91906133bc565b610f8a565b005b6104cc60048036038101906104c79190612f08565b610faf565b005b6104e860048036038101906104e391906134da565b6112a5565b6040516104f59190613194565b60405180910390f35b348015610509575f5ffd5b50610512611390565b60405161051f9190613194565b60405180910390f35b348015610533575f5ffd5b5061054e60048036038101906105499190612f08565b611396565b60405161055b9190612eb5565b60405180910390f35b61057e60048036038101906105799190613546565b6114a1565b005b34801561058b575f5ffd5b506105a660048036038101906105a19190613584565b611691565b6040516105b39190612e2c565b60405180910390f35b3480156105c7575f5ffd5b506105e260048036038101906105dd91906131fd565b61171f565b005b3480156105ef575f5ffd5b5061060a60048036038101906106059190612f08565b6117a3565b005b5f634906490660e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610665575061066482611987565b5b9050919050565b60605f805461067a906135ef565b80601f01602080910402602001604051908101604052809291908181526020018280546106a6906135ef565b80156106f15780601f106106c8576101008083540402835291602001916106f1565b820191905f5260205f20905b8154815290600101906020018083116106d457829003601f168201915b5050505050905090565b5f61070582611a68565b5061070f82611aee565b9050919050565b6107288282610723611b27565b611b2e565b5050565b60605f60085490505f600954600854610745919061364c565b90505f5f90505f8267ffffffffffffffff81111561076657610765613298565b5b60405190808252806020026020018201604052801561079f57816020015b61078c612d1d565b8152602001906001900390816107845790505b5090505f5f90505b848110156109ac57600c5f6001836107bf919061367f565b81526020019081526020015f205f9054906101000a900460ff16801561084f57503073ffffffffffffffffffffffffffffffffffffffff16600b5f600184610807919061367f565b81526020019081526020015f206002015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16145b1561099f575f600182610862919061367f565b90505f600b5f8381526020019081526020015f209050806040518060e00160405290815f8201548152602001600182015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016003820154815260200160048201548152602001600582015f9054906101000a900460ff16151515158152602001600682015481525050848681518110610982576109816136b2565b5b602002602001018190525060018561099a919061367f565b945050505b80806001019150506107a7565b508094505050505090565b5f600a54905090565b60605f60085490505f5f90505f5f90505b82811015610a68575f6001826109e7919061367f565b9050600c5f8281526020019081526020015f205f9054906101000a900460ff168015610a4657503373ffffffffffffffffffffffffffffffffffffffff16610a2e82610dd0565b73ffffffffffffffffffffffffffffffffffffffff16145b15610a5a578280610a56906136df565b9350505b5080806001019150506109d1565b505f8167ffffffffffffffff811115610a8457610a83613298565b5b604051908082528060200260200182016040528015610abd57816020015b610aaa612d1d565b815260200190600190039081610aa25790505b5090505f5f90505f5f90505b84811015610c8a575f600182610adf919061367f565b9050600c5f8281526020019081526020015f205f9054906101000a900460ff168015610b3e57503373ffffffffffffffffffffffffffffffffffffffff16610b2682610dd0565b73ffffffffffffffffffffffffffffffffffffffff16145b15610c7c575f600b5f8381526020019081526020015f209050806040518060e00160405290815f8201548152602001600182015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016003820154815260200160048201548152602001600582015f9054906101000a900460ff16151515158152602001600682015481525050858581518110610c6157610c606136b2565b5b60200260200101819052508380610c77906136df565b945050505b508080600101915050610ac9565b508194505050505090565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610d05575f6040517f64a0ae92000000000000000000000000000000000000000000000000000000008152600401610cfc9190612f72565b60405180910390fd5b5f610d188383610d13611b27565b611b40565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610d8e578382826040517f64283d7b000000000000000000000000000000000000000000000000000000008152600401610d8593929190613726565b60405180910390fd5b50505050565b610dae83838360405180602001604052805f815250610f8a565b505050565b600c602052805f5260405f205f915054906101000a900460ff1681565b5f610dda82611a68565b9050919050565b5f5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610e52575f6040517f89c62b64000000000000000000000000000000000000000000000000000000008152600401610e499190612f72565b60405180910390fd5b60035f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b610e9f611d4b565b610ea85f611dd2565b565b5f60075f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606060018054610ee1906135ef565b80601f0160208091040260200160405190810160405280929190818152602001828054610f0d906135ef565b8015610f585780601f10610f2f57610100808354040283529160200191610f58565b820191905f5260205f20905b815481529060010190602001808311610f3b57829003601f168201915b5050505050905090565b610f74610f6d611b27565b8383611e95565b5050565b610f80611d4b565b80600a8190555050565b610f95848484610c95565b610fa9610fa0611b27565b85858585611ffe565b50505050565b5f600b5f8381526020019081526020015f20905080600301543414611009576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611000906137a5565b60405180910390fd5b3073ffffffffffffffffffffffffffffffffffffffff16816002015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461109a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110919061380d565b60405180910390fd5b33816002015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001816005015f6101000a81548160ff021916908315150217905550600160095f82825461110a919061367f565b9250508190555061111c3033846121aa565b611124610eaa565b73ffffffffffffffffffffffffffffffffffffffff166108fc600a5490811502906040515f60405180830381858888f19350505050158015611168573d5f5f3e3d5ffd5b50806001015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc3490811502906040515f60405180830381858888f193505050501580156111cf573d5f5f3e3d5ffd5b505f816001015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550806001015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16837ffffde07b8a4fea5008bae1d8dc329a7cd74e45eb052e568a845fa2c01d56245184600301544260405161129992919061382b565b60405180910390a45050565b5f6112ae611d4b565b600a5434146112f2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112e99061389c565b60405180910390fd5b600160085f828254611304919061367f565b925050819055505f600854905061131b3382612312565b6113258186612405565b61133081858561245f565b3373ffffffffffffffffffffffffffffffffffffffff16817f656ec33f86aaf392937db290d141c2888c28cd8c852c0191ca7950dd2954dc458787874260405161137d94939291906138ba565b60405180910390a3809150509392505050565b600a5481565b60606113a182611a68565b505f60065f8481526020019081526020015f2080546113bf906135ef565b80601f01602080910402602001604051908101604052809291908181526020018280546113eb906135ef565b80156114365780601f1061140d57610100808354040283529160200191611436565b820191905f5260205f20905b81548152906001019060200180831161141957829003601f168201915b505050505090505f611446612620565b90505f81510361145a57819250505061149c565b5f8251111561148e57808260405160200161147692919061393e565b6040516020818303038152906040529250505061149c565b61149784612636565b925050505b919050565b3373ffffffffffffffffffffffffffffffffffffffff166114c183610dd0565b73ffffffffffffffffffffffffffffffffffffffff1614611517576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161150e906139ab565b60405180910390fd5b600a54341461155b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161155290613a13565b60405180910390fd5b5f600b5f8481526020019081526020015f2090505f816005015f6101000a81548160ff02191690831515021790555081816003018190555033816001015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555030816002015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600160095f828254611629919061364c565b9250508190555061163b3330856121aa565b3373ffffffffffffffffffffffffffffffffffffffff16837f5e85fbea5bdae282ff2f91c6352d4f9ea53d6467e0705c096fca509dcd790b3b844260405161168492919061382b565b60405180910390a3505050565b5f60055f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff16905092915050565b611727611d4b565b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603611797575f6040517f1e4fbdf700000000000000000000000000000000000000000000000000000000815260040161178e9190612f72565b60405180910390fd5b6117a081611dd2565b50565b3373ffffffffffffffffffffffffffffffffffffffff166117c382610dd0565b73ffffffffffffffffffffffffffffffffffffffff1614611819576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161181090613a7b565b60405180910390fd5b5f600b5f8381526020019081526020015f206004015490505f8111611873576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161186a90613b09565b60405180910390fd5b61187c8261269c565b3373ffffffffffffffffffffffffffffffffffffffff16827fbd639147b52bb6fe477f5b7a13c54ebbb1f2124d4d118e570261352a9948fb0183426040516118c592919061382b565b60405180910390a3600b5f8381526020019081526020015f205f5f82015f9055600182015f6101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055600282015f6101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055600382015f9055600482015f9055600582015f6101000a81549060ff0219169055600682015f905550505f600c5f8481526020019081526020015f205f6101000a81548160ff0219169083151502179055505050565b5f7f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480611a5157507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80611a615750611a608261271e565b5b9050919050565b5f5f611a7383612787565b90505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603611ae557826040517f7e273289000000000000000000000000000000000000000000000000000000008152600401611adc9190613194565b60405180910390fd5b80915050919050565b5f60045f8381526020019081526020015f205f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b5f33905090565b611b3b83838360016127c0565b505050565b5f5f611b4b84612787565b90505f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614611b8c57611b8b81848661297f565b5b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614611c1757611bcb5f855f5f6127c0565b600160035f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825403925050819055505b5f73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614611c9657600160035f8773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825401925050819055505b8460025f8681526020019081526020015f205f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4809150509392505050565b611d53611b27565b73ffffffffffffffffffffffffffffffffffffffff16611d71610eaa565b73ffffffffffffffffffffffffffffffffffffffff1614611dd057611d94611b27565b6040517f118cdaa7000000000000000000000000000000000000000000000000000000008152600401611dc79190612f72565b60405180910390fd5b565b5f60075f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160075f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611f0557816040517f5b08ba18000000000000000000000000000000000000000000000000000000008152600401611efc9190612f72565b60405180910390fd5b8060055f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051611ff19190612e2c565b60405180910390a3505050565b5f8373ffffffffffffffffffffffffffffffffffffffff163b11156121a3578273ffffffffffffffffffffffffffffffffffffffff1663150b7a02868685856040518563ffffffff1660e01b815260040161205c9493929190613b79565b6020604051808303815f875af192505050801561209757506040513d601f19601f820116820180604052508101906120949190613bd7565b60015b612118573d805f81146120c5576040519150601f19603f3d011682016040523d82523d5f602084013e6120ca565b606091505b505f81510361211057836040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016121079190612f72565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916146121a157836040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016121989190612f72565b60405180910390fd5b505b5050505050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361221a575f6040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016122119190612f72565b60405180910390fd5b5f61222683835f611b40565b90505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361229857816040517f7e27328900000000000000000000000000000000000000000000000000000000815260040161228f9190613194565b60405180910390fd5b8373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461230c578382826040517f64283d7b00000000000000000000000000000000000000000000000000000000815260040161230393929190613726565b60405180910390fd5b50505050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603612382575f6040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016123799190612f72565b60405180910390fd5b5f61238e83835f611b40565b90505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614612400575f6040517f73c6ac6e0000000000000000000000000000000000000000000000000000000081526004016123f79190612f72565b60405180910390fd5b505050565b8060065f8481526020019081526020015f2090816124239190613da2565b507ff8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce7826040516124539190613194565b60405180910390a15050565b5f82116124a1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161249890613ebb565b60405180910390fd5b6040518060e001604052808481526020013373ffffffffffffffffffffffffffffffffffffffff1681526020013073ffffffffffffffffffffffffffffffffffffffff1681526020018381526020018281526020015f1515815260200142815250600b5f8581526020019081526020015f205f820151815f01556020820151816001015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040820151816002015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550606082015181600301556080820151816004015560a0820151816005015f6101000a81548160ff02191690831515021790555060c082015181600601559050506001600c5f8581526020019081526020015f205f6101000a81548160ff02191690831515021790555061261b3330856121aa565b505050565b606060405180602001604052805f815250905090565b606061264182611a68565b505f61264b612620565b90505f8151116126695760405180602001604052805f815250612694565b8061267384612a42565b60405160200161268492919061393e565b6040516020818303038152906040525b915050919050565b5f6126a85f835f611b40565b90505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361271a57816040517f7e2732890000000000000000000000000000000000000000000000000000000081526004016127119190613194565b60405180910390fd5b5050565b5f7f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b5f60025f8381526020019081526020015f205f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b80806127f857505f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614155b1561292a575f61280784611a68565b90505f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415801561287157508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b801561288457506128828184611691565b155b156128c657826040517fa9fbf51f0000000000000000000000000000000000000000000000000000000081526004016128bd9190612f72565b60405180910390fd5b811561292857838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b8360045f8581526020019081526020015f205f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b61298a838383612b0c565b612a3d575f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036129fe57806040517f7e2732890000000000000000000000000000000000000000000000000000000081526004016129f59190613194565b60405180910390fd5b81816040517f177e802f000000000000000000000000000000000000000000000000000000008152600401612a34929190613ed9565b60405180910390fd5b505050565b60605f6001612a5084612bcc565b0190505f8167ffffffffffffffff811115612a6e57612a6d613298565b5b6040519080825280601f01601f191660200182016040528015612aa05781602001600182028036833780820191505090505b5090505f82602001820190505b600115612b01578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a8581612af657612af5613f00565b5b0494505f8503612aad575b819350505050919050565b5f5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614158015612bc357508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480612b845750612b838484611691565b5b80612bc257508273ffffffffffffffffffffffffffffffffffffffff16612baa83611aee565b73ffffffffffffffffffffffffffffffffffffffff16145b5b90509392505050565b5f5f5f90507a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310612c28577a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008381612c1e57612c1d613f00565b5b0492506040810190505b6d04ee2d6d415b85acef81000000008310612c65576d04ee2d6d415b85acef81000000008381612c5b57612c5a613f00565b5b0492506020810190505b662386f26fc100008310612c9457662386f26fc100008381612c8a57612c89613f00565b5b0492506010810190505b6305f5e1008310612cbd576305f5e1008381612cb357612cb2613f00565b5b0492506008810190505b6127108310612ce2576127108381612cd857612cd7613f00565b5b0492506004810190505b60648310612d055760648381612cfb57612cfa613f00565b5b0492506002810190505b600a8310612d14576001810190505b80915050919050565b6040518060e001604052805f81526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f81526020015f81526020015f151581526020015f81525090565b5f604051905090565b5f5ffd5b5f5ffd5b5f7fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b612dc681612d92565b8114612dd0575f5ffd5b50565b5f81359050612de181612dbd565b92915050565b5f60208284031215612dfc57612dfb612d8a565b5b5f612e0984828501612dd3565b91505092915050565b5f8115159050919050565b612e2681612e12565b82525050565b5f602082019050612e3f5f830184612e1d565b92915050565b5f81519050919050565b5f82825260208201905092915050565b8281835e5f83830152505050565b5f601f19601f8301169050919050565b5f612e8782612e45565b612e918185612e4f565b9350612ea1818560208601612e5f565b612eaa81612e6d565b840191505092915050565b5f6020820190508181035f830152612ecd8184612e7d565b905092915050565b5f819050919050565b612ee781612ed5565b8114612ef1575f5ffd5b50565b5f81359050612f0281612ede565b92915050565b5f60208284031215612f1d57612f1c612d8a565b5b5f612f2a84828501612ef4565b91505092915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f612f5c82612f33565b9050919050565b612f6c81612f52565b82525050565b5f602082019050612f855f830184612f63565b92915050565b612f9481612f52565b8114612f9e575f5ffd5b50565b5f81359050612faf81612f8b565b92915050565b5f5f60408385031215612fcb57612fca612d8a565b5b5f612fd885828601612fa1565b9250506020612fe985828601612ef4565b9150509250929050565b5f81519050919050565b5f82825260208201905092915050565b5f819050602082019050919050565b61302581612ed5565b82525050565b5f61303582612f33565b9050919050565b6130458161302b565b82525050565b61305481612e12565b82525050565b60e082015f82015161306e5f85018261301c565b506020820151613081602085018261303c565b506040820151613094604085018261303c565b5060608201516130a7606085018261301c565b5060808201516130ba608085018261301c565b5060a08201516130cd60a085018261304b565b5060c08201516130e060c085018261301c565b50505050565b5f6130f1838361305a565b60e08301905092915050565b5f602082019050919050565b5f61311382612ff3565b61311d8185612ffd565b93506131288361300d565b805f5b8381101561315857815161313f88826130e6565b975061314a836130fd565b92505060018101905061312b565b5085935050505092915050565b5f6020820190508181035f83015261317d8184613109565b905092915050565b61318e81612ed5565b82525050565b5f6020820190506131a75f830184613185565b92915050565b5f5f5f606084860312156131c4576131c3612d8a565b5b5f6131d186828701612fa1565b93505060206131e286828701612fa1565b92505060406131f386828701612ef4565b9150509250925092565b5f6020828403121561321257613211612d8a565b5b5f61321f84828501612fa1565b91505092915050565b61323181612e12565b811461323b575f5ffd5b50565b5f8135905061324c81613228565b92915050565b5f5f6040838503121561326857613267612d8a565b5b5f61327585828601612fa1565b92505060206132868582860161323e565b9150509250929050565b5f5ffd5b5f5ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b6132ce82612e6d565b810181811067ffffffffffffffff821117156132ed576132ec613298565b5b80604052505050565b5f6132ff612d81565b905061330b82826132c5565b919050565b5f67ffffffffffffffff82111561332a57613329613298565b5b61333382612e6d565b9050602081019050919050565b828183375f83830152505050565b5f61336061335b84613310565b6132f6565b90508281526020810184848401111561337c5761337b613294565b5b613387848285613340565b509392505050565b5f82601f8301126133a3576133a2613290565b5b81356133b384826020860161334e565b91505092915050565b5f5f5f5f608085870312156133d4576133d3612d8a565b5b5f6133e187828801612fa1565b94505060206133f287828801612fa1565b935050604061340387828801612ef4565b925050606085013567ffffffffffffffff81111561342457613423612d8e565b5b6134308782880161338f565b91505092959194509250565b5f67ffffffffffffffff82111561345657613455613298565b5b61345f82612e6d565b9050602081019050919050565b5f61347e6134798461343c565b6132f6565b90508281526020810184848401111561349a57613499613294565b5b6134a5848285613340565b509392505050565b5f82601f8301126134c1576134c0613290565b5b81356134d184826020860161346c565b91505092915050565b5f5f5f606084860312156134f1576134f0612d8a565b5b5f84013567ffffffffffffffff81111561350e5761350d612d8e565b5b61351a868287016134ad565b935050602061352b86828701612ef4565b925050604061353c86828701612ef4565b9150509250925092565b5f5f6040838503121561355c5761355b612d8a565b5b5f61356985828601612ef4565b925050602061357a85828601612ef4565b9150509250929050565b5f5f6040838503121561359a57613599612d8a565b5b5f6135a785828601612fa1565b92505060206135b885828601612fa1565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f600282049050600182168061360657607f821691505b602082108103613619576136186135c2565b5b50919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f61365682612ed5565b915061366183612ed5565b92508282039050818111156136795761367861361f565b5b92915050565b5f61368982612ed5565b915061369483612ed5565b92508282019050808211156136ac576136ab61361f565b5b92915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f6136e982612ed5565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361371b5761371a61361f565b5b600182019050919050565b5f6060820190506137395f830186612f63565b6137466020830185613185565b6137536040830184612f63565b949350505050565b7f5375626d69742066756c6c2061736b696e6720707269636500000000000000005f82015250565b5f61378f601883612e4f565b915061379a8261375b565b602082019050919050565b5f6020820190508181035f8301526137bc81613783565b9050919050565b7f4974656d206e6f7420666f722073616c650000000000000000000000000000005f82015250565b5f6137f7601183612e4f565b9150613802826137c3565b602082019050919050565b5f6020820190508181035f830152613824816137eb565b9050919050565b5f60408201905061383e5f830185613185565b61384b6020830184613185565b9392505050565b7f50617920746865206c697374696e6720707269636500000000000000000000005f82015250565b5f613886601583612e4f565b915061389182613852565b602082019050919050565b5f6020820190508181035f8301526138b38161387a565b9050919050565b5f6080820190508181035f8301526138d28187612e7d565b90506138e16020830186613185565b6138ee6040830185613185565b6138fb6060830184613185565b95945050505050565b5f81905092915050565b5f61391882612e45565b6139228185613904565b9350613932818560208601612e5f565b80840191505092915050565b5f613949828561390e565b9150613955828461390e565b91508190509392505050565b7f596f75206d757374206f776e2074686973204e465400000000000000000000005f82015250565b5f613995601583612e4f565b91506139a082613961565b602082019050919050565b5f6020820190508181035f8301526139c281613989565b9050919050565b7f50617920746865206c697374696e6720666565000000000000000000000000005f82015250565b5f6139fd601383612e4f565b9150613a08826139c9565b602082019050919050565b5f6020820190508181035f830152613a2a816139f1565b9050919050565b7f596f7520646f206e6f74206f776e207468697320766f756368657200000000005f82015250565b5f613a65601b83612e4f565b9150613a7082613a31565b602082019050919050565b5f6020820190508181035f830152613a9281613a59565b9050919050565b7f5468697320766f756368657220686173206e6f20646973636f756e742076616c5f8201527f7565000000000000000000000000000000000000000000000000000000000000602082015250565b5f613af3602283612e4f565b9150613afe82613a99565b604082019050919050565b5f6020820190508181035f830152613b2081613ae7565b9050919050565b5f81519050919050565b5f82825260208201905092915050565b5f613b4b82613b27565b613b558185613b31565b9350613b65818560208601612e5f565b613b6e81612e6d565b840191505092915050565b5f608082019050613b8c5f830187612f63565b613b996020830186612f63565b613ba66040830185613185565b8181036060830152613bb88184613b41565b905095945050505050565b5f81519050613bd181612dbd565b92915050565b5f60208284031215613bec57613beb612d8a565b5b5f613bf984828501613bc3565b91505092915050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f60088302613c5e7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82613c23565b613c688683613c23565b95508019841693508086168417925050509392505050565b5f819050919050565b5f613ca3613c9e613c9984612ed5565b613c80565b612ed5565b9050919050565b5f819050919050565b613cbc83613c89565b613cd0613cc882613caa565b848454613c2f565b825550505050565b5f5f905090565b613ce7613cd8565b613cf2818484613cb3565b505050565b5b81811015613d1557613d0a5f82613cdf565b600181019050613cf8565b5050565b601f821115613d5a57613d2b81613c02565b613d3484613c14565b81016020851015613d43578190505b613d57613d4f85613c14565b830182613cf7565b50505b505050565b5f82821c905092915050565b5f613d7a5f1984600802613d5f565b1980831691505092915050565b5f613d928383613d6b565b9150826002028217905092915050565b613dab82612e45565b67ffffffffffffffff811115613dc457613dc3613298565b5b613dce82546135ef565b613dd9828285613d19565b5f60209050601f831160018114613e0a575f8415613df8578287015190505b613e028582613d87565b865550613e69565b601f198416613e1886613c02565b5f5b82811015613e3f57848901518255600182019150602085019450602081019050613e1a565b86831015613e5c5784890151613e58601f891682613d6b565b8355505b6001600288020188555050505b505050505050565b7f5072696365206d757374206265203e20300000000000000000000000000000005f82015250565b5f613ea5601183612e4f565b9150613eb082613e71565b602082019050919050565b5f6020820190508181035f830152613ed281613e99565b9050919050565b5f604082019050613eec5f830185612f63565b613ef96020830184613185565b9392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffdfea2646970667358221220978a80b7c10ea51d5b36d963ee2fef72e146c3b0020557f34094d8ef8129c41964736f6c634300081c0033",
    sourceMap:
      "190:6277:36:-:0;;;273:1;245:29;;309:1;280:30;;347:13;317:43;;1435:65;;;;;;;;;;1486:10;1380:113:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1454:5;1446;:13;;;;;;:::i;:::-;;1479:7;1469;:17;;;;;;:::i;:::-;;1380:113;;1297:1:15;1273:26;;:12;:26;;;1269:95;;1350:1;1322:31;;;;;;;;;;;:::i;:::-;;;;;;;;1269:95;1373:32;1392:12;1373:18;;;:32;;:::i;:::-;1225:187;190:6277:36;;2912:187:15;2985:16;3004:6;;;;;;;;;;;2985:25;;3029:8;3020:6;;:17;;;;;;;;;;;;;;;;;;3083:8;3052:40;;3073:8;3052:40;;;;;;;;;;;;2975:124;2912:187;:::o;7:99:37:-;59:6;93:5;87:12;77:22;;7:99;;;:::o;112:180::-;160:77;157:1;150:88;257:4;254:1;247:15;281:4;278:1;271:15;298:180;346:77;343:1;336:88;443:4;440:1;433:15;467:4;464:1;457:15;484:320;528:6;565:1;559:4;555:12;545:22;;612:1;606:4;602:12;633:18;623:81;;689:4;681:6;677:17;667:27;;623:81;751:2;743:6;740:14;720:18;717:38;714:84;;770:18;;:::i;:::-;714:84;535:269;484:320;;;:::o;810:141::-;859:4;882:3;874:11;;905:3;902:1;895:14;939:4;936:1;926:18;918:26;;810:141;;;:::o;957:93::-;994:6;1041:2;1036;1029:5;1025:14;1021:23;1011:33;;957:93;;;:::o;1056:107::-;1100:8;1150:5;1144:4;1140:16;1119:37;;1056:107;;;;:::o;1169:393::-;1238:6;1288:1;1276:10;1272:18;1311:97;1341:66;1330:9;1311:97;:::i;:::-;1429:39;1459:8;1448:9;1429:39;:::i;:::-;1417:51;;1501:4;1497:9;1490:5;1486:21;1477:30;;1550:4;1540:8;1536:19;1529:5;1526:30;1516:40;;1245:317;;1169:393;;;;;:::o;1568:77::-;1605:7;1634:5;1623:16;;1568:77;;;:::o;1651:60::-;1679:3;1700:5;1693:12;;1651:60;;;:::o;1717:142::-;1767:9;1800:53;1818:34;1827:24;1845:5;1827:24;:::i;:::-;1818:34;:::i;:::-;1800:53;:::i;:::-;1787:66;;1717:142;;;:::o;1865:75::-;1908:3;1929:5;1922:12;;1865:75;;;:::o;1946:269::-;2056:39;2087:7;2056:39;:::i;:::-;2117:91;2166:41;2190:16;2166:41;:::i;:::-;2158:6;2151:4;2145:11;2117:91;:::i;:::-;2111:4;2104:105;2022:193;1946:269;;;:::o;2221:73::-;2266:3;2287:1;2280:8;;2221:73;:::o;2300:189::-;2377:32;;:::i;:::-;2418:65;2476:6;2468;2462:4;2418:65;:::i;:::-;2353:136;2300:189;;:::o;2495:186::-;2555:120;2572:3;2565:5;2562:14;2555:120;;;2626:39;2663:1;2656:5;2626:39;:::i;:::-;2599:1;2592:5;2588:13;2579:22;;2555:120;;;2495:186;;:::o;2687:543::-;2788:2;2783:3;2780:11;2777:446;;;2822:38;2854:5;2822:38;:::i;:::-;2906:29;2924:10;2906:29;:::i;:::-;2896:8;2892:44;3089:2;3077:10;3074:18;3071:49;;;3110:8;3095:23;;3071:49;3133:80;3189:22;3207:3;3189:22;:::i;:::-;3179:8;3175:37;3162:11;3133:80;:::i;:::-;2792:431;;2777:446;2687:543;;;:::o;3236:117::-;3290:8;3340:5;3334:4;3330:16;3309:37;;3236:117;;;;:::o;3359:169::-;3403:6;3436:51;3484:1;3480:6;3472:5;3469:1;3465:13;3436:51;:::i;:::-;3432:56;3517:4;3511;3507:15;3497:25;;3410:118;3359:169;;;;:::o;3533:295::-;3609:4;3755:29;3780:3;3774:4;3755:29;:::i;:::-;3747:37;;3817:3;3814:1;3810:11;3804:4;3801:21;3793:29;;3533:295;;;;:::o;3833:1395::-;3950:37;3983:3;3950:37;:::i;:::-;4052:18;4044:6;4041:30;4038:56;;;4074:18;;:::i;:::-;4038:56;4118:38;4150:4;4144:11;4118:38;:::i;:::-;4203:67;4263:6;4255;4249:4;4203:67;:::i;:::-;4297:1;4321:4;4308:17;;4353:2;4345:6;4342:14;4370:1;4365:618;;;;5027:1;5044:6;5041:77;;;5093:9;5088:3;5084:19;5078:26;5069:35;;5041:77;5144:67;5204:6;5197:5;5144:67;:::i;:::-;5138:4;5131:81;5000:222;4335:887;;4365:618;4417:4;4413:9;4405:6;4401:22;4451:37;4483:4;4451:37;:::i;:::-;4510:1;4524:208;4538:7;4535:1;4532:14;4524:208;;;4617:9;4612:3;4608:19;4602:26;4594:6;4587:42;4668:1;4660:6;4656:14;4646:24;;4715:2;4704:9;4700:18;4687:31;;4561:4;4558:1;4554:12;4549:17;;4524:208;;;4760:6;4751:7;4748:19;4745:179;;;4818:9;4813:3;4809:19;4803:26;4861:48;4903:4;4895:6;4891:17;4880:9;4861:48;:::i;:::-;4853:6;4846:64;4768:156;4745:179;4970:1;4966;4958:6;4954:14;4950:22;4944:4;4937:36;4372:611;;;4335:887;;3925:1303;;;3833:1395;;:::o;5234:126::-;5271:7;5311:42;5304:5;5300:54;5289:65;;5234:126;;;:::o;5366:96::-;5403:7;5432:24;5450:5;5432:24;:::i;:::-;5421:35;;5366:96;;;:::o;5468:118::-;5555:24;5573:5;5555:24;:::i;:::-;5550:3;5543:37;5468:118;;:::o;5592:222::-;5685:4;5723:2;5712:9;5708:18;5700:26;;5736:71;5804:1;5793:9;5789:17;5780:6;5736:71;:::i;:::-;5592:222;;;;:::o;190:6277:36:-;;;;;;;",
    linkReferences: {},
  },
  deployedBytecode: {
    object:
      "0x608060405260043610610180575f3560e01c80638da5cb5b116100d0578063bec2a7c511610089578063e219fc7511610063578063e219fc7514610564578063e985e9c514610580578063f2fde38b146105bc578063f810e527146105e457610180565b8063bec2a7c5146104ce578063c78f19f9146104fe578063c87b56dd1461052857610180565b80638da5cb5b146103e657806395d89b4114610410578063a22cb4651461043a578063ae677aa314610462578063b88d4fde1461048a578063be9af536146104b257610180565b8063202e37401161013d5780634f558e79116101175780634f558e791461031c5780636352211e1461035857806370a0823114610394578063715018a6146103d057610180565b8063202e3740146102a257806323b872dd146102cc57806342842e0e146102f457610180565b806301ffc9a71461018457806306fdde03146101c0578063081812fc146101ea578063095ea7b3146102265780630f08efe01461024e57806312e8558514610278575b5f5ffd5b34801561018f575f5ffd5b506101aa60048036038101906101a59190612de7565b61060c565b6040516101b79190612e2c565b60405180910390f35b3480156101cb575f5ffd5b506101d461066c565b6040516101e19190612eb5565b60405180910390f35b3480156101f5575f5ffd5b50610210600480360381019061020b9190612f08565b6106fb565b60405161021d9190612f72565b60405180910390f35b348015610231575f5ffd5b5061024c60048036038101906102479190612fb5565b610716565b005b348015610259575f5ffd5b5061026261072c565b60405161026f9190613165565b60405180910390f35b348015610283575f5ffd5b5061028c6109b7565b6040516102999190613194565b60405180910390f35b3480156102ad575f5ffd5b506102b66109c0565b6040516102c39190613165565b60405180910390f35b3480156102d7575f5ffd5b506102f260048036038101906102ed91906131ad565b610c95565b005b3480156102ff575f5ffd5b5061031a600480360381019061031591906131ad565b610d94565b005b348015610327575f5ffd5b50610342600480360381019061033d9190612f08565b610db3565b60405161034f9190612e2c565b60405180910390f35b348015610363575f5ffd5b5061037e60048036038101906103799190612f08565b610dd0565b60405161038b9190612f72565b60405180910390f35b34801561039f575f5ffd5b506103ba60048036038101906103b591906131fd565b610de1565b6040516103c79190613194565b60405180910390f35b3480156103db575f5ffd5b506103e4610e97565b005b3480156103f1575f5ffd5b506103fa610eaa565b6040516104079190612f72565b60405180910390f35b34801561041b575f5ffd5b50610424610ed2565b6040516104319190612eb5565b60405180910390f35b348015610445575f5ffd5b50610460600480360381019061045b9190613252565b610f62565b005b34801561046d575f5ffd5b5061048860048036038101906104839190612f08565b610f78565b005b348015610495575f5ffd5b506104b060048036038101906104ab91906133bc565b610f8a565b005b6104cc60048036038101906104c79190612f08565b610faf565b005b6104e860048036038101906104e391906134da565b6112a5565b6040516104f59190613194565b60405180910390f35b348015610509575f5ffd5b50610512611390565b60405161051f9190613194565b60405180910390f35b348015610533575f5ffd5b5061054e60048036038101906105499190612f08565b611396565b60405161055b9190612eb5565b60405180910390f35b61057e60048036038101906105799190613546565b6114a1565b005b34801561058b575f5ffd5b506105a660048036038101906105a19190613584565b611691565b6040516105b39190612e2c565b60405180910390f35b3480156105c7575f5ffd5b506105e260048036038101906105dd91906131fd565b61171f565b005b3480156105ef575f5ffd5b5061060a60048036038101906106059190612f08565b6117a3565b005b5f634906490660e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610665575061066482611987565b5b9050919050565b60605f805461067a906135ef565b80601f01602080910402602001604051908101604052809291908181526020018280546106a6906135ef565b80156106f15780601f106106c8576101008083540402835291602001916106f1565b820191905f5260205f20905b8154815290600101906020018083116106d457829003601f168201915b5050505050905090565b5f61070582611a68565b5061070f82611aee565b9050919050565b6107288282610723611b27565b611b2e565b5050565b60605f60085490505f600954600854610745919061364c565b90505f5f90505f8267ffffffffffffffff81111561076657610765613298565b5b60405190808252806020026020018201604052801561079f57816020015b61078c612d1d565b8152602001906001900390816107845790505b5090505f5f90505b848110156109ac57600c5f6001836107bf919061367f565b81526020019081526020015f205f9054906101000a900460ff16801561084f57503073ffffffffffffffffffffffffffffffffffffffff16600b5f600184610807919061367f565b81526020019081526020015f206002015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16145b1561099f575f600182610862919061367f565b90505f600b5f8381526020019081526020015f209050806040518060e00160405290815f8201548152602001600182015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016003820154815260200160048201548152602001600582015f9054906101000a900460ff16151515158152602001600682015481525050848681518110610982576109816136b2565b5b602002602001018190525060018561099a919061367f565b945050505b80806001019150506107a7565b508094505050505090565b5f600a54905090565b60605f60085490505f5f90505f5f90505b82811015610a68575f6001826109e7919061367f565b9050600c5f8281526020019081526020015f205f9054906101000a900460ff168015610a4657503373ffffffffffffffffffffffffffffffffffffffff16610a2e82610dd0565b73ffffffffffffffffffffffffffffffffffffffff16145b15610a5a578280610a56906136df565b9350505b5080806001019150506109d1565b505f8167ffffffffffffffff811115610a8457610a83613298565b5b604051908082528060200260200182016040528015610abd57816020015b610aaa612d1d565b815260200190600190039081610aa25790505b5090505f5f90505f5f90505b84811015610c8a575f600182610adf919061367f565b9050600c5f8281526020019081526020015f205f9054906101000a900460ff168015610b3e57503373ffffffffffffffffffffffffffffffffffffffff16610b2682610dd0565b73ffffffffffffffffffffffffffffffffffffffff16145b15610c7c575f600b5f8381526020019081526020015f209050806040518060e00160405290815f8201548152602001600182015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016003820154815260200160048201548152602001600582015f9054906101000a900460ff16151515158152602001600682015481525050858581518110610c6157610c606136b2565b5b60200260200101819052508380610c77906136df565b945050505b508080600101915050610ac9565b508194505050505090565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610d05575f6040517f64a0ae92000000000000000000000000000000000000000000000000000000008152600401610cfc9190612f72565b60405180910390fd5b5f610d188383610d13611b27565b611b40565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610d8e578382826040517f64283d7b000000000000000000000000000000000000000000000000000000008152600401610d8593929190613726565b60405180910390fd5b50505050565b610dae83838360405180602001604052805f815250610f8a565b505050565b600c602052805f5260405f205f915054906101000a900460ff1681565b5f610dda82611a68565b9050919050565b5f5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610e52575f6040517f89c62b64000000000000000000000000000000000000000000000000000000008152600401610e499190612f72565b60405180910390fd5b60035f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b610e9f611d4b565b610ea85f611dd2565b565b5f60075f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606060018054610ee1906135ef565b80601f0160208091040260200160405190810160405280929190818152602001828054610f0d906135ef565b8015610f585780601f10610f2f57610100808354040283529160200191610f58565b820191905f5260205f20905b815481529060010190602001808311610f3b57829003601f168201915b5050505050905090565b610f74610f6d611b27565b8383611e95565b5050565b610f80611d4b565b80600a8190555050565b610f95848484610c95565b610fa9610fa0611b27565b85858585611ffe565b50505050565b5f600b5f8381526020019081526020015f20905080600301543414611009576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611000906137a5565b60405180910390fd5b3073ffffffffffffffffffffffffffffffffffffffff16816002015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461109a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110919061380d565b60405180910390fd5b33816002015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001816005015f6101000a81548160ff021916908315150217905550600160095f82825461110a919061367f565b9250508190555061111c3033846121aa565b611124610eaa565b73ffffffffffffffffffffffffffffffffffffffff166108fc600a5490811502906040515f60405180830381858888f19350505050158015611168573d5f5f3e3d5ffd5b50806001015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc3490811502906040515f60405180830381858888f193505050501580156111cf573d5f5f3e3d5ffd5b505f816001015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550806001015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16837ffffde07b8a4fea5008bae1d8dc329a7cd74e45eb052e568a845fa2c01d56245184600301544260405161129992919061382b565b60405180910390a45050565b5f6112ae611d4b565b600a5434146112f2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112e99061389c565b60405180910390fd5b600160085f828254611304919061367f565b925050819055505f600854905061131b3382612312565b6113258186612405565b61133081858561245f565b3373ffffffffffffffffffffffffffffffffffffffff16817f656ec33f86aaf392937db290d141c2888c28cd8c852c0191ca7950dd2954dc458787874260405161137d94939291906138ba565b60405180910390a3809150509392505050565b600a5481565b60606113a182611a68565b505f60065f8481526020019081526020015f2080546113bf906135ef565b80601f01602080910402602001604051908101604052809291908181526020018280546113eb906135ef565b80156114365780601f1061140d57610100808354040283529160200191611436565b820191905f5260205f20905b81548152906001019060200180831161141957829003601f168201915b505050505090505f611446612620565b90505f81510361145a57819250505061149c565b5f8251111561148e57808260405160200161147692919061393e565b6040516020818303038152906040529250505061149c565b61149784612636565b925050505b919050565b3373ffffffffffffffffffffffffffffffffffffffff166114c183610dd0565b73ffffffffffffffffffffffffffffffffffffffff1614611517576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161150e906139ab565b60405180910390fd5b600a54341461155b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161155290613a13565b60405180910390fd5b5f600b5f8481526020019081526020015f2090505f816005015f6101000a81548160ff02191690831515021790555081816003018190555033816001015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555030816002015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600160095f828254611629919061364c565b9250508190555061163b3330856121aa565b3373ffffffffffffffffffffffffffffffffffffffff16837f5e85fbea5bdae282ff2f91c6352d4f9ea53d6467e0705c096fca509dcd790b3b844260405161168492919061382b565b60405180910390a3505050565b5f60055f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff16905092915050565b611727611d4b565b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603611797575f6040517f1e4fbdf700000000000000000000000000000000000000000000000000000000815260040161178e9190612f72565b60405180910390fd5b6117a081611dd2565b50565b3373ffffffffffffffffffffffffffffffffffffffff166117c382610dd0565b73ffffffffffffffffffffffffffffffffffffffff1614611819576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161181090613a7b565b60405180910390fd5b5f600b5f8381526020019081526020015f206004015490505f8111611873576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161186a90613b09565b60405180910390fd5b61187c8261269c565b3373ffffffffffffffffffffffffffffffffffffffff16827fbd639147b52bb6fe477f5b7a13c54ebbb1f2124d4d118e570261352a9948fb0183426040516118c592919061382b565b60405180910390a3600b5f8381526020019081526020015f205f5f82015f9055600182015f6101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055600282015f6101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055600382015f9055600482015f9055600582015f6101000a81549060ff0219169055600682015f905550505f600c5f8481526020019081526020015f205f6101000a81548160ff0219169083151502179055505050565b5f7f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480611a5157507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80611a615750611a608261271e565b5b9050919050565b5f5f611a7383612787565b90505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603611ae557826040517f7e273289000000000000000000000000000000000000000000000000000000008152600401611adc9190613194565b60405180910390fd5b80915050919050565b5f60045f8381526020019081526020015f205f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b5f33905090565b611b3b83838360016127c0565b505050565b5f5f611b4b84612787565b90505f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614611b8c57611b8b81848661297f565b5b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614611c1757611bcb5f855f5f6127c0565b600160035f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825403925050819055505b5f73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614611c9657600160035f8773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825401925050819055505b8460025f8681526020019081526020015f205f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4809150509392505050565b611d53611b27565b73ffffffffffffffffffffffffffffffffffffffff16611d71610eaa565b73ffffffffffffffffffffffffffffffffffffffff1614611dd057611d94611b27565b6040517f118cdaa7000000000000000000000000000000000000000000000000000000008152600401611dc79190612f72565b60405180910390fd5b565b5f60075f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160075f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611f0557816040517f5b08ba18000000000000000000000000000000000000000000000000000000008152600401611efc9190612f72565b60405180910390fd5b8060055f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051611ff19190612e2c565b60405180910390a3505050565b5f8373ffffffffffffffffffffffffffffffffffffffff163b11156121a3578273ffffffffffffffffffffffffffffffffffffffff1663150b7a02868685856040518563ffffffff1660e01b815260040161205c9493929190613b79565b6020604051808303815f875af192505050801561209757506040513d601f19601f820116820180604052508101906120949190613bd7565b60015b612118573d805f81146120c5576040519150601f19603f3d011682016040523d82523d5f602084013e6120ca565b606091505b505f81510361211057836040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016121079190612f72565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916146121a157836040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016121989190612f72565b60405180910390fd5b505b5050505050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361221a575f6040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016122119190612f72565b60405180910390fd5b5f61222683835f611b40565b90505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361229857816040517f7e27328900000000000000000000000000000000000000000000000000000000815260040161228f9190613194565b60405180910390fd5b8373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461230c578382826040517f64283d7b00000000000000000000000000000000000000000000000000000000815260040161230393929190613726565b60405180910390fd5b50505050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603612382575f6040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016123799190612f72565b60405180910390fd5b5f61238e83835f611b40565b90505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614612400575f6040517f73c6ac6e0000000000000000000000000000000000000000000000000000000081526004016123f79190612f72565b60405180910390fd5b505050565b8060065f8481526020019081526020015f2090816124239190613da2565b507ff8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce7826040516124539190613194565b60405180910390a15050565b5f82116124a1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161249890613ebb565b60405180910390fd5b6040518060e001604052808481526020013373ffffffffffffffffffffffffffffffffffffffff1681526020013073ffffffffffffffffffffffffffffffffffffffff1681526020018381526020018281526020015f1515815260200142815250600b5f8581526020019081526020015f205f820151815f01556020820151816001015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040820151816002015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550606082015181600301556080820151816004015560a0820151816005015f6101000a81548160ff02191690831515021790555060c082015181600601559050506001600c5f8581526020019081526020015f205f6101000a81548160ff02191690831515021790555061261b3330856121aa565b505050565b606060405180602001604052805f815250905090565b606061264182611a68565b505f61264b612620565b90505f8151116126695760405180602001604052805f815250612694565b8061267384612a42565b60405160200161268492919061393e565b6040516020818303038152906040525b915050919050565b5f6126a85f835f611b40565b90505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361271a57816040517f7e2732890000000000000000000000000000000000000000000000000000000081526004016127119190613194565b60405180910390fd5b5050565b5f7f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b5f60025f8381526020019081526020015f205f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b80806127f857505f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614155b1561292a575f61280784611a68565b90505f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415801561287157508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b801561288457506128828184611691565b155b156128c657826040517fa9fbf51f0000000000000000000000000000000000000000000000000000000081526004016128bd9190612f72565b60405180910390fd5b811561292857838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b8360045f8581526020019081526020015f205f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b61298a838383612b0c565b612a3d575f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036129fe57806040517f7e2732890000000000000000000000000000000000000000000000000000000081526004016129f59190613194565b60405180910390fd5b81816040517f177e802f000000000000000000000000000000000000000000000000000000008152600401612a34929190613ed9565b60405180910390fd5b505050565b60605f6001612a5084612bcc565b0190505f8167ffffffffffffffff811115612a6e57612a6d613298565b5b6040519080825280601f01601f191660200182016040528015612aa05781602001600182028036833780820191505090505b5090505f82602001820190505b600115612b01578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a8581612af657612af5613f00565b5b0494505f8503612aad575b819350505050919050565b5f5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614158015612bc357508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480612b845750612b838484611691565b5b80612bc257508273ffffffffffffffffffffffffffffffffffffffff16612baa83611aee565b73ffffffffffffffffffffffffffffffffffffffff16145b5b90509392505050565b5f5f5f90507a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310612c28577a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008381612c1e57612c1d613f00565b5b0492506040810190505b6d04ee2d6d415b85acef81000000008310612c65576d04ee2d6d415b85acef81000000008381612c5b57612c5a613f00565b5b0492506020810190505b662386f26fc100008310612c9457662386f26fc100008381612c8a57612c89613f00565b5b0492506010810190505b6305f5e1008310612cbd576305f5e1008381612cb357612cb2613f00565b5b0492506008810190505b6127108310612ce2576127108381612cd857612cd7613f00565b5b0492506004810190505b60648310612d055760648381612cfb57612cfa613f00565b5b0492506002810190505b600a8310612d14576001810190505b80915050919050565b6040518060e001604052805f81526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f81526020015f81526020015f151581526020015f81525090565b5f604051905090565b5f5ffd5b5f5ffd5b5f7fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b612dc681612d92565b8114612dd0575f5ffd5b50565b5f81359050612de181612dbd565b92915050565b5f60208284031215612dfc57612dfb612d8a565b5b5f612e0984828501612dd3565b91505092915050565b5f8115159050919050565b612e2681612e12565b82525050565b5f602082019050612e3f5f830184612e1d565b92915050565b5f81519050919050565b5f82825260208201905092915050565b8281835e5f83830152505050565b5f601f19601f8301169050919050565b5f612e8782612e45565b612e918185612e4f565b9350612ea1818560208601612e5f565b612eaa81612e6d565b840191505092915050565b5f6020820190508181035f830152612ecd8184612e7d565b905092915050565b5f819050919050565b612ee781612ed5565b8114612ef1575f5ffd5b50565b5f81359050612f0281612ede565b92915050565b5f60208284031215612f1d57612f1c612d8a565b5b5f612f2a84828501612ef4565b91505092915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f612f5c82612f33565b9050919050565b612f6c81612f52565b82525050565b5f602082019050612f855f830184612f63565b92915050565b612f9481612f52565b8114612f9e575f5ffd5b50565b5f81359050612faf81612f8b565b92915050565b5f5f60408385031215612fcb57612fca612d8a565b5b5f612fd885828601612fa1565b9250506020612fe985828601612ef4565b9150509250929050565b5f81519050919050565b5f82825260208201905092915050565b5f819050602082019050919050565b61302581612ed5565b82525050565b5f61303582612f33565b9050919050565b6130458161302b565b82525050565b61305481612e12565b82525050565b60e082015f82015161306e5f85018261301c565b506020820151613081602085018261303c565b506040820151613094604085018261303c565b5060608201516130a7606085018261301c565b5060808201516130ba608085018261301c565b5060a08201516130cd60a085018261304b565b5060c08201516130e060c085018261301c565b50505050565b5f6130f1838361305a565b60e08301905092915050565b5f602082019050919050565b5f61311382612ff3565b61311d8185612ffd565b93506131288361300d565b805f5b8381101561315857815161313f88826130e6565b975061314a836130fd565b92505060018101905061312b565b5085935050505092915050565b5f6020820190508181035f83015261317d8184613109565b905092915050565b61318e81612ed5565b82525050565b5f6020820190506131a75f830184613185565b92915050565b5f5f5f606084860312156131c4576131c3612d8a565b5b5f6131d186828701612fa1565b93505060206131e286828701612fa1565b92505060406131f386828701612ef4565b9150509250925092565b5f6020828403121561321257613211612d8a565b5b5f61321f84828501612fa1565b91505092915050565b61323181612e12565b811461323b575f5ffd5b50565b5f8135905061324c81613228565b92915050565b5f5f6040838503121561326857613267612d8a565b5b5f61327585828601612fa1565b92505060206132868582860161323e565b9150509250929050565b5f5ffd5b5f5ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b6132ce82612e6d565b810181811067ffffffffffffffff821117156132ed576132ec613298565b5b80604052505050565b5f6132ff612d81565b905061330b82826132c5565b919050565b5f67ffffffffffffffff82111561332a57613329613298565b5b61333382612e6d565b9050602081019050919050565b828183375f83830152505050565b5f61336061335b84613310565b6132f6565b90508281526020810184848401111561337c5761337b613294565b5b613387848285613340565b509392505050565b5f82601f8301126133a3576133a2613290565b5b81356133b384826020860161334e565b91505092915050565b5f5f5f5f608085870312156133d4576133d3612d8a565b5b5f6133e187828801612fa1565b94505060206133f287828801612fa1565b935050604061340387828801612ef4565b925050606085013567ffffffffffffffff81111561342457613423612d8e565b5b6134308782880161338f565b91505092959194509250565b5f67ffffffffffffffff82111561345657613455613298565b5b61345f82612e6d565b9050602081019050919050565b5f61347e6134798461343c565b6132f6565b90508281526020810184848401111561349a57613499613294565b5b6134a5848285613340565b509392505050565b5f82601f8301126134c1576134c0613290565b5b81356134d184826020860161346c565b91505092915050565b5f5f5f606084860312156134f1576134f0612d8a565b5b5f84013567ffffffffffffffff81111561350e5761350d612d8e565b5b61351a868287016134ad565b935050602061352b86828701612ef4565b925050604061353c86828701612ef4565b9150509250925092565b5f5f6040838503121561355c5761355b612d8a565b5b5f61356985828601612ef4565b925050602061357a85828601612ef4565b9150509250929050565b5f5f6040838503121561359a57613599612d8a565b5b5f6135a785828601612fa1565b92505060206135b885828601612fa1565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f600282049050600182168061360657607f821691505b602082108103613619576136186135c2565b5b50919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f61365682612ed5565b915061366183612ed5565b92508282039050818111156136795761367861361f565b5b92915050565b5f61368982612ed5565b915061369483612ed5565b92508282019050808211156136ac576136ab61361f565b5b92915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f6136e982612ed5565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361371b5761371a61361f565b5b600182019050919050565b5f6060820190506137395f830186612f63565b6137466020830185613185565b6137536040830184612f63565b949350505050565b7f5375626d69742066756c6c2061736b696e6720707269636500000000000000005f82015250565b5f61378f601883612e4f565b915061379a8261375b565b602082019050919050565b5f6020820190508181035f8301526137bc81613783565b9050919050565b7f4974656d206e6f7420666f722073616c650000000000000000000000000000005f82015250565b5f6137f7601183612e4f565b9150613802826137c3565b602082019050919050565b5f6020820190508181035f830152613824816137eb565b9050919050565b5f60408201905061383e5f830185613185565b61384b6020830184613185565b9392505050565b7f50617920746865206c697374696e6720707269636500000000000000000000005f82015250565b5f613886601583612e4f565b915061389182613852565b602082019050919050565b5f6020820190508181035f8301526138b38161387a565b9050919050565b5f6080820190508181035f8301526138d28187612e7d565b90506138e16020830186613185565b6138ee6040830185613185565b6138fb6060830184613185565b95945050505050565b5f81905092915050565b5f61391882612e45565b6139228185613904565b9350613932818560208601612e5f565b80840191505092915050565b5f613949828561390e565b9150613955828461390e565b91508190509392505050565b7f596f75206d757374206f776e2074686973204e465400000000000000000000005f82015250565b5f613995601583612e4f565b91506139a082613961565b602082019050919050565b5f6020820190508181035f8301526139c281613989565b9050919050565b7f50617920746865206c697374696e6720666565000000000000000000000000005f82015250565b5f6139fd601383612e4f565b9150613a08826139c9565b602082019050919050565b5f6020820190508181035f830152613a2a816139f1565b9050919050565b7f596f7520646f206e6f74206f776e207468697320766f756368657200000000005f82015250565b5f613a65601b83612e4f565b9150613a7082613a31565b602082019050919050565b5f6020820190508181035f830152613a9281613a59565b9050919050565b7f5468697320766f756368657220686173206e6f20646973636f756e742076616c5f8201527f7565000000000000000000000000000000000000000000000000000000000000602082015250565b5f613af3602283612e4f565b9150613afe82613a99565b604082019050919050565b5f6020820190508181035f830152613b2081613ae7565b9050919050565b5f81519050919050565b5f82825260208201905092915050565b5f613b4b82613b27565b613b558185613b31565b9350613b65818560208601612e5f565b613b6e81612e6d565b840191505092915050565b5f608082019050613b8c5f830187612f63565b613b996020830186612f63565b613ba66040830185613185565b8181036060830152613bb88184613b41565b905095945050505050565b5f81519050613bd181612dbd565b92915050565b5f60208284031215613bec57613beb612d8a565b5b5f613bf984828501613bc3565b91505092915050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f60088302613c5e7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82613c23565b613c688683613c23565b95508019841693508086168417925050509392505050565b5f819050919050565b5f613ca3613c9e613c9984612ed5565b613c80565b612ed5565b9050919050565b5f819050919050565b613cbc83613c89565b613cd0613cc882613caa565b848454613c2f565b825550505050565b5f5f905090565b613ce7613cd8565b613cf2818484613cb3565b505050565b5b81811015613d1557613d0a5f82613cdf565b600181019050613cf8565b5050565b601f821115613d5a57613d2b81613c02565b613d3484613c14565b81016020851015613d43578190505b613d57613d4f85613c14565b830182613cf7565b50505b505050565b5f82821c905092915050565b5f613d7a5f1984600802613d5f565b1980831691505092915050565b5f613d928383613d6b565b9150826002028217905092915050565b613dab82612e45565b67ffffffffffffffff811115613dc457613dc3613298565b5b613dce82546135ef565b613dd9828285613d19565b5f60209050601f831160018114613e0a575f8415613df8578287015190505b613e028582613d87565b865550613e69565b601f198416613e1886613c02565b5f5b82811015613e3f57848901518255600182019150602085019450602081019050613e1a565b86831015613e5c5784890151613e58601f891682613d6b565b8355505b6001600288020188555050505b505050505050565b7f5072696365206d757374206265203e20300000000000000000000000000000005f82015250565b5f613ea5601183612e4f565b9150613eb082613e71565b602082019050919050565b5f6020820190508181035f830152613ed281613e99565b9050919050565b5f604082019050613eec5f830185612f63565b613ef96020830184613185565b9392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffdfea2646970667358221220978a80b7c10ea51d5b36d963ee2fef72e146c3b0020557f34094d8ef8129c41964736f6c634300081c0033",
    sourceMap:
      "190:6277:36:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;938:207:23;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2364:89:20;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3496:154;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3322:113;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;4819:647:36;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1623:93;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;5472:991;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;4142:578:20;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;4786:132;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;686:38:36;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2184:118:20;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1919:208;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2293:101:15;;;;;;;;;;;;;:::i;:::-;;1638:85;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2517:93:20;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3717:144;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1506:111:36;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;4984:233:20;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;2927:705:36;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1722:656;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;317:43;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1211:593:23;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3638:636:36;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;3927:153:20;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2543:215:15;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;4280:533:36;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;938:207:23;1040:4;761:10;754:18;;1063:35;;;:11;:35;;;;:75;;;;1102:36;1126:11;1102:23;:36::i;:::-;1063:75;1056:82;;938:207;;;:::o;2364:89:20:-;2409:13;2441:5;2434:12;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2364:89;:::o;3496:154::-;3563:7;3582:22;3596:7;3582:13;:22::i;:::-;;3622:21;3635:7;3622:12;:21::i;:::-;3615:28;;3496:154;;;:::o;3322:113::-;3393:35;3402:2;3406:7;3415:12;:10;:12::i;:::-;3393:8;:35::i;:::-;3322:113;;:::o;4819:647:36:-;4868:19;4899:14;4916:9;;4899:26;;4935:20;4970:10;;4958:9;;:22;;;;:::i;:::-;4935:45;;4990:17;5010:1;4990:21;;5022:25;5067:15;5050:33;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;5022:61;;5098:6;5107:1;5098:10;;5093:345;5114:9;5110:1;:13;5093:345;;;5148:6;:13;5159:1;5155;:5;;;;:::i;:::-;5148:13;;;;;;;;;;;;;;;;;;;;;:61;;;;;5204:4;5165:44;;:14;:21;5184:1;5180;:5;;;;:::i;:::-;5165:21;;;;;;;;;;;:27;;;;;;;;;;;;:44;;;5148:61;5144:284;;;5229:14;5250:1;5246;:5;;;;:::i;:::-;5229:22;;5269:30;5302:14;:25;5317:9;5302:25;;;;;;;;;;;5269:58;;5367:11;5345:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:5;5351:12;5345:19;;;;;;;;:::i;:::-;;;;;;;:33;;;;5412:1;5396:17;;;;;:::i;:::-;;;5211:217;;5144:284;5125:3;;;;;;;5093:345;;;;5454:5;5447:12;;;;;;4819:647;:::o;1623:93::-;1671:7;1697:12;;1690:19;;1623:93;:::o;5472:991::-;5516:19;5543;5565:9;;5543:31;;5580:14;5597:1;5580:18;;5672:6;5681:1;5672:10;;5667:261;5688:14;5684:1;:18;5667:261;;;5719:12;5738:1;5734;:5;;;;:::i;:::-;5719:20;;5835:6;:15;5842:7;5835:15;;;;;;;;;;;;;;;;;;;;;:49;;;;;5874:10;5854:30;;:16;5862:7;5854;:16::i;:::-;:30;;;5835:49;5831:91;;;5900:11;;;;;:::i;:::-;;;;5831:91;5709:219;5704:3;;;;;;;5667:261;;;;5981:25;6026:9;6009:27;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;5981:55;;6042:17;6062:1;6042:21;;6143:6;6152:1;6143:10;;6138:300;6159:14;6155:1;:18;6138:300;;;6190:12;6209:1;6205;:5;;;;:::i;:::-;6190:20;;6225:6;:15;6232:7;6225:15;;;;;;;;;;;;;;;;;;;;;:49;;;;;6264:10;6244:30;;:16;6252:7;6244;:16::i;:::-;:30;;;6225:49;6221:211;;;6290:30;6323:14;:23;6338:7;6323:23;;;;;;;;;;;6290:56;;6382:11;6360:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:5;6366:12;6360:19;;;;;;;;:::i;:::-;;;;;;;:33;;;;6407:14;;;;;:::i;:::-;;;;6276:156;6221:211;6180:258;6175:3;;;;;;;6138:300;;;;6451:5;6444:12;;;;;;5472:991;:::o;4142:578:20:-;4250:1;4236:16;;:2;:16;;;4232:87;;4305:1;4275:33;;;;;;;;;;;:::i;:::-;;;;;;;;4232:87;4537:21;4561:34;4569:2;4573:7;4582:12;:10;:12::i;:::-;4561:7;:34::i;:::-;4537:58;;4626:4;4609:21;;:13;:21;;;4605:109;;4674:4;4680:7;4689:13;4653:50;;;;;;;;;;;;;:::i;:::-;;;;;;;;4605:109;4222:498;4142:578;;;:::o;4786:132::-;4872:39;4889:4;4895:2;4899:7;4872:39;;;;;;;;;;;;:16;:39::i;:::-;4786:132;;;:::o;686:38:36:-;;;;;;;;;;;;;;;;;;;;;;:::o;2184:118:20:-;2247:7;2273:22;2287:7;2273:13;:22::i;:::-;2266:29;;2184:118;;;:::o;1919:208::-;1982:7;2022:1;2005:19;;:5;:19;;;2001:87;;2074:1;2047:30;;;;;;;;;;;:::i;:::-;;;;;;;;2001:87;2104:9;:16;2114:5;2104:16;;;;;;;;;;;;;;;;2097:23;;1919:208;;;:::o;2293:101:15:-;1531:13;:11;:13::i;:::-;2357:30:::1;2384:1;2357:18;:30::i;:::-;2293:101::o:0;1638:85::-;1684:7;1710:6;;;;;;;;;;;1703:13;;1638:85;:::o;2517:93:20:-;2564:13;2596:7;2589:14;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2517:93;:::o;3717:144::-;3802:52;3821:12;:10;:12::i;:::-;3835:8;3845;3802:18;:52::i;:::-;3717:144;;:::o;1506:111:36:-;1531:13:15;:11;:13::i;:::-;1596::36::1;1581:12;:28;;;;1506:111:::0;:::o;4984:233:20:-;5097:31;5110:4;5116:2;5120:7;5097:12;:31::i;:::-;5138:72;5172:12;:10;:12::i;:::-;5186:4;5192:2;5196:7;5205:4;5138:33;:72::i;:::-;4984:233;;;;:::o;2927:705:36:-;2995:23;3021:14;:23;3036:7;3021:23;;;;;;;;;;;2995:49;;3075:4;:10;;;3062:9;:23;3054:60;;;;;;;;;;;;:::i;:::-;;;;;;;;;3154:4;3132:27;;:4;:10;;;;;;;;;;;;:27;;;3124:57;;;;;;;;;;;;:::i;:::-;;;;;;;;;3213:10;3192:4;:10;;;:32;;;;;;;;;;;;;;;;;;3246:4;3234;:9;;;:16;;;;;;;;;;;;;;;;;;3274:1;3260:10;;:15;;;;;;;:::i;:::-;;;;;;;;3286:45;3304:4;3311:10;3323:7;3286:9;:45::i;:::-;3349:7;:5;:7::i;:::-;3341:25;;:39;3367:12;;3341:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3390:4;:11;;;;;;;;;;;;:20;;:31;3411:9;3390:31;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3461:1;3431:4;:11;;;:33;;;;;;;;;;;;;;;;;;3550:4;:11;;;;;;;;;;;;3480:144;;3526:10;3480:144;;3505:7;3480:144;3575:4;:10;;;3599:15;3480:144;;;;;;;:::i;:::-;;;;;;;;2985:647;2927:705;:::o;1722:656::-;1869:7;1531:13:15;:11;:13::i;:::-;1909:12:36::1;;1896:9;:25;1888:59;;;;;;;;;;;;:::i;:::-;;;;;;;;;1971:1;1958:9;;:14;;;;;;;:::i;:::-;;;;;;;;1982:18;2003:9;;1982:30;;2023:29;2029:10;2041;2023:5;:29::i;:::-;2062:34;2075:10;2087:8;2062:12;:34::i;:::-;2107:50;2124:10;2136:5;2143:13;2107:16;:50::i;:::-;2224:10;2172:169;;2200:10;2172:169;2248:8;2270:5;2289:13;2316:15;2172:169;;;;;;;;;:::i;:::-;;;;;;;;2361:10;2354:17;;;1722:656:::0;;;;;:::o;317:43::-;;;;:::o;1211:593:23:-;1284:13;1309:22;1323:7;1309:13;:22::i;:::-;;1342:23;1368:10;:19;1379:7;1368:19;;;;;;;;;;;1342:45;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1397:18;1418:10;:8;:10::i;:::-;1397:31;;1523:1;1507:4;1501:18;:23;1497:70;;1547:9;1540:16;;;;;;1497:70;1692:1;1672:9;1666:23;:27;1662:95;;;1730:4;1736:9;1716:30;;;;;;;;;:::i;:::-;;;;;;;;;;;;;1709:37;;;;;;1662:95;1774:23;1789:7;1774:14;:23::i;:::-;1767:30;;;;1211:593;;;;:::o;3638:636:36:-;3744:10;3724:30;;:16;3732:7;3724;:16::i;:::-;:30;;;3716:64;;;;;;;;;;;;:::i;:::-;;;;;;;;;3811:12;;3798:9;:25;3790:57;;;;;;;;;;;;:::i;:::-;;;;;;;;;3858:23;3884:14;:23;3899:7;3884:23;;;;;;;;;;;3858:49;;3930:5;3918:4;:9;;;:17;;;;;;;;;;;;;;;;;;3958:5;3945:4;:10;;:18;;;;3995:10;3973:4;:11;;;:33;;;;;;;;;;;;;;;;;;4045:4;4016;:10;;;:35;;;;;;;;;;;;;;;;;;4075:1;4061:10;;:15;;;;;;;:::i;:::-;;;;;;;;4087:45;4097:10;4117:4;4124:7;4087:9;:45::i;:::-;4198:10;4148:118;;4177:7;4148:118;4222:5;4241:15;4148:118;;;;;;;:::i;:::-;;;;;;;;3706:568;3638:636;;:::o;3927:153:20:-;4015:4;4038:18;:25;4057:5;4038:25;;;;;;;;;;;;;;;:35;4064:8;4038:35;;;;;;;;;;;;;;;;;;;;;;;;;4031:42;;3927:153;;;;:::o;2543:215:15:-;1531:13;:11;:13::i;:::-;2647:1:::1;2627:22;;:8;:22;;::::0;2623:91:::1;;2700:1;2672:31;;;;;;;;;;;:::i;:::-;;;;;;;;2623:91;2723:28;2742:8;2723:18;:28::i;:::-;2543:215:::0;:::o;4280:533:36:-;4364:10;4344:30;;:16;4352:7;4344;:16::i;:::-;:30;;;4336:70;;;;;;;;;;;;:::i;:::-;;;;;;;;;4417:16;4436:14;:23;4451:7;4436:23;;;;;;;;;;;:37;;;4417:56;;4502:1;4491:8;:12;4483:59;;;;;;;;;;;;:::i;:::-;;;;;;;;;4553:14;4559:7;4553:5;:14::i;:::-;4628:10;4582:117;;4607:7;4582:117;4652:8;4674:15;4582:117;;;;;;;:::i;:::-;;;;;;;;4717:14;:23;4732:7;4717:23;;;;;;;;;;;;4710:30;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4768:5;4750:6;:15;4757:7;4750:15;;;;;;;;;;;;:23;;;;;;;;;;;;;;;;;;4326:487;4280:533;:::o;1560:300:20:-;1662:4;1712:25;1697:40;;;:11;:40;;;;:104;;;;1768:33;1753:48;;;:11;:48;;;;1697:104;:156;;;;1817:36;1841:11;1817:23;:36::i;:::-;1697:156;1678:175;;1560:300;;;:::o;16212:241::-;16275:7;16294:13;16310:17;16319:7;16310:8;:17::i;:::-;16294:33;;16358:1;16341:19;;:5;:19;;;16337:88;;16406:7;16383:31;;;;;;;;;;;:::i;:::-;;;;;;;;16337:88;16441:5;16434:12;;;16212:241;;;:::o;5963:127::-;6033:7;6059:15;:24;6075:7;6059:24;;;;;;;;;;;;;;;;;;;;;6052:31;;5963:127;;;:::o;656:96:26:-;709:7;735:10;728:17;;656:96;:::o;14492:120:20:-;14572:33;14581:2;14585:7;14594:4;14600;14572:8;:33::i;:::-;14492:120;;;:::o;8861:795::-;8947:7;8966:12;8981:17;8990:7;8981:8;:17::i;:::-;8966:32;;9074:1;9058:18;;:4;:18;;;9054:86;;9092:37;9109:4;9115;9121:7;9092:16;:37::i;:::-;9054:86;9200:1;9184:18;;:4;:18;;;9180:256;;9300:48;9317:1;9321:7;9338:1;9342:5;9300:8;:48::i;:::-;9410:1;9391:9;:15;9401:4;9391:15;;;;;;;;;;;;;;;;:20;;;;;;;;;;;9180:256;9464:1;9450:16;;:2;:16;;;9446:107;;9527:1;9510:9;:13;9520:2;9510:13;;;;;;;;;;;;;;;;:18;;;;;;;;;;;9446:107;9582:2;9563:7;:16;9571:7;9563:16;;;;;;;;;;;;:21;;;;;;;;;;;;;;;;;;9619:7;9615:2;9600:27;;9609:4;9600:27;;;;;;;;;;;;9645:4;9638:11;;;8861:795;;;;;:::o;1796:162:15:-;1866:12;:10;:12::i;:::-;1855:23;;:7;:5;:7::i;:::-;:23;;;1851:101;;1928:12;:10;:12::i;:::-;1901:40;;;;;;;;;;;:::i;:::-;;;;;;;;1851:101;1796:162::o;2912:187::-;2985:16;3004:6;;;;;;;;;;;2985:25;;3029:8;3020:6;;:17;;;;;;;;;;;;;;;;;;3083:8;3052:40;;3073:8;3052:40;;;;;;;;;;;;2975:124;2912:187;:::o;15665:312:20:-;15792:1;15772:22;;:8;:22;;;15768:91;;15839:8;15817:31;;;;;;;;;;;:::i;:::-;;;;;;;;15768:91;15906:8;15868:18;:25;15887:5;15868:25;;;;;;;;;;;;;;;:35;15894:8;15868:35;;;;;;;;;;;;;;;;:46;;;;;;;;;;;;;;;;;;15951:8;15929:41;;15944:5;15929:41;;;15961:8;15929:41;;;;;;:::i;:::-;;;;;;;;15665:312;;;:::o;993:924:25:-;1190:1;1173:2;:14;;;:18;1169:742;;;1227:2;1211:36;;;1248:8;1258:4;1264:7;1273:4;1211:67;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;1207:694;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1585:1;1568:6;:13;:18;1564:323;;1708:2;1672:39;;;;;;;;;;;:::i;:::-;;;;;;;;1564:323;1839:6;1833:13;1824:6;1820:2;1816:15;1809:38;1207:694;1335:41;;;1325:51;;;:6;:51;;;;1321:182;;1481:2;1445:39;;;;;;;;;;;:::i;:::-;;;;;;;;1321:182;1279:238;1169:742;993:924;;;;;:::o;12061:460:20:-;12160:1;12146:16;;:2;:16;;;12142:87;;12215:1;12185:33;;;;;;;;;;;:::i;:::-;;;;;;;;12142:87;12238:21;12262:32;12270:2;12274:7;12291:1;12262:7;:32::i;:::-;12238:56;;12333:1;12308:27;;:13;:27;;;12304:211;;12381:7;12358:31;;;;;;;;;;;:::i;:::-;;;;;;;;12304:211;12427:4;12410:21;;:13;:21;;;12406:109;;12475:4;12481:7;12490:13;12454:50;;;;;;;;;;;;;:::i;:::-;;;;;;;;12406:109;12132:389;12061:460;;;:::o;9978:327::-;10059:1;10045:16;;:2;:16;;;10041:87;;10114:1;10084:33;;;;;;;;;;;:::i;:::-;;;;;;;;10041:87;10137:21;10161:32;10169:2;10173:7;10190:1;10161:7;:32::i;:::-;10137:56;;10232:1;10207:27;;:13;:27;;;10203:96;;10285:1;10257:31;;;;;;;;;;;:::i;:::-;;;;;;;;10203:96;10031:274;9978:327;;:::o;1932:167:23:-;2045:9;2023:10;:19;2034:7;2023:19;;;;;;;;;;;:31;;;;;;:::i;:::-;;2069:23;2084:7;2069:23;;;;;;:::i;:::-;;;;;;;;1932:167;;:::o;2384:537:36:-;2529:1;2521:5;:9;2513:39;;;;;;;;;;;;:::i;:::-;;;;;;;;;2589:204;;;;;;;;2613:7;2589:204;;;;2642:10;2589:204;;;;;;2683:4;2589:204;;;;;;2703:5;2589:204;;;;2722:13;2589:204;;;;2749:5;2589:204;;;;;;2768:15;2589:204;;;2563:14;:23;2578:7;2563:23;;;;;;;;;;;:230;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2821:4;2803:6;:15;2810:7;2803:15;;;;;;;;;;;;:22;;;;;;;;;;;;;;;;;;2869:45;2879:10;2899:4;2906:7;2869:9;:45::i;:::-;2384:537;;;:::o;3173:92:20:-;3224:13;3249:9;;;;;;;;;;;;;;3173:92;:::o;2676:255::-;2740:13;2765:22;2779:7;2765:13;:22::i;:::-;;2798:21;2822:10;:8;:10::i;:::-;2798:34;;2873:1;2855:7;2849:21;:25;:75;;;;;;;;;;;;;;;;;2891:7;2900:18;:7;:16;:18::i;:::-;2877:42;;;;;;;;;:::i;:::-;;;;;;;;;;;;;2849:75;2842:82;;;2676:255;;;:::o;11510:227::-;11561:21;11585:40;11601:1;11605:7;11622:1;11585:7;:40::i;:::-;11561:64;;11664:1;11639:27;;:13;:27;;;11635:96;;11712:7;11689:31;;;;;;;;;;;:::i;:::-;;;;;;;;11635:96;11551:186;11510:227;:::o;763:146:29:-;839:4;877:25;862:40;;;:11;:40;;;;855:47;;763:146;;;:::o;5732:115:20:-;5798:7;5824;:16;5832:7;5824:16;;;;;;;;;;;;;;;;;;;;;5817:23;;5732:115;;;:::o;14794:662::-;14954:9;:31;;;;14983:1;14967:18;;:4;:18;;;;14954:31;14950:460;;;15001:13;15017:22;15031:7;15017:13;:22::i;:::-;15001:38;;15183:1;15167:18;;:4;:18;;;;:35;;;;;15198:4;15189:13;;:5;:13;;;;15167:35;:69;;;;;15207:29;15224:5;15231:4;15207:16;:29::i;:::-;15206:30;15167:69;15163:142;;;15285:4;15263:27;;;;;;;;;;;:::i;:::-;;;;;;;;15163:142;15323:9;15319:81;;;15377:7;15373:2;15357:28;;15366:5;15357:28;;;;;;;;;;;;15319:81;14987:423;14950:460;15447:2;15420:15;:24;15436:7;15420:24;;;;;;;;;;;;:29;;;;;;;;;;;;;;;;;;14794:662;;;;:::o;7105:368::-;7217:38;7231:5;7238:7;7247;7217:13;:38::i;:::-;7212:255;;7292:1;7275:19;;:5;:19;;;7271:186;;7344:7;7321:31;;;;;;;;;;;:::i;:::-;;;;;;;;7271:186;7425:7;7434;7398:44;;;;;;;;;;;;:::i;:::-;;;;;;;;7212:255;7105:368;;;:::o;1308:632:28:-;1364:13;1413:14;1450:1;1430:17;1441:5;1430:10;:17::i;:::-;:21;1413:38;;1465:20;1499:6;1488:18;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1465:41;;1520:11;1615:6;1611:2;1607:15;1599:6;1595:28;1588:35;;1650:247;1657:4;1650:247;;;1681:5;;;;;;;;1785:10;1780:2;1773:5;1769:14;1764:32;1759:3;1751:46;1841:2;1832:11;;;;;;:::i;:::-;;;;;1874:1;1865:5;:10;1650:247;1861:21;1650:247;1917:6;1910:13;;;;;1308:632;;;:::o;6401:272:20:-;6504:4;6558:1;6539:21;;:7;:21;;;;:127;;;;;6586:7;6577:16;;:5;:16;;;:52;;;;6597:32;6614:5;6621:7;6597:16;:32::i;:::-;6577:52;:88;;;;6658:7;6633:32;;:21;6646:7;6633:12;:21::i;:::-;:32;;;6577:88;6539:127;6520:146;;6401:272;;;;;:::o;29154:916:31:-;29207:7;29226:14;29243:1;29226:18;;29291:8;29282:5;:17;29278:103;;29328:8;29319:17;;;;;;:::i;:::-;;;;;29364:2;29354:12;;;;29278:103;29407:8;29398:5;:17;29394:103;;29444:8;29435:17;;;;;;:::i;:::-;;;;;29480:2;29470:12;;;;29394:103;29523:8;29514:5;:17;29510:103;;29560:8;29551:17;;;;;;:::i;:::-;;;;;29596:2;29586:12;;;;29510:103;29639:7;29630:5;:16;29626:100;;29675:7;29666:16;;;;;;:::i;:::-;;;;;29710:1;29700:11;;;;29626:100;29752:7;29743:5;:16;29739:100;;29788:7;29779:16;;;;;;:::i;:::-;;;;;29823:1;29813:11;;;;29739:100;29865:7;29856:5;:16;29852:100;;29901:7;29892:16;;;;;;:::i;:::-;;;;;29936:1;29926:11;;;;29852:100;29978:7;29969:5;:16;29965:66;;30015:1;30005:11;;;;29965:66;30057:6;30050:13;;;29154:916;;;:::o;-1:-1:-1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;7:75:37:-;40:6;73:2;67:9;57:19;;7:75;:::o;88:117::-;197:1;194;187:12;211:117;320:1;317;310:12;334:149;370:7;410:66;403:5;399:78;388:89;;334:149;;;:::o;489:120::-;561:23;578:5;561:23;:::i;:::-;554:5;551:34;541:62;;599:1;596;589:12;541:62;489:120;:::o;615:137::-;660:5;698:6;685:20;676:29;;714:32;740:5;714:32;:::i;:::-;615:137;;;;:::o;758:327::-;816:6;865:2;853:9;844:7;840:23;836:32;833:119;;;871:79;;:::i;:::-;833:119;991:1;1016:52;1060:7;1051:6;1040:9;1036:22;1016:52;:::i;:::-;1006:62;;962:116;758:327;;;;:::o;1091:90::-;1125:7;1168:5;1161:13;1154:21;1143:32;;1091:90;;;:::o;1187:109::-;1268:21;1283:5;1268:21;:::i;:::-;1263:3;1256:34;1187:109;;:::o;1302:210::-;1389:4;1427:2;1416:9;1412:18;1404:26;;1440:65;1502:1;1491:9;1487:17;1478:6;1440:65;:::i;:::-;1302:210;;;;:::o;1518:99::-;1570:6;1604:5;1598:12;1588:22;;1518:99;;;:::o;1623:169::-;1707:11;1741:6;1736:3;1729:19;1781:4;1776:3;1772:14;1757:29;;1623:169;;;;:::o;1798:139::-;1887:6;1882:3;1877;1871:23;1928:1;1919:6;1914:3;1910:16;1903:27;1798:139;;;:::o;1943:102::-;1984:6;2035:2;2031:7;2026:2;2019:5;2015:14;2011:28;2001:38;;1943:102;;;:::o;2051:377::-;2139:3;2167:39;2200:5;2167:39;:::i;:::-;2222:71;2286:6;2281:3;2222:71;:::i;:::-;2215:78;;2302:65;2360:6;2355:3;2348:4;2341:5;2337:16;2302:65;:::i;:::-;2392:29;2414:6;2392:29;:::i;:::-;2387:3;2383:39;2376:46;;2143:285;2051:377;;;;:::o;2434:313::-;2547:4;2585:2;2574:9;2570:18;2562:26;;2634:9;2628:4;2624:20;2620:1;2609:9;2605:17;2598:47;2662:78;2735:4;2726:6;2662:78;:::i;:::-;2654:86;;2434:313;;;;:::o;2753:77::-;2790:7;2819:5;2808:16;;2753:77;;;:::o;2836:122::-;2909:24;2927:5;2909:24;:::i;:::-;2902:5;2899:35;2889:63;;2948:1;2945;2938:12;2889:63;2836:122;:::o;2964:139::-;3010:5;3048:6;3035:20;3026:29;;3064:33;3091:5;3064:33;:::i;:::-;2964:139;;;;:::o;3109:329::-;3168:6;3217:2;3205:9;3196:7;3192:23;3188:32;3185:119;;;3223:79;;:::i;:::-;3185:119;3343:1;3368:53;3413:7;3404:6;3393:9;3389:22;3368:53;:::i;:::-;3358:63;;3314:117;3109:329;;;;:::o;3444:126::-;3481:7;3521:42;3514:5;3510:54;3499:65;;3444:126;;;:::o;3576:96::-;3613:7;3642:24;3660:5;3642:24;:::i;:::-;3631:35;;3576:96;;;:::o;3678:118::-;3765:24;3783:5;3765:24;:::i;:::-;3760:3;3753:37;3678:118;;:::o;3802:222::-;3895:4;3933:2;3922:9;3918:18;3910:26;;3946:71;4014:1;4003:9;3999:17;3990:6;3946:71;:::i;:::-;3802:222;;;;:::o;4030:122::-;4103:24;4121:5;4103:24;:::i;:::-;4096:5;4093:35;4083:63;;4142:1;4139;4132:12;4083:63;4030:122;:::o;4158:139::-;4204:5;4242:6;4229:20;4220:29;;4258:33;4285:5;4258:33;:::i;:::-;4158:139;;;;:::o;4303:474::-;4371:6;4379;4428:2;4416:9;4407:7;4403:23;4399:32;4396:119;;;4434:79;;:::i;:::-;4396:119;4554:1;4579:53;4624:7;4615:6;4604:9;4600:22;4579:53;:::i;:::-;4569:63;;4525:117;4681:2;4707:53;4752:7;4743:6;4732:9;4728:22;4707:53;:::i;:::-;4697:63;;4652:118;4303:474;;;;;:::o;4783:143::-;4879:6;4913:5;4907:12;4897:22;;4783:143;;;:::o;4932:213::-;5060:11;5094:6;5089:3;5082:19;5134:4;5129:3;5125:14;5110:29;;4932:213;;;;:::o;5151:161::-;5247:4;5270:3;5262:11;;5300:4;5295:3;5291:14;5283:22;;5151:161;;;:::o;5318:108::-;5395:24;5413:5;5395:24;:::i;:::-;5390:3;5383:37;5318:108;;:::o;5432:104::-;5477:7;5506:24;5524:5;5506:24;:::i;:::-;5495:35;;5432:104;;;:::o;5542:132::-;5635:32;5661:5;5635:32;:::i;:::-;5630:3;5623:45;5542:132;;:::o;5680:99::-;5751:21;5766:5;5751:21;:::i;:::-;5746:3;5739:34;5680:99;;:::o;5853:1422::-;5998:4;5993:3;5989:14;6088:4;6081:5;6077:16;6071:23;6107:63;6164:4;6159:3;6155:14;6141:12;6107:63;:::i;:::-;6013:167;6264:4;6257:5;6253:16;6247:23;6283:79;6356:4;6351:3;6347:14;6333:12;6283:79;:::i;:::-;6190:182;6455:4;6448:5;6444:16;6438:23;6474:79;6547:4;6542:3;6538:14;6524:12;6474:79;:::i;:::-;6382:181;6646:4;6639:5;6635:16;6629:23;6665:63;6722:4;6717:3;6713:14;6699:12;6665:63;:::i;:::-;6573:165;6829:4;6822:5;6818:16;6812:23;6848:63;6905:4;6900:3;6896:14;6882:12;6848:63;:::i;:::-;6748:173;7003:4;6996:5;6992:16;6986:23;7022:57;7073:4;7068:3;7064:14;7050:12;7022:57;:::i;:::-;6931:158;7176:4;7169:5;7165:16;7159:23;7195:63;7252:4;7247:3;7243:14;7229:12;7195:63;:::i;:::-;7099:169;5967:1308;5853:1422;;:::o;7281:295::-;7408:10;7429:104;7529:3;7521:6;7429:104;:::i;:::-;7565:4;7560:3;7556:14;7542:28;;7281:295;;;;:::o;7582:142::-;7681:4;7713;7708:3;7704:14;7696:22;;7582:142;;;:::o;7802:964::-;7979:3;8008:83;8085:5;8008:83;:::i;:::-;8107:115;8215:6;8210:3;8107:115;:::i;:::-;8100:122;;8246:85;8325:5;8246:85;:::i;:::-;8354:7;8385:1;8370:371;8395:6;8392:1;8389:13;8370:371;;;8471:6;8465:13;8498:121;8615:3;8600:13;8498:121;:::i;:::-;8491:128;;8642:89;8724:6;8642:89;:::i;:::-;8632:99;;8430:311;8417:1;8414;8410:9;8405:14;;8370:371;;;8374:14;8757:3;8750:10;;7984:782;;;7802:964;;;;:::o;8772:489::-;8973:4;9011:2;9000:9;8996:18;8988:26;;9060:9;9054:4;9050:20;9046:1;9035:9;9031:17;9024:47;9088:166;9249:4;9240:6;9088:166;:::i;:::-;9080:174;;8772:489;;;;:::o;9267:118::-;9354:24;9372:5;9354:24;:::i;:::-;9349:3;9342:37;9267:118;;:::o;9391:222::-;9484:4;9522:2;9511:9;9507:18;9499:26;;9535:71;9603:1;9592:9;9588:17;9579:6;9535:71;:::i;:::-;9391:222;;;;:::o;9619:619::-;9696:6;9704;9712;9761:2;9749:9;9740:7;9736:23;9732:32;9729:119;;;9767:79;;:::i;:::-;9729:119;9887:1;9912:53;9957:7;9948:6;9937:9;9933:22;9912:53;:::i;:::-;9902:63;;9858:117;10014:2;10040:53;10085:7;10076:6;10065:9;10061:22;10040:53;:::i;:::-;10030:63;;9985:118;10142:2;10168:53;10213:7;10204:6;10193:9;10189:22;10168:53;:::i;:::-;10158:63;;10113:118;9619:619;;;;;:::o;10244:329::-;10303:6;10352:2;10340:9;10331:7;10327:23;10323:32;10320:119;;;10358:79;;:::i;:::-;10320:119;10478:1;10503:53;10548:7;10539:6;10528:9;10524:22;10503:53;:::i;:::-;10493:63;;10449:117;10244:329;;;;:::o;10579:116::-;10649:21;10664:5;10649:21;:::i;:::-;10642:5;10639:32;10629:60;;10685:1;10682;10675:12;10629:60;10579:116;:::o;10701:133::-;10744:5;10782:6;10769:20;10760:29;;10798:30;10822:5;10798:30;:::i;:::-;10701:133;;;;:::o;10840:468::-;10905:6;10913;10962:2;10950:9;10941:7;10937:23;10933:32;10930:119;;;10968:79;;:::i;:::-;10930:119;11088:1;11113:53;11158:7;11149:6;11138:9;11134:22;11113:53;:::i;:::-;11103:63;;11059:117;11215:2;11241:50;11283:7;11274:6;11263:9;11259:22;11241:50;:::i;:::-;11231:60;;11186:115;10840:468;;;;;:::o;11314:117::-;11423:1;11420;11413:12;11437:117;11546:1;11543;11536:12;11560:180;11608:77;11605:1;11598:88;11705:4;11702:1;11695:15;11729:4;11726:1;11719:15;11746:281;11829:27;11851:4;11829:27;:::i;:::-;11821:6;11817:40;11959:6;11947:10;11944:22;11923:18;11911:10;11908:34;11905:62;11902:88;;;11970:18;;:::i;:::-;11902:88;12010:10;12006:2;11999:22;11789:238;11746:281;;:::o;12033:129::-;12067:6;12094:20;;:::i;:::-;12084:30;;12123:33;12151:4;12143:6;12123:33;:::i;:::-;12033:129;;;:::o;12168:307::-;12229:4;12319:18;12311:6;12308:30;12305:56;;;12341:18;;:::i;:::-;12305:56;12379:29;12401:6;12379:29;:::i;:::-;12371:37;;12463:4;12457;12453:15;12445:23;;12168:307;;;:::o;12481:148::-;12579:6;12574:3;12569;12556:30;12620:1;12611:6;12606:3;12602:16;12595:27;12481:148;;;:::o;12635:423::-;12712:5;12737:65;12753:48;12794:6;12753:48;:::i;:::-;12737:65;:::i;:::-;12728:74;;12825:6;12818:5;12811:21;12863:4;12856:5;12852:16;12901:3;12892:6;12887:3;12883:16;12880:25;12877:112;;;12908:79;;:::i;:::-;12877:112;12998:54;13045:6;13040:3;13035;12998:54;:::i;:::-;12718:340;12635:423;;;;;:::o;13077:338::-;13132:5;13181:3;13174:4;13166:6;13162:17;13158:27;13148:122;;13189:79;;:::i;:::-;13148:122;13306:6;13293:20;13331:78;13405:3;13397:6;13390:4;13382:6;13378:17;13331:78;:::i;:::-;13322:87;;13138:277;13077:338;;;;:::o;13421:943::-;13516:6;13524;13532;13540;13589:3;13577:9;13568:7;13564:23;13560:33;13557:120;;;13596:79;;:::i;:::-;13557:120;13716:1;13741:53;13786:7;13777:6;13766:9;13762:22;13741:53;:::i;:::-;13731:63;;13687:117;13843:2;13869:53;13914:7;13905:6;13894:9;13890:22;13869:53;:::i;:::-;13859:63;;13814:118;13971:2;13997:53;14042:7;14033:6;14022:9;14018:22;13997:53;:::i;:::-;13987:63;;13942:118;14127:2;14116:9;14112:18;14099:32;14158:18;14150:6;14147:30;14144:117;;;14180:79;;:::i;:::-;14144:117;14285:62;14339:7;14330:6;14319:9;14315:22;14285:62;:::i;:::-;14275:72;;14070:287;13421:943;;;;;;;:::o;14370:308::-;14432:4;14522:18;14514:6;14511:30;14508:56;;;14544:18;;:::i;:::-;14508:56;14582:29;14604:6;14582:29;:::i;:::-;14574:37;;14666:4;14660;14656:15;14648:23;;14370:308;;;:::o;14684:425::-;14762:5;14787:66;14803:49;14845:6;14803:49;:::i;:::-;14787:66;:::i;:::-;14778:75;;14876:6;14869:5;14862:21;14914:4;14907:5;14903:16;14952:3;14943:6;14938:3;14934:16;14931:25;14928:112;;;14959:79;;:::i;:::-;14928:112;15049:54;15096:6;15091:3;15086;15049:54;:::i;:::-;14768:341;14684:425;;;;;:::o;15129:340::-;15185:5;15234:3;15227:4;15219:6;15215:17;15211:27;15201:122;;15242:79;;:::i;:::-;15201:122;15359:6;15346:20;15384:79;15459:3;15451:6;15444:4;15436:6;15432:17;15384:79;:::i;:::-;15375:88;;15191:278;15129:340;;;;:::o;15475:799::-;15562:6;15570;15578;15627:2;15615:9;15606:7;15602:23;15598:32;15595:119;;;15633:79;;:::i;:::-;15595:119;15781:1;15770:9;15766:17;15753:31;15811:18;15803:6;15800:30;15797:117;;;15833:79;;:::i;:::-;15797:117;15938:63;15993:7;15984:6;15973:9;15969:22;15938:63;:::i;:::-;15928:73;;15724:287;16050:2;16076:53;16121:7;16112:6;16101:9;16097:22;16076:53;:::i;:::-;16066:63;;16021:118;16178:2;16204:53;16249:7;16240:6;16229:9;16225:22;16204:53;:::i;:::-;16194:63;;16149:118;15475:799;;;;;:::o;16280:474::-;16348:6;16356;16405:2;16393:9;16384:7;16380:23;16376:32;16373:119;;;16411:79;;:::i;:::-;16373:119;16531:1;16556:53;16601:7;16592:6;16581:9;16577:22;16556:53;:::i;:::-;16546:63;;16502:117;16658:2;16684:53;16729:7;16720:6;16709:9;16705:22;16684:53;:::i;:::-;16674:63;;16629:118;16280:474;;;;;:::o;16760:::-;16828:6;16836;16885:2;16873:9;16864:7;16860:23;16856:32;16853:119;;;16891:79;;:::i;:::-;16853:119;17011:1;17036:53;17081:7;17072:6;17061:9;17057:22;17036:53;:::i;:::-;17026:63;;16982:117;17138:2;17164:53;17209:7;17200:6;17189:9;17185:22;17164:53;:::i;:::-;17154:63;;17109:118;16760:474;;;;;:::o;17240:180::-;17288:77;17285:1;17278:88;17385:4;17382:1;17375:15;17409:4;17406:1;17399:15;17426:320;17470:6;17507:1;17501:4;17497:12;17487:22;;17554:1;17548:4;17544:12;17575:18;17565:81;;17631:4;17623:6;17619:17;17609:27;;17565:81;17693:2;17685:6;17682:14;17662:18;17659:38;17656:84;;17712:18;;:::i;:::-;17656:84;17477:269;17426:320;;;:::o;17752:180::-;17800:77;17797:1;17790:88;17897:4;17894:1;17887:15;17921:4;17918:1;17911:15;17938:194;17978:4;17998:20;18016:1;17998:20;:::i;:::-;17993:25;;18032:20;18050:1;18032:20;:::i;:::-;18027:25;;18076:1;18073;18069:9;18061:17;;18100:1;18094:4;18091:11;18088:37;;;18105:18;;:::i;:::-;18088:37;17938:194;;;;:::o;18138:191::-;18178:3;18197:20;18215:1;18197:20;:::i;:::-;18192:25;;18231:20;18249:1;18231:20;:::i;:::-;18226:25;;18274:1;18271;18267:9;18260:16;;18295:3;18292:1;18289:10;18286:36;;;18302:18;;:::i;:::-;18286:36;18138:191;;;;:::o;18335:180::-;18383:77;18380:1;18373:88;18480:4;18477:1;18470:15;18504:4;18501:1;18494:15;18521:233;18560:3;18583:24;18601:5;18583:24;:::i;:::-;18574:33;;18629:66;18622:5;18619:77;18616:103;;18699:18;;:::i;:::-;18616:103;18746:1;18739:5;18735:13;18728:20;;18521:233;;;:::o;18760:442::-;18909:4;18947:2;18936:9;18932:18;18924:26;;18960:71;19028:1;19017:9;19013:17;19004:6;18960:71;:::i;:::-;19041:72;19109:2;19098:9;19094:18;19085:6;19041:72;:::i;:::-;19123;19191:2;19180:9;19176:18;19167:6;19123:72;:::i;:::-;18760:442;;;;;;:::o;19208:174::-;19348:26;19344:1;19336:6;19332:14;19325:50;19208:174;:::o;19388:366::-;19530:3;19551:67;19615:2;19610:3;19551:67;:::i;:::-;19544:74;;19627:93;19716:3;19627:93;:::i;:::-;19745:2;19740:3;19736:12;19729:19;;19388:366;;;:::o;19760:419::-;19926:4;19964:2;19953:9;19949:18;19941:26;;20013:9;20007:4;20003:20;19999:1;19988:9;19984:17;19977:47;20041:131;20167:4;20041:131;:::i;:::-;20033:139;;19760:419;;;:::o;20185:167::-;20325:19;20321:1;20313:6;20309:14;20302:43;20185:167;:::o;20358:366::-;20500:3;20521:67;20585:2;20580:3;20521:67;:::i;:::-;20514:74;;20597:93;20686:3;20597:93;:::i;:::-;20715:2;20710:3;20706:12;20699:19;;20358:366;;;:::o;20730:419::-;20896:4;20934:2;20923:9;20919:18;20911:26;;20983:9;20977:4;20973:20;20969:1;20958:9;20954:17;20947:47;21011:131;21137:4;21011:131;:::i;:::-;21003:139;;20730:419;;;:::o;21155:332::-;21276:4;21314:2;21303:9;21299:18;21291:26;;21327:71;21395:1;21384:9;21380:17;21371:6;21327:71;:::i;:::-;21408:72;21476:2;21465:9;21461:18;21452:6;21408:72;:::i;:::-;21155:332;;;;;:::o;21493:171::-;21633:23;21629:1;21621:6;21617:14;21610:47;21493:171;:::o;21670:366::-;21812:3;21833:67;21897:2;21892:3;21833:67;:::i;:::-;21826:74;;21909:93;21998:3;21909:93;:::i;:::-;22027:2;22022:3;22018:12;22011:19;;21670:366;;;:::o;22042:419::-;22208:4;22246:2;22235:9;22231:18;22223:26;;22295:9;22289:4;22285:20;22281:1;22270:9;22266:17;22259:47;22323:131;22449:4;22323:131;:::i;:::-;22315:139;;22042:419;;;:::o;22467:644::-;22664:4;22702:3;22691:9;22687:19;22679:27;;22752:9;22746:4;22742:20;22738:1;22727:9;22723:17;22716:47;22780:78;22853:4;22844:6;22780:78;:::i;:::-;22772:86;;22868:72;22936:2;22925:9;22921:18;22912:6;22868:72;:::i;:::-;22950;23018:2;23007:9;23003:18;22994:6;22950:72;:::i;:::-;23032;23100:2;23089:9;23085:18;23076:6;23032:72;:::i;:::-;22467:644;;;;;;;:::o;23117:148::-;23219:11;23256:3;23241:18;;23117:148;;;;:::o;23271:390::-;23377:3;23405:39;23438:5;23405:39;:::i;:::-;23460:89;23542:6;23537:3;23460:89;:::i;:::-;23453:96;;23558:65;23616:6;23611:3;23604:4;23597:5;23593:16;23558:65;:::i;:::-;23648:6;23643:3;23639:16;23632:23;;23381:280;23271:390;;;;:::o;23667:435::-;23847:3;23869:95;23960:3;23951:6;23869:95;:::i;:::-;23862:102;;23981:95;24072:3;24063:6;23981:95;:::i;:::-;23974:102;;24093:3;24086:10;;23667:435;;;;;:::o;24108:171::-;24248:23;24244:1;24236:6;24232:14;24225:47;24108:171;:::o;24285:366::-;24427:3;24448:67;24512:2;24507:3;24448:67;:::i;:::-;24441:74;;24524:93;24613:3;24524:93;:::i;:::-;24642:2;24637:3;24633:12;24626:19;;24285:366;;;:::o;24657:419::-;24823:4;24861:2;24850:9;24846:18;24838:26;;24910:9;24904:4;24900:20;24896:1;24885:9;24881:17;24874:47;24938:131;25064:4;24938:131;:::i;:::-;24930:139;;24657:419;;;:::o;25082:169::-;25222:21;25218:1;25210:6;25206:14;25199:45;25082:169;:::o;25257:366::-;25399:3;25420:67;25484:2;25479:3;25420:67;:::i;:::-;25413:74;;25496:93;25585:3;25496:93;:::i;:::-;25614:2;25609:3;25605:12;25598:19;;25257:366;;;:::o;25629:419::-;25795:4;25833:2;25822:9;25818:18;25810:26;;25882:9;25876:4;25872:20;25868:1;25857:9;25853:17;25846:47;25910:131;26036:4;25910:131;:::i;:::-;25902:139;;25629:419;;;:::o;26054:177::-;26194:29;26190:1;26182:6;26178:14;26171:53;26054:177;:::o;26237:366::-;26379:3;26400:67;26464:2;26459:3;26400:67;:::i;:::-;26393:74;;26476:93;26565:3;26476:93;:::i;:::-;26594:2;26589:3;26585:12;26578:19;;26237:366;;;:::o;26609:419::-;26775:4;26813:2;26802:9;26798:18;26790:26;;26862:9;26856:4;26852:20;26848:1;26837:9;26833:17;26826:47;26890:131;27016:4;26890:131;:::i;:::-;26882:139;;26609:419;;;:::o;27034:221::-;27174:34;27170:1;27162:6;27158:14;27151:58;27243:4;27238:2;27230:6;27226:15;27219:29;27034:221;:::o;27261:366::-;27403:3;27424:67;27488:2;27483:3;27424:67;:::i;:::-;27417:74;;27500:93;27589:3;27500:93;:::i;:::-;27618:2;27613:3;27609:12;27602:19;;27261:366;;;:::o;27633:419::-;27799:4;27837:2;27826:9;27822:18;27814:26;;27886:9;27880:4;27876:20;27872:1;27861:9;27857:17;27850:47;27914:131;28040:4;27914:131;:::i;:::-;27906:139;;27633:419;;;:::o;28058:98::-;28109:6;28143:5;28137:12;28127:22;;28058:98;;;:::o;28162:168::-;28245:11;28279:6;28274:3;28267:19;28319:4;28314:3;28310:14;28295:29;;28162:168;;;;:::o;28336:373::-;28422:3;28450:38;28482:5;28450:38;:::i;:::-;28504:70;28567:6;28562:3;28504:70;:::i;:::-;28497:77;;28583:65;28641:6;28636:3;28629:4;28622:5;28618:16;28583:65;:::i;:::-;28673:29;28695:6;28673:29;:::i;:::-;28668:3;28664:39;28657:46;;28426:283;28336:373;;;;:::o;28715:640::-;28910:4;28948:3;28937:9;28933:19;28925:27;;28962:71;29030:1;29019:9;29015:17;29006:6;28962:71;:::i;:::-;29043:72;29111:2;29100:9;29096:18;29087:6;29043:72;:::i;:::-;29125;29193:2;29182:9;29178:18;29169:6;29125:72;:::i;:::-;29244:9;29238:4;29234:20;29229:2;29218:9;29214:18;29207:48;29272:76;29343:4;29334:6;29272:76;:::i;:::-;29264:84;;28715:640;;;;;;;:::o;29361:141::-;29417:5;29448:6;29442:13;29433:22;;29464:32;29490:5;29464:32;:::i;:::-;29361:141;;;;:::o;29508:349::-;29577:6;29626:2;29614:9;29605:7;29601:23;29597:32;29594:119;;;29632:79;;:::i;:::-;29594:119;29752:1;29777:63;29832:7;29823:6;29812:9;29808:22;29777:63;:::i;:::-;29767:73;;29723:127;29508:349;;;;:::o;29863:141::-;29912:4;29935:3;29927:11;;29958:3;29955:1;29948:14;29992:4;29989:1;29979:18;29971:26;;29863:141;;;:::o;30010:93::-;30047:6;30094:2;30089;30082:5;30078:14;30074:23;30064:33;;30010:93;;;:::o;30109:107::-;30153:8;30203:5;30197:4;30193:16;30172:37;;30109:107;;;;:::o;30222:393::-;30291:6;30341:1;30329:10;30325:18;30364:97;30394:66;30383:9;30364:97;:::i;:::-;30482:39;30512:8;30501:9;30482:39;:::i;:::-;30470:51;;30554:4;30550:9;30543:5;30539:21;30530:30;;30603:4;30593:8;30589:19;30582:5;30579:30;30569:40;;30298:317;;30222:393;;;;;:::o;30621:60::-;30649:3;30670:5;30663:12;;30621:60;;;:::o;30687:142::-;30737:9;30770:53;30788:34;30797:24;30815:5;30797:24;:::i;:::-;30788:34;:::i;:::-;30770:53;:::i;:::-;30757:66;;30687:142;;;:::o;30835:75::-;30878:3;30899:5;30892:12;;30835:75;;;:::o;30916:269::-;31026:39;31057:7;31026:39;:::i;:::-;31087:91;31136:41;31160:16;31136:41;:::i;:::-;31128:6;31121:4;31115:11;31087:91;:::i;:::-;31081:4;31074:105;30992:193;30916:269;;;:::o;31191:73::-;31236:3;31257:1;31250:8;;31191:73;:::o;31270:189::-;31347:32;;:::i;:::-;31388:65;31446:6;31438;31432:4;31388:65;:::i;:::-;31323:136;31270:189;;:::o;31465:186::-;31525:120;31542:3;31535:5;31532:14;31525:120;;;31596:39;31633:1;31626:5;31596:39;:::i;:::-;31569:1;31562:5;31558:13;31549:22;;31525:120;;;31465:186;;:::o;31657:543::-;31758:2;31753:3;31750:11;31747:446;;;31792:38;31824:5;31792:38;:::i;:::-;31876:29;31894:10;31876:29;:::i;:::-;31866:8;31862:44;32059:2;32047:10;32044:18;32041:49;;;32080:8;32065:23;;32041:49;32103:80;32159:22;32177:3;32159:22;:::i;:::-;32149:8;32145:37;32132:11;32103:80;:::i;:::-;31762:431;;31747:446;31657:543;;;:::o;32206:117::-;32260:8;32310:5;32304:4;32300:16;32279:37;;32206:117;;;;:::o;32329:169::-;32373:6;32406:51;32454:1;32450:6;32442:5;32439:1;32435:13;32406:51;:::i;:::-;32402:56;32487:4;32481;32477:15;32467:25;;32380:118;32329:169;;;;:::o;32503:295::-;32579:4;32725:29;32750:3;32744:4;32725:29;:::i;:::-;32717:37;;32787:3;32784:1;32780:11;32774:4;32771:21;32763:29;;32503:295;;;;:::o;32803:1395::-;32920:37;32953:3;32920:37;:::i;:::-;33022:18;33014:6;33011:30;33008:56;;;33044:18;;:::i;:::-;33008:56;33088:38;33120:4;33114:11;33088:38;:::i;:::-;33173:67;33233:6;33225;33219:4;33173:67;:::i;:::-;33267:1;33291:4;33278:17;;33323:2;33315:6;33312:14;33340:1;33335:618;;;;33997:1;34014:6;34011:77;;;34063:9;34058:3;34054:19;34048:26;34039:35;;34011:77;34114:67;34174:6;34167:5;34114:67;:::i;:::-;34108:4;34101:81;33970:222;33305:887;;33335:618;33387:4;33383:9;33375:6;33371:22;33421:37;33453:4;33421:37;:::i;:::-;33480:1;33494:208;33508:7;33505:1;33502:14;33494:208;;;33587:9;33582:3;33578:19;33572:26;33564:6;33557:42;33638:1;33630:6;33626:14;33616:24;;33685:2;33674:9;33670:18;33657:31;;33531:4;33528:1;33524:12;33519:17;;33494:208;;;33730:6;33721:7;33718:19;33715:179;;;33788:9;33783:3;33779:19;33773:26;33831:48;33873:4;33865:6;33861:17;33850:9;33831:48;:::i;:::-;33823:6;33816:64;33738:156;33715:179;33940:1;33936;33928:6;33924:14;33920:22;33914:4;33907:36;33342:611;;;33305:887;;32895:1303;;;32803:1395;;:::o;34204:167::-;34344:19;34340:1;34332:6;34328:14;34321:43;34204:167;:::o;34377:366::-;34519:3;34540:67;34604:2;34599:3;34540:67;:::i;:::-;34533:74;;34616:93;34705:3;34616:93;:::i;:::-;34734:2;34729:3;34725:12;34718:19;;34377:366;;;:::o;34749:419::-;34915:4;34953:2;34942:9;34938:18;34930:26;;35002:9;34996:4;34992:20;34988:1;34977:9;34973:17;34966:47;35030:131;35156:4;35030:131;:::i;:::-;35022:139;;34749:419;;;:::o;35174:332::-;35295:4;35333:2;35322:9;35318:18;35310:26;;35346:71;35414:1;35403:9;35399:17;35390:6;35346:71;:::i;:::-;35427:72;35495:2;35484:9;35480:18;35471:6;35427:72;:::i;:::-;35174:332;;;;;:::o;35512:180::-;35560:77;35557:1;35550:88;35657:4;35654:1;35647:15;35681:4;35678:1;35671:15",
    linkReferences: {},
  },
  methodIdentifiers: {
    "applyVoucher(uint256)": "f810e527",
    "approve(address,uint256)": "095ea7b3",
    "balanceOf(address)": "70a08231",
    "createMarketSale(uint256)": "be9af536",
    "createToken(string,uint256,uint256)": "bec2a7c5",
    "exists(uint256)": "4f558e79",
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
    '{"compiler":{"version":"0.8.28+commit.7893614a"},"language":"Solidity","output":{"abi":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address","name":"owner","type":"address"}],"name":"ERC721IncorrectOwner","type":"error"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ERC721InsufficientApproval","type":"error"},{"inputs":[{"internalType":"address","name":"approver","type":"address"}],"name":"ERC721InvalidApprover","type":"error"},{"inputs":[{"internalType":"address","name":"operator","type":"address"}],"name":"ERC721InvalidOperator","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"ERC721InvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"}],"name":"ERC721InvalidReceiver","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"}],"name":"ERC721InvalidSender","type":"error"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ERC721NonexistentToken","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_fromTokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_toTokenId","type":"uint256"}],"name":"BatchMetadataUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"ListingPriceUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"MetadataUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":true,"internalType":"address","name":"creator","type":"address"},{"indexed":false,"internalType":"string","name":"tokenURI","type":"string"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"discountValue","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"VoucherCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":true,"internalType":"address","name":"seller","type":"address"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"VoucherReselled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":true,"internalType":"address","name":"buyer","type":"address"},{"indexed":true,"internalType":"address","name":"seller","type":"address"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"VoucherSold","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"discountValue","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"VoucherUsed","type":"event"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"applyVoucher","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"createMarketSale","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"string","name":"tokenURI","type":"string"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"discountValue","type":"uint256"}],"name":"createToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"exists","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fetchMarketItems","outputs":[{"components":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"discountValue","type":"uint256"},{"internalType":"bool","name":"sold","type":"bool"},{"internalType":"uint256","name":"createdAt","type":"uint256"}],"internalType":"struct VoucherNFT.MarketItem[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fetchMyNFTs","outputs":[{"components":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"discountValue","type":"uint256"},{"internalType":"bool","name":"sold","type":"bool"},{"internalType":"uint256","name":"createdAt","type":"uint256"}],"internalType":"struct VoucherNFT.MarketItem[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getListingPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"listingPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"}],"name":"resellToken","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_listingPrice","type":"uint256"}],"name":"updateListingPrice","outputs":[],"stateMutability":"nonpayable","type":"function"}],"devdoc":{"errors":{"ERC721IncorrectOwner(address,uint256,address)":[{"details":"Indicates an error related to the ownership over a particular token. Used in transfers.","params":{"owner":"Address of the current owner of a token.","sender":"Address whose tokens are being transferred.","tokenId":"Identifier number of a token."}}],"ERC721InsufficientApproval(address,uint256)":[{"details":"Indicates a failure with the `operator`\\u2019s approval. Used in transfers.","params":{"operator":"Address that may be allowed to operate on tokens without being their owner.","tokenId":"Identifier number of a token."}}],"ERC721InvalidApprover(address)":[{"details":"Indicates a failure with the `approver` of a token to be approved. Used in approvals.","params":{"approver":"Address initiating an approval operation."}}],"ERC721InvalidOperator(address)":[{"details":"Indicates a failure with the `operator` to be approved. Used in approvals.","params":{"operator":"Address that may be allowed to operate on tokens without being their owner."}}],"ERC721InvalidOwner(address)":[{"details":"Indicates that an address can\'t be an owner. For example, `address(0)` is a forbidden owner in ERC-20. Used in balance queries.","params":{"owner":"Address of the current owner of a token."}}],"ERC721InvalidReceiver(address)":[{"details":"Indicates a failure with the token `receiver`. Used in transfers.","params":{"receiver":"Address to which tokens are being transferred."}}],"ERC721InvalidSender(address)":[{"details":"Indicates a failure with the token `sender`. Used in transfers.","params":{"sender":"Address whose tokens are being transferred."}}],"ERC721NonexistentToken(uint256)":[{"details":"Indicates a `tokenId` whose `owner` is the zero address.","params":{"tokenId":"Identifier number of a token."}}],"OwnableInvalidOwner(address)":[{"details":"The owner is not a valid owner account. (eg. `address(0)`)"}],"OwnableUnauthorizedAccount(address)":[{"details":"The caller account is not authorized to perform an operation."}]},"events":{"Approval(address,address,uint256)":{"details":"Emitted when `owner` enables `approved` to manage the `tokenId` token."},"ApprovalForAll(address,address,bool)":{"details":"Emitted when `owner` enables or disables (`approved`) `operator` to manage all of its assets."},"BatchMetadataUpdate(uint256,uint256)":{"details":"This event emits when the metadata of a range of tokens is changed. So that the third-party platforms such as NFT market could timely update the images and related attributes of the NFTs."},"MetadataUpdate(uint256)":{"details":"This event emits when the metadata of a token is changed. So that the third-party platforms such as NFT market could timely update the images and related attributes of the NFT."},"Transfer(address,address,uint256)":{"details":"Emitted when `tokenId` token is transferred from `from` to `to`."}},"kind":"dev","methods":{"approve(address,uint256)":{"details":"See {IERC721-approve}."},"balanceOf(address)":{"details":"See {IERC721-balanceOf}."},"getApproved(uint256)":{"details":"See {IERC721-getApproved}."},"isApprovedForAll(address,address)":{"details":"See {IERC721-isApprovedForAll}."},"name()":{"details":"See {IERC721Metadata-name}."},"owner()":{"details":"Returns the address of the current owner."},"ownerOf(uint256)":{"details":"See {IERC721-ownerOf}."},"renounceOwnership()":{"details":"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner."},"safeTransferFrom(address,address,uint256)":{"details":"See {IERC721-safeTransferFrom}."},"safeTransferFrom(address,address,uint256,bytes)":{"details":"See {IERC721-safeTransferFrom}."},"setApprovalForAll(address,bool)":{"details":"See {IERC721-setApprovalForAll}."},"supportsInterface(bytes4)":{"details":"See {IERC165-supportsInterface}"},"symbol()":{"details":"See {IERC721Metadata-symbol}."},"tokenURI(uint256)":{"details":"See {IERC721Metadata-tokenURI}."},"transferFrom(address,address,uint256)":{"details":"See {IERC721-transferFrom}."},"transferOwnership(address)":{"details":"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner."}},"version":1},"userdoc":{"kind":"user","methods":{},"version":1}},"settings":{"compilationTarget":{"src/VoucherNFT.sol":"VoucherNFT"},"evmVersion":"cancun","libraries":{},"metadata":{"bytecodeHash":"ipfs"},"optimizer":{"enabled":false,"runs":200},"remappings":[":@openzeppelin/=lib/openzeppelin-contracts/",":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",":forge-std/=lib/forge-std/src/",":halmos-cheatcodes/=lib/openzeppelin-contracts/lib/halmos-cheatcodes/src/",":openzeppelin-contracts/=lib/openzeppelin-contracts/"]},"sources":{"lib/openzeppelin-contracts/contracts/access/Ownable.sol":{"keccak256":"0xff6d0bb2e285473e5311d9d3caacb525ae3538a80758c10649a4d61029b017bb","license":"MIT","urls":["bzz-raw://8ed324d3920bb545059d66ab97d43e43ee85fd3bd52e03e401f020afb0b120f6","dweb:/ipfs/QmfEckWLmZkDDcoWrkEvMWhms66xwTLff9DDhegYpvHo1a"]},"lib/openzeppelin-contracts/contracts/interfaces/IERC165.sol":{"keccak256":"0xde7e9fd9aee8d4f40772f96bb3b58836cbc6dfc0227014a061947f8821ea9724","license":"MIT","urls":["bzz-raw://11fea9f8bc98949ac6709f0c1699db7430d2948137aa94d5a9e95a91f61a710a","dweb:/ipfs/QmQdfRXxQjwP6yn3DVo1GHPpriKNcFghSPi94Z1oKEFUNS"]},"lib/openzeppelin-contracts/contracts/interfaces/IERC4906.sol":{"keccak256":"0x1b8691e244f6e11d987459993671db0af33e6a29f7805eac6a9925cc6b601957","license":"MIT","urls":["bzz-raw://a9e2a5efc2e14e98f5fe91bbab769199b4987a40dd3b96075b04957fda2ae80f","dweb:/ipfs/QmbAjrSSVBiJ6MbgF7Jkr53m674iGMZ6haWbbRrWDZJraK"]},"lib/openzeppelin-contracts/contracts/interfaces/IERC721.sol":{"keccak256":"0xc4d7ebf63eb2f6bf3fee1b6c0ee775efa9f31b4843a5511d07eea147e212932d","license":"MIT","urls":["bzz-raw://01c66a2fad66bc710db7510419a7eee569b40b67cd9f01b70a3fc90d6f76c03b","dweb:/ipfs/QmT1CjJZq4eTNA4nu8E9ZrWfaZu6ReUsDbjcK8DbEFqwx5"]},"lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol":{"keccak256":"0x880da465c203cec76b10d72dbd87c80f387df4102274f23eea1f9c9b0918792b","license":"MIT","urls":["bzz-raw://399594cd8bb0143bc9e55e0f1d071d0d8c850a394fb7a319d50edd55d9ed822b","dweb:/ipfs/QmbPZzgtT6LEm9CMqWfagQFwETbV1ztpECBB1DtQHrKiRz"]},"lib/openzeppelin-contracts/contracts/token/ERC721/ERC721.sol":{"keccak256":"0x39ed367e54765186281efcfe83e47cf0ad62cc879f10e191360712507125f29a","license":"MIT","urls":["bzz-raw://2c5ae6d85bd48cca8d6d2fcec8c63efd86f56f8a5832577a47e403ce0e65cb09","dweb:/ipfs/QmUtcS8AbRSWhuc61puYet58os8FvSqm329ChoW8wwZXZk"]},"lib/openzeppelin-contracts/contracts/token/ERC721/IERC721.sol":{"keccak256":"0x5dc63d1c6a12fe1b17793e1745877b2fcbe1964c3edfd0a482fac21ca8f18261","license":"MIT","urls":["bzz-raw://6b7f97c5960a50fd1822cb298551ffc908e37b7893a68d6d08bce18a11cb0f11","dweb:/ipfs/QmQQvxBytoY1eBt3pRQDmvH2hZ2yjhs12YqVfzGm7KSURq"]},"lib/openzeppelin-contracts/contracts/token/ERC721/IERC721Receiver.sol":{"keccak256":"0xb5afb8e8eebc4d1c6404df2f5e1e6d2c3d24fd01e5dfc855314951ecfaae462d","license":"MIT","urls":["bzz-raw://78586466c424f076c6a2a551d848cfbe3f7c49e723830807598484a1047b3b34","dweb:/ipfs/Qmb717ovcFxm7qgNKEShiV6M9SPR3v1qnNpAGH84D6w29p"]},"lib/openzeppelin-contracts/contracts/token/ERC721/extensions/ERC721URIStorage.sol":{"keccak256":"0x2b27b58570ff2456c7e65022a356c7e4f205bfabf95d0e870855a86587bb1356","license":"MIT","urls":["bzz-raw://d51268bd4266abe09ec07cac04b84c63ed97d2f847fd821e681428b1df7991b1","dweb:/ipfs/QmQBHj8tsrtiXBdegQZeqcxmBEQd2PMzPSKQ5jUELedEHb"]},"lib/openzeppelin-contracts/contracts/token/ERC721/extensions/IERC721Metadata.sol":{"keccak256":"0x37d1aaaa5a2908a09e9dcf56a26ddf762ecf295afb5964695937344fc6802ce1","license":"MIT","urls":["bzz-raw://ed0bfc1b92153c5000e50f4021367b931bbe96372ac6facec3c4961b72053d02","dweb:/ipfs/Qmbwp8VDerjS5SV1quwHH1oMXxPQ93fzfLVqJ2RCqbowGE"]},"lib/openzeppelin-contracts/contracts/token/ERC721/utils/ERC721Utils.sol":{"keccak256":"0xddab643169f47a2c5291afafcbfdca045d9e6835553307d090bc048b6dabd0ac","license":"MIT","urls":["bzz-raw://d0ffbacfee42977167b3c75bd4787f8b72a7ab1176abd544f3dff662c6528e24","dweb:/ipfs/QmUprM1cWCyaQ3LDjHA2DhwiPs3wekQ6MWXHFZdMMxpcyX"]},"lib/openzeppelin-contracts/contracts/utils/Context.sol":{"keccak256":"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2","license":"MIT","urls":["bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12","dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF"]},"lib/openzeppelin-contracts/contracts/utils/Panic.sol":{"keccak256":"0xf7fe324703a64fc51702311dc51562d5cb1497734f074e4f483bfb6717572d7a","license":"MIT","urls":["bzz-raw://c6a5ff4f9fd8649b7ee20800b7fa387d3465bd77cf20c2d1068cd5c98e1ed57a","dweb:/ipfs/QmVSaVJf9FXFhdYEYeCEfjMVHrxDh5qL4CGkxdMWpQCrqG"]},"lib/openzeppelin-contracts/contracts/utils/Strings.sol":{"keccak256":"0x81c274a60a7ae232ae3dc9ff3a4011b4849a853c13b0832cd3351bb1bb2f0dae","license":"MIT","urls":["bzz-raw://9da0c20dc74358a2a76330818f3bac9d1e2ce3371aec847b9cbf5d147fbae4f6","dweb:/ipfs/QmeczhmnFv1hbXKGLwbYXY6Rrytc9a5A2YaRi5QMMgjPnb"]},"lib/openzeppelin-contracts/contracts/utils/introspection/ERC165.sol":{"keccak256":"0xddce8e17e3d3f9ed818b4f4c4478a8262aab8b11ed322f1bf5ed705bb4bd97fa","license":"MIT","urls":["bzz-raw://8084aa71a4cc7d2980972412a88fe4f114869faea3fefa5436431644eb5c0287","dweb:/ipfs/Qmbqfs5dRdPvHVKY8kTaeyc65NdqXRQwRK7h9s5UJEhD1p"]},"lib/openzeppelin-contracts/contracts/utils/introspection/IERC165.sol":{"keccak256":"0x79796192ec90263f21b464d5bc90b777a525971d3de8232be80d9c4f9fb353b8","license":"MIT","urls":["bzz-raw://f6fda447a62815e8064f47eff0dd1cf58d9207ad69b5d32280f8d7ed1d1e4621","dweb:/ipfs/QmfDRc7pxfaXB2Dh9np5Uf29Na3pQ7tafRS684wd3GLjVL"]},"lib/openzeppelin-contracts/contracts/utils/math/Math.sol":{"keccak256":"0x1225214420c83ebcca88f2ae2b50f053aaa7df7bd684c3e878d334627f2edfc6","license":"MIT","urls":["bzz-raw://6c5fab4970634f9ab9a620983dc1c8a30153981a0b1a521666e269d0a11399d3","dweb:/ipfs/QmVRnBC575MESGkEHndjujtR7qub2FzU9RWy9eKLp4hPZB"]},"lib/openzeppelin-contracts/contracts/utils/math/SafeCast.sol":{"keccak256":"0x195533c86d0ef72bcc06456a4f66a9b941f38eb403739b00f21fd7c1abd1ae54","license":"MIT","urls":["bzz-raw://b1d578337048cad08c1c03041cca5978eff5428aa130c781b271ad9e5566e1f8","dweb:/ipfs/QmPFKL2r9CBsMwmUqqdcFPfHZB2qcs9g1HDrPxzWSxomvy"]},"lib/openzeppelin-contracts/contracts/utils/math/SignedMath.sol":{"keccak256":"0xb1970fac7b64e6c09611e6691791e848d5e3fe410fa5899e7df2e0afd77a99e3","license":"MIT","urls":["bzz-raw://db5fbb3dddd8b7047465b62575d96231ba8a2774d37fb4737fbf23340fabbb03","dweb:/ipfs/QmVUSvooZKEdEdap619tcJjTLcAuH6QBdZqAzWwnAXZAWJ"]},"src/VoucherNFT.sol":{"keccak256":"0xada4f9dd4f39e8e776b5ccccf400f9f0b7af7eb7887447623caa1186e6c0eb32","license":"MIT","urls":["bzz-raw://89c28963634348ced26556e51f1cd110f7546a7fe7b96b292a9fe3ff8059d725","dweb:/ipfs/QmZAmoMyVNhsd7M4vdFDiXXYRVR1m83YGJPEyv1NPTSDZj"]}},"version":1}',
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
              name: "newPrice",
              type: "uint256",
              indexed: false,
            },
          ],
          type: "event",
          name: "ListingPriceUpdated",
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
              name: "creator",
              type: "address",
              indexed: true,
            },
            {
              internalType: "string",
              name: "tokenURI",
              type: "string",
              indexed: false,
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
            {
              internalType: "uint256",
              name: "timestamp",
              type: "uint256",
              indexed: false,
            },
          ],
          type: "event",
          name: "VoucherCreated",
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
              name: "price",
              type: "uint256",
              indexed: false,
            },
            {
              internalType: "uint256",
              name: "timestamp",
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
              name: "buyer",
              type: "address",
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
              name: "price",
              type: "uint256",
              indexed: false,
            },
            {
              internalType: "uint256",
              name: "timestamp",
              type: "uint256",
              indexed: false,
            },
          ],
          type: "event",
          name: "VoucherSold",
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
            {
              internalType: "uint256",
              name: "timestamp",
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
          inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
          name: "exists",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
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
          "0xada4f9dd4f39e8e776b5ccccf400f9f0b7af7eb7887447623caa1186e6c0eb32",
        urls: [
          "bzz-raw://89c28963634348ced26556e51f1cd110f7546a7fe7b96b292a9fe3ff8059d725",
          "dweb:/ipfs/QmZAmoMyVNhsd7M4vdFDiXXYRVR1m83YGJPEyv1NPTSDZj",
        ],
        license: "MIT",
      },
    },
    version: 1,
  },
  id: 36,
};
