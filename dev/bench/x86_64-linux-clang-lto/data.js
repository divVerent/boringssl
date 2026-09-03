window.BENCHMARK_DATA = {
  "lastUpdate": 1788429508686,
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
      }
    ]
  }
}