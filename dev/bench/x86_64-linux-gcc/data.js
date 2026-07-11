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
