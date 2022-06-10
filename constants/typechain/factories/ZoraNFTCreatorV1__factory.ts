/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers'
import type { Provider, TransactionRequest } from '@ethersproject/providers'
import type { ZoraNFTCreatorV1, ZoraNFTCreatorV1Interface } from '../ZoraNFTCreatorV1'

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_implementation',
        type: 'address',
      },
      {
        internalType: 'contract EditionMetadataRenderer',
        name: '_editionMetadataRenderer',
        type: 'address',
      },
      {
        internalType: 'contract DropMetadataRenderer',
        name: '_dropMetadataRenderer',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'previousAdmin',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'newAdmin',
        type: 'address',
      },
    ],
    name: 'AdminChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'beacon',
        type: 'address',
      },
    ],
    name: 'BeaconUpgraded',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'creator',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'editionContractAddress',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'editionSize',
        type: 'uint256',
      },
    ],
    name: 'CreatedDrop',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'implementation',
        type: 'address',
      },
    ],
    name: 'Upgraded',
    type: 'event',
  },
  {
    inputs: [],
    name: 'contractVersion',
    outputs: [
      {
        internalType: 'uint32',
        name: '',
        type: 'uint32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'symbol',
        type: 'string',
      },
      {
        internalType: 'address',
        name: 'defaultAdmin',
        type: 'address',
      },
      {
        internalType: 'uint64',
        name: 'editionSize',
        type: 'uint64',
      },
      {
        internalType: 'uint16',
        name: 'royaltyBPS',
        type: 'uint16',
      },
      {
        internalType: 'address payable',
        name: 'fundsRecipient',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'uint104',
            name: 'publicSalePrice',
            type: 'uint104',
          },
          {
            internalType: 'uint32',
            name: 'maxSalePurchasePerAddress',
            type: 'uint32',
          },
          {
            internalType: 'uint64',
            name: 'publicSaleStart',
            type: 'uint64',
          },
          {
            internalType: 'uint64',
            name: 'publicSaleEnd',
            type: 'uint64',
          },
          {
            internalType: 'uint64',
            name: 'presaleStart',
            type: 'uint64',
          },
          {
            internalType: 'uint64',
            name: 'presaleEnd',
            type: 'uint64',
          },
          {
            internalType: 'bytes32',
            name: 'presaleMerkleRoot',
            type: 'bytes32',
          },
        ],
        internalType: 'struct IERC721Drop.SalesConfiguration',
        name: 'saleConfig',
        type: 'tuple',
      },
      {
        internalType: 'string',
        name: 'metadataURIBase',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'metadataContractURI',
        type: 'string',
      },
    ],
    name: 'createDrop',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'symbol',
        type: 'string',
      },
      {
        internalType: 'uint64',
        name: 'editionSize',
        type: 'uint64',
      },
      {
        internalType: 'uint16',
        name: 'royaltyBPS',
        type: 'uint16',
      },
      {
        internalType: 'address payable',
        name: 'fundsRecipient',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'defaultAdmin',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'uint104',
            name: 'publicSalePrice',
            type: 'uint104',
          },
          {
            internalType: 'uint32',
            name: 'maxSalePurchasePerAddress',
            type: 'uint32',
          },
          {
            internalType: 'uint64',
            name: 'publicSaleStart',
            type: 'uint64',
          },
          {
            internalType: 'uint64',
            name: 'publicSaleEnd',
            type: 'uint64',
          },
          {
            internalType: 'uint64',
            name: 'presaleStart',
            type: 'uint64',
          },
          {
            internalType: 'uint64',
            name: 'presaleEnd',
            type: 'uint64',
          },
          {
            internalType: 'bytes32',
            name: 'presaleMerkleRoot',
            type: 'bytes32',
          },
        ],
        internalType: 'struct IERC721Drop.SalesConfiguration',
        name: 'saleConfig',
        type: 'tuple',
      },
      {
        internalType: 'string',
        name: 'description',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'animationURI',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'imageURI',
        type: 'string',
      },
    ],
    name: 'createEdition',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'dropMetadataRenderer',
    outputs: [
      {
        internalType: 'contract DropMetadataRenderer',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'editionMetadataRenderer',
    outputs: [
      {
        internalType: 'contract EditionMetadataRenderer',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'implementation',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newImplementation',
        type: 'address',
      },
    ],
    name: 'isValidUpgrade',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'proxiableUUID',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newImplementation',
        type: 'address',
      },
    ],
    name: 'upgradeTo',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newImplementation',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'upgradeToAndCall',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
]

