window.BENCHMARK_DATA = {
  "lastUpdate": 1783743925572,
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
      }
    ]
  }
}
