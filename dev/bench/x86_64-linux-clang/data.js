window.BENCHMARK_DATA = {
  "lastUpdate": 1783746215650,
  "repoUrl": "https://github.com/divVerent/boringssl",
  "entries": {
    "Benchmark on x8-64 Linux Clang": [
      {
        "commit": {
          "author": {
            "email": "divVerent@gmail.com",
            "name": "Rudolf Polzer",
            "username": "divVerent"
          },
          "committer": {
            "email": "divVerent@gmail.com",
            "name": "Rudolf Polzer",
            "username": "divVerent"
          },
          "distinct": true,
          "id": "600dbc4e26f12b7f8215827a02595448842a6622",
          "message": "Add benchmark workflow.",
          "timestamp": "2026-07-11T06:12:31+02:00",
          "tree_id": "c6760a3d4b1fdac041aa5fb813a391675180ae04",
          "url": "https://github.com/divVerent/boringssl/commit/600dbc4e26f12b7f8215827a02595448842a6622"
        },
        "date": 1783743924086,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpeedRSAKeyGen/2048",
            "value": 84254.93083333259,
            "unit": "us/iter",
            "extra": "iterations: 18\ncpu: 84234.1415 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAKeyGen/3072",
            "value": 232511.0233999993,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 232464.9657 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAKeyGen/4096",
            "value": 785228.963999998,
            "unit": "us/iter",
            "extra": "iterations: 2\ncpu: 785164.6615000005 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSelfTest",
            "value": 4341.475903726724,
            "unit": "us/iter",
            "extra": "iterations: 322\ncpu: 4341.082813664592 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedTrustTokenKeyGen/SpeedTrustTokenKeyGen experiment_v1",
            "value": 955.9900177474531,
            "unit": "us/iter",
            "extra": "iterations: 1465\ncpu: 955.8844955631398 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedTrustTokenKeyGen/SpeedTrustTokenKeyGen experiment_v2_voprf",
            "value": 477.8514284253603,
            "unit": "us/iter",
            "extra": "iterations: 2934\ncpu: 477.8132338104978 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedTrustTokenKeyGen/SpeedTrustTokenKeyGen experiment_v2_pmb",
            "value": 955.537215163928,
            "unit": "us/iter",
            "extra": "iterations: 1464\ncpu: 955.4535887978142 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginIssueBatch1",
            "value": 586.7358414429557,
            "unit": "us/iter",
            "extra": "iterations: 2384\ncpu: 586.6827978187915 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginIssueBatch10",
            "value": 5864.11860251047,
            "unit": "us/iter",
            "extra": "iterations: 239\ncpu: 5863.774594142271 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1IssueBatch1",
            "value": 5669.084743902354,
            "unit": "us/iter",
            "extra": "iterations: 246\ncpu: 5668.750853658539 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1IssueBatch10",
            "value": 20506.437852941333,
            "unit": "us/iter",
            "extra": "iterations: 68\ncpu: 20504.169632352936 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1FinishIssueBatch1",
            "value": 6567.270488263023,
            "unit": "us/iter",
            "extra": "iterations: 213\ncpu: 6561.498896713616 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1FinishIssueBatch10",
            "value": 23686.260525423833,
            "unit": "us/iter",
            "extra": "iterations: 59\ncpu: 23684.53262711867 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginRedeemBatch1",
            "value": 0.13396573283205268,
            "unit": "us/iter",
            "extra": "iterations: 10309927\ncpu: 0.13395481374407395 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginRedeemBatch10",
            "value": 0.13486258936899498,
            "unit": "us/iter",
            "extra": "iterations: 10535393\ncpu: 0.13485493659325246 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1RedeemBatch1",
            "value": 1619.7425081018303,
            "unit": "us/iter",
            "extra": "iterations: 864\ncpu: 1619.6443009259247 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1RedeemBatch10",
            "value": 1619.819686774916,
            "unit": "us/iter",
            "extra": "iterations: 862\ncpu: 1619.7230765661259 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginIssueBatch1",
            "value": 586.5890054484503,
            "unit": "us/iter",
            "extra": "iterations: 2386\ncpu: 586.5567837384733 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginIssueBatch10",
            "value": 5859.872225941432,
            "unit": "us/iter",
            "extra": "iterations: 239\ncpu: 5859.563418410053 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbIssueBatch1",
            "value": 5666.4255425103,
            "unit": "us/iter",
            "extra": "iterations: 247\ncpu: 5666.0227611336095 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbIssueBatch10",
            "value": 20495.2815294114,
            "unit": "us/iter",
            "extra": "iterations: 68\ncpu: 20494.44654411763 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbFinishIssueBatch1",
            "value": 6618.8688037384845,
            "unit": "us/iter",
            "extra": "iterations: 214\ncpu: 6618.189200934578 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbFinishIssueBatch10",
            "value": 23628.95001694897,
            "unit": "us/iter",
            "extra": "iterations: 59\ncpu: 23626.844152542337 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginRedeemBatch1",
            "value": 0.1242289232776514,
            "unit": "us/iter",
            "extra": "iterations: 11272934\ncpu: 0.12422174874792966 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginRedeemBatch10",
            "value": 0.12390333347509955,
            "unit": "us/iter",
            "extra": "iterations: 11192044\ncpu: 0.12389204125716445 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbRedeemBatch1",
            "value": 1619.8548784722216,
            "unit": "us/iter",
            "extra": "iterations: 864\ncpu: 1619.6715682870426 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbRedeemBatch10",
            "value": 1619.6754647398718,
            "unit": "us/iter",
            "extra": "iterations: 865\ncpu: 1619.4713583814992 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginIssueBatch1",
            "value": 587.9890810243509,
            "unit": "us/iter",
            "extra": "iterations: 2382\ncpu: 587.9104727120057 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginIssueBatch10",
            "value": 5889.441285714246,
            "unit": "us/iter",
            "extra": "iterations: 238\ncpu: 5888.764735294122 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfIssueBatch1",
            "value": 2188.4811573209026,
            "unit": "us/iter",
            "extra": "iterations: 642\ncpu: 2188.3344143302206 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfIssueBatch10",
            "value": 8287.023680473612,
            "unit": "us/iter",
            "extra": "iterations: 169\ncpu: 8285.98202958581 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfFinishIssueBatch1",
            "value": 2254.604807754358,
            "unit": "us/iter",
            "extra": "iterations: 619\ncpu: 2254.348760904691 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfFinishIssueBatch10",
            "value": 8381.413690476133,
            "unit": "us/iter",
            "extra": "iterations: 168\ncpu: 8380.146666666664 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginRedeemBatch1",
            "value": 0.16130278281347493,
            "unit": "us/iter",
            "extra": "iterations: 9811617\ncpu: 0.16128746464522592 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginRedeemBatch10",
            "value": 0.14043068030966183,
            "unit": "us/iter",
            "extra": "iterations: 8742754\ncpu: 0.14041822439473947 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfRedeemBatch1",
            "value": 516.5656895533415,
            "unit": "us/iter",
            "extra": "iterations: 2709\ncpu: 516.5234846806899 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfRedeemBatch10",
            "value": 516.741132173277,
            "unit": "us/iter",
            "extra": "iterations: 2701\ncpu: 516.6958978156218 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:16",
            "value": 0.07467492151230613,
            "unit": "us/iter",
            "extra": "iterations: 18744021\ncpu: 0.07466854481223646 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:256",
            "value": 0.09667440037179413,
            "unit": "us/iter",
            "extra": "iterations: 14476804\ncpu: 0.09666704646964823 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:1350",
            "value": 0.2584435884293442,
            "unit": "us/iter",
            "extra": "iterations: 5388664\ncpu: 0.25842911805226587 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:8192",
            "value": 1.0108249507160096,
            "unit": "us/iter",
            "extra": "iterations: 1383816\ncpu: 1.010779647005091 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:16384",
            "value": 1.9123104589045556,
            "unit": "us/iter",
            "extra": "iterations: 732113\ncpu: 1.9122083039093822 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:16",
            "value": 0.081141857450137,
            "unit": "us/iter",
            "extra": "iterations: 17197856\ncpu: 0.08113577768065913 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:256",
            "value": 0.09850189118873966,
            "unit": "us/iter",
            "extra": "iterations: 14328554\ncpu: 0.09849274539496461 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:1350",
            "value": 0.25818370243918043,
            "unit": "us/iter",
            "extra": "iterations: 5445502\ncpu: 0.25816495669269784 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:8192",
            "value": 1.011959752109491,
            "unit": "us/iter",
            "extra": "iterations: 1384321\ncpu: 1.0118845838501256 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:16384",
            "value": 2.114254178726591,
            "unit": "us/iter",
            "extra": "iterations: 661625\ncpu: 2.1141193168335355 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:16",
            "value": 0.07853208734358023,
            "unit": "us/iter",
            "extra": "iterations: 17645945\ncpu: 0.07853058966238341 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:256",
            "value": 0.10141226449184311,
            "unit": "us/iter",
            "extra": "iterations: 13892300\ncpu: 0.10140214658479839 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:1350",
            "value": 0.27533327513850153,
            "unit": "us/iter",
            "extra": "iterations: 5109274\ncpu: 0.27530558196722177 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:8192",
            "value": 1.0734293396500219,
            "unit": "us/iter",
            "extra": "iterations: 1306171\ncpu: 1.073361590480872 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:16384",
            "value": 2.0408340939553873,
            "unit": "us/iter",
            "extra": "iterations: 685623\ncpu: 2.0406948585447027 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:16",
            "value": 0.08285317756081617,
            "unit": "us/iter",
            "extra": "iterations: 16902682\ncpu: 0.08284550132339953 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:256",
            "value": 0.09964552945688275,
            "unit": "us/iter",
            "extra": "iterations: 14044222\ncpu: 0.09963724605036783 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:1350",
            "value": 0.2664050997091661,
            "unit": "us/iter",
            "extra": "iterations: 5265163\ncpu: 0.26638424489422136 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:8192",
            "value": 1.0616278158296153,
            "unit": "us/iter",
            "extra": "iterations: 1317063\ncpu: 1.061578913081607 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:16384",
            "value": 2.18498000606161,
            "unit": "us/iter",
            "extra": "iterations: 640094\ncpu: 2.184879056826018 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:16",
            "value": 0.08186864688438002,
            "unit": "us/iter",
            "extra": "iterations: 17094585\ncpu: 0.08186397259717029 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:256",
            "value": 0.10455781895854775,
            "unit": "us/iter",
            "extra": "iterations: 13396004\ncpu: 0.10455203185965042 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:1350",
            "value": 0.2904778084739374,
            "unit": "us/iter",
            "extra": "iterations: 4817830\ncpu: 0.29046414215528693 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:8192",
            "value": 1.1407704082837649,
            "unit": "us/iter",
            "extra": "iterations: 1227553\ncpu: 1.1407113762094185 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:16384",
            "value": 2.1824547101308425,
            "unit": "us/iter",
            "extra": "iterations: 642031\ncpu: 2.182348726151844 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:16",
            "value": 0.08498154345747932,
            "unit": "us/iter",
            "extra": "iterations: 16488462\ncpu: 0.08497488377023835 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:256",
            "value": 0.1032258036406095,
            "unit": "us/iter",
            "extra": "iterations: 13564210\ncpu: 0.10321961212632327 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:1350",
            "value": 0.2809563762177268,
            "unit": "us/iter",
            "extra": "iterations: 4978500\ncpu: 0.2809476047002114 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:8192",
            "value": 1.136947299847809,
            "unit": "us/iter",
            "extra": "iterations: 1231875\ncpu: 1.1368891632673788 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:16384",
            "value": 2.317403855866186,
            "unit": "us/iter",
            "extra": "iterations: 603911\ncpu: 2.3172224119116964 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:16",
            "value": 0.16888926638530602,
            "unit": "us/iter",
            "extra": "iterations: 8282345\ncpu: 0.16887793819262584 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:256",
            "value": 0.2827233622362983,
            "unit": "us/iter",
            "extra": "iterations: 4955202\ncpu: 0.28269625698407475 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:1350",
            "value": 0.8644430062269773,
            "unit": "us/iter",
            "extra": "iterations: 1620370\ncpu: 0.8643334806248062 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:8192",
            "value": 4.0581166248281395,
            "unit": "us/iter",
            "extra": "iterations: 344978\ncpu: 4.057888094313211 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:16384",
            "value": 7.905708424875165,
            "unit": "us/iter",
            "extra": "iterations: 177059\ncpu: 7.905271711689389 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:16",
            "value": 0.1728444005922734,
            "unit": "us/iter",
            "extra": "iterations: 8096901\ncpu: 0.17283272661972846 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:256",
            "value": 0.28544794035339294,
            "unit": "us/iter",
            "extra": "iterations: 4903414\ncpu: 0.2854366739173937 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:1350",
            "value": 0.8291801758152935,
            "unit": "us/iter",
            "extra": "iterations: 1692458\ncpu: 0.8291085279516515 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:8192",
            "value": 4.016445851136125,
            "unit": "us/iter",
            "extra": "iterations: 348493\ncpu: 4.0162325183002485 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:16384",
            "value": 7.9522134101030035,
            "unit": "us/iter",
            "extra": "iterations: 176285\ncpu: 7.9517406983010765 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:16",
            "value": 0.2848175987539427,
            "unit": "us/iter",
            "extra": "iterations: 4917905\ncpu: 0.28480033184862236 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:256",
            "value": 0.39828589845920004,
            "unit": "us/iter",
            "extra": "iterations: 3512992\ncpu: 0.3982671691253522 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:1350",
            "value": 0.9807528330174193,
            "unit": "us/iter",
            "extra": "iterations: 1428071\ncpu: 0.9806719917987314 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:8192",
            "value": 4.17586235891377,
            "unit": "us/iter",
            "extra": "iterations: 335256\ncpu: 4.175463260911007 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:16384",
            "value": 8.02814706894184,
            "unit": "us/iter",
            "extra": "iterations: 174408\ncpu: 8.027611531581144 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:16",
            "value": 0.269775472615087,
            "unit": "us/iter",
            "extra": "iterations: 5189318\ncpu: 0.2697531045505426 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:256",
            "value": 0.3813548141566294,
            "unit": "us/iter",
            "extra": "iterations: 3673416\ncpu: 0.38133754521677166 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:1350",
            "value": 0.9278658335844979,
            "unit": "us/iter",
            "extra": "iterations: 1509655\ncpu: 0.9277887815427898 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:8192",
            "value": 4.118757410953674,
            "unit": "us/iter",
            "extra": "iterations: 339430\ncpu: 4.118522054621004 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:16384",
            "value": 8.035340519716216,
            "unit": "us/iter",
            "extra": "iterations: 174172\ncpu: 8.034649777231655 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:16",
            "value": 0.23316754997899355,
            "unit": "us/iter",
            "extra": "iterations: 5992218\ncpu: 0.23314951158318983 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:256",
            "value": 0.5180059557839611,
            "unit": "us/iter",
            "extra": "iterations: 2693684\ncpu: 0.5179696393489395 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:1350",
            "value": 1.829776949041883,
            "unit": "us/iter",
            "extra": "iterations: 765825\ncpu: 1.8296765906049266 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:8192",
            "value": 9.951351373446933,
            "unit": "us/iter",
            "extra": "iterations: 140668\ncpu: 9.950548546933387 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:16384",
            "value": 19.691879130765177,
            "unit": "us/iter",
            "extra": "iterations: 71143\ncpu: 19.691278256469367 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:16",
            "value": 0.5704056174081923,
            "unit": "us/iter",
            "extra": "iterations: 2453053\ncpu: 0.5703793664466315 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:256",
            "value": 1.6361734827362384,
            "unit": "us/iter",
            "extra": "iterations: 855405\ncpu: 1.6361080797984449 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:1350",
            "value": 2.3832999508821735,
            "unit": "us/iter",
            "extra": "iterations: 586346\ncpu: 2.3831952260269857 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:8192",
            "value": 7.084163537326877,
            "unit": "us/iter",
            "extra": "iterations: 197539\ncpu: 7.083825720490598 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:16384",
            "value": 12.722832519026044,
            "unit": "us/iter",
            "extra": "iterations: 110114\ncpu: 12.722157518571516 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:16",
            "value": 0.2640160576226274,
            "unit": "us/iter",
            "extra": "iterations: 5296114\ncpu: 0.26400619643006096 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:256",
            "value": 0.6019443323490703,
            "unit": "us/iter",
            "extra": "iterations: 2324905\ncpu: 0.6019059604585988 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:1350",
            "value": 2.0946518298876744,
            "unit": "us/iter",
            "extra": "iterations: 668429\ncpu: 2.0944781435276267 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:8192",
            "value": 11.303941923204283,
            "unit": "us/iter",
            "extra": "iterations: 123991\ncpu: 11.303218693292134 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:16384",
            "value": 22.336416900734243,
            "unit": "us/iter",
            "extra": "iterations: 62660\ncpu: 22.335268368975143 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:16",
            "value": 0.7342533430762022,
            "unit": "us/iter",
            "extra": "iterations: 1904982\ncpu: 0.7342055725460992 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:256",
            "value": 1.820474798053371,
            "unit": "us/iter",
            "extra": "iterations: 767282\ncpu: 1.820416755508387 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:1350",
            "value": 2.753984786741198,
            "unit": "us/iter",
            "extra": "iterations: 508701\ncpu: 2.753921690737789 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:8192",
            "value": 8.527366936516266,
            "unit": "us/iter",
            "extra": "iterations: 164042\ncpu: 8.526901500835047 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:16384",
            "value": 15.453514124482629,
            "unit": "us/iter",
            "extra": "iterations: 89844\ncpu: 15.452918002315105 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:16",
            "value": 0.24193655571196532,
            "unit": "us/iter",
            "extra": "iterations: 5780347\ncpu: 0.24191628997359652 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:256",
            "value": 0.5794101575137551,
            "unit": "us/iter",
            "extra": "iterations: 2410964\ncpu: 0.579374037936697 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:1350",
            "value": 2.126329828329738,
            "unit": "us/iter",
            "extra": "iterations: 658297\ncpu: 2.1262029539857967 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:8192",
            "value": 11.736261442562993,
            "unit": "us/iter",
            "extra": "iterations: 119357\ncpu: 11.735904060926588 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:16384",
            "value": 23.242498124481664,
            "unit": "us/iter",
            "extra": "iterations: 60250\ncpu: 23.241807153527038 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:16",
            "value": 0.572403700158642,
            "unit": "us/iter",
            "extra": "iterations: 2440544\ncpu: 0.5723821438990682 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:256",
            "value": 1.6446982753442307,
            "unit": "us/iter",
            "extra": "iterations: 849039\ncpu: 1.6446715145005077 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:1350",
            "value": 2.431823687289086,
            "unit": "us/iter",
            "extra": "iterations: 575279\ncpu: 2.4317131426664207 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:8192",
            "value": 7.38172451906844,
            "unit": "us/iter",
            "extra": "iterations: 189632\ncpu: 7.381508532315152 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:16384",
            "value": 13.320575720376029,
            "unit": "us/iter",
            "extra": "iterations: 105084\ncpu: 13.319552129724737 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:16",
            "value": 0.1098770203409739,
            "unit": "us/iter",
            "extra": "iterations: 12739310\ncpu: 0.10986797895647317 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:256",
            "value": 0.1997953404485901,
            "unit": "us/iter",
            "extra": "iterations: 7000631\ncpu: 0.19978200936458415 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:1350",
            "value": 0.42843706443466906,
            "unit": "us/iter",
            "extra": "iterations: 3266301\ncpu: 0.42840973168119634 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:8192",
            "value": 1.5667145883086082,
            "unit": "us/iter",
            "extra": "iterations: 892756\ncpu: 1.5666768467531862 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:16384",
            "value": 2.976976659085576,
            "unit": "us/iter",
            "extra": "iterations: 470033\ncpu: 2.976862652196766 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:16",
            "value": 0.1689968451291453,
            "unit": "us/iter",
            "extra": "iterations: 8292574\ncpu: 0.16898381769037946 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:256",
            "value": 0.22495316934386936,
            "unit": "us/iter",
            "extra": "iterations: 6224790\ncpu: 0.22493043299452775 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:1350",
            "value": 0.3999206521496923,
            "unit": "us/iter",
            "extra": "iterations: 3499074\ncpu: 0.3998892949963341 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:8192",
            "value": 1.3757319042860794,
            "unit": "us/iter",
            "extra": "iterations: 1017741\ncpu: 1.3756909704924896 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:16384",
            "value": 2.588742920073793,
            "unit": "us/iter",
            "extra": "iterations: 538459\ncpu: 2.5886899931099503 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:16",
            "value": 0.1225005960376151,
            "unit": "us/iter",
            "extra": "iterations: 11421259\ncpu: 0.12249295537383365 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:256",
            "value": 0.22285397221246264,
            "unit": "us/iter",
            "extra": "iterations: 6284256\ncpu: 0.22284013191060262 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:1350",
            "value": 0.49233409479534646,
            "unit": "us/iter",
            "extra": "iterations: 2844528\ncpu: 0.492286075229356 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:8192",
            "value": 1.8711906412894423,
            "unit": "us/iter",
            "extra": "iterations: 748757\ncpu: 1.8711011836951035 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:16384",
            "value": 3.576037245838857,
            "unit": "us/iter",
            "extra": "iterations: 390943\ncpu: 3.575920047167977 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:16",
            "value": 0.1831642325102367,
            "unit": "us/iter",
            "extra": "iterations: 7642141\ncpu: 0.18315969163615528 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:256",
            "value": 0.2438902867379714,
            "unit": "us/iter",
            "extra": "iterations: 5741758\ncpu: 0.24388219026298275 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:1350",
            "value": 0.4533749711883096,
            "unit": "us/iter",
            "extra": "iterations: 3089024\ncpu: 0.453358634312968 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:8192",
            "value": 1.6190213789262888,
            "unit": "us/iter",
            "extra": "iterations: 865572\ncpu: 1.6188987594330526 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:16384",
            "value": 3.062368010383152,
            "unit": "us/iter",
            "extra": "iterations: 456892\ncpu: 3.062115370809738 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:16",
            "value": 0.11847774103236161,
            "unit": "us/iter",
            "extra": "iterations: 11816743\ncpu: 0.1184746604880931 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:256",
            "value": 0.39868974902756976,
            "unit": "us/iter",
            "extra": "iterations: 3510545\ncpu: 0.39866277686229523 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:1350",
            "value": 1.6840510545242697,
            "unit": "us/iter",
            "extra": "iterations: 830896\ncpu: 1.683914710144268 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:8192",
            "value": 9.452636709125585,
            "unit": "us/iter",
            "extra": "iterations: 148143\ncpu: 9.452115496513537 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:16384",
            "value": 18.798835491497183,
            "unit": "us/iter",
            "extra": "iterations: 74446\ncpu: 18.79663971200534 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:16",
            "value": 0.12417302174516172,
            "unit": "us/iter",
            "extra": "iterations: 11279247\ncpu: 0.12416449067920844 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:256",
            "value": 0.33940745549739726,
            "unit": "us/iter",
            "extra": "iterations: 4124983\ncpu: 0.33936778624300795 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:1350",
            "value": 1.3293375329977997,
            "unit": "us/iter",
            "extra": "iterations: 1053100\ncpu: 1.3292076469470768 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:8192",
            "value": 7.257467465407414,
            "unit": "us/iter",
            "extra": "iterations: 192887\ncpu: 7.256792324003032 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:16384",
            "value": 14.400696377914077,
            "unit": "us/iter",
            "extra": "iterations: 97292\ncpu: 14.398906682974905 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:16",
            "value": 0.13975433878377244,
            "unit": "us/iter",
            "extra": "iterations: 10029654\ncpu: 0.139742092000384 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:256",
            "value": 0.4774484718484713,
            "unit": "us/iter",
            "extra": "iterations: 2930534\ncpu: 0.4774267447502859 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:1350",
            "value": 2.040858334863746,
            "unit": "us/iter",
            "extra": "iterations: 686118\ncpu: 2.040681999306219 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:8192",
            "value": 11.494574104615308,
            "unit": "us/iter",
            "extra": "iterations: 121875\ncpu: 11.493642272820207 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:16384",
            "value": 22.871759886866048,
            "unit": "us/iter",
            "extra": "iterations: 61167\ncpu: 22.869503735674808 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:16",
            "value": 0.14541096110757962,
            "unit": "us/iter",
            "extra": "iterations: 9623699\ncpu: 0.14540257316859137 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:256",
            "value": 0.4191089652689581,
            "unit": "us/iter",
            "extra": "iterations: 3344038\ncpu: 0.41907757328117395 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:1350",
            "value": 1.690455507336466,
            "unit": "us/iter",
            "extra": "iterations: 828395\ncpu: 1.6903344165525007 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:8192",
            "value": 9.312306240272322,
            "unit": "us/iter",
            "extra": "iterations: 150346\ncpu: 9.31152572732248 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:16384",
            "value": 18.48794331839307,
            "unit": "us/iter",
            "extra": "iterations: 75633\ncpu: 18.48646888263085 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:16",
            "value": 0.11357833531413049,
            "unit": "us/iter",
            "extra": "iterations: 12335937\ncpu: 0.1135701817381225 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:256",
            "value": 0.3886526547095385,
            "unit": "us/iter",
            "extra": "iterations: 3605159\ncpu: 0.3886141324141226 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:1350",
            "value": 1.6671037641404682,
            "unit": "us/iter",
            "extra": "iterations: 839076\ncpu: 1.6668940417792577 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:8192",
            "value": 9.436606245240066,
            "unit": "us/iter",
            "extra": "iterations: 148369\ncpu: 9.435762045979969 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:16384",
            "value": 18.783688488706215,
            "unit": "us/iter",
            "extra": "iterations: 74466\ncpu: 18.78152778449249 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:16",
            "value": 0.11702979239563306,
            "unit": "us/iter",
            "extra": "iterations: 11959864\ncpu: 0.11702285017622271 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:256",
            "value": 0.39154092561910675,
            "unit": "us/iter",
            "extra": "iterations: 3576806\ncpu: 0.391514832227416 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:1350",
            "value": 1.670074882489032,
            "unit": "us/iter",
            "extra": "iterations: 838220\ncpu: 1.6699075051895735 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:8192",
            "value": 9.435052820700077,
            "unit": "us/iter",
            "extra": "iterations: 148332\ncpu: 9.434472318852382 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:16384",
            "value": 18.77949509481537,
            "unit": "us/iter",
            "extra": "iterations: 74513\ncpu: 18.778100116758768 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:16",
            "value": 0.11363435151200953,
            "unit": "us/iter",
            "extra": "iterations: 12312541\ncpu: 0.11362554049566087 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:256",
            "value": 0.3887460249430559,
            "unit": "us/iter",
            "extra": "iterations: 3604854\ncpu: 0.3887153377085469 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:1350",
            "value": 1.6678339481416282,
            "unit": "us/iter",
            "extra": "iterations: 839286\ncpu: 1.6676078714526752 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:8192",
            "value": 9.437610956116774,
            "unit": "us/iter",
            "extra": "iterations: 148392\ncpu: 9.43669618308265 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:16384",
            "value": 18.78522201642722,
            "unit": "us/iter",
            "extra": "iterations: 74508\ncpu: 18.783070019326654 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:16",
            "value": 0.11704069878416931,
            "unit": "us/iter",
            "extra": "iterations: 11976230\ncpu: 0.11703224812816626 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:256",
            "value": 0.3916504577323239,
            "unit": "us/iter",
            "extra": "iterations: 3574469\ncpu: 0.39162792599404067 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:1350",
            "value": 1.6695834800473035,
            "unit": "us/iter",
            "extra": "iterations: 837230\ncpu: 1.669438511520108 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:8192",
            "value": 9.434677046239965,
            "unit": "us/iter",
            "extra": "iterations: 148272\ncpu: 9.434064806571843 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:16384",
            "value": 18.784109964297937,
            "unit": "us/iter",
            "extra": "iterations: 74506\ncpu: 18.782511435321084 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:16",
            "value": 0.11365337449235047,
            "unit": "us/iter",
            "extra": "iterations: 12330388\ncpu: 0.113646698222311 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:256",
            "value": 0.38848640400601714,
            "unit": "us/iter",
            "extra": "iterations: 3605768\ncpu: 0.38845065128981515 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:1350",
            "value": 1.6725204023009645,
            "unit": "us/iter",
            "extra": "iterations: 838974\ncpu: 1.6721902585777269 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:8192",
            "value": 9.442871199919423,
            "unit": "us/iter",
            "extra": "iterations: 148385\ncpu: 9.441923887185546 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:16384",
            "value": 18.782678975556806,
            "unit": "us/iter",
            "extra": "iterations: 74499\ncpu: 18.780444958992632 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:16",
            "value": 0.11791671079969519,
            "unit": "us/iter",
            "extra": "iterations: 11867529\ncpu: 0.11790983548470718 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:256",
            "value": 0.39215802081190726,
            "unit": "us/iter",
            "extra": "iterations: 3569302\ncpu: 0.39214554862547074 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:1350",
            "value": 1.66986385517288,
            "unit": "us/iter",
            "extra": "iterations: 837799\ncpu: 1.669779807567211 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:8192",
            "value": 9.435389324399994,
            "unit": "us/iter",
            "extra": "iterations: 148357\ncpu: 9.43503645261123 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:16384",
            "value": 18.782962229202504,
            "unit": "us/iter",
            "extra": "iterations: 74502\ncpu: 18.782664572763537 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:16",
            "value": 0.2595856237550549,
            "unit": "us/iter",
            "extra": "iterations: 5395804\ncpu: 0.25957110766068786 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:256",
            "value": 0.48636809414581944,
            "unit": "us/iter",
            "extra": "iterations: 2881233\ncpu: 0.4863454954875312 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:1350",
            "value": 1.4245330906553841,
            "unit": "us/iter",
            "extra": "iterations: 982921\ncpu: 1.4244269610680826 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:8192",
            "value": 7.212701003199304,
            "unit": "us/iter",
            "extra": "iterations: 194079\ncpu: 7.212012324877978 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:16384",
            "value": 14.183010941007046,
            "unit": "us/iter",
            "extra": "iterations: 98437\ncpu: 14.181762284506778 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:16",
            "value": 0.2600904928241479,
            "unit": "us/iter",
            "extra": "iterations: 5376360\ncpu: 0.26007464753104076 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:256",
            "value": 0.4875448818617978,
            "unit": "us/iter",
            "extra": "iterations: 2871171\ncpu: 0.48751854974851827 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:1350",
            "value": 1.427282437880155,
            "unit": "us/iter",
            "extra": "iterations: 980081\ncpu: 1.4272417443047707 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:8192",
            "value": 7.214881717492873,
            "unit": "us/iter",
            "extra": "iterations: 194027\ncpu: 7.21463048441704 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:16384",
            "value": 14.171310383425457,
            "unit": "us/iter",
            "extra": "iterations: 98272\ncpu: 14.170815735916861 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:16",
            "value": 0.26276649988523715,
            "unit": "us/iter",
            "extra": "iterations: 5272370\ncpu: 0.26275496389668435 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:256",
            "value": 0.49472762441232365,
            "unit": "us/iter",
            "extra": "iterations: 2828719\ncpu: 0.4947029086310835 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:1350",
            "value": 1.4704783251904279,
            "unit": "us/iter",
            "extra": "iterations: 951750\ncpu: 1.470376997110631 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:8192",
            "value": 7.476379401159031,
            "unit": "us/iter",
            "extra": "iterations: 187195\ncpu: 7.475907919549278 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:16384",
            "value": 14.708142716142337,
            "unit": "us/iter",
            "extra": "iterations: 95238\ncpu: 14.7073200823202 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:16",
            "value": 0.26357909040918537,
            "unit": "us/iter",
            "extra": "iterations: 5302868\ncpu: 0.26356464294415777 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:256",
            "value": 0.49590315931021905,
            "unit": "us/iter",
            "extra": "iterations: 2819951\ncpu: 0.49588743385967327 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:1350",
            "value": 1.4743541795757298,
            "unit": "us/iter",
            "extra": "iterations: 948948\ncpu: 1.4743185095495186 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:8192",
            "value": 7.477212737084081,
            "unit": "us/iter",
            "extra": "iterations: 187170\ncpu: 7.476822744029429 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:16384",
            "value": 14.702025665779217,
            "unit": "us/iter",
            "extra": "iterations: 95302\ncpu: 14.701619262974715 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:16",
            "value": 1.518406678657494,
            "unit": "us/iter",
            "extra": "iterations: 921263\ncpu: 1.5183243123841892 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:256",
            "value": 9.514769979261184,
            "unit": "us/iter",
            "extra": "iterations: 147065\ncpu: 9.51448277292352 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:1350",
            "value": 45.91828218162699,
            "unit": "us/iter",
            "extra": "iterations: 30491\ncpu: 45.91710757272634 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:8192",
            "value": 273.096739172841,
            "unit": "us/iter",
            "extra": "iterations: 5126\ncpu: 273.08166796723214 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:16384",
            "value": 545.1811697158254,
            "unit": "us/iter",
            "extra": "iterations: 2569\ncpu: 545.1439233164668 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:16",
            "value": 1.8111948817599592,
            "unit": "us/iter",
            "extra": "iterations: 772961\ncpu: 1.8110722520282272 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:256",
            "value": 10.503037953894076,
            "unit": "us/iter",
            "extra": "iterations: 133346\ncpu: 10.502666259205116 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:1350",
            "value": 45.57421812616047,
            "unit": "us/iter",
            "extra": "iterations: 30707\ncpu: 45.5726757091213 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:8192",
            "value": 264.6252498109064,
            "unit": "us/iter",
            "extra": "iterations: 5288\ncpu: 264.6121068456816 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:16384",
            "value": 527.0260794427636,
            "unit": "us/iter",
            "extra": "iterations: 2656\ncpu: 526.9944356174686 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockEncryptSetup<128>/threads:1",
            "value": 0.019544305392829094,
            "unit": "us/iter",
            "extra": "iterations: 71576219\ncpu: 0.019543723789042386 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockEncryptSetup<256>/threads:1",
            "value": 0.02515177153037653,
            "unit": "us/iter",
            "extra": "iterations: 55633339\ncpu: 0.025150627540080257 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockEncrypt<128>/threads:1",
            "value": 0.010675562444257857,
            "unit": "us/iter",
            "extra": "iterations: 131141618\ncpu: 0.010674745609742478 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockEncrypt<256>/threads:1",
            "value": 0.014163529096189809,
            "unit": "us/iter",
            "extra": "iterations: 98893343\ncpu: 0.01416289748643609 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockDecryptSetup<128>/threads:1",
            "value": 0.022956777860278946,
            "unit": "us/iter",
            "extra": "iterations: 60967921\ncpu: 0.022955811105975155 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockDecryptSetup<256>/threads:1",
            "value": 0.03090585554463303,
            "unit": "us/iter",
            "extra": "iterations: 45296316\ncpu: 0.030904556344051606 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockDecrypt<128>/threads:1",
            "value": 0.010665019451068007,
            "unit": "us/iter",
            "extra": "iterations: 131300764\ncpu: 0.010664441122368864 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockDecrypt<256>/threads:1",
            "value": 0.014166735134341501,
            "unit": "us/iter",
            "extra": "iterations: 98922594\ncpu: 0.014165801717654448 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedBase64/threads:1",
            "value": 3.265719926191533,
            "unit": "us/iter",
            "extra": "iterations: 429219\ncpu: 3.2654809153369246 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedEd25519/threads:1",
            "value": 14.338037592522396,
            "unit": "us/iter",
            "extra": "iterations: 97679\ncpu: 14.33718425659574 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedEd25519Sign/threads:1",
            "value": 14.504787224117191,
            "unit": "us/iter",
            "extra": "iterations: 96463\ncpu: 14.504527155490015 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedEd25519Verify/threads:1",
            "value": 52.730014787088884,
            "unit": "us/iter",
            "extra": "iterations: 26983\ncpu: 52.72856602305195 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedCurve25519BasePointMultiply/threads:1",
            "value": 13.398634952798945,
            "unit": "us/iter",
            "extra": "iterations: 104129\ncpu: 13.397673587569367 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedCurve25519ArbitraryPointMultiply/threads:1",
            "value": 32.71596510568784,
            "unit": "us/iter",
            "extra": "iterations: 42815\ncpu: 32.713953170618424 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDH/p224/threads:1",
            "value": 319.1749553429022,
            "unit": "us/iter",
            "extra": "iterations: 4389\ncpu: 319.14950558213627 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDH/p256/threads:1",
            "value": 59.2531879603758,
            "unit": "us/iter",
            "extra": "iterations: 23622\ncpu: 59.24883532300558 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDH/p384/threads:1",
            "value": 921.5706646903992,
            "unit": "us/iter",
            "extra": "iterations: 1518\ncpu: 921.5094664031544 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDH/p521/threads:1",
            "value": 2191.9335273864936,
            "unit": "us/iter",
            "extra": "iterations: 639\ncpu: 2191.759780907656 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSASign/p224/threads:1",
            "value": 176.08634389537312,
            "unit": "us/iter",
            "extra": "iterations: 7953\ncpu: 176.0757013705526 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSASign/p256/threads:1",
            "value": 19.581185668163272,
            "unit": "us/iter",
            "extra": "iterations: 71547\ncpu: 19.580641480425456 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSASign/p384/threads:1",
            "value": 511.84512692025527,
            "unit": "us/iter",
            "extra": "iterations: 2734\ncpu: 511.8315329188032 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSASign/p521/threads:1",
            "value": 1230.1405083406573,
            "unit": "us/iter",
            "extra": "iterations: 1139\ncpu: 1230.1005513608538 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSAVerify/p224/threads:1",
            "value": 174.47030514614326,
            "unit": "us/iter",
            "extra": "iterations: 8006\ncpu: 174.46031713714186 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSAVerify/p256/threads:1",
            "value": 54.11611136890801,
            "unit": "us/iter",
            "extra": "iterations: 25860\ncpu: 54.11270058004638 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSAVerify/p384/threads:1",
            "value": 526.782821389207,
            "unit": "us/iter",
            "extra": "iterations: 2721\ncpu: 526.749176405724 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSAVerify/p521/threads:1",
            "value": 1262.6508633093304,
            "unit": "us/iter",
            "extra": "iterations: 1112\ncpu: 1262.5696178057938 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:16/threads:1",
            "value": 0.06208900891383016,
            "unit": "us/iter",
            "extra": "iterations: 22607893\ncpu: 0.06208431816268821 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:256/threads:1",
            "value": 0.2196914061727686,
            "unit": "us/iter",
            "extra": "iterations: 6372830\ncpu: 0.21967623081111928 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:1350/threads:1",
            "value": 0.8633386912919119,
            "unit": "us/iter",
            "extra": "iterations: 1622073\ncpu: 0.8632525817272089 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:8192/threads:1",
            "value": 4.932324067844373,
            "unit": "us/iter",
            "extra": "iterations: 283885\ncpu: 4.931960741145217 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:16384/threads:1",
            "value": 9.800196784196777,
            "unit": "us/iter",
            "extra": "iterations: 142857\ncpu: 9.79955584255575 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:16/threads:1",
            "value": 0.07530389952026116,
            "unit": "us/iter",
            "extra": "iterations: 18602596\ncpu: 0.0753017310057163 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:256/threads:1",
            "value": 0.2740057340201468,
            "unit": "us/iter",
            "extra": "iterations: 5093634\ncpu: 0.2739892281227931 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:1350/threads:1",
            "value": 1.0942064703695784,
            "unit": "us/iter",
            "extra": "iterations: 1277825\ncpu: 1.0941103085320707 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:8192/threads:1",
            "value": 6.241390346732977,
            "unit": "us/iter",
            "extra": "iterations: 224380\ncpu: 6.240847000623899 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:16384/threads:1",
            "value": 12.410718767729705,
            "unit": "us/iter",
            "extra": "iterations: 112800\ncpu: 12.409877287234334 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:16/threads:1",
            "value": 0.25030111694169715,
            "unit": "us/iter",
            "extra": "iterations: 5602262\ncpu: 0.25029318157558755 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:256/threads:1",
            "value": 0.6872998052777101,
            "unit": "us/iter",
            "extra": "iterations: 2028530\ncpu: 0.6872733333990423 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:1350/threads:1",
            "value": 2.424258227909489,
            "unit": "us/iter",
            "extra": "iterations: 577668\ncpu: 2.424139690964333 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:8192/threads:1",
            "value": 14.147690806815776,
            "unit": "us/iter",
            "extra": "iterations: 99019\ncpu: 14.145874165563983 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:16384/threads:1",
            "value": 28.01944529419907,
            "unit": "us/iter",
            "extra": "iterations: 49949\ncpu: 28.018032493142883 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:16/threads:1",
            "value": 0.22527836689531053,
            "unit": "us/iter",
            "extra": "iterations: 6210796\ncpu: 0.22525690088678163 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:256/threads:1",
            "value": 0.4314693344563581,
            "unit": "us/iter",
            "extra": "iterations: 3243559\ncpu: 0.43144045599294517 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:1350/threads:1",
            "value": 2.317283856510376,
            "unit": "us/iter",
            "extra": "iterations: 603333\ncpu: 2.3172025796699915 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:8192/threads:1",
            "value": 13.368696240686866,
            "unit": "us/iter",
            "extra": "iterations: 104833\ncpu: 13.368236709814228 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:16384/threads:1",
            "value": 26.71078235417542,
            "unit": "us/iter",
            "extra": "iterations: 52443\ncpu: 26.709626585054146 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHashToCurve/hash-to-curve P256_XMD:SHA-256_SSWU_RO_/threads:1",
            "value": 24.21986123283326,
            "unit": "us/iter",
            "extra": "iterations: 57737\ncpu: 24.21813228952006 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHashToCurve/hash-to-curve P384_XMD:SHA-384_SSWU_RO_/threads:1",
            "value": 73.99759250039442,
            "unit": "us/iter",
            "extra": "iterations: 18881\ncpu: 73.99448858641023 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHashToCurve/hash-to-scalar P384_XMD:SHA-512/threads:1",
            "value": 1.2264734933969932,
            "unit": "us/iter",
            "extra": "iterations: 1140546\ncpu: 1.2263891776395097 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHRSSGenerate/threads:1",
            "value": 119.27482286785339,
            "unit": "us/iter",
            "extra": "iterations: 11737\ncpu: 119.26831941722695 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHRSSEncap/threads:1",
            "value": 7.1633328673766705,
            "unit": "us/iter",
            "extra": "iterations: 195297\ncpu: 7.162682504083329 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHRSSDecap/threads:1",
            "value": 25.76853780770565,
            "unit": "us/iter",
            "extra": "iterations: 54354\ncpu: 25.766962210693308 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAKeyGen/ml_dsa_44/threads:1",
            "value": 64.7097182486498,
            "unit": "us/iter",
            "extra": "iterations: 21629\ncpu: 64.70590998196896 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSASign/ml_dsa_44/threads:1",
            "value": 221.56047622783797,
            "unit": "us/iter",
            "extra": "iterations: 6373\ncpu: 221.55036074062218 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAParsePubKey/ml_dsa_44/threads:1",
            "value": 4.458068262309734,
            "unit": "us/iter",
            "extra": "iterations: 313980\ncpu: 4.457904799668719 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerify/ml_dsa_44/threads:1",
            "value": 54.031098781146234,
            "unit": "us/iter",
            "extra": "iterations: 25926\ncpu: 54.02823027077041 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerifyBadSignature/ml_dsa_44/threads:1",
            "value": 53.96145648566278,
            "unit": "us/iter",
            "extra": "iterations: 25911\ncpu: 53.95850499787751 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAKeyGen/ml_dsa_65/threads:1",
            "value": 121.55944944405609,
            "unit": "us/iter",
            "extra": "iterations: 11512\ncpu: 121.55537074357225 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSASign/ml_dsa_65/threads:1",
            "value": 350.4143068947704,
            "unit": "us/iter",
            "extra": "iterations: 3858\ncpu: 350.399653965781 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAParsePubKey/ml_dsa_65/threads:1",
            "value": 6.60940034976531,
            "unit": "us/iter",
            "extra": "iterations: 212714\ncpu: 6.609165875306688 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerify/ml_dsa_65/threads:1",
            "value": 87.09846790529829,
            "unit": "us/iter",
            "extra": "iterations: 16093\ncpu: 87.09393605915542 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerifyBadSignature/ml_dsa_65/threads:1",
            "value": 87.10404493611117,
            "unit": "us/iter",
            "extra": "iterations: 16045\ncpu: 87.09998840760142 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAKeyGen/ml_dsa_87/threads:1",
            "value": 168.9693687002681,
            "unit": "us/iter",
            "extra": "iterations: 8294\ncpu: 168.96432204002673 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSASign/ml_dsa_87/threads:1",
            "value": 415.14332482735324,
            "unit": "us/iter",
            "extra": "iterations: 3331\ncpu: 415.1270963674484 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAParsePubKey/ml_dsa_87/threads:1",
            "value": 8.733163939743678,
            "unit": "us/iter",
            "extra": "iterations: 160315\ncpu: 8.73280278826052 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerify/ml_dsa_87/threads:1",
            "value": 144.98313770593114,
            "unit": "us/iter",
            "extra": "iterations: 9651\ncpu: 144.97679110971998 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerifyBadSignature/ml_dsa_87/threads:1",
            "value": 144.8776919800567,
            "unit": "us/iter",
            "extra": "iterations: 9626\ncpu: 144.86695896530125 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768KeyGenDecap/threads:1",
            "value": 60.986726576104154,
            "unit": "us/iter",
            "extra": "iterations: 22968\ncpu: 60.98079380006583 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768ParseEncap/threads:1",
            "value": 35.2351619579006,
            "unit": "us/iter",
            "extra": "iterations: 39751\ncpu: 35.23707863958411 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024KeyGenDecap/threads:1",
            "value": 83.8444594206382,
            "unit": "us/iter",
            "extra": "iterations: 16708\ncpu: 83.83684959300601 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024ParseEncap/threads:1",
            "value": 46.96760803920032,
            "unit": "us/iter",
            "extra": "iterations: 29804\ncpu: 46.967328479825696 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768KeyGenOnly/threads:1",
            "value": 30.27692225751363,
            "unit": "us/iter",
            "extra": "iterations: 46281\ncpu: 30.27517086925497 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768PrivateKeyFromSeedOnly/threads:1",
            "value": 29.96540881535851,
            "unit": "us/iter",
            "extra": "iterations: 46647\ncpu: 29.977078375820135 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768DecapOnly/threads:1",
            "value": 30.93671317354766,
            "unit": "us/iter",
            "extra": "iterations: 45219\ncpu: 30.939976182692583 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768ParseOnly/threads:1",
            "value": 14.497564305468417,
            "unit": "us/iter",
            "extra": "iterations: 96703\ncpu: 14.494508826000734 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768EncapOnly/threads:1",
            "value": 20.913654143140757,
            "unit": "us/iter",
            "extra": "iterations: 66915\ncpu: 20.910029470031162 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024KeyGenOnly/threads:1",
            "value": 43.51793997636579,
            "unit": "us/iter",
            "extra": "iterations: 32154\ncpu: 43.515937146234144 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024PrivateKeyFromSeedOnly/threads:1",
            "value": 43.225720295488685,
            "unit": "us/iter",
            "extra": "iterations: 32377\ncpu: 43.236901164110414 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024DecapOnly/threads:1",
            "value": 40.64949236231903,
            "unit": "us/iter",
            "extra": "iterations: 34436\ncpu: 40.64869604474931 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024ParseOnly/threads:1",
            "value": 19.62569260066783,
            "unit": "us/iter",
            "extra": "iterations: 71386\ncpu: 19.61829288636438 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024EncapOnly/threads:1",
            "value": 27.631372996386343,
            "unit": "us/iter",
            "extra": "iterations: 50660\ncpu: 27.62936636388593 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:16/threads:1",
            "value": 0.5908097213989005,
            "unit": "us/iter",
            "extra": "iterations: 2361800\ncpu: 0.5907758277584774 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:256/threads:1",
            "value": 0.6191005151846883,
            "unit": "us/iter",
            "extra": "iterations: 2261519\ncpu: 0.6190658946486767 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:1350/threads:1",
            "value": 0.7913322454580898,
            "unit": "us/iter",
            "extra": "iterations: 1769198\ncpu: 0.7912846572288352 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:8192/threads:1",
            "value": 1.6800509251705513,
            "unit": "us/iter",
            "extra": "iterations: 833576\ncpu: 1.679991247348799 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:16384/threads:1",
            "value": 2.790448287844931,
            "unit": "us/iter",
            "extra": "iterations: 500714\ncpu: 2.790330488062979 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAParsePrivateKey/2048/threads:1",
            "value": 88.50277664012611,
            "unit": "us/iter",
            "extra": "iterations: 15822\ncpu: 88.49948761218158 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSASign/2048/threads:1",
            "value": 592.4800753598669,
            "unit": "us/iter",
            "extra": "iterations: 2362\ncpu: 592.4561795088623 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndSign/2048/threads:1",
            "value": 687.1044941119039,
            "unit": "us/iter",
            "extra": "iterations: 2038\ncpu: 687.0730333660358 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAVerify/2048/threads:1",
            "value": 15.995462626103205,
            "unit": "us/iter",
            "extra": "iterations: 88618\ncpu: 15.993901667833734 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndVerify/2048/threads:1",
            "value": 18.358281619500573,
            "unit": "us/iter",
            "extra": "iterations: 76962\ncpu: 18.357724136587102 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAParsePrivateKey/3072/threads:1",
            "value": 164.08403694581327,
            "unit": "us/iter",
            "extra": "iterations: 8526\ncpu: 164.071606380494 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSASign/3072/threads:1",
            "value": 1805.8134870801707,
            "unit": "us/iter",
            "extra": "iterations: 774\ncpu: 1805.7054328165784 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndSign/3072/threads:1",
            "value": 1983.1319362606403,
            "unit": "us/iter",
            "extra": "iterations: 706\ncpu: 1983.018147308789 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAVerify/3072/threads:1",
            "value": 33.62242774636106,
            "unit": "us/iter",
            "extra": "iterations: 41382\ncpu: 33.620388429750626 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndVerify/3072/threads:1",
            "value": 37.89796853573355,
            "unit": "us/iter",
            "extra": "iterations: 36899\ncpu: 37.89582560503221 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAParsePrivateKey/4096/threads:1",
            "value": 258.65463997781285,
            "unit": "us/iter",
            "extra": "iterations: 5408\ncpu: 258.6468269230679 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSASign/4096/threads:1",
            "value": 4064.6412587208683,
            "unit": "us/iter",
            "extra": "iterations: 344\ncpu: 4064.5262819767527 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndSign/4096/threads:1",
            "value": 4345.423767080692,
            "unit": "us/iter",
            "extra": "iterations: 322\ncpu: 4345.315586956587 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAVerify/4096/threads:1",
            "value": 58.35550847245599,
            "unit": "us/iter",
            "extra": "iterations: 23960\ncpu: 58.35257153589448 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndVerify/4096/threads:1",
            "value": 65.61090273812414,
            "unit": "us/iter",
            "extra": "iterations: 21365\ncpu: 65.6089280131045 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedScrypt/(N = 1024, r = 8, p = 16)/threads:1",
            "value": 29142.601687501232,
            "unit": "us/iter",
            "extra": "iterations: 48\ncpu: 29139.420375000685 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedScrypt/(N = 16384, r = 8, p = 1)/threads:1",
            "value": 29131.135041666315,
            "unit": "us/iter",
            "extra": "iterations: 48\ncpu: 29127.478874999706 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/16/threads:1",
            "value": 0.021709045494133432,
            "unit": "us/iter",
            "extra": "iterations: 64418504\ncpu: 0.021707290051318835 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/256/threads:1",
            "value": 0.12742713612589163,
            "unit": "us/iter",
            "extra": "iterations: 10982253\ncpu: 0.12741436825393962 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/1350/threads:1",
            "value": 0.6118999787735392,
            "unit": "us/iter",
            "extra": "iterations: 2284885\ncpu: 0.6118659499274318 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/8192/threads:1",
            "value": 3.631805075207452,
            "unit": "us/iter",
            "extra": "iterations: 385600\ncpu: 3.6316543283195424 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/16384/threads:1",
            "value": 7.248612436821876,
            "unit": "us/iter",
            "extra": "iterations: 193104\ncpu: 7.24821854544696 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSLHDSA/threads:1",
            "value": 43251.661624999826,
            "unit": "us/iter",
            "extra": "iterations: 32\ncpu: 43249.601531247354 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSLHDSASign/threads:1",
            "value": 328362.9912500032,
            "unit": "us/iter",
            "extra": "iterations: 4\ncpu: 328344.44074998714 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSLHDSAVerify/threads:1",
            "value": 331.56501704272733,
            "unit": "us/iter",
            "extra": "iterations: 4166\ncpu: 331.5540062409997 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSPAKE2/threads:1",
            "value": 117.65474317398962,
            "unit": "us/iter",
            "extra": "iterations: 11903\ncpu: 117.64537729983358 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedX509/threads:1",
            "value": 3.6314468469405754,
            "unit": "us/iter",
            "extra": "iterations: 385340\ncpu: 3.6310667696059604 us\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Rudolf Polzer",
            "username": "divVerent",
            "email": "divVerent@gmail.com"
          },
          "committer": {
            "name": "Rudolf Polzer",
            "username": "divVerent",
            "email": "divVerent@gmail.com"
          },
          "id": "600dbc4e26f12b7f8215827a02595448842a6622",
          "message": "Add benchmark workflow.",
          "timestamp": "2026-07-09T10:05:42Z",
          "url": "https://github.com/divVerent/boringssl/commit/600dbc4e26f12b7f8215827a02595448842a6622"
        },
        "date": 1783746214725,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpeedRSAKeyGen/2048",
            "value": 79371.65300000022,
            "unit": "us/iter",
            "extra": "iterations: 18\ncpu: 79366.24172222224 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAKeyGen/3072",
            "value": 335069.620750005,
            "unit": "us/iter",
            "extra": "iterations: 4\ncpu: 335064.64175000007 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAKeyGen/4096",
            "value": 360079.2589999931,
            "unit": "us/iter",
            "extra": "iterations: 3\ncpu: 359964.4736666668 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSelfTest",
            "value": 4476.4034136807495,
            "unit": "us/iter",
            "extra": "iterations: 307\ncpu: 4475.541908794787 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedTrustTokenKeyGen/SpeedTrustTokenKeyGen experiment_v1",
            "value": 1000.437871999992,
            "unit": "us/iter",
            "extra": "iterations: 1000\ncpu: 1000.2771300000006 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedTrustTokenKeyGen/SpeedTrustTokenKeyGen experiment_v2_voprf",
            "value": 514.7453006247673,
            "unit": "us/iter",
            "extra": "iterations: 2721\ncpu: 514.7167717750825 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedTrustTokenKeyGen/SpeedTrustTokenKeyGen experiment_v2_pmb",
            "value": 991.9482655807241,
            "unit": "us/iter",
            "extra": "iterations: 1412\ncpu: 991.8872655807368 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginIssueBatch1",
            "value": 633.3633061962813,
            "unit": "us/iter",
            "extra": "iterations: 2211\ncpu: 633.2843618272279 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginIssueBatch10",
            "value": 6339.775859728424,
            "unit": "us/iter",
            "extra": "iterations: 221\ncpu: 6339.00461538462 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1IssueBatch1",
            "value": 6105.474458515289,
            "unit": "us/iter",
            "extra": "iterations: 229\ncpu: 6104.874759825328 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1IssueBatch10",
            "value": 21833.576656249854,
            "unit": "us/iter",
            "extra": "iterations: 64\ncpu: 21831.67403124997 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1FinishIssueBatch1",
            "value": 7177.333841836713,
            "unit": "us/iter",
            "extra": "iterations: 196\ncpu: 7176.915704081634 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1FinishIssueBatch10",
            "value": 25383.971490909247,
            "unit": "us/iter",
            "extra": "iterations: 55\ncpu: 25382.089981818208 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginRedeemBatch1",
            "value": 0.1645973306547677,
            "unit": "us/iter",
            "extra": "iterations: 8676285\ncpu: 0.16458907262728217 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginRedeemBatch10",
            "value": 0.16357957705682333,
            "unit": "us/iter",
            "extra": "iterations: 8636101\ncpu: 0.1635703234596262 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1RedeemBatch1",
            "value": 1723.225250922508,
            "unit": "us/iter",
            "extra": "iterations: 813\ncpu: 1723.1071820418213 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1RedeemBatch10",
            "value": 1723.350817733975,
            "unit": "us/iter",
            "extra": "iterations: 812\ncpu: 1723.2097229064009 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginIssueBatch1",
            "value": 633.2942924954826,
            "unit": "us/iter",
            "extra": "iterations: 2212\ncpu: 633.2520551537057 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginIssueBatch10",
            "value": 6332.224606334872,
            "unit": "us/iter",
            "extra": "iterations: 221\ncpu: 6331.730493212665 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbIssueBatch1",
            "value": 6101.433733624518,
            "unit": "us/iter",
            "extra": "iterations: 229\ncpu: 6101.038611353709 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbIssueBatch10",
            "value": 21817.821593749897,
            "unit": "us/iter",
            "extra": "iterations: 64\ncpu: 21816.079281249957 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbFinishIssueBatch1",
            "value": 7151.698148717928,
            "unit": "us/iter",
            "extra": "iterations: 195\ncpu: 7151.1666615384465 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbFinishIssueBatch10",
            "value": 25339.896181818425,
            "unit": "us/iter",
            "extra": "iterations: 55\ncpu: 25338.15163636371 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginRedeemBatch1",
            "value": 0.15672006298188182,
            "unit": "us/iter",
            "extra": "iterations: 8969564\ncpu: 0.15670819584987614 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginRedeemBatch10",
            "value": 0.1608294291110182,
            "unit": "us/iter",
            "extra": "iterations: 8946468\ncpu: 0.16081553290080533 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbRedeemBatch1",
            "value": 1723.8308879310348,
            "unit": "us/iter",
            "extra": "iterations: 812\ncpu: 1723.714029556647 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbRedeemBatch10",
            "value": 1723.5300172413765,
            "unit": "us/iter",
            "extra": "iterations: 812\ncpu: 1723.3613115763546 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginIssueBatch1",
            "value": 635.0160866999548,
            "unit": "us/iter",
            "extra": "iterations: 2203\ncpu: 634.9603545165694 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginIssueBatch10",
            "value": 6346.611440909168,
            "unit": "us/iter",
            "extra": "iterations: 220\ncpu: 6346.110545454535 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfIssueBatch1",
            "value": 2361.3921781512513,
            "unit": "us/iter",
            "extra": "iterations: 595\ncpu: 2361.1757495798342 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfIssueBatch10",
            "value": 8909.517458598664,
            "unit": "us/iter",
            "extra": "iterations: 157\ncpu: 8908.929923566879 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfFinishIssueBatch1",
            "value": 2463.5241862917746,
            "unit": "us/iter",
            "extra": "iterations: 569\ncpu: 2463.326161687167 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfFinishIssueBatch10",
            "value": 9080.286512986784,
            "unit": "us/iter",
            "extra": "iterations: 154\ncpu: 9079.37583116885 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginRedeemBatch1",
            "value": 0.1544068719721193,
            "unit": "us/iter",
            "extra": "iterations: 10250158\ncpu: 0.1543989701427045 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginRedeemBatch10",
            "value": 0.13662362867190542,
            "unit": "us/iter",
            "extra": "iterations: 9079884\ncpu: 0.1366132923063768 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfRedeemBatch1",
            "value": 558.8023359936159,
            "unit": "us/iter",
            "extra": "iterations: 2506\ncpu: 558.7702737430127 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfRedeemBatch10",
            "value": 558.7681509584759,
            "unit": "us/iter",
            "extra": "iterations: 2504\ncpu: 558.7304277156545 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:16",
            "value": 0.08864488741560198,
            "unit": "us/iter",
            "extra": "iterations: 15792952\ncpu: 0.08863966597251809 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:256",
            "value": 0.11366584834234764,
            "unit": "us/iter",
            "extra": "iterations: 12326816\ncpu: 0.11365704558257313 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:1350",
            "value": 0.2941441263184099,
            "unit": "us/iter",
            "extra": "iterations: 4765861\ncpu: 0.294123311191828 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:8192",
            "value": 1.1015057880041728,
            "unit": "us/iter",
            "extra": "iterations: 1275742\ncpu: 1.1014590316850992 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:16384",
            "value": 2.1726590550313354,
            "unit": "us/iter",
            "extra": "iterations: 644233\ncpu: 2.172501657009199 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:16",
            "value": 0.09742594999242608,
            "unit": "us/iter",
            "extra": "iterations: 14379141\ncpu: 0.09741799284115854 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:256",
            "value": 0.12001733311834464,
            "unit": "us/iter",
            "extra": "iterations: 11653183\ncpu: 0.12001194214490568 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:1350",
            "value": 0.2946841465817293,
            "unit": "us/iter",
            "extra": "iterations: 4750824\ncpu: 0.2946602686186629 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:8192",
            "value": 1.0734915202181434,
            "unit": "us/iter",
            "extra": "iterations: 1305635\ncpu: 1.0734027028993576 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:16384",
            "value": 2.0523101841404774,
            "unit": "us/iter",
            "extra": "iterations: 682414\ncpu: 2.0521844085848246 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:16",
            "value": 0.0929036716186304,
            "unit": "us/iter",
            "extra": "iterations: 15048649\ncpu: 0.09289854683965308 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:256",
            "value": 0.11730233239944488,
            "unit": "us/iter",
            "extra": "iterations: 11945038\ncpu: 0.1172935990659883 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:1350",
            "value": 0.31043619978742504,
            "unit": "us/iter",
            "extra": "iterations: 4536662\ncpu: 0.31041396890488976 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:8192",
            "value": 1.1508038280187416,
            "unit": "us/iter",
            "extra": "iterations: 1216086\ncpu: 1.15071398815545 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:16384",
            "value": 2.213361459115533,
            "unit": "us/iter",
            "extra": "iterations: 632575\ncpu: 2.213086600007905 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:16",
            "value": 0.10020794814763448,
            "unit": "us/iter",
            "extra": "iterations: 13955931\ncpu: 0.10020257294192775 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:256",
            "value": 0.12390170357751208,
            "unit": "us/iter",
            "extra": "iterations: 11299750\ncpu: 0.1238930053319766 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:1350",
            "value": 0.31106880448506236,
            "unit": "us/iter",
            "extra": "iterations: 4501349\ncpu: 0.31104876760278116 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:8192",
            "value": 1.1265268049354253,
            "unit": "us/iter",
            "extra": "iterations: 1242122\ncpu: 1.126465083139983 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:16384",
            "value": 2.1658245044320927,
            "unit": "us/iter",
            "extra": "iterations: 646985\ncpu: 2.1655684536735786 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:16",
            "value": 0.09876988293789585,
            "unit": "us/iter",
            "extra": "iterations: 14151719\ncpu: 0.09876599189116166 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:256",
            "value": 0.1236184971634878,
            "unit": "us/iter",
            "extra": "iterations: 11310718\ncpu: 0.12360902703082104 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:1350",
            "value": 0.32932438545245923,
            "unit": "us/iter",
            "extra": "iterations: 4248939\ncpu: 0.32930566901525227 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:8192",
            "value": 1.2324364811443798,
            "unit": "us/iter",
            "extra": "iterations: 1132766\ncpu: 1.2323064993122979 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:16384",
            "value": 2.3797549383401866,
            "unit": "us/iter",
            "extra": "iterations: 585065\ncpu: 2.3796046934955832 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:16",
            "value": 0.10286979929131003,
            "unit": "us/iter",
            "extra": "iterations: 13666623\ncpu: 0.10286165792383387 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:256",
            "value": 0.12790478100471395,
            "unit": "us/iter",
            "extra": "iterations: 10949916\ncpu: 0.12789411005527235 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:1350",
            "value": 0.3258504785123113,
            "unit": "us/iter",
            "extra": "iterations: 4297904\ncpu: 0.32583032287366204 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:8192",
            "value": 1.1873467241706825,
            "unit": "us/iter",
            "extra": "iterations: 1178816\ncpu: 1.187267441229165 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:16384",
            "value": 2.2836400933373806,
            "unit": "us/iter",
            "extra": "iterations: 613259\ncpu: 2.283449244120342 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:16",
            "value": 0.17868361475969252,
            "unit": "us/iter",
            "extra": "iterations: 7843852\ncpu: 0.17867528989583203 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:256",
            "value": 0.27790483856246023,
            "unit": "us/iter",
            "extra": "iterations: 5039720\ncpu: 0.27788624368020515 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:1350",
            "value": 0.8107718151198972,
            "unit": "us/iter",
            "extra": "iterations: 1726784\ncpu: 0.8107292029576355 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:8192",
            "value": 3.5885570075338853,
            "unit": "us/iter",
            "extra": "iterations: 389966\ncpu: 3.5882954539626906 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:16384",
            "value": 6.986661395562398,
            "unit": "us/iter",
            "extra": "iterations: 200464\ncpu: 6.9864650510815105 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:16",
            "value": 0.18164429313598648,
            "unit": "us/iter",
            "extra": "iterations: 7709050\ncpu: 0.18163049947788495 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:256",
            "value": 0.2797814311685646,
            "unit": "us/iter",
            "extra": "iterations: 5008802\ncpu: 0.27975357520620464 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:1350",
            "value": 0.7617634976430089,
            "unit": "us/iter",
            "extra": "iterations: 1836654\ncpu: 0.7617023326113666 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:8192",
            "value": 3.556587766828938,
            "unit": "us/iter",
            "extra": "iterations: 393651\ncpu: 3.5561987750571 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:16384",
            "value": 6.9248573259057915,
            "unit": "us/iter",
            "extra": "iterations: 202132\ncpu: 6.92450057882981 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:16",
            "value": 0.2955800826552121,
            "unit": "us/iter",
            "extra": "iterations: 4739447\ncpu: 0.2954590501803275 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:256",
            "value": 0.3937459336404287,
            "unit": "us/iter",
            "extra": "iterations: 3556744\ncpu: 0.3937090023909547 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:1350",
            "value": 0.9272689563771055,
            "unit": "us/iter",
            "extra": "iterations: 1509070\ncpu: 0.9272007885651378 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:8192",
            "value": 3.7032221228754074,
            "unit": "us/iter",
            "extra": "iterations: 378025\ncpu: 3.7029479134977943 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:16384",
            "value": 7.109570248689394,
            "unit": "us/iter",
            "extra": "iterations: 196872\ncpu: 7.109130272461179 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:16",
            "value": 0.28000695891176314,
            "unit": "us/iter",
            "extra": "iterations: 5001213\ncpu: 0.2799852745723912 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:256",
            "value": 0.3762217735613607,
            "unit": "us/iter",
            "extra": "iterations: 3724912\ncpu: 0.3761805288286002 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:1350",
            "value": 0.8606565612686181,
            "unit": "us/iter",
            "extra": "iterations: 1625204\ncpu: 0.8605838054791893 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:8192",
            "value": 3.66075536562596,
            "unit": "us/iter",
            "extra": "iterations: 382481\ncpu: 3.660446903244853 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:16384",
            "value": 7.029954166373771,
            "unit": "us/iter",
            "extra": "iterations: 199046\ncpu: 7.029395697476958 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:16",
            "value": 0.24282815468018606,
            "unit": "us/iter",
            "extra": "iterations: 5768263\ncpu: 0.24281111384830925 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:256",
            "value": 0.593433129472959,
            "unit": "us/iter",
            "extra": "iterations: 2357496\ncpu: 0.5933859366039208 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:1350",
            "value": 2.1629878032207657,
            "unit": "us/iter",
            "extra": "iterations: 647548\ncpu: 2.1627382572411604 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:8192",
            "value": 11.904661748824244,
            "unit": "us/iter",
            "extra": "iterations: 117599\ncpu: 11.903834888051662 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:16384",
            "value": 23.582911750340624,
            "unit": "us/iter",
            "extra": "iterations: 59377\ncpu: 23.581868501271618 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:16",
            "value": 0.5509864825710739,
            "unit": "us/iter",
            "extra": "iterations: 2540202\ncpu: 0.5509721742601593 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:256",
            "value": 1.6020450746295538,
            "unit": "us/iter",
            "extra": "iterations: 875792\ncpu: 1.6019078171529066 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:1350",
            "value": 2.3683243768417475,
            "unit": "us/iter",
            "extra": "iterations: 591824\ncpu: 2.3681008019276164 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:8192",
            "value": 7.0974665966588315,
            "unit": "us/iter",
            "extra": "iterations: 197121\ncpu: 7.096821652690463 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:16384",
            "value": 12.905336996236928,
            "unit": "us/iter",
            "extra": "iterations: 109749\ncpu: 12.90409861593277 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:16",
            "value": 0.2406405344436996,
            "unit": "us/iter",
            "extra": "iterations: 5819584\ncpu: 0.2406221640584638 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:256",
            "value": 0.6136420031369723,
            "unit": "us/iter",
            "extra": "iterations: 2281182\ncpu: 0.6135837784972924 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:1350",
            "value": 2.244750945641462,
            "unit": "us/iter",
            "extra": "iterations: 625237\ncpu: 2.2445781391696005 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:8192",
            "value": 12.240756016778732,
            "unit": "us/iter",
            "extra": "iterations: 114430\ncpu: 12.239641518832448 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:16384",
            "value": 24.24050908052175,
            "unit": "us/iter",
            "extra": "iterations: 57761\ncpu: 24.237727826734265 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:16",
            "value": 0.675321173361896,
            "unit": "us/iter",
            "extra": "iterations: 2047757\ncpu: 0.6752788031001751 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:256",
            "value": 1.7134073802245542,
            "unit": "us/iter",
            "extra": "iterations: 817509\ncpu: 1.7132929973859434 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:1350",
            "value": 2.505184124270685,
            "unit": "us/iter",
            "extra": "iterations: 559231\ncpu: 2.5050484987420294 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:8192",
            "value": 7.515292759007583,
            "unit": "us/iter",
            "extra": "iterations: 186259\ncpu: 7.514758304296719 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:16384",
            "value": 13.497323184785753,
            "unit": "us/iter",
            "extra": "iterations: 103693\ncpu: 13.496007724725605 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:16",
            "value": 0.24991138921270456,
            "unit": "us/iter",
            "extra": "iterations: 5606744\ncpu: 0.24989366056306725 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:256",
            "value": 0.6808337628753098,
            "unit": "us/iter",
            "extra": "iterations: 2054902\ncpu: 0.6807637084396244 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:1350",
            "value": 2.5892527128200413,
            "unit": "us/iter",
            "extra": "iterations: 540950\ncpu: 2.5891230243090826 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:8192",
            "value": 14.463330461373587,
            "unit": "us/iter",
            "extra": "iterations: 96798\ncpu: 14.462503522799956 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:16384",
            "value": 28.697184835191553,
            "unit": "us/iter",
            "extra": "iterations: 48784\ncpu: 28.69440162758293 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:16",
            "value": 0.5546814370090071,
            "unit": "us/iter",
            "extra": "iterations: 2513415\ncpu: 0.5546377649532662 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:256",
            "value": 1.6105260344748544,
            "unit": "us/iter",
            "extra": "iterations: 869040\ncpu: 1.6104008261990022 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:1350",
            "value": 2.423743623770395,
            "unit": "us/iter",
            "extra": "iterations: 577222\ncpu: 2.423608751918688 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:8192",
            "value": 7.493647467346415,
            "unit": "us/iter",
            "extra": "iterations: 188340\ncpu: 7.493215116279018 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:16384",
            "value": 13.449509160920822,
            "unit": "us/iter",
            "extra": "iterations: 104138\ncpu: 13.448342862355574 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:16",
            "value": 0.1314278714959201,
            "unit": "us/iter",
            "extra": "iterations: 10661638\ncpu: 0.13142146760188095 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:256",
            "value": 0.23426050235217843,
            "unit": "us/iter",
            "extra": "iterations: 5965735\ncpu: 0.2342502107451983 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:1350",
            "value": 0.5684360696207102,
            "unit": "us/iter",
            "extra": "iterations: 2453982\ncpu: 0.5684128147639217 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:8192",
            "value": 2.365526896630903,
            "unit": "us/iter",
            "extra": "iterations: 592063\ncpu: 2.365378932647363 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:16384",
            "value": 4.5825704194938,
            "unit": "us/iter",
            "extra": "iterations: 305654\ncpu: 4.582217445215873 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:16",
            "value": 0.18027309437155462,
            "unit": "us/iter",
            "extra": "iterations: 7769025\ncpu: 0.18025669707588649 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:256",
            "value": 0.2499663086716181,
            "unit": "us/iter",
            "extra": "iterations: 5605478\ncpu: 0.24995032323737676 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:1350",
            "value": 0.5144161711483646,
            "unit": "us/iter",
            "extra": "iterations: 2724420\ncpu: 0.5143867887476934 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:8192",
            "value": 2.024325590032288,
            "unit": "us/iter",
            "extra": "iterations: 691996\ncpu: 2.0242503453777063 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:16384",
            "value": 3.8813798137309417,
            "unit": "us/iter",
            "extra": "iterations: 360661\ncpu: 3.8812068646180164 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:16",
            "value": 0.1493543724966412,
            "unit": "us/iter",
            "extra": "iterations: 9376165\ncpu: 0.149344428878971 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:256",
            "value": 0.25581621825132334,
            "unit": "us/iter",
            "extra": "iterations: 5033280\ncpu: 0.25578643707482845 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:1350",
            "value": 0.6422962954114859,
            "unit": "us/iter",
            "extra": "iterations: 2176679\ncpu: 0.642256135149001 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:8192",
            "value": 2.6933280951005796,
            "unit": "us/iter",
            "extra": "iterations: 519450\ncpu: 2.6931699374338693 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:16384",
            "value": 5.238777398488057,
            "unit": "us/iter",
            "extra": "iterations: 267752\ncpu: 5.238468866712411 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:16",
            "value": 0.19952366306163585,
            "unit": "us/iter",
            "extra": "iterations: 7015301\ncpu: 0.1995118949279583 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:256",
            "value": 0.281149299281482,
            "unit": "us/iter",
            "extra": "iterations: 4978604\ncpu: 0.2811284112976194 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:1350",
            "value": 0.5770421049119768,
            "unit": "us/iter",
            "extra": "iterations: 2427769\ncpu: 0.5769955284048885 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:8192",
            "value": 2.2992046241332886,
            "unit": "us/iter",
            "extra": "iterations: 609498\ncpu: 2.2991265139508297 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:16384",
            "value": 4.412548681378633,
            "unit": "us/iter",
            "extra": "iterations: 317339\ncpu: 4.412468763688047 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:16",
            "value": 0.15475931994151984,
            "unit": "us/iter",
            "extra": "iterations: 9051398\ncpu: 0.1547474115048301 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:256",
            "value": 0.520642519706129,
            "unit": "us/iter",
            "extra": "iterations: 2689393\ncpu: 0.5206137712115739 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:1350",
            "value": 2.2142510391930523,
            "unit": "us/iter",
            "extra": "iterations: 636311\ncpu: 2.214057467181923 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:8192",
            "value": 12.442787010590855,
            "unit": "us/iter",
            "extra": "iterations: 112738\ncpu: 12.42972136280547 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:16384",
            "value": 24.67411747083513,
            "unit": "us/iter",
            "extra": "iterations: 56746\ncpu: 24.67244558206824 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:16",
            "value": 0.16410267603143489,
            "unit": "us/iter",
            "extra": "iterations: 8533121\ncpu: 0.16409377096610278 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:256",
            "value": 0.48615157337683657,
            "unit": "us/iter",
            "extra": "iterations: 2885863\ncpu: 0.48612419958951436 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:1350",
            "value": 1.9582420174906257,
            "unit": "us/iter",
            "extra": "iterations: 715126\ncpu: 1.9580254654423923 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:8192",
            "value": 10.846808811343841,
            "unit": "us/iter",
            "extra": "iterations: 129129\ncpu: 10.845906666976525 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:16384",
            "value": 21.54967106012771,
            "unit": "us/iter",
            "extra": "iterations: 64945\ncpu: 21.547110077758422 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:16",
            "value": 0.18577376000590048,
            "unit": "us/iter",
            "extra": "iterations: 7537677\ncpu: 0.1857595085329293 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:256",
            "value": 0.6282811567657441,
            "unit": "us/iter",
            "extra": "iterations: 2228593\ncpu: 0.6282496866857185 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:1350",
            "value": 2.6813070902481404,
            "unit": "us/iter",
            "extra": "iterations: 522182\ncpu: 2.681169287719562 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:8192",
            "value": 15.073463269479296,
            "unit": "us/iter",
            "extra": "iterations: 92920\ncpu: 15.07235436935005 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:16384",
            "value": 29.989368893363167,
            "unit": "us/iter",
            "extra": "iterations: 46691\ncpu: 29.986996466127977 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:16",
            "value": 0.1949347701041113,
            "unit": "us/iter",
            "extra": "iterations: 7188667\ncpu: 0.19491793513317945 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:256",
            "value": 0.5938471204734719,
            "unit": "us/iter",
            "extra": "iterations: 2357523\ncpu: 0.5938023501785583 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:1350",
            "value": 2.445086312694051,
            "unit": "us/iter",
            "extra": "iterations: 572662\ncpu: 2.444873855782323 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:8192",
            "value": 13.599547957181352,
            "unit": "us/iter",
            "extra": "iterations: 102946\ncpu: 13.598669069221184 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:16384",
            "value": 27.015659154930184,
            "unit": "us/iter",
            "extra": "iterations: 51830\ncpu: 27.014395408065337 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:16",
            "value": 0.1471860730825123,
            "unit": "us/iter",
            "extra": "iterations: 9516449\ncpu: 0.14717151439575785 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:256",
            "value": 0.5140457020116932,
            "unit": "us/iter",
            "extra": "iterations: 2709093\ncpu: 0.51399182014053 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:1350",
            "value": 2.1767624976308153,
            "unit": "us/iter",
            "extra": "iterations: 643682\ncpu: 2.176604986623782 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:8192",
            "value": 12.26662215834408,
            "unit": "us/iter",
            "extra": "iterations: 114106\ncpu: 12.265709314146367 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:16384",
            "value": 24.41061148118437,
            "unit": "us/iter",
            "extra": "iterations: 57346\ncpu: 24.408717957660322 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:16",
            "value": 0.14940973021319956,
            "unit": "us/iter",
            "extra": "iterations: 9364728\ncpu: 0.14940636567340662 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:256",
            "value": 0.5207461392475846,
            "unit": "us/iter",
            "extra": "iterations: 2687300\ncpu: 0.5207229073791441 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:1350",
            "value": 2.195929357805289,
            "unit": "us/iter",
            "extra": "iterations: 637735\ncpu: 2.1957792939073317 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:8192",
            "value": 12.370841456294979,
            "unit": "us/iter",
            "extra": "iterations: 113054\ncpu: 12.370009924460968 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:16384",
            "value": 24.628217525899892,
            "unit": "us/iter",
            "extra": "iterations: 56853\ncpu: 24.62700624417428 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:16",
            "value": 0.14724490665920673,
            "unit": "us/iter",
            "extra": "iterations: 9507365\ncpu: 0.14723796561928815 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:256",
            "value": 0.5144934774591096,
            "unit": "us/iter",
            "extra": "iterations: 2719569\ncpu: 0.5144649442613791 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:1350",
            "value": 2.1765029966731384,
            "unit": "us/iter",
            "extra": "iterations: 643547\ncpu: 2.176427070594657 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:8192",
            "value": 12.264862921092496,
            "unit": "us/iter",
            "extra": "iterations: 114197\ncpu: 12.263721884112115 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:16384",
            "value": 24.412485672749895,
            "unit": "us/iter",
            "extra": "iterations: 57094\ncpu: 24.411026009738585 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:16",
            "value": 0.14973416048419627,
            "unit": "us/iter",
            "extra": "iterations: 9350491\ncpu: 0.1497225963855775 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:256",
            "value": 0.5203545119729258,
            "unit": "us/iter",
            "extra": "iterations: 2692115\ncpu: 0.5202595022872301 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:1350",
            "value": 2.1971158448522776,
            "unit": "us/iter",
            "extra": "iterations: 608633\ncpu: 2.1970195684426512 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:8192",
            "value": 12.375700188394617,
            "unit": "us/iter",
            "extra": "iterations: 113061\ncpu: 12.374795322879178 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:16384",
            "value": 24.63550936922669,
            "unit": "us/iter",
            "extra": "iterations: 56835\ncpu: 24.632952247734227 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:16",
            "value": 0.1475170274317938,
            "unit": "us/iter",
            "extra": "iterations: 9252511\ncpu: 0.14750858215677914 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:256",
            "value": 0.5146521221890684,
            "unit": "us/iter",
            "extra": "iterations: 2718443\ncpu: 0.5146005676778964 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:1350",
            "value": 2.1765367532779623,
            "unit": "us/iter",
            "extra": "iterations: 644065\ncpu: 2.176311994907354 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:8192",
            "value": 12.268699531132905,
            "unit": "us/iter",
            "extra": "iterations: 114105\ncpu: 12.268279067525746 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:16384",
            "value": 24.412113542829353,
            "unit": "us/iter",
            "extra": "iterations: 57344\ncpu: 24.411118443079722 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:16",
            "value": 0.15200479762015415,
            "unit": "us/iter",
            "extra": "iterations: 9206648\ncpu: 0.15199267040512457 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:256",
            "value": 0.5222659084290333,
            "unit": "us/iter",
            "extra": "iterations: 2681833\ncpu: 0.5222286193808551 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:1350",
            "value": 2.1982539905918905,
            "unit": "us/iter",
            "extra": "iterations: 636685\ncpu: 2.1980830536293223 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:8192",
            "value": 12.376953416259031,
            "unit": "us/iter",
            "extra": "iterations: 113194\ncpu: 12.375969388836953 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:16384",
            "value": 24.62521358437327,
            "unit": "us/iter",
            "extra": "iterations: 56830\ncpu: 24.624150800633 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:16",
            "value": 0.2375164808631539,
            "unit": "us/iter",
            "extra": "iterations: 5893502\ncpu: 0.23750230762626917 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:256",
            "value": 0.44011523792403284,
            "unit": "us/iter",
            "extra": "iterations: 3181982\ncpu: 0.440075794897658 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:1350",
            "value": 1.2657123473124767,
            "unit": "us/iter",
            "extra": "iterations: 1106508\ncpu: 1.2655924421694311 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:8192",
            "value": 6.371478410275486,
            "unit": "us/iter",
            "extra": "iterations: 219711\ncpu: 6.370998334175414 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:16384",
            "value": 12.486719050719623,
            "unit": "us/iter",
            "extra": "iterations: 112127\ncpu: 12.486037600221257 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:16",
            "value": 0.2397847889518771,
            "unit": "us/iter",
            "extra": "iterations: 5844686\ncpu: 0.23976609162579257 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:256",
            "value": 0.433387813383742,
            "unit": "us/iter",
            "extra": "iterations: 3233416\ncpu: 0.4333464704201434 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:1350",
            "value": 1.2673381691479562,
            "unit": "us/iter",
            "extra": "iterations: 1104950\ncpu: 1.2672893777999328 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:8192",
            "value": 6.3646105845070515,
            "unit": "us/iter",
            "extra": "iterations: 219963\ncpu: 6.364424603228612 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:16384",
            "value": 12.481957760419604,
            "unit": "us/iter",
            "extra": "iterations: 112146\ncpu: 12.481070087207662 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:16",
            "value": 0.24228684376479248,
            "unit": "us/iter",
            "extra": "iterations: 5770549\ncpu: 0.24226203208742159 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:256",
            "value": 0.44545681919415375,
            "unit": "us/iter",
            "extra": "iterations: 3143040\ncpu: 0.44542302579668813 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:1350",
            "value": 1.3055141883184607,
            "unit": "us/iter",
            "extra": "iterations: 1072502\ncpu: 1.305401128389498 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:8192",
            "value": 6.535067354318084,
            "unit": "us/iter",
            "extra": "iterations: 214062\ncpu: 6.534572806009492 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:16384",
            "value": 12.835186859427393,
            "unit": "us/iter",
            "extra": "iterations: 109082\ncpu: 12.83431145376904 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:16",
            "value": 0.24450397789227651,
            "unit": "us/iter",
            "extra": "iterations: 5729039\ncpu: 0.24449037002540763 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:256",
            "value": 0.44119887697423155,
            "unit": "us/iter",
            "extra": "iterations: 3173213\ncpu: 0.44118213810419554 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:1350",
            "value": 1.308277120130336,
            "unit": "us/iter",
            "extra": "iterations: 1070229\ncpu: 1.3081746327188315 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:8192",
            "value": 6.531157434592749,
            "unit": "us/iter",
            "extra": "iterations: 214235\ncpu: 6.5306863724414335 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:16384",
            "value": 12.831211559962528,
            "unit": "us/iter",
            "extra": "iterations: 109118\ncpu: 12.830114554885494 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:16",
            "value": 1.5545820754696935,
            "unit": "us/iter",
            "extra": "iterations: 900866\ncpu: 1.55445925587158 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:256",
            "value": 9.555132489007024,
            "unit": "us/iter",
            "extra": "iterations: 146231\ncpu: 9.554635973220334 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:1350",
            "value": 46.028121618513225,
            "unit": "us/iter",
            "extra": "iterations: 30423\ncpu: 46.02383923347638 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:8192",
            "value": 277.32818375316776,
            "unit": "us/iter",
            "extra": "iterations: 5121\ncpu: 277.3070187463399 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:16384",
            "value": 545.66533177572,
            "unit": "us/iter",
            "extra": "iterations: 2568\ncpu: 545.6241362928239 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:16",
            "value": 1.8563550882272568,
            "unit": "us/iter",
            "extra": "iterations: 754359\ncpu: 1.8562110864985477 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:256",
            "value": 10.505149880689737,
            "unit": "us/iter",
            "extra": "iterations: 133266\ncpu: 10.50471247730133 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:1350",
            "value": 46.350338580619145,
            "unit": "us/iter",
            "extra": "iterations: 30619\ncpu: 46.34863258107678 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:8192",
            "value": 265.4110845364831,
            "unit": "us/iter",
            "extra": "iterations: 5264\ncpu: 265.38829977203443 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:16384",
            "value": 529.2659225245825,
            "unit": "us/iter",
            "extra": "iterations: 2646\ncpu: 529.228463718816 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockEncryptSetup<128>/threads:1",
            "value": 0.017678835767345472,
            "unit": "us/iter",
            "extra": "iterations: 79203963\ncpu: 0.017677663881541336 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockEncryptSetup<256>/threads:1",
            "value": 0.020789505774265686,
            "unit": "us/iter",
            "extra": "iterations: 67317134\ncpu: 0.02078827883551943 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockEncrypt<128>/threads:1",
            "value": 0.01592019924386282,
            "unit": "us/iter",
            "extra": "iterations: 88159102\ncpu: 0.01591907743116586 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockEncrypt<256>/threads:1",
            "value": 0.020857831052990494,
            "unit": "us/iter",
            "extra": "iterations: 67038641\ncpu: 0.020857184112667355 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockDecryptSetup<128>/threads:1",
            "value": 0.020513093639824505,
            "unit": "us/iter",
            "extra": "iterations: 67995417\ncpu: 0.02051127264944959 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockDecryptSetup<256>/threads:1",
            "value": 0.02517568511667133,
            "unit": "us/iter",
            "extra": "iterations: 55536964\ncpu: 0.025173881309032305 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockDecrypt<128>/threads:1",
            "value": 0.015993509861692533,
            "unit": "us/iter",
            "extra": "iterations: 88152975\ncpu: 0.015992027529416527 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockDecrypt<256>/threads:1",
            "value": 0.020859617678150536,
            "unit": "us/iter",
            "extra": "iterations: 67142749\ncpu: 0.020857900411554255 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedBase64/threads:1",
            "value": 2.4911544301274993,
            "unit": "us/iter",
            "extra": "iterations: 561801\ncpu: 2.491045898814677 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedEd25519/threads:1",
            "value": 15.904710154979044,
            "unit": "us/iter",
            "extra": "iterations: 87947\ncpu: 15.904087825622614 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedEd25519Sign/threads:1",
            "value": 16.08468475867211,
            "unit": "us/iter",
            "extra": "iterations: 87184\ncpu: 16.083132868416243 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedEd25519Verify/threads:1",
            "value": 55.80055134205529,
            "unit": "us/iter",
            "extra": "iterations: 24999\ncpu: 55.79530177207103 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedCurve25519BasePointMultiply/threads:1",
            "value": 14.912018938223598,
            "unit": "us/iter",
            "extra": "iterations: 93937\ncpu: 14.910572447491374 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedCurve25519ArbitraryPointMultiply/threads:1",
            "value": 35.647719153818976,
            "unit": "us/iter",
            "extra": "iterations: 39235\ncpu: 35.64516314515102 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDH/p224/threads:1",
            "value": 382.9816527208158,
            "unit": "us/iter",
            "extra": "iterations: 3657\ncpu: 382.94203226688165 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDH/p256/threads:1",
            "value": 60.32923320396654,
            "unit": "us/iter",
            "extra": "iterations: 23190\ncpu: 60.32330142302623 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDH/p384/threads:1",
            "value": 1001.4753838455555,
            "unit": "us/iter",
            "extra": "iterations: 1399\ncpu: 1001.405385275187 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDH/p521/threads:1",
            "value": 2328.8232906978074,
            "unit": "us/iter",
            "extra": "iterations: 602\ncpu: 2328.758561461794 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSASign/p224/threads:1",
            "value": 211.5435102009933,
            "unit": "us/iter",
            "extra": "iterations: 6617\ncpu: 211.52338098836077 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSASign/p256/threads:1",
            "value": 19.623115776651005,
            "unit": "us/iter",
            "extra": "iterations: 71422\ncpu: 19.621396614488603 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSASign/p384/threads:1",
            "value": 553.4575819834052,
            "unit": "us/iter",
            "extra": "iterations: 2531\ncpu: 553.4249909126919 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSASign/p521/threads:1",
            "value": 1303.936576350112,
            "unit": "us/iter",
            "extra": "iterations: 1074\ncpu: 1303.872891061422 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSAVerify/p224/threads:1",
            "value": 213.63956366128002,
            "unit": "us/iter",
            "extra": "iterations: 6566\ncpu: 213.62968595797102 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSAVerify/p256/threads:1",
            "value": 55.2004036120765,
            "unit": "us/iter",
            "extra": "iterations: 25304\ncpu: 55.19725347771215 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSAVerify/p384/threads:1",
            "value": 553.4666385542149,
            "unit": "us/iter",
            "extra": "iterations: 2490\ncpu: 553.4335240963902 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSAVerify/p521/threads:1",
            "value": 1342.0218721805206,
            "unit": "us/iter",
            "extra": "iterations: 1064\ncpu: 1341.98180921057 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:16/threads:1",
            "value": 0.061856817736934536,
            "unit": "us/iter",
            "extra": "iterations: 22631190\ncpu: 0.06185665424575611 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:256/threads:1",
            "value": 0.21265685772875634,
            "unit": "us/iter",
            "extra": "iterations: 6582398\ncpu: 0.21264497634448762 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:1350/threads:1",
            "value": 0.8535612330056166,
            "unit": "us/iter",
            "extra": "iterations: 1639214\ncpu: 0.8535585982062043 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:8192/threads:1",
            "value": 4.882946527608131,
            "unit": "us/iter",
            "extra": "iterations: 286690\ncpu: 4.882758973106873 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:16384/threads:1",
            "value": 9.704403879471613,
            "unit": "us/iter",
            "extra": "iterations: 144298\ncpu: 9.703955973055496 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:16/threads:1",
            "value": 0.0648462008967664,
            "unit": "us/iter",
            "extra": "iterations: 21593767\ncpu: 0.06484328255463594 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:256/threads:1",
            "value": 0.2288668753172417,
            "unit": "us/iter",
            "extra": "iterations: 6121239\ncpu: 0.2288605770825176 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:1350/threads:1",
            "value": 0.9124641718194102,
            "unit": "us/iter",
            "extra": "iterations: 1534309\ncpu: 0.9124286972180738 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:8192/threads:1",
            "value": 5.20890852807789,
            "unit": "us/iter",
            "extra": "iterations: 268771\ncpu: 5.208632862176481 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:16384/threads:1",
            "value": 10.349104454775963,
            "unit": "us/iter",
            "extra": "iterations: 135293\ncpu: 10.348662088947544 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:16/threads:1",
            "value": 0.27549003851217607,
            "unit": "us/iter",
            "extra": "iterations: 5077354\ncpu: 0.2754862146700843 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:256/threads:1",
            "value": 0.7543053119132289,
            "unit": "us/iter",
            "extra": "iterations: 1858257\ncpu: 0.7542665933721661 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:1350/threads:1",
            "value": 2.650390631470726,
            "unit": "us/iter",
            "extra": "iterations: 526422\ncpu: 2.6503035264483987 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:8192/threads:1",
            "value": 15.45982842471379,
            "unit": "us/iter",
            "extra": "iterations: 90555\ncpu: 15.458914394566929 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:16384/threads:1",
            "value": 30.610696898156853,
            "unit": "us/iter",
            "extra": "iterations: 45747\ncpu: 30.608573174196763 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:16/threads:1",
            "value": 0.22557673018702817,
            "unit": "us/iter",
            "extra": "iterations: 6209401\ncpu: 0.22556532876519983 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:256/threads:1",
            "value": 0.4302764900494169,
            "unit": "us/iter",
            "extra": "iterations: 3253231\ncpu: 0.4302582192903081 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:1350/threads:1",
            "value": 2.2710719745987187,
            "unit": "us/iter",
            "extra": "iterations: 616662\ncpu: 2.270995058881544 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:8192/threads:1",
            "value": 13.046262679554758,
            "unit": "us/iter",
            "extra": "iterations: 107279\ncpu: 13.045791543545043 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:16384/threads:1",
            "value": 26.06956965160081,
            "unit": "us/iter",
            "extra": "iterations: 53703\ncpu: 26.06849129471413 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHashToCurve/hash-to-curve P256_XMD:SHA-256_SSWU_RO_/threads:1",
            "value": 28.602113226820343,
            "unit": "us/iter",
            "extra": "iterations: 48946\ncpu: 28.59997149920314 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHashToCurve/hash-to-curve P384_XMD:SHA-384_SSWU_RO_/threads:1",
            "value": 76.77145671363489,
            "unit": "us/iter",
            "extra": "iterations: 18239\ncpu: 76.76454388946702 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHashToCurve/hash-to-scalar P384_XMD:SHA-512/threads:1",
            "value": 1.341363581251306,
            "unit": "us/iter",
            "extra": "iterations: 1044149\ncpu: 1.341287114195378 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHRSSGenerate/threads:1",
            "value": 136.99299334507296,
            "unit": "us/iter",
            "extra": "iterations: 10218\ncpu: 136.98341691133314 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHRSSEncap/threads:1",
            "value": 8.03168565689028,
            "unit": "us/iter",
            "extra": "iterations: 174230\ncpu: 8.031297646788744 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHRSSDecap/threads:1",
            "value": 26.51916463991964,
            "unit": "us/iter",
            "extra": "iterations: 52794\ncpu: 26.51744779709862 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAKeyGen/ml_dsa_44/threads:1",
            "value": 61.210343956280084,
            "unit": "us/iter",
            "extra": "iterations: 22875\ncpu: 61.2051418579217 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSASign/ml_dsa_44/threads:1",
            "value": 207.11268749074776,
            "unit": "us/iter",
            "extra": "iterations: 6755\ncpu: 207.1058436713533 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAParsePubKey/ml_dsa_44/threads:1",
            "value": 4.469282725699699,
            "unit": "us/iter",
            "extra": "iterations: 313813\ncpu: 4.469141530147014 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerify/ml_dsa_44/threads:1",
            "value": 51.303796761077464,
            "unit": "us/iter",
            "extra": "iterations: 27293\ncpu: 51.3027562378632 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerifyBadSignature/ml_dsa_44/threads:1",
            "value": 51.248565457876545,
            "unit": "us/iter",
            "extra": "iterations: 27300\ncpu: 51.247257472527046 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAKeyGen/ml_dsa_65/threads:1",
            "value": 115.58925944875335,
            "unit": "us/iter",
            "extra": "iterations: 12118\ncpu: 115.5823263739863 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSASign/ml_dsa_65/threads:1",
            "value": 319.2641716140984,
            "unit": "us/iter",
            "extra": "iterations: 4312\ncpu: 319.24364424861386 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAParsePubKey/ml_dsa_65/threads:1",
            "value": 6.668543583068935,
            "unit": "us/iter",
            "extra": "iterations: 212812\ncpu: 6.6681072401932395 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerify/ml_dsa_65/threads:1",
            "value": 82.73807304502573,
            "unit": "us/iter",
            "extra": "iterations: 16880\ncpu: 82.7362674170618 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerifyBadSignature/ml_dsa_65/threads:1",
            "value": 82.76971040028351,
            "unit": "us/iter",
            "extra": "iterations: 16913\ncpu: 82.76668952876585 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAKeyGen/ml_dsa_87/threads:1",
            "value": 160.79563107798612,
            "unit": "us/iter",
            "extra": "iterations: 8720\ncpu: 160.7878049311933 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSASign/ml_dsa_87/threads:1",
            "value": 382.5124932356257,
            "unit": "us/iter",
            "extra": "iterations: 3548\ncpu: 382.4869236189263 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAParsePubKey/ml_dsa_87/threads:1",
            "value": 8.735461732690135,
            "unit": "us/iter",
            "extra": "iterations: 160398\ncpu: 8.735196255564537 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerify/ml_dsa_87/threads:1",
            "value": 139.00459670536083,
            "unit": "us/iter",
            "extra": "iterations: 10077\ncpu: 138.99707948794094 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerifyBadSignature/ml_dsa_87/threads:1",
            "value": 139.06477878125852,
            "unit": "us/iter",
            "extra": "iterations: 10076\ncpu: 139.05624652639787 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768KeyGenDecap/threads:1",
            "value": 56.2102225880269,
            "unit": "us/iter",
            "extra": "iterations: 24907\ncpu: 56.20669313847409 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768ParseEncap/threads:1",
            "value": 31.96550420250576,
            "unit": "us/iter",
            "extra": "iterations: 43786\ncpu: 31.96623840956729 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024KeyGenDecap/threads:1",
            "value": 78.5787167451762,
            "unit": "us/iter",
            "extra": "iterations: 17832\ncpu: 78.57488397263688 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024ParseEncap/threads:1",
            "value": 45.43442546514584,
            "unit": "us/iter",
            "extra": "iterations: 30818\ncpu: 45.438780420552874 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768KeyGenOnly/threads:1",
            "value": 28.48592139587091,
            "unit": "us/iter",
            "extra": "iterations: 49145\ncpu: 28.4845682165018 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768PrivateKeyFromSeedOnly/threads:1",
            "value": 28.50397281332726,
            "unit": "us/iter",
            "extra": "iterations: 49032\ncpu: 28.520103116445007 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768DecapOnly/threads:1",
            "value": 28.25255598131383,
            "unit": "us/iter",
            "extra": "iterations: 49579\ncpu: 28.255954093245954 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768ParseOnly/threads:1",
            "value": 13.304778068174734,
            "unit": "us/iter",
            "extra": "iterations: 105172\ncpu: 13.299555442548 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768EncapOnly/threads:1",
            "value": 19.429861595005303,
            "unit": "us/iter",
            "extra": "iterations: 72071\ncpu: 19.425425691531018 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024KeyGenOnly/threads:1",
            "value": 41.835537845270764,
            "unit": "us/iter",
            "extra": "iterations: 33452\ncpu: 41.8334601518604 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024PrivateKeyFromSeedOnly/threads:1",
            "value": 42.342669712308385,
            "unit": "us/iter",
            "extra": "iterations: 33050\ncpu: 42.358517640008934 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024DecapOnly/threads:1",
            "value": 37.256543890431374,
            "unit": "us/iter",
            "extra": "iterations: 37594\ncpu: 37.256192051496356 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024ParseOnly/threads:1",
            "value": 20.64585244192378,
            "unit": "us/iter",
            "extra": "iterations: 66435\ncpu: 20.634727748703224 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024EncapOnly/threads:1",
            "value": 25.71204915576917,
            "unit": "us/iter",
            "extra": "iterations: 54643\ncpu: 25.702382940137735 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:16/threads:1",
            "value": 0.6357005763208904,
            "unit": "us/iter",
            "extra": "iterations: 2203807\ncpu: 0.6356746112522571 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:256/threads:1",
            "value": 0.6615734025020147,
            "unit": "us/iter",
            "extra": "iterations: 2115793\ncpu: 0.6615706399444146 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:1350/threads:1",
            "value": 0.8625891424966695,
            "unit": "us/iter",
            "extra": "iterations: 1619912\ncpu: 0.8625604230353424 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:8192/threads:1",
            "value": 1.8860579715613668,
            "unit": "us/iter",
            "extra": "iterations: 742157\ncpu: 1.8859830803994113 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:16384/threads:1",
            "value": 3.154636254012196,
            "unit": "us/iter",
            "extra": "iterations: 443664\ncpu: 3.154483636265337 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAParsePrivateKey/2048/threads:1",
            "value": 92.1316110563319,
            "unit": "us/iter",
            "extra": "iterations: 15213\ncpu: 92.12809005455512 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSASign/2048/threads:1",
            "value": 642.9037369145925,
            "unit": "us/iter",
            "extra": "iterations: 2178\ncpu: 642.886545454539 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndSign/2048/threads:1",
            "value": 741.6626488063546,
            "unit": "us/iter",
            "extra": "iterations: 1885\ncpu: 741.626539522574 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAVerify/2048/threads:1",
            "value": 16.859369186012245,
            "unit": "us/iter",
            "extra": "iterations: 82839\ncpu: 16.859104033124265 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndVerify/2048/threads:1",
            "value": 19.325570427972444,
            "unit": "us/iter",
            "extra": "iterations: 72528\ncpu: 19.324709243326776 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAParsePrivateKey/3072/threads:1",
            "value": 171.38129242978636,
            "unit": "us/iter",
            "extra": "iterations: 8190\ncpu: 171.3625793650814 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSASign/3072/threads:1",
            "value": 1978.5737118643874,
            "unit": "us/iter",
            "extra": "iterations: 708\ncpu: 1978.436128531086 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndSign/3072/threads:1",
            "value": 2166.460802469159,
            "unit": "us/iter",
            "extra": "iterations: 648\ncpu: 2166.3474089506717 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAVerify/3072/threads:1",
            "value": 36.399274222845634,
            "unit": "us/iter",
            "extra": "iterations: 38538\ncpu: 36.39810856816638 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndVerify/3072/threads:1",
            "value": 41.0235425810571,
            "unit": "us/iter",
            "extra": "iterations: 34358\ncpu: 41.022144042145996 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAParsePrivateKey/4096/threads:1",
            "value": 272.80077091051663,
            "unit": "us/iter",
            "extra": "iterations: 5129\ncpu: 272.7911635796255 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSASign/4096/threads:1",
            "value": 4495.349416666491,
            "unit": "us/iter",
            "extra": "iterations: 312\ncpu: 4495.142817307924 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndSign/4096/threads:1",
            "value": 4792.831702054814,
            "unit": "us/iter",
            "extra": "iterations: 292\ncpu: 4792.659989726099 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAVerify/4096/threads:1",
            "value": 63.25907605214598,
            "unit": "us/iter",
            "extra": "iterations: 22169\ncpu: 63.25842730840392 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndVerify/4096/threads:1",
            "value": 70.5114240072567,
            "unit": "us/iter",
            "extra": "iterations: 19844\ncpu: 70.5099540415266 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedScrypt/(N = 1024, r = 8, p = 16)/threads:1",
            "value": 27815.829660000873,
            "unit": "us/iter",
            "extra": "iterations: 50\ncpu: 27814.875980000124 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedScrypt/(N = 16384, r = 8, p = 1)/threads:1",
            "value": 27781.197599999818,
            "unit": "us/iter",
            "extra": "iterations: 50\ncpu: 27778.755560000263 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/16/threads:1",
            "value": 0.021164404277794834,
            "unit": "us/iter",
            "extra": "iterations: 65677038\ncpu: 0.021163516220083486 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/256/threads:1",
            "value": 0.10982643960914112,
            "unit": "us/iter",
            "extra": "iterations: 12738857\ncpu: 0.10982236695175981 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/1350/threads:1",
            "value": 0.524459493879844,
            "unit": "us/iter",
            "extra": "iterations: 2695605\ncpu: 0.5244331205796072 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/8192/threads:1",
            "value": 3.0437412115555613,
            "unit": "us/iter",
            "extra": "iterations: 459723\ncpu: 3.043604835955726 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/16384/threads:1",
            "value": 6.071604280533835,
            "unit": "us/iter",
            "extra": "iterations: 230532\ncpu: 6.071300600350754 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSLHDSA/threads:1",
            "value": 35600.713846152896,
            "unit": "us/iter",
            "extra": "iterations: 39\ncpu: 35599.252333332886 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSLHDSASign/threads:1",
            "value": 271410.3393999949,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 271407.56179999246 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSLHDSAVerify/threads:1",
            "value": 258.1416610581399,
            "unit": "us/iter",
            "extra": "iterations: 5349\ncpu: 258.12206113292973 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSPAKE2/threads:1",
            "value": 126.31249025887331,
            "unit": "us/iter",
            "extra": "iterations: 11241\ncpu: 126.30644150876162 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedX509/threads:1",
            "value": 3.9465211196144923,
            "unit": "us/iter",
            "extra": "iterations: 354765\ncpu: 3.946304736938588 us\nthreads: 1"
          }
        ]
      }
    ]
  }
}