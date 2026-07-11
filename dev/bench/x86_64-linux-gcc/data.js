window.BENCHMARK_DATA = {
  "lastUpdate": 1783747529691,
  "repoUrl": "https://github.com/divVerent/boringssl",
  "entries": {
    "Benchmark on x8-64 Linux GCC": [
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
        "date": 1783743893472,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpeedRSAKeyGen/2048",
            "value": 69766.52442105397,
            "unit": "us/iter",
            "extra": "iterations: 19\ncpu: 69712.654 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAKeyGen/3072",
            "value": 269918.9842857176,
            "unit": "us/iter",
            "extra": "iterations: 7\ncpu: 269886.5388571429 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAKeyGen/4096",
            "value": 1149501.8919999893,
            "unit": "us/iter",
            "extra": "iterations: 1\ncpu: 1149409.015 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSelfTest",
            "value": 4703.511560402628,
            "unit": "us/iter",
            "extra": "iterations: 298\ncpu: 4703.216295302013 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedTrustTokenKeyGen/SpeedTrustTokenKeyGen experiment_v1",
            "value": 1174.6140956375843,
            "unit": "us/iter",
            "extra": "iterations: 1192\ncpu: 1174.5506442953026 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedTrustTokenKeyGen/SpeedTrustTokenKeyGen experiment_v2_voprf",
            "value": 531.7623877706048,
            "unit": "us/iter",
            "extra": "iterations: 2633\ncpu: 531.7303573870106 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedTrustTokenKeyGen/SpeedTrustTokenKeyGen experiment_v2_pmb",
            "value": 1175.2139798826352,
            "unit": "us/iter",
            "extra": "iterations: 1193\ncpu: 1175.1493503771997 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginIssueBatch1",
            "value": 639.8921794050473,
            "unit": "us/iter",
            "extra": "iterations: 2185\ncpu: 639.8476324942793 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginIssueBatch10",
            "value": 6394.026986301337,
            "unit": "us/iter",
            "extra": "iterations: 219\ncpu: 6393.609589041098 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1IssueBatch1",
            "value": 6389.348589041152,
            "unit": "us/iter",
            "extra": "iterations: 219\ncpu: 6389.003876712318 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1IssueBatch10",
            "value": 22779.12138709696,
            "unit": "us/iter",
            "extra": "iterations: 62\ncpu: 22777.873112903213 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1FinishIssueBatch1",
            "value": 7252.672541666616,
            "unit": "us/iter",
            "extra": "iterations: 192\ncpu: 7252.124489583344 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1FinishIssueBatch10",
            "value": 26180.23262264181,
            "unit": "us/iter",
            "extra": "iterations: 53\ncpu: 26178.01124528299 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginRedeemBatch1",
            "value": 0.12763039818896552,
            "unit": "us/iter",
            "extra": "iterations: 10971851\ncpu: 0.12761862980093355 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginRedeemBatch10",
            "value": 0.12487909964221552,
            "unit": "us/iter",
            "extra": "iterations: 11178445\ncpu: 0.12486786614775126 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1RedeemBatch1",
            "value": 1901.5750176151946,
            "unit": "us/iter",
            "extra": "iterations: 738\ncpu: 1899.3547100271014 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1RedeemBatch10",
            "value": 1892.2954722598136,
            "unit": "us/iter",
            "extra": "iterations: 739\ncpu: 1892.1666373477685 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginIssueBatch1",
            "value": 640.1957787934227,
            "unit": "us/iter",
            "extra": "iterations: 2188\ncpu: 640.1454437842788 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginIssueBatch10",
            "value": 6383.100369863002,
            "unit": "us/iter",
            "extra": "iterations: 219\ncpu: 6382.700694063923 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbIssueBatch1",
            "value": 6394.796574660656,
            "unit": "us/iter",
            "extra": "iterations: 221\ncpu: 6394.210425339359 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbIssueBatch10",
            "value": 22774.758918032723,
            "unit": "us/iter",
            "extra": "iterations: 61\ncpu: 22772.845344262318 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbFinishIssueBatch1",
            "value": 7224.493113402114,
            "unit": "us/iter",
            "extra": "iterations: 194\ncpu: 7223.858567010307 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbFinishIssueBatch10",
            "value": 26206.871056603657,
            "unit": "us/iter",
            "extra": "iterations: 53\ncpu: 26205.50277358493 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginRedeemBatch1",
            "value": 0.12056292937161844,
            "unit": "us/iter",
            "extra": "iterations: 11602857\ncpu: 0.12055167817719391 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginRedeemBatch10",
            "value": 0.11886167893737314,
            "unit": "us/iter",
            "extra": "iterations: 12018054\ncpu: 0.11885298884494983 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbRedeemBatch1",
            "value": 1896.3344208389585,
            "unit": "us/iter",
            "extra": "iterations: 739\ncpu: 1896.0943843031075 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbRedeemBatch10",
            "value": 1896.539673024557,
            "unit": "us/iter",
            "extra": "iterations: 734\ncpu: 1896.3505980926427 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginIssueBatch1",
            "value": 646.5283379501392,
            "unit": "us/iter",
            "extra": "iterations: 2166\ncpu: 646.4607012927079 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginIssueBatch10",
            "value": 6458.250073732628,
            "unit": "us/iter",
            "extra": "iterations: 217\ncpu: 6457.473852534556 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfIssueBatch1",
            "value": 2417.7177211704307,
            "unit": "us/iter",
            "extra": "iterations: 581\ncpu: 2417.4991531841665 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfIssueBatch10",
            "value": 9296.591140000031,
            "unit": "us/iter",
            "extra": "iterations: 150\ncpu: 9295.84113333334 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfFinishIssueBatch1",
            "value": 2501.2672650176587,
            "unit": "us/iter",
            "extra": "iterations: 566\ncpu: 2500.947010600713 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfFinishIssueBatch10",
            "value": 9409.788456375796,
            "unit": "us/iter",
            "extra": "iterations: 149\ncpu: 9409.21863758389 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginRedeemBatch1",
            "value": 0.11271581439621055,
            "unit": "us/iter",
            "extra": "iterations: 12383217\ncpu: 0.11270814643723043 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginRedeemBatch10",
            "value": 0.11189248380462867,
            "unit": "us/iter",
            "extra": "iterations: 12384404\ncpu: 0.11188542864073148 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfRedeemBatch1",
            "value": 572.8382264922276,
            "unit": "us/iter",
            "extra": "iterations: 2446\ncpu: 572.7942747342587 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfRedeemBatch10",
            "value": 572.7965018404863,
            "unit": "us/iter",
            "extra": "iterations: 2445\ncpu: 572.7656744376286 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:16",
            "value": 0.10117367214329069,
            "unit": "us/iter",
            "extra": "iterations: 13873146\ncpu: 0.10116937138843601 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:256",
            "value": 0.1254240614973943,
            "unit": "us/iter",
            "extra": "iterations: 11154684\ncpu: 0.12541975819306048 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:1350",
            "value": 0.3076550794109355,
            "unit": "us/iter",
            "extra": "iterations: 4551955\ncpu: 0.30764272691623695 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:8192",
            "value": 1.0875837862449054,
            "unit": "us/iter",
            "extra": "iterations: 1287043\ncpu: 1.0875194006727036 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:16384",
            "value": 2.0869694943324286,
            "unit": "us/iter",
            "extra": "iterations: 671449\ncpu: 2.086837624302059 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:16",
            "value": 0.10443057866252754,
            "unit": "us/iter",
            "extra": "iterations: 13409854\ncpu: 0.10442432497773668 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:256",
            "value": 0.12660560459127376,
            "unit": "us/iter",
            "extra": "iterations: 11058719\ncpu: 0.1266006561881174 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:1350",
            "value": 0.2957441929992283,
            "unit": "us/iter",
            "extra": "iterations: 4736309\ncpu: 0.29573360331853255 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:8192",
            "value": 1.1030931843233496,
            "unit": "us/iter",
            "extra": "iterations: 1268282\ncpu: 1.103019728262325 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:16384",
            "value": 2.1049198823984074,
            "unit": "us/iter",
            "extra": "iterations: 665297\ncpu: 2.104793373485835 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:16",
            "value": 0.106326579599479,
            "unit": "us/iter",
            "extra": "iterations: 13135450\ncpu: 0.106321658945829 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:256",
            "value": 0.13129002306838528,
            "unit": "us/iter",
            "extra": "iterations: 10725502\ncpu: 0.1311522415454304 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:1350",
            "value": 0.3243297048376165,
            "unit": "us/iter",
            "extra": "iterations: 4311796\ncpu: 0.3243018551898109 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:8192",
            "value": 1.1480819587214144,
            "unit": "us/iter",
            "extra": "iterations: 1218162\ncpu: 1.147980276843313 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:16384",
            "value": 2.2048584401499367,
            "unit": "us/iter",
            "extra": "iterations: 635279\ncpu: 2.2046723061835736 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:16",
            "value": 0.10760742993359847,
            "unit": "us/iter",
            "extra": "iterations: 12975513\ncpu: 0.10759766438521622 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:256",
            "value": 0.13155556841153754,
            "unit": "us/iter",
            "extra": "iterations: 10647875\ncpu: 0.1315450202974763 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:1350",
            "value": 0.31263916630811284,
            "unit": "us/iter",
            "extra": "iterations: 4478681\ncpu: 0.31261570225698176 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:8192",
            "value": 1.1632653928800347,
            "unit": "us/iter",
            "extra": "iterations: 1204388\ncpu: 1.1631319059970755 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:16384",
            "value": 2.2214162888683355,
            "unit": "us/iter",
            "extra": "iterations: 630848\ncpu: 2.221210809893975 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:16",
            "value": 0.11092236517738928,
            "unit": "us/iter",
            "extra": "iterations: 12602708\ncpu: 0.1109132730838483 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:256",
            "value": 0.13494130083847256,
            "unit": "us/iter",
            "extra": "iterations: 10362993\ncpu: 0.13492772560977434 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:1350",
            "value": 0.34385906541671063,
            "unit": "us/iter",
            "extra": "iterations: 4077154\ncpu: 0.34383111847136444 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:8192",
            "value": 1.225088041208447,
            "unit": "us/iter",
            "extra": "iterations: 1143067\ncpu: 1.2249819021982178 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:16384",
            "value": 2.355400802440138,
            "unit": "us/iter",
            "extra": "iterations: 591446\ncpu: 2.355207239545106 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:16",
            "value": 0.110689768532656,
            "unit": "us/iter",
            "extra": "iterations: 12614652\ncpu: 0.11068186486634683 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:256",
            "value": 0.13399813299089286,
            "unit": "us/iter",
            "extra": "iterations: 10446655\ncpu: 0.13398803751057192 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:1350",
            "value": 0.3273705886084835,
            "unit": "us/iter",
            "extra": "iterations: 4271583\ncpu: 0.3273464081114652 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:8192",
            "value": 1.2293648582286723,
            "unit": "us/iter",
            "extra": "iterations: 1152560\ncpu: 1.2292489085166918 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:16384",
            "value": 2.3386902858401384,
            "unit": "us/iter",
            "extra": "iterations: 599146\ncpu: 2.338440523678703 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:16",
            "value": 0.18054107085001445,
            "unit": "us/iter",
            "extra": "iterations: 7651473\ncpu: 0.180525777062797 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:256",
            "value": 0.28731183605285454,
            "unit": "us/iter",
            "extra": "iterations: 4870399\ncpu: 0.2872906636602057 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:1350",
            "value": 0.8154270554988511,
            "unit": "us/iter",
            "extra": "iterations: 1715873\ncpu: 0.8153718550265655 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:8192",
            "value": 3.5906955903709012,
            "unit": "us/iter",
            "extra": "iterations: 389738\ncpu: 3.5904390898501095 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:16384",
            "value": 6.981187260459701,
            "unit": "us/iter",
            "extra": "iterations: 200384\ncpu: 6.9807696822101395 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:16",
            "value": 0.17173873218212715,
            "unit": "us/iter",
            "extra": "iterations: 8142526\ncpu: 0.17172281525413421 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:256",
            "value": 0.26893773117782577,
            "unit": "us/iter",
            "extra": "iterations: 5206490\ncpu: 0.2689213120547609 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:1350",
            "value": 0.7547299984672675,
            "unit": "us/iter",
            "extra": "iterations: 1852908\ncpu: 0.7546684384761818 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:8192",
            "value": 3.555691432590068,
            "unit": "us/iter",
            "extra": "iterations: 393888\ncpu: 3.55545881062642 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:16384",
            "value": 6.927339077930431,
            "unit": "us/iter",
            "extra": "iterations: 202219\ncpu: 6.926793056043207 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:16",
            "value": 0.3025297448011961,
            "unit": "us/iter",
            "extra": "iterations: 4625531\ncpu: 0.3025062687937852 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:256",
            "value": 0.4026582931563505,
            "unit": "us/iter",
            "extra": "iterations: 3478151\ncpu: 0.4026317500304081 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:1350",
            "value": 0.9357096600057212,
            "unit": "us/iter",
            "extra": "iterations: 1496790\ncpu: 0.9356412709865821 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:8192",
            "value": 3.7089870846018793,
            "unit": "us/iter",
            "extra": "iterations: 377379\ncpu: 3.7086567827038253 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:16384",
            "value": 7.09599698607535,
            "unit": "us/iter",
            "extra": "iterations: 197417\ncpu: 7.0953430454318385 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:16",
            "value": 0.29769475077952523,
            "unit": "us/iter",
            "extra": "iterations: 4717329\ncpu: 0.29734320035765555 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:256",
            "value": 0.39322629137717663,
            "unit": "us/iter",
            "extra": "iterations: 3561837\ncpu: 0.3931853038193488 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:1350",
            "value": 0.8783817112561684,
            "unit": "us/iter",
            "extra": "iterations: 1593461\ncpu: 0.8783036522387375 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:8192",
            "value": 3.6737532189573656,
            "unit": "us/iter",
            "extra": "iterations: 380791\ncpu: 3.673509205837289 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:16384",
            "value": 7.03675637108055,
            "unit": "us/iter",
            "extra": "iterations: 199299\ncpu: 7.036088384788712 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:16",
            "value": 0.22783801561092198,
            "unit": "us/iter",
            "extra": "iterations: 6184775\ncpu: 0.22782055951914112 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:256",
            "value": 0.5890177261726581,
            "unit": "us/iter",
            "extra": "iterations: 2380040\ncpu: 0.5889807213324151 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:1350",
            "value": 2.1607541889262842,
            "unit": "us/iter",
            "extra": "iterations: 647660\ncpu: 2.16058397616033 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:8192",
            "value": 11.905799705824647,
            "unit": "us/iter",
            "extra": "iterations: 117617\ncpu: 11.9045513488697 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:16384",
            "value": 23.59119051388736,
            "unit": "us/iter",
            "extra": "iterations: 59371\ncpu: 23.588418992437717 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:16",
            "value": 0.6255295019139695,
            "unit": "us/iter",
            "extra": "iterations: 2207450\ncpu: 0.6254873378785462 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:256",
            "value": 1.8594256858125708,
            "unit": "us/iter",
            "extra": "iterations: 757204\ncpu: 1.8592315333780467 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:1350",
            "value": 2.598624830252531,
            "unit": "us/iter",
            "extra": "iterations: 539036\ncpu: 2.598399162579076 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:8192",
            "value": 7.336256179975515,
            "unit": "us/iter",
            "extra": "iterations: 190737\ncpu: 7.335770395885326 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:16384",
            "value": 13.067871256789967,
            "unit": "us/iter",
            "extra": "iterations: 107695\ncpu: 13.066440131853856 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:16",
            "value": 0.23891108457148524,
            "unit": "us/iter",
            "extra": "iterations: 5888888\ncpu: 0.238889085341747 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:256",
            "value": 0.6160358877925101,
            "unit": "us/iter",
            "extra": "iterations: 2276568\ncpu: 0.6159817180949575 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:1350",
            "value": 2.2314490415062425,
            "unit": "us/iter",
            "extra": "iterations: 625617\ncpu: 2.23112463056468 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:8192",
            "value": 12.238938091323948,
            "unit": "us/iter",
            "extra": "iterations: 114362\ncpu: 12.237762333642403 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:16384",
            "value": 24.243436306946162,
            "unit": "us/iter",
            "extra": "iterations: 57730\ncpu: 24.241652970725966 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:16",
            "value": 0.7610789702952889,
            "unit": "us/iter",
            "extra": "iterations: 1839945\ncpu: 0.7610140987909857 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:256",
            "value": 1.941415795167614,
            "unit": "us/iter",
            "extra": "iterations: 718207\ncpu: 1.9412603218848887 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:1350",
            "value": 2.752854849753637,
            "unit": "us/iter",
            "extra": "iterations: 508232\ncpu: 2.752638936548632 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:8192",
            "value": 7.755104881558728,
            "unit": "us/iter",
            "extra": "iterations: 180680\ncpu: 7.75458859862745 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:16384",
            "value": 13.71743989197193,
            "unit": "us/iter",
            "extra": "iterations: 101825\ncpu: 13.716129909157875 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:16",
            "value": 0.2423965865042619,
            "unit": "us/iter",
            "extra": "iterations: 5769745\ncpu: 0.24237698823778092 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:256",
            "value": 0.6788321273088703,
            "unit": "us/iter",
            "extra": "iterations: 2062700\ncpu: 0.678774648761325 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:1350",
            "value": 2.590571350607309,
            "unit": "us/iter",
            "extra": "iterations: 540542\ncpu: 2.5902450225884075 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:8192",
            "value": 14.444675459813745,
            "unit": "us/iter",
            "extra": "iterations: 97159\ncpu: 14.443602002902432 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:16384",
            "value": 28.67973137642346,
            "unit": "us/iter",
            "extra": "iterations: 49091\ncpu: 28.67816449043626 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:16",
            "value": 0.6299911042434247,
            "unit": "us/iter",
            "extra": "iterations: 2222970\ncpu: 0.629948077571902 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:256",
            "value": 1.8566763688301053,
            "unit": "us/iter",
            "extra": "iterations: 752650\ncpu: 1.856521310037862 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:1350",
            "value": 2.6723313258609718,
            "unit": "us/iter",
            "extra": "iterations: 527363\ncpu: 2.671926773398933 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:8192",
            "value": 7.678318642909145,
            "unit": "us/iter",
            "extra": "iterations: 181388\ncpu: 7.677277019427944 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:16384",
            "value": 13.702517850325536,
            "unit": "us/iter",
            "extra": "iterations: 102155\ncpu: 13.701472057168184 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:16",
            "value": 0.1325287890291518,
            "unit": "us/iter",
            "extra": "iterations: 10522359\ncpu: 0.1325157162001392 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:256",
            "value": 0.22476843768532234,
            "unit": "us/iter",
            "extra": "iterations: 6230595\ncpu: 0.2247461329134709 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:1350",
            "value": 0.5597942311046089,
            "unit": "us/iter",
            "extra": "iterations: 2500028\ncpu: 0.5597326493943275 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:8192",
            "value": 2.3548505428237134,
            "unit": "us/iter",
            "extra": "iterations: 593655\ncpu: 2.3546935913956655 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:16384",
            "value": 4.5731160156351285,
            "unit": "us/iter",
            "extra": "iterations: 305976\ncpu: 4.572798918869419 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:16",
            "value": 0.16493196936253507,
            "unit": "us/iter",
            "extra": "iterations: 8491042\ncpu: 0.16491788970070048 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:256",
            "value": 0.23233180121576502,
            "unit": "us/iter",
            "extra": "iterations: 6019773\ncpu: 0.2323197487679362 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:1350",
            "value": 0.5025120620718871,
            "unit": "us/iter",
            "extra": "iterations: 2785674\ncpu: 0.5024800400190395 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:8192",
            "value": 2.006206083834617,
            "unit": "us/iter",
            "extra": "iterations: 696896\ncpu: 2.0060460283887354 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:16384",
            "value": 3.863887205452217,
            "unit": "us/iter",
            "extra": "iterations: 362420\ncpu: 3.86332099221897 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:16",
            "value": 0.14945724253228312,
            "unit": "us/iter",
            "extra": "iterations: 9343783\ncpu: 0.14944584404410982 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:256",
            "value": 0.24621600540099045,
            "unit": "us/iter",
            "extra": "iterations: 5655266\ncpu: 0.24619771324638356 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:1350",
            "value": 0.635480956382169,
            "unit": "us/iter",
            "extra": "iterations: 2204098\ncpu: 0.6354184478185692 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:8192",
            "value": 2.693509981113891,
            "unit": "us/iter",
            "extra": "iterations: 519431\ncpu: 2.6933034397253977 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:16384",
            "value": 5.238237433122972,
            "unit": "us/iter",
            "extra": "iterations: 267469\ncpu: 5.2377146996473805 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:16",
            "value": 0.18316917689930076,
            "unit": "us/iter",
            "extra": "iterations: 7642054\ncpu: 0.1831501952223845 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:256",
            "value": 0.2641554904443376,
            "unit": "us/iter",
            "extra": "iterations: 5294872\ncpu: 0.2641325503241597 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:1350",
            "value": 0.5633967131550528,
            "unit": "us/iter",
            "extra": "iterations: 2485423\ncpu: 0.5633549158432998 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:8192",
            "value": 2.2820033325514983,
            "unit": "us/iter",
            "extra": "iterations: 613944\ncpu: 2.281752006697689 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:16384",
            "value": 4.390833416479291,
            "unit": "us/iter",
            "extra": "iterations: 318717\ncpu: 4.390410950780849 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:16",
            "value": 0.1547518119703332,
            "unit": "us/iter",
            "extra": "iterations: 9074100\ncpu: 0.15474281008584784 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:256",
            "value": 0.5182753968507987,
            "unit": "us/iter",
            "extra": "iterations: 2686022\ncpu: 0.5182354582352677 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:1350",
            "value": 2.2045634078368312,
            "unit": "us/iter",
            "extra": "iterations: 643012\ncpu: 2.204418723134253 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:8192",
            "value": 12.392398989496538,
            "unit": "us/iter",
            "extra": "iterations: 113013\ncpu: 12.391609098068528 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:16384",
            "value": 24.67534698484997,
            "unit": "us/iter",
            "extra": "iterations: 56697\ncpu: 24.67357987195087 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:16",
            "value": 0.16136651006131136,
            "unit": "us/iter",
            "extra": "iterations: 8649768\ncpu: 0.1613475922128781 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:256",
            "value": 0.5248438960136318,
            "unit": "us/iter",
            "extra": "iterations: 2667773\ncpu: 0.5247905215323707 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:1350",
            "value": 2.206595511861264,
            "unit": "us/iter",
            "extra": "iterations: 633492\ncpu: 2.2064297654903977 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:8192",
            "value": 12.373765302432583,
            "unit": "us/iter",
            "extra": "iterations: 113397\ncpu: 12.37282761448734 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:16384",
            "value": 24.444488350812893,
            "unit": "us/iter",
            "extra": "iterations: 56828\ncpu: 24.442325895685766 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:16",
            "value": 0.1852397426368636,
            "unit": "us/iter",
            "extra": "iterations: 7549333\ncpu: 0.18522716655895982 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:256",
            "value": 0.6293152552144151,
            "unit": "us/iter",
            "extra": "iterations: 2223738\ncpu: 0.6292837654436072 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:1350",
            "value": 2.6917096043959994,
            "unit": "us/iter",
            "extra": "iterations: 519939\ncpu: 2.691537859248886 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:8192",
            "value": 15.082604825184328,
            "unit": "us/iter",
            "extra": "iterations: 93012\ncpu: 15.08161543671755 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:16384",
            "value": 30.041406177605968,
            "unit": "us/iter",
            "extra": "iterations: 46620\ncpu: 30.039851801802456 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:16",
            "value": 0.1924596394228243,
            "unit": "us/iter",
            "extra": "iterations: 7260637\ncpu: 0.19245397545697582 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:256",
            "value": 0.6374124719386205,
            "unit": "us/iter",
            "extra": "iterations: 2195633\ncpu: 0.6373727326014891 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:1350",
            "value": 2.7026014980347477,
            "unit": "us/iter",
            "extra": "iterations: 517478\ncpu: 2.7024938219595627 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:8192",
            "value": 15.110191648498768,
            "unit": "us/iter",
            "extra": "iterations: 92654\ncpu: 15.109010501435087 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:16384",
            "value": 30.066819844015203,
            "unit": "us/iter",
            "extra": "iterations: 46543\ncpu: 30.06435573555621 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:16",
            "value": 0.15328363170865497,
            "unit": "us/iter",
            "extra": "iterations: 9131955\ncpu: 0.15327674785957968 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:256",
            "value": 0.5073992737636247,
            "unit": "us/iter",
            "extra": "iterations: 2758606\ncpu: 0.5073717961173303 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:1350",
            "value": 2.2031336356118443,
            "unit": "us/iter",
            "extra": "iterations: 636058\ncpu: 2.2029703391828743 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:8192",
            "value": 12.359362903380498,
            "unit": "us/iter",
            "extra": "iterations: 104182\ncpu: 12.359030293140624 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:16384",
            "value": 24.651762734490546,
            "unit": "us/iter",
            "extra": "iterations: 56932\ncpu: 24.650371759291104 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:16",
            "value": 0.15420657813394,
            "unit": "us/iter",
            "extra": "iterations: 9064972\ncpu: 0.15419788500174375 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:256",
            "value": 0.5109226663746884,
            "unit": "us/iter",
            "extra": "iterations: 2740050\ncpu: 0.5108844342256533 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:1350",
            "value": 2.2006137195687634,
            "unit": "us/iter",
            "extra": "iterations: 636434\ncpu: 2.2005213926345353 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:8192",
            "value": 12.36719268042542,
            "unit": "us/iter",
            "extra": "iterations: 113094\ncpu: 12.366695854775692 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:16384",
            "value": 24.616976797736683,
            "unit": "us/iter",
            "extra": "iterations: 56891\ncpu: 24.616256578369807 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:16",
            "value": 0.15686030298753642,
            "unit": "us/iter",
            "extra": "iterations: 8963735\ncpu: 0.15684787691737936 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:256",
            "value": 0.5074950582826548,
            "unit": "us/iter",
            "extra": "iterations: 2762400\ncpu: 0.507452306689843 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:1350",
            "value": 2.2042704132185182,
            "unit": "us/iter",
            "extra": "iterations: 635838\ncpu: 2.2041240929293724 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:8192",
            "value": 12.35445911522265,
            "unit": "us/iter",
            "extra": "iterations: 113294\ncpu: 12.353877301534022 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:16384",
            "value": 24.584919988050558,
            "unit": "us/iter",
            "extra": "iterations: 56904\ncpu: 24.5837927210746 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:16",
            "value": 0.15726440758654203,
            "unit": "us/iter",
            "extra": "iterations: 8855994\ncpu: 0.15725839979114697 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:256",
            "value": 0.5127727328832274,
            "unit": "us/iter",
            "extra": "iterations: 2730263\ncpu: 0.5127305856615273 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:1350",
            "value": 2.2030426647071737,
            "unit": "us/iter",
            "extra": "iterations: 635537\ncpu: 2.2028233242124786 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:8192",
            "value": 12.376681927177506,
            "unit": "us/iter",
            "extra": "iterations: 113015\ncpu: 12.375291598460475 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:16384",
            "value": 24.614073070765915,
            "unit": "us/iter",
            "extra": "iterations: 56849\ncpu: 24.612687962848955 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:16",
            "value": 0.15741187874798956,
            "unit": "us/iter",
            "extra": "iterations: 8896611\ncpu: 0.15739782721757836 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:256",
            "value": 0.5084048616877381,
            "unit": "us/iter",
            "extra": "iterations: 2749539\ncpu: 0.5083682831922 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:1350",
            "value": 2.203430935723728,
            "unit": "us/iter",
            "extra": "iterations: 635647\ncpu: 2.20327093811509 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:8192",
            "value": 12.358971748720661,
            "unit": "us/iter",
            "extra": "iterations: 113340\ncpu: 12.357622322216528 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:16384",
            "value": 24.593022372464713,
            "unit": "us/iter",
            "extra": "iterations: 56945\ncpu: 24.59059892879068 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:16",
            "value": 0.15791547051420995,
            "unit": "us/iter",
            "extra": "iterations: 8864812\ncpu: 0.15790199284542258 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:256",
            "value": 0.5161120518928676,
            "unit": "us/iter",
            "extra": "iterations: 2723149\ncpu: 0.5160749253896755 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:1350",
            "value": 2.2034707700426486,
            "unit": "us/iter",
            "extra": "iterations: 632861\ncpu: 2.203323911569791 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:8192",
            "value": 12.382249986742366,
            "unit": "us/iter",
            "extra": "iterations: 113142\ncpu: 12.381017146594381 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:16384",
            "value": 24.627172638092937,
            "unit": "us/iter",
            "extra": "iterations: 56882\ncpu: 24.623302327625517 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:16",
            "value": 0.24011905667437303,
            "unit": "us/iter",
            "extra": "iterations: 5847652\ncpu: 0.24009460754505477 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:256",
            "value": 0.43978536716266287,
            "unit": "us/iter",
            "extra": "iterations: 3186190\ncpu: 0.43974324820553806 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:1350",
            "value": 1.2681616617431937,
            "unit": "us/iter",
            "extra": "iterations: 1104912\ncpu: 1.2680768613246887 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:8192",
            "value": 6.365353789332813,
            "unit": "us/iter",
            "extra": "iterations: 219854\ncpu: 6.3649825975418235 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:16384",
            "value": 12.474331272139919,
            "unit": "us/iter",
            "extra": "iterations: 112071\ncpu: 12.473581943589084 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:16",
            "value": 0.24492651780811503,
            "unit": "us/iter",
            "extra": "iterations: 5720733\ncpu: 0.24490774049408792 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:256",
            "value": 0.4372006494495772,
            "unit": "us/iter",
            "extra": "iterations: 3203328\ncpu: 0.4371686327469429 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:1350",
            "value": 1.2778132988752502,
            "unit": "us/iter",
            "extra": "iterations: 1094664\ncpu: 1.2777079679243983 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:8192",
            "value": 6.365513483554508,
            "unit": "us/iter",
            "extra": "iterations: 220120\ncpu: 6.36494233599855 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:16384",
            "value": 12.488745830066495,
            "unit": "us/iter",
            "extra": "iterations: 112232\ncpu: 12.487404136075352 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:16",
            "value": 0.24279829380022366,
            "unit": "us/iter",
            "extra": "iterations: 5745986\ncpu: 0.24278335397963327 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:256",
            "value": 0.4431484595719412,
            "unit": "us/iter",
            "extra": "iterations: 3155519\ncpu: 0.4431162968754203 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:1350",
            "value": 1.3087621115088386,
            "unit": "us/iter",
            "extra": "iterations: 1070552\ncpu: 1.3086656715414184 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:8192",
            "value": 6.531139587501666,
            "unit": "us/iter",
            "extra": "iterations: 213916\ncpu: 6.530750023373645 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:16384",
            "value": 12.835031336236765,
            "unit": "us/iter",
            "extra": "iterations: 109075\ncpu: 12.83430098556003 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:16",
            "value": 0.24932381295037123,
            "unit": "us/iter",
            "extra": "iterations: 5608843\ncpu: 0.2493039569836373 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:256",
            "value": 0.44515923390352713,
            "unit": "us/iter",
            "extra": "iterations: 3146340\ncpu: 0.4451143503244936 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:1350",
            "value": 1.319442348701488,
            "unit": "us/iter",
            "extra": "iterations: 1061676\ncpu: 1.3192866703212354 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:8192",
            "value": 6.536211351270581,
            "unit": "us/iter",
            "extra": "iterations: 214302\ncpu: 6.535461796903513 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:16384",
            "value": 12.83685633327503,
            "unit": "us/iter",
            "extra": "iterations: 109051\ncpu: 12.835830638874967 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:16",
            "value": 1.6032506166526481,
            "unit": "us/iter",
            "extra": "iterations: 866371\ncpu: 1.6031500812007888 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:256",
            "value": 9.867238827946863,
            "unit": "us/iter",
            "extra": "iterations: 141939\ncpu: 9.866675015323361 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:1350",
            "value": 47.52868065371036,
            "unit": "us/iter",
            "extra": "iterations: 29432\ncpu: 47.52542953248183 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:8192",
            "value": 282.4513728469996,
            "unit": "us/iter",
            "extra": "iterations: 4935\ncpu: 282.4315918946356 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:16384",
            "value": 563.7572175664812,
            "unit": "us/iter",
            "extra": "iterations: 2482\ncpu: 563.7249250604253 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:16",
            "value": 1.9509993498484057,
            "unit": "us/iter",
            "extra": "iterations: 718294\ncpu: 1.9508406000885152 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:256",
            "value": 11.034564562201096,
            "unit": "us/iter",
            "extra": "iterations: 127079\ncpu: 11.033720189803244 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:1350",
            "value": 47.42303906885344,
            "unit": "us/iter",
            "extra": "iterations: 29512\ncpu: 47.419404581188004 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:8192",
            "value": 275.2591578121973,
            "unit": "us/iter",
            "extra": "iterations: 5101\ncpu: 275.22524563811464 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:16384",
            "value": 547.764765832697,
            "unit": "us/iter",
            "extra": "iterations: 2558\ncpu: 547.705816653651 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockEncryptSetup<128>/threads:1",
            "value": 0.018355234024690328,
            "unit": "us/iter",
            "extra": "iterations: 76232875\ncpu: 0.018354181158719892 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockEncryptSetup<256>/threads:1",
            "value": 0.021578517236417193,
            "unit": "us/iter",
            "extra": "iterations: 64814864\ncpu: 0.02157680636342932 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockEncrypt<128>/threads:1",
            "value": 0.015893483022790113,
            "unit": "us/iter",
            "extra": "iterations: 88186928\ncpu: 0.015891742118514254 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockEncrypt<256>/threads:1",
            "value": 0.020904474135624417,
            "unit": "us/iter",
            "extra": "iterations: 67091976\ncpu: 0.020902257477109047 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockDecryptSetup<128>/threads:1",
            "value": 0.02107224128366642,
            "unit": "us/iter",
            "extra": "iterations: 66484699\ncpu: 0.02106961677001781 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockDecryptSetup<256>/threads:1",
            "value": 0.02616005093092652,
            "unit": "us/iter",
            "extra": "iterations: 53532897\ncpu: 0.026157517572792388 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockDecrypt<128>/threads:1",
            "value": 0.01589465152317885,
            "unit": "us/iter",
            "extra": "iterations: 88152836\ncpu: 0.01589345077905409 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockDecrypt<256>/threads:1",
            "value": 0.02116567597449545,
            "unit": "us/iter",
            "extra": "iterations: 67151535\ncpu: 0.02116397920017756 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedBase64/threads:1",
            "value": 6.3062128777035955,
            "unit": "us/iter",
            "extra": "iterations: 222198\ncpu: 6.305791604784815 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedEd25519/threads:1",
            "value": 27.015082823384752,
            "unit": "us/iter",
            "extra": "iterations: 51966\ncpu: 27.013030712388858 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedEd25519Sign/threads:1",
            "value": 27.10323821478967,
            "unit": "us/iter",
            "extra": "iterations: 51781\ncpu: 27.10075153048422 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedEd25519Verify/threads:1",
            "value": 48.92667194114804,
            "unit": "us/iter",
            "extra": "iterations: 28818\ncpu: 48.922049448261966 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedCurve25519BasePointMultiply/threads:1",
            "value": 25.8194404314162,
            "unit": "us/iter",
            "extra": "iterations: 54240\ncpu: 25.81623858775834 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedCurve25519ArbitraryPointMultiply/threads:1",
            "value": 41.633288675715015,
            "unit": "us/iter",
            "extra": "iterations: 33671\ncpu: 41.628923049507804 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDH/p224/threads:1",
            "value": 373.6973844509674,
            "unit": "us/iter",
            "extra": "iterations: 3743\ncpu: 373.66181432006806 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDH/p256/threads:1",
            "value": 60.2105112371622,
            "unit": "us/iter",
            "extra": "iterations: 23271\ncpu: 60.20304980447731 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDH/p384/threads:1",
            "value": 1026.7422338709985,
            "unit": "us/iter",
            "extra": "iterations: 1364\ncpu: 1026.6682507331395 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDH/p521/threads:1",
            "value": 2404.2083356401718,
            "unit": "us/iter",
            "extra": "iterations: 578\ncpu: 2404.019641868539 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSASign/p224/threads:1",
            "value": 207.27608873115187,
            "unit": "us/iter",
            "extra": "iterations: 6762\ncpu: 207.25661431528553 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSASign/p256/threads:1",
            "value": 19.82312574010534,
            "unit": "us/iter",
            "extra": "iterations: 70598\ncpu: 19.820990948752385 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSASign/p384/threads:1",
            "value": 568.8456268777758,
            "unit": "us/iter",
            "extra": "iterations: 2463\ncpu: 568.795915144124 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSASign/p521/threads:1",
            "value": 1349.871958693565,
            "unit": "us/iter",
            "extra": "iterations: 1041\ncpu: 1349.7427704130755 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSAVerify/p224/threads:1",
            "value": 199.70335435218811,
            "unit": "us/iter",
            "extra": "iterations: 6962\ncpu: 199.68983036484306 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSAVerify/p256/threads:1",
            "value": 55.46052545541342,
            "unit": "us/iter",
            "extra": "iterations: 25142\ncpu: 55.45719914883681 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSAVerify/p384/threads:1",
            "value": 574.8506288406251,
            "unit": "us/iter",
            "extra": "iterations: 2441\ncpu: 574.8119512494931 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSAVerify/p521/threads:1",
            "value": 1362.3848518518198,
            "unit": "us/iter",
            "extra": "iterations: 1026\ncpu: 1362.3092836257313 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:16/threads:1",
            "value": 0.059808432431320134,
            "unit": "us/iter",
            "extra": "iterations: 23401080\ncpu: 0.059804543850112954 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:256/threads:1",
            "value": 0.2122660475665001,
            "unit": "us/iter",
            "extra": "iterations: 6597963\ncpu: 0.21224893379971563 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:1350/threads:1",
            "value": 0.8534386542064545,
            "unit": "us/iter",
            "extra": "iterations: 1640846\ncpu: 0.853376780636328 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:8192/threads:1",
            "value": 4.884022072083199,
            "unit": "us/iter",
            "extra": "iterations: 286697\ncpu: 4.883722578192143 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:16384/threads:1",
            "value": 9.703721937041493,
            "unit": "us/iter",
            "extra": "iterations: 144158\ncpu: 9.702976407830464 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:16/threads:1",
            "value": 0.06351201078858373,
            "unit": "us/iter",
            "extra": "iterations: 22054422\ncpu: 0.0635065560548355 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:256/threads:1",
            "value": 0.22873244946807558,
            "unit": "us/iter",
            "extra": "iterations: 6121823\ncpu: 0.22871681801319824 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:1350/threads:1",
            "value": 0.9119511848569329,
            "unit": "us/iter",
            "extra": "iterations: 1534278\ncpu: 0.9118759123183959 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:8192/threads:1",
            "value": 5.209628149040718,
            "unit": "us/iter",
            "extra": "iterations: 268812\ncpu: 5.209044975670708 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:16384/threads:1",
            "value": 10.350819468371583,
            "unit": "us/iter",
            "extra": "iterations: 135245\ncpu: 10.350143384228558 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:16/threads:1",
            "value": 0.28331890038710617,
            "unit": "us/iter",
            "extra": "iterations: 4950433\ncpu: 0.2832955305121728 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:256/threads:1",
            "value": 0.7657104623123759,
            "unit": "us/iter",
            "extra": "iterations: 1826795\ncpu: 0.7656641867314173 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:1350/threads:1",
            "value": 2.6706773736519147,
            "unit": "us/iter",
            "extra": "iterations: 524424\ncpu: 2.670479135203675 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:8192/threads:1",
            "value": 15.457622728927385,
            "unit": "us/iter",
            "extra": "iterations: 90651\ncpu: 15.456445698337387 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:16384/threads:1",
            "value": 30.61185873109701,
            "unit": "us/iter",
            "extra": "iterations: 45693\ncpu: 30.608662880528712 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:16/threads:1",
            "value": 0.28553715471289093,
            "unit": "us/iter",
            "extra": "iterations: 4898894\ncpu: 0.28550391782307755 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:256/threads:1",
            "value": 0.535774154339217,
            "unit": "us/iter",
            "extra": "iterations: 2621175\ncpu: 0.5357324398409108 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:1350/threads:1",
            "value": 2.827125874224762,
            "unit": "us/iter",
            "extra": "iterations: 495153\ncpu: 2.8268697412719264 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:8192/threads:1",
            "value": 16.377642535103227,
            "unit": "us/iter",
            "extra": "iterations: 85393\ncpu: 16.375961273172443 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:16384/threads:1",
            "value": 32.67321069358722,
            "unit": "us/iter",
            "extra": "iterations: 42792\ncpu: 32.67064561132908 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHashToCurve/hash-to-curve P256_XMD:SHA-256_SSWU_RO_/threads:1",
            "value": 29.311789086040143,
            "unit": "us/iter",
            "extra": "iterations: 47792\ncpu: 29.30856858888443 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHashToCurve/hash-to-curve P384_XMD:SHA-384_SSWU_RO_/threads:1",
            "value": 76.7158068511895,
            "unit": "us/iter",
            "extra": "iterations: 18245\ncpu: 76.71033499588842 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHashToCurve/hash-to-scalar P384_XMD:SHA-512/threads:1",
            "value": 1.4085863047132028,
            "unit": "us/iter",
            "extra": "iterations: 994824\ncpu: 1.408473373179615 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHRSSGenerate/threads:1",
            "value": 138.36141620788294,
            "unit": "us/iter",
            "extra": "iterations: 9082\ncpu: 138.34565778463005 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHRSSEncap/threads:1",
            "value": 10.676984784961622,
            "unit": "us/iter",
            "extra": "iterations: 131186\ncpu: 10.67607294985754 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHRSSDecap/threads:1",
            "value": 29.550982231018637,
            "unit": "us/iter",
            "extra": "iterations: 46992\ncpu: 29.548817671093392 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAKeyGen/ml_dsa_44/threads:1",
            "value": 71.40669125152994,
            "unit": "us/iter",
            "extra": "iterations: 19592\ncpu: 71.40129894855158 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSASign/ml_dsa_44/threads:1",
            "value": 246.2831052720956,
            "unit": "us/iter",
            "extra": "iterations: 5880\ncpu: 246.26221581633106 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAParsePubKey/ml_dsa_44/threads:1",
            "value": 4.558534823765552,
            "unit": "us/iter",
            "extra": "iterations: 307204\ncpu: 4.558108413301941 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerify/ml_dsa_44/threads:1",
            "value": 59.286665311138826,
            "unit": "us/iter",
            "extra": "iterations: 23607\ncpu: 59.28397483797029 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerifyBadSignature/ml_dsa_44/threads:1",
            "value": 59.42166569064499,
            "unit": "us/iter",
            "extra": "iterations: 23565\ncpu: 59.4175694037757 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAKeyGen/ml_dsa_65/threads:1",
            "value": 129.70760628242985,
            "unit": "us/iter",
            "extra": "iterations: 10792\ncpu: 129.69518152335075 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSASign/ml_dsa_65/threads:1",
            "value": 381.48499752338864,
            "unit": "us/iter",
            "extra": "iterations: 3634\ncpu: 381.45615520087705 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAParsePubKey/ml_dsa_65/threads:1",
            "value": 6.600540566264408,
            "unit": "us/iter",
            "extra": "iterations: 212233\ncpu: 6.600082239802431 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerify/ml_dsa_65/threads:1",
            "value": 93.54525964559888,
            "unit": "us/iter",
            "extra": "iterations: 14955\ncpu: 93.54098207957294 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerifyBadSignature/ml_dsa_65/threads:1",
            "value": 93.59749091273493,
            "unit": "us/iter",
            "extra": "iterations: 14966\ncpu: 93.59083749833034 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAKeyGen/ml_dsa_87/threads:1",
            "value": 182.61480838009768,
            "unit": "us/iter",
            "extra": "iterations: 7661\ncpu: 182.60672275159956 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSASign/ml_dsa_87/threads:1",
            "value": 457.0217432950317,
            "unit": "us/iter",
            "extra": "iterations: 3132\ncpu: 456.9870469348831 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAParsePubKey/ml_dsa_87/threads:1",
            "value": 8.708223391747811,
            "unit": "us/iter",
            "extra": "iterations: 160749\ncpu: 8.707603002195922 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerify/ml_dsa_87/threads:1",
            "value": 158.01699153211771,
            "unit": "us/iter",
            "extra": "iterations: 8857\ncpu: 158.00118561589915 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerifyBadSignature/ml_dsa_87/threads:1",
            "value": 157.95243270425073,
            "unit": "us/iter",
            "extra": "iterations: 8849\ncpu: 157.94093422985338 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768KeyGenDecap/threads:1",
            "value": 63.91714494341463,
            "unit": "us/iter",
            "extra": "iterations: 21912\ncpu: 63.91157269988948 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768ParseEncap/threads:1",
            "value": 35.85233672062708,
            "unit": "us/iter",
            "extra": "iterations: 39065\ncpu: 35.84280317438898 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024KeyGenDecap/threads:1",
            "value": 86.38473196321759,
            "unit": "us/iter",
            "extra": "iterations: 16203\ncpu: 86.3781865703924 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024ParseEncap/threads:1",
            "value": 49.29490319951949,
            "unit": "us/iter",
            "extra": "iterations: 28409\ncpu: 49.29270298169276 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768KeyGenOnly/threads:1",
            "value": 31.196163412951027,
            "unit": "us/iter",
            "extra": "iterations: 44923\ncpu: 31.192897469004638 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768PrivateKeyFromSeedOnly/threads:1",
            "value": 31.17830351072685,
            "unit": "us/iter",
            "extra": "iterations: 44921\ncpu: 31.20687226468872 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768DecapOnly/threads:1",
            "value": 33.35682331748599,
            "unit": "us/iter",
            "extra": "iterations: 41951\ncpu: 33.35153886666545 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768ParseOnly/threads:1",
            "value": 13.491376727287406,
            "unit": "us/iter",
            "extra": "iterations: 103847\ncpu: 13.480922154762885 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768EncapOnly/threads:1",
            "value": 23.14927605448299,
            "unit": "us/iter",
            "extra": "iterations: 60517\ncpu: 23.13721703008311 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024KeyGenOnly/threads:1",
            "value": 44.52660154658956,
            "unit": "us/iter",
            "extra": "iterations: 31424\ncpu: 44.52298418406418 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024PrivateKeyFromSeedOnly/threads:1",
            "value": 44.48612912328543,
            "unit": "us/iter",
            "extra": "iterations: 31435\ncpu: 44.5157626531742 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024DecapOnly/threads:1",
            "value": 42.541081341459915,
            "unit": "us/iter",
            "extra": "iterations: 32923\ncpu: 42.53885581492759 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024ParseOnly/threads:1",
            "value": 20.862586820335068,
            "unit": "us/iter",
            "extra": "iterations: 67058\ncpu: 20.842982239226323 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024EncapOnly/threads:1",
            "value": 29.266639488382335,
            "unit": "us/iter",
            "extra": "iterations: 47857\ncpu: 29.24588958756428 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:16/threads:1",
            "value": 0.6608411052383498,
            "unit": "us/iter",
            "extra": "iterations: 2119000\ncpu: 0.6607819211892169 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:256/threads:1",
            "value": 0.6967327067029342,
            "unit": "us/iter",
            "extra": "iterations: 2009478\ncpu: 0.6966681939289767 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:1350/threads:1",
            "value": 0.9080185218930015,
            "unit": "us/iter",
            "extra": "iterations: 1542067\ncpu: 0.907938460520795 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:8192/threads:1",
            "value": 1.8860289877932312,
            "unit": "us/iter",
            "extra": "iterations: 741726\ncpu: 1.885862567848626 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:16384/threads:1",
            "value": 3.1356977999223794,
            "unit": "us/iter",
            "extra": "iterations: 446757\ncpu: 3.135446582818075 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAParsePrivateKey/2048/threads:1",
            "value": 113.15787643701209,
            "unit": "us/iter",
            "extra": "iterations: 12439\ncpu: 113.14977168582661 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSASign/2048/threads:1",
            "value": 643.6688656235856,
            "unit": "us/iter",
            "extra": "iterations: 2173\ncpu: 643.6166309249378 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndSign/2048/threads:1",
            "value": 764.146013631429,
            "unit": "us/iter",
            "extra": "iterations: 1834\ncpu: 764.0562993456839 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAVerify/2048/threads:1",
            "value": 17.05495802159205,
            "unit": "us/iter",
            "extra": "iterations: 82066\ncpu: 17.053646418736815 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndVerify/2048/threads:1",
            "value": 19.52764076466816,
            "unit": "us/iter",
            "extra": "iterations: 71822\ncpu: 19.52650870206794 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAParsePrivateKey/3072/threads:1",
            "value": 225.4729302325513,
            "unit": "us/iter",
            "extra": "iterations: 6149\ncpu: 225.45674808913336 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSASign/3072/threads:1",
            "value": 1981.2267875352868,
            "unit": "us/iter",
            "extra": "iterations: 706\ncpu: 1981.093607648668 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndSign/3072/threads:1",
            "value": 2219.8280253163994,
            "unit": "us/iter",
            "extra": "iterations: 632\ncpu: 2219.559871835522 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAVerify/3072/threads:1",
            "value": 36.55255680393015,
            "unit": "us/iter",
            "extra": "iterations: 38272\ncpu: 36.54928357545779 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndVerify/3072/threads:1",
            "value": 40.77220338342467,
            "unit": "us/iter",
            "extra": "iterations: 34403\ncpu: 40.76870813591599 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAParsePrivateKey/4096/threads:1",
            "value": 379.4380333153001,
            "unit": "us/iter",
            "extra": "iterations: 3692\ncpu: 379.41320341276304 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSASign/4096/threads:1",
            "value": 4505.67881612884,
            "unit": "us/iter",
            "extra": "iterations: 310\ncpu: 4505.34733870977 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndSign/4096/threads:1",
            "value": 4904.27529122802,
            "unit": "us/iter",
            "extra": "iterations: 285\ncpu: 4903.979884210329 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAVerify/4096/threads:1",
            "value": 63.41089831045956,
            "unit": "us/iter",
            "extra": "iterations: 22077\ncpu: 63.40590854735374 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndVerify/4096/threads:1",
            "value": 70.58769199717564,
            "unit": "us/iter",
            "extra": "iterations: 19818\ncpu: 70.58049894036148 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedScrypt/(N = 1024, r = 8, p = 16)/threads:1",
            "value": 28827.659458334176,
            "unit": "us/iter",
            "extra": "iterations: 48\ncpu: 28825.753666668654 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedScrypt/(N = 16384, r = 8, p = 1)/threads:1",
            "value": 28808.506530611212,
            "unit": "us/iter",
            "extra": "iterations: 49\ncpu: 28806.391959183573 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/16/threads:1",
            "value": 0.021161670823183484,
            "unit": "us/iter",
            "extra": "iterations: 66145120\ncpu: 0.02115896834112633 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/256/threads:1",
            "value": 0.11490602255032412,
            "unit": "us/iter",
            "extra": "iterations: 12170824\ncpu: 0.1148951596046394 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/1350/threads:1",
            "value": 0.5419954760439775,
            "unit": "us/iter",
            "extra": "iterations: 2586011\ncpu: 0.5419463969797919 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/8192/threads:1",
            "value": 3.2038176605085873,
            "unit": "us/iter",
            "extra": "iterations: 437360\ncpu: 3.203563329980021 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/16384/threads:1",
            "value": 6.39186292898886,
            "unit": "us/iter",
            "extra": "iterations: 219120\ncpu: 6.39130716958713 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSLHDSA/threads:1",
            "value": 37243.29786841975,
            "unit": "us/iter",
            "extra": "iterations: 38\ncpu: 37238.50218420921 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSLHDSASign/threads:1",
            "value": 285228.98659998644,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 285202.53960000444 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSLHDSAVerify/threads:1",
            "value": 286.5464654154406,
            "unit": "us/iter",
            "extra": "iterations: 4742\ncpu: 286.5222952340763 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSPAKE2/threads:1",
            "value": 120.9555424344641,
            "unit": "us/iter",
            "extra": "iterations: 11559\ncpu: 120.94651431784922 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedX509/threads:1",
            "value": 3.9236879305165164,
            "unit": "us/iter",
            "extra": "iterations: 356113\ncpu: 3.923364081064227 us\nthreads: 1"
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
        "date": 1783746158885,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpeedRSAKeyGen/2048",
            "value": 72097.54799999988,
            "unit": "us/iter",
            "extra": "iterations: 19\ncpu: 72080.42821052631 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAKeyGen/3072",
            "value": 221155.8719999971,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 221107.62420000002 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAKeyGen/4096",
            "value": 536700.2465000041,
            "unit": "us/iter",
            "extra": "iterations: 2\ncpu: 536659.7165 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSelfTest",
            "value": 4703.8373087247965,
            "unit": "us/iter",
            "extra": "iterations: 298\ncpu: 4703.2543020134235 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedTrustTokenKeyGen/SpeedTrustTokenKeyGen experiment_v1",
            "value": 1117.2451515151486,
            "unit": "us/iter",
            "extra": "iterations: 1254\ncpu: 1117.1840526315793 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedTrustTokenKeyGen/SpeedTrustTokenKeyGen experiment_v2_voprf",
            "value": 506.75424303796933,
            "unit": "us/iter",
            "extra": "iterations: 2765\ncpu: 506.7119956600365 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedTrustTokenKeyGen/SpeedTrustTokenKeyGen experiment_v2_pmb",
            "value": 1117.3656871508676,
            "unit": "us/iter",
            "extra": "iterations: 1253\ncpu: 1117.2364796488441 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginIssueBatch1",
            "value": 618.1677518797089,
            "unit": "us/iter",
            "extra": "iterations: 2261\ncpu: 618.1284206103495 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginIssueBatch10",
            "value": 6181.785469026589,
            "unit": "us/iter",
            "extra": "iterations: 226\ncpu: 6181.412309734514 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1IssueBatch1",
            "value": 6041.652900862005,
            "unit": "us/iter",
            "extra": "iterations: 232\ncpu: 6041.290827586215 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1IssueBatch10",
            "value": 21512.246215384213,
            "unit": "us/iter",
            "extra": "iterations: 65\ncpu: 21511.20732307692 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1FinishIssueBatch1",
            "value": 6916.465643564381,
            "unit": "us/iter",
            "extra": "iterations: 202\ncpu: 6916.035123762377 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1FinishIssueBatch10",
            "value": 24740.563821428706,
            "unit": "us/iter",
            "extra": "iterations: 56\ncpu: 24739.633482142843 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginRedeemBatch1",
            "value": 0.12829063722082795,
            "unit": "us/iter",
            "extra": "iterations: 10979977\ncpu: 0.12828368811701513 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginRedeemBatch10",
            "value": 0.1272117805286022,
            "unit": "us/iter",
            "extra": "iterations: 11092762\ncpu: 0.1272027389571684 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1RedeemBatch1",
            "value": 1802.1564362934273,
            "unit": "us/iter",
            "extra": "iterations: 777\ncpu: 1802.0076962676983 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1RedeemBatch10",
            "value": 1825.056271907221,
            "unit": "us/iter",
            "extra": "iterations: 776\ncpu: 1824.8593505154597 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginIssueBatch1",
            "value": 618.524365002218,
            "unit": "us/iter",
            "extra": "iterations: 2263\ncpu: 618.4729434379148 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginIssueBatch10",
            "value": 6181.705070796608,
            "unit": "us/iter",
            "extra": "iterations: 226\ncpu: 6181.052526548669 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbIssueBatch1",
            "value": 6040.38353448264,
            "unit": "us/iter",
            "extra": "iterations: 232\ncpu: 6039.8879741379415 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbIssueBatch10",
            "value": 21530.585461538558,
            "unit": "us/iter",
            "extra": "iterations: 65\ncpu: 21528.146323076886 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbFinishIssueBatch1",
            "value": 6875.523156862788,
            "unit": "us/iter",
            "extra": "iterations: 204\ncpu: 6874.888475490197 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbFinishIssueBatch10",
            "value": 24823.13507142919,
            "unit": "us/iter",
            "extra": "iterations: 56\ncpu: 24821.077285714284 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginRedeemBatch1",
            "value": 0.12422930834241931,
            "unit": "us/iter",
            "extra": "iterations: 11551612\ncpu: 0.12421174213607578 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginRedeemBatch10",
            "value": 0.12304464598401708,
            "unit": "us/iter",
            "extra": "iterations: 11524508\ncpu: 0.12302843869777327 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbRedeemBatch1",
            "value": 1801.7666241956792,
            "unit": "us/iter",
            "extra": "iterations: 777\ncpu: 1801.6399446589523 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbRedeemBatch10",
            "value": 1803.4320193548351,
            "unit": "us/iter",
            "extra": "iterations: 775\ncpu: 1803.273252903224 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginIssueBatch1",
            "value": 619.9152065894987,
            "unit": "us/iter",
            "extra": "iterations: 2246\ncpu: 619.8769755120233 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginIssueBatch10",
            "value": 6197.0838230088475,
            "unit": "us/iter",
            "extra": "iterations: 226\ncpu: 6196.593473451327 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfIssueBatch1",
            "value": 2282.704134206176,
            "unit": "us/iter",
            "extra": "iterations: 611\ncpu: 2282.6181718494295 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfIssueBatch10",
            "value": 8847.981162499962,
            "unit": "us/iter",
            "extra": "iterations: 160\ncpu: 8847.170837500018 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfFinishIssueBatch1",
            "value": 2355.1232424242635,
            "unit": "us/iter",
            "extra": "iterations: 594\ncpu: 2354.9504713804686 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfFinishIssueBatch10",
            "value": 8935.046968354418,
            "unit": "us/iter",
            "extra": "iterations: 158\ncpu: 8934.143512658204 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginRedeemBatch1",
            "value": 0.11584840512965065,
            "unit": "us/iter",
            "extra": "iterations: 12276860\ncpu: 0.1158368642307558 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginRedeemBatch10",
            "value": 0.1138907493677793,
            "unit": "us/iter",
            "extra": "iterations: 12260762\ncpu: 0.11388159080161567 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfRedeemBatch1",
            "value": 549.5810019554043,
            "unit": "us/iter",
            "extra": "iterations: 2557\ncpu: 549.5501759874875 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfRedeemBatch10",
            "value": 549.8557792563558,
            "unit": "us/iter",
            "extra": "iterations: 2555\ncpu: 549.8154414872765 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:16",
            "value": 0.1013477922948012,
            "unit": "us/iter",
            "extra": "iterations: 13818489\ncpu: 0.1013409948077536 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:256",
            "value": 0.1258339811319998,
            "unit": "us/iter",
            "extra": "iterations: 11105045\ncpu: 0.12582212480903923 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:1350",
            "value": 0.30885786997411985,
            "unit": "us/iter",
            "extra": "iterations: 4541419\ncpu: 0.3088248831477588 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:8192",
            "value": 1.1140194257112668,
            "unit": "us/iter",
            "extra": "iterations: 1257869\ncpu: 1.113955667879561 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:16384",
            "value": 2.11206099646185,
            "unit": "us/iter",
            "extra": "iterations: 633381\ncpu: 2.1119437621273853 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:16",
            "value": 0.10628562373822982,
            "unit": "us/iter",
            "extra": "iterations: 13380509\ncpu: 0.10627638522570416 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:256",
            "value": 0.12731956931571684,
            "unit": "us/iter",
            "extra": "iterations: 11042149\ncpu: 0.127307247529444 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:1350",
            "value": 0.29593767445178143,
            "unit": "us/iter",
            "extra": "iterations: 4739132\ncpu: 0.2959112305797755 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:8192",
            "value": 1.0872361095684657,
            "unit": "us/iter",
            "extra": "iterations: 1206406\ncpu: 1.0871875977075691 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:16384",
            "value": 2.0763973245970297,
            "unit": "us/iter",
            "extra": "iterations: 674889\ncpu: 2.0762620816163966 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:16",
            "value": 0.10692709269674745,
            "unit": "us/iter",
            "extra": "iterations: 13154032\ncpu: 0.10691877395463273 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:256",
            "value": 0.1305059589903844,
            "unit": "us/iter",
            "extra": "iterations: 10734117\ncpu: 0.1304956945224274 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:1350",
            "value": 0.3254794232855289,
            "unit": "us/iter",
            "extra": "iterations: 4303967\ncpu: 0.32544353081703425 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:8192",
            "value": 1.1798194416292123,
            "unit": "us/iter",
            "extra": "iterations: 1193902\ncpu: 1.1797494492847873 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:16384",
            "value": 2.2124929589265436,
            "unit": "us/iter",
            "extra": "iterations: 632574\ncpu: 2.2123357330525675 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:16",
            "value": 0.10765442615254445,
            "unit": "us/iter",
            "extra": "iterations: 13001687\ncpu: 0.10764606062274844 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:256",
            "value": 0.13143783193043776,
            "unit": "us/iter",
            "extra": "iterations: 10660931\ncpu: 0.13142638058533573 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:1350",
            "value": 0.3130552562992297,
            "unit": "us/iter",
            "extra": "iterations: 4476467\ncpu: 0.31302146089762395 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:8192",
            "value": 1.1390982674699797,
            "unit": "us/iter",
            "extra": "iterations: 1230224\ncpu: 1.1390271170128343 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:16384",
            "value": 2.1922896828502623,
            "unit": "us/iter",
            "extra": "iterations: 638878\ncpu: 2.1921210512805187 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:16",
            "value": 0.11084942187877904,
            "unit": "us/iter",
            "extra": "iterations: 12557920\ncpu: 0.1108377404856848 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:256",
            "value": 0.13463730489329995,
            "unit": "us/iter",
            "extra": "iterations: 10405332\ncpu: 0.13462478506212008 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:1350",
            "value": 0.34372093634981327,
            "unit": "us/iter",
            "extra": "iterations: 4075400\ncpu: 0.3436858973352313 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:8192",
            "value": 1.2482176243154735,
            "unit": "us/iter",
            "extra": "iterations: 1121984\ncpu: 1.248149167902574 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:16384",
            "value": 2.3621365708201476,
            "unit": "us/iter",
            "extra": "iterations: 592579\ncpu: 2.361990318590437 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:16",
            "value": 0.1105194997906295,
            "unit": "us/iter",
            "extra": "iterations: 12637828\ncpu: 0.11050897219047415 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:256",
            "value": 0.13420085517057034,
            "unit": "us/iter",
            "extra": "iterations: 10417337\ncpu: 0.1341895523779252 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:1350",
            "value": 0.3274310086383581,
            "unit": "us/iter",
            "extra": "iterations: 4272919\ncpu: 0.3274086534287205 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:8192",
            "value": 1.1932413107175355,
            "unit": "us/iter",
            "extra": "iterations: 1172335\ncpu: 1.1931502838352535 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:16384",
            "value": 2.319296500270297,
            "unit": "us/iter",
            "extra": "iterations: 603018\ncpu: 2.3191606635291073 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:16",
            "value": 0.18157611947889454,
            "unit": "us/iter",
            "extra": "iterations: 7707068\ncpu: 0.18155940845468158 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:256",
            "value": 0.2841367764051928,
            "unit": "us/iter",
            "extra": "iterations: 4929900\ncpu: 0.28411043428872823 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:1350",
            "value": 0.8238173233290718,
            "unit": "us/iter",
            "extra": "iterations: 1700874\ncpu: 0.8237564264019578 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:8192",
            "value": 3.5947621488593184,
            "unit": "us/iter",
            "extra": "iterations: 387238\ncpu: 3.594427690464266 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:16384",
            "value": 6.974002162054338,
            "unit": "us/iter",
            "extra": "iterations: 200735\ncpu: 6.973467178120456 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:16",
            "value": 0.17204687867876506,
            "unit": "us/iter",
            "extra": "iterations: 8227109\ncpu: 0.17203087743215897 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:256",
            "value": 0.26934067746287954,
            "unit": "us/iter",
            "extra": "iterations: 5200344\ncpu: 0.2693168259638216 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:1350",
            "value": 0.7537906065696077,
            "unit": "us/iter",
            "extra": "iterations: 1816972\ncpu: 0.7537195064095775 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:8192",
            "value": 3.5613791134332424,
            "unit": "us/iter",
            "extra": "iterations: 393315\ncpu: 3.5609881265652246 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:16384",
            "value": 6.959209956118163,
            "unit": "us/iter",
            "extra": "iterations: 201223\ncpu: 6.958490833552898 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:16",
            "value": 0.3063915600060833,
            "unit": "us/iter",
            "extra": "iterations: 4646828\ncpu: 0.3063594398157197 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:256",
            "value": 0.40544469278885753,
            "unit": "us/iter",
            "extra": "iterations: 3455327\ncpu: 0.40540291353032326 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:1350",
            "value": 0.9454369780596333,
            "unit": "us/iter",
            "extra": "iterations: 1488077\ncpu: 0.9453311461705153 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:8192",
            "value": 3.7155397995901556,
            "unit": "us/iter",
            "extra": "iterations: 377127\ncpu: 3.715161396558764 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:16384",
            "value": 7.092625752763992,
            "unit": "us/iter",
            "extra": "iterations: 197439\ncpu: 7.091844448158724 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:16",
            "value": 0.29735137525593225,
            "unit": "us/iter",
            "extra": "iterations: 4713559\ncpu: 0.297320316134791 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:256",
            "value": 0.3934645540741954,
            "unit": "us/iter",
            "extra": "iterations: 3558787\ncpu: 0.39341460728051697 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:1350",
            "value": 0.8812548145863036,
            "unit": "us/iter",
            "extra": "iterations: 1594893\ncpu: 0.8811591793305209 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:8192",
            "value": 3.7143209757810327,
            "unit": "us/iter",
            "extra": "iterations: 381602\ncpu: 3.7139918815938975 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:16384",
            "value": 7.074974262848262,
            "unit": "us/iter",
            "extra": "iterations: 197924\ncpu: 7.074050266769099 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:16",
            "value": 0.27528566576327185,
            "unit": "us/iter",
            "extra": "iterations: 5105148\ncpu: 0.27525304751204005 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:256",
            "value": 0.640988696655455,
            "unit": "us/iter",
            "extra": "iterations: 2185017\ncpu: 0.6409002268632259 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:1350",
            "value": 2.2131671219580804,
            "unit": "us/iter",
            "extra": "iterations: 632562\ncpu: 2.21290624476332 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:8192",
            "value": 11.960149412035843,
            "unit": "us/iter",
            "extra": "iterations: 117099\ncpu: 11.959013979623997 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:16384",
            "value": 23.643623214346086,
            "unit": "us/iter",
            "extra": "iterations: 59222\ncpu: 23.641059150315495 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:16",
            "value": 0.624891400459603,
            "unit": "us/iter",
            "extra": "iterations: 2241050\ncpu: 0.624824114142934 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:256",
            "value": 1.8454514694552624,
            "unit": "us/iter",
            "extra": "iterations: 751537\ncpu: 1.8452331728178437 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:1350",
            "value": 2.5978127580266577,
            "unit": "us/iter",
            "extra": "iterations: 538704\ncpu: 2.5975601183580963 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:8192",
            "value": 7.345970258331435,
            "unit": "us/iter",
            "extra": "iterations: 190608\ncpu: 7.345524684168533 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:16384",
            "value": 13.005049222485377,
            "unit": "us/iter",
            "extra": "iterations: 107715\ncpu: 13.004059230376688 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:16",
            "value": 0.2568562096537152,
            "unit": "us/iter",
            "extra": "iterations: 5479130\ncpu: 0.25684169567066095 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:256",
            "value": 0.6380255231248986,
            "unit": "us/iter",
            "extra": "iterations: 2208507\ncpu: 0.6379618964304837 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:1350",
            "value": 2.256166004346941,
            "unit": "us/iter",
            "extra": "iterations: 603183\ncpu: 2.256017208707823 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:8192",
            "value": 12.260941545140938,
            "unit": "us/iter",
            "extra": "iterations: 114242\ncpu: 12.26005468216583 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:16384",
            "value": 24.366268529115963,
            "unit": "us/iter",
            "extra": "iterations: 57666\ncpu: 24.364499028890496 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:16",
            "value": 0.7621872653608671,
            "unit": "us/iter",
            "extra": "iterations: 1843256\ncpu: 0.7621291947510334 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:256",
            "value": 1.9518388588526359,
            "unit": "us/iter",
            "extra": "iterations: 718575\ncpu: 1.951652153219928 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:1350",
            "value": 2.7435236424270126,
            "unit": "us/iter",
            "extra": "iterations: 510967\ncpu: 2.743107208488984 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:8192",
            "value": 7.8681569709515164,
            "unit": "us/iter",
            "extra": "iterations: 180664\ncpu: 7.867656898994793 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:16384",
            "value": 13.742123834207023,
            "unit": "us/iter",
            "extra": "iterations: 101862\ncpu: 13.74075411831678 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:16",
            "value": 0.29007046510021506,
            "unit": "us/iter",
            "extra": "iterations: 4832378\ncpu: 0.2900409431960841 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:256",
            "value": 0.7314260500380965,
            "unit": "us/iter",
            "extra": "iterations: 1904788\ncpu: 0.7313629711022961 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:1350",
            "value": 2.639586064809015,
            "unit": "us/iter",
            "extra": "iterations: 530513\ncpu: 2.63932042004629 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:8192",
            "value": 14.508027251823188,
            "unit": "us/iter",
            "extra": "iterations: 96544\ncpu: 14.507241206082114 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:16384",
            "value": 28.7508236478711,
            "unit": "us/iter",
            "extra": "iterations: 48664\ncpu: 28.749229101594576 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:16",
            "value": 0.6293300688998414,
            "unit": "us/iter",
            "extra": "iterations: 2223663\ncpu: 0.6293067713048172 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:256",
            "value": 1.8579393497445973,
            "unit": "us/iter",
            "extra": "iterations: 753550\ncpu: 1.857759167938432 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:1350",
            "value": 2.6573253048653833,
            "unit": "us/iter",
            "extra": "iterations: 526626\ncpu: 2.65709913107217 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:8192",
            "value": 7.689210155171347,
            "unit": "us/iter",
            "extra": "iterations: 181799\ncpu: 7.688859867216024 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:16384",
            "value": 13.839151602099927,
            "unit": "us/iter",
            "extra": "iterations: 102116\ncpu: 13.83801393513268 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:16",
            "value": 0.13256280468083456,
            "unit": "us/iter",
            "extra": "iterations: 10598796\ncpu: 0.13241549625070537 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:256",
            "value": 0.22578394491084616,
            "unit": "us/iter",
            "extra": "iterations: 6211314\ncpu: 0.22576580237289645 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:1350",
            "value": 0.5606067422525831,
            "unit": "us/iter",
            "extra": "iterations: 2496673\ncpu: 0.5605775469995509 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:8192",
            "value": 2.3619585990052316,
            "unit": "us/iter",
            "extra": "iterations: 593150\ncpu: 2.361864245131907 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:16384",
            "value": 4.580108589139788,
            "unit": "us/iter",
            "extra": "iterations: 295536\ncpu: 4.5798009379568585 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:16",
            "value": 0.16448242197963653,
            "unit": "us/iter",
            "extra": "iterations: 8511880\ncpu: 0.16447177415564915 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:256",
            "value": 0.23314395749372846,
            "unit": "us/iter",
            "extra": "iterations: 6013796\ncpu: 0.23312767775960472 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:1350",
            "value": 0.5026819699714938,
            "unit": "us/iter",
            "extra": "iterations: 2786152\ncpu: 0.5026401222905277 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:8192",
            "value": 2.0070796002929376,
            "unit": "us/iter",
            "extra": "iterations: 697711\ncpu: 2.0069146681075947 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:16384",
            "value": 3.868944746239253,
            "unit": "us/iter",
            "extra": "iterations: 362093\ncpu: 3.8686371291353194 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:16",
            "value": 0.15088675247352254,
            "unit": "us/iter",
            "extra": "iterations: 9358615\ncpu: 0.15087721292092843 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:256",
            "value": 0.24635798406610646,
            "unit": "us/iter",
            "extra": "iterations: 5686119\ncpu: 0.24634227598824288 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:1350",
            "value": 0.6368180391747368,
            "unit": "us/iter",
            "extra": "iterations: 2203205\ncpu: 0.6367770829314643 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:8192",
            "value": 2.6947193625139443,
            "unit": "us/iter",
            "extra": "iterations: 519478\ncpu: 2.694498812269198 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:16384",
            "value": 5.233768559409173,
            "unit": "us/iter",
            "extra": "iterations: 267425\ncpu: 5.233268957651702 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:16",
            "value": 0.18317157865423328,
            "unit": "us/iter",
            "extra": "iterations: 7637879\ncpu: 0.1831524143024526 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:256",
            "value": 0.26413951477143954,
            "unit": "us/iter",
            "extra": "iterations: 5298163\ncpu: 0.2641183880148638 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:1350",
            "value": 0.5707280444667785,
            "unit": "us/iter",
            "extra": "iterations: 2483292\ncpu: 0.5706733553685976 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:8192",
            "value": 2.317538443499141,
            "unit": "us/iter",
            "extra": "iterations: 614044\ncpu: 2.317392230849908 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:16384",
            "value": 4.409480274759998,
            "unit": "us/iter",
            "extra": "iterations: 318678\ncpu: 4.40911775208827 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:16",
            "value": 0.15522513716077987,
            "unit": "us/iter",
            "extra": "iterations: 9039756\ncpu: 0.15521552495443441 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:256",
            "value": 0.520976859107062,
            "unit": "us/iter",
            "extra": "iterations: 2689006\ncpu: 0.5209400276533437 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:1350",
            "value": 2.2090750569007196,
            "unit": "us/iter",
            "extra": "iterations: 633999\ncpu: 2.208866739537438 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:8192",
            "value": 12.361452613931991,
            "unit": "us/iter",
            "extra": "iterations: 113335\ncpu: 12.360233625976072 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:16384",
            "value": 24.5817992025708,
            "unit": "us/iter",
            "extra": "iterations: 56933\ncpu: 24.579512497145554 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:16",
            "value": 0.16048660704774276,
            "unit": "us/iter",
            "extra": "iterations: 8729666\ncpu: 0.1604756763889952 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:256",
            "value": 0.5239885655679817,
            "unit": "us/iter",
            "extra": "iterations: 2670618\ncpu: 0.5239589218675259 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:1350",
            "value": 2.2075603955752245,
            "unit": "us/iter",
            "extra": "iterations: 635328\ncpu: 2.2073856873930273 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:8192",
            "value": 12.325135715154442,
            "unit": "us/iter",
            "extra": "iterations: 106893\ncpu: 12.323947966658586 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:16384",
            "value": 24.739728271360082,
            "unit": "us/iter",
            "extra": "iterations: 56987\ncpu: 24.737091722673526 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:16",
            "value": 0.18768124742865713,
            "unit": "us/iter",
            "extra": "iterations: 7561699\ncpu: 0.18766746864692457 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:256",
            "value": 0.630702780986378,
            "unit": "us/iter",
            "extra": "iterations: 2224067\ncpu: 0.6306504862488613 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:1350",
            "value": 2.6892706582086965,
            "unit": "us/iter",
            "extra": "iterations: 520701\ncpu: 2.6890484673545982 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:8192",
            "value": 15.14946887814626,
            "unit": "us/iter",
            "extra": "iterations: 92668\ncpu: 15.148203986273707 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:16384",
            "value": 30.106705274465668,
            "unit": "us/iter",
            "extra": "iterations: 46545\ncpu: 30.103945429154326 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:16",
            "value": 0.19128713454507015,
            "unit": "us/iter",
            "extra": "iterations: 7298164\ncpu: 0.1912694133757498 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:256",
            "value": 0.6353386604841069,
            "unit": "us/iter",
            "extra": "iterations: 2203617\ncpu: 0.6352946310543045 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:1350",
            "value": 2.697509041796692,
            "unit": "us/iter",
            "extra": "iterations: 519034\ncpu: 2.69728142857687 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:8192",
            "value": 15.117521677220848,
            "unit": "us/iter",
            "extra": "iterations: 92701\ncpu: 15.116042372789758 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:16384",
            "value": 30.108420077386608,
            "unit": "us/iter",
            "extra": "iterations: 46520\ncpu: 30.104555288048598 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:16",
            "value": 0.14968403942265826,
            "unit": "us/iter",
            "extra": "iterations: 9400888\ncpu: 0.14967449426054363 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:256",
            "value": 0.5068924331025787,
            "unit": "us/iter",
            "extra": "iterations: 2762625\ncpu: 0.5068662992624612 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:1350",
            "value": 2.20063355146873,
            "unit": "us/iter",
            "extra": "iterations: 636455\ncpu: 2.2004537775648254 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:8192",
            "value": 12.350426531548326,
            "unit": "us/iter",
            "extra": "iterations: 113382\ncpu: 12.349497803884153 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:16384",
            "value": 24.57493640897681,
            "unit": "us/iter",
            "extra": "iterations: 56942\ncpu: 24.573164377787617 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:16",
            "value": 0.15491805311666915,
            "unit": "us/iter",
            "extra": "iterations: 9017695\ncpu: 0.1549033205270328 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:256",
            "value": 0.5142674335211609,
            "unit": "us/iter",
            "extra": "iterations: 2721768\ncpu: 0.5142217962736138 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:1350",
            "value": 2.198444733802167,
            "unit": "us/iter",
            "extra": "iterations: 636275\ncpu: 2.1983537558444826 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:8192",
            "value": 12.365657068710188,
            "unit": "us/iter",
            "extra": "iterations: 113288\ncpu: 12.364730130287615 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:16384",
            "value": 24.60744031424722,
            "unit": "us/iter",
            "extra": "iterations: 56898\ncpu: 24.605057893071738 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:16",
            "value": 0.1568875180531985,
            "unit": "us/iter",
            "extra": "iterations: 8916702\ncpu: 0.15687261265432284 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:256",
            "value": 0.507061729629078,
            "unit": "us/iter",
            "extra": "iterations: 2761251\ncpu: 0.5069859990996691 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:1350",
            "value": 2.201285272519527,
            "unit": "us/iter",
            "extra": "iterations: 636083\ncpu: 2.201091333992603 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:8192",
            "value": 12.356298342443369,
            "unit": "us/iter",
            "extra": "iterations: 113239\ncpu: 12.355671455947128 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:16384",
            "value": 24.574824914879496,
            "unit": "us/iter",
            "extra": "iterations: 56978\ncpu: 24.57320669381157 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:16",
            "value": 0.15647353406323505,
            "unit": "us/iter",
            "extra": "iterations: 8955417\ncpu: 0.15646228321919345 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:256",
            "value": 0.5146005990151395,
            "unit": "us/iter",
            "extra": "iterations: 2721801\ncpu: 0.5145651173616117 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:1350",
            "value": 2.2023575417062076,
            "unit": "us/iter",
            "extra": "iterations: 635758\ncpu: 2.202088002038504 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:8192",
            "value": 12.368022165636516,
            "unit": "us/iter",
            "extra": "iterations: 113103\ncpu: 12.367145230453357 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:16384",
            "value": 24.840290201698036,
            "unit": "us/iter",
            "extra": "iterations: 54438\ncpu: 24.839310775561376 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:16",
            "value": 0.15830333298510202,
            "unit": "us/iter",
            "extra": "iterations: 8854375\ncpu: 0.15829165514223412 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:256",
            "value": 0.5099543853201426,
            "unit": "us/iter",
            "extra": "iterations: 2737189\ncpu: 0.509916400730827 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:1350",
            "value": 2.2015219245332305,
            "unit": "us/iter",
            "extra": "iterations: 635749\ncpu: 2.2013432140671676 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:8192",
            "value": 12.352568727779694,
            "unit": "us/iter",
            "extra": "iterations: 113353\ncpu: 12.3511660741226 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:16384",
            "value": 24.584891765697105,
            "unit": "us/iter",
            "extra": "iterations: 56969\ncpu: 24.582311801154425 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:16",
            "value": 0.15766759046463627,
            "unit": "us/iter",
            "extra": "iterations: 8882173\ncpu: 0.15766122276609157 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:256",
            "value": 0.515318685948715,
            "unit": "us/iter",
            "extra": "iterations: 2717550\ncpu: 0.5152873511066995 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:1350",
            "value": 2.2026094156109894,
            "unit": "us/iter",
            "extra": "iterations: 635604\ncpu: 2.2024618646201204 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:8192",
            "value": 12.368721434757683,
            "unit": "us/iter",
            "extra": "iterations: 113162\ncpu: 12.367883945140424 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:16384",
            "value": 24.613221728048,
            "unit": "us/iter",
            "extra": "iterations: 56885\ncpu: 24.610711101345306 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:16",
            "value": 0.2388924597655608,
            "unit": "us/iter",
            "extra": "iterations: 5859221\ncpu: 0.23887282166007612 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:256",
            "value": 0.44356311727296494,
            "unit": "us/iter",
            "extra": "iterations: 3188723\ncpu: 0.44352891957063495 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:1350",
            "value": 1.266189872731107,
            "unit": "us/iter",
            "extra": "iterations: 1106162\ncpu: 1.2661183786823218 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:8192",
            "value": 6.450089359478328,
            "unit": "us/iter",
            "extra": "iterations: 220055\ncpu: 6.449715316625487 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:16384",
            "value": 12.481491619096388,
            "unit": "us/iter",
            "extra": "iterations: 110012\ncpu: 12.480325900810538 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:16",
            "value": 0.24446825806249003,
            "unit": "us/iter",
            "extra": "iterations: 5710710\ncpu: 0.24444489511811626 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:256",
            "value": 0.43851139697117736,
            "unit": "us/iter",
            "extra": "iterations: 3201333\ncpu: 0.43847084979913525 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:1350",
            "value": 1.2915873102788242,
            "unit": "us/iter",
            "extra": "iterations: 1095753\ncpu: 1.2914653119817843 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:8192",
            "value": 6.362745716648671,
            "unit": "us/iter",
            "extra": "iterations: 220038\ncpu: 6.3621414619293635 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:16384",
            "value": 12.514681425399212,
            "unit": "us/iter",
            "extra": "iterations: 112137\ncpu: 12.513840427334491 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:16",
            "value": 0.24239350713794794,
            "unit": "us/iter",
            "extra": "iterations: 5775758\ncpu: 0.24237623858201757 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:256",
            "value": 0.44407505702913047,
            "unit": "us/iter",
            "extra": "iterations: 3161103\ncpu: 0.4440462199428575 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:1350",
            "value": 1.3198375244604883,
            "unit": "us/iter",
            "extra": "iterations: 1013371\ncpu: 1.3197053527286355 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:8192",
            "value": 6.5326761104892865,
            "unit": "us/iter",
            "extra": "iterations: 214320\ncpu: 6.532184112541882 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:16384",
            "value": 12.885320988220426,
            "unit": "us/iter",
            "extra": "iterations: 109085\ncpu: 12.884272228079368 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:16",
            "value": 0.2492962628054937,
            "unit": "us/iter",
            "extra": "iterations: 5617904\ncpu: 0.24927844868833193 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:256",
            "value": 0.44469321217074015,
            "unit": "us/iter",
            "extra": "iterations: 3148606\ncpu: 0.4446598059585709 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:1350",
            "value": 1.319025470406135,
            "unit": "us/iter",
            "extra": "iterations: 1061742\ncpu: 1.3189491769186583 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:8192",
            "value": 6.539019099297491,
            "unit": "us/iter",
            "extra": "iterations: 214144\ncpu: 6.538762061976926 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:16384",
            "value": 12.951178354049508,
            "unit": "us/iter",
            "extra": "iterations: 109092\ncpu: 12.950585414145722 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:16",
            "value": 1.6505300080376357,
            "unit": "us/iter",
            "extra": "iterations: 848506\ncpu: 1.6504482089696793 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:256",
            "value": 9.9798986164314,
            "unit": "us/iter",
            "extra": "iterations: 140723\ncpu: 9.97929134540912 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:1350",
            "value": 47.7708442821552,
            "unit": "us/iter",
            "extra": "iterations: 29303\ncpu: 47.76837412551683 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:8192",
            "value": 283.5160226629,
            "unit": "us/iter",
            "extra": "iterations: 4942\ncpu: 283.5026040064802 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:16384",
            "value": 565.973380663466,
            "unit": "us/iter",
            "extra": "iterations: 2472\ncpu: 565.9519809870618 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:16",
            "value": 1.9507381418723997,
            "unit": "us/iter",
            "extra": "iterations: 717335\ncpu: 1.950541044281925 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:256",
            "value": 11.028422046971611,
            "unit": "us/iter",
            "extra": "iterations: 126929\ncpu: 11.027718827060882 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:1350",
            "value": 47.41709608287933,
            "unit": "us/iter",
            "extra": "iterations: 29537\ncpu: 47.41310143210307 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:8192",
            "value": 274.61472289866435,
            "unit": "us/iter",
            "extra": "iterations: 5092\ncpu: 274.5951897093537 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:16384",
            "value": 547.0271910902771,
            "unit": "us/iter",
            "extra": "iterations: 2559\ncpu: 546.9994701055091 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockEncryptSetup<128>/threads:1",
            "value": 0.018368867243633607,
            "unit": "us/iter",
            "extra": "iterations: 76304943\ncpu: 0.018368097398356202 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockEncryptSetup<256>/threads:1",
            "value": 0.021538120357375217,
            "unit": "us/iter",
            "extra": "iterations: 65058165\ncpu: 0.02153724630874524 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockEncrypt<128>/threads:1",
            "value": 0.01589159526455335,
            "unit": "us/iter",
            "extra": "iterations: 87942542\ncpu: 0.015890542599962983 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockEncrypt<256>/threads:1",
            "value": 0.020873649676361662,
            "unit": "us/iter",
            "extra": "iterations: 67011898\ncpu: 0.020871915387324316 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockDecryptSetup<128>/threads:1",
            "value": 0.02108425739830787,
            "unit": "us/iter",
            "extra": "iterations: 66449512\ncpu: 0.021083126810622813 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockDecryptSetup<256>/threads:1",
            "value": 0.026181534433955198,
            "unit": "us/iter",
            "extra": "iterations: 53491152\ncpu: 0.02617984527609334 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockDecrypt<128>/threads:1",
            "value": 0.015890258013861482,
            "unit": "us/iter",
            "extra": "iterations: 80567842\ncpu: 0.015889779708881762 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockDecrypt<256>/threads:1",
            "value": 0.02086522408646102,
            "unit": "us/iter",
            "extra": "iterations: 67072504\ncpu: 0.020864265586387397 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedBase64/threads:1",
            "value": 6.292802242720396,
            "unit": "us/iter",
            "extra": "iterations: 221160\ncpu: 6.292411697413629 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedEd25519/threads:1",
            "value": 26.907024192464423,
            "unit": "us/iter",
            "extra": "iterations: 52041\ncpu: 26.90485936088906 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedEd25519Sign/threads:1",
            "value": 27.079578058256498,
            "unit": "us/iter",
            "extra": "iterations: 51737\ncpu: 27.07704924908677 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedEd25519Verify/threads:1",
            "value": 48.28906687568907,
            "unit": "us/iter",
            "extra": "iterations: 29024\ncpu: 48.28561304437869 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedCurve25519BasePointMultiply/threads:1",
            "value": 25.80667217172796,
            "unit": "us/iter",
            "extra": "iterations: 54132\ncpu: 25.805034877706063 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedCurve25519ArbitraryPointMultiply/threads:1",
            "value": 41.55801157201313,
            "unit": "us/iter",
            "extra": "iterations: 33702\ncpu: 41.55595748026833 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDH/p224/threads:1",
            "value": 395.47510677967864,
            "unit": "us/iter",
            "extra": "iterations: 3540\ncpu: 395.4450932203381 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDH/p256/threads:1",
            "value": 60.218245536291384,
            "unit": "us/iter",
            "extra": "iterations: 23243\ncpu: 60.214798606031145 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDH/p384/threads:1",
            "value": 976.0007608088905,
            "unit": "us/iter",
            "extra": "iterations: 1434\ncpu: 975.9430620641728 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDH/p521/threads:1",
            "value": 2472.0462859589006,
            "unit": "us/iter",
            "extra": "iterations: 584\ncpu: 2471.662652397331 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSASign/p224/threads:1",
            "value": 219.22416917056262,
            "unit": "us/iter",
            "extra": "iterations: 6390\ncpu: 219.21548560250736 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSASign/p256/threads:1",
            "value": 19.809430005797367,
            "unit": "us/iter",
            "extra": "iterations: 70713\ncpu: 19.808537991599227 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSASign/p384/threads:1",
            "value": 544.6892498007654,
            "unit": "us/iter",
            "extra": "iterations: 2510\ncpu: 544.6626019920179 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSASign/p521/threads:1",
            "value": 1342.0867085330428,
            "unit": "us/iter",
            "extra": "iterations: 1043\ncpu: 1341.988588686479 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSAVerify/p224/threads:1",
            "value": 212.25964246369702,
            "unit": "us/iter",
            "extra": "iterations: 5991\ncpu: 212.24560824570744 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSAVerify/p256/threads:1",
            "value": 55.9094172122012,
            "unit": "us/iter",
            "extra": "iterations: 25052\ncpu: 55.906362406194944 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSAVerify/p384/threads:1",
            "value": 544.0657010509782,
            "unit": "us/iter",
            "extra": "iterations: 2569\ncpu: 544.0347255741538 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSAVerify/p521/threads:1",
            "value": 1343.4705172744893,
            "unit": "us/iter",
            "extra": "iterations: 1042\ncpu: 1343.3976554702592 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:16/threads:1",
            "value": 0.05980981719949185,
            "unit": "us/iter",
            "extra": "iterations: 23408305\ncpu: 0.05980767612178548 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:256/threads:1",
            "value": 0.21209977134141358,
            "unit": "us/iter",
            "extra": "iterations: 6601545\ncpu: 0.2120922867298521 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:1350/threads:1",
            "value": 0.8529141261658348,
            "unit": "us/iter",
            "extra": "iterations: 1640523\ncpu: 0.8528622987913148 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:8192/threads:1",
            "value": 4.883311237906676,
            "unit": "us/iter",
            "extra": "iterations: 286726\ncpu: 4.883119846124887 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:16384/threads:1",
            "value": 9.704425052501803,
            "unit": "us/iter",
            "extra": "iterations: 144281\ncpu: 9.703484921784513 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:16/threads:1",
            "value": 0.06392760883588847,
            "unit": "us/iter",
            "extra": "iterations: 21975472\ncpu: 0.06392180914248367 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:256/threads:1",
            "value": 0.23093304216114166,
            "unit": "us/iter",
            "extra": "iterations: 6063308\ncpu: 0.23091142986634086 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:1350/threads:1",
            "value": 0.9147545277308793,
            "unit": "us/iter",
            "extra": "iterations: 1530568\ncpu: 0.9146969262391542 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:8192/threads:1",
            "value": 5.210369582210584,
            "unit": "us/iter",
            "extra": "iterations: 268652\ncpu: 5.210039489748838 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:16384/threads:1",
            "value": 10.350812892732709,
            "unit": "us/iter",
            "extra": "iterations: 135270\ncpu: 10.350158904413227 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:16/threads:1",
            "value": 0.28304765551032585,
            "unit": "us/iter",
            "extra": "iterations: 4953530\ncpu: 0.2830377920392133 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:256/threads:1",
            "value": 0.7658297294102427,
            "unit": "us/iter",
            "extra": "iterations: 1827268\ncpu: 0.7657873459175216 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:1350/threads:1",
            "value": 2.670558941546663,
            "unit": "us/iter",
            "extra": "iterations: 524350\ncpu: 2.6704869762563455 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:8192/threads:1",
            "value": 15.495938458989468,
            "unit": "us/iter",
            "extra": "iterations: 90525\ncpu: 15.495240110467185 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:16384/threads:1",
            "value": 30.606555711159256,
            "unit": "us/iter",
            "extra": "iterations: 45700\ncpu: 30.60464807439798 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:16/threads:1",
            "value": 0.28364012910155717,
            "unit": "us/iter",
            "extra": "iterations: 4943395\ncpu: 0.2836210907685941 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:256/threads:1",
            "value": 0.533954977462675,
            "unit": "us/iter",
            "extra": "iterations: 2628528\ncpu: 0.533929883950267 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:1350/threads:1",
            "value": 2.8512093483679326,
            "unit": "us/iter",
            "extra": "iterations: 490952\ncpu: 2.851014787596319 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:8192/threads:1",
            "value": 16.37949932098609,
            "unit": "us/iter",
            "extra": "iterations: 85418\ncpu: 16.3786603174974 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:16384/threads:1",
            "value": 32.716478935440016,
            "unit": "us/iter",
            "extra": "iterations: 42797\ncpu: 32.715434049115586 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHashToCurve/hash-to-curve P256_XMD:SHA-256_SSWU_RO_/threads:1",
            "value": 29.298364711795564,
            "unit": "us/iter",
            "extra": "iterations: 47761\ncpu: 29.297082954711367 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHashToCurve/hash-to-curve P384_XMD:SHA-384_SSWU_RO_/threads:1",
            "value": 76.70384790936843,
            "unit": "us/iter",
            "extra": "iterations: 18272\ncpu: 76.69895227670716 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHashToCurve/hash-to-scalar P384_XMD:SHA-512/threads:1",
            "value": 1.4085522876507803,
            "unit": "us/iter",
            "extra": "iterations: 994317\ncpu: 1.4084924365167109 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHRSSGenerate/threads:1",
            "value": 137.68261985018674,
            "unit": "us/iter",
            "extra": "iterations: 10146\ncpu: 137.66924009462204 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHRSSEncap/threads:1",
            "value": 10.618012990361377,
            "unit": "us/iter",
            "extra": "iterations: 131867\ncpu: 10.617410891276853 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHRSSDecap/threads:1",
            "value": 29.445943898375674,
            "unit": "us/iter",
            "extra": "iterations: 48020\ncpu: 29.444101790920584 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAKeyGen/ml_dsa_44/threads:1",
            "value": 71.34857506374284,
            "unit": "us/iter",
            "extra": "iterations: 19610\ncpu: 71.34357547169846 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSASign/ml_dsa_44/threads:1",
            "value": 247.07643068360932,
            "unit": "us/iter",
            "extra": "iterations: 5749\ncpu: 247.062375717516 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAParsePubKey/ml_dsa_44/threads:1",
            "value": 4.560185081738315,
            "unit": "us/iter",
            "extra": "iterations: 306832\ncpu: 4.560034100093951 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerify/ml_dsa_44/threads:1",
            "value": 59.240485794247796,
            "unit": "us/iter",
            "extra": "iterations: 23582\ncpu: 59.2381029598831 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerifyBadSignature/ml_dsa_44/threads:1",
            "value": 59.379870182125956,
            "unit": "us/iter",
            "extra": "iterations: 23610\ncpu: 59.37631893265514 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAKeyGen/ml_dsa_65/threads:1",
            "value": 129.90079596184415,
            "unit": "us/iter",
            "extra": "iterations: 10797\ncpu: 129.89206307307845 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSASign/ml_dsa_65/threads:1",
            "value": 383.7839706539988,
            "unit": "us/iter",
            "extra": "iterations: 3578\ncpu: 383.76460564560864 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAParsePubKey/ml_dsa_65/threads:1",
            "value": 6.59304291412942,
            "unit": "us/iter",
            "extra": "iterations: 212331\ncpu: 6.592838012348504 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerify/ml_dsa_65/threads:1",
            "value": 93.49128271028124,
            "unit": "us/iter",
            "extra": "iterations: 14980\ncpu: 93.48781962616691 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerifyBadSignature/ml_dsa_65/threads:1",
            "value": 93.63019780594783,
            "unit": "us/iter",
            "extra": "iterations: 14676\ncpu: 93.62463266557872 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAKeyGen/ml_dsa_87/threads:1",
            "value": 183.5983033604675,
            "unit": "us/iter",
            "extra": "iterations: 7618\ncpu: 183.58890036754653 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSASign/ml_dsa_87/threads:1",
            "value": 467.06052040131414,
            "unit": "us/iter",
            "extra": "iterations: 2990\ncpu: 467.0320474916475 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAParsePubKey/ml_dsa_87/threads:1",
            "value": 8.715076523655652,
            "unit": "us/iter",
            "extra": "iterations: 160617\ncpu: 8.714401738296644 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerify/ml_dsa_87/threads:1",
            "value": 157.34234900236052,
            "unit": "us/iter",
            "extra": "iterations: 8871\ncpu: 157.33542644572162 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerifyBadSignature/ml_dsa_87/threads:1",
            "value": 159.16842996152994,
            "unit": "us/iter",
            "extra": "iterations: 8838\ncpu: 159.16410432224814 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768KeyGenDecap/threads:1",
            "value": 63.88346093500853,
            "unit": "us/iter",
            "extra": "iterations: 21925\ncpu: 63.880685153932745 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768ParseEncap/threads:1",
            "value": 35.92946222422145,
            "unit": "us/iter",
            "extra": "iterations: 39033\ncpu: 35.929504854685625 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024KeyGenDecap/threads:1",
            "value": 86.40624720834326,
            "unit": "us/iter",
            "extra": "iterations: 16209\ncpu: 86.40061015485118 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024ParseEncap/threads:1",
            "value": 49.319289304635376,
            "unit": "us/iter",
            "extra": "iterations: 28368\ncpu: 49.32364315425486 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768KeyGenOnly/threads:1",
            "value": 31.168278458180648,
            "unit": "us/iter",
            "extra": "iterations: 44908\ncpu: 31.1659494299461 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768PrivateKeyFromSeedOnly/threads:1",
            "value": 31.196227733796928,
            "unit": "us/iter",
            "extra": "iterations: 44855\ncpu: 31.215691740113314 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768DecapOnly/threads:1",
            "value": 33.39608102485285,
            "unit": "us/iter",
            "extra": "iterations: 41913\ncpu: 33.39354792067163 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768ParseOnly/threads:1",
            "value": 13.669901115820146,
            "unit": "us/iter",
            "extra": "iterations: 103151\ncpu: 13.657865594994767 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768EncapOnly/threads:1",
            "value": 23.306151832551638,
            "unit": "us/iter",
            "extra": "iterations: 60435\ncpu: 23.30108877300509 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024KeyGenOnly/threads:1",
            "value": 44.52609533494235,
            "unit": "us/iter",
            "extra": "iterations: 31468\ncpu: 44.52458230583332 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024PrivateKeyFromSeedOnly/threads:1",
            "value": 44.61868121058966,
            "unit": "us/iter",
            "extra": "iterations: 31422\ncpu: 44.64281894884121 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024DecapOnly/threads:1",
            "value": 42.540745206290815,
            "unit": "us/iter",
            "extra": "iterations: 32909\ncpu: 42.546347017509135 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024ParseOnly/threads:1",
            "value": 20.906906716655314,
            "unit": "us/iter",
            "extra": "iterations: 66861\ncpu: 20.891762582207672 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024EncapOnly/threads:1",
            "value": 29.40111513308852,
            "unit": "us/iter",
            "extra": "iterations: 47823\ncpu: 29.387857306865893 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:16/threads:1",
            "value": 0.6604578376484772,
            "unit": "us/iter",
            "extra": "iterations: 2120719\ncpu: 0.6604199127748629 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:256/threads:1",
            "value": 0.6981961765112326,
            "unit": "us/iter",
            "extra": "iterations: 2002569\ncpu: 0.6981712205671925 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:1350/threads:1",
            "value": 0.9041822738403857,
            "unit": "us/iter",
            "extra": "iterations: 1548807\ncpu: 0.9041239915625459 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:8192/threads:1",
            "value": 1.918458071845346,
            "unit": "us/iter",
            "extra": "iterations: 742067\ncpu: 1.9183403439312294 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:16384/threads:1",
            "value": 3.135877957335005,
            "unit": "us/iter",
            "extra": "iterations: 446221\ncpu: 3.1356803736263292 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAParsePrivateKey/2048/threads:1",
            "value": 116.0608360954607,
            "unit": "us/iter",
            "extra": "iterations: 12068\ncpu: 116.05453952602535 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSASign/2048/threads:1",
            "value": 644.1567036178192,
            "unit": "us/iter",
            "extra": "iterations: 2156\ncpu: 644.1011934137322 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndSign/2048/threads:1",
            "value": 764.5757143637236,
            "unit": "us/iter",
            "extra": "iterations: 1831\ncpu: 764.5335974877306 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAVerify/2048/threads:1",
            "value": 17.066254512879723,
            "unit": "us/iter",
            "extra": "iterations: 80935\ncpu: 17.064785037375135 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndVerify/2048/threads:1",
            "value": 19.498972527472702,
            "unit": "us/iter",
            "extra": "iterations: 71708\ncpu: 19.49778278574251 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAParsePrivateKey/3072/threads:1",
            "value": 225.45124497346578,
            "unit": "us/iter",
            "extra": "iterations: 6217\ncpu: 225.4455394884977 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSASign/3072/threads:1",
            "value": 1981.7763380480928,
            "unit": "us/iter",
            "extra": "iterations: 707\ncpu: 1981.669540311295 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndSign/3072/threads:1",
            "value": 2220.117339682597,
            "unit": "us/iter",
            "extra": "iterations: 630\ncpu: 2219.9614968254564 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAVerify/3072/threads:1",
            "value": 36.60304037023644,
            "unit": "us/iter",
            "extra": "iterations: 38246\ncpu: 36.60042767871089 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndVerify/3072/threads:1",
            "value": 41.17465968707978,
            "unit": "us/iter",
            "extra": "iterations: 34386\ncpu: 41.171867155236626 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAParsePrivateKey/4096/threads:1",
            "value": 379.86039544960755,
            "unit": "us/iter",
            "extra": "iterations: 3692\ncpu: 379.8209330986051 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSASign/4096/threads:1",
            "value": 4514.088424437336,
            "unit": "us/iter",
            "extra": "iterations: 311\ncpu: 4513.763083600987 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndSign/4096/threads:1",
            "value": 4907.138049122949,
            "unit": "us/iter",
            "extra": "iterations: 285\ncpu: 4906.6626280699365 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAVerify/4096/threads:1",
            "value": 63.540098303395965,
            "unit": "us/iter",
            "extra": "iterations: 22044\ncpu: 63.53642936853558 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndVerify/4096/threads:1",
            "value": 70.58987159372,
            "unit": "us/iter",
            "extra": "iterations: 19376\ncpu: 70.58544787365574 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedScrypt/(N = 1024, r = 8, p = 16)/threads:1",
            "value": 28578.93324489758,
            "unit": "us/iter",
            "extra": "iterations: 49\ncpu: 28577.296693878434 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedScrypt/(N = 16384, r = 8, p = 1)/threads:1",
            "value": 28655.655775509684,
            "unit": "us/iter",
            "extra": "iterations: 49\ncpu: 28654.043204081678 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/16/threads:1",
            "value": 0.021157660964332883,
            "unit": "us/iter",
            "extra": "iterations: 66177922\ncpu: 0.02115663581881479 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/256/threads:1",
            "value": 0.1150315523239974,
            "unit": "us/iter",
            "extra": "iterations: 12187153\ncpu: 0.11502505466206714 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/1350/threads:1",
            "value": 0.5482462422566257,
            "unit": "us/iter",
            "extra": "iterations: 2587058\ncpu: 0.5482089458373185 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/8192/threads:1",
            "value": 3.2039145696318534,
            "unit": "us/iter",
            "extra": "iterations: 436847\ncpu: 3.2037360883786525 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/16384/threads:1",
            "value": 6.41023660390251,
            "unit": "us/iter",
            "extra": "iterations: 219075\ncpu: 6.409844026018889 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSLHDSA/threads:1",
            "value": 37267.35926315578,
            "unit": "us/iter",
            "extra": "iterations: 38\ncpu: 37264.60997368301 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSLHDSASign/threads:1",
            "value": 281687.93840000033,
            "unit": "us/iter",
            "extra": "iterations: 5\ncpu: 281665.3210000141 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSLHDSAVerify/threads:1",
            "value": 291.59378103181774,
            "unit": "us/iter",
            "extra": "iterations: 5156\ncpu: 291.56831128782716 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSPAKE2/threads:1",
            "value": 121.00997260629154,
            "unit": "us/iter",
            "extra": "iterations: 11572\ncpu: 121.00504044245017 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedX509/threads:1",
            "value": 3.917608595261072,
            "unit": "us/iter",
            "extra": "iterations: 357732\ncpu: 3.9173985162077343 us\nthreads: 1"
          }
        ]
      },
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
          "id": "c93f49c459ac3ab8feb4bf747293ccff9c7da3f2",
          "message": "Run benchmarks 9 times and take the median.",
          "timestamp": "2026-07-11T07:15:41+02:00",
          "tree_id": "86a4c14c3d58614bc55548d79f3e8be896882625",
          "url": "https://github.com/divVerent/boringssl/commit/c93f49c459ac3ab8feb4bf747293ccff9c7da3f2"
        },
        "date": 1783747528610,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:1350",
            "value": 2.210989234449692,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.210881468773403 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:16",
            "value": 0.4985716674023037,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.4985685191752579 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:16384",
            "value": 11.292621464363087,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 11.291614837562062 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:256",
            "value": 1.566102948073299,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.565707504187332 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:8192",
            "value": 6.343602654707091,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.343520159465845 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:1350",
            "value": 2.412380559818952,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.4123135401752323 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:16",
            "value": 0.6464539855710199,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.6463638413735725 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:16384",
            "value": 12.011287783968204,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.010471238748423 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:256",
            "value": 1.7087170197477668,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.7085309975997696 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:8192",
            "value": 6.776095465970818,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.775444122196508 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:1350",
            "value": 2.0744358959160665,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.0743198535952723 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:16",
            "value": 0.12059081676457249,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.12057943321414882 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:16384",
            "value": 23.712155747416478,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 23.711823599118034 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:256",
            "value": 0.4580952958919355,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.4580192234083182 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:8192",
            "value": 11.899786970184934,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 11.899679435999108 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:1350",
            "value": 2.0760906663900336,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.0760800913634117 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:16",
            "value": 0.1232635899486786,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.12326270553394836 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:16384",
            "value": 23.710150601388715,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 23.709357953577715 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:256",
            "value": 0.4605228628361512,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.4604619128102714 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:8192",
            "value": 11.903089595378441,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 11.898928340700419 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:1350",
            "value": 2.07999086900306,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.0799768829892886 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:16",
            "value": 0.12583650197973462,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.1258183727859878 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:16384",
            "value": 23.711157101741623,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 23.709377010327135 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:256",
            "value": 0.46338749255903355,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.46338620609835846 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:8192",
            "value": 11.907029766964351,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 11.905947440040912 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:1350",
            "value": 1.1050004105252533,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.104987597401055 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:16",
            "value": 0.20202197213753173,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.20202087086045054 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:16384",
            "value": 10.949357617966111,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 10.949275138903744 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:256",
            "value": 0.36951784812225275,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.3694782482207343 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:8192",
            "value": 5.5509088420792985,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 5.550431472886565 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:1350",
            "value": 1.9158956972723158,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.9157476126447683 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:16",
            "value": 0.13290826074259424,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.13290713348477146 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:16384",
            "value": 21.418237381464163,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 21.4181297032749 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:256",
            "value": 0.4544211555387067,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.4543777960382322 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:8192",
            "value": 10.768321455995407,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 10.768155890032787 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:1350",
            "value": 0.21981388162545623,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2197959022456751 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:16",
            "value": 0.09704391409868392,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.09704329351238411 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:16384",
            "value": 1.3179999530085358,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.3177832955836672 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:256",
            "value": 0.10318022680418241,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.10316793802897835 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:8192",
            "value": 0.6983167863196323,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.6983094725297445 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:1350",
            "value": 0.43702762544817947,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.4369070490800544 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:16",
            "value": 0.14931973783781027,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.14931855998906357 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:16384",
            "value": 3.3245046189651273,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.324479588686687 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:256",
            "value": 0.20943013314101458,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.20941155504747752 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:8192",
            "value": 1.7393324702041661,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.739176190004074 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:1350",
            "value": 0.2344128406146876,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.23438275629627267 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:16",
            "value": 0.0990808397848752,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.09906349462012379 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:16384",
            "value": 1.434135604466902,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.4338497355900313 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:256",
            "value": 0.10627153096421711,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.10626152548109911 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:8192",
            "value": 0.7587224504578601,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.7586015492394635 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:1350",
            "value": 2.2603222851812017,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.259731093654546 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:16",
            "value": 0.5019934576793009,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5019894426659925 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:16384",
            "value": 11.861043581283585,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 11.858440297874878 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:256",
            "value": 1.566831226857638,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.5667224066720407 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:8192",
            "value": 6.629115027917018,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.628440995552653 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:1350",
            "value": 1.138557084902239,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.1385411175520987 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:16",
            "value": 0.20696502607110315,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.20696456868346308 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:16384",
            "value": 11.183501676244926,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 11.183390884419659 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:256",
            "value": 0.3744089505718655,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.3743495972991341 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:8192",
            "value": 5.6950641632636465,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 5.69486559183648 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:1350",
            "value": 2.3414613454657474,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.3414197303716637 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:16",
            "value": 0.15983221338543988,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.15983084866313332 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:16384",
            "value": 26.23105435802118,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 26.22869728209917 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:256",
            "value": 0.5492595537214843,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.549256749283247 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:8192",
            "value": 13.182177051947871,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 13.181955195783909 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:1350",
            "value": 0.2484457119916559,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.24843400741106192 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:16",
            "value": 0.10193432861645003,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.10193296850442554 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:16384",
            "value": 1.546102818529697,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.5461017746299697 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:256",
            "value": 0.10957068802051431,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.1095600377664115 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:8192",
            "value": 0.818487649426427,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.8184238721691299 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:1350",
            "value": 0.473385035547691,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.47328948896431133 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:16",
            "value": 0.1622567308137627,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.1622546639803658 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:16384",
            "value": 3.577373265530847,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.577328392916496 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:256",
            "value": 0.2314406206617162,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.23143874917798224 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:8192",
            "value": 1.867878792320566,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.8678739957093948 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:1350",
            "value": 0.6805124117379951,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.6805034619768291 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:16",
            "value": 0.1637215732734222,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.16372001721097282 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:16384",
            "value": 6.193752531085015,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.193239209592183 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:256",
            "value": 0.24384897914451864,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.243808254517222 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:8192",
            "value": 3.176793259089381,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.1765578942592585 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:1350",
            "value": 41.26843976434894,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 41.26797643593564 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:16",
            "value": 1.6396329082852539,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.6396242125317237 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:16384",
            "value": 477.07934915236405,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 477.0131016949038 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:256",
            "value": 9.550109244265805,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 9.549139106181373 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:8192",
            "value": 239.32968197277583,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 239.3108979591569 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:1350",
            "value": 0.7802834747438787,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.7802769009643558 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:16",
            "value": 0.2660153339719684,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2659837404400199 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:16384",
            "value": 6.31549028535254,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.315081594013423 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:256",
            "value": 0.34810561796077866,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.34807864797079 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:8192",
            "value": 3.2877051842452993,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.287224642789995 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:1350",
            "value": 1.824592632790643,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.8242972044074226 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:16",
            "value": 0.17922405946721906,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.1792032542318306 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:16384",
            "value": 20.098775674129485,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 20.094916236373045 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:256",
            "value": 0.48648938429982574,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.4864484521588953 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:8192",
            "value": 10.127150846475258,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 10.127074157140267 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:1350",
            "value": 1.8908920834122698,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.890740608011212 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:16",
            "value": 0.19554797460529932,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.19554626102589764 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:16384",
            "value": 20.672428950862905,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 20.67206522059856 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:256",
            "value": 0.5141216502625052,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5141164423337192 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:8192",
            "value": 10.429001716034893,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 10.427795493546457 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:1350",
            "value": 2.0748856851051385,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.074573883568725 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:16",
            "value": 0.12108116348980695,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.12107369227983002 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:16384",
            "value": 23.71487334913436,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 23.710241618693104 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:256",
            "value": 0.4590992384171865,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.45905059412622706 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:8192",
            "value": 11.902186375974724,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 11.901400661689701 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:1350",
            "value": 2.0744875384093535,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.074459201092153 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:16",
            "value": 0.12116502692292852,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.12114903898748529 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:16384",
            "value": 23.717508819534665,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 23.71660210312247 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:256",
            "value": 0.45927376829755445,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.4592670889365508 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:8192",
            "value": 11.899894074642141,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 11.89874122247712 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:1350",
            "value": 2.075408985867696,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.075329141113391 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:16",
            "value": 0.12154241649020493,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.12151791757490156 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:16384",
            "value": 23.723439173159644,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 23.721721789224365 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:256",
            "value": 0.45930379427089985,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.4592994902043611 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:8192",
            "value": 11.902960237896822,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 11.902295581989206 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:1350",
            "value": 1.099624339165012,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.099479517050123 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:16",
            "value": 0.2014031013746259,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.20138490038166054 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:16384",
            "value": 10.945260361485607,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 10.944170146463161 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:256",
            "value": 0.36634780715576265,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.3663447067464082 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:8192",
            "value": 5.571015042979029,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 5.570420885068426 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:1350",
            "value": 1.924569580976562,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.9242685347905288 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:16",
            "value": 0.1289088924417335,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.12888499641656595 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:16384",
            "value": 21.597260842722388,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 21.59711313474315 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:256",
            "value": 0.4513656947181927,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.45134784108749365 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:8192",
            "value": 10.873085159284539,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 10.873004584305855 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:1350",
            "value": 0.2242445696747121,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.22419339807004418 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:16",
            "value": 0.09313698037007861,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.09313019960938809 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:16384",
            "value": 1.334579726445019,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.3345771338704049 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:256",
            "value": 0.10033323943621796,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.10031569256133638 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:8192",
            "value": 0.7053046337654558,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.7051865212343797 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:1350",
            "value": 0.49162342648378055,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.4915543970717797 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:16",
            "value": 0.11118370374716968,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.11117980985962343 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:16384",
            "value": 3.9971440113114607,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.996656057938531 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:256",
            "value": 0.19369214824033715,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.19368384982372333 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:8192",
            "value": 2.063090934510719,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.0626747755702914 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:1350",
            "value": 0.23939672158583228,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.23934713202815397 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:16",
            "value": 0.09788573985157951,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.09787232058144049 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:16384",
            "value": 1.4420322869956825,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.4420149373740092 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:256",
            "value": 0.10466778132646377,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.10466757363514992 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:8192",
            "value": 0.7613205541097616,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.7613171004120853 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:1350",
            "value": 2.1976463606099643,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.197635998240876 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:16",
            "value": 0.19066854703917258,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.19066631799729603 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:16384",
            "value": 24.565765707260717,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24.565562829068487 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:256",
            "value": 0.5674183708978495,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5674132197628675 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:8192",
            "value": 12.376119830326871,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.374551961821094 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:1350",
            "value": 1.1330317678886805,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.1330343841629986 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:16",
            "value": 0.20578929718620156,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2057877766718318 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:16384",
            "value": 11.174289362380971,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 11.173258478973287 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:256",
            "value": 0.37188142164530286,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.3718250754316398 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:8192",
            "value": 5.704460632008793,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 5.703867359836836 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:1350",
            "value": 2.349391983079686,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.349359049249748 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:16",
            "value": 0.1556369364803121,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.1556195809963328 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:16384",
            "value": 26.322912920809063,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 26.322812112090034 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:256",
            "value": 0.546778155557575,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5467717653947235 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:8192",
            "value": 13.228009628087761,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 13.226801019441963 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:1350",
            "value": 0.25542689499923615,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.25541014372554816 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:16",
            "value": 0.10176659150254491,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.10175284979196277 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:16384",
            "value": 1.5443366031079817,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.5441475146038022 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:256",
            "value": 0.10953122862960403,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.10949958617134573 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:8192",
            "value": 0.81469679982266,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.8146858622864778 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:1350",
            "value": 0.5578501664198195,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5577686127434393 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:16",
            "value": 0.12684381020868138,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.12682872546937907 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:16384",
            "value": 4.600887206612423,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4.600889223140693 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:256",
            "value": 0.21329635259514823,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.21324138564632084 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:8192",
            "value": 2.3643919924255403,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.364200916407434 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:1350",
            "value": 0.7205574976195972,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.7205011400190959 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:16",
            "value": 0.1669821666473252,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.1669805838615071 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:16384",
            "value": 6.272611411949528,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.27254298500701 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:256",
            "value": 0.2498752513541057,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.24981499977616917 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:8192",
            "value": 3.226213795660792,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.2257122427228713 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:1350",
            "value": 41.46303842715956,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 41.46257044980349 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:16",
            "value": 1.3654621732347556,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.3654631876707697 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:16384",
            "value": 492.38361052630364,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 492.3434666666613 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:256",
            "value": 8.580801658984257,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 8.580082949307402 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:8192",
            "value": 246.56786994723748,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 246.56640773288007 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:1350",
            "value": 0.8289249607964755,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.828920689982863 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:16",
            "value": 0.27232528841291037,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.27227240116087 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:16384",
            "value": 6.3815621368404924,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.380860681951764 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:256",
            "value": 0.3570228006287774,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.3570178837479307 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:8192",
            "value": 3.3301887920379034,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.33014923311498 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockDecrypt<128>/threads:1",
            "value": 0.01363151335262341,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.01362975333053302 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockDecrypt<256>/threads:1",
            "value": 0.01799979440648931,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.017997561550441687 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockDecryptSetup<128>/threads:1",
            "value": 0.020133750492404824,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.020132013171317437 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockDecryptSetup<256>/threads:1",
            "value": 0.022334363180908364,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.02233143837283104 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockEncrypt<128>/threads:1",
            "value": 0.013643338337923847,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.013641031866583308 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockEncrypt<256>/threads:1",
            "value": 0.0179996200168155,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.017996650804058278 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockEncryptSetup<128>/threads:1",
            "value": 0.016311315657568777,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.0163097213711037 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockEncryptSetup<256>/threads:1",
            "value": 0.018421316194525417,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.018418598234068 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedBase64/threads:1",
            "value": 5.379324745632996,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 5.379275407947683 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedCurve25519ArbitraryPointMultiply/threads:1",
            "value": 36.76327160494552,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 36.76303940110247 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedCurve25519BasePointMultiply/threads:1",
            "value": 22.106765262657603,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 22.104120523740104 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDH/p224/threads:1",
            "value": 331.289130023584,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 331.2853262411413 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDH/p256/threads:1",
            "value": 52.47200337456456,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 52.46556205475207 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDH/p384/threads:1",
            "value": 895.1082371795886,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 895.0020512820892 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDH/p521/threads:1",
            "value": 2060.9009558816806,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2060.8875588241 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSASign/p224/threads:1",
            "value": 181.28482664942075,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 181.2689974126763 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSASign/p256/threads:1",
            "value": 17.136910261123692,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 17.13582971681147 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSASign/p384/threads:1",
            "value": 493.4129683098351,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 493.408397887322 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSASign/p521/threads:1",
            "value": 1152.436204917973,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1152.339147541018 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSAVerify/p224/threads:1",
            "value": 181.07242257217916,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 181.05253412073583 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSAVerify/p256/threads:1",
            "value": 48.16613650466967,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 48.16316408135288 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSAVerify/p384/threads:1",
            "value": 503.6016906474787,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 503.59645323740784 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSAVerify/p521/threads:1",
            "value": 1167.3438739496721,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1167.2836722689149 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedEd25519/threads:1",
            "value": 22.95704543217898,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 22.953683450877058 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedEd25519Sign/threads:1",
            "value": 23.10106245879975,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 23.101071028345615 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedEd25519Verify/threads:1",
            "value": 42.289505244219704,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 42.28438028167393 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHRSSDecap/threads:1",
            "value": 22.812043612695803,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 22.806491781939936 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHRSSEncap/threads:1",
            "value": 7.733268723441409,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7.732037032950618 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHRSSGenerate/threads:1",
            "value": 106.9807118901895,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 106.96534908537258 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:1350/threads:1",
            "value": 2.393115784797825,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.3930848268440292 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:16/threads:1",
            "value": 0.23202208823058199,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.23198344870687185 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:16384/threads:1",
            "value": 27.728263417519532,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 27.728026243095954 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:256/threads:1",
            "value": 0.44980119483694225,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.44978313419380744 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:8192/threads:1",
            "value": 13.844068521635892,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 13.84356926428388 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:1350/threads:1",
            "value": 0.7329519778745904,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.7329021538719546 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:16/threads:1",
            "value": 0.05175557690300846,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.05174626967769844 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:16384/threads:1",
            "value": 8.484791295386904,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 8.484048433048208 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:256/threads:1",
            "value": 0.17166635176079073,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.1716648115404796 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:8192/threads:1",
            "value": 4.263119249855026,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4.262402167625883 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:1350/threads:1",
            "value": 0.7993621768876724,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.7993542211610861 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:16/threads:1",
            "value": 0.05413201780878981,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.05412533237097597 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:16384/threads:1",
            "value": 9.070214211549837,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 9.069511226476756 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:256/threads:1",
            "value": 0.19864209663744237,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.1986407503085215 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:8192/threads:1",
            "value": 4.591327082238696,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4.59118910930043 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:1350/threads:1",
            "value": 2.3292235057843005,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.3291906587657927 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:16/threads:1",
            "value": 0.23731614324566008,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.23723920955242278 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:16384/threads:1",
            "value": 26.904716647455473,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 26.904417531725123 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:256/threads:1",
            "value": 0.655352611940365,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.6553458038753616 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:8192/threads:1",
            "value": 13.562423214802164,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 13.56136953783416 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHashToCurve/hash-to-curve P256_XMD:SHA-256_SSWU_RO_/threads:1",
            "value": 22.809920267407463,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 22.80708446111304 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHashToCurve/hash-to-curve P384_XMD:SHA-384_SSWU_RO_/threads:1",
            "value": 65.98084336782036,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 65.97107431797367 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHashToCurve/hash-to-scalar P384_XMD:SHA-512/threads:1",
            "value": 1.1566311603758779,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.1566306988625017 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAKeyGen/ml_dsa_44/threads:1",
            "value": 59.69774914674162,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 59.69251919792933 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAKeyGen/ml_dsa_65/threads:1",
            "value": 109.98822895358475,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 109.98704720692585 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAKeyGen/ml_dsa_87/threads:1",
            "value": 154.17893281940826,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 154.15399008810158 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAParsePubKey/ml_dsa_44/threads:1",
            "value": 3.831592473323612,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.831547608001228 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAParsePubKey/ml_dsa_65/threads:1",
            "value": 5.680709892612413,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 5.680658070288997 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAParsePubKey/ml_dsa_87/threads:1",
            "value": 7.5649757323534175,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7.56404604907793 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSASign/ml_dsa_44/threads:1",
            "value": 203.45752137927775,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 203.42521655171868 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSASign/ml_dsa_65/threads:1",
            "value": 327.89902820520814,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 327.89552051282885 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSASign/ml_dsa_87/threads:1",
            "value": 389.3691420118905,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 389.36514497042344 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerify/ml_dsa_44/threads:1",
            "value": 49.38510515173873,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 49.384689484824996 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerify/ml_dsa_65/threads:1",
            "value": 78.5302526610719,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 78.5203249299681 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerify/ml_dsa_87/threads:1",
            "value": 130.4252414113153,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 130.40478087281795 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerifyBadSignature/ml_dsa_44/threads:1",
            "value": 49.40326453599667,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 49.39119137466307 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerifyBadSignature/ml_dsa_65/threads:1",
            "value": 78.49072349973446,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 78.48368480090771 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerifyBadSignature/ml_dsa_87/threads:1",
            "value": 130.5752950513734,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 130.50549766571945 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024DecapOnly/threads:1",
            "value": 35.222292148776454,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 35.22624836421245 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024EncapOnly/threads:1",
            "value": 24.294037644090153,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24.284763332161752 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024KeyGenDecap/threads:1",
            "value": 72.37047392877358,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 72.35422715539269 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024KeyGenOnly/threads:1",
            "value": 37.76547778077198,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 37.76336277942546 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024ParseEncap/threads:1",
            "value": 39.26915965192857,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 39.271997755217804 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024ParseOnly/threads:1",
            "value": 15.85193210376821,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 15.846284485966228 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024PrivateKeyFromSeedOnly/threads:1",
            "value": 37.96364134601828,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 37.97921513830216 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768DecapOnly/threads:1",
            "value": 27.68597802838213,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 27.68944437765608 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768EncapOnly/threads:1",
            "value": 19.254907978053055,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 19.261060110149312 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768KeyGenDecap/threads:1",
            "value": 53.22458751902956,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 53.216992770167295 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768KeyGenOnly/threads:1",
            "value": 26.336789325306373,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 26.33289795150698 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768ParseEncap/threads:1",
            "value": 29.587861011038584,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 29.598937804021748 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768ParseOnly/threads:1",
            "value": 11.120628405892322,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 11.12515375471465 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768PrivateKeyFromSeedOnly/threads:1",
            "value": 26.507556422434263,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 26.52974157898826 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndSign/2048/threads:1",
            "value": 663.1545118483662,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 663.1034928912271 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndSign/3072/threads:1",
            "value": 1934.6686805555971,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1934.6439583335002 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndSign/4096/threads:1",
            "value": 4301.010424242259,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4300.615545454974 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndVerify/2048/threads:1",
            "value": 16.760947494032283,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 16.760749641999993 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndVerify/3072/threads:1",
            "value": 35.42521575603305,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 35.42469275730195 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndVerify/4096/threads:1",
            "value": 61.32446760068174,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 61.31872285464928 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAKeyGen/2048",
            "value": 53489.29600000929,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 53485.133666659596 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAKeyGen/3072",
            "value": 213903.77400001624,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 213901.5839999843 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAKeyGen/4096",
            "value": 326546.8699999587,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 326503.60299999197 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAParsePrivateKey/2048/threads:1",
            "value": 92.08286184210797,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 92.08146776315978 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAParsePrivateKey/3072/threads:1",
            "value": 189.96797834912846,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 189.93254397833863 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAParsePrivateKey/4096/threads:1",
            "value": 317.5270790067707,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 317.4962347629605 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSASign/2048/threads:1",
            "value": 563.5641733871096,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 563.517604838637 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSASign/3072/threads:1",
            "value": 1734.7955250002658,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1734.7691250000353 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSASign/4096/threads:1",
            "value": 3946.6430277773015,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3946.4229722220916 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAVerify/2048/threads:1",
            "value": 14.881429729150076,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 14.881283322669475 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAVerify/3072/threads:1",
            "value": 32.0125079945142,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 32.01012882594848 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAVerify/4096/threads:1",
            "value": 55.621729944407505,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 55.61297617156155 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:1350/threads:1",
            "value": 0.7508405940383115,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.7508333903359288 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:16/threads:1",
            "value": 0.5495538097405203,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5495473725114917 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:16384/threads:1",
            "value": 2.663209564902929,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.6629903628657563 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:256/threads:1",
            "value": 0.5765709437613903,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5764834949856895 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:8192/threads:1",
            "value": 1.5942792282402416,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.594260525806785 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSLHDSA/threads:1",
            "value": 31799.421000002327,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 31799.19675000065 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSLHDSASign/threads:1",
            "value": 241018.6540000154,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 241014.84100000194 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSLHDSAVerify/threads:1",
            "value": 229.73935037594188,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 229.69521654128852 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSPAKE2/threads:1",
            "value": 104.24446269781703,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 104.24323285607404 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedScrypt/(N = 1024, r = 8, p = 16)/threads:1",
            "value": 24782.32319999734,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24782.419799998934 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedScrypt/(N = 16384, r = 8, p = 1)/threads:1",
            "value": 24775.79466667142,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24775.547500003842 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSelfTest",
            "value": 4057.3114705867897,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4056.0667058838703 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/1350/threads:1",
            "value": 0.4733700566499026,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.4733272992444399 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/16/threads:1",
            "value": 0.019087439947429213,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.019086040984717632 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/16384/threads:1",
            "value": 5.602816669332063,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 5.601568788992822 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/256/threads:1",
            "value": 0.10093691873183176,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.10093616995208342 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/8192/threads:1",
            "value": 2.8074953808548173,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.8074303921764865 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedTrustTokenKeyGen/SpeedTrustTokenKeyGen experiment_v1",
            "value": 900.9831225805628,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 900.9740322580324 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedTrustTokenKeyGen/SpeedTrustTokenKeyGen experiment_v2_pmb",
            "value": 900.8375769234625,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 900.7503461537552 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedTrustTokenKeyGen/SpeedTrustTokenKeyGen experiment_v2_voprf",
            "value": 464.0724999999308,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 464.0146390728613 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedX509/threads:1",
            "value": 2.965469496523929,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.964980556140638 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginIssueBatch1",
            "value": 560.8437309238655,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 560.7884457830949 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginIssueBatch10",
            "value": 5604.079880001791,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 5602.633319999768 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginRedeemBatch1",
            "value": 0.10068264666059781,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.1006821576439264 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginRedeemBatch10",
            "value": 0.10063569987271913,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.10061923643103121 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1FinishIssueBatch1",
            "value": 6339.323045458721,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6338.486818182529 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1FinishIssueBatch10",
            "value": 22669.28016666725,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 22667.29616666415 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1IssueBatch1",
            "value": 5414.431500001298,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 5413.713884614971 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1IssueBatch10",
            "value": 19382.031142859953,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 19380.062142861985 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1RedeemBatch1",
            "value": 1538.8392197805942,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1538.8171758240537 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1RedeemBatch10",
            "value": 1539.6659010988076,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1539.5417692303993 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginIssueBatch1",
            "value": 560.3832329315773,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 560.3756224899366 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginIssueBatch10",
            "value": 5601.9456000012715,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 5600.969239999358 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginRedeemBatch1",
            "value": 0.09453967460019379,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.09453863022897144 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginRedeemBatch10",
            "value": 0.09457083338296397,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.09456367004023689 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbFinishIssueBatch1",
            "value": 6308.814318182179,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6308.171727273371 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbFinishIssueBatch10",
            "value": 22631.331499998927,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 22630.81499999468 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbIssueBatch1",
            "value": 5416.281153846223,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 5416.2183461538425 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbIssueBatch10",
            "value": 19376.34085714178,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 19375.127714283735 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbRedeemBatch1",
            "value": 1538.712230769561,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1538.550065934057 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbRedeemBatch10",
            "value": 1538.7019120880523,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1538.562285714351 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginIssueBatch1",
            "value": 560.0900080000883,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 560.0871080000616 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginIssueBatch10",
            "value": 5597.151679999115,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 5596.015040000566 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginRedeemBatch1",
            "value": 0.08733270605446827,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.08733148822272756 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginRedeemBatch10",
            "value": 0.0883796557763496,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.08837837338465532 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfFinishIssueBatch1",
            "value": 2183.98048437507,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2183.942421875029 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfFinishIssueBatch10",
            "value": 8086.70929412154,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 8085.09729411606 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfIssueBatch1",
            "value": 2110.531787878651,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2110.5006363639363 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfIssueBatch10",
            "value": 8019.395705882543,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 8018.02982352944 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfRedeemBatch1",
            "value": 498.1297188612117,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 498.1220035587398 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfRedeemBatch10",
            "value": 498.2836868328003,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 498.2445338078264 us\nthreads: 1"
          }
        ]
      }
    ]
  }
}