const _bytecode =
  '0x610120604052306080523480156200001657600080fd5b50604051620024f2380380620024f283398101604081905262000039916200017e565b600160a05260408051808201909152601381527243616e6e6f742062652030206164647265737360681b60208201526001600160a01b0384166200009b5760405162461bcd60e51b8152600401620000929190620001d2565b60405180910390fd5b5060408051808201909152601381527243616e6e6f742062652030206164647265737360681b60208201526001600160a01b038316620000f05760405162461bcd60e51b8152600401620000929190620001d2565b5060408051808201909152601381527243616e6e6f742062652030206164647265737360681b60208201526001600160a01b038216620001455760405162461bcd60e51b8152600401620000929190620001d2565b506001600160a01b0392831660c05290821660e05216610100526200022a565b6001600160a01b03811681146200017b57600080fd5b50565b6000806000606084860312156200019457600080fd5b8351620001a18162000165565b6020850151909350620001b48162000165565b6040850151909250620001c78162000165565b809150509250925092565b600060208083528351808285015260005b818110156200020157858101830151858201604001528201620001e3565b8181111562000214576000604083870101525b50601f01601f1916929092016040019392505050565b60805160a05160c05160e05161010051612252620002a0600039600081816101a70152610868015260008181610251015261053301526000818161021b0152610caf0152600061030001526000818161035b015281816103f7015281816105740152818161060c015261070e01526122526000f3fe608060405260043610620000ef5760003560e01c8063686ce43511620000895780638129fc1c11620000605780638129fc1c14620002b05780638da5cb5b14620002c8578063a0a8e46014620002e8578063f2fde38b146200032b57600080fd5b8063686ce435146200023d578063715018a6146200027357806371525d8c146200028b57600080fd5b80634abde72911620000ca5780634abde72914620001935780634f1ef28614620001c957806352d1902d14620001e05780635c60da1b146200020757600080fd5b80633659cfe614620000f457806337073887146200011b5780633857fb131462000155575b600080fd5b3480156200010157600080fd5b506200011962000113366004620012c1565b62000350565b005b3480156200012857600080fd5b50620001406200013a366004620012c1565b50600090565b60405190151581526020015b60405180910390f35b3480156200016257600080fd5b506200017a62000174366004620014cb565b620004fb565b6040516001600160a01b0390911681526020016200014c565b348015620001a057600080fd5b506200017a7f000000000000000000000000000000000000000000000000000000000000000081565b62000119620001da3660046200160e565b62000569565b348015620001ed57600080fd5b50620001f862000701565b6040519081526020016200014c565b3480156200021457600080fd5b506200017a7f000000000000000000000000000000000000000000000000000000000000000081565b3480156200024a57600080fd5b506200017a7f000000000000000000000000000000000000000000000000000000000000000081565b3480156200028057600080fd5b5062000119620007c8565b3480156200029857600080fd5b506200017a620002aa36600462001679565b62000832565b348015620002bd57600080fd5b50620001196200089d565b348015620002d557600080fd5b506033546001600160a01b03166200017a565b348015620002f557600080fd5b5060405163ffffffff7f00000000000000000000000000000000000000000000000000000000000000001681526020016200014c565b3480156200033857600080fd5b50620001196200034a366004620012c1565b620009b8565b306001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161415620003f55760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f64656c656761746563616c6c000000000000000000000000000000000000000060648201526084015b60405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316620004517f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b6001600160a01b031614620004cf5760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f6163746976652070726f787900000000000000000000000000000000000000006064820152608401620003ec565b620004da8162000a9d565b60408051600080825260208201909252620004f89183919062000af9565b50565b6000808483856040516020016200051593929190620017f0565b6040516020818303038152906040529050620005598c8c898d8d8d8c7f00000000000000000000000000000000000000000000000000000000000000008962000caa565b9c9b505050505050505050505050565b306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614156200060a5760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f64656c656761746563616c6c00000000000000000000000000000000000000006064820152608401620003ec565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316620006667f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b6001600160a01b031614620006e45760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f6163746976652070726f787900000000000000000000000000000000000000006064820152608401620003ec565b620006ef8262000a9d565b620006fd8282600162000af9565b5050565b6000306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614620007a35760405162461bcd60e51b815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c60448201527f6c6564207468726f7567682064656c656761746563616c6c00000000000000006064820152608401620003ec565b507f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc90565b6033546001600160a01b03163314620008245760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401620003ec565b62000830600062000deb565b565b60008083836040516020016200084a92919062001839565b60405160208183030381529060405290506200088e8b8b8b8b8b8b8b7f00000000000000000000000000000000000000000000000000000000000000008962000caa565b9b9a5050505050505050505050565b600054610100900460ff16620008ba5760005460ff1615620008be565b303b155b620009325760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a65640000000000000000000000000000000000006064820152608401620003ec565b600054610100900460ff161580156200097257600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000166101011790555b6200097c62000e55565b6200098662000ede565b8015620004f857600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff16905550565b6033546001600160a01b0316331462000a145760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401620003ec565b6001600160a01b03811662000a925760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401620003ec565b620004f88162000deb565b6033546001600160a01b03163314620004f85760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401620003ec565b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff161562000b345762000b2f8362000f5d565b505050565b826001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa92505050801562000b91575060408051601f3d908101601f1916820190925262000b8e9181019062001862565b60015b62000c055760405162461bcd60e51b815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201527f6f6e206973206e6f7420555550530000000000000000000000000000000000006064820152608401620003ec565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc811462000c9c5760405162461bcd60e51b815260206004820152602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f7860448201527f6961626c655555494400000000000000000000000000000000000000000000006064820152608401620003ec565b5062000b2f83838362001035565b6000807f000000000000000000000000000000000000000000000000000000000000000060405162000cdc906200128b565b6001600160a01b039091168152604060208201819052600090820152606001604051809103906000f08015801562000d18573d6000803e3d6000fd5b5090506000819050806001600160a01b031663faff3c708d8d8d8b8e8e8d8d8d6040518a63ffffffff1660e01b815260040162000d5e999897969594939291906200187c565b600060405180830381600087803b15801562000d7957600080fd5b505af115801562000d8e573d6000803e3d6000fd5b505060405167ffffffffffffffff8c1681526001600160a01b03841692503391507fad59ebba8bfb06ba01a615a611467ca3bef86a275bd5e9704d3b295112550ba59060200160405180910390a39b9a5050505050505050505050565b603380546001600160a01b038381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff1662000ed45760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e670000000000000000000000000000000000000000006064820152608401620003ec565b6200083062001066565b600054610100900460ff16620008305760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e670000000000000000000000000000000000000000006064820152608401620003ec565b6001600160a01b0381163b62000fdc5760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201527f6f74206120636f6e7472616374000000000000000000000000000000000000006064820152608401620003ec565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0392909216919091179055565b6200104083620010f0565b6000825111806200104e5750805b1562000b2f5762001060838362001132565b50505050565b600054610100900460ff16620010e55760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e670000000000000000000000000000000000000000006064820152608401620003ec565b620008303362000deb565b620010fb8162000f5d565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606001600160a01b0383163b620011b35760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f60448201527f6e747261637400000000000000000000000000000000000000000000000000006064820152608401620003ec565b600080846001600160a01b031684604051620011d0919062001970565b600060405180830381855af49150503d80600081146200120d576040519150601f19603f3d011682016040523d82523d6000602084013e62001212565b606091505b50915091506200123d8282604051806060016040528060278152602001620021f66027913962001246565b95945050505050565b606083156200125757508162001284565b825115620012685782518084602001fd5b8160405162461bcd60e51b8152600401620003ec91906200198e565b9392505050565b61085280620019a483390190565b6001600160a01b0381168114620004f857600080fd5b8035620012bc8162001299565b919050565b600060208284031215620012d457600080fd5b8135620012848162001299565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405160e0810167ffffffffffffffff81118282101715620013365762001336620012e1565b60405290565b600067ffffffffffffffff808411156200135a576200135a620012e1565b604051601f8501601f19908116603f01168101908282118183101715620013855762001385620012e1565b816040528093508581528686860111156200139f57600080fd5b858560208301376000602087830101525050509392505050565b600082601f830112620013cb57600080fd5b62001284838335602085016200133c565b803567ffffffffffffffff81168114620012bc57600080fd5b803561ffff81168114620012bc57600080fd5b803563ffffffff81168114620012bc57600080fd5b600060e082840312156200143057600080fd5b6200143a62001310565b905081356cffffffffffffffffffffffffff811681146200145a57600080fd5b81526200146a6020830162001408565b60208201526200147d60408301620013dc565b60408201526200149060608301620013dc565b6060820152620014a360808301620013dc565b6080820152620014b660a08301620013dc565b60a082015260c082013560c082015292915050565b6000806000806000806000806000806102008b8d031215620014ec57600080fd5b8a3567ffffffffffffffff808211156200150557600080fd5b620015138e838f01620013b9565b9b5060208d01359150808211156200152a57600080fd5b620015388e838f01620013b9565b9a506200154860408e01620013dc565b99506200155860608e01620013f5565b98506200156860808e01620012af565b97506200157860a08e01620012af565b9650620015898e60c08f016200141d565b95506101a08d0135915080821115620015a157600080fd5b620015af8e838f01620013b9565b94506101c08d0135915080821115620015c757600080fd5b620015d58e838f01620013b9565b93506101e08d0135915080821115620015ed57600080fd5b50620015fc8d828e01620013b9565b9150509295989b9194979a5092959850565b600080604083850312156200162257600080fd5b82356200162f8162001299565b9150602083013567ffffffffffffffff8111156200164c57600080fd5b8301601f810185136200165e57600080fd5b6200166f858235602084016200133c565b9150509250929050565b60008060008060008060008060006101e08a8c0312156200169957600080fd5b893567ffffffffffffffff80821115620016b257600080fd5b620016c08d838e01620013b9565b9a5060208c0135915080821115620016d757600080fd5b620016e58d838e01620013b9565b9950620016f560408d01620012af565b98506200170560608d01620013dc565b97506200171560808d01620013f5565b96506200172560a08d01620012af565b9550620017368d60c08e016200141d565b94506101a08c01359150808211156200174e57600080fd5b6200175c8d838e01620013b9565b93506101c08c01359150808211156200177457600080fd5b50620017838c828d01620013b9565b9150509295985092959850929598565b60005b83811015620017b057818101518382015260200162001796565b83811115620010605750506000910152565b60008151808452620017dc81602086016020860162001793565b601f01601f19169290920160200192915050565b606081526000620018056060830186620017c2565b8281036020840152620018198186620017c2565b905082810360408401526200182f8185620017c2565b9695505050505050565b6040815260006200184e6040830185620017c2565b82810360208401526200123d8185620017c2565b6000602082840312156200187557600080fd5b5051919050565b60006101e0808352620018928184018d620017c2565b90508281036020840152620018a8818c620017c2565b90506001600160a01b03808b166040850152808a1660608501525067ffffffffffffffff808916608085015261ffff881660a08501526cffffffffffffffffffffffffff87511660c085015263ffffffff60208801511660e08501528060408801511661010085015280606088015116610120850152806080880151166101408501528060a0880151166101608501525060c08601516101808401526200195b6101a08401866001600160a01b03169052565b8281036101c0840152620005598185620017c2565b600082516200198481846020870162001793565b9190910192915050565b602081526000620012846020830184620017c256fe60806040526040516108523803806108528339810160408190526100229161034d565b818161004f60017f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbd61041b565b60008051602061080b8339815191521461006b5761006b610440565b61007782826000610080565b505050506104a5565b610089836100b6565b6000825111806100965750805b156100b1576100af83836100f660201b6100291760201c565b505b505050565b6100bf81610122565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b606061011b838360405180606001604052806027815260200161082b602791396101e2565b9392505050565b610135816102c060201b6100551760201c565b61019c5760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b60648201526084015b60405180910390fd5b806101c160008051602061080b83398151915260001b6102cf60201b6100711760201c565b80546001600160a01b0319166001600160a01b039290921691909117905550565b60606001600160a01b0384163b61024a5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b6064820152608401610193565b600080856001600160a01b0316856040516102659190610456565b600060405180830381855af49150503d80600081146102a0576040519150601f19603f3d011682016040523d82523d6000602084013e6102a5565b606091505b5090925090506102b68282866102d2565b9695505050505050565b6001600160a01b03163b151590565b90565b606083156102e157508161011b565b8251156102f15782518084602001fd5b8160405162461bcd60e51b81526004016101939190610472565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561033c578181015183820152602001610324565b838111156100af5750506000910152565b6000806040838503121561036057600080fd5b82516001600160a01b038116811461037757600080fd5b60208401519092506001600160401b038082111561039457600080fd5b818501915085601f8301126103a857600080fd5b8151818111156103ba576103ba61030b565b604051601f8201601f19908116603f011681019083821181831017156103e2576103e261030b565b816040528281528860208487010111156103fb57600080fd5b61040c836020830160208801610321565b80955050505050509250929050565b60008282101561043b57634e487b7160e01b600052601160045260246000fd5b500390565b634e487b7160e01b600052600160045260246000fd5b60008251610468818460208701610321565b9190910192915050565b6020815260008251806020840152610491816040850160208701610321565b601f01601f19169190910160400192915050565b610357806104b46000396000f3fe60806040523661001357610011610017565b005b6100115b610027610022610074565b6100b9565b565b606061004e83836040518060600160405280602781526020016102fb602791396100dd565b9392505050565b73ffffffffffffffffffffffffffffffffffffffff163b151590565b90565b60006100b47f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b3660008037600080366000845af43d6000803e8080156100d8573d6000f35b3d6000fd5b606073ffffffffffffffffffffffffffffffffffffffff84163b610188576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f60448201527f6e7472616374000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6000808573ffffffffffffffffffffffffffffffffffffffff16856040516101b0919061028d565b600060405180830381855af49150503d80600081146101eb576040519150601f19603f3d011682016040523d82523d6000602084013e6101f0565b606091505b509150915061020082828661020a565b9695505050505050565b6060831561021957508161004e565b8251156102295782518084602001fd5b816040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161017f91906102a9565b60005b83811015610278578181015183820152602001610260565b83811115610287576000848401525b50505050565b6000825161029f81846020870161025d565b9190910192915050565b60208152600082518060208401526102c881604085016020870161025d565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220b76547697fda83e5f0b4980957aff7124665dcb9ff2d4c85d579d3afef1c94ea64736f6c634300080a0033360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220d62643cf9f0c1feb26c94b1834bc829514291bd6b84e0e66f03d231a85537bf064736f6c634300080a0033'

