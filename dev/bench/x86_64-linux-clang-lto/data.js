window.BENCHMARK_DATA = {
  "lastUpdate": 1788447289500,
  "repoUrl": "https://github.com/divVerent/boringssl",
  "entries": {
    "Benchmark on x8-64 Linux Clang with LTO": [
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
          "id": "ba00a0383caeb1eeeefdd4a21b736ff2da664962",
          "message": "Fix benchmark names.\n\nChange-Id: Iec1325b8ddc605527d2c609ca0a0e6ae87a5d58a",
          "timestamp": "2026-09-03T11:42:58+02:00",
          "tree_id": "f6800f605fb1f3bfa9f615c13b8ac944eac348d3",
          "url": "https://github.com/divVerent/boringssl/commit/ba00a0383caeb1eeeefdd4a21b736ff2da664962"
        },
        "date": 1788429461984,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:1350",
            "value": 1.644429834559481,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.644341809282978 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 1.6473928331990524,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.647383623290331 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:16",
            "value": 0.38506063635473164,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.38505915545516844 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.3839639448673997,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.38392453302276736 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:16384",
            "value": 9.460413449443196,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 9.459609385583375 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 9.632894260114377,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 9.632360244166772 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 9.795925888934189,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 9.795664952058674 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 9.45271999806925,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 9.451246768281553 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:256",
            "value": 1.0800298803682575,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.0799587486429756 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 1.0807626489410314,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.0807590467784305 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:8192",
            "value": 5.221962704025322,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 5.221726354405641 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 5.32118066240999,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 5.320617695203565 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 5.375250444735011,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 5.37477763282816 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 5.221836177019826,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 5.221814529460794 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:1350",
            "value": 1.7405633766732298,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.740376956505991 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 1.7293575194173916,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.7293023820884987 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:16",
            "value": 0.43263710438967024,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.43263692346383964 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.43607068100018553,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.43605034820089433 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:16384",
            "value": 10.341767639005685,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 10.341365732940204 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 10.535723726017682,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 10.534678592442246 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 10.674974406616014,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 10.673016243106307 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 10.330338285231473,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 10.33030958191859 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:256",
            "value": 1.104224483616703,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.1041266231582338 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 1.1022157928358236,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.1022126665396665 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:8192",
            "value": 5.686229052060255,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 5.686196508190776 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 5.7713511634757895,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 5.770465154639626 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 5.826411302798137,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 5.826105978584239 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 5.677907887883331,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 5.677373486997194 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:1350",
            "value": 1.3879364889279786,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.3878637337711206 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 1.381372428098779,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.3811979256032214 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:16",
            "value": 0.09039985131338328,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.09039145093433437 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.09521665774432103,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.09521188655834834 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:16384",
            "value": 15.54072348724356,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.540809403332663 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 15.709080740855082,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.709067751762706 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 15.884918421906395,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.883334089437042 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 15.539890535832086,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.536788681042154 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:256",
            "value": 0.31832339323867054,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.31828633308584736 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.3223980894338666,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.3223841902211725 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:8192",
            "value": 7.796502660424207,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.795745790979213 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 7.894604081139578,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.893658214604517 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 7.988256121370904,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.988260636136644 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 7.804343224726902,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.803135585118684 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:1350",
            "value": 1.3765947163548766,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.3765908625664272 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 1.3819253460959664,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.3818703936050796 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:16",
            "value": 0.09085718503314365,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.09084856225660391 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.09516325722140125,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.09515034157798713 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:16384",
            "value": 15.532607987386424,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.53107155368912 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 15.716193028836027,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.715911939104481 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 15.881040492395234,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.88012050534573 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 15.52096882437271,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.520292797083986 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:256",
            "value": 0.3184635215206243,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.31839828599967396 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.3238913221610831,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.3238592676172702 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:8192",
            "value": 7.8147080814482335,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.814678253259812 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 7.892301062190508,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.891460796238427 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 7.969237924865884,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.969032647588118 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 7.814882587542222,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.814837560821417 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:1350",
            "value": 1.377637831003352,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.3775991220061852 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 1.3803166044645085,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.3800274487710638 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:16",
            "value": 0.09217707485752755,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.092168411928269 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.09684707457278867,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.0968396202456855 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:16384",
            "value": 15.522321923257795,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.520682773442426 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 15.7362151797122,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.735701781133383 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 15.886489306539394,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.885658943614436 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 15.538578087839985,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.537342555891367 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:256",
            "value": 0.32005764991291036,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.31997677591619017 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.32424551929815637,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.32420793435924955 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:8192",
            "value": 7.802790281848781,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.80277468230786 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 7.900373541012177,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.899910810592543 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 7.968957547581361,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.96761927522042 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 7.809797390816769,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.80870479675477 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:1350",
            "value": 0.9679465717750848,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.9679082354336938 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 0.972837583599744,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.9728345608054807 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:16",
            "value": 0.17777910857058601,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.17776863637269516 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.181256188532875,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.18125542888616386 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:16384",
            "value": 9.654059462912986,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 9.65328949439053 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 9.888197693157824,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 9.887647728416583 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 10.180264129416624,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 10.179027947734802 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 9.660679852215383,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 9.659000541872667 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:256",
            "value": 0.3229011580267909,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.3228992526630437 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.32770321338962194,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.32767368241671024 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:8192",
            "value": 4.9524668509681895,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 4.951651269163021 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 5.046902177886136,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 5.0463716247970485 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 5.152474896276056,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 5.152322173205586 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 4.935840922967313,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 4.935691157017437 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:1350",
            "value": 1.1017698515015704,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.101728876482227 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 1.1081929547342906,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.1080928715690062 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:16",
            "value": 0.0968287079001819,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.09682450605763797 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.1009134016577857,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.10090828093808975 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:16384",
            "value": 12.068373119014534,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.067385841308344 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 12.21783872573739,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.215636199598926 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 12.484961562978722,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.484881438038327 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 12.077984384877055,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.077449804019594 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:256",
            "value": 0.274384155590124,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.2743521984631081 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.27970310288162387,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.2797025343800977 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:8192",
            "value": 6.0810238449610825,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.080827131781935 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 6.151199692247021,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.150478520284609 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 6.276937044142512,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.276484868843587 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 6.081041640469126,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.080563438830797 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:1350",
            "value": 0.14510270993047264,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.14509697974618946 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 0.1460525991336706,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.1460522083547747 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:16",
            "value": 0.05613741166146954,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.056132196390470436 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.06047807201071057,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.06047771049269206 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:16384",
            "value": 0.8504734413634638,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.8503676969265748 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 1.0178859655582624,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.0176575916010324 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 1.2456093367808792,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.245400263615152 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 0.8633300824294269,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.8632897440345321 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:256",
            "value": 0.06068584080621311,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.060685590356078026 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.06974056096807922,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.06973862616705757 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:8192",
            "value": 0.4525235857051192,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.4525073315509423 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 0.5232332508765863,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.523218083522028 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 0.6346457824819354,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.6346444576449349 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 0.44864665460326725,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.4486072733692219 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:1350",
            "value": 0.3206376827458369,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.32055421124307004 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 0.31816599928117173,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.3181316455996455 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:16",
            "value": 0.1213090969075149,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.121300017530568 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.12454163539257317,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.12454048786270018 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:16384",
            "value": 2.119087118182412,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.1187707905488864 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 2.3469735224474846,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.346410366188468 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 2.559732742134215,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.559259162714819 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 2.1270385364643962,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.1270269710465683 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:256",
            "value": 0.1579534982783543,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.15795307955436005 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.1623179513892689,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.16230224795953532 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:8192",
            "value": 1.1123250230394839,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.1122717569216745 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 1.2172063949491134,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.2171464149527205 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 1.3088040617050587,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.3087990595069159 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 1.1156046349913886,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.1155986104144353 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:1350",
            "value": 0.15763373731680216,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.15760843662518284 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 0.15356487571261548,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.15356084115141988 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:16",
            "value": 0.058049808491568856,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.058041210613058156 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.06243836166146469,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.0624311242290968 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:16384",
            "value": 0.9165975726591794,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.9165751441798431 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 1.11051809880212,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.1103485341283015 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 1.3376715960580494,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.337632329256911 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 0.9328839275480517,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.9328485921394402 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:256",
            "value": 0.06363738402977852,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.06362375776582885 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.07124087640956009,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.07123513187415918 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:8192",
            "value": 0.4800836449385416,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.479996662434688 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 0.586646752815095,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5866439947546205 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 0.6837988946045206,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.6836923132623611 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 0.48317166788568827,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.48314967085864435 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:1350",
            "value": 1.692074365696414,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.6920186884456307 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 1.6916590689818474,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.6915391168768756 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:16",
            "value": 0.387535848175766,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.3875328342477225 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.3851874528838889,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.38515551280635685 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:16384",
            "value": 9.977349538206834,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 9.976912412462905 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 10.167238789701361,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 10.167003892462525 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 10.332991045096348,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 10.332266961649777 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 9.948048277267251,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 9.946456906187843 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:256",
            "value": 1.0928188961397465,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.092581009838627 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 1.0918480846118686,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.0917505894817285 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:8192",
            "value": 5.46458448640985,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 5.464403328347144 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 5.578494780235671,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 5.578450026691134 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 5.652710888863016,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 5.651753487434314 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 5.496940190720201,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 5.496418107293124 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:1350",
            "value": 1.010229128861735,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.0101167735533747 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 1.0152462175439498,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.0150680383916193 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:16",
            "value": 0.18085159016132105,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.18083972264005058 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.1847211515854719,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.18470674327714137 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:16384",
            "value": 10.107232558138787,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 10.107122813334474 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 10.34846460597104,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 10.347312058234523 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 10.65294559079712,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 10.652375543008246 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 10.123309400825887,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 10.122724225206722 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:256",
            "value": 0.32911315739162833,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.329051886934857 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.3337158243254243,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.33371655800496525 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:8192",
            "value": 5.151777307834444,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 5.151395576101477 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 5.272400075780471,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 5.271945139115369 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 5.403109110927482,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 5.402269942196306 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 5.170308360221922,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 5.17007999413317 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:1350",
            "value": 1.400569002456912,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.4005324087298345 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 1.4069789949250544,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.40695027199193 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:16",
            "value": 0.11433923311573202,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.11432267374432988 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.11826101421849297,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.11825665978108586 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:16384",
            "value": 15.486056248031222,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.484466708742627 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 15.664546812267199,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.663538461539229 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 15.948755037372857,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.9475173870688 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 15.496691074437246,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.496632477026386 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:256",
            "value": 0.34056408813287337,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.34050265427073545 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.34569881024989463,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.34569648561715327 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:8192",
            "value": 7.7927941456842404,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.7908534434809456 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 7.896903337633742,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.896513906803546 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 8.000994862173105,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 8.000969947807384 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 7.8018343197646,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.800431003728896 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:1350",
            "value": 0.16448055485226803,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.16446744220357393 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 0.16466107918372158,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.16464773557404705 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:16",
            "value": 0.05949801593444416,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.05949778128286535 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.0646842375465568,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.06468333097330926 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:16384",
            "value": 0.9947626819267246,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.9947046926483256 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 1.1858269230770742,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.1858233629502837 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 1.4512395543789398,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.4511573792189165 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 0.9928701280483953,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.9928084584093544 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:256",
            "value": 0.0675195067373686,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.06751022829050657 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.07859769124284627,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.0785894605276252 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:8192",
            "value": 0.5171677555807861,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5171643800354668 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 0.6273524487941007,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.6272268785115072 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 0.7360425587344716,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.7359221220560115 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 0.5130714685351665,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.513011464352018 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:1350",
            "value": 0.35933652870690513,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.3593214582621007 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 0.36465605782474075,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.36465609377506936 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:16",
            "value": 0.13204206466280372,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.1320422642227002 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.14326414867757695,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.14326397566062402 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:16384",
            "value": 2.5309162416291686,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.530847836165197 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 2.7709049673286614,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.7707465842538963 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 3.0017434664057627,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.0011988418767714 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 2.536709264347229,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.536354774742123 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:256",
            "value": 0.179173284061482,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.17909251872087723 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.1786888896967046,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.17868838071685522 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:8192",
            "value": 1.317298906832296,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.3172418886391353 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 1.4333083224834882,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.4329599016926566 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 1.5368579218303604,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.5368159031167936 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 1.3205802072386328,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.3205240385908448 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:1350",
            "value": 0.6549680600183831,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.6549661794276913 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 0.6590984877599846,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.658857503556544 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:16",
            "value": 0.1419347743992963,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.1419254154277961 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.14494007589159522,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.14493442182677863 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:16384",
            "value": 6.252895775820871,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.252137799319337 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 10.758831256260716,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 10.75750856793201 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 10.98083098906094,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 10.980822281757103 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 6.234819070745258,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.233870454399646 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:256",
            "value": 0.22791280029714128,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.2279114684811098 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.2316748670714499,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.2316512445223457 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:8192",
            "value": 3.1766240787832087,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.176425487511359 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 5.383620135038962,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 5.383209447219551 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 5.501929961962,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 5.501029368985411 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 3.1776113960210677,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.1774165503587617 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:1350",
            "value": 35.6168521203367,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 35.55340105109769 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 35.53767602790513,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 35.53714647576273 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:16",
            "value": 1.3596215734667605,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.3593967984360305 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 1.3556494972703732,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.355553397012423 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:16384",
            "value": 413.9030632910614,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 413.87251898734496 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 428.3211181436298,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 428.2890126581848 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 414.1998185651575,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 414.1890738396469 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 412.9758361344813,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 412.89012394959855 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:256",
            "value": 8.015672028488172,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 8.015660527176736 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 8.013514171034744,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 8.01323324868834 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:8192",
            "value": 207.2333686046847,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 207.2322895348941 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 207.71441120503883,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 207.71386257924942 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 208.06462420386188,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 208.04211783439456 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 207.57231144064968,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 207.5617690677014 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:1350",
            "value": 0.7247157373788973,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.7245929275201356 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 0.7246943072079314,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.7246718472469955 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:16",
            "value": 0.20801846017501555,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.20800465903689386 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.21169726234955016,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.21168958941718125 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:16384",
            "value": 6.306765041691742,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.30616202693962 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 10.864058429435122,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 10.8634237781403 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 10.988003928610887,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 10.98790470311154 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 6.296040481541139,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.295679935792406 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:256",
            "value": 0.2950525234061053,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.29501996410405185 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.2978320827428262,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.29782638284800345 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:8192",
            "value": 3.247548396155002,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.247317085660152 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 5.4511553964030774,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 5.451118421052224 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 5.57885382817386,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 5.57882731885328 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 3.250315960742656,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.2497781122750053 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:1350",
            "value": 1.44351584768593,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.4435050668470768 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 1.4414116926391332,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.4413662876693176 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:16",
            "value": 0.1667954899282031,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.16679448691485377 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.16690077603253506,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.16686787719615162 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:16384",
            "value": 15.547042737069418,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.545969949253617 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 15.723384885764744,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.722100495288043 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 15.804067822579503,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.803369677423191 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 15.569942329051305,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.569422576545566 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:256",
            "value": 0.4117731902945788,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.41175550980675285 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.4100757763114811,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.4100464263474901 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:8192",
            "value": 7.878809251560727,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.877771269791033 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 7.953612622605394,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.952619275051889 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 8.004031982291972,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 8.004024605103908 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 7.900145643219363,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.899579786804402 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:1350",
            "value": 1.506144455372189,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.5059858310791314 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 1.5038419925719895,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.5036666410848933 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:16",
            "value": 0.1633206692133954,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.16330274444676193 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.16179401813377287,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.1617737032863706 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:16384",
            "value": 16.39410716073858,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 16.39403071273522 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 16.551136240704118,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 16.54983198106941 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 16.680222571334145,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 16.677838230300356 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 16.439278335002385,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 16.43867168171302 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:256",
            "value": 0.4191686436910973,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.4191486805122621 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.41741222529211675,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.4173736811902081 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:8192",
            "value": 8.325304753029533,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 8.32509391679891 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 8.392148231977625,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 8.391696532285208 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 8.418103192405976,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 8.417551596201774 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 8.295113004677379,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 8.294112239692817 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:1350",
            "value": 1.3748583040209712,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.3745869080817914 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 1.3760301917225803,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.3759269406391093 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:16",
            "value": 0.08873951002441308,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.08873562520016984 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.08790828107967762,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.08790092556351306 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:16384",
            "value": 15.539882264449322,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.539244734758242 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 15.648078495579421,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.646197610614553 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 15.883910879071859,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.88357641249651 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 15.616374054403035,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.615262433607157 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:256",
            "value": 0.3166654858070122,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.3166034423291947 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.3150602097277618,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.31502340594793987 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:8192",
            "value": 7.829433255813266,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.82897888372148 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 7.8580661554784355,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.857647932131625 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 7.95580295004237,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.955504074647432 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 7.806287509941393,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.805881861575156 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:1350",
            "value": 1.3754931155110426,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.3754909186314186 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 1.3734049758987843,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.3732455479681218 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:16",
            "value": 0.08883532628608332,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.08882216583212697 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.0877612030250263,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.08775079498693919 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:16384",
            "value": 15.533005549392598,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.53219771682355 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 15.651151005106481,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.650681397573871 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 15.877090296937709,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.875968846338282 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 15.530921998737913,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.529900696861915 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:256",
            "value": 0.3154486876335216,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.31544050742837915 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.31527208096520065,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.3152583852591096 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:8192",
            "value": 7.801322143370351,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.801277170879797 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 7.864341979614759,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.863689330640646 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 7.950006795800148,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.949542646697212 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 7.810522095706394,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.810470857549221 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:1350",
            "value": 1.3726054421767788,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.3725555275608734 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 1.3739178617535164,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.3739127189043403 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:16",
            "value": 0.08924485096612286,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.089244153755607 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.08820051240095847,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.0881999906196387 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:16384",
            "value": 15.535231452113104,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.535178820550078 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 15.646755108559258,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.643830779054728 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 15.881541504420289,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.881566460170166 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 15.53623207487469,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.53614950824885 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:256",
            "value": 0.3163008912136555,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.3162870354225761 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.31514780119156816,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.3151351197814239 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:8192",
            "value": 7.908253981526689,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.90793247332318 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 7.86938157788923,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.868018101721252 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 8.003020682942632,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 8.001504785464345 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 7.7991645947914225,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.798758944936847 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:1350",
            "value": 0.9689199895095371,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.9689116960103951 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 0.9684502240026731,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.9684479101876082 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:16",
            "value": 0.17798626932942616,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.17796951562500424 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.17709655252848544,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.17707992069831863 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:16384",
            "value": 9.66014518993658,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 9.6586393685246 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 9.854331738516125,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 9.853961925865393 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 10.13770818228659,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 10.137690108754137 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 9.651625288277923,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 9.6513658325623 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:256",
            "value": 0.32375746736540806,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.32375502554008756 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.32140027659985304,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.32137362765205096 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:8192",
            "value": 4.936955434836859,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 4.936935692369597 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 5.025501254545327,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 5.024839341495572 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 5.153634050363693,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 5.152270015738813 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 4.93423570099225,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 4.933924543488008 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:1350",
            "value": 1.3899530323399012,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.389904493666598 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 1.3898922964559774,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.3895871645043099 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:16",
            "value": 0.09343226054635699,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.09341923294097479 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.09253974551702955,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.09253454155530548 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:16384",
            "value": 15.586962138087816,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.585978603250476 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 15.700586173784137,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.699241318612014 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 15.993513999668423,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.99177608660089 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 15.57013250238495,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.569741981585384 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:256",
            "value": 0.3248073855043351,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.32477728404028516 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.3242582869087465,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.32425816296107113 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:8192",
            "value": 7.8352015668943595,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.83517742064989 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 7.895524539135825,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.894236456984892 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 7.991899836934995,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.991842111700447 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 7.830213075447825,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.8295472346546955 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:1350",
            "value": 0.14837997142731077,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.1483494899041014 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 0.1449659084959292,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.14495363770841166 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:16",
            "value": 0.05456976433714709,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.05456754543765467 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.05345338231046641,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.05343981271060823 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:16384",
            "value": 0.8190405797821938,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.8190389619009883 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 1.038176505250298,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.0381310737396343 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 1.2303650240961361,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.2302518229757131 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 0.8183157101126843,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.8182460520663897 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:256",
            "value": 0.06333345523346173,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.06333292265999413 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.06220540900870826,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.062201399513086494 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:8192",
            "value": 0.4372637841664123,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.4372352859711658 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 0.5441411344348275,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5440838585347094 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 0.6204649185265065,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.6204295747379951 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 0.43391194613944695,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.43387337932251546 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:1350",
            "value": 0.3309429074955743,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.33089848836114205 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 0.33139605062282385,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.3313689203977246 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:16",
            "value": 0.08553710384559012,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.0855189119955875 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.08518126065561765,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.08516336406849492 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:16384",
            "value": 2.469949350722554,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.4693372545681593 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 2.5223349227566803,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.522237925095888 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 2.6220683634994963,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.621780204797073 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 2.4750031964970245,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.4745834361080616 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:256",
            "value": 0.13885677004376665,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.1388499277446296 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.13825789820419876,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.13825787356960945 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:8192",
            "value": 1.3203476460097323,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.3202887962668792 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 1.297197616124858,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.2970812213169434 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 1.337584759615562,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.337374450549185 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 1.2796588925270018,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.279541419307625 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:1350",
            "value": 0.1607409617979564,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.16073612805184184 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 0.1565163896270057,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.1564990073921662 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:16",
            "value": 0.05843658503133096,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.05843709889416014 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.05642892743953511,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.0564189648578986 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:16384",
            "value": 0.8774842560352294,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.877441779388505 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 1.152547613488856,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.1524774189027347 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 1.3279695298483154,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.3278704723545656 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 0.8877539304199648,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.8876383880615812 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:256",
            "value": 0.06730276390316439,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.06730165232518645 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.06569162376867009,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.06569122562898569 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:8192",
            "value": 0.4719571712668048,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.47192513097332256 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 0.5956162814603145,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5956005194539321 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 0.6682792932891732,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.6682214534293005 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 0.47303318591498406,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.473016686594657 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:1350",
            "value": 1.6889333145642884,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.6889316254351527 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 1.6887185952128654,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.6886711096584546 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:16",
            "value": 0.17512303449713923,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.17510125296099932 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.17370807973546268,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.1737038943675751 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:16384",
            "value": 18.50535760030525,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 18.501099265399567 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 18.66732904272612,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 18.665655987798196 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 18.769578962589403,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 18.766206903198206 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 18.501759011131096,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 18.499910737875947 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:256",
            "value": 0.4645901246890018,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.46454373758409584 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.46348431834491777,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.46345983862734136 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:8192",
            "value": 9.36462339528522,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 9.363948409657292 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 9.44358659942677,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 9.443047790583778 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 9.49376471158806,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 9.492372499509806 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 9.42855053064855,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 9.425561573764023 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:1350",
            "value": 1.0133951896953068,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.0133617127869303 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 1.011319163306173,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.011158764449252 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:16",
            "value": 0.180549793203507,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.18054915329456475 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.17978193980900925,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.179746065337063 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:16384",
            "value": 10.110563680463402,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 10.110151718442248 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 10.331343905011451,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 10.330383166224046 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 10.630987927675879,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 10.628355294498544 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 10.11435927186621,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 10.112218182757488 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:256",
            "value": 0.3301163941896189,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.33010174607438914 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.3282781636041917,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.3282615012859667 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:8192",
            "value": 5.152832569652104,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 5.152234028545935 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 5.262788657580675,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 5.262818301319915 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 5.3908166041007375,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 5.390044845510287 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 5.150600683852597,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 5.149993108889995 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:1350",
            "value": 1.6880068816021967,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.6879847572515287 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 1.7197156680437697,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.7197014893249645 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:16",
            "value": 0.11098769613518918,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.11098704948883138 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.11002056086821548,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.11001036035787608 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:16384",
            "value": 19.059160047896263,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 19.059143783673715 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 19.13265946843134,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 19.13182010944371 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 19.56143829530195,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 19.557942637846043 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 19.024645026283945,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 19.02459996107155 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:256",
            "value": 0.3898649312173105,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.389854582455781 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.38960143741569936,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.3895410008969235 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:8192",
            "value": 9.557068965515452,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 9.557113097569504 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 9.620484152948562,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 9.61922247214395 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 9.92566318137119,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 9.925138899899743 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 9.560559070433914,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 9.55849022317715 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:1350",
            "value": 0.172821458870964,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.17282151489656294 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 0.16794795597261392,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.1679395959883208 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:16",
            "value": 0.06139982040877423,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.06139237337227228 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.05963084254197424,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.05962619556281795 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:16384",
            "value": 0.9440200354983797,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.9439447215093821 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 1.2548936929141126,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.2547883928065544 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 1.4405407484346644,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.4405298967125115 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 0.94452914601456,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.9442918989027806 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:256",
            "value": 0.07124425922927155,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.07123307184459546 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.0691348380050463,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.06912833849851563 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:8192",
            "value": 0.5081223613191754,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.50810754016234 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 0.6496268953779974,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.6495701571159435 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 0.7237520134896054,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.7235903198907939 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 0.5001896786448455,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5001871478214517 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:1350",
            "value": 0.38282118976133156,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.3828132478531981 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 0.3821901634042947,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.38216895554612057 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:16",
            "value": 0.09678568783233095,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.09675326319708502 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.09780700523965193,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.0977922225046882 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:16384",
            "value": 2.982195650847212,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.9821912406529885 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 3.02900228762237,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.0285118554467276 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 3.133190126698035,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.133117867210809 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 2.974499819847942,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.9740332532645457 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:256",
            "value": 0.1542311971181534,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.15422495599410832 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.15340433735836984,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.15338159052105935 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:8192",
            "value": 1.5283500865472193,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.5283477474386937 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 1.5551994469270347,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.55505966530296 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 1.5994350816992524,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.5993723202609693 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 1.5294936288865633,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.5293014362267314 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:1350",
            "value": 0.6815327044593407,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.6815320572598165 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 0.6823617868048043,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.6821802312613635 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:16",
            "value": 0.139129637353338,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.1391293422764969 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.1381823974112859,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.1381739507961898 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:16384",
            "value": 6.266532924218061,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.266346418598301 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 10.672094382756084,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 10.671304321798964 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 10.901090495729566,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 10.90101447266145 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 6.26443396226131,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.264299375363349 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:256",
            "value": 0.2266281025005671,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.22661789270576332 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.2261873769692921,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.22617969108781072 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:8192",
            "value": 3.2126490318579606,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.2125412114867493 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 5.363585747866869,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 5.362854225890702 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 5.488236464468785,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 5.487965410779276 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 3.2048490448965934,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.204731902040721 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:1350",
            "value": 36.74927890505096,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 36.743250382846796 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 36.69244317331325,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 36.6903640285076 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:16",
            "value": 1.1812044030096716,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.1811605600973663 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 1.179868746239784,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.179789989171355 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:16384",
            "value": 435.336537777731,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 435.3099222222233 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 435.66529353230544,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 435.6103159203676 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 435.657611111032,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 435.6440711111039 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 435.42214285707814,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 435.3759196428696 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:256",
            "value": 7.609026113310399,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.6086528328301695 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 7.641745733383916,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.6408578057413745 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:8192",
            "value": 218.32954817709492,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 218.32856770827766 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 218.4326922222605,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 218.42303999998575 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 218.88272111109723,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 218.838391111142 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 218.33762360794717,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 218.31218151444122 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:1350",
            "value": 0.7661228009161392,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.7661040867209649 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 0.7661799158146045,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.7660082621766547 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:16",
            "value": 0.22209033571973236,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.22207259442475585 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.2222833176939535,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.2222696660410998 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:16384",
            "value": 6.347122548384358,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.346720483179889 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 10.744374534295984,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 10.74331251369639 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 10.982450692145637,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 10.980951321359695 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 6.348897352922927,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.348845090933803 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:256",
            "value": 0.3101637260794801,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.31015311925997524 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.3102113351163334,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.31019446615907975 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:8192",
            "value": 3.298734836784875,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.298600491399701 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 5.450302666668152,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 5.449836305554672 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 5.57504968589322,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 5.574266362079183 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 3.3135981409897637,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.3129719628200682 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAESBlockDecrypt<128>/threads:1",
            "value": 0.00888528706884094,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.008884038312644985 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAESBlockDecrypt<256>/threads:1",
            "value": 0.011834554432170848,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.011833775784495678 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAESBlockDecryptSetup<128>/threads:1",
            "value": 0.022735935000792698,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.02273573239727526 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAESBlockDecryptSetup<256>/threads:1",
            "value": 0.023396893853325693,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.023391637173103948 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAESBlockEncrypt<128>/threads:1",
            "value": 0.008886782616222427,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.008885519671934414 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAESBlockEncrypt<256>/threads:1",
            "value": 0.011767783132614788,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.011767315816365405 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAESBlockEncryptSetup<128>/threads:1",
            "value": 0.01238603988765281,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.012384437736919525 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedAESBlockEncryptSetup<256>/threads:1",
            "value": 0.0140362865771765,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.0140361859255996 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedBase64/threads:1",
            "value": 1.9025521584474425,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.9025471997215182 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedCurve25519ArbitraryPointMultiply/threads:1",
            "value": 22.926251935259362,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 22.924479474554296 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedCurve25519BasePointMultiply/threads:1",
            "value": 9.543957124785555,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 9.543748150672002 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedECDHComputeKey/p224/threads:1",
            "value": 109.52507310272149,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 109.51595424105574 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedECDHComputeKey/p256/threads:1",
            "value": 42.05800279330016,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 42.05575848731745 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedECDHComputeKey/p384/threads:1",
            "value": 283.48655120480487,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 283.4727891566291 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedECDHComputeKey/p521/threads:1",
            "value": 681.4095173612126,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 681.2274618057916 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedECDHEphemeral/p224/threads:1",
            "value": 221.4056522728537,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 221.3623227272295 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedECDHEphemeral/p256/threads:1",
            "value": 52.706335215053784,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 52.706134408605614 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedECDHEphemeral/p384/threads:1",
            "value": 570.3544970929163,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 570.283625000019 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedECDHEphemeral/p521/threads:1",
            "value": 1366.16625000051,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1366.1615833332598 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedECDHKeyGen/p224/threads:1",
            "value": 103.11065247106947,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 103.09706466878997 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedECDHKeyGen/p256/threads:1",
            "value": 6.929090068711162,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.9284626337073005 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedECDHKeyGen/p384/threads:1",
            "value": 263.33070295699736,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 263.321604838667 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedECDHKeyGen/p521/threads:1",
            "value": 627.4166121792235,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 627.354160256297 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedECDSASign/p224/threads:1",
            "value": 117.55696694715212,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 117.54603004810546 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedECDSASign/p256/threads:1",
            "value": 15.489347011384968,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.489361638202396 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedECDSASign/p384/threads:1",
            "value": 304.4381284829784,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 304.36217027863415 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedECDSASign/p521/threads:1",
            "value": 736.3735037595113,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 736.3540864664748 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedECDSAVerify/p224/threads:1",
            "value": 119.36641262204702,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 119.35335558253271 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedECDSAVerify/p256/threads:1",
            "value": 48.597172524194875,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 48.57707277225239 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedECDSAVerify/p384/threads:1",
            "value": 310.53273185928055,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 310.5272854902662 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedECDSAVerify/p521/threads:1",
            "value": 757.4804689942391,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 757.3681821707065 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedEd25519/threads:1",
            "value": 10.288373953096505,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 10.28742582705205 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedEd25519Sign/threads:1",
            "value": 10.315929352445785,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 10.315728503182829 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedEd25519Verify/threads:1",
            "value": 34.36133392539837,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 34.35853214920425 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedHRSSDecap/threads:1",
            "value": 18.08976362949955,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 18.08972788153557 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedHRSSEncap/threads:1",
            "value": 5.699150958696998,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 5.698925389558907 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedHRSSGenerate/threads:1",
            "value": 94.75618251676474,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 94.75619692605268 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:1350/threads:1",
            "value": 1.6153045262109458,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.6151398319626344 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:16/threads:1",
            "value": 0.1660347623674038,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.1660282674913614 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:16384/threads:1",
            "value": 18.476461174754736,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 18.47518848881491 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:256/threads:1",
            "value": 0.31284611602146384,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.3127598025442487 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:8192/threads:1",
            "value": 9.252777662192337,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 9.251216143366527 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:1350/threads:1",
            "value": 0.6387830842401621,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.6386863479317854 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:16/threads:1",
            "value": 0.05377451770729129,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.05377354685920597 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:16384/threads:1",
            "value": 7.253189959244,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.252596702482117 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:256/threads:1",
            "value": 0.16086786414166504,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.16085925893100514 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:8192/threads:1",
            "value": 3.667331298558872,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.6673067090202394 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:1350/threads:1",
            "value": 0.7050310045483856,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.7050004599122247 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:16/threads:1",
            "value": 0.0528774523375111,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.052874454561389006 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:16384/threads:1",
            "value": 8.12416210776925,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 8.123233921876473 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:256/threads:1",
            "value": 0.17067859277963546,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.1706588548235829 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:8192/threads:1",
            "value": 4.094594312500514,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 4.093944770833247 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:1350/threads:1",
            "value": 1.7697933693504087,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.769790361514937 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:16/threads:1",
            "value": 0.1927006232662107,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.19268890833262256 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:16384/threads:1",
            "value": 20.502392722711768,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 20.500552383943266 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:256/threads:1",
            "value": 0.4975939927947162,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.4975574094116107 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:8192/threads:1",
            "value": 10.357490343005104,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 10.35745688654283 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedHashToCurve/hash-to-curve P256_XMD:SHA-256_SSWU_RO_/threads:1",
            "value": 16.423645677326746,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 16.423564584745794 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedHashToCurve/hash-to-curve P384_XMD:SHA-384_SSWU_RO_/threads:1",
            "value": 43.321923093957885,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 43.31178124999119 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedHashToCurve/hash-to-scalar P384_XMD:SHA-512/threads:1",
            "value": 0.83210928101827,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.8320720933192078 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedMLDSAKeyGen/ml_dsa_44/threads:1",
            "value": 39.09308721625963,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 39.08214874552068 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedMLDSAKeyGen/ml_dsa_65/threads:1",
            "value": 66.30027932204538,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 66.29075593219044 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedMLDSAKeyGen/ml_dsa_87/threads:1",
            "value": 101.16363302271907,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 101.15253053832505 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedMLDSAParsePubKey/ml_dsa_44/threads:1",
            "value": 3.0010881436465,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.0005479745774086 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedMLDSAParsePubKey/ml_dsa_65/threads:1",
            "value": 4.482803670973311,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 4.482640697937847 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedMLDSAParsePubKey/ml_dsa_87/threads:1",
            "value": 5.948245345741983,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 5.948046119438787 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedMLDSASign/ml_dsa_44/threads:1",
            "value": 154.75600400641005,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 154.74276201921097 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedMLDSASign/ml_dsa_65/threads:1",
            "value": 239.85081901030844,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 239.80853645833022 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedMLDSASign/ml_dsa_87/threads:1",
            "value": 283.13905934724886,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 283.1306068249848 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedMLDSAVerify/ml_dsa_44/threads:1",
            "value": 33.15687260181528,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 33.1506693032731 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedMLDSAVerify/ml_dsa_65/threads:1",
            "value": 54.20539784649104,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 54.20424434013772 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedMLDSAVerify/ml_dsa_87/threads:1",
            "value": 88.21294816802899,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 88.20032752456748 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedMLDSAVerifyBadSignature/ml_dsa_44/threads:1",
            "value": 33.58473076923443,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 33.58275168690532 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedMLDSAVerifyBadSignature/ml_dsa_65/threads:1",
            "value": 54.28538652678443,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 54.284229431260414 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedMLDSAVerifyBadSignature/ml_dsa_87/threads:1",
            "value": 88.67627673793218,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 88.67124643492897 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedMLKEM1024DecapOnly/threads:1",
            "value": 28.004934535638228,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 28.007451433250072 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedMLKEM1024EncapOnly/threads:1",
            "value": 18.719528672820914,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 18.716729669834745 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedMLKEM1024KeyGenDecap/threads:1",
            "value": 55.52517157417642,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 55.516202434881826 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedMLKEM1024KeyGenOnly/threads:1",
            "value": 28.064840707958062,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 28.06120398230103 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedMLKEM1024ParseEncap/threads:1",
            "value": 32.952473950005526,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 32.9541038654631 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedMLKEM1024ParseOnly/threads:1",
            "value": 13.754193125849543,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.752850132937988 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedMLKEM1024PrivateKeyFromSeedOnly/threads:1",
            "value": 27.517286347749227,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 27.513045832472358 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedMLKEM768DecapOnly/threads:1",
            "value": 20.47518118249612,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 20.47594225132628 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedMLKEM768EncapOnly/threads:1",
            "value": 13.776241340729243,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.774309984814085 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedMLKEM768KeyGenDecap/threads:1",
            "value": 39.2012134268466,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 39.19771863727232 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedMLKEM768KeyGenOnly/threads:1",
            "value": 18.97206815544096,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 18.971023395207666 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedMLKEM768ParseEncap/threads:1",
            "value": 22.835037764859916,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 22.838061701214777 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedMLKEM768ParseOnly/threads:1",
            "value": 9.266839459855088,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 9.266722243448193 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedMLKEM768PrivateKeyFromSeedOnly/threads:1",
            "value": 18.70779801779269,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 18.71120217200324 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndSign/2048/threads:1",
            "value": 520.8627301590722,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 520.8136772485133 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndSign/3072/threads:1",
            "value": 1568.1802301591529,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1568.0987380948957 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndSign/4096/threads:1",
            "value": 3485.074571429436,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3484.8827142854234 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndVerify/2048/threads:1",
            "value": 13.88495792605882,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.884931505879527 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndVerify/3072/threads:1",
            "value": 29.79095900873599,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 29.790745947628302 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndVerify/4096/threads:1",
            "value": 52.51926916890051,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 52.517887935662976 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedRSAParsePrivateKey/2048/threads:1",
            "value": 67.06601737056076,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 67.06463964576609 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedRSAParsePrivateKey/3072/threads:1",
            "value": 156.13510278738266,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 156.12264547034027 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedRSAParsePrivateKey/4096/threads:1",
            "value": 241.84525672365302,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 241.83488264061194 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedRSASign/2048/threads:1",
            "value": 448.4454132419343,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 448.40165525118545 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedRSASign/3072/threads:1",
            "value": 1399.146021428724,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1398.9807928575308 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedRSASign/4096/threads:1",
            "value": 3217.1867500007274,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3216.9003214284385 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedRSAVerify/2048/threads:1",
            "value": 12.407125678921194,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.404863774158144 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedRSAVerify/3072/threads:1",
            "value": 26.926940394635217,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 26.92558399561519 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedRSAVerify/4096/threads:1",
            "value": 47.446934171598805,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 47.440757643010194 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedRandom/InputSize:1350/threads:1",
            "value": 0.6152293003393385,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.6152074718896849 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedRandom/InputSize:16/threads:1",
            "value": 0.4375885352481724,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.43752886504502175 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedRandom/InputSize:16384/threads:1",
            "value": 2.381909740448916,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.381890031107556 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedRandom/InputSize:256/threads:1",
            "value": 0.46245238835785063,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.4624257667438617 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedRandom/InputSize:8192/threads:1",
            "value": 1.4494598492836654,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.4494030218539973 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedSLHDSA/threads:1",
            "value": 21594.939300001668,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 21591.642299999592 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedSLHDSASign/threads:1",
            "value": 168579.50899998288,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 168571.03100001326 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedSLHDSAVerify/threads:1",
            "value": 166.50034602921042,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 166.49365559155075 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedSPAKE2/threads:1",
            "value": 78.86253892455821,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 78.85498033708586 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedScrypt/(N = 1024, r = 8, p = 16)/threads:1",
            "value": 21859.58200001181,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 21858.53887499939 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedScrypt/(N = 16384, r = 8, p = 1)/threads:1",
            "value": 21775.790250003978,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 21775.85287499539 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedSelfTest",
            "value": 3344.0472799975396,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3343.356280001899 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedSipHash/1350/threads:1",
            "value": 0.00024037496405056956,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.0002403255763286264 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedSipHash/16/threads:1",
            "value": 0.00024012299856256388,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.00024012196604636266 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedSipHash/16384/threads:1",
            "value": 0.00024034148767652745,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.00024031934834878194 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedSipHash/256/threads:1",
            "value": 0.00024022613408554243,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.0002402243419775677 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedSipHash/8192/threads:1",
            "value": 0.00024022066412151497,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.000240175609226687 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedTrustTokenKeyGen/SpeedTrustTokenKeyGen experiment_v1",
            "value": 560.6959314286541,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 560.5985314285331 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedTrustTokenKeyGen/SpeedTrustTokenKeyGen experiment_v2_pmb",
            "value": 560.5149971096438,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 560.5145231214527 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedTrustTokenKeyGen/SpeedTrustTokenKeyGen experiment_v2_voprf",
            "value": 283.87770125797886,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 283.8774261006619 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "BM_SpeedX509/threads:1",
            "value": 2.022217877500273,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.0221664628464735 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginIssueBatch1",
            "value": 348.9005914633758,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 348.8875650405375 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginIssueBatch10",
            "value": 3491.8492678579178,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3491.5278214270475 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginRedeemBatch1",
            "value": 0.08744286984592746,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.08744233595700074 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginRedeemBatch10",
            "value": 0.08776524511256086,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.08776164993697615 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1FinishIssueBatch1",
            "value": 3903.760579999016,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3903.569619999985 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1FinishIssueBatch10",
            "value": 13977.09457143037,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13976.365785712882 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1IssueBatch1",
            "value": 3371.2062758621055,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3370.8570862064016 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1IssueBatch10",
            "value": 12128.980874997807,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12127.641937503597 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1RedeemBatch1",
            "value": 958.2667058821824,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 958.1103529411654 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1RedeemBatch10",
            "value": 958.3417303915934,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 958.2717352942585 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginIssueBatch1",
            "value": 349.73133148146945,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 349.71565370369717 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginIssueBatch10",
            "value": 3491.4149259285055,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3491.39946296275 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginRedeemBatch1",
            "value": 0.08303634779129096,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.08302267752565516 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginRedeemBatch10",
            "value": 0.08283927528673193,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.08283346856744021 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbFinishIssueBatch1",
            "value": 3909.7692599989387,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3909.4218399986867 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbFinishIssueBatch10",
            "value": 13987.762642857759,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13987.75771428973 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbIssueBatch1",
            "value": 3367.041637931407,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3367.0369137942494 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbIssueBatch10",
            "value": 12115.584062499353,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12115.454812501981 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbRedeemBatch1",
            "value": 963.1233921566616,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 963.0251862746467 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbRedeemBatch10",
            "value": 958.4770637253965,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 958.4165294115212 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginIssueBatch1",
            "value": 372.64298297888206,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 372.640651063856 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginIssueBatch10",
            "value": 3665.108388888585,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3664.9754444442597 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginRedeemBatch1",
            "value": 0.0764217103060987,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.07641503896512382 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginRedeemBatch10",
            "value": 0.07647907990439826,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.07647197595331306 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfFinishIssueBatch1",
            "value": 1346.5008287674314,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1346.459999999923 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfFinishIssueBatch10",
            "value": 5008.611124998197,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 5008.2381499994 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfIssueBatch1",
            "value": 1296.8844934214392,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1296.7896249997361 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfIssueBatch10",
            "value": 4943.565074998446,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 4943.541649998906 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfRedeemBatch1",
            "value": 308.7113939873781,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 308.65730854435094 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfRedeemBatch10",
            "value": 309.5491598744723,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 309.5294169278454 us\nthreads: 1\nazure_vmsize: Standard_D4ds_v7\ncpu_model: Intel(R) Xeon(R) 6973P-C\ncpu_cores: 4\ncpu_bogomips: 5200.00"
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
          "id": "7fc4838242e90bfcbc14f56dd72a70bac601f2a6",
          "message": "Remove alerts.\n\nWe don't need them anymore anyway.\n\nChange-Id: I0a50cc34a59497f1dce0548f66556867776ca19b",
          "timestamp": "2026-09-03T16:04:36+02:00",
          "tree_id": "4ae1a67188998e36e68e4af3433f5ae438fa6c62",
          "url": "https://github.com/divVerent/boringssl/commit/7fc4838242e90bfcbc14f56dd72a70bac601f2a6"
        },
        "date": 1788445211317,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:1350",
            "value": 2.320322929967682,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.3201947912229417 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 2.317053134349365,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.317034782916454 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:16",
            "value": 0.5178148133541303,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5177650507695006 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.5133505018821782,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5133461705352051 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:16384",
            "value": 12.740979362354167,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.739372205316503 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 13.001206680157267,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.000642442639261 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 13.431703052798387,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.429524436352228 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 12.714211763176888,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.712674954558441 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:256",
            "value": 1.5583739969179788,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.5581126233497884 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 1.5445109239980341,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.5443599785154791 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:8192",
            "value": 7.056716274553819,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.056377221382928 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 7.153799131257221,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.15319802160987 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 7.355758538048247,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.354694315458159 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 7.040524848742521,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.039948069721807 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:1350",
            "value": 2.4463695554498615,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.4462239722435593 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 2.439305694056808,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.438945552453436 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:16",
            "value": 0.6267558360571446,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.6267512667535878 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.6261033314551528,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.6259848060815041 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:16384",
            "value": 13.466423962814407,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.464610240043928 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 13.693332285114526,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.692545632417355 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 14.140674420281385,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 14.140603778985092 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 13.438640102289284,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.437638305223928 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:256",
            "value": 1.6419096180021608,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.6416719913277085 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 1.6345253499111887,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.6344377389534224 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:8192",
            "value": 7.457941838366331,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.457375313616008 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 7.5604699567522555,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.559932151681535 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 7.739988657843743,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.739413161628194 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 7.450887017226185,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.4493281736096035 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:1350",
            "value": 2.1964784326451876,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.1961528405778754 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 2.203723338051716,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.203661959965111 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:16",
            "value": 0.1497535697708458,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.14974269769123721 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.15506424511987169,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.15505618817605993 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:16384",
            "value": 24.56073353370393,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 24.552631480086173 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 24.944220132179556,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 24.943036349768473 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 25.46442118931648,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 25.464231887816073 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 24.58689659488175,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 24.584998622942454 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:256",
            "value": 0.5193608306169948,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5193571969998403 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.5252436875929377,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5251716208320089 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:8192",
            "value": 12.34582574706943,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.34564727020359 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 12.527920212085528,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.526528554999178 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 12.76590144419398,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.760840163935402 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 12.335918991959414,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.334419683256082 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:1350",
            "value": 2.1967155452483658,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.1965706795725133 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 2.203701691227073,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.2034779848819417 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:16",
            "value": 0.1491844683464629,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.14918418041973444 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.15430953826072047,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.1543023814203534 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:16384",
            "value": 24.556799924829388,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 24.5521804059155 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 24.93581138790397,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 24.934946746300895 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 25.47994710032255,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 25.478092345880338 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 24.668939253514992,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 24.667132890786924 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:256",
            "value": 0.5194735078494936,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5194486924511305 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.52593948878718,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5259146341462508 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:8192",
            "value": 12.351428409804159,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.351047328726604 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 12.524521922531315,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.522617729770285 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 12.783527329515978,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.782579776155313 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 12.345911455697602,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.345034050634794 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:1350",
            "value": 2.1990862913368017,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.198756818385923 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 2.2069770157572446,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.206968181715987 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:16",
            "value": 0.15117689039780052,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.15116842161282695 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.15723815699673688,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.1572130150373675 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:16384",
            "value": 24.55648035535816,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 24.555431806809985 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 24.939289949103024,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 24.93260623409144 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 25.471741043610457,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 25.46942692108261 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 24.57793948487117,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 24.577631782944657 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:256",
            "value": 0.5221189916405653,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.522080241187486 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.5278429212464769,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.527725902431377 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:8192",
            "value": 12.360773795980814,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.359772531921944 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 12.526433822594822,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.525984428844726 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 12.77077258444304,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.769288426290174 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 12.349086660786853,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.347712306337232 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:1350",
            "value": 1.2574507075679415,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.2573973224023187 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 1.2742357088186718,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.2740118493242636 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:16",
            "value": 0.2287370466078627,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.22873535723769703 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.23522807499459733,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.23519568888991715 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:16384",
            "value": 12.486375191426365,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.485077654414832 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 12.802662524530993,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.799900588620174 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 13.237534126232555,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.236876942830477 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 12.476394375160341,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.475412191395971 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:256",
            "value": 0.41896235470520865,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.4189397269460894 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.43031457866674555,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.4302986068795572 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:8192",
            "value": 6.350200436224411,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.3493520737013975 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 6.507890903055044,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.507870252325046 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 6.704121621621281,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.7035787889150935 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 6.361954268093101,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.361470821160991 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:1350",
            "value": 1.9580393888580354,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.9578798275558325 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 1.9694995473385517,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.9693057679149493 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:16",
            "value": 0.1631432575757213,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.16310219447223584 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.17493427906410056,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.17492249747238864 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:16384",
            "value": 21.559214411629306,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 21.559114587923467 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 21.779601223575554,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 21.777871078976663 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 22.232749263538544,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 22.230887151603902 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 21.56587758469404,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 21.563194896615414 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:256",
            "value": 0.4828306557330187,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.48281844883166175 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.4932186877078236,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.4930971660123621 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:8192",
            "value": 10.848399900507944,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 10.848284269293512 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 10.973782102903249,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 10.969897818791791 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 11.162569264067702,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 11.16161836409255 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 10.8553328346644,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 10.854760416666451 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:1350",
            "value": 0.28802660637679584,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.2879983332928005 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 0.29634614753976385,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.29634352715513995 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:16",
            "value": 0.08849364929482925,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.0884829806311625 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.09418882711871518,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.09418866293167427 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:16384",
            "value": 2.06214141948062,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.061422278879949 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 2.2345489290976697,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.23438342411326 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 2.853775320863619,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.853739410735514 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 2.093169245875219,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.0931437277210474 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:256",
            "value": 0.11127709042452005,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.11126907580153189 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.11567761883984373,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.11567521119626642 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:8192",
            "value": 1.0808947061681105,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.0807783713776808 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 1.1565722282755257,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.1565079688193616 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 1.421216358972319,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.4211984017179236 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 1.0806431625345354,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.080524161474171 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:1350",
            "value": 0.510173810734735,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5101260922356553 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 0.5208802346085218,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5207778384483606 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:16",
            "value": 0.17458824959913224,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.17456082308925064 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.17960732352911984,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.1795879608629533 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:16384",
            "value": 3.8735966093014262,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.8729849609222966 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 4.218841151569029,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 4.21880275150165 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 4.498470631388931,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 4.497943670044301 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 3.894056937455204,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.8931902602303636 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:256",
            "value": 0.24360149485940039,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.24357975031733164 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.25056069781302187,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.2505478381390886 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:8192",
            "value": 2.0168477720231133,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.0166372549015583 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 2.1896853079719745,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.1896713325739867 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 2.3194287452733597,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.319301405954686 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 2.02739531748447,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.0271860965328363 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:1350",
            "value": 0.3005044457626856,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.30050089898757226 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 0.3199008512506015,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.31982228172956223 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:16",
            "value": 0.09273640548408052,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.09273485858401828 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.09694982583742641,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.09694319133145501 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:16384",
            "value": 2.1619672690938034,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.161551956607656 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 2.381213614626616,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.3809358153800053 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 3.0177443535276174,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.0174908982255633 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 2.187346962802264,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.1868608073537845 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:256",
            "value": 0.11419465108614854,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.11418161003418503 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.12062701834918113,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.12062122453621124 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:8192",
            "value": 1.1291218245887853,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.129131240728656 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 1.2286597696969248,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.228586702374297 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 1.5147704476500012,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.514764766887885 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 1.145454255843498,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.1453135677745245 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:1350",
            "value": 2.379044111572477,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.3789058726337786 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 2.370221933785671,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.3701901306422926 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:16",
            "value": 0.5196237621405411,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5196160889990247 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.5165966775727394,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5165343333281166 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:16384",
            "value": 13.432592071088859,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.431079084068463 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 13.699650254309091,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.698398205705587 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 14.09062257926855,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 14.08979285611826 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 13.415695131959826,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.415638246959691 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:256",
            "value": 1.5716216735519428,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.5714196608708182 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 1.5563336590869306,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.555966097790331 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:8192",
            "value": 7.403491503660932,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.403143380408247 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 7.533818624445122,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.533127702802744 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 7.699442633896109,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.699125647873177 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 7.392430898284924,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.3924406033696215 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:1350",
            "value": 1.2968808260327056,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.2967588399545604 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 1.3118110386225355,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.311627578507672 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:16",
            "value": 0.234149414771176,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.2341248524054452 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.24058459953485864,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.24054829329865512 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:16384",
            "value": 12.856550948322383,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.856477043817918 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 13.22845982871551,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.227538200115237 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 13.714603289015727,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.71393407977111 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 12.851935422660299,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.849626733838218 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:256",
            "value": 0.4268295802207878,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.42679602229638053 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.4379369656591988,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.4378721896798531 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:8192",
            "value": 6.51668169725715,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.516019752594135 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 6.720671212119437,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.720654132231152 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 6.9401487341741355,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.93830393969567 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 6.528614467461731,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.5278432025587705 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:1350",
            "value": 2.444873453866524,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.4447016458854156 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 2.4588915302732506,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.458067577065862 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:16",
            "value": 0.19388886559435703,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.19384913984068042 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.20621652439005983,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.20618057660896483 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:16384",
            "value": 27.03172134986308,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 27.02636570248626 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 27.347137974301614,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 27.34366894530898 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 27.828833808845086,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 27.82714693296141 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 27.024205931019395,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 27.017931999999934 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:256",
            "value": 0.5942751450383084,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5941526574181927 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.6055299043505527,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.6054680438136821 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:8192",
            "value": 13.59867198556949,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.598068128205949 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 13.760490729037661,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.757120452311515 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 13.987231531658324,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.98618832002044 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 13.601718915156013,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.60091773296412 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:1350",
            "value": 0.31695842345210695,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.3169405249065913 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 0.3307163908925196,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.33071421865150313 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:16",
            "value": 0.09533599475329659,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.0953200087315334 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.10011829868972844,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.10011617235779018 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:16384",
            "value": 2.283351902680196,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.283234101693309 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 2.53794262145929,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.5375472820005998 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 3.1952665787261525,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.192950003257146 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 2.335882821293965,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.335862311726054 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:256",
            "value": 0.11851441927015746,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.11850739667392327 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.12388422073778475,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.12387261865366354 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:8192",
            "value": 1.1923612628838018,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.1922202719482864 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 1.3082587977517914,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.308128296659296 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 1.597695796046033,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.5973117430354569 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 1.2027885391890578,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.202582974137663 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:1350",
            "value": 0.5716557632034982,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5716512364882208 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 0.5783492973164603,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5783472883814234 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:16",
            "value": 0.19467059560006378,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.1946703501659591 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.19920590211927075,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.199193680230972 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:16384",
            "value": 4.409089156680165,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 4.408817849287932 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 4.810486019131977,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 4.809443512386396 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 5.0861897660818105,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 5.0859229930889365 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 4.416283135508946,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 4.416262386473949 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:256",
            "value": 0.2746390935619568,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.2746364255125945 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.27824956968035897,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.27820820352617226 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:8192",
            "value": 2.291988804488377,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.291228947060575 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 2.4861642505962864,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.4857374550155726 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 2.6191617010474113,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.6191334036981493 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 2.2976934064909025,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.297681146025207 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:1350",
            "value": 0.749217446795414,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.7491522603800549 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 0.7699748846426623,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.7698963903062783 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:16",
            "value": 0.17695583790837527,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.17694698386390448 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.19071085713953284,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.19068034764114522 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:16384",
            "value": 6.93989021631486,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.939848331683086 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 12.030739688188445,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.03006868401754 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 12.37415165755994,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.371651022483425 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 6.942307001983307,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.9410242267321705 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:256",
            "value": 0.27518260007405926,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.2751557542575641 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.28622738627999705,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.2861884479098903 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:8192",
            "value": 3.5593036739595605,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.5584500690455014 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 6.078206796239143,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.0771317157724685 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 6.227360825719074,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.226848332069773 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 3.5782553218586948,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.578074997271197 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:1350",
            "value": 46.38634209283313,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 46.37569247159439 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 46.303401831823734,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 46.300999530294376 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:16",
            "value": 1.8321607232634083,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.8316463939218892 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 1.827758214782369,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.827742278010033 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:16384",
            "value": 537.9185409837405,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 537.9166612021643 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 536.7906420765096,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 536.7873961748153 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 537.5733159340725,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 537.5689340659783 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 535.9693251368243,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 535.9410081966486 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:256",
            "value": 10.58457891346306,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 10.582319894782453 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 10.582574822240643,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 10.58250145442859 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:8192",
            "value": 269.70406456045407,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 269.67741208791256 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 269.57231267221965,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 269.55921625340153 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 269.9381909341465,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 269.8698200549221 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 269.3961205477846,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 269.39500000000953 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:1350",
            "value": 0.8472122540754835,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.8471153889394382 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 0.8720493007149954,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.8718926963553002 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:16",
            "value": 0.27940628523904704,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.279392588247401 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.2848008737611084,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.28477602445950484 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:16384",
            "value": 7.043351012641368,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.04331528296469 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 12.16630132655534,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.16528310191384 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 12.502941229308371,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.501595919412978 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 7.054017294556978,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.05335161929978 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:256",
            "value": 0.3751740522192438,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.3751350522919941 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.38740038354286016,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.38737271197543854 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:8192",
            "value": 3.6677323495270016,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.667580714633405 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 6.1904255890359305,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.190040742844393 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 6.3607037469197385,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.360648094130248 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 3.676675559800338,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.6765133490589306 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:1350",
            "value": 2.1455381765322024,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.145195942992006 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 2.1415321013394295,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.1414577100236367 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:16",
            "value": 0.21080914186155372,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.2107946178649512 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.20979523073451056,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.20978776822417147 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:16384",
            "value": 23.568533902376696,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 23.562950709298626 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 23.76789262315333,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 23.76398228584984 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 23.92831140136942,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 23.926510131833112 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 23.566851874102696,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 23.56512253724275 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:256",
            "value": 0.5759099757764419,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5759065245000683 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.5742334599733657,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5742052302129046 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:8192",
            "value": 11.888494360218449,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 11.886962947244951 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 11.973918100816674,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 11.972835347245859 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 12.040386179358055,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.039645638820836 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 11.88413554800632,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 11.88223605722762 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:1350",
            "value": 2.216898937973716,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.2167104959891395 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 2.216375842722142,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.2158001334783646 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:16",
            "value": 0.21442368374771328,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.21442074457557342 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.21381726763003278,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.2137710075275599 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:16384",
            "value": 24.219735243271707,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 24.218689799949225 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 24.429156576975053,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 24.422995266570815 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 24.5731068827045,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 24.5708948756612 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 24.21354174901103,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 24.212534214422988 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:256",
            "value": 0.5926599261585643,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5926605596915767 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.5932669831304497,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5931517600782591 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:8192",
            "value": 12.21273337484353,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.212716936491315 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 12.313366247644609,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.311659522310519 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 12.393274924283569,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.393204883894576 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 12.215236510898063,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.2150252336426 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:1350",
            "value": 2.1842687361848507,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.1841011430349417 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 2.190521536292933,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.190240020585065 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:16",
            "value": 0.14424195688519664,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.14423227241572326 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.14318832324219516,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.14315117224447854 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:16384",
            "value": 24.624918833631362,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 24.624732012124124 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 24.98393886908932,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 24.97957322975347 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 25.48157460151919,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 25.4815952443174 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 24.57155868249949,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 24.56896188793504 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:256",
            "value": 0.5153522680725071,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.515332428344851 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.5135993918475419,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5135234591892568 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:8192",
            "value": 12.353939032086533,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.352192506952036 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 12.550113907029727,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.550069279037015 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 12.758899583493859,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.757446049726505 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 12.36041214340826,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.357668833628747 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:1350",
            "value": 2.187428266696929,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.1870287245910887 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 2.1938571029704357,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.1935552490519283 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:16",
            "value": 0.14475415444110332,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.14475385505557858 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.14333039384615934,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.14332091430959196 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:16384",
            "value": 24.546370300761016,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 24.54513120300673 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 24.96852977858378,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 24.961481929233017 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 25.511539218256186,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 25.50923727702604 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 24.58545688143084,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 24.584356981703323 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:256",
            "value": 0.515587656891685,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.515588506091486 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.5144547244300214,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5144128122182677 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:8192",
            "value": 12.365884270943663,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.364724520687524 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 12.541441739463016,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.538553699897385 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 12.784702822213234,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.781797567953555 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 12.361587596308137,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.360888088923922 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:1350",
            "value": 2.184595023078231,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.184340881218609 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 2.190970485338022,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.1909539508869598 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:16",
            "value": 0.1435689483909269,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.14356222811401848 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.14214484317662515,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.14213663215680086 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:16384",
            "value": 24.606419232698098,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 24.606184250379677 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 24.965790425258874,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 24.96339126559237 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 25.46370818182167,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 25.46033025974386 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 24.575585549433832,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 24.572876317104242 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:256",
            "value": 0.5151296654477988,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5151289961315654 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.5132424504561085,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5131928410400961 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:8192",
            "value": 12.375675324675594,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.37491697137815 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 12.546566419245218,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.545428141800105 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 12.770051066879402,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.769030249799824 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 12.375136312002748,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.374497791240042 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:1350",
            "value": 1.2569382036200962,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.2568823063958996 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 1.2584053416417638,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.2584104576166972 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:16",
            "value": 0.22632680263782215,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.22631548923806646 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.22344478453587868,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.22343426345615205 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:16384",
            "value": 12.463034333662652,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.462243196843659 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 12.804054925721024,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.803922335157703 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 13.221082499322355,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.219940492293157 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 12.465842750122484,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.464281361091661 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:256",
            "value": 0.41509490254238735,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.41504592796616624 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.41344424317156303,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.413392285104068 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:8192",
            "value": 6.3441462215310604,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.343647321428785 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 6.491585758800345,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.4905289067157454 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 6.683428094328552,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.681669676932371 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 6.3458683852999265,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.344494824684757 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:1350",
            "value": 2.1842973743411074,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.184293310023367 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 2.25109082328098,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.251076517603267 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:16",
            "value": 0.15509991493036762,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.15508312553464407 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.15487939899223505,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.15487766431207886 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:16384",
            "value": 24.408718018905557,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 24.40749751120247 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 24.79647370417437,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 24.795238179513674 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 25.848961955114724,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 25.845169202996907 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 24.44186246237509,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 24.441904212633307 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:256",
            "value": 0.5181334468287535,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.51808740992957 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.5188741977063202,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5187812742668141 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:8192",
            "value": 12.273158908904415,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.272224537039026 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 12.44444686112507,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.444034495881251 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 12.85818323422941,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.858159449329358 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 12.26988369619743,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.269820132633052 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:1350",
            "value": 0.28848860791765896,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.2884278149713757 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 0.28933864978649887,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.28930319998807896 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:16",
            "value": 0.083747631223561,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.08374198941458608 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.08232780579536221,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.08232426512273475 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:16384",
            "value": 2.0679602962236108,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.0675909952807308 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 2.432692218148676,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.431790221913713 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 2.9861385680604937,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.9853895507039736 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 2.0654068392254867,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.0654030092595876 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:256",
            "value": 0.10762376267312315,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.10756632464446154 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.10623248188941721,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.10621228509905059 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:8192",
            "value": 1.1031445836661145,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.102948401138216 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 1.2527749844191858,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.2526910988433406 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 1.494362124251038,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.4941158323457762 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 1.070802235280434,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.0706650664176758 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:1350",
            "value": 0.5638521599273528,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5636096277453541 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 0.5585106880068158,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.558485368927835 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:16",
            "value": 0.1280029810361639,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.12800222711323336 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.12348120842985062,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.12346738574522989 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:16384",
            "value": 4.571052946397968,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 4.570877564372031 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 4.8107851221404765,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 4.809898067300547 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 5.165258095887847,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 5.164817448217249 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 4.570109443458653,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 4.570028432926396 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:256",
            "value": 0.22681071489817564,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.22678749090499412 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.22491239155698634,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.22490237792386975 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:8192",
            "value": 2.3561339463643938,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.3561330580298803 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 2.4637476769213773,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.4637344473975133 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 2.619311176313536,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.6192782742062857 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 2.35310743484452,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.3530821765083507 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:1350",
            "value": 0.30409923007254547,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.3039986945655292 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 0.30674175048174834,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.3066928706827312 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:16",
            "value": 0.08848995302070642,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.08848069636426012 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.0868573868940269,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.08683854443326156 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:16384",
            "value": 2.247958116265372,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.2475823789962446 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 2.581206053275409,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.5811157011753196 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 3.1278320063706584,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.127846035032259 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 2.1834567717262594,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.1831982028069836 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:256",
            "value": 0.11235378953300938,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.11235232600898973 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.11207045969775324,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.11205009903825688 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:8192",
            "value": 1.1298176706730472,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.1297270122817076 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 1.3198461585003751,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.3196687395791655 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 1.5559783625916235,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.5559626856169417 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 1.145781103474684,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.1455919779689157 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:1350",
            "value": 2.5748523172343534,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.574645027733431 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 2.568939909267016,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.5687111632669892 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:16",
            "value": 0.22603479949691577,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.22603255166866898 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.2257391478915492,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.2257241749038263 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:16384",
            "value": 28.681421637423274,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 28.674646783620425 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 28.882262002941992,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 28.882090279835886 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 29.035979875721306,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 29.032860313705477 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 28.68254978039095,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 28.68243411420796 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:256",
            "value": 0.6661147125045723,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.6661136037441292 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.6632906566652508,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.6632876995699164 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:8192",
            "value": 14.44756036262028,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 14.44579164210432 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 14.53443853673637,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 14.534065536138087 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 14.609399716878773,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 14.60635270451169 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 14.447053705616725,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 14.445364225726848 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:1350",
            "value": 1.2973127719803021,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.2970259711915983 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 1.3000212048984199,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.2999211453158297 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:16",
            "value": 0.23052668132835286,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.23050030465749635 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.2271395241774742,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.22712902013121633 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:16384",
            "value": 12.814802564438375,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.814640520737631 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 13.194949098983205,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.194009077463013 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 13.691968924582316,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.691512360336688 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 12.819248693154941,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.817952757449328 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:256",
            "value": 0.4223834995173575,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.42236631950444403 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.4217192057997982,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.42167967014517804 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:8192",
            "value": 6.5198724557689305,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.519001762671659 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 6.696801004027819,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.696035380096833 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 6.914651252203778,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.9133268077600265 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 6.516562570993479,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.516104095676896 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:1350",
            "value": 2.6716866653960807,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.6713026107808235 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 2.924562572528541,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.924186862517124 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:16",
            "value": 0.18607214805645947,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.18605997335745547 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.18557952513704637,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.1855605652822316 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:16384",
            "value": 29.880050868099033,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 29.87580048735948 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 30.374539616207908,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 30.373106623335435 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 33.188440119768984,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 33.188297667827925 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 29.889597620507566,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 29.88698062843025 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:256",
            "value": 0.6278556114481211,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.6276923495379166 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.627762547644063,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.6276656481215611 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:8192",
            "value": 15.01928407351394,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.019114088814899 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 15.253561847630982,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.252049150962467 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 16.675605595959457,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 16.67406465380973 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 15.009662151824191,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.00879491888852 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:1350",
            "value": 0.3223852656766412,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.3223806788674798 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 0.3227211844271528,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.3226984701125719 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:16",
            "value": 0.09281466961269096,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.09281395598492899 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.09327484173999787,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.09325507847912572 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:16384",
            "value": 2.3994862959982157,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.3993194351999767 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 2.7570292316327754,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.756484028655581 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 3.334425036537681,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.3341627408989076 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 2.3602295863757248,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.3601180933805703 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:256",
            "value": 0.1164787330466994,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.11642718083004108 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.11608736275576555,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.11608744918086267 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:8192",
            "value": 1.2189105675518843,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.2187628957253156 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 1.410716110599362,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.4106229201451408 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 1.6564054825869206,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.6561783238707348 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 1.2137339099794402,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.213490466309782 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:1350",
            "value": 0.6370878292171939,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.6368832882009261 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 0.6331602809292182,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.6330910112942811 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:16",
            "value": 0.14346795499308984,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.14345908388821318 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.1400446072215759,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.14002903382324342 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:16384",
            "value": 5.226657004054086,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 5.225670777279367 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 5.5351534815513,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 5.53410089154848 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 5.943288098428139,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 5.942188817151421 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 5.240334734264647,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 5.239605894558628 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:256",
            "value": 0.24960251650742898,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.2495802202360014 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.24966231372689413,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.24960891924732972 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:8192",
            "value": 2.6985353366098246,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.6985210948454172 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 2.839176317237056,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.83916276105754 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 3.0097767124970454,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.009743325728416 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 2.6975486895484457,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.6972786352675504 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:1350",
            "value": 0.8055769851265822,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.8055188409018189 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 0.8068064682528358,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.8067999892704518 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:16",
            "value": 0.17439521836027677,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.1743730180169037 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.172686495423239,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.17268464922169044 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:16384",
            "value": 6.947559693044779,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.9475391824022825 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 11.945860357622758,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 11.942611726067263 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 12.267573748893394,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.26718844851548 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 6.96027004458405,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.960201082726336 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:256",
            "value": 0.27522756733961384,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.2752173795625773 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.27447053971648955,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.2744425745077883 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:8192",
            "value": 3.5849729838267153,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.584562246723478 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 6.007851515897165,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.00777968759689 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 6.168047963743545,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.167641971424521 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 3.5805729466661176,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.5803867339866486 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:1350",
            "value": 46.16893744052598,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 46.16314105612381 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 46.169803420800676,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 46.15848992501223 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:16",
            "value": 1.5301352091784373,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.5298745238841542 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 1.5318432971434839,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.5316894377340513 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:16384",
            "value": 547.1188342693714,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 547.1123511236058 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 547.1517022473936,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 547.0676348314736 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 547.9831620108187,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 547.9496899439971 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 547.1567569828537,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 547.1276256984547 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:256",
            "value": 9.564606734992939,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 9.564053147878111 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 9.566053561089642,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 9.565917342210792 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:8192",
            "value": 274.2149625000757,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 274.1477055554793 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 274.28827106753874,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 274.28644241571203 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 273.9868937676619,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 273.98553541075495 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 273.86774373264825,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 273.8137284122634 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:1350",
            "value": 0.9140646581855701,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.914016305512872 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 0.9151403552025151,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.915130409905969 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:16",
            "value": 0.28219854078257733,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.2821805846050216 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.28298822849104405,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.2829817089526263 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:16384",
            "value": 7.060127962936046,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.059791660680102 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 12.08865236340642,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.088059300182241 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 12.390804114596964,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.390351508265685 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 7.087965037241512,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.086693072527706 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:256",
            "value": 0.3852312948705675,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.3852025638706217 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.3873205729815235,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.38727862043636047 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:8192",
            "value": 3.6964938250688517,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.6964460070029346 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 6.143136355095508,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.142509491294194 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 6.2997715716474385,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.29893778890625 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 3.6967333596560117,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.696759664563723 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAESBlockDecrypt<128>/threads:1",
            "value": 0.01588126950872885,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.01587904008923665 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAESBlockDecrypt<256>/threads:1",
            "value": 0.020870218908268363,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.020868526094770117 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAESBlockDecryptSetup<128>/threads:1",
            "value": 0.02680151484319628,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.026801256178123973 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAESBlockDecryptSetup<256>/threads:1",
            "value": 0.030985389163216238,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.030979443658126736 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAESBlockEncrypt<128>/threads:1",
            "value": 0.01588295258064155,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.015881571556997237 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAESBlockEncrypt<256>/threads:1",
            "value": 0.02086470334059919,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.020864549308632456 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAESBlockEncryptSetup<128>/threads:1",
            "value": 0.016628881515529242,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.01662685705517646 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAESBlockEncryptSetup<256>/threads:1",
            "value": 0.01954449546518456,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.019544386922179642 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedBase64/threads:1",
            "value": 2.0956346178466196,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.0953719327442837 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedCurve25519ArbitraryPointMultiply/threads:1",
            "value": 35.06462218648579,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 35.05918274382823 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedCurve25519BasePointMultiply/threads:1",
            "value": 14.854932456936211,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 14.853872997884713 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedECDHComputeKey/p224/threads:1",
            "value": 195.35900099403815,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 195.30823757455033 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedECDHComputeKey/p256/threads:1",
            "value": 51.021422476588725,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 51.0071969302823 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedECDHComputeKey/p384/threads:1",
            "value": 511.8377213542876,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 511.80339322920435 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedECDHComputeKey/p521/threads:1",
            "value": 1220.7827777775424,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1220.4613086420281 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedECDHEphemeral/p224/threads:1",
            "value": 392.170090000036,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 392.1672120000323 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedECDHEphemeral/p256/threads:1",
            "value": 64.3425186640191,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 64.33938441388919 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedECDHEphemeral/p384/threads:1",
            "value": 1031.7471578948819,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1031.7414578945784 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedECDHEphemeral/p521/threads:1",
            "value": 2425.595975609678,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2425.3352926834627 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedECDHKeyGen/p224/threads:1",
            "value": 177.60598731879855,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 177.5779021738964 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedECDHKeyGen/p256/threads:1",
            "value": 8.575407179620928,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 8.574033499083788 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedECDHKeyGen/p384/threads:1",
            "value": 477.94648048804413,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 477.9149439024084 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedECDHKeyGen/p521/threads:1",
            "value": 1114.1983850569854,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1114.122178160907 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedECDSASign/p224/threads:1",
            "value": 209.40377659579752,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 209.35932872341914 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedECDSASign/p256/threads:1",
            "value": 19.426677942640776,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 19.424458160237037 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedECDSASign/p384/threads:1",
            "value": 553.4257372881509,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 553.4212259886938 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedECDSASign/p521/threads:1",
            "value": 1307.6138933335337,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1307.5684200000144 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedECDSAVerify/p224/threads:1",
            "value": 213.26955531593316,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 213.2317906723406 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedECDSAVerify/p256/threads:1",
            "value": 59.668733434615056,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 59.63113616973271 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedECDSAVerify/p384/threads:1",
            "value": 566.1889166660707,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 566.112896550933 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedECDSAVerify/p521/threads:1",
            "value": 1346.0424444428695,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1345.997729165068 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedEd25519/threads:1",
            "value": 15.790448804064411,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.788927260810706 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedEd25519Sign/threads:1",
            "value": 15.911784242129036,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.910543005517184 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedEd25519Verify/threads:1",
            "value": 57.057380127102206,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 57.05226112074007 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHRSSDecap/threads:1",
            "value": 27.805971055606392,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 27.802854001134627 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHRSSEncap/threads:1",
            "value": 9.209617885791912,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 9.209546578573045 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHRSSGenerate/threads:1",
            "value": 138.79438983057193,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 138.76160169492533 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:1350/threads:1",
            "value": 2.271159238559967,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.2711537082313833 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:16/threads:1",
            "value": 0.23668323711441225,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.2366722289807222 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:16384/threads:1",
            "value": 26.07574667377084,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 26.07584260244865 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:256/threads:1",
            "value": 0.4419415818232789,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.44193843338991234 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:8192/threads:1",
            "value": 13.046793421926548,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.046021262458193 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:1350/threads:1",
            "value": 0.8296429775161526,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.8295703560998213 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:16/threads:1",
            "value": 0.05793837967272092,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.05793527057188911 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:16384/threads:1",
            "value": 9.679825634191946,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 9.679385549303861 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:256/threads:1",
            "value": 0.18781282842114955,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.18780027202805816 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:8192/threads:1",
            "value": 4.861541844323458,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 4.860958378781879 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:1350/threads:1",
            "value": 0.8920923566877497,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.8919793767060961 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:16/threads:1",
            "value": 0.06106098682081816,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.061050838025360196 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:16384/threads:1",
            "value": 10.330759797722568,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 10.328537399919767 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:256/threads:1",
            "value": 0.20882098854687364,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.20880749850647548 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:8192/threads:1",
            "value": 5.189605228342501,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 5.189568714611276 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:1350/threads:1",
            "value": 2.651499513105721,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.651336863317577 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:16/threads:1",
            "value": 0.2730699208662068,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.2730398395067079 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:16384/threads:1",
            "value": 30.636971120820807,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 30.63177068372955 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:256/threads:1",
            "value": 0.746979109197303,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.7469764726052214 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:8192/threads:1",
            "value": 15.46289373918095,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.462980493943027 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHashToCurve/hash-to-curve P256_XMD:SHA-256_SSWU_RO_/threads:1",
            "value": 28.668155836525262,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 28.661793002054385 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHashToCurve/hash-to-curve P384_XMD:SHA-384_SSWU_RO_/threads:1",
            "value": 76.59279992167777,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 76.58814878622118 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHashToCurve/hash-to-scalar P384_XMD:SHA-512/threads:1",
            "value": 1.2807188353345613,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.2806350457947522 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLDSAKeyGen/ml_dsa_44/threads:1",
            "value": 49.814736308317855,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 49.80988869168475 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLDSAKeyGen/ml_dsa_65/threads:1",
            "value": 82.80116526135403,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 82.7905902192252 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLDSAKeyGen/ml_dsa_87/threads:1",
            "value": 124.56851205587009,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 124.54993210665866 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLDSAParsePubKey/ml_dsa_44/threads:1",
            "value": 4.404600369186252,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 4.403438239481938 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLDSAParsePubKey/ml_dsa_65/threads:1",
            "value": 6.517903306117182,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.517854212308874 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLDSAParsePubKey/ml_dsa_87/threads:1",
            "value": 8.674029699912897,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 8.673372727272989 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLDSASign/ml_dsa_44/threads:1",
            "value": 189.22224489785762,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 189.22243599267108 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLDSASign/ml_dsa_65/threads:1",
            "value": 294.84239970056313,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 294.7747724551866 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLDSASign/ml_dsa_87/threads:1",
            "value": 334.58142007449345,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 334.5786617099794 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLDSAVerify/ml_dsa_44/threads:1",
            "value": 41.5662762711941,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 41.560847881349495 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLDSAVerify/ml_dsa_65/threads:1",
            "value": 65.9001239116007,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 65.89480977898474 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLDSAVerify/ml_dsa_87/threads:1",
            "value": 105.92498170069148,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 105.9162104413329 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLDSAVerifyBadSignature/ml_dsa_44/threads:1",
            "value": 41.56513838341185,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 41.556866694878494 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLDSAVerifyBadSignature/ml_dsa_65/threads:1",
            "value": 65.77247384306544,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 65.77288799464604 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLDSAVerifyBadSignature/ml_dsa_87/threads:1",
            "value": 106.01206047513492,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 106.00757505400418 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLKEM1024DecapOnly/threads:1",
            "value": 36.32089208795579,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 36.32169539296424 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLKEM1024EncapOnly/threads:1",
            "value": 24.046249448357443,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 24.03158123090908 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLKEM1024KeyGenDecap/threads:1",
            "value": 71.43366715220893,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 71.4233871085369 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLKEM1024KeyGenOnly/threads:1",
            "value": 35.85927765605989,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 35.85910989413383 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLKEM1024ParseEncap/threads:1",
            "value": 41.67905508322168,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 41.677238834899185 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLKEM1024ParseOnly/threads:1",
            "value": 18.391220157577003,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 18.371590184105134 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLKEM1024PrivateKeyFromSeedOnly/threads:1",
            "value": 35.89943754521686,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 35.919786263615556 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLKEM768DecapOnly/threads:1",
            "value": 27.7337604519632,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 27.732091949481507 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLKEM768EncapOnly/threads:1",
            "value": 18.514215558499068,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 18.50983807102787 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLKEM768KeyGenDecap/threads:1",
            "value": 52.657581320480745,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 52.648476650568625 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLKEM768KeyGenOnly/threads:1",
            "value": 25.68265083944366,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 25.678776232943495 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLKEM768ParseEncap/threads:1",
            "value": 30.289233250156762,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 30.28747900594696 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLKEM768ParseOnly/threads:1",
            "value": 12.539705855952457,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.531394871436742 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLKEM768PrivateKeyFromSeedOnly/threads:1",
            "value": 25.719156530846202,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 25.739973143656982 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndSign/2048/threads:1",
            "value": 749.86729200009,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 749.7458320003717 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndSign/3072/threads:1",
            "value": 2199.0307954550562,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2198.8651250000853 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndSign/4096/threads:1",
            "value": 4856.6307249984675,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 4856.614199998788 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndVerify/2048/threads:1",
            "value": 19.27905932873603,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 19.27430069100533 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndVerify/3072/threads:1",
            "value": 40.52425827815257,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 40.52376572848118 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndVerify/4096/threads:1",
            "value": 70.54188317756879,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 70.53350790797903 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedRSAParsePrivateKey/2048/threads:1",
            "value": 93.90617810947165,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 93.89902935323218 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedRSAParsePrivateKey/3072/threads:1",
            "value": 178.68139454549234,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 178.6803218182213 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedRSAParsePrivateKey/4096/threads:1",
            "value": 297.4339012158897,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 297.41440121581513 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedRSASign/2048/threads:1",
            "value": 642.1624052288928,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 642.1586470589491 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedRSASign/3072/threads:1",
            "value": 1978.736140000592,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1978.3796199999415 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedRSASign/4096/threads:1",
            "value": 4496.337772727863,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 4495.621272728976 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedRSAVerify/2048/threads:1",
            "value": 16.978956007654997,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 16.977181359765392 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedRSAVerify/3072/threads:1",
            "value": 36.40508506299684,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 36.39898888065988 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedRSAVerify/4096/threads:1",
            "value": 63.29069903228496,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 63.2836048386997 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedRandom/InputSize:1350/threads:1",
            "value": 0.85517276930305,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.8550986509495756 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedRandom/InputSize:16/threads:1",
            "value": 0.6238781972118519,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.6237873193710224 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedRandom/InputSize:16384/threads:1",
            "value": 3.1283313682612977,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.127550299514621 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedRandom/InputSize:256/threads:1",
            "value": 0.6530953908285025,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.6529814698618033 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedRandom/InputSize:8192/threads:1",
            "value": 1.8724268283432999,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.8721240274776796 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedSLHDSA/threads:1",
            "value": 31160.601333321363,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 31158.17316666873 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedSLHDSASign/threads:1",
            "value": 234673.7285000131,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 234652.88549998318 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedSLHDSAVerify/threads:1",
            "value": 226.43899413136995,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 226.4116971832023 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedSPAKE2/threads:1",
            "value": 127.18010078027206,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 127.1709375813465 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedScrypt/(N = 1024, r = 8, p = 16)/threads:1",
            "value": 27558.43149999748,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 27547.129749990516 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedScrypt/(N = 16384, r = 8, p = 1)/threads:1",
            "value": 27581.672333326424,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 27579.927833334263 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedSelfTest",
            "value": 4319.025586957413,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 4317.724217391102 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedSipHash/1350/threads:1",
            "value": 0.0003180022220833094,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.00031797671505939557 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedSipHash/16/threads:1",
            "value": 0.00031328546742317716,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.0003132836178639573 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedSipHash/16384/threads:1",
            "value": 0.0003123783501533523,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.00031234321879329395 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedSipHash/256/threads:1",
            "value": 0.00031205735143391254,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.00031202802805613863 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedSipHash/8192/threads:1",
            "value": 0.0003173520868862465,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.00031732067410395685 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedTrustTokenKeyGen/SpeedTrustTokenKeyGen experiment_v1",
            "value": 992.2975909090025,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 992.233909090773 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedTrustTokenKeyGen/SpeedTrustTokenKeyGen experiment_v2_pmb",
            "value": 992.5461717168191,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 992.5408434340703 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedTrustTokenKeyGen/SpeedTrustTokenKeyGen experiment_v2_voprf",
            "value": 517.0599521276704,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 516.9837659573712 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedX509/threads:1",
            "value": 3.2820525233762377,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.2817965713911192 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginIssueBatch1",
            "value": 630.1292032257913,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 630.0793483869336 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginIssueBatch10",
            "value": 6296.934843753376,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6296.045968751329 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginRedeemBatch1",
            "value": 0.1392936830073123,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.13928168494739876 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginRedeemBatch10",
            "value": 0.13944675486538066,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.13944334964078728 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1FinishIssueBatch1",
            "value": 7131.373535715722,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7130.287928568434 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1FinishIssueBatch10",
            "value": 25359.668250004575,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 25357.830624990638 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1IssueBatch1",
            "value": 6082.445781252943,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6082.312156250325 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1IssueBatch10",
            "value": 21854.8655999939,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 21851.888000003328 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1RedeemBatch1",
            "value": 1717.6442105258168,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1717.4973333333965 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1RedeemBatch10",
            "value": 1717.6952456143306,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1717.6575526320903 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginIssueBatch1",
            "value": 630.4024038461018,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 630.3998942307487 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginIssueBatch10",
            "value": 6296.726437497568,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6296.220968749822 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginRedeemBatch1",
            "value": 0.1312504512887339,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.13123624337733947 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginRedeemBatch10",
            "value": 0.13100616325520603,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.13100249304708234 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbFinishIssueBatch1",
            "value": 7138.39253571434,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7138.000535714386 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbFinishIssueBatch10",
            "value": 25322.575375000153,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 25320.73387499878 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbIssueBatch1",
            "value": 6087.520062500573,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6087.172750000036 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbIssueBatch10",
            "value": 21836.18325000225,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 21835.967874999085 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbRedeemBatch1",
            "value": 1718.3222631579633,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1718.003780701182 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbRedeemBatch10",
            "value": 1718.2601228065566,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1718.2259824564076 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginIssueBatch1",
            "value": 648.2241225164717,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 648.2183642382377 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginIssueBatch10",
            "value": 6479.5910666665195,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6479.596633334002 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginRedeemBatch1",
            "value": 0.12675801684306257,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.12674648908795477 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginRedeemBatch10",
            "value": 0.1266371398361074,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.12660596350537795 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfFinishIssueBatch1",
            "value": 2457.783399999869,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2457.751850000278 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfFinishIssueBatch10",
            "value": 9064.646318181116,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 9063.121318180736 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfIssueBatch1",
            "value": 2359.614329269866,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2359.608146341529 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfIssueBatch10",
            "value": 8937.345636364957,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 8935.308500001196 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfRedeemBatch1",
            "value": 556.4666221592968,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 556.4407414771337 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfRedeemBatch10",
            "value": 556.6075574710464,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 556.5529856321571 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "github-actions[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "github-actions[bot]@users.noreply.github.com"
          },
          "id": "eb1ea33c84719439a302973ea37ab59882b90217",
          "message": "Merge branch 'main' of https://boringssl.googlesource.com/boringssl\n\n* 'main' of https://boringssl.googlesource.com/boringssl:\n  Update version for Bazel Central Repository to 0.20260903.0\n  Add includable-only builders for LTO.",
          "timestamp": "2026-09-03T14:38:09Z",
          "url": "https://github.com/divVerent/boringssl/commit/eb1ea33c84719439a302973ea37ab59882b90217"
        },
        "date": 1788447232627,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:1350",
            "value": 2.317115482864141,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.3169050592498586 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 2.3099243765748954,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.3097483928711093 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:16",
            "value": 0.517077493133593,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5170785984634751 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.5143146744731456,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.514282726145293 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:16384",
            "value": 12.728734139369838,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.726470098796861 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 12.949600304763374,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.948676162713147 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 13.314656143921292,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.312900475216207 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 12.72491420041038,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.72273617601034 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:256",
            "value": 1.560039273413906,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.5597678908692658 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 1.5444433673314528,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.5442846948114606 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:8192",
            "value": 7.0583109177200445,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.0582996619678 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 7.155285459049291,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.154948698314013 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 7.31453321157173,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.31416762338182 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 7.0471836639005545,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.046378038225893 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:1350",
            "value": 2.443224911512065,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.4431161448727514 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 2.439207654824127,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.4391940805003856 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:16",
            "value": 0.627021292583515,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.6270219928502839 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.6248515136464904,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.624783501445458 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:16384",
            "value": 13.451762640842322,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.450213107996722 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 13.694889564118977,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.693451732328494 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 14.038614806865379,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 14.037888054364695 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 13.429999519232183,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.429471634616556 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:256",
            "value": 1.6404761777298824,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.6404627693387828 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 1.6330263604588175,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.6328438009653472 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:8192",
            "value": 7.452128713626243,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.452098168833636 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 7.559049810205233,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.558971918816331 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 7.714050940129637,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.714006647786628 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 7.453657872731308,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.45332490686274 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:1350",
            "value": 2.1968832784240053,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.1967369282149245 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 2.2060556404841827,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.2059483161721727 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:16",
            "value": 0.14981059188037055,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.1498102356751377 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.15501636593296506,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.15500569836283698 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:16384",
            "value": 24.542475118782363,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 24.541458739690114 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 24.919138895955605,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 24.915514754508273 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 25.466027936587302,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 25.464863305614905 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 24.539041291291024,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 24.535376000995747 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:256",
            "value": 0.5188135720932724,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5187846691976706 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.5251293247190212,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5251109830308247 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:8192",
            "value": 12.34606596039516,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.34542748139474 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 12.529476461558959,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.528970257131276 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 12.762204160148029,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.761252086594435 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 12.33208311328849,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.330641833270404 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:1350",
            "value": 2.1957839720481678,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.1957004725963745 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 2.203315766952981,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.2033148661122333 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:16",
            "value": 0.14908463970980676,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.14907949613328295 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.15479258011299443,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.15478512028954516 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:16384",
            "value": 24.542765015024123,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 24.54135635635472 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 24.913019431044205,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 24.911303276597586 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 25.461049844230182,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 25.458795560733954 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 24.537050037533337,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 24.536941080809008 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:256",
            "value": 0.5190832454937664,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5190643648267569 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.526230946220356,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5262103723703113 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:8192",
            "value": 12.34663645505881,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.34617460716817 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 12.522444153354026,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.522384281150273 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 12.767277127245652,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.767189110074225 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 12.333006541702217,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.332337526730951 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:1350",
            "value": 2.200303558958966,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.199920610429211 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 2.2081542335522486,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.207940150186488 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:16",
            "value": 0.15116083399555197,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.15115916035918991 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.1571077800489244,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.1570964706825276 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:16384",
            "value": 24.532240115125123,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 24.53220032532582 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 24.93268320610844,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 24.932449236636543 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 25.45530072746269,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 25.45341114575465 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 24.548668299423415,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 24.544361969354917 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:256",
            "value": 0.5218149871680913,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5218120667255396 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.5279136358739395,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5279128629141291 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:8192",
            "value": 12.349785210823372,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.347531466325051 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 12.524237851012611,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.522981536099447 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 12.76370847964824,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.763639029783675 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 12.343052628252451,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.340854090508083 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:1350",
            "value": 1.2577786485482567,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.2575429744308748 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 1.2728394477577836,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.2727348068444209 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:16",
            "value": 0.22869552249954342,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.22867953642725034 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.2350950361340216,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.2350924794410263 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:16384",
            "value": 12.468752579944134,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.467722257612188 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 12.799589514238438,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.799002024028509 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 13.235189373475027,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.235158925196208 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 12.476916698508992,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.47578798879054 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:256",
            "value": 0.4189075169170685,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.4188921080478535 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.4304058255931368,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.43033193256986396 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:8192",
            "value": 6.3526402059851,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.352102863063951 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 6.50931413195026,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.5088717693186595 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 6.704889267987032,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.704894299695316 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 6.36088485497393,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.36077431704805 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:1350",
            "value": 1.957347338600084,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.9573509795705306 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 1.9690694344021356,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.9688398911389366 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:16",
            "value": 0.16288891585887952,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.16286114316116146 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.175018809004324,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.17500877145957697 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:16384",
            "value": 21.553469354133547,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 21.54837357205175 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 21.79155900000751,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 21.788525666663205 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 22.229811040570176,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 22.22537984583522 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 21.55968149857715,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 21.55831872115744 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:256",
            "value": 0.4830192283061213,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.48291978148641956 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.4932591145179055,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.49325519391628553 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:8192",
            "value": 10.84629945814471,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 10.846299347565465 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 10.973126846470178,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 10.97249585944191 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 11.163900661121703,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 11.163671606062248 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 10.858070066888104,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 10.857271627648641 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:1350",
            "value": 0.28486822386554966,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.2848464361317268 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 0.29550375613805463,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.2954845906579297 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:16",
            "value": 0.08849338806269222,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.08847577630705267 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.09426741090090199,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.09425963090941769 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:16384",
            "value": 2.0736580639127444,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.0735759060443364 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 2.2345071580410716,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.2340931110907163 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 2.8439441594954578,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.843957387927089 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 2.058102754169533,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.057935288730001 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:256",
            "value": 0.11189864337688757,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.111891503375806 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.11617684818519114,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.11616972718322541 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:8192",
            "value": 1.072524308148632,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.0725204768557832 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 1.1563505825913265,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.156131679704737 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 1.431027496022436,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.4309603759544776 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 1.0683912150294188,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.0682578445122446 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:1350",
            "value": 0.5101240274596158,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5101041944039456 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 0.5212096435606768,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5211897627325421 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:16",
            "value": 0.1745071550786899,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.17450642967902946 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.17956206492288093,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.17956114326143063 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:16384",
            "value": 3.8738224914039576,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.873678793029299 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 4.220044549133696,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 4.219351983307673 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 4.491206896550219,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 4.490707126130478 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 3.880796163115724,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.8804458450238846 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:256",
            "value": 0.2436770586586198,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.24367778541181728 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.2507676929325723,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.25074768062049285 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:8192",
            "value": 2.018084864365661,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.017840957665608 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 2.186125584203877,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.1859905968387183 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 2.3207327321666185,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.3202798380612055 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 2.0239351609817637,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.023653783918697 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:1350",
            "value": 0.3007299683224297,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.30068472208577063 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 0.311733461161679,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.3117042772885506 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:16",
            "value": 0.0927623373440786,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.09275216259539765 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.09694749089657419,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.09694219844973112 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:16384",
            "value": 2.205312404269571,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.2051553856202943 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 2.373358836259543,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.373340088994956 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 3.0102242407298574,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.009978634867618 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 2.163179023268337,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.163009942050605 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:256",
            "value": 0.11451882484282179,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.1145041712204002 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.12019462689746141,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.12018119077246858 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:8192",
            "value": 1.1404754736744898,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.1403275186737156 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 1.228675892353364,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.2286677874664138 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 1.5098016118263953,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.5096782791654273 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 1.1412748201185043,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.1410808273960216 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:1350",
            "value": 2.3771449190981078,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.377145452781322 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 2.3667636442495867,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.3666223825940405 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:16",
            "value": 0.5187477823267324,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5187074057489924 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.516357879141231,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5163545442082131 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:16384",
            "value": 13.415615484668717,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.41495516155453 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 13.704877623851823,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.69303820318982 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 14.081028850298082,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 14.080992608016908 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 13.404261116427984,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.402936790257723 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:256",
            "value": 1.5729923062159714,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.5726027783992065 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 1.556762488704945,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.5567503923777393 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:8192",
            "value": 7.398574851201549,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.398252994802545 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 7.529030584089067,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.529057872144608 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 7.702100777627175,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.702123046107114 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 7.391160867600102,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.390836948333769 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:1350",
            "value": 1.296611205052239,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.2965144785859586 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 1.311353304318533,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.3112814261800032 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:16",
            "value": 0.23381704567378203,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.23380510998783213 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.2404241580286893,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.24039984332498981 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:16384",
            "value": 12.818431223851821,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.81731230387237 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 13.226209844914049,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.226141469993161 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 13.71278316540393,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.712706129303138 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 12.829625555846466,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.829604041328917 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:256",
            "value": 0.426824728663981,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.4267772819278073 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.43821515299311387,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.4382124856226607 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:8192",
            "value": 6.517086549983534,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.516314321840973 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 6.719858667214952,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.719820081234732 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 6.936628653316893,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.935709822375715 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 6.5363167666646405,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.535459633333099 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:1350",
            "value": 2.444004000897675,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.4436149790608725 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 2.458257539234663,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.458121494036193 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:16",
            "value": 0.19411266785552656,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.19409616403578925 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.20622947483572657,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.20622382398697417 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:16384",
            "value": 27.027211766316192,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 27.022729953155004 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 27.342095178376514,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 27.33980643812804 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 27.82509377664126,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 27.825147627162853 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 27.0330271574338,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 27.032972291137817 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:256",
            "value": 0.5943062298641169,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5942812418472083 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.6056563122534311,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.6056341980227732 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:8192",
            "value": 13.594961181199958,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.594134410095984 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 13.756679924245422,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.755294121770277 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 13.976161465015489,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.973347584436278 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 13.601185347222136,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.599540208330847 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:1350",
            "value": 0.31679476626278374,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.3167954363438848 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 0.3261467130332863,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.32612726431288397 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:16",
            "value": 0.09529446467776659,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.09528579623123372 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.09993951504915025,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.0999304280985944 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:16384",
            "value": 2.3348513083997986,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.33484210777897 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 2.533766231231096,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.5335882146299453 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 3.1944963977403082,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.194489728694199 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 2.284686855640154,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.28446903480413 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:256",
            "value": 0.1181678266823912,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.11816172708893521 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.12337196489379576,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.12337145836110652 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:8192",
            "value": 1.1790940798946643,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.1788592670347 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 1.3132093953195725,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.3131626857500232 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 1.595563767738594,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.5953513823948642 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 1.1843359660441746,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.1841992982117961 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:1350",
            "value": 0.5722917479260583,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5722905224858146 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 0.5781400755745598,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5781030289505562 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:16",
            "value": 0.1950500305148493,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.19504838946948216 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.19898471302545187,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.19895542164994648 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:16384",
            "value": 4.402475617434279,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 4.402104615593187 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 4.809897528927385,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 4.80986641988513 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 5.095537605107261,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 5.094525485310428 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 4.411121541991699,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 4.410937249785775 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:256",
            "value": 0.2745735213234712,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.2745568081691501 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.2778920288191449,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.27784026886154034 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:8192",
            "value": 2.2917628497844262,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.2917143894159815 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 2.4837876583406486,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.4835417154193546 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 2.617725697042313,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.6176109790621798 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 2.2963309991090184,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.2959871305445407 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:1350",
            "value": 0.7497344390577293,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.7496520441271788 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 0.7723481520841062,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.772344625496989 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:16",
            "value": 0.17605106985062732,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.17604373396492856 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.18863931590073169,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.188597592682119 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:16384",
            "value": 6.924858397674283,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.924208507473457 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 12.048899963110873,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.046784739302991 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 12.370516698294304,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.36952454143261 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 6.947852407710563,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.946817376768418 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:256",
            "value": 0.27492106632684854,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.27491906481901596 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.2859566588566401,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.285930564482222 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:8192",
            "value": 3.565654640299436,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.565626594932276 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 6.065619596185563,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.065138765019443 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 6.228645116218511,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.228241489902178 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 3.5796283452779605,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.5781857999414064 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:1350",
            "value": 46.40764978702973,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 46.40354708944858 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 46.248101847478566,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 46.24598792040886 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:16",
            "value": 1.8303786503002673,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.8301675167682459 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 1.826331585342365,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.8261903813805411 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:16384",
            "value": 537.4930686812249,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 537.348678571354 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 537.1266830599936,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 537.0458797814724 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 536.9691346154318,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 536.9637967031073 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 535.7922404369199,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 535.7733142075251 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:256",
            "value": 10.609752777773558,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 10.60886388889162 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 10.566936800768586,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 10.564940350688556 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:8192",
            "value": 270.17526721775147,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 270.1736129475981 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 269.3675013775714,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 269.3387217631063 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 269.6243746556969,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 269.60261707990077 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 269.2031616438477,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 269.16627123274674 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:1350",
            "value": 0.8466156338443553,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.8466119797059004 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 0.8711781736303943,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.8711344995738 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:16",
            "value": 0.2795272572987597,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.2795286521100497 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.2843503094419226,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.2843497707783982 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:16384",
            "value": 7.04586002300027,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.045831488534761 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 12.175978723404947,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.175038198328522 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 12.500346576386308,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.498782830860122 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 7.044578599641656,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.04390201077197 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:256",
            "value": 0.37507937127577196,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.3750474317907059 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.38735393815395647,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.3873132709526402 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:8192",
            "value": 3.6720235005997437,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.671110585551836 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 6.192026362374409,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.19174993678071 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 6.360991668828748,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.3587168373955665 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 3.6732169627085725,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.67318793420793 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:1350",
            "value": 2.1477983591836,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.147711652208317 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 2.148145633407684,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.1476171070512526 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:16",
            "value": 0.21011440915654617,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.21007948351248915 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.20989903356852477,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.20988807462055054 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:16384",
            "value": 23.57498268814518,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 23.57075547006182 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 23.774416929426565,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 23.774348775168622 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 23.925283081052683,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 23.925353149415255 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 23.57057062078677,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 23.56956352261462 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:256",
            "value": 0.5795639101075271,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5795605810868008 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.57833140154971,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5782990601337585 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:8192",
            "value": 11.890141618145325,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 11.888544759825376 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 11.973778924860609,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 11.973350397065564 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 12.052378424869701,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.052322766930153 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 11.888948192186277,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 11.88823501577326 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:1350",
            "value": 2.2165687651216857,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.2164923682254947 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 2.2156243585974384,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.215406745179558 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:16",
            "value": 0.215637125119749,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.21560652838676403 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.21504328480479792,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.21502595463094165 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:16384",
            "value": 24.209467566223157,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 24.208305149790178 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 24.433160678647493,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 24.43143163672832 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 24.596064398688448,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 24.59390421793055 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 24.215937716262967,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 24.2157121848724 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:256",
            "value": 0.593218628039917,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5932159058492061 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.5917899938959781,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5917676060165749 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:8192",
            "value": 12.213319416744058,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.21326190179324 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 12.309459444161764,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.307818221828231 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 12.375199861255586,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.373851160445485 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 12.213835702706456,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.212299476243462 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:1350",
            "value": 2.18618788290484,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.1860979236748284 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 2.191263080810569,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.1912382831722335 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:16",
            "value": 0.14442009243366302,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.1444131887107054 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.14256985520816903,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.142561428895508 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:16384",
            "value": 24.575300551227766,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 24.575049361071365 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 24.96149363381821,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 24.961375986755087 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 25.46157502594853,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 25.45964226375594 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 24.58314317954023,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 24.5805142928801 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:256",
            "value": 0.5160759962123805,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5160376101423054 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.5140752407349064,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5140452864194074 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:8192",
            "value": 12.366123007837535,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.363289653428472 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 12.539558282205858,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.538257285275133 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 12.75977224824862,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.759203161592081 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 12.375682087855866,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.374788121689772 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:1350",
            "value": 2.187208103171163,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.186968159747516 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 2.1918297104687734,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.191819422724608 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:16",
            "value": 0.14453903564712178,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.14453849964978663 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.14344248615575436,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.1434333467995799 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:16384",
            "value": 24.597958395988687,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 24.5930352130322 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 24.96342347981032,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 24.963109478790507 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 25.456510638297303,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 25.45600557861551 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 24.562633926321872,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 24.559852167377965 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:256",
            "value": 0.5156948697588069,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5156492302270894 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.5143503166983538,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5143464039243592 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:8192",
            "value": 12.377377931296573,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.376458232983152 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 12.53609435288794,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.535996230994044 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 12.760792171420572,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.759229646997495 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 12.372238758029743,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.370401876808822 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:1350",
            "value": 2.1864364116159356,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.186168017636675 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 2.1932671928721676,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.193164281248845 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:16",
            "value": 0.1433604248777665,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.14334135331311906 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.14275526777530068,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.1427454521167101 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:16384",
            "value": 24.58060423452938,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 24.57967476823564 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 24.968021927585497,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 24.96696749107912 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 25.460306753240566,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 25.45930363636119 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 24.58801478696346,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 24.585329197997208 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:256",
            "value": 0.5153242632114776,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5152994085730283 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.5135871262369449,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5135831284177101 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:8192",
            "value": 12.361442465060385,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.360443724036921 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 12.539124472845256,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.539104920127524 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 12.761395021493914,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.760869216732065 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 12.37112182002394,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.371091254272264 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:1350",
            "value": 1.2573414495022093,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.2571793995870677 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 1.2592140267653045,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.2592055420569088 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:16",
            "value": 0.22609306961966177,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.2260830656301313 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.22341431091382935,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.22340494935707467 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:16384",
            "value": 12.462285168679198,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.46219809039058 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 12.781021634304196,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.78074468917076 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 13.211704594442725,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.210067299919169 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 12.465063898774078,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.464480353508618 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:256",
            "value": 0.41507563437104444,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.4150761924567428 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.4135705815028132,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.41355890203264245 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:8192",
            "value": 6.34481362459401,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.344719320388975 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 6.491689902733603,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.490742837292821 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 6.683311191435912,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.68320275523425 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 6.347854236852493,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.347258097952652 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:1350",
            "value": 2.184587482981251,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.18436143784992 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 2.2198215064131848,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.21949312868569 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:16",
            "value": 0.1554151391159754,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.15541489484486046 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.1548002700957579,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.1547914231160821 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:16384",
            "value": 24.402236048827458,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 24.398587443938723 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 24.78336647296792,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 24.78027286507827 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 25.32042337002651,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 25.320039514523103 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 24.407269797651317,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 24.406133025231536 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:256",
            "value": 0.5175667693222905,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5175156500952471 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.518187503969009,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5181257408190966 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:8192",
            "value": 12.271011316738704,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.2706257346555 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 12.44156863492843,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.439704825395 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 12.966189449797938,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.964667186618746 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 12.268230624529119,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.267836217701491 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:1350",
            "value": 0.29098487354189934,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.29098273607539704 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 0.3030762222504037,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.30307710709081076 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:16",
            "value": 0.08365914648178509,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.08364093200081857 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.082443560378198,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.08243895437247127 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:16384",
            "value": 2.0660637137539535,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.0659243593163152 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 2.4272485844412137,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.4270927621862617 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 2.9830860392572567,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.983071015326771 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 2.094044257614839,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.094035023114961 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:256",
            "value": 0.10734776097099172,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.10733599724682223 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.10614022096518808,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.1061398224058611 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:8192",
            "value": 1.0783706819214742,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.078273770549469 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 1.2479405966940025,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.247722651548626 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 1.5005922826170868,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.5003650746722488 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 1.0691470373120617,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.0690578946792433 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:1350",
            "value": 0.5633475414461937,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5633167144782202 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 0.5579218287746184,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5579167352801228 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:16",
            "value": 0.1280805291152898,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.1280415490287218 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.12340500270859804,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.12340374982678241 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:16384",
            "value": 4.5714929117711645,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 4.571313467636015 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 4.810827894195129,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 4.810132772242797 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 5.164577459560601,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 5.163958764252962 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 4.574788807568692,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 4.574659612157325 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:256",
            "value": 0.22683827018614938,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.2268095793634693 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.2244987978875815,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.22448873005325304 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:8192",
            "value": 2.35672440273037,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.35671536557231 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 2.466593478151209,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.466155051038366 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 2.6195459463085458,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.6193944026839584 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 2.3548930858348536,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.3546886586562605 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:1350",
            "value": 0.30501930445890124,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.3050180446670234 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 0.30690427093147055,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.3068889130013567 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:16",
            "value": 0.08828937276719821,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.08827917331565634 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.08694712949187491,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.08694293907613354 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:16384",
            "value": 2.215014915768678,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.2150101468594756 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 2.5750668553610274,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.5747451581621563 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 3.1277584609501394,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.127604142124791 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 2.1789836919207,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.178812417028992 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:256",
            "value": 0.11160517281490892,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.11160041423375007 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.11143718096141897,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.11141754089445818 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:8192",
            "value": 1.146972467771602,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.1467660738947203 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 1.3193801101625497,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.3193786256459017 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 1.5547165774977993,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.554711754524119 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 1.1302380834275856,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.1298190826660917 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:1350",
            "value": 2.5764188261287173,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.576116650442872 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 2.5777290368562054,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.577533609672916 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:16",
            "value": 0.22506015532370785,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.22498188919964024 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.2245897375177091,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.22456366203106354 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:16384",
            "value": 28.677342159156705,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 28.67587521941467 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 28.88857748969364,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 28.88818267529522 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 29.03618257261865,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 29.034438055719402 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 28.67929654567427,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 28.679341627632738 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:256",
            "value": 0.6694593581354302,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.669416028190748 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.6685606366165348,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.6685239071783451 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:8192",
            "value": 14.454135894406406,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 14.452465639287151 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 14.535571630048391,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 14.535482333733526 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 14.607268319927442,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 14.606501563901674 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 14.445508329645216,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 14.444547103057776 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:1350",
            "value": 1.2970568350188747,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.296897289539437 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 1.299067582468554,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.2989750767225945 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:16",
            "value": 0.2306867046836863,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.23068623377656308 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.22690165253224975,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.22687235184479623 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:16384",
            "value": 12.810670653590211,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.807294117646876 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 13.194381960364115,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.192833692870067 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 13.68507806115557,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.684240101451532 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 12.810162728457254,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.808889882507467 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:256",
            "value": 0.422180951228723,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.4221626884503504 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.4218922198813148,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.4218904677959651 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:8192",
            "value": 6.511564974752522,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.5115247807609435 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 6.7005704821757295,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.700002526976975 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 6.917637896967103,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.916138884968186 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 6.516261814432532,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.516218550317722 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:1350",
            "value": 2.672585798413945,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.67215983260207 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 2.7819547025341778,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.7817867250577986 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:16",
            "value": 0.18611132364996236,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.18611059530667715 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.18563084436589444,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.1856304593765464 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:16384",
            "value": 29.878624428174266,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 29.876427111924944 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 30.364763206954763,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 30.364549409556226 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 33.04448632618583,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 33.042782372321426 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 29.872185405242572,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 29.87198324192649 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:256",
            "value": 0.627701020140601,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.6276574273773063 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.6276357361572743,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.6275890825581055 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:8192",
            "value": 15.014282795033974,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.012771621002951 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 15.249137667597932,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.249055191768628 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 15.479028566911524,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.477112136994407 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 15.0137036469521,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.013282485440744 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:1350",
            "value": 0.3226668853082887,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.3226521843935911 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 0.3242558130657323,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.32424380022635196 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:16",
            "value": 0.09267985896974515,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.09267932123871223 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.09326006821654856,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.09325912933516117 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:16384",
            "value": 2.40876321297824,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.4086592930876973 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 2.7560104096324927,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.755687809476086 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 3.3308583237149776,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.3306195939968526 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 2.372176130401995,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.371703996947306 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:256",
            "value": 0.11567616747660873,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.11565846741575803 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.11577540315110094,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.1157664212352589 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:8192",
            "value": 1.2314814869007273,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.2313863830111322 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 1.4108765436497177,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.4108512399048807 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 1.655685458190853,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.6555369063064649 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 1.2069913357223594,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.2067758762458536 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:1350",
            "value": 0.6372180527447908,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.6371500979289575 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 0.6325870817271857,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.6325853260340181 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:16",
            "value": 0.1435780023930377,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.14357317390054378 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.13989702837776796,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.1398736782902002 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:16384",
            "value": 5.228704450845564,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 5.228276176751679 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 5.532091439689837,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 5.53182729938623 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 5.94420107311725,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 5.944192494241203 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 5.226504902223092,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 5.226466883359414 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:256",
            "value": 0.2494670187920681,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.24946173818259734 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.2495660189066425,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.24954647295733984 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:8192",
            "value": 2.694310593173844,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.6941849621376877 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 2.8366249674639734,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.836614584840162 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 3.0086057482901123,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.0085986626169805 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 2.699627822691549,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.699340047393153 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:1350",
            "value": 0.8070538038200947,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.8070184103583016 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 0.8075926548641352,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.8074863308939244 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:16",
            "value": 0.17449975379479718,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.1744906638262994 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.17218858278990998,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.17218001012582232 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:16384",
            "value": 6.946847916667655,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.946809992939467 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 11.918476982097442,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 11.917249360612875 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 12.251803256876503,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.251036940823912 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 6.969935377289865,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.9695685306234525 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:256",
            "value": 0.2754565587782996,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.2754554257245359 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.2737963438227159,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.27378037355741763 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:8192",
            "value": 3.583211299683993,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.5828393027702106 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 5.9955022642450135,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 5.994757695366818 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 6.170232382815576,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.169809002589152 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 3.582661969011935,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.5822658386670385 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:1350",
            "value": 46.04124811141639,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 46.04131279510402 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 46.09443483357194,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 46.09096202533061 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:16",
            "value": 1.5319152473516975,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.5318244007631074 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 1.5323469267137357,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.5322711132886584 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:16384",
            "value": 546.9617569831332,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 546.8877234635677 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 547.878418994423,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 547.8728715084317 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 547.9303286519139,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 547.8910786515305 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 547.7069189945134,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 547.6863519553826 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:256",
            "value": 9.567938498253666,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 9.56788892675946 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 9.548425916996589,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 9.54718252895764 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:8192",
            "value": 273.9736703910297,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 273.97080307266936 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 273.8951446628806,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 273.8662205056889 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 274.1036922004588,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 274.0649359330935 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 273.7282136870197,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 273.7002695530111 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:1350",
            "value": 0.9153031336986347,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.9152149320843499 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 0.915656649616588,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.9155843009688505 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:16",
            "value": 0.28227879713402404,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.2822603897094778 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.2829779889460837,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.28293830324547853 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:16384",
            "value": 7.094065158047876,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.094001580460237 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 12.08092653036123,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.080457199164012 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 12.391311828637209,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.389813155566143 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 7.076805881076784,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.0767868923613495 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:256",
            "value": 0.38536356350053247,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.3853603830666368 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.3873242095942871,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.3872938048166234 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:8192",
            "value": 3.708038676430379,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.7072944618520003 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 6.133187867970717,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.132367875485597 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 6.288097316728381,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.287775259983091 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 3.6932407007230728,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.692867726501519 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAESBlockDecrypt<128>/threads:1",
            "value": 0.015882155601345246,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.015880065991101044 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAESBlockDecrypt<256>/threads:1",
            "value": 0.020859525428648728,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.020858654171557894 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAESBlockDecryptSetup<128>/threads:1",
            "value": 0.02678710488296305,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.02678392218443994 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAESBlockDecryptSetup<256>/threads:1",
            "value": 0.030864365805316523,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.030862422954564435 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAESBlockEncrypt<128>/threads:1",
            "value": 0.01587828515946236,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.01587749424650887 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAESBlockEncrypt<256>/threads:1",
            "value": 0.02086974556939137,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.020869665399066362 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAESBlockEncryptSetup<128>/threads:1",
            "value": 0.016617943689412537,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.016617927853375566 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAESBlockEncryptSetup<256>/threads:1",
            "value": 0.019523082856679606,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.019521049550016042 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedBase64/threads:1",
            "value": 2.0934402679417365,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.0933394060923867 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedCurve25519ArbitraryPointMultiply/threads:1",
            "value": 35.03976763336862,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 35.032128535612934 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedCurve25519BasePointMultiply/threads:1",
            "value": 14.837193309110983,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 14.836794050863839 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedECDHComputeKey/p224/threads:1",
            "value": 195.99475449101243,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 195.98013473052572 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedECDHComputeKey/p256/threads:1",
            "value": 50.962736472405304,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 50.95757492197116 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedECDHComputeKey/p384/threads:1",
            "value": 510.27000000007195,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 510.2668020832887 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedECDHComputeKey/p521/threads:1",
            "value": 1211.9355617285012,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1211.905703703598 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedECDHEphemeral/p224/threads:1",
            "value": 395.5164516127748,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 395.47886290316757 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedECDHEphemeral/p256/threads:1",
            "value": 64.2231739842621,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 64.22083322412536 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedECDHEphemeral/p384/threads:1",
            "value": 1027.0112736840904,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1027.002457894953 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedECDHEphemeral/p521/threads:1",
            "value": 2417.8542375011602,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2417.4540250008645 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedECDHKeyGen/p224/threads:1",
            "value": 179.93048809516858,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 179.9293690475936 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedECDHKeyGen/p256/threads:1",
            "value": 8.552698617551766,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 8.55267306851147 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedECDHKeyGen/p384/threads:1",
            "value": 475.08205825242703,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 475.01281553404607 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedECDHKeyGen/p521/threads:1",
            "value": 1115.3376931819605,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1115.2681647727486 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedECDSASign/p224/threads:1",
            "value": 209.47765557945849,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 209.45904077255705 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedECDSASign/p256/threads:1",
            "value": 19.37475959256493,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 19.371746340981378 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedECDSASign/p384/threads:1",
            "value": 547.0736899441586,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 547.0411536314755 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedECDSASign/p521/threads:1",
            "value": 1306.3584133332522,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1306.1375466664533 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedECDSAVerify/p224/threads:1",
            "value": 214.4650372826574,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 214.41962280816838 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedECDSAVerify/p256/threads:1",
            "value": 59.66595161346949,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 59.631421789431464 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedECDSAVerify/p384/threads:1",
            "value": 562.2275828563618,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 562.1721657127766 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedECDSAVerify/p521/threads:1",
            "value": 1348.1275068470463,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1348.0384657531326 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedEd25519/threads:1",
            "value": 15.75926092565812,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.75864473471774 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedEd25519Sign/threads:1",
            "value": 15.908817716344297,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.908714371050433 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedEd25519Verify/threads:1",
            "value": 56.755018082656875,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 56.752580941443206 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHRSSDecap/threads:1",
            "value": 27.811664191869433,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 27.810431039400278 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHRSSEncap/threads:1",
            "value": 9.183273375221912,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 9.183002203880818 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHRSSGenerate/threads:1",
            "value": 138.74158557286188,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 138.74186562941193 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:1350/threads:1",
            "value": 2.2800290124166445,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.2800159568298755 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:16/threads:1",
            "value": 0.23631079737382138,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.23629765908833633 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:16384/threads:1",
            "value": 26.051538369298704,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 26.050150279773327 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:256/threads:1",
            "value": 0.44199271203401347,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.44195806883553057 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:8192/threads:1",
            "value": 13.04110720468899,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.040467705420577 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:1350/threads:1",
            "value": 0.8294091039823916,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.8293768314553128 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:16/threads:1",
            "value": 0.05798152552261092,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.0579813309301204 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:16384/threads:1",
            "value": 9.678066448803845,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 9.6780753119421 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:256/threads:1",
            "value": 0.18800455609019456,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.18800294157670877 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:8192/threads:1",
            "value": 4.8588635079541,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 4.858379887991258 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:1350/threads:1",
            "value": 0.8921659080149416,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.8921060367429992 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:16/threads:1",
            "value": 0.0610442931251143,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.061042900179267535 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:16384/threads:1",
            "value": 10.330296544092388,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 10.330014118640838 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:256/threads:1",
            "value": 0.20847622257038498,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.20844324118028884 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:8192/threads:1",
            "value": 5.190640840218568,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 5.189542832167765 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:1350/threads:1",
            "value": 2.649093915415974,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.6489643107912206 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:16/threads:1",
            "value": 0.2731455446785214,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.27313206383252175 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:16384/threads:1",
            "value": 30.591387257947794,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 30.58387039350411 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:256/threads:1",
            "value": 0.7467276062706992,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.7466248482396717 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:8192/threads:1",
            "value": 15.454053360621227,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.45247945853004 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHashToCurve/hash-to-curve P256_XMD:SHA-256_SSWU_RO_/threads:1",
            "value": 28.721547717235815,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 28.720386745214693 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHashToCurve/hash-to-curve P384_XMD:SHA-384_SSWU_RO_/threads:1",
            "value": 76.64682006246474,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 76.64702185792183 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHashToCurve/hash-to-scalar P384_XMD:SHA-512/threads:1",
            "value": 1.3043400541377954,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.3041893369417403 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLDSAKeyGen/ml_dsa_44/threads:1",
            "value": 49.75621606508131,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 49.754085155074876 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLDSAKeyGen/ml_dsa_65/threads:1",
            "value": 82.62749284512844,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 82.62172053871258 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLDSAKeyGen/ml_dsa_87/threads:1",
            "value": 124.56742784804733,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 124.54563354430165 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLDSAParsePubKey/ml_dsa_44/threads:1",
            "value": 4.395348534346472,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 4.394760774220431 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLDSAParsePubKey/ml_dsa_65/threads:1",
            "value": 6.5216864333365265,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.521655500002528 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLDSAParsePubKey/ml_dsa_87/threads:1",
            "value": 8.655973976222915,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 8.652604887713943 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLDSASign/ml_dsa_44/threads:1",
            "value": 191.97634608699246,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 191.9755895651969 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLDSASign/ml_dsa_65/threads:1",
            "value": 293.5001144577365,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 293.49998042172535 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLDSASign/ml_dsa_87/threads:1",
            "value": 349.6403146719921,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 349.62488416988907 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLDSAVerify/ml_dsa_44/threads:1",
            "value": 41.51263595933197,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 41.51066793731762 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLDSAVerify/ml_dsa_65/threads:1",
            "value": 65.69672800537316,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 65.6963012088838 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLDSAVerify/ml_dsa_87/threads:1",
            "value": 105.62878417655614,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 105.61272174381165 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLDSAVerifyBadSignature/ml_dsa_44/threads:1",
            "value": 41.44416624311924,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 41.439976916578715 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLDSAVerifyBadSignature/ml_dsa_65/threads:1",
            "value": 65.72200100740204,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 65.71029650773332 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLDSAVerifyBadSignature/ml_dsa_87/threads:1",
            "value": 105.81066899887783,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 105.81031808398589 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLKEM1024DecapOnly/threads:1",
            "value": 36.31918604235969,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 36.320471307021684 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLKEM1024EncapOnly/threads:1",
            "value": 24.06291625799101,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 24.049128984967787 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLKEM1024KeyGenDecap/threads:1",
            "value": 71.4432691187174,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 71.43962636560133 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLKEM1024KeyGenOnly/threads:1",
            "value": 35.828728102182716,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 35.82865456204167 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLKEM1024ParseEncap/threads:1",
            "value": 41.69389481468073,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 41.704591797981195 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLKEM1024ParseOnly/threads:1",
            "value": 18.381592060042816,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 18.36327789466691 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLKEM1024PrivateKeyFromSeedOnly/threads:1",
            "value": 35.89692220107865,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 35.91231963324022 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLKEM768DecapOnly/threads:1",
            "value": 27.717403644412144,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 27.71764283782445 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLKEM768EncapOnly/threads:1",
            "value": 18.510751463932625,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 18.50409631742341 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLKEM768KeyGenDecap/threads:1",
            "value": 52.68761424730428,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 52.68134865590373 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLKEM768KeyGenOnly/threads:1",
            "value": 25.644675372155483,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 25.641612692608295 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLKEM768ParseEncap/threads:1",
            "value": 30.248965522304815,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 30.24736178101991 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLKEM768ParseOnly/threads:1",
            "value": 12.536342983026035,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.530524539867718 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLKEM768PrivateKeyFromSeedOnly/threads:1",
            "value": 25.697356918441972,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 25.718752559553643 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndSign/2048/threads:1",
            "value": 746.3333953487369,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 746.2450930232646 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndSign/3072/threads:1",
            "value": 2178.902488889081,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2178.9028777776466 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndSign/4096/threads:1",
            "value": 4824.517299999798,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 4823.731649999985 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndVerify/2048/threads:1",
            "value": 19.314837928320514,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 19.31262111066936 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndVerify/3072/threads:1",
            "value": 40.485075857794094,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 40.483089086409876 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndVerify/4096/threads:1",
            "value": 70.52121294958911,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 70.51557302157514 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedRSAParsePrivateKey/2048/threads:1",
            "value": 96.1724916256513,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 96.16742068966667 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedRSAParsePrivateKey/3072/threads:1",
            "value": 178.42637727271307,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 178.41795909085724 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedRSAParsePrivateKey/4096/threads:1",
            "value": 296.91078378385316,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 296.8916951952162 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedRSASign/2048/threads:1",
            "value": 642.711812499828,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 642.7073980264565 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedRSASign/3072/threads:1",
            "value": 1977.8904900010734,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1977.4575200005988 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedRSASign/4096/threads:1",
            "value": 4492.882204547496,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 4492.664090909153 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedRSAVerify/2048/threads:1",
            "value": 16.929667788137312,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 16.92953519668979 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedRSAVerify/3072/threads:1",
            "value": 36.35749312267516,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 36.35748345725477 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedRSAVerify/4096/threads:1",
            "value": 63.28981040049545,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 63.28516860464164 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedRandom/InputSize:1350/threads:1",
            "value": 0.8461061216321756,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.8460541438674071 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedRandom/InputSize:16/threads:1",
            "value": 0.6194749301949448,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.6194335872849414 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedRandom/InputSize:16384/threads:1",
            "value": 3.125299361022953,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.124952156548906 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedRandom/InputSize:256/threads:1",
            "value": 0.6467314768488875,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.6467060124538884 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedRandom/InputSize:8192/threads:1",
            "value": 1.8567921782370376,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.8567038821946067 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedSLHDSA/threads:1",
            "value": 31155.634666674818,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 31152.490499996096 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedSLHDSASign/threads:1",
            "value": 234654.30099997777,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 234642.44199999483 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedSLHDSAVerify/threads:1",
            "value": 227.81861520183367,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 227.80528859861653 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedSPAKE2/threads:1",
            "value": 127.08236010356813,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 127.07583808289678 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedScrypt/(N = 1024, r = 8, p = 16)/threads:1",
            "value": 27439.78862500285,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 27437.33499999479 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedScrypt/(N = 16384, r = 8, p = 1)/threads:1",
            "value": 27421.239999985883,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 27418.991833333926 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedSelfTest",
            "value": 4322.005086955325,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 4322.055304348159 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedSipHash/1350/threads:1",
            "value": 0.0003118723699311733,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.0003118522705818824 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedSipHash/16/threads:1",
            "value": 0.0003112240900505186,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.00031121498334622474 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedSipHash/16384/threads:1",
            "value": 0.00031201513735033815,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.00031200314210824676 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedSipHash/256/threads:1",
            "value": 0.0003114602110142616,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.000311410714352321 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedSipHash/8192/threads:1",
            "value": 0.0003114462498598965,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.0003114486261552104 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedTrustTokenKeyGen/SpeedTrustTokenKeyGen experiment_v1",
            "value": 995.6078787876774,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 995.3738585859595 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedTrustTokenKeyGen/SpeedTrustTokenKeyGen experiment_v2_pmb",
            "value": 994.6616785713655,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 994.610556122289 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedTrustTokenKeyGen/SpeedTrustTokenKeyGen experiment_v2_voprf",
            "value": 518.3872142857755,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 518.3822328041919 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedX509/threads:1",
            "value": 3.291743925544884,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.291609257104534 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginIssueBatch1",
            "value": 628.6386474359826,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 628.5666378205726 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginIssueBatch10",
            "value": 6284.518593748346,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6284.206249999258 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginRedeemBatch1",
            "value": 0.13996274813818504,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.1399292861019293 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginRedeemBatch10",
            "value": 0.13994815566220542,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.1399453965803471 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1FinishIssueBatch1",
            "value": 7096.495249998367,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7096.466821429155 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1FinishIssueBatch10",
            "value": 25225.173374998634,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 25223.74587498888 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1IssueBatch1",
            "value": 6071.048593749851,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6070.400937498554 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1IssueBatch10",
            "value": 21845.939499996803,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 21844.62362500028 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1RedeemBatch1",
            "value": 1717.446587718996,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1717.154587719424 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1RedeemBatch10",
            "value": 1717.0286228075352,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1716.9239999999947 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginIssueBatch1",
            "value": 629.069903846121,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 629.0050833333573 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginIssueBatch10",
            "value": 6279.281156249539,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6279.014968750829 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginRedeemBatch1",
            "value": 0.13188898335595534,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.1318614424201183 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginRedeemBatch10",
            "value": 0.13147264752390628,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.13147071208212735 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbFinishIssueBatch1",
            "value": 7084.715892856609,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7084.33671428464 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbFinishIssueBatch10",
            "value": 25241.29875000369,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 25236.65850000167 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbIssueBatch1",
            "value": 6064.39637499534,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6064.076281253605 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbIssueBatch10",
            "value": 21839.417000002468,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 21839.3337500018 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbRedeemBatch1",
            "value": 1716.7849035078223,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1716.6862543856416 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbRedeemBatch10",
            "value": 1717.0352017551363,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1717.0067719295625 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginIssueBatch1",
            "value": 644.4300953947914,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 644.4268585525585 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginIssueBatch10",
            "value": 6439.157533333173,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6438.441866665792 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginRedeemBatch1",
            "value": 0.12656359870621586,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.12656327539091572 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginRedeemBatch10",
            "value": 0.1270816886772762,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.1270690704452661 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfFinishIssueBatch1",
            "value": 2438.560024999248,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2438.4439374998124 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfFinishIssueBatch10",
            "value": 9042.003909089854,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 9040.467045453097 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfIssueBatch1",
            "value": 2335.6877142869535,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2335.506321429309 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfIssueBatch10",
            "value": 8902.737363637347,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 8902.40522727223 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfRedeemBatch1",
            "value": 555.899161931641,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 555.8932443185747 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfRedeemBatch10",
            "value": 555.8215113636451,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 555.754673295474 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          }
        ]
      }
    ]
  }
}