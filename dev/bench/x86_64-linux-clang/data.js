window.BENCHMARK_DATA = {
  "lastUpdate": 1783747587615,
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
      }
    ]
  }
}
