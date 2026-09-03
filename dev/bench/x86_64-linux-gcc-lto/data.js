window.BENCHMARK_DATA = {
  "lastUpdate": 1788429513061,
  "repoUrl": "https://github.com/divVerent/boringssl",
  "entries": {
    "Benchmark on x8-64 Linux GCC with LTO": [
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
        "date": 1788429458693,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:1350",
            "value": 2.64874915556652,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.648760437215287 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 2.6482684853714487,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.6478834351699447 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:16",
            "value": 0.6413584704976691,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.6413595472421445 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.6369068827486127,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.6368821233791128 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:16384",
            "value": 13.047853986419318,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.047352855048597 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 13.347224897955616,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.34642857142824 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 13.826385419612421,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.82384155127858 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 13.048086895728826,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.04813423891595 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:256",
            "value": 1.917617484518735,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.917375666300946 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 1.902809517337299,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.902567040733193 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:8192",
            "value": 7.394742344243244,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.394332365363615 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 7.517988157489872,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.5179910027643855 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 7.738243169612957,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.736701476624201 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 7.392629928991989,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.391942362894397 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:1350",
            "value": 2.794242153679993,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.7942633287763012 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 2.787151000907517,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.7866476976299697 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:16",
            "value": 0.7810809975576418,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.7809799420406618 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.7742148164043177,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.7742155991006195 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:16384",
            "value": 13.794890967919624,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.79493190771267 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 14.104876474821205,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 14.103022949642366 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 14.573069931627495,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 14.572126486327807 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 13.799907741027507,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.798231245600295 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:256",
            "value": 1.996676239996318,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.9966853901773032 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 1.9945784660717476,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.9944569464624409 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:8192",
            "value": 7.8215481543460355,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.821130311731717 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 7.949542379756911,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.94734674344983 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 8.146445818120078,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 8.144994648188945 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 7.810461621232024,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.810067192730687 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:1350",
            "value": 2.3925477585703345,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.392574152749295 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 2.407761565619799,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.407598417336506 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:16",
            "value": 0.15650275517398476,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.15650329570080876 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.15946256636140205,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.1594632603160375 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:16384",
            "value": 27.09600594250565,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 27.089093559982263 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 27.31118612426556,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 27.309368765677373 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 27.72017406046519,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 27.71841000282139 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 27.09634724910353,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 27.092842134354537 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:256",
            "value": 0.544225281921358,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5442270300570419 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.5519680762384382,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5519687746412615 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:8192",
            "value": 13.602305416659828,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.60045368055612 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 13.698892657352493,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.698852587411903 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 13.892287515940987,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.891873388124349 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 13.614608040542851,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.612071031800738 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:1350",
            "value": 2.396992105778653,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.396846820314282 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 2.4096549172665145,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.4095392125476094 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:16",
            "value": 0.1570517736310205,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.15705233216002618 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.16156466349066054,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.16155447368507148 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:16384",
            "value": 27.09004020447454,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 27.08678378004057 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 27.316503345423417,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 27.311503206027986 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 27.72621685043395,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 27.722950098950054 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 27.094157865641062,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 27.094072159247464 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:256",
            "value": 0.5476190121141712,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5475901693567954 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.5520922160146903,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5520474864272111 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:8192",
            "value": 13.599597666010272,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.598681925537159 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 13.70576503917169,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.704662353106864 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 13.895965896200497,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.895218377769904 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 13.609043360620188,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.60911835715089 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:1350",
            "value": 2.3968780252290633,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.3964226886039954 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 2.407827284336391,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.407695552881773 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:16",
            "value": 0.1582981607064253,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.15829101175685878 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.16398082064978275,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.16398066942855075 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:16384",
            "value": 27.089883328730963,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 27.087797207632963 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 27.317863534993535,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 27.316610538055038 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 27.718637379747957,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 27.715206281835982 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 27.091833056930454,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 27.090511470435406 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:256",
            "value": 0.5493819304904437,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.549302536455673 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.5524991348901291,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5524314315886556 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:8192",
            "value": 13.606677733024602,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.604368592860004 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 13.705151203463128,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.705236286033841 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 13.889102964115818,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.888195504184324 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 13.608045473480084,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.604921896697377 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:1350",
            "value": 1.2503173834962122,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.2501994727259476 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 1.2661799447712432,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.2660243560958677 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:16",
            "value": 0.21706092503104285,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.217053074814809 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.22589325218559964,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.2258675030366361 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:16384",
            "value": 12.468030872055383,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.467441438576314 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 12.819152503596072,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.818673421364101 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 13.236256930359488,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.235322177148102 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 12.477671843176465,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.476487143583906 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:256",
            "value": 0.4147107340709929,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.4146292861741417 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.42181824951342445,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.42179559795803623 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:8192",
            "value": 6.351435735558871,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.351047817924053 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 6.51582316181174,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.515475734607979 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 6.701093271337927,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.700288703500943 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 6.354109184600526,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.354129731654227 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:1350",
            "value": 2.1972014234483543,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.196765770006457 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 2.215055415931066,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.2147727777021045 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:16",
            "value": 0.16520223664422523,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.16519581318903503 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.1733017981570068,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.173293889481739 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:16384",
            "value": 24.41303144734268,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 24.409751957572645 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 24.69719919416481,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 24.695932007051848 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 25.269440820005038,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 25.269484657047222 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 24.42520266567471,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 24.425441454904256 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:256",
            "value": 0.5281203967377859,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5280576884774201 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.5343566960468839,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5342978773213839 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:8192",
            "value": 12.278451908590998,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.277695128078085 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 12.431197908748157,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.431239416988744 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 12.687886714190869,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.685976928061958 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 12.289824079889625,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.288525436502548 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:1350",
            "value": 0.2892072824869982,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.2892074405386336 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 0.29598164925001175,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.29593113427315787 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:16",
            "value": 0.10037651454369789,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.10036621001809931 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.10565149913274516,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.10565200783346991 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:16384",
            "value": 2.1083017909878765,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.108169899509365 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 2.2824473759345976,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.2823031593470797 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 2.8838228754142636,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.883062248818667 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 2.0761551086016516,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.07616600046546 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:256",
            "value": 0.12257658361371193,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.12255110291272216 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.12818282819027255,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.12818354499156315 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:8192",
            "value": 1.0917806384096047,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.0916565999692514 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 1.1742261021258071,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.1742262100303857 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 1.4467634363314938,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.4467736844442955 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 1.0867275387396462,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.0866014834577256 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:1350",
            "value": 0.5083363275057662,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.508338390004627 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 0.5172693886260704,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5172308221198005 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:16",
            "value": 0.17418407549903586,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.1741748053219695 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.18167967838123114,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.18164806299512276 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:16384",
            "value": 3.8735532670454496,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.8732671046399503 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 4.243205909108488,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 4.242553849152784 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 4.745887111716728,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 4.745897669089382 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 3.8783749554910947,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.8783884668636452 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:256",
            "value": 0.2440062430491047,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.24400600937211386 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.2488803009940798,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.24888291767125867 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:8192",
            "value": 2.0168681819114944,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.016763286663058 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 2.183750613511241,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.1837607197039985 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 2.4246671265275577,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.4245564273757028 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 2.023237165351051,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.023011788709758 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:1350",
            "value": 0.30688793046763,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.306837374879125 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 0.3136908510506618,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.31366837015982146 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:16",
            "value": 0.10366869115009221,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.10366031022223643 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.10850205077971724,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.10849367630182727 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:16384",
            "value": 2.1846016383066527,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.1842340270941625 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 2.411672096565453,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.411417552925708 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 3.051531064477884,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.0515557160548674 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 2.2023385780887517,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.202274397077122 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:256",
            "value": 0.1285678756279342,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.1285625593828875 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.13277592352136808,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.13276829303042043 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:8192",
            "value": 1.1393230690689085,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.1390436540626678 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 1.2496958918850782,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.249540302569785 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 1.5370090315021492,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.5369305256736845 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 1.150966616279117,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.1508657441858858 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:1350",
            "value": 2.709296826185748,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.7091500373237887 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 2.7053944516454016,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.7052856768609543 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:16",
            "value": 0.6458618817654217,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.6457443422518676 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.6412733425313262,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.6412716260486391 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:16384",
            "value": 13.74842711840329,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.74853458193183 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 14.078558131189453,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 14.078060499493239 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 14.596788111568685,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 14.593182875893586 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 13.750888826582377,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.750088111595437 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:256",
            "value": 1.9258184168456776,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.9255328590317196 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 1.9173275135285888,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.9171860540344472 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:8192",
            "value": 7.735397247273734,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.735181498180866 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 7.8807373611348,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.880781999677434 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 8.124304760700156,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 8.123803578964651 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 7.741017667980334,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.739978853754724 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:1350",
            "value": 1.2885461680030466,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.288452846062713 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 1.3061429809126823,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.306147179569205 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:16",
            "value": 0.22189036662554468,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.22188375769057123 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.2316076470602507,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.23160951887513037 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:16384",
            "value": 12.815270128509656,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.814095528455288 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 13.231291272626232,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.23129005673997 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 13.705236750108307,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.703579779050859 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 12.821952601986514,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.820711558576216 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:256",
            "value": 0.42235490714344454,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.4223212356146074 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.43058045475479095,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.43053543754258194 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:8192",
            "value": 6.517416422680343,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.515231634284008 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 6.720593437112319,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.720513818407237 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 6.932595190949199,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.932209370581309 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 6.521219954799141,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.519948816801953 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:1350",
            "value": 2.704632879876022,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.7039687865128217 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 2.7276382940414545,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.72767612266941 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:16",
            "value": 0.19654459928579213,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.1965450317039711 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.20566906152526263,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.20565970643355178 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:16384",
            "value": 30.165030144585938,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 30.161229006466606 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 30.397343350981195,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 30.392092183124923 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 30.907444619752653,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 30.907655411800675 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 30.193175038522593,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 30.191163174126167 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:256",
            "value": 0.6416033727362995,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.6414836274925982 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.6489978059388022,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.6490004886624211 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:8192",
            "value": 15.158352320352037,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.158413937609007 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 15.294060988926626,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.292303462797486 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 15.506401604191822,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.506491026048725 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 15.172297731132545,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.17187019601766 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:1350",
            "value": 0.3217593612334444,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.32176128772443896 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 0.3282683747456062,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.3281561122122669 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:16",
            "value": 0.10640656904625626,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.10640109890705726 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.11130946128222215,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.11129476789496714 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:16384",
            "value": 2.3163194369250224,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.3161383088913383 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 2.5694589210520222,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.569345631579716 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 3.2156473418877582,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.2155145672382055 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 2.3265010422588714,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.3263913918887704 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:256",
            "value": 0.13114325768988214,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.13113144963963155 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.1361631321279941,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.13615409676968254 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:8192",
            "value": 1.19922978948278,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.1991796564667685 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 1.3238858245964407,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.323749151011989 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 1.6089587636480704,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.6089671260359044 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 1.1970062368920846,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.1970072123591702 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:1350",
            "value": 0.57322982830118,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.573234885826067 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 0.584105007961961,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5840692836653173 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:16",
            "value": 0.1937841174484464,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.1937657494935923 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.20292913530885479,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.20291003286883572 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:16384",
            "value": 4.407937212862771,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 4.406789681110019 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 4.844043465376628,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 4.843819100070201 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 5.31529116216234,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 5.314366675673295 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 4.417145499190285,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 4.416748242926798 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:256",
            "value": 0.27536628951750763,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.2753679809143043 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.28504515595022617,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.2849830917451294 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:8192",
            "value": 2.2949165925162687,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.2940707277663526 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 2.4885266112484437,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.488268545505122 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 2.7168334348612144,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.716844012183548 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 2.3011158140519123,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.3010062227381196 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:1350",
            "value": 0.755179042961249,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.7551534714374368 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 0.759466510130682,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.7593976550842279 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:16",
            "value": 0.16892398091863386,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.1689251588682189 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.17568861898545376,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.17563624185864984 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:16384",
            "value": 6.931315772669647,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.930563147439419 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 12.196987112433096,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.197055846097632 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 12.568259961562855,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.56828225496318 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 6.940323404556459,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.937552532898306 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:256",
            "value": 0.2726084957833848,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.27260869359291895 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.27192588504130294,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.2718973293825794 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:8192",
            "value": 3.553241973968601,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.553082574113769 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 6.14706737145122,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.1467646690858295 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 6.325284263140633,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.323596130280302 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 3.558509950626566,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.558325389289866 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:1350",
            "value": 47.906253161465486,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 47.90666123539292 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 47.76109066471401,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 47.75859335288866 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:16",
            "value": 1.9705354416142158,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.970542875512266 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 1.976245135440599,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.9762116688866367 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:16384",
            "value": 551.7559297752707,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 551.76055337062 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 551.2172683616217,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 551.1862090397577 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 551.7547752808032,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 551.6295196629304 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 550.8324691011891,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 550.7854466290607 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:256",
            "value": 11.16850934950415,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 11.168154125111487 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 11.149748974938834,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 11.147782118448756 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:8192",
            "value": 276.54042351275393,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 276.54125779040817 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 276.5699576269785,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 276.5615649717298 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 277.14866713880076,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 277.09926770537174 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 276.49790985928,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 276.4624056338325 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:1350",
            "value": 0.8780697097265356,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.8779660314868245 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 0.8800626715507092,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.8800448798135692 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:16",
            "value": 0.2952147178966845,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.2951956195193875 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.2940658341785084,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.29400802423931577 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:16384",
            "value": 7.053862391934421,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.053348270891277 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 12.32495866514397,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.323520920235913 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 12.695075700563766,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.69445550078156 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 7.073192948902673,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.07277396073903 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:256",
            "value": 0.39739963149299184,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.3973014440286014 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.4007040419099698,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.4006484784116699 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:8192",
            "value": 3.6796767545827365,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.6786086752332956 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 6.269829840925758,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.268244234332879 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 6.443283673065801,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.443061742148646 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 3.68500579889628,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.6847796606989873 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:1350",
            "value": 2.1531504608754846,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.152970444595928 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 2.1505163322085807,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.1501693795735615 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:16",
            "value": 0.2217034844173273,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.22169541346811425 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.21800110076983858,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.21800313157795634 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:16384",
            "value": 23.57483489433171,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 23.573859630156175 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 23.78650036426066,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 23.782851991258973 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 24.04727209131826,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 24.041623343151393 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 23.576514543267336,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 23.574746995190203 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:256",
            "value": 0.5862280155619835,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5861813629841326 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.5810012912992275,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5808981387479428 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:8192",
            "value": 11.89913398494015,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 11.898040371540429 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 11.986097186546159,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 11.984711131499033 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 12.113300455610219,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.112529553010134 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 11.894269650654708,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 11.892536875300486 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:1350",
            "value": 2.2259447077960934,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.2255957108186637 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 2.2200054474625572,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.2195166368425943 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:16",
            "value": 0.22901087215891502,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.22901131546691814 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.22435299506104234,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.22433731467175924 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:16384",
            "value": 24.228430442298926,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 24.22683481591437 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 24.444339441535984,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 24.44000361505169 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 24.72536364783348,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 24.724009081738124 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 24.223552885802064,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 24.223594129307084 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:256",
            "value": 0.6084340094197047,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.6084378289088481 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.6044054712090422,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.6044116182187499 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:8192",
            "value": 12.22723539690531,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.226565651527388 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 12.321205250595831,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.320327659842588 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 12.451995557246054,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.450524815945508 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 12.227165481095096,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.226361412703985 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:1350",
            "value": 2.3915295136777677,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.391183036041991 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 2.3922466202218917,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.392136409032529 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:16",
            "value": 0.15585928975637622,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.15585964721355597 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.14924975278579605,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.14925067373520223 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:16384",
            "value": 27.11012562189314,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 27.105698590374168 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 27.30415089086818,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 27.30055790646771 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 27.660547981942216,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 27.660637454145313 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 27.104108377115843,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 27.101596627034365 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:256",
            "value": 0.5409285090505183,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5409061461932902 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.5376718302962169,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.537584772107124 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:8192",
            "value": 13.597648312727637,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.597065199276702 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 13.695907014111764,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.694823389687073 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 13.860174773110208,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.860264322178438 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 13.595862992779033,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.594532759576154 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:1350",
            "value": 2.3949465011014497,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.3948326523117056 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 2.396484839192481,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.3963962784877397 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:16",
            "value": 0.15133964715358678,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.1513339451625443 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.1505345649401346,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.15050938715025955 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:16384",
            "value": 27.09684853510364,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 27.094738529572 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 27.29969375522449,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 27.296039587405367 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 27.686035431959617,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 27.683784584984352 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 27.093657356188324,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 27.08901368915827 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:256",
            "value": 0.5418225179386321,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5417310909561744 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.53630824534635,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5363090609041262 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:8192",
            "value": 13.593740709925957,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.59371679145747 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 13.697028290026788,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.696831936294592 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 13.877138743452178,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.874759303798522 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 13.588082697376285,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.588083529899304 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:1350",
            "value": 2.3906842130994197,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.3905989858257617 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 2.3946763411948218,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.3941848099716085 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:16",
            "value": 0.15274151001956637,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.15271261814214143 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.15064047017360827,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.15062993029501576 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:16384",
            "value": 27.086943860623546,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 27.084065403756387 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 27.306911281327228,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 27.301598607241736 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 27.666399041174436,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 27.665431472079593 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 27.08960956065735,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 27.089813760703002 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:256",
            "value": 0.539903390847851,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5399041398414528 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.5373158229199813,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5373194632379791 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:8192",
            "value": 13.606413635107675,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.604434254373436 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 13.694124126848674,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.694099818381607 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 13.863778492646498,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.862061722282622 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 13.590099542181255,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.58887264150771 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:1350",
            "value": 1.2455025404245788,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.245508250028562 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 1.2508333482521834,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.250666747652919 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:16",
            "value": 0.22011892873142322,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.22012056476909841 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.21353692121151108,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.21351099676370638 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:16384",
            "value": 12.462876669636811,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.461968261035903 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 12.78090084745877,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.778766492826753 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 13.186222670975397,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.186321082389998 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 12.46584479470985,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.464575505274743 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:256",
            "value": 0.4123771530102312,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.41238033562934573 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.40908021199934197,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.40900766571564356 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:8192",
            "value": 6.342107919254153,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.341745794514021 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 6.48532266596056,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.4850942541673335 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 6.668139289603021,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.667725163309247 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 6.3427271903721785,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.341083602949711 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:1350",
            "value": 2.193034021056954,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.193047499832041 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 2.194452117306997,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.1942693667094173 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:16",
            "value": 0.16172661534047134,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.16172212745883657 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.1581732555536965,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.15816488291996553 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:16384",
            "value": 24.411110530245406,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 24.407207368678378 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 24.74399202532212,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 24.74333354429366 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 25.688940811568038,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 25.689212199533188 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 24.39915082129811,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 24.399271403682516 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:256",
            "value": 0.5245539605653776,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5244979229487197 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.5204312861766988,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5203550634594101 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:8192",
            "value": 12.279545300330586,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.279636215132564 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 12.436882573350175,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.435755811000723 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 12.677602097630546,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.676950861064153 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 12.270246432141652,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.268466574863456 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:1350",
            "value": 0.2927003584228586,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.2926560155316677 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 0.2908695146703252,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.2908555311975146 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:16",
            "value": 0.09471584128590835,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.09471673728404066 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.09113486564481832,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.09113008989481071 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:16384",
            "value": 2.112326248045387,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.1122260081816897 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 2.4629087160473495,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.4624863937858406 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 3.043216553885821,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.0432143965743257 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 2.1082957283799466,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.108111968552838 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:256",
            "value": 0.11929399337696667,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.11928779096465089 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.11656459578007838,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.11653813063062601 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:8192",
            "value": 1.1022545984992878,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.102124717977151 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 1.2622101560896195,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.2620666012014172 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 1.51209015814477,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.512010064486807 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 1.120858341062648,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.1207662884870502 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:1350",
            "value": 0.5645803961895879,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5645513781131453 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 0.5577568363363943,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5575485521717317 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:16",
            "value": 0.14095990893092197,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.14093954997586883 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.1346184439162864,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.1346241395815079 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:16384",
            "value": 4.580379424675234,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 4.5798274026341925 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 4.824487212337668,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 4.8238992509739775 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 5.247905117898811,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 5.247653456591702 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 4.579326762272395,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 4.579355654693236 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:256",
            "value": 0.22927369614777549,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.2292619676156221 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.22269093146147534,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.22261727637669826 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:8192",
            "value": 2.363232368394696,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.3632425400112553 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 2.470639946609967,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.4705332930394683 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 2.660164137369962,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.6596121351978694 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 2.3558770320054516,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.3557546540474594 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:1350",
            "value": 0.3085537671098718,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.3085413530658806 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 0.30772575023225257,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.30768589272258484 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:16",
            "value": 0.09849596660584053,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.0984887768838568 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.09569677095673894,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.09569350960829656 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:16384",
            "value": 2.1988449904210405,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.1988493896742014 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 2.5922931883794327,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.5922140416855433 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 3.1795375194652884,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.1791559661301205 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 2.186567653957772,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.1860992618314996 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:256",
            "value": 0.12492557979337304,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.124926397323469 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.12096450888001357,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.12095107055441219 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:8192",
            "value": 1.1586682886169388,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.1586742470316655 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 1.331472923596989,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.3313123807057736 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 1.581159024264498,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.5809426094801888 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 1.1550064599025942,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.1550115405925219 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:1350",
            "value": 2.581381434210746,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.5813891710525563 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 2.579973764498788,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.579568738328279 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:16",
            "value": 0.23695023889217115,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.23694008537058275 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.23348744219477532,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.23345650413322433 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:16384",
            "value": 28.686687060890478,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 28.686622658081085 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 28.899364614007844,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 28.896067030048 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 29.186890178568518,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 29.18465252975941 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 28.689024882908676,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 28.687943793908413 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:256",
            "value": 0.676517701493099,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.6765007407202 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.670473581393731,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.6704269605263284 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:8192",
            "value": 14.462816701211219,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 14.459849570624717 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 14.550240174993075,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 14.550494957733898 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 14.6707736288485,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 14.669538166792307 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 14.451602316314714,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 14.45172226320167 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:1350",
            "value": 1.2848605962565958,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.2845940099286355 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 1.2917831911977806,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.291701437144638 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:16",
            "value": 0.22123350449058607,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.22119993705681473 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.21862841648589176,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.2186108348629777 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:16384",
            "value": 12.821228378904621,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.821280452701014 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 13.183958394950228,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.18275420083113 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 13.649847526132287,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.648180069684988 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 12.807638723463873,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.8068866519945 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:256",
            "value": 0.4211411218407034,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.42098107774754434 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.4165480342010679,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.41649475546022474 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:8192",
            "value": 6.504926376696605,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.504836326154665 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 6.69171451480837,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.691704142213 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 6.9015958157511745,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.901658157524612 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 6.510304737859242,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.5099758123451625 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:1350",
            "value": 2.7011995956651056,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.700183669820757 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 2.7468438107870106,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.7462446507515432 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:16",
            "value": 0.1924447045819953,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.19244664923252763 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.18878870973961087,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.1887894314826469 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:16384",
            "value": 30.175168106114466,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 30.175396514495304 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 30.3067010500325,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 30.304337245214434 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 31.66747080645714,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 31.660740806451543 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 30.163325145831624,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 30.157634786610647 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:256",
            "value": 0.6373058156295189,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.6372770134271663 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.6334959645631919,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.6335011599054479 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:8192",
            "value": 15.150478160208152,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.146972526622736 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 15.248918845319718,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.24901283846483 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 15.460911037622356,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.45931593449546 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 15.14800763535327,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.14737204997697 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:1350",
            "value": 0.3274779811247014,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.3274569317074674 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 0.3246696334488841,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.3246403361985922 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:16",
            "value": 0.1042310283011113,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.104219625239103 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.10138929343779324,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.1013783768373063 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:16384",
            "value": 2.3883081281787155,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.388074819761761 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 2.776913748728176,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.7762925811747343 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 3.3608101721643093,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.3608415014736837 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 2.3660521764055185,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.366076353385133 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:256",
            "value": 0.12869371139624736,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.12868935536485585 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.12547670416561607,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.12546366420283514 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:8192",
            "value": 1.23326130796989,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.233224698495589 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 1.4217116368198328,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.421724444506671 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 1.6685428088877134,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.6685440055676928 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 1.230700965607668,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.2305465738288468 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:1350",
            "value": 0.6398312402191543,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.639832668231769 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 0.6313903730391028,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.6313712441508301 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:16",
            "value": 0.1519326263995959,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.15191750571463736 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.14641788002369066,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.1464179726786868 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:16384",
            "value": 5.231235346073138,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 5.231049970560257 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 5.542205435943108,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 5.541970234414885 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 6.021180776125304,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.021030494963069 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 5.224648076923815,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 5.224665705129263 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:256",
            "value": 0.25060934019501213,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.25061016719158535 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.24548459454719157,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.24548430359426116 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:8192",
            "value": 2.6986341590546,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.698055358955611 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 2.8349880997135375,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.835020243500371 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 3.0465071831939974,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.0461676337350188 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 2.6842703479575936,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.684291583002282 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:1350",
            "value": 0.8208801205624573,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.8208510665756528 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 0.8163672351556025,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.8162415687613874 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:16",
            "value": 0.1825571011042611,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.18253530603359608 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.17437240073441646,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.17433031404929167 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:16384",
            "value": 6.9709644987214485,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.971026767963501 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 12.241930720264724,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.24131899888312 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 12.579327248264036,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.578843838074317 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 6.96939644141104,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.969456218546943 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:256",
            "value": 0.2825065549008621,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.28250836657862854 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.27621600841286764,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.2761864464927247 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:8192",
            "value": 3.5983429527245194,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.598085894418761 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 6.170154833218559,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.169980768018138 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 6.328423793855762,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.327649574304319 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 3.58232070306452,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.5821699516691288 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:1350",
            "value": 47.80814730187652,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 47.808355858059045 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 47.834852711281634,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 47.832120908639745 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:16",
            "value": 1.601232931137029,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.6010912219603406 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 1.5902357676178898,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.5900803977775644 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:16384",
            "value": 567.0726069365103,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 567.0538843933746 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 567.5013005778666,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 567.5077658957557 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 568.329528901699,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 568.114849710897 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 567.2237138727686,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 567.0469595373308 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:256",
            "value": 9.91157634821692,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 9.911060947281229 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 9.90550636002582,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 9.905580746921249 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:8192",
            "value": 283.9601405796294,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 283.9484188406001 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 284.4650780346487,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 284.4407875721569 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 284.5289622090601,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 284.5308968022796 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 284.2517188404916,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 284.20735072467835 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:1350",
            "value": 0.9328681098043414,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.932824839518992 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 0.9302646673563773,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.9302067810124551 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:16",
            "value": 0.29888609558713425,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.2988882971645599 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.2896145066122162,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.28958383635827956 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:16384",
            "value": 7.081631767773343,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.080609480323931 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 12.38764731114043,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.38523975672442 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 12.732316666665286,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.730282749674036 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 7.095780509757738,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.095124199006806 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:256",
            "value": 0.39856195923794924,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.3985059499099372 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.39499785960808775,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.3950051063348998 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:8192",
            "value": 3.7052481135333912,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.7046771938566594 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 6.317859059322808,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.316895894993864 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 6.4662780521565395,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.46460443829947 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 3.711265678816267,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.7106876916093023 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAESBlockDecrypt<128>/threads:1",
            "value": 0.01587189690483745,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.01587126865156423 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAESBlockDecrypt<256>/threads:1",
            "value": 0.02084627655058583,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.0208451402374899 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAESBlockDecryptSetup<128>/threads:1",
            "value": 0.019957784256826098,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.019957075784174917 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAESBlockDecryptSetup<256>/threads:1",
            "value": 0.02440633907185646,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.024406688962628317 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAESBlockEncrypt<128>/threads:1",
            "value": 0.01586924328563625,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.015868365685771456 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAESBlockEncrypt<256>/threads:1",
            "value": 0.020853861194965476,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.02085196662820338 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAESBlockEncryptSetup<128>/threads:1",
            "value": 0.016363822961066678,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.016362001351607154 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAESBlockEncryptSetup<256>/threads:1",
            "value": 0.02007814846799102,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.020078230519447446 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedBase64/threads:1",
            "value": 6.155064666788747,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.154065575825859 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedCurve25519ArbitraryPointMultiply/threads:1",
            "value": 41.93384830035676,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 41.93166438356371 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedCurve25519BasePointMultiply/threads:1",
            "value": 25.73033425268597,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 25.726374310477432 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedECDHComputeKey/p224/threads:1",
            "value": 217.78625054698145,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 217.7444223193272 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedECDHComputeKey/p256/threads:1",
            "value": 52.053479462869305,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 52.04890416008425 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedECDHComputeKey/p384/threads:1",
            "value": 539.499793955986,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 539.4258351648554 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedECDHComputeKey/p521/threads:1",
            "value": 1314.9734857143308,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1314.680721428805 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedECDHEphemeral/p224/threads:1",
            "value": 437.48356621003677,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 437.4587716894165 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedECDHEphemeral/p256/threads:1",
            "value": 65.74613163634652,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 65.74484400000942 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedECDHEphemeral/p384/threads:1",
            "value": 1080.4114945056047,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1080.2710824176504 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedECDHEphemeral/p521/threads:1",
            "value": 2626.4391351345253,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2626.4588513504045 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedECDHKeyGen/p224/threads:1",
            "value": 207.9439946921716,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 207.93457112529364 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedECDHKeyGen/p256/threads:1",
            "value": 8.77068441523584,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 8.770051189201522 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedECDHKeyGen/p384/threads:1",
            "value": 504.6461701028617,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 504.59103350522355 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedECDHKeyGen/p521/threads:1",
            "value": 1216.797413580422,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1216.806759259221 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedECDSASign/p224/threads:1",
            "value": 231.3403270589146,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 231.31629999992956 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedECDSASign/p256/threads:1",
            "value": 19.884792603846186,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 19.88187416413425 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedECDSASign/p384/threads:1",
            "value": 576.2709644973229,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 576.2727337278811 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedECDSASign/p521/threads:1",
            "value": 1408.838942028445,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1408.8461739130496 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedECDSAVerify/p224/threads:1",
            "value": 231.74143691472895,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 231.68607126100164 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedECDSAVerify/p256/threads:1",
            "value": 60.75404055802377,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 60.73393777080547 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedECDSAVerify/p384/threads:1",
            "value": 579.3916205867752,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 579.2681794111043 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedECDSAVerify/p521/threads:1",
            "value": 1416.9420942026143,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1416.4079492754718 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedEd25519/threads:1",
            "value": 26.75878026172998,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 26.75391875681949 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedEd25519Sign/threads:1",
            "value": 26.910531112943943,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 26.906780564697705 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedEd25519Verify/threads:1",
            "value": 51.09504270831936,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 51.09243854165927 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHRSSDecap/threads:1",
            "value": 29.357777894428875,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 29.357895920817906 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHRSSEncap/threads:1",
            "value": 10.634769464654024,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 10.633567434031303 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHRSSGenerate/threads:1",
            "value": 137.26905189342855,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 137.2698162692737 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:1350/threads:1",
            "value": 2.7679512778429345,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.7678521495482586 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:16/threads:1",
            "value": 0.27293551690117684,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.2729373680243559 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:16384/threads:1",
            "value": 32.031901176071756,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 32.029370467170615 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:256/threads:1",
            "value": 0.5112139924698802,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5111316405450206 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:8192/threads:1",
            "value": 16.01290732829832,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 16.0129843904057 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:1350/threads:1",
            "value": 0.838221354745915,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.8381555040298521 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:16/threads:1",
            "value": 0.05762135318307526,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.057618816369270145 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:16384/threads:1",
            "value": 9.690020288996312,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 9.690074178542607 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:256/threads:1",
            "value": 0.19668069342816902,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.19667277612888484 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:8192/threads:1",
            "value": 4.8681405748423385,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 4.867251642057779 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:1350/threads:1",
            "value": 0.8986180999167672,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.8984838283951804 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:16/threads:1",
            "value": 0.05842467186264383,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.05841809986922484 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:16384/threads:1",
            "value": 10.337903089735919,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 10.337774702100926 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:256/threads:1",
            "value": 0.21500178220293345,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.21500291115071163 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:8192/threads:1",
            "value": 5.196392533278077,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 5.196158747416218 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:1350/threads:1",
            "value": 2.663409130365564,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.6630156919654686 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:16/threads:1",
            "value": 0.2772399222134679,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.2771777254932943 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:16384/threads:1",
            "value": 30.698913696078126,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 30.694495153237078 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:256/threads:1",
            "value": 0.7527223905788862,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.7526470827418661 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:8192/threads:1",
            "value": 15.488699905183125,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.485931573955714 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHashToCurve/hash-to-curve P256_XMD:SHA-256_SSWU_RO_/threads:1",
            "value": 26.95817865970276,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 26.951691705570187 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHashToCurve/hash-to-curve P384_XMD:SHA-384_SSWU_RO_/threads:1",
            "value": 75.60563317937414,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 75.59751039260624 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHashToCurve/hash-to-scalar P384_XMD:SHA-512/threads:1",
            "value": 1.3519164980943676,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.3518415968294475 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLDSAKeyGen/ml_dsa_44/threads:1",
            "value": 51.20424126236744,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 51.197176056338684 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLDSAKeyGen/ml_dsa_65/threads:1",
            "value": 85.44172096067066,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 85.4417812226999 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLDSAKeyGen/ml_dsa_87/threads:1",
            "value": 129.2756097883578,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 129.27678835979458 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLDSAParsePubKey/ml_dsa_44/threads:1",
            "value": 4.460642697551838,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 4.460383703433633 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLDSAParsePubKey/ml_dsa_65/threads:1",
            "value": 6.582142468422258,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.58028087207879 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLDSAParsePubKey/ml_dsa_87/threads:1",
            "value": 8.54791646373099,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 8.547931031483573 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLDSASign/ml_dsa_44/threads:1",
            "value": 216.90350907031763,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 216.87997392285507 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLDSASign/ml_dsa_65/threads:1",
            "value": 327.0113951313083,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 326.9869400746552 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLDSASign/ml_dsa_87/threads:1",
            "value": 388.0727472727585,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 387.9123090907202 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLDSAVerify/ml_dsa_44/threads:1",
            "value": 43.25626478378365,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 43.25211915268938 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLDSAVerify/ml_dsa_65/threads:1",
            "value": 68.3557585485041,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 68.35625959525598 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLDSAVerify/ml_dsa_87/threads:1",
            "value": 108.50485564158407,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 108.50025110618017 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLDSAVerifyBadSignature/ml_dsa_44/threads:1",
            "value": 43.3722400618074,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 43.369216431104704 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLDSAVerifyBadSignature/ml_dsa_65/threads:1",
            "value": 68.42190564067437,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 68.41873607243048 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLDSAVerifyBadSignature/ml_dsa_87/threads:1",
            "value": 108.66816077350703,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 108.6560469613275 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLKEM1024DecapOnly/threads:1",
            "value": 40.25496765536267,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 40.25535723094922 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLKEM1024EncapOnly/threads:1",
            "value": 26.948409577598262,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 26.93556846888086 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLKEM1024KeyGenDecap/threads:1",
            "value": 78.46923900877272,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 78.46447002395789 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLKEM1024KeyGenOnly/threads:1",
            "value": 39.021515525477945,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 39.01798945063466 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLKEM1024ParseEncap/threads:1",
            "value": 44.64967941842986,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 44.65115938015842 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLKEM1024ParseOnly/threads:1",
            "value": 18.496680041443373,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 18.479845543730782 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLKEM1024PrivateKeyFromSeedOnly/threads:1",
            "value": 38.972592681173495,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 39.00384347646579 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLKEM768DecapOnly/threads:1",
            "value": 31.33465105494931,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 31.33245732078198 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLKEM768EncapOnly/threads:1",
            "value": 21.210161910712173,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 21.204582360557325 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLKEM768KeyGenDecap/threads:1",
            "value": 58.75706175058374,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 58.757481714635546 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLKEM768KeyGenOnly/threads:1",
            "value": 28.161900373251477,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 28.162140539766416 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLKEM768ParseEncap/threads:1",
            "value": 33.102941853217665,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 33.10051064905322 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLKEM768ParseOnly/threads:1",
            "value": 12.601905921594973,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.586100807195006 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLKEM768PrivateKeyFromSeedOnly/threads:1",
            "value": 28.146325244151768,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 28.178366743269642 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndSign/2048/threads:1",
            "value": 765.8291874999002,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 765.8299921874944 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndSign/3072/threads:1",
            "value": 2222.450147726172,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2222.245829545131 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndSign/4096/threads:1",
            "value": 4905.305799999127,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 4905.186425000085 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndVerify/2048/threads:1",
            "value": 19.433063429134762,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 19.432045589693576 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndVerify/3072/threads:1",
            "value": 40.72696069050929,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 40.72212603993405 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndVerify/4096/threads:1",
            "value": 70.58408045977228,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 70.57232830459989 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedRSAParsePrivateKey/2048/threads:1",
            "value": 113.20903654294747,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 113.19465719256785 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedRSAParsePrivateKey/3072/threads:1",
            "value": 226.66620323326302,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 226.65671016163475 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedRSAParsePrivateKey/4096/threads:1",
            "value": 380.06447859908724,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 380.02497470810647 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedRSASign/2048/threads:1",
            "value": 647.4635296050441,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 647.3923881578197 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedRSASign/3072/threads:1",
            "value": 1982.7879599998255,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1982.5058999999358 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedRSASign/4096/threads:1",
            "value": 4503.832909092993,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 4503.232477272366 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedRSAVerify/2048/threads:1",
            "value": 17.17279556564452,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 17.170394029333924 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedRSAVerify/3072/threads:1",
            "value": 36.6224661555754,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 36.614752617795816 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedRSAVerify/4096/threads:1",
            "value": 63.61206666666368,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 63.612222977355074 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedRandom/InputSize:1350/threads:1",
            "value": 0.8977149727972902,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.8977219402916802 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedRandom/InputSize:16/threads:1",
            "value": 0.6550903796694707,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.6549802769227371 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedRandom/InputSize:16384/threads:1",
            "value": 3.1458326865099835,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.14557654435824 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedRandom/InputSize:256/threads:1",
            "value": 0.6912055168234728,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.6911563052933618 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedRandom/InputSize:8192/threads:1",
            "value": 1.880036850921685,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.8799564585378508 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedSLHDSA/threads:1",
            "value": 34533.97149999186,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 34530.76349999881 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedSLHDSASign/threads:1",
            "value": 260659.37349994783,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 260647.09950003363 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedSLHDSAVerify/threads:1",
            "value": 264.7192349081348,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 264.7035603674609 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedSPAKE2/threads:1",
            "value": 122.88577631578474,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 122.87658959896721 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedScrypt/(N = 1024, r = 8, p = 16)/threads:1",
            "value": 27351.39899998984,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 27343.81225000071 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedScrypt/(N = 16384, r = 8, p = 1)/threads:1",
            "value": 27265.860375003114,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 27262.418750002125 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedSelfTest",
            "value": 4449.497431817339,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 4449.01924999964 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedSipHash/1350/threads:1",
            "value": 0.004049297521971266,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.004049325313178525 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedSipHash/16/threads:1",
            "value": 0.0009343064200272678,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.0009342663124371183 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedSipHash/16384/threads:1",
            "value": 0.0009336090649184599,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.0009334630704566138 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedSipHash/256/threads:1",
            "value": 0.0009339075602207952,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.0009338286432351249 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedSipHash/8192/threads:1",
            "value": 0.0009342998451787145,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.0009342643203293829 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedTrustTokenKeyGen/SpeedTrustTokenKeyGen experiment_v1",
            "value": 1098.909331460618,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1098.8122584270416 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedTrustTokenKeyGen/SpeedTrustTokenKeyGen experiment_v2_pmb",
            "value": 1098.9385674159375,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1098.897252808612 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedTrustTokenKeyGen/SpeedTrustTokenKeyGen experiment_v2_voprf",
            "value": 540.0795491803183,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 540.0252568305742 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedX509/threads:1",
            "value": 3.94641441477539,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.946446637221137 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginIssueBatch1",
            "value": 653.5845231789439,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 653.5855629138822 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginIssueBatch10",
            "value": 6530.447733333252,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6529.22369999942 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginRedeemBatch1",
            "value": 0.14989824088932951,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.1498986782075735 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginRedeemBatch10",
            "value": 0.15012629313522324,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.1501049050167315 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1FinishIssueBatch1",
            "value": 7382.255307692712,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7381.204615385812 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1FinishIssueBatch10",
            "value": 26378.739250002778,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 26368.860874999453 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1IssueBatch1",
            "value": 6353.30976667016,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6352.996466667567 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1IssueBatch10",
            "value": 22585.79212499967,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 22584.086000001946 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1RedeemBatch1",
            "value": 1836.6953018868408,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1836.4918396225798 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1RedeemBatch10",
            "value": 1837.3693962261325,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1837.2215000000492 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginIssueBatch1",
            "value": 653.9211999999377,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 653.8314966667257 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginIssueBatch10",
            "value": 6531.732399999631,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6530.4201666663175 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginRedeemBatch1",
            "value": 0.14285484289818237,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.14283476577471854 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginRedeemBatch10",
            "value": 0.14381568484401935,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.14380568593835952 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbFinishIssueBatch1",
            "value": 7358.205115383935,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7357.929692307863 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbFinishIssueBatch10",
            "value": 26319.56425000226,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 26314.901624992614 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbIssueBatch1",
            "value": 6356.467466664147,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6355.944999999016 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbIssueBatch10",
            "value": 22600.453625003072,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 22600.433875002323 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbRedeemBatch1",
            "value": 1836.3485471694567,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1836.1684056603008 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbRedeemBatch10",
            "value": 1836.4615188673656,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1836.0423113202662 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginIssueBatch1",
            "value": 651.1417000001529,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 651.0131400000319 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginIssueBatch10",
            "value": 6513.013933332937,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6512.698166666078 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginRedeemBatch1",
            "value": 0.13754943157728092,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.13753446063027328 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginRedeemBatch10",
            "value": 0.13751919162233373,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.13749623180135773 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfFinishIssueBatch1",
            "value": 2534.251589742972,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2534.148769230936 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfFinishIssueBatch10",
            "value": 9391.052349999994,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 9390.286449999508 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfIssueBatch1",
            "value": 2457.7823249998687,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2457.804937500141 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfIssueBatch10",
            "value": 9307.305954543855,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 9306.697863635805 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfRedeemBatch1",
            "value": 580.8313106509497,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 580.8032278106177 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfRedeemBatch10",
            "value": 580.5575946744644,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 580.5550710059214 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          }
        ]
      }
    ]
  }
}