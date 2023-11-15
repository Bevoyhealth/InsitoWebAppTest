'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "4507c9219a15bf776bf4b18f6de84787",
"index.html": "5052462768fbe55d143c166fd5de704f",
"/": "5052462768fbe55d143c166fd5de704f",
"main.dart.js": "5a6795c07ddc8ae733e18b7193512a60",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "47bb5028d79b4dfba4ac7958d98abdc1",
"icons/Icon-192.png": "4f284106e27db4dbe14c3189bb6e1703",
"icons/Icon-196.png": "4f284106e27db4dbe14c3189bb6e1703",
"icons/Icon-512.png": "a8949b24a52a256f719b4dd0d347eaa7",
"manifest.json": "39efae02eb6cab4f64c9759432c8aa76",
".git/ORIG_HEAD": "8d194ee28df4703f61b12d1f84446a33",
".git/config": "b60654faf567e1620f97f818a8e18d5a",
".git/objects/61/c58dc6188502cfc53ff7d42265eb5c6fba8b12": "70ac8e4c444b4d9f2d62be17623379b5",
".git/objects/0d/80a6cfab5323793422310e1afce073692f0da2": "c2c4fb7ad9598bf01e26a23855954563",
".git/objects/59/94998d29d8f2c5d81a3af85cb23642787f12e9": "0b5ec61b252974951ca7ad29d3f6922c",
".git/objects/92/b929b25cea98bdf824708e8b6c1ab487b19985": "0a1e66ea25296c77cf2a4b159813ca44",
".git/objects/0c/8dd38fa179169808cce623a6a0467204d84fb8": "98d7377e5aea79a37a08e42361ba8000",
".git/objects/3e/a37dd4bb4fe61608c5804c40a3242963970f73": "5e9519ccb659c0ef59ea085621744091",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/50/482a970688db65bf7561700776307004debd6b": "ea733b998e8686c8755ae79c2653c415",
".git/objects/68/47e0eedb524f72998053c2d630e08c32657207": "e6a3e547e62aead02888c4ea9277783c",
".git/objects/3b/9b8d9e3b1152d200c5b42dc25038099e759332": "89c37cf45f0bd85dbd76b51bf1d3fb90",
".git/objects/03/2cf89ddfca29af43665fceff49865294dc3fb8": "66bc365126363c03062547877e6588f5",
".git/objects/03/4ee18590a667964c0f78e772d000662bd3fdf4": "f8cc278c559ffe1664b746afab9b0498",
".git/objects/03/526e35950819d6f712c54a85027ca6919124f9": "a3d3d676f71b4db017f1c22d30a16ed3",
".git/objects/9b/7991283a447006f8c49141bdb957067b2624e4": "5d0bcc42fa4ced2fdcf9b4fa47be39be",
".git/objects/9b/2bd8775df52795e2cc7ad712b03be612c35dda": "b887fa06aedef08abe64c321914ca059",
".git/objects/9e/bfb56fafb12001ee03526b109f7b5e00410e28": "d1e39cba553bd87c704c4ee1bce0376f",
".git/objects/9e/a623ab6ddc46328dfae8cae1b68e22bbb467ae": "435e527e1c953d064ffcb348c7d15e7b",
".git/objects/04/98296d4b56f488782fdcae04f73dfc5027245f": "3c5a59334118e8d89022bf1e0c316146",
".git/objects/6a/3e68da15877a8e092804b0413c24b39bda11c0": "09b61d04a35af1feac26ad9ae42ce9ef",
".git/objects/6a/619fa683a687b167c074ef197f0091ef32edcf": "ad0000c648eae94c0bc9db0ee985a46b",
".git/objects/32/4d90aa5bbea899d574a7c010667b116d4a9b0b": "823299786af8bdd7c17e5aa40f6b155a",
".git/objects/32/252bdf7c4b5e1d34a4089709338787cdc2b63c": "bd8c34806700e9a4675a95a0d8056053",
".git/objects/35/2e8f193771cc9b8c78b8ad54f7b13f544fd5f1": "78655643e88e0490daaa34fca6bb89e9",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/51/c11f88d41a3528c93c2f1bc03838ce1ec749e7": "938df82d36342699866a2bb365525ce8",
".git/objects/3d/2b61cd77d0a0e8cb61bdaf7e144e5d7bc9683c": "4f10e12814e4d61f3bce65f35be1cf8d",
".git/objects/58/845ad3390fcda17ac3d89825abca24536670ff": "657e19a92bf61776c5e6f1540b4d4e9d",
".git/objects/0b/3a6f93b89c549af6c315e31f617694ad369b03": "c4602745465634d1363fb1e3038a49e1",
".git/objects/93/50ad81f5972daa16f06b6cd33162420de42072": "66d5135bf22ba7f2d74d99b1442ba965",
".git/objects/0e/a46e81ce15ccb1767a51aaf061963ad528efeb": "4e571e4a27c5bd49c4ce8009bdcac524",
".git/objects/60/b15aca1ce04ec5b4c77a44fc4a6a63e65636fd": "657010e8be6bb00ff08f652594b1a2ae",
".git/objects/34/546cfd71bba7591803ab164f91c4b742da17f9": "312bc28db164c68c7a5c4eaf91139747",
".git/objects/5a/b4ec3808e664f7ea574a03d7b8bb17436dad77": "5d6f495b5e24869de7d67c6799ec99f5",
".git/objects/5f/5188e2fc9945478b5cf34599741934eae5f967": "db1f7d0480878143476c04220ef56cc6",
".git/objects/33/856bb8e406b90c22c9c61f06a5455f59c099bb": "d097c1787abd5141c52a5dbeae51a486",
".git/objects/05/ba2e59fd4ef3008e79cd4e3e3bc4931ac57898": "910cac8e95b00f5121e3bb4dceb601e2",
".git/objects/a4/433e41728d4ae3705e1d3755af1a4034b46923": "2cd7515ff69a383ee813ebf0178afe78",
".git/objects/a4/57caa47c0e2c1476ece4662e8857973a1b9717": "f32fdddb243b2f21bd2a8c9a4d96a272",
".git/objects/a4/5a6c30712d2bd5d2e4c01ced74c790703684bc": "c8da8e658d4576abb87ea2ea3f5e652d",
".git/objects/a4/a9918dad10832bc8aaa5574d71fe15f089c8cb": "9636ed519a82aae2e1b6c48dcc421730",
".git/objects/a3/3e89230b18b0e7a3cbc190e07cdeb0d2a3a5b8": "7d4f8f8cbec6c28c9865fa968ac304f6",
".git/objects/a3/e238c586667d272c7ac335c6be100618702ba2": "d4da58626b6c875b484ccf248ff704a3",
".git/objects/b5/307c0e18318a282fa1d6c0d7409ef69a07b0fd": "88405affb4fb9b8e21e84f5b228a562b",
".git/objects/d9/cfd4d2a37dd5820e93f7a516a2bff1c4d79a83": "32e60a7cc29a3f201de15dc67814d21d",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bb/3e3eaa4dd6dc5852918052ad9cddf390f692e1": "59dba6f5275f02f783510eaed7e8194e",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d0/255036d627162ecd0410c7f5f923be66981417": "d01a45fe4232ded5f2e759cd6a695b07",
".git/objects/be/f4166a65859e69bfe633b6a01f7a8e9823c840": "bd9f2ac9ea2e60cb13da45ed9e27152b",
".git/objects/be/d1a5cce9adfda664afda133660e829f54597e0": "12677e310e2aee6e51dde175f5d5f7ff",
".git/objects/be/1cb3aa560387bae728b36feac7b3cd0f14b2f0": "29102b355e5f26ea9e9facf1801d83df",
".git/objects/b4/6c211897c7d647686d05a8a086ba4735ff755a": "927d27206846415fe0adbc03fc0bde1b",
".git/objects/b4/a0e12c4276b5392956b41181f6c177d666b796": "4b105cf90fc4b5af0dd7a15c5182f30f",
".git/objects/bd/c6b5e645d43ed62eab6a747bd1b01869ee044a": "575d6da56733f778f8cca31bc91e9d42",
".git/objects/bd/312280aaf1059026792f05df230bfb69c0a57b": "0d5d14a3c760ed37d77298900ec774d7",
".git/objects/bd/85fea5bb73abe728241b1c144f63fa1deeba7b": "d097d6adaca921efdf78d3eefe059e61",
".git/objects/d1/0e8017ae8351b59ffe921fc7579ff43f08325b": "87d0b735f9e15c2c7a297555a7ae3ca6",
".git/objects/d1/313d7d56803bc4e16b4699807f9e1ab265a1db": "cb6a871ca329defb16176dea1a83c7f8",
".git/objects/ae/84d3834c31f78c7539897a0734d7b3121f75cd": "df0437992d1669ec4e4339a844955caa",
".git/objects/e2/84fa0052173742f608c4692ebb77239a93199e": "b05abe4e2aea8d4282185c7ffdf2e2e0",
".git/objects/e2/1bfd12c3c6fbb989a94fd5a42a42dd28318712": "366c17c83a38f7d0dbcf0558b5813e04",
".git/objects/f4/05ff20f97634534d1d84c19a243e928a69fdfd": "3995ab8e0f112476a9b3a14edc7d7556",
".git/objects/f3/d0f0c0ab9ba937219059d789b631145d02ddac": "c8f7ff91d5ee5699e27267dc81ff3853",
".git/objects/eb/3f47f80d631838dd05df155b4ec443ea59a9f1": "927bd94f7f84cf72ee5ea5d9b55179f7",
".git/objects/c7/0d76c3a5d5c78a0d5a3169228c7b34f74ed2df": "e2b78f3bc2b817c57fa7302a21d0b44b",
".git/objects/c0/052f6008b4f3a56f69c777bcfa7f4b9a2caf58": "c1edfa4875f00fec94c58fab1e1225c4",
".git/objects/fc/2ae6eb6206311ed02981ca46fe87b66fd28364": "4a95977f689e7423e7d15597cd9f979d",
".git/objects/fc/efa2c276efd044ccc7ea651cc659b1a2696dd7": "ba397ac3288f588ee555f5a0e99023f1",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/bfa93763325226287ea802a075b95352ba01fa": "316b9cfb9228a50d5ae10c4393ee9e99",
".git/objects/fd/1cb76540bc7c3335c5b4c93690ff05c4d1ea3e": "5524460fcadb89f5cb4d422fb1855526",
".git/objects/fd/f407e624d23cc1738499705d4b78634fe482db": "3c9fd94c24bac5058c29c5612c5bd749",
".git/objects/e4/9874dc866be3cc1009c9714ea2dff50ebf9da3": "7b1ab200ca33b96f0d45fa14cf229677",
".git/objects/e4/4ed0ae3ed92696548e7e62daac14d00829940f": "21f16b00f7d87dcd1d56ce44ab1b8d68",
".git/objects/fe/9b1b8a8f7f417489780d1cf529f63fffc24a7d": "bd58fb4ba934caf804ce83605d23cce2",
".git/objects/c8/553ac888f7dd1403cd263c3b1ef6a2374db778": "fc827f850e4b15493026cb2e430c63ef",
".git/objects/c8/30cda7f6f82c376aaaf28f377140e1b9402dd3": "d42c7998dd2963c4c26267a5b520d12a",
".git/objects/c8/1e7db741108c17b7c2d339b51bd9d45bfdd979": "93ef31690b0cbc29ba4c6ec5442e898f",
".git/objects/fb/716301b71a8c7be425bf538109e5e3bfb6ccc6": "d238a39ba6974f487e1b918275375f12",
".git/objects/ed/18ede74ee81f35e50b2e57d65ad02f84f7d077": "267e39a79ba844d8821ec27c45a7c3df",
".git/objects/c1/430129f9739ad27690229e1474ee4843b50d18": "3220c9434b62ee79a8d5d42a3b296b4b",
".git/objects/c1/840629a166118965286cae3ca8f4d6e2d9b5b8": "57987db273ca47dd3ca2d283d2ce309e",
".git/objects/c6/ef98b6aefaa6cc341b3393ff296adbcc44581a": "4be6e07d8824aa5a115f7d80e834470a",
".git/objects/c6/1348a3a03089d36860828fd695ff7373581feb": "4030742ae44395ff4491d101a371d0dc",
".git/objects/ec/0d30503d7cbf1d7dcc26b12318a1fa6bb0bedc": "888f65b2ae7646044c9a76d641ab979e",
".git/objects/ec/3f5ebfc5c1e1403007fd41d3a236e7b62c6a67": "fed5bce877473acd8e3405c2c260c2cf",
".git/objects/ec/9b1b00af40800fb639cec4c813e51a8dda5c9e": "89ac0529dc2ced9d300d65e82897eece",
".git/objects/4e/5372a4d23f9782b0ec7d1ee25dee7665fadaba": "35c6ceec8eff1451f8c23c58b57ac272",
".git/objects/18/94fcac36d8a2602ecc84b91663bc1686ed808e": "0df8782901103429e9fdfd127642f0b3",
".git/objects/27/f3849a867c87c7da06a7c3421a4db879d7f055": "1e0af3e4dd7b985d645eb19391c4906b",
".git/objects/27/bcb5b7413e6d3c99bef9142bb593ec8acdfa8d": "88506ae27e4473000add198e2a0786fc",
".git/objects/4b/5542df9b0c5d750d03e706a51b2812d017c875": "750f9cef8354f3f632fef65a508cb8c2",
".git/objects/4b/1df9f374cef6f79e2ed805294759ade23e3b86": "66ea733c41eeb5622d9607b42a93b8c9",
".git/objects/11/26db6ce39170220a57cc936f427502c79c1c3c": "04d08abac56c603874597166beb42942",
".git/objects/11/235549dffce0b6882681d5ebfb6d3298f56a18": "c06358fd8e7630cfb33292f3710e8de1",
".git/objects/11/7375f0fef7a2f1f27501352d7b0cdcc50057d9": "711c3375ef447e276931b989a216951b",
".git/objects/7d/637887f97e8f3f5036ef2402c8539b28ea302c": "78feff2557c024ab74e08b939353874d",
".git/objects/7c/d595ab0093cd459e9260e8b388f6f597a1c465": "44da43f850ce36da396831d44b3182b5",
".git/objects/7c/7719e520ce4f66cb258508ec7dcd08be119c05": "ce6590541ebc977369099448ffb74b72",
".git/objects/42/ab28ba00d5ecc840a65ceec8d8b2c65efdd72d": "5aa34fb43066c8e8c128204426e00f7b",
".git/objects/45/2df870d829cd536f634dda19ea737cb0254e43": "8ab1beaac04f9a31b733374dd4e8d4b7",
".git/objects/73/2c400cdfa733cb4ea3f4106a3f71b29fa4751a": "d100763b510e3c06618a27faa63bc386",
".git/objects/80/113fb70d14f09947272ddf55ac71da1100b9b0": "fa72cbd894a98155b846b580871d1d99",
".git/objects/28/f3b8ead59710af2fdfce6a2a97e6d537d16ce7": "5fb26182f3dbbfbf0d4aacd3b7b5b098",
".git/objects/17/695b54c67d2298f76fdab9a8af72350828df64": "5e4bbb920c60fa6b46261a5cd46184da",
".git/objects/7b/f24a8038f6fb8502237241af76a0cc0bfac68d": "86c8ac2fa6a86b617deb86259336a9ce",
".git/objects/7b/bf96919cfd1a15116d1828d3115c1f226b86b3": "d7c90645dca18e0ccaf8359d95f294b0",
".git/objects/8f/48b77153d92c85f3c854fdc94a0bf1d95a5898": "fd4d926aacca96a258a7001c6c399348",
".git/objects/8a/cdbcca27093b1c5ff54c7b77623629955823b1": "8823e302fb46de86c3f28db0f34d0615",
".git/objects/7e/2a5738b7f75feb362b6410bd3eb779c608bc33": "009191daa2d702ef26687de7d6e0f0b6",
".git/objects/10/20d286f16ce78ac8971c637bb9b018cc717ea8": "aefaa4e2e44724946b6882e46c8ebb71",
".git/objects/19/4481f54df6f710fe6887574983d9bf84c1923e": "d8c139d6505c4622dfb9b5f398067968",
".git/objects/4c/2187baa4ba0e1fe84cbebd0b8a28b47b13174a": "4c4f2778ba2f72e294493edbdab1f758",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/4c/c7b49824cdd68248581547188c05e3a2c7373d": "1cf6b0ffb81b78e3a8f8d5260101895b",
".git/objects/26/8397076a24fbfef3e945cbbd175f53c88cd928": "8830073a4c51bf67243bc186c8f23b3b",
".git/objects/26/6dd15549e8b66f7f6f2251ee18311aab26ddbe": "74ea0e2ff5e99bac8e7931b9c506c08a",
".git/objects/4d/e02b39481997e1dbae9d2c0a409d579e413065": "e9aa68efce865f4852caebf7bff640f3",
".git/objects/4d/4e650581ae2e20cd090a52ccf61043186c5c4f": "9847e801da89faed1635bb2bb4ad31ba",
".git/objects/75/3cd228af9efae16684386cd21786f310dbcd92": "de0fb35ccdc5f2e4a1c03b64a4e12e55",
".git/objects/75/54cdf202e23f49223c398b280676ab4362bde6": "7439303c1ca77b2ad194ee26244d47e3",
".git/objects/81/bf3f7afd631a87988f635af0b24f9ac8fdd856": "7a551a609c20e506e042ffaccb77e04a",
".git/objects/72/6286e4524c798e13e7e7d258ff8b535c81c54b": "235caf58b1cb0d4919995ea513db01ee",
".git/objects/44/353246931bdd9b265ffd225180d580310fd7d7": "75726e59d83a6e2df307fc96b4001184",
".git/objects/44/1400b18ce3fa1b2cfa6bfe5e58f562aa1e3aa9": "b116bb5be7a76d596256151ae2c41280",
".git/objects/2a/9af05571ad3269ba2d3248f1285a99a1d282cc": "14670df0ceea5a91b24f4b9a138fd1d7",
".git/objects/43/80f18fe9810daa7223a53884d21ef91a255fb4": "5e75be8423f8530a910e2743ca6b2dfb",
".git/objects/38/a1636e159e6a521a2ab5826634d1a040c245e0": "44d8c228bbd8ff67fb27fa2cb8bd6850",
".git/objects/9a/3396fc4364afffd1984813abb564d4509b6606": "ac1d3c71602eaec49cd45be17fee8374",
".git/objects/09/1564f4f354e93df60cae78e1b9d5652df10962": "14c7332fd1167395f06f0c7908470482",
".git/objects/62/d69c39019f2352128f52442e4db236f7f5a426": "fd66a3044c3aa348ffb3091e18119b31",
".git/objects/96/d8f4400218ffb424596b67f725010db4befee8": "be002f8fe3b6fe1aa94d74b055d5dfe3",
".git/objects/3a/15186b99e7e9e908a1f2146b4b2b8373c8302c": "7a9e95679a1244e089ab5a3f4945d6ac",
".git/objects/54/f5443db145aebd4e7215816d7a5cf0578793e8": "29949b70350efeddd37be1fd9b9862e6",
".git/objects/98/5f031c74e1ce12a4b9a18eafc00bd4a19eb5b2": "3f04188b0fc6866db6784ed8dc528cc8",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/5e/6a2a68e6fbae8395ff00923e4a49beba503822": "16cc930ac34ab6f38a5dadfdbdaed3d8",
".git/objects/5b/80eeed8168a91390c0bb3b270d2ab26c1e95d2": "feef37ad831a0b1b395c505e46a5a5bc",
".git/objects/08/da94e8b7e17999e35eb8abbaf6368696849118": "69e42e3381709738b4becbe921051b6c",
".git/objects/6d/2f49abd930dbc6fadc89f317fdc3ccd2b26682": "f94977ef2cff874f6b1c2c012f5bafb3",
".git/objects/01/da8a54afdc7a9ecc0bf5b3712223f252889c3f": "06e056c1fd59f8f2672424aad984e59f",
".git/objects/01/2075f28617a20d871247dc12a32adfb6b14904": "d832642831193a5ce41755f865091bb0",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/6c/c2681a47b5958de3091f8bfb6ea50803de2ce1": "f99b6a51360e5bdc00e14a58e5d92c52",
".git/objects/99/7dcc3066d83f1a22a71af883a21d97cd394669": "98aa31d1be720b0d1191b69f1105a7c1",
".git/objects/52/e8f42f8daa7c04f3087ae78ccdef8832843e70": "eb900c23240622dec3e1449ae0a67abd",
".git/objects/97/9f14c0284bd40caeae3d52ce295d1fabe13e2e": "b33e04e6fe10d98dd2e0f45f55af24d5",
".git/objects/63/5a43e7ad9696b346327d0ca7caeffeb3d24f8a": "274993f08cedfb1538072f855c53cf40",
".git/objects/0a/2babf363b30c35815209a9ed7892caa503e109": "47dfbfbd7730afae40ad45e3a135211f",
".git/objects/90/35cec5c16831c396d05a803ee0a386d3738f99": "b9a91cdad5ff7dda3c915ad1f186e051",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/8b7d5561b0750138673b16f0715ffc9333cdaf": "8601a4da9e161ad571a224dfbb1bec2a",
".git/objects/ba/f072bd241b0c2fd9181c99fb240efa1ed855c6": "c15cdfa5932b6b2ef06f889fd88c079b",
".git/objects/a0/9fea1c9773dd396a2fe35a8677621b253d12d8": "a4465d2e6df5de71a4b9e2deb882bff5",
".git/objects/a7/946ede8899a3feaa33fb3a8d778508c2df987b": "f597e320dbd5213effa38524926a23f5",
".git/objects/b8/980399a187551af7e9a17e4843904a002fdd0d": "9fffd25eb00314da167fa7480e34f51a",
".git/objects/b8/a1cb525b611d5bcb6313bc810ccbf06b00fef0": "80b2f1b078f39909ccab319f44d1831b",
".git/objects/b1/077801640e87c89ec1b12b85c8d01f3682389c": "8b5251e1b07a45f33c85bb8461e0d570",
".git/objects/b1/d7b6c64360a6227f95607df702bf0e28f5ae8d": "71e4c4fc240834f6e270e9fa6b5d7f3c",
".git/objects/dc/20a8521ee0ec2eb29959ced507e7df3e438870": "5effc1b1d80887f89d1d97eda0e95ff0",
".git/objects/b6/73dc606b128ab112bb3c2a0a340d51f64a60d2": "c5667b7465643aa6359170cab9e8f279",
".git/objects/a9/8aa6c228f4696f37170d4026ec02449f78f737": "f1e738e6159cd3ef4e5de7ccf1f27a6f",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/aa/141f2784222a94060c54895e5ff65a5d192ff9": "01b712cc56fe73fdec738905b948ff65",
".git/objects/af/2bfbb327eeb1c9554a4bece1224ed0c3e179de": "0643a64f5c8e528e55e7da4f6dc8dc8b",
".git/objects/af/a657085be7c882bbaad50e9bca8cb4f9786b39": "b2660e41471c1cea51ecd74d03269ec3",
".git/objects/b7/975cf6ca8d933ab99becb2d306b7f8c9f11f0e": "8a3b3c842f2f85a51f0ef2c8741ce299",
".git/objects/b7/ad3baf01c18aef2828bdcc6f7f2c02c1a83536": "e44ae0ac2540e3878edcae02f47ddabc",
".git/objects/b7/11e6e5c7a635c9b14527bb056db0f0a712f129": "b9015f275aca75d518405b5222d120d2",
".git/objects/db/4284f77a0bd3961d0022ac92816215a291a1f0": "8d98bdf5806931935ebc5f244bc58067",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/de/4d0751e15db360b5f577024a3abb1f6c72cdb3": "7fbeb2737583f853c5871acc44861a94",
".git/objects/de/e94e2d6169fc5f25990eb00dde61c73d371ae3": "bfc35d1389d4f285261d96bdc9ff89c5",
".git/objects/b9/74371201e79b965167befa518d4978aee1563f": "9199f2a33b56bc23abbca3f98ef57a55",
".git/objects/a1/26b6c878cd37807ec7ae41c03ae896c1b5383f": "0e1a85c000ac3a958596ff6db120368d",
".git/objects/e1/deaaa052d210a2446074b431eac288cc1799a6": "a3333d65ce2ad6528cb5c26c34b327be",
".git/objects/e1/c20511a45e7d195c51ac903ef329f8ec58f57a": "9a921c984ab22eec9d2994a1a664afea",
".git/objects/cd/607617fbafbe4800f4dd14af0aeadf01220b50": "16182f59e4f1203b92c49cea7cb7210b",
".git/objects/cd/ccaceccfd3c1f3dd3b94609909e05e905fcede": "37adec7b33d17b0d215efbb0d6ce1d53",
".git/objects/cc/5739cf7fda5102be60b384e2ad2b01442f4a80": "ffa1776d30722ae239633fb79652abf0",
".git/objects/cc/b8e2471a5c5d1f06508970f34f6d220cb092ab": "c7b3c3492023708195bdfd25e45339d3",
".git/objects/cc/4d8d2761585501da185040927fe5a5932cdde6": "0c204d850bf42c0d72e3a879f7ef2a4c",
".git/objects/e6/ec47d45d380ee8319874cdaf8074188b301649": "5de0d6ea0ee7dbdfe89e91b4be378556",
".git/objects/e6/411ced9a4f92543e4659e8d6a8401b534d1379": "f01842571e3daa1b0fba1bbb56796123",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f9/bbc7057844e3e85ad41ae478246a6963d072a1": "4d6054e260cdc874b33076bc811ef6c9",
".git/objects/f9/88b8f3f0e77cdbbd4cf102ffb2d2ae8dd7b325": "eb375779c5ba4b44f5b3991d5cb3344b",
".git/objects/f0/594d8bf48a2eda4f8a4018670a481d8bf440e7": "50b4b7dd8205ad2eccc61adde3d9656c",
".git/objects/f7/4ac84d63a60b5d44ddbc9d4ed6a3209312e2a9": "6481334bdfe332f9581f2fc5fbf51225",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/e8/74e6d06ba718defd620f98aac66c2a526ff24e": "a22b9fc6f05e36672091ddc0239501eb",
".git/objects/c2/0427dbf49e2793d930eee0e0edc06f1400a739": "5f0c0f80d7bb53909701cd3f603bb1d7",
".git/objects/c2/61024553653af0903e74ef7560857c786e6aae": "9e83795d166112f95080e0e277b33b40",
".git/objects/f1/3d511d827f5fd979c470c883802e43201538b0": "a7843b547975dcd6827f01597c48ad82",
".git/objects/f1/e0c79d5917b609d8de01ac2aac923c932ca2a9": "c22414fc72aca21372076e8df158b159",
".git/objects/e7/a10efde1fb47c416d6674969a2de456b79d29b": "da8d6df3f7f3cc37cbf68ce4509f52bb",
".git/objects/ce/e2c829f9ede5aaed2ebdac2569b1706c590fde": "a72abf94a9b95ab773aafd53624af913",
".git/objects/2c/164bb2df58ffff8e4fdb6ae96a8654ebc10b4e": "53f219890faf78e418b66d7799297b0a",
".git/objects/2d/513a7ff01167a46c16b5fab57ae71c21afea7e": "db1ee0692afbfb9b61af6eb13e0a7e79",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/77/f18c7c261636f47de161489a647464d020ab7b": "1121ae6dc8fd229e96ee24b6cdfeeeed",
".git/objects/70/9f7fe48e230e5921512643afec6bc06e456741": "a66e6354832ab93e81329b21011bd5f2",
".git/objects/4f/99e7b344ec3847de15e644a6679d26b35a397d": "740fbf9d412c9ff09d4a6a08106d5f5d",
".git/objects/4f/45e74e7a97d00db1bab5d815155e3f7a2709b2": "82c354313463d96ce0e3129f6958a653",
".git/objects/4f/75331d2812789e2f2f7f6359594fff335d34f1": "9e49b26b2ab925fb7a1521e9ecc0e230",
".git/objects/15/43af79982d3edc14ba48c725cfc1c68f49e2a0": "ece8abf3b19fead96da5158520874ac3",
".git/objects/8c/35d5a181de14d6d577cbce9824f1f343438ece": "0cb67203a41740d83401adfadc98023d",
".git/objects/8c/77829244c5f2cbfc2f13e9e1eb648eba3b91af": "95a36d261dc9ad434a03f81b8a20130d",
".git/objects/8c/f6cfe3119750f7bd41eec85da0fd0d6c4d747b": "0ebe195504bf2cf6c8f0a6038d5fa8bd",
".git/objects/85/40bf85ca04f23b1371f91744b2967f5e9929d0": "1daa0b9002146603334275b9fc946ac2",
".git/objects/1d/58b671160c5d76fc35d2766dd555bbd8ce2990": "d2b75a43fadab986cb530728d7a685a0",
".git/objects/1d/305bd3003ee1d255a5df085d79cd48955928d4": "40e47cbdfd2f912284986bd26da99581",
".git/objects/1d/db3078344796a5e342cd7ca1b978466d285560": "efd0d18c04570752dad8a3ca7d59a9ce",
".git/objects/71/daaed3a1b9f7bf836a8a902443fb2a4a248c5d": "5a0dee11864cb5d7126d053391a45394",
".git/objects/76/19a82b9d32ecb67b1c3c73e8cb08f4eead3e5d": "5f4016e5b90d6227e608b57d50d55631",
".git/objects/1c/555f02e8380dd3d6ac0710f93486964fd20a21": "1cb44d6a82bda7f66d36271bed0cdd44",
".git/objects/1c/4f95046e041f62820863a5d57627c566125bca": "d268d603b0037fbbc54ac2bcfa016ce8",
".git/objects/82/6bd8e4b4fb4df01ad0bb17967d8e431dd82c24": "65177d6975000b605ce6ad549d17cb7a",
".git/objects/82/7e6a0af6a9489fcfef71ee11458b74bbb1a701": "400bf6c17d393e736d61881fe5d41768",
".git/objects/40/6d9a521f7e73dcc877af5bac82da87a566b433": "5257875b6f916d54377f29d67936052c",
".git/objects/2b/55fc13fe8478ff026d6b33ac6bae1a27622c00": "18e3c41df48144f042b002b13e12b54b",
".git/objects/2b/7fe81a30ad7486ba33859a99a2f80e0bc5f723": "a3b86ec0942a376e978dac793f836fde",
".git/objects/47/dec5533c81f0026c12c4d141a5ba8cf02b38ed": "6e796e4ce4eb7256e585dbd7a5fb344f",
".git/objects/47/55e5efc1d1861d1633661d00597b22dc9d1aac": "63f2a91ef7ac3fea3a673d392ccdbf98",
".git/objects/13/80ccb8f01717128f0570c7e8bcbf12f4c74f80": "ddefbfbb50030feadcaf4f80fcbe87ea",
".git/objects/7f/5b005a2183d3de17838defb95979e7063d01d0": "85d5807f4e417467b69ceae3cdec066a",
".git/objects/14/8999447f0b54110eff49d6c9852d80ef46116a": "156a074adfb18325933f71d62adbf084",
".git/objects/22/2198e5b658e52b1e8392fa85f81b5b0ad89699": "e183403d82efb1b3e5005d5a49e3526b",
".git/objects/22/65b4124679ff34951cdc5fd502ff98b201c50c": "f9b6d2baf8fe04974afc54afdf6ac23b",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bbef1f7361184f6aa04f19bc0d28a799",
".git/logs/refs/heads/main": "70ea4e41da2b0fbe2e1f9d25526feb44",
".git/logs/refs/remotes/origin/main": "39ede51040fef4d549bc602df4252412",
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
".git/refs/heads/main": "c576c4b521f6ae0abf1815c6245dbbff",
".git/refs/remotes/origin/main": "c576c4b521f6ae0abf1815c6245dbbff",
".git/index": "ec4419066fd181574cc757644de765b4",
".git/COMMIT_EDITMSG": "1b1581eebbb60030aca78efe6ef7d982",
".git/FETCH_HEAD": "b08209dcc1ae97370b2656ce6fc9761b",
"assets/AssetManifest.json": "4a061b5d029d13f4210d82171362b1d3",
"assets/prod.env": "dd0618c994868ff5c00aa9ec05c095f7",
"assets/NOTICES": "334e9e09c83ce0f69e4e917919f42fc7",
"assets/dev.env": "3253157b6fe6bb2e8f393e77bc137637",
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
"assets/fonts/MaterialIcons-Regular.otf": "725848ff6f1c35d18b160aa9aa3488e4",
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
