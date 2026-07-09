window.BENCHMARK_DATA = {
  "lastUpdate": 1783743895502,
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
      }
    ]
  }
}
