window.BENCHMARK_DATA = {
  "lastUpdate": 1783767633577,
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
        "date": 1783754202184,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:1350",
            "value": 2.633560944012986,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.6334474860126615 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:16",
            "value": 0.6362153143024122,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.6361490532844356 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:16384",
            "value": 13.029909023324606,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 13.02877483505041 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:256",
            "value": 1.8757918689567634,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.8755759780517463 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:8192",
            "value": 7.368092787299489,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7.368133266743582 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:1350",
            "value": 2.7988034521927188,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.798570847700807 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:16",
            "value": 0.7730685880603262,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.7730668285490481 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:16384",
            "value": 13.796761248399433,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 13.7957556365062 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:256",
            "value": 2.0007172440463785,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.0007237458289784 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:8192",
            "value": 7.815663079237912,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7.815688674511119 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:1350",
            "value": 2.2008994510076363,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.2009030218181302 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:16",
            "value": 0.1549646250218963,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.1549654677560397 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:16384",
            "value": 24.618585734362927,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24.61859627547663 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:256",
            "value": 0.5111039704470242,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5111058065130873 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:8192",
            "value": 12.373647131620965,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.373701759038358 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:1350",
            "value": 2.20431598057217,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.204049842033101 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:16",
            "value": 0.15670505361599474,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.15670551390095172 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:16384",
            "value": 24.613618779671466,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24.613635836115527 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:256",
            "value": 0.513826768531412,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5137796554167218 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:8192",
            "value": 12.37655636948606,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.376485349296194 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:1350",
            "value": 2.2052989801054785,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.205311414001692 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:16",
            "value": 0.1585429861354585,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.15853924597206903 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:16384",
            "value": 24.624306704200702,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24.623065810311484 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:256",
            "value": 0.5156980475696618,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.515657969027846 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:8192",
            "value": 12.374160113100341,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.374187593887195 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:1350",
            "value": 1.2853610801966429,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.2853625702490896 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:16",
            "value": 0.2490099930879682,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.24901076780103729 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:16384",
            "value": 12.494676494238938,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.493929866881402 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:256",
            "value": 0.44268091883982996,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.4426728060156314 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:8192",
            "value": 6.374636951669445,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.374214640368205 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:1350",
            "value": 2.2108316258071286,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.2106725338216746 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:16",
            "value": 0.16127795988028373,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.16127838368013933 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:16384",
            "value": 24.621044205705886,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24.621046495245267 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:256",
            "value": 0.5257005968941542,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5256580569447522 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:8192",
            "value": 12.394507618711245,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.393853206943067 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:1350",
            "value": 0.2959069842473537,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.295908103000737 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:16",
            "value": 0.104527694311145,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.10452816765447737 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:16384",
            "value": 2.0685398181765704,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.068292541102423 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:256",
            "value": 0.12733571151647674,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.12732111283720518 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:8192",
            "value": 1.0852056003840258,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.0850649712701115 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:1350",
            "value": 0.5028313328758546,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.502832852528982 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:16",
            "value": 0.16483233912303688,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.16483452540610596 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:16384",
            "value": 3.865973348783535,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.865519588368392 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:256",
            "value": 0.23260780037266882,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2326075044758617 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:8192",
            "value": 2.011255661339254,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.011135972658799 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:1350",
            "value": 0.3131775684236018,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.31315553709195715 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:16",
            "value": 0.1075829955706888,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.10758325072344994 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:16384",
            "value": 2.1936968792483063,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.193539779031359 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:256",
            "value": 0.13133055859002898,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.13133063166709058 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:8192",
            "value": 1.1431216241492823,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.1430296985420367 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:1350",
            "value": 2.6944146683035517,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.6942472278705316 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:16",
            "value": 0.6407491986997327,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.640708235218852 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:16384",
            "value": 13.723795574702871,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 13.723826610536173 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:256",
            "value": 1.8886775613498301,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.8883728647004372 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:8192",
            "value": 7.716521799039987,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7.715562916828386 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:1350",
            "value": 1.323028260212852,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.3230359623952375 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:16",
            "value": 0.25391845590464546,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.25391861376503366 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:16384",
            "value": 12.851272351753966,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.850416192401427 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:256",
            "value": 0.4503032605999103,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.4503041529881864 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:8192",
            "value": 6.544794338829913,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.544800691297699 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:1350",
            "value": 2.7020605544520016,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.702069306462146 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:16",
            "value": 0.19150136741788237,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.19150147538989273 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:16384",
            "value": 30.134985582094707,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 30.135229180116742 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:256",
            "value": 0.6360506119147523,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.6360187732619529 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:8192",
            "value": 15.124566043847105,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 15.12340533534984 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:1350",
            "value": 0.32818006320585474,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.3281568861680879 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:16",
            "value": 0.11066102343888508,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.11065292250633278 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:16384",
            "value": 2.316265750935173,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.3161481119460223 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:256",
            "value": 0.13420045466447564,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.13420094455479445 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:8192",
            "value": 1.2015159476958122,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.2013427603285698 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:1350",
            "value": 0.5630269361082672,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.562975425931905 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:16",
            "value": 0.18339995711956764,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.18340084479755306 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:16384",
            "value": 4.400427832303319,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4.400439089398172 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:256",
            "value": 0.26434329172412363,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.26430979234422763 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:8192",
            "value": 2.2813483316242884,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.281356669434777 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:1350",
            "value": 0.7554614489004698,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.7554466849934834 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:16",
            "value": 0.17167547208596387,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.17167554101693128 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:16384",
            "value": 6.935668286084989,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.935185665632277 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:256",
            "value": 0.269191360647121,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2691530273874675 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:8192",
            "value": 3.5599759011644543,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.5599969240941403 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:1350",
            "value": 47.58375050916679,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 47.58397454175741 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:16",
            "value": 1.967257371789901,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.9668776247775202 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:16384",
            "value": 548.0820784312384,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 548.0550156863394 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:256",
            "value": 11.081182407840338,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 11.080560749884373 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:8192",
            "value": 275.6325846455745,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 275.61774409457126 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:1350",
            "value": 0.8786981094254099,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.8786292519138523 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:16",
            "value": 0.2973424055519313,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.29734375450714856 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:16384",
            "value": 7.059692636556424,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7.059726586861576 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:256",
            "value": 0.39341419346872814,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.393398065928883 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:8192",
            "value": 3.682249199012409,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.681872971269015 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:1350",
            "value": 2.1668191553569525,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.1667108590353834 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:16",
            "value": 0.23392241901137073,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2339241432556447 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:16384",
            "value": 23.595684352369982,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 23.59457958564575 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:256",
            "value": 0.5955053789617781,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5955063270596219 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:8192",
            "value": 11.91330335067215,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 11.913329951405153 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:1350",
            "value": 2.241143291658217,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.2410131749562967 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:16",
            "value": 0.2458896924938379,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.24587052993498848 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:16384",
            "value": 24.2622063711898,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24.261197368422344 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:256",
            "value": 0.620176185913524,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.6201784466885703 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:8192",
            "value": 12.257344866952884,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.255978220778537 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:1350",
            "value": 2.2012944913590085,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.201302165400897 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:16",
            "value": 0.15372342058984792,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.15370499422615402 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:16384",
            "value": 24.597114992977794,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24.59720593398533 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:256",
            "value": 0.5073743983622285,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5073747867498223 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:8192",
            "value": 12.360582184516,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.357690791798667 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:1350",
            "value": 2.2029769659203127,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.202622455080226 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:16",
            "value": 0.1567169664682706,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.15670375770536488 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:16384",
            "value": 24.599325311790732,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24.596904092744175 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:256",
            "value": 0.507315636929524,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5072553253850062 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:8192",
            "value": 12.356082385108946,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.355699126753176 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:1350",
            "value": 2.202259412384843,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.2020625972686827 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:16",
            "value": 0.15756828803153566,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.1575686753164098 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:16384",
            "value": 24.59257436347757,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24.59122493415112 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:256",
            "value": 0.5094339461167766,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5094369869698494 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:8192",
            "value": 12.361852577683246,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.361511034603177 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:1350",
            "value": 1.2755534167645977,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.2754794376129586 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:16",
            "value": 0.2460358924229692,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.24603620185554043 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:16384",
            "value": 12.493370786519536,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.492449259854322 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:256",
            "value": 0.44577916971530424,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.44578318434865655 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:8192",
            "value": 6.374758573576409,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.374669535911149 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:1350",
            "value": 2.21001993151004,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.2098633200248394 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:16",
            "value": 0.15479996078872257,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.1547779936601099 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:16384",
            "value": 24.69518194640049,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24.692714033850102 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:256",
            "value": 0.5202375104046414,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.520170863309244 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:8192",
            "value": 12.368015923564936,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.367418435952668 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:1350",
            "value": 0.30095697283705763,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.30095993688746114 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:16",
            "value": 0.10156402730105556,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.10156408001709745 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:16384",
            "value": 2.0939340646239852,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.0937048855371385 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:256",
            "value": 0.12590680137251392,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.12590683106844966 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:8192",
            "value": 1.0892629109811587,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.0892010725325023 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:1350",
            "value": 0.5616121653934449,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5616152747463365 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:16",
            "value": 0.13231034934592345,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.13231170868326259 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:16384",
            "value": 4.579027395469167,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4.578779659354589 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:256",
            "value": 0.22485697534325466,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2248245404642721 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:8192",
            "value": 2.3629281408898892,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.362703387547329 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:1350",
            "value": 0.3165004934002461,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.316485308895622 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:16",
            "value": 0.1062464602826476,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.10623481849498112 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:16384",
            "value": 2.2515329585289914,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.2512714538393146 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:256",
            "value": 0.13024874099614323,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.13021946508391424 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:8192",
            "value": 1.1726471776897929,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.1726481335527938 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:1350",
            "value": 2.597049650906401,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.597057873585856 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:16",
            "value": 0.2484959816283123,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.24852890532169855 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:16384",
            "value": 28.709448113199286,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 28.70853096800694 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:256",
            "value": 0.6848915365572489,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.6848587122233201 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:8192",
            "value": 14.472466556398047,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 14.470705675592257 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:1350",
            "value": 1.315063038889151,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.314945573955075 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:16",
            "value": 0.24860612412091124,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.24854819180958967 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:16384",
            "value": 12.84930978160943,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.84841980179894 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:256",
            "value": 0.44955057126684417,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.4494760363861194 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:8192",
            "value": 6.542243173622102,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.542007774811899 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:1350",
            "value": 2.6898452824376573,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.6897506240157103 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:16",
            "value": 0.18567648488883176,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.18566812797117102 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:16384",
            "value": 30.08735703511671,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 30.08745485886662 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:256",
            "value": 0.6297938879471282,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.6296825365423288 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:8192",
            "value": 15.11738725755702,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 15.116048000869291 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:1350",
            "value": 0.336810784415597,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.3368126288766086 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:16",
            "value": 0.11094872269937588,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.1109490394116753 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:16384",
            "value": 2.3620104247363973,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.3619119370812642 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:256",
            "value": 0.13482826990477645,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.13482183051854543 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:8192",
            "value": 1.2345947599171458,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.234604228470373 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:1350",
            "value": 0.635535055903909,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.6354816425779495 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:16",
            "value": 0.14956642289045005,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.14955810569325378 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:16384",
            "value": 5.229813893653097,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 5.229523342529991 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:256",
            "value": 0.24668853926787104,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.246689062147459 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:8192",
            "value": 2.693165703313036,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.6931702160342845 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:1350",
            "value": 0.8160442184379081,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.8158938769108867 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:16",
            "value": 0.18106533126245025,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.18106659115121201 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:16384",
            "value": 6.9889510899251075,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.988175728685957 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:256",
            "value": 0.2848053679956607,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.28480629659509854 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:8192",
            "value": 3.5859150567305704,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.585931309414415 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:1350",
            "value": 47.79716990125594,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 47.79687334013034 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:16",
            "value": 1.6120949954571426,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.6118786073318976 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:16384",
            "value": 566.2487773279345,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 566.2081133603531 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:256",
            "value": 9.923643707484256,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 9.92314236111344 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:8192",
            "value": 283.69097570847686,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 283.6686943319346 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:1350",
            "value": 0.9355970963222308,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.9354790668180547 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:16",
            "value": 0.3026031778960956,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.3025654736050443 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:16384",
            "value": 7.102945829098616,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7.102158952185715 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:256",
            "value": 0.4026719825492237,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.4026070394969252 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:8192",
            "value": 3.708222384260673,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.7077363313358496 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockDecrypt<128>/threads:1",
            "value": 0.01591315508514199,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.015908762769700317 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockDecrypt<256>/threads:1",
            "value": 0.020877762360748175,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.020877794746957633 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockDecryptSetup<128>/threads:1",
            "value": 0.021573122791746502,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.02157167352399509 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockDecryptSetup<256>/threads:1",
            "value": 0.02616476496364867,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.026164865742116135 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockEncrypt<128>/threads:1",
            "value": 0.015915807815017023,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.0159158255069299 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockEncrypt<256>/threads:1",
            "value": 0.02088588603840062,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.020885945015482018 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockEncryptSetup<128>/threads:1",
            "value": 0.018378123100317566,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.018377122707433677 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockEncryptSetup<256>/threads:1",
            "value": 0.022057292037867337,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.0220543886618888 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedBase64/threads:1",
            "value": 6.296699963970142,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.296332777878366 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedCurve25519ArbitraryPointMultiply/threads:1",
            "value": 41.60640373777413,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 41.60648353605279 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedCurve25519BasePointMultiply/threads:1",
            "value": 25.832399301077935,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 25.828548832078074 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDH/p224/threads:1",
            "value": 405.2030260115482,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 405.17645375712954 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDH/p256/threads:1",
            "value": 60.24777777778191,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 60.23651722653306 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDH/p384/threads:1",
            "value": 992.4480283686521,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 992.3981773049054 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDH/p521/threads:1",
            "value": 2403.6479482756945,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2403.648793103167 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSASign/p224/threads:1",
            "value": 225.1674565916368,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 225.16795819934967 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSASign/p256/threads:1",
            "value": 19.86122543023933,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 19.859272934150724 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSASign/p384/threads:1",
            "value": 551.2448464568082,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 551.1778188976482 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSASign/p521/threads:1",
            "value": 1345.477884615211,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1345.4854711537878 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSAVerify/p224/threads:1",
            "value": 217.5326713614938,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 217.51832550859592 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSAVerify/p256/threads:1",
            "value": 55.67527258257312,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 55.672049343415836 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSAVerify/p384/threads:1",
            "value": 555.0037098039278,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 554.9667098039174 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSAVerify/p521/threads:1",
            "value": 1357.4089126214212,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1357.349388349377 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedEd25519/threads:1",
            "value": 26.96845786407637,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 26.966941165049374 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedEd25519Sign/threads:1",
            "value": 27.08545985970583,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 27.085791114574175 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedEd25519Verify/threads:1",
            "value": 48.52993692465386,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 48.52785339243269 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHRSSDecap/threads:1",
            "value": 29.20168970558297,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 29.197836291500316 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHRSSEncap/threads:1",
            "value": 10.682234997323429,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 10.67984894121072 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHRSSGenerate/threads:1",
            "value": 137.92772986246072,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 137.92833595284574 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:1350/threads:1",
            "value": 2.835495688593697,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.8350552681283316 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:16/threads:1",
            "value": 0.28462142321215583,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2845717986624008 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:16384/threads:1",
            "value": 32.787533208598035,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 32.787511927038835 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:256/threads:1",
            "value": 0.5341895505269004,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5340553884369296 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:8192/threads:1",
            "value": 16.414470966985853,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 16.413992858816496 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:1350/threads:1",
            "value": 0.8538054866490993,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.8537185121075392 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:16/threads:1",
            "value": 0.05989220394731251,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.059892475769963816 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:16384/threads:1",
            "value": 9.706050399166687,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 9.705507740367892 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:256/threads:1",
            "value": 0.21215886082293,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2121454215519999 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:8192/threads:1",
            "value": 4.884452115733946,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4.88422565503573 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:1350/threads:1",
            "value": 0.9125236055420923,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.9122924466175232 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:16/threads:1",
            "value": 0.06487708192776459,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.06487262846509118 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:16384/threads:1",
            "value": 10.357226166702599,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 10.35673626211125 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:256/threads:1",
            "value": 0.22905104850145616,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.22904017987864103 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:8192/threads:1",
            "value": 5.211888636618454,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 5.211414970037791 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:1350/threads:1",
            "value": 2.6711692592164655,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.6711779137591862 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:16/threads:1",
            "value": 0.28302059518305733,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.28298866577891174 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:16384/threads:1",
            "value": 30.665111451715664,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 30.66111955332374 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:256/threads:1",
            "value": 0.764064421357946,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.7640652771115986 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:8192/threads:1",
            "value": 15.499011248340988,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 15.498233789147655 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHashToCurve/hash-to-curve P256_XMD:SHA-256_SSWU_RO_/threads:1",
            "value": 29.33258651826214,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 29.33269319613443 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHashToCurve/hash-to-curve P384_XMD:SHA-384_SSWU_RO_/threads:1",
            "value": 76.82784830229691,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 76.81727217962099 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHashToCurve/hash-to-scalar P384_XMD:SHA-512/threads:1",
            "value": 1.42632152132476,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.4260393215112512 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAKeyGen/ml_dsa_44/threads:1",
            "value": 71.5551990788136,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 71.55577430910712 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAKeyGen/ml_dsa_65/threads:1",
            "value": 130.24605762083593,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 130.2327527880911 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAKeyGen/ml_dsa_87/threads:1",
            "value": 183.1066818774551,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 183.10770143415894 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAParsePubKey/ml_dsa_44/threads:1",
            "value": 4.539502457763589,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4.538350955435946 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAParsePubKey/ml_dsa_65/threads:1",
            "value": 6.608899811321283,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.608373632075532 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAParsePubKey/ml_dsa_87/threads:1",
            "value": 8.7242407464986,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 8.724273779162289 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSASign/ml_dsa_44/threads:1",
            "value": 244.90647626843878,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 244.88783142386742 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSASign/ml_dsa_65/threads:1",
            "value": 392.3045983606182,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 392.2121612021877 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSASign/ml_dsa_87/threads:1",
            "value": 452.4773758169793,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 452.47783986918927 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerify/ml_dsa_44/threads:1",
            "value": 59.29937560333365,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 59.29235585782721 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerify/ml_dsa_65/threads:1",
            "value": 93.51093328884888,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 93.51164976650779 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerify/ml_dsa_87/threads:1",
            "value": 157.5978075171082,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 157.58358314350008 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerifyBadSignature/ml_dsa_44/threads:1",
            "value": 59.3766022920189,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 59.36999872665337 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerifyBadSignature/ml_dsa_65/threads:1",
            "value": 93.70079096423292,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 93.69591975725785 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerifyBadSignature/ml_dsa_87/threads:1",
            "value": 157.61003370777942,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 157.60973820222083 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024DecapOnly/threads:1",
            "value": 42.59130790265318,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 42.58988571511045 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024EncapOnly/threads:1",
            "value": 29.360659820072314,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 29.34609348173488 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024KeyGenDecap/threads:1",
            "value": 86.60346919727601,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 86.6035301804663 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024KeyGenOnly/threads:1",
            "value": 44.59949029589755,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 44.597064587973435 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024ParseEncap/threads:1",
            "value": 49.41006062773021,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 49.41472012690452 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024ParseOnly/threads:1",
            "value": 20.92793027769019,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 20.90650059707034 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024PrivateKeyFromSeedOnly/threads:1",
            "value": 44.582789373043255,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 44.59400413604125 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768DecapOnly/threads:1",
            "value": 33.4155672714467,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 33.414361640886085 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768EncapOnly/threads:1",
            "value": 23.215368771263194,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 23.213122757355737 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768KeyGenDecap/threads:1",
            "value": 63.99425330897306,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 63.98595116385067 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768KeyGenOnly/threads:1",
            "value": 31.230102335919355,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 31.228440934366873 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768ParseEncap/threads:1",
            "value": 35.919073940577654,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 35.915472913509966 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768ParseOnly/threads:1",
            "value": 13.546797917937218,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 13.538341408870716 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768PrivateKeyFromSeedOnly/threads:1",
            "value": 31.20720990389981,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 31.231614320760173 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndSign/2048/threads:1",
            "value": 764.8098360650544,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 764.7401693989717 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndSign/3072/threads:1",
            "value": 2224.529015873284,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2224.2259523813523 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndSign/4096/threads:1",
            "value": 4919.606655172284,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4919.622827585578 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndVerify/2048/threads:1",
            "value": 19.51839063805834,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 19.514431178595466 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndVerify/3072/threads:1",
            "value": 40.72701802851476,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 40.727066298346045 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndVerify/4096/threads:1",
            "value": 70.66231300402505,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 70.66249596774807 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAKeyGen/2048",
            "value": 72129.3009999897,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 72130.0069999984 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAKeyGen/3072",
            "value": 212152.7799999967,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 212153.15399999212 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAKeyGen/4096",
            "value": 707643.1999999783,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 707576.7150000018 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAParsePrivateKey/2048/threads:1",
            "value": 113.18658699187245,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 113.16738048781265 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAParsePrivateKey/3072/threads:1",
            "value": 226.04162019230938,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 226.04245192307627 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAParsePrivateKey/4096/threads:1",
            "value": 380.1182864865926,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 380.099910810904 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSASign/2048/threads:1",
            "value": 645.8836805554859,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 645.8849814816016 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSASign/3072/threads:1",
            "value": 1984.2734714286182,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1984.2890571429245 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSASign/4096/threads:1",
            "value": 4512.455741935502,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4512.468290322835 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAVerify/2048/threads:1",
            "value": 17.09534205721647,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 17.095423980526046 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAVerify/3072/threads:1",
            "value": 36.5870928050042,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 36.584402763295174 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAVerify/4096/threads:1",
            "value": 63.518670742749514,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 63.51563903986078 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:1350/threads:1",
            "value": 0.9082556341513173,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.9082571778437314 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:16/threads:1",
            "value": 0.6637971840730448,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.6637673282343866 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:16384/threads:1",
            "value": 3.1583616758117268,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.1581797472339996 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:256/threads:1",
            "value": 0.7004293090092151,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.7004315781581524 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:8192/threads:1",
            "value": 1.899534055475377,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.8993123966268988 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSLHDSA/threads:1",
            "value": 37126.58200001329,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 37125.04525000782 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSLHDSASign/threads:1",
            "value": 282882.93000002793,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 282872.6710000069 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSLHDSAVerify/threads:1",
            "value": 272.91148681547526,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 272.8049614604474 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSPAKE2/threads:1",
            "value": 121.207515125327,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 121.18421866896905 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedScrypt/(N = 1024, r = 8, p = 16)/threads:1",
            "value": 28601.251500020906,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 28601.451249997466 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedScrypt/(N = 16384, r = 8, p = 1)/threads:1",
            "value": 28641.870400019794,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 28640.331199994762 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSelfTest",
            "value": 4716.552033333225,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4716.589166667025 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/1350/threads:1",
            "value": 0.5415249359773988,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5415269591725109 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/16/threads:1",
            "value": 0.021187883764866394,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.021186121624666293 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/16384/threads:1",
            "value": 6.394218574493607,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.394139537006846 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/256/threads:1",
            "value": 0.11496256046491363,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.1149576731149182 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/8192/threads:1",
            "value": 3.206485027336817,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.206489534005768 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedTrustTokenKeyGen/SpeedTrustTokenKeyGen experiment_v1",
            "value": 1131.7099677411636,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1131.710233871049 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedTrustTokenKeyGen/SpeedTrustTokenKeyGen experiment_v2_pmb",
            "value": 1131.3327096780952,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1131.2918709677892 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedTrustTokenKeyGen/SpeedTrustTokenKeyGen experiment_v2_voprf",
            "value": 515.9421148147414,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 515.9450777777389 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedX509/threads:1",
            "value": 3.9750255892062034,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.974815068882826 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginIssueBatch1",
            "value": 629.308094170587,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 629.3080044842897 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginIssueBatch10",
            "value": 6274.605227270575,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6274.242090909029 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginRedeemBatch1",
            "value": 0.12738184288871157,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.12737312175201854 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginRedeemBatch10",
            "value": 0.1266130256603969,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.12660002882182186 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1FinishIssueBatch1",
            "value": 6989.299100001745,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6987.3292500005855 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1FinishIssueBatch10",
            "value": 25265.73816666655,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 25263.594166666793 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1IssueBatch1",
            "value": 6143.382608696435,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6142.904000000726 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1IssueBatch10",
            "value": 21923.655166659726,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 21923.95283333326 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1RedeemBatch1",
            "value": 1826.3268815791146,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1826.1057499999147 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1RedeemBatch10",
            "value": 1826.1100259746554,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1826.0079610390358 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginIssueBatch1",
            "value": 627.2955022421376,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 627.2063183856485 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginIssueBatch10",
            "value": 6274.674999998938,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6274.319545453141 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginRedeemBatch1",
            "value": 0.12175031785542223,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.12174543411786432 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginRedeemBatch10",
            "value": 0.11908612737484045,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.11907822872643124 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbFinishIssueBatch1",
            "value": 6968.618100000868,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6968.114349999866 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbFinishIssueBatch10",
            "value": 25245.91540000074,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 25241.99740000199 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbIssueBatch1",
            "value": 6149.244347825614,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6149.2728260868325 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbIssueBatch10",
            "value": 21939.95899999853,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 21935.227333334715 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbRedeemBatch1",
            "value": 1826.6076363631753,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1826.4620649356164 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbRedeemBatch10",
            "value": 1826.5252597398576,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1826.395311688323 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginIssueBatch1",
            "value": 628.2190762333857,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 628.1812421523258 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginIssueBatch10",
            "value": 6280.657499998329,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6280.717363635931 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginRedeemBatch1",
            "value": 0.11277767976238293,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.11274875973424364 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginRedeemBatch10",
            "value": 0.11310753649428477,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.11310111669381888 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfFinishIssueBatch1",
            "value": 2392.955949152126,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2392.9640847460196 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfFinishIssueBatch10",
            "value": 9034.495466664794,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 9033.948200000927 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfIssueBatch1",
            "value": 2329.0403333334098,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2329.0431333331676 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfIssueBatch10",
            "value": 8972.31568750101,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 8970.155437499016 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfRedeemBatch1",
            "value": 556.3331111109923,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 556.3324365077336 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfRedeemBatch10",
            "value": 556.3223784860161,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 556.2788844620092 us\nthreads: 1"
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
        "date": 1783761788696,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:1350",
            "value": 2.5989218201737807,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.598684700072424 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:16",
            "value": 0.6238781127654867,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.6238194317631489 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:16384",
            "value": 12.995971184233836,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.995019706264484 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:256",
            "value": 1.8446793165634945,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.8445744711659127 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:8192",
            "value": 7.335144840228493,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7.335131796751201 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:1350",
            "value": 2.7556390801910595,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.7554714226857895 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:16",
            "value": 0.7619328091375908,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.7618804258047642 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:16384",
            "value": 13.75397617413532,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 13.751771546229001 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:256",
            "value": 1.957394775668308,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.9573926257958452 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:8192",
            "value": 7.760954184485154,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7.760439384683717 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:1350",
            "value": 2.199368773059228,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.199236423581563 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:16",
            "value": 0.15489766652575376,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.1548973816571481 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:16384",
            "value": 24.609316760369502,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24.607927266342053 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:256",
            "value": 0.5107014293798731,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5106340860548688 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:8192",
            "value": 12.371094562436669,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.367689345201487 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:1350",
            "value": 2.2034538384029343,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.2029632061210376 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:16",
            "value": 0.15649761805961543,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.1564577643204422 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:16384",
            "value": 24.60923290561169,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24.607952891542226 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:256",
            "value": 0.5138504957065775,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5138218147642993 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:8192",
            "value": 12.368845337647501,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.366647154031135 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:1350",
            "value": 2.203041003999648,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.2027028784681413 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:16",
            "value": 0.1602089953728498,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.16019981403713301 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:16384",
            "value": 24.6088843585237,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24.60886994726846 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:256",
            "value": 0.5149895246540193,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5148898488121657 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:8192",
            "value": 12.373768558565473,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.373184835378758 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:1350",
            "value": 1.2785539501324648,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.2784332633118234 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:16",
            "value": 0.24485483473246633,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.24484199002859736 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:16384",
            "value": 12.485623652077006,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.485000534711956 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:256",
            "value": 0.4371607879894324,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.4370857571354796 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:8192",
            "value": 6.3632613811905285,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.3629265788278655 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:1350",
            "value": 2.2108106636789113,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.210564206140965 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:16",
            "value": 0.1611100016213199,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.16111065819294296 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:16384",
            "value": 24.621737557363478,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24.617679315216392 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:256",
            "value": 0.524910614567014,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5249112591915204 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:8192",
            "value": 12.391428343950125,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.389211252653224 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:1350",
            "value": 0.2951017771645824,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2950876984367728 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:16",
            "value": 0.10454812350788781,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.1045480339272266 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:16384",
            "value": 2.064975800638307,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.0648526854672133 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:256",
            "value": 0.12736622182260252,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.12734845495012906 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:8192",
            "value": 1.0901686852359669,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.0900840458842014 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:1350",
            "value": 0.502642342187097,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5025310168530025 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:16",
            "value": 0.1646851506349877,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.16468613531586124 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:16384",
            "value": 3.8651645919006574,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.8641835822129997 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:256",
            "value": 0.23283681439156428,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2327988007042761 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:8192",
            "value": 2.0088846661125497,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.0087269977348985 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:1350",
            "value": 0.31226001700225975,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.31223618465381714 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:16",
            "value": 0.10742677222964105,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.10742615918394001 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:16384",
            "value": 2.193208607254011,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.1929802776426714 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:256",
            "value": 0.13129253082160625,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.1312928468447193 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:8192",
            "value": 1.1421443837152647,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.1418715314273928 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:1350",
            "value": 2.65841547571613,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.6578663478144793 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:16",
            "value": 0.6288599741837704,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.628753769339783 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:16384",
            "value": 13.70465694715987,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 13.702321428571345 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:256",
            "value": 1.8563392622652475,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.856341848712809 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:8192",
            "value": 7.681253496406264,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7.680608182966718 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:1350",
            "value": 1.3195761221572384,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.319243043003463 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:16",
            "value": 0.24959977716612375,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2495684838534546 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:16384",
            "value": 12.83528327206064,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.834409926470675 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:256",
            "value": 0.4450136991092518,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.44490830373354245 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:8192",
            "value": 6.537529054841529,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.536708751459568 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:1350",
            "value": 2.6966652029879055,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.6964994607504513 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:16",
            "value": 0.19161494505260399,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.1915998924717845 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:16384",
            "value": 30.11028752415174,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 30.108448572040118 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:256",
            "value": 0.6353643286664432,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.6352762576866826 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:8192",
            "value": 15.113959788702516,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 15.11266601983797 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:1350",
            "value": 0.32684809186501323,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.3268274405749529 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:16",
            "value": 0.11063589864110153,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.11063537954986141 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:16384",
            "value": 2.317451315243495,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.317023151605632 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:256",
            "value": 0.1341514870271779,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.13413978545191324 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:8192",
            "value": 1.2069392255303302,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.2069392340540086 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:1350",
            "value": 0.5641330942940452,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5640166130913797 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:16",
            "value": 0.18320960963795274,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.18319853960926052 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:16384",
            "value": 4.392100460628141,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4.391785291261844 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:256",
            "value": 0.26397985519787354,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2639516002738773 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:8192",
            "value": 2.281317857433166,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.2812320247092686 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:1350",
            "value": 0.7549551144741439,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.7549013433365883 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:16",
            "value": 0.17167131390100707,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.17167221138278468 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:16384",
            "value": 6.940952709746875,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.940140877254033 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:256",
            "value": 0.26846397961414875,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.26843378814199803 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:8192",
            "value": 3.5581014894265044,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.557776052257086 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:1350",
            "value": 47.40366022380763,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 47.39985690064427 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:16",
            "value": 1.951624607833725,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.9510803017412723 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:16384",
            "value": 548.2344862745026,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 548.2338823529676 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:256",
            "value": 11.037893274739362,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 11.037890528133433 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:8192",
            "value": 275.2573215686612,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 275.26007450981473 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:1350",
            "value": 0.8774787323394807,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.877481283456107 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:16",
            "value": 0.297226008762799,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2972033475699438 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:16384",
            "value": 7.049016866377567,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7.047349008156104 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:256",
            "value": 0.3925972545317908,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.39256899351562896 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:8192",
            "value": 3.6780000000003716,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.6777293006166016 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:1350",
            "value": 2.161521814928099,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.161282544972102 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:16",
            "value": 0.2295797168136818,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.22957959563975303 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:16384",
            "value": 23.582328103915483,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 23.58242307692739 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:256",
            "value": 0.5919198657463679,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.591850619551218 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:8192",
            "value": 11.903454012240687,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 11.901950867051122 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:1350",
            "value": 2.2389426216418045,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.2387371489729397 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:16",
            "value": 0.23692234456833183,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.23692288673290532 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:16384",
            "value": 24.238397300577514,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24.237962969373143 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:256",
            "value": 0.6122300253694475,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.6122349590538967 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:8192",
            "value": 12.234651630389278,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.233947023340813 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:1350",
            "value": 2.2013096297456523,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.201311705054592 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:16",
            "value": 0.14971621129127657,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.14969477353441826 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:16384",
            "value": 24.58344122298669,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24.58351379371029 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:256",
            "value": 0.5073604861398694,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5073599328864128 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:8192",
            "value": 12.351151196671895,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.350224145544107 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:1350",
            "value": 2.20121726761054,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.2010639558636367 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:16",
            "value": 0.15688630775187284,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.15686946124503887 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:16384",
            "value": 24.589289729737263,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24.587162882880875 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:256",
            "value": 0.5069652586825916,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5069660132188891 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:8192",
            "value": 12.349834935191954,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.34982144431545 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:1350",
            "value": 2.202864923198257,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.202463694368169 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:16",
            "value": 0.1567886275607568,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.1567764980890127 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:16384",
            "value": 24.58423063411181,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24.58123028280143 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:256",
            "value": 0.5087129338455717,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.508657456856273 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:8192",
            "value": 12.352595524501075,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.351539359633144 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:1350",
            "value": 1.2674020255595,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.2673477119688592 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:16",
            "value": 0.23929644865644725,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2392963183885131 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:16384",
            "value": 12.484577540105846,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.483321925133819 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:256",
            "value": 0.43929935945718784,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.43929637967851565 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:8192",
            "value": 6.365922114555481,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.365312906601402 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:1350",
            "value": 2.208427300589635,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.20827536345755 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:16",
            "value": 0.15441393358730995,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.15441337783736192 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:16384",
            "value": 24.686104845811276,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24.678290220262596 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:256",
            "value": 0.5205325857819246,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5205338089802655 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:8192",
            "value": 12.373593849414355,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.37290261576409 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:1350",
            "value": 0.3021219825350172,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.30201413193844073 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:16",
            "value": 0.10145861179270889,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.10144561173679588 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:16384",
            "value": 2.1390379104478097,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.138889313432679 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:256",
            "value": 0.12555501013886233,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.12549803265037693 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:8192",
            "value": 1.0914063603147024,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.0912996671658937 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:1350",
            "value": 0.5603858284735991,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5603512221871028 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:16",
            "value": 0.13244876283932167,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.13244857157465775 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:16384",
            "value": 4.572105964156901,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4.571918878334831 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:256",
            "value": 0.22494711891887523,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.22490090983198988 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:8192",
            "value": 2.3579763739775856,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.3579862013259802 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:1350",
            "value": 0.31653519470855135,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.3165359123003872 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:16",
            "value": 0.10622648775017847,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.10620870963450203 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:16384",
            "value": 2.207788237562353,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.2075251168689407 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:256",
            "value": 0.1302067401919982,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.1301665894967058 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:8192",
            "value": 1.171395075605262,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.1713314818309186 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:1350",
            "value": 2.5892545723522824,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.58926344891335 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:16",
            "value": 0.24458541832380146,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2445618134760369 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:16384",
            "value": 28.687980729807368,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 28.68794013939957 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:256",
            "value": 0.681394770280844,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.6813273662021119 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:8192",
            "value": 14.460720355624524,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 14.46068923808672 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:1350",
            "value": 1.308991057633637,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.3089288543471753 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:16",
            "value": 0.24316119116969664,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.24313915518922988 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:16384",
            "value": 12.839860996423681,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.839377557572263 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:256",
            "value": 0.4430501121538258,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.44304611885130235 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:8192",
            "value": 6.53517246370049,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.5351734908258585 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:1350",
            "value": 2.6876793350983665,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.687522380896981 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:16",
            "value": 0.1854997768057061,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.18547789716692165 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:16384",
            "value": 30.075668888409968,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 30.07525048376632 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:256",
            "value": 0.6294086490428674,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.6293249939242531 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:8192",
            "value": 15.113281860362825,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 15.11336764864747 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:1350",
            "value": 0.34194097033855375,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.34194080172426466 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:16",
            "value": 0.11078280774918885,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.11077630125851927 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:16384",
            "value": 2.392885230195278,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.392752172524607 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:256",
            "value": 0.13478180478778473,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.13477361676918037 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:8192",
            "value": 1.2454540472519011,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.2452995207025959 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:1350",
            "value": 0.6352037085720377,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.6350888842555696 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:16",
            "value": 0.1494851461593972,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.14947925625715885 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:16384",
            "value": 5.222349111761206,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 5.222360317817252 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:256",
            "value": 0.24626218398183278,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.24626096717078175 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:8192",
            "value": 2.6905790184686054,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.6899841750776563 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:1350",
            "value": 0.8157629735996825,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.8157668341945287 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:16",
            "value": 0.18105173814852277,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.18103255968355314 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:16384",
            "value": 6.958302472513007,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.9572772996355186 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:256",
            "value": 0.2845858209562547,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2845502716728156 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:8192",
            "value": 3.582668558137783,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.581988932341104 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:1350",
            "value": 47.746780279767,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 47.73306311839185 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:16",
            "value": 1.607227283688435,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.6071191709247872 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:16384",
            "value": 566.4082307692624,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 566.3442226721797 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:256",
            "value": 9.910143544396238,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 9.909606579411982 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:8192",
            "value": 283.56314777327106,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 283.49990890687747 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:1350",
            "value": 0.9337174441773435,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.9337141790995531 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:16",
            "value": 0.30243323390448723,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.30236314407438974 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:16384",
            "value": 7.089943362831961,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7.089489658660036 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:256",
            "value": 0.4027387459345473,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.4027073224691319 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:8192",
            "value": 3.7249781977509224,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.7247364725755556 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockDecrypt<128>/threads:1",
            "value": 0.01590406549800337,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.01590302160972458 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockDecrypt<256>/threads:1",
            "value": 0.020866002033364393,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.02086401087717523 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockDecryptSetup<128>/threads:1",
            "value": 0.021561751140661802,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.02156072922162401 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockDecryptSetup<256>/threads:1",
            "value": 0.026154899185614797,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.02615230714175635 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockEncrypt<128>/threads:1",
            "value": 0.01590838263077214,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.015903330006046726 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockEncrypt<256>/threads:1",
            "value": 0.02088932719705192,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.02088944480927392 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockEncryptSetup<128>/threads:1",
            "value": 0.018340319019587412,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.01833912196191618 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockEncryptSetup<256>/threads:1",
            "value": 0.022027196498091588,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.022027161270070886 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedBase64/threads:1",
            "value": 6.2961671052038835,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.295781964947835 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedCurve25519ArbitraryPointMultiply/threads:1",
            "value": 41.587657236443285,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 41.58772602739068 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedCurve25519BasePointMultiply/threads:1",
            "value": 25.807862018076644,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 25.807861280205344 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDH/p224/threads:1",
            "value": 362.1911185567844,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 362.16707731958627 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDH/p256/threads:1",
            "value": 60.12315236051815,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 60.119777682403324 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDH/p384/threads:1",
            "value": 975.6597412584675,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 975.5170629367351 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDH/p521/threads:1",
            "value": 2403.6817068961154,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2403.6920862064608 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSASign/p224/threads:1",
            "value": 203.38175217398532,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 203.38254782606543 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSASign/p256/threads:1",
            "value": 19.81485031802154,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 19.810841978798194 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSASign/p384/threads:1",
            "value": 542.1500000000319,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 542.0190308880216 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSASign/p521/threads:1",
            "value": 1344.2467980772003,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1344.0812596156293 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSAVerify/p224/threads:1",
            "value": 197.41797733705533,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 197.40583002831508 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSAVerify/p256/threads:1",
            "value": 55.57409948474087,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 55.55518509711218 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSAVerify/p384/threads:1",
            "value": 543.1366235293755,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 543.0824666666635 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSAVerify/p521/threads:1",
            "value": 1351.5206601942798,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1351.3367766989584 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedEd25519/threads:1",
            "value": 26.896697580646357,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 26.8966973886361 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedEd25519Sign/threads:1",
            "value": 27.031469316872357,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 27.031620995758285 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedEd25519Verify/threads:1",
            "value": 48.72845173745313,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 48.72074201474272 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHRSSDecap/threads:1",
            "value": 29.204730552660116,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 29.202344316997614 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHRSSEncap/threads:1",
            "value": 10.640900341813769,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 10.640894644894225 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHRSSGenerate/threads:1",
            "value": 137.77137266471817,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 137.77213077679494 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:1350/threads:1",
            "value": 2.844820674338281,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.8438627700382906 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:16/threads:1",
            "value": 0.2849061983679219,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.284869294626631 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:16384/threads:1",
            "value": 32.78101638576232,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 32.781077013113986 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:256/threads:1",
            "value": 0.5347867780951447,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5347877326483697 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:8192/threads:1",
            "value": 16.39823230660712,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 16.397300258640712 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:1350/threads:1",
            "value": 0.8530458090203238,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.85301870651859 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:16/threads:1",
            "value": 0.05987521349353245,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.059874959499739595 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:16384/threads:1",
            "value": 9.703526439809432,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 9.70249698523682 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:256/threads:1",
            "value": 0.21202674084328177,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.21199637851284547 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:8192/threads:1",
            "value": 4.882301398037757,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4.881768225080497 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:1350/threads:1",
            "value": 0.9118028480041376,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.9117772928324358 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:16/threads:1",
            "value": 0.06505021116689824,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.06504037132908308 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:16384/threads:1",
            "value": 10.35023774310421,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 10.348962508320438 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:256/threads:1",
            "value": 0.22856610136274438,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.22855123090362645 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:8192/threads:1",
            "value": 5.209540581762132,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 5.208817065913633 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:1350/threads:1",
            "value": 2.6679789195060115,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.6676511530478537 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:16/threads:1",
            "value": 0.2828301460797047,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2827672692788957 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:16384/threads:1",
            "value": 30.637657762209365,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 30.629963652286207 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:256/threads:1",
            "value": 0.7635230319491598,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.7634302115034285 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:8192/threads:1",
            "value": 15.456969710365835,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 15.455688038911969 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHashToCurve/hash-to-curve P256_XMD:SHA-256_SSWU_RO_/threads:1",
            "value": 29.179049600676187,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 29.17486780159767 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHashToCurve/hash-to-curve P384_XMD:SHA-384_SSWU_RO_/threads:1",
            "value": 76.71233479451162,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 76.70798301369172 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHashToCurve/hash-to-scalar P384_XMD:SHA-512/threads:1",
            "value": 1.409516560618547,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.4095177165947907 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAKeyGen/ml_dsa_44/threads:1",
            "value": 71.48436238532744,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 71.47916207950868 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAKeyGen/ml_dsa_65/threads:1",
            "value": 129.90529166669546,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 129.89934074075413 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAKeyGen/ml_dsa_87/threads:1",
            "value": 183.06601436032415,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 183.04487206267322 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAParsePubKey/ml_dsa_44/threads:1",
            "value": 4.547503235457053,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4.5464088056447665 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAParsePubKey/ml_dsa_65/threads:1",
            "value": 6.601015060240527,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.600399190513155 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAParsePubKey/ml_dsa_87/threads:1",
            "value": 8.720509295528323,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 8.720044829944655 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSASign/ml_dsa_44/threads:1",
            "value": 249.26290760873826,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 249.23240942033843 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSASign/ml_dsa_65/threads:1",
            "value": 389.86078512401104,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 389.8622892561907 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSASign/ml_dsa_87/threads:1",
            "value": 455.9786979864644,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 455.93282550328627 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerify/ml_dsa_44/threads:1",
            "value": 59.345187552924216,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 59.333417019463724 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerify/ml_dsa_65/threads:1",
            "value": 93.5579464166215,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 93.51214467514572 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerify/ml_dsa_87/threads:1",
            "value": 157.48623337089793,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 157.46785231116317 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerifyBadSignature/ml_dsa_44/threads:1",
            "value": 59.39673861218253,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 59.38989910600339 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerifyBadSignature/ml_dsa_65/threads:1",
            "value": 93.46249231794354,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 93.45166466265547 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerifyBadSignature/ml_dsa_87/threads:1",
            "value": 157.23057014591535,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 157.23018630753964 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024DecapOnly/threads:1",
            "value": 42.53455009236271,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 42.53277899203822 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024EncapOnly/threads:1",
            "value": 29.276523481774387,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 29.262849092178595 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024KeyGenDecap/threads:1",
            "value": 86.45183817172692,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 86.44323965410325 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024KeyGenOnly/threads:1",
            "value": 44.51364912282142,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 44.511314513564834 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024ParseEncap/threads:1",
            "value": 49.309054712634996,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 49.310641369612505 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024ParseOnly/threads:1",
            "value": 20.907622020115213,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 20.886211710270743 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024PrivateKeyFromSeedOnly/threads:1",
            "value": 44.53566200259561,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 44.55420826707864 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768DecapOnly/threads:1",
            "value": 33.38588928835288,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 33.384107836089434 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768EncapOnly/threads:1",
            "value": 23.138052265848366,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 23.13545418469212 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768KeyGenDecap/threads:1",
            "value": 63.860476754787946,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 63.86058796720106 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768KeyGenOnly/threads:1",
            "value": 31.17354484753924,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 31.17189338972165 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768ParseEncap/threads:1",
            "value": 35.8133439896807,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 35.80347826089186 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768ParseOnly/threads:1",
            "value": 13.511179751505331,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 13.500538387764855 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768PrivateKeyFromSeedOnly/threads:1",
            "value": 31.186554589656875,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 31.21001671105765 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndSign/2048/threads:1",
            "value": 767.7963879780796,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 767.8000655736433 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndSign/3072/threads:1",
            "value": 2235.533096774317,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2235.5430322580933 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndSign/4096/threads:1",
            "value": 4949.4884642850175,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4949.184607142903 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndVerify/2048/threads:1",
            "value": 19.460804580146075,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 19.458986953505313 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndVerify/3072/threads:1",
            "value": 40.69385137881249,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 40.69182177068184 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndVerify/4096/threads:1",
            "value": 70.56864300099784,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 70.55801258810101 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAKeyGen/2048",
            "value": 59326.69000000601,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 59322.52249999692 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAKeyGen/3072",
            "value": 271087.6259999395,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 271036.11799998366 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAKeyGen/4096",
            "value": 617536.4970000032,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 617418.8450000031 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAParsePrivateKey/2048/threads:1",
            "value": 113.50199440448813,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 113.49290167863496 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAParsePrivateKey/3072/threads:1",
            "value": 227.50641666664689,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 227.5067644230233 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAParsePrivateKey/4096/threads:1",
            "value": 380.2042574526723,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 380.1587398373116 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSASign/2048/threads:1",
            "value": 644.1665023041428,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 644.1179354837935 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSASign/3072/threads:1",
            "value": 1981.7217605633798,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1981.7319154929464 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSASign/4096/threads:1",
            "value": 4505.126677418415,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4504.087322580349 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAVerify/2048/threads:1",
            "value": 17.03996561886021,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 17.039928045185846 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAVerify/3072/threads:1",
            "value": 36.60473077925754,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 36.604307010684764 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAVerify/4096/threads:1",
            "value": 63.50619900271998,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 63.502563463284055 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:1350/threads:1",
            "value": 0.9072754071367886,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.9071751530004047 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:16/threads:1",
            "value": 0.6603658134980658,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.660278497794294 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:16384/threads:1",
            "value": 3.150911417277753,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.150681084132998 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:256/threads:1",
            "value": 0.696946962977819,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.6969087547959296 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:8192/threads:1",
            "value": 1.8929303552591488,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.8929276766143512 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSLHDSA/threads:1",
            "value": 37064.079000003854,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 37057.330999999744 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSLHDSASign/threads:1",
            "value": 285019.272999989,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 285007.6459999968 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSLHDSAVerify/threads:1",
            "value": 275.8624269230946,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 275.860344230758 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSPAKE2/threads:1",
            "value": 120.97625951557438,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 120.96481574393245 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedScrypt/(N = 1024, r = 8, p = 16)/threads:1",
            "value": 28592.243600002123,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 28592.41860000026 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedScrypt/(N = 16384, r = 8, p = 1)/threads:1",
            "value": 28597.93320000108,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 28598.05319999964 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSelfTest",
            "value": 4710.318799999413,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4710.095866666582 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/1350/threads:1",
            "value": 0.541102266624887,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5410523097012447 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/16/threads:1",
            "value": 0.021166892101393855,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.021165419758361052 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/16384/threads:1",
            "value": 6.393627059843617,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.393642990824927 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/256/threads:1",
            "value": 0.1148786742490729,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.11485202513478063 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/8192/threads:1",
            "value": 3.2026822276068794,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.2024366284111756 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedTrustTokenKeyGen/SpeedTrustTokenKeyGen experiment_v1",
            "value": 1118.9194206342527,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1118.8162460313386 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedTrustTokenKeyGen/SpeedTrustTokenKeyGen experiment_v2_pmb",
            "value": 1119.3660559997625,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1119.1716880000513 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedTrustTokenKeyGen/SpeedTrustTokenKeyGen experiment_v2_voprf",
            "value": 507.6215507244797,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 507.5696413043357 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedX509/threads:1",
            "value": 3.9103303172479147,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.9095641476764778 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginIssueBatch1",
            "value": 619.0131327434353,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 618.9050707964262 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginIssueBatch10",
            "value": 6183.896565217943,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6183.420521739683 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginRedeemBatch1",
            "value": 0.12805230543392754,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.1280382550127374 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginRedeemBatch10",
            "value": 0.12619881821061077,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.12615937429360685 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1FinishIssueBatch1",
            "value": 6880.241349995231,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6879.487300000164 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1FinishIssueBatch10",
            "value": 24893.64500000117,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24893.592999999233 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1IssueBatch1",
            "value": 6058.528521741071,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6057.98569565106 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1IssueBatch10",
            "value": 21606.688333340193,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 21603.68399999394 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1RedeemBatch1",
            "value": 1807.6153506492365,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1807.5040129868685 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1RedeemBatch10",
            "value": 1808.493410256536,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1808.4722307688799 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginIssueBatch1",
            "value": 618.7336238938124,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 618.7328938053035 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginIssueBatch10",
            "value": 6184.701782609142,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6184.7183478280585 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginRedeemBatch1",
            "value": 0.12098623794199365,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.12096323441169973 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginRedeemBatch10",
            "value": 0.11807462464160014,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.11807374384605579 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbFinishIssueBatch1",
            "value": 6889.136550000785,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6888.523649999456 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbFinishIssueBatch10",
            "value": 24884.541666665427,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24881.11316666656 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbIssueBatch1",
            "value": 6057.449086955804,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6056.458478260905 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbIssueBatch10",
            "value": 21610.3539999987,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 21610.302999998035 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbRedeemBatch1",
            "value": 1807.8430909093645,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1807.79261038926 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbRedeemBatch10",
            "value": 1808.137448717727,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1807.7401025639351 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginIssueBatch1",
            "value": 620.1207066667141,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 620.0633688888502 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginIssueBatch10",
            "value": 6198.491347825676,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6198.481434783232 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginRedeemBatch1",
            "value": 0.11294623753918735,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.11293344743895727 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginRedeemBatch10",
            "value": 0.11314626655699637,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.11312037603808446 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfFinishIssueBatch1",
            "value": 2358.0874999993284,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2357.8726833335395 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfFinishIssueBatch10",
            "value": 8891.034874999094,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 8890.833749997995 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfIssueBatch1",
            "value": 2294.6140491803517,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2294.4572622951796 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfIssueBatch10",
            "value": 8826.319687500472,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 8825.199999996868 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfRedeemBatch1",
            "value": 547.4559570313176,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 547.3243476562528 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfRedeemBatch10",
            "value": 547.0181640625516,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 546.9448398438549 us\nthreads: 1"
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
        "date": 1783767632309,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:1350",
            "value": 2.6694745856150828,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.6694235287412957 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:16",
            "value": 0.6364030885252456,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.6363320096362721 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:16384",
            "value": 13.003920271023087,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 13.003013551141722 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:256",
            "value": 1.9311794622438692,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.9310045475087212 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha1/InputSize:8192",
            "value": 7.363832806239261,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7.363656915455326 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:1350",
            "value": 3.080207090293195,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.07988489842727 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:16",
            "value": 0.8153195339305136,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.8153033939441511 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:16384",
            "value": 15.781934740887083,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 15.780184599748553 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:256",
            "value": 2.141583586626337,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.1414556215728293 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_cbc_sha256/InputSize:8192",
            "value": 8.850262102133355,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 8.85003885338263 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:1350",
            "value": 1.6672057991009104,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.6668661306822756 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:16",
            "value": 0.11116217172010881,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.11115981436095865 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:16384",
            "value": 18.775386171772382,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 18.77203202465466 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:256",
            "value": 0.3863737909300982,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.3863553138260641 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth/InputSize:8192",
            "value": 9.432330076802927,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 9.43141961999699 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:1350",
            "value": 1.6712821218733034,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.6710562765919081 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:16",
            "value": 0.11517157348440146,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.11516870407585605 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:16384",
            "value": 18.77406917817187,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 18.77263721678402 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:256",
            "value": 0.3901127565557874,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.39003824685009886 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_bluetooth8/InputSize:8192",
            "value": 9.436075181892022,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 9.435867016976434 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:1350",
            "value": 1.6695602121703177,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.6693712497770952 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:16",
            "value": 0.11444534184104167,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.11444278708305859 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:16384",
            "value": 18.767625906037136,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 18.765642684562962 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:256",
            "value": 0.3890955411005172,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.38908655053273333 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ccm_matter/InputSize:8192",
            "value": 9.434391647016128,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 9.43414826541067 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:1350",
            "value": 1.4434021246966389,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.4432283327317916 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:16",
            "value": 0.2754791849190222,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.275446711620812 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:16384",
            "value": 14.193509066965715,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 14.190543815215408 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:256",
            "value": 0.5045037517606142,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5044913635659225 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_ctr_hmac_sha256/InputSize:8192",
            "value": 7.23092146948182,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7.230777152881229 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:1350",
            "value": 1.6846276443493553,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.6845044919361114 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:16",
            "value": 0.12015107532427215,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.12014805335769002 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:16384",
            "value": 18.820118650900653,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 18.816655468959727 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:256",
            "value": 0.3994546452262064,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.399427752486461 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_eax/InputSize:8192",
            "value": 9.47124646409928,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 9.4701995668965 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:1350",
            "value": 0.258763916916766,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.25875695295474266 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:16",
            "value": 0.09219276356664813,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.09218249398601866 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:16384",
            "value": 1.9245836504856508,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.9245353348141043 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:256",
            "value": 0.107569710192628,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.10756081386621494 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm/InputSize:8192",
            "value": 1.0062561824521592,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.006235937881252 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:1350",
            "value": 0.38713183020553793,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.38707536043211627 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:16",
            "value": 0.15584593594539017,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.15584166964173216 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:16384",
            "value": 2.574492729705715,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.573868511285725 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:256",
            "value": 0.21148011051062982,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.21144939213123512 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_128_gcm_siv/InputSize:8192",
            "value": 1.3626537674036834,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.3625419542920405 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:1350",
            "value": 0.26989119328657085,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.26986780273991745 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:16",
            "value": 0.09423927089087056,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.09423706004211553 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:16384",
            "value": 2.0710570911830546,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.07073535795019 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:256",
            "value": 0.11044998950963382,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.11044738631817791 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_192_gcm/InputSize:8192",
            "value": 1.0707147542234416,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.0706466630989524 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:1350",
            "value": 2.719892117950851,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.718955778427528 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:16",
            "value": 0.6390460123257246,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.6389709700982336 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:16384",
            "value": 13.588106934728334,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 13.587757187257429 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:256",
            "value": 1.9281692635636682,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.9281160970912379 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_cbc_sha1/InputSize:8192",
            "value": 7.658235702480599,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7.658067988980627 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:1350",
            "value": 1.4925599539551486,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.4924105540281014 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:16",
            "value": 0.27866037950114886,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.27865350791559956 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:16384",
            "value": 14.719195042535526,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 14.718782165738904 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:256",
            "value": 0.514295839997056,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5142418390043112 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_ctr_hmac_sha256/InputSize:8192",
            "value": 7.491582618025788,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7.4908793991414235 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:1350",
            "value": 2.0398150279749583,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.0397635796713107 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:16",
            "value": 0.14065002466857035,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.14064663839074532 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:16384",
            "value": 22.87057121855299,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 22.870060111073006 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:256",
            "value": 0.47987610788786683,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.47982031201964087 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_eax/InputSize:8192",
            "value": 11.501275088353735,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 11.500949617817447 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:1350",
            "value": 0.2832857035272258,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2832790518274454 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:16",
            "value": 0.09625005289785088,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.09623352610130372 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:16384",
            "value": 2.2269373233843064,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.226877440863675 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:256",
            "value": 0.1135792188154438,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.11356088448039185 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm/InputSize:8192",
            "value": 1.1493219078227925,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.149198378118665 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:1350",
            "value": 0.44174978902418416,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.4415847240940621 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:16",
            "value": 0.16969678154890488,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.16964634837798065 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:16384",
            "value": 3.047086440715232,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.047014323342646 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:256",
            "value": 0.230326023204317,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.23032030101884166 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_aes_256_gcm_siv/InputSize:8192",
            "value": 1.6047868371719682,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.6044802488586578 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:1350",
            "value": 0.8162185606568397,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.8161179605903857 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:16",
            "value": 0.1657830523770999,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.16576351355351537 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:16384",
            "value": 7.840400907208015,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7.839541244330609 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:256",
            "value": 0.27889280900533125,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.27887668257410586 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_chacha20_poly1305/InputSize:8192",
            "value": 4.000572196642948,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4.000248091057181 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:1350",
            "value": 45.46471085900498,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 45.45762722852524 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:16",
            "value": 1.878360418623713,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.877976908627515 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:16384",
            "value": 522.6235671642598,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 522.5668283581817 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:256",
            "value": 10.69205544478688,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 10.690183205521283 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_des_ede3_cbc_sha1/InputSize:8192",
            "value": 262.40727902628157,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 262.3896516853763 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:1350",
            "value": 0.9251989295333504,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.9251787904650224 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:16",
            "value": 0.2741869288139389,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.27414812391394916 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:16384",
            "value": 7.9603099039709235,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7.960114779249143 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:256",
            "value": 0.3868434502232432,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.3868340038017703 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/open_xchacha20_poly1305/InputSize:8192",
            "value": 4.115794737616305,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4.114643422019611 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:1350",
            "value": 1.8484822403477013,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.8479072020527947 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:16",
            "value": 0.2284200324865222,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2284143449013385 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:16384",
            "value": 19.713871362303298,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 19.712390974273756 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:256",
            "value": 0.5501259412711492,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.55005522928413 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha1/InputSize:8192",
            "value": 9.971341437406483,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 9.970021113243156 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:1350",
            "value": 2.0954198017128784,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.095291978673825 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:16",
            "value": 0.25788254373839775,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2578775306412086 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:16384",
            "value": 22.32954278416182,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 22.327559227331186 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:256",
            "value": 0.6136832963574297,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.6136663325037095 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_cbc_sha256/InputSize:8192",
            "value": 11.299152774415226,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 11.296129338809534 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:1350",
            "value": 1.66540313667445,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.6652221572394752 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:16",
            "value": 0.11086039297039162,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.11085090668750706 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:16384",
            "value": 18.779637545223707,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 18.779093796059026 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:256",
            "value": 0.3864647974715931,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.38643032850179976 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth/InputSize:8192",
            "value": 9.436632516703847,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 9.43421475332339 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:1350",
            "value": 1.6698026024425865,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.6696849448797693 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:16",
            "value": 0.11083689146940706,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.11080267897023849 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:16384",
            "value": 18.782887563656192,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 18.780510318951524 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:256",
            "value": 0.3865372961852452,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.38648855989234954 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_bluetooth8/InputSize:8192",
            "value": 9.435894995622832,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 9.43566403987399 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:1350",
            "value": 1.6656056817241096,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.665562521562097 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:16",
            "value": 0.11082146249113303,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.11080549256001199 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:16384",
            "value": 18.78212610560285,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 18.780093674619575 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:256",
            "value": 0.3870861444582794,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.38704818596615675 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ccm_matter/InputSize:8192",
            "value": 9.434089023569767,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 9.433857643097424 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:1350",
            "value": 1.4510122825715541,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.450568061174919 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:16",
            "value": 0.28683208979693764,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.28677830633199 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:16384",
            "value": 14.201760896007023,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 14.196195418609976 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:256",
            "value": 0.5142867640032658,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5142211464236933 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_ctr_hmac_sha256/InputSize:8192",
            "value": 7.240518941545823,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7.240067135252468 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:1350",
            "value": 1.6808360305929615,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.6806138483299005 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:16",
            "value": 0.11571652134900817,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.11569315562606503 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:16384",
            "value": 18.784285426457174,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 18.78326138347886 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:256",
            "value": 0.396068273035678,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.39605966082537 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_eax/InputSize:8192",
            "value": 9.443846875422913,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 9.443618167094264 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:1350",
            "value": 0.27851343129267486,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.27840926526661824 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:16",
            "value": 0.0894207978762056,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.0894186180512056 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:16384",
            "value": 1.979290738505237,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.9790596938278244 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:256",
            "value": 0.11183375506797799,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.11183119180782645 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm/InputSize:8192",
            "value": 1.0143116915829773,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.0141047219711912 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:1350",
            "value": 0.42624487482292944,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.4261314946592073 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:16",
            "value": 0.11066817116829737,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.11062733288719899 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:16384",
            "value": 2.9671241373479518,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.9667515559496707 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:256",
            "value": 0.1947192846877398,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.19468433913116173 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_128_gcm_siv/InputSize:8192",
            "value": 1.557248195397872,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.5569229443103436 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:1350",
            "value": 0.28347999500230137,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.28344148633886684 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:16",
            "value": 0.09344150321357844,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.09343468759715537 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:16384",
            "value": 2.0886355781036907,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.088353353997197 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:256",
            "value": 0.11560730709576397,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.1155998306313012 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_192_gcm/InputSize:8192",
            "value": 1.0880444518815642,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.08793188456492 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:1350",
            "value": 2.1506284049951345,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.149903420584448 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:16",
            "value": 0.23247841919722104,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.23247286298612385 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:16384",
            "value": 23.25667065669285,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 23.256195843719055 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:256",
            "value": 0.5987985062742212,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5987833882180675 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_cbc_sha1/InputSize:8192",
            "value": 11.755701817873883,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 11.75544066655457 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:1350",
            "value": 1.4985446725089528,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.4982453881255238 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:16",
            "value": 0.28800187897442625,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2879636533332767 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:16384",
            "value": 14.727215247116192,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 14.723444374343144 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:256",
            "value": 0.5240301609456476,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5240156866853833 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_ctr_hmac_sha256/InputSize:8192",
            "value": 7.504579759861798,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7.503832600771722 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:1350",
            "value": 2.0380517321618563,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.037852831669735 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:16",
            "value": 0.13704607755253048,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.13704304520851118 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:16384",
            "value": 22.859393423855828,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 22.858736136104 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:256",
            "value": 0.4742978441916061,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.474228512305535 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_eax/InputSize:8192",
            "value": 11.488656280754084,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 11.488427353229575 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:1350",
            "value": 0.299493864623353,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2994544354597035 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:16",
            "value": 0.09637470127013442,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.09637218420259547 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:16384",
            "value": 2.225099909570035,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.2250444198448722 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:256",
            "value": 0.11943895208150207,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.11943555729999106 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm/InputSize:8192",
            "value": 1.1522552936409796,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.152104317537062 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:1350",
            "value": 0.48857105082307256,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.4884993633595254 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:16",
            "value": 0.12304838067333268,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.12303993227951586 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:16384",
            "value": 3.566954193613882,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.5668809390437897 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:256",
            "value": 0.21772986519099014,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2177244239646544 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_aes_256_gcm_siv/InputSize:8192",
            "value": 1.8630731262643547,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.8628954141382559 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:1350",
            "value": 0.8745611413892391,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.8745378135017788 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:16",
            "value": 0.1750238818012749,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.1750192274648536 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:16384",
            "value": 7.934964233081473,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7.9347725881416995 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:256",
            "value": 0.29056433487089284,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.29053082072690883 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_chacha20_poly1305/InputSize:8192",
            "value": 4.066025910201778,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4.06529423054557 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:1350",
            "value": 46.36871948394201,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 46.35950082700103 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:16",
            "value": 1.5524945681030018,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.552460682360809 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:16384",
            "value": 550.7796862745778,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 550.7062941175639 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:256",
            "value": 9.638710005496012,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 9.638433686090075 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_des_ede3_cbc_sha1/InputSize:8192",
            "value": 275.03430648331874,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 274.9888742632825 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:1350",
            "value": 0.9911122039170365,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.990860715548374 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:16",
            "value": 0.2893166978053687,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.28928306174550067 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:16384",
            "value": 8.060303035540556,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 8.060097575024365 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:256",
            "value": 0.40710324923377456,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.40709303237615724 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAEAD/seal_xchacha20_poly1305/InputSize:8192",
            "value": 4.185850457815438,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4.184529660889941 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockDecrypt<128>/threads:1",
            "value": 0.011118007043595177,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.011117044529849582 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockDecrypt<256>/threads:1",
            "value": 0.014121083639062516,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.014120722039960712 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockDecryptSetup<128>/threads:1",
            "value": 0.024673097942849175,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.02467258932005302 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockDecryptSetup<256>/threads:1",
            "value": 0.032305477950412026,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.03230472858349112 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockEncrypt<128>/threads:1",
            "value": 0.011318510842575935,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.01131823789140874 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockEncrypt<256>/threads:1",
            "value": 0.014148137070625995,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.01414738261151201 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockEncryptSetup<128>/threads:1",
            "value": 0.0213102731217548,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.021309806096844446 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedAESBlockEncryptSetup<256>/threads:1",
            "value": 0.027067711091605055,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.027057199288928233 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedBase64/threads:1",
            "value": 5.996676450482724,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 5.99657331453434 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedCurve25519ArbitraryPointMultiply/threads:1",
            "value": 38.66057213792436,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 38.659608827590006 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedCurve25519BasePointMultiply/threads:1",
            "value": 23.23238212864767,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 23.231749668433206 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDH/p224/threads:1",
            "value": 323.28722119822163,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 323.2779009216649 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDH/p256/threads:1",
            "value": 59.4588191444108,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 59.44397501058844 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDH/p384/threads:1",
            "value": 969.4049930555336,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 969.2659305555493 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDH/p521/threads:1",
            "value": 2335.273516665855,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2334.9194499999726 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSASign/p224/threads:1",
            "value": 181.4046002586673,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 181.39993531694645 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSASign/p256/threads:1",
            "value": 19.69745037953298,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 19.69515729547292 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSASign/p384/threads:1",
            "value": 538.5800807692711,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 538.5691769230488 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSASign/p521/threads:1",
            "value": 1310.2686168223877,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1310.1326542056047 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSAVerify/p224/threads:1",
            "value": 170.0206314496513,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 170.01644717447869 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSAVerify/p256/threads:1",
            "value": 54.30714938079952,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 54.29848645511622 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSAVerify/p384/threads:1",
            "value": 530.637935606199,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 530.5714696969512 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedECDSAVerify/p521/threads:1",
            "value": 1317.0000188679596,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1316.8852830189953 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedEd25519/threads:1",
            "value": 24.211759820037717,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24.205485378092455 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedEd25519Sign/threads:1",
            "value": 24.460382845194307,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24.45626499302627 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedEd25519Verify/threads:1",
            "value": 47.654692616101464,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 47.65334480455071 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHRSSDecap/threads:1",
            "value": 28.54379655172619,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 28.54029006084994 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHRSSEncap/threads:1",
            "value": 8.958960383385685,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 8.955921214057813 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHRSSGenerate/threads:1",
            "value": 122.71547290211814,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 122.7128321678544 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:1350/threads:1",
            "value": 2.7568004799659764,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.756733265141808 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:16/threads:1",
            "value": 0.27008234270743353,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2699979100151801 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:16384/threads:1",
            "value": 31.845725516926606,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 31.84491865485127 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:256/threads:1",
            "value": 0.5195525165981157,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.5194648529357169 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/blake2b256/InputSize:8192/threads:1",
            "value": 15.954374357798368,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 15.952341819838377 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:1350/threads:1",
            "value": 0.8659349412491627,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.8659136363636328 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:16/threads:1",
            "value": 0.06254531328786876,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.06253652357928069 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:16384/threads:1",
            "value": 9.798849618799636,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 9.797014548506406 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:256/threads:1",
            "value": 0.21855002319562022,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2185453887371998 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha1/InputSize:8192/threads:1",
            "value": 4.935306321879576,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4.93486890566574 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:1350/threads:1",
            "value": 1.1017140241555037,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.1016149113225706 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:16/threads:1",
            "value": 0.0785897453707884,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.07858104113604575 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:16384/threads:1",
            "value": 12.406758193089965,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 12.406454915856072 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:256/threads:1",
            "value": 0.2806252790557882,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2805891258251854 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha256/InputSize:8192/threads:1",
            "value": 6.244745764222869,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.243947565541551 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:1350/threads:1",
            "value": 2.4507425370530727,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.450686136744836 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:16/threads:1",
            "value": 0.2662526421414785,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.2662364955092952 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:16384/threads:1",
            "value": 28.097074964932254,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 28.096504710364208 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:256/threads:1",
            "value": 0.6987049367680448,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.6986881182190071 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHash/sha512/InputSize:8192/threads:1",
            "value": 14.18388326571853,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 14.183522413791245 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHashToCurve/hash-to-curve P256_XMD:SHA-256_SSWU_RO_/threads:1",
            "value": 24.32423079597198,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24.3204443865162 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHashToCurve/hash-to-curve P384_XMD:SHA-384_SSWU_RO_/threads:1",
            "value": 74.51600585729209,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 74.51418849839872 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedHashToCurve/hash-to-scalar P384_XMD:SHA-512/threads:1",
            "value": 1.320156628548837,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.3200175769104465 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAKeyGen/ml_dsa_44/threads:1",
            "value": 76.36935188213971,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 76.364077468631 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAKeyGen/ml_dsa_65/threads:1",
            "value": 140.88766265051865,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 140.88506726910236 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAKeyGen/ml_dsa_87/threads:1",
            "value": 195.56333379889705,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 195.5435824022522 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAParsePubKey/ml_dsa_44/threads:1",
            "value": 4.6373056440227325,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4.6367914765087255 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAParsePubKey/ml_dsa_65/threads:1",
            "value": 6.884313892561666,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6.884132804466057 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAParsePubKey/ml_dsa_87/threads:1",
            "value": 9.171082962573088,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 9.168908204656052 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSASign/ml_dsa_44/threads:1",
            "value": 276.59446071431097,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 276.5870178571106 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSASign/ml_dsa_65/threads:1",
            "value": 418.0958005181098,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 418.0860595855081 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSASign/ml_dsa_87/threads:1",
            "value": 506.5031058020798,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 506.4895733788068 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerify/ml_dsa_44/threads:1",
            "value": 63.62939221969373,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 63.62775286041066 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerify/ml_dsa_65/threads:1",
            "value": 100.79463982748904,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 100.76357440690178 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerify/ml_dsa_87/threads:1",
            "value": 167.21201075271782,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 167.2078291517726 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerifyBadSignature/ml_dsa_44/threads:1",
            "value": 63.57347456857742,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 63.57182334241506 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerifyBadSignature/ml_dsa_65/threads:1",
            "value": 100.61060344827509,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 100.60816020114811 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLDSAVerifyBadSignature/ml_dsa_87/threads:1",
            "value": 167.1601644815571,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 167.12381644815767 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024DecapOnly/threads:1",
            "value": 44.731219239376315,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 44.743830616604306 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024EncapOnly/threads:1",
            "value": 30.280408255692457,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 30.269032850662068 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024KeyGenDecap/threads:1",
            "value": 90.82253631648415,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 90.81495006483883 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024KeyGenOnly/threads:1",
            "value": 46.168167710050525,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 46.151614827028574 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024ParseEncap/threads:1",
            "value": 50.8516529796087,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 50.852781250016044 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024ParseOnly/threads:1",
            "value": 20.894136925351066,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 20.875297514224272 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM1024PrivateKeyFromSeedOnly/threads:1",
            "value": 45.95423261129738,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 45.96813320210003 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768DecapOnly/threads:1",
            "value": 35.13477947767015,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 35.13011690958617 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768EncapOnly/threads:1",
            "value": 23.985709318067716,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 23.981720795024756 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768KeyGenDecap/threads:1",
            "value": 68.0008771930237,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 67.99859795321966 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768KeyGenOnly/threads:1",
            "value": 33.14066210477085,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 33.137604294482294 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768ParseEncap/threads:1",
            "value": 37.994362526797666,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 37.99824349204653 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768ParseOnly/threads:1",
            "value": 14.300456222230792,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 14.292769952225699 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedMLKEM768PrivateKeyFromSeedOnly/threads:1",
            "value": 32.817994148144166,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 32.82785744375597 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndSign/2048/threads:1",
            "value": 704.903804019845,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 704.8526683417924 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndSign/3072/threads:1",
            "value": 2038.7178985510732,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2038.6758115939524 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndSign/4096/threads:1",
            "value": 4444.796966667279,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4444.392000000144 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndVerify/2048/threads:1",
            "value": 18.290202005728872,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 18.28974680906474 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndVerify/3072/threads:1",
            "value": 37.73715204521275,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 37.73614666307855 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAImportKeyAndVerify/4096/threads:1",
            "value": 65.28329362492285,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 65.28140437411753 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAKeyGen/2048",
            "value": 79253.31000001279,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 79251.06549998872 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAKeyGen/3072",
            "value": 161370.7000000204,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 161350.27499996114 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAKeyGen/4096",
            "value": 493133.77899994754,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 493103.0120000059 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAParsePrivateKey/2048/threads:1",
            "value": 104.09497777779372,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 104.09228740741129 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAParsePrivateKey/3072/threads:1",
            "value": 212.17470241690864,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 212.1542885196452 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAParsePrivateKey/4096/threads:1",
            "value": 354.95484848491634,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 354.9280681818144 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSASign/2048/threads:1",
            "value": 593.2824181035973,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 593.2271853448476 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSASign/3072/threads:1",
            "value": 1810.805480519403,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1810.6255324675155 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSASign/4096/threads:1",
            "value": 4067.414117646622,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4067.041264706257 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAVerify/2048/threads:1",
            "value": 15.993076326150742,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 15.992673152652243 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAVerify/3072/threads:1",
            "value": 34.10285389452421,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 34.1016736816651 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRSAVerify/4096/threads:1",
            "value": 58.81343961554584,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 58.81182950271567 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:1350/threads:1",
            "value": 0.8012449824967033,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.8011422375512308 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:16/threads:1",
            "value": 0.6023971864669522,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.6023174868517532 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:16384/threads:1",
            "value": 2.7870778962450027,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2.7867666892108875 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:256/threads:1",
            "value": 0.6300061306559859,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.6299898703114778 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedRandom/InputSize:8192/threads:1",
            "value": 1.683612238777616,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1.6834811415821087 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSLHDSA/threads:1",
            "value": 45852.854999983116,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 45851.6460000169 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSLHDSASign/threads:1",
            "value": 348085.2680000339,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 348039.2599999505 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSLHDSAVerify/threads:1",
            "value": 337.1889278846505,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 337.17824278849224 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSPAKE2/threads:1",
            "value": 114.03097630721254,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 114.00995751633334 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedScrypt/(N = 1024, r = 8, p = 16)/threads:1",
            "value": 28028.576199994863,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 28023.47859999941 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedScrypt/(N = 16384, r = 8, p = 1)/threads:1",
            "value": 27954.79480000722,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 27951.007200000793 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSelfTest",
            "value": 4646.881966664296,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 4646.267333331858 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/1350/threads:1",
            "value": 0.6139931517058924,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.6139782099734289 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/16/threads:1",
            "value": 0.02150162699861255,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.02150051511627958 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/16384/threads:1",
            "value": 7.295261893597748,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 7.294658642071628 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/256/threads:1",
            "value": 0.12778649433071954,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.12777450435631812 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedSipHash/8192/threads:1",
            "value": 3.6546983563782742,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.6534810331325267 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedTrustTokenKeyGen/SpeedTrustTokenKeyGen experiment_v1",
            "value": 974.826249999931,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 974.7965416667547 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedTrustTokenKeyGen/SpeedTrustTokenKeyGen experiment_v2_pmb",
            "value": 975.933132867095,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 975.906426573589 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedTrustTokenKeyGen/SpeedTrustTokenKeyGen experiment_v2_voprf",
            "value": 503.61934532381827,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 503.5863201439772 us\nthreads: 1"
          },
          {
            "name": "BM_SpeedX509/threads:1",
            "value": 3.7916408951346696,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 3.7900142726348927 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginIssueBatch1",
            "value": 614.4970745614393,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 614.4740394736839 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginIssueBatch10",
            "value": 6138.649347826192,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6138.464869565041 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginRedeemBatch1",
            "value": 0.11362463234359092,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.11359649829115198 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1BeginRedeemBatch10",
            "value": 0.11339887151905331,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.11338207462550891 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1FinishIssueBatch1",
            "value": 6787.013333331785,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6786.780095237213 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1FinishIssueBatch10",
            "value": 24500.468833328647,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24496.219333334084 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1IssueBatch1",
            "value": 5844.753499999911,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 5843.391624999584 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1IssueBatch10",
            "value": 20959.53271428438,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 20956.894714288414 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1RedeemBatch1",
            "value": 1658.171916666956,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1657.6524761905039 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v1RedeemBatch10",
            "value": 1658.4254999996583,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1658.3667499997457 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginIssueBatch1",
            "value": 614.1613070174875,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 614.1477105263186 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginIssueBatch10",
            "value": 6140.079434781792,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6139.675608694787 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginRedeemBatch1",
            "value": 0.10502593782321899,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.10498814128062835 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbBeginRedeemBatch10",
            "value": 0.10425170259817383,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.10423678159173655 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbFinishIssueBatch1",
            "value": 6791.825619048029,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6789.039095237859 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbFinishIssueBatch10",
            "value": 24480.518166669186,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 24477.05083333318 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbIssueBatch1",
            "value": 5846.894416668154,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 5845.463375000767 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbIssueBatch10",
            "value": 20954.52900000185,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 20953.9115714311 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbRedeemBatch1",
            "value": 1658.1053571425875,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1658.048357143116 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_pmbRedeemBatch10",
            "value": 1657.537658823404,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 1657.4128352939465 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginIssueBatch1",
            "value": 612.8843070174745,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 612.8257192982214 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginIssueBatch10",
            "value": 6125.4978260886555,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 6125.362086955331 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginRedeemBatch1",
            "value": 0.10519592319842086,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.10519348804309338 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfBeginRedeemBatch10",
            "value": 0.1014413500169132,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 0.10143098247353115 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfFinishIssueBatch1",
            "value": 2331.567533333138,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2330.8746833336613 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfFinishIssueBatch10",
            "value": 8724.147749999745,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 8723.02243750056 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfIssueBatch1",
            "value": 2276.2406290320496,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 2275.9687258065524 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfIssueBatch10",
            "value": 8656.117499999284,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 8654.370062499695 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfRedeemBatch1",
            "value": 543.1045930232946,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 543.0872906977137 us\nthreads: 1"
          },
          {
            "name": "TrustTokenFixture/BM_SpeedTrustToken_experiment_v2_voprfRedeemBatch10",
            "value": 542.8520778208717,
            "unit": "us/iter",
            "extra": "iterations: 9\ncpu: 542.8376342413478 us\nthreads: 1"
          }
        ]
      }
    ]
  }
}