'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "65d8a026e9392e9a9356342944cd5443",
"index.html": "df38379add419422c65a8b953e17c3bf",
"/": "df38379add419422c65a8b953e17c3bf",
"main.dart.js": "6bd28613536d24ab79d8640e3292cf96",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "47bb5028d79b4dfba4ac7958d98abdc1",
"icons/Icon-196.png": "4f284106e27db4dbe14c3189bb6e1703",
"icons/Icon-512.png": "a8949b24a52a256f719b4dd0d347eaa7",
"manifest.json": "39efae02eb6cab4f64c9759432c8aa76",
".git/config": "4c51a335fe218d513ab9062d8992d089",
".git/objects/61/c58dc6188502cfc53ff7d42265eb5c6fba8b12": "70ac8e4c444b4d9f2d62be17623379b5",
".git/objects/0c/8dd38fa179169808cce623a6a0467204d84fb8": "98d7377e5aea79a37a08e42361ba8000",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/50/482a970688db65bf7561700776307004debd6b": "ea733b998e8686c8755ae79c2653c415",
".git/objects/9b/7991283a447006f8c49141bdb957067b2624e4": "5d0bcc42fa4ced2fdcf9b4fa47be39be",
".git/objects/9b/2bd8775df52795e2cc7ad712b03be612c35dda": "b887fa06aedef08abe64c321914ca059",
".git/objects/04/98296d4b56f488782fdcae04f73dfc5027245f": "3c5a59334118e8d89022bf1e0c316146",
".git/objects/6a/3e68da15877a8e092804b0413c24b39bda11c0": "09b61d04a35af1feac26ad9ae42ce9ef",
".git/objects/32/252bdf7c4b5e1d34a4089709338787cdc2b63c": "bd8c34806700e9a4675a95a0d8056053",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/51/c11f88d41a3528c93c2f1bc03838ce1ec749e7": "938df82d36342699866a2bb365525ce8",
".git/objects/58/845ad3390fcda17ac3d89825abca24536670ff": "657e19a92bf61776c5e6f1540b4d4e9d",
".git/objects/0e/a46e81ce15ccb1767a51aaf061963ad528efeb": "4e571e4a27c5bd49c4ce8009bdcac524",
".git/objects/34/546cfd71bba7591803ab164f91c4b742da17f9": "312bc28db164c68c7a5c4eaf91139747",
".git/objects/5f/5188e2fc9945478b5cf34599741934eae5f967": "db1f7d0480878143476c04220ef56cc6",
".git/objects/33/856bb8e406b90c22c9c61f06a5455f59c099bb": "d097c1787abd5141c52a5dbeae51a486",
".git/objects/05/ba2e59fd4ef3008e79cd4e3e3bc4931ac57898": "910cac8e95b00f5121e3bb4dceb601e2",
".git/objects/a4/57caa47c0e2c1476ece4662e8857973a1b9717": "f32fdddb243b2f21bd2a8c9a4d96a272",
".git/objects/a4/5a6c30712d2bd5d2e4c01ced74c790703684bc": "c8da8e658d4576abb87ea2ea3f5e652d",
".git/objects/a4/a9918dad10832bc8aaa5574d71fe15f089c8cb": "9636ed519a82aae2e1b6c48dcc421730",
".git/objects/a3/3e89230b18b0e7a3cbc190e07cdeb0d2a3a5b8": "7d4f8f8cbec6c28c9865fa968ac304f6",
".git/objects/b5/307c0e18318a282fa1d6c0d7409ef69a07b0fd": "88405affb4fb9b8e21e84f5b228a562b",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bb/3e3eaa4dd6dc5852918052ad9cddf390f692e1": "59dba6f5275f02f783510eaed7e8194e",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/be/1cb3aa560387bae728b36feac7b3cd0f14b2f0": "29102b355e5f26ea9e9facf1801d83df",
".git/objects/b4/a0e12c4276b5392956b41181f6c177d666b796": "4b105cf90fc4b5af0dd7a15c5182f30f",
".git/objects/bd/85fea5bb73abe728241b1c144f63fa1deeba7b": "d097d6adaca921efdf78d3eefe059e61",
".git/objects/d1/313d7d56803bc4e16b4699807f9e1ab265a1db": "cb6a871ca329defb16176dea1a83c7f8",
".git/objects/e2/84fa0052173742f608c4692ebb77239a93199e": "b05abe4e2aea8d4282185c7ffdf2e2e0",
".git/objects/e2/1bfd12c3c6fbb989a94fd5a42a42dd28318712": "366c17c83a38f7d0dbcf0558b5813e04",
".git/objects/f4/05ff20f97634534d1d84c19a243e928a69fdfd": "3995ab8e0f112476a9b3a14edc7d7556",
".git/objects/f3/d0f0c0ab9ba937219059d789b631145d02ddac": "c8f7ff91d5ee5699e27267dc81ff3853",
".git/objects/c0/052f6008b4f3a56f69c777bcfa7f4b9a2caf58": "c1edfa4875f00fec94c58fab1e1225c4",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/e4/9874dc866be3cc1009c9714ea2dff50ebf9da3": "7b1ab200ca33b96f0d45fa14cf229677",
".git/objects/c8/30cda7f6f82c376aaaf28f377140e1b9402dd3": "d42c7998dd2963c4c26267a5b520d12a",
".git/objects/c8/1e7db741108c17b7c2d339b51bd9d45bfdd979": "93ef31690b0cbc29ba4c6ec5442e898f",
".git/objects/c1/430129f9739ad27690229e1474ee4843b50d18": "3220c9434b62ee79a8d5d42a3b296b4b",
".git/objects/c1/840629a166118965286cae3ca8f4d6e2d9b5b8": "57987db273ca47dd3ca2d283d2ce309e",
".git/objects/c6/1348a3a03089d36860828fd695ff7373581feb": "4030742ae44395ff4491d101a371d0dc",
".git/objects/ec/0d30503d7cbf1d7dcc26b12318a1fa6bb0bedc": "888f65b2ae7646044c9a76d641ab979e",
".git/objects/ec/3f5ebfc5c1e1403007fd41d3a236e7b62c6a67": "fed5bce877473acd8e3405c2c260c2cf",
".git/objects/ec/9b1b00af40800fb639cec4c813e51a8dda5c9e": "89ac0529dc2ced9d300d65e82897eece",
".git/objects/27/f3849a867c87c7da06a7c3421a4db879d7f055": "1e0af3e4dd7b985d645eb19391c4906b",
".git/objects/11/26db6ce39170220a57cc936f427502c79c1c3c": "04d08abac56c603874597166beb42942",
".git/objects/11/235549dffce0b6882681d5ebfb6d3298f56a18": "c06358fd8e7630cfb33292f3710e8de1",
".git/objects/11/7375f0fef7a2f1f27501352d7b0cdcc50057d9": "711c3375ef447e276931b989a216951b",
".git/objects/7d/637887f97e8f3f5036ef2402c8539b28ea302c": "78feff2557c024ab74e08b939353874d",
".git/objects/7c/7719e520ce4f66cb258508ec7dcd08be119c05": "ce6590541ebc977369099448ffb74b72",
".git/objects/28/f3b8ead59710af2fdfce6a2a97e6d537d16ce7": "5fb26182f3dbbfbf0d4aacd3b7b5b098",
".git/objects/8a/cdbcca27093b1c5ff54c7b77623629955823b1": "8823e302fb46de86c3f28db0f34d0615",
".git/objects/19/4481f54df6f710fe6887574983d9bf84c1923e": "d8c139d6505c4622dfb9b5f398067968",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/26/6dd15549e8b66f7f6f2251ee18311aab26ddbe": "74ea0e2ff5e99bac8e7931b9c506c08a",
".git/objects/4d/e02b39481997e1dbae9d2c0a409d579e413065": "e9aa68efce865f4852caebf7bff640f3",
".git/objects/4d/4e650581ae2e20cd090a52ccf61043186c5c4f": "9847e801da89faed1635bb2bb4ad31ba",
".git/objects/75/3cd228af9efae16684386cd21786f310dbcd92": "de0fb35ccdc5f2e4a1c03b64a4e12e55",
".git/objects/81/bf3f7afd631a87988f635af0b24f9ac8fdd856": "7a551a609c20e506e042ffaccb77e04a",
".git/objects/72/6286e4524c798e13e7e7d258ff8b535c81c54b": "235caf58b1cb0d4919995ea513db01ee",
".git/objects/44/1400b18ce3fa1b2cfa6bfe5e58f562aa1e3aa9": "b116bb5be7a76d596256151ae2c41280",
".git/objects/9a/3396fc4364afffd1984813abb564d4509b6606": "ac1d3c71602eaec49cd45be17fee8374",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/5e/6a2a68e6fbae8395ff00923e4a49beba503822": "16cc930ac34ab6f38a5dadfdbdaed3d8",
".git/objects/5b/80eeed8168a91390c0bb3b270d2ab26c1e95d2": "feef37ad831a0b1b395c505e46a5a5bc",
".git/objects/01/da8a54afdc7a9ecc0bf5b3712223f252889c3f": "06e056c1fd59f8f2672424aad984e59f",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/99/7dcc3066d83f1a22a71af883a21d97cd394669": "98aa31d1be720b0d1191b69f1105a7c1",
".git/objects/63/5a43e7ad9696b346327d0ca7caeffeb3d24f8a": "274993f08cedfb1538072f855c53cf40",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/8b7d5561b0750138673b16f0715ffc9333cdaf": "8601a4da9e161ad571a224dfbb1bec2a",
".git/objects/ba/f072bd241b0c2fd9181c99fb240efa1ed855c6": "c15cdfa5932b6b2ef06f889fd88c079b",
".git/objects/a7/946ede8899a3feaa33fb3a8d778508c2df987b": "f597e320dbd5213effa38524926a23f5",
".git/objects/b8/980399a187551af7e9a17e4843904a002fdd0d": "9fffd25eb00314da167fa7480e34f51a",
".git/objects/b8/a1cb525b611d5bcb6313bc810ccbf06b00fef0": "80b2f1b078f39909ccab319f44d1831b",
".git/objects/b1/077801640e87c89ec1b12b85c8d01f3682389c": "8b5251e1b07a45f33c85bb8461e0d570",
".git/objects/b1/d7b6c64360a6227f95607df702bf0e28f5ae8d": "71e4c4fc240834f6e270e9fa6b5d7f3c",
".git/objects/dc/20a8521ee0ec2eb29959ced507e7df3e438870": "5effc1b1d80887f89d1d97eda0e95ff0",
".git/objects/a9/8aa6c228f4696f37170d4026ec02449f78f737": "f1e738e6159cd3ef4e5de7ccf1f27a6f",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/aa/141f2784222a94060c54895e5ff65a5d192ff9": "01b712cc56fe73fdec738905b948ff65",
".git/objects/af/2bfbb327eeb1c9554a4bece1224ed0c3e179de": "0643a64f5c8e528e55e7da4f6dc8dc8b",
".git/objects/b7/11e6e5c7a635c9b14527bb056db0f0a712f129": "b9015f275aca75d518405b5222d120d2",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/b9/74371201e79b965167befa518d4978aee1563f": "9199f2a33b56bc23abbca3f98ef57a55",
".git/objects/e1/c20511a45e7d195c51ac903ef329f8ec58f57a": "9a921c984ab22eec9d2994a1a664afea",
".git/objects/cd/607617fbafbe4800f4dd14af0aeadf01220b50": "16182f59e4f1203b92c49cea7cb7210b",
".git/objects/cd/ccaceccfd3c1f3dd3b94609909e05e905fcede": "37adec7b33d17b0d215efbb0d6ce1d53",
".git/objects/cc/b8e2471a5c5d1f06508970f34f6d220cb092ab": "c7b3c3492023708195bdfd25e45339d3",
".git/objects/cc/4d8d2761585501da185040927fe5a5932cdde6": "0c204d850bf42c0d72e3a879f7ef2a4c",
".git/objects/e6/ec47d45d380ee8319874cdaf8074188b301649": "5de0d6ea0ee7dbdfe89e91b4be378556",
".git/objects/e6/411ced9a4f92543e4659e8d6a8401b534d1379": "f01842571e3daa1b0fba1bbb56796123",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f9/bbc7057844e3e85ad41ae478246a6963d072a1": "4d6054e260cdc874b33076bc811ef6c9",
".git/objects/f9/88b8f3f0e77cdbbd4cf102ffb2d2ae8dd7b325": "eb375779c5ba4b44f5b3991d5cb3344b",
".git/objects/f0/594d8bf48a2eda4f8a4018670a481d8bf440e7": "50b4b7dd8205ad2eccc61adde3d9656c",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/e8/74e6d06ba718defd620f98aac66c2a526ff24e": "a22b9fc6f05e36672091ddc0239501eb",
".git/objects/f1/3d511d827f5fd979c470c883802e43201538b0": "a7843b547975dcd6827f01597c48ad82",
".git/objects/f1/e0c79d5917b609d8de01ac2aac923c932ca2a9": "c22414fc72aca21372076e8df158b159",
".git/objects/ce/e2c829f9ede5aaed2ebdac2569b1706c590fde": "a72abf94a9b95ab773aafd53624af913",
".git/objects/2c/164bb2df58ffff8e4fdb6ae96a8654ebc10b4e": "53f219890faf78e418b66d7799297b0a",
".git/objects/2d/513a7ff01167a46c16b5fab57ae71c21afea7e": "db1ee0692afbfb9b61af6eb13e0a7e79",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/77/f18c7c261636f47de161489a647464d020ab7b": "1121ae6dc8fd229e96ee24b6cdfeeeed",
".git/objects/70/9f7fe48e230e5921512643afec6bc06e456741": "a66e6354832ab93e81329b21011bd5f2",
".git/objects/4f/99e7b344ec3847de15e644a6679d26b35a397d": "740fbf9d412c9ff09d4a6a08106d5f5d",
".git/objects/4f/45e74e7a97d00db1bab5d815155e3f7a2709b2": "82c354313463d96ce0e3129f6958a653",
".git/objects/4f/75331d2812789e2f2f7f6359594fff335d34f1": "9e49b26b2ab925fb7a1521e9ecc0e230",
".git/objects/1d/58b671160c5d76fc35d2766dd555bbd8ce2990": "d2b75a43fadab986cb530728d7a685a0",
".git/objects/1d/305bd3003ee1d255a5df085d79cd48955928d4": "40e47cbdfd2f912284986bd26da99581",
".git/objects/1d/db3078344796a5e342cd7ca1b978466d285560": "efd0d18c04570752dad8a3ca7d59a9ce",
".git/objects/1c/555f02e8380dd3d6ac0710f93486964fd20a21": "1cb44d6a82bda7f66d36271bed0cdd44",
".git/objects/1c/4f95046e041f62820863a5d57627c566125bca": "d268d603b0037fbbc54ac2bcfa016ce8",
".git/objects/2b/55fc13fe8478ff026d6b33ac6bae1a27622c00": "18e3c41df48144f042b002b13e12b54b",
".git/objects/2b/7fe81a30ad7486ba33859a99a2f80e0bc5f723": "a3b86ec0942a376e978dac793f836fde",
".git/objects/47/dec5533c81f0026c12c4d141a5ba8cf02b38ed": "6e796e4ce4eb7256e585dbd7a5fb344f",
".git/objects/47/55e5efc1d1861d1633661d00597b22dc9d1aac": "63f2a91ef7ac3fea3a673d392ccdbf98",
".git/objects/7f/5b005a2183d3de17838defb95979e7063d01d0": "85d5807f4e417467b69ceae3cdec066a",
".git/objects/22/2198e5b658e52b1e8392fa85f81b5b0ad89699": "e183403d82efb1b3e5005d5a49e3526b",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "34f83cb392f9888f32776b5ff7bb0dfd",
".git/logs/refs/heads/main": "1e7fd672e1d38c4dea9872dae72b1003",
".git/logs/refs/remotes/origin/main": "29aaadb62977853034926dfeb629fa9a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "9a7d2c5f2f7ee8fe3438db65f5d55406",
".git/refs/remotes/origin/main": "9a7d2c5f2f7ee8fe3438db65f5d55406",
".git/index": "bfbcff1140354d4c5a8f622ec9d7491a",
".git/COMMIT_EDITMSG": "a1fcf212af2a1dca62f37ef1934d1827",
"assets/AssetManifest.json": "4a061b5d029d13f4210d82171362b1d3",
"assets/prod.env": "dd0618c994868ff5c00aa9ec05c095f7",
"assets/NOTICES": "53b3ad3ec84b14d9fa24ee8a0a482c69",
"assets/dev.env": "38586369c0bb9fb88c79d3b7e744238c",
"assets/FontManifest.json": "c0b9c1676671374ddefef69b6a088e00",
"assets/packages/flutter_smartlook/lib/smartlook.png": "49cb46409394bd16d0a8f924a54b7cc2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/amplify_auth_cognito_dart/lib/src/workers/workers.min.js.map": "dfeed5875e608e93e20d663066ad6eee",
"assets/packages/amplify_auth_cognito_dart/lib/src/workers/workers.min.js": "65e675d53cd30c88dd749e6cf0aae3fc",
"assets/packages/amplify_authenticator/assets/social-buttons/SocialIcons.ttf": "376fbf368ffe39e045978e3d3197efbd",
"assets/packages/amplify_authenticator/assets/social-buttons/google.png": "a1e1d65465c69a65f8d01226ff5237ec",
"assets/packages/amplify_secure_storage_dart/lib/src/worker/workers.min.js.map": "b7a8e0c431496ab98af6f321f82d1664",
"assets/packages/amplify_secure_storage_dart/lib/src/worker/workers.min.js": "6f00425226d3cbc0c3c51709ccff8cd4",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.smcbin": "cd8430e5607bc10791cb24ce04fb4778",
"assets/AssetManifest.bin": "a75b28ad850725d7c6114bfb75be47e3",
"assets/fonts/MaterialIcons-Regular.otf": "d657e1400586484a2de489eb44e3fedd",
"assets/assets/fonts/FuturaMedium/FuturaMedium.otf": "a8bb1c203a65eb1f8df75e5ae6dc676c",
"assets/assets/fonts/Inter/static/Inter-Medium.ttf": "16580ed788273749548eb27b9a9b674f",
"assets/assets/fonts/Inter/static/Inter-Light.ttf": "60c8f64064078554b6469eeda25944eb",
"assets/assets/fonts/Inter/static/Inter-Thin.ttf": "be37c2ebe9cd2e0719d1a9437858686f",
"assets/assets/fonts/Inter/static/Inter-Bold.ttf": "d17c0274915408cee0308d5476df9f45",
"assets/assets/fonts/Inter/static/Inter-Regular.ttf": "a4a7379505cd554ea9523594b7c28b2a",
"assets/assets/fonts/Inter/static/Inter-ExtraBold.ttf": "e771faf703386b0c5863cc3df1e26ba1",
"assets/assets/fonts/Inter/static/Inter-ExtraLight.ttf": "c36ac5a28afa9a4d70292df06a932ccd",
"assets/assets/fonts/Inter/static/Inter-Black.ttf": "10215142a203211d9292c62ae0503a97",
"assets/assets/fonts/Inter/static/Inter-SemiBold.ttf": "1753a05196abeef95c32f10246bd6473",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
