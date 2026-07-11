window.BENCHMARK_DATA = {
  "lastUpdate": 1783767682177,
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
          "id": "c93f49c459ac3ab8feb4bf747293ccff9c7da3f2",
          "message": "Run benchmarks 9 times and take the median.",
          "timestamp": "2026-07-11T07:15:41+02:00",
          "tree_id": "86a4c14c3d58614bc55548d79f3e8be896882625",
          "url": "https://github.com/divVerent/boringssl/commit/c93f49c459ac3ab8feb4bf747293ccff9c7da3f2"
        },
        "date": 1783747585840,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:1350",
            "value": 2.3672271752168914,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.3669351193392068 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:16",
            "value": 0.5494553302021835,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5493576055780068 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:16384",
            "value": 12.774791860572376,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.77193466557243 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:256",
            "value": 1.595810226716176,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.595794234649045 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:8192",
            "value": 7.108131676577229,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7.106787823347057 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:1350",
            "value": 2.503113999635179,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.502932696158871 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:16",
            "value": 0.6751177627402782,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.6750157278554316 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:16384",
            "value": 13.514646928128679,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 13.513606356258897 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:256",
            "value": 1.711254071144043,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.7109154398300597 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:8192",
            "value": 7.529598728860143,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7.529513465474722 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:1350",
            "value": 2.195088747571888,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.194577407430833 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:16",
            "value": 0.14973951393716742,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.1497378237775673 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:16384",
            "value": 24.643424423715228,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24.640997360555478 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:256",
            "value": 0.520416815197632,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5203801131807629 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:8192",
            "value": 12.382059852833965,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.381017946876428 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:1350",
            "value": 2.196458942420551,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.1957810575790973 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:16",
            "value": 0.14964336635966535,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.1496426497124466 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:16384",
            "value": 24.627738962180352,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24.624900439754903 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:256",
            "value": 0.5207953835389254,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5207792045978377 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:8192",
            "value": 12.382314690266949,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.382291415930311 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:1350",
            "value": 2.1989286566973103,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.198627089093158 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:16",
            "value": 0.15186844814987435,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.1518681438973636 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:16384",
            "value": 24.631350790863113,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24.63113796133563 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:256",
            "value": 0.5230981907612626,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5229974063099289 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:8192",
            "value": 12.38970491658463,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.38826012887256 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:1350",
            "value": 1.2677665545246444,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.2676704469406315 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:16",
            "value": 0.2400229282751366,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.23999856698282807 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:16384",
            "value": 12.481041785461088,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.480843816819371 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:256",
            "value": 0.432843188447132,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.43280149294311776 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:8192",
            "value": 6.366273430039546,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.366229048248492 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:1350",
            "value": 1.95885191659559,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.9585678185352542 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:16",
            "value": 0.16422437198418954,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.16421147302238706 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:16384",
            "value": 21.560475719139866,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 21.557418187436426 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:256",
            "value": 0.4852296755022848,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.4851932441439005 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:8192",
            "value": 10.851186773765436,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 10.849092957966175 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:1350",
            "value": 0.2955021384083569,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2954976651748684 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:16",
            "value": 0.0973947488528068,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.09739399699675276 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:16384",
            "value": 2.064362174646151,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.0643820733766347 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:256",
            "value": 0.11915280267210498,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.1191517993743198 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:8192",
            "value": 1.0780356257413128,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.0780258781318133 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:1350",
            "value": 0.5151444534936134,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5150210832543893 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:16",
            "value": 0.18048090498362987,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.18046708822264834 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:16384",
            "value": 3.8828713762079436,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.882085443741959 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:256",
            "value": 0.25148401226839406,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2514828114713156 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:8192",
            "value": 2.0223837734810273,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.022228843294086 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:1350",
            "value": 0.3102377270122997,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.3102346577981333 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:16",
            "value": 0.10031695943998387,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.10030794538658333 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:16384",
            "value": 2.1642046941017368,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.164206837740796 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:256",
            "value": 0.12378171339805906,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.12378085558814934 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:8192",
            "value": 1.1379022677995394,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.1378846779269898 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:1350",
            "value": 2.4248092475514142,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.424436149516892 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:16",
            "value": 0.55378295807189,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5536012136614173 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:16384",
            "value": 13.483396904739884,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 13.483233586466797 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:256",
            "value": 1.6090577503057555,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.6087051248239035 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:8192",
            "value": 7.447869482071732,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7.446999575033711 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:1350",
            "value": 1.308632826913424,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.3085247091383903 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:16",
            "value": 0.24464671908493832,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.24464503221659348 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:16384",
            "value": 12.841109562668954,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.84092390208135 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:256",
            "value": 0.4410823191586173,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.4410408916542839 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:8192",
            "value": 6.532015762720362,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.531106188499304 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:1350",
            "value": 2.447542279861612,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.4472239486838556 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:16",
            "value": 0.19467539947481022,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.19467438087147604 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:16384",
            "value": 27.03088275061454,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 27.02807861695937 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:256",
            "value": 0.595240518431975,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5952340762774881 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:8192",
            "value": 13.606517372266412,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 13.604264330897953 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:1350",
            "value": 0.32901547362933253,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.32898003857275504 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:16",
            "value": 0.10261403111921738,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.10261350820576538 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:16384",
            "value": 2.2854481749898907,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.2851830432710463 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:256",
            "value": 0.1279713336023217,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.12794509842856538 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:8192",
            "value": 1.1945754885153475,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.1943651305408423 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:1350",
            "value": 0.5770447906765526,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.577006943009497 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:16",
            "value": 0.1994833133776336,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.1994448475132398 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:16384",
            "value": 4.415691553424666,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4.414734937100423 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:256",
            "value": 0.28080887750444156,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2807750882142872 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:8192",
            "value": 2.296796185778089,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.2966639210852087 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:1350",
            "value": 0.757720629072156,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.7574476709636959 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:16",
            "value": 0.18178188392807673,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.18175299713470208 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:16384",
            "value": 6.941726706218017,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.940640709906543 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:256",
            "value": 0.2794688922337414,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2794661557497189 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:8192",
            "value": 3.558942203140018,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.5586829175348202 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:1350",
            "value": 46.168202173195866,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 46.16752914060306 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:16",
            "value": 1.8606133709707278,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.8602659680703963 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:16384",
            "value": 534.9122099237546,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 534.8366412213546 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:256",
            "value": 10.606720917944024,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 10.606403110137398 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:8192",
            "value": 268.5887145593059,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 268.56297318009126 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:1350",
            "value": 0.8596821080409449,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.859589789635685 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:16",
            "value": 0.2812543525358076,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2812283995526518 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:16384",
            "value": 7.056922152979295,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7.054964921098122 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:256",
            "value": 0.3763967424365173,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.3763423280437912 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:8192",
            "value": 3.7002343631064196,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.6997061340192565 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:1350",
            "value": 2.1647806123244084,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.164771577530644 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:16",
            "value": 0.24292779422874572,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.24289942197934572 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:16384",
            "value": 23.598831789863727,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 23.596332884322496 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:256",
            "value": 0.5950670455223706,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5950159425591524 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:8192",
            "value": 11.910031827078278,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 11.910011743683086 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:1350",
            "value": 2.2380855005512337,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.238045107974624 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:16",
            "value": 0.24180263135227495,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.24180104964628615 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:16384",
            "value": 24.244713543477754,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24.243689123658182 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:256",
            "value": 0.6124866463775329,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.6124827359709812 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:8192",
            "value": 12.242792551802468,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.241729609233154 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:1350",
            "value": 2.176670631218885,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.176227207711575 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:16",
            "value": 0.14749086266126038,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.14745545738316124 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:16384",
            "value": 24.41232524018324,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24.412075633184994 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:256",
            "value": 0.5146535343149452,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5146478940989815 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:8192",
            "value": 12.270693062363405,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.269631569726721 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:1350",
            "value": 2.1754940633450675,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.174951838498225 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:16",
            "value": 0.1474872986108745,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.1474441046063688 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:16384",
            "value": 24.421688218897252,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24.41718072499053 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:256",
            "value": 0.5154846088706925,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5154803711104871 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:8192",
            "value": 12.270618245613724,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.268954649122907 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:1350",
            "value": 2.1743093545279093,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.174159179111427 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:16",
            "value": 0.14616391679144253,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.14616277109717854 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:16384",
            "value": 24.423839783827066,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24.423707984657938 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:256",
            "value": 0.5152444993064815,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5151899902064794 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:8192",
            "value": 12.265515132795578,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.264024177180954 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:1350",
            "value": 1.2666788995835434,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.2666702388966753 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:16",
            "value": 0.23830923780065996,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.23826804743786342 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:16384",
            "value": 12.492036227359613,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.490790934237017 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:256",
            "value": 0.43991659597739846,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.43991348564547406 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:8192",
            "value": 6.380321265312828,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.379460916072409 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:1350",
            "value": 2.205074997246332,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.2049322569985232 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:16",
            "value": 0.15492644307491066,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.15492517733639666 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:16384",
            "value": 24.64006612590365,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24.63805060836313 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:256",
            "value": 0.5200626267806234,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5199646389217077 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:8192",
            "value": 12.406420842574652,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.406308736142783 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:1350",
            "value": 0.2925316741577871,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2925285309717261 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:16",
            "value": 0.08867967971139265,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.08866541499770138 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:16384",
            "value": 2.0852722198363214,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.0849058497801782 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:256",
            "value": 0.11293389550814398,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.11292829043724563 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:8192",
            "value": 1.098509806925344,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.0983016566566852 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:1350",
            "value": 0.5685308157493334,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5684867478421859 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:16",
            "value": 0.13155713651434084,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.13155673701459508 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:16384",
            "value": 4.585762283804908,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4.585068854822377 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:256",
            "value": 0.2345617860783219,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.23456091100902793 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:8192",
            "value": 2.364987825881075,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.364965554504982 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:1350",
            "value": 0.30847716654109064,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.3084750131306296 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:16",
            "value": 0.09300406984224324,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.0929962566475959 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:16384",
            "value": 2.217689318383806,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.217416878414381 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:256",
            "value": 0.11754244959218717,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.1175301067312167 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:8192",
            "value": 1.1466958805974,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.1465179086614914 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:1350",
            "value": 2.5928895504718112,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.5925020063240862 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:16",
            "value": 0.2501081343150378,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.25009005054703665 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:16384",
            "value": 28.70250420685754,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 28.702430740815583 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:256",
            "value": 0.6824395396098547,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.6824313909406982 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:8192",
            "value": 14.469244575321747,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 14.467689295307217 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:1350",
            "value": 1.3051248623734535,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.305006969974003 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:16",
            "value": 0.24296041238254315,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2429293380448708 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:16384",
            "value": 12.841318594628005,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.840312998808079 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:256",
            "value": 0.4459976329700032,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.4458603292786924 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:8192",
            "value": 6.541176514514848,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.533816437972053 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:1350",
            "value": 2.6793528701495832,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.679323181600538 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:16",
            "value": 0.18586114898483846,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.18583941852470565 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:16384",
            "value": 30.0423115459135,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 30.041200602021807 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:256",
            "value": 0.6289108331759476,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.6288577634617694 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:8192",
            "value": 15.116088701734125,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 15.113361041233556 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:1350",
            "value": 0.3297383368430682,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.32973375072431044 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:16",
            "value": 0.09894223697608086,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.09892944401765846 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:16384",
            "value": 2.3770693326950414,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.3769370527607525 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:256",
            "value": 0.12279153049255795,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.12278984468857256 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:8192",
            "value": 1.2291598089993423,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.2291392755700707 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:1350",
            "value": 0.6426564257258762,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.6424559836046705 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:16",
            "value": 0.14960659999890635,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.14960500487488082 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:16384",
            "value": 5.229771185174655,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 5.229385966223014 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:256",
            "value": 0.2563210003714889,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2562518419853733 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:8192",
            "value": 2.6979899606907396,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.6977029636194785 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:1350",
            "value": 0.8097153374516168,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.8094845619977741 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:16",
            "value": 0.1785444850848536,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.17850996342362802 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:16384",
            "value": 6.9793816032329365,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.979325784407698 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:256",
            "value": 0.27835692517363786,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.27830968189260935 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:8192",
            "value": 3.5923785352815685,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.5923524107988367 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:1350",
            "value": 46.15645107084578,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 46.153193739704086 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:16",
            "value": 1.5583945688334677,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.5583825591001552 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:16384",
            "value": 547.0940429685988,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 547.0121679687079 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:256",
            "value": 9.582145057500703,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 9.581469674151117 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:8192",
            "value": 274.2512750489577,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 274.2087799606764 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:1350",
            "value": 0.9273152673491916,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.9273097092698551 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:16",
            "value": 0.29562592575377494,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.295613088775116 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:16384",
            "value": 7.096005011643707,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7.095197883972764 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:256",
            "value": 0.3943447685887868,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.39430737302430646 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:8192",
            "value": 3.6928187514807544,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.69224422737611 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockDecrypt<128>/threads:1",
            "value": 0.015888126796094075,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.015886646038795752 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockDecrypt<256>/threads:1",
            "value": 0.020867245620263226,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.020863985452276843 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockDecryptSetup<128>/threads:1",
            "value": 0.02050643842888923,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.020506298518597758 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockDecryptSetup<256>/threads:1",
            "value": 0.02518380115029525,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.025178668898818226 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockEncrypt<128>/threads:1",
            "value": 0.015890915530230986,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.015889586712042124 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockEncrypt<256>/threads:1",
            "value": 0.02086634389065894,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.02086619984654141 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockEncryptSetup<128>/threads:1",
            "value": 0.017705302312967592,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.017701133829121515 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockEncryptSetup<256>/threads:1",
            "value": 0.02081856816249232,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.02081315973354651 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedBase64/threads:1",
            "value": 2.4903905067239385,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.4903599430047456 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedCurve25519ArbitraryPointMultiply/threads:1",
            "value": 35.68808143987873,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 35.68295225938082 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedCurve25519BasePointMultiply/threads:1",
            "value": 14.917227942745525,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 14.914609591968855 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDH/p224/threads:1",
            "value": 377.53606738528663,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 377.5317870620569 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDH/p256/threads:1",
            "value": 60.008512226524054,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 59.99462848563922 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDH/p384/threads:1",
            "value": 992.965319149315,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 992.8450851063631 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDH/p521/threads:1",
            "value": 2361.1262881362472,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2360.884440677818 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSASign/p224/threads:1",
            "value": 209.50822188907216,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 209.47620839578528 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSASign/p256/threads:1",
            "value": 19.600009369315845,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 19.599722696126392 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSASign/p384/threads:1",
            "value": 550.6320118577519,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 550.5679644269587 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSASign/p521/threads:1",
            "value": 1301.846444445371,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1301.724694444475 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSAVerify/p224/threads:1",
            "value": 210.86264564559173,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 210.8062657657786 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSAVerify/p256/threads:1",
            "value": 55.18191996830204,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 55.17595483359713 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSAVerify/p384/threads:1",
            "value": 569.6126460904748,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 569.6120864197488 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSAVerify/p521/threads:1",
            "value": 1345.4716095241436,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1345.2747238093687 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedEd25519/threads:1",
            "value": 15.922184552290494,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 15.922056618819987 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedEd25519Sign/threads:1",
            "value": 16.07153635321187,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 16.070050114678196 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedEd25519Verify/threads:1",
            "value": 55.97264853058104,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 55.97239634631092 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHRSSDecap/threads:1",
            "value": 26.572644916547702,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 26.57241843702668 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHRSSEncap/threads:1",
            "value": 8.063250416883491,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 8.062359783796241 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHRSSGenerate/threads:1",
            "value": 137.352980411368,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 137.353286973549 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:1350/threads:1",
            "value": 2.2709143681324973,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.270909360516068 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:16/threads:1",
            "value": 0.2257013579257819,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.22564508165132416 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:16384/threads:1",
            "value": 26.078266878032437,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 26.07802983961884 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:256/threads:1",
            "value": 0.43057758247151634,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.4305730436519928 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:8192/threads:1",
            "value": 13.08647744887596,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 13.086461761138033 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:1350/threads:1",
            "value": 0.8545594211030879,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.854491604534553 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:16/threads:1",
            "value": 0.061980440557385906,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.06197560100736024 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:16384/threads:1",
            "value": 9.707564285715032,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 9.706807281553598 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:256/threads:1",
            "value": 0.21239456284487448,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2123843251682882 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:8192/threads:1",
            "value": 4.8837136482485235,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4.882693184590355 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:1350/threads:1",
            "value": 0.9130572090593118,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.912870595914214 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:16/threads:1",
            "value": 0.06486122916983768,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.0648556188702356 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:16384/threads:1",
            "value": 10.353032289049246,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 10.353004433279176 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:256/threads:1",
            "value": 0.22873392845190457,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2287218971323098 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:8192/threads:1",
            "value": 5.2101507395415245,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 5.210139152789616 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:1350/threads:1",
            "value": 2.6527090127451896,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.6525540215516012 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:16/threads:1",
            "value": 0.27440467965867593,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.27440195824149183 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:16384/threads:1",
            "value": 30.61142334647049,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 30.611164038545766 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:256/threads:1",
            "value": 0.7539431700756141,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.7538917599569306 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:8192/threads:1",
            "value": 15.45218916823191,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 15.451993576254008 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHashToCurve/hash-to-curve P256_XMD:SHA-256_SSWU_RO_/threads:1",
            "value": 28.529764597794788,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 28.526323805633638 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHashToCurve/hash-to-curve P384_XMD:SHA-384_SSWU_RO_/threads:1",
            "value": 76.72230904106931,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 76.72150356163239 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHashToCurve/hash-to-scalar P384_XMD:SHA-512/threads:1",
            "value": 1.3427505379634688,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.3425662053729615 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAKeyGen/ml_dsa_44/threads:1",
            "value": 61.29449884843455,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 61.29388945187288 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAKeyGen/ml_dsa_65/threads:1",
            "value": 115.78940247934666,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 115.73858264462385 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAKeyGen/ml_dsa_87/threads:1",
            "value": 161.8138690614056,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 161.80311123986846 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAParsePubKey/ml_dsa_44/threads:1",
            "value": 4.458208668300029,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4.458188490992381 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAParsePubKey/ml_dsa_65/threads:1",
            "value": 6.596432300238181,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.594881954569847 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAParsePubKey/ml_dsa_87/threads:1",
            "value": 8.727205829231515,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 8.725481160864803 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSASign/ml_dsa_44/threads:1",
            "value": 213.30418030302235,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 213.3028893939323 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSASign/ml_dsa_65/threads:1",
            "value": 320.53126221079276,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 320.44268380462773 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSASign/ml_dsa_87/threads:1",
            "value": 388.6160904108717,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 388.61318630137333 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerify/ml_dsa_44/threads:1",
            "value": 51.2504462998018,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 51.249713851985376 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerify/ml_dsa_65/threads:1",
            "value": 82.86372104019787,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 82.84961052009693 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerify/ml_dsa_87/threads:1",
            "value": 139.0653004434595,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 139.0542904656392 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerifyBadSignature/ml_dsa_44/threads:1",
            "value": 51.247777492672505,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 51.247090542528944 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerifyBadSignature/ml_dsa_65/threads:1",
            "value": 82.85125177306394,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 82.82433274231687 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerifyBadSignature/ml_dsa_87/threads:1",
            "value": 139.20976564051938,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 139.20975868916764 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024DecapOnly/threads:1",
            "value": 37.40612015960381,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 37.412380507024565 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024EncapOnly/threads:1",
            "value": 25.68674651748989,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 25.674796554791794 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024KeyGenDecap/threads:1",
            "value": 78.68499213482924,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 78.67609213483932 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024KeyGenOnly/threads:1",
            "value": 41.888989483181895,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 41.882765024045746 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024ParseEncap/threads:1",
            "value": 45.47318973338716,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 45.483392787523336 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024ParseOnly/threads:1",
            "value": 20.617497645447926,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 20.605659800269162 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024PrivateKeyFromSeedOnly/threads:1",
            "value": 41.9373811242002,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 41.95218334833859 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768DecapOnly/threads:1",
            "value": 28.342781755312917,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 28.34537055046456 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768EncapOnly/threads:1",
            "value": 19.554104321040978,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 19.552251433377386 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768KeyGenDecap/threads:1",
            "value": 56.28671474488169,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 56.27251868220177 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768KeyGenOnly/threads:1",
            "value": 28.53826328650651,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 28.536285277945428 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768ParseEncap/threads:1",
            "value": 32.04091767903404,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 32.03812405411896 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768ParseOnly/threads:1",
            "value": 13.373515696617678,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 13.369014649744052 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768PrivateKeyFromSeedOnly/threads:1",
            "value": 28.58005461908309,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 28.599176386210583 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndSign/2048/threads:1",
            "value": 742.9177724868057,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 742.919317460253 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndSign/3072/threads:1",
            "value": 2165.190890624835,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2165.1713593748846 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndSign/4096/threads:1",
            "value": 4808.35989655024,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4808.34696551726 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndVerify/2048/threads:1",
            "value": 19.362887862073343,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 19.361335586207307 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndVerify/3072/threads:1",
            "value": 40.638584178477394,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 40.62933033903246 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndVerify/4096/threads:1",
            "value": 70.63850025213524,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 70.62774331820522 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAKeyGen/2048",
            "value": 61537.47800004794,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 61527.17699998789 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAKeyGen/3072",
            "value": 198288.49399999628,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 198271.96800000023 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAKeyGen/4096",
            "value": 351865.47499995417,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 351860.53800003947 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAParsePrivateKey/2048/threads:1",
            "value": 92.23365789474926,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 92.20895789473435 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAParsePrivateKey/3072/threads:1",
            "value": 172.73146242028224,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 172.73075541400368 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAParsePrivateKey/4096/threads:1",
            "value": 274.9616815533964,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 274.96100388348566 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSASign/2048/threads:1",
            "value": 643.267954128423,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 643.1613944953464 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSASign/3072/threads:1",
            "value": 1978.557267605051,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1978.4621267605653 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSASign/4096/threads:1",
            "value": 4498.66164285595,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4498.277785714322 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAVerify/2048/threads:1",
            "value": 16.89979150066145,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 16.899644452492915 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAVerify/3072/threads:1",
            "value": 36.43566961038126,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 36.435303116882274 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAVerify/4096/threads:1",
            "value": 63.207620036094404,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 63.20094404332177 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:1350/threads:1",
            "value": 0.8631313576043876,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.8630112907602924 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:16/threads:1",
            "value": 0.63519977582849,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.635191553181688 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:16384/threads:1",
            "value": 3.141760295504648,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.1412111869584076 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:256/threads:1",
            "value": 0.6630598925988244,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.6627885740735964 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:8192/threads:1",
            "value": 1.8718328386422032,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.8718655149012018 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSLHDSA/threads:1",
            "value": 35101.77474998954,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 35097.16424998999 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSLHDSASign/threads:1",
            "value": 270067.0550000268,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 270037.3309999975 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSLHDSAVerify/threads:1",
            "value": 272.5686730768801,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 272.44527115388894 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSPAKE2/threads:1",
            "value": 124.55935928704957,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 124.54485647277713 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedScrypt/(N = 1024, r = 8, p = 16)/threads:1",
            "value": 27851.109799985352,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 27848.261600001933 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedScrypt/(N = 16384, r = 8, p = 1)/threads:1",
            "value": 27843.74279999611,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 27843.53060000058 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSelfTest",
            "value": 4481.355129032196,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4481.361387096543 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/1350/threads:1",
            "value": 0.5181376514624945,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5181341857643614 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/16/threads:1",
            "value": 0.02116865812343846,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.021165424307286733 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/16384/threads:1",
            "value": 6.072571850181565,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.072028861595018 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/256/threads:1",
            "value": 0.1100114522812196,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.10998888786999604 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/8192/threads:1",
            "value": 3.046869657795556,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.046858337859415 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedTrustTokenKeyGen/SpeedTrustTokenKeyGen experiment_v1",
            "value": 994.1061276591515,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 994.1013262410959 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedTrustTokenKeyGen/SpeedTrustTokenKeyGen experiment_v2_pmb",
            "value": 994.7681489360231,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 994.6817659575097 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedTrustTokenKeyGen/SpeedTrustTokenKeyGen experiment_v2_voprf",
            "value": 511.6917615061832,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 511.64826778243645 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedX509/threads:1",
            "value": 4.029499594767566,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4.029181168229627 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginIssueBatch1",
            "value": 627.6089775783496,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 627.6003542601585 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginIssueBatch10",
            "value": 6272.394999998907,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6271.459590909246 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginRedeemBatch1",
            "value": 0.15284582119727416,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.15284348640317214 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginRedeemBatch10",
            "value": 0.15278867215467717,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.15278564962604557 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1FinishIssueBatch1",
            "value": 7120.026200000496,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7119.983449999978 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1FinishIssueBatch10",
            "value": 25584.187200001907,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 25581.671599991296 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1IssueBatch1",
            "value": 6071.24078260807,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6069.957565217482 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1IssueBatch10",
            "value": 21815.49400000904,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 21815.17716666311 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1RedeemBatch1",
            "value": 1725.8864197530759,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1725.8791728396418 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1RedeemBatch10",
            "value": 1727.7700740741248,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1727.5669999995207 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginIssueBatch1",
            "value": 627.2716591928607,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 627.2639372198605 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginIssueBatch10",
            "value": 6269.927681818837,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6269.217681818187 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginRedeemBatch1",
            "value": 0.14511358358782425,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.14511282531700515 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginRedeemBatch10",
            "value": 0.14569350572081,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.14566522490358472 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbFinishIssueBatch1",
            "value": 7114.6153499995535,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7114.509750000053 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbFinishIssueBatch10",
            "value": 25572.710599999482,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 25572.302200004062 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbIssueBatch1",
            "value": 6071.204590909929,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6070.675909091444 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbIssueBatch10",
            "value": 21783.4666666666,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 21783.229166667676 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbRedeemBatch1",
            "value": 1725.5795802468665,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1725.5599382715557 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbRedeemBatch10",
            "value": 1727.04360493804,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1726.529999999993 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginIssueBatch1",
            "value": 628.799408071504,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 628.753533632293 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginIssueBatch10",
            "value": 6290.118636363994,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6289.509181819787 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginRedeemBatch1",
            "value": 0.13679321391731886,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.13676655933363877 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginRedeemBatch10",
            "value": 0.13691349389651555,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.13687654956910922 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfFinishIssueBatch1",
            "value": 2471.7888421060993,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2471.7549649123707 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfFinishIssueBatch10",
            "value": 9117.197466666008,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 9117.074133333364 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfIssueBatch1",
            "value": 2389.3601186437163,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2389.3453389829215 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfIssueBatch10",
            "value": 8946.157933333627,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 8945.152800000264 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfRedeemBatch1",
            "value": 555.701571428587,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 555.6989722224317 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfRedeemBatch10",
            "value": 555.6297936507352,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 555.5214166666215 us\nthreads: 1"
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
          "id": "c93f49c459ac3ab8feb4bf747293ccff9c7da3f2",
          "message": "Run benchmarks 9 times and take the median.",
          "timestamp": "2026-07-11T05:15:01Z",
          "url": "https://github.com/divVerent/boringssl/commit/c93f49c459ac3ab8feb4bf747293ccff9c7da3f2"
        },
        "date": 1783754221573,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:1350",
            "value": 2.5459051675489808,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.54561875898718 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:16",
            "value": 0.5678899208232934,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5678142721272255 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:16384",
            "value": 14.285206548340382,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 14.285101183190168 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:256",
            "value": 1.6956609673877365,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.6956418758080234 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:8192",
            "value": 7.879342717189625,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7.8783953606214885 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:1350",
            "value": 2.7059372272440463,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.705105517456278 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:16",
            "value": 0.6925896902940856,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.6923844984127488 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:16384",
            "value": 15.089697863569322,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 15.087513501794493 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:256",
            "value": 1.8022866305581742,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.8016640665492831 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:8192",
            "value": 8.337200893122857,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 8.337155641559532 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:1350",
            "value": 2.457408672591645,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.4569744283259007 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:16",
            "value": 0.16003387106533168,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.16003394411737842 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:16384",
            "value": 27.831133147842138,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 27.830584459455416 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:256",
            "value": 0.5645683722547656,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5645697613845936 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:8192",
            "value": 13.984988794676795,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 13.984135776298785 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:1350",
            "value": 2.4578459513992534,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.457684867093686 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:16",
            "value": 0.16137788317939766,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.16132770871359825 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:16384",
            "value": 27.829625720529716,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 27.827471079307813 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:256",
            "value": 0.5660118611106281,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5660132760356861 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:8192",
            "value": 13.983608847610906,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 13.982693129616253 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:1350",
            "value": 2.4604519890258825,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.4604468186135016 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:16",
            "value": 0.16374751013478636,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.16374744116672102 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:16384",
            "value": 27.836835684476885,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 27.833434134711933 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:256",
            "value": 0.5685988479244437,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5685973540419308 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:8192",
            "value": 13.989702956454307,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 13.989311026767306 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:1350",
            "value": 1.4184947420632552,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.4183504448245605 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:16",
            "value": 0.25770638541107127,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.25770587446057935 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:16384",
            "value": 14.048991773669306,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 14.048154494381848 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:256",
            "value": 0.47184405737912516,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.4718427971142154 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:8192",
            "value": 7.148948539923631,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7.147820757606706 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:1350",
            "value": 2.174589625279382,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.174463335819094 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:16",
            "value": 0.18258484466990643,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.18256886969677122 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:16384",
            "value": 23.93830312873974,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 23.935891092496313 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:256",
            "value": 0.5398364117112123,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5397956630332399 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:8192",
            "value": 12.053327264885741,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.051526919758194 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:1350",
            "value": 0.3043172334922169,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.30431553648776616 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:16",
            "value": 0.10874721227910648,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.10873579667909325 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:16384",
            "value": 2.0584108087888184,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.058400368154625 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:256",
            "value": 0.12919713665114863,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.12918147869069896 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:8192",
            "value": 1.0702880760580824,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.0702870531249504 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:1350",
            "value": 0.5765711447902809,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5764909416192289 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:16",
            "value": 0.2081822790377662,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.20816094797459372 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:16384",
            "value": 4.29985850331821,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4.299201216514869 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:256",
            "value": 0.2825345496799663,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.28250106668613906 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:8192",
            "value": 2.254710429921052,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.254510731957769 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:1350",
            "value": 0.31858065998881663,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.31850629633506755 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:16",
            "value": 0.11271984384184607,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.11271913212053386 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:16384",
            "value": 2.1333049705637137,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.1330027572843933 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:256",
            "value": 0.13237939338766352,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.13234993995953326 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:8192",
            "value": 1.0951096084463319,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.0951070648729477 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:1350",
            "value": 2.6150415695775893,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.615037505825336 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:16",
            "value": 0.5728876488065384,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.572886954069696 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:16384",
            "value": 15.016257427868181,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 15.014530408665312 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:256",
            "value": 1.71164339295268,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.711354542344715 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:8192",
            "value": 8.255158698343537,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 8.255138477863461 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:1350",
            "value": 1.4618683296301855,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.4617734134560207 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:16",
            "value": 0.26321838684673937,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2631703546483109 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:16384",
            "value": 14.40789829288507,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 14.4052447552448 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:256",
            "value": 0.47815987101001795,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.4780152253224707 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:8192",
            "value": 7.33028229564787,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7.329227941562341 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:1350",
            "value": 2.7239828408006104,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.7235456508629925 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:16",
            "value": 0.21692379002703316,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.21692299657674 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:16384",
            "value": 30.08592909325155,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 30.083555865921564 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:256",
            "value": 0.6643008814694429,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.6642998324401497 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:8192",
            "value": 15.145653372251722,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 15.141967682664115 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:1350",
            "value": 0.33444352608514605,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.33437735163572063 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:16",
            "value": 0.11515095243061774,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.11515009580565648 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:16384",
            "value": 2.2409302336733012,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.2409281224509656 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:256",
            "value": 0.13635608449207012,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.13633536859328535 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:8192",
            "value": 1.155333617662838,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.1553359613094847 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:1350",
            "value": 0.6250020684182551,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.6247087363925665 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:16",
            "value": 0.2246618702739846,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.22455357647182858 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:16384",
            "value": 4.627678898780238,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4.62766741669741 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:256",
            "value": 0.31162042248823085,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.31160888651201096 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:8192",
            "value": 2.4207608549165585,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.420476510531034 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:1350",
            "value": 0.8877260768376367,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.8875712418299305 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:16",
            "value": 0.2197909460906294,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.21975736926975217 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:16384",
            "value": 7.950369895641807,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7.94746307849225 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:256",
            "value": 0.32747272774027514,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.3273547041813829 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:8192",
            "value": 4.084525161439277,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4.084229187271407 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:1350",
            "value": 51.75156962024873,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 51.74341995533031 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:16",
            "value": 2.0241519786640714,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.0235432278526613 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:16384",
            "value": 599.8689525863542,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 599.8489913793221 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:256",
            "value": 11.789125257549287,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 11.78710267857075 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:8192",
            "value": 301.2219935484492,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 301.17521290329086 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:1350",
            "value": 0.9916272246377061,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.9915131033202896 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:16",
            "value": 0.3263445067998287,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.3262967664017091 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:16384",
            "value": 8.056164613789566,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 8.056121618512451 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:256",
            "value": 0.4317904429636126,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.43167114614285595 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:8192",
            "value": 4.19744466716544,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4.196858249813426 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:1350",
            "value": 2.3660630928262782,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.3660684229342417 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:16",
            "value": 0.23803639794167872,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.23803563419705398 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:16384",
            "value": 25.918350120355996,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 25.91487983706492 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:256",
            "value": 0.6392117613188765,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.6390965608948612 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:8192",
            "value": 13.07088274253688,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 13.070821175376885 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:1350",
            "value": 2.442807531892309,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.442604732735972 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:16",
            "value": 0.2447979575208744,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.24475241262572922 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:16384",
            "value": 26.64585434493286,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 26.64355238638565 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:256",
            "value": 0.6594695273543265,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.65946156894384 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:8192",
            "value": 13.444003840615059,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 13.442995679307701 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:1350",
            "value": 2.4244709957909496,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.4242834773873785 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:16",
            "value": 0.16313993556570616,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.16312948212637315 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:16384",
            "value": 27.49613345127311,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 27.495120086476426 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:256",
            "value": 0.5537307281572894,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5535648617648424 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:8192",
            "value": 13.80709339250024,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 13.806991222879155 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:1350",
            "value": 2.4244401254680117,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.424029755303063 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:16",
            "value": 0.16304018073020873,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.16300089788053973 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:16384",
            "value": 27.501804681355967,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 27.501649488592 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:256",
            "value": 0.5532086491482548,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5531663987424449 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:8192",
            "value": 13.808827450205772,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 13.808766416879914 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:1350",
            "value": 2.425802809573375,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.4252229621918886 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:16",
            "value": 0.16216059689120146,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.1621605828389703 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:16384",
            "value": 27.511568029884092,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 27.508635863151667 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:256",
            "value": 0.5542181739773363,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5540383846936514 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:8192",
            "value": 13.81062869531349,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 13.80979158454895 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:1350",
            "value": 1.416661262591453,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.4164890468870215 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:16",
            "value": 0.2556592226477201,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.25565989006770634 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:16384",
            "value": 14.049866813762277,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 14.049914953365414 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:256",
            "value": 0.47205023919406497,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.4720495504772067 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:8192",
            "value": 7.148687413909992,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7.147933472781244 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:1350",
            "value": 2.482953275008481,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.4827750705398155 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:16",
            "value": 0.1705833491426925,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.1705401045498189 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:16384",
            "value": 27.86782228854667,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 27.864749651741644 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:256",
            "value": 0.5856408433334528,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5855862874674899 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:8192",
            "value": 14.009851781423484,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 14.009875600479985 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:1350",
            "value": 0.3098916930477491,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.3098928934616063 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:16",
            "value": 0.09950703807537384,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.0994879274616151 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:16384",
            "value": 2.190299625820841,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.190284548627238 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:256",
            "value": 0.12114920103585905,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.1211285799582033 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:8192",
            "value": 1.1135086347827297,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.1134098810391295 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:1350",
            "value": 0.6337332123984998,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.633706671612589 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:16",
            "value": 0.14447763073748685,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.14447797008768443 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:16384",
            "value": 5.15496006183967,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 5.15442157764907 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:256",
            "value": 0.2530682113980749,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2530676084763163 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:8192",
            "value": 2.6631034101939877,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.662871246596527 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:1350",
            "value": 0.32745532983780407,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.32745546056839836 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:16",
            "value": 0.10667524588664938,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.10667441334665428 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:16384",
            "value": 2.2598405878304315,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.259799606191466 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:256",
            "value": 0.1257232929925808,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.12571704091792701 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:8192",
            "value": 1.1984814957661063,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.1984874438616315 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:1350",
            "value": 2.8465341237836883,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.8460781892998157 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:16",
            "value": 0.25374225129432937,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2537418388500823 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:16384",
            "value": 31.69356302331279,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 31.68809481783099 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:256",
            "value": 0.7408223835410964,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.7408201856577343 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:8192",
            "value": 15.963145253303976,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 15.961641830214827 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:1350",
            "value": 1.460467373112329,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.4603500878696325 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:16",
            "value": 0.26090364760634116,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2608656998163568 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:16384",
            "value": 14.411975424164902,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 14.41119341902274 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:256",
            "value": 0.47833006159694375,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.4782985114908891 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:8192",
            "value": 7.330214525080606,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7.328578018642023 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:1350",
            "value": 3.0270849598422025,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.0270987779598997 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:16",
            "value": 0.20578581684693223,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.20575623878928032 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:16384",
            "value": 33.98236922705214,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 33.97648711715699 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:256",
            "value": 0.7087432248704038,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.7087465934109208 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:8192",
            "value": 17.070803859304277,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 17.067834269658608 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:1350",
            "value": 0.3480366312769918,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.3480120585423049 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:16",
            "value": 0.1118618893856757,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.11184718713789901 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:16384",
            "value": 2.4885074101712403,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.4878515655542404 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:256",
            "value": 0.13060940765899665,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.13060572932214717 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:8192",
            "value": 1.281611387314737,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.281492167794119 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:1350",
            "value": 0.7169253006919758,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.7169244337854844 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:16",
            "value": 0.16110072778699153,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.16107875045989573 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:16384",
            "value": 5.918382119318482,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 5.917834629035076 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:256",
            "value": 0.2771235738464965,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.27709546625523424 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:8192",
            "value": 3.052277438092341,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.0520959295970354 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:1350",
            "value": 0.9172547703181806,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.9171351917289073 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:16",
            "value": 0.2139190075409507,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.21386815591833094 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:16384",
            "value": 7.987826838087059,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7.987816449520789 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:256",
            "value": 0.32334764398867427,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.3232867458653849 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:8192",
            "value": 4.107405205662676,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4.107402290728207 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:1350",
            "value": 51.77967589517066,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 51.77952307124562 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:16",
            "value": 1.70556788310437,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.7055609565069336 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:16384",
            "value": 614.9425394737731,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 614.9435263157885 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:256",
            "value": 10.752679978290661,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 10.751549705334648 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:8192",
            "value": 308.02206345724284,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 308.0223282275754 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:1350",
            "value": 1.0508070605635167,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.0508042613874349 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:16",
            "value": 0.34471047985243186,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.34461555155568313 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:16384",
            "value": 8.127868921900221,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 8.127797783449967 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:256",
            "value": 0.45309501393465923,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.45301321038982006 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:8192",
            "value": 4.238509645962829,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4.238053242071903 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockDecrypt<128>/threads:1",
            "value": 0.01757251905042848,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.017571398208109483 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockDecrypt<256>/threads:1",
            "value": 0.023194634746701782,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.023191462643577146 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockDecryptSetup<128>/threads:1",
            "value": 0.024950594236520962,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.024943863956665244 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockDecryptSetup<256>/threads:1",
            "value": 0.027770599856107903,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.027771281350485833 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockEncrypt<128>/threads:1",
            "value": 0.017570782265485137,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.017568949590223863 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockEncrypt<256>/threads:1",
            "value": 0.023191757916183622,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.023191844387940974 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockEncryptSetup<128>/threads:1",
            "value": 0.020772140722922695,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.020769731093996494 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockEncryptSetup<256>/threads:1",
            "value": 0.023397100499681286,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.02339524430741128 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedBase64/threads:1",
            "value": 2.7390303563401677,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.7387615473323805 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedCurve25519ArbitraryPointMultiply/threads:1",
            "value": 39.94366932043947,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 39.943597099800996 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedCurve25519BasePointMultiply/threads:1",
            "value": 16.41022575290269,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 16.405028574816598 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDH/p224/threads:1",
            "value": 415.6444580837683,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 415.6037485030399 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDH/p256/threads:1",
            "value": 67.759280251694,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 67.75034559535513 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDH/p384/threads:1",
            "value": 1137.492934959497,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1137.4871056913862 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDH/p521/threads:1",
            "value": 2598.132925925256,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2598.1166481480395 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSASign/p224/threads:1",
            "value": 228.03746091204357,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 228.00793485339307 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSASign/p256/threads:1",
            "value": 21.952326886793934,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 21.952336006292665 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSASign/p384/threads:1",
            "value": 628.167986547186,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 628.1662152466071 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSASign/p521/threads:1",
            "value": 1452.910226804147,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1452.7498556700423 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSAVerify/p224/threads:1",
            "value": 228.51539244665662,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 228.4535336617321 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSAVerify/p256/threads:1",
            "value": 62.43490711113332,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 62.42917644444409 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSAVerify/p384/threads:1",
            "value": 645.4385321103056,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 645.3837431192491 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSAVerify/p521/threads:1",
            "value": 1495.9597340420833,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1495.842351063852 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedEd25519/threads:1",
            "value": 17.437919103914908,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 17.432224766645973 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedEd25519Sign/threads:1",
            "value": 17.60561144654221,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 17.601466037735605 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedEd25519Verify/threads:1",
            "value": 62.413984552474936,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 62.41367787370754 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHRSSDecap/threads:1",
            "value": 27.16728045215182,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 27.167076008575354 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHRSSEncap/threads:1",
            "value": 7.683666212013666,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7.682853019804573 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHRSSGenerate/threads:1",
            "value": 134.44043653845046,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 134.40360480770482 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:1350/threads:1",
            "value": 2.5756804080132465,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.5756774122397053 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:16/threads:1",
            "value": 0.2544264505195259,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2543797500744148 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:16384/threads:1",
            "value": 29.781611252646105,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 29.77551104033705 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:256/threads:1",
            "value": 0.48820779152880917,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.4882056899490015 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:8192/threads:1",
            "value": 14.911056728510566,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 14.911007784175146 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:1350/threads:1",
            "value": 0.9635538660805376,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.9634530648238867 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:16/threads:1",
            "value": 0.0686772551266397,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.06867354927192369 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:16384/threads:1",
            "value": 10.968170217765678,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 10.965726069247099 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:256/threads:1",
            "value": 0.2391081170183685,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.23906432222093668 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:8192/threads:1",
            "value": 5.517487757758733,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 5.517430311871461 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:1350/threads:1",
            "value": 1.0282915258977448,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.0280207197060998 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:16/threads:1",
            "value": 0.07161585049069144,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.07160648161403357 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:16384/threads:1",
            "value": 11.693074488513979,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 11.691954321504587 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:256/threads:1",
            "value": 0.2552631234825083,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2551743106291438 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:8192/threads:1",
            "value": 5.881071290621009,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 5.880712276429741 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:1350/threads:1",
            "value": 2.9970273805706147,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.996964262050194 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:16/threads:1",
            "value": 0.30198091254102327,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.30197915732273833 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:16384/threads:1",
            "value": 34.71519052344364,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 34.70400893078434 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:256/threads:1",
            "value": 0.8435786260001819,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.8433022017686067 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:8192/threads:1",
            "value": 17.492943252683936,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 17.489740833124834 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHashToCurve/hash-to-curve P256_XMD:SHA-256_SSWU_RO_/threads:1",
            "value": 29.353745290920138,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 29.35355776475494 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHashToCurve/hash-to-curve P384_XMD:SHA-384_SSWU_RO_/threads:1",
            "value": 84.59728140097981,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 84.58634782608411 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHashToCurve/hash-to-scalar P384_XMD:SHA-512/threads:1",
            "value": 1.414298582934611,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.4142972506510607 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAKeyGen/ml_dsa_44/threads:1",
            "value": 67.2796407300657,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 67.27979779058889 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAKeyGen/ml_dsa_65/threads:1",
            "value": 126.16021911635406,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 126.16099729486476 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAKeyGen/ml_dsa_87/threads:1",
            "value": 178.08515816323552,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 178.08452678572743 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAParsePubKey/ml_dsa_44/threads:1",
            "value": 4.966015866268211,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4.965180195495132 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAParsePubKey/ml_dsa_65/threads:1",
            "value": 7.3803784526019065,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7.380337470293622 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAParsePubKey/ml_dsa_87/threads:1",
            "value": 9.816133501614296,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 9.816083438508889 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSASign/ml_dsa_44/threads:1",
            "value": 233.3799563106534,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 233.26684627832557 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSASign/ml_dsa_65/threads:1",
            "value": 355.1448911173762,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 355.1460544412343 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSASign/ml_dsa_87/threads:1",
            "value": 417.68461656436085,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 417.6271012269956 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerify/ml_dsa_44/threads:1",
            "value": 55.58489074295389,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 55.57522129519747 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerify/ml_dsa_65/threads:1",
            "value": 89.17670998720357,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 89.14472727272478 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerify/ml_dsa_87/threads:1",
            "value": 151.07121851454994,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 151.05772981701486 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerifyBadSignature/ml_dsa_44/threads:1",
            "value": 55.53564871286537,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 55.51748118811943 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerifyBadSignature/ml_dsa_65/threads:1",
            "value": 89.17739936306526,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 89.1769152866238 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerifyBadSignature/ml_dsa_87/threads:1",
            "value": 150.74779157662667,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 150.74759287253727 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024DecapOnly/threads:1",
            "value": 39.763725284816786,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 39.761879829521135 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024EncapOnly/threads:1",
            "value": 26.988923239568386,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 26.97833666810351 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024KeyGenDecap/threads:1",
            "value": 84.44973325286796,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 84.44087205792671 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024KeyGenOnly/threads:1",
            "value": 45.55805786735462,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 45.55803283485088 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024ParseEncap/threads:1",
            "value": 46.08581758232916,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 46.07189002303116 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024ParseOnly/threads:1",
            "value": 20.077519317212833,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 20.07350585994271 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024PrivateKeyFromSeedOnly/threads:1",
            "value": 45.81053341979333,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 45.83056585909296 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768DecapOnly/threads:1",
            "value": 30.404237959694928,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 30.406976029763413 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768EncapOnly/threads:1",
            "value": 20.830011721445587,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 20.82280210049926 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768KeyGenDecap/threads:1",
            "value": 60.684476336542765,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 60.684238387400825 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768KeyGenOnly/threads:1",
            "value": 31.208207128445014,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 31.20818605693783 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768ParseEncap/threads:1",
            "value": 33.53674898221226,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 33.531775065743325 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768ParseOnly/threads:1",
            "value": 13.835142219597381,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 13.832842308655666 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768PrivateKeyFromSeedOnly/threads:1",
            "value": 31.47699121853931,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 31.49754334607817 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndSign/2048/threads:1",
            "value": 835.7205238091918,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 835.6364345239003 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndSign/3072/threads:1",
            "value": 2442.6581578948394,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2442.5608070170088 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndSign/4096/threads:1",
            "value": 5423.873615383784,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 5422.929769231097 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndVerify/2048/threads:1",
            "value": 21.493532087606,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 21.493677285955144 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndVerify/3072/threads:1",
            "value": 45.58042847832242,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 45.56811045943252 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndVerify/4096/threads:1",
            "value": 78.99898647124445,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 78.9989402480283 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAKeyGen/2048",
            "value": 86730.61899999084,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 86724.42019999381 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAKeyGen/3072",
            "value": 203810.9469999938,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 203760.45500000115 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAKeyGen/4096",
            "value": 636305.7330000288,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 636199.6610000063 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAParsePrivateKey/2048/threads:1",
            "value": 102.81080746712028,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 102.81073060029503 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAParsePrivateKey/3072/threads:1",
            "value": 192.32780192573153,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 192.3279257221459 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAParsePrivateKey/4096/threads:1",
            "value": 304.78622757105364,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 304.7873916849667 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSASign/2048/threads:1",
            "value": 723.9037253884699,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 723.8241295336991 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSASign/3072/threads:1",
            "value": 2231.5168571430554,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2231.145253968439 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSASign/4096/threads:1",
            "value": 5087.8617857149175,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 5087.445071428729 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAVerify/2048/threads:1",
            "value": 18.98945645117671,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 18.984477684608095 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAVerify/3072/threads:1",
            "value": 40.99881847413301,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 40.994324466532845 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAVerify/4096/threads:1",
            "value": 71.40722755101294,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 71.40108265306009 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:1350/threads:1",
            "value": 0.9382393735118095,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.9382381460241044 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:16/threads:1",
            "value": 0.6869551963593223,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.6867172064419775 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:16384/threads:1",
            "value": 3.41383659526868,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.413272641073528 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:256/threads:1",
            "value": 0.7282269411270408,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.7281521046626085 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:8192/threads:1",
            "value": 2.0320526071033993,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.0319080683604853 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSLHDSA/threads:1",
            "value": 38649.05874999636,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 38647.32899999979 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSLHDSASign/threads:1",
            "value": 295536.54100004677,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 295497.7010000448 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSLHDSAVerify/threads:1",
            "value": 293.63041889117,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 293.62779260779666 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSPAKE2/threads:1",
            "value": 139.91317182826228,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 139.91296203794283 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedScrypt/(N = 1024, r = 8, p = 16)/threads:1",
            "value": 31168.047999997838,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 31167.96999999849 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedScrypt/(N = 16384, r = 8, p = 1)/threads:1",
            "value": 31037.607249999153,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 31037.503749999476 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSelfTest",
            "value": 4990.270999999982,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4990.31224999997 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/1350/threads:1",
            "value": 0.5949930293879797,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.594991825798452 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/16/threads:1",
            "value": 0.024413803950320237,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.024413711463687898 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/16384/threads:1",
            "value": 7.0396343940075585,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7.038556929573336 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/256/threads:1",
            "value": 0.12703296223021224,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.1270326911114459 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/8192/threads:1",
            "value": 3.5317601577711386,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.530989785340731 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedTrustTokenKeyGen/SpeedTrustTokenKeyGen experiment_v1",
            "value": 1124.9278870965804,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1124.9255645161443 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedTrustTokenKeyGen/SpeedTrustTokenKeyGen experiment_v2_pmb",
            "value": 1125.1515403225842,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1124.8589354839887 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedTrustTokenKeyGen/SpeedTrustTokenKeyGen experiment_v2_voprf",
            "value": 592.5053050845971,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 592.4447627120056 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedX509/threads:1",
            "value": 3.913482086860045,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.9134739281254474 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginIssueBatch1",
            "value": 714.1767602037158,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 713.9371173468649 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginIssueBatch10",
            "value": 7139.631599994801,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7136.746349999612 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginRedeemBatch1",
            "value": 0.15248280721226048,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.1524480780195521 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginRedeemBatch10",
            "value": 0.15179113225109442,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.15177993346990543 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1FinishIssueBatch1",
            "value": 8144.733882351615,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 8144.685235293991 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1FinishIssueBatch10",
            "value": 28956.10000000488,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 28942.494400001808 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1IssueBatch1",
            "value": 6966.583199999831,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6966.5420999996295 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1IssueBatch10",
            "value": 25033.60266666732,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 25033.521833333813 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1RedeemBatch1",
            "value": 1962.737211267466,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1962.445859155002 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1RedeemBatch10",
            "value": 1961.905464788326,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1961.8679718307803 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginIssueBatch1",
            "value": 713.7418814432543,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 713.7259536081668 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginIssueBatch10",
            "value": 7136.915949999434,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7136.144899999408 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginRedeemBatch1",
            "value": 0.14440106992746957,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.14439997839354787 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginRedeemBatch10",
            "value": 0.14397004788627857,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.14393556734426768 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbFinishIssueBatch1",
            "value": 8139.985705882094,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 8138.033647059012 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbFinishIssueBatch10",
            "value": 28947.063400005394,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 28946.798999999148 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbIssueBatch1",
            "value": 6972.847199999421,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6970.772449999974 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbIssueBatch10",
            "value": 25037.7771666687,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 25035.26933332978 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbRedeemBatch1",
            "value": 1963.1393239438682,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1963.1165774648641 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbRedeemBatch10",
            "value": 1962.7156338026932,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1962.2856478874003 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginIssueBatch1",
            "value": 725.165212435492,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 725.1576683940061 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginIssueBatch10",
            "value": 7250.375052631409,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7249.446368420894 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginRedeemBatch1",
            "value": 0.1389558411626376,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.13895546631160957 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginRedeemBatch10",
            "value": 0.13970325457351396,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.1396818158178469 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfFinishIssueBatch1",
            "value": 2808.3123200002547,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2808.2956400001535 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfFinishIssueBatch10",
            "value": 10343.458500001037,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 10342.013142856591 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfIssueBatch1",
            "value": 2702.9179807698256,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2702.9069999997546 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfIssueBatch10",
            "value": 10215.220071423964,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 10213.634714282145 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfRedeemBatch1",
            "value": 637.5571681817601,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 637.5525181817791 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfRedeemBatch10",
            "value": 638.0480285714827,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 638.0432952380946 us\nthreads: 1"
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
          "id": "c93f49c459ac3ab8feb4bf747293ccff9c7da3f2",
          "message": "Run benchmarks 9 times and take the median.",
          "timestamp": "2026-07-11T05:15:01Z",
          "url": "https://github.com/divVerent/boringssl/commit/c93f49c459ac3ab8feb4bf747293ccff9c7da3f2"
        },
        "date": 1783761832855,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:1350",
            "value": 2.3651951005236547,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.3651958776821425 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:16",
            "value": 0.549033043697436,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5490048583251437 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:16384",
            "value": 12.737424051789308,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.73757585703958 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:256",
            "value": 1.5970659294300522,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.5969738129168218 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:8192",
            "value": 7.094809070181165,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7.093959513555076 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:1350",
            "value": 2.5033543724066334,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.5033636932873256 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:16",
            "value": 0.6746758176613303,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.674629808850922 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:16384",
            "value": 13.504577801528288,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 13.503709981532923 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:256",
            "value": 1.713603102156592,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.7132804876561092 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:8192",
            "value": 7.51910210435815,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7.518398164055065 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:1350",
            "value": 2.1944711029708244,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.1942494599416698 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:16",
            "value": 0.1496202903521887,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.14962055984773784 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:16384",
            "value": 24.616848602080793,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24.61422841568326 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:256",
            "value": 0.5205579660086348,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5205326841081823 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:8192",
            "value": 12.373315454626459,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.371185826632454 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:1350",
            "value": 2.1960421403735584,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.1956110119327223 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:16",
            "value": 0.14952638311681762,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.14952681702326853 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:16384",
            "value": 24.625055028114925,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24.61963959212655 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:256",
            "value": 0.5198540120327019,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5198577306464968 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:8192",
            "value": 12.37089099274606,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.369236595292564 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:1350",
            "value": 2.197158704033229,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.1970165208941257 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:16",
            "value": 0.15211131083953303,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.15211374441991726 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:16384",
            "value": 24.620168189806837,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24.618713708257303 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:256",
            "value": 0.5223062728973782,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5223107767459497 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:8192",
            "value": 12.383566929133988,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.383087498894007 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:1350",
            "value": 1.2674341850140673,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.2673689951980402 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:16",
            "value": 0.23989582328905146,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.23987336513309623 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:16384",
            "value": 12.4842582314648,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.483499598466295 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:256",
            "value": 0.43278868243130586,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.4327938473054444 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:8192",
            "value": 6.364552565681426,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.364229203661642 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:1350",
            "value": 1.9569656801107318,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.9569064028392427 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:16",
            "value": 0.16464578938178553,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.16462009925381926 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:16384",
            "value": 21.54393784700268,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 21.542343460828565 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:256",
            "value": 0.48552314596113544,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.4854947692351075 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:8192",
            "value": 10.851099092811756,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 10.849095448553726 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:1350",
            "value": 0.2959701032572923,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.29597026715776165 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:16",
            "value": 0.09736072524283702,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.09735597954478921 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:16384",
            "value": 2.098999564635919,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.0990162435635096 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:256",
            "value": 0.11930713748046383,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.11929354568942875 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:8192",
            "value": 1.0794411370135875,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.0793185124994025 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:1350",
            "value": 0.5148921048073931,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5148966075027654 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:16",
            "value": 0.18037039066101979,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.18035942080174075 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:16384",
            "value": 3.882624933748331,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.8822899545279657 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:256",
            "value": 0.25145776178698553,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2514494665567414 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:8192",
            "value": 2.022413882304849,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.022425515925482 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:1350",
            "value": 0.3103931279768483,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.31039442395165573 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:16",
            "value": 0.10033488501248992,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.1003237570104716 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:16384",
            "value": 2.1640814018169916,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.1628822856787164 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:256",
            "value": 0.12380152066208397,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.12378981645104734 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:8192",
            "value": 1.127972337898905,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.1278821208964123 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:1350",
            "value": 2.4246691638264917,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.4243721863700873 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:16",
            "value": 0.5553709421356117,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5553730549893185 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:16384",
            "value": 13.447477611940213,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 13.446002214735834 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:256",
            "value": 1.6102900559455713,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.6102925092863631 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:8192",
            "value": 7.431720172039862,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7.431018159613938 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:1350",
            "value": 1.307918216829645,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.3077606423751644 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:16",
            "value": 0.24455313412908783,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2445540321904307 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:16384",
            "value": 12.832354132313474,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.831592724936526 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:256",
            "value": 0.44134112270310577,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.44133470860778407 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:8192",
            "value": 6.530181639985987,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.529791431372061 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:1350",
            "value": 2.444313451598643,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.4441714799552803 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:16",
            "value": 0.19459767892221264,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.1945904554434189 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:16384",
            "value": 27.0315144731768,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 27.03168023928959 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:256",
            "value": 0.5935992550041209,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5935833453540037 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:8192",
            "value": 13.60014176133487,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 13.600293329449435 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:1350",
            "value": 0.3251688736312527,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.3251701734240722 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:16",
            "value": 0.10260842292858978,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.10261058885792917 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:16384",
            "value": 2.2841113974898075,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.2834265439332624 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:256",
            "value": 0.12793528726793524,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.12793015292768536 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:8192",
            "value": 1.1985210095487258,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.1985233093978456 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:1350",
            "value": 0.5769491694297108,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.576883720161093 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:16",
            "value": 0.19928066786236234,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.1992531344364436 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:16384",
            "value": 4.409790855633675,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4.409347630576601 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:256",
            "value": 0.2805041280579022,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.28049454936034623 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:8192",
            "value": 2.2958328497200964,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.295188921129834 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:1350",
            "value": 0.7602638370175681,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.760133294610827 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:16",
            "value": 0.18177126090581808,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.18175916499986683 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:16384",
            "value": 6.929457038210643,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.928708572558487 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:256",
            "value": 0.27943001490103153,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.27940579260231585 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:8192",
            "value": 3.57042348835998,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.5696101064644745 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:1350",
            "value": 46.18564036816294,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 46.18368441814809 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:16",
            "value": 1.8605977462550116,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.8604865173001954 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:16384",
            "value": 534.5800572518533,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 534.5805114504049 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:256",
            "value": 10.594395767194762,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 10.593865759637175 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:8192",
            "value": 268.3613549618388,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 268.3464064885874 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:1350",
            "value": 0.8587720712368989,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.8587309399421652 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:16",
            "value": 0.2788560334589484,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.278837069653328 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:16384",
            "value": 7.0427619453927575,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7.040765609315428 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:256",
            "value": 0.37642934781149057,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.3764156952276335 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:8192",
            "value": 3.6636622275717587,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.662840244891552 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:1350",
            "value": 2.1599509849330554,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.1599586112144764 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:16",
            "value": 0.2426925709218759,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.24267581919821357 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:16384",
            "value": 23.58819733962143,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 23.585625862939654 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:256",
            "value": 0.5961927527668939,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5961946885599606 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:8192",
            "value": 11.905195796458328,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 11.903155122533954 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:1350",
            "value": 2.2380262014314005,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.2378947788855257 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:16",
            "value": 0.24093763074998742,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.24089774098625416 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:16384",
            "value": 24.242874156144936,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24.23916686862067 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:256",
            "value": 0.61287764108227,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.6127805985643302 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:8192",
            "value": 12.236834993009403,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.235167627531787 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:1350",
            "value": 2.1748982455599983,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.1748129788196224 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:16",
            "value": 0.14728233598923646,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.14728285194731736 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:16384",
            "value": 24.41309331936338,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24.408611372752567 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:256",
            "value": 0.5148954267565684,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5148890047550143 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:8192",
            "value": 12.26395476419629,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.26167389972774 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:1350",
            "value": 2.1749736237818653,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.1749126792032034 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:16",
            "value": 0.14742668878842347,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.1474284908211928 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:16384",
            "value": 24.414310320780416,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24.412836471411197 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:256",
            "value": 0.5151581714242556,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.515087031965274 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:8192",
            "value": 12.263058071296243,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.261769116230258 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:1350",
            "value": 2.172199206595921,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.1722083074050267 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:16",
            "value": 0.14603106687273054,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.14598631217748848 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:16384",
            "value": 24.40801585642252,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24.406614567000947 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:256",
            "value": 0.5147856748174136,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5147594026507973 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:8192",
            "value": 12.263977370405945,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.261292956757465 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:1350",
            "value": 1.2643878531258386,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.26422994555854 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:16",
            "value": 0.23812379175329815,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.23812459385236867 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:16384",
            "value": 12.491644698121661,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.491741906714829 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:256",
            "value": 0.4399468225774814,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.43988908152653927 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:8192",
            "value": 6.372782549296613,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.372458035429868 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:1350",
            "value": 2.2031867250639614,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.2032193531107134 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:16",
            "value": 0.15471966236118762,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.15472018578089566 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:16384",
            "value": 24.632653704042713,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24.631265880693284 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:256",
            "value": 0.5194608003381308,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5194305198823383 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:8192",
            "value": 12.393456045416226,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.393270557969696 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:1350",
            "value": 0.29746747006139374,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2974526957330726 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:16",
            "value": 0.08856280013876495,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.0885629707664432 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:16384",
            "value": 2.06917819015195,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.069099482478191 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:256",
            "value": 0.12142255645478311,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.12141066546473496 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:8192",
            "value": 1.0755849661428094,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.0755261850272635 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:1350",
            "value": 0.5687494936238086,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5687505590394243 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:16",
            "value": 0.13138804723117917,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.1313801197283423 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:16384",
            "value": 4.578665162217629,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4.578451236264334 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:256",
            "value": 0.23443558218429145,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.23442214709842155 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:8192",
            "value": 2.363500541217233,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.363045259277094 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:1350",
            "value": 0.3087721522891369,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.3087725312055242 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:16",
            "value": 0.0930558625008436,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.09304983792490922 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:16384",
            "value": 2.2209297631731486,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.220775436196716 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:256",
            "value": 0.12553297092195362,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.12552694380870452 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:8192",
            "value": 1.1296446773766935,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.1296508049088876 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:1350",
            "value": 2.5871514062331977,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.587168432949264 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:16",
            "value": 0.24986186429165436,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2498472817621986 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:16384",
            "value": 28.702603688517513,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 28.70041782786947 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:256",
            "value": 0.6812698589820945,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.6812721345664775 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:8192",
            "value": 14.462415780231112,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 14.462486522772865 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:1350",
            "value": 1.3052732324506848,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.3052779129722327 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:16",
            "value": 0.24288349479097582,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2428337511111458 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:16384",
            "value": 12.840295087970953,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.836376741203019 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:256",
            "value": 0.44575393768450866,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.44573679268104016 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:8192",
            "value": 6.53360549686753,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.532944937832764 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:1350",
            "value": 2.679591701801496,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.679408374856525 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:16",
            "value": 0.1857786327797775,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.18575676774795868 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:16384",
            "value": 30.030603344773922,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 30.030745926252465 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:256",
            "value": 0.6288712170603197,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.6288006906071627 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:8192",
            "value": 15.094807452073136,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 15.094870880896341 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:1350",
            "value": 0.3294517877809708,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.3294544070171288 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:16",
            "value": 0.09870460105180753,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.09868981465466216 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:16384",
            "value": 2.3797736060614048,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.3793905066087384 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:256",
            "value": 0.13165176113636778,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.1316434420987963 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:8192",
            "value": 1.2272254024253908,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.227170610804893 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:1350",
            "value": 0.6424300558785313,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.6424318221440691 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:16",
            "value": 0.14960537388363926,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.14960486419740454 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:16384",
            "value": 5.229647521723735,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 5.229719911984073 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:256",
            "value": 0.2560650255593331,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2560662350142707 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:8192",
            "value": 2.6944104748651125,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.6942651559057254 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:1350",
            "value": 0.8099228364634414,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.8099232192359194 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:16",
            "value": 0.17841590720905046,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.1783923234690752 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:16384",
            "value": 6.945233388249429,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.944795167490462 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:256",
            "value": 0.28935229003294854,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.28927441961379924 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:8192",
            "value": 3.587272694571754,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.586877617616131 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:1350",
            "value": 46.14393501807041,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 46.13864916311119 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:16",
            "value": 1.5547810945830132,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.5543891651864779 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:16384",
            "value": 547.2323281250358,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 547.2384960937271 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:256",
            "value": 9.56709729173871,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 9.566467466575887 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:8192",
            "value": 274.15946456688016,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 274.15975393691986 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:1350",
            "value": 0.925942209260771,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.9257664894388957 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:16",
            "value": 0.2953869261938515,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2953838466292485 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:16384",
            "value": 7.075453477228628,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7.0738191537646795 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:256",
            "value": 0.4055161476220739,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.40550215166479636 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:8192",
            "value": 3.6966076319372636,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.6962443642682885 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockDecrypt<128>/threads:1",
            "value": 0.015877413207269014,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.01587636921711475 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockDecrypt<256>/threads:1",
            "value": 0.020856001879993955,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.020850600477090867 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockDecryptSetup<128>/threads:1",
            "value": 0.02051417037725385,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.020513234543238525 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockDecryptSetup<256>/threads:1",
            "value": 0.025186647894368624,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.025186875498893726 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockEncrypt<128>/threads:1",
            "value": 0.015888000665364135,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.015885371045807825 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockEncrypt<256>/threads:1",
            "value": 0.020852707553598512,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.020851580237620435 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockEncryptSetup<128>/threads:1",
            "value": 0.017673015597374928,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.017671834117264102 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockEncryptSetup<256>/threads:1",
            "value": 0.020799032689629703,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.02079914787388848 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedBase64/threads:1",
            "value": 2.49067923153585,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.4902946968086224 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedCurve25519ArbitraryPointMultiply/threads:1",
            "value": 35.789705717193165,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 35.785244257265454 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedCurve25519BasePointMultiply/threads:1",
            "value": 14.923711186733065,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 14.92373904721347 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDH/p224/threads:1",
            "value": 376.39799731177277,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 376.4014005376508 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDH/p256/threads:1",
            "value": 60.00413813812335,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 59.99492792792992 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDH/p384/threads:1",
            "value": 1000.693485714318,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1000.6175928571447 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDH/p521/threads:1",
            "value": 2345.477633333341,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2345.38285000004 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSASign/p224/threads:1",
            "value": 206.7680516986668,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 206.75870901031334 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSASign/p256/threads:1",
            "value": 19.571857801374268,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 19.56976644782697 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSASign/p384/threads:1",
            "value": 552.5954308301664,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 552.5639367589138 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSASign/p521/threads:1",
            "value": 1302.7632095237268,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1302.477828571418 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSAVerify/p224/threads:1",
            "value": 208.61710074078238,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 208.61824888883078 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSAVerify/p256/threads:1",
            "value": 55.36943061630085,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 55.35368827037772 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSAVerify/p384/threads:1",
            "value": 559.1662195121539,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 559.0585203251761 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSAVerify/p521/threads:1",
            "value": 1339.6954952381316,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1339.7106857144622 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedEd25519/threads:1",
            "value": 15.896706716588135,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 15.89682607216063 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedEd25519Sign/threads:1",
            "value": 16.062093865312775,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 16.060512223246587 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedEd25519Verify/threads:1",
            "value": 56.18417954816828,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 56.18123662306513 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHRSSDecap/threads:1",
            "value": 26.560380699088626,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 26.560411094222516 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHRSSEncap/threads:1",
            "value": 8.045674370471199,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 8.04521196964449 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHRSSGenerate/threads:1",
            "value": 137.09690059057297,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 137.08934350392795 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:1350/threads:1",
            "value": 2.259498775694335,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.2594029415557926 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:16/threads:1",
            "value": 0.2257928489225328,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.225793032929112 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:16384/threads:1",
            "value": 26.07187813953524,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 26.069749767441934 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:256/threads:1",
            "value": 0.4306395469127718,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.43057169431952713 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:8192/threads:1",
            "value": 13.058042505165487,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 13.05733853677149 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:1350/threads:1",
            "value": 0.8538088122325183,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.8537511675263376 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:16/threads:1",
            "value": 0.06191862765923692,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.06191312891076181 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:16384/threads:1",
            "value": 9.700781252165163,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 9.700870415308831 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:256/threads:1",
            "value": 0.2123632831089263,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.21235833492471254 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:8192/threads:1",
            "value": 4.881816422594586,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4.881484065550112 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:1350/threads:1",
            "value": 0.9126205289842891,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.9125572675006348 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:16/threads:1",
            "value": 0.06487552432518975,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.06486453782462304 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:16384/threads:1",
            "value": 10.351007471511723,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 10.34839147802824 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:256/threads:1",
            "value": 0.2285601269296823,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.22854417881546774 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:8192/threads:1",
            "value": 5.208755804437881,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 5.2082783896400695 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:1350/threads:1",
            "value": 2.6498039182282964,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.6495943592652607 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:16/threads:1",
            "value": 0.27421649688481364,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.27421621288120623 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:16384/threads:1",
            "value": 30.604504482828702,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 30.604775639625448 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:256/threads:1",
            "value": 0.7533203131721026,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.753251269035419 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:8192/threads:1",
            "value": 15.446467829156338,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 15.446542103520828 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHashToCurve/hash-to-curve P256_XMD:SHA-256_SSWU_RO_/threads:1",
            "value": 28.57018220859122,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 28.56802781186295 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHashToCurve/hash-to-curve P384_XMD:SHA-384_SSWU_RO_/threads:1",
            "value": 76.78848111657013,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 76.78622879036816 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHashToCurve/hash-to-scalar P384_XMD:SHA-512/threads:1",
            "value": 1.3415711069595877,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.3415858504573135 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAKeyGen/ml_dsa_44/threads:1",
            "value": 61.17398338436082,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 61.166100131170715 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAKeyGen/ml_dsa_65/threads:1",
            "value": 115.67736807277704,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 115.67888585607855 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAKeyGen/ml_dsa_87/threads:1",
            "value": 161.61455491329838,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 161.60836069366664 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAParsePubKey/ml_dsa_44/threads:1",
            "value": 4.459638769462953,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4.459328142415895 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAParsePubKey/ml_dsa_65/threads:1",
            "value": 6.594434364844872,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.5940888323683 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAParsePubKey/ml_dsa_87/threads:1",
            "value": 8.71849166148137,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 8.718587616677809 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSASign/ml_dsa_44/threads:1",
            "value": 210.26728149304947,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 210.23764696739528 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSASign/ml_dsa_65/threads:1",
            "value": 316.4029216151153,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 316.38197387174534 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSASign/ml_dsa_87/threads:1",
            "value": 391.06665641034294,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 391.007089743676 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerify/ml_dsa_44/threads:1",
            "value": 51.298032720585994,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 51.291047426465084 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerify/ml_dsa_65/threads:1",
            "value": 82.80052274068684,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 82.7889681039608 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerify/ml_dsa_87/threads:1",
            "value": 138.84055621886307,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 138.82792039801438 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerifyBadSignature/ml_dsa_44/threads:1",
            "value": 51.17106378298352,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 51.1678071847497 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerifyBadSignature/ml_dsa_65/threads:1",
            "value": 82.80245843228454,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 82.80215795722981 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerifyBadSignature/ml_dsa_87/threads:1",
            "value": 138.82175718534,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 138.81189890985257 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024DecapOnly/threads:1",
            "value": 37.299671908170424,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 37.302782783241824 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024EncapOnly/threads:1",
            "value": 25.629912232002326,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 25.61384933277551 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024KeyGenDecap/threads:1",
            "value": 78.5575743129526,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 78.55802019068977 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024KeyGenOnly/threads:1",
            "value": 41.86972363310669,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 41.86880280848574 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024ParseEncap/threads:1",
            "value": 45.377459980162165,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 45.38013525043369 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024ParseOnly/threads:1",
            "value": 20.57357362607632,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 20.560613772803137 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024PrivateKeyFromSeedOnly/threads:1",
            "value": 41.89509088157154,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 41.921707025031566 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768DecapOnly/threads:1",
            "value": 28.25343090603791,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 28.24498486968326 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768EncapOnly/threads:1",
            "value": 19.502702831244378,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 19.49569850790937 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768KeyGenDecap/threads:1",
            "value": 56.16818236714315,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 56.164497584531354 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768KeyGenOnly/threads:1",
            "value": 28.4620536734676,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 28.462177959184196 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768ParseEncap/threads:1",
            "value": 31.95145148071181,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 31.94408359918364 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768ParseOnly/threads:1",
            "value": 13.308257251989446,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 13.298022824616428 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768PrivateKeyFromSeedOnly/threads:1",
            "value": 28.52899591504384,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 28.542586073229682 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndSign/2048/threads:1",
            "value": 742.4080793651218,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 742.2687354496774 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndSign/3072/threads:1",
            "value": 2161.552969229993,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2161.485507692235 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndSign/4096/threads:1",
            "value": 4793.757344828009,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4793.810448275288 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndVerify/2048/threads:1",
            "value": 19.335750414593402,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 19.335861111110646 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndVerify/3072/threads:1",
            "value": 40.580465507245194,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 40.58068347825919 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndVerify/4096/threads:1",
            "value": 70.61384576611738,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 70.605571572572 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAKeyGen/2048",
            "value": 74874.74200000103,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 74875.00366666685 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAKeyGen/3072",
            "value": 249910.89899998542,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 249903.88500000903 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAKeyGen/4096",
            "value": 408179.7320000078,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 408148.9899999724 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAParsePrivateKey/2048/threads:1",
            "value": 93.18058426966178,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 93.15140251156699 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAParsePrivateKey/3072/threads:1",
            "value": 170.49639051095215,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 170.4786508515778 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAParsePrivateKey/4096/threads:1",
            "value": 275.60805098041067,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 275.5642666666709 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSASign/2048/threads:1",
            "value": 642.8262110093075,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 642.7517706421078 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSASign/3072/threads:1",
            "value": 1977.6825633805815,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1977.4038169017124 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSASign/4096/threads:1",
            "value": 4493.371451612546,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4493.212741935518 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAVerify/2048/threads:1",
            "value": 16.92651917261729,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 16.92605261884636 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAVerify/3072/threads:1",
            "value": 36.312272703623314,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 36.30972937809488 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAVerify/4096/threads:1",
            "value": 63.190155615714794,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 63.186201172755965 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:1350/threads:1",
            "value": 0.8612190051324147,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.861114034493226 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:16/threads:1",
            "value": 0.6357755102039774,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.6357394701594372 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:16384/threads:1",
            "value": 3.1535017751477072,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.153511398906696 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:256/threads:1",
            "value": 0.6634567473889308,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.663461837880774 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:8192/threads:1",
            "value": 1.8846839291994089,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.8841202603589542 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSLHDSA/threads:1",
            "value": 35088.46450000647,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 35086.58425000988 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSLHDSASign/threads:1",
            "value": 269778.6670000255,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 269759.4439999875 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSLHDSAVerify/threads:1",
            "value": 267.21607692303195,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 267.18386587771374 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSPAKE2/threads:1",
            "value": 124.634646743991,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 124.63549598572733 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedScrypt/(N = 1024, r = 8, p = 16)/threads:1",
            "value": 27757.108999992397,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 27750.90720000435 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedScrypt/(N = 16384, r = 8, p = 1)/threads:1",
            "value": 27685.481399998935,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 27685.7275999987 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSelfTest",
            "value": 4476.121933331949,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4474.717666666568 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/1350/threads:1",
            "value": 0.5180383409381465,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5180437173219904 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/16/threads:1",
            "value": 0.021172185537453075,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.021172317795889895 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/16384/threads:1",
            "value": 6.069616931813686,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.069178984784236 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/256/threads:1",
            "value": 0.10979129894860239,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.109786423393264 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/8192/threads:1",
            "value": 3.044907421431411,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.044534787959181 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedTrustTokenKeyGen/SpeedTrustTokenKeyGen experiment_v1",
            "value": 993.449546099521,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 993.4090992910149 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedTrustTokenKeyGen/SpeedTrustTokenKeyGen experiment_v2_pmb",
            "value": 994.0696999998571,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 993.9313214285253 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedTrustTokenKeyGen/SpeedTrustTokenKeyGen experiment_v2_voprf",
            "value": 513.3443394159949,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 513.2925620438176 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedX509/threads:1",
            "value": 3.940648256721634,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.940415413373661 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginIssueBatch1",
            "value": 629.0060270270044,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 628.9635135134619 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginIssueBatch10",
            "value": 6292.411136363606,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6292.439409091602 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginRedeemBatch1",
            "value": 0.1557554001451767,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.1557014503749558 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginRedeemBatch10",
            "value": 0.1542039189122647,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.15419392712258873 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1FinishIssueBatch1",
            "value": 7130.35560000037,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7128.8652499999835 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1FinishIssueBatch10",
            "value": 25313.092333329714,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 25313.18983333364 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1IssueBatch1",
            "value": 6079.4410434774045,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6078.759086955929 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1IssueBatch10",
            "value": 21795.15499998767,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 21792.860999994446 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1RedeemBatch1",
            "value": 1731.4975802469514,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1731.161111111468 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1RedeemBatch10",
            "value": 1730.9785802470365,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1730.9655555556096 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginIssueBatch1",
            "value": 629.4612869955334,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 629.3254484305512 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginIssueBatch10",
            "value": 6290.754500001454,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6289.897863638317 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginRedeemBatch1",
            "value": 0.14772984341430706,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.1477214117246316 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginRedeemBatch10",
            "value": 0.14561292544217874,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.14561171108671458 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbFinishIssueBatch1",
            "value": 7106.974249998644,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7106.6562000005715 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbFinishIssueBatch10",
            "value": 25314.25733332071,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 25312.839166673486 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbIssueBatch1",
            "value": 6082.566521738302,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6082.235956522136 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbIssueBatch10",
            "value": 21772.165833330822,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 21772.41266666859 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbRedeemBatch1",
            "value": 1731.6260123447203,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1731.0126790125707 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbRedeemBatch10",
            "value": 1730.8581234563765,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1730.6878765431838 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginIssueBatch1",
            "value": 630.8645540538716,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 630.8540720719986 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginIssueBatch10",
            "value": 6310.4557272698585,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6310.114681817616 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginRedeemBatch1",
            "value": 0.1363820476944614,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.13638179496148198 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginRedeemBatch10",
            "value": 0.13637377910576595,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.1363484675238019 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfFinishIssueBatch1",
            "value": 2452.2974912275586,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2452.12745614048 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfFinishIssueBatch10",
            "value": 9049.321125001341,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 9049.3665000011 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfIssueBatch1",
            "value": 2358.864593219805,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2358.721559321528 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfIssueBatch10",
            "value": 8941.046687500177,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 8937.992374999481 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfRedeemBatch1",
            "value": 559.4282749003573,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 559.3789083665555 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfRedeemBatch10",
            "value": 559.6627040004023,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 559.5370959999855 us\nthreads: 1"
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
          "id": "c93f49c459ac3ab8feb4bf747293ccff9c7da3f2",
          "message": "Run benchmarks 9 times and take the median.",
          "timestamp": "2026-07-11T05:15:01Z",
          "url": "https://github.com/divVerent/boringssl/commit/c93f49c459ac3ab8feb4bf747293ccff9c7da3f2"
        },
        "date": 1783767680877,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:1350",
            "value": 2.3663934835396323,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.3661754587161568 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:16",
            "value": 0.5502371131171183,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5501877018820092 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:16384",
            "value": 12.751291181809227,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.747492363638974 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:256",
            "value": 1.5989075571855937,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.598863369179099 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:8192",
            "value": 7.094280364835872,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7.093406637954593 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:1350",
            "value": 2.5067961305791755,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.5064270143543785 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:16",
            "value": 0.675123293392253,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.6750541697870553 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:16384",
            "value": 13.50232186136803,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 13.50049326224148 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:256",
            "value": 1.7117306573802318,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.711734799608923 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:8192",
            "value": 7.531830043799524,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7.530955550750282 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:1350",
            "value": 2.1945265755727608,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.1943405152150324 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:16",
            "value": 0.14977310228652885,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.1497447120055618 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:16384",
            "value": 24.632848319555034,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24.623963751540867 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:256",
            "value": 0.5205844539656348,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5205338083180582 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:8192",
            "value": 12.381148426448817,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.381026608911775 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:1350",
            "value": 2.197401016264135,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.197192980255015 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:16",
            "value": 0.14959126863444905,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.14957783354833556 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:16384",
            "value": 24.6212926486235,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24.621383397822093 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:256",
            "value": 0.5204491686196906,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5203408622549401 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:8192",
            "value": 12.38129152302251,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.378110403960303 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:1350",
            "value": 2.1983480787059784,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.1983435875697683 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:16",
            "value": 0.1523673700116256,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.15236712573957617 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:16384",
            "value": 24.63151327122268,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24.62708665846371 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:256",
            "value": 0.5225778622075634,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.52253405210742 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:8192",
            "value": 12.38274081614419,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.382729220147123 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:1350",
            "value": 1.2678642275909455,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.2678085880574426 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:16",
            "value": 0.23993603013575562,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2399029096236023 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:16384",
            "value": 12.48570825836486,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.484801997126006 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:256",
            "value": 0.4328810163572687,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.4328125843559167 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:8192",
            "value": 6.365837697763395,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.36562124931792 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:1350",
            "value": 1.958936240155315,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.958866003608913 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:16",
            "value": 0.16450072772701116,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.16449915625856212 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:16384",
            "value": 21.559389102665435,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 21.555628597816494 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:256",
            "value": 0.48554395105398235,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.48540643025506797 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:8192",
            "value": 10.851380767738126,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 10.849516401707838 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:1350",
            "value": 0.2949154822462912,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2948458165376984 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:16",
            "value": 0.09739151742207702,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.09738556064164006 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:16384",
            "value": 2.0742741758986623,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.0742860633496765 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:256",
            "value": 0.11962140342427421,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.11960334264561534 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:8192",
            "value": 1.0784008211109009,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.078266814600566 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:1350",
            "value": 0.5156077688106784,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5155159549239671 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:16",
            "value": 0.18063034491815863,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.18062979374963914 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:16384",
            "value": 3.88232779025011,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.8819956486790548 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:256",
            "value": 0.25137007800596417,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.25137016228819514 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:8192",
            "value": 2.02494764715195,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.0234452156593385 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:1350",
            "value": 0.31079001924475935,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.3107122436790688 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:16",
            "value": 0.10025806326813456,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.10023861384435556 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:16384",
            "value": 2.1849925385946896,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.1846880726785884 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:256",
            "value": 0.12385555366456552,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.12385548186598798 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:8192",
            "value": 1.1364199221922804,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.1363236969757156 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:1350",
            "value": 2.422976922410987,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.4229771473055988 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:16",
            "value": 0.5532679658617314,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5531740414381309 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:16384",
            "value": 13.473543263224938,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 13.472331508690118 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:256",
            "value": 1.6108528013772743,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.6108551205510748 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:8192",
            "value": 7.444295542686847,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7.444269882589732 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:1350",
            "value": 1.3096493272618657,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.3096457349730235 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:16",
            "value": 0.24479545319638557,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.24479573776443564 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:16384",
            "value": 12.831302336232906,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.830249198352284 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:256",
            "value": 0.44123908143796553,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.4411924630006031 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:8192",
            "value": 6.535369527718675,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.534672152547953 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:1350",
            "value": 2.4464487638669623,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.4463125709792037 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:16",
            "value": 0.1947312805303048,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.19470643694820702 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:16384",
            "value": 27.037212162164824,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 27.03421505791047 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:256",
            "value": 0.5949225816309729,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5948205031345024 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:8192",
            "value": 13.610783090028328,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 13.607003526990162 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:1350",
            "value": 0.3261147497869025,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.32609477417759536 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:16",
            "value": 0.10262506343189175,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.10260837322838562 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:16384",
            "value": 2.3021417317665462,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.3018227696448585 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:256",
            "value": 0.12782621145047102,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.12782604916584464 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:8192",
            "value": 1.1898651018609696,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.189702304392115 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:1350",
            "value": 0.5771774991738418,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5771795976536659 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:16",
            "value": 0.19935515721992852,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.19935473893427755 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:16384",
            "value": 4.415657669290692,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4.414964000000144 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:256",
            "value": 0.28109206450975477,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2810667935490379 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:8192",
            "value": 2.30033142275213,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.3001736602673617 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:1350",
            "value": 0.7606120817712846,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.7605105369977965 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:16",
            "value": 0.18133282600087872,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.18128854325345006 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:16384",
            "value": 6.947632536122061,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.945638814150048 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:256",
            "value": 0.2810145128944048,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2810034332652604 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:8192",
            "value": 3.567836866288696,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.567834505343739 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:1350",
            "value": 46.310180592114065,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 46.310401973689125 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:16",
            "value": 1.861797233191788,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.861086317017077 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:16384",
            "value": 535.8230114503032,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 535.824049618328 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:256",
            "value": 10.57365327583681,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 10.572071417762345 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:8192",
            "value": 268.6970384615961,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 268.682019230773 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:1350",
            "value": 0.8599308968307064,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.8599345509706964 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:16",
            "value": 0.27911950303845673,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2791208825973373 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:16384",
            "value": 7.04977795116971,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7.048783085829504 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:256",
            "value": 0.37645167652329203,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.3764169729486306 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:8192",
            "value": 3.6622891990723385,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.6622084389765237 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:1350",
            "value": 2.1660774368100473,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.165695539925016 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:16",
            "value": 0.2423283540984517,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.24232793839234923 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:16384",
            "value": 23.59670463354413,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 23.594047009266713 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:256",
            "value": 0.5951871459427075,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5951388180479436 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:8192",
            "value": 11.907747197689602,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 11.90685317595132 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:1350",
            "value": 2.2372654114784254,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.236960810011775 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:16",
            "value": 0.24179284912649582,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.24177400873965926 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:16384",
            "value": 24.239448347471107,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24.237918844091375 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:256",
            "value": 0.6128348714307572,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.6127205789557056 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:8192",
            "value": 12.238906533894657,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.238900943393071 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:1350",
            "value": 2.176187618455371,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.176044508310754 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:16",
            "value": 0.14742239710935875,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.14740390669573405 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:16384",
            "value": 24.422031538600393,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24.414056630078566 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:256",
            "value": 0.514786146759497,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5147867055359276 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:8192",
            "value": 12.26965764345541,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.268821112572688 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:1350",
            "value": 2.175610078133608,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.1753576898577185 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:16",
            "value": 0.14754248234232736,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.1475427184394922 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:16384",
            "value": 24.421095412523464,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24.421101168672553 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:256",
            "value": 0.5155773085577474,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5155021655367058 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:8192",
            "value": 12.266636220197984,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.265858958625442 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:1350",
            "value": 2.173092375708131,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.173028589156861 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:16",
            "value": 0.14622431258431495,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.14622406973723523 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:16384",
            "value": 24.410752963739522,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24.410688284520777 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:256",
            "value": 0.5151523986043931,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.51509954787819 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:8192",
            "value": 12.276753663884666,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.276110574812172 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:1350",
            "value": 1.265580697676552,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.265490200511968 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:16",
            "value": 0.23810375698863284,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.23810308770959926 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:16384",
            "value": 12.496926620245302,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.496896357792519 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:256",
            "value": 0.4400246190358437,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.4399760653493765 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:8192",
            "value": 6.376283062643137,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.376309767526674 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:1350",
            "value": 2.2040686026605503,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.2039423128268587 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:16",
            "value": 0.15489541335491067,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.15488092444420615 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:16384",
            "value": 24.65541610856404,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24.649515685577814 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:256",
            "value": 0.5204175547237874,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.520419019228131 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:8192",
            "value": 12.406891626050493,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.406877536551567 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:1350",
            "value": 0.2940180358784948,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2939680339884153 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:16",
            "value": 0.08851754366150762,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.08850887493763354 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:16384",
            "value": 2.1141719326859527,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.1140255319149563 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:256",
            "value": 0.1128663175587381,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.1128663143357188 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:8192",
            "value": 1.098569980121152,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.0984330900243355 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:1350",
            "value": 0.5685927439335934,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5685365402893814 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:16",
            "value": 0.13143996094225693,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.13142387967215988 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:16384",
            "value": 4.581637430533304,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4.58087126512037 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:256",
            "value": 0.23451362780859222,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.23449813968006017 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:8192",
            "value": 2.366997653256112,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.3667900423764707 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:1350",
            "value": 0.30898957718690345,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.30896795656501075 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:16",
            "value": 0.09307026068745033,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.09303569300713328 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:16384",
            "value": 2.2198268272807637,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.219184200633204 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:256",
            "value": 0.11750262403963596,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.11750225869355563 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:8192",
            "value": 1.1522636678136924,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.152253254241483 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:1350",
            "value": 2.5920008694847265,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.591835722874864 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:16",
            "value": 0.24986692298372043,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2498442089922174 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:16384",
            "value": 28.71552663935227,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 28.712930942626585 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:256",
            "value": 0.6822129020619413,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.6822127557911039 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:8192",
            "value": 14.473720824269975,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 14.470723102413423 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:1350",
            "value": 1.3052114574241445,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.305213372000288 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:16",
            "value": 0.24298766305367436,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.24298652921961875 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:16384",
            "value": 12.841907807922672,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.839941898826682 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:256",
            "value": 0.4457952131128369,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.4457007447894956 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:8192",
            "value": 6.534059776017766,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.53372725151609 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:1350",
            "value": 2.684600629776082,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.6835881302561546 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:16",
            "value": 0.1858638988100898,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.18585307771081216 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:16384",
            "value": 30.04952642185286,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 30.04781191222589 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:256",
            "value": 0.6295207408941712,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.6294355677758212 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:8192",
            "value": 15.102283096162804,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 15.100981565331251 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:1350",
            "value": 0.3299345946632075,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.3298768781263118 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:16",
            "value": 0.09892741831385556,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.09892727089334223 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:16384",
            "value": 2.3763122929233953,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.376122929232936 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:256",
            "value": 0.12311716123415811,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.12311691914738739 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:8192",
            "value": 1.2183440940851662,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.2182734860247049 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:1350",
            "value": 0.642472463781587,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.6424328562315892 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:16",
            "value": 0.14966458104596828,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.14966389297310276 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:16384",
            "value": 5.236827489534003,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 5.236809173145724 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:256",
            "value": 0.25614264941361214,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.25612913781277347 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:8192",
            "value": 2.6999333568335713,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.6996415604252815 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:1350",
            "value": 0.8102471925828457,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.8102123905152536 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:16",
            "value": 0.17857110408244642,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.17855577676031922 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:16384",
            "value": 6.947461638946529,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.9465720745618675 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:256",
            "value": 0.277965984330084,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.27796537736786253 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:8192",
            "value": 3.5934966540059685,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.5931234529624527 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:1350",
            "value": 46.17587294812757,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 46.17581615233327 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:16",
            "value": 1.5584568336130804,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.5583039149229598 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:16384",
            "value": 547.5917529411965,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 547.5345411764799 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:256",
            "value": 9.58472730384766,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 9.583737778998362 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:8192",
            "value": 274.25404901954806,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 274.25262156872816 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:1350",
            "value": 0.9278643412392089,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.9277821898212912 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:16",
            "value": 0.29571147345194404,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2957106525931957 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:16384",
            "value": 7.07065286125822,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7.068690792464762 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:256",
            "value": 0.39401012499404975,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.3940130676847104 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:8192",
            "value": 3.696080779575274,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.6960619230974086 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockDecrypt<128>/threads:1",
            "value": 0.015889595630724722,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.015888335646403566 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockDecrypt<256>/threads:1",
            "value": 0.02086409712565878,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.020864123334636185 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockDecryptSetup<128>/threads:1",
            "value": 0.020525489516543715,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.020525470621097698 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockDecryptSetup<256>/threads:1",
            "value": 0.02522101372090926,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.025217390802420955 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockEncrypt<128>/threads:1",
            "value": 0.01588575577981664,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.015882892907066785 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockEncrypt<256>/threads:1",
            "value": 0.02087283472641698,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.0208680117948829 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockEncryptSetup<128>/threads:1",
            "value": 0.01768689211421678,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.017682906040191602 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockEncryptSetup<256>/threads:1",
            "value": 0.0208387659053669,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.02083538086492412 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedBase64/threads:1",
            "value": 2.4942280670476773,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.4942264800286846 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedCurve25519ArbitraryPointMultiply/threads:1",
            "value": 35.67919102270116,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 35.67931701096357 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedCurve25519BasePointMultiply/threads:1",
            "value": 14.944256126144369,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 14.941179842317975 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDH/p224/threads:1",
            "value": 373.58149999996215,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 373.5810664893612 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDH/p256/threads:1",
            "value": 59.95739804174035,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 59.95058194975624 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDH/p384/threads:1",
            "value": 985.3221549294758,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 985.161978873245 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDH/p521/threads:1",
            "value": 2342.989610169598,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2342.965440678 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSASign/p224/threads:1",
            "value": 204.6916408759374,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 204.68078248176005 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSASign/p256/threads:1",
            "value": 19.653960111969592,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 19.653961931420426 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSASign/p384/threads:1",
            "value": 547.2841210938384,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 547.2851445311733 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSASign/p521/threads:1",
            "value": 1310.3935420561093,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1310.1128971961516 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSAVerify/p224/threads:1",
            "value": 205.56475150597004,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 205.53895331327948 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSAVerify/p256/threads:1",
            "value": 55.392248518388115,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 55.392145397082245 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSAVerify/p384/threads:1",
            "value": 561.2213729508129,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 561.1768196721218 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSAVerify/p521/threads:1",
            "value": 1348.414749999121,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1348.4058461536654 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedEd25519/threads:1",
            "value": 15.908802837684119,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 15.908314982974332 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedEd25519Sign/threads:1",
            "value": 16.07347616865333,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 16.073521081577713 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedEd25519Verify/threads:1",
            "value": 56.08571686021419,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 56.08070244292394 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHRSSDecap/threads:1",
            "value": 26.618657028730084,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 26.613250142674765 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHRSSEncap/threads:1",
            "value": 8.055343004880918,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 8.05464918126921 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHRSSGenerate/threads:1",
            "value": 137.4388933189373,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 137.43928017242905 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:1350/threads:1",
            "value": 2.2621758558974063,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.2620295753984268 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:16/threads:1",
            "value": 0.22561061523361867,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2255880968994736 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:16384/threads:1",
            "value": 26.105703345731325,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 26.105612639398835 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:256/threads:1",
            "value": 0.43124168169749505,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.4312417155556045 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:8192/threads:1",
            "value": 13.06008646230798,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 13.059185502656407 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:1350/threads:1",
            "value": 0.8540956710087731,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.8539232740475415 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:16/threads:1",
            "value": 0.06202921240136018,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.06202950840126041 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:16384/threads:1",
            "value": 9.704614968813418,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 9.703895495495965 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:256/threads:1",
            "value": 0.21254237825541777,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.21254324604377145 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:8192/threads:1",
            "value": 4.882465389712409,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4.882114402343575 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:1350/threads:1",
            "value": 0.9133125081494227,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.9132592901661505 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:16/threads:1",
            "value": 0.06485004344368574,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.06484554151712639 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:16384/threads:1",
            "value": 10.349757779582118,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 10.34805669302994 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:256/threads:1",
            "value": 0.2288707875905085,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.22885799457375386 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:8192/threads:1",
            "value": 5.2100511933963105,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 5.209532158524603 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:1350/threads:1",
            "value": 2.650539868021392,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.6501032578892305 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:16/threads:1",
            "value": 0.27459937384404154,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2745620513463861 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:16384/threads:1",
            "value": 30.6242961992106,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 30.618015945827487 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:256/threads:1",
            "value": 0.7539306390422348,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.753866132113555 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:8192/threads:1",
            "value": 15.463606435922843,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 15.460344244161696 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHashToCurve/hash-to-curve P256_XMD:SHA-256_SSWU_RO_/threads:1",
            "value": 28.576131304880008,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 28.573432713906836 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHashToCurve/hash-to-curve P384_XMD:SHA-384_SSWU_RO_/threads:1",
            "value": 76.92776015367896,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 76.9206201975946 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHashToCurve/hash-to-scalar P384_XMD:SHA-512/threads:1",
            "value": 1.3425747208112737,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.342290212308275 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAKeyGen/ml_dsa_44/threads:1",
            "value": 61.28266257668357,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 61.26940403157164 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAKeyGen/ml_dsa_65/threads:1",
            "value": 115.75087118085578,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 115.74820809249874 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAKeyGen/ml_dsa_87/threads:1",
            "value": 161.80964393064815,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 161.7916508670542 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAParsePubKey/ml_dsa_44/threads:1",
            "value": 4.467502880055973,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4.467418737866953 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAParsePubKey/ml_dsa_65/threads:1",
            "value": 6.594520102044663,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.593784712052059 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAParsePubKey/ml_dsa_87/threads:1",
            "value": 8.714954293542355,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 8.714960146957928 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSASign/ml_dsa_44/threads:1",
            "value": 204.49472598869053,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 204.4691694915385 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSASign/ml_dsa_65/threads:1",
            "value": 322.279903966555,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 322.2809665970712 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSASign/ml_dsa_87/threads:1",
            "value": 395.82774123993903,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 395.827692722319 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerify/ml_dsa_44/threads:1",
            "value": 51.2612885390031,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 51.25287037715056 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerify/ml_dsa_65/threads:1",
            "value": 82.93630687205544,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 82.93640106634867 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerify/ml_dsa_87/threads:1",
            "value": 139.08010956174894,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 139.05151394423805 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerifyBadSignature/ml_dsa_44/threads:1",
            "value": 51.320452090265796,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 51.32013762485988 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerifyBadSignature/ml_dsa_65/threads:1",
            "value": 83.01319289943255,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 83.00382011833193 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerifyBadSignature/ml_dsa_87/threads:1",
            "value": 138.95845875259317,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 138.95393158954096 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024DecapOnly/threads:1",
            "value": 37.42783881341915,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 37.43246057182536 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024EncapOnly/threads:1",
            "value": 25.721133443437658,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 25.697915381942384 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024KeyGenDecap/threads:1",
            "value": 78.71076460671422,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 78.706107865177 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024KeyGenOnly/threads:1",
            "value": 41.88960688623297,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 41.88707814370661 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024ParseEncap/threads:1",
            "value": 45.473122275295715,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 45.476645528611044 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024ParseOnly/threads:1",
            "value": 20.65239770690278,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 20.63895091174903 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024PrivateKeyFromSeedOnly/threads:1",
            "value": 41.99294512794598,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 42.002159520423255 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768DecapOnly/threads:1",
            "value": 28.326433300008855,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 28.324410494001306 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768EncapOnly/threads:1",
            "value": 19.57593180882938,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 19.569135267119623 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768KeyGenDecap/threads:1",
            "value": 56.280214400657854,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 56.280337489936684 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768KeyGenOnly/threads:1",
            "value": 28.51266103763941,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 28.512690132240763 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768ParseEncap/threads:1",
            "value": 32.064055326074865,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 32.058749311402636 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768ParseOnly/threads:1",
            "value": 13.394557264229912,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 13.387904671001532 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768PrivateKeyFromSeedOnly/threads:1",
            "value": 28.62498651401188,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 28.64578463420875 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndSign/2048/threads:1",
            "value": 744.750571428725,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 744.6385978838291 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndSign/3072/threads:1",
            "value": 2165.505799999979,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2165.496507692611 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndSign/4096/threads:1",
            "value": 4798.219862068279,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4796.98682758665 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndVerify/2048/threads:1",
            "value": 19.361370211597013,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 19.359872078554137 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndVerify/3072/threads:1",
            "value": 40.678419785331066,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 40.678249782413864 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndVerify/4096/threads:1",
            "value": 70.5934878910186,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 70.58643794147551 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAKeyGen/2048",
            "value": 71494.39349998943,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 71480.20450000558 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAKeyGen/3072",
            "value": 225447.10400006807,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 225392.75100001533 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAKeyGen/4096",
            "value": 605929.580999998,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 605912.7409999974 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAParsePrivateKey/2048/threads:1",
            "value": 91.92902368421362,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 91.92896842105114 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAParsePrivateKey/3072/threads:1",
            "value": 171.3303442424645,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 171.3316060606 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAParsePrivateKey/4096/threads:1",
            "value": 275.33453663802584,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 275.31171551721667 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSASign/2048/threads:1",
            "value": 643.0704724770203,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 643.0014495412171 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSASign/3072/threads:1",
            "value": 1980.3264788728306,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1979.9681408449355 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSASign/4096/threads:1",
            "value": 4496.720645159903,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4496.2998387100315 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAVerify/2048/threads:1",
            "value": 16.90387418023448,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 16.903717877097264 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAVerify/3072/threads:1",
            "value": 36.41725312499844,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 36.4143374999996 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAVerify/4096/threads:1",
            "value": 63.18169806218762,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 63.181773321311574 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:1350/threads:1",
            "value": 0.8627439003817322,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.8626648693229356 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:16/threads:1",
            "value": 0.635496958425016,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.6354593118464997 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:16384/threads:1",
            "value": 3.1159368660177624,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.115379298711636 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:256/threads:1",
            "value": 0.6623572703348211,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.6623208056310076 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:8192/threads:1",
            "value": 1.8768826067907252,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.8767632882313399 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSLHDSA/threads:1",
            "value": 35124.54274999755,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 35110.6614999992 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSLHDSASign/threads:1",
            "value": 269924.8490000059,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 269901.1570000067 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSLHDSAVerify/threads:1",
            "value": 263.74061781077046,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 263.70202597402624 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSPAKE2/threads:1",
            "value": 124.63017777776662,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 124.61665155557158 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedScrypt/(N = 1024, r = 8, p = 16)/threads:1",
            "value": 27721.801600000617,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 27719.21279999106 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedScrypt/(N = 16384, r = 8, p = 1)/threads:1",
            "value": 27737.79279999644,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 27732.637999997678 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSelfTest",
            "value": 4485.936322581556,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4485.616387096196 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/1350/threads:1",
            "value": 0.518838722470475,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5187395275053536 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/16/threads:1",
            "value": 0.02116330951840489,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.021162518847647756 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/16384/threads:1",
            "value": 6.072512978289321,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.071924816916971 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/256/threads:1",
            "value": 0.1098658383895314,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.1098554024738595 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/8192/threads:1",
            "value": 3.0457057263362826,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.045434540632208 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedTrustTokenKeyGen/SpeedTrustTokenKeyGen experiment_v1",
            "value": 991.9504326239962,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 991.7706524822693 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedTrustTokenKeyGen/SpeedTrustTokenKeyGen experiment_v2_pmb",
            "value": 991.8374822693636,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 991.705921985927 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedTrustTokenKeyGen/SpeedTrustTokenKeyGen experiment_v2_voprf",
            "value": 510.7033467152012,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 510.70016423370475 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedX509/threads:1",
            "value": 3.9748290859283273,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.973756827716101 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginIssueBatch1",
            "value": 625.9696964287441,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 625.9251249999106 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginIssueBatch10",
            "value": 6261.337318180308,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6260.8297727293075 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginRedeemBatch1",
            "value": 0.1517354116784438,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.1517344904414913 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginRedeemBatch10",
            "value": 0.15293527669673718,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.15291030069515796 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1FinishIssueBatch1",
            "value": 7097.479399999429,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7096.797500000207 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1FinishIssueBatch10",
            "value": 25478.80140000416,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 25476.616399998875 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1IssueBatch1",
            "value": 6038.592521740018,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6038.619521738699 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1IssueBatch10",
            "value": 21674.44033332799,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 21671.782999999796 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1RedeemBatch1",
            "value": 1714.893975609928,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1714.4986463409434 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1RedeemBatch10",
            "value": 1715.126621951274,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1715.0293780491943 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginIssueBatch1",
            "value": 625.9049866069892,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 625.8558437500942 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginIssueBatch10",
            "value": 6253.545045451988,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6251.895454544803 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginRedeemBatch1",
            "value": 0.14717188462859573,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.14715729541848277 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginRedeemBatch10",
            "value": 0.14720280960203969,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.14717994207096294 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbFinishIssueBatch1",
            "value": 7101.644499999793,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7101.213699999676 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbFinishIssueBatch10",
            "value": 25487.53560000705,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 25485.336799999917 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbIssueBatch1",
            "value": 6038.985608696472,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6037.568826086401 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbIssueBatch10",
            "value": 21670.744000005016,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 21668.750666663072 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbRedeemBatch1",
            "value": 1715.5023780485576,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1715.2135121951303 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbRedeemBatch10",
            "value": 1715.950308642805,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1715.5941851851846 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginIssueBatch1",
            "value": 632.6269592758604,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 632.5939592760717 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginIssueBatch10",
            "value": 6323.211318180649,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6322.946500001143 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginRedeemBatch1",
            "value": 0.13658527047072178,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.1365697379134818 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginRedeemBatch10",
            "value": 0.1364816243566339,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.13645303172161 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfFinishIssueBatch1",
            "value": 2444.7586842105316,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2444.748263157411 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfFinishIssueBatch10",
            "value": 9029.00062500045,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 9022.189374999101 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfIssueBatch1",
            "value": 2378.0562033892747,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2377.7385762720496 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfIssueBatch10",
            "value": 8921.335937500884,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 8919.862375002196 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfRedeemBatch1",
            "value": 559.8051440001653,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 559.7377400000596 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfRedeemBatch10",
            "value": 559.2313720003402,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 559.137920000012 us\nthreads: 1"
          }
        ]
      }
    ]
  }
}