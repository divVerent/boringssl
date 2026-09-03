window.BENCHMARK_DATA = {
  "lastUpdate": 1788447195063,
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
        "date": 1788445155935,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:1350",
            "value": 2.6481914982819,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.6478788850118837 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 2.647684904334792,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.6474889089781932 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:16",
            "value": 0.6405464613917315,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.6404866893683361 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.6364831617638353,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.6364808215893867 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:16384",
            "value": 13.054483368809954,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.054067722194727 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 13.361450129446485,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.359373552254713 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 13.829693386920184,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.826705513257465 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 13.042036478407946,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.04199514949662 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:256",
            "value": 1.9169387769045134,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.9168388100767497 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 1.905647670388817,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.905651976977531 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:8192",
            "value": 7.392336797710497,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.391971381232915 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 7.519704866442472,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.5196793061117635 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 7.736467939594779,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.7364743042392 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 7.395766136965754,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.39547657964517 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:1350",
            "value": 2.796876001139525,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.7965450762433615 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 2.7879333257577503,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.7873738388110363 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:16",
            "value": 0.7808773944849053,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.7807942540265058 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.7676156755686997,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.7675868684471142 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:16384",
            "value": 13.803479505296298,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.803168975262887 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 14.10644187553979,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 14.10643164794343 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 14.581437274372155,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 14.580315433213343 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 13.797926889450835,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.797869148339576 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:256",
            "value": 1.998386132445729,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.9983522040202275 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 1.9979746210502334,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.9978052002367632 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:8192",
            "value": 7.818265013158519,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.818161177125714 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 7.935985991900031,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.9352709716564975 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 8.158408309100196,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 8.15733348566182 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 7.811386358199618,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.811371200637829 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:1350",
            "value": 2.3935248652469574,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.3933463817959906 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 2.406960915250823,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.4069533659037274 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:16",
            "value": 0.1564945223268978,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.1564850215399255 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.15928361372703997,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.15927732489702037 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:16384",
            "value": 27.098160171360895,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 27.096106274191857 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 27.321004741987885,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 27.316842259409707 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 27.722186970047524,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 27.720959157718983 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 27.095648783180167,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 27.09554687499719 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:256",
            "value": 0.5442356078300873,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.544235382604873 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.551372915168032,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5513501000271388 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:8192",
            "value": 13.599266430945303,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.598788685518182 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 13.710605093760933,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.70871319619767 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 13.89409618386309,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.892826074620928 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 13.608976216969632,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.608614394994627 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:1350",
            "value": 2.3971050110264915,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.396697476108854 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 2.411714877766177,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.411428879788187 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:16",
            "value": 0.15699769224851015,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.1569901127272424 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.16161213038164884,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.1615636935225378 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:16384",
            "value": 27.10708040894965,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 27.102296490741963 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 27.32959049079785,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 27.326119353052395 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 27.7266255307079,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 27.72653722050678 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 27.1019542565013,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 27.099389441673118 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:256",
            "value": 0.5464986195702375,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5464968180398124 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.5516238202550114,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5516043343442856 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:8192",
            "value": 13.606632708326554,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.605230694441811 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 13.707761030957892,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.705920857260633 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 13.894728889198252,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.894111433834373 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 13.610090422575968,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.609494926329456 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:1350",
            "value": 2.3966000537523477,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.396515649432831 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 2.4083079686084155,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.408058466800016 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:16",
            "value": 0.15806621234068235,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.15805510292566774 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.1643873000912332,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.1643809980949847 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:16384",
            "value": 27.090873998341987,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 27.090908814590488 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 27.331500696957164,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 27.32920685809894 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 27.724382927525614,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 27.723350226497864 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 27.10043240254573,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 27.09813560962443 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:256",
            "value": 0.5485857083569995,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5485864542324942 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.5527066649401624,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5526825989777956 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:8192",
            "value": 13.605463963338249,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.605125676987782 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 13.710542319527486,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.70988409345296 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 13.8920184344876,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.891447107203131 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 13.61315109011839,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.613173517570502 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:1350",
            "value": 1.2497810065407853,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.249714530710441 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 1.2662578584705015,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.2660631193865992 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:16",
            "value": 0.2164953984158391,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.21646793198222075 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.22599900856861033,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.22598223819659907 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:16384",
            "value": 12.473252578633666,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.471186616580109 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 12.816639012571866,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.816194539028743 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 13.24852878767621,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.247355183134223 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 12.474866764362162,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.474845163750715 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:256",
            "value": 0.41453560329617406,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.4145170099236176 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.4218284803701927,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.4218161988611183 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:8192",
            "value": 6.3478984916164105,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.347892762348463 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 6.51230647094085,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.5120767592023245 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 6.705323927762682,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.704147171488631 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 6.355981996888554,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.355969281171747 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:1350",
            "value": 2.197214613867879,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.1972125296939007 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 2.2168776539214496,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.2168228909939542 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:16",
            "value": 0.16516336531897363,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.16515631302706005 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.17323466378866498,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.1732292145080743 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:16384",
            "value": 24.417319178073196,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 24.41372951431747 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 24.700325390832155,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 24.69989019163346 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 25.27968720989574,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 25.279616683857004 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 24.419593368239227,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 24.41954761905501 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:256",
            "value": 0.5278361142838409,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5278110372398073 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.5339072523760462,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.533907146164043 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:8192",
            "value": 12.27976367847298,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.279030424442778 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 12.421343599496273,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.421322306722448 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 12.692473289357203,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.689495084724554 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 12.29164770021339,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.29132723398797 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:1350",
            "value": 0.2894317771588307,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.2894171080735307 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 0.29508511933765297,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.295070429903758 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:16",
            "value": 0.10040046408091083,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.10040033385934546 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.10561400890812127,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.10560546384265627 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:16384",
            "value": 2.085551046926669,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.085183914724525 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 2.2761705637860254,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.276161391817114 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 2.8794190404150086,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.879294393202229 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 2.0756632579760455,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.0756588738652137 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:256",
            "value": 0.12294489525264765,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.1229413039699894 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.12830645481250308,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.1283027881563277 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:8192",
            "value": 1.0818814064821654,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.081597386232284 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 1.1741488969709386,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.1739761450378459 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 1.444519564865051,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.444331322908576 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 1.090721093900231,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.0907191194939445 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:1350",
            "value": 0.5087737719284716,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5087477222405585 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 0.5213819325921307,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5213593011447281 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:16",
            "value": 0.17426664913977144,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.17424315648870767 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.18149841498018698,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.18149385190412914 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:16384",
            "value": 3.8766413519587624,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.8766152677467893 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 4.247500000002134,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 4.247340212007094 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 4.716414824512105,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 4.715617776805404 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 3.879816703209955,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.879402870241866 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:256",
            "value": 0.24422655593719775,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.2442176758739339 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.24915827569993948,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.24914489569503634 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:8192",
            "value": 2.0154213883060255,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.015329588939844 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 2.1864395784178283,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.186291089793483 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 2.42183160462256,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.421732784744167 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 2.020495285840641,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.0203590291100824 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:1350",
            "value": 0.30663308906791603,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.3066331549444259 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 0.3125867069612916,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.3125472238861534 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:16",
            "value": 0.10365182726532336,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.10364405505034917 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.10858130340458486,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.10857764643378473 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:16384",
            "value": 2.1803333038957695,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.180179623333406 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 2.418397677847378,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.418148888069738 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 3.0415682621366202,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.0412385764765126 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 2.1938536816733154,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.193754782045567 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:256",
            "value": 0.12816106210511394,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.12816066603920284 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.13319917118708713,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.1331990774514467 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:8192",
            "value": 1.1452721118232583,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.145174628207927 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 1.2461854978800684,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.2461824260465968 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 1.5357255521254285,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.5355351259425345 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 1.143073356656137,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.1429434862986665 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:1350",
            "value": 2.7101309784267746,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.7101294552611703 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 2.7083030051243817,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.708295526935343 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:16",
            "value": 0.6453938522673636,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.6453588041398164 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.6406883564333218,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.6406118429657005 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:16384",
            "value": 13.755730796238689,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.754318354163832 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 14.083643657519094,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 14.082081166495744 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 14.598564621798431,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 14.598529035141521 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 13.747779351946326,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.74560408191916 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:256",
            "value": 1.9261023541849087,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.9259761056049929 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 1.9191617886973673,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.9191725700245172 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:8192",
            "value": 7.742369647648775,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.7423495022926305 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 7.886119099317215,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.885836992360557 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 8.128570883134673,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 8.127678328352044 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 7.7390303293575595,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.738236000315277 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:1350",
            "value": 1.2887248347722233,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.2886558529438086 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 1.3063767008969296,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.3062939829340254 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:16",
            "value": 0.22201506242805066,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.22199175693701717 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.23139305202194524,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.23136819752374332 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:16384",
            "value": 12.81613345102934,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.816002615403907 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 13.231900229816347,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.231410369066841 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 13.716870359993601,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.715377363775778 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 12.817100313883207,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.817072848542367 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:256",
            "value": 0.42232264760153254,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.422311107614632 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.4299054858347871,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.42988679531419394 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:8192",
            "value": 6.519474268616209,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.519124567818336 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 6.721239426965933,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.720366097745232 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 6.93429187009162,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.933232151702588 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 6.522563778055764,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.522537833875812 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:1350",
            "value": 2.706782732421668,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.7062983423122597 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 2.7205609182041455,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.7204549620639122 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:16",
            "value": 0.19631130003455585,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.19627040003677457 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.20582095212717166,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.20582068250676927 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:16384",
            "value": 30.18541846819293,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 30.182014669547204 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 30.39425054196995,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 30.392280891918965 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 30.92782991479562,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 30.927604291579986 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 30.193610323571477,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 30.187697072414334 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:256",
            "value": 0.6407253140715722,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.6406284538065218 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.6487568343465885,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.6487124309611757 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:8192",
            "value": 15.18187799192393,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.18114532172449 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 15.277347345475826,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.276210882762317 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 15.519361440080612,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.518512553291933 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 15.173361123980929,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.172910761153185 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:1350",
            "value": 0.32178470520168234,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.321713064449644 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 0.32760382373975966,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.32760349960897867 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:16",
            "value": 0.10635163563735842,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.10634706586630074 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.11125488059944369,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.11123937751881185 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:16384",
            "value": 2.306091830271918,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.306088804446186 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 2.568388957393383,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.568204008814642 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 3.241639172692466,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.2416292874678247 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 2.305671905581964,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.305564753461034 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:256",
            "value": 0.13182083203799938,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.13180775068595682 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.13644202012955162,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.13643351115964694 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:8192",
            "value": 1.1998473849220086,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.1998449606277657 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 1.3229884865317991,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.322839465311381 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 1.6155663887424327,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.6155027764962244 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 1.1970302536893775,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.1969871691670149 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:1350",
            "value": 0.5753988924238878,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5753285838637613 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 0.5842735923963681,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.584239616479901 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:16",
            "value": 0.19370622393362774,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.19368970237305602 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.20302678888533757,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.20302660819503057 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:16384",
            "value": 4.408187651658157,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 4.407581603305206 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 4.837532300252117,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 4.837190420964249 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 5.310305358208664,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 5.309879847063282 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 4.415296182792552,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 4.415290053628946 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:256",
            "value": 0.27620030158570913,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.27619136222343743 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.28511886922750385,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.2851057531035284 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:8192",
            "value": 2.291749737058143,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.2914215729815757 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 2.4861027737636734,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.486094444866793 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 2.718825244466485,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.7187477076929882 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 2.3006090706404025,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.300499284205715 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:1350",
            "value": 0.7543740538011434,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.754310222788459 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 0.75814782736328,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.7581551982568655 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:16",
            "value": 0.17050586981015828,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.17049886312862952 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.17565336434768344,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.1756525618197558 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:16384",
            "value": 6.938485296187056,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.938478737659132 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 12.185372107491007,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.185115762626234 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 12.557904131490794,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.557908224608214 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 6.936548004543559,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.936380769774296 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:256",
            "value": 0.27108055589423175,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.2710719339622542 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.2717018030166937,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.2716782497586091 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:8192",
            "value": 3.554960853640611,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.5549517152595316 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 6.147807882854961,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.14756330741252 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 6.335113382778498,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.334322734603125 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 3.559232320851872,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.5592341331677524 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:1350",
            "value": 48.660643992062305,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 48.65549180734086 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 48.51169246031019,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 48.51161979165251 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:16",
            "value": 1.9690616224017883,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.9687176542571563 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 1.9734088196621673,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.9730256498426992 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:16384",
            "value": 561.3134771426433,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 561.3132514284708 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 560.8431142856522,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 560.8068085713772 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 560.9472171428414,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 560.9267914287232 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 559.7899199999899,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 559.6746371428806 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:256",
            "value": 11.294236984874285,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 11.293019161954247 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 11.269011346703962,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 11.266847507161929 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:8192",
            "value": 282.1950977011317,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 282.1356307471041 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 281.6603060345486,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 281.64118247127925 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 281.8544554598923,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 281.8568836206963 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 281.2429856320889,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 281.2262543102896 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:1350",
            "value": 0.8775574697137027,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.8774606840606973 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 0.8814430730755509,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.8814417998768731 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:16",
            "value": 0.2943665390986141,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.29436585516154723 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.29392329732883227,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.29390630959948527 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:16384",
            "value": 7.060632035410448,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.060376817331575 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 12.31000723816927,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.307990873610677 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 12.659878572354456,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.659860468122488 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 7.063787123013476,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.063356726410677 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:256",
            "value": 0.3972281397919972,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.3971684577290277 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.4004309075909556,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.40039033923358147 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:8192",
            "value": 3.683948117468714,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.683637481174516 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 6.265565252225037,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.26555387475205 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 6.443164093937019,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.4431540668904885 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 3.6836019457592863,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.683469480129273 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:1350",
            "value": 2.1541837741072896,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.154022657382326 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 2.1489267791169757,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.148845817206252 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:16",
            "value": 0.218896117555171,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.2188870429443134 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.21621363753178352,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.21620691014851764 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:16384",
            "value": 23.58136802214028,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 23.581317853706228 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 23.79654395337878,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 23.79356277318869 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 24.057388643603808,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 24.055571253372804 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 23.578270267003685,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 23.575008900644605 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:256",
            "value": 0.5850090185932373,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5850085135758404 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.5806740098145579,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.580632167782444 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:8192",
            "value": 11.899997995136967,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 11.899585722963717 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 11.989856207948403,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 11.988677492354501 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 12.114520393023597,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.114117290817648 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 11.895514521815132,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 11.89486711629997 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:1350",
            "value": 2.22227586050554,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.2221856151651367 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 2.2189047203577394,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.218671104515413 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:16",
            "value": 0.2310622675321116,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.23104784344560284 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.226644871596414,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.22661145266828003 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:16384",
            "value": 24.236165512983447,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 24.234642768861086 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 24.455887724548084,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 24.453516217564832 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 24.72126645650225,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 24.721471248423487 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 24.225839431406715,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 24.224761433861293 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:256",
            "value": 0.6087054013690406,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.608630706284855 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.6043301301999008,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.604278703424465 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:8192",
            "value": 12.232354054732212,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.232327252281578 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 12.32847101358402,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.327895372236776 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 12.457794375317766,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.45661528694408 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 12.227686759752185,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.22707661139164 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:1350",
            "value": 2.3925525165452615,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.39244023053051 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 2.395986001514928,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.395945374148279 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:16",
            "value": 0.15506533535341677,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.15506511031590706 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.14936433280745778,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.14936402945144572 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:16384",
            "value": 27.086903569453682,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 27.086838129490083 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 27.309784878868147,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 27.308525758837156 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 27.665692687751232,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 27.66406916996224 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 27.101725677165632,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 27.10025193476634 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:256",
            "value": 0.5416066499268766,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5415504014789297 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.5380430748802585,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5379957781018953 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:8192",
            "value": 13.601387885524625,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.600871214229207 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 13.699963776227085,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.697086783217324 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 13.867681272084848,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.86683335689115 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 13.594072507967473,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.59405108831242 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:1350",
            "value": 2.3944061836042896,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.3942990573192082 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 2.3933211728062522,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.3933186589494797 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:16",
            "value": 0.1515362326226943,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.15152223040793217 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.15070617493332938,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.1506995690651564 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:16384",
            "value": 27.099385243636153,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 27.09800858250727 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 27.311446935933446,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 27.308693871870865 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 27.669601416427817,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 27.666722521250545 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 27.09671244813301,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 27.09449253112165 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:256",
            "value": 0.5400509220407034,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5400521946775874 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.5365038385025942,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5364808789266435 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:8192",
            "value": 13.605546261624005,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.604165626302706 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 13.699561355699993,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.698277568138142 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 13.87021423518373,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.86898153389385 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 13.60496432537055,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.604532620766722 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:1350",
            "value": 2.393059867233098,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.3925152535750756 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 2.3939971767304615,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.3937507088732515 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:16",
            "value": 0.152872102964335,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.15286294618268562 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.1495861135049391,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.14956025691569255 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:16384",
            "value": 27.112608713696442,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 27.11150912862676 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 27.306381131547493,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 27.30641847825986 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 27.66460680021991,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 27.664250423252344 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 27.102017980636646,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 27.10051618257075 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:256",
            "value": 0.5397084267587363,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5396714908246224 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.5380300872093053,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5379385338965902 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:8192",
            "value": 13.600102165465923,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.599518461966174 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 13.69744459176936,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.695844242849248 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 13.864767427035238,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.864213941626854 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 13.59901824362172,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.597819644832873 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:1350",
            "value": 1.2455327337443827,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.24552942223352 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 1.250008667720451,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.250008125987859 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:16",
            "value": 0.2198472765640588,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.21984730465586333 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.21333318947430815,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.2133251514868187 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:16384",
            "value": 12.460830813214066,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.46038354510734 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 12.775862224252501,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.775178044635188 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 13.194888791709303,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.193088670612266 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 12.4642037013453,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.463701475449277 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:256",
            "value": 0.4123398267210517,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.4123241704962437 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.40883802052901325,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.4088383605941261 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:8192",
            "value": 6.343643037564091,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.343281930052206 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 6.484887749700019,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.483889833312285 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 6.671471790148371,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.671069143129811 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 6.3417644470313475,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.341457904613017 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:1350",
            "value": 2.1932458526951195,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.1931862863940954 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 2.396698580430292,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.3966901341110445 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:16",
            "value": 0.16144861555025364,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.1614481859955337 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.1581191978147472,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.15809845505776704 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:16384",
            "value": 24.410235924268175,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 24.408795964126348 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 24.746961120923395,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 24.746031431451698 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 25.327270144634088,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 25.32660007747897 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 24.397413638621433,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 24.395917745145205 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:256",
            "value": 0.52444417853424,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5244241639883163 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.5204809115131711,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5204800676177515 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:8192",
            "value": 12.271918595918065,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.271087848831543 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 12.433126697117334,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.432702893034362 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 12.775272143861063,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.774749294781188 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 12.273327745809796,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.273132661996128 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:1350",
            "value": 0.2954033509629566,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.2953917455140198 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 0.2961886313195944,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.2961638434941226 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:16",
            "value": 0.09455019582371195,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.09454367446114985 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.09116198809056361,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.09115949154918873 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:16384",
            "value": 2.1105459098132746,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.110321684411953 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 2.460862178361647,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.460772320308919 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 3.0418360337712107,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.0417458950246266 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 2.131009073640351,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.130860096099909 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:256",
            "value": 0.11944001007888541,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.11941292063715307 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.11661934294796547,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.11661022738135278 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:8192",
            "value": 1.1334426274839149,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.1334353637399193 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 1.2662941172661426,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.2661841199825339 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 1.5125573067461011,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.5125413748011935 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 1.097673965057614,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.0976698512484755 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:1350",
            "value": 0.56422820118768,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5641741430119361 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 0.5565261967007882,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5564562773974133 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:16",
            "value": 0.14128196827452974,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.14127610247040606 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.1346140276134405,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.13460918123817406 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:16384",
            "value": 4.584247250945521,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 4.583906228069077 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 4.825700664208034,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 4.824706691267429 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 5.2566204868932,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 5.256407924384442 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 4.573977042365462,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 4.57381227521152 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:256",
            "value": 0.22912688696578978,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.22911622819851468 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.22254177048294674,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.22254185914334595 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:8192",
            "value": 2.362608483066635,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.362194891373399 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 2.4710416288907466,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.47098279943551 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 2.6606927915436662,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.660687778503652 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 2.3549544832877563,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.3546598243634675 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:1350",
            "value": 0.3086332639706657,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.3086353276129979 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 0.3136416145573623,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.3136404105516341 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:16",
            "value": 0.09843075944840847,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.09842391313078326 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.09572232284400525,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.09571519151895172 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:16384",
            "value": 2.193543105951492,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.1935399910685827 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 2.589876989909234,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.589870765237926 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 3.182714274092549,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.182376504848523 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 2.189254532463933,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.189079306957674 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:256",
            "value": 0.12500772773944063,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.1250032622486788 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.12192837600454506,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.12192235781473222 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:8192",
            "value": 1.166134459379243,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.1660532413463545 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 1.3333892592741279,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.333385707663652 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 1.5853433014549296,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.5851239974282403 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 1.1649499175181621,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.1649484696361196 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:1350",
            "value": 2.5806979580555485,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.5806010578109935 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 2.5772908135099173,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.5768871205149493 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:16",
            "value": 0.23428654112871072,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.2342768830703564 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.23102649164674394,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.23101624329492293 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:16384",
            "value": 28.693912445094224,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 28.692554319179123 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 28.912786346206026,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 28.905871866700334 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 29.183585518472235,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 29.18353635280216 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 28.68140918397561,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 28.681294091841682 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:256",
            "value": 0.6748312868877664,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.6747783131783952 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.6710801531699099,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.671037409849531 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:8192",
            "value": 14.459997195984176,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 14.459042576739183 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 14.550892030275444,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 14.550884758084615 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 14.676275000001308,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 14.674773353296521 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 14.45382278761295,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 14.4525601769925 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:1350",
            "value": 1.283410901331108,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.2833725908663367 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 1.2908108284198025,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.2906568390018123 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:16",
            "value": 0.22101364373567867,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.22100048880483208 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.21841628685098122,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.2184154726422159 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:16384",
            "value": 12.817680666228759,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.816616982364726 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 13.184629983836547,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.183888873925559 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 13.66071018930773,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.659561316813438 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 12.806408520646727,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.80601261107779 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:256",
            "value": 0.4211611865710167,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.42110894590499265 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.4167032039791036,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.41665904572977047 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:8192",
            "value": 6.513699980060451,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.5134617455494235 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 6.6904652170957615,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.690461735391729 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 6.896223300970739,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.895774940200312 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 6.510039350468389,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.510021584645249 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:1350",
            "value": 2.702447700184387,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.7019194169955325 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 2.7234509232927335,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.7232817632262956 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:16",
            "value": 0.1922544414400456,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.19221172924777824 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.1887973253840042,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.18878937351094477 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:16384",
            "value": 30.113502924875725,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 30.109588208132287 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 30.3317500000022,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 30.329509900982835 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 31.239385714298756,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 31.23817519623278 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 30.218826697540567,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 30.218904475307234 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:256",
            "value": 0.6366749083532425,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.6366202746795817 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.6332504180574773,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.6331503360600526 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:8192",
            "value": 15.154440454121712,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.154396740809748 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 15.242365375645809,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.24233885518915 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 15.448221040187914,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.446362962956112 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 15.134986102532276,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.133724752931155 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:1350",
            "value": 0.32787323549391245,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.32785373588824196 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 0.32752397615013495,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.3275037746999336 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:16",
            "value": 0.10419032208000856,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.10417649237981655 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.10150975001592628,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.10149715981883636 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:16384",
            "value": 2.3916752769779395,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.391487920347483 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 2.774457702859019,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.7742489747433603 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 3.361894871004045,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.361889259563173 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 2.3851032439405957,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.385019955222579 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:256",
            "value": 0.12894483238120116,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.12893665444476715 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.12604309921660223,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.12603666296814914 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:8192",
            "value": 1.2387107944000735,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.2386359746017845 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 1.4232208540855305,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.4232176886553523 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 1.6668530024984711,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.6668494787632067 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 1.2333087970581493,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.2332055393586472 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:1350",
            "value": 0.6396017237558744,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.6395566740120229 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 0.6340093607172989,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.6339808583674069 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:16",
            "value": 0.15171169192364103,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.1517111503170376 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.14641501900468332,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.14641493614872894 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:16384",
            "value": 5.23484523109853,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 5.234094870424883 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 5.546176407414217,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 5.545989345466804 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 6.030688848591451,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.030467357226187 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 5.219623497178206,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 5.219387567827367 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:256",
            "value": 0.2506086557919808,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.2505934073627997 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.24542737114974225,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.2453990714816611 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:8192",
            "value": 2.6942944651572596,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.694288393003727 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 2.835338325607521,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.835325680764604 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 3.0502321400802166,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.0499865797899792 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 2.6854100423000955,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.685385060154619 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:1350",
            "value": 0.8210102358154365,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.8207443953747795 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 0.8156498663056555,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.815572311167292 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:16",
            "value": 0.18289968604914392,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.18289334446447672 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.1740410316780754,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.17403529805222642 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:16384",
            "value": 6.995007459475263,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.99477915650655 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 12.255072936180735,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.253674285004148 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 12.565795703072805,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.565016660236534 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 6.985373771779594,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.985355303734805 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:256",
            "value": 0.28241657126430664,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.28238670070466887 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.27472977218501643,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.27468372198512997 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:8192",
            "value": 3.5972914099104414,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.5969843548205764 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 6.179478060482354,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.178749794810891 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 6.33806569673485,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.338104106045816 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 3.5943131924570353,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.594200234793333 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:1350",
            "value": 47.80445654295473,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 47.8043723144278 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 47.81752252691227,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 47.80833006855872 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:16",
            "value": 1.598732268604944,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.598731737603547 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 1.587167717364736,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.5869467466170213 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:16384",
            "value": 567.1875173409801,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 567.1677716764136 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 567.49745375716,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 567.4691416185123 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 568.279887283448,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 568.2307947977595 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 567.5519739882848,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 567.5488236990684 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:256",
            "value": 9.898094776492597,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 9.89764801607174 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 9.906944837339582,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 9.905852293392078 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:8192",
            "value": 284.02925362314176,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 284.02901884056513 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 284.617778260758,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 284.617159420297 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 284.8149562684458,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 284.79612973764824 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 284.2299826589115,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 284.2199118497898 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:1350",
            "value": 0.9337598408335154,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.9337602263752066 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 0.9342343741054429,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.9341622050774703 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:16",
            "value": 0.29900553560254833,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.2989928428420708 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.28949809475985533,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.28948636645590997 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:16384",
            "value": 7.097873548294456,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.096808050205441 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 12.402460861306054,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.402412349588014 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 12.727662475574956,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.727273029315045 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 7.104046214531309,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.103255500869871 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:256",
            "value": 0.3986233265166615,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.39856899040113103 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.3949571104731401,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.3949397525356183 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:8192",
            "value": 3.7121365626307523,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.7120070762701993 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 6.321821893529263,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.320860853315539 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 6.501823581853496,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.501229049727222 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 3.7149606839551206,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.7149536700039443 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAESBlockDecrypt<128>/threads:1",
            "value": 0.015872942691325574,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.015872395832060803 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAESBlockDecrypt<256>/threads:1",
            "value": 0.02084935126167715,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.020848494840741943 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAESBlockDecryptSetup<128>/threads:1",
            "value": 0.019911389620017737,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.0199102602940056 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAESBlockDecryptSetup<256>/threads:1",
            "value": 0.024438052624349012,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.024435316273835536 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAESBlockEncrypt<128>/threads:1",
            "value": 0.015870932869039914,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.01586986379231248 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAESBlockEncrypt<256>/threads:1",
            "value": 0.020853776824341398,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.02085191750266334 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAESBlockEncryptSetup<128>/threads:1",
            "value": 0.016350403661851587,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.01634866230009653 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedAESBlockEncryptSetup<256>/threads:1",
            "value": 0.020056689989281493,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.020056679556092753 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedBase64/threads:1",
            "value": 6.155546844585766,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.155545714284274 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedCurve25519ArbitraryPointMultiply/threads:1",
            "value": 41.96011232349135,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 41.95817543859935 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedCurve25519BasePointMultiply/threads:1",
            "value": 25.714737857711064,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 25.714840509307106 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedECDHComputeKey/p224/threads:1",
            "value": 216.5404304635159,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 216.52365121411464 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedECDHComputeKey/p256/threads:1",
            "value": 51.986775304730415,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 51.98378325383815 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedECDHComputeKey/p384/threads:1",
            "value": 534.0340706520345,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 534.0052418479563 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedECDHComputeKey/p521/threads:1",
            "value": 1312.706066666275,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1312.7071400001946 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedECDHEphemeral/p224/threads:1",
            "value": 436.7924933035283,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 436.7937031249777 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedECDHEphemeral/p256/threads:1",
            "value": 65.75864151575803,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 65.75280348759087 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedECDHEphemeral/p384/threads:1",
            "value": 1072.5545760868604,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1072.4222554345702 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedECDHEphemeral/p521/threads:1",
            "value": 2626.8954594585825,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2626.7196081076117 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedECDHKeyGen/p224/threads:1",
            "value": 207.71340360173036,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 207.69280190676642 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedECDHKeyGen/p256/threads:1",
            "value": 8.756289215687465,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 8.755903297682998 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedECDHKeyGen/p384/threads:1",
            "value": 502.3823256409834,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 502.2767692307111 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedECDHKeyGen/p521/threads:1",
            "value": 1218.8959187497517,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1218.8931562499229 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedECDSASign/p224/threads:1",
            "value": 231.530694835717,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 231.52173239437812 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedECDSASign/p256/threads:1",
            "value": 19.91406016638236,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 19.911408279216513 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedECDSASign/p384/threads:1",
            "value": 573.8082251461786,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 573.7883040934673 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedECDSASign/p521/threads:1",
            "value": 1411.5293333328113,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1411.4577898547839 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedECDSAVerify/p224/threads:1",
            "value": 230.24490470303962,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 230.21492941242713 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedECDSAVerify/p256/threads:1",
            "value": 60.74209367282761,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 60.71919851130688 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedECDSAVerify/p384/threads:1",
            "value": 574.6089532180033,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 574.545198830046 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedECDSAVerify/p521/threads:1",
            "value": 1416.341949274336,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1416.247173914808 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedEd25519/threads:1",
            "value": 26.730394249115513,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 26.72923139819871 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedEd25519Sign/threads:1",
            "value": 26.895073585942292,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 26.895008099943585 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedEd25519Verify/threads:1",
            "value": 51.36133182544505,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 51.35360457691635 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHRSSDecap/threads:1",
            "value": 29.402557263402578,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 29.402478601567644 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHRSSEncap/threads:1",
            "value": 10.624109681971008,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 10.624082872031329 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHRSSGenerate/threads:1",
            "value": 137.2386358542981,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 137.23871568624742 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:1350/threads:1",
            "value": 2.7659673646197804,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.7658649434203917 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:16/threads:1",
            "value": 0.27260072862973417,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.2726010488609357 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:16384/threads:1",
            "value": 32.068240287309635,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 32.06720323211586 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:256/threads:1",
            "value": 0.5116027041707797,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5114824134905686 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:8192/threads:1",
            "value": 16.025677187243446,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 16.0242448078491 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:1350/threads:1",
            "value": 0.8381801514629098,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.8381788122538991 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:16/threads:1",
            "value": 0.05763469777977367,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.05762447207518755 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:16384/threads:1",
            "value": 9.687338520058388,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 9.687006718040617 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:256/threads:1",
            "value": 0.19676945863897963,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.19676106025133458 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:8192/threads:1",
            "value": 4.8665115667194225,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 4.8657323520656295 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:1350/threads:1",
            "value": 0.8983056133341354,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.8982054419837573 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:16/threads:1",
            "value": 0.058430772229823444,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.05842684154018303 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:16384/threads:1",
            "value": 10.337635635214918,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 10.337272166579561 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:256/threads:1",
            "value": 0.21503324022822543,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.21499967636343142 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:8192/threads:1",
            "value": 5.1970227622439635,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 5.196716612721813 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:1350/threads:1",
            "value": 2.6617708429420186,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.661693236387335 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:16/threads:1",
            "value": 0.2771832699553749,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.27716043270572893 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:16384/threads:1",
            "value": 30.68824647445644,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 30.688190849260984 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:256/threads:1",
            "value": 0.7524582685072103,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.7523956597713737 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:8192/threads:1",
            "value": 15.491200222298854,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.491227532552418 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHashToCurve/hash-to-curve P256_XMD:SHA-256_SSWU_RO_/threads:1",
            "value": 27.12414888028414,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 27.124072850427687 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHashToCurve/hash-to-curve P384_XMD:SHA-384_SSWU_RO_/threads:1",
            "value": 75.65009645062575,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 75.64410841050439 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedHashToCurve/hash-to-scalar P384_XMD:SHA-512/threads:1",
            "value": 1.3534488061458985,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.353446100075829 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLDSAKeyGen/ml_dsa_44/threads:1",
            "value": 51.09520109261182,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 51.09505827264208 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLDSAKeyGen/ml_dsa_65/threads:1",
            "value": 85.37530836236468,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 85.37214198605912 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLDSAKeyGen/ml_dsa_87/threads:1",
            "value": 128.88622529637158,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 128.88633465086454 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLDSAParsePubKey/ml_dsa_44/threads:1",
            "value": 4.452872346241012,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 4.4517865831441075 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLDSAParsePubKey/ml_dsa_65/threads:1",
            "value": 6.590239832216364,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.589534664428338 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLDSAParsePubKey/ml_dsa_87/threads:1",
            "value": 8.551477874566748,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 8.55049372822494 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLDSASign/ml_dsa_44/threads:1",
            "value": 206.24239915071922,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 206.24253715495428 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLDSASign/ml_dsa_65/threads:1",
            "value": 330.9849491525495,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 330.92798644069285 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLDSASign/ml_dsa_87/threads:1",
            "value": 380.9041439393942,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 380.8862594696237 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLDSAVerify/ml_dsa_44/threads:1",
            "value": 43.235782694869016,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 43.23572501102609 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLDSAVerify/ml_dsa_65/threads:1",
            "value": 68.45505668302653,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 68.45230615817393 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLDSAVerify/ml_dsa_87/threads:1",
            "value": 108.56521073009415,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 108.5574209070774 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLDSAVerifyBadSignature/ml_dsa_44/threads:1",
            "value": 43.22994328756696,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 43.22371776692939 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLDSAVerifyBadSignature/ml_dsa_65/threads:1",
            "value": 68.41795818813458,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 68.40575296166266 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLDSAVerifyBadSignature/ml_dsa_87/threads:1",
            "value": 108.42334585636647,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 108.41162154694432 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLKEM1024DecapOnly/threads:1",
            "value": 40.15821653675895,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 40.155935120532504 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLKEM1024EncapOnly/threads:1",
            "value": 26.955438100419247,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 26.940157287835312 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLKEM1024KeyGenDecap/threads:1",
            "value": 78.39898432474021,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 78.39658721866674 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLKEM1024KeyGenOnly/threads:1",
            "value": 38.986175815444355,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 38.98501412093429 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLKEM1024ParseEncap/threads:1",
            "value": 44.65776776033948,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 44.657742714465186 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLKEM1024ParseOnly/threads:1",
            "value": 18.513949526408815,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 18.501159754231452 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLKEM1024PrivateKeyFromSeedOnly/threads:1",
            "value": 38.95208187557818,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 38.98115182961656 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLKEM768DecapOnly/threads:1",
            "value": 31.354782239504864,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 31.354357919735776 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLKEM768EncapOnly/threads:1",
            "value": 21.21199621174192,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 21.21209036774843 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLKEM768KeyGenDecap/threads:1",
            "value": 58.82578609944865,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 58.81807729179292 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLKEM768KeyGenOnly/threads:1",
            "value": 28.23202989363686,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 28.22581833859917 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLKEM768ParseEncap/threads:1",
            "value": 33.07545440623979,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 33.07459492962697 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLKEM768ParseOnly/threads:1",
            "value": 12.605098435328753,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.585217199061422 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedMLKEM768PrivateKeyFromSeedOnly/threads:1",
            "value": 28.1599644186788,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 28.188813629763878 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndSign/2048/threads:1",
            "value": 764.267826771895,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 764.2685787399716 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndSign/3072/threads:1",
            "value": 2227.3442499996772,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2227.2511022724084 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndSign/4096/threads:1",
            "value": 4925.050774998852,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 4925.066274999068 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndVerify/2048/threads:1",
            "value": 19.512875049701123,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 19.510052286287873 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndVerify/3072/threads:1",
            "value": 40.73375259446358,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 40.728397052727374 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndVerify/4096/threads:1",
            "value": 70.6371859205861,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 70.63305920575743 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedRSAParsePrivateKey/2048/threads:1",
            "value": 113.24400057401677,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 113.21599999998641 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedRSAParsePrivateKey/3072/threads:1",
            "value": 224.81401382487311,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 224.7930391705198 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedRSAParsePrivateKey/4096/threads:1",
            "value": 379.323241312804,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 379.31067953668014 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedRSASign/2048/threads:1",
            "value": 643.3994802628418,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 643.3695888158165 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedRSASign/3072/threads:1",
            "value": 1980.1371800008383,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1979.8510400005398 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedRSASign/4096/threads:1",
            "value": 4505.300863635077,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 4504.95522727191 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedRSAVerify/2048/threads:1",
            "value": 17.10931474694734,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 17.106840575915705 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedRSAVerify/3072/threads:1",
            "value": 36.63280108330686,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 36.62993612251644 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedRSAVerify/4096/threads:1",
            "value": 63.60548574208567,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 63.599283862587775 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedRandom/InputSize:1350/threads:1",
            "value": 0.8997930671785166,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.8997920934417024 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedRandom/InputSize:16/threads:1",
            "value": 0.6550924433585555,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.6550135738429065 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedRandom/InputSize:16384/threads:1",
            "value": 3.145557689850566,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.145451435055496 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedRandom/InputSize:256/threads:1",
            "value": 0.6903212810937132,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.6903217708406637 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedRandom/InputSize:8192/threads:1",
            "value": 1.888268818557903,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.8881132602048951 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedSLHDSA/threads:1",
            "value": 34896.079166657044,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 34891.442833327346 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedSLHDSASign/threads:1",
            "value": 260474.8635000078,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 260456.84149997326 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedSLHDSAVerify/threads:1",
            "value": 260.2928834688986,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 260.29161517614926 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedSPAKE2/threads:1",
            "value": 122.87114612451475,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 122.86028843711219 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedScrypt/(N = 1024, r = 8, p = 16)/threads:1",
            "value": 27335.80825000104,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 27333.456000008027 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedScrypt/(N = 16384, r = 8, p = 1)/threads:1",
            "value": 27340.823750009236,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 27338.069875000314 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedSelfTest",
            "value": 4439.481454545041,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 4439.097772727894 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedSipHash/1350/threads:1",
            "value": 0.004055945457545702,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.004055446653500382 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedSipHash/16/threads:1",
            "value": 0.0009340166609914378,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.0009339748208171317 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedSipHash/16384/threads:1",
            "value": 0.0009345644713914267,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.0009344449452262094 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedSipHash/256/threads:1",
            "value": 0.0009344706800684365,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.000934434109000132 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedSipHash/8192/threads:1",
            "value": 0.0009339993753239801,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.0009339446193199376 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedTrustTokenKeyGen/SpeedTrustTokenKeyGen experiment_v1",
            "value": 1095.712780898714,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1095.7121460674205 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedTrustTokenKeyGen/SpeedTrustTokenKeyGen experiment_v2_pmb",
            "value": 1096.2417022476006,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1096.1911235954226 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedTrustTokenKeyGen/SpeedTrustTokenKeyGen experiment_v2_voprf",
            "value": 537.2343224041928,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 537.2338579235713 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "BM_SpeedX509/threads:1",
            "value": 3.945157606734875,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.944900881940164 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginIssueBatch1",
            "value": 649.2898112583512,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 649.2419271522757 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginIssueBatch10",
            "value": 6492.153766665372,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6491.768433334262 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginRedeemBatch1",
            "value": 0.1504786519112071,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.15047788785005115 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginRedeemBatch10",
            "value": 0.15163484063500626,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.15162235312799338 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1FinishIssueBatch1",
            "value": 7302.54484615391,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7301.440153846364 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1FinishIssueBatch10",
            "value": 26139.962750008293,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 26138.684875002484 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1IssueBatch1",
            "value": 6364.204999999856,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6363.579166668387 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1IssueBatch10",
            "value": 22705.98287499581,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 22705.906249996133 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1RedeemBatch1",
            "value": 1823.0906388888948,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1823.0289444442471 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1RedeemBatch10",
            "value": 1824.028555554841,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1823.6941388888931 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginIssueBatch1",
            "value": 649.1556456954651,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 649.1370960264442 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginIssueBatch10",
            "value": 6491.814466666786,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6491.805466667225 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginRedeemBatch1",
            "value": 0.14506566832747567,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.14505948009672068 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginRedeemBatch10",
            "value": 0.14423841129434706,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.1442322843819386 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbFinishIssueBatch1",
            "value": 7300.262269233407,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7300.022576923373 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbFinishIssueBatch10",
            "value": 26129.274500000574,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 26129.264749997106 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbIssueBatch1",
            "value": 6367.427571429321,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6367.417071429848 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbIssueBatch10",
            "value": 22725.650375001293,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 22723.886124999095 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbRedeemBatch1",
            "value": 1823.3156111109479,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1823.318750000327 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbRedeemBatch10",
            "value": 1822.4454629631734,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1822.3765370377291 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginIssueBatch1",
            "value": 648.4515331128448,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 648.4513841059158 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginIssueBatch10",
            "value": 6482.019733332814,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6481.764766668144 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginRedeemBatch1",
            "value": 0.13739648587512443,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.1373883414249799 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginRedeemBatch10",
            "value": 0.1374676695353373,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.1374674751992172 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfFinishIssueBatch1",
            "value": 2520.8966025645213,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2520.750820512154 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfFinishIssueBatch10",
            "value": 9326.727772728107,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 9326.399863634937 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfIssueBatch1",
            "value": 2437.2395500009247,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2436.9531499999653 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfIssueBatch10",
            "value": 9247.69063636497,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 9247.698818181892 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfRedeemBatch1",
            "value": 575.6208705881415,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 575.555147058621 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfRedeemBatch10",
            "value": 575.6466588235633,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 575.6338794118593 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 7763 64-Core Processor\ncpu_cores: 4\ncpu_bogomips: 4890.85"
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
        "date": 1788447136765,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:1350",
            "value": 2.897591383849275,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.8970708642780343 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 2.8979822141380884,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.897624545372671 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:16",
            "value": 0.6658072015205255,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.6657031290298578 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.6544988358402375,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.6545159570196961 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:16384",
            "value": 14.625551081281396,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 14.62469746458232 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 14.88431572145404,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 14.882296639810857 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 15.40378770028471,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.402521284950046 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 14.62139775952728,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 14.61819656459979 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:256",
            "value": 2.0429544352872337,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.0428307235131817 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 2.0465763858482218,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.0465027414679495 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:8192",
            "value": 8.236921498694382,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 8.23598158093883 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 8.338414538309795,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 8.337594430681698 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 8.585287116567685,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 8.585441454864313 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 8.225185222502603,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 8.225351637280149 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:1350",
            "value": 3.032924418964614,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.032857902076029 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 3.033656308121917,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.033713887167038 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:16",
            "value": 0.7977959537480361,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.797724910881593 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.7921093533739729,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.7920668439240993 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:16384",
            "value": 15.423081312980832,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.423324228590655 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 15.719402577643558,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.714237351900582 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 16.23756235527064,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 16.235014968576802 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 15.434549567276685,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.434087490170427 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:256",
            "value": 2.131991420555955,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.1315867948337104 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 2.1267345099146704,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.1265735128210155 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:8192",
            "value": 8.663802424347113,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 8.663449787648059 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 8.787264355461192,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 8.785599838752386 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 9.042543618889857,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 9.042383328711741 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 8.661516264473724,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 8.658026120390577 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:1350",
            "value": 2.69453812183538,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.693909145938602 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 2.695689923875699,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.6956152802769546 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:16",
            "value": 0.15533911369388428,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.1553244685312806 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.15763169067155525,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.157633925917129 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:16384",
            "value": 30.810829924478515,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 30.806164411579203 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 31.063741357429997,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 31.064486837932925 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 31.354601186653213,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 31.351576651694756 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 30.81621911346777,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 30.812155611456735 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:256",
            "value": 0.5958519011176386,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5958658315111581 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.5988000061106052,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5987550626336229 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:8192",
            "value": 15.461269224699674,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.459364361284434 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 15.595355679114508,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.595716838760762 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 15.713430553324557,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.713755493184872 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 15.480344745601698,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.47906514503558 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:1350",
            "value": 2.6962428736997426,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.696217127957116 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 2.6994757310901387,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.699422246042613 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:16",
            "value": 0.15990933838162724,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.1598832294283858 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.1618361190483293,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.16180475936230126 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:16384",
            "value": 30.810685295964316,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 30.81140097606724 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 31.07408423222703,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 31.072073604055458 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 31.360937820506088,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 31.354510576911764 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 30.81802988361352,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 30.81596335324856 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:256",
            "value": 0.5992783845196106,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5991743507051152 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.6019347787425744,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.6019123893098137 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:8192",
            "value": 15.462888438937744,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.46145863108869 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 15.597217477732533,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.593330629769454 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 15.707341014937365,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.705671752043902 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 15.465252959745138,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.46559337016161 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:1350",
            "value": 2.696479833827765,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.696522147022617 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 2.7063085603647807,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.7060749965430637 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:16",
            "value": 0.16238420934633466,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.16236228308799988 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.1640461543475012,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.1640288334105223 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:16384",
            "value": 30.82434119495875,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 30.81945298743334 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 31.089614176985958,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 31.083221059314656 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 31.368864203476374,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 31.366259756884382 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 30.81757628185242,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 30.815995124258414 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:256",
            "value": 0.6021563810686318,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.6020454811012951 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.6057149787077198,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.6057293988767567 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:8192",
            "value": 15.467143397414423,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.467425780018607 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 15.608138333328998,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.604695714286109 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 15.715989312119053,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.71540276438264 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 15.466350709777425,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.465569952682277 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:1350",
            "value": 1.41013528776972,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.4101667122301447 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 1.4140138225565966,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.4137141558570476 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:16",
            "value": 0.24869568087367444,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.24866753623558013 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.2528510647671903,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.25285642099368105 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:16384",
            "value": 14.048011805354438,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 14.047501727613124 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 14.43984316907692,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 14.439302596638072 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 14.833516810543282,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 14.83316787823674 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 14.049854387722903,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 14.04910940636739 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:256",
            "value": 0.4634554614694489,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.46342981692593127 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.46847492091737564,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.46844005283334733 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:8192",
            "value": 7.137851074683647,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.13753887067512 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 7.332237719034881,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.331910139283269 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 7.505501452268042,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.504822517773069 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 7.150980004387374,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.150143186135828 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:1350",
            "value": 2.725592826768609,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.725658097328979 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 2.730305893657887,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.7298985878615087 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:16",
            "value": 0.18053521744979265,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.18052508405309167 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.18438524982555288,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.1843546371913957 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:16384",
            "value": 30.76369221105574,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 30.762539101760364 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 28.032428999982322,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 28.031109714277136 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 28.500368673650378,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 28.497355439202693 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 30.779250627748933,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 30.776548336479056 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:256",
            "value": 0.6258300090052059,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.6258124357328206 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.6297173515012692,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.629701550835898 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:8192",
            "value": 15.456862533472972,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.455665826375988 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 14.2211929671648,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 14.220759808200194 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 14.417370408467871,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 14.414873273580454 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 15.457410088403213,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.456943400694636 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:1350",
            "value": 0.30157116410090773,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.3015335723818595 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 0.30786123195857973,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.3078593803487147 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:16",
            "value": 0.11203548168903195,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.11201899254125328 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.11679367816908086,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.11676547594675642 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:16384",
            "value": 2.0480076890005185,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.0480335510692234 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 2.26885046102626,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.26859377672029 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 2.810945887816707,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.81098283622519 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 2.05011630157271,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.0499958412252384 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:256",
            "value": 0.13279916853343962,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.13279376969951218 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.13791296184406632,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.13791613397783373 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:8192",
            "value": 1.0665054721661782,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.0664298452847158 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 1.1916188964332508,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.1915554719520105 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 1.4082452466283637,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.4081331735683247 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 1.0744877422971921,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.0745095517365837 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:1350",
            "value": 0.5672058804861171,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5671473814497096 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 0.5707409063856749,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5707525556645909 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:16",
            "value": 0.19934480711986374,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.1993411034463726 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.20212644194660762,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.20206565243078808 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:16384",
            "value": 4.28876292460315,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 4.288587948741113 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 4.662274138257985,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 4.661476980574505 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 5.137574151544785,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 5.136235684778208 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 4.292689165535534,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 4.29234630026745 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:256",
            "value": 0.2720170437799954,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.27197501404093744 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.275529580609772,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.2754928724122788 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:8192",
            "value": 2.243553234024438,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.2432618519943963 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 2.414755324912552,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.4145443845265913 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 2.635839228253105,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.6357180579218804 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 2.245028522415839,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.244959629459601 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:1350",
            "value": 0.3161249202117516,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.31610017385008365 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 0.32131406949143176,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.3213069191332903 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:16",
            "value": 0.11549036541476947,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.11547586213822755 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.11994629782880042,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.11994268746604989 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:16384",
            "value": 2.1278843652055293,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.1279326671246035 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 2.4074273161526882,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.407050094280239 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 2.939733062941091,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.9396520354517843 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 2.118722817372178,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.118785278396504 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:256",
            "value": 0.1368872466034195,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.1368834601736122 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.1414148182105784,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.14141747539593205 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:8192",
            "value": 1.1126849702417818,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.112708457801928 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 1.2613658662204847,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.2613487575692268 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 1.4891299520679968,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.4890390422809694 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 1.1049138778861356,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.104821105459835 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:1350",
            "value": 2.960129149110153,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.96002632695656 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 2.960065484642622,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.959911574590794 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:16",
            "value": 0.6647761391822784,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.6647628087938575 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.6615784604922036,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.6615652327649783 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:16384",
            "value": 15.353572122925858,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.353193242399726 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 15.618169835436088,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.61818908771809 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 16.22308902298578,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 16.220736402714188 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 15.35677841264994,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.35633852536603 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:256",
            "value": 2.069826855609172,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.0697406902528477 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 2.065596316650089,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.065637531560643 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:8192",
            "value": 8.603524639846533,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 8.60372716092663 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 8.718150470361149,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 8.717669062831366 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 9.003784582064517,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 9.002467422355943 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 8.60212896982286,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 8.59930694114614 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:1350",
            "value": 1.4524256384427634,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.4521001140599785 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 1.4574452912600544,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.4572598238026706 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:16",
            "value": 0.25361801964406305,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.25360663873447664 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.25716163182526364,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.25716842386314687 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:16384",
            "value": 14.41665175555121,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 14.414883796088953 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 14.907737612447196,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 14.905082710773957 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 15.34005130611688,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.337300015640347 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 14.415411877112765,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 14.413559385565964 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:256",
            "value": 0.4697982533989967,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.4697922595005453 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.4762142544078872,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.47622534737261957 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:8192",
            "value": 7.3223634122658465,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.322522708597489 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 7.567348982910978,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.56634708794145 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 7.7422088007593075,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.742402551746717 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 7.324729815519744,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.324878295615956 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:1350",
            "value": 3.252242127877692,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.252169749054753 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 3.2682209663943844,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.2679316669453016 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:16",
            "value": 0.2150775539224953,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.21503822492895236 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.21866419558366487,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.21865644114822252 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:16384",
            "value": 36.701440253931594,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 36.69379854369596 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 34.27070904646656,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 34.271367097451936 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 34.73066891412976,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 34.7224840312263 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 36.62562780270757,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 36.618901345282964 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:256",
            "value": 0.7510839125205887,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.7511024873755808 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.7559813226241913,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.7559406682425814 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:8192",
            "value": 18.408148475722903,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 18.407304949180602 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 17.341093000704355,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 17.34023157616084 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 17.53949651909609,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 17.536221081754608 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 18.39822449363281,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 18.396066579144883 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:1350",
            "value": 0.33292921973016404,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.33287623679655043 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 0.3443208651828057,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.34432790521349455 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:16",
            "value": 0.12091127711404107,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.12091332875227645 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.12412868054473011,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.12410680022949243 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:16384",
            "value": 2.2378351846351894,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.2378876673584887 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 2.565417071889354,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.5650794979627958 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 3.1302257365131947,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.1300590645335715 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 2.2720582362147677,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.271923780274447 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:256",
            "value": 0.141886282690134,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.14186380247324135 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.14607737233638,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.1460696087229081 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:8192",
            "value": 1.1670695302954726,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.1669574430221632 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 1.3333393553755923,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.3331447949912876 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 1.5580442727413302,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.5578427353824298 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 1.169890320508348,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.1697377876125077 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:1350",
            "value": 0.6135854994099772,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.613550109578622 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 0.6190489710687679,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.619032971774357 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:16",
            "value": 0.2138025484722951,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.2137945017557147 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.2182171787970492,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.21821149623778466 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:16384",
            "value": 4.610711191248227,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 4.610782623233507 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 5.102890168128461,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 5.102882753759704 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 5.589288559055317,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 5.588501908724018 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 4.621280009428301,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 4.621034653465609 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:256",
            "value": 0.3005796145716846,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.3005452815257009 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.3063420071508281,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.30629449744789283 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:8192",
            "value": 2.413202347624294,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.4130645965323785 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 2.639182190639667,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.639017476223291 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 2.867803409322917,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.8672789631922386 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 2.4156042179962642,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.415651707401082 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:1350",
            "value": 0.872470378993777,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.8724852148059317 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 0.8816884890217012,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.8817082044522708 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:16",
            "value": 0.2085420266605961,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.20849735706974354 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.2096427648069071,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.20963564531599235 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:16384",
            "value": 7.931289640590616,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.929968450156496 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 14.1168162430011,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 14.11714849920504 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 14.474866395865769,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 14.4708616691289 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 7.958855927258743,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.958543827952326 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:256",
            "value": 0.31205969972247105,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.31204147407823646 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.3157095748997501,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.3156873732137334 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:8192",
            "value": 4.078760207472381,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 4.0785044398334644 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 7.138405337322887,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.137719188085771 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 7.296020067263962,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.295587331838791 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 4.0775076763048235,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 4.076795319325678 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:1350",
            "value": 54.02642388307764,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 54.01436541644158 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 54.09072983426607,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 54.07910110498001 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:16",
            "value": 2.1364487246507204,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.136359482889968 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 2.131398641440593,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.1311458818656077 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:16384",
            "value": 623.3418184713231,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 623.2827165605155 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 624.8236114648987,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 624.7470636939742 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 625.5771464971134,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 625.5151528660949 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 624.7677183547337,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 624.6891202532494 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:256",
            "value": 12.478809568957017,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.476124004550195 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 12.495045217167995,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 12.491160170676261 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:8192",
            "value": 313.10931469648676,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 313.08106709263683 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 314.2452147435812,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 314.2353141024993 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 314.4518706070145,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 314.44496645372146 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 313.9474407052198,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 313.93157852559295 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:1350",
            "value": 1.0017518751212389,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.0015840146533526 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 1.0126267370244115,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.0126496497581587 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:16",
            "value": 0.34206336996457026,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.3420685236352177 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.34777183766042835,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.34773700457153284 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:16384",
            "value": 8.081872863158734,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 8.082087535435674 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 14.23946126505476,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 14.239803061076293 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 14.60472110814292,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 14.604947118243368 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 8.093322422594888,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 8.093527256258605 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:256",
            "value": 0.44860034226304724,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.4485702624934683 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.45384487003575524,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.45385463061778203 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:8192",
            "value": 4.2026111586865635,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 4.20244031001045 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 7.239686388787551,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.239823607524798 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 7.418304437916552,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.418458634718688 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 4.201736826332796,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 4.201806750566944 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:1350",
            "value": 2.3601892418304997,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.3602400509767527 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 2.3505068852377584,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.350449707825354 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:16",
            "value": 0.23718326336909476,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.2371188242137928 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.22892661941671827,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.2289050295157788 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:16384",
            "value": 25.906610626491947,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 25.907033174728195 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 26.119671024547273,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 26.11955496264652 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 26.316719305328178,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 26.315679725365346 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 25.9121650331219,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 25.904365033108014 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:256",
            "value": 0.6390147081879366,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.6390293281856341 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.630052622449669,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.6299954739937198 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:8192",
            "value": 13.074938533335018,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.074837133333968 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 13.156095244493633,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.154815220318616 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 13.248469354398662,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.243323277039213 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 13.058491010786005,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.058187042216066 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:1350",
            "value": 2.4382772124505254,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.437725872663922 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 2.4319338767222773,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.4318201243676008 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:16",
            "value": 0.2395673787375708,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.23955208713537562 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.2314046016931604,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.23138851912500166 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:16384",
            "value": 26.63411715139599,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 26.631969285131333 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 26.87445941870709,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 26.87291486152689 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 27.06075510203097,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 27.059904853820836 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 26.63394894079446,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 26.627263307990255 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:256",
            "value": 0.6544503970236412,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.6544061177003057 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.6459402072587002,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.6459305294780917 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:8192",
            "value": 13.434581962721955,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.43416879111976 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 13.533299502900064,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.531841135053009 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 13.627290241873391,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.625704962471863 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 13.428637522268513,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.428952788818393 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:1350",
            "value": 2.6949549056289954,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.694998789412254 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 2.694819335397987,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.694349690368915 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:16",
            "value": 0.1550196831051668,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.1550105555009384 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.1518540862830488,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.15182614618476983 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:16384",
            "value": 30.806923632928807,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 30.803095537397336 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 31.048401998099386,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 31.045409927049498 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 31.3509008304043,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 31.348951133820975 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 30.803541194962712,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 30.802699999997174 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:256",
            "value": 0.5968184756608121,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5967529050835938 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.592379318165137,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5923524808283662 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:8192",
            "value": 15.457499921140135,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.457800630916456 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 15.577632005080194,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.577241943166607 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 15.707981315148794,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.704934803536057 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 15.45703824317809,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.455944882512526 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:1350",
            "value": 2.6937104043232614,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.6934556314461435 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 2.691288993968022,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.6911848135957497 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:16",
            "value": 0.1556633164230889,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.1556460472957127 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.15146635171523065,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.1514424943780997 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:16384",
            "value": 30.803667085432362,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 30.803278109295746 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 31.0517868904325,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 31.04527485750482 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 31.32900127713816,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 31.328691570888584 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 30.812150534252474,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 30.808147077311975 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:256",
            "value": 0.5965474168309333,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5964703591651895 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.5914650250769585,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5913995075230918 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:8192",
            "value": 15.461439785624545,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.460019467213357 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 15.56880787551996,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.566978882183514 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 15.694511232350692,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.69382381258075 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 15.461766482649832,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.461991324921518 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:1350",
            "value": 2.69537423304456,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.694939166322595 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 2.6940867767462597,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.6936847766366787 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:16",
            "value": 0.15601613979786585,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.15600823716739748 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.15213013307477416,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.15213278292918106 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:16384",
            "value": 30.80588841675068,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 30.80392477179614 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 31.039432436698338,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 31.039933544305505 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 31.328687379877785,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 31.329258327994815 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 30.81579424711714,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 30.809084250234452 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:256",
            "value": 0.5970479855468873,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.596914008093305 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.5921261853388424,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5921306003299857 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:8192",
            "value": 15.456667954583054,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.457055196340054 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 15.573200079554905,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.572185361968824 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 15.704983143359007,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.702067827903381 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 15.459220365698013,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.45728444198636 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:1350",
            "value": 1.4067302045207388,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.4067045568711083 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 1.4048583779830517,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.4048892223718281 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:16",
            "value": 0.24591372563340008,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.24591842205322506 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.2437809087880635,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.24376687390981733 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:16384",
            "value": 14.04383746596044,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 14.042215350436441 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 14.401170903748792,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 14.39948706833608 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 14.800720982816179,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 14.798098658426857 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 14.027932788765217,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 14.027259529949173 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:256",
            "value": 0.4618853728241884,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.46182086256179017 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.4588419473744422,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.4588468019934502 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:8192",
            "value": 7.136958918056348,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.136532683778507 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 7.307769279534152,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.307282667065456 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 7.47879913747084,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.478964201200701 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 7.133719493560402,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.1338228188899375 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:1350",
            "value": 2.725621884659891,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.725210812843394 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 2.723812210800274,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.723521376520756 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:16",
            "value": 0.1754505162709593,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.17545518545981614 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.17131607693183004,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.1712937569297304 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:16384",
            "value": 30.769721437547275,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 30.766968612678756 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 28.01967482719179,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 28.01534965437793 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 28.47135795124019,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 28.467733604181046 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 30.764852528083033,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 30.758151997506822 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:256",
            "value": 0.621822329137127,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.6217907427830958 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.6174905419111734,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.6174183322519535 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:8192",
            "value": 15.463998893452805,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.460046474864376 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 14.234429242554251,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 14.233793148308909 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 14.507340235814965,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 14.506857111274314 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 15.44348983931763,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.439513626334449 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:1350",
            "value": 0.3103098248050067,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.31027115657630205 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 0.3081534155304661,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.3081094908629229 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:16",
            "value": 0.10552406994372074,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.10551736899089219 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.10305650013103713,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.10304817685991552 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:16384",
            "value": 2.198057618509354,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.197915586907404 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 2.5867200437747213,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.5865921892305366 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 2.990357990325624,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.989978978430787 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 2.2016904195658458,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.201189948394866 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:256",
            "value": 0.1284316309872013,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.1284249024617236 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.12574373969697997,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.12573642229393459 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:8192",
            "value": 1.1435576146812232,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.1435307040849998 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 1.3199221773926815,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.319819904512025 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 1.4890314810597585,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.4886955211419952 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 1.1424463842525845,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.1423433878271168 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:1350",
            "value": 0.63106304683312,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.6310226610879738 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 0.6307220133351297,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.6306836501637191 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:16",
            "value": 0.14835261618090703,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.14834946719345504 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.14037862790415298,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.14038075329966904 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:16384",
            "value": 5.154956578881163,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 5.154072438625649 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 5.466127610984089,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 5.465060825489017 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 5.824668468897043,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 5.824763323628471 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 5.150596351382429,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 5.150165953347315 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:256",
            "value": 0.25070335699618573,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.2507051739404737 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.24456742895043077,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.24455320779834286 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:8192",
            "value": 2.6613383620685953,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.661051344610601 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 2.8154219194321817,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.8153080272501345 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 2.9678434604900623,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.9674479109905465 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 2.654270001894971,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.6537518736969896 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:1350",
            "value": 0.3271396815446054,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.3270881987145753 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 0.32713484611027305,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.32709054602207766 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:16",
            "value": 0.11185622009427998,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.11185922980809153 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.1090846282282402,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.10907663916510266 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:16384",
            "value": 2.2958717301674874,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.2957822955170455 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 2.739018547530229,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.7381525205611856 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 3.1593752906604364,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.159249547861639 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 2.3193147732111856,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.319365783001596 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:256",
            "value": 0.13337501862573062,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.13337430708683456 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.12986379856362687,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.12985911537207032 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:8192",
            "value": 1.2085996996033879,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.2086245781464524 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 1.4002780684620606,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.4000865399695102 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 1.5829656892623223,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.5828171858460491 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 1.2055902063762873,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.2055300892902077 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:1350",
            "value": 2.8424439820198133,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.842482294083518 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 2.8336814884386974,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.8336008815033127 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:16",
            "value": 0.2528081744459018,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.25281199058022885 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.24582612691904107,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.24583408938923487 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:16384",
            "value": 31.679368012925572,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 31.676536348949007 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 31.888074869793986,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 31.887095703111065 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 32.05767593198942,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 32.055673969912746 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 31.672883559432723,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 31.667440245475813 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:256",
            "value": 0.7400288257626054,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.7400017358098421 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.7302736372840964,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.7302368342713803 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:8192",
            "value": 15.960060820706982,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.95849259078349 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 16.045875981677558,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 16.04168291884983 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 16.12118509061194,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 16.121404365729646 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 15.950131536079732,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.948624531688012 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:1350",
            "value": 1.450851282127023,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.4508785236295347 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 1.4515662931699673,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.4516020032093166 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:16",
            "value": 0.2528993277774902,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.25288058831709276 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.2512259276728189,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.25120412902825806 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:16384",
            "value": 14.405691299862486,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 14.40573318121152 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 14.87349992416038,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 14.87281525860432 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 15.292900826451554,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 15.292179869014035 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 14.400270778269952,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 14.399743024963016 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:256",
            "value": 0.4684217741010854,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.4683597326238436 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.46439592522240203,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.46440757725780796 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:8192",
            "value": 7.322763445691943,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.32160902621724 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 7.544784371872112,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.544879842870563 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 7.726076132334566,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.7220451752668735 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 7.314708376848946,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.313134119053397 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:1350",
            "value": 3.2503152751056303,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.250387552265368 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 3.271600552247641,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.271383279551028 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:16",
            "value": 0.21031086973308932,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.21029239659421636 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.20666244359743158,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.20663764546478638 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:16384",
            "value": 36.7249992512199,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 36.717013290903715 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 34.212051742158195,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 34.20982177699514 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 34.93937272396353,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 34.93851292789783 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 36.70862921346733,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 36.709473033709976 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:256",
            "value": 0.7463696284563003,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.746302497010835 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.7428120885038825,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.7426457833975754 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:8192",
            "value": 18.452335690044094,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 18.452703337105206 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 17.33731510369844,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 17.337813951430256 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 17.525315485844523,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 17.525653145849002 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 18.453322492454618,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 18.45243891403286 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:1350",
            "value": 0.3463484605249803,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.34632271713357843 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 0.34517895829899853,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.34514098581748587 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:16",
            "value": 0.11725420907179913,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.11725067897881927 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.11418011221846039,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.11417890871302801 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:16384",
            "value": 2.4836507828038537,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.4837013295233037 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 2.9263602577846295,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.926072706435648 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 3.3801533505608545,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.3799337639958416 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 2.4913325307724103,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.4907744630989543 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:256",
            "value": 0.13874596125013589,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.13870587872331386 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.1354094444365168,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.13541321693101216 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:8192",
            "value": 1.2925041496791432,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.2924462982753142 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 1.4963168005855523,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.4961032369219556 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 1.68429000617918,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.684097569766399 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 1.2697015058508974,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.2692649994752803 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:1350",
            "value": 0.7156291556553864,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.7156419164562108 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 0.7140919147702263,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.7139316499658331 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:16",
            "value": 0.16734369999987447,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.1673479430090195 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.16063780852451534,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.16063379125605995 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:16384",
            "value": 5.927443615607764,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 5.927016308287744 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 6.27817189400032,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.277220092171434 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 6.694023399603312,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.693473423514956 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 5.92332702066061,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 5.922621239579306 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:256",
            "value": 0.2744952643078408,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.2744606087345124 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.27065699802754095,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.2706467040924874 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:8192",
            "value": 3.0523709657304225,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.051773956157161 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 3.226628210624864,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.226438392299277 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 3.4094569322254777,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.408669037101921 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 3.0483574334607426,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.0484193297933038 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:1350",
            "value": 0.9181450084364922,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.9179953177724618 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 0.9135488291635466,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.9135558280721122 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:16",
            "value": 0.21573205335058163,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.21573607382323975 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.21062034927382478,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.2106072150351214 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:16384",
            "value": 8.019921427084306,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 8.020092386788255 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 14.234484538327953,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 14.232542392566666 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 14.566608602310325,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 14.560550266505661 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 7.978419786746757,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.978561248575676 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:256",
            "value": 0.32166892198134656,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.3216157107855574 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.3167164322840039,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.3167214248152965 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:8192",
            "value": 4.120804703221895,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 4.120277770790828 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 7.128112287058461,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.127507357737956 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 7.337906903996144,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.33771549862372 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 4.112843288549444,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 4.112929391456417 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:1350",
            "value": 53.62557926494013,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 53.62363055403334 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 53.72494410961461,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 53.71809315069068 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:16",
            "value": 1.7516173044928969,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.7513587926929617 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 1.7459332817034432,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.7454676600969286 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:16384",
            "value": 637.403948051737,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 637.4176818180978 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 638.0399253247288,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 638.0124707793095 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 637.9848441557581,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 637.9179448051908 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 637.8071143790205,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 637.6774084965938 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:256",
            "value": 11.098876573308681,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 11.097658351287153 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 11.084493132807284,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 11.08396997729881 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:8192",
            "value": 319.7702003256823,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 319.67552443002774 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 319.5342173201877,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 319.5429722221646 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 319.586322475575,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 319.53596742671476 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 318.93320873778094,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 318.8891294498504 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:1350",
            "value": 1.0558118877430767,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.0557362531490515 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:1350/IOVecFirst:1350/IOVecOthers:0",
            "value": 1.05527627242443,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.0550875371715465 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:16",
            "value": 0.35145102759862146,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.3513755776656099 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:16/IOVecFirst:16/IOVecOthers:0",
            "value": 0.34952598847158123,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.34943583374206766 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:16384",
            "value": 8.126106226196635,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 8.125919150523583 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:16384/IOVecFirst:1456/IOVecOthers:1456",
            "value": 14.341999113739508,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 14.340446824219736 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:16384/IOVecFirst:1457/IOVecOthers:1456",
            "value": 14.673521135175017,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 14.672571844661025 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:16384/IOVecFirst:16384/IOVecOthers:0",
            "value": 8.1314146782945,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 8.130776699028827 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:256",
            "value": 0.4570661656645208,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.4570355978878783 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:256/IOVecFirst:256/IOVecOthers:0",
            "value": 0.45439677425305225,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.4543771765020869 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:8192",
            "value": 4.24689479686658,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 4.246593432604292 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:8192/IOVecFirst:1456/IOVecOthers:1456",
            "value": 7.260740703627727,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.260906108512463 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:8192/IOVecFirst:1457/IOVecOthers:1456",
            "value": 7.430626911430862,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.429368546554116 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:8192/IOVecFirst:8192/IOVecOthers:0",
            "value": 4.267774159846642,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 4.266907996691628 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAESBlockDecrypt<128>/threads:1",
            "value": 0.01756934437368228,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.017568903113646235 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAESBlockDecrypt<256>/threads:1",
            "value": 0.023189836067045125,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.02318722332353046 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAESBlockDecryptSetup<128>/threads:1",
            "value": 0.02405364088672036,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.024052608752266013 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAESBlockDecryptSetup<256>/threads:1",
            "value": 0.02673729329315646,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.02672713364347578 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAESBlockEncrypt<128>/threads:1",
            "value": 0.017576859413266525,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.017572329926085907 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAESBlockEncrypt<256>/threads:1",
            "value": 0.023194445627735566,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.02319205999290138 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAESBlockEncryptSetup<128>/threads:1",
            "value": 0.020595537108360946,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.02059366688952813 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedAESBlockEncryptSetup<256>/threads:1",
            "value": 0.023290171487068332,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.023289415307001977 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedBase64/threads:1",
            "value": 6.951485595683366,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 6.951658411974694 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedCurve25519ArbitraryPointMultiply/threads:1",
            "value": 47.3240089328879,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 47.321400531132774 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedCurve25519BasePointMultiply/threads:1",
            "value": 28.139919701746567,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 28.133920562082732 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedECDHComputeKey/p224/threads:1",
            "value": 228.25925116273729,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 228.22960116286595 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedECDHComputeKey/p256/threads:1",
            "value": 57.51588200239864,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 57.50113766388095 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedECDHComputeKey/p384/threads:1",
            "value": 604.2725771604858,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 604.2839783950319 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedECDHComputeKey/p521/threads:1",
            "value": 1484.092909091249,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1484.118787879116 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedECDHEphemeral/p224/threads:1",
            "value": 458.34616121516785,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 458.3574953272508 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedECDHEphemeral/p256/threads:1",
            "value": 72.92219888890267,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 72.91363148146536 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedECDHEphemeral/p384/threads:1",
            "value": 1210.6597000000718,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1210.4461062495632 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedECDHEphemeral/p521/threads:1",
            "value": 2974.0058030308155,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2973.7184696976083 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedECDHKeyGen/p224/threads:1",
            "value": 216.48602649010817,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 216.46503200881716 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedECDHKeyGen/p256/threads:1",
            "value": 9.787274874873708,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 9.785894994995235 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedECDHKeyGen/p384/threads:1",
            "value": 564.7420497075439,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 564.7218070175246 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedECDHKeyGen/p521/threads:1",
            "value": 1379.327971831021,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1379.1609577468057 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedECDSASign/p224/threads:1",
            "value": 243.92199751245454,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 243.914097014854 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedECDSASign/p256/threads:1",
            "value": 22.137131483591325,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 22.136638731599657 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedECDSASign/p384/threads:1",
            "value": 646.012559602673,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 645.9138841059605 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedECDSASign/p521/threads:1",
            "value": 1594.7322377051992,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1594.6211147544745 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedECDSAVerify/p224/threads:1",
            "value": 243.1734243159593,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 243.13720099257245 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedECDSAVerify/p256/threads:1",
            "value": 67.02362300046616,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 67.01191949852614 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedECDSAVerify/p384/threads:1",
            "value": 654.3333799978275,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 654.304693334969 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedECDSAVerify/p521/threads:1",
            "value": 1604.587721315932,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1604.486532787949 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedEd25519/threads:1",
            "value": 29.20156816826268,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 29.199007010739546 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedEd25519Sign/threads:1",
            "value": 29.405050913440213,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 29.400000000003956 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedEd25519Verify/threads:1",
            "value": 56.81949708286171,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 56.820685239208515 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedHRSSDecap/threads:1",
            "value": 29.527021465032437,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 29.52732542780086 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedHRSSEncap/threads:1",
            "value": 9.952926812032906,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 9.953129820311377 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedHRSSGenerate/threads:1",
            "value": 137.12903491617635,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 137.13170321231036 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:1350/threads:1",
            "value": 3.106520438558045,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.1055606343869413 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:16/threads:1",
            "value": 0.2900847542138555,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.29007829441079647 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:16384/threads:1",
            "value": 36.00796953008299,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 36.00187775329921 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:256/threads:1",
            "value": 0.5691031110564585,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.5690548960561886 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:8192/threads:1",
            "value": 17.98215443339513,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 17.979549300951785 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:1350/threads:1",
            "value": 0.9293500246226116,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.9293730704396147 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:16/threads:1",
            "value": 0.06331982056122801,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.06331104830004228 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:16384/threads:1",
            "value": 10.928403468661006,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 10.927950312291069 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:256/threads:1",
            "value": 0.207032779790274,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.207013660181319 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:8192/threads:1",
            "value": 5.484478743635513,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 5.484414247356201 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:1350/threads:1",
            "value": 1.0041275347618175,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.0040199655713136 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:16/threads:1",
            "value": 0.06600692295584007,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.06599406152124428 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:16384/threads:1",
            "value": 11.665198571425403,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 11.665403154764034 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:256/threads:1",
            "value": 0.23177952592116155,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.23175583379823736 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:8192/threads:1",
            "value": 5.85794243401265,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 5.85722491938328 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:1350/threads:1",
            "value": 2.9956546953742005,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.9953573217286875 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:16/threads:1",
            "value": 0.30001837627594163,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.3000129072372078 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:16384/threads:1",
            "value": 35.07027422206656,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 35.063551449790864 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:256/threads:1",
            "value": 0.8375423405421566,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.8373237861664837 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:8192/threads:1",
            "value": 17.473969740121085,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 17.473597365610125 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedHashToCurve/hash-to-curve P256_XMD:SHA-256_SSWU_RO_/threads:1",
            "value": 29.569020657421788,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 29.56498703256935 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedHashToCurve/hash-to-curve P384_XMD:SHA-384_SSWU_RO_/threads:1",
            "value": 85.20426192540927,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 85.19078707718003 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedHashToCurve/hash-to-scalar P384_XMD:SHA-512/threads:1",
            "value": 1.437029888395164,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1.4370027937870349 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedMLDSAKeyGen/ml_dsa_44/threads:1",
            "value": 56.20477259725411,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 56.20332637297571 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedMLDSAKeyGen/ml_dsa_65/threads:1",
            "value": 93.84408645535008,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 93.83493131605255 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedMLDSAKeyGen/ml_dsa_87/threads:1",
            "value": 142.0128704512403,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 141.9993187773017 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedMLDSAParsePubKey/ml_dsa_44/threads:1",
            "value": 4.8280896948454775,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 4.828170254791489 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedMLDSAParsePubKey/ml_dsa_65/threads:1",
            "value": 7.209074693218087,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7.208849180689488 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedMLDSAParsePubKey/ml_dsa_87/threads:1",
            "value": 9.56286958853514,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 9.561086095942837 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedMLDSASign/ml_dsa_44/threads:1",
            "value": 230.62615759636122,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 230.586287981865 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedMLDSASign/ml_dsa_65/threads:1",
            "value": 366.9518740600796,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 366.8938815790735 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedMLDSASign/ml_dsa_87/threads:1",
            "value": 418.3742231403786,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 418.382266528894 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedMLDSAVerify/ml_dsa_44/threads:1",
            "value": 47.27437421684866,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 47.273139036134864 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedMLDSAVerify/ml_dsa_65/threads:1",
            "value": 75.33622943887623,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 75.32908262875603 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedMLDSAVerify/ml_dsa_87/threads:1",
            "value": 119.24742700727661,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 119.23940815086776 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedMLDSAVerifyBadSignature/ml_dsa_44/threads:1",
            "value": 47.30125361619691,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 47.28605761813155 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedMLDSAVerifyBadSignature/ml_dsa_65/threads:1",
            "value": 75.45318946967868,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 75.45453843194946 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedMLDSAVerifyBadSignature/ml_dsa_87/threads:1",
            "value": 119.36466300370348,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 119.3660818070488 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedMLKEM1024DecapOnly/threads:1",
            "value": 42.57146302790602,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 42.57898999483262 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedMLKEM1024EncapOnly/threads:1",
            "value": 28.559078377287193,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 28.543726761048255 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedMLKEM1024KeyGenDecap/threads:1",
            "value": 83.12690731294046,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 83.124818452379 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedMLKEM1024KeyGenOnly/threads:1",
            "value": 41.56513587655339,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 41.557863266189386 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedMLKEM1024ParseEncap/threads:1",
            "value": 47.870980654907484,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 47.88028174680416 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedMLKEM1024ParseOnly/threads:1",
            "value": 20.4870067864033,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 20.468157235189416 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedMLKEM1024PrivateKeyFromSeedOnly/threads:1",
            "value": 41.76625532346411,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 41.79555323685342 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedMLKEM768DecapOnly/threads:1",
            "value": 33.27459043108193,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 33.27510332567529 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedMLKEM768EncapOnly/threads:1",
            "value": 22.628685453966547,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 22.631790802299516 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedMLKEM768KeyGenDecap/threads:1",
            "value": 62.33501938970394,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 62.32073521935531 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedMLKEM768KeyGenOnly/threads:1",
            "value": 30.071035703300346,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 30.070342720837715 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedMLKEM768ParseEncap/threads:1",
            "value": 35.62476805813483,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 35.62994682375428 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedMLKEM768ParseOnly/threads:1",
            "value": 13.958944151949112,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 13.950216128082536 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedMLKEM768PrivateKeyFromSeedOnly/threads:1",
            "value": 30.267317480201847,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 30.295435762468692 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndSign/2048/threads:1",
            "value": 853.9285478265226,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 853.7979130435162 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndSign/3072/threads:1",
            "value": 2491.1748205136646,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2490.996794871118 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndSign/4096/threads:1",
            "value": 5538.032666666797,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 5538.1666111110735 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndVerify/2048/threads:1",
            "value": 21.539135361547533,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 21.53680478394322 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndVerify/3072/threads:1",
            "value": 45.66376447245196,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 45.65519117646742 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndVerify/4096/threads:1",
            "value": 79.17935068604008,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 79.16997820823268 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedRSAParsePrivateKey/2048/threads:1",
            "value": 118.87174393205449,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 118.86381978155366 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedRSAParsePrivateKey/3072/threads:1",
            "value": 245.06842253519517,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 245.0308690140686 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedRSAParsePrivateKey/4096/threads:1",
            "value": 408.85179375014974,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 408.74587291644576 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedRSASign/2048/threads:1",
            "value": 725.5358148147142,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 725.4605037036088 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedRSASign/3072/threads:1",
            "value": 2234.3048977268927,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2234.1829545453606 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedRSASign/4096/threads:1",
            "value": 5088.763973681784,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 5087.704026316349 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedRSAVerify/2048/threads:1",
            "value": 19.157073860298667,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 19.15537429074503 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedRSAVerify/3072/threads:1",
            "value": 41.26151705755694,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 41.2554678038167 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedRSAVerify/4096/threads:1",
            "value": 71.75617349928262,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 71.75049670570114 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedRandom/InputSize:1350/threads:1",
            "value": 0.9558787548486096,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.9557926449649317 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedRandom/InputSize:16/threads:1",
            "value": 0.7017263233988458,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.7015141859200293 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedRandom/InputSize:16384/threads:1",
            "value": 3.43344067055943,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.4329776771664546 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedRandom/InputSize:256/threads:1",
            "value": 0.7375526343531711,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.7375099847142077 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedRandom/InputSize:8192/threads:1",
            "value": 2.048493055265687,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2.048441538911216 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedSLHDSA/threads:1",
            "value": 38396.97933331839,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 38391.32549999628 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedSLHDSASign/threads:1",
            "value": 286564.0530000064,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 286541.9720000091 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedSLHDSAVerify/threads:1",
            "value": 286.83358507469706,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 286.80429104480334 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedSPAKE2/threads:1",
            "value": 136.80217178766242,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 136.80293784915102 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedScrypt/(N = 1024, r = 8, p = 16)/threads:1",
            "value": 30932.331833317527,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 30931.325166676514 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedScrypt/(N = 16384, r = 8, p = 1)/threads:1",
            "value": 30956.31916667685,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 30954.8570000023 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedSelfTest",
            "value": 4959.166800000503,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 4958.587100000144 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedSipHash/1350/threads:1",
            "value": 0.004574059733570388,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.004573686813213999 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedSipHash/16/threads:1",
            "value": 0.0010548173944767865,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.0010547662185483113 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedSipHash/16384/threads:1",
            "value": 0.001054854624232297,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.0010548729773350025 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedSipHash/256/threads:1",
            "value": 0.0010554050639863428,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.0010552329931499621 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedSipHash/8192/threads:1",
            "value": 0.001055937569054585,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.0010559585208901516 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedTrustTokenKeyGen/SpeedTrustTokenKeyGen experiment_v1",
            "value": 1175.2569337346586,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1175.1858734939362 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedTrustTokenKeyGen/SpeedTrustTokenKeyGen experiment_v2_pmb",
            "value": 1174.873409638279,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 1174.8194277109599 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedTrustTokenKeyGen/SpeedTrustTokenKeyGen experiment_v2_voprf",
            "value": 605.6726203702128,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 605.6015493827418 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "BM_SpeedX509/threads:1",
            "value": 3.7717175288361178,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 3.7717695675662606 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginIssueBatch1",
            "value": 731.2920522387749,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 731.1734962686127 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginIssueBatch10",
            "value": 7311.433692306169,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7311.16053846119 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginRedeemBatch1",
            "value": 0.15432257373075728,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.15431372838927054 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginRedeemBatch10",
            "value": 0.15727112352884312,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.15727166595280087 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1FinishIssueBatch1",
            "value": 8305.159749999311,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 8304.37100000007 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1FinishIssueBatch10",
            "value": 29667.795499998803,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 29656.73933332861 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1IssueBatch1",
            "value": 7097.014964285465,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7096.250928571278 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1IssueBatch10",
            "value": 25389.354875017034,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 25389.64262500798 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1RedeemBatch1",
            "value": 2003.4378469384424,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2003.4466020412806 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1RedeemBatch10",
            "value": 2003.6899387756253,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2003.3865102043226 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginIssueBatch1",
            "value": 730.8346641791422,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 730.7770522389553 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginIssueBatch10",
            "value": 7306.672961542169,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7305.848846154407 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginRedeemBatch1",
            "value": 0.14966495785816505,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.14966745398322928 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginRedeemBatch10",
            "value": 0.14942538269739175,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.14940936465144145 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbFinishIssueBatch1",
            "value": 8309.778458335397,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 8309.862083336839 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbFinishIssueBatch10",
            "value": 29647.30799999415,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 29642.881999999798 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbIssueBatch1",
            "value": 7085.442857142458,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7085.256321429612 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbIssueBatch10",
            "value": 25382.503125001676,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 25380.552749993512 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbRedeemBatch1",
            "value": 2003.9230000002576,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2003.9509183677394 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbRedeemBatch10",
            "value": 2004.0344795920741,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2004.0338061228479 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginIssueBatch1",
            "value": 731.7983619401501,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 731.6706529848321 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginIssueBatch10",
            "value": 7316.507884612433,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 7316.336769229373 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginRedeemBatch1",
            "value": 0.14111576410622712,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.14108087107518533 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginRedeemBatch10",
            "value": 0.14200027551800068,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 0.14200201757240488 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfFinishIssueBatch1",
            "value": 2844.450602941355,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2844.16998529438 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfFinishIssueBatch10",
            "value": 10596.582444444872,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 10595.333722221767 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfIssueBatch1",
            "value": 2759.716944444632,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 2759.3373888884626 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfIssueBatch10",
            "value": 10510.79383333647,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 10510.37055555574 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfRedeemBatch1",
            "value": 652.1760466665683,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 652.153890000117 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfRedeemBatch10",
            "value": 652.1244966666018,
            "unit": "us/iter",
            "extra": "iterations: 10\ncpu: 652.0905266667872 us\nthreads: 1\nazure_vmsize: Standard_D4ads_v5\ncpu_model: AMD EPYC 9V74 80-Core Processor\ncpu_cores: 4\ncpu_bogomips: 5192.25"
          }
        ]
      }
    ]
  }
}