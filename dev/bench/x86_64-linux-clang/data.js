window.BENCHMARK_DATA = {
  "lastUpdate": 1783788619579,
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
        "date": 1783770957011,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:1350",
            "value": 2.363740076587846,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.363630459353287 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:16",
            "value": 0.5490649060037679,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5490639654503436 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:16384",
            "value": 12.742735395818167,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.742081346678903 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:256",
            "value": 1.598407147422505,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.5982721659132273 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:8192",
            "value": 7.088558659784161,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7.08827320579024 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:1350",
            "value": 2.502176018489503,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.502179529901119 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:16",
            "value": 0.6746175986208054,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.6745644550812924 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:16384",
            "value": 13.497117805844026,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 13.497096114913516 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:256",
            "value": 1.7111533794754428,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.7109142588591864 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:8192",
            "value": 7.516549991950811,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7.515748081361689 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:1350",
            "value": 2.1941672827504917,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.1941647766434254 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:16",
            "value": 0.1498218202478852,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.14981461564154558 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:16384",
            "value": 24.619208721650864,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24.61782345700692 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:256",
            "value": 0.5195121616878884,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5193771730495716 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:8192",
            "value": 12.375504036907616,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.372491704373196 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:1350",
            "value": 2.1958153928113475,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.1957017642821732 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:16",
            "value": 0.1496814005890036,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.14967455698508705 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:16384",
            "value": 24.619355649259507,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24.6193025830264 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:256",
            "value": 0.5205253958674405,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5205012050959011 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:8192",
            "value": 12.378167903852264,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.376903764582273 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:1350",
            "value": 2.1983494203036757,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.198218336632449 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:16",
            "value": 0.1520790588511341,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.15207201888892097 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:16384",
            "value": 24.62685109001329,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24.62078744726332 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:256",
            "value": 0.5219711119789551,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5218823693457941 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:8192",
            "value": 12.38034929328748,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.378432685515735 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:1350",
            "value": 1.2671498465967685,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.2670666196048153 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:16",
            "value": 0.2398860347476685,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.23987511945283727 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:16384",
            "value": 12.480101239855598,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.480112300420762 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:256",
            "value": 0.43271502027763525,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.43271468077355196 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:8192",
            "value": 6.366226712735423,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.36589007592043 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:1350",
            "value": 1.957880638978974,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.9578722041152146 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:16",
            "value": 0.16455952309382196,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.16455245838446864 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:16384",
            "value": 21.549909342771667,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 21.54992396490781 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:256",
            "value": 0.48526117713261296,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.4852607742904097 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:8192",
            "value": 10.845283590182255,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 10.845305738401855 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:1350",
            "value": 0.29366805306940413,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.29366764241338106 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:16",
            "value": 0.09736846425671193,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.09735600373669698 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:16384",
            "value": 2.0609963969044642,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.060890483674827 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:256",
            "value": 0.11961127435469322,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.1196111131487097 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:8192",
            "value": 1.077443054473624,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.0774030418250387 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:1350",
            "value": 0.5147454416971574,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5147453570455968 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:16",
            "value": 0.18037923835031655,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.18035733148091393 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:16384",
            "value": 3.880745362421431,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.880262279195968 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:256",
            "value": 0.2514035945747087,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.25138157268930417 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:8192",
            "value": 2.0230620030648607,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.0229363055481704 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:1350",
            "value": 0.3092116172833755,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.3091753907746548 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:16",
            "value": 0.10014966995816285,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.10014949120787957 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:16384",
            "value": 2.1722505160647807,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.1722483887741078 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:256",
            "value": 0.12405781426957901,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.12404613621882914 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:8192",
            "value": 1.1370881492316327,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.1370878333444243 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:1350",
            "value": 2.423697835467065,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.4233765137806578 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:16",
            "value": 0.5533174981300893,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5532744522312617 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:16384",
            "value": 13.446593215456808,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 13.446027099750165 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:256",
            "value": 1.6093165720589309,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.609315089743301 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:8192",
            "value": 7.434201199130523,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7.434200562425117 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:1350",
            "value": 1.3086366158765386,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.308570557076252 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:16",
            "value": 0.24470843003613163,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.24470854180095974 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:16384",
            "value": 12.832810756243738,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.831434104259618 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:256",
            "value": 0.4410214256127156,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.4410153071710678 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:8192",
            "value": 6.533617761157448,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.533296003739429 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:1350",
            "value": 2.444834491064106,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.4448299357718493 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:16",
            "value": 0.19471272476064472,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.19469534021282353 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:16384",
            "value": 27.026520386458937,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 27.025381642512524 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:256",
            "value": 0.5937780359269395,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5937776246782384 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:8192",
            "value": 13.602167781977638,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 13.601148094268634 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:1350",
            "value": 0.32520352234970734,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.32514689215429643 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:16",
            "value": 0.1025015831234791,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.10250149240845738 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:16384",
            "value": 2.2875378792926515,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.2875481434654477 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:256",
            "value": 0.12811941968362464,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.12811441519378175 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:8192",
            "value": 1.1869609718798442,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.1867850055221054 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:1350",
            "value": 0.5767706049735382,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5767726545424837 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:16",
            "value": 0.19930816651060582,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.19930832866318474 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:16384",
            "value": 4.4096939584640396,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4.409452957834559 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:256",
            "value": 0.2806013644990897,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2805803725147048 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:8192",
            "value": 2.2973318422387634,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.2970667715343374 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:1350",
            "value": 0.7600448603005658,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.7600424803572893 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:16",
            "value": 0.18172975423034163,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.18171395281173877 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:16384",
            "value": 6.9338075228942,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.933453452115839 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:256",
            "value": 0.2792396831604298,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2792393099621495 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:8192",
            "value": 3.563472572871031,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.5631116466477106 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:1350",
            "value": 46.187432253793986,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 46.183753139460684 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:16",
            "value": 1.8593491059943257,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.859255517118616 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:16384",
            "value": 535.092332060984,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 535.0423893129771 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:256",
            "value": 10.583543794793254,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 10.582393134667358 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:8192",
            "value": 268.3185973281778,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 268.318635496147 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:1350",
            "value": 0.8594809926796629,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.8594811032229234 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:16",
            "value": 0.28097919252897197,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2809435326551242 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:16384",
            "value": 7.0351242787576975,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7.035107771812171 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:256",
            "value": 0.3764180024925635,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.3764175593063802 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:8192",
            "value": 3.6677217234241803,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.667717666151693 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:1350",
            "value": 2.1658863900377794,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.1658375075510437 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:16",
            "value": 0.2427735859562896,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.24275571638383278 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:16384",
            "value": 23.5903441131971,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 23.587699848409358 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:256",
            "value": 0.5969197588244016,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5969194944524394 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:8192",
            "value": 11.909052215322875,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 11.907955268304958 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:1350",
            "value": 2.2356550975790963,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.2355444651890433 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:16",
            "value": 0.24167921319348912,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2416796786059023 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:16384",
            "value": 24.239115457866188,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24.23907097109668 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:256",
            "value": 0.6136133746135443,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.6135730826159649 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:8192",
            "value": 12.238206818179526,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.237356643356675 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:1350",
            "value": 2.1747204941958063,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.1747240175084466 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:16",
            "value": 0.1472760377963387,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.14726324530133947 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:16384",
            "value": 24.405422869092334,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24.403221370053412 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:256",
            "value": 0.5146610686183583,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.514633735028279 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:8192",
            "value": 12.262814124438076,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.262423820775094 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:1350",
            "value": 2.175634236165827,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.1754920205743016 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:16",
            "value": 0.14732038153306998,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.14732015030090684 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:16384",
            "value": 24.411463656955057,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24.409471326478524 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:256",
            "value": 0.5143955091380117,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5143952083287104 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:8192",
            "value": 12.25909167323487,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.25906654408504 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:1350",
            "value": 2.1724805094082726,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.172258845610916 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:16",
            "value": 0.14605308251886748,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.14602865243074678 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:16384",
            "value": 24.411032083695087,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24.410644986921078 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:256",
            "value": 0.5149991555977533,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5149738675830169 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:8192",
            "value": 12.25946188890967,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.259014981601673 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:1350",
            "value": 1.2653966477422387,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.2652844628068054 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:16",
            "value": 0.23787313298322887,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.23787333286928028 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:16384",
            "value": 12.489550285306839,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.488817582025371 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:256",
            "value": 0.43953536741413807,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.4394656567692936 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:8192",
            "value": 6.372812445941454,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.372423043656497 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:1350",
            "value": 2.2033104806321484,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.203207864018685 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:16",
            "value": 0.15478371406254354,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.15477001797493917 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:16384",
            "value": 24.64010567961815,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24.639139968344388 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:256",
            "value": 0.520038646679629,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5199755790692702 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:8192",
            "value": 12.395516952882838,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.39549520035318 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:1350",
            "value": 0.29351415469008624,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.29345918213406047 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:16",
            "value": 0.08854433375649043,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.08854425022371411 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:16384",
            "value": 2.1166088115513,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.116410292484225 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:256",
            "value": 0.11284896031629146,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.11284360752144318 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:8192",
            "value": 1.082190213884007,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.0821395547155848 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:1350",
            "value": 0.5685700336752173,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5684644816987008 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:16",
            "value": 0.13137665895075,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.13136978040293973 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:16384",
            "value": 4.5818240398152295,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4.581594970696085 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:256",
            "value": 0.23455023152607948,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2345502901402535 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:8192",
            "value": 2.363753280352042,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.3634888907679947 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:1350",
            "value": 0.30899963671595154,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.30898199880760363 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:16",
            "value": 0.09305173115379711,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.09304767654630891 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:16384",
            "value": 2.1731507617278534,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.173145652477915 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:256",
            "value": 0.11729315071923081,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.11727492915836543 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:8192",
            "value": 1.1515180880788551,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.1515170989837824 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:1350",
            "value": 2.595344239844429,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.595341630423801 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:16",
            "value": 0.2501372476979019,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.25011303099495524 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:16384",
            "value": 28.69146443942927,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 28.69010637426048 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:256",
            "value": 0.684392389492667,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.684392344305357 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:8192",
            "value": 14.469009402762131,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 14.467217916927568 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:1350",
            "value": 1.3051827519042696,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.3050383436010142 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:16",
            "value": 0.24300969300010516,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.24298388202477378 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:16384",
            "value": 12.837527556171027,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.837517285648646 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:256",
            "value": 0.44560675528038524,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.44560660238832395 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:8192",
            "value": 6.533384794779233,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.533375000000647 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:1350",
            "value": 2.680374527402778,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.6802432117623463 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:16",
            "value": 0.18583618433197208,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.18583599708372894 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:16384",
            "value": 30.04471606529085,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 30.04244888315886 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:256",
            "value": 0.629369462880797,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.6293083868476592 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:8192",
            "value": 15.108897996553509,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 15.106228888411572 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:1350",
            "value": 0.32927222561405106,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.3292450688019337 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:16",
            "value": 0.09894747794249677,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.09894719431096198 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:16384",
            "value": 2.3768938714761054,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.376894059677052 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:256",
            "value": 0.12295004563663037,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.12294003358644282 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:8192",
            "value": 1.232824726795907,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.232823174255341 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:1350",
            "value": 0.6424514144238355,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.6423974599972665 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:16",
            "value": 0.14937564456900873,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.1493601333282155 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:16384",
            "value": 5.247016547842086,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 5.246573170731499 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:256",
            "value": 0.2560307988045964,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.25601101616484867 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:8192",
            "value": 2.6959662649218292,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.6959623435787483 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:1350",
            "value": 0.8097620785217131,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.8096535681292736 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:16",
            "value": 0.17846569650275235,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.17844294936956515 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:16384",
            "value": 6.973477548790161,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.973505824372841 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:256",
            "value": 0.2781917530842069,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.278173644536131 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:8192",
            "value": 3.5975753104194084,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.597567289647003 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:1350",
            "value": 46.162575797430684,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 46.16076224926107 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:16",
            "value": 1.5587455716234737,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.5586032953812068 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:16384",
            "value": 547.0931828793005,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 547.046610894951 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:256",
            "value": 9.589165156507883,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 9.58834136463419 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:8192",
            "value": 274.06247173488686,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 274.05100389863554 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:1350",
            "value": 0.9267331485999966,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.9267322602885574 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:16",
            "value": 0.29553465148155733,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.29548749340933167 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:16384",
            "value": 7.088347993904052,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7.0880189436258245 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:256",
            "value": 0.39385679994830475,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.39383961470378864 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:8192",
            "value": 3.7165750059682603,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.7165716370002877 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockDecrypt<128>/threads:1",
            "value": 0.015880304324848618,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.015879905097928085 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockDecrypt<256>/threads:1",
            "value": 0.020858669059026072,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.020858137688191062 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockDecryptSetup<128>/threads:1",
            "value": 0.020526513934866885,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.02052651041653708 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockDecryptSetup<256>/threads:1",
            "value": 0.025176703971061167,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.025176690674156576 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockEncrypt<128>/threads:1",
            "value": 0.015878282875130028,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.015877548760616183 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockEncrypt<256>/threads:1",
            "value": 0.0208587070146433,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.02085777983684948 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockEncryptSetup<128>/threads:1",
            "value": 0.01772619170504943,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.017724407740765342 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockEncryptSetup<256>/threads:1",
            "value": 0.020805779950243127,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.02080408848205214 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedBase64/threads:1",
            "value": 2.493528758739421,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.493522282908877 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedCurve25519ArbitraryPointMultiply/threads:1",
            "value": 35.6724002541125,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 35.672419567975005 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedCurve25519BasePointMultiply/threads:1",
            "value": 14.91488410278866,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 14.912971958627866 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDH/p224/threads:1",
            "value": 385.36048351641125,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 385.32351648350885 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDH/p256/threads:1",
            "value": 59.90901241437957,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 59.90264255137416 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDH/p384/threads:1",
            "value": 988.985609928964,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 988.9261631206243 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDH/p521/threads:1",
            "value": 2327.038349998626,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2326.85288333343 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSASign/p224/threads:1",
            "value": 213.54563774737392,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 213.53568340945105 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSASign/p256/threads:1",
            "value": 19.579348538847935,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 19.579148111189493 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSASign/p384/threads:1",
            "value": 550.848722222027,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 550.8290436507889 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSASign/p521/threads:1",
            "value": 1302.2555794389723,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1302.127981308431 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSAVerify/p224/threads:1",
            "value": 214.03390092873818,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 214.02376780187768 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSAVerify/p256/threads:1",
            "value": 55.24520826772162,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 55.24522480315326 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSAVerify/p384/threads:1",
            "value": 557.7124216869374,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 557.7122208835083 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSAVerify/p521/threads:1",
            "value": 1345.2914380953491,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1345.2899904761819 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedEd25519/threads:1",
            "value": 15.896110404360321,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 15.89540470240598 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedEd25519Sign/threads:1",
            "value": 16.062382922631055,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 16.060345558741542 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedEd25519Verify/threads:1",
            "value": 55.79653711090633,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 55.796417797295994 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHRSSDecap/threads:1",
            "value": 26.569565909087792,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 26.569544318183645 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHRSSEncap/threads:1",
            "value": 8.040724021126998,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 8.040705993799497 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHRSSGenerate/threads:1",
            "value": 137.2186457925857,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 137.2075244618383 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:1350/threads:1",
            "value": 2.2610555959119005,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.2610517054902104 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:16/threads:1",
            "value": 0.22554456271605072,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.22551652664501975 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:16384/threads:1",
            "value": 26.057701957113185,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 26.05580913326842 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:256/threads:1",
            "value": 0.43041852755853366,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.4304186845353356 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:8192/threads:1",
            "value": 13.052658181818398,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 13.051617715615652 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:1350/threads:1",
            "value": 0.8540996535485263,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.8540134920830647 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:16/threads:1",
            "value": 0.061971487211936495,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.061971440787158744 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:16384/threads:1",
            "value": 9.704655714973773,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 9.704158175642442 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:256/threads:1",
            "value": 0.21234936982535213,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.21234903173085687 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:8192/threads:1",
            "value": 4.883021828578193,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4.882785480158811 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:1350/threads:1",
            "value": 0.9124119349104737,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.9123780865302575 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:16/threads:1",
            "value": 0.06488338685159667,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.06487623774990475 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:16384/threads:1",
            "value": 10.350020196792045,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 10.349802396983195 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:256/threads:1",
            "value": 0.22848758360650148,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.22846448911440234 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:8192/threads:1",
            "value": 5.208609925116338,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 5.208604113110775 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:1350/threads:1",
            "value": 2.650096414266,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.6499230020979536 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:16/threads:1",
            "value": 0.27457315078609457,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.27457303297984414 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:16384/threads:1",
            "value": 30.61189351445688,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 30.60765687993019 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:256/threads:1",
            "value": 0.7539551327239585,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.7537535582257923 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:8192/threads:1",
            "value": 15.45250132421689,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 15.452451445597202 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHashToCurve/hash-to-curve P256_XMD:SHA-256_SSWU_RO_/threads:1",
            "value": 28.631443014710708,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 28.627665032679634 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHashToCurve/hash-to-curve P384_XMD:SHA-384_SSWU_RO_/threads:1",
            "value": 76.85964873765029,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 76.8558320526888 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHashToCurve/hash-to-scalar P384_XMD:SHA-512/threads:1",
            "value": 1.3436139947878247,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.3433642216002615 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAKeyGen/ml_dsa_44/threads:1",
            "value": 61.28258417137207,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 61.27510231744988 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAKeyGen/ml_dsa_65/threads:1",
            "value": 115.8083000000035,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 115.80827933883009 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAKeyGen/ml_dsa_87/threads:1",
            "value": 161.54183391003582,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 161.53163667822278 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAParsePubKey/ml_dsa_44/threads:1",
            "value": 4.469886746141597,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4.4695382825450025 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAParsePubKey/ml_dsa_65/threads:1",
            "value": 6.59893806311736,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.5989218359354895 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAParsePubKey/ml_dsa_87/threads:1",
            "value": 8.719011835793985,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 8.718594842086993 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSASign/ml_dsa_44/threads:1",
            "value": 210.40651973679374,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 210.39382236844403 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSASign/ml_dsa_65/threads:1",
            "value": 324.69073120729075,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 324.6410296127322 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSASign/ml_dsa_87/threads:1",
            "value": 384.12461194028185,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 384.0773880597226 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerify/ml_dsa_44/threads:1",
            "value": 51.22084468865855,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 51.218712820501246 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerify/ml_dsa_65/threads:1",
            "value": 82.82655555557159,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 82.82256619386274 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerify/ml_dsa_87/threads:1",
            "value": 138.80803465344616,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 138.79836336634034 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerifyBadSignature/ml_dsa_44/threads:1",
            "value": 51.23408757787571,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 51.23419567608262 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerifyBadSignature/ml_dsa_65/threads:1",
            "value": 82.81504824298268,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 82.81494937462799 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerifyBadSignature/ml_dsa_87/threads:1",
            "value": 138.92757313434498,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 138.92188358209498 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024DecapOnly/threads:1",
            "value": 37.30671705718624,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 37.310163921260845 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024EncapOnly/threads:1",
            "value": 25.602090278389515,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 25.585335526459275 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024KeyGenDecap/threads:1",
            "value": 78.62219181159078,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 78.61533202466721 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024KeyGenOnly/threads:1",
            "value": 41.843533751503294,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 41.843479689371115 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024ParseEncap/threads:1",
            "value": 45.391672715980974,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 45.38621322114392 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024ParseOnly/threads:1",
            "value": 20.582949425809886,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 20.566827539628207 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024PrivateKeyFromSeedOnly/threads:1",
            "value": 41.916102933540415,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 41.938529623051544 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768DecapOnly/threads:1",
            "value": 28.258476765050716,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 28.255186682838275 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768EncapOnly/threads:1",
            "value": 19.518717231241308,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 19.518371500224543 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768KeyGenDecap/threads:1",
            "value": 56.24138973534454,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 56.24135685646378 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768KeyGenOnly/threads:1",
            "value": 28.478096714962348,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 28.47515058151202 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768ParseEncap/threads:1",
            "value": 31.962052980276226,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 31.955615894017612 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768ParseOnly/threads:1",
            "value": 13.354105990028154,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 13.343158270698572 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768PrivateKeyFromSeedOnly/threads:1",
            "value": 28.55403853214172,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 28.56166850153052 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndSign/2048/threads:1",
            "value": 742.6911693121756,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 742.6529735449963 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndSign/3072/threads:1",
            "value": 2161.7864769233656,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2161.687061538067 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndSign/4096/threads:1",
            "value": 4788.418034483412,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4788.420034482842 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndVerify/2048/threads:1",
            "value": 19.359867161711882,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 19.35984075907725 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndVerify/3072/threads:1",
            "value": 40.63572637680436,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 40.63437971015189 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndVerify/4096/threads:1",
            "value": 70.57985671040335,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 70.57559838546727 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAKeyGen/2048",
            "value": 81503.74199999533,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 81491.99633334093 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAKeyGen/3072",
            "value": 237346.5279999891,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 237322.71599999422 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAKeyGen/4096",
            "value": 690897.5459999738,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 690822.0889999939 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAParsePrivateKey/2048/threads:1",
            "value": 93.49744976398712,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 93.49739986512452 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAParsePrivateKey/3072/threads:1",
            "value": 173.27626470584875,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 173.26765073527486 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAParsePrivateKey/4096/threads:1",
            "value": 275.9022631578181,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 275.88547953218045 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSASign/2048/threads:1",
            "value": 642.5533271888103,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 642.5529631336934 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSASign/3072/threads:1",
            "value": 1976.863464788711,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1976.8620281689743 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSASign/4096/threads:1",
            "value": 4494.325096774696,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4493.748548386081 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAVerify/2048/threads:1",
            "value": 16.935564161709593,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 16.929731334223888 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAVerify/3072/threads:1",
            "value": 36.31852389611146,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 36.315213246765566 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAVerify/4096/threads:1",
            "value": 63.17923139376276,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 63.17640685611233 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:1350/threads:1",
            "value": 0.8641827888057709,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.8641815928986598 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:16/threads:1",
            "value": 0.6349892973434392,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.6349884039436231 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:16384/threads:1",
            "value": 3.1507785752838693,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.150771757717448 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:256/threads:1",
            "value": 0.662060444558213,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.662062320570652 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:8192/threads:1",
            "value": 1.878455751910115,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.8784570503095663 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSLHDSA/threads:1",
            "value": 35089.29925000359,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 35089.29350000045 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSLHDSASign/threads:1",
            "value": 269760.18199997046,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 269747.0700000224 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSLHDSAVerify/threads:1",
            "value": 267.0089489437003,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 266.99627992959336 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSPAKE2/threads:1",
            "value": 124.64883022221332,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 124.63576888886665 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedScrypt/(N = 1024, r = 8, p = 16)/threads:1",
            "value": 27616.717800015067,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 27616.69899999788 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedScrypt/(N = 16384, r = 8, p = 1)/threads:1",
            "value": 27649.03099998719,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 27644.69740000095 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSelfTest",
            "value": 4478.638290320745,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4478.510774193425 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/1350/threads:1",
            "value": 0.5180397115657615,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5180397078639156 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/16/threads:1",
            "value": 0.02116180792810695,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.021161416781389726 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/16384/threads:1",
            "value": 6.071188199569163,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.07095305856729 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/256/threads:1",
            "value": 0.10979941701611293,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.10979928138379164 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/8192/threads:1",
            "value": 3.0454949418045656,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.045493592950984 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedTrustTokenKeyGen/SpeedTrustTokenKeyGen experiment_v1",
            "value": 990.1477535205665,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 990.0419084510439 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedTrustTokenKeyGen/SpeedTrustTokenKeyGen experiment_v2_pmb",
            "value": 990.6667588654002,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 990.6130851063268 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedTrustTokenKeyGen/SpeedTrustTokenKeyGen experiment_v2_voprf",
            "value": 514.9053076924674,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 514.8814578754791 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedX509/threads:1",
            "value": 3.952710096522308,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.952502278581468 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginIssueBatch1",
            "value": 627.3529820625824,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 627.3524708521285 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginIssueBatch10",
            "value": 6269.734681818695,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6269.3459090907445 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginRedeemBatch1",
            "value": 0.15154457991272974,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.15154417540851428 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginRedeemBatch10",
            "value": 0.15232252200872848,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.15232186348952334 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1FinishIssueBatch1",
            "value": 7094.442799999001,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7094.436999999231 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1FinishIssueBatch10",
            "value": 25231.476500001314,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 25231.410333333315 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1IssueBatch1",
            "value": 6066.8582173933755,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6066.397695653212 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1IssueBatch10",
            "value": 21785.793666670845,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 21783.895833335027 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1RedeemBatch1",
            "value": 1720.2622716046822,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1720.1651234565225 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1RedeemBatch10",
            "value": 1720.9837160492125,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1720.8068148148768 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginIssueBatch1",
            "value": 627.0387219734043,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 627.0276053812095 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginIssueBatch10",
            "value": 6275.801772726586,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6274.724363636479 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginRedeemBatch1",
            "value": 0.14433743979349445,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.14431813593292314 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginRedeemBatch10",
            "value": 0.14547620330397226,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.14546885841732524 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbFinishIssueBatch1",
            "value": 7075.496249996149,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7075.478650000378 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbFinishIssueBatch10",
            "value": 25217.853666674728,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 25217.768333334334 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbIssueBatch1",
            "value": 6066.067260867978,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6065.762217391355 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbIssueBatch10",
            "value": 21786.985999995068,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 21785.505499999876 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbRedeemBatch1",
            "value": 1720.1980617292738,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1720.0608518518166 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbRedeemBatch10",
            "value": 1720.3069146337216,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1720.3008902434126 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginIssueBatch1",
            "value": 631.9981846847445,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 631.9428018018401 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginIssueBatch10",
            "value": 6319.453363635768,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6319.137000000359 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginRedeemBatch1",
            "value": 0.13706305614997724,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.1370627012608273 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginRedeemBatch10",
            "value": 0.13713198819519237,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.13713157006791632 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfFinishIssueBatch1",
            "value": 2432.5373684213873,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2432.539122806999 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfFinishIssueBatch10",
            "value": 9020.67381250049,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 9020.501124998858 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfIssueBatch1",
            "value": 2342.579249999706,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2342.3821666665863 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfIssueBatch10",
            "value": 8898.931187498958,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 8898.511187499735 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfRedeemBatch1",
            "value": 558.5214820715905,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 558.4905418325061 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfRedeemBatch10",
            "value": 558.6080576131467,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 558.6076502058372 us\nthreads: 1"
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
        "date": 1783774535403,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:1350",
            "value": 1.9854453439572974,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.9852734787048318 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:16",
            "value": 0.4430221780044295,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.44297870847808835 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:16384",
            "value": 11.085540968045954,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 11.084320942739401 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:256",
            "value": 1.3233846959377287,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.3232323911775303 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:8192",
            "value": 6.11869749147729,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.118033913119745 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:1350",
            "value": 2.118870025279711,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.1184759079003666 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:16",
            "value": 0.5451860654269153,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.545178679005813 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:16384",
            "value": 11.723136975985826,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 11.723001589823388 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:256",
            "value": 1.4178916781952606,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.4178070060285115 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:8192",
            "value": 6.488144783797023,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.486560875005923 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:1350",
            "value": 1.9074874865459595,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.9073312625166021 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:16",
            "value": 0.12426363782303834,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.12426193933147239 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:16384",
            "value": 21.586266121570002,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 21.582233569888547 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:256",
            "value": 0.43795001095566904,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.43792700723070344 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:8192",
            "value": 10.850716158560191,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 10.850593980296374 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:1350",
            "value": 1.9092617756091426,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.908780965490861 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:16",
            "value": 0.12502522927591722,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.12500481747136344 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:16384",
            "value": 21.59375986436411,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 21.59015043156762 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:256",
            "value": 0.43925179123277713,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.4391856080789198 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:8192",
            "value": 10.853545672891139,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 10.852405671341407 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:1350",
            "value": 1.9106000928368156,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.910231436099833 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:16",
            "value": 0.12761097624582116,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.12760949894733603 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:16384",
            "value": 21.594194260153063,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 21.59029393611874 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:256",
            "value": 0.44082628637669896,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.44075094977982243 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:8192",
            "value": 10.85558581164836,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 10.854394129490755 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:1350",
            "value": 1.1022620582192135,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.1020813954403705 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:16",
            "value": 0.19985255733732968,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.19983261336789185 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:16384",
            "value": 10.946534785992315,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 10.946493540855478 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:256",
            "value": 0.366475249055005,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.3664409144372007 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:8192",
            "value": 5.56839291375836,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 5.5677596306276405 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:1350",
            "value": 1.6874999275067313,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.6871871541454364 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:16",
            "value": 0.14130498511831105,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.14130346567121466 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:16384",
            "value": 18.570882267056774,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 18.569323732414077 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:256",
            "value": 0.41894628214130086,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.41890694508841453 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:8192",
            "value": 9.350463772952873,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 9.34897656093434 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:1350",
            "value": 0.21667163823118452,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.21664409638330495 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:16",
            "value": 0.0877836367701813,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.08777019295874748 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:16384",
            "value": 1.3083518129829916,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.3083308053247211 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:256",
            "value": 0.09377279385369436,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.0937546682770438 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:8192",
            "value": 0.6918651314001364,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.6917086853464273 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:1350",
            "value": 0.44910987763222565,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.4491053999005665 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:16",
            "value": 0.16178625355212717,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.16176224072000156 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:16384",
            "value": 3.3405921193773818,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.340124716931615 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:256",
            "value": 0.22015542116280076,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2201515842451049 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:8192",
            "value": 1.7503028455793064,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.750061196192663 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:1350",
            "value": 0.2312331328507441,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2312166315599152 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:16",
            "value": 0.09114257670188314,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.09112214988079746 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:16384",
            "value": 1.4248568828774888,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.4248416829522226 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:256",
            "value": 0.09729961427235767,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.097277221759317 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:8192",
            "value": 0.7518351837620597,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.7517656790859336 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:1350",
            "value": 2.033756916278195,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.0335940221261692 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:16",
            "value": 0.44620262377670755,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.4461179586202 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:16384",
            "value": 11.649590542003248,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 11.648297061028119 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:256",
            "value": 1.3407775492242622,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.3407458238455592 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:8192",
            "value": 6.411970899109734,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.411768199496521 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:1350",
            "value": 1.136747018428556,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.1367323679879917 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:16",
            "value": 0.20463888807644712,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.20463552299834775 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:16384",
            "value": 11.179605397635893,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 11.178151149793692 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:256",
            "value": 0.372233908740235,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.3721988756782179 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:8192",
            "value": 5.7125216148916875,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 5.712030248601743 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:1350",
            "value": 2.112728781091046,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.112592394829407 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:16",
            "value": 0.16828780754326814,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.1682530854049717 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:16384",
            "value": 23.346859122010194,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 23.341616591555262 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:256",
            "value": 0.5162136539291492,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5162071445149422 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:8192",
            "value": 11.744963192757716,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 11.744266035046932 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:1350",
            "value": 0.24605709748869206,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.24601260128540106 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:16",
            "value": 0.09376854337454271,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.09376167374896321 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:16384",
            "value": 1.5427342715961943,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.5425306957556169 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:256",
            "value": 0.10191498313016069,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.10189652537224544 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:8192",
            "value": 0.8096530821028078,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.8094408114903239 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:1350",
            "value": 0.48508300297750906,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.48503369802758844 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:16",
            "value": 0.1738701225984487,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.17382865265834713 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:16384",
            "value": 3.590471197326981,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.589882194245021 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:256",
            "value": 0.24330358372096375,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.24329946564037108 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:8192",
            "value": 1.8814123550672843,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.8811303489132258 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:1350",
            "value": 0.6900058525589763,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.6899957520957261 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:16",
            "value": 0.17051529719060748,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.17051305208808004 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:16384",
            "value": 6.2096623411274265,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.208911963379084 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:256",
            "value": 0.25417039941684316,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.25416711445165663 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:8192",
            "value": 3.176802656675832,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.1767613760218536 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:1350",
            "value": 40.1721352120785,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 40.16893225163565 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:16",
            "value": 1.5740338745487574,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.5739180776386088 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:16384",
            "value": 465.575119601514,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 465.49488372095647 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:256",
            "value": 9.132005343409404,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 9.13043620487519 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:8192",
            "value": 233.71287792636633,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 233.68994648830832 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:1350",
            "value": 0.7707056934885481,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.7706023299540872 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:16",
            "value": 0.2534016780112764,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2533827597176102 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:16384",
            "value": 6.284350260887582,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.283798128824909 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:256",
            "value": 0.3349012575075439,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.33487103391358375 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:8192",
            "value": 3.26138591864857,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.2613583346947435 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:1350",
            "value": 1.833386376735901,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.8332419308356163 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:16",
            "value": 0.18461296414414394,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.18461024765355732 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:16384",
            "value": 20.100155976473037,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 20.097598077196107 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:256",
            "value": 0.49610104064488003,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.49604062729040727 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:8192",
            "value": 10.135664591778156,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 10.135508757961482 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:1350",
            "value": 1.8993901090711889,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.8990731251270188 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:16",
            "value": 0.19907028965048557,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.19904406442326733 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:16384",
            "value": 20.67298581978905,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 20.668452437222157 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:256",
            "value": 0.5215341552232915,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.521462698459882 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:8192",
            "value": 10.437670231860627,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 10.437610172026847 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:1350",
            "value": 1.8813690561639649,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.8812225713394808 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:16",
            "value": 0.12582769080035167,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.12582677304164405 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:16384",
            "value": 21.334780012189082,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 21.334296008528995 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:256",
            "value": 0.4292462856545752,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.4292386267358803 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:8192",
            "value": 10.714560671060328,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 10.71405982840503 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:1350",
            "value": 1.8814621049239417,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.8814365996560087 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:16",
            "value": 0.12672594400188536,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.12671426526160742 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:16384",
            "value": 21.334961391728246,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 21.33258583854674 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:256",
            "value": 0.42970825774663657,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.42965752169559596 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:8192",
            "value": 10.713905624332853,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 10.712757068623365 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:1350",
            "value": 1.8823832394878453,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.8823544138792754 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:16",
            "value": 0.12593518125359204,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.12590578569742358 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:16384",
            "value": 21.33851667427816,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 21.33626511344241 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:256",
            "value": 0.4299714553972375,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.4299114451491555 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:8192",
            "value": 10.715987505748151,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 10.71545354897973 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:1350",
            "value": 1.100507593163768,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.1004049005413625 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:16",
            "value": 0.19841207950527007,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.1983960984726607 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:16384",
            "value": 10.92610344827495,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 10.925104386581706 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:256",
            "value": 0.3674336500538755,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.367357201522972 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:8192",
            "value": 5.564129789521466,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 5.5640420164727535 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:1350",
            "value": 1.9286471607553726,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.9284948633672103 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:16",
            "value": 0.13255225165251022,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.13254116315562342 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:16384",
            "value": 21.626931045152514,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 21.625193568337167 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:256",
            "value": 0.4537528044404859,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.45359701874393693 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:8192",
            "value": 10.87532144241955,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 10.875154711128332 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:1350",
            "value": 0.21924030161132915,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.21921211226366907 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:16",
            "value": 0.08209945187010473,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.08208661367432322 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:16384",
            "value": 1.3428505616359416,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.342731813141555 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:256",
            "value": 0.08883309050921644,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.08880798608427624 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:8192",
            "value": 0.7028928879278105,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.7028847117415512 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:1350",
            "value": 0.49417281885707154,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.49408558372597244 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:16",
            "value": 0.12146500855749191,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.12146339132592815 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:16384",
            "value": 4.001935509670422,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4.001330591494608 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:256",
            "value": 0.20041368564481743,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.20039480587956499 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:8192",
            "value": 2.0687671186335934,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.0685966708026555 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:1350",
            "value": 0.23534189624678248,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.23530234225301194 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:16",
            "value": 0.0863401148988827,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.08632382345950329 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:16384",
            "value": 1.4310547769255124,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.4309343211195977 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:256",
            "value": 0.0941119059460078,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.09411013181018534 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:8192",
            "value": 0.7507810043060058,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.7507324921271397 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:1350",
            "value": 2.207806992919155,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.207533111486089 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:16",
            "value": 0.19757314301963577,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.1975461179332895 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:16384",
            "value": 24.572300438979287,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24.57178191395623 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:256",
            "value": 0.5743919958235444,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5743846501665986 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:8192",
            "value": 12.378224069324892,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.377783446812145 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:1350",
            "value": 1.1349375192488127,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.1347686696601291 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:16",
            "value": 0.20288680503134982,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.20286910598029292 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:16384",
            "value": 11.229129805372388,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 11.228967428019962 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:256",
            "value": 0.3719791080498525,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.3719747493550565 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:8192",
            "value": 5.6949224739758115,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 5.694285609307912 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:1350",
            "value": 2.3491277527127084,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.3485329990096306 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:16",
            "value": 0.15994047396899524,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.15990871408481555 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:16384",
            "value": 26.3022263335884,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 26.296522539444503 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:256",
            "value": 0.5495169646672599,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5494686717184977 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:8192",
            "value": 13.2283409284315,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 13.227112602817451 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:1350",
            "value": 0.24979547155695828,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2497701472055916 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:16",
            "value": 0.08989536558159618,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.08988602952259522 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:16384",
            "value": 1.5402629496128544,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.5400317470813398 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:256",
            "value": 0.09742591426845307,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.0974154103202297 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:8192",
            "value": 0.8054162703669586,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.8052638205998938 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:1350",
            "value": 0.5596757870584671,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5596524671026271 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:16",
            "value": 0.12833079808344494,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.12829569953820097 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:16384",
            "value": 4.596870099820035,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4.596816949825519 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:256",
            "value": 0.21711255505115323,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.21708257970405742 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:8192",
            "value": 2.363003085795445,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.3627004249287387 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:1350",
            "value": 0.717087722376633,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.7169761146578275 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:16",
            "value": 0.16626159226877488,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.16623750755095779 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:16384",
            "value": 6.241304213135616,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.240354576030801 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:256",
            "value": 0.25088677516577884,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2508623063806806 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:8192",
            "value": 3.1907280261522297,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.1905988074961034 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:1350",
            "value": 40.09683833190775,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 40.09290859754369 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:16",
            "value": 1.3302637192501183,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.3302470707417617 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:16384",
            "value": 477.2958225255564,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 477.2265051195222 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:256",
            "value": 8.325833224451664,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 8.325701668942447 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:8192",
            "value": 239.40322316860778,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 239.3885059625948 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:1350",
            "value": 0.8208277818986373,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.8207415727690661 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:16",
            "value": 0.2682796312463102,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.26823243191385865 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:16384",
            "value": 6.333840993062816,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.333186807247288 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:256",
            "value": 0.3508568128693288,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.35079316245311776 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:8192",
            "value": 3.32277407952166,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.322407714936462 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockDecrypt<128>/threads:1",
            "value": 0.013634030541205953,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.013632689109251663 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockDecrypt<256>/threads:1",
            "value": 0.017999650574148627,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.01799945312285013 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockDecryptSetup<128>/threads:1",
            "value": 0.019334565733144946,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.019334265434790318 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockDecryptSetup<256>/threads:1",
            "value": 0.022096397626722455,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.022095417580937374 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockEncrypt<128>/threads:1",
            "value": 0.013632595278247834,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.013631628299529427 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockEncrypt<256>/threads:1",
            "value": 0.017994225933471993,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.017992395207240757 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockEncryptSetup<128>/threads:1",
            "value": 0.015971393783539834,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.015969617536366627 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockEncryptSetup<256>/threads:1",
            "value": 0.01836667799706241,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.018364644344075646 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedBase64/threads:1",
            "value": 2.124204719870361,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.1240686747354527 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedCurve25519ArbitraryPointMultiply/threads:1",
            "value": 31.035490553459617,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 31.032648144030702 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedCurve25519BasePointMultiply/threads:1",
            "value": 12.881678037991348,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.881549695739983 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDH/p224/threads:1",
            "value": 320.73745412846887,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 320.711215596339 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDH/p256/threads:1",
            "value": 52.638042497181615,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 52.637276043620346 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDH/p384/threads:1",
            "value": 894.8277707011898,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 894.8138917197152 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDH/p521/threads:1",
            "value": 2014.0536521738713,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2013.867666666683 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSASign/p224/threads:1",
            "value": 175.76421383657373,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 175.75095723270877 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSASign/p256/threads:1",
            "value": 17.075429041697056,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 17.072845525483444 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSASign/p384/threads:1",
            "value": 492.469792253643,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 492.4645950703646 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSASign/p521/threads:1",
            "value": 1126.7327661289896,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1126.4826129031426 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSAVerify/p224/threads:1",
            "value": 176.46326217230953,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 176.4487490636432 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSAVerify/p256/threads:1",
            "value": 48.42585546334486,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 48.42169260028983 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSAVerify/p384/threads:1",
            "value": 500.05145454540735,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 500.044043636375 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSAVerify/p521/threads:1",
            "value": 1153.8032049178,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1153.783844262266 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedEd25519/threads:1",
            "value": 13.624996587362988,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 13.623327710609782 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedEd25519Sign/threads:1",
            "value": 13.749709158656806,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 13.749481663071514 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedEd25519Verify/threads:1",
            "value": 48.68465217391423,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 48.68392160219259 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHRSSDecap/threads:1",
            "value": 21.041930190673995,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 21.041551568830116 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHRSSEncap/threads:1",
            "value": 5.938441147839303,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 5.937925635925017 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHRSSGenerate/threads:1",
            "value": 105.06159879790624,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 105.02510894064773 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:1350/threads:1",
            "value": 2.0010604798752554,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.001023089183507 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:16/threads:1",
            "value": 0.19702969346083266,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.19700395780791782 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:16384/threads:1",
            "value": 23.10441442482143,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 23.10190377950143 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:256/threads:1",
            "value": 0.37853344043196835,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.37849851636859344 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:8192/threads:1",
            "value": 11.559515557758317,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 11.559367262496043 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:1350/threads:1",
            "value": 0.7469519336926331,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.7469100916844025 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:16/threads:1",
            "value": 0.05296318846185847,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.05295563936306547 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:16384/threads:1",
            "value": 8.500303447857007,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 8.500169904090376 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:256/threads:1",
            "value": 0.1856442106296457,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.1856210078106998 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:8192/threads:1",
            "value": 4.27704803813736,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4.276433382227276 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:1350/threads:1",
            "value": 0.7994967128373641,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.799489127516809 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:16/threads:1",
            "value": 0.05490690957652266,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.05489831477953657 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:16384/threads:1",
            "value": 9.068656319287609,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 9.06599445675906 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:256/threads:1",
            "value": 0.19849610259273964,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.19849388303782142 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:8192/threads:1",
            "value": 4.591770169223968,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4.591713826577415 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:1350/threads:1",
            "value": 2.320246245648754,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.3202211337649272 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:16/threads:1",
            "value": 0.23388903446768092,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.23386526210022548 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:16384/threads:1",
            "value": 26.911109245311014,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 26.90909631345837 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:256/threads:1",
            "value": 0.654807309358836,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.6546563356821519 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:8192/threads:1",
            "value": 13.570481546231626,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 13.569765928516146 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHashToCurve/hash-to-curve P256_XMD:SHA-256_SSWU_RO_/threads:1",
            "value": 22.74460964912369,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 22.74299382715984 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHashToCurve/hash-to-curve P384_XMD:SHA-384_SSWU_RO_/threads:1",
            "value": 65.64879803183977,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 65.63701265229798 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHashToCurve/hash-to-scalar P384_XMD:SHA-512/threads:1",
            "value": 1.1139248726993136,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.1136033169985688 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAKeyGen/ml_dsa_44/threads:1",
            "value": 52.52174531833606,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 52.51789176029876 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAKeyGen/ml_dsa_65/threads:1",
            "value": 98.46491695988865,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 98.45445460942813 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAKeyGen/ml_dsa_87/threads:1",
            "value": 138.3708165680805,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 138.3684664694244 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAParsePubKey/ml_dsa_44/threads:1",
            "value": 3.845936257710216,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.845133762851044 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAParsePubKey/ml_dsa_65/threads:1",
            "value": 5.723775215902856,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 5.7237155776428175 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAParsePubKey/ml_dsa_87/threads:1",
            "value": 7.627986422378734,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7.627852990893148 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSASign/ml_dsa_44/threads:1",
            "value": 179.33953132535268,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 179.33652048190558 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSASign/ml_dsa_65/threads:1",
            "value": 273.6978456790068,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 273.69551646091173 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSASign/ml_dsa_87/threads:1",
            "value": 334.46911467884115,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 334.46364678900204 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerify/ml_dsa_44/threads:1",
            "value": 43.29472710337186,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 43.290214219198084 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerify/ml_dsa_65/threads:1",
            "value": 69.54512249996013,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 69.53695149999815 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerify/ml_dsa_87/threads:1",
            "value": 117.44868147527593,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 117.44694970664301 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerifyBadSignature/ml_dsa_44/threads:1",
            "value": 43.31830516867647,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 43.314716186939194 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerifyBadSignature/ml_dsa_65/threads:1",
            "value": 69.64694369706291,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 69.63154608867325 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerifyBadSignature/ml_dsa_87/threads:1",
            "value": 117.68834676740533,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 117.65154827875318 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024DecapOnly/threads:1",
            "value": 30.961091029566465,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 30.973188482727792 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024EncapOnly/threads:1",
            "value": 21.050033378264132,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 21.037384002329617 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024KeyGenDecap/threads:1",
            "value": 65.70820451340113,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 65.6927809120947 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024KeyGenOnly/threads:1",
            "value": 35.448183637287755,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 35.445583080041686 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024ParseEncap/threads:1",
            "value": 35.77473599392308,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 35.78149168591867 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024ParseOnly/threads:1",
            "value": 15.569454850024872,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 15.563098996774995 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024PrivateKeyFromSeedOnly/threads:1",
            "value": 35.62743772322754,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 35.639007146094954 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768DecapOnly/threads:1",
            "value": 23.65475865724023,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 23.658324775991158 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768EncapOnly/threads:1",
            "value": 16.214971544944618,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 16.213062369238358 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768KeyGenDecap/threads:1",
            "value": 47.21213409703459,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 47.20744845013087 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768KeyGenOnly/threads:1",
            "value": 24.279779225295254,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24.27200260553007 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768ParseEncap/threads:1",
            "value": 26.072969776107378,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 26.06745485100439 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768ParseOnly/threads:1",
            "value": 10.701539431110858,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 10.700557522846491 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768PrivateKeyFromSeedOnly/threads:1",
            "value": 24.492974812550035,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24.506280042280867 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndSign/2048/threads:1",
            "value": 648.2585879628763,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 647.7381111111106 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndSign/3072/threads:1",
            "value": 1900.2563108107383,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1900.0453513513482 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndSign/4096/threads:1",
            "value": 4209.064727275069,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4208.671060604791 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndVerify/2048/threads:1",
            "value": 16.6664244990413,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 16.660867843508655 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndVerify/3072/threads:1",
            "value": 35.45908527329467,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 35.45838486842156 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndVerify/4096/threads:1",
            "value": 61.257328809087575,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 61.251927758325465 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAKeyGen/2048",
            "value": 56632.315499996366,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 56620.29400001245 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAKeyGen/3072",
            "value": 132711.20799998927,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 132699.40300000017 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAKeyGen/4096",
            "value": 908132.4369999493,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 908004.0950000238 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAParsePrivateKey/2048/threads:1",
            "value": 83.40777115613741,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 83.39316746126319 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAParsePrivateKey/3072/threads:1",
            "value": 152.70792438760054,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 152.70549307774115 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAParsePrivateKey/4096/threads:1",
            "value": 241.32403565062538,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 241.30553832437988 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSASign/2048/threads:1",
            "value": 561.5680319999683,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 561.5121240000461 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSASign/3072/threads:1",
            "value": 1731.9900246921397,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1731.8422839502718 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSASign/4096/threads:1",
            "value": 3949.2077714287784,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3948.860714285728 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAVerify/2048/threads:1",
            "value": 14.733561468083817,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 14.733312546009058 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAVerify/3072/threads:1",
            "value": 31.79153357530201,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 31.7887400181455 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAVerify/4096/threads:1",
            "value": 55.41444602609678,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 55.40904468168888 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:1350/threads:1",
            "value": 0.7312238871497834,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.7312120805090868 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:16/threads:1",
            "value": 0.5342990035627587,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5342894126164884 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:16384/threads:1",
            "value": 2.6502751420619406,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.6502274512795228 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:256/threads:1",
            "value": 0.5600070809752725,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5599130302739641 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:8192/threads:1",
            "value": 1.5827381529365336,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.5825241115427504 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSLHDSA/threads:1",
            "value": 29936.75019999956,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 29935.093000005963 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSLHDSASign/threads:1",
            "value": 229651.22799996607,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 229601.7369999959 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSLHDSAVerify/threads:1",
            "value": 226.0431990048625,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 226.01208457714935 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSPAKE2/threads:1",
            "value": 108.94057841616046,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 108.92305512423599 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedScrypt/(N = 1024, r = 8, p = 16)/threads:1",
            "value": 24121.113833331263,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24118.84233332747 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedScrypt/(N = 16384, r = 8, p = 1)/threads:1",
            "value": 24112.066833334702,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24109.84733333284 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSelfTest",
            "value": 3885.942499999196,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3885.295277777503 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/1350/threads:1",
            "value": 0.4616349525573919,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.46159743697947575 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/16/threads:1",
            "value": 0.018932337797601576,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.018932102918995792 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/16384/threads:1",
            "value": 5.462772230035009,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 5.462684013128534 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/256/threads:1",
            "value": 0.09862870482722004,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.09861424418072097 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/8192/threads:1",
            "value": 2.7390653867227375,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.7386420072015003 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedTrustTokenKeyGen/SpeedTrustTokenKeyGen experiment_v1",
            "value": 883.4664556961567,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 883.4499240505684 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedTrustTokenKeyGen/SpeedTrustTokenKeyGen experiment_v2_pmb",
            "value": 883.4043899370508,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 883.3408805029728 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedTrustTokenKeyGen/SpeedTrustTokenKeyGen experiment_v2_voprf",
            "value": 460.6817401316439,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 460.6731842105728 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedX509/threads:1",
            "value": 3.021809166024795,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.0214790649887364 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginIssueBatch1",
            "value": 559.3957599999156,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 559.3491199999788 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginIssueBatch10",
            "value": 5591.653399999359,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 5591.029199999866 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginRedeemBatch1",
            "value": 0.11827538152685084,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.11827339041593286 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginRedeemBatch10",
            "value": 0.1175459686325669,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.11754328256946299 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1FinishIssueBatch1",
            "value": 6394.670363637157,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6393.661772725844 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1FinishIssueBatch10",
            "value": 22688.673333334464,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 22685.790833333405 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1IssueBatch1",
            "value": 5442.3286153844565,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 5440.797038462419 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1IssueBatch10",
            "value": 19500.76485714395,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 19499.648714285813 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1RedeemBatch1",
            "value": 1538.5772527476975,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1538.4711318681316 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1RedeemBatch10",
            "value": 1538.7048901097692,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1538.5267142859207 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginIssueBatch1",
            "value": 559.2467359997498,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 559.2377600000872 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginIssueBatch10",
            "value": 5592.371160000766,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 5590.970719999859 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginRedeemBatch1",
            "value": 0.11173442322838377,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.111732648900635 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginRedeemBatch10",
            "value": 0.11241328868977726,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.11241065032992482 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbFinishIssueBatch1",
            "value": 6395.728636365759,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6395.632409090075 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbFinishIssueBatch10",
            "value": 22711.6130000032,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 22709.232000001597 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbIssueBatch1",
            "value": 5444.260192307892,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 5443.654730769345 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbIssueBatch10",
            "value": 19509.4045714289,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 19503.890714285586 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbRedeemBatch1",
            "value": 1539.010527472748,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1538.6573406592283 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbRedeemBatch10",
            "value": 1538.6940109890047,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1538.4909010993067 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginIssueBatch1",
            "value": 557.9760478086932,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 557.8816454183279 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginIssueBatch10",
            "value": 5577.926200001002,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 5577.270840001347 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginRedeemBatch1",
            "value": 0.10665134349532093,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.10664945667271925 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginRedeemBatch10",
            "value": 0.10726186006975826,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.10724944581369886 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfFinishIssueBatch1",
            "value": 2200.699109375037,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2200.107593749667 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfFinishIssueBatch10",
            "value": 8124.5655294123135,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 8124.393705881015 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfIssueBatch1",
            "value": 2115.6604242421367,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2115.415712121186 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfIssueBatch10",
            "value": 8030.460941176229,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 8029.622941175858 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfRedeemBatch1",
            "value": 499.5037402133734,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 499.45011743783925 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfRedeemBatch10",
            "value": 499.23555714294866,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 499.175110714337 us\nthreads: 1"
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
        "date": 1783779971407,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:1350",
            "value": 2.364502425584231,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.3645315495005126 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:16",
            "value": 0.5497973471642708,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5498061533881207 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:16384",
            "value": 12.73939838137689,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.737492952625532 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:256",
            "value": 1.5973220560577812,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.5972223267122956 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:8192",
            "value": 7.08874817555243,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7.088887695114044 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:1350",
            "value": 2.5035573272303706,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.503363948374336 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:16",
            "value": 0.6757113462188373,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.6757224610786751 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:16384",
            "value": 13.500704169485784,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 13.500384637706764 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:256",
            "value": 1.7118257857567896,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.7118447878424834 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:8192",
            "value": 7.515852908124767,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7.515482529829806 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:1350",
            "value": 2.195687445072056,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.1951834588821466 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:16",
            "value": 0.14974942975833164,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.14974314238220338 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:16384",
            "value": 24.619203023378443,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24.619597996133088 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:256",
            "value": 0.5197980957818141,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5197223423069303 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:8192",
            "value": 12.376920850613695,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.377167210801082 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:1350",
            "value": 2.1952574159673865,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.1951889054296787 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:16",
            "value": 0.14953516033754857,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.149528710142294 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:16384",
            "value": 24.636809012498084,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24.634462946660605 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:256",
            "value": 0.5204155652094864,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5204241907755063 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:8192",
            "value": 12.37293512224974,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.373210256860531 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:1350",
            "value": 2.1974506252155397,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.1973529568457715 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:16",
            "value": 0.15190884656267623,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.15187424886652978 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:16384",
            "value": 24.632147032925403,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24.632184891703357 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:256",
            "value": 0.5224051795068236,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5224154662933655 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:8192",
            "value": 12.375791633494316,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.374951446006992 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:1350",
            "value": 1.2675885299949803,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.267498055303503 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:16",
            "value": 0.23974527094931825,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.23973102463050866 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:16384",
            "value": 12.48418787878873,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.484386809271275 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:256",
            "value": 0.432618191029616,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.43252093701444455 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:8192",
            "value": 6.365421657732513,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.36551935835446 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:1350",
            "value": 1.957272827697208,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.9571622899017496 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:16",
            "value": 0.16480505923354571,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.16480866071786904 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:16384",
            "value": 21.54761782360748,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 21.543621979379548 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:256",
            "value": 0.48531501018988027,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.48522725665800515 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:8192",
            "value": 10.84845274094564,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 10.848652399785152 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:1350",
            "value": 0.29492759876956126,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.29484829968396226 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:16",
            "value": 0.09744779770763673,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.09744346730087616 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:16384",
            "value": 2.073494229984986,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.0733572705324157 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:256",
            "value": 0.12357703219344944,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.12357367026608751 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:8192",
            "value": 1.0726724102104614,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.0725631007442002 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:1350",
            "value": 0.5151299217527332,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5150985749094044 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:16",
            "value": 0.18033322488061077,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.18032123052526952 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:16384",
            "value": 3.8778212763606756,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.8778756849497222 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:256",
            "value": 0.25145155021346105,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.251455343499109 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:8192",
            "value": 2.0231697819086216,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.0232030079529184 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:1350",
            "value": 0.31127876399728593,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.3112570516362294 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:16",
            "value": 0.10035949287880269,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.1003620784305571 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:16384",
            "value": 2.1773986584278253,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.1771551834154095 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:256",
            "value": 0.12437416919526184,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.12436273276229264 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:8192",
            "value": 1.127574819235783,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.1275944278670638 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:1350",
            "value": 2.4231002129613195,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.423146683518848 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:16",
            "value": 0.5535558757492659,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5535303590911649 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:16384",
            "value": 13.445977807663903,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 13.44440791622463 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:256",
            "value": 1.6080819280154606,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.608107229483439 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:8192",
            "value": 7.439456912122422,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7.438928859843464 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:1350",
            "value": 1.3093129618386605,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.3091688542203272 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:16",
            "value": 0.24471143962803416,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.24471575359832862 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:16384",
            "value": 12.830431803611106,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.830628744162562 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:256",
            "value": 0.44122815905143953,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.4412033579917554 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:8192",
            "value": 6.537573087147688,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.537679349093109 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:1350",
            "value": 2.444456954916829,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.4442339532198756 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:16",
            "value": 0.19469255354625917,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.19469689523514075 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:16384",
            "value": 27.02530842025939,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 27.02478891464186 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:256",
            "value": 0.5945069899815779,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5945191970004172 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:8192",
            "value": 13.605109657446347,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 13.603289523624063 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:1350",
            "value": 0.3256289654948414,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.32563682090682955 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:16",
            "value": 0.1027941764523898,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.10279632266194044 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:16384",
            "value": 2.3073502775533274,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.3072457461001297 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:256",
            "value": 0.12876075187308117,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.12873482939792144 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:8192",
            "value": 1.194876249648319,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.19489396844876 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:1350",
            "value": 0.576374747478925,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.576272913564202 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:16",
            "value": 0.1993285731572594,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.19932469658681506 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:16384",
            "value": 4.409500267639936,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4.408832992223114 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:256",
            "value": 0.2809543221766685,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.280960081065831 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:8192",
            "value": 2.297721118895369,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.2977680424294906 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:1350",
            "value": 0.7604397142331409,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.7602801265976047 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:16",
            "value": 0.1817664676943014,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.1817692171148085 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:16384",
            "value": 6.940221358167049,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.939812818862045 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:256",
            "value": 0.27926865339861173,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.27927463121761686 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:8192",
            "value": 3.5568634727796447,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.5567496618088614 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:1350",
            "value": 46.1408469387727,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 46.130656682026014 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:16",
            "value": 1.8596503961460205,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.859681902031303 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:16384",
            "value": 534.7034847331373,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 534.7102519085239 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:256",
            "value": 10.592889098882134,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 10.592425839128289 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:8192",
            "value": 268.5903071017626,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 268.5951516314503 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:1350",
            "value": 0.8589728804816539,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.8589224937178034 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:16",
            "value": 0.27989263360900435,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2798799825035826 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:16384",
            "value": 7.038312569242392,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7.037914643972616 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:256",
            "value": 0.377411853518454,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.37739783997061144 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:8192",
            "value": 3.659727248898204,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.659443017404198 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:1350",
            "value": 2.161385254749165,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.1613364483099997 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:16",
            "value": 0.24238493455480808,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.24237293987271816 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:16384",
            "value": 23.586958973493644,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 23.58253266925618 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:256",
            "value": 0.5939362248580186,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.59389299207846 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:8192",
            "value": 11.902609858190177,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 11.902580813257194 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:1350",
            "value": 2.2370878229138946,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.236887624444073 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:16",
            "value": 0.24089160650164207,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.24089635084748087 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:16384",
            "value": 24.23791280277051,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24.236302768161842 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:256",
            "value": 0.6133156304982712,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.6132833085663406 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:8192",
            "value": 12.235095242258346,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.235275494140254 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:1350",
            "value": 2.1753464788296606,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.175272281072289 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:16",
            "value": 0.1472736538036428,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.14727607943005372 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:16384",
            "value": 24.411003311257822,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24.409700069707668 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:256",
            "value": 0.5143149082239027,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5143175535222531 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:8192",
            "value": 12.266572967762324,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.265123948844233 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:1350",
            "value": 2.174270606145331,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.1742412153975104 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:16",
            "value": 0.14746281599727357,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.14745157936622907 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:16384",
            "value": 24.404816248252114,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24.40380108089143 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:256",
            "value": 0.515110147679859,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5151181036252456 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:8192",
            "value": 12.262482522998782,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.261769601401735 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:1350",
            "value": 2.1736531356159707,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.173111945276507 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:16",
            "value": 0.14611023011504562,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.14610013323951315 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:16384",
            "value": 24.4034510282347,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24.40244492854379 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:256",
            "value": 0.5148939609731218,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5148577532413046 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:8192",
            "value": 12.264187253784963,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.263814847238303 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:1350",
            "value": 1.264744416940359,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.2646104235173776 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:16",
            "value": 0.2385783510767011,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.23851594870502074 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:16384",
            "value": 12.491514751764944,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.490343256975166 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:256",
            "value": 0.43972195135727793,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.4396710846249268 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:8192",
            "value": 6.373168754841327,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.373091302565015 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:1350",
            "value": 2.205628099694086,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.205436840281301 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:16",
            "value": 0.1547045334646545,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.15467429381214468 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:16384",
            "value": 24.646929778244914,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24.647310102074137 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:256",
            "value": 0.5200657273502121,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5199743504838351 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:8192",
            "value": 12.398443931867936,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.39811612845841 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:1350",
            "value": 0.2936254476559486,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2936146514006728 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:16",
            "value": 0.08860553937186948,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.08860713757167847 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:16384",
            "value": 2.0728413326650643,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.0725982810048715 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:256",
            "value": 0.11221904591975727,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.11222112463404327 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:8192",
            "value": 1.1271586661661646,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.1271163551884777 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:1350",
            "value": 0.5689972858325851,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5690078621462457 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:16",
            "value": 0.1314142153090802,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.1313936610651489 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:16384",
            "value": 4.58184530856477,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4.5812945351088485 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:256",
            "value": 0.23430590343486746,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2342951432734551 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:8192",
            "value": 2.3637413699831846,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.363537207965745 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:1350",
            "value": 0.30866371193884895,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.3086285182961442 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:16",
            "value": 0.09296244380797675,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.09295723987479897 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:16384",
            "value": 2.1786549761674734,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.178695069266448 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:256",
            "value": 0.11713929831533648,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.11714128502198529 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:8192",
            "value": 1.1448863277347066,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.1448483751890723 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:1350",
            "value": 2.5882900472881274,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.5880423008719338 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:16",
            "value": 0.24993998183433408,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.24992658240500173 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:16384",
            "value": 28.698409668177774,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 28.69716018026148 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:256",
            "value": 0.6823573545658905,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.6823346506319736 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:8192",
            "value": 14.465357430971444,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 14.463405005686829 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:1350",
            "value": 1.3049517902616226,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.3048839198275983 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:16",
            "value": 0.242863388661605,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2428367998193392 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:16384",
            "value": 12.84214057917558,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.84050274926739 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:256",
            "value": 0.44576891741270175,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.4457218651462782 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:8192",
            "value": 6.535257721378707,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.535005271998385 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:1350",
            "value": 2.6804671531447415,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.6803109629970923 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:16",
            "value": 0.18592112887221232,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.1859186540018869 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:16384",
            "value": 30.034137006864132,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 30.03461234991474 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:256",
            "value": 0.6291512206760086,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.6291202986874154 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:8192",
            "value": 15.096532677972002,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 15.093544128771637 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:1350",
            "value": 0.32918001802706315,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.32918642817843513 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:16",
            "value": 0.09909628000002613,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.09907299000002467 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:16384",
            "value": 2.338708044903082,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.338742839985886 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:256",
            "value": 0.12361987495907331,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.12361645474179876 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:8192",
            "value": 1.2133263950742281,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.2133495706461888 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:1350",
            "value": 0.6423394452084209,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.6422662402566643 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:16",
            "value": 0.14920579508563706,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.14920678659977285 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:16384",
            "value": 5.231997576254052,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 5.232067491982648 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:256",
            "value": 0.25605408340015984,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2560217710542091 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:8192",
            "value": 2.6985491541713906,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.698058246828079 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:1350",
            "value": 0.8096534009353048,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.8096205549381926 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:16",
            "value": 0.17848150806936736,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.17847582118707636 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:16384",
            "value": 6.962952206065172,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.962465382897514 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:256",
            "value": 0.27792264742792044,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2779040372998334 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:8192",
            "value": 3.59048638871211,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.590540372033385 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:1350",
            "value": 46.13125743554758,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 46.132083278245624 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:16",
            "value": 1.556355962527867,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.5562886305800727 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:16384",
            "value": 546.887031249943,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 546.8953867189263 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:256",
            "value": 9.566743812388514,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 9.566530220156292 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:8192",
            "value": 274.0006164383043,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 274.00461839531147 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:1350",
            "value": 0.926643562652204,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.9266565181127735 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:16",
            "value": 0.2960865742886092,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.29607749728644767 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:16384",
            "value": 7.064510750791838,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7.064059267838292 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:256",
            "value": 0.39459355195978274,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.3945835840841221 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:8192",
            "value": 3.7033740387646383,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.703050510902835 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockDecrypt<128>/threads:1",
            "value": 0.015882478881872126,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.015880290410682382 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockDecrypt<256>/threads:1",
            "value": 0.02085299748081538,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.02085338621416526 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockDecryptSetup<128>/threads:1",
            "value": 0.020512116294813715,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.0205124843386763 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockDecryptSetup<256>/threads:1",
            "value": 0.025176561707330024,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.02517517215968057 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockEncrypt<128>/threads:1",
            "value": 0.015881976023037633,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.015881006722095557 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockEncrypt<256>/threads:1",
            "value": 0.020852948091843387,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.020853325451178913 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockEncryptSetup<128>/threads:1",
            "value": 0.017673218917064512,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.017673527655893518 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockEncryptSetup<256>/threads:1",
            "value": 0.020794705178665697,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.020793309592327978 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedBase64/threads:1",
            "value": 2.491276393618964,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.491239379817138 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedCurve25519ArbitraryPointMultiply/threads:1",
            "value": 35.679098803158894,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 35.67799083270492 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedCurve25519BasePointMultiply/threads:1",
            "value": 14.906893123269239,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 14.90710666382807 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDH/p224/threads:1",
            "value": 372.9293753350314,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 372.93554155488545 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDH/p256/threads:1",
            "value": 59.86435419326679,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 59.86557130693458 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDH/p384/threads:1",
            "value": 983.6501408450814,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 983.6726338027877 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDH/p521/threads:1",
            "value": 2333.0573833334256,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2332.823216666687 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSASign/p224/threads:1",
            "value": 206.7687025038208,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 206.71461119290558 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSASign/p256/threads:1",
            "value": 19.580855620972176,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 19.58011073731457 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSASign/p384/threads:1",
            "value": 547.3396484374504,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 547.3479531250547 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSASign/p521/threads:1",
            "value": 1305.0658878506576,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1305.0670186916404 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSAVerify/p224/threads:1",
            "value": 205.73421037035453,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 205.7373229629573 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSAVerify/p256/threads:1",
            "value": 55.429900473928996,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 55.42304423380779 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSAVerify/p384/threads:1",
            "value": 559.003772908333,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 558.9188446215142 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSAVerify/p521/threads:1",
            "value": 1348.9983557689172,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1348.9622692305784 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedEd25519/threads:1",
            "value": 15.89223356421559,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 15.890985466108582 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedEd25519Sign/threads:1",
            "value": 16.061260635257344,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 16.056329549363927 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedEd25519Verify/threads:1",
            "value": 56.16120055599688,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 56.14405718824422 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHRSSDecap/threads:1",
            "value": 26.559250142886995,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 26.5597010859252 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHRSSEncap/threads:1",
            "value": 8.043890811558997,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 8.042883024744892 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHRSSGenerate/threads:1",
            "value": 137.31314397649933,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 137.31567286973478 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:1350/threads:1",
            "value": 2.2617135551935004,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.2616243164327585 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:16/threads:1",
            "value": 0.22559220374069403,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.22559582949416443 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:16384/threads:1",
            "value": 26.094106537523526,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 26.091480350159266 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:256/threads:1",
            "value": 0.43021006652637683,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.43017874844436643 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:8192/threads:1",
            "value": 13.050422410584368,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 13.049770026078619 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:1350/threads:1",
            "value": 0.853618555004237,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.8534829068167026 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:16/threads:1",
            "value": 0.061915294903321864,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.06191328170608552 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:16384/threads:1",
            "value": 9.69991957048797,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 9.69939030134801 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:256/threads:1",
            "value": 0.21236917669622266,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.21237271274891223 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:8192/threads:1",
            "value": 4.881367169798699,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4.881265904417086 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:1350/threads:1",
            "value": 0.912246607839237,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.9122372231853463 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:16/threads:1",
            "value": 0.0648304387340053,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.06482194419713147 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:16384/threads:1",
            "value": 10.34760495195841,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 10.346907464893476 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:256/threads:1",
            "value": 0.22875650760726307,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.22871375702197616 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:8192/threads:1",
            "value": 5.208249394673816,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 5.2078590426520215 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:1350/threads:1",
            "value": 2.6516715794642005,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.651726281579024 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:16/threads:1",
            "value": 0.2744786032415734,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.27447375540061036 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:16384/threads:1",
            "value": 30.614317691144645,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 30.614859660720565 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:256/threads:1",
            "value": 0.7529824934686533,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.7529549624283409 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:8192/threads:1",
            "value": 15.458793339214083,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 15.459108072341744 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHashToCurve/hash-to-curve P256_XMD:SHA-256_SSWU_RO_/threads:1",
            "value": 28.493564076488546,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 28.492391781936362 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHashToCurve/hash-to-curve P384_XMD:SHA-384_SSWU_RO_/threads:1",
            "value": 76.78820769229502,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 76.78299890110812 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHashToCurve/hash-to-scalar P384_XMD:SHA-512/threads:1",
            "value": 1.3418932654802296,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.3419185474828366 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAKeyGen/ml_dsa_44/threads:1",
            "value": 61.2529041575396,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 61.25449759299719 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAKeyGen/ml_dsa_65/threads:1",
            "value": 115.60801568954096,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 115.59910156894888 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAKeyGen/ml_dsa_87/threads:1",
            "value": 161.6595661252933,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 161.6515812065027 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAParsePubKey/ml_dsa_44/threads:1",
            "value": 4.468622978479178,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4.4684948109008396 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAParsePubKey/ml_dsa_65/threads:1",
            "value": 6.5881620753210015,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.588697112885676 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAParsePubKey/ml_dsa_87/threads:1",
            "value": 8.7230543349707,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 8.721748117257423 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSASign/ml_dsa_44/threads:1",
            "value": 208.93855391430347,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 208.88572673554793 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSASign/ml_dsa_65/threads:1",
            "value": 330.0897761557442,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 330.03055474452725 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSASign/ml_dsa_87/threads:1",
            "value": 380.984983471272,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 380.99102479327365 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerify/ml_dsa_44/threads:1",
            "value": 51.20576033663452,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 51.20087559458642 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerify/ml_dsa_65/threads:1",
            "value": 82.81526611471043,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 82.81665345949499 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerify/ml_dsa_87/threads:1",
            "value": 139.11384431145495,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 139.1170259480618 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerifyBadSignature/ml_dsa_44/threads:1",
            "value": 51.296640161241704,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 51.28450934409258 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerifyBadSignature/ml_dsa_65/threads:1",
            "value": 82.80834162226432,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 82.80643516874366 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerifyBadSignature/ml_dsa_87/threads:1",
            "value": 138.86014965313055,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 138.85462239841274 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024DecapOnly/threads:1",
            "value": 37.32439182693702,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 37.31840811939047 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024EncapOnly/threads:1",
            "value": 25.63304836101568,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 25.623405018994 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024KeyGenDecap/threads:1",
            "value": 78.67549915685376,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 78.67322315907965 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024KeyGenOnly/threads:1",
            "value": 41.83573879257951,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 41.83636580992518 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024ParseEncap/threads:1",
            "value": 45.46652039930085,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 45.47806897725201 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024ParseOnly/threads:1",
            "value": 20.5725530604975,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 20.55907104063722 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024PrivateKeyFromSeedOnly/threads:1",
            "value": 41.927825059693696,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 41.9394922244506 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768DecapOnly/threads:1",
            "value": 28.268488592724797,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 28.254589541701108 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768EncapOnly/threads:1",
            "value": 19.513657417490002,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 19.510545594096627 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768KeyGenDecap/threads:1",
            "value": 56.2158567990351,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 56.20722543120641 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768KeyGenOnly/threads:1",
            "value": 28.47755722707652,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 28.476532425291584 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768ParseEncap/threads:1",
            "value": 31.952041496119364,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 31.94980825413181 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768ParseOnly/threads:1",
            "value": 13.30569244664931,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 13.289725783533125 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768PrivateKeyFromSeedOnly/threads:1",
            "value": 28.529476957256357,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 28.538677202447747 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndSign/2048/threads:1",
            "value": 743.3055026738773,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 743.2305935830017 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndSign/3072/threads:1",
            "value": 2163.1208153849,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2162.8190461543595 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndSign/4096/threads:1",
            "value": 4787.322241378238,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4787.414586205379 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndVerify/2048/threads:1",
            "value": 19.312547369870742,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 19.31159735610059 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndVerify/3072/threads:1",
            "value": 40.57843465662201,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 40.57715415821378 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndVerify/4096/threads:1",
            "value": 70.56395110888002,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 70.56498034275378 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAKeyGen/2048",
            "value": 59009.82850002378,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 58993.62899999971 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAKeyGen/3072",
            "value": 291265.7789999571,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 291263.02599999576 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAKeyGen/4096",
            "value": 635112.0080000783,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 635081.343999957 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAParsePrivateKey/2048/threads:1",
            "value": 92.12513754890611,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 92.10218513690901 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAParsePrivateKey/3072/threads:1",
            "value": 172.0675055214835,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 172.07109693248796 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAParsePrivateKey/4096/threads:1",
            "value": 274.3965156249972,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 274.3604941406463 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSASign/2048/threads:1",
            "value": 642.8784331798395,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 642.8214377881336 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSASign/3072/threads:1",
            "value": 1978.081239436781,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1977.812450704364 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSASign/4096/threads:1",
            "value": 4492.0858387095295,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4490.82274193672 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAVerify/2048/threads:1",
            "value": 16.91713623117822,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 16.917411607576607 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAVerify/3072/threads:1",
            "value": 36.333155082974784,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 36.33071836099891 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAVerify/4096/threads:1",
            "value": 63.14586919260509,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 63.13479206134353 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:1350/threads:1",
            "value": 0.8654325186237588,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.865307372250046 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:16/threads:1",
            "value": 0.6360610560455522,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.6360330286814979 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:16384/threads:1",
            "value": 3.1453121923554974,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.144884972212863 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:256/threads:1",
            "value": 0.663078558922996,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.6629620419530241 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:8192/threads:1",
            "value": 1.8774242822645302,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.8773850013415267 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSLHDSA/threads:1",
            "value": 35066.59424999725,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 35065.90824999733 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSLHDSASign/threads:1",
            "value": 269817.8960000633,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 269807.2740000157 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSLHDSAVerify/threads:1",
            "value": 265.00951247608066,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 265.01092898271116 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSPAKE2/threads:1",
            "value": 124.70456110613999,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 124.70689473684249 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedScrypt/(N = 1024, r = 8, p = 16)/threads:1",
            "value": 27792.483399991852,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 27782.722400002054 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedScrypt/(N = 16384, r = 8, p = 1)/threads:1",
            "value": 27855.538600010732,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 27856.27939999813 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSelfTest",
            "value": 4475.9381612897005,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4476.030225807717 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/1350/threads:1",
            "value": 0.5180870570649452,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5181010578271448 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/16/threads:1",
            "value": 0.021155134248098083,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.021154991707268405 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/16384/threads:1",
            "value": 6.073891405267064,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.0736206343008075 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/256/threads:1",
            "value": 0.10988461511323087,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.10987929164736082 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/8192/threads:1",
            "value": 3.0446458428630856,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.0441407784963883 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedTrustTokenKeyGen/SpeedTrustTokenKeyGen experiment_v1",
            "value": 994.4810354606992,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 994.5001347518751 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedTrustTokenKeyGen/SpeedTrustTokenKeyGen experiment_v2_pmb",
            "value": 994.7216595741279,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 994.6672553190695 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedTrustTokenKeyGen/SpeedTrustTokenKeyGen experiment_v2_voprf",
            "value": 509.28377454552407,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 509.2661090909122 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedX509/threads:1",
            "value": 3.924128338051097,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.9239890156079746 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginIssueBatch1",
            "value": 624.3817321427108,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 624.39055803587 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginIssueBatch10",
            "value": 6241.830636363167,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6241.462636363725 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginRedeemBatch1",
            "value": 0.1520205591938767,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.15202290732792167 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginRedeemBatch10",
            "value": 0.1509186443589997,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.1509085801421763 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1FinishIssueBatch1",
            "value": 7027.967699997362,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7026.4779500007535 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1FinishIssueBatch10",
            "value": 25100.625833336686,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 25098.984166665636 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1IssueBatch1",
            "value": 6033.642913043087,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6033.7506086956755 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1IssueBatch10",
            "value": 21666.830000000915,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 21661.643000006356 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1RedeemBatch1",
            "value": 1713.3727682921576,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1713.2297073168857 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1RedeemBatch10",
            "value": 1713.7314268297368,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1713.612609756137 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginIssueBatch1",
            "value": 624.5688973213046,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 624.5636473215046 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginIssueBatch10",
            "value": 6242.06199999962,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6241.883409090447 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginRedeemBatch1",
            "value": 0.1446498072889972,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.1446443950895374 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginRedeemBatch10",
            "value": 0.14392358814231154,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.14392559135322808 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbFinishIssueBatch1",
            "value": 7037.639550000564,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7036.659499999587 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbFinishIssueBatch10",
            "value": 25067.609999998313,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 25066.871000002302 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbIssueBatch1",
            "value": 6030.209217390561,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6029.987913042652 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbIssueBatch10",
            "value": 21674.065666663486,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 21674.341833337017 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbRedeemBatch1",
            "value": 1715.1025609757098,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1715.125682926763 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbRedeemBatch10",
            "value": 1714.0437682931727,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1713.9746341466134 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginIssueBatch1",
            "value": 626.826857142707,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 626.7702276785415 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginIssueBatch10",
            "value": 6261.147136363186,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6260.902999998889 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginRedeemBatch1",
            "value": 0.13690240668356907,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.1368691391439989 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginRedeemBatch10",
            "value": 0.13662413133429147,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.13655552568630613 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfFinishIssueBatch1",
            "value": 2418.836431034336,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2418.434534482742 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfFinishIssueBatch10",
            "value": 8962.79887500029,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 8962.42137500014 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfIssueBatch1",
            "value": 2331.5696833340858,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2331.341600000769 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfIssueBatch10",
            "value": 8850.171562500009,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 8848.505250000471 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfRedeemBatch1",
            "value": 553.002201581067,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 552.9603241107429 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfRedeemBatch10",
            "value": 552.7922529644935,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 552.7630750987415 us\nthreads: 1"
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
        "date": 1783785156770,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:1350",
            "value": 2.3670046146041175,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.3670336713994313 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:16",
            "value": 0.5499934923651943,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5499636876334874 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:16384",
            "value": 12.764670830669836,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.76422841250982 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:256",
            "value": 1.5949227415042844,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.5946795468777342 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:8192",
            "value": 7.10729882317416,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7.106704829057092 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:1350",
            "value": 2.502050676581406,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.5020912714731356 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:16",
            "value": 0.6771618410058917,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.6771376965080175 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:16384",
            "value": 13.514429425958163,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 13.513752050169986 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:256",
            "value": 1.7100113992943435,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.7100452294567408 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:8192",
            "value": 7.519681786347375,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7.519346495718354 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:1350",
            "value": 2.1954917209451934,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.195376802950636 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:16",
            "value": 0.14994011912556526,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.1499113916864613 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:16384",
            "value": 24.621452498246263,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24.61946375791801 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:256",
            "value": 0.5201663171466475,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5201498699489326 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:8192",
            "value": 12.377463326396997,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.377620511893717 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:1350",
            "value": 2.196311796431063,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.196197751716955 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:16",
            "value": 0.1495990270805843,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.14956481677363748 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:16384",
            "value": 24.613399120488832,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24.61185804749406 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:256",
            "value": 0.5204787378386767,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5204065717375346 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:8192",
            "value": 12.385676579599771,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.385657518529678 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:1350",
            "value": 2.1981083667228756,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.1978134338907584 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:16",
            "value": 0.1520924503022772,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.15209590218394736 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:16384",
            "value": 24.632671360677822,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24.63268333039495 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:256",
            "value": 0.5224547276643097,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5223673406165082 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:8192",
            "value": 12.378442727190947,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.378014837055247 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:1350",
            "value": 1.267001929767363,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.2669881224179553 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:16",
            "value": 0.2401450518446201,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.24012346448097383 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:16384",
            "value": 12.482489086858527,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.480959732737368 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:256",
            "value": 0.43267648566370065,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.4326300090778786 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:8192",
            "value": 6.365967724289177,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.365722784464534 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:1350",
            "value": 1.9586517526319704,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.9581688315317054 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:16",
            "value": 0.16451554926638423,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.16451745560879152 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:16384",
            "value": 21.545270682482865,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 21.544088276074135 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:256",
            "value": 0.48577761392416413,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.4857341592933899 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:8192",
            "value": 10.852537108769276,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 10.85175464827987 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:1350",
            "value": 0.2942862725634118,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.29426195158423424 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:16",
            "value": 0.09749340486231045,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.09748905931523086 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:16384",
            "value": 2.0989577384434863,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.0986547913944507 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:256",
            "value": 0.11951461048350634,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.1195172218383975 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:8192",
            "value": 1.0768164740765156,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.0767347227314945 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:1350",
            "value": 0.5143322077042833,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5143172177099021 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:16",
            "value": 0.1804005877454886,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.18039800306576304 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:16384",
            "value": 3.8785876599986397,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.878321881754088 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:256",
            "value": 0.24984104145680597,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.24984386526309244 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:8192",
            "value": 2.023817751888357,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.0236251225560924 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:1350",
            "value": 0.3099419292449393,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.3098663899074118 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:16",
            "value": 0.10031213249784415,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.1003142759977804 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:16384",
            "value": 2.203936813992433,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.203958673603151 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:256",
            "value": 0.12400713936307182,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.12399820609239685 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:8192",
            "value": 1.1302355963899962,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.1302639645499588 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:1350",
            "value": 2.4252039549880595,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.4247714646237366 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:16",
            "value": 0.553723376196594,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5537314234342795 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:16384",
            "value": 13.454766477441677,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 13.454202059079538 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:256",
            "value": 1.6108045988921385,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.610493523092611 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:8192",
            "value": 7.439781259963086,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7.439881971742429 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:1350",
            "value": 1.3081333954085201,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.3080795500502955 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:16",
            "value": 0.2446819998636357,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.24468453100429302 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:16384",
            "value": 12.833452863193067,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.833653010495796 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:256",
            "value": 0.4410688206093968,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.4410579039979364 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:8192",
            "value": 6.53078513128966,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.530440091413734 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:1350",
            "value": 2.4451836599241017,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.4449517621993078 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:16",
            "value": 0.19467705987705283,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.1946788702086681 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:16384",
            "value": 27.039480386485007,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 27.03651999999181 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:256",
            "value": 0.5952400003402377,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5951930589095814 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:8192",
            "value": 13.623648378320546,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 13.623040493300607 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:1350",
            "value": 0.3254022903109567,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.32538871939148406 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:16",
            "value": 0.10270695604296957,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.10270423415098902 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:16384",
            "value": 2.3122743853826195,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.3121653156147692 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:256",
            "value": 0.12740816765631569,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.12741087811331325 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:8192",
            "value": 1.186407834827095,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.186317035599326 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:1350",
            "value": 0.5768770761933548,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5768846671302227 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:16",
            "value": 0.19939992317646416,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.19937124382929816 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:16384",
            "value": 4.419006895030875,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4.418775297525392 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:256",
            "value": 0.28095213090652343,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2809567312712673 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:8192",
            "value": 2.3000449443717392,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.2998811751411194 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:1350",
            "value": 0.7607876905336003,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.7607944306028565 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:16",
            "value": 0.1817331356618101,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.18172429102852422 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:16384",
            "value": 6.944371012620114,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.94361363410582 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:256",
            "value": 0.2798333263460952,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2798086673733817 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:8192",
            "value": 3.5601066108360024,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.5597778962063606 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:1350",
            "value": 46.18849375821398,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 46.18043035479669 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:16",
            "value": 1.8605120597140048,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.8601756494714574 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:16384",
            "value": 534.3044045801657,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 534.1150954198315 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:256",
            "value": 10.591399105856027,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 10.591024399485477 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:8192",
            "value": 268.5058538460794,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 268.51075384612955 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:1350",
            "value": 0.8594514014218132,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.8593622764046457 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:16",
            "value": 0.2782369213026476,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2782418594653152 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:16384",
            "value": 7.048641607421858,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7.048058185852378 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:256",
            "value": 0.37627482264282175,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.37625270908545616 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:8192",
            "value": 3.6690765555496645,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.6689284694381468 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:1350",
            "value": 2.1644628168232147,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.164383808373673 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:16",
            "value": 0.24218285601744224,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.24218656524317556 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:16384",
            "value": 23.592937710439156,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 23.58949276094446 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:256",
            "value": 0.5950541494146231,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5950756297877325 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:8192",
            "value": 11.913986313011755,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 11.911159228087918 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:1350",
            "value": 2.2392567647478736,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.2387886425751202 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:16",
            "value": 0.2413555443463179,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.24135918927182734 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:16384",
            "value": 24.24457617728669,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24.244853012465047 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:256",
            "value": 0.6121138850466395,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.61212298009417 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:8192",
            "value": 12.236877352711184,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.237003063992153 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:1350",
            "value": 2.175432290534263,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.1754177203394844 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:16",
            "value": 0.14743023909437405,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.14741152685656295 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:16384",
            "value": 24.408669919831727,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24.405418612754552 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:256",
            "value": 0.5145360902063525,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5144969393269513 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:8192",
            "value": 12.267192553656818,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.266299342968672 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:1350",
            "value": 2.1748676776763656,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.1746288728673795 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:16",
            "value": 0.14739541087847158,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.14739805650113993 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:16384",
            "value": 24.407400871841784,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24.407479860507593 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:256",
            "value": 0.5150124516531502,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.514989548909972 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:8192",
            "value": 12.263912057863495,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.264027873333573 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:1350",
            "value": 2.17474381408962,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.1747855757742474 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:16",
            "value": 0.1459472797755145,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.14594975412634648 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:16384",
            "value": 24.41400662021573,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24.413140418119077 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:256",
            "value": 0.5148541834488661,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5147233888380286 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:8192",
            "value": 12.267386656159616,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.265285351544712 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:1350",
            "value": 1.2657043563876753,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.2657325288365238 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:16",
            "value": 0.23788422069337323,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2378543311756931 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:16384",
            "value": 12.493308902393938,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.492820879516355 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:256",
            "value": 0.4398993681107222,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.43980023833040277 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:8192",
            "value": 6.374666499728444,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.374248634128938 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:1350",
            "value": 2.20366165152667,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.2035377397176594 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:16",
            "value": 0.1547631644313821,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.1547185821637798 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:16384",
            "value": 24.67483747576213,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24.675178388858654 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:256",
            "value": 0.5201287833166764,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5201371138619194 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:8192",
            "value": 12.411953945621413,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.412257815959016 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:1350",
            "value": 0.29278144389423916,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.29278813460385517 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:16",
            "value": 0.08845686149240789,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.08845272686173716 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:16384",
            "value": 2.0771545750188,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.076897058388735 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:256",
            "value": 0.112344886910606,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.11233574986624142 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:8192",
            "value": 1.099776646961316,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.0996381761016192 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:1350",
            "value": 0.5680850932460139,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5680600421648433 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:16",
            "value": 0.13139304414161188,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.1313798269209069 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:16384",
            "value": 4.580335827478436,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4.580386570821743 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:256",
            "value": 0.23450650027035108,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2344964086487128 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:8192",
            "value": 2.363913525499859,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.3637799800273207 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:1350",
            "value": 0.30783663245440107,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.3078444275766548 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:16",
            "value": 0.092912132650054,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.0928891954700136 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:16384",
            "value": 2.19032181952507,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.1899549586709592 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:256",
            "value": 0.11711858418014025,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.11709595123413309 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:8192",
            "value": 1.152061557165765,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.151907056371562 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:1350",
            "value": 2.5915879992606357,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.5916199889047054 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:16",
            "value": 0.24927585150572915,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.24927836986798826 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:16384",
            "value": 28.709850697305527,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 28.710117309272555 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:256",
            "value": 0.681864896590826,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.6818734888115707 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:8192",
            "value": 14.468948641108208,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 14.468945954324157 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:1350",
            "value": 1.3046772814484136,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.3046065886780636 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:16",
            "value": 0.24344614471628268,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.24345037712272757 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:16384",
            "value": 12.837464305374453,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.836837584878843 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:256",
            "value": 0.44600786026478256,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.44590882475951804 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:8192",
            "value": 6.5366849205983675,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.5367626364349345 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:1350",
            "value": 2.677257848735985,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.6771456664239555 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:16",
            "value": 0.18588792629442458,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.18585296344201147 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:16384",
            "value": 30.040048262555032,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 30.033808022307532 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:256",
            "value": 0.6292099323814946,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.6292196570513884 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:8192",
            "value": 15.114263882913086,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 15.11062871287256 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:1350",
            "value": 0.32896677800213164,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.3289709524939898 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:16",
            "value": 0.09882633754460116,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.09881136864288881 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:16384",
            "value": 2.3467421039450245,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.3466183865850434 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:256",
            "value": 0.12274525955653551,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.12273904771543401 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:8192",
            "value": 1.231680805770494,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.2314795918368096 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:1350",
            "value": 0.6432421136088651,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.6432075683395664 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:16",
            "value": 0.14919295145082423,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.14919585967246862 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:16384",
            "value": 5.231517667315789,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 5.231090395268431 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:256",
            "value": 0.25607414491904135,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2560674931685098 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:8192",
            "value": 2.6972160312998197,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.69724503719682 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:1350",
            "value": 0.8086227849854447,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.8085458592438619 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:16",
            "value": 0.1784409670964854,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.1784350036236796 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:16384",
            "value": 6.98739490350494,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.9862953174088895 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:256",
            "value": 0.2781246971205123,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2781017913016779 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:8192",
            "value": 3.605594724593329,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.605290431858745 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:1350",
            "value": 46.144765542341325,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 46.14133796296403 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:16",
            "value": 1.555990366110683,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.555799735234896 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:16384",
            "value": 547.5513411765326,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 547.5637137255587 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:256",
            "value": 9.586363238209147,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 9.585642989119249 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:8192",
            "value": 273.9920998042162,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 273.9269980430558 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:1350",
            "value": 0.92647060378889,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.9264802615053065 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:16",
            "value": 0.29550421827977713,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2954938169844426 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:16384",
            "value": 7.077928719477983,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7.078072443253541 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:256",
            "value": 0.39415891082669724,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.3941123984096188 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:8192",
            "value": 3.7041217520794683,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.704170580570223 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockDecrypt<128>/threads:1",
            "value": 0.01588305222878455,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.01588340661183069 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockDecrypt<256>/threads:1",
            "value": 0.020857015209455092,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.020856491881637226 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockDecryptSetup<128>/threads:1",
            "value": 0.020522994987480253,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.020523221371848054 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockDecryptSetup<256>/threads:1",
            "value": 0.02515612921102382,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.02515646211257358 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockEncrypt<128>/threads:1",
            "value": 0.015885103879725474,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.01588461407577216 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockEncrypt<256>/threads:1",
            "value": 0.020860803110681433,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.02085887920494747 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockEncryptSetup<128>/threads:1",
            "value": 0.017688484646884797,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.01768569655310913 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockEncryptSetup<256>/threads:1",
            "value": 0.02079968554674783,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.020797259063040863 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedBase64/threads:1",
            "value": 2.4920406079559196,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.4919739293692977 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedCurve25519ArbitraryPointMultiply/threads:1",
            "value": 35.74972590131524,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 35.74630043465995 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedCurve25519BasePointMultiply/threads:1",
            "value": 14.908759196262004,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 14.909013076762156 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDH/p224/threads:1",
            "value": 376.0444919355181,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 375.8820403225822 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDH/p256/threads:1",
            "value": 59.96805922452159,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 59.94983340434947 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDH/p384/threads:1",
            "value": 995.6045744678033,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 995.4070709219418 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDH/p521/threads:1",
            "value": 2364.860067796992,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2364.8952711864385 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSASign/p224/threads:1",
            "value": 206.67719911503477,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 206.64555457226888 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSASign/p256/threads:1",
            "value": 19.592132064910246,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 19.591107862340326 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSASign/p384/threads:1",
            "value": 547.1999492188129,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 547.1494179687397 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSASign/p521/threads:1",
            "value": 1303.7345233642216,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1303.757392523498 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSAVerify/p224/threads:1",
            "value": 206.66829525230415,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 206.63471810091585 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSAVerify/p256/threads:1",
            "value": 55.55088026782184,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 55.55214769595007 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSAVerify/p384/threads:1",
            "value": 557.8936693228277,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 557.8660756972264 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSAVerify/p521/threads:1",
            "value": 1343.338304761909,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1343.360133333655 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedEd25519/threads:1",
            "value": 15.891262018143465,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 15.891523242629098 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedEd25519Sign/threads:1",
            "value": 16.054462489977652,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 16.053501889817984 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedEd25519Verify/threads:1",
            "value": 56.43085233266083,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 56.42861054767285 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHRSSDecap/threads:1",
            "value": 26.538890364188624,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 26.53956088770731 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHRSSEncap/threads:1",
            "value": 8.047440784944397,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 8.04710282304336 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHRSSGenerate/threads:1",
            "value": 137.18257423796638,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 137.1680796460003 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:1350/threads:1",
            "value": 2.2617286038231486,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.261345205700943 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:16/threads:1",
            "value": 0.22557323145129102,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.22557849603582739 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:16384/threads:1",
            "value": 26.0622265799291,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 26.06031449813773 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:256/threads:1",
            "value": 0.4302409405631723,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.43012043631061775 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:8192/threads:1",
            "value": 13.072413963458303,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 13.059401472781976 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:1350/threads:1",
            "value": 0.8544649626358016,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.8543486777488585 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:16/threads:1",
            "value": 0.061924313446833815,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.061924974491804514 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:16384/threads:1",
            "value": 9.707123683480154,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 9.707260809312892 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:256/threads:1",
            "value": 0.21231588445187138,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.21230439575934468 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:8192/threads:1",
            "value": 4.881506676893663,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4.8814615947826745 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:1350/threads:1",
            "value": 0.913856507782897,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.9138290567000298 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:16/threads:1",
            "value": 0.06486683746434425,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.06485668494404029 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:16384/threads:1",
            "value": 10.351699430098423,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 10.35010665383647 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:256/threads:1",
            "value": 0.2286094492920079,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2286119719552086 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:8192/threads:1",
            "value": 5.2074123465959765,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 5.207510449980589 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:1350/threads:1",
            "value": 2.649190520270266,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.64923939245107 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:16/threads:1",
            "value": 0.27440891455424404,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.27440212294131777 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:16384/threads:1",
            "value": 30.603040052522676,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 30.599049901508383 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:256/threads:1",
            "value": 0.7543833308651561,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.7543195472944895 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:8192/threads:1",
            "value": 15.45375198763194,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 15.453383281802136 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHashToCurve/hash-to-curve P256_XMD:SHA-256_SSWU_RO_/threads:1",
            "value": 28.553311365033817,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 28.551812691287555 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHashToCurve/hash-to-curve P384_XMD:SHA-384_SSWU_RO_/threads:1",
            "value": 76.99721350162311,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 76.99887760703032 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHashToCurve/hash-to-scalar P384_XMD:SHA-512/threads:1",
            "value": 1.3430597764136512,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.3426156683174364 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAKeyGen/ml_dsa_44/threads:1",
            "value": 61.29919449303036,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 61.27808435314402 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAKeyGen/ml_dsa_65/threads:1",
            "value": 115.79604214883011,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 115.79811239666813 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAKeyGen/ml_dsa_87/threads:1",
            "value": 162.21222170892838,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 162.18998036946283 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAParsePubKey/ml_dsa_44/threads:1",
            "value": 4.45864784740938,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4.458274232581857 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAParsePubKey/ml_dsa_65/threads:1",
            "value": 6.594613748647852,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.594251446854608 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAParsePubKey/ml_dsa_87/threads:1",
            "value": 8.719038327527745,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 8.71911641363852 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSASign/ml_dsa_44/threads:1",
            "value": 206.43921818180965,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 206.44407424243533 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSASign/ml_dsa_65/threads:1",
            "value": 329.70156394137655,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 329.67617400419476 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSASign/ml_dsa_87/threads:1",
            "value": 384.34956486479973,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 384.35355405405016 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerify/ml_dsa_44/threads:1",
            "value": 51.31792093705686,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 51.3063707906363 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerify/ml_dsa_65/threads:1",
            "value": 82.80010142348341,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 82.80173784104663 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerify/ml_dsa_87/threads:1",
            "value": 138.9168622397926,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 138.8993052527204 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerifyBadSignature/ml_dsa_44/threads:1",
            "value": 51.2681792245952,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 51.269113752746726 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerifyBadSignature/ml_dsa_65/threads:1",
            "value": 82.83634754291825,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 82.83752338661328 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerifyBadSignature/ml_dsa_87/threads:1",
            "value": 138.95725199995465,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 138.9403840000227 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024DecapOnly/threads:1",
            "value": 37.32845347865582,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 37.33084084269953 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024EncapOnly/threads:1",
            "value": 25.63648841962227,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 25.62303530045274 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024KeyGenDecap/threads:1",
            "value": 78.61175042161278,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 78.61122484542089 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024KeyGenOnly/threads:1",
            "value": 41.8649605616981,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 41.86580609501142 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024ParseEncap/threads:1",
            "value": 45.38037937741539,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 45.390353436954186 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024ParseOnly/threads:1",
            "value": 20.607655778081025,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 20.594760949260273 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024PrivateKeyFromSeedOnly/threads:1",
            "value": 41.96030050988694,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 41.96562653857951 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768DecapOnly/threads:1",
            "value": 28.28581003208286,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 28.289116639649006 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768EncapOnly/threads:1",
            "value": 19.50160977303168,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 19.497464986840804 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768KeyGenDecap/threads:1",
            "value": 56.207781162328445,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 56.20540000000044 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768KeyGenOnly/threads:1",
            "value": 28.484895689309887,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 28.485588043920018 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768ParseEncap/threads:1",
            "value": 31.937464766353425,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 31.933105815300635 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768ParseOnly/threads:1",
            "value": 13.314703531557825,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 13.30403920604487 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768PrivateKeyFromSeedOnly/threads:1",
            "value": 28.531340352473592,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 28.548311324575373 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndSign/2048/threads:1",
            "value": 742.9654126984027,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 742.9766560846929 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndSign/3072/threads:1",
            "value": 2170.2961999993095,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2170.3423076919885 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndSign/4096/threads:1",
            "value": 4811.776068965534,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4810.586586206869 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndVerify/2048/threads:1",
            "value": 19.364272037523723,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 19.36444833770098 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndVerify/3072/threads:1",
            "value": 40.58096809744885,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 40.57727204176357 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndVerify/4096/threads:1",
            "value": 70.5665911379603,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 70.549625881174 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAKeyGen/2048",
            "value": 75379.04224999182,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 75380.03775000136 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAKeyGen/3072",
            "value": 204982.94899994106,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 204946.07099999484 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAKeyGen/4096",
            "value": 586626.9449999777,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 586609.5350000081 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAParsePrivateKey/2048/threads:1",
            "value": 91.94944771240378,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 91.9426176470504 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAParsePrivateKey/3072/threads:1",
            "value": 173.3030716934747,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 173.28891965392125 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAParsePrivateKey/4096/threads:1",
            "value": 278.240658252295,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 278.2141553398194 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSASign/2048/threads:1",
            "value": 643.1509723503849,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 643.1159078340232 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSASign/3072/threads:1",
            "value": 1976.4027323942528,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1976.2437323944578 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSASign/4096/threads:1",
            "value": 4495.564483873281,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4495.605935484227 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAVerify/2048/threads:1",
            "value": 16.947998672618176,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 16.947337395923327 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAVerify/3072/threads:1",
            "value": 36.34075758361718,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 36.34123489759903 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAVerify/4096/threads:1",
            "value": 63.20759945872294,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 63.19873477672872 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:1350/threads:1",
            "value": 0.8636280863344828,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.8635801044344552 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:16/threads:1",
            "value": 0.6354069452523466,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.6354149111167873 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:16384/threads:1",
            "value": 3.150644040739727,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.150137891494346 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:256/threads:1",
            "value": 0.6625115180126641,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.6624971949973424 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:8192/threads:1",
            "value": 1.880479964346095,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.8804094271346738 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSLHDSA/threads:1",
            "value": 35103.59449998646,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 35099.095000006746 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSLHDSASign/threads:1",
            "value": 270407.75399996166,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 270389.35099994886 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSLHDSAVerify/threads:1",
            "value": 263.43911290317396,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 263.40490725806194 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSPAKE2/threads:1",
            "value": 124.6600943223768,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 124.66116208794834 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedScrypt/(N = 1024, r = 8, p = 16)/threads:1",
            "value": 27773.28879999459,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 27772.36120000453 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedScrypt/(N = 16384, r = 8, p = 1)/threads:1",
            "value": 27779.46979999797,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 27776.867800000105 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSelfTest",
            "value": 4478.894903225835,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4478.978741935459 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/1350/threads:1",
            "value": 0.517875861737022,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5178337356623569 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/16/threads:1",
            "value": 0.021167910076209173,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.021168146705048827 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/16384/threads:1",
            "value": 6.070905257227139,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.070449399732142 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/256/threads:1",
            "value": 0.10984441920568191,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.10984647279815604 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/8192/threads:1",
            "value": 3.0446979064767583,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.044511902432322 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedTrustTokenKeyGen/SpeedTrustTokenKeyGen experiment_v1",
            "value": 988.4542482271668,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 988.3522127660211 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedTrustTokenKeyGen/SpeedTrustTokenKeyGen experiment_v2_pmb",
            "value": 988.7474295773803,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 988.4844718310609 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedTrustTokenKeyGen/SpeedTrustTokenKeyGen experiment_v2_voprf",
            "value": 508.4951563635927,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 508.4503309091237 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedX509/threads:1",
            "value": 3.9305722711405116,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.93064134171919 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginIssueBatch1",
            "value": 624.3829196428408,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 624.2435892855574 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginIssueBatch10",
            "value": 6242.172181817874,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6240.709272726071 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginRedeemBatch1",
            "value": 0.1515975673705904,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.15159954838932443 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginRedeemBatch10",
            "value": 0.15059810361310744,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.15056103231532758 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1FinishIssueBatch1",
            "value": 7048.489400000336,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7048.5555999994185 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1FinishIssueBatch10",
            "value": 25089.999833331454,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 25087.444333327843 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1IssueBatch1",
            "value": 6033.539739128766,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6033.600434781638 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1IssueBatch10",
            "value": 21675.392000001164,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 21675.702333332934 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1RedeemBatch1",
            "value": 1714.037280488278,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1713.9322195125105 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1RedeemBatch10",
            "value": 1714.2943414634508,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1714.0479024391198 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginIssueBatch1",
            "value": 624.4336205359755,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 624.3287544643397 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginIssueBatch10",
            "value": 6239.396954542413,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6239.13090909024 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginRedeemBatch1",
            "value": 0.14535932590085462,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.14535446991412496 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginRedeemBatch10",
            "value": 0.14266820335193475,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.14266953914976346 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbFinishIssueBatch1",
            "value": 7041.247899999803,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7041.000499999939 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbFinishIssueBatch10",
            "value": 25171.3668333385,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 25171.711500007634 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbIssueBatch1",
            "value": 6034.225478258479,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6032.642565217025 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbIssueBatch10",
            "value": 21675.98266665512,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 21673.343000003344 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbRedeemBatch1",
            "value": 1713.3795205483057,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1713.4186712326805 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbRedeemBatch10",
            "value": 1718.316219512001,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1718.218390244019 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginIssueBatch1",
            "value": 626.8363228700396,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 626.7887847532584 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginIssueBatch10",
            "value": 6259.564590912058,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6259.632318181668 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginRedeemBatch1",
            "value": 0.13701799057441694,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.13700517138760718 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginRedeemBatch10",
            "value": 0.13708294945684743,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.13707829329077434 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfFinishIssueBatch1",
            "value": 2427.442561402889,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2427.4438421055593 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfFinishIssueBatch10",
            "value": 8961.490749999968,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 8960.222874999425 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfIssueBatch1",
            "value": 2331.1999333335125,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2330.896533333278 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfIssueBatch10",
            "value": 8835.318250000057,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 8834.669812500806 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfRedeemBatch1",
            "value": 552.4691062991614,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 552.4747755905214 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfRedeemBatch10",
            "value": 552.7672015813527,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 552.6672845850842 us\nthreads: 1"
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
        "date": 1783788618072,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:1350",
            "value": 2.368744392271312,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.3683308560227285 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:16",
            "value": 0.5505303525902153,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5504328470016012 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:16384",
            "value": 12.769458451161952,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.767800328377122 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:256",
            "value": 1.600958676083024,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.6007764036093748 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:8192",
            "value": 7.106435823170772,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7.105935416666461 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:1350",
            "value": 2.5100958109561495,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.509955137844736 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:16",
            "value": 0.6754617493447115,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.6753949130820076 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:16384",
            "value": 13.513109405180138,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 13.512052047122369 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:256",
            "value": 1.7132249733922762,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.7131319868369383 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:8192",
            "value": 7.52740538506902,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7.52679287364965 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:1350",
            "value": 2.194017156555082,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.1938621835043386 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:16",
            "value": 0.14986129022913355,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.14984595753445093 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:16384",
            "value": 24.64017396657751,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24.640134916443607 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:256",
            "value": 0.5203380633956786,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5202961385176699 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:8192",
            "value": 12.372835630963916,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.370125751148615 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:1350",
            "value": 2.1981123200910893,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.197850522090824 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:16",
            "value": 0.14946761373860604,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.14946769357192535 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:16384",
            "value": 24.624797784421396,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24.62322331633471 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:256",
            "value": 0.5199098827785298,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5198239400659652 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:8192",
            "value": 12.36997207000732,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.369073360437413 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:1350",
            "value": 2.1952081789634947,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.195209450549436 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:16",
            "value": 0.1516084399207654,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.15159626704074647 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:16384",
            "value": 24.632983095609102,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24.62975911251636 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:256",
            "value": 0.523798385678912,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5238006410903893 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:8192",
            "value": 12.40216238028137,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.398306402975438 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:1350",
            "value": 1.267308197135495,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.267008171825207 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:16",
            "value": 0.2400545485595696,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.24000795381235193 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:16384",
            "value": 12.492284873341424,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.489928469500036 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:256",
            "value": 0.432703972818419,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.43268504543260833 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:8192",
            "value": 6.365963404101314,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.3646176751377235 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:1350",
            "value": 1.9585957166858978,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.9585467245239714 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:16",
            "value": 0.16446809859754277,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.1644485371479099 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:16384",
            "value": 21.559294006899123,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 21.5554438343205 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:256",
            "value": 0.4852380675203739,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.485196425106728 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:8192",
            "value": 10.84685911131493,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 10.845093667749701 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:1350",
            "value": 0.3005955942438907,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.3005690324023335 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:16",
            "value": 0.09733592084783267,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.09733632167477074 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:16384",
            "value": 2.0846907709962244,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.084692598072764 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:256",
            "value": 0.11987681115204933,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.11987023312919434 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:8192",
            "value": 1.0809534416707396,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.080962949518426 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:1350",
            "value": 0.5147000419398473,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5147038238821755 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:16",
            "value": 0.1802861577604414,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.18023521381901694 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:16384",
            "value": 3.8800451764687107,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.879370657438111 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:256",
            "value": 0.2512257533577293,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.25122613925788784 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:8192",
            "value": 2.0237911028789273,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.0235405710477212 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:1350",
            "value": 0.31047728474077396,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.3104312141049007 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:16",
            "value": 0.10029852251105376,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.10027473134452057 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:16384",
            "value": 2.1658245204928166,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.165755953300089 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:256",
            "value": 0.12410975482473272,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.12411065560284675 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:8192",
            "value": 1.1298010689838511,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.129741259079342 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:1350",
            "value": 2.4263432771206026,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.4262377852419874 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:16",
            "value": 0.5537423284325429,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5536126366365859 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:16384",
            "value": 13.457747503834348,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 13.456405817971751 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:256",
            "value": 1.6132171073820452,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.6130373994022587 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:8192",
            "value": 7.44677298101717,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7.4462808230113735 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:1350",
            "value": 1.308218215999772,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.308150013562174 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:16",
            "value": 0.24496462187376192,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.24496598876383816 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:16384",
            "value": 12.829815480557997,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.829636096845093 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:256",
            "value": 0.44090859195894716,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.44086980124444136 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:8192",
            "value": 6.53620564365511,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.536237639924758 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:1350",
            "value": 2.447704973283985,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.4473448293920628 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:16",
            "value": 0.19473691803299903,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.19470391413175278 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:16384",
            "value": 27.025473166025705,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 27.02443146718012 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:256",
            "value": 0.5941351747706927,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5941044246359346 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:8192",
            "value": 13.597242082762419,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 13.595777734603596 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:1350",
            "value": 0.3258459938097125,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.325848097453435 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:16",
            "value": 0.10276691871910343,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.10275762106609038 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:16384",
            "value": 2.2880809370092816,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.288000397318017 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:256",
            "value": 0.12817612064964748,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.12816498919165867 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:8192",
            "value": 1.1903469618112281,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.1901734076653492 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:1350",
            "value": 0.576161383166064,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5761316492391092 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:16",
            "value": 0.19933255136975161,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.19933304389292672 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:16384",
            "value": 4.411336264495166,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4.411151664145143 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:256",
            "value": 0.2820383274701467,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.28198511426037814 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:8192",
            "value": 2.2969182950228664,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.296946268314093 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:1350",
            "value": 0.7604733784085277,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.7604324225346243 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:16",
            "value": 0.18173128091969426,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.1816860240201481 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:16384",
            "value": 6.951117702824721,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.950784752019918 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:256",
            "value": 0.2794244775129353,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.27935601004841293 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:8192",
            "value": 3.5607119746037776,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.5607497650787647 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:1350",
            "value": 46.17758382839606,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 46.16696105610404 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:16",
            "value": 1.861258742652979,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.8608899156982497 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:16384",
            "value": 534.3966488549052,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 534.3990229007674 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:256",
            "value": 10.615045790582595,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 10.612479330114727 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:8192",
            "value": 268.6927858508127,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 268.6068413001989 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:1350",
            "value": 0.8588009025881455,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.8586895342767836 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:16",
            "value": 0.2811886038579409,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2811882388143036 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:16384",
            "value": 7.042717469878052,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7.042761797187924 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:256",
            "value": 0.3763386428577505,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.37631182565339927 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:8192",
            "value": 3.671122782262176,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.6707999529667017 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:1350",
            "value": 2.1663681221492657,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.1659581820440255 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:16",
            "value": 0.2424593504372372,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2424038836764416 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:16384",
            "value": 23.594162525533207,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 23.592169673246264 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:256",
            "value": 0.5945866013073996,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5944249368190404 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:8192",
            "value": 11.90928100297603,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 11.90607394815067 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:1350",
            "value": 2.235415110911558,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.2351785777030915 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:16",
            "value": 0.24191503001574766,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2417818257494267 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:16384",
            "value": 24.24902353754885,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24.247703876774825 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:256",
            "value": 0.6123475420037494,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.6123462185684106 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:8192",
            "value": 12.23522573876007,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.235144955410833 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:1350",
            "value": 2.176144763000431,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.175507113126394 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:16",
            "value": 0.1477353154896097,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.1477283765739029 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:16384",
            "value": 24.417835628368294,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24.41369095346114 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:256",
            "value": 0.5143304350063305,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5143065853908678 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:8192",
            "value": 12.267102110522734,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.265627813294119 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:1350",
            "value": 2.176361871206728,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.1761557373227913 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:16",
            "value": 0.14731210222514168,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.1473052085127624 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:16384",
            "value": 24.420438633194898,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24.418940725242567 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:256",
            "value": 0.5151315111107984,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5151349346728658 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:8192",
            "value": 12.266583486721604,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.266038566043143 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:1350",
            "value": 2.1744500977546166,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.174153803183755 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:16",
            "value": 0.14618885314382823,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.14618153439614553 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:16384",
            "value": 24.41042057541715,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24.40683870967771 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:256",
            "value": 0.5148080047641276,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5147835853815189 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:8192",
            "value": 12.271282222030798,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.26923105230857 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:1350",
            "value": 1.2652154357389351,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.2650302863386675 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:16",
            "value": 0.23796516878597782,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2379506671273176 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:16384",
            "value": 12.492596488095783,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.492051608879569 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:256",
            "value": 0.43986926171221674,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.4398460400749004 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:8192",
            "value": 6.375320280803076,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.374867165063275 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:1350",
            "value": 2.206714927562067,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.2067149433261175 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:16",
            "value": 0.15479212703284742,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.15479166800320965 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:16384",
            "value": 24.656509676278485,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24.648185608725484 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:256",
            "value": 0.5202582383903563,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5202593565307088 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:8192",
            "value": 12.39991620111787,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.399888179479852 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:1350",
            "value": 0.29385586162967686,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.29383966973206205 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:16",
            "value": 0.08864344526604864,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.08864337459029428 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:16384",
            "value": 2.122963356495043,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.122644751191802 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:256",
            "value": 0.11315779484662884,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.11310779234471559 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:8192",
            "value": 1.1008646593915188,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.1007804773747034 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:1350",
            "value": 0.5681634345422255,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5679343796031249 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:16",
            "value": 0.13166021710046263,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.13164739366413325 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:16384",
            "value": 4.582493155171052,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4.582106274972381 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:256",
            "value": 0.23439873524911364,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.23437092481760072 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:8192",
            "value": 2.3642444774456024,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.364265234487003 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:1350",
            "value": 0.3086357685583038,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.30861868875002546 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:16",
            "value": 0.09297649400593719,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.09297674713715738 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:16384",
            "value": 2.222916476370696,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.222734697114313 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:256",
            "value": 0.11713365238976375,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.11711012955586589 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:8192",
            "value": 1.1305419955807912,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.1305442658465041 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:1350",
            "value": 2.591324658270676,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.591183101197107 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:16",
            "value": 0.2502608314956527,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2502470256495605 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:16384",
            "value": 28.701410219578413,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 28.70012312743654 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:256",
            "value": 0.682144508079915,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.6819349377892037 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:8192",
            "value": 14.473430282999594,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 14.473402809334118 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:1350",
            "value": 1.305190244038734,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.3051994506059048 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:16",
            "value": 0.24316362136921132,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.24313521884824674 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:16384",
            "value": 12.843606653800114,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.838892748828615 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:256",
            "value": 0.44571047646408485,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.4456050249972374 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:8192",
            "value": 6.542250326798426,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.54190135387508 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:1350",
            "value": 2.681370057955901,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.6810538053976742 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:16",
            "value": 0.1858121710421134,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.18580854918285641 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:16384",
            "value": 30.02595668024357,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 30.023682393316037 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:256",
            "value": 0.6294464181375381,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.6293064517578966 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:8192",
            "value": 15.096046366192411,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 15.094533750269783 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:1350",
            "value": 0.32914260875666296,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.3290028900381039 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:16",
            "value": 0.09894586829234694,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.09893852768966623 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:16384",
            "value": 2.350558653059821,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.3503265128867734 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:256",
            "value": 0.1236956269761395,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.12369475323721406 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:8192",
            "value": 1.2153224814104688,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.2153279923358111 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:1350",
            "value": 0.642445766395725,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.6424501402947249 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:16",
            "value": 0.14945929353622917,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.14944117369945992 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:16384",
            "value": 5.2385107536929345,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 5.238255208528204 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:256",
            "value": 0.25604755680828645,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.256048681289794 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:8192",
            "value": 2.697225259188937,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.696866779510882 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:1350",
            "value": 0.8117834025040658,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.8117825078069683 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:16",
            "value": 0.17846638157670286,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.17846617197673484 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:16384",
            "value": 6.969280071635871,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.9679167744504085 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:256",
            "value": 0.27824698104011497,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2782281099620352 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:8192",
            "value": 3.579354659177706,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.579169925963827 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:1350",
            "value": 46.129495678185215,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 46.11085738032032 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:16",
            "value": 1.5582048124295351,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.5578757885117 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:16384",
            "value": 546.8225273437266,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 546.797863281212 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:256",
            "value": 9.587006981522734,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 9.585569746750318 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:8192",
            "value": 274.37314509807396,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 274.30035098030413 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:1350",
            "value": 0.928212875899363,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.9280843812154335 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:16",
            "value": 0.2957528621746193,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.29575446182670956 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:16384",
            "value": 7.060027352240757,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7.059078012032469 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:256",
            "value": 0.39462490924189303,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.3945484023675498 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:8192",
            "value": 3.692257847531934,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.69225853336855 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockDecrypt<128>/threads:1",
            "value": 0.01588836293080441,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.015888547514323333 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockDecrypt<256>/threads:1",
            "value": 0.020855011920309318,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.02085388292671141 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockDecryptSetup<128>/threads:1",
            "value": 0.020632599503783794,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.020631536397037367 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockDecryptSetup<256>/threads:1",
            "value": 0.025252633921873973,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.025249872594288195 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockEncrypt<128>/threads:1",
            "value": 0.015906651197241908,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.01590203540990361 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockEncrypt<256>/threads:1",
            "value": 0.020859124493186894,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.020855952755788193 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockEncryptSetup<128>/threads:1",
            "value": 0.01769576470049829,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.017691271805107257 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockEncryptSetup<256>/threads:1",
            "value": 0.020817157493897873,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.020814754090815155 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedBase64/threads:1",
            "value": 2.4930483320289434,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.492928871185706 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedCurve25519ArbitraryPointMultiply/threads:1",
            "value": 35.69215939811309,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 35.681340474371915 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedCurve25519BasePointMultiply/threads:1",
            "value": 14.915248612896843,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 14.914719483569968 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDH/p224/threads:1",
            "value": 379.89553929558656,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 379.898756097549 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDH/p256/threads:1",
            "value": 60.074659948534176,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 60.06757890222569 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDH/p384/threads:1",
            "value": 992.9019858157303,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 992.6805035461184 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDH/p521/threads:1",
            "value": 2324.674933333881,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2324.4549333336786 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSASign/p224/threads:1",
            "value": 209.45581137723,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 209.40849700598267 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSASign/p256/threads:1",
            "value": 19.612598288198278,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 19.610970394275657 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSASign/p384/threads:1",
            "value": 551.7875275592714,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 551.7917322835252 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSASign/p521/threads:1",
            "value": 1300.4268130842565,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1300.2952336447754 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSAVerify/p224/threads:1",
            "value": 212.15161791044906,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 212.12615522391735 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSAVerify/p256/threads:1",
            "value": 55.443998415194216,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 55.444576862134866 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSAVerify/p384/threads:1",
            "value": 560.277075697266,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 560.2460956175127 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSAVerify/p521/threads:1",
            "value": 1340.2515769228146,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1340.2306730769124 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedEd25519/threads:1",
            "value": 15.914284136202948,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 15.911819838287414 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedEd25519Sign/threads:1",
            "value": 16.074201292709663,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 16.070001731301076 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedEd25519Verify/threads:1",
            "value": 56.09997664116002,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 56.09107772855058 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHRSSDecap/threads:1",
            "value": 26.592112105067336,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 26.58831004948439 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHRSSEncap/threads:1",
            "value": 8.057149343921646,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 8.057156537753016 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHRSSGenerate/threads:1",
            "value": 137.26301574803793,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 137.24563779527085 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:1350/threads:1",
            "value": 2.2540753134705636,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.253852189868861 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:16/threads:1",
            "value": 0.2256434951074464,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2256134764907386 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:16384/threads:1",
            "value": 25.9895727036115,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 25.98975195239392 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:256/threads:1",
            "value": 0.4306230502093381,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.43058667667386585 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:8192/threads:1",
            "value": 12.994282969832051,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.993881856148677 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:1350/threads:1",
            "value": 0.8540585429524628,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.8540576829238404 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:16/threads:1",
            "value": 0.06198290165953949,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.061975850066833336 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:16384/threads:1",
            "value": 9.70727402480071,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 9.706808286564277 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:256/threads:1",
            "value": 0.21238047337197907,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.21237107387508875 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:8192/threads:1",
            "value": 4.885565038381365,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4.8849369853453775 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:1350/threads:1",
            "value": 0.912479738408535,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.9123071807210208 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:16/threads:1",
            "value": 0.06488933639849608,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.0648887703668261 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:16384/threads:1",
            "value": 10.349216386401148,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 10.348476183420857 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:256/threads:1",
            "value": 0.22860503632133888,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.22857000679390527 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:8192/threads:1",
            "value": 5.208875512180981,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 5.2088868732772236 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:1350/threads:1",
            "value": 2.651855131319076,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.6512824882348327 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:16/threads:1",
            "value": 0.27449656659348876,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.27449641539407327 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:16384/threads:1",
            "value": 30.60520209744804,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 30.603833733887353 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:256/threads:1",
            "value": 0.753400343522512,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.753340598633419 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:8192/threads:1",
            "value": 15.45606900353306,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 15.455412698410328 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHashToCurve/hash-to-curve P256_XMD:SHA-256_SSWU_RO_/threads:1",
            "value": 28.48349542590485,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 28.480348851393153 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHashToCurve/hash-to-curve P384_XMD:SHA-384_SSWU_RO_/threads:1",
            "value": 76.80157142857448,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 76.80161466885293 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHashToCurve/hash-to-scalar P384_XMD:SHA-512/threads:1",
            "value": 1.3417489439153203,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.3416880310361095 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAKeyGen/ml_dsa_44/threads:1",
            "value": 61.23388080631829,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 61.23445661699915 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAKeyGen/ml_dsa_65/threads:1",
            "value": 115.77719950536422,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 115.76346743611167 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAKeyGen/ml_dsa_87/threads:1",
            "value": 161.8413579676882,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 161.84266743644642 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAParsePubKey/ml_dsa_44/threads:1",
            "value": 4.469717355212058,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4.469748164230747 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAParsePubKey/ml_dsa_65/threads:1",
            "value": 6.594942896084762,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.594931992292034 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAParsePubKey/ml_dsa_87/threads:1",
            "value": 8.72377564381912,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 8.722078256531008 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSASign/ml_dsa_44/threads:1",
            "value": 209.62778917379813,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 209.61505698005502 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSASign/ml_dsa_65/threads:1",
            "value": 323.8871958224829,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 323.8867101827746 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSASign/ml_dsa_87/threads:1",
            "value": 381.7262716418201,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 381.6855791045334 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerify/ml_dsa_44/threads:1",
            "value": 51.18786741736029,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 51.16503123865112 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerify/ml_dsa_65/threads:1",
            "value": 82.87962647755592,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 82.87145271869048 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerify/ml_dsa_87/threads:1",
            "value": 138.89161546082016,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 138.87140436072127 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerifyBadSignature/ml_dsa_44/threads:1",
            "value": 51.28639192660291,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 51.28407045871648 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerifyBadSignature/ml_dsa_65/threads:1",
            "value": 82.90684556212769,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 82.89692840236368 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerifyBadSignature/ml_dsa_87/threads:1",
            "value": 138.96354410307626,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 138.96242616451525 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024DecapOnly/threads:1",
            "value": 37.405992249761006,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 37.409868252637345 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024EncapOnly/threads:1",
            "value": 25.70529204063229,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 25.693186093313177 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024KeyGenDecap/threads:1",
            "value": 78.66557102751635,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 78.66036271757007 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024KeyGenOnly/threads:1",
            "value": 41.88772057501271,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 41.87726235399987 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024ParseEncap/threads:1",
            "value": 45.45568311628996,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 45.46066461030436 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024ParseOnly/threads:1",
            "value": 20.66494968370092,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 20.6529883769712 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024PrivateKeyFromSeedOnly/threads:1",
            "value": 41.997618686797125,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 42.00661628657347 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768DecapOnly/threads:1",
            "value": 28.354045427140125,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 28.35462178050116 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768EncapOnly/threads:1",
            "value": 19.59116997494322,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 19.58279466033482 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768KeyGenDecap/threads:1",
            "value": 56.360442570290196,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 56.36069116465261 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768KeyGenOnly/threads:1",
            "value": 28.51432831570909,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 28.51438344182305 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768ParseEncap/threads:1",
            "value": 32.04270087049103,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 32.03552175841307 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768ParseOnly/threads:1",
            "value": 13.364580721688966,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 13.358674254732499 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768PrivateKeyFromSeedOnly/threads:1",
            "value": 28.578899367568155,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 28.602110634814306 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndSign/2048/threads:1",
            "value": 744.0882553187245,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 744.0874574468094 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndSign/3072/threads:1",
            "value": 2164.3547076931873,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2164.3656307691554 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndSign/4096/threads:1",
            "value": 4802.741896551667,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4802.531896551688 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndVerify/2048/threads:1",
            "value": 19.32080983968827,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 19.31947194582501 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndVerify/3072/threads:1",
            "value": 40.6038504074659,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 40.602055296856 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndVerify/4096/threads:1",
            "value": 70.62790982366185,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 70.62411133501189 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAKeyGen/2048",
            "value": 63959.683999996734,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 63960.241500012664 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAKeyGen/3072",
            "value": 193744.08900000618,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 193746.07499997865 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAKeyGen/4096",
            "value": 735598.2609999501,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 735508.4089999764 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAParsePrivateKey/2048/threads:1",
            "value": 92.63924819909637,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 92.63178912902605 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAParsePrivateKey/3072/threads:1",
            "value": 172.35647211902435,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 172.3406827757128 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAParsePrivateKey/4096/threads:1",
            "value": 273.9859473684202,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 273.98812280694733 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSASign/2048/threads:1",
            "value": 643.5108202764818,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 643.3311935483256 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSASign/3072/threads:1",
            "value": 1977.9913943661804,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1977.9978450710396 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSASign/4096/threads:1",
            "value": 4498.652096773889,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4498.680354839368 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAVerify/2048/threads:1",
            "value": 16.893421613017892,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 16.892501896956688 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAVerify/3072/threads:1",
            "value": 36.36201247402435,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 36.35002806651962 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAVerify/4096/threads:1",
            "value": 63.26757987366755,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 63.25895622744045 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:1350/threads:1",
            "value": 0.8620116409279421,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.8620173075739784 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:16/threads:1",
            "value": 0.6348989487250859,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.6348703019463802 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:16384/threads:1",
            "value": 3.1369710335587646,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.136569294235409 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:256/threads:1",
            "value": 0.6624726452314548,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.6624764629449921 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:8192/threads:1",
            "value": 1.8780101240048843,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.8774294265744815 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSLHDSA/threads:1",
            "value": 35118.43749998889,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 35118.57850000411 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSLHDSASign/threads:1",
            "value": 270142.07299998816,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 270124.2050000019 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSLHDSAVerify/threads:1",
            "value": 270.66373529400084,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 270.66343137252545 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSPAKE2/threads:1",
            "value": 124.61421155558128,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 124.60800177777602 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedScrypt/(N = 1024, r = 8, p = 16)/threads:1",
            "value": 27669.84219999813,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 27662.28180000212 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedScrypt/(N = 16384, r = 8, p = 1)/threads:1",
            "value": 27660.29060001074,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 27660.558599995966 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSelfTest",
            "value": 4479.880290322429,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4479.305483871046 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/1350/threads:1",
            "value": 0.5182495889436122,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5182129827133422 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/16/threads:1",
            "value": 0.02117692963023271,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.021171905358536965 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/16384/threads:1",
            "value": 6.07504698959514,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.074240876554207 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/256/threads:1",
            "value": 0.10987827394509118,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.1098730829027746 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/8192/threads:1",
            "value": 3.046243948060781,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.046038649760165 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedTrustTokenKeyGen/SpeedTrustTokenKeyGen experiment_v1",
            "value": 1001.8367499997435,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1001.8371357144164 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedTrustTokenKeyGen/SpeedTrustTokenKeyGen experiment_v2_pmb",
            "value": 1002.8441838234331,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1002.7994558821348 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedTrustTokenKeyGen/SpeedTrustTokenKeyGen experiment_v2_voprf",
            "value": 512.705051282065,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 512.6756959707013 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedX509/threads:1",
            "value": 3.9716619161424944,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.971669824201384 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginIssueBatch1",
            "value": 628.06671300449,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 628.0706771299326 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginIssueBatch10",
            "value": 6280.523409088801,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6278.492999998973 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginRedeemBatch1",
            "value": 0.1542372240559705,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.15423027677848222 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginRedeemBatch10",
            "value": 0.1656014043110958,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.16556842629448376 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1FinishIssueBatch1",
            "value": 7100.300799999105,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7100.307650000559 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1FinishIssueBatch10",
            "value": 25341.650666670528,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 25341.558500000378 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1IssueBatch1",
            "value": 6091.105173912026,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6091.095956521811 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1IssueBatch10",
            "value": 21908.40183333383,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 21907.2726666667 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1RedeemBatch1",
            "value": 1732.9026543210948,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1732.6872592591328 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1RedeemBatch10",
            "value": 1733.159308642309,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1733.0561111115467 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginIssueBatch1",
            "value": 628.1863318386385,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 628.1905874439416 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginIssueBatch10",
            "value": 6276.834863637181,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6276.373999999019 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginRedeemBatch1",
            "value": 0.147178143250141,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.14714642718312806 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginRedeemBatch10",
            "value": 0.15632883593619404,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.15632173566397328 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbFinishIssueBatch1",
            "value": 7106.938649999961,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7106.19559999941 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbFinishIssueBatch10",
            "value": 25336.54750000854,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 25326.709166667642 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbIssueBatch1",
            "value": 6088.66543478084,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6088.301652176181 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbIssueBatch10",
            "value": 21896.326333319394,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 21894.993166673277 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbRedeemBatch1",
            "value": 1732.6687160490378,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1732.6718148147702 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbRedeemBatch10",
            "value": 1733.0347901226987,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1732.9150987658675 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginIssueBatch1",
            "value": 629.1478295966065,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 629.1472600895302 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginIssueBatch10",
            "value": 6290.709590912643,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6289.823227273349 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginRedeemBatch1",
            "value": 0.13695548496131973,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.1369385736630843 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginRedeemBatch10",
            "value": 0.13683283012721578,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.13681321782778777 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfFinishIssueBatch1",
            "value": 2446.1091551713785,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2445.704706896722 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfFinishIssueBatch10",
            "value": 9071.034133330613,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 9071.131533333224 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfIssueBatch1",
            "value": 2347.9913666657617,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2347.7002666661897 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfIssueBatch10",
            "value": 8929.752937497426,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 8928.44662500103 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfRedeemBatch1",
            "value": 556.7000318725073,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 556.7004780876838 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfRedeemBatch10",
            "value": 557.2150436507168,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 557.2133333334111 us\nthreads: 1"
          }
        ]
      }
    ]
  }
}