type ZoraNFTCreatorV1ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>

const isSuperArgs = (
  xs: ZoraNFTCreatorV1ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1

export class ZoraNFTCreatorV1__factory extends ContractFactory {
  constructor(...args: ZoraNFTCreatorV1ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args)
    } else {
      super(_abi, _bytecode, args[0])
    }
  }

  override deploy(
    _implementation: string,
    _editionMetadataRenderer: string,
    _dropMetadataRenderer: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ZoraNFTCreatorV1> {
    return super.deploy(
      _implementation,
      _editionMetadataRenderer,
      _dropMetadataRenderer,
      overrides || {}
    ) as Promise<ZoraNFTCreatorV1>
  }
  override getDeployTransaction(
    _implementation: string,
    _editionMetadataRenderer: string,
    _dropMetadataRenderer: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _implementation,
      _editionMetadataRenderer,
      _dropMetadataRenderer,
      overrides || {}
    )
  }
  override attach(address: string): ZoraNFTCreatorV1 {
    return super.attach(address) as ZoraNFTCreatorV1
  }
  override connect(signer: Signer): ZoraNFTCreatorV1__factory {
    return super.connect(signer) as ZoraNFTCreatorV1__factory
  }

  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): ZoraNFTCreatorV1Interface {
    return new utils.Interface(_abi) as ZoraNFTCreatorV1Interface
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ZoraNFTCreatorV1 {
    return new Contract(address, _abi, signerOrProvider) as ZoraNFTCreatorV1
  }
}